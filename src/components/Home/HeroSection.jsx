import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Showcase Your Talent,
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            {" "}
            Get Hired
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We hire based on <strong>what you can build</strong>, not just
          your GPA or university. Upload your projects, demonstrate your
          skills, and get discovered by companies looking for
          <span className="text-blue-600 font-semibold"> real talent</span>.
          Your code speaks louder than your grades.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 text-[#fff]">
            Start Building Your Portfolio
            <ArrowRight className="ml-2 h-4 w-4 text-[#fff]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;