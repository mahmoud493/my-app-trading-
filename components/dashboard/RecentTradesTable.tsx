const trades = [
  { id: 'MT5-1234', symbol: 'EURUSD', profit: '+1.8%', status: 'Fermé', time: '07:42' },
  { id: 'MT5-1452', symbol: 'XAUUSD', profit: '+2.4%', status: 'Fermé', time: '08:15' },
  { id: 'MT5-1620', symbol: 'GBPUSD', profit: '-0.9%', status: 'Ouvert', time: '08:43' },
  { id: 'MT5-1701', symbol: 'USDCAD', profit: '+0.7%', status: 'Fermé', time: '09:12' }
];

export function RecentTradesTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1527] text-sm shadow-surface">
      <table className="min-w-full border-separate border-spacing-y-2 text-left text-white/90">
        <thead>
          <tr className="text-xs uppercase tracking-[0.32em] text-[#7f94b5]">
            <th className="px-4 py-4">Compte</th>
            <th className="px-4 py-4">Actif</th>
            <th className="px-4 py-4">PnL</th>
            <th className="px-4 py-4">Statut</th>
            <th className="px-4 py-4">Heure</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id} className="rounded-[1.5rem] border border-white/5 bg-[#08101f] shadow-sm">
              <td className="px-4 py-4 font-medium text-white">{trade.id}</td>
              <td className="px-4 py-4">{trade.symbol}</td>
              <td className={`px-4 py-4 ${trade.profit.startsWith('+') ? 'text-success' : 'text-danger'}`}>{trade.profit}</td>
              <td className="px-4 py-4 text-muted">{trade.status}</td>
              <td className="px-4 py-4 text-muted">{trade.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
