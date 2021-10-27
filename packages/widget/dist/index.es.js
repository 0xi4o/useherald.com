var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop2 in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop2))
      __defNormalProp(a, prop2, b2[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop2))
        __defNormalProp(a, prop2, b2[prop2]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
import React, { createContext, useContext, useState, createElement, useRef, useCallback, useDebugValue, useEffect, useLayoutEffect, Fragment, isValidElement, cloneElement, forwardRef, useReducer, useMemo } from "react";
var index = "";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign$2.apply(this, arguments);
};
var __rest = function(s2, e) {
  var t = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
      t[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s2); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i]))
        t[p2[i]] = s2[p2[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node2, i) {
    return React.createElement(node2.tag, __assign$2({
      key: i
    }, node2.attr), Tree2Element(node2.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React.createElement(IconBase, __assign$2({
      attr: __assign$2({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign$2({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign$2(__assign$2({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function HiOutlineArrowNarrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "stroke": "currentColor" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "strokeWidth": "2", "d": "M17 8l4 4m0 0l-4 4m4-4H3" } }] })(props);
}
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
function l(e, r, n, t) {
  return new (n || (n = Promise))(function(i, u) {
    function o(e2) {
      try {
        c(t.next(e2));
      } catch (e3) {
        u(e3);
      }
    }
    function a(e2) {
      try {
        c(t.throw(e2));
      } catch (e3) {
        u(e3);
      }
    }
    function c(e2) {
      var r2;
      e2.done ? i(e2.value) : (r2 = e2.value, r2 instanceof n ? r2 : new n(function(e3) {
        e3(r2);
      })).then(o, a);
    }
    c((t = t.apply(e, r || [])).next());
  });
}
function s(e, r) {
  var n, t, i, u, o = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] };
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(u2) {
    return function(a2) {
      return function(u3) {
        if (n)
          throw new TypeError("Generator is already executing.");
        for (; o; )
          try {
            if (n = 1, t && (i = 2 & u3[0] ? t.return : u3[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, u3[1])).done)
              return i;
            switch (t = 0, i && (u3 = [2 & u3[0], i.value]), u3[0]) {
              case 0:
              case 1:
                i = u3;
                break;
              case 4:
                return o.label++, { value: u3[1], done: false };
              case 5:
                o.label++, t = u3[1], u3 = [0];
                continue;
              case 7:
                u3 = o.ops.pop(), o.trys.pop();
                continue;
              default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || u3[0] !== 6 && u3[0] !== 2)) {
                  o = 0;
                  continue;
                }
                if (u3[0] === 3 && (!i || u3[1] > i[0] && u3[1] < i[3])) {
                  o.label = u3[1];
                  break;
                }
                if (u3[0] === 6 && o.label < i[1]) {
                  o.label = i[1], i = u3;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(u3);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            u3 = r.call(e, o);
          } catch (e2) {
            u3 = [6, e2], t = 0;
          } finally {
            n = i = 0;
          }
        if (5 & u3[0])
          throw u3[1];
        return { value: u3[0] ? u3[1] : void 0, done: true };
      }([u2, a2]);
    };
  }
}
var d = {}[0], v = function(e) {
  return e === d;
}, h = function(e) {
  return typeof e == "function";
}, g = function() {
}, p = function(e, r) {
  return Object.assign({}, e, r);
}, y = true, b = typeof window != "undefined", w = typeof document != "undefined", m = b && window.addEventListener || g, O = w && document.addEventListener || g, V$1 = { isOnline: function() {
  return y;
}, isVisible: function() {
  var e = w && document.visibilityState;
  return !!v(e) || e !== "hidden";
} }, k = { initFocus: function(e) {
  O("visibilitychange", e), m("focus", e);
}, initReconnect: function(e) {
  m("online", function() {
    y = true, e();
  }), m("offline", function() {
    y = false;
  });
} }, T = typeof window == "undefined" || "Deno" in window, R = T ? null : window.requestAnimationFrame, S = R ? function(e) {
  return R(e);
} : function(e) {
  return setTimeout(e, 1);
}, E = T ? useEffect : useLayoutEffect, I$1 = typeof navigator != "undefined" && navigator.connection, x = !T && I$1 && (["slow-2g", "2g"].includes(I$1.effectiveType) || I$1.saveData), P = new WeakMap(), F = 0;
function M(e) {
  if (h(e))
    try {
      e = e();
    } catch (r2) {
      e = "";
    }
  var r;
  return Array.isArray(e) ? (r = e, e = function(e2) {
    if (!e2.length)
      return "";
    for (var r2 = "arg", n = 0; n < e2.length; ++n) {
      var t = e2[n], i = d;
      t === null || typeof t != "object" && !h(t) ? i = JSON.stringify(t) : P.has(t) ? i = P.get(t) : (i = F, P.set(t, F++)), r2 += "$" + i;
    }
    return r2;
  }(e)) : r = [e = String(e || "")], [e, r, e ? "$err$" + e : "", e ? "$req$" + e : ""];
}
var W = new WeakMap(), $ = function(e, r, n, t, i, u) {
  u === void 0 && (u = false);
  var o = W.get(e), a = o[0], c = o[1], f = a[r], l2 = c[r];
  if (l2)
    for (var s2 = 0; s2 < l2.length; ++s2)
      l2[s2](n, t, i);
  return u && f && f[0] ? f[0](2).then(function() {
    return e.get(r);
  }) : e.get(r);
}, q = 0, C = function() {
  return ++q;
}, D = function(e, r, n, t) {
  return t === void 0 && (t = true), l(void 0, void 0, void 0, function() {
    var i, u, o, a, c, f, l2, g2, p2, y2, b2;
    return s(this, function(s2) {
      switch (s2.label) {
        case 0:
          if (i = M(r), u = i[0], o = i[2], !u)
            return [2];
          if (a = W.get(e), c = a[2], f = a[3], v(n))
            return [2, $(e, u, e.get(u), e.get(o), d, t)];
          if (p2 = c[u] = C(), f[u] = 0, h(n))
            try {
              n = n(e.get(u));
            } catch (e2) {
              n = d, g2 = e2;
            }
          if (!n || !h(n.then))
            return [3, 5];
          s2.label = 1;
        case 1:
          return s2.trys.push([1, 3, , 4]), [4, n];
        case 2:
          return l2 = s2.sent(), [3, 4];
        case 3:
          return y2 = s2.sent(), g2 = y2, [3, 4];
        case 4:
          if (p2 !== c[u]) {
            if (g2)
              throw g2;
            return [2, l2];
          }
          return [3, 6];
        case 5:
          l2 = n, s2.label = 6;
        case 6:
          return v(l2) || e.set(u, l2), e.set(o, g2), f[u] = C(), [4, $(e, u, l2, g2, d, t)];
        case 7:
          if (b2 = s2.sent(), g2)
            throw g2;
          return [2, b2];
      }
    });
  });
};
function L(e, r) {
  for (var n in e)
    e[n][0] && e[n][0](r);
}
function j(e, r) {
  if (!W.has(e)) {
    var n = p(k, r), t = {}, i = D.bind(d, e);
    return W.set(e, [t, {}, {}, {}, {}, {}, i]), T || (n.initFocus(L.bind(d, t, 0)), n.initReconnect(L.bind(d, t, 1))), [e, i];
  }
}
var A = j(new Map()), G = A[0], H = A[1], J = p({ onLoadingSlow: g, onSuccess: g, onError: g, onErrorRetry: function(e, r, n, t, i) {
  if (V$1.isVisible()) {
    var u = n.errorRetryCount, o = i.retryCount, a = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
    !v(u) && o > u || setTimeout(t, a, i);
  }
}, revalidateOnFocus: true, revalidateOnReconnect: true, revalidateIfStale: true, shouldRetryOnError: true, errorRetryInterval: x ? 1e4 : 5e3, focusThrottleInterval: 5e3, dedupingInterval: 2e3, loadingTimeout: x ? 5e3 : 3e3, compare: dequal, isPaused: function() {
  return false;
}, cache: G, mutate: H, fallback: {} }, V$1);
function N(e, r) {
  var n = p(e, r);
  if (!r)
    return n;
  var t = e.use, i = e.fallback, u = r.use, o = r.fallback;
  return t && u && (n.use = t.concat(u)), i && o && (n.fallback = p(i, o)), n;
}
var z = createContext({});
function B(e) {
  return h(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}];
}
var K, Q = function(e, r, n) {
  var t = r[e] || (r[e] = []);
  return t.push(n), function() {
    var e2 = t.indexOf(n);
    e2 >= 0 && (t[e2] = t[t.length - 1], t.pop());
  };
}, U = { dedupe: true };
Object.defineProperty(function(e) {
  var r = e.children, n = e.value, o = N(useContext(z), n), a = n && n.provider, c = useState(function() {
    return a ? j(a(o.cache || G), n) : d;
  })[0];
  return c && (o.cache = c[0], o.mutate = c[1]), createElement(z.Provider, { value: o }, r);
}, "default", { value: J });
var Z = (K = function(e, r, n) {
  var t = n.cache, u = n.compare, f = n.fallbackData, h2 = n.suspense, g2 = n.revalidateOnMount, y2 = n.refreshInterval, b2 = n.refreshWhenHidden, w2 = n.refreshWhenOffline, m2 = W.get(t), O2 = m2[0], V2 = m2[1], k2 = m2[2], R2 = m2[3], I2 = m2[4], x2 = m2[5], P2 = M(e), F2 = P2[0], q2 = P2[1], L2 = P2[2], j2 = P2[3], A2 = useRef(false), G2 = useRef(false), H2 = useRef(F2), J2 = useRef(n), N2 = function() {
    return J2.current;
  }, z2 = t.get(F2), B2 = v(f) ? n.fallback[F2] : f, K2 = v(z2) ? B2 : z2, X = t.get(L2);
  if (h2 && (!F2 || !r))
    throw new Error("useSWR requires either key or fetcher with suspense mode");
  var Y = function() {
    return v(g2) ? h2 ? !A2.current && !v(K2) : v(K2) || n.revalidateIfStale : g2;
  }, Z2 = !(!F2 || !r) && (!!t.get(j2) || !A2.current && Y()), _ = function(e2, r2) {
    var n2 = useState({})[1], t2 = useRef(e2), u2 = useRef({ data: false, error: false, isValidating: false }), c = useCallback(function(e3) {
      var i = false, o = t2.current;
      for (var a in e3) {
        var c2 = a;
        o[c2] !== e3[c2] && (o[c2] = e3[c2], u2.current[c2] && (i = true));
      }
      i && !r2.current && n2({});
    }, []);
    return E(function() {
      t2.current = e2;
    }), [t2, u2.current, c];
  }({ data: K2, error: X, isValidating: Z2 }, G2), ee2 = _[0], re = _[1], ne2 = _[2], te = useCallback(function(e2) {
    return l(void 0, void 0, void 0, function() {
      var i, o, a, c, f2, l2, h3, g3, p2;
      return s(this, function(s2) {
        switch (s2.label) {
          case 0:
            if (!F2 || !r || G2.current || N2().isPaused())
              return [2, false];
            a = true, c = e2 || {}, f2 = !v(I2[F2]) && c.dedupe, l2 = function() {
              return !G2.current && F2 === H2.current && A2.current;
            }, h3 = function() {
              delete I2[F2], delete x2[F2];
            }, s2.label = 1;
          case 1:
            return s2.trys.push([1, 6, , 7]), t.set(j2, true), ne2({ isValidating: true }), f2 || $(t, F2, ee2.current.data, ee2.current.error, true), f2 ? (o = x2[F2], [4, I2[F2]]) : [3, 3];
          case 2:
            return i = s2.sent(), [3, 5];
          case 3:
            return n.loadingTimeout && !t.get(F2) && setTimeout(function() {
              a && l2() && N2().onLoadingSlow(F2, n);
            }, n.loadingTimeout), x2[F2] = o = C(), [4, I2[F2] = r.apply(r, q2)];
          case 4:
            i = s2.sent(), setTimeout(function() {
              x2[F2] === o && h3();
            }, n.dedupingInterval), l2() && N2().onSuccess(i, F2, n), s2.label = 5;
          case 5:
            return x2[F2] !== o ? [2, false] : (t.set(L2, d), t.set(j2, false), g3 = { isValidating: false }, !v(k2[F2]) && (o <= k2[F2] || o <= R2[F2] || R2[F2] === 0) ? (ne2(g3), [2, false]) : (v(ee2.current.error) || (g3.error = d), u(ee2.current.data, i) || (g3.data = i), u(t.get(F2), i) || t.set(F2, i), ne2(g3), f2 || $(t, F2, i, g3.error, false), [3, 7]));
          case 6:
            return p2 = s2.sent(), h3(), t.set(j2, false), N2().isPaused() ? (ne2({ isValidating: false }), [2, false]) : (t.set(L2, p2), ee2.current.error !== p2 && (ne2({ isValidating: false, error: p2 }), f2 || $(t, F2, d, p2, false)), l2() && (N2().onError(p2, F2, n), n.shouldRetryOnError && N2().onErrorRetry(p2, F2, n, te, { retryCount: (c.retryCount || 0) + 1, dedupe: true })), [3, 7]);
          case 7:
            return a = false, [2, true];
        }
      });
    });
  }, [F2]), ie = useCallback(function(e2, r2) {
    return D(t, H2.current, e2, r2);
  }, []);
  if (E(function() {
    J2.current = n;
  }), E(function() {
    if (F2) {
      var e2 = A2.current, r2 = te.bind(d, U), n2 = function() {
        return N2().isVisible() && N2().isOnline();
      }, t2 = 0, i = Q(F2, V2, function(e3, r3, n3) {
        ne2(p({ error: r3, isValidating: n3 }, u(e3, ee2.current.data) ? null : { data: e3 }));
      }), o = Q(F2, O2, function(e3) {
        if (e3 === 0) {
          var i2 = Date.now();
          N2().revalidateOnFocus && i2 > t2 && n2() && (t2 = i2 + N2().focusThrottleInterval, r2());
        } else if (e3 === 1)
          N2().revalidateOnReconnect && n2() && r2();
        else if (e3 === 2)
          return te();
      });
      return G2.current = false, H2.current = F2, e2 && ne2({ data: K2, error: X, isValidating: Z2 }), Y() && (v(K2) || T ? r2() : S(r2)), A2.current = true, function() {
        G2.current = true, i(), o();
      };
    }
  }, [F2, te]), E(function() {
    var e2;
    function r2() {
      y2 && e2 !== -1 && (e2 = setTimeout(n2, y2));
    }
    function n2() {
      ee2.current.error || !b2 && !N2().isVisible() || !w2 && !N2().isOnline() ? r2() : te(U).then(function() {
        return r2();
      });
    }
    return r2(), function() {
      e2 && (clearTimeout(e2), e2 = -1);
    };
  }, [y2, b2, w2, te]), useDebugValue(K2), h2 && v(K2))
    throw v(X) ? te(U) : X;
  return { mutate: ie, get data() {
    return re.data = true, K2;
  }, get error() {
    return re.error = true, X;
  }, get isValidating() {
    return re.isValidating = true, Z2;
  } };
}, function() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var n = B(e), i = n[0], u = n[1], o = n[2], a = p(J, useContext(z)), c = N(a, o), f = K, l2 = c.use;
  if (l2)
    for (var s2 = l2.length; s2-- > 0; )
      f = l2[s2](f);
  return f(i, u || c.fetcher, c);
});
async function fetcher(url, opts = {}) {
  const res = await fetch(url, opts);
  if (!res.ok) {
    throw new Error("Error completing request");
  }
  return await res.json();
}
function getColorForType(type) {
  const typeColorMap = {
    bug: "",
    fix: "",
    feature: "",
    maintenance: "",
    release: "",
    tag: "#10B981",
    update: ""
  };
  return typeColorMap[type.toLowerCase()];
}
function useChangelogFeed(baseUrl, userId) {
  const { data, error } = Z(`${baseUrl}/api/feed?userId=${userId}`, fetcher);
  return {
    feed: data == null ? void 0 : data.feed,
    isLoading: !error && !data
  };
}
function useBanner(id2, baseUrl, userId) {
  const { data, error } = Z(`${baseUrl}/api/banner?id=${id2}&userId=${userId}`, fetcher);
  return {
    banner: data == null ? void 0 : data.banner,
    isLoading: !error && !data
  };
}
function Banner(props) {
  const { banner } = useBanner(props == null ? void 0 : props.id, props == null ? void 0 : props.baseUrl, props == null ? void 0 : props.userId);
  let ctaElement = null;
  if ((banner == null ? void 0 : banner.cta_type) === "link") {
    ctaElement = /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center justify-center"
    }, /* @__PURE__ */ React.createElement("a", {
      href: banner == null ? void 0 : banner.cta,
      className: "flex items-center justify-center text-white font-medium underline mr-2"
    }, banner == null ? void 0 : banner.cta_text), /* @__PURE__ */ React.createElement(HiOutlineArrowNarrowRight, null));
  } else if ((banner == null ? void 0 : banner.cta_type) === "button") {
    ctaElement = /* @__PURE__ */ React.createElement("div", {
      className: "",
      style: { backgroundColor: `${banner == null ? void 0 : banner.cta_bg}` }
    }, /* @__PURE__ */ React.createElement("a", {
      href: banner == null ? void 0 : banner.cta,
      className: "flex items-center justify-center text-white font-medium"
    }, banner == null ? void 0 : banner.cta_text));
  }
  if (banner)
    return /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center justify-between px-4 py-2 rounded-lg",
      style: { backgroundColor: banner == null ? void 0 : banner.bg }
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex-1 flex items-center"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "mr-2 font-medium text-white truncate"
    }, banner == null ? void 0 : banner.title)), ctaElement, /* @__PURE__ */ React.createElement("div", {
      className: ""
    }, /* @__PURE__ */ React.createElement("button", {
      type: "button",
      className: "-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "sr-only"
    }, "Dismiss"))));
}
function _extends() {
  _extends = Object.assign || function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target2[key] = source[key];
  }
  return target2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it2;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it2 = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it2)
        o = it2;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it2 = o[Symbol.iterator]();
  return it2.next.bind(it2);
}
function match$2(value, lookup) {
  if (value in lookup) {
    var returnValue = lookup[value];
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return typeof returnValue === "function" ? returnValue.apply(void 0, args) : returnValue;
  }
  var error = new Error('Tried to handle "' + value + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(lookup).map(function(key) {
    return '"' + key + '"';
  }).join(", ") + ".");
  if (Error.captureStackTrace)
    Error.captureStackTrace(error, match$2);
  throw error;
}
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
function render$1(_ref) {
  var props = _ref.props, slot = _ref.slot, defaultTag = _ref.defaultTag, features = _ref.features, _ref$visible = _ref.visible, visible = _ref$visible === void 0 ? true : _ref$visible, name = _ref.name;
  if (visible)
    return _render(props, slot, defaultTag, name);
  var featureFlags = features != null ? features : Features.None;
  if (featureFlags & Features.Static) {
    var _props$static = props["static"], isStatic = _props$static === void 0 ? false : _props$static, rest = _objectWithoutPropertiesLoose(props, ["static"]);
    if (isStatic)
      return _render(rest, slot, defaultTag, name);
  }
  if (featureFlags & Features.RenderStrategy) {
    var _match;
    var _props$unmount = props.unmount, unmount = _props$unmount === void 0 ? true : _props$unmount, _rest = _objectWithoutPropertiesLoose(props, ["unmount"]);
    var strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
    return match$2(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      return null;
    }, _match[RenderStrategy.Hidden] = function() {
      return _render(_extends({}, _rest, {
        hidden: true,
        style: {
          display: "none"
        }
      }), slot, defaultTag, name);
    }, _match));
  }
  return _render(props, slot, defaultTag, name);
}
function _render(props, slot, tag, name) {
  var _ref2;
  if (slot === void 0) {
    slot = {};
  }
  var _omit = omit(props, ["unmount", "static"]), _omit$as = _omit.as, Component = _omit$as === void 0 ? tag : _omit$as, children = _omit.children, _omit$refName = _omit.refName, refName = _omit$refName === void 0 ? "ref" : _omit$refName, passThroughProps = _objectWithoutPropertiesLoose(_omit, ["as", "children", "refName"]);
  var refRelatedProps = props.ref !== void 0 ? (_ref2 = {}, _ref2[refName] = props.ref, _ref2) : {};
  var resolvedChildren = typeof children === "function" ? children(slot) : children;
  if (passThroughProps.className && typeof passThroughProps.className === "function") {
    passThroughProps.className = passThroughProps.className(slot);
  }
  if (Component === Fragment) {
    if (Object.keys(passThroughProps).length > 0) {
      if (!isValidElement(resolvedChildren) || Array.isArray(resolvedChildren) && resolvedChildren.length > 1) {
        throw new Error(['Passing props on "Fragment"!', "", "The current component <" + name + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(passThroughProps).map(function(line) {
          return "  - " + line;
        }).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(function(line) {
          return "  - " + line;
        }).join("\n")].join("\n"));
      }
      return cloneElement(resolvedChildren, Object.assign({}, mergeEventFunctions(compact(omit(passThroughProps, ["ref"])), resolvedChildren.props, ["onClick"]), refRelatedProps));
    }
  }
  return createElement(Component, Object.assign({}, omit(passThroughProps, ["ref"]), Component !== Fragment && refRelatedProps), resolvedChildren);
}
function mergeEventFunctions(passThroughProps, existingProps, functionsToMerge) {
  var clone = Object.assign({}, passThroughProps);
  var _loop = function _loop2() {
    var func = _step.value;
    if (passThroughProps[func] !== void 0 && existingProps[func] !== void 0) {
      var _Object$assign;
      Object.assign(clone, (_Object$assign = {}, _Object$assign[func] = function(event) {
        if (!event.defaultPrevented)
          passThroughProps[func](event);
        if (!event.defaultPrevented)
          existingProps[func](event);
      }, _Object$assign));
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose(functionsToMerge), _step; !(_step = _iterator()).done; ) {
    _loop();
  }
  return clone;
}
function forwardRefWithAs(component) {
  var _component$displayNam;
  return Object.assign(forwardRef(component), {
    displayName: (_component$displayNam = component.displayName) != null ? _component$displayNam : component.name
  });
}
function compact(object) {
  var clone = Object.assign({}, object);
  for (var key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
function omit(object, keysToOmit) {
  if (keysToOmit === void 0) {
    keysToOmit = [];
  }
  var clone = Object.assign({}, object);
  for (var _iterator2 = _createForOfIteratorHelperLoose(keysToOmit), _step2; !(_step2 = _iterator2()).done; ) {
    var key = _step2.value;
    if (key in clone)
      delete clone[key];
  }
  return clone;
}
var useIsoMorphicEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
var state = {
  serverHandoffComplete: false
};
function useServerHandoffComplete() {
  var _useState = useState(state.serverHandoffComplete), serverHandoffComplete = _useState[0], setServerHandoffComplete = _useState[1];
  useEffect(function() {
    if (serverHandoffComplete === true)
      return;
    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);
  useEffect(function() {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);
  return serverHandoffComplete;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function useSyncRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var cache = useRef(refs);
  useEffect(function() {
    cache.current = refs;
  }, [refs]);
  return useCallback(function(value) {
    for (var _iterator = _createForOfIteratorHelperLoose(cache.current), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      if (ref == null)
        continue;
      if (typeof ref === "function")
        ref(value);
      else
        ref.current = value;
    }
  }, [cache]);
}
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));
function isDisabledReactIssue7711(element) {
  var _ref, _parent;
  var parent = element.parentElement;
  var legend = null;
  while (parent && !(parent instanceof HTMLFieldSetElement)) {
    if (parent instanceof HTMLLegendElement)
      legend = parent;
    parent = parent.parentElement;
  }
  var isParentDisabled = (_ref = ((_parent = parent) == null ? void 0 : _parent.getAttribute("disabled")) === "") != null ? _ref : false;
  if (isParentDisabled && isFirstLegend(legend))
    return false;
  return isParentDisabled;
}
function isFirstLegend(element) {
  if (!element)
    return false;
  var previous = element.previousElementSibling;
  while (previous !== null) {
    if (previous instanceof HTMLLegendElement)
      return false;
    previous = previous.previousElementSibling;
  }
  return true;
}
var id$1 = 0;
function generateId() {
  return ++id$1;
}
function useId() {
  var ready = useServerHandoffComplete();
  var _useState = useState(ready ? generateId : null), id2 = _useState[0], setId = _useState[1];
  useIsoMorphicEffect(function() {
    if (id2 === null)
      setId(generateId());
  }, [id2]);
  return id2 != null ? "" + id2 : void 0;
}
function useWindowEvent(type, listener, options) {
  var listenerRef = useRef(listener);
  listenerRef.current = listener;
  useEffect(function() {
    function handler(event) {
      listenerRef.current.call(window, event);
    }
    window.addEventListener(type, handler, options);
    return function() {
      return window.removeEventListener(type, handler, options);
    };
  }, [type, options]);
}
var focusableSelector = /* @__PURE__ */ ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(function(selector) {
  return selector + ":not([tabindex='-1'])";
}).join(",");
var Focus;
(function(Focus2) {
  Focus2[Focus2["First"] = 1] = "First";
  Focus2[Focus2["Previous"] = 2] = "Previous";
  Focus2[Focus2["Next"] = 4] = "Next";
  Focus2[Focus2["Last"] = 8] = "Last";
  Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
  Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
})(Focus || (Focus = {}));
var FocusResult;
(function(FocusResult2) {
  FocusResult2[FocusResult2["Error"] = 0] = "Error";
  FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
  FocusResult2[FocusResult2["Success"] = 2] = "Success";
  FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Previous"] = -1] = "Previous";
  Direction2[Direction2["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
function getFocusableElements(container) {
  if (container === void 0) {
    container = document.body;
  }
  if (container == null)
    return [];
  return Array.from(container.querySelectorAll(focusableSelector));
}
var FocusableMode;
(function(FocusableMode2) {
  FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
  FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
function isFocusableElement(element, mode) {
  var _match;
  if (mode === void 0) {
    mode = FocusableMode.Strict;
  }
  if (element === document.body)
    return false;
  return match$2(mode, (_match = {}, _match[FocusableMode.Strict] = function() {
    return element.matches(focusableSelector);
  }, _match[FocusableMode.Loose] = function() {
    var next = element;
    while (next !== null) {
      if (next.matches(focusableSelector))
        return true;
      next = next.parentElement;
    }
    return false;
  }, _match));
}
function focusIn(container, focus) {
  var elements = Array.isArray(container) ? container : getFocusableElements(container);
  var active = document.activeElement;
  var direction = function() {
    if (focus & (Focus.First | Focus.Next))
      return Direction.Next;
    if (focus & (Focus.Previous | Focus.Last))
      return Direction.Previous;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  }();
  var startIndex = function() {
    if (focus & Focus.First)
      return 0;
    if (focus & Focus.Previous)
      return Math.max(0, elements.indexOf(active)) - 1;
    if (focus & Focus.Next)
      return Math.max(0, elements.indexOf(active)) + 1;
    if (focus & Focus.Last)
      return elements.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  }();
  var focusOptions = focus & Focus.NoScroll ? {
    preventScroll: true
  } : {};
  var offset = 0;
  var total = elements.length;
  var next = void 0;
  do {
    var _next;
    if (offset >= total || offset + total <= 0)
      return FocusResult.Error;
    var nextIdx = startIndex + offset;
    if (focus & Focus.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0)
        return FocusResult.Underflow;
      if (nextIdx >= total)
        return FocusResult.Overflow;
    }
    next = elements[nextIdx];
    (_next = next) == null ? void 0 : _next.focus(focusOptions);
    offset += direction;
  } while (next !== document.activeElement);
  if (!next.hasAttribute("tabindex"))
    next.setAttribute("tabindex", "0");
  return FocusResult.Success;
}
function useIsMounted() {
  var mounted = useRef(false);
  useEffect(function() {
    mounted.current = true;
    return function() {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
var Context = /* @__PURE__ */ createContext(null);
Context.displayName = "OpenClosedContext";
var State;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State || (State = {}));
function useOpenClosed() {
  return useContext(Context);
}
function OpenClosedProvider(_ref) {
  var value = _ref.value, children = _ref.children;
  return React.createElement(Context.Provider, {
    value
  }, children);
}
function resolveType(props) {
  var _props$as;
  if (props.type)
    return props.type;
  var tag = (_props$as = props.as) != null ? _props$as : "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  return void 0;
}
function useResolveButtonType(props, ref) {
  var _useState = useState(function() {
    return resolveType(props);
  }), type = _useState[0], setType = _useState[1];
  useIsoMorphicEffect(function() {
    setType(resolveType(props));
  }, [props.type, props.as]);
  useIsoMorphicEffect(function() {
    if (type)
      return;
    if (!ref.current)
      return;
    if (ref.current instanceof HTMLButtonElement && !ref.current.hasAttribute("type")) {
      setType("button");
    }
  }, [type, ref]);
  return type;
}
function disposables() {
  var disposables2 = [];
  var api = {
    requestAnimationFrame: function(_requestAnimationFrame) {
      function requestAnimationFrame2() {
        return _requestAnimationFrame.apply(this, arguments);
      }
      requestAnimationFrame2.toString = function() {
        return _requestAnimationFrame.toString();
      };
      return requestAnimationFrame2;
    }(function() {
      var raf = requestAnimationFrame.apply(void 0, arguments);
      api.add(function() {
        return cancelAnimationFrame(raf);
      });
    }),
    nextFrame: function nextFrame() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      api.requestAnimationFrame(function() {
        api.requestAnimationFrame.apply(api, args);
      });
    },
    setTimeout: function(_setTimeout) {
      function setTimeout2() {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout2.toString = function() {
        return _setTimeout.toString();
      };
      return setTimeout2;
    }(function() {
      var timer = setTimeout.apply(void 0, arguments);
      api.add(function() {
        return clearTimeout(timer);
      });
    }),
    add: function add(cb) {
      disposables2.push(cb);
    },
    dispose: function dispose() {
      for (var _iterator = _createForOfIteratorHelperLoose(disposables2.splice(0)), _step; !(_step = _iterator()).done; ) {
        var dispose2 = _step.value;
        dispose2();
      }
    }
  };
  return api;
}
var _reducers;
var PopoverStates;
(function(PopoverStates2) {
  PopoverStates2[PopoverStates2["Open"] = 0] = "Open";
  PopoverStates2[PopoverStates2["Closed"] = 1] = "Closed";
})(PopoverStates || (PopoverStates = {}));
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2[ActionTypes2["TogglePopover"] = 0] = "TogglePopover";
  ActionTypes2[ActionTypes2["ClosePopover"] = 1] = "ClosePopover";
  ActionTypes2[ActionTypes2["SetButton"] = 2] = "SetButton";
  ActionTypes2[ActionTypes2["SetButtonId"] = 3] = "SetButtonId";
  ActionTypes2[ActionTypes2["SetPanel"] = 4] = "SetPanel";
  ActionTypes2[ActionTypes2["SetPanelId"] = 5] = "SetPanelId";
})(ActionTypes || (ActionTypes = {}));
var reducers = (_reducers = {}, _reducers[ActionTypes.TogglePopover] = function(state2) {
  var _match;
  return _extends({}, state2, {
    popoverState: match$2(state2.popoverState, (_match = {}, _match[PopoverStates.Open] = PopoverStates.Closed, _match[PopoverStates.Closed] = PopoverStates.Open, _match))
  });
}, _reducers[ActionTypes.ClosePopover] = function(state2) {
  if (state2.popoverState === PopoverStates.Closed)
    return state2;
  return _extends({}, state2, {
    popoverState: PopoverStates.Closed
  });
}, _reducers[ActionTypes.SetButton] = function(state2, action) {
  if (state2.button === action.button)
    return state2;
  return _extends({}, state2, {
    button: action.button
  });
}, _reducers[ActionTypes.SetButtonId] = function(state2, action) {
  if (state2.buttonId === action.buttonId)
    return state2;
  return _extends({}, state2, {
    buttonId: action.buttonId
  });
}, _reducers[ActionTypes.SetPanel] = function(state2, action) {
  if (state2.panel === action.panel)
    return state2;
  return _extends({}, state2, {
    panel: action.panel
  });
}, _reducers[ActionTypes.SetPanelId] = function(state2, action) {
  if (state2.panelId === action.panelId)
    return state2;
  return _extends({}, state2, {
    panelId: action.panelId
  });
}, _reducers);
var PopoverContext = /* @__PURE__ */ createContext(null);
PopoverContext.displayName = "PopoverContext";
function usePopoverContext(component) {
  var context = useContext(PopoverContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
}
var PopoverAPIContext = /* @__PURE__ */ createContext(null);
PopoverAPIContext.displayName = "PopoverAPIContext";
function usePopoverAPIContext(component) {
  var context = useContext(PopoverAPIContext);
  if (context === null) {
    var err = new Error("<" + component + " /> is missing a parent <" + Popover.name + " /> component.");
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, usePopoverAPIContext);
    throw err;
  }
  return context;
}
var PopoverGroupContext = /* @__PURE__ */ createContext(null);
PopoverGroupContext.displayName = "PopoverGroupContext";
function usePopoverGroupContext() {
  return useContext(PopoverGroupContext);
}
var PopoverPanelContext = /* @__PURE__ */ createContext(null);
PopoverPanelContext.displayName = "PopoverPanelContext";
function usePopoverPanelContext() {
  return useContext(PopoverPanelContext);
}
function stateReducer(state2, action) {
  return match$2(action.type, reducers, state2, action);
}
var DEFAULT_POPOVER_TAG = "div";
function Popover(props) {
  var _match2;
  var buttonId = "headlessui-popover-button-" + useId();
  var panelId = "headlessui-popover-panel-" + useId();
  var reducerBag = useReducer(stateReducer, {
    popoverState: PopoverStates.Closed,
    button: null,
    buttonId,
    panel: null,
    panelId
  });
  var _reducerBag$ = reducerBag[0], popoverState = _reducerBag$.popoverState, button = _reducerBag$.button, panel = _reducerBag$.panel, dispatch = reducerBag[1];
  useEffect(function() {
    return dispatch({
      type: ActionTypes.SetButtonId,
      buttonId
    });
  }, [buttonId, dispatch]);
  useEffect(function() {
    return dispatch({
      type: ActionTypes.SetPanelId,
      panelId
    });
  }, [panelId, dispatch]);
  var registerBag = useMemo(function() {
    return {
      buttonId,
      panelId,
      close: function close2() {
        return dispatch({
          type: ActionTypes.ClosePopover
        });
      }
    };
  }, [buttonId, panelId, dispatch]);
  var groupContext = usePopoverGroupContext();
  var registerPopover = groupContext == null ? void 0 : groupContext.registerPopover;
  var isFocusWithinPopoverGroup = useCallback(function() {
    var _groupContext$isFocus;
    return (_groupContext$isFocus = groupContext == null ? void 0 : groupContext.isFocusWithinPopoverGroup()) != null ? _groupContext$isFocus : (button == null ? void 0 : button.contains(document.activeElement)) || (panel == null ? void 0 : panel.contains(document.activeElement));
  }, [groupContext, button, panel]);
  useEffect(function() {
    return registerPopover == null ? void 0 : registerPopover(registerBag);
  }, [registerPopover, registerBag]);
  useWindowEvent("focus", function() {
    if (popoverState !== PopoverStates.Open)
      return;
    if (isFocusWithinPopoverGroup())
      return;
    if (!button)
      return;
    if (!panel)
      return;
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, true);
  useWindowEvent("mousedown", function(event) {
    var target2 = event.target;
    if (popoverState !== PopoverStates.Open)
      return;
    if (button == null ? void 0 : button.contains(target2))
      return;
    if (panel == null ? void 0 : panel.contains(target2))
      return;
    dispatch({
      type: ActionTypes.ClosePopover
    });
    if (!isFocusableElement(target2, FocusableMode.Loose)) {
      event.preventDefault();
      button == null ? void 0 : button.focus();
    }
  });
  var close = useCallback(function(focusableElement) {
    dispatch({
      type: ActionTypes.ClosePopover
    });
    var restoreElement = function() {
      if (!focusableElement)
        return button;
      if (focusableElement instanceof HTMLElement)
        return focusableElement;
      if (focusableElement.current instanceof HTMLElement)
        return focusableElement.current;
      return button;
    }();
    restoreElement == null ? void 0 : restoreElement.focus();
  }, [dispatch, button]);
  var api = useMemo(function() {
    return {
      close
    };
  }, [close]);
  var slot = useMemo(function() {
    return {
      open: popoverState === PopoverStates.Open,
      close
    };
  }, [popoverState, close]);
  return React.createElement(PopoverContext.Provider, {
    value: reducerBag
  }, React.createElement(PopoverAPIContext.Provider, {
    value: api
  }, React.createElement(OpenClosedProvider, {
    value: match$2(popoverState, (_match2 = {}, _match2[PopoverStates.Open] = State.Open, _match2[PopoverStates.Closed] = State.Closed, _match2))
  }, render$1({
    props,
    slot,
    defaultTag: DEFAULT_POPOVER_TAG,
    name: "Popover"
  }))));
}
var DEFAULT_BUTTON_TAG = "button";
var Button = /* @__PURE__ */ forwardRefWithAs(function Button2(props, ref) {
  var _usePopoverContext = usePopoverContext([Popover.name, Button2.name].join(".")), state2 = _usePopoverContext[0], dispatch = _usePopoverContext[1];
  var internalButtonRef = useRef(null);
  var groupContext = usePopoverGroupContext();
  var closeOthers = groupContext == null ? void 0 : groupContext.closeOthers;
  var panelContext = usePopoverPanelContext();
  var isWithinPanel = panelContext === null ? false : panelContext === state2.panelId;
  var buttonRef = useSyncRefs(internalButtonRef, ref, isWithinPanel ? null : function(button) {
    return dispatch({
      type: ActionTypes.SetButton,
      button
    });
  });
  var withinPanelButtonRef = useSyncRefs(internalButtonRef, ref);
  var activeElementRef = useRef(null);
  var previousActiveElementRef = useRef(typeof window === "undefined" ? null : document.activeElement);
  useWindowEvent("focus", function() {
    previousActiveElementRef.current = activeElementRef.current;
    activeElementRef.current = document.activeElement;
  }, true);
  var handleKeyDown = useCallback(function(event) {
    var _state$button;
    if (isWithinPanel) {
      if (state2.popoverState === PopoverStates.Closed)
        return;
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          dispatch({
            type: ActionTypes.ClosePopover
          });
          (_state$button = state2.button) == null ? void 0 : _state$button.focus();
          break;
      }
    } else {
      switch (event.key) {
        case Keys.Space:
        case Keys.Enter:
          event.preventDefault();
          event.stopPropagation();
          if (state2.popoverState === PopoverStates.Closed)
            closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          dispatch({
            type: ActionTypes.TogglePopover
          });
          break;
        case Keys.Escape:
          if (state2.popoverState !== PopoverStates.Open)
            return closeOthers == null ? void 0 : closeOthers(state2.buttonId);
          if (!internalButtonRef.current)
            return;
          if (!internalButtonRef.current.contains(document.activeElement))
            return;
          dispatch({
            type: ActionTypes.ClosePopover
          });
          break;
        case Keys.Tab:
          if (state2.popoverState !== PopoverStates.Open)
            return;
          if (!state2.panel)
            return;
          if (!state2.button)
            return;
          if (event.shiftKey) {
            var _state$button2;
            if (!previousActiveElementRef.current)
              return;
            if ((_state$button2 = state2.button) == null ? void 0 : _state$button2.contains(previousActiveElementRef.current))
              return;
            if (state2.panel.contains(previousActiveElementRef.current))
              return;
            var focusableElements = getFocusableElements();
            var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
            var buttonIdx = focusableElements.indexOf(state2.button);
            if (buttonIdx > previousIdx)
              return;
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, Focus.Last);
          } else {
            event.preventDefault();
            event.stopPropagation();
            focusIn(state2.panel, Focus.First);
          }
          break;
      }
    }
  }, [dispatch, state2.popoverState, state2.buttonId, state2.button, state2.panel, internalButtonRef, closeOthers, isWithinPanel]);
  var handleKeyUp = useCallback(function(event) {
    var _state$button3;
    if (isWithinPanel)
      return;
    if (event.key === Keys.Space) {
      event.preventDefault();
    }
    if (state2.popoverState !== PopoverStates.Open)
      return;
    if (!state2.panel)
      return;
    if (!state2.button)
      return;
    switch (event.key) {
      case Keys.Tab:
        if (!previousActiveElementRef.current)
          return;
        if ((_state$button3 = state2.button) == null ? void 0 : _state$button3.contains(previousActiveElementRef.current))
          return;
        if (state2.panel.contains(previousActiveElementRef.current))
          return;
        var focusableElements = getFocusableElements();
        var previousIdx = focusableElements.indexOf(previousActiveElementRef.current);
        var buttonIdx = focusableElements.indexOf(state2.button);
        if (buttonIdx > previousIdx)
          return;
        event.preventDefault();
        event.stopPropagation();
        focusIn(state2.panel, Focus.Last);
        break;
    }
  }, [state2.popoverState, state2.panel, state2.button, isWithinPanel]);
  var handleClick = useCallback(function(event) {
    if (isDisabledReactIssue7711(event.currentTarget))
      return;
    if (props.disabled)
      return;
    if (isWithinPanel) {
      var _state$button4;
      dispatch({
        type: ActionTypes.ClosePopover
      });
      (_state$button4 = state2.button) == null ? void 0 : _state$button4.focus();
    } else {
      var _state$button5;
      if (state2.popoverState === PopoverStates.Closed)
        closeOthers == null ? void 0 : closeOthers(state2.buttonId);
      (_state$button5 = state2.button) == null ? void 0 : _state$button5.focus();
      dispatch({
        type: ActionTypes.TogglePopover
      });
    }
  }, [dispatch, state2.button, state2.popoverState, state2.buttonId, props.disabled, closeOthers, isWithinPanel]);
  var slot = useMemo(function() {
    return {
      open: state2.popoverState === PopoverStates.Open
    };
  }, [state2]);
  var type = useResolveButtonType(props, internalButtonRef);
  var passthroughProps = props;
  var propsWeControl = isWithinPanel ? {
    ref: withinPanelButtonRef,
    type,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  } : {
    ref: buttonRef,
    id: state2.buttonId,
    type,
    "aria-expanded": props.disabled ? void 0 : state2.popoverState === PopoverStates.Open,
    "aria-controls": state2.panel ? state2.panelId : void 0,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick
  };
  return render$1({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_BUTTON_TAG,
    name: "Popover.Button"
  });
});
var DEFAULT_OVERLAY_TAG = "div";
var OverlayRenderFeatures = Features.RenderStrategy | Features.Static;
var Overlay = /* @__PURE__ */ forwardRefWithAs(function Overlay2(props, ref) {
  var _usePopoverContext2 = usePopoverContext([Popover.name, Overlay2.name].join(".")), popoverState = _usePopoverContext2[0].popoverState, dispatch = _usePopoverContext2[1];
  var overlayRef = useSyncRefs(ref);
  var id2 = "headlessui-popover-overlay-" + useId();
  var usesOpenClosedState = useOpenClosed();
  var visible = function() {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State.Open;
    }
    return popoverState === PopoverStates.Open;
  }();
  var handleClick = useCallback(function(event) {
    if (isDisabledReactIssue7711(event.currentTarget))
      return event.preventDefault();
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, [dispatch]);
  var slot = useMemo(function() {
    return {
      open: popoverState === PopoverStates.Open
    };
  }, [popoverState]);
  var propsWeControl = {
    ref: overlayRef,
    id: id2,
    "aria-hidden": true,
    onClick: handleClick
  };
  var passthroughProps = props;
  return render$1({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_OVERLAY_TAG,
    features: OverlayRenderFeatures,
    visible,
    name: "Popover.Overlay"
  });
});
var DEFAULT_PANEL_TAG = "div";
var PanelRenderFeatures = Features.RenderStrategy | Features.Static;
var Panel = /* @__PURE__ */ forwardRefWithAs(function Panel2(props, ref) {
  var _props$focus = props.focus, focus = _props$focus === void 0 ? false : _props$focus, passthroughProps = _objectWithoutPropertiesLoose(props, ["focus"]);
  var _usePopoverContext3 = usePopoverContext([Popover.name, Panel2.name].join(".")), state2 = _usePopoverContext3[0], dispatch = _usePopoverContext3[1];
  var _usePopoverAPIContext = usePopoverAPIContext([Popover.name, Panel2.name].join(".")), close = _usePopoverAPIContext.close;
  var internalPanelRef = useRef(null);
  var panelRef = useSyncRefs(internalPanelRef, ref, function(panel) {
    dispatch({
      type: ActionTypes.SetPanel,
      panel
    });
  });
  var usesOpenClosedState = useOpenClosed();
  var visible = function() {
    if (usesOpenClosedState !== null) {
      return usesOpenClosedState === State.Open;
    }
    return state2.popoverState === PopoverStates.Open;
  }();
  var handleKeyDown = useCallback(function(event) {
    var _state$button6;
    switch (event.key) {
      case Keys.Escape:
        if (state2.popoverState !== PopoverStates.Open)
          return;
        if (!internalPanelRef.current)
          return;
        if (!internalPanelRef.current.contains(document.activeElement))
          return;
        event.preventDefault();
        dispatch({
          type: ActionTypes.ClosePopover
        });
        (_state$button6 = state2.button) == null ? void 0 : _state$button6.focus();
        break;
    }
  }, [state2, internalPanelRef, dispatch]);
  useEffect(function() {
    return function() {
      return dispatch({
        type: ActionTypes.SetPanel,
        panel: null
      });
    };
  }, [dispatch]);
  useEffect(function() {
    var _props$unmount;
    if (state2.popoverState === PopoverStates.Closed && ((_props$unmount = props.unmount) != null ? _props$unmount : true)) {
      dispatch({
        type: ActionTypes.SetPanel,
        panel: null
      });
    }
  }, [state2.popoverState, props.unmount, dispatch]);
  useEffect(function() {
    if (!focus)
      return;
    if (state2.popoverState !== PopoverStates.Open)
      return;
    if (!internalPanelRef.current)
      return;
    var activeElement = document.activeElement;
    if (internalPanelRef.current.contains(activeElement))
      return;
    focusIn(internalPanelRef.current, Focus.First);
  }, [focus, internalPanelRef, state2.popoverState]);
  useWindowEvent("keydown", function(event) {
    if (state2.popoverState !== PopoverStates.Open)
      return;
    if (!internalPanelRef.current)
      return;
    if (event.key !== Keys.Tab)
      return;
    if (!document.activeElement)
      return;
    if (!internalPanelRef.current)
      return;
    if (!internalPanelRef.current.contains(document.activeElement))
      return;
    event.preventDefault();
    var result = focusIn(internalPanelRef.current, event.shiftKey ? Focus.Previous : Focus.Next);
    if (result === FocusResult.Underflow) {
      var _state$button7;
      return (_state$button7 = state2.button) == null ? void 0 : _state$button7.focus();
    } else if (result === FocusResult.Overflow) {
      if (!state2.button)
        return;
      var elements = getFocusableElements();
      var buttonIdx = elements.indexOf(state2.button);
      var nextElements = elements.splice(buttonIdx + 1).filter(function(element) {
        var _internalPanelRef$cur;
        return !((_internalPanelRef$cur = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur.contains(element));
      });
      if (focusIn(nextElements, Focus.First) === FocusResult.Error) {
        focusIn(document.body, Focus.First);
      }
    }
  });
  useWindowEvent("focus", function() {
    var _internalPanelRef$cur2;
    if (!focus)
      return;
    if (state2.popoverState !== PopoverStates.Open)
      return;
    if (!internalPanelRef.current)
      return;
    if ((_internalPanelRef$cur2 = internalPanelRef.current) == null ? void 0 : _internalPanelRef$cur2.contains(document.activeElement))
      return;
    dispatch({
      type: ActionTypes.ClosePopover
    });
  }, true);
  var slot = useMemo(function() {
    return {
      open: state2.popoverState === PopoverStates.Open,
      close
    };
  }, [state2, close]);
  var propsWeControl = {
    ref: panelRef,
    id: state2.panelId,
    onKeyDown: handleKeyDown
  };
  return React.createElement(PopoverPanelContext.Provider, {
    value: state2.panelId
  }, render$1({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_PANEL_TAG,
    features: PanelRenderFeatures,
    visible,
    name: "Popover.Panel"
  }));
});
var DEFAULT_GROUP_TAG = "div";
function Group(props) {
  var groupRef = useRef(null);
  var _useState = useState([]), popovers = _useState[0], setPopovers = _useState[1];
  var unregisterPopover = useCallback(function(registerbag) {
    setPopovers(function(existing) {
      var idx = existing.indexOf(registerbag);
      if (idx !== -1) {
        var clone = existing.slice();
        clone.splice(idx, 1);
        return clone;
      }
      return existing;
    });
  }, [setPopovers]);
  var registerPopover = useCallback(function(registerbag) {
    setPopovers(function(existing) {
      return [].concat(existing, [registerbag]);
    });
    return function() {
      return unregisterPopover(registerbag);
    };
  }, [setPopovers, unregisterPopover]);
  var isFocusWithinPopoverGroup = useCallback(function() {
    var _groupRef$current;
    var element = document.activeElement;
    if ((_groupRef$current = groupRef.current) == null ? void 0 : _groupRef$current.contains(element))
      return true;
    return popovers.some(function(bag) {
      var _document$getElementB, _document$getElementB2;
      return ((_document$getElementB = document.getElementById(bag.buttonId)) == null ? void 0 : _document$getElementB.contains(element)) || ((_document$getElementB2 = document.getElementById(bag.panelId)) == null ? void 0 : _document$getElementB2.contains(element));
    });
  }, [groupRef, popovers]);
  var closeOthers = useCallback(function(buttonId) {
    for (var _iterator = _createForOfIteratorHelperLoose(popovers), _step; !(_step = _iterator()).done; ) {
      var popover = _step.value;
      if (popover.buttonId !== buttonId)
        popover.close();
    }
  }, [popovers]);
  var contextBag = useMemo(function() {
    return {
      registerPopover,
      unregisterPopover,
      isFocusWithinPopoverGroup,
      closeOthers
    };
  }, [registerPopover, unregisterPopover, isFocusWithinPopoverGroup, closeOthers]);
  var slot = useMemo(function() {
    return {};
  }, []);
  var propsWeControl = {
    ref: groupRef
  };
  var passthroughProps = props;
  return React.createElement(PopoverGroupContext.Provider, {
    value: contextBag
  }, render$1({
    props: _extends({}, passthroughProps, propsWeControl),
    slot,
    defaultTag: DEFAULT_GROUP_TAG,
    name: "Popover.Group"
  }));
}
Popover.Button = Button;
Popover.Overlay = Overlay;
Popover.Panel = Panel;
Popover.Group = Group;
function useIsInitialRender() {
  var initial = useRef(true);
  useEffect(function() {
    initial.current = false;
  }, []);
  return initial.current;
}
function once(cb) {
  var state2 = {
    called: false
  };
  return function() {
    if (state2.called)
      return;
    state2.called = true;
    return cb.apply(void 0, arguments);
  };
}
function addClasses(node2) {
  var _node$classList;
  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }
  node2 && classes.length > 0 && (_node$classList = node2.classList).add.apply(_node$classList, classes);
}
function removeClasses(node2) {
  var _node$classList2;
  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }
  node2 && classes.length > 0 && (_node$classList2 = node2.classList).remove.apply(_node$classList2, classes);
}
var Reason;
(function(Reason2) {
  Reason2["Finished"] = "finished";
  Reason2["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));
function waitForTransition(node2, done) {
  var d2 = disposables();
  if (!node2)
    return d2.dispose;
  var _getComputedStyle = getComputedStyle(node2), transitionDuration = _getComputedStyle.transitionDuration, transitionDelay = _getComputedStyle.transitionDelay;
  var _map = [transitionDuration, transitionDelay].map(function(value) {
    var _value$split$filter$m = value.split(",").filter(Boolean).map(function(v2) {
      return v2.includes("ms") ? parseFloat(v2) : parseFloat(v2) * 1e3;
    }).sort(function(a, z2) {
      return z2 - a;
    }), _value$split$filter$m2 = _value$split$filter$m[0], resolvedValue = _value$split$filter$m2 === void 0 ? 0 : _value$split$filter$m2;
    return resolvedValue;
  }), durationMs = _map[0], delaysMs = _map[1];
  if (durationMs !== 0) {
    d2.setTimeout(function() {
      done(Reason.Finished);
    }, durationMs + delaysMs);
  } else {
    done(Reason.Finished);
  }
  d2.add(function() {
    return done(Reason.Cancelled);
  });
  return d2.dispose;
}
function transition(node2, base, from, to, entered, done) {
  var d2 = disposables();
  var _done = done !== void 0 ? once(done) : function() {
  };
  removeClasses.apply(void 0, [node2].concat(entered));
  addClasses.apply(void 0, [node2].concat(base, from));
  d2.nextFrame(function() {
    removeClasses.apply(void 0, [node2].concat(from));
    addClasses.apply(void 0, [node2].concat(to));
    d2.add(waitForTransition(node2, function(reason) {
      removeClasses.apply(void 0, [node2].concat(to, base));
      addClasses.apply(void 0, [node2].concat(entered));
      return _done(reason);
    }));
  });
  d2.add(function() {
    return removeClasses.apply(void 0, [node2].concat(base, from, to, entered));
  });
  d2.add(function() {
    return _done(Reason.Cancelled);
  });
  return d2.dispose;
}
function useSplitClasses(classes) {
  if (classes === void 0) {
    classes = "";
  }
  return useMemo(function() {
    return classes.split(" ").filter(function(className) {
      return className.trim().length > 1;
    });
  }, [classes]);
}
var TransitionContext = /* @__PURE__ */ createContext(null);
TransitionContext.displayName = "TransitionContext";
var TreeStates;
(function(TreeStates2) {
  TreeStates2["Visible"] = "visible";
  TreeStates2["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));
function useTransitionContext() {
  var context = useContext(TransitionContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
function useParentNesting() {
  var context = useContext(NestingContext);
  if (context === null) {
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  }
  return context;
}
var NestingContext = /* @__PURE__ */ createContext(null);
NestingContext.displayName = "NestingContext";
function hasChildren$1(bag) {
  if ("children" in bag)
    return hasChildren$1(bag.children);
  return bag.current.filter(function(_ref) {
    var state2 = _ref.state;
    return state2 === TreeStates.Visible;
  }).length > 0;
}
function useNesting(done) {
  var doneRef = useRef(done);
  var transitionableChildren = useRef([]);
  var mounted = useIsMounted();
  useEffect(function() {
    doneRef.current = done;
  }, [done]);
  var unregister = useCallback(function(childId, strategy) {
    var _match;
    if (strategy === void 0) {
      strategy = RenderStrategy.Hidden;
    }
    var idx = transitionableChildren.current.findIndex(function(_ref2) {
      var id2 = _ref2.id;
      return id2 === childId;
    });
    if (idx === -1)
      return;
    match$2(strategy, (_match = {}, _match[RenderStrategy.Unmount] = function() {
      transitionableChildren.current.splice(idx, 1);
    }, _match[RenderStrategy.Hidden] = function() {
      transitionableChildren.current[idx].state = TreeStates.Hidden;
    }, _match));
    if (!hasChildren$1(transitionableChildren) && mounted.current) {
      doneRef.current == null ? void 0 : doneRef.current();
    }
  }, [doneRef, mounted, transitionableChildren]);
  var register = useCallback(function(childId) {
    var child = transitionableChildren.current.find(function(_ref3) {
      var id2 = _ref3.id;
      return id2 === childId;
    });
    if (!child) {
      transitionableChildren.current.push({
        id: childId,
        state: TreeStates.Visible
      });
    } else if (child.state !== TreeStates.Visible) {
      child.state = TreeStates.Visible;
    }
    return function() {
      return unregister(childId, RenderStrategy.Unmount);
    };
  }, [transitionableChildren, unregister]);
  return useMemo(function() {
    return {
      children: transitionableChildren,
      register,
      unregister
    };
  }, [register, unregister, transitionableChildren]);
}
function noop() {
}
var eventNames = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ensureEventHooksExist(events) {
  var result = {};
  for (var _iterator = _createForOfIteratorHelperLoose(eventNames), _step; !(_step = _iterator()).done; ) {
    var _events$name;
    var name = _step.value;
    result[name] = (_events$name = events[name]) != null ? _events$name : noop;
  }
  return result;
}
function useEvents(events) {
  var eventsRef = useRef(ensureEventHooksExist(events));
  useEffect(function() {
    eventsRef.current = ensureEventHooksExist(events);
  }, [events]);
  return eventsRef;
}
var DEFAULT_TRANSITION_CHILD_TAG = "div";
var TransitionChildRenderFeatures = Features.RenderStrategy;
function TransitionChild(props) {
  var _match3;
  var beforeEnter = props.beforeEnter, afterEnter = props.afterEnter, beforeLeave = props.beforeLeave, afterLeave = props.afterLeave, enter = props.enter, enterFrom = props.enterFrom, enterTo = props.enterTo, entered = props.entered, leave = props.leave, leaveFrom = props.leaveFrom, leaveTo = props.leaveTo, rest = _objectWithoutPropertiesLoose(props, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]);
  var container = useRef(null);
  var _useState = useState(TreeStates.Visible), state2 = _useState[0], setState = _useState[1];
  var strategy = rest.unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;
  var _useTransitionContext = useTransitionContext(), show = _useTransitionContext.show, appear = _useTransitionContext.appear;
  var _useParentNesting = useParentNesting(), register = _useParentNesting.register, unregister = _useParentNesting.unregister;
  var initial = useIsInitialRender();
  var id2 = useId();
  var isTransitioning = useRef(false);
  var nesting = useNesting(function() {
    if (!isTransitioning.current) {
      setState(TreeStates.Hidden);
      unregister(id2);
      events.current.afterLeave();
    }
  });
  useIsoMorphicEffect(function() {
    if (!id2)
      return;
    return register(id2);
  }, [register, id2]);
  useIsoMorphicEffect(function() {
    var _match2;
    if (strategy !== RenderStrategy.Hidden)
      return;
    if (!id2)
      return;
    if (show && state2 !== TreeStates.Visible) {
      setState(TreeStates.Visible);
      return;
    }
    match$2(state2, (_match2 = {}, _match2[TreeStates.Hidden] = function() {
      return unregister(id2);
    }, _match2[TreeStates.Visible] = function() {
      return register(id2);
    }, _match2));
  }, [state2, id2, register, unregister, show, strategy]);
  var enterClasses = useSplitClasses(enter);
  var enterFromClasses = useSplitClasses(enterFrom);
  var enterToClasses = useSplitClasses(enterTo);
  var enteredClasses = useSplitClasses(entered);
  var leaveClasses = useSplitClasses(leave);
  var leaveFromClasses = useSplitClasses(leaveFrom);
  var leaveToClasses = useSplitClasses(leaveTo);
  var events = useEvents({
    beforeEnter,
    afterEnter,
    beforeLeave,
    afterLeave
  });
  var ready = useServerHandoffComplete();
  useEffect(function() {
    if (ready && state2 === TreeStates.Visible && container.current === null) {
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
    }
  }, [container, state2, ready]);
  var skip = initial && !appear;
  useIsoMorphicEffect(function() {
    var node2 = container.current;
    if (!node2)
      return;
    if (skip)
      return;
    isTransitioning.current = true;
    if (show)
      events.current.beforeEnter();
    if (!show)
      events.current.beforeLeave();
    return show ? transition(node2, enterClasses, enterFromClasses, enterToClasses, enteredClasses, function(reason) {
      isTransitioning.current = false;
      if (reason === Reason.Finished)
        events.current.afterEnter();
    }) : transition(node2, leaveClasses, leaveFromClasses, leaveToClasses, enteredClasses, function(reason) {
      isTransitioning.current = false;
      if (reason !== Reason.Finished)
        return;
      if (!hasChildren$1(nesting)) {
        setState(TreeStates.Hidden);
        unregister(id2);
        events.current.afterLeave();
      }
    });
  }, [events, id2, isTransitioning, unregister, nesting, container, skip, show, enterClasses, enterFromClasses, enterToClasses, leaveClasses, leaveFromClasses, leaveToClasses]);
  var propsWeControl = {
    ref: container
  };
  var passthroughProps = rest;
  return React.createElement(NestingContext.Provider, {
    value: nesting
  }, React.createElement(OpenClosedProvider, {
    value: match$2(state2, (_match3 = {}, _match3[TreeStates.Visible] = State.Open, _match3[TreeStates.Hidden] = State.Closed, _match3))
  }, render$1({
    props: _extends({}, passthroughProps, propsWeControl),
    defaultTag: DEFAULT_TRANSITION_CHILD_TAG,
    features: TransitionChildRenderFeatures,
    visible: state2 === TreeStates.Visible,
    name: "Transition.Child"
  })));
}
function Transition(props) {
  var show = props.show, _props$appear = props.appear, appear = _props$appear === void 0 ? false : _props$appear, unmount = props.unmount, passthroughProps = _objectWithoutPropertiesLoose(props, ["show", "appear", "unmount"]);
  var usesOpenClosedState = useOpenClosed();
  if (show === void 0 && usesOpenClosedState !== null) {
    var _match4;
    show = match$2(usesOpenClosedState, (_match4 = {}, _match4[State.Open] = true, _match4[State.Closed] = false, _match4));
  }
  if (![true, false].includes(show)) {
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  }
  var _useState2 = useState(show ? TreeStates.Visible : TreeStates.Hidden), state2 = _useState2[0], setState = _useState2[1];
  var nestingBag = useNesting(function() {
    setState(TreeStates.Hidden);
  });
  var initial = useIsInitialRender();
  var transitionBag = useMemo(function() {
    return {
      show,
      appear: appear || !initial
    };
  }, [show, appear, initial]);
  useEffect(function() {
    if (show) {
      setState(TreeStates.Visible);
    } else if (!hasChildren$1(nestingBag)) {
      setState(TreeStates.Hidden);
    }
  }, [show, nestingBag]);
  var sharedProps = {
    unmount
  };
  return React.createElement(NestingContext.Provider, {
    value: nestingBag
  }, React.createElement(TransitionContext.Provider, {
    value: transitionBag
  }, render$1({
    props: _extends({}, sharedProps, {
      as: Fragment,
      children: React.createElement(TransitionChild, Object.assign({}, sharedProps, passthroughProps))
    }),
    defaultTag: Fragment,
    features: TransitionChildRenderFeatures,
    visible: state2 === TreeStates.Visible,
    name: "Transition"
  })));
}
Transition.Child = function Child(props) {
  var hasTransitionContext = useContext(TransitionContext) !== null;
  var hasOpenClosedContext = useOpenClosed() !== null;
  return !hasTransitionContext && hasOpenClosedContext ? React.createElement(Transition, Object.assign({}, props)) : React.createElement(TransitionChild, Object.assign({}, props));
};
Transition.Root = Transition;
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
  } else {
    return diff;
  }
}
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
};
var defaultRoundingMethod = "trunc";
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
}
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
  var result;
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
    if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }
  return result === 0 ? 0 : result;
}
function differenceInSeconds(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance$1 = function(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$2 = formatDistance$1;
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index2 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index2];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$1 = localize;
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index2) {
      return index2 + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$2,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;
function assign(target2, dirtyObject) {
  if (target2 == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  dirtyObject = dirtyObject || {};
  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target2[property] = dirtyObject[property];
    }
  }
  return target2;
}
function cloneObject(dirtyObject) {
  return assign({}, dirtyObject);
}
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  requiredArgs(2, arguments);
  var locale2 = options.locale || defaultLocale;
  if (!locale2.formatDistance) {
    throw new RangeError("locale must contain formatDistance property");
  }
  var comparison = compareAsc(dirtyDate, dirtyBaseDate);
  if (isNaN(comparison)) {
    throw new RangeError("Invalid time value");
  }
  var localizeOptions = cloneObject(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = toDate(dirtyBaseDate);
    dateRight = toDate(dirtyDate);
  } else {
    dateLeft = toDate(dirtyDate);
    dateRight = toDate(dirtyBaseDate);
  }
  var seconds = differenceInSeconds(dateRight, dateLeft);
  var offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months;
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale2.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale2.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale2.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale2.formatDistance("halfAMinute", null, localizeOptions);
      } else if (seconds < 60) {
        return locale2.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale2.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale2.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale2.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale2.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale2.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale2.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale2.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale2.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale2.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(dateRight, dateLeft);
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale2.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale2.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale2.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale2.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}
var hp2Builder$2 = {};
var lib$5 = {};
var lib$4 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
  var ElementType2;
  (function(ElementType3) {
    ElementType3["Root"] = "root";
    ElementType3["Text"] = "text";
    ElementType3["Directive"] = "directive";
    ElementType3["Comment"] = "comment";
    ElementType3["Script"] = "script";
    ElementType3["Style"] = "style";
    ElementType3["Tag"] = "tag";
    ElementType3["CDATA"] = "cdata";
    ElementType3["Doctype"] = "doctype";
  })(ElementType2 = exports.ElementType || (exports.ElementType = {}));
  function isTag2(elem) {
    return elem.type === ElementType2.Tag || elem.type === ElementType2.Script || elem.type === ElementType2.Style;
  }
  exports.isTag = isTag2;
  exports.Root = ElementType2.Root;
  exports.Text = ElementType2.Text;
  exports.Directive = ElementType2.Directive;
  exports.Comment = ElementType2.Comment;
  exports.Script = ElementType2.Script;
  exports.Style = ElementType2.Style;
  exports.Tag = ElementType2.Tag;
  exports.CDATA = ElementType2.CDATA;
  exports.Doctype = ElementType2.Doctype;
})(lib$4);
var node = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$4;
var nodeTypes = new Map([
  [domelementtype_1$1.ElementType.Tag, 1],
  [domelementtype_1$1.ElementType.Script, 1],
  [domelementtype_1$1.ElementType.Style, 1],
  [domelementtype_1$1.ElementType.Directive, 1],
  [domelementtype_1$1.ElementType.Text, 3],
  [domelementtype_1$1.ElementType.CDATA, 4],
  [domelementtype_1$1.ElementType.Comment, 8],
  [domelementtype_1$1.ElementType.Root, 9]
]);
var Node = function() {
  function Node2(type) {
    this.type = type;
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(Node2.prototype, "nodeType", {
    get: function() {
      var _a;
      return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "parentNode", {
    get: function() {
      return this.parent;
    },
    set: function(parent) {
      this.parent = parent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "previousSibling", {
    get: function() {
      return this.prev;
    },
    set: function(prev) {
      this.prev = prev;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Node2.prototype, "nextSibling", {
    get: function() {
      return this.next;
    },
    set: function(next) {
      this.next = next;
    },
    enumerable: false,
    configurable: true
  });
  Node2.prototype.cloneNode = function(recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return cloneNode(this, recursive);
  };
  return Node2;
}();
node.Node = Node;
var DataNode = function(_super) {
  __extends$1(DataNode2, _super);
  function DataNode2(type, data) {
    var _this = _super.call(this, type) || this;
    _this.data = data;
    return _this;
  }
  Object.defineProperty(DataNode2.prototype, "nodeValue", {
    get: function() {
      return this.data;
    },
    set: function(data) {
      this.data = data;
    },
    enumerable: false,
    configurable: true
  });
  return DataNode2;
}(Node);
node.DataNode = DataNode;
var Text = function(_super) {
  __extends$1(Text2, _super);
  function Text2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
  }
  return Text2;
}(DataNode);
node.Text = Text;
var Comment = function(_super) {
  __extends$1(Comment2, _super);
  function Comment2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
  }
  return Comment2;
}(DataNode);
node.Comment = Comment;
var ProcessingInstruction = function(_super) {
  __extends$1(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name, data) {
    var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;
    _this.name = name;
    return _this;
  }
  return ProcessingInstruction2;
}(DataNode);
node.ProcessingInstruction = ProcessingInstruction;
var NodeWithChildren = function(_super) {
  __extends$1(NodeWithChildren2, _super);
  function NodeWithChildren2(type, children) {
    var _this = _super.call(this, type) || this;
    _this.children = children;
    return _this;
  }
  Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
    get: function() {
      var _a;
      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
    get: function() {
      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
    get: function() {
      return this.children;
    },
    set: function(children) {
      this.children = children;
    },
    enumerable: false,
    configurable: true
  });
  return NodeWithChildren2;
}(Node);
node.NodeWithChildren = NodeWithChildren;
var Document = function(_super) {
  __extends$1(Document2, _super);
  function Document2(children) {
    return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
  }
  return Document2;
}(NodeWithChildren);
node.Document = Document;
var Element$1 = function(_super) {
  __extends$1(Element2, _super);
  function Element2(name, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }
    if (type === void 0) {
      type = name === "script" ? domelementtype_1$1.ElementType.Script : name === "style" ? domelementtype_1$1.ElementType.Style : domelementtype_1$1.ElementType.Tag;
    }
    var _this = _super.call(this, type, children) || this;
    _this.name = name;
    _this.attribs = attribs;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "tagName", {
    get: function() {
      return this.name;
    },
    set: function(name) {
      this.name = name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Element2.prototype, "attributes", {
    get: function() {
      var _this = this;
      return Object.keys(this.attribs).map(function(name) {
        var _a, _b;
        return {
          name,
          value: _this.attribs[name],
          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
        };
      });
    },
    enumerable: false,
    configurable: true
  });
  return Element2;
}(NodeWithChildren);
node.Element = Element$1;
function isTag(node2) {
  return (0, domelementtype_1$1.isTag)(node2);
}
node.isTag = isTag;
function isCDATA(node2) {
  return node2.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
function isText(node2) {
  return node2.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
function isComment(node2) {
  return node2.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
function isDirective(node2) {
  return node2.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
function isDocument(node2) {
  return node2.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
function hasChildren(node2) {
  return Object.prototype.hasOwnProperty.call(node2, "children");
}
node.hasChildren = hasChildren;
function cloneNode(node2, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }
  var result;
  if (isText(node2)) {
    result = new Text(node2.data);
  } else if (isComment(node2)) {
    result = new Comment(node2.data);
  } else if (isTag(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_1 = new Element$1(node2.name, __assign$1({}, node2.attribs), children);
    children.forEach(function(child) {
      return child.parent = clone_1;
    });
    if (node2["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign$1({}, node2["x-attribsNamespace"]);
    }
    if (node2["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign$1({}, node2["x-attribsPrefix"]);
    }
    result = clone_1;
  } else if (isCDATA(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
    children.forEach(function(child) {
      return child.parent = clone_2;
    });
    result = clone_2;
  } else if (isDocument(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_3 = new Document(children);
    children.forEach(function(child) {
      return child.parent = clone_3;
    });
    if (node2["x-mode"]) {
      clone_3["x-mode"] = node2["x-mode"];
    }
    result = clone_3;
  } else if (isDirective(node2)) {
    var instruction = new ProcessingInstruction(node2.name, node2.data);
    if (node2["x-name"] != null) {
      instruction["x-name"] = node2["x-name"];
      instruction["x-publicId"] = node2["x-publicId"];
      instruction["x-systemId"] = node2["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error("Not implemented yet: " + node2.type);
  }
  result.startIndex = node2.startIndex;
  result.endIndex = node2.endIndex;
  return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
  var children = childs.map(function(child) {
    return cloneNode(child, true);
  });
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DomHandler = void 0;
  var domelementtype_12 = lib$4;
  var node_1 = node;
  __exportStar(node, exports);
  var reWhitespace = /\s+/g;
  var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
  };
  var DomHandler = function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler2.prototype.onparserinit = function(parser) {
      this.parser = parser;
    };
    DomHandler2.prototype.onreset = function() {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    DomHandler2.prototype.onend = function() {
      if (this.done)
        return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };
    DomHandler2.prototype.onerror = function(error) {
      this.handleCallback(error);
    };
    DomHandler2.prototype.onclosetag = function() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB)
        this.elementCB(elem);
    };
    DomHandler2.prototype.onopentag = function(name, attribs) {
      var type = this.options.xmlMode ? domelementtype_12.ElementType.Tag : void 0;
      var element = new node_1.Element(name, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }
        var node2 = new node_1.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_1.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_1.Text("");
      var node2 = new node_1.NodeWithChildren(domelementtype_12.ElementType.CDATA, [text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name, data) {
      var node2 = new node_1.ProcessingInstruction(name, data);
      this.addNode(node2);
    };
    DomHandler2.prototype.handleCallback = function(error) {
      if (typeof this.callback === "function") {
        this.callback(error, this.dom);
      } else if (error) {
        throw error;
      }
    };
    DomHandler2.prototype.addNode = function(node2) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node2.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node2.endIndex = this.parser.endIndex;
      }
      parent.children.push(node2);
      if (previousSibling) {
        node2.prev = previousSibling;
        previousSibling.next = node2;
      }
      node2.parent = parent;
      this.lastNode = null;
    };
    return DomHandler2;
  }();
  exports.DomHandler = DomHandler;
  exports.default = DomHandler;
})(lib$5);
var selderee$2 = {};
var parseley$1 = {};
var nearley$1 = { exports: {} };
(function(module) {
  (function(root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.nearley = factory();
    }
  })(commonjsGlobal, function() {
    function Rule(name, symbols, postprocess) {
      this.id = ++Rule.highestId;
      this.name = name;
      this.symbols = symbols;
      this.postprocess = postprocess;
      return this;
    }
    Rule.highestId = 0;
    Rule.prototype.toString = function(withCursorAt) {
      var symbolSequence = typeof withCursorAt === "undefined" ? this.symbols.map(getSymbolShortDisplay).join(" ") : this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(" ") + " \u25CF " + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(" ");
      return this.name + " \u2192 " + symbolSequence;
    };
    function State2(rule, dot2, reference, wantedBy) {
      this.rule = rule;
      this.dot = dot2;
      this.reference = reference;
      this.data = [];
      this.wantedBy = wantedBy;
      this.isComplete = this.dot === rule.symbols.length;
    }
    State2.prototype.toString = function() {
      return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };
    State2.prototype.nextState = function(child) {
      var state2 = new State2(this.rule, this.dot + 1, this.reference, this.wantedBy);
      state2.left = this;
      state2.right = child;
      if (state2.isComplete) {
        state2.data = state2.build();
        state2.right = void 0;
      }
      return state2;
    };
    State2.prototype.build = function() {
      var children = [];
      var node2 = this;
      do {
        children.push(node2.right.data);
        node2 = node2.left;
      } while (node2.left);
      children.reverse();
      return children;
    };
    State2.prototype.finish = function() {
      if (this.rule.postprocess) {
        this.data = this.rule.postprocess(this.data, this.reference, Parser2.fail);
      }
    };
    function Column(grammar2, index2) {
      this.grammar = grammar2;
      this.index = index2;
      this.states = [];
      this.wants = {};
      this.scannable = [];
      this.completed = {};
    }
    Column.prototype.process = function(nextColumn) {
      var states = this.states;
      var wants = this.wants;
      var completed = this.completed;
      for (var w2 = 0; w2 < states.length; w2++) {
        var state2 = states[w2];
        if (state2.isComplete) {
          state2.finish();
          if (state2.data !== Parser2.fail) {
            var wantedBy = state2.wantedBy;
            for (var i = wantedBy.length; i--; ) {
              var left = wantedBy[i];
              this.complete(left, state2);
            }
            if (state2.reference === this.index) {
              var exp = state2.rule.name;
              (this.completed[exp] = this.completed[exp] || []).push(state2);
            }
          }
        } else {
          var exp = state2.rule.symbols[state2.dot];
          if (typeof exp !== "string") {
            this.scannable.push(state2);
            continue;
          }
          if (wants[exp]) {
            wants[exp].push(state2);
            if (completed.hasOwnProperty(exp)) {
              var nulls = completed[exp];
              for (var i = 0; i < nulls.length; i++) {
                var right = nulls[i];
                this.complete(state2, right);
              }
            }
          } else {
            wants[exp] = [state2];
            this.predict(exp);
          }
        }
      }
    };
    Column.prototype.predict = function(exp) {
      var rules = this.grammar.byName[exp] || [];
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        var wantedBy = this.wants[exp];
        var s2 = new State2(r, 0, this.index, wantedBy);
        this.states.push(s2);
      }
    };
    Column.prototype.complete = function(left, right) {
      var copy2 = left.nextState(right);
      this.states.push(copy2);
    };
    function Grammar(rules, start) {
      this.rules = rules;
      this.start = start || this.rules[0].name;
      var byName = this.byName = {};
      this.rules.forEach(function(rule) {
        if (!byName.hasOwnProperty(rule.name)) {
          byName[rule.name] = [];
        }
        byName[rule.name].push(rule);
      });
    }
    Grammar.fromCompiled = function(rules, start) {
      var lexer2 = rules.Lexer;
      if (rules.ParserStart) {
        start = rules.ParserStart;
        rules = rules.ParserRules;
      }
      var rules = rules.map(function(r) {
        return new Rule(r.name, r.symbols, r.postprocess);
      });
      var g2 = new Grammar(rules, start);
      g2.lexer = lexer2;
      return g2;
    };
    function StreamLexer() {
      this.reset("");
    }
    StreamLexer.prototype.reset = function(data, state2) {
      this.buffer = data;
      this.index = 0;
      this.line = state2 ? state2.line : 1;
      this.lastLineBreak = state2 ? -state2.col : 0;
    };
    StreamLexer.prototype.next = function() {
      if (this.index < this.buffer.length) {
        var ch = this.buffer[this.index++];
        if (ch === "\n") {
          this.line += 1;
          this.lastLineBreak = this.index;
        }
        return { value: ch };
      }
    };
    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak
      };
    };
    StreamLexer.prototype.formatError = function(token, message) {
      var buffer = this.buffer;
      if (typeof buffer === "string") {
        var lines = buffer.split("\n").slice(Math.max(0, this.line - 5), this.line);
        buffer.indexOf("\n", this.index);
        var col = this.index - this.lastLineBreak;
        var lastLineDigits = String(this.line).length;
        message += " at line " + this.line + " col " + col + ":\n\n";
        message += lines.map(function(line, i) {
          return pad(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
        }, this).join("\n");
        message += "\n" + pad("", lastLineDigits + col) + "^\n";
        return message;
      } else {
        return message + " at index " + (this.index - 1);
      }
      function pad(n, length) {
        var s2 = String(n);
        return Array(length - s2.length + 1).join(" ") + s2;
      }
    };
    function Parser2(rules, start, options) {
      if (rules instanceof Grammar) {
        var grammar2 = rules;
        var options = start;
      } else {
        var grammar2 = Grammar.fromCompiled(rules, start);
      }
      this.grammar = grammar2;
      this.options = {
        keepHistory: false,
        lexer: grammar2.lexer || new StreamLexer()
      };
      for (var key in options || {}) {
        this.options[key] = options[key];
      }
      this.lexer = this.options.lexer;
      this.lexerState = void 0;
      var column = new Column(grammar2, 0);
      this.table = [column];
      column.wants[grammar2.start] = [];
      column.predict(grammar2.start);
      column.process();
      this.current = 0;
    }
    Parser2.fail = {};
    Parser2.prototype.feed = function(chunk) {
      var lexer2 = this.lexer;
      lexer2.reset(chunk, this.lexerState);
      var token;
      while (true) {
        try {
          token = lexer2.next();
          if (!token) {
            break;
          }
        } catch (e) {
          var nextColumn = new Column(this.grammar, this.current + 1);
          this.table.push(nextColumn);
          var err = new Error(this.reportLexerError(e));
          err.offset = this.current;
          err.token = e.token;
          throw err;
        }
        var column = this.table[this.current];
        if (!this.options.keepHistory) {
          delete this.table[this.current - 1];
        }
        var n = this.current + 1;
        var nextColumn = new Column(this.grammar, n);
        this.table.push(nextColumn);
        var literal = token.text !== void 0 ? token.text : token.value;
        var value = lexer2.constructor === StreamLexer ? token.value : token;
        var scannable = column.scannable;
        for (var w2 = scannable.length; w2--; ) {
          var state2 = scannable[w2];
          var expect = state2.rule.symbols[state2.dot];
          if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
            var next = state2.nextState({ data: value, token, isToken: true, reference: n - 1 });
            nextColumn.states.push(next);
          }
        }
        nextColumn.process();
        if (nextColumn.states.length === 0) {
          var err = new Error(this.reportError(token));
          err.offset = this.current;
          err.token = token;
          throw err;
        }
        if (this.options.keepHistory) {
          column.lexerState = lexer2.save();
        }
        this.current++;
      }
      if (column) {
        this.lexerState = lexer2.save();
      }
      this.results = this.finish();
      return this;
    };
    Parser2.prototype.reportLexerError = function(lexerError) {
      var tokenDisplay, lexerMessage;
      var token = lexerError.token;
      if (token) {
        tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
        lexerMessage = this.lexer.formatError(token, "Syntax error");
      } else {
        tokenDisplay = "input (lexer error)";
        lexerMessage = lexerError.message;
      }
      return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };
    Parser2.prototype.reportError = function(token) {
      var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== void 0 ? token.value : token);
      var lexerMessage = this.lexer.formatError(token, "Syntax error");
      return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };
    Parser2.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
      var lines = [];
      lines.push(lexerMessage);
      var lastColumnIndex = this.table.length - 2;
      var lastColumn = this.table[lastColumnIndex];
      var expectantStates = lastColumn.states.filter(function(state2) {
        var nextSymbol = state2.rule.symbols[state2.dot];
        return nextSymbol && typeof nextSymbol !== "string";
      });
      if (expectantStates.length === 0) {
        lines.push("Unexpected " + tokenDisplay + ". I did not expect any more input. Here is the state of my parse table:\n");
        this.displayStateStack(lastColumn.states, lines);
      } else {
        lines.push("Unexpected " + tokenDisplay + ". Instead, I was expecting to see one of the following:\n");
        var stateStacks = expectantStates.map(function(state2) {
          return this.buildFirstStateStack(state2, []) || [state2];
        }, this);
        stateStacks.forEach(function(stateStack) {
          var state2 = stateStack[0];
          var nextSymbol = state2.rule.symbols[state2.dot];
          var symbolDisplay = this.getSymbolDisplay(nextSymbol);
          lines.push("A " + symbolDisplay + " based on:");
          this.displayStateStack(stateStack, lines);
        }, this);
      }
      lines.push("");
      return lines.join("\n");
    };
    Parser2.prototype.displayStateStack = function(stateStack, lines) {
      var lastDisplay;
      var sameDisplayCount = 0;
      for (var j2 = 0; j2 < stateStack.length; j2++) {
        var state2 = stateStack[j2];
        var display = state2.rule.toString(state2.dot);
        if (display === lastDisplay) {
          sameDisplayCount++;
        } else {
          if (sameDisplayCount > 0) {
            lines.push("    ^ " + sameDisplayCount + " more lines identical to this");
          }
          sameDisplayCount = 0;
          lines.push("    " + display);
        }
        lastDisplay = display;
      }
    };
    Parser2.prototype.getSymbolDisplay = function(symbol) {
      return getSymbolLongDisplay(symbol);
    };
    Parser2.prototype.buildFirstStateStack = function(state2, visited) {
      if (visited.indexOf(state2) !== -1) {
        return null;
      }
      if (state2.wantedBy.length === 0) {
        return [state2];
      }
      var prevState = state2.wantedBy[0];
      var childVisited = [state2].concat(visited);
      var childResult = this.buildFirstStateStack(prevState, childVisited);
      if (childResult === null) {
        return null;
      }
      return [state2].concat(childResult);
    };
    Parser2.prototype.save = function() {
      var column = this.table[this.current];
      column.lexerState = this.lexerState;
      return column;
    };
    Parser2.prototype.restore = function(column) {
      var index2 = column.index;
      this.current = index2;
      this.table[index2] = column;
      this.table.splice(index2 + 1);
      this.lexerState = column.lexerState;
      this.results = this.finish();
    };
    Parser2.prototype.rewind = function(index2) {
      if (!this.options.keepHistory) {
        throw new Error("set option `keepHistory` to enable rewinding");
      }
      this.restore(this.table[index2]);
    };
    Parser2.prototype.finish = function() {
      var considerations = [];
      var start = this.grammar.start;
      var column = this.table[this.table.length - 1];
      column.states.forEach(function(t) {
        if (t.rule.name === start && t.dot === t.rule.symbols.length && t.reference === 0 && t.data !== Parser2.fail) {
          considerations.push(t);
        }
      });
      return considerations.map(function(c) {
        return c.data;
      });
    };
    function getSymbolLongDisplay(symbol) {
      var type = typeof symbol;
      if (type === "string") {
        return symbol;
      } else if (type === "object") {
        if (symbol.literal) {
          return JSON.stringify(symbol.literal);
        } else if (symbol instanceof RegExp) {
          return "character matching " + symbol;
        } else if (symbol.type) {
          return symbol.type + " token";
        } else if (symbol.test) {
          return "token matching " + String(symbol.test);
        } else {
          throw new Error("Unknown symbol type: " + symbol);
        }
      }
    }
    function getSymbolShortDisplay(symbol) {
      var type = typeof symbol;
      if (type === "string") {
        return symbol;
      } else if (type === "object") {
        if (symbol.literal) {
          return JSON.stringify(symbol.literal);
        } else if (symbol instanceof RegExp) {
          return symbol.toString();
        } else if (symbol.type) {
          return "%" + symbol.type;
        } else if (symbol.test) {
          return "<" + String(symbol.test) + ">";
        } else {
          throw new Error("Unknown symbol type: " + symbol);
        }
      }
    }
    return {
      Parser: Parser2,
      Grammar,
      Rule
    };
  });
})(nearley$1);
var moo$1 = { exports: {} };
(function(module) {
  (function(root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.moo = factory();
    }
  })(commonjsGlobal, function() {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var toString = Object.prototype.toString;
    var hasSticky = typeof new RegExp().sticky === "boolean";
    function isRegExp(o) {
      return o && toString.call(o) === "[object RegExp]";
    }
    function isObject(o) {
      return o && typeof o === "object" && !isRegExp(o) && !Array.isArray(o);
    }
    function reEscape(s2) {
      return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function reGroups(s2) {
      var re = new RegExp("|" + s2);
      return re.exec("").length - 1;
    }
    function reCapture(s2) {
      return "(" + s2 + ")";
    }
    function reUnion(regexps) {
      if (!regexps.length)
        return "(?!)";
      var source = regexps.map(function(s2) {
        return "(?:" + s2 + ")";
      }).join("|");
      return "(?:" + source + ")";
    }
    function regexpOrLiteral(obj) {
      if (typeof obj === "string") {
        return "(?:" + reEscape(obj) + ")";
      } else if (isRegExp(obj)) {
        if (obj.ignoreCase)
          throw new Error("RegExp /i flag not allowed");
        if (obj.global)
          throw new Error("RegExp /g flag is implied");
        if (obj.sticky)
          throw new Error("RegExp /y flag is implied");
        if (obj.multiline)
          throw new Error("RegExp /m flag is implied");
        return obj.source;
      } else {
        throw new Error("Not a pattern: " + obj);
      }
    }
    function objectToRules(object) {
      var keys = Object.getOwnPropertyNames(object);
      var result = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var thing = object[key];
        var rules = [].concat(thing);
        if (key === "include") {
          for (var j2 = 0; j2 < rules.length; j2++) {
            result.push({ include: rules[j2] });
          }
          continue;
        }
        var match2 = [];
        rules.forEach(function(rule) {
          if (isObject(rule)) {
            if (match2.length)
              result.push(ruleOptions(key, match2));
            result.push(ruleOptions(key, rule));
            match2 = [];
          } else {
            match2.push(rule);
          }
        });
        if (match2.length)
          result.push(ruleOptions(key, match2));
      }
      return result;
    }
    function arrayToRules(array) {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (obj.include) {
          var include = [].concat(obj.include);
          for (var j2 = 0; j2 < include.length; j2++) {
            result.push({ include: include[j2] });
          }
          continue;
        }
        if (!obj.type) {
          throw new Error("Rule has no type: " + JSON.stringify(obj));
        }
        result.push(ruleOptions(obj.type, obj));
      }
      return result;
    }
    function ruleOptions(type, obj) {
      if (!isObject(obj)) {
        obj = { match: obj };
      }
      if (obj.include) {
        throw new Error("Matching rules cannot also include states");
      }
      var options = {
        defaultType: type,
        lineBreaks: !!obj.error || !!obj.fallback,
        pop: false,
        next: null,
        push: null,
        error: false,
        fallback: false,
        value: null,
        type: null,
        shouldThrow: false
      };
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          options[key] = obj[key];
        }
      }
      if (typeof options.type === "string" && type !== options.type) {
        throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')");
      }
      var match2 = options.match;
      options.match = Array.isArray(match2) ? match2 : match2 ? [match2] : [];
      options.match.sort(function(a, b2) {
        return isRegExp(a) && isRegExp(b2) ? 0 : isRegExp(b2) ? -1 : isRegExp(a) ? 1 : b2.length - a.length;
      });
      return options;
    }
    function toRules(spec) {
      return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec);
    }
    var defaultErrorRule = ruleOptions("error", { lineBreaks: true, shouldThrow: true });
    function compileRules(rules, hasStates) {
      var errorRule = null;
      var fast = Object.create(null);
      var fastAllowed = true;
      var unicodeFlag = null;
      var groups = [];
      var parts = [];
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].fallback) {
          fastAllowed = false;
        }
      }
      for (var i = 0; i < rules.length; i++) {
        var options = rules[i];
        if (options.include) {
          throw new Error("Inheritance is not allowed in stateless lexers");
        }
        if (options.error || options.fallback) {
          if (errorRule) {
            if (!options.fallback === !errorRule.fallback) {
              throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')");
            } else {
              throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')");
            }
          }
          errorRule = options;
        }
        var match2 = options.match.slice();
        if (fastAllowed) {
          while (match2.length && typeof match2[0] === "string" && match2[0].length === 1) {
            var word = match2.shift();
            fast[word.charCodeAt(0)] = options;
          }
        }
        if (options.pop || options.push || options.next) {
          if (!hasStates) {
            throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')");
          }
          if (options.fallback) {
            throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')");
          }
        }
        if (match2.length === 0) {
          continue;
        }
        fastAllowed = false;
        groups.push(options);
        for (var j2 = 0; j2 < match2.length; j2++) {
          var obj = match2[j2];
          if (!isRegExp(obj)) {
            continue;
          }
          if (unicodeFlag === null) {
            unicodeFlag = obj.unicode;
          } else if (unicodeFlag !== obj.unicode && options.fallback === false) {
            throw new Error("If one rule is /u then all must be");
          }
        }
        var pat = reUnion(match2.map(regexpOrLiteral));
        var regexp = new RegExp(pat);
        if (regexp.test("")) {
          throw new Error("RegExp matches empty string: " + regexp);
        }
        var groupCount = reGroups(pat);
        if (groupCount > 0) {
          throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: \u2026 ) instead");
        }
        if (!options.lineBreaks && regexp.test("\n")) {
          throw new Error("Rule should declare lineBreaks: " + regexp);
        }
        parts.push(reCapture(pat));
      }
      var fallbackRule = errorRule && errorRule.fallback;
      var flags = hasSticky && !fallbackRule ? "ym" : "gm";
      var suffix = hasSticky || fallbackRule ? "" : "|";
      if (unicodeFlag === true)
        flags += "u";
      var combined = new RegExp(reUnion(parts) + suffix, flags);
      return { regexp: combined, groups, fast, error: errorRule || defaultErrorRule };
    }
    function compile2(rules) {
      var result = compileRules(toRules(rules));
      return new Lexer({ start: result }, "start");
    }
    function checkStateGroup(g2, name, map2) {
      var state2 = g2 && (g2.push || g2.next);
      if (state2 && !map2[state2]) {
        throw new Error("Missing state '" + state2 + "' (in token '" + g2.defaultType + "' of state '" + name + "')");
      }
      if (g2 && g2.pop && +g2.pop !== 1) {
        throw new Error("pop must be 1 (in token '" + g2.defaultType + "' of state '" + name + "')");
      }
    }
    function compileStates(states, start) {
      var all = states.$all ? toRules(states.$all) : [];
      delete states.$all;
      var keys = Object.getOwnPropertyNames(states);
      if (!start)
        start = keys[0];
      var ruleMap = Object.create(null);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        ruleMap[key] = toRules(states[key]).concat(all);
      }
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var rules = ruleMap[key];
        var included = Object.create(null);
        for (var j2 = 0; j2 < rules.length; j2++) {
          var rule = rules[j2];
          if (!rule.include)
            continue;
          var splice = [j2, 1];
          if (rule.include !== key && !included[rule.include]) {
            included[rule.include] = true;
            var newRules = ruleMap[rule.include];
            if (!newRules) {
              throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')");
            }
            for (var k2 = 0; k2 < newRules.length; k2++) {
              var newRule = newRules[k2];
              if (rules.indexOf(newRule) !== -1)
                continue;
              splice.push(newRule);
            }
          }
          rules.splice.apply(rules, splice);
          j2--;
        }
      }
      var map2 = Object.create(null);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        map2[key] = compileRules(ruleMap[key], true);
      }
      for (var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var state2 = map2[name];
        var groups = state2.groups;
        for (var j2 = 0; j2 < groups.length; j2++) {
          checkStateGroup(groups[j2], name, map2);
        }
        var fastKeys = Object.getOwnPropertyNames(state2.fast);
        for (var j2 = 0; j2 < fastKeys.length; j2++) {
          checkStateGroup(state2.fast[fastKeys[j2]], name, map2);
        }
      }
      return new Lexer(map2, start);
    }
    function keywordTransform(map2) {
      var reverseMap = Object.create(null);
      var byLength = Object.create(null);
      var types = Object.getOwnPropertyNames(map2);
      for (var i = 0; i < types.length; i++) {
        var tokenType = types[i];
        var item = map2[tokenType];
        var keywordList = Array.isArray(item) ? item : [item];
        keywordList.forEach(function(keyword) {
          (byLength[keyword.length] = byLength[keyword.length] || []).push(keyword);
          if (typeof keyword !== "string") {
            throw new Error("keyword must be string (in keyword '" + tokenType + "')");
          }
          reverseMap[keyword] = tokenType;
        });
      }
      function str(x2) {
        return JSON.stringify(x2);
      }
      var source = "";
      source += "switch (value.length) {\n";
      for (var length in byLength) {
        var keywords = byLength[length];
        source += "case " + length + ":\n";
        source += "switch (value) {\n";
        keywords.forEach(function(keyword) {
          var tokenType2 = reverseMap[keyword];
          source += "case " + str(keyword) + ": return " + str(tokenType2) + "\n";
        });
        source += "}\n";
      }
      source += "}\n";
      return Function("value", source);
    }
    var Lexer = function(states, state2) {
      this.startState = state2;
      this.states = states;
      this.buffer = "";
      this.stack = [];
      this.reset();
    };
    Lexer.prototype.reset = function(data, info) {
      this.buffer = data || "";
      this.index = 0;
      this.line = info ? info.line : 1;
      this.col = info ? info.col : 1;
      this.queuedToken = info ? info.queuedToken : null;
      this.queuedThrow = info ? info.queuedThrow : null;
      this.setState(info ? info.state : this.startState);
      this.stack = info && info.stack ? info.stack.slice() : [];
      return this;
    };
    Lexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.col,
        state: this.state,
        stack: this.stack.slice(),
        queuedToken: this.queuedToken,
        queuedThrow: this.queuedThrow
      };
    };
    Lexer.prototype.setState = function(state2) {
      if (!state2 || this.state === state2)
        return;
      this.state = state2;
      var info = this.states[state2];
      this.groups = info.groups;
      this.error = info.error;
      this.re = info.regexp;
      this.fast = info.fast;
    };
    Lexer.prototype.popState = function() {
      this.setState(this.stack.pop());
    };
    Lexer.prototype.pushState = function(state2) {
      this.stack.push(this.state);
      this.setState(state2);
    };
    var eat = hasSticky ? function(re, buffer) {
      return re.exec(buffer);
    } : function(re, buffer) {
      var match2 = re.exec(buffer);
      if (match2[0].length === 0) {
        return null;
      }
      return match2;
    };
    Lexer.prototype._getGroup = function(match2) {
      var groupCount = this.groups.length;
      for (var i = 0; i < groupCount; i++) {
        if (match2[i + 1] !== void 0) {
          return this.groups[i];
        }
      }
      throw new Error("Cannot find token type for matched text");
    };
    function tokenToString() {
      return this.value;
    }
    Lexer.prototype.next = function() {
      var index2 = this.index;
      if (this.queuedGroup) {
        var token = this._token(this.queuedGroup, this.queuedText, index2);
        this.queuedGroup = null;
        this.queuedText = "";
        return token;
      }
      var buffer = this.buffer;
      if (index2 === buffer.length) {
        return;
      }
      var group = this.fast[buffer.charCodeAt(index2)];
      if (group) {
        return this._token(group, buffer.charAt(index2), index2);
      }
      var re = this.re;
      re.lastIndex = index2;
      var match2 = eat(re, buffer);
      var error = this.error;
      if (match2 == null) {
        return this._token(error, buffer.slice(index2, buffer.length), index2);
      }
      var group = this._getGroup(match2);
      var text = match2[0];
      if (error.fallback && match2.index !== index2) {
        this.queuedGroup = group;
        this.queuedText = text;
        return this._token(error, buffer.slice(index2, match2.index), index2);
      }
      return this._token(group, text, index2);
    };
    Lexer.prototype._token = function(group, text, offset) {
      var lineBreaks = 0;
      if (group.lineBreaks) {
        var matchNL = /\n/g;
        var nl = 1;
        if (text === "\n") {
          lineBreaks = 1;
        } else {
          while (matchNL.exec(text)) {
            lineBreaks++;
            nl = matchNL.lastIndex;
          }
        }
      }
      var token = {
        type: typeof group.type === "function" && group.type(text) || group.defaultType,
        value: typeof group.value === "function" ? group.value(text) : text,
        text,
        toString: tokenToString,
        offset,
        lineBreaks,
        line: this.line,
        col: this.col
      };
      var size = text.length;
      this.index += size;
      this.line += lineBreaks;
      if (lineBreaks !== 0) {
        this.col = size - nl + 1;
      } else {
        this.col += size;
      }
      if (group.shouldThrow) {
        throw new Error(this.formatError(token, "invalid syntax"));
      }
      if (group.pop)
        this.popState();
      else if (group.push)
        this.pushState(group.push);
      else if (group.next)
        this.setState(group.next);
      return token;
    };
    if (typeof Symbol !== "undefined" && Symbol.iterator) {
      var LexerIterator = function(lexer2) {
        this.lexer = lexer2;
      };
      LexerIterator.prototype.next = function() {
        var token = this.lexer.next();
        return { value: token, done: !token };
      };
      LexerIterator.prototype[Symbol.iterator] = function() {
        return this;
      };
      Lexer.prototype[Symbol.iterator] = function() {
        return new LexerIterator(this);
      };
    }
    Lexer.prototype.formatError = function(token, message) {
      if (token == null) {
        var text = this.buffer.slice(this.index);
        var token = {
          text,
          offset: this.index,
          lineBreaks: text.indexOf("\n") === -1 ? 0 : 1,
          line: this.line,
          col: this.col
        };
      }
      var start = Math.max(0, token.offset - token.col + 1);
      var eol = token.lineBreaks ? token.text.indexOf("\n") : token.text.length;
      var firstLine = this.buffer.substring(start, token.offset + eol);
      message += " at line " + token.line + " col " + token.col + ":\n\n";
      message += "  " + firstLine + "\n";
      message += "  " + Array(token.col).join(" ") + "^";
      return message;
    };
    Lexer.prototype.clone = function() {
      return new Lexer(this.states, this.state);
    };
    Lexer.prototype.has = function(tokenType) {
      return true;
    };
    return {
      compile: compile2,
      states: compileStates,
      error: Object.freeze({ error: true }),
      fallback: Object.freeze({ fallback: true }),
      keywords: keywordTransform
    };
  });
})(moo$1);
Object.defineProperty(parseley$1, "__esModule", { value: true });
var nearley = nearley$1.exports;
var moo = moo$1.exports;
function _interopNamespace$1(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function(k2) {
      if (k2 !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e, k2);
        Object.defineProperty(n, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e[k2];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var moo__namespace = /* @__PURE__ */ _interopNamespace$1(moo);
function id(d2) {
  return d2[0];
}
const lexer = moo__namespace.compile({
  ws: { match: /[ \t\r\n\f]+/, lineBreaks: true },
  idn: { match: /[a-zA-Z_-][a-zA-Z0-9_-]*/ },
  hashToken: { match: /#[a-zA-Z0-9_-]+/, value: (s2) => s2.slice(1) },
  str1: { match: /'(?:\\['\\]|[^\n'\\])*'/, value: (s2) => s2.slice(1, -1) },
  str2: { match: /"(?:\\["\\]|[^\n"\\])*"/, value: (s2) => s2.slice(1, -1) },
  asterisk: "*",
  fullstop: ".",
  comma: ",",
  lbr: "[",
  rbr: "]",
  eq: "=",
  gt: ">",
  vbar: "|",
  plus: "+",
  tilde: "~",
  caret: "^",
  dollar: "$"
});
function firstTokenValue(tokens) {
  return tokens[0].value;
}
function second(tokens) {
  return tokens[1];
}
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
  return [a0 + b0, a1 + b1, a2 + b2];
}
const grammar = {
  Lexer: lexer,
  ParserRules: [
    { "name": "main", "symbols": ["_", "listSelector", "_"], "postprocess": second },
    { "name": "mainNoList", "symbols": ["_", "complexSelector", "_"], "postprocess": second },
    { "name": "listSelector", "symbols": ["complexSelector"], "postprocess": ([next]) => ({ type: "list", list: [next] }) },
    { "name": "listSelector", "symbols": ["listSelector", "_", lexer.has("comma") ? { type: "comma" } : comma, "_", "complexSelector"], "postprocess": ([acc, , , , next]) => ({ type: "list", list: [...acc.list, next] }) },
    { "name": "complexSelector", "symbols": ["compoundSelector"], "postprocess": id },
    { "name": "complexSelector", "symbols": ["complexSelector", "__", "compoundSelector"], "postprocess": ([left, , right]) => ({
      type: "compound",
      list: [...right.list, { type: "combinator", combinator: " ", left, specificity: left.specificity }],
      specificity: sumSpec(left.specificity, right.specificity)
    }) },
    { "name": "complexSelector", "symbols": ["complexSelector", "_", "combinator", "_", "compoundSelector"], "postprocess": ([left, , c, , right]) => ({
      type: "compound",
      list: [...right.list, { type: "combinator", combinator: c, left, specificity: left.specificity }],
      specificity: sumSpec(left.specificity, right.specificity)
    }) },
    { "name": "combinator", "symbols": [lexer.has("gt") ? { type: "gt" } : gt], "postprocess": () => ">" },
    { "name": "combinator", "symbols": [lexer.has("plus") ? { type: "plus" } : plus], "postprocess": () => "+" },
    { "name": "combinator", "symbols": [lexer.has("tilde") ? { type: "tilde" } : tilde], "postprocess": () => "~" },
    { "name": "combinator", "symbols": [lexer.has("vbar") ? { type: "vbar" } : vbar, lexer.has("vbar") ? { type: "vbar" } : vbar], "postprocess": () => "||" },
    { "name": "compoundSelector", "symbols": ["typeSelector"], "postprocess": ([next]) => ({
      type: "compound",
      list: [next],
      specificity: next.specificity
    }) },
    { "name": "compoundSelector", "symbols": ["subclassSelector"], "postprocess": ([next]) => ({
      type: "compound",
      list: [next],
      specificity: next.specificity
    }) },
    { "name": "compoundSelector", "symbols": ["compoundSelector", "subclassSelector"], "postprocess": ([acc, next]) => ({
      type: "compound",
      list: [...acc.list, next],
      specificity: sumSpec(acc.specificity, next.specificity)
    }) },
    { "name": "subclassSelector", "symbols": ["idSelector"], "postprocess": id },
    { "name": "subclassSelector", "symbols": ["classSelector"], "postprocess": id },
    { "name": "subclassSelector", "symbols": ["attrSelector"], "postprocess": id },
    { "name": "attrSelector", "symbols": ["attrPresenceSelector"], "postprocess": id },
    { "name": "attrSelector", "symbols": ["attrValueSelector"], "postprocess": id },
    { "name": "typeSelector", "symbols": ["tagSelector"], "postprocess": id },
    { "name": "typeSelector", "symbols": ["uniSelector"], "postprocess": id },
    {
      "name": "attrPresenceSelector",
      "symbols": [lexer.has("lbr") ? { type: "lbr" } : lbr, "_", "wqname", "_", lexer.has("rbr") ? { type: "rbr" } : rbr],
      "postprocess": ([, , wqname]) => ({
        type: "attrPresence",
        name: wqname.name,
        namespace: wqname.namespace,
        specificity: [0, 1, 0]
      })
    },
    {
      "name": "attrValueSelector",
      "symbols": [lexer.has("lbr") ? { type: "lbr" } : lbr, "_", "wqname", "_", "attrMatcher", "_", "attrValue", "_", lexer.has("rbr") ? { type: "rbr" } : rbr],
      "postprocess": ([, , wqname, , matcher, , v2]) => ({
        type: "attrValue",
        name: wqname.name,
        namespace: wqname.namespace,
        matcher,
        value: v2.value,
        modifier: v2.modifier,
        specificity: [0, 1, 0]
      })
    },
    { "name": "attrMatcher", "symbols": [lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "=" },
    { "name": "attrMatcher", "symbols": [lexer.has("tilde") ? { type: "tilde" } : tilde, lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "~=" },
    { "name": "attrMatcher", "symbols": [lexer.has("vbar") ? { type: "vbar" } : vbar, lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "|=" },
    { "name": "attrMatcher", "symbols": [lexer.has("caret") ? { type: "caret" } : caret, lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "^=" },
    { "name": "attrMatcher", "symbols": [lexer.has("dollar") ? { type: "dollar" } : dollar, lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "$=" },
    { "name": "attrMatcher", "symbols": [lexer.has("asterisk") ? { type: "asterisk" } : asterisk, lexer.has("eq") ? { type: "eq" } : eq], "postprocess": () => "*=" },
    { "name": "attrValue", "symbols": ["str"], "postprocess": ([v2]) => ({ value: v2, modifier: null }) },
    { "name": "attrValue", "symbols": ["idn"], "postprocess": ([v2]) => ({ value: v2, modifier: null }) },
    { "name": "attrValue", "symbols": ["str", "_", "attrModifier"], "postprocess": ([v2, , mod]) => ({ value: v2, modifier: mod }) },
    { "name": "attrValue", "symbols": ["idn", "__", "attrModifier"], "postprocess": ([v2, , mod]) => ({ value: v2, modifier: mod }) },
    { "name": "attrModifier", "symbols": [{ "literal": "i" }], "postprocess": () => "i" },
    { "name": "attrModifier", "symbols": [{ "literal": "I" }], "postprocess": () => "i" },
    { "name": "attrModifier", "symbols": [{ "literal": "s" }], "postprocess": () => "s" },
    { "name": "attrModifier", "symbols": [{ "literal": "S" }], "postprocess": () => "s" },
    { "name": "idSelector", "symbols": [lexer.has("hashToken") ? { type: "hashToken" } : hashToken], "postprocess": ([{ value: name }]) => ({ type: "id", name, specificity: [1, 0, 0] }) },
    { "name": "classSelector", "symbols": [lexer.has("fullstop") ? { type: "fullstop" } : fullstop, "idn"], "postprocess": ([, name]) => ({ type: "class", name, specificity: [0, 1, 0] }) },
    {
      "name": "tagSelector",
      "symbols": ["wqname"],
      "postprocess": ([wqname]) => ({
        type: "tag",
        name: wqname.name,
        namespace: wqname.namespace,
        specificity: [0, 0, 1]
      })
    },
    { "name": "uniSelector", "symbols": [lexer.has("asterisk") ? { type: "asterisk" } : asterisk], "postprocess": () => ({ type: "universal", namespace: null, specificity: [0, 0, 0] }) },
    { "name": "uniSelector", "symbols": ["ns", lexer.has("asterisk") ? { type: "asterisk" } : asterisk], "postprocess": ([ns]) => ({ type: "universal", namespace: ns, specificity: [0, 0, 0] }) },
    { "name": "wqname", "symbols": ["idn"], "postprocess": ([name]) => ({ name, namespace: null }) },
    { "name": "wqname", "symbols": ["ns", "idn"], "postprocess": ([ns, name]) => ({ name, namespace: ns }) },
    { "name": "ns", "symbols": [lexer.has("vbar") ? { type: "vbar" } : vbar], "postprocess": () => "" },
    { "name": "ns", "symbols": ["idn", lexer.has("vbar") ? { type: "vbar" } : vbar], "postprocess": id },
    { "name": "str", "symbols": [lexer.has("str1") ? { type: "str1" } : str1], "postprocess": firstTokenValue },
    { "name": "str", "symbols": [lexer.has("str2") ? { type: "str2" } : str2], "postprocess": firstTokenValue },
    { "name": "idn", "symbols": [lexer.has("idn") ? { type: "idn" } : idn], "postprocess": firstTokenValue },
    { "name": "_$ebnf$1", "symbols": [lexer.has("ws") ? { type: "ws" } : ws], "postprocess": id },
    { "name": "_$ebnf$1", "symbols": [], "postprocess": () => null },
    { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": () => null },
    { "name": "__", "symbols": [lexer.has("ws") ? { type: "ws" } : ws], "postprocess": () => null }
  ],
  ParserStart: "main"
};
var ast$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
const compiledRulesNoList = __spreadProps(__spreadValues({}, grammar), { ParserStart: "mainNoList" });
function parse(str) {
  return _parse(grammar, str);
}
function parse1(str) {
  return _parse(compiledRulesNoList, str);
}
function _parse(compiledRules1, str) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(compiledRules1));
  parser.feed(str);
  if (parser.results.length === 0) {
    throw new Error("Failed to parse - input string might be incomplete.");
  }
  return parser.results[0];
}
function serialize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "universal":
      return _serNs(selector.namespace) + "*";
    case "tag":
      return _serNs(selector.namespace) + selector.name;
    case "class":
      return "." + selector.name;
    case "id":
      return "#" + selector.name;
    case "attrPresence":
      return `[${_serNs(selector.namespace)}${selector.name}]`;
    case "attrValue":
      return `[${_serNs(selector.namespace)}${selector.name}${selector.matcher}${_serStr(selector.value)}${selector.modifier ? selector.modifier : ""}]`;
    case "combinator":
      return serialize(selector.left) + selector.combinator;
    case "compound":
      return selector.list.reduce((acc, node2) => {
        if (node2.type === "combinator") {
          return serialize(node2) + acc;
        } else {
          return acc + serialize(node2);
        }
      }, "");
    case "list":
      return selector.list.map(serialize).join(",");
  }
}
function _serNs(ns) {
  return ns || ns === "" ? ns + "|" : "";
}
function _serStr(str) {
  if (str.indexOf('"') === -1) {
    return `"${str}"`;
  } else if (str.indexOf("'") === -1) {
    return `'${str}'`;
  } else {
    return `"${str.replace('"', '\\"')}"`;
  }
}
function normalize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "compound": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b2)));
      break;
    }
    case "combinator": {
      normalize(selector.left);
      break;
    }
    case "list": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => serialize(a) < serialize(b2) ? -1 : 1);
      break;
    }
  }
  return selector;
}
function _getSelectorPriority(selector) {
  switch (selector.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, selector.name];
    case "attrPresence":
      return [4, serialize(selector)];
    case "attrValue":
      return [5, serialize(selector)];
    case "combinator":
      return [15, serialize(selector)];
  }
}
function compareSelectors(a, b2) {
  return _compareArrays(a.specificity, b2.specificity);
}
function compareSpecificity(a, b2) {
  return _compareArrays(a, b2);
}
function _compareArrays(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2)) {
    throw new Error("Arguments must be arrays.");
  }
  const shorter = a.length < b2.length ? a.length : b2.length;
  for (let i = 0; i < shorter; i++) {
    if (a[i] === b2[i]) {
      continue;
    }
    return a[i] < b2[i] ? -1 : 1;
  }
  return a.length - b2.length;
}
parseley$1.Ast = ast$1;
parseley$1.compareSelectors = compareSelectors;
parseley$1.compareSpecificity = compareSpecificity;
parseley$1.normalize = normalize;
parseley$1.parse = parse;
parseley$1.parse1 = parse1;
parseley$1.serialize = serialize;
Object.defineProperty(selderee$2, "__esModule", { value: true });
var parseley = parseley$1;
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function(k2) {
      if (k2 !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e, k2);
        Object.defineProperty(n, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e[k2];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var parseley__namespace = /* @__PURE__ */ _interopNamespace(parseley);
var Ast = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
var Types = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
const treeify = (nodes) => "\u25BD\n" + treeifyArray(nodes, thinLines);
const thinLines = [["\u251C\u2500", "\u2502 "], ["\u2514\u2500", "  "]];
const heavyLines = [["\u2520\u2500", "\u2503 "], ["\u2516\u2500", "  "]];
const doubleLines = [["\u255F\u2500", "\u2551 "], ["\u2559\u2500", "  "]];
function treeifyArray(nodes, tpl = heavyLines) {
  return prefixItems(tpl, nodes.map((n) => treeifyNode(n)));
}
function treeifyNode(node2) {
  switch (node2.type) {
    case "terminal": {
      const vctr = node2.valueContainer;
      return `\u25C1 #${vctr.index} ${JSON.stringify(vctr.specificity)} ${vctr.value}`;
    }
    case "tagName":
      return `\u25FB Tag name
${treeifyArray(node2.variants, doubleLines)}`;
    case "attrValue":
      return `\u25A3 Attr value: ${node2.name}
${treeifyArray(node2.matchers, doubleLines)}`;
    case "attrPresence":
      return `\u25E8 Attr presence: ${node2.name}
${treeifyArray(node2.cont)}`;
    case "pushElement":
      return `\u25C9 Push element: ${node2.combinator}
${treeifyArray(node2.cont, thinLines)}`;
    case "popElement":
      return `\u25CC Pop element
${treeifyArray(node2.cont, thinLines)}`;
    case "variant":
      return `\u25C7 = ${node2.value}
${treeifyArray(node2.cont)}`;
    case "matcher":
      return `\u25C8 ${node2.matcher} "${node2.value}"${node2.modifier || ""}
${treeifyArray(node2.cont)}`;
  }
}
function prefixItems(tpl, items) {
  return items.map((item, i, { length }) => prefixItem(tpl, item, i === length - 1)).join("\n");
}
function prefixItem(tpl, item, tail = true) {
  const tpl1 = tpl[tail ? 1 : 0];
  return tpl1[0] + item.split("\n").join("\n" + tpl1[1]);
}
var TreeifyBuilder = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  treeify
});
class DecisionTree {
  constructor(input) {
    this.branches = weave(toAstTerminalPairs(input));
  }
  build(builder) {
    return builder(this.branches);
  }
}
function toAstTerminalPairs(array) {
  const len = array.length;
  const results = new Array(len);
  for (let i = 0; i < len; i++) {
    const [selectorString, val] = array[i];
    const ast2 = preprocess(parseley__namespace.parse1(selectorString));
    results[i] = {
      ast: ast2,
      terminal: {
        type: "terminal",
        valueContainer: { index: i, value: val, specificity: ast2.specificity }
      }
    };
  }
  return results;
}
function preprocess(ast2) {
  reduceSelectorVariants(ast2);
  parseley__namespace.normalize(ast2);
  return ast2;
}
function reduceSelectorVariants(ast2) {
  const newList = [];
  ast2.list.forEach((sel) => {
    switch (sel.type) {
      case "class":
        newList.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "id":
        newList.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "combinator":
        reduceSelectorVariants(sel.left);
        newList.push(sel);
        break;
      case "universal":
        break;
      default:
        newList.push(sel);
        break;
    }
  });
  ast2.list = newList;
}
function weave(items) {
  const branches = [];
  while (items.length) {
    const topKind = findTopKey(items, (sel) => true, getSelectorKind);
    const { matches, nonmatches, empty: empty2 } = breakByKind(items, topKind);
    items = nonmatches;
    if (matches.length) {
      branches.push(branchOfKind(topKind, matches));
    }
    if (empty2.length) {
      branches.push(...terminate(empty2));
    }
  }
  return branches;
}
function terminate(items) {
  const results = [];
  for (const item of items) {
    const terminal = item.terminal;
    if (terminal.type === "terminal") {
      results.push(terminal);
    } else {
      const { matches, rest } = partition(terminal.cont, (node2) => node2.type === "terminal");
      matches.forEach((node2) => results.push(node2));
      if (rest.length) {
        terminal.cont = rest;
        results.push(terminal);
      }
    }
  }
  return results;
}
function breakByKind(items, selectedKind) {
  const matches = [];
  const nonmatches = [];
  const empty2 = [];
  for (const item of items) {
    const simpsels = item.ast.list;
    if (simpsels.length) {
      const isMatch = simpsels.some((node2) => getSelectorKind(node2) === selectedKind);
      (isMatch ? matches : nonmatches).push(item);
    } else {
      empty2.push(item);
    }
  }
  return { matches, nonmatches, empty: empty2 };
}
function getSelectorKind(sel) {
  switch (sel.type) {
    case "attrPresence":
      return `attrPresence ${sel.name}`;
    case "attrValue":
      return `attrValue ${sel.name}`;
    case "combinator":
      return `combinator ${sel.combinator}`;
    default:
      return sel.type;
  }
}
function branchOfKind(kind, items) {
  if (kind === "tag") {
    return tagNameBranch(items);
  }
  if (kind.startsWith("attrValue ")) {
    return attrValueBranch(kind.substring(10), items);
  }
  if (kind.startsWith("attrPresence ")) {
    return attrPresenceBranch(kind.substring(13), items);
  }
  if (kind === "combinator >") {
    return combinatorBranch(">", items);
  }
  if (kind === "combinator +") {
    return combinatorBranch("+", items);
  }
  throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "tag", (x2) => x2.name);
  const variants = Object.entries(groups).map(([name, group]) => ({
    type: "variant",
    value: name,
    cont: weave(group.items)
  }));
  return {
    type: "tagName",
    variants
  };
}
function attrPresenceBranch(name, items) {
  for (const item of items) {
    spliceSimpleSelector(item, (x2) => x2.type === "attrPresence" && x2.name === name);
  }
  return {
    type: "attrPresence",
    name,
    cont: weave(items)
  };
}
function attrValueBranch(name, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "attrValue" && x2.name === name, (x2) => `${x2.matcher} ${x2.modifier || ""} ${x2.value}`);
  const matchers = [];
  for (const group of Object.values(groups)) {
    const sel = group.oneSimpleSelector;
    const predicate = getAttrPredicate(sel);
    const continuation = weave(group.items);
    matchers.push({
      type: "matcher",
      matcher: sel.matcher,
      modifier: sel.modifier,
      value: sel.value,
      predicate,
      cont: continuation
    });
  }
  return {
    type: "attrValue",
    name,
    matchers
  };
}
function getAttrPredicate(sel) {
  if (sel.modifier === "i") {
    const expected = sel.value.toLowerCase();
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual.toLowerCase();
      case "~=":
        return (actual) => actual.toLowerCase().split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.toLowerCase().startsWith(expected);
      case "$=":
        return (actual) => actual.toLowerCase().endsWith(expected);
      case "*=":
        return (actual) => actual.toLowerCase().includes(expected);
      case "|=":
        return (actual) => {
          const lower = actual.toLowerCase();
          return expected === lower || lower.startsWith(expected) && lower[expected.length] === "-";
        };
    }
  } else {
    const expected = sel.value;
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual;
      case "~=":
        return (actual) => actual.split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.startsWith(expected);
      case "$=":
        return (actual) => actual.endsWith(expected);
      case "*=":
        return (actual) => actual.includes(expected);
      case "|=":
        return (actual) => expected === actual || actual.startsWith(expected) && actual[expected.length] === "-";
    }
  }
}
function combinatorBranch(combinator, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "combinator" && x2.combinator === combinator, (x2) => parseley__namespace.serialize(x2.left));
  const leftItems = [];
  for (const group of Object.values(groups)) {
    const rightCont = weave(group.items);
    const leftAst = group.oneSimpleSelector.left;
    leftItems.push({
      ast: leftAst,
      terminal: { type: "popElement", cont: rightCont }
    });
  }
  return {
    type: "pushElement",
    combinator,
    cont: weave(leftItems)
  };
}
function spliceAndGroup(items, predicate, keyCallback) {
  const groups = {};
  while (items.length) {
    const bestKey = findTopKey(items, predicate, keyCallback);
    const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;
    const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);
    const { matches, rest } = partition1(items, hasBestKeyPredicate);
    let oneSimpleSelector = null;
    for (const item of matches) {
      const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
      if (!oneSimpleSelector) {
        oneSimpleSelector = splicedNode;
      }
    }
    if (oneSimpleSelector == null) {
      throw new Error("No simple selector is found.");
    }
    groups[bestKey] = { oneSimpleSelector, items: matches };
    items = rest;
  }
  return groups;
}
function spliceSimpleSelector(item, predicate) {
  const simpsels = item.ast.list;
  const matches = new Array(simpsels.length);
  let firstIndex = -1;
  for (let i = simpsels.length; i-- > 0; ) {
    if (predicate(simpsels[i])) {
      matches[i] = true;
      firstIndex = i;
    }
  }
  if (firstIndex == -1) {
    throw new Error(`Couldn't find the required simple selector.`);
  }
  const result = simpsels[firstIndex];
  item.ast.list = simpsels.filter((sel, i) => !matches[i]);
  return result;
}
function findTopKey(items, predicate, keyCallback) {
  const candidates = {};
  for (const item of items) {
    const candidates1 = {};
    for (const node2 of item.ast.list.filter(predicate)) {
      candidates1[keyCallback(node2)] = true;
    }
    for (const key of Object.keys(candidates1)) {
      if (candidates[key]) {
        candidates[key]++;
      } else {
        candidates[key] = 1;
      }
    }
  }
  let topKind = "";
  let topCounter = 0;
  for (const entry of Object.entries(candidates)) {
    if (entry[1] > topCounter) {
      topKind = entry[0];
      topCounter = entry[1];
    }
  }
  return topKind;
}
function partition(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
function partition1(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
class Picker {
  constructor(f) {
    this.f = f;
  }
  pickAll(el2) {
    return this.f(el2);
  }
  pick1(el2, preferFirst = false) {
    const results = this.f(el2);
    const len = results.length;
    if (len === 0) {
      return null;
    }
    if (len === 1) {
      return results[0].value;
    }
    const comparator = preferFirst ? comparatorPreferFirst : comparatorPreferLast;
    let result = results[0];
    for (let i = 1; i < len; i++) {
      const next = results[i];
      if (comparator(result, next)) {
        result = next;
      }
    }
    return result.value;
  }
}
function comparatorPreferFirst(acc, next) {
  const diff = parseley.compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index < acc.index;
}
function comparatorPreferLast(acc, next) {
  const diff = parseley.compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index > acc.index;
}
selderee$2.Ast = Ast;
selderee$2.DecisionTree = DecisionTree;
selderee$2.Picker = Picker;
selderee$2.Treeify = TreeifyBuilder;
selderee$2.Types = Types;
Object.defineProperty(hp2Builder$2, "__esModule", { value: true });
var domhandler = lib$5;
var selderee$1 = selderee$2;
function hp2Builder$1(nodes) {
  return new selderee$1.Picker(handleArray(nodes));
}
function handleArray(nodes) {
  const matchers = nodes.map(handleNode);
  return (el2, ...tail) => flatMap(matchers, (m2) => m2(el2, ...tail));
}
function handleNode(node2) {
  switch (node2.type) {
    case "terminal": {
      const result = [node2.valueContainer];
      return (el2, ...tail) => result;
    }
    case "tagName":
      return handleTagName(node2);
    case "attrValue":
      return handleAttrValueName(node2);
    case "attrPresence":
      return handleAttrPresenceName(node2);
    case "pushElement":
      return handlePushElementNode(node2);
    case "popElement":
      return handlePopElementNode(node2);
  }
}
function handleTagName(node2) {
  const variants = {};
  for (const variant of node2.variants) {
    variants[variant.value] = handleArray(variant.cont);
  }
  return (el2, ...tail) => {
    const continuation = variants[el2.name];
    return continuation ? continuation(el2, ...tail) : [];
  };
}
function handleAttrPresenceName(node2) {
  const attrName = node2.name;
  const continuation = handleArray(node2.cont);
  return (el2, ...tail) => Object.prototype.hasOwnProperty.call(el2.attribs, attrName) ? continuation(el2, ...tail) : [];
}
function handleAttrValueName(node2) {
  const callbacks = [];
  for (const matcher of node2.matchers) {
    const predicate = matcher.predicate;
    const continuation = handleArray(matcher.cont);
    callbacks.push((attr, el2, ...tail) => predicate(attr) ? continuation(el2, ...tail) : []);
  }
  const attrName = node2.name;
  return (el2, ...tail) => {
    const attr = el2.attribs[attrName];
    return attr || attr === "" ? flatMap(callbacks, (cb) => cb(attr, el2, ...tail)) : [];
  };
}
function handlePushElementNode(node2) {
  const continuation = handleArray(node2.cont);
  const leftElementGetter = node2.combinator === "+" ? getPrecedingElement : getParentElement;
  return (el2, ...tail) => {
    const next = leftElementGetter(el2);
    if (next === null) {
      return [];
    }
    return continuation(next, el2, ...tail);
  };
}
const getPrecedingElement = (el2) => {
  const prev = el2.prev;
  if (prev === null) {
    return null;
  }
  return domhandler.isTag(prev) ? prev : getPrecedingElement(prev);
};
const getParentElement = (el2) => {
  const parent = el2.parent;
  return parent && domhandler.isTag(parent) ? parent : null;
};
function handlePopElementNode(node2) {
  const continuation = handleArray(node2.cont);
  return (el2, next, ...tail) => continuation(next, ...tail);
}
function flatMap(items, mapper) {
  return [].concat(...amap(items, mapper));
}
function amap(items, mapper) {
  const len = items.length;
  const res = new Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = mapper(items[i]);
  }
  return res;
}
hp2Builder$2.hp2Builder = hp2Builder$1;
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target2, source, options) {
  return target2.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target2) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target2).filter(function(symbol) {
    return target2.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target2) {
  return Object.keys(target2).concat(getEnumerableOwnPropertySymbols(target2));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target2, key) {
  return propertyIsOnObject(target2, key) && !(Object.hasOwnProperty.call(target2, key) && Object.propertyIsEnumerable.call(target2, key));
}
function mergeObject(target2, source, options) {
  var destination = {};
  if (options.isMergeableObject(target2)) {
    getKeys(target2).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target2[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target2, key)) {
      return;
    }
    if (propertyIsOnObject(target2, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target2[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target2, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target2);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target2, source, options);
  } else {
    return mergeObject(target2, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
var he$2 = { exports: {} };
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
(function(module, exports) {
  (function(root) {
    var freeExports = exports;
    var freeModule = module && module.exports == freeExports && module;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
      root = freeGlobal;
    }
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var regexAsciiWhitelist = /[\x01-\x7F]/g;
    var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
    var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
    var encodeMap = { "\xAD": "shy", "\u200C": "zwnj", "\u200D": "zwj", "\u200E": "lrm", "\u2063": "ic", "\u2062": "it", "\u2061": "af", "\u200F": "rlm", "\u200B": "ZeroWidthSpace", "\u2060": "NoBreak", "\u0311": "DownBreve", "\u20DB": "tdot", "\u20DC": "DotDot", "	": "Tab", "\n": "NewLine", "\u2008": "puncsp", "\u205F": "MediumSpace", "\u2009": "thinsp", "\u200A": "hairsp", "\u2004": "emsp13", "\u2002": "ensp", "\u2005": "emsp14", "\u2003": "emsp", "\u2007": "numsp", "\xA0": "nbsp", "\u205F\u200A": "ThickSpace", "\u203E": "oline", "_": "lowbar", "\u2010": "dash", "\u2013": "ndash", "\u2014": "mdash", "\u2015": "horbar", ",": "comma", ";": "semi", "\u204F": "bsemi", ":": "colon", "\u2A74": "Colone", "!": "excl", "\xA1": "iexcl", "?": "quest", "\xBF": "iquest", ".": "period", "\u2025": "nldr", "\u2026": "mldr", "\xB7": "middot", "'": "apos", "\u2018": "lsquo", "\u2019": "rsquo", "\u201A": "sbquo", "\u2039": "lsaquo", "\u203A": "rsaquo", '"': "quot", "\u201C": "ldquo", "\u201D": "rdquo", "\u201E": "bdquo", "\xAB": "laquo", "\xBB": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "\u2308": "lceil", "\u2309": "rceil", "\u230A": "lfloor", "\u230B": "rfloor", "\u2985": "lopar", "\u2986": "ropar", "\u298B": "lbrke", "\u298C": "rbrke", "\u298D": "lbrkslu", "\u298E": "rbrksld", "\u298F": "lbrksld", "\u2990": "rbrkslu", "\u2991": "langd", "\u2992": "rangd", "\u2993": "lparlt", "\u2994": "rpargt", "\u2995": "gtlPar", "\u2996": "ltrPar", "\u27E6": "lobrk", "\u27E7": "robrk", "\u27E8": "lang", "\u27E9": "rang", "\u27EA": "Lang", "\u27EB": "Rang", "\u27EC": "loang", "\u27ED": "roang", "\u2772": "lbbrk", "\u2773": "rbbrk", "\u2016": "Vert", "\xA7": "sect", "\xB6": "para", "@": "commat", "*": "ast", "/": "sol", "undefined": null, "&": "amp", "#": "num", "%": "percnt", "\u2030": "permil", "\u2031": "pertenk", "\u2020": "dagger", "\u2021": "Dagger", "\u2022": "bull", "\u2043": "hybull", "\u2032": "prime", "\u2033": "Prime", "\u2034": "tprime", "\u2057": "qprime", "\u2035": "bprime", "\u2041": "caret", "`": "grave", "\xB4": "acute", "\u02DC": "tilde", "^": "Hat", "\xAF": "macr", "\u02D8": "breve", "\u02D9": "dot", "\xA8": "die", "\u02DA": "ring", "\u02DD": "dblac", "\xB8": "cedil", "\u02DB": "ogon", "\u02C6": "circ", "\u02C7": "caron", "\xB0": "deg", "\xA9": "copy", "\xAE": "reg", "\u2117": "copysr", "\u2118": "wp", "\u211E": "rx", "\u2127": "mho", "\u2129": "iiota", "\u2190": "larr", "\u219A": "nlarr", "\u2192": "rarr", "\u219B": "nrarr", "\u2191": "uarr", "\u2193": "darr", "\u2194": "harr", "\u21AE": "nharr", "\u2195": "varr", "\u2196": "nwarr", "\u2197": "nearr", "\u2198": "searr", "\u2199": "swarr", "\u219D": "rarrw", "\u219D\u0338": "nrarrw", "\u219E": "Larr", "\u219F": "Uarr", "\u21A0": "Rarr", "\u21A1": "Darr", "\u21A2": "larrtl", "\u21A3": "rarrtl", "\u21A4": "mapstoleft", "\u21A5": "mapstoup", "\u21A6": "map", "\u21A7": "mapstodown", "\u21A9": "larrhk", "\u21AA": "rarrhk", "\u21AB": "larrlp", "\u21AC": "rarrlp", "\u21AD": "harrw", "\u21B0": "lsh", "\u21B1": "rsh", "\u21B2": "ldsh", "\u21B3": "rdsh", "\u21B5": "crarr", "\u21B6": "cularr", "\u21B7": "curarr", "\u21BA": "olarr", "\u21BB": "orarr", "\u21BC": "lharu", "\u21BD": "lhard", "\u21BE": "uharr", "\u21BF": "uharl", "\u21C0": "rharu", "\u21C1": "rhard", "\u21C2": "dharr", "\u21C3": "dharl", "\u21C4": "rlarr", "\u21C5": "udarr", "\u21C6": "lrarr", "\u21C7": "llarr", "\u21C8": "uuarr", "\u21C9": "rrarr", "\u21CA": "ddarr", "\u21CB": "lrhar", "\u21CC": "rlhar", "\u21D0": "lArr", "\u21CD": "nlArr", "\u21D1": "uArr", "\u21D2": "rArr", "\u21CF": "nrArr", "\u21D3": "dArr", "\u21D4": "iff", "\u21CE": "nhArr", "\u21D5": "vArr", "\u21D6": "nwArr", "\u21D7": "neArr", "\u21D8": "seArr", "\u21D9": "swArr", "\u21DA": "lAarr", "\u21DB": "rAarr", "\u21DD": "zigrarr", "\u21E4": "larrb", "\u21E5": "rarrb", "\u21F5": "duarr", "\u21FD": "loarr", "\u21FE": "roarr", "\u21FF": "hoarr", "\u2200": "forall", "\u2201": "comp", "\u2202": "part", "\u2202\u0338": "npart", "\u2203": "exist", "\u2204": "nexist", "\u2205": "empty", "\u2207": "Del", "\u2208": "in", "\u2209": "notin", "\u220B": "ni", "\u220C": "notni", "\u03F6": "bepsi", "\u220F": "prod", "\u2210": "coprod", "\u2211": "sum", "+": "plus", "\xB1": "pm", "\xF7": "div", "\xD7": "times", "<": "lt", "\u226E": "nlt", "<\u20D2": "nvlt", "=": "equals", "\u2260": "ne", "=\u20E5": "bne", "\u2A75": "Equal", ">": "gt", "\u226F": "ngt", ">\u20D2": "nvgt", "\xAC": "not", "|": "vert", "\xA6": "brvbar", "\u2212": "minus", "\u2213": "mp", "\u2214": "plusdo", "\u2044": "frasl", "\u2216": "setmn", "\u2217": "lowast", "\u2218": "compfn", "\u221A": "Sqrt", "\u221D": "prop", "\u221E": "infin", "\u221F": "angrt", "\u2220": "ang", "\u2220\u20D2": "nang", "\u2221": "angmsd", "\u2222": "angsph", "\u2223": "mid", "\u2224": "nmid", "\u2225": "par", "\u2226": "npar", "\u2227": "and", "\u2228": "or", "\u2229": "cap", "\u2229\uFE00": "caps", "\u222A": "cup", "\u222A\uFE00": "cups", "\u222B": "int", "\u222C": "Int", "\u222D": "tint", "\u2A0C": "qint", "\u222E": "oint", "\u222F": "Conint", "\u2230": "Cconint", "\u2231": "cwint", "\u2232": "cwconint", "\u2233": "awconint", "\u2234": "there4", "\u2235": "becaus", "\u2236": "ratio", "\u2237": "Colon", "\u2238": "minusd", "\u223A": "mDDot", "\u223B": "homtht", "\u223C": "sim", "\u2241": "nsim", "\u223C\u20D2": "nvsim", "\u223D": "bsim", "\u223D\u0331": "race", "\u223E": "ac", "\u223E\u0333": "acE", "\u223F": "acd", "\u2240": "wr", "\u2242": "esim", "\u2242\u0338": "nesim", "\u2243": "sime", "\u2244": "nsime", "\u2245": "cong", "\u2247": "ncong", "\u2246": "simne", "\u2248": "ap", "\u2249": "nap", "\u224A": "ape", "\u224B": "apid", "\u224B\u0338": "napid", "\u224C": "bcong", "\u224D": "CupCap", "\u226D": "NotCupCap", "\u224D\u20D2": "nvap", "\u224E": "bump", "\u224E\u0338": "nbump", "\u224F": "bumpe", "\u224F\u0338": "nbumpe", "\u2250": "doteq", "\u2250\u0338": "nedot", "\u2251": "eDot", "\u2252": "efDot", "\u2253": "erDot", "\u2254": "colone", "\u2255": "ecolon", "\u2256": "ecir", "\u2257": "cire", "\u2259": "wedgeq", "\u225A": "veeeq", "\u225C": "trie", "\u225F": "equest", "\u2261": "equiv", "\u2262": "nequiv", "\u2261\u20E5": "bnequiv", "\u2264": "le", "\u2270": "nle", "\u2264\u20D2": "nvle", "\u2265": "ge", "\u2271": "nge", "\u2265\u20D2": "nvge", "\u2266": "lE", "\u2266\u0338": "nlE", "\u2267": "gE", "\u2267\u0338": "ngE", "\u2268\uFE00": "lvnE", "\u2268": "lnE", "\u2269": "gnE", "\u2269\uFE00": "gvnE", "\u226A": "ll", "\u226A\u0338": "nLtv", "\u226A\u20D2": "nLt", "\u226B": "gg", "\u226B\u0338": "nGtv", "\u226B\u20D2": "nGt", "\u226C": "twixt", "\u2272": "lsim", "\u2274": "nlsim", "\u2273": "gsim", "\u2275": "ngsim", "\u2276": "lg", "\u2278": "ntlg", "\u2277": "gl", "\u2279": "ntgl", "\u227A": "pr", "\u2280": "npr", "\u227B": "sc", "\u2281": "nsc", "\u227C": "prcue", "\u22E0": "nprcue", "\u227D": "sccue", "\u22E1": "nsccue", "\u227E": "prsim", "\u227F": "scsim", "\u227F\u0338": "NotSucceedsTilde", "\u2282": "sub", "\u2284": "nsub", "\u2282\u20D2": "vnsub", "\u2283": "sup", "\u2285": "nsup", "\u2283\u20D2": "vnsup", "\u2286": "sube", "\u2288": "nsube", "\u2287": "supe", "\u2289": "nsupe", "\u228A\uFE00": "vsubne", "\u228A": "subne", "\u228B\uFE00": "vsupne", "\u228B": "supne", "\u228D": "cupdot", "\u228E": "uplus", "\u228F": "sqsub", "\u228F\u0338": "NotSquareSubset", "\u2290": "sqsup", "\u2290\u0338": "NotSquareSuperset", "\u2291": "sqsube", "\u22E2": "nsqsube", "\u2292": "sqsupe", "\u22E3": "nsqsupe", "\u2293": "sqcap", "\u2293\uFE00": "sqcaps", "\u2294": "sqcup", "\u2294\uFE00": "sqcups", "\u2295": "oplus", "\u2296": "ominus", "\u2297": "otimes", "\u2298": "osol", "\u2299": "odot", "\u229A": "ocir", "\u229B": "oast", "\u229D": "odash", "\u229E": "plusb", "\u229F": "minusb", "\u22A0": "timesb", "\u22A1": "sdotb", "\u22A2": "vdash", "\u22AC": "nvdash", "\u22A3": "dashv", "\u22A4": "top", "\u22A5": "bot", "\u22A7": "models", "\u22A8": "vDash", "\u22AD": "nvDash", "\u22A9": "Vdash", "\u22AE": "nVdash", "\u22AA": "Vvdash", "\u22AB": "VDash", "\u22AF": "nVDash", "\u22B0": "prurel", "\u22B2": "vltri", "\u22EA": "nltri", "\u22B3": "vrtri", "\u22EB": "nrtri", "\u22B4": "ltrie", "\u22EC": "nltrie", "\u22B4\u20D2": "nvltrie", "\u22B5": "rtrie", "\u22ED": "nrtrie", "\u22B5\u20D2": "nvrtrie", "\u22B6": "origof", "\u22B7": "imof", "\u22B8": "mumap", "\u22B9": "hercon", "\u22BA": "intcal", "\u22BB": "veebar", "\u22BD": "barvee", "\u22BE": "angrtvb", "\u22BF": "lrtri", "\u22C0": "Wedge", "\u22C1": "Vee", "\u22C2": "xcap", "\u22C3": "xcup", "\u22C4": "diam", "\u22C5": "sdot", "\u22C6": "Star", "\u22C7": "divonx", "\u22C8": "bowtie", "\u22C9": "ltimes", "\u22CA": "rtimes", "\u22CB": "lthree", "\u22CC": "rthree", "\u22CD": "bsime", "\u22CE": "cuvee", "\u22CF": "cuwed", "\u22D0": "Sub", "\u22D1": "Sup", "\u22D2": "Cap", "\u22D3": "Cup", "\u22D4": "fork", "\u22D5": "epar", "\u22D6": "ltdot", "\u22D7": "gtdot", "\u22D8": "Ll", "\u22D8\u0338": "nLl", "\u22D9": "Gg", "\u22D9\u0338": "nGg", "\u22DA\uFE00": "lesg", "\u22DA": "leg", "\u22DB": "gel", "\u22DB\uFE00": "gesl", "\u22DE": "cuepr", "\u22DF": "cuesc", "\u22E6": "lnsim", "\u22E7": "gnsim", "\u22E8": "prnsim", "\u22E9": "scnsim", "\u22EE": "vellip", "\u22EF": "ctdot", "\u22F0": "utdot", "\u22F1": "dtdot", "\u22F2": "disin", "\u22F3": "isinsv", "\u22F4": "isins", "\u22F5": "isindot", "\u22F5\u0338": "notindot", "\u22F6": "notinvc", "\u22F7": "notinvb", "\u22F9": "isinE", "\u22F9\u0338": "notinE", "\u22FA": "nisd", "\u22FB": "xnis", "\u22FC": "nis", "\u22FD": "notnivc", "\u22FE": "notnivb", "\u2305": "barwed", "\u2306": "Barwed", "\u230C": "drcrop", "\u230D": "dlcrop", "\u230E": "urcrop", "\u230F": "ulcrop", "\u2310": "bnot", "\u2312": "profline", "\u2313": "profsurf", "\u2315": "telrec", "\u2316": "target", "\u231C": "ulcorn", "\u231D": "urcorn", "\u231E": "dlcorn", "\u231F": "drcorn", "\u2322": "frown", "\u2323": "smile", "\u232D": "cylcty", "\u232E": "profalar", "\u2336": "topbot", "\u233D": "ovbar", "\u233F": "solbar", "\u237C": "angzarr", "\u23B0": "lmoust", "\u23B1": "rmoust", "\u23B4": "tbrk", "\u23B5": "bbrk", "\u23B6": "bbrktbrk", "\u23DC": "OverParenthesis", "\u23DD": "UnderParenthesis", "\u23DE": "OverBrace", "\u23DF": "UnderBrace", "\u23E2": "trpezium", "\u23E7": "elinters", "\u2423": "blank", "\u2500": "boxh", "\u2502": "boxv", "\u250C": "boxdr", "\u2510": "boxdl", "\u2514": "boxur", "\u2518": "boxul", "\u251C": "boxvr", "\u2524": "boxvl", "\u252C": "boxhd", "\u2534": "boxhu", "\u253C": "boxvh", "\u2550": "boxH", "\u2551": "boxV", "\u2552": "boxdR", "\u2553": "boxDr", "\u2554": "boxDR", "\u2555": "boxdL", "\u2556": "boxDl", "\u2557": "boxDL", "\u2558": "boxuR", "\u2559": "boxUr", "\u255A": "boxUR", "\u255B": "boxuL", "\u255C": "boxUl", "\u255D": "boxUL", "\u255E": "boxvR", "\u255F": "boxVr", "\u2560": "boxVR", "\u2561": "boxvL", "\u2562": "boxVl", "\u2563": "boxVL", "\u2564": "boxHd", "\u2565": "boxhD", "\u2566": "boxHD", "\u2567": "boxHu", "\u2568": "boxhU", "\u2569": "boxHU", "\u256A": "boxvH", "\u256B": "boxVh", "\u256C": "boxVH", "\u2580": "uhblk", "\u2584": "lhblk", "\u2588": "block", "\u2591": "blk14", "\u2592": "blk12", "\u2593": "blk34", "\u25A1": "squ", "\u25AA": "squf", "\u25AB": "EmptyVerySmallSquare", "\u25AD": "rect", "\u25AE": "marker", "\u25B1": "fltns", "\u25B3": "xutri", "\u25B4": "utrif", "\u25B5": "utri", "\u25B8": "rtrif", "\u25B9": "rtri", "\u25BD": "xdtri", "\u25BE": "dtrif", "\u25BF": "dtri", "\u25C2": "ltrif", "\u25C3": "ltri", "\u25CA": "loz", "\u25CB": "cir", "\u25EC": "tridot", "\u25EF": "xcirc", "\u25F8": "ultri", "\u25F9": "urtri", "\u25FA": "lltri", "\u25FB": "EmptySmallSquare", "\u25FC": "FilledSmallSquare", "\u2605": "starf", "\u2606": "star", "\u260E": "phone", "\u2640": "female", "\u2642": "male", "\u2660": "spades", "\u2663": "clubs", "\u2665": "hearts", "\u2666": "diams", "\u266A": "sung", "\u2713": "check", "\u2717": "cross", "\u2720": "malt", "\u2736": "sext", "\u2758": "VerticalSeparator", "\u27C8": "bsolhsub", "\u27C9": "suphsol", "\u27F5": "xlarr", "\u27F6": "xrarr", "\u27F7": "xharr", "\u27F8": "xlArr", "\u27F9": "xrArr", "\u27FA": "xhArr", "\u27FC": "xmap", "\u27FF": "dzigrarr", "\u2902": "nvlArr", "\u2903": "nvrArr", "\u2904": "nvHarr", "\u2905": "Map", "\u290C": "lbarr", "\u290D": "rbarr", "\u290E": "lBarr", "\u290F": "rBarr", "\u2910": "RBarr", "\u2911": "DDotrahd", "\u2912": "UpArrowBar", "\u2913": "DownArrowBar", "\u2916": "Rarrtl", "\u2919": "latail", "\u291A": "ratail", "\u291B": "lAtail", "\u291C": "rAtail", "\u291D": "larrfs", "\u291E": "rarrfs", "\u291F": "larrbfs", "\u2920": "rarrbfs", "\u2923": "nwarhk", "\u2924": "nearhk", "\u2925": "searhk", "\u2926": "swarhk", "\u2927": "nwnear", "\u2928": "toea", "\u2929": "tosa", "\u292A": "swnwar", "\u2933": "rarrc", "\u2933\u0338": "nrarrc", "\u2935": "cudarrr", "\u2936": "ldca", "\u2937": "rdca", "\u2938": "cudarrl", "\u2939": "larrpl", "\u293C": "curarrm", "\u293D": "cularrp", "\u2945": "rarrpl", "\u2948": "harrcir", "\u2949": "Uarrocir", "\u294A": "lurdshar", "\u294B": "ldrushar", "\u294E": "LeftRightVector", "\u294F": "RightUpDownVector", "\u2950": "DownLeftRightVector", "\u2951": "LeftUpDownVector", "\u2952": "LeftVectorBar", "\u2953": "RightVectorBar", "\u2954": "RightUpVectorBar", "\u2955": "RightDownVectorBar", "\u2956": "DownLeftVectorBar", "\u2957": "DownRightVectorBar", "\u2958": "LeftUpVectorBar", "\u2959": "LeftDownVectorBar", "\u295A": "LeftTeeVector", "\u295B": "RightTeeVector", "\u295C": "RightUpTeeVector", "\u295D": "RightDownTeeVector", "\u295E": "DownLeftTeeVector", "\u295F": "DownRightTeeVector", "\u2960": "LeftUpTeeVector", "\u2961": "LeftDownTeeVector", "\u2962": "lHar", "\u2963": "uHar", "\u2964": "rHar", "\u2965": "dHar", "\u2966": "luruhar", "\u2967": "ldrdhar", "\u2968": "ruluhar", "\u2969": "rdldhar", "\u296A": "lharul", "\u296B": "llhard", "\u296C": "rharul", "\u296D": "lrhard", "\u296E": "udhar", "\u296F": "duhar", "\u2970": "RoundImplies", "\u2971": "erarr", "\u2972": "simrarr", "\u2973": "larrsim", "\u2974": "rarrsim", "\u2975": "rarrap", "\u2976": "ltlarr", "\u2978": "gtrarr", "\u2979": "subrarr", "\u297B": "suplarr", "\u297C": "lfisht", "\u297D": "rfisht", "\u297E": "ufisht", "\u297F": "dfisht", "\u299A": "vzigzag", "\u299C": "vangrt", "\u299D": "angrtvbd", "\u29A4": "ange", "\u29A5": "range", "\u29A6": "dwangle", "\u29A7": "uwangle", "\u29A8": "angmsdaa", "\u29A9": "angmsdab", "\u29AA": "angmsdac", "\u29AB": "angmsdad", "\u29AC": "angmsdae", "\u29AD": "angmsdaf", "\u29AE": "angmsdag", "\u29AF": "angmsdah", "\u29B0": "bemptyv", "\u29B1": "demptyv", "\u29B2": "cemptyv", "\u29B3": "raemptyv", "\u29B4": "laemptyv", "\u29B5": "ohbar", "\u29B6": "omid", "\u29B7": "opar", "\u29B9": "operp", "\u29BB": "olcross", "\u29BC": "odsold", "\u29BE": "olcir", "\u29BF": "ofcir", "\u29C0": "olt", "\u29C1": "ogt", "\u29C2": "cirscir", "\u29C3": "cirE", "\u29C4": "solb", "\u29C5": "bsolb", "\u29C9": "boxbox", "\u29CD": "trisb", "\u29CE": "rtriltri", "\u29CF": "LeftTriangleBar", "\u29CF\u0338": "NotLeftTriangleBar", "\u29D0": "RightTriangleBar", "\u29D0\u0338": "NotRightTriangleBar", "\u29DC": "iinfin", "\u29DD": "infintie", "\u29DE": "nvinfin", "\u29E3": "eparsl", "\u29E4": "smeparsl", "\u29E5": "eqvparsl", "\u29EB": "lozf", "\u29F4": "RuleDelayed", "\u29F6": "dsol", "\u2A00": "xodot", "\u2A01": "xoplus", "\u2A02": "xotime", "\u2A04": "xuplus", "\u2A06": "xsqcup", "\u2A0D": "fpartint", "\u2A10": "cirfnint", "\u2A11": "awint", "\u2A12": "rppolint", "\u2A13": "scpolint", "\u2A14": "npolint", "\u2A15": "pointint", "\u2A16": "quatint", "\u2A17": "intlarhk", "\u2A22": "pluscir", "\u2A23": "plusacir", "\u2A24": "simplus", "\u2A25": "plusdu", "\u2A26": "plussim", "\u2A27": "plustwo", "\u2A29": "mcomma", "\u2A2A": "minusdu", "\u2A2D": "loplus", "\u2A2E": "roplus", "\u2A2F": "Cross", "\u2A30": "timesd", "\u2A31": "timesbar", "\u2A33": "smashp", "\u2A34": "lotimes", "\u2A35": "rotimes", "\u2A36": "otimesas", "\u2A37": "Otimes", "\u2A38": "odiv", "\u2A39": "triplus", "\u2A3A": "triminus", "\u2A3B": "tritime", "\u2A3C": "iprod", "\u2A3F": "amalg", "\u2A40": "capdot", "\u2A42": "ncup", "\u2A43": "ncap", "\u2A44": "capand", "\u2A45": "cupor", "\u2A46": "cupcap", "\u2A47": "capcup", "\u2A48": "cupbrcap", "\u2A49": "capbrcup", "\u2A4A": "cupcup", "\u2A4B": "capcap", "\u2A4C": "ccups", "\u2A4D": "ccaps", "\u2A50": "ccupssm", "\u2A53": "And", "\u2A54": "Or", "\u2A55": "andand", "\u2A56": "oror", "\u2A57": "orslope", "\u2A58": "andslope", "\u2A5A": "andv", "\u2A5B": "orv", "\u2A5C": "andd", "\u2A5D": "ord", "\u2A5F": "wedbar", "\u2A66": "sdote", "\u2A6A": "simdot", "\u2A6D": "congdot", "\u2A6D\u0338": "ncongdot", "\u2A6E": "easter", "\u2A6F": "apacir", "\u2A70": "apE", "\u2A70\u0338": "napE", "\u2A71": "eplus", "\u2A72": "pluse", "\u2A73": "Esim", "\u2A77": "eDDot", "\u2A78": "equivDD", "\u2A79": "ltcir", "\u2A7A": "gtcir", "\u2A7B": "ltquest", "\u2A7C": "gtquest", "\u2A7D": "les", "\u2A7D\u0338": "nles", "\u2A7E": "ges", "\u2A7E\u0338": "nges", "\u2A7F": "lesdot", "\u2A80": "gesdot", "\u2A81": "lesdoto", "\u2A82": "gesdoto", "\u2A83": "lesdotor", "\u2A84": "gesdotol", "\u2A85": "lap", "\u2A86": "gap", "\u2A87": "lne", "\u2A88": "gne", "\u2A89": "lnap", "\u2A8A": "gnap", "\u2A8B": "lEg", "\u2A8C": "gEl", "\u2A8D": "lsime", "\u2A8E": "gsime", "\u2A8F": "lsimg", "\u2A90": "gsiml", "\u2A91": "lgE", "\u2A92": "glE", "\u2A93": "lesges", "\u2A94": "gesles", "\u2A95": "els", "\u2A96": "egs", "\u2A97": "elsdot", "\u2A98": "egsdot", "\u2A99": "el", "\u2A9A": "eg", "\u2A9D": "siml", "\u2A9E": "simg", "\u2A9F": "simlE", "\u2AA0": "simgE", "\u2AA1": "LessLess", "\u2AA1\u0338": "NotNestedLessLess", "\u2AA2": "GreaterGreater", "\u2AA2\u0338": "NotNestedGreaterGreater", "\u2AA4": "glj", "\u2AA5": "gla", "\u2AA6": "ltcc", "\u2AA7": "gtcc", "\u2AA8": "lescc", "\u2AA9": "gescc", "\u2AAA": "smt", "\u2AAB": "lat", "\u2AAC": "smte", "\u2AAC\uFE00": "smtes", "\u2AAD": "late", "\u2AAD\uFE00": "lates", "\u2AAE": "bumpE", "\u2AAF": "pre", "\u2AAF\u0338": "npre", "\u2AB0": "sce", "\u2AB0\u0338": "nsce", "\u2AB3": "prE", "\u2AB4": "scE", "\u2AB5": "prnE", "\u2AB6": "scnE", "\u2AB7": "prap", "\u2AB8": "scap", "\u2AB9": "prnap", "\u2ABA": "scnap", "\u2ABB": "Pr", "\u2ABC": "Sc", "\u2ABD": "subdot", "\u2ABE": "supdot", "\u2ABF": "subplus", "\u2AC0": "supplus", "\u2AC1": "submult", "\u2AC2": "supmult", "\u2AC3": "subedot", "\u2AC4": "supedot", "\u2AC5": "subE", "\u2AC5\u0338": "nsubE", "\u2AC6": "supE", "\u2AC6\u0338": "nsupE", "\u2AC7": "subsim", "\u2AC8": "supsim", "\u2ACB\uFE00": "vsubnE", "\u2ACB": "subnE", "\u2ACC\uFE00": "vsupnE", "\u2ACC": "supnE", "\u2ACF": "csub", "\u2AD0": "csup", "\u2AD1": "csube", "\u2AD2": "csupe", "\u2AD3": "subsup", "\u2AD4": "supsub", "\u2AD5": "subsub", "\u2AD6": "supsup", "\u2AD7": "suphsub", "\u2AD8": "supdsub", "\u2AD9": "forkv", "\u2ADA": "topfork", "\u2ADB": "mlcp", "\u2AE4": "Dashv", "\u2AE6": "Vdashl", "\u2AE7": "Barv", "\u2AE8": "vBar", "\u2AE9": "vBarv", "\u2AEB": "Vbar", "\u2AEC": "Not", "\u2AED": "bNot", "\u2AEE": "rnmid", "\u2AEF": "cirmid", "\u2AF0": "midcir", "\u2AF1": "topcir", "\u2AF2": "nhpar", "\u2AF3": "parsim", "\u2AFD": "parsl", "\u2AFD\u20E5": "nparsl", "\u266D": "flat", "\u266E": "natur", "\u266F": "sharp", "\xA4": "curren", "\xA2": "cent", "$": "dollar", "\xA3": "pound", "\xA5": "yen", "\u20AC": "euro", "\xB9": "sup1", "\xBD": "half", "\u2153": "frac13", "\xBC": "frac14", "\u2155": "frac15", "\u2159": "frac16", "\u215B": "frac18", "\xB2": "sup2", "\u2154": "frac23", "\u2156": "frac25", "\xB3": "sup3", "\xBE": "frac34", "\u2157": "frac35", "\u215C": "frac38", "\u2158": "frac45", "\u215A": "frac56", "\u215D": "frac58", "\u215E": "frac78", "\u{1D4B6}": "ascr", "\u{1D552}": "aopf", "\u{1D51E}": "afr", "\u{1D538}": "Aopf", "\u{1D504}": "Afr", "\u{1D49C}": "Ascr", "\xAA": "ordf", "\xE1": "aacute", "\xC1": "Aacute", "\xE0": "agrave", "\xC0": "Agrave", "\u0103": "abreve", "\u0102": "Abreve", "\xE2": "acirc", "\xC2": "Acirc", "\xE5": "aring", "\xC5": "angst", "\xE4": "auml", "\xC4": "Auml", "\xE3": "atilde", "\xC3": "Atilde", "\u0105": "aogon", "\u0104": "Aogon", "\u0101": "amacr", "\u0100": "Amacr", "\xE6": "aelig", "\xC6": "AElig", "\u{1D4B7}": "bscr", "\u{1D553}": "bopf", "\u{1D51F}": "bfr", "\u{1D539}": "Bopf", "\u212C": "Bscr", "\u{1D505}": "Bfr", "\u{1D520}": "cfr", "\u{1D4B8}": "cscr", "\u{1D554}": "copf", "\u212D": "Cfr", "\u{1D49E}": "Cscr", "\u2102": "Copf", "\u0107": "cacute", "\u0106": "Cacute", "\u0109": "ccirc", "\u0108": "Ccirc", "\u010D": "ccaron", "\u010C": "Ccaron", "\u010B": "cdot", "\u010A": "Cdot", "\xE7": "ccedil", "\xC7": "Ccedil", "\u2105": "incare", "\u{1D521}": "dfr", "\u2146": "dd", "\u{1D555}": "dopf", "\u{1D4B9}": "dscr", "\u{1D49F}": "Dscr", "\u{1D507}": "Dfr", "\u2145": "DD", "\u{1D53B}": "Dopf", "\u010F": "dcaron", "\u010E": "Dcaron", "\u0111": "dstrok", "\u0110": "Dstrok", "\xF0": "eth", "\xD0": "ETH", "\u2147": "ee", "\u212F": "escr", "\u{1D522}": "efr", "\u{1D556}": "eopf", "\u2130": "Escr", "\u{1D508}": "Efr", "\u{1D53C}": "Eopf", "\xE9": "eacute", "\xC9": "Eacute", "\xE8": "egrave", "\xC8": "Egrave", "\xEA": "ecirc", "\xCA": "Ecirc", "\u011B": "ecaron", "\u011A": "Ecaron", "\xEB": "euml", "\xCB": "Euml", "\u0117": "edot", "\u0116": "Edot", "\u0119": "eogon", "\u0118": "Eogon", "\u0113": "emacr", "\u0112": "Emacr", "\u{1D523}": "ffr", "\u{1D557}": "fopf", "\u{1D4BB}": "fscr", "\u{1D509}": "Ffr", "\u{1D53D}": "Fopf", "\u2131": "Fscr", "\uFB00": "fflig", "\uFB03": "ffilig", "\uFB04": "ffllig", "\uFB01": "filig", "fj": "fjlig", "\uFB02": "fllig", "\u0192": "fnof", "\u210A": "gscr", "\u{1D558}": "gopf", "\u{1D524}": "gfr", "\u{1D4A2}": "Gscr", "\u{1D53E}": "Gopf", "\u{1D50A}": "Gfr", "\u01F5": "gacute", "\u011F": "gbreve", "\u011E": "Gbreve", "\u011D": "gcirc", "\u011C": "Gcirc", "\u0121": "gdot", "\u0120": "Gdot", "\u0122": "Gcedil", "\u{1D525}": "hfr", "\u210E": "planckh", "\u{1D4BD}": "hscr", "\u{1D559}": "hopf", "\u210B": "Hscr", "\u210C": "Hfr", "\u210D": "Hopf", "\u0125": "hcirc", "\u0124": "Hcirc", "\u210F": "hbar", "\u0127": "hstrok", "\u0126": "Hstrok", "\u{1D55A}": "iopf", "\u{1D526}": "ifr", "\u{1D4BE}": "iscr", "\u2148": "ii", "\u{1D540}": "Iopf", "\u2110": "Iscr", "\u2111": "Im", "\xED": "iacute", "\xCD": "Iacute", "\xEC": "igrave", "\xCC": "Igrave", "\xEE": "icirc", "\xCE": "Icirc", "\xEF": "iuml", "\xCF": "Iuml", "\u0129": "itilde", "\u0128": "Itilde", "\u0130": "Idot", "\u012F": "iogon", "\u012E": "Iogon", "\u012B": "imacr", "\u012A": "Imacr", "\u0133": "ijlig", "\u0132": "IJlig", "\u0131": "imath", "\u{1D4BF}": "jscr", "\u{1D55B}": "jopf", "\u{1D527}": "jfr", "\u{1D4A5}": "Jscr", "\u{1D50D}": "Jfr", "\u{1D541}": "Jopf", "\u0135": "jcirc", "\u0134": "Jcirc", "\u0237": "jmath", "\u{1D55C}": "kopf", "\u{1D4C0}": "kscr", "\u{1D528}": "kfr", "\u{1D4A6}": "Kscr", "\u{1D542}": "Kopf", "\u{1D50E}": "Kfr", "\u0137": "kcedil", "\u0136": "Kcedil", "\u{1D529}": "lfr", "\u{1D4C1}": "lscr", "\u2113": "ell", "\u{1D55D}": "lopf", "\u2112": "Lscr", "\u{1D50F}": "Lfr", "\u{1D543}": "Lopf", "\u013A": "lacute", "\u0139": "Lacute", "\u013E": "lcaron", "\u013D": "Lcaron", "\u013C": "lcedil", "\u013B": "Lcedil", "\u0142": "lstrok", "\u0141": "Lstrok", "\u0140": "lmidot", "\u013F": "Lmidot", "\u{1D52A}": "mfr", "\u{1D55E}": "mopf", "\u{1D4C2}": "mscr", "\u{1D510}": "Mfr", "\u{1D544}": "Mopf", "\u2133": "Mscr", "\u{1D52B}": "nfr", "\u{1D55F}": "nopf", "\u{1D4C3}": "nscr", "\u2115": "Nopf", "\u{1D4A9}": "Nscr", "\u{1D511}": "Nfr", "\u0144": "nacute", "\u0143": "Nacute", "\u0148": "ncaron", "\u0147": "Ncaron", "\xF1": "ntilde", "\xD1": "Ntilde", "\u0146": "ncedil", "\u0145": "Ncedil", "\u2116": "numero", "\u014B": "eng", "\u014A": "ENG", "\u{1D560}": "oopf", "\u{1D52C}": "ofr", "\u2134": "oscr", "\u{1D4AA}": "Oscr", "\u{1D512}": "Ofr", "\u{1D546}": "Oopf", "\xBA": "ordm", "\xF3": "oacute", "\xD3": "Oacute", "\xF2": "ograve", "\xD2": "Ograve", "\xF4": "ocirc", "\xD4": "Ocirc", "\xF6": "ouml", "\xD6": "Ouml", "\u0151": "odblac", "\u0150": "Odblac", "\xF5": "otilde", "\xD5": "Otilde", "\xF8": "oslash", "\xD8": "Oslash", "\u014D": "omacr", "\u014C": "Omacr", "\u0153": "oelig", "\u0152": "OElig", "\u{1D52D}": "pfr", "\u{1D4C5}": "pscr", "\u{1D561}": "popf", "\u2119": "Popf", "\u{1D513}": "Pfr", "\u{1D4AB}": "Pscr", "\u{1D562}": "qopf", "\u{1D52E}": "qfr", "\u{1D4C6}": "qscr", "\u{1D4AC}": "Qscr", "\u{1D514}": "Qfr", "\u211A": "Qopf", "\u0138": "kgreen", "\u{1D52F}": "rfr", "\u{1D563}": "ropf", "\u{1D4C7}": "rscr", "\u211B": "Rscr", "\u211C": "Re", "\u211D": "Ropf", "\u0155": "racute", "\u0154": "Racute", "\u0159": "rcaron", "\u0158": "Rcaron", "\u0157": "rcedil", "\u0156": "Rcedil", "\u{1D564}": "sopf", "\u{1D4C8}": "sscr", "\u{1D530}": "sfr", "\u{1D54A}": "Sopf", "\u{1D516}": "Sfr", "\u{1D4AE}": "Sscr", "\u24C8": "oS", "\u015B": "sacute", "\u015A": "Sacute", "\u015D": "scirc", "\u015C": "Scirc", "\u0161": "scaron", "\u0160": "Scaron", "\u015F": "scedil", "\u015E": "Scedil", "\xDF": "szlig", "\u{1D531}": "tfr", "\u{1D4C9}": "tscr", "\u{1D565}": "topf", "\u{1D4AF}": "Tscr", "\u{1D517}": "Tfr", "\u{1D54B}": "Topf", "\u0165": "tcaron", "\u0164": "Tcaron", "\u0163": "tcedil", "\u0162": "Tcedil", "\u2122": "trade", "\u0167": "tstrok", "\u0166": "Tstrok", "\u{1D4CA}": "uscr", "\u{1D566}": "uopf", "\u{1D532}": "ufr", "\u{1D54C}": "Uopf", "\u{1D518}": "Ufr", "\u{1D4B0}": "Uscr", "\xFA": "uacute", "\xDA": "Uacute", "\xF9": "ugrave", "\xD9": "Ugrave", "\u016D": "ubreve", "\u016C": "Ubreve", "\xFB": "ucirc", "\xDB": "Ucirc", "\u016F": "uring", "\u016E": "Uring", "\xFC": "uuml", "\xDC": "Uuml", "\u0171": "udblac", "\u0170": "Udblac", "\u0169": "utilde", "\u0168": "Utilde", "\u0173": "uogon", "\u0172": "Uogon", "\u016B": "umacr", "\u016A": "Umacr", "\u{1D533}": "vfr", "\u{1D567}": "vopf", "\u{1D4CB}": "vscr", "\u{1D519}": "Vfr", "\u{1D54D}": "Vopf", "\u{1D4B1}": "Vscr", "\u{1D568}": "wopf", "\u{1D4CC}": "wscr", "\u{1D534}": "wfr", "\u{1D4B2}": "Wscr", "\u{1D54E}": "Wopf", "\u{1D51A}": "Wfr", "\u0175": "wcirc", "\u0174": "Wcirc", "\u{1D535}": "xfr", "\u{1D4CD}": "xscr", "\u{1D569}": "xopf", "\u{1D54F}": "Xopf", "\u{1D51B}": "Xfr", "\u{1D4B3}": "Xscr", "\u{1D536}": "yfr", "\u{1D4CE}": "yscr", "\u{1D56A}": "yopf", "\u{1D4B4}": "Yscr", "\u{1D51C}": "Yfr", "\u{1D550}": "Yopf", "\xFD": "yacute", "\xDD": "Yacute", "\u0177": "ycirc", "\u0176": "Ycirc", "\xFF": "yuml", "\u0178": "Yuml", "\u{1D4CF}": "zscr", "\u{1D537}": "zfr", "\u{1D56B}": "zopf", "\u2128": "Zfr", "\u2124": "Zopf", "\u{1D4B5}": "Zscr", "\u017A": "zacute", "\u0179": "Zacute", "\u017E": "zcaron", "\u017D": "Zcaron", "\u017C": "zdot", "\u017B": "Zdot", "\u01B5": "imped", "\xFE": "thorn", "\xDE": "THORN", "\u0149": "napos", "\u03B1": "alpha", "\u0391": "Alpha", "\u03B2": "beta", "\u0392": "Beta", "\u03B3": "gamma", "\u0393": "Gamma", "\u03B4": "delta", "\u0394": "Delta", "\u03B5": "epsi", "\u03F5": "epsiv", "\u0395": "Epsilon", "\u03DD": "gammad", "\u03DC": "Gammad", "\u03B6": "zeta", "\u0396": "Zeta", "\u03B7": "eta", "\u0397": "Eta", "\u03B8": "theta", "\u03D1": "thetav", "\u0398": "Theta", "\u03B9": "iota", "\u0399": "Iota", "\u03BA": "kappa", "\u03F0": "kappav", "\u039A": "Kappa", "\u03BB": "lambda", "\u039B": "Lambda", "\u03BC": "mu", "\xB5": "micro", "\u039C": "Mu", "\u03BD": "nu", "\u039D": "Nu", "\u03BE": "xi", "\u039E": "Xi", "\u03BF": "omicron", "\u039F": "Omicron", "\u03C0": "pi", "\u03D6": "piv", "\u03A0": "Pi", "\u03C1": "rho", "\u03F1": "rhov", "\u03A1": "Rho", "\u03C3": "sigma", "\u03A3": "Sigma", "\u03C2": "sigmaf", "\u03C4": "tau", "\u03A4": "Tau", "\u03C5": "upsi", "\u03A5": "Upsilon", "\u03D2": "Upsi", "\u03C6": "phi", "\u03D5": "phiv", "\u03A6": "Phi", "\u03C7": "chi", "\u03A7": "Chi", "\u03C8": "psi", "\u03A8": "Psi", "\u03C9": "omega", "\u03A9": "ohm", "\u0430": "acy", "\u0410": "Acy", "\u0431": "bcy", "\u0411": "Bcy", "\u0432": "vcy", "\u0412": "Vcy", "\u0433": "gcy", "\u0413": "Gcy", "\u0453": "gjcy", "\u0403": "GJcy", "\u0434": "dcy", "\u0414": "Dcy", "\u0452": "djcy", "\u0402": "DJcy", "\u0435": "iecy", "\u0415": "IEcy", "\u0451": "iocy", "\u0401": "IOcy", "\u0454": "jukcy", "\u0404": "Jukcy", "\u0436": "zhcy", "\u0416": "ZHcy", "\u0437": "zcy", "\u0417": "Zcy", "\u0455": "dscy", "\u0405": "DScy", "\u0438": "icy", "\u0418": "Icy", "\u0456": "iukcy", "\u0406": "Iukcy", "\u0457": "yicy", "\u0407": "YIcy", "\u0439": "jcy", "\u0419": "Jcy", "\u0458": "jsercy", "\u0408": "Jsercy", "\u043A": "kcy", "\u041A": "Kcy", "\u045C": "kjcy", "\u040C": "KJcy", "\u043B": "lcy", "\u041B": "Lcy", "\u0459": "ljcy", "\u0409": "LJcy", "\u043C": "mcy", "\u041C": "Mcy", "\u043D": "ncy", "\u041D": "Ncy", "\u045A": "njcy", "\u040A": "NJcy", "\u043E": "ocy", "\u041E": "Ocy", "\u043F": "pcy", "\u041F": "Pcy", "\u0440": "rcy", "\u0420": "Rcy", "\u0441": "scy", "\u0421": "Scy", "\u0442": "tcy", "\u0422": "Tcy", "\u045B": "tshcy", "\u040B": "TSHcy", "\u0443": "ucy", "\u0423": "Ucy", "\u045E": "ubrcy", "\u040E": "Ubrcy", "\u0444": "fcy", "\u0424": "Fcy", "\u0445": "khcy", "\u0425": "KHcy", "\u0446": "tscy", "\u0426": "TScy", "\u0447": "chcy", "\u0427": "CHcy", "\u045F": "dzcy", "\u040F": "DZcy", "\u0448": "shcy", "\u0428": "SHcy", "\u0449": "shchcy", "\u0429": "SHCHcy", "\u044A": "hardcy", "\u042A": "HARDcy", "\u044B": "ycy", "\u042B": "Ycy", "\u044C": "softcy", "\u042C": "SOFTcy", "\u044D": "ecy", "\u042D": "Ecy", "\u044E": "yucy", "\u042E": "YUcy", "\u044F": "yacy", "\u042F": "YAcy", "\u2135": "aleph", "\u2136": "beth", "\u2137": "gimel", "\u2138": "daleth" };
    var regexEscape = /["&'<>`]/g;
    var escapeMap = {
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#x27;",
      "<": "&lt;",
      ">": "&gt;",
      "`": "&#x60;"
    };
    var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
    var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
    var decodeMap = { "aacute": "\xE1", "Aacute": "\xC1", "abreve": "\u0103", "Abreve": "\u0102", "ac": "\u223E", "acd": "\u223F", "acE": "\u223E\u0333", "acirc": "\xE2", "Acirc": "\xC2", "acute": "\xB4", "acy": "\u0430", "Acy": "\u0410", "aelig": "\xE6", "AElig": "\xC6", "af": "\u2061", "afr": "\u{1D51E}", "Afr": "\u{1D504}", "agrave": "\xE0", "Agrave": "\xC0", "alefsym": "\u2135", "aleph": "\u2135", "alpha": "\u03B1", "Alpha": "\u0391", "amacr": "\u0101", "Amacr": "\u0100", "amalg": "\u2A3F", "amp": "&", "AMP": "&", "and": "\u2227", "And": "\u2A53", "andand": "\u2A55", "andd": "\u2A5C", "andslope": "\u2A58", "andv": "\u2A5A", "ang": "\u2220", "ange": "\u29A4", "angle": "\u2220", "angmsd": "\u2221", "angmsdaa": "\u29A8", "angmsdab": "\u29A9", "angmsdac": "\u29AA", "angmsdad": "\u29AB", "angmsdae": "\u29AC", "angmsdaf": "\u29AD", "angmsdag": "\u29AE", "angmsdah": "\u29AF", "angrt": "\u221F", "angrtvb": "\u22BE", "angrtvbd": "\u299D", "angsph": "\u2222", "angst": "\xC5", "angzarr": "\u237C", "aogon": "\u0105", "Aogon": "\u0104", "aopf": "\u{1D552}", "Aopf": "\u{1D538}", "ap": "\u2248", "apacir": "\u2A6F", "ape": "\u224A", "apE": "\u2A70", "apid": "\u224B", "apos": "'", "ApplyFunction": "\u2061", "approx": "\u2248", "approxeq": "\u224A", "aring": "\xE5", "Aring": "\xC5", "ascr": "\u{1D4B6}", "Ascr": "\u{1D49C}", "Assign": "\u2254", "ast": "*", "asymp": "\u2248", "asympeq": "\u224D", "atilde": "\xE3", "Atilde": "\xC3", "auml": "\xE4", "Auml": "\xC4", "awconint": "\u2233", "awint": "\u2A11", "backcong": "\u224C", "backepsilon": "\u03F6", "backprime": "\u2035", "backsim": "\u223D", "backsimeq": "\u22CD", "Backslash": "\u2216", "Barv": "\u2AE7", "barvee": "\u22BD", "barwed": "\u2305", "Barwed": "\u2306", "barwedge": "\u2305", "bbrk": "\u23B5", "bbrktbrk": "\u23B6", "bcong": "\u224C", "bcy": "\u0431", "Bcy": "\u0411", "bdquo": "\u201E", "becaus": "\u2235", "because": "\u2235", "Because": "\u2235", "bemptyv": "\u29B0", "bepsi": "\u03F6", "bernou": "\u212C", "Bernoullis": "\u212C", "beta": "\u03B2", "Beta": "\u0392", "beth": "\u2136", "between": "\u226C", "bfr": "\u{1D51F}", "Bfr": "\u{1D505}", "bigcap": "\u22C2", "bigcirc": "\u25EF", "bigcup": "\u22C3", "bigodot": "\u2A00", "bigoplus": "\u2A01", "bigotimes": "\u2A02", "bigsqcup": "\u2A06", "bigstar": "\u2605", "bigtriangledown": "\u25BD", "bigtriangleup": "\u25B3", "biguplus": "\u2A04", "bigvee": "\u22C1", "bigwedge": "\u22C0", "bkarow": "\u290D", "blacklozenge": "\u29EB", "blacksquare": "\u25AA", "blacktriangle": "\u25B4", "blacktriangledown": "\u25BE", "blacktriangleleft": "\u25C2", "blacktriangleright": "\u25B8", "blank": "\u2423", "blk12": "\u2592", "blk14": "\u2591", "blk34": "\u2593", "block": "\u2588", "bne": "=\u20E5", "bnequiv": "\u2261\u20E5", "bnot": "\u2310", "bNot": "\u2AED", "bopf": "\u{1D553}", "Bopf": "\u{1D539}", "bot": "\u22A5", "bottom": "\u22A5", "bowtie": "\u22C8", "boxbox": "\u29C9", "boxdl": "\u2510", "boxdL": "\u2555", "boxDl": "\u2556", "boxDL": "\u2557", "boxdr": "\u250C", "boxdR": "\u2552", "boxDr": "\u2553", "boxDR": "\u2554", "boxh": "\u2500", "boxH": "\u2550", "boxhd": "\u252C", "boxhD": "\u2565", "boxHd": "\u2564", "boxHD": "\u2566", "boxhu": "\u2534", "boxhU": "\u2568", "boxHu": "\u2567", "boxHU": "\u2569", "boxminus": "\u229F", "boxplus": "\u229E", "boxtimes": "\u22A0", "boxul": "\u2518", "boxuL": "\u255B", "boxUl": "\u255C", "boxUL": "\u255D", "boxur": "\u2514", "boxuR": "\u2558", "boxUr": "\u2559", "boxUR": "\u255A", "boxv": "\u2502", "boxV": "\u2551", "boxvh": "\u253C", "boxvH": "\u256A", "boxVh": "\u256B", "boxVH": "\u256C", "boxvl": "\u2524", "boxvL": "\u2561", "boxVl": "\u2562", "boxVL": "\u2563", "boxvr": "\u251C", "boxvR": "\u255E", "boxVr": "\u255F", "boxVR": "\u2560", "bprime": "\u2035", "breve": "\u02D8", "Breve": "\u02D8", "brvbar": "\xA6", "bscr": "\u{1D4B7}", "Bscr": "\u212C", "bsemi": "\u204F", "bsim": "\u223D", "bsime": "\u22CD", "bsol": "\\", "bsolb": "\u29C5", "bsolhsub": "\u27C8", "bull": "\u2022", "bullet": "\u2022", "bump": "\u224E", "bumpe": "\u224F", "bumpE": "\u2AAE", "bumpeq": "\u224F", "Bumpeq": "\u224E", "cacute": "\u0107", "Cacute": "\u0106", "cap": "\u2229", "Cap": "\u22D2", "capand": "\u2A44", "capbrcup": "\u2A49", "capcap": "\u2A4B", "capcup": "\u2A47", "capdot": "\u2A40", "CapitalDifferentialD": "\u2145", "caps": "\u2229\uFE00", "caret": "\u2041", "caron": "\u02C7", "Cayleys": "\u212D", "ccaps": "\u2A4D", "ccaron": "\u010D", "Ccaron": "\u010C", "ccedil": "\xE7", "Ccedil": "\xC7", "ccirc": "\u0109", "Ccirc": "\u0108", "Cconint": "\u2230", "ccups": "\u2A4C", "ccupssm": "\u2A50", "cdot": "\u010B", "Cdot": "\u010A", "cedil": "\xB8", "Cedilla": "\xB8", "cemptyv": "\u29B2", "cent": "\xA2", "centerdot": "\xB7", "CenterDot": "\xB7", "cfr": "\u{1D520}", "Cfr": "\u212D", "chcy": "\u0447", "CHcy": "\u0427", "check": "\u2713", "checkmark": "\u2713", "chi": "\u03C7", "Chi": "\u03A7", "cir": "\u25CB", "circ": "\u02C6", "circeq": "\u2257", "circlearrowleft": "\u21BA", "circlearrowright": "\u21BB", "circledast": "\u229B", "circledcirc": "\u229A", "circleddash": "\u229D", "CircleDot": "\u2299", "circledR": "\xAE", "circledS": "\u24C8", "CircleMinus": "\u2296", "CirclePlus": "\u2295", "CircleTimes": "\u2297", "cire": "\u2257", "cirE": "\u29C3", "cirfnint": "\u2A10", "cirmid": "\u2AEF", "cirscir": "\u29C2", "ClockwiseContourIntegral": "\u2232", "CloseCurlyDoubleQuote": "\u201D", "CloseCurlyQuote": "\u2019", "clubs": "\u2663", "clubsuit": "\u2663", "colon": ":", "Colon": "\u2237", "colone": "\u2254", "Colone": "\u2A74", "coloneq": "\u2254", "comma": ",", "commat": "@", "comp": "\u2201", "compfn": "\u2218", "complement": "\u2201", "complexes": "\u2102", "cong": "\u2245", "congdot": "\u2A6D", "Congruent": "\u2261", "conint": "\u222E", "Conint": "\u222F", "ContourIntegral": "\u222E", "copf": "\u{1D554}", "Copf": "\u2102", "coprod": "\u2210", "Coproduct": "\u2210", "copy": "\xA9", "COPY": "\xA9", "copysr": "\u2117", "CounterClockwiseContourIntegral": "\u2233", "crarr": "\u21B5", "cross": "\u2717", "Cross": "\u2A2F", "cscr": "\u{1D4B8}", "Cscr": "\u{1D49E}", "csub": "\u2ACF", "csube": "\u2AD1", "csup": "\u2AD0", "csupe": "\u2AD2", "ctdot": "\u22EF", "cudarrl": "\u2938", "cudarrr": "\u2935", "cuepr": "\u22DE", "cuesc": "\u22DF", "cularr": "\u21B6", "cularrp": "\u293D", "cup": "\u222A", "Cup": "\u22D3", "cupbrcap": "\u2A48", "cupcap": "\u2A46", "CupCap": "\u224D", "cupcup": "\u2A4A", "cupdot": "\u228D", "cupor": "\u2A45", "cups": "\u222A\uFE00", "curarr": "\u21B7", "curarrm": "\u293C", "curlyeqprec": "\u22DE", "curlyeqsucc": "\u22DF", "curlyvee": "\u22CE", "curlywedge": "\u22CF", "curren": "\xA4", "curvearrowleft": "\u21B6", "curvearrowright": "\u21B7", "cuvee": "\u22CE", "cuwed": "\u22CF", "cwconint": "\u2232", "cwint": "\u2231", "cylcty": "\u232D", "dagger": "\u2020", "Dagger": "\u2021", "daleth": "\u2138", "darr": "\u2193", "dArr": "\u21D3", "Darr": "\u21A1", "dash": "\u2010", "dashv": "\u22A3", "Dashv": "\u2AE4", "dbkarow": "\u290F", "dblac": "\u02DD", "dcaron": "\u010F", "Dcaron": "\u010E", "dcy": "\u0434", "Dcy": "\u0414", "dd": "\u2146", "DD": "\u2145", "ddagger": "\u2021", "ddarr": "\u21CA", "DDotrahd": "\u2911", "ddotseq": "\u2A77", "deg": "\xB0", "Del": "\u2207", "delta": "\u03B4", "Delta": "\u0394", "demptyv": "\u29B1", "dfisht": "\u297F", "dfr": "\u{1D521}", "Dfr": "\u{1D507}", "dHar": "\u2965", "dharl": "\u21C3", "dharr": "\u21C2", "DiacriticalAcute": "\xB4", "DiacriticalDot": "\u02D9", "DiacriticalDoubleAcute": "\u02DD", "DiacriticalGrave": "`", "DiacriticalTilde": "\u02DC", "diam": "\u22C4", "diamond": "\u22C4", "Diamond": "\u22C4", "diamondsuit": "\u2666", "diams": "\u2666", "die": "\xA8", "DifferentialD": "\u2146", "digamma": "\u03DD", "disin": "\u22F2", "div": "\xF7", "divide": "\xF7", "divideontimes": "\u22C7", "divonx": "\u22C7", "djcy": "\u0452", "DJcy": "\u0402", "dlcorn": "\u231E", "dlcrop": "\u230D", "dollar": "$", "dopf": "\u{1D555}", "Dopf": "\u{1D53B}", "dot": "\u02D9", "Dot": "\xA8", "DotDot": "\u20DC", "doteq": "\u2250", "doteqdot": "\u2251", "DotEqual": "\u2250", "dotminus": "\u2238", "dotplus": "\u2214", "dotsquare": "\u22A1", "doublebarwedge": "\u2306", "DoubleContourIntegral": "\u222F", "DoubleDot": "\xA8", "DoubleDownArrow": "\u21D3", "DoubleLeftArrow": "\u21D0", "DoubleLeftRightArrow": "\u21D4", "DoubleLeftTee": "\u2AE4", "DoubleLongLeftArrow": "\u27F8", "DoubleLongLeftRightArrow": "\u27FA", "DoubleLongRightArrow": "\u27F9", "DoubleRightArrow": "\u21D2", "DoubleRightTee": "\u22A8", "DoubleUpArrow": "\u21D1", "DoubleUpDownArrow": "\u21D5", "DoubleVerticalBar": "\u2225", "downarrow": "\u2193", "Downarrow": "\u21D3", "DownArrow": "\u2193", "DownArrowBar": "\u2913", "DownArrowUpArrow": "\u21F5", "DownBreve": "\u0311", "downdownarrows": "\u21CA", "downharpoonleft": "\u21C3", "downharpoonright": "\u21C2", "DownLeftRightVector": "\u2950", "DownLeftTeeVector": "\u295E", "DownLeftVector": "\u21BD", "DownLeftVectorBar": "\u2956", "DownRightTeeVector": "\u295F", "DownRightVector": "\u21C1", "DownRightVectorBar": "\u2957", "DownTee": "\u22A4", "DownTeeArrow": "\u21A7", "drbkarow": "\u2910", "drcorn": "\u231F", "drcrop": "\u230C", "dscr": "\u{1D4B9}", "Dscr": "\u{1D49F}", "dscy": "\u0455", "DScy": "\u0405", "dsol": "\u29F6", "dstrok": "\u0111", "Dstrok": "\u0110", "dtdot": "\u22F1", "dtri": "\u25BF", "dtrif": "\u25BE", "duarr": "\u21F5", "duhar": "\u296F", "dwangle": "\u29A6", "dzcy": "\u045F", "DZcy": "\u040F", "dzigrarr": "\u27FF", "eacute": "\xE9", "Eacute": "\xC9", "easter": "\u2A6E", "ecaron": "\u011B", "Ecaron": "\u011A", "ecir": "\u2256", "ecirc": "\xEA", "Ecirc": "\xCA", "ecolon": "\u2255", "ecy": "\u044D", "Ecy": "\u042D", "eDDot": "\u2A77", "edot": "\u0117", "eDot": "\u2251", "Edot": "\u0116", "ee": "\u2147", "efDot": "\u2252", "efr": "\u{1D522}", "Efr": "\u{1D508}", "eg": "\u2A9A", "egrave": "\xE8", "Egrave": "\xC8", "egs": "\u2A96", "egsdot": "\u2A98", "el": "\u2A99", "Element": "\u2208", "elinters": "\u23E7", "ell": "\u2113", "els": "\u2A95", "elsdot": "\u2A97", "emacr": "\u0113", "Emacr": "\u0112", "empty": "\u2205", "emptyset": "\u2205", "EmptySmallSquare": "\u25FB", "emptyv": "\u2205", "EmptyVerySmallSquare": "\u25AB", "emsp": "\u2003", "emsp13": "\u2004", "emsp14": "\u2005", "eng": "\u014B", "ENG": "\u014A", "ensp": "\u2002", "eogon": "\u0119", "Eogon": "\u0118", "eopf": "\u{1D556}", "Eopf": "\u{1D53C}", "epar": "\u22D5", "eparsl": "\u29E3", "eplus": "\u2A71", "epsi": "\u03B5", "epsilon": "\u03B5", "Epsilon": "\u0395", "epsiv": "\u03F5", "eqcirc": "\u2256", "eqcolon": "\u2255", "eqsim": "\u2242", "eqslantgtr": "\u2A96", "eqslantless": "\u2A95", "Equal": "\u2A75", "equals": "=", "EqualTilde": "\u2242", "equest": "\u225F", "Equilibrium": "\u21CC", "equiv": "\u2261", "equivDD": "\u2A78", "eqvparsl": "\u29E5", "erarr": "\u2971", "erDot": "\u2253", "escr": "\u212F", "Escr": "\u2130", "esdot": "\u2250", "esim": "\u2242", "Esim": "\u2A73", "eta": "\u03B7", "Eta": "\u0397", "eth": "\xF0", "ETH": "\xD0", "euml": "\xEB", "Euml": "\xCB", "euro": "\u20AC", "excl": "!", "exist": "\u2203", "Exists": "\u2203", "expectation": "\u2130", "exponentiale": "\u2147", "ExponentialE": "\u2147", "fallingdotseq": "\u2252", "fcy": "\u0444", "Fcy": "\u0424", "female": "\u2640", "ffilig": "\uFB03", "fflig": "\uFB00", "ffllig": "\uFB04", "ffr": "\u{1D523}", "Ffr": "\u{1D509}", "filig": "\uFB01", "FilledSmallSquare": "\u25FC", "FilledVerySmallSquare": "\u25AA", "fjlig": "fj", "flat": "\u266D", "fllig": "\uFB02", "fltns": "\u25B1", "fnof": "\u0192", "fopf": "\u{1D557}", "Fopf": "\u{1D53D}", "forall": "\u2200", "ForAll": "\u2200", "fork": "\u22D4", "forkv": "\u2AD9", "Fouriertrf": "\u2131", "fpartint": "\u2A0D", "frac12": "\xBD", "frac13": "\u2153", "frac14": "\xBC", "frac15": "\u2155", "frac16": "\u2159", "frac18": "\u215B", "frac23": "\u2154", "frac25": "\u2156", "frac34": "\xBE", "frac35": "\u2157", "frac38": "\u215C", "frac45": "\u2158", "frac56": "\u215A", "frac58": "\u215D", "frac78": "\u215E", "frasl": "\u2044", "frown": "\u2322", "fscr": "\u{1D4BB}", "Fscr": "\u2131", "gacute": "\u01F5", "gamma": "\u03B3", "Gamma": "\u0393", "gammad": "\u03DD", "Gammad": "\u03DC", "gap": "\u2A86", "gbreve": "\u011F", "Gbreve": "\u011E", "Gcedil": "\u0122", "gcirc": "\u011D", "Gcirc": "\u011C", "gcy": "\u0433", "Gcy": "\u0413", "gdot": "\u0121", "Gdot": "\u0120", "ge": "\u2265", "gE": "\u2267", "gel": "\u22DB", "gEl": "\u2A8C", "geq": "\u2265", "geqq": "\u2267", "geqslant": "\u2A7E", "ges": "\u2A7E", "gescc": "\u2AA9", "gesdot": "\u2A80", "gesdoto": "\u2A82", "gesdotol": "\u2A84", "gesl": "\u22DB\uFE00", "gesles": "\u2A94", "gfr": "\u{1D524}", "Gfr": "\u{1D50A}", "gg": "\u226B", "Gg": "\u22D9", "ggg": "\u22D9", "gimel": "\u2137", "gjcy": "\u0453", "GJcy": "\u0403", "gl": "\u2277", "gla": "\u2AA5", "glE": "\u2A92", "glj": "\u2AA4", "gnap": "\u2A8A", "gnapprox": "\u2A8A", "gne": "\u2A88", "gnE": "\u2269", "gneq": "\u2A88", "gneqq": "\u2269", "gnsim": "\u22E7", "gopf": "\u{1D558}", "Gopf": "\u{1D53E}", "grave": "`", "GreaterEqual": "\u2265", "GreaterEqualLess": "\u22DB", "GreaterFullEqual": "\u2267", "GreaterGreater": "\u2AA2", "GreaterLess": "\u2277", "GreaterSlantEqual": "\u2A7E", "GreaterTilde": "\u2273", "gscr": "\u210A", "Gscr": "\u{1D4A2}", "gsim": "\u2273", "gsime": "\u2A8E", "gsiml": "\u2A90", "gt": ">", "Gt": "\u226B", "GT": ">", "gtcc": "\u2AA7", "gtcir": "\u2A7A", "gtdot": "\u22D7", "gtlPar": "\u2995", "gtquest": "\u2A7C", "gtrapprox": "\u2A86", "gtrarr": "\u2978", "gtrdot": "\u22D7", "gtreqless": "\u22DB", "gtreqqless": "\u2A8C", "gtrless": "\u2277", "gtrsim": "\u2273", "gvertneqq": "\u2269\uFE00", "gvnE": "\u2269\uFE00", "Hacek": "\u02C7", "hairsp": "\u200A", "half": "\xBD", "hamilt": "\u210B", "hardcy": "\u044A", "HARDcy": "\u042A", "harr": "\u2194", "hArr": "\u21D4", "harrcir": "\u2948", "harrw": "\u21AD", "Hat": "^", "hbar": "\u210F", "hcirc": "\u0125", "Hcirc": "\u0124", "hearts": "\u2665", "heartsuit": "\u2665", "hellip": "\u2026", "hercon": "\u22B9", "hfr": "\u{1D525}", "Hfr": "\u210C", "HilbertSpace": "\u210B", "hksearow": "\u2925", "hkswarow": "\u2926", "hoarr": "\u21FF", "homtht": "\u223B", "hookleftarrow": "\u21A9", "hookrightarrow": "\u21AA", "hopf": "\u{1D559}", "Hopf": "\u210D", "horbar": "\u2015", "HorizontalLine": "\u2500", "hscr": "\u{1D4BD}", "Hscr": "\u210B", "hslash": "\u210F", "hstrok": "\u0127", "Hstrok": "\u0126", "HumpDownHump": "\u224E", "HumpEqual": "\u224F", "hybull": "\u2043", "hyphen": "\u2010", "iacute": "\xED", "Iacute": "\xCD", "ic": "\u2063", "icirc": "\xEE", "Icirc": "\xCE", "icy": "\u0438", "Icy": "\u0418", "Idot": "\u0130", "iecy": "\u0435", "IEcy": "\u0415", "iexcl": "\xA1", "iff": "\u21D4", "ifr": "\u{1D526}", "Ifr": "\u2111", "igrave": "\xEC", "Igrave": "\xCC", "ii": "\u2148", "iiiint": "\u2A0C", "iiint": "\u222D", "iinfin": "\u29DC", "iiota": "\u2129", "ijlig": "\u0133", "IJlig": "\u0132", "Im": "\u2111", "imacr": "\u012B", "Imacr": "\u012A", "image": "\u2111", "ImaginaryI": "\u2148", "imagline": "\u2110", "imagpart": "\u2111", "imath": "\u0131", "imof": "\u22B7", "imped": "\u01B5", "Implies": "\u21D2", "in": "\u2208", "incare": "\u2105", "infin": "\u221E", "infintie": "\u29DD", "inodot": "\u0131", "int": "\u222B", "Int": "\u222C", "intcal": "\u22BA", "integers": "\u2124", "Integral": "\u222B", "intercal": "\u22BA", "Intersection": "\u22C2", "intlarhk": "\u2A17", "intprod": "\u2A3C", "InvisibleComma": "\u2063", "InvisibleTimes": "\u2062", "iocy": "\u0451", "IOcy": "\u0401", "iogon": "\u012F", "Iogon": "\u012E", "iopf": "\u{1D55A}", "Iopf": "\u{1D540}", "iota": "\u03B9", "Iota": "\u0399", "iprod": "\u2A3C", "iquest": "\xBF", "iscr": "\u{1D4BE}", "Iscr": "\u2110", "isin": "\u2208", "isindot": "\u22F5", "isinE": "\u22F9", "isins": "\u22F4", "isinsv": "\u22F3", "isinv": "\u2208", "it": "\u2062", "itilde": "\u0129", "Itilde": "\u0128", "iukcy": "\u0456", "Iukcy": "\u0406", "iuml": "\xEF", "Iuml": "\xCF", "jcirc": "\u0135", "Jcirc": "\u0134", "jcy": "\u0439", "Jcy": "\u0419", "jfr": "\u{1D527}", "Jfr": "\u{1D50D}", "jmath": "\u0237", "jopf": "\u{1D55B}", "Jopf": "\u{1D541}", "jscr": "\u{1D4BF}", "Jscr": "\u{1D4A5}", "jsercy": "\u0458", "Jsercy": "\u0408", "jukcy": "\u0454", "Jukcy": "\u0404", "kappa": "\u03BA", "Kappa": "\u039A", "kappav": "\u03F0", "kcedil": "\u0137", "Kcedil": "\u0136", "kcy": "\u043A", "Kcy": "\u041A", "kfr": "\u{1D528}", "Kfr": "\u{1D50E}", "kgreen": "\u0138", "khcy": "\u0445", "KHcy": "\u0425", "kjcy": "\u045C", "KJcy": "\u040C", "kopf": "\u{1D55C}", "Kopf": "\u{1D542}", "kscr": "\u{1D4C0}", "Kscr": "\u{1D4A6}", "lAarr": "\u21DA", "lacute": "\u013A", "Lacute": "\u0139", "laemptyv": "\u29B4", "lagran": "\u2112", "lambda": "\u03BB", "Lambda": "\u039B", "lang": "\u27E8", "Lang": "\u27EA", "langd": "\u2991", "langle": "\u27E8", "lap": "\u2A85", "Laplacetrf": "\u2112", "laquo": "\xAB", "larr": "\u2190", "lArr": "\u21D0", "Larr": "\u219E", "larrb": "\u21E4", "larrbfs": "\u291F", "larrfs": "\u291D", "larrhk": "\u21A9", "larrlp": "\u21AB", "larrpl": "\u2939", "larrsim": "\u2973", "larrtl": "\u21A2", "lat": "\u2AAB", "latail": "\u2919", "lAtail": "\u291B", "late": "\u2AAD", "lates": "\u2AAD\uFE00", "lbarr": "\u290C", "lBarr": "\u290E", "lbbrk": "\u2772", "lbrace": "{", "lbrack": "[", "lbrke": "\u298B", "lbrksld": "\u298F", "lbrkslu": "\u298D", "lcaron": "\u013E", "Lcaron": "\u013D", "lcedil": "\u013C", "Lcedil": "\u013B", "lceil": "\u2308", "lcub": "{", "lcy": "\u043B", "Lcy": "\u041B", "ldca": "\u2936", "ldquo": "\u201C", "ldquor": "\u201E", "ldrdhar": "\u2967", "ldrushar": "\u294B", "ldsh": "\u21B2", "le": "\u2264", "lE": "\u2266", "LeftAngleBracket": "\u27E8", "leftarrow": "\u2190", "Leftarrow": "\u21D0", "LeftArrow": "\u2190", "LeftArrowBar": "\u21E4", "LeftArrowRightArrow": "\u21C6", "leftarrowtail": "\u21A2", "LeftCeiling": "\u2308", "LeftDoubleBracket": "\u27E6", "LeftDownTeeVector": "\u2961", "LeftDownVector": "\u21C3", "LeftDownVectorBar": "\u2959", "LeftFloor": "\u230A", "leftharpoondown": "\u21BD", "leftharpoonup": "\u21BC", "leftleftarrows": "\u21C7", "leftrightarrow": "\u2194", "Leftrightarrow": "\u21D4", "LeftRightArrow": "\u2194", "leftrightarrows": "\u21C6", "leftrightharpoons": "\u21CB", "leftrightsquigarrow": "\u21AD", "LeftRightVector": "\u294E", "LeftTee": "\u22A3", "LeftTeeArrow": "\u21A4", "LeftTeeVector": "\u295A", "leftthreetimes": "\u22CB", "LeftTriangle": "\u22B2", "LeftTriangleBar": "\u29CF", "LeftTriangleEqual": "\u22B4", "LeftUpDownVector": "\u2951", "LeftUpTeeVector": "\u2960", "LeftUpVector": "\u21BF", "LeftUpVectorBar": "\u2958", "LeftVector": "\u21BC", "LeftVectorBar": "\u2952", "leg": "\u22DA", "lEg": "\u2A8B", "leq": "\u2264", "leqq": "\u2266", "leqslant": "\u2A7D", "les": "\u2A7D", "lescc": "\u2AA8", "lesdot": "\u2A7F", "lesdoto": "\u2A81", "lesdotor": "\u2A83", "lesg": "\u22DA\uFE00", "lesges": "\u2A93", "lessapprox": "\u2A85", "lessdot": "\u22D6", "lesseqgtr": "\u22DA", "lesseqqgtr": "\u2A8B", "LessEqualGreater": "\u22DA", "LessFullEqual": "\u2266", "LessGreater": "\u2276", "lessgtr": "\u2276", "LessLess": "\u2AA1", "lesssim": "\u2272", "LessSlantEqual": "\u2A7D", "LessTilde": "\u2272", "lfisht": "\u297C", "lfloor": "\u230A", "lfr": "\u{1D529}", "Lfr": "\u{1D50F}", "lg": "\u2276", "lgE": "\u2A91", "lHar": "\u2962", "lhard": "\u21BD", "lharu": "\u21BC", "lharul": "\u296A", "lhblk": "\u2584", "ljcy": "\u0459", "LJcy": "\u0409", "ll": "\u226A", "Ll": "\u22D8", "llarr": "\u21C7", "llcorner": "\u231E", "Lleftarrow": "\u21DA", "llhard": "\u296B", "lltri": "\u25FA", "lmidot": "\u0140", "Lmidot": "\u013F", "lmoust": "\u23B0", "lmoustache": "\u23B0", "lnap": "\u2A89", "lnapprox": "\u2A89", "lne": "\u2A87", "lnE": "\u2268", "lneq": "\u2A87", "lneqq": "\u2268", "lnsim": "\u22E6", "loang": "\u27EC", "loarr": "\u21FD", "lobrk": "\u27E6", "longleftarrow": "\u27F5", "Longleftarrow": "\u27F8", "LongLeftArrow": "\u27F5", "longleftrightarrow": "\u27F7", "Longleftrightarrow": "\u27FA", "LongLeftRightArrow": "\u27F7", "longmapsto": "\u27FC", "longrightarrow": "\u27F6", "Longrightarrow": "\u27F9", "LongRightArrow": "\u27F6", "looparrowleft": "\u21AB", "looparrowright": "\u21AC", "lopar": "\u2985", "lopf": "\u{1D55D}", "Lopf": "\u{1D543}", "loplus": "\u2A2D", "lotimes": "\u2A34", "lowast": "\u2217", "lowbar": "_", "LowerLeftArrow": "\u2199", "LowerRightArrow": "\u2198", "loz": "\u25CA", "lozenge": "\u25CA", "lozf": "\u29EB", "lpar": "(", "lparlt": "\u2993", "lrarr": "\u21C6", "lrcorner": "\u231F", "lrhar": "\u21CB", "lrhard": "\u296D", "lrm": "\u200E", "lrtri": "\u22BF", "lsaquo": "\u2039", "lscr": "\u{1D4C1}", "Lscr": "\u2112", "lsh": "\u21B0", "Lsh": "\u21B0", "lsim": "\u2272", "lsime": "\u2A8D", "lsimg": "\u2A8F", "lsqb": "[", "lsquo": "\u2018", "lsquor": "\u201A", "lstrok": "\u0142", "Lstrok": "\u0141", "lt": "<", "Lt": "\u226A", "LT": "<", "ltcc": "\u2AA6", "ltcir": "\u2A79", "ltdot": "\u22D6", "lthree": "\u22CB", "ltimes": "\u22C9", "ltlarr": "\u2976", "ltquest": "\u2A7B", "ltri": "\u25C3", "ltrie": "\u22B4", "ltrif": "\u25C2", "ltrPar": "\u2996", "lurdshar": "\u294A", "luruhar": "\u2966", "lvertneqq": "\u2268\uFE00", "lvnE": "\u2268\uFE00", "macr": "\xAF", "male": "\u2642", "malt": "\u2720", "maltese": "\u2720", "map": "\u21A6", "Map": "\u2905", "mapsto": "\u21A6", "mapstodown": "\u21A7", "mapstoleft": "\u21A4", "mapstoup": "\u21A5", "marker": "\u25AE", "mcomma": "\u2A29", "mcy": "\u043C", "Mcy": "\u041C", "mdash": "\u2014", "mDDot": "\u223A", "measuredangle": "\u2221", "MediumSpace": "\u205F", "Mellintrf": "\u2133", "mfr": "\u{1D52A}", "Mfr": "\u{1D510}", "mho": "\u2127", "micro": "\xB5", "mid": "\u2223", "midast": "*", "midcir": "\u2AF0", "middot": "\xB7", "minus": "\u2212", "minusb": "\u229F", "minusd": "\u2238", "minusdu": "\u2A2A", "MinusPlus": "\u2213", "mlcp": "\u2ADB", "mldr": "\u2026", "mnplus": "\u2213", "models": "\u22A7", "mopf": "\u{1D55E}", "Mopf": "\u{1D544}", "mp": "\u2213", "mscr": "\u{1D4C2}", "Mscr": "\u2133", "mstpos": "\u223E", "mu": "\u03BC", "Mu": "\u039C", "multimap": "\u22B8", "mumap": "\u22B8", "nabla": "\u2207", "nacute": "\u0144", "Nacute": "\u0143", "nang": "\u2220\u20D2", "nap": "\u2249", "napE": "\u2A70\u0338", "napid": "\u224B\u0338", "napos": "\u0149", "napprox": "\u2249", "natur": "\u266E", "natural": "\u266E", "naturals": "\u2115", "nbsp": "\xA0", "nbump": "\u224E\u0338", "nbumpe": "\u224F\u0338", "ncap": "\u2A43", "ncaron": "\u0148", "Ncaron": "\u0147", "ncedil": "\u0146", "Ncedil": "\u0145", "ncong": "\u2247", "ncongdot": "\u2A6D\u0338", "ncup": "\u2A42", "ncy": "\u043D", "Ncy": "\u041D", "ndash": "\u2013", "ne": "\u2260", "nearhk": "\u2924", "nearr": "\u2197", "neArr": "\u21D7", "nearrow": "\u2197", "nedot": "\u2250\u0338", "NegativeMediumSpace": "\u200B", "NegativeThickSpace": "\u200B", "NegativeThinSpace": "\u200B", "NegativeVeryThinSpace": "\u200B", "nequiv": "\u2262", "nesear": "\u2928", "nesim": "\u2242\u0338", "NestedGreaterGreater": "\u226B", "NestedLessLess": "\u226A", "NewLine": "\n", "nexist": "\u2204", "nexists": "\u2204", "nfr": "\u{1D52B}", "Nfr": "\u{1D511}", "nge": "\u2271", "ngE": "\u2267\u0338", "ngeq": "\u2271", "ngeqq": "\u2267\u0338", "ngeqslant": "\u2A7E\u0338", "nges": "\u2A7E\u0338", "nGg": "\u22D9\u0338", "ngsim": "\u2275", "ngt": "\u226F", "nGt": "\u226B\u20D2", "ngtr": "\u226F", "nGtv": "\u226B\u0338", "nharr": "\u21AE", "nhArr": "\u21CE", "nhpar": "\u2AF2", "ni": "\u220B", "nis": "\u22FC", "nisd": "\u22FA", "niv": "\u220B", "njcy": "\u045A", "NJcy": "\u040A", "nlarr": "\u219A", "nlArr": "\u21CD", "nldr": "\u2025", "nle": "\u2270", "nlE": "\u2266\u0338", "nleftarrow": "\u219A", "nLeftarrow": "\u21CD", "nleftrightarrow": "\u21AE", "nLeftrightarrow": "\u21CE", "nleq": "\u2270", "nleqq": "\u2266\u0338", "nleqslant": "\u2A7D\u0338", "nles": "\u2A7D\u0338", "nless": "\u226E", "nLl": "\u22D8\u0338", "nlsim": "\u2274", "nlt": "\u226E", "nLt": "\u226A\u20D2", "nltri": "\u22EA", "nltrie": "\u22EC", "nLtv": "\u226A\u0338", "nmid": "\u2224", "NoBreak": "\u2060", "NonBreakingSpace": "\xA0", "nopf": "\u{1D55F}", "Nopf": "\u2115", "not": "\xAC", "Not": "\u2AEC", "NotCongruent": "\u2262", "NotCupCap": "\u226D", "NotDoubleVerticalBar": "\u2226", "NotElement": "\u2209", "NotEqual": "\u2260", "NotEqualTilde": "\u2242\u0338", "NotExists": "\u2204", "NotGreater": "\u226F", "NotGreaterEqual": "\u2271", "NotGreaterFullEqual": "\u2267\u0338", "NotGreaterGreater": "\u226B\u0338", "NotGreaterLess": "\u2279", "NotGreaterSlantEqual": "\u2A7E\u0338", "NotGreaterTilde": "\u2275", "NotHumpDownHump": "\u224E\u0338", "NotHumpEqual": "\u224F\u0338", "notin": "\u2209", "notindot": "\u22F5\u0338", "notinE": "\u22F9\u0338", "notinva": "\u2209", "notinvb": "\u22F7", "notinvc": "\u22F6", "NotLeftTriangle": "\u22EA", "NotLeftTriangleBar": "\u29CF\u0338", "NotLeftTriangleEqual": "\u22EC", "NotLess": "\u226E", "NotLessEqual": "\u2270", "NotLessGreater": "\u2278", "NotLessLess": "\u226A\u0338", "NotLessSlantEqual": "\u2A7D\u0338", "NotLessTilde": "\u2274", "NotNestedGreaterGreater": "\u2AA2\u0338", "NotNestedLessLess": "\u2AA1\u0338", "notni": "\u220C", "notniva": "\u220C", "notnivb": "\u22FE", "notnivc": "\u22FD", "NotPrecedes": "\u2280", "NotPrecedesEqual": "\u2AAF\u0338", "NotPrecedesSlantEqual": "\u22E0", "NotReverseElement": "\u220C", "NotRightTriangle": "\u22EB", "NotRightTriangleBar": "\u29D0\u0338", "NotRightTriangleEqual": "\u22ED", "NotSquareSubset": "\u228F\u0338", "NotSquareSubsetEqual": "\u22E2", "NotSquareSuperset": "\u2290\u0338", "NotSquareSupersetEqual": "\u22E3", "NotSubset": "\u2282\u20D2", "NotSubsetEqual": "\u2288", "NotSucceeds": "\u2281", "NotSucceedsEqual": "\u2AB0\u0338", "NotSucceedsSlantEqual": "\u22E1", "NotSucceedsTilde": "\u227F\u0338", "NotSuperset": "\u2283\u20D2", "NotSupersetEqual": "\u2289", "NotTilde": "\u2241", "NotTildeEqual": "\u2244", "NotTildeFullEqual": "\u2247", "NotTildeTilde": "\u2249", "NotVerticalBar": "\u2224", "npar": "\u2226", "nparallel": "\u2226", "nparsl": "\u2AFD\u20E5", "npart": "\u2202\u0338", "npolint": "\u2A14", "npr": "\u2280", "nprcue": "\u22E0", "npre": "\u2AAF\u0338", "nprec": "\u2280", "npreceq": "\u2AAF\u0338", "nrarr": "\u219B", "nrArr": "\u21CF", "nrarrc": "\u2933\u0338", "nrarrw": "\u219D\u0338", "nrightarrow": "\u219B", "nRightarrow": "\u21CF", "nrtri": "\u22EB", "nrtrie": "\u22ED", "nsc": "\u2281", "nsccue": "\u22E1", "nsce": "\u2AB0\u0338", "nscr": "\u{1D4C3}", "Nscr": "\u{1D4A9}", "nshortmid": "\u2224", "nshortparallel": "\u2226", "nsim": "\u2241", "nsime": "\u2244", "nsimeq": "\u2244", "nsmid": "\u2224", "nspar": "\u2226", "nsqsube": "\u22E2", "nsqsupe": "\u22E3", "nsub": "\u2284", "nsube": "\u2288", "nsubE": "\u2AC5\u0338", "nsubset": "\u2282\u20D2", "nsubseteq": "\u2288", "nsubseteqq": "\u2AC5\u0338", "nsucc": "\u2281", "nsucceq": "\u2AB0\u0338", "nsup": "\u2285", "nsupe": "\u2289", "nsupE": "\u2AC6\u0338", "nsupset": "\u2283\u20D2", "nsupseteq": "\u2289", "nsupseteqq": "\u2AC6\u0338", "ntgl": "\u2279", "ntilde": "\xF1", "Ntilde": "\xD1", "ntlg": "\u2278", "ntriangleleft": "\u22EA", "ntrianglelefteq": "\u22EC", "ntriangleright": "\u22EB", "ntrianglerighteq": "\u22ED", "nu": "\u03BD", "Nu": "\u039D", "num": "#", "numero": "\u2116", "numsp": "\u2007", "nvap": "\u224D\u20D2", "nvdash": "\u22AC", "nvDash": "\u22AD", "nVdash": "\u22AE", "nVDash": "\u22AF", "nvge": "\u2265\u20D2", "nvgt": ">\u20D2", "nvHarr": "\u2904", "nvinfin": "\u29DE", "nvlArr": "\u2902", "nvle": "\u2264\u20D2", "nvlt": "<\u20D2", "nvltrie": "\u22B4\u20D2", "nvrArr": "\u2903", "nvrtrie": "\u22B5\u20D2", "nvsim": "\u223C\u20D2", "nwarhk": "\u2923", "nwarr": "\u2196", "nwArr": "\u21D6", "nwarrow": "\u2196", "nwnear": "\u2927", "oacute": "\xF3", "Oacute": "\xD3", "oast": "\u229B", "ocir": "\u229A", "ocirc": "\xF4", "Ocirc": "\xD4", "ocy": "\u043E", "Ocy": "\u041E", "odash": "\u229D", "odblac": "\u0151", "Odblac": "\u0150", "odiv": "\u2A38", "odot": "\u2299", "odsold": "\u29BC", "oelig": "\u0153", "OElig": "\u0152", "ofcir": "\u29BF", "ofr": "\u{1D52C}", "Ofr": "\u{1D512}", "ogon": "\u02DB", "ograve": "\xF2", "Ograve": "\xD2", "ogt": "\u29C1", "ohbar": "\u29B5", "ohm": "\u03A9", "oint": "\u222E", "olarr": "\u21BA", "olcir": "\u29BE", "olcross": "\u29BB", "oline": "\u203E", "olt": "\u29C0", "omacr": "\u014D", "Omacr": "\u014C", "omega": "\u03C9", "Omega": "\u03A9", "omicron": "\u03BF", "Omicron": "\u039F", "omid": "\u29B6", "ominus": "\u2296", "oopf": "\u{1D560}", "Oopf": "\u{1D546}", "opar": "\u29B7", "OpenCurlyDoubleQuote": "\u201C", "OpenCurlyQuote": "\u2018", "operp": "\u29B9", "oplus": "\u2295", "or": "\u2228", "Or": "\u2A54", "orarr": "\u21BB", "ord": "\u2A5D", "order": "\u2134", "orderof": "\u2134", "ordf": "\xAA", "ordm": "\xBA", "origof": "\u22B6", "oror": "\u2A56", "orslope": "\u2A57", "orv": "\u2A5B", "oS": "\u24C8", "oscr": "\u2134", "Oscr": "\u{1D4AA}", "oslash": "\xF8", "Oslash": "\xD8", "osol": "\u2298", "otilde": "\xF5", "Otilde": "\xD5", "otimes": "\u2297", "Otimes": "\u2A37", "otimesas": "\u2A36", "ouml": "\xF6", "Ouml": "\xD6", "ovbar": "\u233D", "OverBar": "\u203E", "OverBrace": "\u23DE", "OverBracket": "\u23B4", "OverParenthesis": "\u23DC", "par": "\u2225", "para": "\xB6", "parallel": "\u2225", "parsim": "\u2AF3", "parsl": "\u2AFD", "part": "\u2202", "PartialD": "\u2202", "pcy": "\u043F", "Pcy": "\u041F", "percnt": "%", "period": ".", "permil": "\u2030", "perp": "\u22A5", "pertenk": "\u2031", "pfr": "\u{1D52D}", "Pfr": "\u{1D513}", "phi": "\u03C6", "Phi": "\u03A6", "phiv": "\u03D5", "phmmat": "\u2133", "phone": "\u260E", "pi": "\u03C0", "Pi": "\u03A0", "pitchfork": "\u22D4", "piv": "\u03D6", "planck": "\u210F", "planckh": "\u210E", "plankv": "\u210F", "plus": "+", "plusacir": "\u2A23", "plusb": "\u229E", "pluscir": "\u2A22", "plusdo": "\u2214", "plusdu": "\u2A25", "pluse": "\u2A72", "PlusMinus": "\xB1", "plusmn": "\xB1", "plussim": "\u2A26", "plustwo": "\u2A27", "pm": "\xB1", "Poincareplane": "\u210C", "pointint": "\u2A15", "popf": "\u{1D561}", "Popf": "\u2119", "pound": "\xA3", "pr": "\u227A", "Pr": "\u2ABB", "prap": "\u2AB7", "prcue": "\u227C", "pre": "\u2AAF", "prE": "\u2AB3", "prec": "\u227A", "precapprox": "\u2AB7", "preccurlyeq": "\u227C", "Precedes": "\u227A", "PrecedesEqual": "\u2AAF", "PrecedesSlantEqual": "\u227C", "PrecedesTilde": "\u227E", "preceq": "\u2AAF", "precnapprox": "\u2AB9", "precneqq": "\u2AB5", "precnsim": "\u22E8", "precsim": "\u227E", "prime": "\u2032", "Prime": "\u2033", "primes": "\u2119", "prnap": "\u2AB9", "prnE": "\u2AB5", "prnsim": "\u22E8", "prod": "\u220F", "Product": "\u220F", "profalar": "\u232E", "profline": "\u2312", "profsurf": "\u2313", "prop": "\u221D", "Proportion": "\u2237", "Proportional": "\u221D", "propto": "\u221D", "prsim": "\u227E", "prurel": "\u22B0", "pscr": "\u{1D4C5}", "Pscr": "\u{1D4AB}", "psi": "\u03C8", "Psi": "\u03A8", "puncsp": "\u2008", "qfr": "\u{1D52E}", "Qfr": "\u{1D514}", "qint": "\u2A0C", "qopf": "\u{1D562}", "Qopf": "\u211A", "qprime": "\u2057", "qscr": "\u{1D4C6}", "Qscr": "\u{1D4AC}", "quaternions": "\u210D", "quatint": "\u2A16", "quest": "?", "questeq": "\u225F", "quot": '"', "QUOT": '"', "rAarr": "\u21DB", "race": "\u223D\u0331", "racute": "\u0155", "Racute": "\u0154", "radic": "\u221A", "raemptyv": "\u29B3", "rang": "\u27E9", "Rang": "\u27EB", "rangd": "\u2992", "range": "\u29A5", "rangle": "\u27E9", "raquo": "\xBB", "rarr": "\u2192", "rArr": "\u21D2", "Rarr": "\u21A0", "rarrap": "\u2975", "rarrb": "\u21E5", "rarrbfs": "\u2920", "rarrc": "\u2933", "rarrfs": "\u291E", "rarrhk": "\u21AA", "rarrlp": "\u21AC", "rarrpl": "\u2945", "rarrsim": "\u2974", "rarrtl": "\u21A3", "Rarrtl": "\u2916", "rarrw": "\u219D", "ratail": "\u291A", "rAtail": "\u291C", "ratio": "\u2236", "rationals": "\u211A", "rbarr": "\u290D", "rBarr": "\u290F", "RBarr": "\u2910", "rbbrk": "\u2773", "rbrace": "}", "rbrack": "]", "rbrke": "\u298C", "rbrksld": "\u298E", "rbrkslu": "\u2990", "rcaron": "\u0159", "Rcaron": "\u0158", "rcedil": "\u0157", "Rcedil": "\u0156", "rceil": "\u2309", "rcub": "}", "rcy": "\u0440", "Rcy": "\u0420", "rdca": "\u2937", "rdldhar": "\u2969", "rdquo": "\u201D", "rdquor": "\u201D", "rdsh": "\u21B3", "Re": "\u211C", "real": "\u211C", "realine": "\u211B", "realpart": "\u211C", "reals": "\u211D", "rect": "\u25AD", "reg": "\xAE", "REG": "\xAE", "ReverseElement": "\u220B", "ReverseEquilibrium": "\u21CB", "ReverseUpEquilibrium": "\u296F", "rfisht": "\u297D", "rfloor": "\u230B", "rfr": "\u{1D52F}", "Rfr": "\u211C", "rHar": "\u2964", "rhard": "\u21C1", "rharu": "\u21C0", "rharul": "\u296C", "rho": "\u03C1", "Rho": "\u03A1", "rhov": "\u03F1", "RightAngleBracket": "\u27E9", "rightarrow": "\u2192", "Rightarrow": "\u21D2", "RightArrow": "\u2192", "RightArrowBar": "\u21E5", "RightArrowLeftArrow": "\u21C4", "rightarrowtail": "\u21A3", "RightCeiling": "\u2309", "RightDoubleBracket": "\u27E7", "RightDownTeeVector": "\u295D", "RightDownVector": "\u21C2", "RightDownVectorBar": "\u2955", "RightFloor": "\u230B", "rightharpoondown": "\u21C1", "rightharpoonup": "\u21C0", "rightleftarrows": "\u21C4", "rightleftharpoons": "\u21CC", "rightrightarrows": "\u21C9", "rightsquigarrow": "\u219D", "RightTee": "\u22A2", "RightTeeArrow": "\u21A6", "RightTeeVector": "\u295B", "rightthreetimes": "\u22CC", "RightTriangle": "\u22B3", "RightTriangleBar": "\u29D0", "RightTriangleEqual": "\u22B5", "RightUpDownVector": "\u294F", "RightUpTeeVector": "\u295C", "RightUpVector": "\u21BE", "RightUpVectorBar": "\u2954", "RightVector": "\u21C0", "RightVectorBar": "\u2953", "ring": "\u02DA", "risingdotseq": "\u2253", "rlarr": "\u21C4", "rlhar": "\u21CC", "rlm": "\u200F", "rmoust": "\u23B1", "rmoustache": "\u23B1", "rnmid": "\u2AEE", "roang": "\u27ED", "roarr": "\u21FE", "robrk": "\u27E7", "ropar": "\u2986", "ropf": "\u{1D563}", "Ropf": "\u211D", "roplus": "\u2A2E", "rotimes": "\u2A35", "RoundImplies": "\u2970", "rpar": ")", "rpargt": "\u2994", "rppolint": "\u2A12", "rrarr": "\u21C9", "Rrightarrow": "\u21DB", "rsaquo": "\u203A", "rscr": "\u{1D4C7}", "Rscr": "\u211B", "rsh": "\u21B1", "Rsh": "\u21B1", "rsqb": "]", "rsquo": "\u2019", "rsquor": "\u2019", "rthree": "\u22CC", "rtimes": "\u22CA", "rtri": "\u25B9", "rtrie": "\u22B5", "rtrif": "\u25B8", "rtriltri": "\u29CE", "RuleDelayed": "\u29F4", "ruluhar": "\u2968", "rx": "\u211E", "sacute": "\u015B", "Sacute": "\u015A", "sbquo": "\u201A", "sc": "\u227B", "Sc": "\u2ABC", "scap": "\u2AB8", "scaron": "\u0161", "Scaron": "\u0160", "sccue": "\u227D", "sce": "\u2AB0", "scE": "\u2AB4", "scedil": "\u015F", "Scedil": "\u015E", "scirc": "\u015D", "Scirc": "\u015C", "scnap": "\u2ABA", "scnE": "\u2AB6", "scnsim": "\u22E9", "scpolint": "\u2A13", "scsim": "\u227F", "scy": "\u0441", "Scy": "\u0421", "sdot": "\u22C5", "sdotb": "\u22A1", "sdote": "\u2A66", "searhk": "\u2925", "searr": "\u2198", "seArr": "\u21D8", "searrow": "\u2198", "sect": "\xA7", "semi": ";", "seswar": "\u2929", "setminus": "\u2216", "setmn": "\u2216", "sext": "\u2736", "sfr": "\u{1D530}", "Sfr": "\u{1D516}", "sfrown": "\u2322", "sharp": "\u266F", "shchcy": "\u0449", "SHCHcy": "\u0429", "shcy": "\u0448", "SHcy": "\u0428", "ShortDownArrow": "\u2193", "ShortLeftArrow": "\u2190", "shortmid": "\u2223", "shortparallel": "\u2225", "ShortRightArrow": "\u2192", "ShortUpArrow": "\u2191", "shy": "\xAD", "sigma": "\u03C3", "Sigma": "\u03A3", "sigmaf": "\u03C2", "sigmav": "\u03C2", "sim": "\u223C", "simdot": "\u2A6A", "sime": "\u2243", "simeq": "\u2243", "simg": "\u2A9E", "simgE": "\u2AA0", "siml": "\u2A9D", "simlE": "\u2A9F", "simne": "\u2246", "simplus": "\u2A24", "simrarr": "\u2972", "slarr": "\u2190", "SmallCircle": "\u2218", "smallsetminus": "\u2216", "smashp": "\u2A33", "smeparsl": "\u29E4", "smid": "\u2223", "smile": "\u2323", "smt": "\u2AAA", "smte": "\u2AAC", "smtes": "\u2AAC\uFE00", "softcy": "\u044C", "SOFTcy": "\u042C", "sol": "/", "solb": "\u29C4", "solbar": "\u233F", "sopf": "\u{1D564}", "Sopf": "\u{1D54A}", "spades": "\u2660", "spadesuit": "\u2660", "spar": "\u2225", "sqcap": "\u2293", "sqcaps": "\u2293\uFE00", "sqcup": "\u2294", "sqcups": "\u2294\uFE00", "Sqrt": "\u221A", "sqsub": "\u228F", "sqsube": "\u2291", "sqsubset": "\u228F", "sqsubseteq": "\u2291", "sqsup": "\u2290", "sqsupe": "\u2292", "sqsupset": "\u2290", "sqsupseteq": "\u2292", "squ": "\u25A1", "square": "\u25A1", "Square": "\u25A1", "SquareIntersection": "\u2293", "SquareSubset": "\u228F", "SquareSubsetEqual": "\u2291", "SquareSuperset": "\u2290", "SquareSupersetEqual": "\u2292", "SquareUnion": "\u2294", "squarf": "\u25AA", "squf": "\u25AA", "srarr": "\u2192", "sscr": "\u{1D4C8}", "Sscr": "\u{1D4AE}", "ssetmn": "\u2216", "ssmile": "\u2323", "sstarf": "\u22C6", "star": "\u2606", "Star": "\u22C6", "starf": "\u2605", "straightepsilon": "\u03F5", "straightphi": "\u03D5", "strns": "\xAF", "sub": "\u2282", "Sub": "\u22D0", "subdot": "\u2ABD", "sube": "\u2286", "subE": "\u2AC5", "subedot": "\u2AC3", "submult": "\u2AC1", "subne": "\u228A", "subnE": "\u2ACB", "subplus": "\u2ABF", "subrarr": "\u2979", "subset": "\u2282", "Subset": "\u22D0", "subseteq": "\u2286", "subseteqq": "\u2AC5", "SubsetEqual": "\u2286", "subsetneq": "\u228A", "subsetneqq": "\u2ACB", "subsim": "\u2AC7", "subsub": "\u2AD5", "subsup": "\u2AD3", "succ": "\u227B", "succapprox": "\u2AB8", "succcurlyeq": "\u227D", "Succeeds": "\u227B", "SucceedsEqual": "\u2AB0", "SucceedsSlantEqual": "\u227D", "SucceedsTilde": "\u227F", "succeq": "\u2AB0", "succnapprox": "\u2ABA", "succneqq": "\u2AB6", "succnsim": "\u22E9", "succsim": "\u227F", "SuchThat": "\u220B", "sum": "\u2211", "Sum": "\u2211", "sung": "\u266A", "sup": "\u2283", "Sup": "\u22D1", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "supdot": "\u2ABE", "supdsub": "\u2AD8", "supe": "\u2287", "supE": "\u2AC6", "supedot": "\u2AC4", "Superset": "\u2283", "SupersetEqual": "\u2287", "suphsol": "\u27C9", "suphsub": "\u2AD7", "suplarr": "\u297B", "supmult": "\u2AC2", "supne": "\u228B", "supnE": "\u2ACC", "supplus": "\u2AC0", "supset": "\u2283", "Supset": "\u22D1", "supseteq": "\u2287", "supseteqq": "\u2AC6", "supsetneq": "\u228B", "supsetneqq": "\u2ACC", "supsim": "\u2AC8", "supsub": "\u2AD4", "supsup": "\u2AD6", "swarhk": "\u2926", "swarr": "\u2199", "swArr": "\u21D9", "swarrow": "\u2199", "swnwar": "\u292A", "szlig": "\xDF", "Tab": "	", "target": "\u2316", "tau": "\u03C4", "Tau": "\u03A4", "tbrk": "\u23B4", "tcaron": "\u0165", "Tcaron": "\u0164", "tcedil": "\u0163", "Tcedil": "\u0162", "tcy": "\u0442", "Tcy": "\u0422", "tdot": "\u20DB", "telrec": "\u2315", "tfr": "\u{1D531}", "Tfr": "\u{1D517}", "there4": "\u2234", "therefore": "\u2234", "Therefore": "\u2234", "theta": "\u03B8", "Theta": "\u0398", "thetasym": "\u03D1", "thetav": "\u03D1", "thickapprox": "\u2248", "thicksim": "\u223C", "ThickSpace": "\u205F\u200A", "thinsp": "\u2009", "ThinSpace": "\u2009", "thkap": "\u2248", "thksim": "\u223C", "thorn": "\xFE", "THORN": "\xDE", "tilde": "\u02DC", "Tilde": "\u223C", "TildeEqual": "\u2243", "TildeFullEqual": "\u2245", "TildeTilde": "\u2248", "times": "\xD7", "timesb": "\u22A0", "timesbar": "\u2A31", "timesd": "\u2A30", "tint": "\u222D", "toea": "\u2928", "top": "\u22A4", "topbot": "\u2336", "topcir": "\u2AF1", "topf": "\u{1D565}", "Topf": "\u{1D54B}", "topfork": "\u2ADA", "tosa": "\u2929", "tprime": "\u2034", "trade": "\u2122", "TRADE": "\u2122", "triangle": "\u25B5", "triangledown": "\u25BF", "triangleleft": "\u25C3", "trianglelefteq": "\u22B4", "triangleq": "\u225C", "triangleright": "\u25B9", "trianglerighteq": "\u22B5", "tridot": "\u25EC", "trie": "\u225C", "triminus": "\u2A3A", "TripleDot": "\u20DB", "triplus": "\u2A39", "trisb": "\u29CD", "tritime": "\u2A3B", "trpezium": "\u23E2", "tscr": "\u{1D4C9}", "Tscr": "\u{1D4AF}", "tscy": "\u0446", "TScy": "\u0426", "tshcy": "\u045B", "TSHcy": "\u040B", "tstrok": "\u0167", "Tstrok": "\u0166", "twixt": "\u226C", "twoheadleftarrow": "\u219E", "twoheadrightarrow": "\u21A0", "uacute": "\xFA", "Uacute": "\xDA", "uarr": "\u2191", "uArr": "\u21D1", "Uarr": "\u219F", "Uarrocir": "\u2949", "ubrcy": "\u045E", "Ubrcy": "\u040E", "ubreve": "\u016D", "Ubreve": "\u016C", "ucirc": "\xFB", "Ucirc": "\xDB", "ucy": "\u0443", "Ucy": "\u0423", "udarr": "\u21C5", "udblac": "\u0171", "Udblac": "\u0170", "udhar": "\u296E", "ufisht": "\u297E", "ufr": "\u{1D532}", "Ufr": "\u{1D518}", "ugrave": "\xF9", "Ugrave": "\xD9", "uHar": "\u2963", "uharl": "\u21BF", "uharr": "\u21BE", "uhblk": "\u2580", "ulcorn": "\u231C", "ulcorner": "\u231C", "ulcrop": "\u230F", "ultri": "\u25F8", "umacr": "\u016B", "Umacr": "\u016A", "uml": "\xA8", "UnderBar": "_", "UnderBrace": "\u23DF", "UnderBracket": "\u23B5", "UnderParenthesis": "\u23DD", "Union": "\u22C3", "UnionPlus": "\u228E", "uogon": "\u0173", "Uogon": "\u0172", "uopf": "\u{1D566}", "Uopf": "\u{1D54C}", "uparrow": "\u2191", "Uparrow": "\u21D1", "UpArrow": "\u2191", "UpArrowBar": "\u2912", "UpArrowDownArrow": "\u21C5", "updownarrow": "\u2195", "Updownarrow": "\u21D5", "UpDownArrow": "\u2195", "UpEquilibrium": "\u296E", "upharpoonleft": "\u21BF", "upharpoonright": "\u21BE", "uplus": "\u228E", "UpperLeftArrow": "\u2196", "UpperRightArrow": "\u2197", "upsi": "\u03C5", "Upsi": "\u03D2", "upsih": "\u03D2", "upsilon": "\u03C5", "Upsilon": "\u03A5", "UpTee": "\u22A5", "UpTeeArrow": "\u21A5", "upuparrows": "\u21C8", "urcorn": "\u231D", "urcorner": "\u231D", "urcrop": "\u230E", "uring": "\u016F", "Uring": "\u016E", "urtri": "\u25F9", "uscr": "\u{1D4CA}", "Uscr": "\u{1D4B0}", "utdot": "\u22F0", "utilde": "\u0169", "Utilde": "\u0168", "utri": "\u25B5", "utrif": "\u25B4", "uuarr": "\u21C8", "uuml": "\xFC", "Uuml": "\xDC", "uwangle": "\u29A7", "vangrt": "\u299C", "varepsilon": "\u03F5", "varkappa": "\u03F0", "varnothing": "\u2205", "varphi": "\u03D5", "varpi": "\u03D6", "varpropto": "\u221D", "varr": "\u2195", "vArr": "\u21D5", "varrho": "\u03F1", "varsigma": "\u03C2", "varsubsetneq": "\u228A\uFE00", "varsubsetneqq": "\u2ACB\uFE00", "varsupsetneq": "\u228B\uFE00", "varsupsetneqq": "\u2ACC\uFE00", "vartheta": "\u03D1", "vartriangleleft": "\u22B2", "vartriangleright": "\u22B3", "vBar": "\u2AE8", "Vbar": "\u2AEB", "vBarv": "\u2AE9", "vcy": "\u0432", "Vcy": "\u0412", "vdash": "\u22A2", "vDash": "\u22A8", "Vdash": "\u22A9", "VDash": "\u22AB", "Vdashl": "\u2AE6", "vee": "\u2228", "Vee": "\u22C1", "veebar": "\u22BB", "veeeq": "\u225A", "vellip": "\u22EE", "verbar": "|", "Verbar": "\u2016", "vert": "|", "Vert": "\u2016", "VerticalBar": "\u2223", "VerticalLine": "|", "VerticalSeparator": "\u2758", "VerticalTilde": "\u2240", "VeryThinSpace": "\u200A", "vfr": "\u{1D533}", "Vfr": "\u{1D519}", "vltri": "\u22B2", "vnsub": "\u2282\u20D2", "vnsup": "\u2283\u20D2", "vopf": "\u{1D567}", "Vopf": "\u{1D54D}", "vprop": "\u221D", "vrtri": "\u22B3", "vscr": "\u{1D4CB}", "Vscr": "\u{1D4B1}", "vsubne": "\u228A\uFE00", "vsubnE": "\u2ACB\uFE00", "vsupne": "\u228B\uFE00", "vsupnE": "\u2ACC\uFE00", "Vvdash": "\u22AA", "vzigzag": "\u299A", "wcirc": "\u0175", "Wcirc": "\u0174", "wedbar": "\u2A5F", "wedge": "\u2227", "Wedge": "\u22C0", "wedgeq": "\u2259", "weierp": "\u2118", "wfr": "\u{1D534}", "Wfr": "\u{1D51A}", "wopf": "\u{1D568}", "Wopf": "\u{1D54E}", "wp": "\u2118", "wr": "\u2240", "wreath": "\u2240", "wscr": "\u{1D4CC}", "Wscr": "\u{1D4B2}", "xcap": "\u22C2", "xcirc": "\u25EF", "xcup": "\u22C3", "xdtri": "\u25BD", "xfr": "\u{1D535}", "Xfr": "\u{1D51B}", "xharr": "\u27F7", "xhArr": "\u27FA", "xi": "\u03BE", "Xi": "\u039E", "xlarr": "\u27F5", "xlArr": "\u27F8", "xmap": "\u27FC", "xnis": "\u22FB", "xodot": "\u2A00", "xopf": "\u{1D569}", "Xopf": "\u{1D54F}", "xoplus": "\u2A01", "xotime": "\u2A02", "xrarr": "\u27F6", "xrArr": "\u27F9", "xscr": "\u{1D4CD}", "Xscr": "\u{1D4B3}", "xsqcup": "\u2A06", "xuplus": "\u2A04", "xutri": "\u25B3", "xvee": "\u22C1", "xwedge": "\u22C0", "yacute": "\xFD", "Yacute": "\xDD", "yacy": "\u044F", "YAcy": "\u042F", "ycirc": "\u0177", "Ycirc": "\u0176", "ycy": "\u044B", "Ycy": "\u042B", "yen": "\xA5", "yfr": "\u{1D536}", "Yfr": "\u{1D51C}", "yicy": "\u0457", "YIcy": "\u0407", "yopf": "\u{1D56A}", "Yopf": "\u{1D550}", "yscr": "\u{1D4CE}", "Yscr": "\u{1D4B4}", "yucy": "\u044E", "YUcy": "\u042E", "yuml": "\xFF", "Yuml": "\u0178", "zacute": "\u017A", "Zacute": "\u0179", "zcaron": "\u017E", "Zcaron": "\u017D", "zcy": "\u0437", "Zcy": "\u0417", "zdot": "\u017C", "Zdot": "\u017B", "zeetrf": "\u2128", "ZeroWidthSpace": "\u200B", "zeta": "\u03B6", "Zeta": "\u0396", "zfr": "\u{1D537}", "Zfr": "\u2128", "zhcy": "\u0436", "ZHcy": "\u0416", "zigrarr": "\u21DD", "zopf": "\u{1D56B}", "Zopf": "\u2124", "zscr": "\u{1D4CF}", "Zscr": "\u{1D4B5}", "zwj": "\u200D", "zwnj": "\u200C" };
    var decodeMapLegacy = { "aacute": "\xE1", "Aacute": "\xC1", "acirc": "\xE2", "Acirc": "\xC2", "acute": "\xB4", "aelig": "\xE6", "AElig": "\xC6", "agrave": "\xE0", "Agrave": "\xC0", "amp": "&", "AMP": "&", "aring": "\xE5", "Aring": "\xC5", "atilde": "\xE3", "Atilde": "\xC3", "auml": "\xE4", "Auml": "\xC4", "brvbar": "\xA6", "ccedil": "\xE7", "Ccedil": "\xC7", "cedil": "\xB8", "cent": "\xA2", "copy": "\xA9", "COPY": "\xA9", "curren": "\xA4", "deg": "\xB0", "divide": "\xF7", "eacute": "\xE9", "Eacute": "\xC9", "ecirc": "\xEA", "Ecirc": "\xCA", "egrave": "\xE8", "Egrave": "\xC8", "eth": "\xF0", "ETH": "\xD0", "euml": "\xEB", "Euml": "\xCB", "frac12": "\xBD", "frac14": "\xBC", "frac34": "\xBE", "gt": ">", "GT": ">", "iacute": "\xED", "Iacute": "\xCD", "icirc": "\xEE", "Icirc": "\xCE", "iexcl": "\xA1", "igrave": "\xEC", "Igrave": "\xCC", "iquest": "\xBF", "iuml": "\xEF", "Iuml": "\xCF", "laquo": "\xAB", "lt": "<", "LT": "<", "macr": "\xAF", "micro": "\xB5", "middot": "\xB7", "nbsp": "\xA0", "not": "\xAC", "ntilde": "\xF1", "Ntilde": "\xD1", "oacute": "\xF3", "Oacute": "\xD3", "ocirc": "\xF4", "Ocirc": "\xD4", "ograve": "\xF2", "Ograve": "\xD2", "ordf": "\xAA", "ordm": "\xBA", "oslash": "\xF8", "Oslash": "\xD8", "otilde": "\xF5", "Otilde": "\xD5", "ouml": "\xF6", "Ouml": "\xD6", "para": "\xB6", "plusmn": "\xB1", "pound": "\xA3", "quot": '"', "QUOT": '"', "raquo": "\xBB", "reg": "\xAE", "REG": "\xAE", "sect": "\xA7", "shy": "\xAD", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "szlig": "\xDF", "thorn": "\xFE", "THORN": "\xDE", "times": "\xD7", "uacute": "\xFA", "Uacute": "\xDA", "ucirc": "\xFB", "Ucirc": "\xDB", "ugrave": "\xF9", "Ugrave": "\xD9", "uml": "\xA8", "uuml": "\xFC", "Uuml": "\xDC", "yacute": "\xFD", "Yacute": "\xDD", "yen": "\xA5", "yuml": "\xFF" };
    var decodeMapNumeric = { "0": "\uFFFD", "128": "\u20AC", "130": "\u201A", "131": "\u0192", "132": "\u201E", "133": "\u2026", "134": "\u2020", "135": "\u2021", "136": "\u02C6", "137": "\u2030", "138": "\u0160", "139": "\u2039", "140": "\u0152", "142": "\u017D", "145": "\u2018", "146": "\u2019", "147": "\u201C", "148": "\u201D", "149": "\u2022", "150": "\u2013", "151": "\u2014", "152": "\u02DC", "153": "\u2122", "154": "\u0161", "155": "\u203A", "156": "\u0153", "158": "\u017E", "159": "\u0178" };
    var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
    var stringFromCharCode = String.fromCharCode;
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var has2 = function(object2, propertyName) {
      return hasOwnProperty.call(object2, propertyName);
    };
    var contains = function(array, value) {
      var index2 = -1;
      var length = array.length;
      while (++index2 < length) {
        if (array[index2] == value) {
          return true;
        }
      }
      return false;
    };
    var merge2 = function(options, defaults) {
      if (!options) {
        return defaults;
      }
      var result = {};
      var key2;
      for (key2 in defaults) {
        result[key2] = has2(options, key2) ? options[key2] : defaults[key2];
      }
      return result;
    };
    var codePointToSymbol = function(codePoint, strict) {
      var output = "";
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        if (strict) {
          parseError("character reference outside the permissible Unicode range");
        }
        return "\uFFFD";
      }
      if (has2(decodeMapNumeric, codePoint)) {
        if (strict) {
          parseError("disallowed character reference");
        }
        return decodeMapNumeric[codePoint];
      }
      if (strict && contains(invalidReferenceCodePoints, codePoint)) {
        parseError("disallowed character reference");
      }
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += stringFromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += stringFromCharCode(codePoint);
      return output;
    };
    var hexEscape = function(codePoint) {
      return "&#x" + codePoint.toString(16).toUpperCase() + ";";
    };
    var decEscape = function(codePoint) {
      return "&#" + codePoint + ";";
    };
    var parseError = function(message) {
      throw Error("Parse error: " + message);
    };
    var encode2 = function(string, options) {
      options = merge2(options, encode2.options);
      var strict = options.strict;
      if (strict && regexInvalidRawCodePoint.test(string)) {
        parseError("forbidden code point");
      }
      var encodeEverything = options.encodeEverything;
      var useNamedReferences = options.useNamedReferences;
      var allowUnsafeSymbols = options.allowUnsafeSymbols;
      var escapeCodePoint = options.decimal ? decEscape : hexEscape;
      var escapeBmpSymbol = function(symbol) {
        return escapeCodePoint(symbol.charCodeAt(0));
      };
      if (encodeEverything) {
        string = string.replace(regexAsciiWhitelist, function(symbol) {
          if (useNamedReferences && has2(encodeMap, symbol)) {
            return "&" + encodeMap[symbol] + ";";
          }
          return escapeBmpSymbol(symbol);
        });
        if (useNamedReferences) {
          string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
        }
        if (useNamedReferences) {
          string = string.replace(regexEncodeNonAscii, function(string2) {
            return "&" + encodeMap[string2] + ";";
          });
        }
      } else if (useNamedReferences) {
        if (!allowUnsafeSymbols) {
          string = string.replace(regexEscape, function(string2) {
            return "&" + encodeMap[string2] + ";";
          });
        }
        string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
        string = string.replace(regexEncodeNonAscii, function(string2) {
          return "&" + encodeMap[string2] + ";";
        });
      } else if (!allowUnsafeSymbols) {
        string = string.replace(regexEscape, escapeBmpSymbol);
      }
      return string.replace(regexAstralSymbols, function($0) {
        var high = $0.charCodeAt(0);
        var low = $0.charCodeAt(1);
        var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
        return escapeCodePoint(codePoint);
      }).replace(regexBmpWhitelist, escapeBmpSymbol);
    };
    encode2.options = {
      "allowUnsafeSymbols": false,
      "encodeEverything": false,
      "strict": false,
      "useNamedReferences": false,
      "decimal": false
    };
    var decode2 = function(html, options) {
      options = merge2(options, decode2.options);
      var strict = options.strict;
      if (strict && regexInvalidEntity.test(html)) {
        parseError("malformed character reference");
      }
      return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
        var codePoint;
        var semicolon;
        var decDigits;
        var hexDigits;
        var reference;
        var next;
        if ($1) {
          reference = $1;
          return decodeMap[reference];
        }
        if ($2) {
          reference = $2;
          next = $3;
          if (next && options.isAttributeValue) {
            if (strict && next == "=") {
              parseError("`&` did not start a character reference");
            }
            return $0;
          } else {
            if (strict) {
              parseError("named character reference was not terminated by a semicolon");
            }
            return decodeMapLegacy[reference] + (next || "");
          }
        }
        if ($4) {
          decDigits = $4;
          semicolon = $5;
          if (strict && !semicolon) {
            parseError("character reference was not terminated by a semicolon");
          }
          codePoint = parseInt(decDigits, 10);
          return codePointToSymbol(codePoint, strict);
        }
        if ($6) {
          hexDigits = $6;
          semicolon = $7;
          if (strict && !semicolon) {
            parseError("character reference was not terminated by a semicolon");
          }
          codePoint = parseInt(hexDigits, 16);
          return codePointToSymbol(codePoint, strict);
        }
        if (strict) {
          parseError("named character reference was not terminated by a semicolon");
        }
        return $0;
      });
    };
    decode2.options = {
      "isAttributeValue": false,
      "strict": false
    };
    var escape2 = function(string) {
      return string.replace(regexEscape, function($0) {
        return escapeMap[$0];
      });
    };
    var he2 = {
      "version": "1.2.0",
      "encode": encode2,
      "decode": decode2,
      "escape": escape2,
      "unescape": decode2
    };
    if (freeExports && !freeExports.nodeType) {
      if (freeModule) {
        freeModule.exports = he2;
      } else {
        for (var key in he2) {
          has2(he2, key) && (freeExports[key] = he2[key]);
        }
      }
    } else {
      root.he = he2;
    }
  })(commonjsGlobal);
})(he$2, he$2.exports);
var lib$3 = {};
var Parser$1 = {};
var Tokenizer$1 = {};
var decode_codepoint = {};
var require$$0$1 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var __importDefault$6 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$6(require$$0$1);
var fromCodePoint = String.fromCodePoint || function(codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function decodeCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decode_json_1.default) {
    codePoint = decode_json_1.default[codePoint];
  }
  return fromCodePoint(codePoint);
}
decode_codepoint.default = decodeCodePoint;
const Aacute$1 = "\xC1";
const aacute$1 = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc$1 = "\xC2";
const acirc$1 = "\xE2";
const acute$1 = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig$1 = "\xC6";
const aelig$1 = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave$1 = "\xC0";
const agrave$1 = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos$1 = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring$1 = "\xC5";
const aring$1 = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde$1 = "\xC3";
const atilde$1 = "\xE3";
const Auml$1 = "\xC4";
const auml$1 = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar$1 = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret$1 = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil$1 = "\xC7";
const ccedil$1 = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil$1 = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent$1 = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma$1 = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy$1 = "\xA9";
const COPY$1 = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren$1 = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg$1 = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide$1 = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar$1 = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute$1 = "\xC9";
const eacute$1 = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc$1 = "\xCA";
const ecirc$1 = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave$1 = "\xC8";
const egrave$1 = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH$1 = "\xD0";
const eth$1 = "\xF0";
const Euml$1 = "\xCB";
const euml$1 = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12$1 = "\xBD";
const frac13 = "\u2153";
const frac14$1 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34$1 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt$3 = ">";
const GT$1 = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute$1 = "\xCD";
const iacute$1 = "\xED";
const ic = "\u2063";
const Icirc$1 = "\xCE";
const icirc$1 = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl$1 = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave$1 = "\xCC";
const igrave$1 = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest$1 = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml$1 = "\xCF";
const iuml$1 = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo$1 = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr$1 = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro$1 = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot$1 = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp$1 = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not$1 = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde$1 = "\xD1";
const ntilde$1 = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute$1 = "\xD3";
const oacute$1 = "\xF3";
const oast = "\u229B";
const Ocirc$1 = "\xD4";
const ocirc$1 = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve$1 = "\xD2";
const ograve$1 = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf$1 = "\xAA";
const ordm$1 = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash$1 = "\xD8";
const oslash$1 = "\xF8";
const osol = "\u2298";
const Otilde$1 = "\xD5";
const otilde$1 = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml$1 = "\xD6";
const ouml$1 = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para$1 = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus$1 = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn$1 = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound$1 = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range = "\u29A5";
const rangle = "\u27E9";
const raquo$1 = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg$1 = "\xAE";
const REG$1 = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect$1 = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy$1 = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1$1 = "\xB9";
const sup2$1 = "\xB2";
const sup3$1 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig$1 = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN$1 = "\xDE";
const thorn$1 = "\xFE";
const tilde$1 = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times$1 = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute$1 = "\xDA";
const uacute$1 = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc$1 = "\xDB";
const ucirc$1 = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave$1 = "\xD9";
const ugrave$1 = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml$1 = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml$1 = "\xDC";
const uuml$1 = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute$1 = "\xDD";
const yacute$1 = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen$1 = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml$1 = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
var require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret: caret$1,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma: comma$1,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar: dollar$1,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$3,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus: plus$1,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde: tilde$1,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "\xC1";
const aacute = "\xE1";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const AElig = "\xC6";
const aelig = "\xE6";
const Agrave = "\xC0";
const agrave = "\xE0";
const amp$1 = "&";
const AMP = "&";
const Aring = "\xC5";
const aring = "\xE5";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const brvbar = "\xA6";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const COPY = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const Eacute = "\xC9";
const eacute = "\xE9";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const Egrave = "\xC8";
const egrave = "\xE8";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt$2 = ">";
const GT = ">";
const Iacute = "\xCD";
const iacute = "\xED";
const Icirc = "\xCE";
const icirc = "\xEE";
const iexcl = "\xA1";
const Igrave = "\xCC";
const igrave = "\xEC";
const iquest = "\xBF";
const Iuml = "\xCF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt$1 = "<";
const LT = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const Oacute = "\xD3";
const oacute = "\xF3";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const Ograve = "\xD2";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const Oslash = "\xD8";
const oslash = "\xF8";
const Otilde = "\xD5";
const otilde = "\xF5";
const Ouml = "\xD6";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot$1 = '"';
const QUOT = '"';
const raquo = "\xBB";
const reg = "\xAE";
const REG = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const THORN = "\xDE";
const thorn = "\xFE";
const times = "\xD7";
const Uacute = "\xDA";
const uacute = "\xFA";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uml = "\xA8";
const Uuml = "\xDC";
const uuml = "\xFC";
const Yacute = "\xDD";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
var require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$2,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt$1 = ">";
const lt = "<";
const quot = '"';
var require$$0 = {
  amp,
  apos,
  gt: gt$1,
  lt,
  quot
};
var __importDefault$5 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Tokenizer$1, "__esModule", { value: true });
var decode_codepoint_1$1 = __importDefault$5(decode_codepoint);
var entities_json_1$2 = __importDefault$5(require$$1$1);
var legacy_json_1$1 = __importDefault$5(require$$1);
var xml_json_1$2 = __importDefault$5(require$$0);
function whitespace(c) {
  return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
  return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
}
function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();
  if (upper === lower) {
    return function(t, c) {
      if (c === lower) {
        t._state = SUCCESS;
      } else {
        t._state = FAILURE;
        t._index--;
      }
    };
  }
  return function(t, c) {
    if (c === lower || c === upper) {
      t._state = SUCCESS;
    } else {
      t._state = FAILURE;
      t._index--;
    }
  };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
  var lower = upper.toLowerCase();
  return function(t, c) {
    if (c === lower || c === upper) {
      t._state = NEXT_STATE;
    } else {
      t._state = 3;
      t._index--;
    }
  };
}
var stateBeforeCdata1 = ifElseState("C", 24, 16);
var stateBeforeCdata2 = ifElseState("D", 25, 16);
var stateBeforeCdata3 = ifElseState("A", 26, 16);
var stateBeforeCdata4 = ifElseState("T", 27, 16);
var stateBeforeCdata5 = ifElseState("A", 28, 16);
var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
var stateAfterScript1 = ifElseState("R", 40, 1);
var stateAfterScript2 = ifElseState("I", 41, 1);
var stateAfterScript3 = ifElseState("P", 42, 1);
var stateAfterScript4 = ifElseState("T", 43, 1);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
var stateAfterStyle1 = ifElseState("Y", 49, 1);
var stateAfterStyle2 = ifElseState("L", 50, 1);
var stateAfterStyle3 = ifElseState("E", 51, 1);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
var stateAfterTitle1 = ifElseState("T", 59, 1);
var stateAfterTitle2 = ifElseState("L", 60, 1);
var stateAfterTitle3 = ifElseState("E", 61, 1);
var stateBeforeEntity = ifElseState("#", 63, 64);
var stateBeforeNumericEntity = ifElseState("X", 66, 65);
var Tokenizer = function() {
  function Tokenizer2(options, cbs) {
    var _a;
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
    this.cbs = cbs;
    this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
    this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
  }
  Tokenizer2.prototype.reset = function() {
    this._state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1;
    this.special = 1;
    this.running = true;
    this.ended = false;
  };
  Tokenizer2.prototype.write = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".write() after done!"));
    this.buffer += chunk;
    this.parse();
  };
  Tokenizer2.prototype.end = function(chunk) {
    if (this.ended)
      this.cbs.onerror(Error(".end() after done!"));
    if (chunk)
      this.write(chunk);
    this.ended = true;
    if (this.running)
      this.finish();
  };
  Tokenizer2.prototype.pause = function() {
    this.running = false;
  };
  Tokenizer2.prototype.resume = function() {
    this.running = true;
    if (this._index < this.buffer.length) {
      this.parse();
    }
    if (this.ended) {
      this.finish();
    }
  };
  Tokenizer2.prototype.getAbsoluteIndex = function() {
    return this.bufferOffset + this._index;
  };
  Tokenizer2.prototype.stateText = function(c) {
    if (c === "<") {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this._state = 2;
      this.sectionStart = this._index;
    } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }
      this.baseState = 1;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.isTagStartChar = function(c) {
    return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
  };
  Tokenizer2.prototype.stateBeforeTagName = function(c) {
    if (c === "/") {
      this._state = 5;
    } else if (c === "<") {
      this.cbs.ontext(this.getSection());
      this.sectionStart = this._index;
    } else if (c === ">" || this.special !== 1 || whitespace(c)) {
      this._state = 1;
    } else if (c === "!") {
      this._state = 15;
      this.sectionStart = this._index + 1;
    } else if (c === "?") {
      this._state = 17;
      this.sectionStart = this._index + 1;
    } else if (!this.isTagStartChar(c)) {
      this._state = 1;
    } else {
      this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInTagName = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.emitToken("onopentagname");
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
    if (whitespace(c))
      ;
    else if (c === ">") {
      this._state = 1;
    } else if (this.special !== 1) {
      if (this.special !== 4 && (c === "s" || c === "S")) {
        this._state = 33;
      } else if (this.special === 4 && (c === "t" || c === "T")) {
        this._state = 53;
      } else {
        this._state = 1;
        this._index--;
      }
    } else if (!this.isTagStartChar(c)) {
      this._state = 20;
      this.sectionStart = this._index;
    } else {
      this._state = 6;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInClosingTagName = function(c) {
    if (c === ">" || whitespace(c)) {
      this.emitToken("onclosetag");
      this._state = 7;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
    if (c === ">") {
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
    if (c === ">") {
      this.cbs.onopentagend();
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c === "/") {
      this._state = 4;
    } else if (!whitespace(c)) {
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
    if (c === ">") {
      this.cbs.onselfclosingtag();
      this._state = 1;
      this.sectionStart = this._index + 1;
      this.special = 1;
    } else if (!whitespace(c)) {
      this._state = 8;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInAttributeName = function(c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
      this.cbs.onattribname(this.getSection());
      this.sectionStart = -1;
      this._state = 10;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateAfterAttributeName = function(c) {
    if (c === "=") {
      this._state = 11;
    } else if (c === "/" || c === ">") {
      this.cbs.onattribend(void 0);
      this._state = 8;
      this._index--;
    } else if (!whitespace(c)) {
      this.cbs.onattribend(void 0);
      this._state = 9;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
    if (c === '"') {
      this._state = 12;
      this.sectionStart = this._index + 1;
    } else if (c === "'") {
      this._state = 13;
      this.sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
      this._state = 14;
      this.sectionStart = this._index;
      this._index--;
    }
  };
  Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
    if (c === quote) {
      this.emitToken("onattribdata");
      this.cbs.onattribend(quote);
      this._state = 8;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
    this.handleInAttributeValue(c, '"');
  };
  Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
    this.handleInAttributeValue(c, "'");
  };
  Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
    if (whitespace(c) || c === ">") {
      this.emitToken("onattribdata");
      this.cbs.onattribend(null);
      this._state = 8;
      this._index--;
    } else if (this.decodeEntities && c === "&") {
      this.emitToken("onattribdata");
      this.baseState = this._state;
      this._state = 62;
      this.sectionStart = this._index;
    }
  };
  Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
    this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
  };
  Tokenizer2.prototype.stateInDeclaration = function(c) {
    if (c === ">") {
      this.cbs.ondeclaration(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
    if (c === ">") {
      this.cbs.onprocessinginstruction(this.getSection());
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateBeforeComment = function(c) {
    if (c === "-") {
      this._state = 19;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
    }
  };
  Tokenizer2.prototype.stateInComment = function(c) {
    if (c === "-")
      this._state = 21;
  };
  Tokenizer2.prototype.stateInSpecialComment = function(c) {
    if (c === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
      this._state = 1;
      this.sectionStart = this._index + 1;
    }
  };
  Tokenizer2.prototype.stateAfterComment1 = function(c) {
    if (c === "-") {
      this._state = 22;
    } else {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateAfterComment2 = function(c) {
    if (c === ">") {
      this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c !== "-") {
      this._state = 19;
    }
  };
  Tokenizer2.prototype.stateBeforeCdata6 = function(c) {
    if (c === "[") {
      this._state = 29;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInCdata = function(c) {
    if (c === "]")
      this._state = 30;
  };
  Tokenizer2.prototype.stateAfterCdata1 = function(c) {
    if (c === "]")
      this._state = 31;
    else
      this._state = 29;
  };
  Tokenizer2.prototype.stateAfterCdata2 = function(c) {
    if (c === ">") {
      this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
      this._state = 1;
      this.sectionStart = this._index + 1;
    } else if (c !== "]") {
      this._state = 29;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
    if (c === "c" || c === "C") {
      this._state = 34;
    } else if (c === "t" || c === "T") {
      this._state = 44;
    } else {
      this._state = 3;
      this._index--;
    }
  };
  Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c) {
    if (this.special === 2 && (c === "c" || c === "C")) {
      this._state = 39;
    } else if (this.special === 3 && (c === "t" || c === "T")) {
      this._state = 48;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.stateBeforeSpecialLast = function(c, special) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this.special = special;
    }
    this._state = 3;
    this._index--;
  };
  Tokenizer2.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
    if (c === ">" || whitespace(c)) {
      this.special = 1;
      this._state = 6;
      this.sectionStart = this._index - sectionStartOffset;
      this._index--;
    } else
      this._state = 1;
  };
  Tokenizer2.prototype.parseFixedEntity = function(map2) {
    if (map2 === void 0) {
      map2 = this.xmlMode ? xml_json_1$2.default : entities_json_1$2.default;
    }
    if (this.sectionStart + 1 < this._index) {
      var entity = this.buffer.substring(this.sectionStart + 1, this._index);
      if (Object.prototype.hasOwnProperty.call(map2, entity)) {
        this.emitPartial(map2[entity]);
        this.sectionStart = this._index + 1;
      }
    }
  };
  Tokenizer2.prototype.parseLegacyEntity = function() {
    var start = this.sectionStart + 1;
    var limit = Math.min(this._index - start, 6);
    while (limit >= 2) {
      var entity = this.buffer.substr(start, limit);
      if (Object.prototype.hasOwnProperty.call(legacy_json_1$1.default, entity)) {
        this.emitPartial(legacy_json_1$1.default[entity]);
        this.sectionStart += limit + 1;
        return;
      }
      limit--;
    }
  };
  Tokenizer2.prototype.stateInNamedEntity = function(c) {
    if (c === ";") {
      this.parseFixedEntity();
      if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
    } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
      if (this.xmlMode || this.sectionStart + 1 === this._index)
        ;
      else if (this.baseState !== 1) {
        if (c !== "=") {
          this.parseFixedEntity(legacy_json_1$1.default);
        }
      } else {
        this.parseLegacyEntity();
      }
      this._state = this.baseState;
      this._index--;
    }
  };
  Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
    var sectionStart = this.sectionStart + offset;
    if (sectionStart !== this._index) {
      var entity = this.buffer.substring(sectionStart, this._index);
      var parsed = parseInt(entity, base);
      this.emitPartial(decode_codepoint_1$1.default(parsed));
      this.sectionStart = strict ? this._index + 1 : this._index;
    }
    this._state = this.baseState;
  };
  Tokenizer2.prototype.stateInNumericEntity = function(c) {
    if (c === ";") {
      this.decodeNumericEntity(2, 10, true);
    } else if (c < "0" || c > "9") {
      if (!this.xmlMode) {
        this.decodeNumericEntity(2, 10, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.stateInHexEntity = function(c) {
    if (c === ";") {
      this.decodeNumericEntity(3, 16, true);
    } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
      if (!this.xmlMode) {
        this.decodeNumericEntity(3, 16, false);
      } else {
        this._state = this.baseState;
      }
      this._index--;
    }
  };
  Tokenizer2.prototype.cleanup = function() {
    if (this.sectionStart < 0) {
      this.buffer = "";
      this.bufferOffset += this._index;
      this._index = 0;
    } else if (this.running) {
      if (this._state === 1) {
        if (this.sectionStart !== this._index) {
          this.cbs.ontext(this.buffer.substr(this.sectionStart));
        }
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else if (this.sectionStart === this._index) {
        this.buffer = "";
        this.bufferOffset += this._index;
        this._index = 0;
      } else {
        this.buffer = this.buffer.substr(this.sectionStart);
        this._index -= this.sectionStart;
        this.bufferOffset += this.sectionStart;
      }
      this.sectionStart = 0;
    }
  };
  Tokenizer2.prototype.parse = function() {
    while (this._index < this.buffer.length && this.running) {
      var c = this.buffer.charAt(this._index);
      if (this._state === 1) {
        this.stateText(c);
      } else if (this._state === 12) {
        this.stateInAttributeValueDoubleQuotes(c);
      } else if (this._state === 9) {
        this.stateInAttributeName(c);
      } else if (this._state === 19) {
        this.stateInComment(c);
      } else if (this._state === 20) {
        this.stateInSpecialComment(c);
      } else if (this._state === 8) {
        this.stateBeforeAttributeName(c);
      } else if (this._state === 3) {
        this.stateInTagName(c);
      } else if (this._state === 6) {
        this.stateInClosingTagName(c);
      } else if (this._state === 2) {
        this.stateBeforeTagName(c);
      } else if (this._state === 10) {
        this.stateAfterAttributeName(c);
      } else if (this._state === 13) {
        this.stateInAttributeValueSingleQuotes(c);
      } else if (this._state === 11) {
        this.stateBeforeAttributeValue(c);
      } else if (this._state === 5) {
        this.stateBeforeClosingTagName(c);
      } else if (this._state === 7) {
        this.stateAfterClosingTagName(c);
      } else if (this._state === 32) {
        this.stateBeforeSpecialS(c);
      } else if (this._state === 21) {
        this.stateAfterComment1(c);
      } else if (this._state === 14) {
        this.stateInAttributeValueNoQuotes(c);
      } else if (this._state === 4) {
        this.stateInSelfClosingTag(c);
      } else if (this._state === 16) {
        this.stateInDeclaration(c);
      } else if (this._state === 15) {
        this.stateBeforeDeclaration(c);
      } else if (this._state === 22) {
        this.stateAfterComment2(c);
      } else if (this._state === 18) {
        this.stateBeforeComment(c);
      } else if (this._state === 33) {
        this.stateBeforeSpecialSEnd(c);
      } else if (this._state === 53) {
        stateAfterSpecialTEnd(this, c);
      } else if (this._state === 39) {
        stateAfterScript1(this, c);
      } else if (this._state === 40) {
        stateAfterScript2(this, c);
      } else if (this._state === 41) {
        stateAfterScript3(this, c);
      } else if (this._state === 34) {
        stateBeforeScript1(this, c);
      } else if (this._state === 35) {
        stateBeforeScript2(this, c);
      } else if (this._state === 36) {
        stateBeforeScript3(this, c);
      } else if (this._state === 37) {
        stateBeforeScript4(this, c);
      } else if (this._state === 38) {
        this.stateBeforeSpecialLast(c, 2);
      } else if (this._state === 42) {
        stateAfterScript4(this, c);
      } else if (this._state === 43) {
        this.stateAfterSpecialLast(c, 6);
      } else if (this._state === 44) {
        stateBeforeStyle1(this, c);
      } else if (this._state === 29) {
        this.stateInCdata(c);
      } else if (this._state === 45) {
        stateBeforeStyle2(this, c);
      } else if (this._state === 46) {
        stateBeforeStyle3(this, c);
      } else if (this._state === 47) {
        this.stateBeforeSpecialLast(c, 3);
      } else if (this._state === 48) {
        stateAfterStyle1(this, c);
      } else if (this._state === 49) {
        stateAfterStyle2(this, c);
      } else if (this._state === 50) {
        stateAfterStyle3(this, c);
      } else if (this._state === 51) {
        this.stateAfterSpecialLast(c, 5);
      } else if (this._state === 52) {
        stateBeforeSpecialT(this, c);
      } else if (this._state === 54) {
        stateBeforeTitle1(this, c);
      } else if (this._state === 55) {
        stateBeforeTitle2(this, c);
      } else if (this._state === 56) {
        stateBeforeTitle3(this, c);
      } else if (this._state === 57) {
        this.stateBeforeSpecialLast(c, 4);
      } else if (this._state === 58) {
        stateAfterTitle1(this, c);
      } else if (this._state === 59) {
        stateAfterTitle2(this, c);
      } else if (this._state === 60) {
        stateAfterTitle3(this, c);
      } else if (this._state === 61) {
        this.stateAfterSpecialLast(c, 5);
      } else if (this._state === 17) {
        this.stateInProcessingInstruction(c);
      } else if (this._state === 64) {
        this.stateInNamedEntity(c);
      } else if (this._state === 23) {
        stateBeforeCdata1(this, c);
      } else if (this._state === 62) {
        stateBeforeEntity(this, c);
      } else if (this._state === 24) {
        stateBeforeCdata2(this, c);
      } else if (this._state === 25) {
        stateBeforeCdata3(this, c);
      } else if (this._state === 30) {
        this.stateAfterCdata1(c);
      } else if (this._state === 31) {
        this.stateAfterCdata2(c);
      } else if (this._state === 26) {
        stateBeforeCdata4(this, c);
      } else if (this._state === 27) {
        stateBeforeCdata5(this, c);
      } else if (this._state === 28) {
        this.stateBeforeCdata6(c);
      } else if (this._state === 66) {
        this.stateInHexEntity(c);
      } else if (this._state === 65) {
        this.stateInNumericEntity(c);
      } else if (this._state === 63) {
        stateBeforeNumericEntity(this, c);
      } else {
        this.cbs.onerror(Error("unknown _state"), this._state);
      }
      this._index++;
    }
    this.cleanup();
  };
  Tokenizer2.prototype.finish = function() {
    if (this.sectionStart < this._index) {
      this.handleTrailingData();
    }
    this.cbs.onend();
  };
  Tokenizer2.prototype.handleTrailingData = function() {
    var data = this.buffer.substr(this.sectionStart);
    if (this._state === 29 || this._state === 30 || this._state === 31) {
      this.cbs.oncdata(data);
    } else if (this._state === 19 || this._state === 21 || this._state === 22) {
      this.cbs.oncomment(data);
    } else if (this._state === 64 && !this.xmlMode) {
      this.parseLegacyEntity();
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 65 && !this.xmlMode) {
      this.decodeNumericEntity(2, 10, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state === 66 && !this.xmlMode) {
      this.decodeNumericEntity(3, 16, false);
      if (this.sectionStart < this._index) {
        this._state = this.baseState;
        this.handleTrailingData();
      }
    } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
      this.cbs.ontext(data);
    }
  };
  Tokenizer2.prototype.getSection = function() {
    return this.buffer.substring(this.sectionStart, this._index);
  };
  Tokenizer2.prototype.emitToken = function(name) {
    this.cbs[name](this.getSection());
    this.sectionStart = -1;
  };
  Tokenizer2.prototype.emitPartial = function(value) {
    if (this.baseState !== 1) {
      this.cbs.onattribdata(value);
    } else {
      this.cbs.ontext(value);
    }
  };
  return Tokenizer2;
}();
Tokenizer$1.default = Tokenizer;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Parser$1, "__esModule", { value: true });
Parser$1.Parser = void 0;
var Tokenizer_1 = __importDefault$4(Tokenizer$1);
var formTags = new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = new Set(["p"]);
var openImpliesClose = {
  tr: new Set(["tr", "th", "td"]),
  th: new Set(["th"]),
  td: new Set(["thead", "th", "td"]),
  body: new Set(["head", "link", "script"]),
  li: new Set(["li"]),
  p: pTag,
  h1: pTag,
  h2: pTag,
  h3: pTag,
  h4: pTag,
  h5: pTag,
  h6: pTag,
  select: formTags,
  input: formTags,
  output: formTags,
  button: formTags,
  datalist: formTags,
  textarea: formTags,
  option: new Set(["option"]),
  optgroup: new Set(["optgroup", "option"]),
  dd: new Set(["dt", "dd"]),
  dt: new Set(["dt", "dd"]),
  address: pTag,
  article: pTag,
  aside: pTag,
  blockquote: pTag,
  details: pTag,
  div: pTag,
  dl: pTag,
  fieldset: pTag,
  figcaption: pTag,
  figure: pTag,
  footer: pTag,
  form: pTag,
  header: pTag,
  hr: pTag,
  main: pTag,
  nav: pTag,
  ol: pTag,
  pre: pTag,
  section: pTag,
  table: pTag,
  ul: pTag,
  rt: new Set(["rt", "rp"]),
  rp: new Set(["rt", "rp"]),
  tbody: new Set(["thead", "tbody"]),
  tfoot: new Set(["thead", "tbody"])
};
var voidElements = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var reNameEnd = /\s|\//;
var Parser = function() {
  function Parser2(cbs, options) {
    if (options === void 0) {
      options = {};
    }
    var _a, _b, _c, _d, _e;
    this.startIndex = 0;
    this.endIndex = null;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.options = options;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  }
  Parser2.prototype.updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
      if (this.tokenizer.sectionStart <= initialOffset) {
        this.startIndex = 0;
      } else {
        this.startIndex = this.tokenizer.sectionStart - initialOffset;
      }
    } else {
      this.startIndex = this.endIndex + 1;
    }
    this.endIndex = this.tokenizer.getAbsoluteIndex();
  };
  Parser2.prototype.ontext = function(data) {
    var _a, _b;
    this.updatePosition(1);
    this.endIndex--;
    (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  };
  Parser2.prototype.onopentagname = function(name) {
    var _a, _b;
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    this.tagname = name;
    if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
      var el2 = void 0;
      while (this.stack.length > 0 && openImpliesClose[name].has(el2 = this.stack[this.stack.length - 1])) {
        this.onclosetag(el2);
      }
    }
    if (this.options.xmlMode || !voidElements.has(name)) {
      this.stack.push(name);
      if (foreignContextElements.has(name)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name)) {
        this.foreignContext.push(false);
      }
    }
    (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
    if (this.cbs.onopentag)
      this.attribs = {};
  };
  Parser2.prototype.onopentagend = function() {
    var _a, _b;
    this.updatePosition(1);
    if (this.attribs) {
      (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
      this.attribs = null;
    }
    if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
      this.cbs.onclosetag(this.tagname);
    }
    this.tagname = "";
  };
  Parser2.prototype.onclosetag = function(name) {
    this.updatePosition(1);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
      this.foreignContext.pop();
    }
    if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
      var pos = this.stack.lastIndexOf(name);
      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          pos = this.stack.length - pos;
          while (pos--) {
            this.cbs.onclosetag(this.stack.pop());
          }
        } else
          this.stack.length = pos;
      } else if (name === "p" && !this.options.xmlMode) {
        this.onopentagname(name);
        this.closeCurrentTag();
      }
    } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
      this.onopentagname(name);
      this.closeCurrentTag();
    }
  };
  Parser2.prototype.onselfclosingtag = function() {
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag();
    } else {
      this.onopentagend();
    }
  };
  Parser2.prototype.closeCurrentTag = function() {
    var _a, _b;
    var name = this.tagname;
    this.onopentagend();
    if (this.stack[this.stack.length - 1] === name) {
      (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
      this.stack.pop();
    }
  };
  Parser2.prototype.onattribname = function(name) {
    if (this.lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }
    this.attribname = name;
  };
  Parser2.prototype.onattribdata = function(value) {
    this.attribvalue += value;
  };
  Parser2.prototype.onattribend = function(quote) {
    var _a, _b;
    (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribname = "";
    this.attribvalue = "";
  };
  Parser2.prototype.getInstructionName = function(value) {
    var idx = value.search(reNameEnd);
    var name = idx < 0 ? value : value.substr(0, idx);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    return name;
  };
  Parser2.prototype.ondeclaration = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_1 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
    }
  };
  Parser2.prototype.onprocessinginstruction = function(value) {
    if (this.cbs.onprocessinginstruction) {
      var name_2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
    }
  };
  Parser2.prototype.oncomment = function(value) {
    var _a, _b, _c, _d;
    this.updatePosition(4);
    (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
  };
  Parser2.prototype.oncdata = function(value) {
    var _a, _b, _c, _d, _e, _f;
    this.updatePosition(1);
    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      this.oncomment("[CDATA[" + value + "]]");
    }
  };
  Parser2.prototype.onerror = function(err) {
    var _a, _b;
    (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  Parser2.prototype.onend = function() {
    var _a, _b;
    if (this.cbs.onclosetag) {
      for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
        ;
    }
    (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  Parser2.prototype.reset = function() {
    var _a, _b, _c, _d;
    (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack = [];
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
  };
  Parser2.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
  };
  Parser2.prototype.write = function(chunk) {
    this.tokenizer.write(chunk);
  };
  Parser2.prototype.end = function(chunk) {
    this.tokenizer.end(chunk);
  };
  Parser2.prototype.pause = function() {
    this.tokenizer.pause();
  };
  Parser2.prototype.resume = function() {
    this.tokenizer.resume();
  };
  Parser2.prototype.parseChunk = function(chunk) {
    this.write(chunk);
  };
  Parser2.prototype.done = function(chunk) {
    this.end(chunk);
  };
  return Parser2;
}();
Parser$1.Parser = Parser;
var FeedHandler$1 = {};
var lib$2 = {};
var stringify = {};
var lib$1 = {};
var lib = {};
var decode = {};
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$3(require$$1$1);
var legacy_json_1 = __importDefault$3(require$$1);
var xml_json_1$1 = __importDefault$3(require$$0);
var decode_codepoint_1 = __importDefault$3(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map2) {
  var replace = getReplacer(map2);
  return function(str) {
    return String(str).replace(strictEntityRe, replace);
  };
}
var sorter = function(a, b2) {
  return a < b2 ? 1 : -1;
};
decode.decodeHTML = function() {
  var legacy2 = Object.keys(legacy_json_1.default).sort(sorter);
  var keys = Object.keys(entities_json_1$1.default).sort(sorter);
  for (var i = 0, j2 = 0; i < keys.length; i++) {
    if (legacy2[j2] === keys[i]) {
      keys[i] += ";?";
      j2++;
    } else {
      keys[i] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace = getReplacer(entities_json_1$1.default);
  function replacer(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
}();
function getReplacer(map2) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);
      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1.default(parseInt(str.substr(3), 16));
      }
      return decode_codepoint_1.default(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)] || str;
  };
}
var encode = {};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = __importDefault$2(require$$0);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault$2(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];
  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k2 = _a[_i];
    if (k2.length === 1) {
      single.push("\\" + k2);
    } else {
      multiple.push(k2);
    }
  }
  single.sort();
  for (var start = 0; start < single.length - 1; start++) {
    var end = start;
    while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
      end += 1;
    }
    var count = 1 + end - start;
    if (count < 3)
      continue;
    single.splice(start, count, single[start] + "-" + single[end]);
  }
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = String.prototype.codePointAt != null ? function(str) {
  return str.codePointAt(0);
} : function(c) {
  return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
  return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  return function(data) {
    return data.replace(re, function(name) {
      return inverse[name];
    }).replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
function escape(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape;
function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
  return function(data) {
    return data.replace(reEscapeChars, function(c) {
      return obj[c] || singleCharReplacer(c);
    });
  };
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  function decode$1(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }
  exports.decode = decode$1;
  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }
  exports.decodeStrict = decodeStrict;
  function encode$1(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }
  exports.encode = encode$1;
  var encode_2 = encode;
  Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
    return encode_2.encodeXML;
  } });
  Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
    return encode_2.encodeNonAsciiHTML;
  } });
  Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
    return encode_2.escape;
  } });
  Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
    return encode_2.escapeUTF8;
  } });
  Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  var decode_2 = decode;
  Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
  Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
})(lib);
var foreignNames = {};
Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = new Map([
  ["altglyph", "altGlyph"],
  ["altglyphdef", "altGlyphDef"],
  ["altglyphitem", "altGlyphItem"],
  ["animatecolor", "animateColor"],
  ["animatemotion", "animateMotion"],
  ["animatetransform", "animateTransform"],
  ["clippath", "clipPath"],
  ["feblend", "feBlend"],
  ["fecolormatrix", "feColorMatrix"],
  ["fecomponenttransfer", "feComponentTransfer"],
  ["fecomposite", "feComposite"],
  ["feconvolvematrix", "feConvolveMatrix"],
  ["fediffuselighting", "feDiffuseLighting"],
  ["fedisplacementmap", "feDisplacementMap"],
  ["fedistantlight", "feDistantLight"],
  ["fedropshadow", "feDropShadow"],
  ["feflood", "feFlood"],
  ["fefunca", "feFuncA"],
  ["fefuncb", "feFuncB"],
  ["fefuncg", "feFuncG"],
  ["fefuncr", "feFuncR"],
  ["fegaussianblur", "feGaussianBlur"],
  ["feimage", "feImage"],
  ["femerge", "feMerge"],
  ["femergenode", "feMergeNode"],
  ["femorphology", "feMorphology"],
  ["feoffset", "feOffset"],
  ["fepointlight", "fePointLight"],
  ["fespecularlighting", "feSpecularLighting"],
  ["fespotlight", "feSpotLight"],
  ["fetile", "feTile"],
  ["feturbulence", "feTurbulence"],
  ["foreignobject", "foreignObject"],
  ["glyphref", "glyphRef"],
  ["lineargradient", "linearGradient"],
  ["radialgradient", "radialGradient"],
  ["textpath", "textPath"]
]);
foreignNames.attributeNames = new Map([
  ["definitionurl", "definitionURL"],
  ["attributename", "attributeName"],
  ["attributetype", "attributeType"],
  ["basefrequency", "baseFrequency"],
  ["baseprofile", "baseProfile"],
  ["calcmode", "calcMode"],
  ["clippathunits", "clipPathUnits"],
  ["diffuseconstant", "diffuseConstant"],
  ["edgemode", "edgeMode"],
  ["filterunits", "filterUnits"],
  ["glyphref", "glyphRef"],
  ["gradienttransform", "gradientTransform"],
  ["gradientunits", "gradientUnits"],
  ["kernelmatrix", "kernelMatrix"],
  ["kernelunitlength", "kernelUnitLength"],
  ["keypoints", "keyPoints"],
  ["keysplines", "keySplines"],
  ["keytimes", "keyTimes"],
  ["lengthadjust", "lengthAdjust"],
  ["limitingconeangle", "limitingConeAngle"],
  ["markerheight", "markerHeight"],
  ["markerunits", "markerUnits"],
  ["markerwidth", "markerWidth"],
  ["maskcontentunits", "maskContentUnits"],
  ["maskunits", "maskUnits"],
  ["numoctaves", "numOctaves"],
  ["pathlength", "pathLength"],
  ["patterncontentunits", "patternContentUnits"],
  ["patterntransform", "patternTransform"],
  ["patternunits", "patternUnits"],
  ["pointsatx", "pointsAtX"],
  ["pointsaty", "pointsAtY"],
  ["pointsatz", "pointsAtZ"],
  ["preservealpha", "preserveAlpha"],
  ["preserveaspectratio", "preserveAspectRatio"],
  ["primitiveunits", "primitiveUnits"],
  ["refx", "refX"],
  ["refy", "refY"],
  ["repeatcount", "repeatCount"],
  ["repeatdur", "repeatDur"],
  ["requiredextensions", "requiredExtensions"],
  ["requiredfeatures", "requiredFeatures"],
  ["specularconstant", "specularConstant"],
  ["specularexponent", "specularExponent"],
  ["spreadmethod", "spreadMethod"],
  ["startoffset", "startOffset"],
  ["stddeviation", "stdDeviation"],
  ["stitchtiles", "stitchTiles"],
  ["surfacescale", "surfaceScale"],
  ["systemlanguage", "systemLanguage"],
  ["tablevalues", "tableValues"],
  ["targetx", "targetX"],
  ["targety", "targetY"],
  ["textlength", "textLength"],
  ["viewbox", "viewBox"],
  ["viewtarget", "viewTarget"],
  ["xchannelselector", "xChannelSelector"],
  ["ychannelselector", "yChannelSelector"],
  ["zoomandpan", "zoomAndPan"]
]);
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o, k22, { enumerable: true, get: function() {
    return m2[k2];
  } });
} : function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o[k22] = m2[k2];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
  Object.defineProperty(o, "default", { enumerable: true, value: v2 });
} : function(o, v2) {
  o["default"] = v2;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding$1(result, mod, k2);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(lib$1, "__esModule", { value: true });
var ElementType = __importStar$1(lib$4);
var entities_1 = lib;
var foreignNames_1 = foreignNames;
var unencodedElements = new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function formatAttributes(attributes, opts) {
  if (!attributes)
    return;
  return Object.keys(attributes).map(function(key) {
    var _a, _b;
    var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
  }).join(" ");
}
var singleTag = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render(node2, options) {
  if (options === void 0) {
    options = {};
  }
  var nodes = "length" in node2 ? node2 : [node2];
  var output = "";
  for (var i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
lib$1.default = render;
function renderNode(node2, options) {
  switch (node2.type) {
    case ElementType.Root:
      return render(node2.children, options);
    case ElementType.Directive:
    case ElementType.Doctype:
      return renderDirective(node2);
    case ElementType.Comment:
      return renderComment(node2);
    case ElementType.CDATA:
      return renderCdata(node2);
    case ElementType.Script:
    case ElementType.Style:
    case ElementType.Tag:
      return renderTag(node2, options);
    case ElementType.Text:
      return renderText(node2, options);
  }
}
var foreignModeIntegrationPoints = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = __assign(__assign({}, opts), { xmlMode: false });
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
  }
  var tag = "<" + elem.name;
  var attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += " " + attribs;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</" + elem.name + ">";
    }
  }
  return tag;
}
function renderDirective(elem) {
  return "<" + elem.data + ">";
}
function renderText(elem, opts) {
  var data = elem.data || "";
  if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = entities_1.encodeXML(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(stringify, "__esModule", { value: true });
stringify.innerText = stringify.textContent = stringify.getText = stringify.getInnerHTML = stringify.getOuterHTML = void 0;
var domhandler_1$5 = lib$5;
var dom_serializer_1 = __importDefault$1(lib$1);
var domelementtype_1 = lib$4;
function getOuterHTML(node2, options) {
  return (0, dom_serializer_1.default)(node2, options);
}
stringify.getOuterHTML = getOuterHTML;
function getInnerHTML(node2, options) {
  return (0, domhandler_1$5.hasChildren)(node2) ? node2.children.map(function(node3) {
    return getOuterHTML(node3, options);
  }).join("") : "";
}
stringify.getInnerHTML = getInnerHTML;
function getText$1(node2) {
  if (Array.isArray(node2))
    return node2.map(getText$1).join("");
  if ((0, domhandler_1$5.isTag)(node2))
    return node2.name === "br" ? "\n" : getText$1(node2.children);
  if ((0, domhandler_1$5.isCDATA)(node2))
    return getText$1(node2.children);
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.getText = getText$1;
function textContent(node2) {
  if (Array.isArray(node2))
    return node2.map(textContent).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && !(0, domhandler_1$5.isComment)(node2)) {
    return textContent(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.textContent = textContent;
function innerText(node2) {
  if (Array.isArray(node2))
    return node2.map(innerText).join("");
  if ((0, domhandler_1$5.hasChildren)(node2) && (node2.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$5.isCDATA)(node2))) {
    return innerText(node2.children);
  }
  if ((0, domhandler_1$5.isText)(node2))
    return node2.data;
  return "";
}
stringify.innerText = innerText;
var traversal = {};
Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$4 = lib$5;
var emptyArray = [];
function getChildren(elem) {
  var _a;
  return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
traversal.getChildren = getChildren;
function getParent(elem) {
  return elem.parent || null;
}
traversal.getParent = getParent;
function getSiblings(elem) {
  var _a, _b;
  var parent = getParent(elem);
  if (parent != null)
    return getChildren(parent);
  var siblings = [elem];
  var prev = elem.prev, next = elem.next;
  while (prev != null) {
    siblings.unshift(prev);
    _a = prev, prev = _a.prev;
  }
  while (next != null) {
    siblings.push(next);
    _b = next, next = _b.next;
  }
  return siblings;
}
traversal.getSiblings = getSiblings;
function getAttributeValue(elem, name) {
  var _a;
  return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
traversal.getAttributeValue = getAttributeValue;
function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
traversal.hasAttrib = hasAttrib;
function getName(elem) {
  return elem.name;
}
traversal.getName = getName;
function nextElementSibling(elem) {
  var _a;
  var next = elem.next;
  while (next !== null && !(0, domhandler_1$4.isTag)(next))
    _a = next, next = _a.next;
  return next;
}
traversal.nextElementSibling = nextElementSibling;
function prevElementSibling(elem) {
  var _a;
  var prev = elem.prev;
  while (prev !== null && !(0, domhandler_1$4.isTag)(prev))
    _a = prev, prev = _a.prev;
  return prev;
}
traversal.prevElementSibling = prevElementSibling;
var manipulation = {};
Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
function removeElement(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
}
manipulation.removeElement = removeElement;
function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent = replacement.parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
}
manipulation.replaceElement = replaceElement;
function appendChild(elem, child) {
  removeElement(child);
  child.next = null;
  child.parent = elem;
  if (elem.children.push(child) > 1) {
    var sibling = elem.children[elem.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
manipulation.appendChild = appendChild;
function append(elem, next) {
  removeElement(next);
  var parent = elem.parent;
  var currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;
  if (currNext) {
    currNext.prev = next;
    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}
manipulation.append = append;
function prependChild(elem, child) {
  removeElement(child);
  child.parent = elem;
  child.prev = null;
  if (elem.children.unshift(child) !== 1) {
    var sibling = elem.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
manipulation.prependChild = prependChild;
function prepend(elem, prev) {
  removeElement(prev);
  var parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}
manipulation.prepend = prepend;
var querying = {};
Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$3 = lib$5;
function filter(test, node2, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  if (!Array.isArray(node2))
    node2 = [node2];
  return find(test, node2, recurse, limit);
}
querying.filter = filter;
function find(test, nodes, recurse, limit) {
  var result = [];
  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var elem = nodes_1[_i];
    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0)
        break;
    }
    if (recurse && (0, domhandler_1$3.hasChildren)(elem) && elem.children.length > 0) {
      var children = find(test, elem.children, recurse, limit);
      result.push.apply(result, children);
      limit -= children.length;
      if (limit <= 0)
        break;
    }
  }
  return result;
}
querying.find = find;
function findOneChild(test, nodes) {
  return nodes.find(test);
}
querying.findOneChild = findOneChild;
function findOne(test, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  var elem = null;
  for (var i = 0; i < nodes.length && !elem; i++) {
    var checked = nodes[i];
    if (!(0, domhandler_1$3.isTag)(checked)) {
      continue;
    } else if (test(checked)) {
      elem = checked;
    } else if (recurse && checked.children.length > 0) {
      elem = findOne(test, checked.children);
    }
  }
  return elem;
}
querying.findOne = findOne;
function existsOne(test, nodes) {
  return nodes.some(function(checked) {
    return (0, domhandler_1$3.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
  });
}
querying.existsOne = existsOne;
function findAll(test, nodes) {
  var _a;
  var result = [];
  var stack = nodes.filter(domhandler_1$3.isTag);
  var elem;
  while (elem = stack.shift()) {
    var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$3.isTag);
    if (children && children.length > 0) {
      stack.unshift.apply(stack, children);
    }
    if (test(elem))
      result.push(elem);
  }
  return result;
}
querying.findAll = findAll;
var legacy = {};
Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$2 = lib$5;
var querying_1 = querying;
var Checks = {
  tag_name: function(name) {
    if (typeof name === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isTag)(elem) && name(elem.name);
      };
    } else if (name === "*") {
      return domhandler_1$2.isTag;
    }
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && elem.name === name;
    };
  },
  tag_type: function(type) {
    if (typeof type === "function") {
      return function(elem) {
        return type(elem.type);
      };
    }
    return function(elem) {
      return elem.type === type;
    };
  },
  tag_contains: function(data) {
    if (typeof data === "function") {
      return function(elem) {
        return (0, domhandler_1$2.isText)(elem) && data(elem.data);
      };
    }
    return function(elem) {
      return (0, domhandler_1$2.isText)(elem) && elem.data === data;
    };
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function(elem) {
      return (0, domhandler_1$2.isTag)(elem) && value(elem.attribs[attrib]);
    };
  }
  return function(elem) {
    return (0, domhandler_1$2.isTag)(elem) && elem.attribs[attrib] === value;
  };
}
function combineFuncs(a, b2) {
  return function(elem) {
    return a(elem) || b2(elem);
  };
}
function compileTest(options) {
  var funcs = Object.keys(options).map(function(key) {
    var value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node2) {
  var test = compileTest(options);
  return test ? test(node2) : true;
}
legacy.testElement = testElement;
function getElements$1(options, nodes, recurse, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var test = compileTest(options);
  return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements$1;
function getElementById(id2, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return (0, querying_1.findOne)(getAttribCheck("id", id2), nodes, recurse);
}
legacy.getElementById = getElementById;
function getElementsByTagName(tagName, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
function getElementsByTagType(type, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;
var helpers = {};
Object.defineProperty(helpers, "__esModule", { value: true });
helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
var domhandler_1$1 = lib$5;
function removeSubsets(nodes) {
  var idx = nodes.length;
  while (--idx >= 0) {
    var node2 = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (var ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
helpers.removeSubsets = removeSubsets;
function compareDocumentPosition(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  var current = (0, domhandler_1$1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = (0, domhandler_1$1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  var maxIdx = Math.min(aParents.length, bParents.length);
  var idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return 1;
  }
  var sharedParent = aParents[idx - 1];
  var siblings = sharedParent.children;
  var aSibling = aParents[idx];
  var bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return 4 | 16;
    }
    return 4;
  }
  if (sharedParent === nodeA) {
    return 2 | 8;
  }
  return 2;
}
helpers.compareDocumentPosition = compareDocumentPosition;
function uniqueSort(nodes) {
  nodes = nodes.filter(function(node2, i, arr) {
    return !arr.includes(node2, i + 1);
  });
  nodes.sort(function(a, b2) {
    var relative = compareDocumentPosition(a, b2);
    if (relative & 2) {
      return -1;
    } else if (relative & 4) {
      return 1;
    }
    return 0;
  });
  return nodes;
}
helpers.uniqueSort = uniqueSort;
var feeds = {};
Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_1 = stringify;
var legacy_1 = legacy;
function getFeed(doc) {
  var feedRoot = getOneElement$1(isValidFeed$1, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
function getAtomFeed(feedRoot) {
  var _a;
  var childs = feedRoot.children;
  var feed = {
    type: "atom",
    items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
      var _a2;
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "id", children);
      addConditionally$1(entry, "title", "title", children);
      var href2 = (_a2 = getOneElement$1("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
      if (href2) {
        entry.link = href2;
      }
      var description = fetch$2("summary", children) || fetch$2("content", children);
      if (description) {
        entry.description = description;
      }
      var pubDate = fetch$2("updated", children);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally$1(feed, "id", "id", childs);
  addConditionally$1(feed, "title", "title", childs);
  var href = (_a = getOneElement$1("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
  if (href) {
    feed.link = href;
  }
  addConditionally$1(feed, "description", "subtitle", childs);
  var updated = fetch$2("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a, _b;
  var childs = (_b = (_a = getOneElement$1("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
  var feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
      var children = item.children;
      var entry = { media: getMediaElements$1(children) };
      addConditionally$1(entry, "id", "guid", children);
      addConditionally$1(entry, "title", "title", children);
      addConditionally$1(entry, "link", "link", children);
      addConditionally$1(entry, "description", "description", children);
      var pubDate = fetch$2("pubDate", children);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally$1(feed, "title", "title", childs);
  addConditionally$1(feed, "link", "link", childs);
  addConditionally$1(feed, "description", "description", childs);
  var updated = fetch$2("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally$1(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements$1(where) {
  return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
    var attribs = elem.attribs;
    var media = {
      medium: attribs.medium,
      isDefault: !!attribs.isDefault
    };
    for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
      var attrib = MEDIA_KEYS_STRING_1[_i];
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
      var attrib = MEDIA_KEYS_INT_1[_a];
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs.expression) {
      media.expression = attribs.expression;
    }
    return media;
  });
}
function getOneElement$1(tagName, node2) {
  return (0, legacy_1.getElementsByTagName)(tagName, node2, true, 1)[0];
}
function fetch$2(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
function addConditionally$1(obj, prop2, tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var val = fetch$2(tagName, where, recurse);
  if (val)
    obj[prop2] = val;
}
function isValidFeed$1(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
  __exportStar(stringify, exports);
  __exportStar(traversal, exports);
  __exportStar(manipulation, exports);
  __exportStar(querying, exports);
  __exportStar(legacy, exports);
  __exportStar(helpers, exports);
  __exportStar(feeds, exports);
  var domhandler_12 = lib$5;
  Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
    return domhandler_12.isTag;
  } });
  Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
    return domhandler_12.isCDATA;
  } });
  Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
    return domhandler_12.isText;
  } });
  Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
    return domhandler_12.isComment;
  } });
  Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
    return domhandler_12.isDocument;
  } });
  Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
    return domhandler_12.hasChildren;
  } });
})(lib$2);
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o, k22, { enumerable: true, get: function() {
    return m2[k2];
  } });
} : function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o[k22] = m2[k2];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
  Object.defineProperty(o, "default", { enumerable: true, value: v2 });
} : function(o, v2) {
  o["default"] = v2;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(FeedHandler$1, "__esModule", { value: true });
FeedHandler$1.parseFeed = FeedHandler$1.FeedHandler = void 0;
var domhandler_1 = __importDefault(lib$5);
var DomUtils = __importStar(lib$2);
var Parser_1 = Parser$1;
var FeedItemMediaMedium;
(function(FeedItemMediaMedium2) {
  FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
  FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
  FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
  FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
  FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
})(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
var FeedItemMediaExpression;
(function(FeedItemMediaExpression2) {
  FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
  FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
  FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
})(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
var FeedHandler = function(_super) {
  __extends(FeedHandler2, _super);
  function FeedHandler2(callback, options) {
    var _this = this;
    if (typeof callback === "object") {
      callback = void 0;
      options = callback;
    }
    _this = _super.call(this, callback, options) || this;
    return _this;
  }
  FeedHandler2.prototype.onend = function() {
    var _a, _b;
    var feedRoot = getOneElement(isValidFeed, this.dom);
    if (!feedRoot) {
      this.handleCallback(new Error("couldn't find root of feed"));
      return;
    }
    var feed = {};
    if (feedRoot.name === "feed") {
      var childs = feedRoot.children;
      feed.type = "atom";
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = getAttribute("href", getOneElement("link", childs));
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch$1("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      feed.items = getElements("entry", childs).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        var href2 = getAttribute("href", getOneElement("link", children));
        if (href2) {
          entry.link = href2;
        }
        var description = fetch$1("summary", children) || fetch$1("content", children);
        if (description) {
          entry.description = description;
        }
        var pubDate = fetch$1("updated", children);
        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }
        entry.media = getMediaElements(children);
        return entry;
      });
    } else {
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      feed.type = feedRoot.name.substr(0, 3);
      feed.id = "";
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch$1("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      feed.items = getElements("item", feedRoot.children).map(function(item) {
        var entry = {};
        var children = item.children;
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        var pubDate = fetch$1("pubDate", children);
        if (pubDate)
          entry.pubDate = new Date(pubDate);
        entry.media = getMediaElements(children);
        return entry;
      });
    }
    this.feed = feed;
    this.handleCallback(null);
  };
  return FeedHandler2;
}(domhandler_1.default);
FeedHandler$1.FeedHandler = FeedHandler;
function getMediaElements(where) {
  return getElements("media:content", where).map(function(elem) {
    var media = {
      medium: elem.attribs.medium,
      isDefault: !!elem.attribs.isDefault
    };
    if (elem.attribs.url) {
      media.url = elem.attribs.url;
    }
    if (elem.attribs.fileSize) {
      media.fileSize = parseInt(elem.attribs.fileSize, 10);
    }
    if (elem.attribs.type) {
      media.type = elem.attribs.type;
    }
    if (elem.attribs.expression) {
      media.expression = elem.attribs.expression;
    }
    if (elem.attribs.bitrate) {
      media.bitrate = parseInt(elem.attribs.bitrate, 10);
    }
    if (elem.attribs.framerate) {
      media.framerate = parseInt(elem.attribs.framerate, 10);
    }
    if (elem.attribs.samplingrate) {
      media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
    }
    if (elem.attribs.channels) {
      media.channels = parseInt(elem.attribs.channels, 10);
    }
    if (elem.attribs.duration) {
      media.duration = parseInt(elem.attribs.duration, 10);
    }
    if (elem.attribs.height) {
      media.height = parseInt(elem.attribs.height, 10);
    }
    if (elem.attribs.width) {
      media.width = parseInt(elem.attribs.width, 10);
    }
    if (elem.attribs.lang) {
      media.lang = elem.attribs.lang;
    }
    return media;
  });
}
function getElements(tagName, where) {
  return DomUtils.getElementsByTagName(tagName, where, true);
}
function getOneElement(tagName, node2) {
  return DomUtils.getElementsByTagName(tagName, node2, true, 1)[0];
}
function fetch$1(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
  if (!elem) {
    return null;
  }
  var attribs = elem.attribs;
  return attribs[name];
}
function addConditionally(obj, prop2, what, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var tmp = fetch$1(what, where, recurse);
  if (tmp)
    obj[prop2] = tmp;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
function parseFeed(feed, options) {
  if (options === void 0) {
    options = { xmlMode: true };
  }
  var handler = new FeedHandler(options);
  new Parser_1.Parser(handler, options).end(feed);
  return handler.feed;
}
FeedHandler$1.parseFeed = parseFeed;
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
    Object.defineProperty(o, "default", { enumerable: true, value: v2 });
  } : function(o, v2) {
    o["default"] = v2;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod)
        if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
          __createBinding2(result, mod, k2);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding2(exports2, m2, p2);
  };
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
  var Parser_12 = Parser$1;
  Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
    return Parser_12.Parser;
  } });
  var domhandler_12 = lib$5;
  Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
    return domhandler_12.DomHandler;
  } });
  function parseDocument(data, options) {
    var handler = new domhandler_12.DomHandler(void 0, options);
    new Parser_12.Parser(handler, options).end(data);
    return handler.root;
  }
  exports.parseDocument = parseDocument;
  function parseDOM(data, options) {
    return parseDocument(data, options).children;
  }
  exports.parseDOM = parseDOM;
  function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_12.DomHandler(cb, options, elementCb);
    return new Parser_12.Parser(handler, options);
  }
  exports.createDomStream = createDomStream;
  var Tokenizer_12 = Tokenizer$1;
  Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
    return __importDefault2(Tokenizer_12).default;
  } });
  var ElementType2 = __importStar2(lib$4);
  exports.ElementType = ElementType2;
  __exportStar(FeedHandler$1, exports);
  exports.DomUtils = __importStar2(lib$2);
  var FeedHandler_1 = FeedHandler$1;
  Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
    return FeedHandler_1.FeedHandler;
  } });
})(lib$3);
const merge$1 = cjs;
function splitClassesAndIds$1(selectors) {
  const classes = [];
  const ids = [];
  for (const selector of selectors) {
    if (selector.startsWith(".")) {
      classes.push(selector.substring(1));
    } else if (selector.startsWith("#")) {
      ids.push(selector.substring(1));
    }
  }
  return { classes, ids };
}
function limitedDepthRecursive$1(n, f, g2 = () => void 0) {
  if (n === void 0) {
    const f1 = function(...args) {
      return f(f1, ...args);
    };
    return f1;
  }
  if (n >= 0) {
    return function(...args) {
      return f(limitedDepthRecursive$1(n - 1, f, g2), ...args);
    };
  }
  return g2;
}
function numberToLetterSequence$1(num2, baseChar = "a", base = 26) {
  const digits = [];
  do {
    num2 -= 1;
    digits.push(num2 % base);
    num2 = num2 / base >> 0;
  } while (num2 > 0);
  const baseCode = baseChar.charCodeAt(0);
  return digits.reverse().map((n) => String.fromCharCode(baseCode + n)).join("");
}
const I = ["I", "X", "C", "M"];
const V = ["V", "L", "D"];
function numberToRoman$1(num2) {
  return [...num2 + ""].map((n) => +n).reverse().map((v2, i) => v2 % 5 < 4 ? (v2 < 5 ? "" : V[i]) + I[i].repeat(v2 % 5) : I[i] + (v2 < 5 ? V[i] : I[i + 1])).reverse().join("");
}
function trimCharacter$2(str, char) {
  let start = 0;
  let end = str.length;
  while (start < end && str[start] === char) {
    ++start;
  }
  while (end > start && str[end - 1] === char) {
    --end;
  }
  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
function get$1(obj, path) {
  for (const key of path) {
    if (!obj) {
      return void 0;
    }
    obj = obj[key];
  }
  return obj;
}
function set$1(obj, path, value) {
  const valueKey = path.pop();
  for (const key of path) {
    let nested = obj[key];
    if (!nested) {
      nested = {};
      obj[key] = nested;
    }
    obj = nested;
  }
  obj[valueKey] = value;
}
function mergeDuplicatesPreferLast$1(items, getKey) {
  const map2 = new Map();
  for (let i = items.length; i-- > 0; ) {
    const item = items[i];
    const key = getKey(item);
    map2.set(key, map2.has(key) ? merge$1(item, map2.get(key), { arrayMerge: overwriteMerge$1 }) : item);
  }
  return [...map2.values()].reverse();
}
const overwriteMerge$1 = (acc, src, options) => [...src];
var helper = {
  get: get$1,
  limitedDepthRecursive: limitedDepthRecursive$1,
  mergeDuplicatesPreferLast: mergeDuplicatesPreferLast$1,
  numberToLetterSequence: numberToLetterSequence$1,
  numberToRoman: numberToRoman$1,
  set: set$1,
  splitClassesAndIds: splitClassesAndIds$1,
  trimCharacter: trimCharacter$2
};
class InlineTextBuilder$1 {
  constructor(options, maxLineLength = void 0) {
    this.lines = [];
    this.nextLineWords = [];
    this.maxLineLength = maxLineLength || options.wordwrap || Number.MAX_VALUE;
    this.nextLineAvailableChars = this.maxLineLength;
    this.wrapCharacters = options.longWordSplit.wrapCharacters || [];
    this.forceWrapOnLimit = options.longWordSplit.forceWrapOnLimit || false;
    this.stashedSpace = false;
    this.wordBreakOpportunity = false;
  }
  pushWord(word) {
    if (this.nextLineAvailableChars <= 0) {
      this.startNewLine();
    }
    const isLineStart = this.nextLineWords.length === 0;
    const cost = word.length + (isLineStart ? 0 : 1);
    if (cost <= this.nextLineAvailableChars) {
      this.nextLineWords.push(word);
      this.nextLineAvailableChars -= cost;
    } else {
      const [first, ...rest] = this.splitLongWord(word);
      if (!isLineStart) {
        this.startNewLine();
      }
      this.nextLineWords.push(first);
      this.nextLineAvailableChars -= first.length;
      for (const part2 of rest) {
        this.startNewLine();
        this.nextLineWords.push(part2);
        this.nextLineAvailableChars -= part2.length;
      }
    }
  }
  popWord() {
    const lastWord = this.nextLineWords.pop();
    if (lastWord !== void 0) {
      const isLineStart = this.nextLineWords.length === 0;
      const cost = lastWord.length + (isLineStart ? 0 : 1);
      this.nextLineAvailableChars += cost;
    }
    return lastWord;
  }
  concatWord(word) {
    if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
      this.pushWord(word);
      this.wordBreakOpportunity = false;
    } else {
      const lastWord = this.popWord();
      this.pushWord(lastWord ? lastWord.concat(word) : word);
    }
  }
  startNewLine(n = 1) {
    this.lines.push(this.nextLineWords);
    if (n > 1) {
      this.lines.push(...Array.from({ length: n - 1 }, () => []));
    }
    this.nextLineWords = [];
    this.nextLineAvailableChars = this.maxLineLength;
  }
  isEmpty() {
    return this.lines.length === 0 && this.nextLineWords.length === 0;
  }
  clear() {
    this.lines.length = 0;
    this.nextLineWords.length = 0;
    this.nextLineAvailableChars = this.maxLineLength;
  }
  toString() {
    return [...this.lines, this.nextLineWords].map((words) => words.join(" ")).join("\n");
  }
  splitLongWord(word) {
    const parts = [];
    let idx = 0;
    while (word.length > this.maxLineLength) {
      const firstLine = word.substring(0, this.maxLineLength);
      const remainingChars = word.substring(this.maxLineLength);
      const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);
      if (splitIndex > -1) {
        word = firstLine.substring(splitIndex + 1) + remainingChars;
        parts.push(firstLine.substring(0, splitIndex + 1));
      } else {
        idx++;
        if (idx < this.wrapCharacters.length) {
          word = firstLine + remainingChars;
        } else {
          if (this.forceWrapOnLimit) {
            parts.push(firstLine);
            word = remainingChars;
            if (word.length > this.maxLineLength) {
              continue;
            }
          } else {
            word = firstLine + remainingChars;
          }
          break;
        }
      }
    }
    parts.push(word);
    return parts;
  }
}
var inlineTextBuilder = { InlineTextBuilder: InlineTextBuilder$1 };
const { InlineTextBuilder } = inlineTextBuilder;
class StackItem$1 {
  constructor(next = null) {
    this.next = next;
  }
  getRoot() {
    return this.next ? this.next : this;
  }
}
class BlockStackItem$1 extends StackItem$1 {
  constructor(options, next = null, leadingLineBreaks = 1, maxLineLength = void 0) {
    super(next);
    this.leadingLineBreaks = leadingLineBreaks;
    this.inlineTextBuilder = new InlineTextBuilder(options, maxLineLength);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
  }
}
class TableStackItem$1 extends StackItem$1 {
  constructor(next = null) {
    super(next);
    this.rows = [];
    this.isPre = next && next.isPre;
  }
}
class TableRowStackItem$1 extends StackItem$1 {
  constructor(next = null) {
    super(next);
    this.cells = [];
    this.isPre = next && next.isPre;
  }
}
class TableCellStackItem$1 extends StackItem$1 {
  constructor(options, next = null, maxColumnWidth = void 0) {
    super(next);
    this.inlineTextBuilder = new InlineTextBuilder(options, maxColumnWidth);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
  }
}
class TransformerStackItem$1 extends StackItem$1 {
  constructor(next = null, transform) {
    super(next);
    this.transform = transform;
  }
}
var stackItem = {
  BlockStackItem: BlockStackItem$1,
  StackItem: StackItem$1,
  TableCellStackItem: TableCellStackItem$1,
  TableRowStackItem: TableRowStackItem$1,
  TableStackItem: TableStackItem$1,
  TransformerStackItem: TransformerStackItem$1
};
function getRow(matrix, j2) {
  if (!matrix[j2]) {
    matrix[j2] = [];
  }
  return matrix[j2];
}
function findFirstVacantIndex(row, x2 = 0) {
  while (row[x2]) {
    x2++;
  }
  return x2;
}
function transposeInPlace(matrix, maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const rowI = getRow(matrix, i);
    for (let j2 = 0; j2 < i; j2++) {
      const rowJ = getRow(matrix, j2);
      const temp = rowI[j2];
      rowI[j2] = rowJ[i];
      rowJ[i] = temp;
    }
  }
}
function putCellIntoLayout(cell, layout, baseRow, baseCol) {
  for (let r = 0; r < cell.rowspan; r++) {
    const layoutRow = getRow(layout, baseRow + r);
    for (let c = 0; c < cell.colspan; c++) {
      layoutRow[baseCol + c] = cell;
    }
  }
}
function updateOffset(offsets, base, span, value) {
  offsets[base + span] = Math.max(offsets[base + span] || 0, offsets[base] + value);
}
function tableToString$1(tableRows, rowSpacing, colSpacing) {
  const layout = [];
  let colNumber = 0;
  const rowNumber = tableRows.length;
  const rowOffsets = [0];
  for (let j2 = 0; j2 < rowNumber; j2++) {
    const layoutRow = getRow(layout, j2);
    const cells = tableRows[j2];
    let x2 = 0;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      x2 = findFirstVacantIndex(layoutRow, x2);
      putCellIntoLayout(cell, layout, j2, x2);
      x2 += cell.colspan;
      cell.lines = cell.text.split("\n");
      const cellHeight = cell.lines.length;
      updateOffset(rowOffsets, j2, cell.rowspan, cellHeight + rowSpacing);
    }
    colNumber = layoutRow.length > colNumber ? layoutRow.length : colNumber;
  }
  transposeInPlace(layout, rowNumber > colNumber ? rowNumber : colNumber);
  const outputLines = [];
  const colOffsets = [0];
  for (let x2 = 0; x2 < colNumber; x2++) {
    let y2 = 0;
    let cell;
    while (y2 < rowNumber && (cell = layout[x2][y2])) {
      if (!cell.rendered) {
        let cellWidth = 0;
        for (let j2 = 0; j2 < cell.lines.length; j2++) {
          const line = cell.lines[j2];
          const lineOffset = rowOffsets[y2] + j2;
          outputLines[lineOffset] = (outputLines[lineOffset] || "").padEnd(colOffsets[x2]) + line;
          cellWidth = line.length > cellWidth ? line.length : cellWidth;
        }
        updateOffset(colOffsets, x2, cell.colspan, cellWidth + colSpacing);
        cell.rendered = true;
      }
      y2 += cell.rowspan;
    }
  }
  return outputLines.join("\n");
}
var tablePrinter = { tableToString: tableToString$1 };
function charactersToCodes(str) {
  return [...str].map((c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
class WhitespaceProcessor$1 {
  constructor(options) {
    this.whitespaceChars = options.preserveNewlines ? options.whitespaceCharacters.replace(/\n/g, "") : options.whitespaceCharacters;
    const whitespaceCodes = charactersToCodes(this.whitespaceChars);
    this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
    this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
    this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
    if (options.preserveNewlines) {
      const wordOrNewlineRe = new RegExp(`
|[^
${whitespaceCodes}]+`, "gm");
      this.shrinkWrapAdd = function(text, inlineTextBuilder2, transform = (str) => str) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder2.stashedSpace;
        let anyMatch = false;
        let m2 = wordOrNewlineRe.exec(text);
        if (m2) {
          anyMatch = true;
          if (m2[0] === "\n") {
            inlineTextBuilder2.startNewLine();
          } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder2.pushWord(transform(m2[0]));
          } else {
            inlineTextBuilder2.concatWord(transform(m2[0]));
          }
          while ((m2 = wordOrNewlineRe.exec(text)) !== null) {
            if (m2[0] === "\n") {
              inlineTextBuilder2.startNewLine();
            } else {
              inlineTextBuilder2.pushWord(transform(m2[0]));
            }
          }
        }
        inlineTextBuilder2.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    } else {
      const wordRe = new RegExp(`[^${whitespaceCodes}]+`, "g");
      this.shrinkWrapAdd = function(text, inlineTextBuilder2, transform = (str) => str) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder2.stashedSpace;
        let anyMatch = false;
        let m2 = wordRe.exec(text);
        if (m2) {
          anyMatch = true;
          if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder2.pushWord(transform(m2[0]));
          } else {
            inlineTextBuilder2.concatWord(transform(m2[0]));
          }
          while ((m2 = wordRe.exec(text)) !== null) {
            inlineTextBuilder2.pushWord(transform(m2[0]));
          }
        }
        inlineTextBuilder2.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    }
  }
  testLeadingWhitespace(text) {
    return this.leadingWhitespaceRe.test(text);
  }
  testTrailingWhitespace(text) {
    return this.trailingWhitespaceRe.test(text);
  }
  testContainsWords(text) {
    return !this.allWhitespaceOrEmptyRe.test(text);
  }
}
var whitespaceProcessor = { WhitespaceProcessor: WhitespaceProcessor$1 };
const { trimCharacter: trimCharacter$1 } = helper;
const { StackItem, BlockStackItem, TableCellStackItem, TableRowStackItem, TableStackItem, TransformerStackItem } = stackItem;
const { tableToString } = tablePrinter;
const { WhitespaceProcessor } = whitespaceProcessor;
class BlockTextBuilder$1 {
  constructor(options, picker) {
    this.options = options;
    this.picker = picker;
    this.whitepaceProcessor = new WhitespaceProcessor(options);
    this._stackItem = new BlockStackItem(options);
    this._wordTransformer = void 0;
  }
  pushWordTransform(wordTransform) {
    this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
  }
  popWordTransform() {
    if (!this._wordTransformer) {
      return void 0;
    }
    const transform = this._wordTransformer.transform;
    this._wordTransformer = this._wordTransformer.next;
    return transform;
  }
  _getCombinedWordTransformer() {
    const applyTransformer = (str, transformer) => transformer ? applyTransformer(transformer.transform(str), transformer.next) : str;
    return (str) => applyTransformer(str, this._wordTransformer);
  }
  _popStackItem() {
    const item = this._stackItem;
    this._stackItem = item.next;
    return item;
  }
  addLineBreak() {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += "\n";
    } else {
      this._stackItem.inlineTextBuilder.startNewLine();
    }
  }
  addWordBreakOpportunity() {
    if (this._stackItem instanceof BlockStackItem || this._stackItem instanceof TableCellStackItem) {
      this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
    }
  }
  addInline(str, optionsObjectOrNoWordTransform = {}) {
    if (typeof optionsObjectOrNoWordTransform === "object") {
      this._addInline(str, optionsObjectOrNoWordTransform);
    } else {
      this._addInline(str, { noWordTransform: optionsObjectOrNoWordTransform });
    }
  }
  _addInline(str, { noWordTransform = false } = {}) {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }
    if (this.whitepaceProcessor.testContainsWords(str) || str.length && !this._stackItem.stashedLineBreaks) {
      if (this._stackItem.stashedLineBreaks) {
        this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
      }
      this.whitepaceProcessor.shrinkWrapAdd(str, this._stackItem.inlineTextBuilder, this._wordTransformer && !noWordTransform ? this._getCombinedWordTransformer() : void 0);
      this._stackItem.stashedLineBreaks = 0;
    }
  }
  openBlock(optionsObjectOrLeadingLineBreaks = {}, reservedLineLength = void 0, isPre = void 0) {
    if (typeof optionsObjectOrLeadingLineBreaks === "object") {
      this._openBlock(optionsObjectOrLeadingLineBreaks);
    } else {
      this._openBlock({
        isPre,
        leadingLineBreaks: optionsObjectOrLeadingLineBreaks,
        reservedLineLength
      });
    }
  }
  _openBlock({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
    const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
    this._stackItem = new BlockStackItem(this.options, this._stackItem, leadingLineBreaks, maxLineLength);
    if (isPre) {
      this._stackItem.isPre = true;
    }
  }
  closeBlock(optionsObjectOrTrailingLineBreaks = {}, blockTransform = void 0) {
    if (typeof optionsObjectOrTrailingLineBreaks === "object") {
      this._closeBlock(optionsObjectOrTrailingLineBreaks);
    } else {
      this._closeBlock({
        trailingLineBreaks: optionsObjectOrTrailingLineBreaks,
        blockTransform
      });
    }
  }
  _closeBlock({ trailingLineBreaks = 1, blockTransform = void 0 } = {}) {
    const block2 = this._popStackItem();
    const blockText = blockTransform ? blockTransform(getText(block2)) : getText(block2);
    addText(this._stackItem, blockText, block2.leadingLineBreaks, Math.max(block2.stashedLineBreaks, trailingLineBreaks));
  }
  openTable() {
    this._stackItem = new TableStackItem(this._stackItem);
  }
  openTableRow() {
    if (!(this._stackItem instanceof TableStackItem)) {
      throw new Error("Can't add table row to something that is not a table! Check the formatter.");
    }
    this._stackItem = new TableRowStackItem(this._stackItem);
  }
  openTableCell(optionsObjectOrMaxColumnWidth = {}) {
    if (typeof optionsObjectOrMaxColumnWidth === "object") {
      this._openTableCell(optionsObjectOrMaxColumnWidth);
    } else {
      this._openTableCell({ maxColumnWidth: optionsObjectOrMaxColumnWidth });
    }
  }
  _openTableCell({ maxColumnWidth = void 0 } = {}) {
    if (!(this._stackItem instanceof TableRowStackItem)) {
      throw new Error("Can't add table cell to something that is not a table row! Check the formatter.");
    }
    this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
  }
  closeTableCell(optionsObjectOrColspan = {}, rowspan = void 0) {
    if (typeof optionsObjectOrColspan === "object") {
      this._closeTableCell(optionsObjectOrColspan);
    } else {
      this._closeTableCell({
        colspan: optionsObjectOrColspan,
        rowspan
      });
    }
  }
  _closeTableCell({ colspan = 1, rowspan = 1 } = {}) {
    const cell = this._popStackItem();
    const text = trimCharacter$1(getText(cell), "\n");
    cell.next.cells.push({ colspan, rowspan, text });
  }
  closeTableRow() {
    const row = this._popStackItem();
    row.next.rows.push(row.cells);
  }
  closeTable(optionsObjectOrColSpacing = {}, rowSpacing = void 0, leadingLineBreaks = void 0, trailingLineBreaks = void 0) {
    if (typeof optionsObjectOrColSpacing === "object") {
      this._closeTable(optionsObjectOrColSpacing);
    } else {
      this._closeTable({
        colSpacing: optionsObjectOrColSpacing,
        leadingLineBreaks,
        rowSpacing,
        trailingLineBreaks
      });
    }
  }
  _closeTable({ colSpacing = 3, rowSpacing = 0, leadingLineBreaks = 2, trailingLineBreaks = 2 } = {}) {
    const table = this._popStackItem();
    const output = tableToString(table.rows, rowSpacing, colSpacing);
    if (output) {
      addText(this._stackItem, output, leadingLineBreaks, trailingLineBreaks);
    }
  }
  toString() {
    return getText(this._stackItem.getRoot());
  }
}
function getText(stackItem2) {
  if (!(stackItem2 instanceof BlockStackItem || stackItem2 instanceof TableCellStackItem)) {
    throw new Error("Only blocks and table cells can be requested for text contents.");
  }
  return stackItem2.inlineTextBuilder.isEmpty() ? stackItem2.rawText : stackItem2.rawText + stackItem2.inlineTextBuilder.toString();
}
function addText(stackItem2, text, leadingLineBreaks, trailingLineBreaks) {
  if (!(stackItem2 instanceof BlockStackItem || stackItem2 instanceof TableCellStackItem)) {
    throw new Error("Only blocks and table cells can contain text.");
  }
  const parentText = getText(stackItem2);
  const lineBreaks = Math.max(stackItem2.stashedLineBreaks, leadingLineBreaks);
  stackItem2.inlineTextBuilder.clear();
  if (parentText) {
    stackItem2.rawText = parentText + "\n".repeat(lineBreaks) + text;
  } else {
    stackItem2.rawText = text;
    stackItem2.leadingLineBreaks = lineBreaks;
  }
  stackItem2.stashedLineBreaks = trailingLineBreaks;
}
var blockTextBuilder = { BlockTextBuilder: BlockTextBuilder$1 };
const he$1 = he$2.exports;
const { get, numberToLetterSequence, numberToRoman, splitClassesAndIds, trimCharacter } = helper;
function formatSkip(elem, walk, builder, formatOptions) {
}
function formatInline(elem, walk, builder, formatOptions) {
  walk(elem.children, builder);
}
function formatBlock(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks });
}
function formatLineBreak(elem, walk, builder, formatOptions) {
  builder.addLineBreak();
}
function formatWbr(elem, walk, builder, formatOptions) {
  builder.addWordBreakOpportunity();
}
function formatHorizontalLine(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addInline("-".repeat(formatOptions.length || builder.options.wordwrap || 40));
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatParagraph(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatPre(elem, walk, builder, formatOptions) {
  builder.openBlock({
    isPre: true,
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2
  });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatHeading(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  if (formatOptions.uppercase !== false) {
    builder.pushWordTransform((str) => str.toUpperCase());
    walk(elem.children, builder);
    builder.popWordTransform();
  } else {
    walk(elem.children, builder);
  }
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatBlockquote(elem, walk, builder, formatOptions) {
  builder.openBlock({
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
    reservedLineLength: 2
  });
  walk(elem.children, builder);
  builder.closeBlock({
    trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
    blockTransform: (str) => (formatOptions.trimEmptyLines !== false ? trimCharacter(str, "\n") : str).split("\n").map((line) => "> " + line).join("\n")
  });
}
function formatImage(elem, walk, builder, formatOptions) {
  const attribs = elem.attribs || {};
  const alt = attribs.alt ? he$1.decode(attribs.alt, builder.options.decodeOptions) : "";
  const src = !attribs.src ? "" : formatOptions.baseUrl && attribs.src.indexOf("/") === 0 ? formatOptions.baseUrl + attribs.src : attribs.src;
  const text = !src ? alt : !alt ? "[" + src + "]" : alt + " [" + src + "]";
  builder.addInline(text);
}
function formatAnchor(elem, walk, builder, formatOptions) {
  function getHref() {
    if (formatOptions.ignoreHref) {
      return "";
    }
    if (!elem.attribs || !elem.attribs.href) {
      return "";
    }
    let href2 = elem.attribs.href.replace(/^mailto:/, "");
    if (formatOptions.noAnchorUrl && href2[0] === "#") {
      return "";
    }
    href2 = formatOptions.baseUrl && href2[0] === "/" ? formatOptions.baseUrl + href2 : href2;
    return he$1.decode(href2, builder.options.decodeOptions);
  }
  const href = getHref();
  if (!href) {
    walk(elem.children, builder);
  } else {
    let text = "";
    builder.pushWordTransform((str) => {
      if (str) {
        text += str;
      }
      return str;
    });
    walk(elem.children, builder);
    builder.popWordTransform();
    const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
    if (!hideSameLink) {
      builder.addInline(!text ? href : formatOptions.noLinkBrackets ? " " + href : " [" + href + "]", { noWordTransform: true });
    }
  }
}
function formatList(elem, walk, builder, formatOptions, nextPrefixCallback) {
  const isNestedList = get(elem, ["parent", "name"]) === "li";
  let maxPrefixLength = 0;
  const listItems = (elem.children || []).filter((child) => child.type !== "text" || !/^\s*$/.test(child.data)).map(function(child) {
    if (child.name !== "li") {
      return { node: child, prefix: "" };
    }
    const prefix = isNestedList ? nextPrefixCallback().trimStart() : nextPrefixCallback();
    if (prefix.length > maxPrefixLength) {
      maxPrefixLength = prefix.length;
    }
    return { node: child, prefix };
  });
  if (!listItems.length) {
    return;
  }
  const reservedLineLength = maxPrefixLength;
  const spacing = "\n" + " ".repeat(reservedLineLength);
  builder.openBlock({ leadingLineBreaks: isNestedList ? 1 : formatOptions.leadingLineBreaks || 2 });
  for (const { node: node2, prefix } of listItems) {
    builder.openBlock({
      leadingLineBreaks: 1,
      reservedLineLength
    });
    walk([node2], builder);
    builder.closeBlock({
      trailingLineBreaks: 1,
      blockTransform: (str) => prefix + " ".repeat(reservedLineLength - prefix.length) + str.replace(/\n/g, spacing)
    });
  }
  builder.closeBlock({ trailingLineBreaks: isNestedList ? 1 : formatOptions.trailingLineBreaks || 2 });
}
function formatUnorderedList(elem, walk, builder, formatOptions) {
  const prefix = formatOptions.itemPrefix || " * ";
  return formatList(elem, walk, builder, formatOptions, () => prefix);
}
function formatOrderedList(elem, walk, builder, formatOptions) {
  let nextIndex = Number(elem.attribs.start || "1");
  const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
  const nextPrefixCallback = () => " " + indexFunction(nextIndex++) + ". ";
  return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}
function getOrderedListIndexFunction(olType = "1") {
  switch (olType) {
    case "a":
      return (i) => numberToLetterSequence(i, "a");
    case "A":
      return (i) => numberToLetterSequence(i, "A");
    case "i":
      return (i) => numberToRoman(i).toLowerCase();
    case "I":
      return (i) => numberToRoman(i);
    case "1":
    default:
      return (i) => i.toString();
  }
}
function isDataTable(attr, tables) {
  if (tables === true) {
    return true;
  }
  if (!attr) {
    return false;
  }
  const { classes, ids } = splitClassesAndIds(tables);
  const attrClasses = (attr["class"] || "").split(" ");
  const attrIds = (attr["id"] || "").split(" ");
  return attrClasses.some((x2) => classes.includes(x2)) || attrIds.some((x2) => ids.includes(x2));
}
function formatTable(elem, walk, builder, formatOptions) {
  return isDataTable(elem.attribs, builder.options.tables) ? formatDataTable(elem, walk, builder, formatOptions) : formatBlock(elem, walk, builder, formatOptions);
}
function formatDataTable(elem, walk, builder, formatOptions) {
  builder.openTable();
  elem.children.forEach(walkTable);
  builder.closeTable({
    colSpacing: formatOptions.colSpacing,
    leadingLineBreaks: formatOptions.leadingLineBreaks,
    rowSpacing: formatOptions.rowSpacing,
    trailingLineBreaks: formatOptions.trailingLineBreaks
  });
  function formatCell(cellNode) {
    const colspan = +get(cellNode, ["attribs", "colspan"]) || 1;
    const rowspan = +get(cellNode, ["attribs", "rowspan"]) || 1;
    builder.openTableCell({ maxColumnWidth: formatOptions.maxColumnWidth });
    walk(cellNode.children, builder);
    builder.closeTableCell({ colspan, rowspan });
  }
  function walkTable(elem2) {
    if (elem2.type !== "tag") {
      return;
    }
    const formatHeaderCell = formatOptions.uppercaseHeaderCells !== false ? (cellNode) => {
      builder.pushWordTransform((str) => str.toUpperCase());
      formatCell(cellNode);
      builder.popWordTransform();
    } : formatCell;
    switch (elem2.name) {
      case "thead":
      case "tbody":
      case "tfoot":
      case "center":
        elem2.children.forEach(walkTable);
        return;
      case "tr": {
        builder.openTableRow();
        for (const childOfTr of elem2.children) {
          if (childOfTr.type !== "tag") {
            continue;
          }
          switch (childOfTr.name) {
            case "th": {
              formatHeaderCell(childOfTr);
              break;
            }
            case "td": {
              formatCell(childOfTr);
              break;
            }
          }
        }
        builder.closeTableRow();
        break;
      }
    }
  }
}
var formatter = {
  anchor: formatAnchor,
  block: formatBlock,
  blockquote: formatBlockquote,
  dataTable: formatDataTable,
  heading: formatHeading,
  horizontalLine: formatHorizontalLine,
  image: formatImage,
  inline: formatInline,
  lineBreak: formatLineBreak,
  orderedList: formatOrderedList,
  paragraph: formatParagraph,
  pre: formatPre,
  skip: formatSkip,
  table: formatTable,
  unorderedList: formatUnorderedList,
  wbr: formatWbr
};
const { hp2Builder } = hp2Builder$2;
const merge = cjs;
const he = he$2.exports;
const htmlparser = lib$3;
const selderee = selderee$2;
const { BlockTextBuilder } = blockTextBuilder;
const defaultFormatters = formatter;
const { limitedDepthRecursive, mergeDuplicatesPreferLast, set } = helper;
const DEFAULT_OPTIONS = {
  baseElements: {
    selectors: ["body"],
    orderBy: "selectors",
    returnDomByDefault: true
  },
  decodeOptions: {
    isAttributeValue: false,
    strict: false
  },
  formatters: {},
  limits: {
    ellipsis: "...",
    maxBaseElements: void 0,
    maxChildNodes: void 0,
    maxDepth: void 0,
    maxInputLength: 1 << 24
  },
  longWordSplit: {
    forceWrapOnLimit: false,
    wrapCharacters: []
  },
  preserveNewlines: false,
  selectors: [
    { selector: "*", format: "inline" },
    {
      selector: "a",
      format: "anchor",
      options: {
        baseUrl: null,
        hideLinkHrefIfSameAsText: false,
        ignoreHref: false,
        noAnchorUrl: true,
        noLinkBrackets: false
      }
    },
    { selector: "article", format: "block" },
    { selector: "aside", format: "block" },
    {
      selector: "blockquote",
      format: "blockquote",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2, trimEmptyLines: true }
    },
    { selector: "br", format: "lineBreak" },
    { selector: "div", format: "block" },
    { selector: "footer", format: "block" },
    { selector: "form", format: "block" },
    { selector: "h1", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h2", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h3", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h4", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h5", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h6", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "header", format: "block" },
    {
      selector: "hr",
      format: "horizontalLine",
      options: { leadingLineBreaks: 2, length: void 0, trailingLineBreaks: 2 }
    },
    { selector: "img", format: "image", options: { baseUrl: null } },
    { selector: "main", format: "block" },
    { selector: "nav", format: "block" },
    {
      selector: "ol",
      format: "orderedList",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "p", format: "paragraph", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "pre", format: "pre", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "section", format: "block" },
    {
      selector: "table",
      format: "table",
      options: {
        colSpacing: 3,
        leadingLineBreaks: 2,
        maxColumnWidth: 60,
        rowSpacing: 0,
        trailingLineBreaks: 2,
        uppercaseHeaderCells: true
      }
    },
    {
      selector: "ul",
      format: "unorderedList",
      options: { itemPrefix: " * ", leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "wbr", format: "wbr" }
  ],
  tables: [],
  whitespaceCharacters: " 	\r\n\f\u200B",
  wordwrap: 80
};
const concatMerge = (acc, src, options) => [...acc, ...src];
const overwriteMerge = (acc, src, options) => [...src];
const selectorsMerge = (acc, src, options) => acc.some((s2) => typeof s2 === "object") ? concatMerge(acc, src) : overwriteMerge(acc, src);
function compile(options = {}) {
  options = merge(DEFAULT_OPTIONS, options, {
    arrayMerge: overwriteMerge,
    customMerge: (key) => key === "selectors" ? selectorsMerge : void 0
  });
  options.formatters = Object.assign({}, defaultFormatters, options.formatters);
  handleDeprecatedOptions(options);
  const uniqueSelectors = mergeDuplicatesPreferLast(options.selectors, (s2) => s2.selector);
  const selectorsWithoutFormat = uniqueSelectors.filter((s2) => !s2.format);
  if (selectorsWithoutFormat.length) {
    throw new Error("Following selectors have no specified format: " + selectorsWithoutFormat.map((s2) => `\`${s2.selector}\``).join(", "));
  }
  const picker = new selderee.DecisionTree(uniqueSelectors.map((s2) => [s2.selector, s2])).build(hp2Builder);
  const baseSelectorsPicker = new selderee.DecisionTree(options.baseElements.selectors.map((s2, i) => [s2, i + 1])).build(hp2Builder);
  function findBaseElements(dom) {
    return findBases(dom, options, baseSelectorsPicker);
  }
  const limitedWalk = limitedDepthRecursive(options.limits.maxDepth, recursiveWalk, function(dom, builder) {
    builder.addInline(options.limits.ellipsis || "");
  });
  return function(html) {
    return process(html, options, picker, findBaseElements, limitedWalk);
  };
}
function process(html, options, picker, findBaseElements, walk) {
  const maxInputLength = options.limits.maxInputLength;
  if (maxInputLength && html && html.length > maxInputLength) {
    console.warn(`Input length ${html.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`);
    html = html.substring(0, maxInputLength);
  }
  const handler = new htmlparser.DomHandler();
  new htmlparser.Parser(handler, { decodeEntities: false }).parseComplete(html);
  const bases = findBaseElements(handler.dom);
  const builder = new BlockTextBuilder(options, picker);
  walk(bases, builder);
  return builder.toString();
}
function convert(html, options = {}) {
  return compile(options)(html);
}
function handleDeprecatedOptions(options) {
  const selectorDefinitions = options.selectors;
  if (options.tags) {
    const tagDefinitions = Object.entries(options.tags).map(([selector, definition]) => __spreadProps(__spreadValues({}, definition), { selector: selector || "*" }));
    selectorDefinitions.push(...tagDefinitions);
  }
  function copyFormatterOption(source, format, target2) {
    if (options[source] === void 0) {
      return;
    }
    for (const definition of selectorDefinitions) {
      if (definition.format === format) {
        set(definition, ["options", target2], options[source]);
      }
    }
  }
  copyFormatterOption("hideLinkHrefIfSameAsText", "anchor", "hideLinkHrefIfSameAsText");
  copyFormatterOption("ignoreHref", "anchor", "ignoreHref");
  copyFormatterOption("linkHrefBaseUrl", "anchor", "baseUrl");
  copyFormatterOption("noAnchorUrl", "anchor", "noAnchorUrl");
  copyFormatterOption("noLinkBrackets", "anchor", "noLinkBrackets");
  copyFormatterOption("linkHrefBaseUrl", "image", "baseUrl");
  copyFormatterOption("unorderedListItemPrefix", "unorderedList", "itemPrefix");
  copyFormatterOption("uppercaseHeadings", "heading", "uppercase");
  copyFormatterOption("uppercaseHeadings", "table", "uppercaseHeadings");
  copyFormatterOption("uppercaseHeadings", "dataTable", "uppercaseHeadings");
  if (options["ignoreImage"]) {
    for (const definition of selectorDefinitions) {
      if (definition.format === "image") {
        definition.format = "skip";
      }
    }
  }
  if (options["singleNewLineParagraphs"]) {
    for (const definition of selectorDefinitions) {
      if (definition.format === "paragraph" || definition.format === "pre") {
        set(definition, ["options", "leadingLineBreaks"], 1);
        set(definition, ["options", "trailingLineBreaks"], 1);
      }
    }
  }
  if (options["baseElement"]) {
    const baseElement = options["baseElement"];
    set(options, ["baseElements", "selectors"], Array.isArray(baseElement) ? baseElement : [baseElement]);
  }
  if (options["returnDomByDefault"] !== void 0) {
    set(options, ["baseElements", "returnDomByDefault"], options["returnDomByDefault"]);
  }
}
function findBases(dom, options, baseSelectorsPicker) {
  const results = [];
  function recursiveWalk2(walk, dom2) {
    dom2 = dom2.slice(0, options.limits.maxChildNodes);
    for (const elem of dom2) {
      if (elem.type !== "tag") {
        continue;
      }
      const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
      if (pickedSelectorIndex > 0) {
        results.push({ selectorIndex: pickedSelectorIndex, element: elem });
      } else if (elem.children) {
        walk(elem.children);
      }
      if (results.length >= options.limits.maxBaseElements) {
        return;
      }
    }
  }
  const limitedWalk = limitedDepthRecursive(options.limits.maxDepth, recursiveWalk2);
  limitedWalk(dom);
  if (options.baseElements.orderBy !== "occurrence") {
    results.sort((a, b2) => a.selectorIndex - b2.selectorIndex);
  }
  return options.baseElements.returnDomByDefault && results.length === 0 ? dom : results.map((x2) => x2.element);
}
function recursiveWalk(walk, dom, builder) {
  if (!dom) {
    return;
  }
  const options = builder.options;
  const tooManyChildNodes = dom.length > options.limits.maxChildNodes;
  if (tooManyChildNodes) {
    dom = dom.slice(0, options.limits.maxChildNodes);
    dom.push({
      data: options.limits.ellipsis,
      type: "text"
    });
  }
  for (const elem of dom) {
    switch (elem.type) {
      case "text": {
        builder.addInline(he.decode(elem.data, options.decodeOptions));
        break;
      }
      case "tag": {
        const tagDefinition = builder.picker.pick1(elem);
        const format = options.formatters[tagDefinition.format];
        format(elem, walk, builder, tagDefinition.options || {});
        break;
      }
    }
  }
  return;
}
const fromString = (html, options = {}) => convert(html, options);
var htmlToText$1 = {
  compile,
  convert,
  fromString,
  htmlToText: convert
};
var htmlToText = htmlToText$1;
var lodash_truncate = { exports: {} };
(function(module, exports) {
  var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
  var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
  var regexpTag = "[object RegExp]", symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reFlags = /\w*$/;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23", rsComboSymbolsRange = "\\u20d0-\\u20f0", rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
  var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
  var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
  var freeParseInt = parseInt;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      return freeProcess && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
  var asciiSize = baseProperty("length");
  function asciiToArray(string) {
    return string.split("");
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      result++;
    }
    return result;
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol2 = root.Symbol;
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseIsRegExp(value) {
    return isObject(value) && objectToString.call(value) == regexpTag;
  }
  function baseSlice(array, start, end) {
    var index2 = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index2 < length) {
      result[index2] = array[index2 + start];
    }
    return result;
  }
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === void 0 ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function truncate2(string, options) {
    var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
    if (isObject(options)) {
      var separator = "separator" in options ? options.separator : separator;
      length = "length" in options ? toInteger(options.length) : length;
      omission = "omission" in options ? baseToString(options.omission) : omission;
    }
    string = toString(string);
    var strLength = string.length;
    if (hasUnicode(string)) {
      var strSymbols = stringToArray(string);
      strLength = strSymbols.length;
    }
    if (length >= strLength) {
      return string;
    }
    var end = length - stringSize(omission);
    if (end < 1) {
      return omission;
    }
    var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
    if (separator === void 0) {
      return result + omission;
    }
    if (strSymbols) {
      end += result.length - end;
    }
    if (isRegExp(separator)) {
      if (string.slice(end).search(separator)) {
        var match2, substring = result;
        if (!separator.global) {
          separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g");
        }
        separator.lastIndex = 0;
        while (match2 = separator.exec(substring)) {
          var newEnd = match2.index;
        }
        result = result.slice(0, newEnd === void 0 ? end : newEnd);
      }
    } else if (string.indexOf(baseToString(separator), end) != end) {
      var index2 = result.lastIndexOf(separator);
      if (index2 > -1) {
        result = result.slice(0, index2);
      }
    }
    return result + omission;
  }
  module.exports = truncate2;
})(lodash_truncate, lodash_truncate.exports);
var truncate = lodash_truncate.exports;
function useLocalstorage(key, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }
  var _a = useState(getValueFromLocalStorage()), value = _a[0], setValue = _a[1];
  function init() {
    var valueLoadedFromLocalStorage = getValueFromLocalStorage();
    if (valueLoadedFromLocalStorage === null || valueLoadedFromLocalStorage === "null") {
      set2(defaultValue);
    }
  }
  function getValueFromLocalStorage() {
    if (typeof localStorage === "undefined") {
      return null;
    }
    var storedValue = localStorage.getItem(key) || "null";
    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(error);
    }
    return storedValue;
  }
  function saveValueToLocalStorage(valueToSet) {
    if (typeof localStorage === "undefined") {
      return null;
    }
    return localStorage.setItem(key, JSON.stringify(valueToSet));
  }
  var set2 = useCallback(function(newValue) {
    setValue(newValue);
    saveValueToLocalStorage(newValue);
  }, []);
  var listen = useCallback(function(event) {
    if (event.storageArea === localStorage && event.key === key) {
      setValue(event.newValue);
    }
  }, []);
  var remove = useCallback(function() {
    set2(null);
    if (typeof localStorage === "undefined") {
      return false;
    }
    localStorage.removeItem(key);
  }, [key]);
  useEffect(function() {
    init();
  }, []);
  useEffect(function() {
    window.addEventListener("storage", listen);
    return function() {
      window.removeEventListener("storage", listen);
    };
  }, []);
  var handler = Object.assign([value, set2, remove], {
    value,
    remove,
    set: set2
  });
  return handler;
}
function ChangelogFeed(props) {
  const { feed } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full h-auto overflow-hidden overflow-y-auto grid grid-cols-1 gap-0 divide-y divide-gray-100 bg-white p-0"
  }, feed ? feed.map((item) => {
    const contentText = htmlToText.htmlToText(item.content);
    return /* @__PURE__ */ React.createElement("a", {
      className: "w-full h-32 overflow-hidden overflow-ellipsis flex flex-col items-start justify-start p-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
      href: `${props.baseUrl}/${item.id}`,
      key: item.id,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "w-full h-auto flex items-center justify-between mb-1"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "w-4/6 h-auto overflow-ellipsis overflow-hidden text-md font-medium text-gray-900"
    }, truncate(item.title, { length: 40 })), /* @__PURE__ */ React.createElement("span", {
      className: "w-auto h-auto inline-flex items-center justify-center px-2 py-1 rounded-full text-white text-xs",
      style: {
        backgroundColor: getColorForType("Tag")
      }
    }, item.type || "Tag")), /* @__PURE__ */ React.createElement("p", {
      className: "text-xs text-gray-500"
    }, formatDistance(new Date(item.published_at), new Date(), { addSuffix: true })), /* @__PURE__ */ React.createElement("p", {
      className: "mt-2 overflow-ellipsis overflow-hidden text-sm text-gray-900"
    }, truncate(contentText, { length: 80 })));
  }) : /* @__PURE__ */ React.createElement("span", null, "Error!"));
}
function Changelog(props) {
  const { feed, isLoading } = useChangelogFeed(props == null ? void 0 : props.baseUrl, props == null ? void 0 : props.userId);
  const { value, set: set2 } = useLocalstorage("heraldLatestUpdate");
  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    if (feed && feed[0].published_at !== value) {
      set2(feed[0].published_at);
      setShowBadge(true);
    }
  }, [feed]);
  return /* @__PURE__ */ React.createElement(Popover, {
    className: "relative"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "relative inline-flex"
  }, /* @__PURE__ */ React.createElement(Popover.Button, {
    "aria-label": "Changelog Button",
    className: `${open ? "" : "text-opacity-90"} text-gray-500 group bg-orange-700 p-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`
  }, props.icon || props.text), showBadge ? /* @__PURE__ */ React.createElement("span", {
    className: "flex absolute h-2 w-2 top-0 right-0"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "relative inline-flex rounded-full h-2 w-2 bg-red-500"
  })) : null), /* @__PURE__ */ React.createElement(Transition, {
    as: Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-1"
  }, /* @__PURE__ */ React.createElement(Popover.Panel, {
    className: "absolute z-10 w-96 p-0 mt-4 transform translate-x-0 right-0 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
  }, isLoading && !feed ? /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full h-32 p-4 bg-white flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      borderTopColor: "transparent"
    },
    className: "w-8 h-8 border-2 border-green-500 border-solid rounded-full animate-spin"
  })) : /* @__PURE__ */ React.createElement(ChangelogFeed, {
    baseUrl: props.baseUrl,
    feed
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-0 bg-gray-50"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://useherald.com",
    className: "text-xs flow-root px-2 py-2 text-center transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
  }, "Powered by Herald")))))));
}
export { Banner, Changelog };
