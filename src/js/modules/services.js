export default () => {
  const DELAY = 600;
  const navItems = Array.from(document.querySelectorAll('.service__item'));
  const infoItems = Array.from(document.querySelectorAll('.service__info-block'));

  if (navItems.length === 0) return;

  infoItems.forEach(item => {
    if (!item.classList.contains('service__info-block--active')) {
      item.style.transform = 'translateY(3rem)'
    }
  })

  const toggleItem = (item, isVisible) => {
    item.style.opacity = isVisible ? 1 : 0
    item.style.visibility = isVisible ? 'visible' : 'hidden'
    item.style.transform = isVisible ? 'translateY(0)' : 'translateY(3rem)'
  }

  const hideItem = (item) => {
    return new Promise((resolve, reject) => {
      toggleItem(item, false)

      setTimeout(() => {
        resolve()
      }, DELAY)
    })
  }

  const showItem = (item) => {
    return new Promise((resolve, reject) => {
      item.classList.add('service__info-block--active')

      setTimeout(() => {
        resolve()
      }, 5)
    })
  }

  navItems.forEach((nav, index) => {
    nav.addEventListener('click', () => {
      const { infoNav } = nav.dataset
      const { infoContent } = infoItems[index].dataset

      infoItems.forEach(item => {
        hideItem(item)
          .then(() => {
            item.classList.remove('service__info-block--active')
          })
      })
      navItems.forEach(item => item.classList.remove('service__item--active'))

      if (infoNav === infoContent) {
        setTimeout(() => {
          infoItems[index].classList.add('service__info-block--active')

          showItem(infoItems[index])
            .then(() => {
              toggleItem(infoItems[index], true)
            })
        },DELAY)

        navItems[index].classList.add('service__item--active')
      }
    })
  })
}
