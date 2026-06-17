'use client';

import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const data = [
  { time: '2024-10-01', value: 102.2 },
  { time: '2024-10-02', value: 107.8 },
  { time: '2024-10-03', value: 105.1 },
  { time: '2024-10-04', value: 112.9 },
  { time: '2024-10-05', value: 118.6 },
  { time: '2024-10-06', value: 124.2 },
  { time: '2024-10-07', value: 121.7 },
  { time: '2024-10-08', value: 128.4 },
  { time: '2024-10-09', value: 133.1 },
  { time: '2024-10-10', value: 136.9 }
];

export function EquityChart() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 360,
      layout: {
        background: { color: '#08101f' },
        textColor: '#d0e4ff'
      },
      grid: {
        vertLines: { color: '#17253b' },
        horzLines: { color: '#17253b' }
      },
      crosshair: { mode: 1 },
      rightPriceScale: { borderColor: '#1d3451' },
      timeScale: { borderColor: '#1d3451', timeVisible: true, secondsVisible: false }
    });

    const lineSeries = chart.addSeries({ type: 'Line' } as any, {
      color: '#40c6ff',
      lineWidth: 2
    }) as any;

    lineSeries.setData(data);

    const handleResize = () => {
      chart.applyOptions({ width: chartRef.current?.clientWidth ?? 0 });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={chartRef} className="h-[360px] rounded-[1.5rem] bg-[#08101f]" />;
}
