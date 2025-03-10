import React from "react";
import { useLocation } from "react-router-dom";
import WebDevelopment from "../Components/Development/WebDevelopment";
import WebDesign from "../Components/Development/WebDesign";
import SoftwareDevelopment from "../Components/Development/SoftwareDevelopment";
import AppDevelopment from "../Components/Development/AppDevelopment";
import CRMDevelopment from "../Components/Development/CRMDevelopment";
import WavyScrollText from "../Components/WavyScroll";

const Development = () => {
  // Extract query parameter
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Development";

  // Custom heading and image mapping
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
      image: "software.svg",
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

  // Get title and image based on selected category
  const headerTitle = contentMap[title]?.title || title;
  const imageSrc = contentMap[title]?.image || "/images/default.svg";
  const SelectedComponent = contentMap[title]?.component || null;

  // Split the title into two halves
  const words = headerTitle.split(" ");
  const halfIndex = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, halfIndex).join(" ");
  const secondHalf = words.slice(halfIndex).join(" ");

    
  return (
    <div className="w-full h-auto">
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
        <div className="col-span-1 flex items-center">
        <WavyScrollText highlight={firstHalf} text={secondHalf} />
          
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-80 h-auto"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 p-5">
       
        {SelectedComponent}
      </div>

    </div>
  );
};

export default Development;
