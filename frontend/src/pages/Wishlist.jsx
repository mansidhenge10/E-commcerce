// src/pages/Wishlist.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems, products } = useContext(ShopContext);

  // Filter products that are in wishlist
  const wishlistProducts = products.filter((p) =>
    wishlistItems.includes(p.id)
  );

  if (wishlistProducts.length === 0) {
    return <p className="p-6 text-center text-gray-600">Your wishlist is empty ❤️</p>;
  }

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
      {wishlistProducts.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="flex flex-col items-center border p-3 rounded hover:shadow-md transition"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover rounded" // increased height
          />

          {/* Product Name */}
          <p className="mt-2 text-sm font-semibold text-center">{product.name}</p>

          {/* Product Price */}
          <p className="text-black font-bold mt-1 text-center">₹{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default Wishlist;
