const connection = require("../config/database");
const getHomePage = (req, res) => {
  //   //process data -> call model
  //   //simple query
  //   let users = [];
  //  connection.query("select * from Users u ", function (err, results, fields) {
  //     users = results;
  //     console.log("🚀 ~ file: homeController.js:7 ~ results:", results);
  //     console.log("🚀 ~ file: homeController.js:6 ~ getHomePage ~ users:", users);
  //     res.send(JSON.stringify(users));
  //   });

  return res.render("home.ejs");
};
// mỗi 1 lần cần data dưới database thì tạo mới 1 connection
const getABC = (req, res) => {
  res.send("check abc phuc!");
};
const getPhuc = (req, res) => {
  // res.send("<h1>check phuc!</h1>");
  res.render("sample.ejs"); // render file sample -> tao ra 1 view động
};
module.exports = { getHomePage, getABC, getPhuc };
