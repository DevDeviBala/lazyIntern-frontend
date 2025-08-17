import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/slices/authSlice";
import RoleDropdown from "./RoleDropdown";
import { GraduationCap, Briefcase } from "lucide-react";

const SignupForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const [form, setForm] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        role: "intern",
        agreedToTerms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.agreedToTerms) return;

        dispatch(registerUser({
            username: form.username,
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role
        }));
    };


    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <RoleDropdown
                label="I am a..."
                selectedRole={form.role}
                onSelectRole={(role) => setForm({ ...form, role })}
                options={[
                    { value: "intern", label: "Student", icon: GraduationCap },
                    { value: "company", label: "Recruiter", icon: Briefcase }
                ]}
            />

            <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                </label>
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
            </div>

            <div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    User Name
                </label>
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
            </div>

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

            <div className="flex items-start space-x-2">
                <input
                    type="checkbox"
                    id="terms"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    checked={form.agreedToTerms}
                    onChange={(e) => setForm({ ...form, agreedToTerms: e.target.checked })}
                />
                <div className="grid gap-1.5 leading-none">
                    <label htmlFor="terms" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        I agree to the <button type="button" className="text-blue-600 hover:text-blue-700 underline">Terms and Conditions</button>
                    </label>
                </div>
            </div>

            {/* <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-teal-500"
        type="submit"
        disabled={!form.agreedToTerms}
      >
        Sign Up as {form.role === "intern" ? "Student" : "Recruiter"}
      </button> */}
            {error && <p className="text-red-500 text-sm">{JSON.stringify(error)}</p>}
            <button type="submit" disabled={loading || !form.agreedToTerms}>
                {loading ? "Signing up..." : `Sign Up as ${form.role === "intern" ? "Student" : "Recruiter"}`}
            </button>
        </form>
    );
};

export default SignupForm;