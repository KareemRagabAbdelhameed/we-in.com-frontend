
import CallToAction from "../../components/Home/CallToAction";
import FeaturedInsights from "../../components/Home/FeaturedInsights";
import HeroSection from "../../components/Home/HeroSection";
import HowItWorks from "../../components/Home/HowItWorks";
import TrendingCategories from "../../components/Home/TrendingCategories";

const Home = () => {
  return (
    <>
     
      {/* Hero */}
      <HeroSection />
 

      {/* Featured Insights*/}
      <FeaturedInsights />

      {/* Trending Categories */}
      <TrendingCategories />

      {/* How It Works */}
      <HowItWorks />

      {/* Call To Action */}
      <CallToAction />
    </>
  );
};

export default Home;
