import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const access = localStorage.getItem("access");
  const userRole = localStorage.getItem("role");
  // console.log("User access", access)
  // console.log("User role", userRole)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Optional: Redirect to home page after logout
    window.location.href = "/";
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a className="flex items-center space-x-2" href="/">
            <div className="w-8 h-8 bg-white rounded-lg flex flex-col items-center justify-center relative overflow-hidden border border-gray-200 p-1">
              <div className="w-4 h-3 bg-blue-600 mb-1"></div>
              <div className="relative">
                <div className="w-1 h-4 bg-black"></div>
                <div className="w-4 h-1 bg-black absolute bottom-0 left-0"></div>
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-blue-600 font-fredoka">lazy</span>
              <span className="text-teal-600">Intern</span>
            </span>
          </a>

          <div className="hidden md:flex items-center">
            {/* Show these links only when NOT logged in */}
            {!(access && userRole) ? (
              <div className="flex items-center space-x-8">
                <a
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/how-it-works"
                >
                  How it Works
                </a>
                <a
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/for-students"
                >
                  For Students
                </a>
                <a
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/for-companies"
                >
                  For Companies
                </a>
                <a
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/about"
                >
                  About
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium hover:bg-primary/90 h-10 px-4 py-2 bg-[#0f172a] text-[#f8fafc]"
                  href="/auth"
                >
                  Get Started
                </a>
              </div>
            ) : (
              /* Show these buttons only when logged in */
              <div className="flex items-center space-x-4">
                <button
                  className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              type="button"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            isAuthenticated={!!userRole}
            onLogout={handleLogout}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;