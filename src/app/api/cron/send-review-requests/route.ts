// Cron: kirim email permintaan ulasan ke pelanggan (PAID, ≥12 jam setelah keberangkatan).
// Dipanggil terjadwal oleh Vercel Cron (lihat vercel.json) atau Upstash QStash.
// Wajib header:  Authorization: Bearer <CRON_SECRET>
import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getOrder, listOrders, updateOrder } from '@/lib/redis';
import {
  claimReviewSend, createReviewToken, isDueForReview, releaseReviewSend,
} from '@/lib/reviews';
import type { Order } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rpmtravel.co.id').replace(/\/$/, '');
const MAX_PER_RUN = 40; // batas aman waktu eksekusi & rate limit Resend

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const got = Buffer.from(req.headers.get('authorization') ?? '');
  const want = Buffer.from(`Bearer ${secret}`);
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}

function buildEmail(order: Order, token: string) {
  const link = `${SITE}/review?token=${encodeURIComponent(token)}`;
  const tgl = new Date(order.tanggal).toLocaleDateString('id-ID', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta',
  });
  const star = (n: number) =>
    `<a href="${link}&amp;rating=${n}" style="text-decoration:none;font-size:30px;color:#c9a84c;padding:0 3px" aria-label="${n} bintang">★</a>`;

  const html = `<!DOCTYPE html>
<html lang="id"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Bagaimana perjalanan Anda?</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)">
  <div style="background:#0c1a3a;padding:26px 32px">
    <h1 style="color:#fff;font-size:21px;font-weight:700;margin:0">🚌 RPM Travel Curup</h1>
  </div>
  <div style="padding:28px 32px;text-align:center">
    <p style="font-size:16px;color:#1e293b;margin:0 0 6px">Halo <strong>${esc(order.nama)}</strong>,</p>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 18px">
      Terima kasih telah bepergian bersama kami (${esc(order.paket)}, ${esc(tgl)}).
      Bagaimana pengalaman perjalanan Anda? Ulasan Anda sangat membantu kami dan calon penumpang lain.
    </p>
    <div style="margin:0 0 20px">${[1, 2, 3, 4, 5].map(star).join('')}</div>
    <a href="${link}" style="display:inline-block;background:#c9a84c;color:#0a1628;font-weight:700;font-size:15px;text-decoration:none;padding:13px 28px;border-radius:999px">
      Tulis Ulasan
    </a>
    <p style="font-size:12px;color:#64748b;margin:22px 0 0;line-height:1.6">
      Hanya butuh 1 menit. Anda bisa memilih tampil dengan nama &amp; foto, atau anonim.<br/>
      Jika tombol tidak berfungsi, salin tautan ini:<br/>
      <span style="word-break:break-all;color:#0c1a3a">${link}</span>
    </p>
  </div>
  <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center">
    <p style="font-size:11px;color:#94a3b8;margin:0">RPM Travel Curup · Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu</p>
    <p style="font-size:10px;color:#94a3b8;margin:4px 0 0">Email ini dikirim otomatis — mohon tidak membalas email ini</p>
  </div>
</div></body></html>`;

  return { html, subject: `Bagaimana perjalanan Anda bersama RPM Travel? ⭐` };
}

async function run(req: NextRequest) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'CRON_SECRET belum diatur' }, { status: 500 });
  }
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Tidak diizinkan' }, { status: 401 });
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND_API_KEY belum diatur' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const now = Date.now();
  const due = (await listOrders(500)).filter((o) => isDueForReview(o, now)).slice(0, MAX_PER_RUN);

  let sent = 0, failed = 0, skipped = 0;

  for (const order of due) {
    // Anti-ganda: hanya satu proses yang boleh mengirim untuk pesanan ini
    if (!(await claimReviewSend(order.id))) { skipped++; continue; }
    try {
      const token = await createReviewToken(order.id);
      const { html, subject } = buildEmail(order, token);
      const { error } = await resend.emails.send({
        from: 'RPM Travel <noreply@rpmtravel.co.id>',
        to: [order.email as string],
        subject,
        html,
      });
      if (error) {
        console.error('[review-cron] Resend error:', order.orderNumber, error);
        await releaseReviewSend(order.id); // boleh dicoba lagi di jadwal berikutnya
        failed++;
        continue;
      }
      // Email sudah terkirim → tandai (ambil data terbaru agar tidak menimpa perubahan lain)
      const fresh = (await getOrder(order.id)) ?? order;
      await updateOrder({ ...fresh, reviewEmailSent: true, reviewEmailSentAt: new Date().toISOString() });
      sent++;
    } catch (err) {
      console.error('[review-cron] Error:', order.orderNumber, err);
      failed++;
      // Jika email sempat terkirim lalu gagal menyimpan flag, kunci anti-ganda tetap ada → tidak terkirim ulang.
    }
    await new Promise((r) => setTimeout(r, 600)); // jaga rate limit Resend (±2 req/detik)
  }

  return NextResponse.json({ ok: true, due: due.length, sent, failed, skipped });
}

export const GET = run;
export const POST = run;
