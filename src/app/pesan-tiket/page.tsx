'use client';

import { useState } from 'react';
import { PACKAGES, formatRupiah } from '@/lib/packages';
import type { Order } from '@/lib/types';

export default function PesanTiketPage() {
  const [step, setStep] = useState<'form' | 'qris' | 'success'>('form');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [nama, setNama] = useState('');
  const [paket, setPaket] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jumlahPax, setJumlahPax] = useState(1);
  const [metode, setMetode] = useState<'QRIS' | 'TUNAI'>('QRIS');
  const [wantEmail, setWantEmail] = useState(false);
  const [email, setEmail] = useState('');

  const selectedPkg = PACKAGES.find((p) => p.id === paket);
  const totalHarga = selectedPkg ? selectedPkg.harga * jumlahPax : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (wantEmail && !email) { setError('Masukkan email.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nama, paket, tanggal, jumlahPax, metodePembayaran: metode, email: wantEmail ? email : undefined }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Gagal'); return; }

      setOrder(data.order);
      const msg = `Pesanan Baru: ${data.order.orderNumber}\nNama: ${nama}\nTotal: ${formatRupiah(totalHarga)}`;
      window.open(`https://wa.me/6285282828005?text=${encodeURIComponent(msg)}`, '_blank');

      if (metode === 'QRIS') setStep('qris');
      else setStep('success');
    } catch (err) {
      setError('Terjadi kesalahan koneksi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Pesan Tiket</h1>
        </div>

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-xl space-y-4">
            <input className="w-full p-3 rounded bg-white/10 text-white" placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} required />
            
            <select className="w-full p-3 rounded bg-white/10 text-white" value={paket} onChange={e => setPaket(e.target.value)} required>
              <option value="">Pilih Paket</option>
              {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="p-3 rounded bg-white/10 text-white" value={tanggal} onChange={e => setTanggal(e.target.value)} required />
              <input type="number" className="p-3 rounded bg-white/10 text-white" value={jumlahPax} onChange={e => setJumlahPax(Number(e.target.value))} required />
            </div>

            <div className="flex gap-4">
              {['QRIS', 'TUNAI'].map((m) => (
                <button key={m} type="button" onClick={() => setMetode(m as any)} className={`flex-1 p-3 rounded ${metode === m ? 'bg-sky-500' : 'bg-white/10'} text-white`}>{m}</button>
              ))}
            </div>

            <label className="flex items-center gap-2 text-white">
              <input type="checkbox" checked={wantEmail} onChange={e => setWantEmail(e.target.checked)} /> Kirim Email?
            </label>

            {wantEmail && <input type="email" className="w-full p-3 rounded bg-white/10 text-white" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />}

            <button type="submit" disabled={loading} className="w-full bg-sky-600 p-4 rounded-xl text-white font-bold">
              {loading ? 'Loading...' : 'Pesan Sekarang'}
            </button>
            {error && <p className="text-red-400">{error}</p>}
          </form>
        )}

        {step === 'qris' && order && (
          <div className="text-center bg-white/5 p-6 rounded-xl text-white">
            <h2 className="text-xl mb-4">Bayar QRIS</h2>
            {order.qrisData && <img src={order.qrisData} alt="QRIS" className="mx-auto mb-4 w-48 h-48" />}
            <button onClick={() => setStep('success')} className="w-full bg-green-600 p-3 rounded">Selesai Bayar</button>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold">Berhasil!</h2>
            <p>Silakan cek WhatsApp Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
