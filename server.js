const express = require("express");
const app = express();
const routes = require("./Routes/getRoute");
// const path = 
const port = process.env.PORT || 3000;

app.use( express.static('static'))
// app.use( express.static('static'))

//Router SetUp
app.use(routes); 


//view engine
app.set("view engine", "ejs")

app.listen(port, ()=> {
    console.log("server started");
});