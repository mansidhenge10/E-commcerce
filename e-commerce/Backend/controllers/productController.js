

// function for add product 
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body
        const image1 = req.files?.image1?.[0] || null
        const image2 = req.files?.image2?.[0] || null
        const image3 = req.files?.image3?.[0] || null
        const image4 = req.files?.image4?.[0] || null
        console.log("BODY:", req.body);
        console.log("FILES:", req.files);
        res.json({ success: true })


    } catch (error) {
        console.log(error);

        res.json({ success: false, message: error.message })
    }
}

//function for list product
const listProducts = async (req, res) => {

}
//function for removing product
const removeProduct = async (req, res) => {

}

//function for single product info
const singleProduct = async (req, res) => {

}
export { listProducts, addProduct, removeProduct, singleProduct }