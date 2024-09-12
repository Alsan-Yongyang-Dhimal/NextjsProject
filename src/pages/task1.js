import React, { useState } from "react";
import ProtecteRoute from "../HOC/protectedRoute";

const Task1 = () => {
  const nameList = [
    "Aarav",
    "Aisha",
    "Ravi",
    "Sita",
    "Kavi",
    "Nisha",
    "Pari",
    "Raja",
    "Alsan",
    "Maya",
    "Samir",
    "Kavita",
    "samar",
    "Alisha"
  ];

  const [names, setNames] = useState("");

  const handleNameChange = (e) => {
    setNames(e.target.value);
  };

  // Filter nameList based on their searched name
  const filteredName = nameList.filter((name) =>
    name.toLowerCase().includes(names.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-rose-500 mb-6 text-center">
        Search Filter
      </h2>
      <input
        type="text"
        placeholder="Search the fruits here"
        value={names}
        onChange={handleNameChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md mb-6 focus:outline-none focus:border-rose-500 transition duration-300 ease-in-out"
      />
      <ul className="divide-y divide-gray-200">
        {filteredName.length > 0 ? (
          filteredName.map((item, index) => (
            <li
              key={index}
              className="py-3 px-4 text-lg text-gray-700 hover:bg-gray-300 rounded-xl transition duration-300 ease-in-out"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="py-3 px-4 text-center text-gray-500">
            No items found
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProtecteRoute(Task1);
