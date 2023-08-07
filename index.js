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
//get all user
app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find();
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
//get individual
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id: _id }).sort({
      ranking: 1,
    });
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

//find by id and update
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getmember = await MensRanking.findByIdAndUpdate(_id, req.body);
    res.send(getmember);
  } catch (error) {
    res.status(500).send(error);
  }
});
//find by id and delete
app.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const delmember = await MensRanking.findByIdAndDelete(_id);
    res.send(delmember);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(port, () => {
  console.log(`connection is live. ${port}`);
});
