import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import axios from "axios";
import toast from "react-hot-toast";
import EmployeeEdit from "../../Components/EditForms/EmployeeEdit";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for selected employee
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // State for view modal visibility
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditModalClose,setisEditModalClose] = useState(false);
  const itemsPerPage = 10; // Show only 10 items per page

  const employeeFields = [
    { name: "name", label: "Employee Name", type: "text", required: true },
    { name: "employeeId", label: "Employee Id", type: "text", required: true },
    { name: "mobile", label: "Mobile No.", type: "text", required: true },
    { name: "email", label: "Email", type: "text", required: true },
    { name: "jobrole", label: "Job Role", type: "text", required: true },
    { name: "dateOfJoining", label: "Joining Date", type: "date", required: true },
    {
      name: "isWorking",
      label: "Currently Working",
      type: "select",
      options: ["Yes", "No"],
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    { name: "profile", label: "Profile", type: "file" },
  ];

  // Fetch employees from the backend
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/employee`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
        console.error("Fetching employees failed:", err.response?.data || err.message);
        setEmployeeList([]);
      }
    };

    getEmployees();
  }, []);

  // Handle adding a new employee
  const handleEmployeeAdd = async (formData) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }
  
      // Prepare the payload with all required fields
      const employeeData = {
        ...formData,
        password: "#Deepnap123", // Default password
        role: "employee", // Default role
        isWorking: formData.isWorking === "Yes", // Convert "Yes" to boolean true
        dateOfJoining: new Date(formData.dateOfJoining).toISOString(), // Convert to ISO format
      };
  
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/employee`,
        employeeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      // Update the employee list with the new employee
      setEmployeeList([...employeeList, response.data]);
      setIsModalOpen(false);
      toast.success("Employee added successfully");
    } catch (error) {
      console.error("Adding employee failed:", error.response?.data || error.message);
      toast.error("Failed to add employee" ,error.response?.data || error.message);
    }
  };

  // Handle deleting an employee
  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      toast.error("Invalid user ID");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/employee/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      );

      // Update state to reflect deletion
      setEmployeeList(employeeList.filter((user) => user._id !== userId));
      toast.success("Employee deleted successfully");
    } catch (error) {
      console.error("Deleting employee failed:", error.response?.data || error.message);
      toast.error("Failed to delete employee" ,error.response?.data || error.message);
    }
  };

  // Handle viewing employee details
  const handleView = (employeeData) => {
    setSelectedEmployee(employeeData);
    setIsViewModalOpen(true);
  };

  // Close the view modal
  const handleEdit = (empData) =>{
    setSelectedEmployee(empData);
    setIsEditModalOpen(true);
  }

  // Close View Modal Function
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedEmployee(null);
  };

  // Filter employees based on search
  const filteredEmployee = employeeList.filter(
    (emp) =>
      (emp?.name?.toLowerCase() || "").includes(search?.toLowerCase() || "") ||
      (emp?.employeeId?.toLowerCase() || "").includes(search?.toLowerCase() || "") ||
      (emp?.role?.toLowerCase() || "").includes(search?.toLowerCase() || "") ||
      (emp?.phone?.toLowerCase() || "").includes(search?.toLowerCase() || "")
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployee.length / itemsPerPage);
  const paginatedData = filteredEmployee.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }

  // Prepare details for the DetailsComponent
  const details = selectedEmployee
    ? [
        { label: "Name", value: selectedEmployee.name },
        { label: "Employee ID", value: selectedEmployee.employeeId },
        { label: "Role", value: selectedEmployee.jobrole},
        { label: "Mobile", value: selectedEmployee.mobile},
        {
          label: "Joining Date",
          value: new Date(selectedEmployee.dateOfJoining).toLocaleDateString(),
        },
        { label: "Email", value: selectedEmployee.email || "N/A" },
        { label: "Gender", value: selectedEmployee.gender || "N/A" },
        {
          label: "Currently Working",
          value: selectedEmployee.currentlyWorking === "Yes" ? "Yes" : "No",
        },
      ]
    : [];

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
            <tr key={emp._id} className="odd:bg-white even:bg-gray-50 border-b">
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.employeeId}</td>
              <td className="p-3">{emp.jobrole}</td>
              <td className="p-3">{emp.mobile}</td>
              <td className="p-3">
                {new Date(emp.dateOfJoining).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(emp)}
                >
                  <FaEye />
                </button>
                <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                 onClick={() => handleEdit(emp)}>
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDeleteUser(emp._id)}
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

      {/* Add Employee Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Employee"
            fields={employeeFields}
            onSubmit={handleEmployeeAdd}
          />
        </Modal>
      )}

      {/* View Employee Modal */}
      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}

      {isEditModalOpen && (
        <Modal onClose={isEditModalClose}>
          <EmployeeEdit data = {selectedEmployee} />
        </Modal>
      )}
    </div>
  );
};

export default Employees;