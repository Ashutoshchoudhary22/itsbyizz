import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import It from "./task/It";
import Security from "./task/Secuirity";
import HumanResource from "./task/HumanResource";
import CRM from "./task/Crm";
import AppDevelopment from "./task/AppDev";
import Finance from "./task/Finance";

import gsap from 'gsap';
import "../Css/SliderAnimation.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
// const categories = [
//   { name: "IT", component: <It /> },
//   { name: "Security", component: <Security /> },
//   { name: "Human Resources", component: <HumanResource /> },
//   { name: "CRM", component: <CRM /> },
//   { name: "App Development", component: <AppDevelopment /> },
//   { name: "Finance & Supply Chain", component: <Finance /> },
// ];

const TabBar = () => {


  const [activeModal, setActiveModal] = useState(null)


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

  // const [activeTab, setActiveTab] = useState(categories[0].name);
  // const activeCategory = categories.find((category) => category.name === activeTab);

  return (
    <div className="w-full relative">

      <svg
        width="100%"
        height="60vh"
        viewBox="50 10 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="draw-path"
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



      <div className="fade-in-content  opacity-0 transition-opacity duration-200">
        <div
          id="all-cercle"
          className="absolute top-[80px] w-full px-10 text-white text-center space-y-10 z-50"
        >

          <div className="flex justify-around">

            <button onClick={() => setActiveModal("IT")} id="first-cercle" className="flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">IT</p>
            </button>


            <button onClick={() => setActiveModal("CRM")} id="sec-cercle" className="flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">CRM</p>
            </button >
          </div>


          <div className="flex justify-around">

            <button onClick={() => setActiveModal("Security And Risk")} id="third-cercle" className=" relative right-35 top-10 flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">Security and Risk</p>
            </button>


            <button onClick={() => setActiveModal("Finance and Supply")} id="fourth-cercle" className="  relative left-48 flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">Finance and Supply</p>
            </button >
          </div>

          <div className="flex justify-around relative top-40">

            <button onClick={() => setActiveModal("Human Resources")} id="five-cercle" className="flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">Human Resources</p>
            </button>


            <button onClick={() => setActiveModal("App Development")} id="six-cercle" className="flex flex-col items-center space-y-2">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-400">
                <div className="w-[30px] h-[30px] rounded-full bg-white border border-white"></div>
              </div>
              <p className="text-sm">App Development</p>
            </button >
          </div>
        </div>

        <div
          id="first-text"
          className="absolute  w-full text-center -top-5"
        >
          <h1 className="text-[40px] font-bold text-white leading-tight">
            <span className="text-[#62D84E]">The AI platform</span> <br />
            for business transformation
          </h1>
        </div>


        <div
          id="first-container"
          className="absolute top-[12rem] left-[40rem] transform -translate-x-1/2 w-[60%]"
        >
          <div className="flex justify-between items-center">

            <div>
              <img
                id="img1"
                src="/menLogo.avif"
                alt="Employees"
                className="w-[200px]"
              />
              <div
                id="img-text1"
                className="relative top-[-35px] mx-auto w-fit px-4 py-1 border border-blue-500 bg-blue-900 rounded-full text-white text-[16px]"
              >
                Employees
              </div>
            </div>
            <div className="relative -top-3 left-1">
              <p
                id="text-2"
                className="text-stroke text-[40px] text-center font-extrabold leading-tight"
              >
                <span className="text-[60px] ">AI</span>
                <br />
                AGENTS
              </p>
            </div>

            <div>
              <img
                id="img2"
                src="/womenLogo.avif"
                alt="Customers"
                className="w-[200px]"
              />
              <div
                id="img-text2"
                className="relative top-[-35px] mx-auto w-fit px-4 py-1 border border-blue-500 bg-blue-900 rounded-full text-white text-[16px]"
              >
                Customers
              </div>
            </div>
          </div>
        </div>


      </div>

      <AnimatePresence>
        {
          activeModal === "IT" && <It show={true} onClose={() => setActiveModal(null)} />
        }
        {
          activeModal === "CRM" && < CRM show={true} onClose={() => setActiveModal(null)} />
        }
        {
          activeModal === "Security And Risk" && < Security show={true} onClose={() => setActiveModal(null)} />
        }
        {
          activeModal === "Human Resources" && < HumanResource show={true} onClose={() => setActiveModal(null)} />
        }
        {
          activeModal === "App Development" && < AppDevelopment show={true} onClose={() => setActiveModal(null)} />
        }
        {
          activeModal === "Finance and Supply" && < Finance show={true} onClose={() => setActiveModal(null)} />
        }
      </AnimatePresence>
    </div>

  );
};


export default TabBar;





