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

const profileImg = document.querySelector('header .img')
const profileMenu = document.querySelector('.profile-menu')
const arrow = document.querySelector('.arrow')

profileImg.addEventListener('click', () => {
  profileMenu.classList.toggle('show')
  arrow.classList.toggle('up')
})
arrow.addEventListener('click', () => {
  profileMenu.classList.toggle('show')
  arrow.classList.toggle('up')
})

const dadImg = document.querySelector('.profile-menu .dad')
const dadImgSrc =
  'https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png'
const momImg = document.querySelector('.profile-menu .mom')
const momImgSrc =
  'https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png'
const sonImg = document.querySelector('.profile-menu .son')
const sonImgSrc =
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c659933850498.56ba69ac2e080.png'
const daughterImg = document.querySelector('.profile-menu .daughter')
const daugherImgSrc =
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png'

dadImg.addEventListener('click', () => {
  profileImg.src = dadImgSrc
})

momImg.addEventListener('click', () => {
  profileImg.src = momImgSrc
})

sonImg.addEventListener('click', () => {
  profileImg.src = sonImgSrc
})

daughterImg.addEventListener('click', () => {
  profileImg.src = daugherImgSrc
})
