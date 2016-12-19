/**
 * *******************************************************
 * Plugin Boilerplate - a bootstrap for creating web plugins by @patryknawolski
 * *******************************************************
 */

// Styles
import styles from './../sass/plugin.scss' // eslint-disable-line no-unused-vars

// Modules, libs & helpers

/**
 * Options
 */

let defaults = {
  offset: 100
}

let settings = {}

/**
 * Initializing
 */
const init = function (options = {}) {
  settings = Object.assign({}, defaults, options)
}

module.exports = {
  init: init
}
