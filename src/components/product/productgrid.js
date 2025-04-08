import React from "react";
import ProductKeys from "./productkeys";
import ProductCard from "./productcard";

import VegaBg from "../../assets/images/bg/vega.jpg";
const ProductGrid = () => {
  return (
    <div className="relative h-full w-full p-10 bg-gray-50">
      <img
        src={VegaBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-md"
      />
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    xl:grid-cols-5 gap-3 px-12 z-10 relative"
      >
        {ProductKeys.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="relative flex justify-center mt-6 space-x-3">
        {["Previous", "Next"].map((label, index) => (
          <a
            key={label}
            href="#"
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500
             bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
              dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {index === 0 && (
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            )}
            {label}
            {index === 1 && (
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
