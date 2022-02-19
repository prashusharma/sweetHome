const express = require("express");
const route = express.Router();
const homeController = require("../controller/homeController")
const detailController = require("../controller/detailController")
const searchController = require("../controller/searchController");
const homeDetailsController = require("../controller/homeDetailsController");

//HOME ROUTES
route.get("/", homeController.index);
route.get("/home", homeController.index);
route.get("/signin", (req, res)=>{
    res.render("signin");
})

route.get("/register", (req, res)=>{
    res.render("signup" );
})

//Details Routes
route.get("/detail/:id",detailController.index)

//SearchResult Routes
route.get("/searchresults",searchController.index)




module.exports = route;