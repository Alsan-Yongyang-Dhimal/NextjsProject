// components/Navbar.js
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-center text-xl items-center p-4">
        <ul className="flex space-x-10">
          
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
          <li>
            <Link href="/task2">Task2</Link>
          </li>
          <li>
            <Link href="/task1">Task1</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
