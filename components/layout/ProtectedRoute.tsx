'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem('mt5_token');
    if (!token) {
      router.replace('/login');
      return;
    }

    setIsReady(true);
  }, [router]);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
}
