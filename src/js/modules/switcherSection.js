import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

export default () => {
  const switcherNav = document.querySelector('.switcher-section__nav')
  const headerHeight = document.querySelector(".header").offsetHeight
  const navItems = document.querySelectorAll('.switcher-section__nav-item')
  const mobileWidthMediaQuery = window.matchMedia('(max-width: 1200px)')

  if (!switcherNav) return
  if (mobileWidthMediaQuery.matches) return

  const timelime = gsap.timeline({
    scrollTrigger: {
      trigger: '.switcher-section__nav',
      start: `top ${headerHeight + 140}rem`,
      end: 'bottom 30%',
      pin: true,
      scrub: true,
      pinSpacing: false,
      endTrigger: '.switcher-section',
      pinnedContainer: ".switcher-section__container",
    }
  });

  gsap.utils.toArray(".switcher-section__content-item").forEach((block, index) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 40%",
      onEnter: self => {
        navItems.forEach(item => item.classList.remove("switcher-section__nav-item--is-active"));
        navItems[index].classList.add('switcher-section__nav-item--is-active')
      },
      onEnterBack: self => {
        navItems.forEach(item => item.classList.remove("switcher-section__nav-item--is-active"));
        navItems[index].classList.add('switcher-section__nav-item--is-active')
      }
    });
  });
}
