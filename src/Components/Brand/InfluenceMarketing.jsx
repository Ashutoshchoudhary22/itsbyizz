import React from "react";
import { FaUsers, FaBullhorn, FaHandshake, FaShareAlt, FaDollarSign } from "react-icons/fa";

const InfluenceMarketing = () => {
  const cardsContent = [
    {
      title: "Influencer Discovery",
      description: "We find influencers that align with your brand and engage your target audience.",
      icon: <FaUsers className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Campaign Management",
      description: "We plan and manage influencer campaigns to maximize brand impact.",
      icon: <FaBullhorn className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Collaboration",
      description: "We create compelling content in collaboration with influencers.",
      icon: <FaHandshake className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Social Media Activation",
      description: "We boost brand visibility through influencer-driven social media campaigns.",
      icon: <FaShareAlt className="w-12 h-12 text-rose-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Influencer Compensation",
      description: "We handle fair and strategic influencer compensation negotiations.",
      icon: <FaDollarSign className="w-12 h-12 text-cyan-500 bg-gray-200 rounded-full p-2" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Influencer Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We connect brands with the right influencers to create impactful campaigns.
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

export default InfluenceMarketing;
