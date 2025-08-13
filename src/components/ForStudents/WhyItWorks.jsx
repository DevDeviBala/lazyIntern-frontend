import React from "react";
import { Code, Target } from "lucide-react";

const WhyItWorks = () => {
  const reasons = [
    {
      icon: (
        <Code className="h-6 w-6 text-white" />
      ),
      bgColor: "bg-blue-600",
      gradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      title: "Show, Don't Tell",
      subtitle: "Demonstrate your abilities",
      quote: "Your projects speak louder than your grades. Companies can see exactly what you're capable of building and how you approach problem-solving through your actual work."
    },
    {
      icon: (
        <Target className="h-6 w-6 text-white" />
      ),
      bgColor: "bg-teal-600",
      gradient: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      title: "Level Playing Field",
      subtitle: "Equal opportunity for all",
      quote: "Whether you're from a top university or teaching yourself, your skills and projects matter most. Great talent comes from everywhere, and we help companies find it."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Why Project-Based Hiring Works
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className={`rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-br ${reason.gradient} ${reason.borderColor}`}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${reason.bgColor} rounded-full flex items-center justify-center`}>
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{reason.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyItWorks;