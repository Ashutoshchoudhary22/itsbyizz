import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const MenuList = ({ listName, list, onLinkClick }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // Function to handle link clicks and close menu
  const handleLinkClick = () => {
    setOpenDropdown(null);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} onMouseLeave={() => setOpenDropdown(null)}>
      <div
        className="text-gray-50 flex p-4 items-center justify-between hover:text-white cursor-pointer w-full"
        onClick={() => toggleDropdown("products")}
        onMouseEnter={() => setOpenDropdown("products")}
      >
        <span className="text-xl font-semibold">{listName}</span>
        <svg
          className={`w-3 h-3 transition-transform ml-1 mt-[2px] ${
            openDropdown === "products" ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>

      {openDropdown === "products" && (
        <ul className="md:absolute bg-[#053d5e] rounded-md md:rounded-lg p-2 w-[410px] md:w-44 shadow-xl flex flex-col z-50 border border-[#053d5e]">
          {list.map((item, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-[#0a5a7a] rounded-md transition-colors duration-200 ${
                index !== list.length - 1 ? "border-b border-[#0a5a7a]" : ""
              }`}
            >
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block text-white font-medium hover:text-gray-200 transition-colors duration-200"
                >
                  {item.title}
                </a>
              ) : (
                <NavLink
                  to={item.link}
                  onClick={handleLinkClick}
                  className="block text-white font-medium hover:text-gray-200 transition-colors duration-200"
                >
                  {item.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuList;
