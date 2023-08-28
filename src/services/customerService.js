const Customers = require("../model/Customers");
const aqp = require("api-query-params");
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
const getListAllCustomersService = async (
  currentPage,
  itemsPerPage,
  // name,
  queryString
) => {
  try {
    let results = null;
    if (currentPage && itemsPerPage) {
      let offSet = (currentPage - 1) * itemsPerPage;
      const { filter } = aqp(queryString);
      console.log("🚀 ~ file: customerService.js:44 ~ filter:", filter);
      delete filter.page;
      results = await Customers.find(filter)
        .skip(offSet)
        .sort({ _id: 1 })
        .limit(itemsPerPage)
        .exec();
    } else {
      results = await Customers.find({});
    }
    return results;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const putUpdateCustomerService = async (id, name, email, address) => {
  try {
    const results = await Customers.findOneAndUpdate(
      { _id: id },
      { name: name, email: email, address: address },
      { new: true }
    );
    console.log(
      "🚀 ~ file: customerService.js:47 ~ putUpdateCustomerService ~ results:",
      results
    );
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteCustomersApiService = async (id) => {
  try {
    const results = await Customers.deleteById({ _id: id });
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteListCustomersApiService = async (listId) => {
  try {
    if (listId.length > 0) {
      for (let i = 0; i < listId.length; i++) {
        const results = await Customers.deleteById({ _id: listId[i] });
        return results;
      }
    } else {
      //xoa 1 customer
      const results = await Customers.deleteById({ _id: listId });
      return results;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createListCustomerService,
  getListAllCustomersService,
  putUpdateCustomerService,
  deleteCustomersApiService,
  deleteListCustomersApiService,
};
