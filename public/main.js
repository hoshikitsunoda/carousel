async function slides() {
  const response = await fetch('/carouselPhotos')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

slides()
  .then(documents => (carousel.slides = documents))
  .then(() => addShade())
  .then(() => switchSlide())

const $circle1 = document.getElementById('circle1')
const $circle2 = document.getElementById('circle2')
const $circle3 = document.getElementById('circle3')

const addShade = () => {
  if (carousel.current === 0) {
    $circle1.classList.add('shade')
    $circle2.classList.remove('shade')
    $circle3.classList.remove('shade')
  }
  else if (carousel.current === 1)
  {
    $circle2.classList.add('shade')
    $circle1.classList.remove('shade')
    $circle3.classList.remove('shade')
  }
  else if (carousel.current === 2)
  {
    $circle3.classList.add('shade')
    $circle2.classList.remove('shade')
    $circle1.classList.remove('shade')
  }
}

const $leftArrow = document.getElementById('arrow-left')
const $rightArrow = document.getElementById('arrow-right')

$rightArrow.addEventListener('click', () => {
  if (carousel.current === carousel.slides.length - 1) return
  carousel.current++
  switchSlide()
  addShade()
})

$leftArrow.addEventListener('click', () => {
  if (carousel.current === 0) return
  carousel.current--
  switchSlide()
  addShade()
})

const switchSlide = () => {
  document
    .querySelector('.slide')
    .setAttribute('src', `${carousel.slides[carousel.current].url}`)
}

setInterval(function() {
    if (carousel.current < carousel.slides.length - 1) {
      carousel.current++
      addShade()
    }
    else {
      carousel.current = 0
      addShade()
    }
    switchSlide()
}, 1000)
