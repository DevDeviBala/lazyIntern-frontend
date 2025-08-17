import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/About/HeroSection";
import MissionSection from "../../components/About/MissionSection";
import WhyWeStarted from "../../components/About/WhyWeStarted";
import CtaSection from "../../components/About/CtaSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <MissionSection />
        <WhyWeStarted />
        <CtaSection />
      </div>
    </div>
  );
};

export default About;