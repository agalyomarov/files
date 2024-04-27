








var ct_c = function (c) { try { var t; return 0 < (t = "object" == typeof c ? c : document.querySelectorAll(c)).length ? [].slice.call(t) : [] } catch (c) { console.log(c) } }, ct_contains = function (c, n) { try { var e = []; return ct_c(c) && [].forEach.call(ct_c(c), function (c) { var t = c.firstChild; if (t) for (; 3 === t.nodeType && -1 != t.nodeValue.indexOf(n) && e.push(c), t = t.nextSibling;); }), 0 < e.length ? e : [] } catch (c) { console.log(c) } }, ct_not = function (c, t) { try { var n = []; return 0 == ct_c(t) ? ct_c(c) : (ct_c(c) && ct_c(t) && [].forEach.call(ct_c(c), function (c) { -1 == Array.from(ct_c(t)).indexOf(c) && n.push(c) }), 0 < n.length ? n : []) } catch (c) { console.log(c) } }, ct_html = function (c, t) { try { ct_c(c) && [].forEach.call(ct_c(c), function (c) { c && (c.innerHTML = t) }) } catch (c) { console.log(c) } }, ct_repl = function (c, o, l) { try { ct_c(c) && [].forEach.call(ct_c(c), function (c) { var t, n, e = c.firstChild; if (e) for (; 3 === e.nodeType && (n = (t = e.nodeValue).replace(o, l)) !== t && (e.nodeValue = n), e = e.nextSibling;); }) } catch (c) { console.log(c) } }, ct_repl_a = function (c, t, n) { try { ct_c(c) && [].forEach.call(ct_c(c), function (c) { c && c.setAttribute(t, n) }) } catch (c) { console.log(c) } }, ct_event_listen = function (c, t, n) { try { "string" == typeof c && (c = [c]), [].forEach.call(c, function (c) { document.addEventListener(c, { handleEvent: function (c) { ct_c(t) && -1 != [].slice.call(ct_c(t)).indexOf(c.target) && n() } }) }) } catch (c) { console.log(c) } }, ct_remove = function (c) { try { ct_c(c) && [].forEach.call(ct_c(c), function (c) { c && c.parentNode.removeChild(c) }) } catch (c) { console.log(c) } }, ct_ready = function (c) { try { c(), "loading" === document.readyState && document.addEventListener("DOMContentLoaded", c), "complete" !== document.readyState && window.addEventListener("load", c) } catch (c) { console.log(c) } };
function ct_replace() {
    ct_repl('body *', /\(351\)?.949.04.36/gi, "(351) 954-01-09");
    ct_repl_a('a[href*="73519490436"]', 'href', 'tel:+73519540109');
}
ct_ready(ct_replace);


if (window['ct'] && typeof window['ct'] === 'function') {
    window['ct']('replace', { selector: 'phone_mw', value: '+7 (351) 954-01-09', type: 'class', useObserver: false });
}
if (window['ct'] && typeof window['ct'] === 'function') {
    window['ct']('init_matcher_replacement', { useObserver: false, params: [{ "value_code": "3519", "value_phone": "540109", "phone_code": "3519", "phone_number": "540103", "selector": "body" }, { "value_code": "3519", "value_phone": "540109", "phone_code": "3519", "phone_number": "490436", "selector": "body" }] });
}
window.calltouch_phone = "73519540109"; if (window['ct'] && typeof window['ct'] === 'function') {
    window['ct']('create_session', { sessionId: 405826369, siteId: 41255, modId: 'w5fmeeu7', setCookie: true, endSessionTime: 1675205054, domain: 'online-chery.ru', setCtCookie: '1600000000275868855', setLkCookie: null, denialTime: 15, phones: { "170682": { "subPoolName": "\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435", "phoneId": "525328", "phoneNumber": "73519540109", "phoneCode": "3519", "phoneBody": "540109" } }, ecommerceGa4Enabled: false, ecommerceTimeout: 250, calltouchDnsHost: '' });
} else {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://mod.calltouch.ru/set_attrs_by_get.php?siteId=41255&sessionId=405826369&attrs={"clientError_NO_CT_CREATE_SESSION": 1}', true);
    xmlHttp.send(null);
}


