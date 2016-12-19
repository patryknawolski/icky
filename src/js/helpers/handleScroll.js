const stick = function stick (el, className) {
  let { node } = el
  let elWidth = node.getBoundingClientRect().width

  node.classList.add(className)
  node.style.width = `${elWidth}px`
  node.style.position = 'fixed'
  node.style.top = `${el.offset}px`

  el.isSticky = true
}

const unstick = function stick (el, className) {
  let { node } = el

  node.classList.remove(className)
  node.style.width = null
  node.style.position = null
  node.style.top = null

  el.isSticky = false
}

/**
 * Scroll logic - stick or unstick icky elements on scroll
 */
const handleScroll = function (elements, options) {
  const scrollTop = window.pageYOffset

  elements.forEach((el) => {
    const threshold = el.initialOffsetTop - el.offset
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
