import React from "react";
import { Code, GraduationCap, Briefcase } from "lucide-react";

const ProfileTips = () => {
  const tips = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Coding Projects",
      items: [
        "Web applications and mobile apps",
        "Open source contributions",
        "Personal coding challenges",
        "Hackathon projects",
        "Course assignments (impressive ones)"
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-teal-600" />,
      title: "Technical Skills",
      items: [
        "Programming languages (Python, Java, etc.)",
        "Frameworks (React, Django, etc.)",
        "Databases (SQL, MongoDB, etc.)",
        "Tools (Git, Docker, etc.)",
        "Cloud platforms (AWS, Azure, etc.)"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Professional Links",
      items: [
        "GitHub profile with active repositories",
        "LinkedIn professional profile",
        "Personal portfolio website",
        "Live project demos",
        "Technical blog or articles"
      ]
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        What Makes a Great Student Profile
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                {tip.icon}
                {tip.title}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <p className="text-gray-600 mb-4">
                {tip.title === "Coding Projects"
                  ? "Showcase your best work with detailed project descriptions:"
                  : tip.title === "Technical Skills"
                    ? "List your programming languages and technologies:"
                    : "Connect your online presence and portfolio:"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {tip.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileTips;