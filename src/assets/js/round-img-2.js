
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports2, module2) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module2.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length2 = obj.length; i < length2; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length2 = keys.length; i < length2; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value2, index2, list) {
            results.push(iterator.call(context, value2, index2, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value2, index2, list) {
            if (predicate.call(context, value2, index2, list)) {
              result = value2;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value2, index2, list) {
            if (predicate.call(context, value2, index2, list))
              results.push(value2);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value2, index2, list) {
            if (result || (result = predicate.call(context, value2, index2, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value2) {
            return value2 === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length2 = arguments.length; i < length2; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key2 in obj)
            if (_.has(obj, key2))
              keys.push(key2);
          return keys;
        };
        _.has = function(obj, key2) {
          return hasOwnProperty.call(obj, key2);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text2, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index2 = 0;
          var source = "__p+='";
          text2.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text2.slice(index2, offset).replace(escapeRegExp, escapeChar);
            index2 = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data2) {
            return render.call(this, data2, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports2, module2) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name2, factory2, options) {
        if (modules[name2]) {
          unbindModule(modules[name2]);
        }
        var instance = modules[name2] = factory2($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name2) {
        return modules[name2];
      };
      function bindModule(module3) {
        if (Webflow.env()) {
          isFunction(module3.design) && $win.on("__wf_design", module3.design);
          isFunction(module3.preview) && $win.on("__wf_preview", module3.preview);
        }
        isFunction(module3.destroy) && $win.on("__wf_destroy", module3.destroy);
        if (module3.ready && isFunction(module3.ready)) {
          addReady(module3);
        }
      }
      function addReady(module3) {
        if (domready) {
          module3.ready();
          return;
        }
        if (_.contains(primary, module3.ready)) {
          return;
        }
        primary.push(module3.ready);
      }
      function unbindModule(module3) {
        isFunction(module3.design) && $win.off("__wf_design", module3.design);
        isFunction(module3.preview) && $win.off("__wf_preview", module3.preview);
        isFunction(module3.destroy) && $win.off("__wf_destroy", module3.destroy);
        if (module3.ready && isFunction(module3.ready)) {
          removeReady(module3);
        }
      }
      function removeReady(module3) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module3.ready;
        });
      }
      Webflow.push = function(ready2) {
        if (domready) {
          isFunction(ready2) && ready2();
          return;
        }
        secondary.push(ready2);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module2.exports = window.Webflow = Webflow;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length2 = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index2-- : ++index2 < length2) {
          if (predicate(array[index2], index2, array)) {
            return index2;
          }
        }
        return -1;
      }
      module2.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports2, module2) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module2.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports2, module2) {
      function eq(value2, other) {
        return value2 === other || value2 !== value2 && other !== other;
      }
      module2.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
      var eq = require_eq();
      function assocIndexOf(array, key2) {
        var length2 = array.length;
        while (length2--) {
          if (eq(array[length2][0], key2)) {
            return length2;
          }
        }
        return -1;
      }
      module2.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key2) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data2.length - 1;
        if (index2 == lastIndex) {
          data2.pop();
        } else {
          splice.call(data2, index2, 1);
        }
        --this.size;
        return true;
      }
      module2.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key2) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
        return index2 < 0 ? void 0 : data2[index2][1];
      }
      module2.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      module2.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports2, module2) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key2, value2) {
        var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
        if (index2 < 0) {
          ++this.size;
          data2.push([key2, value2]);
        } else {
          data2[index2][1] = value2;
        }
        return this;
      }
      module2.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports2, module2) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module2.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports2, module2) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module2.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports2, module2) {
      function stackDelete(key2) {
        var data2 = this.__data__, result = data2["delete"](key2);
        this.size = data2.size;
        return result;
      }
      module2.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports2, module2) {
      function stackGet(key2) {
        return this.__data__.get(key2);
      }
      module2.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports2, module2) {
      function stackHas(key2) {
        return this.__data__.has(key2);
      }
      module2.exports = stackHas;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports2, module2) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module2.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports2, module2) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module2.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports2, module2) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module2.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value2) {
        var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
        try {
          value2[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value2);
        if (unmasked) {
          if (isOwn) {
            value2[symToStringTag] = tag;
          } else {
            delete value2[symToStringTag];
          }
        }
        return result;
      }
      module2.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports2, module2) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value2) {
        return nativeObjectToString.call(value2);
      }
      module2.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value2) {
        if (value2 == null) {
          return value2 === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
      }
      module2.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports2, module2) {
      function isObject(value2) {
        var type = typeof value2;
        return value2 != null && (type == "object" || type == "function");
      }
      module2.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value2) {
        if (!isObject(value2)) {
          return false;
        }
        var tag = baseGetTag(value2);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module2.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports2, module2) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module2.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports2, module2) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module2.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports2, module2) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module2.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports2, module2) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value2) {
        if (!isObject(value2) || isMasked(value2)) {
          return false;
        }
        var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value2));
      }
      module2.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports2, module2) {
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      module2.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports2, module2) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key2) {
        var value2 = getValue(object, key2);
        return baseIsNative(value2) ? value2 : void 0;
      }
      module2.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module2.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports2, module2) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module2.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module2.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports2, module2) {
      function hashDelete(key2) {
        var result = this.has(key2) && delete this.__data__[key2];
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key2) {
        var data2 = this.__data__;
        if (nativeCreate) {
          var result = data2[key2];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data2, key2) ? data2[key2] : void 0;
      }
      module2.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key2) {
        var data2 = this.__data__;
        return nativeCreate ? data2[key2] !== void 0 : hasOwnProperty.call(data2, key2);
      }
      module2.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports2, module2) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key2, value2) {
        var data2 = this.__data__;
        this.size += this.has(key2) ? 0 : 1;
        data2[key2] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED : value2;
        return this;
      }
      module2.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports2, module2) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module2.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module2.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports2, module2) {
      function isKeyable(value2) {
        var type = typeof value2;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
      }
      module2.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports2, module2) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key2) {
        var data2 = map.__data__;
        return isKeyable(key2) ? data2[typeof key2 == "string" ? "string" : "hash"] : data2.map;
      }
      module2.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key2) {
        var result = getMapData(this, key2)["delete"](key2);
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      module2.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      module2.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
      var getMapData = require_getMapData();
      function mapCacheSet(key2, value2) {
        var data2 = getMapData(this, key2), size2 = data2.size;
        data2.set(key2, value2);
        this.size += data2.size == size2 ? 0 : 1;
        return this;
      }
      module2.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports2, module2) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module2.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports2, module2) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key2, value2) {
        var data2 = this.__data__;
        if (data2 instanceof ListCache) {
          var pairs = data2.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key2, value2]);
            this.size = ++data2.size;
            return this;
          }
          data2 = this.__data__ = new MapCache(pairs);
        }
        data2.set(key2, value2);
        this.size = data2.size;
        return this;
      }
      module2.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports2, module2) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data2 = this.__data__ = new ListCache(entries);
        this.size = data2.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module2.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value2) {
        this.__data__.set(value2, HASH_UNDEFINED);
        return this;
      }
      module2.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports2, module2) {
      function setCacheHas(value2) {
        return this.__data__.has(value2);
      }
      module2.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports2, module2) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index2 = -1, length2 = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index2 < length2) {
          this.add(values[index2]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module2.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports2, module2) {
      function arraySome(array, predicate) {
        var index2 = -1, length2 = array == null ? 0 : array.length;
        while (++index2 < length2) {
          if (predicate(array[index2], index2, array)) {
            return true;
          }
        }
        return false;
      }
      module2.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports2, module2) {
      function cacheHas(cache2, key2) {
        return cache2.has(key2);
      }
      module2.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports2, module2) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports2, module2) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module2.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports2, module2) {
      function mapToArray(map) {
        var index2 = -1, result = Array(map.size);
        map.forEach(function(value2, key2) {
          result[++index2] = [key2, value2];
        });
        return result;
      }
      module2.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports2, module2) {
      function setToArray(set3) {
        var index2 = -1, result = Array(set3.size);
        set3.forEach(function(value2) {
          result[++index2] = value2;
        });
        return result;
      }
      module2.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module2.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports2, module2) {
      function arrayPush(array, values) {
        var index2 = -1, length2 = values.length, offset = array.length;
        while (++index2 < length2) {
          array[offset + index2] = values[index2];
        }
        return array;
      }
      module2.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports2, module2) {
      var isArray = Array.isArray;
      module2.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports2, module2) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module2.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports2, module2) {
      function arrayFilter(array, predicate) {
        var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index2 < length2) {
          var value2 = array[index2];
          if (predicate(value2, index2, array)) {
            result[resIndex++] = value2;
          }
        }
        return result;
      }
      module2.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports2, module2) {
      function stubArray() {
        return [];
      }
      module2.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports2, module2) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module2.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports2, module2) {
      function baseTimes(n, iteratee) {
        var index2 = -1, result = Array(n);
        while (++index2 < n) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      module2.exports = baseTimes;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports2, module2) {
      function isObjectLike(value2) {
        return value2 != null && typeof value2 == "object";
      }
      module2.exports = isObjectLike;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == argsTag;
      }
      module2.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports2, module2) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value2) {
        return isObjectLike(value2) && hasOwnProperty.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
      };
      module2.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports2, module2) {
      function stubFalse() {
        return false;
      }
      module2.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports2, module2) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module2.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports2, module2) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value2, length2) {
        var type = typeof value2;
        length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
        return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length2);
      }
      module2.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports2, module2) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value2) {
        return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
      }
      module2.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value2) {
        return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
      }
      module2.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports2, module2) {
      function baseUnary(func) {
        return function(value2) {
          return func(value2);
        };
      }
      module2.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports2, module2) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module2.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports2, module2) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module2.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports2, module2) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value2, inherited) {
        var isArr = isArray(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value2.length, String) : [], length2 = result.length;
        for (var key2 in value2) {
          if ((inherited || hasOwnProperty.call(value2, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
          isIndex(key2, length2)))) {
            result.push(key2);
          }
        }
        return result;
      }
      module2.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports2, module2) {
      var objectProto = Object.prototype;
      function isPrototype(value2) {
        var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value2 === proto;
      }
      module2.exports = isPrototype;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports2, module2) {
      function overArg(func, transform2) {
        return function(arg) {
          return func(transform2(arg));
        };
      }
      module2.exports = overArg;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports2, module2) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module2.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports2, module2) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key2 in Object(object)) {
          if (hasOwnProperty.call(object, key2) && key2 != "constructor") {
            result.push(key2);
          }
        }
        return result;
      }
      module2.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports2, module2) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value2) {
        return value2 != null && isLength(value2.length) && !isFunction(value2);
      }
      module2.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports2, module2) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module2.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports2, module2) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module2.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports2, module2) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key2 = objProps[index2];
          if (!(isPartial ? key2 in other : hasOwnProperty.call(other, key2))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key2 = objProps[index2];
          var objValue = object[key2], othValue = other[key2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key2 == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module2.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module2.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module2.exports = Set;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports2, module2) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module2.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports2, module2) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value2) {
          var result = baseGetTag(value2), Ctor = result == objectTag ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module2.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports2, module2) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module2.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports2, module2) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value2, other, bitmask, customizer, stack) {
        if (value2 === other) {
          return true;
        }
        if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
          return value2 !== value2 && other !== other;
        }
        return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
      }
      module2.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports2, module2) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index2 = matchData.length, length2 = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length2;
        }
        object = Object(object);
        while (index2--) {
          var data2 = matchData[index2];
          if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
            return false;
          }
        }
        while (++index2 < length2) {
          data2 = matchData[index2];
          var key2 = data2[0], objValue = object[key2], srcValue = data2[1];
          if (noCustomizer && data2[2]) {
            if (objValue === void 0 && !(key2 in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key2, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module2.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports2, module2) {
      var isObject = require_isObject();
      function isStrictComparable(value2) {
        return value2 === value2 && !isObject(value2);
      }
      module2.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports2, module2) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length2 = result.length;
        while (length2--) {
          var key2 = result[length2], value2 = object[key2];
          result[length2] = [key2, value2, isStrictComparable(value2)];
        }
        return result;
      }
      module2.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports2, module2) {
      function matchesStrictComparable(key2, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
        };
      }
      module2.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports2, module2) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module2.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports2, module2) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value2) {
        return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
      }
      module2.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports2, module2) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value2, object) {
        if (isArray(value2)) {
          return false;
        }
        var type = typeof value2;
        if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
          return true;
        }
        return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
      }
      module2.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports2, module2) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key2)) {
            return cache2.get(key2);
          }
          var result = func.apply(this, args);
          memoized.cache = cache2.set(key2, result) || cache2;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module2.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports2, module2) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key2) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key2;
        });
        var cache2 = result.cache;
        return result;
      }
      module2.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports2, module2) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module2.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports2, module2) {
      function arrayMap(array, iteratee) {
        var index2 = -1, length2 = array == null ? 0 : array.length, result = Array(length2);
        while (++index2 < length2) {
          result[index2] = iteratee(array[index2], index2, array);
        }
        return result;
      }
      module2.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports2, module2) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value2) {
        if (typeof value2 == "string") {
          return value2;
        }
        if (isArray(value2)) {
          return arrayMap(value2, baseToString) + "";
        }
        if (isSymbol(value2)) {
          return symbolToString ? symbolToString.call(value2) : "";
        }
        var result = value2 + "";
        return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
      }
      module2.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports2, module2) {
      var baseToString = require_baseToString();
      function toString(value2) {
        return value2 == null ? "" : baseToString(value2);
      }
      module2.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports2, module2) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value2, object) {
        if (isArray(value2)) {
          return value2;
        }
        return isKey(value2, object) ? [value2] : stringToPath(toString(value2));
      }
      module2.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports2, module2) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value2) {
        if (typeof value2 == "string" || isSymbol(value2)) {
          return value2;
        }
        var result = value2 + "";
        return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
      }
      module2.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports2, module2) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index2 = 0, length2 = path.length;
        while (object != null && index2 < length2) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length2 ? object : void 0;
      }
      module2.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports2, module2) {
      var baseGet = require_baseGet();
      function get3(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module2.exports = get3;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports2, module2) {
      function baseHasIn(object, key2) {
        return object != null && key2 in Object(object);
      }
      module2.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports2, module2) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index2 = -1, length2 = path.length, result = false;
        while (++index2 < length2) {
          var key2 = toKey(path[index2]);
          if (!(result = object != null && hasFunc(object, key2))) {
            break;
          }
          object = object[key2];
        }
        if (result || ++index2 != length2) {
          return result;
        }
        length2 = object == null ? 0 : object.length;
        return !!length2 && isLength(length2) && isIndex(key2, length2) && (isArray(object) || isArguments(object));
      }
      module2.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports2, module2) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module2.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports2, module2) {
      var baseIsEqual = require_baseIsEqual();
      var get3 = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get3(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module2.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports2, module2) {
      function identity(value2) {
        return value2;
      }
      module2.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports2, module2) {
      function baseProperty(key2) {
        return function(object) {
          return object == null ? void 0 : object[key2];
        };
      }
      module2.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports2, module2) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module2.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports2, module2) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property2(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module2.exports = property2;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports2, module2) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property2 = require_property();
      function baseIteratee(value2) {
        if (typeof value2 == "function") {
          return value2;
        }
        if (value2 == null) {
          return identity;
        }
        if (typeof value2 == "object") {
          return isArray(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
        }
        return property2(value2);
      }
      module2.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index2 = string.length;
        while (index2-- && reWhitespace.test(string.charAt(index2))) {
        }
        return index2;
      }
      module2.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports2, module2) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module2.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports2, module2) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value2) {
        if (typeof value2 == "number") {
          return value2;
        }
        if (isSymbol(value2)) {
          return NAN;
        }
        if (isObject(value2)) {
          var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
          value2 = isObject(other) ? other + "" : other;
        }
        if (typeof value2 != "string") {
          return value2 === 0 ? value2 : +value2;
        }
        value2 = baseTrim(value2);
        var isBinary = reIsBinary.test(value2);
        return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
      }
      module2.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports2, module2) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value2) {
        if (!value2) {
          return value2 === 0 ? value2 : 0;
        }
        value2 = toNumber(value2);
        if (value2 === INFINITY || value2 === -INFINITY) {
          var sign = value2 < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value2 === value2 ? value2 : 0;
      }
      module2.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports2, module2) {
      var toFinite = require_toFinite();
      function toInteger(value2) {
        var result = toFinite(value2), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module2.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports2, module2) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex2(array, predicate, fromIndex) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length2 + index2, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index2);
      }
      module2.exports = findIndex2;
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports2, module2) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module2.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports2, module2) {
      module2.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports2, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports2, module2) {
      var call = Function.prototype.call;
      module2.exports = call.bind ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
      module2.exports = function(bitmap, value2) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value2
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
      var FunctionPrototype = Function.prototype;
      var bind = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      var callBind = bind && bind.bind(call);
      module2.exports = bind ? function(fn) {
        return fn && callBind(call, fn);
      } : function(fn) {
        return fn && function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module2.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var Object2 = global2.Object;
      var split = uncurryThis("".split);
      module2.exports = fails(function() {
        return !Object2("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split(it, "") : Object2(it);
      } : Object2;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
      var global2 = require_global();
      var TypeError2 = global2.TypeError;
      module2.exports = function(it) {
        if (it == void 0)
          throw TypeError2("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module2.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports2, module2) {
      module2.exports = function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports2, module2) {
      var isCallable = require_is_callable();
      module2.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module2.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      module2.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports2, module2) {
      var getBuiltIn = require_get_built_in();
      module2.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports2, module2) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = +match[1];
        }
      }
      module2.exports = version;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports2, module2) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
      var NATIVE_SYMBOL = require_native_symbol();
      module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Object2 = global2.Object;
      module2.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
      var global2 = require_global();
      var String2 = global2.String;
      module2.exports = function(argument) {
        try {
          return String2(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports2, module2) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module2.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports2, module2) {
      var aCallable = require_a_callable();
      module2.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
      var global2 = require_global();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var TypeError2 = global2.TypeError;
      module2.exports = function(input, pref) {
        var fn, val2;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val2 = call(fn, input)))
          return val2;
        if (isCallable(fn = input.valueOf) && !isObject(val2 = call(fn, input)))
          return val2;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val2 = call(fn, input)))
          return val2;
        throw TypeError2("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports2, module2) {
      module2.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports2, module2) {
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module2.exports = function(key2, value2) {
        try {
          defineProperty(global2, key2, { value: value2, configurable: true, writable: true });
        } catch (error) {
          global2[key2] = value2;
        }
        return value2;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports2, module2) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module2.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports2, module2) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module2.exports = function(key2, value2) {
        return store[key2] || (store[key2] = value2 !== void 0 ? value2 : {});
      })("versions", []).push({
        version: "3.19.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports2, module2) {
      var global2 = require_global();
      var requireObjectCoercible = require_require_object_coercible();
      var Object2 = global2.Object;
      module2.exports = function(argument) {
        return Object2(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module2.exports = Object.hasOwn || function hasOwn(it, key2) {
        return hasOwnProperty(toObject(it), key2);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module2.exports = function(key2) {
        return "Symbol(" + (key2 === void 0 ? "" : key2) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var symbolFor = Symbol2 && Symbol2["for"];
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module2.exports = function(name2) {
        if (!hasOwn(WellKnownSymbolsStore, name2) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name2] == "string")) {
          var description = "Symbol." + name2;
          if (NATIVE_SYMBOL && hasOwn(Symbol2, name2)) {
            WellKnownSymbolsStore[name2] = Symbol2[name2];
          } else if (USE_SYMBOL_AS_UID && symbolFor) {
            WellKnownSymbolsStore[name2] = symbolFor(description);
          } else {
            WellKnownSymbolsStore[name2] = createWellKnownSymbol(description);
          }
        }
        return WellKnownSymbolsStore[name2];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
      var global2 = require_global();
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TypeError2 = global2.TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module2.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result))
            return result;
          throw TypeError2("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module2.exports = function(argument) {
        var key2 = toPrimitive(argument, "string");
        return isSymbol(key2) ? key2 : key2 + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
      var global2 = require_global();
      var isObject = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module2.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module2.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports2, module2) {
      var global2 = require_global();
      var isObject = require_is_object();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module2.exports = function(argument) {
        if (isObject(argument))
          return argument;
        throw TypeError2(String2(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports2) {
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var TypeError2 = global2.TypeError;
      var $defineProperty = Object.defineProperty;
      exports2.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError2("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = DESCRIPTORS ? function(object, key2, value2) {
        return definePropertyModule.f(object, key2, createPropertyDescriptor(1, value2));
      } : function(object, key2, value2) {
        object[key2] = value2;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module2.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports2, module2) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module2.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports2, module2) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module2.exports = function(key2) {
        return keys[key2] || (keys[key2] = uid(key2));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
      module2.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports2, module2) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set3;
      var get3;
      var has;
      var enforce = function(it) {
        return has(it) ? get3(it) : set3(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get3(it)).type !== TYPE) {
            throw TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = uncurryThis(store.get);
        wmhas = uncurryThis(store.has);
        wmset = uncurryThis(store.set);
        set3 = function(it, metadata) {
          if (wmhas(store, it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset(store, it, metadata);
          return metadata;
        };
        get3 = function(it) {
          return wmget(store, it) || {};
        };
        has = function(it) {
          return wmhas(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set3 = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get3 = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module2.exports = {
        set: set3,
        get: get3,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports2, module2) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor2 = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor2(FunctionPrototype, "name").configurable);
      module2.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports2, module2) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module2.exports = function(O, key2, value2, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name2 = options && options.name !== void 0 ? options.name : key2;
        var state;
        if (isCallable(value2)) {
          if (String(name2).slice(0, 7) === "Symbol(") {
            name2 = "[" + String(name2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn(value2, "name") || CONFIGURABLE_FUNCTION_NAME && value2.name !== name2) {
            createNonEnumerableProperty(value2, "name", name2);
          }
          state = enforceInternalState(value2);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name2 == "string" ? name2 : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key2] = value2;
          else
            setGlobal(key2, value2);
          return;
        } else if (!unsafe) {
          delete O[key2];
        } else if (!noTargetGet && O[key2]) {
          simple = true;
        }
        if (simple)
          O[key2] = value2;
        else
          createNonEnumerableProperty(O, key2, value2);
      })(Function.prototype, "toString", function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module2.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module2.exports = function(index2, length2) {
        var integer = toIntegerOrInfinity(index2);
        return integer < 0 ? max(integer + length2, 0) : min(integer, length2);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports2, module2) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module2.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
      var toLength = require_to_length();
      module2.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports2, module2) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length2 = lengthOfArrayLike(O);
          var index2 = toAbsoluteIndex(fromIndex, length2);
          var value2;
          if (IS_INCLUDES && el != el)
            while (length2 > index2) {
              value2 = O[index2++];
              if (value2 != value2)
                return true;
            }
          else
            for (; length2 > index2; index2++) {
              if ((IS_INCLUDES || index2 in O) && O[index2] === el)
                return IS_INCLUDES || index2 || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module2.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module2.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key2;
        for (key2 in O)
          !hasOwn(hiddenKeys, key2) && hasOwn(O, key2) && push(result, key2);
        while (names.length > i)
          if (hasOwn(O, key2 = names[i++])) {
            ~indexOf(result, key2) || push(result, key2);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
      module2.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
      exports2.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports2, module2) {
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module2.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key2 = keys[i];
          if (!hasOwn(target, key2))
            defineProperty(target, key2, getOwnPropertyDescriptor(source, key2));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports2, module2) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value2 = data2[normalize2(feature)];
        return value2 == POLYFILL ? true : value2 == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize2 = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data2 = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module2.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports2, module2) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module2.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key2, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key2 in source) {
            sourceProperty = source[key2];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key2);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key2];
            FORCED = isForced(GLOBAL ? key2 : TARGET + (STATIC ? "." : "#") + key2, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key2, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var bind = uncurryThis(uncurryThis.bind);
      module2.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : bind ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module2.exports = function(iterator, kind, value2) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw")
              throw value2;
            return value2;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw")
          throw value2;
        if (innerError)
          throw innerResult;
        anObject(innerResult);
        return value2;
      };
    }
  });

  // node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module2.exports = function(iterator, fn, value2, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value2)[0], value2[1]) : fn(value2);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/internals/iterators.js"(exports2, module2) {
      module2.exports = {};
    }
  });

  // node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module2.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module2.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/internals/classof.js"(exports2, module2) {
      var global2 = require_global();
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var Object2 = global2.Object;
      var CORRECT_ARGUMENTS = classofRaw(function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key2) {
        try {
          return it[key2];
        } catch (error) {
        }
      };
      module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object2(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/core-js/internals/is-constructor.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var noop = function() {
      };
      var empty = [];
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
      var isConstructorModern = function(argument) {
        if (!isCallable(argument))
          return false;
        try {
          construct(noop, empty, argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function(argument) {
        if (!isCallable(argument))
          return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      };
      module2.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/internals/create-property.js"(exports2, module2) {
      "use strict";
      var toPropertyKey = require_to_property_key();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module2.exports = function(object, key2, value2) {
        var propertyKey = toPropertyKey(key2);
        if (propertyKey in object)
          definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value2));
        else
          object[propertyKey] = value2;
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
      var classof = require_classof();
      var getMethod = require_get_method();
      var Iterators = require_iterators();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module2.exports = function(it) {
        if (it != void 0)
          return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js/internals/get-iterator.js
  var require_get_iterator = __commonJS({
    "node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
      var global2 = require_global();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method();
      var TypeError2 = global2.TypeError;
      module2.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (aCallable(iteratorMethod))
          return anObject(call(iteratorMethod, argument));
        throw TypeError2(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js/internals/array-from.js
  var require_array_from = __commonJS({
    "node_modules/core-js/internals/array-from.js"(exports2, module2) {
      "use strict";
      var global2 = require_global();
      var bind = require_function_bind_context();
      var call = require_function_call();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var Array2 = global2.Array;
      module2.exports = function from(arrayLike) {
        var O = toObject(arrayLike);
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping)
          mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
        var iteratorMethod = getIteratorMethod(O);
        var index2 = 0;
        var length2, result, step, iterator, next, value2;
        if (iteratorMethod && !(this == Array2 && isArrayIteratorMethod(iteratorMethod))) {
          iterator = getIterator(O, iteratorMethod);
          next = iterator.next;
          result = IS_CONSTRUCTOR ? new this() : [];
          for (; !(step = call(next, iterator)).done; index2++) {
            value2 = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
            createProperty(result, index2, value2);
          }
        } else {
          length2 = lengthOfArrayLike(O);
          result = IS_CONSTRUCTOR ? new this(length2) : Array2(length2);
          for (; length2 > index2; index2++) {
            value2 = mapping ? mapfn(O[index2], index2) : O[index2];
            createProperty(result, index2, value2);
          }
        }
        result.length = index2;
        return result;
      };
    }
  });

  // node_modules/core-js/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports2, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module2.exports = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js/modules/es.array.from.js
  var require_es_array_from = __commonJS({
    "node_modules/core-js/modules/es.array.from.js"() {
      var $ = require_export();
      var from = require_array_from();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
        Array.from(iterable);
      });
      $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
        from
      });
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports2, module2) {
      var classof = require_classof_raw();
      module2.exports = Array.isArray || function isArray(argument) {
        return classof(argument) == "Array";
      };
    }
  });

  // node_modules/core-js/modules/es.array.is-array.js
  var require_es_array_is_array = __commonJS({
    "node_modules/core-js/modules/es.array.is-array.js"() {
      var $ = require_export();
      var isArray = require_is_array();
      $({ target: "Array", stat: true }, {
        isArray
      });
    }
  });

  // node_modules/core-js/modules/es.array.of.js
  var require_es_array_of = __commonJS({
    "node_modules/core-js/modules/es.array.of.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var fails = require_fails();
      var isConstructor = require_is_constructor();
      var createProperty = require_create_property();
      var Array2 = global2.Array;
      var ISNT_GENERIC = fails(function() {
        function F() {
        }
        return !(Array2.of.call(F) instanceof F);
      });
      $({ target: "Array", stat: true, forced: ISNT_GENERIC }, {
        of: function of() {
          var index2 = 0;
          var argumentsLength = arguments.length;
          var result = new (isConstructor(this) ? this : Array2)(argumentsLength);
          while (argumentsLength > index2)
            createProperty(result, index2, arguments[index2++]);
          result.length = argumentsLength;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports2, module2) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module2.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports2, module2) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length2 = keys.length;
        var index2 = 0;
        var key2;
        while (length2 > index2)
          definePropertyModule.f(O, key2 = keys[index2++], props[key2]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports2, module2) {
      var getBuiltIn = require_get_built_in();
      module2.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports2, module2) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content2) {
        return LT + SCRIPT + GT + content2 + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length2 = enumBugKeys.length;
        while (length2--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length2]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module2.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports2, module2) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module2.exports = function(key2) {
        ArrayPrototype[UNSCOPABLES][key2] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.at.js
  var require_es_array_at = __commonJS({
    "node_modules/core-js/modules/es.array.at.js"() {
      "use strict";
      var $ = require_export();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        at: function at(index2) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var relativeIndex = toIntegerOrInfinity(index2);
          var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
          return k < 0 || k >= len ? void 0 : O[k];
        }
      });
      addToUnscopables("at");
    }
  });

  // node_modules/core-js/internals/array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/internals/array-species-constructor.js"(exports2, module2) {
      var global2 = require_global();
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject = require_is_object();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      var Array2 = global2.Array;
      module2.exports = function(originalArray) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          if (isConstructor(C) && (C === Array2 || isArray(C.prototype)))
            C = void 0;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return C === void 0 ? Array2 : C;
      };
    }
  });

  // node_modules/core-js/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/internals/array-species-create.js"(exports2, module2) {
      var arraySpeciesConstructor = require_array_species_constructor();
      module2.exports = function(originalArray, length2) {
        return new (arraySpeciesConstructor(originalArray))(length2 === 0 ? 0 : length2);
      };
    }
  });

  // node_modules/core-js/internals/array-method-has-species-support.js
  var require_array_method_has_species_support = __commonJS({
    "node_modules/core-js/internals/array-method-has-species-support.js"(exports2, module2) {
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(METHOD_NAME) {
        return V8_VERSION >= 51 || !fails(function() {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES] = function() {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
    }
  });

  // node_modules/core-js/modules/es.array.concat.js
  var require_es_array_concat = __commonJS({
    "node_modules/core-js/modules/es.array.concat.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var fails = require_fails();
      var isArray = require_is_array();
      var isObject = require_is_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var arraySpeciesCreate = require_array_species_create();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_engine_v8_version();
      var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
      var TypeError2 = global2.TypeError;
      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
      var isConcatSpreadable = function(O) {
        if (!isObject(O))
          return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== void 0 ? !!spreadable : isArray(O);
      };
      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
      $({ target: "Array", proto: true, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length2, len, E;
          for (i = -1, length2 = arguments.length; i < length2; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = lengthOfArrayLike(E);
              if (n + len > MAX_SAFE_INTEGER)
                throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++)
                if (k in E)
                  createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER)
                throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });
    }
  });

  // node_modules/core-js/internals/array-copy-within.js
  var require_array_copy_within = __commonJS({
    "node_modules/core-js/internals/array-copy-within.js"(exports2, module2) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var min = Math.min;
      module2.exports = [].copyWithin || function copyWithin(target, start) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : void 0;
        var count = min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O)
            O[to] = O[from];
          else
            delete O[to];
          to += inc;
          from += inc;
        }
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es.array.copy-within.js
  var require_es_array_copy_within = __commonJS({
    "node_modules/core-js/modules/es.array.copy-within.js"() {
      var $ = require_export();
      var copyWithin = require_array_copy_within();
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        copyWithin
      });
      addToUnscopables("copyWithin");
    }
  });

  // node_modules/core-js/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js/internals/array-iteration.js"(exports2, module2) {
      var bind = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      var push = uncurryThis([].push);
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that);
          var length2 = lengthOfArrayLike(self2);
          var index2 = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length2) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
          var value2, result;
          for (; length2 > index2; index2++)
            if (NO_HOLES || index2 in self2) {
              value2 = self2[index2];
              result = boundFunction(value2, index2, O);
              if (TYPE) {
                if (IS_MAP)
                  target[index2] = result;
                else if (result)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return value2;
                    case 6:
                      return index2;
                    case 2:
                      push(target, value2);
                  }
                else
                  switch (TYPE) {
                    case 4:
                      return false;
                    case 7:
                      push(target, value2);
                  }
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module2.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
      };
    }
  });

  // node_modules/core-js/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "node_modules/core-js/internals/array-method-is-strict.js"(exports2, module2) {
      "use strict";
      var fails = require_fails();
      module2.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            throw 1;
          }, 1);
        });
      };
    }
  });

  // node_modules/core-js/modules/es.array.every.js
  var require_es_array_every = __commonJS({
    "node_modules/core-js/modules/es.array.every.js"() {
      "use strict";
      var $ = require_export();
      var $every = require_array_iteration().every;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("every");
      $({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
        every: function every(callbackfn) {
          return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-fill.js
  var require_array_fill = __commonJS({
    "node_modules/core-js/internals/array-fill.js"(exports2, module2) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      module2.exports = function fill(value2) {
        var O = toObject(this);
        var length2 = lengthOfArrayLike(O);
        var argumentsLength = arguments.length;
        var index2 = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length2);
        var end = argumentsLength > 2 ? arguments[2] : void 0;
        var endPos = end === void 0 ? length2 : toAbsoluteIndex(end, length2);
        while (endPos > index2)
          O[index2++] = value2;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es.array.fill.js
  var require_es_array_fill = __commonJS({
    "node_modules/core-js/modules/es.array.fill.js"() {
      var $ = require_export();
      var fill = require_array_fill();
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        fill
      });
      addToUnscopables("fill");
    }
  });

  // node_modules/core-js/modules/es.array.filter.js
  var require_es_array_filter = __commonJS({
    "node_modules/core-js/modules/es.array.filter.js"() {
      "use strict";
      var $ = require_export();
      var $filter = require_array_iteration().filter;
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
      $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        filter: function filter(callbackfn) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.find.js
  var require_es_array_find = __commonJS({
    "node_modules/core-js/modules/es.array.find.js"() {
      "use strict";
      var $ = require_export();
      var $find = require_array_iteration().find;
      var addToUnscopables = require_add_to_unscopables();
      var FIND = "find";
      var SKIPS_HOLES = true;
      if (FIND in [])
        Array(1)[FIND](function() {
          SKIPS_HOLES = false;
        });
      $({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
        find: function find3(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables(FIND);
    }
  });

  // node_modules/core-js/modules/es.array.find-index.js
  var require_es_array_find_index = __commonJS({
    "node_modules/core-js/modules/es.array.find-index.js"() {
      "use strict";
      var $ = require_export();
      var $findIndex = require_array_iteration().findIndex;
      var addToUnscopables = require_add_to_unscopables();
      var FIND_INDEX = "findIndex";
      var SKIPS_HOLES = true;
      if (FIND_INDEX in [])
        Array(1)[FIND_INDEX](function() {
          SKIPS_HOLES = false;
        });
      $({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
        findIndex: function findIndex2(callbackfn) {
          return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables(FIND_INDEX);
    }
  });

  // node_modules/core-js/internals/flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "node_modules/core-js/internals/flatten-into-array.js"(exports2, module2) {
      "use strict";
      var global2 = require_global();
      var isArray = require_is_array();
      var lengthOfArrayLike = require_length_of_array_like();
      var bind = require_function_bind_context();
      var TypeError2 = global2.TypeError;
      var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind(mapper, thisArg) : false;
        var element, elementLen;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            if (depth > 0 && isArray(element)) {
              elementLen = lengthOfArrayLike(element);
              targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 9007199254740991)
                throw TypeError2("Exceed the acceptable array length");
              target[targetIndex] = element;
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      };
      module2.exports = flattenIntoArray;
    }
  });

  // node_modules/core-js/modules/es.array.flat.js
  var require_es_array_flat = __commonJS({
    "node_modules/core-js/modules/es.array.flat.js"() {
      "use strict";
      var $ = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var arraySpeciesCreate = require_array_species_create();
      $({ target: "Array", proto: true }, {
        flat: function flat() {
          var depthArg = arguments.length ? arguments[0] : void 0;
          var O = toObject(this);
          var sourceLen = lengthOfArrayLike(O);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg));
          return A;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.flat-map.js
  var require_es_array_flat_map = __commonJS({
    "node_modules/core-js/modules/es.array.flat-map.js"() {
      "use strict";
      var $ = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      $({ target: "Array", proto: true }, {
        flatMap: function flatMap(callbackfn) {
          var O = toObject(this);
          var sourceLen = lengthOfArrayLike(O);
          var A;
          aCallable(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          return A;
        }
      });
    }
  });

  // node_modules/core-js/internals/array-for-each.js
  var require_array_for_each = __commonJS({
    "node_modules/core-js/internals/array-for-each.js"(exports2, module2) {
      "use strict";
      var $forEach = require_array_iteration().forEach;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("forEach");
      module2.exports = !STRICT_METHOD ? function forEach2(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }
  });

  // node_modules/core-js/modules/es.array.for-each.js
  var require_es_array_for_each = __commonJS({
    "node_modules/core-js/modules/es.array.for-each.js"() {
      "use strict";
      var $ = require_export();
      var forEach2 = require_array_for_each();
      $({ target: "Array", proto: true, forced: [].forEach != forEach2 }, {
        forEach: forEach2
      });
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      var $ = require_export();
      var $includes = require_array_includes().includes;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/core-js/modules/es.array.index-of.js
  var require_es_array_index_of = __commonJS({
    "node_modules/core-js/modules/es.array.index-of.js"() {
      "use strict";
      var $ = require_export();
      var uncurryThis = require_function_uncurry_this();
      var $IndexOf = require_array_includes().indexOf;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var un$IndexOf = uncurryThis([].indexOf);
      var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict("indexOf");
      $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
        indexOf: function indexOf(searchElement) {
          var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
          return NEGATIVE_ZERO ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
        }
      });
    }
  });

  // node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
      var global2 = require_global();
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var Object2 = global2.Object;
      var ObjectPrototype = Object2.prototype;
      module2.exports = CORRECT_PROTOTYPE_GETTER ? Object2.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO))
          return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof Object2 ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator))
          BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
            IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE)
        IteratorPrototype = {};
      else if (IS_PURE)
        IteratorPrototype = create(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        redefine(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module2.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/internals/set-to-string-tag.js"(exports2, module2) {
      var defineProperty = require_object_define_property().f;
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module2.exports = function(it, TAG, STATIC) {
        if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };
    }
  });

  // node_modules/core-js/internals/create-iterator-constructor.js
  var require_create_iterator_constructor = __commonJS({
    "node_modules/core-js/internals/create-iterator-constructor.js"(exports2, module2) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module2.exports = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js/internals/a-possible-prototype.js"(exports2, module2) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module2.exports = function(argument) {
        if (typeof argument == "object" || isCallable(argument))
          return argument;
        throw TypeError2("Can't set " + String2(argument) + " as a prototype");
      };
    }
  });

  // node_modules/core-js/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-set-prototype-of.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var anObject = require_an_object();
      var aPossiblePrototype = require_a_possible_prototype();
      module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
          setter(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER)
            setter(O, proto);
          else
            O.__proto__ = proto;
          return O;
        };
      }() : void 0);
    }
  });

  // node_modules/core-js/internals/define-iterator.js
  var require_define_iterator = __commonJS({
    "node_modules/core-js/internals/define-iterator.js"(exports2, module2) {
      "use strict";
      var $ = require_export();
      var call = require_function_call();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_create_iterator_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator)
            return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
            return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE)
              Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return call(nativeIterator, this);
            };
          }
        }
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED)
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            }
          else
            $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME] = defaultIterator;
        return methods;
      };
    }
  });

  // node_modules/core-js/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js/modules/es.array.iterator.js"(exports2, module2) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index2 = state.index++;
        if (!target || index2 >= target.length) {
          state.target = void 0;
          return { value: void 0, done: true };
        }
        if (kind == "keys")
          return { value: index2, done: false };
        if (kind == "values")
          return { value: target[index2], done: false };
        return { value: [index2, target[index2]], done: false };
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js/modules/es.array.join.js
  var require_es_array_join = __commonJS({
    "node_modules/core-js/modules/es.array.join.js"() {
      "use strict";
      var $ = require_export();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toIndexedObject = require_to_indexed_object();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var un$Join = uncurryThis([].join);
      var ES3_STRINGS = IndexedObject != Object;
      var STRICT_METHOD = arrayMethodIsStrict("join", ",");
      $({ target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
        join: function join(separator) {
          return un$Join(toIndexedObject(this), separator === void 0 ? "," : separator);
        }
      });
    }
  });

  // node_modules/core-js/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/core-js/internals/function-apply.js"(exports2, module2) {
      var FunctionPrototype = Function.prototype;
      var apply = FunctionPrototype.apply;
      var bind = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      module2.exports = typeof Reflect == "object" && Reflect.apply || (bind ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/core-js/internals/array-last-index-of.js
  var require_array_last_index_of = __commonJS({
    "node_modules/core-js/internals/array-last-index-of.js"(exports2, module2) {
      "use strict";
      var apply = require_function_apply();
      var toIndexedObject = require_to_indexed_object();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var lengthOfArrayLike = require_length_of_array_like();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var min = Math.min;
      var $lastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
      var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
      module2.exports = FORCED ? function lastIndexOf(searchElement) {
        if (NEGATIVE_ZERO)
          return apply($lastIndexOf, this, arguments) || 0;
        var O = toIndexedObject(this);
        var length2 = lengthOfArrayLike(O);
        var index2 = length2 - 1;
        if (arguments.length > 1)
          index2 = min(index2, toIntegerOrInfinity(arguments[1]));
        if (index2 < 0)
          index2 = length2 + index2;
        for (; index2 >= 0; index2--)
          if (index2 in O && O[index2] === searchElement)
            return index2 || 0;
        return -1;
      } : $lastIndexOf;
    }
  });

  // node_modules/core-js/modules/es.array.last-index-of.js
  var require_es_array_last_index_of = __commonJS({
    "node_modules/core-js/modules/es.array.last-index-of.js"() {
      var $ = require_export();
      var lastIndexOf = require_array_last_index_of();
      $({ target: "Array", proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
        lastIndexOf
      });
    }
  });

  // node_modules/core-js/modules/es.array.map.js
  var require_es_array_map = __commonJS({
    "node_modules/core-js/modules/es.array.map.js"() {
      "use strict";
      var $ = require_export();
      var $map = require_array_iteration().map;
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
      $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        map: function map(callbackfn) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js/internals/array-reduce.js"(exports2, module2) {
      var global2 = require_global();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var TypeError2 = global2.TypeError;
      var createMethod = function(IS_RIGHT) {
        return function(that, callbackfn, argumentsLength, memo) {
          aCallable(callbackfn);
          var O = toObject(that);
          var self2 = IndexedObject(O);
          var length2 = lengthOfArrayLike(O);
          var index2 = IS_RIGHT ? length2 - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2)
            while (true) {
              if (index2 in self2) {
                memo = self2[index2];
                index2 += i;
                break;
              }
              index2 += i;
              if (IS_RIGHT ? index2 < 0 : length2 <= index2) {
                throw TypeError2("Reduce of empty array with no initial value");
              }
            }
          for (; IS_RIGHT ? index2 >= 0 : length2 > index2; index2 += i)
            if (index2 in self2) {
              memo = callbackfn(memo, self2[index2], index2, O);
            }
          return memo;
        };
      };
      module2.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
    }
  });

  // node_modules/core-js/internals/engine-is-node.js
  var require_engine_is_node = __commonJS({
    "node_modules/core-js/internals/engine-is-node.js"(exports2, module2) {
      var classof = require_classof_raw();
      var global2 = require_global();
      module2.exports = classof(global2.process) == "process";
    }
  });

  // node_modules/core-js/modules/es.array.reduce.js
  var require_es_array_reduce = __commonJS({
    "node_modules/core-js/modules/es.array.reduce.js"() {
      "use strict";
      var $ = require_export();
      var $reduce = require_array_reduce().left;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_engine_v8_version();
      var IS_NODE = require_engine_is_node();
      var STRICT_METHOD = arrayMethodIsStrict("reduce");
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      $({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
        reduce: function reduce2(callbackfn) {
          var length2 = arguments.length;
          return $reduce(this, callbackfn, length2, length2 > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.reduce-right.js
  var require_es_array_reduce_right = __commonJS({
    "node_modules/core-js/modules/es.array.reduce-right.js"() {
      "use strict";
      var $ = require_export();
      var $reduceRight = require_array_reduce().right;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_engine_v8_version();
      var IS_NODE = require_engine_is_node();
      var STRICT_METHOD = arrayMethodIsStrict("reduceRight");
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      $({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
        reduceRight: function reduceRight(callbackfn) {
          return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.reverse.js
  var require_es_array_reverse = __commonJS({
    "node_modules/core-js/modules/es.array.reverse.js"() {
      "use strict";
      var $ = require_export();
      var uncurryThis = require_function_uncurry_this();
      var isArray = require_is_array();
      var un$Reverse = uncurryThis([].reverse);
      var test = [1, 2];
      $({ target: "Array", proto: true, forced: String(test) === String(test.reverse()) }, {
        reverse: function reverse() {
          if (isArray(this))
            this.length = this.length;
          return un$Reverse(this);
        }
      });
    }
  });

  // node_modules/core-js/internals/array-slice.js
  var require_array_slice = __commonJS({
    "node_modules/core-js/internals/array-slice.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      module2.exports = uncurryThis([].slice);
    }
  });

  // node_modules/core-js/modules/es.array.slice.js
  var require_es_array_slice = __commonJS({
    "node_modules/core-js/modules/es.array.slice.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject = require_is_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIndexedObject = require_to_indexed_object();
      var createProperty = require_create_property();
      var wellKnownSymbol = require_well_known_symbol();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var un$Slice = require_array_slice();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
      var SPECIES = wellKnownSymbol("species");
      var Array2 = global2.Array;
      var max = Math.max;
      $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length2 = lengthOfArrayLike(O);
          var k = toAbsoluteIndex(start, length2);
          var fin = toAbsoluteIndex(end === void 0 ? length2 : end, length2);
          var Constructor, result, n;
          if (isArray(O)) {
            Constructor = O.constructor;
            if (isConstructor(Constructor) && (Constructor === Array2 || isArray(Constructor.prototype))) {
              Constructor = void 0;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null)
                Constructor = void 0;
            }
            if (Constructor === Array2 || Constructor === void 0) {
              return un$Slice(O, k, fin);
            }
          }
          result = new (Constructor === void 0 ? Array2 : Constructor)(max(fin - k, 0));
          for (n = 0; k < fin; k++, n++)
            if (k in O)
              createProperty(result, n, O[k]);
          result.length = n;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.some.js
  var require_es_array_some = __commonJS({
    "node_modules/core-js/modules/es.array.some.js"() {
      "use strict";
      var $ = require_export();
      var $some = require_array_iteration().some;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("some");
      $({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
        some: function some(callbackfn) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js/internals/to-string.js"(exports2, module2) {
      var global2 = require_global();
      var classof = require_classof();
      var String2 = global2.String;
      module2.exports = function(argument) {
        if (classof(argument) === "Symbol")
          throw TypeError("Cannot convert a Symbol value to a string");
        return String2(argument);
      };
    }
  });

  // node_modules/core-js/internals/array-sort.js
  var require_array_sort = __commonJS({
    "node_modules/core-js/internals/array-sort.js"(exports2, module2) {
      var arraySlice = require_array_slice();
      var floor = Math.floor;
      var mergeSort = function(array, comparefn) {
        var length2 = array.length;
        var middle = floor(length2 / 2);
        return length2 < 8 ? insertionSort(array, comparefn) : merge3(
          array,
          mergeSort(arraySlice(array, 0, middle), comparefn),
          mergeSort(arraySlice(array, middle), comparefn),
          comparefn
        );
      };
      var insertionSort = function(array, comparefn) {
        var length2 = array.length;
        var i = 1;
        var element, j;
        while (i < length2) {
          j = i;
          element = array[i];
          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }
          if (j !== i++)
            array[j] = element;
        }
        return array;
      };
      var merge3 = function(array, left, right, comparefn) {
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
        return array;
      };
      module2.exports = mergeSort;
    }
  });

  // node_modules/core-js/internals/engine-ff-version.js
  var require_engine_ff_version = __commonJS({
    "node_modules/core-js/internals/engine-ff-version.js"(exports2, module2) {
      var userAgent = require_engine_user_agent();
      var firefox = userAgent.match(/firefox\/(\d+)/i);
      module2.exports = !!firefox && +firefox[1];
    }
  });

  // node_modules/core-js/internals/engine-is-ie-or-edge.js
  var require_engine_is_ie_or_edge = __commonJS({
    "node_modules/core-js/internals/engine-is-ie-or-edge.js"(exports2, module2) {
      var UA = require_engine_user_agent();
      module2.exports = /MSIE|Trident/.test(UA);
    }
  });

  // node_modules/core-js/internals/engine-webkit-version.js
  var require_engine_webkit_version = __commonJS({
    "node_modules/core-js/internals/engine-webkit-version.js"(exports2, module2) {
      var userAgent = require_engine_user_agent();
      var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
      module2.exports = !!webkit && +webkit[1];
    }
  });

  // node_modules/core-js/modules/es.array.sort.js
  var require_es_array_sort = __commonJS({
    "node_modules/core-js/modules/es.array.sort.js"() {
      "use strict";
      var $ = require_export();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var toString = require_to_string();
      var fails = require_fails();
      var internalSort = require_array_sort();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var FF = require_engine_ff_version();
      var IE_OR_EDGE = require_engine_is_ie_or_edge();
      var V8 = require_engine_v8_version();
      var WEBKIT = require_engine_webkit_version();
      var test = [];
      var un$Sort = uncurryThis(test.sort);
      var push = uncurryThis(test.push);
      var FAILS_ON_UNDEFINED = fails(function() {
        test.sort(void 0);
      });
      var FAILS_ON_NULL = fails(function() {
        test.sort(null);
      });
      var STRICT_METHOD = arrayMethodIsStrict("sort");
      var STABLE_SORT = !fails(function() {
        if (V8)
          return V8 < 70;
        if (FF && FF > 3)
          return;
        if (IE_OR_EDGE)
          return true;
        if (WEBKIT)
          return WEBKIT < 603;
        var result = "";
        var code, chr, value2, index2;
        for (code = 65; code < 76; code++) {
          chr = String.fromCharCode(code);
          switch (code) {
            case 66:
            case 69:
            case 70:
            case 72:
              value2 = 3;
              break;
            case 68:
            case 71:
              value2 = 4;
              break;
            default:
              value2 = 2;
          }
          for (index2 = 0; index2 < 47; index2++) {
            test.push({ k: chr + index2, v: value2 });
          }
        }
        test.sort(function(a, b) {
          return b.v - a.v;
        });
        for (index2 = 0; index2 < test.length; index2++) {
          chr = test[index2].k.charAt(0);
          if (result.charAt(result.length - 1) !== chr)
            result += chr;
        }
        return result !== "DGBEFHACIJK";
      });
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
      var getSortCompare = function(comparefn) {
        return function(x, y) {
          if (y === void 0)
            return -1;
          if (x === void 0)
            return 1;
          if (comparefn !== void 0)
            return +comparefn(x, y) || 0;
          return toString(x) > toString(y) ? 1 : -1;
        };
      };
      $({ target: "Array", proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          if (comparefn !== void 0)
            aCallable(comparefn);
          var array = toObject(this);
          if (STABLE_SORT)
            return comparefn === void 0 ? un$Sort(array) : un$Sort(array, comparefn);
          var items = [];
          var arrayLength = lengthOfArrayLike(array);
          var itemsLength, index2;
          for (index2 = 0; index2 < arrayLength; index2++) {
            if (index2 in array)
              push(items, array[index2]);
          }
          internalSort(items, getSortCompare(comparefn));
          itemsLength = items.length;
          index2 = 0;
          while (index2 < itemsLength)
            array[index2] = items[index2++];
          while (index2 < arrayLength)
            delete array[index2++];
          return array;
        }
      });
    }
  });

  // node_modules/core-js/internals/set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/internals/set-species.js"(exports2, module2) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var definePropertyModule = require_object_define_property();
      var wellKnownSymbol = require_well_known_symbol();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
        }
      };
    }
  });

  // node_modules/core-js/modules/es.array.species.js
  var require_es_array_species = __commonJS({
    "node_modules/core-js/modules/es.array.species.js"() {
      var setSpecies = require_set_species();
      setSpecies("Array");
    }
  });

  // node_modules/core-js/modules/es.array.splice.js
  var require_es_array_splice = __commonJS({
    "node_modules/core-js/modules/es.array.splice.js"() {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var toAbsoluteIndex = require_to_absolute_index();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var lengthOfArrayLike = require_length_of_array_like();
      var toObject = require_to_object();
      var arraySpeciesCreate = require_array_species_create();
      var createProperty = require_create_property();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
      var TypeError2 = global2.TypeError;
      var max = Math.max;
      var min = Math.min;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
      $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        splice: function splice(start, deleteCount) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from, to;
          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
          }
          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError2(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }
          A = arraySpeciesCreate(O, actualDeleteCount);
          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O)
              createProperty(A, k, O[from]);
          }
          A.length = actualDeleteCount;
          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O)
                O[to] = O[from];
              else
                delete O[to];
            }
            for (k = len; k > len - actualDeleteCount + insertCount; k--)
              delete O[k - 1];
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O)
                O[to] = O[from];
              else
                delete O[to];
            }
          }
          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }
          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array.unscopables.flat.js
  var require_es_array_unscopables_flat = __commonJS({
    "node_modules/core-js/modules/es.array.unscopables.flat.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flat");
    }
  });

  // node_modules/core-js/modules/es.array.unscopables.flat-map.js
  var require_es_array_unscopables_flat_map = __commonJS({
    "node_modules/core-js/modules/es.array.unscopables.flat-map.js"() {
      var addToUnscopables = require_add_to_unscopables();
      addToUnscopables("flatMap");
    }
  });

  // node_modules/core-js/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/core-js/internals/object-to-string.js"(exports2, module2) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/core-js/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/core-js/modules/es.object.to-string.js"() {
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var redefine = require_redefine();
      var toString = require_object_to_string();
      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, "toString", toString, { unsafe: true });
      }
    }
  });

  // node_modules/core-js/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js/internals/string-multibyte.js"(exports2, module2) {
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var stringSlice = uncurryThis("".slice);
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S = toString(requireObjectCoercible($this));
          var position2 = toIntegerOrInfinity(pos);
          var size2 = S.length;
          var first, second;
          if (position2 < 0 || position2 >= size2)
            return CONVERT_TO_STRING ? "" : void 0;
          first = charCodeAt(S, position2);
          return first < 55296 || first > 56319 || position2 + 1 === size2 || (second = charCodeAt(S, position2 + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position2) : first : CONVERT_TO_STRING ? stringSlice(S, position2, position2 + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module2.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_define_iterator();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index2 = state.index;
        var point;
        if (index2 >= string.length)
          return { value: void 0, done: true };
        point = charAt(string, index2);
        state.index += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js/internals/path.js"(exports2, module2) {
      var global2 = require_global();
      module2.exports = global2;
    }
  });

  // node_modules/core-js/es/array/index.js
  var require_array = __commonJS({
    "node_modules/core-js/es/array/index.js"(exports2, module2) {
      require_es_array_from();
      require_es_array_is_array();
      require_es_array_of();
      require_es_array_at();
      require_es_array_concat();
      require_es_array_copy_within();
      require_es_array_every();
      require_es_array_fill();
      require_es_array_filter();
      require_es_array_find();
      require_es_array_find_index();
      require_es_array_flat();
      require_es_array_flat_map();
      require_es_array_for_each();
      require_es_array_includes();
      require_es_array_index_of();
      require_es_array_iterator();
      require_es_array_join();
      require_es_array_last_index_of();
      require_es_array_map();
      require_es_array_reduce();
      require_es_array_reduce_right();
      require_es_array_reverse();
      require_es_array_slice();
      require_es_array_some();
      require_es_array_sort();
      require_es_array_species();
      require_es_array_splice();
      require_es_array_unscopables_flat();
      require_es_array_unscopables_flat_map();
      require_es_object_to_string();
      require_es_string_iterator();
      var path = require_path();
      module2.exports = path.Array;
    }
  });

  // node_modules/core-js/stable/array/index.js
  var require_array2 = __commonJS({
    "node_modules/core-js/stable/array/index.js"(exports2, module2) {
      var parent2 = require_array();
      module2.exports = parent2;
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names-external.js
  var require_object_get_own_property_names_external = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports2, module2) {
      var classof = require_classof_raw();
      var toIndexedObject = require_to_indexed_object();
      var $getOwnPropertyNames = require_object_get_own_property_names().f;
      var arraySlice = require_array_slice();
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return $getOwnPropertyNames(it);
        } catch (error) {
          return arraySlice(windowNames);
        }
      };
      module2.exports.f = function getOwnPropertyNames(it) {
        return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
      };
    }
  });

  // node_modules/core-js/internals/freezing.js
  var require_freezing = __commonJS({
    "node_modules/core-js/internals/freezing.js"(exports2, module2) {
      var fails = require_fails();
      module2.exports = !fails(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }
  });

  // node_modules/core-js/internals/internal-metadata.js
  var require_internal_metadata = __commonJS({
    "node_modules/core-js/internals/internal-metadata.js"(exports2, module2) {
      var $ = require_export();
      var uncurryThis = require_function_uncurry_this();
      var hiddenKeys = require_hidden_keys();
      var isObject = require_is_object();
      var hasOwn = require_has_own_property();
      var defineProperty = require_object_define_property().f;
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
      var uid = require_uid();
      var FREEZING = require_freezing();
      var REQUIRED = false;
      var METADATA = uid("meta");
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var setMetadata = function(it) {
        defineProperty(it, METADATA, { value: {
          objectID: "O" + id++,
          // object ID
          weakData: {}
          // weak collections IDs
        } });
      };
      var fastKey = function(it, create) {
        if (!isObject(it))
          return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!hasOwn(it, METADATA)) {
          if (!isExtensible(it))
            return "F";
          if (!create)
            return "E";
          setMetadata(it);
        }
        return it[METADATA].objectID;
      };
      var getWeakData = function(it, create) {
        if (!hasOwn(it, METADATA)) {
          if (!isExtensible(it))
            return true;
          if (!create)
            return false;
          setMetadata(it);
        }
        return it[METADATA].weakData;
      };
      var onFreeze = function(it) {
        if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
          setMetadata(it);
        return it;
      };
      var enable = function() {
        meta.enable = function() {
        };
        REQUIRED = true;
        var getOwnPropertyNames = getOwnPropertyNamesModule.f;
        var splice = uncurryThis([].splice);
        var test = {};
        test[METADATA] = 1;
        if (getOwnPropertyNames(test).length) {
          getOwnPropertyNamesModule.f = function(it) {
            var result = getOwnPropertyNames(it);
            for (var i = 0, length2 = result.length; i < length2; i++) {
              if (result[i] === METADATA) {
                splice(result, i, 1);
                break;
              }
            }
            return result;
          };
          $({ target: "Object", stat: true, forced: true }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
          });
        }
      };
      var meta = module2.exports = {
        enable,
        fastKey,
        getWeakData,
        onFreeze
      };
      hiddenKeys[METADATA] = true;
    }
  });

  // node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js/internals/iterate.js"(exports2, module2) {
      var global2 = require_global();
      var bind = require_function_bind_context();
      var call = require_function_call();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like();
      var isPrototypeOf = require_object_is_prototype_of();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var iteratorClose = require_iterator_close();
      var TypeError2 = global2.TypeError;
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var ResultPrototype = Result.prototype;
      module2.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that);
        var iterator, iterFn, index2, length2, result, next, step;
        var stop = function(condition) {
          if (iterator)
            iteratorClose(iterator, "normal", condition);
          return new Result(true, condition);
        };
        var callFn = function(value2) {
          if (AS_ENTRIES) {
            anObject(value2);
            return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
          }
          return INTERRUPTED ? fn(value2, stop) : fn(value2);
        };
        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn)
            throw TypeError2(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index2 = 0, length2 = lengthOfArrayLike(iterable); length2 > index2; index2++) {
              result = callFn(iterable[index2]);
              if (result && isPrototypeOf(ResultPrototype, result))
                return result;
            }
            return new Result(false);
          }
          iterator = getIterator(iterable, iterFn);
        }
        next = iterator.next;
        while (!(step = call(next, iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
            return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/internals/an-instance.js"(exports2, module2) {
      var global2 = require_global();
      var isPrototypeOf = require_object_is_prototype_of();
      var TypeError2 = global2.TypeError;
      module2.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it))
          return it;
        throw TypeError2("Incorrect invocation");
      };
    }
  });

  // node_modules/core-js/internals/inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/internals/inherit-if-required.js"(exports2, module2) {
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var setPrototypeOf = require_object_set_prototype_of();
      module2.exports = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
        )
          setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
    }
  });

  // node_modules/core-js/internals/collection.js
  var require_collection = __commonJS({
    "node_modules/core-js/internals/collection.js"(exports2, module2) {
      "use strict";
      var $ = require_export();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isForced = require_is_forced();
      var redefine = require_redefine();
      var InternalMetadataModule = require_internal_metadata();
      var iterate = require_iterate();
      var anInstance = require_an_instance();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var fails = require_fails();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var setToStringTag = require_set_to_string_tag();
      var inheritIfRequired = require_inherit_if_required();
      module2.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
        var ADDER = IS_MAP ? "set" : "add";
        var NativeConstructor = global2[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};
        var fixMethod = function(KEY) {
          var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
          redefine(
            NativePrototype,
            KEY,
            KEY == "add" ? function add2(value2) {
              uncurriedNativeMethod(this, value2 === 0 ? 0 : value2);
              return this;
            } : KEY == "delete" ? function(key2) {
              return IS_WEAK && !isObject(key2) ? false : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
            } : KEY == "get" ? function get3(key2) {
              return IS_WEAK && !isObject(key2) ? void 0 : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
            } : KEY == "has" ? function has(key2) {
              return IS_WEAK && !isObject(key2) ? false : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
            } : function set3(key2, value2) {
              uncurriedNativeMethod(this, key2 === 0 ? 0 : key2, value2);
              return this;
            }
          );
        };
        var REPLACE = isForced(
          CONSTRUCTOR_NAME,
          !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
            new NativeConstructor().entries().next();
          }))
        );
        if (REPLACE) {
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.enable();
        } else if (isForced(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor();
          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
          });
          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
            new NativeConstructor(iterable);
          });
          var BUGGY_ZERO = !IS_WEAK && fails(function() {
            var $instance = new NativeConstructor();
            var index2 = 5;
            while (index2--)
              $instance[ADDER](index2, index2);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function(dummy, iterable) {
              anInstance(dummy, NativePrototype);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != void 0)
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
          }
          if (BUGGY_ZERO || HASNT_CHAINING)
            fixMethod(ADDER);
          if (IS_WEAK && NativePrototype.clear)
            delete NativePrototype.clear;
        }
        exported[CONSTRUCTOR_NAME] = Constructor;
        $({ global: true, forced: Constructor != NativeConstructor }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK)
          common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
    }
  });

  // node_modules/core-js/internals/redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js/internals/redefine-all.js"(exports2, module2) {
      var redefine = require_redefine();
      module2.exports = function(target, src, options) {
        for (var key2 in src)
          redefine(target, key2, src[key2], options);
        return target;
      };
    }
  });

  // node_modules/core-js/internals/collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js/internals/collection-strong.js"(exports2, module2) {
      "use strict";
      var defineProperty = require_object_define_property().f;
      var create = require_object_create();
      var redefineAll = require_redefine_all();
      var bind = require_function_bind_context();
      var anInstance = require_an_instance();
      var iterate = require_iterate();
      var defineIterator = require_define_iterator();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_internal_metadata().fastKey;
      var InternalStateModule = require_internal_state();
      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module2.exports = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var Constructor = wrapper(function(that, iterable) {
            anInstance(that, Prototype);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create(null),
              first: void 0,
              last: void 0,
              size: 0
            });
            if (!DESCRIPTORS)
              that.size = 0;
            if (iterable != void 0)
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
          });
          var Prototype = Constructor.prototype;
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var define2 = function(that, key2, value2) {
            var state = getInternalState(that);
            var entry = getEntry(that, key2);
            var previous, index2;
            if (entry) {
              entry.value = value2;
            } else {
              state.last = entry = {
                index: index2 = fastKey(key2, true),
                key: key2,
                value: value2,
                previous: previous = state.last,
                next: void 0,
                removed: false
              };
              if (!state.first)
                state.first = entry;
              if (previous)
                previous.next = entry;
              if (DESCRIPTORS)
                state.size++;
              else
                that.size++;
              if (index2 !== "F")
                state.index[index2] = entry;
            }
            return that;
          };
          var getEntry = function(that, key2) {
            var state = getInternalState(that);
            var index2 = fastKey(key2);
            var entry;
            if (index2 !== "F")
              return state.index[index2];
            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key2)
                return entry;
            }
          };
          redefineAll(Prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data2 = state.index;
              var entry = state.first;
              while (entry) {
                entry.removed = true;
                if (entry.previous)
                  entry.previous = entry.previous.next = void 0;
                delete data2[entry.index];
                entry = entry.next;
              }
              state.first = state.last = void 0;
              if (DESCRIPTORS)
                state.size = 0;
              else
                that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            "delete": function(key2) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key2);
              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev)
                  prev.next = next;
                if (next)
                  next.previous = prev;
                if (state.first == entry)
                  state.first = next;
                if (state.last == entry)
                  state.last = prev;
                if (DESCRIPTORS)
                  state.size--;
                else
                  that.size--;
              }
              return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach2(callbackfn) {
              var state = getInternalState(this);
              var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
              var entry;
              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this);
                while (entry && entry.removed)
                  entry = entry.previous;
              }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key2) {
              return !!getEntry(this, key2);
            }
          });
          redefineAll(Prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get3(key2) {
              var entry = getEntry(this, key2);
              return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set3(key2, value2) {
              return define2(this, key2 === 0 ? 0 : key2, value2);
            }
          } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add2(value2) {
              return define2(this, value2 = value2 === 0 ? 0 : value2, value2);
            }
          });
          if (DESCRIPTORS)
            defineProperty(Prototype, "size", {
              get: function() {
                return getInternalState(this).size;
              }
            });
          return Constructor;
        },
        setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
          defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind,
              last: void 0
            });
          }, function() {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last;
            while (entry && entry.removed)
              entry = entry.previous;
            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              state.target = void 0;
              return { value: void 0, done: true };
            }
            if (kind == "keys")
              return { value: entry.key, done: false };
            if (kind == "values")
              return { value: entry.value, done: false };
            return { value: [entry.key, entry.value], done: false };
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(CONSTRUCTOR_NAME);
        }
      };
    }
  });

  // node_modules/core-js/modules/es.map.js
  var require_es_map = __commonJS({
    "node_modules/core-js/modules/es.map.js"() {
      "use strict";
      var collection = require_collection();
      var collectionStrong = require_collection_strong();
      collection("Map", function(init2) {
        return function Map2() {
          return init2(this, arguments.length ? arguments[0] : void 0);
        };
      }, collectionStrong);
    }
  });

  // node_modules/core-js/internals/native-promise-constructor.js
  var require_native_promise_constructor = __commonJS({
    "node_modules/core-js/internals/native-promise-constructor.js"(exports2, module2) {
      var global2 = require_global();
      module2.exports = global2.Promise;
    }
  });

  // node_modules/core-js/internals/a-constructor.js
  var require_a_constructor = __commonJS({
    "node_modules/core-js/internals/a-constructor.js"(exports2, module2) {
      var global2 = require_global();
      var isConstructor = require_is_constructor();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module2.exports = function(argument) {
        if (isConstructor(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a constructor");
      };
    }
  });

  // node_modules/core-js/internals/species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/core-js/internals/species-constructor.js"(exports2, module2) {
      var anObject = require_an_object();
      var aConstructor = require_a_constructor();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      module2.exports = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aConstructor(S);
      };
    }
  });

  // node_modules/core-js/internals/engine-is-ios.js
  var require_engine_is_ios = __commonJS({
    "node_modules/core-js/internals/engine-is-ios.js"(exports2, module2) {
      var userAgent = require_engine_user_agent();
      module2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/task.js
  var require_task = __commonJS({
    "node_modules/core-js/internals/task.js"(exports2, module2) {
      var global2 = require_global();
      var apply = require_function_apply();
      var bind = require_function_bind_context();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var fails = require_fails();
      var html = require_html();
      var arraySlice = require_array_slice();
      var createElement = require_document_create_element();
      var IS_IOS = require_engine_is_ios();
      var IS_NODE = require_engine_is_node();
      var set3 = global2.setImmediate;
      var clear = global2.clearImmediate;
      var process2 = global2.process;
      var Dispatch = global2.Dispatch;
      var Function2 = global2.Function;
      var MessageChannel = global2.MessageChannel;
      var String2 = global2.String;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var location;
      var defer;
      var channel;
      var port;
      try {
        location = global2.location;
      } catch (error) {
      }
      var run = function(id) {
        if (hasOwn(queue, id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var runner = function(id) {
        return function() {
          run(id);
        };
      };
      var listener = function(event) {
        run(event.data);
      };
      var post = function(id) {
        global2.postMessage(String2(id), location.protocol + "//" + location.host);
      };
      if (!set3 || !clear) {
        set3 = function setImmediate(fn) {
          var args = arraySlice(arguments, 1);
          queue[++counter] = function() {
            apply(isCallable(fn) ? fn : Function2(fn), void 0, args);
          };
          defer(counter);
          return counter;
        };
        clear = function clearImmediate(id) {
          delete queue[id];
        };
        if (IS_NODE) {
          defer = function(id) {
            process2.nextTick(runner(id));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(runner(id));
          };
        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port);
        } else if (global2.addEventListener && isCallable(global2.postMessage) && !global2.importScripts && location && location.protocol !== "file:" && !fails(post)) {
          defer = post;
          global2.addEventListener("message", listener, false);
        } else if (ONREADYSTATECHANGE in createElement("script")) {
          defer = function(id) {
            html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(runner(id), 0);
          };
        }
      }
      module2.exports = {
        set: set3,
        clear
      };
    }
  });

  // node_modules/core-js/internals/engine-is-ios-pebble.js
  var require_engine_is_ios_pebble = __commonJS({
    "node_modules/core-js/internals/engine-is-ios-pebble.js"(exports2, module2) {
      var userAgent = require_engine_user_agent();
      var global2 = require_global();
      module2.exports = /ipad|iphone|ipod/i.test(userAgent) && global2.Pebble !== void 0;
    }
  });

  // node_modules/core-js/internals/engine-is-webos-webkit.js
  var require_engine_is_webos_webkit = __commonJS({
    "node_modules/core-js/internals/engine-is-webos-webkit.js"(exports2, module2) {
      var userAgent = require_engine_user_agent();
      module2.exports = /web0s(?!.*chrome)/i.test(userAgent);
    }
  });

  // node_modules/core-js/internals/microtask.js
  var require_microtask = __commonJS({
    "node_modules/core-js/internals/microtask.js"(exports2, module2) {
      var global2 = require_global();
      var bind = require_function_bind_context();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var macrotask = require_task().set;
      var IS_IOS = require_engine_is_ios();
      var IS_IOS_PEBBLE = require_engine_is_ios_pebble();
      var IS_WEBOS_WEBKIT = require_engine_is_webos_webkit();
      var IS_NODE = require_engine_is_node();
      var MutationObserver = global2.MutationObserver || global2.WebKitMutationObserver;
      var document2 = global2.document;
      var process2 = global2.process;
      var Promise2 = global2.Promise;
      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global2, "queueMicrotask");
      var queueMicrotask2 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush;
      var head;
      var last;
      var notify;
      var toggle;
      var node;
      var promise;
      var then;
      if (!queueMicrotask2) {
        flush = function() {
          var parent2, fn;
          if (IS_NODE && (parent2 = process2.domain))
            parent2.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (error) {
              if (head)
                notify();
              else
                last = void 0;
              throw error;
            }
          }
          last = void 0;
          if (parent2)
            parent2.enter();
        };
        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
          toggle = true;
          node = document2.createTextNode("");
          new MutationObserver(flush).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
          promise = Promise2.resolve(void 0);
          promise.constructor = Promise2;
          then = bind(promise.then, promise);
          notify = function() {
            then(flush);
          };
        } else if (IS_NODE) {
          notify = function() {
            process2.nextTick(flush);
          };
        } else {
          macrotask = bind(macrotask, global2);
          notify = function() {
            macrotask(flush);
          };
        }
      }
      module2.exports = queueMicrotask2 || function(fn) {
        var task = { fn, next: void 0 };
        if (last)
          last.next = task;
        if (!head) {
          head = task;
          notify();
        }
        last = task;
      };
    }
  });

  // node_modules/core-js/internals/new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/core-js/internals/new-promise-capability.js"(exports2, module2) {
      "use strict";
      var aCallable = require_a_callable();
      var PromiseCapability = function(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0)
            throw TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aCallable(resolve);
        this.reject = aCallable(reject);
      };
      module2.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/core-js/internals/promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/core-js/internals/promise-resolve.js"(exports2, module2) {
      var anObject = require_an_object();
      var isObject = require_is_object();
      var newPromiseCapability = require_new_promise_capability();
      module2.exports = function(C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C)
          return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
    }
  });

  // node_modules/core-js/internals/host-report-errors.js
  var require_host_report_errors = __commonJS({
    "node_modules/core-js/internals/host-report-errors.js"(exports2, module2) {
      var global2 = require_global();
      module2.exports = function(a, b) {
        var console2 = global2.console;
        if (console2 && console2.error) {
          arguments.length == 1 ? console2.error(a) : console2.error(a, b);
        }
      };
    }
  });

  // node_modules/core-js/internals/perform.js
  var require_perform = __commonJS({
    "node_modules/core-js/internals/perform.js"(exports2, module2) {
      module2.exports = function(exec) {
        try {
          return { error: false, value: exec() };
        } catch (error) {
          return { error: true, value: error };
        }
      };
    }
  });

  // node_modules/core-js/internals/engine-is-browser.js
  var require_engine_is_browser = __commonJS({
    "node_modules/core-js/internals/engine-is-browser.js"(exports2, module2) {
      module2.exports = typeof window == "object";
    }
  });

  // node_modules/core-js/modules/es.promise.js
  var require_es_promise = __commonJS({
    "node_modules/core-js/modules/es.promise.js"() {
      "use strict";
      var $ = require_export();
      var IS_PURE = require_is_pure();
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var call = require_function_call();
      var NativePromise = require_native_promise_constructor();
      var redefine = require_redefine();
      var redefineAll = require_redefine_all();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var setSpecies = require_set_species();
      var aCallable = require_a_callable();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var anInstance = require_an_instance();
      var inspectSource = require_inspect_source();
      var iterate = require_iterate();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var speciesConstructor = require_species_constructor();
      var task = require_task().set;
      var microtask = require_microtask();
      var promiseResolve = require_promise_resolve();
      var hostReportErrors = require_host_report_errors();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var InternalStateModule = require_internal_state();
      var isForced = require_is_forced();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_BROWSER = require_engine_is_browser();
      var IS_NODE = require_engine_is_node();
      var V8_VERSION = require_engine_v8_version();
      var SPECIES = wellKnownSymbol("species");
      var PROMISE = "Promise";
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var NativePromisePrototype = NativePromise && NativePromise.prototype;
      var PromiseConstructor = NativePromise;
      var PromisePrototype = NativePromisePrototype;
      var TypeError2 = global2.TypeError;
      var document2 = global2.document;
      var process2 = global2.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document2 && document2.createEvent && global2.dispatchEvent);
      var NATIVE_REJECTION_EVENT = isCallable(global2.PromiseRejectionEvent);
      var UNHANDLED_REJECTION = "unhandledrejection";
      var REJECTION_HANDLED = "rejectionhandled";
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var SUBCLASSING = false;
      var Internal;
      var OwnPromiseCapability;
      var PromiseWrapper;
      var nativeThen;
      var FORCED = isForced(PROMISE, function() {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
          return true;
        if (IS_PURE && !PromisePrototype["finally"])
          return true;
        if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE))
          return false;
        var promise = new PromiseConstructor(function(resolve) {
          resolve(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
        return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
      });
      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
        PromiseConstructor.all(iterable)["catch"](function() {
        });
      });
      var isThenable = function(it) {
        var then;
        return isObject(it) && isCallable(then = it.then) ? then : false;
      };
      var notify = function(state, isReject) {
        if (state.notified)
          return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function() {
          var value2 = state.value;
          var ok = state.state == FULFILLED;
          var index2 = 0;
          while (chain.length > index2) {
            var reaction = chain[index2++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED)
                    onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }
                if (handler === true)
                  result = value2;
                else {
                  if (domain)
                    domain.enter();
                  result = handler(value2);
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError2("Promise-chain cycle"));
                } else if (then = isThenable(result)) {
                  call(then, result, resolve, reject);
                } else
                  resolve(result);
              } else
                reject(value2);
            } catch (error) {
              if (domain && !exited)
                domain.exit();
              reject(error);
            }
          }
          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection)
            onUnhandled(state);
        });
      };
      var dispatchEvent = function(name2, promise, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
          event = document2.createEvent("Event");
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name2, false, true);
          global2.dispatchEvent(event);
        } else
          event = { promise, reason };
        if (!NATIVE_REJECTION_EVENT && (handler = global2["on" + name2]))
          handler(event);
        else if (name2 === UNHANDLED_REJECTION)
          hostReportErrors("Unhandled promise rejection", reason);
      };
      var onUnhandled = function(state) {
        call(task, global2, function() {
          var promise = state.facade;
          var value2 = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;
          if (IS_UNHANDLED) {
            result = perform(function() {
              if (IS_NODE) {
                process2.emit("unhandledRejection", value2, promise);
              } else
                dispatchEvent(UNHANDLED_REJECTION, promise, value2);
            });
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error)
              throw result.value;
          }
        });
      };
      var isUnhandled = function(state) {
        return state.rejection !== HANDLED && !state.parent;
      };
      var onHandleUnhandled = function(state) {
        call(task, global2, function() {
          var promise = state.facade;
          if (IS_NODE) {
            process2.emit("rejectionHandled", promise);
          } else
            dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };
      var bind = function(fn, state, unwrap) {
        return function(value2) {
          fn(state, value2, unwrap);
        };
      };
      var internalReject = function(state, value2, unwrap) {
        if (state.done)
          return;
        state.done = true;
        if (unwrap)
          state = unwrap;
        state.value = value2;
        state.state = REJECTED;
        notify(state, true);
      };
      var internalResolve = function(state, value2, unwrap) {
        if (state.done)
          return;
        state.done = true;
        if (unwrap)
          state = unwrap;
        try {
          if (state.facade === value2)
            throw TypeError2("Promise can't be resolved itself");
          var then = isThenable(value2);
          if (then) {
            microtask(function() {
              var wrapper = { done: false };
              try {
                call(
                  then,
                  value2,
                  bind(internalResolve, wrapper, state),
                  bind(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value2;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({ done: false }, error, state);
        }
      };
      if (FORCED) {
        PromiseConstructor = function Promise2(executor) {
          anInstance(this, PromisePrototype);
          aCallable(executor);
          call(Internal, this);
          var state = getInternalState(this);
          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };
        PromisePrototype = PromiseConstructor.prototype;
        Internal = function Promise2(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: void 0
          });
        };
        Internal.prototype = redefineAll(PromisePrototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reactions = state.reactions;
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
            reaction.fail = isCallable(onRejected) && onRejected;
            reaction.domain = IS_NODE ? process2.domain : void 0;
            state.parent = true;
            reactions[reactions.length] = reaction;
            if (state.state != PENDING)
              notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          "catch": function(onRejected) {
            return this.then(void 0, onRejected);
          }
        });
        OwnPromiseCapability = function() {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
        if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;
          if (!SUBCLASSING) {
            redefine(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve, reject) {
                call(nativeThen, that, resolve, reject);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
            redefine(NativePromisePrototype, "catch", PromisePrototype["catch"], { unsafe: true });
          }
          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
          }
          if (setPrototypeOf) {
            setPrototypeOf(NativePromisePrototype, PromisePrototype);
          }
        }
      }
      $({ global: true, wrap: true, forced: FORCED }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
      PromiseWrapper = getBuiltIn(PROMISE);
      $({ target: PROMISE, stat: true, forced: FORCED }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          call(capability.reject, void 0, r);
          return capability.promise;
        }
      });
      $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });
      $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function(promise) {
              var index2 = counter++;
              var alreadyCalled = false;
              remaining++;
              call($promiseResolve, C, promise).then(function(value2) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                values[index2] = value2;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error)
            reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function() {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function(promise) {
              call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error)
            reject(result.value);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/internals/async-iterator-prototype.js
  var require_async_iterator_prototype = __commonJS({
    "node_modules/core-js/internals/async-iterator-prototype.js"(exports2, module2) {
      var global2 = require_global();
      var shared = require_shared_store();
      var isCallable = require_is_callable();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var redefine = require_redefine();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var USE_FUNCTION_CONSTRUCTOR = "USE_FUNCTION_CONSTRUCTOR";
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      var AsyncIterator = global2.AsyncIterator;
      var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
      var AsyncIteratorPrototype;
      var prototype;
      if (PassedAsyncIteratorPrototype) {
        AsyncIteratorPrototype = PassedAsyncIteratorPrototype;
      } else if (isCallable(AsyncIterator)) {
        AsyncIteratorPrototype = AsyncIterator.prototype;
      } else if (shared[USE_FUNCTION_CONSTRUCTOR] || global2[USE_FUNCTION_CONSTRUCTOR]) {
        try {
          prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function("return async function*(){}()")())));
          if (getPrototypeOf(prototype) === Object.prototype)
            AsyncIteratorPrototype = prototype;
        } catch (error) {
        }
      }
      if (!AsyncIteratorPrototype)
        AsyncIteratorPrototype = {};
      else if (IS_PURE)
        AsyncIteratorPrototype = create(AsyncIteratorPrototype);
      if (!isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR])) {
        redefine(AsyncIteratorPrototype, ASYNC_ITERATOR, function() {
          return this;
        });
      }
      module2.exports = AsyncIteratorPrototype;
    }
  });

  // node_modules/core-js/internals/async-from-sync-iterator.js
  var require_async_from_sync_iterator = __commonJS({
    "node_modules/core-js/internals/async-from-sync-iterator.js"(exports2, module2) {
      "use strict";
      var apply = require_function_apply();
      var anObject = require_an_object();
      var create = require_object_create();
      var getMethod = require_get_method();
      var redefineAll = require_redefine_all();
      var InternalStateModule = require_internal_state();
      var getBuiltIn = require_get_built_in();
      var AsyncIteratorPrototype = require_async_iterator_prototype();
      var Promise2 = getBuiltIn("Promise");
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.get;
      var asyncFromSyncIteratorContinuation = function(result, resolve, reject) {
        var done = result.done;
        Promise2.resolve(result.value).then(function(value2) {
          resolve({ done, value: value2 });
        }, reject);
      };
      var AsyncFromSyncIterator = function AsyncIterator(iterator) {
        setInternalState(this, {
          iterator: anObject(iterator),
          next: iterator.next
        });
      };
      AsyncFromSyncIterator.prototype = redefineAll(create(AsyncIteratorPrototype), {
        next: function next(arg) {
          var state = getInternalState(this);
          var hasArg = !!arguments.length;
          return new Promise2(function(resolve, reject) {
            var result = anObject(apply(state.next, state.iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve, reject);
          });
        },
        "return": function(arg) {
          var iterator = getInternalState(this).iterator;
          var hasArg = !!arguments.length;
          return new Promise2(function(resolve, reject) {
            var $return = getMethod(iterator, "return");
            if ($return === void 0)
              return resolve({ done: true, value: arg });
            var result = anObject(apply($return, iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve, reject);
          });
        },
        "throw": function(arg) {
          var iterator = getInternalState(this).iterator;
          var hasArg = !!arguments.length;
          return new Promise2(function(resolve, reject) {
            var $throw = getMethod(iterator, "throw");
            if ($throw === void 0)
              return reject(arg);
            var result = anObject(apply($throw, iterator, hasArg ? [arg] : []));
            asyncFromSyncIteratorContinuation(result, resolve, reject);
          });
        }
      });
      module2.exports = AsyncFromSyncIterator;
    }
  });

  // node_modules/core-js/internals/get-async-iterator.js
  var require_get_async_iterator = __commonJS({
    "node_modules/core-js/internals/get-async-iterator.js"(exports2, module2) {
      var call = require_function_call();
      var AsyncFromSyncIterator = require_async_from_sync_iterator();
      var anObject = require_an_object();
      var getIterator = require_get_iterator();
      var getMethod = require_get_method();
      var wellKnownSymbol = require_well_known_symbol();
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      module2.exports = function(it, usingIterator) {
        var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
        return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIterator(it));
      };
    }
  });

  // node_modules/core-js/internals/entry-virtual.js
  var require_entry_virtual = __commonJS({
    "node_modules/core-js/internals/entry-virtual.js"(exports2, module2) {
      var global2 = require_global();
      module2.exports = function(CONSTRUCTOR) {
        return global2[CONSTRUCTOR].prototype;
      };
    }
  });

  // node_modules/core-js/internals/async-iterator-iteration.js
  var require_async_iterator_iteration = __commonJS({
    "node_modules/core-js/internals/async-iterator-iteration.js"(exports2, module2) {
      "use strict";
      var global2 = require_global();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getBuiltIn = require_get_built_in();
      var getMethod = require_get_method();
      var MAX_SAFE_INTEGER = 9007199254740991;
      var TypeError2 = global2.TypeError;
      var createMethod = function(TYPE) {
        var IS_TO_ARRAY = TYPE == 0;
        var IS_FOR_EACH = TYPE == 1;
        var IS_EVERY = TYPE == 2;
        var IS_SOME = TYPE == 3;
        return function(iterator, fn, target) {
          anObject(iterator);
          var Promise2 = getBuiltIn("Promise");
          var next = aCallable(iterator.next);
          var index2 = 0;
          var MAPPING = fn !== void 0;
          if (MAPPING || !IS_TO_ARRAY)
            aCallable(fn);
          return new Promise2(function(resolve, reject) {
            var closeIteration = function(method, argument) {
              try {
                var returnMethod = getMethod(iterator, "return");
                if (returnMethod) {
                  return Promise2.resolve(call(returnMethod, iterator)).then(function() {
                    method(argument);
                  }, function(error) {
                    reject(error);
                  });
                }
              } catch (error2) {
                return reject(error2);
              }
              method(argument);
            };
            var onError = function(error) {
              closeIteration(reject, error);
            };
            var loop = function() {
              try {
                if (IS_TO_ARRAY && index2 > MAX_SAFE_INTEGER && MAPPING) {
                  throw TypeError2("The allowed number of iterations has been exceeded");
                }
                Promise2.resolve(anObject(call(next, iterator))).then(function(step) {
                  try {
                    if (anObject(step).done) {
                      if (IS_TO_ARRAY) {
                        target.length = index2;
                        resolve(target);
                      } else
                        resolve(IS_SOME ? false : IS_EVERY || void 0);
                    } else {
                      var value2 = step.value;
                      if (MAPPING) {
                        Promise2.resolve(IS_TO_ARRAY ? fn(value2, index2) : fn(value2)).then(function(result) {
                          if (IS_FOR_EACH) {
                            loop();
                          } else if (IS_EVERY) {
                            result ? loop() : closeIteration(resolve, false);
                          } else if (IS_TO_ARRAY) {
                            target[index2++] = result;
                            loop();
                          } else {
                            result ? closeIteration(resolve, IS_SOME || value2) : loop();
                          }
                        }, onError);
                      } else {
                        target[index2++] = value2;
                        loop();
                      }
                    }
                  } catch (error) {
                    onError(error);
                  }
                }, onError);
              } catch (error2) {
                onError(error2);
              }
            };
            loop();
          });
        };
      };
      module2.exports = {
        toArray: createMethod(0),
        forEach: createMethod(1),
        every: createMethod(2),
        some: createMethod(3),
        find: createMethod(4)
      };
    }
  });

  // node_modules/core-js/internals/array-from-async.js
  var require_array_from_async = __commonJS({
    "node_modules/core-js/internals/array-from-async.js"(exports2, module2) {
      "use strict";
      var bind = require_function_bind_context();
      var toObject = require_to_object();
      var isConstructor = require_is_constructor();
      var getAsyncIterator = require_get_async_iterator();
      var getIterator = require_get_iterator();
      var getIteratorMethod = require_get_iterator_method();
      var getMethod = require_get_method();
      var getVirtual = require_entry_virtual();
      var getBuiltIn = require_get_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var AsyncFromSyncIterator = require_async_from_sync_iterator();
      var toArray = require_async_iterator_iteration().toArray;
      var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
      var arrayIterator = getVirtual("Array").values;
      module2.exports = function fromAsync(asyncItems) {
        var C = this;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var thisArg = argumentsLength > 2 ? arguments[2] : void 0;
        return new (getBuiltIn("Promise"))(function(resolve) {
          var O = toObject(asyncItems);
          if (mapfn !== void 0)
            mapfn = bind(mapfn, thisArg);
          var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
          var usingSyncIterator = usingAsyncIterator ? void 0 : getIteratorMethod(O) || arrayIterator;
          var A = isConstructor(C) ? new C() : [];
          var iterator = usingAsyncIterator ? getAsyncIterator(O, usingAsyncIterator) : new AsyncFromSyncIterator(getIterator(O, usingSyncIterator));
          resolve(toArray(iterator, mapfn, A));
        });
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.from-async.js
  var require_esnext_array_from_async = __commonJS({
    "node_modules/core-js/modules/esnext.array.from-async.js"() {
      var $ = require_export();
      var fromAsync = require_array_from_async();
      $({ target: "Array", stat: true }, {
        fromAsync
      });
    }
  });

  // node_modules/core-js/modules/esnext.array.at.js
  var require_esnext_array_at = __commonJS({
    "node_modules/core-js/modules/esnext.array.at.js"() {
      require_es_array_at();
    }
  });

  // node_modules/core-js/modules/esnext.array.filter-out.js
  var require_esnext_array_filter_out = __commonJS({
    "node_modules/core-js/modules/esnext.array.filter-out.js"() {
      "use strict";
      var $ = require_export();
      var $filterReject = require_array_iteration().filterReject;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        filterOut: function filterOut(callbackfn) {
          return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("filterOut");
    }
  });

  // node_modules/core-js/modules/esnext.array.filter-reject.js
  var require_esnext_array_filter_reject = __commonJS({
    "node_modules/core-js/modules/esnext.array.filter-reject.js"() {
      "use strict";
      var $ = require_export();
      var $filterReject = require_array_iteration().filterReject;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        filterReject: function filterReject(callbackfn) {
          return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("filterReject");
    }
  });

  // node_modules/core-js/internals/array-iteration-from-last.js
  var require_array_iteration_from_last = __commonJS({
    "node_modules/core-js/internals/array-iteration-from-last.js"(exports2, module2) {
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(TYPE) {
        var IS_FIND_LAST_INDEX = TYPE == 1;
        return function($this, callbackfn, that) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that);
          var index2 = lengthOfArrayLike(self2);
          var value2, result;
          while (index2-- > 0) {
            value2 = self2[index2];
            result = boundFunction(value2, index2, O);
            if (result)
              switch (TYPE) {
                case 0:
                  return value2;
                case 1:
                  return index2;
              }
          }
          return IS_FIND_LAST_INDEX ? -1 : void 0;
        };
      };
      module2.exports = {
        // `Array.prototype.findLast` method
        // https://github.com/tc39/proposal-array-find-from-last
        findLast: createMethod(0),
        // `Array.prototype.findLastIndex` method
        // https://github.com/tc39/proposal-array-find-from-last
        findLastIndex: createMethod(1)
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.find-last.js
  var require_esnext_array_find_last = __commonJS({
    "node_modules/core-js/modules/esnext.array.find-last.js"() {
      "use strict";
      var $ = require_export();
      var $findLast = require_array_iteration_from_last().findLast;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        findLast: function findLast2(callbackfn) {
          return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("findLast");
    }
  });

  // node_modules/core-js/modules/esnext.array.find-last-index.js
  var require_esnext_array_find_last_index = __commonJS({
    "node_modules/core-js/modules/esnext.array.find-last-index.js"() {
      "use strict";
      var $ = require_export();
      var $findLastIndex = require_array_iteration_from_last().findLastIndex;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        findLastIndex: function findLastIndex(callbackfn) {
          return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("findLastIndex");
    }
  });

  // node_modules/core-js/internals/array-from-constructor-and-list.js
  var require_array_from_constructor_and_list = __commonJS({
    "node_modules/core-js/internals/array-from-constructor-and-list.js"(exports2, module2) {
      module2.exports = function(Constructor, list) {
        var index2 = 0;
        var length2 = list.length;
        var result = new Constructor(length2);
        while (length2 > index2)
          result[index2] = list[index2++];
        return result;
      };
    }
  });

  // node_modules/core-js/internals/array-group-by.js
  var require_array_group_by = __commonJS({
    "node_modules/core-js/internals/array-group-by.js"(exports2, module2) {
      var global2 = require_global();
      var bind = require_function_bind_context();
      var uncurryThis = require_function_uncurry_this();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var toPropertyKey = require_to_property_key();
      var lengthOfArrayLike = require_length_of_array_like();
      var objectCreate = require_object_create();
      var arrayFromConstructorAndList = require_array_from_constructor_and_list();
      var Array2 = global2.Array;
      var push = uncurryThis([].push);
      module2.exports = function($this, callbackfn, that, specificConstructor) {
        var O = toObject($this);
        var self2 = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var target = objectCreate(null);
        var length2 = lengthOfArrayLike(self2);
        var index2 = 0;
        var Constructor, key2, value2;
        for (; length2 > index2; index2++) {
          value2 = self2[index2];
          key2 = toPropertyKey(boundFunction(value2, index2, O));
          if (key2 in target)
            push(target[key2], value2);
          else
            target[key2] = [value2];
        }
        if (specificConstructor) {
          Constructor = specificConstructor(O);
          if (Constructor !== Array2) {
            for (key2 in target)
              target[key2] = arrayFromConstructorAndList(Constructor, target[key2]);
          }
        }
        return target;
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.group-by.js
  var require_esnext_array_group_by = __commonJS({
    "node_modules/core-js/modules/esnext.array.group-by.js"() {
      "use strict";
      var $ = require_export();
      var $groupBy = require_array_group_by();
      var arraySpeciesConstructor = require_array_species_constructor();
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        groupBy: function groupBy(callbackfn) {
          var thisArg = arguments.length > 1 ? arguments[1] : void 0;
          return $groupBy(this, callbackfn, thisArg, arraySpeciesConstructor);
        }
      });
      addToUnscopables("groupBy");
    }
  });

  // node_modules/core-js/modules/esnext.array.is-template-object.js
  var require_esnext_array_is_template_object = __commonJS({
    "node_modules/core-js/modules/esnext.array.is-template-object.js"() {
      var $ = require_export();
      var isArray = require_is_array();
      var isFrozen = Object.isFrozen;
      var isFrozenStringArray = function(array, allowUndefined) {
        if (!isFrozen || !isArray(array) || !isFrozen(array))
          return false;
        var index2 = 0;
        var length2 = array.length;
        var element;
        while (index2 < length2) {
          element = array[index2++];
          if (!(typeof element == "string" || allowUndefined && typeof element == "undefined")) {
            return false;
          }
        }
        return length2 !== 0;
      };
      $({ target: "Array", stat: true }, {
        isTemplateObject: function isTemplateObject(value2) {
          if (!isFrozenStringArray(value2, true))
            return false;
          var raw = value2.raw;
          if (raw.length !== value2.length || !isFrozenStringArray(raw, false))
            return false;
          return true;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.array.last-item.js
  var require_esnext_array_last_item = __commonJS({
    "node_modules/core-js/modules/esnext.array.last-item.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var addToUnscopables = require_add_to_unscopables();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var defineProperty = require_object_define_property().f;
      if (DESCRIPTORS && !("lastItem" in [])) {
        defineProperty(Array.prototype, "lastItem", {
          configurable: true,
          get: function lastItem() {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return len == 0 ? void 0 : O[len - 1];
          },
          set: function lastItem(value2) {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return O[len == 0 ? 0 : len - 1] = value2;
          }
        });
        addToUnscopables("lastItem");
      }
    }
  });

  // node_modules/core-js/modules/esnext.array.last-index.js
  var require_esnext_array_last_index = __commonJS({
    "node_modules/core-js/modules/esnext.array.last-index.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var addToUnscopables = require_add_to_unscopables();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var defineProperty = require_object_define_property().f;
      if (DESCRIPTORS && !("lastIndex" in [])) {
        defineProperty(Array.prototype, "lastIndex", {
          configurable: true,
          get: function lastIndex() {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            return len == 0 ? 0 : len - 1;
          }
        });
        addToUnscopables("lastIndex");
      }
    }
  });

  // node_modules/core-js/internals/array-unique-by.js
  var require_array_unique_by = __commonJS({
    "node_modules/core-js/internals/array-unique-by.js"(exports2, module2) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var lengthOfArrayLike = require_length_of_array_like();
      var toObject = require_to_object();
      var arraySpeciesCreate = require_array_species_create();
      var Map2 = getBuiltIn("Map");
      var MapPrototype = Map2.prototype;
      var mapForEach = uncurryThis(MapPrototype.forEach);
      var mapHas = uncurryThis(MapPrototype.has);
      var mapSet = uncurryThis(MapPrototype.set);
      var push = uncurryThis([].push);
      module2.exports = function uniqueBy(resolver) {
        var that = toObject(this);
        var length2 = lengthOfArrayLike(that);
        var result = arraySpeciesCreate(that, 0);
        var map = new Map2();
        var resolverFunction = resolver != null ? aCallable(resolver) : function(value2) {
          return value2;
        };
        var index2, item, key2;
        for (index2 = 0; index2 < length2; index2++) {
          item = that[index2];
          key2 = resolverFunction(item);
          if (!mapHas(map, key2))
            mapSet(map, key2, item);
        }
        mapForEach(map, function(value2) {
          push(result, value2);
        });
        return result;
      };
    }
  });

  // node_modules/core-js/modules/esnext.array.unique-by.js
  var require_esnext_array_unique_by = __commonJS({
    "node_modules/core-js/modules/esnext.array.unique-by.js"() {
      "use strict";
      var $ = require_export();
      var addToUnscopables = require_add_to_unscopables();
      var uniqueBy = require_array_unique_by();
      $({ target: "Array", proto: true }, {
        uniqueBy
      });
      addToUnscopables("uniqueBy");
    }
  });

  // node_modules/core-js/features/array/index.js
  var require_array3 = __commonJS({
    "node_modules/core-js/features/array/index.js"(exports2, module2) {
      var parent2 = require_array2();
      require_es_map();
      require_es_promise();
      require_esnext_array_from_async();
      require_esnext_array_at();
      require_esnext_array_filter_out();
      require_esnext_array_filter_reject();
      require_esnext_array_find_last();
      require_esnext_array_find_last_index();
      require_esnext_array_group_by();
      require_esnext_array_is_template_object();
      require_esnext_array_last_item();
      require_esnext_array_last_index();
      require_esnext_array_unique_by();
      module2.exports = parent2;
    }
  });

  // packages/systems/core/utils/LottieFetchUtils/fflate.min.js
  var require_fflate_min = __commonJS({
    "packages/systems/core/utils/LottieFetchUtils/fflate.min.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.strFromU8 = strFromU82;
      exports2.unzip = unzip2;
      var ch2 = {};
      var wk = function(c, id, msg, transfer, cb) {
        const w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
          type: "text/javascript"
        }))));
        return w.onmessage = function(e) {
          const d = e.data, ed = d.$e$;
          if (ed) {
            const err2 = new Error(ed[0]);
            err2.code = ed[1], err2.stack = ed[2], cb(err2, null);
          } else
            cb(null, d);
        }, w.postMessage(msg, transfer), w;
      };
      var u8 = Uint8Array;
      var u16 = Uint16Array;
      var u32 = Uint32Array;
      var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
      var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
      var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      var freb = function(eb, start) {
        const b = new u16(31);
        for (var i2 = 0; i2 < 31; ++i2)
          b[i2] = start += 1 << eb[i2 - 1];
        const r = new u32(b[30]);
        for (i2 = 1; i2 < 30; ++i2)
          for (let j = b[i2]; j < b[i2 + 1]; ++j)
            r[j] = j - b[i2] << 5 | i2;
        return [b, r];
      };
      var _a = freb(fleb, 2);
      var fl = _a[0];
      var revfl = _a[1];
      fl[28] = 258, revfl[258] = 28;
      var _b = freb(fdeb, 0);
      var fd = _b[0];
      var rev = new u16(32768);
      for (i = 0; i < 32768; ++i) {
        let x = (43690 & i) >>> 1 | (21845 & i) << 1;
        x = (52428 & x) >>> 2 | (13107 & x) << 2, x = (61680 & x) >>> 4 | (3855 & x) << 4, rev[i] = ((65280 & x) >>> 8 | (255 & x) << 8) >>> 1;
      }
      var i;
      var hMap = function(cd, mb, r) {
        const s = cd.length;
        let i2 = 0;
        const l = new u16(mb);
        for (; i2 < s; ++i2)
          cd[i2] && ++l[cd[i2] - 1];
        const le = new u16(mb);
        for (i2 = 0; i2 < mb; ++i2)
          le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
        let co;
        if (r) {
          co = new u16(1 << mb);
          const rvb = 15 - mb;
          for (i2 = 0; i2 < s; ++i2)
            if (cd[i2]) {
              const sv = i2 << 4 | cd[i2], r_1 = mb - cd[i2];
              let v = le[cd[i2] - 1]++ << r_1;
              for (let m = v | (1 << r_1) - 1; v <= m; ++v)
                co[rev[v] >>> rvb] = sv;
            }
        } else
          for (co = new u16(s), i2 = 0; i2 < s; ++i2)
            cd[i2] && (co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2]);
        return co;
      };
      var flt = new u8(288);
      for (i = 0; i < 144; ++i)
        flt[i] = 8;
      for (i = 144; i < 256; ++i)
        flt[i] = 9;
      for (i = 256; i < 280; ++i)
        flt[i] = 7;
      for (i = 280; i < 288; ++i)
        flt[i] = 8;
      var fdt = new u8(32);
      for (i = 0; i < 32; ++i)
        fdt[i] = 5;
      var flrm = hMap(flt, 9, 1);
      var fdrm = hMap(fdt, 5, 1);
      var max = function(a) {
        let m = a[0];
        for (let i2 = 1; i2 < a.length; ++i2)
          a[i2] > m && (m = a[i2]);
        return m;
      };
      var bits = function(d, p, m) {
        const o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8) >> (7 & p) & m;
      };
      var bits16 = function(d, p) {
        const o = p / 8 | 0;
        return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (7 & p);
      };
      var shft = function(p) {
        return (p + 7) / 8 | 0;
      };
      var slc = function(v, s, e) {
        (null == s || s < 0) && (s = 0), (null == e || e > v.length) && (e = v.length);
        const n = new (2 === v.BYTES_PER_ELEMENT ? u16 : 4 === v.BYTES_PER_ELEMENT ? u32 : u8)(e - s);
        return n.set(v.subarray(s, e)), n;
      };
      var ec = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
      var err = function(ind, msg, nt) {
        const e = new Error(msg || ec[ind]);
        if (e.code = ind, Error.captureStackTrace && Error.captureStackTrace(e, err), !nt)
          throw e;
        return e;
      };
      var inflt = function(dat, buf, st) {
        const sl = dat.length;
        if (!sl || st && st.f && !st.l)
          return buf || new u8(0);
        const noBuf = !buf || st, noSt = !st || st.i;
        st || (st = {}), buf || (buf = new u8(3 * sl));
        const cbuf = function(l) {
          const bl = buf.length;
          if (l > bl) {
            const nbuf = new u8(Math.max(2 * bl, l));
            nbuf.set(buf), buf = nbuf;
          }
        };
        let final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
        const tbts = 8 * sl;
        do {
          if (!lm) {
            final = bits(dat, pos, 1);
            const type = bits(dat, pos + 1, 3);
            if (pos += 3, !type) {
              const l = dat[(s = shft(pos) + 4) - 4] | dat[s - 3] << 8, t = s + l;
              if (t > sl) {
                noSt && err(0);
                break;
              }
              noBuf && cbuf(bt + l), buf.set(dat.subarray(s, t), bt), st.b = bt += l, st.p = pos = 8 * t, st.f = final;
              continue;
            }
            if (1 === type)
              lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (2 === type) {
              const hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4, tl = hLit + bits(dat, pos + 5, 31) + 1;
              pos += 14;
              const ldt = new u8(tl), clt = new u8(19);
              for (var i2 = 0; i2 < hcLen; ++i2)
                clt[clim[i2]] = bits(dat, pos + 3 * i2, 7);
              pos += 3 * hcLen;
              const clb = max(clt), clbmsk = (1 << clb) - 1, clm = hMap(clt, clb, 1);
              for (i2 = 0; i2 < tl; ) {
                const r = clm[bits(dat, pos, clbmsk)];
                var s;
                if (pos += 15 & r, (s = r >>> 4) < 16)
                  ldt[i2++] = s;
                else {
                  var c = 0;
                  let n = 0;
                  for (16 === s ? (n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1]) : 17 === s ? (n = 3 + bits(dat, pos, 7), pos += 3) : 18 === s && (n = 11 + bits(dat, pos, 127), pos += 7); n--; )
                    ldt[i2++] = c;
                }
              }
              const lt = ldt.subarray(0, hLit);
              var dt = ldt.subarray(hLit);
              lbt = max(lt), dbt = max(dt), lm = hMap(lt, lbt, 1), dm = hMap(dt, dbt, 1);
            } else
              err(1);
            if (pos > tbts) {
              noSt && err(0);
              break;
            }
          }
          noBuf && cbuf(bt + 131072);
          const lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
          let lpos = pos;
          for (; ; lpos = pos) {
            const sym = (c = lm[bits16(dat, pos) & lms]) >>> 4;
            if (pos += 15 & c, pos > tbts) {
              noSt && err(0);
              break;
            }
            if (c || err(2), sym < 256)
              buf[bt++] = sym;
            else {
              if (256 === sym) {
                lpos = pos, lm = null;
                break;
              }
              {
                let add2 = sym - 254;
                if (sym > 264) {
                  var b = fleb[i2 = sym - 257];
                  add2 = bits(dat, pos, (1 << b) - 1) + fl[i2], pos += b;
                }
                const d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                d || err(3), pos += 15 & d;
                dt = fd[dsym];
                if (dsym > 3) {
                  b = fdeb[dsym];
                  dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) {
                  noSt && err(0);
                  break;
                }
                noBuf && cbuf(bt + 131072);
                const end = bt + add2;
                for (; bt < end; bt += 4)
                  buf[bt] = buf[bt - dt], buf[bt + 1] = buf[bt + 1 - dt], buf[bt + 2] = buf[bt + 2 - dt], buf[bt + 3] = buf[bt + 3 - dt];
                bt = end;
              }
            }
          }
          st.l = lm, st.p = lpos, st.b = bt, st.f = final, lm && (final = 1, st.m = lbt, st.d = dm, st.n = dbt);
        } while (!final);
        return bt === buf.length ? buf : slc(buf, 0, bt);
      };
      var mrg = function(a, b) {
        const o = {};
        for (var k in a)
          o[k] = a[k];
        for (var k in b)
          o[k] = b[k];
        return o;
      };
      var wcln = function(fn, fnStr, td2) {
        const dt = fn(), st = fn.toString(), ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
        for (let i2 = 0; i2 < dt.length; ++i2) {
          const v = dt[i2], k = ks[i2];
          if ("function" == typeof v) {
            fnStr += ";" + k + "=";
            const st_1 = v.toString();
            if (v.prototype) {
              if (-1 !== st_1.indexOf("[native code]")) {
                const spInd = st_1.indexOf(" ", 8) + 1;
                fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
              } else {
                fnStr += st_1;
                for (const t in v.prototype)
                  fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
              }
            } else
              fnStr += st_1;
          } else
            td2[k] = v;
        }
        return [fnStr, td2];
      };
      var ch = [];
      var cbfs = function(v) {
        const tl = [];
        for (const k in v)
          v[k].buffer && tl.push((v[k] = new v[k].constructor(v[k])).buffer);
        return tl;
      };
      var wrkr = function(fns, init2, id, cb) {
        let _a2;
        if (!ch[id]) {
          let fnStr = "", td_1 = {};
          const m = fns.length - 1;
          for (let i2 = 0; i2 < m; ++i2)
            _a2 = wcln(fns[i2], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
          ch[id] = wcln(fns[m], fnStr, td_1);
        }
        const td2 = mrg({}, ch[id][1]);
        return wk(ch[id][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + init2.toString() + "}", id, td2, cbfs(td2), cb);
      };
      var bInflt = function() {
        return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gu8];
      };
      var pbf = function(msg) {
        return postMessage(msg, [msg.buffer]);
      };
      var gu8 = function(o) {
        return o && o.size && new u8(o.size);
      };
      var cbify = function(dat, opts, fns, init2, id, cb) {
        var w = wrkr(fns, init2, id, function(err2, dat2) {
          w.terminate(), cb(err2, dat2);
        });
        return w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []), function() {
          w.terminate();
        };
      };
      var b2 = function(d, b) {
        return d[b] | d[b + 1] << 8;
      };
      var b4 = function(d, b) {
        return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
      };
      function inflate(data2, opts, cb) {
        return cb || (cb = opts, opts = {}), "function" != typeof cb && err(7), cbify(data2, opts, [bInflt], function(ev) {
          return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
        }, 1, cb);
      }
      function inflateSync(data2, out) {
        return inflt(data2, out);
      }
      var td = "undefined" != typeof TextDecoder && new TextDecoder();
      var dutf8 = function(d) {
        for (let r = "", i2 = 0; ; ) {
          let c = d[i2++];
          const eb = (c > 127) + (c > 223) + (c > 239);
          if (i2 + eb > d.length)
            return [r, slc(d, i2 - 1)];
          eb ? 3 === eb ? (c = ((15 & c) << 18 | (63 & d[i2++]) << 12 | (63 & d[i2++]) << 6 | 63 & d[i2++]) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)) : r += 1 & eb ? String.fromCharCode((31 & c) << 6 | 63 & d[i2++]) : String.fromCharCode((15 & c) << 12 | (63 & d[i2++]) << 6 | 63 & d[i2++]) : r += String.fromCharCode(c);
        }
      };
      function strFromU82(dat, latin1) {
        if (latin1) {
          let r = "";
          for (let i2 = 0; i2 < dat.length; i2 += 16384)
            r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
          return r;
        }
        if (td)
          return td.decode(dat);
        {
          const _a2 = dutf8(dat), out = _a2[0];
          return _a2[1].length && err(8), out;
        }
      }
      var slzh = function(d, b) {
        return b + 30 + b2(d, b + 26) + b2(d, b + 28);
      };
      var zh = function(d, b, z) {
        const fnl = b2(d, b + 28), fn = strFromU82(d.subarray(b + 46, b + 46 + fnl), !(2048 & b2(d, b + 8))), es = b + 46 + fnl, bs = b4(d, b + 20), _a2 = z && 4294967295 === bs ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
        return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
      };
      var mt = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(fn) {
        fn();
      };
      function unzip2(data2, opts, cb) {
        cb || (cb = opts, opts = {}), "function" != typeof cb && err(7);
        const term = [], tAll = function() {
          for (let i2 = 0; i2 < term.length; ++i2)
            term[i2]();
        }, files = {};
        let cbd = function(a, b) {
          mt(function() {
            cb(a, b);
          });
        };
        mt(function() {
          cbd = cb;
        });
        let e = data2.length - 22;
        for (; 101010256 !== b4(data2, e); --e)
          if (!e || data2.length - e > 65558)
            return cbd(err(13, 0, 1), null), tAll;
        let lft = b2(data2, e + 8);
        if (lft) {
          let c = lft, o = b4(data2, e + 16), z = 4294967295 === o || 65535 === c;
          if (z) {
            const ze = b4(data2, e - 12);
            z = 101075792 === b4(data2, ze), z && (c = lft = b4(data2, ze + 32), o = b4(data2, ze + 48));
          }
          const fltr = opts && opts.filter, _loop_3 = function() {
            const _a2 = zh(data2, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data2, off);
            o = no;
            const cbl = function(e2, d) {
              e2 ? (tAll(), cbd(e2, null)) : (d && (files[fn] = d), --lft || cbd(null, files));
            };
            if (!fltr || fltr({
              name: fn,
              size: sc,
              originalSize: su,
              compression: c_1
            })) {
              if (c_1) {
                if (8 === c_1) {
                  const infl = data2.subarray(b, b + sc);
                  if (sc < 32e4)
                    try {
                      cbl(null, inflateSync(infl, new u8(su)));
                    } catch (e2) {
                      cbl(e2, null);
                    }
                  else
                    term.push(inflate(infl, {
                      size: su
                    }, cbl));
                } else
                  cbl(err(14, "unknown compression type " + c_1, 1), null);
              } else
                cbl(null, slc(data2, b, b + sc));
            } else
              cbl(null, null);
          };
          for (let i2 = 0; i2 < c; ++i2)
            _loop_3(i2);
        } else
          cbd(null, {});
        return tAll;
      }
    }
  });

  // packages/systems/core/utils/LottieFetchUtils/index.ts
  function parseManifest(data2) {
    const manifest = JSON.parse(data2);
    if (!("animations" in manifest)) {
      throw new Error("Manifest not found");
    }
    if (manifest.animations.length === 0) {
      throw new Error("No animations listed in the manifest");
    }
    return manifest;
  }
  function isBytesZip(bytes) {
    const b = new Uint8Array(bytes, 0, 32);
    return b[0] === 80 && b[1] === 75 && b[2] === 3 && b[3] === 4;
  }
  async function fetchRequest(url) {
    return await fetch(new URL(url).href).then((r) => r.arrayBuffer());
  }
  async function base64fromU8(data2) {
    const base64url = await new Promise(
      (resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(new Blob([data2]));
        reader.onload = () => resolve(reader.result);
      }
    );
    return base64url.split(",", 2)[1];
  }
  async function unZip(buffer) {
    const file = new Uint8Array(buffer);
    const lottieFile = await new Promise(
      (resolve, reject) => {
        (0, import_fflate.unzip)(
          file,
          (err, unzipped) => err ? reject(err) : resolve(unzipped)
        );
      }
    );
    return {
      // @ts-expect-error - TS2322 - Type 'string | Uint8Array | Uint16Array | Uint32Array' is not assignable to type 'string'.
      read: (path) => (0, import_fflate.strFromU8)(lottieFile[path]),
      readB64: async (path) => await base64fromU8(lottieFile[path])
    };
  }
  async function prepareLottieAssets(lottieJson, dotLottie) {
    if (!("assets" in lottieJson)) {
      return lottieJson;
    }
    async function parseAsset(asset) {
      const { p } = asset;
      if (p == null)
        return asset;
      if (dotLottie.read(`images/${p}`) == null)
        return asset;
      const ext = p.split(".").pop();
      const assetB64 = await dotLottie.readB64(`images/${p}`);
      if (ext?.startsWith("data:")) {
        asset.p = ext;
        asset.e = 1;
        return asset;
      }
      switch (ext) {
        case "svg":
        case "svg+xml":
          asset.p = `data:image/svg+xml;base64,${assetB64}`;
          break;
        case "png":
        case "jpg":
        case "jpeg":
        case "gif":
        case "webp":
          asset.p = `data:image/${ext};base64,${assetB64}`;
          break;
        default:
          asset.p = `data:;base64,${assetB64}`;
      }
      asset.e = 1;
      return asset;
    }
    const result = await Promise.all(lottieJson.assets.map(parseAsset));
    result.map((asset, i) => {
      lottieJson.assets[i] = asset;
    });
    return lottieJson;
  }
  async function unZipDotLottie(response) {
    const dotLottie = await unZip(response);
    const manifest = parseManifest(dotLottie.read("manifest.json"));
    const animations = await Promise.all(
      manifest.animations.map((a) => {
        const lottieJson = JSON.parse(dotLottie.read(`animations/${a.id}.json`));
        return prepareLottieAssets(lottieJson, dotLottie);
      })
    );
    return animations[0];
  }
  async function fetchLottie(url) {
    const response = await fetchRequest(url);
    if (isBytesZip(response)) {
      return await unZipDotLottie(response);
    }
    const lottieJson = JSON.parse(
      new TextDecoder().decode(response)
    );
    return lottieJson;
  }
  var import_fflate;
  var init_LottieFetchUtils = __esm({
    "packages/systems/core/utils/LottieFetchUtils/index.ts"() {
      "use strict";
      import_fflate = __toESM(require_fflate_min());
    }
  });

  // packages/shared/render/plugins/Animation/modules/LottieSiteModule.ts
  var LottieSiteModule_exports = {};
  __export(LottieSiteModule_exports, {
    cleanupElement: () => cleanupElement,
    createInstance: () => createInstance,
    destroy: () => destroy,
    init: () => init,
    ready: () => ready
  });
  var import_findIndex, import_array, getLottieLibrary, isInDesigner, PlayerState, Cache, cache, emptyObject, LottieInstance, getLottieElements, createInstance, cleanupElement, init, destroy, ready;
  var init_LottieSiteModule = __esm({
    "packages/shared/render/plugins/Animation/modules/LottieSiteModule.ts"() {
      "use strict";
      import_findIndex = __toESM(require_findIndex());
      import_array = __toESM(require_array3());
      init_LottieFetchUtils();
      getLottieLibrary = () => window.Webflow.require("lottie").lottie;
      isInDesigner = () => (
        // @ts-expect-error - TS2339 - Property 'Webflow' does not exist on type 'Window & typeof globalThis'. | TS2339 - Property 'Webflow' does not exist on type 'Window & typeof globalThis'.
        Boolean(window.Webflow.env("design") || window.Webflow.env("preview"))
      );
      PlayerState = {
        Playing: "playing",
        Stopped: "stopped"
      };
      Cache = class {
        _cache = [];
        set(container, instance) {
          const index2 = (0, import_findIndex.default)(this._cache, ({ wrapper }) => wrapper === container);
          if (index2 !== -1)
            this._cache.splice(index2, 1);
          this._cache.push({ wrapper: container, instance });
        }
        delete(container) {
          const index2 = (0, import_findIndex.default)(this._cache, ({ wrapper }) => wrapper === container);
          if (index2 !== -1)
            this._cache.splice(index2, 1);
        }
        get(container) {
          const index2 = (0, import_findIndex.default)(this._cache, ({ wrapper }) => wrapper === container);
          return index2 !== -1 ? this._cache[index2].instance : null;
        }
      };
      cache = new Cache();
      emptyObject = {};
      LottieInstance = class {
        config = null;
        currentState = PlayerState.Stopped;
        animationItem;
        handlers = {
          enterFrame: [],
          complete: [],
          loop: [],
          dataReady: [],
          destroy: [],
          error: []
        };
        load(container) {
          const dataset = container.dataset || emptyObject;
          const src = dataset.src || "";
          if (src.endsWith(".lottie")) {
            fetchLottie(src).then((animationData2) => {
              this._loadAnimation(container, animationData2);
            });
          } else {
            this._loadAnimation(container, void 0);
          }
          cache.set(container, this);
          this.container = container;
        }
        _loadAnimation(container, animationData2) {
          const dataset = container.dataset || emptyObject;
          const src = dataset.src || "";
          const preserveAspectRatio = dataset.preserveAspectRatio || "xMidYMid meet";
          const renderer2 = dataset.renderer || "svg";
          const loop = parseFloat(dataset.loop) === 1;
          const direction = parseFloat(dataset.direction) || 1;
          const autoplay = parseFloat(dataset.autoplay) === 1;
          const duration = parseFloat(dataset.duration) || 0;
          const hasIx2 = parseFloat(dataset.isIx2Target) === 1;
          let ix2InitialValue = parseFloat(dataset.ix2InitialState);
          if (isNaN(ix2InitialValue)) {
            ix2InitialValue = null;
          }
          const config = {
            src,
            loop,
            autoplay,
            renderer: renderer2,
            direction,
            duration,
            hasIx2,
            ix2InitialValue,
            preserveAspectRatio
          };
          if (this.animationItem && this.config && this.config.src === src && renderer2 === this.config.renderer && preserveAspectRatio === this.config.preserveAspectRatio) {
            if (loop !== this.config.loop) {
              this.setLooping(loop);
            }
            if (!hasIx2) {
              if (direction !== this.config.direction) {
                this.setDirection(direction);
              }
              if (duration !== this.config.duration) {
                if (duration > 0 && duration !== this.duration) {
                  this.setSpeed(this.duration / duration);
                } else {
                  this.setSpeed(1);
                }
              }
            }
            if (autoplay) {
              this.play();
            }
            if (ix2InitialValue && ix2InitialValue !== this.config.ix2InitialValue) {
              const percent = ix2InitialValue / 100;
              this.goToFrame(this.frames * percent);
            }
            this.config = config;
            return;
          }
          const options = {
            container,
            loop,
            autoplay,
            renderer: renderer2,
            rendererSettings: {
              preserveAspectRatio,
              progressiveLoad: true,
              hideOnTransparent: true
            }
          };
          try {
            if (this.animationItem) {
              this.destroy();
            }
            this.animationItem = getLottieLibrary().loadAnimation({
              ...options,
              ...animationData2 ? { animationData: animationData2 } : { path: src }
            });
          } catch (err) {
            this.handlers.error.forEach((cb) => cb(err));
            return;
          }
          if (!this.animationItem)
            return;
          if (isInDesigner()) {
            this.animationItem.addEventListener("enterFrame", () => {
              if (!this.isPlaying)
                return;
              const { currentFrame, totalFrames, playDirection } = this.animationItem;
              const toPercent = currentFrame / totalFrames * 100;
              const percentage = Math.round(
                playDirection === 1 ? toPercent : 100 - toPercent
              );
              this.handlers.enterFrame.forEach((cb) => cb(percentage, currentFrame));
            });
            this.animationItem.addEventListener("complete", () => {
              if (this.currentState !== PlayerState.Playing) {
                this.handlers.complete.forEach((cb) => cb());
                return;
              }
              if (!this.animationItem.loop) {
                this.handlers.complete.forEach((cb) => cb());
                return;
              }
              this.currentState = PlayerState.Stopped;
            });
            this.animationItem.addEventListener(
              "loopComplete",
              (loopComplete) => {
                this.handlers.loop.forEach((cb) => cb(loopComplete));
              }
            );
            this.animationItem.addEventListener("data_failed", (err) => {
              this.handlers.error.forEach((cb) => cb(err));
            });
            this.animationItem.addEventListener("error", (err) => {
              this.handlers.error.forEach((cb) => cb(err));
            });
          }
          if (this.isLoaded) {
            this.handlers.dataReady.forEach((cb) => cb());
            if (autoplay) {
              this.play();
            }
          } else {
            this.animationItem.addEventListener("data_ready", () => {
              this.handlers.dataReady.forEach((cb) => cb());
              if (!hasIx2) {
                this.setDirection(direction);
                if (duration > 0 && duration !== this.duration) {
                  this.setSpeed(this.duration / duration);
                }
                if (autoplay) {
                  this.play();
                }
              }
              if (ix2InitialValue) {
                const percent = ix2InitialValue / 100;
                this.goToFrame(this.frames * percent);
              }
            });
          }
          this.config = config;
        }
        onFrameChange(cb) {
          if (this.handlers.enterFrame.indexOf(cb) === -1) {
            this.handlers.enterFrame.push(cb);
          }
        }
        onPlaybackComplete(cb) {
          if (this.handlers.complete.indexOf(cb) === -1) {
            this.handlers.complete.push(cb);
          }
        }
        onLoopComplete(cb) {
          if (this.handlers.loop.indexOf(cb) === -1) {
            this.handlers.loop.push(cb);
          }
        }
        onDestroy(cb) {
          if (this.handlers.destroy.indexOf(cb) === -1) {
            this.handlers.destroy.push(cb);
          }
        }
        onDataReady(cb) {
          if (this.handlers.dataReady.indexOf(cb) === -1) {
            this.handlers.dataReady.push(cb);
          }
        }
        onError(cb) {
          if (this.handlers.error.indexOf(cb) === -1) {
            this.handlers.error.push(cb);
          }
        }
        play() {
          if (!this.animationItem)
            return;
          const frame = this.animationItem.playDirection === 1 ? 0 : this.frames;
          this.animationItem.goToAndPlay(frame, true);
          this.currentState = PlayerState.Playing;
        }
        stop() {
          if (!this.animationItem)
            return;
          if (this.isPlaying) {
            const { playDirection } = this.animationItem;
            const frame = playDirection === 1 ? 0 : this.frames;
            this.animationItem.goToAndStop(frame, true);
          }
          this.currentState = PlayerState.Stopped;
        }
        destroy() {
          if (!this.animationItem)
            return;
          if (this.isPlaying)
            this.stop();
          this.handlers.destroy.forEach((cb) => cb());
          if (this.container) {
            cache.delete(this.container);
          }
          this.animationItem.destroy();
          Object.keys(this.handlers).forEach(
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ enterFrame: OnFrameChangeCallback[]; complete: (() => void)[]; loop: OnLoopCompleteCallback[]; dataReady: (() => void)[]; destroy: (() => void)[]; error: ((arg1: Error) => void)[]; }'.
            (key2) => this.handlers[key2].length = 0
          );
          this.animationItem = null;
          this.container = null;
          this.config = null;
        }
        // @ts-expect-error - TS2416 - Property 'isPlaying' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get isPlaying() {
          if (!this.animationItem)
            return false;
          return !this.animationItem.isPaused;
        }
        // @ts-expect-error - TS2416 - Property 'isPaused' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get isPaused() {
          if (!this.animationItem)
            return false;
          return this.animationItem.isPaused;
        }
        // @ts-expect-error - TS2416 - Property 'duration' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get duration() {
          if (!this.animationItem)
            return 0;
          return this.animationItem.getDuration();
        }
        // @ts-expect-error - TS2416 - Property 'frames' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get frames() {
          if (!this.animationItem)
            return 0;
          return this.animationItem.totalFrames;
        }
        // @ts-expect-error - TS2416 - Property 'direction' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get direction() {
          if (!this.animationItem)
            return 1;
          return this.animationItem.playDirection;
        }
        // @ts-expect-error - TS2416 - Property 'isLoaded' in type 'LottieInstance' is not assignable to the same property in base type 'LottieItem'.
        get isLoaded() {
          if (!this.animationItem)
            false;
          return this.animationItem.isLoaded;
        }
        get ix2InitialValue() {
          return this.config ? this.config.ix2InitialValue : null;
        }
        goToFrame(value2) {
          if (!this.animationItem)
            return;
          this.animationItem.setCurrentRawFrameValue(value2);
        }
        setSubframe(value2) {
          if (!this.animationItem)
            return;
          this.animationItem.setSubframe(value2);
        }
        setSpeed(value2 = 1) {
          if (!this.animationItem)
            return;
          if (this.isPlaying)
            this.stop();
          this.animationItem.setSpeed(value2);
        }
        setLooping(value2) {
          if (!this.animationItem)
            return;
          if (this.isPlaying)
            this.stop();
          this.animationItem.loop = value2;
        }
        setDirection(value2) {
          if (!this.animationItem)
            return;
          if (this.isPlaying)
            this.stop();
          this.animationItem.setDirection(value2);
          this.goToFrame(value2 === 1 ? 0 : this.frames);
        }
      };
      getLottieElements = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]'));
      createInstance = (container) => {
        let lottieInstance = cache.get(container);
        if (lottieInstance == null) {
          lottieInstance = new LottieInstance();
        }
        lottieInstance.load(container);
        return lottieInstance;
      };
      cleanupElement = (element) => {
        const lottieInstance = cache.get(element);
        if (lottieInstance) {
          lottieInstance.destroy();
        }
      };
      init = () => {
        getLottieElements().forEach((element) => {
          const hasIx2 = parseFloat(element.getAttribute("data-is-ix2-target")) === 1;
          if (!hasIx2) {
            cleanupElement(element);
          }
          createInstance(element);
        });
      };
      destroy = () => {
        getLottieElements().forEach(cleanupElement);
      };
      ready = init;
    }
  });

  // node_modules/lottie-web/build/player/lottie.min.js
  var require_lottie_min = __commonJS({
    "node_modules/lottie-web/build/player/lottie.min.js"(exports, module) {
      "undefined" != typeof navigator && function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lottie = e();
      }(exports, function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = false, initialDefaultFrame = -999999, setWebWorker = function(t) {
          _useWebWorker = !!t;
        }, getWebWorker = function() {
          return _useWebWorker;
        }, setLocationHref = function(t) {
          locationHref = t;
        }, getLocationHref = function() {
          return locationHref;
        };
        function createTag(t) {
          return document.createElement(t);
        }
        function extendPrototype(t, e) {
          var i, r, s = t.length;
          for (i = 0; i < s; i += 1)
            for (var a in r = t[i].prototype)
              Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a]);
        }
        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
          function e() {
          }
          return e.prototype = t, e;
        }
        var audioControllerFactory = function() {
          function t(t2) {
            this.audios = [], this.audioFactory = t2, this._volume = 1, this._isMuted = false;
          }
          return t.prototype = { addAudio: function(t2) {
            this.audios.push(t2);
          }, pause: function() {
            var t2, e = this.audios.length;
            for (t2 = 0; t2 < e; t2 += 1)
              this.audios[t2].pause();
          }, resume: function() {
            var t2, e = this.audios.length;
            for (t2 = 0; t2 < e; t2 += 1)
              this.audios[t2].resume();
          }, setRate: function(t2) {
            var e, i = this.audios.length;
            for (e = 0; e < i; e += 1)
              this.audios[e].setRate(t2);
          }, createAudio: function(t2) {
            return this.audioFactory ? this.audioFactory(t2) : window.Howl ? new window.Howl({ src: [t2] }) : { isPlaying: false, play: function() {
              this.isPlaying = true;
            }, seek: function() {
              this.isPlaying = false;
            }, playing: function() {
            }, rate: function() {
            }, setVolume: function() {
            } };
          }, setAudioFactory: function(t2) {
            this.audioFactory = t2;
          }, setVolume: function(t2) {
            this._volume = t2, this._updateVolume();
          }, mute: function() {
            this._isMuted = true, this._updateVolume();
          }, unmute: function() {
            this._isMuted = false, this._updateVolume();
          }, getVolume: function() {
            return this._volume;
          }, _updateVolume: function() {
            var t2, e = this.audios.length;
            for (t2 = 0; t2 < e; t2 += 1)
              this.audios[t2].volume(this._volume * (this._isMuted ? 0 : 1));
          } }, function() {
            return new t();
          };
        }(), createTypedArray = function() {
          function t(t2, e) {
            var i, r = 0, s = [];
            switch (t2) {
              case "int16":
              case "uint8c":
                i = 1;
                break;
              default:
                i = 1.1;
            }
            for (r = 0; r < e; r += 1)
              s.push(i);
            return s;
          }
          return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i);
          } : t;
        }();
        function createSizedArray(t) {
          return Array.apply(null, { length: t });
        }
        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, _typeof$6(t);
        }
        var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = false, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
        function ProjectInterface$1() {
          return {};
        }
        !function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
          for (t = 0; t < i; t += 1)
            BMMath[e[t]] = Math[e[t]];
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, i = createSizedArray(t.length), r = t.length;
            for (e = 0; e < r; e += 1)
              i[e] = Math.abs(t[e]);
            return i;
          }
          return Math.abs(t);
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
        function roundValues(t) {
          _shouldRoundValues = !!t;
        }
        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t;
        }
        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
        }
        function BMEnterFrameEvent(t, e, i, r) {
          this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
        }
        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(t, e, i, r) {
          this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(t, e, i) {
          this.type = t, this.firstFrame = e, this.totalFrames = i;
        }
        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e;
        }
        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
        }
        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t;
        }
        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e;
        }
        var createElementID = (_count = 0, function() {
          return idPrefix$1 + "__lottie_element_" + (_count += 1);
        }), _count;
        function HSVtoRGB(t, e, i) {
          var r, s, a, n, o, h, l, p;
          switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
            case 0:
              r = i, s = p, a = h;
              break;
            case 1:
              r = l, s = i, a = h;
              break;
            case 2:
              r = h, s = i, a = p;
              break;
            case 3:
              r = h, s = l, a = i;
              break;
            case 4:
              r = p, s = h, a = i;
              break;
            case 5:
              r = i, s = h, a = l;
          }
          return [r, s, a];
        }
        function RGBtoHSV(t, e, i) {
          var r, s = Math.max(t, e, i), a = Math.min(t, e, i), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
          switch (s) {
            case a:
              r = 0;
              break;
            case t:
              r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
              break;
            case e:
              r = i - t + 2 * n, r /= 6 * n;
              break;
            case i:
              r = t - e + 4 * n, r /= 6 * n;
          }
          return [r, o, h];
        }
        function addSaturationToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);
        }
        function addBrightnessToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);
        }
        function addHueToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);
        }
        var rgbToHex = function() {
          var t, e, i = [];
          for (t = 0; t < 256; t += 1)
            e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
          return function(t2, e2, r) {
            return t2 < 0 && (t2 = 0), e2 < 0 && (e2 = 0), r < 0 && (r = 0), "#" + i[t2] + i[e2] + i[r];
          };
        }(), setSubframeEnabled = function(t) {
          subframeEnabled = !!t;
        }, getSubframeEnabled = function() {
          return subframeEnabled;
        }, setExpressionsPlugin = function(t) {
          expressionsPlugin = t;
        }, getExpressionsPlugin = function() {
          return expressionsPlugin;
        }, setExpressionInterfaces = function(t) {
          expressionsInterfaces = t;
        }, getExpressionInterfaces = function() {
          return expressionsInterfaces;
        }, setDefaultCurveSegments = function(t) {
          defaultCurveSegments = t;
        }, getDefaultCurveSegments = function() {
          return defaultCurveSegments;
        }, setIdPrefix = function(t) {
          idPrefix$1 = t;
        }, getIdPrefix = function() {
          return idPrefix$1;
        };
        function createNS(t) {
          return document.createElementNS(svgNS, t);
        }
        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, _typeof$5(t);
        }
        var dataManager = function() {
          var t, e, i = 1, r = [], s = { onmessage: function() {
          }, postMessage: function(e2) {
            t({ data: e2 });
          } }, a = { postMessage: function(t2) {
            s.onmessage({ data: t2 });
          } };
          function n() {
            e || (e = function(e2) {
              if (window.Worker && window.Blob && getWebWorker()) {
                var i2 = new Blob(["var _workerSelf = self; self.onmessage = ", e2.toString()], { type: "text/javascript" }), r2 = URL.createObjectURL(i2);
                return new Worker(r2);
              }
              return t = e2, s;
            }(function(t2) {
              if (a.dataManager || (a.dataManager = function() {
                function t3(s3, a3) {
                  var n3, o3, h2, l2, p2, m2, c = s3.length;
                  for (o3 = 0; o3 < c; o3 += 1)
                    if ("ks" in (n3 = s3[o3]) && !n3.completed) {
                      if (n3.completed = true, n3.hasMask) {
                        var d = n3.masksProperties;
                        for (l2 = d.length, h2 = 0; h2 < l2; h2 += 1)
                          if (d[h2].pt.k.i)
                            r2(d[h2].pt.k);
                          else
                            for (m2 = d[h2].pt.k.length, p2 = 0; p2 < m2; p2 += 1)
                              d[h2].pt.k[p2].s && r2(d[h2].pt.k[p2].s[0]), d[h2].pt.k[p2].e && r2(d[h2].pt.k[p2].e[0]);
                      }
                      0 === n3.ty ? (n3.layers = e3(n3.refId, a3), t3(n3.layers, a3)) : 4 === n3.ty ? i2(n3.shapes) : 5 === n3.ty && f(n3);
                    }
                }
                function e3(t4, e4) {
                  var i3 = function(t5, e5) {
                    for (var i4 = 0, r3 = e5.length; i4 < r3; ) {
                      if (e5[i4].id === t5)
                        return e5[i4];
                      i4 += 1;
                    }
                    return null;
                  }(t4, e4);
                  return i3 ? i3.layers.__used ? JSON.parse(JSON.stringify(i3.layers)) : (i3.layers.__used = true, i3.layers) : null;
                }
                function i2(t4) {
                  var e4, s3, a3;
                  for (e4 = t4.length - 1; e4 >= 0; e4 -= 1)
                    if ("sh" === t4[e4].ty)
                      if (t4[e4].ks.k.i)
                        r2(t4[e4].ks.k);
                      else
                        for (a3 = t4[e4].ks.k.length, s3 = 0; s3 < a3; s3 += 1)
                          t4[e4].ks.k[s3].s && r2(t4[e4].ks.k[s3].s[0]), t4[e4].ks.k[s3].e && r2(t4[e4].ks.k[s3].e[0]);
                    else
                      "gr" === t4[e4].ty && i2(t4[e4].it);
                }
                function r2(t4) {
                  var e4, i3 = t4.i.length;
                  for (e4 = 0; e4 < i3; e4 += 1)
                    t4.i[e4][0] += t4.v[e4][0], t4.i[e4][1] += t4.v[e4][1], t4.o[e4][0] += t4.v[e4][0], t4.o[e4][1] += t4.v[e4][1];
                }
                function s2(t4, e4) {
                  var i3 = e4 ? e4.split(".") : [100, 100, 100];
                  return t4[0] > i3[0] || !(i3[0] > t4[0]) && (t4[1] > i3[1] || !(i3[1] > t4[1]) && (t4[2] > i3[2] || !(i3[2] > t4[2]) && null));
                }
                var a2, n2 = function() {
                  var t4 = [4, 4, 14];
                  function e4(t5) {
                    var e5, i3, r3, s3 = t5.length;
                    for (e5 = 0; e5 < s3; e5 += 1)
                      5 === t5[e5].ty && (r3 = void 0, r3 = (i3 = t5[e5]).t.d, i3.t.d = { k: [{ s: r3, t: 0 }] });
                  }
                  return function(i3) {
                    if (s2(t4, i3.v) && (e4(i3.layers), i3.assets)) {
                      var r3, a3 = i3.assets.length;
                      for (r3 = 0; r3 < a3; r3 += 1)
                        i3.assets[r3].layers && e4(i3.assets[r3].layers);
                    }
                  };
                }(), o2 = (a2 = [4, 7, 99], function(t4) {
                  if (t4.chars && !s2(a2, t4.v)) {
                    var e4, r3 = t4.chars.length;
                    for (e4 = 0; e4 < r3; e4 += 1) {
                      var n3 = t4.chars[e4];
                      n3.data && n3.data.shapes && (i2(n3.data.shapes), n3.data.ip = 0, n3.data.op = 99999, n3.data.st = 0, n3.data.sr = 1, n3.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, t4.chars[e4].t || (n3.data.shapes.push({ ty: "no" }), n3.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                    }
                  }
                }), h = function() {
                  var t4 = [5, 7, 15];
                  function e4(t5) {
                    var e5, i3, r3 = t5.length;
                    for (e5 = 0; e5 < r3; e5 += 1)
                      5 === t5[e5].ty && (i3 = void 0, "number" == typeof (i3 = t5[e5].t.p).a && (i3.a = { a: 0, k: i3.a }), "number" == typeof i3.p && (i3.p = { a: 0, k: i3.p }), "number" == typeof i3.r && (i3.r = { a: 0, k: i3.r }));
                  }
                  return function(i3) {
                    if (s2(t4, i3.v) && (e4(i3.layers), i3.assets)) {
                      var r3, a3 = i3.assets.length;
                      for (r3 = 0; r3 < a3; r3 += 1)
                        i3.assets[r3].layers && e4(i3.assets[r3].layers);
                    }
                  };
                }(), l = function() {
                  var t4 = [4, 1, 9];
                  function e4(t5) {
                    var i4, r3, s3, a3 = t5.length;
                    for (i4 = 0; i4 < a3; i4 += 1)
                      if ("gr" === t5[i4].ty)
                        e4(t5[i4].it);
                      else if ("fl" === t5[i4].ty || "st" === t5[i4].ty)
                        if (t5[i4].c.k && t5[i4].c.k[0].i)
                          for (s3 = t5[i4].c.k.length, r3 = 0; r3 < s3; r3 += 1)
                            t5[i4].c.k[r3].s && (t5[i4].c.k[r3].s[0] /= 255, t5[i4].c.k[r3].s[1] /= 255, t5[i4].c.k[r3].s[2] /= 255, t5[i4].c.k[r3].s[3] /= 255), t5[i4].c.k[r3].e && (t5[i4].c.k[r3].e[0] /= 255, t5[i4].c.k[r3].e[1] /= 255, t5[i4].c.k[r3].e[2] /= 255, t5[i4].c.k[r3].e[3] /= 255);
                        else
                          t5[i4].c.k[0] /= 255, t5[i4].c.k[1] /= 255, t5[i4].c.k[2] /= 255, t5[i4].c.k[3] /= 255;
                  }
                  function i3(t5) {
                    var i4, r3 = t5.length;
                    for (i4 = 0; i4 < r3; i4 += 1)
                      4 === t5[i4].ty && e4(t5[i4].shapes);
                  }
                  return function(e5) {
                    if (s2(t4, e5.v) && (i3(e5.layers), e5.assets)) {
                      var r3, a3 = e5.assets.length;
                      for (r3 = 0; r3 < a3; r3 += 1)
                        e5.assets[r3].layers && i3(e5.assets[r3].layers);
                    }
                  };
                }(), p = function() {
                  var t4 = [4, 4, 18];
                  function e4(t5) {
                    var i4, r3, s3;
                    for (i4 = t5.length - 1; i4 >= 0; i4 -= 1)
                      if ("sh" === t5[i4].ty)
                        if (t5[i4].ks.k.i)
                          t5[i4].ks.k.c = t5[i4].closed;
                        else
                          for (s3 = t5[i4].ks.k.length, r3 = 0; r3 < s3; r3 += 1)
                            t5[i4].ks.k[r3].s && (t5[i4].ks.k[r3].s[0].c = t5[i4].closed), t5[i4].ks.k[r3].e && (t5[i4].ks.k[r3].e[0].c = t5[i4].closed);
                      else
                        "gr" === t5[i4].ty && e4(t5[i4].it);
                  }
                  function i3(t5) {
                    var i4, r3, s3, a3, n3, o3, h2 = t5.length;
                    for (r3 = 0; r3 < h2; r3 += 1) {
                      if ((i4 = t5[r3]).hasMask) {
                        var l2 = i4.masksProperties;
                        for (a3 = l2.length, s3 = 0; s3 < a3; s3 += 1)
                          if (l2[s3].pt.k.i)
                            l2[s3].pt.k.c = l2[s3].cl;
                          else
                            for (o3 = l2[s3].pt.k.length, n3 = 0; n3 < o3; n3 += 1)
                              l2[s3].pt.k[n3].s && (l2[s3].pt.k[n3].s[0].c = l2[s3].cl), l2[s3].pt.k[n3].e && (l2[s3].pt.k[n3].e[0].c = l2[s3].cl);
                      }
                      4 === i4.ty && e4(i4.shapes);
                    }
                  }
                  return function(e5) {
                    if (s2(t4, e5.v) && (i3(e5.layers), e5.assets)) {
                      var r3, a3 = e5.assets.length;
                      for (r3 = 0; r3 < a3; r3 += 1)
                        e5.assets[r3].layers && i3(e5.assets[r3].layers);
                    }
                  };
                }();
                function f(t4) {
                  0 === t4.t.a.length && t4.t.p;
                }
                var m = { completeData: function(i3) {
                  i3.__complete || (l(i3), n2(i3), o2(i3), h(i3), p(i3), t3(i3.layers, i3.assets), function(i4, r3) {
                    if (i4) {
                      var s3 = 0, a3 = i4.length;
                      for (s3 = 0; s3 < a3; s3 += 1)
                        1 === i4[s3].t && (i4[s3].data.layers = e3(i4[s3].data.refId, r3), t3(i4[s3].data.layers, r3));
                    }
                  }(i3.chars, i3.assets), i3.__complete = true);
                } };
                return m.checkColors = l, m.checkChars = o2, m.checkPathProperties = h, m.checkShapes = p, m.completeLayers = t3, m;
              }()), a.assetLoader || (a.assetLoader = function() {
                function t3(t4) {
                  var e3 = t4.getResponseHeader("content-type");
                  return e3 && "json" === t4.responseType && -1 !== e3.indexOf("json") || t4.response && "object" === _typeof$5(t4.response) ? t4.response : t4.response && "string" == typeof t4.response ? JSON.parse(t4.response) : t4.responseText ? JSON.parse(t4.responseText) : null;
                }
                return { load: function(e3, i2, r2, s2) {
                  var a2, n2 = new XMLHttpRequest();
                  try {
                    n2.responseType = "json";
                  } catch (t4) {
                  }
                  n2.onreadystatechange = function() {
                    if (4 === n2.readyState)
                      if (200 === n2.status)
                        a2 = t3(n2), r2(a2);
                      else
                        try {
                          a2 = t3(n2), r2(a2);
                        } catch (t4) {
                          s2 && s2(t4);
                        }
                  };
                  try {
                    n2.open(["G", "E", "T"].join(""), e3, true);
                  } catch (t4) {
                    n2.open(["G", "E", "T"].join(""), i2 + "/" + e3, true);
                  }
                  n2.send();
                } };
              }()), "loadAnimation" === t2.data.type)
                a.assetLoader.load(t2.data.path, t2.data.fullPath, function(e3) {
                  a.dataManager.completeData(e3), a.postMessage({ id: t2.data.id, payload: e3, status: "success" });
                }, function() {
                  a.postMessage({ id: t2.data.id, status: "error" });
                });
              else if ("complete" === t2.data.type) {
                var e2 = t2.data.animation;
                a.dataManager.completeData(e2), a.postMessage({ id: t2.data.id, payload: e2, status: "success" });
              } else
                "loadData" === t2.data.type && a.assetLoader.load(t2.data.path, t2.data.fullPath, function(e3) {
                  a.postMessage({ id: t2.data.id, payload: e3, status: "success" });
                }, function() {
                  a.postMessage({ id: t2.data.id, status: "error" });
                });
            }), e.onmessage = function(t2) {
              var e2 = t2.data, i2 = e2.id, s2 = r[i2];
              r[i2] = null, "success" === e2.status ? s2.onComplete(e2.payload) : s2.onError && s2.onError();
            });
          }
          function o(t2, e2) {
            var s2 = "processId_" + (i += 1);
            return r[s2] = { onComplete: t2, onError: e2 }, s2;
          }
          return { loadAnimation: function(t2, i2, r2) {
            n();
            var s2 = o(i2, r2);
            e.postMessage({ type: "loadAnimation", path: t2, fullPath: window.location.origin + window.location.pathname, id: s2 });
          }, loadData: function(t2, i2, r2) {
            n();
            var s2 = o(i2, r2);
            e.postMessage({ type: "loadData", path: t2, fullPath: window.location.origin + window.location.pathname, id: s2 });
          }, completeAnimation: function(t2, i2, r2) {
            n();
            var s2 = o(i2, r2);
            e.postMessage({ type: "complete", animation: t2, id: s2 });
          } };
        }(), ImagePreloader = function() {
          var t = function() {
            var t2 = createTag("canvas");
            t2.width = 1, t2.height = 1;
            var e2 = t2.getContext("2d");
            return e2.fillStyle = "rgba(0,0,0,0)", e2.fillRect(0, 0, 1, 1), t2;
          }();
          function e() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
          }
          function i() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
          }
          function r(t2, e2, i2) {
            var r2 = "";
            if (t2.e)
              r2 = t2.p;
            else if (e2) {
              var s2 = t2.p;
              -1 !== s2.indexOf("images/") && (s2 = s2.split("/")[1]), r2 = e2 + s2;
            } else
              r2 = i2, r2 += t2.u ? t2.u : "", r2 += t2.p;
            return r2;
          }
          function s(t2) {
            var e2 = 0, i2 = setInterval(function() {
              (t2.getBBox().width || e2 > 500) && (this._imageLoaded(), clearInterval(i2)), e2 += 1;
            }.bind(this), 50);
          }
          function a(t2) {
            var e2 = { assetData: t2 }, i2 = r(t2, this.assetsPath, this.path);
            return dataManager.loadData(i2, function(t3) {
              e2.img = t3, this._footageLoaded();
            }.bind(this), function() {
              e2.img = {}, this._footageLoaded();
            }.bind(this)), e2;
          }
          function n() {
            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
          }
          return n.prototype = { loadAssets: function(t2, e2) {
            var i2;
            this.imagesLoadedCb = e2;
            var r2 = t2.length;
            for (i2 = 0; i2 < r2; i2 += 1)
              t2[i2].layers || (t2[i2].t && "seq" !== t2[i2].t ? 3 === t2[i2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t2[i2]))) : (this.totalImages += 1, this.images.push(this._createImageData(t2[i2]))));
          }, setAssetsPath: function(t2) {
            this.assetsPath = t2 || "";
          }, setPath: function(t2) {
            this.path = t2 || "";
          }, loadedImages: function() {
            return this.totalImages === this.loadedAssets;
          }, loadedFootages: function() {
            return this.totalFootages === this.loadedFootagesCount;
          }, destroy: function() {
            this.imagesLoadedCb = null, this.images.length = 0;
          }, getAsset: function(t2) {
            for (var e2 = 0, i2 = this.images.length; e2 < i2; ) {
              if (this.images[e2].assetData === t2)
                return this.images[e2].img;
              e2 += 1;
            }
            return null;
          }, createImgData: function(e2) {
            var i2 = r(e2, this.assetsPath, this.path), s2 = createTag("img");
            s2.crossOrigin = "anonymous", s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener("error", function() {
              a2.img = t, this._imageLoaded();
            }.bind(this), false), s2.src = i2;
            var a2 = { img: s2, assetData: e2 };
            return a2;
          }, createImageData: function(e2) {
            var i2 = r(e2, this.assetsPath, this.path), s2 = createNS("image");
            isSafari ? this.testImageLoaded(s2) : s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener("error", function() {
              a2.img = t, this._imageLoaded();
            }.bind(this), false), s2.setAttributeNS("http://www.w3.org/1999/xlink", "href", i2), this._elementHelper.append ? this._elementHelper.append(s2) : this._elementHelper.appendChild(s2);
            var a2 = { img: s2, assetData: e2 };
            return a2;
          }, imageLoaded: e, footageLoaded: i, setCacheType: function(t2, e2) {
            "svg" === t2 ? (this._elementHelper = e2, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
          } }, n;
        }();
        function BaseEvent() {
        }
        BaseEvent.prototype = { triggerEvent: function(t, e) {
          if (this._cbs[t])
            for (var i = this._cbs[t], r = 0; r < i.length; r += 1)
              i[r](e);
        }, addEventListener: function(t, e) {
          return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
            this.removeEventListener(t, e);
          }.bind(this);
        }, removeEventListener: function(t, e) {
          if (e) {
            if (this._cbs[t]) {
              for (var i = 0, r = this._cbs[t].length; i < r; )
                this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
              this._cbs[t].length || (this._cbs[t] = null);
            }
          } else
            this._cbs[t] = null;
        } };
        var markerParser = function() {
          function t(t2) {
            for (var e, i = t2.split("\r\n"), r = {}, s = 0, a = 0; a < i.length; a += 1)
              2 === (e = i[a].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
            if (0 === s)
              throw new Error();
            return r;
          }
          return function(e) {
            for (var i = [], r = 0; r < e.length; r += 1) {
              var s = e[r], a = { time: s.tm, duration: s.dr };
              try {
                a.payload = JSON.parse(e[r].cm);
              } catch (i2) {
                try {
                  a.payload = t(e[r].cm);
                } catch (t2) {
                  a.payload = { name: e[r].cm };
                }
              }
              i.push(a);
            }
            return i;
          };
        }(), ProjectInterface = function() {
          function t(t2) {
            this.compositions.push(t2);
          }
          return function() {
            function e(t2) {
              for (var e2 = 0, i = this.compositions.length; e2 < i; ) {
                if (this.compositions[e2].data && this.compositions[e2].data.nm === t2)
                  return this.compositions[e2].prepareFrame && this.compositions[e2].data.xt && this.compositions[e2].prepareFrame(this.currentFrame), this.compositions[e2].compInterface;
                e2 += 1;
              }
              return null;
            }
            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
          };
        }(), renderers = {}, registerRenderer = function(t, e) {
          renderers[t] = e;
        };
        function getRenderer(t) {
          return renderers[t];
        }
        function getRegisteredRenderer() {
          if (renderers.canvas)
            return "canvas";
          for (var t in renderers)
            if (renderers[t])
              return t;
          return "";
        }
        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, _typeof$4(t);
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var i = getRenderer(e);
          this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || true === t.loop ? this.loop = true : false === t.loop ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed");
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation);
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var i = { wrapper: t, animationData: e }, r = t.attributes;
          i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
          "false" === s ? i.loop = false : "true" === s ? i.loop = true : "" !== s && (i.loop = parseInt(s, 10));
          var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
          i.autoplay = "false" !== a, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = false), i.path ? this.setParams(i) : this.trigger("destroy");
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, i, r = this.animationData.layers, s = r.length, a = t.layers, n = a.length;
          for (i = 0; i < n; i += 1)
            for (e = 0; e < s; ) {
              if (r[e].id === a[i].id) {
                r[e] = a[i];
                break;
              }
              e += 1;
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (s = t.assets.length, e = 0; e < s; e += 1)
              this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = false, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment();
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments)
            return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
            this.trigger("data_failed");
          }.bind(this));
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded();
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer)
            try {
              this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (t2) {
              this.triggerConfigError(t2);
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = true;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded");
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var i = "number" == typeof t ? t : void 0, r = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(i, r);
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t;
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, AnimationItem.prototype.renderFrame = function() {
          if (false !== this.isLoaded && this.renderer)
            try {
              this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
              this.triggerRenderFrameError(t);
            }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || true === this.isPaused && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || false === this.isPaused && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (true === this.isPaused ? this.play() : this.pause());
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, i = 0; i < this.markers.length; i += 1)
            if ((e = this.markers[i]).payload && e.payload.name === t)
              return e;
          return null;
        }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var s = this.getMarkerData(t);
              s && this.goToAndStop(s.time, true);
            } else
              e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause();
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var s = this.getMarkerData(t);
              s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
            } else
              this.goToAndStop(r, e, i);
            this.play();
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (true !== this.isPaused && false !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier, i = false;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && true !== this.loop ? (i = true, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var i = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, true);
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1)
              this.segments.push(t[i]);
          } else
            this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame();
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier();
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t;
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t);
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume();
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute();
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute();
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, AnimationItem.prototype.getPath = function() {
          return this.path;
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e)
            e = t.p;
          else if (this.assetsPath) {
            var i = t.p;
            -1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i;
          } else
            e = this.path, e += t.u ? t.u : "", e += t.p;
          return e;
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, i = this.assets.length; e < i; ) {
            if (t === this.assets[e].id)
              return this.assets[e];
            e += 1;
          }
          return null;
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide();
        }, AnimationItem.prototype.show = function() {
          this.renderer.show();
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, i);
          } catch (t2) {
          }
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t])
            switch (t) {
              case "enterFrame":
                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                break;
              case "drawnFrame":
                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                break;
              case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                break;
              case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
              default:
                this.triggerEvent(t);
            }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        };
        var animationManager = function() {
          var t = {}, e = [], i = 0, r = 0, s = 0, a = true, n = false;
          function o(t2) {
            for (var i2 = 0, s2 = t2.target; i2 < r; )
              e[i2].animation === s2 && (e.splice(i2, 1), i2 -= 1, r -= 1, s2.isPaused || p()), i2 += 1;
          }
          function h(t2, i2) {
            if (!t2)
              return null;
            for (var s2 = 0; s2 < r; ) {
              if (e[s2].elem === t2 && null !== e[s2].elem)
                return e[s2].animation;
              s2 += 1;
            }
            var a2 = new AnimationItem();
            return f(a2, t2), a2.setData(t2, i2), a2;
          }
          function l() {
            s += 1, d();
          }
          function p() {
            s -= 1;
          }
          function f(t2, i2) {
            t2.addEventListener("destroy", o), t2.addEventListener("_active", l), t2.addEventListener("_idle", p), e.push({ elem: i2, animation: t2 }), r += 1;
          }
          function m(t2) {
            var o2, h2 = t2 - i;
            for (o2 = 0; o2 < r; o2 += 1)
              e[o2].animation.advanceTime(h2);
            i = t2, s && !n ? window.requestAnimationFrame(m) : a = true;
          }
          function c(t2) {
            i = t2, window.requestAnimationFrame(m);
          }
          function d() {
            !n && s && a && (window.requestAnimationFrame(c), a = false);
          }
          return t.registerAnimation = h, t.loadAnimation = function(t2) {
            var e2 = new AnimationItem();
            return f(e2, null), e2.setParams(t2), e2;
          }, t.setSpeed = function(t2, i2) {
            var s2;
            for (s2 = 0; s2 < r; s2 += 1)
              e[s2].animation.setSpeed(t2, i2);
          }, t.setDirection = function(t2, i2) {
            var s2;
            for (s2 = 0; s2 < r; s2 += 1)
              e[s2].animation.setDirection(t2, i2);
          }, t.play = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.play(t2);
          }, t.pause = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.pause(t2);
          }, t.stop = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.stop(t2);
          }, t.togglePause = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.togglePause(t2);
          }, t.searchAnimations = function(t2, e2, i2) {
            var r2, s2 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a2 = s2.length;
            for (r2 = 0; r2 < a2; r2 += 1)
              i2 && s2[r2].setAttribute("data-bm-type", i2), h(s2[r2], t2);
            if (e2 && 0 === a2) {
              i2 || (i2 = "svg");
              var n2 = document.getElementsByTagName("body")[0];
              n2.innerText = "";
              var o2 = createTag("div");
              o2.style.width = "100%", o2.style.height = "100%", o2.setAttribute("data-bm-type", i2), n2.appendChild(o2), h(o2, t2);
            }
          }, t.resize = function() {
            var t2;
            for (t2 = 0; t2 < r; t2 += 1)
              e[t2].animation.resize();
          }, t.goToAndStop = function(t2, i2, s2) {
            var a2;
            for (a2 = 0; a2 < r; a2 += 1)
              e[a2].animation.goToAndStop(t2, i2, s2);
          }, t.destroy = function(t2) {
            var i2;
            for (i2 = r - 1; i2 >= 0; i2 -= 1)
              e[i2].animation.destroy(t2);
          }, t.freeze = function() {
            n = true;
          }, t.unfreeze = function() {
            n = false, d();
          }, t.setVolume = function(t2, i2) {
            var s2;
            for (s2 = 0; s2 < r; s2 += 1)
              e[s2].animation.setVolume(t2, i2);
          }, t.mute = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.mute(t2);
          }, t.unmute = function(t2) {
            var i2;
            for (i2 = 0; i2 < r; i2 += 1)
              e[i2].animation.unmute(t2);
          }, t.getRegisteredAnimations = function() {
            var t2, i2 = e.length, r2 = [];
            for (t2 = 0; t2 < i2; t2 += 1)
              r2.push(e[t2].animation);
            return r2;
          }, t;
        }(), BezierFactory = function() {
          var t = { getBezierEasing: function(t2, i2, r2, s2, a2) {
            var n2 = a2 || ("bez_" + t2 + "_" + i2 + "_" + r2 + "_" + s2).replace(/\./g, "p");
            if (e[n2])
              return e[n2];
            var o2 = new l([t2, i2, r2, s2]);
            return e[n2] = o2, o2;
          } }, e = {};
          var i = 0.1, r = "function" == typeof Float32Array;
          function s(t2, e2) {
            return 1 - 3 * e2 + 3 * t2;
          }
          function a(t2, e2) {
            return 3 * e2 - 6 * t2;
          }
          function n(t2) {
            return 3 * t2;
          }
          function o(t2, e2, i2) {
            return ((s(e2, i2) * t2 + a(e2, i2)) * t2 + n(e2)) * t2;
          }
          function h(t2, e2, i2) {
            return 3 * s(e2, i2) * t2 * t2 + 2 * a(e2, i2) * t2 + n(e2);
          }
          function l(t2) {
            this._p = t2, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = false, this.get = this.get.bind(this);
          }
          return l.prototype = { get: function(t2) {
            var e2 = this._p[0], i2 = this._p[1], r2 = this._p[2], s2 = this._p[3];
            return this._precomputed || this._precompute(), e2 === i2 && r2 === s2 ? t2 : 0 === t2 ? 0 : 1 === t2 ? 1 : o(this._getTForX(t2), i2, s2);
          }, _precompute: function() {
            var t2 = this._p[0], e2 = this._p[1], i2 = this._p[2], r2 = this._p[3];
            this._precomputed = true, t2 === e2 && i2 === r2 || this._calcSampleValues();
          }, _calcSampleValues: function() {
            for (var t2 = this._p[0], e2 = this._p[2], r2 = 0; r2 < 11; ++r2)
              this._mSampleValues[r2] = o(r2 * i, t2, e2);
          }, _getTForX: function(t2) {
            for (var e2 = this._p[0], r2 = this._p[2], s2 = this._mSampleValues, a2 = 0, n2 = 1; 10 !== n2 && s2[n2] <= t2; ++n2)
              a2 += i;
            var l2 = a2 + (t2 - s2[--n2]) / (s2[n2 + 1] - s2[n2]) * i, p = h(l2, e2, r2);
            return p >= 1e-3 ? function(t3, e3, i2, r3) {
              for (var s3 = 0; s3 < 4; ++s3) {
                var a3 = h(e3, i2, r3);
                if (0 === a3)
                  return e3;
                e3 -= (o(e3, i2, r3) - t3) / a3;
              }
              return e3;
            }(t2, l2, e2, r2) : 0 === p ? l2 : function(t3, e3, i2, r3, s3) {
              var a3, n3, h2 = 0;
              do {
                (a3 = o(n3 = e3 + (i2 - e3) / 2, r3, s3) - t3) > 0 ? i2 = n3 : e3 = n3;
              } while (Math.abs(a3) > 1e-7 && ++h2 < 10);
              return n3;
            }(t2, a2, a2 + i, e2, r2);
          } }, t;
        }(), pooling = { double: function(t) {
          return t.concat(createSizedArray(t.length));
        } }, poolFactory = function(t, e, i) {
          var r = 0, s = t, a = createSizedArray(s);
          return { newElement: function() {
            return r ? a[r -= 1] : e();
          }, release: function(t2) {
            r === s && (a = pooling.double(a), s *= 2), i && i(t2), a[r] = t2, r += 1;
          } };
        }, bezierLengthPool = poolFactory(8, function() {
          return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
        }), segmentsLengthPool = poolFactory(8, function() {
          return { lengths: [], totalLength: 0 };
        }, function(t) {
          var e, i = t.lengths.length;
          for (e = 0; e < i; e += 1)
            bezierLengthPool.release(t.lengths[e]);
          t.lengths.length = 0;
        });
        function bezFunction() {
          var t = Math;
          function e(t2, e2, i2, r2, s2, a2) {
            var n2 = t2 * r2 + e2 * s2 + i2 * a2 - s2 * r2 - a2 * t2 - i2 * e2;
            return n2 > -1e-3 && n2 < 1e-3;
          }
          var i = function(t2, e2, i2, r2) {
            var s2, a2, n2, o2, h2, l, p = getDefaultCurveSegments(), f = 0, m = [], c = [], d = bezierLengthPool.newElement();
            for (n2 = i2.length, s2 = 0; s2 < p; s2 += 1) {
              for (h2 = s2 / (p - 1), l = 0, a2 = 0; a2 < n2; a2 += 1)
                o2 = bmPow(1 - h2, 3) * t2[a2] + 3 * bmPow(1 - h2, 2) * h2 * i2[a2] + 3 * (1 - h2) * bmPow(h2, 2) * r2[a2] + bmPow(h2, 3) * e2[a2], m[a2] = o2, null !== c[a2] && (l += bmPow(m[a2] - c[a2], 2)), c[a2] = m[a2];
              l && (f += l = bmSqrt(l)), d.percents[s2] = h2, d.lengths[s2] = f;
            }
            return d.addedLength = f, d;
          };
          function r(t2) {
            this.segmentLength = 0, this.points = new Array(t2);
          }
          function s(t2, e2) {
            this.partialLength = t2, this.point = e2;
          }
          var a, n = (a = {}, function(t2, i2, n2, o2) {
            var h2 = (t2[0] + "_" + t2[1] + "_" + i2[0] + "_" + i2[1] + "_" + n2[0] + "_" + n2[1] + "_" + o2[0] + "_" + o2[1]).replace(/\./g, "p");
            if (!a[h2]) {
              var l, p, f, m, c, d, u, y = getDefaultCurveSegments(), g = 0, v = null;
              2 === t2.length && (t2[0] !== i2[0] || t2[1] !== i2[1]) && e(t2[0], t2[1], i2[0], i2[1], t2[0] + n2[0], t2[1] + n2[1]) && e(t2[0], t2[1], i2[0], i2[1], i2[0] + o2[0], i2[1] + o2[1]) && (y = 2);
              var b = new r(y);
              for (f = n2.length, l = 0; l < y; l += 1) {
                for (u = createSizedArray(f), c = l / (y - 1), d = 0, p = 0; p < f; p += 1)
                  m = bmPow(1 - c, 3) * t2[p] + 3 * bmPow(1 - c, 2) * c * (t2[p] + n2[p]) + 3 * (1 - c) * bmPow(c, 2) * (i2[p] + o2[p]) + bmPow(c, 3) * i2[p], u[p] = m, null !== v && (d += bmPow(u[p] - v[p], 2));
                g += d = bmSqrt(d), b.points[l] = new s(d, u), v = u;
              }
              b.segmentLength = g, a[h2] = b;
            }
            return a[h2];
          });
          function o(t2, e2) {
            var i2 = e2.percents, r2 = e2.lengths, s2 = i2.length, a2 = bmFloor((s2 - 1) * t2), n2 = t2 * e2.addedLength, o2 = 0;
            if (a2 === s2 - 1 || 0 === a2 || n2 === r2[a2])
              return i2[a2];
            for (var h2 = r2[a2] > n2 ? -1 : 1, l = true; l; )
              if (r2[a2] <= n2 && r2[a2 + 1] > n2 ? (o2 = (n2 - r2[a2]) / (r2[a2 + 1] - r2[a2]), l = false) : a2 += h2, a2 < 0 || a2 >= s2 - 1) {
                if (a2 === s2 - 1)
                  return i2[a2];
                l = false;
              }
            return i2[a2] + (i2[a2 + 1] - i2[a2]) * o2;
          }
          var h = createTypedArray("float32", 8);
          return { getSegmentsLength: function(t2) {
            var e2, r2 = segmentsLengthPool.newElement(), s2 = t2.c, a2 = t2.v, n2 = t2.o, o2 = t2.i, h2 = t2._length, l = r2.lengths, p = 0;
            for (e2 = 0; e2 < h2 - 1; e2 += 1)
              l[e2] = i(a2[e2], a2[e2 + 1], n2[e2], o2[e2 + 1]), p += l[e2].addedLength;
            return s2 && h2 && (l[e2] = i(a2[e2], a2[0], n2[e2], o2[0]), p += l[e2].addedLength), r2.totalLength = p, r2;
          }, getNewSegment: function(e2, i2, r2, s2, a2, n2, l) {
            a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1);
            var p, f = o(a2, l), m = o(n2 = n2 > 1 ? 1 : n2, l), c = e2.length, d = 1 - f, u = 1 - m, y = d * d * d, g = f * d * d * 3, v = f * f * d * 3, b = f * f * f, x = d * d * u, P = f * d * u + d * f * u + d * d * m, E = f * f * u + d * f * m + f * d * m, S = f * f * m, C = d * u * u, _ = f * u * u + d * m * u + d * u * m, A = f * m * u + d * m * m + f * u * m, T = f * m * m, M = u * u * u, k = m * u * u + u * m * u + u * u * m, D = m * m * u + u * m * m + m * u * m, F = m * m * m;
            for (p = 0; p < c; p += 1)
              h[4 * p] = t.round(1e3 * (y * e2[p] + g * r2[p] + v * s2[p] + b * i2[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (x * e2[p] + P * r2[p] + E * s2[p] + S * i2[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e2[p] + _ * r2[p] + A * s2[p] + T * i2[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (M * e2[p] + k * r2[p] + D * s2[p] + F * i2[p])) / 1e3;
            return h;
          }, getPointInSegment: function(e2, i2, r2, s2, a2, n2) {
            var h2 = o(a2, n2), l = 1 - h2;
            return [t.round(1e3 * (l * l * l * e2[0] + (h2 * l * l + l * h2 * l + l * l * h2) * r2[0] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[0] + h2 * h2 * h2 * i2[0])) / 1e3, t.round(1e3 * (l * l * l * e2[1] + (h2 * l * l + l * h2 * l + l * l * h2) * r2[1] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[1] + h2 * h2 * h2 * i2[1])) / 1e3];
          }, buildBezierData: n, pointOnLine2D: e, pointOnLine3D: function(i2, r2, s2, a2, n2, o2, h2, l, p) {
            if (0 === s2 && 0 === o2 && 0 === p)
              return e(i2, r2, a2, n2, h2, l);
            var f, m = t.sqrt(t.pow(a2 - i2, 2) + t.pow(n2 - r2, 2) + t.pow(o2 - s2, 2)), c = t.sqrt(t.pow(h2 - i2, 2) + t.pow(l - r2, 2) + t.pow(p - s2, 2)), d = t.sqrt(t.pow(h2 - a2, 2) + t.pow(l - n2, 2) + t.pow(p - o2, 2));
            return (f = m > c ? m > d ? m - c - d : d - c - m : d > c ? d - c - m : c - m - d) > -1e-4 && f < 1e-4;
          } };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t, e) {
          var i, r = this.offsetTime;
          "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
          for (var s, a, n, o, h, l, p, f, m, c = e.lastIndex, d = c, u = this.keyframes.length - 1, y = true; y; ) {
            if (s = this.keyframes[d], a = this.keyframes[d + 1], d === u - 1 && t >= a.t - r) {
              s.h && (s = a), c = 0;
              break;
            }
            if (a.t - r > t) {
              c = d;
              break;
            }
            d < u - 1 ? d += 1 : (c = 0, y = false);
          }
          n = this.keyframesMetadata[d] || {};
          var g, v = a.t - r, b = s.t - r;
          if (s.to) {
            n.bezierData || (n.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
            var x = n.bezierData;
            if (t >= v || t < b) {
              var P = t >= v ? x.points.length - 1 : 0;
              for (h = x.points[P].point.length, o = 0; o < h; o += 1)
                i[o] = x.points[P].point[o];
            } else {
              n.__fnct ? m = n.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, n.__fnct = m), l = m((t - b) / (v - b));
              var E, S = x.segmentLength * l, C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (f = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = true, p = x.points.length; y; ) {
                if (C += x.points[f].partialLength, 0 === S || 0 === l || f === x.points.length - 1) {
                  for (h = x.points[f].point.length, o = 0; o < h; o += 1)
                    i[o] = x.points[f].point[o];
                  break;
                }
                if (S >= C && S < C + x.points[f + 1].partialLength) {
                  for (E = (S - C) / x.points[f + 1].partialLength, h = x.points[f].point.length, o = 0; o < h; o += 1)
                    i[o] = x.points[f].point[o] + (x.points[f + 1].point[o] - x.points[f].point[o]) * E;
                  break;
                }
                f < p - 1 ? f += 1 : y = false;
              }
              e._lastPoint = f, e._lastAddedLength = C - x.points[f].partialLength, e._lastKeyframeIndex = d;
            }
          } else {
            var _, A, T, M, k;
            if (u = s.s.length, g = a.s || s.e, this.sh && 1 !== s.h)
              if (t >= v)
                i[0] = g[0], i[1] = g[1], i[2] = g[2];
              else if (t <= b)
                i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2];
              else {
                quaternionToEuler(i, slerp(createQuaternion(s.s), createQuaternion(g), (t - b) / (v - b)));
              }
            else
              for (d = 0; d < u; d += 1)
                1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[d] ? m = n.__fnct[d] : (_ = void 0 === s.o.x[d] ? s.o.x[0] : s.o.x[d], A = void 0 === s.o.y[d] ? s.o.y[0] : s.o.y[d], T = void 0 === s.i.x[d] ? s.i.x[0] : s.i.x[d], M = void 0 === s.i.y[d] ? s.i.y[0] : s.i.y[d], m = BezierFactory.getBezierEasing(_, A, T, M).get, n.__fnct[d] = m)) : n.__fnct ? m = n.__fnct : (_ = s.o.x, A = s.o.y, T = s.i.x, M = s.i.y, m = BezierFactory.getBezierEasing(_, A, T, M).get, s.keyframeMetadata = m), l = m((t - b) / (v - b)))), g = a.s || s.e, k = 1 === s.h ? s.s[d] : s.s[d] + (g[d] - s.s[d]) * l, "multidimensional" === this.propType ? i[d] = k : i = k;
          }
          return e.lastIndex = c, i;
        }
        function slerp(t, e, i) {
          var r, s, a, n, o, h = [], l = t[0], p = t[1], f = t[2], m = t[3], c = e[0], d = e[1], u = e[2], y = e[3];
          return (s = l * c + p * d + f * u + m * y) < 0 && (s = -s, c = -c, d = -d, u = -u, y = -y), 1 - s > 1e-6 ? (r = Math.acos(s), a = Math.sin(r), n = Math.sin((1 - i) * r) / a, o = Math.sin(i * r) / a) : (n = 1 - i, o = i), h[0] = n * l + o * c, h[1] = n * p + o * d, h[2] = n * f + o * u, h[3] = n * m + o * y, h;
        }
        function quaternionToEuler(t, e) {
          var i = e[0], r = e[1], s = e[2], a = e[3], n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s), o = Math.asin(2 * i * r + 2 * s * a), h = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
          t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads;
        }
        function createQuaternion(t) {
          var e = t[0] * degToRads, i = t[1] * degToRads, r = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(i / 2), n = Math.cos(r / 2), o = Math.sin(e / 2), h = Math.sin(i / 2), l = Math.sin(r / 2);
          return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l];
        }
        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var r = this.interpolateValue(t, this._caching);
            this.pv = r;
          }
          return this._caching.lastFrame = t, this.pv;
        }
        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType)
            e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
          else
            for (var i = 0, r = this.v.length; i < r; )
              e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = true), i += 1;
        }
        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock)
              this.setVValue(this.pv);
            else {
              var t;
              this.lock = true, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1)
                i = this.effectsSequence[t](i);
              this.setVValue(i), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
            }
        }
        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this);
        }
        function ValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = r, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(t, e, i, r) {
          var s;
          this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = false, this.elem = t, this.container = r, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
          var a = e.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)
            this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
          this._isFirstFrame = true, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function KeyframedValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(t, e, i, r) {
          var s;
          this.propType = "multidimensional";
          var a, n, o, h, l = e.k.length;
          for (s = 0; s < l - 1; s += 1)
            e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var p = e.k[0].s.length;
          for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1)
            this.v[s] = initFrame, this.pv[s] = initFrame;
          this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", p) }, this.addEffect = addEffect;
        }
        var PropertyFactory = { getProp: function(t, e, i, r, s) {
          var a;
          if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
            if ("number" == typeof e.k[0])
              a = new MultiDimensionalProperty(t, e, r, s);
            else
              switch (i) {
                case 0:
                  a = new KeyframedValueProperty(t, e, r, s);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(t, e, r, s);
              }
          else
            a = new ValueProperty(t, e, r, s);
          return a.effectsSequence.length && s.addDynamicProperty(a), a;
        } };
        function DynamicPropertyContainer() {
        }
        DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {
          -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
        }, iterateDynamicProperties: function() {
          var t;
          this._mdf = false;
          var e = this.dynamicProperties.length;
          for (t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
        }, initDynamicPropertyContainer: function(t) {
          this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
        } };
        var pointPool = poolFactory(8, function() {
          return createTypedArray("float32", 2);
        });
        function ShapePath() {
          this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var i = 0; i < e; )
            this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1;
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t; )
            this.doubleArrayLength();
          this._length = t;
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
        }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
          var a;
          switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = [];
          }
          (!a[r] || a[r] && !s) && (a[r] = pointPool.newElement()), a[r][0] = t, a[r][1] = e;
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, o) {
          this.setXYAt(t, e, "v", n, o), this.setXYAt(i, r, "o", n, o), this.setXYAt(s, a, "i", n, o);
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath();
          t.setPathData(this.c, this._length);
          var e = this.v, i = this.o, r = this.i, s = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, false), s = 1);
          var a, n = this._length - 1, o = this._length;
          for (a = s; a < o; a += 1)
            t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, false), n -= 1;
          return t;
        }, ShapePath.prototype.length = function() {
          return this._length;
        };
        var shapePool = (factory = poolFactory(4, function() {
          return new ShapePath();
        }, function(t) {
          var e, i = t._length;
          for (e = 0; e < i; e += 1)
            pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
          t._length = 0, t.c = false;
        }), factory.clone = function(t) {
          var e, i = factory.newElement(), r = void 0 === t._length ? t.v.length : t._length;
          for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1)
            i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
          return i;
        }, factory), factory;
        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1)
            shapePool.release(this.shapes[t]);
          this._length = 0;
        };
        var shapeCollectionPool = (ob = { newShapeCollection: function() {
          return _length ? pool[_length -= 1] : new ShapeCollection();
        }, release: function(t) {
          var e, i = t._length;
          for (e = 0; e < i; e += 1)
            shapePool.release(t.shapes[e]);
          t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;
        } }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
          var t = -999999;
          function e(t2, e2, i2) {
            var r2, s2, a2, n2, o2, h2, l2, p2, f2, m2 = i2.lastIndex, c = this.keyframes;
            if (t2 < c[0].t - this.offsetTime)
              r2 = c[0].s[0], a2 = true, m2 = 0;
            else if (t2 >= c[c.length - 1].t - this.offsetTime)
              r2 = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a2 = true;
            else {
              for (var d, u, y, g = m2, v = c.length - 1, b = true; b && (d = c[g], !((u = c[g + 1]).t - this.offsetTime > t2)); )
                g < v - 1 ? g += 1 : b = false;
              if (y = this.keyframesMetadata[g] || {}, m2 = g, !(a2 = 1 === d.h)) {
                if (t2 >= u.t - this.offsetTime)
                  p2 = 1;
                else if (t2 < d.t - this.offsetTime)
                  p2 = 0;
                else {
                  var x;
                  y.__fnct ? x = y.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = x), p2 = x((t2 - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
                }
                s2 = u.s ? u.s[0] : d.e[0];
              }
              r2 = d.s[0];
            }
            for (h2 = e2._length, l2 = r2.i[0].length, i2.lastIndex = m2, n2 = 0; n2 < h2; n2 += 1)
              for (o2 = 0; o2 < l2; o2 += 1)
                f2 = a2 ? r2.i[n2][o2] : r2.i[n2][o2] + (s2.i[n2][o2] - r2.i[n2][o2]) * p2, e2.i[n2][o2] = f2, f2 = a2 ? r2.o[n2][o2] : r2.o[n2][o2] + (s2.o[n2][o2] - r2.o[n2][o2]) * p2, e2.o[n2][o2] = f2, f2 = a2 ? r2.v[n2][o2] : r2.v[n2][o2] + (s2.v[n2][o2] - r2.v[n2][o2]) * p2, e2.v[n2][o2] = f2;
          }
          function i() {
            var e2 = this.comp.renderedFrame - this.offsetTime, i2 = this.keyframes[0].t - this.offsetTime, r2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, s2 = this._caching.lastFrame;
            return s2 !== t && (s2 < i2 && e2 < i2 || s2 > r2 && e2 > r2) || (this._caching.lastIndex = s2 < e2 ? this._caching.lastIndex : 0, this.interpolateShape(e2, this.pv, this._caching)), this._caching.lastFrame = e2, this.pv;
          }
          function r() {
            this.paths = this.localShapeCollection;
          }
          function s(t2) {
            (function(t3, e2) {
              if (t3._length !== e2._length || t3.c !== e2.c)
                return false;
              var i2, r2 = t3._length;
              for (i2 = 0; i2 < r2; i2 += 1)
                if (t3.v[i2][0] !== e2.v[i2][0] || t3.v[i2][1] !== e2.v[i2][1] || t3.o[i2][0] !== e2.o[i2][0] || t3.o[i2][1] !== e2.o[i2][1] || t3.i[i2][0] !== e2.i[i2][0] || t3.i[i2][1] !== e2.i[i2][1])
                  return false;
              return true;
            })(this.v, t2) || (this.v = shapePool.clone(t2), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
          }
          function a() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock)
                  this.setVValue(this.pv);
                else {
                  var t2, e2;
                  this.lock = true, this._mdf = false, t2 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                  var i2 = this.effectsSequence.length;
                  for (e2 = 0; e2 < i2; e2 += 1)
                    t2 = this.effectsSequence[e2](t2);
                  this.setVValue(t2), this.lock = false, this.frameId = this.elem.globalData.frameId;
                }
              else
                this._mdf = false;
          }
          function n(t2, e2, i2) {
            this.propType = "shape", this.comp = t2.comp, this.container = t2, this.elem = t2, this.data = e2, this.k = false, this.kf = false, this._mdf = false;
            var s2 = 3 === i2 ? e2.pt.k : e2.ks.k;
            this.v = shapePool.clone(s2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
          }
          function o(t2) {
            this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
          }
          function h(e2, s2, a2) {
            this.propType = "shape", this.comp = e2.comp, this.elem = e2, this.container = e2, this.offsetTime = e2.data.st, this.keyframes = 3 === a2 ? s2.pt.k : s2.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
            var n2 = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [i.bind(this)];
          }
          n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = s, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
          var l = function() {
            var t2 = roundCorner;
            function e2(t3, e3) {
              this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e3.d, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e3.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e3.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
            }
            return e2.prototype = { reset: r, getValue: function() {
              this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
            }, convertEllToPath: function() {
              var e3 = this.p.v[0], i2 = this.p.v[1], r2 = this.s.v[0] / 2, s2 = this.s.v[1] / 2, a2 = 3 !== this.d, n2 = this.v;
              n2.v[0][0] = e3, n2.v[0][1] = i2 - s2, n2.v[1][0] = a2 ? e3 + r2 : e3 - r2, n2.v[1][1] = i2, n2.v[2][0] = e3, n2.v[2][1] = i2 + s2, n2.v[3][0] = a2 ? e3 - r2 : e3 + r2, n2.v[3][1] = i2, n2.i[0][0] = a2 ? e3 - r2 * t2 : e3 + r2 * t2, n2.i[0][1] = i2 - s2, n2.i[1][0] = a2 ? e3 + r2 : e3 - r2, n2.i[1][1] = i2 - s2 * t2, n2.i[2][0] = a2 ? e3 + r2 * t2 : e3 - r2 * t2, n2.i[2][1] = i2 + s2, n2.i[3][0] = a2 ? e3 - r2 : e3 + r2, n2.i[3][1] = i2 + s2 * t2, n2.o[0][0] = a2 ? e3 + r2 * t2 : e3 - r2 * t2, n2.o[0][1] = i2 - s2, n2.o[1][0] = a2 ? e3 + r2 : e3 - r2, n2.o[1][1] = i2 + s2 * t2, n2.o[2][0] = a2 ? e3 - r2 * t2 : e3 + r2 * t2, n2.o[2][1] = i2 + s2, n2.o[3][0] = a2 ? e3 - r2 : e3 + r2, n2.o[3][1] = i2 - s2 * t2;
            } }, extendPrototype([DynamicPropertyContainer], e2), e2;
          }(), p = function() {
            function t2(t3, e2) {
              this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = t3, this.comp = t3.comp, this.data = e2, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), 1 === e2.sy ? (this.ir = PropertyFactory.getProp(t3, e2.ir, 0, 0, this), this.is = PropertyFactory.getProp(t3, e2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t3, e2.pt, 0, 0, this), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t3, e2.or, 0, 0, this), this.os = PropertyFactory.getProp(t3, e2.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
            }
            return t2.prototype = { reset: r, getValue: function() {
              this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
            }, convertStarToPath: function() {
              var t3, e2, i2, r2, s2 = 2 * Math.floor(this.pt.v), a2 = 2 * Math.PI / s2, n2 = true, o2 = this.or.v, h2 = this.ir.v, l2 = this.os.v, p2 = this.is.v, f2 = 2 * Math.PI * o2 / (2 * s2), m2 = 2 * Math.PI * h2 / (2 * s2), c = -Math.PI / 2;
              c += this.r.v;
              var d = 3 === this.data.d ? -1 : 1;
              for (this.v._length = 0, t3 = 0; t3 < s2; t3 += 1) {
                i2 = n2 ? l2 : p2, r2 = n2 ? f2 : m2;
                var u = (e2 = n2 ? o2 : h2) * Math.cos(c), y = e2 * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * r2 * i2 * d, y - v * r2 * i2 * d, u + g * r2 * i2 * d, y + v * r2 * i2 * d, t3, true), n2 = !n2, c += a2 * d;
              }
            }, convertPolygonToPath: function() {
              var t3, e2 = Math.floor(this.pt.v), i2 = 2 * Math.PI / e2, r2 = this.or.v, s2 = this.os.v, a2 = 2 * Math.PI * r2 / (4 * e2), n2 = 0.5 * -Math.PI, o2 = 3 === this.data.d ? -1 : 1;
              for (n2 += this.r.v, this.v._length = 0, t3 = 0; t3 < e2; t3 += 1) {
                var h2 = r2 * Math.cos(n2), l2 = r2 * Math.sin(n2), p2 = 0 === h2 && 0 === l2 ? 0 : l2 / Math.sqrt(h2 * h2 + l2 * l2), f2 = 0 === h2 && 0 === l2 ? 0 : -h2 / Math.sqrt(h2 * h2 + l2 * l2);
                h2 += +this.p.v[0], l2 += +this.p.v[1], this.v.setTripleAt(h2, l2, h2 - p2 * a2 * s2 * o2, l2 - f2 * a2 * s2 * o2, h2 + p2 * a2 * s2 * o2, l2 + f2 * a2 * s2 * o2, t3, true), n2 += i2 * o2;
              }
              this.paths.length = 0, this.paths[0] = this.v;
            } }, extendPrototype([DynamicPropertyContainer], t2), t2;
          }(), f = function() {
            function t2(t3, e2) {
              this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
            }
            return t2.prototype = { convertRectToPath: function() {
              var t3 = this.p.v[0], e2 = this.p.v[1], i2 = this.s.v[0] / 2, r2 = this.s.v[1] / 2, s2 = bmMin(i2, r2, this.r.v), a2 = s2 * (1 - roundCorner);
              this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + a2, 0, true), this.v.setTripleAt(t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - a2, t3 + i2, e2 + r2 - s2, 1, true), 0 !== s2 ? (this.v.setTripleAt(t3 + i2 - s2, e2 + r2, t3 + i2 - s2, e2 + r2, t3 + i2 - a2, e2 + r2, 2, true), this.v.setTripleAt(t3 - i2 + s2, e2 + r2, t3 - i2 + a2, e2 + r2, t3 - i2 + s2, e2 + r2, 3, true), this.v.setTripleAt(t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - a2, 4, true), this.v.setTripleAt(t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + a2, t3 - i2, e2 - r2 + s2, 5, true), this.v.setTripleAt(t3 - i2 + s2, e2 - r2, t3 - i2 + s2, e2 - r2, t3 - i2 + a2, e2 - r2, 6, true), this.v.setTripleAt(t3 + i2 - s2, e2 - r2, t3 + i2 - a2, e2 - r2, t3 + i2 - s2, e2 - r2, 7, true)) : (this.v.setTripleAt(t3 - i2, e2 + r2, t3 - i2 + a2, e2 + r2, t3 - i2, e2 + r2, 2), this.v.setTripleAt(t3 - i2, e2 - r2, t3 - i2, e2 - r2 + a2, t3 - i2, e2 - r2, 3))) : (this.v.setTripleAt(t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + a2, t3 + i2, e2 - r2 + s2, 0, true), 0 !== s2 ? (this.v.setTripleAt(t3 + i2 - s2, e2 - r2, t3 + i2 - s2, e2 - r2, t3 + i2 - a2, e2 - r2, 1, true), this.v.setTripleAt(t3 - i2 + s2, e2 - r2, t3 - i2 + a2, e2 - r2, t3 - i2 + s2, e2 - r2, 2, true), this.v.setTripleAt(t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + a2, 3, true), this.v.setTripleAt(t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - a2, t3 - i2, e2 + r2 - s2, 4, true), this.v.setTripleAt(t3 - i2 + s2, e2 + r2, t3 - i2 + s2, e2 + r2, t3 - i2 + a2, e2 + r2, 5, true), this.v.setTripleAt(t3 + i2 - s2, e2 + r2, t3 + i2 - a2, e2 + r2, t3 + i2 - s2, e2 + r2, 6, true), this.v.setTripleAt(t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - a2, 7, true)) : (this.v.setTripleAt(t3 - i2, e2 - r2, t3 - i2 + a2, e2 - r2, t3 - i2, e2 - r2, 1, true), this.v.setTripleAt(t3 - i2, e2 + r2, t3 - i2, e2 + r2 - a2, t3 - i2, e2 + r2, 2, true), this.v.setTripleAt(t3 + i2, e2 + r2, t3 + i2 - a2, e2 + r2, t3 + i2, e2 + r2, 3, true)));
            }, getValue: function() {
              this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
            }, reset: r }, extendPrototype([DynamicPropertyContainer], t2), t2;
          }();
          var m = { getShapeProp: function(t2, e2, i2) {
            var r2;
            return 3 === i2 || 4 === i2 ? r2 = (3 === i2 ? e2.pt : e2.ks).k.length ? new h(t2, e2, i2) : new n(t2, e2, i2) : 5 === i2 ? r2 = new f(t2, e2) : 6 === i2 ? r2 = new l(t2, e2) : 7 === i2 && (r2 = new p(t2, e2)), r2.k && t2.addDynamicProperty(r2), r2;
          }, getConstructorFunction: function() {
            return n;
          }, getKeyframedConstructorFunction: function() {
            return h;
          } };
          return m;
        }(), Matrix = function() {
          var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
          function s() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
          }
          function a(i2) {
            if (0 === i2)
              return this;
            var r2 = t(i2), s2 = e(i2);
            return this._t(r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function n(i2) {
            if (0 === i2)
              return this;
            var r2 = t(i2), s2 = e(i2);
            return this._t(1, 0, 0, 0, 0, r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1);
          }
          function o(i2) {
            if (0 === i2)
              return this;
            var r2 = t(i2), s2 = e(i2);
            return this._t(r2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, r2, 0, 0, 0, 0, 1);
          }
          function h(i2) {
            if (0 === i2)
              return this;
            var r2 = t(i2), s2 = e(i2);
            return this._t(r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function l(t2, e2) {
            return this._t(1, e2, t2, 1, 0, 0);
          }
          function p(t2, e2) {
            return this.shear(i(t2), i(e2));
          }
          function f(r2, s2) {
            var a2 = t(s2), n2 = e(s2);
            return this._t(a2, n2, 0, 0, -n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a2, -n2, 0, 0, n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function m(t2, e2, i2) {
            return i2 || 0 === i2 || (i2 = 1), 1 === t2 && 1 === e2 && 1 === i2 ? this : this._t(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1);
          }
          function c(t2, e2, i2, r2, s2, a2, n2, o2, h2, l2, p2, f2, m2, c2, d2, u2) {
            return this.props[0] = t2, this.props[1] = e2, this.props[2] = i2, this.props[3] = r2, this.props[4] = s2, this.props[5] = a2, this.props[6] = n2, this.props[7] = o2, this.props[8] = h2, this.props[9] = l2, this.props[10] = p2, this.props[11] = f2, this.props[12] = m2, this.props[13] = c2, this.props[14] = d2, this.props[15] = u2, this;
          }
          function d(t2, e2, i2) {
            return i2 = i2 || 0, 0 !== t2 || 0 !== e2 || 0 !== i2 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, i2, 1) : this;
          }
          function u(t2, e2, i2, r2, s2, a2, n2, o2, h2, l2, p2, f2, m2, c2, d2, u2) {
            var y2 = this.props;
            if (1 === t2 && 0 === e2 && 0 === i2 && 0 === r2 && 0 === s2 && 1 === a2 && 0 === n2 && 0 === o2 && 0 === h2 && 0 === l2 && 1 === p2 && 0 === f2)
              return y2[12] = y2[12] * t2 + y2[15] * m2, y2[13] = y2[13] * a2 + y2[15] * c2, y2[14] = y2[14] * p2 + y2[15] * d2, y2[15] *= u2, this._identityCalculated = false, this;
            var g2 = y2[0], v2 = y2[1], b2 = y2[2], x2 = y2[3], P2 = y2[4], E2 = y2[5], S2 = y2[6], C2 = y2[7], _2 = y2[8], A2 = y2[9], T2 = y2[10], M2 = y2[11], k2 = y2[12], D2 = y2[13], F2 = y2[14], w2 = y2[15];
            return y2[0] = g2 * t2 + v2 * s2 + b2 * h2 + x2 * m2, y2[1] = g2 * e2 + v2 * a2 + b2 * l2 + x2 * c2, y2[2] = g2 * i2 + v2 * n2 + b2 * p2 + x2 * d2, y2[3] = g2 * r2 + v2 * o2 + b2 * f2 + x2 * u2, y2[4] = P2 * t2 + E2 * s2 + S2 * h2 + C2 * m2, y2[5] = P2 * e2 + E2 * a2 + S2 * l2 + C2 * c2, y2[6] = P2 * i2 + E2 * n2 + S2 * p2 + C2 * d2, y2[7] = P2 * r2 + E2 * o2 + S2 * f2 + C2 * u2, y2[8] = _2 * t2 + A2 * s2 + T2 * h2 + M2 * m2, y2[9] = _2 * e2 + A2 * a2 + T2 * l2 + M2 * c2, y2[10] = _2 * i2 + A2 * n2 + T2 * p2 + M2 * d2, y2[11] = _2 * r2 + A2 * o2 + T2 * f2 + M2 * u2, y2[12] = k2 * t2 + D2 * s2 + F2 * h2 + w2 * m2, y2[13] = k2 * e2 + D2 * a2 + F2 * l2 + w2 * c2, y2[14] = k2 * i2 + D2 * n2 + F2 * p2 + w2 * d2, y2[15] = k2 * r2 + D2 * o2 + F2 * f2 + w2 * u2, this._identityCalculated = false, this;
          }
          function y(t2) {
            var e2 = t2.props;
            return this.transform(e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8], e2[9], e2[10], e2[11], e2[12], e2[13], e2[14], e2[15]);
          }
          function g() {
            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = true), this._identity;
          }
          function v(t2) {
            for (var e2 = 0; e2 < 16; ) {
              if (t2.props[e2] !== this.props[e2])
                return false;
              e2 += 1;
            }
            return true;
          }
          function b(t2) {
            var e2;
            for (e2 = 0; e2 < 16; e2 += 1)
              t2.props[e2] = this.props[e2];
            return t2;
          }
          function x(t2) {
            var e2;
            for (e2 = 0; e2 < 16; e2 += 1)
              this.props[e2] = t2[e2];
          }
          function P(t2, e2, i2) {
            return { x: t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12], y: t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13], z: t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14] };
          }
          function E(t2, e2, i2) {
            return t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12];
          }
          function S(t2, e2, i2) {
            return t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13];
          }
          function C(t2, e2, i2) {
            return t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14];
          }
          function _() {
            var t2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e2 = this.props[5] / t2, i2 = -this.props[1] / t2, r2 = -this.props[4] / t2, s2 = this.props[0] / t2, a2 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t2, n2 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t2, o2 = new Matrix();
            return o2.props[0] = e2, o2.props[1] = i2, o2.props[4] = r2, o2.props[5] = s2, o2.props[12] = a2, o2.props[13] = n2, o2;
          }
          function A(t2) {
            return this.getInverseMatrix().applyToPointArray(t2[0], t2[1], t2[2] || 0);
          }
          function T(t2) {
            var e2, i2 = t2.length, r2 = [];
            for (e2 = 0; e2 < i2; e2 += 1)
              r2[e2] = A(t2[e2]);
            return r2;
          }
          function M(t2, e2, i2) {
            var r2 = createTypedArray("float32", 6);
            if (this.isIdentity())
              r2[0] = t2[0], r2[1] = t2[1], r2[2] = e2[0], r2[3] = e2[1], r2[4] = i2[0], r2[5] = i2[1];
            else {
              var s2 = this.props[0], a2 = this.props[1], n2 = this.props[4], o2 = this.props[5], h2 = this.props[12], l2 = this.props[13];
              r2[0] = t2[0] * s2 + t2[1] * n2 + h2, r2[1] = t2[0] * a2 + t2[1] * o2 + l2, r2[2] = e2[0] * s2 + e2[1] * n2 + h2, r2[3] = e2[0] * a2 + e2[1] * o2 + l2, r2[4] = i2[0] * s2 + i2[1] * n2 + h2, r2[5] = i2[0] * a2 + i2[1] * o2 + l2;
            }
            return r2;
          }
          function k(t2, e2, i2) {
            return this.isIdentity() ? [t2, e2, i2] : [t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12], t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13], t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14]];
          }
          function D(t2, e2) {
            if (this.isIdentity())
              return t2 + "," + e2;
            var i2 = this.props;
            return Math.round(100 * (t2 * i2[0] + e2 * i2[4] + i2[12])) / 100 + "," + Math.round(100 * (t2 * i2[1] + e2 * i2[5] + i2[13])) / 100;
          }
          function F() {
            for (var t2 = 0, e2 = this.props, i2 = "matrix3d("; t2 < 16; )
              i2 += r(1e4 * e2[t2]) / 1e4, i2 += 15 === t2 ? ")" : ",", t2 += 1;
            return i2;
          }
          function w(t2) {
            return t2 < 1e-6 && t2 > 0 || t2 > -1e-6 && t2 < 0 ? r(1e4 * t2) / 1e4 : t2;
          }
          function I() {
            var t2 = this.props;
            return "matrix(" + w(t2[0]) + "," + w(t2[1]) + "," + w(t2[4]) + "," + w(t2[5]) + "," + w(t2[12]) + "," + w(t2[13]) + ")";
          }
          return function() {
            this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = m, this.setTransform = c, this.translate = d, this.transform = u, this.multiply = y, this.applyToPoint = P, this.applyToX = E, this.applyToY = S, this.applyToZ = C, this.applyToPointArray = k, this.applyToTriplePoints = M, this.applyToPointStringified = D, this.toCSS = F, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = T, this.inversePoint = A, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = g, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
          };
        }();
        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
            return typeof t2;
          } : function(t2) {
            return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
          }, _typeof$3(t);
        }
        var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
        function setLocation(t) {
          setLocationHref(t);
        }
        function searchAnimations() {
          true === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
          setSubframeEnabled(t);
        }
        function setPrefix(t) {
          setIdPrefix(t);
        }
        function loadAnimation(t) {
          return true === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
        }
        function setQuality(t) {
          if ("string" == typeof t)
            switch (t) {
              case "high":
                setDefaultCurveSegments(200);
                break;
              default:
              case "medium":
                setDefaultCurveSegments(50);
                break;
              case "low":
                setDefaultCurveSegments(10);
            }
          else
            !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(false) : roundValues(true);
        }
        function inBrowser() {
          return "undefined" != typeof navigator;
        }
        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e);
        }
        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null;
          }
        }
        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
          for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
            var r = e[i].split("=");
            if (decodeURIComponent(r[0]) == t)
              return decodeURIComponent(r[1]);
          }
          return null;
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer");
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" === ("undefined" == typeof exports ? "undefined" : _typeof$3(exports)) && "undefined" != typeof module || "function" == typeof define && define.amd || (window.bodymovin = lottie);
        } catch (t) {
        }
        var ShapeModifiers = function() {
          var t = {}, e = {};
          return t.registerModifier = function(t2, i) {
            e[t2] || (e[t2] = i);
          }, t.getModifier = function(t2, i, r) {
            return new e[t2](i, r);
          }, t;
        }();
        function ShapeModifier() {
        }
        function TrimModifier() {
        }
        function PuckerAndBloatModifier() {
        }
        ShapeModifier.prototype.initModifierProperties = function() {
        }, ShapeModifier.prototype.addShapeToModifier = function() {
        }, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = [];
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
          var a = [];
          e <= 1 ? a.push({ s: t, e }) : t >= 1 ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
          var n, o, h = [], l = a.length;
          for (n = 0; n < l; n += 1) {
            var p, f;
            if (!((o = a[n]).e * s < r || o.s * s > r + i))
              p = o.s * s <= r ? 0 : (o.s * s - r) / i, f = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, f]);
          }
          return h.length || h.push([0, 0]), h;
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            segmentsLengthPool.release(t[e]);
          return t.length = 0, t;
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, i, r, s;
          if (this._mdf || t) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var n = e;
              e = i, i = n;
            }
            e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i;
          } else
            e = this.sValue, i = this.eValue;
          var o, h, l, p, f, m = this.shapes.length, c = 0;
          if (i === e)
            for (s = 0; s < m; s += 1)
              this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = true, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
          else if (1 === i && 0 === e || 0 === i && 1 === e) {
            if (this._mdf)
              for (s = 0; s < m; s += 1)
                this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = true;
          } else {
            var d, u, y = [];
            for (s = 0; s < m; s += 1)
              if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (h = (r = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length)
                  f = d.totalShapeLength;
                else {
                  for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)
                    p = bez.getSegmentsLength(r.shapes[o]), l.push(p), f += p.totalLength;
                  d.totalShapeLength = f, d.pathsData = l;
                }
                c += f, d.shape._mdf = true;
              } else
                d.shape.paths = d.localShapeCollection;
            var g, v = e, b = i, x = 0;
            for (s = m - 1; s >= 0; s -= 1)
              if ((d = this.shapes[s]).shape._mdf) {
                for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && m > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, x, c), x += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
                  v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : v >= 1 ? y.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
                  var P = this.addShapes(d, y[0]);
                  if (y[0].s !== y[0].e) {
                    if (y.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = P.pop();
                        this.addPaths(P, u), P = this.addShapes(d, y[1], E);
                      } else
                        this.addPaths(P, u), P = this.addShapes(d, y[1]);
                    this.addPaths(P, u);
                  }
                }
                d.shape.paths = u;
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1)
            e.addShape(t[i]);
        }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, a, n) {
          s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
          e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
          var r, s, a, n, o, h, l, p, f = t.pathsData, m = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = true;
          for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), u.push(i), r = 0; r < c; r += 1) {
            for (h = f[r].lengths, i.c = m[r].c, a = m[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
              if (d + (n = h[s - 1]).addedLength < e.s)
                d += n.addedLength, i.c = false;
              else {
                if (d > e.e) {
                  i.c = false;
                  break;
                }
                e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(m[r].v[s - 1], m[r].o[s - 1], m[r].i[s], m[r].v[s], i, o, y), y = false) : (l = bez.getNewSegment(m[r].v[s - 1], m[r].v[s], m[r].o[s - 1], m[r].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = false, i.c = false), d += n.addedLength, o += 1;
              }
            if (m[r].c && h.length) {
              if (n = h[s - 1], d <= e.e) {
                var g = h[s - 1].addedLength;
                e.s <= d && e.e >= d + g ? (this.addSegment(m[r].v[s - 1], m[r].o[s - 1], m[r].i[0], m[r].v[0], i, o, y), y = false) : (l = bez.getNewSegment(m[r].v[s - 1], m[r].v[0], m[r].o[s - 1], m[r].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = false, i.c = false);
              } else
                i.c = false;
              d += n.addedLength, o += 1;
            }
            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e)
              break;
            r < c - 1 && (i = shapePool.newElement(), y = true, u.push(i), o = 0);
          }
          return u;
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var i = e / 100, r = [0, 0], s = t._length, a = 0;
          for (a = 0; a < s; a += 1)
            r[0] += t.v[a][0], r[1] += t.v[a][1];
          r[0] /= s, r[1] /= s;
          var n, o, h, l, p, f, m = shapePool.newElement();
          for (m.c = t.c, a = 0; a < s; a += 1)
            n = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, h = t.o[a][0] + (r[0] - t.o[a][0]) * -i, l = t.o[a][1] + (r[1] - t.o[a][1]) * -i, p = t.i[a][0] + (r[0] - t.i[a][0]) * -i, f = t.i[a][1] + (r[1] - t.i[a][1]) * -i, m.setTripleAt(n, o, h, l, p, f, a);
          return m;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, i, r, s, a, n, o = this.shapes.length, h = this.amount.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
                  n.addShape(this.processPath(e[r], h));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = false);
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];
          function e(t2, e2, i) {
            if (this.elem = t2, this.frameId = -1, this.propType = "transform", this.data = e2, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t2), e2.p && e2.p.s ? (this.px = PropertyFactory.getProp(t2, e2.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t2, e2.p.y, 0, 0, this), e2.p.z && (this.pz = PropertyFactory.getProp(t2, e2.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t2, e2.p || { k: [0, 0, 0] }, 1, 0, this), e2.rx) {
              if (this.rx = PropertyFactory.getProp(t2, e2.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t2, e2.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t2, e2.rz, 0, degToRads, this), e2.or.k[0].ti) {
                var r, s = e2.or.k.length;
                for (r = 0; r < s; r += 1)
                  e2.or.k[r].to = null, e2.or.k[r].ti = null;
              }
              this.or = PropertyFactory.getProp(t2, e2.or, 1, degToRads, this), this.or.sh = true;
            } else
              this.r = PropertyFactory.getProp(t2, e2.r || { k: 0 }, 0, degToRads, this);
            e2.sk && (this.sk = PropertyFactory.getProp(t2, e2.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t2, e2.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t2, e2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t2, e2.s || { k: [100, 100, 100] }, 1, 0.01, this), e2.o ? this.o = PropertyFactory.getProp(t2, e2.o, 0, 0.01, t2) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
          }
          return e.prototype = { applyToMatrix: function(t2) {
            var e2 = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || e2, this.a && t2.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t2.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t2.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t2.rotate(-this.r.v) : t2.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t2.translate(this.px.v, this.py.v, -this.pz.v) : t2.translate(this.px.v, this.py.v, 0) : t2.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }, getValue: function(e2) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || e2) {
                var i;
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var r, s;
                  if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / i, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    r = [], s = [];
                    var a = this.px, n = this.py;
                    a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / i, 0)) : (r = [a.pv, n.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / i, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / i, n.offsetTime));
                  } else
                    r = s = t;
                  this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]));
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
              this.frameId = this.elem.globalData.frameId;
            }
          }, precalculateMatrix: function() {
            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                  return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
              }
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
            }
          }, autoOrient: function() {
          } }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t2) {
            this._addDynamicProperty(t2), this.elem.addDynamicProperty(t2), this._isDirty = true;
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t2, i, r) {
            return new e(t2, i, r);
          } };
        }();
        function RepeaterModifier() {
        }
        function RoundCornersModifier() {
        }
        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
        }
        function floatZero(t) {
          return Math.abs(t) <= 1e-5;
        }
        function lerp(t, e, i) {
          return t * (1 - i) + e * i;
        }
        function lerpPoint(t, e, i) {
          return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)];
        }
        function quadRoots(t, e, i) {
          if (0 === t)
            return [];
          var r = e * e - 4 * t * i;
          if (r < 0)
            return [];
          var s = -e / (2 * t);
          if (0 === r)
            return [s];
          var a = Math.sqrt(r) / (2 * t);
          return [s - a, s + a];
        }
        function polynomialCoefficients(t, e, i, r) {
          return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
        }
        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, false);
        }
        function PolynomialBezier(t, e, i, r, s) {
          s && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), s && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], i[0], r[0]), n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
          this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, i, r];
        }
        function extrema(t, e) {
          var i = t.points[0][e], r = t.points[t.points.length - 1][e];
          if (i > r) {
            var s = r;
            r = i, i = s;
          }
          for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
            if (a[n] > 0 && a[n] < 1) {
              var o = t.point(a[n])[e];
              o < i ? i = o : o > r && (r = o);
            }
          return { min: i, max: r };
        }
        function intersectData(t, e, i) {
          var r = t.boundingBox();
          return { cx: r.cx, cy: r.cy, width: r.width, height: r.height, bez: t, t: (e + i) / 2, t1: e, t2: i };
        }
        function splitData(t) {
          var e = t.bez.split(0.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
        }
        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
        }
        function intersectsImpl(t, e, i, r, s, a) {
          if (boxIntersect(t, e))
            if (i >= a || t.width <= r && t.height <= r && e.width <= r && e.height <= r)
              s.push([t.t, e.t]);
            else {
              var n = splitData(t), o = splitData(e);
              intersectsImpl(n[0], o[0], i + 1, r, s, a), intersectsImpl(n[0], o[1], i + 1, r, s, a), intersectsImpl(n[1], o[0], i + 1, r, s, a), intersectsImpl(n[1], o[1], i + 1, r, s, a);
            }
        }
        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
        }
        function lineIntersection(t, e, i, r) {
          var s = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [i[0], i[1], 1], o = [r[0], r[1], 1], h = crossProduct(crossProduct(s, a), crossProduct(n, o));
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
        }
        function polarOffset(t, e, i) {
          return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
        }
        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
        }
        function ZigZagModifier() {
        }
        function setPoint(t, e, i, r, s, a, n) {
          var o = i - Math.PI / 2, h = i + Math.PI / 2, l = e[0] + Math.cos(i) * r * s, p = e[1] - Math.sin(i) * r * s;
          t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length());
        }
        function getPerpendicularVector(t, e) {
          var i = [e[0] - t[0], e[1] - t[1]], r = 0.5 * -Math.PI;
          return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]];
        }
        function getProjectingAngle(t, e) {
          var i = 0 === e ? t.length() - 1 : e - 1, r = (e + 1) % t.length(), s = getPerpendicularVector(t.v[i], t.v[r]);
          return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
        }
        function zigZagCorner(t, e, i, r, s, a, n) {
          var o = getProjectingAngle(e, i), h = e.v[i % e._length], l = e.v[0 === i ? e._length - 1 : i - 1], p = e.v[(i + 1) % e._length], f = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0, m = 2 === a ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
          setPoint(t, e.v[i % e._length], o, n, r, m / (2 * (s + 1)), f / (2 * (s + 1)), a);
        }
        function zigZagSegment(t, e, i, r, s, a) {
          for (var n = 0; n < r; n += 1) {
            var o = (n + 1) / (r + 1), h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, l = e.normalAngle(o);
            setPoint(t, e.point(o), l, a, i, h / (2 * (r + 1)), h / (2 * (r + 1)), s), a = -a;
          }
          return a;
        }
        function linearOffset(t, e, i) {
          var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, r, i), polarOffset(e, r, i)];
        }
        function offsetSegment(t, e) {
          var i, r, s, a, n, o, h;
          i = (h = linearOffset(t.points[0], t.points[1], e))[0], r = h[1], s = (h = linearOffset(t.points[1], t.points[2], e))[0], a = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
          var l = lineIntersection(i, r, s, a);
          null === l && (l = r);
          var p = lineIntersection(n, o, s, a);
          return null === p && (p = n), new PolynomialBezier(i, l, p, o);
        }
        function joinLines(t, e, i, r, s) {
          var a = e.points[3], n = i.points[0];
          if (3 === r)
            return a;
          if (pointEqual(a, n))
            return a;
          if (2 === r) {
            var o = -e.tangentAngle(1), h = -i.tangentAngle(0) + Math.PI, l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)), p = l ? pointDistance(l, a) : pointDistance(a, n) / 2, f = polarOffset(a, o, 2 * p * roundCorner);
            return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n;
          }
          var m = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, i.points[1]) ? i.points[3] : i.points[1]);
          return m && pointDistance(m, a) < s ? (t.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], t.length()), m) : a;
        }
        function getIntersection(t, e) {
          var i = t.intersections(e);
          return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
        }
        function pruneSegmentIntersection(t, e) {
          var i = t.slice(), r = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
          return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [i, r];
        }
        function pruneIntersections(t) {
          for (var e, i = 1; i < t.length; i += 1)
            e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
        }
        function offsetSegmentSplit(t, e) {
          var i, r, s, a, n = t.inflectionPoints();
          if (0 === n.length)
            return [offsetSegment(t, e)];
          if (1 === n.length || floatEqual(n[1], 1))
            return i = (s = t.split(n[0]))[0], r = s[1], [offsetSegment(i, e), offsetSegment(r, e)];
          i = (s = t.split(n[0]))[0];
          var o = (n[1] - n[0]) / (1 - n[0]);
          return a = (s = s[1].split(o))[0], r = s[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(r, e)];
        }
        function OffsetPathModifier() {
        }
        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, a = 0; a < s; a += 1)
            switch (e[a].toLowerCase()) {
              case "italic":
                r = "italic";
                break;
              case "bold":
                i = "700";
                break;
              case "black":
                i = "900";
                break;
              case "medium":
                i = "500";
                break;
              case "regular":
              case "normal":
                i = "400";
                break;
              case "light":
              case "thin":
                i = "200";
            }
          return { style: r, weight: t.fWeight || i };
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
          var n = a ? -1 : 1, o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s), h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
          t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
        }, RepeaterModifier.prototype.init = function(t, e, i, r) {
          for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; )
            i -= 1, this._elements.unshift(e[i]);
          this.dynamicProperties.length ? this.k = true : this.getValue(true);
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            t[e]._processed = false, "gr" === t[e].ty && this.resetElements(t[e].it);
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e;
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1)
            t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, i, r, s, a, n = false;
          if (this._mdf || t) {
            var o, h = Math.ceil(this.c.v);
            if (this._groups.length < h) {
              for (; this._groups.length < h; ) {
                var l = { it: this.cloneElements(this._elements), ty: "gr" };
                l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
              }
              this.elem.reloadShapes(), n = true;
            }
            for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) {
              if (o = a < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                var p = this.elemsData[r].it, f = p[p.length - 1];
                0 !== f.transform.op.v ? (f.transform.op._mdf = true, f.transform.op.v = 0) : f.transform.op._mdf = false;
              }
              a += 1;
            }
            this._currentCopies = h;
            var m = this.o.v, c = m % 1, d = m > 0 ? Math.floor(m) : Math.ceil(m), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var v, b, x = 0;
            if (m > 0) {
              for (; x < d; )
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), x += 1;
              c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, false), x += c);
            } else if (m < 0) {
              for (; x > d; )
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), x -= 1;
              c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, true), x -= c);
            }
            for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a; ) {
              if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1)
                  i[v] = this.matrix.props[v];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1)
                  i[v] = this.matrix.props[v];
              x += 1, a -= 1, r += s;
            }
          } else
            for (a = this._currentCopies, r = 0, s = 1; a; )
              i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, a -= 1, r += s;
          return n;
        }, RepeaterModifier.prototype.addShape = function() {
        }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var i, r = shapePool.newElement();
          r.c = t.c;
          var s, a, n, o, h, l, p, f, m, c, d, u, y = t._length, g = 0;
          for (i = 0; i < y; i += 1)
            s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, f = u = s[1] - (s[1] - o[1]) * l, m = p - (p - s[0]) * roundCorner, c = f - (f - s[1]) * roundCorner, r.setTripleAt(p, f, m, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = s[0] + (o[0] - s[0]) * l, f = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = f - (f - s[1]) * roundCorner, r.setTripleAt(p, f, m, c, d, u, g), g += 1) : (r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
          return r;
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, i, r, s, a, n, o = this.shapes.length, h = this.rd.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
                  n.addShape(this.processPath(e[r], h));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = false);
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0]);
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1]);
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t))
            return [];
          var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (i < 0)
            return [];
          var r = Math.sqrt(i);
          return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter(function(t2) {
            return t2 > 0 && t2 < 1;
          });
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0)
            return [singlePoint(this.points[0]), this];
          if (t >= 1)
            return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t), i = lerpPoint(this.points[1], this.points[2], t), r = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, i, t), a = lerpPoint(i, r, t), n = lerpPoint(s, a, t);
          return [new PolynomialBezier(this.points[0], e, s, n, true), new PolynomialBezier(n, a, r, this.points[3], true)];
        }, PolynomialBezier.prototype.bounds = function() {
          return { x: extrema(this, 0), y: extrema(this, 1) };
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
        }, PolynomialBezier.prototype.intersections = function(t, e, i) {
          void 0 === e && (e = 2), void 0 === i && (i = 7);
          var r = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r;
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], true);
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], true);
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length;
        }, ZigZagModifier.prototype.processPath = function(t, e, i, r) {
          var s = t._length, a = shapePool.newElement();
          if (a.c = t.c, t.c || (s -= 1), 0 === s)
            return a;
          var n = -1, o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(a, t, 0, e, i, r, n);
          for (var h = 0; h < s; h += 1)
            n = zigZagSegment(a, o, e, i, r, -n), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(a, t, h + 1, e, i, r, n);
          return a;
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, i, r, s, a, n, o = this.shapes.length, h = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), p = this.pointsType.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
                  n.addShape(this.processPath(e[r], h, l, p));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = false);
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length;
        }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
          var s = shapePool.newElement();
          s.c = t.c;
          var a, n, o, h = t.length();
          t.c || (h -= 1);
          var l = [];
          for (a = 0; a < h; a += 1)
            o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = h - 1; a >= 0; a -= 1)
              o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
          l = pruneIntersections(l);
          var p = null, f = null;
          for (a = 0; a < l.length; a += 1) {
            var m = l[a];
            for (f && (p = joinLines(s, f, m[0], i, r)), f = m[m.length - 1], n = 0; n < m.length; n += 1)
              o = m[n], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3];
          }
          return l.length && joinLines(s, f, l[0][0], i, r), s;
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, i, r, s, a, n, o = this.shapes.length, h = this.amount.v, l = this.miterLimit.v, p = this.lineJoin;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
                  n.addShape(this.processPath(e[r], h, p, l));
              a.shape.paths = a.localShapeCollection;
            }
          this.dynamicProperties.length || (this._mdf = false);
        };
        var FontManager = function() {
          var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var i = 127988, r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
          function s(t2, e2) {
            var i2 = createTag("span");
            i2.setAttribute("aria-hidden", true), i2.style.fontFamily = e2;
            var r2 = createTag("span");
            r2.innerText = "giItT1WQy@!-/#", i2.style.position = "absolute", i2.style.left = "-10000px", i2.style.top = "-10000px", i2.style.fontSize = "300px", i2.style.fontVariant = "normal", i2.style.fontStyle = "normal", i2.style.fontWeight = "normal", i2.style.letterSpacing = "0", i2.appendChild(r2), document.body.appendChild(i2);
            var s2 = r2.offsetWidth;
            return r2.style.fontFamily = function(t3) {
              var e3, i3 = t3.split(","), r3 = i3.length, s3 = [];
              for (e3 = 0; e3 < r3; e3 += 1)
                "sans-serif" !== i3[e3] && "monospace" !== i3[e3] && s3.push(i3[e3]);
              return s3.join(",");
            }(t2) + ", " + e2, { node: r2, w: s2, parent: i2 };
          }
          function a(t2, e2) {
            var i2, r2 = document.body && e2 ? "svg" : "canvas", s2 = getFontProperties(t2);
            if ("svg" === r2) {
              var a2 = createNS("text");
              a2.style.fontSize = "100px", a2.setAttribute("font-family", t2.fFamily), a2.setAttribute("font-style", s2.style), a2.setAttribute("font-weight", s2.weight), a2.textContent = "1", t2.fClass ? (a2.style.fontFamily = "inherit", a2.setAttribute("class", t2.fClass)) : a2.style.fontFamily = t2.fFamily, e2.appendChild(a2), i2 = a2;
            } else {
              var n2 = new OffscreenCanvas(500, 500).getContext("2d");
              n2.font = s2.style + " " + s2.weight + " 100px " + t2.fFamily, i2 = n2;
            }
            return { measureText: function(t3) {
              return "svg" === r2 ? (i2.textContent = t3, i2.getComputedTextLength()) : i2.measureText(t3).width;
            } };
          }
          function n(t2) {
            var e2 = 0, i2 = t2.charCodeAt(0);
            if (i2 >= 55296 && i2 <= 56319) {
              var r2 = t2.charCodeAt(1);
              r2 >= 56320 && r2 <= 57343 && (e2 = 1024 * (i2 - 55296) + r2 - 56320 + 65536);
            }
            return e2;
          }
          function o(t2) {
            var e2 = n(t2);
            return e2 >= 127462 && e2 <= 127487;
          }
          var h = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
          };
          h.isModifier = function(t2, e2) {
            var i2 = t2.toString(16) + e2.toString(16);
            return -1 !== r.indexOf(i2);
          }, h.isZeroWidthJoiner = function(t2) {
            return 8205 === t2;
          }, h.isFlagEmoji = function(t2) {
            return o(t2.substr(0, 2)) && o(t2.substr(2, 2));
          }, h.isRegionalCode = o, h.isCombinedCharacter = function(t2) {
            return -1 !== e.indexOf(t2);
          }, h.isRegionalFlag = function(t2, e2) {
            var r2 = n(t2.substr(e2, 2));
            if (r2 !== i)
              return false;
            var s2 = 0;
            for (e2 += 2; s2 < 5; ) {
              if ((r2 = n(t2.substr(e2, 2))) < 917601 || r2 > 917626)
                return false;
              s2 += 1, e2 += 2;
            }
            return 917631 === n(t2.substr(e2, 2));
          }, h.isVariationSelector = function(t2) {
            return 65039 === t2;
          }, h.BLACK_FLAG_CODE_POINT = i;
          var l = { addChars: function(t2) {
            if (t2) {
              var e2;
              this.chars || (this.chars = []);
              var i2, r2, s2 = t2.length, a2 = this.chars.length;
              for (e2 = 0; e2 < s2; e2 += 1) {
                for (i2 = 0, r2 = false; i2 < a2; )
                  this.chars[i2].style === t2[e2].style && this.chars[i2].fFamily === t2[e2].fFamily && this.chars[i2].ch === t2[e2].ch && (r2 = true), i2 += 1;
                r2 || (this.chars.push(t2[e2]), a2 += 1);
              }
            }
          }, addFonts: function(t2, e2) {
            if (t2) {
              if (this.chars)
                return this.isLoaded = true, void (this.fonts = t2.list);
              if (!document.body)
                return this.isLoaded = true, t2.list.forEach(function(t3) {
                  t3.helper = a(t3), t3.cache = {};
                }), void (this.fonts = t2.list);
              var i2, r2 = t2.list, n2 = r2.length, o2 = n2;
              for (i2 = 0; i2 < n2; i2 += 1) {
                var h2, l2, p = true;
                if (r2[i2].loaded = false, r2[i2].monoCase = s(r2[i2].fFamily, "monospace"), r2[i2].sansCase = s(r2[i2].fFamily, "sans-serif"), r2[i2].fPath) {
                  if ("p" === r2[i2].fOrigin || 3 === r2[i2].origin) {
                    if ((h2 = document.querySelectorAll('style[f-forigin="p"][f-family="' + r2[i2].fFamily + '"], style[f-origin="3"][f-family="' + r2[i2].fFamily + '"]')).length > 0 && (p = false), p) {
                      var f = createTag("style");
                      f.setAttribute("f-forigin", r2[i2].fOrigin), f.setAttribute("f-origin", r2[i2].origin), f.setAttribute("f-family", r2[i2].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + r2[i2].fFamily + "; font-style: normal; src: url('" + r2[i2].fPath + "');}", e2.appendChild(f);
                    }
                  } else if ("g" === r2[i2].fOrigin || 1 === r2[i2].origin) {
                    for (h2 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l2 = 0; l2 < h2.length; l2 += 1)
                      -1 !== h2[l2].href.indexOf(r2[i2].fPath) && (p = false);
                    if (p) {
                      var m = createTag("link");
                      m.setAttribute("f-forigin", r2[i2].fOrigin), m.setAttribute("f-origin", r2[i2].origin), m.type = "text/css", m.rel = "stylesheet", m.href = r2[i2].fPath, document.body.appendChild(m);
                    }
                  } else if ("t" === r2[i2].fOrigin || 2 === r2[i2].origin) {
                    for (h2 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l2 = 0; l2 < h2.length; l2 += 1)
                      r2[i2].fPath === h2[l2].src && (p = false);
                    if (p) {
                      var c = createTag("link");
                      c.setAttribute("f-forigin", r2[i2].fOrigin), c.setAttribute("f-origin", r2[i2].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", r2[i2].fPath), e2.appendChild(c);
                    }
                  }
                } else
                  r2[i2].loaded = true, o2 -= 1;
                r2[i2].helper = a(r2[i2], e2), r2[i2].cache = {}, this.fonts.push(r2[i2]);
              }
              0 === o2 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
            } else
              this.isLoaded = true;
          }, getCharData: function(e2, i2, r2) {
            for (var s2 = 0, a2 = this.chars.length; s2 < a2; ) {
              if (this.chars[s2].ch === e2 && this.chars[s2].style === i2 && this.chars[s2].fFamily === r2)
                return this.chars[s2];
              s2 += 1;
            }
            return ("string" == typeof e2 && 13 !== e2.charCodeAt(0) || !e2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", e2, i2, r2)), t;
          }, getFontByName: function(t2) {
            for (var e2 = 0, i2 = this.fonts.length; e2 < i2; ) {
              if (this.fonts[e2].fName === t2)
                return this.fonts[e2];
              e2 += 1;
            }
            return this.fonts[0];
          }, measureText: function(t2, e2, i2) {
            var r2 = this.getFontByName(e2), s2 = t2;
            if (!r2.cache[s2]) {
              var a2 = r2.helper;
              if (" " === t2) {
                var n2 = a2.measureText("|" + t2 + "|"), o2 = a2.measureText("||");
                r2.cache[s2] = (n2 - o2) / 100;
              } else
                r2.cache[s2] = a2.measureText(t2) / 100;
            }
            return r2.cache[s2] * i2;
          }, checkLoadedFonts: function() {
            var t2, e2, i2, r2 = this.fonts.length, s2 = r2;
            for (t2 = 0; t2 < r2; t2 += 1)
              this.fonts[t2].loaded ? s2 -= 1 : "n" === this.fonts[t2].fOrigin || 0 === this.fonts[t2].origin ? this.fonts[t2].loaded = true : (e2 = this.fonts[t2].monoCase.node, i2 = this.fonts[t2].monoCase.w, e2.offsetWidth !== i2 ? (s2 -= 1, this.fonts[t2].loaded = true) : (e2 = this.fonts[t2].sansCase.node, i2 = this.fonts[t2].sansCase.w, e2.offsetWidth !== i2 && (s2 -= 1, this.fonts[t2].loaded = true)), this.fonts[t2].loaded && (this.fonts[t2].sansCase.parent.parentNode.removeChild(this.fonts[t2].sansCase.parent), this.fonts[t2].monoCase.parent.parentNode.removeChild(this.fonts[t2].monoCase.parent)));
            0 !== s2 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
          }, setIsLoaded: function() {
            this.isLoaded = true;
          } };
          return h.prototype = l, h;
        }();
        function SlotManager(t) {
          this.animationData = t;
        }
        function slotFactory(t) {
          return new SlotManager(t);
        }
        function RenderableElement() {
        }
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
        }, RenderableElement.prototype = { initRenderable: function() {
          this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
        }, addRenderableComponent: function(t) {
          -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
        }, removeRenderableComponent: function(t) {
          -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
        }, prepareRenderableFrame: function(t) {
          this.checkLayerLimits(t);
        }, checkTransparency: function() {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
        }, checkLayerLimits: function(t) {
          this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? true !== this.isInRange && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : false !== this.isInRange && (this.globalData._mdf = true, this.isInRange = false, this.hide());
        }, renderRenderable: function() {
          var t, e = this.renderableComponents.length;
          for (t = 0; t < e; t += 1)
            this.renderableComponents[t].renderFrame(this._isFirstFrame);
        }, sourceRectAtTime: function() {
          return { top: 0, left: 0, width: 100, height: 100 };
        }, getLayerSize: function() {
          return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
        } };
        var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) {
          return blendModeEnums[t] || "";
        }), blendModeEnums;
        function SliderEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
        }
        function AngleEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
        }
        function ColorEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
        }
        function PointEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
        }
        function LayerIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
        }
        function MaskIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
        }
        function CheckboxEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(t, e) {
          var i, r = t.ef || [];
          this.effectElements = [];
          var s, a = r.length;
          for (i = 0; i < a; i += 1)
            s = new GroupEffect(r[i], e), this.effectElements.push(s);
        }
        function GroupEffect(t, e) {
          this.init(t, e);
        }
        function BaseElement() {
        }
        function FrameElement() {
        }
        function FootageElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
        }
        function AudioElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = false, this._canPlay = false;
          var r = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
        }
        function BaseRenderer() {
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var i;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var r, s = this.data.ef.length, a = this.data.ef;
          for (i = 0; i < s; i += 1) {
            switch (r = null, a[i].ty) {
              case 0:
                r = new SliderEffect(a[i], e, this);
                break;
              case 1:
                r = new AngleEffect(a[i], e, this);
                break;
              case 2:
                r = new ColorEffect(a[i], e, this);
                break;
              case 3:
                r = new PointEffect(a[i], e, this);
                break;
              case 4:
              case 7:
                r = new CheckboxEffect(a[i], e, this);
                break;
              case 10:
                r = new LayerIndexEffect(a[i], e, this);
                break;
              case 11:
                r = new MaskIndexEffect(a[i], e, this);
                break;
              case 5:
                r = new EffectsManager(a[i], e, this);
                break;
              default:
                r = new NoValueEffect(a[i], e, this);
            }
            r && this.effectElements.push(r);
          }
        }, BaseElement.prototype = { checkMasks: function() {
          if (!this.data.hasMask)
            return false;
          for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
            if ("n" !== this.data.masksProperties[t].mode && false !== this.data.masksProperties[t].cl)
              return true;
            t += 1;
          }
          return false;
        }, initExpressions: function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("layer"), i = t("effects"), r = t("shape"), s = t("text"), a = t("comp");
            this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var n = i.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface);
          }
        }, setBlendMode: function() {
          var t = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
        }, initBaseData: function(t, e, i) {
          this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        }, getType: function() {
          return this.type;
        }, sourceRectAtTime: function() {
        } }, FrameElement.prototype = { initFrame: function() {
          this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
        }, prepareProperties: function(t, e) {
          var i, r = this.dynamicProperties.length;
          for (i = 0; i < r; i += 1)
            (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = true, this._mdf = true));
        }, addDynamicProperty: function(t) {
          -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
        } }, FootageElement.prototype.prepareFrame = function() {
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null;
        }, FootageElement.prototype.renderFrame = function() {
        }, FootageElement.prototype.destroy = function() {
        }, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this);
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData;
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder)
            this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e;
          }
          this._volume = this.lv.v[0];
          var i = this._volume * this._volumeMultiplier;
          this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
        }, AudioElement.prototype.show = function() {
        }, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = false;
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = false, this._canPlay = false;
        }, AudioElement.prototype.resume = function() {
          this._canPlay = true;
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t);
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
        }, AudioElement.prototype.getBaseElement = function() {
          return null;
        }, AudioElement.prototype.destroy = function() {
        }, AudioElement.prototype.sourceRectAtTime = function() {
        }, AudioElement.prototype.initExpressions = function() {
        }, BaseRenderer.prototype.checkLayers = function(t) {
          var e, i, r = this.layers.length;
          for (this.completeLayers = true, e = r - 1; e >= 0; e -= 1)
            this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements();
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t);
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this);
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this);
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)
            this.buildItem(t);
          this.checkPendingElements();
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = false;
          var i, r = t.length, s = this.layers.length;
          for (e = 0; e < r; e += 1)
            for (i = 0; i < s; ) {
              if (this.layers[i].id === t[e].id) {
                this.layers[i] = t[e];
                break;
              }
              i += 1;
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t;
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems();
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
          for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
            s[a].ind == e && (r[a] && true !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t);
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var r = this.createComp(t[e]);
              r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, i = this.elements.length;
          for (e = 0; e < i; e += 1)
            if (this.elements[e].data.ind === t)
              return this.elements[e];
          return null;
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, i = t.shift();
          if ("number" == typeof i)
            e = this.elements[i];
          else {
            var r, s = this.elements.length;
            for (r = 0; r < s; r += 1)
              if (this.elements[r].data.nm === i) {
                e = this.elements[r];
                break;
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t);
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
        };
        var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
        function TransformElement() {
        }
        function MaskElement(t, e, i) {
          this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var r, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(n), this.solidPath = "";
          var o, h, l, p, f, m, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
          for (r = 0; r < n; r += 1)
            if (("a" !== c[r].mode && "n" !== c[r].mode || c[r].inv || 100 !== c[r].o.k || c[r].o.x) && (g = "mask", v = "mask"), "s" !== c[r].mode && "i" !== c[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), s = createNS("path"), "n" === c[r].mode)
              this.viewData[r] = { op: PropertyFactory.getProp(this.element, c[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3), elem: s, lastPath: "" }, a.appendChild(s);
            else {
              var b;
              if (d += 1, s.setAttribute("fill", "s" === c[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== c[r].x.k ? (g = "mask", v = "mask", m = PropertyFactory.getProp(this.element, c[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), a.appendChild(p), s.setAttribute("stroke", "s" === c[r].mode ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[r] = { elem: s, x: m, expan: f, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" === c[r].mode) {
                h = u.length;
                var x = createNS("g");
                for (o = 0; o < h; o += 1)
                  x.appendChild(u[o]);
                var P = createNS("mask");
                P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + d), P.appendChild(s), a.appendChild(P), x.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), u.length = 0, u.push(x);
              } else
                u.push(s);
              c[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: s, lastPath: "", op: PropertyFactory.getProp(this.element, c[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3), invRect: l }, this.viewData[r].prop.k || this.drawPath(c[r], this.viewData[r].prop.v, this.viewData[r]);
            }
          for (this.maskElement = createNS(g), n = u.length, r = 0; r < n; r += 1)
            this.maskElement.appendChild(u[r]);
          d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        TransformElement.prototype = { initTransform: function() {
          var t = new Matrix();
          this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: t, localMat: t, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
        }, renderTransform: function() {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; i < r; ) {
                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = true;
                  break;
                }
                i += 1;
              }
            if (this.finalTransform._matMdf)
              for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1)
                e.multiply(this.hierarchy[i].finalTransform.mProp.v);
          }
          this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
        }, renderLocalTransform: function() {
          if (this.localTransforms) {
            var t = 0, e = this.localTransforms.length;
            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
              for (; t < e; )
                this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), t += 1;
            if (this.finalTransform._localMatMdf) {
              var i = this.finalTransform.localMat;
              for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                var r = this.localTransforms[t].matrix;
                i.multiply(r);
              }
              i.multiply(this.finalTransform.mat);
            }
            if (this.finalTransform._opMdf) {
              var s = this.finalTransform.localOpacity;
              for (t = 0; t < e; t += 1)
                s *= 0.01 * this.localTransforms[t].opacity;
              this.finalTransform.localOpacity = s;
            }
          }
        }, searchEffectTransforms: function() {
          if (this.renderableEffectsManager) {
            var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (t.length) {
              this.localTransforms = [], this.finalTransform.localMat = new Matrix();
              var e = 0, i = t.length;
              for (e = 0; e < i; e += 1)
                this.localTransforms.push(t[e]);
            }
          }
        }, globalToLocal: function(t) {
          var e = [];
          e.push(this.finalTransform);
          for (var i, r = true, s = this.comp; r; )
            s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = false;
          var a, n = e.length;
          for (i = 0; i < n; i += 1)
            a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
          return t;
        }, mHelper: new Matrix() }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop;
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, i = this.element.finalTransform.mat, r = this.masksProperties.length;
          for (e = 0; e < r; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var s = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
        }, MaskElement.prototype.drawPath = function(t, e, i) {
          var r, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
          for (s = e._length, r = 1; r < s; r += 1)
            a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
          if (e.c && s > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
            var n = "";
            i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a;
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var filtersFactory = function() {
          var t = {};
          return t.createFilter = function(t2, e) {
            var i = createNS("filter");
            i.setAttribute("id", t2), true !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
            return i;
          }, t.createAlphaToLuminanceFilter = function() {
            var t2 = createNS("feColorMatrix");
            return t2.setAttribute("type", "matrix"), t2.setAttribute("color-interpolation-filters", "sRGB"), t2.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t2;
          }, t;
        }(), featureSupport = function() {
          var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: "undefined" != typeof OffscreenCanvas };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
        }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
        function SVGEffects(t) {
          var e, i, r = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, a = createElementID(), n = filtersFactory.createFilter(a, true), o = 0;
          for (this.filters = [], e = 0; e < s; e += 1) {
            i = null;
            var h = t.data.ef[e].ty;
            if (registeredEffects$1[h])
              i = new (0, registeredEffects$1[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1);
            i && this.filters.push(i);
          }
          o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        function registerEffect$1(t, e, i) {
          registeredEffects$1[t] = { effect: e, countsAsEffect: i };
        }
        function SVGBaseElement() {
        }
        function HierarchyElement() {
        }
        function RenderableDOMElement() {
        }
        function IImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
        }
        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e;
        }
        function IShapeElement() {
        }
        SVGEffects.prototype.renderFrame = function(t) {
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1)
            this.filters[e].renderFrame(t);
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length, r = [];
          for (e = 0; e < i; e += 1)
            this.filters[e].type === t && r.push(this.filters[e]);
          return r;
        }, SVGBaseElement.prototype = { initRendererElement: function() {
          this.layerElement = createNS("g");
        }, createContainerElements: function() {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
          var t = null;
          if (this.data.td) {
            this.matteMasks = {};
            var e = createNS("g");
            e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
          } else
            this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
            var i = createNS("clipPath"), r = createNS("path");
            r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var s = createElementID();
            if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
            } else
              this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")");
          }
          0 !== this.data.bm && this.setBlendMode();
        }, renderElement: function() {
          this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
        }, destroyBaseElement: function() {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
        }, getBaseElement: function() {
          return this.data.hd ? null : this.baseElement;
        }, createRenderableComponents: function() {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
        }, getMatte: function(t) {
          if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
            var e, i, r, s, a = this.layerId + "_" + t;
            if (1 === t || 3 === t) {
              var n = createNS("mask");
              n.setAttribute("id", a), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(r), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(r), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"));
            } else if (2 === t) {
              var o = createNS("mask");
              o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
              var h = createNS("g");
              o.appendChild(h), e = createElementID(), i = filtersFactory.createFilter(e);
              var l = createNS("feComponentTransfer");
              l.setAttribute("in", "SourceGraphic"), i.appendChild(l);
              var p = createNS("feFuncA");
              p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(i);
              var f = createNS("rect");
              f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(f), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(r), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(f), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o);
            }
            this.matteMasks[t] = a;
          }
          return this.matteMasks[t];
        }, setMatte: function(t) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
        } }, HierarchyElement.prototype = { initHierarchy: function() {
          this.hierarchy = [], this._isParent = false, this.checkParenting();
        }, setHierarchy: function(t) {
          this.hierarchy = t;
        }, setAsParent: function() {
          this._isParent = true;
        }, checkParenting: function() {
          void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
        } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        }, hide: function() {
          this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = true);
        }, show: function() {
          this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = false, this._isFirstFrame = true);
        }, renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
        }, renderInnerContent: function() {
        }, prepareFrame: function(t) {
          this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
        }, destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        } })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect;
        }, IShapeElement.prototype = { addShapeToModifiers: function(t) {
          var e, i = this.shapeModifiers.length;
          for (e = 0; e < i; e += 1)
            this.shapeModifiers[e].addShape(t);
        }, isShapeInAnimatedModifiers: function(t) {
          for (var e = this.shapeModifiers.length; 0 < e; )
            if (this.shapeModifiers[0].isAnimatedWithShape(t))
              return true;
          return false;
        }, renderModifiers: function() {
          if (this.shapeModifiers.length) {
            var t, e = this.shapes.length;
            for (t = 0; t < e; t += 1)
              this.shapes[t].sh.reset();
            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
              ;
          }
        }, searchProcessedElement: function(t) {
          for (var e = this.processedElements, i = 0, r = e.length; i < r; ) {
            if (e[i].elem === t)
              return e[i].pos;
            i += 1;
          }
          return 0;
        }, addProcessedElement: function(t, e) {
          for (var i = this.processedElements, r = i.length; r; )
            if (i[r -= 1].elem === t)
              return void (i[r].pos = e);
          i.push(new ProcessedElement(t, e));
        }, prepareFrame: function(t) {
          this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        } };
        var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
        function SVGShapeData(t, e, i) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
          for (var r = 0, s = t.length; r < s; ) {
            if (t[r].mProps.dynamicProperties.length) {
              this._isAnimated = true;
              break;
            }
            r += 1;
          }
        }
        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = true === t.hd, this.pElem = createNS("path"), this.msElem = null;
        }
        function DashProperty(t, e, i, r) {
          var s;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
          var a, n = e.length || 0;
          for (s = 0; s < n; s += 1)
            a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
          this.k || this.getValue(true), this._isAnimated = this.k;
        }
        function SVGStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
        }
        function SVGFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i;
        }
        function SVGNoStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
        }
        function GradientProperty(t, e, i) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", r), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
        }
        function SVGGradientFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
        }
        function SVGGradientStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
        }
        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g");
        }
        function SVGTransformData(t, e, i) {
          this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = true;
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = false;
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0, i = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1)
              "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var i = 0, r = this.o.length / 2; i < r; ) {
            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01)
              return false;
            i += 1;
          }
          return true;
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4)
            return false;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e; ) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                return false;
              t += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p))
            return false;
          return true;
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
            var e, i, r, s = 4 * this.data.p;
            for (e = 0; e < s; e += 1)
              i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
            if (this.o.length)
              for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
                i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
            this._mdf = !t;
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
          this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var i = createElementID(), r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
          var s, a, n, o = [];
          for (n = 4 * e.g.p, a = 0; a < n; a += 4)
            s = createNS("stop"), r.appendChild(s), o.push(s);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = o;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var i, r, s, a = createNS("mask"), n = createNS("path");
            a.appendChild(n);
            var o = createElementID(), h = createElementID();
            a.setAttribute("id", h);
            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (r = 4 * t.g.p; r < s; r += 2)
              (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, i, r) {
          if (0 === e)
            return "";
          var s, a = t.o, n = t.i, o = t.v, h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
          for (s = 1; s < e; s += 1)
            h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
          return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
        }, SVGElementsRenderer = function() {
          var t = new Matrix(), e = new Matrix();
          function i(t2, e2, i2) {
            (i2 || e2.transform.op._mdf) && e2.transform.container.setAttribute("opacity", e2.transform.op.v), (i2 || e2.transform.mProps._mdf) && e2.transform.container.setAttribute("transform", e2.transform.mProps.v.to2dCSS());
          }
          function r() {
          }
          function s(i2, r2, s2) {
            var a2, n2, o2, h2, l, p, f, m, c, d, u = r2.styles.length, y = r2.lvl;
            for (p = 0; p < u; p += 1) {
              if (h2 = r2.sh._mdf || s2, r2.styles[p].lvl < y) {
                for (m = e.reset(), c = y - r2.styles[p].lvl, d = r2.transformers.length - 1; !h2 && c > 0; )
                  h2 = r2.transformers[d].mProps._mdf || h2, c -= 1, d -= 1;
                if (h2)
                  for (c = y - r2.styles[p].lvl, d = r2.transformers.length - 1; c > 0; )
                    m.multiply(r2.transformers[d].mProps.v), c -= 1, d -= 1;
              } else
                m = t;
              if (n2 = (f = r2.sh.paths)._length, h2) {
                for (o2 = "", a2 = 0; a2 < n2; a2 += 1)
                  (l = f.shapes[a2]) && l._length && (o2 += buildShapeString(l, l._length, l.c, m));
                r2.caches[p] = o2;
              } else
                o2 = r2.caches[p];
              r2.styles[p].d += true === i2.hd ? "" : o2, r2.styles[p]._mdf = h2 || r2.styles[p]._mdf;
            }
          }
          function a(t2, e2, i2) {
            var r2 = e2.style;
            (e2.c._mdf || i2) && r2.pElem.setAttribute("fill", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || i2) && r2.pElem.setAttribute("fill-opacity", e2.o.v);
          }
          function n(t2, e2, i2) {
            o(t2, e2, i2), h(t2, e2, i2);
          }
          function o(t2, e2, i2) {
            var r2, s2, a2, n2, o2, h2 = e2.gf, l = e2.g._hasOpacity, p = e2.s.v, f = e2.e.v;
            if (e2.o._mdf || i2) {
              var m = "gf" === t2.ty ? "fill-opacity" : "stroke-opacity";
              e2.style.pElem.setAttribute(m, e2.o.v);
            }
            if (e2.s._mdf || i2) {
              var c = 1 === t2.t ? "x1" : "cx", d = "x1" === c ? "y1" : "cy";
              h2.setAttribute(c, p[0]), h2.setAttribute(d, p[1]), l && !e2.g._collapsable && (e2.of.setAttribute(c, p[0]), e2.of.setAttribute(d, p[1]));
            }
            if (e2.g._cmdf || i2) {
              r2 = e2.cst;
              var u = e2.g.c;
              for (a2 = r2.length, s2 = 0; s2 < a2; s2 += 1)
                (n2 = r2[s2]).setAttribute("offset", u[4 * s2] + "%"), n2.setAttribute("stop-color", "rgb(" + u[4 * s2 + 1] + "," + u[4 * s2 + 2] + "," + u[4 * s2 + 3] + ")");
            }
            if (l && (e2.g._omdf || i2)) {
              var y = e2.g.o;
              for (a2 = (r2 = e2.g._collapsable ? e2.cst : e2.ost).length, s2 = 0; s2 < a2; s2 += 1)
                n2 = r2[s2], e2.g._collapsable || n2.setAttribute("offset", y[2 * s2] + "%"), n2.setAttribute("stop-opacity", y[2 * s2 + 1]);
            }
            if (1 === t2.t)
              (e2.e._mdf || i2) && (h2.setAttribute("x2", f[0]), h2.setAttribute("y2", f[1]), l && !e2.g._collapsable && (e2.of.setAttribute("x2", f[0]), e2.of.setAttribute("y2", f[1])));
            else if ((e2.s._mdf || e2.e._mdf || i2) && (o2 = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h2.setAttribute("r", o2), l && !e2.g._collapsable && e2.of.setAttribute("r", o2)), e2.e._mdf || e2.h._mdf || e2.a._mdf || i2) {
              o2 || (o2 = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
              var g = Math.atan2(f[1] - p[1], f[0] - p[0]), v = e2.h.v;
              v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
              var b = o2 * v, x = Math.cos(g + e2.a.v) * b + p[0], P = Math.sin(g + e2.a.v) * b + p[1];
              h2.setAttribute("fx", x), h2.setAttribute("fy", P), l && !e2.g._collapsable && (e2.of.setAttribute("fx", x), e2.of.setAttribute("fy", P));
            }
          }
          function h(t2, e2, i2) {
            var r2 = e2.style, s2 = e2.d;
            s2 && (s2._mdf || i2) && s2.dashStr && (r2.pElem.setAttribute("stroke-dasharray", s2.dashStr), r2.pElem.setAttribute("stroke-dashoffset", s2.dashoffset[0])), e2.c && (e2.c._mdf || i2) && r2.pElem.setAttribute("stroke", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || i2) && r2.pElem.setAttribute("stroke-opacity", e2.o.v), (e2.w._mdf || i2) && (r2.pElem.setAttribute("stroke-width", e2.w.v), r2.msElem && r2.msElem.setAttribute("stroke-width", e2.w.v));
          }
          return { createRenderFunction: function(t2) {
            switch (t2.ty) {
              case "fl":
                return a;
              case "gf":
                return o;
              case "gs":
                return n;
              case "st":
                return h;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return s;
              case "tr":
                return i;
              case "no":
                return r;
              default:
                return null;
            }
          } };
        }();
        function SVGShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
        }
        function LetterProps(t, e, i, r, s, a) {
          this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = { o: true, sw: !!e, sc: !!i, fc: !!r, m: true, p: true };
        }
        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
        }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
        }, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, i, r, s = this.shapes.length, a = this.stylesList.length, n = [], o = false;
          for (i = 0; i < a; i += 1) {
            for (r = this.stylesList[i], o = false, n.length = 0, t = 0; t < s; t += 1)
              -1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
            n.length > 1 && o && this.setShapesAsAnimated(n);
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            t[e].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var i, r = new SVGStyleData(t, e), s = r.pElem;
          if ("st" === t.ty)
            i = new SVGStrokeStyleData(this, t, r);
          else if ("fl" === t.ty)
            i = new SVGFillStyleData(this, t, r);
          else if ("gf" === t.ty || "gs" === t.ty) {
            i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"));
          } else
            "no" === t.ty && (i = new SVGNoStyleData(this, t, r));
          return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData();
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var i = TransformPropertyFactory.getTransformProperty(this, t, this), r = new SVGTransformData(i, i.o, e);
          return this.addToAnimatedContents(t, r), r;
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
          var r = 4;
          "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
          var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
          return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var i = 0, r = this.animatedContents.length; i < r; ) {
            if (this.animatedContents[i].element === e)
              return;
            i += 1;
          }
          this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, i = t.styles, r = this.stylesList.length;
          for (e = 0; e < r; e += 1)
            this.stylesList[e].closed || i.push(this.stylesList[e]);
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = true;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1)
            this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
            this.dynamicProperties[t].getValue();
          this.renderModifiers();
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, a, n) {
          var o, h, l, p, f, m, c = [].concat(a), d = t.length - 1, u = [], y = [];
          for (o = d; o >= 0; o -= 1) {
            if ((m = this.searchProcessedElement(t[o])) ? e[o] = i[m - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
              m ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), u.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (m)
                for (l = e[o].it.length, h = 0; h < l; h += 1)
                  e[o].prevViewData[h] = e[o].it[h];
              else
                e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr);
            } else
              "tr" === t[o].ty ? (m || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (m || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (m ? (f = e[o]).closed = false : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (m ? (f = e[o]).closed = true : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = false), y.push(f));
            this.addProcessedElement(t[o], o + 1);
          }
          for (d = u.length, o = 0; o < d; o += 1)
            u[o].closed = true;
          for (d = y.length, o = 0; o < d; o += 1)
            y[o].closed = true;
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1)
            this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)
            (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, i = this.animatedContents.length;
          for (t = 0; t < i; t += 1)
            e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && true !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        }, LetterProps.prototype.update = function(t, e, i, r, s, a) {
          this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
          var n = false;
          return this.o !== t && (this.o = t, this._mdf.o = true, n = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, n = true), this.sc !== i && (this.sc = i, this._mdf.sc = true, n = true), this.fc !== r && (this.fc = r, this._mdf.fc = true, n = true), this.m !== s && (this.m = s, this._mdf.m = true, n = true), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = true, n = true), n;
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes();
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData, i = this.keysIndex;
            if (this.lock)
              this.setCurrentData(this.currentData);
            else {
              var r;
              this.lock = true, this._mdf = false;
              var s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
              for (r = 0; r < s; r += 1)
                a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e); )
            i += 1;
          return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, i, r = [], s = 0, a = t.length, n = false, o = false, h = ""; s < a; )
            n = o, o = false, e = t.charCodeAt(s), h = t.charAt(s), FontManager.isCombinedCharacter(e) ? n = true : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, s) ? h = t.substr(s, 14) : (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (h = t.substr(s, 2), n = true) : h = FontManager.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2)) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isVariationSelector(e) && (n = true)) : FontManager.isZeroWidthJoiner(e) && (n = true, o = true), n ? (r[r.length - 1] += h, n = false) : r.push(h), s += h.length;
          return r;
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = true;
          var e, i, r, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], f = 0, m = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), x = 0, P = getFontProperties(b);
          t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
          var E, S = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var C, _, A = true, T = t.sz[0], M = t.sz[1]; A; ) {
              C = 0, g = 0, i = (_ = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
              var k = -1;
              for (e = 0; e < i; e += 1)
                E = _[e].charCodeAt(0), r = false, " " === _[e] ? k = e : 13 !== E && 3 !== E || (g = 0, r = true, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(_[e], b.fStyle, b.fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = h.measureText(_[e], t.f, t.finalSize), g + x > T && " " !== _[e] ? (-1 === k ? i += 1 : e = k, C += t.finalLineHeight || 1.2 * t.finalSize, _.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += x, g += S);
              C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = _, i = t.finalText.length, A = false);
            }
          g = -S, x = 0;
          var D, F = 0;
          for (e = 0; e < i; e += 1)
            if (r = false, 13 === (E = (D = t.finalText[e]).charCodeAt(0)) || 3 === E ? (F = 0, y.push(g), v = g > v ? g : v, g = -2 * S, s = "", r = true, u += 1) : s = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = h.measureText(s, t.f, t.finalSize), " " === D ? F += x + S : (g += x + S + F, F = 0), p.push({ l: x, an: x, add: c, n: r, anIndexes: [], val: s, line: u, animatorJustifyOffset: 0 }), 2 == m) {
              if (c += x, "" === s || " " === s || e === i - 1) {
                for ("" !== s && " " !== s || (c -= x); d <= e; )
                  p[d].an = c, p[d].ind = f, p[d].extra = x, d += 1;
                f += 1, c = 0;
              }
            } else if (3 == m) {
              if (c += x, "" === s || e === i - 1) {
                for ("" === s && (c -= x); d <= e; )
                  p[d].an = c, p[d].ind = f, p[d].extra = x, d += 1;
                c = 0, f += 1;
              }
            } else
              p[f].ind = f, p[f].extra = 0, f += 1;
          if (t.l = p, v = g > v ? g : v, y.push(g), t.sz)
            t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else
            switch (t.boxWidth = v, t.j) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
          t.lineWidths = y;
          var w, I, V, B, R = l.a;
          n = R.length;
          var L = [];
          for (a = 0; a < n; a += 1) {
            for ((w = R[a]).a.sc && (t.strokeColorAnim = true), w.a.sw && (t.strokeWidthAnim = true), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = true), B = 0, V = w.s.b, e = 0; e < i; e += 1)
              (I = p[e]).anIndexes[a] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == i - 1) || 4 == V && (I.n || e == i - 1)) && (1 === w.s.rn && L.push(B), B += 1);
            l.a[a].s.totalChars = B;
            var G, z = -1;
            if (1 === w.s.rn)
              for (e = 0; e < i; e += 1)
                z != (I = p[e]).anIndexes[a] && (z = I.anIndexes[a], G = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[a] = G;
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var i = this.copyData({}, this.data.d.k[e].s);
          i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
          var t = Math.max, e = Math.min, i = Math.floor;
          function r(t2, e2) {
            this._currentTextLength = -1, this.k = false, this.data = e2, this.elem = t2, this.comp = t2.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t2), this.s = PropertyFactory.getProp(t2, e2.s || { k: 0 }, 0, 0, this), this.e = "e" in e2 ? PropertyFactory.getProp(t2, e2.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t2, e2.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t2, e2.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t2, e2.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(t2, e2.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(t2, e2.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
          }
          return r.prototype = { getMult: function(r2) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var s = 0, a = 0, n = 1, o = 1;
            this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
            var h = BezierFactory.getBezierEasing(s, a, n, o).get, l = 0, p = this.finalS, f = this.finalE, m = this.data.sh;
            if (2 === m)
              l = h(l = f === p ? r2 >= f ? 1 : 0 : t(0, e(0.5 / (f - p) + (r2 - p) / (f - p), 1)));
            else if (3 === m)
              l = h(l = f === p ? r2 >= f ? 0 : 1 : 1 - t(0, e(0.5 / (f - p) + (r2 - p) / (f - p), 1)));
            else if (4 === m)
              f === p ? l = 0 : (l = t(0, e(0.5 / (f - p) + (r2 - p) / (f - p), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l);
            else if (5 === m) {
              if (f === p)
                l = 0;
              else {
                var c = f - p, d = -c / 2 + (r2 = e(t(0, r2 + 0.5 - p), f - p)), u = c / 2;
                l = Math.sqrt(1 - d * d / (u * u));
              }
              l = h(l);
            } else
              6 === m ? (f === p ? l = 0 : (r2 = e(t(0, r2 + 0.5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r2 / (f - p))) / 2), l = h(l)) : (r2 >= i(p) && (l = t(0, e(r2 - p < 0 ? e(f, 1) - (p - r2) : f - r2, 1))), l = h(l));
            if (100 !== this.sm.v) {
              var y = 0.01 * this.sm.v;
              0 === y && (y = 1e-8);
              var g = 0.5 - 0.5 * y;
              l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1);
            }
            return l * this.a.v;
          }, getValue: function(t2) {
            this.iterateDynamicProperties(), this._mdf = t2 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t2 && 2 === this.data.r && (this.e.v = this._currentTextLength);
            var e2 = 2 === this.data.r ? 1 : 100 / this.data.totalChars, i2 = this.o.v / e2, r2 = this.s.v / e2 + i2, s = this.e.v / e2 + i2;
            if (r2 > s) {
              var a = r2;
              r2 = s, s = a;
            }
            this.finalS = r2, this.finalE = s;
          } }, extendPrototype([DynamicPropertyContainer], r), { getTextSelectorProp: function(t2, e2, i2) {
            return new r(t2, e2, i2);
          } };
        }();
        function TextAnimatorDataProperty(t, e, i) {
          var r = { propType: false }, s = PropertyFactory.getProp, a = e.a;
          this.a = { r: a.r ? s(t, a.r, 0, degToRads, i) : r, rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r, ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r, sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r, sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r, s: a.s ? s(t, a.s, 1, 0.01, i) : r, a: a.a ? s(t, a.a, 1, 0, i) : r, o: a.o ? s(t, a.o, 0, 0.01, i) : r, p: a.p ? s(t, a.p, 1, 0, i) : r, sw: a.sw ? s(t, a.sw, 0, 0, i) : r, sc: a.sc ? s(t, a.sc, 1, 0, i) : r, fc: a.fc ? s(t, a.fc, 1, 0, i) : r, fh: a.fh ? s(t, a.fh, 0, 0, i) : r, fs: a.fs ? s(t, a.fs, 0, 0.01, i) : r, fb: a.fb ? s(t, a.fb, 0, 0.01, i) : r, t: a.t ? s(t, a.t, 0, 0, i) : r }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
        }
        function TextAnimatorProperty(t, e, i) {
          this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(i);
        }
        function ITextElement() {
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, i = this._textData.a.length, r = PropertyFactory.getProp;
          for (t = 0; t < i; t += 1)
            e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = { a: r(this._elem, this._textData.p.a, 0, 0, this), f: r(this._elem, this._textData.p.f, 0, 0, this), l: r(this._elem, this._textData.p.l, 0, 0, this), r: r(this._elem, this._textData.p.r, 0, 0, this), p: r(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = false;
            var i, r, s, a, n, o, h, l, p, f, m, c, d, u, y, g, v, b, x, P = this._moreOptions.alignment.v, E = this._animatorsData, S = this._textData, C = this.mHelper, _ = this._renderType, A = this.renderedLetters.length, T = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var M, k = x.v;
                for (this._pathData.r.v && (k = k.reverse()), n = { tLength: 0, segments: [] }, a = k._length - 1, g = 0, s = 0; s < a; s += 1)
                  M = bez.buildBezierData(k.v[s], k.v[s + 1], [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]], [k.i[s + 1][0] - k.v[s + 1][0], k.i[s + 1][1] - k.v[s + 1][1]]), n.tLength += M.segmentLength, n.segments.push(M), g += M.segmentLength;
                s = a, x.v.c && (M = bez.buildBezierData(k.v[s], k.v[0], [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]], [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]]), n.tLength += M.segmentLength, n.segments.push(M), g += M.segmentLength), this._pathData.pi = n;
              }
              if (n = this._pathData.pi, o = this._pathData.f.v, m = 0, f = 1, l = 0, p = true, u = n.segments, o < 0 && x.v.c)
                for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[m = u.length - 1].points).length - 1; o < 0; )
                  o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[m -= 1].points).length - 1);
              c = (d = u[m].points)[f - 1], y = (h = d[f]).partialLength;
            }
            a = T.length, i = 0, r = 0;
            var D, F, w, I, V, B = 1.2 * t.finalSize * 0.714, R = true;
            w = E.length;
            var L, G, z, O, N, H, q, j, W, $, Y, J, X = -1, Z = o, K = m, U = f, Q = -1, tt = "", et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var it = 0, rt = 0, st = 2 === t.j ? -0.5 : -1, at = 0, nt = true;
              for (s = 0; s < a; s += 1)
                if (T[s].n) {
                  for (it && (it += rt); at < s; )
                    T[at].animatorJustifyOffset = it, at += 1;
                  it = 0, nt = true;
                } else {
                  for (F = 0; F < w; F += 1)
                    (D = E[F].a).t.propType && (nt && 2 === t.j && (rt += D.t.v * st), (V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? it += D.t.v * V[0] * st : it += D.t.v * V * st);
                  nt = false;
                }
              for (it && (it += rt); at < s; )
                T[at].animatorJustifyOffset = it, at += 1;
            }
            for (s = 0; s < a; s += 1) {
              if (C.reset(), O = 1, T[s].n)
                i = 0, r += t.yOffset, r += R ? 1 : 0, o = Z, R = false, this._hasMaskedPath && (f = U, c = (d = u[m = K].points)[f - 1], y = (h = d[f]).partialLength, l = 0), tt = "", Y = "", W = "", J = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== T[s].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[T[s].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[T[s].line]) / 2;
                    }
                    Q = T[s].line;
                  }
                  X !== T[s].ind && (T[X] && (o += T[X].extra), o += T[s].an / 2, X = T[s].ind), o += P[0] * T[s].an * 5e-3;
                  var ot = 0;
                  for (F = 0; F < w; F += 1)
                    (D = E[F].a).p.propType && ((V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.p.v[0] * V[0] : ot += D.p.v[0] * V), D.a.propType && ((V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.a.v[0] * V[0] : ot += D.a.v[0] * V);
                  for (p = true, this._pathData.a.v && (o = 0.5 * T[0].an + (g - this._pathData.f.v - 0.5 * T[0].an - 0.5 * T[T.length - 1].an) * X / (a - 1), o += this._pathData.f.v); p; )
                    l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, C.translate(-P[0] * T[s].an * 5e-3, -P[1] * B * 0.01), p = false) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[m += 1] ? d = u[m].points : x.v.c ? (f = 0, d = u[m = 0].points) : (l -= h.partialLength, d = null)), d && (c = h, y = (h = d[f]).partialLength));
                  L = T[s].an / 2 - T[s].add, C.translate(-L, 0, 0);
                } else
                  L = T[s].an / 2 - T[s].add, C.translate(-L, 0, 0), C.translate(-P[0] * T[s].an * 5e-3, -P[1] * B * 0.01, 0);
                for (F = 0; F < w; F += 1)
                  (D = E[F].a).t.propType && (V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += D.t.v * V[0] : o += D.t.v * V : V.length ? i += D.t.v * V[0] : i += D.t.v * V));
                for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < w; F += 1)
                  (D = E[F].a).a.propType && ((V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.translate(-D.a.v[0] * V[0], -D.a.v[1] * V[1], D.a.v[2] * V[2]) : C.translate(-D.a.v[0] * V, -D.a.v[1] * V, D.a.v[2] * V));
                for (F = 0; F < w; F += 1)
                  (D = E[F].a).s.propType && ((V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.scale(1 + (D.s.v[0] - 1) * V[0], 1 + (D.s.v[1] - 1) * V[1], 1) : C.scale(1 + (D.s.v[0] - 1) * V, 1 + (D.s.v[1] - 1) * V, 1));
                for (F = 0; F < w; F += 1) {
                  if (D = E[F].a, V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), D.sk.propType && (V.length ? C.skewFromAxis(-D.sk.v * V[0], D.sa.v * V[1]) : C.skewFromAxis(-D.sk.v * V, D.sa.v * V)), D.r.propType && (V.length ? C.rotateZ(-D.r.v * V[2]) : C.rotateZ(-D.r.v * V)), D.ry.propType && (V.length ? C.rotateY(D.ry.v * V[1]) : C.rotateY(D.ry.v * V)), D.rx.propType && (V.length ? C.rotateX(D.rx.v * V[0]) : C.rotateX(D.rx.v * V)), D.o.propType && (V.length ? O += (D.o.v * V[0] - O) * V[0] : O += (D.o.v * V - O) * V), t.strokeWidthAnim && D.sw.propType && (V.length ? H += D.sw.v * V[0] : H += D.sw.v * V), t.strokeColorAnim && D.sc.propType)
                    for (j = 0; j < 3; j += 1)
                      V.length ? N[j] += (D.sc.v[j] - N[j]) * V[0] : N[j] += (D.sc.v[j] - N[j]) * V;
                  if (t.fillColorAnim && t.fc) {
                    if (D.fc.propType)
                      for (j = 0; j < 3; j += 1)
                        V.length ? q[j] += (D.fc.v[j] - q[j]) * V[0] : q[j] += (D.fc.v[j] - q[j]) * V;
                    D.fh.propType && (q = V.length ? addHueToRGB(q, D.fh.v * V[0]) : addHueToRGB(q, D.fh.v * V)), D.fs.propType && (q = V.length ? addSaturationToRGB(q, D.fs.v * V[0]) : addSaturationToRGB(q, D.fs.v * V)), D.fb.propType && (q = V.length ? addBrightnessToRGB(q, D.fb.v * V[0]) : addBrightnessToRGB(q, D.fb.v * V));
                  }
                }
                for (F = 0; F < w; F += 1)
                  (D = E[F].a).p.propType && (V = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), this._hasMaskedPath ? V.length ? C.translate(0, D.p.v[1] * V[0], -D.p.v[2] * V[1]) : C.translate(0, D.p.v[1] * V, -D.p.v[2] * V) : V.length ? C.translate(D.p.v[0] * V[0], D.p.v[1] * V[1], -D.p.v[2] * V[2]) : C.translate(D.p.v[0] * V, D.p.v[1] * V, -D.p.v[2] * V));
                if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -t.ls), C.translate(0, P[1] * B * 0.01 + r, 0), this._pathData.p.v) {
                    b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                    var ht = 180 * Math.atan(b) / Math.PI;
                    h.point[0] < c.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180);
                  }
                  C.translate(G, z, 0), o -= P[0] * T[s].an * 5e-3, T[s + 1] && X !== T[s + 1].ind && (o += T[s].an / 2, o += 1e-3 * t.tr * t.finalSize);
                } else {
                  switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      C.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0);
                  }
                  C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(P[0] * T[s].an * 5e-3, P[1] * B * 0.01, 0), i += T[s].l + 1e-3 * t.tr * t.finalSize;
                }
                "html" === _ ? tt = C.toCSS() : "svg" === _ ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], J = O;
              }
              A <= s ? (I = new LetterProps(J, W, $, Y, tt, et), this.renderedLetters.push(I), A += 1, this.lettersChangedFlag = true) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(J, W, $, Y, tt, et) || this.lettersChangedFlag);
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
          this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var i, r, s = e.length, a = "";
          for (i = 0; i < s; i += 1)
            "sh" === e[i].ty && (r = e[i].ks.k, a += buildShapeString(r, r.i.length, true, t));
          return a;
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e);
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t);
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          }
          e.translate(r, s, 0);
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
        }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
        }, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
        };
        var emptyShapeData = { shapes: [] };
        function SVGTextLottieElement(t, e, i) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
        }
        function ISolidElement(t, e, i) {
          this.initElement(t, e, i);
        }
        function NullElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
        }
        function SVGRendererBase() {
        }
        function ICompElement() {
        }
        function SVGCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
        }
        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var i = "";
          if (e && e.title) {
            var r = createNS("title"), s = createElementID();
            r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s;
          }
          if (e && e.description) {
            var a = createNS("desc"), n = createElementID();
            a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n;
          }
          i && this.svgElement.setAttribute("aria-labelledby", i);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && false === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
        }
        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, i = t.length, r = [], s = ""; e < i; )
            t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
          return r.push(s), r;
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var i = t.shapes[0];
            if (i.it) {
              var r = i.it[i.it.length - 1];
              r.s && (r.s.k[0] = e, r.s.k[1] = e);
            }
          }
          return t;
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var i = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
          var r = this.globalData.fontManager.getFontByName(i.f);
          if (r.fClass)
            this.layerElement.setAttribute("class", r.fClass);
          else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var s = i.fWeight, a = i.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
          }
          this.layerElement.setAttribute("aria-label", i.t);
          var n, o = i.l || [], h = !!this.globalData.fontManager.chars;
          e = o.length;
          var l = this.mHelper, p = this.data.singleShape, f = 0, m = 0, c = true, d = 1e-3 * i.tr * i.finalSize;
          if (!p || h || i.sz) {
            var u, y = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !h || !p || 0 === t) {
                if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                  if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                    var g = createNS("g");
                    n.appendChild(g), this.textSpans[t].childSpan = g;
                  }
                  this.textSpans[t].span = n, this.layerElement.appendChild(n);
                }
                n.style.display = "inherit";
              }
              if (l.reset(), p && (o[t].n && (f = -d, m += i.yOffset, m += c ? 1 : 0, c = false), this.applyTextPropertiesToMatrix(i, l, o[t].line, f, m), f += o[t].l || 0, f += d), h) {
                var v;
                if (1 === (u = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t)
                  v = new SVGCompElement(u.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  u.data && u.data.shapes && (b = this.buildShapeData(u.data, i.finalSize)), v = new SVGShapeElement(b, this.globalData, this);
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy();
                }
                this.textSpans[t].glyph = v, v._debug = true, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
              } else
                p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            }
            p && n && n.setAttribute("d", "");
          } else {
            var P = this.textContainer, E = "start";
            switch (i.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start";
            }
            P.setAttribute("text-anchor", E), P.setAttribute("letter-spacing", d);
            var S = this.buildTextContents(i.finalText);
            for (e = S.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)
              (n = this.textSpans[t].span || createNS("tspan")).textContent = S[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = n, m += i.finalLineHeight;
            this.layerElement.appendChild(P);
          }
          for (; t < this.textSpans.length; )
            this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = true;
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = false;
            var t = this.layerElement.getBBox();
            this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
          }
          return this.bbox;
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, i = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)
            (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = true));
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = true;
            var i, r, s, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
            for (e = n.length, t = 0; t < e; t += 1)
              n[t].n || (i = a[t], r = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc));
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, true);
        }, NullElement.prototype.renderFrame = function() {
        }, NullElement.prototype.getBaseElement = function() {
          return null;
        }, NullElement.prototype.destroy = function() {
        }, NullElement.prototype.sourceRectAtTime = function() {
        }, NullElement.prototype.hide = function() {
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this);
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this);
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this);
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this);
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this);
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var i = createNS("clipPath"), r = createNS("rect");
          r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
          var s = createElementID();
          i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = true, this.animationItem = null;
        }, SVGRendererBase.prototype.updateContainerSize = function() {
        }, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0, i = this.layers.length;
          for (e = 0; e < i; e += 1)
            if (this.layers[e].ind === t)
              return e;
          return -1;
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = true;
            var i = this.createItem(this.layers[t]);
            if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
              var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === r)
                return;
              if (this.elements[r] && true !== this.elements[r]) {
                var s = e[r].getMatte(this.layers[t].tt);
                i.setMatte(s);
              } else
                this.buildItem(r), this.addPendingElement(i);
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length; ) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, i = this.elements.length; e < i; ) {
                if (this.elements[e] === t) {
                  var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[r].getMatte(this.layers[e].tt);
                  t.setMatte(s);
                  break;
                }
                e += 1;
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
              (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < i; e += 1)
                (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var i = t.getBaseElement();
          if (i) {
            for (var r, s = 0; s < e; )
              this.elements[s] && true !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
            r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none";
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block";
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder)
              this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
            }
            var i, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)
              (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)
            (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t;
        }, ICompElement.prototype.getElements = function() {
          return this.elements;
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)
            this.elements[t] && this.elements[t].destroy();
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement();
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this);
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this);
        }, ShapeTransformManager.prototype = { addTransformSequence: function(t) {
          var e, i = t.length, r = "_";
          for (e = 0; e < i; e += 1)
            r += t[e].transform.key + "_";
          var s = this.sequences[r];
          return s || (s = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: false }, this.sequences[r] = s, this.sequenceList.push(s)), s;
        }, processSequence: function(t, e) {
          for (var i = 0, r = t.transforms.length, s = e; i < r && !e; ) {
            if (t.transforms[i].transform.mProps._mdf) {
              s = true;
              break;
            }
            i += 1;
          }
          if (s)
            for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1)
              t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
          t._mdf = s;
        }, processSequences: function(t) {
          var e, i = this.sequenceList.length;
          for (e = 0; e < i; e += 1)
            this.processSequence(this.sequenceList[e], t);
        }, getNewKey: function() {
          return this.transform_key_count += 1, "_" + this.transform_key_count;
        } };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer", e = null, i = null, r = null;
          function s() {
            var s2, a, n;
            e || (s2 = createNS("svg"), a = createNS("filter"), n = createNS("feColorMatrix"), a.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(n), s2.appendChild(a), s2.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s2.style.display = "none"), r = s2, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
          }
          return { load: s, get: function(r2) {
            return e || s(), e.width = r2.width, e.height = r2.height, i.filter = "url(#" + t + ")", e;
          } };
        };
        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas)
            return new OffscreenCanvas(t, e);
          var i = createTag("canvas");
          return i.width = t, i.height = e, i;
        }
        var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas }, registeredEffects = {};
        function CVEffects(t) {
          var e, i, r = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < r; e += 1) {
            i = null;
            var s = t.data.ef[e].ty;
            if (registeredEffects[s])
              i = new (0, registeredEffects[s].effect)(t.effectsManager.effectElements[e], t);
            i && this.filters.push(i);
          }
          this.filters.length && t.addRenderableComponent(this);
        }
        function registerEffect(t, e) {
          registeredEffects[t] = { effect: e };
        }
        function CVMaskElement(t, e) {
          var i;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var r = this.masksProperties.length, s = false;
          for (i = 0; i < r; i += 1)
            "n" !== this.masksProperties[i].mode && (s = true), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
          this.hasMasks = s, s && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {
        }
        CVEffects.prototype.renderFrame = function(t) {
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1)
            this.filters[e].renderFrame(t);
        }, CVEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length, r = [];
          for (e = 0; e < i; e += 1)
            this.filters[e].type === t && r.push(this.filters[e]);
          return r;
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, i, r, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < n; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
                var h = r._length;
                for (o = 1; o < h; o += 1)
                  i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
              }
            this.element.globalData.renderer.save(true), a.clip();
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null;
        };
        var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
        function CVShapeData(t, e, i, r) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var s, a = 4;
          "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
          var n, o = i.length;
          for (s = 0; s < o; s += 1)
            i[s].closed || (n = { transforms: r.addTransformSequence(i[s].transforms), trNodes: [] }, this.styledShapes.push(n), i[s].elements.push(n));
        }
        function CVShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, i);
        }
        function CVTextElement(t, e, i) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i);
        }
        function CVImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i);
        }
        function CVSolidElement(t, e, i) {
          this.initElement(t, e, i);
        }
        function CanvasRendererBase() {
        }
        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
        }
        function CVContextData() {
          var t;
          this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
          for (t = 0; t < 15; t += 1) {
            var e = new CanvasContext();
            this.stack[t] = e;
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
        }
        function CVCompElement(t, e, i) {
          this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
        }
        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
        }
        function HBaseElement() {
        }
        function HSolidElement(t, e, i) {
          this.initElement(t, e, i);
        }
        function HShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
        }
        function HTextElement(t, e, i) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, i);
        }
        function HCameraElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
          var r = PropertyFactory.getProp;
          if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var s, a = t.ks.or.k.length;
            for (s = 0; s < a; s += 1)
              t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
          }
          this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
        }
        function HImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
        }
        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
        }
        function HCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
        }
        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" }, runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
        }
        CVBaseElement.prototype = { createElements: function() {
        }, initRendererElement: function() {
        }, createContainerElements: function() {
          if (this.data.tt >= 1) {
            