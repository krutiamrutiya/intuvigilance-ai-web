import LoginForm from "@/features/auth/form/loginForm";
import PublicLayout from "@/layouts/PublicLayout";

const Login = () => {
  return (
    <div className="auth-page">
      <PublicLayout title="Login">
        <LoginForm />
      </PublicLayout>
    </div>
  );
};

export default Login;
