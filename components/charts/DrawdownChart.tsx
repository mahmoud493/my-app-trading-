'use client';

import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const sampleData = [
  { time: '2025-01-01', value: 0 },
  { time: '2025-01-05', value: -1.2 },
  { time: '2025-01-10', value: -2.8 },
  { time: '2025-01-15', value: -1.7 },
  { time: '2025-01-20', value: -3.5 },
  { time: '2025-01-25', value: -2.1 },
  { time: '2025-01-30', value: -4.0 }
];

export default function DrawdownChart() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 280,
      layout: {
        background: { color: '#08101f' },
        textColor: '#9ca9b8'
      },
      grid: {
        vertLines: { color: '#17253b' },
        horzLines: { color: '#17253b' }
      },
      rightPriceScale: { borderColor: '#1d3451' },
      timeScale: { borderColor: '#1d3451', timeVisible: true }
    });

    const series = chart.addSeries({ type: 'Line' } as any, {
      color: '#ff4d61',
      lineWidth: 2
    }) as any;

    series.setData(sampleData);

    const handleResize = () => {
      chart.applyOptions({ width: chartRef.current?.clientWidth ?? 0 });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={chartRef} className="h-[280px] rounded-[1.5rem] bg-[#08101f]" />;
}
