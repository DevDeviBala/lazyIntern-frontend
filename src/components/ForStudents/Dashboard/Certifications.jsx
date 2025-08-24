import React, { useState } from 'react';
import { Award, Plus } from 'lucide-react';


const Certifications = () => {
  const handleAddCertification = () => {
    // Logic to add a new certification
    console.log('Add certification clicked');
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <Award className="h-5 w-5" />
            Certifications (0)
          </h3>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
            type="button"
            onClick={handleAddCertification}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Certification
          </button>
        </div>
      </div>
      <div className="p-6 pt-0 space-y-6">
        <div className="text-center py-8 text-gray-500">
          <Award className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No certifications added yet.</p>
          <p className="text-sm">Add your professional certifications to showcase your expertise.</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;