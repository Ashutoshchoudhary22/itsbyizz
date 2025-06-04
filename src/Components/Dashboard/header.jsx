import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

const Header = ({toggleSidebar}) => {
  return (
    <div className="sticky top-0 bg-gradient-to-tl from-sky-800 to-sky-900 text-white p-3 shadow-md ">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
          <button
            className="md:hidden text-white"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-bold">ITSYBIZZ</h1>
        </div> 
       
        <div className="flex items-center gap-4 mr-4">
          <IoNotifications size={25} className="text-white" />
          <FaCircleUser   size={28} className="text-white" />
        </div> 
      </div>
    </div>
  );
};

export default Header;
