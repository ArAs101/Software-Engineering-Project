import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import connectToDb, { dbFunctions } from "./database.js"
import User from "./model/User.js"
import Entry from "./model/Entry.js"

const app = express();
app.use(express.json());

const port = 4000;

// Database: connect to database
connectToDb((err) => {
  if (err) {
    console.err("Connection to database failed 1:", err);
    return;
  }
});

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

app.get("/entries", async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
});

// Noch Ausprobieren!
// USER
//DELETE - User by Id
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser =  await deleteUser(userId);
    if (!deletedUser) {
      return res.status(400).send("Client Request Error - No such User");
    }
    res.send("User deleted successfully from database");
  } catch (error) {
    res.status(500).send("Server Error - Error deleting User: " + error.message);
  }
});

// ENTRY
//DELETE - Entry by Id
app.delete("/entries/:id", async (req, res) => {
  try {
    const entryId = req.params.id;
    const deletedEntry =  await deleteEntry(entryId);
    if (!deletedEntry) {
      return res.status(400).send("Client Request Error - No such entry");
    }
    res.send("Entry deleted successfully from database");
  } catch (error) {
    res.status(500).send("Server Error - Error deleting Entry: " + error.message);
  }
});

// SEARCH
// Search Entry by title
app.get("entries/", async (res, req) => {
  try {
    const entryTitle = req.query.title;
    if (!title) {
      return res.status(400).send("Client Request Error - no entry title entered");
    }
    const searchedEntries = await searchEntryByTitle(entryTitle);
    if (searchedEntries.length === 0) {
      return res.status(404).send("No Entries matching your Search");
    }
    res.json(searchedEntries);
  } catch (error) {
    res.status(500).send("Server Error - Error searching Entries by title: " + error.message);
  }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});