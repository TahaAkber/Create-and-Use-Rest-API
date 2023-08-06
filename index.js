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
    const insertMens = await addingMensRecord.save();
    res.send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
