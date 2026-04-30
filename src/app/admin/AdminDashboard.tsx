'use client';
// src/app/admin/AdminDashboard.tsx
// Versi dengan dua tab: "Pesanan" dan "Update Tarif"

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import RatesTab from './RatesTab';

type PaymentMethod = 'QRIS' | 'TUNAI';
type OrderStatus   = 'UNPAID' | 'PAID';
type ActiveTab     = 'orders' | 'rates';

interface Order {
  id: string;
  orderNumber: string;
  nama: string;
  hp?: string;
  paket: string;
  tanggal: string;
  jam?: string;
  jumlahPax: number;
  hargaPerPax: number;
  totalHarga: number;
  metodePembayaran: PaymentMethod;
  email?: string;
  status: OrderStatus;
  createdAt: string;
  paidAt?: string;
  qrisData?: string;
}

function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(amount);
}

function normalizeHp(hp: string): string {
  const digits = hp.replace(/\D/g, '');
  if (digits.startsWith('0'))  return '62' + digits.slice(1);
  if (digits.startsWith('62')) return digits;
  return '62' + digits;
}

function StatusBadge({ status }: { status: OrderStatus }) {
  return status === 'PAID' ? (
    <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">
      ✓ LUNAS
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-500/30">
      ⏳ BELUM BAYAR
    </span>
  );
}