if (window['ct'] && typeof window['ct'] === 'function') {
    window['ct']('append_pixel', '//793ccb0eb3a74fa7a5b0e5211e8ca917.ops.beeline.ru?id=w5fmeeu7t405826369&gid=fc280ce2-2b39-56b1-8441-1bcd5b811701&siteId=41255&sessionId=405826369');
}
if (window['ct'] && typeof window['ct'] === 'function') {
    window['ct']('append_pixel', '//tech.rtb.mts.ru/ct?event_type=page_view&return_img=true&mod_id=w5fmeeu7&session_id=405826369');
}

window.ctw = {};
window.ctw.clientFormConfig = {}
window.ctw.clientFormConfig.getClientFormsSettingsUrl = "//mod.calltouch.ru/callback_widget_user_form_find.php";
window.ctw.clientFormConfig.sendClientFormsRequestUrl = "//mod.calltouch.ru/callback_request_user_form_create.php";
(function (targetWindow, nameSpace, params) {
    !function () { var e = { 9713: function (e) { e.exports = function (e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } }, 693: function (e, t, n) { var r = n(9713); e.exports = function (e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n); "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function (e) { return Object.getOwnPropertyDescriptor(n, e).enumerable })))), o.forEach((function (t) { r(e, t, n[t]) })) } return e } } }, t = {}; function n(r) { var o = t[r]; if (void 0 !== o) return o.exports; var a = t[r] = { exports: {} }; return e[r](a, a.exports, n), a.exports } n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, { a: t }), t }, n.d = function (e, t) { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, function () { "use strict"; var e = n(693), t = n.n(e); function r(e, n, r, o) { try { var a = Boolean(window.event && window.event.target && "A" === window.event.target.nodeName), i = Boolean(window.event && (window.event.target && "submit" === window.event.target.type || "submit" === window.event.type)), c = function () { var e; if (e || "undefined" == typeof XMLHttpRequest) try { e = new ActiveXObject("Msxml2.XMLHTTP") } catch (t) { try { e = new ActiveXObject("Microsoft.XMLHTTP") } catch (t) { e = !1 } } else e = new XMLHttpRequest; return e }(), s = n ? "POST" : "GET"; c.open(s, e, !a && !i && !o), a || i || o || (c.timeout = 6e4), c.setRequestHeader("Content-type", "application/json"), c.onreadystatechange = function () { if (4 === c.readyState && r) if (200 === c.status) { var e = function (e) { var t; try { t = JSON.parse(e) } catch (e) { } return t }(c.response); e ? e.data ? r(!0, t()({}, e.data)) : e.error ? r(!1, t()({}, e.error)) : r(!1, { type: "unknown_error", message: "Unknown JSON format", details: {} }) : r(!1, { type: "unknown_error", message: "JSON parse error", details: {} }) } else 0 === c.status ? r(!1, { type: "unknown_error", message: "Request timeout exceeded or connection reset", details: {} }) : r(!1, { type: "unknown_error", message: "Unexpected HTTP code: ".concat(c.statusText), details: {} }) }, c.send(n) } catch (e) { r && r(!1, { type: "unknown_error", message: "Unexpected js exception", details: {} }) } } !function (e, t, n) { var o = e || window, a = t || "ctw"; o[a] || (o[a] = {}); var i = o[a].clientFormConfig || {}, c = i.getClientFormsSettingsUrl, s = i.sendClientFormsRequestUrl; o[a].getRouteKeyData = function (e, t) { var o = 1e6 * Math.random(), a = "".concat(c, "?siteId=").concat(n.siteId, "&routeKey=").concat(e, "&pageUrl=").concat(n.pageUrl, "&sessionId=").concat(n.sessionId); r("".concat(a, "&rand=").concat(Math.floor(o)), null, t) }, o[a].createRequest = function (e, t, o, a) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [], u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, d = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], l = 1e6 * Math.random(), f = { siteId: n.siteId, sessionId: n.sessionId, workMode: 1, pageUrl: n.pageUrl, tags: c, phone: t, routeKey: e, fields: o, scheduleTime: i, unitId: u }; r("".concat(s, "?rand=").concat(Math.floor(l)), JSON.stringify(f), a, d) } }(targetWindow, nameSpace, params) }() }();
})(window, "ctw", { "siteId": 41255, "sessionId": 405826369, "pageUrl": "https:\/\/reginas.online-chery.ru\/" })


var call_value = '405826369';
var call_value_w5fmeeu7 = call_value;
if (window.onSessionCallValue) {
    onSessionCallValue('405826369', '');
}
