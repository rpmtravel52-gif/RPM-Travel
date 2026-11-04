import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { recordWaClick, WA_SOURCES, type WaSource } from '@/lib/waStats';

// Publik (dipanggil dari browser pengunjung). Selalu balas 204 agar tidak mengganggu klik WhatsApp.
const ok = () => new NextResponse(null, { status: 204 });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    let path = typeof body?.path === 'string' ? body.path : '';
    path = path.split('?')[0].split('#')[0];
    if (!/^\/[a-z0-9\-_/]{0,118}$/i.test(path)) return ok();
    path = path.replace(/\/+$/, '') || '/';

    // Klik dari halaman pesan & admin tidak dihitung
    if (path.startsWith('/pesan') || path.startsWith('/admin')) return ok();

    const source: WaSource = WA_SOURCES.includes(body?.source) ? body.source : 'cta';

    // Batas wajar per IP (anti-spam): maks 30 klik / menit
    const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
    const rl = `rpm:wa:rl:${ip}`;
    const n = await redis.incr(rl);
    if (n === 1) await redis.expire(rl, 60);
    if (n > 30) return ok();

    await recordWaClick(path, source);
  } catch (err) {
    console.error('[track-wa]', err);
  }
  return ok();
}
