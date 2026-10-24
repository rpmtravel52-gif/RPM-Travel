import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase/server';
import { listOrdersByUser } from '@/lib/redis';

// Daftar pesanan milik akun yang sedang login
export async function GET() {
  try {
    const sb = await getSupabaseServer();
    if (!sb) return NextResponse.json({ error: 'Login belum aktif' }, { status: 503 });
    const { data } = await sb.auth.getUser();
    if (!data.user) return NextResponse.json({ error: 'Belum login' }, { status: 401 });

    const orders = await listOrdersByUser(data.user.id);
    return NextResponse.json({ orders });
  } catch (err) {
    console.error('My orders error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
