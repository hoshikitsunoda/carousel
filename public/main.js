const renderPhoto = (image) => {
  const $photo = document.createElement('img')
  $photo.src = image.url
  return $photo
}

const fetchPhoto = () => {
  return fetch('/carouselPhotos')
    .then(res => res.json)
}

document.body.appendChild(renderPhoto())
