const express = require('express')
const isEmpty = require('../middlewares/isEmpty')
const { createBill } = require('../controllers/billing.controller')

const route = express.Router()

route.post('/create-bill', isEmpty, createBill)

// route.get('/view')

module.exports = route