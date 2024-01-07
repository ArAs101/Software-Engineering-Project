const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Category = new Schema({
    categoryname: {
        type: String,
        unique: true,
        enum: ['Garden', 'Furniture', 'Household', 'Sport', 'Antiques/Art', 'Books', 
               'Music', 'Electronics', '(Smart)Phone', 'Gaming', 'Clothes', 'Jewelry',
               'Accessories', 'Childstuff', 'Toys', 'Craft Materials', 'Pet Supplies', 'Other']
    },
})

module.exports = mongoose.model("Category", Category)