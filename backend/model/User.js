import mongoose from "mongoose"
//import bcrypt from "bcrypt"

// 0. destructure schema & model from mongoose
const {Schema, model} = mongoose;

//1. Define Schema Object
const addressSchema = new Schema(  {
  street: String,
  doornumber: Number,
  city: String,
  postcode: Number,
})

const contactInfoSchema = new Schema({
  mail: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: Number
})

//  ? structure/redundant with address
// const pickupLocationSchema = new Schema({
//     city: String,
//     postcode: Number,
// })

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true,
      // minLength: 8, // security
  },
  firstname: String,
  lastname: String,
  birthday: {
      type: Date,
      //max: "2008-01-01", // at least 16 for savety
  },
  address: addressSchema,
  contactInfo: contactInfoSchema,
  //pickupLocation: pickupLocationSchema,
  giftaways:{
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Entry",
  }, //[id]; // New Collection: List.js?
  claimed:{
})

// Kevin
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   mail: { type: String, required: true },
//   phone: { type: String, required: true }
// });

// // Pre-save hook to hash passwords before saving user document
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model('User', userSchema);
export default User;