function OrderRow({ order, onRefresh }: { order: Order; onRefresh: () => void }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [invoiceLoading, setInvoiceLoading] = useState(false);
  const [ticketLoading,  setTicketLoading]  = useState(false);
  const [toast, setToast] = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleConfirm = async () => {
    if (!confirm(`Konfirmasi pesanan ${order.orderNumber} sebagai LUNAS?`)) return;
    setConfirmLoading(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/confirm`, { method: 'POST' });
      if (res.ok) { showToast('✅ Status diubah ke LUNAS'); onRefresh(); }
      else showToast('❌ Gagal konfirmasi');
    } finally { setConfirmLoading(false); }
  };

  const handleSendInvoice = async () => {
    if (!order.email) { showToast('⚠️ Email tidak tersedia'); return; }
    setInvoiceLoading(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/send-invoice`, { method: 'POST' });
      if (res.ok) showToast(`📧 Faktur dikirim ke ${order.email}`);
      else showToast('❌ Gagal kirim faktur');
    } finally { setInvoiceLoading(false); }
  };

  const handleSendTicket = async () => {
    if (!order.email) { showToast('⚠️ Email tidak tersedia'); return; }
    setTicketLoading(true);
    try {
      const res = await fetch(`/api/orders/${order.id}/send-ticket`, { method: 'POST' });
      if (res.ok) showToast(`🎫 E-Ticket dikirim ke ${order.email}`);
      else showToast('❌ Gagal kirim tiket');
    } finally { setTicketLoading(false); }
  };

  const buildWaInvoice = () => {
    const tgl = new Date(order.tanggal).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
    return [
      `🧾 *Invoice Pesanan - RPM Travel Curup*`,
      ``,
      `Yth. Bapak/Ibu *${order.nama}*,`,
      `Berikut detail tagihan pesanan Anda:`,
      ``,
      `📋 No. Pesanan : ${order.orderNumber}`,
      `🚌 Paket       : ${order.paket}`,
      `📅 Tanggal     : ${tgl}`,
      order.jam ? `🕐 Jam         : ${order.jam} WIB` : '',
      `👥 Penumpang   : ${order.jumlahPax} orang`,
      ``,
      `💰 *Total Tagihan : ${formatRupiah(order.totalHarga)}*`,
      `💳 Metode Bayar  : ${order.metodePembayaran}`,
      ``,
      order.metodePembayaran === 'QRIS'
        ? `Silakan lakukan pembayaran via QRIS, kemudian konfirmasi ke kami.`
        : `Pembayaran dilakukan tunai kepada sopir saat keberangkatan.`,
      ``,
      `Terima kasih telah memilih RPM Travel Curup 🙏`,
    ].filter(Boolean).join('\n');
  };

  const buildWaTiket = () => {
    const tgl = new Date(order.tanggal).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
    return [
      `🎫 *E-Ticket RPM Travel Curup*`,
      ``,
      `Halo *${order.nama}*, pembayaran Anda telah *LUNAS* ✅`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `📋 No. Tiket   : ${order.orderNumber}`,
      `🚌 Paket       : ${order.paket}`,
      `📅 Tanggal     : ${tgl}`,
      order.jam ? `🕐 Jam         : ${order.jam} WIB` : '',
      `👥 Penumpang   : ${order.jumlahPax} orang`,
      `💰 Total Bayar : ${formatRupiah(order.totalHarga)}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `📌 *Pastikan nomor HP Anda selalu aktif.*`,
      `🚗 Driver akan menghubungi Anda sebelum tiba untuk konfirmasi lokasi penjemputan.`,
      `📞 Info & perubahan jadwal hubungi admin.`,
      ``,
      `📄 *Tiket PDF* telah dikirim ke email Anda.`,
      order.email ? `📧 ${order.email}` : `⚠️ Pastikan Anda mengisi email dengan benar saat pemesanan.`,
      ``,
      `Selamat perjalanan! 🚌✨`,
      `_RPM Travel Curup_`,
    ].filter(Boolean).join('\n');
  };

  const waInvoiceUrl = order.hp
    ? `https://wa.me/${normalizeHp(order.hp)}?text=${encodeURIComponent(buildWaInvoice())}`
    : null;
  const waTiketUrl = order.hp
    ? `https://wa.me/${normalizeHp(order.hp)}?text=${encodeURIComponent(buildWaTiket())}`
    : null;
  const waAdminMsg = `Pesanan ${order.orderNumber} atas nama ${order.nama} — ${order.paket} tgl ${new Date(order.tanggal).toLocaleDateString('id-ID')} — Status: ${order.status === 'PAID' ? 'LUNAS ✓' : `Menunggu pembayaran ${formatRupiah(order.totalHarga)}`}`;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative hover:border-sky-500/30 transition-all">
      {toast && (
        <div className="absolute top-3 right-3 bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg z-10 animate-in fade-in duration-200">
          {toast}
        </div>
      )}

      {/* Baris atas: info pesanan */}
      <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-mono text-sky-400 text-xs font-bold">{order.orderNumber}</span>
            <StatusBadge status={order.status} />
          </div>
          <p className="text-white font-semibold">{order.nama}</p>
          {order.hp && (
            <p className="text-slate-400 text-xs mt-0.5">📱 {order.hp}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-white font-bold">{formatRupiah(order.totalHarga)}</p>
          <p className="text-slate-400 text-xs">{order.metodePembayaran}</p>
        </div>
      </div>

      {/* Detail paket */}
      <div className="bg-white/5 rounded-lg px-3 py-2 mb-4 text-xs text-slate-300 space-y-0.5">
        <p>🚌 {order.paket}</p>
        <p>📅 {new Date(order.tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}{order.jam ? ` · 🕐 ${order.jam} WIB` : ''}</p>
        <p>👥 {order.jumlahPax} penumpang · {formatRupiah(order.hargaPerPax)}/pax</p>
        {order.email && <p>📧 {order.email}</p>}
      </div>

      {/* Tombol aksi */}
      <div className="flex flex-wrap gap-2">
        {order.status === 'UNPAID' && (
          <button
            onClick={handleConfirm} disabled={confirmLoading}
            className="inline-flex items-center gap-1.5 bg-yellow-500/20 hover:bg-yellow-500/40 text-yellow-400 border border-yellow-500/30 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all disabled:opacity-50"
          >
            {confirmLoading ? '⏳' : '✅'} Konfirmasi Lunas
          </button>
        )}
        <button
          onClick={handleSendInvoice} disabled={invoiceLoading || !order.email}
          className="inline-flex items-center gap-1.5 bg-sky-500/20 hover:bg-sky-500/40 text-sky-400 border border-sky-500/30 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          title={!order.email ? 'Email tidak tersedia' : ''}
        >
          {invoiceLoading ? '⏳' : '📄'} Email Faktur
        </button>
        <button
          onClick={handleSendTicket} disabled={ticketLoading || !order.email || order.status !== 'PAID'}
          className="inline-flex items-center gap-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 border border-green-500/30 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          title={order.status !== 'PAID' ? 'Konfirmasi lunas dulu' : !order.email ? 'Email tidak tersedia' : ''}
        >
          {ticketLoading ? '⏳' : '🎫'} Email Tiket
        </button>

        {waInvoiceUrl && (
          <a href={waInvoiceUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WA Invoice
          </a>
        )}

        {waTiketUrl && order.status === 'PAID' ? (
          <a href={waTiketUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-green-600/30 hover:bg-green-600/50 text-green-300 border border-green-500/30 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WA Tiket ✓
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 bg-white/5 text-slate-600 border border-white/10 rounded-lg text-xs px-3 py-1.5 font-semibold cursor-not-allowed"
            title={order.status !== 'PAID' ? 'Konfirmasi lunas dulu' : 'Nomor HP tidak tersedia'}
          >
            WA Tiket
          </span>
        )}

        <a
          href={`https://wa.me/6285282828005?text=${encodeURIComponent(waAdminMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-slate-700/50 hover:bg-slate-600/70 text-slate-300 border border-slate-600/40 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WA Admin
        </a>
      </div>
    </div>
  );
}

// ── Tab: Daftar Pesanan ────────────────────────────────────────
function OrdersTab() {
  const [orders, setOrders]   = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]   = useState<'ALL' | 'UNPAID' | 'PAID'>('ALL');
  const [search, setSearch]   = useState('');

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const res  = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data.orders ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);
  useEffect(() => {
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  const filtered = orders.filter((o) => {
    const matchStatus = filter === 'ALL' || o.status === filter;
    const matchSearch = !search ||
      o.nama.toLowerCase().includes(search.toLowerCase()) ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.paket.toLowerCase().includes(search.toLowerCase()) ||
      (o.hp ?? '').includes(search);
    return matchStatus && matchSearch;
  });

  const unpaidCount  = orders.filter((o) => o.status === 'UNPAID').length;
  const paidCount    = orders.filter((o) => o.status === 'PAID').length;
  const totalRevenue = orders.filter((o) => o.status === 'PAID').reduce((s, o) => s + o.totalHarga, 0);

  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Pesanan', value: String(orders.length),      icon: '📋', color: 'text-white' },
          { label: 'Belum Bayar',   value: String(unpaidCount),        icon: '⏳', color: 'text-yellow-400' },
          { label: 'Lunas',         value: String(paidCount),          icon: '✅', color: 'text-green-400' },
          { label: 'Total Revenue', value: formatRupiah(totalRevenue), icon: '💰', color: 'text-sky-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-slate-400 text-xs mb-1">{s.icon} {s.label}</p>
            <p className={`font-bold text-lg ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="flex rounded-xl overflow-hidden border border-white/20">
          {(['ALL', 'UNPAID', 'PAID'] as const).map((f) => (
            <button
              key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs font-bold transition-all ${
                filter === f ? 'bg-sky-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {f === 'ALL' ? 'Semua' : f === 'UNPAID' ? '⏳ Belum Bayar' : '✅ Lunas'}
            </button>
          ))}
        </div>
        <input
          type="text" placeholder="Cari nama / no. pesanan / HP..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          onClick={fetchOrders}
          className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg border border-white/20 transition-all"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Daftar */}
      {loading ? (
        <div className="text-center py-20 text-slate-400">
          <div className="text-4xl mb-3 animate-pulse">⏳</div>
          <p>Memuat pesanan...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500 bg-white/5 rounded-2xl border border-white/10">
          <div className="text-4xl mb-3">📭</div>
          <p className="font-medium">Tidak ada pesanan</p>
          <p className="text-xs mt-1">Coba ubah filter atau buat pesanan baru</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((order) => (
            <OrderRow key={order.id} order={order} onRefresh={fetchOrders} />
          ))}
        </div>
      )}

      {/* Panduan */}
      <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">📌 Panduan Tombol:</p>
        <div className="space-y-1">
          <p><span className="text-yellow-400">✅ Konfirmasi Lunas</span> — Ubah status ke LUNAS (muncul jika belum bayar).</p>
          <p><span className="text-sky-400">📄 Email Faktur</span> — Kirim invoice ke email pelanggan.</p>
          <p><span className="text-green-400">🎫 Email Tiket</span> — Kirim e-ticket ke email (hanya aktif setelah LUNAS).</p>
          <p><span className="text-emerald-400">WA Invoice</span> — Kirim info tagihan ke WhatsApp pelanggan.</p>
          <p><span className="text-green-400">WA Tiket ✓</span> — Kirim konfirmasi lunas + tiket ke WhatsApp (hanya aktif setelah LUNAS).</p>
          <p><span className="text-slate-400">WA Admin</span> — Kirim info pesanan ke WhatsApp admin (koordinasi internal).</p>
        </div>
      </div>
    </>
  );
}

// ── Main AdminDashboard ────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab]       = useState<ActiveTab>('orders');
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const tabs: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'orders', label: 'Pesanan',      icon: '📋' },
    { id: 'rates',  label: 'Update Tarif', icon: '💰' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">🚌 Admin Dashboard</h1>
            <p className="text-slate-400 text-sm">RPM Travel Curup — Panel Manajemen</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/pesan"
              className="text-sm bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg transition-all font-semibold"
            >
              + Pesanan Baru
            </a>
            <button
              onClick={handleLogout} disabled={logoutLoading}
              className="text-sm bg-red-600/30 hover:bg-red-600/60 text-red-400 hover:text-red-300 px-3 py-2 rounded-lg border border-red-500/30 transition-all disabled:opacity-50"
            >
              {logoutLoading ? '⏳' : '🚪'} Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-xl overflow-hidden border border-white/20 mb-6 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && <OrdersTab />}
        {activeTab === 'rates'  && <RatesTab />}

      </div>
    </div>
  );
}
