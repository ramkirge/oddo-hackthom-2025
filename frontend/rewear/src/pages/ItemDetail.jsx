// --- ItemDetail.jsx ---
import React from 'react';

const ItemDetail = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-2xl font-bold">ReWear</div>
        <input
          type="text"
          placeholder="Search items..."
          className="border rounded px-3 py-1 w-64"
        />
      </header>
      <main className="p-6 grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 w-full h-80 rounded flex items-center justify-center shadow">
            <span className="text-gray-500">[Main Product Image]</span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((img, i) => (
              <div key={i} className="bg-gray-200 h-20 rounded flex items-center justify-center">
                <span className="text-sm text-gray-500">Img {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Beautiful Penguin</h2>
          <p className="text-gray-600 mb-4">Substantial Jellyfish Collection</p>
          <div className="bg-gray-50 p-4 rounded shadow">
            <p className="mb-2">
              This is a sample product description. It includes details about the
              item’s condition, category, size, and material.
            </p>
            <p className="text-sm text-gray-500">Uploaded by: Accomplished Crocodile</p>
          </div>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Request Swap</button>
            <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">Redeem with Points</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
