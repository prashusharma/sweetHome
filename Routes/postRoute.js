const express = require("express")
const regRoute = express.Router();
const userController = require("../controller/userController"); 

regRoute.post("/register", userController.createUser)
regRoute.post("/login", userController.loginUser);

module.exports = regRoute;