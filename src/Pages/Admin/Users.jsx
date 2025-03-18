import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Users = () => {
  const [search, setSearch] = useState("");
  const [userdata, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/user/all-users`
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error(
          "Fetching users failed:",
          error.response?.data || error.message
        );
      }
    };

    getUsers();
  }, []);

  const filteredUsers = userdata.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.mobile.includes(search) ||
      user.role.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedData = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteUser = async (userId) => {
    if (!userId) {
      console.error("User ID is undefined or invalid");

      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/user/${userId}`
      );

      // Update state to reflect deletion
      setUserData(userdata.filter((user) => user._id !== userId));

      toast.success("User deleted successfully");
    } catch (error) {
      console.error(
        "Deleting user failed:",
        error.response?.data || error.message
      );
      alert("Failed to delete user");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Users</h2>
      <div className="mb-4 float-end">
        <input
          type="text"
          placeholder="Search... "
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-sky-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((user) => (
              <tr
                key={user.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              >
                <td className="p-3 font-semibold">{user.name}</td>
                <td className="p-3">{user.mobile}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.email}</td>

                <td className="p-3 flex">
                  <button className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600">
                    <FaEye />
                  </button>
                  <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600">
                    <FaEdit />
                  </button>
                  <button
                    className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                    onClick={() => handleDeleteUser(user._id)} // Use _id instead of id
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-600">
                No users found
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
    </div>
  );
};

export default Users;
