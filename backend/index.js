import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "./models/Users.js"

const app = express()
app.use(express.json())

const port = 4000;

mongoose.connect("mongodb://127.0.0.1:27017/giftaway")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const jwtSecret = "notAGoodSecret"

app.post('/register', async (req, res) => {
    try {
      let user = new User(req.body);
      await user.save();
      res.status(201).send('User created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(401).send('Invalid username or password');
      }
      const token = jwt.sign({ _id: user._id }, `${jwtSecret}`, { expiresIn: '1h' });
      res.send({ token });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})