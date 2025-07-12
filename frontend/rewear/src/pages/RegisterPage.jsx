// pages/RegisterPage.jsx
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-6"></div>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-3 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-4 px-3 py-2 border rounded" />
        <input type="text" placeholder="Username" className="w-full mb-4 px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 px-3 py-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
