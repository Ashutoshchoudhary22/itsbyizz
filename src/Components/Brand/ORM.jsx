import React, { useEffect } from "react";
import {
  FaSmile,
  FaStar,
  FaEye,
  FaShieldAlt,
  FaComments,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const ORM = () => {
  const cardsContent = [
    {
      title: "Sentiment Analysis",
      description:
        "We monitor online conversations to gauge public sentiment about your brand.",
      icon: (
        <FaSmile className="w-12 h-12 text-red-700 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Review Management",
      description:
        "We optimize and respond to reviews to maintain a strong online reputation.",
      icon: (
        <FaStar className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Content Suppression",
      description:
        "We minimize the visibility of negative content in search results.",
      icon: (
        <FaShieldAlt className="w-12 h-12 text-lime-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Brand Monitoring",
      description:
        "We track brand mentions and quickly address potential reputation issues.",
      icon: (
        <FaEye className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Social Media Reputation",
      description:
        "We manage your social media presence to keep your brand image positive.",
      icon: (
        <FaComments className="w-12 h-12 text-rose-600 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Crisis Management", // ✅ New Card
      description:
        "We implement rapid strategies to contain and resolve online reputation threats in real-time.",
      icon: (
        <FaShieldAlt className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />
      ),
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
    <div className="w-full py-12 px-5 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Hero Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-2xl text-green-600 font-semibold tracking-widest uppercase">
          Professional Online Reputation Services
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
          Safeguarding Your Digital Reputation
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We create tailored ORM strategies to enhance your brand’s credibility,
          manage online reviews, and swiftly mitigate potential crises—ensuring your business always shines online.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto relative z-10">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card"
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
