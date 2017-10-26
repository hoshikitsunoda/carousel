const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/carousel'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const carouselPhotos = db.collection('carouselPhotos')

  carouselPhotos
    .insertMany([
      { id: 1, url: 'upload/tanaami.jpg'},
      { id: 2, url: 'upload/tanaami2.jpg'},
      { id: 3, url: 'upload/tanaami3.jpg'}
    ])
})
