import { Search, Target, Zap } from 'lucide-react';
import FeatureCard from "./FeatureCard";

const HiringFeatures = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "Smart Search & Filters",
      items: [
        "Search by technical skills and tools",
        "Filter by project types and complexity",
        "Location and availability preferences",
        "Engineering discipline matching",
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-teal-600" />,
      title: "Project Portfolio Review",
      items: [
        "View live project demos",
        "Browse project repositories",
        "See project descriptions and impact",
        "Evaluate technical quality and approach",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Direct Connection",
      items: [
        "Contact students directly",
        "Skip traditional application processes",
        "Faster hiring decisions",
        "Build relationships with top talent",
      ],
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Powerful Hiring Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default HiringFeatures;