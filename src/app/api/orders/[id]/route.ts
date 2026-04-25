import { NextRequest, NextResponse } from 'next/server';
import { getOrder } from '@/lib/redis';

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
