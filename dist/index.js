(()=>{"use strict";var e,t,o,n,i={800:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(645),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,"html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}nav{position:relative;margin:auto;padding:0;list-style:none;width:100%;text-align:center}nav ul{padding:0;margin:0;list-style:none;display:contents}nav ul li{margin:0 40px 0 0;transition:all .4s ease;display:inline-block}nav ul li:hover{opacity:.7}nav ul li.active{opacity:1}nav ul li:last-child{margin-right:0}nav ul li a{text-decoration:none;color:#000;text-transform:uppercase;display:block;font-weight:600;letter-spacing:.2em;font-size:14px}.header{padding:30px 15px;margin-bottom:30px;color:inherit;text-align:-webkit-center}footer.site-footer,header{width:100%}header{display:contents}.site-footer{background-color:#26272b;padding:45px 0 20px;font-size:15px;line-height:24px;color:#737373}.site-footer .container{margin:auto}.site-footer .column p{text-align:center}.site-footer hr{border-top-color:#bbb;opacity:.5}.site-footer hr.small{margin:20px 0}.site-footer h6{color:#fff;font-size:16px;text-transform:uppercase;margin:5px 0;letter-spacing:2px;text-align:center}.site-footer a{color:#737373}.site-footer a:hover{color:#36c;text-decoration:none}.site-footer .row{display:flex}.site-footer .column{width:33%}.footer-links{padding-left:0;list-style:none;text-align:center}.footer-links li{display:block}.footer-links a{color:#737373}.footer-links a:active,.footer-links a:focus,.footer-links a:hover{color:#36c;text-decoration:none}.footer-links.inline li{display:inline-block}.site-footer .social-icons{text-align:right}.site-footer .social-icons a{width:40px;height:40px;line-height:40px;margin-left:6px;margin-right:0;border-radius:100%;background-color:#33353d}.copyright-text{margin:0}@media(max-width: 991px){.site-footer [class^=col-]{margin-bottom:30px}}@media(max-width: 767px){.site-footer{padding-bottom:0}.site-footer .copyright-text,.site-footer .social-icons{text-align:center}}.social-icons{padding-left:0;margin-bottom:0;list-style:none}.social-icons li{display:inline-block;margin-bottom:4px}.social-icons li.title{margin-right:15px;text-transform:uppercase;color:#96a2b2;font-weight:700;font-size:13px}.social-icons a{background-color:#eceeef;color:#818a91;font-size:16px;display:inline-block;line-height:44px;width:44px;height:44px;text-align:center;margin-right:8px;border-radius:100%;-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.social-icons a:active,.social-icons a:focus,.social-icons a:hover{color:#fff;background-color:#29aafe}.social-icons.size-sm a{line-height:34px;height:34px;width:34px;font-size:14px}.social-icons a.facebook:hover{background-color:#3b5998}.social-icons a.twitter:hover{background-color:#00aced}.social-icons a.linkedin:hover{background-color:#007bb6}.social-icons a.dribbble:hover{background-color:#ea4c89}@media(max-width: 767px){.social-icons li.title{display:block;margin-right:0;font-weight:600}}.poker-container *{color:#000;box-sizing:border-box}.poker-container{max-width:500px;width:100vw;margin:auto}.poker-container .poker-title{background:#fff;font-size:30px;text-align:center}.table{padding-top:10px;margin:auto;background:#fff;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;align-content:space-around;border:5px solid #000;margin-bottom:10px}.table .table-row{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.table .player,.table .cpu{width:100%;display:flex;flex-direction:row;justify-content:space-around}.table .player .player-info,.table .player .cpu-info,.table .cpu .player-info,.table .cpu .cpu-info{display:flex;flex-direction:column;justify-content:space-between}.table .player .player-hand,.table .player .cpu-hand,.table .cpu .player-hand,.table .cpu .cpu-hand{display:flex;flex-direction:row;justify-content:space-around}.table .player .player-hand .card,.table .player .cpu-hand .card,.table .cpu .player-hand .card,.table .cpu .cpu-hand .card{margin-right:10px}.table .player .message,.table .cpu .message{width:40%;min-height:80%;display:flex;flex-direction:column}.table .controls{padding-bottom:10px;background:#fff}.table .controls button{padding:8px;margin-right:5px;font-size:12px;background:transparent;border:2px solid #000;color:#000;border-radius:50px}.table .controls button:hover{background:#fff;color:#333}.player-info,.cpu-info{flex-direction:column}.player-info .img,.cpu-info .img{width:70px;height:70px;background:gray}.player-info .name,.cpu-info .name{font-size:20px;display:flex;justify-content:center}.player-info .money,.cpu-info .money{font-size:18px;display:flex;justify-content:center;color:#000}.card{border-radius:5px;font-size:35px;width:70px;height:100px;color:red;border:2px solid #000;display:flex;justify-content:center;align-items:center}#in-game-controls,#pregame-controls{padding-left:10px}div#shared-cards{padding:10px 0}#in-game-controls{display:none}a{color:#fff}.name .money{display:flex;justify-content:center;color:#000}.body *{box-sizing:border-box}header{width:100%;height:5%;font-size:5vmin;display:block;margin:auto}.row{display:flex;flex:1;flex-direction:row}.column{display:flex;flex:1;flex-direction:column}.controls{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-self:center}.controls{height:10%}body{background:#fff}",""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&i[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},379:(e,t,o)=>{var n,i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r=[];function a(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],i=0;i<e.length;i++){var l=e[i],c=t.base?l[0]+t.base:l[0],s=o[c]||0,d="".concat(c," ").concat(s);o[c]=s+1;var p=a(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(r[p].references++,r[p].updater(f)):r.push({identifier:d,updater:g(f,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,h=0;function g(e,t){var o,n,i;if(t.singleton){var r=h++;o=u||(u=c(t)),n=p.bind(null,o,r,!1),i=p.bind(null,o,r,!0)}else o=c(t),n=f.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=a(o[n]);r[i].references--}for(var c=l(e,t),s=0;s<o.length;s++){var d=a(o[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,exports:{}};return i[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=a(379),t=a.n(e),o=a(800),n={insert:"head",singleton:!1},t()(o.Z,n),o.Z.locals})();