import Swiper, { Navigation } from 'swiper/swiper-bundle';
Swiper.use(Navigation);

export default () => {
  const sliderEL = document.querySelector('.news-slider__swiper');

  if (!sliderEL) return;

  const slider = new Swiper(sliderEL, {
    slidesPerView: 1.1,
    spaceBetween: 20,
    navigation: {
      nextEl: sliderEL.closest('.news').querySelector('.js-next-slide'),
      prevEl: sliderEL.closest('.news').querySelector('.js-prev-slide'),
    }
  })
}
