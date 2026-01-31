// src/components/ProductItem.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-800 cursor-pointer">
      <div className="w-full h-[250px] flex items-center justify-center bg-white border p-2 hover:shadow-lg transition">
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain hover:scale-105 transition"
        />
      </div>

      <div className="text-center mt-2">
        <p className="text-sm">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
