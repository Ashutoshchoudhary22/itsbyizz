import React, { useState } from "react";
import WavyScrollText from "../Components/WavyScroll";
import Modal from "../Components/Dashboard/Modal";
import { toast } from "react-hot-toast";

const IotProducts = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productName: "",
  });

  // Sample product data
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      brand: "Nest",
      title: "Smart Thermostat",
      description: "Control your home's temperature from anywhere.",
      fullDescription:
        "The Nest Smart Thermostat learns your schedule and programs itself to save energy. Control it from anywhere using your smartphone.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      brand: "Philips Hue",
      title: "Smart Light Bulb",
      description: "Adjust brightness and color with your smartphone.",
      fullDescription:
        "Philips Hue smart bulbs let you control your lights remotely, set schedules, and create custom lighting scenes for any occasion.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      brand: "Ring",
      title: "Security Camera",
      description: "Monitor your home 24/7 with high-definition video.",
      fullDescription:
        "Ring Security Cameras provide real-time alerts and live video streaming, so you can monitor your home from anywhere.",
    },
  ];

  // Fields for the quote form
  const quoteFormFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone No.", type: "text" },
    { name: "productName", label: "Product Name", type: "text" },
  ];

  // Handle "Get Quote" button click
  const handleGetQuote = (product) => {
    setSelectedProduct(product);
    setFormData({ ...formData, productName: product.title });
    setIsQuoteModalOpen(true);
  };

  // Handle "Read More" button click
  const handleReadMore = (product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    setIsQuoteModalOpen(false);
    toast.success("Quote request submitted successfully!");
  };

  // Close Details Modal
  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
        <div className="col-span-1 flex items-center">
          <WavyScrollText highlight="IoT" text="Products" />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img
            src='/iot.png'
            alt='iot'
            className="w-80 h-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-5">
      
    <p className="text-lg font-semibold text-center text-gray-500 mb-8">
   iot caption
    </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-full mb-2"
              />

              {/* Brand Name */}
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>

              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>

              {/* Product Description */}
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>

              {/* Buttons */}
              <div className="flex space-x-2">
                {/* Read More Button */}
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                  onClick={() => handleReadMore(product)}
                >
                  Read More
                </button>

                {/* Get Quote Button */}
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                  onClick={() => handleGetQuote(product)}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <Modal onClose={() => setIsQuoteModalOpen(false)}>
          <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Get a Quote</h2>
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              {quoteFormFields.map((field) => (
                <div key={field.name} className="relative z-0 w-full group">
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    readOnly={field.name === "productName"} // Make productName read-only
                  />
                  <label
                    htmlFor={field.name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedProduct && (
        <Modal onClose={closeDetailsModal}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {selectedProduct.title}
            </h2>
            <div className="space-y-4">
              {/* Brand Name */}
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Brand:</span>{" "}
                {selectedProduct.brand}
              </p>

              {/* Full Description */}
              <p className="text-gray-600">{selectedProduct.fullDescription}</p>

              {/* Close Button */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={closeDetailsModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default IotProducts;