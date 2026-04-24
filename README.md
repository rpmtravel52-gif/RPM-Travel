# 🚌 RPM Travel Curup — Website V2

Website multi-page **RPM Travel Curup, Bengkulu** dengan template gaya bengkulutravel.com.

Built with **Next.js 15.3.1** (App Router) + **Tailwind CSS** + TypeScript.

---

## 🚀 Deploy ke Vercel

1. Upload semua file ini ke GitHub repository
2. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
3. Klik **"Add New Project"** → pilih repository ini
4. Klik **"Deploy"** — selesai!

---

## 📸 Upload Foto Armada

Letakkan foto di folder `public/images/`:

```
public/images/
├── hiace/
│   ├── exterior.jpg
│   └── interior.jpg
├── innova/
│   ├── exterior.jpg
│   └── interior.jpg
├── avanza/
│   └── exterior.jpg
└── bus/
    ├── exterior.jpg
    └── interior.jpg
```

---

## 🗂️ Halaman yang Tersedia

| URL | Keterangan |
|-----|------------|
| `/` | Halaman utama |
| `/travel-curup-palembang` | Detail rute Curup–Palembang |
| `/travel-curup-lebong` | Detail rute Curup–Lebong |
| `/sewa-bus-wisata` | Detail sewa bus wisata |
| `/pesan` | Form pemesanan tiket online |

---

## ✏️ Cara Edit Konten

- **Nomor WA:** Cari dan ganti `6285282828005` di semua file
- **Harga bus:** Edit di `src/app/sewa-bus-wisata/page.tsx`
- **Layanan / kartu:** Edit array `services` di `src/app/page.tsx`
- **Warna:** Edit di `tailwind.config.js` (primary = Navy, gold = Gold)

---

## 🔍 SEO Lokal

- ✅ Meta title & description per halaman
- ✅ Schema.org TravelAgency structured data
- ✅ Geo meta tags Curup, Bengkulu
- ✅ Canonical URL setiap halaman
- ✅ Breadcrumb navigasi

---

## 📞 RPM Travel Curup

- **WhatsApp:** 085282828005  
- **Alamat:** Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu 39119  
- **Google Maps:** https://share.google/nhQgSmsBuE5taP7H1
