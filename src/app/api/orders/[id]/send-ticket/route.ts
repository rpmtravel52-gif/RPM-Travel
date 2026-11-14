import { NextRequest, NextResponse } from 'next/server';
import { getOrder, updateOrder } from '@/lib/redis';
import { sendTicketPdfEmail } from '@/lib/ticketEmail';

export const maxDuration = 60;

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });

    const result = await sendTicketPdfEmail(order);
    if (!result.ok) return NextResponse.json({ error: result.error }, { status: result.status });

    // Tandai terkirim agar pengiriman otomatis tidak mengirim ganda
    const fresh = (await getOrder(id)) ?? order;
    await updateOrder({ ...fresh, ticketSentAt: new Date().toISOString() });
    return NextResponse.json({ success: true, emailId: result.emailId });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[send-ticket] Error:', msg);
    return NextResponse.json({ error: `Server error: ${msg}` }, { status: 500 });
  }
}
