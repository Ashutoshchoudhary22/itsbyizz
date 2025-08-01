import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes, FaUser, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MenuList from "./MenuList";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Function to close the hamburger menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    {
      title: "SOPAS",
      link: "https://sopasb2c.deepmart.shop/login",
      external: true,
    },
    {
      title: "RTPAS",
      link: "https://inventory.deepmart.shop/login",
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScroll 
          ? "bg-gradient-to-r from-[#053d5e]/95 to-[#0a5a7a]/95 backdrop-blur-md shadow-2xl border-b border-white/10" 
          : "bg-gradient-to-r from-[#053d5e] to-[#0a5a7a]"
      }`}
    >
             <div className="max-w-[2480px] mx-auto px-4 2xl:px-8 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <motion.div 
          className="h-16 w-44 flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" onClick={closeMenu}>
            <motion.img
              src="itsybizz.png"
              alt="Logo"
              className="h-28 object-contain"
              whileHover={{ filter: "brightness(1.1)" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <motion.button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Navigation Links */}
        <motion.ul
          ref={dropdownRef}
          className={`
            w-full md:w-auto flex-col md:flex-row md:flex md:items-center text-white font-medium
            bg-gradient-to-b from-[#053d5e]/95 to-[#0a5a7a]/95 backdrop-blur-md md:bg-transparent 
            absolute md:static left-0 right-0 top-full md:top-auto
            transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible
            ${isMenuOpen ? "flex min-h-screen opacity-100" : "max-h-0 opacity-0 invisible md:visible md:opacity-100 md:max-h-none"}
          `}
        >
          {/* Nav Items */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <NavLink
              to="/"
              onClick={closeMenu}
              className="block px-4 py-3 md:py-2 text-lg hover:text-blue-200 transition-all duration-300"
            >
              Home
            </NavLink>
          </motion.li>

          <motion.li 
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <MenuList listName="Products" list={products} onLinkClick={closeMenu} />
          </motion.li>

          <motion.li 
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <MenuList listName="Development" list={developmentmenu} onLinkClick={closeMenu} />
          </motion.li>

          <motion.li 
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <MenuList listName="Brand" list={becomeBrand} onLinkClick={closeMenu} />
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <NavLink
              to="/portfolio"
              onClick={closeMenu}
              className="block px-4 py-3 md:py-2 text-lg hover:text-blue-200 transition-all duration-300"
            >
              Portfolio
            </NavLink>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <NavLink
              to="/contact-us"
              onClick={closeMenu}
              className="block px-4 py-3 md:py-2 text-lg hover:text-blue-200 transition-all duration-300"
            >
              Contact Us
            </NavLink>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <NavLink
              to="/about-us"
              onClick={closeMenu}
              className="block px-4 py-3 md:py-2 text-lg hover:text-blue-200 transition-all duration-300"
            >
              About Us
            </NavLink>
          </motion.li>

          {/* Login Button */}
          <motion.li 
            className="mt-2 md:mt-0 md:ml-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <NavLink
              to="/login"
              onClick={() => {
                setIsUserMenuOpen(false);
                closeMenu();
              }}
              className="relative inline-flex items-center px-6 py-3 font-semibold text-white rounded-full group transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-indigo-700 transition-all duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Content */}
              <span className="relative z-10 flex items-center space-x-2">
                <FaUser className="w-4 h-4" />
                <span>Login</span>
              </span>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </NavLink>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Header;
