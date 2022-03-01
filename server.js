require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./Routes/getRoute");
const regRoutes = require("./Routes/postRoute");
const adminRoutes = require("./Routes/adminRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const path = require("path");
require("./DataBase/dbConnection");
// const path =
const port = process.env.PORT || 3000;

//Body- Parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
// app.use( express.static('static'))
app.use(express.static(__dirname + "/static"));
app.use("/admin", express.static(__dirname + "/static"));

//Router SetUp
app.use(routes);
app.use(regRoutes);
app.use("/admin", adminRoutes);

//Set Session
app.use(
  session({
    secret: process.env.SECRET_KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.dbURL })
  })
);

//view engine
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("server started");
});
