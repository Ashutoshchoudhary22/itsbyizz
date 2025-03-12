import React from "react";
import { FaBriefcase, FaClipboardList, FaEnvelope, FaProjectDiagram, FaUserCheck, FaUsers, FaUserTie } from "react-icons/fa";

const Overview = () => {
  const stats = [
    { icon: <FaUsers size={24} />, label: 'Total Users', value: 7 , bg:'bg-yellow-500'},
    { icon: <FaEnvelope size={24} />, label: 'Enquiry Requests', value: 28 , bg:'bg-blue-400'},
    { icon: <FaBriefcase size={24} />, label: 'Career Requests', value: 89 , bg:'bg-green-500'},
    { icon: <FaClipboardList size={24} />, label: 'Contact Us Requests', value: 19 , bg:'bg-rose-400'},
    { icon: <FaUserTie size={24} />, label: 'Employees', value: 3 , bg:'bg-purple-400'},
    { icon: <FaProjectDiagram size={24} />, label: 'Total RP', value: 3 , bg:'bg-sky-400'},
    { icon: <FaUserCheck size={24} />, label: 'Total CP', value: 2 , bg:'bg-gray-500'},
    { icon: <FaUserCheck size={24} />, label: 'Total BP', value: 2 , bg:'bg-orange-400'},
    { icon: <FaClipboardList size={24} />, label: 'Total Follow Ups', value: 45 , bg:'bg-teal-500'},
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-5 rounded-lg shadow-md flex flex-col items-start border border-gray-200">
          <div className="flex items-center space-x-4 mb-3">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bg} text-white`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;