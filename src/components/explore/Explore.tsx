import React, { useState, memo } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { InsightCard } from './InsightCard';

// --- TYPE DEFINITIONS ---
type Insight = {
  author: {
    name: string;
    avatarUrl: string;
  };
  category: string;
  title: string;
  description: string;
  stats: {
    likes: number;
    comments: number;
  };
  imageUrl?: string;
  isAudio?: boolean;
};

const insightsData: Insight[] = [
  {
    author: { name: 'Sarah Chen', avatarUrl: 'https://i.pravatar.cc/150?u=sarahchen' },
    category: 'Relationships',
    title: 'The Art of Active Listening in Daily Life',
    description: 'True listening is more than just hearing words; it\'s about understanding the unspoken emotions and intentions behind them. This practice can transform your relationships...',
    stats: { likes: 124, comments: 18 },
  },
  {
    author: { name: 'Alex Lee', avatarUrl: 'https://i.pravatar.cc/150?u=alexlee' },
    category: 'Mindfulness',
    title: 'Visualizing Inner Calm: A Guide to Meditation Spaces',
    description: 'Creating a dedicated meditation space can significantly enhance your practice. Here are visual inspirations and tips for setting up your serene corner...',
    stats: { likes: 210, comments: 35 },
    imageUrl: 'data:image/jpeg;base64,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',
  },
  {
    author: { name: 'David Kim', avatarUrl: 'https://i.pravatar.cc/150?u=davidkim' },
    category: 'Productivity',
    title: 'The Power of Short Walks for Productivity',
    description: 'Discover how incorporating short, mindful walks into your day can boost creativity, reduce stress, and improve focus. Listen to this quick guide...',
    stats: { likes: 98, comments: 12 },
    isAudio: true,
  },
  {
    author: { name: 'Emily White', avatarUrl: 'https://i.pravatar.cc/150?u=emilywhite' },
    category: 'Career Growth',
    title: 'Navigating Career Shifts with Confidence',
    description: 'Changing careers can be daunting but also incredibly rewarding. Learn strategies for self-assessment, skill development, and networking to make a smooth transition...',
    stats: { likes: 155, comments: 22 },
  },
  {
    author: { name: 'Marcus Green', avatarUrl: 'https://i.pravatar.cc/150?u=marcusgreen' },
    category: 'Health & Wellness',
    title: 'Sustainable Living Habits for a Healthier Planet',
    description: 'Small changes can make a big difference. Explore visuals illustrating easy-to-adopt sustainable habits for everyday life, benefiting both you and the environment...',
    stats: { likes: 180, comments: 28 },
    imageUrl: 'data:image/jpeg;base64,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',
  },
  {
    author: { name: 'Olivia Brown', avatarUrl: 'https://i.pravatar.cc/150?u=oliviabrown' },
    category: 'Finance',
    title: 'Budgeting Basics: Simple Steps to Financial Freedom',
    description: 'Financial peace starts with a solid budget. This audio insight breaks down the essential steps to create and stick to a budget, no matter your income...',
    stats: { likes: 75, comments: 9 },
    isAudio: true,
  },
  {
    author: { name: 'Daniel Wilson', avatarUrl: 'https://i.pravatar.cc/150?u=danielwilson' },
    category: 'Creativity',
    title: 'Cultivating Creativity in a Digital Age',
    description: 'Even with endless digital distractions, fostering creativity is possible. Discover techniques to spark new ideas and maintain your creative flow...',
    stats: { likes: 130, comments: 15 },
  },
  {
    author: { name: 'Sophia Martinez', avatarUrl: 'https://i.pravatar.cc/150?u=sophiamartinez' },
    category: 'Personal Development',
    title: 'Morning Rituals for a Balanced Day',
    description: 'Start your day right with empowering morning rituals. Visual inspirations for routines that promote peace, focus, and productivity...',
    stats: { likes: 195, comments: 38 },
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80',
  },
  {
    author: { name: 'Liam Garcia', avatarUrl: 'https://i.pravatar.cc/150?u=liamgarcia' },
    category: 'Mindfulness',
    title: 'The Power of Gratitude in Everyday Moments',
    description: 'Practicing gratitude can profoundly shift your perspective and well-being. Learn simple ways to integrate gratitude into your daily routine...',
    stats: { likes: 168, comments: 25 },
  },
];


const Header = memo(({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = ['Trending', 'Recent', 'Editor\'s Pick'];

  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <div className="border border-gray-200 rounded-lg p-1 flex gap-2 bg-gray-50">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeTab === tab ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700">
            <option>All Categories</option>
            <option>Mindfulness</option>
            <option>Productivity</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700">
            <option>All Types</option>
            <option>Visual</option>
            <option>Text</option>
            <option>Audio</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </header>
  );
});

const Pagination = memo(({ currentPage, setCurrentPage, totalPages }: { currentPage: number, setCurrentPage: (page: number) => void, totalPages: number }) => {
  return (
    <nav className="flex justify-center items-center gap-2 mt-12">
      <button className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50">
        <FiChevronLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button 
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-9 h-9 rounded-md font-semibold text-sm transition-colors ${
            currentPage === page ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
      <button className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50">
        <FiChevronRight />
      </button>
    </nav>
  );
});




const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Trending');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; 

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
        
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Explore;