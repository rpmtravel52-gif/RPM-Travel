import { getOrder, redis, updateOrder } from './redis';
import { AUTO_PAID_DELAY_MS } from './autoSettle';
import { departureAt, isBackdatedOrder } from './schedule';
import { sendTicketPdfEmail } from './ticketEmail';
import type { Order } from './types';

/** Tiket otomatis tidak dikirim untuk perjalanan yang sudah > 7 hari lalu (cegah menyapu pesanan lama). */
export const TICKET_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

const SENT_KEY = (id: string) => `rpm:ticket:sent:${id}`;

/**
 * Pesanan yang berhak menerima e-tiket PDF otomatis: LUNAS otomatis (tunai), punya email, belum pernah dikirimi,
 * sudah ≥ 2 jam setelah jadwal berangkat, dan bukan pesanan yang diisi mundur (dibuat setelah jadwal berangkat).
 */
export function isDueForTicket(order: Order, now = Date.now()): boolean {
  if (order.status !== 'PAID' || !order.autoPaid || !order.email || order.ticketSentAt) return false;
  if (isBackdatedOrder(order)) return false;
  const dep = departureAt(order);
  if (dep === null) return false;
  return now >= dep + AUTO_PAID_DELAY_MS && now <= dep + TICKET_WINDOW_MS;
}

/** Kirim e-tiket PDF untuk pesanan yang jatuh tempo. Dipanggil oleh cron. */
export async function sendDueTickets(orders: Order[], now = Date.now(), max = 10) {
  const due = orders.filter((o) => isDueForTicket(o, now)).slice(0, max);
  let sent = 0, failed = 0, skipped = 0;

  for (const order of due) {
    // Anti-ganda: hanya satu proses yang boleh mengirim untuk pesanan ini
    const claimed = await redis.set(SENT_KEY(order.id), '1', 'EX', 90 * 24 * 60 * 60, 'NX');
    if (claimed !== 'OK') { skipped++; continue; }
    try {
      const result = await sendTicketPdfEmail(order);
      if (!result.ok) {
        console.error('[auto-ticket] gagal:', order.orderNumber, result.error);
        await redis.del(SENT_KEY(order.id)); // boleh dicoba lagi di jadwal berikutnya
        failed++;
        continue;
      }
      const fresh = (await getOrder(order.id)) ?? order;
      await updateOrder({ ...fresh, ticketSentAt: new Date().toISOString() });
      sent++;
    } catch (err) {
      console.error('[auto-ticket] error:', order.orderNumber, err);
      await redis.del(SENT_KEY(order.id));
      failed++;
    }
    await new Promise((r) => setTimeout(r, 600)); // jaga rate limit Resend
  }
  return { due: due.length, sent, failed, skipped };
}
