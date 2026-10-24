'use client';

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import type { User } from '@supabase/supabase-js';
import { getSupabaseBrowser } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/config';

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

  useEffect(() => {
    const sb = getSupabaseBrowser();
    if (!sb) return;
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
    return () => { alive = false; sub.subscription.unsubscribe(); };
  }, []);

  const signOut = useCallback(async () => {
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
