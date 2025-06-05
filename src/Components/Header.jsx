import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);
 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const developmentmenu = [
    { title: "Web Development", link: "/development?title=Web%20Development" },
    { title: "Web Design", link: "/development?title=Web%20Design" },
    {
      title: "Software Development",
      link: "/development?title=Software%20Development",
    },
    { title: "App Development", link: "/development?title=App%20Development" },
    { title: "CRM Development", link: "/development?title=CRM%20Development" },
  ];

  const becomeBrand = [
    { title: "Brand Building", link: "/brand?title=Brand%20Building" },
    { title: "ORM", link: "/brand?title=ORM" },
    { title: "Public Relations", link: "/brand?title=Public%20Relations" },
    { title: "Digital Marketing", link: "/brand?title=Digital%20Marketing" },
    {
      title: "Influence Marketing",
      link: "/brand?title=Influence%20Marketing",
    },
    {
      title: "Social Media Presence",
      link: "/brand?title=Social%20Media%20Presence",
    },
  ];

  const products = [
    { title: "IoT Products", link: "/Iot-products" },
    {
      title: "Client Relation Management (CRM)",
      link: "https://subscription.deepnapsoftech.com",
      external: true,
    },
    {
      title: "Human Resource Management (HRM)",
      link: "https://hr.deepmart.shop",
      external: true,
    },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky  bg-[#053d5e] z-50 rounded-t-xl flex  md:mx-4 py-1 md:shadow-lg items-center ${
        isScroll ? "bg-[#053d5e] top-0 md:rounded-2xl shadow-md" : "bg-[#053d5e] md:top-2 "
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2 flex items-center rounded-lg ">
        <div className="relative bottom-2 h-20 w-44">
          <Link to="/">
            <img
              src="itsybizz.png"
              alt="Logo"
              className="absolute top-1/2 md:right-14 h-32 w-52 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            />
          </Link>
        </div>

        <button
          className="md:hidden relative left-16 text-gray-50 p-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        <ul
          ref={dropdownRef}
          className={`
              md:flex md:flex-row md:items-center md:static absolute left-0 right-0 top-full z-10 pb-5 bg-sky-900 md:bg-transparent text-white 
              transition-all duration-500 ease-in-out
          
              ${isMenuOpen
              ? "max-h-[500px] opacity-100 translate-y-0 overflow-visible"
              : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
              }
          
              md:max-h-none md:opacity-100 md:translate-y-0 md:overflow-visible
            `}
        >
          <li>
            <NavLink
              to="/"
              className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            >
              <span className="text-xl font-semibold">Home</span>
            </NavLink>
          </li>

          {/* Products Dropdown */}
          <li className="relative">
            <MenuList listName="Products" list={products} />
          </li>

          {/* Development Dropdown */}
          <li className="relative">
            <MenuList listName="Development" list={developmentmenu} />
          </li>

          {/* Become Brand Dropdown */}
          <li className="relative">
            <MenuList listName="Brand" list={becomeBrand} />
          </li>

          {/* Portfolio Link */}
          <li>
            <NavLink
              to="/portfolio"
              className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            >
              <span className="text-xl font-semibold">Portfolio</span>
            </NavLink>
          </li>
          <li>
           <NavLink
              to="/about-us"
              className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            >
              <span className="text-xl font-semibold">About Us</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              onClick={() => setIsUserMenuOpen(false)}
              className="relative left-2 md:left-16  inline-flex items-center px-1 py-1 font-semibold text-white rounded-full bg-sky-950 group hover:bg-black transition"
            >
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-sky-500 to-green-500 group-hover:from-blue-600 group-hover:to-green-700 transition-all duration-300"></span>
              <span className="relative z-10 bg-sky-950 px-7 py-2  rounded-full flex items-center space-x-2">
                <span>Login</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
