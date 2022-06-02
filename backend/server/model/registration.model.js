const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
    // mongoose.Schema takes an object; thats where we describe our actual model 
    fname: {
        type: String,
        required: [true, "you need a first name!"],
        minLength: [2, "you need a least 2 characters"]
    },
    lname: {
        type: String,
        required: [true, "you need a last name"],
        minLength: [2, "you need a least 2 characters"]
    },
    city: {
        type: String,
        required: [true, "you need a city"],
        minLength: [2, "you need a least 2 characters"]
    },
    state: {
        type: String,
        required: [true, "you need a state!"],
        minLength: [2, "you need a least 2 characters"]
    },

    zip: {
        type: Number,
        required: [true, "you need zip code"],
        min: [1, "you need more than one number for zip code"]
    },


}, { timestamps: true })

const Registration = mongoose.model("Registration", RegSchema);

module.exports = Registration;
