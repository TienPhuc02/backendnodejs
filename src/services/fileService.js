const uploadSingleFile = async (fileObject) => {
  let uploadPath = __dirname + "" + fileObject.name;
  try {
    await fileObject.mv(uploadPath);
    console.log(__dirname)
    return {
      status: "success",
      path: "link-image",
      error: null,
    };
  } catch (err) {
    console.log("🚀 ~ file: fileService.js:6 ~ uploadSingleFile ~ err:", err);
    return {
      status: "success",
      path: "link-image",
      error: JSON.stringify(err),
    };
  }
};
const uploadMultipleFiles = () => {};
module.exports = { uploadSingleFile };
