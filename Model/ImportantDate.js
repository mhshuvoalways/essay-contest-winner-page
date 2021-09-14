const mongoose = require("mongoose");
const { Schema } = mongoose;

const importantDates = new Schema(
  {
    themeTitle: {
      type: String,
      require: true,
    },
    themeSubTitle: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("importantDate", importantDates);
