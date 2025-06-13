const products = [
  // --- Women ---
  {
    id: "W01",
    name: "Elegant Red Dress",
    description: "Perfect for evening parties and formal events.",
    category: "Women",
    subCategory: "Dresses",
    price: 1499,
    sizes: ["XS", "S", "M", "L", "XL"],
    bestseller: true,
    image: "/assets/women/red_dress.jpg",
    date: "2024-05-20"
  },
  {
    id: "W02",
    name: "Blue Casual Top",
    description: "Comfortable and stylish for daily wear.",
    category: "Women",
    subCategory: "Tops",
    price: 699,
    sizes: ["XS", "S", "M", "L", "XL"],
    bestseller: false,
    image: "/assets/women/blue_top.jpg",
    date: "2024-05-18"
  },
  // ... 18 more women products ...

  // --- Men ---
  {
    id: "M01",
    name: "Formal White Shirt",
    description: "Classic fit formal shirt for office wear.",
    category: "Men",
    subCategory: "Shirts",
    price: 999,
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    image: "/assets/men/white_shirt.jpg",
    date: "2024-06-01"
  },
  {
    id: "M02",
    name: "Casual Jeans",
    description: "Slim-fit stretch jeans for comfort.",
    category: "Men",
    subCategory: "Jeans",
    price: 1299,
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    image: "/assets/men/jeans.jpg",
    date: "2024-06-05"
  },
  // ... 18 more men products ...

  // --- Girls ---
  {
    id: "G01",
    name: "Floral Frock",
    description: "Bright and colorful frock for parties.",
    category: "Girls",
    subCategory: "Frocks",
    price: 899,
    sizes: ["XS", "S", "M"],
    bestseller: true,
    image: "/assets/girls/floral_frock.jpg",
    date: "2024-05-10"
  },
  {
    id: "G02",
    name: "Cartoon Print T-shirt",
    description: "Fun and comfy T-shirt with cartoon prints.",
    category: "Girls",
    subCategory: "T-Shirts",
    price: 399,
    sizes: ["XS", "S", "M"],
    bestseller: false,
    image: "/assets/girls/cartoon_tshirt.jpg",
    date: "2024-05-15"
  },
  // ... 18 more girl products ...

  // --- Boys ---
  {
    id: "B01",
    name: "Denim Jacket",
    description: "Trendy denim jacket for cool weather.",
    category: "Boys",
    subCategory: "Jackets",
    price: 1099,
    sizes: ["XS", "S", "M"],
    bestseller: true,
    image: "/assets/boys/denim_jacket.jpg",
    date: "2024-05-25"
  },
  {
    id: "B02",
    name: "Sports Shorts",
    description: "Comfortable shorts for active kids.",
    category: "Boys",
    subCategory: "Shorts",
    price: 499,
    sizes: ["XS", "S", "M"],
    bestseller: false,
    image: "/assets/boys/sports_shorts.jpg",
    date: "2024-05-28"
  }
  // ... 18 more boy products ...
];

export default products;
