// src/app/api/rates/route.ts
//
// GET  /api/rates  → baca tarif dari Redis (fallback ke packages.ts)
// POST /api/rates  → simpan tarif ke Redis
//
// Menggunakan ioredis via lib/redis yang sama dengan orders
// Key Redis: "rpm:rates"

import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { PACKAGES } from '@/lib/packages';

const REDIS_KEY = 'rpm:rates';

// GET — ambil semua tarif
export async function GET() {
  try {
    const raw = await redis.get(REDIS_KEY);

    if (!raw) {
      // Belum pernah disimpan → kembalikan PACKAGES dari packages.ts
      return NextResponse.json({ rates: PACKAGES });
    }

    const stored = JSON.parse(raw);
    return NextResponse.json({ rates: stored });
  } catch {
    // Fallback ke packages.ts jika Redis error
    return NextResponse.json({ rates: PACKAGES });
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

    // Validasi setiap item
    for (const r of rates) {
      if (!r.id || typeof r.harga !== 'number' || r.harga < 0) {
        return NextResponse.json(
          { error: `Data tidak valid pada paket: ${r.id ?? '?'}` },
          { status: 400 }
        );
      }
    }

    await redis.set(REDIS_KEY, JSON.stringify(rates));

    return NextResponse.json({ ok: true, saved: rates.length });
  } catch (err) {
    console.error('[POST /api/rates]', err);
    return NextResponse.json({ error: 'Gagal menyimpan tarif' }, { status: 500 });
  }
}
