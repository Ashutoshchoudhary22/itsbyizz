import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5"; // Install this icon via react-icons
import IncidentCard2 from "../Cards/IncidentCard2";

const It = ({ show, onClose }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`${show ? "visible" : "invisible"
        } fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50`}
    >
      <div className="relative flex flex-col lg:flex-row justify-between items-start mx-4 sm:mx-8 lg:mx-16 rounded-lg sm:px-6 lg:px-10 py-8 gap-8 bg-gradient-to-r from-[#27725c] to-[#1bb392] shadow-2xl max-w-6xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <IoClose size={28} />
        </button>
        <div className="w-full lg:w-2/3">
          <motion.h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            🔐 Double Down on Cybersecurity & Minimize Risk
          </motion.h2>

          <p className="text-white mb-4 text-sm sm:text-base font-medium">
            Empower your security and risk teams with AI-driven insights and automation. ServiceNow AI enables faster response, smarter risk mitigation, and seamless collaboration—helping you safeguard your enterprise from ever-evolving cyber threats.
          </p>

          <button className="mb-6 text-gray-900 font-semibold px-6 sm:px-10 py-2 bg-green-300 rounded-full hover:bg-green-400 hover:text-white transition-all">
            Learn More
          </button>

          <div className="space-y-3">
            {["Security Operations (SecOps)", "Risk Management"].map((item, index) => (
              <motion.p
                key={index}
                className="text-white text-base sm:text-lg font-medium flex items-center gap-3 hover:text-green-300 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <span className="text-green-400 text-xl">➔</span>
                {item}
              </motion.p>
            ))}
          </div>
        </div>


        <div className="w-full lg:w-1/3 flex justify-center">
          <IncidentCard2 />
        </div>
      </div>
    </motion.section>
  );
};

export default It;
