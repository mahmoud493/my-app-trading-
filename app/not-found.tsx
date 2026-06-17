import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-surface px-6 text-center text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-[#08101f]/90 p-14 shadow-surface">
        <p className="text-sm uppercase tracking-[0.32em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page introuvable</h1>
        <p className="mt-4 text-muted">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-highlight" href="/">
          Revenir à l'accueil
        </Link>
      </div>
    </main>
  );
}
