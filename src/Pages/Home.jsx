import React, { useRef } from "react";
import AutoSlider from "../Components/AutoSlider";
import About from "../Components/About";
import DomainList from "../Components/DomainList";
import BookDemo from "../Components/BookDemo";

import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { FaReact, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3  } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const Home = () => {
  const bookDemoRef = useRef(null); // Step 1: Create a reference

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
    { icon: FaCss3 , color: "text-blue-600" },
    { icon: TbBrandJavascript, color: "text-yellow-500" },
    { icon: DiNodejs, color: "text-green-600" },
    { icon: FaReact, color: "text-blue-400" },
    { icon: SiMongodb, color: "text-green-500" },
    { icon: FaJava, color: "text-red-700" },
    { icon: FaPython, color: "text-yellow-600" },
    { icon: SiMysql, color: "text-blue-700" },
    { icon: FaPhp, color: "text-indigo-700" },
    { icon: RiTailwindCssFill, color: "text-blue-500" },
  ]

  return (
    <div>
      <div className="w-full h-72 grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
        <div className="col-span-1">
          <h1 className="text-gray-50 text-5xl font-bold">
            <span className="text-5xl text-green-400">
              Smart IoT & <br />
              Automation
            </span>{" "}
            <br /> for Maximum Efficiency.
          </h1>
        </div>

        <div className="col-span-1">
          <p className="text-gray-200 text-lg p-2">
            ITSYBIZZ delivers smart IoT and real-time automation solutions to
            optimize operations, boost efficiency, and enable data-driven
            decisions. Elevate your industry with our scalable, secure, and
            future-ready technology.
          </p>
          <div className="flex items-center justify-start gap-3">
            <button
              onClick={scrollToBookDemo} // Step 2: Call function on click
              className="text-gray-700 font-semibold flex md:inline-flex px-20 py-2 mt-2 bg-green-400 rounded-full hover:bg-green-500 transition-all ease border border-black items-center hover:text-white"
            >
              <span>Book Demo</span>
            </button>
            <a
              href="#"
              className="text-gray-50 font-semibold flex md:inline-flex px-20 py-2 mt-2 rounded-full hover:text-green-500 transition-all ease border-2 border-gray-400 items-center hover:border-green-500"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* images slider */}
      <div className="w-full h-96 flex items-center justify-center">
        <AutoSlider />
      </div>

      <div className="w-full flex items-center justify-center text-white flex-col">
        <h2 className="text-4xl mb-3 font-semibold">
          We have 80% active users across the nation
        </h2>
        <div className="flex w-full items-center justify-center mt-4">
          {content.map((data, index) => (
            <div key={index} className="flex w-48 flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-green-500">{data.value}+</h1>
              <p className="text-xl text-gray-100 font-semibold">{data.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-20">
        <About />
      </div>

      <div className="w-full mt-20 bg-white">
        <DomainList />
      </div>

      {/* Step 3: Attach ref to BookDemo */}
      <div ref={bookDemoRef}>
        <BookDemo />
      </div>

      <div className="w-full h-auto py-10 bg-gray-100 flex flex-col items-center justify-center gap-5 ">
      <h1 className="text-4xl font-bold mt-10 text-center text-gray-600 mb-5">
       Technologies We Use
      </h1>
      <Marquee speed={50} gradient={false}>
        {techStack.map((tech, index) => (
          <div key={index} className="mx-6 text-7xl">
            <tech.icon className={`${tech.color}`} />
          </div>
        ))}
      </Marquee>
      </div>
    </div>
  );
};

export default Home;
