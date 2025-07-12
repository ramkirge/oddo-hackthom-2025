import React from 'react'

function Categorie() {
  return (
    <div>
        <section className="py-8 px-6">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['Men', 'Women', 'Kids', 'Accessories', 'Shoes', 'Winter Wear'].map((cat, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded shadow hover:shadow-lg text-center cursor-pointer">
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Categorie