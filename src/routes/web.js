const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getUpdateUser,
  getCreateUser,
} = require("../controller/homeController");
const router = express.Router();
// nhung API ma phuc vu cho chuc nang cua web,method
//khai bao routes
//router.method(path,controllers)
router.get("/", getHomePage);
//router.method(path,function)
router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update", getUpdateUser);

module.exports = router;
