const express = require("express");
const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trime: true,
  },
  dob: {
    type: Date,
    required: true,
    trime: true,
  },
  country: {
    type: String,
    required: true,
    trime: true,
  },
  score: {
    type: Number,
    required: true,
    trime: true,
  },
  event: {
    type: String,
    required: true,
    default: "100m",
  },
});
//creating new collection
const MensRanking = new mongoose.model("MenRanking", menSchema);
module.exports = MensRanking;
