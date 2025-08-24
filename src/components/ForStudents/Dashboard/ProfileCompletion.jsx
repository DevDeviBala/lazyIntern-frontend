import React, { useState } from 'react';
import { CircleAlert } from 'lucide-react';


const ProfileCompletion = () => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div className="flex flex-col space-y-1.5 p-6">
      <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
        <CircleAlert className="h-5 w-5 text-yellow-600" />
        Profile Completion
      </h3>
    </div>
    <div className="p-6 pt-0 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Progress</span>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80">
            0%
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-full bg-secondary h-2">
          <div className="h-full w-full flex-1 bg-primary transition-all" style={{ transform: 'translateX(-55%)' }}></div>
        </div>
      </div>
      {/* <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Suggestions</h4>
        <ul className="space-y-1">
          <li className="text-sm text-gray-600 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Add phone number
          </li>
          <li className="text-sm text-gray-600 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Add location
          </li>
          <li className="text-sm text-gray-600 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Add projects
          </li>
        </ul>
      </div> */}
    </div>
  </div>
);

export default ProfileCompletion;