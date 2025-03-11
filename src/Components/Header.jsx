import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
      title: "Client Relation Management (CRM)",
      link: "https://subscription.deepnapsoftech.com",
    },
    {
      title: "Human Resource Management (HRM)",
      link: "https://hr.deepmart.shop",
    },
  ];

  return (
    <nav className="flex px-4 md:shadow-lg items-center relative">
      <div className="text-lg text-gray-50 font-bold md:py-0 py-4">
        <Link to="/">ITSYBIZZ</Link>
      </div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
          <NavLink
            to="/"
            className=" text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className="relative group">
          <a
            href="#"
            className=" text-gray-50 flex md:inline-flex p-4 items-center space-x-2 hover:text-white "
          >
            <span>Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            {products.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded-lg w-48">
                <NavLink
                  to={item.link}
                  className="block text-gray-900 font-normal"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-gray-50 flex justify-between p-4 items-center hover:text-white space-x-2"
          >
            <span>Development</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            {developmentmenu.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded-lg w-48">
                <NavLink
                  to={item.link}
                  className="block text-gray-900 font-normal"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-gray-50 flex justify-between md:inline-flex p-4 items-center hover:text-white space-x-2"
          >
            <span>Become Brand</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            {becomeBrand.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded-lg w-48">
                <NavLink
                  to={item.link}
                  className="block text-gray-900 font-normal"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
          >
            <span>Portfolio</span>
          </NavLink>
        </li>
        {/* Sign Up Dropdown */}
        <li className="relative group">
          <a
            href="#"
            className="text-gray-50 flex items-center p-4 hover:text-white space-x-2"
          >
            <FaRegUserCircle className="w-6 h-6" />
          </a>
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full right-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            <li className="p-2 hover:bg-gray-100 rounded-lg w-48">
              <NavLink
                to="/register"
                className="block text-gray-900 font-normal"
              >
                Register
              </NavLink>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-lg w-48">
              <NavLink to="/login" className="block text-gray-900 font-normal">
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
