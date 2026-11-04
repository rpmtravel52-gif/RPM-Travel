import { NextRequest, NextResponse } from 'next/server';
import { getOrder, deleteOrder } from '@/lib/redis';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    return NextResponse.json({ order });
  } catch (err) {
    console.error('Get order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// Khusus admin (dijaga proxy.ts): hapus permanen pesanan, mis. data demo/uji coba.
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    await deleteOrder(order);
    try { await getSupabaseAdmin()?.from('ticket_verifications').delete().eq('booking_id', id); } catch {}
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Delete order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
