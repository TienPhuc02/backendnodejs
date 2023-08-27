const Customers = require("../model/Customers");
const createCustomerService = async (
  name,
  address,
  phone,
  email,
  description,
  imgURL
) => {
  let dataMongoose = await Customers.create({
    name: name,
    address: address,
    phone: phone,
    email: email,
    image: imgURL,
    description: description,
  });
  return dataMongoose;
};
const createListCustomerService = async (arr) => {
  try {
    const results = await Customers.insertMany(arr);
    return results;
  } catch (error) {
    console.log(
      "🚀 ~ file: customerService.js:25 ~ createListCustomerService ~ error:",
      error
    );
    return null;
  }
};
module.exports = { createCustomerService, createListCustomerService };
