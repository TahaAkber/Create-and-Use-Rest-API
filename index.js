const express = require("express");
const app = express();
const port = 3000;
const MensRanking = require("./models/mens");
require("../Create-and-Use-Rest-API/db/conn");
//post request:

app.post("/")


app.get("/", async (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
