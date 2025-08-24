import { useState } from 'react'


const StatsCard = ({ title, value, description, icon: Icon, gradient }) => (
  <div className={`rounded-lg border shadow-sm bg-gradient-to-r ${gradient} text-white p-6`}>
    <div className="flex flex-row items-center justify-between pb-2">
      <h3 className="tracking-tight text-sm font-medium opacity-90">{title}</h3>
      <Icon className="h-4 w-4 opacity-90" />
    </div>
    <div className="pt-0">
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs opacity-90">{description}</p>
    </div>
  </div>
);

export default StatsCard;