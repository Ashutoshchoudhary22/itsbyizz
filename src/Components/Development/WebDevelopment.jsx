import React, { useEffect } from "react";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

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
    <div className="w-full py-12 px-5">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Web Development
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        Our Web Development services span a wide spectrum, each tailored to meet
        unique client needs.
      </p>

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


      
    </div>
  );
};

export default WebDevelopment;
