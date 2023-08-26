const express = require("express");
const {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserApi,
  deleteUpdateUserApi,
  postUploadSingleFile,
} = require("../controller/apiController");
const routerAPI = express.Router();
routerAPI.get("/", (req, res) => {
  res.send("hello world with api");
});
routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateUserApi);
routerAPI.put("/users", putUpdateUserApi);
routerAPI.delete("/users", deleteUpdateUserApi);
routerAPI.post("/file", postUploadSingleFile);
module.exports = routerAPI;
