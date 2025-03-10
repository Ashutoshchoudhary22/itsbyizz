import React from "react";
import { FaSearch, FaBullseye, FaPenNib, FaThumbsUp, FaEnvelope } from "react-icons/fa";

const DigitalMarketing = () => {
  const cardsContent = [
    {
      title: "SEO Optimization",
      description: "We improve your website’s visibility with effective on-page and off-page SEO strategies.",
      icon: <FaSearch className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Search Engine Marketing",
      description: "We run targeted PPC campaigns to drive high-quality traffic and maximize conversions.",
      icon: <FaBullseye className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Content Marketing",
      description: "We create compelling content that educates, engages, and converts your audience.",
      icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Social Media Marketing",
      description: "We manage and optimize social media to boost brand engagement and loyalty.",
      icon: <FaThumbsUp className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Email Marketing",
      description: "We design and manage email campaigns to nurture leads and drive conversions.",
      icon: <FaEnvelope className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Digital Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We craft data-driven digital strategies to grow your online presence and boost engagement.
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

export default DigitalMarketing;
