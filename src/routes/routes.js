const express = require("express");
const game = require("../controller/GameController");
const routes = express.Router();

routes.post("/create", game.create)
routes.get("/listAll", game.list)
routes.delete("/delete/:id", game.delete)
routes.put("/update/:id", game.update)
routes.get("/game/:id", game.findOne)
module.exports = routes