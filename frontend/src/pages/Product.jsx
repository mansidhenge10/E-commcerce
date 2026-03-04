import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { id } = useParams();
const { products, currency, addToCart } = useContext(ShopContext);

const { toggleWishlist, isInWishlist } = useContext(ShopContext);

  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-10">Loading...</div>;

  const [mainImage, setMainImage] = useState(product.images?.[0] || product.image);
  const [selectedSize, setSelectedSize] = useState("");
const [wishlist, setWishlist] = useState(false);
  return (
    <div className="w-full px-10 py-10">
      <div className="flex gap-10">

        {/* LEFT: Thumbnails */}
        <div className="flex flex-col gap-4">
          {(product.images || []).slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              onClick={() => setMainImage(img)}
              className="w-[100px] h-[120px] object-cover border cursor-pointer hover:border-black transition"
            />
          ))}
        </div>

        {/* CENTER: Main Image */}
        <div className="w-[450px] flex justify-center">
          <img
            src={mainImage}
            alt={product.name}
            className="w-450 h-[450px] object-cover border rounded"
          />
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          {/* Rating stars */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
<p className="mt-2 text-gray-600 leading-relaxed">
Perfect for evening parties and formal events.  
Made from high-quality, breathable fabric that ensures comfort all day.  
Elegant design with a flattering fit for every occasion.  
Pair it with heels or sandals to complete the look.  
 
</p>


          {/* Sizes */}
          <div className="mt-2">
            <p className="font-medium mb-1">Size</p>
            <div className="flex gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(s)}
                  className={`border px-3 py-1 rounded text-sm transition
                    ${selectedSize === s ? "bg-black text-white" : "hover:bg-gray-200"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {/* Price */}
          <p className="text-xl font-medium mt-2">{currency}{product.price}</p>
          {/* Buttons */}
          <div className="flex items-center gap-4 mt-2">
  {/* Add to Cart */}
 <button
  onClick={() => {
    if (!selectedSize) {
      toast.error("Please select a size first",);
      return;
    }

    addToCart(product.id, selectedSize);
    toast.success("Added to cart");
  }}
  className="bg-black text-white w-[150px] h-[40px] rounded text-sm hover:bg-gray-800 transition"
>
  Add to Cart
</button>

  {/* Wishlist Heart Button */}
 <button
  onClick={() => toggleWishlist(product.id)} // <-- use ShopContext toggle
  className="text-3xl flex items-center justify-center h-[40px] w-[40px] transition"
>
  {isInWishlist(product.id) ? (
    <span className="text-red-500">♥</span> // filled heart if in wishlist
  ) : (
    <span className="text-gray-500">♡</span> // empty heart if not in wishlist
  )}
</button>
</div>
<hr className="border-t border-gray-300 my-4" />
{/* Below Add to Cart button */}
<div className="flex flex-col mt-3 text-gray-600 text-md">
  <div className="flex items-center gap-2">
   
    <span>100% Original Product</span>
  </div>
  <div className="flex items-center gap-2">
   
    <span>Free Shipping</span>
  </div>
  <div className="flex items-center gap-2">

    <span>Easy Return & Exchange</span>
  </div>
</div>
        </div>
      </div>

      {/* Description */}

  <div className="flex gap-6 mt-10">
  <button className="border px-6 py-2 hover:bg-gray-100 transition">
    Description
  </button>
  <button className="border px-6 py-2 hover:bg-gray-100 transition">
    Review (20)
  </button>
</div>

{/* Add margin-top to the paragraph */}
<div className="border border-gray-300 p-4 rounded-md mt-4 max-w-3xl">

<p className="text-gray-600 leading-relaxed">
  This elegant blue dress is perfect for evening parties, formal events, and special occasions. 
  Made from high-quality, breathable fabric, it ensures all-day comfort. 
  The flattering silhouette enhances your natural shape, while the sophisticated design adds a touch of class. 
  Pair it with heels or sandals to complete a chic and stylish look.
  {product.description}
</p>
</div>
{/* Related Products */}
<div className="mt-12">
  <h2 className="text-xl font-semibold mb-6">Related Products</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {products
      .filter(
        (item) =>
          item.category === product.category && item.id !== product.id
      )
      .slice(0, 4)
      .map((item) => (
        <div
          key={item.id}
          className="border p-3 rounded hover:shadow transition cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[220px] object-cover mb-3"
          />

          <h3 className="text-sm font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600">
            {currency}{item.price}
          </p>
        </div>
      ))}
  </div>
</div>

</div>
  );
}; 

export default Product;
