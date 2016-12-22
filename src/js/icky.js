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
const defaults = {
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
    const node = el
    const nodeComputedStyle = window.getComputedStyle(node)
    const offset = parseInt(el.getAttribute('data-icky-offset')) || settings.offset
    const parentNode = node.parentNode
    const parentOffset = parentNode.offsetTop

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
    const parentNodePosition = window.getComputedStyle(el.parentNode).getPropertyValue('position')

    if (parentNodePosition === 'static') el.parentNode.style.position = 'relative'
  })

  window.addEventListener('scroll', () => handleScroll(elements, settings))
}

module.exports = {
  init: init
}
