'use client';
import { useState } from 'react';
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
