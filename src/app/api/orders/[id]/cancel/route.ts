import { NextRequest, NextResponse } from 'next/server';
import { getOrder, updateOrder } from '@/lib/redis';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

// Khusus admin (dijaga proxy.ts). Batalkan pesanan, atau aktifkan kembali dengan body { restore: true }.
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });

    if (body?.restore) {
      if (order.status !== 'CANCELLED') return NextResponse.json({ error: 'Order tidak dalam status batal' }, { status: 400 });
      const { cancelledAt, ...rest } = order; void cancelledAt;
      await updateOrder({ ...rest, status: order.paidAt ? 'PAID' : 'UNPAID' });
      return NextResponse.json({ ok: true });
    }

    if (order.status === 'CANCELLED') return NextResponse.json({ error: 'Order sudah dibatalkan' }, { status: 400 });
    await updateOrder({ ...order, status: 'CANCELLED', cancelledAt: new Date().toISOString() });

    // QR verifikasi tiket pesanan ini dinonaktifkan (best-effort)
    try { await getSupabaseAdmin()?.from('ticket_verifications').delete().eq('booking_id', id); } catch {}
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Cancel order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
