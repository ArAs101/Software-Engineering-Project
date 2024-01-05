import mongoose from "mongoose";

const {Schema, SchemaTypes, model } = mongoose;

const entrySchema = new Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId, //tell mongoose what model we reference
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: [],
    claimed: {
        type: Boolean,
        default: false,
    },
    createdAT: {
        type: Date,
        immutalbe: true,
        default: () => Date.now(), // every time new object created; {new Date() = only static value}
    },
    //pictures: [],
    //contactInfo
    //pickupLocation
})

const Entry = model("Entry", entrySchema);
export default Entry;