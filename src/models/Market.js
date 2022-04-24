const mongoose = require('mongoose');

const MarketSchema = new mongoose.Schema({
    marketID: {
        type: String,
        required: [true, 'Please add a custom id']
    },
    marketName : {
        type: String,
        required: [true, 'Please add a market name']
    },
    marketType : {
        type: String,
        required : false
    }
})

module.exports = mongoose.model('Market', MarketSchema);