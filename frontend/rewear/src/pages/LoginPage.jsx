// pages/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-6"></div>
        <input type="text" placeholder="Username" className="w-full mb-4 px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 px-3 py-2 border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;