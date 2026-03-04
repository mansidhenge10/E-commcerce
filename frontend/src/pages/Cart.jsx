import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    addToCart,
    removeFromCart,
    toggleWishlist,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [modalData, setModalData] = useState(null);
const navigate = useNavigate();

  // Handle delete click
  const handleDeleteClick = (id, size) => {
    setModalData({ id, size });
  };

  // Move to wishlist
  const moveToWishlist = () => {
    if (modalData) {
      const { id, size } = modalData;
      toggleWishlist(id);
      removeFromCart(id, size, true);
      setModalData(null);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setModalData(null);
  };

  // Build cart data
  useEffect(() => {
    const temp = [];
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          temp.push({
            id,
            size,
            quantity: cartItems[id][size],
          });
        }
      }
    }
    setCartData(temp);
  }, [cartItems]);

  // Calculate subtotal
  const subtotal = cartData.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? acc + product.price * item.quantity : acc;
  }, 0);

  // Shipping charge
  const shippingCharge = subtotal > 0 ? 50 : 0;

  // Total
  const total = subtotal + shippingCharge;

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
              {/* Product Image */}
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

                <p className="text-sm text-gray-500">
                  {currency}{product.price} × {item.quantity}
                </p>

                <p className="font-semibold">
                  Total: {currency}{product.price * item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="border px-2"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => addToCart(item.id, item.size)}
                    className="border px-2"
                  >
                    +
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() =>
                      handleDeleteClick(item.id, item.size)
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

      {/* Cart Total Section */}
      {cartData.length > 0 && (
        <>
         

          <div className="border p-5 rounded w-full mr-auto">
            <h3 className="text-lg font-semibold mb-4 text-left">
              Cart Total
            </h3>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2">
                <span className="text-gray-600 text-left">
                  Subtotal
                </span>
                <span className="text-right">
                  {currency}{subtotal}
                </span>
              </div>

              <div className="grid grid-cols-2">
                <span className="text-gray-600 text-left">
                  Shipping Charges
                </span>
                <span className="text-right">
                  {currency}{shippingCharge}
                </span>
              </div>

              <div className="border-t pt-3 mt-3"></div>

              <div className="grid grid-cols-2 font-semibold text-base">
                <span className="text-left">Total</span>
                <span className="text-right">
                  {currency}{total}
                </span>
              </div>
    <div className="flex justify-end">
  <button
   onClick={() => navigate("/checkout")}
    className="w-80 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
  >
    Proceed to Checkout
  </button>
</div>


            </div>
          </div>
        </>
      )}

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <p className="mb-4 text-gray-700">
              Do you want to move this product to your wishlist?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={moveToWishlist}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
