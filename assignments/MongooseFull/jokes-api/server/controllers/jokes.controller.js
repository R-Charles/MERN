const Joke = require("../models/jokes.model");
const Jokes = require("../models/jokes.model"); //might have to change from pluralized on line 1 and 9


module.exports.helloWorld = (req, res) =>{
    res.json({greeting:"hello mongoose demo"});
}

module.exports.showAllJokes = (req, res) => {
    Jokes.find()
        .then(foundJokes=>{
            res.json({results: foundJokes})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.createJoke = (req, res)=>{
    Jokes.create(req.body)
        .then(newJoke => {
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id:req.params.id})
        .then((foundJoke)=>{
            res.json({results: foundJoke })
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })

}

module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate(
        {_id:req.params.id}, //which joke I want to update
        req.body, //form information I will use to update the joke with
        {new:true, runValidators:true}
        )
        .then(updateJoke => {
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}