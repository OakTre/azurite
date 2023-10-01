import gsap from "gsap"

const DURATION = 0.7
const timeline = gsap.timeline()
const headerContainer = document.querySelector('.header__container')
const introContainer = document.querySelector('.intro__container')

export const beforeStart = () => {
  if (introContainer)
    gsap.set(headerContainer, { autoAlpha: 0 })
    gsap.set(introContainer, { autoAlpha: 0, y: 15 })
}

export const afterStart = () => {
  if (introContainer)
    timeline
      .to(headerContainer, { autoAlpha: 1, duration: DURATION })
      .to(introContainer, { autoAlpha: 1, y: 0, duration: DURATION },'-=0.4')
}
