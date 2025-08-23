import { memo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
type ChartData = {
  name: string;
  [key: string]: number | string;
};

export const ChartCard = memo(
  ({
    title,
    subtitle,
    data,
    yDomain,
  }: {
    title: string;
    subtitle: string;
    data: ChartData[];
    yDomain?: [number, number];
  }) => (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={yDomain}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#14B8A6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
);
