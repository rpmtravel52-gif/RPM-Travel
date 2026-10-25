'use client';

import { useState } from 'react';

const EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.8!2d102.5167!3d-3.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e37c3b2b1111111%3A0x1!2sTalang+Benih%2C+Curup!5e0!3m2!1sid!2sid!4v1234567890';

/**
 * Peta "click-to-load": iframe Google Maps (±puluhan KiB JS + request pihak ketiga)
 * baru dimuat saat pengunjung menekan tombol, bukan saat halaman dibuka.
 */
export default function MapSection() {
  const [on, setOn] = useState(false);

  if (on) {
    return (
      <iframe
        src={EMBED_SRC}
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor RPM Travel Curup"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOn(true)}
      aria-label="Tampilkan peta lokasi kantor RPM Travel Curup"
      className="relative flex h-[380px] w-full flex-col items-center justify-center gap-3 bg-primary-50 text-primary-900"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,42,74,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,74,.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-2xl shadow-lift" aria-hidden>📍</span>
      <span className="font-display text-lg font-bold">Kantor RPM Travel Curup</span>
      <span className="text-sm text-gray-600">Jl. S. Parman, Talang Benih, Curup</span>
      <span className="btn-primary !px-5 !py-2 text-sm">Tampilkan Peta</span>
    </button>
  );
}
