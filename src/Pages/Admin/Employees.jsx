import React, { useState } from 'react'
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Modal from '../../Components/Dashboard/Modal';
import FormComponent from '../../Components/Dashboard/FormComponent';

const Employees = () => {
     const [search, setSearch] = useState('');
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [employees, setEmployees] = useState([
            { id: 1, Name: '	Ravi Kant Shikre', EmployeeId: 'DEEPNAP', Role:'devloper', Mobile: '9871182389', JoiningDate: '2024-01-18' },
            { id: 2, Name: 'Kiara', EmployeeId: 'DEEPNAP02',  Role:'devloper', Mobile: '7065003066', JoiningDate: '2023-11-08' },

        ]);
    
        const employeeFields = [
          { name: 'name', label: 'Employee Name', type: 'text' },
          { name: 'EmployeeId', label: 'Employee Id', type: 'text' },
          { name: 'phone', label: 'Phone No.', type: 'text' },
          { name: 'email', label: 'Email', type: 'text' },
          { name: 'role', label: 'Role', type: 'text' },
          { name: 'joiningDate', label: 'Joining Date', type: 'date' },
          { 
              name: 'gender', 
              label: 'Gender', 
              type: 'select', 
              options: ['Male', 'Female', 'Other'] 
          },
          { 
              name: 'currentlyWorking', 
              label: 'Currently Working', 
              type: 'select', 
              options: ['Yes', 'No'] 
          },
          { name: 'profile', label: 'Profile', type: 'file' },
      ];
      
    
        const handleEmployeeAdd = (newEmployee) => {
            setProducts([...employees, { id: employees.length + 1, ...newEmployee }]);
            setIsModalOpen(false);
        };
    
        const filteredEmployee = employees.filter(emp =>
            emp.Name.toLowerCase().includes(search.toLowerCase()) ||
            emp.Role.toLowerCase().includes(search.toLowerCase()) ||
            emp.EmployeeId.toLowerCase().includes(search.toLowerCase()) ||
            emp.Mobile.toLowerCase().includes(search.toLowerCase())
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
                    Add Employee
                </button>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
                    <tr>
                        <th className="px-6 py-3">#</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Employee Id</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Mobile</th>
                        <th className="px-6 py-3">Joining Date</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployee.map(emp => (
                        <tr key={emp.id} className="odd:bg-white even:bg-gray-50 border-b">
                            <td className="p-3 font-semibold">{emp.id}</td>
                            <td className="p-3">{emp.Name}</td>
                            <td className="p-3">{emp.EmployeeId}</td>
                            <td className="p-3">{emp.Role}</td>
                            <td className="p-3">{emp.Mobile}</td>
                            <td className="p-3">{emp.JoiningDate}</td>
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
                    <FormComponent title="Add Product" fields={employeeFields} onSubmit={handleEmployeeAdd} />
                </Modal>
            )}
        </div>
  )
}

export default Employees