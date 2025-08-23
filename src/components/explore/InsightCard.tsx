import { memo } from "react";
import { FiHeart, FiMessageSquare, FiPlay } from "react-icons/fi";
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
export const InsightCard = memo(({ insight }: { insight: Insight }) => {
  const { author, category, title, description, stats, imageUrl, isAudio } = insight;

  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3">
        <img src={author.avatarUrl} alt={author.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-800">{author.name}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      {imageUrl && <img src={imageUrl} alt={title} className="rounded-lg w-full h-48 object-cover" />}
      {isAudio && (
        <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center h-48 text-gray-500">
          <FiPlay className="w-12 h-12 mb-2" />
          <p className="font-semibold">Audio Insight</p>
        </div>
      )}

      <p className="text-gray-600 flex-grow">{description}</p>
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-4 text-gray-500">
          <span className="flex items-center gap-2"><FiHeart />{stats.likes}</span>
          <span className="flex items-center gap-2"><FiMessageSquare />{stats.comments}</span>
        </div>
        <a href="#" className="font-semibold text-green-600 hover:text-green-700">Read More</a>
      </div>
    </div>
  );
});