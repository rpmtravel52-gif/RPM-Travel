import crypto from 'crypto';
import QRCode from 'qrcode';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { departureAt } from '@/lib/reviews';
import type { Order } from '@/lib/types';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rpmtravel.co.id';

/** Masa verifikasi QR: 3 bulan sejak tanggal keberangkatan. */
export const VERIFY_MONTHS = 3;

export interface TicketVerification {
  verifyUrl: string;
  qrDataUrl: string;
  issuedAt: string;   // ISO
  expiresAt: string;  // ISO
}

const COLS = 'token, issued_at, expires_at, travel_date, passenger_name, route, pax, total_price, order_number';

function travelTime(order: Order): number {
  return departureAt(order) ?? Date.parse(order.tanggal) ?? Date.now();
}

function addMonths(ms: number, months: number): Date {
  const d = new Date(ms);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d;
}

/**
 * Ambil (atau buat sekali) token verifikasi untuk pesanan, lalu hasilkan QR code-nya.
 * - Idempoten: 1 token per pesanan; kirim ulang tiket memakai token & tanggal terbit yang sama.
 * - Jika jadwal/harga pesanan berubah, snapshot disinkronkan (token & issued_at tetap).
 * - Tidak pernah melempar error: jika Supabase belum siap, tiket tetap terkirim tanpa QR (return null).
 */
export async function getOrCreateVerification(order: Order): Promise<TicketVerification | null> {
  try {
    const sb = getSupabaseAdmin();
    if (!sb) {
      console.error('[ticket-verify] Supabase service role belum dikonfigurasi — tiket tanpa QR');
      return null;
    }

    const dep = travelTime(order);
    const snapshot = {
      order_number: order.orderNumber,
      passenger_name: order.nama,
      route: order.paket,
      travel_date: new Date(dep).toISOString(),
      pax: order.jumlahPax,
      total_price: Math.round(order.totalHarga),
      expires_at: addMonths(dep, VERIFY_MONTHS).toISOString(),
    };

    const find = () => sb.from('ticket_verifications').select(COLS).eq('booking_id', order.id).maybeSingle();

    let { data: row } = await find();

    if (!row) {
      const { error } = await sb.from('ticket_verifications').insert({
        token: crypto.randomBytes(24).toString('base64url'), // 32 karakter, tak bisa ditebak
        booking_id: order.id,
        ...snapshot,
      });
      // 23505 = unique violation (dua proses menerbitkan bersamaan) → cukup baca ulang
      if (error && error.code !== '23505') throw error;
      ({ data: row } = await find());
    } else if (
      new Date(row.travel_date).getTime() !== dep ||
      row.passenger_name !== snapshot.passenger_name ||
      row.route !== snapshot.route ||
      row.total_price !== snapshot.total_price ||
      row.pax !== snapshot.pax
    ) {
      await sb.from('ticket_verifications').update(snapshot).eq('booking_id', order.id);
      row = { ...row, ...snapshot };
    }

    if (!row) return null;

    const verifyUrl = `${SITE}/verify?token=${row.token}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      errorCorrectionLevel: 'M', margin: 1, width: 320,
    });
    return {
      verifyUrl,
      qrDataUrl,
      issuedAt: new Date(row.issued_at).toISOString(),
      expiresAt: new Date(row.expires_at).toISOString(),
    };
  } catch (err) {
    console.error('[ticket-verify] gagal:', err instanceof Error ? err.message : err);
    return null;
  }
}
