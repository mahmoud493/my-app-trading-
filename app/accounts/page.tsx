import { DashboardShell } from '../../components/layout/DashboardShell';

const accounts = [
  { name: 'EURUSD Master', balance: 128540, equity: 134265, dd: 5.3, status: 'Active' },
  { name: 'Algo Growth', balance: 95420, equity: 100810, dd: 4.1, status: 'Active' },
  { name: 'Macro Pulse', balance: 70120, equity: 68430, dd: 2.8, status: 'Hors ligne' }
];

export default function AccountsPage() {
  return (
    <DashboardShell title="Comptes" description="Gestion de vos comptes MT5 et aperçu rapide des performances.">
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-muted">Comptes connectés</p>
              <h2 className="text-xl font-semibold text-white">Vos portefeuilles MT5</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3 text-left text-sm text-muted">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.26em] text-[#7f94b5]">
                  <th className="px-4 py-3">Compte</th>
                  <th className="px-4 py-3">Balance</th>
                  <th className="px-4 py-3">Équité</th>
                  <th className="px-4 py-3">Drawdown</th>
                  <th className="px-4 py-3">Statut</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.name} className="rounded-3xl border border-white/5 bg-[#0b1527] shadow-sm">
                    <td className="px-4 py-4 font-medium text-white">{account.name}</td>
                    <td className="px-4 py-4">€{account.balance.toLocaleString()}</td>
                    <td className="px-4 py-4 text-success">€{account.equity.toLocaleString()}</td>
                    <td className="px-4 py-4 text-warning">{account.dd}%</td>
                    <td className="px-4 py-4 text-accent">{account.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
