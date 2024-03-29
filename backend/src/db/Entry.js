const mongoose = require('mongoose');
const {Schema} = require('mongoose')

const Giftaway = new mongoose.Schema({
    avatar: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    consumerId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    publisherId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


})

module.exports = new mongoose.model('Giftaway', Giftaway)