import { memo } from "react";
import { FiEdit } from "react-icons/fi";

const userProfile = {
  name: "Alex Johnson",
  handle: "@alex_wisdom",
  avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
  bio: "Passionate about sharing insights on personal growth, mindfulness, and effective communication. Learning and growing, one wisdom at a time.",
  stats: {
    insights: 42,
    views: 12500,
    likes: 3450,
    comments: 560,
  }
};
export const ProfileCard = memo(() => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col gap-6">
    <div className="flex flex-col items-center text-center">
      <img src={userProfile.avatarUrl} alt={userProfile.name} className="w-24 h-24 object-cover rounded-full mb-4" />
      <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
      <p className="text-gray-500 mb-4">{userProfile.handle}</p>
      <p className="text-gray-600 mb-6">{userProfile.bio}</p>
      <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
        <FiEdit /> Edit Profile
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 text-center">
      <div>
        <p className="text-2xl font-bold text-green-600">{userProfile.stats.insights}</p>
        <p className="text-gray-500 text-sm">Insights Shared</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-green-600">{userProfile.stats.views.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">Total Views</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-green-600">{userProfile.stats.likes.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">Total Likes</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-green-600">{userProfile.stats.comments}</p>
        <p className="text-gray-500 text-sm">Total Comments</p>
      </div>
    </div>
  </div>
));