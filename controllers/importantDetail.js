const router = require('express').Router()
const ImportantDate = require('../Model/ImportantDate')

router.post('/post', (req, res) => {
    const {themeTitle, themeSubTitle} = req.body;
    const jsonObject = {
        themeTitle,
        themeSubTitle
    }
    const theme = new ImportantDate(jsonObject);
    theme.save()
    .then((response) => {
        res.status(200).json({
            response
        })
    })
    .catch((err) => {
        console.log("something is wrong");
    })
})

router.get('/get', (req, res) => {
    ImportantDate.find()
    .then((result) => {
        res.status(200).json({
            result
        })
    })
    .catch((err) => {
        console.log("something is wrong");
    })
})

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    ImportantDate.findOneAndRemove({_id: id})
    .then((response) => {
        console.log(response);
        
        res.status(200).json({
            response
        })
    })
    .catch((err) => {
        console.log("something is wrong");
    })
})

module.exports = router;