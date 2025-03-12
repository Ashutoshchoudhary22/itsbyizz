import React,{ useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Enquiry = () => {
  const [search, setSearch] = useState('');
  const EnquiryData = [
    { id: 1, date: '2025-03-10', name: 'Alice Brown', mobile: '1234567890', Requirement: 'Software Engineer' },
    { id: 2, date: '2025-03-11', name: 'David Miller', mobile: '9876543210', Requirement: 'Product Manager' },
    { id: 3, date: '2025-03-12', name: 'Emily Wilson', mobile: '5556667777', Requirement: 'UI/UX Designer' },
  ];

  const filteredEnquiry = EnquiryData.filter(entry =>
    entry.date.includes(search) ||
    entry.name.toLowerCase().includes(search.toLowerCase()) ||
    entry.mobile.includes(search) ||
    entry.Requirement.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Enquiry Requests</h2>
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
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Requirement</th>
            <th className="px-6 py-3 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnquiry.map(entry => (
            <tr key={entry.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <td className="p-3 font-semibold">{entry.date}</td>
              <td className="p-3">{entry.name}</td>
              <td className="p-3">{entry.mobile}</td>
              <td className="p-3">{entry.Requirement}</td>
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
  );
};

export default Enquiry;