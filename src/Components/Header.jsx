import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
 const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const developmentmenu = [
    { title: "Web Development", link: "/development?title=Web%20Development" },
    { title: "Web Design", link: "/development?title=Web%20Design" },
    { title: "Software Development", link: "/development?title=Software%20Development" },
    { title: "App Development", link: "/development?title=App%20Development" },
    { title: "CRM Development", link: "/development?title=CRM%20Development" },
  ];

  const becomeBrand = [
    { title: "Brand Building", link: "/brand?title=Brand%20Building" },
    { title: "ORM", link: "/brand?title=ORM" },
    { title: "Public Relations", link: "/brand?title=Public%20Relations" },
    { title: "Digital Marketing", link: "/brand?title=Digital%20Marketing" },
    { title: "Influence Marketing", link: "/brand?title=Influence%20Marketing" },
    { title: "Social Media Presence", link: "/brand?title=Social%20Media%20Presence" },
  ];

  const products = [
    { title: "IoT Products", link: "/Iot-products" },
    { title: "Client Relation Management (CRM)", link: "https://subscription.deepnapsoftech.com", external: true },
    { title: "Human Resource Management (HRM)", link: "https://hr.deepmart.shop", external: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const toggleDropdown = (dropdown) => {
  if (openDropdown === dropdown) {
    setOpenDropdown(null);
  } else {
    setOpenDropdown(dropdown);
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

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  return (
    <nav className="sticky top-0 bg-sky-900 z-50 flex md:px-4 py-1 md:shadow-lg items-center">
      <div className="relative bottom-2 h-16 w-44">
        <Link to="/">
          <img
            src="itsybizz.png"
            alt="Logo"
            className="absolute top-1/2 left-1/2 h-32 w-52 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          />
        </Link>
      </div>

      <button
        className="md:hidden ml-auto text-gray-50 p-4 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      <ul
        ref={dropdownRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:px-2 ml-auto md:space-x-2 absolute md:relative top-full left-0 right-0 bg-sky-950 md:bg-transparent z-10 text-white`}
      >
        <li>
          <NavLink
            to="/"
            onClick={() => {
              setOpenDropdown(null);
              setIsMenuOpen(false);
            }}
            className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
          >
            <span className="text-xl font-semibold">Home</span>
          </NavLink>
        </li>

        {/* Products Dropdown */}
        <li className="relative">
          <div
            className="text-gray-50 flex p-4 items-center justify-between hover:text-white cursor-pointer w-full"
            onClick={() => toggleDropdown("products")}
            onMouseEnter={()=>setOpenDropdown("products")}
            //  onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="text-xl font-semibold">Products</span>
            <svg
              className={`w-3 h-3 transition-transform ml-1 mt-[2px] ${openDropdown === "products" ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
          {openDropdown === "products" && (
          <ul className="md:absolute bg-white rounded-md md:rounded-lg p-2 w-[410px] md:w-44 shadow-xl flex flex-col z-50">

              {products.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 hover:bg-sky-100 rounded-md ${
                    index !== products.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-900 font-medium"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <NavLink
                      to={item.link}
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsMenuOpen(false);
                      }}
                      className="block text-gray-900 font-medium"
                    >
                      {item.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Development Dropdown */}
        <li className="relative">
          <div
            className="text-gray-50 flex p-4 items-center justify-between hover:text-white cursor-pointer w-full"
            onClick={() => toggleDropdown("development")}
            onMouseEnter={()=>setOpenDropdown("development")}
            //  onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="text-xl font-semibold">Development</span>
            <svg
              className={`w-3 h-3 text-white transition-transform ml-1 mt-[2px] ${openDropdown === "development" ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
          {openDropdown === "development" && (
            <ul className="md:absolute bg-white rounded-lg p-2 w-[410px] md:w-44 shadow-xl flex flex-col z-50">
              {developmentmenu.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 hover:bg-sky-100 rounded-md ${
                    index !== developmentmenu.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  <NavLink
                    to={item.link}
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsMenuOpen(false);
                    }}
                    className="block text-gray-900 font-medium"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Become Brand Dropdown */}
        <li className="relative">
          <div
            className="text-gray-50 flex p-4 items-center justify-between hover:text-white cursor-pointer w-full"
            onClick={() => toggleDropdown("brand")}
            onMouseEnter={()=>setOpenDropdown("brand")}
            //  onMouseLeave={() => setOpenDropdown(null)}
          >
            <span className="text-xl font-semibold">Become Brand</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 text-white transition-transform ml-1 mt-[2px] ${openDropdown === "brand" ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
          {openDropdown === "brand" && (
            <ul className="md:absolute bg-white rounded-lg p-2 w-[410px] md:w-44 shadow-xl flex flex-col z-50">
              {becomeBrand.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 hover:bg-sky-100 rounded-md ${
                    index !== becomeBrand.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  <NavLink
                    to={item.link}
                    onClick={() => {
                      setOpenDropdown(null);
                      setIsMenuOpen(false);
                    }}
                    className="block text-gray-900 font-medium"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Portfolio Link */}
        <li>
          <NavLink
            to="/portfolio"
            onClick={() => {
              setOpenDropdown(null);
              setIsMenuOpen(false);
            }}
            className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
          >
            <span className="text-xl font-semibold">Portfolio</span>
          </NavLink>
        </li>

        {/* User Dropdown */}
        <li className="relative" ref={menuRef}>
      <div
        className="text-gray-50 flex items-center p-4 space-x-2 hover:text-white cursor-pointer"
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        // onMouseEnter={()=>setOpenDropdown("")}
        //      onMouseLeave={() => setOpenDropdown(null)}
      >
        <FaRegUserCircle className="w-8 h-7" />
      </div>

      {isUserMenuOpen && (
        <ul className="absolute top-full right-0 w-full md:w-36 bg-white shadow-xl rounded-lg p-3 flex flex-col z-50 transition-all duration-300">
          {[
            { title: "Register", link: "/register" },
            { title: "Login", link: "/login" },
          ].map((item, index, arr) => (
            <li
              key={index}
              className={`p-2 hover:bg-sky-100 rounded-md ${
                index !== arr.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <NavLink
                to={item.link}
                onClick={() => {
                  setIsUserMenuOpen(false);
                }}
                className="block text-gray-900 font-medium"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
      </ul>
    </nav>
  );
};

export default Header;
