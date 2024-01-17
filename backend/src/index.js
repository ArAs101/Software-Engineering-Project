const express = require('express')
//import bcrypt from "bcrypt"
//import jwt from "jsonwebtoken"
const cookieParser = require('cookie-parser')
const cors = require('cors')

const loginRouter = require('./routes/LoginRouter')
const registerRouter = require('./routes/RegisterRouter')
const giftAwayRouter = require('./routes/GiftAwayRouter')
const dashboardRouter = require('./routes/DashboardRouter')
const categoryRouter = require('./routes/CategoryRouter')
const connectToMongoDB = require('./db/databaseconnection')


const app = express();
const port = 4000;

app.use(cookieParser())

// T: Was macht das? lokale Datenbank - löschbar?
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json());


app.use("/login", loginRouter)
app.use("/register", registerRouter)
app.use("/giftaway", giftAwayRouter)
app.use("/category", categoryRouter)
app.use("/dashboard", dashboardRouter)


// Database: connect to database
async function connectMongoDB(){
  try {
    await connectToMongoDB();
    console.log('1. Database connection established')
  } catch (error) {
    console.error('Server cannot reach database:', err);
  }
};
connectMongoDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});