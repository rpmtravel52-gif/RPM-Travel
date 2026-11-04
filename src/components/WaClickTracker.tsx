'use client';

import { useEffect } from 'react';

/**
 * Menghitung klik semua tautan WhatsApp (wa.me) di website: tombol Chat bottom nav, footer,
 * dan CTA di halaman produk/artikel. Satu listener global, jadi halaman server tidak perlu diubah.
 * Klik dari /pesan dan /admin diabaikan (juga disaring ulang di server).
 */
export default function WaClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="https://wa.me/"]');
      if (!a) return;
      const path = window.location.pathname;
      if (path.startsWith('/pesan') || path.startsWith('/admin')) return;

      const source = a.getAttribute('data-wa-src') ?? (a.closest('footer') ? 'footer' : 'cta');
      const body = JSON.stringify({ path, source });
      try {
        if (!navigator.sendBeacon?.('/api/track/wa', new Blob([body], { type: 'application/json' }))) {
          fetch('/api/track/wa', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
        }
      } catch { /* pelacakan tidak boleh mengganggu klik */ }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
