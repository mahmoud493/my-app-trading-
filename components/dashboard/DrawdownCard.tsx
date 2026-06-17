import { ArrowDownRightIcon } from '@heroicons/react/24/outline';

export function DrawdownCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1527] p-6 shadow-surface transition hover:border-danger/30">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Drawdown max</p>
          <p className="mt-4 text-3xl font-semibold text-danger">-5.3%</p>
        </div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-danger/10 text-danger">
          <ArrowDownRightIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex items-end gap-2">
        {[28, 24, 20, 16, 12].map((height, index) => (
          <div
            key={index}
            className="rounded-full bg-gradient-to-t from-danger to-warning transition-all duration-300 group-hover:opacity-90"
            style={{ width: 10, height }}
          />
        ))}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.32em] text-muted">24h / compte</p>
    </div>
  );
}
