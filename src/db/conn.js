const mongoose = require("mongoose");
mongoose
  .connect(process.env.LINK)
  .then(() => {
    console.log("connection Sucessful......");
  })
  .catch((e) => {
    console.log(e);
  });
