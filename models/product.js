const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({ //set the schema
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product', productSchema);   //set the module

module.exports = Product;   //export this  module and use it somewhere else
