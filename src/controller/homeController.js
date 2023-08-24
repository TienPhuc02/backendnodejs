const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  //   //process data -> call model
  //   //simple query
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
  // [object,Object] -> JSON.stringify(listUSers)
};
// mỗi 1 lần cần data dưới database thì tạo mới 1 connection
const getCreateUser = (req, res) => {
  res.render("create-user.ejs");
};
const getUpdateUser = (req, res) => {
  res.render("update.ejs");
};
const postCreateUser = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results, fields) {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send("An error occurred");
  //     } else {
  //       console.log(results);
  //       res.send("create user success");
  //     }
  //   }
  // );
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
      VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log(
    "🚀 ~ file: homeController.js:48 ~ postCreateUser ~ results:",
    results
  );
  res.send("create user success");
  //connection simple
  // const [results, fields] = await connection.query("select * from Users u "); //promise
  // connection.query("select * from Users u ", function (err, results, fields) {
  //   console.log(results);
  //   console.log(fields);
  // });
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
};
