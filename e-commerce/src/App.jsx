import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/collection" element={Collection} />
        <Route path="/cart" element={Cart} />
        <Route path="/contact" element={Contact} />
        <Route path="/about" element={About} />
        <Route path="/placeOrder" element={PlaceOrder} />
        <Route path="/orders" element={Orders} />
        <Route path="/products" element={Product} />
        <Route path="/login" element={Login} />
        <Route path="/home" element={Home} />
      </Routes>
    </div>
  );
};

export default App;
