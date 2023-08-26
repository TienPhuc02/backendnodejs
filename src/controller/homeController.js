const connection = require("../config/database");
const User = require("../model/Users");
const getHomePage = async (req, res) => {
  let results = await User.find({});
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
  // const user = await updateUser(userId);
  const user = await User.findById(userId).exec();
  res.render("update.ejs", { userUpdate: user });
};
const postUpdateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city, _id } = data;
  await User.updateOne({ _id: _id }, { email: email, name: name, city: city });
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  // const userDelete = await getDeleteUserById(userId);
  const userDelete = await User.findById(userId).exec();
  res.render("delete-user.ejs", { userDelete: userDelete });
};
const postDeleteUserId = async (req, res) => {
  const id = req.body._id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      console.log("Người dùng đã bị xóa:", deletedUser);
      res.redirect("/");
    } else {
      console.log("Không tìm thấy người dùng.");
      res.redirect("/");
    }
  } catch (error) {
    console.error("Lỗi khi xóa người dùng:", error);
    res.redirect("/");
  }
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
