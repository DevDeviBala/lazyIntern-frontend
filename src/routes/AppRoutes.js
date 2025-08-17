import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "../pages/Auth";
import Home from "../pages/Public/Home";
import ForCompanies from "../pages/Public/ForCompanies";
import ForStudents from "../pages/Public/ForStudents";
import HowItWorks from "../pages/Public/HowItWorks";
import About from "../pages/Public/About";
import InternDashboard from "../pages/Intern/Dashboard";
import CompanyDashboard from "../pages/Company/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/for-students" element={<ForStudents />} />
      <Route path="/for-companies" element={<ForCompanies />} />
      <Route path="/about" element={<About />} />

      {/* Protected Routes */}
      <Route
        path="/intern-dashboard"
        element={
          <ProtectedRoute allowedRoles={["intern"]}>
            <InternDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company-dashboard"
        element={
          <ProtectedRoute allowedRoles={["company"]}>
            <CompanyDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all → redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
