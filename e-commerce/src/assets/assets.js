// ################### Women #############
// latest collection
import subimage1 from "../assets/women/subimage1.jpeg";
import subimage2 from "../assets/women/subimage2.jpeg";
import subimage3 from "../assets/women/subimage3.jpeg";
import subimage4 from "../assets/women/subimage4.jpeg";

import image2 from "../assets/women/image2.jpg";
import image3 from "../assets/women/image3.jpg";
// best seller
import image4 from "../assets/women/image4.jpg";
import image5 from "../assets/women/image5.jpg";
import image6 from "../assets/women/image6.jpg";

// ######### Men #############
// latest collection
import image21 from "../assets/men/image1.jpg";
import image22 from "../assets/men/image2.jpg";
import image23 from "../assets/men/image3.jpg";
// best seller
import image24 from "../assets/men/image4.jpg";
import image25 from "../assets/men/image5.jpg";
import image26 from "../assets/men/image6.jpg";
// ############Girls#########
import image31 from "../assets/girls/image1.jpg";
import image32 from "../assets/girls/image2.jpg";
// ############Boys#########
import image41 from "../assets/boys/image1.jpg";
import image42 from "../assets/boys/image2.jpg";
export const products = [
  // --- Women: Latest Collection ---
  {
    id: "W01",
    name: " Blue Dress",
    description: "Perfect for evening parties and formal events.",
    category: "Women",
    subCategory: "Dresses",
    price: 1499,
    sizes: ["XS", "S", "M", "L", "XL"],
    bestseller: false,
    image: subimage1,
    images: [subimage1, subimage2, subimage3, subimage4],
    date: "2024-05-20",
  },
  {
    id: "W02",
    name: "Black short dress",
    description: "Comfortable and stylish for daily wear.",
    category: "Women",
    subCategory: "Short dress",
    price: 699,
    sizes: ["XS", "S", "M", "L", "XL"],
    bestseller: false,
    image: image2,
    images: [image2, image2, image2, image2],

    date: "2024-05-18",
  },
  {
    id: "W03",
    name: "Summer Dress",
    description: "Breezy and light for summer days.",
    category: "Women",
    subCategory: "Dresses",
    price: 1299,
    sizes: ["S", "M", "L"],
    bestseller: false,
    image: image3,
    images: [image3, image3, image3, image3],
    date: "2024-05-15",
  },

  // --- Women: Best Sellers ---
  {
    id: "W04",
    name: "Black Party Wear Dress",
    description: "Elegant black blazer for professional wear.",
    category: "Women",
    subCategory: "long dress",
    price: 1999,
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    image: image4,
    images: [image4, image4, image4, image4],
    date: "2024-05-12",
  },
  {
    id: "W05",
    name: "Beige Wide-Leg Pants",
    description: "Comfortable and trendy wide-leg trousers.",
    category: "Women",
    subCategory: "Pants",
    price: 899,
    sizes: ["XS", "S", "M", "L"],
    bestseller: true,
    image: image5,
    images: [image5, image5, image5, image5],
    date: "2024-05-11",
  },
  {
    id: "W06",
    name: "White Linen Shirt",
    description: "Soft and breathable linen for daily wear.",
    category: "Women",
    subCategory: "Shirts",
    price: 799,
    sizes: ["S", "M", "L"],
    bestseller: true,
    image: image6,
    images: [image6, image6, image6, image6],
    date: "2024-05-09",
  },

  // --- Men: Latest Collection ---
  {
    id: "M01",
    name: "Formal yellow Shirt",
    description: "Classic fit formal shirt for office wear.",
    category: "Men",
    subCategory: "Shirts",
    price: 999,
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    image: image21,
    images: [image21, image21, image21, image21],
    date: "2024-06-01",
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
    image: image22,
    images: [image22, image22, image22, image22],
    date: "2024-06-05",
  },
  {
    id: "M03",
    name: "pink sunny Shirt",
    description: "Smart casual wear with fine checks.",
    category: "Men",
    subCategory: "Shirts",
    price: 899,
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    image: image23,
    images: [image23, image23, image23, image23],
    date: "2024-06-06",
  },

  // --- Men: Best Sellers ---
  {
    id: "M04",
    name: "Black Hoodie",
    description: "Warm fleece hoodie for everyday use.",
    category: "Men",
    subCategory: "Hoodies",
    price: 1399,
    sizes: ["M", "L", "XL"],
    bestseller: true,
    image: image24,
    images: [image24, image24, image24, image24],
    date: "2024-06-04",
  },
  {
    id: "M05",
    name: "Slim Fit T-Shirt",
    description: "Soft cotton t-shirt for casual outings.",
    category: "Men",
    subCategory: "T-Shirts",
    price: 499,
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    image: image25,
    images: [image25, image25, image25, image25],
    date: "2024-06-03",
  },
  {
    id: "M06",
    name: "Grey Chinos",
    description: "Classic chinos perfect for office or travel.",
    category: "Men",
    subCategory: "Trousers",
    price: 1199,
    sizes: ["M", "L", "XL"],
    bestseller: true,
    image: image26,
    images: [image26, image26, image26, image26],
    date: "2024-06-02",
  },

  {
    id: "G01",
    name: "Floral Frock",
    description: "Cute floral frock for casual and party wear.",
    category: "Girls",
    subCategory: "Dresses",
    price: 899,
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    bestseller: false,
    image: image31,
    images: [image31, image31, image31, image31],
    date: "2024-05-18",
  },
  {
    id: "G02",
    name: "Pink Tunic",
    description: "Comfortable tunic for everyday wear.",
    category: "Girls",
    subCategory: "TopWear",
    price: 799,
    sizes: ["3Y", "4Y", "5Y"],
    bestseller: false,
    image: image32,
    images: [image32, image32, image32, image32],
    date: "2024-05-19",
  },

  // 👦 Boys Products
  {
    id: "B01",
    name: "Denim Shorts",
    description: "Casual denim shorts for boys aged 3 to 7.",
    category: "Boys",
    subCategory: "BottomWear",
    price: 699,
    sizes: ["3Y", "4Y", "5Y", "6Y"],
    bestseller: false,
    image: image41,
    images: [image41, image41, image41, image41],
    date: "2024-05-15",
  },
  {
    id: "B02",
    name: "Graphic T-Shirt",
    description: "Cool printed T-shirt made from soft cotton.",
    category: "Boys",
    subCategory: "TopWear",
    price: 599,
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    bestseller: false,
    image: image42,
    images: [image42, image42, image42, image42],
    date: "2024-05-16",
  },
];
// #########################
// ✅ Export categorized data
// #########################

export const latestWomen = products.filter(
  (item) => item.category === "Women" && !item.bestseller
);

export const bestSellerWomen = products.filter(
  (item) => item.category === "Women" && item.bestseller
);

export const latestMen = products.filter(
  (item) => item.category === "Men" && !item.bestseller
);

export const bestSellerMen = products.filter(
  (item) => item.category === "Men" && item.bestseller
);
