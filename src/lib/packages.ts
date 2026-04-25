export interface TravelPackage {
  id: string;
  label: string;
  harga: number; // per pax
}

export const PACKAGES: TravelPackage[] = [
  { id: 'curup-palembang',  label: 'Travel Curup – Palembang',  harga: 250000 },
  { id: 'palembang-curup',  label: 'Travel Palembang – Curup',  harga: 250000 },
  { id: 'curup-lebong',     label: 'Travel Curup – Lebong',     harga:  60000 },
  { id: 'lebong-curup',     label: 'Travel Lebong – Curup',     harga:  60000 },
  { id: 'sewa-Mobil-Hiace',  label: 'Sewa Bus Wisata (per hari)',harga: 3000000 },
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
