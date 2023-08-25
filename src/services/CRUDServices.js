const connection = require("../config/database");
const { use } = require("../routes/web");
// const getAllUsers = async () => {
//   const [results, fields] = await connection.query("select * from Users u ");
//   return results;
// };
// const createNewUser = async (email, name, city) => {
//   let [results, fields] = await connection.query(
//     `INSERT INTO Users (email, name, city)
//       VALUES (?,?,?)`,
//     [email, name, city]
//   );
// };
// const updateUser = async (userId) => {
//   let [results, fields] = await connection.query(
//     "select * from Users where id = ?",
//     [userId]
//   );
//   let user = results && results.length > 0 ? results[0] : {};
//   return user;
// };
// const getDeleteUserById = async (userId) => {
//   const [results, fields] = await connection.query(
//     "select * from Users where id = ?",
//     [userId]
//   );
//   let user = results && results.length > 0 ? results[0] : {};
//   return user;
// };
// const postDeleteUserById = async (userId) => {
//   const [results, fields] = await connection.query(
//     "DELETE FROM Users WHERE id = ?",
//     [userId]
//   );
// };
// const updateUserById = async (email, name, city, id) => {
//   let [results, fields] = await connection.query(
//     `
//     UPDATE Users SET email = ?,name=?, city=? WHERE id = ?;`,
//     [email, name, city, id]
//   );
// };
module.exports = {
};
