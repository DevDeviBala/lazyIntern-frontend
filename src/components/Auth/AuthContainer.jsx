import { useState } from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthContainer = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
        <AuthHeader />
        
        <div className="p-6 pt-0">
          <div dir="ltr" className="w-full">
            <div role="tablist" className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2">
              <button 
                type="button"
                role="tab"
                onClick={() => setActiveTab("login")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "login" ? "bg-background text-foreground shadow-sm" : ""}`}
              >
                Login
              </button>
              <button 
                type="button"
                role="tab"
                onClick={() => setActiveTab("signup")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeTab === "signup" ? "bg-background text-foreground shadow-sm" : ""}`}
              >
                Sign Up
              </button>
            </div>
            
            <div 
              role="tabpanel"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ display: activeTab === "login" ? "block" : "none" }}
            >
              <LoginForm />
            </div>
            
            <div 
              role="tabpanel"
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ display: activeTab === "signup" ? "block" : "none" }}
            >
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;