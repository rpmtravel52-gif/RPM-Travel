// Pesan WhatsApp dinamis untuk tombol Chat di bottom nav: isi chat menyesuaikan halaman yang sedang dibuka.
import { PACKAGES } from './packages';

const WA_NUMBER = '6285282828005';
const SITE = 'rpmtravel.co.id';

const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);
const words = (slug: string) => slug.split('-').filter(Boolean).map(cap);
/** "curup-palembang" → "Curup – Palembang" */
const routeName = (slug: string) => words(slug).join(' – ');

function messageFor(pathname: string, search: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  const slug = path.slice(1);

  if (path === '/') {
    return 'Halo RPM Travel, saya ingin bertanya tentang layanan travel dan sewa bus.';
  }

  if (path === '/pesan') {
    const id = new URLSearchParams(search).get('paket');
    const pkg = id ? PACKAGES.find((p) => p.id === id) : undefined;
    return pkg
      ? `Halo RPM Travel, saya sedang memesan ${pkg.label} dan ingin menanyakan jadwal serta ketersediaan kursi.`
      : 'Halo RPM Travel, saya sedang di halaman pemesanan tiket dan ingin bertanya sebelum memesan.';
  }

  if (path === '/sewa-bus-wisata') {
    return 'Halo RPM Travel, saya ingin menanyakan sewa bus wisata 31 kursi (tanggal, tujuan, dan penawaran harga).';
  }
  if (path === '/sewa-hiace-curup') {
    return 'Halo RPM Travel, saya ingin menanyakan sewa Hiace di Curup (tanggal, tujuan, dan harga).';
  }
  if (path === '/sewa-bus-vs-travel-rombongan') {
    return 'Halo RPM Travel, saya rombongan dan ingin konsultasi: lebih cocok sewa bus atau travel?';
  }
  if (path === '/transportasi-perjalanan-dinas') {
    return 'Halo RPM Travel, saya ingin menanyakan transportasi untuk perjalanan dinas/kantor.';
  }

  if (path === '/travel-curup-executive') {
    return 'Halo RPM Travel, saya ingin menanyakan layanan Travel Curup Executive (jadwal, harga, dan kursi).';
  }
  if (slug.startsWith('travel-')) {
    return `Halo RPM Travel, saya ingin menanyakan jadwal dan ketersediaan kursi Travel ${routeName(slug.slice(7))}.`;
  }
  if (slug.startsWith('berapa-jam-')) {
    return `Halo RPM Travel, saya ingin menanyakan estimasi waktu perjalanan ${routeName(slug.slice(11))} dan jadwal keberangkatan.`;
  }
  if (slug.startsWith('harga-travel-')) {
    return `Halo RPM Travel, saya ingin menanyakan tarif Travel ${routeName(slug.slice(13))}.`;
  }
  if (slug.startsWith('jadwal-travel-')) {
    return `Halo RPM Travel, saya ingin menanyakan jadwal Travel ${routeName(slug.slice(14))}.`;
  }
  if (slug.startsWith('rute-travel-')) {
    return `Halo RPM Travel, saya ingin menanyakan rute dan titik jemput Travel ${routeName(slug.slice(12))}.`;
  }
  if (slug.startsWith('tips-')) {
    return 'Halo RPM Travel, saya baru membaca artikel tips perjalanan di website dan ingin bertanya/memesan.';
  }
  if (slug.startsWith('login') || slug.startsWith('akun')) {
    return 'Halo RPM Travel, saya butuh bantuan terkait akun/pesanan saya di website.';
  }

  return 'Halo RPM Travel, saya ingin bertanya tentang layanan travel dan sewa bus.';
}

/** Link wa.me dengan pesan sesuai halaman. `search` = window.location.search (opsional). */
export function buildWaHref(pathname: string, search = ''): string {
  const text = `${messageFor(pathname, search)}\n\nHalaman: ${SITE}${pathname === '/' ? '' : pathname}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
