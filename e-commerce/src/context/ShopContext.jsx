import { createContext, useState } from "react";
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 10;

  /* ================= CART STATE ================= */
  const [cartItems, setCartItems] = useState({});

  // ✅ ADD TO CART
  const addToCart = (itemId, size) => {
    setCartItems((prev) => {
      const cartData = structuredClone(prev);

      if (!cartData[itemId]) cartData[itemId] = {};
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

      return cartData;
    });
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = (itemId, size, removeAll = false) => {
    setCartItems((prev) => {
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

  // ✅ CART COUNT (Navbar badge)
  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        total += cartItems[id][size];
      }
    }
    return total;
  };

  /* ================= WISHLIST STATE ================= */
  const [wishlistItems, setWishlistItems] = useState([]);

  // ❤️ ADD / REMOVE WISHLIST (toggle)
  const toggleWishlist = (itemId) => {
    setWishlistItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // ❤️ REMOVE FROM WISHLIST
  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => prev.filter((id) => id !== itemId));
  };

  // ❤️ WISHLIST COUNT (Navbar badge)
  const getWishlistCount = () => wishlistItems.length;

  // ❤️ CHECK IF ITEM IN WISHLIST
  const isInWishlist = (itemId) => wishlistItems.includes(itemId);

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee,

        // cart
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,

        // wishlist
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        getWishlistCount,
        isInWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
