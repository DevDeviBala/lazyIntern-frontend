import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with fade-in animation */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu container with slide-in animation */}
      <div
        className="fixed inset-y-0 right-0 z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out transform w-[300px]"
      >
        <div className="flex flex-col bg-[#fff] h-[100vh]">
          {/* Close button row */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 pb-6 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                href="/how-it-works"
                onClick={onClose}
              >
                How it Works
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                href="/for-students"
                onClick={onClose}
              >
                For Students
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                href="/for-companies"
                onClick={onClose}
              >
                For Companies
              </a>
              <a
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                href="/about"
                onClick={onClose}
              >
                About
              </a>
            </div>

            {/* Call-to-action button */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#020817] text-[#fff]"
                onClick={onClose}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;