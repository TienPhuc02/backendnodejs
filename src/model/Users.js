const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = User;

//SQL -> ORM (sequelize)
//backend ->ORM -> generate raw query -> database
//NoSQL -> ODM (mongoose)
//backend->ODM(->generate raw query->database)
//select * from user => find({}) ->[] find all

//findOne({id:"123"})
//findOne({name:"123"})

//finById("123")->{}



