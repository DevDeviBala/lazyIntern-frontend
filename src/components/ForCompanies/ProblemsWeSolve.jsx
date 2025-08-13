import { CircleCheckBig } from 'lucide-react';

const ProblemsWeSolve = () => {
  const traditionalProblems = [
    "Hundreds of identical resumes with no real differentiation",
    "Students with high GPAs but no practical hands-on experience",
    "Time-consuming technical screening processes",
    "Missing out on talented engineers from non-target schools"
  ];

  const solutions = [
    "Review actual projects and work before interviewing",
    "Find students with proven hands-on technical skills",
    "Skip initial technical screens - see their work directly",
    "Discover hidden gems from any university or background"
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        The Problems We Solve
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-red-600">
            Traditional Hiring Problems:
          </h3>
          <div className="space-y-4">
            {traditionalProblems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-600">{problem}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-600">
            lazyIntern Solutions:
          </h3>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleCheckBig className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-gray-600">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsWeSolve;