'use client';
// src/app/admin/ReceiptTab.tsx
// Tab Kwitansi Manual — BengkuluTravel.com / KG Transport

import { useState } from 'react';

// ── Types ─────────────────────────────────────────────────────
type Perusahaan = 'BengkuluTravel' | 'KGTransport';
type JenisLayanan = 'Rental Mobil' | 'Rental Mobil + Sopir' | 'All In (Mobil + Sopir + Bensin)';

interface ReceiptData {
  perusahaan: Perusahaan;
  nomorKwitansi: string;
  tanggal: string;
  // Penerima
  namaPenerima: string;
  alamatPenerima: string;
  hpPenerima: string;
  // Layanan
  jenisLayanan: JenisLayanan;
  tarifPerHari: number;
  jumlahHari: number;
  keterangan: string;
  // Petugas
  namaPetugas: string;
  // Kirim
  email: string;
}

// ── Helpers ───────────────────────────────────────────────────
function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(amount);
}

function generateNomorKwitansi(perusahaan: Perusahaan): string {
  const prefix = perusahaan === 'BengkuluTravel' ? 'BT' : 'KG';
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const rand = Math.floor(100 + Math.random() * 900);
  const seq = String(Math.floor(Date.now() / 1000) % 10000).padStart(4, '0');
  return `${prefix}/${yy}${mm}/${seq}${rand}`;
}

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

