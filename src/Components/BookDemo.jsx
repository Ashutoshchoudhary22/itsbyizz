import React, { useEffect, useState } from "react";
import WavyScrollText from "./WavyScroll";
import ScrollReveal from "scrollreveal";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle form submission logic here
  };

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
      distance: '50px', // Distance of the effect
      duration: 800, // Duration of the effect
      delay: 100, // Delay before the effect starts
      opacity: 0, // Start opacity (element is invisible before scroll)
      scale: 0.85, // Scaling effect when revealing
      easing: 'ease-in-out', // Easing function for the effect
    });
  }, []);

  return (
    <div className="w-full h-auto flex items-center justify-between bg-gradient-to-b from-sky-900 to-sky-800 text-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 w-full">
      
        <div className="text-start mt-20">
        <WavyScrollText highlight="Let's get" text="  to work" />
        
          <p className="text-gray-200 text-xl mt-3 font-semibold">
          See how we can put AI to work for your people.
          </p>
        </div>

        {/* Right Side - Book a Demo Form */}
        <div className="bg-transparent border reveal border-sky-900 shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">Book a Demo</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-200 border rounded-lg focus:outline-none"
              required
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-200 border rounded-lg focus:outline-none"
              required
            />
            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
             className="w-full px-4 py-2 text-gray-200 border rounded-lg focus:outline-none"
              required
            />
            {/* City */}
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-200 border rounded-lg focus:outline-none"
              required
            />
            {/* Requirements Dropdown */}
            <select
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-200 border bg-sky-800 rounded-lg focus:outline-none"
              required
            >
              <option value="" disabled>Select Your Requirement</option>
              <option value="static-web-dev">Static Web Development</option>
              <option value="dynamic-web-dev">Dynamic Web Development</option>
              <option value="ecom">E-Commerce Development</option>
              <option value="crm">CRM Development</option>
              <option value="hrm">HRM Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="software-dev">Software Development</option>
              <option value="appointment-booking">Appointment Booking Web Dev</option>
              <option value="online-reputation">Online Reputation Management</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700  text-gray-50 py-2 rounded-full font-semibold transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
