'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type PaymentMethod = 'QRIS' | 'TUNAI';
type OrderStatus = 'UNPAID' | 'PAID';

interface Order {
  id: string;
  orderNumber: string;
  nama: string;
  paket: string;
  tanggal: string;
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
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
}

function StatusBadge({ status }: { status: OrderStatus }) {
  return status === 'PAID' ? (
    <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-1 rounded-full border border-green-500/30">✓ LUNAS</span>
  ) : (
    <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-500/30">⏳ BELUM BAYAR</span>
  );
}

function OrderRow({ order, onRefresh }: { order: Order; onRefresh: () => void }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [invoiceLoading, setInvoiceLoading] = useState(false);
  const [ticketLoading, setTicketLoading] = useState(false);
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

  const waMsg = `Halo ${order.nama}, pesanan Anda ${order.orderNumber} (${order.paket}) pada ${new Date(order.tanggal).toLocaleDateString('id-ID')} sudah ${order.status === 'PAID' ? 'LUNAS ✓' : `diterima. Silakan lakukan pembayaran sebesar ${formatRupiah(order.totalHarga)}`}.`;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 relative hover:border-sky-500/30 transition-all">
      {toast && (
        <div className="absolute top-3 right-3 bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 z-10">
          {toast}
        </div>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white text-sm font-mono">{order.orderNumber}</span>
            <StatusBadge status={order.status} />
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
              order.metodePembayaran === 'QRIS'
                ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
            }`}>{order.metodePembayaran}</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            {new Date(order.createdAt).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <p className="text-sky-400 font-bold text-xl">{formatRupiah(order.totalHarga)}</p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
        <div><p className="text-slate-500 uppercase tracking-wide mb-0.5">Nama</p><p className="text-white font-semibold">{order.nama}</p></div>
        <div><p className="text-slate-500 uppercase tracking-wide mb-0.5">Paket</p><p className="text-white font-semibold">{order.paket}</p></div>
        <div><p className="text-slate-500 uppercase tracking-wide mb-0.5">Tanggal</p><p className="text-white font-semibold">{new Date(order.tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</p></div>
        <div><p className="text-slate-500 uppercase tracking-wide mb-0.5">Pax / Harga</p><p className="text-white font-semibold">{order.jumlahPax} × {formatRupiah(order.hargaPerPax)}</p></div>
      </div>
      {order.email && <p className="text-slate-500 text-xs mb-3">📧 {order.email}</p>}

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
        <button
          onClick={handleSendInvoice}
          disabled={invoiceLoading || !order.email}
          className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-500 transition-all"
        >
          {invoiceLoading ? '⏳' : '📄'} {invoiceLoading ? 'Mengirim...' : 'Kirim Faktur'}
        </button>

        {order.status === 'UNPAID' && (
          <button
            onClick={handleConfirm}
            disabled={confirmLoading}
            className="inline-flex items-center gap-1.5 bg-yellow-600 hover:bg-yellow-500 disabled:opacity-40 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-yellow-500 transition-all"
          >
            {confirmLoading ? '⏳' : '✅'} {confirmLoading ? 'Memproses...' : 'Konfirmasi Lunas'}
          </button>
        )}

        <button
          onClick={handleSendTicket}
          disabled={order.status !== 'PAID' || ticketLoading || !order.email}
          title={order.status !== 'PAID' ? 'Konfirmasi lunas terlebih dahulu' : ''}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all
            ${order.status === 'PAID'
              ? 'bg-green-600 hover:bg-green-500 text-white border-green-500 disabled:opacity-40'
              : 'bg-white/5 text-slate-600 border-white/10 cursor-not-allowed'
            }`}
        >
          {ticketLoading ? '⏳' : '🎫'} {ticketLoading ? 'Mengirim...' : 'Kirim E-Ticket'}
        </button>

        <a
          href={`https://wa.me/6285282828005?text=${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-green-800/40 hover:bg-green-700/60 text-green-300 border border-green-700/40 rounded-lg text-xs px-3 py-1.5 font-semibold transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WA
        </a>

        {!order.email && (
          <span className="text-xs text-slate-600 self-center italic">* Email tidak tersedia</span>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'UNPAID' | 'PAID'>('ALL');
  const [search, setSearch] = useState('');
  const [logoutLoading, setLogoutLoading] = useState(false);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/orders');
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

  const handleLogout = async () => {
    setLogoutLoading(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const filtered = orders.filter(o => {
    const matchStatus = filter === 'ALL' || o.status === filter;
    const matchSearch = !search ||
      o.nama.toLowerCase().includes(search.toLowerCase()) ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.paket.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const unpaidCount = orders.filter(o => o.status === 'UNPAID').length;
  const paidCount = orders.filter(o => o.status === 'PAID').length;
  const totalRevenue = orders.filter(o => o.status === 'PAID').reduce((s, o) => s + o.totalHarga, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">🚌 Admin Dashboard</h1>
            <p className="text-slate-400 text-sm">RPM Travel Curup — Manajemen Pesanan</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchOrders} className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg border border-white/20 transition-all">
              🔄 Refresh
            </button>
            <a href="/pesan-tiket" className="text-sm bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg transition-all font-semibold">
              + Pesanan Baru
            </a>
            {/* Tombol Logout */}
            <button
              onClick={handleLogout}
              disabled={logoutLoading}
              className="text-sm bg-red-600/30 hover:bg-red-600/60 text-red-400 hover:text-red-300 px-3 py-2 rounded-lg border border-red-500/30 transition-all disabled:opacity-50"
            >
              {logoutLoading ? '⏳' : '🚪'} Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Pesanan', value: String(orders.length), icon: '📋', color: 'text-white' },
            { label: 'Belum Bayar', value: String(unpaidCount), icon: '⏳', color: 'text-yellow-400' },
            { label: 'Lunas', value: String(paidCount), icon: '✅', color: 'text-green-400' },
            { label: 'Total Revenue', value: formatRupiah(totalRevenue), icon: '💰', color: 'text-sky-400' },
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-slate-400 text-xs mb-1">{s.icon} {s.label}</p>
              <p className={`font-bold text-lg ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filter & Search */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex rounded-xl overflow-hidden border border-white/20">
            {(['ALL', 'UNPAID', 'PAID'] as const).map(f => (
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
            type="text" placeholder="Cari nama / nomor pesanan..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Orders */}
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
            {filtered.map(order => (
              <OrderRow key={order.id} order={order} onRefresh={fetchOrders} />
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-300 mb-2">📌 Panduan Tombol:</p>
          <div className="space-y-1">
            <p><span className="text-sky-400">📄 Kirim Faktur</span> — Selalu aktif. Kirim invoice PDF ke email pelanggan.</p>
            <p><span className="text-yellow-400">✅ Konfirmasi Lunas</span> — Muncul hanya jika status BELUM BAYAR. Ubah status ke LUNAS.</p>
            <p><span className="text-green-400">🎫 Kirim E-Ticket</span> — Hanya aktif setelah status LUNAS. Kirim tiket dengan watermark LUNAS.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
