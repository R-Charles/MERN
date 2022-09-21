const WallController = require("../controllers/Wall.controller");

module.exports = (app) => {
    app.get("/api/walls", WallController.findAllWalls);
    app.post("/api/walls", WallController.createWall);
    app.get("/api/walls/:id", WallController.findOneWall);
    app.put("/api/walls/:id", WallController.updateOneWall);
    app.delete("/api/walls/:id", WallController.deleteWall);
}