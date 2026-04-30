// src/lib/usePackages.ts
//
// Hook ini menggantikan import langsung PACKAGES dari packages.ts.
// Harga diambil dari /api/rates sehingga perubahan tarif di admin
// langsung tampil di halaman pemesanan tanpa deploy ulang.
//
// CARA PAKAI di page.tsx /pesan:
//   Ganti:  import { PACKAGES } from '@/lib/packages'
//   Dengan: import { usePackages } from '@/lib/usePackages'
//           const { packages, loading } = usePackages()

'use client';
import { useState, useEffect } from 'react';
import { type TravelPackage, PACKAGES } from '@/lib/packages';

export function usePackages() {
  const [packages, setPackages] = useState<TravelPackage[]>(PACKAGES); // pakai PACKAGES sebagai nilai awal
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/rates')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && Array.isArray(data.rates)) {
          setPackages(data.rates);
        }
      })
      .catch(() => {
        // Jika API gagal, tetap pakai PACKAGES dari packages.ts
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return { packages, loading };
}
