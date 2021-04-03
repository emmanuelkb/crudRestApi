const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide username."],
    },
    password: {
      type: String,
      required: [true, "Enter password"],
    },
    email: {
      type: String,
      required: [true, "provide valid email"],
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
