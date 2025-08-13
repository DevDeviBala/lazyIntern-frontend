import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Hire Talented Engineers Based on
        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          {" "}
          Real Skills
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Stop screening resumes. Start reviewing actual projects. Find
        engineering students who can contribute from day one with our
        project-based talent discovery platform.
      </p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-8 text-[#fff]">
        Find Engineering Talent
        <ArrowRight className="ml-2 h-5 w-5 text-[#fff]" />
      </button>
    </div>
  );
};

export default HeroSection;