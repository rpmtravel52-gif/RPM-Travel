// Hitungan klik tombol WhatsApp di website (di luar halaman /pesan & /admin).
// Disimpan di Redis sebagai counter ringan: total, per hari (WIB), per halaman, per sumber tombol.
import { redis } from './redis';

const K_TOTAL = 'rpm:wa:total';
const K_DAILY = 'rpm:wa:daily';   // hash: 'YYYY-MM-DD' → jumlah
const K_PAGES = 'rpm:wa:pages';   // hash: '/path' → jumlah
const K_SRC   = 'rpm:wa:src';     // hash: sumber → jumlah
const K_SINCE = 'rpm:wa:since';   // ISO waktu mulai penghitungan

export const WA_SOURCES = ['bottomnav', 'cta', 'footer'] as const;
export type WaSource = (typeof WA_SOURCES)[number];

/** Tanggal 'YYYY-MM-DD' menurut WIB (UTC+7). */
export function wibDate(ms = Date.now()): string {
  return new Date(ms + 7 * 3600_000).toISOString().slice(0, 10);
}

export async function recordWaClick(path: string, source: WaSource): Promise<void> {
  await redis
    .multi()
    .incr(K_TOTAL)
    .hincrby(K_DAILY, wibDate(), 1)
    .hincrby(K_PAGES, path, 1)
    .hincrby(K_SRC, source, 1)
    .set(K_SINCE, new Date().toISOString(), 'NX')
    .exec();
}

const toNum = (h: Record<string, string>) =>
  Object.fromEntries(Object.entries(h).map(([k, v]) => [k, Number(v) || 0])) as Record<string, number>;

export async function getWaStats() {
  const [total, daily, pages, src, since] = await Promise.all([
    redis.get(K_TOTAL),
    redis.hgetall(K_DAILY),
    redis.hgetall(K_PAGES),
    redis.hgetall(K_SRC),
    redis.get(K_SINCE),
  ]);
  return {
    total: Number(total) || 0,
    daily: toNum(daily),
    pages: toNum(pages),
    sources: toNum(src),
    since: since ?? null,
  };
}

export async function resetWaStats(): Promise<void> {
  await redis.del(K_TOTAL, K_DAILY, K_PAGES, K_SRC, K_SINCE);
}
