import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { Resend } from 'resend';
import React from 'react';
import { getOrder } from '@/lib/redis';
import { InvoiceDocument } from '@/lib/pdf';
import { formatRupiah } from '@/lib/packages';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = await getOrder(id);
    if (!order) return NextResponse.json({ error: 'Order tidak ditemukan' }, { status: 404 });
    if (!order.email) return NextResponse.json({ error: 'Email tidak tersedia' }, { status: 400 });

    // Generate PDF buffer
    const pdfBuffer = await renderToBuffer(<InvoiceDocument order={order} /> as React.ReactElement<any>);

    await resend.emails.send({
      from: 'RPM Travel Curup <noreply@rpmtravel.id>',
      to: [order.email],
      subject: `Faktur Tagihan ${order.orderNumber} – RPM Travel Curup`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#0284c7;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;font-size:20px;">RPM Travel Curup</h2>
            <p style="color:#bae6fd;margin:4px 0 0;font-size:13px;">Faktur Tagihan</p>
          </div>
          <div style="background:#f8fafc;padding:24px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1e293b;font-size:15px;">Halo <strong>${order.nama}</strong>,</p>
            <p style="color:#475569;font-size:14px;line-height:1.6;">
              Terima kasih telah memesan travel di RPM Travel Curup. Berikut adalah faktur tagihan Anda.
            </p>
            <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px;">
              <tr><td style="padding:6px 0;color:#64748b;">No. Pesanan</td><td style="font-weight:700;color:#1e293b;">${order.orderNumber}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Paket</td><td style="color:#1e293b;">${order.paket}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Tanggal</td><td style="color:#1e293b;">${new Date(order.tanggal).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Penumpang</td><td style="color:#1e293b;">${order.jumlahPax} orang</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Metode Bayar</td><td style="color:#1e293b;">${order.metodePembayaran}</td></tr>
              <tr style="border-top:2px solid #0284c7;">
                <td style="padding:10px 0;color:#0284c7;font-weight:700;font-size:15px;">TOTAL</td>
                <td style="color:#0284c7;font-weight:700;font-size:15px;">${formatRupiah(order.totalHarga)}</td>
              </tr>
            </table>
            <p style="color:#475569;font-size:13px;">Faktur terlampir dalam format PDF. Silakan lakukan pembayaran sesuai instruksi di dalam faktur.</p>
            <p style="color:#94a3b8;font-size:12px;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:12px;">
              RPM Travel Curup · Jl. S. Parman, Talang Benih, Curup · WA: 0852-8282-8005
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `Faktur-${order.orderNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Send invoice error:', err);
    return NextResponse.json({ error: 'Gagal mengirim email' }, { status: 500 });
  }
}
