const mongoose = require("mongoose");


const WallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [3, "Name must be at least 3 characters long!"]
    } 

}, {timestamps: true})


const Wall = mongoose.model('Wall', WallSchema);

module.exports = Wall;