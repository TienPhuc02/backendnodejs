const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
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
  {
    timestamps: true, //createAt,updatedAt
    // statics: {
    //   deleteById(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

//skip,limit or offset,limit

//FE:limit+skip

//BE:skip(offset)=(page-1)*itemsPerPage(muốn bỏ bao nhiêu phần tử) 
//max page => limit(tối đa bn trang) ,pageCount(mỗi trang bn phần tử)
const Customers = mongoose.model("customers", customerSchema);
module.exports = Customers;
