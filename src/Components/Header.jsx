import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const productsRef = useRef(null);
  const developmentRef = useRef(null);
  const becomeBrandRef = useRef(null);
  const userRef = useRef(null);

  const developmentMenu = [
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
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current && !productsRef.current.contains(event.target) &&
        developmentRef.current && !developmentRef.current.contains(event.target) &&
        becomeBrandRef.current && !becomeBrandRef.current.contains(event.target) &&
        userRef.current && !userRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-wrap font-semibold items-center h-20 justify-between px-4 py-2 md:py-0 shadow-lg bg-sky-900 relative z-50">
      
      <div className="text-lg text-white font-medium">
        <NavLink to="/" onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }}>
          <img src="./logo.png" alt="Logo" className="h-12 object-contain" />
        </NavLink>
      </div>
      
      <button className="md:hidden text-white p-2 ml-auto" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      <ul className={`${isMenuOpen ? "block" : "hidden"} w-full md:w-auto md:flex md:items-center md:space-x-4 mt-2 md:mt-0`}>
        <li>
          <NavLink to="/" className="block px-4 py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        </li>
        
        <li className="relative group" ref={productsRef}>
          <button
            onClick={() => {
              if (window.innerWidth < 768) toggleDropdown("products");
            }}
            className="flex items-center px-4 py-2 text-white hover:text-gray-300"
          >
            Products
          </button>
          <ul className={`${openDropdown === "products" ? "block" : "hidden"} group-hover:block md:absolute md:left-0 bg-white text-black shadow-lg rounded-lg p-2 w-56 z-50`}>
            {products.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded">
                {item.external ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">{item.title}</a>
                ) : (
                  <NavLink to={item.link} className="block">{item.title}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </li>
        
        <li className="relative group" ref={developmentRef}>
          <button
            onClick={() => {
              if (window.innerWidth < 768) toggleDropdown("development");
            }}
            className="flex items-center px-4 py-2 text-white hover:text-gray-300"
          >
            Development
          </button>
          <ul className={`${openDropdown === "development" ? "block" : "hidden"} group-hover:block md:absolute md:left-0 bg-white text-black shadow-lg rounded-lg p-2 w-56 z-50`}>
            {developmentMenu.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded">
                <NavLink to={item.link} className="block">{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </li>
        
        <li className="relative group" ref={becomeBrandRef}>
          <button
            onClick={() => {
              if (window.innerWidth < 768) toggleDropdown("becomeBrand");
            }}
            className="flex items-center px-4 py-2 text-white hover:text-gray-300"
          >
            Become Brand
          </button>
          <ul className={`${openDropdown === "becomeBrand" ? "block" : "hidden"} group-hover:block md:absolute md:left-0 bg-white text-black shadow-lg rounded-lg p-2 w-56 z-50`}>
            {becomeBrand.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded">
                <NavLink to={item.link} className="block">{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <NavLink to="/portfolio" className="block px-4 py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
        </li>

        <li>
          <NavLink to="/Contact-us" className="block px-4 py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
        </li>
        
        <li className="relative group" ref={userRef}>
          <button
            onClick={() => {
              if (window.innerWidth < 768) toggleDropdown("user");
            }}
            className="flex items-center px-4 py-2 text-white hover:text-gray-300"
          >
            <FaRegUserCircle className="w-6 h-6" />
          </button>
          <ul className={`${openDropdown === "user" ? "block" : "hidden"} group-hover:block md:absolute md:right-0 bg-white text-black shadow-lg rounded-lg p-2 w-48 z-50`}>
            <li><NavLink to="/register" className="block px-2 py-1 hover:bg-gray-100 rounded">Register</NavLink></li>
            <li><NavLink to="/login" className="block px-2 py-1 hover:bg-gray-100 rounded">Login</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
