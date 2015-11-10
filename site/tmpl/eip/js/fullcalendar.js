/*!
 * FullCalendar v2.4.0
 * Docs & License: http://fullcalendar.io/
 * (c) 2015 Adam Shaw
 */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}
(function(a, b) {
    function c(a) {
        return Q(a, Oa)
    }
    function d(b) {
        var c, d = {
            views: b.views || {}
        };
        return a.each(b, function(b, e) {
            "views" != b && (a.isPlainObject(e) && !/(time|duration|interval)$/i.test(b) && -1 == a.inArray(b, Oa) ? (c = null ,
            a.each(e, function(a, e) {
                /^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(a) ? (d.views[a] || (d.views[a] = {}),
                d.views[a][b] = e) : (c || (c = {}),
                c[a] = e)
            }
            ),
            c && (d[b] = c)) : d[b] = e)
        }
        ),
        d
    }
    function e(a, b) {
        b.left && a.css({
            "border-left-width": 1,
            "margin-left": b.left - 1
        }),
        b.right && a.css({
            "border-right-width": 1,
            "margin-right": b.right - 1
        })
    }
    function f(a) {
        a.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }
    function g() {
        a("body").addClass("fc-not-allowed")
    }
    function h() {
        a("body").removeClass("fc-not-allowed")
    }
    function i(b, c, d) {
        var e = Math.floor(c / b.length)
          , f = Math.floor(c - e * (b.length - 1))
          , g = []
          , h = []
          , i = []
          , k = 0;
        j(b),
        b.each(function(c, d) {
            var j = c === b.length - 1 ? f : e
              , l = a(d).outerHeight(!0);
            j > l ? (g.push(d),
            h.push(l),
            i.push(a(d).height())) : k += l
        }
        ),
        d && (c -= k,
        e = Math.floor(c / g.length),
        f = Math.floor(c - e * (g.length - 1))),
        a(g).each(function(b, c) {
            var d = b === g.length - 1 ? f : e
              , j = h[b]
              , k = i[b]
              , l = d - (j - k);
            d > j && a(c).height(l)
        }
        )
    }
    function j(a) {
        a.height("")
    }
    function k(b) {
        var c = 0;
        return b.find("> *").each(function(b, d) {
            var e = a(d).outerWidth();
            e > c && (c = e)
        }
        ),
        c++,
        b.width(c),
        c
    }
    function l(a, b) {
        return a.height(b).addClass("fc-scroller"),
        a[0].scrollHeight - 1 > a[0].clientHeight ? !0 : (m(a),
        !1)
    }
    function m(a) {
        a.height("").removeClass("fc-scroller")
    }
    function n(b) {
        var c = b.css("position")
          , d = b.parents().filter(function() {
            var b = a(this);
            return /(auto|scroll)/.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }
        ).eq(0);
        return "fixed" !== c && d.length ? d : a(b[0].ownerDocument || document)
    }
    function o(a) {
        var b = a.offset();
        return {
            left: b.left,
            right: b.left + a.outerWidth(),
            top: b.top,
            bottom: b.top + a.outerHeight()
        }
    }
    function p(a) {
        var b = a.offset()
          , c = r(a)
          , d = b.left + u(a, "border-left-width") + c.left
          , e = b.top + u(a, "border-top-width") + c.top;
        return {
            left: d,
            right: d + a[0].clientWidth,
            top: e,
            bottom: e + a[0].clientHeight
        }
    }
    function q(a) {
        var b = a.offset()
          , c = b.left + u(a, "border-left-width") + u(a, "padding-left")
          , d = b.top + u(a, "border-top-width") + u(a, "padding-top");
        return {
            left: c,
            right: c + a.width(),
            top: d,
            bottom: d + a.height()
        }
    }
    function r(a) {
        var b = a.innerWidth() - a[0].clientWidth
          , c = {
            left: 0,
            right: 0,
            top: 0,
            bottom: a.innerHeight() - a[0].clientHeight
        };
        return s() && "rtl" == a.css("direction") ? c.left = b : c.right = b,
        c
    }
    function s() {
        return null  === Pa && (Pa = t()),
        Pa
    }
    function t() {
        var b = a("<div><div/></div>").css({
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl"
        }).appendTo("body")
          , c = b.children()
          , d = c.offset().left > b.offset().left;
        return b.remove(),
        d
    }
    function u(a, b) {
        return parseFloat(a.css(b)) || 0
    }
    function v(a) {
        return 1 == a.which && !a.ctrlKey
    }
    function w(a, b) {
        var c = {
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
            bottom: Math.min(a.bottom, b.bottom)
        };
        return c.left < c.right && c.top < c.bottom ? c : !1
    }
    function x(a, b) {
        return {
            left: Math.min(Math.max(a.left, b.left), b.right),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }
    function y(a) {
        return {
            left: (a.left + a.right) / 2,
            top: (a.top + a.bottom) / 2
        }
    }
    function z(a, b) {
        return {
            left: a.left - b.left,
            top: a.top - b.top
        }
    }
    function A(b) {
        var c, d, e = [], f = [];
        for ("string" == typeof b ? f = b.split(/\s*,\s*/) : "function" == typeof b ? f = [b] : a.isArray(b) && (f = b),
        c = 0; c < f.length; c++)
            d = f[c],
            "string" == typeof d ? e.push("-" == d.charAt(0) ? {
                field: d.substring(1),
                order: -1
            } : {
                field: d,
                order: 1
            }) : "function" == typeof d && e.push({
                func: d
            });
        return e
    }
    function B(a, b, c) {
        var d, e;
        for (d = 0; d < c.length; d++)
            if (e = C(a, b, c[d]))
                return e;
        return 0
    }
    function C(a, b, c) {
        return c.func ? c.func(a, b) : D(a[c.field], b[c.field]) * (c.order || 1)
    }
    function D(b, c) {
        return b || c ? null  == c ? -1 : null  == b ? 1 : "string" === a.type(b) || "string" === a.type(c) ? String(b).localeCompare(String(c)) : b - c : 0
    }
    function E(a, b) {
        var c, d, e, f, g = a.start, h = a.end, i = b.start, j = b.end;
        return h > i && j > g ? (g >= i ? (c = g.clone(),
        e = !0) : (c = i.clone(),
        e = !1),
        j >= h ? (d = h.clone(),
        f = !0) : (d = j.clone(),
        f = !1),
        {
            start: c,
            end: d,
            isStart: e,
            isEnd: f
        }) : void 0
    }
    function F(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days"),
            ms: a.time() - c.time()
        })
    }
    function G(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days")
        })
    }
    function H(a, c, d) {
        return b.duration(Math.round(a.diff(c, d, !0)), d)
    }
    function I(a, b) {
        var c, d, e;
        for (c = 0; c < Ra.length && (d = Ra[c],
        e = J(d, a, b),
        !(e >= 1 && ba(e))); c++)
            ;
        return d
    }
    function J(a, c, d) {
        return null  != d ? d.diff(c, a, !0) : b.isDuration(c) ? c.as(a) : c.end.diff(c.start, a, !0)
    }
    function K(a, b, c) {
        var d;
        return N(c) ? (b - a) / c : (d = c.asMonths(),
        Math.abs(d) >= 1 && ba(d) ? b.diff(a, "months", !0) / d : b.diff(a, "days", !0) / c.asDays())
    }
    function L(a, b) {
        var c, d;
        return N(a) || N(b) ? a / b : (c = a.asMonths(),
        d = b.asMonths(),
        Math.abs(c) >= 1 && ba(c) && Math.abs(d) >= 1 && ba(d) ? c / d : a.asDays() / b.asDays())
    }
    function M(a, c) {
        var d;
        return N(a) ? b.duration(a * c) : (d = a.asMonths(),
        Math.abs(d) >= 1 && ba(d) ? b.duration({
            months: d * c
        }) : b.duration({
            days: a.asDays() * c
        }))
    }
    function N(a) {
        return Boolean(a.hours() || a.minutes() || a.seconds() || a.milliseconds())
    }
    function O(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }
    function P(a) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(a)
    }
    function Q(a, b) {
        var c, d, e, f, g, h, i = {};
        if (b)
            for (c = 0; c < b.length; c++) {
                for (d = b[c],
                e = [],
                f = a.length - 1; f >= 0; f--)
                    if (g = a[f][d],
                    "object" == typeof g)
                        e.unshift(g);
                    else if (void 0 !== g) {
                        i[d] = g;
                        break
                    }
                e.length && (i[d] = Q(e))
            }
        for (c = a.length - 1; c >= 0; c--) {
            h = a[c];
            for (d in h)
                d in i || (i[d] = h[d])
        }
        return i
    }
    function R(a) {
        var b = function() {}
        ;
        return b.prototype = a,
        new b
    }
    function S(a, b) {
        for (var c in a)
            U(a, c) && (b[c] = a[c])
    }
    function T(a, b) {
        var c, d, e = ["constructor", "toString", "valueOf"];
        for (c = 0; c < e.length; c++)
            d = e[c],
            a[d] !== Object.prototype[d] && (b[d] = a[d])
    }
    function U(a, b) {
        return Va.call(a, b)
    }
    function V(b) {
        return /undefined|null|boolean|number|string/.test(a.type(b))
    }
    function W(b, c, d) {
        if (a.isFunction(b) && (b = [b]),
        b) {
            var e, f;
            for (e = 0; e < b.length; e++)
                f = b[e].apply(c, d) || f;
            return f
        }
    }
    function X() {
        for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a])
                return arguments[a]
    }
    function Y(a) {
        return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function Z(a) {
        return a.replace(/&.*?;/g, "")
    }
    function $(b) {
        var c = [];
        return a.each(b, function(a, b) {
            null  != b && c.push(a + ":" + b)
        }
        ),
        c.join(";")
    }
    function _(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
    function aa(a, b) {
        return a - b
    }
    function ba(a) {
        return a % 1 === 0
    }
    function ca(a, b) {
        var c = a[b];
        return function() {
            return c.apply(a, arguments)
        }
    }
    function da(a, b) {
        var c, d, e, f, g = function() {
            var h = +new Date - f;
            b > h && h > 0 ? c = setTimeout(g, b - h) : (c = null ,
            a.apply(e, d),
            c || (e = d = null ))
        }
        ;
        return function() {
            e = this,
            d = arguments,
            f = +new Date,
            c || (c = setTimeout(g, b))
        }
    }
    function ea(c, d, e) {
        var f, g, h, i, j = c[0], k = 1 == c.length && "string" == typeof j;
        return b.isMoment(j) ? (i = b.apply(null , c),
        ga(j, i)) : O(j) || void 0 === j ? i = b.apply(null , c) : (f = !1,
        g = !1,
        k ? Wa.test(j) ? (j += "-01",
        c = [j],
        f = !0,
        g = !0) : (h = Xa.exec(j)) && (f = !h[5],
        g = !0) : a.isArray(j) && (g = !0),
        i = d || f ? b.utc.apply(b, c) : b.apply(null , c),
        f ? (i._ambigTime = !0,
        i._ambigZone = !0) : e && (g ? i._ambigZone = !0 : k && (i.utcOffset ? i.utcOffset(j) : i.zone(j)))),
        i._fullCalendar = !0,
        i
    }
    function fa(a, c) {
        var d, e, f = !1, g = !1, h = a.length, i = [];
        for (d = 0; h > d; d++)
            e = a[d],
            b.isMoment(e) || (e = Ma.moment.parseZone(e)),
            f = f || e._ambigTime,
            g = g || e._ambigZone,
            i.push(e);
        for (d = 0; h > d; d++)
            e = i[d],
            c || !f || e._ambigTime ? g && !e._ambigZone && (i[d] = e.clone().stripZone()) : i[d] = e.clone().stripTime();
        return i
    }
    function ga(a, b) {
        a._ambigTime ? b._ambigTime = !0 : b._ambigTime && (b._ambigTime = !1),
        a._ambigZone ? b._ambigZone = !0 : b._ambigZone && (b._ambigZone = !1)
    }
    function ha(a, b) {
        a.year(b[0] || 0).month(b[1] || 0).date(b[2] || 0).hours(b[3] || 0).minutes(b[4] || 0).seconds(b[5] || 0).milliseconds(b[6] || 0)
    }
    function ia(a, b) {
        return Za.format.call(a, b)
    }
    function ja(a, b) {
        return ka(a, pa(b))
    }
    function ka(a, b) {
        var c, d = "";
        for (c = 0; c < b.length; c++)
            d += la(a, b[c]);
        return d
    }
    function la(a, b) {
        var c, d;
        return "string" == typeof b ? b : (c = b.token) ? $a[c] ? $a[c](a) : ia(a, c) : b.maybe && (d = ka(a, b.maybe),
        d.match(/[1-9]/)) ? d : ""
    }
    function ma(a, b, c, d, e) {
        var f;
        return a = Ma.moment.parseZone(a),
        b = Ma.moment.parseZone(b),
        f = (a.localeData || a.lang).call(a),
        c = f.longDateFormat(c) || c,
        d = d || " - ",
        na(a, b, pa(c), d, e)
    }
    function na(a, b, c, d, e) {
        var f, g, h, i, j = "", k = "", l = "", m = "", n = "";
        for (g = 0; g < c.length && (f = oa(a, b, c[g]),
        f !== !1); g++)
            j += f;
        for (h = c.length - 1; h > g && (f = oa(a, b, c[h]),
        f !== !1); h--)
            k = f + k;
        for (i = g; h >= i; i++)
            l += la(a, c[i]),
            m += la(b, c[i]);
        return (l || m) && (n = e ? m + d + l : l + d + m),
        j + n + k
    }
    function oa(a, b, c) {
        var d, e;
        return "string" == typeof c ? c : (d = c.token) && (e = _a[d.charAt(0)],
        e && a.isSame(b, e)) ? ia(a, d) : !1
    }
    function pa(a) {
        return a in ab ? ab[a] : ab[a] = qa(a)
    }
    function qa(a) {
        for (var b, c = [], d = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; b = d.exec(a); )
            b[1] ? c.push(b[1]) : b[2] ? c.push({
                maybe: qa(b[2])
            }) : b[3] ? c.push({
                token: b[3]
            }) : b[5] && c.push(b[5]);
        return c
    }
    function ra() {}
    function sa(a, b) {
        return a || b ? a && b ? a.grid === b.grid && a.row === b.row && a.col === b.col : !1 : !0
    }
    function ta(a) {
        var b = va(a);
        return "background" === b || "inverse-background" === b
    }
    function ua(a) {
        return "inverse-background" === va(a)
    }
    function va(a) {
        return X((a.source || {}).rendering, a.rendering)
    }
    function wa(a) {
        var b, c, d = {};
        for (b = 0; b < a.length; b++)
            c = a[b],
            (d[c._id] || (d[c._id] = [])).push(c);
        return d
    }
    function xa(a, b) {
        return a.eventStartMS - b.eventStartMS
    }
    function ya(c) {
        var d, e, f, g, h = Ma.dataAttrPrefix;
        return h && (h += "-"),
        d = c.data(h + "event") || null ,
        d && (d = "object" == typeof d ? a.extend({}, d) : {},
        e = d.start,
        null  == e && (e = d.time),
        f = d.duration,
        g = d.stick,
        delete d.start,
        delete d.time,
        delete d.duration,
        delete d.stick),
        null  == e && (e = c.data(h + "start")),
        null  == e && (e = c.data(h + "time")),
        null  == f && (f = c.data(h + "duration")),
        null  == g && (g = c.data(h + "stick")),
        e = null  != e ? b.duration(e) : null ,
        f = null  != f ? b.duration(f) : null ,
        g = Boolean(g),
        {
            eventProps: d,
            startTime: e,
            duration: f,
            stick: g
        }
    }
    function za(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++)
            if (d = b[c],
            d.leftCol <= a.rightCol && d.rightCol >= a.leftCol)
                return !0;
        return !1
    }
    function Aa(a, b) {
        return a.leftCol - b.leftCol
    }
    function Ba(a) {
        var b, c, d, e = [];
        for (b = 0; b < a.length; b++) {
            for (c = a[b],
            d = 0; d < e.length && Ea(c, e[d]).length; d++)
                ;
            c.level = d,
            (e[d] || (e[d] = [])).push(c)
        }
        return e
    }
    function Ca(a) {
        var b, c, d, e, f;
        for (b = 0; b < a.length; b++)
            for (c = a[b],
            d = 0; d < c.length; d++)
                for (e = c[d],
                e.forwardSegs = [],
                f = b + 1; f < a.length; f++)
                    Ea(e, a[f], e.forwardSegs)
    }
    function Da(a) {
        var b, c, d = a.forwardSegs, e = 0;
        if (void 0 === a.forwardPressure) {
            for (b = 0; b < d.length; b++)
                c = d[b],
                Da(c),
                e = Math.max(e, 1 + c.forwardPressure);
            a.forwardPressure = e
        }
    }
    function Ea(a, b, c) {
        c = c || [];
        for (var d = 0; d < b.length; d++)
            Fa(a, b[d]) && c.push(b[d]);
        return c
    }
    function Fa(a, b) {
        return a.bottom > b.top && a.top < b.bottom
    }
    function Ga(c, d) {
        function e() {
            U ? h() && (k(),
            i()) : f()
        }
        function f() {
            V = O.theme ? "ui" : "fc",
            c.addClass("fc"),
            O.isRTL ? c.addClass("fc-rtl") : c.addClass("fc-ltr"),
            O.theme ? c.addClass("ui-widget") : c.addClass("fc-unthemed"),
            U = a("<div class='fc-view-container'/>").prependTo(c),
            S = N.header = new Ja(N,O),
            T = S.render(),
            T && c.prepend(T),
            i(O.defaultView),
            O.handleWindowResize && (Y = da(m, O.windowResizeDelay),
            a(window).resize(Y))
        }
        function g() {
            W && W.removeElement(),
            S.removeElement(),
            U.remove(),
            c.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),
            Y && a(window).unbind("resize", Y)
        }
        function h() {
            return c.is(":visible")
        }
        function i(b) {
            ca++,
            W && b && W.type !== b && (S.deactivateButton(W.type),
            H(),
            W.removeElement(),
            W = N.view = null ),
            !W && b && (W = N.view = ba[b] || (ba[b] = N.instantiateView(b)),
            W.setElement(a("<div class='fc-view fc-" + b + "-view' />").appendTo(U)),
            S.activateButton(b)),
            W && (Z = W.massageCurrentDate(Z),
            W.displaying && Z.isWithin(W.intervalStart, W.intervalEnd) || h() && (H(),
            W.display(Z),
            I(),
            u(),
            v(),
            q())),
            I(),
            ca--
        }
        function j(a) {
            return h() ? (a && l(),
            ca++,
            W.updateSize(!0),
            ca--,
            !0) : void 0
        }
        function k() {
            h() && l()
        }
        function l() {
            X = "number" == typeof O.contentHeight ? O.contentHeight : "number" == typeof O.height ? O.height - (T ? T.outerHeight(!0) : 0) : Math.round(U.width() / Math.max(O.aspectRatio, .5))
        }
        function m(a) {
            !ca && a.target === window && W.start && j(!0) && W.trigger("windowResize", aa)
        }
        function n() {
            p(),
            r()
        }
        function o() {
            h() && (H(),
            W.displayEvents(ea),
            I())
        }
        function p() {
            H(),
            W.clearEvents(),
            I()
        }
        function q() {
            !O.lazyFetching || $(W.start, W.end) ? r() : o()
        }
        function r() {
            _(W.start, W.end)
        }
        function s(a) {
            ea = a,
            o()
        }
        function t() {
            o()
        }
        function u() {
            S.updateTitle(W.title)
        }
        function v() {
            var a = N.getNow();
            a.isWithin(W.intervalStart, W.intervalEnd) ? S.disableButton("today") : S.enableButton("today")
        }
        function w(a, b) {
            W.select(N.buildSelectRange.apply(N, arguments))
        }
        function x() {
            W && W.unselect()
        }
        function y() {
            Z = W.computePrevDate(Z),
            i()
        }
        function z() {
            Z = W.computeNextDate(Z),
            i()
        }
        function A() {
            Z.add(-1, "years"),
            i()
        }
        function B() {
            Z.add(1, "years"),
            i()
        }
        function C() {
            Z = N.getNow(),
            i()
        }
        function D(a) {
            Z = N.moment(a),
            i()
        }
        function E(a) {
            Z.add(b.duration(a)),
            i()
        }
        function F(a, b) {
            var c;
            b = b || "day",
            c = N.getViewSpec(b) || N.getUnitViewSpec(b),
            Z = a,
            i(c ? c.type : null )
        }
        function G() {
            return Z.clone()
        }
        function H() {
            U.css({
                width: "100%",
                height: U.height(),
                overflow: "hidden"
            })
        }
        function I() {
            U.css({
                width: "",
                height: "",
                overflow: ""
            })
        }
        function J() {
            return N
        }
        function K() {
            return W
        }
        function L(a, b) {
            return void 0 === b ? O[a] : void (("height" == a || "contentHeight" == a || "aspectRatio" == a) && (O[a] = b,
            j(!0)))
        }
        function M(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return b = b || aa,
            this.triggerWith(a, b, c),
            O[a] ? O[a].apply(b, c) : void 0
        }
        var N = this;
        N.initOptions(d || {});
        var O = this.options;
        N.render = e,
        N.destroy = g,
        N.refetchEvents = n,
        N.reportEvents = s,
        N.reportEventChange = t,
        N.rerenderEvents = o,
        N.changeView = i,
        N.select = w,
        N.unselect = x,
        N.prev = y,
        N.next = z,
        N.prevYear = A,
        N.nextYear = B,
        N.today = C,
        N.gotoDate = D,
        N.incrementDate = E,
        N.zoomTo = F,
        N.getDate = G,
        N.getCalendar = J,
        N.getView = K,
        N.option = L,
        N.trigger = M;
        var P = R(Ia(O.lang));
        if (O.monthNames && (P._months = O.monthNames),
        O.monthNamesShort && (P._monthsShort = O.monthNamesShort),
        O.dayNames && (P._weekdays = O.dayNames),
        O.dayNamesShort && (P._weekdaysShort = O.dayNamesShort),
        null  != O.firstDay) {
            var Q = R(P._week);
            Q.dow = O.firstDay,
            P._week = Q
        }
        P._fullCalendar_weekCalc = function(a) {
            return "function" == typeof a ? a : "local" === a ? a : "iso" === a || "ISO" === a ? "ISO" : void 0
        }
        (O.weekNumberCalculation),
        N.defaultAllDayEventDuration = b.duration(O.defaultAllDayEventDuration),
        N.defaultTimedEventDuration = b.duration(O.defaultTimedEventDuration),
        N.moment = function() {
            var a;
            return "local" === O.timezone ? (a = Ma.moment.apply(null , arguments),
            a.hasTime() && a.local()) : a = "UTC" === O.timezone ? Ma.moment.utc.apply(null , arguments) : Ma.moment.parseZone.apply(null , arguments),
            "_locale" in a ? a._locale = P : a._lang = P,
            a
        }
        ,
        N.getIsAmbigTimezone = function() {
            return "local" !== O.timezone && "UTC" !== O.timezone
        }
        ,
        N.rezoneDate = function(a) {
            return N.moment(a.toArray())
        }
        ,
        N.getNow = function() {
            var a = O.now;
            return "function" == typeof a && (a = a()),
            N.moment(a)
        }
        ,
        N.getEventEnd = function(a) {
            return a.end ? a.end.clone() : N.getDefaultEventEnd(a.allDay, a.start)
        }
        ,
        N.getDefaultEventEnd = function(a, b) {
            var c = b.clone();
            return a ? c.stripTime().add(N.defaultAllDayEventDuration) : c.add(N.defaultTimedEventDuration),
            N.getIsAmbigTimezone() && c.stripZone(),
            c
        }
        ,
        N.humanizeDuration = function(a) {
            return (a.locale || a.lang).call(a, O.lang).humanize()
        }
        ,
        Ka.call(N, O);
        var S, T, U, V, W, X, Y, Z, $ = N.isFetchNeeded, _ = N.fetchEvents, aa = c[0], ba = {}, ca = 0, ea = [];
        Z = null  != O.defaultDate ? N.moment(O.defaultDate) : N.getNow(),
        N.getSuggestedViewHeight = function() {
            return void 0 === X && k(),
            X
        }
        ,
        N.isHeightAuto = function() {
            return "auto" === O.contentHeight || "auto" === O.height
        }
        ,
        N.initialize()
    }
    function Ha(b) {
        a.each(rb, function(a, c) {
            null  == b[a] && (b[a] = c(b))
        }
        )
    }
    function Ia(a) {
        var c = b.localeData || b.langData;
        return c.call(b, a) || c.call(b, "en")
    }
    function Ja(b, c) {
        function d() {
            var b = c.header;
            return n = c.theme ? "ui" : "fc",
            b ? o = a("<div class='fc-toolbar'/>").append(f("left")).append(f("right")).append(f("center")).append('<div class="fc-clear"/>') : void 0
        }
        function e() {
            o.remove(),
            o = a()
        }
        function f(d) {
            var e = a('<div class="fc-' + d + '"/>')
              , f = c.header[d];
            return f && a.each(f.split(" "), function(d) {
                var f, g = a(), h = !0;
                a.each(this.split(","), function(d, e) {
                    var f, i, j, k, l, m, o, q, r, s;
                    "title" == e ? (g = g.add(a("<h5>&nbsp;</h5>")),
                    h = !1) : ((f = (b.options.customButtons || {})[e]) ? (j = function(a) {
                        f.click && f.click.call(s[0], a)
                    }
                    ,
                    k = "",
                    l = f.text) : (i = b.getViewSpec(e)) ? (j = function() {
                        b.changeView(e)
                    }
                    ,
                    p.push(e),
                    k = i.buttonTextOverride,
                    l = i.buttonTextDefault) : b[e] && (j = function() {
                        b[e]()
                    }
                    ,
                    k = (b.overrides.buttonText || {})[e],
                    l = c.buttonText[e]),
                    j && (m = f ? f.themeIcon : c.themeButtonIcons[e],
                    o = f ? f.icon : c.buttonIcons[e],
                    q = k ? Y(k) : m && c.theme ? "<span class='ui-icon ui-icon-" + m + "'></span>" : o && !c.theme ? "<span class='fc-icon fc-icon-" + o + "'></span>" : Y(l),
                    r = ["fc-" + e + "-button", n + "-button", n + "-state-default"],
                    s = a('<button type="button" class="mdl-button mdl-js-button mdl-js-ripple-effect ' + r.join(" ") + '">' + q + "</button>").click(function(a) {
                        s.hasClass(n + "-state-disabled") || (j(a),
                        (s.hasClass(n + "-state-active") || s.hasClass(n + "-state-disabled")) && s.removeClass(n + "-state-hover"))
                    }
                    ).mousedown(function() {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-down")
                    }
                    ).mouseup(function() {
                        s.removeClass(n + "-state-down")
                    }
                    ).hover(function() {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-hover")
                    }
                    , function() {
                        s.removeClass(n + "-state-hover").removeClass(n + "-state-down")
                    }
                    ),
                    g = g.add(s)))
                }
                ),
                h && g.first().addClass(n + "-corner-left").end().last().addClass(n + "-corner-right").end(),
                g.length > 1 ? (f = a("<div/>"),
                h && f.addClass("fc-button-group"),
                f.append(g),
                e.append(f)) : e.append(g)
            }
            ),
            e
        }
        function g(a) {
            o.find("h5").text(a)
        }
        function h(a) {
            o.find(".fc-" + a + "-button").addClass(n + "-state-active")
        }
        function i(a) {
            o.find(".fc-" + a + "-button").removeClass(n + "-state-active")
        }
        function j(a) {
            o.find(".fc-" + a + "-button").attr("disabled", "disabled").addClass(n + "-state-disabled")
        }
        function k(a) {
            o.find(".fc-" + a + "-button").removeAttr("disabled").removeClass(n + "-state-disabled")
        }
        function l() {
            return p
        }
        var m = this;
        m.render = d,
        m.removeElement = e,
        m.updateTitle = g,
        m.activateButton = h,
        m.deactivateButton = i,
        m.disableButton = j,
        m.enableButton = k,
        m.getViewsWithButtons = l;
        var n, o = a(), p = []
    }
    function Ka(c) {
        function d(a, b) {
            return !M || a.clone().stripZone() < M.clone().stripZone() || b.clone().stripZone() > N.clone().stripZone()
        }
        function e(a, b) {
            M = a,
            N = b,
            U = [];
            var c = ++S
              , d = R.length;
            T = d;
            for (var e = 0; d > e; e++)
                f(R[e], c)
        }
        function f(b, c) {
            g(b, function(d) {
                var e, f, g, h = a.isArray(b.events);
                if (c == S) {
                    if (d)
                        for (e = 0; e < d.length; e++)
                            f = d[e],
                            g = h ? f : s(f, b),
                            g && U.push.apply(U, x(g));
                    T--,
                    T || O(U)
                }
            }
            )
        }
        function g(b, d) {
            var e, f, h = Ma.sourceFetchers;
            for (e = 0; e < h.length; e++) {
                if (f = h[e].call(L, b, M.clone(), N.clone(), c.timezone, d),
                f === !0)
                    return;
                if ("object" == typeof f)
                    return void g(f, d)
            }
            var i = b.events;
            if (i)
                a.isFunction(i) ? (L.pushLoading(),
                i.call(L, M.clone(), N.clone(), c.timezone, function(a) {
                    d(a),
                    L.popLoading()
                }
                )) : a.isArray(i) ? d(i) : d();
            else {
                var j = b.url;
                if (j) {
                    var k, l = b.success, m = b.error, n = b.complete;
                    k = a.isFunction(b.data) ? b.data() : b.data;
                    var o = a.extend({}, k || {})
                      , p = X(b.startParam, c.startParam)
                      , q = X(b.endParam, c.endParam)
                      , r = X(b.timezoneParam, c.timezoneParam);
                    p && (o[p] = M.format()),
                    q && (o[q] = N.format()),
                    c.timezone && "local" != c.timezone && (o[r] = c.timezone),
                    L.pushLoading(),
                    a.ajax(a.extend({}, sb, b, {
                        data: o,
                        success: function(b) {
                            b = b || [];
                            var c = W(l, this, arguments);
                            a.isArray(c) && (b = c),
                            d(b)
                        },
                        error: function() {
                            W(m, this, arguments),
                            d()
                        },
                        complete: function() {
                            W(n, this, arguments),
                            L.popLoading()
                        }
                    }))
                } else
                    d()
            }
        }
        function h(a) {
            var b = i(a);
            b && (R.push(b),
            T++,
            f(b, S))
        }
        function i(b) {
            var c, d, e = Ma.sourceNormalizers;
            if (a.isFunction(b) || a.isArray(b) ? c = {
                events: b
            } : "string" == typeof b ? c = {
                url: b
            } : "object" == typeof b && (c = a.extend({}, b)),
            c) {
                for (c.className ? "string" == typeof c.className && (c.className = c.className.split(/\s+/)) : c.className = [],
                a.isArray(c.events) && (c.origArray = c.events,
                c.events = a.map(c.events, function(a) {
                    return s(a, c)
                }
                )),
                d = 0; d < e.length; d++)
                    e[d].call(L, c);
                return c
            }
        }
        function j(b) {
            R = a.grep(R, function(a) {
                return !k(a, b)
            }
            ),
            U = a.grep(U, function(a) {
                return !k(a.source, b)
            }
            ),
            O(U)
        }
        function k(a, b) {
            return a && b && l(a) == l(b)
        }
        function l(a) {
            return ("object" == typeof a ? a.origArray || a.googleCalendarId || a.url || a.events : null ) || a
        }
        function m(a) {
            a.start = L.moment(a.start),
            a.end ? a.end = L.moment(a.end) : a.end = null ,
            y(a, n(a)),
            O(U)
        }
        function n(b) {
            var c = {};
            return a.each(b, function(a, b) {
                o(a) && void 0 !== b && V(b) && (c[a] = b)
            }
            ),
            c
        }
        function o(a) {
            return !/^_|^(id|allDay|start|end)$/.test(a)
        }
        function p(a, b) {
            var c, d, e, f = s(a);
            if (f) {
                for (c = x(f),
                d = 0; d < c.length; d++)
                    e = c[d],
                    e.source || (b && (Q.events.push(e),
                    e.source = Q),
                    U.push(e));
                return O(U),
                c
            }
            return []
        }
        function q(b) {
            var c, d;
            for (null  == b ? b = function() {
                return !0
            }
             : a.isFunction(b) || (c = b + "",
            b = function(a) {
                return a._id == c
            }
            ),
            U = a.grep(U, b, !0),
            d = 0; d < R.length; d++)
                a.isArray(R[d].events) && (R[d].events = a.grep(R[d].events, b, !0));
            O(U)
        }
        function r(b) {
            return a.isFunction(b) ? a.grep(U, b) : null  != b ? (b += "",
            a.grep(U, function(a) {
                return a._id == b
            }
            )) : U
        }
        function s(d, e) {
            var f, g, h, i = {};
            if (c.eventDataTransform && (d = c.eventDataTransform(d)),
            e && e.eventDataTransform && (d = e.eventDataTransform(d)),
            a.extend(i, d),
            e && (i.source = e),
            i._id = d._id || (void 0 === d.id ? "_fc" + tb++ : d.id + ""),
            d.className ? "string" == typeof d.className ? i.className = d.className.split(/\s+/) : i.className = d.className : i.className = [],
            f = d.start || d.date,
            g = d.end,
            P(f) && (f = b.duration(f)),
            P(g) && (g = b.duration(g)),
            d.dow || b.isDuration(f) || b.isDuration(g))
                i.start = f ? b.duration(f) : null ,
                i.end = g ? b.duration(g) : null ,
                i._recurring = !0;
            else {
                if (f && (f = L.moment(f),
                !f.isValid()))
                    return !1;
                g && (g = L.moment(g),
                g.isValid() || (g = null )),
                h = d.allDay,
                void 0 === h && (h = X(e ? e.allDayDefault : void 0, c.allDayDefault)),
                t(f, g, h, i)
            }
            return i
        }
        function t(a, b, c, d) {
            d.start = a,
            d.end = b,
            d.allDay = c,
            u(d),
            La(d)
        }
        function u(a) {
            v(a),
            a.end && !a.end.isAfter(a.start) && (a.end = null ),
            a.end || (c.forceEventDuration ? a.end = L.getDefaultEventEnd(a.allDay, a.start) : a.end = null )
        }
        function v(a) {
            null  == a.allDay && (a.allDay = !(a.start.hasTime() || a.end && a.end.hasTime())),
            a.allDay ? (a.start.stripTime(),
            a.end && a.end.stripTime()) : (a.start.hasTime() || (a.start = L.rezoneDate(a.start)),
            a.end && !a.end.hasTime() && (a.end = L.rezoneDate(a.end)))
        }
        function w(b) {
            var c;
            return b.end || (c = b.allDay,
            null  == c && (c = !b.start.hasTime()),
            b = a.extend({}, b),
            b.end = L.getDefaultEventEnd(c, b.start)),
            b
        }
        function x(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n = [];
            if (c = c || M,
            d = d || N,
            b)
                if (b._recurring) {
                    if (f = b.dow)
                        for (e = {},
                        g = 0; g < f.length; g++)
                            e[f[g]] = !0;
                    for (h = c.clone().stripTime(); h.isBefore(d); )
                        (!e || e[h.day()]) && (i = b.start,
                        j = b.end,
                        k = h.clone(),
                        l = null ,
                        i && (k = k.time(i)),
                        j && (l = h.clone().time(j)),
                        m = a.extend({}, b),
                        t(k, l, !i && !j, m),
                        n.push(m)),
                        h.add(1, "days")
                } else
                    n.push(b);
            return n
        }
        function y(b, c, d) {
            function e(a, b) {
                return d ? H(a, b, d) : c.allDay ? G(a, b) : F(a, b)
            }
            var f, g, h, i, j, k, l = {};
            return c = c || {},
            c.start || (c.start = b.start.clone()),
            void 0 === c.end && (c.end = b.end ? b.end.clone() : null ),
            null  == c.allDay && (c.allDay = b.allDay),
            u(c),
            f = {
                start: b._start.clone(),
                end: b._end ? b._end.clone() : L.getDefaultEventEnd(b._allDay, b._start),
                allDay: c.allDay
            },
            u(f),
            g = null  !== b._end && null  === c.end,
            h = e(c.start, f.start),
            c.end ? (i = e(c.end, f.end),
            j = i.subtract(h)) : j = null ,
            a.each(c, function(a, b) {
                o(a) && void 0 !== b && (l[a] = b)
            }
            ),
            k = z(r(b._id), g, c.allDay, h, j, l),
            {
                dateDelta: h,
                durationDelta: j,
                undo: k
            }
        }
        function z(b, c, d, e, f, g) {
            var h = L.getIsAmbigTimezone()
              , i = [];
            return e && !e.valueOf() && (e = null ),
            f && !f.valueOf() && (f = null ),
            a.each(b, function(b, j) {
                var k, l;
                k = {
                    start: j.start.clone(),
                    end: j.end ? j.end.clone() : null ,
                    allDay: j.allDay
                },
                a.each(g, function(a) {
                    k[a] = j[a]
                }
                ),
                l = {
                    start: j._start,
                    end: j._end,
                    allDay: d
                },
                u(l),
                c ? l.end = null  : f && !l.end && (l.end = L.getDefaultEventEnd(l.allDay, l.start)),
                e && (l.start.add(e),
                l.end && l.end.add(e)),
                f && l.end.add(f),
                h && !l.allDay && (e || f) && (l.start.stripZone(),
                l.end && l.end.stripZone()),
                a.extend(j, g, l),
                La(j),
                i.push(function() {
                    a.extend(j, k),
                    La(j)
                }
                )
            }
            ),
            function() {
                for (var a = 0; a < i.length; a++)
                    i[a]()
            }
        }
        function A(b) {
            var d, e = c.businessHours, f = {
                className: "fc-nonbusiness",
                start: "09:00",
                end: "17:00",
                dow: [1, 2, 3, 4, 5],
                rendering: "inverse-background"
            }, g = L.getView();
            return e && (d = a.extend({}, f, "object" == typeof e ? e : {})),
            d ? (b && (d.start = null ,
            d.end = null ),
            x(s(d), g.start, g.end)) : []
        }
        function B(a, b) {
            var d = b.source || {}
              , e = X(b.constraint, d.constraint, c.eventConstraint)
              , f = X(b.overlap, d.overlap, c.eventOverlap);
            return a = w(a),
            E(a, e, f, b)
        }
        function C(a) {
            return E(a, c.selectConstraint, c.selectOverlap)
        }
        function D(b, c) {
            var d, e;
            return c && (d = a.extend({}, c, b),
            e = x(s(d))[0]),
            e ? B(b, e) : (b = w(b),
            C(b))
        }
        function E(b, c, d, e) {
            var f, g, h, i, j, k;
            if (b = a.extend({}, b),
            b.start = b.start.clone().stripZone(),
            b.end = b.end.clone().stripZone(),
            null  != c) {
                for (f = I(c),
                g = !1,
                i = 0; i < f.length; i++)
                    if (J(f[i], b)) {
                        g = !0;
                        break
                    }
                if (!g)
                    return !1
            }
            for (h = L.getPeerEvents(e, b),
            i = 0; i < h.length; i++)
                if (j = h[i],
                K(j, b)) {
                    if (d === !1)
                        return !1;
                    if ("function" == typeof d && !d(j, e))
                        return !1;
                    if (e) {
                        if (k = X(j.overlap, (j.source || {}).overlap),
                        k === !1)
                            return !1;
                        if ("function" == typeof k && !k(e, j))
                            return !1
                    }
                }
            return !0
        }
        function I(a) {
            return "businessHours" === a ? A() : "object" == typeof a ? x(s(a)) : r(a)
        }
        function J(a, b) {
            var c = a.start.clone().stripZone()
              , d = L.getEventEnd(a).stripZone();
            return b.start >= c && b.end <= d
        }
        function K(a, b) {
            var c = a.start.clone().stripZone()
              , d = L.getEventEnd(a).stripZone();
            return b.start < d && b.end > c
        }
        var L = this;
        L.isFetchNeeded = d,
        L.fetchEvents = e,
        L.addEventSource = h,
        L.removeEventSource = j,
        L.updateEvent = m,
        L.renderEvent = p,
        L.removeEvents = q,
        L.clientEvents = r,
        L.mutateEvent = y,
        L.normalizeEventRange = u,
        L.normalizeEventRangeTimes = v,
        L.ensureVisibleEventRange = w;
        var M, N, O = L.reportEvents, Q = {
            events: []
        }, R = [Q], S = 0, T = 0, U = [];
        a.each((c.events ? [c.events] : []).concat(c.eventSources || []), function(a, b) {
            var c = i(b);
            c && R.push(c)
        }
        ),
        L.getBusinessHoursEvents = A,
        L.isEventRangeAllowed = B,
        L.isSelectionRangeAllowed = C,
        L.isExternalDropRangeAllowed = D,
        L.getEventCache = function() {
            return U
        }
    }
    function La(a) {
        a._allDay = a.allDay,
        a._start = a.start.clone(),
        a._end = a.end ? a.end.clone() : null 
    }
    var Ma = a.fullCalendar = {
        version: "2.4.0"
    }
      , Na = Ma.views = {};
    a.fn.fullCalendar = function(b) {
        var c = Array.prototype.slice.call(arguments, 1)
          , d = this;
        return this.each(function(e, f) {
            var g, h = a(f), i = h.data("fullCalendar");
            "string" == typeof b ? i && a.isFunction(i[b]) && (g = i[b].apply(i, c),
            e || (d = g),
            "destroy" === b && h.removeData("fullCalendar")) : i || (i = new nb(h,b),
            h.data("fullCalendar", i),
            i.render())
        }
        ),
        d
    }
    ;
    var Oa = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
    Ma.intersectionToSeg = E,
    Ma.applyAll = W,
    Ma.debounce = da,
    Ma.isInt = ba,
    Ma.htmlEscape = Y,
    Ma.cssToStr = $,
    Ma.proxy = ca,
    Ma.capitaliseFirstLetter = _,
    Ma.getClientRect = p,
    Ma.getContentRect = q,
    Ma.getScrollbarWidths = r;
    var Pa = null ;
    Ma.intersectRects = w,
    Ma.parseFieldSpecs = A,
    Ma.compareByFieldSpecs = B,
    Ma.compareByFieldSpec = C,
    Ma.flexibleCompare = D,
    Ma.computeIntervalUnit = I,
    Ma.divideRangeByDuration = K,
    Ma.divideDurationByDuration = L,
    Ma.multiplyDuration = M,
    Ma.durationHasTime = N;
    var Qa = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
      , Ra = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Ma.log = function() {
        var a = window.console;
        return a && a.log ? a.log.apply(a, arguments) : void 0
    }
    ,
    Ma.warn = function() {
        var a = window.console;
        return a && a.warn ? a.warn.apply(a, arguments) : Ma.log.apply(Ma, arguments)
    }
    ;
    var Sa, Ta, Ua, Va = {}.hasOwnProperty, Wa = /^\s*\d{4}-\d\d$/, Xa = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/, Ya = b.fn, Za = a.extend({}, Ya);
    Ma.moment = function() {
        return ea(arguments)
    }
    ,
    Ma.moment.utc = function() {
        var a = ea(arguments, !0);
        return a.hasTime() && a.utc(),
        a
    }
    ,
    Ma.moment.parseZone = function() {
        return ea(arguments, !0, !0)
    }
    ,
    Ya.clone = function() {
        var a = Za.clone.apply(this, arguments);
        return ga(this, a),
        this._fullCalendar && (a._fullCalendar = !0),
        a
    }
    ,
    Ya.week = Ya.weeks = function(a) {
        var b = (this._locale || this._lang)._fullCalendar_weekCalc;
        return null  == a && "function" == typeof b ? b(this) : "ISO" === b ? Za.isoWeek.apply(this, arguments) : Za.week.apply(this, arguments)
    }
    ,
    Ya.time = function(a) {
        if (!this._fullCalendar)
            return Za.time.apply(this, arguments);
        if (null  == a)
            return b.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
        this._ambigTime = !1,
        b.isDuration(a) || b.isMoment(a) || (a = b.duration(a));
        var c = 0;
        return b.isDuration(a) && (c = 24 * Math.floor(a.asDays())),
        this.hours(c + a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())
    }
    ,
    Ya.stripTime = function() {
        var a;
        return this._ambigTime || (a = this.toArray(),
        this.utc(),
        Ta(this, a.slice(0, 3)),
        this._ambigTime = !0,
        this._ambigZone = !0),
        this
    }
    ,
    Ya.hasTime = function() {
        return !this._ambigTime
    }
    ,
    Ya.stripZone = function() {
        var a, b;
        return this._ambigZone || (a = this.toArray(),
        b = this._ambigTime,
        this.utc(),
        Ta(this, a),
        this._ambigTime = b || !1,
        this._ambigZone = !0),
        this
    }
    ,
    Ya.hasZone = function() {
        return !this._ambigZone
    }
    ,
    Ya.local = function() {
        var a = this.toArray()
          , b = this._ambigZone;
        return Za.local.apply(this, arguments),
        this._ambigTime = !1,
        this._ambigZone = !1,
        b && Ua(this, a),
        this
    }
    ,
    Ya.utc = function() {
        return Za.utc.apply(this, arguments),
        this._ambigTime = !1,
        this._ambigZone = !1,
        this
    }
    ,
    a.each(["zone", "utcOffset"], function(a, b) {
        Za[b] && (Ya[b] = function(a) {
            return null  != a && (this._ambigTime = !1,
            this._ambigZone = !1),
            Za[b].apply(this, arguments)
        }
        )
    }
    ),
    Ya.format = function() {
        return this._fullCalendar && arguments[0] ? ja(this, arguments[0]) : this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : Za.format.apply(this, arguments)
    }
    ,
    Ya.toISOString = function() {
        return this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : Za.toISOString.apply(this, arguments)
    }
    ,
    Ya.isWithin = function(a, b) {
        var c = fa([this, a, b]);
        return c[0] >= c[1] && c[0] < c[2]
    }
    ,
    Ya.isSame = function(a, b) {
        var c;
        return this._fullCalendar ? b ? (c = fa([this, a], !0),
        Za.isSame.call(c[0], c[1], b)) : (a = Ma.moment.parseZone(a),
        Za.isSame.call(this, a) && Boolean(this._ambigTime) === Boolean(a._ambigTime) && Boolean(this._ambigZone) === Boolean(a._ambigZone)) : Za.isSame.apply(this, arguments)
    }
    ,
    a.each(["isBefore", "isAfter"], function(a, b) {
        Ya[b] = function(a, c) {
            var d;
            return this._fullCalendar ? (d = fa([this, a]),
            Za[b].call(d[0], d[1], c)) : Za[b].apply(this, arguments)
        }
    }
    ),
    Sa = "_d" in b() && "updateOffset" in b,
    Ta = Sa ? function(a, c) {
        a._d.setTime(Date.UTC.apply(Date, c)),
        b.updateOffset(a, !1)
    }
     : ha,
    Ua = Sa ? function(a, c) {
        a._d.setTime(+new Date(c[0] || 0,c[1] || 0,c[2] || 0,c[3] || 0,c[4] || 0,c[5] || 0,c[6] || 0)),
        b.updateOffset(a, !1)
    }
     : ha;
    var $a = {
        t: function(a) {
            return ia(a, "a").charAt(0)
        },
        T: function(a) {
            return ia(a, "A").charAt(0)
        }
    };
    Ma.formatRange = ma;
    var _a = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    }
      , ab = {};
    Ma.Class = ra,
    ra.extend = function(a) {
        var b, c = this;
        return a = a || {},
        U(a, "constructor") && (b = a.constructor),
        "function" != typeof b && (b = a.constructor = function() {
            c.apply(this, arguments)
        }
        ),
        b.prototype = R(c.prototype),
        S(a, b.prototype),
        T(a, b.prototype),
        S(c, b),
        b
    }
    ,
    ra.mixin = function(a) {
        S(a.prototype || a, this.prototype)
    }
    ;
    var bb = Ma.Emitter = ra.extend({
        callbackHash: null ,
        on: function(a, b) {
            return this.getCallbacks(a).add(b),
            this
        },
        off: function(a, b) {
            return this.getCallbacks(a).remove(b),
            this
        },
        trigger: function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.triggerWith(a, this, b),
            this
        },
        triggerWith: function(a, b, c) {
            var d = this.getCallbacks(a);
            return d.fireWith(b, c),
            this
        },
        getCallbacks: function(b) {
            var c;
            return this.callbackHash || (this.callbackHash = {}),
            c = this.callbackHash[b],
            c || (c = this.callbackHash[b] = a.Callbacks()),
            c
        }
    })
      , cb = ra.extend({
        isHidden: !0,
        options: null ,
        el: null ,
        documentMousedownProxy: null ,
        margin: 10,
        constructor: function(a) {
            this.options = a || {}
        },
        show: function() {
            this.isHidden && (this.el || this.render(),
            this.el.show(),
            this.position(),
            this.isHidden = !1,
            this.trigger("show"))
        },
        hide: function() {
            this.isHidden || (this.el.hide(),
            this.isHidden = !0,
            this.trigger("hide"))
        },
        render: function() {
            var b = this
              , c = this.options;
            this.el = a('<div class="fc-popover"/>').addClass(c.className || "").css({
                top: 0,
                left: 0
            }).append(c.content).appendTo(c.parentEl),
            this.el.on("click", ".fc-close", function() {
                b.hide()
            }
            ),
            c.autoHide && a(document).on("mousedown", this.documentMousedownProxy = ca(this, "documentMousedown"))
        },
        documentMousedown: function(b) {
            this.el && !a(b.target).closest(this.el).length && this.hide()
        },
        removeElement: function() {
            this.hide(),
            this.el && (this.el.remove(),
            this.el = null ),
            a(document).off("mousedown", this.documentMousedownProxy)
        },
        position: function() {
            var b, c, d, e, f, g = this.options, h = this.el.offsetParent().offset(), i = this.el.outerWidth(), j = this.el.outerHeight(), k = a(window), l = n(this.el);
            e = g.top || 0,
            f = void 0 !== g.left ? g.left : void 0 !== g.right ? g.right - i : 0,
            l.is(window) || l.is(document) ? (l = k,
            b = 0,
            c = 0) : (d = l.offset(),
            b = d.top,
            c = d.left),
            b += k.scrollTop(),
            c += k.scrollLeft(),
            g.viewportConstrain !== !1 && (e = Math.min(e, b + l.outerHeight() - j - this.margin),
            e = Math.max(e, b + this.margin),
            f = Math.min(f, c + l.outerWidth() - i - this.margin),
            f = Math.max(f, c + this.margin)),
            this.el.css({
                top: e - h.top,
                left: f - h.left
            })
        },
        trigger: function(a) {
            this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    })
      , db = ra.extend({
        grid: null ,
        rowCoords: null ,
        colCoords: null ,
        containerEl: null ,
        bounds: null ,
        constructor: function(a) {
            this.grid = a
        },
        build: function() {
            this.grid.build(),
            this.rowCoords = this.grid.computeRowCoords(),
            this.colCoords = this.grid.computeColCoords(),
            this.computeBounds()
        },
        clear: function() {
            this.grid.clear(),
            this.rowCoords = null ,
            this.colCoords = null 
        },
        getCell: function(b, c) {
            var d, e, f, g = this.rowCoords, h = g.length, i = this.colCoords, j = i.length, k = null , l = null ;
            if (this.inBounds(b, c)) {
                for (d = 0; h > d; d++)
                    if (e = g[d],
                    c >= e.top && c < e.bottom) {
                        k = d;
                        break
                    }
                for (d = 0; j > d; d++)
                    if (e = i[d],
                    b >= e.left && b < e.right) {
                        l = d;
                        break
                    }
                if (null  !== k && null  !== l)
                    return f = this.grid.getCell(k, l),
                    f.grid = this.grid,
                    a.extend(f, g[k], i[l]),
                    f
            }
            return null 
        },
        computeBounds: function() {
            this.bounds = this.containerEl ? p(this.containerEl) : null 
        },
        inBounds: function(a, b) {
            var c = this.bounds;
            return c ? a >= c.left && a < c.right && b >= c.top && b < c.bottom : !0
        }
    })
      , eb = ra.extend({
        coordMaps: null ,
        constructor: function(a) {
            this.coordMaps = a
        },
        build: function() {
            var a, b = this.coordMaps;
            for (a = 0; a < b.length; a++)
                b[a].build()
        },
        getCell: function(a, b) {
            var c, d = this.coordMaps, e = null ;
            for (c = 0; c < d.length && !e; c++)
                e = d[c].getCell(a, b);
            return e
        },
        clear: function() {
            var a, b = this.coordMaps;
            for (a = 0; a < b.length; a++)
                b[a].clear()
        }
    })
      , fb = Ma.DragListener = ra.extend({
        options: null ,
        isListening: !1,
        isDragging: !1,
        originX: null ,
        originY: null ,
        mousemoveProxy: null ,
        mouseupProxy: null ,
        subjectEl: null ,
        subjectHref: null ,
        scrollEl: null ,
        scrollBounds: null ,
        scrollTopVel: null ,
        scrollLeftVel: null ,
        scrollIntervalId: null ,
        scrollHandlerProxy: null ,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        constructor: function(a) {
            a = a || {},
            this.options = a,
            this.subjectEl = a.subjectEl
        },
        mousedown: function(a) {
            v(a) && (a.preventDefault(),
            this.startListening(a),
            this.options.distance || this.startDrag(a))
        },
        startListening: function(b) {
            var c;
            this.isListening || (b && this.options.scroll && (c = n(a(b.target)),
            c.is(window) || c.is(document) || (this.scrollEl = c,
            this.scrollHandlerProxy = da(ca(this, "scrollHandler"), 100),
            this.scrollEl.on("scroll", this.scrollHandlerProxy))),
            a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")).on("mouseup", this.mouseupProxy = ca(this, "mouseup")).on("selectstart", this.preventDefault),
            b ? (this.originX = b.pageX,
            this.originY = b.pageY) : (this.originX = 0,
            this.originY = 0),
            this.isListening = !0,
            this.listenStart(b))
        },
        listenStart: function(a) {
            this.trigger("listenStart", a)
        },
        mousemove: function(a) {
            var b, c, d = a.pageX - this.originX, e = a.pageY - this.originY;
            this.isDragging || (b = this.options.distance || 1,
            c = d * d + e * e,
            c >= b * b && this.startDrag(a)),
            this.isDragging && this.drag(d, e, a)
        },
        startDrag: function(a) {
            this.isListening || this.startListening(),
            this.isDragging || (this.isDragging = !0,
            this.dragStart(a))
        },
        dragStart: function(a) {
            var b = this.subjectEl;
            this.trigger("dragStart", a),
            (this.subjectHref = b ? b.attr("href") : null ) && b.removeAttr("href")
        },
        drag: function(a, b, c) {
            this.trigger("drag", a, b, c),
            this.updateScroll(c)
        },
        mouseup: function(a) {
            this.stopListening(a)
        },
        stopDrag: function(a) {
            this.isDragging && (this.stopScrolling(),
            this.dragStop(a),
            this.isDragging = !1)
        },
        dragStop: function(a) {
            var b = this;
            this.trigger("dragStop", a),
            setTimeout(function() {
                b.subjectHref && b.subjectEl.attr("href", b.subjectHref)
            }
            , 0)
        },
        stopListening: function(b) {
            this.stopDrag(b),
            this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy),
            this.scrollHandlerProxy = null ),
            a(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault),
            this.mousemoveProxy = null ,
            this.mouseupProxy = null ,
            this.isListening = !1,
            this.listenStop(b))
        },
        listenStop: function(a) {
            this.trigger("listenStop", a)
        },
        trigger: function(a) {
            this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
        },
        preventDefault: function(a) {
            a.preventDefault()
        },
        computeScrollBounds: function() {
            var a = this.scrollEl;
            this.scrollBounds = a ? o(a) : null 
        },
        updateScroll: function(a) {
            var b, c, d, e, f = this.scrollSensitivity, g = this.scrollBounds, h = 0, i = 0;
            g && (b = (f - (a.pageY - g.top)) / f,
            c = (f - (g.bottom - a.pageY)) / f,
            d = (f - (a.pageX - g.left)) / f,
            e = (f - (g.right - a.pageX)) / f,
            b >= 0 && 1 >= b ? h = b * this.scrollSpeed * -1 : c >= 0 && 1 >= c && (h = c * this.scrollSpeed),
            d >= 0 && 1 >= d ? i = d * this.scrollSpeed * -1 : e >= 0 && 1 >= e && (i = e * this.scrollSpeed)),
            this.setScrollVel(h, i)
        },
        setScrollVel: function(a, b) {
            this.scrollTopVel = a,
            this.scrollLeftVel = b,
            this.constrainScrollVel(),
            !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(ca(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var a = this.scrollEl;
            this.scrollTopVel < 0 ? a.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && a.scrollTop() + a[0].clientHeight >= a[0].scrollHeight && (this.scrollTopVel = 0),
            this.scrollLeftVel < 0 ? a.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && a.scrollLeft() + a[0].clientWidth >= a[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var a = this.scrollEl
              , b = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && a.scrollTop(a.scrollTop() + this.scrollTopVel * b),
            this.scrollLeftVel && a.scrollLeft(a.scrollLeft() + this.scrollLeftVel * b),
            this.constrainScrollVel(),
            this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
        },
        stopScrolling: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId),
            this.scrollIntervalId = null ,
            this.scrollStop())
        },
        scrollHandler: function() {
            this.scrollIntervalId || this.scrollStop()
        },
        scrollStop: function() {}
    })
      , gb = fb.extend({
        coordMap: null ,
        origCell: null ,
        cell: null ,
        coordAdjust: null ,
        constructor: function(a, b) {
            fb.prototype.constructor.call(this, b),
            this.coordMap = a
        },
        listenStart: function(a) {
            var b, c, d, e = this.subjectEl;
            fb.prototype.listenStart.apply(this, arguments),
            this.computeCoords(),
            a ? (c = {
                left: a.pageX,
                top: a.pageY
            },
            d = c,
            e && (b = o(e),
            d = x(d, b)),
            this.origCell = this.getCell(d.left, d.top),
            e && this.options.subjectCenter && (this.origCell && (b = w(this.origCell, b) || b),
            d = y(b)),
            this.coordAdjust = z(d, c)) : (this.origCell = null ,
            this.coordAdjust = null )
        },
        computeCoords: function() {
            this.coordMap.build(),
            this.computeScrollBounds()
        },
        dragStart: function(a) {
            var b;
            fb.prototype.dragStart.apply(this, arguments),
            b = this.getCell(a.pageX, a.pageY),
            b && this.cellOver(b)
        },
        drag: function(a, b, c) {
            var d;
            fb.prototype.drag.apply(this, arguments),
            d = this.getCell(c.pageX, c.pageY),
            sa(d, this.cell) || (this.cell && this.cellOut(),
            d && this.cellOver(d))
        },
        dragStop: function() {
            this.cellDone(),
            fb.prototype.dragStop.apply(this, arguments)
        },
        cellOver: function(a) {
            this.cell = a,
            this.trigger("cellOver", a, sa(a, this.origCell), this.origCell)
        },
        cellOut: function() {
            this.cell && (this.trigger("cellOut", this.cell),
            this.cellDone(),
            this.cell = null )
        },
        cellDone: function() {
            this.cell && this.trigger("cellDone", this.cell)
        },
        listenStop: function() {
            fb.prototype.listenStop.apply(this, arguments),
            this.origCell = this.cell = null ,
            this.coordMap.clear()
        },
        scrollStop: function() {
            fb.prototype.scrollStop.apply(this, arguments),
            this.computeCoords()
        },
        getCell: function(a, b) {
            return this.coordAdjust && (a += this.coordAdjust.left,
            b += this.coordAdjust.top),
            this.coordMap.getCell(a, b)
        }
    })
      , hb = ra.extend({
        options: null ,
        sourceEl: null ,
        el: null ,
        parentEl: null ,
        top0: null ,
        left0: null ,
        mouseY0: null ,
        mouseX0: null ,
        topDelta: null ,
        leftDelta: null ,
        mousemoveProxy: null ,
        isFollowing: !1,
        isHidden: !1,
        isAnimating: !1,
        constructor: function(b, c) {
            this.options = c = c || {},
            this.sourceEl = b,
            this.parentEl = c.parentEl ? a(c.parentEl) : b.parent()
        },
        start: function(b) {
            this.isFollowing || (this.isFollowing = !0,
            this.mouseY0 = b.pageY,
            this.mouseX0 = b.pageX,
            this.topDelta = 0,
            this.leftDelta = 0,
            this.isHidden || this.updatePosition(),
            a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")))
        },
        stop: function(b, c) {
            function d() {
                this.isAnimating = !1,
                e.removeElement(),
                this.top0 = this.left0 = null ,
                c && c()
            }
            var e = this
              , f = this.options.revertDuration;
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1,
            a(document).off("mousemove", this.mousemoveProxy),
            b && f && !this.isHidden ? (this.isAnimating = !0,
            this.el.animate({
                top: this.top0,
                left: this.left0
            }, {
                duration: f,
                complete: d
            })) : d())
        },
        getEl: function() {
            var a = this.el;
            return a || (this.sourceEl.width(),
            a = this.el = this.sourceEl.clone().css({
                position: "absolute",
                visibility: "",
                display: this.isHidden ? "none" : "",
                margin: 0,
                right: "auto",
                bottom: "auto",
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || "",
                zIndex: this.options.zIndex
            }).appendTo(this.parentEl)),
            a
        },
        removeElement: function() {
            this.el && (this.el.remove(),
            this.el = null )
        },
        updatePosition: function() {
            var a, b;
            this.getEl(),
            null  === this.top0 && (this.sourceEl.width(),
            a = this.sourceEl.offset(),
            b = this.el.offsetParent().offset(),
            this.top0 = a.top - b.top,
            this.left0 = a.left - b.left),
            this.el.css({
                top: this.top0 + this.topDelta,
                left: this.left0 + this.leftDelta
            })
        },
        mousemove: function(a) {
            this.topDelta = a.pageY - this.mouseY0,
            this.leftDelta = a.pageX - this.mouseX0,
            this.isHidden || this.updatePosition()
        },
        hide: function() {
            this.isHidden || (this.isHidden = !0,
            this.el && this.el.hide())
        },
        show: function() {
            this.isHidden && (this.isHidden = !1,
            this.updatePosition(),
            this.getEl().show())
        }
    })
      , ib = ra.extend({
        view: null ,
        isRTL: null ,
        cellHtml: "<td/>",
        constructor: function(a) {
            this.view = a,
            this.isRTL = a.opt("isRTL")
        },
        rowHtml: function(a, b) {
            var c, d, e = this.getHtmlRenderer("cell", a), f = "";
            for (b = b || 0,
            c = 0; c < this.colCnt; c++)
                d = this.getCell(b, c),
                f += e(d);
            return f = this.bookendCells(f, a, b),
            "<tr>" + f + "</tr>"
        },
        bookendCells: function(a, b, c) {
            var d = this.getHtmlRenderer("intro", b)(c || 0)
              , e = this.getHtmlRenderer("outro", b)(c || 0)
              , f = this.isRTL ? e : d
              , g = this.isRTL ? d : e;
            return "string" == typeof a ? f + a + g : a.prepend(f).append(g)
        },
        getHtmlRenderer: function(a, b) {
            var c, d, e, f, g = this.view;
            return c = a + "Html",
            b && (d = b + _(a) + "Html"),
            d && (f = g[d]) ? e = g : d && (f = this[d]) ? e = this : (f = g[c]) ? e = g : (f = this[c]) && (e = this),
            "function" == typeof f ? function() {
                return f.apply(e, arguments) || ""
            }
             : function() {
                return f || ""
            }
        }
    })
      , jb = Ma.Grid = ib.extend({
        start: null ,
        end: null ,
        rowCnt: 0,
        colCnt: 0,
        el: null ,
        coordMap: null ,
        elsByFill: null ,
        externalDragStartProxy: null ,
        colHeadFormat: null ,
        eventTimeFormat: null ,
        displayEventTime: null ,
        displayEventEnd: null ,
        cellDuration: null ,
        largeUnit: null ,
        constructor: function() {
            ib.apply(this, arguments),
            this.coordMap = new db(this),
            this.elsByFill = {},
            this.externalDragStartProxy = ca(this, "externalDragStart")
        },
        computeColHeadFormat: function() {},
        computeEventTimeFormat: function() {
            return this.view.opt("smallTimeFormat")
        },
        computeDisplayEventTime: function() {
            return !0
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        setRange: function(a) {
            this.start = a.start.clone(),
            this.end = a.end.clone(),
            this.rangeUpdated(),
            this.processRangeOptions()
        },
        rangeUpdated: function() {},
        processRangeOptions: function() {
            var a, b, c = this.view;
            this.colHeadFormat = c.opt("columnFormat") || this.computeColHeadFormat(),
            this.eventTimeFormat = c.opt("eventTimeFormat") || c.opt("timeFormat") || this.computeEventTimeFormat(),
            a = c.opt("displayEventTime"),
            null  == a && (a = this.computeDisplayEventTime()),
            b = c.opt("displayEventEnd"),
            null  == b && (b = this.computeDisplayEventEnd()),
            this.displayEventTime = a,
            this.displayEventEnd = b
        },
        build: function() {},
        clear: function() {},
        rangeToSegs: function(a) {},
        diffDates: function(a, b) {
            return this.largeUnit ? H(a, b, this.largeUnit) : F(a, b)
        },
        getCell: function(b, c) {
            var d;
            return null  == c && ("number" == typeof b ? (c = b % this.colCnt,
            b = Math.floor(b / this.colCnt)) : (c = b.col,
            b = b.row)),
            d = {
                row: b,
                col: c
            },
            a.extend(d, this.getRowData(b), this.getColData(c)),
            a.extend(d, this.computeCellRange(d)),
            d
        },
        computeCellRange: function(a) {
            var b = this.computeCellDate(a);
            return {
                start: b,
                end: b.clone().add(this.cellDuration)
            }
        },
        computeCellDate: function(a) {},
        getRowData: function(a) {
            return {}
        },
        getColData: function(a) {
            return {}
        },
        getRowEl: function(a) {},
        getColEl: function(a) {},
        getCellDayEl: function(a) {
            return this.getColEl(a.col) || this.getRowEl(a.row)
        },
        computeRowCoords: function() {
            var a, b, c, d = [];
            for (a = 0; a < this.rowCnt; a++)
                b = this.getRowEl(a),
                c = b.offset().top,
                d.push({
                    top: c,
                    bottom: c + b.outerHeight()
                });
            return d
        },
        computeColCoords: function() {
            var a, b, c, d = [];
            for (a = 0; a < this.colCnt; a++)
                b = this.getColEl(a),
                c = b.offset().left,
                d.push({
                    left: c,
                    right: c + b.outerWidth()
                });
            return d
        },
        setElement: function(b) {
            var c = this;
            this.el = b,
            b.on("mousedown", function(b) {
                a(b.target).is(".fc-event-container *, .fc-more") || a(b.target).closest(".fc-popover").length || c.dayMousedown(b)
            }
            ),
            this.bindSegHandlers(),
            this.bindGlobalHandlers()
        },
        removeElement: function() {
            this.unbindGlobalHandlers(),
            this.el.remove()
        },
        renderSkeleton: function() {},
        renderDates: function() {},
        unrenderDates: function() {},
        bindGlobalHandlers: function() {
            a(document).on("dragstart sortstart", this.externalDragStartProxy)
        },
        unbindGlobalHandlers: function() {
            a(document).off("dragstart sortstart", this.externalDragStartProxy)
        },
        dayMousedown: function(a) {
            var b, c, d = this, e = this.view, f = e.opt("selectable"), i = new gb(this.coordMap,{
                scroll: e.opt("dragScroll"),
                dragStart: function() {
                    e.unselect()
                },
                cellOver: function(a, e, h) {
                    h && (b = e ? a : null ,
                    f && (c = d.computeSelection(h, a),
                    c ? d.renderSelection(c) : g()))
                },
                cellOut: function(a) {
                    b = null ,
                    c = null ,
                    d.unrenderSelection(),
                    h()
                },
                listenStop: function(a) {
                    b && e.triggerDayClick(b, d.getCellDayEl(b), a),
                    c && e.reportSelection(c, a),
                    h()
                }
            });
            i.mousedown(a)
        },
        renderRangeHelper: function(a, b) {
            var c = this.fabricateHelperEvent(a, b);
            this.renderHelper(c, b)
        },
        fabricateHelperEvent: function(a, b) {
            var c = b ? R(b.event) : {};
            return c.start = a.start.clone(),
            c.end = a.end ? a.end.clone() : null ,
            c.allDay = null ,
            this.view.calendar.normalizeEventRange(c),
            c.className = (c.className || []).concat("fc-helper"),
            b || (c.editable = !1),
            c
        },
        renderHelper: function(a, b) {},
        unrenderHelper: function() {},
        renderSelection: function(a) {
            this.renderHighlight(this.selectionRangeToSegs(a))
        },
        unrenderSelection: function() {
            this.unrenderHighlight()
        },
        computeSelection: function(a, b) {
            var c, d = [a.start, a.end, b.start, b.end];
            return d.sort(aa),
            c = {
                start: d[0].clone(),
                end: d[3].clone()
            },
            this.view.calendar.isSelectionRangeAllowed(c) ? c : null 
        },
        selectionRangeToSegs: function(a) {
            return this.rangeToSegs(a)
        },
        renderHighlight: function(a) {
            this.renderFill("highlight", a)
        },
        unrenderHighlight: function() {
            this.unrenderFill("highlight")
        },
        highlightSegClasses: function() {
            return ["fc-highlight"]
        },
        renderFill: function(a, b) {},
        unrenderFill: function(a) {
            var b = this.elsByFill[a];
            b && (b.remove(),
            delete this.elsByFill[a])
        },
        renderFillSegEls: function(b, c) {
            var d, e = this, f = this[b + "SegEl"], g = "", h = [];
            if (c.length) {
                for (d = 0; d < c.length; d++)
                    g += this.fillSegHtml(b, c[d]);
                a(g).each(function(b, d) {
                    var g = c[b]
                      , i = a(d);
                    f && (i = f.call(e, g, i)),
                    i && (i = a(i),
                    i.is(e.fillSegTag) && (g.el = i,
                    h.push(g)))
                }
                )
            }
            return h
        },
        fillSegTag: "div",
        fillSegHtml: function(a, b) {
            var c = this[a + "SegClasses"]
              , d = this[a + "SegCss"]
              , e = c ? c.call(this, b) : []
              , f = $(d ? d.call(this, b) : {});
            return "<" + this.fillSegTag + (e.length ? ' class="' + e.join(" ") + '"' : "") + (f ? ' style="' + f + '"' : "") + " />"
        },
        headHtml: function() {
            return '<div class="fc-row ' + this.view.widgetHeaderClass + '"><table><thead>' + this.rowHtml("head") + "</thead></table></div>"
        },
        headCellHtml: function(a) {
            var b = this.view
              , c = a.start;
            return '<th class="fc-day-header ' + b.widgetHeaderClass + " fc-" + Qa[c.day()] + '">' + Y(c.format(this.colHeadFormat)) + "</th>"
        },
        bgCellHtml: function(a) {
            var b = this.view
              , c = a.start
              , d = this.getDayClasses(c);
            return d.unshift("fc-day", b.widgetContentClass),
            '<td class="' + d.join(" ") + '" data-date="' + c.format("YYYY-MM-DD") + '"></td>'
        },
        getDayClasses: function(a) {
            var b = this.view
              , c = b.calendar.getNow().stripTime()
              , d = ["fc-" + Qa[a.day()]];
            return 1 == b.intervalDuration.as("months") && a.month() != b.intervalStart.month() && d.push("fc-other-month"),
            a.isSame(c, "day") ? d.push("fc-today", b.highlightStateClass) : c > a ? d.push("fc-past") : d.push("fc-future"),
            d
        }
    });
    jb.mixin({
        mousedOverSeg: null ,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null ,
        renderEvents: function(a) {
            var b, c, d = this.eventsToSegs(a), e = [], f = [];
            for (b = 0; b < d.length; b++)
                c = d[b],
                ta(c.event) ? e.push(c) : f.push(c);
            e = this.renderBgSegs(e) || e,
            f = this.renderFgSegs(f) || f,
            this.segs = e.concat(f)
        },
        unrenderEvents: function() {
            this.triggerSegMouseout(),
            this.unrenderFgSegs(),
            this.unrenderBgSegs(),
            this.segs = null 
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function(a) {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(b, c) {
            var d, e = this.view, f = "", g = [];
            if (b.length) {
                for (d = 0; d < b.length; d++)
                    f += this.fgSegHtml(b[d], c);
                a(f).each(function(c, d) {
                    var f = b[c]
                      , h = e.resolveEventEl(f.event, a(d));
                    h && (h.data("fc-seg", f),
                    f.el = h,
                    g.push(f))
                }
                )
            }
            return g
        },
        fgSegHtml: function(a, b) {},
        renderBgSegs: function(a) {
            return this.renderFill("bgEvent", a)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(a, b) {
            return this.view.resolveEventEl(a.event, b)
        },
        bgEventSegClasses: function(a) {
            var b = a.event
              , c = b.source || {};
            return ["fc-bgevent"].concat(b.className, c.className || [])
        },
        bgEventSegCss: function(a) {
            var b = this.view
              , c = a.event
              , d = c.source || {};
            return {
                "background-color": c.backgroundColor || c.color || d.backgroundColor || d.color || b.opt("eventBackgroundColor") || b.opt("eventColor")
            }
        },
        businessHoursSegClasses: function(a) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function() {
            var b = this
              , c = this.view;
            a.each({
                mouseenter: function(a, c) {
                    b.triggerSegMouseover(a, c)
                },
                mouseleave: function(a, c) {
                    b.triggerSegMouseout(a, c)
                },
                click: function(a, b) {
                    return c.trigger("eventClick", this, a.event, b)
                },
                mousedown: function(d, e) {
                    a(e.target).is(".fc-resizer") && c.isEventResizable(d.event) ? b.segResizeMousedown(d, e, a(e.target).is(".fc-start-resizer")) : c.isEventDraggable(d.event) && b.segDragMousedown(d, e)
                }
            }, function(c, d) {
                b.el.on(c, ".fc-event-container > *", function(c) {
                    var e = a(this).data("fc-seg");
                    return !e || b.isDraggingSeg || b.isResizingSeg ? void 0 : d.call(this, e, c)
                }
                )
            }
            )
        },
        triggerSegMouseover: function(a, b) {
            this.mousedOverSeg || (this.mousedOverSeg = a,
            this.view.trigger("eventMouseover", a.el[0], a.event, b))
        },
        triggerSegMouseout: function(a, b) {
            b = b || {},
            this.mousedOverSeg && (a = a || this.mousedOverSeg,
            this.mousedOverSeg = null ,
            this.view.trigger("eventMouseout", a.el[0], a.event, b))
        },
        segDragMousedown: function(a, b) {
            var c, d = this, e = this.view, f = e.calendar, i = a.el, j = a.event, k = new hb(a.el,{
                parentEl: e.el,
                opacity: e.opt("dragOpacity"),
                revertDuration: e.opt("dragRevertDuration"),
                zIndex: 2
            }), l = new gb(e.coordMap,{
                distance: 5,
                scroll: e.opt("dragScroll"),
                subjectEl: i,
                subjectCenter: !0,
                listenStart: function(a) {
                    k.hide(),
                    k.start(a)
                },
                dragStart: function(b) {
                    d.triggerSegMouseout(a, b),
                    d.segDragStart(a, b),
                    e.hideEvent(j)
                },
                cellOver: function(b, h, i) {
                    a.cell && (i = a.cell),
                    c = d.computeEventDrop(i, b, j),
                    c && !f.isEventRangeAllowed(c, j) && (g(),
                    c = null ),
                    c && e.renderDrag(c, a) ? k.hide() : k.show(),
                    h && (c = null )
                },
                cellOut: function() {
                    e.unrenderDrag(),
                    k.show(),
                    c = null 
                },
                cellDone: function() {
                    h()
                },
                dragStop: function(b) {
                    k.stop(!c, function() {
                        e.unrenderDrag(),
                        e.showEvent(j),
                        d.segDragStop(a, b),
                        c && e.reportEventDrop(j, c, this.largeUnit, i, b)
                    }
                    )
                },
                listenStop: function() {
                    k.stop()
                }
            });
            l.mousedown(b)
        },
        segDragStart: function(a, b) {
            this.isDraggingSeg = !0,
            this.view.trigger("eventDragStart", a.el[0], a.event, b, {})
        },
        segDragStop: function(a, b) {
            this.isDraggingSeg = !1,
            this.view.trigger("eventDragStop", a.el[0], a.event, b, {})
        },
        computeEventDrop: function(a, b, c) {
            var d, e, f = this.view.calendar, g = a.start, h = b.start;
            return g.hasTime() === h.hasTime() ? (d = this.diffDates(h, g),
            c.allDay && N(d) ? (e = {
                start: c.start.clone(),
                end: f.getEventEnd(c),
                allDay: !1
            },
            f.normalizeEventRangeTimes(e)) : e = {
                start: c.start.clone(),
                end: c.end ? c.end.clone() : null ,
                allDay: c.allDay
            },
            e.start.add(d),
            e.end && e.end.add(d)) : e = {
                start: h.clone(),
                end: null ,
                allDay: !h.hasTime()
            },
            e
        },
        applyDragOpacity: function(a) {
            var b = this.view.opt("dragOpacity");
            null  != b && a.each(function(a, c) {
                c.style.opacity = b
            }
            )
        },
        externalDragStart: function(b, c) {
            var d, e, f = this.view;
            f.opt("droppable") && (d = a((c ? c.item : null ) || b.target),
            e = f.opt("dropAccept"),
            (a.isFunction(e) ? e.call(d[0], d) : d.is(e)) && (this.isDraggingExternal || this.listenToExternalDrag(d, b, c)))
        },
        listenToExternalDrag: function(a, b, c) {
            var d, e, f = this, i = ya(a);
            d = new gb(this.coordMap,{
                listenStart: function() {
                    f.isDraggingExternal = !0
                },
                cellOver: function(a) {
                    e = f.computeExternalDrop(a, i),
                    e ? f.renderDrag(e) : g()
                },
                cellOut: function() {
                    e = null ,
                    f.unrenderDrag(),
                    h()
                },
                dragStop: function() {
                    f.unrenderDrag(),
                    h(),
                    e && f.view.reportExternalDrop(i, e, a, b, c)
                },
                listenStop: function() {
                    f.isDraggingExternal = !1
                }
            }),
            d.startDrag(b)
        },
        computeExternalDrop: function(a, b) {
            var c = {
                start: a.start.clone(),
                end: null 
            };
            return b.startTime && !c.start.hasTime() && c.start.time(b.startTime),
            b.duration && (c.end = c.start.clone().add(b.duration)),
            this.view.calendar.isExternalDropRangeAllowed(c, b.eventProps) ? c : null 
        },
        renderDrag: function(a, b) {},
        unrenderDrag: function() {},
        segResizeMousedown: function(a, b, c) {
            var d, e, f = this, i = this.view, j = i.calendar, k = a.el, l = a.event, m = j.getEventEnd(l);
            d = new gb(this.coordMap,{
                distance: 5,
                scroll: i.opt("dragScroll"),
                subjectEl: k,
                dragStart: function(b) {
                    f.triggerSegMouseout(a, b),
                    f.segResizeStart(a, b)
                },
                cellOver: function(b, d, h) {
                    e = c ? f.computeEventStartResize(h, b, l) : f.computeEventEndResize(h, b, l),
                    e && (j.isEventRangeAllowed(e, l) ? e.start.isSame(l.start) && e.end.isSame(m) && (e = null ) : (g(),
                    e = null )),
                    e && (i.hideEvent(l),
                    f.renderEventResize(e, a))
                },
                cellOut: function() {
                    e = null 
                },
                cellDone: function() {
                    f.unrenderEventResize(),
                    i.showEvent(l),
                    h()
                },
                dragStop: function(b) {
                    f.segResizeStop(a, b),
                    e && i.reportEventResize(l, e, this.largeUnit, k, b)
                }
            }),
            d.mousedown(b)
        },
        segResizeStart: function(a, b) {
            this.isResizingSeg = !0,
            this.view.trigger("eventResizeStart", a.el[0], a.event, b, {})
        },
        segResizeStop: function(a, b) {
            this.isResizingSeg = !1,
            this.view.trigger("eventResizeStop", a.el[0], a.event, b, {})
        },
        computeEventStartResize: function(a, b, c) {
            return this.computeEventResize("start", a, b, c)
        },
        computeEventEndResize: function(a, b, c) {
            return this.computeEventResize("end", a, b, c)
        },
        computeEventResize: function(a, b, c, d) {
            var e, f, g = this.view.calendar, h = this.diffDates(c[a], b[a]);
            return e = {
                start: d.start.clone(),
                end: g.getEventEnd(d),
                allDay: d.allDay
            },
            e.allDay && N(h) && (e.allDay = !1,
            g.normalizeEventRangeTimes(e)),
            e[a].add(h),
            e.start.isBefore(e.end) || (f = d.allDay ? g.defaultAllDayEventDuration : g.defaultTimedEventDuration,
            this.cellDuration && this.cellDuration < f && (f = this.cellDuration),
            "start" == a ? e.start = e.end.clone().subtract(f) : e.end = e.start.clone().add(f)),
            e
        },
        renderEventResize: function(a, b) {},
        unrenderEventResize: function() {},
        getEventTimeText: function(a, b, c) {
            return null  == b && (b = this.eventTimeFormat),
            null  == c && (c = this.displayEventEnd),
            this.displayEventTime && a.start.hasTime() ? c && a.end ? this.view.formatRange(a, b) : a.start.format(b) : ""
        },
        getSegClasses: function(a, b, c) {
            var d = a.event
              , e = ["fc-event", a.isStart ? "fc-start" : "fc-not-start", a.isEnd ? "fc-end" : "fc-not-end"].concat(d.className, d.source ? d.source.className : []);
            return b && e.push("fc-draggable"),
            c && e.push("fc-resizable"),
            e
        },
        getEventSkinCss: function(a) {
            var b = this.view
              , c = a.source || {}
              , d = a.color
              , e = c.color
              , f = b.opt("eventColor");
            return {
                "background-color": a.backgroundColor || d || c.backgroundColor || e || b.opt("eventBackgroundColor") || f,
                "border-color": a.borderColor || d || c.borderColor || e || b.opt("eventBorderColor") || f,
                color: a.textColor || c.textColor || b.opt("eventTextColor")
            }
        },
        eventsToSegs: function(a, b) {
            var c, d = this.eventsToRanges(a), e = [];
            for (c = 0; c < d.length; c++)
                e.push.apply(e, this.eventRangeToSegs(d[c], b));
            return e
        },
        eventsToRanges: function(b) {
            var c = this
              , d = wa(b)
              , e = [];
            return a.each(d, function(a, b) {
                b.length && e.push.apply(e, ua(b[0]) ? c.eventsToInverseRanges(b) : c.eventsToNormalRanges(b))
            }
            ),
            e
        },
        eventsToNormalRanges: function(a) {
            var b, c, d, e, f = this.view.calendar, g = [];
            for (b = 0; b < a.length; b++)
                c = a[b],
                d = c.start.clone().stripZone(),
                e = f.getEventEnd(c).stripZone(),
                g.push({
                    event: c,
                    start: d,
                    end: e,
                    eventStartMS: +d,
                    eventDurationMS: e - d
                });
            return g
        },
        eventsToInverseRanges: function(a) {
            var b, c, d = this.view, e = d.start.clone().stripZone(), f = d.end.clone().stripZone(), g = this.eventsToNormalRanges(a), h = [], i = a[0], j = e;
            for (g.sort(xa),
            b = 0; b < g.length; b++)
                c = g[b],
                c.start > j && h.push({
                    event: i,
                    start: j,
                    end: c.start
                }),
                j = c.end;
            return f > j && h.push({
                event: i,
                start: j,
                end: f
            }),
            h
        },
        eventRangeToSegs: function(a, b) {
            var c, d, e;
            for (a = this.view.calendar.ensureVisibleEventRange(a),
            c = b ? b(a) : this.rangeToSegs(a),
            d = 0; d < c.length; d++)
                e = c[d],
                e.event = a.event,
                e.eventStartMS = a.eventStartMS,
                e.eventDurationMS = a.eventDurationMS;
            return c
        },
        sortSegs: function(a) {
            a.sort(ca(this, "compareSegs"))
        },
        compareSegs: function(a, b) {
            return a.eventStartMS - b.eventStartMS || b.eventDurationMS - a.eventDurationMS || b.event.allDay - a.event.allDay || B(a.event, b.event, this.view.eventOrderSpecs)
        }
    }),
    Ma.dataAttrPrefix = "";
    var kb = jb.extend({
        numbersVisible: !1,
        bottomCoordPadding: 0,
        breakOnWeeks: null ,
        cellDates: null ,
        dayToCellOffsets: null ,
        rowEls: null ,
        dayEls: null ,
        helperEls: null ,
        constructor: function() {
            jb.apply(this, arguments),
            this.cellDuration = b.duration(1, "day")
        },
        renderDates: function(a) {
            var b, c, d, e = this.view, f = this.rowCnt, g = this.colCnt, h = f * g, i = "";
            for (b = 0; f > b; b++)
                i += this.dayRowHtml(b, a);
            for (this.el.html(i),
            this.rowEls = this.el.find(".fc-row"),
            this.dayEls = this.el.find(".fc-day"),
            c = 0; h > c; c++)
                d = this.getCell(c),
                e.trigger("dayRender", null , d.start, this.dayEls.eq(c))
        },
        unrenderDates: function() {
            this.removeSegPopover()
        },
        renderBusinessHours: function() {
            var a = this.view.calendar.getBusinessHoursEvents(!0)
              , b = this.eventsToSegs(a);
            this.renderFill("businessHours", b, "bgevent")
        },
        dayRowHtml: function(a, b) {
            var c = this.view
              , d = ["fc-row", "fc-week", c.widgetContentClass];
            return b && d.push("fc-rigid"),
            '<div class="' + d.join(" ") + '"><div class="fc-bg"><table>' + this.rowHtml("day", a) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.rowHtml("number", a) + "</thead>" : "") + "</table></div></div>"
        },
        dayCellHtml: function(a) {
            return this.bgCellHtml(a)
        },
        computeColHeadFormat: function() {
            return this.rowCnt > 1 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        computeEventTimeFormat: function() {
            return this.view.opt("extraSmallTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return 1 == this.colCnt
        },
        rangeUpdated: function() {
            var a, b, c, d;
            if (this.updateCellDates(),
            a = this.cellDates,
            this.breakOnWeeks) {
                for (b = a[0].day(),
                d = 1; d < a.length && a[d].day() != b; d++)
                    ;
                c = Math.ceil(a.length / d)
            } else
                c = 1,
                d = a.length;
            this.rowCnt = c,
            this.colCnt = d
        },
        updateCellDates: function() {
            for (var a = this.view, b = this.start.clone(), c = [], d = -1, e = []; b.isBefore(this.end); )
                a.isHiddenDay(b) ? e.push(d + .5) : (d++,
                e.push(d),
                c.push(b.clone())),
                b.add(1, "days");
            this.cellDates = c,
            this.dayToCellOffsets = e
        },
        computeCellDate: function(a) {
            var b = this.colCnt
              , c = a.row * b + (this.isRTL ? b - a.col - 1 : a.col);
            return this.cellDates[c].clone()
        },
        getRowEl: function(a) {
            return this.rowEls.eq(a)
        },
        getColEl: function(a) {
            return this.dayEls.eq(a)
        },
        getCellDayEl: function(a) {
            return this.dayEls.eq(a.row * this.colCnt + a.col)
        },
        computeRowCoords: function() {
            var a = jb.prototype.computeRowCoords.call(this);
            return a[a.length - 1].bottom += this.bottomCoordPadding,
            a
        },
        rangeToSegs: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l = this.isRTL, m = this.rowCnt, n = this.colCnt, o = [];
            for (a = this.view.computeDayRange(a),
            b = this.dateToCellOffset(a.start),
            c = this.dateToCellOffset(a.end.subtract(1, "days")),
            d = 0; m > d; d++)
                e = d * n,
                f = e + n - 1,
                i = Math.max(e, b),
                j = Math.min(f, c),
                i = Math.ceil(i),
                j = Math.floor(j),
                j >= i && (g = i === b,
                h = j === c,
                i -= e,
                j -= e,
                k = {
                    row: d,
                    isStart: g,
                    isEnd: h
                },
                l ? (k.leftCol = n - j - 1,
                k.rightCol = n - i - 1) : (k.leftCol = i,
                k.rightCol = j),
                o.push(k));
            return o
        },
        dateToCellOffset: function(a) {
            var b = this.dayToCellOffsets
              , c = a.diff(this.start, "days");
            return 0 > c ? b[0] - 1 : c >= b.length ? b[b.length - 1] + 1 : b[c]
        },
        renderDrag: function(a, b) {
            return this.renderHighlight(this.eventRangeToSegs(a)),
            b && !b.el.closest(this.el).length ? (this.renderRangeHelper(a, b),
            this.applyDragOpacity(this.helperEls),
            !0) : void 0
        },
        unrenderDrag: function() {
            this.unrenderHighlight(),
            this.unrenderHelper()
        },
        renderEventResize: function(a, b) {
            this.renderHighlight(this.eventRangeToSegs(a)),
            this.renderRangeHelper(a, b)
        },
        unrenderEventResize: function() {
            this.unrenderHighlight(),
            this.unrenderHelper()
        },
        renderHelper: function(b, c) {
            var d, e = [], f = this.eventsToSegs([b]);
            f = this.renderFgSegEls(f),
            d = this.renderSegRows(f),
            this.rowEls.each(function(b, f) {
                var g, h = a(f), i = a('<div class="fc-helper-skeleton"><table/></div>');
                g = c && c.row === b ? c.el.position().top : h.find(".fc-content-skeleton tbody").position().top,
                i.css("top", g).find("table").append(d[b].tbodyEl),
                h.append(i),
                e.push(i[0])
            }
            ),
            this.helperEls = a(e)
        },
        unrenderHelper: function() {
            this.helperEls && (this.helperEls.remove(),
            this.helperEls = null )
        },
        fillSegTag: "td",
        renderFill: function(b, c, d) {
            var e, f, g, h = [];
            for (c = this.renderFillSegEls(b, c),
            e = 0; e < c.length; e++)
                f = c[e],
                g = this.renderFillRow(b, f, d),
                this.rowEls.eq(f.row).append(g),
                h.push(g[0]);
            return this.elsByFill[b] = a(h),
            c
        },
        renderFillRow: function(b, c, d) {
            var e, f, g = this.colCnt, h = c.leftCol, i = c.rightCol + 1;
            return d = d || b.toLowerCase(),
            e = a('<div class="fc-' + d + '-skeleton"><table><tr/></table></div>'),
            f = e.find("tr"),
            h > 0 && f.append('<td colspan="' + h + '"/>'),
            f.append(c.el.attr("colspan", i - h)),
            g > i && f.append('<td colspan="' + (g - i) + '"/>'),
            this.bookendCells(f, b),
            e
        }
    });
    kb.mixin({
        rowStructs: null ,
        unrenderEvents: function() {
            this.removeSegPopover(),
            jb.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return jb.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(b) {
            var c = a.grep(b, function(a) {
                return a.event.allDay
            }
            );
            return jb.prototype.renderBgSegs.call(this, c)
        },
        renderFgSegs: function(b) {
            var c;
            return b = this.renderFgSegEls(b),
            c = this.rowStructs = this.renderSegRows(b),
            this.rowEls.each(function(b, d) {
                a(d).find(".fc-content-skeleton > table").append(c[b].tbodyEl)
            }
            ),
            b
        },
        unrenderFgSegs: function() {
            for (var a, b = this.rowStructs || []; a = b.pop(); )
                a.tbodyEl.remove();
            this.rowStructs = null 
        },
        renderSegRows: function(a) {
            var b, c, d = [];
            for (b = this.groupSegRows(a),
            c = 0; c < b.length; c++)
                d.push(this.renderSegRow(c, b[c]));
            return d
        },
        fgSegHtml: function(a, b) {
            var c, d, e = this.view, f = a.event, g = e.isEventDraggable(f), h = !b && f.allDay && a.isStart && e.isEventResizableFromStart(f), i = !b && f.allDay && a.isEnd && e.isEventResizableFromEnd(f), j = this.getSegClasses(a, g, h || i), k = $(this.getEventSkinCss(f)), l = "";
            return j.unshift("fc-day-grid-event", "fc-h-event"),
            a.isStart && (c = this.getEventTimeText(f),
            c && (l = '<span class="fc-time">' + Y(c) + "</span>")),
            d = '<span class="fc-title">' + (Y(f.title || "") || "&nbsp;") + "</span>",
            '<a class="' + j.join(" ") + '"' + (f.url ? ' href="' + Y(f.url) + '"' : "") + (k ? ' style="' + k + '"' : "") + '><div class="fc-content">' + (this.isRTL ? d + " " + l : l + " " + d) + "</div>" + (h ? '<div class="fc-resizer fc-start-resizer" />' : "") + (i ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function(b, c) {
            function d(b) {
                for (; b > g; )
                    k = (r[e - 1] || [])[g],
                    k ? k.attr("rowspan", parseInt(k.attr("rowspan") || 1, 10) + 1) : (k = a("<td/>"),
                    h.append(k)),
                    q[e][g] = k,
                    r[e][g] = k,
                    g++
            }
            var e, f, g, h, i, j, k, l = this.colCnt, m = this.buildSegLevels(c), n = Math.max(1, m.length), o = a("<tbody/>"), p = [], q = [], r = [];
            for (e = 0; n > e; e++) {
                if (f = m[e],
                g = 0,
                h = a("<tr/>"),
                p.push([]),
                q.push([]),
                r.push([]),
                f)
                    for (i = 0; i < f.length; i++) {
                        for (j = f[i],
                        d(j.leftCol),
                        k = a('<td class="fc-event-container"/>').append(j.el),
                        j.leftCol != j.rightCol ? k.attr("colspan", j.rightCol - j.leftCol + 1) : r[e][g] = k; g <= j.rightCol; )
                            q[e][g] = k,
                            p[e][g] = j,
                            g++;
                        h.append(k)
                    }
                d(l),
                this.bookendCells(h, "eventSkeleton"),
                o.append(h)
            }
            return {
                row: b,
                tbodyEl: o,
                cellMatrix: q,
                segMatrix: p,
                segLevels: m,
                segs: c
            }
        },
        buildSegLevels: function(a) {
            var b, c, d, e = [];
            for (this.sortSegs(a),
            b = 0; b < a.length; b++) {
                for (c = a[b],
                d = 0; d < e.length && za(c, e[d]); d++)
                    ;
                c.level = d,
                (e[d] || (e[d] = [])).push(c)
            }
            for (d = 0; d < e.length; d++)
                e[d].sort(Aa);
            return e
        },
        groupSegRows: function(a) {
            var b, c = [];
            for (b = 0; b < this.rowCnt; b++)
                c.push([]);
            for (b = 0; b < a.length; b++)
                c[a[b].row].push(a[b]);
            return c
        }
    }),
    kb.mixin({
        segPopover: null ,
        popoverSegs: null ,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(a) {
            var b, c, d = this.rowStructs || [];
            for (b = 0; b < d.length; b++)
                this.unlimitRow(b),
                c = a ? "number" == typeof a ? a : this.computeRowLevelLimit(b) : !1,
                c !== !1 && this.limitRow(b, c)
        },
        computeRowLevelLimit: function(b) {
            function c(b, c) {
                f = Math.max(f, a(c).outerHeight())
            }
            var d, e, f, g = this.rowEls.eq(b), h = g.height(), i = this.rowStructs[b].tbodyEl.children();
            for (d = 0; d < i.length; d++)
                if (e = i.eq(d).removeClass("fc-limited"),
                f = 0,
                e.find("> td > :first-child").each(c),
                e.position().top + f > h)
                    return d;
            return !1
        },
        limitRow: function(b, c) {
            function d(d) {
                for (; d > x; )
                    e = u.getCell(b, x),
                    k = u.getCellSegs(e, c),
                    k.length && (n = g[c - 1][x],
                    t = u.renderMoreLink(e, k),
                    s = a("<div/>").append(t),
                    n.append(s),
                    w.push(s[0])),
                    x++
            }
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = this, v = this.rowStructs[b], w = [], x = 0;
            if (c && c < v.segLevels.length) {
                for (f = v.segLevels[c - 1],
                g = v.cellMatrix,
                h = v.tbodyEl.children().slice(c).addClass("fc-limited").get(),
                i = 0; i < f.length; i++) {
                    for (j = f[i],
                    d(j.leftCol),
                    m = [],
                    l = 0; x <= j.rightCol; )
                        e = this.getCell(b, x),
                        k = this.getCellSegs(e, c),
                        m.push(k),
                        l += k.length,
                        x++;
                    if (l) {
                        for (n = g[c - 1][j.leftCol],
                        o = n.attr("rowspan") || 1,
                        p = [],
                        q = 0; q < m.length; q++)
                            r = a('<td class="fc-more-cell"/>').attr("rowspan", o),
                            k = m[q],
                            e = this.getCell(b, j.leftCol + q),
                            t = this.renderMoreLink(e, [j].concat(k)),
                            s = a("<div/>").append(t),
                            r.append(s),
                            p.push(r[0]),
                            w.push(r[0]);
                        n.addClass("fc-limited").after(a(p)),
                        h.push(n[0])
                    }
                }
                d(this.colCnt),
                v.moreEls = a(w),
                v.limitedEls = a(h)
            }
        },
        unlimitRow: function(a) {
            var b = this.rowStructs[a];
            b.moreEls && (b.moreEls.remove(),
            b.moreEls = null ),
            b.limitedEls && (b.limitedEls.removeClass("fc-limited"),
            b.limitedEls = null )
        },
        renderMoreLink: function(b, c) {
            var d = this
              , e = this.view;
            return a('<a class="fc-more"/>').text(this.getMoreLinkText(c.length)).on("click", function(f) {
                var g = e.opt("eventLimitClick")
                  , h = b.start
                  , i = a(this)
                  , j = d.getCellDayEl(b)
                  , k = d.getCellSegs(b)
                  , l = d.resliceDaySegs(k, h)
                  , m = d.resliceDaySegs(c, h);
                "function" == typeof g && (g = e.trigger("eventLimitClick", null , {
                    date: h,
                    dayEl: j,
                    moreEl: i,
                    segs: l,
                    hiddenSegs: m
                }, f)),
                "popover" === g ? d.showSegPopover(b, i, l) : "string" == typeof g && e.calendar.zoomTo(h, g)
            }
            )
        },
        showSegPopover: function(a, b, c) {
            var d, e, f = this, g = this.view, h = b.parent();
            d = 1 == this.rowCnt ? g.el : this.rowEls.eq(a.row),
            e = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(a, c),
                parentEl: this.el,
                top: d.offset().top,
                autoHide: !0,
                viewportConstrain: g.opt("popoverViewportConstrain"),
                hide: function() {
                    f.segPopover.removeElement(),
                    f.segPopover = null ,
                    f.popoverSegs = null 
                }
            },
            this.isRTL ? e.right = h.offset().left + h.outerWidth() + 1 : e.left = h.offset().left - 1,
            this.segPopover = new cb(e),
            this.segPopover.show()
        },
        renderSegPopoverContent: function(b, c) {
            var d, e = this.view, f = e.opt("theme"), g = b.start.format(e.opt("dayPopoverFormat")), h = a('<div class="fc-header ' + e.widgetHeaderClass + '"><span class="fc-close ' + (f ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + Y(g) + '</span><div class="fc-clear"/></div><div class="fc-body ' + e.widgetContentClass + '"><div class="fc-event-container"></div></div>'), i = h.find(".fc-event-container");
            for (c = this.renderFgSegEls(c, !0),
            this.popoverSegs = c,
            d = 0; d < c.length; d++)
                c[d].cell = b,
                i.append(c[d].el);
            return h
        },
        resliceDaySegs: function(b, c) {
            var d = a.map(b, function(a) {
                return a.event
            }
            )
              , e = c.clone().stripTime()
              , f = e.clone().add(1, "days")
              , g = {
                start: e,
                end: f
            };
            return b = this.eventsToSegs(d, function(a) {
                var b = E(a, g);
                return b ? [b] : []
            }
            ),
            this.sortSegs(b),
            b
        },
        getMoreLinkText: function(a) {
            var b = this.view.opt("eventLimitText");
            return "function" == typeof b ? b(a) : "+" + a + " " + b
        },
        getCellSegs: function(a, b) {
            for (var c, d = this.rowStructs[a.row].segMatrix, e = b || 0, f = []; e < d.length; )
                c = d[e][a.col],
                c && f.push(c),
                e++;
            return f
        }
    });
    var lb = jb.extend({
        slotDuration: null ,
        snapDuration: null ,
        minTime: null ,
        maxTime: null ,
        colDates: null ,
        labelFormat: null ,
        labelInterval: null ,
        dayEls: null ,
        slatEls: null ,
        slatTops: null ,
        helperEl: null ,
        businessHourSegs: null ,
        constructor: function() {
            jb.apply(this, arguments),
            this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml()),
            this.dayEls = this.el.find(".fc-day"),
            this.slatEls = this.el.find(".fc-slats tr")
        },
        renderBusinessHours: function() {
            var a = this.view.calendar.getBusinessHoursEvents();
            this.businessHourSegs = this.renderFill("businessHours", this.eventsToSegs(a), "bgevent")
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.rowHtml("slotBg") + '</table></div><div class="fc-slats"><table>' + this.slatRowHtml() + "</table></div>"
        },
        slotBgCellHtml: function(a) {
            return this.bgCellHtml(a)
        },
        slatRowHtml: function() {
            for (var a, c, d, e = this.view, f = this.isRTL, g = "", h = b.duration(+this.minTime); h < this.maxTime; )
                a = this.start.clone().time(h),
                c = ba(L(h, this.labelInterval)),
                d = '<td class="fc-axis fc-time ' + e.widgetContentClass + '" ' + e.axisStyleAttr() + ">" + (c ? "<span>" + Y(a.format(this.labelFormat)) + "</span>" : "") + "</td>",
                g += "<tr " + (c ? "" : 'class="fc-minor"') + ">" + (f ? "" : d) + '<td class="' + e.widgetContentClass + '"/>' + (f ? d : "") + "</tr>",
                h.add(this.slotDuration);
            return g
        },
        processOptions: function() {
            var c, d = this.view, e = d.opt("slotDuration"), f = d.opt("snapDuration");
            e = b.duration(e),
            f = f ? b.duration(f) : e,
            this.slotDuration = e,
            this.snapDuration = f,
            this.cellDuration = f,
            this.minTime = b.duration(d.opt("minTime")),
            this.maxTime = b.duration(d.opt("maxTime")),
            c = d.opt("slotLabelFormat"),
            a.isArray(c) && (c = c[c.length - 1]),
            this.labelFormat = c || d.opt("axisFormat") || d.opt("smallTimeFormat"),
            c = d.opt("slotLabelInterval"),
            this.labelInterval = c ? b.duration(c) : this.computeLabelInterval(e)
        },
        computeLabelInterval: function(a) {
            var c, d, e;
            for (c = yb.length - 1; c >= 0; c--)
                if (d = b.duration(yb[c]),
                e = L(d, a),
                ba(e) && e > 1)
                    return d;
            return b.duration(a)
        },
        computeColHeadFormat: function() {
            return this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        computeEventTimeFormat: function() {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        rangeUpdated: function() {
            var a, b = this.view, c = [];
            for (a = this.start.clone(); a.isBefore(this.end); )
                c.push(a.clone()),
                a.add(1, "day"),
                a = b.skipHiddenDays(a);
            this.isRTL && c.reverse(),
            this.colDates = c,
            this.colCnt = c.length,
            this.rowCnt = Math.ceil((this.maxTime - this.minTime) / this.snapDuration)
        },
        computeCellDate: function(a) {
            var b = this.colDates[a.col]
              , c = this.computeSnapTime(a.row);
            return b = this.view.calendar.rezoneDate(b),
            b.time(c),
            b
        },
        getColEl: function(a) {
            return this.dayEls.eq(a)
        },
        computeSnapTime: function(a) {
            return b.duration(this.minTime + this.snapDuration * a)
        },
        rangeToSegs: function(a) {
            var b, c, d, e, f = this.colCnt, g = [];
            for (a = {
                start: a.start.clone().stripZone(),
                end: a.end.clone().stripZone()
            },
            c = 0; f > c; c++)
                d = this.colDates[c],
                e = {
                    start: d.clone().time(this.minTime),
                    end: d.clone().time(this.maxTime)
                },
                b = E(a, e),
                b && (b.col = c,
                g.push(b));
            return g
        },
        updateSize: function(a) {
            this.computeSlatTops(),
            a && this.updateSegVerticals()
        },
        computeRowCoords: function() {
            var a, b, c = this.el.offset().top, d = [];
            for (a = 0; a < this.rowCnt; a++)
                b = {
                    top: c + this.computeTimeTop(this.computeSnapTime(a))
                },
                a > 0 && (d[a - 1].bottom = b.top),
                d.push(b);
            return b.bottom = b.top + this.computeTimeTop(this.computeSnapTime(a)),
            d
        },
        computeDateTop: function(a, c) {
            return this.computeTimeTop(b.duration(a.clone().stripZone() - c.clone().stripTime()))
        },
        computeTimeTop: function(a) {
            var b, c, d, e, f = (a - this.minTime) / this.slotDuration;
            return f = Math.max(0, f),
            f = Math.min(this.slatEls.length, f),
            b = Math.floor(f),
            c = f - b,
            d = this.slatTops[b],
            c ? (e = this.slatTops[b + 1],
            d + (e - d) * c) : d
        },
        computeSlatTops: function() {
            var b, c = [];
            this.slatEls.each(function(d, e) {
                b = a(e).position().top,
                c.push(b)
            }
            ),
            c.push(b + this.slatEls.last().outerHeight()),
            this.slatTops = c
        },
        renderDrag: function(a, b) {
            return b ? (this.renderRangeHelper(a, b),
            this.applyDragOpacity(this.helperEl),
            !0) : void this.renderHighlight(this.eventRangeToSegs(a))
        },
        unrenderDrag: function() {
            this.unrenderHelper(),
            this.unrenderHighlight()
        },
        renderEventResize: function(a, b) {
            this.renderRangeHelper(a, b)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelper: function(b, c) {
            var d, e, f, g, h = this.eventsToSegs([b]);
            for (h = this.renderFgSegEls(h),
            d = this.renderSegTable(h),
            e = 0; e < h.length; e++)
                f = h[e],
                c && c.col === f.col && (g = c.el,
                f.el.css({
                    left: g.css("left"),
                    right: g.css("right"),
                    "margin-left": g.css("margin-left"),
                    "margin-right": g.css("margin-right")
                }));
            this.helperEl = a('<div class="fc-helper-skeleton"/>').append(d).appendTo(this.el)
        },
        unrenderHelper: function() {
            this.helperEl && (this.helperEl.remove(),
            this.helperEl = null )
        },
        renderSelection: function(a) {
            this.view.opt("selectHelper") ? this.renderRangeHelper(a) : this.renderHighlight(this.selectionRangeToSegs(a))
        },
        unrenderSelection: function() {
            this.unrenderHelper(),
            this.unrenderHighlight()
        },
        renderFill: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if (c.length) {
                for (c = this.renderFillSegEls(b, c),
                e = this.groupSegCols(c),
                d = d || b.toLowerCase(),
                f = a('<div class="fc-' + d + '-skeleton"><table><tr/></table></div>'),
                g = f.find("tr"),
                h = 0; h < e.length; h++)
                    if (i = e[h],
                    j = a("<td/>").appendTo(g),
                    i.length)
                        for (k = a('<div class="fc-' + d + '-container"/>').appendTo(j),
                        l = this.colDates[h],
                        m = 0; m < i.length; m++)
                            n = i[m],
                            k.append(n.el.css({
                                top: this.computeDateTop(n.start, l),
                                bottom: -this.computeDateTop(n.end, l)
                            }));
                this.bookendCells(g, b),
                this.el.append(f),
                this.elsByFill[b] = f
            }
            return c
        }
    });
    lb.mixin({
        eventSkeletonEl: null ,
        renderFgSegs: function(b) {
            return b = this.renderFgSegEls(b),
            this.el.append(this.eventSkeletonEl = a('<div class="fc-content-skeleton"/>').append(this.renderSegTable(b))),
            b
        },
        unrenderFgSegs: function(a) {
            this.eventSkeletonEl && (this.eventSkeletonEl.remove(),
            this.eventSkeletonEl = null )
        },
        renderSegTable: function(b) {
            var c, d, e, f, g, h, i = a("<table><tr/></table>"), j = i.find("tr");
            for (c = this.groupSegCols(b),
            this.computeSegVerticals(b),
            f = 0; f < c.length; f++) {
                for (g = c[f],
                this.placeSlotSegs(g),
                h = a('<div class="fc-event-container"/>'),
                d = 0; d < g.length; d++)
                    e = g[d],
                    e.el.css(this.generateSegPositionCss(e)),
                    e.bottom - e.top < 30 && e.el.addClass("fc-short"),
                    h.append(e.el);
                j.append(a("<td/>").append(h))
            }
            return this.bookendCells(j, "eventSkeleton"),
            i
        },
        placeSlotSegs: function(a) {
            var b, c, d;
            if (this.sortSegs(a),
            b = Ba(a),
            Ca(b),
            c = b[0]) {
                for (d = 0; d < c.length; d++)
                    Da(c[d]);
                for (d = 0; d < c.length; d++)
                    this.computeSlotSegCoords(c[d], 0, 0)
            }
        },
        computeSlotSegCoords: function(a, b, c) {
            var d, e = a.forwardSegs;
            if (void 0 === a.forwardCoord)
                for (e.length ? (this.sortForwardSlotSegs(e),
                this.computeSlotSegCoords(e[0], b + 1, c),
                a.forwardCoord = e[0].backwardCoord) : a.forwardCoord = 1,
                a.backwardCoord = a.forwardCoord - (a.forwardCoord - c) / (b + 1),
                d = 0; d < e.length; d++)
                    this.computeSlotSegCoords(e[d], 0, a.forwardCoord)
        },
        updateSegVerticals: function() {
            var a, b = (this.segs || []).concat(this.businessHourSegs || []);
            for (this.computeSegVerticals(b),
            a = 0; a < b.length; a++)
                b[a].el.css(this.generateSegVerticalCss(b[a]))
        },
        computeSegVerticals: function(a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                c = a[b],
                c.top = this.computeDateTop(c.start, c.start),
                c.bottom = this.computeDateTop(c.end, c.start)
        },
        fgSegHtml: function(a, b) {
            var c, d, e, f = this.view, g = a.event, h = f.isEventDraggable(g), i = !b && a.isStart && f.isEventResizableFromStart(g), j = !b && a.isEnd && f.isEventResizableFromEnd(g), k = this.getSegClasses(a, h, i || j), l = $(this.getEventSkinCss(g));
            return k.unshift("fc-time-grid-event", "fc-v-event"),
            f.isMultiDayEvent(g) ? (a.isStart || a.isEnd) && (c = this.getEventTimeText(a),
            d = this.getEventTimeText(a, "LT"),
            e = this.getEventTimeText(a, null , !1)) : (c = this.getEventTimeText(g),
            d = this.getEventTimeText(g, "LT"),
            e = this.getEventTimeText(g, null , !1)),
            '<a class="' + k.join(" ") + '"' + (g.url ? ' href="' + Y(g.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + '><div class="fc-content">' + (c ? '<div class="fc-time" data-start="' + Y(e) + '" data-full="' + Y(d) + '"><span>' + Y(c) + "</span></div>" : "") + (g.title ? '<div class="fc-title">' + Y(g.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (j ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        generateSegPositionCss: function(a) {
            var b, c, d = this.view.opt("slotEventOverlap"), e = a.backwardCoord, f = a.forwardCoord, g = this.generateSegVerticalCss(a);
            return d && (f = Math.min(1, e + 2 * (f - e))),
            this.isRTL ? (b = 1 - f,
            c = e) : (b = e,
            c = 1 - f),
            g.zIndex = a.level + 1,
            g.left = 100 * b + "%",
            g.right = 100 * c + "%",
            d && a.forwardPressure && (g[this.isRTL ? "marginLeft" : "marginRight"] = 20),
            g
        },
        generateSegVerticalCss: function(a) {
            return {
                top: a.top,
                bottom: -a.bottom
            }
        },
        groupSegCols: function(a) {
            var b, c = [];
            for (b = 0; b < this.colCnt; b++)
                c.push([]);
            for (b = 0; b < a.length; b++)
                c[a[b].col].push(a[b]);
            return c
        },
        sortForwardSlotSegs: function(a) {
            a.sort(ca(this, "compareForwardSlotSegs"))
        },
        compareForwardSlotSegs: function(a, b) {
            return b.forwardPressure - a.forwardPressure || (a.backwardCoord || 0) - (b.backwardCoord || 0) || this.compareSegs(a, b)
        }
    });
    var mb = Ma.View = ra.extend({
        type: null ,
        name: null ,
        title: null ,
        calendar: null ,
        options: null ,
        coordMap: null ,
        el: null ,
        displaying: null ,
        isSkeletonRendered: !1,
        isEventsRendered: !1,
        start: null ,
        end: null ,
        intervalStart: null ,
        intervalEnd: null ,
        intervalDuration: null ,
        intervalUnit: null ,
        isRTL: !1,
        isSelected: !1,
        eventOrderSpecs: null ,
        scrollerEl: null ,
        scrollTop: null ,
        widgetHeaderClass: null ,
        widgetContentClass: null ,
        highlightStateClass: null ,
        nextDayThreshold: null ,
        isHiddenDayHash: null ,
        documentMousedownProxy: null ,
        constructor: function(a, c, d, e) {
            this.calendar = a,
            this.type = this.name = c,
            this.options = d,
            this.intervalDuration = e || b.duration(1, "day"),
            this.nextDayThreshold = b.duration(this.opt("nextDayThreshold")),
            this.initThemingProps(),
            this.initHiddenDays(),
            this.isRTL = this.opt("isRTL"),
            this.eventOrderSpecs = A(this.opt("eventOrder")),
            this.documentMousedownProxy = ca(this, "documentMousedown"),
            this.initialize()
        },
        initialize: function() {},
        opt: function(a) {
            return this.options[a]
        },
        trigger: function(a, b) {
            var c = this.calendar;
            return c.trigger.apply(c, [a, b || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
        },
        setDate: function(a) {
            this.setRange(this.computeRange(a))
        },
        setRange: function(b) {
            a.extend(this, b),
            this.updateTitle()
        },
        computeRange: function(a) {
            var b, c, d = I(this.intervalDuration), e = a.clone().startOf(d), f = e.clone().add(this.intervalDuration);
            return /year|month|week|day/.test(d) ? (e.stripTime(),
            f.stripTime()) : (e.hasTime() || (e = this.calendar.rezoneDate(e)),
            f.hasTime() || (f = this.calendar.rezoneDate(f))),
            b = e.clone(),
            b = this.skipHiddenDays(b),
            c = f.clone(),
            c = this.skipHiddenDays(c, -1, !0),
            {
                intervalUnit: d,
                intervalStart: e,
                intervalEnd: f,
                start: b,
                end: c
            }
        },
        computePrevDate: function(a) {
            return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
        },
        computeNextDate: function(a) {
            return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).add(this.intervalDuration))
        },
        massageCurrentDate: function(a, b) {
            return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, b),
            a.startOf("day")),
            a
        },
        updateTitle: function() {
            this.title = this.computeTitle()
        },
        computeTitle: function() {
            return this.formatRange({
                start: this.intervalStart,
                end: this.intervalEnd
            }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
        },
        computeTitleFormat: function() {
            return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
        },
        formatRange: function(a, b, c) {
            var d = a.end;
            return d.hasTime() || (d = d.clone().subtract(1)),
            ma(a.start, d, b, c, this.opt("isRTL"))
        },
        setElement: function(a) {
            this.el = a,
            this.bindGlobalHandlers()
        },
        removeElement: function() {
            this.clear(),
            this.isSkeletonRendered && (this.unrenderSkeleton(),
            this.isSkeletonRendered = !1),
            this.unbindGlobalHandlers(),
            this.el.remove()
        },
        display: function(b) {
            var c = this
              , d = null ;
            return this.displaying && (d = this.queryScroll()),
            this.clear().then(function() {
                return c.displaying = a.when(c.displayView(b)).then(function() {
                    c.forceScroll(c.computeInitialScroll(d)),
                    c.triggerRender()
                }
                )
            }
            )
        },
        clear: function() {
            var b = this
              , c = this.displaying;
            return c ? c.then(function() {
                return b.displaying = null ,
                b.clearEvents(),
                b.clearView()
            }
            ) : a.when()
        },
        displayView: function(a) {
            this.isSkeletonRendered || (this.renderSkeleton(),
            this.isSkeletonRendered = !0),
            this.setDate(a),
            this.render && this.render(),
            this.renderDates(),
            this.updateSize(),
            this.renderBusinessHours()
        },
        clearView: function() {
            this.unselect(),
            this.triggerUnrender(),
            this.unrenderBusinessHours(),
            this.unrenderDates(),
            this.destroy && this.destroy()
        },
        renderSkeleton: function() {},
        unrenderSkeleton: function() {},
        renderDates: function() {},
        unrenderDates: function() {},
        renderBusinessHours: function() {},
        unrenderBusinessHours: function() {},
        triggerRender: function() {
            this.trigger("viewRender", this, this, this.el)
        },
        triggerUnrender: function() {
            this.trigger("viewDestroy", this, this, this.el)
        },
        bindGlobalHandlers: function() {
            a(document).on("mousedown", this.documentMousedownProxy)
        },
        unbindGlobalHandlers: function() {
            a(document).off("mousedown", this.documentMousedownProxy)
        },
        initThemingProps: function() {
            var a = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = a + "-widget-header",
            this.widgetContentClass = a + "-widget-content",
            this.highlightStateClass = a + "-state-highlight"
        },
        updateSize: function(a) {
            var b;
            a && (b = this.queryScroll()),
            this.updateHeight(a),
            this.updateWidth(a),
            a && this.setScroll(b)
        },
        updateWidth: function(a) {},
        updateHeight: function(a) {
            var b = this.calendar;
            this.setHeight(b.getSuggestedViewHeight(), b.isHeightAuto())
        },
        setHeight: function(a, b) {},
        computeScrollerHeight: function(a) {
            var b, c, d = this.scrollerEl;
            return b = this.el.add(d),
            b.css({
                position: "relative",
                left: -1
            }),
            c = this.el.outerHeight() - d.height(),
            b.css({
                position: "",
                left: ""
            }),
            a - c
        },
        computeInitialScroll: function(a) {
            return 0
        },
        queryScroll: function() {
            return this.scrollerEl ? this.scrollerEl.scrollTop() : void 0
        },
        setScroll: function(a) {
            return this.scrollerEl ? this.scrollerEl.scrollTop(a) : void 0
        },
        forceScroll: function(a) {
            var b = this;
            this.setScroll(a),
            setTimeout(function() {
                b.setScroll(a)
            }
            , 0)
        },
        displayEvents: function(a) {
            var b = this.queryScroll();
            this.clearEvents(),
            this.renderEvents(a),
            this.isEventsRendered = !0,
            this.setScroll(b),
            this.triggerEventRender()
        },
        clearEvents: function() {
            this.isEventsRendered && (this.triggerEventUnrender(),
            this.destroyEvents && this.destroyEvents(),
            this.unrenderEvents(),
            this.isEventsRendered = !1)
        },
        renderEvents: function(a) {},
        unrenderEvents: function() {},
        triggerEventRender: function() {
            this.renderedEventSegEach(function(a) {
                this.trigger("eventAfterRender", a.event, a.event, a.el)
            }
            ),
            this.trigger("eventAfterAllRender")
        },
        triggerEventUnrender: function() {
            this.renderedEventSegEach(function(a) {
                this.trigger("eventDestroy", a.event, a.event, a.el)
            }
            )
        },
        resolveEventEl: function(b, c) {
            var d = this.trigger("eventRender", b, b, c);
            return d === !1 ? c = null  : d && d !== !0 && (c = a(d)),
            c
        },
        showEvent: function(a) {
            this.renderedEventSegEach(function(a) {
                a.el.css("visibility", "")
            }
            , a)
        },
        hideEvent: function(a) {
            this.renderedEventSegEach(function(a) {
                a.el.css("visibility", "hidden")
            }
            , a)
        },
        renderedEventSegEach: function(a, b) {
            var c, d = this.getEventSegs();
            for (c = 0; c < d.length; c++)
                b && d[c].event._id !== b._id || d[c].el && a.call(this, d[c])
        },
        getEventSegs: function() {
            return []
        },
        isEventDraggable: function(a) {
            var b = a.source || {};
            return X(a.startEditable, b.startEditable, this.opt("eventStartEditable"), a.editable, b.editable, this.opt("editable"))
        },
        reportEventDrop: function(a, b, c, d, e) {
            var f = this.calendar
              , g = f.mutateEvent(a, b, c)
              , h = function() {
                g.undo(),
                f.reportEventChange()
            }
            ;
            this.triggerEventDrop(a, g.dateDelta, h, d, e),
            f.reportEventChange()
        },
        triggerEventDrop: function(a, b, c, d, e) {
            this.trigger("eventDrop", d[0], a, b, c, e, {})
        },
        reportExternalDrop: function(b, c, d, e, f) {
            var g, h, i = b.eventProps;
            i && (g = a.extend({}, i, c),
            h = this.calendar.renderEvent(g, b.stick)[0]),
            this.triggerExternalDrop(h, c, d, e, f)
        },
        triggerExternalDrop: function(a, b, c, d, e) {
            this.trigger("drop", c[0], b.start, d, e),
            a && this.trigger("eventReceive", null , a)
        },
        renderDrag: function(a, b) {},
        unrenderDrag: function() {},
        isEventResizableFromStart: function(a) {
            return this.opt("eventResizableFromStart") && this.isEventResizable(a)
        },
        isEventResizableFromEnd: function(a) {
            return this.isEventResizable(a)
        },
        isEventResizable: function(a) {
            var b = a.source || {};
            return X(a.durationEditable, b.durationEditable, this.opt("eventDurationEditable"), a.editable, b.editable, this.opt("editable"))
        },
        reportEventResize: function(a, b, c, d, e) {
            var f = this.calendar
              , g = f.mutateEvent(a, b, c)
              , h = function() {
                g.undo(),
                f.reportEventChange()
            }
            ;
            this.triggerEventResize(a, g.durationDelta, h, d, e),
            f.reportEventChange()
        },
        triggerEventResize: function(a, b, c, d, e) {
            this.trigger("eventResize", d[0], a, b, c, e, {})
        },
        select: function(a, b) {
            this.unselect(b),
            this.renderSelection(a),
            this.reportSelection(a, b)
        },
        renderSelection: function(a) {},
        reportSelection: function(a, b) {
            this.isSelected = !0,
            this.triggerSelect(a, b)
        },
        triggerSelect: function(a, b) {
            this.trigger("select", null , a.start, a.end, b)
        },
        unselect: function(a) {
            this.isSelected && (this.isSelected = !1,
            this.destroySelection && this.destroySelection(),
            this.unrenderSelection(),
            this.trigger("unselect", null , a))
        },
        unrenderSelection: function() {},
        documentMousedown: function(b) {
            var c;
            this.isSelected && this.opt("unselectAuto") && v(b) && (c = this.opt("unselectCancel"),
            c && a(b.target).closest(c).length || this.unselect(b))
        },
        triggerDayClick: function(a, b, c) {
            this.trigger("dayClick", b, a.start, c)
        },
        initHiddenDays: function() {
            var b, c = this.opt("hiddenDays") || [], d = [], e = 0;
            for (this.opt("weekends") === !1 && c.push(0, 6),
            b = 0; 7 > b; b++)
                (d[b] = -1 !== a.inArray(b, c)) || e++;
            if (!e)
                throw "invalid hiddenDays";
            this.isHiddenDayHash = d
        },
        isHiddenDay: function(a) {
            return b.isMoment(a) && (a = a.day()),
            this.isHiddenDayHash[a]
        },
        skipHiddenDays: function(a, b, c) {
            var d = a.clone();
            for (b = b || 1; this.isHiddenDayHash[(d.day() + (c ? b : 0) + 7) % 7]; )
                d.add(b, "days");
            return d
        },
        computeDayRange: function(a) {
            var b, c = a.start.clone().stripTime(), d = a.end, e = null ;
            return d && (e = d.clone().stripTime(),
            b = +d.time(),
            b && b >= this.nextDayThreshold && e.add(1, "days")),
            (!d || c >= e) && (e = c.clone().add(1, "days")),
            {
                start: c,
                end: e
            }
        },
        isMultiDayEvent: function(a) {
            var b = this.computeDayRange(a);
            return b.end.diff(b.start, "days") > 1
        }
    })
      , nb = Ma.Calendar = ra.extend({
        dirDefaults: null ,
        langDefaults: null ,
        overrides: null ,
        options: null ,
        viewSpecCache: null ,
        view: null ,
        header: null ,
        loadingLevel: 0,
        constructor: Ga,
        initialize: function() {},
        initOptions: function(a) {
            var b, e, f, g;
            a = d(a),
            b = a.lang,
            e = ob[b],
            e || (b = nb.defaults.lang,
            e = ob[b] || {}),
            f = X(a.isRTL, e.isRTL, nb.defaults.isRTL),
            g = f ? nb.rtlDefaults : {},
            this.dirDefaults = g,
            this.langDefaults = e,
            this.overrides = a,
            this.options = c([nb.defaults, g, e, a]),
            Ha(this.options),
            this.viewSpecCache = {}
        },
        getViewSpec: function(a) {
            var b = this.viewSpecCache;
            return b[a] || (b[a] = this.buildViewSpec(a))
        },
        getUnitViewSpec: function(b) {
            var c, d, e;
            if (-1 != a.inArray(b, Ra))
                for (c = this.header.getViewsWithButtons(),
                a.each(Ma.views, function(a) {
                    c.push(a)
                }
                ),
                d = 0; d < c.length; d++)
                    if (e = this.getViewSpec(c[d]),
                    e && e.singleUnit == b)
                        return e
        },
        buildViewSpec: function(a) {
            for (var d, e, f, g, h = this.overrides.views || {}, i = [], j = [], k = [], l = a; l; )
                d = Na[l],
                e = h[l],
                l = null ,
                "function" == typeof d && (d = {
                    "class": d
                }),
                d && (i.unshift(d),
                j.unshift(d.defaults || {}),
                f = f || d.duration,
                l = l || d.type),
                e && (k.unshift(e),
                f = f || e.duration,
                l = l || e.type);
            return d = Q(i),
            d.type = a,
            d["class"] ? (f && (f = b.duration(f),
            f.valueOf() && (d.duration = f,
            g = I(f),
            1 === f.as(g) && (d.singleUnit = g,
            k.unshift(h[g] || {})))),
            d.defaults = c(j),
            d.overrides = c(k),
            this.buildViewSpecOptions(d),
            this.buildViewSpecButtonText(d, a),
            d) : !1
        },
        buildViewSpecOptions: function(a) {
            a.options = c([nb.defaults, a.defaults, this.dirDefaults, this.langDefaults, this.overrides, a.overrides]),
            Ha(a.options)
        },
        buildViewSpecButtonText: function(a, b) {
            function c(c) {
                var d = c.buttonText || {};
                return d[b] || (a.singleUnit ? d[a.singleUnit] : null )
            }
            a.buttonTextOverride = c(this.overrides) || a.overrides.buttonText,
            a.buttonTextDefault = c(this.langDefaults) || c(this.dirDefaults) || a.defaults.buttonText || c(nb.defaults) || (a.duration ? this.humanizeDuration(a.duration) : null ) || b
        },
        instantiateView: function(a) {
            var b = this.getViewSpec(a);
            return new b["class"](this,a,b.options,b.duration)
        },
        isValidViewType: function(a) {
            return Boolean(this.getViewSpec(a))
        },
        pushLoading: function() {
            this.loadingLevel++ || this.trigger("loading", null , !0, this.view)
        },
        popLoading: function() {
            --this.loadingLevel || this.trigger("loading", null , !1, this.view)
        },
        buildSelectRange: function(a, b) {
            return a = this.moment(a),
            b = b ? this.moment(b) : a.hasTime() ? a.clone().add(this.defaultTimedEventDuration) : a.clone().add(this.defaultAllDayEventDuration),
            {
                start: a,
                end: b
            }
        }
    });
    nb.mixin(bb),
    nb.defaults = {
        titleRangeSeparator: " — ",
        monthYearFormat: "YYYY MMMM",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200
    },
    nb.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    },
    nb.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var ob = Ma.langs = {};
    Ma.datepickerLang = function(b, c, d) {
        var e = ob[b] || (ob[b] = {});
        e.isRTL = d.isRTL,
        e.weekNumberTitle = d.weekHeader,
        a.each(pb, function(a, b) {
            e[a] = b(d)
        }
        ),
        a.datepicker && (a.datepicker.regional[c] = a.datepicker.regional[b] = d,
        a.datepicker.regional.en = a.datepicker.regional[""],
        a.datepicker.setDefaults(d))
    }
    ,
    Ma.lang = function(b, d) {
        var e, f;
        e = ob[b] || (ob[b] = {}),
        d && (e = ob[b] = c([e, d])),
        f = Ia(b),
        a.each(qb, function(a, b) {
            null  == e[a] && (e[a] = b(f, e))
        }
        ),
        nb.defaults.lang = b
    }
    ;
    var pb = {
        buttonText: function(a) {
            return {
                prev: Z(a.prevText),
                next: Z(a.nextText),
                today: Z(a.currentText)
            }
        },
        monthYearFormat: function(a) {
            return a.showMonthAfterYear ? "YYYY[" + a.yearSuffix + "] MMMM" : "MMMM YYYY[" + a.yearSuffix + "]"
        }
    }
      , qb = {
        dayOfMonthFormat: function(a, b) {
            var c = a.longDateFormat("l");
            return c = c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""),
            b.isRTL ? c += " ddd" : c = "ddd " + c,
            c
        },
        mediumTimeFormat: function(a) {
            return a.longDateFormat("LT").replace(/\s*a$/i, "a")
        },
        smallTimeFormat: function(a) {
            return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
        },
        extraSmallTimeFormat: function(a) {
            return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
        },
        hourFormat: function(a) {
            return a.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
        },
        noMeridiemTimeFormat: function(a) {
            return a.longDateFormat("LT").replace(/\s*a$/i, "")
        }
    }
      , rb = {
        smallDayDateFormat: function(a) {
            return a.isRTL ? "D dd" : "dd D"
        },
        weekFormat: function(a) {
            return a.isRTL ? "w[ " + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + " ]w"
        },
        smallWeekFormat: function(a) {
            return a.isRTL ? "w[" + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + "]w"
        }
    };
    Ma.lang("en", nb.englishDefaults),
    Ma.sourceNormalizers = [],
    Ma.sourceFetchers = [];
    var sb = {
        dataType: "json",
        cache: !1
    }
      , tb = 1;
    nb.prototype.getPeerEvents = function(a, b) {
        var c, d, e = this.getEventCache(), f = [];
        for (c = 0; c < e.length; c++)
            d = e[c],
            a && a._id === d._id || f.push(d);
        return f
    }
    ;
    var ub = mb.extend({
        dayGrid: null ,
        dayNumbersVisible: !1,
        weekNumbersVisible: !1,
        weekNumberWidth: null ,
        headRowEl: null ,
        initialize: function() {
            this.dayGrid = new kb(this),
            this.coordMap = this.dayGrid.coordMap
        },
        setRange: function(a) {
            mb.prototype.setRange.call(this, a),
            this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit),
            this.dayGrid.setRange(a)
        },
        computeRange: function(a) {
            var b = mb.prototype.computeRange.call(this, a);
            return /year|month/.test(b.intervalUnit) && (b.start.startOf("week"),
            b.start = this.skipHiddenDays(b.start),
            b.end.weekday() && (b.end.add(1, "week").startOf("week"),
            b.end = this.skipHiddenDays(b.end, -1, !0))),
            b
        },
        renderDates: function() {
            this.dayNumbersVisible = this.dayGrid.rowCnt > 1,
            this.weekNumbersVisible = this.opt("weekNumbers"),
            this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible,
            this.el.addClass("fc-basic-view").html(this.renderHtml()),
            this.headRowEl = this.el.find("thead .fc-row"),
            this.scrollerEl = this.el.find(".fc-day-grid-container"),
            this.dayGrid.coordMap.containerEl = this.scrollerEl,
            this.dayGrid.setElement(this.el.find(".fc-day-grid")),
            this.dayGrid.renderDates(this.hasRigidRows())
        },
        unrenderDates: function() {
            this.dayGrid.unrenderDates(),
            this.dayGrid.removeElement()
        },
        renderBusinessHours: function() {
            this.dayGrid.renderBusinessHours()
        },
        renderHtml: function() {
            return '<table><thead class="fc-head"><tr><td class="' + this.widgetHeaderClass + '">' + this.dayGrid.headHtml() + '</td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"><div class="fc-day-grid-container"><div class="fc-day-grid"/></div></td></tr></tbody></table>'
        },
        headIntroHtml: function() {
            return this.weekNumbersVisible ? '<th class="fc-week-number ' + this.widgetHeaderClass + '" ' + this.weekNumberStyleAttr() + "><span>" + Y(this.opt("weekNumberTitle")) + "</span></th>" : void 0
        },
        numberIntroHtml: function(a) {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + "><span>" + this.dayGrid.getCell(a, 0).start.format("w") + "</span></td>" : void 0
        },
        dayIntroHtml: function() {
            return this.weekNumbersVisible ? '<td class="fc-week-number ' + this.widgetContentClass + '" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        introHtml: function() {
            return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + "></td>" : void 0
        },
        numberCellHtml: function(a) {
            var b, c = a.start;
            return this.dayNumbersVisible ? (b = this.dayGrid.getDayClasses(c),
            b.unshift("fc-day-number"),
            '<td class="' + b.join(" ") + '" data-date="' + c.format() + '">' + c.date() + "</td>") : "<td/>"
        },
        weekNumberStyleAttr: function() {
            return null  !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
        },
        hasRigidRows: function() {
            var a = this.opt("eventLimit");
            return a && "number" != typeof a
        },
        updateWidth: function() {
            this.weekNumbersVisible && (this.weekNumberWidth = k(this.el.find(".fc-week-number")))
        },
        setHeight: function(a, b) {
            var c, d = this.opt("eventLimit");
            m(this.scrollerEl),
            f(this.headRowEl),
            this.dayGrid.removeSegPopover(),
            d && "number" == typeof d && this.dayGrid.limitRows(d),
            c = this.computeScrollerHeight(a),
            this.setGridHeight(c, b),
            d && "number" != typeof d && this.dayGrid.limitRows(d),
            !b && l(this.scrollerEl, c) && (e(this.headRowEl, r(this.scrollerEl)),
            c = this.computeScrollerHeight(a),
            this.scrollerEl.height(c))
        },
        setGridHeight: function(a, b) {
            b ? j(this.dayGrid.rowEls) : i(this.dayGrid.rowEls, a, !0)
        },
        renderEvents: function(a) {
            this.dayGrid.renderEvents(a),
            this.updateHeight()
        },
        getEventSegs: function() {
            return this.dayGrid.getEventSegs()
        },
        unrenderEvents: function() {
            this.dayGrid.unrenderEvents()
        },
        renderDrag: function(a, b) {
            return this.dayGrid.renderDrag(a, b)
        },
        unrenderDrag: function() {
            this.dayGrid.unrenderDrag()
        },
        renderSelection: function(a) {
            this.dayGrid.renderSelection(a)
        },
        unrenderSelection: function() {
            this.dayGrid.unrenderSelection()
        }
    })
      , vb = ub.extend({
        computeRange: function(a) {
            var b, c = ub.prototype.computeRange.call(this, a);
            return this.isFixedWeeks() && (b = Math.ceil(c.end.diff(c.start, "weeks", !0)),
            c.end.add(6 - b, "weeks")),
            c
        },
        setGridHeight: function(a, b) {
            b = b || "variable" === this.opt("weekMode"),
            b && (a *= this.rowCnt / 6),
            i(this.dayGrid.rowEls, a, !b)
        },
        isFixedWeeks: function() {
            var a = this.opt("weekMode");
            return a ? "fixed" === a : this.opt("fixedWeekCount")
        }
    });
    Na.basic = {
        "class": ub
    },
    Na.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    },
    Na.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    },
    Na.month = {
        "class": vb,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var wb = mb.extend({
        timeGrid: null ,
        dayGrid: null ,
        axisWidth: null ,
        noScrollRowEls: null ,
        bottomRuleEl: null ,
        bottomRuleHeight: null ,
        initialize: function() {
            this.timeGrid = new lb(this),
            this.opt("allDaySlot") ? (this.dayGrid = new kb(this),
            this.coordMap = new eb([this.dayGrid.coordMap, this.timeGrid.coordMap])) : this.coordMap = this.timeGrid.coordMap
        },
        setRange: function(a) {
            mb.prototype.setRange.call(this, a),
            this.timeGrid.setRange(a),
            this.dayGrid && this.dayGrid.setRange(a)
        },
        renderDates: function() {
            this.el.addClass("fc-agenda-view").html(this.renderHtml()),
            this.scrollerEl = this.el.find(".fc-time-grid-container"),
            this.timeGrid.coordMap.containerEl = this.scrollerEl,
            this.timeGrid.setElement(this.el.find(".fc-time-grid")),
            this.timeGrid.renderDates(),
            this.bottomRuleEl = a('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el),
            this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")),
            this.dayGrid.renderDates(),
            this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()),
            this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
        },
        unrenderDates: function() {
            this.timeGrid.unrenderDates(),
            this.timeGrid.removeElement(),
            this.dayGrid && (this.dayGrid.unrenderDates(),
            this.dayGrid.removeElement())
        },
        renderBusinessHours: function() {
            this.timeGrid.renderBusinessHours(),
            this.dayGrid && this.dayGrid.renderBusinessHours()
        },
        renderHtml: function() {
            return '<table><thead class="fc-head"><tr><td class="' + this.widgetHeaderClass + '">' + this.timeGrid.headHtml() + '</td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container"><div class="fc-time-grid"/></div></td></tr></tbody></table>'
        },
        headIntroHtml: function() {
            var a, b;
            return this.opt("weekNumbers") ? (a = this.timeGrid.getCell(0).start,
            b = a.format(this.opt("smallWeekFormat")),
            '<th class="fc-axis fc-week-number ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + "><span>" + Y(b) + "</span></th>") : '<th class="fc-axis ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + "></th>"
        },
        dayIntroHtml: function() {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + "><span>" + (this.opt("allDayHtml") || Y(this.opt("allDayText"))) + "</span></td>"
        },
        slotBgIntroHtml: function() {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + "></td>";
        },
        introHtml: function() {
            return '<td class="fc-axis" ' + this.axisStyleAttr() + "></td>"
        },
        axisStyleAttr: function() {
            return null  !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        updateSize: function(a) {
            this.timeGrid.updateSize(a),
            mb.prototype.updateSize.call(this, a)
        },
        updateWidth: function() {
            this.axisWidth = k(this.el.find(".fc-axis"))
        },
        setHeight: function(a, b) {
            var c, d;
            null  === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()),
            this.bottomRuleEl.hide(),
            this.scrollerEl.css("overflow", ""),
            m(this.scrollerEl),
            f(this.noScrollRowEls),
            this.dayGrid && (this.dayGrid.removeSegPopover(),
            c = this.opt("eventLimit"),
            c && "number" != typeof c && (c = xb),
            c && this.dayGrid.limitRows(c)),
            b || (d = this.computeScrollerHeight(a),
            l(this.scrollerEl, d) ? (e(this.noScrollRowEls, r(this.scrollerEl)),
            d = this.computeScrollerHeight(a),
            this.scrollerEl.height(d)) : (this.scrollerEl.height(d).css("overflow", "hidden"),
            this.bottomRuleEl.show()))
        },
        computeInitialScroll: function() {
            var a = b.duration(this.opt("scrollTime"))
              , c = this.timeGrid.computeTimeTop(a);
            return c = Math.ceil(c),
            c && c++,
            c
        },
        renderEvents: function(a) {
            var b, c, d = [], e = [], f = [];
            for (c = 0; c < a.length; c++)
                a[c].allDay ? d.push(a[c]) : e.push(a[c]);
            b = this.timeGrid.renderEvents(e),
            this.dayGrid && (f = this.dayGrid.renderEvents(d)),
            this.updateHeight()
        },
        getEventSegs: function() {
            return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
        },
        unrenderEvents: function() {
            this.timeGrid.unrenderEvents(),
            this.dayGrid && this.dayGrid.unrenderEvents()
        },
        renderDrag: function(a, b) {
            return a.start.hasTime() ? this.timeGrid.renderDrag(a, b) : this.dayGrid ? this.dayGrid.renderDrag(a, b) : void 0
        },
        unrenderDrag: function() {
            this.timeGrid.unrenderDrag(),
            this.dayGrid && this.dayGrid.unrenderDrag()
        },
        renderSelection: function(a) {
            a.start.hasTime() || a.end.hasTime() ? this.timeGrid.renderSelection(a) : this.dayGrid && this.dayGrid.renderSelection(a)
        },
        unrenderSelection: function() {
            this.timeGrid.unrenderSelection(),
            this.dayGrid && this.dayGrid.unrenderSelection()
        }
    })
      , xb = 5
      , yb = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];
    return Na.agenda = {
        "class": wb,
        defaults: {
            allDaySlot: !0,
            allDayText: "all-day",
            slotDuration: "00:30:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            slotEventOverlap: !0
        }
    },
    Na.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    },
    Na.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    },
    Ma
}
);
