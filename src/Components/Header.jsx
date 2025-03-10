import React from "react";
import { NavLink } from "react-router-dom";

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
    { title: "Influence Marketing", link: "/brand?title=Influence%20Marketing" },
    { title: "Social Media Presence", link: "/brand?title=Social%20Media%20Presence" },
  ];
  

<<<<<<< HEAD
  const brandMenu = [
    { title: "Brand Building", link: "/brand?title=B%20Development" },
    { title: "Web Design", link: "/development?title=Web%20Design" },
    {
      title: "Software Development",
      link: "/development?title=Software%20Development",
    },
    { title: "App Development", link: "/development?title=App%20Development" },
    { title: "CRM Development", link: "/development?title=CRM%20Development" },
  ];
=======
>>>>>>> 799a9fbdf712afe2e1721c956b8f4706db6b64be

  return (
    <nav className="flex px-4 md:shadow-lg items-center relative">
      <div className="text-lg text-gray-50 font-bold md:py-0 py-4">
        ITSYBIZZ
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
        <li>
          <a
            href="#"
            className=" text-gray-50 flex md:inline-flex p-4 items-center hover:text-whilte"
          >
            <span>Products</span>
          </a>
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

          {/* Dropdown Menu */}
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            {developmentmenu.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded-lg w-48">
                <NavLink to={item.link} className="block">
                  <h3 className="text-gray-900 font-normal">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative group">
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
          {/* Dropdown Menu */}
          <ul className="hidden group-hover:flex transition duration-300 md:absolute top-full left-0 md:w-auto bg-white md:shadow-lg md:rounded-b-lg p-2 flex-wrap">
            {becomeBrand.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100 rounded-lg w-48">
                <NavLink to={item.link} className="block">
                  <h3 className="text-gray-900 font-normal">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </NavLink>
              </li>
            ))}
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
