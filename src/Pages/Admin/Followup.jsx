import React, { useState, useEffect } from "react";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Followup = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [followList, setFollowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const itemsPerPage = 10;

  useEffect(() => {
    const getFollowups = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          toast.error("Authentication token missing");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/followup`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setFollowList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setFollowList([]);
        }
      } catch (err) {
        console.error(
          "Fetching follow-ups failed:",
          err.response?.data || err.message
        );
        toast.error("Failed to fetch follow-ups");
        setFollowList([]);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    getFollowups();
  }, []);

  // Filtering logic
  const filteredFollowups = followList.filter(
    (fu) =>
      fu?.name?.toLowerCase().includes(search.toLowerCase()) ||
      fu?.mobile?.toString().includes(search) ||
      fu?.status?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredFollowups.length / itemsPerPage);
  const paginatedData = filteredFollowups.slice(
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
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }
  
      // Send DELETE request to backend
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/followup/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Check if the deletion was successful
      if (response.data.status === "success") {
        // Update frontend state to reflect deletion
        setFollowList((prevList) => prevList.filter((user) => user._id !== userId));
        toast.success("Follow-up deleted successfully");
      } else {
        // Use template literals and provide a fallback message
        toast.error(
          `Failed to delete follow-up: ${response.data.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error(
        "Deleting follow-up failed:",
        error.response?.data || error.message
      );
  
      // Use template literals for error message
      toast.error(
        `Failed to delete follow-up: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Follow-ups</h2>
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
          Add Follow-up
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-4">Loading...</div>
      ) : paginatedData.length === 0 ? (
        <div className="text-center py-4 text-gray-600">No follow-ups found</div>
      ) : (
        <>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Remark</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((fu, index) => (
                <tr key={fu._id} className="odd:bg-white even:bg-gray-50 border-b">
                  <td className="p-3 font-semibold">{index + 1}</td>
                  <td className="p-3">{fu.name}</td>
                  <td className="p-3">{fu.mobile}</td>
                  <td className="p-3">
                    {fu.remarks?.length > 0
                      ? fu.remarks[fu.remarks.length - 1].val
                      : "No remarks"}
                  </td>
                  <td className="p-3">{fu.status}</td>
                  <td className="p-3 flex">
                    <button className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600">
                      <FaEye />
                    </button>
                    <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600">
                      <FaEdit />
                    </button>
                    <button
                      className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                      onClick={() => handleDeleteUser(fu._id)}
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
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent title="Add Follow-up" />
        </Modal>
      )}
    </div>
  );
};

export default Followup;