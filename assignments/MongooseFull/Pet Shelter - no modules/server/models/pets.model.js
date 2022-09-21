const mongoose = require("mongoose");

//author name
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [3, "Name must be at least 3 characters long!"]
    }, 
    type: {
        type: String,
        required: [true, "Type is required!"],
        minlength: [4, "Type must be atleast 4 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "Description must be atleast 10 characters long!"]
    },
    skills1: {
        type: String,
        required: [false, "Skills1 is not required!"],
        minlength: [4, "Skills must be atleast 4 characters long!"]
    },
    skills2: {
        type: String,
        required: [false, "Skills2 is not required!"],
        minlength: [4, "Skills must be atleast 4 characters long!"]
    },
    skills3: {
        type: String,
        required: [false, "Skills3 is not required!"],
        minlength: [4, "Skills must be atleast 4 characters long!"]
    }
}, {timestamps: true})


const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;