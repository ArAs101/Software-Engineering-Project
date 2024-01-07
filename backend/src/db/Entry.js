const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User", //tell mongoose what model we reference
        required: true,
    },
    consumer: {
        type: Schema.Types.ObjectId,
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
        type: String,  // URL path to cloudinary
        required: false,
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }],
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

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;