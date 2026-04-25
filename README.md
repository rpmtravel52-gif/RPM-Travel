# 🚌 RPM Travel — Sistem Tiket & Faktur Otomatis

Sistem pemesanan tiket, faktur PDF, e-ticket, dan QRIS dinamis untuk RPM Travel Curup.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Redis · Resend · @react-pdf/renderer

---

## 🗂️ Halaman

| URL | Keterangan |
|-----|------------|
| `/pesan-tiket` | Form pemesanan pelanggan (3 step) |
| `/admin` | Dashboard admin manajemen pesanan |

---

## ⚙️ Environment Variables (Wajib di Vercel)

Tambahkan di **Vercel → Settings → Environment Variables**:

| Variable | Contoh | Keterangan |
|----------|--------|------------|
| `REDIS_URL` | `redis://default:pass@host:6379` | Upstash / Redis Cloud |
| `RESEND_API_KEY` | `re_xxxxxxxx` | Daftar gratis di resend.com |
| `NEXT_PUBLIC_QRIS_STATIC` | `000201010211...6304XXXX` | String QRIS statis dari bank |

---

## 🚀 Deploy ke Vercel

```bash
# 1. Upload ke GitHub
# 2. Connect di vercel.com
# 3. Tambahkan env variables
# 4. Deploy!
```

---

## 📋 Alur Sistem

### Sisi Pelanggan (`/pesan-tiket`)
1. Isi form: Nama, Paket, Tanggal, Jumlah Pax
2. Pilih metode: **QRIS** atau **Tunai**
3. Opsional centang: "Kirimkan invoice ke email" → input email muncul
4. Klik Pesan → order tersimpan ke Redis (status: `UNPAID`)
5. WhatsApp admin terbuka otomatis dengan ringkasan pesanan
6. Jika QRIS: tampil QR Code dinamis untuk pembayaran

### Sisi Admin (`/admin`)
| Tombol | Kondisi | Fungsi |
|--------|---------|--------|
| 📄 **Kirim Faktur** | Selalu aktif | Kirim Invoice PDF ke email |
| ✅ **Konfirmasi Lunas** | Hanya jika UNPAID | Ubah status → PAID |
| 🎫 **Kirim E-Ticket** | **Aktif hanya jika PAID** | Kirim tiket + watermark LUNAS |
| WA | Selalu aktif | Buka WhatsApp dengan pesan otomatis |

---

## 📦 Cara Setup QRIS Dinamis

1. Dapatkan string QRIS **statis** dari aplikasi bank/PJSP Anda
2. Salin seluruh string (contoh: `00020101021126...6304XXXX`)
3. Tambahkan ke env: `NEXT_PUBLIC_QRIS_STATIC=00020101...`
4. Sistem akan otomatis konversi ke QRIS **dinamis** dengan nominal yang tepat per transaksi

---

## 📧 Setup Resend (Email)

1. Daftar di [resend.com](https://resend.com) (gratis 3.000 email/bulan)
2. Verifikasi domain email Anda
3. Buat API Key → salin ke `RESEND_API_KEY`
4. Ganti `from:` di API routes dengan email domain Anda

---

## 🗃️ Struktur Folder

```
src/
├── app/
│   ├── api/
│   │   ├── orders/
│   │   │   ├── route.ts                  # POST buat order, GET list
│   │   │   └── [id]/
│   │   │       ├── route.ts              # GET detail order
│   │   │       ├── confirm/route.ts      # POST konfirmasi LUNAS
│   │   │       ├── send-invoice/route.ts # POST kirim faktur PDF
│   │   │       └── send-ticket/route.ts  # POST kirim e-ticket PDF
│   │   └── qris/route.ts                 # GET generate QRIS dinamis
│   ├── admin/page.tsx                    # Dashboard admin
│   ├── pesan-tiket/page.tsx              # Form pemesanan
│   ├── layout.tsx
│   ├── page.tsx                          # Redirect ke /pesan-tiket
│   └── globals.css
└── lib/
    ├── types.ts      # TypeScript interfaces
    ├── redis.ts      # Redis client + helpers
    ├── packages.ts   # Data paket & harga
    ├── qris.ts       # Static → Dynamic QRIS converter
    └── pdf.tsx       # Invoice & E-Ticket PDF documents
```

---

## 📞 RPM Travel Curup
- **WA:** 085282828005
- **Alamat:** Jl. S. Parman, Talang Benih, Curup, Bengkulu 39119
