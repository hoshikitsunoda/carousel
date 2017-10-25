async function slides() {
  const response = await fetch('/carouselPhotos')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

slides().then(documents => (carousel.slides = documents))

setInterval(function() {
  document
    .querySelector('.slide')
    .setAttribute('src', `${carousel.slides[carousel.current].url}`)

    if (carousel.current < carousel.slides.length - 1) {
      carousel.current++
    }
    else {
      carousel.current = 0
    }
}, 3000)

// const renderPhoto = (image) => {
//   console.log(image)
//   const $box = document.createElement('div')
//   const $photo = document.createElement('img')
//   $photo.src = image.url
//   $photo.setAttribute('class', 'hidden')
//   $box.appendChild($photo)
//   return $box
// }
//
// const fetchPhoto = (params) => {
//   return fetch('/carouselPhotos/')
//     .then(res => res.json())
// }
//
// // const displayImage = () => {
// //   fetchPhoto()
// //     .then(renderPhoto)
// //     .then(data => {
// //       document.body.appendChild(data)
// //     })
// // }
//
// const displayImage = () => {
//   fetchPhoto()
//     .then(data => data.map(renderPhoto))
//     .then((data) => {
//       data.forEach(element => {
//         document.body.appendChild(element)
//       })
//     })
// }
//
// displayImage()
//
// setInterval(() => {
//   const $photo = document.getElementsByClassName('hidden')
//   $photo.classList.remove('hidden')
// }, 1000)
