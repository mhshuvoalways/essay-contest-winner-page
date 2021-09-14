const router = require("express").Router();
const fileUploader = require("../middlewares/fileUploader");
const PhotoGallery = require("../Model/PhotoGallery");
const cloudinary = require("cloudinary").v2;

router.post("/post", fileUploader.single("image"), (req, res) => {
  cloudinary.uploader
    .upload(req.file.path)
    .then((result) => {
      console.log(result);

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
        .catch(() => {
          console.log("something is wrong");
        });
    })
    .catch(() => {
      console.log("something is wrong");
    });
});

router.get("/get", (req, res) => {
  PhotoGallery.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch(() => {
      console.log("something is wrong");
    });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  cloudinary.uploader
    .destroy(id)
    .then((response) => {
      console.log(response);
      PhotoGallery.findOneAndRemove({ public_id: id })
        .then((response) => {
          res.status(200).json({
            response,
          });
        })
        .catch(() => {
          console.log("something is wrong");
        });
    })
    .catch(() => {
      console.log("something is wrong");
    });
});

module.exports = router;
