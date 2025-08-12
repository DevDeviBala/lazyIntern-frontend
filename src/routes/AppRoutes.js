import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import ForCompanies from "../pages/ForCompanies";
import ForStudents from "../pages/ForStudents";
import HowItWorks from "../pages/HowItWorks";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/for-students" element={<ForStudents />} />
      <Route path="/for-companies" element={<ForCompanies />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
