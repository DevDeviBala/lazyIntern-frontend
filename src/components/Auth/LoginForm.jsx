import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import RoleDropdown from "./RoleDropdown";
import { GraduationCap, Briefcase } from "lucide-react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "intern"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            loginUser({
                email: form.email,
                password: form.password,
                // role: form.role,
            })
        );
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

            <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                </label>
                <input
                    type="password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error.detail}</p>}

            <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-teal-500"
                type="submit"
                disabled={loading}
            >
                {loading ? "Loading..." : `Login as ${form.role === "intern" ? "Student" : "Recruiter"}`}
            </button>
        </form>
    );
};

export default LoginForm;