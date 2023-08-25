const connection = require("../config/database");
const {
  getAllUsers,
  updateUser,
  createNewUser,
  updateUserById,
  getDeleteUserById,
} = require("../services/CRUDServices");
const User = require("../model/Users");
const getHomePage = async (req, res) => {
  let results = [];
  return res.render("home.ejs", { listUsers: results });
};
const getCreateUser = (req, res) => {
  res.render("create-user.ejs");
};
const postCreateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.redirect("/");
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
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(
    "🚀 ~ file: homeController.js:35 ~ postDeleteUser ~ userId:",
    userId
  );
  const userDelete = await getDeleteUserById(userId);
  res.render("delete-user.ejs", { userDelete: userDelete });
};
const postDeleteUserId = async (req, res) => {
  const id = req.body.id;
  console.log("🚀 ~ file: homeController.js:45 ~ postDeleteUserId ~ id:", id);
  // await postDeleteUserById(id);
  const [results, fields] = await connection.query(
    "DELETE FROM Users WHERE id = ?",
    [id]
  );
  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  postUpdateUser,
  getCreateUser,
  getUpdateUser,
  postDeleteUserId,
  postDeleteUser,
};
