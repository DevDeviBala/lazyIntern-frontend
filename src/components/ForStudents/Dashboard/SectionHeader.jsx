import React, { useState } from 'react';
import { Plus } from 'lucide-react';


const SectionHeader = ({ title, icon: Icon, buttonText, onButtonClick }) => (
  <div className="flex flex-col space-y-1.5 p-6">
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5" />}
        {title}
      </h3>
      {buttonText && (
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
          type="button"
          onClick={onButtonClick}
        >
          <Plus className="h-4 w-4 mr-2" />
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

export default SectionHeader;