import React, { useEffect } from "react";
import { FaNewspaper, FaShieldAlt, FaPenNib, FaBullhorn, FaCalendarCheck } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const PublicRelations = () => {
  const cardsContent = [
    {
      title: "Media Relations",
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
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Public Relations
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We craft impactful PR strategies to enhance brand presence and credibility.
      </p>

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

export default PublicRelations;
