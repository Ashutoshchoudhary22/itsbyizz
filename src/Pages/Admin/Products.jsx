import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Modal from '../../Components/Dashboard/Modal';
import FormComponent from '../../Components/Dashboard/FormComponent';


const Products = () => {
    const [search, setSearch] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, productName: 'Laptop', brand: 'Dell', category: 'Electronics', subcategory: 'Computers' },
        { id: 2, productName: 'Smartphone', brand: 'Apple', category: 'Electronics', subcategory: 'Mobile Phones' },
        { id: 3, productName: 'Headphones', brand: 'Sony', category: 'Accessories', subcategory: 'Audio' },
    ]);

    const productFields = [
        { name: 'productName', label: 'Product Name', type: 'text' },
        { name: 'brand', label: 'Brand', type: 'text' },
        { name: 'category', label: 'Category', type: 'text' },
        { name: 'subcategory', label: 'Subcategory', type: 'text' },
    ];

    const handleAddProduct = (newProduct) => {
        setProducts([...products, { id: products.length + 1, ...newProduct }]);
        setIsModalOpen(false);
    };

    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-5">
            <h2 className="text-2xl text-sky-900 font-bold mb-4">IoT Products</h2>
            <div className="mb-4 flex justify-end space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-200 rounded"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
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
                        <tr key={product.id} className="odd:bg-white even:bg-gray-50 border-b">
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

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <FormComponent title="Add Product" fields={productFields} onSubmit={handleAddProduct} />
                </Modal>
            )}
        </div>
    );
};

export default Products;
