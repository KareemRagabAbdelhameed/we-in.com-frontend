import React from 'react';
import type { Transaction } from './types'; // Import from our types file

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

interface TransactionHistoryTableProps {
  transactions: Transaction[];
}

const TransactionHistoryTable: React.FC<TransactionHistoryTableProps> = ({ transactions }) => (
  <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold text-gray-700">Transaction History</h2>
    <p className="text-sm text-gray-500 mb-4">A detailed record of your financial activities</p>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr>
            <th className="p-3 font-medium">Date</th>
            <th className="p-3 font-medium">Description</th>
            <th className="p-3 font-medium">Type</th>
            <th className="p-3 font-medium text-right">Amount</th>
            <th className="p-3 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-3 text-gray-500">{item.date}</td>
              <td className="p-3 text-gray-800">{item.description}</td>
              <td className="p-3 text-gray-500">{item.type}</td>
              <td className={`p-3 text-right font-semibold ${item.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.amount > 0 ? `+${formatCurrency(item.amount)}` : formatCurrency(item.amount)}
              </td>
              <td className="p-3 text-center">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TransactionHistoryTable;