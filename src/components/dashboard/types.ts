// Interface for a single transaction record
export interface Transaction {
  date: string;
  description: string;
  type: 'Earnings' | 'Withdrawal' | 'Reinvestment';
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
}

// Interface for a single top performing insight
export interface Insight {
  name: string;
  earnings: number;
}