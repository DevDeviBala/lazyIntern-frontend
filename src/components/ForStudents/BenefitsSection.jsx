import React from "react";
import { CircleCheckBig } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Skills Over Grades",
      description: "Get recognized for what you can build, not just your academic performance."
    },
    {
      title: "Direct Company Access",
      description: "Connect directly with hiring managers who value practical experience."
    },
    {
      title: "Project-Based Matching",
      description: "Get matched with roles that align with your project experience and interests."
    },
    {
      title: "No University Bias",
      description: "Your talent matters more than your university ranking or location."
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Why Students Choose lazyIntern
      </h2>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <CircleCheckBig className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsSection;