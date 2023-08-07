const express = require("express");
const router = new express.Router();
//post request:
const MensRanking = require("../models/mens");
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensRanking(req.body);
    const insertMens = await addingMensRecord.save();
    res.send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
//get all user
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find();
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
//get individual
router.get("/mens/:id", async (req, res) => {
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
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getmember = await MensRanking.findByIdAndUpdate(_id, req.body);
    res.send(getmember);
  } catch (error) {
    res.status(500).send(error);
  }
});
//find by id and delete
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const delmember = await MensRanking.findByIdAndDelete(_id);
    res.send(delmember);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
