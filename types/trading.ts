export type TradeRecord = {
  id: string;
  symbol: string;
  profit: string;
  status: string;
  time: string;
};

export type AccountSummary = {
  balance: number;
  equity: number;
  drawdown: number;
  winrate: number;
  activeTrades: number;
};

export type MarketMetric = {
  label: string;
  value: string;
  description: string;
};
