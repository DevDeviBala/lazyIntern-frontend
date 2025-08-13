import React from "react";
import { Upload, Search, Star } from "lucide-react";

const HowItWorks = () => {
  return (
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
              <Upload className="h-6 w-6 text-blue-600 mr-2" />
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
              <Search className="h-6 w-6 text-teal-600 mr-2" />
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
              <Star className="h-6 w-6 text-purple-600 mr-2" />
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
  );
}

export default HowItWorks;