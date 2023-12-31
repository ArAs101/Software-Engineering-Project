import mongoose from "mongoose"
//import bcrypt from "bcrypt"

// 0. destructure schema & model from mongoose
const {Schema, model} = mongoose;

//1. Define Schema Object
// Level 3 {{{}}
const pickupLocationSchema = new Schema({
  city: String,
  postcode: Number,
});

// Level 2 {{}}
const addressSchema = new Schema(  {
  street: String,
  doornumber: Number,
  pickupLocation: pickupLocationSchema,
});

const contactInfoSchema = new Schema({
  mail: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: Number
});

// Level 1 {}
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      required: true,
      // minLength: 8, // security length
  },
  firstname: String,
  lastname: String,
  birthday: {
      type: Date,
      //max: "2008-01-01", // at least 16 for savety reasons
  },
  address: addressSchema,
  contactInfo: contactInfoSchema,
  giftawayslist:{
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Entry",
  },
  claimedlist:{
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Entry",
  },
  receivedlist:{
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Entry",
  },
});

const User = mongoose.model('User', userSchema);
export default User;
