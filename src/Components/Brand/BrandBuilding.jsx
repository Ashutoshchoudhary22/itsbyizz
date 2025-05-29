import React, { useEffect } from "react";
import { FaPalette, FaBullhorn, FaBook, FaGlobe, FaStar } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const BrandBuilding = () => {
  const cardsContent = [
    {
      title: "Brand Identity",
      description: "We design unique logos, color palettes, and typography to define your brand's visual identity.",
      icon: <FaPalette className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Brand Messaging",
      description: "We craft compelling stories and taglines that resonate with your audience.",
      icon: <FaBullhorn className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Brand Guidelines",
      description: "Ensure consistency across platforms with well-defined brand guidelines.",
      icon: <FaBook className="w-12 h-12 text-yellow-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Digital Presence",
      description: "We optimize websites and social media to enhance your online brand visibility.",
      icon: <FaGlobe className="w-12 h-12 text-pink-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Reputation Management",
      description: "We monitor and improve your brand's image across digital channels.",
      icon: <FaStar className="w-12 h-12 text-red-500 bg-gray-200 rounded-full p-2" />,
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
        Brand Building
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        Elevate your brand with our tailored strategies for identity, messaging, and digital presence.
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

export default BrandBuilding;
