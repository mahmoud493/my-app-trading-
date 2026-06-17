import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-14 sm:px-10 lg:px-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full border border-accent/20 px-4 py-1 text-sm uppercase tracking-[0.32em] text-accent">Plateforme Trading MT5</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Suivi de performance trading, analytics en temps réel et insights pro.</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">Découvrez un dashboard moderne inspiré des meilleures plateformes fintech, conçu pour les traders MT5 qui veulent maîtriser leur performance.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/login" aria-label="Se connecter">
                <Button variant="primary">Connexion</Button>
              </Link>
              <Link href="/register" aria-label="Créer un compte">
                <Button variant="secondary">Créer un compte</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="border border-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-muted">Équité en direct</p>
              <p className="mt-4 text-3xl font-semibold text-white">+12.9%</p>
            </Card>
            <Card className="border border-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-muted">Winrate</p>
              <p className="mt-4 text-3xl font-semibold text-white">78%</p>
            </Card>
            <Card className="border border-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-muted">Drawwdown max</p>
              <p className="mt-4 text-3xl font-semibold text-white">-6.4%</p>
            </Card>
          </div>
        </div>

        <Card className="group relative overflow-hidden border border-white/10 bg-[#0c1726] p-8 shadow-surface">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(64,198,255,0.16),transparent_25%)]" />
          <div className="relative space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Dashboard pro</p>
            <h2 className="text-3xl font-semibold text-white">Un cockpit trading premium, pensé pour l’analyse.</h2>
            <p className="text-muted">Tableaux de bord, indicateurs de performance, gestion des comptes et alertes en temps réel dans une expérience mobile-first.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-[#111b2f] p-5">
                <p className="text-sm text-muted">Positions ouvertes</p>
                <p className="mt-3 text-2xl font-semibold text-white">14</p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-[#111b2f] p-5">
                <p className="text-sm text-muted">Flux de données</p>
                <p className="mt-3 text-2xl font-semibold text-white">Socket.IO live</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
