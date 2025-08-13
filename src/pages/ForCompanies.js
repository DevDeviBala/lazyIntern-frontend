import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/ForCompanies/HeroSection";
import ProblemsWeSolve from "../components/ForCompanies/ProblemsWeSolve";
import HiringFeatures from "../components/ForCompanies/HiringFeatures";
import StatsSection from "../components/ForCompanies/StatsSection";
import PerfectForSection from "../components/ForCompanies/PerfectForSection";
import CtaSection from "../components/ForCompanies/CtaSection";

const ForCompanies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <ProblemsWeSolve />
        <HiringFeatures />
        <StatsSection />
        <PerfectForSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default ForCompanies;