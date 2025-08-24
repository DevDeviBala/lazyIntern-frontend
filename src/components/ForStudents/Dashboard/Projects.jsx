import React, { useState } from 'react';
import { Trophy, Lightbulb, Plus } from 'lucide-react';


const Projects = () => {
  const handleAddProject = () => {
    // Logic to add a new project
    console.log('Add project clicked');
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Projects
          </h3>
          <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
            Showcase your technical skills - recruiters can filter by project technologies
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          type="button"
          onClick={handleAddProject}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </button>
      </div>
      <div className="p-6 pt-0 space-y-6">
        <div className="text-center py-8 text-gray-500">
          <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="mb-2">No projects added yet. Click "Add Project" to showcase your work!</p>
          <p className="text-sm text-purple-600 flex items-center justify-center gap-1">
            <Lightbulb className="h-4 w-4" />
            Projects with technologies help recruiters discover your skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;