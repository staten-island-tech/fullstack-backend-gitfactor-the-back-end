const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  level: {
    type: Number,
    required: true,
  },
  section: {
    type: Number,
    required: true,
  },
  leftValue: {
    type: Number,
    required: true,
  },
  lifeCount: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Array,
    required: true,
  },
  battery: {
    type: Number,
    required: true,
  },
  isIntro: {
    type: Boolean,
    required: true,
  },
  solvedPuzzles: {
    type: Array,
    required: true,
  },
  failedLevel: {
    type: Boolean,
    required: true,
  },
  roofTime: {
    type: Number,
    required: true,
  }
});
module.exports = mongoose.model("User", userSchema, "authData");
