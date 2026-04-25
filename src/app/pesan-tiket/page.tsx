'use client';
import { useState } from 'react'; // useEffect sudah dihapus dari sini
import { PACKAGES, formatRupiah } from '@/lib/packages';
import type { Order } from '@/lib/types';

type Step = 'form' | 'qris' | 'success';

export default function PesanTiketPage() {
  const [step, setStep] = useState<Step>('form');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [nama, setNama] = useState('');
  const [paket, setPaket] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jumlahPax, setJumlahPax] = useState(1);
  const [metode, setMetode] = useState<'QRIS' | 'TUNAI'>('QRIS');
  const [wantEmail, setWantEmail] = useState(false);
  const [email, setEmail] = useState('');

  const selectedPkg = PACKAGES.find((p) => p.id === paket);
  const totalHarga = selectedPkg ? selectedPkg.harga * jumlahPax : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (wantEmail && !email) { setError('Masukkan alamat email Anda.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, paket, tanggal, jumlahPax, metodePembayaran: metode, email: wantEmail ? email : undefined }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? 'Terjadi kesalahan.'); return; }

      setOrder(data.order);

      // Open WhatsApp
      const adminUrl = `${window.location.origin}/admin`;
      const msg = [
        `🚌 *Pesanan Baru RPM Travel*`,
        `No: ${data.order.orderNumber}`,
        `Nama: ${nama}`,
        `Paket: ${selectedPkg?.label}`,
        `Tgl: ${new Date(tanggal).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})}`,
        `Pax: ${jumlahPax} orang`,
        `Total: ${formatRupiah(totalHarga)}`,
        `Bayar: ${metode}`,
        ``,
        `📋 Dashboard Admin: ${adminUrl}`,
      ].join('\n');
      window.open(`https://wa.me/6285282828005?text=${encodeURIComponent(msg)}`, '_blank');

      if (metode === 'QRIS') setStep('qris');
      else setStep('success');
    } catch {
      setError('Gagal menghubungi server. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-10 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            🚌 RPM Travel Curup
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Pesan Tiket Online</h1>
          <p className="text-slate-400 text-sm">Isi form di bawah, konfirmasi via WhatsApp otomatis</p>
        </div>

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 space-y-5">

            {/* Nama */}
            <div>
              <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">Nama Lengkap *</label>
              <input
                type="text" required value={nama} onChange={e => setNama(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Paket */}
            <div>
              <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">Paket Perjalanan *</label>
              <select
                required value={paket} onChange={e => setPaket(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="" className="bg-slate-800">-- Pilih Paket --</option>
                {PACKAGES.map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-800">
                    {p.label} – {formatRupiah(p.harga)}/pax
                  </option>
                ))}
              </select>
            </div>

            {/* Tanggal & Pax */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">Tanggal Berangkat *</label>
                <input
                  type="date" required value={tanggal} onChange={e => setTanggal(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">Jumlah Penumpang *</label>
                <input
                  type="number" required min={1} max={30} value={jumlahPax} onChange={e => setJumlahPax(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div>
              <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">Metode Pembayaran *</label>
              <div className="grid grid-cols-2 gap-3">
                {(['QRIS', 'TUNAI'] as const).map(m => (
                  <label
                    key={m}
                    className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition-all ${
                      metode === m
                        ? 'border-sky-500 bg-sky-500/20 text-white'
                        : 'border-white/20 bg-white/5 text-slate-400 hover:border-white/40'
                    }`}
                  >
                    <input type="radio" name="metode" value={m} checked={metode === m} onChange={() => setMetode(m)} className="sr-only" />
                    <span className="text-lg">{m === 'QRIS' ? '📱' : '💵'}</span>
                    <div>
                      <p className="font-bold text-sm">{m}</p>
                      <p className="text-xs opacity-70">{m === 'QRIS' ? 'Bayar via QR Code' : 'Bayar ke sopir/agen'}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Email checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox" checked={wantEmail} onChange={e => setWantEmail(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-white/30 rounded peer-checked:border-sky-500 peer-checked:bg-sky-500 transition-all flex items-center justify-center">
                    {wantEmail && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>}
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Kirimkan saya invoice/kwitansi ke email</p>
                  <p className="text-slate-500 text-xs">Faktur & e-ticket akan dikirim otomatis ke email Anda</p>
                </div>
              </label>
            </div>

            {/* Email input — show only if checkbox checked */}
            {wantEmail && (
              <div className="animate-fade-in">
                <label className="block text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1.5">Alamat Email *</label>
                <input
                  type="email" required={wantEmail} value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full bg-white/10 border border-sky-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            )}

            {/* Total preview */}
            {totalHarga > 0 && (
              <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sky-300 text-sm">Estimasi Total</span>
                <span className="text-white font-bold text-lg">{formatRupiah(totalHarga)}</span>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full bg-sky-600 hover:bg-sky-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <><span className="animate-spin">⏳</span> Memproses...</>
              ) : (
                <><span>🎫</span> Pesan Sekarang</>
              )}
            </button>
          </form>
        )}

        {/* QRIS Payment Step */}
        {step === 'qris' && order && (
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <div className="text-4xl mb-2">📱</div>
            <h2 className="text-xl font-bold text-white">Bayar via QRIS</h2>
            <p className="text-slate-400 text-sm">Scan QR Code di bawah untuk membayar</p>

            {order.qrisData ? (
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={order.qrisData} alt="QRIS Code" className="w-56 h-56 rounded-xl border-4 border-white shadow-xl" />
              </div>
            ) : (
              <div className="w-56 h-56 mx-auto bg-white/10 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                QR Code tidak tersedia
              </div>
            )}

            <div className="bg-white/10 rounded-xl px-4 py-3">
              <p className="text-sky-400 text-xs uppercase tracking-wide mb-1">Total Pembayaran</p>
              <p className="text-white font-bold text-2xl">{formatRupiah(order.totalHarga)}</p>
            </div>

            <div className="text-left bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-200 space-y-1">
              <p className="font-bold">📋 Langkah Pembayaran:</p>
              <p>1. Scan QR Code dengan app bank / e-wallet</p>
              <p>2. Nominal sudah otomatis terisi: <strong>{formatRupiah(order.totalHarga)}</strong></p>
              <p>3. Konfirmasi & bayar</p>
              <p>4. Screenshot bukti & kirim ke admin WA</p>
            </div>

            <button
              onClick={() => setStep('success')}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all"
            >
              ✅ Saya Sudah Bayar
            </button>
          </div>
        )}

        {/* Success */}
        {step === 'success' && order && (
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <div className="text-5xl">🎉</div>
            <h2 className="text-xl font-bold text-white">Pesanan Diterima!</h2>
            <div className="bg-white/10 rounded-xl px-4 py-4 text-left space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-400">No. Pesanan</span><span className="text-white font-bold">{order.orderNumber}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Paket</span><span className="text-white">{order.paket}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Total</span><span className="text-sky-400 font-bold">{formatRupiah(order.totalHarga)}</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Status</span>
                <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full">MENUNGGU KONFIRMASI</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Admin kami akan mengonfirmasi pembayaran dan mengirimkan e-ticket setelah pembayaran terverifikasi.</p>
            <a href="https://wa.me/6285282828005" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8
