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
      className={`sticky top-0 z-50 md:mx-4 py-2 rounded-t-xl transition-all duration-500 ${isScroll || isMenuOpen
        ? "bg-[#053d5e] shadow-md rounded-xl"
        : "bg-[#053d5e] top-1  shadow-md"
        }`}
    >
      <div className="md:max-w-screen-xl md:mx-auto px-4 flex items-center justify-between">

        <div className="h-16 w-44 flex items-center">
          <Link to="/" className="inline-block ">
            <img
              src="itsybizz.png"
              alt="Logo"
              className="h-16 object-contain"
            />
          </Link>
        </div>


        <button
          className="md:hidden text-white p-3 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>


        <ul
          ref={dropdownRef}
          className={`md:flex md:flex-row md:items-center md:static absolute left-0 right-0 top-full z-10 bg-[#053d5e] md:bg-transparent text-white md:space-x-6 
    overflow-hidden transition-all duration-500 ease-in-out
    ${isMenuOpen
              ? "max-h-[500px] visible translate-y-0"
              : "max-h-0 invisible -translate-y-2"
            }
  `}
        >
          <li>
            <NavLink
              to="/"
              className="block px-4 py-3 md:py-2 text-lg font-medium hover:text-white transition"
            >
              Home
            </NavLink>
          </li>


          <li className="relative">
            <MenuList listName="Products" list={products} />
          </li>
          <li className="relative">
            <MenuList listName="Development" list={developmentmenu} />
          </li>
          <li className="relative">
            <MenuList listName="Brand" list={becomeBrand} />
          </li>


          <li>
            <NavLink
              to="/portfolio"
              className="block px-4 py-3 md:py-2 text-lg font-medium hover:text-white transition"
            >
              Portfolio
            </NavLink>
          </li>


          <li className="mt-2 md:mt-0 md:ml-6">
            <NavLink
              to="/login"
              onClick={() => setIsUserMenuOpen(false)}
              className="relative inline-flex items-center px-6 py-2 font-semibold text-white rounded-full bg-sky-950 group hover:bg-black transition"
            >
              <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300"></span>
              <span className="relative z-10 bg-sky-950 px-5 py-1.5 rounded-full flex items-center space-x-2">
                <span>LOGIN</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Header;
