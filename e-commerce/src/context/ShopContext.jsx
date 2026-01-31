import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 10;

  const [cartItems, setCartItems] = useState({});

  // ✅ ADD TO CART
  const addToCart = (itemId, size) => {
    setCartItems(prev => {
      const cartData = structuredClone(prev);

      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

      return cartData;
    });
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (itemId, size, removeAll = false) => {
    setCartItems(prev => {
      const cartData = structuredClone(prev);
      if (!cartData[itemId]) return prev;

      if (removeAll) {
        delete cartData[itemId][size];
      } else {
        cartData[itemId][size] -= 1;
        if (cartData[itemId][size] <= 0) {
          delete cartData[itemId][size];
        }
      }

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

      return cartData;
    });
  };

  // ✅ CART COUNT (for icon)
  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        total += cartItems[id][size];
      }
    }
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
