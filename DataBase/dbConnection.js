const mongoose = require("mongoose");
const dbURL = process.env.dbURL;

mongoose.connect(dbURL)
    .then(val => {
        console.log("connected to Database")
    })
    .catch((error) => {
        console.error("error in connecting to database" + error);
    });         


