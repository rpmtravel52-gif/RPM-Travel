'use client';

import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import { isSupabaseConfigured } from '@/lib/supabase/config';

// Library Supabase (±100 KiB+) TIDAK ikut bundle awal. Hanya dimuat jika:
//  - pengunjung punya cookie sesi (sudah pernah login), atau
//  - sedang membuka halaman yang memang butuh auth (/login, /akun, /pesan).
// Pengunjung baru yang hanya melihat beranda tidak mengunduh Supabase sama sekali.
const AUTH_PATHS = /^\/(login|akun|pesan)(\/|$)/;
const hasSessionCookie = () => /(?:^|;\s*)sb-[^=]*-auth-token/.test(document.cookie);

export interface AuthUser {
  id: string;
  email: string;
  nama: string;
  foto: string | null;
}

interface AuthCtx {
  user: AuthUser | null;
  loading: boolean;
  configured: boolean;
  signOut: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>({
  user: null, loading: false, configured: false, signOut: async () => {},
});

export const useAuth = () => useContext(Ctx);

function toAuthUser(u: User | null): AuthUser | null {
  if (!u) return null;
  const m = (u.user_metadata ?? {}) as Record<string, string | undefined>;
  const email = u.email ?? '';
  return {
    id: u.id,
    email,
    nama: m.full_name || m.name || email.split('@')[0] || 'Pengguna',
    foto: m.avatar_url || m.picture || null,
  };
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const pathname = usePathname() ?? '/';
  const started = useRef(false);
  const cleanup = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured || started.current) return;

    const onAuthPage = AUTH_PATHS.test(pathname);
    if (!onAuthPage && !hasSessionCookie()) {
      // Belum login & tidak di halaman auth: tidak perlu memuat Supabase.
      Promise.resolve().then(() => setLoading(false));
      return;
    }
    started.current = true;

    const boot = () => {
      import('@/lib/supabase/client').then(({ getSupabaseBrowser }) => {
        const sb = getSupabaseBrowser();
        if (!sb) { setLoading(false); return; }
        let alive = true;
        sb.auth.getUser().then(({ data }) => {
          if (!alive) return;
          setUser(toAuthUser(data.user));
          setLoading(false);
        });
        const { data: sub } = sb.auth.onAuthStateChange((_e, session) => {
          setUser(toAuthUser(session?.user ?? null));
          setLoading(false);
        });
        cleanup.current = () => { alive = false; sub.subscription.unsubscribe(); };
      });
    };

    // Halaman auth: langsung. Halaman lain (user sudah login): tunggu browser idle
    // supaya tidak menambah beban saat halaman pertama dimuat.
    if (onAuthPage) { boot(); return; }
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(boot, { timeout: 3000 });
    else window.setTimeout(boot, 1500);
  }, [pathname]);

  useEffect(() => () => cleanup.current?.(), []);

  const signOut = useCallback(async () => {
    const { getSupabaseBrowser } = await import('@/lib/supabase/client');
    const sb = getSupabaseBrowser();
    if (sb) await sb.auth.signOut();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, configured: isSupabaseConfigured, signOut }),
    [user, loading, signOut]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
