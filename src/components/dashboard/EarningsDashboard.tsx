import React from 'react';
import type { Transaction, Insight } from './types'; // Import types

// Import the modular components
import SummaryCard from './SummaryCard';
import EarningsTrendChart from './EarningsTrendChart';
import TopInsights from './TopInsights';
import TransactionHistoryTable from './TransactionHistoryTable';

// Mock Data (In a real app, this would come from an API)
const totalLifetimeEarnings = 12345.67;
const averageMonthlyEarnings = 1028.80;
const currentAvailableBalance = 876.54;

const earningsTrendData = [
    { name: 'Mar', earnings: 850 },
    { name: 'Apr', earnings: 1080 },
    { name: 'May', earnings: 980 },
    { name: 'Jun', earnings: 1190 },
    { name: 'Jul', earnings: 1250 },
    { name: 'Aug', earnings: 1450 },
];

const topPerformingInsights: Insight[] = [
    { name: 'Mastering Emotional Intelligence', earnings: 250.75 },
    { name: 'The Art of Mindful Listening', earnings: 180.20 },
    { name: 'Visualizing Your Goals for Success', earnings: 155.00 },
    { name: 'Simple Habits for Daily Productivity', earnings: 120.50 },
    { name: 'Navigating Career Transitions', earnings: 95.30 },
];

const transactionHistory: Transaction[] = [
    { date: '2024-08-01', description: "Payout for 'Mindful Listening' Insight", type: 'Earnings', amount: 55.75, status: 'Completed' },
    { date: '2024-07-28', description: 'Withdrawal to Bank Account', type: 'Withdrawal', amount: -200.00, status: 'Completed' },
    { date: '2024-07-25', description: "Payout for 'Emotional Intelligence' Insight", type: 'Earnings', amount: 75.00, status: 'Completed' },
    // ... other transactions
];

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};


const EarningsDashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Earnings Dashboard</h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Total Lifetime Earnings"
          value={formatCurrency(totalLifetimeEarnings)}
          description="Across all your shared wisdom"
        />
        <SummaryCard
          title="Average Monthly Earnings"
          value={formatCurrency(averageMonthlyEarnings)}
          description="Based on your last 12 months"
        />
        <SummaryCard
          title="Current Available Balance"
          value={formatCurrency(currentAvailableBalance)}
          description="Ready for withdrawal or reinvestment"
        />
      </div>

      {/* Main Grid for Chart, Insights, and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <EarningsTrendChart data={earningsTrendData} />
        <TopInsights insights={topPerformingInsights} />
        <TransactionHistoryTable transactions={transactionHistory} />
      </div>
    </div>
  );
};

export default EarningsDashboard;