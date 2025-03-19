import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent";
import axios from "axios";
import { toast } from "react-toastify";
import EditProductForm from "../../Components/EditForms/EditProductForm";

const Products = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isEditOpen, setIsEditOpen] = useState(false);

  const itemsPerPage = 10;

  const productFields = [
    {
      name: "productName",
      label: "Product Name",
      type: "text",
      required: true,
    },
    { name: "brandName", label: "Brand", type: "text", required: true }, // Updated to match backend
    { name: "category", label: "Category", type: "text", required: true },
    { name: "subcategory", label: "Subcategory", type: "text", required: true },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "specification",
      label: "Specification",
      type: "textarea",
      required: true,
    },
    { name: "image", label: "Upload Image", type: "file", required: true }, // Add file upload field
  ];

  // Fetch products from the backend

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        console.error("No token found");
        toast.error("Authentication token missing");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,

            headers: { "Content-Type": "multipart/form-data" },
          },
        }
      );

      if (Array.isArray(response.data)) {
        setProductList(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setProductList([]);
      }
    } catch (err) {
      console.error(
        "Fetching products failed:",
        err.response?.data || err.message
      );
      toast.error("Failed to fetch products");
      setProductList([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle adding a new product
  const handleAddProduct = async (formData) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        return;
      }

      // Create FormData for file upload
      const data = new FormData();

      // Append all fields to FormData
      for (const key in formData) {
        if (key === "specification" && typeof formData[key] === "string") {
          // Convert specification to array if it's a string
          data.append(
            key,
            JSON.stringify(formData[key].split("\n").map((spec) => spec.trim()))
          );
        } else if (key === "image" && formData[key] instanceof File) {
          // Append the image file
          data.append(key, formData[key]);
        } else {
          // Append other fields
          data.append(key, formData[key]);
        }
      }

      setIsLoading(true); // Start loading
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Use multipart/form-data for file upload
          },
        }
      );

      // Update the product list with the new product
      setProductList([...productList, response.data.product]);
      setIsModalOpen(false);
      toast.success("Product added successfully");
    } catch (error) {
      console.error(
        "Adding product failed:",
        error.response?.data || error.message
      );
      toast.error(
        `Failed to add product: ${
          error.response?.data?.message || error.message
        }`
      );
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Handle deleting a product
  const handleDeleteUser = async (productId) => {
    if (!productId) {
      console.error("Product ID is undefined or invalid");
      toast.error("Invalid product ID");
      return;
    }

    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update state to reflect deletion
      setProductList(
        productList.filter((product) => product._id !== productId)
      );
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(
        "Deleting product failed:",
        error.response?.data || error.message
      );
      toast.error("Failed to delete product");
    }
  };

  // Handle viewing product details
  const handleView = (productData) => {
    setSelectedProduct(productData);
    setIsViewModalOpen(true);
  };

  // Close the view modal
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedProduct(null);
  };

  // Filter products based on search
  const filteredProducts = productList.filter(
    (product) =>
      product?.productName?.toLowerCase().includes(search.toLowerCase()) ||
      product?.brandName?.toLowerCase().includes(search.toLowerCase()) ||
      product?.category?.toLowerCase().includes(search.toLowerCase()) ||
      product?.subcategory?.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  // Prepare details for the DetailsComponent
  const details = selectedProduct
    ? [
        { label: "Product Name", value: selectedProduct.productName },
        { label: "Brand", value: selectedProduct.brandName },
        { label: "Category", value: selectedProduct.category },
        { label: "Subcategory", value: selectedProduct.subcategory },
        { label: "Description", value: selectedProduct.description },
        {
          label: "Specification",
          value: selectedProduct.specification?.join("\n") || "N/A",
        },
        { label: "Image", value: selectedProduct.image, type: "image" }, // Display image
      ]
    : [];

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
              key={product._id}
              className="odd:bg-white even:bg-gray-50 border-b"
            >
              <td className="p-3">{product.productName}</td>
              <td className="p-3">{product.brandName}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.subcategory}</td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(product)}
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => handleEdit(product)}
                  className="px-2 py-2 text-lg text-blue-500 rounded hover:text-blue-600"
                >
                  <FaEdit />
                </button>
                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDeleteUser(product._id)}
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

      {/* Add Product Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormComponent
            title="Add Product"
            fields={productFields}
            onSubmit={handleAddProduct}
            isLoading={isLoading} // Pass loading state
          />
        </Modal>
      )}

      {/* View Product Modal */}
      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}

      {isEditOpen && (
        <EditProductForm
          product={selectedProduct}
          onClose={() => setIsEditOpen(false)}
          onUpdate={fetchProducts} // Function to refresh product list
        />
      )}
    </div>
  );
};

export default Products;
