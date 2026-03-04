import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { products: results = [], query = "" } = location.state || {};

  return (
    <div className="pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h2 className="text-xl font-semibold mb-6">
        Search results for: "{query}"
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-600 mt-10 text-center text-lg">
          Product "{query}" is not here 😢
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-3 hover:shadow-md transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-sm mt-2 font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-xs">
                {product.category} • {product.subCategory}
              </p>
              <p className="text-black font-bold mt-1">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
