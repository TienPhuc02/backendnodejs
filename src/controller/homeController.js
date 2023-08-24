const connection = require("../config/database");
const {
  getAllUsers,
  updateUser,
  updateUserById,
} = require("../services/CRUDServices");
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
  const user = await updateUser(userId);
  res.render("update.ejs", { userUpdate: user });
};
const postUpdateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city, id } = data;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};
const postCreateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
      VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("create user success");
};
module.exports = {
  getHomePage,
  postCreateUser,
  postUpdateUser,
  getCreateUser,
  getUpdateUser,
};
