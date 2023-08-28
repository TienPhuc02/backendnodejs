const express = require("express"); //commonjs
require("dotenv").config();
const { MongoClient } = require("mongodb");
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
    // await connection();

    //using mongodb driver
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("documents");
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (err) {
    console.log("Error connect to db", err);
  }
})();
//chay server

//view -> router ->req.files -> controller -> service(model)->view
