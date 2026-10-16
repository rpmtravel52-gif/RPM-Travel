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

  // Compress output — aktifkan gzip/brotli compression di level Next.js
  compress: true,

  // Matikan x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
