const User = require("../model/Users");
const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateUserApi = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  let results = await User.create({
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const putUpdateUserApi = async (req, res) => {
  let data = req.body;
  let { email, name, city, _id } = data;
  const results = await User.updateOne(
    { _id: _id },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const deleteUpdateUserApi = async (req, res) => {
  const id = req.body._id;
  await User.findByIdAndDelete(id);
  return res.status(200).json({
    errorCode: 0,
    message: "user deleted",
  });
};
module.exports = {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserApi,
  deleteUpdateUserApi,
};
