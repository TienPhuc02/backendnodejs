const getHomePage = (req, res) => {
  //process data -> call model
  res.send("Hello world!");
};
const getABC = (req, res) => {
  res.send("check abc phuc!");
};
const getPhuc = (req, res) => {
  // res.send("<h1>check phuc!</h1>");
  res.render("sample.ejs"); // render file sample -> tao ra 1 view động
};
module.exports = { getHomePage, getABC, getPhuc };
