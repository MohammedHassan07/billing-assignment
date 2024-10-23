const {Schema, model} = require('mongoose')

const customerSchema = new Schema({

    name: String,
    contact: String, 
    email: String,
    gender: String

}, {timestampes: true})

const customerModel = model('customer', customerSchema)

module.exports = customerModel