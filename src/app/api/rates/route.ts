// src/app/api/rates/route.ts
//
// GET  /api/rates  → baca tarif dari Redis (fallback ke packages.ts)
// POST /api/rates  → simpan tarif ke Redis
//
// Menggunakan Redis yang sama dengan /api/orders
// Key Redis: "rpm:rates"

import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { PACKAGES } from '@/lib/packages';

const redis = new Redis({
  url:   process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const REDIS_KEY = 'rpm:rates';

// GET — ambil semua tarif
export async function GET() {
  try {
    const stored = await redis.get<typeof PACKAGES>(REDIS_KEY);

    // Jika belum pernah disimpan, kembalikan PACKAGES dari packages.ts
    if (!stored || !Array.isArray(stored)) {
      return NextResponse.json({ rates: PACKAGES });
    }

    return NextResponse.json({ rates: stored });
  } catch (err) {
    console.error('[GET /api/rates]', err);
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

    await redis.set(REDIS_KEY, rates);

    return NextResponse.json({ ok: true, saved: rates.length });
  } catch (err) {
    console.error('[POST /api/rates]', err);
    return NextResponse.json({ error: 'Gagal menyimpan tarif' }, { status: 500 });
  }
}
