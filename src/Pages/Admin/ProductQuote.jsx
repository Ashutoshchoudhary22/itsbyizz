import React, { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import { useEffect } from "react";
import axios from "axios";

const ProductQuote = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setproductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
          `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setproductList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setproductList([]);
        }
      } catch (err) {
        console.error(
          "Fetching users failed:",
          err.response?.data || err.message
        );
        setproductList([]);
      }
    };

    getUsers();
  }, []);

  const filteredProducts = productList.filter(
    (product) =>
      product?.productName?.toLowerCase().includes(search.toLowerCase()) ||
      product?.phone?.toLowerCase().includes(search.toLowerCase()) ||
      product?.email?.toLowerCase().includes(search.toLowerCase()) ||
      product?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">
        IoT Products Quote
      </h2>
      <div className="mb-4 flex justify-end space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr
              key={product.id}
              className="odd:bg-white even:bg-gray-50 border-b"
            >
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.email}</td>
              <td className="p-3">{product.phone}</td>
              <td className="p-3">{product.productName}</td>
              <td className="p-3 flex">
                <button className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600">
                  <FaEye />
                </button>
                <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600">
                  <FaEdit />
                </button>
                <button className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600">
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
    </div>
  );
};

export default ProductQuote;
