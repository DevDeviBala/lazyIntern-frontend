import { useState } from "react";
import { ChevronDown } from "lucide-react";

const RoleDropdown = ({ label, selectedRole, onSelectRole, options }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const selectedOption = options.find(opt => opt.value === selectedRole);
  const Icon = selectedOption?.icon;

  return (
    <div className="relative">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <button 
        type="button" 
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {selectedOption?.label}
        </div>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {showDropdown && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">
          {options.map((option) => {
            const OptionIcon = option.icon;
            return (
              <div 
                key={option.value}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSelectRole(option.value);
                  setShowDropdown(false);
                }}
              >
                <OptionIcon className="h-4 w-4" />
                <span>{option.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoleDropdown;