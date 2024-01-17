const mongoose = require('mongoose');

async function connectToDb() {
    mongoose.connect("mongodb+srv://aaron:GiftAway123@cluster0.hfihqtt.mongodb.net/")
    .then(() => console.log('2. Connected to MongoDB database'))
    .catch(err => console.error('Connection to database failed 2:', err));
}

module.exports = connectToDb;