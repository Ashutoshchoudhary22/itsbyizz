import React, { useEffect } from "react";
import { FaSync, FaUserTie, FaDesktop, FaDatabase, FaChalkboardTeacher } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const CRMDevelopment = () => {
  const cardsContent = [
    {
      title: "CRM Integration",
      description: "Seamless integration with your existing systems for a unified workflow.",
      icon: <FaSync className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "CRM Consulting",
      description: "Expert guidance to optimize CRM implementation & customization.",
      icon: <FaUserTie className="w-12 h-12 text-green-600 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "UI & UX Design",
      description: "Intuitive, user-friendly CRM interfaces for better team productivity.",
      icon: <FaDesktop className="w-12 h-12 text-orange-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Data Migration & Analytics",
      description: "Secure data transfer with insights to drive smarter decisions.",
      icon: <FaDatabase className="w-12 h-12  text-rose-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Training & Support",
      description: "Ongoing CRM training & support to maximize efficiency.",
      icon: <FaChalkboardTeacher className="w-12 h-12 text-yellow-600 bg-gray-200 rounded-full p-2" />,
    },
  ];
useEffect(() => {
    ScrollReveal().reveal(".card", {
      duration: 800, // Animation duration
      origin: "bottom", // Starts from bottom
      distance: "50px", // Moves 50px up
      easing: "ease-in-out",
      interval: 200, // Stagger effect (one by one)
      reset: false, // Prevents re-animation when scrolling back
    });
  }, []);
  return (
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        CRM Development
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        Optimized CRM solutions to streamline customer interactions & operations.
      </p>

      {/* Responsive Cards */}
       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  {cardsContent.map((card, index) =>(
    <div
      key={index}
      className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card`}
      style={{ animationDelay: `${index * 0.9}s`}}
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

export default CRMDevelopment;
