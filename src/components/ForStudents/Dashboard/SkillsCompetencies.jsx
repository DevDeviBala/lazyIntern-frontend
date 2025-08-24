import { useState } from 'react'
import { Code, ChevronDown, X } from 'lucide-react';
import SectionHeader from './SectionHeader'


const SkillsCompetencies = ({ formData, handleInputChange }) => {
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <SectionHeader title="Skills & Competencies" icon={Code} />
      <div className="p-6 pt-0 space-y-4">
        <div className="relative">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Professional Skills</label>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground rounded-md text-xs h-6 px-2"
                type="button"
              >
                Clear all
              </button>
            </div>
            <div className="relative cursor-pointer" onClick={() => setShowSkillsDropdown(!showSkillsDropdown)}>
              <div className="flex items-center justify-between min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <span className="text-muted-foreground">2 selected</span>
                <ChevronDown className="h-4 w-4 transition-transform" />
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {formData.skills.map(skill => (
                <div
                  key={skill}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleInputChange('skills', formData.skills.filter(s => s !== skill))}
                >
                  {skill}
                  <X className="h-3 w-3 ml-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCompetencies;