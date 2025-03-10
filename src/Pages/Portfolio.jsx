import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("B2B");

  const products = {
    B2B: [
      { title: "JHEV Motors", img: "https://itsybizz.com/assets/port1-BelGnRC3.png" },
      { title: "Shivshakti Aluminium", img: "https://itsybizz.com/assets/port5-wuzzEP2D.png" },
    ],
    Finance: [
      { title: "GR-Finance", img: "https://itsybizz.com/assets/grfinance-xIkzopEE.jpeg" },
      { title: "Finance", img: "https://itsybizz.com/assets/finance2-CMQ71K8o.jpeg" },
    ],
    Ecom: [
      { title: "AFS Deals", img: "https://itsybizz.com/assets/port2-DcxdaKXH.png" },
      { title: "Kripa Creations", img: "https://itsybizz.com/assets/kripa-AMYKLt7o.jpeg" },
    ],
   
  };

  return (
    <div className="w-full h-auto ">
      {/* Header Section */}
      <div className="w-full  grid md:grid-cols-2 gap-2 grid-cols-1 px-5 py-24">
        <div className="col-span-1 flex items-center">
          <h1 className="text-gray-50 text-3xl font-bold">
            <span className="text-4xl text-green-500">
              Our Products & <br />
              Solutions
            </span>{" "}
            <br /> Automate tasks, empower teams, and move your business forward.
          </h1>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <img src="/products.svg" alt="Products & Solutions" className="w-80 h-auto" />
        </div>
      </div>

    <div className="bg-gray-50">
   {/* Tabs Section */}
<div className="w-full mb-5 flex justify-center gap-8 border-b border-gray-300">
  {Object.keys(products).map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`relative pb-2 mt-5 text-lg font-semibold transition-all ${
        activeTab === tab
          ? "text-green-600 border-b-2 border-green-500"
          : "text-gray-600 hover:text-green-500"
      }`}
    >
      {tab}
    </button>
  ))}
</div>

      {/* Product Cards Section */}
      <div className="w-full flex flex-wrap justify-center gap-6 px-5">
        {products[activeTab].map((product, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-72 text-center">
            <img src={product.img} alt={product.title} className="w-40 h-auto mx-auto" />
            <h3 className="text-lg font-semibold mt-2 text-gray-800">{product.title}</h3>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
