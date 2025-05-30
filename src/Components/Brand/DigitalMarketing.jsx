import React from "react";
import {
  FaSearch,
  FaBullseye,
  FaPenNib,
  FaThumbsUp,
  FaEnvelope,
} from "react-icons/fa";

const DigitalMarketing = () => {
  const cardsContent = [
    {
      title: "SEO Optimization",
      description:
        "We improve your website’s visibility with effective on-page and off-page SEO strategies.",
      icon: <FaSearch className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Search Engine Marketing",
      description:
        "We run targeted PPC campaigns to drive high-quality traffic and maximize conversions.",
      icon: <FaBullseye className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Content Marketing",
      description:
        "We create compelling content that educates, engages, and converts your audience.",
      icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "We manage and optimize social media to boost brand engagement and loyalty.",
      icon: <FaThumbsUp className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Email Marketing",
      description:
        "We design and manage email campaigns to nurture leads and drive conversions.",
      icon: <FaEnvelope className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-green-600 font-semibold tracking-widest uppercase">
          Digital Marketing Services
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
          Drive Growth with Data-Driven Strategies
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We help you grow online by crafting tailored strategies across SEO,
          paid ads, content, and social media marketing to maximize visibility
          and ROI.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto relative z-10">
        {cardsContent.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-green-100 rounded-full p-4 mb-4">
              {card.icon}
            </div>
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

export default DigitalMarketing;

