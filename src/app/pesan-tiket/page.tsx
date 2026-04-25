'use client';
import { useState } from 'react'; // Sudah saya hapus useEffect yang tidak terpakai
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
    if (wantEmail && !email) { 
      setError('Masukkan alamat email Anda.'); 
      return; 
    }
    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nama, 
          paket, 
          tanggal, 
          jumlahPax, 
          metodePembayaran: metode, 
          email: wantEmail ? email : undefined 
        }),
      });
      const data = await res.json();
      if (!res.ok) { 
        setError(data.error ?? 'Terjadi kesalahan.'); 
        return; 
      }

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
