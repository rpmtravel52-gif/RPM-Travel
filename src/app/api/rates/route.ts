// src/app/api/rates/route.ts
//
// GET  /api/rates        → baca semua paket (dari rates.json jika ada, fallback ke packages.ts)
// POST /api/rates        → simpan semua paket ke data/rates.json
//
// Cara kerja:
//   - Pertama kali, tarif diambil langsung dari lib/packages.ts (source of truth)
//   - Setelah admin menyimpan lewat dashboard, data tersimpan di data/rates.json
//   - Halaman /pesan akan menggunakan API ini sehingga harga langsung terupdate

import { NextRequest, NextResponse } from 'next/server';
import fs   from 'fs';
import path from 'path';
import { PACKAGES } from '@/lib/packages';

const RATES_FILE = path.join(process.cwd(), 'data', 'rates.json');

function readRates() {
  try {
    if (fs.existsSync(RATES_FILE)) {
      const raw = fs.readFileSync(RATES_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch {
    // jika file rusak, fallback ke packages.ts
  }
  // Fallback: kembalikan PACKAGES dari lib/packages.ts
  return PACKAGES;
}

// GET — ambil semua tarif
export async function GET() {
  try {
    const rates = readRates();
    return NextResponse.json({ rates });
  } catch {
    return NextResponse.json({ error: 'Gagal membaca tarif' }, { status: 500 });
  }
}

// POST — simpan tarif baru
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rates } = body;

    if (!Array.isArray(rates)) {
      return NextResponse.json({ error: 'Format data tidak valid' }, { status: 400 });
    }

    // Validasi minimal setiap item punya id dan harga angka
    for (const r of rates) {
      if (!r.id || typeof r.harga !== 'number' || r.harga < 0) {
        return NextResponse.json(
          { error: `Data tidak valid pada paket: ${r.id ?? '?'}` },
          { status: 400 }
        );
      }
    }

    // Pastikan folder data/ ada
    const dir = path.dirname(RATES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(RATES_FILE, JSON.stringify(rates, null, 2), 'utf-8');

    return NextResponse.json({ ok: true, saved: rates.length });
  } catch (err) {
    console.error('[POST /api/rates]', err);
    return NextResponse.json({ error: 'Gagal menyimpan tarif' }, { status: 500 });
  }
}
