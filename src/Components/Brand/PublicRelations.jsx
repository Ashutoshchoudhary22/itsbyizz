<<<<<<< HEAD
import React from "react";
import {
  FaNewspaper,
  FaShieldAlt,
  FaPenNib,
  FaBullhorn,
  FaCalendarCheck,
} from "react-icons/fa";

=======
import React, { useEffect } from "react";
import { FaNewspaper, FaShieldAlt, FaPenNib, FaBullhorn, FaCalendarCheck } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
const PublicRelations = () => {
  const cardsContent = [
    {
      title: "Media Relations",
<<<<<<< HEAD
      description:
        "We build strong media connections to ensure positive brand coverage across various platforms.",
      icon: <FaNewspaper className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Reputation Management",
      description:
        "We monitor and enhance your brand’s image, addressing potential issues proactively.",
      icon: <FaShieldAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Content Creation",
      description:
        "We craft engaging stories, press releases, and blogs to amplify your brand's presence.",
      icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Thought Leadership",
      description:
        "We position you as an industry expert through articles, interviews, and expert insights.",
      icon: <FaBullhorn className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Event PR",
      description:
        "We manage event promotions to maximize engagement, media attention, and brand impact.",
      icon: <FaCalendarCheck className="w-10 h-10 text-green-500" />,
=======
      description: "We build strong media connections to ensure positive brand coverage across various platforms.",
      icon: <FaNewspaper className="w-12 h-12 text-red-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Reputation Management",
      description: "We monitor and enhance your brand’s image, addressing potential issues proactively.",
      icon: <FaShieldAlt className="w-12 h-12 text-blue-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Content Creation",
      description: "We craft engaging stories, press releases, and blogs to amplify your brand's presence.",
      icon: <FaPenNib className="w-12 h-12 text-orange-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Thought Leadership",
      description: "We position you as an industry expert through articles, interviews, and expert insights.",
      icon: <FaBullhorn className="w-12 h-12 text-green-500 bg-gray-200 rounded-full p-2" />,
    },
    {
      title: "Event PR",
      description: "We manage event promotions to maximize engagement, media attention, and brand impact.",
      icon: <FaCalendarCheck className="w-12 h-12 text-purple-500 bg-gray-200 rounded-full p-2" />,
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
    <div className="w-full py-12 px-5 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-20 z-0 animate-pulse"></div>

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-green-600 font-semibold tracking-widest uppercase">
          Public Relations Services
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
          Elevate Your Voice, Amplify Your Impact
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We craft powerful PR campaigns to strengthen credibility, drive media
          exposure, and establish your brand as a trusted leader in the market.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto relative z-10">
        {cardsContent.map((card, index) => (
          <div
            key={index}
<<<<<<< HEAD
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
=======
            className={`bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 card`}
            style={{ animationDelay: `${index * 0.9}s` }}
>>>>>>> 5e52d0c735b0397e5ac3d01eba1c37effa33edb9
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

export default PublicRelations;

