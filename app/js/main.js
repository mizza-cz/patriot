!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function () {
  'use strict';
  function a(e) {
    return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
  }
  function i(t, s) {
    void 0 === t && (t = {}),
      void 0 === s && (s = {}),
      Object.keys(s).forEach((e) => {
        void 0 === t[e]
          ? (t[e] = s[e])
          : a(s[e]) && a(t[e]) && 0 < Object.keys(s[e]).length && i(t[e], s[e]);
      });
  }
  const t = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function T() {
    var e = 'undefined' != typeof document ? document : {};
    return i(e, t), e;
  }
  const B = {
    document: t,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function L() {
    var e = 'undefined' != typeof window ? window : {};
    return i(e, B), e;
  }
  class n extends Array {
    constructor(e) {
      if ('number' != typeof e) {
        super(...(e || []));
        {
          var t = this;
          const s = t.__proto__;
          void Object.defineProperty(t, '__proto__', {
            get: () => s,
            set(e) {
              s.__proto__ = e;
            },
          });
        }
      } else super(e);
    }
  }
  function r(e) {
    const t = [];
    return (
      (e = void 0 === e ? [] : e).forEach((e) => {
        Array.isArray(e) ? t.push(...r(e)) : t.push(e);
      }),
      t
    );
  }
  function l(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function O(e, t) {
    const s = L(),
      a = T();
    let i = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(i);
    if ('string' == typeof e) {
      const s = e.trim();
      if (0 <= s.indexOf('<') && 0 <= s.indexOf('>')) {
        let e = 'div';
        0 === s.indexOf('<li') && (e = 'ul'),
          0 === s.indexOf('<tr') && (e = 'tbody'),
          (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (e = 'tr'),
          0 === s.indexOf('<tbody') && (e = 'table'),
          0 === s.indexOf('<option') && (e = 'select');
        const t = a.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e]);
      } else
        i = (function (e, t) {
          if ('string' != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || a);
    } else if (e.nodeType || e === s || e === a) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      i = e;
    }
    return new n(
      (function (t) {
        const s = [];
        for (let e = 0; e < t.length; e += 1) -1 === s.indexOf(t[e]) && s.push(t[e]);
        return s;
      })(i),
    );
  }
  O.fn = n.prototype;
  const s = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = r(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.add(...a);
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = r(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.remove(...a);
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = r(t.map((e) => e.split(' ')));
      return 0 < l(this, (t) => 0 < a.filter((e) => t.classList.contains(e)).length).length;
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = r(t.map((e) => e.split(' ')));
      this.forEach((t) => {
        a.forEach((e) => {
          t.classList.toggle(e);
        });
      });
    },
    attr: function (t, s) {
      if (1 === arguments.length && 'string' == typeof t)
        return this[0] ? this[0].getAttribute(t) : void 0;
      for (let e = 0; e < this.length; e += 1)
        if (2 === arguments.length) this[e].setAttribute(t, s);
        else for (const s in t) (this[e][s] = t[s]), this[e].setAttribute(s, t[s]);
      return this;
    },
    removeAttr: function (t) {
      for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
      return this;
    },
    transform: function (t) {
      for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
      return this;
    },
    transition: function (t) {
      for (let e = 0; e < this.length; e += 1)
        this[e].style.transitionDuration = 'string' != typeof t ? t + 'ms' : t;
      return this;
    },
    on: function () {
      for (var t = arguments.length, s = new Array(t), e = 0; e < t; e++) s[e] = arguments[e];
      let [a, i, r, n] = s;
      function l(t) {
        var e = t.target;
        if (e) {
          const s = t.target.dom7EventData || [];
          if ((s.indexOf(t) < 0 && s.unshift(t), O(e).is(i))) r.apply(e, s);
          else {
            const t = O(e).parents();
            for (let e = 0; e < t.length; e += 1) O(t[e]).is(i) && r.apply(t[e], s);
          }
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      'function' == typeof s[1] && (([a, r, n] = s), (i = void 0)), (n = n || !1);
      var d = a.split(' ');
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const s = this[e];
        if (i)
          for (p = 0; p < d.length; p += 1) {
            const t = d[p];
            s.dom7LiveListeners || (s.dom7LiveListeners = {}),
              s.dom7LiveListeners[t] || (s.dom7LiveListeners[t] = []),
              s.dom7LiveListeners[t].push({ listener: r, proxyListener: l }),
              s.addEventListener(t, l, n);
          }
        else
          for (p = 0; p < d.length; p += 1) {
            const t = d[p];
            s.dom7Listeners || (s.dom7Listeners = {}),
              s.dom7Listeners[t] || (s.dom7Listeners[t] = []),
              s.dom7Listeners[t].push({ listener: r, proxyListener: o }),
              s.addEventListener(t, o, n);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, s = new Array(e), a = 0; a < e; a++) s[a] = arguments[a];
      let [t, i, r, n] = s;
      'function' == typeof s[1] && (([t, r, n] = s), (i = void 0)), (n = n || !1);
      var l = t.split(' ');
      for (let e = 0; e < l.length; e += 1) {
        const s = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e];
          let t;
          if (
            (!i && a.dom7Listeners
              ? (t = a.dom7Listeners[s])
              : i && a.dom7LiveListeners && (t = a.dom7LiveListeners[s]),
            t && t.length)
          )
            for (let e = t.length - 1; 0 <= e; --e) {
              const i = t[e];
              ((r && i.listener === r) ||
                (r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r) ||
                !r) &&
                (a.removeEventListener(s, i.proxyListener, n), t.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function () {
      const t = L();
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
      const r = a[0].split(' '),
        n = a[1];
      for (let e = 0; e < r.length; e += 1) {
        const i = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(i, { detail: n, bubbles: !0, cancelable: !0 });
            (r.dom7EventData = a.filter((e, t) => 0 < t)),
              r.dispatchEvent(s),
              (r.dom7EventData = []),
              delete r.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (s) {
      const a = this;
      return (
        s &&
          a.on('transitionend', function e(t) {
            t.target === this && (s.call(this, t), a.off('transitionend', e));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue('margin-right')) +
            parseFloat(e.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue('margin-top')) +
            parseFloat(e.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = L();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (0 < this.length) {
        const e = L(),
          t = T(),
          s = this[0],
          a = s.getBoundingClientRect(),
          i = t.body,
          r = s.clientTop || i.clientTop || 0,
          n = s.clientLeft || i.clientLeft || 0,
          l = s === e ? e.scrollY : s.scrollTop,
          o = s === e ? e.scrollX : s.scrollLeft;
        return { top: a.top + l - r, left: a.left + o - n };
      }
      return null;
    },
    css: function (e, t) {
      const s = L();
      let a;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 !== arguments.length || 'string' != typeof e) return this;
      for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
      return this;
    },
    each: function (s) {
      return (
        s &&
          this.forEach((e, t) => {
            s.apply(e, [e, t]);
          }),
        this
      );
    },
    html: function (t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : null;
      for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
      return this;
    },
    text: function (t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
      for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
      return this;
    },
    is: function (e) {
      const t = L(),
        s = T(),
        a = this[0];
      let i, r;
      if (!a || void 0 === e) return !1;
      if ('string' == typeof e) {
        if (a.matches) return a.matches(e);
        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
        if (a.msMatchesSelector) return a.msMatchesSelector(e);
        for (i = O(e), r = 0; r < i.length; r += 1) if (i[r] === a) return !0;
        return !1;
      }
      if (e === s) return a === s;
      if (e === t) return a === t;
      if (e.nodeType || e instanceof n) {
        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1) if (i[r] === a) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t = this.length;
      return O(t - 1 < e ? [] : e < 0 ? ((t = t + e) < 0 ? [] : [this[t]]) : [this[e]]);
    },
    append: function () {
      var s;
      const a = T();
      for (let e = 0; e < arguments.length; e += 1) {
        s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
        for (let t = 0; t < this.length; t += 1)
          if ('string' == typeof s) {
            const T = a.createElement('div');
            for (T.innerHTML = s; T.firstChild; ) this[t].appendChild(T.firstChild);
          } else if (s instanceof n)
            for (let e = 0; e < s.length; e += 1) this[t].appendChild(s[e]);
          else this[t].appendChild(s);
      }
      return this;
    },
    prepend: function (e) {
      const t = T();
      let s, a;
      for (s = 0; s < this.length; s += 1)
        if ('string' == typeof e) {
          const T = t.createElement('div');
          for (T.innerHTML = e, a = T.childNodes.length - 1; 0 <= a; --a)
            this[s].insertBefore(T.childNodes[a], this[s].childNodes[0]);
        } else if (e instanceof n)
          for (a = 0; a < e.length; a += 1) this[s].insertBefore(e[a], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return 0 < this.length
        ? e
          ? this[0].nextElementSibling && O(this[0].nextElementSibling).is(e)
            ? O([this[0].nextElementSibling])
            : O([])
          : this[0].nextElementSibling
          ? O([this[0].nextElementSibling])
          : O([])
        : O([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return O([]);
      for (; s.nextElementSibling; ) {
        var a = s.nextElementSibling;
        (e && !O(a).is(e)) || t.push(a), (s = a);
      }
      return O(t);
    },
    prev: function (e) {
      var t;
      return 0 < this.length
        ? ((t = this[0]),
          e
            ? t.previousElementSibling && O(t.previousElementSibling).is(e)
              ? O([t.previousElementSibling])
              : O([])
            : t.previousElementSibling
            ? O([t.previousElementSibling])
            : O([]))
        : O([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return O([]);
      for (; s.previousElementSibling; ) {
        var a = s.previousElementSibling;
        (e && !O(a).is(e)) || t.push(a), (s = a);
      }
      return O(t);
    },
    parent: function (t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1)
        null === this[e].parentNode ||
          (t && !O(this[e].parentNode).is(t)) ||
          s.push(this[e].parentNode);
      return O(s);
    },
    parents: function (s) {
      const a = [];
      for (let t = 0; t < this.length; t += 1) {
        let e = this[t].parentNode;
        for (; e; ) (s && !O(e).is(s)) || a.push(e), (e = e.parentNode);
      }
      return O(a);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? O([]) : (t = t.is(e) ? t : t.parents(e).eq(0));
    },
    find: function (t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1) {
        var a = this[e].querySelectorAll(t);
        for (let e = 0; e < a.length; e += 1) s.push(a[e]);
      }
      return O(s);
    },
    children: function (t) {
      const s = [];
      for (let e = 0; e < this.length; e += 1) {
        var a = this[e].children;
        for (let e = 0; e < a.length; e += 1) (t && !O(a[e]).is(t)) || s.push(a[e]);
      }
      return O(s);
    },
    filter: function (e) {
      return O(l(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function S(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function g() {
    return Date.now();
  }
  function I(e, t) {
    void 0 === t && (t = 'x');
    const s = L();
    let a, i, r;
    const n = (function (e) {
      const t = L();
      let s;
      return (s =
        (s =
          !(s = t.getComputedStyle ? t.getComputedStyle(e, null) : s) && e.currentStyle
            ? e.currentStyle
            : s) || e.style);
    })(e);
    return (
      s.WebKitCSSMatrix
        ? (6 < (i = n.transform || n.webkitTransform).split(',').length &&
            (i = i
              .split(', ')
              .map((e) => e.replace(',', '.'))
              .join(', ')),
          (r = new s.WebKitCSSMatrix('none' === i ? '' : i)))
        : ((r =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
          (a = r.toString().split(','))),
      'x' === t &&
        (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
      (i =
        'y' === t
          ? s.WebKitCSSMatrix
            ? r.m42
            : 16 === a.length
            ? parseFloat(a[13])
            : parseFloat(a[5])
          : i) || 0
    );
  }
  function d(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      e.constructor &&
      'Object' === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function u(e) {
    const s = Object(arguments.length <= 0 ? void 0 : e),
      t = ['__proto__', 'constructor', 'prototype'];
    for (let e = 1; e < arguments.length; e += 1) {
      var a = e < 0 || arguments.length <= e ? void 0 : arguments[e];
      if (
        null != a &&
        ((l = a),
        !('undefined' != typeof window && void 0 !== window.HTMLElement
          ? l instanceof HTMLElement
          : l && (1 === l.nodeType || 11 === l.nodeType)))
      ) {
        var i = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let e = 0, t = i.length; e < t; e += 1) {
          var r = i[e],
            n = Object.getOwnPropertyDescriptor(a, r);
          void 0 !== n &&
            n.enumerable &&
            (d(s[r]) && d(a[r])
              ? a[r].__swiper__
                ? (s[r] = a[r])
                : u(s[r], a[r])
              : !d(s[r]) && d(a[r])
              ? ((s[r] = {}), a[r].__swiper__ ? (s[r] = a[r]) : u(s[r], a[r]))
              : (s[r] = a[r]));
        }
      }
    }
    var l;
    return s;
  }
  function M(e, t, s) {
    e.style.setProperty(t, s);
  }
  function w(e) {
    let { swiper: s, targetPosition: a, side: i } = e;
    const r = L(),
      n = -s.translate;
    let l,
      o = null;
    const d = s.params.speed,
      p =
        ((s.wrapperEl.style.scrollSnapType = 'none'),
        r.cancelAnimationFrame(s.cssModeFrameID),
        a > n ? 'next' : 'prev'),
      c = (e, t) => ('next' === p && t <= e) || ('prev' === p && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        var e = Math.max(Math.min((l - o) / d, 1), 0),
          e = 0.5 - Math.cos(e * Math.PI) / 2;
        let t = n + e * (a - n);
        if ((c(t, a) && (t = a), s.wrapperEl.scrollTo({ [i]: t }), c(t, a)))
          return (
            (s.wrapperEl.style.overflow = 'hidden'),
            (s.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (s.wrapperEl.style.overflow = ''), s.wrapperEl.scrollTo({ [i]: t });
            }),
            void r.cancelAnimationFrame(s.cssModeFrameID)
          );
        s.cssModeFrameID = r.requestAnimationFrame(u);
      };
    u();
  }
  let e, p, c;
  function m() {
    return (e =
      e ||
      (function () {
        const s = L(),
          e = T();
        return {
          smoothScroll: e.documentElement && 'scrollBehavior' in e.documentElement.style,
          touch: !!('ontouchstart' in s || (s.DocumentTouch && e instanceof s.DocumentTouch)),
          passiveListener: (function () {
            let e = !1;
            try {
              var t = Object.defineProperty({}, 'passive', {
                get() {
                  e = !0;
                },
              });
              s.addEventListener('testPassiveListener', null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: 'ongesturestart' in s,
        };
      })());
  }
  function o(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    var { activeIndex: e, previousIndex: r } = t;
    let n = a;
    if (
      ((n = n || (r < e ? 'next' : e < r ? 'prev' : 'reset')),
      t.emit('transition' + i),
      s && e !== r)
    ) {
      if ('reset' === n) return t.emit('slideResetTransition' + i);
      t.emit('slideChangeTransition' + i),
        'next' === n ? t.emit('slideNextTransition' + i) : t.emit('slidePrevTransition' + i);
    }
  }
  function h() {
    var e,
      t,
      s = this,
      { params: a, el: i } = s;
    (i && 0 === i.offsetWidth) ||
      (a.breakpoints && s.setBreakpoint(),
      ({ allowSlideNext: i, allowSlidePrev: e, snapGrid: t } = s),
      (s.allowSlideNext = !0),
      (s.allowSlidePrev = !0),
      s.updateSize(),
      s.updateSlides(),
      s.updateSlidesClasses(),
      ('auto' === a.slidesPerView || 1 < a.slidesPerView) &&
      s.isEnd &&
      !s.isBeginning &&
      !s.params.centeredSlides
        ? s.slideTo(s.slides.length - 1, 0, !1, !0)
        : s.slideTo(s.activeIndex, 0, !1, !0),
      s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.run(),
      (s.allowSlidePrev = e),
      (s.allowSlideNext = i),
      s.params.watchOverflow && t !== s.snapGrid && s.checkOverflow());
  }
  Object.keys(s).forEach((e) => {
    Object.defineProperty(O.fn, e, { value: s[e], writable: !0 });
  });
  let f = !1;
  function G() {}
  const v = (e, t) => {
      const s = T(),
        { params: a, touchEvents: i, el: r, wrapperEl: n, device: l, support: o } = e,
        d = !!a.nested,
        p = 'on' === t ? 'addEventListener' : 'removeEventListener',
        c = t;
      if (o.touch) {
        const t = !('touchstart' !== i.start || !o.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1,
        };
        r[p](i.start, e.onTouchStart, t),
          r[p](i.move, e.onTouchMove, o.passiveListener ? { passive: !1, capture: d } : d),
          r[p](i.end, e.onTouchEnd, t),
          i.cancel && r[p](i.cancel, e.onTouchEnd, t);
      } else
        r[p](i.start, e.onTouchStart, !1),
          s[p](i.move, e.onTouchMove, d),
          s[p](i.end, e.onTouchEnd, !1);
      (a.preventClicks || a.preventClicksPropagation) && r[p]('click', e.onClick, !0),
        a.cssMode && n[p]('scroll', e.onScroll),
        a.updateOnWindowResize
          ? e[c](
              l.ios || l.android
                ? 'resize orientationchange observerUpdate'
                : 'resize observerUpdate',
              h,
              !0,
            )
          : e[c]('observerUpdate', h, !0);
    },
    b = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
  var x = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  const y = {
      eventsEmitter: {
        on(e, t, s) {
          const a = this;
          if (!a.eventsListeners || a.destroyed) return a;
          if ('function' != typeof t) return a;
          const i = s ? 'unshift' : 'push';
          return (
            e.split(' ').forEach((e) => {
              a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }),
            a
          );
        },
        once(a, i, e) {
          const r = this;
          return !r.eventsListeners || r.destroyed || 'function' != typeof i
            ? r
            : ((n.__emitterProxy = i), r.on(a, n, e));
          function n() {
            r.off(a, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            i.apply(r, t);
          }
        },
        onAny(e, t) {
          var s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof e) return s;
          t = t ? 'unshift' : 'push';
          return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[t](e), s;
        },
        offAny(e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          e = t.eventsAnyListeners.indexOf(e);
          return 0 <= e && t.eventsAnyListeners.splice(e, 1), t;
        },
        off(e, a) {
          const i = this;
          return (
            !i.eventsListeners ||
              i.destroyed ||
              (i.eventsListeners &&
                e.split(' ').forEach((s) => {
                  void 0 === a
                    ? (i.eventsListeners[s] = [])
                    : i.eventsListeners[s] &&
                      i.eventsListeners[s].forEach((e, t) => {
                        (e === a || (e.__emitterProxy && e.__emitterProxy === a)) &&
                          i.eventsListeners[s].splice(t, 1);
                      });
                })),
            i
          );
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, a;
          for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
          return (
            (a =
              'string' == typeof r[0] || Array.isArray(r[0])
                ? ((t = r[0]), (s = r.slice(1, r.length)), e)
                : ((t = r[0].events), (s = r[0].data), r[0].context || e)),
            s.unshift(a),
            (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(a, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(a, s);
                  });
            }),
            e
          );
        },
      },
      update: {
        updateSize: function () {
          var e = this;
          let t, s;
          const a = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : a[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : a[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(a.css('padding-left') || 0, 10) -
                parseInt(a.css('padding-right') || 0, 10)),
              (s =
                s -
                parseInt(a.css('padding-top') || 0, 10) -
                parseInt(a.css('padding-bottom') || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
        },
        updateSlides: function () {
          const s = this;
          function a(e) {
            return s.isHorizontal()
              ? e
              : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
                }[e];
          }
          function i(e, t) {
            return parseFloat(e.getPropertyValue(a(t)) || 0);
          }
          const r = s.params,
            { $wrapperEl: n, size: l, rtlTranslate: o, wrongRTL: d } = s,
            p = s.virtual && r.virtual.enabled,
            e = (p ? s.virtual : s).slides.length,
            c = n.children('.' + s.params.slideClass),
            u = (p ? s.virtual.slides : c).length;
          let h = [];
          const m = [],
            f = [];
          let v = r.slidesOffsetBefore,
            g = ('function' == typeof v && (v = r.slidesOffsetBefore.call(s)), r.slidesOffsetAfter);
          'function' == typeof g && (g = r.slidesOffsetAfter.call(s));
          var w = s.snapGrid.length,
            b = s.slidesGrid.length;
          let x = r.spaceBetween,
            y = -v,
            E = 0,
            T = 0;
          if (void 0 !== l) {
            'string' == typeof x &&
              0 <= x.indexOf('%') &&
              (x = (parseFloat(x.replace('%', '')) / 100) * l),
              (s.virtualSize = -x),
              o
                ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
                : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
              r.centeredSlides &&
                r.cssMode &&
                (M(s.wrapperEl, '--swiper-centered-offset-before', ''),
                M(s.wrapperEl, '--swiper-centered-offset-after', ''));
            var S = r.grid && 1 < r.grid.rows && s.grid;
            let t;
            S && s.grid.initSlides(u);
            var C =
              'auto' === r.slidesPerView &&
              r.breakpoints &&
              0 <
                Object.keys(r.breakpoints).filter((e) => void 0 !== r.breakpoints[e].slidesPerView)
                  .length;
            for (let e = 0; e < u; e += 1) {
              t = 0;
              const o = c.eq(e);
              if ((S && s.grid.updateSlide(e, o, u, a), 'none' !== o.css('display'))) {
                if ('auto' === r.slidesPerView) {
                  C && (c[e].style[a('width')] = '');
                  const l = getComputedStyle(o[0]),
                    d = o[0].style.transform,
                    p = o[0].style.webkitTransform;
                  if (
                    (d && (o[0].style.transform = 'none'),
                    p && (o[0].style.webkitTransform = 'none'),
                    r.roundLengths)
                  )
                    t = s.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const s = i(l, 'width'),
                      a = i(l, 'padding-left'),
                      r = i(l, 'padding-right'),
                      n = i(l, 'margin-left'),
                      d = i(l, 'margin-right'),
                      p = l.getPropertyValue('box-sizing');
                    if (p && 'border-box' === p) t = s + n + d;
                    else {
                      const { clientWidth: i, offsetWidth: l } = o[0];
                      t = s + a + r + n + d + (l - i);
                    }
                  }
                  d && (o[0].style.transform = d),
                    p && (o[0].style.webkitTransform = p),
                    r.roundLengths && (t = Math.floor(t));
                } else
                  (t = (l - (r.slidesPerView - 1) * x) / r.slidesPerView),
                    r.roundLengths && (t = Math.floor(t)),
                    c[e] && (c[e].style[a('width')] = t + 'px');
                c[e] && (c[e].swiperSlideSize = t),
                  f.push(t),
                  r.centeredSlides
                    ? ((y = y + t / 2 + E / 2 + x),
                      0 === E && 0 !== e && (y = y - l / 2 - x),
                      0 === e && (y = y - l / 2 - x),
                      Math.abs(y) < 0.001 && (y = 0),
                      r.roundLengths && (y = Math.floor(y)),
                      T % r.slidesPerGroup == 0 && h.push(y),
                      m.push(y))
                    : (r.roundLengths && (y = Math.floor(y)),
                      (T - Math.min(s.params.slidesPerGroupSkip, T)) % s.params.slidesPerGroup ==
                        0 && h.push(y),
                      m.push(y),
                      (y = y + t + x)),
                  (s.virtualSize += t + x),
                  (E = t),
                  (T += 1);
              }
            }
            if (
              ((s.virtualSize = Math.max(s.virtualSize, l) + g),
              o &&
                d &&
                ('slide' === r.effect || 'coverflow' === r.effect) &&
                n.css({ width: s.virtualSize + r.spaceBetween + 'px' }),
              r.setWrapperSize && n.css({ [a('width')]: s.virtualSize + r.spaceBetween + 'px' }),
              S && s.grid.updateWrapperSize(t, h, a),
              !r.centeredSlides)
            ) {
              const a = [];
              for (let t = 0; t < h.length; t += 1) {
                let e = h[t];
                r.roundLengths && (e = Math.floor(e)), h[t] <= s.virtualSize - l && a.push(e);
              }
              (h = a),
                1 < Math.floor(s.virtualSize - l) - Math.floor(h[h.length - 1]) &&
                  h.push(s.virtualSize - l);
            }
            if ((0 === h.length && (h = [0]), 0 !== r.spaceBetween)) {
              const i = s.isHorizontal() && o ? 'marginLeft' : a('marginRight');
              c.filter((e, t) => !r.cssMode || t !== c.length - 1).css({ [i]: x + 'px' });
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              let t = 0;
              f.forEach((e) => {
                t += e + (r.spaceBetween || 0);
              });
              const a = (t -= r.spaceBetween) - l;
              h = h.map((e) => (e < 0 ? -v : e > a ? a + g : e));
            }
            if (r.centerInsufficientSlides) {
              let t = 0;
              if (
                (f.forEach((e) => {
                  t += e + (r.spaceBetween || 0);
                }),
                (t -= r.spaceBetween) < l)
              ) {
                const a = (l - t) / 2;
                h.forEach((e, t) => {
                  h[t] = e - a;
                }),
                  m.forEach((e, t) => {
                    m[t] = e + a;
                  });
              }
            }
            if (
              (Object.assign(s, { slides: c, snapGrid: h, slidesGrid: m, slidesSizesGrid: f }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              M(s.wrapperEl, '--swiper-centered-offset-before', -h[0] + 'px'),
                M(
                  s.wrapperEl,
                  '--swiper-centered-offset-after',
                  s.size / 2 - f[f.length - 1] / 2 + 'px',
                );
              const a = -s.snapGrid[0],
                i = -s.slidesGrid[0];
              (s.snapGrid = s.snapGrid.map((e) => e + a)),
                (s.slidesGrid = s.slidesGrid.map((e) => e + i));
            }
            if (
              (u !== e && s.emit('slidesLengthChange'),
              h.length !== w &&
                (s.params.watchOverflow && s.checkOverflow(), s.emit('snapGridLengthChange')),
              m.length !== b && s.emit('slidesGridLengthChange'),
              r.watchSlidesProgress && s.updateSlidesOffset(),
              !(p || r.cssMode || ('slide' !== r.effect && 'fade' !== r.effect)))
            ) {
              const a = r.containerModifierClass + 'backface-hidden',
                i = s.$el.hasClass(a);
              u <= r.maxBackfaceHiddenSlides ? i || s.$el.addClass(a) : i && s.$el.removeClass(a);
            }
          }
        },
        updateAutoHeight: function (e) {
          const s = this,
            t = [],
            a = s.virtual && s.params.virtual.enabled;
          let i,
            r = 0;
          'number' == typeof e ? s.setTransition(e) : !0 === e && s.setTransition(s.params.speed);
          var n = (t) =>
            (a
              ? s.slides.filter(
                  (e) => parseInt(e.getAttribute('data-swiper-slide-index'), 10) === t,
                )
              : s.slides.eq(t))[0];
          if ('auto' !== s.params.slidesPerView && 1 < s.params.slidesPerView)
            if (s.params.centeredSlides)
              s.visibleSlides.each((e) => {
                t.push(e);
              });
            else
              for (i = 0; i < Math.ceil(s.params.slidesPerView); i += 1) {
                const e = s.activeIndex + i;
                if (e > s.slides.length && !a) break;
                t.push(n(e));
              }
          else t.push(n(s.activeIndex));
          for (i = 0; i < t.length; i += 1)
            if (void 0 !== t[i]) {
              const e = t[i].offsetHeight;
              r = e > r ? e : r;
            }
          (!r && 0 !== r) || s.$wrapperEl.css('height', r + 'px');
        },
        updateSlidesOffset: function () {
          const t = this.slides;
          for (let e = 0; e < t.length; e += 1)
            t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const a = this,
            i = a.params,
            { slides: r, rtlTranslate: n, snapGrid: l } = a;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && a.updateSlidesOffset();
            let s = n ? e : -e;
            r.removeClass(i.slideVisibleClass),
              (a.visibleSlidesIndexes = []),
              (a.visibleSlides = []);
            for (let t = 0; t < r.length; t += 1) {
              const o = r[t];
              let e = o.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (e -= r[0].swiperSlideOffset);
              const O =
                  (s + (i.centeredSlides ? a.minTranslate() : 0) - e) /
                  (o.swiperSlideSize + i.spaceBetween),
                d =
                  (s - l[0] + (i.centeredSlides ? a.minTranslate() : 0) - e) /
                  (o.swiperSlideSize + i.spaceBetween),
                p = -(s - e),
                c = p + a.slidesSizesGrid[t];
              ((0 <= p && p < a.size - 1) || (1 < c && c <= a.size) || (p <= 0 && c >= a.size)) &&
                (a.visibleSlides.push(o),
                a.visibleSlidesIndexes.push(t),
                r.eq(t).addClass(i.slideVisibleClass)),
                (o.progress = n ? -O : O),
                (o.originalProgress = n ? -d : d);
            }
            a.visibleSlides = O(a.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            a = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: r, isEnd: n } = t;
          var l = r,
            o = n;
          (n =
            0 == a
              ? ((i = 0), (r = !0))
              : ((i = (e - t.minTranslate()) / a), (r = i <= 0), 1 <= i)),
            Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !l && t.emit('reachBeginning toEdge'),
            n && !o && t.emit('reachEnd toEdge'),
            ((l && !r) || (o && !n)) && t.emit('fromEdge'),
            t.emit('progress', i);
        },
        updateSlidesClasses: function () {
          const { slides: e, params: t, $wrapperEl: s, activeIndex: a, realIndex: i } = this,
            r = this.virtual && t.virtual.enabled;
          let n,
            l =
              (e.removeClass(
                `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` +
                  t.slideDuplicatePrevClass,
              ),
              (n = r
                ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${a}"]`)
                : e.eq(a)).addClass(t.slideActiveClass),
              t.loop &&
                (n.hasClass(t.slideDuplicateClass)
                  ? s.children(
                      `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${i}"]`,
                    )
                  : s.children(
                      `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${i}"]`,
                    )
                ).addClass(t.slideDuplicateActiveClass),
              n
                .nextAll('.' + t.slideClass)
                .eq(0)
                .addClass(t.slideNextClass)),
            o =
              (t.loop && 0 === l.length && (l = e.eq(0)).addClass(t.slideNextClass),
              n
                .prevAll('.' + t.slideClass)
                .eq(0)
                .addClass(t.slidePrevClass));
          t.loop && 0 === o.length && (o = e.eq(-1)).addClass(t.slidePrevClass),
            t.loop &&
              ((l.hasClass(t.slideDuplicateClass)
                ? s.children(
                    `.${t.slideClass}:not(.${
                      t.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr('data-swiper-slide-index')}"]`,
                  )
                : s.children(
                    `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr(
                      'data-swiper-slide-index',
                    )}"]`,
                  )
              ).addClass(t.slideDuplicateNextClass),
              (o.hasClass(t.slideDuplicateClass)
                ? s.children(
                    `.${t.slideClass}:not(.${
                      t.slideDuplicateClass
                    })[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`,
                  )
                : s.children(
                    `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr(
                      'data-swiper-slide-index',
                    )}"]`,
                  )
              ).addClass(t.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: a,
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: l,
              snapIndex: o,
            } = t;
          let d,
            p = e;
          if (void 0 === p) {
            for (let e = 0; e < a.length; e += 1)
              void 0 !== a[e + 1]
                ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
                  ? (p = e)
                  : s >= a[e] && s < a[e + 1] && (p = e + 1)
                : s >= a[e] && (p = e);
            r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }
          if (0 <= i.indexOf(s)) d = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, p);
            d = e + Math.floor((p - e) / r.slidesPerGroup);
          }
          d >= i.length && (d = i.length - 1),
            p === n
              ? d !== o && ((t.snapIndex = d), t.emit('snapIndexChange'))
              : ((e = parseInt(t.slides.eq(p).attr('data-swiper-slide-index') || p, 10)),
                Object.assign(t, { snapIndex: d, realIndex: e, previousIndex: n, activeIndex: p }),
                t.emit('activeIndexChange'),
                t.emit('snapIndexChange'),
                l !== e && t.emit('realIndexChange'),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange'));
        },
        updateClickedSlide: function (e) {
          var t = this,
            s = t.params,
            a = O(e).closest('.' + s.slideClass)[0];
          let i,
            r = !1;
          if (a)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === a) {
                (r = !0), (i = e);
                break;
              }
          if (!a || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = a),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(O(a).attr('data-swiper-slide-index'), 10))
              : (t.clickedIndex = i),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          var { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
          if (t.virtualTranslate) return s ? -a : a;
          if (t.cssMode) return a;
          let r = I(i[0], e);
          return (r = s ? -r : r) || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s;
          let o = 0,
            d = 0;
          s.isHorizontal() ? (o = a ? -e : e) : (d = e),
            i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            i.cssMode
              ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -o : -d)
              : i.virtualTranslate || r.transform(`translate3d(${o}px, ${d}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? o : d);
          var p = s.maxTranslate() - s.minTranslate();
          (0 == p ? 0 : (e - s.minTranslate()) / p) !== l && s.updateProgress(e),
            s.emit('setTranslate', s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, a, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
          const r = this,
            { params: n, wrapperEl: l } = r;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o = r.minTranslate(),
            d = r.maxTranslate(),
            o = a && o < e ? o : a && e < d ? d : e;
          if ((r.updateProgress(o), n.cssMode)) {
            const e = r.isHorizontal();
            if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -o;
            else {
              if (!r.support.smoothScroll)
                return w({ swiper: r, targetPosition: -o, side: e ? 'left' : 'top' }), !0;
              l.scrollTo({ [e ? 'left' : 'top']: -o, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                s && (r.emit('beforeTransitionStart', t, i), r.emit('transitionEnd')))
              : (r.setTransition(t),
                r.setTranslate(o),
                s && (r.emit('beforeTransitionStart', t, i), r.emit('transitionStart')),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          r.onTranslateToWrapperTransitionEnd,
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          r.onTranslateToWrapperTransitionEnd,
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit('transitionEnd'));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    'transitionend',
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  r.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    r.onTranslateToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e), this.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var s = this['params'];
          s.cssMode ||
            (s.autoHeight && this.updateAutoHeight(),
            o({ swiper: this, runCallbacks: e, direction: t, step: 'Start' }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var s = this['params'];
          (this.animating = !1),
            s.cssMode ||
              (this.setTransition(0),
              o({ swiper: this, runCallbacks: e, direction: t, step: 'End' }));
        },
      },
      slide: {
        slideTo: function (e, t, s, a, i) {
          if (
            (void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            'number' != typeof (e = void 0 === e ? 0 : e) && 'string' != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`,
            );
          if ('string' == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`,
              );
            e = t;
          }
          const r = this;
          let n = e;
          n < 0 && (n = 0);
          const {
            params: l,
            snapGrid: o,
            slidesGrid: d,
            previousIndex: p,
            activeIndex: c,
            rtlTranslate: u,
            wrapperEl: h,
            enabled: m,
          } = r;
          if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i)) return !1;
          e = Math.min(r.params.slidesPerGroupSkip, n);
          let f = e + Math.floor((n - e) / r.params.slidesPerGroup);
          f >= o.length && (f = o.length - 1),
            (c || l.initialSlide || 0) === (p || 0) && s && r.emit('beforeSlideChangeStart');
          var v = -o[f];
          if ((r.updateProgress(v), l.normalizeSlideIndex))
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * d[e]),
                a = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= s && t < a - (a - s) / 2
                  ? (n = e)
                  : t >= s && t < a && (n = e + 1)
                : t >= s && (n = e);
            }
          if (r.initialized && n !== c) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== n)
              return !1;
          }
          let g;
          if (
            ((g = n > c ? 'next' : n < c ? 'prev' : 'reset'),
            (u && -v === r.translate) || (!u && v === r.translate))
          )
            return (
              r.updateActiveIndex(n),
              l.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              'slide' !== l.effect && r.setTranslate(v),
              'reset' != g && (r.transitionStart(s, g), r.transitionEnd(s, g)),
              !1
            );
          if (l.cssMode) {
            const e = r.isHorizontal(),
              s = u ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
                (h[e ? 'scrollLeft' : 'scrollTop'] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ''), (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return w({ swiper: r, targetPosition: s, side: e ? 'left' : 'top' }), !0;
              h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit('beforeTransitionStart', t, a),
            r.transitionStart(s, g),
            0 === t
              ? r.transitionEnd(s, g)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        r.onSlideToWrapperTransitionEnd,
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        r.onSlideToWrapperTransitionEnd,
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(s, g));
                  }),
                r.$wrapperEl[0].addEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  r.onSlideToWrapperTransitionEnd,
                )),
            !0
          );
        },
        slideToLoop: function (e, t, s, a) {
          void 0 === t && (t = this.params.speed), void 0 === s && (s = !0);
          let i = (e = void 0 === e ? 0 : e);
          return this.params.loop && (i += this.loopedSlides), this.slideTo(i, t, s, a);
        },
        slideNext: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var a = this,
            { animating: i, enabled: r, params: n } = a;
          if (!r) return a;
          let l = n.slidesPerGroup;
          'auto' === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            (l = Math.max(a.slidesPerViewDynamic('current', !0), 1));
          r = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
          if (n.loop) {
            if (i && n.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return n.rewind && a.isEnd
            ? a.slideTo(0, e, t, s)
            : a.slideTo(a.activeIndex + r, e, t, s);
        },
        slidePrev: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const a = this,
            {
              params: i,
              animating: r,
              snapGrid: n,
              slidesGrid: l,
              rtlTranslate: o,
              enabled: d,
            } = a;
          if (!d) return a;
          if (i.loop) {
            if (r && i.loopPreventsSlide) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const c = p(o ? a.translate : -a.translate),
            u = n.map((e) => p(e));
          let h = n[u.indexOf(c) - 1];
          if (void 0 === h && i.cssMode) {
            let s;
            n.forEach((e, t) => {
              c >= e && (s = t);
            }),
              void 0 !== s && (h = n[0 < s ? s - 1 : s]);
          }
          let m = 0;
          if (
            (void 0 !== h &&
              ((m = l.indexOf(h)) < 0 && (m = a.activeIndex - 1),
              'auto' === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - a.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
            i.rewind && a.isBeginning)
          ) {
            const i =
              a.params.virtual && a.params.virtual.enabled && a.virtual
                ? a.virtual.slides.length - 1
                : a.slides.length - 1;
            return a.slideTo(i, e, t, s);
          }
          return a.slideTo(m, e, t, s);
        },
        slideReset: function (e, t, s) {
          return (
            void 0 === e && (e = this.params.speed),
            this.slideTo(this.activeIndex, e, (t = void 0 === t ? !0 : t), s)
          );
        },
        slideToClosest: function (e, t, s, a) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === a && (a = 0.5);
          var i = this;
          let r = i.activeIndex;
          var n = Math.min(i.params.slidesPerGroupSkip, r),
            n = n + Math.floor((r - n) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[n]) {
            const e = i.snapGrid[n];
            l - e > (i.snapGrid[n + 1] - e) * a && (r += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[n - 1];
            l - e <= (i.snapGrid[n] - e) * a && (r -= i.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)), (r = Math.min(r, i.slidesGrid.length - 1)), i.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            a = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
          let i,
            r = e.clickedIndex;
          t.loop
            ? e.animating ||
              ((i = parseInt(O(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
              t.centeredSlides
                ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`,
                      )
                      .eq(0)
                      .index()),
                    S(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - a
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`,
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r))
            : e.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          const a = this,
            t = T(),
            { params: s, $wrapperEl: e } = a,
            i = 0 < e.children().length ? O(e.children()[0].parentNode) : e;
          i.children(`.${s.slideClass}.` + s.slideDuplicateClass).remove();
          let r = i.children('.' + s.slideClass);
          if (s.loopFillGroupWithBlank) {
            const a = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (a !== s.slidesPerGroup) {
              for (let e = 0; e < a; e += 1) {
                const a = O(t.createElement('div')).addClass(
                  s.slideClass + ' ' + s.slideBlankClass,
                );
                i.append(a);
              }
              r = i.children('.' + s.slideClass);
            }
          }
          'auto' !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length),
            (a.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10))),
            (a.loopedSlides += s.loopAdditionalSlides),
            a.loopedSlides > r.length && (a.loopedSlides = r.length);
          const n = [],
            l = [];
          r.each((e, t) => {
            const s = O(e);
            t < a.loopedSlides && l.push(e),
              t < r.length && t >= r.length - a.loopedSlides && n.push(e),
              s.attr('data-swiper-slide-index', t);
          });
          for (let e = 0; e < l.length; e += 1)
            i.append(O(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = n.length - 1; 0 <= e; --e)
            i.prepend(O(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this,
            {
              activeIndex: t,
              slides: s,
              loopedSlides: a,
              allowSlidePrev: i,
              allowSlideNext: r,
              snapGrid: n,
              rtlTranslate: l,
            } = (e.emit('beforeLoopFix'), e);
          let o;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          n = -n[t] - e.getTranslate();
          t < a
            ? ((o = s.length - 3 * a + t),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 != n &&
                e.setTranslate((l ? -e.translate : e.translate) - n))
            : t >= s.length - a &&
              ((o = -s.length + t + a),
              (o += a),
              e.slideTo(o, 0, !1, !0) &&
                0 != n &&
                e.setTranslate((l ? -e.translate : e.translate) - n)),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.emit('loopFix');
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` + t.slideBlankClass,
            )
            .remove(),
            s.removeAttr('data-swiper-slide-index');
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          var t = this;
          if (
            !(
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
          ) {
            const s = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = 'move'), (s.style.cursor = e ? 'grabbing' : 'grab');
          }
        },
        unsetGrabCursor: function () {
          var e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = '');
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = T(),
            { params: s, support: a } = e;
          (e.onTouchStart = function (e) {
            const a = this,
              i = T(),
              r = L(),
              n = a.touchEventsData,
              { params: l, touches: o, enabled: t } = a;
            if (t && (!a.animating || !l.preventInteractionOnTransition)) {
              !a.animating && l.cssMode && l.loop && a.loopFix();
              let t = e,
                s = O((t = t.originalEvent ? t.originalEvent : t).target);
              if (
                ('wrapper' !== l.touchEventsTarget || s.closest(a.wrapperEl).length) &&
                ((n.isTouchEvent = 'touchstart' === t.type),
                (n.isTouchEvent || !('which' in t) || 3 !== t.which) &&
                  !(
                    (!n.isTouchEvent && 'button' in t && 0 < t.button) ||
                    (n.isTouched && n.isMoved)
                  ))
              ) {
                l.noSwipingClass &&
                  '' !== l.noSwipingClass &&
                  t.target &&
                  t.target.shadowRoot &&
                  e.path &&
                  e.path[0] &&
                  (s = O(e.path[0]));
                var d = l.noSwipingSelector || '.' + l.noSwipingClass,
                  p = !(!t.target || !t.target.shadowRoot);
                if (
                  l.noSwiping &&
                  (p
                    ? (function (s, e) {
                        return (function e(t) {
                          return t && t !== T() && t !== L()
                            ? (t = t.assignedSlot ? t.assignedSlot : t).closest(s) ||
                                e(t.getRootNode().host)
                            : null;
                        })((e = void 0 === e ? this : e));
                      })(d, t.target)
                    : s.closest(d)[0])
                )
                  a.allowClick = !0;
                else if (!l.swipeHandler || s.closest(l.swipeHandler)[0]) {
                  (o.currentX = ('touchstart' === t.type ? t.targetTouches[0] : t).pageX),
                    (o.currentY = ('touchstart' === t.type ? t.targetTouches[0] : t).pageY);
                  var p = o.currentX,
                    d = o.currentY,
                    c = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                    u = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                  if (c && (p <= u || p >= r.innerWidth - u)) {
                    if ('prevent' !== c) return;
                    e.preventDefault();
                  }
                  if (
                    (Object.assign(n, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0,
                    }),
                    (o.startX = p),
                    (o.startY = d),
                    (n.touchStartTime = g()),
                    (a.allowClick = !0),
                    a.updateSize(),
                    (a.swipeDirection = void 0),
                    0 < l.threshold && (n.allowThresholdMove = !1),
                    'touchstart' !== t.type)
                  ) {
                    let e = !0;
                    s.is(n.focusableElements) &&
                      ((e = !1), 'SELECT' === s[0].nodeName && (n.isTouched = !1)),
                      i.activeElement &&
                        O(i.activeElement).is(n.focusableElements) &&
                        i.activeElement !== s[0] &&
                        i.activeElement.blur();
                    const T = e && a.allowTouchMove && l.touchStartPreventDefault;
                    (!l.touchStartForcePreventDefault && !T) ||
                      s[0].isContentEditable ||
                      t.preventDefault();
                  }
                  a.params.freeMode &&
                    a.params.freeMode.enabled &&
                    a.freeMode &&
                    a.animating &&
                    !l.cssMode &&
                    a.freeMode.onTouchStart(),
                    a.emit('touchStart', t);
                }
              }
            }
          }.bind(e)),
            (e.onTouchMove = function (i) {
              const e = T(),
                r = this,
                n = r.touchEventsData,
                { params: l, touches: o, rtlTranslate: d, enabled: t } = r;
              if (t) {
                let a = i;
                if ((a.originalEvent && (a = a.originalEvent), n.isTouched)) {
                  if (!n.isTouchEvent || 'touchmove' === a.type) {
                    var i =
                        'touchmove' === a.type &&
                        a.targetTouches &&
                        (a.targetTouches[0] || a.changedTouches[0]),
                      p = ('touchmove' === a.type ? i : a).pageX,
                      i = ('touchmove' === a.type ? i : a).pageY;
                    if (a.preventedByNestedSwiper) return (o.startX = p), void (o.startY = i);
                    if (!r.allowTouchMove)
                      return (
                        O(a.target).is(n.focusableElements) || (r.allowClick = !1),
                        void (
                          n.isTouched &&
                          (Object.assign(o, { startX: p, startY: i, currentX: p, currentY: i }),
                          (n.touchStartTime = g()))
                        )
                      );
                    if (n.isTouchEvent && l.touchReleaseOnEdges && !l.loop)
                      if (r.isVertical()) {
                        if (
                          (i < o.startY && r.translate <= r.maxTranslate()) ||
                          (i > o.startY && r.translate >= r.minTranslate())
                        )
                          return (n.isTouched = !1), void (n.isMoved = !1);
                      } else if (
                        (p < o.startX && r.translate <= r.maxTranslate()) ||
                        (p > o.startX && r.translate >= r.minTranslate())
                      )
                        return;
                    if (
                      n.isTouchEvent &&
                      e.activeElement &&
                      a.target === e.activeElement &&
                      O(a.target).is(n.focusableElements)
                    )
                      return (n.isMoved = !0), void (r.allowClick = !1);
                    if (
                      (n.allowTouchCallbacks && r.emit('touchMove', a),
                      !(a.targetTouches && 1 < a.targetTouches.length))
                    ) {
                      (o.currentX = p), (o.currentY = i);
                      var s,
                        p = o.currentX - o.startX,
                        i = o.currentY - o.startY;
                      if (!(r.params.threshold && Math.sqrt(p ** 2 + i ** 2) < r.params.threshold))
                        if (
                          (void 0 === n.isScrolling &&
                            ((r.isHorizontal() && o.currentY === o.startY) ||
                            (r.isVertical() && o.currentX === o.startX)
                              ? (n.isScrolling = !1)
                              : 25 <= p * p + i * i &&
                                ((s = (180 * Math.atan2(Math.abs(i), Math.abs(p))) / Math.PI),
                                (n.isScrolling = r.isHorizontal()
                                  ? s > l.touchAngle
                                  : 90 - s > l.touchAngle))),
                          n.isScrolling && r.emit('touchMoveOpposite', a),
                          void 0 !== n.startMoving ||
                            (o.currentX === o.startX && o.currentY === o.startY) ||
                            (n.startMoving = !0),
                          n.isScrolling)
                        )
                          n.isTouched = !1;
                        else if (n.startMoving) {
                          (r.allowClick = !1),
                            !l.cssMode && a.cancelable && a.preventDefault(),
                            l.touchMoveStopPropagation && !l.nested && a.stopPropagation(),
                            n.isMoved ||
                              (l.loop && !l.cssMode && r.loopFix(),
                              (n.startTranslate = r.getTranslate()),
                              r.setTransition(0),
                              r.animating &&
                                r.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                              (n.allowMomentumBounce = !1),
                              !l.grabCursor ||
                                (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
                                r.setGrabCursor(!0),
                              r.emit('sliderFirstMove', a)),
                            r.emit('sliderMove', a),
                            (n.isMoved = !0);
                          let e = r.isHorizontal() ? p : i,
                            t =
                              ((o.diff = e),
                              (e *= l.touchRatio),
                              d && (e = -e),
                              (r.swipeDirection = 0 < e ? 'prev' : 'next'),
                              (n.currentTranslate = e + n.startTranslate),
                              !0),
                            s = l.resistanceRatio;
                          if (
                            (l.touchReleaseOnEdges && (s = 0),
                            0 < e && n.currentTranslate > r.minTranslate()
                              ? ((t = !1),
                                l.resistance &&
                                  (n.currentTranslate =
                                    r.minTranslate() -
                                    1 +
                                    (-r.minTranslate() + n.startTranslate + e) ** s))
                              : e < 0 &&
                                n.currentTranslate < r.maxTranslate() &&
                                ((t = !1),
                                l.resistance &&
                                  (n.currentTranslate =
                                    r.maxTranslate() +
                                    1 -
                                    (r.maxTranslate() - n.startTranslate - e) ** s)),
                            t && (a.preventedByNestedSwiper = !0),
                            !r.allowSlideNext &&
                              'next' === r.swipeDirection &&
                              n.currentTranslate < n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            !r.allowSlidePrev &&
                              'prev' === r.swipeDirection &&
                              n.currentTranslate > n.startTranslate &&
                              (n.currentTranslate = n.startTranslate),
                            r.allowSlidePrev ||
                              r.allowSlideNext ||
                              (n.currentTranslate = n.startTranslate),
                            0 < l.threshold)
                          ) {
                            if (!(Math.abs(e) > l.threshold || n.allowThresholdMove))
                              return void (n.currentTranslate = n.startTranslate);
                            if (!n.allowThresholdMove)
                              return (
                                (n.allowThresholdMove = !0),
                                (o.startX = o.currentX),
                                (o.startY = o.currentY),
                                (n.currentTranslate = n.startTranslate),
                                void (o.diff = r.isHorizontal()
                                  ? o.currentX - o.startX
                                  : o.currentY - o.startY)
                              );
                          }
                          l.followFinger &&
                            !l.cssMode &&
                            (((l.freeMode && l.freeMode.enabled && r.freeMode) ||
                              l.watchSlidesProgress) &&
                              (r.updateActiveIndex(), r.updateSlidesClasses()),
                            r.params.freeMode &&
                              l.freeMode.enabled &&
                              r.freeMode &&
                              r.freeMode.onTouchMove(),
                            r.updateProgress(n.currentTranslate),
                            r.setTranslate(n.currentTranslate));
                        }
                    }
                  }
                } else n.startMoving && n.isScrolling && r.emit('touchMoveOpposite', a);
              }
            }.bind(e)),
            (e.onTouchEnd = function (r) {
              const n = this,
                e = n.touchEventsData,
                { params: l, touches: t, rtlTranslate: s, slidesGrid: o, enabled: a } = n;
              if (a) {
                let i = r;
                if (
                  (i.originalEvent && (i = i.originalEvent),
                  e.allowTouchCallbacks && n.emit('touchEnd', i),
                  (e.allowTouchCallbacks = !1),
                  !e.isTouched)
                )
                  return (
                    e.isMoved && l.grabCursor && n.setGrabCursor(!1),
                    (e.isMoved = !1),
                    void (e.startMoving = !1)
                  );
                l.grabCursor &&
                  e.isMoved &&
                  e.isTouched &&
                  (!0 === n.allowSlideNext || !0 === n.allowSlidePrev) &&
                  n.setGrabCursor(!1);
                var d,
                  p = g(),
                  c = p - e.touchStartTime;
                if (n.allowClick) {
                  const r = i.path || (i.composedPath && i.composedPath());
                  n.updateClickedSlide((r && r[0]) || i.target),
                    n.emit('tap click', i),
                    c < 300 && p - e.lastClickTime < 300 && n.emit('doubleTap doubleClick', i);
                }
                if (
                  ((e.lastClickTime = g()),
                  S(() => {
                    n.destroyed || (n.allowClick = !0);
                  }),
                  !e.isTouched ||
                    !e.isMoved ||
                    !n.swipeDirection ||
                    0 === t.diff ||
                    e.currentTranslate === e.startTranslate)
                )
                  return (e.isTouched = !1), (e.isMoved = !1), void (e.startMoving = !1);
                if (
                  ((e.isTouched = !1),
                  (e.isMoved = !1),
                  (e.startMoving = !1),
                  (d = l.followFinger ? (s ? n.translate : -n.translate) : -e.currentTranslate),
                  !l.cssMode)
                )
                  if (n.params.freeMode && l.freeMode.enabled)
                    n.freeMode.onTouchEnd({ currentPos: d });
                  else {
                    let t = 0,
                      s = n.slidesSizesGrid[0];
                    for (
                      let e = 0;
                      e < o.length;
                      e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
                    ) {
                      const n = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                      void 0 !== o[e + n]
                        ? d >= o[e] && d < o[e + n] && ((t = e), (s = o[e + n] - o[e]))
                        : d >= o[e] && ((t = e), (s = o[o.length - 1] - o[o.length - 2]));
                    }
                    let e = null,
                      a = null;
                    l.rewind &&
                      (n.isBeginning
                        ? (a =
                            n.params.virtual && n.params.virtual.enabled && n.virtual
                              ? n.virtual.slides.length - 1
                              : n.slides.length - 1)
                        : n.isEnd && (e = 0));
                    (r = (d - o[t]) / s), (p = t < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup);
                    c > l.longSwipesMs
                      ? l.longSwipes
                        ? ('next' === n.swipeDirection &&
                            (r >= l.longSwipesRatio
                              ? n.slideTo(l.rewind && n.isEnd ? e : t + p)
                              : n.slideTo(t)),
                          'prev' === n.swipeDirection &&
                            (r > 1 - l.longSwipesRatio
                              ? n.slideTo(t + p)
                              : null !== a && r < 0 && Math.abs(r) > l.longSwipesRatio
                              ? n.slideTo(a)
                              : n.slideTo(t)))
                        : n.slideTo(n.activeIndex)
                      : l.shortSwipes
                      ? !n.navigation ||
                        (i.target !== n.navigation.nextEl && i.target !== n.navigation.prevEl)
                        ? ('next' === n.swipeDirection && n.slideTo(null !== e ? e : t + p),
                          'prev' === n.swipeDirection && n.slideTo(null !== a ? a : t))
                        : i.target === n.navigation.nextEl
                        ? n.slideTo(t + p)
                        : n.slideTo(t)
                      : n.slideTo(n.activeIndex);
                  }
              }
            }.bind(e)),
            s.cssMode &&
              (e.onScroll = function () {
                var e = this,
                  { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
                a &&
                  ((e.previousTranslate = e.translate),
                  e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
                  0 === e.translate && (e.translate = 0),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses(),
                  (0 == (a = e.maxTranslate() - e.minTranslate())
                    ? 0
                    : (e.translate - e.minTranslate()) / a) !== e.progress &&
                    e.updateProgress(s ? -e.translate : e.translate),
                  e.emit('setTranslate', e.translate, !1));
              }.bind(e)),
            (e.onClick = function (e) {
              var t = this;
              t.enabled &&
                !t.allowClick &&
                (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation &&
                  t.animating &&
                  (e.stopPropagation(), e.stopImmediatePropagation()));
            }.bind(e)),
            a.touch && !f && (t.addEventListener('touchstart', G), (f = !0)),
            v(e, 'on');
        },
        detachEvents: function () {
          v(this, 'off');
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e,
            n = i.breakpoints;
          var l, o, d, p, c;
          !n ||
            0 === Object.keys(n).length ||
            ((l = e.getBreakpoint(n, e.params.breakpointsBase, e.el)) &&
              e.currentBreakpoint !== l &&
              ((o = (l in n ? n[l] : void 0) || e.originalParams),
              (c = b(e, i)),
              (p = b(e, o)),
              (d = i.enabled),
              c && !p
                ? (r.removeClass(
                    `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`,
                  ),
                  e.emitContainerClasses())
                : !c &&
                  p &&
                  (r.addClass(i.containerModifierClass + 'grid'),
                  ((o.grid.fill && 'column' === o.grid.fill) ||
                    (!o.grid.fill && 'column' === i.grid.fill)) &&
                    r.addClass(i.containerModifierClass + 'grid-column'),
                  e.emitContainerClasses()),
              (c = o.direction && o.direction !== i.direction),
              (p = i.loop && (o.slidesPerView !== i.slidesPerView || c)),
              c && s && e.changeDirection(),
              u(e.params, o),
              (c = e.params.enabled),
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              d && !c ? e.disable() : !d && c && e.enable(),
              (e.currentBreakpoint = l),
              e.emit('_beforeBreakpoint', o),
              p &&
                s &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
              e.emit('breakpoint', o)));
        },
        getBreakpoint: function (e, s, a) {
          if ((void 0 === s && (s = 'window'), e && ('container' !== s || a))) {
            let t = !1;
            const i = L(),
              r = 'window' === s ? i.innerHeight : a.clientHeight,
              n = Object.keys(e).map((e) => {
                var t;
                return 'string' == typeof e && 0 === e.indexOf('@')
                  ? ((t = parseFloat(e.substr(1))), { value: r * t, point: e })
                  : { value: e, point: e };
              });
            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < n.length; e += 1) {
              const { point: L, value: r } = n[e];
              'window' === s
                ? i.matchMedia(`(min-width: ${r}px)`).matches && (t = L)
                : r <= a.clientWidth && (t = L);
            }
            return t || 'max';
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            a = s['slidesOffsetBefore'];
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
        },
      },
      classes: {
        addClasses: function () {
          const { classNames: e, params: t, rtl: s, $el: a, device: i, support: r } = this,
            n = (function (e, s) {
              const a = [];
              return (
                e.forEach((t) => {
                  'object' == typeof t
                    ? Object.keys(t).forEach((e) => {
                        t[e] && a.push(s + e);
                      })
                    : 'string' == typeof t && a.push(s + t);
                }),
                a
              );
            })(
              [
                'initialized',
                t.direction,
                { 'pointer-events': !r.touch },
                { 'free-mode': this.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: s },
                { grid: t.grid && 1 < t.grid.rows },
                { 'grid-column': t.grid && 1 < t.grid.rows && 'column' === t.grid.fill },
                { android: i.android },
                { ios: i.ios },
                { 'css-mode': t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
                { 'watch-progress': t.watchSlidesProgress },
              ],
              t.containerModifierClass,
            );
          e.push(...n), a.addClass([...e].join(' ')), this.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(' ')), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, s, a, i, r) {
          const n = L();
          let l;
          function o() {
            r && r();
          }
          !(O(e).parent('picture')[0] || (e.complete && i)) && t
            ? (((l = new n.Image()).onload = o),
              (l.onerror = o),
              a && (l.sizes = a),
              s && (l.srcset = s),
              t && (l.src = t))
            : o();
        },
        preloadImages: function () {
          const t = this;
          function s() {
            null != t &&
              t &&
              !t.destroyed &&
              (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(), t.emit('imagesReady')));
          }
          t.imagesToLoad = t.$el.find('img');
          for (let e = 0; e < t.imagesToLoad.length; e += 1) {
            const a = t.imagesToLoad[e];
            t.loadImage(
              a,
              a.currentSrc || a.getAttribute('src'),
              a.srcset || a.getAttribute('srcset'),
              a.sizes || a.getAttribute('sizes'),
              !0,
              s,
            );
          }
        },
      },
    },
    E = {};
  class C {
    constructor() {
      let t, s;
      for (var h, e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
      if (
        (1 === a.length &&
        a[0].constructor &&
        'Object' === Object.prototype.toString.call(a[0]).slice(8, -1)
          ? (s = a[0])
          : ([t, s] = a),
        (s = u({}, (s = s || {}))),
        t && !s.el && (s.el = t),
        s.el && 1 < O(s.el).length)
      ) {
        const t = [];
        return (
          O(s.el).each((e) => {
            e = u({}, s, { el: e });
            t.push(new C(e));
          }),
          t
        );
      }
      const r = this,
        n =
          ((r.__swiper__ = !0),
          (r.support = m()),
          (r.device =
            (void 0 === (h = { userAgent: s.userAgent }) && (h = {}),
            (p =
              p ||
              (function () {
                var e = (void 0 === h ? {} : h)['userAgent'];
                const t = m(),
                  s = L(),
                  a = s.navigator.platform,
                  i = e || s.navigator.userAgent,
                  r = { ios: !1, android: !1 },
                  n = s.screen.width,
                  l = s.screen.height,
                  o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                let d = i.match(/(iPad).*OS\s([\d_]+)/);
                var e = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                  p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                  c = 'Win32' === a;
                let u = 'MacIntel' === a;
                return (
                  !d &&
                    u &&
                    t.touch &&
                    0 <=
                      [
                        '1024x1366',
                        '1366x1024',
                        '834x1194',
                        '1194x834',
                        '834x1112',
                        '1112x834',
                        '768x1024',
                        '1024x768',
                        '820x1180',
                        '1180x820',
                        '810x1080',
                        '1080x810',
                      ].indexOf(n + 'x' + l) &&
                    ((d = (d = i.match(/(Version)\/([\d.]+)/)) || [0, 1, '13_0_0']), (u = !1)),
                  o && !c && ((r.os = 'android'), (r.android = !0)),
                  (d || p || e) && ((r.os = 'ios'), (r.ios = !0)),
                  r
                );
              })()))),
          (r.browser = c =
            c ||
            (function () {
              const t = L();
              return {
                isSafari: (function () {
                  const e = t.navigator.userAgent.toLowerCase();
                  return (
                    0 <= e.indexOf('safari') && e.indexOf('chrome') < 0 && e.indexOf('android') < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  t.navigator.userAgent,
                ),
              };
            })()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules),
          {});
      r.modules.forEach((e) => {
        var a, i;
        e({
          swiper: r,
          extendParams:
            ((a = s),
            (i = n),
            function (e) {
              void 0 === e && (e = {});
              var t = Object.keys(e)[0],
                s = e[t];
              'object' == typeof s &&
                null !== s &&
                (0 <= ['navigation', 'pagination', 'scrollbar'].indexOf(t) &&
                  !0 === a[t] &&
                  (a[t] = { auto: !0 }),
                t in a &&
                  'enabled' in s &&
                  (!0 === a[t] && (a[t] = { enabled: !0 }),
                  'object' != typeof a[t] || 'enabled' in a[t] || (a[t].enabled = !0),
                  a[t] || (a[t] = { enabled: !1 }))),
                u(i, e);
            }),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      var l,
        o = u({}, x, n);
      return (
        (r.params = u({}, o, E, s)),
        (r.originalParams = u({}, r.params)),
        (r.passedParams = u({}, s)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = O),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: t,
          classNames: [],
          slides: O(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === r.params.direction,
          isVertical: () => 'vertical' === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents:
            ((o = ['touchstart', 'touchmove', 'touchend', 'touchcancel']),
            (l = ['pointerdown', 'pointermove', 'pointerup']),
            (r.touchEventsTouch = { start: o[0], move: o[1], end: o[2], cancel: o[3] }),
            (r.touchEventsDesktop = { start: l[0], move: l[1], end: l[2] }),
            r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: g(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit('_swiper'),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      var e = this;
      e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
    }
    disable() {
      var e = this;
      e.enabled &&
        ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
    }
    setProgress(e, t) {
      var s = this,
        a = ((e = Math.min(Math.max(e, 0), 1)), s.minTranslate()),
        e = (s.maxTranslate() - a) * e + a;
      s.translateTo(e, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (t.params._emitClasses && t.el) {
        const e = t.el.className
          .split(' ')
          .filter(
            (e) => 0 === e.indexOf('swiper') || 0 === e.indexOf(t.params.containerModifierClass),
          );
        t.emit('_containerClasses', e.join(' '));
      }
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
            .join(' ');
    }
    emitSlidesClasses() {
      const s = this;
      if (s.params._emitClasses && s.el) {
        const a = [];
        s.slides.each((e) => {
          var t = s.getSlideClasses(e);
          a.push({ slideEl: e, classNames: t }), s.emit('_slideClass', e, t);
        }),
          s.emit('_slideClasses', a);
      }
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = 'current'), void 0 === t && (t = !1);
      var {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let t,
          s = a[l].swiperSlideSize;
        for (let e = l + 1; e < a.length; e += 1)
          a[e] && !t && ((s += a[e].swiperSlideSize), (o += 1), s > n && (t = !0));
        for (let e = l - 1; 0 <= e; --e)
          a[e] && !t && ((s += a[e].swiperSlideSize), (o += 1), s > n && (t = !0));
      } else if ('current' === e)
        for (let e = l + 1; e < a.length; e += 1)
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
      else for (let e = l - 1; 0 <= e; --e) i[l] - i[e] < n && (o += 1);
      return o;
    }
    update() {
      const t = this;
      var e, s;
      function a() {
        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
          e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      t &&
        !t.destroyed &&
        (({ snapGrid: e, params: s } = t),
        s.breakpoints && t.setBreakpoint(),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses(),
        t.params.freeMode && t.params.freeMode.enabled
          ? (a(), t.params.autoHeight && t.updateAutoHeight())
          : (('auto' === t.params.slidesPerView || 1 < t.params.slidesPerView) &&
            t.isEnd &&
            !t.params.centeredSlides
              ? t.slideTo(t.slides.length - 1, 0, !1, !0)
              : t.slideTo(t.activeIndex, 0, !1, !0)) || a(),
        s.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
        t.emit('update'));
    }
    changeDirection(t, e) {
      void 0 === e && (e = !0);
      var s = this,
        a = s.params.direction;
      return (
        (t = t || ('horizontal' === a ? 'vertical' : 'horizontal')) === a ||
          ('horizontal' !== t && 'vertical' !== t) ||
          (s.$el
            .removeClass('' + s.params.containerModifierClass + a)
            .addClass('' + s.params.containerModifierClass + t),
          s.emitContainerClasses(),
          (s.params.direction = t),
          s.slides.each((e) => {
            'vertical' === t ? (e.style.width = '') : (e.style.height = '');
          }),
          s.emit('changeDirection'),
          e && s.update()),
        s
      );
    }
    mount(t) {
      const e = this;
      if (e.mounted) return !0;
      const s = O(t || e.params.el);
      if (!(t = s[0])) return !1;
      t.swiper = e;
      const a = () => '.' + (e.params.wrapperClass || '').trim().split(' ').join('.');
      let i = (() => {
        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
          const e = O(t.shadowRoot.querySelector(a()));
          return (e.children = (e) => s.children(e)), e;
        }
        return s.children(a());
      })();
      if (0 === i.length && e.params.createElements) {
        const t = T().createElement('div');
        (i = O(t)),
          (t.className = e.params.wrapperClass),
          s.append(t),
          s.children('.' + e.params.slideClass).each((e) => {
            i.append(e);
          });
      }
      return (
        Object.assign(e, {
          $el: s,
          el: t,
          $wrapperEl: i,
          wrapperEl: i[0],
          mounted: !0,
          rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === s.css('direction'),
          rtlTranslate:
            'horizontal' === e.params.direction &&
            ('rtl' === t.dir.toLowerCase() || 'rtl' === s.css('direction')),
          wrongRTL: '-webkit-box' === i.css('display'),
        }),
        !0
      );
    }
    init(e) {
      var t = this;
      return (
        t.initialized ||
          (!1 !== t.mount(e) &&
            (t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
              : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit('init'),
            t.emit('afterInit'))),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      if (void 0 !== s.params && !s.destroyed) {
        if (
          (s.emit('beforeDestroy'),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr('style'),
            r.removeAttr('style'),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(' '),
                )
                .removeAttr('style')
                .removeAttr('data-swiper-slide-index')),
          s.emit('destroy'),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e)
        ) {
          s.$el[0].swiper = null;
          {
            const l = s;
            Object.keys(l).forEach((e) => {
              try {
                l[e] = null;
              } catch (e) {}
              try {
                delete l[e];
              } catch (e) {}
            });
          }
        }
        s.destroyed = !0;
      }
      return null;
    }
    static extendDefaults(e) {
      u(E, e);
    }
    static get extendedDefaults() {
      return E;
    }
    static get defaults() {
      return x;
    }
    static installModule(e) {
      C.prototype.__modules__ || (C.prototype.__modules__ = []);
      const t = C.prototype.__modules__;
      'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? e.forEach((e) => C.installModule(e)) : C.installModule(e), C;
    }
  }
  function $(s, a, i, r) {
    const n = T();
    return (
      s.params.createElements &&
        Object.keys(r).forEach((t) => {
          if (!i[t] && !0 === i.auto) {
            let e = s.$el.children('.' + r[t])[0];
            e || (((e = n.createElement('div')).className = r[t]), s.$el.append(e)),
              (i[t] = e),
              (a[t] = e);
          }
        }),
      i
    );
  }
  function P(e) {
    return (
      '.' +
      (e = void 0 === e ? '' : e)
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')
    );
  }
  function k(e) {
    const {
      effect: s,
      swiper: a,
      on: t,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let p;
    t('beforeInit', () => {
      var e;
      a.params.effect === s &&
        (a.classNames.push('' + a.params.containerModifierClass + s),
        l && l() && a.classNames.push(a.params.containerModifierClass + '3d'),
        (e = n ? n() : {}),
        Object.assign(a.params, e),
        Object.assign(a.originalParams, e));
    }),
      t('setTranslate', () => {
        a.params.effect === s && i();
      }),
      t('setTransition', (e, t) => {
        a.params.effect === s && r(t);
      }),
      t('transitionEnd', () => {
        a.params.effect === s &&
          o &&
          d &&
          d().slideShadows &&
          (a.slides.each((e) => {
            a.$(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .remove();
          }),
          o());
      }),
      t('virtualUpdate', () => {
        a.params.effect === s &&
          (a.slides.length || (p = !0),
          requestAnimationFrame(() => {
            p && a.slides && a.slides.length && (i(), (p = !1));
          }));
      });
  }
  function z(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({ 'backface-visibility': 'hidden', '-webkit-backface-visibility': 'hidden' })
      : t;
  }
  function A(e) {
    let { swiper: a, duration: t, transformEl: i, allSlides: r } = e;
    const { slides: n, activeIndex: l, $wrapperEl: o } = a;
    if (a.params.virtualTranslate && 0 !== t) {
      let e,
        s = !1;
      (e = r ? (i ? n.find(i) : n) : i ? n.eq(l).find(i) : n.eq(l)).transitionEnd(() => {
        if (!s && a && !a.destroyed) {
          (s = !0), (a.animating = !1);
          var t = ['webkitTransitionEnd', 'transitionend'];
          for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
        }
      });
    }
  }
  function D(e, t, s) {
    const a = 'swiper-slide-shadow' + (s ? '-' + s : ''),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children('.' + a);
    return (
      r.length ||
        ((r = O(`<div class="swiper-slide-shadow${s ? '-' + s : ''}"></div>`)), i.append(r)),
      r
    );
  }
  return (
    Object.keys(y).forEach((t) => {
      Object.keys(y[t]).forEach((e) => {
        C.prototype[e] = y[t][e];
      });
    }),
    C.use([
      function (e) {
        let { swiper: r, on: t, emit: s } = e;
        const a = L();
        let i = null,
          n = null;
        const l = () => {
            r && !r.destroyed && r.initialized && (s('beforeResize'), s('resize'));
          },
          o = () => {
            r && !r.destroyed && r.initialized && s('orientationchange');
          };
        t('init', () => {
          r.params.resizeObserver && void 0 !== a.ResizeObserver
            ? r &&
              !r.destroyed &&
              r.initialized &&
              (i = new ResizeObserver((s) => {
                n = a.requestAnimationFrame(() => {
                  var { width: e, height: t } = r;
                  let a = e,
                    i = t;
                  s.forEach((e) => {
                    var { contentBoxSize: e, contentRect: t, target: s } = e;
                    (s && s !== r.el) ||
                      ((a = t ? t.width : (e[0] || e).inlineSize),
                      (i = t ? t.height : (e[0] || e).blockSize));
                  }),
                    (a === e && i === t) || l();
                });
              })).observe(r.el)
            : (a.addEventListener('resize', l), a.addEventListener('orientationchange', o));
        }),
          t('destroy', () => {
            n && a.cancelAnimationFrame(n),
              i && i.unobserve && r.el && (i.unobserve(r.el), (i = null)),
              a.removeEventListener('resize', l),
              a.removeEventListener('orientationchange', o);
          });
      },
      function (e) {
        let { swiper: s, extendParams: t, on: a, emit: i } = e;
        function r(e, t) {
          void 0 === t && (t = {});
          const s = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
            var t;
            1 === e.length
              ? i('observerUpdate', e[0])
              : ((t = function () {
                  i('observerUpdate', e[0]);
                }),
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0));
          });
          s.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            n.push(s);
        }
        const n = [],
          l = L();
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a('init', () => {
            if (s.params.observer) {
              if (s.params.observeParents) {
                var t = s.$el.parents();
                for (let e = 0; e < t.length; e += 1) r(t[e]);
              }
              r(s.$el[0], { childList: s.params.observeSlideChildren }),
                r(s.$wrapperEl[0], { attributes: !1 });
            }
          }),
          a('destroy', () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]),
    C.use([
      function (e) {
        let t,
          { swiper: y, extendParams: s, on: a, emit: E } = e;
        function T(e, t) {
          const s = y.params.virtual;
          if (s.cache && y.virtual.cache[t]) return y.virtual.cache[t];
          const a = s.renderSlide
            ? O(s.renderSlide.call(y, e, t))
            : O(`<div class="${y.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
          return (
            a.attr('data-swiper-slide-index') || a.attr('data-swiper-slide-index', t),
            s.cache && (y.virtual.cache[t] = a),
            a
          );
        }
        function n(t) {
          const { slidesPerView: e, slidesPerGroup: s, centeredSlides: a } = y.params,
            { addSlidesBefore: i, addSlidesAfter: r } = y.params.virtual,
            { from: n, to: l, slides: o, slidesGrid: d, offset: p } = y.virtual;
          y.params.cssMode || y.updateActiveIndex();
          var c = y.activeIndex || 0;
          let u, h, m;
          (u = y.rtlTranslate ? 'right' : y.isHorizontal() ? 'left' : 'top'),
            (m = a
              ? ((h = Math.floor(e / 2) + s + r), Math.floor(e / 2) + s + i)
              : ((h = e + (s - 1) + r), s + i));
          const f = Math.max((c || 0) - m, 0),
            v = Math.min((c || 0) + h, o.length - 1),
            g = (y.slidesGrid[f] || 0) - (y.slidesGrid[0] || 0);
          function w() {
            y.updateSlides(),
              y.updateProgress(),
              y.updateSlidesClasses(),
              y.lazy && y.params.lazy.enabled && y.lazy.load(),
              E('virtualUpdate');
          }
          if (
            (Object.assign(y.virtual, { from: f, to: v, offset: g, slidesGrid: y.slidesGrid }),
            n === f && l === v && !t)
          )
            return (
              y.slidesGrid !== d && g !== p && y.slides.css(u, g + 'px'),
              y.updateProgress(),
              void E('virtualUpdate')
            );
          if (y.params.virtual.renderExternal)
            return (
              y.params.virtual.renderExternal.call(y, {
                offset: g,
                from: f,
                to: v,
                slides: (function () {
                  const t = [];
                  for (let e = f; e <= v; e += 1) t.push(o[e]);
                  return t;
                })(),
              }),
              void (y.params.virtual.renderExternalUpdate ? w() : E('virtualUpdate'))
            );
          const b = [],
            x = [];
          if (t) y.$wrapperEl.find('.' + y.params.slideClass).remove();
          else
            for (let e = n; e <= l; e += 1)
              (e < f || e > v) &&
                y.$wrapperEl
                  .find(`.${y.params.slideClass}[data-swiper-slide-index="${e}"]`)
                  .remove();
          for (let e = 0; e < o.length; e += 1)
            e >= f &&
              e <= v &&
              (void 0 === l || t ? x.push(e) : (e > l && x.push(e), e < n && b.push(e)));
          x.forEach((e) => {
            y.$wrapperEl.append(T(o[e], e));
          }),
            b
              .sort((e, t) => t - e)
              .forEach((e) => {
                y.$wrapperEl.prepend(T(o[e], e));
              }),
            y.$wrapperEl.children('.swiper-slide').css(u, g + 'px'),
            w();
        }
        s({
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        }),
          (y.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }),
          a('beforeInit', () => {
            y.params.virtual.enabled &&
              ((y.virtual.slides = y.params.virtual.slides),
              y.classNames.push(y.params.containerModifierClass + 'virtual'),
              (y.params.watchSlidesProgress = !0),
              (y.originalParams.watchSlidesProgress = !0),
              y.params.initialSlide || n());
          }),
          a('setTranslate', () => {
            y.params.virtual.enabled &&
              (y.params.cssMode && !y._immediateVirtual
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    n();
                  }, 100)))
                : n());
          }),
          a('init update resize', () => {
            y.params.virtual.enabled &&
              y.params.cssMode &&
              M(y.wrapperEl, '--swiper-virtual-size', y.virtualSize + 'px');
          }),
          Object.assign(y.virtual, {
            appendSlide: function (t) {
              if ('object' == typeof t && 'length' in t)
                for (let e = 0; e < t.length; e += 1) t[e] && y.virtual.slides.push(t[e]);
              else y.virtual.slides.push(t);
              n(!0);
            },
            prependSlide: function (a) {
              const i = y.activeIndex;
              let e = i + 1,
                r = 1;
              if (Array.isArray(a)) {
                for (let e = 0; e < a.length; e += 1) a[e] && y.virtual.slides.unshift(a[e]);
                (e = i + a.length), (r = a.length);
              } else y.virtual.slides.unshift(a);
              if (y.params.virtual.cache) {
                const a = y.virtual.cache,
                  i = {};
                Object.keys(a).forEach((e) => {
                  const t = a[e],
                    s = t.attr('data-swiper-slide-index');
                  s && t.attr('data-swiper-slide-index', parseInt(s, 10) + r),
                    (i[parseInt(e, 10) + r] = t);
                }),
                  (y.virtual.cache = i);
              }
              n(!0), y.slideTo(e, 0);
            },
            removeSlide: function (s) {
              if (null != s) {
                let t = y.activeIndex;
                if (Array.isArray(s))
                  for (let e = s.length - 1; 0 <= e; --e)
                    y.virtual.slides.splice(s[e], 1),
                      y.params.virtual.cache && delete y.virtual.cache[s[e]],
                      s[e] < t && --t,
                      (t = Math.max(t, 0));
                else
                  y.virtual.slides.splice(s, 1),
                    y.params.virtual.cache && delete y.virtual.cache[s],
                    s < t && --t,
                    (t = Math.max(t, 0));
                n(!0), y.slideTo(t, 0);
              }
            },
            removeAllSlides: function () {
              (y.virtual.slides = []),
                y.params.virtual.cache && (y.virtual.cache = {}),
                n(!0),
                y.slideTo(0, 0);
            },
            update: n,
          });
      },
      function (e) {
        let { swiper: c, extendParams: t, on: s, emit: u } = e;
        const h = T(),
          m = L();
        function a(t) {
          if (c.enabled) {
            const s = c['rtlTranslate'];
            let e = t;
            const a = (e = e.originalEvent ? e.originalEvent : e).keyCode || e.charCode,
              i = c.params.keyboard.pageUpDown,
              r = i && 33 === a,
              n = i && 34 === a,
              l = 37 === a,
              o = 39 === a,
              d = 38 === a,
              p = 40 === a;
            if (!c.allowSlideNext && ((c.isHorizontal() && o) || (c.isVertical() && p) || n))
              return !1;
            if (!c.allowSlidePrev && ((c.isHorizontal() && l) || (c.isVertical() && d) || r))
              return !1;
            if (
              !(
                e.shiftKey ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                (h.activeElement &&
                  h.activeElement.nodeName &&
                  ('input' === h.activeElement.nodeName.toLowerCase() ||
                    'textarea' === h.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (c.params.keyboard.onlyInViewport && (r || n || l || o || d || p)) {
                let t = !1;
                if (
                  0 < c.$el.parents('.' + c.params.slideClass).length &&
                  0 === c.$el.parents('.' + c.params.slideActiveClass).length
                )
                  return;
                const e = c.$el,
                  a = e[0].clientWidth,
                  i = e[0].clientHeight,
                  u = m.innerWidth,
                  h = m.innerHeight,
                  r = c.$el.offset(),
                  n =
                    (s && (r.left -= c.$el[0].scrollLeft),
                    [
                      [r.left, r.top],
                      [r.left + a, r.top],
                      [r.left, r.top + i],
                      [r.left + a, r.top + i],
                    ]);
                for (let e = 0; e < n.length; e += 1) {
                  const s = n[e];
                  0 <= s[0] &&
                    s[0] <= u &&
                    0 <= s[1] &&
                    s[1] <= h &&
                    ((0 === s[0] && 0 === s[1]) || (t = !0));
                }
                if (!t) return;
              }
              c.isHorizontal()
                ? ((r || n || l || o) &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                  (((n || o) && !s) || ((r || l) && s)) && c.slideNext(),
                  (((r || l) && !s) || ((n || o) && s)) && c.slidePrev())
                : ((r || n || d || p) &&
                    (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
                  (n || p) && c.slideNext(),
                  (r || d) && c.slidePrev()),
                u('keyPress', a);
            }
          }
        }
        function i() {
          c.keyboard.enabled || (O(h).on('keydown', a), (c.keyboard.enabled = !0));
        }
        function r() {
          c.keyboard.enabled && (O(h).off('keydown', a), (c.keyboard.enabled = !1));
        }
        (c.keyboard = { enabled: !1 }),
          t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
          s('init', () => {
            c.params.keyboard.enabled && i();
          }),
          s('destroy', () => {
            c.keyboard.enabled && r();
          }),
          Object.assign(c.keyboard, { enable: i, disable: r });
      },
      function (e) {
        let { swiper: d, extendParams: t, on: s, emit: p } = e;
        const a = L();
        let c;
        t({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (d.mousewheel = { enabled: !1 });
        let u,
          i = g();
        const h = [];
        function r() {
          d.enabled && (d.mouseEntered = !0);
        }
        function n() {
          d.enabled && (d.mouseEntered = !1);
        }
        function m(e) {
          (d.params.mousewheel.thresholdDelta && e.delta < d.params.mousewheel.thresholdDelta) ||
            (d.params.mousewheel.thresholdTime && g() - i < d.params.mousewheel.thresholdTime) ||
            (6 <= e.delta && g() - i < 60) ||
            (e.direction < 0
              ? (d.isEnd && !d.params.loop) || d.animating || (d.slideNext(), p('scroll', e.raw))
              : (d.isBeginning && !d.params.loop) ||
                d.animating ||
                (d.slidePrev(), p('scroll', e.raw)),
            (i = new a.Date().getTime()));
        }
        function l(a) {
          let i = a,
            r = !0;
          if (d.enabled) {
            var n = d.params.mousewheel;
            d.params.cssMode && i.preventDefault();
            let e = d.$el;
            if (
              ('container' !== d.params.mousewheel.eventsTarget &&
                (e = O(d.params.mousewheel.eventsTarget)),
              !d.mouseEntered && !e[0].contains(i.target) && !n.releaseOnEdges)
            )
              return !0;
            i.originalEvent && (i = i.originalEvent);
            let t = 0;
            var l = d.rtlTranslate ? -1 : 1,
              o = (function (e) {
                let t = 0,
                  s = 0,
                  a = 0,
                  i = 0;
                return (
                  'detail' in e && (s = e.detail),
                  'wheelDelta' in e && (s = -e.wheelDelta / 120),
                  'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
                  'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                  'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
                  (a = 10 * t),
                  (i = 10 * s),
                  'deltaY' in e && (i = e.deltaY),
                  'deltaX' in e && (a = e.deltaX),
                  e.shiftKey && !a && ((a = i), (i = 0)),
                  (a || i) &&
                    e.deltaMode &&
                    (1 === e.deltaMode ? ((a *= 40), (i *= 40)) : ((a *= 800), (i *= 800))),
                  a && !t && (t = a < 1 ? -1 : 1),
                  i && !s && (s = i < 1 ? -1 : 1),
                  { spinX: t, spinY: s, pixelX: a, pixelY: i }
                );
              })(i);
            if (n.forceToAxis)
              if (d.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                t = -o.pixelX * l;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                t = -o.pixelY;
              }
            else t = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * l : -o.pixelY;
            if (0 === t) return !0;
            n.invert && (t = -t);
            let s = d.getTranslate() + t * n.sensitivity;
            if (
              ((s = s >= d.minTranslate() ? d.minTranslate() : s) <= d.maxTranslate() &&
                (s = d.maxTranslate()),
              (r = !!d.params.loop || !(s === d.minTranslate() || s === d.maxTranslate())) &&
                d.params.nested &&
                i.stopPropagation(),
              d.params.freeMode && d.params.freeMode.enabled)
            ) {
              const a = { time: g(), delta: Math.abs(t), direction: Math.sign(t) },
                r = u && a.time < u.time + 500 && a.delta <= u.delta && a.direction === u.direction;
              if (!r) {
                (u = void 0), d.params.loop && d.loopFix();
                let e = d.getTranslate() + t * n.sensitivity;
                const O = d.isBeginning,
                  g = d.isEnd;
                if (
                  ((e = e >= d.minTranslate() ? d.minTranslate() : e) <= d.maxTranslate() &&
                    (e = d.maxTranslate()),
                  d.setTransition(0),
                  d.setTranslate(e),
                  d.updateProgress(),
                  d.updateActiveIndex(),
                  d.updateSlidesClasses(),
                  ((!O && d.isBeginning) || (!g && d.isEnd)) && d.updateSlidesClasses(),
                  d.params.freeMode.sticky)
                ) {
                  clearTimeout(c), (c = void 0), 15 <= h.length && h.shift();
                  const i = h.length ? h[h.length - 1] : void 0,
                    r = h[0];
                  if ((h.push(a), i && (a.delta > i.delta || a.direction !== i.direction)))
                    h.splice(0);
                  else if (
                    15 <= h.length &&
                    a.time - r.time < 500 &&
                    1 <= r.delta - a.delta &&
                    a.delta <= 6
                  ) {
                    const i = 0 < t ? 0.8 : 0.2;
                    (u = a),
                      h.splice(0),
                      (c = S(() => {
                        d.slideToClosest(d.params.speed, !0, void 0, i);
                      }, 0));
                  }
                  c =
                    c ||
                    S(() => {
                      (u = a), h.splice(0), d.slideToClosest(d.params.speed, !0, void 0, 0.5);
                    }, 500);
                }
                if (
                  (r || p('scroll', i),
                  d.params.autoplay && d.params.autoplayDisableOnInteraction && d.autoplay.stop(),
                  e === d.minTranslate() || e === d.maxTranslate())
                )
                  return !0;
              }
            } else {
              const i = { time: g(), delta: Math.abs(t), direction: Math.sign(t), raw: a },
                r = (2 <= h.length && h.shift(), h.length ? h[h.length - 1] : void 0);
              if (
                (h.push(i),
                (!r || i.direction !== r.direction || i.delta > r.delta || i.time > r.time + 150) &&
                  m(i),
                (function (e) {
                  var t = d.params.mousewheel;
                  if (e.direction < 0) {
                    if (d.isEnd && !d.params.loop && t.releaseOnEdges) return 1;
                  } else if (d.isBeginning && !d.params.loop && t.releaseOnEdges) return 1;
                })(i))
              )
                return !0;
            }
            return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
          }
        }
        function o(e) {
          let t = d.$el;
          (t =
            'container' !== d.params.mousewheel.eventsTarget
              ? O(d.params.mousewheel.eventsTarget)
              : t)[e]('mouseenter', r),
            t[e]('mouseleave', n),
            t[e]('wheel', l);
        }
        function f() {
          return d.params.cssMode
            ? (d.wrapperEl.removeEventListener('wheel', l), !0)
            : !d.mousewheel.enabled && (o('on'), (d.mousewheel.enabled = !0));
        }
        function v() {
          return d.params.cssMode
            ? (d.wrapperEl.addEventListener(event, l), !0)
            : !!d.mousewheel.enabled && (o('off'), !(d.mousewheel.enabled = !1));
        }
        s('init', () => {
          !d.params.mousewheel.enabled && d.params.cssMode && v(),
            d.params.mousewheel.enabled && f();
        }),
          s('destroy', () => {
            d.params.cssMode && f(), d.mousewheel.enabled && v();
          }),
          Object.assign(d.mousewheel, { enable: f, disable: v });
      },
      function (e) {
        let { swiper: r, extendParams: t, on: s, emit: n } = e;
        function a(e) {
          let t;
          return (
            e &&
              ((t = O(e)),
              r.params.uniqueNavElements &&
                'string' == typeof e &&
                1 < t.length &&
                1 === r.$el.find(e).length &&
                (t = r.$el.find(e))),
            t
          );
        }
        function i(e, t) {
          var s = r.params.navigation;
          e &&
            0 < e.length &&
            (e[t ? 'addClass' : 'removeClass'](s.disabledClass),
            e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = t),
            r.params.watchOverflow &&
              r.enabled &&
              e[r.isLocked ? 'addClass' : 'removeClass'](s.lockClass));
        }
        function l() {
          var e, t;
          r.params.loop ||
            (({ $nextEl: e, $prevEl: t } = r.navigation),
            i(t, r.isBeginning && !r.params.rewind),
            i(e, r.isEnd && !r.params.rewind));
        }
        function o(e) {
          e.preventDefault(),
            (r.isBeginning && !r.params.loop && !r.params.rewind) || r.slidePrev();
        }
        function d(e) {
          e.preventDefault(), (r.isEnd && !r.params.loop && !r.params.rewind) || r.slideNext();
        }
        function p() {
          var e = r.params.navigation;
          if (
            ((r.params.navigation = $(r, r.originalParams.navigation, r.params.navigation, {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev',
            })),
            e.nextEl || e.prevEl)
          ) {
            const t = a(e.nextEl),
              s = a(e.prevEl);
            t && 0 < t.length && t.on('click', d),
              s && 0 < s.length && s.on('click', o),
              Object.assign(r.navigation, {
                $nextEl: t,
                nextEl: t && t[0],
                $prevEl: s,
                prevEl: s && s[0],
              }),
              r.enabled || (t && t.addClass(e.lockClass), s && s.addClass(e.lockClass));
          }
        }
        function c() {
          const { $nextEl: e, $prevEl: t } = r.navigation;
          e && e.length && (e.off('click', d), e.removeClass(r.params.navigation.disabledClass)),
            t && t.length && (t.off('click', o), t.removeClass(r.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        }),
          (r.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
          s('init', () => {
            p(), l();
          }),
          s('toEdge fromEdge lock unlock', () => {
            l();
          }),
          s('destroy', () => {
            c();
          }),
          s('enable disable', () => {
            const { $nextEl: e, $prevEl: t } = r.navigation;
            e && e[r.enabled ? 'removeClass' : 'addClass'](r.params.navigation.lockClass),
              t && t[r.enabled ? 'removeClass' : 'addClass'](r.params.navigation.lockClass);
          }),
          s('click', (e, t) => {
            const { $nextEl: s, $prevEl: a } = r.navigation,
              i = t.target;
            if (
              r.params.navigation.hideOnClick &&
              !O(i).is(a) &&
              !O(i).is(s) &&
              (!(r.pagination && r.params.pagination && r.params.pagination.clickable) ||
                (r.pagination.el !== i && !r.pagination.el.contains(i)))
            ) {
              let e;
              s
                ? (e = s.hasClass(r.params.navigation.hiddenClass))
                : a && (e = a.hasClass(r.params.navigation.hiddenClass)),
                n(!0 === e ? 'navigationShow' : 'navigationHide'),
                s && s.toggleClass(r.params.navigation.hiddenClass),
                a && a.toggleClass(r.params.navigation.hiddenClass);
            }
          }),
          Object.assign(r.navigation, { update: l, init: p, destroy: c });
      },
      function (e) {
        let { swiper: d, extendParams: t, on: s, emit: p } = e;
        e = 'swiper-pagination';
        let c,
          u =
            (t({
              pagination: {
                el: null,
                bulletElement: 'span',
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: 'bullets',
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: e + '-bullet',
                bulletActiveClass: e + '-bullet-active',
                modifierClass: e + '-',
                currentClass: e + '-current',
                totalClass: e + '-total',
                hiddenClass: e + '-hidden',
                progressbarFillClass: e + '-progressbar-fill',
                progressbarOppositeClass: e + '-progressbar-opposite',
                clickableClass: e + '-clickable',
                lockClass: e + '-lock',
                horizontalClass: e + '-horizontal',
                verticalClass: e + '-vertical',
              },
            }),
            (d.pagination = { el: null, $el: null, bullets: [] }),
            0);
        function r() {
          return (
            !d.params.pagination.el ||
            !d.pagination.el ||
            !d.pagination.$el ||
            0 === d.pagination.$el.length
          );
        }
        function h(e, t) {
          var s = d.params.pagination['bulletActiveClass'];
          e[t]()
            .addClass(s + '-' + t)
            [t]()
            .addClass(s + `-${t}-` + t);
        }
        function a() {
          const t = d.rtl,
            n = d.params.pagination;
          if (!r()) {
            const l = (d.virtual && d.params.virtual.enabled ? d.virtual : d).slides.length,
              o = d.pagination.$el;
            let r;
            var s = d.params.loop
              ? Math.ceil((l - 2 * d.loopedSlides) / d.params.slidesPerGroup)
              : d.snapGrid.length;
            if (
              (d.params.loop
                ? ((r = Math.ceil((d.activeIndex - d.loopedSlides) / d.params.slidesPerGroup)) >
                    l - 1 - 2 * d.loopedSlides && (r -= l - 2 * d.loopedSlides),
                  r > s - 1 && (r -= s),
                  r < 0 && 'bullets' !== d.params.paginationType && (r = s + r))
                : (r = void 0 !== d.snapIndex ? d.snapIndex : d.activeIndex || 0),
              'bullets' === n.type && d.pagination.bullets && 0 < d.pagination.bullets.length)
            ) {
              const l = d.pagination.bullets;
              let a, i, e;
              if (
                (n.dynamicBullets &&
                  ((c = l.eq(0)[d.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  o.css(
                    d.isHorizontal() ? 'width' : 'height',
                    c * (n.dynamicMainBullets + 4) + 'px',
                  ),
                  1 < n.dynamicMainBullets &&
                    void 0 !== d.previousIndex &&
                    ((u += r - (d.previousIndex - d.loopedSlides || 0)) > n.dynamicMainBullets - 1
                      ? (u = n.dynamicMainBullets - 1)
                      : u < 0 && (u = 0)),
                  (a = Math.max(r - u, 0)),
                  (i = a + (Math.min(l.length, n.dynamicMainBullets) - 1)),
                  (e = (i + a) / 2)),
                l.removeClass(
                  ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                    .map((e) => '' + n.bulletActiveClass + e)
                    .join(' '),
                ),
                1 < o.length)
              )
                l.each((e) => {
                  const t = O(e),
                    s = t.index();
                  s === r && t.addClass(n.bulletActiveClass),
                    n.dynamicBullets &&
                      (s >= a && s <= i && t.addClass(n.bulletActiveClass + '-main'),
                      s === a && h(t, 'prev'),
                      s === i && h(t, 'next'));
                });
              else {
                const t = l.eq(r),
                  o = t.index();
                if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                  const t = l.eq(a),
                    c = l.eq(i);
                  for (let e = a; e <= i; e += 1) l.eq(e).addClass(n.bulletActiveClass + '-main');
                  if (d.params.loop)
                    if (o >= l.length) {
                      for (let e = n.dynamicMainBullets; 0 <= e; --e)
                        l.eq(l.length - e).addClass(n.bulletActiveClass + '-main');
                      l.eq(l.length - n.dynamicMainBullets - 1).addClass(
                        n.bulletActiveClass + '-prev',
                      );
                    } else h(t, 'prev'), h(c, 'next');
                  else h(t, 'prev'), h(c, 'next');
                }
              }
              if (n.dynamicBullets) {
                const p = Math.min(l.length, n.dynamicMainBullets + 4),
                  o = (c * p - c) / 2 - e * c,
                  u = t ? 'right' : 'left';
                l.css(d.isHorizontal() ? u : 'top', o + 'px');
              }
            }
            if (
              ('fraction' === n.type &&
                (o.find(P(n.currentClass)).text(n.formatFractionCurrent(r + 1)),
                o.find(P(n.totalClass)).text(n.formatFractionTotal(s))),
              'progressbar' === n.type)
            ) {
              var a = n.progressbarOpposite
                ? d.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : d.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              const l = (r + 1) / s;
              let e = 1,
                t = 1;
              'horizontal' == a ? (e = l) : (t = l),
                o
                  .find(P(n.progressbarFillClass))
                  .transform(`translate3d(0,0,0) scaleX(${e}) scaleY(${t})`)
                  .transition(d.params.speed);
            }
            'custom' === n.type && n.renderCustom
              ? (o.html(n.renderCustom(d, r + 1, s)), p('paginationRender', o[0]))
              : p('paginationUpdate', o[0]),
              d.params.watchOverflow &&
                d.enabled &&
                o[d.isLocked ? 'addClass' : 'removeClass'](n.lockClass);
          }
        }
        function i() {
          const a = d.params.pagination;
          if (!r()) {
            const e = (d.virtual && d.params.virtual.enabled ? d.virtual : d).slides.length,
              i = d.pagination.$el;
            let s = '';
            if ('bullets' === a.type) {
              let t = d.params.loop
                ? Math.ceil((e - 2 * d.loopedSlides) / d.params.slidesPerGroup)
                : d.snapGrid.length;
              d.params.freeMode && d.params.freeMode.enabled && !d.params.loop && t > e && (t = e);
              for (let e = 0; e < t; e += 1)
                a.renderBullet
                  ? (s += a.renderBullet.call(d, e, a.bulletClass))
                  : (s += `<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`);
              i.html(s), (d.pagination.bullets = i.find(P(a.bulletClass)));
            }
            'fraction' === a.type &&
              ((s = a.renderFraction
                ? a.renderFraction.call(d, a.currentClass, a.totalClass)
                : `<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),
              i.html(s)),
              'progressbar' === a.type &&
                ((s = a.renderProgressbar
                  ? a.renderProgressbar.call(d, a.progressbarFillClass)
                  : `<span class="${a.progressbarFillClass}"></span>`),
                i.html(s)),
              'custom' !== a.type && p('paginationRender', d.pagination.$el[0]);
          }
        }
        function n() {
          d.params.pagination = $(d, d.originalParams.pagination, d.params.pagination, {
            el: 'swiper-pagination',
          });
          const t = d.params.pagination;
          if (t.el) {
            let e = O(t.el);
            0 !== e.length &&
              (d.params.uniqueNavElements &&
                'string' == typeof t.el &&
                1 < e.length &&
                1 < (e = d.$el.find(t.el)).length &&
                (e = e.filter((e) => O(e).parents('.swiper')[0] === d.el)),
              'bullets' === t.type && t.clickable && e.addClass(t.clickableClass),
              e.addClass(t.modifierClass + t.type),
              e.addClass(d.isHorizontal() ? t.horizontalClass : t.verticalClass),
              'bullets' === t.type &&
                t.dynamicBullets &&
                (e.addClass('' + t.modifierClass + t.type + '-dynamic'),
                (u = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              'progressbar' === t.type &&
                t.progressbarOpposite &&
                e.addClass(t.progressbarOppositeClass),
              t.clickable &&
                e.on('click', P(t.bulletClass), function (e) {
                  e.preventDefault();
                  let t = O(this).index() * d.params.slidesPerGroup;
                  d.params.loop && (t += d.loopedSlides), d.slideTo(t);
                }),
              Object.assign(d.pagination, { $el: e, el: e[0] }),
              d.enabled || e.addClass(t.lockClass));
          }
        }
        function l() {
          var e = d.params.pagination;
          if (!r()) {
            const t = d.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              t.removeClass(d.isHorizontal() ? e.horizontalClass : e.verticalClass),
              d.pagination.bullets &&
                d.pagination.bullets.removeClass &&
                d.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off('click', P(e.bulletClass));
          }
        }
        s('init', () => {
          n(), i(), a();
        }),
          s('activeIndexChange', () => {
            (!d.params.loop && void 0 !== d.snapIndex) || a();
          }),
          s('snapIndexChange', () => {
            d.params.loop || a();
          }),
          s('slidesLengthChange', () => {
            d.params.loop && (i(), a());
          }),
          s('snapGridLengthChange', () => {
            d.params.loop || (i(), a());
          }),
          s('destroy', () => {
            l();
          }),
          s('enable disable', () => {
            const e = d.pagination['$el'];
            e && e[d.enabled ? 'removeClass' : 'addClass'](d.params.pagination.lockClass);
          }),
          s('lock unlock', () => {
            a();
          }),
          s('click', (e, t) => {
            const s = t.target,
              a = d.pagination['$el'];
            if (
              d.params.pagination.el &&
              d.params.pagination.hideOnClick &&
              0 < a.length &&
              !O(s).hasClass(d.params.pagination.bulletClass) &&
              (!d.navigation ||
                !(
                  (d.navigation.nextEl && s === d.navigation.nextEl) ||
                  (d.navigation.prevEl && s === d.navigation.prevEl)
                ))
            ) {
              const e = a.hasClass(d.params.pagination.hiddenClass);
              p(!0 === e ? 'paginationShow' : 'paginationHide'),
                a.toggleClass(d.params.pagination.hiddenClass);
            }
          }),
          Object.assign(d.pagination, { render: i, update: a, init: n, destroy: l });
      },
      function (e) {
        let { swiper: d, extendParams: t, on: s, emit: n } = e;
        const p = T();
        let l,
          o,
          c,
          a,
          u = !1,
          h = null,
          m = null;
        function i() {
          if (d.params.scrollbar.el && d.scrollbar.el) {
            const { scrollbar: s, rtlTranslate: a, progress: i } = d,
              { $dragEl: r, $el: n } = s,
              l = d.params.scrollbar;
            let e = o,
              t = (c - o) * i;
            a
              ? 0 < (t = -t)
                ? ((e = o - t), (t = 0))
                : -t + o > c && (e = c + t)
              : t < 0
              ? ((e = o + t), (t = 0))
              : t + o > c && (e = c - t),
              d.isHorizontal()
                ? (r.transform(`translate3d(${t}px, 0, 0)`), (r[0].style.width = e + 'px'))
                : (r.transform(`translate3d(0px, ${t}px, 0)`), (r[0].style.height = e + 'px')),
              l.hide &&
                (clearTimeout(h),
                (n[0].style.opacity = 1),
                (h = setTimeout(() => {
                  (n[0].style.opacity = 0), n.transition(400);
                }, 1e3)));
          }
        }
        function r() {
          if (d.params.scrollbar.el && d.scrollbar.el) {
            const e = d['scrollbar'],
              { $dragEl: t, $el: s } = e;
            (t[0].style.width = ''),
              (t[0].style.height = ''),
              (c = d.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight),
              (a =
                d.size /
                (d.virtualSize +
                  d.params.slidesOffsetBefore -
                  (d.params.centeredSlides ? d.snapGrid[0] : 0))),
              (o =
                'auto' === d.params.scrollbar.dragSize
                  ? c * a
                  : parseInt(d.params.scrollbar.dragSize, 10)),
              d.isHorizontal() ? (t[0].style.width = o + 'px') : (t[0].style.height = o + 'px'),
              (s[0].style.display = 1 <= a ? 'none' : ''),
              d.params.scrollbar.hide && (s[0].style.opacity = 0),
              d.params.watchOverflow &&
                d.enabled &&
                e.$el[d.isLocked ? 'addClass' : 'removeClass'](d.params.scrollbar.lockClass);
          }
        }
        function f(e) {
          return d.isHorizontal()
            ? ('touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0] : e).clientX
            : ('touchstart' === e.type || 'touchmove' === e.type ? e.targetTouches[0] : e).clientY;
        }
        function v(e) {
          const { scrollbar: t, rtlTranslate: s } = d,
            a = t['$el'];
          let i;
          (i =
            (f(e) - a.offset()[d.isHorizontal() ? 'left' : 'top'] - (null !== l ? l : o / 2)) /
            (c - o)),
            (i = Math.max(Math.min(i, 1), 0)),
            s && (i = 1 - i);
          e = d.minTranslate() + (d.maxTranslate() - d.minTranslate()) * i;
          d.updateProgress(e), d.setTranslate(e), d.updateActiveIndex(), d.updateSlidesClasses();
        }
        function g(e) {
          const t = d.params.scrollbar,
            { scrollbar: s, $wrapperEl: a } = d,
            { $el: i, $dragEl: r } = s;
          (u = !0),
            (l =
              e.target === r[0] || e.target === r
                ? f(e) - e.target.getBoundingClientRect()[d.isHorizontal() ? 'left' : 'top']
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            a.transition(100),
            r.transition(100),
            v(e),
            clearTimeout(m),
            i.transition(0),
            t.hide && i.css('opacity', 1),
            d.params.cssMode && d.$wrapperEl.css('scroll-snap-type', 'none'),
            n('scrollbarDragStart', e);
        }
        function w(e) {
          const { scrollbar: t, $wrapperEl: s } = d,
            { $el: a, $dragEl: i } = t;
          u &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            v(e),
            s.transition(0),
            a.transition(0),
            i.transition(0),
            n('scrollbarDragMove', e));
        }
        function b(e) {
          const t = d.params.scrollbar,
            { scrollbar: s, $wrapperEl: a } = d,
            i = s['$el'];
          u &&
            ((u = !1),
            d.params.cssMode && (d.$wrapperEl.css('scroll-snap-type', ''), a.transition('')),
            t.hide &&
              (clearTimeout(m),
              (m = S(() => {
                i.css('opacity', 0), i.transition(400);
              }, 1e3))),
            n('scrollbarDragEnd', e),
            t.snapOnRelease && d.slideToClosest());
        }
        function x(e) {
          const {
              scrollbar: t,
              touchEventsTouch: s,
              touchEventsDesktop: a,
              params: i,
              support: r,
            } = d,
            n = t.$el[0],
            l = !(!r.passiveListener || !i.passiveListeners) && { passive: !1, capture: !1 },
            o = !(!r.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
          n &&
            ((e = 'on' === e ? 'addEventListener' : 'removeEventListener'),
            r.touch
              ? (n[e](s.start, g, l), n[e](s.move, w, l), n[e](s.end, b, o))
              : (n[e](a.start, g, l), p[e](a.move, w, l), p[e](a.end, b, o)));
        }
        function y() {
          const { scrollbar: s, $el: a } = d;
          d.params.scrollbar = $(d, d.originalParams.scrollbar, d.params.scrollbar, {
            el: 'swiper-scrollbar',
          });
          var i = d.params.scrollbar;
          if (i.el) {
            let e = O(i.el),
              t = (e =
                d.params.uniqueNavElements &&
                'string' == typeof i.el &&
                1 < e.length &&
                1 === a.find(i.el).length
                  ? a.find(i.el)
                  : e).find('.' + d.params.scrollbar.dragClass);
            0 === t.length &&
              ((t = O(`<div class="${d.params.scrollbar.dragClass}"></div>`)), e.append(t)),
              Object.assign(s, { $el: e, el: e[0], $dragEl: t, dragEl: t[0] }),
              i.draggable && d.params.scrollbar.el && x('on'),
              e && e[d.enabled ? 'removeClass' : 'addClass'](d.params.scrollbar.lockClass);
          }
        }
        function E() {
          d.params.scrollbar.el && x('off');
        }
        t({
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        }),
          (d.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          s('init', () => {
            y(), r(), i();
          }),
          s('update resize observerUpdate lock unlock', () => {
            r();
          }),
          s('setTranslate', () => {
            i();
          }),
          s('setTransition', (e, t) => {
            (t = t), d.params.scrollbar.el && d.scrollbar.el && d.scrollbar.$dragEl.transition(t);
          }),
          s('enable disable', () => {
            const e = d.scrollbar['$el'];
            e && e[d.enabled ? 'removeClass' : 'addClass'](d.params.scrollbar.lockClass);
          }),
          s('destroy', () => {
            E();
          }),
          Object.assign(d.scrollbar, { updateSize: r, setTranslate: i, init: y, destroy: E });
      },
      function (e) {
        let { swiper: p, extendParams: t, on: s } = e;
        t({ parallax: { enabled: !1 } });
        const r = (e, t) => {
            const s = p['rtl'],
              a = O(e),
              i = s ? -1 : 1,
              r = a.attr('data-swiper-parallax') || '0';
            let n = a.attr('data-swiper-parallax-x'),
              l = a.attr('data-swiper-parallax-y');
            var o = a.attr('data-swiper-parallax-scale'),
              d = a.attr('data-swiper-parallax-opacity');
            if (
              (n || l
                ? ((n = n || '0'), (l = l || '0'))
                : p.isHorizontal()
                ? ((n = r), (l = '0'))
                : ((l = r), (n = '0')),
              (n = 0 <= n.indexOf('%') ? parseInt(n, 10) * t * i + '%' : n * t * i + 'px'),
              (l = 0 <= l.indexOf('%') ? parseInt(l, 10) * t + '%' : l * t + 'px'),
              null != d)
            ) {
              const e = d - (d - 1) * (1 - Math.abs(t));
              a[0].style.opacity = e;
            }
            if (null == o) a.transform(`translate3d(${n}, ${l}, 0px)`);
            else {
              const e = o - (o - 1) * (1 - Math.abs(t));
              a.transform(`translate3d(${n}, ${l}, 0px) scale(${e})`);
            }
          },
          a = () => {
            const { $el: e, slides: t, progress: a, snapGrid: i } = p;
            e
              .children(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
              )
              .each((e) => {
                r(e, a);
              }),
              t.each((e, t) => {
                let s = e.progress;
                1 < p.params.slidesPerGroup &&
                  'auto' !== p.params.slidesPerView &&
                  (s += Math.ceil(t / 2) - a * (i.length - 1)),
                  (s = Math.min(Math.max(s, -1), 1)),
                  O(e)
                    .find(
                      '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
                    )
                    .each((e) => {
                      r(e, s);
                    });
              });
          };
        s('beforeInit', () => {
          p.params.parallax.enabled &&
            ((p.params.watchSlidesProgress = !0), (p.originalParams.watchSlidesProgress = !0));
        }),
          s('init', () => {
            p.params.parallax.enabled && a();
          }),
          s('setTranslate', () => {
            p.params.parallax.enabled && a();
          }),
          s('setTransition', (e, t) => {
            if (p.params.parallax.enabled) {
              var a = t;
              void 0 === a && (a = p.params.speed);
              const s = p['$el'];
              s.find(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
              ).each((e) => {
                const t = O(e);
                let s = parseInt(t.attr('data-swiper-parallax-duration'), 10) || a;
                0 === a && (s = 0), t.transition(s);
              });
            }
          });
      },
      function (e) {
        let { swiper: y, extendParams: t, on: s, emit: a } = e;
        const E = L();
        t({
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        }),
          (y.zoom = { enabled: !1 });
        let i,
          r,
          n,
          T = 1,
          l = !1;
        const S = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3,
          },
          C = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          o = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          };
        let d = 1;
        function p(e) {
          if (e.targetTouches.length < 2) return 1;
          var t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            a = e.targetTouches[1].pageX,
            e = e.targetTouches[1].pageY;
          return Math.sqrt((a - t) ** 2 + (e - s) ** 2);
        }
        function c(e) {
          var t = y.support,
            s = y.params.zoom;
          if (((r = !1), (n = !1), !t.gestures)) {
            if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2))
              return;
            (r = !0), (S.scaleStart = p(e));
          }
          (S.$slideEl && S.$slideEl.length) ||
          ((S.$slideEl = O(e.target).closest('.' + y.params.slideClass)),
          0 === S.$slideEl.length && (S.$slideEl = y.slides.eq(y.activeIndex)),
          (S.$imageEl = S.$slideEl
            .find('.' + s.containerClass)
            .eq(0)
            .find('picture, img, svg, canvas, .swiper-zoom-target')
            .eq(0)),
          (S.$imageWrapEl = S.$imageEl.parent('.' + s.containerClass)),
          (S.maxRatio = S.$imageWrapEl.attr('data-swiper-zoom') || s.maxRatio),
          0 !== S.$imageWrapEl.length)
            ? (S.$imageEl && S.$imageEl.transition(0), (l = !0))
            : (S.$imageEl = void 0);
        }
        function u(e) {
          const t = y.support,
            s = y.params.zoom,
            a = y.zoom;
          if (!t.gestures) {
            if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2))
              return;
            (n = !0), (S.scaleMove = p(e));
          }
          S.$imageEl && 0 !== S.$imageEl.length
            ? (t.gestures ? (a.scale = e.scale * T) : (a.scale = (S.scaleMove / S.scaleStart) * T),
              a.scale > S.maxRatio &&
                (a.scale = S.maxRatio - 1 + (a.scale - S.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio &&
                (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              S.$imageEl.transform(`translate3d(0,0,0) scale(${a.scale})`))
            : 'gesturechange' === e.type && c(e);
        }
        function h(e) {
          const t = y.device,
            s = y.support,
            a = y.params.zoom,
            i = y.zoom;
          if (!s.gestures) {
            if (!r || !n) return;
            if (
              'touchend' !== e.type ||
              ('touchend' === e.type && e.changedTouches.length < 2 && !t.android)
            )
              return;
            (r = !1), (n = !1);
          }
          S.$imageEl &&
            0 !== S.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, S.maxRatio), a.minRatio)),
            S.$imageEl.transition(y.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            (T = i.scale),
            (l = !1),
            1 === i.scale && (S.$slideEl = void 0));
        }
        function m(e) {
          var t = y.zoom;
          if (
            S.$imageEl &&
            0 !== S.$imageEl.length &&
            ((y.allowClick = !1), C.isTouched && S.$slideEl)
          ) {
            C.isMoved ||
              ((C.width = S.$imageEl[0].offsetWidth),
              (C.height = S.$imageEl[0].offsetHeight),
              (C.startX = I(S.$imageWrapEl[0], 'x') || 0),
              (C.startY = I(S.$imageWrapEl[0], 'y') || 0),
              (S.slideWidth = S.$slideEl[0].offsetWidth),
              (S.slideHeight = S.$slideEl[0].offsetHeight),
              S.$imageWrapEl.transition(0));
            var s = C.width * t.scale,
              t = C.height * t.scale;
            if (!(s < S.slideWidth && t < S.slideHeight)) {
              if (
                ((C.minX = Math.min(S.slideWidth / 2 - s / 2, 0)),
                (C.maxX = -C.minX),
                (C.minY = Math.min(S.slideHeight / 2 - t / 2, 0)),
                (C.maxY = -C.minY),
                (C.touchesCurrent.x = ('touchmove' === e.type ? e.targetTouches[0] : e).pageX),
                (C.touchesCurrent.y = ('touchmove' === e.type ? e.targetTouches[0] : e).pageY),
                !C.isMoved && !l)
              ) {
                if (
                  y.isHorizontal() &&
                  ((Math.floor(C.minX) === Math.floor(C.startX) &&
                    C.touchesCurrent.x < C.touchesStart.x) ||
                    (Math.floor(C.maxX) === Math.floor(C.startX) &&
                      C.touchesCurrent.x > C.touchesStart.x))
                )
                  return void (C.isTouched = !1);
                if (
                  !y.isHorizontal() &&
                  ((Math.floor(C.minY) === Math.floor(C.startY) &&
                    C.touchesCurrent.y < C.touchesStart.y) ||
                    (Math.floor(C.maxY) === Math.floor(C.startY) &&
                      C.touchesCurrent.y > C.touchesStart.y))
                )
                  return void (C.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (C.isMoved = !0),
                (C.currentX = C.touchesCurrent.x - C.touchesStart.x + C.startX),
                (C.currentY = C.touchesCurrent.y - C.touchesStart.y + C.startY),
                C.currentX < C.minX && (C.currentX = C.minX + 1 - (C.minX - C.currentX + 1) ** 0.8),
                C.currentX > C.maxX && (C.currentX = C.maxX - 1 + (C.currentX - C.maxX + 1) ** 0.8),
                C.currentY < C.minY && (C.currentY = C.minY + 1 - (C.minY - C.currentY + 1) ** 0.8),
                C.currentY > C.maxY && (C.currentY = C.maxY - 1 + (C.currentY - C.maxY + 1) ** 0.8),
                o.prevPositionX || (o.prevPositionX = C.touchesCurrent.x),
                o.prevPositionY || (o.prevPositionY = C.touchesCurrent.y),
                o.prevTime || (o.prevTime = Date.now()),
                (o.x = (C.touchesCurrent.x - o.prevPositionX) / (Date.now() - o.prevTime) / 2),
                (o.y = (C.touchesCurrent.y - o.prevPositionY) / (Date.now() - o.prevTime) / 2),
                Math.abs(C.touchesCurrent.x - o.prevPositionX) < 2 && (o.x = 0),
                Math.abs(C.touchesCurrent.y - o.prevPositionY) < 2 && (o.y = 0),
                (o.prevPositionX = C.touchesCurrent.x),
                (o.prevPositionY = C.touchesCurrent.y),
                (o.prevTime = Date.now()),
                S.$imageWrapEl.transform(`translate3d(${C.currentX}px, ${C.currentY}px,0)`);
            }
          }
        }
        function f() {
          const e = y.zoom;
          S.$slideEl &&
            y.previousIndex !== y.activeIndex &&
            (S.$imageEl && S.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            S.$imageWrapEl && S.$imageWrapEl.transform('translate3d(0,0,0)'),
            (e.scale = 1),
            (T = 1),
            (S.$slideEl = void 0),
            (S.$imageEl = void 0),
            (S.$imageWrapEl = void 0));
        }
        function v(w) {
          const b = y.zoom,
            x = y.params.zoom;
          if (
            (S.$slideEl ||
              (w && w.target && (S.$slideEl = O(w.target).closest('.' + y.params.slideClass)),
              S.$slideEl ||
                (y.params.virtual && y.params.virtual.enabled && y.virtual
                  ? (S.$slideEl = y.$wrapperEl.children('.' + y.params.slideActiveClass))
                  : (S.$slideEl = y.slides.eq(y.activeIndex))),
              (S.$imageEl = S.$slideEl
                .find('.' + x.containerClass)
                .eq(0)
                .find('picture, img, svg, canvas, .swiper-zoom-target')
                .eq(0)),
              (S.$imageWrapEl = S.$imageEl.parent('.' + x.containerClass))),
            S.$imageEl && 0 !== S.$imageEl.length && S.$imageWrapEl && 0 !== S.$imageWrapEl.length)
          ) {
            let e, t, s, a, i, r, n, l, o, d, p, c, u, h, m, f, v, g;
            y.params.cssMode &&
              ((y.wrapperEl.style.overflow = 'hidden'), (y.wrapperEl.style.touchAction = 'none')),
              S.$slideEl.addClass('' + x.zoomedSlideClass),
              (t =
                void 0 === C.touchesStart.x && w
                  ? ((e = ('touchend' === w.type ? w.changedTouches[0] : w).pageX),
                    ('touchend' === w.type ? w.changedTouches[0] : w).pageY)
                  : ((e = C.touchesStart.x), C.touchesStart.y)),
              (b.scale = S.$imageWrapEl.attr('data-swiper-zoom') || x.maxRatio),
              (T = S.$imageWrapEl.attr('data-swiper-zoom') || x.maxRatio),
              w
                ? ((v = S.$slideEl[0].offsetWidth),
                  (g = S.$slideEl[0].offsetHeight),
                  (s = S.$slideEl.offset().left + E.scrollX),
                  (a = S.$slideEl.offset().top + E.scrollY),
                  (i = s + v / 2 - e),
                  (r = a + g / 2 - t),
                  (o = S.$imageEl[0].offsetWidth),
                  (d = S.$imageEl[0].offsetHeight),
                  (p = o * b.scale),
                  (c = d * b.scale),
                  (m = -(u = Math.min(v / 2 - p / 2, 0))),
                  (f = -(h = Math.min(g / 2 - c / 2, 0))),
                  (n = i * b.scale),
                  (l = r * b.scale),
                  (n = n < u ? u : n) > m && (n = m),
                  (l = l < h ? h : l) > f && (l = f))
                : ((n = 0), (l = 0)),
              S.$imageWrapEl.transition(300).transform(`translate3d(${n}px, ${l}px,0)`),
              S.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${b.scale})`);
          }
        }
        function g() {
          const e = y.zoom,
            t = y.params.zoom;
          S.$slideEl ||
            (y.params.virtual && y.params.virtual.enabled && y.virtual
              ? (S.$slideEl = y.$wrapperEl.children('.' + y.params.slideActiveClass))
              : (S.$slideEl = y.slides.eq(y.activeIndex)),
            (S.$imageEl = S.$slideEl
              .find('.' + t.containerClass)
              .eq(0)
              .find('picture, img, svg, canvas, .swiper-zoom-target')
              .eq(0)),
            (S.$imageWrapEl = S.$imageEl.parent('.' + t.containerClass))),
            S.$imageEl &&
              0 !== S.$imageEl.length &&
              S.$imageWrapEl &&
              0 !== S.$imageWrapEl.length &&
              (y.params.cssMode &&
                ((y.wrapperEl.style.overflow = ''), (y.wrapperEl.style.touchAction = '')),
              (e.scale = 1),
              (T = 1),
              S.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              S.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
              S.$slideEl.removeClass('' + t.zoomedSlideClass),
              (S.$slideEl = void 0));
        }
        function w(e) {
          var t = y.zoom;
          t.scale && 1 !== t.scale ? g() : v(e);
        }
        function b() {
          var e = y.support;
          return {
            passiveListener: !(
              'touchstart' !== y.touchEvents.start ||
              !e.passiveListener ||
              !y.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 },
          };
        }
        function x() {
          return '.' + y.params.slideClass;
        }
        function M(e) {
          var t = b()['passiveListener'],
            s = x();
          y.$wrapperEl[e]('gesturestart', s, c, t),
            y.$wrapperEl[e]('gesturechange', s, u, t),
            y.$wrapperEl[e]('gestureend', s, h, t);
        }
        function $() {
          i || ((i = !0), M('on'));
        }
        function P() {
          i && ((i = !1), M('off'));
        }
        function k() {
          const e = y.zoom;
          var t, s, a, i;
          e.enabled ||
            ((e.enabled = !0),
            (t = y.support),
            ({ passiveListener: s, activeListenerWithCapture: a } = b()),
            (i = x()),
            t.gestures
              ? (y.$wrapperEl.on(y.touchEvents.start, $, s),
                y.$wrapperEl.on(y.touchEvents.end, P, s))
              : 'touchstart' === y.touchEvents.start &&
                (y.$wrapperEl.on(y.touchEvents.start, i, c, s),
                y.$wrapperEl.on(y.touchEvents.move, i, u, a),
                y.$wrapperEl.on(y.touchEvents.end, i, h, s),
                y.touchEvents.cancel && y.$wrapperEl.on(y.touchEvents.cancel, i, h, s)),
            y.$wrapperEl.on(y.touchEvents.move, '.' + y.params.zoom.containerClass, m, a));
        }
        function z() {
          const e = y.zoom;
          var t, s, a, i;
          e.enabled &&
            ((t = y.support),
            ({ passiveListener: s, activeListenerWithCapture: a } = ((e.enabled = !1), b())),
            (i = x()),
            t.gestures
              ? (y.$wrapperEl.off(y.touchEvents.start, $, s),
                y.$wrapperEl.off(y.touchEvents.end, P, s))
              : 'touchstart' === y.touchEvents.start &&
                (y.$wrapperEl.off(y.touchEvents.start, i, c, s),
                y.$wrapperEl.off(y.touchEvents.move, i, u, a),
                y.$wrapperEl.off(y.touchEvents.end, i, h, s),
                y.touchEvents.cancel && y.$wrapperEl.off(y.touchEvents.cancel, i, h, s)),
            y.$wrapperEl.off(y.touchEvents.move, '.' + y.params.zoom.containerClass, m, a));
        }
        Object.defineProperty(y.zoom, 'scale', {
          get: () => d,
          set(e) {
            var t, s;
            d !== e &&
              ((t = S.$imageEl ? S.$imageEl[0] : void 0),
              (s = S.$slideEl ? S.$slideEl[0] : void 0),
              a('zoomChange', e, t, s)),
              (d = e);
          },
        }),
          s('init', () => {
            y.params.zoom.enabled && k();
          }),
          s('destroy', () => {
            z();
          }),
          s('touchStart', (e, t) => {
            var s;
            y.zoom.enabled &&
              ((t = t),
              (s = y.device),
              S.$imageEl &&
                0 !== S.$imageEl.length &&
                !C.isTouched &&
                (s.android && t.cancelable && t.preventDefault(),
                (C.isTouched = !0),
                (C.touchesStart.x = ('touchstart' === t.type ? t.targetTouches[0] : t).pageX),
                (C.touchesStart.y = ('touchstart' === t.type ? t.targetTouches[0] : t).pageY)));
          }),
          s('touchEnd', (e, t) => {
            if (y.zoom.enabled) {
              var s = y.zoom;
              if (S.$imageEl && 0 !== S.$imageEl.length) {
                if (!C.isTouched || !C.isMoved) return void ((C.isTouched = !1), (C.isMoved = !1));
                (C.isTouched = !1), (C.isMoved = !1);
                let e = 300,
                  t = 300;
                var a = o.x * e,
                  a = C.currentX + a,
                  i = o.y * t,
                  i = C.currentY + i,
                  r =
                    (0 !== o.x && (e = Math.abs((a - C.currentX) / o.x)),
                    0 !== o.y && (t = Math.abs((i - C.currentY) / o.y)),
                    Math.max(e, t)),
                  a = ((C.currentX = a), (C.currentY = i), C.width * s.scale),
                  i = C.height * s.scale;
                (C.minX = Math.min(S.slideWidth / 2 - a / 2, 0)),
                  (C.maxX = -C.minX),
                  (C.minY = Math.min(S.slideHeight / 2 - i / 2, 0)),
                  (C.maxY = -C.minY),
                  (C.currentX = Math.max(Math.min(C.currentX, C.maxX), C.minX)),
                  (C.currentY = Math.max(Math.min(C.currentY, C.maxY), C.minY)),
                  S.$imageWrapEl
                    .transition(r)
                    .transform(`translate3d(${C.currentX}px, ${C.currentY}px,0)`);
              }
            }
          }),
          s('doubleTap', (e, t) => {
            !y.animating && y.params.zoom.enabled && y.zoom.enabled && y.params.zoom.toggle && w(t);
          }),
          s('transitionEnd', () => {
            y.zoom.enabled && y.params.zoom.enabled && f();
          }),
          s('slideChange', () => {
            y.zoom.enabled && y.params.zoom.enabled && y.params.cssMode && f();
          }),
          Object.assign(y.zoom, { enable: k, disable: z, in: v, out: g, toggle: w });
      },
      function (e) {
        let { swiper: p, extendParams: t, on: s, emit: c } = e,
          d =
            (t({
              lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: '',
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
              },
            }),
            !(p.lazy = {})),
          u = !1;
        function h(e, l) {
          void 0 === l && (l = !0);
          const o = p.params.lazy;
          if (void 0 !== e && 0 !== p.slides.length) {
            const d =
                p.virtual && p.params.virtual.enabled
                  ? p.$wrapperEl.children(`.${p.params.slideClass}[data-swiper-slide-index="${e}"]`)
                  : p.slides.eq(e),
              t = d.find(`.${o.elementClass}:not(.${o.loadedClass}):not(.${o.loadingClass})`);
            !d.hasClass(o.elementClass) ||
              d.hasClass(o.loadedClass) ||
              d.hasClass(o.loadingClass) ||
              t.push(d[0]),
              0 !== t.length &&
                t.each((e) => {
                  const t = O(e),
                    s = (t.addClass(o.loadingClass), t.attr('data-background')),
                    a = t.attr('data-src'),
                    i = t.attr('data-srcset'),
                    r = t.attr('data-sizes'),
                    n = t.parent('picture');
                  p.loadImage(t[0], a || s, i, r, !1, () => {
                    var e;
                    null == p ||
                      !p ||
                      (p && !p.params) ||
                      p.destroyed ||
                      (s
                        ? (t.css('background-image', `url("${s}")`),
                          t.removeAttr('data-background'))
                        : (i && (t.attr('srcset', i), t.removeAttr('data-srcset')),
                          r && (t.attr('sizes', r), t.removeAttr('data-sizes')),
                          n.length &&
                            n.children('source').each((e) => {
                              const t = O(e);
                              t.attr('data-srcset') &&
                                (t.attr('srcset', t.attr('data-srcset')),
                                t.removeAttr('data-srcset'));
                            }),
                          a && (t.attr('src', a), t.removeAttr('data-src'))),
                      t.addClass(o.loadedClass).removeClass(o.loadingClass),
                      d.find('.' + o.preloaderClass).remove(),
                      p.params.loop &&
                        l &&
                        ((e = d.attr('data-swiper-slide-index')),
                        d.hasClass(p.params.slideDuplicateClass)
                          ? h(
                              p.$wrapperEl
                                .children(
                                  `[data-swiper-slide-index="${e}"]:not(.${p.params.slideDuplicateClass})`,
                                )
                                .index(),
                              !1,
                            )
                          : h(
                              p.$wrapperEl
                                .children(
                                  `.${p.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`,
                                )
                                .index(),
                              !1,
                            )),
                      c('lazyImageReady', d[0], t[0]),
                      p.params.autoHeight && p.updateAutoHeight());
                  }),
                    c('lazyImageLoad', d[0], t[0]);
                });
          }
        }
        function m() {
          const { $wrapperEl: t, params: s, slides: a, activeIndex: i } = p,
            r = p.virtual && s.virtual.enabled,
            e = s.lazy;
          let n = s.slidesPerView;
          function l(e) {
            if (r) {
              if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return 1;
            } else if (a[e]) return 1;
          }
          function o(e) {
            return r ? O(e).attr('data-swiper-slide-index') : O(e).index();
          }
          if (('auto' === n && (n = 0), (u = u || !0), p.params.watchSlidesProgress))
            t.children('.' + s.slideVisibleClass).each((e) => {
              h(r ? O(e).attr('data-swiper-slide-index') : O(e).index());
            });
          else if (1 < n) for (let e = i; e < i + n; e += 1) l(e) && h(e);
          else h(i);
          if (e.loadPrevNext)
            if (1 < n || (e.loadPrevNextAmount && 1 < e.loadPrevNextAmount)) {
              const t = e.loadPrevNextAmount,
                p = n,
                s = Math.min(i + p + Math.max(t, p), a.length),
                r = Math.max(i - Math.max(p, t), 0);
              for (let e = i + n; e < s; e += 1) l(e) && h(e);
              for (let e = r; e < i; e += 1) l(e) && h(e);
            } else {
              const p = t.children('.' + s.slideNextClass),
                a = (0 < p.length && h(o(p)), t.children('.' + s.slidePrevClass));
              0 < a.length && h(o(a));
            }
        }
        function f() {
          var e = L();
          if (p && !p.destroyed) {
            const a = p.params.lazy.scrollingElement ? O(p.params.lazy.scrollingElement) : O(e),
              i = a[0] === e,
              r = i ? e.innerWidth : a[0].offsetWidth,
              n = i ? e.innerHeight : a[0].offsetHeight,
              l = p.$el.offset(),
              o = p['rtlTranslate'];
            let t = !1;
            o && (l.left -= p.$el[0].scrollLeft);
            var s = [
              [l.left, l.top],
              [l.left + p.width, l.top],
              [l.left, l.top + p.height],
              [l.left + p.width, l.top + p.height],
            ];
            for (let e = 0; e < s.length; e += 1) {
              const p = s[e];
              0 <= p[0] &&
                p[0] <= r &&
                0 <= p[1] &&
                p[1] <= n &&
                ((0 === p[0] && 0 === p[1]) || (t = !0));
            }
            e = !(
              'touchstart' !== p.touchEvents.start ||
              !p.support.passiveListener ||
              !p.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            t ? (m(), a.off('scroll', f, e)) : d || ((d = !0), a.on('scroll', f, e));
          }
        }
        s('beforeInit', () => {
          p.params.lazy.enabled && p.params.preloadImages && (p.params.preloadImages = !1);
        }),
          s('init', () => {
            p.params.lazy.enabled && (p.params.lazy.checkInView ? f : m)();
          }),
          s('scroll', () => {
            p.params.freeMode && p.params.freeMode.enabled && !p.params.freeMode.sticky && m();
          }),
          s('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
            p.params.lazy.enabled && (p.params.lazy.checkInView ? f : m)();
          }),
          s('transitionStart', () => {
            p.params.lazy.enabled &&
              (p.params.lazy.loadOnTransitionStart ||
                (!p.params.lazy.loadOnTransitionStart && !u)) &&
              (p.params.lazy.checkInView ? f : m)();
          }),
          s('transitionEnd', () => {
            p.params.lazy.enabled &&
              !p.params.lazy.loadOnTransitionStart &&
              (p.params.lazy.checkInView ? f : m)();
          }),
          s('slideChange', () => {
            var {
              lazy: e,
              cssMode: t,
              watchSlidesProgress: s,
              touchReleaseOnEdges: a,
              resistanceRatio: i,
            } = p.params;
            e.enabled && (t || (s && (a || 0 === i))) && m();
          }),
          Object.assign(p.lazy, { load: m, loadInSlide: h });
      },
      function (e) {
        let { swiper: l, extendParams: t, on: s } = e;
        function o(e, t) {
          const s = (function () {
            let s, a, i;
            return (e, t) => {
              for (a = -1, s = e.length; 1 < s - a; )
                e[(i = (s + a) >> 1)] <= t ? (a = i) : (s = i);
              return s;
            };
          })();
          let a, i;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = s(this.x, e)),
                  (a = i - 1),
                  ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a])
                : 0;
            }),
            this
          );
        }
        function a() {
          l.controller.control &&
            l.controller.spline &&
            ((l.controller.spline = void 0), delete l.controller.spline);
        }
        t({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
          (l.controller = { control: void 0 }),
          s('beforeInit', () => {
            l.controller.control = l.params.controller.control;
          }),
          s('update', () => {
            a();
          }),
          s('resize', () => {
            a();
          }),
          s('observerUpdate', () => {
            a();
          }),
          s('setTranslate', (e, t, s) => {
            l.controller.control && l.controller.setTranslate(t, s);
          }),
          s('setTransition', (e, t, s) => {
            l.controller.control && l.controller.setTransition(t, s);
          }),
          Object.assign(l.controller, {
            setTranslate: function (e, t) {
              var s = l.controller.control;
              let a, i;
              var r = l.constructor;
              function n(e) {
                var t,
                  s = l.rtlTranslate ? -l.translate : l.translate;
                'slide' === l.params.controller.by &&
                  ((t = e),
                  l.controller.spline ||
                    (l.controller.spline = l.params.loop
                      ? new o(l.slidesGrid, t.slidesGrid)
                      : new o(l.snapGrid, t.snapGrid)),
                  (i = -l.controller.spline.interpolate(-s))),
                  (i && 'container' !== l.params.controller.by) ||
                    ((a =
                      (e.maxTranslate() - e.minTranslate()) /
                      (l.maxTranslate() - l.minTranslate())),
                    (i = (s - l.minTranslate()) * a + e.minTranslate())),
                  l.params.controller.inverse && (i = e.maxTranslate() - i),
                  e.updateProgress(i),
                  e.setTranslate(i, l),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(s))
                for (let e = 0; e < s.length; e += 1) s[e] !== t && s[e] instanceof r && n(s[e]);
              else s instanceof r && t !== s && n(s);
            },
            setTransition: function (t, e) {
              const s = l.constructor,
                a = l.controller.control;
              let i;
              function r(e) {
                e.setTransition(t, l),
                  0 !== t &&
                    (e.transitionStart(),
                    e.params.autoHeight &&
                      S(() => {
                        e.updateAutoHeight();
                      }),
                    e.$wrapperEl.transitionEnd(() => {
                      a &&
                        (e.params.loop && 'slide' === l.params.controller.by && e.loopFix(),
                        e.transitionEnd());
                    }));
              }
              if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1) a[i] !== e && a[i] instanceof s && r(a[i]);
              else a instanceof s && e !== a && r(a);
            },
          });
      },
      function (e) {
        let { swiper: l, extendParams: t, on: s } = e,
          o =
            (t({
              a11y: {
                enabled: !0,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
                id: null,
              },
            }),
            null);
        function a(e) {
          const t = o;
          0 !== t.length && (t.html(''), t.html(e));
        }
        function i(e) {
          e.attr('tabIndex', '0');
        }
        function r(e) {
          e.attr('tabIndex', '-1');
        }
        function d(e, t) {
          e.attr('role', t);
        }
        function p(e, t) {
          e.attr('aria-roledescription', t);
        }
        function c(e, t) {
          e.attr('aria-label', t);
        }
        function n(e) {
          e.attr('aria-disabled', !0);
        }
        function u(e) {
          e.attr('aria-disabled', !1);
        }
        function h(e) {
          if (13 === e.keyCode || 32 === e.keyCode) {
            const t = l.params.a11y,
              s = O(e.target);
            l.navigation &&
              l.navigation.$nextEl &&
              s.is(l.navigation.$nextEl) &&
              ((l.isEnd && !l.params.loop) || l.slideNext(),
              l.isEnd ? a(t.lastSlideMessage) : a(t.nextSlideMessage)),
              l.navigation &&
                l.navigation.$prevEl &&
                s.is(l.navigation.$prevEl) &&
                ((l.isBeginning && !l.params.loop) || l.slidePrev(),
                l.isBeginning ? a(t.firstSlideMessage) : a(t.prevSlideMessage)),
              l.pagination && s.is(P(l.params.pagination.bulletClass)) && s[0].click();
          }
        }
        function m() {
          return l.pagination && l.pagination.bullets && l.pagination.bullets.length;
        }
        function f() {
          return m() && l.params.pagination.clickable;
        }
        const v = (e, t, s) => {
            i(e),
              'BUTTON' !== e[0].tagName && (d(e, 'button'), e.on('keydown', h)),
              c(e, s),
              e.attr('aria-controls', t);
          },
          g = (e) => {
            var t,
              s,
              e = e.target.closest('.' + l.params.slideClass);
            e &&
              l.slides.includes(e) &&
              ((t = l.slides.indexOf(e) === l.activeIndex),
              (s = l.params.watchSlidesProgress && l.visibleSlides && l.visibleSlides.includes(e)),
              t || s || l.slideTo(l.slides.indexOf(e), 0));
          };
        s('beforeInit', () => {
          o = O(
            `<span class="${l.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`,
          );
        }),
          s('afterInit', () => {
            if (l.params.a11y.enabled) {
              const i = l.params.a11y;
              l.$el.append(o);
              var s = l.$el;
              i.containerRoleDescriptionMessage && p(s, i.containerRoleDescriptionMessage),
                i.containerMessage && c(s, i.containerMessage);
              const a = l.$wrapperEl,
                r =
                  i.id ||
                  a.attr('id') ||
                  'swiper-wrapper-' +
                    'x'
                      .repeat((s = void 0 === (s = 16) ? 16 : s))
                      .replace(/x/g, () => Math.round(16 * Math.random()).toString(16)),
                n =
                  ((s = l.params.autoplay && l.params.autoplay.enabled ? 'off' : 'polite'),
                  a.attr('id', r),
                  a.attr('aria-live', s),
                  i.itemRoleDescriptionMessage && p(O(l.slides), i.itemRoleDescriptionMessage),
                  d(O(l.slides), i.slideRole),
                  (l.params.loop
                    ? l.slides.filter((e) => !e.classList.contains(l.params.slideDuplicateClass))
                    : l.slides
                  ).length);
              let e, t;
              l.slides.each((e, t) => {
                const s = O(e),
                  a = l.params.loop ? parseInt(s.attr('data-swiper-slide-index'), 10) : t;
                c(
                  s,
                  i.slideLabelMessage
                    .replace(/\{\{index\}\}/, a + 1)
                    .replace(/\{\{slidesLength\}\}/, n),
                );
              }),
                l.navigation && l.navigation.$nextEl && (e = l.navigation.$nextEl),
                l.navigation && l.navigation.$prevEl && (t = l.navigation.$prevEl),
                e && e.length && v(e, r, i.nextSlideMessage),
                t && t.length && v(t, r, i.prevSlideMessage),
                f() && l.pagination.$el.on('keydown', P(l.params.pagination.bulletClass), h),
                l.$el.on('focus', g, !0);
            }
          }),
          s('fromEdge toEdge afterInit lock unlock', () => {
            var e, t;
            l.params.a11y.enabled &&
              !l.params.loop &&
              !l.params.rewind &&
              l.navigation &&
              (({ $nextEl: e, $prevEl: t } = l.navigation),
              t && 0 < t.length && (l.isBeginning ? (n(t), r(t)) : (u(t), i(t))),
              e && 0 < e.length && (l.isEnd ? (n(e), r(e)) : (u(e), i(e))));
          }),
          s('paginationUpdate', () => {
            if (l.params.a11y.enabled) {
              const s = l.params.a11y;
              m() &&
                l.pagination.bullets.each((e) => {
                  const t = O(e);
                  l.params.pagination.clickable &&
                    (i(t),
                    l.params.pagination.renderBullet ||
                      (d(t, 'button'),
                      c(t, s.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)))),
                    t.is('.' + l.params.pagination.bulletActiveClass)
                      ? t.attr('aria-current', 'true')
                      : t.removeAttr('aria-current');
                });
            }
          }),
          s('destroy', () => {
            if (l.params.a11y.enabled) {
              let e, t;
              o && 0 < o.length && o.remove(),
                l.navigation && l.navigation.$nextEl && (e = l.navigation.$nextEl),
                l.navigation && l.navigation.$prevEl && (t = l.navigation.$prevEl),
                e && e.off('keydown', h),
                t && t.off('keydown', h),
                f() && l.pagination.$el.off('keydown', P(l.params.pagination.bulletClass), h),
                l.$el.off('focus', g, !0);
            }
          });
      },
      function (e) {
        let { swiper: n, extendParams: t, on: s } = e,
          l = (t({ history: { enabled: !1, root: '', replaceState: !1, key: 'slides' } }), !1),
          a = {};
        const o = (e) =>
            e
              .toString()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, ''),
          i = (e) => {
            var t = L();
            let s;
            (e = (s = e ? new URL(e) : t.location).pathname
              .slice(1)
              .split('/')
              .filter((e) => '' !== e)),
              (t = e.length);
            return { key: e[t - 2], value: e[t - 1] };
          },
          r = (s, a) => {
            const i = L();
            if (l && n.params.history.enabled) {
              let e;
              e = n.params.url ? new URL(n.params.url) : i.location;
              const r = n.slides.eq(a);
              let t = o(r.attr('data-history'));
              if (0 < n.params.history.root.length) {
                let e = n.params.history.root;
                '/' === e[e.length - 1] && (e = e.slice(0, e.length - 1)), (t = e + `/${s}/` + t);
              } else e.pathname.includes(s) || (t = s + '/' + t);
              a = i.history.state;
              (a && a.value === t) ||
                (n.params.history.replaceState
                  ? i.history.replaceState({ value: t }, null, t)
                  : i.history.pushState({ value: t }, null, t));
            }
          },
          d = (s, a, i) => {
            if (a)
              for (let e = 0, t = n.slides.length; e < t; e += 1) {
                const r = n.slides.eq(e);
                if (o(r.attr('data-history')) === a && !r.hasClass(n.params.slideDuplicateClass)) {
                  const a = r.index();
                  n.slideTo(a, s, i);
                }
              }
            else n.slideTo(0, s, i);
          },
          p = () => {
            (a = i(n.params.url)), d(n.params.speed, n.paths.value, !1);
          };
        s('init', () => {
          if (n.params.history.enabled) {
            const e = L();
            if (n.params.history) {
              if (!e.history || !e.history.pushState)
                return void ((n.params.history.enabled = !1),
                (n.params.hashNavigation.enabled = !0));
              (l = !0),
                ((a = i(n.params.url)).key || a.value) &&
                  (d(0, a.value, n.params.runCallbacksOnInit),
                  n.params.history.replaceState || e.addEventListener('popstate', p));
            }
          }
        }),
          s('destroy', () => {
            if (n.params.history.enabled) {
              const e = L();
              n.params.history.replaceState || e.removeEventListener('popstate', p);
            }
          }),
          s('transitionEnd _freeModeNoMomentumRelease', () => {
            l && r(n.params.history.key, n.activeIndex);
          }),
          s('slideChange', () => {
            l && n.params.cssMode && r(n.params.history.key, n.activeIndex);
          });
      },
      function (e) {
        let { swiper: i, extendParams: t, emit: s, on: a } = e,
          r = !1;
        const n = T(),
          l = L(),
          o =
            (t({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }),
            () => {
              s('hashChange');
              var e = n.location.hash.replace('#', '');
              e !== i.slides.eq(i.activeIndex).attr('data-hash') &&
                void 0 !==
                  (e = i.$wrapperEl
                    .children(`.${i.params.slideClass}[data-hash="${e}"]`)
                    .index()) &&
                i.slideTo(e);
            }),
          d = () => {
            if (r && i.params.hashNavigation.enabled)
              if (i.params.hashNavigation.replaceState && l.history && l.history.replaceState)
                l.history.replaceState(
                  null,
                  null,
                  '#' + i.slides.eq(i.activeIndex).attr('data-hash') || '',
                ),
                  s('hashSet');
              else {
                const e = i.slides.eq(i.activeIndex),
                  t = e.attr('data-hash') || e.attr('data-history');
                (n.location.hash = t || ''), s('hashSet');
              }
          };
        a('init', () => {
          if (
            i.params.hashNavigation.enabled &&
            !(!i.params.hashNavigation.enabled || (i.params.history && i.params.history.enabled))
          ) {
            r = !0;
            const s = n.location.hash.replace('#', '');
            if (s)
              for (let e = 0, t = i.slides.length; e < t; e += 1) {
                const a = i.slides.eq(e);
                if (
                  (a.attr('data-hash') || a.attr('data-history')) === s &&
                  !a.hasClass(i.params.slideDuplicateClass)
                ) {
                  const s = a.index();
                  i.slideTo(s, 0, i.params.runCallbacksOnInit, !0);
                }
              }
            i.params.hashNavigation.watchState && O(l).on('hashchange', o);
          }
        }),
          a('destroy', () => {
            i.params.hashNavigation.enabled &&
              i.params.hashNavigation.watchState &&
              O(l).off('hashchange', o);
          }),
          a('transitionEnd _freeModeNoMomentumRelease', () => {
            r && d();
          }),
          a('slideChange', () => {
            r && i.params.cssMode && d();
          });
      },
      function (e) {
        let s,
          { swiper: a, extendParams: t, on: i, emit: r } = e;
        function n() {
          const e = a.slides.eq(a.activeIndex);
          let t = a.params.autoplay.delay;
          e.attr('data-swiper-autoplay') &&
            (t = e.attr('data-swiper-autoplay') || a.params.autoplay.delay),
            clearTimeout(s),
            (s = S(() => {
              let e;
              a.params.autoplay.reverseDirection
                ? a.params.loop
                  ? (a.loopFix(), (e = a.slidePrev(a.params.speed, !0, !0)), r('autoplay'))
                  : a.isBeginning
                  ? a.params.autoplay.stopOnLastSlide
                    ? o()
                    : ((e = a.slideTo(a.slides.length - 1, a.params.speed, !0, !0)), r('autoplay'))
                  : ((e = a.slidePrev(a.params.speed, !0, !0)), r('autoplay'))
                : a.params.loop
                ? (a.loopFix(), (e = a.slideNext(a.params.speed, !0, !0)), r('autoplay'))
                : a.isEnd
                ? a.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((e = a.slideTo(0, a.params.speed, !0, !0)), r('autoplay'))
                : ((e = a.slideNext(a.params.speed, !0, !0)), r('autoplay')),
                ((a.params.cssMode && a.autoplay.running) || !1 === e) && n();
            }, t));
        }
        function l() {
          return (
            void 0 === s &&
            !a.autoplay.running &&
            ((a.autoplay.running = !0), r('autoplayStart'), n(), !0)
          );
        }
        function o() {
          return (
            !!a.autoplay.running &&
            void 0 !== s &&
            (s && (clearTimeout(s), (s = void 0)), (a.autoplay.running = !1), r('autoplayStop'), !0)
          );
        }
        function d(e) {
          !a.autoplay.running ||
            a.autoplay.paused ||
            (s && clearTimeout(s),
            (a.autoplay.paused = !0),
            0 !== e && a.params.autoplay.waitForTransition
              ? ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
                  a.$wrapperEl[0].addEventListener(e, c);
                })
              : ((a.autoplay.paused = !1), n()));
        }
        function p() {
          var e = T();
          'hidden' === e.visibilityState && a.autoplay.running && d(),
            'visible' === e.visibilityState && a.autoplay.paused && (n(), (a.autoplay.paused = !1));
        }
        function c(e) {
          a &&
            !a.destroyed &&
            a.$wrapperEl &&
            e.target === a.$wrapperEl[0] &&
            (['transitionend', 'webkitTransitionEnd'].forEach((e) => {
              a.$wrapperEl[0].removeEventListener(e, c);
            }),
            (a.autoplay.paused = !1),
            (a.autoplay.running ? n : o)());
        }
        function u() {
          a.params.autoplay.disableOnInteraction ? o() : (r('autoplayPause'), d()),
            ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
              a.$wrapperEl[0].removeEventListener(e, c);
            });
        }
        function h() {
          a.params.autoplay.disableOnInteraction ||
            ((a.autoplay.paused = !1), r('autoplayResume'), n());
        }
        (a.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          i('init', () => {
            a.params.autoplay.enabled &&
              (l(),
              T().addEventListener('visibilitychange', p),
              a.params.autoplay.pauseOnMouseEnter &&
                (a.$el.on('mouseenter', u), a.$el.on('mouseleave', h)));
          }),
          i('beforeTransitionStart', (e, t, s) => {
            a.autoplay.running &&
              (s || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(t) : o());
          }),
          i('sliderFirstMove', () => {
            a.autoplay.running && (a.params.autoplay.disableOnInteraction ? o : d)();
          }),
          i('touchEnd', () => {
            a.params.cssMode && a.autoplay.paused && !a.params.autoplay.disableOnInteraction && n();
          }),
          i('destroy', () => {
            a.$el.off('mouseenter', u),
              a.$el.off('mouseleave', h),
              a.autoplay.running && o(),
              T().removeEventListener('visibilitychange', p);
          }),
          Object.assign(a.autoplay, { pause: d, run: n, start: l, stop: o });
      },
      function (e) {
        let { swiper: o, extendParams: t, on: s } = e,
          a =
            (t({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-thumbs',
              },
            }),
            !1),
          i = !1;
        function r() {
          var e = o.thumbs.swiper;
          if (e && !e.destroyed) {
            const s = e.clickedIndex,
              a = e.clickedSlide;
            if (!((a && O(a).hasClass(o.params.thumbs.slideThumbActiveClass)) || null == s)) {
              let t;
              if (
                ((t = e.params.loop
                  ? parseInt(O(e.clickedSlide).attr('data-swiper-slide-index'), 10)
                  : s),
                o.params.loop)
              ) {
                let e = o.activeIndex;
                o.slides.eq(e).hasClass(o.params.slideDuplicateClass) &&
                  (o.loopFix(), (o._clientLeft = o.$wrapperEl[0].clientLeft), (e = o.activeIndex));
                const s = o.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index(),
                  a = o.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
                t = void 0 === s || (void 0 !== a && a - e < e - s) ? a : s;
              }
              o.slideTo(t);
            }
          }
        }
        function n() {
          var e = o.params['thumbs'];
          if (a) return !1;
          a = !0;
          const t = o.constructor;
          return (
            e.swiper instanceof t
              ? ((o.thumbs.swiper = e.swiper),
                Object.assign(o.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                Object.assign(o.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }))
              : d(e.swiper) &&
                ((e = Object.assign({}, e.swiper)),
                Object.assign(e, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                (o.thumbs.swiper = new t(e)),
                (i = !0)),
            o.thumbs.swiper.$el.addClass(o.params.thumbs.thumbsContainerClass),
            o.thumbs.swiper.on('tap', r),
            !0
          );
        }
        function l(a) {
          const i = o.thumbs.swiper;
          if (i && !i.destroyed) {
            const r =
                'auto' === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView,
              n = o.params.thumbs.autoScrollOffset,
              l = n && !i.params.loop;
            if (o.realIndex !== i.realIndex || l) {
              let e,
                t,
                s = i.activeIndex;
              if (i.params.loop) {
                i.slides.eq(s).hasClass(i.params.slideDuplicateClass) &&
                  (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), (s = i.activeIndex));
                const a = i.slides
                    .eq(s)
                    .prevAll(`[data-swiper-slide-index="${o.realIndex}"]`)
                    .eq(0)
                    .index(),
                  r = i.slides
                    .eq(s)
                    .nextAll(`[data-swiper-slide-index="${o.realIndex}"]`)
                    .eq(0)
                    .index();
                (e =
                  void 0 === a
                    ? r
                    : void 0 === r
                    ? a
                    : r - s == s - a
                    ? 1 < i.params.slidesPerGroup
                      ? r
                      : s
                    : r - s < s - a
                    ? r
                    : a),
                  (t = o.activeIndex > o.previousIndex ? 'next' : 'prev');
              } else (e = o.realIndex), (t = e > o.previousIndex ? 'next' : 'prev');
              l && (e += 'next' === t ? n : -1 * n),
                i.visibleSlidesIndexes &&
                  i.visibleSlidesIndexes.indexOf(e) < 0 &&
                  (i.params.centeredSlides
                    ? (e = e > s ? e - Math.floor(r / 2) + 1 : e + Math.floor(r / 2) - 1)
                    : e > s && i.params.slidesPerGroup,
                  i.slideTo(e, a ? 0 : void 0));
            }
            let t = 1;
            var s = o.params.thumbs.slideThumbActiveClass;
            if (
              (1 < o.params.slidesPerView &&
                !o.params.centeredSlides &&
                (t = o.params.slidesPerView),
              o.params.thumbs.multipleActiveThumbs || (t = 1),
              (t = Math.floor(t)),
              i.slides.removeClass(s),
              i.params.loop || (i.params.virtual && i.params.virtual.enabled))
            )
              for (let e = 0; e < t; e += 1)
                i.$wrapperEl.children(`[data-swiper-slide-index="${o.realIndex + e}"]`).addClass(s);
            else for (let e = 0; e < t; e += 1) i.slides.eq(o.realIndex + e).addClass(s);
          }
        }
        (o.thumbs = { swiper: null }),
          s('beforeInit', () => {
            var e = o.params['thumbs'];
            e && e.swiper && (n(), l(!0));
          }),
          s('slideChange update resize observerUpdate', () => {
            l();
          }),
          s('setTransition', (e, t) => {
            const s = o.thumbs.swiper;
            s && !s.destroyed && s.setTransition(t);
          }),
          s('beforeDestroy', () => {
            const e = o.thumbs.swiper;
            e && !e.destroyed && i && e.destroy();
          }),
          Object.assign(o.thumbs, { init: n, update: l });
      },
      function (e) {
        let { swiper: u, extendParams: t, emit: h, once: m } = e;
        t({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(u, {
            freeMode: {
              onTouchStart: function () {
                var e = u.getTranslate();
                u.setTranslate(e),
                  u.setTransition(0),
                  (u.touchEventsData.velocities.length = 0),
                  u.freeMode.onTouchEnd({ currentPos: u.rtl ? u.translate : -u.translate });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: t } = u;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: t[u.isHorizontal() ? 'startX' : 'startY'],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: t[u.isHorizontal() ? 'currentX' : 'currentY'],
                    time: g(),
                  });
              },
              onTouchEnd: function (r) {
                let n = r['currentPos'];
                const {
                    params: l,
                    $wrapperEl: o,
                    rtlTranslate: d,
                    snapGrid: p,
                    touchEventsData: c,
                  } = u,
                  e = g() - c.touchStartTime;
                if (n < -u.minTranslate()) u.slideTo(u.activeIndex);
                else if (n > -u.maxTranslate())
                  u.slides.length < p.length
                    ? u.slideTo(p.length - 1)
                    : u.slideTo(u.slides.length - 1);
                else {
                  if (l.freeMode.momentum) {
                    if (1 < c.velocities.length) {
                      const r = c.velocities.pop(),
                        n = c.velocities.pop(),
                        h = r.position - n.position,
                        m = r.time - n.time;
                      (u.velocity = h / m),
                        (u.velocity /= 2),
                        Math.abs(u.velocity) < l.freeMode.minimumVelocity && (u.velocity = 0),
                        (150 < m || 300 < g() - r.time) && (u.velocity = 0);
                    } else u.velocity = 0;
                    (u.velocity *= l.freeMode.momentumVelocityRatio), (c.velocities.length = 0);
                    let e = 1e3 * l.freeMode.momentumRatio;
                    const n = u.velocity * e;
                    let s = u.translate + n;
                    d && (s = -s);
                    let t,
                      a = !1;
                    r = 20 * Math.abs(u.velocity) * l.freeMode.momentumBounceRatio;
                    let i;
                    if (s < u.maxTranslate())
                      l.freeMode.momentumBounce
                        ? (s + u.maxTranslate() < -r && (s = u.maxTranslate() - r),
                          (t = u.maxTranslate()),
                          (a = !0),
                          (c.allowMomentumBounce = !0))
                        : (s = u.maxTranslate()),
                        l.loop && l.centeredSlides && (i = !0);
                    else if (s > u.minTranslate())
                      l.freeMode.momentumBounce
                        ? (s - u.minTranslate() > r && (s = u.minTranslate() + r),
                          (t = u.minTranslate()),
                          (a = !0),
                          (c.allowMomentumBounce = !0))
                        : (s = u.minTranslate()),
                        l.loop && l.centeredSlides && (i = !0);
                    else if (l.freeMode.sticky) {
                      let t;
                      for (let e = 0; e < p.length; e += 1)
                        if (p[e] > -s) {
                          t = e;
                          break;
                        }
                      s = -(s =
                        Math.abs(p[t] - s) < Math.abs(p[t - 1] - s) || 'next' === u.swipeDirection
                          ? p[t]
                          : p[t - 1]);
                    }
                    if (
                      (i &&
                        m('transitionEnd', () => {
                          u.loopFix();
                        }),
                      0 !== u.velocity)
                    ) {
                      if (
                        ((e = d
                          ? Math.abs((-s - u.translate) / u.velocity)
                          : Math.abs((s - u.translate) / u.velocity)),
                        l.freeMode.sticky)
                      ) {
                        const n = Math.abs((d ? -s : s) - u.translate),
                          h = u.slidesSizesGrid[u.activeIndex];
                        e = n < h ? l.speed : n < 2 * h ? 1.5 * l.speed : 2.5 * l.speed;
                      }
                    } else if (l.freeMode.sticky) return void u.slideToClosest();
                    l.freeMode.momentumBounce && a
                      ? (u.updateProgress(t),
                        u.setTransition(e),
                        u.setTranslate(s),
                        u.transitionStart(!0, u.swipeDirection),
                        (u.animating = !0),
                        o.transitionEnd(() => {
                          u &&
                            !u.destroyed &&
                            c.allowMomentumBounce &&
                            (h('momentumBounce'),
                            u.setTransition(l.speed),
                            setTimeout(() => {
                              u.setTranslate(t),
                                o.transitionEnd(() => {
                                  u && !u.destroyed && u.transitionEnd();
                                });
                            }, 0));
                        }))
                      : u.velocity
                      ? (h('_freeModeNoMomentumRelease'),
                        u.updateProgress(s),
                        u.setTransition(e),
                        u.setTranslate(s),
                        u.transitionStart(!0, u.swipeDirection),
                        u.animating ||
                          ((u.animating = !0),
                          o.transitionEnd(() => {
                            u && !u.destroyed && u.transitionEnd();
                          })))
                      : u.updateProgress(s),
                      u.updateActiveIndex(),
                      u.updateSlidesClasses();
                  } else {
                    if (l.freeMode.sticky) return void u.slideToClosest();
                    l.freeMode && h('_freeModeNoMomentumRelease');
                  }
                  (!l.freeMode.momentum || e >= l.longSwipesMs) &&
                    (u.updateProgress(), u.updateActiveIndex(), u.updateSlidesClasses());
                }
              },
            },
          });
      },
      function (e) {
        let c,
          u,
          h,
          { swiper: m, extendParams: t } = e;
        t({ grid: { rows: 1, fill: 'column' } }),
          (m.grid = {
            initSlides: (e) => {
              var t = m.params['slidesPerView'],
                { rows: s, fill: a } = m.params.grid;
              (u = c / s),
                (h = Math.floor(e / s)),
                (c = Math.floor(e / s) === e / s ? e : Math.ceil(e / s) * s),
                'auto' !== t && 'row' === a && (c = Math.max(c, t * s));
            },
            updateSlide: (e, t, s, a) => {
              var { slidesPerGroup: i, spaceBetween: r } = m.params,
                { rows: n, fill: l } = m.params.grid;
              let o, d, p;
              if ('row' === l && 1 < i) {
                const u = Math.floor(e / (i * n)),
                  h = e - n * i * u,
                  m = 0 === u ? i : Math.min(Math.ceil((s - u * n * i) / n), i);
                (p = Math.floor(h / m)),
                  (o = (d = h - p * m + u * i) + (p * c) / n),
                  t.css({ '-webkit-order': o, order: o });
              } else
                'column' === l
                  ? ((d = Math.floor(e / n)),
                    (p = e - d * n),
                    (d > h || (d === h && p === n - 1)) && (p += 1) >= n && ((p = 0), (d += 1)))
                  : ((p = Math.floor(e / u)), (d = e - p * u));
              t.css(a('margin-top'), 0 !== p ? r && r + 'px' : '');
            },
            updateWrapperSize: (s, a, e) => {
              var { spaceBetween: t, centeredSlides: i, roundLengths: r } = m.params,
                n = m.params.grid['rows'];
              if (
                ((m.virtualSize = (s + t) * c),
                (m.virtualSize = Math.ceil(m.virtualSize / n) - t),
                m.$wrapperEl.css({ [e('width')]: m.virtualSize + t + 'px' }),
                i)
              ) {
                a.splice(0, a.length);
                const s = [];
                for (let t = 0; t < a.length; t += 1) {
                  let e = a[t];
                  r && (e = Math.floor(e)), a[t] < m.virtualSize + a[0] && s.push(e);
                }
                a.push(...s);
              }
            },
          });
      },
      function (e) {
        e = e.swiper;
        Object.assign(e, {
          appendSlide: function (t) {
            const { $wrapperEl: s, params: e } = this;
            if ((e.loop && this.loopDestroy(), 'object' == typeof t && 'length' in t))
              for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
            else s.append(t);
            e.loop && this.loopCreate(), e.observer || this.update();
          }.bind(e),
          prependSlide: function (t) {
            const e = this,
              { params: s, $wrapperEl: a, activeIndex: i } = e;
            s.loop && e.loopDestroy();
            let r = i + 1;
            if ('object' == typeof t && 'length' in t) {
              for (let e = 0; e < t.length; e += 1) t[e] && a.prepend(t[e]);
              r = i + t.length;
            } else a.prepend(t);
            s.loop && e.loopCreate(), s.observer || e.update(), e.slideTo(r, 0, !1);
          }.bind(e),
          addSlide: function (t, s) {
            const a = this,
              { $wrapperEl: i, params: r, activeIndex: e } = a;
            let n = e;
            r.loop &&
              ((n -= a.loopedSlides), a.loopDestroy(), (a.slides = i.children('.' + r.slideClass)));
            var l = a.slides.length;
            if (t <= 0) a.prependSlide(s);
            else if (l <= t) a.appendSlide(s);
            else {
              let e = n > t ? n + 1 : n;
              const o = [];
              for (let e = l - 1; e >= t; --e) {
                const t = a.slides.eq(e);
                t.remove(), o.unshift(t);
              }
              if ('object' == typeof s && 'length' in s) {
                for (let e = 0; e < s.length; e += 1) s[e] && i.append(s[e]);
                e = n > t ? n + s.length : n;
              } else i.append(s);
              for (let e = 0; e < o.length; e += 1) i.append(o[e]);
              r.loop && a.loopCreate(),
                r.observer || a.update(),
                r.loop ? a.slideTo(e + a.loopedSlides, 0, !1) : a.slideTo(e, 0, !1);
            }
          }.bind(e),
          removeSlide: function (t) {
            const s = this,
              { params: e, $wrapperEl: a, activeIndex: i } = s;
            let r = i;
            e.loop &&
              ((r -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children('.' + e.slideClass)));
            let n,
              l = r;
            if ('object' == typeof t && 'length' in t) {
              for (let e = 0; e < t.length; e += 1)
                (n = t[e]), s.slides[n] && s.slides.eq(n).remove(), n < l && --l;
              l = Math.max(l, 0);
            } else
              (n = t), s.slides[n] && s.slides.eq(n).remove(), n < l && --l, (l = Math.max(l, 0));
            e.loop && s.loopCreate(),
              e.observer || s.update(),
              e.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
          }.bind(e),
          removeAllSlides: function () {
            const t = [];
            for (let e = 0; e < this.slides.length; e += 1) t.push(e);
            this.removeSlide(t);
          }.bind(e),
        });
      },
      function (e) {
        let { swiper: n, extendParams: t, on: s } = e;
        t({ fadeEffect: { crossFade: !1, transformEl: null } }),
          k({
            effect: 'fade',
            swiper: n,
            on: s,
            setTranslate: () => {
              const a = n['slides'],
                i = n.params.fadeEffect;
              for (let s = 0; s < a.length; s += 1) {
                const a = n.slides.eq(s);
                let e = -a[0].swiperSlideOffset,
                  t = (n.params.virtualTranslate || (e -= n.translate), 0);
                n.isHorizontal() || ((t = e), (e = 0));
                var r = n.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(a[0].progress), 0)
                  : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                z(i, a).css({ opacity: r }).transform(`translate3d(${e}px, ${t}px, 0px)`);
              }
            },
            setTransition: (e) => {
              var t = n.params.fadeEffect['transformEl'];
              (t ? n.slides.find(t) : n.slides).transition(e),
                A({ swiper: n, duration: e, transformEl: t, allSlides: !0 });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !n.params.cssMode,
            }),
          });
      },
      function (e) {
        let { swiper: f, extendParams: t, on: s } = e;
        t({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
        const v = (e, t, s) => {
          let a = s ? e.find('.swiper-slide-shadow-left') : e.find('.swiper-slide-shadow-top'),
            i = s ? e.find('.swiper-slide-shadow-right') : e.find('.swiper-slide-shadow-bottom');
          0 === a.length &&
            ((a = O(`<div class="swiper-slide-shadow-${s ? 'left' : 'top'}"></div>`)), e.append(a)),
            0 === i.length &&
              ((i = O(`<div class="swiper-slide-shadow-${s ? 'right' : 'bottom'}"></div>`)),
              e.append(i)),
            a.length && (a[0].style.opacity = Math.max(-t, 0)),
            i.length && (i[0].style.opacity = Math.max(t, 0));
        };
        k({
          effect: 'cube',
          swiper: f,
          on: s,
          setTranslate: () => {
            const {
                $el: e,
                $wrapperEl: t,
                slides: l,
                width: s,
                height: a,
                rtlTranslate: o,
                size: d,
                browser: i,
              } = f,
              p = f.params.cubeEffect,
              c = f.isHorizontal(),
              u = f.virtual && f.params.virtual.enabled;
            let r,
              h = 0;
            p.shadow &&
              (c
                ? (0 === (r = t.find('.swiper-cube-shadow')).length &&
                    ((r = O('<div class="swiper-cube-shadow"></div>')), t.append(r)),
                  r.css({ height: s + 'px' }))
                : 0 === (r = e.find('.swiper-cube-shadow')).length &&
                  ((r = O('<div class="swiper-cube-shadow"></div>')), e.append(r)));
            for (let n = 0; n < l.length; n += 1) {
              const f = l.eq(n);
              let e = n,
                t = 90 * (e = u ? parseInt(f.attr('data-swiper-slide-index'), 10) : e),
                s = Math.floor(t / 360);
              o && ((t = -t), (s = Math.floor(-t / 360)));
              const O = Math.max(Math.min(f[0].progress, 1), -1);
              let a = 0,
                i = 0,
                r = 0;
              e % 4 == 0
                ? ((a = 4 * -s * d), (r = 0))
                : (e - 1) % 4 == 0
                ? ((a = 0), (r = 4 * -s * d))
                : (e - 2) % 4 == 0
                ? ((a = d + 4 * s * d), (r = d))
                : (e - 3) % 4 == 0 && ((a = -d), (r = 3 * d + 4 * d * s)),
                o && (a = -a),
                c || ((i = a), (a = 0));
              var m = `rotateX(${c ? 0 : -t}deg) rotateY(${
                c ? t : 0
              }deg) translate3d(${a}px, ${i}px, ${r}px)`;
              O <= 1 && -1 < O && ((h = 90 * e + 90 * O), o && (h = 90 * -e - 90 * O)),
                f.transform(m),
                p.slideShadows && v(f, O, c);
            }
            if (
              (t.css({
                '-webkit-transform-origin': `50% 50% -${d / 2}px`,
                'transform-origin': `50% 50% -${d / 2}px`,
              }),
              p.shadow)
            )
              if (c)
                r.transform(
                  `translate3d(0px, ${s / 2 + p.shadowOffset}px, ${
                    -s / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`,
                );
              else {
                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  f =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                  t = p.shadowScale,
                  l = p.shadowScale / f,
                  v = p.shadowOffset;
                r.transform(
                  `scale3d(${t}, 1, ${l}) translate3d(0px, ${a / 2 + v}px, ${
                    -a / 2 / l
                  }px) rotateX(-90deg)`,
                );
              }
            var n = i.isSafari || i.isWebView ? -d / 2 : 0;
            t.transform(
              `translate3d(0px,0,${n}px) rotateX(${f.isHorizontal() ? 0 : h}deg) rotateY(${
                f.isHorizontal() ? -h : 0
              }deg)`,
            ),
              t[0].style.setProperty('--swiper-cube-translate-z', n + 'px');
          },
          setTransition: (e) => {
            const { $el: t, slides: s } = f;
            s
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .transition(e),
              f.params.cubeEffect.shadow &&
                !f.isHorizontal() &&
                t.find('.swiper-cube-shadow').transition(e);
          },
          recreateShadows: () => {
            const s = f.isHorizontal();
            f.slides.each((e) => {
              var t = Math.max(Math.min(e.progress, 1), -1);
              v(O(e), t, s);
            });
          },
          getEffectParams: () => f.params.cubeEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0,
          }),
        });
      },
      function (e) {
        let { swiper: c, extendParams: t, on: s } = e;
        t({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
        const u = (e, t, s) => {
          let a = c.isHorizontal()
              ? e.find('.swiper-slide-shadow-left')
              : e.find('.swiper-slide-shadow-top'),
            i = c.isHorizontal()
              ? e.find('.swiper-slide-shadow-right')
              : e.find('.swiper-slide-shadow-bottom');
          0 === a.length && (a = D(s, e, c.isHorizontal() ? 'left' : 'top')),
            0 === i.length && (i = D(s, e, c.isHorizontal() ? 'right' : 'bottom')),
            a.length && (a[0].style.opacity = Math.max(-t, 0)),
            i.length && (i[0].style.opacity = Math.max(t, 0));
        };
        k({
          effect: 'flip',
          swiper: c,
          on: s,
          setTranslate: () => {
            const { slides: n, rtlTranslate: l } = c,
              o = c.params.flipEffect;
            for (let r = 0; r < n.length; r += 1) {
              const p = n.eq(r);
              let e = p[0].progress;
              c.params.flipEffect.limitRotation && (e = Math.max(Math.min(p[0].progress, 1), -1));
              var d = p[0].swiperSlideOffset;
              let t = -180 * e,
                s = 0,
                a = c.params.cssMode ? -d - c.translate : -d,
                i = 0;
              c.isHorizontal() ? l && (t = -t) : ((i = a), (a = 0), (s = -t), (t = 0)),
                (p[0].style.zIndex = -Math.abs(Math.round(e)) + n.length),
                o.slideShadows && u(p, e, o);
              d = `translate3d(${a}px, ${i}px, 0px) rotateX(${s}deg) rotateY(${t}deg)`;
              z(o, p).transform(d);
            }
          },
          setTransition: (e) => {
            var t = c.params.flipEffect['transformEl'];
            (t ? c.slides.find(t) : c.slides)
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
              )
              .transition(e),
              A({ swiper: c, duration: e, transformEl: t });
          },
          recreateShadows: () => {
            const a = c.params.flipEffect;
            c.slides.each((e) => {
              var t = O(e);
              let s = t[0].progress;
              c.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)),
                u(t, s, a);
            });
          },
          getEffectParams: () => c.params.flipEffect,
          perspective: () => !0,
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !c.params.cssMode,
          }),
        });
      },
      function (e) {
        let { swiper: b, extendParams: t, on: s } = e;
        t({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          k({
            effect: 'coverflow',
            swiper: b,
            on: s,
            setTranslate: () => {
              const { width: e, height: o, slides: d, slidesSizesGrid: p } = b,
                c = b.params.coverflowEffect,
                u = b.isHorizontal(),
                h = b.translate,
                m = u ? e / 2 - h : o / 2 - h,
                f = u ? c.rotate : -c.rotate,
                v = c.depth;
              for (let l = 0, e = d.length; l < e; l += 1) {
                const b = d.eq(l),
                  o = p[l],
                  h = (m - b[0].swiperSlideOffset - o / 2) / o,
                  w = 'function' == typeof c.modifier ? c.modifier(h) : h * c.modifier;
                let e = u ? f * w : 0,
                  t = u ? 0 : f * w,
                  s = -v * Math.abs(w),
                  a = c.stretch,
                  i =
                    ('string' == typeof a &&
                      -1 !== a.indexOf('%') &&
                      (a = (parseFloat(c.stretch) / 100) * o),
                    u ? 0 : a * w),
                  r = u ? a * w : 0,
                  n = 1 - (1 - c.scale) * Math.abs(w);
                Math.abs(r) < 0.001 && (r = 0),
                  Math.abs(i) < 0.001 && (i = 0),
                  Math.abs(s) < 0.001 && (s = 0),
                  Math.abs(e) < 0.001 && (e = 0),
                  Math.abs(t) < 0.001 && (t = 0),
                  Math.abs(n) < 0.001 && (n = 0);
                var g = `translate3d(${r}px,${i}px,${s}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${n})`;
                if (
                  (z(c, b).transform(g),
                  (b[0].style.zIndex = 1 - Math.abs(Math.round(w))),
                  c.slideShadows)
                ) {
                  let e = u
                      ? b.find('.swiper-slide-shadow-left')
                      : b.find('.swiper-slide-shadow-top'),
                    t = u
                      ? b.find('.swiper-slide-shadow-right')
                      : b.find('.swiper-slide-shadow-bottom');
                  0 === e.length && (e = D(c, b, u ? 'left' : 'top')),
                    0 === t.length && (t = D(c, b, u ? 'right' : 'bottom')),
                    e.length && (e[0].style.opacity = 0 < w ? w : 0),
                    t.length && (t[0].style.opacity = 0 < -w ? -w : 0);
                }
              }
            },
            setTransition: (e) => {
              var t = b.params.coverflowEffect['transformEl'];
              (t ? b.slides.find(t) : b.slides)
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                )
                .transition(e);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      },
      function (e) {
        let { swiper: b, extendParams: t, on: s } = e;
        t({
          creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
            next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
          },
        });
        k({
          effect: 'creative',
          swiper: b,
          on: s,
          setTranslate: () => {
            const { slides: i, $wrapperEl: e, slidesSizesGrid: r } = b,
              n = b.params.creativeEffect,
              l = n['progressMultiplier'],
              o = b.params.centeredSlides;
            if (o) {
              const i = r[0] / 2 - b.params.slidesOffsetBefore || 0;
              e.transform(`translateX(calc(50% - ${i}px))`);
            }
            for (let a = 0; a < i.length; a += 1) {
              const r = i.eq(a),
                h = r[0].progress,
                m = Math.min(Math.max(r[0].progress, -n.limitProgress), n.limitProgress);
              let e = m;
              o ||
                (e = Math.min(Math.max(r[0].originalProgress, -n.limitProgress), n.limitProgress));
              const f = r[0].swiperSlideOffset,
                v = [b.params.cssMode ? -f - b.translate : -f, 0, 0],
                g = [0, 0, 0];
              let t = !1,
                s =
                  (b.isHorizontal() || ((v[1] = v[0]), (v[0] = 0)),
                  { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 });
              m < 0 ? ((s = n.next), (t = !0)) : 0 < m && ((s = n.prev), (t = !0)),
                v.forEach((e, t) => {
                  v[t] = `calc(${e}px + (${
                    ((e = s.translate[t]), 'string' == typeof e ? e : e + 'px')
                  } * ${Math.abs(m * l)}))`;
                }),
                g.forEach((e, t) => {
                  g[t] = s.rotate[t] * Math.abs(m * l);
                }),
                (r[0].style.zIndex = -Math.abs(Math.round(h)) + i.length);
              var d = v.join(', '),
                p = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                c =
                  e < 0
                    ? `scale(${1 + (1 - s.scale) * e * l})`
                    : `scale(${1 - (1 - s.scale) * e * l})`,
                u = e < 0 ? 1 + (1 - s.opacity) * e * l : 1 - (1 - s.opacity) * e * l,
                d = `translate3d(${d}) ${p} ` + c;
              if ((t && s.shadow) || !t) {
                let e = r.children('.swiper-slide-shadow');
                if ((e = 0 === e.length && s.shadow ? D(n, r) : e).length) {
                  const b = n.shadowPerProgress ? m * (1 / n.limitProgress) : m;
                  e[0].style.opacity = Math.min(Math.max(Math.abs(b), 0), 1);
                }
              }
              const w = z(n, r);
              w.transform(d).css({ opacity: u }), s.origin && w.css('transform-origin', s.origin);
            }
          },
          setTransition: (e) => {
            var t = b.params.creativeEffect['transformEl'];
            (t ? b.slides.find(t) : b.slides)
              .transition(e)
              .find('.swiper-slide-shadow')
              .transition(e),
              A({ swiper: b, duration: e, transformEl: t, allSlides: !0 });
          },
          perspective: () => b.params.creativeEffect.perspective,
          overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !b.params.cssMode }),
        });
      },
      function (e) {
        let { swiper: b, extendParams: t, on: s } = e;
        t({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0 } }),
          k({
            effect: 'cards',
            swiper: b,
            on: s,
            setTranslate: () => {
              const { slides: l, activeIndex: o } = b,
                d = b.params.cardsEffect,
                { startTranslate: p, isTouched: c } = b.touchEventsData,
                u = b.translate;
              for (let n = 0; n < l.length; n += 1) {
                const v = l.eq(n),
                  g = v[0].progress,
                  w = Math.min(Math.max(g, -4), 4);
                let e = v[0].swiperSlideOffset,
                  t =
                    (b.params.centeredSlides &&
                      !b.params.cssMode &&
                      b.$wrapperEl.transform(`translateX(${b.minTranslate()}px)`),
                    b.params.centeredSlides && b.params.cssMode && (e -= l[0].swiperSlideOffset),
                    b.params.cssMode ? -e - b.translate : -e),
                  s = 0;
                var h = -100 * Math.abs(w);
                let a = 1,
                  i = -2 * w,
                  r = 8 - 0.75 * Math.abs(w);
                var m = b.virtual && b.params.virtual.enabled ? b.virtual.from + n : n,
                  f =
                    (m === o || m === o - 1) && 0 < w && w < 1 && (c || b.params.cssMode) && u < p,
                  m =
                    (m === o || m === o + 1) && w < 0 && -1 < w && (c || b.params.cssMode) && p < u;
                if (f || m) {
                  const l = (1 - Math.abs((Math.abs(w) - 0.5) / 0.5)) ** 0.5;
                  (i += -28 * w * l),
                    (a += -0.5 * l),
                    (r += 96 * l),
                    (s = -25 * l * Math.abs(w) + '%');
                }
                if (
                  ((t =
                    w < 0
                      ? `calc(${t}px + (${r * Math.abs(w)}%))`
                      : 0 < w
                      ? `calc(${t}px + (-${r * Math.abs(w)}%))`
                      : t + 'px'),
                  !b.isHorizontal())
                ) {
                  const l = s;
                  (s = t), (t = l);
                }
                (f = w < 0 ? '' + (1 + (1 - a) * w) : '' + (1 - (1 - a) * w)),
                  (m = `
        translate3d(${t}, ${s}, ${h}px)
        rotateZ(${d.rotate ? i : 0}deg)
        scale(${f})
      `);
                if (d.slideShadows) {
                  let e = v.find('.swiper-slide-shadow');
                  (e = 0 === e.length ? D(d, v) : e).length &&
                    (e[0].style.opacity = Math.min(Math.max((Math.abs(w) - 0.5) / 0.5, 0), 1));
                }
                (v[0].style.zIndex = -Math.abs(Math.round(g)) + l.length), z(d, v).transform(m);
              }
            },
            setTransition: (e) => {
              var t = b.params.cardsEffect['transformEl'];
              (t ? b.slides.find(t) : b.slides)
                .transition(e)
                .find('.swiper-slide-shadow')
                .transition(e),
                A({ swiper: b, duration: e, transformEl: t });
            },
            perspective: () => !0,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !b.params.cssMode,
            }),
          });
      },
    ]),
    C
  );
}),
  document.addEventListener('DOMContentLoaded', function () {
    {
      const n = document.querySelector('.js-FilterForm-opener');
      n &&
        n.addEventListener('click', function () {
          this.classList.toggle('is-open');
        });
    }
    {
      const l = document.querySelector('.js-FilterForm-more'),
        o = document.querySelector('.js-FilterForm-wrap');
      l &&
        o &&
        l.addEventListener('click', function () {
          (this.style.display = 'none'), o.classList.remove('FilterForm-wrap--fixedHeight');
        });
    }
    {
      const d = document.querySelector('body'),
        p = document.querySelector('.js-Header-openButton');
      d &&
        p &&
        p.addEventListener('click', function () {
          d.classList.add('is-nav-open');
        });
    }
    {
      const c = document.querySelector('body'),
        u = document.querySelector('.js-MainNav-closeButton');
      c &&
        u &&
        u.addEventListener('click', function () {
          c.classList.remove('is-nav-open');
        });
    }
    {
      const h = document.querySelector('body'),
        m = document.querySelector('.js-Header-searchOpener');
      h &&
        m &&
        m.addEventListener('click', function () {
          h.classList.add('is-search-open');
        });
    }
    {
      const f = document.querySelector('body'),
        v = document.querySelector('.js-Search-close');
      f &&
        v &&
        v.addEventListener('click', function () {
          f.classList.remove('is-search-open');
        });
    }
    new Swiper('.js-SliderSection-swiper', {
      slidesPerView: 'auto',
      loop: !0,
      navigation: { prevEl: '.swiper-button-prev' },
    });
    var e,
      t = document.querySelectorAll('.Content table');
    for (e = 0; e < t.length; ++e) {
      var s = document.createElement('div');
      s.classList.add('table-responsive'),
        t[e].parentNode.insertBefore(s, t[e]),
        s.appendChild(t[e]);
    }
    var a,
      i = document.querySelectorAll('.Content iframe');
    for (a = 0; a < i.length; ++a) {
      i[a].removeAttribute('height'), i[a].removeAttribute('width');
      var r = document.createElement('div');
      r.classList.add('ratio'),
        r.classList.add('ratio-16x9'),
        i[a].parentNode.insertBefore(r, i[a]),
        r.appendChild(i[a]);
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.big-ban');

  if (slides.length > 0) {
    function showSlide(index) {
      slides[currentSlide].style.display = 'none';
      slides[index].style.display = 'block';
      currentSlide = index;
    }

    function nextSlide() {
      let nextIndex = currentSlide + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);
  } else {
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.slider-bans__inner');
  const slideItems = document.querySelectorAll('.slider-bans__item');

  if (!sliderContainer || !slideItems.length) {
    return;
  }
  const numSlides = slideItems.length;
  const slidesToShow = 4;
  let currentIndex = 0;
  let isTransitioning = false;
  const clonedSlides = Array.from(slideItems).map((slide) => slide.cloneNode(true));
  clonedSlides.forEach((slide) => sliderContainer.appendChild(slide));

  function showSlide(index) {
    if (!isTransitioning) {
      isTransitioning = true;
      currentIndex = index;
      const translateX = -(index * (100 / slidesToShow));
      sliderContainer.style.transition = 'transform 1s ease-in-out';
      sliderContainer.style.transform = `translateX(${translateX}%)`;

      // Убираем переход после окончания анимации
      setTimeout(() => {
        isTransitioning = false;
        sliderContainer.style.transition = 'none';

        // Если текущий индекс находится в клонированных слайдах, перейдите к соответствующему оригинальному слайду
        if (currentIndex >= numSlides) {
          currentIndex = currentIndex - numSlides;
          const translateX = -(currentIndex * (100 / slidesToShow));
          sliderContainer.style.transform = `translateX(${translateX}%)`;
        }
      }, 1000);
    }
  }

  function nextSlide() {
    if (!isTransitioning) {
      currentIndex++;
      showSlide(currentIndex);
    }
  }

  setInterval(nextSlide, 5000);
});

$(document).ready(function () {
  if ($('#animated-thumbnail').length > 0) {
    $('#animated-thumbnail').lightGallery({
      thumbnail: true,
      getCaptionFromTitleOrAlt: true,
      selector: 'a[style]',
    });
  } else {
    console.log(' ');
  }
});

// Image Transition
var scroll = 'yes',
  Fscroll = scroll.replace(/(\r\n|\n|\r)/gm, ' ');
'yes' === Fscroll &&
  ($(document).ready(function () {
    $('body').addClass('imgani');
  }),
  $(window).bind('load resize scroll', function () {
    var o = $(this).height();
    $('img').each(function () {
      var s = 0.1 * $(this).height() - o + $(this).offset().top;
      $(document).scrollTop() > s && $(this).addClass('anime');
    });
  }));
$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('body').on('click', '.nav-tabs a', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab('show');
  });
});

var deliveryCheckbox = document.getElementById('deliveryCheckbox');

if (deliveryCheckbox) {
  deliveryCheckbox.addEventListener('change', function () {
    var deliveryAddress = document.getElementById('deliveryAddress');
    if (deliveryAddress) {
      deliveryAddress.style.display = deliveryCheckbox.checked ? 'block' : 'none';
    }
  });
} else {
}

document.addEventListener('DOMContentLoaded', function () {
  window.closePopup = function () {
    var popup = document.getElementById('MlctrClose');
    if (popup) {
      popup.style.display = 'none';
    }
  };

  window.checkAndClosePopupIfEmpty = function () {
    setTimeout(function () {
      var popupContent = document.querySelector('.content');

      if (!popupContent.innerHTML.trim() || popupContent.children.length === 0) {
        window.closePopup();
      }
    }, 2000);
  };

  window.checkAndClosePopupIfEmpty();
});
