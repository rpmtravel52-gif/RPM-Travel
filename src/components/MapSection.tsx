'use client';

import dynamic from 'next/dynamic';

// ✅ dynamic + ssr:false hanya boleh di Client Component
const MapEmbed = dynamic(() => import('./MapEmbed'), { ssr: false });

export default function MapSection() {
  return <MapEmbed />;
}
