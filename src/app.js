require("dotenv").config();
const express = require("express");
const router = require("./routers/men");
const MensRanking = require("./models/mans");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`it is live at port number ${port}`);
});
