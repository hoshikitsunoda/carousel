const renderPhoto = (image) => {
  const $photo = document.createElement('img')
  $photo.src = image.url
  return $photo
}

document.body.appendChild(renderPhoto())
