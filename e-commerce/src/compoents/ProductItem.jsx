import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, toggleWishlist, isInWishlist } =
    useContext(ShopContext);

  return (
    <div className="relative border p-2 hover:shadow-lg">
  {/* ❤️ Wishlist Heart */}
  <button
    onClick={() => toggleWishlist(id)}
    className="absolute top-2 right-2 text-3xl z-10"
  >
    {isInWishlist(id) ? (
      <span className="text-red-500">♥</span> // filled heart
    ) : (
      <span className="text-black">♡</span> // empty heart but still red
    )}
  </button>
      {/* Product Click */}
      <Link to={`/product/${id}`}>
        <div className="w-full h-[250px] flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="text-center mt-2">
          <p className="text-sm">{name}</p>
          <p className="text-sm font-medium">
            {currency}{price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
