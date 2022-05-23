const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // these two will be added later once login functionality is integrated
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
});
module.exports = mongoose.model("User", userSchema, "authData");
