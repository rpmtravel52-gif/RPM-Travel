# 🚌 RPM Travel Curup — Website Resmi

Website travel & sewa bus wisata untuk **RPM Travel Curup, Bengkulu**.

Built with **Next.js 15.2.6** (App Router) + TypeScript.

---

## 🚀 Cara Deploy ke Vercel (Gratis)

### 1. Upload ke GitHub
1. Buat repository baru di [github.com](https://github.com)
2. Upload semua file ini ke repository tersebut
3. Pastikan struktur folder sudah benar

### 2. Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
2. Klik **"Add New Project"**
3. Pilih repository `rpm-travel`
4. Klik **"Deploy"** — otomatis selesai!

Website akan live di: `https://rpm-travel.vercel.app` (atau nama custom)

---

## 📸 Cara Upload Foto Armada

Letakkan foto di folder `public/images/` sesuai struktur berikut:

```
public/
└── images/
    ├── hiace/
    │   ├── exterior.jpg     ← Foto luar Hiace
    │   └── interior.jpg     ← Foto dalam Hiace
    ├── innova/
    │   ├── exterior.jpg
    │   └── interior.jpg
    ├── avanza/
    │   └── exterior.jpg
    └── bus/
        ├── exterior.jpg     ← Foto luar bus
        └── interior.jpg     ← Foto dalam bus
```

**Tips foto:**
- Format: `.jpg` atau `.webp` (lebih kecil)
- Ukuran ideal: 800×500px atau lebih besar
- Resolusi minimal: 72dpi
- Pastikan nama file persis sama (huruf kecil semua)

---

## 🌐 Struktur Folder

```
rpm-travel/
├── app/
│   ├── layout.tsx      ← SEO metadata, schema.org
│   ├── page.tsx        ← Halaman utama
│   └── globals.css     ← Global styles
├── components/
│   ├── Navbar.tsx      ← Header navigasi
│   ├── Hero.tsx        ← Section utama (banner)
│   ├── Services.tsx    ← Layanan travel
│   ├── Fleet.tsx       ← Galeri armada
│   ├── WhyUs.tsx       ← Keunggulan RPM Travel
│   ├── Pricing.tsx     ← Harga & paket
│   ├── Contact.tsx     ← Kontak & Google Maps
│   ├── Footer.tsx      ← Footer
│   └── WAFloat.tsx     ← Tombol WhatsApp mengambang
└── public/
    └── images/         ← Upload foto armada di sini
```

---

## ✏️ Cara Edit Konten

### Ganti nomor WhatsApp
Cari dan ganti `6285282828005` di semua file dengan nomor baru.

### Ganti harga bus
Edit file `components/Pricing.tsx`, cari:
```tsx
price: "Rp 3.000.000",
```

### Tambah rute baru
Edit array `services` di `components/Services.tsx`

### Update alamat
Edit file `components/Contact.tsx` dan `app/layout.tsx`

---

## 🔍 SEO Lokal Curup

Website ini sudah dilengkapi:
- ✅ Meta title & description dengan keyword lokal Curup
- ✅ Schema.org `TravelAgency` structured data
- ✅ Geo meta tags (koordinat Curup, Bengkulu)
- ✅ Open Graph untuk share di media sosial
- ✅ Keywords: travel curup, sewa bus curup, travel bengkulu, dll.

---

## 📞 Kontak RPM Travel

- **WhatsApp:** 085282828005
- **Alamat:** Jl. S. Parman, Talang Benih, Curup, Rejang Lebong, Bengkulu 39119
- **Google Maps:** https://share.google/nhQgSmsBuE5taP7H1
