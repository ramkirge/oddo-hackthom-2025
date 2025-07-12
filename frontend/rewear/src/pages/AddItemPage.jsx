import React from 'react';

const AddItemPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-100 h-64 rounded flex items-center justify-center">Add Images</div>
        <div>
          <textarea
            className="w-full border p-2 rounded h-48 mb-4"
            placeholder="Add Product Description"
          ></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Available / Swap</button>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold">Previous Listings</h3>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="bg-gray-200 h-24 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default AddItemPage;