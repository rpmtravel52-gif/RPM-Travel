import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'ganti-dengan-secret-yang-kuat-min-32-karakter'
);

// Kredensial admin — simpan di environment variable
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ganti-password-ini';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: 'Username dan password wajib diisi' },
        { status: 400 }
      );
    }

    // Validasi kredensial
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      // Delay 500ms untuk mencegah brute force
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json(
        { message: 'Username atau password salah' },
        { status: 401 }
      );
    }

    // Buat JWT token (berlaku 8 jam)
    const token = await new SignJWT({ username, role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('8h')
      .sign(SECRET);

    // Set cookie HttpOnly
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 jam
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
