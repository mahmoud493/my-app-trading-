import { DashboardShell } from '../../components/layout/DashboardShell';

const metrics = [
  { label: 'Profit journalier', value: '+15.2%', description: 'Taux moyen des dernières 24h' },
  { label: 'Sharpe ratio', value: '1.94', description: 'Rendement ajusté du risque' },
  { label: 'Trades gagnants', value: '78%', description: 'Proportion des trades positifs' },
  { label: 'Taux de rotation', value: '12 trades', description: 'Transactions par semaine' }
];

export default function AnalyticsPage() {
  return (
    <DashboardShell title="Analytics" description="Analyse avancée de vos performances trading et des tendances de marché.">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Performances</h2>
            <p className="mt-2 text-sm text-muted">Mesurez la qualité de votre trading avec des KPI clairs et un suivi graphique.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/5 bg-[#0b1527] p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted">{metric.label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-muted">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Distribution du PnL</h2>
            <p className="mt-2 text-sm text-muted">Histogramme des profits et pertes par stratégie.</p>
            <div className="mt-8 h-[320px] rounded-3xl bg-[#0a1220]" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Performances par actif</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-[#0b1527] p-4">
                <p className="text-sm text-muted">EURUSD</p>
                <p className="mt-2 text-2xl font-semibold text-white">+6.8%</p>
              </div>
              <div className="rounded-3xl bg-[#0b1527] p-4">
                <p className="text-sm text-muted">GBPUSD</p>
                <p className="mt-2 text-2xl font-semibold text-white">+4.1%</p>
              </div>
              <div className="rounded-3xl bg-[#0b1527] p-4">
                <p className="text-sm text-muted">XAUUSD</p>
                <p className="mt-2 text-2xl font-semibold text-white">+2.3%</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Alertes</h2>
            <p className="mt-2 text-sm text-muted">Notifications sur vos seuils de performance et drawdown.</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-3xl border border-white/5 bg-[#0b1527] p-4">
                <p className="text-sm text-muted">Drawdown critique</p>
                <p className="text-white">Votre compte Macro Pulse est proche du seuil -8%.</p>
              </div>
              <div className="rounded-3xl border border-white/5 bg-[#0b1527] p-4">
                <p className="text-sm text-muted">Trade clé</p>
                <p className="text-white">Nouvelle entrée validée sur EURUSD avec levier 1:20.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
