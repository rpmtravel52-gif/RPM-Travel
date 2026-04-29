import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // @react-pdf/renderer needs canvas to be excluded from server bundle
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals as string[]), 'canvas'];
    }
    return config;
  },

  // ✅ FIX: Optimasi import berat agar tidak di-bundle seluruhnya
  experimental: {
    optimizePackageImports: ['@react-pdf/renderer'],
  },
};

export default nextConfig;
