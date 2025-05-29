import React, { useEffect, useState } from "react";
import WavyScrollText from "./WavyScroll";
import ScrollReveal from "scrollreveal";
import axios from "axios";
import toast from "react-hot-toast";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirement: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.requirement
    ) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/quotes`,
        formData
      );

      if (response.status === 200) {
        setMessage("Your demo request has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          requirement: "",
        }); // Clear form
        toast.success("Your demo request has been sent successfully!");
      } else {
        setMessage("Failed to send request. Please try again.");
      }
    } catch (err) {
      setMessage(
        "Error: " + (err.response?.data?.message || "Something went wrong")
      );
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
    <div className="w-full h-auto flex items-center justify-between bg-gradient-to-b from-sky-900 to-sky-800 text-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 w-full">
        <div className="text-start mt-20">
          <WavyScrollText highlight="Let's get" text=" to work" />
          <p className="text-gray-200 text-xl mt-3 font-semibold">
            See how we can put AI to work for your people.
          </p>
        </div>

        {/* Right Side - Book a Demo Form */}
        <div className="bg-transparent border reveal border-sky-900 shadow-xl rounded-xl p-6 w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-4 text-center">
            Book a Demo
          </h2>

          {message && (
            <p
              className={`mt-3 text-lg font-semibold ${
                message.includes("Error") ? "text-white" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
               style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.7)" }}
              className="w-full px-4 py-2 text-gray-200 border border-sky-300 inner-shadow  rounded-lg focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.7)" }}
              className="w-full px-4 py-2 text-gray-200 border border-sky-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.7)" }}
              className="w-full px-4 py-2 text-gray-200 border border-sky-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.7)" }}
              className="w-full px-4 py-2 text-gray-200 border border-sky-300 rounded-lg focus:outline-none"
              required
            />
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.7)" }}
              className="w-full px-4 py-2 text-gray-200 border border-sky-300 bg-sky-800 rounded-lg focus:outline-none"
              required
            >
              <option value="" disabled>
                Select Your Requirement
              </option>
              <option value="static-web-dev">Static Web Development</option>
              <option value="dynamic-web-dev">Dynamic Web Development</option>
              <option value="ecom">E-Commerce Development</option>
              <option value="crm">CRM Development</option>
              <option value="hrm">HRM Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="software-dev">Software Development</option>
              <option value="appointment-booking">
                Appointment Booking Web Dev
              </option>
              <option value="online-reputation">
                Online Reputation Management
              </option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="text-gray-700 font-semibold px-8 py-2 md:px-20 bg-green-400 rounded-full hover:bg-green-500 transition-all ease border  hover:text-white"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
