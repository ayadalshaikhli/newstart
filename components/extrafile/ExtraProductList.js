import React from 'react'
import ExtraProductCard from './ExtraProductCard'

export default function ExtraProductList({ products }) {
  return (
    <div className="bg-white ">
    <div className=" max-w-2xl mx-auto my-5 py-5  border-4 border-black rounded-md sm:py-10  lg:max-w-7xl  ">
      <h2 className="text-2xl flex font-extrabold  pb-5 pl-5 text-gray-900 mb-6 border-black border-b-2 ">
        Featured
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {products.map((product) => (
          <ExtraProductCard key={product.node.id} product={product} />
        ))}
      </div>
    </div>
  </div>
  )
}
