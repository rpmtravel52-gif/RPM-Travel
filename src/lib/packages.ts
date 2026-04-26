// lib/packages.ts — Sumber kebenaran tunggal untuk semua paket & harga RPM Travel

export interface TravelPackage {
  id: string;
  label: string;
  harga: number;
  satuanLabel: string;     // "/pax" | "/hari"
  kategori: 'travel' | 'sewa';
  rute?: string;
  keterangan?: string;
}

export const PACKAGES: TravelPackage[] = [
  // ── TRAVEL ANTARKOTA ─────────────────────────────────────────
  {
    id: 'bengkulu-palembang',
    label: 'Travel Bengkulu – Palembang',
    harga: 250000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Bengkulu → Palembang',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'palembang-bengkulu',
    label: 'Travel Palembang – Bengkulu',
    harga: 250000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Palembang → Bengkulu',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'curup-palembang',
    label: 'Travel Curup – Palembang',
    harga: 250000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Curup → Palembang',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'palembang-curup',
    label: 'Travel Palembang – Curup',
    harga: 250000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Palembang → Curup',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'lebong-palembang',
    label: 'Travel Lebong – Palembang',
    harga: 300000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Lebong → Palembang',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'palembang-lebong',
    label: 'Travel Palembang – Lebong',
    harga: 300000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Palembang → Lebong',
    keterangan: 'Harga berlaku PP',
  },

  // ── TRAVEL LOKAL ─────────────────────────────────────────────
  {
    id: 'curup-lebong',
    label: 'Travel Curup – Lebong',
    harga: 60000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Curup → Lebong',
    keterangan: 'Harga berlaku PP',
  },
  {
    id: 'lebong-curup',
    label: 'Travel Lebong – Curup',
    harga: 60000,
    satuanLabel: '/pax',
    kategori: 'travel',
    rute: 'Lebong → Curup',
    keterangan: 'Harga berlaku PP',
  },

  // ── SEWA ─────────────────────────────────────────────────────
  {
    id: 'sewa-hiace',
    label: 'Sewa Hiace (All-In BBM & Sopir)',
    harga: 1800000,
    satuanLabel: '/hari',
    kategori: 'sewa',
    keterangan: 'Sudah termasuk BBM & sopir, bebas ke mana saja',
  },
  {
    id: 'sewa-bus-wisata',
    label: 'Sewa Bus Wisata 31 Kursi (All-In)',
    harga: 3000000,
    satuanLabel: '/hari',
    kategori: 'sewa',
    keterangan: 'Kapasitas 31 kursi, sudah termasuk BBM & sopir',
  },
];

export function getPackage(id: string): TravelPackage | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}
