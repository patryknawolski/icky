const stick = function stick (el, className) {
  el.node.classList.add(className)
  el.isSticky = true
}

const unstick = function stick (el, className) {
  el.node.classList.remove(className)
  el.isSticky = false
}

/**
 * Scroll logic - stick or unstick icky elements on scroll
 */
const handleScroll = function (elements, options) {
  const scrollTop = window.pageYOffset

  elements.forEach((el) => {
    const threshold = el.node.offsetTop - el.offset
    const passedThreshold = scrollTop >= threshold

    if (passedThreshold) {
      if (!el.isSticky) {
        stick(el, options.className)
      }
    } else {
      if (el.isSticky) {
        unstick(el, options.className)
      }
    }
  })
}

export default handleScroll
