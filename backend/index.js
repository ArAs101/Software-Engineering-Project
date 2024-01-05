import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import connectToDb from "./database.js"
import User from "./model/User.js"

const app = express()
app.use(express.json())

const port = 3000;

// Database: connect to database
connectToDb((err) => {
  if (err) {
    console.err("Connection to database failed 1:", err);
    return;
  }
})

// Routes
app.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.json(userss);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})