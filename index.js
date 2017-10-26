const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/carousel'
const express = require('express')
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const carouselPhotos = db.collection('carouselPhotos')

  app.use(express.static('./public'))

  app.get('/carouselPhotos', (req, res) => {
    carouselPhotos
      .find({})
      .toArray()
      .then(response => {
        res.send(response)
      })
      .catch(err => {
        console.error(err)
      })
  })
  app.listen('3000', () => console.log('listening on port 3000!'))
})
