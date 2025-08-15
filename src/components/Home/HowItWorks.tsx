import React from 'react';
import { FaPlus, FaRegComments, FaUserFriends } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm w-full text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
    {/* Icon container */}
    <div className="mx-auto flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mb-5">
      <Icon className="h-8 w-8 text-green-600" />
    </div>
    {/* Card content */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HowWeinWorks: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: FaPlus,
      title: 'Share Your Writings',
      description: 'Effortlessly create and share your unique insights using text, audio, or visuals. No professional and YouTube skills needed.',
    },
    {
      icon: FaRegComments,
      title: 'Connect & Engage',
      description: 'Connect with a supportive global community. Give and receive feedback, fostering authentic dialogue.',
    },
    {
      icon: FaUserFriends,
      title: 'Grow & Earn',
      description: 'Track the impact of your writings. Grow your audience and even earn from your valuable contributions.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-center mb-10">
            How Wein.com Works?
          </h2>
        </div>

        {/* Grid for feature cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeinWorks;