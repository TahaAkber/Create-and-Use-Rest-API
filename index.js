const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const MensRanking = require("./models/mens");
app.use(express.json());
//post request:

app.post("/mens", async (req, res) => {
  try {
    const newfile = new MensRanking(req.body);
    newfile.save();
  } catch (error) {
    res.send(error);
  }
});

app.get("/", async (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
