const express = require("express");
const {
  getHomePage,
  postCreateUser,
  getUpdateUser,
  getCreateUser,
  postUpdateUser,
} = require("../controller/homeController");
const router = express.Router();
router.get("/", getHomePage);

router.get("/create", getCreateUser);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.get("/update/:id", getUpdateUser);

module.exports = router;
