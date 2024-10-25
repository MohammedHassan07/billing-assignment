const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const cors = require('cors')
dotenv.config()

const app = express()

const option = { origin: '*' }
app.use(cors({ option }))
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
    connectDB()
})

const cusomterRoute = require('./routes/cusomter.routes')
const productRoute = require('./routes/product.routes')
const billingRoute = require('./routes/billing.routes')

app.use('/customer', cusomterRoute)
app.use('/product', productRoute)
app.use('/bill', billingRoute)