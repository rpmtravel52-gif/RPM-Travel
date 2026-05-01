// src/app/api/wa/notify-booking/route.ts
// Dipanggil dari /pesan setelah order berhasil dibuat.
// Kirim WA notifikasi ke:
//   1. Pemesan  → "Pesanan diterima, kami akan konfirmasi segera"
//   2. Admin 1 & 2 → "Ada booking masuk, cek & konfirmasi pembayaran"

import { NextRequest, NextResponse } from 'next/server';
import { sendWA, normalizeWaNumber } from '@/lib/fonnte';

// ─── Nomor admin (dari .env.local) ────────────────────────────
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

// ─── Pesan ke PEMESAN (Notifikasi ke-1) ───────────────────────
function buildPesanPemesan(data: {
  orderNumber: string;
  nama: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  asal?: string;
  tujuan?: string;
  totalHarga: number;
  metodePembayaran: string;
  catatan?: string;
}) {
  const adminWa1 = ADMIN_NUMBERS[0] ?? '6281373336728';
  const adminWa2 = ADMIN_NUMBERS[1] ?? '6285282828005';

  return [
    `🚌 *RPM Travel Curup*`,
    ``,
    `Halo *${data.nama}* 👋`,
    `Pesanan Anda telah *berhasil diterima* dan sedang kami proses.`,
    ``,
    `📋 *Detail Pesanan:*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🔖 No. Pesanan  : *${data.orderNumber}*`,
    `🚌 Paket        : ${data.paket}`,
    `📅 Tanggal      : ${formatTanggal(data.tanggal)}`,
    data.jam ? `🕐 Jam          : ${data.jam} WIB` : '',
    `👥 Penumpang    : ${data.jumlahPax} orang`,
    data.asal   ? `📍 Penjemputan  : ${data.asal}`  : '',
    data.tujuan ? `🏁 Tujuan       : ${data.tujuan}` : '',
    `💳 Pembayaran   : ${data.metodePembayaran}`,
    `💰 Total        : *${formatRupiah(data.totalHarga)}*`,
    data.catatan ? `📝 Catatan      : ${data.catatan}` : '',
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    data.metodePembayaran === 'QRIS'
      ? `📱 Silakan lakukan pembayaran via *QRIS* yang sudah ditampilkan di website, kemudian tunggu konfirmasi dari kami.`
      : `💵 Pembayaran dilakukan *tunai* kepada sopir saat keberangkatan.`,
    ``,
    `⏳ Tim kami akan *mengkonfirmasi pesanan Anda segera*.`,
    ``,
    `📞 *Hubungi Admin:*`,
    `• WhatsApp Admin 1: wa.me/${adminWa1}`,
    `• WhatsApp Admin 2: wa.me/${adminWa2}`,
    ``,
    `Terima kasih telah mempercayakan perjalanan Anda kepada *RPM Travel Curup* 🙏`,
  ].filter(Boolean).join('\n');
}

// ─── Pesan ke ADMIN ────────────────────────────────────────────
function buildPesanAdmin(data: {
  orderNumber: string;
  nama: string;
  hp: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  asal?: string;
  tujuan?: string;
  totalHarga: number;
  metodePembayaran: string;
  email?: string;
  catatan?: string;
}) {
  return [
    `📢 *ADA BOOKING MASUK — RPM Travel Curup*`,
    ``,
    `🆕 Pesanan baru dari website!`,
    ``,
    `📋 *Data Pemesan:*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🔖 No. Pesanan  : *${data.orderNumber}*`,
    `👤 Nama         : *${data.nama}*`,
    `📱 WhatsApp     : ${data.hp}`,
    data.email ? `📧 Email        : ${data.email}` : '',
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `🚌 Paket        : ${data.paket}`,
    `📅 Tanggal      : ${formatTanggal(data.tanggal)}`,
    data.jam ? `🕐 Jam          : ${data.jam} WIB` : '',
    `👥 Penumpang    : ${data.jumlahPax} orang`,
    data.asal   ? `📍 Penjemputan  : ${data.asal}`  : '',
    data.tujuan ? `🏁 Tujuan       : ${data.tujuan}` : '',
    `💳 Pembayaran   : *${data.metodePembayaran}*`,
    `💰 Total        : *${formatRupiah(data.totalHarga)}*`,
    data.catatan ? `📝 Catatan      : ${data.catatan}` : '',
    `━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    data.metodePembayaran === 'QRIS'
      ? `⚠️ *Metode QRIS* — Segera cek bukti pembayaran dari pelanggan.\nSetelah pembayaran diterima, tekan tombol *✅ Konfirmasi Lunas* di dashboard admin untuk mengirim tiket otomatis.`
      : `💵 *Metode TUNAI* — Pembayaran dilakukan saat keberangkatan.`,
    ``,
    `🔗 Dashboard: ${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/admin`,
  ].filter(Boolean).join('\n');
}

// ─── Handler POST ──────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      orderNumber, nama, hp, paket, tanggal, jam,
      jumlahPax, asal, tujuan, totalHarga,
      metodePembayaran, email, catatan,
    } = body;

    if (!orderNumber || !nama || !hp) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    const pesanPemesan = buildPesanPemesan({
      orderNumber, nama, paket, tanggal, jam,
      jumlahPax, asal, tujuan, totalHarga, metodePembayaran, catatan,
    });

    const pesanAdmin = buildPesanAdmin({
      orderNumber, nama, hp, paket, tanggal, jam,
      jumlahPax, asal, tujuan, totalHarga, metodePembayaran, email, catatan,
    });

    // Normalisasi nomor HP pemesan
    const hpNormalized = normalizeWaNumber(hp);

    // Kirim ke pemesan
    const rPemesan = await sendWA(hpNormalized, pesanPemesan);

    // Kirim ke semua admin (jika ada nomor admin di env)
    let rAdmin = { success: true };
    if (ADMIN_NUMBERS.length > 0) {
      rAdmin = await sendWA(ADMIN_NUMBERS, pesanAdmin);
    } else {
      console.warn('[notify-booking] ADMIN_WA_NUMBERS belum di-set di .env.local');
    }

    return NextResponse.json({
      success: true,
      pemesan: rPemesan,
      admin:   rAdmin,
    });
  } catch (err) {
    console.error('[notify-booking] Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
