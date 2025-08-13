import React from "react";

const StatsCard = ({ icon, title, description, iconColor }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
      <div className="p-6">
        {React.cloneElement(icon, { className: `h-12 w-12 ${iconColor} mx-auto mb-4` })}
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;