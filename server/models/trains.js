const mongoose = require("mongoose");
const TrainSchema = new mongoose.Schema({
  name: {
    type: String,
    requiured: [true, "Must provide a name"],
    trim: true,
  },
  src: {
    type: String,
    requiured: [true, "Must provide a source"],
    trim: true,
  },
  dest: {
    type: String,
    requiured: [true, "Must provide a destination"],
    trim: true,
  },
  distance: {
    type: String,
    requiured: [true, "Must provide the distance"],
    trim: true,
  },
  // arrivalTime: {
  //   type: String,
  //   requiured: [true, "Must provide a arrivalTime"],
  //   trim: true,
  // },
  ACSeats: {
    type: Number,
    requiured: [true, "Must provide ACseats"],
    trim: true,
  },

  genSeats: {
    type: Number,
    requiured: [true, "Must provide genseats"],
    trim: true,
  },

  acFare: {
    type: Number,
    requiured: [true, "Must provide ACfare"],
    trim: true,
  },

  genFare: {
    type: Number,
    requiured: [true, "Must provide genFare"],
    trim: true,
  },

  date: {
    type: String,
    requiured: [true, "Must provide Date"],
    trim: true,
  },

  arrivalTime: {
    type: String,
    requiured: [true, "Must provide Date"],
    trim: true,
  },

  depTime: {
    type: String,
    requiured: [true, "Must provide Date"],
    trim: true,
  },
});

module.exports = mongoose.model("Train", TrainSchema);
