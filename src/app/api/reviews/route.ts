import { NextRequest, NextResponse } from 'next/server';
import type { User } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';
import { getOrder } from '@/lib/redis';
import { getOrderIdByToken, resolveReviewer } from '@/lib/reviews';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { getSupabaseServer } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  let body: { token?: unknown; rating?: unknown; comment?: unknown; showProfile?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Permintaan tidak valid' }, { status: 400 });
  }

  const token = typeof body.token === 'string' ? body.token : '';
  const rating = Number(body.rating);
  // buang karakter kontrol, rapikan spasi
  const comment = (typeof body.comment === 'string' ? body.comment : '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
  const showProfile = body.showProfile !== false; // default: tampilkan

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Pilih rating 1–5 bintang' }, { status: 400 });
  }
  if (comment.length < 10 || comment.length > 600) {
    return NextResponse.json({ error: 'Ulasan harus 10–600 karakter' }, { status: 400 });
  }

  const orderId = await getOrderIdByToken(token);
  if (!orderId) {
    return NextResponse.json({ error: 'Tautan ulasan tidak valid atau sudah kedaluwarsa' }, { status: 404 });
  }
  const order = await getOrder(orderId);
  if (!order || order.status !== 'PAID') {
    return NextResponse.json({ error: 'Pesanan tidak ditemukan' }, { status: 404 });
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    return NextResponse.json({ error: 'Layanan ulasan belum aktif' }, { status: 503 });
  }

  // Akun yang sedang login (jika ada) — hanya dipakai sebagai cadangan identitas
  let session: User | null = null;
  try {
    const sb = await getSupabaseServer();
    if (sb) session = (await sb.auth.getUser()).data.user;
  } catch { /* tamu: lanjut tanpa sesi */ }

  const reviewer = showProfile ? await resolveReviewer(order, admin, session) : null;

  const { error } = await admin.from('reviews').insert({
    booking_id: order.id,
    user_id: reviewer?.userId ?? null,          // anonim → tidak menyimpan user_id
    rating,
    comment,
    is_anonymous: !showProfile,
    display_name: reviewer?.displayName ?? null,
    avatar_url: reviewer?.avatarUrl ?? null,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Ulasan untuk pesanan ini sudah pernah dikirim. Terima kasih!' }, { status: 409 });
    }
    console.error('[reviews] insert error:', error.message);
    return NextResponse.json({ error: 'Gagal menyimpan ulasan, coba lagi' }, { status: 500 });
  }

  revalidatePath('/'); // beranda langsung memuat ulasan baru
  return NextResponse.json({ success: true });
}
