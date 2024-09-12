import { useState, useEffect } from "react";
import ProtecteRoute from "../HOC/protectedRoute";
import React from "react";

const Task2 = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        console.log(response);
        console.log(response.ok);

        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        setError("Failed to fetch usersList.");
        // console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-200 shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-extrabold text-rose-500 mb-6 text-center ">
        User Lists
      </h1>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="divide-y divide-gray-500 ">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 rounded-lg  bg-teal-700  transition duration-300 ease-in-out mb-4 "
            >
              <div className="flex-grow text-xl font-semibold text-slate-200 text-center  ">
                {user.name}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No users available.</div>
        )}
      </div>
    </div>
  );
};

export default ProtecteRoute(Task2);
