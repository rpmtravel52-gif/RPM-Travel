import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Compress HTML/JS output
  compress: true,

  // ✅ Optimasi gambar: format modern + ukuran yang relevan
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512, 640, 900],
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache gambar 30 hari
  },

  experimental: {
    // ✅ Optimasi package imports (pertahankan yang lama, tambah yang relevan)
    optimizePackageImports: [
      '@react-pdf/renderer',
      // Tambahkan library lain yang Anda import banyak komponennya:
      // 'lucide-react',
      // '@heroicons/react',
      // 'date-fns',
    ],

    // ✅ FIX UTAMA: Inline CSS kritis → hilangkan render-blocking CSS
    // Ini yang akan fix sisa masalah "Permintaan pemblokiran rendering"
    // Perlu install: npm install critters
    optimizeCss: true,
  },

  // ✅ Headers untuk cache static assets
  async headers() {
    return [
      {
        // Cache gambar, font, JS, CSS di browser selama 1 tahun
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache CSS dan JS chunks
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    // ✅ Pertahankan fix canvas untuk @react-pdf/renderer
    if (isServer) {
      config.externals = [...(config.externals as string[]), 'canvas'];
    }

    return config;
  },
};

export default nextConfig;
