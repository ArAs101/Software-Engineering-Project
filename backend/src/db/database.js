//depracated: need to adapt to frontend
const mongoose = require('mongoose');
const User = require('./User.js');
const Entry = require('./Entry.js');


// const connectToDb = () => {
//     mongoose.connect("mongodb+srv://aaron:GiftAway123@cluster0.hfihqtt.mongodb.net/")
//     .then(() => console.log('Connected to MongoDB database'))
//     .catch(err => console.error('Connection to database failed 2:', err));
// };

//// USER
////User - create new


//User - delete by Id
async function deleteUser(userID) {
    try {
        const deleteUser = await User.findByIdAndDelete(userID);
        console.log("Deleted User: ", deleteUser)
    } catch (error) {
        console.log("Database Error for deleting user:", error.message)
    }
}

//// ENTRY
// //Entry - create new
// const createEntry = await Entry.create({
//   creator: "6595ca6fc018c168a53a4cbb",
//   title: "Kinderfahrrad",
//   description: "Genesis, blau, 16 zoll, Untere Zollamtstr. 1030 Wien Mail: maxi1995@gmx.at"
// })
// console.log(createEntry)

//Entry - delete by Id
async function deleteEntry(entryId) {
    try {
        const deleteEntry = await Entry.findByIdAndDelete(entryId);
        console.log("Deleted Entry: ", deleteEntry);
    } catch (error) {
        console.log("Database Error for deleting entry:", error.message);
    }
}

// SEARCH
//Search - entry by title
async function searchEntriesByTitle(entryTitle) {
    try {
        // Regular Expression: partial string match & case-insensitivity (i)
        const regex = new RegExp(entryTitle, "i"); // constructor: ('pattern', 'flags')
        const searchedEntries = await Entry.find({ title: regex });
        return searchEntriesByTitle;
    } catch (error) {
        console.log("Database Error for searched entry:", error.message)
    }
}

// In Progress
//Search - entry by category
// async function searchEntriesByCategory(entryCategory) {
//     try {
//         console.log("Searched Entry: ", searchedEntries)
//     } catch (error) {
//         console.log("Database Error for searched entry:", error.message)
//     }
// }

// partial matching an case insensitivity

// User:
// POST: Add new user
// DELETE: User
// PUT: Edit user data

// Entry:
// POST: Add new entry
// DELETE: Delete Entry
// PUT: Edit user data

// Search Entry:
// GET: search by title
// Get: seatch by category
// Get: seatch by category & title

// List functions:
module.exports = {
    connectToDb,
    deleteEntry,
    deleteUser,
    searchEntriesByTitle,
};


//Tryout:
////User - create new
// const createUser = await User.create({
//   username: "Emi",
//   password: "Emii123",
//   firstname: "Emma",
//   lastname: "Fleischer",
//   birthday: 2002-12-10,
//   address: {
//     satisfiestreet: "Doppstraße",
//     doornumber: 101,
//     city: "Wien",
//     postcode: 1210,
//   },
//   contactinfo: {
//     mail: "emi@gmail.com",
//     phone: 66447434559
//   }
// });
// console.log(createUser)