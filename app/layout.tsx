import './globals.css';
import type { Metadata } from 'next';
import Providers from '../components/layout/Providers';

export const metadata: Metadata = {
  title: 'MT5 Analytics Pro',
  description: 'Plateforme SaaS de suivi de performance trading MT5 avec dashboard premium.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
