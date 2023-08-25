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
  return res.status(201).json({
    errorCode: 0,
    data: results,
  });
};
module.exports = { getUsersApi, postCreateUserApi };
