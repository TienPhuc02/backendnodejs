const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getUpdateUser,
  getCreateUser,
} = require("../controller/homeController");
const router = express.Router();
router.get("/", getHomePage);

router.post("/create-user", postCreateUser);
router.get("/create", getCreateUser);
router.get("/update/:id", getUpdateUser);

module.exports = router;
