var Tf = e => {
    throw TypeError(e)
}
;
var Jl = (e, t, n) => t.has(e) || Tf("Cannot " + n);
var k = (e, t, n) => (Jl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Tf("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , V = (e, t, n, r) => (Jl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Pe = (e, t, n) => (Jl(e, t, "access private method"),
n);
var Js = (e, t, n, r) => ({
    set _(o) {
        V(e, t, o, n)
    },
    get _() {
        return k(e, t, r)
    }
});
function Yy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function ch(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uh = {
    exports: {}
}
  , bi = {}
  , dh = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As = Symbol.for("react.element")
  , Gy = Symbol.for("react.portal")
  , Qy = Symbol.for("react.fragment")
  , Ky = Symbol.for("react.strict_mode")
  , Xy = Symbol.for("react.profiler")
  , Zy = Symbol.for("react.provider")
  , Jy = Symbol.for("react.context")
  , e0 = Symbol.for("react.forward_ref")
  , t0 = Symbol.for("react.suspense")
  , n0 = Symbol.for("react.memo")
  , r0 = Symbol.for("react.lazy")
  , _f = Symbol.iterator;
function o0(e) {
    return e === null || typeof e != "object" ? null : (e = _f && e[_f] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , mh = Object.assign
  , ph = {};
function go(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ph,
    this.updater = n || fh
}
go.prototype.isReactComponent = {};
go.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
go.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function hh() {}
hh.prototype = go.prototype;
function id(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ph,
    this.updater = n || fh
}
var ld = id.prototype = new hh;
ld.constructor = id;
mh(ld, go.prototype);
ld.isPureReactComponent = !0;
var Af = Array.isArray
  , gh = Object.prototype.hasOwnProperty
  , cd = {
    current: null
}
  , vh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xh(e, t, n) {
    var r, o = {}, s = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            gh.call(t, r) && !vh.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var c = Array(l), u = 0; u < l; u++)
            c[u] = arguments[u + 2];
        o.children = c
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: As,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: cd.current
    }
}
function s0(e, t) {
    return {
        $$typeof: As,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ud(e) {
    return typeof e == "object" && e !== null && e.$$typeof === As
}
function a0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Lf = /\/+/g;
function ec(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? a0("" + e.key) : t.toString(36)
}
function Ca(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (s) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case As:
            case Gy:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + ec(a, 0) : r,
        Af(o) ? (n = "",
        e != null && (n = e.replace(Lf, "$&/") + "/"),
        Ca(o, t, n, "", function(u) {
            return u
        })) : o != null && (ud(o) && (o = s0(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Lf, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Af(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var c = r + ec(s, l);
            a += Ca(s, t, n, c, o)
        }
    else if (c = o0(e),
    typeof c == "function")
        for (e = c.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            c = r + ec(s, l++),
            a += Ca(s, t, n, c, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function ea(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ca(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function i0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Fe = {
    current: null
}
  , ka = {
    transition: null
}
  , l0 = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: ka,
    ReactCurrentOwner: cd
};
function yh() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: ea,
    forEach: function(e, t, n) {
        ea(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ea(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ea(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ud(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = go;
Q.Fragment = Qy;
Q.Profiler = Xy;
Q.PureComponent = id;
Q.StrictMode = Ky;
Q.Suspense = t0;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0;
Q.act = yh;
Q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = mh({}, e.props)
      , o = e.key
      , s = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        a = cd.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (c in t)
            gh.call(t, c) && !vh.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1)
        r.children = n;
    else if (1 < c) {
        l = Array(c);
        for (var u = 0; u < c; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: As,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
;
Q.createContext = function(e) {
    return e = {
        $$typeof: Jy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Zy,
        _context: e
    },
    e.Consumer = e
}
;
Q.createElement = xh;
Q.createFactory = function(e) {
    var t = xh.bind(null, e);
    return t.type = e,
    t
}
;
Q.createRef = function() {
    return {
        current: null
    }
}
;
Q.forwardRef = function(e) {
    return {
        $$typeof: e0,
        render: e
    }
}
;
Q.isValidElement = ud;
Q.lazy = function(e) {
    return {
        $$typeof: r0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: i0
    }
}
;
Q.memo = function(e, t) {
    return {
        $$typeof: n0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Q.startTransition = function(e) {
    var t = ka.transition;
    ka.transition = {};
    try {
        e()
    } finally {
        ka.transition = t
    }
}
;
Q.unstable_act = yh;
Q.useCallback = function(e, t) {
    return Fe.current.useCallback(e, t)
}
;
Q.useContext = function(e) {
    return Fe.current.useContext(e)
}
;
Q.useDebugValue = function() {}
;
Q.useDeferredValue = function(e) {
    return Fe.current.useDeferredValue(e)
}
;
Q.useEffect = function(e, t) {
    return Fe.current.useEffect(e, t)
}
;
Q.useId = function() {
    return Fe.current.useId()
}
;
Q.useImperativeHandle = function(e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
}
;
Q.useInsertionEffect = function(e, t) {
    return Fe.current.useInsertionEffect(e, t)
}
;
Q.useLayoutEffect = function(e, t) {
    return Fe.current.useLayoutEffect(e, t)
}
;
Q.useMemo = function(e, t) {
    return Fe.current.useMemo(e, t)
}
;
Q.useReducer = function(e, t, n) {
    return Fe.current.useReducer(e, t, n)
}
;
Q.useRef = function(e) {
    return Fe.current.useRef(e)
}
;
Q.useState = function(e) {
    return Fe.current.useState(e)
}
;
Q.useSyncExternalStore = function(e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
}
;
Q.useTransition = function() {
    return Fe.current.useTransition()
}
;
Q.version = "18.3.1";
dh.exports = Q;
var m = dh.exports;
const L = ch(m)
  , dd = Yy({
    __proto__: null,
    default: L
}, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c0 = m
  , u0 = Symbol.for("react.element")
  , d0 = Symbol.for("react.fragment")
  , f0 = Object.prototype.hasOwnProperty
  , m0 = c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , p0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function wh(e, t, n) {
    var r, o = {}, s = null, a = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        f0.call(t, r) && !p0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: u0,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: m0.current
    }
}
bi.Fragment = d0;
bi.jsx = wh;
bi.jsxs = wh;
uh.exports = bi;
var i = uh.exports
  , bh = {
    exports: {}
}
  , tt = {}
  , Nh = {
    exports: {}
}
  , Sh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var M = P.length;
        P.push(T);
        e: for (; 0 < M; ) {
            var W = M - 1 >>> 1
              , I = P[W];
            if (0 < o(I, T))
                P[W] = T,
                P[M] = I,
                M = W;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , M = P.pop();
        if (M !== T) {
            P[0] = M;
            e: for (var W = 0, I = P.length, G = I >>> 1; W < G; ) {
                var X = 2 * (W + 1) - 1
                  , ge = P[X]
                  , ke = X + 1
                  , ee = P[ke];
                if (0 > o(ge, M))
                    ke < I && 0 > o(ee, ge) ? (P[W] = ee,
                    P[ke] = M,
                    W = ke) : (P[W] = ge,
                    P[X] = M,
                    W = X);
                else if (ke < I && 0 > o(ee, M))
                    P[W] = ee,
                    P[ke] = M,
                    W = ke;
                else
                    break e
            }
        }
        return T
    }
    function o(P, T) {
        var M = P.sortIndex - T.sortIndex;
        return M !== 0 ? M : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var a = Date
          , l = a.now();
        e.unstable_now = function() {
            return a.now() - l
        }
    }
    var c = []
      , u = []
      , d = 1
      , f = null
      , v = 3
      , p = !1
      , b = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , x = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= P)
                r(u),
                T.sortIndex = T.expirationTime,
                t(c, T);
            else
                break;
            T = n(u)
        }
    }
    function S(P) {
        if (g = !1,
        y(P),
        !b)
            if (n(c) !== null)
                b = !0,
                F(j);
            else {
                var T = n(u);
                T !== null && H(S, T.startTime - P)
            }
    }
    function j(P, T) {
        b = !1,
        g && (g = !1,
        x(E),
        E = -1),
        p = !0;
        var M = v;
        try {
            for (y(T),
            f = n(c); f !== null && (!(f.expirationTime > T) || P && !$()); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null,
                    v = f.priorityLevel;
                    var I = W(f.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof I == "function" ? f.callback = I : f === n(c) && r(c),
                    y(T)
                } else
                    r(c);
                f = n(c)
            }
            if (f !== null)
                var G = !0;
            else {
                var X = n(u);
                X !== null && H(S, X.startTime - T),
                G = !1
            }
            return G
        } finally {
            f = null,
            v = M,
            p = !1
        }
    }
    var C = !1
      , N = null
      , E = -1
      , R = 5
      , A = -1;
    function $() {
        return !(e.unstable_now() - A < R)
    }
    function z() {
        if (N !== null) {
            var P = e.unstable_now();
            A = P;
            var T = !0;
            try {
                T = N(!0, P)
            } finally {
                T ? Y() : (C = !1,
                N = null)
            }
        } else
            C = !1
    }
    var Y;
    if (typeof h == "function")
        Y = function() {
            h(z)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , K = D.port2;
        D.port1.onmessage = z,
        Y = function() {
            K.postMessage(null)
        }
    } else
        Y = function() {
            w(z, 0)
        }
        ;
    function F(P) {
        N = P,
        C || (C = !0,
        Y())
    }
    function H(P, T) {
        E = w(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || p || (b = !0,
        F(j))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return v
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(c)
    }
    ,
    e.unstable_next = function(P) {
        switch (v) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = v
        }
        var M = v;
        v = T;
        try {
            return P()
        } finally {
            v = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var M = v;
        v = P;
        try {
            return T()
        } finally {
            v = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, T, M) {
        var W = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? W + M : W) : M = W,
        P) {
        case 1:
            var I = -1;
            break;
        case 2:
            I = 250;
            break;
        case 5:
            I = 1073741823;
            break;
        case 4:
            I = 1e4;
            break;
        default:
            I = 5e3
        }
        return I = M + I,
        P = {
            id: d++,
            callback: T,
            priorityLevel: P,
            startTime: M,
            expirationTime: I,
            sortIndex: -1
        },
        M > W ? (P.sortIndex = M,
        t(u, P),
        n(c) === null && P === n(u) && (g ? (x(E),
        E = -1) : g = !0,
        H(S, M - W))) : (P.sortIndex = I,
        t(c, P),
        b || p || (b = !0,
        F(j))),
        P
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(P) {
        var T = v;
        return function() {
            var M = v;
            v = T;
            try {
                return P.apply(this, arguments)
            } finally {
                v = M
            }
        }
    }
}
)(Sh);
Nh.exports = Sh;
var h0 = Nh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0 = m
  , et = h0;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var jh = new Set
  , as = {};
function yr(e, t) {
    ao(e, t),
    ao(e + "Capture", t)
}
function ao(e, t) {
    for (as[e] = t,
    e = 0; e < t.length; e++)
        jh.add(t[e])
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , eu = Object.prototype.hasOwnProperty
  , v0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Df = {}
  , Mf = {};
function x0(e) {
    return eu.call(Mf, e) ? !0 : eu.call(Df, e) ? !1 : v0.test(e) ? Mf[e] = !0 : (Df[e] = !0,
    !1)
}
function y0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function w0(e, t, n, r) {
    if (t === null || typeof t > "u" || y0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, o, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = a
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var fd = /[\-:]([a-z])/g;
function md(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(fd, md);
    Ce[t] = new Be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(fd, md);
    Ce[t] = new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(fd, md);
    Ce[t] = new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function pd(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w0(t, n, o, r) && (n = null),
    r || o === null ? x0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var an = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ta = Symbol.for("react.element")
  , _r = Symbol.for("react.portal")
  , Ar = Symbol.for("react.fragment")
  , hd = Symbol.for("react.strict_mode")
  , tu = Symbol.for("react.profiler")
  , Eh = Symbol.for("react.provider")
  , Ch = Symbol.for("react.context")
  , gd = Symbol.for("react.forward_ref")
  , nu = Symbol.for("react.suspense")
  , ru = Symbol.for("react.suspense_list")
  , vd = Symbol.for("react.memo")
  , yn = Symbol.for("react.lazy")
  , kh = Symbol.for("react.offscreen")
  , Of = Symbol.iterator;
function Ao(e) {
    return e === null || typeof e != "object" ? null : (e = Of && e[Of] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fe = Object.assign, tc;
function qo(e) {
    if (tc === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            tc = t && t[1] || ""
        }
    return `
` + tc + e
}
var nc = !1;
function rc(e, t) {
    if (!e || nc)
        return "";
    nc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, l = s.length - 1; 1 <= a && 0 <= l && o[a] !== s[l]; )
                l--;
            for (; 1 <= a && 0 <= l; a--,
            l--)
                if (o[a] !== s[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if (a--,
                            l--,
                            0 > l || o[a] !== s[l]) {
                                var c = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)),
                                c
                            }
                        while (1 <= a && 0 <= l);
                    break
                }
        }
    } finally {
        nc = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? qo(e) : ""
}
function b0(e) {
    switch (e.tag) {
    case 5:
        return qo(e.type);
    case 16:
        return qo("Lazy");
    case 13:
        return qo("Suspense");
    case 19:
        return qo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = rc(e.type, !1),
        e;
    case 11:
        return e = rc(e.type.render, !1),
        e;
    case 1:
        return e = rc(e.type, !0),
        e;
    default:
        return ""
    }
}
function ou(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ar:
        return "Fragment";
    case _r:
        return "Portal";
    case tu:
        return "Profiler";
    case hd:
        return "StrictMode";
    case nu:
        return "Suspense";
    case ru:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ch:
            return (e.displayName || "Context") + ".Consumer";
        case Eh:
            return (e._context.displayName || "Context") + ".Provider";
        case gd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case vd:
            return t = e.displayName || null,
            t !== null ? t : ou(e.type) || "Memo";
        case yn:
            t = e._payload,
            e = e._init;
            try {
                return ou(e(t))
            } catch {}
        }
    return null
}
function N0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ou(t);
    case 8:
        return t === hd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function $n(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ph(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function S0(e) {
    var t = Ph(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                s.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function na(e) {
    e._valueTracker || (e._valueTracker = S0(e))
}
function Rh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ph(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Va(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function su(e, t) {
    var n = t.checked;
    return fe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function zf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = $n(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Th(e, t) {
    t = t.checked,
    t != null && pd(e, "checked", t, !1)
}
function au(e, t) {
    Th(e, t);
    var n = $n(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && iu(e, t.type, $n(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function If(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function iu(e, t, n) {
    (t !== "number" || Va(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Yo = Array.isArray;
function Vr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + $n(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function lu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return fe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function $f(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (Yo(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: $n(n)
    }
}
function _h(e, t) {
    var n = $n(t.value)
      , r = $n(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ff(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ah(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function cu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ah(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ra, Lh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ra = ra || document.createElement("div"),
        ra.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ra.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function is(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ko = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , j0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ko).forEach(function(e) {
    j0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ko[t] = Ko[e]
    })
});
function Dh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ko.hasOwnProperty(e) && Ko[e] ? ("" + t).trim() : t + "px"
}
function Mh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Dh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var E0 = fe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function uu(e, t) {
    if (t) {
        if (E0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function du(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var fu = null;
function xd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var mu = null
  , Hr = null
  , Wr = null;
function Bf(e) {
    if (e = Ms(e)) {
        if (typeof mu != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = Ci(t),
        mu(e.stateNode, e.type, t))
    }
}
function Oh(e) {
    Hr ? Wr ? Wr.push(e) : Wr = [e] : Hr = e
}
function zh() {
    if (Hr) {
        var e = Hr
          , t = Wr;
        if (Wr = Hr = null,
        Bf(e),
        t)
            for (e = 0; e < t.length; e++)
                Bf(t[e])
    }
}
function Ih(e, t) {
    return e(t)
}
function $h() {}
var oc = !1;
function Fh(e, t, n) {
    if (oc)
        return e(t, n);
    oc = !0;
    try {
        return Ih(e, t, n)
    } finally {
        oc = !1,
        (Hr !== null || Wr !== null) && ($h(),
        zh())
    }
}
function ls(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ci(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var pu = !1;
if (Jt)
    try {
        var Lo = {};
        Object.defineProperty(Lo, "passive", {
            get: function() {
                pu = !0
            }
        }),
        window.addEventListener("test", Lo, Lo),
        window.removeEventListener("test", Lo, Lo)
    } catch {
        pu = !1
    }
function C0(e, t, n, r, o, s, a, l, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Xo = !1
  , Ha = null
  , Wa = !1
  , hu = null
  , k0 = {
    onError: function(e) {
        Xo = !0,
        Ha = e
    }
};
function P0(e, t, n, r, o, s, a, l, c) {
    Xo = !1,
    Ha = null,
    C0.apply(k0, arguments)
}
function R0(e, t, n, r, o, s, a, l, c) {
    if (P0.apply(this, arguments),
    Xo) {
        if (Xo) {
            var u = Ha;
            Xo = !1,
            Ha = null
        } else
            throw Error(_(198));
        Wa || (Wa = !0,
        hu = u)
    }
}
function wr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Bh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Uf(e) {
    if (wr(e) !== e)
        throw Error(_(188))
}
function T0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = wr(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Uf(o),
                    e;
                if (s === r)
                    return Uf(o),
                    t;
                s = s.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var a = !1, l = o.child; l; ) {
                if (l === n) {
                    a = !0,
                    n = o,
                    r = s;
                    break
                }
                if (l === r) {
                    a = !0,
                    r = o,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!a) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        a = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (l === r) {
                        a = !0,
                        r = s,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!a)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function Uh(e) {
    return e = T0(e),
    e !== null ? Vh(e) : null
}
function Vh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Vh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Hh = et.unstable_scheduleCallback
  , Vf = et.unstable_cancelCallback
  , _0 = et.unstable_shouldYield
  , A0 = et.unstable_requestPaint
  , he = et.unstable_now
  , L0 = et.unstable_getCurrentPriorityLevel
  , yd = et.unstable_ImmediatePriority
  , Wh = et.unstable_UserBlockingPriority
  , qa = et.unstable_NormalPriority
  , D0 = et.unstable_LowPriority
  , qh = et.unstable_IdlePriority
  , Ni = null
  , $t = null;
function M0(e) {
    if ($t && typeof $t.onCommitFiberRoot == "function")
        try {
            $t.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Et = Math.clz32 ? Math.clz32 : I0
  , O0 = Math.log
  , z0 = Math.LN2;
function I0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (O0(e) / z0 | 0) | 0
}
var oa = 64
  , sa = 4194304;
function Go(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ya(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var l = a & ~o;
        l !== 0 ? r = Go(l) : (s &= a,
        s !== 0 && (r = Go(s)))
    } else
        a = n & ~o,
        a !== 0 ? r = Go(a) : s !== 0 && (r = Go(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Et(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function $0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function F0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Et(s)
          , l = 1 << a
          , c = o[a];
        c === -1 ? (!(l & n) || l & r) && (o[a] = $0(l, t)) : c <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function gu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Yh() {
    var e = oa;
    return oa <<= 1,
    !(oa & 4194240) && (oa = 64),
    e
}
function sc(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ls(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Et(t),
    e[t] = n
}
function B0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Et(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function wd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Et(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var te = 0;
function Gh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Qh, bd, Kh, Xh, Zh, vu = !1, aa = [], _n = null, An = null, Ln = null, cs = new Map, us = new Map, bn = [], U0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        _n = null;
        break;
    case "dragenter":
    case "dragleave":
        An = null;
        break;
    case "mouseover":
    case "mouseout":
        Ln = null;
        break;
    case "pointerover":
    case "pointerout":
        cs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        us.delete(t.pointerId)
    }
}
function Do(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Ms(t),
    t !== null && bd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function V0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return _n = Do(_n, e, t, n, r, o),
        !0;
    case "dragenter":
        return An = Do(An, e, t, n, r, o),
        !0;
    case "mouseover":
        return Ln = Do(Ln, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return cs.set(s, Do(cs.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        us.set(s, Do(us.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Jh(e) {
    var t = er(e.target);
    if (t !== null) {
        var n = wr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Bh(n),
                t !== null) {
                    e.blockedOn = t,
                    Zh(e.priority, function() {
                        Kh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Pa(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            fu = r,
            n.target.dispatchEvent(r),
            fu = null
        } else
            return t = Ms(n),
            t !== null && bd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Wf(e, t, n) {
    Pa(e) && n.delete(t)
}
function H0() {
    vu = !1,
    _n !== null && Pa(_n) && (_n = null),
    An !== null && Pa(An) && (An = null),
    Ln !== null && Pa(Ln) && (Ln = null),
    cs.forEach(Wf),
    us.forEach(Wf)
}
function Mo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    vu || (vu = !0,
    et.unstable_scheduleCallback(et.unstable_NormalPriority, H0)))
}
function ds(e) {
    function t(o) {
        return Mo(o, e)
    }
    if (0 < aa.length) {
        Mo(aa[0], e);
        for (var n = 1; n < aa.length; n++) {
            var r = aa[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (_n !== null && Mo(_n, e),
    An !== null && Mo(An, e),
    Ln !== null && Mo(Ln, e),
    cs.forEach(t),
    us.forEach(t),
    n = 0; n < bn.length; n++)
        r = bn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < bn.length && (n = bn[0],
    n.blockedOn === null); )
        Jh(n),
        n.blockedOn === null && bn.shift()
}
var qr = an.ReactCurrentBatchConfig
  , Ga = !0;
function W0(e, t, n, r) {
    var o = te
      , s = qr.transition;
    qr.transition = null;
    try {
        te = 1,
        Nd(e, t, n, r)
    } finally {
        te = o,
        qr.transition = s
    }
}
function q0(e, t, n, r) {
    var o = te
      , s = qr.transition;
    qr.transition = null;
    try {
        te = 4,
        Nd(e, t, n, r)
    } finally {
        te = o,
        qr.transition = s
    }
}
function Nd(e, t, n, r) {
    if (Ga) {
        var o = xu(e, t, n, r);
        if (o === null)
            hc(e, t, r, Qa, n),
            Hf(e, r);
        else if (V0(o, e, t, n, r))
            r.stopPropagation();
        else if (Hf(e, r),
        t & 4 && -1 < U0.indexOf(e)) {
            for (; o !== null; ) {
                var s = Ms(o);
                if (s !== null && Qh(s),
                s = xu(e, t, n, r),
                s === null && hc(e, t, r, Qa, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            hc(e, t, r, null, n)
    }
}
var Qa = null;
function xu(e, t, n, r) {
    if (Qa = null,
    e = xd(r),
    e = er(e),
    e !== null)
        if (t = wr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Bh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Qa = e,
    null
}
function eg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (L0()) {
        case yd:
            return 1;
        case Wh:
            return 4;
        case qa:
        case D0:
            return 16;
        case qh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Pn = null
  , Sd = null
  , Ra = null;
function tg() {
    if (Ra)
        return Ra;
    var e, t = Sd, n = t.length, r, o = "value"in Pn ? Pn.value : Pn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++)
        ;
    return Ra = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ta(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ia() {
    return !0
}
function qf() {
    return !1
}
function nt(e) {
    function t(n, r, o, s, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = a,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ia : qf,
        this.isPropagationStopped = qf,
        this
    }
    return fe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ia)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ia)
        },
        persist: function() {},
        isPersistent: ia
    }),
    t
}
var vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, jd = nt(vo), Ds = fe({}, vo, {
    view: 0,
    detail: 0
}), Y0 = nt(Ds), ac, ic, Oo, Si = fe({}, Ds, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ed,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Oo && (Oo && e.type === "mousemove" ? (ac = e.screenX - Oo.screenX,
        ic = e.screenY - Oo.screenY) : ic = ac = 0,
        Oo = e),
        ac)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ic
    }
}), Yf = nt(Si), G0 = fe({}, Si, {
    dataTransfer: 0
}), Q0 = nt(G0), K0 = fe({}, Ds, {
    relatedTarget: 0
}), lc = nt(K0), X0 = fe({}, vo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Z0 = nt(X0), J0 = fe({}, vo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), ew = nt(J0), tw = fe({}, vo, {
    data: 0
}), Gf = nt(tw), nw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, rw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, ow = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function sw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ow[e]) ? !!t[e] : !1
}
function Ed() {
    return sw
}
var aw = fe({}, Ds, {
    key: function(e) {
        if (e.key) {
            var t = nw[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ta(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rw[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ed,
    charCode: function(e) {
        return e.type === "keypress" ? Ta(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ta(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , iw = nt(aw)
  , lw = fe({}, Si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Qf = nt(lw)
  , cw = fe({}, Ds, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ed
})
  , uw = nt(cw)
  , dw = fe({}, vo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , fw = nt(dw)
  , mw = fe({}, Si, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , pw = nt(mw)
  , hw = [9, 13, 27, 32]
  , Cd = Jt && "CompositionEvent"in window
  , Zo = null;
Jt && "documentMode"in document && (Zo = document.documentMode);
var gw = Jt && "TextEvent"in window && !Zo
  , ng = Jt && (!Cd || Zo && 8 < Zo && 11 >= Zo)
  , Kf = " "
  , Xf = !1;
function rg(e, t) {
    switch (e) {
    case "keyup":
        return hw.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function og(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Lr = !1;
function vw(e, t) {
    switch (e) {
    case "compositionend":
        return og(t);
    case "keypress":
        return t.which !== 32 ? null : (Xf = !0,
        Kf);
    case "textInput":
        return e = t.data,
        e === Kf && Xf ? null : e;
    default:
        return null
    }
}
function xw(e, t) {
    if (Lr)
        return e === "compositionend" || !Cd && rg(e, t) ? (e = tg(),
        Ra = Sd = Pn = null,
        Lr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ng && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var yw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Zf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yw[e.type] : t === "textarea"
}
function sg(e, t, n, r) {
    Oh(r),
    t = Ka(t, "onChange"),
    0 < t.length && (n = new jd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Jo = null
  , fs = null;
function ww(e) {
    gg(e, 0)
}
function ji(e) {
    var t = Or(e);
    if (Rh(t))
        return e
}
function bw(e, t) {
    if (e === "change")
        return t
}
var ag = !1;
if (Jt) {
    var cc;
    if (Jt) {
        var uc = "oninput"in document;
        if (!uc) {
            var Jf = document.createElement("div");
            Jf.setAttribute("oninput", "return;"),
            uc = typeof Jf.oninput == "function"
        }
        cc = uc
    } else
        cc = !1;
    ag = cc && (!document.documentMode || 9 < document.documentMode)
}
function em() {
    Jo && (Jo.detachEvent("onpropertychange", ig),
    fs = Jo = null)
}
function ig(e) {
    if (e.propertyName === "value" && ji(fs)) {
        var t = [];
        sg(t, fs, e, xd(e)),
        Fh(ww, t)
    }
}
function Nw(e, t, n) {
    e === "focusin" ? (em(),
    Jo = t,
    fs = n,
    Jo.attachEvent("onpropertychange", ig)) : e === "focusout" && em()
}
function Sw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ji(fs)
}
function jw(e, t) {
    if (e === "click")
        return ji(t)
}
function Ew(e, t) {
    if (e === "input" || e === "change")
        return ji(t)
}
function Cw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var kt = typeof Object.is == "function" ? Object.is : Cw;
function ms(e, t) {
    if (kt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!eu.call(t, o) || !kt(e[o], t[o]))
            return !1
    }
    return !0
}
function tm(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function nm(e, t) {
    var n = tm(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = tm(n)
    }
}
function lg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function cg() {
    for (var e = window, t = Va(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Va(e.document)
    }
    return t
}
function kd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kw(e) {
    var t = cg()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && lg(n.ownerDocument.documentElement, n)) {
        if (r !== null && kd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = nm(n, s);
                var a = nm(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Pw = Jt && "documentMode"in document && 11 >= document.documentMode
  , Dr = null
  , yu = null
  , es = null
  , wu = !1;
function rm(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wu || Dr == null || Dr !== Va(r) || (r = Dr,
    "selectionStart"in r && kd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    es && ms(es, r) || (es = r,
    r = Ka(yu, "onSelect"),
    0 < r.length && (t = new jd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Dr)))
}
function la(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Mr = {
    animationend: la("Animation", "AnimationEnd"),
    animationiteration: la("Animation", "AnimationIteration"),
    animationstart: la("Animation", "AnimationStart"),
    transitionend: la("Transition", "TransitionEnd")
}
  , dc = {}
  , ug = {};
Jt && (ug = document.createElement("div").style,
"AnimationEvent"in window || (delete Mr.animationend.animation,
delete Mr.animationiteration.animation,
delete Mr.animationstart.animation),
"TransitionEvent"in window || delete Mr.transitionend.transition);
function Ei(e) {
    if (dc[e])
        return dc[e];
    if (!Mr[e])
        return e;
    var t = Mr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ug)
            return dc[e] = t[n];
    return e
}
var dg = Ei("animationend")
  , fg = Ei("animationiteration")
  , mg = Ei("animationstart")
  , pg = Ei("transitionend")
  , hg = new Map
  , om = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vn(e, t) {
    hg.set(e, t),
    yr(t, [e])
}
for (var fc = 0; fc < om.length; fc++) {
    var mc = om[fc]
      , Rw = mc.toLowerCase()
      , Tw = mc[0].toUpperCase() + mc.slice(1);
    Vn(Rw, "on" + Tw)
}
Vn(dg, "onAnimationEnd");
Vn(fg, "onAnimationIteration");
Vn(mg, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(pg, "onTransitionEnd");
ao("onMouseEnter", ["mouseout", "mouseover"]);
ao("onMouseLeave", ["mouseout", "mouseover"]);
ao("onPointerEnter", ["pointerout", "pointerover"]);
ao("onPointerLeave", ["pointerout", "pointerover"]);
yr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , _w = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));
function sm(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    R0(r, t, void 0, e),
    e.currentTarget = null
}
function gg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var l = r[a]
                      , c = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    c !== s && o.isPropagationStopped())
                        break e;
                    sm(o, l, u),
                    s = c
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (l = r[a],
                    c = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    c !== s && o.isPropagationStopped())
                        break e;
                    sm(o, l, u),
                    s = c
                }
        }
    }
    if (Wa)
        throw e = hu,
        Wa = !1,
        hu = null,
        e
}
function se(e, t) {
    var n = t[Eu];
    n === void 0 && (n = t[Eu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (vg(t, e, 2, !1),
    n.add(r))
}
function pc(e, t, n) {
    var r = 0;
    t && (r |= 4),
    vg(n, e, r, t)
}
var ca = "_reactListening" + Math.random().toString(36).slice(2);
function ps(e) {
    if (!e[ca]) {
        e[ca] = !0,
        jh.forEach(function(n) {
            n !== "selectionchange" && (_w.has(n) || pc(n, !1, e),
            pc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ca] || (t[ca] = !0,
        pc("selectionchange", !1, t))
    }
}
function vg(e, t, n, r) {
    switch (eg(t)) {
    case 1:
        var o = W0;
        break;
    case 4:
        o = q0;
        break;
    default:
        o = Nd
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function hc(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var c = a.tag;
                        if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo,
                        c === o || c.nodeType === 8 && c.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; l !== null; ) {
                    if (a = er(l),
                    a === null)
                        return;
                    if (c = a.tag,
                    c === 5 || c === 6) {
                        r = s = a;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Fh(function() {
        var u = s
          , d = xd(n)
          , f = [];
        e: {
            var v = hg.get(e);
            if (v !== void 0) {
                var p = jd
                  , b = e;
                switch (e) {
                case "keypress":
                    if (Ta(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = iw;
                    break;
                case "focusin":
                    b = "focus",
                    p = lc;
                    break;
                case "focusout":
                    b = "blur",
                    p = lc;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = lc;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = Yf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = Q0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = uw;
                    break;
                case dg:
                case fg:
                case mg:
                    p = Z0;
                    break;
                case pg:
                    p = fw;
                    break;
                case "scroll":
                    p = Y0;
                    break;
                case "wheel":
                    p = pw;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = ew;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Qf
                }
                var g = (t & 4) !== 0
                  , w = !g && e === "scroll"
                  , x = g ? v !== null ? v + "Capture" : null : v;
                g = [];
                for (var h = u, y; h !== null; ) {
                    y = h;
                    var S = y.stateNode;
                    if (y.tag === 5 && S !== null && (y = S,
                    x !== null && (S = ls(h, x),
                    S != null && g.push(hs(h, S, y)))),
                    w)
                        break;
                    h = h.return
                }
                0 < g.length && (v = new p(v,b,null,n,d),
                f.push({
                    event: v,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                v && n !== fu && (b = n.relatedTarget || n.fromElement) && (er(b) || b[en]))
                    break e;
                if ((p || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window,
                p ? (b = n.relatedTarget || n.toElement,
                p = u,
                b = b ? er(b) : null,
                b !== null && (w = wr(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (p = null,
                b = u),
                p !== b)) {
                    if (g = Yf,
                    S = "onMouseLeave",
                    x = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Qf,
                    S = "onPointerLeave",
                    x = "onPointerEnter",
                    h = "pointer"),
                    w = p == null ? v : Or(p),
                    y = b == null ? v : Or(b),
                    v = new g(S,h + "leave",p,n,d),
                    v.target = w,
                    v.relatedTarget = y,
                    S = null,
                    er(d) === u && (g = new g(x,h + "enter",b,n,d),
                    g.target = y,
                    g.relatedTarget = w,
                    S = g),
                    w = S,
                    p && b)
                        t: {
                            for (g = p,
                            x = b,
                            h = 0,
                            y = g; y; y = kr(y))
                                h++;
                            for (y = 0,
                            S = x; S; S = kr(S))
                                y++;
                            for (; 0 < h - y; )
                                g = kr(g),
                                h--;
                            for (; 0 < y - h; )
                                x = kr(x),
                                y--;
                            for (; h--; ) {
                                if (g === x || x !== null && g === x.alternate)
                                    break t;
                                g = kr(g),
                                x = kr(x)
                            }
                            g = null
                        }
                    else
                        g = null;
                    p !== null && am(f, v, p, g, !1),
                    b !== null && w !== null && am(f, w, b, g, !0)
                }
            }
            e: {
                if (v = u ? Or(u) : window,
                p = v.nodeName && v.nodeName.toLowerCase(),
                p === "select" || p === "input" && v.type === "file")
                    var j = bw;
                else if (Zf(v))
                    if (ag)
                        j = Ew;
                    else {
                        j = Sw;
                        var C = Nw
                    }
                else
                    (p = v.nodeName) && p.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (j = jw);
                if (j && (j = j(e, u))) {
                    sg(f, j, n, d);
                    break e
                }
                C && C(e, v, u),
                e === "focusout" && (C = v._wrapperState) && C.controlled && v.type === "number" && iu(v, "number", v.value)
            }
            switch (C = u ? Or(u) : window,
            e) {
            case "focusin":
                (Zf(C) || C.contentEditable === "true") && (Dr = C,
                yu = u,
                es = null);
                break;
            case "focusout":
                es = yu = Dr = null;
                break;
            case "mousedown":
                wu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                wu = !1,
                rm(f, n, d);
                break;
            case "selectionchange":
                if (Pw)
                    break;
            case "keydown":
            case "keyup":
                rm(f, n, d)
            }
            var N;
            if (Cd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                Lr ? rg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (ng && n.locale !== "ko" && (Lr || E !== "onCompositionStart" ? E === "onCompositionEnd" && Lr && (N = tg()) : (Pn = d,
            Sd = "value"in Pn ? Pn.value : Pn.textContent,
            Lr = !0)),
            C = Ka(u, E),
            0 < C.length && (E = new Gf(E,e,null,n,d),
            f.push({
                event: E,
                listeners: C
            }),
            N ? E.data = N : (N = og(n),
            N !== null && (E.data = N)))),
            (N = gw ? vw(e, n) : xw(e, n)) && (u = Ka(u, "onBeforeInput"),
            0 < u.length && (d = new Gf("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = N))
        }
        gg(f, t)
    })
}
function hs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ka(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = ls(e, n),
        s != null && r.unshift(hs(e, s, o)),
        s = ls(e, t),
        s != null && r.push(hs(e, s, o))),
        e = e.return
    }
    return r
}
function kr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function am(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var l = n
          , c = l.alternate
          , u = l.stateNode;
        if (c !== null && c === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (c = ls(n, s),
        c != null && a.unshift(hs(n, c, l))) : o || (c = ls(n, s),
        c != null && a.push(hs(n, c, l)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var Aw = /\r\n?/g
  , Lw = /\u0000|\uFFFD/g;
function im(e) {
    return (typeof e == "string" ? e : "" + e).replace(Aw, `
`).replace(Lw, "")
}
function ua(e, t, n) {
    if (t = im(t),
    im(e) !== t && n)
        throw Error(_(425))
}
function Xa() {}
var bu = null
  , Nu = null;
function Su(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ju = typeof setTimeout == "function" ? setTimeout : void 0
  , Dw = typeof clearTimeout == "function" ? clearTimeout : void 0
  , lm = typeof Promise == "function" ? Promise : void 0
  , Mw = typeof queueMicrotask == "function" ? queueMicrotask : typeof lm < "u" ? function(e) {
    return lm.resolve(null).then(e).catch(Ow)
}
: ju;
function Ow(e) {
    setTimeout(function() {
        throw e
    })
}
function gc(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    ds(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    ds(t)
}
function Dn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function cm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var xo = Math.random().toString(36).slice(2)
  , Ot = "__reactFiber$" + xo
  , gs = "__reactProps$" + xo
  , en = "__reactContainer$" + xo
  , Eu = "__reactEvents$" + xo
  , zw = "__reactListeners$" + xo
  , Iw = "__reactHandles$" + xo;
function er(e) {
    var t = e[Ot];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[en] || n[Ot]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = cm(e); e !== null; ) {
                    if (n = e[Ot])
                        return n;
                    e = cm(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ms(e) {
    return e = e[Ot] || e[en],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Or(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function Ci(e) {
    return e[gs] || null
}
var Cu = []
  , zr = -1;
function Hn(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > zr || (e.current = Cu[zr],
    Cu[zr] = null,
    zr--)
}
function re(e, t) {
    zr++,
    Cu[zr] = e.current,
    e.current = t
}
var Fn = {}
  , Le = Hn(Fn)
  , We = Hn(!1)
  , fr = Fn;
function io(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function qe(e) {
    return e = e.childContextTypes,
    e != null
}
function Za() {
    ae(We),
    ae(Le)
}
function um(e, t, n) {
    if (Le.current !== Fn)
        throw Error(_(168));
    re(Le, t),
    re(We, n)
}
function xg(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(_(108, N0(e) || "Unknown", o));
    return fe({}, n, r)
}
function Ja(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn,
    fr = Le.current,
    re(Le, e),
    re(We, We.current),
    !0
}
function dm(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = xg(e, t, fr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(We),
    ae(Le),
    re(Le, e)) : ae(We),
    re(We, n)
}
var Gt = null
  , ki = !1
  , vc = !1;
function yg(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}
function $w(e) {
    ki = !0,
    yg(e)
}
function Wn() {
    if (!vc && Gt !== null) {
        vc = !0;
        var e = 0
          , t = te;
        try {
            var n = Gt;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Gt = null,
            ki = !1
        } catch (o) {
            throw Gt !== null && (Gt = Gt.slice(e + 1)),
            Hh(yd, Wn),
            o
        } finally {
            te = t,
            vc = !1
        }
    }
    return null
}
var Ir = []
  , $r = 0
  , ei = null
  , ti = 0
  , it = []
  , lt = 0
  , mr = null
  , Kt = 1
  , Xt = "";
function Zn(e, t) {
    Ir[$r++] = ti,
    Ir[$r++] = ei,
    ei = e,
    ti = t
}
function wg(e, t, n) {
    it[lt++] = Kt,
    it[lt++] = Xt,
    it[lt++] = mr,
    mr = e;
    var r = Kt;
    e = Xt;
    var o = 32 - Et(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Et(t) + o;
    if (30 < s) {
        var a = o - o % 5;
        s = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        Kt = 1 << 32 - Et(t) + o | n << o | r,
        Xt = s + e
    } else
        Kt = 1 << s | n << o | r,
        Xt = e
}
function Pd(e) {
    e.return !== null && (Zn(e, 1),
    wg(e, 1, 0))
}
function Rd(e) {
    for (; e === ei; )
        ei = Ir[--$r],
        Ir[$r] = null,
        ti = Ir[--$r],
        Ir[$r] = null;
    for (; e === mr; )
        mr = it[--lt],
        it[lt] = null,
        Xt = it[--lt],
        it[lt] = null,
        Kt = it[--lt],
        it[lt] = null
}
var Ze = null
  , Xe = null
  , le = !1
  , jt = null;
function bg(e, t) {
    var n = ct(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function fm(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ze = e,
        Xe = Dn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ze = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = mr !== null ? {
            id: Kt,
            overflow: Xt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ct(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ze = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function ku(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Pu(e) {
    if (le) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!fm(e, t)) {
                if (ku(e))
                    throw Error(_(418));
                t = Dn(n.nextSibling);
                var r = Ze;
                t && fm(e, t) ? bg(r, n) : (e.flags = e.flags & -4097 | 2,
                le = !1,
                Ze = e)
            }
        } else {
            if (ku(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            le = !1,
            Ze = e
        }
    }
}
function mm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ze = e
}
function da(e) {
    if (e !== Ze)
        return !1;
    if (!le)
        return mm(e),
        le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Su(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (ku(e))
            throw Ng(),
            Error(_(418));
        for (; t; )
            bg(e, t),
            t = Dn(t.nextSibling)
    }
    if (mm(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = Dn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = Ze ? Dn(e.stateNode.nextSibling) : null;
    return !0
}
function Ng() {
    for (var e = Xe; e; )
        e = Dn(e.nextSibling)
}
function lo() {
    Xe = Ze = null,
    le = !1
}
function Td(e) {
    jt === null ? jt = [e] : jt.push(e)
}
var Fw = an.ReactCurrentBatchConfig;
function zo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
                var l = o.refs;
                a === null ? delete l[s] : l[s] = a
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function fa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function pm(e) {
    var t = e._init;
    return t(e._payload)
}
function Sg(e) {
    function t(x, h) {
        if (e) {
            var y = x.deletions;
            y === null ? (x.deletions = [h],
            x.flags |= 16) : y.push(h)
        }
    }
    function n(x, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(x, h),
            h = h.sibling;
        return null
    }
    function r(x, h) {
        for (x = new Map; h !== null; )
            h.key !== null ? x.set(h.key, h) : x.set(h.index, h),
            h = h.sibling;
        return x
    }
    function o(x, h) {
        return x = In(x, h),
        x.index = 0,
        x.sibling = null,
        x
    }
    function s(x, h, y) {
        return x.index = y,
        e ? (y = x.alternate,
        y !== null ? (y = y.index,
        y < h ? (x.flags |= 2,
        h) : y) : (x.flags |= 2,
        h)) : (x.flags |= 1048576,
        h)
    }
    function a(x) {
        return e && x.alternate === null && (x.flags |= 2),
        x
    }
    function l(x, h, y, S) {
        return h === null || h.tag !== 6 ? (h = jc(y, x.mode, S),
        h.return = x,
        h) : (h = o(h, y),
        h.return = x,
        h)
    }
    function c(x, h, y, S) {
        var j = y.type;
        return j === Ar ? d(x, h, y.props.children, S, y.key) : h !== null && (h.elementType === j || typeof j == "object" && j !== null && j.$$typeof === yn && pm(j) === h.type) ? (S = o(h, y.props),
        S.ref = zo(x, h, y),
        S.return = x,
        S) : (S = za(y.type, y.key, y.props, null, x.mode, S),
        S.ref = zo(x, h, y),
        S.return = x,
        S)
    }
    function u(x, h, y, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Ec(y, x.mode, S),
        h.return = x,
        h) : (h = o(h, y.children || []),
        h.return = x,
        h)
    }
    function d(x, h, y, S, j) {
        return h === null || h.tag !== 7 ? (h = ur(y, x.mode, S, j),
        h.return = x,
        h) : (h = o(h, y),
        h.return = x,
        h)
    }
    function f(x, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = jc("" + h, x.mode, y),
            h.return = x,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ta:
                return y = za(h.type, h.key, h.props, null, x.mode, y),
                y.ref = zo(x, null, h),
                y.return = x,
                y;
            case _r:
                return h = Ec(h, x.mode, y),
                h.return = x,
                h;
            case yn:
                var S = h._init;
                return f(x, S(h._payload), y)
            }
            if (Yo(h) || Ao(h))
                return h = ur(h, x.mode, y, null),
                h.return = x,
                h;
            fa(x, h)
        }
        return null
    }
    function v(x, h, y, S) {
        var j = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return j !== null ? null : l(x, h, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ta:
                return y.key === j ? c(x, h, y, S) : null;
            case _r:
                return y.key === j ? u(x, h, y, S) : null;
            case yn:
                return j = y._init,
                v(x, h, j(y._payload), S)
            }
            if (Yo(y) || Ao(y))
                return j !== null ? null : d(x, h, y, S, null);
            fa(x, y)
        }
        return null
    }
    function p(x, h, y, S, j) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return x = x.get(y) || null,
            l(h, x, "" + S, j);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case ta:
                return x = x.get(S.key === null ? y : S.key) || null,
                c(h, x, S, j);
            case _r:
                return x = x.get(S.key === null ? y : S.key) || null,
                u(h, x, S, j);
            case yn:
                var C = S._init;
                return p(x, h, y, C(S._payload), j)
            }
            if (Yo(S) || Ao(S))
                return x = x.get(y) || null,
                d(h, x, S, j, null);
            fa(h, S)
        }
        return null
    }
    function b(x, h, y, S) {
        for (var j = null, C = null, N = h, E = h = 0, R = null; N !== null && E < y.length; E++) {
            N.index > E ? (R = N,
            N = null) : R = N.sibling;
            var A = v(x, N, y[E], S);
            if (A === null) {
                N === null && (N = R);
                break
            }
            e && N && A.alternate === null && t(x, N),
            h = s(A, h, E),
            C === null ? j = A : C.sibling = A,
            C = A,
            N = R
        }
        if (E === y.length)
            return n(x, N),
            le && Zn(x, E),
            j;
        if (N === null) {
            for (; E < y.length; E++)
                N = f(x, y[E], S),
                N !== null && (h = s(N, h, E),
                C === null ? j = N : C.sibling = N,
                C = N);
            return le && Zn(x, E),
            j
        }
        for (N = r(x, N); E < y.length; E++)
            R = p(N, x, E, y[E], S),
            R !== null && (e && R.alternate !== null && N.delete(R.key === null ? E : R.key),
            h = s(R, h, E),
            C === null ? j = R : C.sibling = R,
            C = R);
        return e && N.forEach(function($) {
            return t(x, $)
        }),
        le && Zn(x, E),
        j
    }
    function g(x, h, y, S) {
        var j = Ao(y);
        if (typeof j != "function")
            throw Error(_(150));
        if (y = j.call(y),
        y == null)
            throw Error(_(151));
        for (var C = j = null, N = h, E = h = 0, R = null, A = y.next(); N !== null && !A.done; E++,
        A = y.next()) {
            N.index > E ? (R = N,
            N = null) : R = N.sibling;
            var $ = v(x, N, A.value, S);
            if ($ === null) {
                N === null && (N = R);
                break
            }
            e && N && $.alternate === null && t(x, N),
            h = s($, h, E),
            C === null ? j = $ : C.sibling = $,
            C = $,
            N = R
        }
        if (A.done)
            return n(x, N),
            le && Zn(x, E),
            j;
        if (N === null) {
            for (; !A.done; E++,
            A = y.next())
                A = f(x, A.value, S),
                A !== null && (h = s(A, h, E),
                C === null ? j = A : C.sibling = A,
                C = A);
            return le && Zn(x, E),
            j
        }
        for (N = r(x, N); !A.done; E++,
        A = y.next())
            A = p(N, x, E, A.value, S),
            A !== null && (e && A.alternate !== null && N.delete(A.key === null ? E : A.key),
            h = s(A, h, E),
            C === null ? j = A : C.sibling = A,
            C = A);
        return e && N.forEach(function(z) {
            return t(x, z)
        }),
        le && Zn(x, E),
        j
    }
    function w(x, h, y, S) {
        if (typeof y == "object" && y !== null && y.type === Ar && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case ta:
                e: {
                    for (var j = y.key, C = h; C !== null; ) {
                        if (C.key === j) {
                            if (j = y.type,
                            j === Ar) {
                                if (C.tag === 7) {
                                    n(x, C.sibling),
                                    h = o(C, y.props.children),
                                    h.return = x,
                                    x = h;
                                    break e
                                }
                            } else if (C.elementType === j || typeof j == "object" && j !== null && j.$$typeof === yn && pm(j) === C.type) {
                                n(x, C.sibling),
                                h = o(C, y.props),
                                h.ref = zo(x, C, y),
                                h.return = x,
                                x = h;
                                break e
                            }
                            n(x, C);
                            break
                        } else
                            t(x, C);
                        C = C.sibling
                    }
                    y.type === Ar ? (h = ur(y.props.children, x.mode, S, y.key),
                    h.return = x,
                    x = h) : (S = za(y.type, y.key, y.props, null, x.mode, S),
                    S.ref = zo(x, h, y),
                    S.return = x,
                    x = S)
                }
                return a(x);
            case _r:
                e: {
                    for (C = y.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                n(x, h.sibling),
                                h = o(h, y.children || []),
                                h.return = x,
                                x = h;
                                break e
                            } else {
                                n(x, h);
                                break
                            }
                        else
                            t(x, h);
                        h = h.sibling
                    }
                    h = Ec(y, x.mode, S),
                    h.return = x,
                    x = h
                }
                return a(x);
            case yn:
                return C = y._init,
                w(x, h, C(y._payload), S)
            }
            if (Yo(y))
                return b(x, h, y, S);
            if (Ao(y))
                return g(x, h, y, S);
            fa(x, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        h !== null && h.tag === 6 ? (n(x, h.sibling),
        h = o(h, y),
        h.return = x,
        x = h) : (n(x, h),
        h = jc(y, x.mode, S),
        h.return = x,
        x = h),
        a(x)) : n(x, h)
    }
    return w
}
var co = Sg(!0)
  , jg = Sg(!1)
  , ni = Hn(null)
  , ri = null
  , Fr = null
  , _d = null;
function Ad() {
    _d = Fr = ri = null
}
function Ld(e) {
    var t = ni.current;
    ae(ni),
    e._currentValue = t
}
function Ru(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Yr(e, t) {
    ri = e,
    _d = Fr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (He = !0),
    e.firstContext = null)
}
function dt(e) {
    var t = e._currentValue;
    if (_d !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Fr === null) {
            if (ri === null)
                throw Error(_(308));
            Fr = e,
            ri.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Fr = Fr.next = e;
    return t
}
var tr = null;
function Dd(e) {
    tr === null ? tr = [e] : tr.push(e)
}
function Eg(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Dd(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    tn(e, r)
}
function tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var wn = !1;
function Md(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Cg(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Zt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        tn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Dd(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    tn(e, n)
}
function _a(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        wd(e, n)
    }
}
function hm(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = a : s = s.next = a,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function oi(e, t, n, r) {
    var o = e.updateQueue;
    wn = !1;
    var s = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var c = l
          , u = c.next;
        c.next = null,
        a === null ? s = u : a.next = u,
        a = c;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== a && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = c))
    }
    if (s !== null) {
        var f = o.baseState;
        a = 0,
        d = u = c = null,
        l = s;
        do {
            var v = l.lane
              , p = l.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var b = e
                      , g = l;
                    switch (v = t,
                    p = n,
                    g.tag) {
                    case 1:
                        if (b = g.payload,
                        typeof b == "function") {
                            f = b.call(p, f, v);
                            break e
                        }
                        f = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = g.payload,
                        v = typeof b == "function" ? b.call(p, f, v) : b,
                        v == null)
                            break e;
                        f = fe({}, f, v);
                        break e;
                    case 2:
                        wn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                v = o.effects,
                v === null ? o.effects = [l] : v.push(l))
            } else
                p = {
                    eventTime: p,
                    lane: v,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = p,
                c = f) : d = d.next = p,
                a |= v;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                v = l,
                l = v.next,
                v.next = null,
                o.lastBaseUpdate = v,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (c = f),
        o.baseState = c,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        hr |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function gm(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(_(191, o));
                o.call(r)
            }
        }
}
var Os = {}
  , Ft = Hn(Os)
  , vs = Hn(Os)
  , xs = Hn(Os);
function nr(e) {
    if (e === Os)
        throw Error(_(174));
    return e
}
function Od(e, t) {
    switch (re(xs, t),
    re(vs, e),
    re(Ft, Os),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : cu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = cu(t, e)
    }
    ae(Ft),
    re(Ft, t)
}
function uo() {
    ae(Ft),
    ae(vs),
    ae(xs)
}
function kg(e) {
    nr(xs.current);
    var t = nr(Ft.current)
      , n = cu(t, e.type);
    t !== n && (re(vs, e),
    re(Ft, n))
}
function zd(e) {
    vs.current === e && (ae(Ft),
    ae(vs))
}
var ue = Hn(0);
function si(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var xc = [];
function Id() {
    for (var e = 0; e < xc.length; e++)
        xc[e]._workInProgressVersionPrimary = null;
    xc.length = 0
}
var Aa = an.ReactCurrentDispatcher
  , yc = an.ReactCurrentBatchConfig
  , pr = 0
  , de = null
  , ye = null
  , Ne = null
  , ai = !1
  , ts = !1
  , ys = 0
  , Bw = 0;
function Re() {
    throw Error(_(321))
}
function $d(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!kt(e[n], t[n]))
            return !1;
    return !0
}
function Fd(e, t, n, r, o, s) {
    if (pr = s,
    de = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Aa.current = e === null || e.memoizedState === null ? Ww : qw,
    e = n(r, o),
    ts) {
        s = 0;
        do {
            if (ts = !1,
            ys = 0,
            25 <= s)
                throw Error(_(301));
            s += 1,
            Ne = ye = null,
            t.updateQueue = null,
            Aa.current = Yw,
            e = n(r, o)
        } while (ts)
    }
    if (Aa.current = ii,
    t = ye !== null && ye.next !== null,
    pr = 0,
    Ne = ye = de = null,
    ai = !1,
    t)
        throw Error(_(300));
    return e
}
function Bd() {
    var e = ys !== 0;
    return ys = 0,
    e
}
function At() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e,
    Ne
}
function ft() {
    if (ye === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ye.next;
    var t = Ne === null ? de.memoizedState : Ne.next;
    if (t !== null)
        Ne = t,
        ye = e;
    else {
        if (e === null)
            throw Error(_(310));
        ye = e,
        e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        },
        Ne === null ? de.memoizedState = Ne = e : Ne = Ne.next = e
    }
    return Ne
}
function ws(e, t) {
    return typeof t == "function" ? t(e) : t
}
function wc(e) {
    var t = ft()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = ye
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = s.next,
            s.next = a
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var l = a = null
          , c = null
          , u = s;
        do {
            var d = u.lane;
            if ((pr & d) === d)
                c !== null && (c = c.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (l = c = f,
                a = r) : c = c.next = f,
                de.lanes |= d,
                hr |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        c === null ? a = r : c.next = l,
        kt(r, t.memoizedState) || (He = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = c,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            de.lanes |= s,
            hr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function bc(e) {
    var t = ft()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            s = e(s, a.action),
            a = a.next;
        while (a !== o);
        kt(s, t.memoizedState) || (He = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Pg() {}
function Rg(e, t) {
    var n = de
      , r = ft()
      , o = t()
      , s = !kt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    He = !0),
    r = r.queue,
    Ud(Ag.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Ne !== null && Ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        bs(9, _g.bind(null, n, r, o, t), void 0, null),
        Se === null)
            throw Error(_(349));
        pr & 30 || Tg(n, t, o)
    }
    return o
}
function Tg(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function _g(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Lg(t) && Dg(e)
}
function Ag(e, t, n) {
    return n(function() {
        Lg(t) && Dg(e)
    })
}
function Lg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kt(e, n)
    } catch {
        return !0
    }
}
function Dg(e) {
    var t = tn(e, 1);
    t !== null && Ct(t, e, 1, -1)
}
function vm(e) {
    var t = At();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ws,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Hw.bind(null, de, e),
    [t.memoizedState, e]
}
function bs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = de.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    de.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Mg() {
    return ft().memoizedState
}
function La(e, t, n, r) {
    var o = At();
    de.flags |= e,
    o.memoizedState = bs(1 | t, n, void 0, r === void 0 ? null : r)
}
function Pi(e, t, n, r) {
    var o = ft();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ye !== null) {
        var a = ye.memoizedState;
        if (s = a.destroy,
        r !== null && $d(r, a.deps)) {
            o.memoizedState = bs(t, n, s, r);
            return
        }
    }
    de.flags |= e,
    o.memoizedState = bs(1 | t, n, s, r)
}
function xm(e, t) {
    return La(8390656, 8, e, t)
}
function Ud(e, t) {
    return Pi(2048, 8, e, t)
}
function Og(e, t) {
    return Pi(4, 2, e, t)
}
function zg(e, t) {
    return Pi(4, 4, e, t)
}
function Ig(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function $g(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Pi(4, 4, Ig.bind(null, t, e), n)
}
function Vd() {}
function Fg(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $d(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Bg(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $d(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ug(e, t, n) {
    return pr & 21 ? (kt(n, t) || (n = Yh(),
    de.lanes |= n,
    hr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    He = !0),
    e.memoizedState = n)
}
function Uw(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = yc.transition;
    yc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        yc.transition = r
    }
}
function Vg() {
    return ft().memoizedState
}
function Vw(e, t, n) {
    var r = zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Hg(e))
        Wg(t, n);
    else if (n = Eg(e, t, n, r),
    n !== null) {
        var o = ze();
        Ct(n, e, r, o),
        qg(n, t, r)
    }
}
function Hw(e, t, n) {
    var r = zn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hg(e))
        Wg(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var a = t.lastRenderedState
                  , l = s(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                kt(l, a)) {
                    var c = t.interleaved;
                    c === null ? (o.next = o,
                    Dd(t)) : (o.next = c.next,
                    c.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Eg(e, t, o, r),
        n !== null && (o = ze(),
        Ct(n, e, r, o),
        qg(n, t, r))
    }
}
function Hg(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}
function Wg(e, t) {
    ts = ai = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function qg(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        wd(e, n)
    }
}
var ii = {
    readContext: dt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1
}
  , Ww = {
    readContext: dt,
    useCallback: function(e, t) {
        return At().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: dt,
    useEffect: xm,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        La(4194308, 4, Ig.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return La(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return La(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = At();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = At();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Vw.bind(null, de, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = At();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: vm,
    useDebugValue: Vd,
    useDeferredValue: function(e) {
        return At().memoizedState = e
    },
    useTransition: function() {
        var e = vm(!1)
          , t = e[0];
        return e = Uw.bind(null, e[1]),
        At().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = de
          , o = At();
        if (le) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            Se === null)
                throw Error(_(349));
            pr & 30 || Tg(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        xm(Ag.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        bs(9, _g.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = At()
          , t = Se.identifierPrefix;
        if (le) {
            var n = Xt
              , r = Kt;
            n = (r & ~(1 << 32 - Et(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ys++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Bw++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , qw = {
    readContext: dt,
    useCallback: Fg,
    useContext: dt,
    useEffect: Ud,
    useImperativeHandle: $g,
    useInsertionEffect: Og,
    useLayoutEffect: zg,
    useMemo: Bg,
    useReducer: wc,
    useRef: Mg,
    useState: function() {
        return wc(ws)
    },
    useDebugValue: Vd,
    useDeferredValue: function(e) {
        var t = ft();
        return Ug(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = wc(ws)[0]
          , t = ft().memoizedState;
        return [e, t]
    },
    useMutableSource: Pg,
    useSyncExternalStore: Rg,
    useId: Vg,
    unstable_isNewReconciler: !1
}
  , Yw = {
    readContext: dt,
    useCallback: Fg,
    useContext: dt,
    useEffect: Ud,
    useImperativeHandle: $g,
    useInsertionEffect: Og,
    useLayoutEffect: zg,
    useMemo: Bg,
    useReducer: bc,
    useRef: Mg,
    useState: function() {
        return bc(ws)
    },
    useDebugValue: Vd,
    useDeferredValue: function(e) {
        var t = ft();
        return ye === null ? t.memoizedState = e : Ug(t, ye.memoizedState, e)
    },
    useTransition: function() {
        var e = bc(ws)[0]
          , t = ft().memoizedState;
        return [e, t]
    },
    useMutableSource: Pg,
    useSyncExternalStore: Rg,
    useId: Vg,
    unstable_isNewReconciler: !1
};
function yt(e, t) {
    if (e && e.defaultProps) {
        t = fe({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Tu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : fe({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ri = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? wr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = zn(e)
          , s = Zt(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = Mn(e, s, o),
        t !== null && (Ct(t, e, o, r),
        _a(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = zn(e)
          , s = Zt(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Mn(e, s, o),
        t !== null && (Ct(t, e, o, r),
        _a(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ze()
          , r = zn(e)
          , o = Zt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Mn(e, o, r),
        t !== null && (Ct(t, e, r, n),
        _a(t, e, r))
    }
};
function ym(e, t, n, r, o, s, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !ms(n, r) || !ms(o, s) : !0
}
function Yg(e, t, n) {
    var r = !1
      , o = Fn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = dt(s) : (o = qe(t) ? fr : Le.current,
    r = t.contextTypes,
    s = (r = r != null) ? io(e, o) : Fn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ri,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function wm(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ri.enqueueReplaceState(t, t.state, null)
}
function _u(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Md(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = dt(s) : (s = qe(t) ? fr : Le.current,
    o.context = io(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Tu(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ri.enqueueReplaceState(o, o.state, null),
    oi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function fo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += b0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Nc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Au(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Gw = typeof WeakMap == "function" ? WeakMap : Map;
function Gg(e, t, n) {
    n = Zt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ci || (ci = !0,
        Uu = r),
        Au(e, t)
    }
    ,
    n
}
function Qg(e, t, n) {
    n = Zt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Au(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Au(e, t),
        typeof r != "function" && (On === null ? On = new Set([this]) : On.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function bm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Gw;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = l1.bind(null, e, t, n),
    t.then(e, e))
}
function Nm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Sm(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1),
    t.tag = 2,
    Mn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Qw = an.ReactCurrentOwner
  , He = !1;
function Me(e, t, n, r) {
    t.child = e === null ? jg(t, null, n, r) : co(t, e.child, n, r)
}
function jm(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Yr(t, o),
    r = Fd(e, t, n, r, s, o),
    n = Bd(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    nn(e, t, o)) : (le && n && Pd(t),
    t.flags |= 1,
    Me(e, t, r, o),
    t.child)
}
function Em(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Xd(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Kg(e, t, s, r, o)) : (e = za(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var a = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ms,
        n(a, r) && e.ref === t.ref)
            return nn(e, t, o)
    }
    return t.flags |= 1,
    e = In(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Kg(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ms(s, r) && e.ref === t.ref)
            if (He = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (He = !0);
            else
                return t.lanes = e.lanes,
                nn(e, t, o)
    }
    return Lu(e, t, n, r, o)
}
function Xg(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(Ur, Qe),
            Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(Ur, Qe),
                Qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            re(Ur, Qe),
            Qe |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        re(Ur, Qe),
        Qe |= r;
    return Me(e, t, o, n),
    t.child
}
function Zg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Lu(e, t, n, r, o) {
    var s = qe(n) ? fr : Le.current;
    return s = io(t, s),
    Yr(t, o),
    n = Fd(e, t, n, r, s, o),
    r = Bd(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    nn(e, t, o)) : (le && r && Pd(t),
    t.flags |= 1,
    Me(e, t, n, o),
    t.child)
}
function Cm(e, t, n, r, o) {
    if (qe(n)) {
        var s = !0;
        Ja(t)
    } else
        s = !1;
    if (Yr(t, o),
    t.stateNode === null)
        Da(e, t),
        Yg(t, n, r),
        _u(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , l = t.memoizedProps;
        a.props = l;
        var c = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = dt(u) : (u = qe(n) ? fr : Le.current,
        u = io(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== r || c !== u) && wm(t, a, r, u),
        wn = !1;
        var v = t.memoizedState;
        a.state = v,
        oi(t, r, a, o),
        c = t.memoizedState,
        l !== r || v !== c || We.current || wn ? (typeof d == "function" && (Tu(t, n, d, r),
        c = t.memoizedState),
        (l = wn || ym(t, n, l, r, v, c, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = c),
        a.props = r,
        a.state = c,
        a.context = u,
        r = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Cg(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : yt(t.type, l),
        a.props = u,
        f = t.pendingProps,
        v = a.context,
        c = n.contextType,
        typeof c == "object" && c !== null ? c = dt(c) : (c = qe(n) ? fr : Le.current,
        c = io(t, c));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== f || v !== c) && wm(t, a, r, c),
        wn = !1,
        v = t.memoizedState,
        a.state = v,
        oi(t, r, a, o);
        var b = t.memoizedState;
        l !== f || v !== b || We.current || wn ? (typeof p == "function" && (Tu(t, n, p, r),
        b = t.memoizedState),
        (u = wn || ym(t, n, u, r, v, b, c) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, c),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, c)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        a.props = r,
        a.state = b,
        a.context = c,
        r = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Du(e, t, n, r, s, o)
}
function Du(e, t, n, r, o, s) {
    Zg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && dm(t, n, !1),
        nn(e, t, s);
    r = t.stateNode,
    Qw.current = t;
    var l = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = co(t, e.child, null, s),
    t.child = co(t, null, l, s)) : Me(e, t, l, s),
    t.memoizedState = r.state,
    o && dm(t, n, !0),
    t.child
}
function Jg(e) {
    var t = e.stateNode;
    t.pendingContext ? um(e, t.pendingContext, t.pendingContext !== t.context) : t.context && um(e, t.context, !1),
    Od(e, t.containerInfo)
}
function km(e, t, n, r, o) {
    return lo(),
    Td(o),
    t.flags |= 256,
    Me(e, t, n, r),
    t.child
}
var Mu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ou(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function ev(e, t, n) {
    var r = t.pendingProps, o = ue.current, s = !1, a = (t.flags & 128) !== 0, l;
    if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    re(ue, o & 1),
    e === null)
        return Pu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = Ai(a, r, 0, null),
        e = ur(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Ou(n),
        t.memoizedState = Mu,
        e) : Hd(t, a));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Kw(e, t, a, r, l, o, n);
    if (s) {
        s = r.fallback,
        a = t.mode,
        o = e.child,
        l = o.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = c,
        t.deletions = null) : (r = In(o, c),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? s = In(l, s) : (s = ur(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? Ou(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Mu,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = In(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Hd(e, t) {
    return t = Ai({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ma(e, t, n, r) {
    return r !== null && Td(r),
    co(t, e.child, null, n),
    e = Hd(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Kw(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Nc(Error(_(422))),
        ma(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Ai({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = ur(s, o, a, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && co(t, e.child, null, a),
        t.child.memoizedState = Ou(a),
        t.memoizedState = Mu,
        s);
    if (!(t.mode & 1))
        return ma(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(_(419)),
        r = Nc(s, r, void 0),
        ma(e, t, a, r)
    }
    if (l = (a & e.childLanes) !== 0,
    He || l) {
        if (r = Se,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            tn(e, o),
            Ct(r, e, o, -1))
        }
        return Kd(),
        r = Nc(Error(_(421))),
        ma(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = c1.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Xe = Dn(o.nextSibling),
    Ze = t,
    le = !0,
    jt = null,
    e !== null && (it[lt++] = Kt,
    it[lt++] = Xt,
    it[lt++] = mr,
    Kt = e.id,
    Xt = e.overflow,
    mr = t),
    t = Hd(t, r.children),
    t.flags |= 4096,
    t)
}
function Pm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ru(e.return, t, n)
}
function Sc(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function tv(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Me(e, t, r.children, n),
    r = ue.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Pm(e, n, t);
                else if (e.tag === 19)
                    Pm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (re(ue, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && si(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Sc(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && si(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Sc(t, !0, n, null, s);
            break;
        case "together":
            Sc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Da(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function nn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    hr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = In(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = In(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Xw(e, t, n) {
    switch (t.tag) {
    case 3:
        Jg(t),
        lo();
        break;
    case 5:
        kg(t);
        break;
    case 1:
        qe(t.type) && Ja(t);
        break;
    case 4:
        Od(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        re(ni, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(ue, ue.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? ev(e, t, n) : (re(ue, ue.current & 1),
            e = nn(e, t, n),
            e !== null ? e.sibling : null);
        re(ue, ue.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return tv(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        re(ue, ue.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Xg(e, t, n)
    }
    return nn(e, t, n)
}
var nv, zu, rv, ov;
nv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
zu = function() {}
;
rv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        nr(Ft.current);
        var s = null;
        switch (n) {
        case "input":
            o = su(e, o),
            r = su(e, r),
            s = [];
            break;
        case "select":
            o = fe({}, o, {
                value: void 0
            }),
            r = fe({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = lu(e, o),
            r = lu(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xa)
        }
        uu(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (a in l)
                        l.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (as.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var c = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && c !== l && (c != null || l != null))
                if (u === "style")
                    if (l) {
                        for (a in l)
                            !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in c)
                            c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}),
                            n[a] = c[a])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = c;
                else
                    u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                    l = l ? l.__html : void 0,
                    c != null && l !== c && (s = s || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (s = s || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (as.hasOwnProperty(u) ? (c != null && u === "onScroll" && se("scroll", e),
                    s || l === c || (s = [])) : (s = s || []).push(u, c))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ov = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Io(e, t) {
    if (!le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Zw(e, t, n) {
    var r = t.pendingProps;
    switch (Rd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Te(t),
        null;
    case 1:
        return qe(t.type) && Za(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        uo(),
        ae(We),
        ae(Le),
        Id(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (da(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        jt !== null && (Wu(jt),
        jt = null))),
        zu(e, t),
        Te(t),
        null;
    case 5:
        zd(t);
        var o = nr(xs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            rv(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return Te(t),
                null
            }
            if (e = nr(Ft.current),
            da(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Ot] = t,
                r[gs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    se("cancel", r),
                    se("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    se("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Qo.length; o++)
                        se(Qo[o], r);
                    break;
                case "source":
                    se("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    se("error", r),
                    se("load", r);
                    break;
                case "details":
                    se("toggle", r);
                    break;
                case "input":
                    zf(r, s),
                    se("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    se("invalid", r);
                    break;
                case "textarea":
                    $f(r, s),
                    se("invalid", r)
                }
                uu(n, s),
                o = null;
                for (var a in s)
                    if (s.hasOwnProperty(a)) {
                        var l = s[a];
                        a === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ua(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ua(r.textContent, l, e),
                        o = ["children", "" + l]) : as.hasOwnProperty(a) && l != null && a === "onScroll" && se("scroll", r)
                    }
                switch (n) {
                case "input":
                    na(r),
                    If(r, s, !0);
                    break;
                case "textarea":
                    na(r),
                    Ff(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Xa)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ah(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[Ot] = t,
                e[gs] = r,
                nv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = du(n, r),
                    n) {
                    case "dialog":
                        se("cancel", e),
                        se("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        se("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Qo.length; o++)
                            se(Qo[o], e);
                        o = r;
                        break;
                    case "source":
                        se("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        se("error", e),
                        se("load", e),
                        o = r;
                        break;
                    case "details":
                        se("toggle", e),
                        o = r;
                        break;
                    case "input":
                        zf(e, r),
                        o = su(e, r),
                        se("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = fe({}, r, {
                            value: void 0
                        }),
                        se("invalid", e);
                        break;
                    case "textarea":
                        $f(e, r),
                        o = lu(e, r),
                        se("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    uu(n, o),
                    l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var c = l[s];
                            s === "style" ? Mh(e, c) : s === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0,
                            c != null && Lh(e, c)) : s === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && is(e, c) : typeof c == "number" && is(e, "" + c) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (as.hasOwnProperty(s) ? c != null && s === "onScroll" && se("scroll", e) : c != null && pd(e, s, c, a))
                        }
                    switch (n) {
                    case "input":
                        na(e),
                        If(e, r, !1);
                        break;
                    case "textarea":
                        na(e),
                        Ff(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + $n(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Vr(e, !!r.multiple, s, !1) : r.defaultValue != null && Vr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Xa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ov(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = nr(xs.current),
            nr(Ft.current),
            da(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ot] = t,
                (s = r.nodeValue !== n) && (e = Ze,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ua(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ua(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ot] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (ae(ue),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (le && Xe !== null && t.mode & 1 && !(t.flags & 128))
                Ng(),
                lo(),
                t.flags |= 98560,
                s = !1;
            else if (s = da(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(_(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(_(317));
                    s[Ot] = t
                } else
                    lo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                s = !1
            } else
                jt !== null && (Wu(jt),
                jt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : Kd())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return uo(),
        zu(e, t),
        e === null && ps(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return Ld(t.type._context),
        Te(t),
        null;
    case 17:
        return qe(t.type) && Za(),
        Te(t),
        null;
    case 19:
        if (ae(ue),
        s = t.memoizedState,
        s === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = s.rendering,
        a === null)
            if (r)
                Io(s, !1);
            else {
                if (we !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = si(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Io(s, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                a = s.alternate,
                                a === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = a.childLanes,
                                s.lanes = a.lanes,
                                s.child = a.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = a.memoizedProps,
                                s.memoizedState = a.memoizedState,
                                s.updateQueue = a.updateQueue,
                                s.type = a.type,
                                e = a.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return re(ue, ue.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && he() > mo && (t.flags |= 128,
                r = !0,
                Io(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = si(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Io(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !a.alternate && !le)
                        return Te(t),
                        null
                } else
                    2 * he() - s.renderingStartTime > mo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Io(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = s.last,
            n !== null ? n.sibling = a : t.child = a,
            s.last = a)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = he(),
        t.sibling = null,
        n = ue.current,
        re(ue, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Qd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function Jw(e, t) {
    switch (Rd(t),
    t.tag) {
    case 1:
        return qe(t.type) && Za(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return uo(),
        ae(We),
        ae(Le),
        Id(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return zd(t),
        null;
    case 13:
        if (ae(ue),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            lo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(ue),
        null;
    case 4:
        return uo(),
        null;
    case 10:
        return Ld(t.type._context),
        null;
    case 22:
    case 23:
        return Qd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var pa = !1
  , Ae = !1
  , e1 = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function Br(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function Iu(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var Rm = !1;
function t1(e, t) {
    if (bu = Ga,
    e = cg(),
    kd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , l = -1
                      , c = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , v = null;
                    t: for (; ; ) {
                        for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (l = a + o),
                        f !== s || r !== 0 && f.nodeType !== 3 || (c = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            v = f,
                            f = p;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (v === n && ++u === o && (l = a),
                            v === s && ++d === r && (c = a),
                            (p = f.nextSibling) !== null)
                                break;
                            f = v,
                            v = f.parentNode
                        }
                        f = p
                    }
                    n = l === -1 || c === -1 ? null : {
                        start: l,
                        end: c
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Nu = {
        focusedElem: e,
        selectionRange: n
    },
    Ga = !1,
    O = t; O !== null; )
        if (t = O,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            O = e;
        else
            for (; O !== null; ) {
                t = O;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var g = b.memoizedProps
                                  , w = b.memoizedState
                                  , x = t.stateNode
                                  , h = x.getSnapshotBeforeUpdate(t.elementType === t.type ? g : yt(t.type, g), w);
                                x.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (S) {
                    pe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    O = e;
                    break
                }
                O = t.return
            }
    return b = Rm,
    Rm = !1,
    b
}
function ns(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && Iu(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ti(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function $u(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function sv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    sv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ot],
    delete t[gs],
    delete t[Eu],
    delete t[zw],
    delete t[Iw])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function av(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Tm(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || av(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Xa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Fu(e, t, n),
        e = e.sibling; e !== null; )
            Fu(e, t, n),
            e = e.sibling
}
function Bu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bu(e, t, n),
        e = e.sibling; e !== null; )
            Bu(e, t, n),
            e = e.sibling
}
var je = null
  , St = !1;
function pn(e, t, n) {
    for (n = n.child; n !== null; )
        iv(e, t, n),
        n = n.sibling
}
function iv(e, t, n) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
        try {
            $t.onCommitFiberUnmount(Ni, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ae || Br(n, t);
    case 6:
        var r = je
          , o = St;
        je = null,
        pn(e, t, n),
        je = r,
        St = o,
        je !== null && (St ? (e = je,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
        break;
    case 18:
        je !== null && (St ? (e = je,
        n = n.stateNode,
        e.nodeType === 8 ? gc(e.parentNode, n) : e.nodeType === 1 && gc(e, n),
        ds(e)) : gc(je, n.stateNode));
        break;
    case 4:
        r = je,
        o = St,
        je = n.stateNode.containerInfo,
        St = !0,
        pn(e, t, n),
        je = r,
        St = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ae && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , a = s.destroy;
                s = s.tag,
                a !== void 0 && (s & 2 || s & 4) && Iu(n, t, a),
                o = o.next
            } while (o !== r)
        }
        pn(e, t, n);
        break;
    case 1:
        if (!Ae && (Br(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                pe(n, t, l)
            }
        pn(e, t, n);
        break;
    case 21:
        pn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ae = (r = Ae) || n.memoizedState !== null,
        pn(e, t, n),
        Ae = r) : pn(e, t, n);
        break;
    default:
        pn(e, t, n)
    }
}
function _m(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new e1),
        t.forEach(function(r) {
            var o = u1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , a = t
                  , l = a;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        je = l.stateNode,
                        St = !1;
                        break e;
                    case 3:
                        je = l.stateNode.containerInfo,
                        St = !0;
                        break e;
                    case 4:
                        je = l.stateNode.containerInfo,
                        St = !0;
                        break e
                    }
                    l = l.return
                }
                if (je === null)
                    throw Error(_(160));
                iv(s, a, o),
                je = null,
                St = !1;
                var c = o.alternate;
                c !== null && (c.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            lv(t, e),
            t = t.sibling
}
function lv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (vt(t, e),
        _t(e),
        r & 4) {
            try {
                ns(3, e, e.return),
                Ti(3, e)
            } catch (g) {
                pe(e, e.return, g)
            }
            try {
                ns(5, e, e.return)
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        break;
    case 1:
        vt(t, e),
        _t(e),
        r & 512 && n !== null && Br(n, n.return);
        break;
    case 5:
        if (vt(t, e),
        _t(e),
        r & 512 && n !== null && Br(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                is(o, "")
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , a = n !== null ? n.memoizedProps : s
              , l = e.type
              , c = e.updateQueue;
            if (e.updateQueue = null,
            c !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && Th(o, s),
                    du(l, a);
                    var u = du(l, s);
                    for (a = 0; a < c.length; a += 2) {
                        var d = c[a]
                          , f = c[a + 1];
                        d === "style" ? Mh(o, f) : d === "dangerouslySetInnerHTML" ? Lh(o, f) : d === "children" ? is(o, f) : pd(o, d, f, u)
                    }
                    switch (l) {
                    case "input":
                        au(o, s);
                        break;
                    case "textarea":
                        _h(o, s);
                        break;
                    case "select":
                        var v = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Vr(o, !!s.multiple, p, !1) : v !== !!s.multiple && (s.defaultValue != null ? Vr(o, !!s.multiple, s.defaultValue, !0) : Vr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[gs] = s
                } catch (g) {
                    pe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (vt(t, e),
        _t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (g) {
                pe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (vt(t, e),
        _t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ds(t.containerInfo)
            } catch (g) {
                pe(e, e.return, g)
            }
        break;
    case 4:
        vt(t, e),
        _t(e);
        break;
    case 13:
        vt(t, e),
        _t(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Yd = he())),
        r & 4 && _m(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ae = (u = Ae) || d,
        vt(t, e),
        Ae = u) : vt(t, e),
        _t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (O = e,
                d = e.child; d !== null; ) {
                    for (f = O = d; O !== null; ) {
                        switch (v = O,
                        p = v.child,
                        v.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ns(4, v, v.return);
                            break;
                        case 1:
                            Br(v, v.return);
                            var b = v.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = v,
                                n = v.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (g) {
                                    pe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Br(v, v.return);
                            break;
                        case 22:
                            if (v.memoizedState !== null) {
                                Lm(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = v,
                        O = p) : Lm(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            c = f.memoizedProps.style,
                            a = c != null && c.hasOwnProperty("display") ? c.display : null,
                            l.style.display = Dh("display", a))
                        } catch (g) {
                            pe(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            pe(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        vt(t, e),
        _t(e),
        r & 4 && _m(e);
        break;
    case 21:
        break;
    default:
        vt(t, e),
        _t(e)
    }
}
function _t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (av(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (is(o, ""),
                r.flags &= -33);
                var s = Tm(e);
                Bu(e, s, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , l = Tm(e);
                Fu(e, l, a);
                break;
            default:
                throw Error(_(161))
            }
        } catch (c) {
            pe(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function n1(e, t, n) {
    O = e,
    cv(e)
}
function cv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
        var o = O
          , s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || pa;
            if (!a) {
                var l = o.alternate
                  , c = l !== null && l.memoizedState !== null || Ae;
                l = pa;
                var u = Ae;
                if (pa = a,
                (Ae = c) && !u)
                    for (O = o; O !== null; )
                        a = O,
                        c = a.child,
                        a.tag === 22 && a.memoizedState !== null ? Dm(o) : c !== null ? (c.return = a,
                        O = c) : Dm(o);
                for (; s !== null; )
                    O = s,
                    cv(s),
                    s = s.sibling;
                O = o,
                pa = l,
                Ae = u
            }
            Am(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            O = s) : Am(e)
    }
}
function Am(e) {
    for (; O !== null; ) {
        var t = O;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ae || Ti(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ae)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : yt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && gm(t, s, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            gm(t, a, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var c = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                c.autoFocus && n.focus();
                                break;
                            case "img":
                                c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && ds(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                Ae || t.flags & 512 && $u(t)
            } catch (v) {
                pe(t, t.return, v)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function Lm(e) {
    for (; O !== null; ) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function Dm(e) {
    for (; O !== null; ) {
        var t = O;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ti(4, t)
                } catch (c) {
                    pe(t, n, c)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (c) {
                        pe(t, o, c)
                    }
                }
                var s = t.return;
                try {
                    $u(t)
                } catch (c) {
                    pe(t, s, c)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    $u(t)
                } catch (c) {
                    pe(t, a, c)
                }
            }
        } catch (c) {
            pe(t, t.return, c)
        }
        if (t === e) {
            O = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            O = l;
            break
        }
        O = t.return
    }
}
var r1 = Math.ceil
  , li = an.ReactCurrentDispatcher
  , Wd = an.ReactCurrentOwner
  , ut = an.ReactCurrentBatchConfig
  , Z = 0
  , Se = null
  , ve = null
  , Ee = 0
  , Qe = 0
  , Ur = Hn(0)
  , we = 0
  , Ns = null
  , hr = 0
  , _i = 0
  , qd = 0
  , rs = null
  , Ve = null
  , Yd = 0
  , mo = 1 / 0
  , Yt = null
  , ci = !1
  , Uu = null
  , On = null
  , ha = !1
  , Rn = null
  , ui = 0
  , os = 0
  , Vu = null
  , Ma = -1
  , Oa = 0;
function ze() {
    return Z & 6 ? he() : Ma !== -1 ? Ma : Ma = he()
}
function zn(e) {
    return e.mode & 1 ? Z & 2 && Ee !== 0 ? Ee & -Ee : Fw.transition !== null ? (Oa === 0 && (Oa = Yh()),
    Oa) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : eg(e.type)),
    e) : 1
}
function Ct(e, t, n, r) {
    if (50 < os)
        throw os = 0,
        Vu = null,
        Error(_(185));
    Ls(e, n, r),
    (!(Z & 2) || e !== Se) && (e === Se && (!(Z & 2) && (_i |= n),
    we === 4 && Nn(e, Ee)),
    Ye(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (mo = he() + 500,
    ki && Wn()))
}
function Ye(e, t) {
    var n = e.callbackNode;
    F0(e, t);
    var r = Ya(e, e === Se ? Ee : 0);
    if (r === 0)
        n !== null && Vf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Vf(n),
        t === 1)
            e.tag === 0 ? $w(Mm.bind(null, e)) : yg(Mm.bind(null, e)),
            Mw(function() {
                !(Z & 6) && Wn()
            }),
            n = null;
        else {
            switch (Gh(r)) {
            case 1:
                n = yd;
                break;
            case 4:
                n = Wh;
                break;
            case 16:
                n = qa;
                break;
            case 536870912:
                n = qh;
                break;
            default:
                n = qa
            }
            n = vv(n, uv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function uv(e, t) {
    if (Ma = -1,
    Oa = 0,
    Z & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (Gr() && e.callbackNode !== n)
        return null;
    var r = Ya(e, e === Se ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = di(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var s = fv();
        (Se !== e || Ee !== t) && (Yt = null,
        mo = he() + 500,
        cr(e, t));
        do
            try {
                a1();
                break
            } catch (l) {
                dv(e, l)
            }
        while (!0);
        Ad(),
        li.current = s,
        Z = o,
        ve !== null ? t = 0 : (Se = null,
        Ee = 0,
        t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = gu(e),
        o !== 0 && (r = o,
        t = Hu(e, o))),
        t === 1)
            throw n = Ns,
            cr(e, 0),
            Nn(e, r),
            Ye(e, he()),
            n;
        if (t === 6)
            Nn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !o1(o) && (t = di(e, r),
            t === 2 && (s = gu(e),
            s !== 0 && (r = s,
            t = Hu(e, s))),
            t === 1))
                throw n = Ns,
                cr(e, 0),
                Nn(e, r),
                Ye(e, he()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                Jn(e, Ve, Yt);
                break;
            case 3:
                if (Nn(e, r),
                (r & 130023424) === r && (t = Yd + 500 - he(),
                10 < t)) {
                    if (Ya(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        ze(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = ju(Jn.bind(null, e, Ve, Yt), t);
                    break
                }
                Jn(e, Ve, Yt);
                break;
            case 4:
                if (Nn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - Et(r);
                    s = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~s
                }
                if (r = o,
                r = he() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * r1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ju(Jn.bind(null, e, Ve, Yt), r);
                    break
                }
                Jn(e, Ve, Yt);
                break;
            case 5:
                Jn(e, Ve, Yt);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Ye(e, he()),
    e.callbackNode === n ? uv.bind(null, e) : null
}
function Hu(e, t) {
    var n = rs;
    return e.current.memoizedState.isDehydrated && (cr(e, t).flags |= 256),
    e = di(e, t),
    e !== 2 && (t = Ve,
    Ve = n,
    t !== null && Wu(t)),
    e
}
function Wu(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}
function o1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!kt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Nn(e, t) {
    for (t &= ~qd,
    t &= ~_i,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Et(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Mm(e) {
    if (Z & 6)
        throw Error(_(327));
    Gr();
    var t = Ya(e, 0);
    if (!(t & 1))
        return Ye(e, he()),
        null;
    var n = di(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = gu(e);
        r !== 0 && (t = r,
        n = Hu(e, r))
    }
    if (n === 1)
        throw n = Ns,
        cr(e, 0),
        Nn(e, t),
        Ye(e, he()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Jn(e, Ve, Yt),
    Ye(e, he()),
    null
}
function Gd(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (mo = he() + 500,
        ki && Wn())
    }
}
function gr(e) {
    Rn !== null && Rn.tag === 0 && !(Z & 6) && Gr();
    var t = Z;
    Z |= 1;
    var n = ut.transition
      , r = te;
    try {
        if (ut.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        ut.transition = n,
        Z = t,
        !(Z & 6) && Wn()
    }
}
function Qd() {
    Qe = Ur.current,
    ae(Ur)
}
function cr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Dw(n)),
    ve !== null)
        for (n = ve.return; n !== null; ) {
            var r = n;
            switch (Rd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Za();
                break;
            case 3:
                uo(),
                ae(We),
                ae(Le),
                Id();
                break;
            case 5:
                zd(r);
                break;
            case 4:
                uo();
                break;
            case 13:
                ae(ue);
                break;
            case 19:
                ae(ue);
                break;
            case 10:
                Ld(r.type._context);
                break;
            case 22:
            case 23:
                Qd()
            }
            n = n.return
        }
    if (Se = e,
    ve = e = In(e.current, null),
    Ee = Qe = t,
    we = 0,
    Ns = null,
    qd = _i = hr = 0,
    Ve = rs = null,
    tr !== null) {
        for (t = 0; t < tr.length; t++)
            if (n = tr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    s.next = o,
                    r.next = a
                }
                n.pending = r
            }
        tr = null
    }
    return e
}
function dv(e, t) {
    do {
        var n = ve;
        try {
            if (Ad(),
            Aa.current = ii,
            ai) {
                for (var r = de.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ai = !1
            }
            if (pr = 0,
            Ne = ye = de = null,
            ts = !1,
            ys = 0,
            Wd.current = null,
            n === null || n.return === null) {
                we = 1,
                Ns = t,
                ve = null;
                break
            }
            e: {
                var s = e
                  , a = n.return
                  , l = n
                  , c = t;
                if (t = Ee,
                l.flags |= 32768,
                c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue,
                        d.memoizedState = v.memoizedState,
                        d.lanes = v.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = Nm(a);
                    if (p !== null) {
                        p.flags &= -257,
                        Sm(p, a, l, s, t),
                        p.mode & 1 && bm(s, u, t),
                        t = p,
                        c = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var g = new Set;
                            g.add(c),
                            t.updateQueue = g
                        } else
                            b.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bm(s, u, t),
                            Kd();
                            break e
                        }
                        c = Error(_(426))
                    }
                } else if (le && l.mode & 1) {
                    var w = Nm(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Sm(w, a, l, s, t),
                        Td(fo(c, l));
                        break e
                    }
                }
                s = c = fo(c, l),
                we !== 4 && (we = 2),
                rs === null ? rs = [s] : rs.push(s),
                s = a;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var x = Gg(s, c, t);
                        hm(s, x);
                        break e;
                    case 1:
                        l = c;
                        var h = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (On === null || !On.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Qg(s, l, t);
                            hm(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            pv(n)
        } catch (j) {
            t = j,
            ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (!0)
}
function fv() {
    var e = li.current;
    return li.current = ii,
    e === null ? ii : e
}
function Kd() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
    Se === null || !(hr & 268435455) && !(_i & 268435455) || Nn(Se, Ee)
}
function di(e, t) {
    var n = Z;
    Z |= 2;
    var r = fv();
    (Se !== e || Ee !== t) && (Yt = null,
    cr(e, t));
    do
        try {
            s1();
            break
        } catch (o) {
            dv(e, o)
        }
    while (!0);
    if (Ad(),
    Z = n,
    li.current = r,
    ve !== null)
        throw Error(_(261));
    return Se = null,
    Ee = 0,
    we
}
function s1() {
    for (; ve !== null; )
        mv(ve)
}
function a1() {
    for (; ve !== null && !_0(); )
        mv(ve)
}
function mv(e) {
    var t = gv(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
    t === null ? pv(e) : ve = t,
    Wd.current = null
}
function pv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Jw(n, t),
            n !== null) {
                n.flags &= 32767,
                ve = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                we = 6,
                ve = null;
                return
            }
        } else if (n = Zw(n, t, Qe),
        n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}
function Jn(e, t, n) {
    var r = te
      , o = ut.transition;
    try {
        ut.transition = null,
        te = 1,
        i1(e, t, n, r)
    } finally {
        ut.transition = o,
        te = r
    }
    return null
}
function i1(e, t, n, r) {
    do
        Gr();
    while (Rn !== null);
    if (Z & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (B0(e, s),
    e === Se && (ve = Se = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ha || (ha = !0,
    vv(qa, function() {
        return Gr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = ut.transition,
        ut.transition = null;
        var a = te;
        te = 1;
        var l = Z;
        Z |= 4,
        Wd.current = null,
        t1(e, n),
        lv(n, e),
        kw(Nu),
        Ga = !!bu,
        Nu = bu = null,
        e.current = n,
        n1(n),
        A0(),
        Z = l,
        te = a,
        ut.transition = s
    } else
        e.current = n;
    if (ha && (ha = !1,
    Rn = e,
    ui = o),
    s = e.pendingLanes,
    s === 0 && (On = null),
    M0(n.stateNode),
    Ye(e, he()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (ci)
        throw ci = !1,
        e = Uu,
        Uu = null,
        e;
    return ui & 1 && e.tag !== 0 && Gr(),
    s = e.pendingLanes,
    s & 1 ? e === Vu ? os++ : (os = 0,
    Vu = e) : os = 0,
    Wn(),
    null
}
function Gr() {
    if (Rn !== null) {
        var e = Gh(ui)
          , t = ut.transition
          , n = te;
        try {
            if (ut.transition = null,
            te = 16 > e ? 16 : e,
            Rn === null)
                var r = !1;
            else {
                if (e = Rn,
                Rn = null,
                ui = 0,
                Z & 6)
                    throw Error(_(331));
                var o = Z;
                for (Z |= 4,
                O = e.current; O !== null; ) {
                    var s = O
                      , a = s.child;
                    if (O.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var c = 0; c < l.length; c++) {
                                var u = l[c];
                                for (O = u; O !== null; ) {
                                    var d = O;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ns(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        O = f;
                                    else
                                        for (; O !== null; ) {
                                            d = O;
                                            var v = d.sibling
                                              , p = d.return;
                                            if (sv(d),
                                            d === u) {
                                                O = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = p,
                                                O = v;
                                                break
                                            }
                                            O = p
                                        }
                                }
                            }
                            var b = s.alternate;
                            if (b !== null) {
                                var g = b.child;
                                if (g !== null) {
                                    b.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            O = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null)
                        a.return = s,
                        O = a;
                    else
                        e: for (; O !== null; ) {
                            if (s = O,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ns(9, s, s.return)
                                }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                O = x;
                                break e
                            }
                            O = s.return
                        }
                }
                var h = e.current;
                for (O = h; O !== null; ) {
                    a = O;
                    var y = a.child;
                    if (a.subtreeFlags & 2064 && y !== null)
                        y.return = a,
                        O = y;
                    else
                        e: for (a = h; O !== null; ) {
                            if (l = O,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ti(9, l)
                                    }
                                } catch (j) {
                                    pe(l, l.return, j)
                                }
                            if (l === a) {
                                O = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                O = S;
                                break e
                            }
                            O = l.return
                        }
                }
                if (Z = o,
                Wn(),
                $t && typeof $t.onPostCommitFiberRoot == "function")
                    try {
                        $t.onPostCommitFiberRoot(Ni, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            ut.transition = t
        }
    }
    return !1
}
function Om(e, t, n) {
    t = fo(n, t),
    t = Gg(e, t, 1),
    e = Mn(e, t, 1),
    t = ze(),
    e !== null && (Ls(e, 1, t),
    Ye(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        Om(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Om(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (On === null || !On.has(r))) {
                    e = fo(n, e),
                    e = Qg(t, e, 1),
                    t = Mn(t, e, 1),
                    e = ze(),
                    t !== null && (Ls(t, 1, e),
                    Ye(t, e));
                    break
                }
            }
            t = t.return
        }
}
function l1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ze(),
    e.pingedLanes |= e.suspendedLanes & n,
    Se === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > he() - Yd ? cr(e, 0) : qd |= n),
    Ye(e, t)
}
function hv(e, t) {
    t === 0 && (e.mode & 1 ? (t = sa,
    sa <<= 1,
    !(sa & 130023424) && (sa = 4194304)) : t = 1);
    var n = ze();
    e = tn(e, t),
    e !== null && (Ls(e, t, n),
    Ye(e, n))
}
function c1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    hv(e, n)
}
function u1(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    hv(e, n)
}
var gv;
gv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || We.current)
            He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return He = !1,
                Xw(e, t, n);
            He = !!(e.flags & 131072)
        }
    else
        He = !1,
        le && t.flags & 1048576 && wg(t, ti, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Da(e, t),
        e = t.pendingProps;
        var o = io(t, Le.current);
        Yr(t, n),
        o = Fd(null, t, r, e, o, n);
        var s = Bd();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        qe(r) ? (s = !0,
        Ja(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Md(t),
        o.updater = Ri,
        t.stateNode = o,
        o._reactInternals = t,
        _u(t, r, e, n),
        t = Du(null, t, r, !0, s, n)) : (t.tag = 0,
        le && s && Pd(t),
        Me(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Da(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = f1(r),
            e = yt(r, e),
            o) {
            case 0:
                t = Lu(null, t, r, e, n);
                break e;
            case 1:
                t = Cm(null, t, r, e, n);
                break e;
            case 11:
                t = jm(null, t, r, e, n);
                break e;
            case 14:
                t = Em(null, t, r, yt(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : yt(r, o),
        Lu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : yt(r, o),
        Cm(e, t, r, o, n);
    case 3:
        e: {
            if (Jg(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Cg(e, t),
            oi(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = fo(Error(_(423)), t),
                    t = km(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = fo(Error(_(424)), t),
                    t = km(e, t, r, n, o);
                    break e
                } else
                    for (Xe = Dn(t.stateNode.containerInfo.firstChild),
                    Ze = t,
                    le = !0,
                    jt = null,
                    n = jg(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (lo(),
                r === o) {
                    t = nn(e, t, n);
                    break e
                }
                Me(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return kg(t),
        e === null && Pu(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        a = o.children,
        Su(r, o) ? a = null : s !== null && Su(r, s) && (t.flags |= 32),
        Zg(e, t),
        Me(e, t, a, n),
        t.child;
    case 6:
        return e === null && Pu(t),
        null;
    case 13:
        return ev(e, t, n);
    case 4:
        return Od(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = co(t, null, r, n) : Me(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : yt(r, o),
        jm(e, t, r, o, n);
    case 7:
        return Me(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Me(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            a = o.value,
            re(ni, r._currentValue),
            r._currentValue = a,
            s !== null)
                if (kt(s.value, a)) {
                    if (s.children === o.children && !We.current) {
                        t = nn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            a = s.child;
                            for (var c = l.firstContext; c !== null; ) {
                                if (c.context === r) {
                                    if (s.tag === 1) {
                                        c = Zt(-1, n & -n),
                                        c.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? c.next = c : (c.next = d.next,
                                            d.next = c),
                                            u.pending = c
                                        }
                                    }
                                    s.lanes |= n,
                                    c = s.alternate,
                                    c !== null && (c.lanes |= n),
                                    Ru(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                c = c.next
                            }
                        } else if (s.tag === 10)
                            a = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (a = s.return,
                            a === null)
                                throw Error(_(341));
                            a.lanes |= n,
                            l = a.alternate,
                            l !== null && (l.lanes |= n),
                            Ru(a, n, t),
                            a = s.sibling
                        } else
                            a = s.child;
                        if (a !== null)
                            a.return = s;
                        else
                            for (a = s; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (s = a.sibling,
                                s !== null) {
                                    s.return = a.return,
                                    a = s;
                                    break
                                }
                                a = a.return
                            }
                        s = a
                    }
            Me(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Yr(t, n),
        o = dt(o),
        r = r(o),
        t.flags |= 1,
        Me(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = yt(r, t.pendingProps),
        o = yt(r.type, o),
        Em(e, t, r, o, n);
    case 15:
        return Kg(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : yt(r, o),
        Da(e, t),
        t.tag = 1,
        qe(r) ? (e = !0,
        Ja(t)) : e = !1,
        Yr(t, n),
        Yg(t, r, o),
        _u(t, r, o, n),
        Du(null, t, r, !0, e, n);
    case 19:
        return tv(e, t, n);
    case 22:
        return Xg(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function vv(e, t) {
    return Hh(e, t)
}
function d1(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ct(e, t, n, r) {
    return new d1(e,t,n,r)
}
function Xd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function f1(e) {
    if (typeof e == "function")
        return Xd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === gd)
            return 11;
        if (e === vd)
            return 14
    }
    return 2
}
function In(e, t) {
    var n = e.alternate;
    return n === null ? (n = ct(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function za(e, t, n, r, o, s) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Xd(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case Ar:
            return ur(n.children, o, s, t);
        case hd:
            a = 8,
            o |= 8;
            break;
        case tu:
            return e = ct(12, n, t, o | 2),
            e.elementType = tu,
            e.lanes = s,
            e;
        case nu:
            return e = ct(13, n, t, o),
            e.elementType = nu,
            e.lanes = s,
            e;
        case ru:
            return e = ct(19, n, t, o),
            e.elementType = ru,
            e.lanes = s,
            e;
        case kh:
            return Ai(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Eh:
                    a = 10;
                    break e;
                case Ch:
                    a = 9;
                    break e;
                case gd:
                    a = 11;
                    break e;
                case vd:
                    a = 14;
                    break e;
                case yn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = ct(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function ur(e, t, n, r) {
    return e = ct(7, e, r, t),
    e.lanes = n,
    e
}
function Ai(e, t, n, r) {
    return e = ct(22, e, r, t),
    e.elementType = kh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function jc(e, t, n) {
    return e = ct(6, e, null, t),
    e.lanes = n,
    e
}
function Ec(e, t, n) {
    return t = ct(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function m1(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = sc(0),
    this.expirationTimes = sc(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = sc(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Zd(e, t, n, r, o, s, a, l, c) {
    return e = new m1(e,t,n,l,c),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = ct(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Md(s),
    e
}
function p1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: _r,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function xv(e) {
    if (!e)
        return Fn;
    e = e._reactInternals;
    e: {
        if (wr(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (qe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (qe(n))
            return xg(e, n, t)
    }
    return t
}
function yv(e, t, n, r, o, s, a, l, c) {
    return e = Zd(n, r, !0, e, o, s, a, l, c),
    e.context = xv(null),
    n = e.current,
    r = ze(),
    o = zn(n),
    s = Zt(r, o),
    s.callback = t ?? null,
    Mn(n, s, o),
    e.current.lanes = o,
    Ls(e, o, r),
    Ye(e, r),
    e
}
function Li(e, t, n, r) {
    var o = t.current
      , s = ze()
      , a = zn(o);
    return n = xv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Zt(s, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Mn(o, t, a),
    e !== null && (Ct(e, o, a, s),
    _a(e, o, a)),
    a
}
function fi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function zm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Jd(e, t) {
    zm(e, t),
    (e = e.alternate) && zm(e, t)
}
function h1() {
    return null
}
var wv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ef(e) {
    this._internalRoot = e
}
Di.prototype.render = ef.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    Li(e, t, null, null)
}
;
Di.prototype.unmount = ef.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gr(function() {
            Li(null, e, null, null)
        }),
        t[en] = null
    }
}
;
function Di(e) {
    this._internalRoot = e
}
Di.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Xh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++)
            ;
        bn.splice(n, 0, e),
        n === 0 && Jh(e)
    }
}
;
function tf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Im() {}
function g1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = fi(a);
                s.call(u)
            }
        }
        var a = yv(t, r, e, 0, null, !1, !1, "", Im);
        return e._reactRootContainer = a,
        e[en] = a.current,
        ps(e.nodeType === 8 ? e.parentNode : e),
        gr(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = fi(c);
            l.call(u)
        }
    }
    var c = Zd(e, 0, !1, null, null, !1, !1, "", Im);
    return e._reactRootContainer = c,
    e[en] = c.current,
    ps(e.nodeType === 8 ? e.parentNode : e),
    gr(function() {
        Li(t, c, n, r)
    }),
    c
}
function Oi(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var c = fi(a);
                l.call(c)
            }
        }
        Li(t, a, e, o)
    } else
        a = g1(n, t, e, o, r);
    return fi(a)
}
Qh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Go(t.pendingLanes);
            n !== 0 && (wd(t, n | 1),
            Ye(t, he()),
            !(Z & 6) && (mo = he() + 500,
            Wn()))
        }
        break;
    case 13:
        gr(function() {
            var r = tn(e, 1);
            if (r !== null) {
                var o = ze();
                Ct(r, e, 1, o)
            }
        }),
        Jd(e, 1)
    }
}
;
bd = function(e) {
    if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
            var n = ze();
            Ct(t, e, 134217728, n)
        }
        Jd(e, 134217728)
    }
}
;
Kh = function(e) {
    if (e.tag === 13) {
        var t = zn(e)
          , n = tn(e, t);
        if (n !== null) {
            var r = ze();
            Ct(n, e, t, r)
        }
        Jd(e, t)
    }
}
;
Xh = function() {
    return te
}
;
Zh = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
mu = function(e, t, n) {
    switch (t) {
    case "input":
        if (au(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Ci(r);
                    if (!o)
                        throw Error(_(90));
                    Rh(r),
                    au(r, o)
                }
            }
        }
        break;
    case "textarea":
        _h(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Vr(e, !!n.multiple, t, !1)
    }
}
;
Ih = Gd;
$h = gr;
var v1 = {
    usingClientEntryPoint: !1,
    Events: [Ms, Or, Ci, Oh, zh, Gd]
}
  , $o = {
    findFiberByHostInstance: er,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , x1 = {
    bundleType: $o.bundleType,
    version: $o.version,
    rendererPackageName: $o.rendererPackageName,
    rendererConfig: $o.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: an.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Uh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: $o.findFiberByHostInstance || h1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ga.isDisabled && ga.supportsFiber)
        try {
            Ni = ga.inject(x1),
            $t = ga
        } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v1;
tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tf(t))
        throw Error(_(200));
    return p1(e, t, null, n)
}
;
tt.createRoot = function(e, t) {
    if (!tf(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , o = wv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Zd(e, 1, !1, null, null, n, !1, r, o),
    e[en] = t.current,
    ps(e.nodeType === 8 ? e.parentNode : e),
    new ef(t)
}
;
tt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = Uh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
tt.flushSync = function(e) {
    return gr(e)
}
;
tt.hydrate = function(e, t, n) {
    if (!Mi(t))
        throw Error(_(200));
    return Oi(null, e, t, !0, n)
}
;
tt.hydrateRoot = function(e, t, n) {
    if (!tf(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , a = wv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = yv(t, null, e, 1, n ?? null, o, !1, s, a),
    e[en] = t.current,
    ps(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Di(t)
}
;
tt.render = function(e, t, n) {
    if (!Mi(t))
        throw Error(_(200));
    return Oi(null, e, t, !1, n)
}
;
tt.unmountComponentAtNode = function(e) {
    if (!Mi(e))
        throw Error(_(40));
    return e._reactRootContainer ? (gr(function() {
        Oi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[en] = null
        })
    }),
    !0) : !1
}
;
tt.unstable_batchedUpdates = Gd;
tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Mi(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return Oi(e, t, n, !1, r)
}
;
tt.version = "18.3.1-next-f1338f8080-20240426";
function bv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)
        } catch (e) {
            console.error(e)
        }
}
bv(),
bh.exports = tt;
var zs = bh.exports;
const Nv = ch(zs);
var Sv, $m = zs;
Sv = $m.createRoot,
$m.hydrateRoot;
const y1 = 1
  , w1 = 1e6;
let Cc = 0;
function b1() {
    return Cc = (Cc + 1) % Number.MAX_SAFE_INTEGER,
    Cc.toString()
}
const kc = new Map
  , Fm = e => {
    if (kc.has(e))
        return;
    const t = setTimeout( () => {
        kc.delete(e),
        ss({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , w1);
    kc.set(e, t)
}
  , N1 = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, y1)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Fm(n) : e.toasts.forEach(r => {
                Fm(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ia = [];
let $a = {
    toasts: []
};
function ss(e) {
    $a = N1($a, e),
    Ia.forEach(t => {
        t($a)
    }
    )
}
function S1({...e}) {
    const t = b1()
      , n = o => ss({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ss({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ss({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function j1() {
    const [e,t] = m.useState($a);
    return m.useEffect( () => (Ia.push(t),
    () => {
        const n = Ia.indexOf(t);
        n > -1 && Ia.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: S1,
        dismiss: n => ss({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ce(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Bm(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function jv(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Bm(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : Bm(e[o], null)
                }
            }
    }
}
function Ie(...e) {
    return m.useCallback(jv(...e), e)
}
function E1(e, t) {
    const n = m.createContext(t)
      , r = s => {
        const {children: a, ...l} = s
          , c = m.useMemo( () => l, Object.values(l));
        return i.jsx(n.Provider, {
            value: c,
            children: a
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const a = m.useContext(n);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Is(e, t=[]) {
    let n = [];
    function r(s, a) {
        const l = m.createContext(a)
          , c = n.length;
        n = [...n, a];
        const u = f => {
            var x;
            const {scope: v, children: p, ...b} = f
              , g = ((x = v == null ? void 0 : v[e]) == null ? void 0 : x[c]) || l
              , w = m.useMemo( () => b, Object.values(b));
            return i.jsx(g.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = s + "Provider";
        function d(f, v) {
            var g;
            const p = ((g = v == null ? void 0 : v[e]) == null ? void 0 : g[c]) || l
              , b = m.useContext(p);
            if (b)
                return b;
            if (a !== void 0)
                return a;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(a => m.createContext(a));
        return function(l) {
            const c = (l == null ? void 0 : l[e]) || s;
            return m.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: c
                }
            }), [l, c])
        }
    }
    ;
    return o.scopeName = e,
    [r, C1(o, ...t)]
}
function C1(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce( (l, {useScope: c, scopeName: u}) => {
                const f = c(s)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return m.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ss(e) {
    const t = P1(e)
      , n = m.forwardRef( (r, o) => {
        const {children: s, ...a} = r
          , l = m.Children.toArray(s)
          , c = l.find(T1);
        if (c) {
            const u = c.props.children
              , d = l.map(f => f === c ? m.Children.count(u) > 1 ? m.Children.only(null) : m.isValidElement(u) ? u.props.children : null : f);
            return i.jsx(t, {
                ...a,
                ref: o,
                children: m.isValidElement(u) ? m.cloneElement(u, void 0, d) : null
            })
        }
        return i.jsx(t, {
            ...a,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var k1 = Ss("Slot");
function P1(e) {
    const t = m.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (m.isValidElement(o)) {
            const a = A1(o)
              , l = _1(s, o.props);
            return o.type !== m.Fragment && (l.ref = r ? jv(r, a) : a),
            m.cloneElement(o, l)
        }
        return m.Children.count(o) > 1 ? m.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Ev = Symbol("radix.slottable");
function R1(e) {
    const t = ({children: n}) => i.jsx(i.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Ev,
    t
}
function T1(e) {
    return m.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Ev
}
function _1(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
            const c = s(...l);
            return o(...l),
            c
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function A1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function L1(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Is(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = g => {
        const {scope: w, children: x} = g
          , h = L.useRef(null)
          , y = L.useRef(new Map).current;
        return i.jsx(o, {
            scope: w,
            itemMap: y,
            collectionRef: h,
            children: x
        })
    }
    ;
    a.displayName = t;
    const l = e + "CollectionSlot"
      , c = Ss(l)
      , u = L.forwardRef( (g, w) => {
        const {scope: x, children: h} = g
          , y = s(l, x)
          , S = Ie(w, y.collectionRef);
        return i.jsx(c, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = l;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , v = Ss(d)
      , p = L.forwardRef( (g, w) => {
        const {scope: x, children: h, ...y} = g
          , S = L.useRef(null)
          , j = Ie(w, S)
          , C = s(d, x);
        return L.useEffect( () => (C.itemMap.set(S, {
            ref: S,
            ...y
        }),
        () => void C.itemMap.delete(S))),
        i.jsx(v, {
            [f]: "",
            ref: j,
            children: h
        })
    }
    );
    p.displayName = d;
    function b(g) {
        const w = s(e + "CollectionConsumer", g);
        return L.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const y = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (C, N) => y.indexOf(C.ref.current) - y.indexOf(N.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: p
    }, b, r]
}
var D1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , xe = D1.reduce( (e, t) => {
    const n = Ss(`Primitive.${t}`)
      , r = m.forwardRef( (o, s) => {
        const {asChild: a, ...l} = o
          , c = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        i.jsx(c, {
            ...l,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Cv(e, t) {
    e && zs.flushSync( () => e.dispatchEvent(t))
}
function Ut(e) {
    const t = m.useRef(e);
    return m.useEffect( () => {
        t.current = e
    }
    ),
    m.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function M1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ut(e);
    m.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var O1 = "DismissableLayer", qu = "dismissableLayer.update", z1 = "dismissableLayer.pointerDownOutside", I1 = "dismissableLayer.focusOutside", Um, kv = m.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), zi = m.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: a, onDismiss: l, ...c} = e
      , u = m.useContext(kv)
      , [d,f] = m.useState(null)
      , v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = m.useState({})
      , b = Ie(t, N => f(N))
      , g = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , x = g.indexOf(w)
      , h = d ? g.indexOf(d) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= x
      , j = F1(N => {
        const E = N.target
          , R = [...u.branches].some(A => A.contains(E));
        !S || R || (o == null || o(N),
        a == null || a(N),
        N.defaultPrevented || l == null || l())
    }
    , v)
      , C = B1(N => {
        const E = N.target;
        [...u.branches].some(A => A.contains(E)) || (s == null || s(N),
        a == null || a(N),
        N.defaultPrevented || l == null || l())
    }
    , v);
    return M1(N => {
        h === u.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && l && (N.preventDefault(),
        l()))
    }
    , v),
    m.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Um = v.body.style.pointerEvents,
            v.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Vm(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Um)
            }
    }
    , [d, v, n, u]),
    m.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Vm())
    }
    , [d, u]),
    m.useEffect( () => {
        const N = () => p({});
        return document.addEventListener(qu, N),
        () => document.removeEventListener(qu, N)
    }
    , []),
    i.jsx(xe.div, {
        ...c,
        ref: b,
        style: {
            pointerEvents: y ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ce(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ce(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ce(e.onPointerDownCapture, j.onPointerDownCapture)
    })
}
);
zi.displayName = O1;
var $1 = "DismissableLayerBranch"
  , Pv = m.forwardRef( (e, t) => {
    const n = m.useContext(kv)
      , r = m.useRef(null)
      , o = Ie(t, r);
    return m.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    i.jsx(xe.div, {
        ...e,
        ref: o
    })
}
);
Pv.displayName = $1;
function F1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ut(e)
      , r = m.useRef(!1)
      , o = m.useRef( () => {}
    );
    return m.useEffect( () => {
        const s = l => {
            if (l.target && !r.current) {
                let c = function() {
                    Rv(z1, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = c,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : c()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function B1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ut(e)
      , r = m.useRef(!1);
    return m.useEffect( () => {
        const o = s => {
            s.target && !r.current && Rv(I1, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Vm() {
    const e = new CustomEvent(qu);
    document.dispatchEvent(e)
}
function Rv(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Cv(o, s) : o.dispatchEvent(s)
}
var U1 = zi
  , V1 = Pv
  , rn = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {}
  , H1 = "Portal"
  , nf = m.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,s] = m.useState(!1);
    rn( () => s(!0), []);
    const a = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return a ? Nv.createPortal(i.jsx(xe.div, {
        ...r,
        ref: t
    }), a) : null
}
);
nf.displayName = H1;
function W1(e, t) {
    return m.useReducer( (n, r) => t[n][r] ?? n, e)
}
var yo = e => {
    const {present: t, children: n} = e
      , r = q1(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : m.Children.only(n)
      , s = Ie(r.ref, Y1(o));
    return typeof n == "function" || r.isPresent ? m.cloneElement(o, {
        ref: s
    }) : null
}
;
yo.displayName = "Presence";
function q1(e) {
    const [t,n] = m.useState()
      , r = m.useRef(null)
      , o = m.useRef(e)
      , s = m.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [l,c] = W1(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return m.useEffect( () => {
        const u = va(r.current);
        s.current = l === "mounted" ? u : "none"
    }
    , [l]),
    rn( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const v = s.current
              , p = va(u);
            e ? c("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, c]),
    rn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = p => {
                const g = va(r.current).includes(p.animationName);
                if (p.target === t && g && (c("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , v = p => {
                p.target === t && (s.current = va(r.current))
            }
            ;
            return t.addEventListener("animationstart", v),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", v),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            c("ANIMATION_END")
    }
    , [t, c]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: m.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function va(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Y1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var G1 = dd[" useInsertionEffect ".trim().toString()] || rn;
function Tv({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,a] = Q1({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , c = l ? e : o;
    {
        const d = m.useRef(e !== void 0);
        m.useEffect( () => {
            const f = d.current;
            f !== l && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = l
        }
        , [l, r])
    }
    const u = m.useCallback(d => {
        var f;
        if (l) {
            const v = K1(d) ? d(e) : d;
            v !== e && ((f = a.current) == null || f.call(a, v))
        } else
            s(d)
    }
    , [l, e, s, a]);
    return [c, u]
}
function Q1({defaultProp: e, onChange: t}) {
    const [n,r] = m.useState(e)
      , o = m.useRef(n)
      , s = m.useRef(t);
    return G1( () => {
        s.current = t
    }
    , [t]),
    m.useEffect( () => {
        var a;
        o.current !== n && ((a = s.current) == null || a.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function K1(e) {
    return typeof e == "function"
}
var X1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Z1 = "VisuallyHidden"
  , Ii = m.forwardRef( (e, t) => i.jsx(xe.span, {
    ...e,
    ref: t,
    style: {
        ...X1,
        ...e.style
    }
}));
Ii.displayName = Z1;
var J1 = Ii
  , rf = "ToastProvider"
  , [of,eb,tb] = L1("Toast")
  , [_v,X2] = Is("Toast", [tb])
  , [nb,$i] = _v(rf)
  , Av = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: a} = e
      , [l,c] = m.useState(null)
      , [u,d] = m.useState(0)
      , f = m.useRef(!1)
      , v = m.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${rf}\`. Expected non-empty \`string\`.`),
    i.jsx(of.Provider, {
        scope: t,
        children: i.jsx(nb, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: l,
            onViewportChange: c,
            onToastAdd: m.useCallback( () => d(p => p + 1), []),
            onToastRemove: m.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: v,
            children: a
        })
    })
}
;
Av.displayName = rf;
var Lv = "ToastViewport"
  , rb = ["F8"]
  , Yu = "toast.viewportPause"
  , Gu = "toast.viewportResume"
  , Dv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=rb, label: o="Notifications ({hotkey})", ...s} = e
      , a = $i(Lv, n)
      , l = eb(n)
      , c = m.useRef(null)
      , u = m.useRef(null)
      , d = m.useRef(null)
      , f = m.useRef(null)
      , v = Ie(t, f, a.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = a.toastCount > 0;
    m.useEffect( () => {
        const w = x => {
            var y;
            r.length !== 0 && r.every(S => x[S] || x.code === S) && ((y = f.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    m.useEffect( () => {
        const w = c.current
          , x = f.current;
        if (b && w && x) {
            const h = () => {
                if (!a.isClosePausedRef.current) {
                    const C = new CustomEvent(Yu);
                    x.dispatchEvent(C),
                    a.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (a.isClosePausedRef.current) {
                    const C = new CustomEvent(Gu);
                    x.dispatchEvent(C),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = C => {
                !w.contains(C.relatedTarget) && y()
            }
              , j = () => {
                w.contains(document.activeElement) || y()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", j),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", j),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [b, a.isClosePausedRef]);
    const g = m.useCallback( ({tabbingDirection: w}) => {
        const h = l().map(y => {
            const S = y.ref.current
              , j = [S, ...gb(S)];
            return w === "forwards" ? j : j.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return m.useEffect( () => {
        const w = f.current;
        if (w) {
            const x = h => {
                var j, C, N;
                const y = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !y) {
                    const E = document.activeElement
                      , R = h.shiftKey;
                    if (h.target === w && R) {
                        (j = u.current) == null || j.focus();
                        return
                    }
                    const z = g({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , Y = z.findIndex(D => D === E);
                    Pc(z.slice(Y + 1)) ? h.preventDefault() : R ? (C = u.current) == null || C.focus() : (N = d.current) == null || N.focus()
                }
            }
            ;
            return w.addEventListener("keydown", x),
            () => w.removeEventListener("keydown", x)
        }
    }
    , [l, g]),
    i.jsxs(V1, {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && i.jsx(Qu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "forwards"
                });
                Pc(w)
            }
        }), i.jsx(of.Slot, {
            scope: n,
            children: i.jsx(xe.ol, {
                tabIndex: -1,
                ...s,
                ref: v
            })
        }), b && i.jsx(Qu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = g({
                    tabbingDirection: "backwards"
                });
                Pc(w)
            }
        })]
    })
}
);
Dv.displayName = Lv;
var Mv = "ToastFocusProxy"
  , Qu = m.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = $i(Mv, n);
    return i.jsx(Ii, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const l = a.relatedTarget;
            !((u = s.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Qu.displayName = Mv;
var $s = "Toast"
  , ob = "toast.swipeStart"
  , sb = "toast.swipeMove"
  , ab = "toast.swipeCancel"
  , ib = "toast.swipeEnd"
  , Ov = m.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a} = e
      , [l,c] = Tv({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: $s
    });
    return i.jsx(yo, {
        present: n || l,
        children: i.jsx(ub, {
            open: l,
            ...a,
            ref: t,
            onClose: () => c(!1),
            onPause: Ut(e.onPause),
            onResume: Ut(e.onResume),
            onSwipeStart: ce(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ce(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: ce(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ce(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                c(!1)
            }
            )
        })
    })
}
);
Ov.displayName = $s;
var [lb,cb] = _v($s, {
    onClose() {}
})
  , ub = m.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: a, onEscapeKeyDown: l, onPause: c, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: v, onSwipeEnd: p, ...b} = e
      , g = $i($s, n)
      , [w,x] = m.useState(null)
      , h = Ie(t, D => x(D))
      , y = m.useRef(null)
      , S = m.useRef(null)
      , j = o || g.duration
      , C = m.useRef(0)
      , N = m.useRef(j)
      , E = m.useRef(0)
      , {onToastAdd: R, onToastRemove: A} = g
      , $ = Ut( () => {
        var K;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((K = g.viewport) == null || K.focus()),
        a()
    }
    )
      , z = m.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(E.current),
        C.current = new Date().getTime(),
        E.current = window.setTimeout($, D))
    }
    , [$]);
    m.useEffect( () => {
        const D = g.viewport;
        if (D) {
            const K = () => {
                z(N.current),
                u == null || u()
            }
              , F = () => {
                const H = new Date().getTime() - C.current;
                N.current = N.current - H,
                window.clearTimeout(E.current),
                c == null || c()
            }
            ;
            return D.addEventListener(Yu, F),
            D.addEventListener(Gu, K),
            () => {
                D.removeEventListener(Yu, F),
                D.removeEventListener(Gu, K)
            }
        }
    }
    , [g.viewport, j, c, u, z]),
    m.useEffect( () => {
        s && !g.isClosePausedRef.current && z(j)
    }
    , [s, j, g.isClosePausedRef, z]),
    m.useEffect( () => (R(),
    () => A()), [R, A]);
    const Y = m.useMemo( () => w ? Vv(w) : null, [w]);
    return g.viewport ? i.jsxs(i.Fragment, {
        children: [Y && i.jsx(db, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Y
        }), i.jsx(lb, {
            scope: n,
            onClose: $,
            children: zs.createPortal(i.jsx(of.ItemSlot, {
                scope: n,
                children: i.jsx(U1, {
                    asChild: !0,
                    onEscapeKeyDown: ce(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || $(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: i.jsx(xe.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...b,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ce(e.onKeyDown, D => {
                            D.key === "Escape" && (l == null || l(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: ce(e.onPointerDown, D => {
                            D.button === 0 && (y.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: ce(e.onPointerMove, D => {
                            if (!y.current)
                                return;
                            const K = D.clientX - y.current.x
                              , F = D.clientY - y.current.y
                              , H = !!S.current
                              , P = ["left", "right"].includes(g.swipeDirection)
                              , T = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , M = P ? T(0, K) : 0
                              , W = P ? 0 : T(0, F)
                              , I = D.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: M,
                                y: W
                            }
                              , X = {
                                originalEvent: D,
                                delta: G
                            };
                            H ? (S.current = G,
                            xa(sb, f, X, {
                                discrete: !1
                            })) : Hm(G, g.swipeDirection, I) ? (S.current = G,
                            xa(ob, d, X, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(K) > I || Math.abs(F) > I) && (y.current = null)
                        }
                        ),
                        onPointerUp: ce(e.onPointerUp, D => {
                            const K = S.current
                              , F = D.target;
                            if (F.hasPointerCapture(D.pointerId) && F.releasePointerCapture(D.pointerId),
                            S.current = null,
                            y.current = null,
                            K) {
                                const H = D.currentTarget
                                  , P = {
                                    originalEvent: D,
                                    delta: K
                                };
                                Hm(K, g.swipeDirection, g.swipeThreshold) ? xa(ib, p, P, {
                                    discrete: !0
                                }) : xa(ab, v, P, {
                                    discrete: !0
                                }),
                                H.addEventListener("click", T => T.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , db = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = $i($s, t)
      , [s,a] = m.useState(!1)
      , [l,c] = m.useState(!1);
    return pb( () => a(!0)),
    m.useEffect( () => {
        const u = window.setTimeout( () => c(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : i.jsx(nf, {
        asChild: !0,
        children: i.jsx(Ii, {
            ...r,
            children: s && i.jsxs(i.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , fb = "ToastTitle"
  , zv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return i.jsx(xe.div, {
        ...r,
        ref: t
    })
}
);
zv.displayName = fb;
var mb = "ToastDescription"
  , Iv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return i.jsx(xe.div, {
        ...r,
        ref: t
    })
}
);
Iv.displayName = mb;
var $v = "ToastAction"
  , Fv = m.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? i.jsx(Uv, {
        altText: n,
        asChild: !0,
        children: i.jsx(sf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${$v}\`. Expected non-empty \`string\`.`),
    null)
}
);
Fv.displayName = $v;
var Bv = "ToastClose"
  , sf = m.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = cb(Bv, n);
    return i.jsx(Uv, {
        asChild: !0,
        children: i.jsx(xe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ce(e.onClick, o.onClose)
        })
    })
}
);
sf.displayName = Bv;
var Uv = m.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return i.jsx(xe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Vv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        hb(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const a = r.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...Vv(r))
        }
    }
    ),
    t
}
function xa(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Cv(o, s) : o.dispatchEvent(s)
}
var Hm = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function pb(e= () => {}
) {
    const t = Ut(e);
    rn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function hb(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function gb(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Pc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var vb = Av
  , Hv = Dv
  , Wv = Ov
  , qv = zv
  , Yv = Iv
  , Gv = Fv
  , Qv = sf;
function Kv(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Kv(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Xv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Kv(e)) && (r && (r += " "),
        r += t);
    return r
}
const Wm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , qm = Xv
  , Zv = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return qm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , a = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = s == null ? void 0 : s[u];
        if (d === null)
            return null;
        const v = Wm(d) || Wm(f);
        return o[u][v]
    }
    )
      , l = n && Object.entries(n).reduce( (u, d) => {
        let[f,v] = d;
        return v === void 0 || (u[f] = v),
        u
    }
    , {})
      , c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: v, ...p} = d;
        return Object.entries(p).every(b => {
            let[g,w] = b;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...l
            }[g]) : {
                ...s,
                ...l
            }[g] === w
        }
        ) ? [...u, f, v] : u
    }
    , []);
    return qm(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Jv = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var yb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = m.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: a, ...l}, c) => m.createElement("svg", {
    ref: c,
    ...yb,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Jv("lucide", o),
    ...l
}, [...a.map( ([u,d]) => m.createElement(u, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = (e, t) => {
    const n = m.forwardRef( ({className: r, ...o}, s) => m.createElement(wb, {
        ref: s,
        iconNode: t,
        className: Jv(`lucide-${xb(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = Fi("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = Fi("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = Fi("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = Fi("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , af = "-"
  , Sb = e => {
    const t = Eb(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            const l = a.split(af);
            return l[0] === "" && l.length !== 1 && l.shift(),
            tx(l, t) || jb(a)
        }
        ,
        getConflictingClassGroupIds: (a, l) => {
            const c = n[a] || [];
            return l && r[a] ? [...c, ...r[a]] : c
        }
    }
}
  , tx = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? tx(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(af);
    return (a = t.validators.find( ({validator: l}) => l(s))) == null ? void 0 : a.classGroupId
}
  , Ym = /^\[(.+)\]$/
  , jb = e => {
    if (Ym.test(e)) {
        const t = Ym.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Eb = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return kb(Object.entries(e.classGroups), n).forEach( ([s,a]) => {
        Ku(a, r, s, t)
    }
    ),
    r
}
  , Ku = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : Gm(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Cb(o)) {
                Ku(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,a]) => {
            Ku(a, Gm(t, s), n, r)
        }
        )
    }
    )
}
  , Gm = (e, t) => {
    let n = e;
    return t.split(af).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Cb = e => e.isThemeGetter
  , kb = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([a,l]) => [t + a, l])) : s);
    return [n, o]
}
) : e
  , Pb = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, a) => {
        n.set(s, a),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                a
        },
        set(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
  , nx = "!"
  , Rb = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , a = l => {
        const c = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < l.length; w++) {
            let x = l[w];
            if (u === 0) {
                if (x === o && (r || l.slice(w, w + s) === t)) {
                    c.push(l.slice(d, w)),
                    d = w + s;
                    continue
                }
                if (x === "/") {
                    f = w;
                    continue
                }
            }
            x === "[" ? u++ : x === "]" && u--
        }
        const v = c.length === 0 ? l : l.substring(d)
          , p = v.startsWith(nx)
          , b = p ? v.substring(1) : v
          , g = f && f > d ? f - d : void 0;
        return {
            modifiers: c,
            hasImportantModifier: p,
            baseClassName: b,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: a
    }) : a
}
  , Tb = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , _b = e => ({
    cache: Pb(e.cacheSize),
    parseClassName: Rb(e),
    ...Sb(e)
})
  , Ab = /\s+/
  , Lb = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , a = e.trim().split(Ab);
    let l = "";
    for (let c = a.length - 1; c >= 0; c -= 1) {
        const u = a[c]
          , {modifiers: d, hasImportantModifier: f, baseClassName: v, maybePostfixModifierPosition: p} = n(u);
        let b = !!p
          , g = r(b ? v.substring(0, p) : v);
        if (!g) {
            if (!b) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(v),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            b = !1
        }
        const w = Tb(d).join(":")
          , x = f ? w + nx : w
          , h = x + g;
        if (s.includes(h))
            continue;
        s.push(h);
        const y = o(g, b);
        for (let S = 0; S < y.length; ++S) {
            const j = y[S];
            s.push(x + j)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Db() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = rx(t)) && (r && (r += " "),
        r += n);
    return r
}
const rx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = rx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Mb(e, ...t) {
    let n, r, o, s = a;
    function a(c) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = _b(u),
        r = n.cache.get,
        o = n.cache.set,
        s = l,
        l(c)
    }
    function l(c) {
        const u = r(c);
        if (u)
            return u;
        const d = Lb(c, n);
        return o(c, d),
        d
    }
    return function() {
        return s(Db.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , ox = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Ob = /^\d+\/\d+$/
  , zb = new Set(["px", "full", "screen"])
  , Ib = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , $b = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Fb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Bb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Ub = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Wt = e => Qr(e) || zb.has(e) || Ob.test(e)
  , hn = e => wo(e, "length", Kb)
  , Qr = e => !!e && !Number.isNaN(Number(e))
  , Rc = e => wo(e, "number", Qr)
  , Fo = e => !!e && Number.isInteger(Number(e))
  , Vb = e => e.endsWith("%") && Qr(e.slice(0, -1))
  , q = e => ox.test(e)
  , gn = e => Ib.test(e)
  , Hb = new Set(["length", "size", "percentage"])
  , Wb = e => wo(e, Hb, sx)
  , qb = e => wo(e, "position", sx)
  , Yb = new Set(["image", "url"])
  , Gb = e => wo(e, Yb, Zb)
  , Qb = e => wo(e, "", Xb)
  , Bo = () => !0
  , wo = (e, t, n) => {
    const r = ox.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Kb = e => $b.test(e) && !Fb.test(e)
  , sx = () => !1
  , Xb = e => Bb.test(e)
  , Zb = e => Ub.test(e)
  , Jb = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , o = oe("borderColor")
      , s = oe("borderRadius")
      , a = oe("borderSpacing")
      , l = oe("borderWidth")
      , c = oe("contrast")
      , u = oe("grayscale")
      , d = oe("hueRotate")
      , f = oe("invert")
      , v = oe("gap")
      , p = oe("gradientColorStops")
      , b = oe("gradientColorStopPositions")
      , g = oe("inset")
      , w = oe("margin")
      , x = oe("opacity")
      , h = oe("padding")
      , y = oe("saturate")
      , S = oe("scale")
      , j = oe("sepia")
      , C = oe("skew")
      , N = oe("space")
      , E = oe("translate")
      , R = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", q, t]
      , z = () => [q, t]
      , Y = () => ["", Wt, hn]
      , D = () => ["auto", Qr, q]
      , K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , F = () => ["solid", "dashed", "dotted", "double", "none"]
      , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , T = () => ["", "0", q]
      , M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , W = () => [Qr, q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Bo],
            spacing: [Wt, hn],
            blur: ["none", "", gn, q],
            brightness: W(),
            borderColor: [e],
            borderRadius: ["none", "", "full", gn, q],
            borderSpacing: z(),
            borderWidth: Y(),
            contrast: W(),
            grayscale: T(),
            hueRotate: W(),
            invert: T(),
            gap: z(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Vb, hn],
            inset: $(),
            margin: $(),
            opacity: W(),
            padding: z(),
            saturate: W(),
            scale: W(),
            sepia: T(),
            skew: W(),
            space: z(),
            translate: z()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", q]
            }],
            container: ["container"],
            columns: [{
                columns: [gn]
            }],
            "break-after": [{
                "break-after": M()
            }],
            "break-before": [{
                "break-before": M()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...K(), q]
            }],
            overflow: [{
                overflow: A()
            }],
            "overflow-x": [{
                "overflow-x": A()
            }],
            "overflow-y": [{
                "overflow-y": A()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Fo, q]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", q]
            }],
            grow: [{
                grow: T()
            }],
            shrink: [{
                shrink: T()
            }],
            order: [{
                order: ["first", "last", "none", Fo, q]
            }],
            "grid-cols": [{
                "grid-cols": [Bo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Fo, q]
                }, q]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [Bo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Fo, q]
                }, q]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", q]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
            }],
            "min-w": [{
                "min-w": [q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [gn]
                }, gn]
            }],
            h: [{
                h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", gn, hn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Rc]
            }],
            "font-family": [{
                font: [Bo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Qr, Rc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Wt, q]
            }],
            "list-image": [{
                "list-image": ["none", q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [x]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...F(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Wt, hn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Wt, q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: z()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [x]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...K(), qb]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Wb]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Gb]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [x]
            }],
            "border-style": [{
                border: [...F(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [x]
            }],
            "divide-style": [{
                divide: F()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...F()]
            }],
            "outline-offset": [{
                "outline-offset": [Wt, q]
            }],
            "outline-w": [{
                outline: [Wt, hn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Y()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [x]
            }],
            "ring-offset-w": [{
                "ring-offset": [Wt, hn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", gn, Qb]
            }],
            "shadow-color": [{
                shadow: [Bo]
            }],
            opacity: [{
                opacity: [x]
            }],
            "mix-blend": [{
                "mix-blend": [...H(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": H()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", gn, q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [j]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [j]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
            }],
            duration: [{
                duration: W()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", q]
            }],
            delay: [{
                delay: W()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Fo, q]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": z()
            }],
            "scroll-mx": [{
                "scroll-mx": z()
            }],
            "scroll-my": [{
                "scroll-my": z()
            }],
            "scroll-ms": [{
                "scroll-ms": z()
            }],
            "scroll-me": [{
                "scroll-me": z()
            }],
            "scroll-mt": [{
                "scroll-mt": z()
            }],
            "scroll-mr": [{
                "scroll-mr": z()
            }],
            "scroll-mb": [{
                "scroll-mb": z()
            }],
            "scroll-ml": [{
                "scroll-ml": z()
            }],
            "scroll-p": [{
                "scroll-p": z()
            }],
            "scroll-px": [{
                "scroll-px": z()
            }],
            "scroll-py": [{
                "scroll-py": z()
            }],
            "scroll-ps": [{
                "scroll-ps": z()
            }],
            "scroll-pe": [{
                "scroll-pe": z()
            }],
            "scroll-pt": [{
                "scroll-pt": z()
            }],
            "scroll-pr": [{
                "scroll-pr": z()
            }],
            "scroll-pb": [{
                "scroll-pb": z()
            }],
            "scroll-pl": [{
                "scroll-pl": z()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Wt, hn, Rc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , eN = Mb(Jb);
function rt(...e) {
    return eN(Xv(e))
}
const tN = vb
  , ax = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Hv, {
    ref: n,
    className: rt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
ax.displayName = Hv.displayName;
const nN = Zv("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , ix = m.forwardRef( ({className: e, variant: t, ...n}, r) => i.jsx(Wv, {
    ref: r,
    className: rt(nN({
        variant: t
    }), e),
    ...n
}));
ix.displayName = Wv.displayName;
const rN = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Gv, {
    ref: n,
    className: rt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
rN.displayName = Gv.displayName;
const lx = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Qv, {
    ref: n,
    className: rt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: i.jsx(ex, {
        className: "h-4 w-4"
    })
}));
lx.displayName = Qv.displayName;
const cx = m.forwardRef( ({className: e, ...t}, n) => i.jsx(qv, {
    ref: n,
    className: rt("text-sm font-semibold", e),
    ...t
}));
cx.displayName = qv.displayName;
const ux = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Yv, {
    ref: n,
    className: rt("text-sm opacity-90", e),
    ...t
}));
ux.displayName = Yv.displayName;
function oN() {
    const {toasts: e} = j1();
    return i.jsxs(tN, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return i.jsxs(ix, {
                ...s,
                children: [i.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && i.jsx(cx, {
                        children: n
                    }), r && i.jsx(ux, {
                        children: r
                    })]
                }), o, i.jsx(lx, {})]
            }, t)
        }), i.jsx(ax, {})]
    })
}
var Qm = ["light", "dark"]
  , sN = "(prefers-color-scheme: dark)"
  , aN = m.createContext(void 0)
  , iN = {
    setTheme: e => {}
    ,
    themes: []
}
  , lN = () => {
    var e;
    return (e = m.useContext(aN)) != null ? e : iN
}
;
m.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: a, attrs: l, nonce: c}) => {
    let u = s === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Qm.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , v = (b, g=!1, w=!0) => {
        let x = a ? a[b] : b
          , h = g ? b + "|| ''" : `'${x}'`
          , y = "";
        return o && w && !g && Qm.includes(b) && (y += `d.style.colorScheme = '${b}';`),
        n === "class" ? g || x ? y += `c.add(${h})` : y += "null" : x && (y += `d[s](n,${h})`),
        y
    }
      , p = e ? `!function(){${d}${v(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sN}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + v(s, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${v(a ? "x[e]" : "e", !0)}}else{${v(s, !1, !1)};}${f}}catch(t){}}();`;
    return m.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var cN = e => {
    switch (e) {
    case "success":
        return fN;
    case "info":
        return pN;
    case "warning":
        return mN;
    case "error":
        return hN;
    default:
        return null
    }
}
  , uN = Array(12).fill(0)
  , dN = ({visible: e, className: t}) => L.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, L.createElement("div", {
    className: "sonner-spinner"
}, uN.map( (n, r) => L.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , fN = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , mN = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , pN = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , hN = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, L.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , gN = L.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, L.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), L.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , vN = () => {
    let[e,t] = L.useState(document.hidden);
    return L.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Xu = 1
  , xN = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Xu++
              , s = this.toasts.find(l => l.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: a,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, a = r.then(async c => {
                if (s = ["resolve", c],
                L.isValidElement(c))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: c
                    });
                else if (wN(c) && !c.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${c.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${c.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(c) : t.success
                      , d = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async c => {
                if (s = ["reject", c],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(c) : t.error
                      , d = typeof t.description == "function" ? await t.description(c) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var c;
                o && (this.dismiss(n),
                n = void 0),
                (c = t.finally) == null || c.call(t)
            }
            ), l = () => new Promise( (c, u) => a.then( () => s[0] === "reject" ? u(s[1]) : c(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Xu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ue = new xN
  , yN = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Xu++;
    return Ue.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , wN = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , bN = yN
  , NN = () => Ue.toasts
  , SN = () => Ue.getActiveToasts();
Object.assign(bN, {
    success: Ue.success,
    info: Ue.info,
    warning: Ue.warning,
    error: Ue.error,
    custom: Ue.custom,
    message: Ue.message,
    promise: Ue.promise,
    dismiss: Ue.dismiss,
    loading: Ue.loading
}, {
    getHistory: NN,
    getToasts: SN
});
function jN(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
jN(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ya(e) {
    return e.label !== void 0
}
var EN = 3
  , CN = "32px"
  , kN = "16px"
  , Km = 4e3
  , PN = 356
  , RN = 14
  , TN = 20
  , _N = 200;
function xt(...e) {
    return e.filter(Boolean).join(" ")
}
function AN(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var LN = e => {
    var t, n, r, o, s, a, l, c, u, d, f;
    let {invert: v, toast: p, unstyled: b, interacting: g, setHeights: w, visibleToasts: x, heights: h, index: y, toasts: S, expanded: j, removeToast: C, defaultRichColors: N, closeButton: E, style: R, cancelButtonStyle: A, actionButtonStyle: $, className: z="", descriptionClassName: Y="", duration: D, position: K, gap: F, loadingIcon: H, expandByDefault: P, classNames: T, icons: M, closeButtonAriaLabel: W="Close toast", pauseWhenPageIsHidden: I} = e
      , [G,X] = L.useState(null)
      , [ge,ke] = L.useState(null)
      , [ee,br] = L.useState(!1)
      , [ln,Qn] = L.useState(!1)
      , [cn,Nr] = L.useState(!1)
      , [un,Ks] = L.useState(!1)
      , [Ql,Xs] = L.useState(!1)
      , [Kl,To] = L.useState(0)
      , [Sr,jf] = L.useState(0)
      , _o = L.useRef(p.duration || D || Km)
      , Ef = L.useRef(null)
      , Kn = L.useRef(null)
      , Iy = y === 0
      , $y = y + 1 <= x
      , ot = p.type
      , jr = p.dismissible !== !1
      , Fy = p.className || ""
      , By = p.descriptionClassName || ""
      , Zs = L.useMemo( () => h.findIndex(U => U.toastId === p.id) || 0, [h, p.id])
      , Uy = L.useMemo( () => {
        var U;
        return (U = p.closeButton) != null ? U : E
    }
    , [p.closeButton, E])
      , Cf = L.useMemo( () => p.duration || D || Km, [p.duration, D])
      , Xl = L.useRef(0)
      , Er = L.useRef(0)
      , kf = L.useRef(0)
      , Cr = L.useRef(null)
      , [Vy,Hy] = K.split("-")
      , Pf = L.useMemo( () => h.reduce( (U, ne, ie) => ie >= Zs ? U : U + ne.height, 0), [h, Zs])
      , Rf = vN()
      , Wy = p.invert || v
      , Zl = ot === "loading";
    Er.current = L.useMemo( () => Zs * F + Pf, [Zs, Pf]),
    L.useEffect( () => {
        _o.current = Cf
    }
    , [Cf]),
    L.useEffect( () => {
        br(!0)
    }
    , []),
    L.useEffect( () => {
        let U = Kn.current;
        if (U) {
            let ne = U.getBoundingClientRect().height;
            return jf(ne),
            w(ie => [{
                toastId: p.id,
                height: ne,
                position: p.position
            }, ...ie]),
            () => w(ie => ie.filter(pt => pt.toastId !== p.id))
        }
    }
    , [w, p.id]),
    L.useLayoutEffect( () => {
        if (!ee)
            return;
        let U = Kn.current
          , ne = U.style.height;
        U.style.height = "auto";
        let ie = U.getBoundingClientRect().height;
        U.style.height = ne,
        jf(ie),
        w(pt => pt.find(ht => ht.toastId === p.id) ? pt.map(ht => ht.toastId === p.id ? {
            ...ht,
            height: ie
        } : ht) : [{
            toastId: p.id,
            height: ie,
            position: p.position
        }, ...pt])
    }
    , [ee, p.title, p.description, w, p.id]);
    let dn = L.useCallback( () => {
        Qn(!0),
        To(Er.current),
        w(U => U.filter(ne => ne.toastId !== p.id)),
        setTimeout( () => {
            C(p)
        }
        , _N)
    }
    , [p, C, w, Er]);
    L.useEffect( () => {
        if (p.promise && ot === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let U;
        return j || g || I && Rf ? ( () => {
            if (kf.current < Xl.current) {
                let ne = new Date().getTime() - Xl.current;
                _o.current = _o.current - ne
            }
            kf.current = new Date().getTime()
        }
        )() : _o.current !== 1 / 0 && (Xl.current = new Date().getTime(),
        U = setTimeout( () => {
            var ne;
            (ne = p.onAutoClose) == null || ne.call(p, p),
            dn()
        }
        , _o.current)),
        () => clearTimeout(U)
    }
    , [j, g, p, ot, I, Rf, dn]),
    L.useEffect( () => {
        p.delete && dn()
    }
    , [dn, p.delete]);
    function qy() {
        var U, ne, ie;
        return M != null && M.loading ? L.createElement("div", {
            className: xt(T == null ? void 0 : T.loader, (U = p == null ? void 0 : p.classNames) == null ? void 0 : U.loader, "sonner-loader"),
            "data-visible": ot === "loading"
        }, M.loading) : H ? L.createElement("div", {
            className: xt(T == null ? void 0 : T.loader, (ne = p == null ? void 0 : p.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": ot === "loading"
        }, H) : L.createElement(dN, {
            className: xt(T == null ? void 0 : T.loader, (ie = p == null ? void 0 : p.classNames) == null ? void 0 : ie.loader),
            visible: ot === "loading"
        })
    }
    return L.createElement("li", {
        tabIndex: 0,
        ref: Kn,
        className: xt(z, Fy, T == null ? void 0 : T.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, T == null ? void 0 : T.default, T == null ? void 0 : T[ot], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[ot]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : N,
        "data-styled": !(p.jsx || p.unstyled || b),
        "data-mounted": ee,
        "data-promise": !!p.promise,
        "data-swiped": Ql,
        "data-removed": ln,
        "data-visible": $y,
        "data-y-position": Vy,
        "data-x-position": Hy,
        "data-index": y,
        "data-front": Iy,
        "data-swiping": cn,
        "data-dismissible": jr,
        "data-type": ot,
        "data-invert": Wy,
        "data-swipe-out": un,
        "data-swipe-direction": ge,
        "data-expanded": !!(j || P && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${ln ? Kl : Er.current}px`,
            "--initial-height": P ? "auto" : `${Sr}px`,
            ...R,
            ...p.style
        },
        onDragEnd: () => {
            Nr(!1),
            X(null),
            Cr.current = null
        }
        ,
        onPointerDown: U => {
            Zl || !jr || (Ef.current = new Date,
            To(Er.current),
            U.target.setPointerCapture(U.pointerId),
            U.target.tagName !== "BUTTON" && (Nr(!0),
            Cr.current = {
                x: U.clientX,
                y: U.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var U, ne, ie, pt;
            if (un || !jr)
                return;
            Cr.current = null;
            let ht = Number(((U = Kn.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , fn = Number(((ne = Kn.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Xn = new Date().getTime() - ((ie = Ef.current) == null ? void 0 : ie.getTime())
              , gt = G === "x" ? ht : fn
              , mn = Math.abs(gt) / Xn;
            if (Math.abs(gt) >= TN || mn > .11) {
                To(Er.current),
                (pt = p.onDismiss) == null || pt.call(p, p),
                ke(G === "x" ? ht > 0 ? "right" : "left" : fn > 0 ? "down" : "up"),
                dn(),
                Ks(!0),
                Xs(!1);
                return
            }
            Nr(!1),
            X(null)
        }
        ,
        onPointerMove: U => {
            var ne, ie, pt, ht;
            if (!Cr.current || !jr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
                return;
            let fn = U.clientY - Cr.current.y
              , Xn = U.clientX - Cr.current.x
              , gt = (ie = e.swipeDirections) != null ? ie : AN(K);
            !G && (Math.abs(Xn) > 1 || Math.abs(fn) > 1) && X(Math.abs(Xn) > Math.abs(fn) ? "x" : "y");
            let mn = {
                x: 0,
                y: 0
            };
            G === "y" ? (gt.includes("top") || gt.includes("bottom")) && (gt.includes("top") && fn < 0 || gt.includes("bottom") && fn > 0) && (mn.y = fn) : G === "x" && (gt.includes("left") || gt.includes("right")) && (gt.includes("left") && Xn < 0 || gt.includes("right") && Xn > 0) && (mn.x = Xn),
            (Math.abs(mn.x) > 0 || Math.abs(mn.y) > 0) && Xs(!0),
            (pt = Kn.current) == null || pt.style.setProperty("--swipe-amount-x", `${mn.x}px`),
            (ht = Kn.current) == null || ht.style.setProperty("--swipe-amount-y", `${mn.y}px`)
        }
    }, Uy && !p.jsx ? L.createElement("button", {
        "aria-label": W,
        "data-disabled": Zl,
        "data-close-button": !0,
        onClick: Zl || !jr ? () => {}
        : () => {
            var U;
            dn(),
            (U = p.onDismiss) == null || U.call(p, p)
        }
        ,
        className: xt(T == null ? void 0 : T.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = M == null ? void 0 : M.close) != null ? s : gN) : null, p.jsx || m.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : L.createElement(L.Fragment, null, ot || p.icon || p.promise ? L.createElement("div", {
        "data-icon": "",
        className: xt(T == null ? void 0 : T.icon, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || qy() : null, p.type !== "loading" ? p.icon || (M == null ? void 0 : M[ot]) || cN(ot) : null) : null, L.createElement("div", {
        "data-content": "",
        className: xt(T == null ? void 0 : T.content, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.content)
    }, L.createElement("div", {
        "data-title": "",
        className: xt(T == null ? void 0 : T.title, (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? L.createElement("div", {
        "data-description": "",
        className: xt(Y, By, T == null ? void 0 : T.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), m.isValidElement(p.cancel) ? p.cancel : p.cancel && ya(p.cancel) ? L.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || A,
        onClick: U => {
            var ne, ie;
            ya(p.cancel) && jr && ((ie = (ne = p.cancel).onClick) == null || ie.call(ne, U),
            dn())
        }
        ,
        className: xt(T == null ? void 0 : T.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, m.isValidElement(p.action) ? p.action : p.action && ya(p.action) ? L.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || $,
        onClick: U => {
            var ne, ie;
            ya(p.action) && ((ie = (ne = p.action).onClick) == null || ie.call(ne, U),
            !U.defaultPrevented && dn())
        }
        ,
        className: xt(T == null ? void 0 : T.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
}
;
function Xm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function DN(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , a = s ? "--mobile-offset" : "--offset"
          , l = s ? kN : CN;
        function c(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? c(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${a}-${u}`] = l : n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : c(l)
    }
    ),
    n
}
var MN = m.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: a, className: l, offset: c, mobileOffset: u, theme: d="light", richColors: f, duration: v, style: p, visibleToasts: b=EN, toastOptions: g, dir: w=Xm(), gap: x=RN, loadingIcon: h, icons: y, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: j} = e
      , [C,N] = L.useState([])
      , E = L.useMemo( () => Array.from(new Set([r].concat(C.filter(I => I.position).map(I => I.position)))), [C, r])
      , [R,A] = L.useState([])
      , [$,z] = L.useState(!1)
      , [Y,D] = L.useState(!1)
      , [K,F] = L.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , H = L.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , T = L.useRef(null)
      , M = L.useRef(!1)
      , W = L.useCallback(I => {
        N(G => {
            var X;
            return (X = G.find(ge => ge.id === I.id)) != null && X.delete || Ue.dismiss(I.id),
            G.filter( ({id: ge}) => ge !== I.id)
        }
        )
    }
    , []);
    return L.useEffect( () => Ue.subscribe(I => {
        if (I.dismiss) {
            N(G => G.map(X => X.id === I.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Nv.flushSync( () => {
                N(G => {
                    let X = G.findIndex(ge => ge.id === I.id);
                    return X !== -1 ? [...G.slice(0, X), {
                        ...G[X],
                        ...I
                    }, ...G.slice(X + 1)] : [I, ...G]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    L.useEffect( () => {
        if (d !== "system") {
            F(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")),
        typeof window > "u")
            return;
        let I = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            I.addEventListener("change", ({matches: G}) => {
                F(G ? "dark" : "light")
            }
            )
        } catch {
            I.addListener( ({matches: X}) => {
                try {
                    F(X ? "dark" : "light")
                } catch (ge) {
                    console.error(ge)
                }
            }
            )
        }
    }
    , [d]),
    L.useEffect( () => {
        C.length <= 1 && z(!1)
    }
    , [C]),
    L.useEffect( () => {
        let I = G => {
            var X, ge;
            o.every(ke => G[ke] || G.code === ke) && (z(!0),
            (X = H.current) == null || X.focus()),
            G.code === "Escape" && (document.activeElement === H.current || (ge = H.current) != null && ge.contains(document.activeElement)) && z(!1)
        }
        ;
        return document.addEventListener("keydown", I),
        () => document.removeEventListener("keydown", I)
    }
    , [o]),
    L.useEffect( () => {
        if (H.current)
            return () => {
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null,
                M.current = !1)
            }
    }
    , [H.current]),
    L.createElement("section", {
        ref: t,
        "aria-label": `${S} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, E.map( (I, G) => {
        var X;
        let[ge,ke] = I.split("-");
        return C.length ? L.createElement("ol", {
            key: I,
            dir: w === "auto" ? Xm() : w,
            tabIndex: -1,
            ref: H,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": K,
            "data-y-position": ge,
            "data-lifted": $ && C.length > 1 && !s,
            "data-x-position": ke,
            style: {
                "--front-toast-height": `${((X = R[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${PN}px`,
                "--gap": `${x}px`,
                ...p,
                ...DN(c, u)
            },
            onBlur: ee => {
                M.current && !ee.currentTarget.contains(ee.relatedTarget) && (M.current = !1,
                T.current && (T.current.focus({
                    preventScroll: !0
                }),
                T.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || M.current || (M.current = !0,
                T.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => z(!0),
            onMouseMove: () => z(!0),
            onMouseLeave: () => {
                Y || z(!1)
            }
            ,
            onDragEnd: () => z(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, C.filter(ee => !ee.position && G === 0 || ee.position === I).map( (ee, br) => {
            var ln, Qn;
            return L.createElement(LN, {
                key: ee.id,
                icons: y,
                index: br,
                toast: ee,
                defaultRichColors: f,
                duration: (ln = g == null ? void 0 : g.duration) != null ? ln : v,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (Qn = g == null ? void 0 : g.closeButton) != null ? Qn : a,
                interacting: Y,
                position: I,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: W,
                toasts: C.filter(cn => cn.position == ee.position),
                heights: R.filter(cn => cn.position == ee.position),
                setHeights: A,
                expandByDefault: s,
                gap: x,
                loadingIcon: h,
                expanded: $,
                pauseWhenPageIsHidden: j,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const ON = ({...e}) => {
    const {theme: t="system"} = lN();
    return i.jsx(MN, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var zN = dd[" useId ".trim().toString()] || ( () => {}
)
  , IN = 0;
function Tc(e) {
    const [t,n] = m.useState(zN());
    return rn( () => {
        e || n(r => r ?? String(IN++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const $N = ["top", "right", "bottom", "left"]
  , Bn = Math.min
  , Ke = Math.max
  , mi = Math.round
  , wa = Math.floor
  , Bt = e => ({
    x: e,
    y: e
})
  , FN = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , BN = {
    start: "end",
    end: "start"
};
function Zu(e, t, n) {
    return Ke(e, Bn(t, n))
}
function on(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sn(e) {
    return e.split("-")[0]
}
function bo(e) {
    return e.split("-")[1]
}
function lf(e) {
    return e === "x" ? "y" : "x"
}
function cf(e) {
    return e === "y" ? "height" : "width"
}
const UN = new Set(["top", "bottom"]);
function It(e) {
    return UN.has(sn(e)) ? "y" : "x"
}
function uf(e) {
    return lf(It(e))
}
function VN(e, t, n) {
    n === void 0 && (n = !1);
    const r = bo(e)
      , o = uf(e)
      , s = cf(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = pi(a)),
    [a, pi(a)]
}
function HN(e) {
    const t = pi(e);
    return [Ju(e), t, Ju(t)]
}
function Ju(e) {
    return e.replace(/start|end/g, t => BN[t])
}
const Zm = ["left", "right"]
  , Jm = ["right", "left"]
  , WN = ["top", "bottom"]
  , qN = ["bottom", "top"];
function YN(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Jm : Zm : t ? Zm : Jm;
    case "left":
    case "right":
        return t ? WN : qN;
    default:
        return []
    }
}
function GN(e, t, n, r) {
    const o = bo(e);
    let s = YN(sn(e), n === "start", r);
    return o && (s = s.map(a => a + "-" + o),
    t && (s = s.concat(s.map(Ju)))),
    s
}
function pi(e) {
    return e.replace(/left|right|bottom|top/g, t => FN[t])
}
function QN(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function dx(e) {
    return typeof e != "number" ? QN(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function hi(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function ep(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = It(t)
      , a = uf(t)
      , l = cf(a)
      , c = sn(t)
      , u = s === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , v = r[l] / 2 - o[l] / 2;
    let p;
    switch (c) {
    case "top":
        p = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (bo(t)) {
    case "start":
        p[a] -= v * (n && u ? -1 : 1);
        break;
    case "end":
        p[a] += v * (n && u ? -1 : 1);
        break
    }
    return p
}
const KN = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: a} = n
      , l = s.filter(Boolean)
      , c = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = ep(u, r, c)
      , v = r
      , p = {}
      , b = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: w, fn: x} = l[g]
          , {x: h, y, data: S, reset: j} = await x({
            x: d,
            y: f,
            initialPlacement: r,
            placement: v,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = y ?? f,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...S
            }
        },
        j && b <= 50 && (b++,
        typeof j == "object" && (j.placement && (v = j.placement),
        j.rects && (u = j.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : j.rects),
        {x: d, y: f} = ep(u, v, c)),
        g = -1)
    }
    return {
        x: d,
        y: f,
        placement: v,
        strategy: o,
        middlewareData: p
    }
}
;
async function js(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: a, elements: l, strategy: c} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: v=!1, padding: p=0} = on(t, e)
      , b = dx(p)
      , w = l[v ? f === "floating" ? "reference" : "floating" : f]
      , x = hi(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: c
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , j = hi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: y,
        strategy: c
    }) : h);
    return {
        top: (x.top - j.top + b.top) / S.y,
        bottom: (j.bottom - x.bottom + b.bottom) / S.y,
        left: (x.left - j.left + b.left) / S.x,
        right: (j.right - x.right + b.right) / S.x
    }
}
const XN = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: a, elements: l, middlewareData: c} = t
          , {element: u, padding: d=0} = on(e, t) || {};
        if (u == null)
            return {};
        const f = dx(d)
          , v = {
            x: n,
            y: r
        }
          , p = uf(o)
          , b = cf(p)
          , g = await a.getDimensions(u)
          , w = p === "y"
          , x = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , y = w ? "clientHeight" : "clientWidth"
          , S = s.reference[b] + s.reference[p] - v[p] - s.floating[b]
          , j = v[p] - s.reference[p]
          , C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let N = C ? C[y] : 0;
        (!N || !await (a.isElement == null ? void 0 : a.isElement(C))) && (N = l.floating[y] || s.floating[b]);
        const E = S / 2 - j / 2
          , R = N / 2 - g[b] / 2 - 1
          , A = Bn(f[x], R)
          , $ = Bn(f[h], R)
          , z = A
          , Y = N - g[b] - $
          , D = N / 2 - g[b] / 2 + E
          , K = Zu(z, D, Y)
          , F = !c.arrow && bo(o) != null && D !== K && s.reference[b] / 2 - (D < z ? A : $) - g[b] / 2 < 0
          , H = F ? D < z ? D - z : D - Y : 0;
        return {
            [p]: v[p] + H,
            data: {
                [p]: K,
                centerOffset: D - K - H,
                ...F && {
                    alignmentOffset: H
                }
            },
            reset: F
        }
    }
})
  , ZN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: a, initialPlacement: l, platform: c, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: v, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: g=!0, ...w} = on(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const x = sn(o)
              , h = It(l)
              , y = sn(l) === l
              , S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating))
              , j = v || (y || !g ? [pi(l)] : HN(l))
              , C = b !== "none";
            !v && C && j.push(...GN(l, g, b, S));
            const N = [l, ...j]
              , E = await js(t, w)
              , R = [];
            let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (d && R.push(E[x]),
            f) {
                const D = VN(o, a, S);
                R.push(E[D[0]], E[D[1]])
            }
            if (A = [...A, {
                placement: o,
                overflows: R
            }],
            !R.every(D => D <= 0)) {
                var $, z;
                const D = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                  , K = N[D];
                if (K && (!(f === "alignment" ? h !== It(K) : !1) || A.every(P => P.overflows[0] > 0 && It(P.placement) === h)))
                    return {
                        data: {
                            index: D,
                            overflows: A
                        },
                        reset: {
                            placement: K
                        }
                    };
                let F = (z = A.filter(H => H.overflows[0] <= 0).sort( (H, P) => H.overflows[1] - P.overflows[1])[0]) == null ? void 0 : z.placement;
                if (!F)
                    switch (p) {
                    case "bestFit":
                        {
                            var Y;
                            const H = (Y = A.filter(P => {
                                if (C) {
                                    const T = It(P.placement);
                                    return T === h || T === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(T => T > 0).reduce( (T, M) => T + M, 0)]).sort( (P, T) => P[1] - T[1])[0]) == null ? void 0 : Y[0];
                            H && (F = H);
                            break
                        }
                    case "initialPlacement":
                        F = l;
                        break
                    }
                if (o !== F)
                    return {
                        reset: {
                            placement: F
                        }
                    }
            }
            return {}
        }
    }
};
function tp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function np(e) {
    return $N.some(t => e[t] >= 0)
}
const JN = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = on(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await js(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = tp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: np(a)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await js(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = tp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: np(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , fx = new Set(["left", "top"]);
async function eS(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , a = sn(n)
      , l = bo(n)
      , c = It(n) === "y"
      , u = fx.has(a) ? -1 : 1
      , d = s && c ? -1 : 1
      , f = on(t, e);
    let {mainAxis: v, crossAxis: p, alignmentAxis: b} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof b == "number" && (p = l === "end" ? b * -1 : b),
    c ? {
        x: p * d,
        y: v * u
    } : {
        x: v * u,
        y: p * d
    }
}
const tS = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: a, middlewareData: l} = t
              , c = await eS(t, e);
            return a === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + c.x,
                y: s + c.y,
                data: {
                    ...c,
                    placement: a
                }
            }
        }
    }
}
  , nS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: a=!1, limiter: l={
                fn: w => {
                    let {x, y: h} = w;
                    return {
                        x,
                        y: h
                    }
                }
            }, ...c} = on(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await js(t, c)
              , f = It(sn(o))
              , v = lf(f);
            let p = u[v]
              , b = u[f];
            if (s) {
                const w = v === "y" ? "top" : "left"
                  , x = v === "y" ? "bottom" : "right"
                  , h = p + d[w]
                  , y = p - d[x];
                p = Zu(h, p, y)
            }
            if (a) {
                const w = f === "y" ? "top" : "left"
                  , x = f === "y" ? "bottom" : "right"
                  , h = b + d[w]
                  , y = b - d[x];
                b = Zu(h, b, y)
            }
            const g = l.fn({
                ...t,
                [v]: p,
                [f]: b
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [v]: s,
                        [f]: a
                    }
                }
            }
        }
    }
}
  , rS = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: a} = t
              , {offset: l=0, mainAxis: c=!0, crossAxis: u=!0} = on(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = It(o)
              , v = lf(f);
            let p = d[v]
              , b = d[f];
            const g = on(l, t)
              , w = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (c) {
                const y = v === "y" ? "height" : "width"
                  , S = s.reference[v] - s.floating[y] + w.mainAxis
                  , j = s.reference[v] + s.reference[y] - w.mainAxis;
                p < S ? p = S : p > j && (p = j)
            }
            if (u) {
                var x, h;
                const y = v === "y" ? "width" : "height"
                  , S = fx.has(sn(o))
                  , j = s.reference[f] - s.floating[y] + (S && ((x = a.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : w.crossAxis)
                  , C = s.reference[f] + s.reference[y] + (S ? 0 : ((h = a.offset) == null ? void 0 : h[f]) || 0) - (S ? w.crossAxis : 0);
                b < j ? b = j : b > C && (b = C)
            }
            return {
                [v]: p,
                [f]: b
            }
        }
    }
}
  , oS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: a, elements: l} = t
              , {apply: c= () => {}
            , ...u} = on(e, t)
              , d = await js(t, u)
              , f = sn(o)
              , v = bo(o)
              , p = It(o) === "y"
              , {width: b, height: g} = s.floating;
            let w, x;
            f === "top" || f === "bottom" ? (w = f,
            x = v === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (x = f,
            w = v === "end" ? "top" : "bottom");
            const h = g - d.top - d.bottom
              , y = b - d.left - d.right
              , S = Bn(g - d[w], h)
              , j = Bn(b - d[x], y)
              , C = !t.middlewareData.shift;
            let N = S
              , E = j;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            C && !v) {
                const A = Ke(d.left, 0)
                  , $ = Ke(d.right, 0)
                  , z = Ke(d.top, 0)
                  , Y = Ke(d.bottom, 0);
                p ? E = b - 2 * (A !== 0 || $ !== 0 ? A + $ : Ke(d.left, d.right)) : N = g - 2 * (z !== 0 || Y !== 0 ? z + Y : Ke(d.top, d.bottom))
            }
            await c({
                ...t,
                availableWidth: E,
                availableHeight: N
            });
            const R = await a.getDimensions(l.floating);
            return b !== R.width || g !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Bi() {
    return typeof window < "u"
}
function No(e) {
    return mx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Je(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ht(e) {
    var t;
    return (t = (mx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function mx(e) {
    return Bi() ? e instanceof Node || e instanceof Je(e).Node : !1
}
function Pt(e) {
    return Bi() ? e instanceof Element || e instanceof Je(e).Element : !1
}
function Vt(e) {
    return Bi() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1
}
function rp(e) {
    return !Bi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot
}
const sS = new Set(["inline", "contents"]);
function Fs(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Rt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !sS.has(o)
}
const aS = new Set(["table", "td", "th"]);
function iS(e) {
    return aS.has(No(e))
}
const lS = [":popover-open", ":modal"];
function Ui(e) {
    return lS.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const cS = ["transform", "translate", "scale", "rotate", "perspective"]
  , uS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , dS = ["paint", "layout", "strict", "content"];
function df(e) {
    const t = ff()
      , n = Pt(e) ? Rt(e) : e;
    return cS.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || uS.some(r => (n.willChange || "").includes(r)) || dS.some(r => (n.contain || "").includes(r))
}
function fS(e) {
    let t = Un(e);
    for (; Vt(t) && !po(t); ) {
        if (df(t))
            return t;
        if (Ui(t))
            return null;
        t = Un(t)
    }
    return null
}
function ff() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const mS = new Set(["html", "body", "#document"]);
function po(e) {
    return mS.has(No(e))
}
function Rt(e) {
    return Je(e).getComputedStyle(e)
}
function Vi(e) {
    return Pt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Un(e) {
    if (No(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || rp(e) && e.host || Ht(e);
    return rp(t) ? t.host : t
}
function px(e) {
    const t = Un(e);
    return po(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && Fs(t) ? t : px(t)
}
function Es(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = px(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = Je(o);
    if (s) {
        const l = ed(a);
        return t.concat(a, a.visualViewport || [], Fs(o) ? o : [], l && n ? Es(l) : [])
    }
    return t.concat(o, Es(o, [], n))
}
function ed(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function hx(e) {
    const t = Rt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Vt(e)
      , s = o ? e.offsetWidth : n
      , a = o ? e.offsetHeight : r
      , l = mi(n) !== s || mi(r) !== a;
    return l && (n = s,
    r = a),
    {
        width: n,
        height: r,
        $: l
    }
}
function mf(e) {
    return Pt(e) ? e : e.contextElement
}
function Kr(e) {
    const t = mf(e);
    if (!Vt(t))
        return Bt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = hx(t);
    let a = (s ? mi(n.width) : n.width) / r
      , l = (s ? mi(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: a,
        y: l
    }
}
const pS = Bt(0);
function gx(e) {
    const t = Je(e);
    return !ff() || !t.visualViewport ? pS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function hS(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Je(e) ? !1 : t
}
function vr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = mf(e);
    let a = Bt(1);
    t && (r ? Pt(r) && (a = Kr(r)) : a = Kr(e));
    const l = hS(s, n, r) ? gx(s) : Bt(0);
    let c = (o.left + l.x) / a.x
      , u = (o.top + l.y) / a.y
      , d = o.width / a.x
      , f = o.height / a.y;
    if (s) {
        const v = Je(s)
          , p = r && Pt(r) ? Je(r) : r;
        let b = v
          , g = ed(b);
        for (; g && r && p !== b; ) {
            const w = Kr(g)
              , x = g.getBoundingClientRect()
              , h = Rt(g)
              , y = x.left + (g.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , S = x.top + (g.clientTop + parseFloat(h.paddingTop)) * w.y;
            c *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            c += y,
            u += S,
            b = Je(g),
            g = ed(b)
        }
    }
    return hi({
        width: d,
        height: f,
        x: c,
        y: u
    })
}
function pf(e, t) {
    const n = Vi(e).scrollLeft;
    return t ? t.left + n : vr(Ht(e)).left + n
}
function vx(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : pf(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function gS(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , a = Ht(r)
      , l = t ? Ui(t.floating) : !1;
    if (r === a || l && s)
        return n;
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Bt(1);
    const d = Bt(0)
      , f = Vt(r);
    if ((f || !f && !s) && ((No(r) !== "body" || Fs(a)) && (c = Vi(r)),
    Vt(r))) {
        const p = vr(r);
        u = Kr(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    const v = a && !f && !s ? vx(a, c, !0) : Bt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + d.x + v.x,
        y: n.y * u.y - c.scrollTop * u.y + d.y + v.y
    }
}
function vS(e) {
    return Array.from(e.getClientRects())
}
function xS(e) {
    const t = Ht(e)
      , n = Vi(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + pf(e);
    const l = -n.scrollTop;
    return Rt(r).direction === "rtl" && (a += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: a,
        y: l
    }
}
function yS(e, t) {
    const n = Je(e)
      , r = Ht(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , a = r.clientHeight
      , l = 0
      , c = 0;
    if (o) {
        s = o.width,
        a = o.height;
        const u = ff();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        c = o.offsetTop)
    }
    return {
        width: s,
        height: a,
        x: l,
        y: c
    }
}
const wS = new Set(["absolute", "fixed"]);
function bS(e, t) {
    const n = vr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = Vt(e) ? Kr(e) : Bt(1)
      , a = e.clientWidth * s.x
      , l = e.clientHeight * s.y
      , c = o * s.x
      , u = r * s.y;
    return {
        width: a,
        height: l,
        x: c,
        y: u
    }
}
function op(e, t, n) {
    let r;
    if (t === "viewport")
        r = yS(e, n);
    else if (t === "document")
        r = xS(Ht(e));
    else if (Pt(t))
        r = bS(t, n);
    else {
        const o = gx(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return hi(r)
}
function xx(e, t) {
    const n = Un(e);
    return n === t || !Pt(n) || po(n) ? !1 : Rt(n).position === "fixed" || xx(n, t)
}
function NS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Es(e, [], !1).filter(l => Pt(l) && No(l) !== "body")
      , o = null;
    const s = Rt(e).position === "fixed";
    let a = s ? Un(e) : e;
    for (; Pt(a) && !po(a); ) {
        const l = Rt(a)
          , c = df(a);
        !c && l.position === "fixed" && (o = null),
        (s ? !c && !o : !c && l.position === "static" && !!o && wS.has(o.position) || Fs(a) && !c && xx(e, a)) ? r = r.filter(d => d !== a) : o = l,
        a = Un(a)
    }
    return t.set(e, r),
    r
}
function SS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const a = [...n === "clippingAncestors" ? Ui(t) ? [] : NS(t, this._c) : [].concat(n), r]
      , l = a[0]
      , c = a.reduce( (u, d) => {
        const f = op(t, d, o);
        return u.top = Ke(f.top, u.top),
        u.right = Bn(f.right, u.right),
        u.bottom = Bn(f.bottom, u.bottom),
        u.left = Ke(f.left, u.left),
        u
    }
    , op(t, l, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}
function jS(e) {
    const {width: t, height: n} = hx(e);
    return {
        width: t,
        height: n
    }
}
function ES(e, t, n) {
    const r = Vt(t)
      , o = Ht(t)
      , s = n === "fixed"
      , a = vr(e, !0, s, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = Bt(0);
    function u() {
        c.x = pf(o)
    }
    if (r || !r && !s)
        if ((No(t) !== "body" || Fs(o)) && (l = Vi(t)),
        r) {
            const p = vr(t, !0, s, t);
            c.x = p.x + t.clientLeft,
            c.y = p.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const d = o && !r && !s ? vx(o, l) : Bt(0)
      , f = a.left + l.scrollLeft - c.x - d.x
      , v = a.top + l.scrollTop - c.y - d.y;
    return {
        x: f,
        y: v,
        width: a.width,
        height: a.height
    }
}
function _c(e) {
    return Rt(e).position === "static"
}
function sp(e, t) {
    if (!Vt(e) || Rt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Ht(e) === n && (n = n.ownerDocument.body),
    n
}
function yx(e, t) {
    const n = Je(e);
    if (Ui(e))
        return n;
    if (!Vt(e)) {
        let o = Un(e);
        for (; o && !po(o); ) {
            if (Pt(o) && !_c(o))
                return o;
            o = Un(o)
        }
        return n
    }
    let r = sp(e, t);
    for (; r && iS(r) && _c(r); )
        r = sp(r, t);
    return r && po(r) && _c(r) && !df(r) ? n : r || fS(e) || n
}
const CS = async function(e) {
    const t = this.getOffsetParent || yx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: ES(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function kS(e) {
    return Rt(e).direction === "rtl"
}
const PS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: gS,
    getDocumentElement: Ht,
    getClippingRect: SS,
    getOffsetParent: yx,
    getElementRects: CS,
    getClientRects: vS,
    getDimensions: jS,
    getScale: Kr,
    isElement: Pt,
    isRTL: kS
};
function wx(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function RS(e, t) {
    let n = null, r;
    const o = Ht(e);
    function s() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function a(l, c) {
        l === void 0 && (l = !1),
        c === void 0 && (c = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: d, top: f, width: v, height: p} = u;
        if (l || t(),
        !v || !p)
            return;
        const b = wa(f)
          , g = wa(o.clientWidth - (d + v))
          , w = wa(o.clientHeight - (f + p))
          , x = wa(d)
          , y = {
            rootMargin: -b + "px " + -g + "px " + -w + "px " + -x + "px",
            threshold: Ke(0, Bn(1, c)) || 1
        };
        let S = !0;
        function j(C) {
            const N = C[0].intersectionRatio;
            if (N !== c) {
                if (!S)
                    return a();
                N ? a(!1, N) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            N === 1 && !wx(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            n = new IntersectionObserver(j,{
                ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(j,y)
        }
        n.observe(e)
    }
    return a(!0),
    s
}
function TS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: c=!1} = r
      , u = mf(e)
      , d = o || s ? [...u ? Es(u) : [], ...Es(t)] : [];
    d.forEach(x => {
        o && x.addEventListener("scroll", n, {
            passive: !0
        }),
        s && x.addEventListener("resize", n)
    }
    );
    const f = u && l ? RS(u, n) : null;
    let v = -1
      , p = null;
    a && (p = new ResizeObserver(x => {
        let[h] = x;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(v),
        v = requestAnimationFrame( () => {
            var y;
            (y = p) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !c && p.observe(u),
    p.observe(t));
    let b, g = c ? vr(e) : null;
    c && w();
    function w() {
        const x = vr(e);
        g && !wx(g, x) && n(),
        g = x,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var x;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (x = p) == null || x.disconnect(),
        p = null,
        c && cancelAnimationFrame(b)
    }
}
const _S = tS
  , AS = nS
  , LS = ZN
  , DS = oS
  , MS = JN
  , ap = XN
  , OS = rS
  , zS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: PS,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return KN(e, t, {
        ...o,
        platform: s
    })
}
;
var IS = typeof document < "u"
  , $S = function() {}
  , Fa = IS ? m.useLayoutEffect : $S;
function gi(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!gi(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !gi(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function bx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ip(e, t) {
    const n = bx(e);
    return Math.round(t * n) / n
}
function Ac(e) {
    const t = m.useRef(e);
    return Fa( () => {
        t.current = e
    }
    ),
    t
}
function FS(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: a}={}, transform: l=!0, whileElementsMounted: c, open: u} = e
      , [d,f] = m.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,p] = m.useState(r);
    gi(v, r) || p(r);
    const [b,g] = m.useState(null)
      , [w,x] = m.useState(null)
      , h = m.useCallback(P => {
        P !== C.current && (C.current = P,
        g(P))
    }
    , [])
      , y = m.useCallback(P => {
        P !== N.current && (N.current = P,
        x(P))
    }
    , [])
      , S = s || b
      , j = a || w
      , C = m.useRef(null)
      , N = m.useRef(null)
      , E = m.useRef(d)
      , R = c != null
      , A = Ac(c)
      , $ = Ac(o)
      , z = Ac(u)
      , Y = m.useCallback( () => {
        if (!C.current || !N.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: v
        };
        $.current && (P.platform = $.current),
        zS(C.current, N.current, P).then(T => {
            const M = {
                ...T,
                isPositioned: z.current !== !1
            };
            D.current && !gi(E.current, M) && (E.current = M,
            zs.flushSync( () => {
                f(M)
            }
            ))
        }
        )
    }
    , [v, t, n, $, z]);
    Fa( () => {
        u === !1 && E.current.isPositioned && (E.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = m.useRef(!1);
    Fa( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    Fa( () => {
        if (S && (C.current = S),
        j && (N.current = j),
        S && j) {
            if (A.current)
                return A.current(S, j, Y);
            Y()
        }
    }
    , [S, j, Y, A, R]);
    const K = m.useMemo( () => ({
        reference: C,
        floating: N,
        setReference: h,
        setFloating: y
    }), [h, y])
      , F = m.useMemo( () => ({
        reference: S,
        floating: j
    }), [S, j])
      , H = m.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!F.floating)
            return P;
        const T = ip(F.floating, d.x)
          , M = ip(F.floating, d.y);
        return l ? {
            ...P,
            transform: "translate(" + T + "px, " + M + "px)",
            ...bx(F.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: T,
            top: M
        }
    }
    , [n, l, F.floating, d.x, d.y]);
    return m.useMemo( () => ({
        ...d,
        update: Y,
        refs: K,
        elements: F,
        floatingStyles: H
    }), [d, Y, K, F, H])
}
const BS = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? ap({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? ap({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , US = (e, t) => ({
    ..._S(e),
    options: [e, t]
})
  , VS = (e, t) => ({
    ...AS(e),
    options: [e, t]
})
  , HS = (e, t) => ({
    ...OS(e),
    options: [e, t]
})
  , WS = (e, t) => ({
    ...LS(e),
    options: [e, t]
})
  , qS = (e, t) => ({
    ...DS(e),
    options: [e, t]
})
  , YS = (e, t) => ({
    ...MS(e),
    options: [e, t]
})
  , GS = (e, t) => ({
    ...BS(e),
    options: [e, t]
});
var QS = "Arrow"
  , Nx = m.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return i.jsx(xe.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : i.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Nx.displayName = QS;
var KS = Nx;
function XS(e) {
    const [t,n] = m.useState(void 0);
    return rn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let a, l;
                if ("borderBoxSize"in s) {
                    const c = s.borderBoxSize
                      , u = Array.isArray(c) ? c[0] : c;
                    a = u.inlineSize,
                    l = u.blockSize
                } else
                    a = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: a,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Sx = "Popper"
  , [jx,Ex] = Is(Sx)
  , [Z2,Cx] = jx(Sx)
  , kx = "PopperAnchor"
  , Px = m.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Cx(kx, n)
      , a = m.useRef(null)
      , l = Ie(t, a);
    return m.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }
    ),
    r ? null : i.jsx(xe.div, {
        ...o,
        ref: l
    })
}
);
Px.displayName = kx;
var hf = "PopperContent"
  , [ZS,JS] = jx(hf)
  , Rx = m.forwardRef( (e, t) => {
    var ee, br, ln, Qn, cn, Nr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: a=0, arrowPadding: l=0, avoidCollisions: c=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: v=!1, updatePositionStrategy: p="optimized", onPlaced: b, ...g} = e
      , w = Cx(hf, n)
      , [x,h] = m.useState(null)
      , y = Ie(t, un => h(un))
      , [S,j] = m.useState(null)
      , C = XS(S)
      , N = (C == null ? void 0 : C.width) ?? 0
      , E = (C == null ? void 0 : C.height) ?? 0
      , R = r + (s !== "center" ? "-" + s : "")
      , A = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , z = $.length > 0
      , Y = {
        padding: A,
        boundary: $.filter(tj),
        altBoundary: z
    }
      , {refs: D, floatingStyles: K, placement: F, isPositioned: H, middlewareData: P} = FS({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...un) => TS(...un, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [US({
            mainAxis: o + E,
            alignmentAxis: a
        }), c && VS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? HS() : void 0,
            ...Y
        }), c && WS({
            ...Y
        }), qS({
            ...Y,
            apply: ({elements: un, rects: Ks, availableWidth: Ql, availableHeight: Xs}) => {
                const {width: Kl, height: To} = Ks.reference
                  , Sr = un.floating.style;
                Sr.setProperty("--radix-popper-available-width", `${Ql}px`),
                Sr.setProperty("--radix-popper-available-height", `${Xs}px`),
                Sr.setProperty("--radix-popper-anchor-width", `${Kl}px`),
                Sr.setProperty("--radix-popper-anchor-height", `${To}px`)
            }
        }), S && GS({
            element: S,
            padding: l
        }), nj({
            arrowWidth: N,
            arrowHeight: E
        }), v && YS({
            strategy: "referenceHidden",
            ...Y
        })]
    })
      , [T,M] = Ax(F)
      , W = Ut(b);
    rn( () => {
        H && (W == null || W())
    }
    , [H, W]);
    const I = (ee = P.arrow) == null ? void 0 : ee.x
      , G = (br = P.arrow) == null ? void 0 : br.y
      , X = ((ln = P.arrow) == null ? void 0 : ln.centerOffset) !== 0
      , [ge,ke] = m.useState();
    return rn( () => {
        x && ke(window.getComputedStyle(x).zIndex)
    }
    , [x]),
    i.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...K,
            transform: H ? K.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ge,
            "--radix-popper-transform-origin": [(Qn = P.transformOrigin) == null ? void 0 : Qn.x, (cn = P.transformOrigin) == null ? void 0 : cn.y].join(" "),
            ...((Nr = P.hide) == null ? void 0 : Nr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: i.jsx(ZS, {
            scope: n,
            placedSide: T,
            onArrowChange: j,
            arrowX: I,
            arrowY: G,
            shouldHideArrow: X,
            children: i.jsx(xe.div, {
                "data-side": T,
                "data-align": M,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: H ? void 0 : "none"
                }
            })
        })
    })
}
);
Rx.displayName = hf;
var Tx = "PopperArrow"
  , ej = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , _x = m.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = JS(Tx, r)
      , a = ej[s.placedSide];
    return i.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: i.jsx(KS, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
_x.displayName = Tx;
function tj(e) {
    return e !== null
}
var nj = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, x, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = a ? 0 : e.arrowWidth
          , c = a ? 0 : e.arrowHeight
          , [u,d] = Ax(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , v = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + l / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
        let b = ""
          , g = "";
        return u === "bottom" ? (b = a ? f : `${v}px`,
        g = `${-c}px`) : u === "top" ? (b = a ? f : `${v}px`,
        g = `${r.floating.height + c}px`) : u === "right" ? (b = `${-c}px`,
        g = a ? f : `${p}px`) : u === "left" && (b = `${r.floating.width + c}px`,
        g = a ? f : `${p}px`),
        {
            data: {
                x: b,
                y: g
            }
        }
    }
});
function Ax(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var rj = Px
  , oj = Rx
  , sj = _x
  , [Hi,J2] = Is("Tooltip", [Ex])
  , gf = Ex()
  , Lx = "TooltipProvider"
  , aj = 700
  , lp = "tooltip.open"
  , [ij,Dx] = Hi(Lx)
  , Mx = e => {
    const {__scopeTooltip: t, delayDuration: n=aj, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , a = m.useRef(!0)
      , l = m.useRef(!1)
      , c = m.useRef(0);
    return m.useEffect( () => {
        const u = c.current;
        return () => window.clearTimeout(u)
    }
    , []),
    i.jsx(ij, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: m.useCallback( () => {
            window.clearTimeout(c.current),
            a.current = !1
        }
        , []),
        onClose: m.useCallback( () => {
            window.clearTimeout(c.current),
            c.current = window.setTimeout( () => a.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: m.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
Mx.displayName = Lx;
var Ox = "Tooltip"
  , [ek,Wi] = Hi(Ox)
  , td = "TooltipTrigger"
  , lj = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Wi(td, n)
      , s = Dx(td, n)
      , a = gf(n)
      , l = m.useRef(null)
      , c = Ie(t, l, o.onTriggerChange)
      , u = m.useRef(!1)
      , d = m.useRef(!1)
      , f = m.useCallback( () => u.current = !1, []);
    return m.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    i.jsx(rj, {
        asChild: !0,
        ...a,
        children: i.jsx(xe.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: c,
            onPointerMove: ce(e.onPointerMove, v => {
                v.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: ce(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: ce(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: ce(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ce(e.onBlur, o.onClose),
            onClick: ce(e.onClick, o.onClose)
        })
    })
}
);
lj.displayName = td;
var cj = "TooltipPortal"
  , [tk,uj] = Hi(cj, {
    forceMount: void 0
})
  , ho = "TooltipContent"
  , zx = m.forwardRef( (e, t) => {
    const n = uj(ho, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , a = Wi(ho, e.__scopeTooltip);
    return i.jsx(yo, {
        present: r || a.open,
        children: a.disableHoverableContent ? i.jsx(Ix, {
            side: o,
            ...s,
            ref: t
        }) : i.jsx(dj, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , dj = m.forwardRef( (e, t) => {
    const n = Wi(ho, e.__scopeTooltip)
      , r = Dx(ho, e.__scopeTooltip)
      , o = m.useRef(null)
      , s = Ie(t, o)
      , [a,l] = m.useState(null)
      , {trigger: c, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , v = m.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , p = m.useCallback( (b, g) => {
        const w = b.currentTarget
          , x = {
            x: b.clientX,
            y: b.clientY
        }
          , h = gj(x, w.getBoundingClientRect())
          , y = vj(x, h)
          , S = xj(g.getBoundingClientRect())
          , j = wj([...y, ...S]);
        l(j),
        f(!0)
    }
    , [f]);
    return m.useEffect( () => () => v(), [v]),
    m.useEffect( () => {
        if (c && d) {
            const b = w => p(w, d)
              , g = w => p(w, c);
            return c.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", g),
            () => {
                c.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", g)
            }
        }
    }
    , [c, d, p, v]),
    m.useEffect( () => {
        if (a) {
            const b = g => {
                const w = g.target
                  , x = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , h = (c == null ? void 0 : c.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , y = !yj(x, a);
                h ? v() : y && (v(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [c, d, a, u, v]),
    i.jsx(Ix, {
        ...e,
        ref: s
    })
}
)
  , [fj,mj] = Hi(Ox, {
    isInside: !1
})
  , pj = R1("TooltipContent")
  , Ix = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: a, ...l} = e
      , c = Wi(ho, n)
      , u = gf(n)
      , {onClose: d} = c;
    return m.useEffect( () => (document.addEventListener(lp, d),
    () => document.removeEventListener(lp, d)), [d]),
    m.useEffect( () => {
        if (c.trigger) {
            const f = v => {
                const p = v.target;
                p != null && p.contains(c.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [c.trigger, d]),
    i.jsx(zi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: i.jsxs(oj, {
            "data-state": c.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [i.jsx(pj, {
                children: r
            }), i.jsx(fj, {
                scope: n,
                isInside: !0,
                children: i.jsx(J1, {
                    id: c.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
zx.displayName = ho;
var $x = "TooltipArrow"
  , hj = m.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = gf(n);
    return mj($x, n).isInside ? null : i.jsx(sj, {
        ...o,
        ...r,
        ref: t
    })
}
);
hj.displayName = $x;
function gj(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function vj(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function xj(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function yj(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const l = t[s]
          , c = t[a]
          , u = l.x
          , d = l.y
          , f = c.x
          , v = c.y;
        d > r != v > r && n < (f - u) * (r - d) / (v - d) + u && (o = !o)
    }
    return o
}
function wj(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    bj(t)
}
function bj(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Nj = Mx
  , Fx = zx;
const Sj = Nj
  , jj = m.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => i.jsx(Fx, {
    ref: r,
    sideOffset: t,
    className: rt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
jj.displayName = Fx.displayName;
var qi = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Yi = typeof window > "u" || "Deno"in globalThis;
function wt() {}
function Ej(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Cj(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function kj(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function nd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Pj(e, t) {
    return typeof e == "function" ? e(t) : e
}
function cp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: a, stale: l} = e;
    if (a) {
        if (r) {
            if (t.queryHash !== vf(a, t.options))
                return !1
        } else if (!ks(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const c = t.isActive();
        if (n === "active" && !c || n === "inactive" && c)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t))
}
function up(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Cs(t.options.mutationKey) !== Cs(s))
                return !1
        } else if (!ks(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function vf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Cs)(e)
}
function Cs(e) {
    return JSON.stringify(e, (t, n) => rd(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ks(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ks(e[n], t[n])) : !1
}
function Bx(e, t) {
    if (e === t)
        return e;
    const n = dp(e) && dp(t);
    if (n || rd(e) && rd(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , a = s.length
          , l = n ? [] : {}
          , c = new Set(r);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const f = n ? d : s[d];
            (!n && c.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (l[f] = void 0,
            u++) : (l[f] = Bx(e[f], t[f]),
            l[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === a && u === o ? e : l
    }
    return t
}
function dp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function rd(e) {
    if (!fp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!fp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function fp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Rj(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Tj(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Bx(e, t) : t
}
function _j(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Aj(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var xf = Symbol();
function Ux(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === xf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var rr, Sn, Zr, th, Lj = (th = class extends qi {
    constructor() {
        super();
        J(this, rr);
        J(this, Sn);
        J(this, Zr);
        V(this, Zr, t => {
            if (!Yi && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        k(this, Sn) || this.setEventListener(k(this, Zr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = k(this, Sn)) == null || t.call(this),
        V(this, Sn, void 0))
    }
    setEventListener(t) {
        var n;
        V(this, Zr, t),
        (n = k(this, Sn)) == null || n.call(this),
        V(this, Sn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        k(this, rr) !== t && (V(this, rr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof k(this, rr) == "boolean" ? k(this, rr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
rr = new WeakMap,
Sn = new WeakMap,
Zr = new WeakMap,
th), Vx = new Lj, Jr, jn, eo, nh, Dj = (nh = class extends qi {
    constructor() {
        super();
        J(this, Jr, !0);
        J(this, jn);
        J(this, eo);
        V(this, eo, t => {
            if (!Yi && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        k(this, jn) || this.setEventListener(k(this, eo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = k(this, jn)) == null || t.call(this),
        V(this, jn, void 0))
    }
    setEventListener(t) {
        var n;
        V(this, eo, t),
        (n = k(this, jn)) == null || n.call(this),
        V(this, jn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        k(this, Jr) !== t && (V(this, Jr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return k(this, Jr)
    }
}
,
Jr = new WeakMap,
jn = new WeakMap,
eo = new WeakMap,
nh), vi = new Dj;
function Mj() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Oj(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Hx(e) {
    return (e ?? "online") === "online" ? vi.isOnline() : !0
}
var Wx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Lc(e) {
    return e instanceof Wx
}
function qx(e) {
    let t = !1, n = 0, r = !1, o;
    const s = Mj()
      , a = g => {
        var w;
        r || (v(new Wx(g)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , c = () => {
        t = !1
    }
      , u = () => Vx.isFocused() && (e.networkMode === "always" || vi.isOnline()) && e.canRun()
      , d = () => Hx(e.networkMode) && e.canRun()
      , f = g => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        s.resolve(g))
    }
      , v = g => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        s.reject(g))
    }
      , p = () => new Promise(g => {
        var w;
        o = x => {
            (r || u()) && g(x)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let g;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            g = w ?? e.fn()
        } catch (x) {
            g = Promise.reject(x)
        }
        Promise.resolve(g).then(f).catch(x => {
            var C;
            if (r)
                return;
            const h = e.retry ?? (Yi ? 0 : 3)
              , y = e.retryDelay ?? Oj
              , S = typeof y == "function" ? y(n, x) : y
              , j = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, x);
            if (t || !j) {
                v(x);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, x),
            Rj(S).then( () => u() ? void 0 : p()).then( () => {
                t ? v(x) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: a,
        continue: () => (o == null || o(),
        s),
        cancelRetry: l,
        continueRetry: c,
        canStart: d,
        start: () => (d() ? b() : p().then(b),
        s)
    }
}
var zj = e => setTimeout(e, 0);
function Ij() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = zj;
    const s = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , a = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(c => {
                    n(c)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let c;
            t++;
            try {
                c = l()
            } finally {
                t--,
                t || a()
            }
            return c
        }
        ,
        batchCalls: l => (...c) => {
            s( () => {
                l(...c)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Oe = Ij(), or, rh, Yx = (rh = class {
    constructor() {
        J(this, or)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Cj(this.gcTime) && V(this, or, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Yi ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        k(this, or) && (clearTimeout(k(this, or)),
        V(this, or, void 0))
    }
}
,
or = new WeakMap,
rh), to, sr, at, ar, _e, Ts, ir, bt, qt, oh, $j = (oh = class extends Yx {
    constructor(t) {
        super();
        J(this, bt);
        J(this, to);
        J(this, sr);
        J(this, at);
        J(this, ar);
        J(this, _e);
        J(this, Ts);
        J(this, ir);
        V(this, ir, !1),
        V(this, Ts, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        V(this, ar, t.client),
        V(this, at, k(this, ar).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        V(this, to, Bj(this.options)),
        this.state = t.state ?? k(this, to),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = k(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...k(this, Ts),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && k(this, at).remove(this)
    }
    setData(t, n) {
        const r = Tj(this.state.data, t, this.options);
        return Pe(this, bt, qt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Pe(this, bt, qt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = k(this, _e)) == null ? void 0 : r.promise;
        return (o = k(this, _e)) == null || o.cancel(t),
        n ? n.then(wt).catch(wt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(k(this, to))
    }
    isActive() {
        return this.observers.some(t => Pj(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === xf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => nd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !kj(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = k(this, _e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = k(this, _e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        k(this, at).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (k(this, _e) && (k(this, ir) ? k(this, _e).cancel({
            revert: !0
        }) : k(this, _e).cancelRetry()),
        this.scheduleGc()),
        k(this, at).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, bt, qt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (k(this, _e))
                return k(this, _e).continueRetry(),
                k(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const v = this.observers.find(p => p.options.queryFn);
            v && this.setOptions(v.options)
        }
        const r = new AbortController
          , o = v => {
            Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (V(this, ir, !0),
                r.signal)
            })
        }
          , s = () => {
            const v = Ux(this.options, n)
              , b = ( () => {
                const g = {
                    client: k(this, ar),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return V(this, ir, !1),
            this.options.persister ? this.options.persister(v, b, this) : v(b)
        }
          , l = ( () => {
            const v = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: k(this, ar),
                state: this.state,
                fetchFn: s
            };
            return o(v),
            v
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        V(this, sr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = l.fetchOptions) == null ? void 0 : d.meta)) && Pe(this, bt, qt).call(this, {
            type: "fetch",
            meta: (f = l.fetchOptions) == null ? void 0 : f.meta
        });
        const c = v => {
            var p, b, g, w;
            Lc(v) && v.silent || Pe(this, bt, qt).call(this, {
                type: "error",
                error: v
            }),
            Lc(v) || ((b = (p = k(this, at).config).onError) == null || b.call(p, v, this),
            (w = (g = k(this, at).config).onSettled) == null || w.call(g, this.state.data, v, this)),
            this.scheduleGc()
        }
        ;
        return V(this, _e, qx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: v => {
                var p, b, g, w;
                if (v === void 0) {
                    c(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(v)
                } catch (x) {
                    c(x);
                    return
                }
                (b = (p = k(this, at).config).onSuccess) == null || b.call(p, v, this),
                (w = (g = k(this, at).config).onSettled) == null || w.call(g, v, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: c,
            onFail: (v, p) => {
                Pe(this, bt, qt).call(this, {
                    type: "failed",
                    failureCount: v,
                    error: p
                })
            }
            ,
            onPause: () => {
                Pe(this, bt, qt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, bt, qt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        k(this, _e).start()
    }
}
,
to = new WeakMap,
sr = new WeakMap,
at = new WeakMap,
ar = new WeakMap,
_e = new WeakMap,
Ts = new WeakMap,
ir = new WeakMap,
bt = new WeakSet,
qt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Fj(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return V(this, sr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Lc(o) && o.revert && k(this, sr) ? {
                ...k(this, sr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Oe.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        k(this, at).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
oh);
function Fj(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Hx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Bj(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Lt, sh, Uj = (sh = class extends qi {
    constructor(t={}) {
        super();
        J(this, Lt);
        this.config = t,
        V(this, Lt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? vf(o, n);
        let a = this.get(s);
        return a || (a = new $j({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        k(this, Lt).has(t.queryHash) || (k(this, Lt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = k(this, Lt).get(t.queryHash);
        n && (t.destroy(),
        n === t && k(this, Lt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Oe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return k(this, Lt).get(t)
    }
    getAll() {
        return [...k(this, Lt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => cp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => cp(t, r)) : n
    }
    notify(t) {
        Oe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Oe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Oe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Lt = new WeakMap,
sh), Dt, De, lr, Mt, vn, ah, Vj = (ah = class extends Yx {
    constructor(t) {
        super();
        J(this, Mt);
        J(this, Dt);
        J(this, De);
        J(this, lr);
        this.mutationId = t.mutationId,
        V(this, De, t.mutationCache),
        V(this, Dt, []),
        this.state = t.state || Hj(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        k(this, Dt).includes(t) || (k(this, Dt).push(t),
        this.clearGcTimeout(),
        k(this, De).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        V(this, Dt, k(this, Dt).filter(n => n !== t)),
        this.scheduleGc(),
        k(this, De).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        k(this, Dt).length || (this.state.status === "pending" ? this.scheduleGc() : k(this, De).remove(this))
    }
    continue() {
        var t;
        return ((t = k(this, lr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, a, l, c, u, d, f, v, p, b, g, w, x, h, y, S, j, C, N, E;
        const n = () => {
            Pe(this, Mt, vn).call(this, {
                type: "continue"
            })
        }
        ;
        V(this, lr, qx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, A) => {
                Pe(this, Mt, vn).call(this, {
                    type: "failed",
                    failureCount: R,
                    error: A
                })
            }
            ,
            onPause: () => {
                Pe(this, Mt, vn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, De).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !k(this, lr).canStart();
        try {
            if (r)
                n();
            else {
                Pe(this, Mt, vn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (s = k(this, De).config).onMutate) == null ? void 0 : a.call(s, t, this));
                const A = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t));
                A !== this.state.context && Pe(this, Mt, vn).call(this, {
                    type: "pending",
                    context: A,
                    variables: t,
                    isPaused: o
                })
            }
            const R = await k(this, lr).start();
            return await ((d = (u = k(this, De).config).onSuccess) == null ? void 0 : d.call(u, R, t, this.state.context, this)),
            await ((v = (f = this.options).onSuccess) == null ? void 0 : v.call(f, R, t, this.state.context)),
            await ((b = (p = k(this, De).config).onSettled) == null ? void 0 : b.call(p, R, null, this.state.variables, this.state.context, this)),
            await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, R, null, t, this.state.context)),
            Pe(this, Mt, vn).call(this, {
                type: "success",
                data: R
            }),
            R
        } catch (R) {
            try {
                throw await ((h = (x = k(this, De).config).onError) == null ? void 0 : h.call(x, R, t, this.state.context, this)),
                await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, R, t, this.state.context)),
                await ((C = (j = k(this, De).config).onSettled) == null ? void 0 : C.call(j, void 0, R, this.state.variables, this.state.context, this)),
                await ((E = (N = this.options).onSettled) == null ? void 0 : E.call(N, void 0, R, t, this.state.context)),
                R
            } finally {
                Pe(this, Mt, vn).call(this, {
                    type: "error",
                    error: R
                })
            }
        } finally {
            k(this, De).runNext(this)
        }
    }
}
,
Dt = new WeakMap,
De = new WeakMap,
lr = new WeakMap,
Mt = new WeakSet,
vn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Oe.batch( () => {
        k(this, Dt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        k(this, De).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ah);
function Hj() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Qt, Nt, _s, ih, Wj = (ih = class extends qi {
    constructor(t={}) {
        super();
        J(this, Qt);
        J(this, Nt);
        J(this, _s);
        this.config = t,
        V(this, Qt, new Set),
        V(this, Nt, new Map),
        V(this, _s, 0)
    }
    build(t, n, r) {
        const o = new Vj({
            mutationCache: this,
            mutationId: ++Js(this, _s)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        k(this, Qt).add(t);
        const n = ba(t);
        if (typeof n == "string") {
            const r = k(this, Nt).get(n);
            r ? r.push(t) : k(this, Nt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (k(this, Qt).delete(t)) {
            const n = ba(t);
            if (typeof n == "string") {
                const r = k(this, Nt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && k(this, Nt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ba(t);
        if (typeof n == "string") {
            const r = k(this, Nt).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ba(t);
        if (typeof n == "string") {
            const o = (r = k(this, Nt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Oe.batch( () => {
            k(this, Qt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            k(this, Qt).clear(),
            k(this, Nt).clear()
        }
        )
    }
    getAll() {
        return Array.from(k(this, Qt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => up(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => up(t, n))
    }
    notify(t) {
        Oe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Oe.batch( () => Promise.all(t.map(n => n.continue().catch(wt))))
    }
}
,
Qt = new WeakMap,
Nt = new WeakMap,
_s = new WeakMap,
ih);
function ba(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function mp(e) {
    return {
        onFetch: (t, n) => {
            var d, f, v, p, b;
            const r = t.options
              , o = (v = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : v.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , c = 0;
            const u = async () => {
                let g = !1;
                const w = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , x = Ux(t.options, t.fetchOptions)
                  , h = async (y, S, j) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && y.pages.length)
                        return Promise.resolve(y);
                    const N = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: j ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , E = await x(N)
                      , {maxPages: R} = t.options
                      , A = j ? Aj : _j;
                    return {
                        pages: A(y.pages, E, R),
                        pageParams: A(y.pageParams, S, R)
                    }
                }
                ;
                if (o && s.length) {
                    const y = o === "backward"
                      , S = y ? qj : pp
                      , j = {
                        pages: s,
                        pageParams: a
                    }
                      , C = S(r, j);
                    l = await h(j, C, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const S = c === 0 ? a[0] ?? r.initialPageParam : pp(r, l);
                        if (c > 0 && S == null)
                            break;
                        l = await h(l, S),
                        c++
                    } while (c < y)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function pp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function qj(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var me, En, Cn, no, ro, kn, oo, so, lh, Yj = (lh = class {
    constructor(e={}) {
        J(this, me);
        J(this, En);
        J(this, Cn);
        J(this, no);
        J(this, ro);
        J(this, kn);
        J(this, oo);
        J(this, so);
        V(this, me, e.queryCache || new Uj),
        V(this, En, e.mutationCache || new Wj),
        V(this, Cn, e.defaultOptions || {}),
        V(this, no, new Map),
        V(this, ro, new Map),
        V(this, kn, 0)
    }
    mount() {
        Js(this, kn)._++,
        k(this, kn) === 1 && (V(this, oo, Vx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            k(this, me).onFocus())
        }
        )),
        V(this, so, vi.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            k(this, me).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Js(this, kn)._--,
        k(this, kn) === 0 && ((e = k(this, oo)) == null || e.call(this),
        V(this, oo, void 0),
        (t = k(this, so)) == null || t.call(this),
        V(this, so, void 0))
    }
    isFetching(e) {
        return k(this, me).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return k(this, En).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = k(this, me).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = k(this, me).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(nd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return k(this, me).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = k(this, me).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , a = Ej(t, s);
        if (a !== void 0)
            return k(this, me).build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Oe.batch( () => k(this, me).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = k(this, me).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = k(this, me);
        Oe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = k(this, me);
        return Oe.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Oe.batch( () => k(this, me).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(wt).catch(wt)
    }
    invalidateQueries(e, t={}) {
        return Oe.batch( () => (k(this, me).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Oe.batch( () => k(this, me).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(wt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(wt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, me).build(this, t);
        return n.isStaleByTime(nd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(wt).catch(wt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = mp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(wt).catch(wt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = mp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return vi.isOnline() ? k(this, En).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return k(this, me)
    }
    getMutationCache() {
        return k(this, En)
    }
    getDefaultOptions() {
        return k(this, Cn)
    }
    setDefaultOptions(e) {
        V(this, Cn, e)
    }
    setQueryDefaults(e, t) {
        k(this, no).set(Cs(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...k(this, no).values()]
          , n = {};
        return t.forEach(r => {
            ks(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        k(this, ro).set(Cs(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...k(this, ro).values()]
          , n = {};
        return t.forEach(r => {
            ks(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...k(this, Cn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = vf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === xf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...k(this, Cn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        k(this, me).clear(),
        k(this, En).clear()
    }
}
,
me = new WeakMap,
En = new WeakMap,
Cn = new WeakMap,
no = new WeakMap,
ro = new WeakMap,
kn = new WeakMap,
oo = new WeakMap,
so = new WeakMap,
lh), Gj = m.createContext(void 0), Qj = ({client: e, children: t}) => (m.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
i.jsx(Gj.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ps() {
    return Ps = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ps.apply(this, arguments)
}
var Tn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Tn || (Tn = {}));
const hp = "popstate";
function Kj(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: a, hash: l} = r.location;
        return od("", {
            pathname: s,
            search: a,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Qx(o)
    }
    return Zj(t, n, null, e)
}
function be(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Gx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Xj() {
    return Math.random().toString(36).substr(2, 8)
}
function gp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function od(e, t, n, r) {
    return n === void 0 && (n = null),
    Ps({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? So(t) : t, {
        state: n,
        key: t && t.key || r || Xj()
    })
}
function Qx(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function So(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Zj(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , a = o.history
      , l = Tn.Pop
      , c = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(Ps({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function f() {
        l = Tn.Pop;
        let w = d()
          , x = w == null ? null : w - u;
        u = w,
        c && c({
            action: l,
            location: g.location,
            delta: x
        })
    }
    function v(w, x) {
        l = Tn.Push;
        let h = od(g.location, w, x);
        u = d() + 1;
        let y = gp(h, u)
          , S = g.createHref(h);
        try {
            a.pushState(y, "", S)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            o.location.assign(S)
        }
        s && c && c({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function p(w, x) {
        l = Tn.Replace;
        let h = od(g.location, w, x);
        u = d();
        let y = gp(h, u)
          , S = g.createHref(h);
        a.replaceState(y, "", S),
        s && c && c({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function b(w) {
        let x = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : Qx(w);
        return h = h.replace(/ $/, "%20"),
        be(x, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,x)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(hp, f),
            c = w,
            () => {
                o.removeEventListener(hp, f),
                c = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: b,
        encodeLocation(w) {
            let x = b(w);
            return {
                pathname: x.pathname,
                search: x.search,
                hash: x.hash
            }
        },
        push: v,
        replace: p,
        go(w) {
            return a.go(w)
        }
    };
    return g
}
var vp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(vp || (vp = {}));
function Jj(e, t, n) {
    return n === void 0 && (n = "/"),
    eE(e, t, n, !1)
}
function eE(e, t, n, r) {
    let o = typeof t == "string" ? So(t) : t
      , s = Zx(o.pathname || "/", n);
    if (s == null)
        return null;
    let a = Kx(e);
    tE(a);
    let l = null;
    for (let c = 0; l == null && c < a.length; ++c) {
        let u = fE(s);
        l = uE(a[c], u, r)
    }
    return l
}
function Kx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, a, l) => {
        let c = {
            relativePath: l === void 0 ? s.path || "" : l,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s
        };
        c.relativePath.startsWith("/") && (be(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        c.relativePath = c.relativePath.slice(r.length));
        let u = dr([r, c.relativePath])
          , d = n.concat(c);
        s.children && s.children.length > 0 && (be(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Kx(s.children, t, d, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: lE(u, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, a) => {
        var l;
        if (s.path === "" || !((l = s.path) != null && l.includes("?")))
            o(s, a);
        else
            for (let c of Xx(s.path))
                o(s, a, c)
    }
    ),
    t
}
function Xx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let a = Xx(r.join("/"))
      , l = [];
    return l.push(...a.map(c => c === "" ? s : [s, c].join("/"))),
    o && l.push(...a),
    l.map(c => e.startsWith("/") && c === "" ? "/" : c)
}
function tE(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : cE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const nE = /^:[\w-]+$/
  , rE = 3
  , oE = 2
  , sE = 1
  , aE = 10
  , iE = -2
  , xp = e => e === "*";
function lE(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(xp) && (r += iE),
    t && (r += oE),
    n.filter(o => !xp(o)).reduce( (o, s) => o + (nE.test(s) ? rE : s === "" ? sE : aE), r)
}
function cE(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function uE(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , a = [];
    for (let l = 0; l < r.length; ++l) {
        let c = r[l]
          , u = l === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , f = yp({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: u
        }, d)
          , v = c.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = yp({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        a.push({
            params: o,
            pathname: dr([s, f.pathname]),
            pathnameBase: xE(dr([s, f.pathnameBase])),
            route: v
        }),
        f.pathnameBase !== "/" && (s = dr([s, f.pathnameBase]))
    }
    return a
}
function yp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = dE(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , a = s.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: v, isOptional: p} = d;
            if (v === "*") {
                let g = l[f] || "";
                a = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const b = l[f];
            return p && !b ? u[v] = void 0 : u[v] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: a,
        pattern: e
    }
}
function dE(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Gx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (r.push({
        paramName: l,
        isOptional: c != null
    }),
    c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function fE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Gx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Zx(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function mE(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? So(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : pE(n, t) : t,
        search: yE(r),
        hash: wE(o)
    }
}
function pE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Dc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function hE(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function gE(e, t) {
    let n = hE(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function vE(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = So(e) : (o = Ps({}, e),
    be(!o.pathname || !o.pathname.includes("?"), Dc("?", "pathname", "search", o)),
    be(!o.pathname || !o.pathname.includes("#"), Dc("#", "pathname", "hash", o)),
    be(!o.search || !o.search.includes("#"), Dc("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, l;
    if (a == null)
        l = n;
    else {
        let f = t.length - 1;
        if (!r && a.startsWith("..")) {
            let v = a.split("/");
            for (; v[0] === ".."; )
                v.shift(),
                f -= 1;
            o.pathname = v.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let c = mE(o, l)
      , u = a && a !== "/" && a.endsWith("/")
      , d = (s || a === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"),
    c
}
const dr = e => e.join("/").replace(/\/\/+/g, "/")
  , xE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , yE = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , wE = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function bE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Jx = ["post", "put", "patch", "delete"];
new Set(Jx);
const NE = ["get", ...Jx];
new Set(NE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rs() {
    return Rs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Rs.apply(this, arguments)
}
const yf = m.createContext(null)
  , SE = m.createContext(null)
  , Gi = m.createContext(null)
  , Qi = m.createContext(null)
  , jo = m.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ey = m.createContext(null);
function Ki() {
    return m.useContext(Qi) != null
}
function wf() {
    return Ki() || be(!1),
    m.useContext(Qi).location
}
function ty(e) {
    m.useContext(Gi).static || m.useLayoutEffect(e)
}
function Eo() {
    let {isDataRoute: e} = m.useContext(jo);
    return e ? OE() : jE()
}
function jE() {
    Ki() || be(!1);
    let e = m.useContext(yf)
      , {basename: t, future: n, navigator: r} = m.useContext(Gi)
      , {matches: o} = m.useContext(jo)
      , {pathname: s} = wf()
      , a = JSON.stringify(gE(o, n.v7_relativeSplatPath))
      , l = m.useRef(!1);
    return ty( () => {
        l.current = !0
    }
    ),
    m.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = vE(u, JSON.parse(a), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : dr([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, a, s, e])
}
function EE(e, t) {
    return CE(e, t)
}
function CE(e, t, n, r) {
    Ki() || be(!1);
    let {navigator: o} = m.useContext(Gi)
      , {matches: s} = m.useContext(jo)
      , a = s[s.length - 1]
      , l = a ? a.params : {};
    a && a.pathname;
    let c = a ? a.pathnameBase : "/";
    a && a.route;
    let u = wf(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? So(t) : t;
        c === "/" || (f = w.pathname) != null && f.startsWith(c) || be(!1),
        d = w
    } else
        d = u;
    let v = d.pathname || "/"
      , p = v;
    if (c !== "/") {
        let w = c.replace(/^\//, "").split("/");
        p = "/" + v.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = Jj(e, {
        pathname: p
    })
      , g = _E(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: dr([c, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? c : dr([c, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && g ? m.createElement(Qi.Provider, {
        value: {
            location: Rs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Tn.Pop
        }
    }, g) : g
}
function kE() {
    let e = ME()
      , t = bE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: o
    }, n) : null, null)
}
const PE = m.createElement(kE, null);
class RE extends m.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(jo.Provider, {
            value: this.props.routeContext
        }, m.createElement(ey.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function TE(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = m.useContext(yf);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(jo.Provider, {
        value: t
    }, r)
}
function _E(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = a.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || be(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let c = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let f = a[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: v, errors: p} = n
                  , b = f.route.loader && v[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || b) {
                    c = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (d, f, v) => {
        let p, b = !1, g = null, w = null;
        n && (p = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || PE,
        c && (u < 0 && v === 0 ? (b = !0,
        w = null) : u === v && (b = !0,
        w = f.route.hydrateFallbackElement || null)));
        let x = t.concat(a.slice(0, v + 1))
          , h = () => {
            let y;
            return p ? y = g : b ? y = w : f.route.Component ? y = m.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = d,
            m.createElement(TE, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: x,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || v === 0) ? m.createElement(RE, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: x,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var ny = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(ny || {})
  , xi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(xi || {});
function AE(e) {
    let t = m.useContext(yf);
    return t || be(!1),
    t
}
function LE(e) {
    let t = m.useContext(SE);
    return t || be(!1),
    t
}
function DE(e) {
    let t = m.useContext(jo);
    return t || be(!1),
    t
}
function ry(e) {
    let t = DE()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || be(!1),
    n.route.id
}
function ME() {
    var e;
    let t = m.useContext(ey)
      , n = LE(xi.UseRouteError)
      , r = ry(xi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function OE() {
    let {router: e} = AE(ny.UseNavigateStable)
      , t = ry(xi.UseNavigateStable)
      , n = m.useRef(!1);
    return ty( () => {
        n.current = !0
    }
    ),
    m.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Rs({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function zE(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function st(e) {
    be(!1)
}
function IE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Tn.Pop, navigator: s, static: a=!1, future: l} = e;
    Ki() && be(!1);
    let c = t.replace(/^\/*/, "/")
      , u = m.useMemo( () => ({
        basename: c,
        navigator: s,
        static: a,
        future: Rs({
            v7_relativeSplatPath: !1
        }, l)
    }), [c, l, s, a]);
    typeof r == "string" && (r = So(r));
    let {pathname: d="/", search: f="", hash: v="", state: p=null, key: b="default"} = r
      , g = m.useMemo( () => {
        let w = Zx(d, c);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: v,
                state: p,
                key: b
            },
            navigationType: o
        }
    }
    , [c, d, f, v, p, b, o]);
    return g == null ? null : m.createElement(Gi.Provider, {
        value: u
    }, m.createElement(Qi.Provider, {
        children: n,
        value: g
    }))
}
function $E(e) {
    let {children: t, location: n} = e;
    return EE(sd(t), n)
}
new Promise( () => {}
);
function sd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return m.Children.forEach(e, (r, o) => {
        if (!m.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === m.Fragment) {
            n.push.apply(n, sd(r.props.children, s));
            return
        }
        r.type !== st && be(!1),
        !r.props.index || !r.props.children || be(!1);
        let a = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = sd(r.props.children, s)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const FE = "6";
try {
    window.__reactRouterVersion = FE
} catch {}
const BE = "startTransition"
  , wp = dd[BE];
function UE(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = m.useRef();
    s.current == null && (s.current = Kj({
        window: o,
        v5Compat: !0
    }));
    let a = s.current
      , [l,c] = m.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , d = m.useCallback(f => {
        u && wp ? wp( () => c(f)) : c(f)
    }
    , [c, u]);
    return m.useLayoutEffect( () => a.listen(d), [a, d]),
    m.useEffect( () => zE(r), [r]),
    m.createElement(IE, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: a,
        future: r
    })
}
var bp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(bp || (bp = {}));
var Np;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Np || (Np = {}));
const VE = "/assets/hero-fashion-cFgJddJA.jpg"
  , Ge = "/assets/shein-logo-CHRkf6ep.png"
  , HE = Zv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , oy = m.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const a = r ? k1 : "button";
    return i.jsx(a, {
        className: rt(HE({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
oy.displayName = "Button";
const sy = ({onClick: e, children: t, className: n=""}) => i.jsx(oy, {
    onClick: e,
    className: `group relative w-full max-w-md h-auto py-4 px-6 text-sm sm:text-base font-semibold tracking-wide uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 cta-glow hover:scale-[1.02] ${n}`,
    children: i.jsxs("span", {
        className: "flex items-center justify-center gap-2 w-full",
        children: [i.jsx("span", {
            className: "text-center whitespace-normal leading-snug",
            children: t
        }), i.jsx(Nb, {
            className: "w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        })]
    })
})
  , WE = "/assets/img1-DPy2Lrbo.jpg"
  , qE = "/assets/img2-BeIizCVY.jpg"
  , YE = "/assets/img3-CgaQurlN.jpg"
  , GE = "/assets/img4-D_simRii.jpg"
  , QE = "/assets/img5-aVXirKA8.jpg"
  , KE = "/assets/img6-DEiZSTuB.jpg"
  , XE = "/assets/img7-D-9fV1up.jpg"
  , ZE = "/assets/img8-LHhJsPJs.jpg"
  , JE = "/assets/img9-BnlSHimk.jpg"
  , eC = "/assets/img10-hN7Z2fnb.jpg"
  , tC = "/assets/img11-C80AhwiQ.webp"
  , nC = "/assets/img12-DzaHwEyg.webp"
  , rC = "/assets/img13-Ccd8MJtl.webp"
  , oC = "/assets/img14-DWQiBHzz.webp"
  , sC = "/assets/img15-DCfv5u53.webp"
  , aC = "/assets/img16-CUWQrjb-.jpg"
  , iC = "/assets/img17-MSrU8T4J.jpg"
  , lC = "/assets/img18-C09Y28fJ.jpg"
  , cC = [WE, qE, YE, GE, QE, tC, nC, rC, oC]
  , uC = [KE, XE, ZE, JE, eC, sC, aC, iC, lC]
  , dC = ({src: e, alt: t}) => {
    const [n,r] = m.useState(!1);
    return i.jsxs("div", {
        className: "w-28 h-36 sm:w-32 sm:h-44 flex-shrink-0 rounded-2xl overflow-hidden bg-muted relative",
        children: [!n && i.jsx("div", {
            className: "absolute inset-0 animate-pulse bg-muted"
        }), i.jsx("img", {
            src: e,
            alt: t,
            className: `w-full h-full object-cover transition-opacity duration-300 ${n ? "opacity-100" : "opacity-0"}`,
            loading: "lazy",
            decoding: "async",
            onLoad: () => r(!0)
        })]
    })
}
  , Sp = ({images: e, direction: t}) => {
    const n = [...e, ...e];
    return i.jsx("div", {
        className: "overflow-hidden",
        children: i.jsx("div", {
            className: `flex gap-3 ${t === "left" ? "animate-scroll-left" : "animate-scroll-right"}`,
            style: {
                width: "max-content"
            },
            children: n.map( (r, o) => i.jsx(dC, {
                src: r,
                alt: `Modelo ${o % e.length + 1}`
            }, o))
        })
    })
}
  , fC = () => i.jsxs("div", {
    className: "w-full space-y-3 opacity-0 animate-fade-in",
    style: {
        animationDelay: "0.6s"
    },
    children: [i.jsx(Sp, {
        images: cC,
        direction: "left"
    }), i.jsx(Sp, {
        images: uC,
        direction: "right"
    })]
});
function $e(e, t) {
    window.ttq && window.ttq.track(e, t)
}
const mC = () => {
    const e = Eo();
    return m.useEffect( () => {
        $e("ViewContent", {
            content_name: "Landing Page"
        })
    }
    , []),
    i.jsxs("div", {
        className: "min-h-screen bg-background relative overflow-hidden",
        children: [i.jsxs("div", {
            className: "absolute inset-0",
            children: [i.jsx("img", {
                src: VE,
                alt: "Moda editorial",
                className: "w-full h-full object-cover opacity-25",
                fetchPriority: "high",
                decoding: "async"
            }), i.jsx("div", {
                className: "absolute inset-0 hero-overlay"
            })]
        }), i.jsxs("div", {
            className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-0 sm:px-6 py-12 gap-6",
            children: [i.jsx("div", {
                className: "opacity-0 animate-fade-in",
                style: {
                    animationDelay: "0.1s"
                },
                children: i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-8 sm:h-10"
                })
            }), i.jsx("div", {
                className: "opacity-0 animate-fade-in",
                style: {
                    animationDelay: "0.2s"
                },
                children: i.jsx("span", {
                    className: "text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground block",
                    children: "Programa Oficial Shein 2026 Portugal"
                })
            }), i.jsxs("div", {
                className: "max-w-2xl text-center space-y-6 px-6",
                children: [i.jsxs("h1", {
                    className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.3s"
                    },
                    children: ["A Shein paga-te por", " ", i.jsx("span", {
                        className: "text-gradient",
                        children: "avaliares a nova coleção"
                    })]
                }), i.jsx("p", {
                    className: "text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.5s"
                    },
                    children: "A Shein perde milhões a produzir roupa que ninguém compra. Por isso, agora pagam-te para avaliares cada peça antes de a fabricarem."
                })]
            }), i.jsx(fC, {}), i.jsx("div", {
                className: "w-full flex justify-center px-6 opacity-0 animate-slide-up",
                style: {
                    animationDelay: "0.7s"
                },
                children: i.jsx(sy, {
                    onClick: () => e("/como-funciona"),
                    children: "Começar a avaliar"
                })
            }), i.jsxs("div", {
                className: "flex items-center gap-6 opacity-0 animate-fade-in",
                style: {
                    animationDelay: "0.9s"
                },
                children: [i.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [i.jsx("div", {
                        className: "w-2 h-2 bg-primary rounded-full animate-pulse-soft"
                    }), i.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "2.847 avaliações hoje"
                    })]
                })]
            })]
        })]
    })
}
  , pC = () => i.jsx(mC, {})
  , hC = ({number: e, title: t, delay: n}) => i.jsx("div", {
    className: "opacity-0 animate-slide-up",
    style: {
        animationDelay: n
    },
    children: i.jsxs("div", {
        className: "flex items-center gap-6",
        children: [i.jsx("div", {
            className: "flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border bg-secondary",
            children: i.jsx("span", {
                className: "text-lg font-bold text-foreground",
                children: e
            })
        }), i.jsx("h3", {
            className: "text-lg font-semibold text-foreground",
            children: t
        })]
    })
})
  , gC = e => {
    m.useEffect( () => {
        e.forEach(t => {
            const n = new Image;
            n.src = t
        }
        )
    }
    , [e])
}
;
var Mc = "focusScope.autoFocusOnMount"
  , Oc = "focusScope.autoFocusOnUnmount"
  , jp = {
    bubbles: !1,
    cancelable: !0
}
  , vC = "FocusScope"
  , ay = m.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a} = e
      , [l,c] = m.useState(null)
      , u = Ut(o)
      , d = Ut(s)
      , f = m.useRef(null)
      , v = Ie(t, g => c(g))
      , p = m.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    m.useEffect( () => {
        if (r) {
            let g = function(y) {
                if (p.paused || !l)
                    return;
                const S = y.target;
                l.contains(S) ? f.current = S : xn(f.current, {
                    select: !0
                })
            }
              , w = function(y) {
                if (p.paused || !l)
                    return;
                const S = y.relatedTarget;
                S !== null && (l.contains(S) || xn(f.current, {
                    select: !0
                }))
            }
              , x = function(y) {
                if (document.activeElement === document.body)
                    for (const j of y)
                        j.removedNodes.length > 0 && xn(l)
            };
            document.addEventListener("focusin", g),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(x);
            return l && h.observe(l, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", g),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, l, p.paused]),
    m.useEffect( () => {
        if (l) {
            Cp.add(p);
            const g = document.activeElement;
            if (!l.contains(g)) {
                const x = new CustomEvent(Mc,jp);
                l.addEventListener(Mc, u),
                l.dispatchEvent(x),
                x.defaultPrevented || (xC(SC(iy(l)), {
                    select: !0
                }),
                document.activeElement === g && xn(l))
            }
            return () => {
                l.removeEventListener(Mc, u),
                setTimeout( () => {
                    const x = new CustomEvent(Oc,jp);
                    l.addEventListener(Oc, d),
                    l.dispatchEvent(x),
                    x.defaultPrevented || xn(g ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(Oc, d),
                    Cp.remove(p)
                }
                , 0)
            }
        }
    }
    , [l, u, d, p]);
    const b = m.useCallback(g => {
        if (!n && !r || p.paused)
            return;
        const w = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey
          , x = document.activeElement;
        if (w && x) {
            const h = g.currentTarget
              , [y,S] = yC(h);
            y && S ? !g.shiftKey && x === S ? (g.preventDefault(),
            n && xn(y, {
                select: !0
            })) : g.shiftKey && x === y && (g.preventDefault(),
            n && xn(S, {
                select: !0
            })) : x === h && g.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return i.jsx(xe.div, {
        tabIndex: -1,
        ...a,
        ref: v,
        onKeyDown: b
    })
}
);
ay.displayName = vC;
function xC(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (xn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function yC(e) {
    const t = iy(e)
      , n = Ep(t, e)
      , r = Ep(t.reverse(), e);
    return [n, r]
}
function iy(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Ep(e, t) {
    for (const n of e)
        if (!wC(n, {
            upTo: t
        }))
            return n
}
function wC(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function bC(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function xn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && bC(e) && t && e.select()
    }
}
var Cp = NC();
function NC() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = kp(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = kp(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function kp(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function SC(e) {
    return e.filter(t => t.tagName !== "A")
}
var zc = 0;
function jC() {
    m.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Pp()),
        zc++,
        () => {
            zc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            zc--
        }
    }
    , [])
}
function Pp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var zt = function() {
    return zt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    zt.apply(this, arguments)
};
function ly(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function EC(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Ba = "right-scroll-bar-position"
  , Ua = "width-before-scroll-bar"
  , CC = "with-scroll-bars-hidden"
  , kC = "--removed-body-scroll-bar-size";
function Ic(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function PC(e, t) {
    var n = m.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var RC = typeof window < "u" ? m.useLayoutEffect : m.useEffect
  , Rp = new WeakMap;
function TC(e, t) {
    var n = PC(null, function(r) {
        return e.forEach(function(o) {
            return Ic(o, r)
        })
    });
    return RC(function() {
        var r = Rp.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , a = n.current;
            o.forEach(function(l) {
                s.has(l) || Ic(l, null)
            }),
            s.forEach(function(l) {
                o.has(l) || Ic(l, a)
            })
        }
        Rp.set(n, e)
    }, [e]),
    n
}
function _C(e) {
    return e
}
function AC(e, t) {
    t === void 0 && (t = _C);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var a = t(s, r);
            return n.push(a),
            function() {
                n = n.filter(function(l) {
                    return l !== a
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var a = n;
                n = [],
                a.forEach(s)
            }
            n = {
                push: function(l) {
                    return s(l)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var a = [];
            if (n.length) {
                var l = n;
                n = [],
                l.forEach(s),
                a = n
            }
            var c = function() {
                var d = a;
                a = [],
                d.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(c)
            };
            u(),
            n = {
                push: function(d) {
                    a.push(d),
                    u()
                },
                filter: function(d) {
                    return a = a.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function LC(e) {
    e === void 0 && (e = {});
    var t = AC(null);
    return t.options = zt({
        async: !0,
        ssr: !1
    }, e),
    t
}
var cy = function(e) {
    var t = e.sideCar
      , n = ly(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return m.createElement(r, zt({}, n))
};
cy.isSideCarExport = !0;
function DC(e, t) {
    return e.useMedium(t),
    cy
}
var uy = LC()
  , $c = function() {}
  , Xi = m.forwardRef(function(e, t) {
    var n = m.useRef(null)
      , r = m.useState({
        onScrollCapture: $c,
        onWheelCapture: $c,
        onTouchMoveCapture: $c
    })
      , o = r[0]
      , s = r[1]
      , a = e.forwardProps
      , l = e.children
      , c = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , v = e.sideCar
      , p = e.noRelative
      , b = e.noIsolation
      , g = e.inert
      , w = e.allowPinchZoom
      , x = e.as
      , h = x === void 0 ? "div" : x
      , y = e.gapMode
      , S = ly(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , j = v
      , C = TC([n, t])
      , N = zt(zt({}, S), o);
    return m.createElement(m.Fragment, null, d && m.createElement(j, {
        sideCar: uy,
        removeScrollBar: u,
        shards: f,
        noRelative: p,
        noIsolation: b,
        inert: g,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: y
    }), a ? m.cloneElement(m.Children.only(l), zt(zt({}, N), {
        ref: C
    })) : m.createElement(h, zt({}, N, {
        className: c,
        ref: C
    }), l))
});
Xi.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Xi.classNames = {
    fullWidth: Ua,
    zeroRight: Ba
};
var MC = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function OC() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = MC();
    return t && e.setAttribute("nonce", t),
    e
}
function zC(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function IC(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var $C = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = OC()) && (zC(t, n),
            IC(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , FC = function() {
    var e = $C();
    return function(t, n) {
        m.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , dy = function() {
    var e = FC()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , BC = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Fc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , UC = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Fc(n), Fc(r), Fc(o)]
}
  , VC = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return BC;
    var t = UC(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , HC = dy()
  , Xr = "data-scroll-locked"
  , WC = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , a = e.right
      , l = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(CC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Xr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ba, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ua, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ba, " .").concat(Ba, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ua, " .").concat(Ua, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xr, `] {
    `).concat(kC, ": ").concat(l, `px;
  }
`)
}
  , Tp = function() {
    var e = parseInt(document.body.getAttribute(Xr) || "0", 10);
    return isFinite(e) ? e : 0
}
  , qC = function() {
    m.useEffect(function() {
        return document.body.setAttribute(Xr, (Tp() + 1).toString()),
        function() {
            var e = Tp() - 1;
            e <= 0 ? document.body.removeAttribute(Xr) : document.body.setAttribute(Xr, e.toString())
        }
    }, [])
}
  , YC = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    qC();
    var s = m.useMemo(function() {
        return VC(o)
    }, [o]);
    return m.createElement(HC, {
        styles: WC(s, !t, o, n ? "" : "!important")
    })
}
  , ad = !1;
if (typeof window < "u")
    try {
        var Na = Object.defineProperty({}, "passive", {
            get: function() {
                return ad = !0,
                !0
            }
        });
        window.addEventListener("test", Na, Na),
        window.removeEventListener("test", Na, Na)
    } catch {
        ad = !1
    }
var Pr = ad ? {
    passive: !1
} : !1
  , GC = function(e) {
    return e.tagName === "TEXTAREA"
}
  , fy = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !GC(e) && n[t] === "visible")
}
  , QC = function(e) {
    return fy(e, "overflowY")
}
  , KC = function(e) {
    return fy(e, "overflowX")
}
  , _p = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = my(e, r);
        if (o) {
            var s = py(e, r)
              , a = s[1]
              , l = s[2];
            if (a > l)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , XC = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , ZC = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , my = function(e, t) {
    return e === "v" ? QC(t) : KC(t)
}
  , py = function(e, t) {
    return e === "v" ? XC(t) : ZC(t)
}
  , JC = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , e2 = function(e, t, n, r, o) {
    var s = JC(e, window.getComputedStyle(t).direction)
      , a = s * r
      , l = n.target
      , c = t.contains(l)
      , u = !1
      , d = a > 0
      , f = 0
      , v = 0;
    do {
        if (!l)
            break;
        var p = py(e, l)
          , b = p[0]
          , g = p[1]
          , w = p[2]
          , x = g - w - s * b;
        (b || x) && my(e, l) && (f += x,
        v += b);
        var h = l.parentNode;
        l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(v) < 1 || !o)) && (u = !0),
    u
}
  , Sa = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Ap = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Lp = function(e) {
    return e && "current"in e ? e.current : e
}
  , t2 = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , n2 = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , r2 = 0
  , Rr = [];
function o2(e) {
    var t = m.useRef([])
      , n = m.useRef([0, 0])
      , r = m.useRef()
      , o = m.useState(r2++)[0]
      , s = m.useState(dy)[0]
      , a = m.useRef(e);
    m.useEffect(function() {
        a.current = e
    }, [e]),
    m.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var g = EC([e.lockRef.current], (e.shards || []).map(Lp), !0).filter(Boolean);
            return g.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var l = m.useCallback(function(g, w) {
        if ("touches"in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
            return !a.current.allowPinchZoom;
        var x = Sa(g), h = n.current, y = "deltaX"in g ? g.deltaX : h[0] - x[0], S = "deltaY"in g ? g.deltaY : h[1] - x[1], j, C = g.target, N = Math.abs(y) > Math.abs(S) ? "h" : "v";
        if ("touches"in g && N === "h" && C.type === "range")
            return !1;
        var E = _p(N, C);
        if (!E)
            return !0;
        if (E ? j = N : (j = N === "v" ? "h" : "v",
        E = _p(N, C)),
        !E)
            return !1;
        if (!r.current && "changedTouches"in g && (y || S) && (r.current = j),
        !j)
            return !0;
        var R = r.current || j;
        return e2(R, w, g, R === "h" ? y : S, !0)
    }, [])
      , c = m.useCallback(function(g) {
        var w = g;
        if (!(!Rr.length || Rr[Rr.length - 1] !== s)) {
            var x = "deltaY"in w ? Ap(w) : Sa(w)
              , h = t.current.filter(function(j) {
                return j.name === w.type && (j.target === w.target || w.target === j.shadowParent) && t2(j.delta, x)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var y = (a.current.shards || []).map(Lp).filter(Boolean).filter(function(j) {
                    return j.contains(w.target)
                })
                  , S = y.length > 0 ? l(w, y[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = m.useCallback(function(g, w, x, h) {
        var y = {
            name: g,
            delta: w,
            target: x,
            should: h,
            shadowParent: s2(x)
        };
        t.current.push(y),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== y
            })
        }, 1)
    }, [])
      , d = m.useCallback(function(g) {
        n.current = Sa(g),
        r.current = void 0
    }, [])
      , f = m.useCallback(function(g) {
        u(g.type, Ap(g), g.target, l(g, e.lockRef.current))
    }, [])
      , v = m.useCallback(function(g) {
        u(g.type, Sa(g), g.target, l(g, e.lockRef.current))
    }, []);
    m.useEffect(function() {
        return Rr.push(s),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: v
        }),
        document.addEventListener("wheel", c, Pr),
        document.addEventListener("touchmove", c, Pr),
        document.addEventListener("touchstart", d, Pr),
        function() {
            Rr = Rr.filter(function(g) {
                return g !== s
            }),
            document.removeEventListener("wheel", c, Pr),
            document.removeEventListener("touchmove", c, Pr),
            document.removeEventListener("touchstart", d, Pr)
        }
    }, []);
    var p = e.removeScrollBar
      , b = e.inert;
    return m.createElement(m.Fragment, null, b ? m.createElement(s, {
        styles: n2(o)
    }) : null, p ? m.createElement(YC, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function s2(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const a2 = DC(uy, o2);
var hy = m.forwardRef(function(e, t) {
    return m.createElement(Xi, zt({}, e, {
        ref: t,
        sideCar: a2
    }))
});
hy.classNames = Xi.classNames;
var i2 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Tr = new WeakMap
  , ja = new WeakMap
  , Ea = {}
  , Bc = 0
  , gy = function(e) {
    return e && (e.host || gy(e.parentNode))
}
  , l2 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = gy(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , c2 = function(e, t, n, r) {
    var o = l2(t, Array.isArray(e) ? e : [e]);
    Ea[n] || (Ea[n] = new WeakMap);
    var s = Ea[n]
      , a = []
      , l = new Set
      , c = new Set(o)
      , u = function(f) {
        !f || l.has(f) || (l.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var d = function(f) {
        !f || c.has(f) || Array.prototype.forEach.call(f.children, function(v) {
            if (l.has(v))
                d(v);
            else
                try {
                    var p = v.getAttribute(r)
                      , b = p !== null && p !== "false"
                      , g = (Tr.get(v) || 0) + 1
                      , w = (s.get(v) || 0) + 1;
                    Tr.set(v, g),
                    s.set(v, w),
                    a.push(v),
                    g === 1 && b && ja.set(v, !0),
                    w === 1 && v.setAttribute(n, "true"),
                    b || v.setAttribute(r, "true")
                } catch (x) {
                    console.error("aria-hidden: cannot operate on ", v, x)
                }
        })
    };
    return d(t),
    l.clear(),
    Bc++,
    function() {
        a.forEach(function(f) {
            var v = Tr.get(f) - 1
              , p = s.get(f) - 1;
            Tr.set(f, v),
            s.set(f, p),
            v || (ja.has(f) || f.removeAttribute(r),
            ja.delete(f)),
            p || f.removeAttribute(n)
        }),
        Bc--,
        Bc || (Tr = new WeakMap,
        Tr = new WeakMap,
        ja = new WeakMap,
        Ea = {})
    }
}
  , u2 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = i2(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    c2(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Zi = "Dialog"
  , [vy,nk] = Is(Zi)
  , [d2,Tt] = vy(Zi)
  , xy = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a=!0} = e
      , l = m.useRef(null)
      , c = m.useRef(null)
      , [u,d] = Tv({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Zi
    });
    return i.jsx(d2, {
        scope: t,
        triggerRef: l,
        contentRef: c,
        contentId: Tc(),
        titleId: Tc(),
        descriptionId: Tc(),
        open: u,
        onOpenChange: d,
        onOpenToggle: m.useCallback( () => d(f => !f), [d]),
        modal: a,
        children: n
    })
}
;
xy.displayName = Zi;
var yy = "DialogTrigger"
  , f2 = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(yy, n)
      , s = Ie(t, o.triggerRef);
    return i.jsx(xe.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sf(o.open),
        ...r,
        ref: s,
        onClick: ce(e.onClick, o.onOpenToggle)
    })
}
);
f2.displayName = yy;
var bf = "DialogPortal"
  , [m2,wy] = vy(bf, {
    forceMount: void 0
})
  , by = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = Tt(bf, t);
    return i.jsx(m2, {
        scope: t,
        forceMount: n,
        children: m.Children.map(r, a => i.jsx(yo, {
            present: n || s.open,
            children: i.jsx(nf, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
by.displayName = bf;
var yi = "DialogOverlay"
  , Ny = m.forwardRef( (e, t) => {
    const n = wy(yi, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Tt(yi, e.__scopeDialog);
    return s.modal ? i.jsx(yo, {
        present: r || s.open,
        children: i.jsx(h2, {
            ...o,
            ref: t
        })
    }) : null
}
);
Ny.displayName = yi;
var p2 = Ss("DialogOverlay.RemoveScroll")
  , h2 = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(yi, n);
    return i.jsx(hy, {
        as: p2,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: i.jsx(xe.div, {
            "data-state": Sf(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , xr = "DialogContent"
  , Sy = m.forwardRef( (e, t) => {
    const n = wy(xr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Tt(xr, e.__scopeDialog);
    return i.jsx(yo, {
        present: r || s.open,
        children: s.modal ? i.jsx(g2, {
            ...o,
            ref: t
        }) : i.jsx(v2, {
            ...o,
            ref: t
        })
    })
}
);
Sy.displayName = xr;
var g2 = m.forwardRef( (e, t) => {
    const n = Tt(xr, e.__scopeDialog)
      , r = m.useRef(null)
      , o = Ie(t, n.contentRef, r);
    return m.useEffect( () => {
        const s = r.current;
        if (s)
            return u2(s)
    }
    , []),
    i.jsx(jy, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ce(e.onCloseAutoFocus, s => {
            var a;
            s.preventDefault(),
            (a = n.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: ce(e.onPointerDownOutside, s => {
            const a = s.detail.originalEvent
              , l = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || l) && s.preventDefault()
        }
        ),
        onFocusOutside: ce(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , v2 = m.forwardRef( (e, t) => {
    const n = Tt(xr, e.__scopeDialog)
      , r = m.useRef(!1)
      , o = m.useRef(!1);
    return i.jsx(jy, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var a, l;
            (a = e.onCloseAutoFocus) == null || a.call(e, s),
            s.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var c, u;
            (c = e.onInteractOutside) == null || c.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , jy = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a} = e
      , l = Tt(xr, n)
      , c = m.useRef(null)
      , u = Ie(t, c);
    return jC(),
    i.jsxs(i.Fragment, {
        children: [i.jsx(ay, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: i.jsx(zi, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": Sf(l.open),
                ...a,
                ref: u,
                onDismiss: () => l.onOpenChange(!1)
            })
        }), i.jsxs(i.Fragment, {
            children: [i.jsx(x2, {
                titleId: l.titleId
            }), i.jsx(w2, {
                contentRef: c,
                descriptionId: l.descriptionId
            })]
        })]
    })
}
)
  , Nf = "DialogTitle"
  , Ey = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(Nf, n);
    return i.jsx(xe.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
Ey.displayName = Nf;
var Cy = "DialogDescription"
  , ky = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(Cy, n);
    return i.jsx(xe.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
ky.displayName = Cy;
var Py = "DialogClose"
  , Ry = m.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Tt(Py, n);
    return i.jsx(xe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ce(e.onClick, () => o.onOpenChange(!1))
    })
}
);
Ry.displayName = Py;
function Sf(e) {
    return e ? "open" : "closed"
}
var Ty = "DialogTitleWarning"
  , [rk,_y] = E1(Ty, {
    contentName: xr,
    titleName: Nf,
    docsSlug: "dialog"
})
  , x2 = ({titleId: e}) => {
    const t = _y(Ty)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return m.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , y2 = "DialogDescriptionWarning"
  , w2 = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_y(y2).contentName}}.`;
    return m.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , b2 = xy
  , N2 = by
  , Ay = Ny
  , Ly = Sy
  , Dy = Ey
  , My = ky
  , S2 = Ry;
const Bs = b2
  , j2 = N2
  , Oy = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Ay, {
    ref: n,
    className: rt("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Oy.displayName = Ay.displayName;
const Co = m.forwardRef( ({className: e, children: t, ...n}, r) => i.jsxs(j2, {
    children: [i.jsx(Oy, {}), i.jsxs(Ly, {
        ref: r,
        className: rt("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, i.jsxs(S2, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [i.jsx(ex, {
                className: "h-4 w-4"
            }), i.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Co.displayName = Ly.displayName;
const ko = ({className: e, ...t}) => i.jsx("div", {
    className: rt("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
ko.displayName = "DialogHeader";
const Po = m.forwardRef( ({className: e, ...t}, n) => i.jsx(Dy, {
    ref: n,
    className: rt("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Po.displayName = Dy.displayName;
const Ro = m.forwardRef( ({className: e, ...t}, n) => i.jsx(My, {
    ref: n,
    className: rt("text-sm text-muted-foreground", e),
    ...t
}));
Ro.displayName = My.displayName;
const Us = "/assets/img11-C80AhwiQ.webp"
  , Vs = "/assets/img1-DPy2Lrbo.jpg"
  , Hs = "/assets/img2-BeIizCVY.jpg"
  , Ws = "/assets/img8-LHhJsPJs.jpg"
  , qs = "/assets/img3-CgaQurlN.jpg"
  , Ys = "/assets/img15-DCfv5u53.webp"
  , Gs = [{
    code: "ARS",
    flag: "🇦🇷",
    name: "Peso Argentino"
}, {
    code: "BRL",
    flag: "🇧🇷",
    name: "Real Brasileño"
}, {
    code: "USD",
    flag: "🇺🇸",
    name: "Dólar Estadounidense"
}, {
    code: "EUR",
    flag: "🇪🇺",
    name: "Euro"
}, {
    code: "MXN",
    flag: "🇲🇽",
    name: "Peso Mexicano"
}, {
    code: "CLP",
    flag: "🇨🇱",
    name: "Peso Chileno"
}, {
    code: "COP",
    flag: "🇨🇴",
    name: "Peso Colombiano"
}, {
    code: "PEN",
    flag: "🇵🇪",
    name: "Sol Peruano"
}, {
    code: "UYU",
    flag: "🇺🇾",
    name: "Peso Uruguayo"
}, {
    code: "BOB",
    flag: "🇧🇴",
    name: "Boliviano"
}, {
    code: "PYG",
    flag: "🇵🇾",
    name: "Guaraní Paraguayo"
}, {
    code: "GBP",
    flag: "🇬🇧",
    name: "Libra Esterlina"
}, {
    code: "CAD",
    flag: "🇨🇦",
    name: "Dólar Canadiense"
}, {
    code: "AUD",
    flag: "🇦🇺",
    name: "Dólar Australiano"
}, {
    code: "JPY",
    flag: "🇯🇵",
    name: "Yen Japonés"
}, {
    code: "CNY",
    flag: "🇨🇳",
    name: "Yuan Chino"
}, {
    code: "INR",
    flag: "🇮🇳",
    name: "Rupia India"
}, {
    code: "KRW",
    flag: "🇰🇷",
    name: "Won Surcoreano"
}, {
    code: "CHF",
    flag: "🇨🇭",
    name: "Franco Suizo"
}, {
    code: "SEK",
    flag: "🇸🇪",
    name: "Corona Sueca"
}, {
    code: "NOK",
    flag: "🇳🇴",
    name: "Corona Noruega"
}, {
    code: "DKK",
    flag: "🇩🇰",
    name: "Corona Danesa"
}, {
    code: "PLN",
    flag: "🇵🇱",
    name: "Zloty Polaco"
}, {
    code: "CZK",
    flag: "🇨🇿",
    name: "Corona Checa"
}, {
    code: "HUF",
    flag: "🇭🇺",
    name: "Florín Húngaro"
}, {
    code: "RON",
    flag: "🇷🇴",
    name: "Leu Rumano"
}, {
    code: "TRY",
    flag: "🇹🇷",
    name: "Lira Turca"
}, {
    code: "ZAR",
    flag: "🇿🇦",
    name: "Rand Sudafricano"
}, {
    code: "NGN",
    flag: "🇳🇬",
    name: "Naira Nigeriana"
}, {
    code: "EGP",
    flag: "🇪🇬",
    name: "Libra Egipcia"
}, {
    code: "AED",
    flag: "🇦🇪",
    name: "Dírham Emiratos"
}, {
    code: "SAR",
    flag: "🇸🇦",
    name: "Riyal Saudí"
}, {
    code: "ILS",
    flag: "🇮🇱",
    name: "Shekel Israelí"
}, {
    code: "THB",
    flag: "🇹🇭",
    name: "Baht Tailandés"
}, {
    code: "PHP",
    flag: "🇵🇭",
    name: "Peso Filipino"
}, {
    code: "IDR",
    flag: "🇮🇩",
    name: "Rupia Indonesia"
}, {
    code: "MYR",
    flag: "🇲🇾",
    name: "Ringgit Malasio"
}, {
    code: "SGD",
    flag: "🇸🇬",
    name: "Dólar Singapur"
}, {
    code: "NZD",
    flag: "🇳🇿",
    name: "Dólar Neozelandés"
}, {
    code: "VES",
    flag: "🇻🇪",
    name: "Bolívar Venezolano"
}, {
    code: "CRC",
    flag: "🇨🇷",
    name: "Colón Costarricense"
}, {
    code: "DOP",
    flag: "🇩🇴",
    name: "Peso Dominicano"
}, {
    code: "GTQ",
    flag: "🇬🇹",
    name: "Quetzal Guatemalteco"
}, {
    code: "HNL",
    flag: "🇭🇳",
    name: "Lempira Hondureño"
}, {
    code: "NIO",
    flag: "🇳🇮",
    name: "Córdoba Nicaragüense"
}, {
    code: "PAB",
    flag: "🇵🇦",
    name: "Balboa Panameño"
}, {
    code: "TWD",
    flag: "🇹🇼",
    name: "Dólar Taiwanés"
}, {
    code: "VND",
    flag: "🇻🇳",
    name: "Dong Vietnamita"
}, {
    code: "PKR",
    flag: "🇵🇰",
    name: "Rupia Pakistaní"
}, {
    code: "BDT",
    flag: "🇧🇩",
    name: "Taka Bangladesí"
}, {
    code: "UAH",
    flag: "🇺🇦",
    name: "Grivna Ucraniana"
}, {
    code: "RUB",
    flag: "🇷🇺",
    name: "Rublo Ruso"
}]
  , wi = {
    AR: "ARS",
    BR: "BRL",
    US: "USD",
    MX: "MXN",
    CL: "CLP",
    CO: "COP",
    PE: "PEN",
    UY: "UYU",
    BO: "BOB",
    PY: "PYG",
    GB: "GBP",
    CA: "CAD",
    AU: "AUD",
    JP: "JPY",
    CN: "CNY",
    IN: "INR",
    KR: "KRW",
    CH: "CHF",
    SE: "SEK",
    NO: "NOK",
    DK: "DKK",
    PL: "PLN",
    CZ: "CZK",
    HU: "HUF",
    RO: "RON",
    TR: "TRY",
    ZA: "ZAR",
    NG: "NGN",
    EG: "EGP",
    AE: "AED",
    SA: "SAR",
    IL: "ILS",
    TH: "THB",
    PH: "PHP",
    ID: "IDR",
    MY: "MYR",
    SG: "SGD",
    NZ: "NZD",
    VE: "VES",
    CR: "CRC",
    DO: "DOP",
    GT: "GTQ",
    HN: "HNL",
    NI: "NIO",
    PA: "PAB",
    TW: "TWD",
    VN: "VND",
    PK: "PKR",
    BD: "BDT",
    UA: "UAH",
    RU: "RUB",
    DE: "EUR",
    FR: "EUR",
    ES: "EUR",
    IT: "EUR",
    PT: "EUR",
    NL: "EUR",
    BE: "EUR",
    AT: "EUR",
    IE: "EUR",
    FI: "EUR",
    GR: "EUR",
    SK: "EUR",
    SI: "EUR",
    EE: "EUR",
    LV: "EUR",
    LT: "EUR",
    MT: "EUR",
    CY: "EUR",
    LU: "EUR",
    HR: "EUR"
};
async function E2(e, t) {
    var n;
    try {
        const r = await fetch(e, {
            signal: AbortSignal.timeout(3e3)
        });
        if (!r.ok)
            return null;
        const o = await (e.endsWith("country_code/") ? r.text() : r.json())
          , s = (n = t(o)) == null ? void 0 : n.trim().toUpperCase();
        if (s && wi[s])
            return wi[s]
    } catch {}
    return null
}
async function Qs() {
    const e = [{
        url: "https://ipapi.co/country_code/",
        extract: t => typeof t == "string" ? t : void 0
    }, {
        url: "https://ip2c.org/s",
        extract: t => typeof t == "string" ? t.split(";")[1] : void 0
    }, {
        url: "https://freeipapi.com/api/json",
        extract: t => t == null ? void 0 : t.countryCode
    }];
    for (const t of e) {
        const n = await E2(t.url, t.extract);
        if (n)
            return n
    }
    try {
        const n = (navigator.language || "").split("-");
        if (n.length === 2) {
            const r = n[1].toUpperCase();
            if (wi[r])
                return wi[r]
        }
    } catch {}
    try {
        const t = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (t.includes("Argentina"))
            return "ARS";
        if (t.includes("Sao_Paulo") || t.includes("Fortaleza") || t.includes("Recife") || t.includes("Bahia") || t.includes("Belem") || t.includes("Manaus") || t.includes("Cuiaba") || t.includes("Porto_Velho") || t.includes("Boa_Vista") || t.includes("Noronha") || t.includes("Maceio") || t.includes("Araguaina"))
            return "BRL";
        if (t.includes("Mexico"))
            return "MXN";
        if (t.includes("Santiago"))
            return "CLP";
        if (t.includes("Bogota"))
            return "COP";
        if (t.includes("Lima"))
            return "PEN";
        if (t.includes("London"))
            return "GBP";
        if (t.includes("Madrid") || t.includes("Paris") || t.includes("Berlin") || t.includes("Rome") || t.includes("Lisbon"))
            return "EUR"
    } catch {}
    return "EUR"
}
const Dp = [{
    number: "01",
    title: "Começas a avaliar peças",
    description: "Ao entrares no programa, avalia as peças e ganha dinheiro por cada avaliação."
}, {
    number: "02",
    title: "Avalias novos modelos da Shein",
    description: "Vê peças exclusivas e dá a tua opinião sincera. Cada avaliação soma dinheiro ao teu saldo."
}, {
    number: "03",
    title: "O teu saldo aumenta com cada opinião",
    description: "Quanto mais peças avaliares, mais ganhas. A tua opinião tem valor real para a Shein."
}, {
    number: "04",
    title: "Levanta o teu dinheiro quando quiseres",
    description: ""
}]
  , C2 = () => {
    const e = Eo();
    gC([Us, Vs, Hs, Ws, qs, Ys]),
    m.useEffect( () => {
        window.scrollTo(0, 0),
        $e("ViewContent", {
            content_name: "Como Funciona"
        })
    }
    , []);
    const s = () => {
        localStorage.setItem("selectedCurrency", "EUR"),
        $e("ClickButton", {
            content_name: "Start Evaluation",
            currency: "EUR"
        }),
        e("/evaluacion")
    }
    ;
    return i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsxs("button", {
                    onClick: () => e(-1),
                    className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: [i.jsx(bb, {
                        className: "w-4 h-4"
                    }), i.jsx("span", {
                        className: "text-sm",
                        children: "Voltar"
                    })]
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })]
            })
        }), i.jsx("div", {
            className: "pt-20 pb-28 px-6",
            children: i.jsxs("div", {
                className: "max-w-xl mx-auto",
                children: [i.jsx("div", {
                    className: "mb-2 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.1s"
                    },
                    children: i.jsx("span", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground",
                        children: "Como funciona"
                    })
                }), i.jsx("h2", {
                    className: "text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    children: "O programa de avaliação"
                }), i.jsx("div", {
                    className: "glass-card p-4 mb-6 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.3s"
                    },
                    children: i.jsxs("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: ["A Shein perdeu mais de 800M€ em 2025 por produzir roupa que ninguém comprou.", " ", i.jsx("span", {
                            className: "text-foreground font-medium",
                            children: "Agora pagam-te para avaliares cada peça antes de a fabricarem e evitar esse prejuízo."
                        })]
                    })
                }), i.jsx("div", {
                    className: "space-y-4 mb-8",
                    children: Dp.map( (a, l) => i.jsxs("div", {
                        className: "relative",
                        children: [l < Dp.length - 1 && i.jsx("div", {
                            className: "absolute left-6 top-14 w-px h-4 step-line opacity-30"
                        }), i.jsx(hC, {
                            number: a.number,
                            title: a.title,
                            description: a.description,
                            delay: `${.4 + l * .1}s`
                        })]
                    }, a.number))
                }), i.jsx("p", {
                    className: "text-center text-sm font-semibold text-foreground tracking-wide mb-4 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.8s"
                    },
                    children: "Simples. Direto."
                }), i.jsx("div", {
                    className: "flex justify-center opacity-0 animate-slide-up",
                    style: {
                        animationDelay: "1s"
                    },
                    children: i.jsx(sy, {
                        onClick: s,
                        children: "Começar a avaliar"
                    })
                })]
            })
        })]
    })
}
  , k2 = {
    ARS: {
        symbol: "$",
        flag: "🇦🇷",
        name: "Peso Argentino"
    },
    BRL: {
        symbol: "R$",
        flag: "🇧🇷",
        name: "Real Brasileño"
    },
    USD: {
        symbol: "$",
        flag: "🇺🇸",
        name: "Dólar Estadounidense"
    },
    EUR: {
        symbol: "€",
        flag: "🇪🇺",
        name: "Euro"
    },
    MXN: {
        symbol: "$",
        flag: "🇲🇽",
        name: "Peso Mexicano"
    },
    CLP: {
        symbol: "$",
        flag: "🇨🇱",
        name: "Peso Chileno"
    },
    COP: {
        symbol: "$",
        flag: "🇨🇴",
        name: "Peso Colombiano"
    },
    PEN: {
        symbol: "S/",
        flag: "🇵🇪",
        name: "Sol Peruano"
    },
    UYU: {
        symbol: "$",
        flag: "🇺🇾",
        name: "Peso Uruguayo"
    },
    BOB: {
        symbol: "Bs",
        flag: "🇧🇴",
        name: "Boliviano"
    },
    PYG: {
        symbol: "₲",
        flag: "🇵🇾",
        name: "Guaraní"
    },
    GBP: {
        symbol: "£",
        flag: "🇬🇧",
        name: "Libra Esterlina"
    },
    CAD: {
        symbol: "CA$",
        flag: "🇨🇦",
        name: "Dólar Canadiense"
    },
    AUD: {
        symbol: "A$",
        flag: "🇦🇺",
        name: "Dólar Australiano"
    },
    JPY: {
        symbol: "¥",
        flag: "🇯🇵",
        name: "Yen Japonés"
    },
    CNY: {
        symbol: "¥",
        flag: "🇨🇳",
        name: "Yuan Chino"
    },
    INR: {
        symbol: "₹",
        flag: "🇮🇳",
        name: "Rupia India"
    },
    KRW: {
        symbol: "₩",
        flag: "🇰🇷",
        name: "Won Surcoreano"
    },
    CHF: {
        symbol: "CHF",
        flag: "🇨🇭",
        name: "Franco Suizo"
    },
    SEK: {
        symbol: "kr",
        flag: "🇸🇪",
        name: "Corona Sueca"
    },
    NOK: {
        symbol: "kr",
        flag: "🇳🇴",
        name: "Corona Noruega"
    },
    DKK: {
        symbol: "kr",
        flag: "🇩🇰",
        name: "Corona Danesa"
    },
    PLN: {
        symbol: "zł",
        flag: "🇵🇱",
        name: "Zloty Polaco"
    },
    CZK: {
        symbol: "Kč",
        flag: "🇨🇿",
        name: "Corona Checa"
    },
    HUF: {
        symbol: "Ft",
        flag: "🇭🇺",
        name: "Florín Húngaro"
    },
    RON: {
        symbol: "lei",
        flag: "🇷🇴",
        name: "Leu Rumano"
    },
    TRY: {
        symbol: "₺",
        flag: "🇹🇷",
        name: "Lira Turca"
    },
    ZAR: {
        symbol: "R",
        flag: "🇿🇦",
        name: "Rand Sudafricano"
    },
    NGN: {
        symbol: "₦",
        flag: "🇳🇬",
        name: "Naira Nigeriana"
    },
    EGP: {
        symbol: "E£",
        flag: "🇪🇬",
        name: "Libra Egipcia"
    },
    AED: {
        symbol: "د.إ",
        flag: "🇦🇪",
        name: "Dírham Emiratos"
    },
    SAR: {
        symbol: "﷼",
        flag: "🇸🇦",
        name: "Riyal Saudí"
    },
    ILS: {
        symbol: "₪",
        flag: "🇮🇱",
        name: "Shekel Israelí"
    },
    THB: {
        symbol: "฿",
        flag: "🇹🇭",
        name: "Baht Tailandés"
    },
    PHP: {
        symbol: "₱",
        flag: "🇵🇭",
        name: "Peso Filipino"
    },
    IDR: {
        symbol: "Rp",
        flag: "🇮🇩",
        name: "Rupia Indonesia"
    },
    MYR: {
        symbol: "RM",
        flag: "🇲🇾",
        name: "Ringgit Malasio"
    },
    SGD: {
        symbol: "S$",
        flag: "🇸🇬",
        name: "Dólar Singapur"
    },
    NZD: {
        symbol: "NZ$",
        flag: "🇳🇿",
        name: "Dólar Neozelandés"
    },
    VES: {
        symbol: "Bs.S",
        flag: "🇻🇪",
        name: "Bolívar Venezolano"
    },
    CRC: {
        symbol: "₡",
        flag: "🇨🇷",
        name: "Colón Costarricense"
    },
    DOP: {
        symbol: "RD$",
        flag: "🇩🇴",
        name: "Peso Dominicano"
    },
    GTQ: {
        symbol: "Q",
        flag: "🇬🇹",
        name: "Quetzal Guatemalteco"
    },
    HNL: {
        symbol: "L",
        flag: "🇭🇳",
        name: "Lempira Hondureño"
    },
    NIO: {
        symbol: "C$",
        flag: "🇳🇮",
        name: "Córdoba Nicaragüense"
    },
    PAB: {
        symbol: "B/.",
        flag: "🇵🇦",
        name: "Balboa Panameño"
    },
    TWD: {
        symbol: "NT$",
        flag: "🇹🇼",
        name: "Dólar Taiwanés"
    },
    VND: {
        symbol: "₫",
        flag: "🇻🇳",
        name: "Dong Vietnamita"
    },
    PKR: {
        symbol: "₨",
        flag: "🇵🇰",
        name: "Rupia Pakistaní"
    },
    BDT: {
        symbol: "৳",
        flag: "🇧🇩",
        name: "Taka Bangladesí"
    },
    UAH: {
        symbol: "₴",
        flag: "🇺🇦",
        name: "Grivna Ucraniana"
    },
    RUB: {
        symbol: "₽",
        flag: "🇷🇺",
        name: "Rublo Ruso"
    }
}
  , P2 = {
    USD: 1,
    EUR: 1,
    GBP: .79,
    BRL: 5.1,
    ARS: 1050,
    MXN: 17.2,
    CLP: 950,
    COP: 4100,
    PEN: 3.75,
    UYU: 39,
    BOB: 6.9,
    PYG: 7300,
    CAD: 1.36,
    AUD: 1.55,
    JPY: 150,
    CNY: 7.25,
    INR: 83,
    KRW: 1330,
    CHF: .88,
    SEK: 10.5,
    NOK: 10.8,
    DKK: 6.9,
    PLN: 4.05,
    CZK: 23.5,
    HUF: 365,
    RON: 4.6,
    TRY: 32,
    ZAR: 18.5,
    NGN: 1550,
    EGP: 49,
    AED: 3.67,
    SAR: 3.75,
    ILS: 3.65,
    THB: 35,
    PHP: 56,
    IDR: 15800,
    MYR: 4.7,
    SGD: 1.34,
    NZD: 1.68,
    VES: 36.5,
    CRC: 510,
    DOP: 58,
    GTQ: 7.8,
    HNL: 24.7,
    NIO: 36.7,
    PAB: 1,
    TWD: 32,
    VND: 24500,
    PKR: 280,
    BDT: 110,
    UAH: 41,
    RUB: 92
};
function R2() {
    var t;
    const e = "EUR";
    return ((t = k2[e]) == null ? void 0 : t.symbol) || "€"
}
function zy() {
    const e = "EUR";
    return P2[e] || 1
}
function T2(e) {
    const t = zy()
      , n = e * t;
    return t >= 100 ? Math.round(n) : t >= 10 ? Math.round(n * 10) / 10 : Math.round(n * 100) / 100
}
function B(e) {
    const t = R2()
      , n = T2(e)
      , r = zy();
    return r >= 100 ? `${t}${n.toLocaleString()}` : r >= 10 ? `${t}${n.toFixed(1)}` : `${t}${n.toFixed(2)}`
}
const Uo = [{
    id: 1,
    src: Us,
    label: "Look 1 de 6",
    reward: 180.42
}, {
    id: 2,
    src: Vs,
    label: "Look 2 de 6",
    reward: 127.35
}, {
    id: 3,
    src: Hs,
    label: "Look 3 de 6",
    reward: 201.65
}, {
    id: 4,
    src: Ws,
    label: "Look 4 de 6",
    reward: 148.58
}, {
    id: 5,
    src: qs,
    label: "Look 5 de 6",
    reward: 116.74
}, {
    id: 6,
    src: Ys,
    label: "Look 6 de 6",
    reward: 212.26
}]
  , Mp = 0
  , Uc = [{
    emoji: "😍",
    text: "Usaria sem hesitar"
}, {
    emoji: "😊",
    text: "Gostei, mas mudaria algo"
}, {
    emoji: "😐",
    text: "Está bem, nada de especial"
}, {
    emoji: "🤔",
    text: "Não é o meu estilo"
}, {
    emoji: "❌",
    text: "Não usaria"
}]
  , _2 = () => {
    const e = Eo()
      , [t,n] = m.useState(0)
      , [r,o] = m.useState({})
      , [s,a] = m.useState(!1)
      , [l,c] = m.useState(!1)
      , [u,d] = m.useState(Mp)
      , [f,v] = m.useState(0)
      , [p,b] = m.useState( () => localStorage.getItem("selectedCurrency") || "EUR")
      , [g,w] = m.useState({
        open: !1,
        reward: 0
    })
      , [x] = m.useState( () => {
        const N = new Audio("/sounds/cash-register.mp3");
        return N.volume = .7,
        N.load(),
        N
    }
    );
    m.useEffect( () => {
        $e("ViewContent", {
            content_name: "Evaluacion"
        });
        const N = setTimeout( () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            }),
            document.documentElement.scrollTop = 0,
            document.body.scrollTop = 0
        }
        , 50);
        return Promise.resolve().then(() => {
            localStorage.setItem("selectedCurrency", "EUR");
            b("EUR")
        }
        ),
        () => {
            clearTimeout(N)
        }
    }
    , []);
    const h = () => {
        t < Uo.length - 1 ? (n(N => N + 1),
        a(!1)) : (c(!0),
        a(!1),
        $e("CompleteRegistration", {
            content_name: "Evaluation Complete"
        }))
    }
      , y = N => {
        if (s)
            return;
        o(R => ({
            ...R,
            [t]: N
        })),
        a(!0);
        const E = Uo[t].reward;
        d(R => R + E),
        v(R => R + E),
        x.currentTime = 0,
        x.play().catch( () => {}
        ),
        setTimeout( () => {
            w({
                open: !0,
                reward: E
            })
        }
        , 200)
    }
      , S = () => {
        w({
            open: !1,
            reward: 0
        }),
        h(),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }
    ;
    Gs.find(N => N.code === p);
    const j = Uo[t]
      , C = (t + (l ? 1 : 0)) / Uo.length * 100;
    return i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsxs("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: [i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsx("div", {
                    className: "w-16"
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                }), i.jsx("div", {
                    className: "w-16"
                })]
            }), i.jsx("div", {
                className: "h-1 bg-secondary",
                children: i.jsx("div", {
                    className: "h-full bg-foreground transition-all duration-500 ease-out",
                    style: {
                        width: `${C}%`
                    }
                })
            })]
        }), i.jsx("div", {
            className: "pt-20 pb-32 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-4 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), l ? i.jsxs("div", {
                    className: "pt-6 opacity-0 animate-fade-in",
                    children: [i.jsxs("div", {
                        className: "text-center mb-6",
                        children: [i.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "💰"
                        }), i.jsx("h2", {
                            className: "text-2xl font-bold text-foreground mb-2",
                            children: "Avaliação completa!"
                        }), i.jsx("p", {
                            className: "text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto",
                            children: "Ganhaste dinheiro por cada peça que avaliaste. A tua opinião ajuda a Shein a decidir o que produzir."
                        })]
                    }), i.jsxs("div", {
                        className: "border border-green-500/20 rounded-xl bg-green-500/5 p-5 text-center space-y-3 mb-6",
                        children: [i.jsx("p", {
                            className: "text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground",
                            children: "Resumo dos ganhos"
                        }), i.jsxs("div", {
                            className: "space-y-1",
                            children: [i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Saldo inicial"
                                }), i.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: B(Mp)
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Ganho a avaliar"
                                }), i.jsxs("span", {
                                    className: "font-medium text-green-500",
                                    children: ["+", B(f)]
                                })]
                            }), i.jsx("div", {
                                className: "h-px bg-border my-2"
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [i.jsx("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: "Saldo total"
                                }), i.jsx("span", {
                                    className: "text-2xl font-bold text-green-500",
                                    children: B(u)
                                })]
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: Uo.map( (N, E) => {
                            var R, A;
                            return i.jsxs("div", {
                                className: "flex gap-3 p-3 border border-border rounded-xl bg-card",
                                children: [i.jsx("div", {
                                    className: "w-16 h-20 rounded-lg overflow-hidden flex-shrink-0",
                                    children: i.jsx("img", {
                                        src: N.src,
                                        alt: N.label,
                                        className: "w-full h-full object-cover"
                                    })
                                }), i.jsxs("div", {
                                    className: "flex-1 flex flex-col justify-center gap-1",
                                    children: [i.jsxs("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: ["Modelo #", N.id]
                                    }), i.jsxs("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [(R = Uc[r[E]]) == null ? void 0 : R.emoji, " ", (A = Uc[r[E]]) == null ? void 0 : A.text]
                                    }), i.jsxs("span", {
                                        className: "text-sm font-bold text-green-500",
                                        children: ["+", B(N.reward)]
                                    })]
                                })]
                            }, N.id)
                        }
                        )
                    }), i.jsx("button", {
                        onClick: () => e("/confirmacao-taxa"),
                        className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl whitespace-normal",
                        children: "Levantar o meu dinheiro"
                    })]
                }) : i.jsxs(i.Fragment, {
                    children: [i.jsx("p", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground text-center mb-4",
                        children: j.label
                    }), i.jsxs("p", {
                        className: "text-center text-sm text-green-500 font-semibold mb-3",
                        children: ["+", B(j.reward), " por avaliares esta peça"]
                    }), i.jsx("div", {
                        className: `relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] transition-all duration-200 ${s ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                        children: i.jsx("img", {
                            src: j.src,
                            alt: `Look ${t + 1}`,
                            className: "w-full h-full object-cover"
                        })
                    }), i.jsx("div", {
                        className: "space-y-2",
                        children: Uc.map( (N, E) => i.jsxs("button", {
                            onClick: () => y(E),
                            className: `w-full flex items-center gap-3 px-4 py-3 border border-border bg-card hover:bg-secondary transition-all duration-200 text-left rounded-xl ${s ? "pointer-events-none opacity-50" : ""}`,
                            children: [i.jsx("span", {
                                className: "text-xl",
                                children: N.emoji
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: N.text
                            })]
                        }, E))
                    })]
                })]
            })
        }), !l && Object.keys(r).length > 0 && i.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-3 flex items-center justify-between",
                children: [i.jsxs("div", {
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "💰 Ganado hasta ahora"
                    }), i.jsxs("p", {
                        className: "text-lg font-bold text-green-500",
                        children: ["+", B(f)]
                    })]
                }), i.jsxs("div", {
                    className: "text-right",
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "Saldo total"
                    }), i.jsx("p", {
                        className: "text-lg font-bold text-foreground",
                        children: B(u)
                    })]
                })]
            })
        }), i.jsx(Bs, {
            open: g.open,
            onOpenChange: N => {
                N || S()
            }
            ,
            children: i.jsxs(Co, {
                className: "max-w-sm mx-auto rounded-2xl text-center p-5",
                children: [i.jsx("div", {
                    className: "w-28 h-36 rounded-xl overflow-hidden mx-auto mb-3",
                    children: i.jsx("img", {
                        src: j.src,
                        alt: `Look ${t + 1}`,
                        className: "w-full h-full object-cover"
                    })
                }), i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-1",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-3.5 h-3.5 text-green-500"
                        }), i.jsx("span", {
                            className: "text-base font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-[10px] text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsxs(ko, {
                    className: "items-center",
                    children: [i.jsxs(Po, {
                        className: "text-lg font-bold text-foreground",
                        children: ["+", B(g.reward), " adicionados 💰"]
                    }), i.jsx(Ro, {
                        className: "text-muted-foreground text-sm leading-relaxed mt-2",
                        children: "Obrigado pela tua opinião! O dinheiro foi adicionado ao teu saldo. Continua a avaliar para ganhares mais."
                    })]
                }), i.jsx("button", {
                    onClick: S,
                    className: "w-full mt-2 px-6 py-3 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl",
                    children: "Continuar a avaliar"
                })]
            })
        })]
    })
}
  , Vo = [{
    id: 1,
    src: Us,
    label: "Look 1 de 6",
    reward: 180.42
}, {
    id: 2,
    src: Vs,
    label: "Look 2 de 6",
    reward: 127.35
}, {
    id: 3,
    src: Hs,
    label: "Look 3 de 6",
    reward: 201.65
}, {
    id: 4,
    src: Ws,
    label: "Look 4 de 6",
    reward: 148.58
}, {
    id: 5,
    src: qs,
    label: "Look 5 de 6",
    reward: 116.74
}, {
    id: 6,
    src: Ys,
    label: "Look 6 de 6",
    reward: 212.26
}]
  , Op = 0
  , Vc = [{
    emoji: "😍",
    text: "Usaria sem hesitar"
}, {
    emoji: "😊",
    text: "Gostei, mas mudaria algo"
}, {
    emoji: "😐",
    text: "Está bem, nada de especial"
}, {
    emoji: "🤔",
    text: "Não é o meu estilo"
}, {
    emoji: "❌",
    text: "Não usaria"
}]
  , A2 = () => {
    const e = Eo()
      , [t,n] = m.useState(0)
      , [r,o] = m.useState({})
      , [s,a] = m.useState(!1)
      , [l,c] = m.useState(!1)
      , [u,d] = m.useState(Op)
      , [f,v] = m.useState(0)
      , [p,b] = m.useState( () => localStorage.getItem("selectedCurrency") || "EUR")
      , [g,w] = m.useState({
        open: !1,
        reward: 0
    })
      , [x] = m.useState( () => {
        const N = new Audio("/sounds/cash-register.mp3");
        return N.volume = .7,
        N.load(),
        N
    }
    );
    m.useEffect( () => {
        $e("ViewContent", {
            content_name: "Evaluacion"
        });
        const N = setTimeout( () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            }),
            document.documentElement.scrollTop = 0,
            document.body.scrollTop = 0
        }
        , 50);
        return Promise.resolve().then(() => {
            localStorage.setItem("selectedCurrency", "EUR");
            b("EUR")
        }
        ),
        () => {
            clearTimeout(N)
        }
    }
    , []);
    const h = () => {
        t < Vo.length - 1 ? (n(N => N + 1),
        a(!1)) : (c(!0),
        a(!1),
        $e("CompleteRegistration", {
            content_name: "Evaluation Complete"
        }))
    }
      , y = N => {
        if (s)
            return;
        o(R => ({
            ...R,
            [t]: N
        })),
        a(!0);
        const E = Vo[t].reward;
        d(R => R + E),
        v(R => R + E),
        x.currentTime = 0,
        x.play().catch( () => {}
        ),
        setTimeout( () => {
            w({
                open: !0,
                reward: E
            })
        }
        , 200)
    }
      , S = () => {
        w({
            open: !1,
            reward: 0
        }),
        h(),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }
    ;
    Gs.find(N => N.code === p);
    const j = Vo[t]
      , C = (t + (l ? 1 : 0)) / Vo.length * 100;
    return i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsxs("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: [i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsx("div", {
                    className: "w-16"
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                }), i.jsx("div", {
                    className: "w-16"
                })]
            }), i.jsx("div", {
                className: "h-1 bg-secondary",
                children: i.jsx("div", {
                    className: "h-full bg-foreground transition-all duration-500 ease-out",
                    style: {
                        width: `${C}%`
                    }
                })
            })]
        }), i.jsx("div", {
            className: "pt-20 pb-32 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-4 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), l ? i.jsxs("div", {
                    className: "pt-6 opacity-0 animate-fade-in",
                    children: [i.jsxs("div", {
                        className: "text-center mb-6",
                        children: [i.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "💰"
                        }), i.jsx("h2", {
                            className: "text-2xl font-bold text-foreground mb-2",
                            children: "Avaliação completa!"
                        }), i.jsx("p", {
                            className: "text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto",
                            children: "Ganhaste dinheiro por cada peça que avaliaste. A tua opinião ajuda a Shein a decidir o que produzir."
                        })]
                    }), i.jsxs("div", {
                        className: "border border-green-500/20 rounded-xl bg-green-500/5 p-5 text-center space-y-3 mb-6",
                        children: [i.jsx("p", {
                            className: "text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground",
                            children: "Resumo dos ganhos"
                        }), i.jsxs("div", {
                            className: "space-y-1",
                            children: [i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Saldo inicial"
                                }), i.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: B(Op)
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Ganho a avaliar"
                                }), i.jsxs("span", {
                                    className: "font-medium text-green-500",
                                    children: ["+", B(f)]
                                })]
                            }), i.jsx("div", {
                                className: "h-px bg-border my-2"
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [i.jsx("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: "Saldo total"
                                }), i.jsx("span", {
                                    className: "text-2xl font-bold text-green-500",
                                    children: B(u)
                                })]
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: Vo.map( (N, E) => {
                            var R, A;
                            return i.jsxs("div", {
                                className: "flex gap-3 p-3 border border-border rounded-xl bg-card",
                                children: [i.jsx("div", {
                                    className: "w-16 h-20 rounded-lg overflow-hidden flex-shrink-0",
                                    children: i.jsx("img", {
                                        src: N.src,
                                        alt: N.label,
                                        className: "w-full h-full object-cover"
                                    })
                                }), i.jsxs("div", {
                                    className: "flex-1 flex flex-col justify-center gap-1",
                                    children: [i.jsxs("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: ["Modelo #", N.id]
                                    }), i.jsxs("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [(R = Vc[r[E]]) == null ? void 0 : R.emoji, " ", (A = Vc[r[E]]) == null ? void 0 : A.text]
                                    }), i.jsxs("span", {
                                        className: "text-sm font-bold text-green-500",
                                        children: ["+", B(N.reward)]
                                    })]
                                })]
                            }, N.id)
                        }
                        )
                    }), i.jsx("button", {
                        onClick: () => e("/confirmacao-taxa"),
                        className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl whitespace-normal",
                        children: "Levantar o meu dinheiro"
                    })]
                }) : i.jsxs(i.Fragment, {
                    children: [i.jsx("p", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground text-center mb-4",
                        children: j.label
                    }), i.jsxs("p", {
                        className: "text-center text-sm text-green-500 font-semibold mb-3",
                        children: ["+", B(j.reward), " por avaliares esta peça"]
                    }), i.jsx("div", {
                        className: `relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] transition-all duration-200 ${s ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                        children: i.jsx("img", {
                            src: j.src,
                            alt: `Look ${t + 1}`,
                            className: "w-full h-full object-cover"
                        })
                    }), i.jsx("div", {
                        className: "space-y-2",
                        children: Vc.map( (N, E) => i.jsxs("button", {
                            onClick: () => y(E),
                            className: `w-full flex items-center gap-3 px-4 py-3 border border-border bg-card hover:bg-secondary transition-all duration-200 text-left rounded-xl ${s ? "pointer-events-none opacity-50" : ""}`,
                            children: [i.jsx("span", {
                                className: "text-xl",
                                children: N.emoji
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: N.text
                            })]
                        }, E))
                    })]
                })]
            })
        }), !l && Object.keys(r).length > 0 && i.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-3 flex items-center justify-between",
                children: [i.jsxs("div", {
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "💰 Ganado hasta ahora"
                    }), i.jsxs("p", {
                        className: "text-lg font-bold text-green-500",
                        children: ["+", B(f)]
                    })]
                }), i.jsxs("div", {
                    className: "text-right",
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "Saldo total"
                    }), i.jsx("p", {
                        className: "text-lg font-bold text-foreground",
                        children: B(u)
                    })]
                })]
            })
        }), i.jsx(Bs, {
            open: g.open,
            onOpenChange: N => {
                N || S()
            }
            ,
            children: i.jsxs(Co, {
                className: "max-w-sm mx-auto rounded-2xl text-center p-5",
                children: [i.jsx("div", {
                    className: "w-28 h-36 rounded-xl overflow-hidden mx-auto mb-3",
                    children: i.jsx("img", {
                        src: j.src,
                        alt: `Look ${t + 1}`,
                        className: "w-full h-full object-cover"
                    })
                }), i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-1",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-3.5 h-3.5 text-green-500"
                        }), i.jsx("span", {
                            className: "text-base font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-[10px] text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsxs(ko, {
                    className: "items-center",
                    children: [i.jsxs(Po, {
                        className: "text-lg font-bold text-foreground",
                        children: ["+", B(g.reward), " adicionados 💰"]
                    }), i.jsx(Ro, {
                        className: "text-muted-foreground text-sm leading-relaxed mt-2",
                        children: "Obrigado pela tua opinião! O dinheiro foi adicionado ao teu saldo. Continua a avaliar para ganhares mais."
                    })]
                }), i.jsx("button", {
                    onClick: S,
                    className: "w-full mt-2 px-6 py-3 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl",
                    children: "Continuar a avaliar"
                })]
            })
        })]
    })
}
  , Ho = [{
    id: 1,
    src: Us,
    label: "Look 1 de 6",
    reward: 180.42
}, {
    id: 2,
    src: Vs,
    label: "Look 2 de 6",
    reward: 127.35
}, {
    id: 3,
    src: Hs,
    label: "Look 3 de 6",
    reward: 201.65
}, {
    id: 4,
    src: Ws,
    label: "Look 4 de 6",
    reward: 148.58
}, {
    id: 5,
    src: qs,
    label: "Look 5 de 6",
    reward: 116.74
}, {
    id: 6,
    src: Ys,
    label: "Look 6 de 6",
    reward: 212.26
}]
  , zp = 0
  , Hc = [{
    emoji: "😍",
    text: "Usaria sem hesitar"
}, {
    emoji: "😊",
    text: "Gostei, mas mudaria algo"
}, {
    emoji: "😐",
    text: "Está bem, nada de especial"
}, {
    emoji: "🤔",
    text: "Não é o meu estilo"
}, {
    emoji: "❌",
    text: "Não usaria"
}]
  , L2 = () => {
    const e = Eo()
      , [t,n] = m.useState(0)
      , [r,o] = m.useState({})
      , [s,a] = m.useState(!1)
      , [l,c] = m.useState(!1)
      , [u,d] = m.useState(zp)
      , [f,v] = m.useState(0)
      , [p,b] = m.useState( () => localStorage.getItem("selectedCurrency") || "EUR")
      , [g,w] = m.useState({
        open: !1,
        reward: 0
    })
      , [x] = m.useState( () => {
        const N = new Audio("/sounds/cash-register.mp3");
        return N.volume = .7,
        N.load(),
        N
    }
    );
    m.useEffect( () => {
        $e("ViewContent", {
            content_name: "Evaluacion"
        });
        const N = setTimeout( () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            }),
            document.documentElement.scrollTop = 0,
            document.body.scrollTop = 0
        }
        , 50);
        return Promise.resolve().then(() => {
            localStorage.setItem("selectedCurrency", "EUR");
            b("EUR")
        }
        ),
        () => {
            clearTimeout(N)
        }
    }
    , []);
    const h = () => {
        t < Ho.length - 1 ? (n(N => N + 1),
        a(!1)) : (c(!0),
        a(!1),
        $e("CompleteRegistration", {
            content_name: "Evaluation Complete"
        }))
    }
      , y = N => {
        if (s)
            return;
        o(R => ({
            ...R,
            [t]: N
        })),
        a(!0);
        const E = Ho[t].reward;
        d(R => R + E),
        v(R => R + E),
        x.currentTime = 0,
        x.play().catch( () => {}
        ),
        setTimeout( () => {
            w({
                open: !0,
                reward: E
            })
        }
        , 200)
    }
      , S = () => {
        w({
            open: !1,
            reward: 0
        }),
        h(),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }
    ;
    Gs.find(N => N.code === p);
    const j = Ho[t]
      , C = (t + (l ? 1 : 0)) / Ho.length * 100;
    return i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsxs("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: [i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsx("div", {
                    className: "w-16"
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                }), i.jsx("div", {
                    className: "w-16"
                })]
            }), i.jsx("div", {
                className: "h-1 bg-secondary",
                children: i.jsx("div", {
                    className: "h-full bg-foreground transition-all duration-500 ease-out",
                    style: {
                        width: `${C}%`
                    }
                })
            })]
        }), i.jsx("div", {
            className: "pt-20 pb-32 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-4 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), l ? i.jsxs("div", {
                    className: "pt-6 opacity-0 animate-fade-in",
                    children: [i.jsxs("div", {
                        className: "text-center mb-6",
                        children: [i.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "💰"
                        }), i.jsx("h2", {
                            className: "text-2xl font-bold text-foreground mb-2",
                            children: "Avaliação completa!"
                        }), i.jsx("p", {
                            className: "text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto",
                            children: "Ganhaste dinheiro por cada peça que avaliaste. A tua opinião ajuda a Shein a decidir o que produzir."
                        })]
                    }), i.jsxs("div", {
                        className: "border border-green-500/20 rounded-xl bg-green-500/5 p-5 text-center space-y-3 mb-6",
                        children: [i.jsx("p", {
                            className: "text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground",
                            children: "Resumo dos ganhos"
                        }), i.jsxs("div", {
                            className: "space-y-1",
                            children: [i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Saldo inicial"
                                }), i.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: B(zp)
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Ganho a avaliar"
                                }), i.jsxs("span", {
                                    className: "font-medium text-green-500",
                                    children: ["+", B(f)]
                                })]
                            }), i.jsx("div", {
                                className: "h-px bg-border my-2"
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [i.jsx("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: "Saldo total"
                                }), i.jsx("span", {
                                    className: "text-2xl font-bold text-green-500",
                                    children: B(u)
                                })]
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: Ho.map( (N, E) => {
                            var R, A;
                            return i.jsxs("div", {
                                className: "flex gap-3 p-3 border border-border rounded-xl bg-card",
                                children: [i.jsx("div", {
                                    className: "w-16 h-20 rounded-lg overflow-hidden flex-shrink-0",
                                    children: i.jsx("img", {
                                        src: N.src,
                                        alt: N.label,
                                        className: "w-full h-full object-cover"
                                    })
                                }), i.jsxs("div", {
                                    className: "flex-1 flex flex-col justify-center gap-1",
                                    children: [i.jsxs("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: ["Modelo #", N.id]
                                    }), i.jsxs("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [(R = Hc[r[E]]) == null ? void 0 : R.emoji, " ", (A = Hc[r[E]]) == null ? void 0 : A.text]
                                    }), i.jsxs("span", {
                                        className: "text-sm font-bold text-green-500",
                                        children: ["+", B(N.reward)]
                                    })]
                                })]
                            }, N.id)
                        }
                        )
                    }), i.jsx("button", {
                        onClick: () => e("/confirmacao-taxa"),
                        className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl whitespace-normal",
                        children: "Levantar o meu dinheiro"
                    })]
                }) : i.jsxs(i.Fragment, {
                    children: [i.jsx("p", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground text-center mb-4",
                        children: j.label
                    }), i.jsxs("p", {
                        className: "text-center text-sm text-green-500 font-semibold mb-3",
                        children: ["+", B(j.reward), " por avaliares esta peça"]
                    }), i.jsx("div", {
                        className: `relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] transition-all duration-200 ${s ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                        children: i.jsx("img", {
                            src: j.src,
                            alt: `Look ${t + 1}`,
                            className: "w-full h-full object-cover"
                        })
                    }), i.jsx("div", {
                        className: "space-y-2",
                        children: Hc.map( (N, E) => i.jsxs("button", {
                            onClick: () => y(E),
                            className: `w-full flex items-center gap-3 px-4 py-3 border border-border bg-card hover:bg-secondary transition-all duration-200 text-left rounded-xl ${s ? "pointer-events-none opacity-50" : ""}`,
                            children: [i.jsx("span", {
                                className: "text-xl",
                                children: N.emoji
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: N.text
                            })]
                        }, E))
                    })]
                })]
            })
        }), !l && Object.keys(r).length > 0 && i.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-3 flex items-center justify-between",
                children: [i.jsxs("div", {
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "💰 Ganado hasta ahora"
                    }), i.jsxs("p", {
                        className: "text-lg font-bold text-green-500",
                        children: ["+", B(f)]
                    })]
                }), i.jsxs("div", {
                    className: "text-right",
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "Saldo total"
                    }), i.jsx("p", {
                        className: "text-lg font-bold text-foreground",
                        children: B(u)
                    })]
                })]
            })
        }), i.jsx(Bs, {
            open: g.open,
            onOpenChange: N => {
                N || S()
            }
            ,
            children: i.jsxs(Co, {
                className: "max-w-sm mx-auto rounded-2xl text-center p-5",
                children: [i.jsx("div", {
                    className: "w-28 h-36 rounded-xl overflow-hidden mx-auto mb-3",
                    children: i.jsx("img", {
                        src: j.src,
                        alt: `Look ${t + 1}`,
                        className: "w-full h-full object-cover"
                    })
                }), i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-1",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-3.5 h-3.5 text-green-500"
                        }), i.jsx("span", {
                            className: "text-base font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-[10px] text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsxs(ko, {
                    className: "items-center",
                    children: [i.jsxs(Po, {
                        className: "text-lg font-bold text-foreground",
                        children: ["+", B(g.reward), " adicionados 💰"]
                    }), i.jsx(Ro, {
                        className: "text-muted-foreground text-sm leading-relaxed mt-2",
                        children: "Obrigado pela tua opinião! O dinheiro foi adicionado ao teu saldo. Continua a avaliar para ganhares mais."
                    })]
                }), i.jsx("button", {
                    onClick: S,
                    className: "w-full mt-2 px-6 py-3 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl",
                    children: "Continuar a avaliar"
                })]
            })
        })]
    })
}
  , Wo = [{
    id: 1,
    src: Us,
    label: "Look 1 de 6",
    reward: 180.42
}, {
    id: 2,
    src: Vs,
    label: "Look 2 de 6",
    reward: 127.35
}, {
    id: 3,
    src: Hs,
    label: "Look 3 de 6",
    reward: 201.65
}, {
    id: 4,
    src: Ws,
    label: "Look 4 de 6",
    reward: 148.58
}, {
    id: 5,
    src: qs,
    label: "Look 5 de 6",
    reward: 116.74
}, {
    id: 6,
    src: Ys,
    label: "Look 6 de 6",
    reward: 212.26
}]
  , Ip = 0
  , Wc = [{
    emoji: "😍",
    text: "Usaria sem hesitar"
}, {
    emoji: "😊",
    text: "Gostei, mas mudaria algo"
}, {
    emoji: "😐",
    text: "Está bem, nada de especial"
}, {
    emoji: "🤔",
    text: "Não é o meu estilo"
}, {
    emoji: "❌",
    text: "Não usaria"
}]
  , D2 = () => {
    const e = Eo()
      , [t,n] = m.useState(0)
      , [r,o] = m.useState({})
      , [s,a] = m.useState(!1)
      , [l,c] = m.useState(!1)
      , [u,d] = m.useState(Ip)
      , [f,v] = m.useState(0)
      , [p,b] = m.useState( () => localStorage.getItem("selectedCurrency") || "EUR")
      , [g,w] = m.useState({
        open: !1,
        reward: 0
    })
      , [x] = m.useState( () => {
        const N = new Audio("/sounds/cash-register.mp3");
        return N.volume = .7,
        N.load(),
        N
    }
    );
    m.useEffect( () => {
        $e("ViewContent", {
            content_name: "Evaluacion"
        });
        const N = setTimeout( () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            }),
            document.documentElement.scrollTop = 0,
            document.body.scrollTop = 0
        }
        , 50);
        return Promise.resolve().then(() => {
            localStorage.setItem("selectedCurrency", "EUR");
            b("EUR")
        }
        ),
        () => {
            clearTimeout(N)
        }
    }
    , []);
    const h = () => {
        t < Wo.length - 1 ? (n(N => N + 1),
        a(!1)) : (c(!0),
        a(!1),
        $e("CompleteRegistration", {
            content_name: "Evaluation Complete"
        }))
    }
      , y = N => {
        if (s)
            return;
        o(R => ({
            ...R,
            [t]: N
        })),
        a(!0);
        const E = Wo[t].reward;
        d(R => R + E),
        v(R => R + E),
        x.currentTime = 0,
        x.play().catch( () => {}
        ),
        setTimeout( () => {
            w({
                open: !0,
                reward: E
            })
        }
        , 200)
    }
      , S = () => {
        w({
            open: !1,
            reward: 0
        }),
        h(),
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }
    ;
    Gs.find(N => N.code === p);
    const j = Wo[t]
      , C = (t + (l ? 1 : 0)) / Wo.length * 100;
    return i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsxs("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: [i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsx("div", {
                    className: "w-16"
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                }), i.jsx("div", {
                    className: "w-16"
                })]
            }), i.jsx("div", {
                className: "h-1 bg-secondary",
                children: i.jsx("div", {
                    className: "h-full bg-foreground transition-all duration-500 ease-out",
                    style: {
                        width: `${C}%`
                    }
                })
            })]
        }), i.jsx("div", {
            className: "pt-20 pb-32 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-4 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), l ? i.jsxs("div", {
                    className: "pt-6 opacity-0 animate-fade-in",
                    children: [i.jsxs("div", {
                        className: "text-center mb-6",
                        children: [i.jsx("div", {
                            className: "text-5xl mb-4",
                            children: "💰"
                        }), i.jsx("h2", {
                            className: "text-2xl font-bold text-foreground mb-2",
                            children: "Avaliação completa!"
                        }), i.jsx("p", {
                            className: "text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto",
                            children: "Ganhaste dinheiro por cada peça que avaliaste. A tua opinião ajuda a Shein a decidir o que produzir."
                        })]
                    }), i.jsxs("div", {
                        className: "border border-green-500/20 rounded-xl bg-green-500/5 p-5 text-center space-y-3 mb-6",
                        children: [i.jsx("p", {
                            className: "text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground",
                            children: "Resumo dos ganhos"
                        }), i.jsxs("div", {
                            className: "space-y-1",
                            children: [i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Saldo inicial"
                                }), i.jsx("span", {
                                    className: "font-medium text-foreground",
                                    children: B(Ip)
                                })]
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [i.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Ganho a avaliar"
                                }), i.jsxs("span", {
                                    className: "font-medium text-green-500",
                                    children: ["+", B(f)]
                                })]
                            }), i.jsx("div", {
                                className: "h-px bg-border my-2"
                            }), i.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [i.jsx("span", {
                                    className: "text-sm font-semibold text-foreground",
                                    children: "Saldo total"
                                }), i.jsx("span", {
                                    className: "text-2xl font-bold text-green-500",
                                    children: B(u)
                                })]
                            })]
                        })]
                    }), i.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: Wo.map( (N, E) => {
                            var R, A;
                            return i.jsxs("div", {
                                className: "flex gap-3 p-3 border border-border rounded-xl bg-card",
                                children: [i.jsx("div", {
                                    className: "w-16 h-20 rounded-lg overflow-hidden flex-shrink-0",
                                    children: i.jsx("img", {
                                        src: N.src,
                                        alt: N.label,
                                        className: "w-full h-full object-cover"
                                    })
                                }), i.jsxs("div", {
                                    className: "flex-1 flex flex-col justify-center gap-1",
                                    children: [i.jsxs("p", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: ["Modelo #", N.id]
                                    }), i.jsxs("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: [(R = Wc[r[E]]) == null ? void 0 : R.emoji, " ", (A = Wc[r[E]]) == null ? void 0 : A.text]
                                    }), i.jsxs("span", {
                                        className: "text-sm font-bold text-green-500",
                                        children: ["+", B(N.reward)]
                                    })]
                                })]
                            }, N.id)
                        }
                        )
                    }), i.jsx("button", {
                        onClick: () => e("/confirmacao-taxa"),
                        className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl whitespace-normal",
                        children: "Levantar o meu dinheiro"
                    })]
                }) : i.jsxs(i.Fragment, {
                    children: [i.jsx("p", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground text-center mb-4",
                        children: j.label
                    }), i.jsxs("p", {
                        className: "text-center text-sm text-green-500 font-semibold mb-3",
                        children: ["+", B(j.reward), " por avaliares esta peça"]
                    }), i.jsx("div", {
                        className: `relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] transition-all duration-200 ${s ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                        children: i.jsx("img", {
                            src: j.src,
                            alt: `Look ${t + 1}`,
                            className: "w-full h-full object-cover"
                        })
                    }), i.jsx("div", {
                        className: "space-y-2",
                        children: Wc.map( (N, E) => i.jsxs("button", {
                            onClick: () => y(E),
                            className: `w-full flex items-center gap-3 px-4 py-3 border border-border bg-card hover:bg-secondary transition-all duration-200 text-left rounded-xl ${s ? "pointer-events-none opacity-50" : ""}`,
                            children: [i.jsx("span", {
                                className: "text-xl",
                                children: N.emoji
                            }), i.jsx("span", {
                                className: "text-sm font-medium text-foreground",
                                children: N.text
                            })]
                        }, E))
                    })]
                })]
            })
        }), !l && Object.keys(r).length > 0 && i.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-t border-border",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto px-4 py-3 flex items-center justify-between",
                children: [i.jsxs("div", {
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "💰 Ganado hasta ahora"
                    }), i.jsxs("p", {
                        className: "text-lg font-bold text-green-500",
                        children: ["+", B(f)]
                    })]
                }), i.jsxs("div", {
                    className: "text-right",
                    children: [i.jsx("p", {
                        className: "text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground",
                        children: "Saldo total"
                    }), i.jsx("p", {
                        className: "text-lg font-bold text-foreground",
                        children: B(u)
                    })]
                })]
            })
        }), i.jsx(Bs, {
            open: g.open,
            onOpenChange: N => {
                N || S()
            }
            ,
            children: i.jsxs(Co, {
                className: "max-w-sm mx-auto rounded-2xl text-center p-5",
                children: [i.jsx("div", {
                    className: "w-28 h-36 rounded-xl overflow-hidden mx-auto mb-3",
                    children: i.jsx("img", {
                        src: j.src,
                        alt: `Look ${t + 1}`,
                        className: "w-full h-full object-cover"
                    })
                }), i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-1",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-3.5 h-3.5 text-green-500"
                        }), i.jsx("span", {
                            className: "text-base font-bold text-green-500",
                            children: B(u)
                        }), i.jsx("span", {
                            className: "text-[10px] text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsxs(ko, {
                    className: "items-center",
                    children: [i.jsxs(Po, {
                        className: "text-lg font-bold text-foreground",
                        children: ["+", B(g.reward), " adicionados 💰"]
                    }), i.jsx(Ro, {
                        className: "text-muted-foreground text-sm leading-relaxed mt-2",
                        children: "Obrigado pela tua opinião! O dinheiro foi adicionado ao teu saldo. Continua a avaliar para ganhares mais."
                    })]
                }), i.jsx("button", {
                    onClick: S,
                    className: "w-full mt-2 px-6 py-3 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl",
                    children: "Continuar a avaliar"
                })]
            })
        })]
    })
}
  , Ji = "/assets/avatar1-DrXB2Yjl.jpg"
  , el = "/assets/avatar2-B8Mw-rVC.jpg"
  , tl = "/assets/avatar3-CjkqJdOo.jpg"
  , nl = "/assets/avatar4-bGnkpURv.jpg"
  , rl = "/assets/avatar5-DocEJaBv.jpg"
  , ol = "/assets/avatar6-BemTN2hx.jpg"
  , sl = "/assets/avatar8-CkXX3uGh.jpg"
  , al = "/assets/avatar9-lQA5GZ9R.jpg"
  , il = "/assets/avatar10-BY8StMbL.jpg"
  , ll = "/assets/avatar11-DsZ7F86T.jpg"
  , cl = "/assets/avatar12-B0YPwyVW.jpg"
  , ul = "/assets/avatar13-BrORbI_F.jpg"
  , dl = "/assets/avatar14-5RdoRBSB.jpg"
  , qn = "/assets/reply1-BJXhCfZl.jpg"
  , Yn = "/assets/reply2-CQ-wE7YH.jpg"
  , Gn = "/assets/reply3-BpFkPhxo.jpg"
  , fl = "/assets/reply4-D25dHnmL.jpg"
  , ml = "/assets/reply5-DYXBPTvR.jpg"
  , pl = "/assets/reply6-B6mofBra.jpg"
  , hl = "/assets/reply7-0ZNTaJE5.jpg"
  , gl = "/assets/vsl1-CqixbaaL.jpg"
  , vl = "/assets/vsl2-CWqb-dkA.jpg"
  , xl = "/assets/vsl3-DORdjZtc.jpg"
  , yl = "/assets/vsl4-DAzVPvUY.jpg"
  , wl = "/assets/vsl5-D0AbFZhg.webp"
  , bl = "/assets/vsl6-D_YMUUT_.jpeg"
  , Nl = "/assets/vsl7-D2CGavam.jpeg"
  , Sl = "/assets/vsl8-D-o3GuE5.png"
  , jl = "/assets/vsl9-D5kIEL6e.png"
  , El = "/assets/vsl10-DVBRLwzZ.png"
  , Cl = "/assets/vsl11-jEjWb-4u.png"
  , kl = "/assets/vsl12-CfDhjkF4.png"
  , Pl = "/assets/vsl13-CRxIyz5x.png"
  , Rl = "/assets/vsl14-BqiKkLH8.png"
  , Tl = "/assets/vsl15-DNRFXXt0.png"
  , _l = "/assets/vsl16-CoK99JCd.png"
  , Al = "/assets/vsl17-DscDSutK.png"
  , Ll = "/assets/vsl18-DAPHETSA.png"
  , Dl = "/assets/vsl19-Ck8uf51n.png"
  , Ml = "/assets/vsl20-BuAdGtJs.png"
  , Ol = "/assets/vsl21-CxkgMSFl.png"
  , zl = "/assets/vsl22-Cw1re0DV.png"
  , Il = "/assets/vsl23-Db-SFbjs.png"
  , $l = "/assets/vsl24-DE-Ipx9t.png"
  , Fl = "/assets/vsl25-DtLAR1DM.png"
  , Bl = "/assets/vsl26-g4WsA0U5.png"
  , Ul = "/assets/vsl27-K303OfUd.png"
  , Vl = "/assets/vsl28-sSuKSDct.png"
  , Hl = "/assets/vsl29--Q0MLBO6.png"
  , Wl = "/assets/vsl30-CYcONBPn.png"
  , ql = "/assets/vsl31-DeOJfRnr.png"
  , Yl = "/assets/vsl32-Bf7RR5xY.png"
  , Gl = "/assets/vsl33-BKnUdqqv.png"
  , $p = [Ji, el, tl, nl, rl, ol, sl, al, il, ll, cl, ul, dl, qn, Yn, Gn]
  , Fp = [qn, Yn, Gn, fl, ml, pl, hl]
  , qc = [gl, vl, xl, yl, wl, bl, Nl]
  , Yc = [Sl, jl, El, Cl, kl, Pl, Rl, Tl, _l, Al, Ll, Dl, Ml, Ol, zl, Il, $l, Fl, Bl, Ul, Vl, Hl, Wl, ql, Yl, Gl]
  , M2 = [{
    name: "Paula Rodríguez",
    username: "pau_rodri.gz",
    message: "Isto é real? Alguém já experimentou? 🤔",
    time: "há 20min",
    replies: [{
        name: "Sofía López",
        username: "sofi.lpz_",
        message: "@pau_rodri.gz amiga eu pensei o mesmo e olha, em 2 semanas já juntei 821€. A Shein faz isto porque perdeu 800 milhões em roupa não vendida no ano passado, precisam de opiniões reais para não continuar a perder 💕",
        time: "há 15min"
    }, {
        name: "Andrea Fernández",
        username: "and.fernandez",
        message: "@pau_rodri.gz é 100% real, no meu primeiro mês fiz mais de 1.400€. Vê o vídeo que explica por que pagam, faz sentido quando percebes",
        time: "há 8min"
    }]
}, {
    name: "Natalia Pérez",
    username: "nati.perez_",
    message: "Isto funciona?? Vi o anúncio e não sei se entro 😬",
    time: "há 1h",
    replies: [{
        name: "Camila Torres",
        username: "cami_torres.99",
        message: "@nati.perez_ funciona a sério. Eu numa semana fiz 530€. A Shein paga porque precisa que pessoas reais digam que roupa gostam antes de fabricar mais. Assim evitam perder dinheiro em stock",
        time: "há 50min"
    }, {
        name: "Laura Sánchez",
        username: "lau.sanchez__",
        message: "@nati.perez_ eu entrei há 1 mês com dúvidas como tu e já passei os 2.100€. É legítimo, vê o vídeo e vais perceber",
        time: "há 40min"
    }, {
        name: "Valeria Morales",
        username: "vale_morales.m",
        message: "@nati.perez_ entra tranquila, não pagas nada. Eu em 2 semanas juntei 950€ só a avaliar pelo telemóvel",
        time: "há 30min"
    }]
}, {
    name: "Daniela Romero",
    username: "dani.rom_",
    message: "Como funciona o levantamento? Dá para passar para conta bancária? 👀",
    time: "há 3h",
    replies: [{
        name: "Carolina Ruiz",
        username: "caro.ruiz22",
        message: "@dani.rom_ sim, passo direto para a minha conta. Também podes usar MB Way ou transferência bancária",
        time: "há 2h"
    }, {
        name: "Jessica Navarro",
        username: "jessnav.ar",
        message: "@dani.rom_ vê o vídeo em cima que explica todo o processo. Eu já levantei várias vezes sem problema 🙌",
        time: "há 1h"
    }]
}, {
    name: "Lucía Martínez",
    username: "lu.martinezz_",
    message: "Pensei que era mentira mas já levantei 180€… a minha mãe não acreditou até lhe mostrar a transferência 😅",
    time: "há 35min"
}, {
    name: "María González",
    username: "mari.gonza_",
    message: "O melhor é que podes fazer a qualquer momento, eu avalio antes de dormir jaja",
    time: "há 1h"
}, {
    name: "Sofía López",
    username: "sofi.lpz_",
    message: "Estou feliz 💕 ganhei 250€ numa semana só a dar a minha opinião pelo telemóvel.",
    time: "há 3h"
}, {
    name: "Andrea Fernández",
    username: "and.fernandez",
    message: "Adoro que não tens de vender nada nem publicar nas redes. Só dás a tua opinião e pronto.",
    time: "há 5h"
}, {
    name: "Camila Torres",
    username: "cami_torres.99",
    message: "Eu faço enquanto espero o autocarro ou na fila do super 😂 tempo morto = dinheiro",
    time: "há 5h"
}, {
    name: "Laura Sánchez",
    username: "lau.sanchez__",
    message: 'A minha mãe disse "isso não é normal" quando viu quanto ganhei 😂 depois pediu-me o link.',
    time: "há 8h"
}, {
    name: "Valeria Morales",
    username: "vale_morales.m",
    message: "Há peças que não gosto nada mas mesmo assim ganhas por avaliar. Já tenho 987€.",
    time: "há 10h"
}, {
    name: "Carolina Ruiz",
    username: "caro.ruiz22",
    message: "O que mais me surpreendeu foi a rapidez com que se acumula. Numa tarde já tinha bastante.",
    time: "há 12h"
}, {
    name: "Jessica Navarro",
    username: "jessnav.ar",
    message: "No início tive dúvidas, mas depois do primeiro levantamento já não. Fácil mais de 400€ no total.",
    time: "há 15h"
}, {
    name: "Mariana Ortega",
    username: "mari.ortega_",
    message: "Contei à minha irmã e agora as duas avaliamos juntas aos fins de semana 🤣",
    time: "há 18h"
}, {
    name: "Ana Belén Cruz",
    username: "anabelen.cruz",
    message: "É a primeira vez que ganho dinheiro pelo telemóvel sem ter de fazer vídeos nem nada de estranho.",
    time: "há 20h"
}]
  , Bp = ({src: e, alt: t}) => {
    const [n,r] = m.useState(!1);
    return i.jsxs("div", {
        className: "flex-shrink-0 rounded-2xl overflow-hidden bg-muted",
        style: {
            width: 160,
            height: 192
        },
        children: [!n && i.jsx("div", {
            className: "w-full h-full animate-pulse bg-muted"
        }), i.jsx("img", {
            src: e,
            alt: t,
            className: `w-full h-full object-cover transition-opacity duration-300 ${n ? "opacity-100" : "opacity-0 absolute"}`,
            loading: "eager",
            decoding: "async",
            onLoad: () => r(!0)
        })]
    })
}
  , Up = e => e.split(/(@\S+)/g).map( (n, r) => n.startsWith("@") ? i.jsx("span", {
    className: "text-blue-500 font-semibold",
    children: n
}, r) : i.jsx("span", {
    children: n
}, r))
  , O2 = () => {
    const [e,t] = m.useState(532);
    return m.useEffect( () => {
        const n = setInterval( () => {
            t(r => {
                const o = Math.random() < .6 ? Math.floor(Math.random() * 3) + 1 : -Math.floor(Math.random() * 2);
                return Math.max(480, r + o)
            }
            )
        }
        , 2500 + Math.random() * 2e3);
        return () => clearInterval(n)
    }
    , []),
    i.jsxs("div", {
        className: "flex items-center justify-center gap-2 mt-4 opacity-0 animate-fade-in",
        style: {
            animationDelay: "0.3s"
        },
        children: [i.jsx("div", {
            className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
        }), i.jsxs("span", {
            className: "text-xs text-muted-foreground",
            children: [i.jsx("span", {
                className: "font-bold text-foreground",
                children: e.toLocaleString()
            }), " mujeres assistiendo ahora"]
        })]
    })
}
  , z2 = () => {
    const [e,t] = m.useState("");
    m.useEffect( () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        $e("ViewContent", {
            content_name: "VSL Page"
        }),
        (async () => {
            try {
                const s = await (await fetch("https://ipinfo.io/json?token=")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://geolocation-db.com/json/")).json();
                if (s != null && s.city && s.city !== "Not found") {
                    t(s.city);
                    return
                }
            } catch {}
        }
        )()
    }
    , []),
    m.useEffect( () => {
        if (!document.getElementById("vturb-script")) {
            const o = document.createElement("script");
            o.id = "vturb-script",
            o.src = "https://scripts.converteai.net/23233331-248e-42db-8847-e4c74ff9f15b/players/6994faf6d0c71b2ef9616b61/v4/player.js",
            o.async = !0,
            document.head.appendChild(o)
        }
    }
    , []);
    const n = [...M2];
    return e && n.splice(2, 0, {
        name: "Florencia Aguirre",
        username: "flor.aguirre_",
        message: `Hay alguien de ${e} que ya lo probó? Quiero saber si acá funciona también 🙏`,
        time: "há 4h",
        replies: [{
            name: "Valentina Díaz",
            username: "val.diaz_",
            message: `@flor.aguirre_ soy de ${e} y ya cobré 2 veces! Funciona perfecto acá, tranquila 💪`,
            time: "há 3h"
        }, {
            name: "Milagros Herrera",
            username: "mili.herrera_",
            message: `@flor.aguirre_ yo también soy de ${e}, ya llevo $310 retirados. Shein paga sin importar de dónde seas, es todo online`,
            time: "há 2h"
        }, {
            name: "Rocío Medina",
            username: "ro.medina__",
            message: "@flor.aguirre_ entra sem medo, eu também sou daqui e já levantei 200€. Vê o vídeo que explica tudo",
            time: "há 1h"
        }]
    }),
    i.jsxs("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsx("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-center",
                children: i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })
            })
        }), i.jsx("div", {
            className: "pt-20 pb-10 px-6 flex-1",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(987)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsx("div", {
                    className: "text-center mb-8 opacity-0 animate-fade-in",
                    children: i.jsxs("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3",
                        children: ["Vê o vídeo de 2 minutos para liberar o teu saldo e começar a ", i.jsx("span", {
                            className: "bg-foreground text-background px-1.5 py-0.5 rounded inline-block whitespace-nowrap",
                            children: "levantar dinheiro"
                        })]
                    })
                }), i.jsx("div", {
                    className: "w-full opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    dangerouslySetInnerHTML: {
                        __html: '<vturb-smartplayer id="vid-6994faf6d0c71b2ef9616b61" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
                    }
                }), i.jsx(O2, {}), i.jsxs("div", {
                    className: "mt-12 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.6s"
                    },
                    children: [i.jsx("h2", {
                        className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-3 leading-tight",
                        children: "Milhares de pessoas já estão a ganhar dinheiro a avaliar roupa"
                    }), i.jsx("p", {
                        className: "text-sm sm:text-base text-muted-foreground text-center mb-6 leading-relaxed",
                        children: "Só precisas do teu telemóvel e uns minutos por dia"
                    }), i.jsxs("div", {
                        className: "overflow-hidden -mx-6 space-y-3",
                        children: [i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                willChange: "transform"
                            },
                            children: [...qc, ...qc].map( (r, o) => i.jsx(Bp, {
                                src: r,
                                alt: `Pacote SHEIN ${o % qc.length + 1}`
                            }, `top-${o}`))
                        }), i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                animationDuration: "60s",
                                willChange: "transform"
                            },
                            children: [...Yc, ...Yc].map( (r, o) => i.jsx(Bp, {
                                src: r,
                                alt: `Participante SHEIN ${o % Yc.length + 1}`
                            }, `bottom-${o}`))
                        })]
                    })]
                }), i.jsx("div", {
                    className: "hidden",
                    children: i.jsxs("div", {
                        className: "mt-12",
                        children: [i.jsx("h2", {
                            className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-6 leading-tight",
                            children: "Lo que dicen las evaluadoras"
                        }), i.jsx("div", {
                            className: "space-y-4",
                            children: n.map( (r, o) => {
                                const s = $p[o % $p.length];
                                return i.jsxs("div", {
                                    className: "space-y-2",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [i.jsx("img", {
                                            src: s,
                                            alt: r.name,
                                            className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
                                        }), i.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [i.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [i.jsx("span", {
                                                    className: "text-sm font-semibold text-foreground",
                                                    children: r.name
                                                }), i.jsxs("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: ["@", r.username]
                                                })]
                                            }), i.jsx("p", {
                                                className: "text-sm text-foreground/80 mt-0.5",
                                                children: Up(r.message)
                                            }), i.jsx("span", {
                                                className: "text-[11px] text-muted-foreground mt-1 block",
                                                children: r.time
                                            })]
                                        })]
                                    }), r.replies && r.replies.map( (a, l) => {
                                        const c = Fp[l % Fp.length];
                                        return i.jsxs("div", {
                                            className: "flex items-start gap-3 ml-11",
                                            children: [i.jsx("img", {
                                                src: c,
                                                alt: a.name,
                                                className: "w-7 h-7 rounded-full object-cover flex-shrink-0"
                                            }), i.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [i.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [i.jsx("span", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: a.name
                                                    }), i.jsxs("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: ["@", a.username]
                                                    })]
                                                }), i.jsx("p", {
                                                    className: "text-sm text-foreground/80 mt-0.5",
                                                    children: Up(a.message)
                                                }), i.jsx("span", {
                                                    className: "text-[11px] text-muted-foreground mt-1 block",
                                                    children: a.time
                                                })]
                                            })]
                                        }, l)
                                    }
                                    )]
                                }, o)
                            }
                            )
                        })]
                    })
                })]
            })
        }), i.jsx("footer", {
            className: "border-t border-border bg-background py-8 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto text-center space-y-4",
                children: [i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-4 mx-auto opacity-60"
                }), i.jsxs("div", {
                    className: "flex items-center justify-center gap-4 text-xs text-muted-foreground",
                    children: [i.jsx("span", {
                        children: "Política de Privacidad"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Términos de Uso"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Contacto"
                    })]
                }), i.jsxs("p", {
                    className: "text-[11px] text-muted-foreground/40",
                    children: ["© ", new Date().getFullYear(), " Programa de Avaliação SHEIN Portugal. Todos os direitos reservados."]
                })]
            })
        })]
    })
}
  , Vp = [Ji, el, tl, nl, rl, ol, sl, al, il, ll, cl, ul, dl, qn, Yn, Gn]
  , Hp = [qn, Yn, Gn, fl, ml, pl, hl]
  , Gc = [gl, vl, xl, yl, wl, bl, Nl]
  , Qc = [Sl, jl, El, Cl, kl, Pl, Rl, Tl, _l, Al, Ll, Dl, Ml, Ol, zl, Il, $l, Fl, Bl, Ul, Vl, Hl, Wl, ql, Yl, Gl]
  , I2 = [{
    name: "Paula Rodríguez",
    username: "pau_rodri.gz",
    message: "Isto é real? Alguém já experimentou? 🤔",
    time: "há 20min",
    replies: [{
        name: "Sofía López",
        username: "sofi.lpz_",
        message: "@pau_rodri.gz amiga eu pensei o mesmo e olha, em 2 semanas já juntei 821€. A Shein faz isto porque perdeu 800 milhões em roupa não vendida no ano passado, precisam de opiniões reais para não continuar a perder 💕",
        time: "há 15min"
    }, {
        name: "Andrea Fernández",
        username: "and.fernandez",
        message: "@pau_rodri.gz é 100% real, no meu primeiro mês fiz mais de 1.400€. Vê o vídeo que explica por que pagam, faz sentido quando percebes",
        time: "há 8min"
    }]
}, {
    name: "Natalia Pérez",
    username: "nati.perez_",
    message: "Isto funciona?? Vi o anúncio e não sei se entro 😬",
    time: "há 1h",
    replies: [{
        name: "Camila Torres",
        username: "cami_torres.99",
        message: "@nati.perez_ funciona a sério. Eu numa semana fiz 530€. A Shein paga porque precisa que pessoas reais digam que roupa gostam antes de fabricar mais. Assim evitam perder dinheiro em stock",
        time: "há 50min"
    }, {
        name: "Laura Sánchez",
        username: "lau.sanchez__",
        message: "@nati.perez_ eu entrei há 1 mês com dúvidas como tu e já passei os 2.100€. É legítimo, vê o vídeo e vais perceber",
        time: "há 40min"
    }, {
        name: "Valeria Morales",
        username: "vale_morales.m",
        message: "@nati.perez_ entra tranquila, não pagas nada. Eu em 2 semanas juntei 950€ só a avaliar pelo telemóvel",
        time: "há 30min"
    }]
}, {
    name: "Daniela Romero",
    username: "dani.rom_",
    message: "Como funciona o levantamento? Dá para passar para conta bancária? 👀",
    time: "há 3h",
    replies: [{
        name: "Carolina Ruiz",
        username: "caro.ruiz22",
        message: "@dani.rom_ sim, passo direto para a minha conta. Também podes usar MB Way ou transferência bancária",
        time: "há 2h"
    }, {
        name: "Jessica Navarro",
        username: "jessnav.ar",
        message: "@dani.rom_ vê o vídeo em cima que explica todo o processo. Eu já levantei várias vezes sem problema 🙌",
        time: "há 1h"
    }]
}, {
    name: "Lucía Martínez",
    username: "lu.martinezz_",
    message: "Pensei que era mentira mas já levantei 180€… a minha mãe não acreditou até lhe mostrar a transferência 😅",
    time: "há 35min"
}, {
    name: "María González",
    username: "mari.gonza_",
    message: "O melhor é que podes fazer a qualquer momento, eu avalio antes de dormir jaja",
    time: "há 1h"
}, {
    name: "Sofía López",
    username: "sofi.lpz_",
    message: "Estou feliz 💕 ganhei 250€ numa semana só a dar a minha opinião pelo telemóvel.",
    time: "há 3h"
}, {
    name: "Andrea Fernández",
    username: "and.fernandez",
    message: "Adoro que não tens de vender nada nem publicar nas redes. Só dás a tua opinião e pronto.",
    time: "há 5h"
}, {
    name: "Camila Torres",
    username: "cami_torres.99",
    message: "Eu faço enquanto espero o autocarro ou na fila do super 😂 tempo morto = dinheiro",
    time: "há 5h"
}, {
    name: "Laura Sánchez",
    username: "lau.sanchez__",
    message: 'A minha mãe disse "isso não é normal" quando viu quanto ganhei 😂 depois pediu-me o link.',
    time: "há 8h"
}, {
    name: "Valeria Morales",
    username: "vale_morales.m",
    message: "Há peças que não gosto nada mas mesmo assim ganhas por avaliar. Já tenho 987€.",
    time: "há 10h"
}, {
    name: "Carolina Ruiz",
    username: "caro.ruiz22",
    message: "O que mais me surpreendeu foi a rapidez com que se acumula. Numa tarde já tinha bastante.",
    time: "há 12h"
}, {
    name: "Jessica Navarro",
    username: "jessnav.ar",
    message: "No início tive dúvidas, mas depois do primeiro levantamento já não. Fácil mais de 400€ no total.",
    time: "há 15h"
}, {
    name: "Mariana Ortega",
    username: "mari.ortega_",
    message: "Contei à minha irmã e agora as duas avaliamos juntas aos fins de semana 🤣",
    time: "há 18h"
}, {
    name: "Ana Belén Cruz",
    username: "anabelen.cruz",
    message: "É a primeira vez que ganho dinheiro pelo telemóvel sem ter de fazer vídeos nem nada de estranho.",
    time: "há 20h"
}]
  , Wp = ({src: e, alt: t}) => {
    const [n,r] = m.useState(!1);
    return i.jsxs("div", {
        className: "flex-shrink-0 rounded-2xl overflow-hidden bg-muted",
        style: {
            width: 160,
            height: 192
        },
        children: [!n && i.jsx("div", {
            className: "w-full h-full animate-pulse bg-muted"
        }), i.jsx("img", {
            src: e,
            alt: t,
            className: `w-full h-full object-cover transition-opacity duration-300 ${n ? "opacity-100" : "opacity-0 absolute"}`,
            loading: "eager",
            decoding: "async",
            onLoad: () => r(!0)
        })]
    })
}
  , qp = e => e.split(/(@\S+)/g).map( (n, r) => n.startsWith("@") ? i.jsx("span", {
    className: "text-blue-500 font-semibold",
    children: n
}, r) : i.jsx("span", {
    children: n
}, r))
  , $2 = () => {
    const [e,t] = m.useState(532);
    return m.useEffect( () => {
        const n = setInterval( () => {
            t(r => {
                const o = Math.random() < .6 ? Math.floor(Math.random() * 3) + 1 : -Math.floor(Math.random() * 2);
                return Math.max(480, r + o)
            }
            )
        }
        , 2500 + Math.random() * 2e3);
        return () => clearInterval(n)
    }
    , []),
    i.jsxs("div", {
        className: "flex items-center justify-center gap-2 mt-4 opacity-0 animate-fade-in",
        style: {
            animationDelay: "0.3s"
        },
        children: [i.jsx("div", {
            className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
        }), i.jsxs("span", {
            className: "text-xs text-muted-foreground",
            children: [i.jsx("span", {
                className: "font-bold text-foreground",
                children: e.toLocaleString()
            }), " mujeres assistiendo ahora"]
        })]
    })
}
  , F2 = () => {
    const [e,t] = m.useState("");
    m.useEffect( () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        $e("ViewContent", {
            content_name: "VSL Page"
        }),
        (async () => {
            try {
                const s = await (await fetch("https://ipinfo.io/json?token=")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://geolocation-db.com/json/")).json();
                if (s != null && s.city && s.city !== "Not found") {
                    t(s.city);
                    return
                }
            } catch {}
        }
        )()
    }
    , []),
    m.useEffect( () => {
        if (!document.getElementById("vturb-script")) {
            const o = document.createElement("script");
            o.id = "vturb-script",
            o.src = "https://scripts.converteai.net/23233331-248e-42db-8847-e4c74ff9f15b/players/6996090b26697ffcd1f58037/v4/player.js",
            o.async = !0,
            document.head.appendChild(o)
        }
    }
    , []);
    const n = [...I2];
    return e && n.splice(2, 0, {
        name: "Florencia Aguirre",
        username: "flor.aguirre_",
        message: `Hay alguien de ${e} que ya lo probó? Quiero saber si acá funciona también 🙏`,
        time: "há 4h",
        replies: [{
            name: "Valentina Díaz",
            username: "val.diaz_",
            message: `@flor.aguirre_ soy de ${e} y ya cobré 2 veces! Funciona perfecto acá, tranquila 💪`,
            time: "há 3h"
        }, {
            name: "Milagros Herrera",
            username: "mili.herrera_",
            message: `@flor.aguirre_ yo también soy de ${e}, ya llevo $310 retirados. Shein paga sin importar de dónde seas, es todo online`,
            time: "há 2h"
        }, {
            name: "Rocío Medina",
            username: "ro.medina__",
            message: "@flor.aguirre_ entra sem medo, eu também sou daqui e já levantei 200€. Vê o vídeo que explica tudo",
            time: "há 1h"
        }]
    }),
    i.jsxs("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsx("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-center",
                children: i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })
            })
        }), i.jsx("div", {
            className: "pt-20 pb-10 px-6 flex-1",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(987)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsx("div", {
                    className: "text-center mb-8 opacity-0 animate-fade-in",
                    children: i.jsxs("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3",
                        children: ["Vê o vídeo de 2 minutos para liberar o teu saldo e começar a ", i.jsx("span", {
                            className: "bg-foreground text-background px-1.5 py-0.5 rounded inline-block whitespace-nowrap",
                            children: "levantar dinheiro"
                        })]
                    })
                }), i.jsx("div", {
                    className: "w-full opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    dangerouslySetInnerHTML: {
                        __html: '<vturb-smartplayer id="vid-6996090b26697ffcd1f58037" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
                    }
                }), i.jsx($2, {}), i.jsxs("div", {
                    className: "mt-12 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.6s"
                    },
                    children: [i.jsx("h2", {
                        className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-3 leading-tight",
                        children: "Milhares de pessoas já estão a ganhar dinheiro a avaliar roupa"
                    }), i.jsx("p", {
                        className: "text-sm sm:text-base text-muted-foreground text-center mb-6 leading-relaxed",
                        children: "Só precisas do teu telemóvel e uns minutos por dia"
                    }), i.jsxs("div", {
                        className: "overflow-hidden -mx-6 space-y-3",
                        children: [i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                willChange: "transform"
                            },
                            children: [...Gc, ...Gc].map( (r, o) => i.jsx(Wp, {
                                src: r,
                                alt: `Pacote SHEIN ${o % Gc.length + 1}`
                            }, `top-${o}`))
                        }), i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                animationDuration: "60s",
                                willChange: "transform"
                            },
                            children: [...Qc, ...Qc].map( (r, o) => i.jsx(Wp, {
                                src: r,
                                alt: `Participante SHEIN ${o % Qc.length + 1}`
                            }, `bottom-${o}`))
                        })]
                    })]
                }), i.jsx("div", {
                    className: "hidden",
                    children: i.jsxs("div", {
                        className: "mt-12",
                        children: [i.jsx("h2", {
                            className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-6 leading-tight",
                            children: "Lo que dicen las evaluadoras"
                        }), i.jsx("div", {
                            className: "space-y-4",
                            children: n.map( (r, o) => {
                                const s = Vp[o % Vp.length];
                                return i.jsxs("div", {
                                    className: "space-y-2",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [i.jsx("img", {
                                            src: s,
                                            alt: r.name,
                                            className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
                                        }), i.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [i.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [i.jsx("span", {
                                                    className: "text-sm font-semibold text-foreground",
                                                    children: r.name
                                                }), i.jsxs("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: ["@", r.username]
                                                })]
                                            }), i.jsx("p", {
                                                className: "text-sm text-foreground/80 mt-0.5",
                                                children: qp(r.message)
                                            }), i.jsx("span", {
                                                className: "text-[11px] text-muted-foreground mt-1 block",
                                                children: r.time
                                            })]
                                        })]
                                    }), r.replies && r.replies.map( (a, l) => {
                                        const c = Hp[l % Hp.length];
                                        return i.jsxs("div", {
                                            className: "flex items-start gap-3 ml-11",
                                            children: [i.jsx("img", {
                                                src: c,
                                                alt: a.name,
                                                className: "w-7 h-7 rounded-full object-cover flex-shrink-0"
                                            }), i.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [i.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [i.jsx("span", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: a.name
                                                    }), i.jsxs("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: ["@", a.username]
                                                    })]
                                                }), i.jsx("p", {
                                                    className: "text-sm text-foreground/80 mt-0.5",
                                                    children: qp(a.message)
                                                }), i.jsx("span", {
                                                    className: "text-[11px] text-muted-foreground mt-1 block",
                                                    children: a.time
                                                })]
                                            })]
                                        }, l)
                                    }
                                    )]
                                }, o)
                            }
                            )
                        })]
                    })
                })]
            })
        }), i.jsx("footer", {
            className: "border-t border-border bg-background py-8 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto text-center space-y-4",
                children: [i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-4 mx-auto opacity-60"
                }), i.jsxs("div", {
                    className: "flex items-center justify-center gap-4 text-xs text-muted-foreground",
                    children: [i.jsx("span", {
                        children: "Política de Privacidad"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Términos de Uso"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Contacto"
                    })]
                }), i.jsxs("p", {
                    className: "text-[11px] text-muted-foreground/40",
                    children: ["© ", new Date().getFullYear(), " Programa de Avaliação SHEIN Portugal. Todos os direitos reservados."]
                })]
            })
        })]
    })
}
  , Yp = [Ji, el, tl, nl, rl, ol, sl, al, il, ll, cl, ul, dl, qn, Yn, Gn]
  , Gp = [qn, Yn, Gn, fl, ml, pl, hl]
  , Kc = [gl, vl, xl, yl, wl, bl, Nl]
  , Xc = [Sl, jl, El, Cl, kl, Pl, Rl, Tl, _l, Al, Ll, Dl, Ml, Ol, zl, Il, $l, Fl, Bl, Ul, Vl, Hl, Wl, ql, Yl, Gl]
  , B2 = [{
    name: "Paula Rodríguez",
    username: "pau_rodri.gz",
    message: "Isto é real? Alguém já experimentou? 🤔",
    time: "há 20min",
    replies: [{
        name: "Sofía López",
        username: "sofi.lpz_",
        message: "@pau_rodri.gz amiga eu pensei o mesmo e olha, em 2 semanas já juntei 821€. A Shein faz isto porque perdeu 800 milhões em roupa não vendida no ano passado, precisam de opiniões reais para não continuar a perder 💕",
        time: "há 15min"
    }, {
        name: "Andrea Fernández",
        username: "and.fernandez",
        message: "@pau_rodri.gz é 100% real, no meu primeiro mês fiz mais de 1.400€. Vê o vídeo que explica por que pagam, faz sentido quando percebes",
        time: "há 8min"
    }]
}, {
    name: "Natalia Pérez",
    username: "nati.perez_",
    message: "Isto funciona?? Vi o anúncio e não sei se entro 😬",
    time: "há 1h",
    replies: [{
        name: "Camila Torres",
        username: "cami_torres.99",
        message: "@nati.perez_ funciona a sério. Eu numa semana fiz 530€. A Shein paga porque precisa que pessoas reais digam que roupa gostam antes de fabricar mais. Assim evitam perder dinheiro em stock",
        time: "há 50min"
    }, {
        name: "Laura Sánchez",
        username: "lau.sanchez__",
        message: "@nati.perez_ eu entrei há 1 mês com dúvidas como tu e já passei os 2.100€. É legítimo, vê o vídeo e vais perceber",
        time: "há 40min"
    }, {
        name: "Valeria Morales",
        username: "vale_morales.m",
        message: "@nati.perez_ entra tranquila, não pagas nada. Eu em 2 semanas juntei 950€ só a avaliar pelo telemóvel",
        time: "há 30min"
    }]
}, {
    name: "Daniela Romero",
    username: "dani.rom_",
    message: "Como funciona o levantamento? Dá para passar para conta bancária? 👀",
    time: "há 3h",
    replies: [{
        name: "Carolina Ruiz",
        username: "caro.ruiz22",
        message: "@dani.rom_ sim, passo direto para a minha conta. Também podes usar MB Way ou transferência bancária",
        time: "há 2h"
    }, {
        name: "Jessica Navarro",
        username: "jessnav.ar",
        message: "@dani.rom_ vê o vídeo em cima que explica todo o processo. Eu já levantei várias vezes sem problema 🙌",
        time: "há 1h"
    }]
}, {
    name: "Lucía Martínez",
    username: "lu.martinezz_",
    message: "Pensei que era mentira mas já levantei 180€… a minha mãe não acreditou até lhe mostrar a transferência 😅",
    time: "há 35min"
}, {
    name: "María González",
    username: "mari.gonza_",
    message: "O melhor é que podes fazer a qualquer momento, eu avalio antes de dormir jaja",
    time: "há 1h"
}, {
    name: "Sofía López",
    username: "sofi.lpz_",
    message: "Estou feliz 💕 ganhei 250€ numa semana só a dar a minha opinião pelo telemóvel.",
    time: "há 3h"
}, {
    name: "Andrea Fernández",
    username: "and.fernandez",
    message: "Adoro que não tens de vender nada nem publicar nas redes. Só dás a tua opinião e pronto.",
    time: "há 5h"
}, {
    name: "Camila Torres",
    username: "cami_torres.99",
    message: "Eu faço enquanto espero o autocarro ou na fila do super 😂 tempo morto = dinheiro",
    time: "há 5h"
}, {
    name: "Laura Sánchez",
    username: "lau.sanchez__",
    message: 'A minha mãe disse "isso não é normal" quando viu quanto ganhei 😂 depois pediu-me o link.',
    time: "há 8h"
}, {
    name: "Valeria Morales",
    username: "vale_morales.m",
    message: "Há peças que não gosto nada mas mesmo assim ganhas por avaliar. Já tenho 987€.",
    time: "há 10h"
}, {
    name: "Carolina Ruiz",
    username: "caro.ruiz22",
    message: "O que mais me surpreendeu foi a rapidez com que se acumula. Numa tarde já tinha bastante.",
    time: "há 12h"
}, {
    name: "Jessica Navarro",
    username: "jessnav.ar",
    message: "No início tive dúvidas, mas depois do primeiro levantamento já não. Fácil mais de 400€ no total.",
    time: "há 15h"
}, {
    name: "Mariana Ortega",
    username: "mari.ortega_",
    message: "Contei à minha irmã e agora as duas avaliamos juntas aos fins de semana 🤣",
    time: "há 18h"
}, {
    name: "Ana Belén Cruz",
    username: "anabelen.cruz",
    message: "É a primeira vez que ganho dinheiro pelo telemóvel sem ter de fazer vídeos nem nada de estranho.",
    time: "há 20h"
}]
  , Qp = ({src: e, alt: t}) => {
    const [n,r] = m.useState(!1);
    return i.jsxs("div", {
        className: "flex-shrink-0 rounded-2xl overflow-hidden bg-muted",
        style: {
            width: 160,
            height: 192
        },
        children: [!n && i.jsx("div", {
            className: "w-full h-full animate-pulse bg-muted"
        }), i.jsx("img", {
            src: e,
            alt: t,
            className: `w-full h-full object-cover transition-opacity duration-300 ${n ? "opacity-100" : "opacity-0 absolute"}`,
            loading: "eager",
            decoding: "async",
            onLoad: () => r(!0)
        })]
    })
}
  , Kp = e => e.split(/(@\S+)/g).map( (n, r) => n.startsWith("@") ? i.jsx("span", {
    className: "text-blue-500 font-semibold",
    children: n
}, r) : i.jsx("span", {
    children: n
}, r))
  , U2 = () => {
    const [e,t] = m.useState(532);
    return m.useEffect( () => {
        const n = setInterval( () => {
            t(r => {
                const o = Math.random() < .6 ? Math.floor(Math.random() * 3) + 1 : -Math.floor(Math.random() * 2);
                return Math.max(480, r + o)
            }
            )
        }
        , 2500 + Math.random() * 2e3);
        return () => clearInterval(n)
    }
    , []),
    i.jsxs("div", {
        className: "flex items-center justify-center gap-2 mt-4 opacity-0 animate-fade-in",
        style: {
            animationDelay: "0.3s"
        },
        children: [i.jsx("div", {
            className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
        }), i.jsxs("span", {
            className: "text-xs text-muted-foreground",
            children: [i.jsx("span", {
                className: "font-bold text-foreground",
                children: e.toLocaleString()
            }), " mujeres assistiendo ahora"]
        })]
    })
}
  , V2 = () => {
    const [e,t] = m.useState("");
    m.useEffect( () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        $e("ViewContent", {
            content_name: "VSL Page"
        }),
        window.history.pushState(null, "", window.location.href);
        const r = () => {
            window.location.href = "/checkout.html"
        }
        ;
        window.addEventListener("popstate", r);
        const o = () => window.removeEventListener("popstate", r);
        return (async () => {
            try {
                const l = await (await fetch("https://ipinfo.io/json?token=")).json();
                if (l != null && l.city) {
                    t(l.city);
                    return
                }
            } catch {}
            try {
                const l = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
                if (l != null && l.city) {
                    t(l.city);
                    return
                }
            } catch {}
            try {
                const l = await (await fetch("https://geolocation-db.com/json/")).json();
                if (l != null && l.city && l.city !== "Not found") {
                    t(l.city);
                    return
                }
            } catch {}
        }
        )(),
        () => o()
    }
    , []),
    m.useEffect( () => {
        if (!document.getElementById("vturb-script")) {
            const o = document.createElement("script");
            o.id = "vturb-script",
            o.src = "https://scripts.converteai.net/23233331-248e-42db-8847-e4c74ff9f15b/players/699204ae7255254103509f6b/v4/player.js",
            o.async = !0,
            document.head.appendChild(o)
        }
    }
    , []);
    const n = [...B2];
    return e && n.splice(2, 0, {
        name: "Florencia Aguirre",
        username: "flor.aguirre_",
        message: `Hay alguien de ${e} que ya lo probó? Quiero saber si acá funciona también 🙏`,
        time: "há 4h",
        replies: [{
            name: "Valentina Díaz",
            username: "val.diaz_",
            message: `@flor.aguirre_ soy de ${e} y ya cobré 2 veces! Funciona perfecto acá, tranquila 💪`,
            time: "há 3h"
        }, {
            name: "Milagros Herrera",
            username: "mili.herrera_",
            message: `@flor.aguirre_ yo también soy de ${e}, ya llevo $310 retirados. Shein paga sin importar de dónde seas, es todo online`,
            time: "há 2h"
        }, {
            name: "Rocío Medina",
            username: "ro.medina__",
            message: "@flor.aguirre_ entra sem medo, eu também sou daqui e já levantei 200€. Vê o vídeo que explica tudo",
            time: "há 1h"
        }]
    }),
    i.jsxs("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsx("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-center",
                children: i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })
            })
        }), i.jsx("div", {
            className: "pt-20 pb-10 px-6 flex-1",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(987)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsx("div", {
                    className: "text-center mb-8 opacity-0 animate-fade-in",
                    children: i.jsxs("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3",
                        children: ["Vê o vídeo de 2 minutos para liberar o teu saldo e começar a ", i.jsx("span", {
                            className: "bg-foreground text-background px-1.5 py-0.5 rounded inline-block whitespace-nowrap",
                            children: "levantar dinheiro"
                        })]
                    })
                }), i.jsx("div", {
                    className: "w-full opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    dangerouslySetInnerHTML: {
                        __html: '<vturb-smartplayer id="vid-699204ae7255254103509f6b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
                    }
                }), i.jsx(U2, {}), i.jsxs("div", {
                    className: "mt-12",
                    children: [i.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mb-6",
                        children: [i.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [i.jsx("defs", {
                                children: i.jsxs("linearGradient", {
                                    id: "ig-grad",
                                    x1: "0",
                                    y1: "24",
                                    x2: "24",
                                    y2: "0",
                                    children: [i.jsx("stop", {
                                        offset: "0%",
                                        stopColor: "#feda75"
                                    }), i.jsx("stop", {
                                        offset: "25%",
                                        stopColor: "#fa7e1e"
                                    }), i.jsx("stop", {
                                        offset: "50%",
                                        stopColor: "#d62976"
                                    }), i.jsx("stop", {
                                        offset: "75%",
                                        stopColor: "#962fbf"
                                    }), i.jsx("stop", {
                                        offset: "100%",
                                        stopColor: "#4f5bd5"
                                    })]
                                })
                            }), i.jsx("rect", {
                                x: "2",
                                y: "2",
                                width: "20",
                                height: "20",
                                rx: "5",
                                stroke: "url(#ig-grad)",
                                strokeWidth: "2",
                                fill: "none"
                            }), i.jsx("circle", {
                                cx: "12",
                                cy: "12",
                                r: "5",
                                stroke: "url(#ig-grad)",
                                strokeWidth: "2",
                                fill: "none"
                            }), i.jsx("circle", {
                                cx: "18",
                                cy: "6",
                                r: "1.5",
                                fill: "url(#ig-grad)"
                            })]
                        }), i.jsx("h2", {
                            className: "text-xl sm:text-2xl font-extrabold text-foreground leading-tight",
                            children: "Lo que dicen las evaluadoras"
                        })]
                    }), i.jsx("div", {
                        className: "divide-y divide-border",
                        children: n.map( (r, o) => {
                            const s = Yp[o % Yp.length]
                              , a = 12 + (o * 37 + 13) % 180;
                            return i.jsxs("div", {
                                className: "py-4 first:pt-0 last:pb-0",
                                children: [i.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [i.jsx("img", {
                                        src: s,
                                        alt: r.name,
                                        className: "w-9 h-9 rounded-full object-cover flex-shrink-0 ring-2 ring-pink-500/20"
                                    }), i.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [i.jsxs("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [i.jsx("span", {
                                                className: "text-[13px] font-bold text-foreground",
                                                children: r.username
                                            }), i.jsxs("span", {
                                                className: "text-[11px] text-muted-foreground",
                                                children: ["• ", r.time]
                                            })]
                                        }), i.jsx("p", {
                                            className: "text-[13px] text-foreground/90 mt-1 leading-relaxed",
                                            children: Kp(r.message)
                                        }), i.jsxs("div", {
                                            className: "flex items-center gap-4 mt-2",
                                            children: [i.jsxs("div", {
                                                className: "flex items-center gap-1",
                                                children: [i.jsx("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "#ed4956",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: i.jsx("path", {
                                                        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                    })
                                                }), i.jsx("span", {
                                                    className: "text-[11px] text-muted-foreground font-medium",
                                                    children: a
                                                })]
                                            }), i.jsx("span", {
                                                className: "text-[11px] text-muted-foreground font-semibold cursor-pointer",
                                                children: "Responder"
                                            })]
                                        })]
                                    })]
                                }), r.replies && r.replies.map( (l, c) => {
                                    const u = Gp[c % Gp.length]
                                      , d = 3 + (c * 23 + 7) % 45;
                                    return i.jsxs("div", {
                                        className: "flex items-start gap-3 ml-12 mt-3",
                                        children: [i.jsx("img", {
                                            src: u,
                                            alt: l.name,
                                            className: "w-7 h-7 rounded-full object-cover flex-shrink-0"
                                        }), i.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [i.jsxs("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [i.jsx("span", {
                                                    className: "text-[13px] font-bold text-foreground",
                                                    children: l.username
                                                }), i.jsxs("span", {
                                                    className: "text-[11px] text-muted-foreground",
                                                    children: ["• ", l.time]
                                                })]
                                            }), i.jsx("p", {
                                                className: "text-[13px] text-foreground/90 mt-0.5 leading-relaxed",
                                                children: Kp(l.message)
                                            }), i.jsxs("div", {
                                                className: "flex items-center gap-4 mt-1.5",
                                                children: [i.jsxs("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [i.jsx("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#ed4956",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: i.jsx("path", {
                                                            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        })
                                                    }), i.jsx("span", {
                                                        className: "text-[11px] text-muted-foreground font-medium",
                                                        children: d
                                                    })]
                                                }), i.jsx("span", {
                                                    className: "text-[11px] text-muted-foreground font-semibold cursor-pointer",
                                                    children: "Responder"
                                                })]
                                            })]
                                        })]
                                    }, c)
                                }
                                )]
                            }, o)
                        }
                        )
                    })]
                }), i.jsxs("div", {
                    className: "mt-12 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.6s"
                    },
                    children: [i.jsx("h2", {
                        className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-3 leading-tight",
                        children: "Milhares de pessoas já estão a ganhar dinheiro a avaliar roupa"
                    }), i.jsx("p", {
                        className: "text-sm sm:text-base text-muted-foreground text-center mb-6 leading-relaxed",
                        children: "Só precisas do teu telemóvel e uns minutos por dia"
                    }), i.jsxs("div", {
                        className: "overflow-hidden -mx-6 space-y-3",
                        children: [i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                willChange: "transform"
                            },
                            children: [...Kc, ...Kc].map( (r, o) => i.jsx(Qp, {
                                src: r,
                                alt: `Pacote SHEIN ${o % Kc.length + 1}`
                            }, `top-${o}`))
                        }), i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                animationDuration: "60s",
                                willChange: "transform"
                            },
                            children: [...Xc, ...Xc].map( (r, o) => i.jsx(Qp, {
                                src: r,
                                alt: `Participante SHEIN ${o % Xc.length + 1}`
                            }, `bottom-${o}`))
                        })]
                    })]
                })]
            })
        }), i.jsx("footer", {
            className: "border-t border-border bg-background py-8 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto text-center space-y-4",
                children: [i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-4 mx-auto opacity-60"
                }), i.jsxs("div", {
                    className: "flex items-center justify-center gap-4 text-xs text-muted-foreground",
                    children: [i.jsx("span", {
                        children: "Política de Privacidad"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Términos de Uso"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Contacto"
                    })]
                }), i.jsxs("p", {
                    className: "text-[11px] text-muted-foreground/40",
                    children: ["© ", new Date().getFullYear(), " Programa de Avaliação SHEIN Portugal. Todos os direitos reservados."]
                })]
            })
        })]
    })
}
  , Xp = [Ji, el, tl, nl, rl, ol, sl, al, il, ll, cl, ul, dl, qn, Yn, Gn]
  , Zp = [qn, Yn, Gn, fl, ml, pl, hl]
  , Zc = [gl, vl, xl, yl, wl, bl, Nl]
  , Jc = [Sl, jl, El, Cl, kl, Pl, Rl, Tl, _l, Al, Ll, Dl, Ml, Ol, zl, Il, $l, Fl, Bl, Ul, Vl, Hl, Wl, ql, Yl, Gl]
  , H2 = [{
    name: "Paula Rodríguez",
    username: "pau_rodri.gz",
    message: "Isto é real? Alguém já experimentou? 🤔",
    time: "há 20min",
    replies: [{
        name: "Sofía López",
        username: "sofi.lpz_",
        message: "@pau_rodri.gz amiga eu pensei o mesmo e olha, em 2 semanas já juntei 821€. A Shein faz isto porque perdeu 800 milhões em roupa não vendida no ano passado, precisam de opiniões reais para não continuar a perder 💕",
        time: "há 15min"
    }, {
        name: "Andrea Fernández",
        username: "and.fernandez",
        message: "@pau_rodri.gz é 100% real, no meu primeiro mês fiz mais de 1.400€. Vê o vídeo que explica por que pagam, faz sentido quando percebes",
        time: "há 8min"
    }]
}, {
    name: "Natalia Pérez",
    username: "nati.perez_",
    message: "Isto funciona?? Vi o anúncio e não sei se entro 😬",
    time: "há 1h",
    replies: [{
        name: "Camila Torres",
        username: "cami_torres.99",
        message: "@nati.perez_ funciona a sério. Eu numa semana fiz 530€. A Shein paga porque precisa que pessoas reais digam que roupa gostam antes de fabricar mais. Assim evitam perder dinheiro em stock",
        time: "há 50min"
    }, {
        name: "Laura Sánchez",
        username: "lau.sanchez__",
        message: "@nati.perez_ eu entrei há 1 mês com dúvidas como tu e já passei os 2.100€. É legítimo, vê o vídeo e vais perceber",
        time: "há 40min"
    }, {
        name: "Valeria Morales",
        username: "vale_morales.m",
        message: "@nati.perez_ entra tranquila, não pagas nada. Eu em 2 semanas juntei 950€ só a avaliar pelo telemóvel",
        time: "há 30min"
    }]
}, {
    name: "Daniela Romero",
    username: "dani.rom_",
    message: "Como funciona o levantamento? Dá para passar para conta bancária? 👀",
    time: "há 3h",
    replies: [{
        name: "Carolina Ruiz",
        username: "caro.ruiz22",
        message: "@dani.rom_ sim, passo direto para a minha conta. Também podes usar MB Way ou transferência bancária",
        time: "há 2h"
    }, {
        name: "Jessica Navarro",
        username: "jessnav.ar",
        message: "@dani.rom_ vê o vídeo em cima que explica todo o processo. Eu já levantei várias vezes sem problema 🙌",
        time: "há 1h"
    }]
}, {
    name: "Lucía Martínez",
    username: "lu.martinezz_",
    message: "Pensei que era mentira mas já levantei 180€… a minha mãe não acreditou até lhe mostrar a transferência 😅",
    time: "há 35min"
}, {
    name: "María González",
    username: "mari.gonza_",
    message: "O melhor é que podes fazer a qualquer momento, eu avalio antes de dormir jaja",
    time: "há 1h"
}, {
    name: "Sofía López",
    username: "sofi.lpz_",
    message: "Estou feliz 💕 ganhei 250€ numa semana só a dar a minha opinião pelo telemóvel.",
    time: "há 3h"
}, {
    name: "Andrea Fernández",
    username: "and.fernandez",
    message: "Adoro que não tens de vender nada nem publicar nas redes. Só dás a tua opinião e pronto.",
    time: "há 5h"
}, {
    name: "Camila Torres",
    username: "cami_torres.99",
    message: "Eu faço enquanto espero o autocarro ou na fila do super 😂 tempo morto = dinheiro",
    time: "há 5h"
}, {
    name: "Laura Sánchez",
    username: "lau.sanchez__",
    message: 'A minha mãe disse "isso não é normal" quando viu quanto ganhei 😂 depois pediu-me o link.',
    time: "há 8h"
}, {
    name: "Valeria Morales",
    username: "vale_morales.m",
    message: "Há peças que não gosto nada mas mesmo assim ganhas por avaliar. Já tenho 987€.",
    time: "há 10h"
}, {
    name: "Carolina Ruiz",
    username: "caro.ruiz22",
    message: "O que mais me surpreendeu foi a rapidez com que se acumula. Numa tarde já tinha bastante.",
    time: "há 12h"
}, {
    name: "Jessica Navarro",
    username: "jessnav.ar",
    message: "No início tive dúvidas, mas depois do primeiro levantamento já não. Fácil mais de 400€ no total.",
    time: "há 15h"
}, {
    name: "Mariana Ortega",
    username: "mari.ortega_",
    message: "Contei à minha irmã e agora as duas avaliamos juntas aos fins de semana 🤣",
    time: "há 18h"
}, {
    name: "Ana Belén Cruz",
    username: "anabelen.cruz",
    message: "É a primeira vez que ganho dinheiro pelo telemóvel sem ter de fazer vídeos nem nada de estranho.",
    time: "há 20h"
}]
  , Jp = ({src: e, alt: t}) => {
    const [n,r] = m.useState(!1);
    return i.jsxs("div", {
        className: "flex-shrink-0 rounded-2xl overflow-hidden bg-muted",
        style: {
            width: 160,
            height: 192
        },
        children: [!n && i.jsx("div", {
            className: "w-full h-full animate-pulse bg-muted"
        }), i.jsx("img", {
            src: e,
            alt: t,
            className: `w-full h-full object-cover transition-opacity duration-300 ${n ? "opacity-100" : "opacity-0 absolute"}`,
            loading: "eager",
            decoding: "async",
            onLoad: () => r(!0)
        })]
    })
}
  , eh = e => e.split(/(@\S+)/g).map( (n, r) => n.startsWith("@") ? i.jsx("span", {
    className: "text-blue-500 font-semibold",
    children: n
}, r) : i.jsx("span", {
    children: n
}, r))
  , W2 = () => {
    const [e,t] = m.useState(532);
    return m.useEffect( () => {
        const n = setInterval( () => {
            t(r => {
                const o = Math.random() < .6 ? Math.floor(Math.random() * 3) + 1 : -Math.floor(Math.random() * 2);
                return Math.max(480, r + o)
            }
            )
        }
        , 2500 + Math.random() * 2e3);
        return () => clearInterval(n)
    }
    , []),
    i.jsxs("div", {
        className: "flex items-center justify-center gap-2 mt-4 opacity-0 animate-fade-in",
        style: {
            animationDelay: "0.3s"
        },
        children: [i.jsx("div", {
            className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
        }), i.jsxs("span", {
            className: "text-xs text-muted-foreground",
            children: [i.jsx("span", {
                className: "font-bold text-foreground",
                children: e.toLocaleString()
            }), " mujeres assistiendo ahora"]
        })]
    })
}
  , q2 = () => {
    const [e,t] = m.useState("");
    m.useEffect( () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        }),
        $e("ViewContent", {
            content_name: "VSL Page"
        }),
        (async () => {
            try {
                const s = await (await fetch("https://ipinfo.io/json?token=")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://api.db-ip.com/v2/free/self")).json();
                if (s != null && s.city) {
                    t(s.city);
                    return
                }
            } catch {}
            try {
                const s = await (await fetch("https://geolocation-db.com/json/")).json();
                if (s != null && s.city && s.city !== "Not found") {
                    t(s.city);
                    return
                }
            } catch {}
        }
        )()
    }
    , []),
    m.useEffect( () => {
        if (!document.getElementById("vturb-script-2990")) {
            const o = document.createElement("script");
            o.id = "vturb-script-2990",
            o.src = "https://scripts.converteai.net/23233331-248e-42db-8847-e4c74ff9f15b/players/69960959c9b31b2e92fb7658/v4/player.js",
            o.async = !0,
            document.head.appendChild(o)
        }
    }
    , []);
    const n = [...H2];
    return e && n.splice(2, 0, {
        name: "Florencia Aguirre",
        username: "flor.aguirre_",
        message: `Hay alguien de ${e} que ya lo probó? Quiero saber si acá funciona también 🙏`,
        time: "há 4h",
        replies: [{
            name: "Valentina Díaz",
            username: "val.diaz_",
            message: `@flor.aguirre_ soy de ${e} y ya cobré 2 veces! Funciona perfecto acá, tranquila 💪`,
            time: "há 3h"
        }, {
            name: "Milagros Herrera",
            username: "mili.herrera_",
            message: `@flor.aguirre_ yo también soy de ${e}, ya llevo $310 retirados. Shein paga sin importar de dónde seas, es todo online`,
            time: "há 2h"
        }, {
            name: "Rocío Medina",
            username: "ro.medina__",
            message: "@flor.aguirre_ entra sem medo, eu também sou daqui e já levantei 200€. Vê o vídeo que explica tudo",
            time: "há 1h"
        }]
    }),
    i.jsxs("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsx("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-center",
                children: i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })
            })
        }), i.jsx("div", {
            className: "pt-20 pb-10 px-6 flex-1",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto",
                children: [i.jsx("div", {
                    className: "flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in",
                    children: i.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full",
                        children: [i.jsx(mt, {
                            className: "w-4 h-4 text-green-500"
                        }), i.jsx("span", {
                            className: "text-lg font-bold text-green-500",
                            children: B(987)
                        }), i.jsx("span", {
                            className: "text-xs text-green-500/70",
                            children: "saldo"
                        })]
                    })
                }), i.jsx("div", {
                    className: "text-center mb-8 opacity-0 animate-fade-in",
                    children: i.jsxs("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-3",
                        children: ["Vê o vídeo de 2 minutos para liberar o teu saldo e começar a ", i.jsx("span", {
                            className: "bg-foreground text-background px-1.5 py-0.5 rounded inline-block whitespace-nowrap",
                            children: "levantar dinheiro"
                        })]
                    })
                }), i.jsx("div", {
                    className: "w-full opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    dangerouslySetInnerHTML: {
                        __html: '<vturb-smartplayer id="vid-69960959c9b31b2e92fb7658" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
                    }
                }), i.jsx(W2, {}), i.jsxs("div", {
                    className: "mt-12 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.6s"
                    },
                    children: [i.jsx("h2", {
                        className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-3 leading-tight",
                        children: "Milhares de pessoas já estão a ganhar dinheiro a avaliar roupa"
                    }), i.jsx("p", {
                        className: "text-sm sm:text-base text-muted-foreground text-center mb-6 leading-relaxed",
                        children: "Só precisas do teu telemóvel e uns minutos por dia"
                    }), i.jsxs("div", {
                        className: "overflow-hidden -mx-6 space-y-3",
                        children: [i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                willChange: "transform"
                            },
                            children: [...Zc, ...Zc].map( (r, o) => i.jsx(Jp, {
                                src: r,
                                alt: `Pacote SHEIN ${o % Zc.length + 1}`
                            }, `top-${o}`))
                        }), i.jsx("div", {
                            className: "flex gap-3 animate-scroll-left",
                            style: {
                                width: "max-content",
                                animationDuration: "60s",
                                willChange: "transform"
                            },
                            children: [...Jc, ...Jc].map( (r, o) => i.jsx(Jp, {
                                src: r,
                                alt: `Participante SHEIN ${o % Jc.length + 1}`
                            }, `bottom-${o}`))
                        })]
                    })]
                }), i.jsx("div", {
                    className: "hidden",
                    children: i.jsxs("div", {
                        className: "mt-12",
                        children: [i.jsx("h2", {
                            className: "text-xl sm:text-2xl font-extrabold text-foreground text-center mb-6 leading-tight",
                            children: "Lo que dicen las evaluadoras"
                        }), i.jsx("div", {
                            className: "space-y-4",
                            children: n.map( (r, o) => {
                                const s = Xp[o % Xp.length];
                                return i.jsxs("div", {
                                    className: "space-y-2",
                                    children: [i.jsxs("div", {
                                        className: "flex items-start gap-3",
                                        children: [i.jsx("img", {
                                            src: s,
                                            alt: r.name,
                                            className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
                                        }), i.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [i.jsxs("div", {
                                                className: "flex items-center gap-2",
                                                children: [i.jsx("span", {
                                                    className: "text-sm font-semibold text-foreground",
                                                    children: r.name
                                                }), i.jsxs("span", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: ["@", r.username]
                                                })]
                                            }), i.jsx("p", {
                                                className: "text-sm text-foreground/80 mt-0.5",
                                                children: eh(r.message)
                                            }), i.jsx("span", {
                                                className: "text-[11px] text-muted-foreground mt-1 block",
                                                children: r.time
                                            })]
                                        })]
                                    }), r.replies && r.replies.map( (a, l) => {
                                        const c = Zp[l % Zp.length];
                                        return i.jsxs("div", {
                                            className: "flex items-start gap-3 ml-11",
                                            children: [i.jsx("img", {
                                                src: c,
                                                alt: a.name,
                                                className: "w-7 h-7 rounded-full object-cover flex-shrink-0"
                                            }), i.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [i.jsxs("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [i.jsx("span", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: a.name
                                                    }), i.jsxs("span", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: ["@", a.username]
                                                    })]
                                                }), i.jsx("p", {
                                                    className: "text-sm text-foreground/80 mt-0.5",
                                                    children: eh(a.message)
                                                }), i.jsx("span", {
                                                    className: "text-[11px] text-muted-foreground mt-1 block",
                                                    children: a.time
                                                })]
                                            })]
                                        }, l)
                                    }
                                    )]
                                }, o)
                            }
                            )
                        })]
                    })
                })]
            })
        }), i.jsx("footer", {
            className: "border-t border-border bg-background py-8 px-6",
            children: i.jsxs("div", {
                className: "max-w-md mx-auto text-center space-y-4",
                children: [i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-4 mx-auto opacity-60"
                }), i.jsxs("div", {
                    className: "flex items-center justify-center gap-4 text-xs text-muted-foreground",
                    children: [i.jsx("span", {
                        children: "Política de Privacidad"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Términos de Uso"
                    }), i.jsx("span", {
                        className: "w-px h-3 bg-border"
                    }), i.jsx("span", {
                        children: "Contacto"
                    })]
                }), i.jsxs("p", {
                    className: "text-[11px] text-muted-foreground/40",
                    children: ["© ", new Date().getFullYear(), " Programa de Avaliação SHEIN Portugal. Todos os direitos reservados."]
                })]
            })
        })]
    })
}
  , Te2 = () => {
    const e = Eo();
    return m.useEffect( () => {
        window.scrollTo(0, 0),
        $e("ViewContent", {
            content_name: "Confirmacao Taxa"
        })
    }
    , []),
    i.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [i.jsx("div", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border",
            children: i.jsxs("div", {
                className: "max-w-2xl mx-auto px-6 h-14 flex items-center justify-between",
                children: [i.jsxs("button", {
                    onClick: () => e(-1),
                    className: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                    children: [i.jsx(bb, {
                        className: "w-4 h-4"
                    }), i.jsx("span", {
                        className: "text-sm",
                        children: "Voltar"
                    })]
                }), i.jsx("img", {
                    src: Ge,
                    alt: "Shein",
                    className: "h-5"
                })]
            })
        }), i.jsx("div", {
            className: "pt-20 pb-28 px-6",
            children: i.jsxs("div", {
                className: "max-w-xl mx-auto",
                children: [i.jsx("div", {
                    className: "text-center mb-8 opacity-0 animate-fade-in",
                    children: [i.jsx("div", {
                        className: "text-5xl mb-4",
                        children: "🔒"
                    }), i.jsx("h1", {
                        className: "text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight",
                        children: "Por que preciso pagar a taxa?"
                    }), i.jsx("p", {
                        className: "text-muted-foreground text-base leading-relaxed",
                        children: "O teu saldo de 987€ está pronto para ser levantado. Para garantir a segurança e verificar a tua identidade, pedimos uma pequena taxa de confirmação de €9,67."
                    })]
                }), i.jsx("div", {
                    className: "glass-card p-5 mb-6 space-y-4 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.2s"
                    },
                    children: [i.jsx("h3", {
                        className: "font-semibold text-foreground",
                        children: "O que inclui a taxa:"
                    }), i.jsxs("ul", {
                        className: "space-y-2 text-sm text-muted-foreground",
                        children: [i.jsx("li", {
                            className: "flex gap-2",
                            children: ["✓ ", "Verificação de identidade para proteger o teu dinheiro"]
                        }), i.jsx("li", {
                            className: "flex gap-2",
                            children: ["✓ ", "Processamento seguro do levantamento"]
                        }), i.jsx("li", {
                            className: "flex gap-2",
                            children: ["✓ ", "Libertação imediata dos 987€ para a tua conta"]
                        })]
                    })]
                }), i.jsx("div", {
                    className: "border border-green-500/20 rounded-xl bg-green-500/5 p-5 mb-8 opacity-0 animate-fade-in",
                    style: {
                        animationDelay: "0.3s"
                    },
                    children: i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [i.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: "Saldo a levantar"
                        }), i.jsx("span", {
                            className: "text-2xl font-bold text-green-500",
                            children: "€987,00"
                        })]
                    })
                }), i.jsx("div", {
                    className: "opacity-0 animate-slide-up",
                    style: {
                        animationDelay: "0.4s"
                    },
                    children: i.jsx("button", {
                        onClick: () => {
                            window.location.href = "/checkout.html"
                        },
                        className: "w-full flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-xl",
                        children: "Concordo, quero pagar a taxa e levantar os €987"
                    })
                })]
            })
        })]
    })
}
  , Y2 = () => {
    const e = wf();
    return m.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    i.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: i.jsxs("div", {
            className: "text-center",
            children: [i.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), i.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), i.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , G2 = new Yj
  , Q2 = () => i.jsx(Qj, {
    client: G2,
    children: i.jsxs(Sj, {
        children: [i.jsx(oN, {}), i.jsx(ON, {}), i.jsx(UE, {
            children: i.jsxs($E, {
                children: [i.jsx(st, {
                    path: "/",
                    element: i.jsx(pC, {})
                }), i.jsx(st, {
                    path: "/como-funciona",
                    element: i.jsx(C2, {})
                }), i.jsx(st, {
                    path: "/evaluacion",
                    element: i.jsx(_2, {})
                }), i.jsx(st, {
                    path: "/evaluacion490",
                    element: i.jsx(A2, {})
                }), i.jsx(st, {
                    path: "/evaluacion1990",
                    element: i.jsx(L2, {})
                }), i.jsx(st, {
                    path: "/confirmacao-taxa",
                    element: i.jsx(Te2, {})
                }), i.jsx(st, {
                    path: "/datos-entrega",
                    element: i.jsx(z2, {})
                }), i.jsx(st, {
                    path: "/datos-entrega1990",
                    element: i.jsx(F2, {})
                }), i.jsx(st, {
                    path: "/evaluacion2990",
                    element: i.jsx(D2, {})
                }), i.jsx(st, {
                    path: "/datos-entrega490",
                    element: i.jsx(V2, {})
                }), i.jsx(st, {
                    path: "/datos-entrega2990",
                    element: i.jsx(q2, {})
                }), i.jsx(st, {
                    path: "*",
                    element: i.jsx(Y2, {})
                })]
            })
        })]
    })
});
Sv(document.getElementById("root")).render(i.jsx(Q2, {}));


/* =================================================================
   SHEIN · PREMIUM ENHANCEMENTS (anexado ao bundle original)
   -----------------------------------------------------------------
   Tudo num único IIFE: injeta CSS via <style>, dispara toasts a
   cada 15s, anima cards e adiciona ícones SVG aos step cards.
   ================================================================= */
;(function () {
  'use strict';

  /* -------- CSS injetado em runtime (substitui a necessidade
      de editar o ficheiro de CSS compilado) -------- */
  var CSS_TEXT = [
    '@keyframes sheinFadeInUp {',
    '  0% { opacity: 0; transform: translateY(28px); }',
    '  100% { opacity: 1; transform: translateY(0); }',
    '}',
    '@keyframes sheinToastInUp {',
    '  0% { opacity: 0; transform: translateY(120%) scale(0.92); }',
    '  60% { opacity: 1; transform: translateY(-4px) scale(1.02); }',
    '  100% { opacity: 1; transform: translateY(0) scale(1); }',
    '}',
    '@keyframes sheinToastOutDown {',
    '  0% { opacity: 1; transform: translateY(0); }',
    '  100% { opacity: 0; transform: translateY(40%); }',
    '}',
    '@keyframes sheinPulseDot {',
    '  0%, 100% { opacity: 1; transform: scale(1); }',
    '  50% { opacity: 0.5; transform: scale(0.85); }',
    '}',

    /* 1. Sombras nos cards de roupa do marquee */
    '.animate-scroll-left > div,',
    '.animate-scroll-right > div {',
    '  box-shadow: 0 10px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06) !important;',
    '  transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1);',
    '}',
    '.animate-scroll-left > div:hover,',
    '.animate-scroll-right > div:hover {',
    '  box-shadow: 0 16px 36px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.08) !important;',
    '  transform: translateY(-3px);',
    '}',

    /* 2. Fade-in-up de entrada da página (cascata) */
    '.shein-pop-in { animation: sheinFadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both !important; }',
    '.shein-pop-in-1 { animation-delay: 0.05s !important; }',
    '.shein-pop-in-2 { animation-delay: 0.15s !important; }',
    '.shein-pop-in-3 { animation-delay: 0.25s !important; }',
    '.shein-pop-in-4 { animation-delay: 0.35s !important; }',
    '.shein-pop-in-5 { animation-delay: 0.45s !important; }',
    '.shein-pop-in-6 { animation-delay: 0.55s !important; }',

    /* 3. Step cards de /como-funciona como cards individuais */
    '.animate-slide-up.shein-step-card {',
    '  background: #ffffff;',
    '  border-radius: 20px;',
    '  border: 1px solid rgba(0,0,0,0.06);',
    '  box-shadow: 0 4px 12px rgba(0,0,0,0.05);',
    '  padding: 18px;',
    '  transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);',
    '}',
    '.animate-slide-up.shein-step-card:hover {',
    '  transform: translateY(-2px);',
    '  box-shadow: 0 12px 28px rgba(0,0,0,0.08);',
    '}',

    /* Badge gradiente substitui o quadrado outlined */
    '.shein-step-card .w-12.h-12.bg-secondary {',
    '  border-radius: 16px !important;',
    '  border: 0 !important;',
    '  background: linear-gradient(135deg, #fde2e4 0%, #fad0d8 100%) !important;',
    '  box-shadow: 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.55) !important;',
    '  color: #b23a48 !important;',
    '  position: relative;',
    '  overflow: hidden;',
    '  display: grid !important;',
    '  place-items: center !important;',
    '}',
    '.shein-step-card[data-step="2"] .w-12.h-12.bg-secondary {',
    '  background: linear-gradient(135deg, #fef0d2 0%, #fbd8b0 100%) !important;',
    '  color: #b86b2a !important;',
    '}',
    '.shein-step-card[data-step="3"] .w-12.h-12.bg-secondary {',
    '  background: linear-gradient(135deg, #ece1ff 0%, #d4c5ff 100%) !important;',
    '  color: #6c4ad6 !important;',
    '}',
    '.shein-step-card[data-step="4"] .w-12.h-12.bg-secondary {',
    '  background: linear-gradient(135deg, #d5f6e4 0%, #b4ecd0 100%) !important;',
    '  color: #2f8a5a !important;',
    '}',

    /* SVG injetado dentro do badge */
    '.shein-step-card .w-12.h-12.bg-secondary[data-shein-icon] > svg {',
    '  width: 22px; height: 22px;',
    '  stroke: currentColor; fill: none;',
    '  stroke-width: 1.85; stroke-linecap: round; stroke-linejoin: round;',
    '}',
    /* Número fica como sub-tag pequena quando o ícone aparece */
    '.shein-step-card .w-12.h-12.bg-secondary[data-shein-icon] > span {',
    '  position: absolute; bottom: 3px; right: 4px;',
    '  font-size: 9px !important; line-height: 1 !important;',
    '  font-weight: 800 !important; color: rgba(0,0,0,0.55) !important;',
    '  background: rgba(255,255,255,0.7); border-radius: 999px; padding: 1px 4px;',
    '}',

    /* Pré-estado para IntersectionObserver */
    '.shein-step-card:not(.shein-revealed) {',
    '  opacity: 0 !important;',
    '  transform: translateY(28px) !important;',
    '  animation: none !important;',
    '}',
    '.shein-step-card.shein-revealed {',
    '  animation: sheinFadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both !important;',
    '}',

    /* 4. Toast container (canto inferior direito; mobile = full-width) */
    '.shein-toast-container {',
    '  position: fixed; bottom: 24px; right: 24px;',
    '  z-index: 9999;',
    '  display: flex; flex-direction: column; gap: 10px;',
    '  pointer-events: none; align-items: flex-end;',
    '}',
    '@media (max-width: 640px) {',
    '  .shein-toast-container { bottom: 16px; right: 16px; left: 16px; align-items: stretch; }',
    '}',

    '.shein-toast {',
    '  pointer-events: auto;',
    '  width: 100%; max-width: 340px;',
    '  display: flex; align-items: center; gap: 12px;',
    '  padding: 12px 14px;',
    '  border-radius: 16px;',
    '  background: rgba(255,255,255,0.92);',
    '  -webkit-backdrop-filter: saturate(170%) blur(22px);',
    '  backdrop-filter: saturate(170%) blur(22px);',
    '  border: 1px solid rgba(0,0,0,0.06);',
    '  box-shadow: 0 14px 32px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.06);',
    '  cursor: pointer; text-align: left; color: #0a0a0a;',
    '  transform-origin: bottom right; font-family: inherit;',
    '}',
    '.shein-toast-avatar {',
    '  flex-shrink: 0; width: 38px; height: 38px; border-radius: 999px;',
    '  background: linear-gradient(135deg, #fde2e4 0%, #fbd8b0 100%);',
    '  display: grid; place-items: center;',
    '  font-size: 11px; font-weight: 700; color: #b23a48; letter-spacing: 0.02em;',
    '  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);',
    '}',
    '.shein-toast-body { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }',
    '.shein-toast-title { font-size: 13px; font-weight: 600; color: #0a0a0a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
    '.shein-toast-sub { font-size: 12px; color: rgba(0,0,0,0.55); margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
    '.shein-toast-sub strong { color: #10b981; font-weight: 700; }',
    '.shein-toast-dot { flex-shrink: 0; width: 8px; height: 8px; border-radius: 999px; background: #10b981; animation: sheinPulseDot 1.6s ease-in-out infinite; }',
    '.shein-toast-in { animation: sheinToastInUp 0.55s cubic-bezier(0.22,1,0.36,1); }',
    '.shein-toast-out { animation: sheinToastOutDown 0.3s ease-in forwards; }',

    '@media (prefers-reduced-motion: reduce) {',
    '  .shein-toast-in, .shein-toast-out, .shein-toast-dot, .shein-pop-in { animation: none !important; }',
    '  .shein-step-card, .shein-step-card.shein-revealed { animation: none !important; opacity: 1 !important; transform: none !important; }',
    '}'
  ].join('\n');

  function injectCSS() {
    if (document.getElementById('shein-premium-style')) return;
    var style = document.createElement('style');
    style.id = 'shein-premium-style';
    style.appendChild(document.createTextNode(CSS_TEXT));
    document.head.appendChild(style);
  }

  /* -------- Config -------- */
  var TOAST_FIRST_DELAY = 5000;
  var TOAST_INTERVAL    = 15000;  /* 15s, conforme pedido */
  var TOAST_DURATION    = 5500;
  var TOAST_EXIT_DURATION = 300;

  /* -------- Pool de nomes/cidades portuguesas -------- */
  var NAMES = [
    { name: 'Rita Almeida',     city: 'Braga' },
    { name: 'Sofia Marques',    city: 'Lisboa' },
    { name: 'Marta Costa',      city: 'Porto' },
    { name: 'Ana Ribeiro',      city: 'Coimbra' },
    { name: 'Beatriz Sousa',    city: 'Aveiro' },
    { name: 'Inês Pereira',     city: 'Faro' },
    { name: 'Catarina Lopes',   city: 'Setúbal' },
    { name: 'Joana Silva',      city: 'Évora' },
    { name: 'Helena Cardoso',   city: 'Viseu' },
    { name: 'Carolina Mendes',  city: 'Leiria' },
    { name: 'Mariana Tavares',  city: 'Funchal' },
    { name: 'Filipa Gomes',     city: 'Guimarães' },
    { name: 'Diana Carvalho',   city: 'Viana do Castelo' },
    { name: 'Patrícia Nunes',   city: 'Almada' },
    { name: 'Daniela Faria',    city: 'Cascais' },
    { name: 'Margarida Pinto',  city: 'Sintra' },
    { name: 'Vera Antunes',     city: 'Matosinhos' },
    { name: 'Cláudia Henriques',city: 'Aveiro' },
    { name: 'Lara Fonseca',     city: 'Braga' },
    { name: 'Beatriz Moura',    city: 'Lisboa' }
  ];

  /* -------- Ícones SVG (estilo lucide) -------- */
  var STEP_ICONS = [
    /* 1 · Sparkle — ativar acesso */
    '<svg viewBox="0 0 24 24"><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m5.6 18.4 2.1-2.1"/><path d="m16.3 7.7 2.1-2.1"/></svg>',
    /* 2 · Hanger — avaliar peças */
    '<svg viewBox="0 0 24 24"><path d="M12 8a2 2 0 1 0-2-2"/><path d="M2 18a1 1 0 0 1-.5-1.86l10-6a1 1 0 0 1 1 0l10 6A1 1 0 0 1 22 18Z"/></svg>',
    /* 3 · Wallet — saldo cresce */
    '<svg viewBox="0 0 24 24"><path d="M20 12V8a2 2 0 0 0-2-2H5a2 2 0 0 1 0-4h14v4"/><path d="M3 6v13a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-3"/><path d="M18 12h4v4h-4a2 2 0 0 1 0-4Z"/></svg>',
    /* 4 · Banknote — levantar */
    '<svg viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>'
  ];

  /* -------- Utilidades -------- */
  function shuffle(a) {
    var c = a.slice();
    for (var i = c.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }
  function randomAmount() { return 120 + Math.floor(Math.random() * 770); }
  function initials(n) {
    return n.split(' ').slice(0, 2).map(function (p) { return p[0]; }).join('').toUpperCase();
  }
  function formatEUR(n) {
    try {
      return new Intl.NumberFormat('pt-PT', {
        style: 'currency', currency: 'EUR',
        minimumFractionDigits: 0, maximumFractionDigits: 0
      }).format(n);
    } catch (e) { return '€' + n; }
  }
  function escapeHTML(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  /* -------- 1. Toast Manager -------- */
  var toastContainer = null;
  function ensureToastContainer() {
    if (toastContainer && document.body.contains(toastContainer)) return toastContainer;
    toastContainer = document.createElement('div');
    toastContainer.className = 'shein-toast-container';
    toastContainer.setAttribute('role', 'region');
    toastContainer.setAttribute('aria-label', 'Notificações');
    toastContainer.setAttribute('aria-live', 'polite');
    document.body.appendChild(toastContainer);
    return toastContainer;
  }

  function buildToast(entry) {
    var el = document.createElement('button');
    el.type = 'button';
    el.className = 'shein-toast shein-toast-in';
    var first = entry.name.split(' ')[0];
    el.innerHTML =
      '<span class="shein-toast-avatar" aria-hidden="true">' + escapeHTML(initials(entry.name)) + '</span>' +
      '<span class="shein-toast-body">' +
        '<span class="shein-toast-title">' + escapeHTML(first) + ' de ' + escapeHTML(entry.city) + '</span>' +
        '<span class="shein-toast-sub">acabou de levantar <strong>' + escapeHTML(formatEUR(entry.amount)) + '</strong></span>' +
      '</span>' +
      '<span class="shein-toast-dot" aria-hidden="true"></span>';
    el.setAttribute('aria-label', first + ' de ' + entry.city + ' acabou de levantar ' + formatEUR(entry.amount));
    var done = false;
    function dismiss() {
      if (done) return; done = true;
      el.classList.remove('shein-toast-in');
      el.classList.add('shein-toast-out');
      window.setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, TOAST_EXIT_DURATION);
    }
    el.addEventListener('click', dismiss);
    window.setTimeout(dismiss, TOAST_DURATION);
    return el;
  }

  function pushToast(entry) {
    if (document.hidden) return;
    ensureToastContainer().appendChild(buildToast(entry));
  }

  function startToastFeed() {
    var queue = shuffle(NAMES);
    var cursor = 0;
    function tick() {
      var base = queue[cursor++ % queue.length];
      pushToast({ name: base.name, city: base.city, amount: randomAmount() });
    }
    window.setTimeout(tick, TOAST_FIRST_DELAY);
    window.setInterval(tick, TOAST_INTERVAL);
  }

  /* -------- 2. Marcar step cards (identifica os 4 cards de Como Funciona) -------- */
  function markStepCards() {
    /* Cada step do "Como Funciona" é um wrapper com .animate-slide-up
       que contém um badge .w-12.h-12.bg-secondary. Marcamos os
       primeiros 4 (na ordem) para receber o tratamento de card. */
    var nodes = document.querySelectorAll('.animate-slide-up');
    var stepIdx = 0;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el.querySelector(':scope > div > .w-12.h-12.bg-secondary')) continue;
      if (!el.classList.contains('shein-step-card')) {
        el.classList.add('shein-step-card');
        el.setAttribute('data-step', String(stepIdx + 1));
      }
      stepIdx++;
    }
  }

  /* -------- 3. Injeção de ícones SVG nos badges -------- */
  function enhanceStepCards() {
    var badges = document.querySelectorAll('.shein-step-card .w-12.h-12.bg-secondary');
    for (var i = 0; i < badges.length; i++) {
      var badge = badges[i];
      if (badge.dataset.sheinIcon) continue;
      var svgMarkup = STEP_ICONS[i % STEP_ICONS.length];
      var wrap = document.createElement('span');
      wrap.style.display = 'contents';
      wrap.innerHTML = svgMarkup;
      var svg = wrap.querySelector('svg');
      if (svg) {
        badge.insertBefore(svg, badge.firstChild);
        badge.dataset.sheinIcon = '1';
      }
    }
  }

  /* -------- 4. IntersectionObserver: reveal fade-in-up -------- */
  var revealObserver = null;
  function ensureRevealObserver() {
    if (revealObserver || typeof IntersectionObserver === 'undefined') return revealObserver;
    revealObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('shein-revealed');
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    return revealObserver;
  }
  function observeStepCards() {
    var io = ensureRevealObserver();
    if (!io) return;
    var nodes = document.querySelectorAll('.shein-step-card');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.dataset.sheinObserved) continue;
      el.dataset.sheinObserved = '1';
      io.observe(el);
    }
  }

  /* -------- 5. Fade-in-up da página (cascata nos blocos hero) -------- */
  function applyPageEnter() {
    /* Encontra os "min-h-screen flex flex-col" (hero do app)
       e aplica fade-in-up cascateado aos filhos diretos. */
    var heros = document.querySelectorAll('[class*="min-h-screen"][class*="flex-col"]');
    for (var h = 0; h < heros.length; h++) {
      var hero = heros[h];
      if (hero.dataset.sheinEntered) continue;
      hero.dataset.sheinEntered = '1';
      var kids = hero.children;
      var delay = 1;
      for (var i = 0; i < kids.length && delay <= 6; i++) {
        var k = kids[i];
        if (!k.getBoundingClientRect) continue;
        k.classList.add('shein-pop-in', 'shein-pop-in-' + delay);
        delay++;
      }
    }
  }

  /* -------- 6. MutationObserver: lida com mudanças de rota React -------- */
  function watchReactUpdates() {
    if (typeof MutationObserver === 'undefined') return;
    var mo = new MutationObserver(function () {
      markStepCards();
      enhanceStepCards();
      observeStepCards();
      applyPageEnter();
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* -------- Bootstrap -------- */
  function init() {
    injectCSS();
    markStepCards();
    enhanceStepCards();
    observeStepCards();
    applyPageEnter();
    startToastFeed();
    watchReactUpdates();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.setTimeout(init, 80); /* deixa o React pintar */
    });
  } else {
    window.setTimeout(init, 80);
  }
})();
