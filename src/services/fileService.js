const path = require("path");
const uploadSingleFile = async (fileObject) => {
  //save-> public/images/upload
  //remember to create the upload folder first
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  // console.log(
  //   "🚀 ~ file: fileService.js:6 ~ uploadSingleFile ~ __dirname:",
  //   __dirname
  // );
  // console.log(
  //   "🚀 ~ file: fileService.js:6 ~ uploadSingleFile ~ uploadPath:",
  //   uploadPath
  // );

  //abc.png->abc-timestamp.png

  //get image extension
  let extName = path.extname(fileObject.name);
  // console.log(
  //   "🚀 ~ file: fileService.js:12 ~ uploadSingleFile ~ extName:",
  //   extName
  // );

  //get image'name extension
  let baseName = path.basename(fileObject.name, extName);
  // console.log(
  //   "🚀 ~ file: fileService.js:16 ~ uploadSingleFile ~ baseName:",
  //   baseName
  // );

  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;
  // console.log(
  //   "🚀 ~ file: fileService.js:19 ~ uploadSingleFile ~ finalName:",
  //   finalName
  // );
  // console.log(
  //   "🚀 ~ file: fileService.js:20 ~ uploadSingleFile ~ finalPath:",
  //   finalPath
  // );
  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName, // dùng finalName để lưu vào trong data,clinet dùng finalName để hiển thị ảnh
      error: null,
    };
  } catch (err) {
    return {
      status: "fail",
      path: null,
      error: JSON.stringify(err),
    };
  }
};
const uploadMultipleFiles = async (fileArray) => {
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  const resultsArr = [];
  let countSuccess = 0;
  for (let i = 0; i < fileArray.length; i++) {
    // console.log(i);
    let extName = path.extname(fileArray[i].name);
    // console.log(
    //   "🚀 ~ file: fileService.js:12 ~ uploadSingleFile ~ extName:",
    //   extName
    // );

    //get image'name extension
    let baseName = path.basename(fileArray[i].name, extName);
    // console.log(
    //   "🚀 ~ file: fileService.js:16 ~ uploadSingleFile ~ baseName:",
    //   baseName
    // );

    //create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    try {
      await fileArray[i].mv(finalPath);
      resultsArr.push({
        status: "success",
        path: finalName, // dùng finalName để lưu vào trong data,clinet dùng finalName để hiển thị ảnh
        fileName: fileArray[i].name,
        error: null,
      });
      countSuccess++;
    } catch (err) {
      resultsArr.push({
        status: "fail",
        path: null, // dùng finalName để lưu vào trong data,clinet dùng finalName để hiển thị ảnh
        fileName: fileArray[i].name,
        error: JSON.stringify(err),
      });
    }
  }
  return {
    countSuccess: countSuccess,
    detail: resultsArr,
  };
};
module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
