import { NextRequest, NextResponse, after } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import type { Order, CreateOrderInput } from '@/lib/types';
import { saveOrder, getNextOrderNumber, getOrder, updateOrder } from '@/lib/redis';
import { QRIS_ENABLED } from '@/lib/payment';
import { sendInvoiceEmail } from '@/lib/invoiceEmail';
import { settleDueOrders } from '@/lib/autoSettle';
import { getPackage } from '@/lib/packages';
import { staticToDynamic } from '@/lib/qris';
import { getSupabaseServer } from '@/lib/supabase/server';

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const body: CreateOrderInput = await req.json();
    const {
      nama, hp, paket, tanggal, jam,
      jumlahPax, email, catatan, asal, tujuan,
    } = body;
    // QRIS sementara dimatikan: semua pesanan dipaksa TUNAI (juga untuk klien lama yang masih mengirim QRIS)
    const metodePembayaran = QRIS_ENABLED ? body.metodePembayaran : 'TUNAI';

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

    // Faktur otomatis dikirim ke email begitu pesanan dikonfirmasi pemesan (tidak menunda respons)
    if (order.email) {
      after(async () => {
        try {
          const result = await sendInvoiceEmail(order);
          if (!result.ok) {
            console.error('[auto-invoice] gagal:', order.orderNumber, result.error);
            return;
          }
          const fresh = await getOrder(order.id);
          if (fresh) await updateOrder({ ...fresh, invoiceSentAt: new Date().toISOString() });
        } catch (err) {
          console.error('[auto-invoice] error:', order.orderNumber, err);
        }
      });
    }

    return NextResponse.json({ order }, { status: 201 });
  } catch (err) {
    console.error('Create order error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { listOrders } = await import('@/lib/redis');
    // Pesanan tunai otomatis LUNAS 2 jam setelah jadwal keberangkatan
    const orders = await settleDueOrders(await listOrders(200));
    return NextResponse.json({ orders });
  } catch (err) {
    console.error('List orders error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
