import type { Metadata } from 'next';
import { Suspense } from 'react';
import LoginClient from './LoginClient';

export const metadata: Metadata = {
  title: 'Masuk / Daftar | RPM Travel Curup',
  description: 'Masuk ke akun RPM Travel untuk melihat riwayat pesanan dan memesan lebih cepat.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[70vh]" />}>
      <LoginClient />
    </Suspense>
  );
}
