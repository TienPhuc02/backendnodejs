const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    phone: { type: Number },
    email: {
      type: String,
    },
    image: { type: String },
    description: { type: String },
  },
  { timestamps: true } //createAt,updatedAt
);

const Customers = mongoose.model("customers", customerSchema);
module.exports = Customers;
