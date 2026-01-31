import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./compoents/Navbar";
import Footer from "./compoents/Footer";
import OurStory from "./pages/OurStory"; 
import UserProfile from "./pages/UserProfile";
import SearchResults from "./pages/SearchResults";
import { ShopContext } from "./context/ShopContext.jsx";

const App = () => {
  const { products } = useContext(ShopContext); // Get products from context

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Pass products to Navbar */}
      <Navbar products={products} />
 <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} /> 
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Search results page */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
