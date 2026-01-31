import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        temp.push({
          id,
          size,
          quantity: cartItems[id][size],
        });
      }
    }
    setCartData(temp);
  }, [cartItems]);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cartData.map((item, index) => {
          const product = products.find((p) => p.id === item.id);
          if (!product) return null;

          return (
            <div
              key={index}
              className="flex gap-4 items-center border-b py-4"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover"
              />

              {/* Product Info */}
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">
                  Size: {item.size}
                </p>
                <p className="font-semibold">
                  {currency}
                  {product.price}
                </p>

                {/* ✅ Quantity + Delete (same row) */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.size)
                    }
                    className="border px-2"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      addToCart(item.id, item.size)
                    }
                    className="border px-2"
                  >
                    +
                  </button>

                  {/* 🗑 DELETE ICON RIGHT OF + */}
                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.size, true)
                    }
                    className="text-red-500 text-lg hover:scale-110 transition"
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
