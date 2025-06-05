import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import It from "./task/It";
import Security from "./task/Secuirity";
import HumanResource from "./task/HumanResource";
import CRM from "./task/Crm";
import AppDevelopment from "./task/AppDev";
import Finance from "./task/Finance";

import gsap from "gsap";
import "../Css/SliderAnimation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const TabBar = () => {
  const [activeModal, setActiveModal] = useState(null);
  gsap.set(".fade-in-content", { opacity: 1 });

  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".draw-path ",
      start: "top 30%",
      end: "top 0%",
      scrub: true,


      // markers:true,
      onEnter: () => {
        gsap.to(".fade-in-content", { opacity: 1, duration: 1.5 });
        gsap.from("#img1,#img2,#img-text1,#img-text2", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 1,
          ease: "power2.out"
        });
        gsap.from("#first-text", {
          y: -40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
        gsap.from("#text-2", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 1,
          ease: "power2.out"
        });
        gsap.from("#first-cercle", {
          x: -100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#sec-cercle", {
          x: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#third-cercle", {
          x: -100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#fourth-cercle", {
          x: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#five-cercle", {
          y: 100,
          duration: 1,
          opacity: 0
        })
        gsap.from("#six-cercle", {
          y: 100,
          duration: 1,
          opacity: 0
        })
      },
      onLeaveBack: () => {
        gsap.to(".fade-in-content", { opacity: 0, duration: 0.3 });
      }
    });

    gsap.fromTo(
      ".draw-path path",
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".draw-path",
          start: "top 40%",
          end: "top 0%",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = document.querySelector(".draw-path");

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.1;

      if (inView) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(() => {
    const element = document.querySelector(".draw-path");
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.1;

      if (inView) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CircleDot = () => (
    <div className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-white/50">
      <div className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] rounded-full bg-white border border-white"></div>
    </div>
  );

  return (
    <div className="w-full relative">
      <div className="pt-5 pb-16"></div>
      <svg
        width="100%"
        height="80vh"
        viewBox="50 10 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="draw-path w-full max-[800px]:h-[24vh]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="30%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3333FF" />
            <stop offset="25%" stopColor="#26BD4C" />
            <stop offset="50%" stopColor="#26BD4C" />
            <stop offset="75%" stopColor="#254299" />
            <stop offset="100%" stopColor="#3333FF" />
          </linearGradient>
        </defs>
        <g transform="scale(8,5) translate(1, 1)">
          <path
            d="M5.63636 16C2.90909 16 2 14 2 12C2 10 2.90909 8 5.63636 8C9.27273 8 14.7273 16 18.3636 16C21.0909 16 22 14 22 12C22 10 21.0909 8 18.3636 8C14.7273 8 9.27273 16 5.63636 16Z"
            stroke="url(#myGradient)"
            strokeWidth="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, -6) scale(1, 1.5)"
          />
        </g>
      </svg>

      <div className="fade-in-content opacity-0 transition-opacity duration-200">
        <div
          id="all-cercle"
          className="absolute md:top-[120px] top-[100px] w-full px-10 mb-10 text-white text-center"
        >
          {/* First row */}
          <div className="flex justify-around md:pt-1">
            <button
              onClick={() => setActiveModal("IT")}
              id="first-cercle"
              className="flex flex-col items-center space-y-2"
            >
              <p className="text-[12px] md:text-sm">IT</p>
              <CircleDot />
            </button>

            <button
              onClick={() => setActiveModal("CRM")}
              id="sec-cercle"
              className="flex flex-col items-center space-y-2 pt-2 md:pt-1 pl-10 md:pl-1"
            >
              <p className="text-[12px] md:text-sm">CRM</p>
              <CircleDot />
            </button>
          </div>

          {/* Second row */}
          <div className="flex justify-around">
            <button
              onClick={() => setActiveModal("Security And Risk")}
              id="third-cercle"
              className="relative right-24 md:right-40 top-10 md:top-32 flex flex-col items-center space-y-2"
            >
              <CircleDot />
              <p className="text-[12px] md:text-sm">Security &<br /> Risk</p>
            </button>

            <button
              onClick={() => setActiveModal("Finance and Supply")}
              id="fourth-cercle"
              className="relative left-[100px] md:left-52 top-10 md:top-32 flex flex-col items-center space-y-2"
            >
              <CircleDot />
              <p className="text-[10px] md:text-sm">Finance<br />& Supply</p>
            </button>
          </div>

          {/* Third row */}
          <div className="flex justify-around relative mb-10 md:mb-0 top-6 md:top-64">
            <button
              onClick={() => setActiveModal("Human Resources")}
              id="five-cercle"
              className="flex flex-col items-center space-y-2"
            >
              <CircleDot />
              <p className="text-[12px] md:text-sm">Human Resources</p>
            </button>

            <button
              onClick={() => setActiveModal("App Development")}
              id="six-cercle"
              className="flex flex-col items-center space-y-2"
            >
              <CircleDot />
              <p className="text-[12px] md:text-sm">App Development</p>
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className="absolute w-full text-center top-2 md:-top-5">
          <h1 className="text-[18px] sm:text-[22px] md:text-[40px] font-bold text-white leading-tight">
            <span className="text-[#62D84E]">The AI platform</span> <br />
            <span className="text-[20px] md:text-[25px]">for business transformation</span>
          </h1>
        </div>

        {/* Center section with Employees, AI, Customers */}
        <div
          id="first-container"
          className="absolute top-[11rem] md:top-[16rem] left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[80%] md:w-[65%] lg:w-[60%]"
        >
          <div className="flex flex-row justify-between items-center gap-4 w-full">
            {/* Employees */}
            <div className="flex flex-col items-center">
              <img
                id="img1"
                src="/menLogo.avif"
                alt="Employees"
                className="w-[80px] sm:w-[100px] md:w-[160px] lg:w-[200px] md:block hidden"
              />
              <div
                id="img-text1"
                className="mt-2 px-3 py-1 border border-blue-500 bg-blue-900 rounded-full text-white text-[10px] sm:text-[12px] md:text-[16px]"
              >
                Employees
              </div>
            </div>

            {/* AI AGENTS */}
            <div className="text-center px-2">
              <p
                id="text-2"
                className="text-stroke font-extrabold leading-tight text-[18px] sm:text-[32px] md:text-[40px]"
              >
                <span className="text-[25px] sm:text-[48px] md:text-[60px]">AI</span>
                <br />
                AGENTS
              </p>
            </div>

            {/* Customers */}
            <div className="flex flex-col items-center">
              <img
                id="img2"
                src="/womenLogo.avif"
                alt="Customers"
                className="w-[80px] sm:w-[100px] md:block hidden md:w-[160px] lg:w-[200px]"
              />
              <div
                id="img-text2"
                className="mt-2 px-3 py-1 border border-blue-500 bg-blue-900 rounded-full text-white text-[10px] sm:text-[12px] md:text-[16px]"
              >
                Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AnimatePresence Modals */}
      <AnimatePresence>
        {activeModal === "IT" && <It show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "CRM" && <CRM show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Security And Risk" && <Security show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Human Resources" && <HumanResource show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "App Development" && <AppDevelopment show={true} onClose={() => setActiveModal(null)} />}
        {activeModal === "Finance and Supply" && <Finance show={true} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </div>
  );

}

export default TabBar;
