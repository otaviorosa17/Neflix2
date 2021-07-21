const profile = document.querySelector('header .img')
const swiper = new Swiper('.swiper-container', {
  // Default parameters
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGruop: 2,
  loop: true
})
