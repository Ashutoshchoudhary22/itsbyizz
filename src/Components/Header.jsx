import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <nav className="flex px-4 md:shadow-lg items-center relative">
        <div className="text-lg text-gray-50 font-bold md:py-0 py-4">ITSYBIZZ</div>
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
          <li>
            <NavLink
              to="/"
              className=" text-gray-50 flex md:inline-flex p-4 items-center hover:text-white"
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className=" text-gray-50 flex md:inline-flex p-4 items-center hover:text-whilte"
            >
              <span>Products</span>
            </a>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="text-gray-50 flex justify-between md:inline-flex p-4 items-center hover:text-whilte space-x-2"
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
            <ul className=" child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Web development
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Machine Learning
                </a>
              </li>
            </ul>
          </li>
          <li className="relative parent">
            <a
              href="#"
              className="text-gray-50 flex justify-between md:inline-flex p-4 items-center hover:text-whilte space-x-2"
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
            <ul className=" child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:text-whilte">
                  Machine Learning
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="text-gray-50 flex md:inline-flex p-4 items-center hover:text-whilte"
            >
              <span>Portfolio</span>
            </NavLink>
          </li>
        
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>
  );
};

export default Header;
