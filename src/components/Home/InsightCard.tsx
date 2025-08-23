import React from "react";
import { GoLightBulb } from "react-icons/go";
interface InsightCardProps {
  category: string;
  title: string;
  author: string;
  image: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ category, title, author, image }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">By {author}</p>

        <a
          href="#"
          className="flex items-center gap-1 mt-4 text-green-600 font-medium hover:underline"
        >
          Read Insight
          <GoLightBulb className="text-green-600 text-sm" />
        </a>
      </div>
    </div>
  );
};

export default InsightCard;
