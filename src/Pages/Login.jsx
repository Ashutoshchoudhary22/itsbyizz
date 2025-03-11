import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".reveal", {
      distance: "50px", // Distance of the effect
      duration: 800, // Duration of the effect
      delay: 100, // Delay before the effect starts
      opacity: 0, // Start opacity (element is invisible before scroll)
      scale: 0.85, // Scaling effect when revealing
      easing: "ease-in-out", // Easing function for the effect
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="w-full flex items-center justify-start bg-gradient-to-b from-sky-900 to-sky-800 h-96 px-5 py-24 ">
        <div className="col-span-1 flex items-center">
          <div className="w-2/3">
            <h1 className="text-green-500 text-4xl font-bold ">
              Login into Your Account
            </h1>
            <p className="text-white text-2xl ">
              Enter your personal details and start the journey with us
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 p-8 absolute right-10 top-50 bg-white rounded-lg reveal">
        <h2 className="text-2xl font-semibold">Sign up</h2>
        <p className="text-sm text-gray-500">
          Does not have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            <Link to="/register">Sign up</Link>
          </span>
        </p>

        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 ">
          <input
            type="email"
            placeholder="Email"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Create Password"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="col-span-2 flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="w-5 h-5 mt-1 accent-blue-600" />
            <p>
              I have read and agree to the
              <span className="text-green-600 font-medium cursor-pointer hover:underline px-1">
                Terms of Use
              </span>
              and understand my personal information is processed in accordance
              with the
              <span className="text-green-600 font-medium cursor-pointer hover:underline px-1">
                Privacy Statement
              </span>
              .
            </p>
          </div>
          <button className="col-span-2 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600  transition-all duration-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Tailwind CSS Styles
const inputStyle =
  "border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-blue-500";
