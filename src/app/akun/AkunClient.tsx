'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@/components/Avatar';
import { useAuth, type AuthUser } from '@/components/AuthProvider';
import { getSupabaseBrowser } from '@/lib/supabase/client';
import { formatRupiah, PACKAGES } from '@/lib/packages';
import { normalizeHp, type Profile } from '@/lib/profile';
import { Stars } from '@/components/ReviewParts';
import type { Order } from '@/lib/types';

/** Status ulasan sebuah pesanan (hanya ada untuk pesanan lunas yang sudah berangkat). */
export interface ReviewInfo {
  token: string;
  rating?: number;   // terisi jika sudah mengulas
  comment?: string;
}

const WA_NUMBER = '6285282828005';

const fmtTanggal = (iso: string) =>
  new Date(iso + (iso.length <= 10 ? 'T00:00:00' : '')).toLocaleDateString('id-ID', {
    weekday: 'short', day: '2-digit', month: 'long', year: 'numeric',
  });

const todayStr = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

/** Pesanan dianggap "berjalan" bila belum lunas atau tanggal berangkat belum lewat. */
const isBerjalan = (o: Order, today: string) => o.status === 'UNPAID' || o.tanggal >= today;

/** Link "Pesan Kembali": mengisi ulang form pesan dengan data pesanan lama (tanggal dipilih ulang). */
function reorderHref(o: Order): string {
  const paketId = o.paketId ?? PACKAGES.find((p) => p.label === o.paket)?.id ?? '';
  const q = new URLSearchParams();
  if (paketId) q.set('paket', paketId);
  if (o.asal) q.set('asal', o.asal);
  if (o.tujuan) q.set('tujuan', o.tujuan);
  if (o.jumlahPax) q.set('pax', String(o.jumlahPax));
  if (o.jam) q.set('jam', o.jam);
  q.set('metode', o.metodePembayaran);
  return `/pesan?${q.toString()}`;
}

