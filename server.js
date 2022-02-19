require('dotenv').config()
const express = require("express");
const app = express();
const routes = require("./Routes/getRoute");
const regRoutes = require("./Routes/postRoute");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
require("./DataBase/dbConnection");
// const path = 
const port = process.env.PORT || 3000;

//Body- Parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
// app.use( express.static('static'))
app.use( express.static('static'))

//Router SetUp
app.use(routes); 
app.use(regRoutes); 

//view engine
app.set("view engine", "ejs")

app.listen(port, ()=> {
    console.log("server started");
});