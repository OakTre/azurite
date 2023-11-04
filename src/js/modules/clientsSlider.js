import Swiper, { Autoplay } from 'swiper/swiper-bundle';

Swiper.use(Autoplay);

export default () => {
  const sliderEL = document.querySelector('.clients__slider')

  if (!sliderEL) return

  const slider = new Swiper(sliderEL, {
    slidesPerView: 'auto',
    spaceBetween: 150,
    speed: 15000,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        spaceBetween: 40,
      },
      992: {
        spaceBetween: 150,
      }
    }
  })
}
