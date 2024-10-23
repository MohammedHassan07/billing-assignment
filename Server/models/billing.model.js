const {Schema, model} = require('mongoose')

const billingSchema = new Schema({

    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
    },

    products: [{

        product: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        quantity: Number
    }],
    totalAmount: Number

}, {timestamps: true})



const billingModel = model('billing', billingSchema);

module.exports = billingModel;
