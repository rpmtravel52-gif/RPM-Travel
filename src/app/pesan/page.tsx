'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { formatRupiah, type TravelPackage } from '@/lib/packages';
import { usePackages } from '@/lib/usePackages';

// ─── Types ────────────────────────────────────────────────────
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

// ─── QRIS Modal ───────────────────────────────────────────────
function QrisModal({
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
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 mb-3">
            ✅ Pesanan Berhasil Dibuat
          </div>
          <h2 className="font-bold text-primary-900 text-xl">Scan QRIS untuk Bayar</h2>
          <p className="text-gray-500 text-xs mt-1">
            No. Pesanan: <span className="font-mono font-bold text-primary-900">{order.orderNumber}</span>
          </p>
        </div>

        {/* QR Code */}
        {order.qrisData ? (
          <div className="flex flex-col items-center mb-5">
            <div className="border-4 border-primary-900 rounded-2xl p-2 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={order.qrisData} alt="QRIS Code" className="w-52 h-52 object-contain" />
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-3 w-full text-center">
              <p className="text-gray-500 text-xs mb-1">Total Pembayaran</p>
              <p className="font-bold text-2xl text-primary-900">{formatRupiah(order.totalHarga)}</p>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 rounded-xl p-4 mb-5 text-center">
            <p className="text-red-600 text-sm font-medium">⚠️ QRIS tidak dapat ditampilkan</p>
            <p className="text-red-400 text-xs mt-1">Hubungi admin via WhatsApp</p>
          </div>
        )}

        {/* Info notifikasi WA terkirim */}
        <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-4 text-xs text-green-700 space-y-1">
          <p>📱 <strong>Notifikasi WA</strong> sudah dikirim ke nomor Anda!</p>
          <p>🔔 Kami akan konfirmasi setelah pembayaran diterima.</p>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-5 text-xs text-blue-700 space-y-1">
          <p>📌 <strong>Setelah bayar</strong>, kirim konfirmasi ke WhatsApp admin</p>
          <p>📧 Admin akan konfirmasi & kirim e-ticket ke email Anda</p>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={onWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Konfirmasi Bayar via WhatsApp
          </button>
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-xs transition-all"
          >
            {copied ? '✅ Disalin!' : '📋 Salin String QRIS'}
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-400 hover:text-gray-600 text-xs py-2 transition-all"
          >
            ✕ Tutup & Kembali ke Form
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Jadwal jam per paket ─────────────────────────────────────
const JADWAL: Record<string, string[] | null> = {
  'bengkulu-palembang': ['10.00', '16.00'],
  'palembang-bengkulu': ['10.00', '19.00'],
  'curup-palembang':    ['13.00', '20.00'],
  'palembang-curup':    ['10.00', '19.00'],
  'lebong-palembang':   ['10.00', '16.00'],
  'palembang-lebong':   ['10.00', '19.00'],
  'curup-lebong':       [],
  'lebong-curup':       [],
};

const ALL_JAM = ['06.00','07.00','08.00','09.00','10.00','11.00','12.00',
                 '13.00','14.00','15.00','16.00','17.00','19.00','20.00'];

// ─── Main Form ────────────────────────────────────────────────
function PesanForm() {
  const searchParams = useSearchParams();
  const paketFromUrl = searchParams.get('paket') ?? '';

  const { packages } = usePackages();

  const [selectedPkg, setSelectedPkg] = useState<TravelPackage | null>(null);
  const [form, setForm] = useState({
    nama: '',
    hp: '',
    paket: paketFromUrl,
    tanggal: '',
    jam: '',
    jumlahPax: 1,
    asal: '',
    tujuan: '',
    metode: 'QRIS' as 'QRIS' | 'TUNAI',
    wantEmail: false,
    email: '',
    catatan: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState('');
  const [createdOrder, setCreatedOrder] = useState<Order | null>(null);
  const [showQris, setShowQris]     = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const pkg = packages.find((p) => p.id === form.paket) ?? null;
    setSelectedPkg(pkg);
    setForm((prev) => ({ ...prev, jam: '' }));
  }, [form.paket, packages]);

  const jadwalPaket = form.paket ? (JADWAL[form.paket] ?? null) : undefined;
  const isSelalu    = Array.isArray(jadwalPaket) && jadwalPaket.length === 0;
  const jamOptions: string[] = jadwalPaket === null
    ? ALL_JAM
    : Array.isArray(jadwalPaket) ? jadwalPaket : [];

  const totalHarga = selectedPkg
    ? selectedPkg.kategori === 'sewa'
      ? selectedPkg.harga
      : selectedPkg.harga * form.jumlahPax
    : 0;

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const buildWhatsAppMessage = (order: Order) => {
    const tglFmt = new Date(order.tanggal).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
    const paxInfo =
      selectedPkg?.kategori === 'sewa'
        ? 'Durasi: 1 hari'
        : `Penumpang: ${order.jumlahPax} orang`;

    return [
      `🚌 *Pesanan RPM Travel Curup*`,
      ``,
      `No. Pesanan : ${order.orderNumber}`,
      `Nama       : ${order.nama}`,
      `Paket      : ${order.paket}`,
      `Tanggal    : ${tglFmt}`,
      form.jam ? `Jam        : ${form.jam} WIB` : '',
      paxInfo,
      `Jemput di  : ${form.asal}`,
      `Tujuan     : ${form.tujuan}`,
      `Bayar      : ${order.metodePembayaran}`,
      `Total      : ${formatRupiah(order.totalHarga)}`,
      order.metodePembayaran === 'QRIS' ? `\n✅ *Saya sudah melakukan pembayaran QRIS*` : '',
      form.catatan ? `Catatan    : ${form.catatan}` : '',
    ].filter(Boolean).join('\n');
  };

  const openWhatsApp = (order: Order) => {
    const msg = buildWhatsAppMessage(order);
    window.open(
      `https://wa.me/6285282828005?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  // ─── FUNGSI KIRIM NOTIFIKASI WA (BARU) ─────────────────────
  const sendWaNotification = async (order: Order) => {
    try {
      await fetch('/api/wa/notify-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber:      order.orderNumber,
          nama:             order.nama,
          hp:               order.hp,
          paket:            order.paket,
          tanggal:          order.tanggal,
          jam:              order.jam,
          jumlahPax:        order.jumlahPax,
          asal:             form.asal,
          tujuan:           form.tujuan,
          totalHarga:       order.totalHarga,
          metodePembayaran: order.metodePembayaran,
          email:            order.email,
          catatan:          order.catatan || form.catatan,
        }),
      });
      // Tidak perlu throw walaupun gagal — agar UX tidak terputus
    } catch (e) {
      console.error('[sendWaNotification] Gagal:', e);
    }
  };

  // ─── SUBMIT FORM ────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPkg) return;

    setSubmitting(true);
    setError('');

    try {
      // 1. Buat order di Redis
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama:             form.nama,
          hp:               form.hp,
          paket:            form.paket,
          tanggal:          form.tanggal,
          jam:              form.jam,
          jumlahPax:        form.jumlahPax,
          asal:             form.asal,
          tujuan:           form.tujuan,
          metodePembayaran: form.metode,
          email:            form.wantEmail ? form.email : undefined,
          catatan:          form.catatan || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Gagal membuat pesanan. Coba lagi.');
        return;
      }

      const order: Order = data.order;
      setCreatedOrder(order);

      // 2. Kirim notifikasi WA (tidak blocking — fire & forget)
      sendWaNotification(order);

      // 3. Tampilkan QRIS atau buka WA
      if (form.metode === 'QRIS') {
        setShowQris(true);
      } else {
        openWhatsApp(order);
      }
      setShowSuccess(true);
    } catch {
      setError('Koneksi bermasalah. Periksa internet Anda dan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  const travelAntarKota = packages.filter(
    (p) => p.kategori === 'travel' && !['curup-lebong', 'lebong-curup'].includes(p.id)
  );
  const travelLokal = packages.filter((p) =>
    ['curup-lebong', 'lebong-curup'].includes(p.id)
  );
  const sewa = packages.filter((p) => p.kategori === 'sewa');

  return (
    <>
      {/* Modal QRIS */}
      {showQris && createdOrder && (
        <QrisModal
          order={createdOrder}
          onWhatsApp={() => { openWhatsApp(createdOrder); }}
          onClose={() => setShowQris(false)}
        />
      )}

      <div className="min-h-screen bg-cream-50 pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <nav className="flex items-center justify-center gap-2 text-gold-600 text-xs font-semibold mb-4">
              <Link href="/" className="hover:text-gold-700">Beranda</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500">Pesan Tiket</span>
            </nav>
            <h1 className="font-display text-3xl font-bold text-primary-900 mb-2">
              🎫 Pesan Tiket Online
            </h1>
            <p className="text-gray-500 text-sm">
              Isi form di bawah — notifikasi otomatis ke WhatsApp Anda
            </p>
          </div>

          {/* Banner paket terpilih */}
          {selectedPkg && (
            <div className="bg-primary-900 rounded-2xl p-4 mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-0.5">
                  Paket Dipilih
                </p>
                <p className="text-white font-bold">{selectedPkg.label}</p>
                {selectedPkg.keterangan && (
                  <p className="text-gray-400 text-xs mt-0.5">{selectedPkg.keterangan}</p>
                )}
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-white font-bold text-lg">{formatRupiah(selectedPkg.harga)}</p>
                <p className="text-gray-400 text-xs">{selectedPkg.satuanLabel}</p>
              </div>
            </div>
          )}

          {/* Success banner */}
          {showSuccess && createdOrder && (
            <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">✅</span>
                <p className="text-green-800 font-bold text-base">Pesanan Berhasil Dikonfirmasi!</p>
              </div>
              <p className="text-green-700 text-sm mb-1">
                No. Pesanan: <span className="font-mono font-bold">{createdOrder.orderNumber}</span>
              </p>
              <p className="text-green-700 text-sm mb-3">
                Notifikasi WhatsApp telah dikirim ke nomor Anda. Apabila Anda tidak menerima WA secara otomatis, silahkan hubungi admin kami:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://wa.me/6285282828005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Admin 1
                </a>
                <a
                  href="https://wa.me/6285282828006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Admin 2
                </a>
              </div>
            </div>
          )}

          {/* Error banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-4 text-sm flex items-start gap-2">
              <span className="flex-shrink-0">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5"
          >
            {/* Nama */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Nama Lengkap *
              </label>
              <input
                type="text" name="nama" required value={form.nama} onChange={handleChange}
                placeholder="Contoh: Budi Santoso"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Nomor HP */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Nomor WhatsApp *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                  +62
                </span>
                <input
                  type="tel" name="hp" required value={form.hp} onChange={handleChange}
                  placeholder="8123456789"
                  pattern="[0-9]{8,13}"
                  className="flex-1 border border-gray-200 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <p className="text-gray-400 text-xs mt-1">
                📱 Notifikasi pesanan akan dikirim otomatis ke WhatsApp ini
              </p>
            </div>

            {/* Paket */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Paket Perjalanan *
              </label>
              <select
                name="paket" required value={form.paket} onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">-- Pilih Paket --</option>
                <optgroup label="✈️ Travel Antarkota">
                  {travelAntarKota.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label} — {formatRupiah(p.harga)}{p.satuanLabel}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="🗺️ Travel Lokal">
                  {travelLokal.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label} — {formatRupiah(p.harga)}{p.satuanLabel}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="🔑 Sewa Kendaraan">
                  {sewa.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label} — {formatRupiah(p.harga)}{p.satuanLabel}
                    </option>
                  ))}
                </optgroup>
              </select>
              {selectedPkg && (
                <div className="mt-2 flex items-center gap-2 text-xs bg-gold-50 border border-gold-200 rounded-lg px-3 py-2 text-gold-700">
                  <span>💰</span>
                  <span className="font-bold">{formatRupiah(selectedPkg.harga)}</span>
                  <span className="text-gray-500">{selectedPkg.satuanLabel}</span>
                  {selectedPkg.keterangan && (
                    <span className="text-gray-400 hidden sm:inline">· {selectedPkg.keterangan}</span>
                  )}
                </div>
              )}
            </div>

            {/* Tanggal & Jam */}
            <div className={`grid gap-4 ${isSelalu ? 'grid-cols-1' : 'grid-cols-2'}`}>
              <div>
                <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                  Tanggal *
                </label>
                <input
                  type="date" name="tanggal" required value={form.tanggal}
                  onChange={handleChange} min={today}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              {!isSelalu && (
                <div>
                  <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                    Jam Keberangkatan {jamOptions.length > 0 ? '*' : ''}
                  </label>
                  <select
                    name="jam"
                    value={form.jam}
                    onChange={handleChange}
                    required={jamOptions.length > 0}
                    disabled={!form.paket}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {!form.paket ? '-- Pilih paket dulu --' : '-- Pilih Jam --'}
                    </option>
                    {jamOptions.map((j) => (
                      <option key={j} value={j}>{j} WIB</option>
                    ))}
                  </select>
                  {jamOptions.length === 2 && (
                    <p className="mt-1.5 text-xs text-gray-400">
                      🕐 Tersedia {jamOptions.length} jadwal keberangkatan
                    </p>
                  )}
                </div>
              )}
            </div>

            {isSelalu && (
              <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-green-600 text-lg">🕐</span>
                <div>
                  <p className="text-green-800 text-sm font-semibold">Tersedia Setiap Jam</p>
                  <p className="text-green-600 text-xs mt-0.5">Rute ini berangkat setiap jam, tidak perlu memilih jam khusus.</p>
                </div>
              </div>
            )}

            {/* Jumlah Pax */}
            {selectedPkg?.kategori === 'travel' && (
              <div>
                <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                  Jumlah Penumpang *
                </label>
                <input
                  type="number" name="jumlahPax" required min={1} max={14}
                  value={form.jumlahPax} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            )}

            {/* Lokasi */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Lokasi Penjemputan *
              </label>
              <input
                type="text" name="asal" required value={form.asal} onChange={handleChange}
                placeholder="Contoh: Jl. Merdeka No. 10, Curup"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Tujuan / Drop Off *
              </label>
              <input
                type="text" name="tujuan" required value={form.tujuan} onChange={handleChange}
                placeholder="Contoh: Bandara SMB II Palembang"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Metode bayar */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-2">
                Metode Pembayaran *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(['QRIS', 'TUNAI'] as const).map((m) => (
                  <label
                    key={m}
                    className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 cursor-pointer transition-all ${
                      form.metode === m
                        ? 'border-primary-900 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio" name="metode" value={m} checked={form.metode === m}
                      onChange={() => setForm((p) => ({ ...p, metode: m }))}
                      className="sr-only"
                    />
                    <span className="text-2xl">{m === 'QRIS' ? '📱' : '💵'}</span>
                    <div>
                      <p className="font-bold text-primary-900 text-sm">{m}</p>
                      <p className="text-gray-400 text-xs">
                        {m === 'QRIS' ? 'Scan QR Code' : 'Bayar ke sopir'}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              {form.metode === 'QRIS' && (
                <p className="mt-2 text-xs text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2">
                  📱 QR Code tampil setelah form dikirim. Notifikasi WA otomatis terkirim ke nomor Anda.
                </p>
              )}
              {form.metode === 'TUNAI' && (
                <p className="mt-2 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                  💵 Notifikasi WA otomatis terkirim ke nomor Anda setelah pesanan dibuat.
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => setForm((p) => ({ ...p, wantEmail: !p.wantEmail }))}
              >
                <div
                  className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                    form.wantEmail ? 'bg-primary-900 border-primary-900' : 'border-gray-300'
                  }`}
                >
                  {form.wantEmail && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-primary-900 text-sm font-medium">Kirimkan invoice/tiket ke email saya</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Faktur & e-ticket dikirim otomatis setelah konfirmasi admin
                  </p>
                </div>
              </label>
            </div>
            {form.wantEmail && (
              <div className="border border-gold-300 bg-gold-50 rounded-xl p-4">
                <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                  Alamat Email *
                </label>
                <input
                  type="email" name="email" required={form.wantEmail} value={form.email}
                  onChange={handleChange} placeholder="nama@email.com"
                  className="w-full border border-gold-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            )}

            {/* Catatan */}
            <div>
              <label className="block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5">
                Catatan Tambahan
              </label>
              <textarea
                name="catatan" value={form.catatan} onChange={handleChange} rows={2}
                placeholder="Misal: ada bayi, bawa koper besar, dll."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Total */}
            {totalHarga > 0 && (
              <div className="bg-primary-900 rounded-xl px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {selectedPkg?.kategori === 'sewa'
                      ? 'Harga sewa per hari (all-in)'
                      : `${formatRupiah(selectedPkg?.harga ?? 0)} × ${form.jumlahPax} pax`}
                  </span>
                  <span className="text-white font-bold text-xl">{formatRupiah(totalHarga)}</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  {selectedPkg?.kategori === 'sewa'
                    ? '*Sudah termasuk BBM & sopir'
                    : '*Sudah termasuk antar jemput'}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!selectedPkg || submitting}
              className="w-full flex items-center justify-center gap-2 bg-primary-900 hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all"
            >
              {submitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Memproses Pesanan...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konfirmasi Pemesanan
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              📱 Notifikasi WA otomatis terkirim ke nomor Anda setelah pemesanan berhasil
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default function PesanPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-3 animate-pulse">⏳</div>
            <p className="text-gray-500 text-sm">Memuat...</p>
          </div>
        </div>
      }
    >
      <PesanForm />
    </Suspense>
  );
}
