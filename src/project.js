window.__require=function e(t,n,r){function o(i,a){if(!n[i]){if(!t[i]){var u=i.split("/");if(u=u[u.length-1],!t[u]){var f="function"==typeof __require&&__require;if(!a&&f)return f(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){return o(t[i][1][e]||e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)o(r[i]);return o}({game:[function(e,t,n){"use strict";cc._RF.push(t,"53e68n0qcRP6o+hFen95sPA","game");var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e,t){var n=e.width,r=e.height,o=t.x,c=t.y;return{x:Math.floor(Math.max(o,0)/n),y:Math.floor(Math.max(c,0)/r)}},f=cc._decorator,l=f.ccclass,p=(f.property,function(e){return[e[0][0]===e[1][1]&&e[1][1]===e[2][2]&&e[2][2],e[0][2]===e[1][1]&&e[1][1]===e[2][0]&&e[2][0],e[0][0]===e[0][1]&&e[0][1]===e[0][2]&&e[0][2],e[1][0]===e[1][1]&&e[1][1]===e[1][2]&&e[1][2],e[2][0]===e[2][1]&&e[2][1]===e[2][2]&&e[2][2],e[0][0]===e[1][0]&&e[1][0]===e[2][0]&&e[2][0],e[0][1]===e[1][1]&&e[1][1]===e[2][1]&&e[2][1],e[0][2]===e[1][2]&&e[1][2]===e[2][2]&&e[2][2]].find(function(e){return!!e})});l(r=function(e){function t(){var e,n,r;c(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.end=!1,i(r,n)}return a(t,cc.Component),o(t,[{key:"onLoad",value:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),this.currentPlayer=1,this.reset()}},{key:"reset",value:function(){for(var e=this.getComponent(cc.TiledMap),t=e.getMapSize(),n=t.height,r=t.width,o=e.getLayer("game"),c=0;c<r;c++)for(var i=0;i<n;i++)o.setTileGIDAt(0,c,i)}},{key:"onKeyDown",value:function(e){cc.macro.KEY.r&&this.reset()}},{key:"start",value:function(){for(var e=this,t=this.getComponent(cc.TiledMap),n=t.getMapSize(),r=n.height,o=n.width,c=[],i=0;i<o;i++){c[i]=[];for(var a=0;a<r;a++)c[i][a]=0}this.node.on(cc.Node.EventType.MOUSE_DOWN,function(n){var r=e.node.convertToNodeSpaceAR(n.getLocationInView()),o=u(t.getTileSize(),r);if(0===t.getLayer("game").getTileGIDAt(o.x,o.y)&&!e.end){t.getLayer("game").setTileGIDAt(1==e.currentPlayer?2:3,o.x,o.y),c[o.y][o.x]=e.currentPlayer;var i=p(c);if(i)e.end=!0,cc.director.loadScene("main",function(e,t){t.getChildByName("winner").getComponent(cc.RichText).string="<color=#00ff00>"+i+" won</c>"});else{var a=e.currentPlayer;e.currentPlayer=1==a?2:1}}},this)}},{key:"update",value:function(e){}}]),t}());cc._RF.pop()},{}],menu:[function(e,t,n){"use strict";cc._RF.push(t,"08996IWaG9GdqFXtwQWpIk0","menu");var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=cc._decorator,f=u.ccclass;u.property,f(r=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,cc.Component),o(t,[{key:"onLoad",value:function(){}},{key:"start",value:function(){this.node.getComponent(cc.Button).node.on("click",this.startGame,this)}},{key:"startGame",value:function(e){cc.director.loadScene("game")}},{key:"update",value:function(e){}}]),t}());cc._RF.pop()},{}]},{},["game","menu"]);