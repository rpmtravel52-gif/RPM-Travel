// src/app/api/receipt/send/route.ts
// Kirim kwitansi manual via Resend

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(amount);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      perusahaan,
      nomorKwitansi,
      tanggal,
      namaPenerima,
      alamatPenerima,
      hpPenerima,
      jenisLayanan,
      tarifPerHari,
      jumlahHari,
      keterangan,
      namaPetugas,
      totalHarga,
      email,
    } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email tidak tersedia' }, { status: 400 });
    }

    const brand = perusahaan === 'BengkuluTravel'
      ? { nama: 'BengkuluTravel.com', warna: '#0284c7', from: 'BengkuluTravel <noreply@bengkulutravel.com>' }
      : { nama: 'KG Transport',       warna: '#16a34a', from: 'KG Transport <noreply@kgtransport.com>' };

    const tgl = new Date(tanggal).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric',
    });

    // HTML email yang profesional
    const emailHtml = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Kwitansi ${nomorKwitansi}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08)">
  
  <!-- Header -->
  <div style="background:${brand.warna};padding:28px 32px">
    <h1 style="color:#fff;font-size:22px;font-weight:700;margin:0">${brand.nama}</h1>
    <p style="color:rgba(255,255,255,.8);font-size:12px;margin:4px 0 0">BTN Air Bang, Curup, Rejang Lebong, Bengkulu</p>
  </div>
  
  <!-- Kwitansi badge -->
  <div style="background:#f8fafc;padding:16px 32px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center">
    <div>
      <span style="font-size:18px;font-weight:700;color:#1e293b;letter-spacing:1px">KWITANSI</span>
    </div>
    <div style="text-align:right">
      <p style="font-size:12px;color:#64748b;margin:0">No. ${nomorKwitansi}</p>
      <p style="font-size:12px;color:#64748b;margin:2px 0 0">Tgl. ${tgl}</p>
    </div>
  </div>

  <!-- Body -->
  <div style="padding:28px 32px">
    
    <!-- Info Penerima -->
    <div style="background:#f8fafc;border-left:4px solid ${brand.warna};border-radius:0 8px 8px 0;padding:14px 16px;margin-bottom:20px">
      <p style="font-size:10px;text-transform:uppercase;color:#94a3b8;font-weight:600;margin:0 0 6px;letter-spacing:.5px">Diterima dari</p>
      <p style="font-size:16px;font-weight:700;color:#1e293b;margin:0">${namaPenerima}</p>
      ${alamatPenerima ? `<p style="font-size:13px;color:#64748b;margin:3px 0 0">${alamatPenerima}</p>` : ''}
      ${hpPenerima    ? `<p style="font-size:13px;color:#64748b;margin:2px 0 0">📱 ${hpPenerima}</p>` : ''}
    </div>

    <!-- Tabel Layanan -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
      <thead>
        <tr style="background:${brand.warna}">
          <th style="color:#fff;font-size:11px;padding:9px 12px;text-align:left;border-radius:6px 0 0 0">Keterangan</th>
          <th style="color:#fff;font-size:11px;padding:9px 12px;text-align:center">Hari</th>
          <th style="color:#fff;font-size:11px;padding:9px 12px;text-align:right">Tarif/Hari</th>
          <th style="color:#fff;font-size:11px;padding:9px 12px;text-align:right;border-radius:0 6px 0 0">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f0f9ff">
          <td style="padding:11px 12px;font-size:13px;border-bottom:1px solid #e2e8f0">
            <strong>${jenisLayanan}</strong><br/>
            <span style="font-size:11px;color:#64748b">${keterangan || ''}</span>
          </td>
          <td style="padding:11px 12px;font-size:13px;text-align:center;border-bottom:1px solid #e2e8f0">${jumlahHari}</td>
          <td style="padding:11px 12px;font-size:13px;text-align:right;border-bottom:1px solid #e2e8f0">${formatRupiah(tarifPerHari)}</td>
          <td style="padding:11px 12px;font-size:13px;text-align:right;font-weight:700;border-bottom:1px solid #e2e8f0">${formatRupiah(totalHarga)}</td>
        </tr>
      </tbody>
    </table>

    <!-- Total Box -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:28px">
      <div style="background:${brand.warna};color:#fff;padding:12px 20px;border-radius:8px;min-width:200px;display:flex;justify-content:space-between;gap:24px">
        <span style="font-weight:700;font-size:14px">TOTAL DIBAYAR</span>
        <span style="font-weight:700;font-size:14px">${formatRupiah(totalHarga)}</span>
      </div>
    </div>

    <!-- Petugas -->
    <div style="border-top:1px solid #e2e8f0;padding-top:16px;display:flex;justify-content:space-between">
      <div style="text-align:center;flex:1">
        <div style="height:50px;border-bottom:1px solid #cbd5e1;margin-bottom:8px"></div>
        <p style="font-size:11px;color:#94a3b8;margin:0">Penerima</p>
        <p style="font-size:12px;font-weight:600;color:#1e293b;margin:2px 0 0">${namaPenerima}</p>
      </div>
      <div style="width:40px"></div>
      <div style="text-align:center;flex:1">
        <div style="height:50px;border-bottom:1px solid #cbd5e1;margin-bottom:8px"></div>
        <p style="font-size:11px;color:#94a3b8;margin:0">Yang Menerima Pembayaran</p>
        <p style="font-size:12px;font-weight:600;color:#1e293b;margin:2px 0 0">${namaPetugas || brand.nama}</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center">
    <p style="font-size:11px;color:#94a3b8;margin:0">${brand.nama} · BTN Air Bang, Curup, Rejang Lebong, Bengkulu</p>
    <p style="font-size:10px;color:#cbd5e1;margin:4px 0 0">Dokumen ini digenerate otomatis oleh sistem</p>
  </div>

</div>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: brand.from,
      to: [email],
      subject: `Kwitansi ${nomorKwitansi} - ${brand.nama}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err) {
    console.error('Receipt send error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
