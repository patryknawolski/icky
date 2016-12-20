const stick = function stick (el, className) {
  let { node } = el
  let elWidth = node.getBoundingClientRect().width

  node.classList.add(className)
  node.style.width = `${elWidth}px`
  node.style.position = 'fixed'
  node.style.top = `${el.offset}px`
  node.style.bottom = null

  el.isSticky = true
}

const unstick = function stick (el, className, end) {
  let { node } = el

  node.classList.remove(className)
  node.style.top = null

  if (end) {
    node.style.position = 'absolute'
    node.style.bottom = 0
  } else {
    node.style.width = null
    node.style.position = null
    node.style.bottom = null
  }

  el.isSticky = false
}

/**
 * Scroll logic - stick or unstick icky elements on scroll
 */
const handleScroll = function (elements, options) {
  const scrollTop = window.pageYOffset

  elements.forEach((el) => {
    const passedThreshold = scrollTop >= el.threshold
    const passedParentEnd = scrollTop + el.offset + el.height > el.parentEnd

    if (passedThreshold && !passedParentEnd) {
      if (!el.isSticky) {
        stick(el, options.classNameSticky)
      }
    } else if (passedParentEnd) {
      if (el.isSticky) unstick(el, options.classNameSticky, true)
    } else {
      if (el.isSticky) unstick(el, options.classNameSticky)
    }
  })
}

export default handleScroll
