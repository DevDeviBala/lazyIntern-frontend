import AuthContainer from '../../components/Auth/AuthContainer';
import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen">
      <AuthContainer>
        <ForgotPasswordForm />
      </AuthContainer>
    </div>
  );
};

export default ForgotPassword;