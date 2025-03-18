import React, { useState } from "react";

const EmployeeEdit = ({ data }) => {
  const [formData, setFormData] = useState({
    name: data?.name || "",
    email: data?.email || "",
    employeeId: data?.employeeId || "",
    jobrole: data?.jobrole || "",
    mobile: data?.mobile || "",
    gender: data?.gender || "",
    isWorking: data?.isWorking === "true" ? "Yes" : "No",
    dateOfJoining: data?.dateOfJoining?.split("T")[0] || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" p-6 max-w-lg mx-auto  ">
      <h2 className="text-xl font-semibold text-sky-700 mb-4 border-b pb-2">Edit Employee</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Job Role</label>
          <input
            type="text"
            name="jobrole"
            value={formData.jobrole}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">
            Currently Working
          </label>
          <select
            name="isWorking"
            value={formData.isWorking}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Joining Date</label>
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex justify-between mt-4">
         
          <button
            type="submit"
            className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeEdit;
