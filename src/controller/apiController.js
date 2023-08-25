const User = require("../model/Users");
const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
module.exports = { getUsersApi };
