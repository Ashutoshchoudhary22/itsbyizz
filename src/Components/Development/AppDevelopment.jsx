import React from "react";
import { FaApple, FaAndroid, FaSyncAlt, FaBug, FaWrench } from "react-icons/fa";

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
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
         App Development
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We create high-performance mobile apps for iOS, Android, and beyond.
      </p>

      {/* Responsive Cards */}
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

export default AppDevelopment;
