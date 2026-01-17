import { Link } from "react-router";


export default function Login() {
  return (
    <>
      <div className="h-screen bg-amber-100 flex items-center justify-center flex-col text-center">
        <h1>Login</h1>
        <Link to="/auth/register">Go to Register</Link>
      </div>
    </>
  );
}
