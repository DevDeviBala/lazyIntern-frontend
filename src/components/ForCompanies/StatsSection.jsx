import { TrendingUp, Users, Building, CircleCheckBig } from 'lucide-react';
import StatsCard from "./StatsCard";

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="text-blue-600" />,
      title: "Efficient Process",
      description: "Streamlined Hiring",
      iconColor: "text-blue-600",
    },
    {
      icon: <Users className="text-teal-600" />,
      title: "Skilled Talent",
      description: "Quality Engineers",
      iconColor: "text-teal-600",
    },
    {
      icon: <Building className="text-purple-600" />,
      title: "Growing Network",
      description: "Partner Companies",
      iconColor: "text-purple-600",
    },
    {
      icon: <CircleCheckBig className="text-green-600" />,
      title: "Quality Focus",
      description: "Better Matches",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;