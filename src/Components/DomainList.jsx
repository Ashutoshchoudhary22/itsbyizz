import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { IoIosBusiness } from "react-icons/io";
import { FaClinicMedical } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";

const DomainList = () => {
  const domains = [
    { icon: IoIosBusiness, label: "B2B & B2C", color: "text-orange-500" },
    { icon: FaClinicMedical, label: "Medical", color: "text-green-800" },
    { icon: RiShoppingBag4Fill, label: "E-commerce", color: "text-purple-800" },
    { icon: FaBookOpenReader, label: "Education", color: "text-sky-600" },
    { icon: TbPigMoney, label: "Finance", color: "text-stone-900" },
    { icon: FaHospital, label: "Hospital", color: "text-blue-700" },
    { icon: RiHotelFill, label: "Hotel", color: "text-teal-900" },
    { icon: LiaIndustrySolid, label: "Industries", color: "text-rose-900" },
  ];

  const cardData = [
    {
      icon: FaPaintBrush,
      label: "Branding Elegance",
      content:
        "Your website is your brand's identity. We craft every detail—colors, typography, and design—to ensure a cohesive and memorable experience.",
    },
    {
      icon: MdOutlinePeopleAlt,
      label: "User-Centric Intuition",
      content:
        "We design intuitive interfaces that seamlessly guide visitors, turning casual browsers into engaged users.",
    },
    {
      icon: GiBrain,
      label: "Design-Driven Functionality",
      content:
        "We use visual storytelling to create lasting emotional connections through strategic graphics and imagery.",
    },
    {
      icon: MdOutlineMobileFriendly,
      label: "User Experience Elevation",
      content:
        "We blend captivating design with seamless functionality, crafting user interactions that drive engagement effortlessly.",
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
    <div className="w-full p-4 text-center">
      <h1 className="text-4xl font-bold mt-10 text-gray-600">
        One Platform, Every Industry.
      </h1>
      {/* Industry Categories */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 border border-gray-200 px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-green-100 hover:border-green-400"
          >
            {/* Circular Icon Container */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
              <domain.icon className={`text-lg ${domain.color}`} />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {domain.label}
            </span>
          </div>
        ))}
      </div>

      {/* Responsive Cards */}
      <div className="mt-10  mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-5 border card border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="flex items-center justify-center w-14 h-14 mt-5 rounded-full bg-green-100 mx-auto">
              <card.icon className="text-2xl text-gray-700" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {card.label}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainList;
