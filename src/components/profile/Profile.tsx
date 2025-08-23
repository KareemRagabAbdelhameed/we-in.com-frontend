import React from 'react';
import {FiSettings, FiFilter, FiBarChart2, FiUsers as FiAudience } from 'react-icons/fi';
import { ProfileCard } from './ProfileCard';
import { QuickActions } from './QuickActions';
import { ChartCard } from './ChartCard';
import { TopInsightsList } from './TopInsightsList';


type ChartData = {
  name: string;
  [key: string]: number | string;
};



const viewsData: ChartData[] = [
  { name: 'Jan', value: 250 }, { name: 'Mar', value: 300 }, { name: 'May', value: 280 },
  { name: 'Jun', value: 350 }, { name: 'Jul', value: 400 }, { name: 'Aug', value: 420 },
  { name: 'Sep', value: 450 }, { name: 'Oct', value: 430 }, { name: 'Dec', value: 500 },
];

const followerData: ChartData[] = [
  { name: 'Jan', value: 1500 }, { name: 'Mar', value: 1550 }, { name: 'May', value: 1600 },
  { name: 'Jun', value: 1620 }, { name: 'Jul', value: 1650 }, { name: 'Aug', value: 1700 },
  { name: 'Sep', value: 1720 }, { name: 'Oct', value: 1710 }, { name: 'Dec', value: 1750 },
];








// --- MAIN APP COMPONENT ---

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* left side */}
        <aside className="lg:col-span-1 flex flex-col gap-8">
          <ProfileCard />
          <QuickActions />
        </aside>
        
        {/* right side */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm">
            <header className="bg-[#f7f7f7] pt-1 max-w-full overflow-auto hide-scroll">
              <nav className="flex gap-6 px-6 -mb-px justify-around">
                <button className="flex items-center gap-2 py-2 px-1 text-gray-500 hover:text-green-600"><FiFilter /><span>Insights</span></button>
                <button className="flex items-center gap-2 py-2 px-1 text-green-600 border-b-2 bg-white px-12 border-green-600 font-semibold"><FiBarChart2 /><span>Analytics</span></button>
                <button className="flex items-center gap-2 py-2 px-1 text-gray-500 hover:text-green-600"><FiAudience /><span>Audience</span></button>
                <button className="flex items-center gap-2 py-2 px-1 text-gray-500 hover:text-green-600"><FiSettings /><span>Settings</span></button>
              </nav>
            </header>
            
            <div className="p-6">
              <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                <ChartCard title="Views Over Time" subtitle="Monthly views of your insights." data={viewsData} />
                <ChartCard title="Follower Growth" subtitle="Trend of your total followers over time." data={followerData} yDomain={[0, 2000]} />
              </section>
              
              <section>
                <TopInsightsList />
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;