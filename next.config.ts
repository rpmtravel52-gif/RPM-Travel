import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // @react-pdf/renderer needs canvas to be excluded from server bundle
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals as string[]), 'canvas'];
    }
    return config;
  },

  experimental: {
    // FIX 1: optimizePackageImports membantu tree-shake library besar
    optimizePackageImports: ['@react-pdf/renderer'],

    // FIX 2: Gunakan target browser modern agar Next.js tidak generate
    // polyfill untuk browser lama (IE, old Chrome) → hemat ~12 KiB JS
    // Pastikan tidak ada file .browserslistrc di root project yang override ini.
    browsersListForSwc: true,
  },

  // FIX 3: Compress output — aktifkan gzip/brotli compression di level Next.js
  compress: true,

  // FIX 4: Matikan x-powered-by header (minor security + sedikit kurangi response size)
  poweredByHeader: false,
};

export default nextConfig;
