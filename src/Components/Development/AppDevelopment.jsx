<<<<<<< HEAD
import React from "react";
import {
  FaApple,
  FaAndroid,
  FaSyncAlt,
  FaBug,
  FaWrench,
} from "react-icons/fa";
import { motion } from "framer-motion";

=======
import React, { useEffect } from "react";
import { FaApple, FaAndroid, FaSyncAlt, FaBug, FaWrench } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
const AppDevelopment = () => {
  const cardsContent = [
    {
      title: "iOS Development",
      description: "Crafting sleek and user-friendly apps for iPhone and iPad users.",
      icon: <FaApple className="w-12 h-12 text-rose-600 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Android Development",
      description: "Building versatile and functional apps for Android devices.",
      icon: <FaAndroid className="w-12 h-12 text-lime-600 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Cross-Platform Apps",
      description: "Seamless apps for iOS & Android with reduced development time.",
      icon: <FaSyncAlt className="w-12 h-12 text-purple-700 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "App Testing & QA",
      description: "Ensuring flawless performance with rigorous testing & debugging.",
      icon: <FaBug className="w-12 h-12 text-amber-600 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Maintenance & Updates",
      description: "Keeping your app up-to-date and running smoothly post-launch.",
      icon: <FaWrench className="w-12 h-12 text-cyan-500 bg-gray-200 rounded-full p-2" />,
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
    <div className="relative w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

<<<<<<< HEAD
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
=======
      {/* Responsive Cards */}
       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  {cardsContent.map((card, index) => (
    <div
      key={index}
      className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card`}
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
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
    </div>
  );
};

export default AppDevelopment;

