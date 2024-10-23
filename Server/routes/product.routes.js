const express = require('express')
const isEmpty = require('../middlewares/isEmpty')
const isUnique = require('../middlewares/isUnique')
const { addProduct, viewProduct, editProduct } = require('../controllers/product.controller')

const route = express.Router()

route.post('/add', isEmpty, addProduct)

route.get('/view', viewProduct)

route.get('/edit', isEmpty, editProduct)

route.get('/delete')

module.exports = route