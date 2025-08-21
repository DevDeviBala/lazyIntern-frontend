import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../store/slices/authSlice";
import { Eye, EyeOff } from "lucide-react";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [form, setForm] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }

    dispatch(resetPassword({ token, password: form.password })).then((result) => {
      if (result.type === 'auth/resetPassword/fulfilled') {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/auth"), 2000);
      }
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label className="text-sm font-medium leading-none">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pr-10"
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

        <div>
          <label className="text-sm font-medium leading-none">
            Confirm Password
          </label>
          <input
            type="password"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            required
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />
        </div>

        {error && (
          <div className="p-3 text-red-700 bg-red-100 rounded-md">
            <p className="text-sm font-medium">{error.detail || "Failed to reset password"}</p>
          </div>
        )}

        {message && (
          <div className={`p-3 rounded-md ${
            message.includes("successful") ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
          }`}>
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-600 disabled:opacity-50"
          type="submit"
          disabled={loading || !form.password || !form.confirmPassword}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;