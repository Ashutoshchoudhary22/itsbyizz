import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
  FaTools, // Added icon for the new card
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const WebDevelopment = () => {
  const cardsContent = [
    {
      title: "Responsive Design",
      description:
        "Our websites adapt seamlessly to desktops, tablets, and smartphones, ensuring a consistent user experience.",
      icon: <FaGlobe className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Web Application Development",
      description:
        "We create dynamic web applications that streamline operations and enhance user engagement.",
      icon: <FaLaptopCode className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Scalable e-commerce platforms designed for seamless shopping experiences and business growth.",
      icon: <FaShoppingCart className="w-12 h-12 text-red-700 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Management Systems",
      description:
        "Easily manage and update your website content with our intuitive CMS solutions.",
      icon: <FaFileAlt className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Security",
      description:
        "We implement advanced security measures to protect your website and user data.",
      icon: <FaShieldAlt className="w-12 h-12 text-orange-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance and technical support to ensure your site stays up-to-date and secure.",
      icon: <FaTools className="w-12 h-12 text-indigo-500 bg-gray-200 rounded-full p-2" />,
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 800,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      interval: 200,
      reset: false,
    });
  }, []);

  return (
    <div className="relative w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Responsive Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card`}
            style={{ animationDelay: `${index * 0.9}s` }}
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {card.title}
            </h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopment;
