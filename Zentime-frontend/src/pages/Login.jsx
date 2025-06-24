import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../JS/actions/authActions";

export default function Login() {
      const [user, setUser] = useState({});
      const { email, password } = user;

      const navigate = useNavigate();

      const dispatch = useDispatch();

      const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginAction(user, navigate));
      };


  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login");
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 bg-white lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              onChange={(e) => handleInputChange(e)}
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <input
              onChange={(e) => handleInputChange(e)}
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="text-gray-400 text-sm">or continue with</span>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center gap-2 cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            <FaGithub className="text-gray-800" />
            Continue with GitHub
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
