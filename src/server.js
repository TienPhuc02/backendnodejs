const express = require("express"); //commonjs
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");
const app = express(); //app express

const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, //default 3306
  user: "root", //default password: empty
  password: "123456",
  database: "hoidanit",
});
connection.query("select * from Users u ", function (err, results, fields) {
  console.log("🚀 ~ file: server.js:16 ~ fields:", fields); // results contains rows returned by server
  console.log("🚀 ~ file: server.js:16 ~ results:", results); // fields contains extra meta data about results, if available
});
const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME || "localhost";
//config template engine
configViewEngine(app);

//khai bap routes
app.use("/", webRoutes); // tat ca routes khai bao trong web.js thi dung sau tien to  "/v1", thuong thi tien to la v1 v2 the hien cho version1 version2

//test  connection

//chay server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
