// src/pages/Auth/ResetPassword.js
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
        {/* Simple header for reset password */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-center">LazyIntern</h1>
          <p className="text-sm text-center text-muted-foreground mt-1">
            Reset Your Password
          </p>
        </div>
        
        <div className="p-6">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;