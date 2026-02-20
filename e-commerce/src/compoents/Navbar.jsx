import { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

const { products, getCartCount, getWishlistCount } =
  useContext(ShopContext);
 // Get products
  const location = useLocation();
  const navigate = useNavigate();

  // Close search bar when navigating to another page
  useEffect(() => {
    setSearchOpen(false);
    setQuery("");
  }, [location.pathname]);

  const handleSearch = () => {
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    navigate("/search", { state: { products: results, query } });
    setSearchOpen(false);
    setQuery("");
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "COLLECTION", path: "/collection" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img
          src="/src/assets/logo.png"
          className="w-16 sm:w-20 ml-4 sm:ml-10"
          alt="logo"
        />
      </Link>

      {/* Nav Links */}
      <ul className="hidden sm:flex sm:pl-[12%] gap-5 text-sm text-gray-800">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 relative ${
                isActive ? "text-black" : "text-gray-800"
              }`
            }
          >
            <p>{link.name}</p>
            {/* Underline for active link */}
            <span
              className={`h-[1.5px] w-full bg-black transition-all duration-300 ${
                location.pathname === link.path ? "block" : "hidden"
              }`}
            ></span>
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="px-4 sm:px-20 flex items-center gap-4 flex-shrink-0 relative">
        {/* SEARCH ICON */}
        <div className="relative">
          <img
            src="/src/assets/search.png"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
            alt="search"
          />

          {/* Search input */}
          {searchOpen && (
            <div className="absolute top-8 right-0 sm:-right-4 w-80 bg-white shadow-md rounded border z-50">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2 pr-10 outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="group relative">
         <Link to ="/login"> <img
            className="w-5 cursor-pointer"
            src="/src/assets/user.png"
            alt="user"
          />
          </Link>
          <div className="group-hover:block hidden absolute top-full left-1/2 -translate-x-[40%] z-50 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-700 shadow-md">
              <Link to="/profile">My Profile</Link>
            <Link to="/orders">Orders</Link>
              <p>Logout</p>
            </div>
          </div>
        </div>
{/* Wishlist Icon */}

<Link to="/wishlist" className="text-3xl cursor-pointer">
♡
</Link>


        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            className="w-5 cursor-pointer"
            src="/src/assets/shopping-cart.png"
            alt="cart"
          />
        {getCartCount() > 0 && (
  <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
    {getCartCount()}
  </p>
)}

        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          src="/src/assets/menu_icon.png"
          alt="menu"
        />
      </div>

      {/* Sidebar menu */}
      {visible && (
        <div className="fixed inset-0 bg-white z-50">
          <div
            onClick={() => setVisible(false)}
            className="p-4 cursor-pointer"
          >
            Back
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
