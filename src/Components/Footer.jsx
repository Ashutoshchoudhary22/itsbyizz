import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const digitalMarketingLinks = [
    { title: "Meta  Ads", link: "/digitalMarketing?title=Meta%20Ads" },
    { title: "Google Ads", link: "/digitalMarketing?title=Google%20Ads" },
    { title: "Email Marketing", link: "/digitalMarketing?title=Email%20Marketing" },
    { title: "Content Marketing", link: "/digitalMarketing?title=Content%20Marketing" },
    { title: "SEO & SEM", link: "/digitalMarketing?title=SEO%20SEM" },
    { title: "PPC", link: "/digitalMarketing?title=PPC" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-sky-800 to-sky-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left - Social Links */}
        <div className="flex flex-col md:items-start items-center space-y-4 md:space-y-0">
          <h2 className="text-lg font-bold pb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white rounded-full text-sky-800 hover:bg-sky-700 hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-sky-800 hover:bg-sky-700 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-sky-800 hover:bg-sky-700 hover:text-white transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-sky-800 hover:bg-sky-700 hover:text-white transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left mt-6 md:mt-0">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="/about-us" className="hover:text-gray-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Products</a></li>
              <li><a href="/contact-us" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h2 className="text-lg font-bold">DIGITAL MARKETING</h2>
            <ul className="mt-2 space-y-1 text-sm">
              {digitalMarketingLinks.map((item, index) => (
                <li key={index}><NavLink to={item.link} className="hover:text-gray-300 transition">{item.title}</NavLink></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-bold">LEGAL</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition">Career</a></li>
              <li><a href="/policy" className="hover:text-gray-300 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-300 transition">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-10 border-white pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ITSYBIZZ. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
