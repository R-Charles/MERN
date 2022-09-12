const mongoose = require('mongoose'); //import mongoose so we can use to create a table using js code

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Setup is required"],
        minLength: [3, "Setup must be atleast 3 characters long"],
        max: [100, "Setup cannot be longer than 100 characters"]

    },
    punchline: {
        type: String,
        required: [true,"Punchline is required"]
    }

}, {timestamps:true});



const Joke = mongoose.model("Joke", JokeSchema); //registers the table under the table name joke 


module.exports = Joke;
//export this table so that other files can use