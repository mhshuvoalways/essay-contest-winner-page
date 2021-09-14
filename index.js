const express = require('express');
const app = express();
const importantDetail = require('./controllers/importantDetail');
const photoGallery = require('./controllers/photoGallery');
const magazine = require('./controllers/magazine');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret:  process.env.api_secret,
  secure: true
});

app.use('/importantdate', importantDetail)
app.use('/photoGallery', photoGallery)
app.use('/magazine', magazine)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGOURL);

app.listen(port, () => {
  console.log(`App listening at ${port}`)
});