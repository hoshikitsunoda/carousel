async function slides() {
  const response = await fetch('/carouselPhotos')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

const cycle = {
  slides: null,
  left: 0,
  right: 2
}

slides()
  .then(documents => (carousel.slides = documents))
  .then(documents => (cycle.slides = documents))
  .then(() => slides())

const $circle1 = document.getElementById('circle1')
const $circle2 = document.getElementById('circle2')
const $circle3 = document.getElementById('circle3')

const addShade = () => {
  if (carousel.current === 1) {
    $circle1.classList.add('shade')
    $circle3.classList.remove('shade')
  }
  else if (carousel.current === 2)
  {
    $circle2.classList.add('shade')
    $circle1.classList.remove('shade')
  }
  else if (carousel.current === 0)
  {
    $circle3.classList.add('shade')
    $circle2.classList.remove('shade')
  }
}

const addShadeLeft = () => {
  if (cycle.left === 1) {
    $circle1.classList.add('shade')
    $circle3.classList.remove('shade')
  }
  else if (cycle.left === 2)
  {
    $circle2.classList.add('shade')
    $circle1.classList.remove('shade')
  }
  else if (cycle.left === 0)
  {
    $circle3.classList.add('shade')
    $circle2.classList.remove('shade')
  }
}

const addShadeRight = () => {
  if (cycle.right === 1) {
    $circle1.classList.add('shade')
    $circle3.classList.remove('shade')
  }
  else if (cycle.right === 2)
  {
    $circle2.classList.add('shade')
    $circle1.classList.remove('shade')
  }
  else if (cycle.right === 0)
  {
    $circle3.classList.add('shade')
    $circle2.classList.remove('shade')
  }
}

const $leftArrow = document.getElementById('arrow-left')
const $rightArrow = document.getElementById('arrow-right')

$rightArrow.addEventListener('click', () => {
  document
    .querySelector('.slide')
    .setAttribute('src', `${cycle.slides[cycle.right].url}`)

    if (cycle.right < cycle.slides.length - 1) {
      cycle.right++
      addShadeRight()
    }
    else {
      cycle.right = 0
      addShadeRight()
    }
})

$leftArrow.addEventListener('click', () => {
  document
    .querySelector('.slide')
    .setAttribute('src', `${cycle.slides[cycle.left].url}`)

    if (cycle.left < cycle.slides.length - 1) {
      cycle.left++
      addShadeLeft()
    }
    else {
      cycle.left = 0
      addShadeLeft()
    }
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
