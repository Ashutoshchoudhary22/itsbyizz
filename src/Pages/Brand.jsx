import React from "react";
import { useLocation } from "react-router-dom";

import BrandBuilding from "../Components/Brand/BrandBuilding";
import ORM from "../Components/Brand/ORM";
import PublicRelations from "../Components/Brand/PublicRelations";
import DigitalMarketing from "../Components/Brand/DigitalMarketing";
import InfluenceMarketing from "../Components/Brand/InfluenceMarketing";
import SocialMedia from "../Components/Brand/SocialMedia";
import WavyScrollText from "../Components/WavyScroll";
const Brand = () => {
  // Extract query parameter
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title") || "Brand";

  // Custom heading and image mapping
  const contentMap = {
    "Brand Building": {
      title: " Crafting Legacies Through Brand Building Mastery.",
      image: "brand.png",
      component: <BrandBuilding />
    },
    "ORM": {
      title: "Fortifying Reputations and Safeguarding Trust with Expert ORM",
      image: "https://www.highpulsemedia.com/wp-content/uploads/2020/06/orm.png",
      component: <ORM/>
    },
    "Public Relations": {
      title: "Shaping Positive Narratives and Building Trust Through Expert Public Relations",
      image: "https://static.vecteezy.com/system/resources/previews/010/872/401/non_2x/3d-business-partnership-illustration-png.png",
      component: <PublicRelations/>
    },
    "Digital Marketing": {
      title: "Navigating Digital Frontiers with Mastery in Digital Marketing",
      image: "demo.svg",
      component: <DigitalMarketing/>
    },
    "Influence Marketing": {
      title: "Illuminating Brands through Influencer Marketing Expertise",
      image: "marketing.png",
      component: <InfluenceMarketing/>
    },
    "Social Media Presence": {
      title: "Navigating Digital Frontiers with Mastery in Digital Marketing",
      image: "media.png",
      component: <SocialMedia/>
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
    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 py-10 md:py-24">
      <div className="flex items-center justify-center md:justify-start">
        <div className="text-sm md:text-3xl lg:text-4xl font-semibold leading-snug">
          <WavyScrollText highlight={firstHalf} text={secondHalf} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 md:mt-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-[400px] h-[200px] md:w-[500px] md:h-[300px] object-contain"
        />
      </div>
    </div>

    {/* Services Section */}
    <div className="bg-gray-50 p-5 md:p-8">
      {SelectedComponent}
    </div>
  </div>
);

};

export default Brand;
