const express = require("express");
const router = express.Router();
// nhung API ma phuc vu cho chuc nang cua web,method
//khai bao routes
router.get("/", (req, res) => {
  res.send("Hello World !");
});
//app.method(path,function)
router.get("/abc", (req, res) => {
  res.send("check abc phuc!");
});
router.get("/phuc", (req, res) => {
  // res.send("<h1>check phuc!</h1>");
  res.render("sample.ejs"); // render file sample -> tao ra 1 view động
});
module.exports = router;
