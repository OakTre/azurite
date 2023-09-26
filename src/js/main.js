// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible'
import lazyIMages from './modules/lazyIMages'
import documenReady from './helpers/documenReady'
import initModal from './modules/initModal'
import slider from "./modules/slider"
import services from "./modules/services"
import anchorLinks from "./modules/anchorLinks"
import toggleMenu from "./modules/toggleMenu"
import vid from "./modules/vid"
import {afterStart, beforeStart} from "./modules/firstAnim"
import sectionScrollTrigger from "./modules/sectionScrollTrigger"


documenReady(() => {
  window.azurite_api = { }

  vid(afterStart, beforeStart)
  lazyIMages()
  initModal()
  slider()
  services()
  anchorLinks()
  toggleMenu()
  sectionScrollTrigger()
})
