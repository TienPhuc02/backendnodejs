require("dotenv").config();
// const mysql = require("mysql2/promise");
const mongoose = require("mongoose");
const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" },
];
const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dtp2352002:boJgeU61CFtRMAmQ@cluster.eig79gb.mongodb.net/phuc235"
    );
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, "to db"); // connected to db
  } catch (error) {
    console.log("🚀 ~ file: database.js:18 ~ connection ~ error:", error);
  }
};
module.exports = connection;
