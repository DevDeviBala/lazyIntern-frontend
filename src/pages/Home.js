import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />

      <div className="relative">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Showcase Your Talent,
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Get Hired
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We hire based on <strong>what you can build</strong>, not just
              your GPA or university. Upload your projects, demonstrate your
              skills, and get discovered by companies looking for
              <span className="text-blue-600 font-semibold"> real talent</span>.
              Your code speaks louder than your grades.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8">
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
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How lazyIntern Works
            </h2>
            <p className="text-xl text-gray-600">
              Where talent meets opportunity - no bias, just skills
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
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
                    className="lucide lucide-upload h-6 w-6 text-blue-600 mr-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Upload Your Projects &amp; Skills
                  </h3>
                </div>
                <p className="text-gray-600">
                  Show what you've built! Upload your coding projects, describe
                  your technical skills, and let your work demonstrate your
                  capabilities. No need for perfect grades - we care about
                  talent.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
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
                    className="lucide lucide-search h-6 w-6 text-teal-600 mr-2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Companies Discover Real Talent
                  </h3>
                </div>
                <p className="text-gray-600">
                  Smart recruiters search by actual skills and project
                  technologies, not just university rankings. They find students
                  who can deliver results, regardless of academic background.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
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
                    className="lucide lucide-star h-6 w-6 text-purple-600 mr-2"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Get Hired for Your Skills
                  </h3>
                </div>
                <p className="text-gray-600">
                  Land internships and jobs based on what you can actually do.
                  Companies connect directly with talented developers who have
                  proven their abilities through real projects.
                </p>
              </div>
            </div>

            <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-purple-600 -z-10"></div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose lazyIntern?
              </h2>
              <p className="text-xl text-gray-600">
                The future of student hiring is skill-based, not grade-based
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Project-Based Hiring
                  </h3>
                  <p className="text-gray-600">
                    Review actual code and projects, not just grades
                  </p>
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
                    className="lucide lucide-users h-12 w-12 text-teal-600 mx-auto mb-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No University Bias
                  </h3>
                  <p className="text-gray-600">
                    Talent is everywhere, we help you find it
                  </p>
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
                    className="lucide lucide-briefcase h-12 w-12 text-purple-600 mx-auto mb-4"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 3v4H8V3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Direct Company Connect
                  </h3>
                  <p className="text-gray-600">
                    Skip recruiters, talk straight to hiring managers
                  </p>
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
                    className="lucide lucide-star h-12 w-12 text-yellow-400 mx-auto mb-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Verified Talents
                  </h3>
                  <p className="text-gray-600">
                    We verify skills through projects and tests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4 py-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-gray-600">
              Everything you need to know about skill-based student hiring
            </p>
          </div>
          <div class="max-w-3xl mx-auto space-y-6">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  How is lazyIntern different from traditional job boards?
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p class="text-gray-600">
                  Unlike traditional job boards that focus on resumes and GPAs,
                  lazyIntern showcases actual student projects and coding
                  skills. Companies can see what candidates have built before
                  even scheduling an interview.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  Do students need high GPAs to be successful on lazyIntern?
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p class="text-gray-600">
                  Not at all! We believe coding ability and project experience
                  matter more than grades. Students with impressive portfolios
                  of real projects can showcase their talents regardless of
                  their academic performance.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  What types of companies use lazyIntern?
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p class="text-gray-600">
                  We work with startups, scale-ups, and enterprises across all
                  industries. From fintech startups to established tech
                  companies, any organization looking for skilled developers can
                  benefit from our project-based hiring approach.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tight">
                  How do you ensure the quality of student profiles?
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p class="text-gray-600">
                  We encourage students to showcase their best work with
                  detailed project descriptions, live demos, and GitHub
                  repositories. This allows companies to thoroughly evaluate
                  technical skills and coding quality before making contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
