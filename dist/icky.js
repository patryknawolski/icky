var Icky =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * *************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Icky - a plugin for making elements sticky by @patryknawolski
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * *************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// Styles
	// eslint-disable-line no-unused-vars
	
	// Modules, libs & helpers
	
	
	var _icky = __webpack_require__(1);
	
	var _icky2 = _interopRequireDefault(_icky);
	
	var _handleScroll = __webpack_require__(5);
	
	var _handleScroll2 = _interopRequireDefault(_handleScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var settings = {};
	
	/**
	 * Private variables
	 */
	var elements = [];
	
	/**
	 * Initializing
	 */
	
	var Icky = function () {
	  function Icky() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Icky);
	
	    var defaults = {
	      selector: '.icky',
	      classNameSticky: 'icky-is-sticky',
	      offset: 100
	    };
	    settings = Object.assign({}, defaults, options);
	    elements = this.collectNode();
	
	    elements.map(function (el) {
	      var parentNodePosition = window.getComputedStyle(el.parentNode).getPropertyValue('position');
	
	      if (parentNodePosition === 'static') el.parentNode.style.position = 'relative';
	    });
	
	    window.addEventListener('scroll', function () {
	      return (0, _handleScroll2.default)(elements, settings);
	    });
	  }
	
	  _createClass(Icky, [{
	    key: 'collectNode',
	    value: function collectNode() {
	      var elements = document.querySelectorAll(settings.selector);
	      var extendedElements = Array.prototype.map.call(elements, function (el) {
	        var node = el;
	        var nodeComputedStyle = window.getComputedStyle(node);
	        var offset = parseInt(el.getAttribute('data-icky-offset')) || settings.offset;
	        var parentNode = node.parentNode;
	        var parentOffset = parentNode.offsetTop;
	
	        var marginBottom = parseInt(nodeComputedStyle['margin-bottom']);
	        var marginTop = parseInt(nodeComputedStyle['margin-top']);
	        var height = node.offsetHeight + marginTop + marginBottom;
	
	        return {
	          height: height,
	          node: node,
	          offset: offset,
	          isSticky: false,
	          parentNode: parentNode,
	          parentEnd: parentOffset + parentNode.offsetHeight,
	          threshold: parentOffset + node.offsetTop - marginTop - offset
	        };
	      });
	
	      return extendedElements;
	    }
	  }]);
	
	  return Icky;
	}();
	
	var init = new Icky();
	
	module.exports = init;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var stick = function stick(el, className) {
	  var node = el.node;
	
	  var elWidth = node.getBoundingClientRect().width;
	
	  node.classList.add(className);
	  node.style.width = elWidth + 'px';
	  node.style.position = 'fixed';
	  node.style.top = el.offset + 'px';
	  node.style.bottom = null;
	
	  el.isSticky = true;
	};
	
	var unstick = function stick(el, className, end) {
	  var node = el.node;
	
	
	  node.classList.remove(className);
	  node.style.top = null;
	
	  if (end) {
	    node.style.position = 'absolute';
	    node.style.bottom = 0;
	  } else {
	    node.style.width = null;
	    node.style.position = null;
	    node.style.bottom = null;
	  }
	
	  el.isSticky = false;
	};
	
	/**
	 * Scroll logic - stick or unstick icky elements on scroll
	 */
	var handleScroll = function handleScroll(elements, options) {
	  var scrollTop = window.pageYOffset;
	
	  elements.forEach(function (el) {
	    var passedThreshold = scrollTop >= el.threshold;
	    var passedParentEnd = scrollTop + el.offset + el.height > el.parentEnd;
	
	    if (passedThreshold && !passedParentEnd) {
	      if (!el.isSticky) {
	        stick(el, options.classNameSticky);
	      }
	    } else if (passedParentEnd) {
	      if (el.isSticky) unstick(el, options.classNameSticky, true);
	    } else {
	      if (el.isSticky) unstick(el, options.classNameSticky);
	    }
	  });
	};
	
	exports.default = handleScroll;

/***/ }
/******/ ]);
//# sourceMappingURL=icky.js.map