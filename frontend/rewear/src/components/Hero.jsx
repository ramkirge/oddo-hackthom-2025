import React from 'react'

function Hero() {
  return (
    <div>
        <section className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">Swap Clothes, Save Earth 🌍</h1>
        <p className="mb-6 text-gray-600">Start exchanging unused clothes in a sustainable way.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Start Swapping</button>
          <button className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300">Browse Items</button>
        </div>
      </section>
    </div>
  )
}

export default Hero