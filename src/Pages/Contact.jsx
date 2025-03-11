import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import { FaApple, FaAndroid, FaSyncAlt, FaBug, FaWrench } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Contact = () => {
  const cardsContent = [
    {
      title: "Address",
      description:
        "5E/12BP, Block E, New Industrial Twp 5,New Industrial Town, Faridabad, Haryana 121001",
      icon: <FaRegFileCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Phone Number",
      description: "+91-7042707091,+91-7042707092,+91 9205404075",
      icon: <FaPhone className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Emails",
      description:
        "support@deepnapsoftech.com, enquiry@deepnapsoftech.com, itsybizz@gmail.com",
      icon: <MdEmail className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Telephone",
      description: "0129-400-1529",
      icon: <TbDeviceLandlinePhone className="w-10 h-10 text-green-500" />,
    },
  ];

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
          <div className="">
            <h1 className="text-4xl font-bold text-green-500">Contact Us</h1>
            <p className="text-lg mt-3 opacity-90 text-white">
              Get in touch with us for any inquiries or collaborations
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="max-w-2xl absolute top-60  mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-5 reveal">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className="bg-white p-7 rounded-xl shadow-lg flex flex-col  items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {card.title}
            </h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl md:w-2/5 p-8 absolute right-8 top-60 bg-white rounded-lg reveal">
        <h2 className="text-2xl font-semibold">Contact Us</h2>

        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 ">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Your City"
            required
            className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="col-span-2 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600  transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// Tailwind CSS Styles
const inputStyle =
  "border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-blue-500";
