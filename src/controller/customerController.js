const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService.js");
const {
  createCustomerService,
  createListCustomerService,
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
module.exports = {
  postUploadMultipleFile,
  postUploadSingleFile,
  postCreateCustomerApi,
  postCreateListCustomerApi,
};
