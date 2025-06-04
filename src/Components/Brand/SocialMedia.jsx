import React, { useEffect } from "react";
import { FaPenNib, FaUsers, FaBullhorn, FaHandshake, FaChartLine } from "react-icons/fa";
// import{motion} from "framer-motion";
import ScrollReveal from "scrollreveal";
const SocialMedia = () => {
  const cardsContent = [
    {
      title: "Content Creation",
      description: "We craft engaging visuals, videos, and posts for your audience.",
      icon: <FaPenNib className="w-12 h-12 text-lime-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Community Management",
      description: "We interact with followers, respond to messages, and build relationships.",
      icon: <FaUsers className="w-12 h-12 text-red-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Social Media Advertising",
      description: "We run targeted ad campaigns to boost visibility and engagement.",
      icon: <FaBullhorn className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Influencer Collaboration",
      description: "We connect brands with influencers to expand reach and credibility.",
      icon: <FaHandshake className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Paid Promotions",
      description: "We optimize social media ads to maximize your return on investment.",
      icon: <FaChartLine className="w-12 h-12 text-violet-500 bg-gray-200 rounded-full p-2" />,
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
    <div className="w-full py-12 px-5 bg-gray-50 relative overflow-hidden">
      {/* Background Pulse Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-green-600 font-semibold tracking-widest uppercase">
          Social Media Marketing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
          Build a Loyal Audience with Social Media
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We help brands engage, grow, and succeed by crafting strategic social
          media campaigns that resonate with your audience.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto relative z-10">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card`}
          style={{ animationDelay: `${index * 0.9}s` }}
          >
            <div className="bg-green-100 rounded-full p-4 mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;


