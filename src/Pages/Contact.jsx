import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import { FaPhone, FaRegFileCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("user");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/contact/fillcontact`,
          {}, // Empty object as request body (if needed)
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setContact(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      } catch (err) {
        console.error("Fetching users failed:", err.response?.data || err.message);
      }
    };

    getUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");


    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/contact/fillcontact`,
        formData
      );

      if (response.status === 200) {
        setMessage("Your message has been sent successfully!");
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", city: "" }); // Clear form
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  const cardsContent = [
    {
      title: "Address",
      description:
        "Plot No. 121B, 2nd floor, Sector-31, HSIIDC, Faridabad, Haryana 121003",
      icon: <FaRegFileCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Phone Number",
      description: "+91-7042707091, +91-7042707092, +91 9205404075",
      icon: <FaPhone className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Emails",
      description:
        "support@deepnapsoftech.com, enquiry@deepnapsoftech.com, itsybizz@gmail.com",
      icon: <MdEmail className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Telephone",
      description: "0129-400-1529",
      icon: <TbDeviceLandlinePhone className="w-10 h-10 text-green-500" />,
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal();
    const elements = document.querySelectorAll(".reveal");
    if (elements.length > 0) {
      sr.reveal(elements, {
        distance: "50px",
        duration: 800,
        delay: 100,
        opacity: 0,
        scale: 0.85,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-2">
      <div className="w-full flex items-center justify-start bg-gradient-to-b from-sky-900 to-sky-800 h-96 px-5 ">
        <div>
          <h1 className="text-4xl font-bold text-green-500">Contact Us</h1>
          <p className="text-lg mt-3 opacity-90 text-white font-semibold">
            Your goals matter to us. Whether you're starting a new venture, need custom solutions,<br/> or simply have a question—we're here to listen, collaborate, and build something remarkable together. <br/>Let's start the conversation today
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto m-10  flex flex-wrap justify-between px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 reveal w-full lg:w-1/2">
          {cardsContent.map((card, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              {card.icon}
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {card.title}
              </h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-2/5 bg-white p-8 rounded-lg shadow-lg reveal">
          <h2 className="text-2xl font-semibold">Contact Us</h2>

          {message && (
            <p className={`mt-3 text-lg font-semibold ${message.includes("Error") ? "text-red-600" : "text-green-600"}`}>
              {message}
            </p>
          )}

          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              value={formData.city}
              onChange={handleChange}
              required
              className="input-style col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="col-span-2 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
