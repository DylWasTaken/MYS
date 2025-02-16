const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Log = mongoose.model("log", LogSchema);