function StatusBadge({ order }: { order: Order }) {
  const paid = order.status === 'PAID';
  return (
    <span className={`text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${paid ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
      {paid ? 'Lunas' : 'Menunggu pembayaran'}
    </span>
  );
}

function OrderCard({ order, detail, review }: { order: Order; detail: boolean; review?: ReviewInfo }) {
  const [showQr, setShowQr] = useState(false);
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo RPM Travel, saya ingin menanyakan pesanan ${order.orderNumber}`)}`;

  return (
    <li className="bg-white rounded-2xl border border-gray-100 shadow-soft p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-primary-900 leading-snug">{order.paket}</p>
          <p className="text-xs text-gray-400 font-mono mt-0.5">{order.orderNumber}</p>
        </div>
        <StatusBadge order={order} />
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
        <div>
          <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Berangkat</dt>
          <dd className="text-gray-700 font-medium">{fmtTanggal(order.tanggal)}{order.jam ? ` · ${order.jam} WIB` : ''}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Total</dt>
          <dd className="text-gray-700 font-medium">{formatRupiah(order.totalHarga)} · {order.metodePembayaran}</dd>
        </div>
        {detail && (
          <>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Penumpang</dt>
              <dd className="text-gray-700 font-medium">{order.jumlahPax} orang</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Dipesan</dt>
              <dd className="text-gray-700 font-medium">{fmtTanggal(order.createdAt.slice(0, 10))}</dd>
            </div>
            {(order.asal || order.tujuan) && (
              <div className="col-span-2">
                <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Jemput → Tujuan</dt>
                <dd className="text-gray-700 font-medium">{order.asal || '-'} → {order.tujuan || '-'}</dd>
              </div>
            )}
            {order.catatan && (
              <div className="col-span-2">
                <dt className="text-[0.7rem] uppercase tracking-wide text-gray-400">Catatan</dt>
                <dd className="text-gray-700">{order.catatan}</dd>
              </div>
            )}
          </>
        )}
      </dl>

      {detail && order.status === 'UNPAID' && order.metodePembayaran === 'QRIS' && order.qrisData && (
        <div className="mt-3">
          <button type="button" onClick={() => setShowQr((v) => !v)}
            className="text-sm font-semibold text-gold-700 hover:underline">
            {showQr ? 'Sembunyikan QRIS' : 'Tampilkan QRIS pembayaran'}
          </button>
          {showQr && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={order.qrisData} alt={`QRIS pesanan ${order.orderNumber}`} className="mt-2 w-56 h-56 rounded-xl border border-gray-100" />
          )}
        </div>
      )}

      {review?.rating ? (
        <div className="mt-4 rounded-xl bg-gold-50 border border-gold-200 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wide text-primary-900">Ulasan Anda</p>
            <Link href={`/review?token=${encodeURIComponent(review.token)}&from=akun`}
              className="text-sm font-semibold text-gold-700 underline">
              Edit
            </Link>
          </div>
          <div className="mt-1"><Stars value={review.rating} size={16} /></div>
          {review.comment && <p className="mt-1 text-sm text-gray-700 line-clamp-3 break-words">{review.comment}</p>}
        </div>
      ) : review ? (
        <div className="mt-4">
          <Link href={`/review?token=${encodeURIComponent(review.token)}&from=akun`}
            className="inline-flex items-center gap-1.5 bg-gold-500 hover:bg-gold-400 text-primary-900 text-sm font-bold rounded-full px-4 py-2 transition-colors">
            ⭐ Beri Ulasan
          </Link>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {detail ? (
          <a href={waHref} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors">
            Hubungi Admin
          </a>
        ) : (
          <Link href={reorderHref(order)}
            className="inline-flex items-center gap-1.5 bg-primary-900 hover:bg-primary-800 text-white text-sm font-semibold rounded-full px-4 py-2 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-6.7 2.8L3 8" /><path d="M3 3v5h5" />
            </svg>
            Pesan Kembali
          </Link>
        )}
      </div>
    </li>
  );
}

const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500';
const labelCls = 'block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5';

function ProfileForm({ user, initial }: { user: AuthUser; initial: Profile }) {
  const [form, setForm] = useState<Profile>({
    nama: initial.nama || user.nama,
    hp: initial.hp,
    email: initial.email || user.email,
    alamat: initial.alamat,
  });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const set = (k: keyof Profile) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = getSupabaseBrowser();
    if (!sb) return;
    setBusy(true); setMsg(null);
    const payload = {
      id: user.id,
      nama: form.nama.trim(),
      hp: normalizeHp(form.hp),
      email: form.email.trim(),
      alamat: form.alamat.trim(),
      updated_at: new Date().toISOString(),
    };
    const { error } = await sb.from('profiles').upsert(payload);
    if (error) {
      setMsg({ ok: false, text: 'Data belum bisa disimpan. Coba lagi beberapa saat.' });
    } else {
      setForm((p) => ({ ...p, hp: payload.hp }));
      setMsg({ ok: true, text: 'Tersimpan. Data ini akan terisi otomatis di pesanan berikutnya.' });
    }
    setBusy(false);
  };

  return (
    <form onSubmit={save} className="bg-white rounded-2xl border border-gray-100 shadow-soft p-5 space-y-4">
      <p className="text-sm text-gray-500">
        Simpan data Anda sekali, dan formulir pemesanan akan terisi otomatis.
      </p>
      <div>
        <label className={labelCls} htmlFor="p-nama">Nama Lengkap</label>
        <input id="p-nama" className={inputCls} value={form.nama} onChange={set('nama')} autoComplete="name" />
      </div>
      <div>
        <label className={labelCls} htmlFor="p-hp">Nomor WhatsApp / Telepon</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+62</span>
          <input id="p-hp" type="tel" inputMode="numeric" className={`${inputCls} rounded-l-none`} value={form.hp}
            onChange={set('hp')} placeholder="8123456789" autoComplete="tel-national" />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="p-email">Email</label>
        <input id="p-email" type="email" className={inputCls} value={form.email} onChange={set('email')} autoComplete="email" />
        <p className="text-xs text-gray-400 mt-1">Dipakai untuk mengirim invoice & e-ticket.</p>
      </div>
      <div>
        <label className={labelCls} htmlFor="p-alamat">Alamat Penjemputan</label>
        <textarea id="p-alamat" rows={3} className={`${inputCls} resize-none`} value={form.alamat} onChange={set('alamat')}
          placeholder="Contoh: Jl. Merdeka No. 10, Curup" autoComplete="street-address" />
      </div>

      {msg && (
        <p role="status" className={`rounded-xl px-4 py-3 text-sm border ${msg.ok ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-700'}`}>
          {msg.text}
        </p>
      )}

      <button type="submit" disabled={busy}
        className="w-full bg-primary-900 hover:bg-primary-800 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm transition-colors">
        {busy ? 'Menyimpan…' : 'Simpan Data'}
      </button>
    </form>
  );
}

