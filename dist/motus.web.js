!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(10),o=n(11),i=n(12);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e,n){var r=n(4);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(13),o=n(14),i={};for(var a in r)r.hasOwnProperty(a)&&(i[r[a]]=a);var u=t.exports={to:{},get:{}};function l(t,e,n){return Math.min(Math.max(e,t),n)}function s(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}u.get=function(t){var e,n;switch(t.substring(0,3).toLowerCase()){case"hsl":e=u.get.hsl(t),n="hsl";break;case"hwb":e=u.get.hwb(t),n="hwb";break;default:e=u.get.rgb(t),n="rgb"}return e?{model:n,value:e}:null},u.get.rgb=function(t){if(!t)return null;var e,n,o,i=[0,0,0,1];if(e=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(o=e[2],e=e[1],n=0;n<3;n++){var a=2*n;i[n]=parseInt(e.slice(a,a+2),16)}o&&(i[3]=Math.round(parseInt(o,16)/255*100)/100)}else if(e=t.match(/^#([a-f0-9]{3,4})$/i)){for(o=(e=e[1])[3],n=0;n<3;n++)i[n]=parseInt(e[n]+e[n],16);o&&(i[3]=Math.round(parseInt(o+o,16)/255*100)/100)}else if(e=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(n=0;n<3;n++)i[n]=parseInt(e[n+1],0);e[4]&&(i[3]=parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(e=t.match(/(\D+)/))?"transparent"===e[1]?[0,0,0,0]:(i=r[e[1]])?(i[3]=1,i):null:null;for(n=0;n<3;n++)i[n]=Math.round(2.55*parseFloat(e[n+1]));e[4]&&(i[3]=parseFloat(e[4]))}for(n=0;n<3;n++)i[n]=l(i[n],0,255);return i[3]=l(i[3],0,1),i},u.get.hsl=function(t){if(!t)return null;var e=t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])+360)%360,l(parseFloat(e[2]),0,100),l(parseFloat(e[3]),0,100),l(isNaN(n)?1:n,0,1)]}return null},u.get.hwb=function(t){if(!t)return null;var e=t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,l(parseFloat(e[2]),0,100),l(parseFloat(e[3]),0,100),l(isNaN(n)?1:n,0,1)]}return null},u.to.hex=function(){var t=o(arguments);return"#"+s(t[0])+s(t[1])+s(t[2])+(t[3]<1?s(Math.round(255*t[3])):"")},u.to.rgb=function(){var t=o(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},u.to.rgb.percent=function(){var t=o(arguments),e=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),r=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+e+"%, "+n+"%, "+r+"%)":"rgba("+e+"%, "+n+"%, "+r+"%, "+t[3]+")"},u.to.hsl=function(){var t=o(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},u.to.hwb=function(){var t=o(arguments),e="";return t.length>=4&&1!==t[3]&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"},u.to.keyword=function(t){return i[t.slice(0,3)]}},function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,h=c||f||Function("return this")(),p=Object.prototype.toString,d=Math.max,y=Math.min,m=function(){return h.Date.now()};function g(t,e,r){var o,i,a,u,l,s,c=0,f=!1,h=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function w(t){var n=t-s;return void 0===s||n>=e||n<0||h&&t-c>=a}function _(){var t=m();if(w(t))return k(t);l=setTimeout(_,function(t){var n=e-(t-s);return h?y(n,a-(t-c)):n}(t))}function k(t){return l=void 0,p&&o?g(t):(o=i=void 0,u)}function O(){var t=m(),n=w(t);if(o=arguments,i=this,s=t,n){if(void 0===l)return function(t){return c=t,l=setTimeout(_,e),f?g(t):u}(s);if(h)return l=setTimeout(_,e),g(s)}return void 0===l&&(l=setTimeout(_,e)),u}return e=b(e)||0,v(r)&&(f=!!r.leading,a=(h="maxWait"in r)?d(b(r.maxWait)||0,e):a,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=s=i=l=void 0},O.flush=function(){return void 0===l?u:k(m())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==o}(t))return r;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=u.test(t);return n||l.test(t)?s(t.slice(2),n?2:8):a.test(t)?r:+t}t.exports=function(t,e,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return v(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),g(t,e,{leading:o,maxWait:e,trailing:i})}}).call(this,n(16))},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){class n{constructor(t,e){this.$element=t,this.attr=e,this._functionObject=this._getFunctions(this._getValue(t,e))}_getValue(t,e){return t.style[e]}_setValue(t){this.$element.style[this.attr]=t}_getValueFromObject(t){let e="";return Object.keys(t).forEach(n=>{e+=`${n}(${t[n].join(", ")}) `}),e.substring(0,e.length-1)}_getFunctions(t){const e=t.split(/(\w+)\((.*?)\)/);let n={};for(let t=1;t<e.length;t+=3)n[e[t]]=e[t+1].replace(" ","").split(",");return n}get(){return this._getValue(this.$element,this.attr)}add(t,e,n=!0){return this.exists(t)?!!n&&(this.update(t,e),!0):("string"==typeof e&&(e=[e]),this._functionObject[t]=e,this._setValue(this._getValueFromObject(this._functionObject)),!0)}update(t,e,n=!0){return this.exists(t)?("string"==typeof e&&(e=[e]),this._functionObject[t]=e,this._setValue(this._getValueFromObject(this._functionObject)),!0):!!n&&(this.add(t,e),!0)}delete(t){return!!this.exists(t)&&(delete this._functionObject[t],this._setValue(this._getValueFromObject(this._functionObject)),!0)}exists(t){return this._functionObject.hasOwnProperty(t)}}t.exports=(t,e)=>new n(t,e)},function(t,e,n){const r=n(5),o=t=>{const e=r.get.rgb(t);return{r:e[0],g:e[1],b:e[2],a:e[3]}};t.exports=t=>{let e,n;t=o(t),this.toColor=n=>(n=o(n),e={r:n.r-t.r,g:n.g-t.g,b:n.b-t.b},{withPercent:i});const i=r=>{const o=r/100;return n={r:t.r+Math.floor(e.r>0?e.r*o:- -e.r*o),g:t.g+Math.floor(e.g>0?e.g*o:- -e.g*o),b:t.b+Math.floor(e.b>0?e.b*o:- -e.b*o)},{get:a}},a=t=>{if(!t)return n;if(-1!==Object.keys(r.to).indexOf(t))return r.to[t]([n.r,n.g,n.b]);throw new Error(`Unknown type '${t}'`)};return this}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(t,e,n){"use strict";var r=n(15),o=Array.prototype.concat,i=Array.prototype.slice,a=t.exports=function(t){for(var e=[],n=0,a=t.length;n<a;n++){var u=t[n];r(u)?e=o.call(e,i.call(u)):e.push(u)}return e};a.wrap=function(t){return function(){return t(a(arguments))}}},function(t,e){t.exports=function(t){return!(!t||"string"==typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(3),l=n.n(u),s=n(4),c=n.n(s),f=n(2),h=n.n(f),p=function(t,e,n){return(n-=t)/(e-=t)*100},d=function(t,e,n,r){var o=t+(e-t)*n/100;return r?function(t,e){return e?Math.floor(t*Math.pow(10,e))/Math.pow(10,e):t}(o,r):o},y=function(){return Math.random().toString(36).substr(2,9)},m=n(5),g=n.n(m),v="NO_UNIT",b="COLOR_UNIT",w=function(t){return"The value for the '".concat(t,"' property must be a number, string or object")},_=function(){return"Property value not specified"},k=function(t){return"Keyframe percent '".concat(t,"' is not a valid number")},O=function(){return"No value specified"},x=function(t,e){return"Previous unit '".concat(t,"' does not match current unit '").concat(e,"'")},j=function(t,e){return"'to' unit ('".concat(t,"') does not match 'from' unit ('").concat(e,"')")},P=function(){return"Keyframe property 'to' must be set"},S=function(){return"The provided animation object is not an instance of Motus.Animation"},V=function(){return"No keyframes specified"},A=function(){return"Unexpected error"},$=function(t){return"".concat(t," is not a valid html element")},M=function(){return"No animation found. Have you attached the animation with Motus.addAnimation ?"},F=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error(t.apply(void 0,n))},N={matrix:{defaultValue:[0,0,0,0,0,0]},matrix3d:{defaultValue:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},translate:{defaultValue:["0px","0px"]},translate3d:{defaultValue:["0px","0px","0px"]},translateX:{defaultValue:"0px"},translateY:{defaultValue:"0px"},translateZ:{defaultValue:"0px"},scale:{defaultValue:[1]},scale3d:{defaultValue:[1,1,1]},scaleX:{defaultValue:1},scaleY:{defaultValue:1},scaleZ:{defaultValue:1},rotate:{defaultValue:["0deg"]},rotate3d:{defaultValue:[0,"0deg","0deg","0deg"]},rotateX:{defaultValue:"0deg"},rotateY:{defaultValue:"0deg"},rotateZ:{defaultValue:"0deg"},skew:{defaultValue:["0deg"]},skewX:{defaultValue:["0deg"]},skewY:{defaultValue:["0deg"]},perspective:{defaultValue:0}},E={blur:{defaultValue:["0px"]},brightness:{defaultValue:["100%"]},contrast:{defaultValue:["100%"]},hueRotate:{defaultValue:["0deg"]},grayscale:{defaultValue:["0%"]},invert:{defaultValue:["0%"]},saturate:{defaultValue:["100%"]},sepia:{defaultValue:["0%"]}};Object.keys(N).forEach(function(t){return N[t]=l()({},N[t],{functionName:"transform"})}),Object.keys(E).forEach(function(t){return E[t]=l()({},E[t],{functionName:"filter"})});var T=l()({},N,E),K=function(t){return t===window?{width:window.innerWidth,height:window.innerHeight}:{width:t.clientWidth,height:t.clientHeight}},I=function t(e){if(D(e))return e.map(t);if(e=String(e),g.a.get(e)){var n=g.a.get.rgb(e);return[g.a.to.rgb(n),b]}var r=e.match(/([-0-9.]+)(cm|mm|in|px|pt|pc|em|ex|ch|%|rem|vw|vh|vmin|vmax|deg)*/);if(r&&3===r.length)return[parseFloat(r[1]),r[2]||v];F(O)},z=function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?void 0===e.offsetLeft?t(e.parentElement,n):t(e.offsetParent,n)+(n?e.offsetLeft:e.offsetTop):0},C=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.__animationFrameWrapperTimeout&&window.cancelAnimationFrame(t.__animationFrameWrapperTimeout),t.__animationFrameWrapperTimeout=window.requestAnimationFrame(function(){t.apply(void 0,n)})}},q=function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})},B=n(7),L=n.n(B),U=function(t){return"number"==typeof t},W=function(t){return"string"==typeof t},D=function(t){return Array.isArray(t)},H=function(t){return t instanceof Element},R=function(t){return 0===t||!!t},X=function(){function t(){o()(this,t)}return a()(t,null,[{key:"normalize",value:function(t,e){var n=this;return Array.isArray(t)&&(t=this._arrayToObject(t)),Object.keys(t).length||F(V),Object.keys(t).forEach(function(r){var o;(!U(o=r)&&!W(o)||isNaN(o))&&F(k,r);var i=t[r];Object.keys(i).forEach(function(o){var i=n._normalizeKeyframeRule(o,r,t,e);t[r]=l()({},t[r],c()({},o,i))})}),t}},{key:"_normalizeKeyframeRule",value:function(t,e,n,r){var o,i,a,u,l=n[e][t];if(R(l)||F(_),U(l)){var s=this._normalizeNumberValue(t,e,n,r),c=h()(s,3);o=c[0],i=c[1],a=c[2]}else if(W(l)){var f=this._normalizeStringValue(t,e,n,r),p=h()(f,3);o=p[0],i=p[1],a=p[2]}else if(D(l)){o=this._previousKeyframeProperty(t,e,n,r),i=I(l)}else if(u=l,"object"===L()(u)){var d=this._normalizeObjectValue(t,e,n,r),y=h()(d,3);o=y[0],i=y[1],a=y[2]}else F(w,t);return{from:o,to:i,unit:a}}},{key:"_arrayToObject",value:function(t){return 1===t.length?{100:t[0]}:t.reduce(function(e,n,r){return e[Math.floor(r/(t.length-1)*100)]=n,e},{})}},{key:"_getPreviousKeyframe",value:function(t,e){var n,r,o,i=Object.keys(t);return r=e,!(!(o=(n=(n=i).map(function(t){return parseInt(t)}))[n.indexOf(parseInt(r))-1])&&0!==o)&&o}},{key:"_previousKeyframeProperty",value:function(t,e,n,r){var o=this._getPreviousKeyframe(n,e);if(!1===o)return I(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;return T[e]?T[e].defaultValue:n.getComputedStyle(t,null).getPropertyValue(q(e))}(r,t));var i=n[o][t];return i?D(i.to)?i.to:[i.to,i.unit]:this._previousKeyframeProperty(t,o,n,r)}},{key:"_normalizeNumberValue",value:function(t,e,n,r){var o=n[e][t],i=this._previousKeyframeProperty(t,e,n,r),a=h()(i,2);return[a[0],o,a[1]]}},{key:"_normalizeStringValue",value:function(t,e,n,r){var o=n[e][t],i=I(o),a=h()(i,2),u=a[0],l=a[1],s=this._previousKeyframeProperty(t,e,n,r),c=h()(s,2),f=c[0],p=c[1];return p!==l&&F(x,p,l),[f,u,l]}},{key:"_normalizeObjectValue",value:function(t,e,n,r){var o=n[e][t],i=o.from,a=o.to,u=o.unit,l=this._previousKeyframeProperty(t,e,n,r),s=h()(l,2),c=s[0],f=s[1];R(a)||F(P);var p=R(i)?I(i):[c,f],d=h()(p,2),y=d[0],m=d[1],g=I(a),v=h()(g,2),b=v[0],w=v[1];return u||m!==w&&F(j,w,m),R(u)||(u=f),[y,b,u]}}]),t}(),Y=function(){function t(){o()(this,t)}return a()(t,null,[{key:"getPxFromPoint",value:function(t,e,n){var r=z(e,n)||0,o=z(t,n)-r;return H(t)?o:t}},{key:"getDistanceFromParent",value:function(t,e,n){var r=e===window?0:z(e,n);return z(t,n)-r}}]),t}(),Z=n(8),G=n.n(Z),J=function(){function t(e){o()(this,t),this.$el=e}return a()(t,[{key:"apply",value:function(t,e,n){T[t]&&this._applyArray(t,[e+n]),U(e)&&this._applyNumber(t,e,n),W(e)&&this._applyString(t,e),D(e)&&this._applyArray(t,e)}},{key:"_getStyle",value:function(t){return this.$el.style[t]}},{key:"_setStyle",value:function(t,e){this.$el.style[t]=e}},{key:"removeAll",value:function(){this.$el.style=""}},{key:"_applyNumber",value:function(t,e,n){n&&n!==v&&(e+=n),this._setStyle(t,e)}},{key:"_applyString",value:function(t,e){this._applyNumber(t,e)}},{key:"_applyArray",value:function(t,e){var n=T[t].functionName;e=e.map(function(t){return D(t)?t[1]===v?t[0]:t[0]+t[1]:t}),G()(this.$el,n).add(t,e)}}]),t}(),Q=n(9),tt=n.n(Q),et=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};o()(this,t),this.options=l()({},t.defaultOptions,r),this.keyframes=e,this.elementStyles=new J(n)}return a()(t,[{key:"_getCurrentKeyframesPercent",value:function(t){for(var e=this.keyframes,n=Object.keys(e),r=0;r<n.length;r++){if(t===parseInt(n[r]))return[n[r-1]||"0",n[r]];if(t>n[r]&&t<n[r+1])return[n[r],n[r+1]]}return n[0]>t?["0",n[0]]:n[n.length-1]<t?[]:void 0}},{key:"applyAnimations",value:function(t){var e=this,n=this._getCurrentKeyframesPercent(t);if(n.length){var r=h()(n,2),o=r[0],i=r[1],a=Math.floor(p(o,i,t));Object.keys(this.keyframes).forEach(function(t){parseInt(t)<parseInt(i)&&e._applyKeyframe(e.keyframes[t],100)}),this._applyKeyframe(this.keyframes[i],a)}}},{key:"applyNoAnimations",value:function(){this.elementStyles.removeAll(),this.keyframes[0]&&this._applyKeyframe(this.keyframes[0],100)}},{key:"applyAllAnimations",value:function(){var t=this;Object.keys(this.keyframes).forEach(function(e){return t._applyKeyframe(t.keyframes[e],100)})}},{key:"_applyKeyframe",value:function(t,e){var n=this;Object.keys(t).forEach(function(r){var o=t[r],i=o.from,a=o.to,u=o.unit;U(i)&&U(a)?n._applyNumberValues(r,i,a,u===v?"":u,e):u===b?n._applyColorValues(r,i,a,e):D(i)&&D(a)?n._applyArrayValues(r,i,a,e):F(A)})}},{key:"_applyNumberValues",value:function(t,e,n,r,o){var i=this.elementStyles,a=this.options,u=d(e,n,o,a.precision);i.apply(t,u,r)}},{key:"_applyColorValues",value:function(t,e,n,r){var o=this.elementStyles,i=tt()(e).toColor(n).withPercent(r).get("rgb");o.apply(t,i)}},{key:"_applyArrayValues",value:function(t,e,n,r){for(var o=this.elementStyles,i=Math.min(e.length,n.length),a=[],u=0;u<i;u++)a[u]=[],a[u][0]=d(e[u][0],n[u][0],r,this.options.precision),a[u][1]=n[u][1];o.apply(t,a)}}]),t}();c()(et,"defaultOptions",{precision:3});var nt=n(6),rt=n.n(nt),ot=function(){function t(e){var n=this;o()(this,t),this.uid=y(),this.options=l()({},t.defaultOptions,e),this.$el=this.options.$el,H(this.$el)||F($,this.$el),this.keyframes=X.normalize(this.options.keyframes,this.options.$el),this.started=this.options.started,this.appliedAllBefore=!1,this.appliedAllAfter=!1,this._animator=new et(this.keyframes,this.options.$el),this._compute=e.throttle>0?rt()(this.__compute,this.options.throttle):this._compute=C(this.__compute.bind(this)),this._computePositions(this.options.startPoint,this.options.endPoint);var r=e.throttle>0?rt()(this._computePositions.bind(this),this.options.throttle):C(this._computePositions.bind(this));window.addEventListener("resize",function(){return r(n.options.startPoint,n.options.endPoint)})}return a()(t,[{key:"getUid",value:function(){return this.uid}},{key:"isStarted",value:function(){return this.started}},{key:"start",value:function(){var t=this.options;this.started||(t.$scrollElement.addEventListener("scroll",this._compute.bind(this)),this.options.onStart&&this.options.onStart(),this.started=!0,this._compute())}},{key:"stop",value:function(){var t=this.started,e=this.options;t&&(e.$scrollElement.removeEventListener("scroll",this._compute),this.options.onStop&&this.options.onStop(),this.started=!1)}},{key:"_getScrollPosition",value:function(){var t=this.options,e=t.horizontal;return function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t===window?e?t.scrollX:t.scrollY:e?t.scrollLeft:t.scrollTop}(t.$scrollElement,e)}},{key:"_computePositions",value:function(t,e){var n=this.options,r=n.$scrollElement,o=n.horizontal;R(t)&&!D(t)?this.startPoint=Y.getPxFromPoint(t,r,o):(this.startPoint=Y.getDistanceFromParent(this.$el,r,o)-K(r)[o?"width":"height"],D(t)&&(this.startPoint+=t[0])),R(e)&&!D(e)?this.endPoint=Y.getPxFromPoint(e,r,o):(this.endPoint=Y.getDistanceFromParent(this.$el,r,o)+K(this.$el)[o?"width":"height"],D(e)&&(this.endPoint+=e[0]))}},{key:"__compute",value:function(){var t=this.options,e=t.onScrollBefore,n=t.onScrollAfter,r=t.onScrollBetween,o=t.onScroll,i=t.onHitTop,a=t.onHitBottom,u=this.startPoint,l=this.endPoint;if(this.started){var s=this._getScrollPosition();if(o&&o(s),s>u&&s<l){this.appliedAllBefore=!1,this.appliedAllAfter=!1;var c=p(u,l,s);this._animator.applyAnimations(c),r&&r(s,c)}else s<=u?(e&&e(s),this.appliedAllBefore||(i&&i(),this.appliedAllBefore=!0,this._animator.applyNoAnimations())):s>l&&(n&&n(s),this.appliedAllAfter||(a&&a(),this.appliedAllAfter=!0,this._animator.applyAllAnimations()))}}}]),t}();c()(ot,"defaultOptions",{startPoint:null,endPoint:null,$el:null,keyframes:[],precision:et.defaultOptions.precision,throttle:0,$scrollElement:window,horizontal:!1,onScroll:null,onScrollBetween:null,onScrollBefore:null,onScrollAfter:null,onHitTop:null,onHitBottom:null,onStart:null,onStop:null,started:!1});var it=ot,at=new(function(){function t(){o()(this,t),this.Animation=it,this.Point=Y,this._animations=[],this.NO_UNIT=v,this.COLOR_UNIT=b}return a()(t,[{key:"addAnimation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t instanceof this.Animation?(this._animations.push(t),e&&t.start()):F(S)}},{key:"clearAnimation",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t instanceof this.Animation||F(S);var n=this._animations.findIndex(function(e){return t.getUid()===e.getUid()});-1===n&&F(M),e&&this._animations[n].stop(),this._animations.splice(n,1)}},{key:"clearAnimations",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this._animations.forEach(function(t){return t.stop()}),this._animations=[]}}]),t}());"undefined"!=typeof window&&(window.Motus=at);e.default=at}])});
//# sourceMappingURL=motus.web.js.map