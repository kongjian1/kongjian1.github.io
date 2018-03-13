;/*!mobile:static/mobile/js/third_party/mod.js*/
var require,define;!function(e){function r(e,r){function t(){clearTimeout(a)}if(!(e in u)){u[e]=!0;var i=document.createElement("script");if(r){var a=setTimeout(r,require.timeout);i.onerror=function(){clearTimeout(a),r()},"onload"in i?i.onload=t:i.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&t()}}return i.type="text/javascript",i.src=e,n.appendChild(i),i}}function t(e,t,n){var a=i[e]||(i[e]=[]);a.push(t);var o,u=s[e]||s[e+".js"]||{},l=u.pkg;o=l?c[l].url:u.url||e,r(o,n&&function(){n(e)})}if(!require){var n=document.getElementsByTagName("head")[0],i={},a={},o={},u={},s={},c={};define=function(e,r){e=e.replace(/\.js$/i,""),a[e]=r;var t=i[e];if(t){for(var n=0,o=t.length;o>n;n++)t[n]();delete i[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=o[e];if(r)return r.exports;var t=a[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=o[e]={exports:{}};var n="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return n&&(r.exports=n),r.exports},require.async=function(r,n,i){function o(e){for(var r=0,n=e.length;n>r;r++){var f=require.alias(e[r]);if(f in a){var p=s[f]||s[f+".js"];p&&"deps"in p&&o(p.deps)}else if(!(f in c)){c[f]=!0,l++,t(f,u,i);var p=s[f]||s[f+".js"];p&&"deps"in p&&o(p.deps)}}}function u(){if(0==l--){for(var t=[],i=0,a=r.length;a>i;i++)t[i]=require(r[i]);n&&n.apply(e,t)}}"string"==typeof r&&(r=[r]);var c={},l=0;o(r),u()},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(s[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(c[r]=t[r])},require.loadJs=function(e){r(e)},require.loadCss=function(e){if(e.content){var r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=e.content:r.innerHTML=e.content,n.appendChild(r)}else if(e.url){var t=document.createElement("link");t.href=e.url,t.rel="stylesheet",t.type="text/css",n.appendChild(t)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3}}(this);
;/*!mobile:static/mobile/js/third_party/zepto.min.js*/
/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
;/*!mobile:static/mobile/js/widget/m-utils.js*/
define("mobile:static/mobile/js/widget/m-utils",function(o,n,i){i.exports=function(){function o(){var o=navigator.userAgent,n={isMobile:!!o.match(/mobile/i),isIphone:o.match(/(iPhone\sOS)\s([\d_]+)/),isIOS:o.match(/iphone|ipod|ipad/i),isAndroid:o.match(/android/i),isUC:o.match(/UCBrowser/gi),isQQBrowser:o.match(/MQQBrowser/gi),isBDBox:o.match(/baiduboxapp/gi),isWeixin:o.match(/micromessenger/gi),isMap:o.match(/BaiduRuntimeO2OZone/i),isSafari:o.match(/Safari/i)},i=function(){if(n.isBDBox){var o=navigator.userAgent.match(/baiduboxapp\/([\d.-_]*)/i),i=o&&o[1];if(i&&(o=i.match(/[0-9]\.[^_]*/),i=o&&o[0])){var e=i.split(".");return n.isIphone&&(e=e.reverse()),{mainVersion:parseInt(e[0],10),subVersion:parseInt(e[1],10),version:i}}}};return{uaInfo:n,getBDBoxVersion:i}}function n(o){var n=new RegExp("(^|&)"+o+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(n);return null!==i?i[2]:null}function i(o,n){var i=new RegExp("(^|&)"+o+"=([^&]*)(&|$)","i"),e=n.match(i);return null!==e?e[2]:null}function e(o,n,i){var e=o;return/\?/g.test(e)?/name=[-\w]{4,25}/g.test(e)?e=e.replace(/name=[-\w]{4,25}/g,n+"="+i):e+="&"+n+"="+i:e+="?"+n+"="+i,e.split("#")[1]?e+"#"+window.location.href.split("#")[1]:e}function a(){var o=navigator.userAgent||"",n=o.match(/iphone|ipod|ipad/i),i=o.match(/android/i);if(n){var e=/baiduboxapp\/.*\/(\w+)\/\d/,o=navigator.userAgent,a=o.match(e);return a?a[1]:""}try{if(i&&Box.version_compare(Box.version,"6.5")>=0)return Box.android.invokeApp("Bdbox_android_utils","getcuid").result;var t=document.cookie.match(/BAIDUCUID=(.+?);/);return t?t[1]:""}catch(r){}}function t(o,n,i){var e=navigator.userAgent,a=/ baiduboxapp\//i.test(e);if(o&&a){var t=[];for(var r in n)t.push(r+"="+n[r]);i&&t.push("func="+i),t="baiduboxapp://"+o+"?"+t.join("&");var s=document.createElement("Iframe");s.style.display="none",s.src=t;var l=document.body||document.getElementsByTagName("body")[0];l.appendChild(s),setTimeout(function(){l.removeChild(s),s=null},0)}}function r(o,n,i){function e(o,n,i){var e={obj:o,func:n,args:i?i:[]};try{return window.prompt("BdboxApp:"+JSON.stringify(e))}catch(a){}}var a=navigator.userAgent,t=/ baiduboxapp\//i.test(a);if(t){var r=Array.isArray||function(o){return o instanceof Array};if(i&&!r(i)&&(i=Array.prototype.slice.call(arguments,0).slice(2)),window[o]&&window[o][n]){var s=window[o][n].apply(window[o],i);return{error:0,result:s,__from:"js"}}var l=e(o,n,i);return l=l?JSON.parse(l):{},l.__from="app",l}}function s(){window.followNativeCallBack={};var i=o(),e=i.uaInfo,a=function(){if(window.loginCheckCallBack=function(o){o||(window.MP.globalConf.isLogin=1,$("#report-user").val(1))},e.isIphone){var o={tpl:"lightwebapp",func:"window.loginCheckCallBack",third_login:"1",login_type:""};try{t("account",{action:"logindialog",params:JSON.stringify(o),minver:"5.5.0.0"},"")}catch(n){}}else if(e.isAndroid){var o={tpl:"lightwebapp",third_login:"1",login_type:""};r("Bdbox_android_account","loginDialog",[JSON.stringify(o),"window.loginCheckCallBack"])}},s=function(o){var n=i.getBDBoxVersion(),r=n.mainVersion>=8,s=!window.MP.globalConf.isLogin&&!r;if(!s||e.isAndroid){window.followNativeCallBack.addBack=function(n){if("0"===n.status||0===n.status)window.MP.globalConf.isLogin=1,$("#report-user").val(1),o.callback(o);else{o.failcallback(o);try{t("utils",{action:"toast",string:"关注失败,请重新操作",minver:"6.0.0.0"},"")}catch(i){}}};var l={baiduId:"media_"+o.id,type:"add",source:o.source||"baidumedia"};BoxJS.follow(l,window.followNativeCallBack.addBack)}else try{a()}catch(d){}},l=function(o){if(window.MP.globalConf.isLogin||e.isAndroid){window.followNativeCallBack.cancelBack=function(n){"0"===n.status||0===n.status?(window.MP.globalConf.isLogin=1,$("#report-user").val(1),o.callback(o)):o.failcallback(o)};var n={baiduId:"media_"+o.id,type:"cancel",source:o.source||"baidumedia"};BoxJS.follow(n,window.followNativeCallBack.cancelBack)}else a()},d=function(){var o=i.getBDBoxVersion();if(o){var e=!!(o.mainVersion>=7&&o.subVersion>=4)||o.mainVersion>=8;if(e)if(i.uaInfo.isIphone)$(".operation").data("appid")&&($(".operation").removeClass("operation-single"),$(".operation").append('<div class="normal follow haftpxbox trblBor">关注</div>')),$(".follow").show();else if(i.uaInfo.isAndroid)try{Bdbox_android_feed&&Bdbox_android_feed.follow&&$(".operation").data("appid")&&($(".operation").removeClass("operation-single"),$(".operation").append('<div class="normal follow haftpxbox trblBor">关注</div>')),Bdbox_android_feed&&Bdbox_android_feed.follow&&$(".follow").show()}catch(a){}}else{var t=n("wfr")||"";"newsapp"!==t&&$(".follow").show()}};return{add:s,cancel:l,followShow:d}}function l(o){var o=parseInt(o,10),n="";return o>=1e4?n=Math.floor(o/1e3)/10+"万":o}function d(o){var o=o||location.href,i=o.split("?"),e=i[0];return e.match("feed/news")?i[0]:i[0]+"?id="+n("id")}function c(o){var n={titleName:o.titleName||"",content:o.content||o.titleName||"",image:o.image||""};window.BoxShareData={options:{type:"url",mediaType:"all",title:n.titleName+"-百家号",content:n.content,linkUrl:location.href,source:"baidumedia",iconUrl:n.image},successcallback:"console.log",errorcallback:"console.log"}}function u(o){var n=o.src,o={width:o.width||640,quality:o.quality||80,nocompress:o.nocompress||0},i=n?n.match("timg"):!1;if(i){n=n.replace(/quality=\d*/g,"quality="+o.quality);var e=n.match(/size=b\d*/),e=e?parseInt(e[0].split("b")[1],10):100;(e>o.width||o.nocompress)&&(n=n.replace(/size=[-\w]{4,25}/g,"size=b"+o.width+"_10000")),e=n.match(/size=w\d*/),e=e?parseInt(e[0].split("w")[1],10):100,(e>o.width||o.nocompress)&&(n=n.replace(/size=[-\w]{4,25}/g,"size=b"+o.width+"_10000"))}return n}function m(o,n){for(var i,e=/<%([^%>]+)?%>/g,a=/(^( )?(if|for|else|switch|case|break|var|{|}))(.*)?/g,t="var r=[];\n",r=0,s=function(o,n){return t+=n?o.match(a)?o+"\n":"r.push("+o+");\n":""!==o?'r.push("'+o.replace(/"/g,'\\"')+'");\n':"",s};i=e.exec(o);)s(o.slice(r,i.index))(i[1],!0),r=i.index+i[0].length;return s(o.substr(r,o.length-r)),t+='return r.join("");',new Function(t.replace(/[\r\t\n]/g,"")).apply(n)}function f(o){o.url_rewriter_fn=o.url_rewriter_fn||function(o){return o};var n=o.class.replace(".",""),i=window.innerHeight,e=o.threshold||10;e=i+e;var a=function(){var i=$(o.class),a=$(window).scrollTop();$.each(i,function(i,t){var r=$(t),s=r.data("original");s=o.url_rewriter_fn(s);var l=r.attr("src");if(s===l)r.removeClass(n);else if(s){var d=r.offset().top;if(a>d-e){var c=new Image;c.src=s,c.onload=function(){r.attr("src",s),c=null},c.error=function(){r.attr("src",s),c=null}}}})};a(),$(document).on("scroll",function(){a()})}function p(o){return"bjh_video.html"===o||"bjh_news.html"===o}function w(n){var i=o();if(i.uaInfo.isBDBox){var e=i.getBDBoxVersion(),a=e.mainVersion+"."+e.subVersion;a/=1}else var a=0;var n=n;if(i.uaInfo.isIphone){var t="baiduboxapp://common?action=easybrowse&params=",r={opentype:"1",rbtnstyle:"2",newbrowser:"1",type:"Hybrid",tpl_id:n.html,context:{nid:n.id,url_data:n.urlData,content_sign:"huangzongzhe"}};a>=7.7&&(p(n.html)?(r.toolbaricons=JSON.stringify({toolids:["1","2","3"]}),r.menumode="2"):(r.toolbaricons=JSON.stringify({toolids:[]}),r.menumode="1")),r=JSON.stringify(r),r=encodeURIComponent(r),t+=r+"&minver=7.2.5.0"}else if(i.uaInfo.isAndroid){var r={nid:n.id,url_data:n.urlData};r=JSON.stringify(r),r=encodeURIComponent(r);var s="intent:#Intent;component=com.baidu.searchbox\\/.home.feed.FeedDetailActivity;S.sfrom=feed;S.context=";s+=r+";S.tpl_id="+n.html,a>=7.7&&(p(n.html)?(s+=";S.toolbaricons="+encodeURIComponent(JSON.stringify({toolids:["1","2","3"]})),s+=";S.menumode=2"):(s+=";S.toolbaricons="+encodeURIComponent(JSON.stringify({toolids:["1","2","3","4"]})),s+=";S.menumode=1")),s+=";end";var t="{'mode': '0','intent': '"+s+"', 'min_v': '16789248'}"}return t}function v(n){var i=o();if(i.uaInfo.isBDBox){var e=i.getBDBoxVersion(),a=e.mainVersion+"."+e.subVersion;a/=1}else var a=0;var n=n,i=o();if(i.uaInfo.isIphone){var t="baiduboxapp://easybrowse?";t+="openurl="+encodeURIComponent(n.url)+"&opentype=1&isla=0&type=video&page_type=empty&newbrowser=1&sfrom=feed&minver=6.0.0.0",a>=7.7&&(t+="&toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D&menumode=2")}else if(i.uaInfo.isAndroid){var r="intent:#Intent;component=com.baidu.searchbox/.home.feed.ShortVideoDetailActivity;S.bdsb_light_start_url="+encodeURIComponent(n.url)+";";a>=7.7&&(r+="S.toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D;S.menumode=2;"),r+="B.bdsb_append_param=true;end";var t="{'mode': '0','intent': '"+r+"', 'min_v': '16789248'}"}return t}function g(n){var i=o(),e=i.getBDBoxVersion(),a=e.mainVersion+"."+e.subVersion;return a/=1,i.uaInfo.isBDBox&&a>=7.7&&(n.inputBox=!1,n.cmtCb=function(o){if("1"==o.hasComment){var n={toolids:[{id:1,eventName:"comment",data:{num:o.total_count}}]};window.BoxJS.isAndroid?r("Bdbox_android_utils","setToolBarIcons",[JSON.stringify(n)]):t("utils",{action:"setToolBarIcons",params:JSON.stringify(n),minver:"7.7"},"");var i=o.createUrl||o.url;window.BoxJS.on("comment",function(){window.BoxJS.isAndroid?window.BoxJS.o2o(i,{component:"com.baidu.searchbox/.home.feed.FeedCommentActivity",min_v:"16789504"}):window.BoxJS.o2o(i,{newbrowser:"1",sfrom:"feed",toolbaricons:JSON.stringify({toolids:["4"]})})})}}),n}return{getEnvInfo:o,getParam:n,getParamFromString:i,addUrlPara:e,getCuid:a,iosInvokeApp:t,androidInvokeApp:r,followNative:s,numFormat:l,getBaseUrl:d,boxShare:c,timgSrcDeal:u,templateEngine:m,imgLazyload:f,initCmd:w,videoCmd:v,setComment:g}}()});
;/*!mobile:static/mobile/js/core/statistics.js*/
!function(e,t){function o(e){return(e||new Date)-l.staLog.startTime}function n(e,t,o){if(e)try{e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)}catch(n){}}function i(t){l.staLog.ie&&new Date-l.staLog.clickJsLinkTime<50||l.staLog.closing||(l.staLog.closing=!0,l.staLog.on(e,"unload",function(){for(var e=0;e<t.length;e++)t[e].last=l.staLog.timestamp(),t[e].last/=1e3,l.staLog.buildImg(t[e])}))}function a(e){var t=new Image,o=e.imgSrc;e.imgSrc||(o="http://ttl.baidu.com/static/monitor/log-picker/st.gif"),o+="?",t.onload=t.onerror=function(){t=null};for(var n in e)e.hasOwnProperty(n)&&"imgSrc"!==n&&(o+=n+"="+e[n]+"&");o=o.substring(0,o.length-1),t.src=o+"&cache_t="+ +new Date}function c(e,o){var n={one:!1,two:!1,three:!1,four:!1,five:!1,six:!1,seven:!1,eight:!1,nine:!1,full:!1},i=e.offsetTop,a=e.offsetHeight;o.complete=o.complete?o.complete:.1,l.staLog.on(window,"scroll",function(){var e=window.screen.availHeight+t.body.scrollTop,c=e-i,s=c/a;s>=.1&&.2>s?(n.one||o.complete<=.1&&(o.complete=.1),n.one=!0):s>=.2&&.3>s?(n.two||o.complete<=.2&&(o.complete=.2,l.staLog.buildImg(o)),n.two=!0):s>=.3&&.4>s?(n.three||o.complete<=.3&&(o.complete=.3),n.three=!0):s>=.4&&.5>s?(n.four||o.complete<=.4&&(o.complete=.4,l.staLog.buildImg(o)),n.four=!0):s>=.5&&.6>s?(n.five||o.complete<=.5&&(o.complete=.5),n.five=!0):s>=.6&&.7>s?(n.six||o.complete<=.6&&(o.complete=.6,l.staLog.buildImg(o)),n.six=!0):s>=.7&&.8>s?(n.seven||o.complete<=.7&&(o.complete=.7),n.seven=!0):s>=.8&&.9>s?(n.eight||o.complete<=.8&&(o.complete=.8,l.staLog.buildImg(o)),n.eight=!0):s>=.9&&1>s?(n.nine||o.complete<=.9&&(o.complete=.9),n.nine=!0):s>=1&&(n.full||(o.complete="1.0",l.staLog.buildImg(o)),n.full=!0)})}e.MP=e.MP||{};var l=e.MP;l.staLog||(l.staLog={on:n,unloadHandler:i,timestamp:o,buildImg:a,readPercent:c,startTime:+new Date,ie:e.attachEvent&&!e.opera,clickJsLinkTime:"",bodyHeight:0,finHeight:0,sid:(+new Date).toString(36)+Math.random().toString(36).substr(2,3),closing:!1},l.staLog.ie&&l.staLog.on(t,"mouseup",function(e){var t=e.target||e.srcElement;1===t.nodeType&&/^ajavascript:/i.test(t.tagName+t.href)&&(l.staLog.clickJsLinkTime=new Date)}))}(window,document);
;/*!mobile:static/mobile/js/widget/m-bottombar.js*/
define("mobile:static/mobile/js/widget/m-bottombar",function(o,n,t){var i=function(o,n){n+="",o+="";for(var t=o.split("."),i=n.split("."),e=0,r=Math.max(t.length,i.length);r>e;e++){if(t[e]&&!i[e]&&parseInt(t[e])>0||parseInt(t[e])>parseInt(i[e]))return 1;if(i[e]&&!t[e]&&parseInt(i[e])>0||parseInt(t[e])<parseInt(i[e]))return-1}return 0},e=function(){var o=0;if(window.baiduboxapp_version)o=window.baiduboxapp_version;else{var n,t=navigator.userAgent;(n=/([\d+.]+)_(?:diordna|enohpi)_/.exec(t))?(n=n[1].split("."),o=n.reverse().join(".")):(n=/baiduboxapp\/([\d+.]+)/.exec(t))&&(o=n[1])}return e=function(){return o},o},r=!1;i(e(),"7.7")>=0&&(r=!0),t.exports={setComment:function(o){return r&&(o.inputBox=!1,o.cmtCb=function(o){if("1"==o.hasComment){var n={toolids:[{id:1,eventName:"comment",data:{num:o.total_count}}]};BoxJS.isAndroid?mUtils.androidInvokeApp("Bdbox_android_utils","setToolBarIcons",[JSON.stringify(n)]):mUtils.iosInvokeApp("utils",{action:"setToolBarIcons",params:JSON.stringify(n),minver:"7.7"},"");var t=o.createUrl||o.url;window.commentUrl||BoxJS.ready(function(){BoxJS.on("comment",function(){BoxJS.isAndroid?BoxJS.o2o(window.commentUrl,{component:"com.baidu.searchbox/.home.feed.FeedCommentActivity",min_v:"16789504"}):BoxJS.o2o(window.commentUrl,{newbrowser:"1",sfrom:"feed",toolbaricons:JSON.stringify({toolids:["4"]})})})}),window.commentUrl=t}}),o},setFavor:function(o){r&&(BoxJS.isAndroid?mUtils.androidInvokeApp("Bdbox_android_utils","updateCollectionStatus",[JSON.stringify(o)]):BoxJS.isIOS)}}});
;/*!mobile:static/mobile/js/widget/m-report.js*/
define("mobile:static/mobile/js/widget/m-report",function(i,o,t){var n=i("mobile:static/mobile/js/widget/m-utils"),r=n.getEnvInfo().uaInfo;t.exports={init:function(){var i=$("#report-text"),o=$("#report-user");r.isBDBox&&(window.reportJump=function(i){if(!i){var o=n.initCmd({id:$("#report-article-id").val(),html:"bjh_report.html"});window.BoxJS.command(o)}},i.click(function(){if(!i.hasClass("report-gray"))if(o.val()){var t=n.initCmd({id:$("#report-article-id").val(),html:"bjh_report.html"});window.BoxJS.command(t)}else if(r.isIphone){var e={tpl:"bdbox_novel",login_type:"username",func:"window.reportJump"};e=JSON.stringify(e),n.iosInvokeApp("account",{action:"logindialog",params:e,minver:"5.5.0.0"},"window.reportJump")}else if(r.isAndroid){var a={login_type:"username",tpl:"bdbox_novel"};a=JSON.stringify(a),n.androidInvokeApp("Bdbox_android_account","loginDialog",[a,"window.reportJump"])}}))}}});
;/*!mobile:static/mobile/js/page/m-content.js*/
define('mobile:static/mobile/js/page/m-content', function(require, exports, module) {

  /**
   * @file m-content.js
   * author huangzongzhe
   * 2016.4
   */
  /* globals Zepto */
  /* globals Box */
  /* globals BoxJS */
  /* globals follow */
  /* globals mUtils */
  /* globals alog */
  /* globals MP */
  /* globals videojs */
  /* globals APlayer */
  /* eslint-disable fecs-camelcase */
  window.mUtils = require('mobile:static/mobile/js/widget/m-utils');
  var bottomBar = require('mobile:static/mobile/js/widget/m-bottombar');
  var envInfo = mUtils.getEnvInfo();
  var isBox = $('.mth-config').data('isbox');
  
  // var lazyLoad = (function () {} 原来的lazyload,现在内联到html了。
  
  function imgLazyload() {
      // 通用懒加载
      var timgWidth = 172;
      var timgQuality = 80;
      if (!envInfo.uaInfo.isMobile) {
          timgWidth = 240;
          timgQuality = 80;
      }
      /* eslint-disable */
      var mUtilsLazyOpt = {
          class: '.lazyload-imgs',
          threshold: 736,
          url_rewriter_fn: function (imgSrc) {
              return mUtils.timgSrcDeal({
                  src: imgSrc.replace(/^\/\//, 'http://'),
                  width: timgWidth,
                  quality: timgQuality
              });
          }
      };
      /* eslint-enable */
      mUtils.imgLazyload(mUtilsLazyOpt);
  }
  function comment() {
      if (!envInfo.uaInfo.isMobile) {
          return;
      }
      var me = this;
      var titleName = $('.mth-header').html() + '-百家号';
      // 分享参数
      var shareOption = {
          mediaType: 'all',
          title: titleName,
          content: $('#mth-digest').text() || titleName,
          type: 'url',
          source: 'baidumedia',
          linkUrl: location.href,
          iconUrl: $('.mth-editor-content').data('coverimage').replace(/^\/\//, 'http://') || ''
      };
      // 评论参数
      var options = {
          container: 'commentWrap',
          source: 'baidumedia',
          id: $('.mth-header').data('id'),
          defaultCss: true,
          desc: titleName,
          listTitle: '热门评论',
          inputBox: true,
          listNum: 3,
          shareConfig: shareOption,
          sfrom: 'feedLandingComment',
          logCb: function (eventName) {
              // 评论点击量
              window.pblog('event', [eventName, 'click']);
          },
          backHome: true // 这个只是渲染了一个样式，open方法还是需要自己声明的
      };
  
      // 百度新闻中不展示评论
      var wfr = mUtils.getParam('wfr') || '';
      if (wfr !== 'newsapp') {
          // var commentSDK = new window.CommentEmbed(bottomBar.setComment(options));
      }
  }
  // 对视频的预处理
  // 注意向上兼容
  function videoRender() {
      var qqVideo = function () {
          var $videoIframe = $('.mth-editor-content iframe:not(.edui-faked-goods)');
          var contentWidth = $('.mth-editor-content').width(); // 容器宽度
          var urlPretreat = function (url) {
              var urlTemp = url;
              if (urlTemp.match('v.qq.com/iframe/preview.html')) {
                  urlTemp = urlTemp.replace('v.qq.com/iframe/preview.html', 'v.qq.com/iframe/player.html');
              }
              var nowWidth = mUtils.getParamFromString('width', urlTemp);
              var nowHeight = mUtils.getParamFromString('height', urlTemp);
              // var needWidth = contentWidth;
              var needHeight = Math.floor(nowHeight / nowWidth * contentWidth);
              urlTemp = urlTemp.replace(/&width=\d*(\.\d*)*|&height=\d*(\.\d*)*/g, '');
              urlTemp = mUtils.addUrlPara(urlTemp, 'width', contentWidth);
              urlTemp = mUtils.addUrlPara(urlTemp, 'height', needHeight);
              // console.log(url);
              // console.log(urlTemp);
              // console.log('>>>>>>>>');
              return {
                  urlTemp: urlTemp,
                  needHeight: needHeight,
                  needWidth: contentWidth
              };
          };
          var videoOptions = {};
          var videoSrc = '';
          for (var i = 0, j = $videoIframe.length; i < j; i++) {
              videoSrc = $($videoIframe[i]).attr('src');
              videoOptions = videoSrc ? urlPretreat(videoSrc) : urlPretreat($($videoIframe[i]).data('src'));
              $($videoIframe[i]).css({
                  'width': videoOptions.needWidth,
                  'height': videoOptions.needHeight
              });
              $($videoIframe[i]).attr('src', videoOptions.urlTemp);
          }
      };
      qqVideo();
      // 使用videojs初始化视频播放框;zhoutingshuai@2017-11-17 19:05:14
      if (document.getElementsByTagName('video').length > 0) {
          var _video = document.getElementsByTagName('video')[0];
          videojs(_video, {
              controlBar: {
                  children: [
                      'playToggle',
                      'volumeMenuButton',
                      'durationDisplay',
                      'timeDivider',
                      'currentTimeDisplay',
                      'progressControl',
                      'remainingTimeDisplay'
                  ]
              }
          }).on('ended', function () {
              _video.load();
          });
      }
  }
  
  function audioRender() {
      // 初始化播放器
      var audios = document.getElementsByClassName('aplayer');
      for (var idx = 0; idx < audios.length; idx++) {
          try {
              var params = JSON.parse(audios[idx].getAttribute('data-bjh-params'));
              var newParams = {
                  'title': params['songname'],
                  'author': params['artistname'],
                  'url': params['file_link'],
                  'pic': params['albumpic'] || params['artistpic']
              };
              var ap = new APlayer({
                  element: audios[idx],
                  narrow: false,
                  autoplay: false,
                  showlrc: false,
                  mutex: true,
                  preload: 'none',
                  theme: 'rgb(69, 126, 255)',
                  mode: 'order',
                  music: newParams
              });
          } catch (e) {
              console.warn('初始化音乐播放器失败');
          }
      }
      // 当二次点击时候，需要获
      $('[data-bjh-box=audio] .aplayer-button').click(function () {
          var button = this;
          var $box = $(button).parents('.aplayer');
          if (!$box.data('url')) {
              event.preventDefault && event.preventDefault();
              // event.stopPropagation();
              $.getJSON('/builder/author/enrich/musicdetail', {
                  'song_id': $box.attr('data-bjh-id')
              }, function (res) {
                  if (+res.errno === 0 && res.data && res.data['song_id']) {
                      $box.data('url', res.data['file_link']);
                      var data = res.data;
                      var ap = new APlayer({
                          element: $box[0],
                          narrow: false,
                          autoplay: false,
                          showlrc: false,
                          mutex: true,
                          theme: 'rgb(69, 126, 255)',
                          mode: 'order',
                          preload: 'none',
                          music: {
                              'title': data['title'],
                              'author': data['author'],
                              'url': data['file_link'],
                              'pic': data['album_500_500'] || data['artist_500_500']
                          }
                      });
                      ap.play();
                  }
                  else {
                      // resModal.open({
                      //     text: '获取音乐详情失败'
                      // });
                  }
              });
          }
      });
  }
  
  // 依赖boxjs http://agroup.baidu.com/box/md/article/71688
  function boxShare() {
      var mediaType = 'all_in_content';
      var shareUrl = mUtils.addUrlPara(location.href, 'mthfr', mediaType || 'other');
      var title = $('.mth-header').html() + '-百家号' || '百家号~';
      var content = $('#mth-digest').text() || title;
      BoxJS.ui('share', function (share) {
          share('boxShare', {
              type: 'url',
              title: title,
              content: content,
              linkUrl: shareUrl,
              source: 'baidumedia',
              iconUrl: $('.mth-editor-content').data('coverimage').replace(/^\/\//, 'http://') || ''
          });
      });
  }
  // 永青那边的统计
  function pblogInit() {
      // 统计初始化
      window.pblog('init', ['5']);
      // pv统计
      window.pblog('pv', [location.href]);
  
      // 统计项
      // 1·作者点击量 news_author
  
      // 1·全部评论点击量 统计方设置（永青/于鹏）
      // 2·关注按钮点击量 统计方设置（永青/于鹏）
      // 3·更多文章点击量 news_more_news
  
      // 1·猜你喜欢整体点击量 news_interest
      // 2·热门文章整体点击量 news_hot_article
  
      // 1·热门作者总点击量 news_hot_author
      // 2·热门作者关注总点击量 news_hot_author_follow
      $(document).on('click', '.mth-pblog', function (event) {
          window.pblog('event', [$(this).data('bdlog'), 'click']);
      });
  }
  
  // 百家号自己的统计
  function imgLogInit() {
      var baseLogOpt = {
          pid: $('#pid-text').val(),
          is_sub: 1,
          app_id: $('.mth-header').data('appid'),
          sid: (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
          article_id: $('.mth-header').data('id'),
          fr: mUtils.getParam('mthfr')
      };
  
      var pageviewLogOpt = $.extend(true, {event: 'pageview'}, baseLogOpt);
      window.MP.staLog.buildImg(pageviewLogOpt);
  
      var readLogOpt = $.extend(true, {event: 'read'}, baseLogOpt);
      // var timeLogOpt = $.extend(true, {event: 'time'}, baseLogOpt);
      var dom = $('.mth-editor-content')[0];
      window.MP.staLog.readPercent(dom, readLogOpt);
  
      // 离开页面时打点
      // window.MP.staLog.unloadHandler([readLogOpt]);
  
      var shareLog = function (way) {
          var shareOpt = $.extend(true, {event: 'share', share_to: way}, baseLogOpt);
          window.MP.staLog.buildImg(shareOpt);
      };
      var adverShow = function (data) {
          var adverOpt = $.extend(true, {event: 'advertshow', advert_id: data || 0}, baseLogOpt);
          window.MP.staLog.buildImg(adverOpt);
      };
      var adverClickLog = function (data) {
          var adverOpt = $.extend(true, {event: 'advertclick', advert_id: data || 0}, baseLogOpt);
          window.MP.staLog.buildImg(adverOpt);
      };
  
      // 时长打点
      /* var timeCountOpt = $.extend(true, {event: 'time'}, baseLogOpt);
      var contentInterval = setInterval(function () {
          timeCountOpt.last = window.MP.staLog.timestamp();
          timeCountOpt.last /= 1000;
          window.MP.staLog.buildImg(timeCountOpt);
      }, 10000); */
  
      return {
          shareLog: shareLog,
          adverShow: adverShow,
          adverClickLog: adverClickLog
      };
  }
  // 分享统计
  function logInit() {
      pblogInit();
      var imgLog = imgLogInit();
      // boxjs的分享面板
      if (isBox) {
          boxShare();
          $('.weixin-friend').click(function () {
              imgLog.shareLog('weixin');
              window.pblog('event', ['news_weixin', 'click']);
              // shareNative('weixin_friend');
          });
          $('.weixin-timeline').click(function () {
              imgLog.shareLog('moments');
              window.pblog('event', ['news_moments', 'click']);
              // shareNative('weixin_timeline');
          });
          $('.sinaweibo').click(function () {
              imgLog.shareLog('weibo');
              window.pblog('event', ['news_weibo', 'click']);
              // shareNative('sinaweibo');
          });
      }
  }
  /*
   * 为了联盟！！！
   * 首屏渲染正文，分享等内容采用异步的方式加载。
   */
  function forSpeed(data) {
      // 当传入数据的时候，不调用ajax, 直接渲染数据
      var readyData = data || '';
      /*
       * 基本原则，当dom加载完后执行这些操作
       * 阅读到距离底部325px时，加载正文后面的内容
       */
      var contentDom = $('.mth-editor-content')[0];
      var contentHeight = 0; // 因为有不属于懒加载的图片会导致高度不一致。
      var contentOffsetTop = contentDom.offsetTop;
      var nowHeight = 0; // 可视区域高度 + 当前可视区域顶端 距离 html顶端距离 - 文章距离顶部高度
      var distance = 0; // 距离底部高度
      var isLoading = 0;
      var isBaiChuanAdverReady = 0;
      var isCommentRender = 0;
  
      /*
       * 我们有两个广告位，第一个使用百川或者自营（自营优先），第二个使用百川的广告。
       */
      var renderAuthor = function (data) {
          var template = $('#script-author').html();
          var options = {
              'author': data
          };
          var template = mUtils.templateEngine(template, options);
  
          $('#author-con').html(template);
  
          // follow-author follow-header
          // 保证下拉后两者关注状态在页面显示上一致。比如在拉了接口之后，点击了关注。
          var followText = $('.follow-header').text();
          var followStatus = $('.follow-header').hasClass('followed');
          $('.follow-author').text(followText)[followStatus ? 'addClass' : 'removeClass']('followed');
      };
      var renderAdver = function (data) {
          var imgLog = imgLogInit();
  
          var template = $('#script-advertisement01').html();
          var options = {
              'advert': data
          };
          var template = mUtils.templateEngine(template, options);
  
          $('#advertisement01-con').html(template);
          var advert_id = $('#mthadver-a').data('advertid');
          imgLog.adverShow(advert_id);
          $(document).on('click', '#mthadver-a', function (event) {
              // event.preventDefault();
              imgLog.adverClickLog(advert_id);
          });
          // if (!isBaiChuanAdverReady && isBox) {
          //     try {
          //         BoxJS.ready(function () {
          //             // alert('adver' + $('.mth-header').data('id') + ' || ' +$('.mth-header').data('appid') );
          //             window.BoxJS.ui('banner', function (banner) {
          //                 banner({
          //                     extra: {
          //                         page_id: $('.mth-header').data('id'),
          //                         author_id: $('.mth-header').data('appid')
          //                     }
          //                 });
          //             });
          //             isBaiChuanAdverReady = 1;
          //             // alert('id: ' + $('.mth-header').data('id') + ' ' + 'appid: ' + $('.mth-header').data('appid'));
          //         });
          //     } catch (e) {
          //         console.log('百川广告渲染失败');
          //         // alert(e);
          //     }
          // }
      };
      var renderRecent = function (data) {
          var template = $('#script-recent').html();
          var options = {
              'recent': data.recent.items,
              'count': data.recent.count,
              'app': data.app,
              'isBox': isBox
          };
          var template = mUtils.templateEngine(template, options);
  
          $('#recent-con').html(template);
      };
      var renderInterest = function (data) {
          var template = $('#script-interest').html();
          var options = {
              'interest': data
          };
          var template = mUtils.templateEngine(template, options);
  
          $('#interest-con').html(template);
  
          // 插入广告
          // $('#interest-con .c-news-text').before('<div style="" id="wangmeng" class="wangmeng"></div>');
          $('#mth-interest').after('<div style="" id="wangmeng" class="wangmeng"></div>');
          advertInit(function () {
              try {
                  var node = document.getElementById('mth-interest');
                  node.className += ' c-news-text-no-hide-bottom';
              } catch (e) {
                  console.log('set relate class error');
              }
          });
      };
      var hotNewsRender = function (data) {
          var template = $('#script-hotNews').html();
          var options = {
              'hotNews': data
          };
          var template = mUtils.templateEngine(template, options);
          $('#hotNews-con').html(template);
      };
      var hotAuthorRender = function (data) {
          var template = $('#script-hotAuthor').html();
          var options = {
              'hotAuthor': data
          };
          var template = mUtils.templateEngine(template, options);
          $('#hotAuthor-con').html(template);
      };
      var loadData = function () {
          $('.loading').show();
          var cuid = isBox && mUtils.getCuid();
          var cuidPara = !!cuid ? ('&cuid=' + cuid) : '';
  
          // var locationHref = mUtils.getBaseUrl(location.href);
          // var url = mUtils.addUrlPara(locationHref, 'api', 1);
          // url = url + cuidPara + '&mod=hot,hot_app,recent,interest,self_advert';
          var url = '/s?id=' + $('.mth-header').data('id') + '&api=1' + cuidPara
              + '&mod=hot,hot_app,recent,interest,self_advert';
  
          var successRenders = function (data) {
              var tplData  = readyData.tplData || data;
              // 作者
              try {
                  console.log('renderAuthor');
                  renderAuthor(tplData.app);
              } catch (e) {
                  console.log(e);
              }
              // 广告
              try {
                  console.log('renderAdver');
                  if (isBox) {
                      renderAdver(tplData.self_advert);
                  }
              } catch (e) {
                  console.log(e);
              }
              // 近期文章容器存在，并且有相关数据
              try {
                  console.log('renderRecent');
                  if (tplData.recent && tplData.recent.count) {
                      renderRecent(tplData);
                      // alert42();
                  }
              } catch (e) {
                  console.log(e);
              }
              // 猜你喜欢
              try {
                  console.log('renderInterest');
                  if (isBox && tplData.interest && tplData.interest.length) {
                      renderInterest(tplData.interest);
                  } else {
                      // 网盟广告
                      $('#interest-con').append('<div style="" id="wangmeng"  class="wangmeng"></div>');
                      advertInit(function () {
                          /*try {
                              var node = document.getElementsByClassName('wangmeng')[0];
                              node.className += ' mth-cards haftpxbox trblBor';
                          } catch (e) {
                              console.log('set wangmeng relate class error');
                          }*/
                      });
                  }
              } catch (e) {
                  $('#interest-con').append('<div style="" id="wangmeng"  class="wangmeng"></div>');
                  advertInit(function () {
                      /*try {
                          var node = document.getElementsByClassName('wangmeng')[0];
                          node.className += ' mth-cards haftpxbox trblBor';
                      } catch (e) {
                          console.log('set wangmeng relate class error');
                      }*/
                  });
                  console.log(e);
              }
              // 热门文章
              try {
                  console.log('hotNewsRender');
                  if (tplData.hot && tplData.hot.length) {
                      hotNewsRender(tplData.hot);
                  }
              } catch (e) {
                  console.log(e);
              }
              // 热门作者
              try {
                  console.log('hotAuthorRender');
                  if (tplData.hot_app && tplData.hot_app.length) {
                      hotAuthorRender(tplData.hot_app);
                  }
              } catch (e) {
                  console.log(e);
              }
          };
          if (readyData) {
              successRenders();
              isLoading = 1;
  
              $('.loading').hide();
              follow.followShow();
          } else {
              $.ajax({
                  url: url,
                  type: 'get',
                  dataType: 'json',
                  success: function (data) {
                      console.log(data);
                      isLoading = 1;
                      // 热门评论的声明
                      /*!isCommentRender && comment();
                      isCommentRender = 1;*/
  
                      var tplData = data.tplData;
                      successRenders(tplData);
                      $('.loading').hide();
                      follow.followShow();
                  },
                  error: function (xhr, status, error) {
                      isLoading = 1;
                      // 热门评论的声明
                      /*!isCommentRender && comment();
                      isCommentRender = 1;*/
  
                      $('.loading').hide();
  
                      console.log('拉取失败');
                  }
              });
          }
      };
  
      $(document).on('scroll', function () {
          if (($(window).scrollTop() > 100) && !isLoading) {
              // $('.loading').show();
              isLoading = 1;
              // loadData();
          }
      });
  
      // 评论初始化要放前面了
      !isCommentRender && comment();
      isCommentRender = 1;
  }
  
  function followInit() {
      // alert(window.MP.globalConf.isLogin);
      window.follow = mUtils.followNative();
      follow.followShow();
      $(document).on('click', '.follow', function (event) {
          var that = this;
          var $this = $(this);
          var appid = $this.data('appid');
  
          // isBox && $this.html('<div class="follow-loading follow-loading-small"></div>');
          // console.log(that);
          var followOptAdd = {
              id: appid,
              isBox: isBox,
              followDom: that,
              source: 'media_detail',
              callback: function (followOptAddOpt) {
                  $(followOptAddOpt.followDom).text('已关注').addClass('followed');
                  $('.follow[data-appid="' + followOptAddOpt.id + '"]').text('已关注').addClass('followed');
              },
              failcallback: function (followOptAddOpt) {
                  $(followOptAddOpt.followDom).text('关注');
                  $('.follow[data-appid="' + followOptAddOpt.id + '"]').text('关注');
              }
          };
          var followOptCancel = {
              id: appid,
              isBox: isBox,
              followDom: that,
              source: 'media_detail',
              callback: function (followOptCancelOpt) {
                  $(followOptCancelOpt.followDom).text('关注').removeClass('followed');
                  $('.follow[data-appid="' + followOptCancel.id + '"]').text('关注').removeClass('followed');
              },
              failcallback: function (followOptCancelOpt) {
                  $(followOptCancelOpt.followDom).text('已关注');
                  $('.follow[data-appid="' + followOptCancel.id + '"]').text('已关注');
              }
          };
          if (!$this.hasClass('followed')) {
              follow.add(followOptAdd);
          } else {
              follow.cancel(followOptCancel);
          }
      });
  }
  
  function imgViewer() {
      $('.mth-editor-content img').each(function () {
          var $this = $(this);
          var imgSrc = $this.data('src') ? $this.data('src') : $this.attr('src');
          if (imgSrc.match('.gif')) {
              return;
          }
          imgSrc = imgSrc.replace(/^\/\//, 'http://');
          imgSrc =    mUtils.timgSrcDeal(
                          {
                              src: imgSrc
                              // width: 10000,
                              // quality: 100,
                              // nocompress: 1
                          }
                      );
          // alert(imgSrc);
          $this
              .data('box', 'imageViewer')
              .data('box-viewerurl', imgSrc);
      });
  
      try {
          window.BoxJS.ready(window.BoxJS.updateImageViewer);
      } catch (e) {
  
      }
  }
  
  /*
   * ar素材激活原生ar应用
   * zhaoyue
   * 2018.01.02
   */
  function arInit() {
      $('.mth-editor-content img').each(function () {
          var $this = $(this);
          var attribute = $this.attr('data-bjh-type');
          if (attribute === 'AR') {
              $this.wrap('<div class="img-ar-box">');
              var $wrap = $this.parent();
              var $arLogoBox = $('<div class="ar-logo-box">');
              $arLogoBox.off('click').on('click', function () {
                  var arJson = $this.attr('data-bjh-params');
                  var arObj = JSON.parse(arJson);
                  window.location.href = 'baijiahao://showar?key=' + arObj.key + '&type=' + arObj.type + '&from=' + arObj.from;
              });
              $wrap.append($arLogoBox);
          }
      });
  }
  
  /*
   * vote 投票 iframe替换
   * zhangshuang
   * 2018.01.24
   */
  var vote = {
      init: function () {
          var self = this;
          $('[data-bjh-box="vote"]').forEach(function (item) {
              var $item = $(item);
              var $wrap = $('<div class="mth-vote">');
              $item.wrap($wrap);
              var voteId = $item.attr('data-vote-id');
              $wrap.html(null);
              self.renderVote($wrap, voteId);
          });
      },
      renderVote: function ($wrap, voteId) {
          var self = this;
          var articleId = $('.mth-header').data('id');
          if (!articleId) {
              return;
          }
          $.get('/builder/author/enrich/getArticleVote?id=' + articleId, function (res) {
              if (typeof res.errno !== 'undefined' && +res.errno === 0 && res.data && res.data) {
                  var vote = res.data;
                  // 渲染模板
                  try {
                      vote.options = vote.detail && vote.detail.options || [];
                      var html;
                      var articleStatus = typeof ARTICLE_STATUS !== 'undefined' ? ARTICLE_STATUS : 'draft'; // eslint-disable-line
                      if (['publish', 'withdraw', 'forbidden'].indexOf(articleStatus) !== -1) {
                          html = self.renderVoteResult(vote, +vote.detail.count_votes);
                      }
                      else {
                          html = self.voteDemoHtml(vote);
                      }
                      $wrap.html(html);
                  } catch (e) {}
              }
          });
      },
      voteDemoHtml(vote) {
          var self = this;
          var btnText = '投票';
          var color = '';
          if (new Date().getTime() >= new Date(vote.end_time).getTime()) {
              btnText = '投票已结束';
              color = '#ccc';
          }
          return [
              '<div class="title">',
                  (+vote.type === 1 ? '单选/ ' : '多选/ ') + self.escapeHtmlEntities(vote.title || ''),
              '</div>',
              '<ul class="options">',
                  vote.options.map(function (v, i) {
                      return [
                          '<li class="op-item">',
                              v.img ? '<div class="image"><img src="' + v.img + '" /></div>' : '',
                              '<div class="op-box">' + self.escapeHtmlEntities(v.option) + '</div>',
                              '<div class="select-area">',
                                  +vote.type === 1 ? '<i class="radio ' + (i === 0 ? 'select' : '') + '"><span class="inner"></span></i>' : '',// eslint-disable-line
                                  +vote.type === 2 ? '<i class="checkbox ' + (i < 2 ? 'select' : '') + '"></i>' : '',
                              '</div>',
                          '</li>'
                      ].join('');
                  }).join(''),
              '</ul>',
              '<div class="buttons">',
                  '<span class="btn" style="color: ' + color + '">' + btnText + '</span>',
              '</div>'
          ].join('');
      },
      renderVoteResult(vote, voteCount) {
          var self = this;
          var btnText = '投票';
          var color = '';
          if (new Date().getTime() >= new Date(vote.end_time).getTime()) {
              btnText = '投票已结束';
              color = '#ccc';
          }
          return [
              '<div class="title">',
                  (+vote.type === 1 ? '单选/ ' : '多选/ ') + self.escapeHtmlEntities(vote.title || ''),
              '</div>',
              '<ul class="options">',
                  vote.options.map(function (v, i) {
                      var percent = +voteCount ? (+v.votes * 100 / voteCount).toFixed(0) : 0;
                      return [
                          '<li class="op-item result">',
                              v.img ? '<div class="image"><img src="' + v.img + '" /></div>' : '',
                              '<div class="op-box">',
                                  '<div>' + self.escapeHtmlEntities(v.option) + '</div>',
                                  '<div class="res-box">',
                                      '<div class="res-bar">',
                                          '<div class="inner" style="width: ' + percent + '%;"></div>',
                                      '</div>',
                                      '<div class="res-text">',
                                          '<span>' + v.votes + '票</span>',
                                          '<span>' + percent + '%</span>',
                                      '</div>',
                                  '</div>',
                              '</div>',
                          '</li>'
                      ].join('');
                  }).join(''),
              '</ul>',
              '<div class="buttons">',
                  '<span class="btn" style="color: ' + color + '">' + btnText + '</span>',
              '</div>'
          ].join('');
      },
      escapeHtmlEntities(str) {
          if (typeof $ !== 'undefined') {
              return $('<div/>').text(str).html();
          }
          return str.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
      }
  };
  
  /*
   * 网盟广告
   * zhangcong提供，huangzongzhe change
   * 2016.09.08
   */
  function advertInit() {
      var isAdvertShow = (16 === window.MP.globalConf.ctk.length);
      if (!isAdvertShow) {
          return;
      }
  
      var advertRender = function (cb) {
          // var sid = mUtils.getParam('sid') + '' || '';
          // 对照组：sid=1000075_189 不展示广告
          // 实验一：sid=1000075_190 只展示百家号
          // 实验二：sid=1000075_191 只展示新闻转码
          // var isOurTest = !!(!!sid && sid.match('1000075_190')); // 是不是我们的测试
          // var isControlGroup = !!(!!sid && ('1000075_189' === sid)); // 是不是对照组
          // var isGroupNews = !!(!!sid && ('1000075_191' === sid));
  
          // if (!isOurTest) {
          //     return;
          // }
  
          // if (isControlGroup || isGroupNews) {
          //     return;
          // }
  
          // if ((16 === window.MP.globalConf.ctk.length)) {
          var sid = mUtils.getParam('sid') + '' || '';
          var isControlGroup = !!(!!sid && ('1000075_189' === sid));
          if (isControlGroup) {
              return;
          }
          try {
              var scale = window.BdLuBsize.shoubaiFeedUESetting.getFeedAdScale();
              (function () {
                  var s = '_' + Math.random().toString(36).slice(2);
                  /*document.write('<div style="" id="' + s + '"></div>');*/
                  var container = document.getElementById('wangmeng');
                  container.setAttribute('id', s);
                  (window.slotbydup = window.slotbydup || []).push({
                      id: 'u2757248',
                      container: s,
                      pchd: scale,
                      pcwd: 20,
                      display: 'inlay-fix',
                      ctkey: window.MP.globalConf.ctk /*这里要放视频的资源方id*/
                  });
  
                  // 网盟广告打点
                  var advertLog = new Image();
                  advertLog.src = window.MP.globalConf.wangmengLog;
  
              })();
              cb && cb();
  
              // adl.js的方法调用
              /* globals baiduAdHide */
              baiduAdHide.hide('u2757248');
          } catch (e) {
              console.log('advertInit failed');
          }
          // }
      };
  
      var htmlBody = document.getElementsByTagName('body')[0];
      var adlJs = document.createElement('script');
      var bsizeJs = document.createElement('script');
      var cmJs = document.createElement('script');
  
      var isReady = 0;
  
      var afterReady = function () {
          if (isReady >= 3) {
              advertRender();
          }
      };
  
      adlJs.onload = function () {
          isReady++;
          afterReady();
      };
      bsizeJs.onload = function () {
          isReady++;
          afterReady();
      };
      cmJs.onload = function () {
          isReady++;
          afterReady();
      };
  
  
      adlJs.src = '//cpro.baidustatic.com/cpro/ui/adl.js';
      bsizeJs.src = '//cpro.baidustatic.com/cpro/exp/propose_ad/bsize.js';
      cmJs.src = '//cpro.baidustatic.com/cpro/ui/cm.js';
  
      htmlBody.appendChild(adlJs);
      htmlBody.appendChild(bsizeJs);
      htmlBody.appendChild(cmJs);
  }
  
  module.exports = {
      init: function () {
          try {
              followInit();
          } catch (e) {
              // alert('关注能力初始化失败');
              window.follow = {};
              window.follow.followShow = function () {};
          }
          vote && vote.init();
          if (!envInfo.uaInfo.isMobile) {
              // logInit();
              videoRender();
              audioRender();
              // arInit();
  
              // mUtils.getQrcode();
          } else {
              // logInit();
              videoRender();
              audioRender();
              forSpeed();
  
              imgViewer();
  
              var userAgent = navigator.userAgent;
              var re = /BaiJiaHao/g;
              if (re.test(userAgent)) {
                  arInit();
              }
  
              // 手百右上角分享
              var shareOpt = {
                  titleName: $('.mth-header').text(),
                  content: $('#mth-digest').text(),
                  image: $('.mth-editor-content').data('coverimage').replace(/^\/\//, 'http://') || ''
              };
              mUtils.boxShare(shareOpt);
              // todo 收藏，先不管了
              // bottomBar.setFavor(shareOpt);
              // 手百右上角分享 end
          }
          imgLazyload();
      }
  };
  /* eslint-enable fecs-camelcase */
  

});
