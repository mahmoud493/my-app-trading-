const analytics = [
  { title: 'Ratio de Sharpe', value: '1.94' },
  { title: 'Rendement mensuel', value: '+18.3%' },
  { title: 'Max drawdown', value: '-5.1%' },
  { title: 'Trades gagnants', value: '78%' }
];

export function AnalyticsSummary() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b1527] p-6 shadow-surface">
      <h2 className="text-xl font-semibold text-white">Résumé analytique</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {analytics.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/5 bg-[#08101f] p-5">
            <p className="text-sm uppercase tracking-[0.32em] text-muted">{item.title}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
