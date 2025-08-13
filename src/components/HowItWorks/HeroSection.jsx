import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How{" "}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            lazyIntern
          </span>{" "}
          Works
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A simple, effective process that connects talented students with
          companies through project-based hiring and skill demonstration.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;