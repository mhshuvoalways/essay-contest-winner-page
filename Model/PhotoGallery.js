const { Schema, model } = require("mongoose");

const photoGallerySchema = new Schema(
  {
    url: {
      type: String,
      require: true,
    },
    public_id: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("photoGallery", photoGallerySchema);
