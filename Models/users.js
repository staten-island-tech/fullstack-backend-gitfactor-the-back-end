const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  // these two will be added later once login functionality is integrated
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
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
  }
    // {
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   id: {
    //     type: Number,
    //     required: true,
    //   },
    //   section: {
    //     type: Number,
    //     required: true,
    //   },
    //   position: {
    //     type: Number,
    //     required: true,
    //   },
    //   margin: {
    //     type: String,
    //     required: true,
    //   },
    //   img: {
    //     type: String,
    //     required: true,
    //   },
    //   isInteractable: {
    //     type: Boolean,
    //     required: true,
    //   },
    //   filter: {
    //     type: String,
    //     required: true,
    //   },
    //   itemType: {
    //     type: String,
    //     required: true,
    //   },  
    //   puzzleType: String, //for puzzles only
    //   puzzleAnswer: String, //for puzzles only
    //   prompt: String, //for objects and puzzles only
    //   dialogue: [ //for characters only
    //     {
    //       text: {
    //         type: String,
    //         required: true,
    //       },
    //       name: {
    //         type: String,
    //         required: true,
    //       },
    //       isAntagonist: Boolean,
    //     }
    //   ],
    //   // batteryLife: Number, //only for flashlight
    //   //isPotion ?
    // } 
});
module.exports = mongoose.model("User", userSchema);
