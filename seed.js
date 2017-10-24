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
      { id: 1, url: 'public/upload/tanaami.jpg'},
      { id: 2, url: 'public/upload/tanaami2.jpg'},
      { id: 3, url: 'public/upload/tanaami3.jpg'}
    ])
})
