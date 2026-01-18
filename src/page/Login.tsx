// import { Link } from "react-router-dom";

import { useState } from "react";
import {  useNavigate } from "react-router";
import { useUser } from "../components/context/authloginContext";
import { jwtDecode } from "jwt-decode";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3002/api/auth/login",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        }
      );
      console.log('response', response);
      const { token } = await response.json();
      console.log('token',token);
      // console.log('data',data);
      // const token=data.token;

      localStorage.setItem("token", token);

      // decode token to get user data
      const decodedToken = jwtDecode<{ username: string; email: string; userId: number }>(token);
      console.log("decodedToken",decodedToken);
      // const decodedToken:any=jwtDecode(token);
      // setUser(decodedToken.username,decodedToken.email,decodedToken.userId);
      

      console.log('decodedToken', decodedToken);
      const { username, email, userId } = decodedToken;
      setUser(username, email, userId);

      if (!response.ok) {
        throw new Error('Login failed');
      }
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  // npm install jwt-decode

  return (
    <>
      {/* <div className="h-screen bg-amber-100 flex items-center justify-center flex-col text-center">
        <h1>Login</h1>
        <Link to="/auth/register">Go to Register</Link>
      </div> */}

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
