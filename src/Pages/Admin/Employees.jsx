import React, { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show only 10 items per page
  const [employees, setEmployees] = useState([
    {
      id: 1,
      Name: "	Ravi Kant Shikre",
      EmployeeId: "DEEPNAP",
      Role: "devloper",
      Mobile: "9871182389",
      JoiningDate: "2024-01-18",
    },
    {
      id: 2,
      Name: "Kiara",
      EmployeeId: "DEEPNAP02",
      Role: "devloper",
      Mobile: "7065003066",
      JoiningDate: "2023-11-08",
    },
  ]);

  const employeeFields = [
    { name: "name", label: "Employee Name", type: "text" },
    { name: "EmployeeId", label: "Employee Id", type: "text" },
    { name: "phone", label: "Phone No.", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "role", label: "Role", type: "text" },
    { name: "joiningDate", label: "Joining Date", type: "date" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    {
      name: "currentlyWorking",
      label: "Currently Working",
      type: "select",
      options: ["Yes", "No"],
    },
    { name: "profile", label: "Profile", type: "file" },
  ];

  const handleEmployeeAdd = (newEmployee) => {
    setProducts([...employees, { id: employees.length + 1, ...newEmployee }]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("user"); // Assuming token is stored in localStorage
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/employee`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setEmployeeList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setEmployeeList([]);
        }
      } catch (err) {
        console.error(
          "Fetching users failed:",
          err.response?.data || err.message
        );
        setEmployeeList([]);
      }
    };

    getUsers();
  }, []);

  const filteredEmployee = (employeeList || []).filter(
    (emp) =>
      (emp?.Name?.toLowerCase() || "").includes(search?.toLowerCase() || "") ||
      (emp?.Role?.toLowerCase() || "").includes(search?.toLowerCase() || "") ||
      (emp?.EmployeeId?.toLowerCase() || "").includes(
        search?.toLowerCase() || ""
      ) ||
      (emp?.Mobile?.toLowerCase() || "").includes(search?.toLowerCase() || "")
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployee.length / itemsPerPage);
  const paginatedData = filteredEmployee.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      toast.error("Invalid user ID");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/employee/${userId}`
      );

      // Update state to reflect deletion
      setEmployeeList(employeeList.filter((user) => user._id !== userId));

      toast.success("User deleted successfully");
    } catch (error) {
      console.error(
        "Deleting user failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete user");
    }
  };
  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Employees</h2>
      <div className="mb-4 flex justify-end space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="py-2 rounded-md hover:bg-sky-800 border border-sky-800 bg-white hover:text-white text-sky-800 font-semibold px-3 transition-all ease-in"
          onClick={() => setIsModalOpen(true)}
        >
          Add Employee
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Employee Id</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Joining Date</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((emp) => (
            <tr key={emp.id} className="odd:bg-white even:bg-gray-50 border-b">
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.employeeId}</td>
              <td className="p-3">{emp.jobrole}</td>
              <td className="p-3">{emp.mobile}</td>
              <td className="p-3">
                {" "}
                {new Date(emp.dateOfJoining).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="p-3 flex">
                <button className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600">
                  <FaEye />
                </button>
                <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600">
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDeleteUser(emp._id)} // Use _id instead of id
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Product"
            fields={employeeFields}
            onSubmit={handleEmployeeAdd}
          />
        </Modal>
      )}
    </div>
  );
};

export default Employees;
