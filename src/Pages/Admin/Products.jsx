import React, { useState } from 'react'
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Products = () => {
    const [search, setSearch] = useState('');
    const productsData = [
      { id: 1, productName: 'Laptop', brand: 'Dell', category: 'Electronics', subcategory: 'Computers' },
      { id: 2, productName: 'Smartphone', brand: 'Apple', category: 'Electronics', subcategory: 'Mobile Phones' },
      { id: 3, productName: 'Headphones', brand: 'Sony', category: 'Accessories', subcategory: 'Audio' },
    ];
  
    const filteredProducts = productsData.filter(product =>
      product.productName.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(search.toLowerCase())
    );
  
  return (
    <div className="p-5">
    <h2 className="text-2xl text-sky-900 font-bold mb-4">IoT Products</h2>
    <div className="mb-4 float-end">
      <input
        type="text"
        placeholder="Search... "
        className="p-2 border border-gray-200 rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-sky-50 uppercase bg-sky-800 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Product Name</th>
          <th className="px-6 py-3">Brand</th>
          <th className="px-6 py-3">Category</th>
          <th className="px-6 py-3">Subcategory</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map(product => (
          <tr key={product.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <td className="p-3 font-semibold">{product.id}</td>
            <td className="p-3">{product.productName}</td>
            <td className="p-3">{product.brand}</td>
            <td className="p-3">{product.category}</td>
            <td className="p-3">{product.subcategory}</td>
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
  </div>
  )
}

export default Products