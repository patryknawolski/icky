/**
 * *************************************************************
 * Icky - a plugin for making elements sticky by @patryknawolski
 * *************************************************************
 */

// Styles
import styles from './../sass/icky.scss' // eslint-disable-line no-unused-vars

// Modules, libs & helpers
import handleScroll from './helpers/handleScroll'

class Icky {
  constructor (options = {}) {
    const defaults = {
      selector: '.icky',
      classNameSticky: 'icky-is-sticky',
      offset: 100
    }
    this._settings = Object.assign({}, defaults, options)
    this._elements = this.collectNode()

    this._elements.map(el => {
      const parentNodePosition = window.getComputedStyle(el.parentNode).getPropertyValue('position')

      if (parentNodePosition === 'static') el.parentNode.style.position = 'relative'
    })

    window.addEventListener('scroll', () => handleScroll(this._elements, this._settings))
  }

  collectNode () {
    const elements = document.querySelectorAll(this._settings.selector)
    const extendedElements = Array.prototype.map.call(elements, el => {
      const node = el
      const nodeComputedStyle = window.getComputedStyle(node)
      const offset = parseInt(el.getAttribute('data-icky-offset')) || this._settings.offset
      const parentNode = node.parentNode
      const parentOffset = parentNode.offsetTop

      const marginBottom = parseInt(nodeComputedStyle['margin-bottom'])
      const marginTop = parseInt(nodeComputedStyle['margin-top'])
      const height = node.offsetHeight + marginTop + marginBottom

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
}

/**
 * Initializing
 */

const init = new Icky()

module.exports = init
