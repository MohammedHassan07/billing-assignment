const {Schema, model} = require('mongoose')

const productSchema = new Schema({

    productName: String,
    productPrice: Number, 
    quantity: Number,
    brand: String,
    suplier: String,
    oldStock: Number,
    productcategory: String

}, {timestampes: true})

const productModel = model('product', productSchema)

module.exports = productModel