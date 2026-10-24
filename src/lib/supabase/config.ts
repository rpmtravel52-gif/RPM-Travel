// Supabase hanya aktif jika kedua env ini terisi. Jika belum, situs tetap berjalan normal
// (tombol login menampilkan info "belum aktif") sehingga build tidak pernah rusak.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
