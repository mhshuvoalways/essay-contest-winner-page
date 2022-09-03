const router = require("express").Router();
const fileUploader = require("../middlewares/fileUploader");
const PhotoGallery = require("../Model/PhotoGallery");
const cloudinary = require("cloudinary").v2;

router.post("/post", fileUploader.single("image"), (req, res) => {
  cloudinary.uploader
    .upload(req.file.path, {
      public_id: "essayContest/photoGallery/" + req.file.filename,
    })
    .then((result) => {
      new PhotoGallery({
        public_id: result.public_id,
        url: result.url,
      })
        .save()
        .then((response) => {
          res.status(200).json({
            response,
          });
        })
        .catch((err) => {
          res.status(400).json({
            err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

router.get("/get", (req, res) => {
  PhotoGallery.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  PhotoGallery.findOneAndRemove({ _id: id })
    .then((response) => {
      cloudinary.uploader
        .destroy(response.public_id)
        .then((response) => {
          res.status(200).json({
            response,
          });
        })
        .catch((err) => {
          res.status(400).json({
            err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
});

module.exports = router;
