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
const updateUserById = async (email, name, city, id) => {
  let [results, fields] = await connection.query(
    `
    UPDATE Users SET email = ?,name=?, city=? WHERE id = ?;`,
    [email, name, city, id]
  );
};
module.exports = { getAllUsers, updateUser, updateUserById };
