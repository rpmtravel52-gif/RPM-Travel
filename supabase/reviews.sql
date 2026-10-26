-- RPM Travel — tabel ulasan pelanggan (jalankan di Supabase SQL Editor)
--
-- Catatan: data pesanan RPM Travel disimpan di Redis (bukan Supabase), sehingga flag
-- "review_email_sent" disimpan pada objek pesanan di Redis (field `reviewEmailSent`),
-- bukan sebagai kolom SQL. Tabel ini hanya untuk ulasan.

create table if not exists public.reviews (
  id            uuid primary key default gen_random_uuid(),
  booking_id    text not null unique,                       -- id pesanan (Redis); unik = 1 ulasan per pesanan
  user_id       uuid references auth.users(id) on delete set null, -- null jika anonim / pemesan tanpa akun
  rating        smallint not null check (rating between 1 and 5),
  comment       text not null check (char_length(comment) between 10 and 600),
  is_anonymous  boolean not null default false,
  is_published  boolean not null default true,              -- set false untuk menyembunyikan ulasan dari beranda
  display_name  text,                                       -- snapshot nama saat ulasan dikirim (null jika anonim)
  avatar_url    text,                                       -- snapshot foto profil saat ulasan dikirim (null jika anonim)
  created_at    timestamptz not null default now()
);

create index if not exists reviews_published_created_idx
  on public.reviews (created_at desc) where is_published;

-- RLS aktif TANPA policy untuk anon/authenticated: tabel hanya bisa ditulis/dibaca
-- lewat server (service role) setelah token ulasan divalidasi.
alter table public.reviews enable row level security;

-- View publik: hanya kolom aman (tanpa booking_id & user_id) dan hanya ulasan terbit.
-- Untuk ulasan anonim, nama & foto dipaksa null walaupun tersimpan.
-- (View ini sengaja berjalan sebagai owner agar bisa dibaca anon tanpa membuka tabel dasarnya.)
create or replace view public.reviews_public as
select
  id,
  rating,
  comment,
  is_anonymous,
  case when is_anonymous then null else display_name end as display_name,
  case when is_anonymous then null else avatar_url   end as avatar_url,
  created_at
from public.reviews
where is_published = true;

grant select on public.reviews_public to anon, authenticated;
