// Cron: kirim e-tiket PDF otomatis ke email pelanggan 2 jam setelah jadwal keberangkatan.
// Dipanggil tiap ±10 menit oleh GitHub Actions (.github/workflows/send-tickets.yml) dan 1x/hari oleh Vercel Cron (cadangan).
// Wajib header:  Authorization: Bearer <CRON_SECRET>
import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { listOrders } from '@/lib/redis';
import { settleDueOrders } from '@/lib/autoSettle';
import { sendDueTickets } from '@/lib/autoTicket';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const got = Buffer.from(req.headers.get('authorization') ?? '');
  const want = Buffer.from(`Bearer ${secret}`);
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}

async function run(req: NextRequest) {
  if (!process.env.CRON_SECRET) return NextResponse.json({ error: 'CRON_SECRET belum diatur' }, { status: 500 });
  if (!authorized(req)) return NextResponse.json({ error: 'Tidak diizinkan' }, { status: 401 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: 'RESEND_API_KEY belum diatur' }, { status: 500 });

  const now = Date.now();
  // LUNAS otomatis dulu (tunai, ≥ 2 jam setelah berangkat), lalu kirim e-tiket PDF-nya
  const all = await settleDueOrders(await listOrders(500), now);
  const result = await sendDueTickets(all, now);
  return NextResponse.json({ ok: true, ...result });
}

export const GET = run;
export const POST = run;
