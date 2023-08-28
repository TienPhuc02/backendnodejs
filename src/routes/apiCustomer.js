const express = require("express");
const {
  postUploadSingleFile,
  postUploadMultipleFile,
  postCreateCustomerApi,
  postCreateListCustomerApi,
  getAllListCustomersApi
} = require("../controller/customerController");
const routerAPI = express.Router();
routerAPI.post("/file", postUploadSingleFile);
routerAPI.post("/files", postUploadMultipleFile);
routerAPI.post("/customers", postCreateCustomerApi);
routerAPI.post("/list-customers", postCreateListCustomerApi);
routerAPI.get("/list-customers",getAllListCustomersApi)
module.exports = routerAPI;
