const express = require("express");
const route = express.Router();
const homeController = require("../controller/homeController")
const detailController = require("../controller/detailController")
const searchController = require("../controller/searchController")

//HOME ROUTES
route.get("/", homeController.index);
route.get("/home", homeController.index);


//Details Routes
route.get("/detail",detailController.index)

//SearchResult Routes
route.get("/searchresults",searchController.index)





module.exports = route;