import React, { useEffect } from "react";
import { FaUserAlt, FaMobileAlt, FaFileImage, FaRocket, FaSearch } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const WebDesign = () => {
  const cardsContent = [
    {
      title: "User Experience (UX)",
      description: "We craft intuitive, user-friendly designs that enhance engagement and satisfaction.",
      icon: <FaUserAlt className="w-12 h-12 text-sky-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Responsive Design",
      description: "Ensuring flawless performance on all devices, from desktops to mobile screens.",
      icon: <FaMobileAlt className="w-12 h-12 text-green-600 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Integration",
      description: "Strategically placing text, images, and media to tell your story effectively.",
      icon: <FaFileImage className="w-12 h-12 text-orange-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Performance Optimization",
      description: "Speeding up your site with advanced techniques for a seamless experience.",
      icon: <FaRocket className="w-12 h-12 text-purple-700 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "SEO Best Practices",
      description: "Enhancing visibility with optimized content and search-friendly structures.",
      icon: <FaSearch className="w-12 h-12 text-orange-700 bg-gray-200 rounded-full p-2" />,
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
        Web Design
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We create stunning and immersive web experiences that captivate users.
      </p>

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

export default WebDesign;
