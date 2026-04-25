import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { jwtVerify } from 'jose';
import AdminDashboard from './AdminDashboard';

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'ganti-dengan-secret-yang-kuat-min-32-karakter'
);

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) {
    redirect('/admin/login');
  }

  try {
    await jwtVerify(token, SECRET);
  } catch {
    redirect('/admin/login');
  }

  return <AdminDashboard />;
}
