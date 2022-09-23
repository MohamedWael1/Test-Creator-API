const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        validate: [isEmail, "Email is invalid."]
    },
    firstName: {
        type: String,
        required: [true, "Name is required."],
    },
    lastName: {
        type: String,
        required: [true, "Name is required."],
    },

    password: {
        type: String,
        required: true,
        minLength: 9
    }
});

module.exports = mongoose.model("User", userSchema);
