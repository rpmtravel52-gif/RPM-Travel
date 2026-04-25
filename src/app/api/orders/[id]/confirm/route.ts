import { NextRequest, NextResponse } from 'next/server';
import { getOrder, updateOrder } from '@/lib/redis';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    if (order.status === 'PAID') return NextResponse.json({ error: 'Sudah lunas' }, { status: 400 });

    order.status = 'PAID';
    order.paidAt = new Date().toISOString();
    await updateOrder(order);

    return NextResponse.json({ order });
  } catch (err) {
    console.error('Confirm order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
