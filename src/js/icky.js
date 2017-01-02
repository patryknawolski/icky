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
    this.settings = Object.assign({}, defaults, options)
    this.elements = this.collectNode()
    this.elements.map(el => {
      const parentNodePosition = window.getComputedStyle(el.parentNode).getPropertyValue('position')

      if (parentNodePosition === 'static') el.parentNode.style.position = 'relative'
    })

    window.addEventListener('scroll', () => handleScroll(this.elements, this.settings))
  }

  collectNode () {
    const elements = document.querySelectorAll(this.settings.selector)
    const extendedElements = Array.prototype.map.call(elements, el => {
      const node = el
      const nodeComputedStyle = window.getComputedStyle(node)
      const offset = parseInt(el.getAttribute('data-icky-offset')) || this.settings.offset
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

const init = new Icky()

module.exports = init
