import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import HowItWorks from "../components/Home/HowItWorks";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FAQSection from "../components/Home/FAQSection";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="relative">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <FAQSection />
      </div>
    </div>
  );
}

export default Home;