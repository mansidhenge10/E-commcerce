import React from "react";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ currency, subtotal }) => {
  const navigate = useNavigate();

  const safeSubtotal = Number(subtotal) || 0;

  const shippingCharge = safeSubtotal > 0 ? 50 : 0;
  const total = safeSubtotal + shippingCharge;

  return (
    <div className="border p-5 rounded w-full mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Cart Total
      </h3>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{currency}{safeSubtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Charges</span>
          <span>{currency}{shippingCharge}</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>{currency}{total}</span>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mt-3"
        >
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
};

export default CartTotal;