import React, { useEffect } from "react";
import { FaSmile, FaStar, FaEye, FaShieldAlt, FaComments } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const ORM = () => {
  const cardsContent = [
    {
      title: "Sentiment Analysis",
      description: "We monitor online conversations to gauge public sentiment about your brand.",
      icon: <FaSmile className="w-12 h-12 text-red-700 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Review Management",
      description: "We optimize and respond to reviews to maintain a strong online reputation.",
      icon: <FaStar className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Suppression",
      description: "We minimize the visibility of negative content in search results.",
      icon: <FaShieldAlt className="w-12 h-12 text-lime-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Brand Monitoring",
      description: "We track brand mentions and quickly address potential reputation issues.",
      icon: <FaEye className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Social Media Reputation",
      description: "We manage your social media presence to keep your brand image positive.",
      icon: <FaComments className="w-12 h-12 text-rose-600 bg-gray-200 rounded-full p-2" />,
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
        Online Reputation Management
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
      We create customized ORM strategies to enhance reputation, manage reviews, and handle online crises.
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

export default ORM;
