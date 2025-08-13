import { Building, TrendingUp, Users } from 'lucide-react';
import CompanyTypeCard from "./CompanyTypeCard";

const PerfectForSection = () => {
  const companyTypes = [
    {
      icon: <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "Startups",
      description:
        "Find versatile engineers who can wear multiple hats and contribute to your product from day one.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />,
      title: "Scale-ups",
      description:
        "Scale your engineering team with talented interns who can grow into full-time contributors.",
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />,
      title: "Enterprises",
      description:
        "Build your future talent pipeline with skilled students who understand modern engineering practices.",
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Perfect for All Company Sizes
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {companyTypes.map((type, index) => (
          <CompanyTypeCard key={index} {...type} />
        ))}
      </div>
    </div>
  );
};

export default PerfectForSection;