// src/lib/fonnte.ts
// Helper untuk kirim WhatsApp via Fonnte API
// Docs: https://fonnte.com/docs

const FONNTE_TOKEN = process.env.FONNTE_TOKEN ?? '';
const FONNTE_URL   = 'https://api.fonnte.com/send';

export interface FonnteResult {
  success: boolean;
  error?: string;
}

/**
 * Kirim pesan WA ke satu nomor atau beberapa nomor sekaligus.
 * @param target  - Nomor tujuan format 628xxx (bisa array untuk multi)
 * @param message - Isi pesan teks
 */
export async function sendWA(
  target: string | string[],
  message: string
): Promise<FonnteResult> {
  if (!FONNTE_TOKEN) {
    console.error('[Fonnte] FONNTE_TOKEN belum di-set di .env.local');
    return { success: false, error: 'FONNTE_TOKEN tidak tersedia' };
  }

  // Fonnte menerima multi-target dipisah koma
  const targetStr = Array.isArray(target) ? target.join(',') : target;

  try {
    const res = await fetch(FONNTE_URL, {
      method: 'POST',
      headers: {
        Authorization: FONNTE_TOKEN,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        target:  targetStr,
        message: message,
        // countryCode: '62', // opsional jika nomor sudah format 628xx
      }),
    });

    const data = await res.json();

    if (!res.ok || data.status === false) {
      console.error('[Fonnte] Gagal kirim WA:', data);
      return { success: false, error: data.reason ?? 'Unknown error' };
    }

    console.log('[Fonnte] WA terkirim ke:', targetStr);
    return { success: true };
  } catch (err) {
    console.error('[Fonnte] Fetch error:', err);
    return { success: false, error: String(err) };
  }
}

/**
 * Normalisasi nomor HP ke format 628xxx
 */
export function normalizeWaNumber(hp: string): string {
  const digits = hp.replace(/\D/g, '');
  if (digits.startsWith('0'))  return '62' + digits.slice(1);
  if (digits.startsWith('62')) return digits;
  return '62' + digits;
}
