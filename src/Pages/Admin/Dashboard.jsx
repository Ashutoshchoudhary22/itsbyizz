import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // Retrieve token from localStorage
  const token = localStorage.getItem("user");

  // Redirect if no token found
  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Prevent rendering until redirected
  }

  return (
    <div className="relative min-h-screen flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <header className="bg-gradient-to-b from-sky-900 to-sky-800 text-white p-4 flex items-center md:hidden">
          <button onClick={toggleSidebar} className="mr-4 focus:outline-none">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-bold">ITSYBIZZ</h1>
        </header>
        <main className="flex-grow p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
