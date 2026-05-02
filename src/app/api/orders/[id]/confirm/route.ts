// src/app/api/orders/[id]/confirm/route.ts
// Dipanggil dari dashboard admin saat klik "Konfirmasi Lunas"
// Yang terjadi:
//   1. Update status order di Redis → PAID
//   2. Fonnte kirim WA ke pemesan (notifikasi ke-2: tiket + detail)
//   3. Kirim email tiket via Resend (jika email tersedia)

import { NextRequest, NextResponse } from 'next/server';
import { getOrder, saveOrder } from '@/lib/redis';
import { sendWA, normalizeWaNumber } from '@/lib/fonnte';

// ─── Nomor admin (tampilkan di pesan ke pemesan) ───────────────
const ADMIN_NUMBERS: string[] = (process.env.ADMIN_WA_NUMBERS ?? '')
  .split(',')
  .map((n) => n.trim())
  .filter(Boolean);

// ─── Format Rupiah ─────────────────────────────────────────────
function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(amount);
}

// ─── Format tanggal ────────────────────────────────────────────
function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString('id-ID', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  });
}

// ─── Pesan ke PEMESAN (Notifikasi ke-2: konfirmasi lunas) ──────
function buildPesanKonfirmasi(order: {
  orderNumber: string;
  nama: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  totalHarga: number;
  metodePembayaran: string;
  email?: string;
}) {
  // Nomor yang ditampilkan ke pemesan (nomor CS/admin aktif, bukan owner)
  const adminWa1 = '6285282828005';
  const adminWa2 = '6285282828006';

  return [
    `🎫 *RPM Travel Curup — Konfirmasi Pembayaran*`,
    ``,
    `Halo *${order.nama}* 🎉`,
    `Pembayaran Anda telah *DITERIMA* dan pesanan sudah *DIKONFIRMASI*!`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `✅ *E-TICKET ANDA*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🎫 No. Tiket    : *${order.orderNumber}*`,
    `🚌 Paket        : ${order.paket}`,
    `📅 Tanggal      : ${formatTanggal(order.tanggal)}`,
    order.jam ? `🕐 Jam          : ${order.jam} WIB` : '',
    `👥 Penumpang    : ${order.jumlahPax} orang`,
    `💰 Total Dibayar: *${formatRupiah(order.totalHarga)}*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `📌 *Perhatian:*`,
    `• Pastikan nomor HP Anda *selalu aktif*`,
    `• Driver akan menghubungi Anda sebelum berangkat untuk konfirmasi lokasi penjemputan`,
    `• Harap datang *15 menit* sebelum jadwal keberangkatan`,
    ``,
    order.email
      ? `📧 *E-Ticket & Invoice* telah dikirim ke email:\n   ${order.email}`
      : `⚠️ Simpan pesan ini sebagai bukti tiket Anda.`,
    ``,
    `📞 *Butuh bantuan? Hubungi Admin:*`,
    `• WhatsApp Admin 1: wa.me/${adminWa1}`,
    `• WhatsApp Admin 2: wa.me/${adminWa2}`,
    ``,
    `Selamat perjalanan! 🚌✨`,
    `_RPM Travel Curup — Melayani dengan Sepenuh Hati_`,
  ].filter(Boolean).join('\n');
}

// ─── Kirim email tiket via Resend ──────────────────────────────
async function sendTicketEmail(order: {
  orderNumber: string;
  nama: string;
  hp?: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  hargaPerPax: number;
  totalHarga: number;
  metodePembayaran: string;
  email: string;
  catatan?: string;
}) {
  // Nomor yang ditampilkan ke pemesan (nomor CS/admin aktif, bukan owner)
  const adminWa1 = '6285282828005';
  const adminWa2 = '6285282828006';

  const tgl = new Date(order.tanggal).toLocaleDateString('id-ID', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  });

  const formatRp = (n: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

  const emailHtml = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>E-Ticket ${order.orderNumber}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)">

  <!-- Header -->
  <div style="background:#0c1a3a;padding:28px 32px">
    <h1 style="color:#fff;font-size:22px;font-weight:700;margin:0">🚌 RPM Travel Curup</h1>
    <p style="color:rgba(255,255,255,.7);font-size:12px;margin:4px 0 0">Jl. S. Parman, Kel. Talang Benih, Curup, Rejang Lebong, Bengkulu</p>
  </div>

  <!-- Ticket Badge -->
  <div style="background:#f0fdf4;border-bottom:2px dashed #16a34a;padding:16px 32px;display:flex;justify-content:space-between;align-items:center">
    <div>
      <span style="font-size:18px;font-weight:700;color:#15803d;letter-spacing:1px">✅ E-TICKET LUNAS</span>
    </div>
    <div style="text-align:right">
      <p style="font-size:12px;color:#64748b;margin:0">No. Tiket</p>
      <p style="font-size:14px;font-weight:800;color:#0c1a3a;margin:2px 0 0;font-family:monospace">${order.orderNumber}</p>
    </div>
  </div>

  <!-- Body -->
  <div style="padding:28px 32px">

    <!-- Salam -->
    <p style="font-size:15px;color:#1e293b;margin:0 0 20px">
      Halo <strong>${order.nama}</strong> 🎉<br/>
      Pembayaran Anda telah <strong>DITERIMA</strong> dan pesanan sudah dikonfirmasi. Berikut detail tiket perjalanan Anda.
    </p>

    <!-- Detail Perjalanan -->
    <div style="background:#f8fafc;border-left:4px solid #0c1a3a;border-radius:0 8px 8px 0;padding:14px 16px;margin-bottom:20px">
      <p style="font-size:10px;text-transform:uppercase;color:#94a3b8;font-weight:600;margin:0 0 10px;letter-spacing:.5px">Detail Perjalanan</p>
      <table style="width:100%;border-collapse:collapse;font-size:13px;color:#334155">
        <tr><td style="padding:3px 0;color:#64748b;width:140px">🚌 Paket</td><td style="font-weight:600">${order.paket}</td></tr>
        <tr><td style="padding:3px 0;color:#64748b">📅 Tanggal</td><td style="font-weight:600">${tgl}</td></tr>
        ${order.jam ? `<tr><td style="padding:3px 0;color:#64748b">🕐 Jam</td><td style="font-weight:600">${order.jam} WIB</td></tr>` : ''}
        <tr><td style="padding:3px 0;color:#64748b">👥 Penumpang</td><td style="font-weight:600">${order.jumlahPax} orang</td></tr>
        <tr><td style="padding:3px 0;color:#64748b">💳 Metode Bayar</td><td style="font-weight:600">${order.metodePembayaran}</td></tr>
        ${order.catatan ? `<tr><td style="padding:3px 0;color:#64748b">📝 Catatan</td><td>${order.catatan}</td></tr>` : ''}
      </table>
    </div>

    <!-- Total Box -->
    <div style="background:#0c1a3a;color:#fff;padding:14px 20px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
      <span style="font-weight:700;font-size:14px">💰 TOTAL DIBAYAR</span>
      <span style="font-weight:800;font-size:18px">${formatRp(order.totalHarga)}</span>
    </div>

    <!-- Info Penting -->
    <div style="background:#fefce8;border:1px solid #fde047;border-radius:8px;padding:14px 16px;margin-bottom:24px">
      <p style="font-size:11px;text-transform:uppercase;color:#a16207;font-weight:600;margin:0 0 8px;letter-spacing:.5px">📌 Informasi Penting</p>
      <ul style="font-size:12px;color:#713f12;margin:0;padding-left:16px;line-height:1.8">
        <li>Pastikan nomor HP Anda <strong>selalu aktif</strong></li>
        <li>Driver akan menghubungi Anda sebelum berangkat untuk konfirmasi lokasi</li>
        <li>Harap tiba di lokasi penjemputan <strong>15 menit</strong> sebelum jadwal</li>
        <li>Simpan email ini sebagai bukti pembayaran</li>
      </ul>
    </div>

    <!-- Kontak Admin -->
    <div style="text-align:center;border-top:1px solid #e2e8f0;padding-top:20px">
      <p style="font-size:12px;color:#64748b;margin:0 0 8px">Butuh bantuan? Hubungi Admin RPM Travel:</p>
      <p style="font-size:13px;font-weight:600;color:#0c1a3a;margin:0">
        📞 ${adminWa1.replace('62', '0')} &nbsp;|&nbsp; ${adminWa2.replace('62', '0')}
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center">
    <p style="font-size:11px;color:#94a3b8;margin:0">RPM Travel Curup · Jl. S. Parman, Kel. Talang Benih, Curup, Rejang Lebong, Bengkulu</p>
    <p style="font-size:10px;color:#cbd5e1;margin:4px 0 0">Email ini digenerate otomatis — mohon tidak membalas email ini</p>
  </div>

</div>
</body>
</html>`;

  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'RPM Travel <noreply@rpmtravel.co.id>',
    to: [order.email],
    subject: `🎫 E-Ticket ${order.orderNumber} — RPM Travel Curup`,
    html: emailHtml,
  });

  if (error) {
    console.error('[confirm/email] Resend error:', error);
    return false;
  }

  return true;
}

