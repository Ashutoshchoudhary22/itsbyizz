import React, { useEffect } from "react";
import {
  FaPalette,
  FaBullhorn,
  FaBook,
  FaGlobe,
  FaStar,
  FaSearch,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

const BrandBuilding = () => {
  const cardsContent = [
    {
      title: "Brand Identity",
      description:
        "We design unique logos, color palettes, and typography to define your brand's visual identity.",
      icon: (
        <FaPalette className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Brand Messaging",
      description:
        "We craft compelling stories and taglines that resonate with your audience.",
      icon: (
        <FaBullhorn className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Brand Guidelines",
      description:
        "Ensure consistency across platforms with well-defined brand guidelines.",
      icon: (
        <FaBook className="w-12 h-12 text-yellow-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Digital Presence",
      description:
        "We optimize websites and social media to enhance your online brand visibility.",
      icon: (
        <FaGlobe className="w-12 h-12 text-pink-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Reputation Management",
      description:
        "We monitor and improve your brand's image across digital channels.",
      icon: (
        <FaStar className="w-12 h-12 text-red-500 bg-gray-200 rounded-full p-2" />
      ),
    },
    {
      title: "Market Research", // ✅ New card
      description:
        "In-depth competitor and customer analysis to guide your branding decisions.",
      icon: (
        <FaSearch className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />
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
    <div className="relative w-full py-12 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
       
        <h1 className="text-5xl leading-tight font-extrabold text-gray-600  bg-clip-text mb-4 pb-1">
          Brand Building
        </h1>
        <p className="text-base text-gray-600 max-w-2xl mx-auto font-medium">
          We don't just build brands — we build legacies. Our comprehensive brand strategies ensure you become a recognized and respected presence in your industry.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="relative z-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {cardsContent.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card"
            style={{ animationDelay: `${index * 0.9}s` }}
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {card.title}
            </h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandBuilding;
