import React from "react";
import { FaCode, FaMobileAlt, FaRocket, FaLock, FaCloud, FaExchangeAlt } from "react-icons/fa";

const SoftwareDevelopment = () => {
  const cardsContent = [
    {
      title: "Custom Software",
      description: "Tailor-made solutions to align with your business goals and processes.",
      icon: <FaCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Mobile App Development",
      description: "Building seamless iOS & Android apps for an engaging user experience.",
      icon: <FaMobileAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Performance Optimization",
      description: "Enhancing speed and efficiency for a smoother digital experience.",
      icon: <FaRocket className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Security & Compliance",
      description: "Protecting user data with advanced security measures and protocols.",
      icon: <FaLock className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Cloud Integration",
      description: "Scalable cloud solutions for improved accessibility and collaboration.",
      icon: <FaCloud className="w-10 h-10 text-green-500" />,
    },
    {
      title: "API Development",
      description: "Connecting software with third-party applications for seamless automation.",
      icon: <FaExchangeAlt className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Software Development
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We craft powerful and scalable software solutions tailored to your needs.
      </p>

      {/* Responsive Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
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

export default SoftwareDevelopment;
