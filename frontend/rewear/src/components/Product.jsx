import React from 'react'

function Product() {
  return (
    <div>
        <section className="py-8 px-6">
        <h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">Item {i}</h3>
                <p className="text-sm text-gray-600">Category · Size</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product