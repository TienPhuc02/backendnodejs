const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = User;




