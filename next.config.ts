import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // @react-pdf/renderer harus diperlakukan sebagai paket eksternal server, BUKAN
  // di-tree-shake via optimizePackageImports. Jika Next.js membundel ulang modul
  // internalnya, reconciler React 19 milik react-pdf jadi rusak dan renderToBuffer()
  // gagal dengan "Cannot read properties of undefined (reading 'S')" — inilah yang
  // menyebabkan tombol Email Faktur/Email Tiket selalu gagal di production.
  serverExternalPackages: ['@react-pdf/renderer'],

  // Next.js 16 memakai Turbopack secara default. Config webpack lama (externals 'canvas')
  // dihapus; serverExternalPackages di atas sudah menjaga react-pdf tetap eksternal.
  turbopack: {},

  // Gambar: AVIF/WebP lebih kecil, cache lama, dan daftar quality yang diizinkan
  // (Next.js 16 hanya menerima quality yang terdaftar di sini).
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 75],
  },

  // Compress output — aktifkan gzip/brotli compression di level Next.js
  compress: true,

  // Matikan x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
