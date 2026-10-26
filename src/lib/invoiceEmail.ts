// Kirim faktur (PDF) ke email pemesan lewat Resend.
// Dipakai oleh tombol "Email Faktur" di admin dan otomatis saat pesanan dibuat.
import type { Order } from './types';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export type InvoiceResult =
  | { ok: true; emailId?: string }
  | { ok: false; status: number; error: string };

export async function sendInvoiceEmail(order: Order): Promise<InvoiceResult> {
  if (!order.email) return { ok: false, status: 400, error: 'Email tidak tersedia' };
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, status: 500, error: 'Email service tidak dikonfigurasi' };
  }

  const [{ renderToBuffer }, { Resend }, { createElement }, { InvoiceDocument }, { formatRupiah }] =
    await Promise.all([
      import('@react-pdf/renderer'),
      import('resend'),
      import('react'),
      import('./pdf'),
      import('./packages'),
    ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const element = createElement(InvoiceDocument, { order }) as any;
  const pdfBuffer = await renderToBuffer(element);

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
    to: [order.email],
    subject: `Faktur Tagihan ${order.orderNumber} – RPM Travel Curup`,
    html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
          <div style="background:#0284c7;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;">RPM Travel Curup</h2>
            <p style="color:#bae6fd;margin:6px 0 0;font-size:13px;">Faktur Tagihan — ${esc(order.orderNumber)}</p>
          </div>
          <div style="background:#f8fafc;padding:24px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#1e293b;font-size:15px;">Halo <strong>${esc(order.nama)}</strong>,</p>
            <p style="color:#475569;font-size:14px;">Berikut faktur tagihan perjalanan Anda.</p>
            <table style="width:100%;font-size:13px;border-collapse:collapse;margin:12px 0;">
              <tr><td style="padding:5px 0;color:#64748b;">No. Pesanan</td><td style="font-weight:700;">${esc(order.orderNumber)}</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Paket</td><td>${esc(order.paket)}</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Tanggal</td><td>${new Date(order.tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Penumpang</td><td>${order.jumlahPax} orang</td></tr>
              <tr><td style="padding:5px 0;color:#64748b;">Metode Bayar</td><td>${order.metodePembayaran}</td></tr>
              <tr style="border-top:2px solid #0284c7;">
                <td style="padding:10px 0;color:#0284c7;font-weight:700;font-size:15px;">TOTAL</td>
                <td style="color:#0284c7;font-weight:700;font-size:15px;">${formatRupiah(order.totalHarga)}</td>
              </tr>
            </table>
            <p style="color:#94a3b8;font-size:12px;border-top:1px solid #e2e8f0;padding-top:12px;margin-top:16px;">
              RPM Travel Curup &nbsp;·&nbsp; WA: 0852-8282-8005
            </p>
          </div>
        </div>
      `,
    attachments: [{ filename: `Faktur-${order.orderNumber}.pdf`, content: pdfBuffer }],
  });

  if (error) {
    console.error('[invoice-email] Resend error:', JSON.stringify(error));
    return { ok: false, status: 500, error: `Resend error: ${error.message}` };
  }
  return { ok: true, emailId: data?.id };
}
