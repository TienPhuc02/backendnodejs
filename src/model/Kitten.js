const mongoose = require("mongoose");
// định dạng document
const kittySchema = new mongoose.Schema({
  name: String,
});

// tạo collection đề lưu trữ document
const Kitten = mongoose.model("phuc", kittySchema);

// clone đối tượng ứng với collection vừa tạo ở trên
// const cat = new Kitten({ name: "Phuc" });
// // hàm lưu
// cat.save();
module.exports = Kitten;
//model là đối tượng tượng trưng cho lưu trữ, còn việc thao tác với model thì để file khác
