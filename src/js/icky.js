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
    let height
    let marginBottom
    let marginTop
    let node = el
    let nodeComputedStyle = window.getComputedStyle(node)
    let offset = parseInt(el.getAttribute('data-icky-offset'))
    let parentNode = node.parentNode
    let parentOffset = parentNode.offsetTop

    marginBottom = parseInt(nodeComputedStyle['margin-bottom'])
    marginTop = parseInt(nodeComputedStyle['margin-top'])
    height = node.offsetHeight + marginTop + marginBottom

    return {
      height,
      node,
      offset,
      isSticky: false,
      parentNode,
      parentEnd: parentOffset + parentNode.offsetHeight,
      threshold: parentOffset + node.offsetTop - marginTop - offset
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
    let parentNodePosition = window.getComputedStyle(el.parentNode).getPropertyValue('position')

    if (parentNodePosition === 'static') el.parentNode.style.position = 'relative'
  })

  window.addEventListener('scroll', () => handleScroll(elements, settings))
}

module.exports = {
  init: init
}
