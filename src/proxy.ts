import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { createServerClient } from '@supabase/ssr';
import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from '@/lib/supabase/config';

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'ganti-dengan-secret-yang-kuat-min-32-karakter'
);

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── Area admin (JWT admin, tidak berubah) ────────────────────
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = req.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch {
      const response = NextResponse.redirect(new URL('/admin/login', req.url));
      response.cookies.set('admin_token', '', { maxAge: 0, path: '/' });
      return response;
    }
  }

  // ── Area akun pengguna (sesi Supabase) ───────────────────────
  if (pathname.startsWith('/akun')) {
    const toLogin = () => {
      const url = new URL('/login', req.url);
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    };
    if (!isSupabaseConfigured) return toLogin();

    let res = NextResponse.next({ request: req });
    const sb = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (list) => {
          list.forEach(({ name, value }) => req.cookies.set(name, value));
          res = NextResponse.next({ request: req });
          list.forEach(({ name, value, options }) => res.cookies.set(name, value, options));
        },
      },
    });
    const { data } = await sb.auth.getUser();
    if (!data.user) return toLogin();
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/akun/:path*', '/akun'],
};
