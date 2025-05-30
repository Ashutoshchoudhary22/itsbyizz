import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
import ScrollReveal from "scrollreveal";
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9

const WebDevelopment = () => {
  const cardsContent = [
    {
      title: "Responsive Design",
      description:
        "Our websites adapt seamlessly to desktops, tablets, and smartphones, ensuring a consistent user experience.",
      icon: <FaGlobe className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />
,
    },
    {
      title: "Web Application Development",
      description:
        "We create dynamic web applications that streamline operations and enhance user engagement.",
      icon: <FaLaptopCode className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Scalable e-commerce platforms designed for seamless shopping experiences and business growth.",
      icon: <FaShoppingCart className="w-12 h-12 text-red-700 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Management Systems",
      description:
        "Easily manage and update your website content with our intuitive CMS solutions.",
      icon: <FaFileAlt className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Security",
      description:
        "We implement advanced security measures to protect your website and user data.",
      icon: <FaShieldAlt className="w-12 h-12 text-orange-500 bg-gray-200 rounded-full p-2" />,
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
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

<<<<<<< HEAD
      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 text-transparent bg-clip-text leading-tight mb-4">
          Web Development
        </h1>
        <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
          Our Web Development services span a wide spectrum, each tailored to meet unique client needs.
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
            <h2 className="text-xl font-bold text-gray-800 mt-5">{card.title}</h2>
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

export default WebDevelopment;

