'use client';
// src/app/admin/RatesTab.tsx
//
// Tab "Update Tarif" di dashboard admin RPM Travel Curup.
// Admin bisa ubah harga tiap rute langsung dari browser — tanpa sentuh kode.
// Data disimpan ke data/rates.json via POST /api/rates.

import { useState, useEffect, useCallback } from 'react';

interface TravelPackage {
  id: string;
  label: string;
  harga: number;
  satuanLabel: string;
  kategori: 'travel' | 'sewa';
  rute?: string;
  keterangan?: string;
}

function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

// ── Input harga dengan format ribuan otomatis ──────────────────
function HargaInput({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  const [raw, setRaw] = useState(String(value));
  const [focused, setFocused] = useState(false);

  // Sync bila value berubah dari luar (misalnya reset)
  useEffect(() => {
    if (!focused) setRaw(String(value));
  }, [value, focused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    setRaw(digits);
    onChange(digits === '' ? 0 : parseInt(digits, 10));
  };

  const display = focused
    ? raw
    : value === 0
    ? ''
    : value.toLocaleString('id-ID');

  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-slate-400 text-sm font-medium select-none">Rp</span>
      <input
        type="text"
        inputMode="numeric"
        disabled={disabled}
        value={display}
        onFocus={() => { setFocused(true); setRaw(String(value)); }}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
        placeholder="0"
        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-slate-500
                   focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent
                   disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      />
    </div>
  );
}

// ── Satu baris paket ───────────────────────────────────────────
function PackageRow({
  pkg,
  index,
  onChange,
  isDirty,
}: {
  pkg: TravelPackage;
  index: number;
  onChange: (index: number, harga: number) => void;
  isDirty: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_180px] gap-3 items-center
                  p-4 rounded-xl border transition-all
                  ${isDirty
                    ? 'bg-amber-500/10 border-amber-500/40'
                    : 'bg-white/5 border-white/10 hover:border-white/20'}`}
    >
      {/* Info rute */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full
              ${pkg.kategori === 'sewa'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'bg-sky-500/20 text-sky-400 border border-sky-500/30'}`}
          >
            {pkg.kategori === 'sewa' ? '🚐 Sewa' : '🚌 Travel'}
          </span>
          {isDirty && (
            <span className="text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
              ✏️ Diubah
            </span>
          )}
        </div>
        <p className="text-white font-semibold text-sm mt-1 truncate">{pkg.label}</p>
        {pkg.keterangan && (
          <p className="text-slate-500 text-xs mt-0.5 truncate">{pkg.keterangan}</p>
        )}
      </div>

      {/* Satuan */}
      <span className="text-slate-400 text-sm text-right sm:text-center whitespace-nowrap hidden sm:block">
        {pkg.satuanLabel}
      </span>

      {/* Input harga */}
      <div>
        <HargaInput
          value={pkg.harga}
          onChange={(v) => onChange(index, v)}
        />
        <p className="text-slate-500 text-xs mt-1 text-right">
          = {formatRupiah(pkg.harga)}{pkg.satuanLabel}
        </p>
      </div>
    </div>
  );
}

