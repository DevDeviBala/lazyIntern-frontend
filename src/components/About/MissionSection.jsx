import { Target, Zap, Users } from 'lucide-react';
import MissionCard from "./MissionCard";

const MissionSection = () => {
  const missions = [
    {
      icon: <Target className="text-blue-600" />,
      title: "Our Mission",
      description:
        "To bridge the gap between talented students and forward-thinking companies by creating a platform where skills matter more than credentials.",
      iconColor: "text-blue-600",
    },
    {
      icon: <Zap className="text-teal-600" />,
      title: "Our Vision",
      description:
        "A world where every talented student has the opportunity to showcase their abilities and land their dream internship, regardless of their academic background.",
      iconColor: "text-teal-600",
    },
    {
      icon: <Users className="text-purple-600" />,
      title: "Our Impact",
      description:
        "Connecting talented students with companies that value practical skills and real-world project experience over traditional metrics.",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {missions.map((mission, index) => (
        <MissionCard key={index} {...mission} />
      ))}
    </div>
  );
};

export default MissionSection;