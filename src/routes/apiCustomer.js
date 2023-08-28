const express = require("express");
const {
  postUploadSingleFile,
  postUploadMultipleFile,
  postCreateCustomerApi,
  postCreateListCustomerApi,
  getAllListCustomersApi,
  putUpdateCustomerApi,
  deleteCustomerApi,
  deleteListCustomersApi,
} = require("../controller/customerController");
const routerAPI = express.Router();
routerAPI.post("/file", postUploadSingleFile);
routerAPI.post("/files", postUploadMultipleFile);
routerAPI.post("/customers", postCreateCustomerApi);
routerAPI.post("/list-customers", postCreateListCustomerApi);
routerAPI.get("/list-customers", getAllListCustomersApi);
routerAPI.put("/customers", putUpdateCustomerApi);
routerAPI.delete("/customers", deleteCustomerApi);
routerAPI.get("/info", (req, res) => {
  console.log(req.query);
  return res.status(200).json({
    data: req.query,
  });
}); // + -> space
routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    data: req.params,
  });
}); // + -> space
routerAPI.delete("/list-customers", deleteListCustomersApi);
module.exports = routerAPI;
