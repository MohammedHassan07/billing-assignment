const express = require('express')
const isEmpty = require('../middlewares/isEmpty')
const { createBill, deleteBill, editBilling, updateBill } = require('../controllers/billing.controller')

const route = express.Router()

route.post('/create-bill', isEmpty, createBill)

route.get('/edit/:id', editBilling)

route.post('/update/:id', isEmpty, updateBill)

route.get('/delete/:id', deleteBill)

module.exports = route