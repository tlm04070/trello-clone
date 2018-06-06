const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  boards: {
    type: Array,
    default: [],
    required: false
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
