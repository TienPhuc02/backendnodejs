const connection = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users u ");
  return results;
};
const updateUser = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
module.exports = { getAllUsers, updateUser };
