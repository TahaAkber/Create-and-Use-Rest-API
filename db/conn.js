const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((error) => {
    console.log("no connection successfull", error);
  });
module.exports = mongoose;