// ── Preview PDF (cetak via browser) ──────────────────────────
function buildPrintHTML(data: ReceiptData): string {
  const total = data.tarifPerHari * data.jumlahHari;
  const tgl = new Date(data.tanggal).toLocaleDateString('id-ID', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const brand = data.perusahaan === 'BengkuluTravel'
    ? { nama: 'BengkuluTravel.com', warna: '#0284c7' }
    : { nama: 'KG Transport', warna: '#16a34a' };

  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<title>Kwitansi ${data.nomorKwitansi}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Noto+Sans:wght@400;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Noto Sans',sans-serif;font-size:13px;color:#1e293b;background:#f8fafc}
  .page{width:210mm;min-height:148mm;margin:0 auto;background:#fff;padding:32px 40px;position:relative}
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}
  .brand-name{font-family:'Noto Serif',serif;font-size:22px;font-weight:700;color:${brand.warna}}
  .brand-sub{font-size:11px;color:#64748b;margin-top:4px;line-height:1.5}
  .doc-type{text-align:right}
  .doc-title{font-size:18px;font-weight:700;color:${brand.warna};letter-spacing:2px}
  .doc-num{font-size:11px;color:#64748b;margin-top:4px}
  .divider{border:none;border-top:2.5px solid ${brand.warna};margin:14px 0}
  .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px}
  .info-box{padding:10px 14px;background:#f8fafc;border-radius:6px;border-left:3px solid ${brand.warna}}
  .info-label{font-size:10px;text-transform:uppercase;color:#94a3b8;font-weight:600;letter-spacing:0.5px;margin-bottom:4px}
  .info-val{font-weight:600;font-size:13px}
  .info-sub{font-size:11px;color:#64748b;margin-top:2px}
  table{width:100%;border-collapse:collapse;margin-bottom:16px}
  thead tr{background:${brand.warna}}
  thead th{color:#fff;font-weight:600;font-size:11px;padding:8px 12px;text-align:left}
  thead th:last-child,thead th:nth-child(3),thead th:nth-child(4){text-align:right}
  tbody tr:nth-child(even){background:#f0f9ff}
  tbody td{padding:9px 12px;font-size:12px;border-bottom:0.5px solid #e2e8f0}
  tbody td:last-child,tbody td:nth-child(3),tbody td:nth-child(4){text-align:right}
  .total-box{display:flex;justify-content:flex-end;margin-bottom:24px}
  .total-inner{background:${brand.warna};color:#fff;padding:10px 20px;border-radius:6px;display:flex;gap:40px;font-weight:700;font-size:14px}
  .sign-area{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:8px}
  .sign-box{text-align:center;padding:12px}
  .sign-line{height:70px;border-bottom:1px solid #cbd5e1;margin-bottom:8px;position:relative}
  .sign-label{font-size:11px;color:#64748b}
  .sign-name{font-weight:700;font-size:12px;margin-top:4px}
  .stamp-placeholder{position:absolute;right:10px;top:8px;width:54px;height:54px;border:2px dashed #cbd5e1;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:#cbd5e1;text-align:center;line-height:1.3}
  .footer{border-top:0.5px solid #e2e8f0;padding-top:10px;margin-top:20px;text-align:center;font-size:10px;color:#94a3b8}
  @media print{
    body{background:#fff}
    .page{margin:0;padding:20mm 20mm;box-shadow:none}
    @page{size:A5 landscape;margin:0}
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <div class="brand-name">${brand.nama}</div>
      <div class="brand-sub">BTN Air Bang, Curup, Rejang Lebong, Bengkulu<br/>Jasa Rental & Transportasi</div>
    </div>
    <div class="doc-type">
      <div class="doc-title">KWITANSI</div>
      <div class="doc-num">No. ${data.nomorKwitansi}</div>
      <div class="doc-num">Tgl. ${tgl}</div>
    </div>
  </div>
  <hr class="divider"/>
  <div class="info-grid">
    <div class="info-box">
      <div class="info-label">Diterima dari</div>
      <div class="info-val">${data.namaPenerima}</div>
      <div class="info-sub">${data.alamatPenerima}</div>
      ${data.hpPenerima ? `<div class="info-sub">📱 ${data.hpPenerima}</div>` : ''}
    </div>
    <div class="info-box">
      <div class="info-label">Jenis Layanan</div>
      <div class="info-val">${data.jenisLayanan}</div>
      <div class="info-sub">Durasi: ${data.jumlahHari} hari</div>
    </div>
  </div>
  <table>
    <thead>
      <tr>
        <th style="width:50%">Keterangan</th>
        <th style="width:15%;text-align:center">Jumlah Hari</th>
        <th style="width:18%">Tarif/Hari</th>
        <th style="width:17%">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>${data.jenisLayanan}</strong><br/>
          <span style="font-size:11px;color:#64748b">${data.keterangan || '—'}</span>
        </td>
        <td style="text-align:center">${data.jumlahHari}</td>
        <td>${formatRupiah(data.tarifPerHari)}</td>
        <td><strong>${formatRupiah(total)}</strong></td>
      </tr>
    </tbody>
  </table>
  <div class="total-box">
    <div class="total-inner">
      <span>TOTAL DIBAYAR</span>
      <span>${formatRupiah(total)}</span>
    </div>
  </div>
  <div class="sign-area">
    <div class="sign-box">
      <div class="sign-line"></div>
      <div class="sign-label">Penerima / Pelanggan</div>
      <div class="sign-name">${data.namaPenerima}</div>
    </div>
    <div class="sign-box">
      <div class="sign-line">
        <div class="stamp-placeholder">STEMPEL</div>
      </div>
      <div class="sign-label">Yang Menerima Pembayaran</div>
      <div class="sign-name">${data.namaPetugas || brand.nama}</div>
    </div>
  </div>
  <div class="footer">${brand.nama} · BTN Air Bang, Curup, Rejang Lebong, Bengkulu · Dokumen ini sah tanpa tanda tangan basah jika dicetak resmi</div>
</div>
<script>window.onload=function(){window.print()}</script>
</body>
</html>`;
}

// ── Form Field Component ──────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all";
const selectCls = "w-full bg-slate-700 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all";

// ── Preview Modal ─────────────────────────────────────────────
function PreviewPanel({ data, onClose }: { data: ReceiptData; onClose: () => void }) {
  const total = data.tarifPerHari * data.jumlahHari;

  const handlePrint = () => {
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) return;
    win.document.write(buildPrintHTML(data));
    win.document.close();
  };

  const [sendLoading, setSendLoading] = useState(false);
  const [sendResult, setSendResult]   = useState('');

  const handleSend = async () => {
    if (!data.email) { setSendResult('⚠️ Email belum diisi'); return; }
    setSendLoading(true);
    try {
      const html = buildPrintHTML(data);
      const res  = await fetch('/api/receipt/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, totalHarga: total, htmlContent: html }),
      });
      if (res.ok) setSendResult(`✅ Kwitansi dikirim ke ${data.email}`);
      else        setSendResult('❌ Gagal mengirim email');
    } catch {
      setSendResult('❌ Error koneksi');
    } finally {
      setSendLoading(false);
    }
  };

  const tgl = new Date(data.tanggal).toLocaleDateString('id-ID', {
    day: '2-digit', month: 'long', year: 'numeric',
  });
  const brand = data.perusahaan === 'BengkuluTravel' ? 'BengkuluTravel.com' : 'KG Transport';
  const brandColor = data.perusahaan === 'BengkuluTravel' ? 'text-sky-400' : 'text-green-400';
  const brandBg    = data.perusahaan === 'BengkuluTravel' ? 'bg-sky-600'   : 'bg-green-600';

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">

        {/* Header modal */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <h3 className="font-bold text-white">Preview Kwitansi</h3>
            <p className={`text-xs font-bold ${brandColor}`}>{brand}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-lg transition-colors">✕</button>
        </div>

        {/* Preview card */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Kop */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className={`font-bold text-base ${brandColor}`}>{brand}</p>
                <p className="text-xs text-slate-400">BTN Air Bang, Curup, Rejang Lebong</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-white uppercase tracking-widest">KWITANSI</p>
                <p className="text-xs text-slate-400">No. {data.nomorKwitansi}</p>
                <p className="text-xs text-slate-400">{tgl}</p>
              </div>
            </div>
            <div className={`h-0.5 ${brandBg} opacity-50 mb-3`} />
            {/* Info */}
            <div className="grid grid-cols-2 gap-3 text-xs mb-3">
              <div className="bg-white/5 rounded-lg p-2.5">
                <p className="text-slate-500 uppercase text-[10px] font-bold mb-1">Diterima dari</p>
                <p className="text-white font-semibold">{data.namaPenerima || '—'}</p>
                <p className="text-slate-400">{data.alamatPenerima || '—'}</p>
                {data.hpPenerima && <p className="text-slate-400">📱 {data.hpPenerima}</p>}
              </div>
              <div className="bg-white/5 rounded-lg p-2.5">
                <p className="text-slate-500 uppercase text-[10px] font-bold mb-1">Layanan</p>
                <p className="text-white font-semibold">{data.jenisLayanan}</p>
                <p className="text-slate-400">{data.jumlahHari} hari × {formatRupiah(data.tarifPerHari)}</p>
              </div>
            </div>
            {/* Tabel */}
            <div className="rounded-lg overflow-hidden border border-white/10 text-xs mb-3">
              <div className={`${brandBg} text-white grid grid-cols-4 px-3 py-2 font-bold`}>
                <span className="col-span-2">Keterangan</span>
                <span className="text-right">Hari</span>
                <span className="text-right">Total</span>
              </div>
              <div className="bg-white/5 grid grid-cols-4 px-3 py-2.5">
                <span className="col-span-2 text-white">{data.jenisLayanan}<br/><span className="text-slate-400">{data.keterangan}</span></span>
                <span className="text-right text-slate-300">{data.jumlahHari}</span>
                <span className="text-right text-white font-bold">{formatRupiah(total)}</span>
              </div>
            </div>
            {/* Total */}
            <div className="flex justify-end">
              <div className={`${brandBg} text-white rounded-lg px-4 py-2 flex gap-8 font-bold text-sm`}>
                <span>TOTAL</span>
                <span>{formatRupiah(total)}</span>
              </div>
            </div>
          </div>

          {/* Area ttd preview */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <div className="h-10 border-b border-white/20 mb-2" />
              <p className="text-slate-500">Penerima</p>
              <p className="text-white font-semibold">{data.namaPenerima || '—'}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10 relative">
              <div className="h-10 border-b border-white/20 mb-2" />
              <div className="absolute top-2 right-4 w-9 h-9 rounded-full border border-dashed border-white/20 flex items-center justify-center text-[9px] text-slate-600">STEMPEL</div>
              <p className="text-slate-500">Yang Menerima</p>
              <p className="text-white font-semibold">{data.namaPetugas || brand}</p>
            </div>
          </div>
        </div>

        {/* Aksi */}
        <div className="px-5 py-4 border-t border-white/10 space-y-3">
          {sendResult && (
            <p className="text-xs text-center py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">{sendResult}</p>
          )}
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm py-2.5 rounded-xl transition-all"
            >
              🖨️ Cetak / Simpan PDF
            </button>
            {data.email && (
              <button
                onClick={handleSend}
                disabled={sendLoading}
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-2.5 rounded-xl transition-all disabled:opacity-60"
              >
                {sendLoading ? '⏳ Mengirim...' : '📧 Kirim Email'}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Main ReceiptTab ───────────────────────────────────────────
export default function ReceiptTab() {
  const [showPreview, setShowPreview] = useState(false);
  const [kirimEmail, setKirimEmail]   = useState(false);
  const [toast, setToast]             = useState('');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const defaultPerusahaan: Perusahaan = 'BengkuluTravel';

  const [form, setForm] = useState<ReceiptData>({
    perusahaan:     defaultPerusahaan,
    nomorKwitansi:  generateNomorKwitansi(defaultPerusahaan),
    tanggal:        todayISO(),
    namaPenerima:   '',
    alamatPenerima: '',
    hpPenerima:     '',
    jenisLayanan:   'Rental Mobil + Sopir',
    tarifPerHari:   0,
    jumlahHari:     1,
    keterangan:     '',
    namaPetugas:    '',
    email:          '',
  });

  const update = (field: keyof ReceiptData, value: string | number) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handlePerusahaanChange = (p: Perusahaan) => {
    setForm((prev) => ({
      ...prev,
      perusahaan:    p,
      nomorKwitansi: generateNomorKwitansi(p),
    }));
  };

  const handleReset = () => {
    setForm({
      perusahaan:     defaultPerusahaan,
      nomorKwitansi:  generateNomorKwitansi(defaultPerusahaan),
      tanggal:        todayISO(),
      namaPenerima:   '',
      alamatPenerima: '',
      hpPenerima:     '',
      jenisLayanan:   'Rental Mobil + Sopir',
      tarifPerHari:   0,
      jumlahHari:     1,
      keterangan:     '',
      namaPetugas:    '',
      email:          '',
    });
    setKirimEmail(false);
    showToast('🔄 Form direset');
  };

  const handlePreview = () => {
    if (!form.namaPenerima.trim()) { showToast('⚠️ Nama penerima wajib diisi'); return; }
    if (!form.tarifPerHari || form.tarifPerHari <= 0) { showToast('⚠️ Tarif per hari belum diisi'); return; }
    if (kirimEmail && !form.email.trim()) { showToast('⚠️ Email wajib diisi untuk pengiriman'); return; }
    setShowPreview(true);
  };

  const total = form.tarifPerHari * form.jumlahHari;

  const brandColor = form.perusahaan === 'BengkuluTravel' ? 'text-sky-400' : 'text-green-400';
  
  return (
    <>
      {showPreview && (
        <PreviewPanel
          data={{ ...form, email: kirimEmail ? form.email : '' }}
          onClose={() => setShowPreview(false)}
        />
      )}

      <div className="relative">
        {toast && (
          <div className="fixed top-4 right-4 bg-slate-700 text-white text-sm px-4 py-2 rounded-xl shadow-xl z-50 animate-in fade-in duration-200">
            {toast}
          </div>
        )}

        {/* Header info */}
        <div className="mb-5 p-4 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-sm font-semibold text-white mb-1">🧾 Kwitansi Manual Rental</p>
          <p className="text-xs text-slate-400">Buat kwitansi untuk layanan rental mobil. Dapat dicetak langsung atau dikirim via email.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Kolom Form ──────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Pilih Perusahaan */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">🏢 Pilih Perusahaan</p>
              <div className="flex gap-2">
                {(['BengkuluTravel', 'KGTransport'] as Perusahaan[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePerusahaanChange(p)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                      form.perusahaan === p
                        ? p === 'BengkuluTravel'
                          ? 'bg-sky-600 text-white border-sky-500'
                          : 'bg-green-600 text-white border-green-500'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {p === 'BengkuluTravel' ? '🌐 BengkuluTravel.com' : '🚗 KG Transport'}
                  </button>
                ))}
              </div>
            </div>

            {/* Info Kwitansi */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">📋 Info Kwitansi</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Nomor Kwitansi">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={form.nomorKwitansi}
                      onChange={(e) => update('nomorKwitansi', e.target.value)}
                      className={inputCls}
                    />
                    <button
                      onClick={() => update('nomorKwitansi', generateNomorKwitansi(form.perusahaan))}
                      title="Generate ulang"
                      className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs text-slate-300 transition-all whitespace-nowrap"
                    >
                      🔄
                    </button>
                  </div>
                </Field>
                <Field label="Tanggal">
                  <input
                    type="date"
                    value={form.tanggal}
                    onChange={(e) => update('tanggal', e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>

            {/* Data Penerima */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">👤 Data Penerima</p>
              <div className="space-y-3">
                <Field label="Nama Lengkap *">
                  <input
                    type="text"
                    placeholder="Nama pelanggan..."
                    value={form.namaPenerima}
                    onChange={(e) => update('namaPenerima', e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Alamat">
                  <input
                    type="text"
                    placeholder="Alamat pelanggan..."
                    value={form.alamatPenerima}
                    onChange={(e) => update('alamatPenerima', e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="No. HP / WhatsApp">
                  <input
                    type="tel"
                    placeholder="0812-xxxx-xxxx"
                    value={form.hpPenerima}
                    onChange={(e) => update('hpPenerima', e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>

            {/* Detail Layanan */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">🚗 Detail Layanan</p>
              <div className="space-y-3">
                <Field label="Jenis Layanan *">
                  <select
                    value={form.jenisLayanan}
                    onChange={(e) => update('jenisLayanan', e.target.value as JenisLayanan)}
                    className={selectCls}
                  >
                    <option>Rental Mobil</option>
                    <option>Rental Mobil + Sopir</option>
                    <option>All In (Mobil + Sopir + Bensin)</option>
                  </select>
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Tarif per Hari (Rp) *">
                    <input
                      type="number"
                      placeholder="350000"
                      min="0"
                      value={form.tarifPerHari || ''}
                      onChange={(e) => update('tarifPerHari', Number(e.target.value))}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Jumlah Hari *">
                    <input
                      type="number"
                      min="1"
                      value={form.jumlahHari}
                      onChange={(e) => update('jumlahHari', Math.max(1, Number(e.target.value)))}
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field label="Keterangan Tambahan">
                  <input
                    type="text"
                    placeholder="Rute, tujuan, catatan khusus..."
                    value={form.keterangan}
                    onChange={(e) => update('keterangan', e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </div>
            </div>

            {/* Petugas */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">✍️ Petugas</p>
              <Field label="Nama Petugas / Admin">
                <input
                  type="text"
                  placeholder="Nama yang menerima pembayaran..."
                  value={form.namaPetugas}
                  onChange={(e) => update('namaPetugas', e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Opsi Kirim Email */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">📧 Kirim via Email</p>
                <button
                  onClick={() => setKirimEmail((v) => !v)}
                  className={`relative w-11 h-6 rounded-full transition-all ${kirimEmail ? 'bg-emerald-500' : 'bg-white/20'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow ${kirimEmail ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
              {kirimEmail && (
                <Field label="Alamat Email Penerima">
                  <input
                    type="email"
                    placeholder="pelanggan@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputCls}
                  />
                </Field>
              )}
              {!kirimEmail && (
                <p className="text-xs text-slate-500">Aktifkan untuk mengirim kwitansi ke email pelanggan setelah cetak.</p>
              )}
            </div>
          </div>

          {/* ── Kolom Ringkasan ─────────────────────────────── */}
          <div className="space-y-4">
            {/* Summary card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sticky top-4">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-4">💰 Ringkasan</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Perusahaan</span>
                  <span className={`font-bold ${brandColor}`}>
                    {form.perusahaan === 'BengkuluTravel' ? 'BengkuluTravel.com' : 'KG Transport'}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">No. Kwitansi</span>
                  <span className="text-white font-mono text-[11px]">{form.nomorKwitansi}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Pelanggan</span>
                  <span className="text-white font-semibold">{form.namaPenerima || '—'}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Layanan</span>
                  <span className="text-white text-right max-w-[140px]">{form.jenisLayanan}</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Tarif/hari</span>
                  <span className="text-white">{form.tarifPerHari > 0 ? formatRupiah(form.tarifPerHari) : '—'}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Jumlah hari</span>
                  <span className="text-white">{form.jumlahHari} hari</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between">
                  <span className={`font-bold text-sm ${brandColor}`}>TOTAL</span>
                  <span className={`font-bold text-sm ${brandColor}`}>
                    {total > 0 ? formatRupiah(total) : '—'}
                  </span>
                </div>
              </div>

              {/* Aksi */}
              <div className="space-y-2">
                <button
                  onClick={handlePreview}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    form.perusahaan === 'BengkuluTravel'
                      ? 'bg-sky-600 hover:bg-sky-500'
                      : 'bg-green-600 hover:bg-green-500'
                  } text-white`}
                >
                  {kirimEmail ? '👁️ Preview & Kirim' : '🖨️ Preview & Cetak'}
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  🔄 Reset Form
                </button>
              </div>

              {/* Keterangan */}
              <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-slate-500 space-y-1">
                <p>📍 BTN Air Bang, Curup, Rejang Lebong</p>
                <p>🖨️ Format cetak: A5 landscape / A4</p>
                {kirimEmail && <p>📧 Kwitansi akan dikirim via Resend</p>}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
