-- RPM Travel — skema Supabase (dijalankan di SQL Editor saat tahap setup Supabase)

create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  nama       text,
  hp         text,
  email      text,
  alamat     text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Setiap pengguna hanya boleh membaca / mengubah profil miliknya sendiri
create policy "profil: baca milik sendiri"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

create policy "profil: tambah milik sendiri"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

create policy "profil: ubah milik sendiri"
  on public.profiles for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);
