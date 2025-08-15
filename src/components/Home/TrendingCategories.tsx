import React from "react";
import { 
  FaRunning, 
  FaGlobe, 
  FaLightbulb, 
  FaDollarSign, 
  FaHeart, 
  FaBriefcase, 
  FaLeaf 
} from "react-icons/fa";

import type { ReactElement } from "react";

interface Category {
  icon: ReactElement;
  name: string;
  insights: number;
}

const categories: Category[] = [
  { icon: <FaRunning className="text-green-600 text-2xl" />, name: "Self-Improvement", insights: 203 },
  { icon: <FaGlobe className="text-green-600 text-2xl" />, name: "Digital Wellness", insights: 89 },
  { icon: <FaLightbulb className="text-green-600 text-2xl" />, name: "Creative Thinking", insights: 124 },
  { icon: <FaDollarSign className="text-green-600 text-2xl" />, name: "Financial Wisdom", insights: 156 },
  { icon: <FaHeart className="text-green-600 text-2xl" />, name: "Relationship Insights", insights: 98 },
  { icon: <FaBriefcase className="text-green-600 text-2xl" />, name: "Career Growth", insights: 177 },
  { icon: <FaLeaf className="text-green-600 text-2xl" />, name: "Mindful Living", insights: 130 },
];

const TrendingCategories: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">
        Trending Categories
      </h2>

      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white border-1 border-[#f0f0f0] rounded-lg flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {cat.icon}
            <h3 className="mt-2 text-sm font-semibold">{cat.name}</h3>
            <p className="text-gray-500 text-xs">{cat.insights} Insights</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
