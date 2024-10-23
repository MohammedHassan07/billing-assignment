const express = require('express')
const { addCustomer, viewCustomer } = require('../controllers/customer.controller')
const isEmpty = require('../middlewares/isEmpty')
const isUnique = require('../middlewares/isUnique')

const route = express.Router()

route.post('/add', isEmpty, isUnique,addCustomer)

route.get('/view', viewCustomer)

module.exports = route