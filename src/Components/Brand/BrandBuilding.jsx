import React, { useEffect } from "react";
import { FaPalette, FaBullhorn, FaBook, FaGlobe, FaStar } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const BrandBuilding = () => {
  const cardsContent = [
    {
      title: "Brand Identity",
      description: "We design unique logos, color palettes, and typography to define your brand's visual identity.",
      icon: <FaPalette className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Brand Messaging",
      description: "We craft compelling stories and taglines that resonate with your audience.",
      icon: <FaBullhorn className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Brand Guidelines",
      description: "Ensure consistency across platforms with well-defined brand guidelines.",
      icon: <FaBook className="w-12 h-12 text-yellow-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Digital Presence",
      description: "We optimize websites and social media to enhance your online brand visibility.",
      icon: <FaGlobe className="w-12 h-12 text-pink-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Reputation Management",
      description: "We monitor and improve your brand's image across digital channels.",
      icon: <FaStar className="w-12 h-12 text-red-500 bg-gray-200 rounded-full p-2" />,
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
    <div className="relative w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

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
            className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full shadow-md mb-5">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 mt-3">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandBuilding;

