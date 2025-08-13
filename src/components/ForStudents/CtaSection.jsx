import React from "react";
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
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
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}

export default CtaSection;