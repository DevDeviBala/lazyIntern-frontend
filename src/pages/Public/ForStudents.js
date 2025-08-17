import React from "react";
import Header from "../../components/Header";
import HeroSection from "../../components/ForStudents/HeroSection";
import BenefitsSection from "../../components/ForStudents/BenefitsSection";
import FeatureCards from "../../components/ForStudents/FeatureCards";
import ProfileTips from "../../components/ForStudents/ProfileTips";
import WhyItWorks from "../../components/ForStudents/WhyItWorks";
import CtaSection from "../../components/ForStudents/CtaSection";

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <BenefitsSection />
          <FeatureCards />
        </div>
        <ProfileTips />
        <WhyItWorks />
        <CtaSection />
      </div>
    </div>
  );
};

export default ForStudents;