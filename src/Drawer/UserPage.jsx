import React from "react";
import {
  FiHome,
  FiUser,
  FiInfo,
  FiHelpCircle,
} from "react-icons/fi";

const UserPage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" onClick={onClose}></div>

      {/* Drawer Content */}
      <div className="relative w-72 bg-[#0d3b66] text-white shadow-lg flex flex-col items-center py-6 rounded-l-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Profile Image */}
        <img
          src="/user.png"
          alt="User"
          className="w-20 h-20 rounded-full border-2 border-white mb-3"
        />

        {/* Name and Role */}
        <div className="text-center">
          <h3 className="font-semibold text-lg">John Smith</h3>
          <p className="text-sm text-gray-200">Software Engineer</p>
        </div>
 
        {/* Navigation */}
       
        <nav className="mt-8 w-full px-6">
             <hr className="my-2 border-gray-400" />
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiHome size={18} />
                Change password
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiUser size={18} />
                Account setting
              </button>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiInfo size={18} />
                Info
              </button>
            </li>
            <hr className="my-2 border-gray-400" />
            <li>
              <button className="flex items-center gap-3 w-full p-2 rounded hover:bg-sky-900 transition">
                <FiHelpCircle size={18} />
                Help
              </button>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-2 text-xs text-gray-300 text-center w-full">
          © 2025 Your Company
        </div>
      </div>
    </div>
  );
};

export default UserPage;
