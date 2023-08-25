const express = require("express"); //commonjs
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
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
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

//test  connection
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (err) {
    console.log("Error connect to db", err);
  }
})();
//chay server
