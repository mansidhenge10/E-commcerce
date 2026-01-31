import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Track current route

  const handleSearch = () => {
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    navigate("/search", { state: { products: results, query } });
    setOpen(false); // Close input
    setQuery("");
  };

  // Close search input automatically when the page changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <div className="relative">
      {/* Search Icon */}
      <img
        src="/src/assets/search.png"
        className="w-5 h-5 cursor-pointer"
        onClick={() => setOpen(!open)}
        alt="search"
      />

      {/* Input Field */}
      {open && (
        <div className="absolute top-8 right-0 sm:-right-4 w-80 bg-white shadow-md rounded border z-50">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 pr-10 outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
