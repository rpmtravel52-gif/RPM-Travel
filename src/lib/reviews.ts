import crypto from 'node:crypto';
import type { SupabaseClient } from '@supabase/supabase-js';
import { redis } from './redis';
import type { Order } from './types';

// ── Aturan jadwal email ulasan ────────────────────────────────
export const REVIEW_DELAY_MS  = 12 * 60 * 60 * 1000;      // kirim ≥ 12 jam setelah keberangkatan
export const REVIEW_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;  // jangan kirim untuk perjalanan > 7 hari lalu (cegah menyapu pesanan lama)
const TOKEN_TTL_SEC = 60 * 24 * 60 * 60;                  // tautan ulasan berlaku 60 hari

const TOKEN_KEY = (t: string) => `rpm:review:token:${t}`;
const SENT_KEY  = (id: string) => `rpm:review:sent:${id}`;

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

/** Pesanan yang berhak menerima email ulasan sekarang. */
export function isDueForReview(order: Order, now = Date.now()): boolean {
  if (order.status !== 'PAID' || !order.email || order.reviewEmailSent) return false;
  const dep = departureAt(order);
  if (dep === null) return false;
  return now >= dep + REVIEW_DELAY_MS && now <= dep + REVIEW_WINDOW_MS;
}

// ── Token tautan ulasan (acak, disimpan di Redis → id pesanan) ─
export async function createReviewToken(orderId: string): Promise<string> {
  const token = crypto.randomBytes(24).toString('base64url'); // 32 karakter, tak bisa ditebak
  await redis.set(TOKEN_KEY(token), orderId, 'EX', TOKEN_TTL_SEC);
  return token;
}

export async function getOrderIdByToken(token: string | null | undefined): Promise<string | null> {
  if (!token || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) return null;
  return redis.get(TOKEN_KEY(token));
}

/** Kunci anti-ganda: true jika proses ini yang berhak mengirim email untuk pesanan tsb. */
export async function claimReviewSend(orderId: string): Promise<boolean> {
  const r = await redis.set(SENT_KEY(orderId), '1', 'EX', 90 * 24 * 60 * 60, 'NX');
  return r === 'OK';
}
export async function releaseReviewSend(orderId: string): Promise<void> {
  await redis.del(SENT_KEY(orderId));
}

// ── Identitas yang tampil di ulasan publik ────────────────────
export interface ReviewerIdentity {
  userId: string | null;
  displayName: string;
  avatarUrl: string | null;
}

interface SessionUserLike {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, unknown> | null;
}

function pickMeta(meta: Record<string, unknown> | null | undefined) {
  const s = (k: string) => (typeof meta?.[k] === 'string' ? (meta[k] as string).trim() : '');
  return {
    name: s('full_name') || s('name'),
    avatar: s('avatar_url') || s('picture'),
  };
}

/**
 * Nama & foto profil untuk ulasan (dipakai saat pelanggan mencentang "tampilkan profil saya").
 * Urutan: akun yang terkait pesanan → akun yang sedang login → nama pada pesanan (tanpa foto).
 */
export async function resolveReviewer(
  order: Order,
  admin: SupabaseClient | null,
  session: SessionUserLike | null
): Promise<ReviewerIdentity> {
  const fallbackName = (order.nama || '').trim().slice(0, 40) || 'Pelanggan Travel';

  let user: SessionUserLike | null = null;
  if (order.userId && admin) {
    try {
      const { data } = await admin.auth.admin.getUserById(order.userId);
      if (data?.user) user = data.user as SessionUserLike;
    } catch { /* abaikan, pakai cadangan */ }
  }
  if (!user && !order.userId && session) user = session;

  if (!user) return { userId: order.userId ?? null, displayName: fallbackName, avatarUrl: null };

  const { name, avatar } = pickMeta(user.user_metadata);
  return {
    userId: user.id,
    displayName: (name || fallbackName).slice(0, 60),
    avatarUrl: avatar && /^https:\/\//.test(avatar) ? avatar : null,
  };
}
