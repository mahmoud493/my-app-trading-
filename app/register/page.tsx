import Link from 'next/link';
import { RegisterForm } from '../../features/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-10 sm:px-10">
      <section className="mx-auto flex max-w-3xl flex-col gap-10 rounded-3xl border border-white/10 bg-[#08101f]/80 p-8 shadow-surface backdrop-blur-xl">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Inscription</p>
          <h1 className="text-3xl font-semibold text-white">Rejoignez la plateforme de suivi trading</h1>
          <p className="text-muted">Créez un compte sécurisé pour analyser vos performances MT5 et connecter vos flux de trading.</p>
        </div>

        <RegisterForm />

        <p className="text-center text-sm text-muted">
          Déjà membre ?{' '}
          <Link href="/login" className="text-accent transition hover:text-highlight">
            Se connecter
          </Link>
        </p>
      </section>
    </main>
  );
}
