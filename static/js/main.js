const imagesWrapperEL = document.querySelector('.images-container')

function defineImagesSizes() {
 const wrapperWidth = imagesWrapperEL.offsetWidth
 const wrapperHeight = imagesWrapperEL.offsetHeight

 if (wrapperWidth > wrapperHeight) {
  imagesWrapperEL.classList.add('define-image-dimensions-based-on-height')
  imagesWrapperEL.classList.remove('define-image-dimensions-based-on-width')
 }
 else {
  imagesWrapperEL.classList.remove('define-image-dimensions-based-on-height')
  imagesWrapperEL.classList.add('define-image-dimensions-based-on-width')
 }
}

window.addEventListener('load', defineImagesSizes) 

window.addEventListener('resize', defineImagesSizes)