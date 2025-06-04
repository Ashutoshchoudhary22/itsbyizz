import React, { useEffect } from "react";
import {
  FaUsers,
  FaBullhorn,
  FaHandshake,
  FaShareAlt,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const InfluenceMarketing = () => {
  const cardsContent = [
    {
      title: "Influencer Discovery",
      description:
        "We find influencers that align with your brand and engage your target audience.",
      icon: (
        <FaUsers className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Campaign Management",
      description:
        "We plan and manage influencer campaigns to maximize brand impact.",
      icon: (
        <FaBullhorn className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Content Collaboration",
      description:
        "We create compelling content in collaboration with influencers.",
      icon: (
        <FaHandshake className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Social Media Activation",
      description:
        "We boost brand visibility through influencer-driven social media campaigns.",
      icon: (
        <FaShareAlt className="w-12 h-12 text-rose-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Influencer Compensation",
      description:
        "We handle fair and strategic influencer compensation negotiations.",
      icon: (
        <FaDollarSign className="w-12 h-12 text-cyan-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Performance Tracking",
      description:
        "We monitor influencer campaign metrics to evaluate effectiveness and optimize future strategies.",
      icon: (
        <FaChartLine className="w-12 h-12 text-indigo-500 bg-gray-200 rounded-full p-2" />
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
      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
          Build Trust Through Influencer Collaborations
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We help your brand connect with the right influencers to spark genuine
          engagement and drive impactful results.
        </p>
      </div>

      {/* Cards */}
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

export default InfluenceMarketing;
