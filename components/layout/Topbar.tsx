import { BellIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

interface TopbarProps {
  title: string;
  description: string;
}

export function Topbar({ title, description }: TopbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#091423] p-6 shadow-surface sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-muted">{title}</p>
        <h1 className="mt-2 text-2xl font-semibold text-white">{description}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-[#0b1527] px-4 py-3 text-sm text-white transition hover:border-accent/30">
          <ArrowPathRoundedSquareIcon className="h-5 w-5 text-accent" />
          Actualiser
        </button>
        <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-[#0b1527] text-white transition hover:border-accent/30">
          <BellIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
