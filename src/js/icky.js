/**
 * *************************************************************
 * Icky - a plugin for making elements sticky by @patryknawolski
 * *************************************************************
 */

// Styles
import styles from './../sass/icky.scss' // eslint-disable-line no-unused-vars

// Modules, libs & helpers
import handleScroll from './helpers/handleScroll'

/**
 * Options
 */
let defaults = {
  selector: '.icky',
  classNameSticky: 'icky-is-sticky',
  offset: 100
}

let settings = {}

/**
 * Private variables
 */
let elements = []

/**
 * Collect elements
 */
const collect = function () {
  let elements = document.querySelectorAll(settings.selector)
  let extendedElements = Array.prototype.map.call(elements, el => {
    let node = el
    let offset = parseInt(el.getAttribute('data-icky-offset'))
    let parentEl = node.parentNode

    return {
      height: node.getBoundingClientRect().height,
      node,
      offset,
      isSticky: false,
      parentEl,
      parentEnd: parentEl.offsetTop + parentEl.getBoundingClientRect().height,
      threshold: node.offsetTop - offset
    }
  })

  return extendedElements
}

/**
 * Initializing
 */
const init = function (options = {}) {
  settings = Object.assign({}, defaults, options)
  elements = collect()

  elements.forEach(el => {
    let parentElPosition = window.getComputedStyle(el.parentEl).getPropertyValue('position')

    if (parentElPosition === 'static') el.parentEl.style.position = 'relative'
  })

  window.addEventListener('scroll', () => handleScroll(elements, settings))
}

module.exports = {
  init: init
}
