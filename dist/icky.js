var Icky=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=n(1),a=(o(r),n(5)),l=o(a),c=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var o={selector:".icky",classNameSticky:"icky-is-sticky",offset:100};this._settings=Object.assign({},o,n),this._elements=this.collectNode(),this._elements.map(function(t){var e=window.getComputedStyle(t.parentNode).getPropertyValue("position");"static"===e&&(t.parentNode.style.position="relative")}),window.addEventListener("scroll",function(){return(0,l.default)(e._elements,e._settings)})}return s(t,[{key:"collectNode",value:function(){var t=this,e=document.querySelectorAll(this._settings.selector),n=Array.prototype.map.call(e,function(e){var n=e,o=window.getComputedStyle(n),i=parseInt(e.getAttribute("data-icky-offset"))||t._settings.offset,s=n.parentNode,r=s.offsetTop,a=parseInt(o["margin-bottom"]),l=parseInt(o["margin-top"]),c=n.offsetHeight+l+a;return{height:c,node:n,offset:i,isSticky:!1,parentNode:s,parentEnd:r+s.offsetHeight,threshold:r+n.offsetTop-l-i}});return n}}]),t}(),u=new c;t.exports=u},function(t,e){},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=t.node,o=n.getBoundingClientRect().width;n.classList.add(e),n.style.width=o+"px",n.style.position="fixed",n.style.top=t.offset+"px",n.style.bottom=null,t.isSticky=!0},o=function(t,e,n){var o=t.node;o.classList.remove(e),o.style.top=null,n?(o.style.position="absolute",o.style.bottom=0):(o.style.width=null,o.style.position=null,o.style.bottom=null),t.isSticky=!1},i=function(t,e){var i=window.pageYOffset;t.forEach(function(t){var s=i>=t.threshold,r=i+t.offset+t.height>t.parentEnd;s&&!r?t.isSticky||n(t,e.classNameSticky):r?t.isSticky&&o(t,e.classNameSticky,!0):t.isSticky&&o(t,e.classNameSticky)})};e.default=i}]);
//# sourceMappingURL=icky.js.map