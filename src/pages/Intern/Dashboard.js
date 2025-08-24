import React, { useState } from "react";
import Header from "../../components/Header";

//Import dashboard componets
import DashboardHeader from "../../components/ForStudents/Dashboard/Header";
import StatsCards from "../../components/ForStudents/Dashboard/StatsCards";
import PersonalInformation from "../../components/ForStudents/Dashboard/PersonalInformation";
import InternshipPreferences from "../../components/ForStudents/Dashboard/InternshipPreferences";
import SkillsCompetencies from "../../components/ForStudents/Dashboard/SkillsCompetencies";
import Projects from "../../components/ForStudents/Dashboard/Projects";
import Certifications from "../../components/ForStudents/Dashboard/Certifications";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    major: "",
    graduationYear: "",
    location: "",
    bio: "",
    githubUrl: "",
    linkedinUrl: "",
    internshipType: "",
    openToRelocate: false,
    skills: [],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        <StatsCards />

        <form className="space-y-8" onSubmit={handleSubmit}>
          <PersonalInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <InternshipPreferences
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <SkillsCompetencies
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <Projects />
          <Certifications />

          <div className="flex justify-end">
            <button
              className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8"
              type="submit"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
