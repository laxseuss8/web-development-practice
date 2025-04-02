import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="max-w-sm shadow-xl rounded-lg bg-white p-4 h-full flex flex-col justify-between
    inset-shadow-indigo-600 hover:scale-105 transition-all duration-500 border border-gray-200
    dark:bg-gray-800 dark:border-gray-700"
    >
      {/* Image Section */}
      <div
        className="max-w-sm bg-white rounded-t-lg items-center overflow-hidden 
        text-2xl dark:bg-gray-800 dark:border-gray-700 w-full sm:text-xl 
    tracking-tight hover:scale-110 transition-all duration-1000 
      flex justify-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain rounded-t-lg bg-white"
        />
      </div>

      {/* Product Details */}
      <div className="p-1 flex flex-col flex-grow">
        <div className="justify-between flex">
          <h2
            className="mb-2 text-xl font-medium tracking-tight text-gray-800 
          dark:text-white"
          >
            {product.title.length > 25
              ? product.title.substring(0, 25) + "..."
              : product.title}
          </h2>
        </div>

        {/* Description with more space */}
        <p className="mb-0 font-extralight text-gray-700 dark:text-gray-400">
          {product.description.substring(0, 60) + "..."}
        </p>
        <div className="w-full border-black"></div>
      </div>
      {/* Badge & Button Section (Compact) */}
      <div className="flex justify-between items-center mt-1">
        <div className="flex flex-col gap-1">
          {product.type.includes("solution") && (
            <span className="solutionbadge">Solution</span>
          )}
          {product.type.includes("product") && (
            <span className="productbadge">Product</span>
          )}
        </div>
        <Link to={`/product/${product.id}`}>
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg 
        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
