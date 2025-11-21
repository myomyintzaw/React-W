import { Link } from "react-router";


export default function PageNotFound() {
  return (
    <div className="h-screen bg-red-50 flex items-center justify-center flex-col text-center">
      <h1>404 Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">Go back to HOme</Link>
    </div>
  )
}
