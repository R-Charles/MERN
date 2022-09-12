const express = require("express");


const port = 8000;

const app = express();  //initializes express application and references it using the variable 'app'

require("./server/config/mongoose.config");

    //make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require("./server/routes/Jokes.routes")(app) //imoirt routes so that server is aware of the routes created

app.get("/api", (req, res) =>{
    res.json({message: "Bienvenidos para tu madre"});
})








app.listen( port, () => console.log(`Listening on port: ${port}`) ); 