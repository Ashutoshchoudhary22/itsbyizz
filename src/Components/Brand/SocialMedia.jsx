import React from "react";
import { FaPenNib, FaUsers, FaBullhorn, FaHandshake, FaChartLine } from "react-icons/fa";
import{motion} from "framer-motion";

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

  return (
    <div className="w-full py-12 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Social Media Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We help brands engage, grow, and succeed on social media.
      </p>

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

export default SocialMedia;

