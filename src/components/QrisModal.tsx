'use client';
import { useState } from 'react';

// ─── Types (sesuaikan dengan tipe Order di project Anda) ───────
interface Order {
  id: string;
  orderNumber: string;
  nama: string;
  hp: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  hargaPerPax: number;
  totalHarga: number;
  metodePembayaran: 'QRIS' | 'TUNAI';
  email?: string;
  asal?: string;
  tujuan?: string;
  catatan?: string;
  status: string;
  createdAt: string;
  qrisData?: string;
}

// ─── Helper format rupiah ──────────────────────────────────────
function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

// ─── QRIS Modal ───────────────────────────────────────────────
export function QrisModal({
  order,
  onWhatsApp,
  onClose,
}: {
  order: Order;
  onWhatsApp: () => void;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (order.qrisData) {
      navigator.clipboard.writeText(order.qrisData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full animate-in fade-in zoom-in duration-200 overflow-hidden">

        {/* ── Notifikasi pesanan berhasil ── */}
        <div className="bg-green-50 border-b border-green-100 px-4 py-2.5 flex items-center justify-center gap-2">
          <span className="text-green-600 text-xs font-bold">✅ Pesanan Berhasil Dibuat</span>
          <span className="text-gray-400 text-xs">·</span>
          <span className="text-gray-500 text-xs font-mono">{order.orderNumber}</span>
        </div>

        {/* ── QRIS Card (mirip standar QRIS Indonesia) ── */}
        <div className="relative bg-white mx-4 my-4 rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.10)] border border-gray-100">

          {/* Dekorasi segitiga merah kiri atas & kanan bawah */}
          <div
            className="absolute top-0 left-0 w-0 h-0 z-10"
            style={{
              borderStyle: 'solid',
              borderWidth: '56px 56px 0 0',
              borderColor: '#E02020 transparent transparent transparent',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-0 h-0 z-10"
            style={{
              borderStyle: 'solid',
              borderWidth: '0 0 56px 56px',
              borderColor: 'transparent transparent #E02020 transparent',
            }}
          />

          {/* Background pattern (opsional, subtle) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #000 0px, #000 1px,
                transparent 1px, transparent 8px
              )`,
            }}
          />

          {/* Header: Logo QRIS + GPN */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
            {/* Logo QRIS */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/qris-logo.png"
              alt="QRIS"
              className="h-8 object-contain"
              onError={(e) => {
                // Fallback teks jika logo tidak ada
                const t = e.currentTarget.parentElement;
                if (t) {
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.innerHTML = '<span style="font-weight:900;font-size:13px;color:#E02020;letter-spacing:-0.5px">QRIS</span>';
                  t.prepend(span);
                }
              }}
            />
            {/* Logo GPN */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gpn-logo.png"
              alt="GPN"
              className="h-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Nama Merchant & Info */}
          <div className="relative z-20 text-center px-5 pt-3 pb-2">
            <p className="font-black text-gray-900 text-base leading-tight tracking-tight">
              {/* Ganti dengan nama merchant Anda atau ambil dari env */}
              {process.env.NEXT_PUBLIC_MERCHANT_NAME ?? 'Bengkulu Travel'}
            </p>
            <p className="text-gray-400 text-[10px] mt-0.5 font-mono">
              No. Pesanan: {order.orderNumber}
            </p>
          </div>

          {/* QR Code */}
          <div className="relative z-20 flex justify-center px-6 py-3">
            {order.qrisData ? (
              <div className="bg-white rounded-xl p-2 shadow-inner border border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={order.qrisData}
                  alt="QRIS Code"
                  className="w-48 h-48 object-contain"
                />
              </div>
            ) : (
              <div className="w-48 h-48 rounded-xl border-2 border-dashed border-red-200 bg-red-50 flex items-center justify-center">
                <p className="text-red-500 text-xs text-center px-3">⚠️ QRIS tidak dapat ditampilkan</p>
              </div>
            )}
          </div>

          {/* Total Pembayaran */}
          <div className="relative z-20 text-center px-5 pb-2">
            <p className="text-gray-500 text-[11px] uppercase tracking-widest font-medium">Total Pembayaran</p>
            <p className="font-black text-gray-900 text-2xl mt-0.5">
              {formatRupiah(order.totalHarga)}
            </p>
          </div>

          {/* Footer: SATU QRIS UNTUK SEMUA */}
          <div className="relative z-20 bg-gray-50 border-t border-gray-100 text-center px-5 py-2.5">
            <p className="font-black text-gray-700 text-[11px] tracking-[0.15em] uppercase">
              SATU QRIS UNTUK SEMUA
            </p>
            <p className="text-gray-400 text-[9px] mt-0.5">
              Cek aplikasi penyelenggara di: www.aspi-qris.id
            </p>
          </div>
        </div>
        {/* ── End QRIS Card ── */}

        {/* ── Info & Tombol ── */}
        <div className="px-4 pb-4 space-y-2">

          {/* Info WA */}
          <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700 space-y-1">
            <p>📱 <strong>Notifikasi WA</strong> sudah dikirim ke nomor Anda!</p>
            <p>🔔 Kami akan konfirmasi setelah pembayaran diterima.</p>
          </div>

          {/* Info konfirmasi */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700 space-y-1">
            <p>📌 <strong>Setelah bayar</strong>, kirim konfirmasi ke WhatsApp admin</p>
            <p>📧 Admin akan konfirmasi &amp; kirim e-ticket ke email Anda</p>
          </div>

          {/* Tombol WhatsApp */}
          <button
            onClick={onWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konfirmasi Bayar via WhatsApp
          </button>

          {/* Tombol salin QRIS */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-xs transition-all"
          >
            {copied ? '✅ Disalin!' : '📋 Salin String QRIS'}
          </button>

          {/* Tutup */}
          <button
            onClick={onClose}
            className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-all"
          >
            ✕ Tutup &amp; Kembali ke Form
          </button>
        </div>

      </div>
    </div>
  );
}
