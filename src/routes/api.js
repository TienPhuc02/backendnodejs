const express = require("express");
const {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserApi,
  deleteUpdateUserApi,
  postUploadSingleFile,
  postUploadMultipleFile
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
routerAPI.post("/files", postUploadMultipleFile);
module.exports = routerAPI;
