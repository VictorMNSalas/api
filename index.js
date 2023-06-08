const express = require("express");

const app = express();
app.set("port", process.env.PORT || 9000);

const mysql = require("mysql");
const myconn = require("express-myconnection");
const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "students"
};

//---------------------------------MIDDLEWARES---------------------------
app.use(myconn(mysql, dbOptions, "single"));

//---------------------------------ROUTES---------------------------
app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.get("/api", (req, res) => {
    res.send("API");
  });

//---------------------------------SERVER RUNING---------------------------
app.listen(app.get("port"), () => {
  console.log("Puerto ejecutandose...", app.get("port"));
});
