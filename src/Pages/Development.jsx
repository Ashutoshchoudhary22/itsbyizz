import React from "react";
import { useLocation } from "react-router-dom";
import WebDevelopment from "../Components/Development/WebDevelopment";
import WebDesign from "../Components/Development/WebDesign";
import SoftwareDevelopment from "../Components/Development/SoftwareDevelopment";
import AppDevelopment from "../Components/Development/AppDevelopment";
import CRMDevelopment from "../Components/Development/CRMDevelopment";
import WavyScrollText from "../Components/WavyScroll";

const Development = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Development";

  const contentMap = {
    "Web Development": {
      title: "Nurturing Digital Excellence through Web Development",
      image: "web.svg",
      component: <WebDevelopment />
    },
    "Web Design": {
      title: "Crafting Exceptional Website Design Solutions",
      image: "design.svg",
      component: <WebDesign />
    },
    "Software Development": {
      title: "Innovative Software Development for a Smarter Future",
      image: "softwaree.png",
      component: <SoftwareDevelopment />
    },
    "App Development": {
      title: "Pioneering Digital Transformation through Innovative App Development",
      image: "demo.svg",
      component: <AppDevelopment />
    },
    "CRM Development": {
      title: "Elevating Business Relationships through CRM Development Excellence",
      image: "crm.svg",
      component: <CRMDevelopment />
    },
  };

  const headerTitle = contentMap[title]?.title || title;
  const imageSrc = contentMap[title]?.image || "/images/default.svg";
  const SelectedComponent = contentMap[title]?.component || null;

  const words = headerTitle.split(" ");
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(" ");
  const secondHalf = words.slice(halfIndex).join(" ");

  return (
    <div className="w-full h-auto">
      {/* Hero Section */}
      <div className="w-full min-h-[380px] md:h-[480px] relative grid md:grid-cols-2 grid-cols-1 gap-4 px-4 md:px-10 py-10 md:py-24">
        {/* Text */}
        <div className="col-span-1 flex items-center justify-center text-center md:text-left">
          <div className="text-xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            <WavyScrollText highlight={firstHalf} text={secondHalf} />
          </div>
        </div>

        {/* Image */}
        <div className="col-span-1 flex justify-center items-center mt-6 md:mt-0">
          <img
            src={imageSrc}
            alt={title}
            className="w-[350px] h-[250px] md:w-[500px] md:h-[300px] object-contain"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 p-4 md:p-8">
        {SelectedComponent}
      </div>
    </div>
  );
};

export default Development;
