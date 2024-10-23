const customerModel = require('../models/customer.model')

// function to check the user is not present in the database (unique mobile number)
module.exports = async function checkUnique(req, res, next) {

    const { contact } = req.body

    const user = await customerModel.findOne({ contact })

    if (user) return res.status(400).json({ message: `User is already present with ${contact}` })
    else {

        next()
    }
} 