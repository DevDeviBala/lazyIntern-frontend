const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About{" "}
        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          lazyIntern
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We're revolutionizing how companies discover and hire student talent
        by focusing on skills and projects rather than grades and university
        rankings.
      </p>
    </div>
  );
};

export default HeroSection;