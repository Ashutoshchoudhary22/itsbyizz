import React from "react";
import { FaPenNib, FaUsers, FaBullhorn, FaHandshake, FaChartLine } from "react-icons/fa";
import{motion} from "framer-motion";

const SocialMedia = () => {
  const cardsContent = [
    {
      title: "Content Creation",
      description: "We craft engaging visuals, videos, and posts for your audience.",
      icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Community Management",
      description: "We interact with followers, respond to messages, and build relationships.",
      icon: <FaUsers className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Social Media Advertising",
      description: "We run targeted ad campaigns to boost visibility and engagement.",
      icon: <FaBullhorn className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Influencer Collaboration",
      description: "We connect brands with influencers to expand reach and credibility.",
      icon: <FaHandshake className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Paid Promotions",
      description: "We optimize social media ads to maximize your return on investment.",
      icon: <FaChartLine className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <div className="w-full py-12 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
        Social Media Marketing
      </h1>
      <p className="text-lg font-semibold text-center text-gray-500 mb-8">
        We help brands engage, grow, and succeed on social media.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {cardsContent.map((data, index) => (
        <motion.div
          key={index}
          className="flex w-48 flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2, // Stagger effect for each box
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h1 className="text-4xl font-bold text-green-500">{data.value}+</h1>
          <p className="text-xl text-gray-100 font-semibold">{data.label}</p>
        </motion.div>
      ))}
      </div>
    </div>
  );
};

export default SocialMedia;

