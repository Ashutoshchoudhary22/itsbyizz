import React, { useRef } from "react";
import AutoSlider from "../Components/AutoSlider";
import About from "../Components/About";
import DomainList from "../Components/DomainList";
import BookDemo from "../Components/BookDemo";
import ScrollReveal from "scrollreveal";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaReact, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import WavyScrollText from "../Components/WavyScroll";
import { NavLink } from "react-router-dom";
import RevealWrapper from "../Components/RevealWrapper";
import Slider from "./Slider";

const Home = () => {
  const bookDemoRef = useRef(null);

  const scrollToBookDemo = () => {
    if (bookDemoRef.current) {
      bookDemoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = [
    { value: 100, label: "Finished Projects" },
    { value: 30, label:(<><span>Created</span><br/><span>Jobs</span></>) },
    { value: 90, label: "Happy Customers" },
  ];

  const techStack = [
    { icon: FaHtml5, color: "text-orange-600" }, 
    { icon: FaCss3, color: "text-blue-600" },
    { icon: TbBrandJavascript, color: "text-yellow-500" },
    { icon: DiNodejs, color: "text-green-600" },
    { icon: FaReact, color: "text-blue-400" },
    { icon: SiMongodb, color: "text-green-500" },
    { icon: FaJava, color: "text-red-700" },
    { icon: FaPython, color: "text-yellow-600" },
    { icon: SiMysql, color: "text-blue-700" },
    { icon: FaPhp, color: "text-indigo-700" },
    { icon: RiTailwindCssFill, color: "text-blue-500" },
  ];
  
  return (
    <div className="w-full  ">
      {/* Hero Section */}
      <div className="  bg-[#053d5e] max-w-screen-2xl  md:mx-4 rounded-b-xl  py-16 grid gap-2 md:grid-cols-2 pb-20">
        <div className="flex flex-col justify-center text-xl md:text-3xl lg:text-4xl px-4 md:px-8 " >
          <WavyScrollText
            highlight="ITSYBIZZ – Powered by Deepnap Softech,"
            text="Smart Digital Solutions in Software"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <p className="text-gray-200 text-base md:text-lg p-4 md:p-2 ">
            ITSYBIZZ, powered by Deepnap Softech, is a leading digital solutions
            company offering a wide range of services including Software
            Development, Mobile App Development, Website Development, AI,
            Blockchain Development, Game Development, and IoT Solutions. We also
            specialize in Brand Building and delivering Ready-to-Use Software like
            CRM, HRM, and Production Automation Suites (B2B & B2C).
          </p>
          <div className="flex  md:flex-row items-center justify-start gap-5 mt-4 ml-3 md:ml-2">
            <button
              onClick={scrollToBookDemo}
              className="text-gray-700 font-semibold px-8 py-2 md:px-14 bg-green-400 rounded-full hover:bg-green-500 transition-all ease border  hover:text-white"
            >
              Book A Demo
            </button>
            <NavLink to="/contact-us">
              <span className="text-gray-50 font-semibold px-8 py-2 rounded-full hover:text-green-500 transition-all ease border-2 border-gray-400 hover:border-green-500 w-full sm:w-auto inline-block text-center">
                Contact Us
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-screen-xl mx-auto px-2">
        <AutoSlider />
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center text-white flex-col px-2 py-12">
        <h2 className="text-2xl md:text-4xl mb-6 font-semibold text-center">
          We have 80% active users across the nation
        </h2>
        <div className="flex  sm:flex-row items-center justify-center  md:gap-10 mb-10 ">
          {content.map((data, index) => (
            <div
              key={index}
              className="flex w-32 flex-col items-center justify-center"
            >
              <h1 className=" text-xl md:text-4xl font-bold text-green-500">
                {data.value}+
              </h1>
              <p className="text-lg text-gray-100 font-semibold text-center">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <Slider />
      </div>

      {/* About Section */}
      <div className="w-full mt-20 max-w-screen-xl mx-auto px-4">
        {/* <About /> */}
        {/* <Loop /> */}
      </div>

      {/* Domain List Section */}
      <div className="w-full bg-white">
        <DomainList />
      </div>

      {/* Book Demo Section */}
      <div ref={bookDemoRef}>
        <BookDemo />
      </div>

      {/* Tech Stack Section */}
      <div className="w-full py-12 bg-gray-100 flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-600">
          Technologies We Use
        </h1>
        <Marquee speed={50} gradient={false}>
          {techStack.map((tech, index) => (
            <div key={index} className="mx-4 text-4xl md:text-6xl">
              <tech.icon className={`${tech.color}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
