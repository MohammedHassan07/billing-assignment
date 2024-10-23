const mongoose = require('mongoose')
module.exports = async function connectDB() {

    const DB_URL = process.env.DB_URL
    const connection = await mongoose.connect(DB_URL)

    if (connection) console.log('connected')
}