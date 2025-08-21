import { useState, navigate } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/slices/authSlice";
import { ArrowLeft } from "lucide-react";

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    dispatch(forgotPassword({ email })).then((result) => {
      if (result.type === 'auth/forgotPassword/fulfilled') {
        setMessage("Password reset email sent! Check your inbox.");
      }
    });
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate("/auth")}
        className="flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to Login
      </button>

      <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
      <p className="text-sm text-gray-600 text-center">
        Enter your email and we'll send you a reset link
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium leading-none">
            Email
          </label>
          <input
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="your@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && (
          <div className="p-3 text-red-700 bg-red-100 rounded-md">
            <p className="text-sm font-medium">{error.detail || "Failed to send reset email"}</p>
          </div>
        )}

        {message && (
          <div className="p-3 text-green-700 bg-green-100 rounded-md">
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-600 disabled:opacity-50"
          type="submit"
          disabled={loading || !email}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;