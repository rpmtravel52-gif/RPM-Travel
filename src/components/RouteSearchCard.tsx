'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PACKAGES, formatRupiah } from '@/lib/packages';

const routes = PACKAGES.filter((p) => p.kategori === 'travel');

export default function RouteSearchCard() {
  const router = useRouter();
  const [paket, setPaket] = useState(routes[0].id);
  const [pax, setPax] = useState(1);
  const sel = routes.find((r) => r.id === paket) ?? routes[0];
  const [from, to] = (sel.rute ?? '').split(' → ');

  return (
    <div className="bg-white rounded-3xl shadow-lift border border-primary-900/5 p-4 -mt-10 relative z-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] uppercase tracking-widest text-gray-400 font-semibold">Dari</p>
          <p className="font-display font-bold text-primary-900 text-lg truncate">{from}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-gold-100 text-primary-900 flex items-center justify-center shrink-0" aria-hidden>
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </div>
        <div className="flex-1 min-w-0 text-right">
          <p className="text-[0.65rem] uppercase tracking-widest text-gray-400 font-semibold">Tujuan</p>
          <p className="font-display font-bold text-primary-900 text-lg truncate">{to}</p>
        </div>
      </div>

      <label className="block text-[0.65rem] uppercase tracking-widest text-gray-400 font-semibold mb-1" htmlFor="rute">Pilih Rute</label>
      <select
        id="rute" value={paket} onChange={(e) => setPaket(e.target.value)}
        className="w-full rounded-2xl bg-cream-50 border border-primary-900/10 px-4 py-3 text-sm font-semibold text-primary-900 mb-3 focus:outline-2 focus:outline-gold-500"
      >
        {routes.map((r) => (
          <option key={r.id} value={r.id}>{r.label.replace('Travel ', '')}</option>
        ))}
      </select>

      <div className="flex items-center justify-between rounded-2xl bg-cream-50 border border-primary-900/10 px-4 py-2.5 mb-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-widest text-gray-400 font-semibold">Penumpang</p>
          <p className="text-sm font-semibold text-primary-900">{pax} orang · {formatRupiah(sel.harga * pax)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Kurangi penumpang" onClick={() => setPax((n) => Math.max(1, n - 1))}
            className="w-9 h-9 rounded-full bg-white border border-primary-900/10 text-primary-900 font-bold active:scale-90 transition-transform">−</button>
          <button type="button" aria-label="Tambah penumpang" onClick={() => setPax((n) => Math.min(14, n + 1))}
            className="w-9 h-9 rounded-full bg-primary-900 text-white font-bold active:scale-90 transition-transform">+</button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.push(`/pesan?paket=${paket}`)}
        className="btn-gold w-full py-3.5 text-base"
      >
        Cari &amp; Pesan Tiket
      </button>
    </div>
  );
}
