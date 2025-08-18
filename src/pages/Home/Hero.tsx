import bgImage from "../../assets/images/MDT3398_HeaderImage.png"
const HeroSection = ()=> {

  const backgroundUrl =
    bgImage;

  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="bg-black bg-opacity-50">
        <div className="max-w-4xl px-8 py-24">
          <h1 className="text-white text-5xl font-bold mb-6">
            Making Internet <br/> better together!
          </h1>
          <p className="text-white text-lg mb-8">
            for those who write to feel and read to grow
          </p>
          <button
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Create a free account
          </button>
        </div>
      </div>
    </section>
  );
}
export default HeroSection