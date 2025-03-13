import React, { useState } from "react";
import Modal from "../../Components/Dashboard/Modal";
import FormComponent from "../../Components/Dashboard/FormComponent";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Followup = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [followups, setFollowups] = useState([
    {
      id: 1,
      Name: "John Doe",
      Mobile: "9876543210",
      Remark: "Needs follow-up next week",
      Status: "Pending",
    },
    {
      id: 2,
      Name: "Jane Smith",
      Mobile: "8765432109",
      Remark: "Issue resolved",
      Status: "Completed",
    },
  ]);

  const followupFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "mobile", label: "Mobile", type: "text" },
    { name: "remark", label: "Remark", type: "text" },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: ["Pending", "Completed"],
    },
  ];

  const handleFollowupAdd = (newFollowup) => {
    setFollowups([...followups, { id: followups.length + 1, ...newFollowup }]);
    setIsModalOpen(false);
  };

  const filteredFollowups = followups.filter(
    (fu) =>
      fu.Name.toLowerCase().includes(search.toLowerCase()) ||
      fu.Mobile.includes(search) ||
      fu.Status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">Follow-ups</h2>
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
          Add Follow-up
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">Remark</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFollowups.map((fu) => (
            <tr key={fu.id} className="odd:bg-white even:bg-gray-50 border-b">
              <td className="p-3 font-semibold">{fu.id}</td>
              <td className="p-3">{fu.Name}</td>
              <td className="p-3">{fu.Mobile}</td>
              <td className="p-3">{fu.Remark}</td>
              <td className="p-3">{fu.Status}</td>
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
          <FormComponent
            title="Add Follow-up"
            fields={followupFields}
            onSubmit={handleFollowupAdd}
          />
        </Modal>
      )}
    </div>
  );
};

export default Followup;
