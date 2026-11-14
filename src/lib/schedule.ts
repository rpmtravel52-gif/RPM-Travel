// Helper jadwal keberangkatan (murni, aman dipakai di server maupun browser). Zona waktu: WIB (UTC+7).
import type { Order } from './types';

/** Waktu keberangkatan (epoch ms, zona WIB). Tanpa jam → dianggap 23.59 di hari itu. */
export function departureAt(order: Pick<Order, 'tanggal' | 'jam'>): number | null {
  const d = order.tanggal?.slice(0, 10);
  if (!d || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return null;
  let h = 23, m = 59;
  const jm = order.jam?.match(/^(\d{1,2})[.:](\d{2})/);
  if (jm) { h = Number(jm[1]); m = Number(jm[2]); }
  const t = Date.parse(`${d}T${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00+07:00`);
  return Number.isNaN(t) ? null : t;
}

/** Tanggal hari ini menurut WIB (YYYY-MM-DD), bukan UTC. */
export function todayWIB(now = Date.now()): string {
  return new Date(now + 7 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/** Jadwal (tanggal + jam) sudah lewat dari sekarang? */
export function isPastSchedule(tanggal: string, jam?: string, now = Date.now()): boolean {
  const dep = departureAt({ tanggal, jam });
  return dep !== null && dep <= now;
}

/** Pesanan yang dibuat setelah jadwal berangkatnya (pengisian mundur) — tidak boleh dikirimi faktur/tiket. */
export function isBackdatedOrder(order: Pick<Order, 'tanggal' | 'jam' | 'createdAt'>): boolean {
  const dep = departureAt(order);
  const created = Date.parse(order.createdAt);
  return dep !== null && !Number.isNaN(created) && created >= dep;
}
