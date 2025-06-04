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
     <div className="min-h-screen bg-gray-100 flex flex-col">
   
      {/* Header */}
       <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 w-full h-72 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl reveal">
      <h1 className="text-green-400 text-4xl font-bold mb-2 ">
        Create Your Account
      </h1>
      <p className="text-white text-lg mb-8 text-center">
        Enter your personal details and start your journey with us
      </p>
</div>
      {/* Card */}
      <div className="flex justify-center px-4 mt-96 mb-10">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md reveal">
        <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={submitHandler} className="space-y-4">
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
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-start text-sm text-gray-600 gap-2">
            <input type="checkbox" id="terms" className="mt-1" />
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
    </div>
    </div>
    </div>
  );
};

export default Register;

