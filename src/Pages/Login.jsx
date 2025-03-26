import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/admin-login`,
        {
          email,
          password,
        }
      );

      console.log("Login successful:", response.data);
      localStorage.setItem("user", response.data.token);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      toast.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      scale: 0.85,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center sm:justify-between bg-gradient-to-b from-sky-900 to-sky-800 h-72 sm:h-76 px-5 ">
        <div className="max-w-lg text-center sm:text-left">
          <h1 className="text-green-500 text-3xl sm:text-4xl font-bold">
            Login into Your Account
          </h1>
          <p className="text-white text-lg sm:text-2xl mt-2">
            Enter your personal details <br></br> and start the journey with us
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 bg-white rounded-lg shadow-lg -mt-25 sm:-mt-42 ml-0 sm:ml-[20rem]">
        <h2 className="text-2xl font-semibold text-center sm:text-left">
          Sign In
        </h2>
        <p className="text-sm text-gray-500 text-center sm:text-left mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center sm:text-left">
            {error}
          </p>
        )}

        <form
          onSubmit={submitHandler}
          className="mt-6 grid grid-cols-1 gap-4 sm:gap-6"
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Password"
          />

          <NavLink
            to="/forgot-password"
            className="text-sm text-blue-500 underline text-center sm:text-left"
          >
            Forgot Password?
          </NavLink>

          <div className="flex flex-col lg:flex-row items-center sm:items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 accent-blue-600"
            />
            <label htmlFor="terms" className="text-center sm:text-left">
              I have read and agree to the
              <NavLink
                to="/terms"
                className="text-green-600 font-medium hover:underline px-1"
              >
                Terms of Use
              </NavLink>
              and understand my personal information is processed in accordance
              with the
              <NavLink
                to="/policy"
                className="text-green-600 font-medium hover:underline px-1"
              >
                Privacy Statement
              </NavLink>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
