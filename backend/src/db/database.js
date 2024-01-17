//depracated file:
const mongoose = require('mongoose');
const User = require('./User.js');
const Entry = require('./Entry.js');

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

