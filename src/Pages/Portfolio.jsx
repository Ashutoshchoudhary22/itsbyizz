import React, { useEffect, useState } from "react";
import WavyScrollText from "../Components/WavyScroll";
import RevealWrapper from "../Components/RevealWrapper";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("B2B");

  const products = {
    B2B: [
      {
        title: "JHEV Motors",
        img: "https://itsybizz.com/assets/port1-BelGnRC3.png",
      },
      {
        title: "Shivshakti Aluminium",
        img: "https://itsybizz.com/assets/port5-wuzzEP2D.png",
      },
      { title: "Ksec", img: "https://itsybizz.com/assets/port6-v1YFQOwl.png" },
      {
        title: "Mic N Melon",
        img: "https://itsybizz.com/assets/port8-uMuYPj1B.png",
      },
      {
        title: "Tuindestries",
        img: "https://itsybizz.com/assets/port9-MLYEjASM.png",
      },
      {
        title: "Shiv Art",
        img: "https://itsybizz.com/assets/shivart-Iaowi91I.jpeg",
      },
      {
        title: "Tyoharwala",
        img: "https://itsybizz.com/assets/tyor-fvRAlMa7.jpeg",
      },
      {
        title: "Code Seeker",
        img: "https://itsybizz.com/assets/codeseekr-ZJ_dH3vE.jpeg",
      },
      {
        title: "Star Son",
        img: "https://itsybizz.com/assets/starson-QH_7PmrA.jpeg",
      },
      {
        title: "AFS Deals",
        img: "https://itsybizz.com/assets/port2-DcxdaKXH.png",
      },
      {
        title: "Aggarwal Caterer",
        img: "https://itsybizz.com/assets/port4-NNclumCG.png",
      },
      {
        title: "Star Motors",
        img: "https://itsybizz.com/assets/port7-fkHjhbSV.png",
      },
      {
        title: "Kripa Creations",
        img: "https://itsybizz.com/assets/kripa-AMYKLt7o.jpeg",
      },
    ],
    B2C: [
      {
        title: "Krishna Labels",
        img: "https://itsybizz.com/assets/finance2-CMQ71K8o.jpeg",
      },
    ],
    Finance: [
      {
        title: "GR-Finance",
        img: "https://itsybizz.com/assets/grfinance-xIkzopEE.jpeg",
      },
      {
        title: "Finance",
        img: "https://itsybizz.com/assets/finance2-CMQ71K8o.jpeg",
      },
    ],
    Ecommerce: [
      {
        title: "AFS Deals",
        img: "https://itsybizz.com/assets/port2-DcxdaKXH.png",
      },
      {
        title: "Kripa Creations",
        img: "https://itsybizz.com/assets/kripa-AMYKLt7o.jpeg",
      },
      {
        title: "Tyoharwala",
        img: "https://itsybizz.com/assets/tyor-fvRAlMa7.jpeg",
      },
      {
        title: "KFS Fitness",
        img: "https://itsybizz.com/assets/port2-DcxdaKXH.png",
        
      },
    ],
    Hospital: [
      {
        title: "Doctris",
        img: "https://itsybizz.com/assets/doctroAppointmnet-59_UtTuV.jpeg",
      },
      {
        title: "Medicare",
        img: "https://itsybizz.com/assets/healthyheart-7oARfZSp.jpeg",
      },
      {
        title: "Clinic",
        img: "https://itsybizz.com/assets/takecare-96z_xUB_.jpeg",
      },
      {
        title: "Dr.Patterson",
        img: "https://itsybizz.com/assets/drpaterson-8Ygyob60.jpeg",
      },
    ],
    Hotel: [
      {
        title: "Hotel Booking",
        img: "https://itsybizz.com/assets/hotel3-_0etIQDc.jpeg",
      },
      {
        title: "Hotel Booking",
        img: "https://itsybizz.com/assets/hotel4-gpeihLjT.jpeg",
      },
    ],
    Industries: [
      {
        title: "Tuindestries",
        img: "https://itsybizz.com/assets/port9-MLYEjASM.png",
      },
      {
        title: "Shiv Art",
        img: "https://itsybizz.com/assets/shivart-Iaowi91I.jpeg",
      },
      { title: "Ksec", img: "https://itsybizz.com/assets/port6-v1YFQOwl.png" },
    ],
    Education: [
      {
        title: "Educator",
        img: "https://itsybizz.com/assets/educator-iNap87vx.jpeg",
      },
      {
        title: "Eduma",
        img: "https://itsybizz.com/assets/LearnPress-ZYfJCs9i.jpeg",
      },
      {
        title: "Code Seeker",
        img: "https://itsybizz.com/assets/codeseekr-ZJ_dH3vE.jpeg",
      },
      {
        title: "Esquareeduwing Pvt. Ltd.",
        img: "https://itsybizz.com/assets/port3-cxLQtVoe.png",
      },
    ],
    SocialMedia: [
      {
        title: "Vinod Bhati",
        img: "https://itsybizz.com/assets/vbf-8c4BGq_S.jpeg",
      },
      {
        title: "Aggarwal Caterer",
        img: "https://itsybizz.com/assets/AGG-rw1mH0xJ.jpeg",
      },
    ],
  };

  return (
    <div className="w-full h-auto ">
      {/* Header Section */}
      <div className="w-full  grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
      <div className="flex space-x-2 items-center">
      <WavyScrollText
  highlight=" Our Products & "
  text="Our Work Speaks Louder Than Words : Explore&nbsp;Our&nbsp;Digital&nbsp;Creations"
/>




</div>

        <div className="col-span-1 flex justify-center items-center">
          <img
            src="/portfolio.png"
            alt="Products & Solutions"
            className="w-80 h-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Tabs Section */}
        <div className="w-full mb-5 flex justify-center gap-8 border-b border-gray-300">
          {Object.keys(products).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 mt-5 text-lg font-semibold transition-all ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-500"
                  : "text-gray-600 hover:text-green-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Section */}
        <div className="w-full flex flex-wrap justify-center gap-6 pb-5">
          {products[activeTab].map((product, index) => (
            <RevealWrapper key={index}>
              <div className="bg-white shadow-lg rounded-lg p-4  w-62 text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-40 h-auto mx-auto"
                />
                <h3 className="text-lg font-semibold mt-2 text-gray-800">
                  {product.title}
                </h3>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
