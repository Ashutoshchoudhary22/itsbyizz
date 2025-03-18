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
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/login`,
        {
          email,
          password,
        }
      );

      console.log("Login successful:", response.data);
      localStorage.setItem("user" , response.data.token);
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
    <div className="min-h-screen bg-gray-100 relative">
      <div className="w-full flex items-center justify-start bg-gradient-to-b from-sky-900 to-sky-800 h-96 px-5 py-24">
        <div className="col-span-1 flex items-center">
          <div className="w-2/3">
            <h1 className="text-green-500 text-4xl font-bold">
              Login into Your Account
            </h1>
            <p className="text-white text-2xl">
              Enter your personal details and start the journey with us
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 p-8 absolute right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg reveal">
        <h2 className="text-2xl font-semibold">Sign In</h2>
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <form onSubmit={submitHandler} className="mt-6 grid grid-cols-1 gap-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="w-5 h-5 mt-1 accent-blue-600" />
            <p>
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
            </p>
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
