const mongoose = require("mongoose");
const { Schema } = mongoose;

const Subscribe = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
        type: String,
        require: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subscribe", Subscribe);
