import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import type { Order, CreateOrderInput } from '@/lib/types';
import { saveOrder, getNextOrderNumber } from '@/lib/redis';
import { getPackage } from '@/lib/packages';
import { staticToDynamic } from '@/lib/qris';
import { getSupabaseServer } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const body: CreateOrderInput = await req.json();
    const {
      nama, hp, paket, tanggal, jam,
      jumlahPax, metodePembayaran, email, catatan, asal, tujuan,
    } = body;

    // Jika pemesan sedang login, kaitkan pesanan ke akunnya (id diambil dari sesi server, bukan dari klien)
    let userId: string | undefined;
    try {
      const sb = await getSupabaseServer();
      if (sb) {
        const { data } = await sb.auth.getUser();
        userId = data.user?.id;
      }
    } catch {
      userId = undefined;
    }

    // Validasi field wajib
    if (!nama || !hp || !paket || !tanggal || !jumlahPax || !metodePembayaran) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    const pkg = getPackage(paket);
    if (!pkg) {
      return NextResponse.json({ error: 'Paket tidak ditemukan' }, { status: 400 });
    }

    const hargaPerPax = pkg.harga;
    const totalHarga  = hargaPerPax * jumlahPax;
    const id          = uuidv4();
    const orderNumber = await getNextOrderNumber();

    // Generate dynamic QRIS jika metode QRIS
    let qrisData: string | undefined;
    if (metodePembayaran === 'QRIS') {
      const staticQris = process.env.NEXT_PUBLIC_QRIS_STATIC;
      if (staticQris) {
        const dynamicQris = staticToDynamic(staticQris, totalHarga);
        qrisData = await QRCode.toDataURL(dynamicQris, {
          errorCorrectionLevel: 'M',
          margin: 2,
          width: 400,
        });
      }
    }

    const order: Order = {
      id,
      orderNumber,
      userId,
      paketId: pkg.id,
      asal: asal || undefined,
      tujuan: tujuan || undefined,
      nama,
      hp,                          // ← nomor WA pelanggan
      paket: pkg.label,
      tanggal,
      jam: jam || undefined,       // ← jam keberangkatan (opsional)
      jumlahPax,
      hargaPerPax,
      totalHarga,
      metodePembayaran,
      email: email || undefined,
      catatan: catatan || undefined,
      status: 'UNPAID',
      createdAt: new Date().toISOString(),
      qrisData,
    };

    await saveOrder(order);

    return NextResponse.json({ order }, { status: 201 });
  } catch (err) {
    console.error('Create order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { listOrders } = await import('@/lib/redis');
    const orders = await listOrders(200);
    return NextResponse.json({ orders });
  } catch (err) {
    console.error('List orders error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
