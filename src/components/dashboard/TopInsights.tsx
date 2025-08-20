import React from 'react';
import type { Insight } from './types'; // Import from our types file

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

interface TopInsightsProps {
  insights: Insight[];
}

const TopInsights: React.FC<TopInsightsProps> = ({ insights }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
    <h2 className="text-lg font-semibold text-gray-700 mb-1">Top Performing Insights</h2>
    <p className="text-sm text-gray-500 mb-6">Your most valuable contributions</p>
    <div className="space-y-4">
      {insights.map((insight, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-lg">❖</span>
            <p className="text-gray-800">{insight.name}</p>
          </div>
          <p className="font-semibold text-green-500">{formatCurrency(insight.earnings)}</p>
        </div>
      ))}
    </div>
    <div className="mt-8 flex space-x-4">
      <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition">
        Withdraw Earnings
      </button>
      <button className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
        Reinvest Earnings
      </button>
    </div>
  </div>
);

export default TopInsights;