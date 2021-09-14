const { Schema, model } = require("mongoose");

const magazineSchema = new Schema(
  {
    url: {
      type: String,
      require: true,
    },
    public_id: {
      type: String,
      require: true,
    },
    photoLink: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("magazine", magazineSchema);
