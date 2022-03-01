const express = require("express");
const route = express.Router();
const userAuth = require("../authentication/userAuth");

//HOME ROUTES
route.get("/", userAuth ,(req,res ) => {
    res.render("admin")
});

route.get("/registerproperty", (req, res) => {
    res.render("registerproperty")
});

route.get("/logout", (req, res) => {
    res.clearCookie("id");
    res.redirect("/")
});





module.exports = route;