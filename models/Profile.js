const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  walk: {
    type: Number,
  },
  run: {
    type: Number,
  },
  cycle: {
    type: Number,
  },
  swim: {
    type: Number,
  },
  horseRiding: {
    type: Number,
  },
  badges: {
    type: [String],
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
