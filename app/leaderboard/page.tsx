import { DashboardShell } from '../../components/layout/DashboardShell';

const traders = [
  { rank: 1, name: 'Alpha Quant', roi: '+34.1%', winrate: '82%', assets: 'EURUSD / XAUUSD' },
  { rank: 2, name: 'Delta Pulse', roi: '+29.3%', winrate: '77%', assets: 'GBPUSD / US30' },
  { rank: 3, name: 'VegaFX', roi: '+24.8%', winrate: '74%', assets: 'EURJPY / BTCUSD' }
];

export default function LeaderboardPage() {
  return (
    <DashboardShell title="Leaderboard" description="Classement des meilleurs traders et stratégies les plus performantes.">
      <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-muted">Classement</p>
            <h2 className="text-xl font-semibold text-white">Top traders MT5</h2>
          </div>
        </div>

        <div className="space-y-4">
          {traders.map((trader) => (
            <div key={trader.rank} className="rounded-3xl border border-white/5 bg-[#0b1527] p-5 transition hover:border-accent/30">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-muted">#{trader.rank}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{trader.name}</p>
                </div>
                <div className="grid gap-2 sm:text-right">
                  <p className="text-lg font-semibold text-accent">{trader.roi}</p>
                  <p className="text-sm text-muted">Winrate {trader.winrate}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">Actifs: {trader.assets}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