// ── Main RatesTab ──────────────────────────────────────────────
export default function RatesTab() {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [original, setOriginal] = useState<TravelPackage[]>([]);
  const [loading, setLoading]   = useState(true);
  const [saving, setSaving]     = useState(false);
  const [toast, setToast]       = useState<{ msg: string; type: 'ok' | 'err' } | null>(null);
  const [filter, setFilter]     = useState<'all' | 'travel' | 'sewa'>('all');

  const showToast = (msg: string, type: 'ok' | 'err' = 'ok') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── Fetch tarif dari API ───────────────────────────────────
  const fetchRates = useCallback(async () => {
    setLoading(true);
    try {
      const res  = await fetch('/api/rates');
      const data = await res.json();
      setPackages(data.rates ?? []);
      setOriginal(data.rates ?? []);
    } catch {
      showToast('❌ Gagal memuat tarif', 'err');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchRates(); }, [fetchRates]);

  // ── Update harga satu paket ────────────────────────────────
  const handleChange = (index: number, harga: number) => {
    setPackages((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], harga };
      return next;
    });
  };

  // ── Reset ke nilai semula ──────────────────────────────────
  const handleReset = () => {
    setPackages(original.map((p) => ({ ...p })));
    showToast('↩️ Semua tarif direset ke nilai tersimpan');
  };

  // ── Simpan ke server ───────────────────────────────────────
  const handleSave = async () => {
    // Cegah harga 0
    const zeroPriced = packages.filter((p) => p.harga === 0);
    if (zeroPriced.length > 0) {
      showToast(`⚠️ Harga tidak boleh Rp 0: ${zeroPriced.map((p) => p.label).join(', ')}`, 'err');
      return;
    }

    if (!confirm('Simpan perubahan tarif? Harga baru langsung berlaku untuk semua pesanan baru.')) return;

    setSaving(true);
    try {
      const res = await fetch('/api/rates', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ rates: packages }),
      });
      if (res.ok) {
        setOriginal(packages.map((p) => ({ ...p })));
        showToast('✅ Tarif berhasil disimpan! Harga langsung berlaku.');
      } else {
        const err = await res.json();
        showToast(`❌ ${err.error ?? 'Gagal menyimpan'}`, 'err');
      }
    } catch {
      showToast('❌ Koneksi bermasalah, coba lagi', 'err');
    } finally {
      setSaving(false);
    }
  };

  // ── Cek perubahan ──────────────────────────────────────────
  const dirtyIndices = new Set(
    packages
      .map((p, i) => (p.harga !== original[i]?.harga ? i : -1))
      .filter((i) => i >= 0)
  );
  const hasDirty = dirtyIndices.size > 0;

  const filtered = packages.filter((p) =>
    filter === 'all' ? true : p.kategori === filter
  );
  const filteredIndices = packages
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter === 'all' ? true : p.kategori === filter)
    .map(({ i }) => i);

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="relative">

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl text-sm font-semibold shadow-2xl
            transition-all animate-in fade-in slide-in-from-top-2 duration-300
            ${toast.type === 'ok'
              ? 'bg-green-500/90 text-white border border-green-400/50'
              : 'bg-red-500/90 text-white border border-red-400/50'}`}
        >
          {toast.msg}
        </div>
      )}

      {/* Header tab */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-white">💰 Update Tarif</h2>
          <p className="text-slate-400 text-sm mt-0.5">
            Ubah harga tiap rute/paket. Klik <strong className="text-white">Simpan</strong> agar langsung berlaku.
          </p>
        </div>

        {/* Tombol aksi */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleReset}
            disabled={!hasDirty || saving}
            className="text-sm bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed
                       text-slate-300 px-4 py-2 rounded-lg border border-white/20 transition-all"
          >
            ↩️ Reset
          </button>
          <button
            onClick={handleSave}
            disabled={!hasDirty || saving}
            className="text-sm font-bold bg-sky-600 hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed
                       text-white px-5 py-2 rounded-lg transition-all flex items-center gap-2"
          >
            {saving ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Menyimpan...
              </>
            ) : (
              <>💾 Simpan Tarif {hasDirty && `(${dirtyIndices.size})`}</>
            )}
          </button>
        </div>
      </div>

      {/* Banner perubahan belum disimpan */}
      {hasDirty && (
        <div className="mb-4 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 text-sm text-amber-400 flex items-center gap-2">
          ⚠️ Ada <strong>{dirtyIndices.size} paket</strong> yang belum disimpan.
          Klik <strong>Simpan Tarif</strong> agar perubahan berlaku.
        </div>
      )}

      {/* Filter kategori */}
      <div className="flex rounded-xl overflow-hidden border border-white/20 mb-5 w-fit">
        {(['all', 'travel', 'sewa'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs font-bold transition-all ${
              filter === f
                ? 'bg-sky-600 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            {f === 'all' ? '📋 Semua' : f === 'travel' ? '🚌 Travel' : '🚐 Sewa'}
          </button>
        ))}
      </div>

      {/* Daftar paket */}
      {loading ? (
        <div className="text-center py-16 text-slate-400">
          <div className="text-3xl mb-3 animate-pulse">⏳</div>
          <p className="text-sm">Memuat data tarif...</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((pkg, fi) => {
            const realIndex = filteredIndices[fi];
            return (
              <PackageRow
                key={pkg.id}
                pkg={pkg}
                index={realIndex}
                onChange={handleChange}
                isDirty={dirtyIndices.has(realIndex)}
              />
            );
          })}
        </div>
      )}

      {/* Ringkasan */}
      {!loading && (
        <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-400 space-y-1">
          <p className="font-semibold text-slate-300 mb-2">📌 Cara mengubah tarif:</p>
          <p>1. Klik kolom harga pada rute yang ingin diubah</p>
          <p>2. Ketik harga baru (angka saja, tanpa titik/koma)</p>
          <p>3. Klik tombol <strong className="text-white">💾 Simpan Tarif</strong></p>
          <p>4. Harga baru langsung berlaku untuk semua pesanan baru ✅</p>
          <p className="text-amber-400 mt-2">⚠️ Pesanan yang sudah dibuat sebelumnya tidak terpengaruh.</p>
        </div>
      )}
    </div>
  );
}
