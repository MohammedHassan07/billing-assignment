const customerModel = require('../models/customer.model')

// function to check the user is not present in the database (unique mobile number)
module.exports = async function checkUnique(req, res, next) {

    const { contact } = req.body

    const user = await customerModel.find({ contact })

    if (user.lenght !== 0) return res.status(400).json({ message: `User is already present with ${contact}` })

    next()
} 