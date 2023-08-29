const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const customerSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    email: {
      type: String,
    },
    image: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customers = mongoose.model("customers", customerSchema);
module.exports = Customers;
