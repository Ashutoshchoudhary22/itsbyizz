import React from "react";
import { useLocation } from "react-router-dom";

import BrandBuilding from "../Components/Brand/BrandBuilding";
import ORM from "../Components/Brand/ORM";
import PublicRelations from "../Components/Brand/PublicRelations";
import DigitalMarketing from "../Components/Brand/DigitalMarketing";
import InfluenceMarketing from "../Components/Brand/InfluenceMarketing";
import SocialMedia from "../Components/Brand/SocialMedia";

const Brand = () => {
  // Extract query parameter
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Brand";

  // Custom heading and image mapping
  const contentMap = {
    "Brand Building": {
      title: " Crafting Legacies Through Brand Building Mastery",
      image: "brand.png",
      component: <BrandBuilding />
    },
    "ORM": {
      title: "Fortifying Reputations and Safeguarding Trust with Expert ORM",
      image: "orm.png",
      component: <ORM />
    },
    "Public Relations": {
      title: "Shaping Positive Narratives and Building Trust Through Expert Public Relations",
      image: "software.svg",
      component: <PublicRelations />
    },
    "Digital Marketing": {
      title: "Navigating Digital Frontiers with Mastery in Digital Marketing",
      image: "demo.svg",
      component: <DigitalMarketing />
    },
    "Influence Marketing": {
      title: "Illuminating Brands through Influencer Marketing Expertise",
      image: "marketing.png",
      component: <InfluenceMarketing />
    },
    "Social Media Presence": {
      title: "Navigating Digital Frontiers with Mastery in Digital Marketing",
      image: "media.png",
      component: <SocialMedia />
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
          <h1 className="text-5xl font-bold">
            <span className="text-green-500">{firstHalf} </span>
            <span className="text-white text-4xl">{secondHalf}</span>
          </h1>
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

export default Brand;
