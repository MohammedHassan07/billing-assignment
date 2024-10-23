const productModel = require("../models/product.model")

// function to add update
const addProduct = async (req, res) => {

    try {

        const { productName, productPrince, quantity, brand, suplier, oldStock, productcategory } = req.body

        const product = new productModel({ productName, productPrince, quantity, brand, suplier, oldStock, productcategory })

        const saved = await product.save()

        if (!saved) return res.status(500).json({ message: 'Something went wrong, Try after sometimes' })

        res.status(200).json({ message: 'Product added successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

// function to view product
const viewProduct = async (req, res) => {

    try {

        const products = await productModel.find()

        if (products.length !== 0) return res.status(200).json({products})
        else return res.status(404).json({ message: 'No product found' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

// function to edit product
const editProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { productName, productPrice, quantity, brand, supplier, oldStock, productCategory } = req.body

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { productName, productPrice, quantity, brand, supplier, oldStock, productCategory },
            { new: true } 
        )

        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' })

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addProduct,
    viewProduct,
    editProduct
}