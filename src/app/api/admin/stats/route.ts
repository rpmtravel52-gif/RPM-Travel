import { NextRequest, NextResponse } from 'next/server';
import { listOrders } from '@/lib/redis';
import { getWaStats, resetWaStats, wibDate } from '@/lib/waStats';

export const dynamic = 'force-dynamic';

// Khusus admin (dijaga proxy.ts). GET ?days=7|30|90 → data grafik. DELETE → reset hitungan klik WA.
export async function GET(req: NextRequest) {
  try {
    const q = Number(req.nextUrl.searchParams.get('days'));
    const days = [7, 30, 90].includes(q) ? q : 30;

    const [orders, wa] = await Promise.all([listOrders(2000), getWaStats()]);
    const active = orders.filter((o) => o.status !== 'CANCELLED');

    // Deret harian (WIB), dari hari tertua → hari ini
    const labels: string[] = [];
    for (let i = days - 1; i >= 0; i--) labels.push(wibDate(Date.now() - i * 86400_000));
    const ordersPerDay: Record<string, number> = {};
    const routeCount: Record<string, { count: number; pax: number }> = {};
    for (const o of active) {
      const d = wibDate(new Date(o.createdAt).getTime());
      if (!labels.includes(d)) continue;
      ordersPerDay[d] = (ordersPerDay[d] ?? 0) + 1;
      const r = (routeCount[o.paket] ??= { count: 0, pax: 0 });
      r.count += 1;
      r.pax += o.jumlahPax;
    }

    const series = labels.map((date) => ({
      date,
      orders: ordersPerDay[date] ?? 0,
      wa: wa.daily[date] ?? 0,
    }));

    const routes = Object.entries(routeCount)
      .map(([name, v]) => ({ name, ...v }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const pages = Object.entries(wa.pages)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const waPeriod = series.reduce((s, d) => s + d.wa, 0);
    const ordersPeriod = series.reduce((s, d) => s + d.orders, 0);

    return NextResponse.json({
      days,
      series,
      routes,
      pages,
      sources: wa.sources,
      totals: {
        waTotal: wa.total,
        waToday: wa.daily[wibDate()] ?? 0,
        waPeriod,
        ordersPeriod,
        ordersAll: active.length,
      },
      waSince: wa.since,
    });
  } catch (err) {
    console.error('Admin stats error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await resetWaStats();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Reset WA stats error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
