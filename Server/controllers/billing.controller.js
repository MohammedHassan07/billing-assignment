const customerModel = require("../models/customer.model")
const productModel = require("../models/product.model")
const billingModel = require("../models/billing.model")

// function to addd bill
const createBill = async (req, res) => {

    try {
        const { customerId, products } = req.body

        const customer = await customerModel.findById(customerId)
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        let totalAmount = 0
        const billingProducts = []

        for (const item of products) {
            const product = await productModel.findById({ _id: item.productId })
            if (!product) {
                return res.status(404).json({ message: `Product not found with id: ${item.productId}` })
            }

            console.log(product)
            console.log(typeof product.productPrice)
            if (typeof product.productPrice !== 'number' || typeof quantity !== 'number' || quantity <= 0) {
                return res.status(400).json({ message: `Invalid price or quantity for product ID: ${item.productId}` })
            }

            totalAmount += product.productPrice * item.quantity

            billingProducts.push({
                product: item.productId,
                quantity,
            })
        }

        if (isNaN(totalAmount) || totalAmount < 0) {
            return res.status(400).json({ message: 'Invalid total amount calculated.' })
        }

        const newBilling = new billingModel({
            customer: customerId,
            products: billingProducts,
            totalAmount,
        })

        const savedBilling = await newBilling.save()

        if (!savedBilling) {
            return res.status(500).json({ message: 'Failed to create billing, try again later.' })
        }

        res.status(200).json({
            message: 'Billing created successfully',
            billing: savedBilling,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createBill
}