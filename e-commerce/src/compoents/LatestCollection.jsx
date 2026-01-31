import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    if (products && products.length > 0) {
      const latest = products.filter((item) => !item.bestseller).slice(0, 6);
      setLatestProducts(latest);
    }
  }, [products]);

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore the latest additions to our curated collection. Simple.
          Elegant. Made for you..✩ Redefine your everyday wardrobe—timeless
          fashion meets modern flair.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
