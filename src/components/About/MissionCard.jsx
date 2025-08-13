import React from "react";

const MissionCard = ({ icon, title, description, iconColor }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
          {React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MissionCard;