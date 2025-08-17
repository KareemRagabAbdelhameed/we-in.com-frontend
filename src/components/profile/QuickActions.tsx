import { memo } from "react";
import { FiDollarSign, FiPlusCircle, FiUsers } from "react-icons/fi";

export const QuickActions = memo(() => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
    <ul className="space-y-3">
      <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer"><FiPlusCircle /><span>Create New Insight</span></li>
      <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer"><FiDollarSign /><span>View My Earnings</span></li>
      <li className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer"><FiUsers /><span>Manage Followers</span></li>
    </ul>
  </div>
));