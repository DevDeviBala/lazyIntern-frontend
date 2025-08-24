import React, { useState } from 'react';
import { DollarSign, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader'
import SelectField from './FormComponents/SelectField'
import ToggleSwitch from './FormComponents/ToggleSwitch'


const InternshipPreferences = ({ formData, handleInputChange }) => {
  const internshipTypeOptions = [
    { value: 'paid', label: 'Paid Internships Only' },
    { value: 'unpaid', label: 'Unpaid Internships Only' },
    { value: 'both', label: 'Both Paid & Unpaid' }
  ];

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <SectionHeader title="Internship Preferences" icon={DollarSign} />
      <div className="p-6 pt-0 space-y-6">
        <SelectField
          label="Internship Type Preference"
          id="internship_type_preference"
          value={formData.internshipType}
          onChange={(e) => handleInputChange('internshipType', e.target.value)}
          options={internshipTypeOptions}
          placeholder="Select internship type"
        />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Location Preferences
          </h3>
          <ToggleSwitch
            label="Open to Relocate"
            id="open_to_relocate"
            checked={formData.openToRelocate}
            onChange={(value) => handleInputChange('openToRelocate', value)}
            description="I'm willing to relocate for the right internship opportunity"
          />
        </div>
        <p className="text-sm text-gray-600">
          Help recruiters understand your internship and location preferences.
        </p>
      </div>
    </div>
  );
};

export default InternshipPreferences;