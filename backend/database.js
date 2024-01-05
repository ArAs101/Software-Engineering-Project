import mongoose from "mongoose"
import User from "./model/User.js"
import Entry from "./model/Entry.js"

const connectToDb = () => {
    mongoose.connect("mongodb+srv://aaron:GiftAway123@cluster0.hfihqtt.mongodb.net/")
    .then(() => console.log('Connected to MongoDB database'))
    .catch(err => console.error('Connection to database failed 2:', err));
};


// Databse Functions:

// 2a. Instantiate Object (create new user object)
// const user = await User.create({
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

// 2. Create new Entry
// const entry = await Entry.create({
//   creator: "6595ca6fc018c168a53a4cbb",
//   title: "Kinderfahrrad",
//   description: "Genesis, blau, 16 zoll, Untere Zollamtstr. 1030 Wien Mail: maxi1995@gmx.at"
// })

// 3. change user field
// newuser.firstname = "Hilde";
// await newuser.save();

// 4a. Find user, disply chosen fields
// const user = await User.findById("65981ddd79008e69221cdc0a", "username firstname lastname").exec();
// console.log(user)

// 4b. Find Entry & show creator
// const entry = await Entry.findOne({ title: "Blumenvase" }).populate("creator");
// console.log(entry)

// 5. Delete user
// const user = await User.deleteOne( {username: "Sabsi" });
// console.log(user)


//Database Kevin
// const jwtSecret = "notAGoodSecret"

// app.post('/register', async (req, res) => {
//     try {
//       let user = new User(req.body);
//       await user.save();
//       res.status(201).send('User created successfully');
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   });

//   app.post('/login', async (req, res) => {
//     try {
//       const user = await User.findOne({ username: req.body.username });
//       if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
//         return res.status(401).send('Invalid username or password');
//       }
//       const token = jwt.sign({ _id: user._id }, `${jwtSecret}`, { expiresIn: '1h' });
//       res.send({ token });
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });

export default connectToDb;