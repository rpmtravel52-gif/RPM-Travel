import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { Resend } from 'resend';
import React from 'react';
import { getOrder } from '@/lib/redis';
import { TicketDocument } from '@/lib/pdf';
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
    if (order.status !== 'PAID') return NextResponse.json({ error: 'Order belum lunas' }, { status: 400 });
    if (!order.email) return NextResponse.json({ error: 'Email tidak tersedia' }, { status: 400 });

    const pdfBuffer = await renderToBuffer(
  React.createElement(TicketDocument, { order }) as unknown as React.ReactElement<import('@react-pdf/renderer').DocumentProps>
);

    await resend.emails.send({
      from: 'RPM Travel Curup <noreply@rpmtravel.id>',
      to: [order.email],
      subject: `E-Ticket ${order.orderNumber} – RPM Travel Curup ✓ LUNAS`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#16a34a;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;font-size:20px;">✓ Pembayaran Dikonfirmasi</h2>
            <p style="color:#bbf7d0;margin:4px 0 0;font-size:13px;">RPM Travel Curup</p>
          </div>
          <div style="background:#f8fafc;padding:24px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1e293b;font-size:15px;">Halo <strong>${order.nama}</strong>,</p>
            <p style="color:#475569;font-size:14px;line-height:1.6;">
              Pembayaran Anda telah dikonfirmasi! E-Ticket perjalanan Anda terlampir.
            </p>
            <div style="background:#dcfce7;border-left:4px solid #16a34a;padding:12px 16px;border-radius:0 6px 6px 0;margin:16px 0;">
              <p style="margin:0;color:#15803d;font-weight:700;font-size:14px;">${order.paket}</p>
              <p style="margin:4px 0 0;color:#166534;font-size:13px;">
                ${new Date(order.tanggal).toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})} · ${order.jumlahPax} penumpang
              </p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:13px;margin:16px 0;">
              <tr><td style="padding:6px 0;color:#64748b;">No. Pesanan</td><td style="font-weight:700;color:#1e293b;">${order.orderNumber}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Total Dibayar</td><td style="font-weight:700;color:#16a34a;">${formatRupiah(order.totalHarga)}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Metode Bayar</td><td style="color:#1e293b;">${order.metodePembayaran}</td></tr>
            </table>
            <p style="color:#475569;font-size:13px;line-height:1.6;">
              📌 Harap tunjukkan e-ticket ini kepada sopir.<br/>
              📌 Tiba di titik jemput 15 menit sebelum jadwal.<br/>
              📌 Info sopir dikirim via WA sehari sebelum berangkat.
            </p>
            <p style="color:#94a3b8;font-size:12px;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:12px;">
              RPM Travel Curup · Jl. S. Parman, Talang Benih, Curup · WA: 0852-8282-8005
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `E-Ticket-${order.orderNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Send ticket error:', err);
    return NextResponse.json({ error: 'Gagal mengirim email' }, { status: 500 });
  }
}
