import Link from 'next/link';
import { LoginForm } from '../../../features/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-10 sm:px-10">
      <section className="mx-auto flex max-w-3xl flex-col gap-10 rounded-3xl border border-white/10 bg-[#08101f]/80 p-8 shadow-surface backdrop-blur-xl">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Connexion</p>
          <h1 className="text-3xl font-semibold text-white">Bienvenue dans MT5 Analytics Pro</h1>
          <p className="text-muted">Accédez à votre cockpit de trading pour suivre vos comptes, les trades et les performances en temps réel.</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted">
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-accent transition hover:text-highlight">
            Créer un compte
          </Link>
        </p>
      </section>
    </main>
  );
}
