var Icky=function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="dist/",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=i(1),s=(n(o),i(5)),r=n(s),a={className:"icky-is-sticky",offset:100},c={},f=[],l=function(){var t=document.querySelectorAll("[data-icky]"),e=Array.prototype.map.call(t,function(t){return{node:t,initialOffsetTop:t.offsetTop,offset:parseInt(t.getAttribute("data-icky-offset")),isSticky:!1}});return e},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c=Object.assign({},a,t),f=l(),window.addEventListener("scroll",function(){return(0,r.default)(f,c)})};t.exports={init:u}},function(t,e){},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){var i=t.node,n=i.getBoundingClientRect().width;i.classList.add(e),i.style.width=n+"px",i.style.position="fixed",i.style.top=t.offset+"px",t.isSticky=!0},n=function(t,e){var i=t.node;i.classList.remove(e),i.style.width=null,i.style.position=null,i.style.top=null,t.isSticky=!1},o=function(t,e){var o=window.pageYOffset;t.forEach(function(t){var s=t.initialOffsetTop-t.offset,r=o>=s;r?t.isSticky||i(t,e.className):t.isSticky&&n(t,e.className)})};e.default=o}]);
//# sourceMappingURL=icky.js.map