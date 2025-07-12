import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-100 p-2 rounded">Detail 1</div>
            <div className="bg-gray-100 p-2 rounded">Detail 2</div>
            <div className="bg-gray-100 p-2 rounded">Detail 3</div>
            <div className="bg-gray-100 p-2 rounded">Detail 4</div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">My Listings</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[...Array(4)].map((_, i) => <div key={i} className="bg-gray-100 h-24 rounded"></div>)}
      </div>
      <h2 className="text-lg font-semibold mb-2">My Purchases</h2>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => <div key={i} className="bg-gray-100 h-24 rounded"></div>)}
      </div>
    </div>
  );
};

export default Dashboard;