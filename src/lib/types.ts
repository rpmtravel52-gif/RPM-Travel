export type PaymentMethod = 'QRIS' | 'TUNAI';
export type OrderStatus = 'UNPAID' | 'PAID';

export interface Order {
  id: string;
  orderNumber: string;       // RPM-20250425-001
  userId?: string;           // id akun Supabase (jika pemesan sedang login)
  paketId?: string;          // id paket (untuk fitur "Pesan Kembali")
  asal?: string;             // lokasi penjemputan
  tujuan?: string;           // tujuan / drop off
  nama: string;
  hp?: string;               // nomor WhatsApp pelanggan
  paket: string;
  tanggal: string;           // ISO date string
  jam?: string;              // jam keberangkatan, misal "10.00"
  jumlahPax: number;
  hargaPerPax: number;
  totalHarga: number;
  metodePembayaran: PaymentMethod;
  email?: string;            // optional
  catatan?: string;          // catatan tambahan dari pelanggan
  status: OrderStatus;
  createdAt: string;         // ISO datetime
  paidAt?: string;           // ISO datetime, set when PAID
  qrisData?: string;         // base64 QR image for dynamic QRIS
  reviewEmailSent?: boolean; // true setelah email permintaan ulasan terkirim (cron)
  reviewEmailSentAt?: string; // ISO datetime pengiriman email ulasan
}

export interface CreateOrderInput {
  nama: string;
  hp: string;                // nomor WhatsApp pelanggan, wajib
  paket: string;
  tanggal: string;
  jam?: string;              // jam keberangkatan, opsional
  jumlahPax: number;
  asal?: string;
  tujuan?: string;
  metodePembayaran: PaymentMethod;
  email?: string;
  catatan?: string;          // catatan tambahan, opsional
}
