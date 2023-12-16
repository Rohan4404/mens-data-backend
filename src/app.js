const express = require("express");
require("./db/conn");
const router = require("./routers/men");
const MensRanking = require("./models/mans");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`it is live at port number ${port}`);
});
