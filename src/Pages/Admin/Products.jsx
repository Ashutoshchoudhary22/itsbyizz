import React, { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setproductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show only 10 items per page
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Laptop",
      brand: "Dell",
      category: "Electronics",
      subcategory: "Computers",
    },
    {
      id: 2,
      productName: "Smartphone",
      brand: "Apple",
      category: "Electronics",
      subcategory: "Mobile Phones",
    },
    {
      id: 3,
      productName: "Headphones",
      brand: "Sony",
      category: "Accessories",
      subcategory: "Audio",
    },
  ]);
  const productFields = [
    { name: "productName", label: "Product Name", type: "text" },
    { name: "brand", label: "Brand", type: "text" },
    { name: "category", label: "Category", type: "text" },
    { name: "subcategory", label: "Subcategory", type: "text" },
  ];

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
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
          `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/all`,
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
      product?.brand?.toLowerCase().includes(search.toLowerCase()) ||
      product?.category?.toLowerCase().includes(search.toLowerCase()) ||
      product?.subcategory?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
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
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/${userId}`
      );

      // Update state to reflect deletion
      setproductList(productList.filter((user) => user._id !== userId));

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
      <h2 className="text-2xl text-sky-900 font-bold mb-4">IoT Products</h2>
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
          Add Product
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Brand</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Subcategory</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr
              key={product.id}
              className="odd:bg-white even:bg-gray-50 border-b"
            >
              <td className="p-3">{product.productName}</td>
              <td className="p-3">{product.brandName}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.subcategory}</td>
              <td className="p-3 flex">
                <button className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600">
                  <FaEye />
                </button>
                <button className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600">
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDeleteUser(product._id)} // Use _id instead of id
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
            fields={productFields}
            onSubmit={handleAddProduct}
          />
        </Modal>
      )}
    </div>
  );
};

export default Products;
