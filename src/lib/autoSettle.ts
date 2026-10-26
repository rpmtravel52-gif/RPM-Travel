import { getOrder, updateOrder } from './redis';
import { departureAt } from './reviews';
import type { Order } from './types';

/** Pesanan tunai otomatis LUNAS setelah jadwal keberangkatan + 2 jam. */
export const AUTO_PAID_DELAY_MS = 2 * 60 * 60 * 1000;

/** Hanya pembayaran tunai (ke sopir) yang bisa dianggap lunas otomatis; QRIS butuh bukti bayar sehingga tetap manual. */
export function isDueForAutoPaid(order: Order, now = Date.now()): boolean {
  if (order.status !== 'UNPAID' || order.metodePembayaran !== 'TUNAI') return false;
  const dep = departureAt(order);
  return dep !== null && now >= dep + AUTO_PAID_DELAY_MS;
}

/**
 * Tandai LUNAS semua pesanan tunai yang sudah lewat 2 jam dari keberangkatan.
 * Dipanggil saat dashboard/riwayat dimuat dan oleh cron harian, jadi tidak perlu tekan manual.
 * Mengembalikan daftar yang sudah diperbarui (urutan sama).
 */
export async function settleDueOrders(orders: Order[], now = Date.now()): Promise<Order[]> {
  const due = orders.filter((o) => isDueForAutoPaid(o, now));
  if (!due.length) return orders;

  const updated = new Map<string, Order>();
  await Promise.all(
    due.map(async (o) => {
      try {
        // Ambil data terbaru agar tidak menimpa perubahan lain (mis. admin baru saja konfirmasi manual)
        const fresh = (await getOrder(o.id)) ?? o;
        if (!isDueForAutoPaid(fresh, now)) { updated.set(o.id, fresh); return; }
        const dep = departureAt(fresh) as number;
        const next: Order = {
          ...fresh,
          status: 'PAID',
          paidAt: new Date(dep + AUTO_PAID_DELAY_MS).toISOString(),
          autoPaid: true,
        };
        await updateOrder(next);
        updated.set(o.id, next);
      } catch (err) {
        console.error('[auto-paid] gagal:', o.orderNumber, err);
      }
    })
  );
  return orders.map((o) => updated.get(o.id) ?? o);
}
