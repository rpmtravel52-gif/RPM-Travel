export type PaymentMethod = 'QRIS' | 'TUNAI';
export type OrderStatus = 'UNPAID' | 'PAID';

export interface Order {
  id: string;
  orderNumber: string;       // RPM-20250425-001
  nama: string;
  paket: string;
  tanggal: string;           // ISO date string
  jumlahPax: number;
  hargaPerPax: number;
  totalHarga: number;
  metodePembayaran: PaymentMethod;
  email?: string;            // optional
  status: OrderStatus;
  createdAt: string;         // ISO datetime
  paidAt?: string;           // ISO datetime, set when PAID
  qrisData?: string;         // base64 QR image for dynamic QRIS
}

export interface CreateOrderInput {
  nama: string;
  paket: string;
  tanggal: string;
  jumlahPax: number;
  metodePembayaran: PaymentMethod;
  email?: string;
}
