// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">ReWear</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:underline">Home</Link>
        <Link to="/dashboard" className="text-gray-700 hover:underline">Dashboard</Link>
        <Link to="/add-item" className="text-gray-700 hover:underline">Add Item</Link>
        <Link to="/admin" className="text-gray-700 hover:underline">Admin</Link>
        <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
        <Link to="/register" className="text-green-600 font-semibold">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
