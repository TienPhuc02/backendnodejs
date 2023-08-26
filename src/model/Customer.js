const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true, lowercase: true },
  address: { type: String, require: true, unique: true, lowercase: true },
  phone: { type: Number, min: [10, "at least 10 numbers"], max: 12 },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    require: [true, "Email address is  required!"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  image: { type: String, require: true, unique: true, lowercase: true },
  description: { type: String, require: true, unique: true, lowercase: true },
});

const Customers = mongoose.model("customer", customerSchema);
module.exports = Customers;
