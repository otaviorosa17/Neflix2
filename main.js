const slide = document.querySelectorAll('.swiper-slide')
const swiper = new Swiper('.swiper-container', {
  // Default parameters
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 5,
  spaceBetween: 5
})
