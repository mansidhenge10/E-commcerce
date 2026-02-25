import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//console.log("THIS IS THE CORRECT CONTROLLER FILE");
// ================= ADD PRODUCT =================
const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller
        } = req.body;
        console.log("REQ BODY:", req.body);
        console.log("PRICE VALUE:", price);
        // Get uploaded images
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter(
            (item) => item !== undefined
        );

        if (images.length === 0) {
            return res.json({
                success: false,
                message: "At least one image is required"
            });
        }

        // Upload images to cloudinary
        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, {
                    resource_type: "image"
                });
                return result.secure_url;
            })
        );
        // Create product object
        if (!price || isNaN(price)) {
            return res.json({
                success: false,
                message: "Valid price is required"
            });
        }
        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === "true",
            sizes: sizes ? JSON.parse(sizes) : [],
            image: imagesUrl,
            date: Date.now()
        };

        console.log("Product Data:", productData);

        const product = new productModel(productData);
        await product.save();

        return res.json({
            success: true,
            message: "Product Added Successfully"
        });

    } catch (error) {
        console.log("Error:", error);
        return res.json({
            success: false,
            message: error.message
        });
    }
};

// ================= LIST PRODUCTS =================
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ================= REMOVE PRODUCT =================
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await productModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// ================= SINGLE PRODUCT =================
const singleProduct = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("Body:", req.body);
        console.log("ID:", id);
        const product = await productModel.findById(id);
        res.json({ success: true, product });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProduct, singleProduct };