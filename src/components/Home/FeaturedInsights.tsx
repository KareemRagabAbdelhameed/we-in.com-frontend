import React from "react";
import FeatImg1 from "../../assets/feat01.jpg"; // Adjust path
import FeatImg2 from "../../assets/feat02.jpg"; // Adjust path
import FeatImg3 from "../../assets/feat03.jpg"; // Adjust path
import FeatImg4 from "../../assets/feat04.jpg"; // Adjust path
import InsightCard from "../InsightCard";

interface Insight {
  title: string;
  category: string;
  image: string;
  author?: string; // Optional if not used
}

const insights: Insight[] = [
  {
    title: "How AI is Transforming Business",
    category: "Technology",
    image: FeatImg1,
    author: "John Doe",
  },
  {
    title: "Sustainable Practices in 2024",
    category: "Environment",
    image: FeatImg2,
    author: "John Doe",
  },
  {
    title: "The Future of Remote Work",
    category: "Workplace",
    image: FeatImg3,
    author: "John Doe",
  },
  {
    title: "Design Trends to Watch",
    category: "Design",
    image: FeatImg4,
    author: "John Doe",
  },
  {
    title: "The Future of Remote Work",
    category: "Workplace",
    image: FeatImg3,
    author: "John Doe",
  },
];

const FeaturedInsights: React.FC = () => (
  <section className="mt-[2rem] flex flex-col gap-12">
    <h2 className="text-2xl font-bold text-center"> Featured Insights</h2>
    <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {insights.map((insight, idx) => (
        <InsightCard
          key={idx}
          title={insight.title}
          category={insight.category}
          author={insight.author || "Unknown Author"}
          image={insight.image}
        />
      ))}
    </div>
    <div className="text-center mt-2">
      <button className="text-green-600 px-6 py-3 rounded border-1 border-[#e1dddd] cursor-pointer">
        View All Insights
      </button>
    </div>
  </section>
);

export default FeaturedInsights;
