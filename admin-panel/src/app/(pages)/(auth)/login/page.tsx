import AdminLoginForm from '@/components/login/loginForm';

const Login = () => {
  return (
    <div className="bg-background text-black dark:text-white h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6  rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-[1.5em] md:text-[2em]">Admin Login</h1>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default Login;
