import React from "react";
import { Code, Users, TrendingUp, CircleCheckBig  } from "lucide-react";

const WhyChooseUs = () => {
  return (
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
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
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
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faster Hiring
              </h3>
              <p className="text-gray-600">
                Skip lengthy screenings, see skills directly
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
            <div className="p-6">
              <CircleCheckBig  className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Focus
              </h3>
              <p className="text-gray-600">
                Better matches through project review
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;