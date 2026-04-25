import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { Resend } from 'resend';
import { createElement } from 'react';
import { getOrder } from '@/lib/redis';
import { TicketDocument } from '@/lib/pdf';
import { formatRupiah } from '@/lib/packages';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('[send-ticket] Start for order:', id);

    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    if (order.status !== 'PAID') return NextResponse.json({ error: 'Order belum lunas' }, { status: 400 });
    if (!order.email) return NextResponse.json({ error: 'Email tidak tersedia' }, { status: 400 });
    if (!process.env.RESEND_API_KEY) {
      console.error('[send-ticket] RESEND_API_KEY not set!');
      return NextResponse.json({ error: 'Email service tidak dikonfigurasi' }, { status: 500 });
    }

    console.log('[send-ticket] Generating PDF...');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const element = createElement(TicketDocument, { order }) as any;
    const pdfBuffer = await renderToBuffer(element);
    console.log('[send-ticket] PDF size:', pdfBuffer.length);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: [order.email],
      subject: `E-Ticket ${order.orderNumber} – RPM Travel Curup ✓ LUNAS`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#16a34a;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;">✓ Pembayaran Dikonfirmasi</h2>
            <p style="color:#bbf7d0;margin:6px 0 0;font-size:13px;">RPM Travel Curup</p>
          </div>
          <div style="background:#f8fafc;padding:24px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1e293b;font-size:15px;">Halo <strong>${order.nama}</strong>,</p>
            <p style="color:#475569;font-size:14px;">Pembayaran Anda telah dikonfirmasi. E-Ticket terlampir.</p>
            <div style="background:#dcfce7;border-left:4px solid #16a34a;padding:12px 16px;margin:16px 0;border-radius:0 6px 6px 0;">
              <p style="margin:0;color:#15803d;font-weight:700;">${order.paket}</p>
              <p style="margin:4px 0 0;color:#166534;font-size:13px;">
                ${new Date(order.tanggal).toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})}
                &nbsp;·&nbsp; ${order.jumlahPax} penumpang
              </p>
            </div>
            <table style="width:100%;font-size:13px;border-collapse:collapse;margin:12px 0;">
              <tr><td style="padding:5px 0;color:#64748b;">No. Pesanan</td><td style="font-weight:700;">${order.orderNumber}</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Total Dibayar</td><td style="font-weight:700;color:#16a34a;">${formatRupiah(order.totalHarga)}</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Metode</td><td>${order.metodePembayaran}</td></tr>
            </table>
            <p style="color:#475569;font-size:13px;">Tunjukkan e-ticket ini kepada sopir. Hadir 15 menit sebelum jadwal.</p>
            <p style="color:#94a3b8;font-size:12px;margin-top:16px;border-top:1px solid #e2e8f0;padding-top:12px;">
              RPM Travel Curup &nbsp;·&nbsp; WA: 0852-8282-8005 &nbsp;·&nbsp; rpmtravel.co.id
            </p>
          </div>
        </div>
      `,
      attachments: [{ filename: `E-Ticket-${order.orderNumber}.pdf`, content: pdfBuffer }],
    });

    if (error) {
      console.error('[send-ticket] Resend error:', JSON.stringify(error));
      return NextResponse.json({ error: `Resend error: ${error.message}` }, { status: 500 });
    }

    console.log('[send-ticket] Sent, id:', data?.id);
    return NextResponse.json({ success: true, emailId: data?.id });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[send-ticket] Error:', msg);
    return NextResponse.json({ error: `Server error: ${msg}` }, { status: 500 });
  }
}
