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
  className: 'icky-is-sticky',
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
  let elements = document.querySelectorAll('[data-icky]')
  let extendedElements = Array.prototype.map.call(elements, el => {
    return {
      node: el,
      initialOffsetTop: el.offsetTop,
      offset: parseInt(el.getAttribute('data-icky-offset')),
      isSticky: false
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

  window.addEventListener('scroll', () => handleScroll(elements, settings))
}

module.exports = {
  init: init
}