import { BalanceCard } from './BalanceCard';
import { DrawdownCard } from './DrawdownCard';
import { ProfitCard } from './ProfitCard';
import { WinrateCard } from './WinrateCard';

export function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <ProfitCard />
      <BalanceCard />
      <DrawdownCard />
      <WinrateCard />
    </div>
  );
}
