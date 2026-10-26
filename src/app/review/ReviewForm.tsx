'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ReviewAvatar } from '@/components/ReviewParts';

const LABELS = ['', 'Sangat kurang', 'Kurang', 'Cukup', 'Baik', 'Sangat baik'];
const MIN = 10;
const MAX = 600;

export default function ReviewForm({
  token, initialRating, previewName, previewAvatar,
}: {
  token: string;
  initialRating: number;
  previewName: string;
  previewAvatar: string | null;
}) {
  const [rating, setRating] = useState(initialRating);
  const [comment, setComment] = useState('');
  const [showProfile, setShowProfile] = useState(true); // default: tampilkan
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (busy) return;
    setError('');
    if (rating < 1) return setError('Pilih rating bintang terlebih dahulu.');
    if (comment.trim().length < MIN) return setError(`Tulis ulasan minimal ${MIN} karakter.`);

    setBusy(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, rating, comment, showProfile }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.ok) return setDone(true);
      if (res.status === 409) return setDone(true); // sudah pernah mengirim
      setError(data.error || 'Gagal mengirim ulasan, coba lagi.');
    } catch {
      setError('Koneksi bermasalah, coba lagi.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="bg-white rounded-2xl border border-primary-900/5 shadow-soft p-6 text-center">
        <p className="text-4xl mb-2" aria-hidden="true">🙏</p>
        <h2 className="font-display font-bold text-primary-900 text-xl mb-1">Terima kasih atas ulasan Anda!</h2>
        <p className="text-gray-600 text-sm mb-5">Ulasan Anda sangat berarti bagi kami dan calon penumpang lain.</p>
        <Link href="/" className="btn-primary">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="bg-white rounded-2xl border border-primary-900/5 shadow-soft p-5 md:p-6 space-y-5">
      {/* Rating */}
      <fieldset>
        <legend className="text-sm font-semibold text-primary-900 mb-2">Rating Anda</legend>
        <div role="radiogroup" aria-label="Rating bintang" className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} bintang — ${LABELS[n]}`}
              onClick={() => setRating(n)}
              className="p-1 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
            >
              <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"
                className={n <= rating ? 'text-gold-500' : 'text-gray-300'}>
                <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
              </svg>
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600" aria-live="polite">{rating ? LABELS[rating] : ''}</span>
        </div>
      </fieldset>

      {/* Komentar */}
      <div>
        <label htmlFor="comment" className="text-sm font-semibold text-primary-900 block mb-2">Ulasan Anda</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={MAX}
          rows={5}
          placeholder="Ceritakan pengalaman Anda: ketepatan jemput, kenyamanan armada, keramahan sopir…"
          className="w-full rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-primary-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
        <p className="text-xs text-gray-600 mt-1 text-right">{comment.length}/{MAX}</p>
      </div>

      {/* Privasi */}
      <div className="rounded-xl bg-gold-50 border border-gold-200 p-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={showProfile}
            onChange={(e) => setShowProfile(e.target.checked)}
            className="mt-1 h-4 w-4 accent-primary-900"
          />
          <span className="text-sm text-primary-900 font-medium">
            Tampilkan Nama dan Foto Profil saya di ulasan publik
          </span>
        </label>
        <div className="flex items-center gap-2.5 mt-3 pl-7" aria-live="polite">
          <ReviewAvatar name={previewName} url={previewAvatar} anonymous={!showProfile} size={32} />
          <p className="text-xs text-gray-700">
            Akan tampil sebagai: <strong>{showProfile ? previewName : 'Pelanggan Travel'}</strong>
          </p>
        </div>
      </div>

      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={busy} className="btn-primary w-full justify-center disabled:opacity-60">
        {busy ? 'Mengirim…' : 'Kirim Ulasan'}
      </button>
    </form>
  );
}
