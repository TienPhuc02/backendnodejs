const express = require("express"); //commonjs
// import express from "express"; //es modules
const app = express(); //app express
const port = 8080; //port

//khai bao routes
app.get("/", (req, res) => {
  res.send("Hello World !");
});
//app.method(path,function)
app.get("/abc", (req, res) => {
  res.send("check abc!");
});
app.get("/phuc", (req, res) => {
  res.send("<h1>check phuc!</h1>");
});

//chay server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
