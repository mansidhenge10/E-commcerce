import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Handle category selection
  const handleCategoryChange = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
    );
  };

  // Handle type selection
  const handleTypeChange = (value) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
    );
  };

  // Filtering logic with improved search
  const filteredProducts = products
    .filter((item) => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchType =
        selectedTypes.length === 0 || selectedTypes.includes(item.subCategory);
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchType && matchSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4">
      {/* Filters */}
      <div className="sm:min-w-[250px] sticky top-0">
        <div
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:cursor-default"
        >
          <p className="font-semibold">FILTERS</p>
          <img
            className={`h-3 transition-transform duration-300 sm:hidden ${
              showFilters ? "rotate-180" : ""
            }`}
            src="/src/assets/down-arrow.png"
            alt="Toggle Filters"
          />
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-3 py-2 w-full text-sm rounded mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
    {/* Sorting */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-4 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          
          <p className="mb-3 text-sm font-medium">SORT BY</p>
          <select
            className="text-sm px-2 py-1 border rounded w-40"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
              {/* Clear Filters */}
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedTypes([]);
            setSearchQuery("");
            setSortOrder("");
          }}
          className={`mt-4 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded border ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          Clear All Filters
        </button>
        </div>
        {/* Category Filter */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-4 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Men", "Women", "Boys", "Girls"].map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-4 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["TopWear", "BottomWear", "Footwear", "Accessories"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

    

    
      </div>

      {/* Products Section */}
      <div className="flex-1">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 mt-10 text-center">No products found.</p>
        ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-3 hover:shadow-md transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded"
                />
                <h3 className="text-sm mt-2 font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-xs">
                  {product.category} • {product.subCategory}
                </p>
                <p className="text-black font-bold mt-1">₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
