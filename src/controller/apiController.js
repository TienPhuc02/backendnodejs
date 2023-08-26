const User = require("../model/Users");
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");
const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateUserApi = async (req, res) => {
  let data = req.body;
  let { email, name, city } = data;
  let results = await User.create({
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const putUpdateUserApi = async (req, res) => {
  let data = req.body;
  let { email, name, city, _id } = data;
  const results = await User.updateOne(
    { _id: _id },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const deleteUpdateUserApi = async (req, res) => {
  const id = req.body._id;
  await User.findByIdAndDelete(id);
  return res.status(200).json({
    errorCode: 0,
    message: "user deleted",
  });
};
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
  console.log(req.files);
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
module.exports = {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserApi,
  deleteUpdateUserApi,
  postUploadSingleFile,
  postUploadMultipleFile,
};
