const express = require('express')
const isEmpty = require('../middlewares/isEmpty')
const isUnique = require('../middlewares/isUnique')
const { addProduct, viewProduct, editProduct, deleteProduct } = require('../controllers/product.controller')

const route = express.Router()

route.post('/add', isEmpty, addProduct)

route.get('/view', viewProduct)

route.post('/edit/:id', isEmpty, editProduct)

route.get('/delete/:id', deleteProduct)

module.exports = route