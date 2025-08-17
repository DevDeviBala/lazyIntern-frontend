import { ArrowLeft } from "lucide-react";

const AuthHeader = () => {
  return (
    <div className="flex flex-col space-y-1.5 p-6 text-center">
      <div className="flex items-center justify-between mb-4">
        <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>
      </div>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-white rounded-lg flex flex-col items-center justify-center relative overflow-hidden border border-gray-200 p-1">
          <div className="w-4 h-3 bg-blue-600 mb-1"></div>
          <div className="relative">
            <div className="w-1 h-4 bg-black"></div>
            <div className="w-4 h-1 bg-black absolute bottom-0 left-0"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold">
          <span className="font-fredoka bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">lazy</span>
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Intern</span>
        </h1>
      </div>
    </div>
  );
};

export default AuthHeader;