// ─── Handler POST ──────────────────────────────────────────────
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);

    if (!order) {
      return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    }

    if (order.status === 'PAID') {
      return NextResponse.json({ error: 'Order sudah dikonfirmasi sebelumnya' }, { status: 400 });
    }

    // 1. Update status ke PAID di Redis
    const updatedOrder = {
      ...order,
      status: 'PAID' as const,
      paidAt: new Date().toISOString(),
    };
    await saveOrder(updatedOrder);

    const results: { wa: boolean; email: boolean } = { wa: false, email: false };

    // 2. Kirim WA ke pemesan (notifikasi ke-2)
    if (order.hp) {
      const hpNormalized = normalizeWaNumber(order.hp);
      const pesanKonfirmasi = buildPesanKonfirmasi({
        orderNumber:      order.orderNumber,
        nama:             order.nama,
        paket:            order.paket,
        tanggal:          order.tanggal,
        jam:              order.jam,
        jumlahPax:        order.jumlahPax,
        totalHarga:       order.totalHarga,
        metodePembayaran: order.metodePembayaran,
        email:            order.email,
      });

      const rWa = await sendWA(hpNormalized, pesanKonfirmasi);
      results.wa = rWa.success;
    }

    // 3. Kirim email tiket (jika ada email)
    if (order.email) {
      results.email = await sendTicketEmail({
        orderNumber:      order.orderNumber,
        nama:             order.nama,
        hp:               order.hp,
        paket:            order.paket,
        tanggal:          order.tanggal,
        jam:              order.jam,
        jumlahPax:        order.jumlahPax,
        hargaPerPax:      order.hargaPerPax,
        totalHarga:       order.totalHarga,
        metodePembayaran: order.metodePembayaran,
        email:            order.email,
        catatan:          order.catatan,
      });
    }

    return NextResponse.json({
      success: true,
      order:   updatedOrder,
      results,
    });
  } catch (err) {
    console.error('[confirm] Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
