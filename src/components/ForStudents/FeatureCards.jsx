import React from "react";
import { Code, Briefcase, Target, Zap } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: (
        <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
      ),
      title: "Project Showcase",
      description: "Display Your Work"
    },
    {
      icon: (
        <Briefcase className="h-12 w-12 text-teal-600 mx-auto mb-4" />
      ),
      title: "Direct Matching",
      description: "Connect with Companies"
    },
    {
      icon: (
        <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
      ),
      title: "Skill-Based",
      description: "Beyond Academics"
    },
    {
      icon: (
        <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
      ),
      title: "Fast Track",
      description: "Quick Connections"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
          <div className="p-6">
            {feature.icon}
            <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;