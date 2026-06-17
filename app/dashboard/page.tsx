import { DashboardShell } from '../../components/layout/DashboardShell';
import { MetricCards } from '../../components/dashboard/MetricCards';
import { EquityChart } from '../../components/charts/EquityChart';
import { RecentTradesTable } from '../../components/dashboard/RecentTradesTable';
import { AnalyticsSummary } from '../../components/dashboard/AnalyticsSummary';

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard" description="Vue d'ensemble de vos comptes MT5 et performances live.">
      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
        <div className="space-y-6">
          <MetricCards />
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-muted">Équité</p>
                <h2 className="text-xl font-semibold text-white">Graphique temps réel</h2>
              </div>
            </div>
            <EquityChart />
          </div>
        </div>

        <div className="space-y-6">
          <AnalyticsSummary />
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="mb-4 text-xl font-semibold text-white">Transactions récentes</h2>
            <RecentTradesTable />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
