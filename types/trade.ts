export type Trade = {
  id: string;
  ticket: string;
  symbol: string;
  type: 'Achat' | 'Vente';
  lot: number;
  openPrice: number;
  closePrice: number;
  profit: number;
  date: string;
};
