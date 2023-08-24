const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  //   //process data -> call model
  //   //simple query
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getCreateUser = (req, res) => {
  res.render("create-user.ejs");
};
const getUpdateUser = async (req, res) => {
  const userId = req.params.id;
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  console.log(
    "🚀 ~ file: homeController.js:20 ~ getUpdateUser ~ results:",
    results
  );
  let user = results && results.length > 0 ? results[0] : {};
  res.render("update.ejs", { userUpdate: user });
};
const postCreateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
      VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log(
    "🚀 ~ file: homeController.js:48 ~ postCreateUser ~ results:",
    results
  );
  res.send("create user success");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
};
