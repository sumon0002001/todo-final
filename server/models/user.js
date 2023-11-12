const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    unique: true,
  },
  list: [
    {
      type: mongoose.Types.ObjectId,
      ref: "List",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
