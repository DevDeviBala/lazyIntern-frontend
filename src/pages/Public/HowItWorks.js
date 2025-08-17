import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/HowItWorks/HeroSection";
import ProcessSection from "../../components/HowItWorks/ProcessSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <HeroSection />
      <ProcessSection />
    </div>
  );
};

export default HowItWorks;