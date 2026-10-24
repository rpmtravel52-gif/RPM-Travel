'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabase/client';
import { useAuth } from '@/components/AuthProvider';

type Mode = 'masuk' | 'daftar';

function safeNext(raw: string | null): string {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return '/akun';
  return raw;
}

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500';
const labelCls = 'block text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5';

export default function LoginClient() {
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get('next'));
  const { user, loading, configured } = useAuth();

  const [mode, setMode] = useState<Mode>('masuk');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(params.get('error') ? 'Login gagal. Silakan coba lagi.' : '');
  const [info, setInfo] = useState('');

  // Sudah login → langsung ke halaman tujuan
  useEffect(() => {
    if (!loading && user) router.replace(next);
  }, [loading, user, next, router]);

  const callbackUrl = () =>
    `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;

  const loginGoogle = async () => {
    const sb = getSupabaseBrowser();
    if (!sb) return;
    setBusy(true); setError('');
    const { error: err } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: callbackUrl() },
    });
    if (err) { setError('Gagal membuka login Google. Coba lagi.'); setBusy(false); }
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = getSupabaseBrowser();
    if (!sb) return;
    setBusy(true); setError(''); setInfo('');

    if (mode === 'masuk') {
      const { error: err } = await sb.auth.signInWithPassword({ email, password });
      if (err) {
        setError(
          err.message.toLowerCase().includes('email not confirmed')
            ? 'Email belum diverifikasi. Cek kotak masuk email Anda.'
            : 'Email atau kata sandi salah.'
        );
      } else {
        router.replace(next);
        router.refresh();
      }
    } else {
      const { data, error: err } = await sb.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: callbackUrl(), data: { full_name: nama.trim() } },
      });
      if (err) {
        setError(err.message.toLowerCase().includes('registered')
          ? 'Email ini sudah terdaftar. Silakan masuk.'
          : 'Pendaftaran gagal. Periksa data Anda dan coba lagi.');
      } else if (data.session) {
        router.replace(next);
        router.refresh();
      } else {
        setInfo('Pendaftaran berhasil. Kami telah mengirim tautan verifikasi ke email Anda — klik tautan tersebut untuk mengaktifkan akun.');
      }
    }
    setBusy(false);
  };

  return (
    <div className="min-h-[80vh] bg-cream-50 px-4 pt-10 md:pt-24 pb-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden ring-2 ring-gold-500/40 shadow-soft mb-3">
            <Image src="/images/logo.png" alt="RPM Travel" fill className="object-cover" sizes="64px" />
          </div>
          <h1 className="font-display text-2xl font-bold text-primary-900">
            {mode === 'masuk' ? 'Masuk ke Akun' : 'Buat Akun Baru'}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Lihat riwayat pesanan & pesan lebih cepat tanpa isi ulang data.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-soft p-6 md:p-8">
          {!configured && (
            <div className="mb-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl px-4 py-3 text-sm">
              Fitur login sedang disiapkan dan belum aktif. Anda tetap bisa{' '}
              <Link href="/pesan" className="font-semibold underline">memesan tiket</Link> seperti biasa.
            </div>
          )}

          <button
            type="button"
            onClick={loginGoogle}
            disabled={!configured || busy}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden>
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
              <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 010-9.4l-7.9-6.1a24 24 0 000 21.6l7.9-6.1z" />
              <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
            </svg>
            Lanjutkan dengan Google
          </button>

          <div className="flex items-center gap-3 my-5 text-xs text-gray-400">
            <span className="flex-1 h-px bg-gray-200" /> atau dengan email <span className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={submitEmail} className="space-y-4">
            {mode === 'daftar' && (
              <div>
                <label className={labelCls} htmlFor="nama">Nama Lengkap</label>
                <input id="nama" className={inputCls} required value={nama}
                  onChange={(e) => setNama(e.target.value)} placeholder="Contoh: Budi Santoso" autoComplete="name" />
              </div>
            )}
            <div>
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" type="email" className={inputCls} required value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" autoComplete="email" />
            </div>
            <div>
              <label className={labelCls} htmlFor="password">Kata Sandi</label>
              <input id="password" type="password" className={inputCls} required minLength={6} value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Minimal 6 karakter"
                autoComplete={mode === 'masuk' ? 'current-password' : 'new-password'} />
            </div>

            {error && (
              <p role="alert" className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</p>
            )}
            {info && (
              <p role="status" className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm">{info}</p>
            )}

            <button type="submit" disabled={!configured || busy}
              className="w-full bg-primary-900 hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-sm transition-colors">
              {busy ? 'Memproses…' : mode === 'masuk' ? 'Masuk' : 'Daftar'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            {mode === 'masuk' ? 'Belum punya akun?' : 'Sudah punya akun?'}{' '}
            <button type="button" className="font-semibold text-gold-700 hover:underline"
              onClick={() => { setMode(mode === 'masuk' ? 'daftar' : 'masuk'); setError(''); setInfo(''); }}>
              {mode === 'masuk' ? 'Daftar sekarang' : 'Masuk'}
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
          Dengan melanjutkan, Anda menyetujui{' '}
          <Link href="/syarat-ketentuan" className="underline hover:text-gold-700">Syarat & Ketentuan</Link> dan{' '}
          <Link href="/kebijakan-privasi" className="underline hover:text-gold-700">Kebijakan Privasi</Link> kami.
        </p>
      </div>
    </div>
  );
}
