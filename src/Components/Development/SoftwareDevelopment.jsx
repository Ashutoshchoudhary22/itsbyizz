<<<<<<< HEAD
import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaLock,
  FaCloud,
  FaExchangeAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

=======
import React, { useEffect } from "react";
import { FaCode, FaMobileAlt, FaRocket, FaLock, FaCloud, FaExchangeAlt } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
const SoftwareDevelopment = () => {
  const cardsContent = [
    {
      title: "Custom Software",
<<<<<<< HEAD
      description:
        "Tailor-made solutions to align with your business goals and processes.",
      icon: <FaCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Building seamless iOS & Android apps for an engaging user experience.",
      icon: <FaMobileAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing speed and efficiency for a smoother digital experience.",
      icon: <FaRocket className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Security & Compliance",
      description:
        "Protecting user data with advanced security measures and protocols.",
      icon: <FaLock className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Cloud Integration",
      description:
        "Scalable cloud solutions for improved accessibility and collaboration.",
      icon: <FaCloud className="w-10 h-10 text-green-500" />,
    },
    {
      title: "API Development",
      description:
        "Connecting software with third-party applications for seamless automation.",
      icon: <FaExchangeAlt className="w-10 h-10 text-green-500" />,
=======
      description: "Tailor-made solutions to align with your business goals and processes.",
      icon: <FaCode className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Mobile App Development",
      description: "Building seamless iOS & Android apps for an engaging user experience.",
      icon: <FaMobileAlt className="w-12 h-12 text-rose-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Performance Optimization",
      description: "Enhancing speed and efficiency for a smoother digital experience.",
      icon: <FaRocket className="w-12 h-12 text-emerald-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Security & Compliance",
      description: "Protecting user data with advanced security measures and protocols.",
      icon: <FaLock className="w-12 h-12 text-fuchsia-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Cloud Integration",
      description: "Scalable cloud solutions for improved accessibility and collaboration.",
      icon: <FaCloud className="w-12 h-12 text-pink-900 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "API Development",
      description: "Connecting software with third-party applications for seamless automation.",
      icon: <FaExchangeAlt className="w-12 h-12 text-amber-500 bg-gray-200 rounded-full p-2" />,
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
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
          Software Development
        </h1>
        <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
          We craft powerful and scalable software solutions tailored to your needs.
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

export default SoftwareDevelopment;

