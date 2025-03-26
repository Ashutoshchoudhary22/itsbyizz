import React, { useEffect, useRef } from "react";
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
import Loop from "../Components/Loop";
import RevealWrapper from "../Components/RevealWrapper";

const Home = () => {
  const bookDemoRef = useRef(null);

  const scrollToBookDemo = () => {
    if (bookDemoRef.current) {
      bookDemoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = [
    { value: 100, label: "Finished Projects" },
    { value: 30, label: "Created Jobs" },
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
    <div>
      {/* Hero Section */}
      <div className="w-full h-auto md:h-72 grid md:grid-cols-2 gap-4 px-5 py-12 md:py-24">
        <div className="col-span-1 flex flex-col justify-center">
          <WavyScrollText
            highlight="Smart IoT & Automation"
            text="for Maximum Efficiency."
          />
        </div>

        <div className="col-span-1 flex flex-col justify-center">
          <p className="text-gray-200 text-lg p-2">
            ITSYBIZZ delivers smart IoT and real-time automation solutions to
            optimize operations, boost efficiency, and enable data-driven
            decisions. Elevate your industry with our scalable, secure, and
            future-ready technology.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 mt-4">
            <button
              onClick={scrollToBookDemo}
              className="text-gray-700 font-semibold px-8 py-2 md:px-20 bg-green-400 rounded-full hover:bg-green-500 transition-all ease border border-black hover:text-white"
            >
              <span>Book Demo</span>
            </button>
            <a
              href="#"
              className="text-gray-50 font-semibold px-8 py-2 md:px-20 rounded-full hover:text-green-500 transition-all ease border-2 border-gray-400 hover:border-green-500"
            >
              <NavLink to="contact-us">Contact Us</NavLink>
            </a>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full h-96 flex items-center justify-center">
        <AutoSlider />
      </div>

      {/* Stats Section */}
      <div className="w-full flex items-center justify-center text-white flex-col py-12">
        <h2 className="text-3xl md:text-4xl mb-3 font-semibold text-center">
          We have 80% active users across the nation
        </h2>
        <div className="flex flex-col md:flex-row w-full items-center justify-center mt-4 gap-8">
          {content.map((data, index) => (
            <div
              key={index}
              className="flex w-48 flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-bold text-green-500">
                {data.value}+
              </h1>
              <p className="text-xl text-gray-100 font-semibold text-center">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="w-full mt-20">
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
      <div className="w-full h-auto py-10 bg-gray-100 flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl md:text-4xl font-bold mt-10 text-center text-gray-600 mb-5">
          Technologies We Use
        </h1>
        <Marquee speed={50} gradient={false}>
          {techStack.map((tech, index) => (
            <div key={index} className="mx-6 text-5xl md:text-7xl">
              <tech.icon className={`${tech.color}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;