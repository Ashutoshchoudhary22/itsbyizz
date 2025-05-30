import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const data = { email, password, name, mobile };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Register successful:", response.data);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      toast.error("Registration failed");
      setError(err.response?.data?.message || "Registration failed. Try again.");
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
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-100 flex flex-col items-center px-4 py-10">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between bg-gradient-to-br from-sky-900 to-sky-700 text-white rounded-2xl shadow-lg px-8 py-12 mb-10">
        <div className="reveal w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-green-400 text-4xl sm:text-5xl font-bold leading-tight">
            Create Your Account
          </h1>
          <p className="text-xl sm:text-2xl mt-4">
            Join us and start your journey today!
          </p>
        </div>
        <div className="hidden sm:block w-1/2 text-right">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--new-user-registering-log-register-form-maggy-pack-design-development-illustrations-4097209.png" alt="Register" className="w-full max-w-sm mx-auto" />
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="reveal">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Sign Up</h2>
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>

          {error && (
            <p className="text-red-500 text-sm mt-4">{error}</p>
          )}

          <form onSubmit={submitHandler} className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Create Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <input
  type="number"
  placeholder="Mobile Number"
  required
  onChange={(e) => setMobile(e.target.value)}
  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 no-spinner"
/>


            <div className="flex items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" id="terms" className="w-5 h-5 mt-1 accent-blue-600" />
              <label htmlFor="terms">
                I agree to the
                <NavLink to="/terms" className="text-green-600 font-medium hover:underline px-1">
                  Terms of Use
                </NavLink>
                and
                <NavLink to="/policy" className="text-green-600 font-medium hover:underline px-1">
                  Privacy Policy
                </NavLink>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition duration-300"
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://cdn-icons-png.freepik.com/512/5599/5599530.png"
            alt="Sign Up Illustration"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

