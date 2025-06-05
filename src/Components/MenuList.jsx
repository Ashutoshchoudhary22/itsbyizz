import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const MenuList = ({ listName, list }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
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
    <div ref={dropdownRef}   onMouseLeave={() => setOpenDropdown(null)}>
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
        <ul className="md:absolute bg-white rounded-md md:rounded-lg p-2 w-[410px] md:w-44 shadow-xl flex flex-col z-50">
          {list.map((item, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-sky-100 rounded-md ${
                index !== list.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpenDropdown(null)}
                  className="block text-gray-900 font-medium"
                >
                  {item.title}
                </a>
              ) : (
                <NavLink
                  to={item.link}
                  onClick={() => setOpenDropdown(null)}
                  className="block text-gray-900 font-medium"
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
