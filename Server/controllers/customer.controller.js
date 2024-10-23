const customerModel = require("../models/customer.model")

// function to add customer
const addCustomer = async (req, res) => {

    try {

        const { name, email, contact, gender } = req.body

        const customer = new customerModel({ name, email, contact, gender })

        const saved = await customer.save()

        if (!saved) return res.status(500).json({ message: 'Something went wrong, Try after sometimes' })

        res.status(200).json({ message: 'Customer created successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

// function to view customer
const viewCustomer = async (req, res) => {

    try {

        const customers = await customerModel.find()

        if (customers) return res.status(200).json({ customers })
        else return res.status(404).json({ message: 'No customer found' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

module.exports = {
    addCustomer,
    viewCustomer
}