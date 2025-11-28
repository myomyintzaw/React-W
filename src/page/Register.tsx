import { Link } from "react-router";


export default function Register() {
  return (
    <div className="h-screen bg-amber-600 flex items-center justify-center flex-col-text-center">
      <h1>Register</h1>
      <Link to="/auth">Go to login</Link>
    </div>
  )
}
