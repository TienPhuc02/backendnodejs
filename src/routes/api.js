const express = require("express");
const {
  getUsersApi,
  postCreateUserApi,
} = require("../controller/apiController");
const routerAPI = express.Router();
routerAPI.get("/", (req, res) => {
  res.send("hello world with api");
});
routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateUserApi);
module.exports = routerAPI;
