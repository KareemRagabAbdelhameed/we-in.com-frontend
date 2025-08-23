import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Helper to format currency (can be moved to a utils file later)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

interface ChartData {
  name: string;
  earnings: number;
}

interface EarningsTrendChartProps {
  data: ChartData[];
}

const EarningsTrendChart: React.FC<EarningsTrendChartProps> = ({ data }) => (
  <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold text-gray-700">Earnings Trend</h2>
    <p className="text-sm text-gray-500 mb-4">Your earnings over the last 6 months</p>
    <div className="h-80 pr-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280' }}
            domain={[400, 1600]}
            ticks={[400, 800, 1200, 1600]}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}
            labelStyle={{ fontWeight: 'bold' }}
            formatter={(value: number) => [formatCurrency(value), 'Earnings']}
          />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#34D399"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, strokeWidth: 2, fill: '#34D399' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default EarningsTrendChart;