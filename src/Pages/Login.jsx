import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

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
        { email, password }
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 w-full h-72 flex items-center justify-center px-4">
        <div className="text-left md:pr- text-white max-w-2xl reveal">
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            Login to Your Account
          </h1>
          <p className="text-lg">
            Enter your personal details and start your journey with us
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center px-4 -mt-20 mb-10">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md reveal">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h2>
          <p className="text-sm text-gray-500 mb-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-right">
              <NavLink to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </NavLink>
            </div>

            <div className="flex items-start space-x-3 text-sm text-gray-600">
              <input type="checkbox" id="terms" className="mt-1 accent-blue-600" />
              <label htmlFor="terms">
                I agree to the{" "}
                <NavLink to="/terms" className="text-green-600 hover:underline font-medium">
                  Terms of Use
                </NavLink>{" "}
                and{" "}
                <NavLink to="/policy" className="text-green-600 hover:underline font-medium">
                  Privacy Policy
                </NavLink>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 ${
                loading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

