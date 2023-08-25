const express = require("express"); //commonjs
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");
const connection = require("./config/database");
const app = express(); //app express

const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME || "localhost";

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai bap routes
app.use("/", webRoutes); // tat ca routes khai bao trong web.js thi dung sau tien to  "/v1", thuong thi tien to la v1 v2 the hien cho version1 version2

//test  connection
connection();
//chay server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
