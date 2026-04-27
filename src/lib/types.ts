export type PaymentMethod = 'QRIS' | 'TUNAI';
export type OrderStatus = 'UNPAID' | 'PAID';

export interface Order {
  id: string;
  orderNumber: string;       // RPM-20250425-001
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
}

export interface CreateOrderInput {
  nama: string;
  hp: string;                // nomor WhatsApp pelanggan, wajib
  paket: string;
  tanggal: string;
  jam?: string;              // jam keberangkatan, opsional
  jumlahPax: number;
  metodePembayaran: PaymentMethod;
  email?: string;
  catatan?: string;          // catatan tambahan, opsional
}
