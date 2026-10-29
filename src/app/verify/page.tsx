import type { Metadata } from 'next';
import Link from 'next/link';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

// Tautan dari QR di tiket — pribadi, jangan diindeks mesin pencari.
export const metadata: Metadata = {
  title: 'Verifikasi Tiket | RPM Travel Curup',
  robots: { index: false, follow: false },
};
export const dynamic = 'force-dynamic';

type Row = {
  passenger_name: string;
  route: string;
  travel_date: string;
  pax: number;
  total_price: number;
  issued_at: string;
  expires_at: string;
};

const WIB = 'Asia/Jakarta';
const fmtDateTime = (iso: string) =>
  new Intl.DateTimeFormat('id-ID', { dateStyle: 'full', timeStyle: 'short', timeZone: WIB }).format(new Date(iso)) + ' WIB';
const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeZone: WIB }).format(new Date(iso));
const rupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

// Dipisah dari komponen agar render tetap murni (aturan react-hooks/purity).
const isExpired = (iso: string) => new Date(iso).getTime() < Date.now();

function Wrap({ children }: { children: React.ReactNode }) {
  return <main className="max-w-md mx-auto px-4 py-12">{children}</main>;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-green-100 pb-2 text-sm">
      <dt className="text-gray-600">{k}</dt>
      <dd className="text-right font-semibold text-gray-900">{v}</dd>
    </div>
  );
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  let ticket: Row | null = null;
  if (token && /^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    const sb = getSupabaseAdmin();
    if (sb) {
      // READ-ONLY: hanya SELECT — scan berulang tidak mengubah data apa pun.
      const { data } = await sb
        .from('ticket_verifications')
        .select('passenger_name, route, travel_date, pax, total_price, issued_at, expires_at')
        .eq('token', token)
        .maybeSingle();
      ticket = (data as Row | null) ?? null;
    }
  }

  if (!ticket) {
    return (
      <Wrap>
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="font-display font-bold text-red-800 text-xl mb-2">Tiket Tidak Ditemukan</h1>
          <p className="text-sm text-red-900 leading-relaxed mb-5">
            Kode verifikasi tidak valid atau datanya sudah tidak tersedia. Jika Anda merasa ini keliru,
            hubungi admin RPM Travel lewat WhatsApp.
          </p>
          <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
        </section>
      </Wrap>
    );
  }

  if (isExpired(ticket.expires_at)) {
    return (
      <Wrap>
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-center">
          <h1 className="font-display font-bold text-amber-900 text-xl mb-2">
            Masa verifikasi tiket telah kedaluwarsa
          </h1>
          <p className="text-sm text-amber-900 leading-relaxed mb-5">
            Tiket ini pernah diterbitkan oleh RPM Travel, namun masa verifikasi online (3 bulan sejak
            tanggal keberangkatan) telah berakhir pada {fmtDate(ticket.expires_at)}. Untuk konfirmasi
            lebih lanjut, hubungi admin lewat WhatsApp 0852-8282-8005.
          </p>
          <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
        </section>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <section className="rounded-2xl border border-green-300 bg-green-50 p-6">
        <p className="text-xs font-semibold tracking-widest text-green-800">STATUS TIKET</p>
        <h1 className="font-display font-bold text-green-800 text-3xl mt-1">VALID / RESMI</h1>
        <p className="text-sm text-green-900 mt-1">Tiket ini diterbitkan resmi oleh RPM Travel Curup.</p>

        <dl className="mt-5 space-y-3">
          <Row k="Nama" v={ticket.passenger_name} />
          <Row k="Rute / Paket" v={ticket.route} />
          <Row k="Keberangkatan" v={fmtDateTime(ticket.travel_date)} />
          <Row k="Penumpang" v={`${ticket.pax} orang`} />
          <Row k="Harga" v={rupiah(ticket.total_price)} />
          <Row k="Diterbitkan" v={fmtDate(ticket.issued_at)} />
        </dl>

        <p className="text-xs text-gray-700 mt-4">
          Verifikasi online berlaku sampai {fmtDate(ticket.expires_at)}.
        </p>
      </section>
    </Wrap>
  );
}
