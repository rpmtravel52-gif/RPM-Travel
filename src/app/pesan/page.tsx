'use client';
import { useState } from 'react';
import Link from 'next/link';

const routes = [
  { value: 'curup-palembang', label: 'Curup → Palembang' },
  { value: 'palembang-curup', label: 'Palembang → Curup' },
  { value: 'curup-lebong',    label: 'Curup → Lebong' },
  { value: 'lebong-curup',    label: 'Lebong → Curup' },
  { value: 'sewa-bus',        label: 'Sewa Bus Wisata' },
];

export default function PesanPage() {
  const [form, setForm] = useState({
    nama: '', rute: '', tanggal: '', jam: '', penumpang: '1', asal: '', tujuan: '', catatan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const routeLabel = routes.find(r => r.value === form.rute)?.label ?? form.rute;
    const msg = [
      `Halo RPM Travel, saya ingin memesan travel:`,
      ``,
      `📋 *Detail Pemesanan*`,
      `Nama      : ${form.nama}`,
      `Rute      : ${routeLabel}`,
      `Tanggal   : ${form.tanggal}`,
      `Jam       : ${form.jam} WIB`,
      `Penumpang : ${form.penumpang} orang`,
      `Jemput di : ${form.asal}`,
      `Tujuan    : ${form.tujuan}`,
      form.catatan ? `Catatan   : ${form.catatan}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/6285282828005?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-2xl mx-auto px-4 relative text-center">
          <div className="flex items-center justify-center gap-2 text-gold-400 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-gold-300 transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-gray-400">Pesan Tiket</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            🎫 Pesan Tiket Online
          </h1>
          <p className="text-gray-300 text-base">
            Isi form di bawah, lalu lanjutkan konfirmasi via WhatsApp. Mudah & cepat!
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Nama */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Nama Lengkap *</label>
                <input
                  type="text" name="nama" required
                  value={form.nama} onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Rute */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Rute Perjalanan *</label>
                <select
                  name="rute" required
                  value={form.rute} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                >
                  <option value="">-- Pilih Rute --</option>
                  {routes.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              {/* Tanggal & Jam */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-1.5">Tanggal Berangkat *</label>
                  <input
                    type="date" name="tanggal" required
                    value={form.tanggal} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-1.5">Jam Berangkat *</label>
                  <select
                    name="jam" required
                    value={form.jam} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                  >
                    <option value="">-- Pilih Jam --</option>
                    {['06.00','07.00','08.00','09.00','12.00','13.00','16.00','17.00'].map(j => (
                      <option key={j} value={j}>{j} WIB</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Jumlah penumpang */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Jumlah Penumpang *</label>
                <select
                  name="penumpang" required
                  value={form.penumpang} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                >
                  {Array.from({ length: 15 }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n}>{n} orang</option>
                  ))}
                </select>
              </div>

              {/* Lokasi jemput */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Lokasi Penjemputan *</label>
                <input
                  type="text" name="asal" required
                  value={form.asal} onChange={handleChange}
                  placeholder="Contoh: Jl. Merdeka No. 10, Curup"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Tujuan */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Tujuan / Drop Off *</label>
                <input
                  type="text" name="tujuan" required
                  value={form.tujuan} onChange={handleChange}
                  placeholder="Contoh: Bandara SMB II Palembang"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Catatan */}
              <div>
                <label className="block text-sm font-semibold text-primary-900 mb-1.5">Catatan Tambahan</label>
                <textarea
                  name="catatan"
                  value={form.catatan} onChange={handleChange}
                  placeholder="Misal: ada bayi, bawa banyak barang, dll."
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white resize-none"
                />
              </div>

              <button type="submit" className="btn-wa w-full py-4 text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Lanjutkan via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Klik tombol di atas untuk konfirmasi pemesanan via WhatsApp bersama tim kami.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
