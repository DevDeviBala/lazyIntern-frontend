import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/slices/authSlice";
import RoleDropdown from "./RoleDropdown";
import { GraduationCap, Briefcase, Eye, EyeOff } from "lucide-react";

// Fix: Receive props properly with destructuring
const LoginForm = ({ onShowForgotPassword }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.auth);

    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "intern"
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            return;
        }

        dispatch(loginUser({
            email: form.email,
            password: form.password,
        })).then((result) => {
            console.log('Result', result)
            if (result.type === 'auth/loginUser/fulfilled') {
                // Fix: Get role from localStorage instead of Redux state
                const userRole = localStorage.getItem("role");
                const redirectPath = userRole === 'company' ? '/company-dashboard' : '/intern-dashboard';
                navigate(redirectPath);
            }
        });
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <RoleDropdown
                label="Login as"
                selectedRole={form.role}
                onSelectRole={(role) => setForm({ ...form, role })}
                options={[
                    { value: "intern", label: "Student Login", icon: GraduationCap },
                    { value: "company", label: "Recruiter Login", icon: Briefcase }
                ]}
            />

            <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                </label>
                <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
            </div>

            <div className="relative">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-10"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                    type="button"
                    className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {error && (
                <div className="p-3 text-red-700 bg-red-100 rounded-md">
                    <p className="text-sm font-medium">{error.detail || "Login failed. Please try again."}</p>
                </div>
            )}

            <div className="flex items-center justify-between text-sm">
                <button
                    type="button"
                    onClick={onShowForgotPassword} // This should now work
                    className="text-blue-600 hover:text-blue-800"
                >
                    Forgot password?
                </button>
            </div>

            <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading || !form.email || !form.password}
            >
                {loading ? (
                    <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                    </div>
                ) : (
                    `Login as ${form.role === "intern" ? "Student" : "Recruiter"}`
                )}
            </button>

            <div className="text-center text-sm mt-4">
                <p>
                    Don't have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                        Sign up
                    </a>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;