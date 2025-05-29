import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // State for dropdown menus

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
    {
      title: "IoT Products",
      link: "/Iot-products",
    },
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown menus
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex px-4 md:shadow-lg items-center relative ">
      {/* Logo */}
      <div className="text-lg text-gray-50 font-bold md:py-0 py-4">
        <Link to="/">ITSYBIZZ</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden ml-auto text-gray-50 p-4 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Navigation Links */}
      <ul
        ref={dropdownRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:px-2 ml-auto md:space-x-2 absolute md:relative top-full left-0 right-0 bg-gray-800 md:bg-transparent z-10`}
      >
        <li>
          <NavLink
            to="/"
            className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Home</span>
          </NavLink>
        </li>

        {/* Products Dropdown */}
        <li className="relative">
          <button
            className="text-gray-50 flex md:inline-flex p-4 items-center space-x-2 hover:text-white w-full md:w-auto"
            onClick={() => toggleDropdown("products")}
          >
            <span>Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 fill-current transform transition-transform duration-200 ${
                openDropdown === "products"? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </button>
          <ul
            className={`${
              openDropdown === "products" ? "block" : "hidden"
            } md:absolute md:top-full md:left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap`}
          >
            {products.map((item, index) => (
              <li key={index} className="p-2 hover:bg-sky-100 rounded-lg w-48">
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-900 font-normal"
                  >
                    {item.title}
                  </a>
                ) : (
                  <NavLink
                    to={item.link}
                    className="block text-gray-900 font-normal"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </li>

        {/* Development Dropdown */}
        <li className="relative">
          <button
            className="text-gray-50 flex justify-between p-4 items-center hover:text-white space-x-2 w-full md:w-auto"
            onClick={() => toggleDropdown("development")}
          >
            <span>Development</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 fill-current transform transition-transform duration-200 ${
                openDropdown === "development" ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </button>
          <ul
            ref={dropdownRef}
            className={`${
              openDropdown === "development" ? "block" : "hidden"
            } md:absolute md:top-full md:left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap`}
          >
            {developmentmenu.map((item, index) => (
              <li key={index} className="p-2 hover:bg-sky-100 rounded-lg w-48">
                <NavLink
                  to={item.link}
                  className="block text-gray-900 font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Become Brand Dropdown */}
        <li className="relative">
          <button
            className="text-gray-50 flex justify-between md:inline-flex p-4 items-center hover:text-white space-x-2 w-full md:w-auto"
            onClick={() => toggleDropdown("becomeBrand")}
          >
            <span>Become Brand</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 fill-current transform transition-transform duration-200 ${
                openDropdown === "becomeBrand" ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </button>
          <ul
            className={`${
              openDropdown === "becomeBrand" ? "block" : "hidden"
            } md:absolute md:top-full md:left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap`}
          >
            {becomeBrand.map((item, index) => (
              <li key={index} className="p-2 hover:bg-sky-100 rounded-lg w-48">
                <NavLink
                  to={item.link}
                  className="block text-gray-900 font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Portfolio Link */}
        <li>
          <NavLink
            to="/portfolio"
            className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Portfolio</span>
          </NavLink>
        </li>

        {/* User Dropdown */}
        <li className="relative">
          <button
            className="text-gray-50 flex items-center p-4 hover:text-white space-x-2"
            onClick={() => toggleDropdown("user")}
          >
            <FaRegUserCircle className="w-8 h-7" />
          </button>
          <ul
            ref={dropdownRef}
            className={`${
              openDropdown === "user" ? "block" : "hidden"
            } md:absolute md:top-full md:right-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap`}
          >
            <li className="p-2 hover:bg-sky-100 rounded-lg w-48">
              <NavLink
                to="/register"
                className="block text-gray-900 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </NavLink>
            </li>
            <li className="p-2 hover:bg-sky-100 rounded-lg w-48">
              <NavLink
                to="/login"
                className="block text-gray-900 font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
