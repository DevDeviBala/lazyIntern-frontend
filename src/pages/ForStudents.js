import React from "react";
import Header from "../components/Header";

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Land Your Dream Internship with
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Your Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Skip the GPA competition. Show companies what you can actually build
            and get hired for your coding skills, not your grades.
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8">
            Start Building Your Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Students Choose lazyIntern
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-6 w-6 text-green-600 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Skills Over Grades
                  </h3>
                  <p className="text-gray-600">
                    Get recognized for what you can build, not just your
                    academic performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-6 w-6 text-green-600 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Direct Company Access
                  </h3>
                  <p className="text-gray-600">
                    Connect directly with hiring managers who value practical
                    experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-6 w-6 text-green-600 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Project-Based Matching
                  </h3>
                  <p className="text-gray-600">
                    Get matched with roles that align with your project
                    experience and interests.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-6 w-6 text-green-600 mt-0.5"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    No University Bias
                  </h3>
                  <p className="text-gray-600">
                    Your talent matters more than your university ranking or
                    location.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code h-12 w-12 text-blue-600 mx-auto mb-4"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="font-bold text-lg text-gray-900">
                  Project Showcase
                </h3>
                <p className="text-gray-600">Display Your Work</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase h-12 w-12 text-teal-600 mx-auto mb-4"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                <h3 className="font-bold text-lg text-gray-900">
                  Direct Matching
                </h3>
                <p className="text-gray-600">Connect with Companies</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target h-12 w-12 text-purple-600 mx-auto mb-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h3 className="font-bold text-lg text-gray-900">Skill-Based</h3>
                <p className="text-gray-600">Beyond Academics</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-12 w-12 text-yellow-600 mx-auto mb-4"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <h3 className="font-bold text-lg text-gray-900">Fast Track</h3>
                <p className="text-gray-600">Quick Connections</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes a Great Student Profile
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code h-6 w-6 text-blue-600"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Coding Projects
                </h3>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <p className="text-gray-600 mb-4">
                  Showcase your best work with detailed project descriptions:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web applications and mobile apps</li>
                  <li>• Open source contributions</li>
                  <li>• Personal coding challenges</li>
                  <li>• Hackathon projects</li>
                  <li>• Course assignments (impressive ones)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap h-6 w-6 text-teal-600"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  Technical Skills
                </h3>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <p className="text-gray-600 mb-4">
                  List your programming languages and technologies:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Programming languages (Python, Java, etc.)</li>
                  <li>• Frameworks (React, Django, etc.)</li>
                  <li>• Databases (SQL, MongoDB, etc.)</li>
                  <li>• Tools (Git, Docker, etc.)</li>
                  <li>• Cloud platforms (AWS, Azure, etc.)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase h-6 w-6 text-purple-600"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                  Professional Links
                </h3>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <p className="text-gray-600 mb-4">
                  Connect your online presence and portfolio:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• GitHub profile with active repositories</li>
                  <li>• LinkedIn professional profile</li>
                  <li>• Personal portfolio website</li>
                  <li>• Live project demos</li>
                  <li>• Technical blog or articles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Project-Based Hiring Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code h-6 w-6 text-white"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Show, Don't Tell
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Demonstrate your abilities
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Your projects speak louder than your grades. Companies can
                  see exactly what you're capable of building and how you
                  approach problem-solving through your actual work."
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target h-6 w-6 text-white"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Level Playing Field
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Equal opportunity for all
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Whether you're from a top university or teaching yourself,
                  your skills and projects matter most. Great talent comes from
                  everywhere, and we help companies find it."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Showcase Your Coding Skills?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Join talented students who are getting discovered through
            project-based hiring.
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-gray-100">
            Create Your Profile Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForStudents;
