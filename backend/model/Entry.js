import mongoose from "mongoose";

const {Schema, SchemaTypes, model } = mongoose;

// const claimedSchema = new Schema({
//     type: Boolean,
//     default: false,
//     claimer: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: "User",
//     },
// })

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
    state: String, // ToDo: only one state: created, claimed, deactivated
    //claimed: claimedSchema,
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