import React from "react";
import HeroImg from "../../assets/hero.png"; // Adjust path

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl min-h-[75vh] mx-auto px-6 py-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl">
          Making Internet better together!
        </h1>
        <p className="mt-4 text-3xl max-w-md">
          For those who write to feel, and read to grow.
        </p>
        <button className="mt-6 bg-[#d06869] hover:bg-[#a55d5e] transition-all duration-300 text-white px-6 py-3 rounded-full cursor-pointer">
          Create a Free Account
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
