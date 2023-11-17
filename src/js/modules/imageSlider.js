import Swiper, { Navigation, Pagination } from 'swiper/swiper-bundle'

Swiper.use([Navigation, Pagination])

export default () => {
  const sliderEL = document.querySelector('.image-slider')

  if (!sliderEL) return

  const slider = new Swiper(sliderEL, {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: sliderEL.querySelector('.js-next-slide'),
      prevEl: sliderEL.querySelector('.js-prev-slide')
    },
    pagination: {
      el: '.image-slider-pagination',
    },
  })
}
