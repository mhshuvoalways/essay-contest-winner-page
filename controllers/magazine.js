const router = require('express').Router()
const fileUploader = require('../middlewares/fileUploader')
const Magazine = require('../Model/Magazine')
const cloudinary = require('cloudinary').v2

router.post('/post', fileUploader.single('image'), (req, res) => {
    cloudinary.uploader.upload(req.file.path)
    .then((result) => {
        new Magazine({
            public_id: result.public_id,
            url: result.url
        }).save()
        .then((response) => {
            res.status(200).json({
                response
            })
        })
        .catch((err) => {
            res.status(400).json({
                err
        })
    })
    })
    .catch((err) => {
        res.status(400).json({
            err
    })
})
})

router.get('/get', (req, res) => {
    Magazine.find()
    .then((result) => {
        res.status(200).json({
            result
        })
    })
    .catch((err) => {
        res.status(400).json({
            err
    })
})
})

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    cloudinary.uploader.destroy(id)
    .then(() => {
        Magazine.findOneAndRemove({public_id: id})
        .then((response) => {
            res.status(200).json({
                response
            })
        })
        .catch((err) => {
            res.status(400).json({
                err
        })
    })
})
.catch((err) => {
    res.status(400).json({
        err
        })
    })
})

module.exports = router;