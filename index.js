const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const MensRanking = require("./models/mens");
app.use(express.json());
//post request:

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body);
    addingMensRecord.save();
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/", async (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
