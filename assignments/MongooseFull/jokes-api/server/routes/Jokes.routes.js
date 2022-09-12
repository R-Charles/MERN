const JokesController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model");

module.exports = (app)=>{
    app.get("/api", JokesController.helloWorld);
    app.get("/api/jokes", JokesController.showAllJokes);
    app.post("/api/jokes/new", JokesController.createJoke);

    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.put("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteJoke);

}

