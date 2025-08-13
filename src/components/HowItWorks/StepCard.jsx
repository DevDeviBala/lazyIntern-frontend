import React from "react";

const StepCard = ({ 
  stepNumber, 
  icon, 
  title, 
  items, 
  color = "blue" 
}) => {
  const colorClasses = {
    blue: "bg-blue-600 text-blue-600",
    teal: "bg-teal-600 text-teal-600",
    purple: "bg-purple-600 text-purple-600"
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className={`absolute -top-4 left-6 w-8 h-8 ${colorClasses[color]} rounded-full flex items-center justify-center text-white font-bold`}>
        {stepNumber}
      </div>
      <div className="flex flex-col space-y-1.5 p-6 pt-8">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          {icon}
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <ul className="space-y-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
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
                className="lucide lucide-circle-check-big h-4 w-4 text-green-600"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StepCard;