export default function AkunClient({
  user, orders, profile, reviews = {},
}: { user: AuthUser; orders: Order[]; profile: Profile; reviews?: Record<string, ReviewInfo> }) {
  const router = useRouter();
  const { signOut } = useAuth();
  const [tab, setTab] = useState<'pesanan' | 'data'>('pesanan');
  const [leaving, setLeaving] = useState(false);

  const { berjalan, riwayat } = useMemo(() => {
    const t = todayStr();
    return {
      berjalan: orders.filter((o) => isBerjalan(o, t)).sort((a, b) => a.tanggal.localeCompare(b.tanggal)),
      riwayat: orders.filter((o) => !isBerjalan(o, t)),
    };
  }, [orders]);

  const logout = async () => {
    setLeaving(true);
    await signOut();
    router.replace('/');
    router.refresh();
  };

  return (
    <div className="bg-cream-50 min-h-screen px-4 pt-6 md:pt-24 pb-16">
      <div className="max-w-2xl mx-auto">
        {/* Kartu profil */}
        <div className="bg-primary-900 rounded-3xl p-5 flex items-center gap-4">
          <Avatar user={user} className="w-14 h-14 shrink-0 ring-2 ring-gold-400/70 text-xl" />
          <div className="min-w-0 flex-1">
            <p className="text-white font-bold text-lg truncate">{user.nama}</p>
            <p className="text-gray-300 text-sm truncate">{user.email}</p>
          </div>
          <button type="button" onClick={logout} disabled={leaving}
            className="shrink-0 text-sm font-semibold text-gold-300 border border-gold-400/50 hover:bg-gold-400 hover:text-primary-900 rounded-full px-4 py-2 transition-colors disabled:opacity-50">
            Keluar
          </button>
        </div>

        {/* Tab */}
        <div role="tablist" className="grid grid-cols-2 gap-1 bg-white rounded-full p-1 mt-5 border border-gray-100 shadow-soft">
          {([['pesanan', 'Pesanan Saya'], ['data', 'Data Saya']] as const).map(([k, label]) => (
            <button key={k} role="tab" type="button" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === k ? 'bg-primary-900 text-white' : 'text-gray-500 hover:text-primary-900'}`}>
              {label}
            </button>
          ))}
        </div>

        {tab === 'pesanan' ? (
          <div className="mt-6 space-y-8">
            <section aria-labelledby="h-berjalan">
              <h2 id="h-berjalan" className="font-display text-xl font-bold text-primary-900 mb-3">Pesanan Berjalan</h2>
              {berjalan.length ? (
                <ul className="space-y-3">{berjalan.map((o) => <OrderCard key={o.id} order={o} detail review={reviews[o.id]} />)}</ul>
              ) : (
                <p className="bg-white rounded-2xl border border-gray-100 p-5 text-sm text-gray-500">
                  Belum ada pesanan yang sedang berjalan.{' '}
                  <Link href="/pesan" className="font-semibold text-gold-700 underline">Pesan tiket sekarang</Link>
                </p>
              )}
            </section>

            <section aria-labelledby="h-riwayat">
              <h2 id="h-riwayat" className="font-display text-xl font-bold text-primary-900 mb-3">Riwayat Pesanan</h2>
              {riwayat.length ? (
                <ul className="space-y-3">{riwayat.map((o) => <OrderCard key={o.id} order={o} detail={false} review={reviews[o.id]} />)}</ul>
              ) : (
                <p className="bg-white rounded-2xl border border-gray-100 p-5 text-sm text-gray-500">
                  Riwayat perjalanan Anda akan muncul di sini setelah pesanan selesai.
                </p>
              )}
            </section>
          </div>
        ) : (
          <div className="mt-6">
            <ProfileForm user={user} initial={profile} />
          </div>
        )}
      </div>
    </div>
  );
}
