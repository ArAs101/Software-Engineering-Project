import mongoose from "mongoose";

const {Schema, SchemaTypes, model } = mongoose;

const entrySchema = new Schema({
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User", //tell mongoose what model we reference
        required: true,
    },
    consumer: {
        type: Schema.SchemaTypes.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pictures: [{
        type: String,  // URL path to picture
        required: false,
    }],
    category: {
        type: [String],
        enum: [ "Garden", "Furniture", "Household", "Sport", "Antiques/Art", "Books", "Music", "Electronics", "(Smart)Phone", "Gaming", "Clothes", "Jewelry" , "Accessories", "Childstuff", "Toys", "Craft Materials", "Pet Supplies", "Other"]
    },
    state: {
        type: String,
        enum: ["created", "claimed", "deactivated"],
        default: "created",
        required: true,
    },
    createdAT: {
        type: Date,
        immutalbe: true,
        default: () => Date.now(),
    },
});

const Entry = model("Entry", entrySchema);
export default Entry;