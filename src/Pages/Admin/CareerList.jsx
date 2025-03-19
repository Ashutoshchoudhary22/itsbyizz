import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "../../Components/Dashboard/Modal";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";

const CareerList = () => {
  const [search, setSearch] = useState("");
  const [careerList, setCareerList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCareer, setSelectedCareer] = useState(null); // State for selected career
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const itemsPerPage = 10; // Show only 10 items per page

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("user"); // Assuming token is stored in localStorage
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/career`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setCareerList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setCareerList([]);
        }
      } catch (err) {
        console.error(
          "Fetching users failed:",
          err.response?.data || err.message
        );
        setCareerList([]);
      }
    };

    getUsers();
  }, []);

  // Filtered data based on search query
  const filteredCareerList = careerList.filter(
    (entry) =>
      entry?.date?.includes(search) ||
      entry?.name?.toLowerCase().includes(search.toLowerCase()) ||
      entry?.mobile?.includes(search) ||
      entry?.designation?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCareerList.length / itemsPerPage);
  const paginatedData = filteredCareerList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fixed Delete Function
  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");
      toast.error("Invalid user ID");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/career/${userId}`
      );

      // Update state to reflect deletion
      setCareerList(careerList.filter((user) => user._id !== userId));

      toast.success("User deleted successfully");
    } catch (error) {
      console.error(
        "Deleting user failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete user");
    }
  };

  // Handle View Function
  const handleView = (careerData) => {
    setSelectedCareer(careerData); // Set selected career data
    setIsModalOpen(true); // Open the modal
  };

  // Close Modal Function
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCareer(null); // Clear selected career data
  };

  console.log(selectedCareer);

  // Prepare details for the DetailsComponent
  const details = selectedCareer
    ? [
        {
          label: "Date",
          value: new Date(selectedCareer.date).toLocaleDateString(),
        },
        { label: "Name", value: selectedCareer.name },
        { label: "Mobile", value: selectedCareer.phone },
        { label: "Designation", value: selectedCareer.designation },
        { label: "Email", value: selectedCareer.email || "N/A" },
        { label: "Experience", value: selectedCareer.experience || "N/A" },
        {
          label: "Resume",
          value: selectedCareer.resume
            ? selectedCareer.resume
            : "Not Available",
        },
      ]
    : [];

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Career Requests</h2>

      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-sky-50 uppercase bg-sky-800">
          <tr>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Designation</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((entry) => (
              <tr
                key={entry._id} // Fixed _id usage
                className="border-b dark:border-gray-700 border-gray-200"
              >
                <td className="p-3 font-semibold">
                  {new Date(entry.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="p-3">{entry.name}</td>
                <td className="p-3">{entry.phone}</td>{" "}
                {/* Fixed to match filter */}
                <td className="p-3">{entry.designation}</td>
                <td className="p-3 flex">
                  <button
                    className="px-2 text-green-500 hover:text-green-600"
                    onClick={() => handleView(entry)} // Open modal on click
                  >
                    <FaEye />
                  </button>

                  <button
                    className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                    onClick={() => handleDeleteUser(entry._id)} // Fixed entry._id usage
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No matching records found.
              </td>
            </tr>
          )}
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
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}
    </div>
  );
};

export default CareerList;
