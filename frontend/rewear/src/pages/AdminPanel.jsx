// --- AdminPanel.jsx ---
import React from 'react';

const AdminPanel = () => {
  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Manage Users</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Manage Orders</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Manage Listings</button>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-white shadow p-4 rounded flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>Details</div>
            </div>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-green-500 text-white rounded">Action 1</button>
              <button className="px-3 py-1 bg-red-500 text-white rounded">Action 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;