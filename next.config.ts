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
    // optimizePackageImports membantu tree-shake library besar
    optimizePackageImports: ['@react-pdf/renderer'],
  },

  // Compress output — aktifkan gzip/brotli compression di level Next.js
  compress: true,

  // Matikan x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
