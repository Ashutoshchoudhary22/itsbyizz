import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import It from "./task/It";
import Security from "./task/Secuirity";
import HumanResource from "./task/HumanResource";
import CRM from "./task/Crm";
import AppDevelopment from "./task/AppDev";
import Finance from "./task/Finance";
import { FaRocket, FaShieldAlt, FaUsers, FaMobile, FaChartLine, FaCogs } from "react-icons/fa";

import gsap from "gsap";
import "../Css/SliderAnimation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Add custom styles for animations
const customStyles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .glow-effect {
    box-shadow: 0 0 20px rgba(98, 216, 78, 0.3);
  }

  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(98, 216, 78, 0.5);
  }

  /* Mobile-specific styles */
  @media (max-width: 768px) {
    .mobile-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 1rem;
    }
    
    .mobile-service-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

const TabBar = () => {
  const [activeModal, setActiveModal] = useState(null);
  gsap.set(".fade-in-content", { opacity: 1 });

  const serviceData = [
    {
      id: "IT",
      title: "IT",
      icon: FaCogs,
      color: "from-blue-500 to-cyan-500",
      description: "Information Technology"
    },
    {
      id: "CRM",
      title: "CRM",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
      description: "Customer Relationship"
    },
    {
      id: "Security And Risk",
      title: "Security & Risk",
      icon: FaShieldAlt,
      color: "from-red-500 to-pink-500",
      description: "Security Management"
    },
    {
      id: "Finance and Supply",
      title: "Finance & Supply",
      icon: FaChartLine,
      color: "from-purple-500 to-indigo-500",
      description: "Financial Solutions"
    },
    {
      id: "Human Resources",
      title: "Human Resources",
      icon: FaUsers,
      color: "from-orange-500 to-yellow-500",
      description: "HR Management"
    },
    {
      id: "App Development",
      title: "App Development",
      icon: FaMobile,
      color: "from-teal-500 to-green-500",
      description: "Mobile Applications"
    }
  ];
  
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".draw-path ",
      start: "top 30%",
      end: "top 0%",
      scrub: true,

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

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const CircleDot = ({ service, isActive }) => (
    <motion.div 
      className={`w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 ${isActive ? 'glow-effect' : 'hover-glow'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] md:w-[30px] md:h-[30px] rounded-full bg-white border-2 border-white shadow-inner"></div>
    </motion.div>
  );

  // Mobile Service Card Component
  const MobileServiceCard = ({ service, isActive }) => (
    <motion.button
      onClick={() => setActiveModal(service.id)}
      className="mobile-service-card group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center space-y-2">
        <CircleDot service={service} isActive={isActive} />
        <p className="text-[10px] sm:text-[12px] font-medium text-white group-hover:text-green-400 transition-colors duration-300 text-center">
          {service.title}
        </p>
      </div>
    </motion.button>
  );

  return (
    <div className="w-full relative overflow-hidden min-h-screen max-w-[2480px] mx-auto">


      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>

      <div className="pt-5 pb-16 2xl:pt-8 2xl:pb-24 relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <motion.div 
            className="text-center px-4 pt-8 pb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[24px] sm:text-[28px] font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                The AI platform
              </span> <br />
              <span className="text-[18px] sm:text-[20px] bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                for business transformation
              </span>
            </h1>
          </motion.div>

          {/* Mobile Services Grid */}
          <div className="mobile-grid">
            {serviceData.map((service) => (
              <MobileServiceCard 
                key={service.id} 
                service={service} 
                isActive={activeModal === service.id} 
              />
            ))}
          </div>

          {/* Mobile Center Section */}
          <motion.div 
            className="flex flex-col items-center space-y-4 mt-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Employees */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/menLogo.avif"
                alt="Employees"
                className="w-[60px] sm:w-[80px] rounded-full border-3 border-blue-500 shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white text-[10px] sm:text-[12px] font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Employees
              </motion.div>
            </motion.div>

            {/* AI AGENTS */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-stroke font-extrabold leading-tight text-[24px] sm:text-[28px]">
                <span className="text-[32px] sm:text-[36px] bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  AI
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  AGENTS
                </span>
              </p>
            </motion.div>

            {/* Customers */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/womenLogo.avif"
                alt="Customers"
                className="w-[60px] sm:w-[80px] rounded-full border-3 border-purple-500 shadow-lg"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white text-[10px] sm:text-[12px] font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Customers
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <svg
            width="100%"
            viewBox="50 10 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="draw-path w-full h-[60vh]"
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
              className="absolute top-[120px] w-full px-10 mb-10 text-white text-center"
            >
              {/* First row */}
              <div className="flex justify-around pt-1">
                <motion.button
                  onClick={() => setActiveModal("IT")}
                  id="first-cercle"
                  className="flex flex-col items-center space-y-2 group -mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[0].title}
                  </p>
                  <CircleDot service={serviceData[0]} isActive={activeModal === "IT"} />
                </motion.button>

                <motion.button
                  onClick={() => setActiveModal("CRM")}
                  id="sec-cercle"
                  className="flex flex-col items-center space-y-2 mb-2 pt-1 pl-1 group -mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[1].title}
                  </p>
                  <CircleDot service={serviceData[1]} isActive={activeModal === "CRM"} />
                </motion.button>
              </div>

              {/* Second row */}
              <div className="flex justify-around">
                <motion.button
                  onClick={() => setActiveModal("Security And Risk")}
                  id="third-cercle"
                  className="relative right-30 top-32 flex flex-col items-center space-y-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CircleDot service={serviceData[2]} isActive={activeModal === "Security And Risk"} />
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[2].title.split('&')[0]}<br />& {serviceData[2].title.split('&')[1]}
                  </p>
                </motion.button>

                <motion.button
                  onClick={() => setActiveModal("Finance and Supply")}
                  id="fourth-cercle"
                  className="relative left-40 top-32 flex flex-col items-center space-y-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CircleDot service={serviceData[3]} isActive={activeModal === "Finance and Supply"} />
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[3].title.split('&')[0]}<br />& {serviceData[3].title.split('&')[1]}
                  </p>
                </motion.button>
              </div>

              {/* Third row */}
              <div className="flex justify-around relative mb-0 top-38">
                <motion.button
                  onClick={() => setActiveModal("Human Resources")}
                  id="five-cercle"
                  className="flex flex-col items-center space-y-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CircleDot service={serviceData[4]} isActive={activeModal === "Human Resources"} />
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[4].title}
                  </p>
                </motion.button>

                <motion.button
                  onClick={() => setActiveModal("App Development")}
                  id="six-cercle"
                  className="flex flex-col items-center space-y-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CircleDot service={serviceData[5]} isActive={activeModal === "App Development"} />
                  <p className="text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    {serviceData[5].title}
                  </p>
                </motion.button>
              </div>
            </div>

            {/* Enhanced Heading */}
            <motion.div 
              className="absolute w-full text-center top-12 lg:top-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[40px] font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  The AI platform
                </span> <br />
                <span className="text-[25px] bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  for business transformation
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Center section with Employees, AI, Customers */}
            <div
              id="first-container"
              className="absolute top-[12rem] left-1/2 transform -translate-x-1/2 w-[65%] lg:w-[60%]"
            >
              <div className="flex flex-row justify-between mb-16 items-center gap-4 w-full">
                {/* Employees */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                   
                  <motion.img
                    id="img1"
                    src="/menLogo.avif"
                    alt="Employees"
                    className="w-[160px] lg:w-[170px] rounded-full border-4 border-blue-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                   <motion.div
                    id="img-text1"
                    className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white text-[16px] font-medium shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    Employees
                  </motion.div>
                
                </motion.div>

                {/* AI AGENTS */}
                <motion.div 
                  className="text-center px-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p
                    id="text-2"
                    className="text-stroke  font-extrabold leading-tight text-[40px]"
                  >
                    <span className="text-[60px]   bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                      AI
                    </span>
                    <br />
                    <span className="bg-gradient-to-r  from-white to-gray-200 bg-clip-text text-transparent">
                      AGENTS
                    </span>
                  </p>
                </motion.div>

                {/* Customers */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  
                  <motion.img
                    id="img2"
                    src="/womenLogo.avif"
                    alt="Customers"
                    className="w-[160px] lg:w-[180px] rounded-full border-4 border-purple-500 shadow-lg"
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                    <motion.div
                    id="img-text2"
                    className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-white text-[16px] font-medium shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    Customers
                  </motion.div>
                
                </motion.div>
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