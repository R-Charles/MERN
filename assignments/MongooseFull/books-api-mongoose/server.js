const express = require("express");

const mongoose = require("mongoose");

const port = 8000;

const app = express(); //initialize express aplication and reference it using the variable "app"

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );


app.get("/api", (req, res)=>{
    res.json({greeting: "Bienvenido"});
})



// always below all other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}` ));
