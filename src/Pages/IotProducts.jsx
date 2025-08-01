import React, { useState, useEffect } from "react";
import axios from "axios";
import WavyScrollText from "../Components/WavyScroll";
import Modal from "../Components/Dashboard/Modal";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaRocket, FaMicrochip, FaWifi, FaMobile, FaCog, FaShieldAlt, FaArrowRight, FaEye, FaQuoteLeft } from "react-icons/fa";

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
  const [products, setProducts] = useState([]);

  // Fields for the quote form
  const quoteFormFields = [
    { name: "name", label: "Name", type: "text", icon: FaRocket },
    { name: "email", label: "Email", type: "email", icon: FaRocket },
    { name: "phone", label: "Phone No.", type: "text", icon: FaRocket },
    { name: "productName", label: "Product Name", type: "text", icon: FaRocket },
  ];

  // Custom styles for blob animations
  const customStyles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .blob {
      animation: blob 7s infinite;
    }
    .blob:nth-child(2) {
      animation-delay: 2s;
    }
    .blob:nth-child(3) {
      animation-delay: 4s;
    }
  `;

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/prodcuts/all`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
        setProducts([]);
      }
    } catch (err) {
      console.error(
        "Fetching products failed:",
        err.response?.data || err.message
      );
      toast.error("Failed to fetch products");
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
    
    // Inject custom styles
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Handle "Get Quote" button click
  const handleGetQuote = (product) => {
    setSelectedProduct(product);
    setFormData({ ...formData, productName: product.productName });
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
  const handleQuoteSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/iot/quote/products`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsQuoteModalOpen(false);
      toast.success("Quote request submitted successfully!");
      console.log("API Response:", response.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
      console.error("Error submitting quote:", error);
    }
  };

  // Close Details Modal
  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="blob absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="blob absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 w-full grid md:grid-cols-2 gap-8 grid-cols-1 px-5 py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="col-span-1 flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20"
            >
              <FaMicrochip className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">IoT Solutions</span>
            </motion.div>
            
            <div className="space-y-4">
              <WavyScrollText highlight="IoT" text="Products" />
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover cutting-edge IoT products that transform your business operations. 
                From smart sensors to connected devices, we offer innovative solutions for the digital age.
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {["AI-Powered", "Real-time", "Scalable", "Secure"].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-blue-300 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="col-span-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img 
            src="/iot.png" 
            alt="IoT Products" 
            className="w-80 h-auto drop-shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* Products Section */}
      <motion.div 
        className="relative z-10 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900/80 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Our IoT Products
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Explore our comprehensive range of IoT products designed to enhance your business efficiency and connectivity.
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Product Image */}
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </motion.div>

                {/* Product Info */}
                <div className="space-y-3 text-center">
                  <motion.div 
                    className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaWifi className="w-3 h-3 mr-1" />
                    {product.brandName}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    {product.productName}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-3 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    {product.description}
                  </motion.p>

                  <motion.div 
                    className="text-xs text-gray-400 space-y-1"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p><span className="font-semibold">Category:</span> {product.category}</p>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div 
                  className="flex space-x-3 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
                    onClick={() => handleReadMore(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Details</span>
                  </motion.button>

                  <motion.button
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
                    onClick={() => handleGetQuote(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaQuoteLeft className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Quote</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <Modal onClose={() => setIsQuoteModalOpen(false)}>
          <motion.div 
            className="max-w-md mx-auto p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get a Quote
              </h2>
              <p className="text-gray-300 mt-2">Request pricing for your IoT solution</p>
            </motion.div>
            
            <motion.form 
              onSubmit={handleQuoteSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {quoteFormFields.map((field, index) => (
                <motion.div 
                  key={field.name} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="relative">
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={field.label}
                      required
                      readOnly={field.name === "productName"}
                    />
                    {field.name === "productName" && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FaShieldAlt className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <FaRocket className="w-5 h-5" />
                <span>Submit Quote Request</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.form>
          </motion.div>
        </Modal>
      )}

      {/* Details Modal */}
      {isDetailsModalOpen && selectedProduct && (
        <Modal onClose={closeDetailsModal}>
          <motion.div 
            className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/20 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 flex items-center justify-center mx-auto mb-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.productName}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {selectedProduct.productName}
              </h2>
              <p className="text-gray-300">Product Details</p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Brand</h3>
                    <p className="text-white">{selectedProduct.brandName}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Category</h3>
                    <p className="text-white">{selectedProduct.category}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Subcategory</h3>
                    <p className="text-white">{selectedProduct.subcategory}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Specification</h3>
                    <p className="text-white text-sm">{selectedProduct.specification}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Description</h3>
                    <p className="text-white text-sm">{selectedProduct.description}</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={closeDetailsModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <FaCog className="w-5 h-5" />
                <span>Close Details</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </div>
  );
};

export default IotProducts;
