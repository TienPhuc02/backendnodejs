const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService.js");
const aqp = require("api-query-params");
const {
  createCustomerService,
  createListCustomerService,
  getListAllCustomersService,
  putUpdateCustomerService,
  deleteCustomersApiService,
  deleteListCustomersApiService,
} = require("../services/customerService.js");
const postUploadSingleFile = async (req, res) => {
  // console.log(
  //   "🚀 ~ file: apiController.js:43 ~ postUploadSingleFile ~ res:",
  //   req.files
  // );
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("không tìm thấy file upload");
  } else {
    let results = await uploadSingleFile(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  }
};
//single file -> object file
//multiple file -> array file
const postUploadMultipleFile = async (req, res) => {
  // console.log(req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("không tìm thấy file upload");
  }
  if (Array.isArray(req.files.image)) {
    let results = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: results,
    });
  } else {
    //single file
    let results = await uploadSingleFile(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  }
};
const postCreateCustomerApi = async (req, res) => {
  let { name, address, phone, email, description } = req.body;
  console.log(req.body);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("không tìm thấy file upload");
  } else {
    const results = await uploadSingleFile(req.files.image);
    const imgURL = results.path;
    const data = await createCustomerService(
      name,
      address,
      phone,
      email,
      description,
      imgURL
    );
    return res.status(200).json({
      EC: 0,
      data: data,
    });
  }
};
const postCreateListCustomerApi = async (req, res) => {
  console.log(
    "🚀 ~ file: customerController.js:65 ~ postCreateListCustomerApi ~ req:",
    req.body.customers
  );
  const data = await createListCustomerService(req.body.customers);
  res.status(200).json({
    EC: 0,
    data: data,
  });
  //bulk insert, batch insert
  //https://mongoosejs.com/docs/api/model.html#Model.insertMany()
};
const getAllListCustomersApi = async (req, res) => {
  console.log(req.query);

  const currentPage = req.query.page;
  const itemsPerPage = req.query.limit;
  // const name = req.query.name;
  const results = null;
  const data = await getListAllCustomersService(
    currentPage,
    itemsPerPage,
    // name,
    req.query
  );
  res.status(200).json({
    EC: 0,
    data: data,
  });
};
const putUpdateCustomerApi = async (req, res) => {
  const { id, name, email, address } = req.body;
  const data = await putUpdateCustomerService(id, name, email, address);
  res.status(200).json({
    EC: 0,
    data: data,
  });
};
const deleteCustomerApi = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await deleteCustomersApiService(id);
    res.status(200).json({
      EC: 0,
      data: data,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteListCustomersApi = async (req, res) => {
  const listId = req.body.idArray;
  try {
    const data = await deleteListCustomersApiService(listId);
    res.status(200).json({
      EC: 0,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postUploadMultipleFile,
  postUploadSingleFile,
  postCreateCustomerApi,
  postCreateListCustomerApi,
  getAllListCustomersApi,
  putUpdateCustomerApi,
  deleteCustomerApi,
  deleteListCustomersApi,
};
