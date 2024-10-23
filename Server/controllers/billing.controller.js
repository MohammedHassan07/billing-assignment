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
        
            totalAmount += product.productPrice * item.quantity

            billingProducts.push({
                product: item.productId,
                quantity: item.quantity,
            })
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

// function to update bill
const updateBill = async (req, res) => {
        try {
            const { id } = req.params
            const { customerId, products } = req.body
    
            const customer = await customerModel.findById(customerId)
            if (!customer) return res.status(404).json({ message: "Customer not found" })
    
            let totalAmount = 0
            const billingProducts = []
    
            for (const item of products) {
                const product = await productModel.findById({_id: item.productId})
                if (!product) return res.status(404).json({ message: `Product not found with id: ${item.productId}` })
    
                totalAmount += product.productPrice * item.quantity
    
                billingProducts.push({
                    product: item.productId,
                    quantity: item.quantity
                })
            }
    
            // Update billing record
            const updatedBilling = await billingModel.findByIdAndUpdate(
                id,
                { customer: customerId, products: billingProducts, totalAmount },
                { new: true } // Return updated document
            )
    
            if (!updatedBilling) return res.status(404).json({ message: 'Billing record not found' })
    
            res.status(200).json({ message: 'Billing updated successfully', billing: updatedBilling })
    
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }
    }

// function to edit bill
const editBilling = async (req, res) => {
    try {
        const { id } = req.params

        const billing = await billingModel.findById(id).populate('customer').populate('products.product')

        if (!billing) {
            return res.status(404).json({ message: 'Billing record not found' })
        }

        res.status(200).json({ billing })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// Function to delete billing record
const deleteBill = async (req, res) => {

    try {
        const { id } = req.params 

        const deletedBilling = await billingModel.findByIdAndDelete(id)

        if (!deletedBilling) return res.status(404).json({ message: 'Billing record not found' })

        res.status(200).json({ message: 'Record deleted successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createBill,
    editBilling,
    updateBill,
    deleteBill

}
