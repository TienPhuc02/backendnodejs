const express = require("express");
const path = require("path");
const configViewEngine = (app) => {
  //config template engine
  app.set("views", path.join("./src", "views")); // khai bao noi luu tru file engine
  app.set("view engine", "ejs");
  //config static file
  console.log(__dirname);// từ folder minh dang đứng
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
