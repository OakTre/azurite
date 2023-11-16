import Swiper from 'swiper/swiper-bundle';

export default () => {
  const sliderEL = document.querySelector('.image-slider')

  if (!sliderEL) return

  const slider = new Swiper(sliderEL, {
    slidesPerView: 1,
    spaceBetween: 16
  })
}
