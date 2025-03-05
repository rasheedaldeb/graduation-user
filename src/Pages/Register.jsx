import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-no-repeat p-10"
      style={{ backgroundImage: "url(/images/register_signin.jpg)" }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
