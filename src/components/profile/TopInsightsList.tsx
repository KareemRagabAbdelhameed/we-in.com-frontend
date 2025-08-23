import { memo } from "react";
import { FiEye, FiHeart } from "react-icons/fi";

type Insight = {
  title: string;
  type: string;
  views: number;
  likes: number;
  image: string;
};

const topInsightsData: Insight[] = [
  { title: 'Visualizing Your Goals', type: 'Visual', views: 1500, likes: 310, image: 'https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { title: 'The Power of Active Listening', type: 'Text', views: 1200, likes: 250, image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { title: 'Building Healthy Habits', type: 'Visual', views: 1100, likes: 230, image: 'https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const InsightItem = memo(({ insight }: { insight: Insight }) => (
  <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
    <img src={insight.image} alt={insight.title} className="w-20 h-14 object-cover rounded-md" />
    <div className="flex-grow">
      <p className="font-bold text-gray-800">{insight.title}</p>
      <p className="text-sm text-gray-500">{insight.type}</p>
    </div>
    <div className="flex items-center gap-4 text-gray-500 text-sm">
      <div className="flex items-center gap-2"><FiEye /><span>{insight.views.toLocaleString()}</span></div>
      <div className="flex items-center gap-2"><FiHeart /><span>{insight.likes}</span></div>
    </div>
  </div>
));

export const TopInsightsList = memo(() => (
  <div>
    <h3 className="text-lg font-bold text-gray-800">Top Performing Insights</h3>
    <p className="text-gray-500 text-sm mb-4">Your most viewed and liked contributions.</p>
    <div className="space-y-4">
      {topInsightsData.map((insight) => <InsightItem key={insight.title} insight={insight} />)}
    </div>
  </div>
));