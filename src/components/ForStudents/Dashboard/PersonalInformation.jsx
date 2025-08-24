import React, { useState } from 'react';
import SectionHeader from './SectionHeader'
import SelectField from './FormComponents/SelectField'
import InputField from './FormComponents/InputField'
import TextAreaField from './FormComponents/TextAreaField'


const PersonalInformation = ({ formData, handleInputChange }) => {
  const graduationYears = Array.from({ length: 16 }, (_, i) => ({
    value: 2015 + i,
    label: 2015 + i
  }));

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <SectionHeader title="Personal Information" />
      <div className="p-6 pt-0 space-y-4">
        <InputField
          label="Full Name"
          id="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
        />
        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          description="This email will be used by recruiters to contact you directly"
        />
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            label="University"
            id="university"
            placeholder="Enter your university name"
            value={formData.university}
            onChange={(e) => handleInputChange('university', e.target.value)}
            required
          />
          <InputField
            label="Major/Field of Study"
            id="major"
            placeholder="e.g., Computer Science, Mechanical Engineering"
            value={formData.major}
            onChange={(e) => handleInputChange('major', e.target.value)}
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <SelectField
            label="Graduation Year"
            id="graduation_year"
            value={formData.graduationYear}
            onChange={(e) => handleInputChange('graduationYear', e.target.value)}
            options={graduationYears}
            placeholder="Select graduation year"
          />
          <InputField
            label="Current Location"
            id="location"
            placeholder="City, State/Country"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
        <TextAreaField
          label="Bio/About Me"
          id="bio"
          placeholder="Tell recruiters about yourself, your interests, and career goals..."
          value={formData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          rows={4}
        />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Links</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              label="GitHub URL"
              id="github_url"
              placeholder="https://github.com/yourusername"
              value={formData.githubUrl}
              onChange={(e) => handleInputChange('githubUrl', e.target.value)}
            />
            <InputField
              label="LinkedIn URL"
              id="linkedin_url"
              placeholder="https://linkedin.com/in/yourusername"
              value={formData.linkedinUrl}
              onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;