import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const DURATION = 0.7
  const blocks = gsap.utils.toArray('.js-reveal-block')

  blocks.forEach((block) => {
    gsap.set(block, { y: 15, autoAlpha: 0 })

    ScrollTrigger.create({
      trigger: block,
      start: 'top 70%',
      onEnter: function () {
        gsap.to(block, { y: 0, autoAlpha: 1, duration: DURATION })
      },
      onEnterBack: function () {},
      onLeave: function () {}
    });
  })

  window.azurite_api.refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
  }
}
