const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors"); //allows backend to share resources with our react application


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./server/config/mongoose.config");

require("./server/routes/product.route")(app);





app.listen( port, () => console.log(`Listening on port: ${port}`) );