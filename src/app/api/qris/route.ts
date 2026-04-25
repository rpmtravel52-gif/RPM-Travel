import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';
import { staticToDynamic } from '@/lib/qris';

export async function GET(req: NextRequest) {
  try {
    const amount = Number(req.nextUrl.searchParams.get('amount') ?? '0');
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Amount tidak valid' }, { status: 400 });
    }

    const staticQris = process.env.NEXT_PUBLIC_QRIS_STATIC;
    if (!staticQris) {
      return NextResponse.json({ error: 'QRIS tidak dikonfigurasi' }, { status: 500 });
    }

    const dynamicQris = staticToDynamic(staticQris, amount);
    const qrDataUrl = await QRCode.toDataURL(dynamicQris, {
      errorCorrectionLevel: 'M',
      margin: 2,
      width: 300,
    });

    return NextResponse.json({ qrDataUrl, qrisString: dynamicQris });
  } catch (err) {
    console.error('QRIS generation error:', err);
    return NextResponse.json({ error: 'Gagal generate QRIS' }, { status: 500 });
  }
}
