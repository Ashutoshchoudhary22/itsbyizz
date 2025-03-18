import React from "react";

const Career = () => {
  const designations = [
    { text: "Select Position you are applying for", value: "" },
    { text: "Web Designer", value: "WD" },
    { text: "Web Developer", value: "WBD" },
    { text: "Software Developer", value: "SD" },
    { text: "App Developer", value: "AD" },
    { text: "Hybrid Web Developer", value: "HWD" },
    { text: "Sales Executive", value: "SE" },
    { text: "Sales Manager", value: "SM" },
    { text: "Relationship Manager", value: "RM" },
    { text: "Business Analyst", value: "BA" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-8 bg-gray-50 w-full">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center reveal">
          <img
            className="w-full max-w-xs md:max-w-sm rounded-lg"
            src="/career.png"
            alt="AI Business Transformation"
          />
        </div>

        {/* Text Section */}
        <div className=" p-8 bg-white rounded-lg reveal">
          <h2 className="text-2xl font-semibold">Career</h2>
          <p>
            You have landed on a perfect link in accelerating your career path!
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6"
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter Your Number"
              required
              className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           

            <select
              id="designation"
              name="designation"
              required
              className="col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {designations.map((val, id) => (
                <option key={id} value={val.value} className="capitalize">
                  {val.text}
                </option>
              ))}
            </select>

            <label>Upload your CV (PDF or image)</label>
            <input
              id="file"
              type="file"
              name="resume"
              accept=".pdf, .jpg, .png"
              className="border p-2 rounded-md"
            />

            <button
              type="submit"
              className="col-span-2 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-lg shadow-md bg-green-600 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
