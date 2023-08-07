const express = require("express");
const app = express();
const router = require("./routers/men.js");
const port = process.env.PORT || 3000;
require("./db/conn");
const MensRanking = require("./models/mens");
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
