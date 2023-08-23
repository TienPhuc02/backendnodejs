const express = require("express");
const {
  getHomePage,
  getABC,
  getPhuc,
} = require("../controller/homeController");
const router = express.Router();
// nhung API ma phuc vu cho chuc nang cua web,method
//khai bao routes
//router.method(path,controllers)
router.get("/", getHomePage);
//router.method(path,function)
router.get("/abc", getABC);
router.get("/phuc", getPhuc);
module.exports = router;
