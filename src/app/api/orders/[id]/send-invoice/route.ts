import { NextRequest, NextResponse } from 'next/server';
import { getOrder, updateOrder } from '@/lib/redis';
import { sendInvoiceEmail } from '@/lib/invoiceEmail';

export const maxDuration = 30;

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });

    const result = await sendInvoiceEmail(order);
    if (!result.ok) return NextResponse.json({ error: result.error }, { status: result.status });

    await updateOrder({ ...order, invoiceSentAt: new Date().toISOString() });
    return NextResponse.json({ success: true, emailId: result.emailId });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[send-invoice] Error:', msg);
    return NextResponse.json({ error: `Server error: ${msg}` }, { status: 500 });
  }
}
