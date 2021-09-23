const router = require("express").Router();
const Contact = require("../Model/Contact");

router.post("/post", (req, res) => {
  const { name, phone, email } = req.body;
  const jsonObject = {
    name,
    phone,
    email
  };
  const theme = new Contact(jsonObject);
  theme
    .save()
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((err) => {
      console.log("something is wrong");
    });
});

router.get("/get", (req, res) => {
  Contact.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log("something is wrong");
    });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Contact.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json({
        response,
      });
    })
    .catch((err) => {
      console.log("something is wrong");
    });
});

module.exports = router;
