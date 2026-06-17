'use client';

import { useEffect, useState } from 'react';
import QueryProvider from '../providers/QueryProvider';
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = window.localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <>{mounted ? (
      <QueryProvider>
        <Toaster richColors position="bottom-right" />
        {children}
      </QueryProvider>
    ) : null}</>
  );
}
