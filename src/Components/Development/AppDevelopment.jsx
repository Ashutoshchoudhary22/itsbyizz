import React from "react";
import {
  FaApple,
  FaAndroid,
  FaSyncAlt,
  FaBug,
  FaWrench,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AppDevelopment = () => {
  const cardsContent = [
    {
      title: "iOS Development",
      description: "Crafting sleek and user-friendly apps for iPhone and iPad users.",
      icon: <FaApple className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Android Development",
      description: "Building versatile and functional apps for Android devices.",
      icon: <FaAndroid className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Cross-Platform Apps",
      description: "Seamless apps for iOS & Android with reduced development time.",
      icon: <FaSyncAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "App Testing & QA",
      description: "Ensuring flawless performance with rigorous testing & debugging.",
      icon: <FaBug className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Maintenance & Updates",
      description: "Keeping your app up-to-date and running smoothly post-launch.",
      icon: <FaWrench className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="relative w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 text-transparent bg-clip-text leading-tight mb-4">
          App Development
        </h1>
        <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
          We create high-performance mobile apps for iOS, Android, and beyond.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="relative z-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {cardsContent.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            {card.icon}
            <h2 className="text-xl font-bold text-gray-800 mt-5">
              {card.title}
            </h2>
            <p className="text-gray-600 mt-3">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppDevelopment;

