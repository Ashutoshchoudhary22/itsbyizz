import React from "react";
import { FiMenu, FiX, FiHome, FiUsers, FiBriefcase, FiMessageCircle, FiPhone, FiPackage, FiList, FiUserPlus, FiUserCheck, FiClipboard, FiPlusCircle, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-sky-900 to-sky-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}
      >
        <div className="p-5 flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold">ITSYBIZZ</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FiX size={24} />
          </button>
        </div>
        <nav className="p-5">
        <ul className="space-y-4">
          <NavLink to="/dashboard" className="flex items-center space-x-2 p-3 hover:bg-sky-700 rounded cursor-pointer"><FiHome /> <span>Dashboard</span></NavLink>

          <NavLink to="users" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiUsers /> <span>Users</span></NavLink>

          <NavLink to="career" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiBriefcase /> <span>Career</span></NavLink>

          <NavLink to="enquiry" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiMessageCircle /> <span>Enquiry</span></NavLink>

          <NavLink to="contact-list" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiPhone /> <span>Contact</span></NavLink>

          <NavLink to="products" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiPackage /> <span>IOT Products</span></NavLink>
          
          <li className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiClipboard /> <span>IOT Products Quote</span></li>

          <NavLink to="employees" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiUserCheck /> <span>Employee</span></NavLink>

          <NavLink to="followups" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiClipboard /> <span>Follow Ups</span></NavLink>
          
         
          <NavLink to="refferal" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiTrendingUp /> <span>Refferal Program</span></NavLink>
         
          <NavLink to="business" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FiDollarSign /> <span>Business</span></NavLink>

          <NavLink to="corporate" className="flex items-center space-x-2 hover:bg-sky-700 p-3 rounded cursor-pointer"><FaBuilding /> <span>Corporate</span></NavLink>
         
        </ul>

        <button className="w-full hover:bg-white hover:text-sky-800 transition-all ease-in rounded font-semibold shadow border border-white mt-5 text-center p-2">Logout</button>
      </nav>
      </aside>
    );
  };

  export default Sidebar;