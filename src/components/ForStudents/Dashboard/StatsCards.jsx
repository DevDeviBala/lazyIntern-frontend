import { useState } from 'react'
import { Code, Eye, Trophy } from 'lucide-react';
import StatsCard from './StatsCard'
import ProfileCompletion from './ProfileCompletion'


const StatsCards = () => (
  <div className="grid md:grid-cols-4 gap-6 mb-8">
    <StatsCard 
      title="Profile Views" 
      value={0} 
      description="Total views" 
      icon={Eye} 
      gradient="from-blue-500 to-blue-600" 
    />
    <StatsCard 
      title="Skills Added" 
      value={0} 
      description="Keep adding more!" 
      icon={Code} 
      gradient="from-teal-500 to-teal-600" 
    />
    <StatsCard 
      title="Projects" 
      value={0} 
      description="Showcase your work" 
      icon={Trophy} 
      gradient="from-purple-500 to-purple-600" 
    />
    <div className="md:col-span-1">
      <ProfileCompletion />
    </div>
  </div>
);

export default StatsCards;