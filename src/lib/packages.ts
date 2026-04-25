export interface TravelPackage {
  id: string;
  label: string;
  harga: number; // per pax
}

export const PACKAGES: TravelPackage[] = [
  { id: 'curup-palembang',  label: 'Travel Curup – Palembang',  harga: 150000 },
  { id: 'palembang-curup',  label: 'Travel Palembang – Curup',  harga: 150000 },
  { id: 'curup-lebong',     label: 'Travel Curup – Lebong',     harga:  80000 },
  { id: 'lebong-curup',     label: 'Travel Lebong – Curup',     harga:  80000 },
  { id: 'sewa-bus-wisata',  label: 'Sewa Bus Wisata (per hari)',harga: 3000000 },
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
