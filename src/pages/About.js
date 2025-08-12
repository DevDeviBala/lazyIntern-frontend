import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              lazyIntern
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how companies discover and hire student talent
            by focusing on skills and projects rather than grades and university
            rankings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                  className="lucide lucide-target h-6 w-6 text-blue-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                Our Mission
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600">
                To bridge the gap between talented students and forward-thinking
                companies by creating a platform where skills matter more than
                credentials.
              </p>
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
                  className="lucide lucide-zap h-6 w-6 text-teal-600"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                Our Vision
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600">
                A world where every talented student has the opportunity to
                showcase their abilities and land their dream internship,
                regardless of their academic background.
              </p>
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
                  className="lucide lucide-users h-6 w-6 text-purple-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Our Impact
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-600">
                Connecting talented students with companies that value practical
                skills and real-world project experience over traditional
                metrics.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why We Started lazyIntern
          </h2>
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              Too many brilliant students with incredible coding skills and
              innovative projects were being overlooked simply because they
              didn't attend top-tier universities or maintain perfect GPAs.
            </p>
            <p>
              Meanwhile, companies were struggling to find genuinely talented
              developers who could contribute from day one. The traditional
              hiring process was failing both sides.
            </p>
            <p>
              lazyIntern was born from the belief that{" "}
              <strong>
                what you can build matters more than where you studied
              </strong>
              . We created a platform where students can showcase their real
              projects and companies can discover talent based on actual skills.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Join the Skill-Based Hiring Revolution
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you're a student ready to showcase your projects or a
            company looking for real talent, lazyIntern is your platform.
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-blue-600 hover:bg-gray-100">
            Get Started Today
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

export default About;
