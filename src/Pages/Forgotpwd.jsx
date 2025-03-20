import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ScrollReveal from "scrollreveal";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/forgot-password`,
        {
          email,
        }
      );

      console.log("Password reset email sent:", response.data);
      toast.success("Password reset email sent successfully");
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (err) {
      console.error("Failed to send reset email:", err.response?.data || err.message);
      toast.error("Failed to send reset email");
      setError(err.response?.data?.message || "Failed to send reset email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
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
              Forgot Password
            </h1>
            <p className="text-white text-2xl">
              Enter your email to reset your password
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 p-8 absolute right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg reveal">
        <h2 className="text-2xl font-semibold">Reset Password</h2>
        <p className="text-sm text-gray-500">
          Remember your password?{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Sign In
          </NavLink>
        </p>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-3">{message}</p>}

        <form onSubmit={submitHandler} className="mt-6 grid grid-cols-1 gap-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Sending Email..." : "Send Reset Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;