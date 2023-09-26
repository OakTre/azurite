import {disableScroll, enableScroll} from "../helpers/disableScroll";

export default () => {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.header__nav')
  let isOpened = false

  if (!burger) return;

  burger.addEventListener('click', () => {
    if (isOpened) {
      enableScroll()

      isOpened = false
      burger.classList.remove('header__burger--is-opened')
      menu.classList.remove('header__nav--is-opened')
    } else {
      disableScroll()

      isOpened = true
      burger.classList.add('header__burger--is-opened')
      menu.classList.add('header__nav--is-opened')
    }
  })
}
