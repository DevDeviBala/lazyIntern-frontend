import React from "react";
import StepCard from "./StepCard";
import { 
  Users, 
  Upload, 
  Code, 
  Star, 
  Search,
  Briefcase 
} from "lucide-react";


const ProcessSection = () => {
  const studentSteps = [
    {
      stepNumber: 1,
      icon: <Upload className="h-6 w-6 text-blue-600" />,
      title: "Create Your Profile",
      color: "blue",
      items: [
        "Upload your coding projects",
        "List your technical skills",
        "Add project descriptions and demos",
        "Include GitHub and portfolio links"
      ]
    },
    {
      stepNumber: 2,
      icon: <Code className="h-6 w-6 text-teal-600" />,
      title: "Showcase Your Work",
      color: "teal",
      items: [
        "Demonstrate real coding abilities",
        "Show project impact and results",
        "Highlight problem-solving skills",
        "Display technology expertise"
      ]
    },
    {
      stepNumber: 3,
      icon: <Star className="h-6 w-6 text-purple-600" />,
      title: "Get Discovered",
      color: "purple",
      items: [
        "Companies find you by skills",
        "Get matched with relevant opportunities",
        "Land interviews based on projects",
        "Start your dream career"
      ]
    }
  ];

  const companySteps = [
    {
      stepNumber: 1,
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "Search by Skills",
      color: "blue",
      items: [
        "Filter by programming languages",
        "Search by project types",
        "Find specific technologies",
        "Location and availability filters"
      ]
    },
    {
      stepNumber: 2,
      icon: <Code className="h-6 w-6 text-teal-600" />,
      title: "Review Projects",
      color: "teal",
      items: [
        "See actual code and projects",
        "Evaluate problem-solving approach",
        "Check project complexity",
        "Assess technical depth"
      ]
    },
    {
      stepNumber: 3,
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Hire Top Talent",
      color: "purple",
      items: [
        "Contact students directly",
        "Skip traditional screening",
        "Focus on proven abilities",
        "Build amazing teams"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-blue-600" />
            For Students
          </h2>
          <p className="text-lg text-gray-600">
            Turn your projects into career opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studentSteps.map((step, index) => (
            <StepCard key={`student-${index}`} {...step} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Briefcase className="h-8 w-8 text-teal-600" />
            For Companies
          </h2>
          <p className="text-lg text-gray-600">
            Find talented developers who can deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {companySteps.map((step, index) => (
            <StepCard key={`company-${index}`} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;