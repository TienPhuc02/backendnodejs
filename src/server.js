const express = require("express"); //commonjs
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiUserRoutes = require("./routes/apiUser");
const apiCustomerRoutes = require("./routes/apiCustomer");
const mysql = require("mysql2");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
const app = express(); //app express
const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME || "localhost";

// default options
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai bap routes
app.use("/", webRoutes);
app.use("/v1/api/", apiUserRoutes);
app.use("/v1/api/", apiCustomerRoutes);

//test  connection
(async () => {
  try {
    //using mongoose
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (err) {
    console.log("Error connect to db", err);
  }
})();
//chay server

//view -> router ->req.files -> controller -> service(model)->view
