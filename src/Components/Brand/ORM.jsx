import React from "react";
import {
  FaSmile,
  FaStar,
  FaEye,
  FaShieldAlt,
  FaComments,
} from "react-icons/fa";

const ORM = () => {
  const cardsContent = [
    {
      title: "Sentiment Analysis",
      description:
        "We monitor online conversations to gauge public sentiment about your brand.",
      icon: <FaSmile className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Review Management",
      description:
        "We optimize and respond to reviews to maintain a strong online reputation.",
      icon: <FaStar className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Content Suppression",
      description:
        "We minimize the visibility of negative content in search results.",
      icon: <FaShieldAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Brand Monitoring",
      description:
        "We track brand mentions and quickly address potential reputation issues.",
      icon: <FaEye className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Social Media Reputation",
      description:
        "We manage your social media presence to keep your brand image positive.",
      icon: <FaComments className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Hero Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-green-600 font-semibold tracking-widest uppercase">
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
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-green-100 rounded-full p-4 mb-4">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ORM;

