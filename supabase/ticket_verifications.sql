-- RPM Travel — verifikasi publik e-ticket (jalankan di Supabase SQL Editor)
--
-- Catatan: data pesanan RPM Travel disimpan di Redis, jadi tabel ini hanya SNAPSHOT
-- seperlunya untuk halaman publik /verify (tanpa nomor kursi, tanpa kontak pelanggan).
-- Tabel pesanan / riwayat akun / ulasan TIDAK ikut dibersihkan.
--
-- Masa verifikasi = 3 bulan sejak TANGGAL BERANGKAT (diisi dari kode saat tiket diterbitkan).

create table if not exists public.ticket_verifications (
  id              uuid primary key default gen_random_uuid(),
  token           text not null unique,                 -- acak 192-bit, dipakai di QR
  booking_id      text not null unique,                 -- id pesanan (Redis); 1 token per pesanan
  order_number    text not null,
  passenger_name  text not null,
  route           text not null,                        -- nama paket / rute
  travel_date     timestamptz not null,                 -- waktu keberangkatan
  pax             integer not null default 1,
  total_price     integer not null,
  issued_at       timestamptz not null default now(),   -- kapan tiket pertama kali diterbitkan
  expires_at      timestamptz not null                  -- travel_date + 3 bulan
);

create index if not exists ticket_verifications_expires_idx
  on public.ticket_verifications (expires_at);

-- RLS aktif TANPA policy: hanya server (service role) yang bisa membaca/menulis.
alter table public.ticket_verifications enable row level security;

-- ── Retensi: bersihkan otomatis ──────────────────────────────
-- Baris dihapus 3 bulan SETELAH masa verifikasi berakhir, supaya pemindai QR lama
-- masih melihat pesan "kedaluwarsa" (bukan "tidak ditemukan") selama 3 bulan tambahan.
-- Untuk hapus tepat saat kedaluwarsa, ganti kondisi menjadi:  expires_at < now()
-- (Aktifkan extension pg_cron dulu: Database → Extensions → pg_cron.)
create extension if not exists pg_cron;

select cron.schedule(
  'purge-ticket-verifications',
  '15 19 * * *',   -- 02:15 WIB setiap hari
  $$ delete from public.ticket_verifications
     where expires_at < now() - interval '3 months' $$
);
