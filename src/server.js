const express = require("express"); //commonjs
// import express from "express"; //es modules
const path = require("path");
require("dotenv").config();
const app = express(); //app express
const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME || "localhost";
//config template engine
app.set("views", path.join(__dirname, "views")); // khai bao noi luu tru file engine
app.set("view engine", "ejs");

//khai bao routes
app.get("/", (req, res) => {
  res.send("Hello World !");
});
//app.method(path,function)
app.get("/abc", (req, res) => {
  res.send("check abc phuc!");
});
app.get("/phuc", (req, res) => {
  // res.send("<h1>check phuc!</h1>");
  res.render("sample.ejs"); // render file sample -> tao ra 1 view động
});

//chay server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
