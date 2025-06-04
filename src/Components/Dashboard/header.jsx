// Header.jsx
import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import UserPage from "../../Drawer/UserPage";

const Header = ({ toggleSidebar }) => {
  const [isUserPageOpen, setIsUserPageOpen] = useState(false);

  const openUserPage = () => setIsUserPageOpen(true);
  const closeUserPage = () => setIsUserPageOpen(false);

  return (
    <div className="sticky top-0 bg-gradient-to-tl from-sky-800 to-sky-900 text-white  shadow-md z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <FiMenu size={24} />
          </button>
          <h1 className=" md:hidden text-xl font-bold">ITSYBIZZ</h1>
        </div>

        <div className="flex items-center gap-4 mr-4">
          <IoNotifications size={25} className="text-white" />
          <button onClick={openUserPage}>
            <FaCircleUser size={28} className="text-white cursor-pointer" />
          </button>
        </div>
      </div>

      {/* UserPage Drawer */}
      <UserPage isOpen={isUserPageOpen} onClose={closeUserPage} />
    </div>
  );
};

export default Header;
