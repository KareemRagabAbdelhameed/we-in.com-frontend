import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
    <p className="text-xs text-gray-400">{description}</p>
  </div>
);

export default SummaryCard;