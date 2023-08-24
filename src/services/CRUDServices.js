const connection = require("../config/database");
const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users u ");
  return results;
};
const updateUser =async()=>{
  const [results,fields]=await connection.query()
}
module.exports = { getAllUsers }; 
