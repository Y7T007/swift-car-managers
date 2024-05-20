var wh = Object.defineProperty;
var Eh = (i,e,t)=>e in i ? wh(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t;
var g = (i,e,t)=>(Eh(i, typeof e != "symbol" ? e + "" : e, t),
t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver(r=>{
        for (const n of r)
            if (n.type === "childList")
                for (const a of n.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && s(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity),
        r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function s(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const n = t(r);
        fetch(r.href, n)
    }
}
)();
const Ti = Symbol(0);
let Vn = !1
  , Qa = !1
  , ui = null
  , Gs = null
  , Zt = null
  , jt = 0
  , js = []
  , Go = {};
const xh = ()=>{}
  , tr = 0
  , vu = 1
  , Fr = 2
  , ta = 3;
function _h() {
    Vn = !0,
    queueMicrotask(bu)
}
function bu() {
    if (!js.length) {
        Vn = !1;
        return
    }
    Qa = !0;
    for (let i = 0; i < js.length; i++)
        js[i].$st !== tr && Th(js[i]);
    js = [],
    Vn = !1,
    Qa = !1
}
function Th(i) {
    let e = [i];
    for (; i = i[Ti]; )
        i.$e && i.$st !== tr && e.push(i);
    for (let t = e.length - 1; t >= 0; t--)
        Zo(e[t])
}
function yu(i) {
    const e = Ph();
    return Yr(e, i.length ? i.bind(null, Xs.bind(e)) : i, null)
}
function ne(i) {
    return Yr(ui, i, null)
}
function Sh(i) {
    return Yr(null, i, null)
}
function Oi() {
    Qa || bu()
}
function Wr() {
    return ui
}
function Jt(i, e) {
    try {
        return Yr(e, i, null)
    } catch (t) {
        Wo(e, t);
        return
    }
}
function wu(i, e=ui) {
    return e == null ? void 0 : e.$cx[i]
}
function Ch(i, e, t=ui) {
    t && (t.$cx = {
        ...t.$cx,
        [i]: e
    })
}
function mi(i) {
    if (!i || !ui)
        return i || xh;
    const e = ui;
    return e.$d ? Array.isArray(e.$d) ? e.$d.push(i) : e.$d = [e.$d, i] : e.$d = i,
    function() {
        e.$st !== ta && (i.call(null),
        Ki(e.$d) ? e.$d = null : Array.isArray(e.$d) && e.$d.splice(e.$d.indexOf(i), 1))
    }
}
function Xs(i=!0) {
    if (this.$st !== ta) {
        if (this.$h)
            if (Array.isArray(this.$h))
                for (let e = this.$h.length - 1; e >= 0; e--)
                    Xs.call(this.$h[e]);
            else
                Xs.call(this.$h);
        if (i) {
            const e = this[Ti];
            e && (Array.isArray(e.$h) ? e.$h.splice(e.$h.indexOf(this), 1) : e.$h = null),
            $h(this)
        }
    }
}
function $h(i) {
    i.$st = ta,
    i.$d && Eu(i),
    i.$s && An(i, 0),
    i[Ti] = null,
    i.$s = null,
    i.$o = null,
    i.$h = null,
    i.$cx = Go,
    i.$eh = null
}
function Eu(i) {
    try {
        if (Array.isArray(i.$d))
            for (let e = i.$d.length - 1; e >= 0; e--) {
                const t = i.$d[e];
                t.call(t)
            }
        else
            i.$d.call(i.$d);
        i.$d = null
    } catch (e) {
        Wo(i, e)
    }
}
function Yr(i, e, t) {
    const s = ui
      , r = Gs;
    ui = i,
    Gs = t;
    try {
        return e.call(i)
    } finally {
        ui = s,
        Gs = r
    }
}
function Wo(i, e) {
    if (!i || !i.$eh)
        throw e;
    let t = 0
      , s = i.$eh.length
      , r = Jl(e);
    for (t = 0; t < s; t++)
        try {
            i.$eh[t](r);
            break
        } catch (n) {
            r = Jl(n)
        }
    if (t === s)
        throw r
}
function Jl(i) {
    return i instanceof Error ? i : Error(JSON.stringify(i))
}
function Yo() {
    return this.$st === ta ? this.$v : (Gs && !this.$e && (!Zt && Gs.$s && Gs.$s[jt] == this ? jt++ : Zt ? Zt.push(this) : Zt = [this]),
    this.$c && Zo(this),
    this.$v)
}
function xu(i) {
    const e = Ki(i) ? i(this.$v) : i;
    if (this.$ch(this.$v, e) && (this.$v = e,
    this.$o))
        for (let t = 0; t < this.$o.length; t++)
            Su(this.$o[t], Fr);
    return this.$v
}
const Xo = function() {
    this[Ti] = null,
    this.$h = null,
    ui && ui.append(this)
}
  , $s = Xo.prototype;
$s.$cx = Go;
$s.$eh = null;
$s.$c = null;
$s.$d = null;
$s.append = function(i) {
    i[Ti] = this,
    this.$h ? Array.isArray(this.$h) ? this.$h.push(i) : this.$h = [this.$h, i] : this.$h = i,
    i.$cx = i.$cx === Go ? this.$cx : {
        ...this.$cx,
        ...i.$cx
    },
    this.$eh && (i.$eh = i.$eh ? [...i.$eh, ...this.$eh] : this.$eh)
}
;
$s.dispose = function() {
    Xs.call(this)
}
;
function Ph() {
    return new Xo
}
const _u = function(e, t, s) {
    Xo.call(this),
    this.$st = t ? Fr : tr,
    this.$i = !1,
    this.$e = !1,
    this.$s = null,
    this.$o = null,
    this.$v = e,
    t && (this.$c = t),
    s && s.dirty && (this.$ch = s.dirty)
}
  , Uo = _u.prototype;
Object.setPrototypeOf(Uo, $s);
Uo.$ch = Ah;
Uo.call = Yo;
function Ko(i, e, t) {
    return new _u(i,e,t)
}
function Ah(i, e) {
    return i !== e
}
function Ki(i) {
    return typeof i == "function"
}
function Zo(i) {
    if (i.$st === vu)
        for (let e = 0; e < i.$s.length && (Zo(i.$s[e]),
        i.$st !== Fr); e++)
            ;
    i.$st === Fr ? Tu(i) : i.$st = tr
}
function Ql(i) {
    i.$h && Xs.call(i, !1),
    i.$d && Eu(i),
    i.$eh = i[Ti] ? i[Ti].$eh : null
}
function Tu(i) {
    let e = Zt
      , t = jt;
    Zt = null,
    jt = 0;
    try {
        Ql(i);
        const s = Yr(i, i.$c, i);
        if (Zt) {
            if (i.$s && An(i, jt),
            i.$s && jt > 0) {
                i.$s.length = jt + Zt.length;
                for (let n = 0; n < Zt.length; n++)
                    i.$s[jt + n] = Zt[n]
            } else
                i.$s = Zt;
            let r;
            for (let n = jt; n < i.$s.length; n++)
                r = i.$s[n],
                r.$o ? r.$o.push(i) : r.$o = [i]
        } else
            i.$s && jt < i.$s.length && (An(i, jt),
            i.$s.length = jt);
        !i.$e && i.$i ? xu.call(i, s) : (i.$v = s,
        i.$i = !0)
    } catch (s) {
        Wo(i, s),
        i.$st === Fr && (Ql(i),
        i.$s && An(i, 0));
        return
    }
    Zt = e,
    jt = t,
    i.$st = tr
}
function Su(i, e) {
    if (!(i.$st >= e) && (i.$e && i.$st === tr && (js.push(i),
    Vn || _h()),
    i.$st = e,
    i.$o))
        for (let t = 0; t < i.$o.length; t++)
            Su(i.$o[t], vu)
}
function An(i, e) {
    let t, s;
    for (let r = e; r < i.$s.length; r++)
        t = i.$s[r],
        t.$o && (s = t.$o.indexOf(i),
        t.$o[s] = t.$o[t.$o.length - 1],
        t.$o.pop())
}
function De(i, e) {
    const t = Ko(i, null, e)
      , s = Yo.bind(t);
    return s[Ti] = !0,
    s.set = xu.bind(t),
    s
}
function Mh(i) {
    return Ki(i) && Ti in i
}
function Xt(i, e) {
    const t = Ko(e == null ? void 0 : e.initial, i, e)
      , s = Yo.bind(t);
    return s[Ti] = !0,
    s
}
function Ar(i, e) {
    const t = Ko(null, function() {
        let r = i();
        return Ki(r) && mi(r),
        null
    }, void 0);
    return t.$e = !0,
    Tu(t),
    Xs.bind(t, !0)
}
function ec(i) {
    return Mh(i) && "set"in i
}
function ia(...i) {}
function Ps(i) {
    return i === null
}
function ti(i) {
    return typeof i > "u"
}
function Oh(i) {
    return Ps(i) || ti(i)
}
function kh(i) {
    return (i == null ? void 0 : i.constructor) === Object
}
function Us(i) {
    return typeof i == "number" && !Number.isNaN(i)
}
function di(i) {
    return typeof i == "string"
}
function Cu(i) {
    return typeof i == "boolean"
}
function Mt(i) {
    return typeof i == "function"
}
function fi(i) {
    return Array.isArray(i)
}
function Lh(i) {
    return di(i) ? new RegExp(i) : i
}
function Ih(i) {
    return i === window
}
function Xr(i) {
    return {
        id: Symbol(),
        provide: i
    }
}
function As(i, e, t=Wr()) {
    var r;
    const s = !ti(e);
    Ch(i.id, s ? e : (r = i.provide) == null ? void 0 : r.call(i), t)
}
function Li(i) {
    return wu(i.id)
}
function sa(i) {
    return !ti(wu(i.id))
}
var $u = class {
    constructor(i) {
        this.id = Symbol(0),
        this.record = i,
        this.v = Object.getOwnPropertyDescriptors(i)
    }
    create() {
        const i = {}
          , e = new Proxy(i,{
            get: (t,s)=>i[s]()
        });
        for (const t of Object.keys(this.record)) {
            const s = this.v[t].get;
            i[t] = s ? Xt(s.bind(e)) : De(this.record[t])
        }
        return i
    }
    reset(i, e) {
        for (const t of Object.keys(i))
            !this.v[t].get && (!e || e(t)) && i[t].set(this.record[t])
    }
}
;
function Jo(i) {
    return Li(i)
}
var U = Ar;
function Dh(i) {
    return Mt(i) ? i() : i
}
function Pu(i) {
    let e = i;
    for (; typeof e == "function"; )
        e = e();
    return e
}
var Rh = Event, Au = Symbol("DOM_EVENT"), Mu, nt = class extends Rh {
    constructor(i, ...e) {
        var t, s;
        super(i, e[0]),
        this[Mu] = !0,
        this.detail = (t = e[0]) == null ? void 0 : t.detail,
        this.trigger = (s = e[0]) == null ? void 0 : s.trigger
    }
    get originEvent() {
        return Fn(this) ?? this
    }
    get isOriginTrusted() {
        var i;
        return ((i = Fn(this)) == null ? void 0 : i.isTrusted) ?? !1
    }
}
;
Mu = Au;
function Hn(i) {
    return !!(i != null && i[Au])
}
function Fn(i) {
    let e = i.trigger;
    for (; e && e.trigger; )
        e = e.trigger;
    return e
}
function Ou(i, e) {
    if (!Hn(i))
        return;
    let t = i.trigger;
    for (; t; ) {
        const s = e(t);
        if (s)
            return [t, s];
        t = t.trigger
    }
}
function ku(i, e) {
    var t;
    return (t = Ou(i, s=>s.type === e)) == null ? void 0 : t[0]
}
function Nh(i, e) {
    return !!ku(i, e)
}
function Ue(i, e) {
    const t = Fn(i) ?? i;
    if (t === e)
        throw Error("");
    Object.defineProperty(t, "trigger", {
        configurable: !0,
        enumerable: !0,
        get: ()=>e
    })
}
var Qo = class extends EventTarget {
    addEventListener(i, e, t) {
        return super.addEventListener(i, e, t)
    }
    removeEventListener(i, e, t) {
        return super.removeEventListener(i, e, t)
    }
}
;
function fe(i, e, t, s) {
    return i.addEventListener(e, t, s),
    mi(()=>i.removeEventListener(e, t, s))
}
function eo(i) {
    return !!(i != null && i.type.startsWith("pointer"))
}
function to(i) {
    return !!(i != null && i.type.startsWith("touch"))
}
function Lu(i) {
    return /^(click|mouse)/.test((i == null ? void 0 : i.type) ?? "")
}
function ci(i) {
    return !!(i != null && i.type.startsWith("key"))
}
function Vh(i) {
    return ci(i) && i.key === "Enter"
}
function Hh(i) {
    return ci(i) && i.key === "Escape"
}
function el(i) {
    return ci(i) && (i.key === "Enter" || i.key === " ")
}
function Ur(i) {
    return i instanceof Node
}
function tl(i) {
    return Ur(i) && i.nodeType === 1
}
function Fh(i) {
    return Ur(i) && i.nodeType === 11
}
function Iu() {
    return document.createDocumentFragment()
}
function il(i) {
    return document.createComment(i)
}
function $e(i, e, t) {
    if (!t && t !== "" && t !== 0)
        i.removeAttribute(e);
    else {
        const s = t + "";
        i.getAttribute(e) !== s && i.setAttribute(e, s)
    }
}
function Wt(i, e, t) {
    !t && t !== 0 ? i.style.removeProperty(e) : i.style.setProperty(e, t + "")
}
function Bh(i, e, t) {
    i.classList[t ? "add" : "remove"](e)
}
function zh(i, e) {
    var n;
    const t = e ? `slot[name="${e}"]` : "slot:not([name])"
      , s = (n = i.shadowRoot) == null ? void 0 : n.querySelector(t)
      , r = (s == null ? void 0 : s.assignedNodes({
        flatten: !0
    })) ?? [];
    return Array.prototype.filter.call(r, a=>a.nodeType == 1)
}
function jh(i) {
    const e = i.firstChild
      , t = e.getAttribute("shadowroot");
    e.parentNode.attachShadow({
        mode: t
    }).appendChild(e.content),
    e.remove()
}
function qh(i) {
    return i()
}
function Du(i, e) {
    for (const t of i)
        t(e)
}
function sl(i) {
    return i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function Gh(i) {
    return ra(i.replace(/([A-Z])/g, " $1"))
}
function Ru(i) {
    return i.replace(/-./g, e=>e[1].toUpperCase())
}
function Wh(i) {
    return Nu(i).replace(/\s/g, "")
}
function Nu(i) {
    return ra(i.replace(/-./g, e=>" " + e[1].toUpperCase()))
}
function ra(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
function Yh(i) {
    return i.charAt(0).toLowerCase() + i.slice(1)
}
var Xh = /;\s*$/;
function Uh(i) {
    return i.replace(Xh, "")
}
function rl(i) {
    const e = [];
    for (let t = 0; t < i.length; t++)
        fi(i[t]) ? e.push(...rl(i[t])) : (i[t] || i[t] === 0) && e.push(i[t]);
    return e
}
var Nt = class {
    get el() {
        return this.instance.m
    }
    get $props() {
        return this.instance.e
    }
    get $store() {
        return this.instance.k
    }
    constructor(i) {
        this.instance = i,
        this.onAttach && i.d.push(this.onAttach.bind(this)),
        this.onConnect && i.p.push(this.onConnect.bind(this)),
        this.onDisconnect && i.i.push(this.onDisconnect.bind(this)),
        this.onDestroy && i.x.push(this.onDestroy.bind(this))
    }
    setAttributes(i) {
        this.instance.f && Object.assign(this.instance.f, i)
    }
    setStyles(i) {
        this.instance.q && Object.assign(this.instance.q, i)
    }
    setCSSVars(i) {
        this.setStyles(i)
    }
    createEvent(i, ...e) {
        return new nt(i,e[0])
    }
    dispatch(i, ...e) {
        if (!this.el)
            return;
        const t = new nt(i,e[0]);
        this.el.dispatchEvent(t)
    }
    listen(i, e, t) {
        return this.el ? fe(this.el, i, e, t) : ia
    }
}
  , ot = class extends Nt {
    constructor(i) {
        super(i),
        this.render && !i.F && !i.h && (i.h = this.render.bind(this))
    }
    destroy() {
        this.instance.y()
    }
}
  , Vu = i=>document.createTreeWalker(i, NodeFilter.SHOW_COMMENT, e=>e.nodeValue === "$")
  , ii = null;
function Kh(i, e) {
    const t = ii;
    ii = {
        w: Vu(e.target)
    };
    const s = i();
    return ii = t,
    s
}
var io = Symbol(0)
  , Zh = il("$$")
  , so = Symbol(0)
  , Jh = il("/$")
  , Qh = "/[]";
function nl(i, e, t) {
    let s = Mt(e);
    s && e[rp] && (e = e(),
    s = Mt(e)),
    s ? Fu(i, e, t) : !ii && (e || e === 0) && Hu(i, fi(e) ? Bu(e) : Ur(e) ? e : document.createTextNode(e + ""), t)
}
function Hu(i, e, t) {
    e && (t ? i.insertBefore(e, t) : i.appendChild(e))
}
function Fu(i, e, t) {
    const s = t && t.nodeType === 8 ? t : Zh.cloneNode();
    s !== t && Hu(i, s, t),
    U(()=>void ep(s, Pu(e)))
}
function ep(i, e) {
    const t = i[so];
    if (fi(e))
        if (ii)
            i[so] = tp(i);
        else {
            t && mn(i, t);
            const s = Bu(e);
            if (!s)
                return;
            t || s.appendChild(Pa(i)),
            i.after(s)
        }
    else if (Ur(e))
        t && mn(i, t),
        ii || i.after(e),
        t || e.after(Pa(i));
    else if (di(e) || Us(e)) {
        if (i[io]) {
            i.nextSibling.data = e + "";
            return
        }
        t && mn(i, t);
        let s;
        ii ? s = i.nextSibling : (s = document.createTextNode(e + ""),
        i.after(s)),
        i[io] = !0,
        t || s.after(Pa(i))
    } else
        t && mn(i, t)
}
function Pa(i) {
    return i[so] = Jh.cloneNode()
}
function tp(i) {
    for (; i; ) {
        if (i.nodeType === 8 && i.nodeValue === Qh)
            return i;
        i = i.nextSibling
    }
}
function mn(i, e) {
    for (; i.nextSibling !== e; )
        i.nextSibling.remove();
    i[io] = !1
}
function Bu(i) {
    const e = rl(i);
    if (!e.length)
        return null;
    const t = Iu();
    for (let s = 0; s < e.length; s++) {
        const r = e[s];
        Mt(r) ? Fu(t, r) : t.append(r)
    }
    return t
}
function ir(i) {
    zu(i, {
        insert: nl
    })
}
var Mn = Symbol(0);
function zu(i, e) {
    const t = i.el.tagName;
    window.customElements.get(t) || (window[Mn] || (window[Mn] = new Map),
    window[Mn].set(t, i),
    window.customElements.define(t, dp(i, e)))
}
function Re(i) {
    const e = document.createElement("template");
    return e.innerHTML = i,
    e.content
}
function ze(i, e=ii == null ? void 0 : ii.w) {
    try {
        return [ju(e), e]
    } catch {
        return ze(i, Vu(document.importNode(i, !0)))
    }
}
function na(i) {
    return ze(i)[0]
}
function ju(i) {
    let e = i.nextNode().nextSibling;
    if (e.localName.indexOf("-") > 0 && e.firstChild && e.firstChild.nodeName === "SHADOW-ROOT") {
        let t = e.firstChild.nextSibling || e.nextSibling;
        t && (i.currentNode = t)
    }
    return e
}
var qu = ii;
function aa(i, e) {
    var r;
    const t = (r = window[Mn]) == null ? void 0 : r.get(i.localName);
    if (!t)
        throw Error(i.localName);
    const s = Wu(t, {
        props: e
    });
    return i.attachComponent(s),
    s.instance.c
}
function tc(i) {
    return document.importNode(i, !0).firstElementChild
}
function ip(i) {
    return document.createElement(i)
}
var sp = nl;
function Ot(i, e) {
    nl(i.parentElement, e, i)
}
function Et(i, e={}) {
    return ne(()=>i(e))
}
var rp = Symbol(0);
function oa(i, e) {
    fi(e) ? e.filter(Mt).forEach(t=>t(i)) : Mt(e) && e(i)
}
var Je = $e;
function Ks(i, e, t, s=!1) {
    Mt(t) && fe(i, e, t, {
        capture: s
    })
}
var np = ne
  , Gu = Jt
  , ut = U
  , al = Xt
  , Ws = Symbol(0)
  , Mr = Symbol(0)
  , Or = Symbol(0);
function Wu(i, e) {
    const t = new ap(i,e);
    return Jt(()=>new i(t), t.c)
}
var ap = class {
    constructor(i, e={}) {
        this.m = null,
        this.h = null,
        this.F = !1,
        this.j = !1,
        this.f = {},
        this.q = {},
        this.e = {},
        this.z = null,
        this.k = null,
        this.d = [],
        this.p = [],
        this.i = [],
        this.x = [],
        yu(t=>{
            var n;
            this.c = Wr(),
            this.G = t,
            e.scope && e.scope.append(this.c);
            const s = i.el.store;
            s && (this.k = s.create(),
            this.z = new Proxy(this.k,{
                get: (a,o)=>this.k[o]()
            }),
            As(s, this.k));
            const r = i.el.props;
            if (r && (this.e = op(r),
            e.props)) {
                for (const a of Object.keys(e.props))
                    if (a in r) {
                        const o = e.props[a];
                        Ki(o) ? Ar(()=>void this.e[a].set(o())) : this.e[a].set(o)
                    }
            }
            (n = e.props) != null && n.innerHTML && (this.F = !0),
            mi(this.y.bind(this))
        }
        )
    }
    y() {
        var i;
        if (!this.j) {
            this.j = !0;
            for (const e of this.x)
                Jt(()=>e(this.m), this.c);
            (i = this.m) == null || i.destroy(),
            this.d.length = 0,
            this.p.length = 0,
            this.i.length = 0,
            this.x.length = 0,
            Oi(),
            this.G(),
            this.m = null,
            this.h = null
        }
    }
}
;
function op(i) {
    const e = {};
    for (const t of Object.keys(i)) {
        const s = i[t];
        e[t] = De(s.value, s)
    }
    return e
}
async function lp(i) {
    var r;
    const e = up(i)
      , t = i.constructor
      , s = t.a;
    e && (await customElements.whenDefined(e.localName),
    e[Ws] === !0 || await new Promise(n=>e[Ws].push(n))),
    i.isConnected && (e != null && e.keepAlive && (i.keepAlive = !0),
    i.attachComponent(Wu(s, {
        scope: (r = e == null ? void 0 : e.component) == null ? void 0 : r.instance.c
    })))
}
function cp(i) {
    var r;
    const e = i.constructor
      , t = e.a
      , s = {};
    if (!e.f)
        return s;
    for (const n of i.attributes) {
        let a = e.f.get(n.name)
          , o = a && ((r = t.el.props[a].type) == null ? void 0 : r.from);
        if (o) {
            let l = i.getAttribute(n.name);
            s[a] = o(l)
        }
    }
    return s
}
function up(i) {
    let e = i.constructor
      , t = e.a
      , s = i.parentNode
      , r = t.el.tagName.split("-", 1)[0] + "-";
    for (; s; ) {
        if (s.nodeType === 1 && s.localName.startsWith(r))
            return s;
        s = s.parentNode
    }
    return null
}
function dp(i, e) {
    const t = i.register;
    if (i.register) {
        const o = fi(t) ? t : t == null ? void 0 : t();
        if (fi(o))
            for (const l of o)
                zu(l, e)
    }
    let s;
    if (i.el.props) {
        s = new Map;
        for (const o of Object.keys(i.el.props)) {
            const c = i.el.props[o].attribute;
            if (c !== !1) {
                const u = c ?? sl(o);
                s.set(u, o)
            }
        }
    }
    class r extends hp {
        static get a() {
            return i
        }
    }
    r.H = e,
    r.f = s;
    const n = r.prototype
      , a = i.prototype;
    if (i.el.props)
        for (const o of Object.keys(i.el.props))
            Object.defineProperty(n, o, {
                enumerable: !0,
                configurable: !0,
                get() {
                    return this.component ? this.component.instance.e[o]() : i.el.props[o].value
                },
                set(l) {
                    const c = ()=>this.component.instance.e[o].set(l);
                    if (!this.component) {
                        this.l.delete(o),
                        this.l.set(o, c);
                        return
                    }
                    c()
                }
            });
    if (a[Mr])
        for (const o of a[Mr])
            Object.defineProperty(n, o, {
                enumerable: !0,
                configurable: !0,
                get() {
                    return this.component ? this.component[o] : void 0
                },
                set(l) {
                    if (!this.component) {
                        this.l.delete(o),
                        this.l.set(o, ()=>{
                            this.component[o] = l
                        }
                        );
                        return
                    }
                    this.component[o] = l
                }
            });
    if (a[Or])
        for (const o of a[Or])
            n[o] = function(...l) {
                return this.component[o](...l)
            }
            ;
    return r
}
var fp = HTMLElement, Yu, hp = class extends fp {
    constructor() {
        super(...arguments),
        this.r = !1,
        this.j = !1,
        this.a = null,
        this.s = null,
        this.d = new Set,
        this.i = [],
        this.l = new Map,
        this.keepAlive = !1,
        this[Yu] = [],
        this.B = !1
    }
    get A() {
        return this.hasAttribute("mk-d")
    }
    get component() {
        return this.a
    }
    get $store() {
        var i;
        return (i = this.a) == null ? void 0 : i.instance.k
    }
    get state() {
        return this.a.instance.z
    }
    static get observedAttributes() {
        return this.f ? Array.from(this.f.keys()) : []
    }
    attributeChangedCallback(i, e, t) {
        var a, o;
        const s = this.constructor;
        if (!this.a || !s.f)
            return;
        const r = s.f.get(i)
          , n = (o = (a = s.a.el.props[r]) == null ? void 0 : a.type) == null ? void 0 : o.from;
        n && this.a.instance.e[r].set(n(t))
    }
    connectedCallback() {
        var e;
        const i = (e = this.a) == null ? void 0 : e.instance;
        if (!this.A && !i)
            return this.N();
        !i || !this.isConnected || this.r || this.j || (this.hasAttribute("keep-alive") && (this.keepAlive = !0),
        this.r = !0,
        i.p.length && Jt(()=>{
            yu(t=>{
                this.s = Wr();
                for (const s of i.p)
                    Jt(()=>{
                        const r = s(this);
                        Ki(r) && this.i.push(r)
                    }
                    , this.s);
                this.i.push(t)
            }
            )
        }
        , i.c),
        fi(this[Ws]) && (Du(this[Ws], this),
        this[Ws] = !0))
    }
    disconnectedCallback() {
        var e;
        const i = (e = this.a) == null ? void 0 : e.instance;
        if (!(!this.r || this.j)) {
            this.r = !1;
            for (const t of this.i)
                Jt(t, this.s);
            if (i != null && i.i.length)
                for (const t of i.i)
                    Jt(()=>t(this), i.c);
            this.s = null,
            !this.A && !this.keepAlive && requestAnimationFrame(()=>{
                this.isConnected || (i == null || i.y(),
                this.j = !0)
            }
            )
        }
    }
    attachComponent(i) {
        const e = i.instance
          , t = this.constructor
          , s = t.a.el
          , r = t.H;
        this.a || this.j || Jt(()=>{
            var l;
            this.o = e.h ? s.shadowRoot ? this.shadowRoot ?? this.attachShadow(Cu(s.shadowRoot) ? {
                mode: "open"
            } : s.shadowRoot) : pp(this) : null,
            !ii && s.shadowRoot && s.css && (r != null && r.adoptCSS) && r.adoptCSS(this.o, s.css),
            e.m = this,
            this.a = i;
            const n = cp(this);
            for (const c of Object.keys(n))
                e.e[c].set(n[c]);
            if ((l = this.l) != null && l.size)
                for (const c of this.l.values())
                    c();
            this.l = null;
            for (const c of [...e.d, ...this.d])
                Jt(()=>c(this), e.c);
            e.d.length = 0,
            this.d = null;
            const a = e.f
              , o = e.q;
            if (a)
                for (const c of Object.keys(a))
                    Ki(a[c]) ? Ar(()=>$e(this, c, a[c]())) : $e(this, c, a[c]);
            if (o)
                for (const c of Object.keys(o))
                    Ki(o[c]) ? Ar(()=>Wt(this, c, o[c]())) : Wt(this, c, o[c]);
            if (this.dispatchEvent(new Event("attached")),
            this.o && r && e.h) {
                const c = ()=>r.insert(this.o, e.h);
                this.hasAttribute("mk-h") && !t.a.el.nohydrate ? Kh(c, {
                    target: this.o
                }) : c()
            }
            this.connectedCallback()
        }
        , e.c)
    }
    subscribe(i) {
        return Jt(()=>Ar(()=>i(this.a.instance.z)), this.a.instance.c)
    }
    onAttach(i) {
        return this.a ? (i(this),
        ia) : (this.d.add(i),
        ()=>{
            var e;
            return (e = this.d) == null ? void 0 : e.delete(i)
        }
        )
    }
    onEventDispatch(i) {
        const e = this.constructor;
        if (e.n)
            for (const t of e.n)
                i(t);
        this.I = i
    }
    destroy() {
        var i;
        this.disconnectedCallback(),
        (i = this.a) == null || i.destroy(),
        this.a = null,
        this.j = !0
    }
    dispatchEvent(i) {
        var e;
        if (this.A) {
            const t = this.constructor;
            t.n || (t.n = new Set),
            t.n.has(i.type) || ((e = this.I) == null || e.call(this, i.type),
            t.n.add(i.type))
        }
        return Sh(()=>super.dispatchEvent(i))
    }
    async N() {
        this.B || (this.B = !0,
        await lp(this),
        this.B = !1)
    }
    P(i) {}
}
;
Yu = Ws;
function pp(i) {
    if (i.firstChild && tl(i.firstChild) && i.firstChild.localName === "shadow-root")
        return i.firstChild;
    {
        const e = ip("shadow-root");
        return i.prepend(e),
        e
    }
}
var ro = Symbol(0);
function ki(i) {
    return {
        [ro]: !0,
        ...i
    }
}
function Pe(i) {
    var e;
    if ("props"in i) {
        const t = i.props;
        for (const s of Object.keys(t)) {
            const r = (e = t[s]) != null && e[ro] ? t[s] : {
                [ro]: !0,
                value: t[s]
            };
            r.attribute !== !1 && !r.type && (r.type = wp(r.value)),
            t[s] = r
        }
    }
    return i
}
var gn = {
    from: i=>i === null ? "" : i + ""
}
  , mp = {
    from: i=>i === null ? 0 : Number(i)
}
  , gp = {
    from: i=>i !== null,
    to: i=>i ? "" : null
}
  , vp = {
    from: !1,
    to: ()=>null
}
  , bp = {
    from: i=>i === null ? [] : JSON.parse(i),
    to: i=>JSON.stringify(i)
}
  , yp = {
    from: i=>i === null ? {} : JSON.parse(i),
    to: i=>JSON.stringify(i)
};
function wp(i) {
    if (i === null)
        return gn;
    switch (typeof i) {
    case "undefined":
        return gn;
    case "string":
        return gn;
    case "boolean":
        return gp;
    case "number":
        return mp;
    case "function":
        return vp;
    case "object":
        return fi(i) ? bp : yp;
    default:
        return gn
    }
}
function Tt(i, e, t) {
    i[Mr] || (i[Mr] = new Set),
    i[Mr].add(e)
}
function Si(i, e, t) {
    i[Or] || (i[Or] = new Set),
    i[Or].add(e)
}
const Ep = "modulepreload"
  , xp = function(i) {
    return "/" + i
}
  , ic = {}
  , z = function(e, t, s) {
    if (!t || t.length === 0)
        return e();
    const r = document.getElementsByTagName("link");
    return Promise.all(t.map(n=>{
        if (n = xp(n),
        n in ic)
            return;
        ic[n] = !0;
        const a = n.endsWith(".css")
          , o = a ? '[rel="stylesheet"]' : "";
        if (!!s)
            for (let u = r.length - 1; u >= 0; u--) {
                const d = r[u];
                if (d.href === n && (!a || d.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${n}"]${o}`))
            return;
        const c = document.createElement("link");
        if (c.rel = a ? "stylesheet" : Ep,
        a || (c.as = "script",
        c.crossOrigin = ""),
        c.href = n,
        document.head.appendChild(c),
        a)
            return new Promise((u,d)=>{
                c.addEventListener("load", u),
                c.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${n}`)))
            }
            )
    }
    )).then(()=>e())
}
  , sc = {
    "add-note": ()=>z(()=>import("./add-note-aea8ce93.js"), []),
    "add-playlist": ()=>z(()=>import("./add-playlist-311c7461.js"), []),
    "add-user": ()=>z(()=>import("./add-user-c02e7586.js"), []),
    add: ()=>z(()=>import("./add-a792ae6f.js"), []),
    airplay: ()=>z(()=>import("./airplay-1ed397fc.js"), []),
    "arrow-collapse-in": ()=>z(()=>import("./arrow-collapse-in-b90c2a85.js"), []),
    "arrow-collapse": ()=>z(()=>import("./arrow-collapse-08d04594.js"), []),
    "arrow-down": ()=>z(()=>import("./arrow-down-2391bbee.js"), []),
    "arrow-expand-out": ()=>z(()=>import("./arrow-expand-out-2c38ee2f.js"), []),
    "arrow-expand": ()=>z(()=>import("./arrow-expand-6f3fb0a0.js"), []),
    "arrow-left": ()=>z(()=>import("./arrow-left-dbe0d33e.js"), []),
    "arrow-right": ()=>z(()=>import("./arrow-right-33eeea14.js"), []),
    "arrow-up": ()=>z(()=>import("./arrow-up-3fb75d3a.js"), []),
    bookmark: ()=>z(()=>import("./bookmark-f3df39b3.js"), []),
    camera: ()=>z(()=>import("./camera-bcd1c8e7.js"), []),
    chapters: ()=>z(()=>import("./chapters-47ad562e.js"), []),
    "chat-collapse": ()=>z(()=>import("./chat-collapse-07ec7b96.js"), []),
    chat: ()=>z(()=>import("./chat-1bc87327.js"), []),
    "chevron-down": ()=>z(()=>import("./chevron-down-efd0e3f1.js"), []),
    "chevron-left": ()=>z(()=>import("./chevron-left-e3651bf6.js"), []),
    "chevron-right": ()=>z(()=>import("./chevron-right-c23fb9cc.js"), []),
    "chevron-up": ()=>z(()=>import("./chevron-up-1ee1a5d6.js"), []),
    chromecast: ()=>z(()=>import("./chromecast-d06cd890.js"), []),
    clip: ()=>z(()=>import("./clip-8f207923.js"), []),
    "closed-captions-on": ()=>z(()=>import("./closed-captions-on-57c0024c.js"), []),
    "closed-captions": ()=>z(()=>import("./closed-captions-3e2e1a2b.js"), []),
    comment: ()=>z(()=>import("./comment-f8838025.js"), []),
    computer: ()=>z(()=>import("./computer-06accdfe.js"), []),
    device: ()=>z(()=>import("./device-8ddeaf07.js"), []),
    download: ()=>z(()=>import("./download-28d9bbee.js"), []),
    episodes: ()=>z(()=>import("./episodes-ac5299c6.js"), []),
    eye: ()=>z(()=>import("./eye-01dd650b.js"), []),
    "fast-backward": ()=>z(()=>import("./fast-backward-e64ba82c.js"), []),
    "fast-forward": ()=>z(()=>import("./fast-forward-61bf2dca.js"), []),
    flag: ()=>z(()=>import("./flag-ccf75905.js"), []),
    "fullscreen-arrow-exit": ()=>z(()=>import("./fullscreen-arrow-exit-7c96e69a.js"), []),
    "fullscreen-arrow": ()=>z(()=>import("./fullscreen-arrow-8ed20d9d.js"), []),
    "fullscreen-exit": ()=>z(()=>import("./fullscreen-exit-f9e43826.js"), []),
    fullscreen: ()=>z(()=>import("./fullscreen-5940abb2.js"), []),
    heart: ()=>z(()=>import("./heart-3528bb70.js"), []),
    info: ()=>z(()=>import("./info-143a99f9.js"), []),
    language: ()=>z(()=>import("./language-d20cebb0.js"), []),
    link: ()=>z(()=>import("./link-744b4ccc.js"), []),
    "lock-closed": ()=>z(()=>import("./lock-closed-a121a053.js"), []),
    "lock-open": ()=>z(()=>import("./lock-open-d00d2e9e.js"), []),
    "menu-horizontal": ()=>z(()=>import("./menu-horizontal-f264944d.js"), []),
    "menu-vertical": ()=>z(()=>import("./menu-vertical-1d213ccd.js"), []),
    microphone: ()=>z(()=>import("./microphone-e71a2de2.js"), []),
    mobile: ()=>z(()=>import("./mobile-487b99ee.js"), []),
    moon: ()=>z(()=>import("./moon-7d1740b1.js"), []),
    "music-off": ()=>z(()=>import("./music-off-20339c46.js"), []),
    music: ()=>z(()=>import("./music-99152f5d.js"), []),
    mute: ()=>z(()=>import("./mute-f3fd30ef.js"), []),
    next: ()=>z(()=>import("./next-f62f26b2.js"), []),
    notification: ()=>z(()=>import("./notification-e0dc35e5.js"), []),
    odometer: ()=>z(()=>import("./odometer-68be8246.js"), []),
    pause: ()=>z(()=>import("./pause-751938fc.js"), []),
    "picture-in-picture-exit": ()=>z(()=>import("./picture-in-picture-exit-716881c9.js"), []),
    "picture-in-picture": ()=>z(()=>import("./picture-in-picture-b4bffeef.js"), []),
    play: ()=>z(()=>import("./play-80dbbc66.js"), []),
    "playback-speed-circle": ()=>z(()=>import("./playback-speed-circle-0bf80f35.js"), []),
    playlist: ()=>z(()=>import("./playlist-2bd30557.js"), []),
    previous: ()=>z(()=>import("./previous-20bc87b6.js"), []),
    "question-mark": ()=>z(()=>import("./question-mark-b0618164.js"), []),
    "queue-list": ()=>z(()=>import("./queue-list-7a58ac23.js"), []),
    "radio-button-selected": ()=>z(()=>import("./radio-button-selected-ffbd87d1.js"), []),
    "radio-button": ()=>z(()=>import("./radio-button-ccc5a13c.js"), []),
    "repeat-on": ()=>z(()=>import("./repeat-on-0e0f1a69.js"), []),
    "repeat-square-on": ()=>z(()=>import("./repeat-square-on-8f45fa45.js"), []),
    "repeat-square": ()=>z(()=>import("./repeat-square-d57e3e7f.js"), []),
    repeat: ()=>z(()=>import("./repeat-91008d67.js"), []),
    replay: ()=>z(()=>import("./replay-813257d0.js"), []),
    rotate: ()=>z(()=>import("./rotate-f438b1a8.js"), []),
    search: ()=>z(()=>import("./search-20b04e5d.js"), []),
    "seek-backward-10": ()=>z(()=>import("./seek-backward-10-c588dcd3.js"), []),
    "seek-backward-15": ()=>z(()=>import("./seek-backward-15-e83d7b7d.js"), []),
    "seek-backward-30": ()=>z(()=>import("./seek-backward-30-0d0dd089.js"), []),
    "seek-backward": ()=>z(()=>import("./seek-backward-3bee4a59.js"), []),
    "seek-forward-10": ()=>z(()=>import("./seek-forward-10-ca8ba0b1.js"), []),
    "seek-forward-15": ()=>z(()=>import("./seek-forward-15-222541fd.js"), []),
    "seek-forward-30": ()=>z(()=>import("./seek-forward-30-ec9721fb.js"), []),
    "seek-forward": ()=>z(()=>import("./seek-forward-7061baa9.js"), []),
    send: ()=>z(()=>import("./send-832a6e98.js"), []),
    "settings-menu": ()=>z(()=>import("./settings-menu-9b3fa758.js"), []),
    "settings-switch": ()=>z(()=>import("./settings-switch-d0dd45b5.js"), []),
    settings: ()=>z(()=>import("./settings-dbff07e8.js"), []),
    "share-arrow": ()=>z(()=>import("./share-arrow-d0f267b6.js"), []),
    share: ()=>z(()=>import("./share-10614161.js"), []),
    "shuffle-on": ()=>z(()=>import("./shuffle-on-228a3e81.js"), []),
    shuffle: ()=>z(()=>import("./shuffle-b8eafe6f.js"), []),
    stop: ()=>z(()=>import("./stop-017c2591.js"), []),
    subtitles: ()=>z(()=>import("./subtitles-093d44a7.js"), []),
    sun: ()=>z(()=>import("./sun-75635f63.js"), []),
    "theatre-mode-exit": ()=>z(()=>import("./theatre-mode-exit-424f1878.js"), []),
    "theatre-mode": ()=>z(()=>import("./theatre-mode-08ec10fb.js"), []),
    "thumbs-down": ()=>z(()=>import("./thumbs-down-7eac064c.js"), []),
    "thumbs-up": ()=>z(()=>import("./thumbs-up-1d0fd52d.js"), []),
    timer: ()=>z(()=>import("./timer-9a7b8c05.js"), []),
    transcript: ()=>z(()=>import("./transcript-f6c3e132.js"), []),
    tv: ()=>z(()=>import("./tv-51cf0a79.js"), []),
    user: ()=>z(()=>import("./user-c8c6ba54.js"), []),
    "volume-high": ()=>z(()=>import("./volume-high-9e9b5d4a.js"), []),
    "volume-low": ()=>z(()=>import("./volume-low-7149c886.js"), []),
    "x-mark": ()=>z(()=>import("./x-mark-9c79edd1.js"), [])
}
  , _p = Re('<!$><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-media-icon="true"></svg>');
var Za;
let Xu = (Za = class extends ot {
    constructor() {
        super(...arguments);
        g(this, "a", !1);
        g(this, "b", De(""))
    }
    onAttach(t) {
        this.a = t.hasAttribute("mk-h"),
        U(this.c.bind(this))
    }
    c() {
        const t = this.$props.type();
        if (this.a) {
            this.a = !1;
            return
        }
        t && sc[t] ? sc[t]().then(({default: s})=>{
            t === ne(this.$props.type) && this.b.set(s)
        }
        ) : this.b.set("")
    }
    render() {
        return (()=>{
            const [t,s] = ze(_p);
            return ut(()=>{
                qu || (t.innerHTML = this.b())
            }
            ),
            t
        }
        )()
    }
}
,
g(Za, "el", Pe({
    tagName: "media-icon",
    props: {
        type: void 0
    }
})),
Za);
ir(Xu);
function la(i) {
    return i ? "true" : "false"
}
function ol() {
    const i = new Set;
    return {
        add(...e) {
            for (const t of e)
                i.add(t)
        },
        empty() {
            for (const e of i)
                e();
            i.clear()
        }
    }
}
function Tp() {
    const i = ol();
    return mi(i.empty),
    i
}
function Uu(i) {
    return Object.keys(i)
}
function Sp(...i) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
        const s = i[t];
        s && Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
    }
    return e
}
function Ku(i, e) {
    const t = {};
    for (const s of e)
        Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    return t
}
function Cp(i, e) {
    return Ku(i, Uu(i).filter(t=>!e.includes(t)))
}
function Bn() {
    let i, e;
    return {
        promise: new Promise((s,r)=>{
            i = s,
            e = r
        }
        ),
        resolve: i,
        reject: e
    }
}
function $p(i, e, t) {
    const s = new Promise((r,n)=>{
        const a = setTimeout(()=>{
            clearTimeout(a),
            n(t)
        }
        , e)
    }
    );
    return Promise.race([i, s])
}
function Zu(i) {
    return new Promise(e=>setTimeout(e, i))
}
function Pp(i) {
    return new Promise(e=>{
        window.requestAnimationFrame(t=>{
            i == null || i(t),
            e()
        }
        )
    }
    )
}
function Ss(i) {
    let e = -1, t;
    function s(...r) {
        t = r,
        !(e >= 0) && (e = window.requestAnimationFrame(()=>{
            i.apply(this, t),
            e = -1,
            t = void 0
        }
        ))
    }
    return s
}
var Ap = "requestIdleCallback"in window ? window.requestIdleCallback : i=>window.requestAnimationFrame(i);
function Mp(i, e) {
    return new Promise(t=>{
        Ap(s=>{
            i == null || i(s),
            t()
        }
        , e)
    }
    )
}
const Op = Object.freeze(Object.defineProperty({
    __proto__: null,
    DOMEvent: nt,
    EventsTarget: Qo,
    animationFrameThrottle: Ss,
    appendTriggerEvent: Ue,
    ariaBool: la,
    attachDeclarativeShadowDOM: jh,
    camelToKebabCase: sl,
    camelToTitleCase: Gh,
    createComment: il,
    createDisposalBin: ol,
    createFragment: Iu,
    createRegex: Lh,
    deferredPromise: Bn,
    findTriggerEvent: ku,
    flattenArray: rl,
    getOriginEvent: Fn,
    getSlottedChildren: zh,
    hasTriggerEvent: Nh,
    isArray: fi,
    isBoolean: Cu,
    isDOMElement: tl,
    isDOMEvent: Hn,
    isDOMFragment: Fh,
    isDOMNode: Ur,
    isFunction: Mt,
    isKeyboardClick: el,
    isKeyboardEvent: ci,
    isMouseEvent: Lu,
    isNil: Oh,
    isNull: Ps,
    isNumber: Us,
    isObject: kh,
    isPointerEvent: eo,
    isString: di,
    isTouchEvent: to,
    isUndefined: ti,
    isWindow: Ih,
    kebabToCamelCase: Ru,
    kebabToPascalCase: Wh,
    kebabToTitleCase: Nu,
    keysOf: Uu,
    listenEvent: fe,
    lowercaseFirstLetter: Yh,
    mergeProperties: Sp,
    noop: ia,
    omit: Cp,
    pick: Ku,
    run: qh,
    runAll: Du,
    setAttribute: $e,
    setStyle: Wt,
    timedPromise: $p,
    toggleClass: Bh,
    trimTrailingSemicolon: Uh,
    unwrap: Dh,
    unwrapDeep: Pu,
    uppercaseFirstChar: ra,
    useDisposalBin: Tp,
    waitAnimationFrame: Pp,
    waitIdlePeriod: Mp,
    waitTimeout: Zu,
    walkTriggerEventChain: Ou,
    wasEnterKeyPressed: Vh,
    wasEscapeKeyPressed: Hh
}, Symbol.toStringTag, {
    value: "Module"
}));
function kp(i) {
    return i instanceof HTMLAudioElement
}
function Lp(i) {
    return i instanceof HTMLVideoElement
}
function Ip(i) {
    return kp(i) || Lp(i)
}
const Dp = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
  , Rp = new Set(["audio/mpeg", "audio/ogg", "audio/3gp", "audio/mp4", "audio/webm", "audio/flac"])
  , Np = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i
  , Vp = new Set(["video/mp4", "video/webm", "video/3gp", "video/ogg", "video/avi", "video/mpeg"])
  , Ju = /\.(m3u8)($|\?)/i
  , Qu = new Set(["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"]);
function Hp({src: i, type: e}) {
    return typeof i == "string" && Ju.test(i) || Qu.has(e)
}
function h6(i) {
    return typeof window.MediaStream < "u" && i instanceof window.MediaStream
}
const Fp = Re('<!$><audio preload="none" aria-hidden="true"></audio>')
  , Bp = Fp;
class zp {
    constructor() {
        g(this, "kh")
    }
    canPlay({src: e, type: t}) {
        return di(e) ? Dp.test(e) || Rp.has(t) || e.startsWith("blob:") && t === "audio/object" : t === "audio/object"
    }
    mediaType() {
        return "audio"
    }
    async load() {
        return new (await z(()=>import("./provider-3a751af2.js"), ["assets/provider-3a751af2.js", "assets/provider-a1de40dd.js"])).AudioProvider(this.kh)
    }
    render(e) {
        return (()=>{
            const [t,s] = ze(Bp);
            return ut(()=>Je(t, "controls", e.controls())),
            ut(()=>Je(t, "crossorigin", e.crossorigin())),
            oa(t, r=>void (this.kh = r)),
            t
        }
        )()
    }
}
const jp = Re('<!$><video preload="none" aria-hidden="true"></video>')
  , qp = jp;
class ed {
    constructor() {
        g(this, "ta")
    }
    canPlay(e) {
        return di(e.src) ? Np.test(e.src) || Vp.has(e.type) || e.src.startsWith("blob:") && e.type === "video/object" || Hp(e) && Jp() : e.type === "video/object"
    }
    mediaType() {
        return "video"
    }
    async load(e) {
        return new (await z(()=>import("./provider-872cd0fe.js"), ["assets/provider-872cd0fe.js", "assets/provider-a1de40dd.js"])).VideoProvider(this.ta,e)
    }
    render(e) {
        const t = Xt(()=>e.poster() && e.controls() ? e.poster() : null);
        return (()=>{
            const [s,r] = ze(qp);
            return ut(()=>Je(s, "controls", e.controls())),
            ut(()=>Je(s, "crossorigin", e.crossorigin())),
            ut(()=>Je(s, "poster", t())),
            oa(s, n=>void (this.ta = n)),
            s
        }
        )()
    }
}
const Ul = class extends ed {
    preconnect() {
        ll("https://cdn.jsdelivr.net", "preconnect")
    }
    canPlay({src: e, type: t}) {
        return Ul.supported && di(e) && (Ju.test(e) || Qu.has(t))
    }
    async load(e) {
        return new (await z(()=>import("./provider-e5106d09.js"), ["assets/provider-e5106d09.js", "assets/provider-872cd0fe.js", "assets/provider-a1de40dd.js"])).HLSProvider(this.ta,e)
    }
}
;
let On = Ul;
g(On, "supported", im());
const zn = Symbol(0)
  , no = Symbol(0)
  , ao = Symbol(0)
  , Aa = Symbol(0)
  , vn = Symbol(0)
  , rc = Symbol(0)
  , td = Symbol(0)
  , id = Symbol(0)
  , sd = Symbol(0);
var r6;
class rd extends Qo {
    constructor() {
        super(...arguments);
        g(this, "d", []);
        g(this, r6, !1)
    }
    get length() {
        return this.d.length
    }
    get readonly() {
        return this[vn]
    }
    toArray() {
        return [...this.d]
    }
    [(r6 = vn,
    Symbol.iterator)]() {
        return this.d.values()
    }
    [zn](t, s) {
        const r = this.d.length;
        "" + r in this || Object.defineProperty(this, r, {
            get() {
                return this.d[r]
            }
        }),
        !this.d.includes(t) && (this.d.push(t),
        this.dispatchEvent(new nt("add",{
            detail: t,
            trigger: s
        })))
    }
    [no](t, s) {
        var n;
        const r = this.d.indexOf(t);
        r >= 0 && ((n = this[id]) == null || n.call(this, t, s),
        this.d.splice(r, 1),
        this.dispatchEvent(new nt("remove",{
            detail: t,
            trigger: s
        })))
    }
    [ao](t) {
        var s;
        for (const r of [...this.d])
            this[no](r, t);
        this.d = [],
        this[rc](!1, t),
        (s = this[td]) == null || s.call(this)
    }
    [rc](t, s) {
        this[vn] !== t && (this[vn] = t,
        this.dispatchEvent(new nt("readonly-change",{
            detail: t,
            trigger: s
        })))
    }
}
var zt = {
    fullscreenEnabled: 0,
    fullscreenElement: 1,
    requestFullscreen: 2,
    exitFullscreen: 3,
    fullscreenchange: 4,
    fullscreenerror: 5,
    fullscreen: 6
}
  , nc = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]
  , ac = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"]
  , oc = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]
  , Dt = typeof window < "u" && typeof window.document < "u" ? window.document : {}
  , Kt = "fullscreenEnabled"in Dt && Object.keys(zt) || nc[0]in Dt && nc || ac[0]in Dt && ac || oc[0]in Dt && oc || []
  , Gp = {
    requestFullscreen: function(i) {
        return i[Kt[zt.requestFullscreen]]()
    },
    requestFullscreenFunction: function(i) {
        return i[Kt[zt.requestFullscreen]]
    },
    get exitFullscreen() {
        return Dt[Kt[zt.exitFullscreen]].bind(Dt)
    },
    get fullscreenPseudoClass() {
        return ":" + Kt[zt.fullscreen]
    },
    addEventListener: function(i, e, t) {
        return Dt.addEventListener(Kt[zt[i]], e, t)
    },
    removeEventListener: function(i, e, t) {
        return Dt.removeEventListener(Kt[zt[i]], e, t)
    },
    get fullscreenEnabled() {
        return !!Dt[Kt[zt.fullscreenEnabled]]
    },
    set fullscreenEnabled(i) {},
    get fullscreenElement() {
        return Dt[Kt[zt.fullscreenElement]]
    },
    set fullscreenElement(i) {},
    get onfullscreenchange() {
        return Dt[("on" + Kt[zt.fullscreenchange]).toLowerCase()]
    },
    set onfullscreenchange(i) {
        return Dt[("on" + Kt[zt.fullscreenchange]).toLowerCase()] = i
    },
    get onfullscreenerror() {
        return Dt[("on" + Kt[zt.fullscreenerror]).toLowerCase()]
    },
    set onfullscreenerror(i) {
        return Dt[("on" + Kt[zt.fullscreenerror]).toLowerCase()] = i
    }
}
  , gs = Gp;
const jn = gs.fullscreenEnabled;
class Wp extends Nt {
    constructor() {
        super(...arguments);
        g(this, "e", !1);
        g(this, "f", !1)
    }
    get active() {
        return this.f
    }
    get supported() {
        return jn
    }
    onConnect() {
        fe(gs, "fullscreenchange", this.g.bind(this)),
        fe(gs, "fullscreenerror", this.h.bind(this))
    }
    async onDisconnect() {
        jn && await this.exit()
    }
    g(t) {
        const s = Ma(this.el);
        s !== this.f && (s || (this.e = !1),
        this.f = s,
        this.dispatch("fullscreen-change", {
            detail: s,
            trigger: t
        }))
    }
    h(t) {
        this.e && (this.dispatch("fullscreen-error", {
            detail: null,
            trigger: t
        }),
        this.e = !1)
    }
    async enter() {
        try {
            return this.e = !0,
            !this.el || Ma(this.el) ? void 0 : (lc(),
            gs.requestFullscreen(this.el))
        } catch (t) {
            throw this.e = !1,
            t
        }
    }
    async exit() {
        if (!(!this.el || !Ma(this.el)))
            return lc(),
            gs.exitFullscreen()
    }
}
function Yp() {
    return jn
}
function Ma(i) {
    if (gs.fullscreenElement === i)
        return !0;
    try {
        return i.matches(gs.fullscreenPseudoClass)
    } catch {
        return !1
    }
}
function lc() {
    if (!jn)
        throw Error("[vidstack] no fullscreen API")
}
const Xp = navigator == null ? void 0 : navigator.userAgent.toLowerCase()
  , Up = /iphone|ipad|ipod|ios|crios|fxios/i.test(Xp)
  , Kp = /(iphone|ipod)/gi.test(navigator == null ? void 0 : navigator.platform)
  , p6 = !!window.chrome
  , nd = !!window.safari || Up;
function Zp() {
    return !ti(screen.orientation) && Mt(screen.orientation.lock) && Mt(screen.orientation.unlock)
}
function Jp(i) {
    return i || (i = document.createElement("video")),
    i.canPlayType("application/vnd.apple.mpegurl").length > 0
}
function m6(i) {
    return !!document.pictureInPictureEnabled && !i.disablePictureInPicture
}
function g6(i) {
    return Mt(i.webkitSupportsPresentationMode) && Mt(i.webkitSetPresentationMode)
}
async function Qp() {
    const i = document.createElement("video");
    return i.volume = .5,
    await Zu(0),
    i.volume === .5
}
function em() {
    return (window == null ? void 0 : window.MediaSource) ?? (window == null ? void 0 : window.WebKitMediaSource)
}
function tm() {
    return (window == null ? void 0 : window.SourceBuffer) ?? (window == null ? void 0 : window.WebKitSourceBuffer)
}
function im() {
    const i = em();
    if (ti(i))
        return !1;
    const e = i && Mt(i.isTypeSupported) && i.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
      , t = tm()
      , s = ti(t) || !ti(t.prototype) && Mt(t.prototype.appendBuffer) && Mt(t.prototype.remove);
    return !!e && !!s
}
const kr = Zp();
class ad extends Nt {
    constructor() {
        super(...arguments);
        g(this, "j", De(uc()));
        g(this, "i", De(!1));
        g(this, "k")
    }
    get type() {
        return this.j()
    }
    get locked() {
        return this.i()
    }
    get portrait() {
        return this.j().startsWith("portrait")
    }
    get landscape() {
        return this.j().startsWith("landscape")
    }
    get supported() {
        return kr
    }
    onConnect() {
        if (kr)
            fe(screen.orientation, "change", this.l.bind(this));
        else {
            const t = window.matchMedia("(orientation: landscape)");
            return t.onchange = this.l.bind(this),
            ()=>t.onchange = null
        }
    }
    async onDisconnect() {
        kr && this.i() && await this.unlock()
    }
    l(t) {
        this.j.set(uc()),
        this.dispatch("orientation-change", {
            detail: {
                orientation: ne(this.j),
                lock: this.k
            },
            trigger: t
        })
    }
    async lock(t) {
        ne(this.i) || this.k === t || (cc(),
        await screen.orientation.lock(t),
        this.i.set(!0),
        this.k = t)
    }
    async unlock() {
        ne(this.i) && (cc(),
        this.k = void 0,
        await screen.orientation.unlock(),
        this.i.set(!1))
    }
}
function cc() {
    if (!kr)
        throw Error("[vidstack] no orientation API")
}
function uc() {
    return kr ? window.screen.orientation.type : window.innerWidth >= window.innerHeight ? "landscape-primary" : "portrait-primary"
}
function Ct(i, e, t) {
    i.hasAttribute(e) || i.setAttribute(e, t)
}
function Ms(i, e) {
    if (i.hasAttribute("aria-label") || i.hasAttribute("aria-describedby"))
        return;
    function t() {
        $e(i, "aria-label", e())
    }
    U(t)
}
function od(i, e, t) {
    for (; e; ) {
        if (e === i)
            return !0;
        if (e.localName === i.localName || t != null && t(e))
            break;
        e = e.parentElement
    }
    return !1
}
function Zs(i, e) {
    fe(i, "pointerup", t=>{
        t.button === 0 && e(t)
    }
    ),
    fe(i, "keydown", t=>{
        el(t) && e(t)
    }
    )
}
function Kr(i) {
    const e = Wr();
    requestAnimationFrame(()=>Jt(i, e))
}
const ld = Xr();
function Ze() {
    return Li(ld)
}
const sm = ["autoplay", "autoplayError", "canFullscreen", "canPictureInPicture", "canLoad", "canPlay", "canSeek", "ended", "error", "fullscreen", "loop", "live", "liveEdge", "mediaType", "muted", "paused", "pictureInPicture", "playing", "playsinline", "seeking", "started", "streamType", "userIdle", "viewType", "waiting"]
  , rm = {
    togglePaused: "k Space",
    toggleMuted: "m",
    toggleFullscreen: "f",
    togglePictureInPicture: "i",
    toggleCaptions: "c",
    seekBackward: "ArrowLeft",
    seekForward: "ArrowRight",
    volumeUp: "ArrowUp",
    volumeDown: "ArrowDown"
}
  , dc = new Set(["Shift", "Alt", "Meta", "Control"])
  , nm = 'button, [role="button"]'
  , fc = 'input, textarea, select, [contenteditable], [role^="menuitem"]';
class am extends Nt {
    constructor(t, s) {
        super(t);
        g(this, "Xa");
        g(this, "Wa", null);
        this.n = s
    }
    onConnect() {
        U(this._a.bind(this))
    }
    _a() {
        const {keyDisabled: t, keyTarget: s} = this.$props;
        if (t())
            return;
        const r = s() === "player" ? this.el : document
          , n = De(!1);
        r === this.el ? (this.listen("focusin", ()=>n.set(!0)),
        this.listen("focusout", a=>{
            this.el.contains(a.target) || n.set(!1)
        }
        )) : (ne(n) || n.set(document.querySelector("media-player") === this.el),
        fe(document, "focusin", a=>{
            const o = a.composedPath().find(l=>l instanceof Element && l.localName === "media-player");
            o !== void 0 && n.set(this.el === o)
        }
        )),
        U(()=>{
            n() && (fe(r, "keyup", this.$a.bind(this)),
            fe(r, "keydown", this.ab.bind(this)),
            fe(r, "keydown", this.bb.bind(this), {
                capture: !0
            }))
        }
        )
    }
    $a(t) {
        const s = document.activeElement
          , r = s == null ? void 0 : s.hasAttribute("data-media-slider");
        if (!t.key || !this.$store.canSeek() || r || s != null && s.matches(fc))
            return;
        const n = this.Ya(t);
        if (n != null && n.startsWith("seek") && (t.preventDefault(),
        t.stopPropagation(),
        this.Wa ? (this.Za(t),
        this.Wa = null) : (this.n.remote.seek(this.Xa, t),
        this.Xa = void 0)),
        n != null && n.startsWith("volume")) {
            const a = this.el.querySelector("media-volume-slider");
            a == null || a.dispatchEvent(new nt("keyup",{
                trigger: t
            }))
        }
    }
    ab(t) {
        var a, o;
        if (!t.key || dc.has(t.key))
            return;
        const s = document.activeElement;
        if (s != null && s.matches(fc) || el(t) && (s != null && s.matches(nm)))
            return;
        const r = s == null ? void 0 : s.hasAttribute("data-media-slider")
          , n = this.Ya(t);
        if (!n && !t.metaKey && /[0-9]/.test(t.key) && !r) {
            t.preventDefault(),
            t.stopPropagation(),
            this.n.remote.seek(this.$store.duration() / 10 * Number(t.key), t);
            return
        }
        if (!(!n || /volume|seek/.test(n) && r))
            switch (t.preventDefault(),
            t.stopPropagation(),
            n) {
            case "seekForward":
            case "seekBackward":
                this.cb(t, n);
                break;
            case "volumeUp":
            case "volumeDown":
                const l = this.el.querySelector("media-volume-slider");
                if (l)
                    l.dispatchEvent(new nt("keydown",{
                        trigger: t
                    }));
                else {
                    const c = t.shiftKey ? .1 : .05;
                    this.n.remote.changeVolume(this.$store.volume() + (n === "volumeUp" ? +c : -c), t)
                }
                break;
            case "toggleFullscreen":
                this.n.remote.toggleFullscreen("prefer-media", t);
                break;
            default:
                (o = (a = this.n.remote)[n]) == null || o.call(a, t)
            }
    }
    bb(t) {
        Ip(t.target) && this.Ya(t) && t.preventDefault()
    }
    Ya(t) {
        const s = {
            ...this.$props.keyShortcuts(),
            ...this.n.ariaKeys
        };
        return Object.keys(s).find(r=>s[r].split(" ").some(n=>lm(n).replace(/Control/g, "Ctrl").split("+").every(a=>dc.has(a) ? t[a.toLowerCase() + "Key"] : t.key === a.replace("Space", " "))))
    }
    db(t, s) {
        const r = t.shiftKey ? 10 : 5;
        return this.Xa = Math.max(0, Math.min((this.Xa ?? this.$store.currentTime()) + (s === "seekForward" ? +r : -r), this.$store.duration()))
    }
    Za(t) {
        var s;
        (s = this.Wa) == null || s.dispatchEvent(new nt(t.type,{
            trigger: t
        }))
    }
    cb(t, s) {
        this.$store.canSeek() && (this.Wa || (this.Wa = this.el.querySelector("media-time-slider")),
        this.Wa ? this.Za(t) : this.n.remote.seeking(this.db(t, s), t))
    }
}
const om = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function lm(i) {
    return i.replace(/Shift\+(\d)/g, (e,t)=>om[t - 1])
}
const cm = {
    autoplay: !1,
    aspectRatio: ki({
        value: null,
        type: {
            from(i) {
                if (!i)
                    return null;
                if (!i.includes("/"))
                    return +i;
                const [e,t] = i.split("/").map(Number);
                return +(e / t).toFixed(4)
            }
        }
    }),
    controls: !1,
    currentTime: 0,
    crossorigin: null,
    fullscreenOrientation: "landscape",
    load: "visible",
    logLevel: "silent",
    loop: !1,
    muted: !1,
    paused: !0,
    playsinline: !1,
    playbackRate: 1,
    poster: "",
    preload: "metadata",
    preferNativeHLS: ki({
        value: !1,
        attribute: "prefer-native-hls"
    }),
    src: "",
    userIdleDelay: 2e3,
    viewType: "unknown",
    streamType: "unknown",
    volume: 1,
    liveEdgeTolerance: 10,
    minLiveDVRWindow: 60,
    keyDisabled: !1,
    keyTarget: "player",
    keyShortcuts: rm,
    title: "",
    thumbnails: null,
    textTracks: ki({
        value: [],
        attribute: !1
    }),
    smallBreakpointX: 600,
    largeBreakpointX: 980,
    smallBreakpointY: 380,
    largeBreakpointY: 600
};
class Oa {
    constructor(e, t) {
        g(this, "Z");
        fi(e) ? this.Z = e : !ti(e) && !ti(t) ? this.Z = [[e, t]] : this.Z = []
    }
    get length() {
        return this.Z.length
    }
    start(e) {
        return this.Z[e][0] ?? 1 / 0
    }
    end(e) {
        return this.Z[e][1] ?? 1 / 0
    }
}
function hc(i) {
    if (!i.length)
        return null;
    let e = i.start(0);
    for (let t = 1; t < i.length; t++) {
        const s = i.start(t);
        s < e && (e = s)
    }
    return e
}
function pc(i) {
    if (!i.length)
        return null;
    let e = i.end(0);
    for (let t = 1; t < i.length; t++) {
        const s = i.end(t);
        s > e && (e = s)
    }
    return e
}
const cd = new $u({
    audioTracks: [],
    audioTrack: null,
    autoplay: !1,
    autoplayError: void 0,
    buffered: new Oa,
    duration: 0,
    canLoad: !1,
    canFullscreen: !1,
    canPictureInPicture: !1,
    canPlay: !1,
    controls: !1,
    crossorigin: null,
    poster: "",
    currentTime: 0,
    ended: !1,
    error: void 0,
    fullscreen: !1,
    loop: !1,
    logLevel: "silent",
    mediaType: "unknown",
    muted: !1,
    paused: !0,
    played: new Oa,
    playing: !1,
    playsinline: !1,
    pictureInPicture: !1,
    preload: "metadata",
    playbackRate: 1,
    qualities: [],
    quality: null,
    autoQuality: !1,
    canSetQuality: !0,
    seekable: new Oa,
    seeking: !1,
    source: {
        src: "",
        type: ""
    },
    sources: [],
    started: !1,
    title: "",
    textTracks: [],
    textTrack: null,
    thumbnails: null,
    thumbnailCues: [],
    volume: 1,
    waiting: !1,
    get viewType() {
        return this.providedViewType !== "unknown" ? this.providedViewType : this.mediaType
    },
    get streamType() {
        return this.providedStreamType !== "unknown" ? this.providedStreamType : this.inferredStreamType
    },
    get currentSrc() {
        return this.source
    },
    get bufferedStart() {
        return hc(this.buffered) ?? 0
    },
    get bufferedEnd() {
        return pc(this.buffered) ?? 0
    },
    get seekableStart() {
        return hc(this.seekable) ?? 0
    },
    get seekableEnd() {
        return this.canPlay ? pc(this.seekable) ?? 1 / 0 : 0
    },
    get seekableWindow() {
        return Math.max(0, this.seekableEnd - this.seekableStart)
    },
    touchPointer: !1,
    orientation: "landscape",
    mediaWidth: 0,
    mediaHeight: 0,
    breakpointX: "sm",
    breakpointY: "sm",
    userIdle: !1,
    userBehindLiveEdge: !1,
    liveEdgeTolerance: 10,
    minLiveDVRWindow: 60,
    get canSeek() {
        return /unknown|on-demand|:dvr/.test(this.streamType) && Number.isFinite(this.seekableWindow) && (!this.live || /:dvr/.test(this.streamType) && this.seekableWindow >= this.minLiveDVRWindow)
    },
    get live() {
        return this.streamType.includes("live") || !Number.isFinite(this.duration)
    },
    get liveEdgeStart() {
        return this.live && Number.isFinite(this.seekableEnd) ? Math.max(0, (this.liveSyncPosition ?? this.seekableEnd) - this.liveEdgeTolerance) : 0
    },
    get liveEdge() {
        return this.live && (!this.canSeek || !this.userBehindLiveEdge && this.currentTime >= this.liveEdgeStart)
    },
    get liveEdgeWindow() {
        return this.live && Number.isFinite(this.seekableEnd) ? this.seekableEnd - this.liveEdgeStart : 0
    },
    autoplaying: !1,
    providedViewType: "unknown",
    providedStreamType: "unknown",
    inferredStreamType: "unknown",
    liveSyncPosition: null
})
  , um = new Set(["autoplay", "breakpointX", "breakpointY", "canFullscreen", "canLoad", "canPictureInPicture", "controls", "fullscreen", "logLevel", "loop", "mediaHeight", "mediaWidth", "muted", "orientation", "pictureInPicture", "playsinline", "poster", "preload", "providedStreamType", "providedViewType", "source", "sources", "textTrack", "textTracks", "thumbnailCues", "thumbnails", "title", "touchPointer", "volume"]);
function dm(i) {
    cd.reset(i, e=>!um.has(e)),
    Oi()
}
const br = Symbol(0);
class ud extends rd {
    get selected() {
        return this.d.find(e=>e.selected) ?? null
    }
    get selectedIndex() {
        return this.d.findIndex(e=>e.selected)
    }
    [id](e, t) {
        this[Aa](e, !1, t)
    }
    [zn](e, t) {
        e[br] = !1,
        Object.defineProperty(e, "selected", {
            get() {
                return this[br]
            },
            set: s=>{
                var r;
                this.readonly || ((r = this[sd]) == null || r.call(this),
                this[Aa](e, s))
            }
        }),
        super[zn](e, t)
    }
    [Aa](e, t, s) {
        if (t === e[br])
            return;
        const r = this.selected;
        e[br] = t,
        (t ? r !== e : r === e) && (r && (r[br] = !1),
        this.dispatchEvent(new nt("change",{
            detail: {
                prev: r,
                current: this.selected
            },
            trigger: s
        })))
    }
}
const bn = Symbol(0)
  , ka = Symbol(0);
var n6;
class fm extends ud {
    constructor() {
        super(...arguments);
        g(this, "Ka", !1);
        g(this, "switch", "current");
        g(this, n6)
    }
    get auto() {
        return this.Ka || this.readonly
    }
    [(n6 = ka,
    sd)]() {
        this[bn](!1)
    }
    [td](t) {
        this[bn](!1, t)
    }
    autoSelect(t) {
        this.readonly || this.Ka || !this[ka] || (this[ka](),
        this[bn](!0, t))
    }
    [bn](t, s) {
        this.Ka !== t && (this.Ka = t,
        this.dispatchEvent(new nt("auto-change",{
            detail: t,
            trigger: s
        })))
    }
}
class hm extends Nt {
    constructor(e, t) {
        super(e),
        this._e = t
    }
    async onAttach(e) {
        const t = this.$props.load();
        if (t === "eager")
            requestAnimationFrame(this._e);
        else if (t === "idle") {
            const {waitIdlePeriod: s} = await z(()=>Promise.resolve().then(()=>Op), void 0);
            s(this._e)
        } else if (t === "visible") {
            const s = new IntersectionObserver(r=>{
                r[0].isIntersecting && (s.disconnect(),
                this._e())
            }
            );
            return s.observe(e),
            s.disconnect.bind(s)
        }
    }
}
class pm {
    constructor(e, t) {
        this.L = e,
        this.n = t
    }
    U(e, ...t) {
        this.L(new nt(e,t == null ? void 0 : t[0]))
    }
    async af(e, t) {
        const {$store: s, logger: r} = this.n;
        ne(s.canPlay) || (this.U("can-play", {
            detail: e,
            trigger: t
        }),
        Oi(),
        s.canPlay() && s.autoplay() && !s.started() && await this.$e())
    }
    async $e() {
        const {player: e, $store: t} = this.n;
        t.autoplaying.set(!0);
        try {
            await e.play(),
            this.U("autoplay", {
                detail: {
                    muted: t.muted()
                }
            })
        } catch (s) {
            this.U("autoplay-fail", {
                detail: {
                    muted: t.muted(),
                    error: s
                }
            })
        } finally {
            t.autoplaying.set(!1)
        }
    }
}
class mm {
    constructor() {
        g(this, "Pe", new Map)
    }
    q(e, t) {
        this.Pe.has(e) || this.Pe.set(e, new Set),
        this.Pe.get(e).add(t)
    }
    Ue(e, t) {
        const s = this.Pe.get(e);
        if (s)
            for (const r of s)
                t(r);
        this.Pe.delete(e)
    }
    zf(e) {
        this.Pe.delete(e)
    }
    Ve(e) {
        var t;
        return ((t = this.Pe.get(e)) == null ? void 0 : t.size) ?? 0
    }
    Ye() {
        this.Pe.clear()
    }
}
function yn(i) {
    return i instanceof Error ? i : Error(JSON.stringify(i))
}
class gm extends Nt {
    constructor() {
        super(...arguments);
        g(this, "ga", -2);
        g(this, "ea", 2e3);
        g(this, "ha", !1);
        g(this, "fa", null)
    }
    get idling() {
        return this.$store.userIdle()
    }
    get idleDelay() {
        return this.ea
    }
    set idleDelay(t) {
        this.ea = t
    }
    idle(t, s=this.ea, r) {
        this.ia(),
        this.ha || this.ja(t, s, r)
    }
    pauseIdleTracking(t, s) {
        this.ha = t,
        t && (this.ia(),
        this.ja(!1, 0, s))
    }
    onConnect() {
        U(this.A.bind(this)),
        fe(this.el, "play", this.la.bind(this)),
        fe(this.el, "pause", this.ma.bind(this))
    }
    A() {
        if (this.$store.paused())
            return;
        const t = this.na.bind(this);
        for (const s of ["pointerup", "keydown"])
            fe(this.el, s, t);
        U(()=>{
            this.$store.touchPointer() || fe(this.el, "pointermove", t)
        }
        )
    }
    la(t) {
        this.idle(!0, this.ea, t)
    }
    ma(t) {
        this.idle(!1, 0, t)
    }
    ia() {
        window.clearTimeout(this.ga),
        this.ga = -1
    }
    na(t) {
        var s;
        t.MEDIA_GESTURE || (ci(t) && (t.key === "Escape" ? ((s = this.el) == null || s.focus(),
        this.fa = null) : this.fa && (t.preventDefault(),
        requestAnimationFrame(()=>{
            var r;
            (r = this.fa) == null || r.focus(),
            this.fa = null
        }
        ))),
        this.idle(!1, 0, t),
        this.idle(!0, this.ea, t))
    }
    ja(t, s, r) {
        if (s === 0) {
            this.ka(t, r);
            return
        }
        this.ga = window.setTimeout(()=>{
            this.ka(t && !this.ha, r)
        }
        , s)
    }
    ka(t, s) {
        var r;
        this.$store.userIdle() !== t && (this.$store.userIdle.set(t),
        t && document.activeElement && ((r = this.el) != null && r.contains(document.activeElement)) && (this.fa = document.activeElement,
        requestAnimationFrame(()=>{
            var n;
            return (n = this.el) == null ? void 0 : n.focus()
        }
        )),
        this.dispatch("user-idle-change", {
            detail: t,
            trigger: s
        }))
    }
}
class vm {
    constructor() {
        g(this, "cb", !1);
        g(this, "sf", !1);
        g(this, "qf", !1);
        g(this, "Pe", new mm)
    }
}
class bm extends Nt {
    constructor(t, s, r, n) {
        super(t);
        g(this, "O");
        g(this, "pf");
        g(this, "qb");
        g(this, "of");
        g(this, "m");
        g(this, "rf", !1);
        this.r = s,
        this.nf = r,
        this.n = n,
        this.of = n.$store,
        this.m = n.$provider,
        this.O = new gm(t),
        this.pf = new Wp(t),
        this.qb = new ad(t)
    }
    onConnect() {
        U(this.vf.bind(this)),
        U(this.wf.bind(this)),
        U(this.xf.bind(this));
        const t = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
          , s = this.yf.bind(this);
        for (const r of t)
            r.startsWith("media-") && this.listen(r, s);
        this.listen("fullscreen-change", this.g.bind(this))
    }
    yf(t) {
        var s;
        t.stopPropagation(),
        ne(this.m) && ((s = this[t.type]) == null || s.call(this, t))
    }
    async K() {
        const {canPlay: t, paused: s, ended: r, autoplaying: n, seekableStart: a} = this.of;
        if (ne(s))
            try {
                const o = ne(this.m);
                return La(o, ne(t)),
                ne(r) && (o.currentTime = a() + .1),
                o.play()
            } catch (o) {
                const l = this.createEvent("play-fail", {
                    detail: yn(o)
                });
                throw l.autoplay = n(),
                this.r.L(l),
                o
            }
    }
    async J() {
        const {canPlay: t, paused: s} = this.of;
        if (ne(s))
            return;
        const r = ne(this.m);
        return La(r, ne(t)),
        r.pause()
    }
    T() {
        const {canPlay: t, live: s, liveEdge: r, canSeek: n, liveSyncPosition: a, seekableEnd: o, userBehindLiveEdge: l} = this.of;
        if (l.set(!1),
        ne(()=>!s() || r() || !n()))
            return;
        const c = ne(this.m);
        La(c, ne(t)),
        c.currentTime = a() ?? o() - 2
    }
    async P(t="prefer-media") {
        const s = ne(this.m)
          , r = t === "prefer-media" && this.pf.supported || t === "media" ? this.pf : s == null ? void 0 : s.fullscreen;
        if (mc(t, r),
        !r.active)
            return ne(this.of.pictureInPicture) && (this.rf = !0,
            await this.S()),
            r.enter()
    }
    async Q(t="prefer-media") {
        const s = ne(this.m)
          , r = t === "prefer-media" && this.pf.supported || t === "media" ? this.pf : s == null ? void 0 : s.fullscreen;
        if (mc(t, r),
        !!r.active) {
            this.qb.locked && await this.qb.unlock();
            try {
                const n = await r.exit();
                return this.rf && ne(this.of.canPictureInPicture) && await this.R(),
                n
            } finally {
                this.rf = !1
            }
        }
    }
    async R() {
        if (this.tf(),
        !this.of.pictureInPicture())
            return await this.m().pictureInPicture.enter()
    }
    async S() {
        if (this.tf(),
        !!this.of.pictureInPicture())
            return await this.m().pictureInPicture.exit()
    }
    tf() {
        if (!this.of.canPictureInPicture())
            throw Error("[vidstack] no pip support")
    }
    vf() {
        this.O.idleDelay = this.$props.userIdleDelay()
    }
    wf() {
        var n, a;
        const {canLoad: t, canFullscreen: s} = this.of
          , r = this.pf.supported || ((a = (n = this.m()) == null ? void 0 : n.fullscreen) == null ? void 0 : a.supported) || !1;
        t() && ne(s) === r || s.set(r)
    }
    xf() {
        var n, a;
        const {canLoad: t, canPictureInPicture: s} = this.of
          , r = ((a = (n = this.m()) == null ? void 0 : n.pictureInPicture) == null ? void 0 : a.supported) || !1;
        t() && ne(s) === r || s.set(r)
    }
    "media-audio-track-change-request"(t) {
        if (this.n.audioTracks.readonly)
            return;
        const s = t.detail
          , r = this.n.audioTracks[s];
        r && (this.nf.Pe.q("audioTrack", t),
        r.selected = !0)
    }
    async "media-enter-fullscreen-request"(t) {
        try {
            this.nf.Pe.q("fullscreen", t),
            await this.P(t.detail)
        } catch (s) {
            this.h(s)
        }
    }
    async "media-exit-fullscreen-request"(t) {
        try {
            this.nf.Pe.q("fullscreen", t),
            await this.Q(t.detail)
        } catch (s) {
            this.h(s)
        }
    }
    async g(t) {
        if (t.detail)
            try {
                const s = ne(this.$props.fullscreenOrientation);
                this.qb.supported && !ti(s) && await this.qb.lock(s)
            } catch {}
    }
    h(t) {
        this.r.L(this.createEvent("fullscreen-error", {
            detail: yn(t)
        }))
    }
    async "media-enter-pip-request"(t) {
        try {
            this.nf.Pe.q("pip", t),
            await this.R()
        } catch (s) {
            this.uf(s)
        }
    }
    async "media-exit-pip-request"(t) {
        try {
            this.nf.Pe.q("pip", t),
            await this.S()
        } catch (s) {
            this.uf(s)
        }
    }
    uf(t) {
        this.r.L(this.createEvent("picture-in-picture-error", {
            detail: yn(t)
        }))
    }
    "media-live-edge-request"(t) {
        const {live: s, liveEdge: r, canSeek: n} = this.of;
        if (!(!s() || r() || !n())) {
            this.nf.Pe.q("seeked", t);
            try {
                this.T()
            } catch {}
        }
    }
    "media-loop-request"() {
        window.requestAnimationFrame(async()=>{
            try {
                this.nf.sf = !0,
                this.nf.qf = !0,
                await this.K()
            } catch {
                this.nf.sf = !1,
                this.nf.qf = !1
            }
        }
        )
    }
    async "media-pause-request"(t) {
        if (!this.of.paused())
            try {
                this.nf.Pe.q("pause", t),
                await this.m().pause()
            } catch {
                this.nf.Pe.zf("pause")
            }
    }
    async "media-play-request"(t) {
        if (this.of.paused())
            try {
                this.nf.Pe.q("play", t),
                await this.m().play()
            } catch (s) {
                const r = this.createEvent("play-fail", {
                    detail: yn(s)
                });
                this.r.L(r)
            }
    }
    "media-rate-change-request"(t) {
        this.of.playbackRate() !== t.detail && (this.nf.Pe.q("rate", t),
        this.m().playbackRate = t.detail)
    }
    "media-quality-change-request"(t) {
        if (this.n.qualities.readonly)
            return;
        this.nf.Pe.q("quality", t);
        const s = t.detail;
        if (s < 0)
            this.n.qualities.autoSelect(t);
        else {
            const r = this.n.qualities[s];
            r && (r.selected = !0)
        }
    }
    "media-resume-user-idle-request"(t) {
        this.nf.Pe.q("userIdle", t),
        this.O.pauseIdleTracking(!1, t)
    }
    "media-pause-user-idle-request"(t) {
        this.nf.Pe.q("userIdle", t),
        this.O.pauseIdleTracking(!0, t)
    }
    "media-seek-request"(t) {
        const {seekableStart: s, seekableEnd: r, ended: n, canSeek: a, live: o, userBehindLiveEdge: l} = this.of;
        n() && (this.nf.qf = !0),
        this.nf.cb = !1,
        this.nf.Pe.zf("seeking");
        const c = Math.min(Math.max(s() + .1, t.detail), r() - .1);
        !Number.isFinite(c) || !a() || (this.nf.Pe.q("seeked", t),
        this.m().currentTime = c,
        o() && t.isOriginTrusted && Math.abs(r() - c) >= 2 && l.set(!0))
    }
    "media-seeking-request"(t) {
        this.nf.Pe.q("seeking", t),
        this.of.seeking.set(!0),
        this.nf.cb = !0
    }
    "media-start-loading"(t) {
        this.of.canLoad() || (this.nf.Pe.q("load", t),
        this.r.L(this.createEvent("can-load")))
    }
    "media-text-track-change-request"(t) {
        const {index: s, mode: r} = t.detail
          , n = this.n.textTracks[s];
        n && (this.nf.Pe.q("textTrack", t),
        n.setMode(r, t))
    }
    "media-mute-request"(t) {
        this.of.muted() || (this.nf.Pe.q("volume", t),
        this.m().muted = !0)
    }
    "media-unmute-request"(t) {
        const {muted: s, volume: r} = this.of;
        s() && (this.nf.Pe.q("volume", t),
        this.n.$provider().muted = !1,
        r() === 0 && (this.nf.Pe.q("volume", t),
        this.m().volume = .25))
    }
    "media-volume-change-request"(t) {
        const {muted: s, volume: r} = this.of
          , n = t.detail;
        r() !== n && (this.nf.Pe.q("volume", t),
        this.m().volume = n,
        n > 0 && s() && (this.nf.Pe.q("volume", t),
        this.m().muted = !1))
    }
}
function La(i, e) {
    if (!(i && e))
        throw Error("[vidstack] media not ready")
}
function mc(i, e) {
    if (!(e != null && e.supported))
        throw Error("[vidstack] no fullscreen support")
}
var ym = wm;
function wm(i, e, t) {
    var s = null
      , r = null
      , n = function() {
        s && (clearTimeout(s),
        r = null,
        s = null)
    }
      , a = function() {
        var l = r;
        n(),
        l && l()
    }
      , o = function() {
        if (!e)
            return i.apply(this, arguments);
        var l = this
          , c = arguments
          , u = t && !s;
        if (n(),
        r = function() {
            i.apply(l, c)
        }
        ,
        s = setTimeout(function() {
            if (s = null,
            !u) {
                var d = r;
                return r = null,
                d()
            }
        }, e),
        u)
            return r()
    };
    return o.cancel = n,
    o.flush = a,
    o
}
var ca = Em;
function Em(i, e, t) {
    var s = null
      , r = null
      , n = t && t.leading
      , a = t && t.trailing;
    n == null && (n = !0),
    a == null && (a = !n),
    n == !0 && (a = !1);
    var o = function() {
        s && (clearTimeout(s),
        s = null)
    }
      , l = function() {
        var u = r;
        o(),
        u && u()
    }
      , c = function() {
        var u = n && !s
          , d = this
          , f = arguments;
        if (r = function() {
            return i.apply(d, f)
        }
        ,
        s || (s = setTimeout(function() {
            if (s = null,
            a)
                return r()
        }, e)),
        u)
            return u = !1,
            r()
    };
    return c.cancel = o,
    c.flush = l,
    c
}
const xm = Symbol(0)
  , Ys = Symbol(0)
  , ps = Symbol(0)
  , qs = Symbol(0)
  , Lr = Symbol(0)
  , oo = Symbol(0)
  , li = Symbol(0)
  , _m = Symbol(0)
  , Tm = new Set(["autoplay", "autoplay-fail", "can-load", "sources-change", "source-change", "load-start", "abort", "error", "loaded-metadata", "loaded-data", "can-play", "play", "play-fail", "pause", "playing", "seeking", "seeked", "waiting"]);
class Sm extends Nt {
    constructor(t, s, r) {
        super(t);
        g(this, "of");
        g(this, "Bf", new Map);
        g(this, "If", !0);
        g(this, "Ff", !1);
        g(this, "Df");
        g(this, "seeking", ca(t=>{
            const {seeking: s, currentTime: r, paused: n} = this.of;
            s.set(!0),
            r.set(t.detail),
            this.Cf("seeking", t),
            n() && (this.Df = t,
            this.Hf())
        }
        , 150, {
            leading: !0
        }));
        g(this, "Hf", ym(()=>{
            if (!this.Df)
                return;
            this.Ff = !0;
            const {waiting: t, playing: s} = this.of;
            t.set(!0),
            s.set(!1);
            const r = this.createEvent("waiting", {
                trigger: this.Df
            });
            this.Bf.set("waiting", r),
            this.el.dispatchEvent(r),
            this.Df = void 0,
            this.Ff = !1
        }
        , 300));
        this.nf = s,
        this.n = r,
        this.of = r.$store
    }
    onAttach(t) {
        t.setAttribute("aria-busy", "true")
    }
    onConnect(t) {
        this.Of(),
        this.Pf(),
        this.Qf(),
        this.listen("fullscreen-change", this["fullscreen-change"].bind(this)),
        this.listen("fullscreen-error", this["fullscreen-error"].bind(this))
    }
    L(t) {
        var r, n;
        const s = t.type;
        (r = this[t.type]) == null || r.call(this, t),
        Tm.has(s) && this.Bf.set(s, t),
        (n = this.el) == null || n.dispatchEvent(t)
    }
    Ef() {
        this.Jf(),
        this.nf.qf = !1,
        this.nf.sf = !1,
        this.Ff = !1,
        this.Df = void 0,
        this.Bf.clear()
    }
    Cf(t, s) {
        this.nf.Pe.Ue(t, r=>{
            s.request = r,
            Ue(s, r)
        }
        )
    }
    Of() {
        this.Gf(),
        this.Kf();
        const t = this.n.textTracks;
        fe(t, "add", this.Gf.bind(this)),
        fe(t, "remove", this.Gf.bind(this)),
        fe(t, "mode-change", this.Kf.bind(this))
    }
    Pf() {
        const t = this.n.qualities;
        fe(t, "add", this.Lf.bind(this)),
        fe(t, "remove", this.Lf.bind(this)),
        fe(t, "change", this.Rf.bind(this)),
        fe(t, "auto-change", this.Sf.bind(this)),
        fe(t, "readonly-change", this.Tf.bind(this))
    }
    Qf() {
        const t = this.n.audioTracks;
        fe(t, "add", this.Mf.bind(this)),
        fe(t, "remove", this.Mf.bind(this)),
        fe(t, "change", this.Uf.bind(this))
    }
    Gf(t) {
        const {textTracks: s} = this.of;
        s.set(this.n.textTracks.toArray()),
        this.dispatch("text-tracks-change", {
            detail: s(),
            trigger: t
        })
    }
    Kf(t) {
        t && this.Cf("textTrack", t);
        const s = this.n.textTracks.selected
          , {textTrack: r} = this.of;
        r() !== s && (r.set(s),
        this.dispatch("text-track-change", {
            detail: s,
            trigger: t
        }))
    }
    Mf(t) {
        const {audioTracks: s} = this.of;
        s.set(this.n.audioTracks.toArray()),
        this.dispatch("audio-tracks-change", {
            detail: s(),
            trigger: t
        })
    }
    Uf(t) {
        const {audioTrack: s} = this.of;
        s.set(this.n.audioTracks.selected),
        this.Cf("audioTrack", t),
        this.dispatch("audio-track-change", {
            detail: s(),
            trigger: t
        })
    }
    Lf(t) {
        const {qualities: s} = this.of;
        s.set(this.n.qualities.toArray()),
        this.dispatch("qualities-change", {
            detail: s(),
            trigger: t
        })
    }
    Rf(t) {
        const {quality: s} = this.of;
        s.set(this.n.qualities.selected),
        this.Cf("quality", t),
        this.dispatch("quality-change", {
            detail: s(),
            trigger: t
        })
    }
    Sf() {
        this.of.autoQuality.set(this.n.qualities.auto)
    }
    Tf() {
        this.of.canSetQuality.set(!this.n.qualities.readonly)
    }
    "provider-change"(t) {
        this.n.$provider.set(t.detail)
    }
    autoplay(t) {
        Ue(t, this.Bf.get("play")),
        Ue(t, this.Bf.get("can-play")),
        this.of.autoplayError.set(void 0)
    }
    "autoplay-fail"(t) {
        Ue(t, this.Bf.get("play-fail")),
        Ue(t, this.Bf.get("can-play")),
        this.of.autoplayError.set(t.detail),
        this.Ef()
    }
    "can-load"(t) {
        this.of.canLoad.set(!0),
        this.Bf.set("can-load", t),
        this.Cf("load", t),
        this.n.textTracks[Lr]()
    }
    "media-type-change"(t) {
        Ue(t, this.Bf.get("source-change"));
        const s = this.of.viewType();
        this.of.mediaType.set(t.detail),
        s !== this.of.viewType() && setTimeout(()=>this.dispatch("view-type-change", {
            detail: this.of.viewType(),
            trigger: t
        }), 0)
    }
    "stream-type-change"(t) {
        const {streamType: s, inferredStreamType: r} = this.of;
        Ue(t, this.Bf.get("source-change")),
        r.set(t.detail),
        t.detail = s()
    }
    "rate-change"(t) {
        this.of.playbackRate.set(t.detail),
        this.Cf("rate", t)
    }
    "sources-change"(t) {
        this.of.sources.set(t.detail)
    }
    "source-change"(t) {
        var s;
        if (Ue(t, this.Bf.get("sources-change")),
        this.of.source.set(t.detail),
        (s = this.el) == null || s.setAttribute("aria-busy", "true"),
        this.If) {
            this.If = !1;
            return
        }
        this.n.audioTracks[ao](t),
        this.n.qualities[ao](t),
        this.Ef(),
        dm(this.n.$store),
        this.Bf.set(t.type, t)
    }
    abort(t) {
        Ue(t, this.Bf.get("source-change")),
        Ue(t, this.Bf.get("can-load"))
    }
    "load-start"(t) {
        Ue(t, this.Bf.get("source-change"))
    }
    error(t) {
        this.of.error.set(t.detail),
        Ue(t, this.Bf.get("abort"))
    }
    "loaded-metadata"(t) {
        Ue(t, this.Bf.get("load-start"))
    }
    "loaded-data"(t) {
        Ue(t, this.Bf.get("load-start"))
    }
    "can-play"(t) {
        var s, r;
        ((s = t.trigger) == null ? void 0 : s.type) !== "loadedmetadata" && Ue(t, this.Bf.get("loaded-metadata")),
        this.Nf(t.detail),
        (r = this.el) == null || r.setAttribute("aria-busy", "false")
    }
    "can-play-through"(t) {
        this.Nf(t.detail),
        Ue(t, this.Bf.get("can-play"))
    }
    Nf(t) {
        const {seekable: s, seekableEnd: r, buffered: n, duration: a, canPlay: o} = this.of;
        s.set(t.seekable),
        n.set(t.buffered),
        a.set(r),
        o.set(!0)
    }
    "duration-change"(t) {
        const {live: s, duration: r} = this.of
          , n = t.detail;
        s() || r.set(Number.isNaN(n) ? 0 : n)
    }
    progress(t) {
        const {buffered: s, seekable: r, live: n, duration: a, seekableEnd: o} = this.of
          , l = t.detail;
        s.set(l.buffered),
        r.set(l.seekable),
        n() && (a.set(o),
        this.dispatch("duration-change", {
            detail: o(),
            trigger: t
        }))
    }
    play(t) {
        const {paused: s, autoplayError: r, ended: n, autoplaying: a} = this.of;
        if (t.autoplay = a(),
        this.nf.sf || !s()) {
            t.stopImmediatePropagation();
            return
        }
        Ue(t, this.Bf.get("waiting")),
        this.Cf("play", t),
        s.set(!1),
        r.set(void 0),
        (n() || this.nf.qf) && (this.nf.qf = !1,
        n.set(!1),
        this.L(this.createEvent("replay", {
            trigger: t
        })))
    }
    "play-fail"(t) {
        Ue(t, this.Bf.get("play")),
        this.Cf("play", t);
        const {paused: s, playing: r} = this.of;
        s.set(!0),
        r.set(!1),
        this.Ef()
    }
    playing(t) {
        const s = this.Bf.get("play");
        s ? (Ue(t, this.Bf.get("waiting")),
        Ue(t, s)) : Ue(t, this.Bf.get("seeked")),
        setTimeout(()=>this.Ef(), 0);
        const {paused: r, playing: n, seeking: a, ended: o} = this.of;
        if (r.set(!1),
        n.set(!0),
        a.set(!1),
        o.set(!1),
        this.nf.sf) {
            t.stopImmediatePropagation(),
            this.nf.sf = !1;
            return
        }
        this.started(t)
    }
    started(t) {
        const {started: s, live: r, liveSyncPosition: n, seekableEnd: a} = this.of;
        if (!s()) {
            if (r()) {
                const o = n() ?? a() - 2;
                Number.isFinite(o) && (this.n.$provider().currentTime = o)
            }
            s.set(!0),
            this.L(this.createEvent("started", {
                trigger: t
            }))
        }
    }
    pause(t) {
        if (this.nf.sf) {
            t.stopImmediatePropagation();
            return
        }
        Ue(t, this.Bf.get("seeked")),
        this.Cf("pause", t);
        const {paused: s, playing: r, seeking: n} = this.of;
        s.set(!0),
        r.set(!1),
        n.set(!1),
        this.Ef()
    }
    "time-update"(t) {
        const {currentTime: s, played: r, waiting: n} = this.of
          , a = t.detail;
        s.set(a.currentTime),
        r.set(a.played),
        n.set(!1);
        for (const o of this.n.textTracks)
            o[qs](a.currentTime, t)
    }
    "volume-change"(t) {
        const {volume: s, muted: r} = this.of
          , n = t.detail;
        s.set(n.volume),
        r.set(n.muted || n.volume === 0),
        this.Cf("volume", t)
    }
    seeked(t) {
        var l;
        const {seeking: s, currentTime: r, paused: n, duration: a, ended: o} = this.of;
        if (this.nf.cb)
            s.set(!0),
            t.stopImmediatePropagation();
        else if (s()) {
            const c = this.Bf.get("waiting");
            Ue(t, c),
            ((l = c == null ? void 0 : c.trigger) == null ? void 0 : l.type) !== "seeking" && Ue(t, this.Bf.get("seeking")),
            n() && this.Jf(),
            s.set(!1),
            t.detail !== a() && o.set(!1),
            r.set(t.detail),
            this.Cf("seeked", t);
            const u = t.originEvent;
            u && u.isTrusted && !/seek/.test(u.type) && this.started(t)
        }
    }
    waiting(t) {
        this.Ff || this.nf.cb || (t.stopImmediatePropagation(),
        this.Df = t,
        this.Hf())
    }
    ended(t) {
        if (this.nf.sf) {
            t.stopImmediatePropagation();
            return
        }
        const {paused: s, playing: r, seeking: n, ended: a} = this.of;
        s.set(!0),
        r.set(!1),
        n.set(!1),
        a.set(!0),
        this.Ef()
    }
    Jf() {
        this.Hf.cancel(),
        this.of.waiting.set(!1)
    }
    "fullscreen-change"(t) {
        this.of.fullscreen.set(t.detail),
        this.Cf("fullscreen", t)
    }
    "fullscreen-error"(t) {
        this.Cf("fullscreen", t)
    }
    "picture-in-picture-change"(t) {
        this.of.pictureInPicture.set(t.detail),
        this.Cf("pip", t)
    }
    "picture-in-picture-error"(t) {
        this.Cf("pip", t)
    }
}
class Cm extends Nt {
    onAttach(e) {
        U(this.bf.bind(this)),
        U(this.cf.bind(this)),
        U(this.df.bind(this)),
        U(this.ef.bind(this)),
        U(this.ff.bind(this)),
        U(this.gf.bind(this)),
        U(this.hf.bind(this)),
        U(this.jf.bind(this)),
        U(this.kf.bind(this)),
        U(this.lf.bind(this))
    }
    mf() {}
    bf() {
        const e = this.$props.autoplay();
        this.$store.autoplay.set(e),
        this.dispatch("autoplay-change", {
            detail: e
        })
    }
    df() {
        const e = this.$props.loop();
        this.$store.loop.set(e),
        this.dispatch("loop-change", {
            detail: e
        })
    }
    ef() {
        const e = this.$props.controls();
        this.$store.controls.set(e),
        this.dispatch("controls-change", {
            detail: e
        })
    }
    cf() {
        const e = this.$props.poster();
        this.$store.poster.set(e),
        this.dispatch("poster-change", {
            detail: e
        })
    }
    ff() {
        this.$store.crossorigin.set(this.$props.crossorigin())
    }
    gf() {
        const e = this.$props.playsinline();
        this.$store.playsinline.set(e),
        this.dispatch("playsinline-change", {
            detail: e
        })
    }
    jf() {
        this.dispatch("live-change", {
            detail: this.$store.live()
        })
    }
    hf() {
        this.$store.liveEdgeTolerance.set(this.$props.liveEdgeTolerance()),
        this.$store.minLiveDVRWindow.set(this.$props.minLiveDVRWindow())
    }
    kf() {
        this.dispatch("live-edge-change", {
            detail: this.$store.liveEdge()
        })
    }
    lf() {
        this.$store.thumbnails.set(this.$props.thumbnails())
    }
}
function ll(i, e="preconnect") {
    const t = document.querySelector(`link[href="${i}"]`);
    if (!Ps(t))
        return !0;
    const s = document.createElement("link");
    return s.rel = e,
    s.href = i,
    s.crossOrigin = "true",
    document.head.append(s),
    !0
}
const wn = {};
function v6(i) {
    if (wn[i])
        return wn[i].promise;
    const e = Bn()
      , t = document.querySelector(`script[src="${i}"]`);
    if (!Ps(t))
        return e.resolve(),
        e.promise;
    const s = document.createElement("script");
    return s.src = i,
    s.onload = ()=>{
        e.resolve(),
        delete wn[i]
    }
    ,
    s.onerror = ()=>{
        e.reject(),
        delete wn[i]
    }
    ,
    setTimeout(()=>document.head.append(s), 0),
    e.promise
}
function cl(i) {
    return i === "use-credentials" ? "include" : di(i) ? "same-origin" : void 0
}
function $m(i, e) {
    for (let t = 0, s = e.length; t < s; t++)
        if (qn(e[t], i))
            return e[t];
    return null
}
function qn(i, e) {
    return e >= i.startTime && e < i.endTime
}
function dd(i, e, t) {
    const s = i.toArray().find(r=>r.kind === "chapters" && r.mode === "showing");
    if (s !== e) {
        if (!s) {
            t(null);
            return
        }
        s.readyState == 2 ? t(s) : (t(null),
        s.addEventListener("load", ()=>t(s), {
            once: !0
        }))
    }
}
var a6, o6, l6, c6;
class lo extends Qo {
    constructor(t) {
        super();
        g(this, "src");
        g(this, "content");
        g(this, "type");
        g(this, "encoding");
        g(this, "id", "");
        g(this, "label", "");
        g(this, "language", "");
        g(this, "kind");
        g(this, "default", !1);
        g(this, "Ha", !1);
        g(this, "Ma", 0);
        g(this, "Oa", "disabled");
        g(this, "Qa", {});
        g(this, "Pa", []);
        g(this, "La", []);
        g(this, "Na", []);
        g(this, a6, 0);
        g(this, o6);
        g(this, l6, null);
        g(this, c6, null);
        for (const s of Object.keys(t))
            this[s] = t[s];
        this.type || (this.type = "vtt"),
        t.content ? z(()=>import("./prod-510e8363.js"), []).then(({parseText: s, VTTCue: r, VTTRegion: n})=>{
            t.type === "json" ? this.Ra(t.content, r, n) : s(t.content, {
                type: t.type
            }).then(({cues: a, regions: o})=>{
                this.La = a,
                this.Pa = o,
                this.Sa()
            }
            )
        }
        ) : t.src || (this[ps] = 2)
    }
    static createId(t) {
        return `id::${t.type}-${t.kind}-${t.src ?? t.label}`
    }
    get metadata() {
        return this.Qa
    }
    get regions() {
        return this.Pa
    }
    get cues() {
        return this.La
    }
    get activeCues() {
        return this.Na
    }
    get readyState() {
        return this[ps]
    }
    get mode() {
        return this.Oa
    }
    set mode(t) {
        this.setMode(t)
    }
    addCue(t, s) {
        var a;
        let r = 0
          , n = this.La.length;
        for (r = 0; r < n && !(t.endTime <= this.La[r].startTime); r++)
            ;
        r === n ? this.La.push(t) : this.La.splice(r, 0, t),
        (s == null ? void 0 : s.type) !== "cuechange" && ((a = this[li]) == null || a.track.addCue(t)),
        this.dispatchEvent(new nt("add-cue",{
            detail: t,
            trigger: s
        })),
        qn(t, this.Ma) && this[qs](this.Ma, s)
    }
    removeCue(t, s) {
        var n;
        const r = this.La.indexOf(t);
        if (r >= 0) {
            const a = this.Na.includes(t);
            this.La.splice(r, 1),
            (n = this[li]) == null || n.track.removeCue(t),
            this.dispatchEvent(new nt("remove-cue",{
                detail: t,
                trigger: s
            })),
            a && this[qs](this.Ma, s)
        }
    }
    setMode(t, s) {
        var r;
        this.Oa !== t && (this.Oa = t,
        t === "disabled" ? (this.Na = [],
        this.Ta()) : this.readyState === 2 ? this[qs](this.Ma, s) : this.Ua(),
        this.dispatchEvent(new nt("mode-change",{
            detail: this,
            trigger: s
        })),
        (r = this[oo]) == null || r.call(this))
    }
    [(a6 = ps,
    o6 = Ys,
    l6 = oo,
    c6 = li,
    qs)](t, s) {
        if (this.Ma = t,
        this.mode === "disabled" || !this.La.length)
            return;
        const r = [];
        for (let a = 0, o = this.La.length; a < o; a++) {
            const l = this.La[a];
            qn(l, t) && r.push(l)
        }
        let n = r.length !== this.Na.length;
        if (!n) {
            for (let a = 0; a < r.length; a++)
                if (!this.Na.includes(r[a])) {
                    n = !0;
                    break
                }
        }
        this.Na = r,
        n && this.Ta(s)
    }
    [Lr]() {
        this.Ha = !0,
        this.Oa !== "disabled" && this.Ua()
    }
    async Ua() {
        var t, s;
        if (!(!this.Ha || !this.src || this[ps] > 0)) {
            this[ps] = 1,
            this.dispatchEvent(new nt("load-start"));
            try {
                const {parseResponse: r, VTTCue: n, VTTRegion: a} = await z(()=>import("./prod-510e8363.js"), [])
                  , o = (t = this[Ys]) == null ? void 0 : t.call(this)
                  , l = fetch(this.src, {
                    headers: this.type === "json" ? {
                        "Content-Type": "application/json"
                    } : void 0,
                    credentials: cl(o)
                });
                if (this.type === "json")
                    this.Ra(await (await l).text(), n, a);
                else {
                    const {errors: c, metadata: u, regions: d, cues: f} = await r(l, {
                        type: this.type,
                        encoding: this.encoding
                    });
                    if (((s = c[0]) == null ? void 0 : s.code) === 0)
                        throw c[0];
                    this.Qa = u,
                    this.Pa = d,
                    this.La = f
                }
                this.Sa()
            } catch (r) {
                this.Va(r)
            }
        }
    }
    Sa() {
        var s;
        if (this[ps] = 2,
        !this.src || this.type !== "vtt") {
            const r = (s = this[li]) == null ? void 0 : s.track;
            if (r)
                for (const n of this.La)
                    r.addCue(n)
        }
        const t = new nt("load");
        this[qs](this.Ma, t),
        this.dispatchEvent(t)
    }
    Va(t) {
        this[ps] = 3,
        this.dispatchEvent(new nt("error",{
            detail: t
        }))
    }
    Ra(t, s, r) {
        try {
            t = JSON.parse(t),
            t.regions && (this.Pa = t.regions.map(n=>Object.assign(new r, n))),
            t.cues && (this.La = t.cues.filter(n=>Us(n.startTime) && Us(n.endTime)).map(n=>Object.assign(new s(0,0,""), n)))
        } catch (n) {
            this.Va(n)
        }
    }
    Ta(t) {
        this.dispatchEvent(new nt("cue-change",{
            trigger: t
        }))
    }
}
const Pm = /captions|subtitles/;
function At(i) {
    return Pm.test(i.kind)
}
class Am {
    constructor(e) {
        g(this, "aa", null);
        g(this, "$", null);
        g(this, "ba", -1);
        this.ca = e
    }
    setTarget(e) {
        this.aa = e
    }
    getPlayer(e) {
        var t;
        return this.$ ? this.$ : ((t = e ?? this.aa) == null || t.dispatchEvent(new nt("find-media-player",{
            detail: s=>void (this.$ = s),
            bubbles: !0,
            composed: !0
        })),
        this.$)
    }
    setPlayer(e) {
        this.$ = e
    }
    startLoading(e) {
        this._("media-start-loading", e)
    }
    play(e) {
        this._("media-play-request", e)
    }
    pause(e) {
        this._("media-pause-request", e)
    }
    mute(e) {
        this._("media-mute-request", e)
    }
    unmute(e) {
        this._("media-unmute-request", e)
    }
    enterFullscreen(e, t) {
        this._("media-enter-fullscreen-request", t, e)
    }
    exitFullscreen(e, t) {
        this._("media-exit-fullscreen-request", t, e)
    }
    enterPictureInPicture(e) {
        this._("media-enter-pip-request", e)
    }
    exitPictureInPicture(e) {
        this._("media-exit-pip-request", e)
    }
    seeking(e, t) {
        this._("media-seeking-request", t, e)
    }
    seek(e, t) {
        this._("media-seek-request", t, e)
    }
    seekToLiveEdge(e) {
        this._("media-live-edge-request", e)
    }
    changeVolume(e, t) {
        this._("media-volume-change-request", t, Math.max(0, Math.min(1, e)))
    }
    changeAudioTrack(e, t) {
        this._("media-audio-track-change-request", t, e)
    }
    changeQuality(e, t) {
        this._("media-quality-change-request", t, e)
    }
    changeTextTrackMode(e, t, s) {
        this._("media-text-track-change-request", s, {
            index: e,
            mode: t
        })
    }
    changePlaybackRate(e, t) {
        this._("media-rate-change-request", t, e)
    }
    resumeUserIdle(e) {
        this._("media-resume-user-idle-request", e)
    }
    pauseUserIdle(e) {
        this._("media-pause-user-idle-request", e)
    }
    togglePaused(e) {
        const t = this.getPlayer(e == null ? void 0 : e.target);
        t && (t.state.paused ? this.play(e) : this.pause(e))
    }
    toggleUserIdle(e) {
        const t = this.getPlayer(e == null ? void 0 : e.target);
        t && t.user.idle(!t.user.idling, 0, e)
    }
    toggleMuted(e) {
        const t = this.getPlayer(e == null ? void 0 : e.target);
        t && (t.state.muted ? this.unmute(e) : this.mute(e))
    }
    toggleFullscreen(e, t) {
        const s = this.getPlayer(t == null ? void 0 : t.target);
        s && (s.state.fullscreen ? this.exitFullscreen(e, t) : this.enterFullscreen(e, t))
    }
    togglePictureInPicture(e) {
        const t = this.getPlayer(e == null ? void 0 : e.target);
        t && (t.state.pictureInPicture ? this.exitPictureInPicture(e) : this.enterPictureInPicture(e))
    }
    toggleCaptions(e) {
        const t = this.getPlayer(e == null ? void 0 : e.target);
        if (!t)
            return;
        const s = t.state.textTracks
          , r = t.state.textTrack;
        if (r) {
            const n = s.indexOf(r);
            this.changeTextTrackMode(n, "disabled", e),
            this.ba = n
        } else {
            let n = this.ba;
            (!s[n] || !At(s[n])) && (n = -1),
            n === -1 && (n = s.findIndex(a=>At(a) && a.default)),
            n === -1 && (n = s.findIndex(a=>At(a))),
            n >= 0 && this.changeTextTrackMode(n, "showing", e),
            this.ba = -1
        }
    }
    _(e, t, s) {
        const r = new nt(e,{
            bubbles: !0,
            composed: !0,
            detail: s,
            trigger: t
        })
          , a = (t == null ? void 0 : t.target) && (t.target === document || t.target === window || t.target === document.body || this.$ && !this.$.contains(t.target)) ? this.aa ?? this.getPlayer() : (t == null ? void 0 : t.target) ?? this.aa;
        a == null || a.dispatchEvent(r)
    }
    da(e) {}
}
class Mm extends Nt {
    constructor() {
        super(...arguments);
        g(this, "n")
    }
    onConnect() {
        this.n = Ze(),
        U(this.Af.bind(this))
    }
    Af() {
        const {canLoad: t, thumbnailCues: s} = this.n.$store;
        if (!t())
            return;
        const r = new AbortController
          , {crossorigin: n, thumbnails: a} = this.n.$store
          , o = a();
        if (o)
            return z(()=>import("./prod-510e8363.js"), []).then(({parseResponse: l})=>{
                l(fetch(o, {
                    signal: r.signal,
                    credentials: cl(n())
                })).then(({cues: c})=>s.set(c)).catch(ia)
            }
            ),
            ()=>{
                r.abort(),
                s.set([])
            }
    }
}
class Om extends ud {
    getById(e) {
        return e === "" ? null : this.d.find(t=>t.id === e) ?? null
    }
}
class km {
    constructor() {
        g(this, "priority", 0);
        g(this, "eg", !0);
        g(this, "ta", null);
        g(this, "Ba", null);
        g(this, "dg", new Set)
    }
    canRender() {
        return !0
    }
    attach(e) {
        this.ta = e,
        e.textTracks.onchange = this.Pc.bind(this)
    }
    addTrack(e) {
        this.dg.add(e),
        this.gg(e)
    }
    removeTrack(e) {
        var t, s;
        (s = (t = e[li]) == null ? void 0 : t.remove) == null || s.call(t),
        e[li] = null,
        this.dg.delete(e)
    }
    changeTrack(e) {
        const t = e == null ? void 0 : e[li];
        t && t.track.mode !== "showing" && (t.track.mode = "showing"),
        this.Ba = e
    }
    setDisplay(e) {
        this.eg = e,
        this.Pc()
    }
    detach() {
        this.ta && (this.ta.textTracks.onchange = null);
        for (const e of this.dg)
            this.removeTrack(e);
        this.dg.clear(),
        this.ta = null,
        this.Ba = null
    }
    gg(e) {
        if (!this.ta)
            return;
        const t = e[li] ?? (e[li] = this.hg(e));
        t instanceof HTMLElement && (this.ta.append(t),
        t.track.mode = t.default ? "showing" : "hidden")
    }
    hg(e) {
        const t = document.createElement("track")
          , s = e.default || e.mode === "showing"
          , r = e.src && e.type === "vtt";
        return t.id = e.id,
        t.src = r ? e.src : "https://cdn.jsdelivr.net/npm/vidstack@0.6.12/empty.vtt",
        t.label = e.label,
        t.kind = e.kind,
        t.default = s,
        e.language && (t.srclang = e.language),
        s && !r && this.fg(e, t.track),
        t
    }
    fg(e, t) {
        var s;
        if (!(e.src && e.type === "vtt" || (s = t.cues) != null && s.length))
            for (const r of e.cues)
                t.addCue(r)
    }
    Pc(e) {
        var t;
        for (const s of this.dg) {
            const r = (t = s[li]) == null ? void 0 : t.track;
            if (!r)
                continue;
            if (!this.eg) {
                r.mode = "disabled";
                continue
            }
            const n = r.mode === "showing";
            n && this.fg(s, r),
            s.setMode(n ? "showing" : "disabled", e)
        }
    }
}
class Lm {
    constructor(e) {
        g(this, "ta", null);
        g(this, "sa");
        g(this, "ra", []);
        g(this, "va", !1);
        g(this, "oa", null);
        g(this, "pa", null);
        this.n = e;
        const t = e.textTracks;
        this.sa = t,
        U(this.xa.bind(this)),
        mi(this.ua.bind(this)),
        fe(t, "add", this.ya.bind(this)),
        fe(t, "remove", this.za.bind(this)),
        fe(t, "mode-change", this.qa.bind(this))
    }
    xa() {
        const {$store: e, $iosControls: t} = this.n;
        this.va = e.controls() || t(),
        this.qa()
    }
    add(e) {
        this.ra.push(e),
        this.qa()
    }
    remove(e) {
        e.detach(),
        this.ra.splice(this.ra.indexOf(e), 1),
        this.qa()
    }
    [xm](e) {
        requestAnimationFrame(()=>{
            if (this.ta = e,
            e) {
                this.oa = new km,
                this.oa.attach(e);
                for (const t of this.sa)
                    this.wa(t)
            }
            this.qa()
        }
        )
    }
    wa(e) {
        var t;
        At(e) && ((t = this.oa) == null || t.addTrack(e))
    }
    Aa(e) {
        var t;
        At(e) && ((t = this.oa) == null || t.removeTrack(e))
    }
    ya(e) {
        this.wa(e.detail)
    }
    za(e) {
        this.Aa(e.detail)
    }
    qa() {
        var s, r, n;
        if (!this.ta) {
            this.ua();
            return
        }
        const e = this.sa.selected;
        if (this.va || e != null && e[_m]) {
            (s = this.pa) == null || s.changeTrack(null),
            this.oa.setDisplay(!0),
            this.oa.changeTrack(e);
            return
        }
        if (this.oa.setDisplay(!1),
        this.oa.changeTrack(null),
        !e) {
            (r = this.pa) == null || r.changeTrack(null);
            return
        }
        const t = this.ra.sort((a,o)=>a.priority - o.priority).find(a=>a.canRender(e));
        this.pa !== t && ((n = this.pa) == null || n.detach(),
        t == null || t.attach(this.ta),
        this.pa = t ?? null),
        t == null || t.changeTrack(e)
    }
    ua() {
        var e, t;
        (e = this.oa) == null || e.detach(),
        this.oa = null,
        (t = this.pa) == null || t.detach(),
        this.pa = null
    }
}
var u6;
class Im extends rd {
    constructor() {
        super(...arguments);
        g(this, "Ha", !1);
        g(this, "Ga", {});
        g(this, u6);
        g(this, "Ia", this.Ja.bind(this))
    }
    get selected() {
        return this.d.find(s=>s.mode === "showing" && At(s)) ?? null
    }
    add(t, s) {
        const r = t instanceof lo
          , n = r ? t : new lo(t);
        return this.Ga[t.kind] && t.default && delete t.default,
        n.addEventListener("mode-change", this.Ia),
        this[zn](n, s),
        n[Ys] = this[Ys],
        this.Ha && n[Lr](),
        t.default && (this.Ga[t.kind] = n,
        n.mode = "showing"),
        this
    }
    remove(t, s) {
        if (this.d.includes(t))
            return t === this.Ga[t.kind] && delete this.Ga[t.kind],
            t.mode = "disabled",
            t[oo] = null,
            t.removeEventListener("mode-change", this.Ia),
            this[no](t, s),
            this
    }
    clear(t) {
        for (const s of this.d)
            this.remove(s, t);
        return this
    }
    getById(t) {
        return this.d.find(s=>s.id === t) ?? null
    }
    getByKind(t) {
        const s = Array.isArray(t) ? t : [t];
        return this.d.filter(r=>s.includes(r.kind))
    }
    [(u6 = Ys,
    Lr)]() {
        if (!this.Ha) {
            for (const t of this.d)
                t[Lr]();
            this.Ha = !0
        }
    }
    Ja(t) {
        const s = t.detail;
        if (s.mode === "showing") {
            const r = At(s) ? ["captions", "subtitles"] : [s.kind];
            for (const n of this.d)
                n.mode === "showing" && n != s && r.includes(n.kind) && (n.mode = "disabled")
        }
        this.dispatchEvent(new nt("mode-change",{
            detail: t.detail,
            trigger: t
        }))
    }
}
class Dm {
    constructor(e, t, s) {
        g(this, "Vf");
        this.W = e,
        this.n = t,
        this.V = s;
        const r = new On
          , n = new ed
          , a = new zp;
        this.Vf = Xt(()=>t.$props.preferNativeHLS() ? [n, a, r] : [r, n, a]),
        U(this.Xf.bind(this)),
        U(this.Yf.bind(this)),
        U(this.Zf.bind(this)),
        U(this._f.bind(this))
    }
    Xf() {
        this.n.delegate.U("sources-change", {
            detail: [...Rm(this.n.$props.src()), ...this.W()]
        })
    }
    Yf() {
        var a;
        const {$store: e} = this.n
          , t = e.sources()
          , s = ne(e.source)
          , r = this.Wf(s, t);
        if (((a = t[0]) == null ? void 0 : a.src) && !r.src && !r.type) {
            const {crossorigin: o} = e
              , l = cl(o())
              , c = new AbortController;
            return Promise.all(t.map(u=>di(u.src) && u.type === "?" ? fetch(u.src, {
                method: "HEAD",
                credentials: l,
                signal: c.signal
            }).then(d=>(u.type = d.headers.get("content-type") || "??",
            u)).catch(()=>u) : u)).then(u=>{
                c.signal.aborted || (this.Wf(ne(e.source), u),
                Oi())
            }
            ),
            ()=>c.abort()
        }
        Oi()
    }
    Wf(e, t) {
        let s = {
            src: "",
            type: ""
        }
          , r = null;
        for (const n of t) {
            const a = ne(this.Vf).find(o=>o.canPlay(n));
            a && (s = n,
            r = a)
        }
        return this.$f(e, s, r),
        this.ag(ne(this.V), r),
        s
    }
    $f(e, t, s) {
        t.src === e.src && t.type === e.type || (this.n.delegate.U("source-change", {
            detail: t
        }),
        this.n.delegate.U("media-type-change", {
            detail: (s == null ? void 0 : s.mediaType(t)) || "unknown"
        }))
    }
    ag(e, t) {
        t !== e && (this.n.delegate.U("provider-change", {
            detail: null
        }),
        t && ne(()=>{
            var s;
            return (s = t.preconnect) == null ? void 0 : s.call(t, this.n)
        }
        ),
        this.V.set(t),
        this.n.delegate.U("provider-loader-change", {
            detail: t
        }))
    }
    Zf() {
        const e = this.n.$provider();
        if (e) {
            if (this.n.$store.canLoad()) {
                ne(()=>e.setup({
                    ...this.n,
                    player: this.n.player
                }));
                return
            }
            ne(()=>{
                var t;
                return (t = e.preconnect) == null ? void 0 : t.call(e, this.n)
            }
            )
        }
    }
    _f() {
        const e = this.n.$provider()
          , t = this.n.$store.source();
        if (this.n.$store.canLoad()) {
            ne(()=>e == null ? void 0 : e.loadSource(t, ne(this.n.$store.preload)));
            return
        }
        try {
            di(t.src) && ll(new URL(t.src).origin, "preconnect")
        } catch {}
    }
}
function Rm(i) {
    return (fi(i) ? i : [!di(i) && "src"in i ? i : {
        src: i
    }]).map(({src: e, type: t})=>({
        src: e,
        type: t ?? (!di(e) || e.startsWith("blob:") ? "video/object" : "?")
    }))
}
class Nm {
    constructor(e, t) {
        g(this, "bg", []);
        this.X = e,
        this.n = t,
        U(this.cg.bind(this))
    }
    cg() {
        const e = [...this.n.$props.textTracks(), ...this.X()];
        for (const t of this.bg)
            if (!e.some(s=>s.id === t.id)) {
                const s = t.id && this.n.textTracks.getById(t.id);
                s && this.n.textTracks.remove(s)
            }
        for (const t of e) {
            const s = t.id || lo.createId(t);
            this.n.textTracks.getById(s) || (t.id = s,
            this.n.textTracks.add(t))
        }
        this.bg = e
    }
}
class fd extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "W", De([]));
        g(this, "X", De([]));
        g(this, "V", De(null));
        this.n = Ze(),
        new Dm(this.W,this.n,this.V),
        new Nm(this.X,this.n)
    }
    onAttach(t) {
        t.setAttribute("keep-alive", "")
    }
    onConnect(t) {
        const s = new ResizeObserver(Ss(this.s.bind(this)));
        s.observe(t);
        const r = new MutationObserver(this.Y.bind(this));
        return r.observe(t, {
            attributes: !0,
            childList: !0
        }),
        nd && fe(t, "touchstart", n=>n.preventDefault(), {
            passive: !1
        }),
        Kr(()=>{
            this.s(),
            this.Y()
        }
        ),
        ()=>{
            s.disconnect(),
            r.disconnect()
        }
    }
    onDestroy() {
        this.n.$store.currentTime.set(0)
    }
    s() {
        const t = this.n.player
          , s = this.el.offsetWidth
          , r = this.el.offsetHeight;
        t && (t.$store.mediaWidth.set(s),
        t.$store.mediaHeight.set(r),
        Wt(t, "--media-width", s + "px"),
        Wt(t, "--media-height", r + "px"))
    }
    Y() {
        const t = []
          , s = []
          , r = this.el.children;
        for (const n of r)
            n instanceof HTMLSourceElement ? t.push({
                src: n.src,
                type: n.type
            }) : n instanceof HTMLTrackElement && s.push({
                id: n.id,
                src: n.src,
                kind: n.track.kind,
                language: n.srclang,
                label: n.label,
                default: n.default,
                type: n.getAttribute("data-type")
            });
        this.W.set(t),
        this.X.set(s),
        Oi()
    }
    render() {
        let t;
        return mi(()=>{
            var s;
            return (s = t == null ? void 0 : t.destroy) == null ? void 0 : s.call(t)
        }
        ),
        ()=>{
            t == null || t.destroy();
            const s = this.V();
            if (!s)
                return null;
            const r = s.render(this.n.$store);
            return ne(()=>{
                s.load(this.n).then(n=>{
                    ne(this.V) === s && (this.n.delegate.U("provider-change", {
                        detail: n
                    }),
                    t = n)
                }
                )
            }
            ),
            r
        }
    }
}
g(fd, "el", Pe({
    tagName: "media-outlet"
}));
class Vm extends Nt {
    constructor(e, t) {
        super(e),
        this.ig = t
    }
    onAttach(e) {
        const {$props: t, ariaKeys: s} = Ze()
          , r = e.getAttribute("aria-keyshortcuts");
        if (r) {
            s[this.ig] = r,
            mi(()=>{
                delete s[this.ig]
            }
            );
            return
        }
        const n = t.keyShortcuts()[this.ig];
        n && e.setAttribute("aria-keyshortcuts", n)
    }
}
const Hm = Re('<!$><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" data-media-icon="true"></svg>');
function xt({slot: i, part: e, paths: t, rotate: s}) {
    return (()=>{
        const [r,n] = ze(Hm);
        return Je(r, "data-rotate", s),
        Je(r, "slot", i),
        Je(r, "part", e),
        qu || (r.innerHTML = t),
        r
    }
    )()
}
const b6 = {
    LoadFail: 0,
    BadSignature: 1,
    BadTimestamp: 2,
    BadSettingValue: 3,
    BadFormat: 4,
    UnknownSetting: 5
};
class y6 extends Error {
    constructor(t) {
        super(t.reason);
        g(this, "code");
        g(this, "line");
        this.code = t.code,
        this.line = t.line
    }
}
const hd = /\r?\n|\r/gm;
class Fm {
    constructor(e) {
        g(this, "writable");
        g(this, "readable");
        const t = new Bm(e);
        this.writable = new WritableStream({
            write(s) {
                t.transform(s)
            },
            close() {
                t.close()
            }
        }),
        this.readable = new ReadableStream({
            start(s) {
                t.onLine = r=>s.enqueue(r),
                t.onClose = ()=>s.close()
            }
        })
    }
}
class Bm {
    constructor(e) {
        g(this, "x", "");
        g(this, "y");
        g(this, "onLine");
        g(this, "onClose");
        this.y = new TextDecoder(e)
    }
    transform(e) {
        this.x += this.y.decode(e, {
            stream: !0
        });
        const t = this.x.split(hd);
        this.x = t.pop() || "";
        for (let s = 0; s < t.length; s++)
            this.onLine(t[s].trim())
    }
    close() {
        this.x && this.onLine(this.x.trim()),
        this.x = "",
        this.onClose()
    }
}
async function w6(i, e) {
    const t = new ReadableStream({
        start(s) {
            const r = i.split(hd);
            for (const n of r)
                s.enqueue(n);
            s.close()
        }
    });
    return pd(t, e)
}
async function pd(i, e) {
    const t = (e == null ? void 0 : e.type) ?? "vtt";
    let s;
    if (typeof t == "string")
        switch (t) {
        case "srt":
            s = (await z(()=>import("./srt-parser-a344d78d.js"), [])).default;
            break;
        case "ssa":
        case "ass":
            s = (await z(()=>import("./ssa-parser-f95ff831.js"), [])).default;
            break;
        default:
            s = (await Promise.resolve().then(function() {
                return lg
            })).default
        }
    else
        s = t;
    let r;
    const n = i.getReader()
      , a = s()
      , o = !!(e != null && e.strict) || !!(e != null && e.errors);
    await a.init({
        strict: !1,
        ...e,
        errors: o,
        type: t,
        cancel() {
            n.cancel(),
            r = a.done(!0)
        }
    });
    let l = 1;
    for (; ; ) {
        const {value: c, done: u} = await n.read();
        if (u) {
            a.parse("", l),
            r = a.done(!1);
            break
        }
        a.parse(c, l),
        l++
    }
    return r
}
async function E6(i, e) {
    var a, o;
    const t = await i;
    if (!t.ok || !t.body) {
        let l;
        return {
            metadata: {},
            cues: [],
            regions: [],
            errors: [l]
        }
    }
    const s = t.headers.get("content-type") || ""
      , r = (a = s.match(/text\/(.*?)(?:;|$)/)) == null ? void 0 : a[1]
      , n = (o = s.match(/charset=(.*?)(?:;|$)/)) == null ? void 0 : o[1];
    return zm(t.body, {
        type: r,
        encoding: n,
        ...e
    })
}
async function zm(i, {encoding: e="utf-8", ...t}={}) {
    const s = i.pipeThrough(new Fm(e));
    return pd(s, t)
}
class x6 extends EventTarget {
    constructor(t, s, r) {
        super();
        g(this, "id", "");
        g(this, "startTime");
        g(this, "endTime");
        g(this, "text");
        g(this, "pauseOnExit", !1);
        this.startTime = t,
        this.endTime = s,
        this.text = r
    }
    addEventListener(t, s, r) {
        super.addEventListener(t, s, r)
    }
    removeEventListener(t, s, r) {
        super.removeEventListener(t, s, r)
    }
}
const jm = window.VTTCue;
class qm extends jm {
    constructor() {
        super(...arguments);
        g(this, "region", null);
        g(this, "vertical", "");
        g(this, "snapToLines", !0);
        g(this, "line", "auto");
        g(this, "lineAlign", "start");
        g(this, "position", "auto");
        g(this, "positionAlign", "auto");
        g(this, "size", 100);
        g(this, "align", "center");
        g(this, "style")
    }
}
class Gm {
    constructor() {
        g(this, "id", "");
        g(this, "width", 100);
        g(this, "lines", 3);
        g(this, "regionAnchorX", 0);
        g(this, "regionAnchorY", 100);
        g(this, "viewportAnchorX", 0);
        g(this, "viewportAnchorY", 100);
        g(this, "scroll", "")
    }
}
const gc = ","
  , Wm = "%";
function Ym(i) {
    const e = parseInt(i, 10);
    return Number.isNaN(e) ? null : e
}
function Sr(i) {
    const e = parseInt(i.replace(Wm, ""), 10);
    return !Number.isNaN(e) && e >= 0 && e <= 100 ? e : null
}
function vc(i) {
    if (!i.includes(gc))
        return null;
    const [e,t] = i.split(gc).map(Sr);
    return e !== null && t !== null ? [e, t] : null
}
function Xm(i) {
    const e = parseFloat(i);
    return Number.isNaN(e) ? null : e
}
const Um = "WEBVTT"
  , bc = ","
  , Km = "%"
  , zs = /[:=]/
  , Zm = /^[\s\t]*(region|vertical|line|position|size|align)[:=]/
  , Jm = "NOTE"
  , Qm = "REGION"
  , eg = /^REGION:?[\s\t]+/
  , yr = /[\s\t]+/
  , tg = "-->"
  , ig = /[\s\t]*-->[\s\t]+/
  , sg = /start|center|end|left|right/
  , rg = /start|center|end/
  , ng = /line-(?:left|right)|center|auto/
  , ag = /^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
var md = (i=>(i[i.None = 0] = "None",
i[i.Header = 1] = "Header",
i[i.Cue = 2] = "Cue",
i[i.Region = 3] = "Region",
i[i.Note = 4] = "Note",
i))(md || {});
class gd {
    constructor() {
        g(this, "f");
        g(this, "c", 0);
        g(this, "g", {});
        g(this, "h", {});
        g(this, "j", []);
        g(this, "a", null);
        g(this, "b", null);
        g(this, "k", []);
        g(this, "d");
        g(this, "l", "")
    }
    async init(e) {
        this.f = e,
        e.strict && (this.c = 1),
        e.errors && (this.d = (await z(()=>import("./errors-f3aece90.js"), [])).ParseErrorBuilder)
    }
    parse(e, t) {
        var s, r, n, a, o, l;
        if (e === "")
            this.a ? (this.j.push(this.a),
            (r = (s = this.f).onCue) == null || r.call(s, this.a),
            this.a = null) : this.b ? (this.h[this.b.id] = this.b,
            (a = (n = this.f).onRegion) == null || a.call(n, this.b),
            this.b = null) : this.c === 1 && (this.i(e, t),
            (l = (o = this.f).onHeaderMetadata) == null || l.call(o, this.g)),
            this.c = 0;
        else if (this.c)
            switch (this.c) {
            case 1:
                this.i(e, t);
                break;
            case 2:
                if (this.a) {
                    const c = this.a.text.length > 0;
                    !c && Zm.test(e) ? this.m(e.split(yr), t) : this.a.text += (c ? `
` : "") + e
                }
                break;
            case 3:
                this.n(e.split(yr), t);
                break
            }
        else if (e.startsWith(Jm))
            this.c = 4;
        else if (e.startsWith(Qm))
            this.c = 3,
            this.b = new Gm,
            this.n(e.replace(eg, "").split(yr), t);
        else if (e.includes(tg)) {
            const c = this.o(e, t);
            c && (this.a = new qm(c[0],c[1],""),
            this.a.id = this.l,
            this.m(c[2], t)),
            this.c = 2
        } else
            t === 1 && this.i(e, t);
        this.l = e
    }
    done() {
        return {
            metadata: this.g,
            cues: this.j,
            regions: Object.values(this.h),
            errors: this.k
        }
    }
    i(e, t) {
        var s;
        if (t > 1) {
            if (zs.test(e)) {
                const [r,n] = e.split(zs);
                r && (this.g[r] = (n || "").replace(yr, ""))
            }
        } else
            e.startsWith(Um) ? this.c = 1 : this.e((s = this.d) == null ? void 0 : s.p())
    }
    o(e, t) {
        var c, u, d;
        const [s,r=""] = e.split(ig)
          , [n,...a] = r.split(yr)
          , o = Gn(s)
          , l = Gn(n);
        if (o !== null && l !== null && l > o)
            return [o, l, a];
        o === null && this.e((c = this.d) == null ? void 0 : c.q(s, t)),
        l === null && this.e((u = this.d) == null ? void 0 : u.r(n, t)),
        o != null && l !== null && l > o && this.e((d = this.d) == null ? void 0 : d.s(o, l, t))
    }
    n(e, t) {
        var r, n;
        let s;
        for (let a = 0; a < e.length; a++)
            if (zs.test(e[a])) {
                s = !1;
                const [o,l] = e[a].split(zs);
                switch (o) {
                case "id":
                    this.b.id = l;
                    break;
                case "width":
                    const c = Sr(l);
                    c !== null ? this.b.width = c : s = !0;
                    break;
                case "lines":
                    const u = Ym(l);
                    u !== null ? this.b.lines = u : s = !0;
                    break;
                case "regionanchor":
                    const d = vc(l);
                    d !== null ? (this.b.regionAnchorX = d[0],
                    this.b.regionAnchorY = d[1]) : s = !0;
                    break;
                case "viewportanchor":
                    const f = vc(l);
                    f !== null ? (this.b.viewportAnchorX = f[0],
                    this.b.viewportAnchorY = f[1]) : s = !0;
                    break;
                case "scroll":
                    l === "up" ? this.b.scroll = "up" : s = !0;
                    break;
                default:
                    this.e((r = this.d) == null ? void 0 : r.t(o, l, t))
                }
                s && this.e((n = this.d) == null ? void 0 : n.u(o, l, t))
            }
    }
    m(e, t) {
        var r, n;
        let s;
        for (let a = 0; a < e.length; a++)
            if (s = !1,
            zs.test(e[a])) {
                const [o,l] = e[a].split(zs);
                switch (o) {
                case "region":
                    const c = this.h[l];
                    c && (this.a.region = c);
                    break;
                case "vertical":
                    l === "lr" || l === "rl" ? (this.a.vertical = l,
                    this.a.region = null) : s = !0;
                    break;
                case "line":
                    const [u,d] = l.split(bc);
                    if (u.includes(Km)) {
                        const m = Sr(u);
                        m !== null ? (this.a.line = m,
                        this.a.snapToLines = !1) : s = !0
                    } else {
                        const m = Xm(u);
                        m !== null ? this.a.line = m : s = !0
                    }
                    rg.test(d) ? this.a.lineAlign = d : d && (s = !0),
                    this.a.line !== "auto" && (this.a.region = null);
                    break;
                case "position":
                    const [f,p] = l.split(bc)
                      , b = Sr(f);
                    b !== null ? this.a.position = b : s = !0,
                    p && ng.test(p) ? this.a.positionAlign = p : p && (s = !0);
                    break;
                case "size":
                    const w = Sr(l);
                    w !== null ? (this.a.size = w,
                    w < 100 && (this.a.region = null)) : s = !0;
                    break;
                case "align":
                    sg.test(l) ? this.a.align = l : s = !0;
                    break;
                default:
                    this.e((r = this.d) == null ? void 0 : r.v(o, l, t))
                }
                s && this.e((n = this.d) == null ? void 0 : n.w(o, l, t))
            }
    }
    e(e) {
        var t, s;
        if (e) {
            if (this.k.push(e),
            this.f.strict)
                throw this.f.cancel(),
                e;
            (s = (t = this.f).onError) == null || s.call(t, e)
        }
    }
}
function Gn(i) {
    const e = i.match(ag);
    if (!e)
        return null;
    const t = e[1] ? parseInt(e[1], 10) : 0
      , s = parseInt(e[2], 10)
      , r = parseInt(e[3], 10)
      , n = e[4] ? parseInt(e[4].padEnd(3, "0"), 10) : 0
      , a = t * 3600 + s * 60 + r + n / 1e3;
    return t < 0 || s < 0 || r < 0 || n < 0 || s > 59 || r > 59 ? null : a
}
function og() {
    return new gd
}
var lg = Object.freeze({
    __proto__: null,
    VTTBlock: md,
    VTTParser: gd,
    default: og,
    parseVTTTimestamp: Gn
});
const cg = /[0-9]/
  , ug = /[\s\t]+/
  , vd = {
    c: "span",
    i: "i",
    b: "b",
    u: "u",
    ruby: "ruby",
    rt: "rt",
    v: "span",
    lang: "span",
    timestamp: "span"
}
  , dg = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&nbsp;": " ",
    "&lrm;": "‎",
    "&rlm;": "‏"
}
  , fg = /&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g
  , hg = new Set(["white", "lime", "cyan", "red", "yellow", "magenta", "blue", "black"])
  , pg = new Set(Object.keys(vd));
function mg(i) {
    var c, u;
    let e = "", t = 1, s = [], r = [], n;
    for (let d = 0; d < i.text.length; d++) {
        const f = i.text[d];
        switch (t) {
        case 1:
            f === "<" ? (l(),
            t = 2) : e += f;
            break;
        case 2:
            switch (f) {
            case `
`:
            case "	":
            case " ":
                a(),
                t = 4;
                break;
            case ".":
                a(),
                t = 3;
                break;
            case "/":
                t = 5;
                break;
            case ">":
                a(),
                t = 1;
                break;
            default:
                !e && cg.test(f) && (t = 6),
                e += f;
                break
            }
            break;
        case 3:
            switch (f) {
            case "	":
            case " ":
            case `
`:
                o(),
                n && ((c = n.class) == null || c.trim()),
                t = 4;
                break;
            case ".":
                o();
                break;
            case ">":
                o(),
                n && ((u = n.class) == null || u.trim()),
                t = 1;
                break;
            default:
                e += f
            }
            break;
        case 4:
            f === ">" ? (e = e.replace(ug, " "),
            (n == null ? void 0 : n.type) === "v" ? n.voice = Ia(e) : (n == null ? void 0 : n.type) === "lang" && (n.lang = Ia(e)),
            e = "",
            t = 1) : e += f;
            break;
        case 5:
            f === ">" && (e = "",
            n = r.pop(),
            t = 1);
            break;
        case 6:
            if (f === ">") {
                const p = Gn(e);
                p !== null && p >= i.startTime && p <= i.endTime && (e = "timestamp",
                a(),
                n.time = p),
                e = "",
                t = 1
            } else
                e += f;
            break
        }
    }
    function a() {
        if (pg.has(e)) {
            const d = n;
            n = gg(e),
            d ? (r[r.length - 1] !== d && r.push(d),
            d.children.push(n)) : s.push(n)
        }
        e = "",
        t = 1
    }
    function o() {
        if (n && e) {
            const d = e.replace("bg_", "");
            hg.has(d) ? n[e.startsWith("bg_") ? "bgColor" : "color"] = d : n.class = n.class ? n.class + " " + e : e
        }
        e = ""
    }
    function l() {
        if (!e)
            return;
        const d = {
            type: "text",
            data: Ia(e)
        };
        n ? n.children.push(d) : s.push(d),
        e = ""
    }
    return t === 1 && l(),
    s
}
function gg(i) {
    return {
        tagName: vd[i],
        type: i,
        children: []
    }
}
function Ia(i) {
    return i.replace(fg, e=>dg[e] || "'")
}
function Pt(i, e, t) {
    i.style.setProperty(`--${e}`, t + "")
}
function Xi(i, e, t=!0) {
    i.setAttribute(`data-${e}`, t === !0 ? "" : t + "")
}
function En(i, e) {
    i.setAttribute("part", e)
}
function vg(i) {
    return parseFloat(getComputedStyle(i).lineHeight) || 0
}
function _6(i) {
    const e = document.createElement("template");
    return e.innerHTML = ul(i),
    {
        cue: i,
        content: e.content
    }
}
function ul(i, e=0) {
    return bd(mg(i), e)
}
function bd(i, e=0) {
    let t, s = "";
    for (const r of i)
        if (r.type === "text")
            s += r.data;
        else {
            const n = r.type === "timestamp";
            t = {},
            t.class = r.class,
            t.title = r.type === "v" && r.voice,
            t.lang = r.type === "lang" && r.lang,
            t.part = r.type === "v" && "voice",
            n && (t.part = "timed",
            t["data-time"] = r.time,
            t["data-future"] = r.time > e,
            t["data-past"] = r.time < e),
            t.style = `${r.color ? `color: ${r.color};` : ""}${r.bgColor ? `background-color: ${r.bgColor};` : ""}`;
            const a = Object.entries(t).filter(o=>o[1]).map(o=>`${o[0]}="${o[1] === !0 ? "" : o[1]}"`).join(" ");
            s += `<${r.tagName}${a ? " " + a : ""}>${bd(r.children)}</${r.tagName}>`
        }
    return s
}
function yd(i, e) {
    for (const t of i.querySelectorAll('[part="timed"]')) {
        const s = Number(t.getAttribute("data-time"));
        Number.isNaN(s) || (s > e ? Xi(t, "future") : t.removeAttribute("data-future"),
        s < e ? Xi(t, "past") : t.removeAttribute("data-past"))
    }
}
function bg(i, e) {
    let t = null, s;
    function r() {
        n(),
        i(...s),
        s = void 0
    }
    function n() {
        clearTimeout(t),
        t = null
    }
    function a() {
        s = [].slice.call(arguments),
        n(),
        t = setTimeout(r, e)
    }
    return a
}
const Zi = Symbol(0);
function dl(i) {
    return i instanceof HTMLElement ? {
        top: i.offsetTop,
        width: i.clientWidth,
        height: i.clientHeight,
        left: i.offsetLeft,
        right: i.offsetLeft + i.clientWidth,
        bottom: i.offsetTop + i.clientHeight
    } : {
        ...i
    }
}
function kn(i, e, t) {
    switch (e) {
    case "+x":
        i.left += t,
        i.right += t;
        break;
    case "-x":
        i.left -= t,
        i.right -= t;
        break;
    case "+y":
        i.top += t,
        i.bottom += t;
        break;
    case "-y":
        i.top -= t,
        i.bottom -= t;
        break
    }
}
function yg(i, e) {
    return i.left <= e.right && i.right >= e.left && i.top <= e.bottom && i.bottom >= e.top
}
function wg(i, e) {
    for (let t = 0; t < e.length; t++)
        if (yg(i, e[t]))
            return e[t];
    return null
}
function yc(i, e) {
    return e.top >= 0 && e.bottom <= i.height && e.left >= 0 && e.right <= i.width
}
function Eg(i, e, t) {
    switch (t) {
    case "+x":
        return e.left < 0;
    case "-x":
        return e.right > i.width;
    case "+y":
        return e.top < 0;
    case "-y":
        return e.bottom > i.height
    }
}
function xg(i, e) {
    const t = Math.max(0, Math.min(i.width, e.right) - Math.max(0, e.left))
      , s = Math.max(0, Math.min(i.height, e.bottom) - Math.max(0, e.top));
    return t * s / (i.height * i.width)
}
function fl(i, e) {
    return {
        top: e.top / i.height,
        left: e.left / i.width,
        right: (i.width - e.right) / i.width,
        bottom: (i.height - e.bottom) / i.height
    }
}
function wd(i, e) {
    return e.top = e.top * i.height,
    e.left = e.left * i.width,
    e.right = i.width - e.right * i.width,
    e.bottom = i.height - e.bottom * i.height,
    e
}
const Ed = ["top", "left", "right", "bottom"];
function xd(i, e, t, s) {
    const r = fl(e, t);
    for (const n of Ed)
        Pt(i, `${s}-${n}`, r[n] * 100 + "%")
}
function _d(i, e, t, s) {
    let r = 1, n, a = {
        ...e
    };
    for (let o = 0; o < s.length; o++) {
        for (; Eg(i, e, s[o]) || yc(i, e) && wg(e, t); )
            kn(e, s[o], 1);
        if (yc(i, e))
            return e;
        const l = xg(i, e);
        r > l && (n = {
            ...e
        },
        r = l),
        e = {
            ...a
        }
    }
    return n || a
}
const Ir = Symbol(0);
function _g(i, e, t, s) {
    let r = t.firstElementChild, n = Cg(e), a, o = [];
    if (t[Zi] || (t[Zi] = Tg(i, t)),
    a = wd(i, {
        ...t[Zi]
    }),
    t[Ir])
        o = [t[Ir] === "top" ? "+y" : "-y", "+x", "-x"];
    else if (e.snapToLines) {
        let l;
        switch (e.vertical) {
        case "":
            o = ["+y", "-y"],
            l = "height";
            break;
        case "rl":
            o = ["+x", "-x"],
            l = "width";
            break;
        case "lr":
            o = ["-x", "+x"],
            l = "width";
            break
        }
        let c = vg(r)
          , u = c * Math.round(n)
          , d = i[l] + c
          , f = o[0];
        Math.abs(u) > d && (u = u < 0 ? -1 : 1,
        u *= Math.ceil(d / c) * c),
        n < 0 && (u += e.vertical === "" ? i.height : i.width,
        o = o.reverse()),
        kn(a, f, u)
    } else {
        const l = e.vertical === ""
          , c = l ? "+y" : "+x"
          , u = l ? a.height : a.width;
        kn(a, c, (l ? i.height : i.width) * n / 100),
        kn(a, c, e.lineAlign === "center" ? u / 2 : e.lineAlign === "end" ? u : 0),
        o = l ? ["-y", "+y", "-x", "+x"] : ["-x", "+x", "-y", "+y"]
    }
    return a = _d(i, a, s, o),
    xd(t, i, a, "cue"),
    a
}
function Tg(i, e) {
    const t = dl(e)
      , s = Sg(e);
    if (e[Ir] = !1,
    s.top && (t.top = s.top,
    t.bottom = s.top + t.height,
    e[Ir] = "top"),
    s.bottom) {
        const r = i.height - s.bottom;
        t.top = r - t.height,
        t.bottom = r,
        e[Ir] = "bottom"
    }
    return s.left && (t.left = s.left),
    s.right && (t.right = i.width - s.right),
    fl(i, t)
}
function Sg(i) {
    const e = {};
    for (const t of Ed)
        e[t] = parseFloat(i.style.getPropertyValue(`--cue-${t}`));
    return e
}
function Cg(i) {
    return i.line === "auto" ? i.snapToLines ? -1 : 100 : i.line
}
function $g(i) {
    if (i.position === "auto")
        switch (i.align) {
        case "start":
        case "left":
            return 0;
        case "right":
        case "end":
            return 100;
        default:
            return 50
        }
    return i.position
}
function Pg(i, e) {
    if (i.positionAlign === "auto")
        switch (i.align) {
        case "start":
            return e === "ltr" ? "line-left" : "line-right";
        case "end":
            return e === "ltr" ? "line-right" : "line-left";
        case "center":
            return "center";
        default:
            return `line-${i.align}`
        }
    return i.positionAlign
}
const Ag = ["-y", "+y", "-x", "+x"];
function Mg(i, e, t, s) {
    let r = Array.from(t.querySelectorAll('[part="cue-display"]'))
      , n = 0
      , a = Math.max(0, r.length - e.lines);
    for (let l = r.length - 1; l >= a; l--)
        n += r[l].offsetHeight;
    Pt(t, "region-height", n + "px"),
    t[Zi] || (t[Zi] = fl(i, dl(t)));
    let o = {
        ...t[Zi]
    };
    return o = wd(i, o),
    o.width = t.clientWidth,
    o.height = n,
    o.right = o.left + o.width,
    o.bottom = o.top + n,
    o = _d(i, o, s, Ag),
    xd(t, i, o, "region"),
    o
}
class Og {
    constructor(e, t) {
        g(this, "overlay");
        g(this, "z");
        g(this, "A", 0);
        g(this, "C", "ltr");
        g(this, "B", []);
        g(this, "D", !1);
        g(this, "E");
        g(this, "h", new Map);
        g(this, "j", new Map);
        g(this, "K", bg(()=>{
            this.D = !1,
            this.G();
            for (const e of this.h.values())
                e[Zi] = null;
            for (const e of this.j.values())
                e && (e[Zi] = null);
            this.H(!0)
        }
        , 50));
        this.overlay = e,
        this.dir = (t == null ? void 0 : t.dir) ?? "ltr",
        e.setAttribute("translate", "yes"),
        e.setAttribute("aria-live", "off"),
        e.setAttribute("aria-atomic", "true"),
        En(e, "captions"),
        this.G(),
        this.E = new ResizeObserver(this.I.bind(this)),
        this.E.observe(e)
    }
    get dir() {
        return this.C
    }
    set dir(e) {
        this.C = e,
        Xi(this.overlay, "dir", e)
    }
    get currentTime() {
        return this.A
    }
    set currentTime(e) {
        this.A = e,
        this.update()
    }
    changeTrack({regions: e, cues: t}) {
        this.reset(),
        this.J(e);
        for (const s of t)
            this.j.set(s, null);
        this.update()
    }
    addCue(e) {
        this.j.set(e, null),
        this.update()
    }
    removeCue(e) {
        this.j.delete(e),
        this.update()
    }
    update(e=!1) {
        this.H(e)
    }
    reset() {
        this.j.clear(),
        this.h.clear(),
        this.B = [],
        this.overlay.textContent = ""
    }
    destroy() {
        this.reset(),
        this.E.disconnect()
    }
    I() {
        this.D = !0,
        this.K()
    }
    G() {
        this.z = dl(this.overlay),
        Pt(this.overlay, "overlay-width", this.z.width + "px"),
        Pt(this.overlay, "overlay-height", this.z.height + "px")
    }
    H(e=!1) {
        if (!this.j.size || this.D)
            return;
        let t, s = [...this.j.keys()].filter(n=>this.A >= n.startTime && this.A <= n.endTime).sort((n,a)=>n.startTime !== a.startTime ? n.startTime - a.startTime : n.endTime - a.endTime), r = s.map(n=>n.region);
        for (let n = 0; n < this.B.length; n++) {
            if (t = this.B[n],
            s[n] === t)
                continue;
            if (t.region && !r.includes(t.region)) {
                const o = this.h.get(t.region.id);
                o && (o.removeAttribute("data-active"),
                e = !0)
            }
            const a = this.j.get(t);
            a && (a.remove(),
            e = !0)
        }
        for (let n = 0; n < s.length; n++) {
            t = s[n];
            let a = this.j.get(t);
            a || this.j.set(t, a = this.L(t));
            const o = this.F(t) && this.h.get(t.region.id);
            o && !o.hasAttribute("data-active") && (requestAnimationFrame(()=>Xi(o, "active")),
            e = !0),
            a.isConnected || ((o || this.overlay).append(a),
            e = !0)
        }
        if (e) {
            const n = []
              , a = new Set;
            for (let o = s.length - 1; o >= 0; o--) {
                if (t = s[o],
                a.has(t.region || t))
                    continue;
                const l = this.F(t)
                  , c = l ? this.h.get(t.region.id) : this.j.get(t);
                l ? n.push(Mg(this.z, t.region, c, n)) : n.push(_g(this.z, t, c, n)),
                a.add(l ? t.region : t)
            }
        }
        yd(this.overlay, this.A),
        this.B = s
    }
    J(e) {
        if (e)
            for (const t of e) {
                const s = this.M(t);
                this.h.set(t.id, s),
                this.overlay.append(s)
            }
    }
    M(e) {
        const t = document.createElement("div");
        return En(t, "region"),
        Xi(t, "id", e.id),
        Xi(t, "scroll", e.scroll),
        Pt(t, "region-width", e.width + "%"),
        Pt(t, "region-anchor-x", e.regionAnchorX),
        Pt(t, "region-anchor-y", e.regionAnchorY),
        Pt(t, "region-viewport-anchor-x", e.viewportAnchorX),
        Pt(t, "region-viewport-anchor-y", e.viewportAnchorY),
        Pt(t, "region-lines", e.lines),
        t
    }
    L(e) {
        var a;
        const t = document.createElement("div")
          , s = $g(e)
          , r = Pg(e, this.C);
        if (En(t, "cue-display"),
        e.vertical !== "" && Xi(t, "vertical"),
        Pt(t, "cue-text-align", e.align),
        e.style)
            for (const o of Object.keys(e.style))
                t.style.setProperty(o, e.style[o]);
        if (this.F(e))
            Pt(t, "cue-offset", `${s - (r === "line-right" ? 100 : r === "center" ? 50 : 0)}%`);
        else if (Pt(t, "cue-writing-mode", e.vertical === "" ? "horizontal-tb" : e.vertical === "lr" ? "vertical-lr" : "vertical-rl"),
        !((a = e.style) != null && a["--cue-width"])) {
            let o = s;
            r === "line-left" ? o = 100 - s : r === "center" && s <= 50 ? o = s * 2 : r === "center" && s > 50 && (o = (100 - s) * 2);
            const l = e.size < o ? e.size : o;
            e.vertical === "" ? Pt(t, "cue-width", l + "%") : Pt(t, "cue-height", l + "%")
        }
        const n = document.createElement("div");
        return En(n, "cue"),
        e.id && Xi(n, "id", e.id),
        n.innerHTML = ul(e),
        t.append(n),
        t
    }
    F(e) {
        return e.region && e.size === 100 && e.vertical === "" && e.line === "auto"
    }
}
function Yt(i, e=2) {
    return Number(i.toFixed(e))
}
function kg(i) {
    var e;
    return ((e = String(i).split(".")[1]) == null ? void 0 : e.length) ?? 0
}
function hl(i, e, t) {
    return Math.max(i, Math.min(t, e))
}
let co = De(!1);
fe(document, "pointerdown", ()=>{
    co.set(!1)
}
),
fe(document, "keydown", i=>{
    i.metaKey || i.altKey || i.ctrlKey || co.set(!0)
}
);
class is extends Nt {
    constructor() {
        super(...arguments);
        g(this, "Ke", De(!1))
    }
    onConnect(t) {
        U(()=>{
            if (!co()) {
                this.Ke.set(!1),
                xn(t, !1),
                this.listen("pointerenter", this.Le.bind(this)),
                this.listen("pointerleave", this.Me.bind(this));
                return
            }
            const s = document.activeElement === t;
            this.Ke.set(s),
            xn(t, s),
            this.listen("focus", this.Ne.bind(this)),
            this.listen("blur", this.Oe.bind(this))
        }
        )
    }
    focused() {
        return this.Ke()
    }
    Ne() {
        this.Ke.set(!0),
        xn(this.el, !0)
    }
    Oe() {
        this.Ke.set(!1),
        xn(this.el, !1)
    }
    Le() {
        wc(this.el, !0)
    }
    Me() {
        wc(this.el, !1)
    }
}
function xn(i, e) {
    $e(i, "data-focus", e),
    $e(i, "data-hocus", e)
}
function wc(i, e) {
    $e(i, "data-hocus", e),
    $e(i, "data-hover", e)
}
const uo = Xr();
var Ja;
let T6 = (Ja = class extends ot {
    onAttach(e) {
        sa(uo) && Kr(()=>{
            if (!e.isConnected)
                return;
            Li(uo).eb(e)
        }
        ),
        this.setAttributes({
            position: this.$props.position
        })
    }
}
,
g(Ja, "el", Pe({
    tagName: "media-tooltip",
    props: {
        position: "top center"
    }
})),
Ja)
  , Lg = 0;
class pl extends Nt {
    constructor(e) {
        super(e),
        As(uo, {
            eb: this.eb.bind(this)
        })
    }
    eb(e) {
        const t = `media-tooltip-${++Lg}`;
        $e(this.el, "aria-describedby", t),
        $e(e, "id", t),
        $e(e, "role", "tooltip"),
        this.el.removeAttribute("aria-label")
    }
}
var Ig = Object.defineProperty
  , Dg = Object.getOwnPropertyDescriptor
  , Rg = (i,e,t,s)=>{
    for (var r = s > 1 ? void 0 : s ? Dg(e, t) : e, n = i.length - 1, a; n >= 0; n--)
        (a = i[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
    return s && r && Ig(e, t, r),
    r
}
;
const sr = {
    disabled: !1,
    defaultPressed: !1,
    defaultAppearance: !1
};
class Os extends ot {
    constructor(t) {
        super(t);
        g(this, "fb", De(!1));
        g(this, "gb");
        new is(t),
        new pl(t),
        this.gb && new Vm(t,this.gb)
    }
    get pressed() {
        return ne(this.fb)
    }
    onAttach(t) {
        ec(this.fb) && this.fb.set(this.$props.defaultPressed()),
        Ct(t, "tabindex", "0"),
        Ct(t, "role", "button");
        const {disabled: s, defaultAppearance: r} = this.$props;
        this.setAttributes({
            disabled: s,
            "default-appearance": r,
            "data-pressed": this.fb,
            "aria-pressed": this.hb.bind(this),
            "data-media-button": !0
        })
    }
    onConnect(t) {
        Zs(t, this.ib.bind(this))
    }
    hb() {
        return la(this.fb())
    }
    jb(t) {
        ec(this.fb) && this.fb.set(s=>!s)
    }
    ib(t) {
        const s = this.$props.disabled();
        if (s) {
            s && t.stopImmediatePropagation();
            return
        }
        t.preventDefault(),
        this.jb(t)
    }
}
g(Os, "el", Pe({
    tagName: "media-toggle-button",
    props: sr
}));
Rg([Tt], Os.prototype, "pressed", 1);
var Ng = '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>'
  , Vg = '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>'
  , Hg = '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>';
class Td extends Os {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "gb", "togglePaused")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fb = this.kb.bind(this),
        super.onAttach(t),
        Ms(t, this.lb.bind(this));
        const {paused: s, ended: r} = this.n.$store;
        this.setAttributes({
            "data-paused": s,
            "data-ended": r
        })
    }
    jb(t) {
        const s = this.n.remote;
        this.fb() ? s.pause(t) : s.play(t)
    }
    kb() {
        const {paused: t} = this.n.$store;
        return !t()
    }
    lb() {
        const {paused: t} = this.n.$store;
        return t() ? "Play" : "Pause"
    }
    render() {
        return [Et(xt, {
            paths: Vg,
            slot: "play"
        }), Et(xt, {
            paths: Hg,
            slot: "replay"
        }), Et(xt, {
            paths: Ng,
            slot: "pause"
        })]
    }
}
g(Td, "el", Pe({
    tagName: "media-play-button",
    props: sr
}));
var Fg = '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>'
  , Sd = '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>';
function Bg(i) {
    return i ? "true" : "false"
}
function hi(i) {
    return ()=>Bg(i())
}
class zg extends Os {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "gb", "toggleCaptions")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fb = this.kb.bind(this),
        super.onAttach(t),
        Ms(t, this.lb.bind(this)),
        this.setAttributes({
            "aria-hidden": hi(this.mb.bind(this))
        })
    }
    jb(t) {
        this.n.remote.toggleCaptions(t)
    }
    kb() {
        const {textTrack: t} = this.n.$store
          , s = t();
        return !!s && At(s)
    }
    mb() {
        const {textTracks: t} = this.n.$store;
        return t().filter(At).length == 0
    }
    lb() {
        const {textTrack: t} = this.n.$store;
        return t() ? "Closed-Captions Off" : "Closed-Captions On"
    }
    render() {
        return [Et(xt, {
            paths: Fg,
            slot: "on"
        }), Et(xt, {
            paths: Sd,
            slot: "off"
        })]
    }
}
g(zg, "el", Pe({
    tagName: "media-caption-button",
    props: sr
}));
var jg = '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>'
  , qg = '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>';
class Gg extends Os {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "gb", "toggleFullscreen")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fb = this.kb.bind(this),
        super.onAttach(t),
        Ms(t, this.lb.bind(this));
        const {fullscreen: s} = this.n.$store;
        this.setAttributes({
            "aria-hidden": hi(this.mb.bind(this)),
            "data-fullscreen": s
        })
    }
    jb(t) {
        const s = this.n.remote
          , r = this.$props.target();
        this.fb() ? s.exitFullscreen(r, t) : s.enterFullscreen(r, t)
    }
    kb() {
        const {fullscreen: t} = this.n.$store;
        return t()
    }
    mb() {
        const {canFullscreen: t} = this.n.$store;
        return !t()
    }
    lb() {
        const {fullscreen: t} = this.n.$store;
        return t() ? "Exit Fullscreen" : "Enter Fullscreen"
    }
    render() {
        return [Et(xt, {
            paths: qg,
            slot: "enter"
        }), Et(xt, {
            paths: jg,
            slot: "exit"
        })]
    }
}
g(Gg, "el", Pe({
    tagName: "media-fullscreen-button",
    props: {
        ...sr,
        target: "prefer-media"
    }
}));
var Wg = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>'
  , Yg = '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>'
  , Xg = '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>';
class Ug extends Os {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "gb", "toggleMuted")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fb = this.kb.bind(this),
        Ms(t, this.lb.bind(this)),
        this.setAttributes({
            "data-muted": this.fb,
            "data-volume": this.nb.bind(this)
        }),
        super.onAttach(t)
    }
    jb(t) {
        const s = this.n.remote;
        this.fb() ? s.unmute(t) : s.mute(t)
    }
    kb() {
        const {muted: t, volume: s} = this.n.$store;
        return t() || s() === 0
    }
    lb() {
        return this.fb() ? "Unmute" : "Mute"
    }
    nb() {
        const {muted: t, volume: s} = this.n.$store
          , r = s();
        if (t() || r === 0)
            return "muted";
        if (r >= .5)
            return "high";
        if (r < .5)
            return "low"
    }
    render() {
        return [Et(xt, {
            paths: Yg,
            slot: "volume-high"
        }), Et(xt, {
            paths: Xg,
            slot: "volume-low"
        }), Et(xt, {
            paths: Wg,
            slot: "volume-muted"
        })]
    }
}
g(Ug, "el", Pe({
    tagName: "media-mute-button",
    props: sr
}));
var Kg = '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>'
  , Zg = '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>';
class Jg extends Os {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "gb", "togglePictureInPicture")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fb = this.kb.bind(this),
        super.onAttach(t),
        Ms(t, this.lb.bind(this));
        const {pictureInPicture: s} = this.n.$store;
        this.setAttributes({
            "aria-hidden": hi(this.mb.bind(this)),
            "data-pip": s
        })
    }
    jb(t) {
        const s = this.n.remote;
        this.fb() ? s.exitPictureInPicture(t) : s.enterPictureInPicture(t)
    }
    kb() {
        const {pictureInPicture: t} = this.n.$store;
        return t()
    }
    mb() {
        const {canPictureInPicture: t} = this.n.$store;
        return !t()
    }
    lb() {
        const {pictureInPicture: t} = this.n.$store;
        return t() ? "Exit Picture In Picture" : "Enter Picture In Picture"
    }
    render() {
        return [Et(xt, {
            paths: Zg,
            slot: "enter"
        }), Et(xt, {
            paths: Kg,
            slot: "exit"
        })]
    }
}
g(Jg, "el", Pe({
    tagName: "media-pip-button",
    props: sr
}));
var Qg = '<path d="M15.6038 12.2148C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7015 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69758C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45207L11.0765 7.79738C10.7159 8.06387 10.7159 8.60327 11.0766 8.86974L15.6038 12.2148Z" fill="currentColor"/>'
  , ev = '<path d="M16.4167 12.2148C15.9766 12.5399 15.3538 12.2257 15.3538 11.6786V10.1789C15.3538 10.1001 15.2854 10.0384 15.2072 10.0479C11.9089 10.4494 9.35384 13.2593 9.35384 16.6659C9.35384 20.3481 12.3389 23.3332 16.0211 23.3332C19.4785 23.3332 22.3212 20.7015 22.6554 17.332C22.6918 16.9655 22.9868 16.6662 23.355 16.6662L25.354 16.6666C25.7221 16.6666 26.0228 16.966 25.9986 17.3334C25.6556 22.5454 21.3193 26.6667 16.0205 26.6667C10.4977 26.6667 6.02051 22.1895 6.02051 16.6667C6.02051 11.4103 10.0761 7.10112 15.2289 6.69758C15.2989 6.69209 15.3538 6.63396 15.3538 6.56372V4.98824C15.3538 4.44106 15.9766 4.12689 16.4167 4.45207L20.944 7.79738C21.3046 8.06387 21.3046 8.60327 20.9439 8.86974L16.4167 12.2148Z" fill="currentColor"/>';
class tv extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        this.n = Ze(),
        new is(t),
        new pl(t)
    }
    onAttach(t) {
        Ct(t, "tabindex", "0"),
        Ct(t, "role", "button"),
        Ms(t, this.lb.bind(this));
        const {seconds: s, defaultAppearance: r} = this.$props;
        this.setAttributes({
            seconds: s,
            "default-appearance": r,
            "aria-hidden": hi(this.mb.bind(this)),
            "data-media-button": !0
        })
    }
    onConnect(t) {
        Zs(t, this.jb.bind(this))
    }
    mb() {
        const {canSeek: t} = this.n.$store;
        return !t()
    }
    lb() {
        const {seconds: t} = this.$props;
        return `Seek ${t() > 0 ? "forward" : "backward"} ${t()} seconds`
    }
    jb(t) {
        const {seconds: s, disabled: r} = this.$props;
        if (r())
            return;
        const {currentTime: n} = this.n.$store
          , a = n() + s();
        this.n.remote.seek(a, t)
    }
    render() {
        return [Et(xt, {
            paths: Qg,
            slot: "backward"
        }), Et(xt, {
            paths: ev,
            slot: "forward"
        })]
    }
}
g(tv, "el", Pe({
    tagName: "media-seek-button",
    props: {
        disabled: !1,
        defaultAppearance: !1,
        seconds: 30
    }
}));
const rr = new $u({
    min: 0,
    max: 100,
    value: 50,
    pointerValue: 0,
    focused: !1,
    dragging: !1,
    pointing: !1,
    get interactive() {
        return this.dragging || this.focused || this.pointing
    },
    get fillRate() {
        return Ec(this.min, this.max, this.value)
    },
    get fillPercent() {
        return this.fillRate * 100
    },
    get pointerRate() {
        return Ec(this.min, this.max, this.pointerValue)
    },
    get pointerPercent() {
        return this.pointerRate * 100
    }
});
function Ec(i, e, t) {
    const s = e - i
      , r = t - i;
    return s > 0 ? r / s : 0
}
const ml = {
    min: 0,
    max: 100,
    disabled: !1,
    value: 100,
    step: 1,
    keyStep: 1,
    shiftKeyMultiplier: 5,
    trackClass: null,
    trackFillClass: null,
    trackProgressClass: null,
    thumbContainerClass: null,
    thumbClass: null
};
function iv(i, e, t, s) {
    return hl(i, Yt(t, kg(s)), e)
}
function sv(i, e, t, s) {
    const r = hl(0, t, 1)
      , n = e - i
      , a = n * r
      , o = a / s
      , l = s * o;
    return i + l
}
const xc = {
    Left: -1,
    ArrowLeft: -1,
    Up: 1,
    ArrowUp: 1,
    Right: 1,
    ArrowRight: 1,
    Down: -1,
    ArrowDown: -1
};
class rv extends Nt {
    constructor(t, s, r) {
        super(t);
        g(this, "Md", null);
        g(this, "lg", null);
        g(this, "ng", null);
        g(this, "mg", null);
        g(this, "og", null);
        g(this, "sg");
        g(this, "Cg", ca(t=>{
            this.kg(this.pg(t), t)
        }
        , 20, {
            leading: !0
        }));
        this.jg = s,
        this.n = r
    }
    onConnect() {
        U(this.vg.bind(this)),
        U(this.wg.bind(this)),
        this.jg.wc && Kr(()=>{
            var s;
            const t = (s = this.n.player) == null ? void 0 : s.querySelector("media-outlet");
            t && (this.Md = t,
            fe(t, "touchstart", this.xg.bind(this)),
            fe(t, "touchmove", this.yg.bind(this)))
        }
        )
    }
    xg(t) {
        this.lg = t.touches[0].clientX
    }
    yg(t) {
        if (Ps(this.lg) || (t.preventDefault(),
        this.$store.dragging()))
            return;
        const s = t.touches[0].clientX - this.lg;
        Math.abs(s) > 20 && (this.lg = t.touches[0].clientX,
        this.ng = this.$store.value(),
        this.qg(this.ng, t))
    }
    vg() {
        this.jg.pb() || (this.listen("focus", this.Ne.bind(this)),
        this.listen("pointerenter", this.Le.bind(this)),
        this.listen("pointermove", this.zg.bind(this)),
        this.listen("pointerleave", this.Me.bind(this)),
        this.listen("pointerdown", this.Ag.bind(this)),
        this.listen("keydown", this.ab.bind(this)),
        this.listen("keyup", this.$a.bind(this)))
    }
    wg() {
        this.jg.pb() || !this.$store.dragging() || (fe(document, "pointerup", this.Bg.bind(this)),
        fe(document, "pointermove", this.Cg.bind(this)),
        nd && fe(document, "touchmove", this.Dg.bind(this), {
            passive: !1
        }))
    }
    Ne() {
        this.kg(this.$store.value())
    }
    rg(t, s) {
        const {value: r, min: n, max: a, dragging: o} = this.$store
          , l = Math.max(n(), Math.min(t, a()));
        r.set(l);
        const c = this.createEvent("value-change", {
            detail: l,
            trigger: s
        });
        if (this.el.dispatchEvent(c),
        this.jg.Kb(c),
        o()) {
            const u = this.createEvent("drag-value-change", {
                detail: l,
                trigger: s
            });
            this.el.dispatchEvent(u),
            this.jg.Nb(u)
        }
    }
    kg(t, s) {
        var a;
        const {pointerValue: r, dragging: n} = this.$store;
        if (r.set(t),
        this.dispatch("pointer-value-change", {
            detail: t,
            trigger: s
        }),
        n()) {
            const o = this.jg.qb === "vertical" ? "bottom" : "left"
              , l = this.jg.qb === "vertical" ? "height" : "width";
            this.og && !((a = this.el) != null && a.hasAttribute("data-chapters")) && (this.og.style[l] = t + "%"),
            this.mg && (this.mg.style[o] = t + "%"),
            this.rg(t, s)
        }
    }
    pg(t) {
        let s, r = this.el.getBoundingClientRect(), {min: n, max: a} = this.$store;
        if (this.jg.qb === "vertical") {
            const {bottom: o, height: l} = r;
            s = (o - t.clientY) / l
        } else if (this.lg && Us(this.ng)) {
            const {width: o} = this.Md.getBoundingClientRect()
              , l = (t.clientX - this.lg) / o
              , c = a() - n()
              , u = c * Math.abs(l);
            s = (l < 0 ? this.ng - u : this.ng + u) / c
        } else {
            const {left: o, width: l} = r;
            s = (t.clientX - o) / l
        }
        return Math.max(n(), Math.min(a(), this.jg.Jb(sv(n(), a(), s, this.jg.yb()))))
    }
    Le(t) {
        this.$store.pointing.set(!0)
    }
    zg(t) {
        const {dragging: s} = this.$store;
        s() || this.kg(this.pg(t), t)
    }
    Me(t) {
        this.$store.pointing.set(!1)
    }
    Ag(t) {
        if (t.button !== 0)
            return;
        const s = this.pg(t);
        this.qg(s, t),
        this.kg(s, t)
    }
    qg(t, s) {
        const {dragging: r} = this.$store;
        if (r())
            return;
        r.set(!0),
        this.mg = this.el.querySelector('shadow-root > div[part="thumb-container"]'),
        this.og = this.el.querySelector('shadow-root > div[part~="track-fill"]'),
        this.n.remote.pauseUserIdle(s);
        const n = this.createEvent("drag-start", {
            detail: t,
            trigger: s
        });
        this.el.dispatchEvent(n),
        this.jg.Lb(n)
    }
    tg(t, s) {
        const {dragging: r} = this.$store;
        if (!r())
            return;
        r.set(!1),
        this.og && (Wt(this.og, "width", null),
        this.og = null),
        this.mg && (Wt(this.mg, "left", null),
        Wt(this.mg, "bottom", null),
        this.mg = null),
        this.n.remote.resumeUserIdle(s);
        const n = this.createEvent("drag-end", {
            detail: t,
            trigger: s
        });
        this.el.dispatchEvent(n),
        this.jg.Mb(n),
        this.lg = null,
        this.ng = null
    }
    ab(t) {
        if (Hn(t)) {
            const c = t.trigger;
            if (ci(c))
                t = c;
            else
                return
        }
        const {key: s} = t
          , {min: r, max: n} = this.$store;
        let a;
        if (s === "Home" || s === "PageUp" ? a = r() : s === "End" || s === "PageDown" ? a = n() : !t.metaKey && /[0-9]/.test(s) && (a = (n() - r()) / 10 * Number(s)),
        !ti(a)) {
            this.kg(a, t),
            this.rg(a, t);
            return
        }
        const o = this.ug(t);
        if (!o)
            return;
        const l = s === this.sg;
        !this.$store.dragging() && l && this.qg(o, t),
        this.kg(o, t),
        l || this.rg(o, t),
        this.sg = s
    }
    $a(t) {
        if (Hn(t)) {
            const a = t.trigger;
            if (ci(a))
                t = a;
            else
                return
        }
        this.sg = "";
        const {dragging: s, value: r} = this.$store;
        if (!s())
            return;
        const n = this.ug(t) ?? r();
        this.kg(n),
        this.tg(n, t)
    }
    ug(t) {
        const {key: s, shiftKey: r} = t;
        if (!Object.keys(xc).includes(s))
            return;
        const {shiftKeyMultiplier: a} = this.$props
          , {value: o} = this.$store
          , l = this.jg.yb()
          , c = this.jg.Ib()
          , u = r ? c * a() : c
          , d = Number(xc[s])
          , f = u * d
          , p = (o() + f) / l;
        return Number((l * p).toFixed(3))
    }
    Bg(t) {
        if (t.button !== 0)
            return;
        const s = this.pg(t);
        this.kg(s, t),
        this.tg(s, t)
    }
    Dg(t) {
        t.preventDefault()
    }
}
const gl = Xr(()=>({}))
  , nv = Re('<!$><div part="track"></div>')
  , av = Re('<!$><div part="track track-fill"></div>')
  , ov = Re('<!$><div part="track track-progress"></div>')
  , lv = Re('<!$><div part="thumb-container"><!$><div part="thumb"></div></div>');
class vl extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "sb", !1);
        g(this, "qb", "");
        g(this, "Gb", Ss((t,s)=>{
            var r, n;
            (r = this.el) == null || r.style.setProperty("--slider-fill-percent", t + "%"),
            (n = this.el) == null || n.style.setProperty("--slider-pointer-percent", s + "%")
        }
        ));
        g(this, "ob", null);
        g(this, "rb", Ss(()=>{
            if (!this.ob)
                return;
            const t = this.ob.getBoundingClientRect();
            Wt(this.ob, "--computed-width", t.width + "px"),
            Wt(this.ob, "--computed-height", t.height + "px")
        }
        ));
        As(gl),
        this.n = Ze(),
        new rv(t,this,this.n);
        const s = new is(t);
        this.$store.focused = s.focused.bind(s)
    }
    onAttach(t) {
        Ct(t, "role", "slider"),
        Ct(t, "tabindex", "0"),
        Ct(t, "aria-orientation", "horizontal"),
        Ct(t, "autocomplete", "off"),
        this.qb = t.getAttribute("aria-orientation") || "",
        this.sb || (U(this.tb.bind(this)),
        U(this.ub.bind(this))),
        U(this.vb.bind(this)),
        this.wb()
    }
    onConnect(t) {
        this.xb()
    }
    render() {
        const {trackClass: t, trackFillClass: s, trackProgressClass: r, thumbContainerClass: n, thumbClass: a} = this.$props;
        return [(()=>{
            const [o,l] = ze(nv);
            return ut(()=>Je(o, "class", t())),
            o
        }
        )(), (()=>{
            const [o,l] = ze(av);
            return ut(()=>Je(o, "class", s())),
            o
        }
        )(), (()=>{
            const [o,l] = ze(ov);
            return ut(()=>Je(o, "class", r())),
            o
        }
        )(), (()=>{
            const [o,l] = ze(lv)
              , c = ju(l);
            return ut(()=>Je(o, "class", n())),
            ut(()=>Je(c, "class", a())),
            o
        }
        )()]
    }
    yb() {
        return this.$props.step()
    }
    Ib() {
        return this.$props.keyStep()
    }
    Jb(t) {
        return Math.round(t)
    }
    pb() {
        return this.$props.disabled()
    }
    tb() {
        const {min: t, max: s} = this.$props;
        this.$store.min.set(t()),
        this.$store.max.set(s())
    }
    ub() {
        if (!this.pb())
            return;
        const {dragging: t, pointing: s} = this.$store;
        t.set(!1),
        s.set(!1)
    }
    vb() {
        const {dragging: t, value: s, min: r, max: n} = this.$store;
        ne(t) || s.set(iv(r(), n(), s(), this.yb()))
    }
    zb() {
        return la(this.pb())
    }
    Ab() {
        return this.$props.min()
    }
    Bb() {
        return this.$props.max()
    }
    Cb() {
        const {value: t} = this.$store;
        return Math.round(t())
    }
    Db() {
        const {value: t, max: s} = this.$store;
        return Yt(t() / s() * 100, 2) + "%"
    }
    wb() {
        const {disabled: t} = this.$props
          , {dragging: s, interactive: r, pointing: n} = this.$store;
        this.setAttributes({
            disabled: t,
            "data-dragging": s,
            "data-pointing": n,
            "data-interactive": r,
            "aria-disabled": this.zb.bind(this),
            "aria-valuemin": this.Ab.bind(this),
            "aria-valuemax": this.Bb.bind(this),
            "aria-valuenow": this.Cb.bind(this),
            "aria-valuetext": this.Db.bind(this),
            "data-styled": this.Eb.bind(this),
            "data-media-slider": !0
        }),
        U(this.Fb.bind(this))
    }
    Eb() {
        return !!this.$props.trackClass()
    }
    Fb() {
        const {fillPercent: t, pointerPercent: s} = this.$store;
        this.Gb(Yt(t(), 3), Yt(s(), 3))
    }
    xb() {
        this.ob = this.el.querySelector('[slot="preview"]'),
        this.ob && (U(this.Hb.bind(this)),
        Promise.resolve().then(function() {
            return ub
        }).then(({setupPreviewStyles: t})=>{
            t(this.ob, this.qb)
        }
        ))
    }
    Hb() {
        if (this.pb() || !this.ob)
            return;
        window.requestAnimationFrame(this.rb);
        const t = new ResizeObserver(this.rb);
        return t.observe(this.ob),
        ()=>t.disconnect()
    }
    Kb(t) {}
    Lb(t) {}
    Mb(t) {}
    Nb(t) {}
}
g(vl, "el", Pe({
    tagName: "media-slider",
    props: ml,
    store: rr
}));
const cv = Re('<!$><img part="img" loading="eager" decoding="async" aria-hidden="true" />');
class bl extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "ne", null);
        g(this, "pe", null);
        g(this, "qe", []);
        g(this, "Sb", De(""));
        g(this, "re", De(!1));
        g(this, "se", De(null));
        g(this, "te", Ss(this.Be.bind(this)));
        this.n = Ze()
    }
    onAttach() {
        this.setAttributes({
            "data-loading": this.Wb.bind(this),
            "aria-hidden": hi(this.mb.bind(this))
        })
    }
    onConnect() {
        U(this.je.bind(this)),
        U(this.ve.bind(this)),
        U(this.we.bind(this))
    }
    je() {
        this.Sb(),
        this.n.$store.thumbnails(),
        this.re.set(!1)
    }
    xe() {
        this.re.set(!0),
        this.te()
    }
    Wb() {
        return !this.mb() && !this.re()
    }
    mb() {
        const {duration: t, thumbnailCues: s} = this.n.$store;
        return !Number.isFinite(t()) || s().length === 0
    }
    ve() {
        const {time: t} = this.$props
          , {duration: s, thumbnailCues: r} = this.n.$store
          , n = r()
          , a = t();
        if (!n || !Number.isFinite(s())) {
            this.se.set(null);
            return
        }
        this.se.set($m(a, n))
    }
    ye(t) {
        this.ne = t
    }
    we() {
        const t = this.se()
          , s = ne(this.n.$store.thumbnails);
        if (!s || !t) {
            this.Sb.set(""),
            this.ue();
            return
        }
        const [r,n=""] = (t.text || "").split("#");
        if (this.pe = this.ze(n),
        !this.pe) {
            this.ue();
            return
        }
        this.Sb.set(this.Ae(s, r)),
        this.te()
    }
    Ae(t, s) {
        return /https?:/.test(s) ? s : `${t.split("/").slice(0, -1).join("/")}${s.replace(/^\/?/, "/")}`.replace(/^\/\//, "/")
    }
    ze(t) {
        const [s,r] = t.split("=")
          , n = {}
          , a = r == null ? void 0 : r.split(",");
        if (!s || !r)
            return null;
        for (let o = 0; o < s.length; o++)
            n[s[o]] = +a[o];
        return n
    }
    Be() {
        if (!this.ne || !this.pe || !this.el)
            return;
        const {w: t, h: s, x: r, y: n} = this.pe
          , {maxWidth: a, maxHeight: o, minWidth: l, minHeight: c} = getComputedStyle(this.el)
          , u = Math.max(parseInt(l) / t, parseInt(c) / s)
          , d = Math.min(parseInt(a) / t, parseInt(o) / s)
          , f = d < 1 ? d : u > 1 ? u : 1;
        this.oe(this.el, "--thumbnail-width", `${t * f}px`),
        this.oe(this.el, "--thumbnail-height", `${s * f}px`),
        this.oe(this.ne, "width", `${this.ne.naturalWidth * f}px`),
        this.oe(this.ne, "height", `${this.ne.naturalHeight * f}px`),
        this.oe(this.ne, "transform", `translate(-${r * f}px, -${n * f}px)`)
    }
    oe(t, s, r) {
        t.style.setProperty(s, r),
        this.qe.push(()=>t.style.removeProperty(s))
    }
    ue() {
        for (const t of this.qe)
            t();
        this.qe = []
    }
    render() {
        const {crossorigin: t} = this.n.$store;
        return (()=>{
            const [s,r] = ze(cv);
            return ut(()=>Je(s, "src", this.Sb())),
            ut(()=>Je(s, "crossorigin", t())),
            Ks(s, "load", this.xe.bind(this)),
            oa(s, this.ye.bind(this)),
            s
        }
        )()
    }
}
g(bl, "el", Pe({
    tagName: "media-thumbnail",
    props: {
        time: 0
    }
}));
const uv = Re('<!$><media-thumbnail part="thumbnail" mk-d></media-thumbnail>');
class _c extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "Ob");
        this.n = Ze(),
        this.Ob = Jo(rr)
    }
    Pb() {
        const {duration: t} = this.n.$store;
        return this.Ob.pointerRate() * t()
    }
    render() {
        const t = this.Pb.bind(this);
        return (()=>{
            const [s,r] = ze(uv);
            return ut(()=>Je(s, "time", t())),
            aa(s),
            s
        }
        )()
    }
}
g(_c, "el", Pe({
    tagName: "media-slider-thumbnail"
})),
g(_c, "register", [bl]);
const dv = Re('<!$><video muted="" playsinline="" preload="auto" part="video" style="max-width: unset"></video>');
class fv extends ot {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "Ob");
        g(this, "ta", null);
        g(this, "Qb", De(!1));
        g(this, "Rb", De(!1));
        g(this, "Sb");
        g(this, "Tb")
    }
    onAttach() {
        this.n = Ze(),
        this.Ob = Jo(rr),
        this.Sb = Xt(this.Vb.bind(this)),
        this.Tb = Xt(this.mb.bind(this)),
        this.setAttributes({
            "data-loading": this.Wb.bind(this),
            "aria-hidden": hi(this.Tb)
        }),
        U(this.Xb.bind(this)),
        U(this.Yb.bind(this))
    }
    onConnect() {
        this.ta.readyState >= 2 && this.Ub()
    }
    render() {
        const {crossorigin: t} = this.n.$store;
        return (()=>{
            const [s,r] = ze(dv);
            return ut(()=>Je(s, "src", this.Sb())),
            ut(()=>Je(s, "crossorigin", t())),
            Ks(s, "canplay", this.Ub.bind(this)),
            Ks(s, "error", this.Zb.bind(this)),
            oa(s, this._b.bind(this)),
            s
        }
        )()
    }
    Vb() {
        const {canLoad: t} = this.n.$store;
        return t() ? this.$props.src() : null
    }
    Wb() {
        return !this.Qb() && !this.Tb()
    }
    mb() {
        const {duration: t} = this.n.$store;
        return !!this.Rb() || !this.Qb() || !Number.isFinite(t())
    }
    Xb() {
        this.Sb(),
        this.Qb.set(!1),
        this.Rb.set(!1)
    }
    Ub(t) {
        this.Qb.set(!0),
        this.dispatch("can-play", {
            trigger: t
        })
    }
    Zb(t) {
        this.Rb.set(!0),
        this.dispatch("error", {
            trigger: t
        })
    }
    Yb() {
        const {duration: t} = this.n.$store
          , {pointerRate: s} = this.Ob;
        this.Qb() && this.ta && Number.isFinite(t()) && Number.isFinite(s()) && (this.ta.currentTime = s() * t())
    }
    _b(t) {
        this.ta = t
    }
}
g(fv, "el", Pe({
    tagName: "media-slider-video",
    props: {
        src: void 0
    }
}));
function Da(i, e) {
    const t = String(i)
      , s = t.length;
    if (s < e) {
        const n = e - s;
        return `${"0".repeat(n)}${i}`
    }
    return t
}
function Cd(i) {
    const e = Math.trunc(i / 3600)
      , t = Math.trunc(i % 3600 / 60)
      , s = Math.trunc(i % 60)
      , r = Number((i - Math.trunc(i)).toPrecision(3));
    return {
        hours: e,
        minutes: t,
        seconds: s,
        fraction: r
    }
}
function ua(i, e=!1, t=!1, s=!1) {
    const {hours: r, minutes: n, seconds: a} = Cd(i)
      , o = e ? Da(r, 2) : r
      , l = t ? Da(n, 2) : n
      , c = Da(a, 2);
    return r > 0 || s ? `${o}:${l}:${c}` : `${l}:${c}`
}
function fo(i) {
    const e = []
      , {hours: t, minutes: s, seconds: r} = Cd(i);
    return t > 0 && e.push(`${t} hour`),
    s > 0 && e.push(`${s} min`),
    (r > 0 || e.length === 0) && e.push(`${r} sec`),
    e.join(" ")
}
const hv = Re("<!$><span><!$></span>");
class pv extends ot {
    constructor() {
        super(...arguments);
        g(this, "$b");
        g(this, "ac");
        g(this, "Ob")
    }
    onAttach() {
        this.Ob = Jo(rr),
        this.$b = Li(gl),
        this.ac = Xt(this.bc.bind(this))
    }
    bc() {
        var p, b;
        const {type: t, format: s, decimalPlaces: r, padHours: n, padMinutes: a, showHours: o} = this.$props
          , {value: l, pointerValue: c, min: u, max: d} = this.Ob
          , f = t() === "current" ? l() : c();
        if (s() === "percent") {
            const w = d() - u()
              , m = f / w * 100;
            return (this.$b.percent ?? Yt)(m, r()) + "﹪"
        } else
            return s() === "time" ? (this.$b.time ?? ua)(f, n(), a(), o()) : ((b = (p = this.$b).value) == null ? void 0 : b.call(p, f)) ?? f.toFixed(2)
    }
    render() {
        return (()=>{
            const [t,s] = ze(hv)
              , r = s.nextNode();
            return Ot(r, this.ac),
            t
        }
        )()
    }
}
g(pv, "el", Pe({
    tagName: "media-slider-value",
    props: {
        type: "current",
        format: void 0,
        showHours: !1,
        padHours: !1,
        padMinutes: !1,
        decimalPlaces: 2
    }
}));
class mv extends vl {
    constructor() {
        super(...arguments);
        g(this, "sb", !0);
        g(this, "cc", ca(this.dc.bind(this), 25))
    }
    onAttach(t) {
        Ct(t, "aria-label", "Media volume"),
        super.onAttach(t),
        Qp().then(s=>{
            s || $e(t, "aria-hidden", "true")
        }
        ),
        U(this.B.bind(this))
    }
    B() {
        const {muted: t, volume: s} = this.n.$store
          , r = t() ? 0 : s() * 100;
        this.$store.value.set(r),
        this.dispatch("value-change", {
            detail: r
        })
    }
    dc(t) {
        if (!t.trigger)
            return;
        const s = Yt(t.detail / 100, 3);
        this.n.remote.changeVolume(s, t)
    }
    Kb(t) {
        this.cc(t)
    }
    Nb(t) {
        this.cc(t)
    }
    Ab() {
        return 0
    }
    Bb() {
        return 100
    }
}
g(mv, "el", Pe({
    tagName: "media-volume-slider",
    props: {
        ...ml,
        min: ki({
            value: 0,
            attribute: !1
        }),
        max: ki({
            value: 100,
            attribute: !1
        }),
        value: ki({
            value: 100,
            attribute: !1
        })
    },
    store: rr
}));
class nr {
    constructor(e) {
        g(this, "Fg");
        g(this, "Gg");
        g(this, "Eg", new Map);
        g(this, "Hg", De([]));
        g(this, "xc", Ss(this.qa.bind(this)));
        this.Fg = e.firstChild,
        this.Gg = new MutationObserver(this.Y.bind(this)),
        this.Gg.observe(this.Fg, {
            subtree: !0,
            childList: !0
        }),
        U(this.Ig.bind(this)),
        mi(this.Jg.bind(this))
    }
    Y(e) {
        const t = Array.from(this.Eg.keys()).join(",");
        for (const s of e)
            for (const r of s.addedNodes)
                tl(r) && r.matches(t) && this.xc()
    }
    gc(e, t) {
        return this.Eg.set(e, t),
        this.Hg.set(s=>[...s, t]),
        this
    }
    qa() {
        for (const [e,t] of this.Eg) {
            const s = ne(t);
            for (const r of this.Fg.querySelectorAll(e))
                $e(r, "class", s)
        }
    }
    Ig() {
        for (const e of this.Hg())
            e();
        this.xc()
    }
    Jg() {
        this.Hg.set([]),
        this.Eg.clear(),
        this.Gg.disconnect()
    }
}
const gv = Re('<div part="chapters"></div>')
  , vv = Re('<div part="chapter-container"><div part="chapter"><div part="track"></div><div part="track track-fill" style="width: 0%"></div><div part="track track-progress" style="width: 0%"></div></div></div>');
class bv {
    constructor(e, t, s) {
        g(this, "Kg", []);
        g(this, "Mg", []);
        g(this, "Lg", 0);
        g(this, "Ng", 0);
        g(this, "$g", Ss(e=>{
            let t;
            for (let s = this.Ng; s < this.Mg.length; s++)
                if (t = this.Og(this.Kg[s], e),
                this.Zg(this.Mg[s]).style.width = t + "%",
                t < 100) {
                    this.Ng = s;
                    break
                }
        }
        ));
        g(this, "ah", Xt(this.bh.bind(this)));
        this.n = e,
        this.Ob = t,
        this.Pc = s
    }
    render(e, t) {
        return e != null && e.length ? np(()=>(()=>{
            const s = tc(gv);
            return ut(()=>Je(s, "class", t())),
            sp(s, ()=>this.Sg(e)),
            s
        }
        )()) : null
    }
    Sg(e) {
        this.Kg = this.Tg(e);
        const t = this.Kg[0];
        this.Pc(t.startTime === 0 ? t.text : "");
        for (let s = 0; s < this.Kg.length; s++)
            this.Mg.push(this.Ug());
        return this.Vg(),
        U(this.Wg.bind(this)),
        U(this.Xg.bind(this)),
        U(this.Yg.bind(this)),
        mi(()=>{
            this.Mg = [],
            this.Lg = 0,
            this.Ng = 0
        }
        ),
        this.Mg
    }
    Ug() {
        return tc(vv)
    }
    Pg(e) {
        return e.firstChild.firstChild.nextSibling
    }
    Zg(e) {
        return e.firstChild.lastChild
    }
    _g() {
        return this.Kg[this.Kg.length - 1].endTime
    }
    Vg() {
        let e, t = this._g();
        for (let s = 0; s < this.Kg.length; s++)
            e = this.Kg[s],
            this.Mg[s].style.width = Yt((e.endTime - e.startTime) / t * 100, 3) + "%"
    }
    Wg() {
        let {fillPercent: e, value: t, pointing: s} = this.Ob
          , r = this.Kg[this.Lg]
          , n = this.Qg(r.startTime <= ne(t) ? this.Lg : 0, e());
        n > this.Lg ? this.Rg(this.Lg, n, "100%") : n < this.Lg && this.Rg(n + 1, this.Lg + 1, "0%"),
        !ne(s) && this.Lg !== n && this.Pc(this.Kg[n].text);
        let a = this.Pg(this.Mg[n])
          , o = this.Og(this.Kg[n], e()) + "%";
        a.style.width !== o && (a.style.width = o),
        this.Lg = n
    }
    Xg() {
        let {pointing: e, pointerPercent: t} = this.Ob;
        if (!e())
            return;
        const s = this.Qg(0, t());
        this.Pc(this.Kg[s].text)
    }
    Rg(e, t, s) {
        for (let r = e; r < t; r++)
            this.Pg(this.Mg[r]).style.width = s
    }
    Qg(e, t) {
        let s = 0;
        for (let r = e; r < this.Kg.length; r++)
            if (s = this.Og(this.Kg[r], t),
            s >= 0 && s < 100)
                return r;
        return 0
    }
    Yg() {
        this.$g(this.ah())
    }
    bh() {
        const {bufferedEnd: e, duration: t} = this.n;
        return Yt(Math.min(e() / Math.max(t(), 1), 1), 3) * 100
    }
    Og(e, t) {
        const s = this.Kg[this.Kg.length - 1]
          , r = e.startTime / s.endTime * 100
          , n = e.endTime / s.endTime * 100;
        return Math.max(0, Yt(t >= n ? 100 : (t - r) / (n - r) * 100, 3))
    }
    Tg(e) {
        const t = [];
        for (let s = 0; s < e.length - 1; s++) {
            const r = e[s]
              , n = e[s + 1];
            if (t.push(r),
            n) {
                const a = n.startTime - r.endTime;
                a > 0 && t.push(new window.VTTCue(r.endTime,r.endTime + a,""))
            }
        }
        return t.push(e[e.length - 1]),
        t
    }
}
class yv extends vl {
    constructor(t) {
        super(t);
        g(this, "sb", !0);
        g(this, "wc", !0);
        g(this, "hc");
        g(this, "Ba", De(null));
        g(this, "jc");
        g(this, "kc");
        g(this, "ic", !1);
        g(this, "fc", null);
        g(this, "lc", De(""));
        As(gl, {
            value: this.mc.bind(this),
            time: this.nc.bind(this)
        })
    }
    onAttach(t) {
        Ct(t, "aria-label", "Media time"),
        super.onAttach(t),
        this.jc = new bv(this.n.$store,this.$store,this.lc.set),
        this.setAttributes({
            "data-chapters": this.oc.bind(this)
        }),
        this.setStyles({
            "--media-buffered-percent": this.pc.bind(this)
        }),
        U(this.C.bind(this)),
        U(this.qc.bind(this)),
        U(this.rc.bind(this)),
        Kr(()=>{
            U(this.sc.bind(this))
        }
        )
    }
    pc() {
        const {bufferedEnd: t, duration: s} = this.n.$store;
        return Yt(Math.min(t() / Math.max(s(), 1), 1) * 100, 3) + "%"
    }
    oc() {
        var s, r;
        const {duration: t} = this.n.$store;
        return (s = this.kc) == null || s.xc(),
        ((r = this.Ba()) == null ? void 0 : r.cues.length) && Number.isFinite(t()) && t() > 0
    }
    onConnect(t) {
        super.onConnect(t),
        this.Ja(),
        fe(this.n.textTracks, "mode-change", this.Ja.bind(this));
        const {chapterContainerClass: s, chapterClass: r, trackClass: n, trackFillClass: a, trackProgressClass: o} = this.$props;
        this.kc = new nr(t).gc('[part="chapter-container"]', s).gc('[part="chapter"]', r).gc('[part="track"]', n).gc('[part~="track-fill"]', a).gc('[part~="track-progress"]', o)
    }
    render() {
        const t = super.render()
          , {chaptersClass: s} = this.$props;
        return [al(()=>{
            var r;
            return this.jc.render((r = this.Ba()) == null ? void 0 : r.cues, s)
        }
        ), t]
    }
    qc() {
        this.hc = ca(this.cb.bind(this), this.$props.seekingRequestThrottle())
    }
    C() {
        const {currentTime: t} = this.n.$store
          , {value: s, dragging: r} = this.$store
          , n = this.tc(t());
        ne(r) || (s.set(n),
        this.dispatch("value-change", {
            detail: n
        }))
    }
    sc() {
        const t = this.n.player;
        t && this.ob && $e(t, "data-preview", this.$store.interactive())
    }
    cb(t, s) {
        this.n.remote.seeking(t, s)
    }
    uc(t, s, r) {
        this.hc.cancel();
        const {live: n} = this.n.$store;
        if (n() && s >= 99) {
            this.n.remote.seekToLiveEdge(r);
            return
        }
        this.n.remote.seek(t, r)
    }
    Lb(t) {
        const {pauseWhileDragging: s} = this.$props;
        if (s()) {
            const {paused: r} = this.n.$store;
            this.ic = !r(),
            this.n.remote.pause(t)
        }
    }
    Nb(t) {
        this.hc(this.ec(t.detail), t)
    }
    Mb(t) {
        const s = t.detail;
        this.uc(this.ec(s), s, t);
        const {pauseWhileDragging: r} = this.$props;
        r() && this.ic && (this.n.remote.play(t),
        this.ic = !1)
    }
    Kb(t) {
        const {dragging: s} = this.$store;
        s() || !t.trigger || this.Mb(t)
    }
    yb() {
        const t = this.$props.step() / this.n.$store.duration() * 100;
        return Number.isFinite(t) ? t : 1
    }
    Ib() {
        const t = this.$props.keyStep() / this.n.$store.duration() * 100;
        return Number.isFinite(t) ? t : 1
    }
    Jb(t) {
        return Yt(t, 3)
    }
    pb() {
        const {canSeek: t} = this.n.$store;
        return super.pb() || !t()
    }
    Ab() {
        return 0
    }
    Bb() {
        return 100
    }
    Db() {
        const t = this.ec(this.$store.value())
          , {duration: s} = this.n.$store;
        return Number.isFinite(t) ? `${fo(t)} out of ${fo(s())}` : "live"
    }
    ec(t) {
        const {duration: s} = this.n.$store;
        return Math.round(t / 100 * s())
    }
    tc(t) {
        const {liveEdge: s, duration: r} = this.n.$store
          , n = Math.max(0, Math.min(1, s() ? 1 : Math.min(t, r()) / r()));
        return Number.isNaN(n) ? 0 : Number.isFinite(n) ? n * 100 : 100
    }
    mc(t) {
        const s = this.ec(t)
          , {live: r, duration: n} = this.n.$store;
        return Number.isFinite(s) ? (r() ? s - n() : s).toFixed(0) : "LIVE"
    }
    nc(t, s, r, n) {
        const a = this.ec(t)
          , {live: o, duration: l} = this.n.$store
          , c = o() ? a - l() : a;
        return Number.isFinite(a) ? `${c < 0 ? "-" : ""}${ua(Math.abs(c), s, Ps(r) ? Math.abs(c) >= 3600 : r, n)}` : "LIVE"
    }
    Ja() {
        dd(this.n.textTracks, ne(this.Ba), this.Ba.set)
    }
    rc() {
        var t;
        if (this.Ba(),
        this.fc = ((t = this.el) == null ? void 0 : t.querySelector('[part="chapter-title"]')) ?? null,
        !!this.fc)
            return U(this.vc.bind(this)),
            ()=>{
                this.fc.textContent = "",
                this.fc = null
            }
    }
    vc() {
        this.fc.textContent = this.lc()
    }
}
g(yv, "el", Pe({
    tagName: "media-time-slider",
    props: {
        ...ml,
        min: ki({
            value: 0,
            attribute: !1
        }),
        max: ki({
            value: 100,
            attribute: !1
        }),
        value: ki({
            value: 0,
            attribute: !1
        }),
        pauseWhileDragging: !1,
        seekingRequestThrottle: 100,
        chaptersClass: null,
        chapterContainerClass: null,
        chapterClass: null
    },
    store: rr
}));
const bs = Xr()
  , wv = ["a[href]", "[tabindex]", "input", "select", "button"].map(i=>`${i}:not([aria-hidden])`).join(",")
  , Tc = new Set(["Escape", "Tab", "ArrowUp", "ArrowDown", "Home", "PageUp", "End", "PageDown", "Enter", " "]);
class Ev {
    constructor(e) {
        g(this, "Cd", 0);
        g(this, "dh", null);
        g(this, "ch", []);
        this.jg = e
    }
    get d() {
        return this.ch
    }
    ld(e) {
        fe(e, "focus", this.Ne.bind(this)),
        this.dh = e
    }
    kd() {
        this.dh && (this.qa(),
        fe(this.dh, "keyup", this.$a.bind(this)),
        fe(this.dh, "keydown", this.ab.bind(this)),
        mi(()=>{
            this.Cd = 0,
            this.ch = []
        }
        ))
    }
    qa() {
        this.Cd = 0,
        this.ch = this.hh()
    }
    od(e=this.gh()) {
        const t = this.ch[e]
          , s = this.jg.id();
        t && s && requestAnimationFrame(()=>{
            s.scrollTop = t.offsetTop - s.offsetHeight / 2 + t.offsetHeight / 2
        }
        )
    }
    eh(e) {
        var t;
        this.Cd = e,
        (t = this.ch[e]) == null || t.focus(),
        this.od(e)
    }
    gh() {
        return this.ch.findIndex(e=>e.getAttribute("aria-checked") === "true")
    }
    Ne() {
        setTimeout(()=>{
            const e = this.gh();
            this.eh(e >= 0 ? e : 0)
        }
        , 100)
    }
    $a(e) {
        Tc.has(e.key) && (e.stopPropagation(),
        e.preventDefault())
    }
    ab(e) {
        if (Tc.has(e.key))
            switch (e.stopPropagation(),
            e.preventDefault(),
            e.key) {
            case "Escape":
                this.jg.jd(e);
                break;
            case "Tab":
                this.eh(this.fh(e.shiftKey ? -1 : 1));
                break;
            case "ArrowUp":
                this.eh(this.fh(-1));
                break;
            case "ArrowDown":
                this.eh(this.fh(1));
                break;
            case "Home":
            case "PageUp":
                this.eh(0);
                break;
            case "End":
            case "PageDown":
                this.eh(this.ch.length - 1);
                break
            }
    }
    fh(e) {
        let t = this.Cd;
        do
            t = (t + e + this.ch.length) % this.ch.length;
        while (this.ch[t].offsetParent === null);
        return t
    }
    hh() {
        if (!this.dh)
            return [];
        const e = this.dh.querySelectorAll(wv)
          , t = []
          , s = r=>r.hasAttribute("data-media-menu-items");
        for (const r of e)
            r instanceof HTMLElement && r.offsetParent !== null && od(this.dh, r, s) && t.push(r);
        return t
    }
}
var xv = Object.defineProperty
  , _v = Object.getOwnPropertyDescriptor
  , $d = (i,e,t,s)=>{
    for (var r = s > 1 ? void 0 : s ? _v(e, t) : e, n = i.length - 1, a; n >= 0; n--)
        (a = i[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
    return s && r && xv(e, t, r),
    r
}
;
let Tv = 0;
class yl extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "Jc");
        g(this, "Kc");
        g(this, "Ec", De(!1));
        g(this, "Qc", De(!1));
        g(this, "Rc", De(!1));
        g(this, "Fc");
        g(this, "Gc", new Set);
        g(this, "Lc", null);
        g(this, "Dc", null);
        g(this, "Ic", null);
        g(this, "Hc");
        g(this, "pd", this.Mc.bind(this));
        g(this, "ed", this.fd.bind(this));
        g(this, "cd", this.gd.bind(this));
        g(this, "dd", this.hd.bind(this));
        this.n = Ze();
        const s = ++Tv;
        this.Jc = `media-menu-${s}`,
        this.Kc = `media-menu-button-${s}`,
        sa(bs) && (this.Fc = Li(bs)),
        this.Hc = new Ev({
            id: this.Xc.bind(this),
            jd: this.close.bind(this)
        }),
        As(bs, {
            Ec: this.Ec,
            Ac: De(""),
            Mc: this.Mc.bind(this),
            zc: this.zc.bind(this),
            Cc: this.Cc.bind(this),
            Sc: this.Sc.bind(this),
            Bc: this.Bc.bind(this),
            Nc: this.Nc.bind(this)
        })
    }
    onAttach(t) {
        const {position: s} = this.$props;
        this.setAttributes({
            position: s,
            "data-open": this.Ec,
            "data-submenu": !!this.Fc,
            "data-disabled": this.pb.bind(this),
            "data-media-menu": !0
        })
    }
    onConnect(t) {
        var s;
        this.Fc || U(this.Tc.bind(this)),
        U(this.Yc.bind(this)),
        (s = this.Fc) == null || s.Nc(t),
        requestAnimationFrame(()=>this.s())
    }
    onDestroy() {
        this.Uc(),
        this.Lc = null,
        this.Dc = null,
        this.Ic = null
    }
    Uc() {
        var s, r;
        if (!this.Dc || (s = this.el) != null && s.contains(this.Dc))
            return;
        const t = (r = this.Dc) == null ? void 0 : r.parentElement;
        this.el.append(this.Dc),
        (t == null ? void 0 : t.localName) === "media-menu" && (t.destroy(),
        t.remove())
    }
    Tc() {
        var l, c;
        if (!this.el)
            return;
        const {breakpointX: t, breakpointY: s, viewType: r, orientation: n, fullscreen: a} = this.n.$store
          , o = r() === "audio" ? t() === "sm" : s() === "sm";
        if (!(!this.Dc || this.Fc)) {
            if ($e(this.el, "data-popup", o),
            $e(this.el, "data-popup-wide", o && n() === "landscape"),
            o && !a() && (c = (l = this.el).contains) != null && c.call(l, this.Dc)) {
                const u = this.el.cloneNode();
                u.appendChild(this.Dc),
                requestAnimationFrame(()=>{
                    if (!this.el)
                        return;
                    const d = "--media-focus-ring"
                      , f = getComputedStyle(this.el).getPropertyValue(d);
                    f && Wt(u, d, f)
                }
                ),
                Jt(()=>{
                    document.body.append(u)
                }
                , this.n.scope)
            }
            return this.s(),
            ()=>this.Uc()
        }
    }
    Yc() {
        const t = this.Vc();
        if (this.s(),
        this.Wc(t),
        !t)
            return;
        this.Hc.kd();
        const s = this.Zc();
        s && Zs(s, this._c.bind(this)),
        this.listen("pointerup", this.$c.bind(this)),
        fe(window, "pointerup", this.ad.bind(this))
    }
    zc(t) {
        const s = !!this.Fc
          , r = this.Vc.bind(this)
          , n = hi(r)
          , a = hi(this.pb.bind(this));
        Ct(t, "tabindex", s ? "-1" : "0"),
        Ct(t, "role", s ? "menuitem" : "button"),
        $e(t, "id", this.Kc),
        $e(t, "aria-controls", this.Jc),
        $e(t, "aria-haspopup", "true"),
        U(()=>{
            $e(t, "aria-disabled", a()),
            $e(t, "aria-expanded", n()),
            s || $e(t, "aria-pressed", n()),
            $e(t, "data-pressed", r())
        }
        ),
        $e(t, "data-media-button", !s),
        $e(t, "data-media-menu-button", ""),
        Zs(t, this.bd.bind(this)),
        this.Lc = t
    }
    Cc(t) {
        Ct(t, "role", "menu"),
        Ct(t, "tabindex", "-1"),
        $e(t, "id", this.Jc),
        $e(t, "aria-describedby", this.Kc),
        $e(t, "data-media-menu-items", ""),
        this.Dc = t,
        this.Hc.ld(t),
        this.Tc(),
        this.Wc(ne(this.Ec))
    }
    Sc(t) {
        this.Ic = t
    }
    Wc(t) {
        this.Dc && $e(this.Dc, "aria-hidden", la(!t))
    }
    Bc(t) {
        this.Rc.set(t)
    }
    bd(t) {
        var s;
        this.Fc && t.stopPropagation(),
        !this.pb() && (this.Ec.set(r=>!r),
        this.Oc(),
        Oi(),
        ci(t) && ((s = this.Dc) == null || s.focus()),
        this.Pc(t))
    }
    Pc(t) {
        var r, n, a, o, l;
        const s = ne(this.Ec);
        this.dispatch(s ? "open" : "close", {
            trigger: t
        }),
        s ? (this.Fc || ((r = this.n.activeMenu) == null || r.close(t),
        this.n.activeMenu = this),
        (a = (n = this.Ic) == null ? void 0 : n.md) == null || a.call(n, t)) : (this.Fc || (setTimeout(()=>{
            for (const c of this.Gc)
                c.close(t)
        }
        , 300),
        this.n.activeMenu = null),
        (l = (o = this.Ic) == null ? void 0 : o.nd) == null || l.call(o, t)),
        s && !ci(t) && requestAnimationFrame(()=>{
            this.Hc.qa(),
            setTimeout(()=>{
                this.Hc.od()
            }
            , 100)
        }
        )
    }
    Vc() {
        return !this.pb() && this.Ec()
    }
    pb() {
        return this.Qc() || this.Rc()
    }
    Mc(t) {
        this.Qc.set(t)
    }
    $c(t) {
        t.stopPropagation()
    }
    ad() {
        if (this.Fc)
            return setTimeout(this.close.bind(this), 800);
        this.close()
    }
    _c(t) {
        t.stopPropagation(),
        this.close(t)
    }
    Zc() {
        const t = this.el.querySelector('[slot="close-target"]');
        return od(this.el, t) ? t : null
    }
    Xc() {
        if (this.Fc) {
            let t = this.el;
            for (; t && t.tagName !== "media-menu" && t.hasAttribute("data-submenu"); )
                t = t.parentNode;
            return t
        } else
            return this.Dc
    }
    Oc(t) {
        this.Fc || (this.Ec() ? this.n.remote.pauseUserIdle(t) : this.n.remote.resumeUserIdle(t))
    }
    Nc(t) {
        this.Gc.add(t),
        fe(t, "open", this.cd),
        fe(t, "close", this.dd),
        mi(this.ed)
    }
    fd(t) {
        this.Gc.delete(t)
    }
    gd(t) {
        for (const s of this.Gc)
            s !== t.target && s.setAttribute("aria-hidden", "true");
        this.s()
    }
    hd() {
        for (const t of this.Gc)
            t.removeAttribute("aria-hidden");
        this.s()
    }
    s() {
        var n;
        if (!this.Dc)
            return;
        let t = getComputedStyle(this.Dc)
          , s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)
          , r = [...this.Dc.children];
        ((n = r[0]) == null ? void 0 : n.localName) === "shadow-root" && r.push(...r[0].children);
        for (const a of r)
            s += a.offsetHeight;
        requestAnimationFrame(()=>{
            this.Dc && ($e(this.Dc, "data-resizing", ""),
            setTimeout(()=>{
                this.Dc && $e(this.Dc, "data-resizing", !1)
            }
            , 250),
            Wt(this.Dc, "--menu-height", s + "px"))
        }
        )
    }
    open(t) {
        var s;
        ne(this.Ec) || (this.Ec.set(!0),
        Oi(),
        this.Pc(t),
        ci(t) && ((s = this.Dc) == null || s.focus()),
        this.Oc(t))
    }
    close(t) {
        ne(this.Ec) && (this.Ec.set(!1),
        Oi(),
        ci(t) && requestAnimationFrame(()=>{
            var s;
            (s = this.Lc) == null || s.focus()
        }
        ),
        this.Pc(t),
        this.Oc(t))
    }
}
g(yl, "el", Pe({
    tagName: "media-menu",
    props: {
        position: null
    }
}));
$d([Si], yl.prototype, "open", 1);
$d([Si], yl.prototype, "close", 1);
class Zr extends ot {
    constructor(t) {
        super(t);
        g(this, "yc");
        this.yc = Li(bs),
        new is(t),
        new pl(t)
    }
    onAttach(t) {
        this.yc.zc(t),
        U(this.ub.bind(this))
    }
    onConnect(t) {
        const s = Array.from(t.querySelectorAll('[slot="hint"]')).pop();
        s && U(()=>{
            const r = this.yc.Ac();
            r && (s.textContent = r)
        }
        )
    }
    ub() {
        this.yc.Bc(this.$props.disabled())
    }
}
g(Zr, "el", Pe({
    tagName: "media-menu-button",
    props: {
        disabled: !1
    }
}));
class ar extends ot {
    constructor(t) {
        super(t);
        g(this, "yc");
        this.yc = Li(bs),
        new is(t)
    }
    onAttach(t) {
        this.yc.Cc(t)
    }
}
g(ar, "el", Pe({
    tagName: "media-menu-items"
}));
const ho = Xr();
var Sv = Object.defineProperty
  , Cv = Object.getOwnPropertyDescriptor
  , Pd = (i,e,t,s)=>{
    for (var r = s > 1 ? void 0 : s ? Cv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
        (a = i[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
    return s && r && Sv(e, t, r),
    r
}
;
class ss extends ot {
    constructor(t) {
        super(t);
        g(this, "rd", new Set);
        g(this, "qd", De(""));
        g(this, "yd", this.Pc.bind(this));
        As(ho, {
            add: this.vd.bind(this),
            remove: this.wd.bind(this)
        })
    }
    get values() {
        return Array.from(this.rd).map(t=>t.qd())
    }
    get value() {
        return this.qd()
    }
    set value(t) {
        this.Pc(t)
    }
    onAttach(t) {
        sa(bs) || Ct(t, "role", "radiogroup"),
        this.sd(),
        this.setAttributes({
            value: this.qd
        })
    }
    onConnect() {
        U(this.sd.bind(this))
    }
    onDestroy() {
        this.rd.clear()
    }
    vd(t) {
        this.rd.has(t) || (this.rd.add(t),
        t.xd = this.yd,
        t.td(t.qd() === this.qd()))
    }
    wd(t) {
        t.xd = null,
        this.rd.delete(t)
    }
    sd() {
        this.Pc(this.$props.value())
    }
    Pc(t, s) {
        const r = ne(this.qd);
        if (!t || t === r)
            return;
        const n = this.ud(r)
          , a = this.ud(t);
        n == null || n.td(!1, s),
        a == null || a.td(!0, s),
        this.qd.set(t),
        this.dispatch("change", {
            trigger: s
        })
    }
    ud(t) {
        for (const s of this.rd)
            if (t === ne(s.qd))
                return s;
        return null
    }
}
g(ss, "el", Pe({
    tagName: "media-radio-group",
    props: {
        value: ""
    }
}));
Pd([Tt], ss.prototype, "values", 1);
Pd([Tt], ss.prototype, "value", 1);
var $v = Object.defineProperty
  , Pv = Object.getOwnPropertyDescriptor
  , Av = (i,e,t,s)=>{
    for (var r = s > 1 ? void 0 : s ? Pv(e, t) : e, n = i.length - 1, a; n >= 0; n--)
        (a = i[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
    return s && r && $v(e, t, r),
    r
}
;
const Mv = Re('<!$><div part="check"></div>');
class ks extends ot {
    constructor(t) {
        super(t);
        g(this, "zd", De(!1));
        g(this, "Ad", {
            qd: this.$props.value,
            td: this.td.bind(this),
            xd: null
        });
        new is(t)
    }
    get checked() {
        return this.zd()
    }
    onAttach() {
        U(this.vb.bind(this)),
        this.Bd();
        const t = sa(bs);
        this.setAttributes({
            value: this.$props.value,
            role: t ? "menuitemradio" : "radio",
            tabindex: t ? -1 : 0,
            "aria-checked": hi(this.zd)
        })
    }
    onConnect(t) {
        this.Bd(),
        Zs(t, this.jb.bind(this))
    }
    onDisconnect() {
        Li(ho).remove(this.Ad)
    }
    Bd() {
        Li(ho).add(this.Ad)
    }
    vb() {
        var r, n;
        const {value: t} = this.$props
          , s = t();
        ne(this.zd) && ((n = (r = this.Ad).xd) == null || n.call(r, s))
    }
    jb(t) {
        var s, r;
        ne(this.zd) || (this.zd.set(!0),
        this.dispatch("change", {
            trigger: t
        }),
        (r = (s = this.Ad).xd) == null || r.call(s, ne(this.$props.value), t))
    }
    td(t, s) {
        ne(this.zd) !== t && (this.zd.set(t),
        this.dispatch("change", {
            trigger: s
        }))
    }
    render() {
        return na(Mv)
    }
}
g(ks, "el", Pe({
    tagName: "media-radio",
    props: {
        value: ""
    }
}));
Av([Tt], ks.prototype, "checked", 1);
const Ov = Re("<!$><media-radio-group mk-d><!$></media-radio-group>")
  , kv = Re("<!$><media-radio mk-d><!$></media-radio>");
function Jr(i) {
    const {value: e, onChange: t, radioGroupClass: s} = i;
    return (()=>{
        const [r,n] = ze(Ov)
          , a = n.nextNode();
        return ut(()=>Je(r, "class", s())),
        Ks(r, "change", t),
        Gu(()=>{
            Ot(a, ()=>Lv(i))
        }
        , aa(r, {
            value: e
        })),
        r
    }
    )()
}
function Lv(i) {
    const {options: e} = i;
    return e().map(t=>(()=>{
        const [s,r] = ze(kv)
          , n = r.nextNode();
        return Je(s, "part", i.part),
        Gu(()=>{
            Ot(n, t.content)
        }
        , aa(s, {
            value: t.value
        })),
        s
    }
    )())
}
const Iv = Re('<!$><media-thumbnail part="thumbnail" mk-d></media-thumbnail>')
  , Dv = Re('<!$><div part="content"><div part="title"><!$></div><div part="start-time"><!$></div><div part="duration"><!$></div></div>');
class Sc extends ar {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "Cd", De(0));
        g(this, "Ba", De(null));
        this.n = Ze()
    }
    onAttach(t) {
        super.onAttach(t),
        this.yc.Sc({
            md: this.md.bind(this)
        }),
        this.setAttributes({
            "data-thumbnails": this.Dd.bind(this)
        })
    }
    md() {
        ne(()=>this.C())
    }
    onConnect(t) {
        U(this.C.bind(this)),
        U(this.Ed.bind(this)),
        this.Ja(),
        fe(this.n.textTracks, "mode-change", this.Ja.bind(this));
        const {chapterClass: s, thumbnailClass: r, contentClass: n, titleClass: a, startTimeClass: o, durationClass: l} = this.$props;
        new nr(t).gc('[part="chapter"]', s).gc('[part="thumbnail"]', r).gc('[part="content"]', n).gc('[part="title"]', a).gc('[part="start-time"]', o).gc('[part="duration"]', l)
    }
    Dd() {
        const {thumbnailCues: t} = this.n.$store;
        return t().length > 0
    }
    C() {
        if (!this.yc.Ec())
            return;
        const t = this.Ba();
        if (!t) {
            this.Cd.set(-1);
            return
        }
        const {currentTime: s} = this.n.$store
          , r = s()
          , n = t.cues.findIndex(a=>qn(a, r));
        if (this.Cd.set(n),
        n >= 0) {
            const a = t.cues[n]
              , o = this.el.querySelector("shadow-root media-radio[aria-checked='true']")
              , l = (r - a.startTime) / (a.endTime - a.startTime) * 100;
            o && Wt(o, "--played-percent", Yt(l, 3) + "%")
        }
    }
    Ed() {
        this.yc.Mc(this.pb())
    }
    pb() {
        const t = this.Ba();
        return !t || !t.cues.length
    }
    Pc(t) {
        var n;
        if (this.pb() || !t.trigger)
            return;
        const s = +t.target.value
          , r = (n = this.Ba()) == null ? void 0 : n.cues;
        Us(s) && (r != null && r[s]) && (this.Cd.set(s),
        this.n.remote.seek(r[s].startTime, t))
    }
    Ja() {
        dd(this.n.textTracks, ne(this.Ba), this.Ba.set)
    }
    Fd() {
        return this.Cd() + ""
    }
    Gd() {
        const t = this.Ba();
        return t ? t.cues.map((s,r)=>({
            value: r + "",
            content: ()=>[(()=>{
                const n = al(()=>this.Dd() && (()=>{
                    const [a,o] = ze(Iv);
                    return aa(a, {
                        time: s.startTime
                    }),
                    a
                }
                )());
                return n(),
                n
            }
            )(), (()=>{
                const [n,a] = ze(Dv)
                  , o = a.nextNode()
                  , l = a.nextNode()
                  , c = a.nextNode();
                return Ot(o, s.text),
                Ot(l, ()=>ua(s.startTime, !1, s.startTime >= 3600)),
                Ot(c, ()=>fo(s.endTime - s.startTime)),
                n
            }
            )()]
        })) : []
    }
    render() {
        const {containerClass: t} = this.$props;
        return Jr({
            part: "chapter",
            value: this.Fd.bind(this),
            options: this.Gd.bind(this),
            radioGroupClass: t,
            onChange: this.Pc.bind(this)
        })
    }
}
g(Sc, "el", Pe({
    tagName: "media-chapters-menu-items",
    props: {
        containerClass: null,
        chapterClass: null,
        thumbnailClass: null,
        contentClass: null,
        titleClass: null,
        startTimeClass: null,
        durationClass: null
    }
})),
g(Sc, "register", [bl, ss, ks]);
const Rv = Re('<!$><span part="label"><!$></span>');
class Cc extends ar {
    constructor(t) {
        super(t);
        g(this, "n");
        this.n = Ze()
    }
    onConnect(t) {
        U(this.Ed.bind(this)),
        U(this.Hd.bind(this));
        const {radioClass: s, radioCheckClass: r} = this.$props;
        new nr(t).gc("media-radio", s).gc('[part="check"]', r)
    }
    Hd() {
        const {emptyLabel: t} = this.$props
          , {audioTrack: s} = this.n.$store
          , r = s();
        this.yc.Ac.set((r == null ? void 0 : r.label) ?? t())
    }
    Ed() {
        this.yc.Mc(this.pb())
    }
    pb() {
        const {audioTracks: t} = this.n.$store;
        return t().length === 0
    }
    Pc(t) {
        if (this.pb())
            return;
        const r = t.target.value
          , n = this.n.audioTracks.toArray().findIndex(a=>a.label.toLowerCase() === r);
        n >= 0 && this.n.remote.changeAudioTrack(n, t)
    }
    Fd() {
        const {audioTrack: t} = this.n.$store
          , s = t();
        return s ? s.label.toLowerCase() : ""
    }
    Gd() {
        const {audioTracks: t} = this.n.$store;
        return t().map(s=>({
            value: s.label.toLowerCase(),
            content: ()=>(()=>{
                const [r,n] = ze(Rv)
                  , a = n.nextNode();
                return Ot(a, s.label),
                r
            }
            )()
        }))
    }
    render() {
        const {radioGroupClass: t} = this.$props;
        return Jr({
            value: this.Fd.bind(this),
            options: this.Gd.bind(this),
            radioGroupClass: t,
            onChange: this.Pc.bind(this)
        })
    }
}
g(Cc, "el", Pe({
    tagName: "media-audio-menu-items",
    props: {
        emptyLabel: "Default",
        radioClass: null,
        radioGroupClass: null,
        radioCheckClass: null
    }
})),
g(Cc, "register", [ss, ks]);
var Nv = '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>'
  , Vv = '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>'
  , Hv = '<path d="M15.905 17.4809C15.9571 17.533 16.0415 17.533 16.0936 17.4809L22.4111 11.1635C22.6714 10.9031 23.0935 10.9031 23.3539 11.1635L24.9567 12.7662C25.217 13.0266 25.217 13.4487 24.9567 13.709L18.1028 20.5629C18.0937 20.5732 18.0842 20.5833 18.0744 20.5931L16.4716 22.1959C16.2113 22.4562 15.7892 22.4562 15.5288 22.1959L7.04353 13.7106C6.78318 13.4503 6.78318 13.0281 7.04353 12.7678L8.6463 11.165C8.90665 10.9047 9.32876 10.9047 9.58911 11.165L15.905 17.4809Z" fill="currentColor"/>';
const Fv = Re('<!$><span slot="label"><!$></span>')
  , Bv = Re('<!$><div slot="hint"></div>');
function da({label: i, iconPaths: e}) {
    return [Et(xt, {
        slot: "close-icon",
        paths: Vv
    }), Et(xt, {
        slot: "icon",
        paths: e
    }), (()=>{
        const [t,s] = ze(Fv)
          , r = s.nextNode();
        return Ot(r, i),
        t
    }
    )(), na(Bv), Et(xt, {
        slot: "open-icon",
        paths: Hv
    })]
}
class zv extends Zr {
    render() {
        const {label: e} = this.$props;
        return da({
            label: e,
            iconPaths: Nv
        })
    }
}
g(zv, "el", Pe({
    tagName: "media-audio-menu-button",
    props: {
        disabled: !1,
        label: "Audio"
    }
}));
const Ad = Re('<!$><span part="label"><!$></span>')
  , jv = Ad;
class $c extends ar {
    constructor(t) {
        super(t);
        g(this, "n");
        this.n = Ze()
    }
    onConnect(t) {
        U(this.Ed.bind(this)),
        U(this.Hd.bind(this));
        const {radioClass: s, radioCheckClass: r} = this.$props;
        new nr(t).gc("media-radio", s).gc('[part="check"]', r)
    }
    Hd() {
        const {offLabel: t} = this.$props
          , {textTrack: s} = this.n.$store
          , r = s();
        this.yc.Ac.set(r && At(r) && r.mode === "showing" ? r.label : t())
    }
    Ed() {
        this.yc.Mc(this.pb())
    }
    pb() {
        const {textTracks: t} = this.n.$store;
        return t().filter(At).length === 0
    }
    Pc(t) {
        if (this.pb())
            return;
        const r = t.target.value;
        if (r === "off") {
            const a = this.n.textTracks.selected;
            if (a) {
                const o = this.n.textTracks.toArray().indexOf(a);
                this.n.remote.changeTextTrackMode(o, "disabled", t)
            }
            return
        }
        const n = this.n.textTracks.toArray().findIndex(a=>a.label.toLowerCase() === r);
        n >= 0 && this.n.remote.changeTextTrackMode(n, "showing", t)
    }
    Fd() {
        const {textTrack: t, textTracks: s} = this.n.$store
          , r = t();
        return r && At(r) && r.mode === "showing" ? r.label.toLowerCase() : "off"
    }
    Gd() {
        const {offLabel: t} = this.$props
          , {textTracks: s} = this.n.$store;
        return [{
            value: "off",
            content: ()=>(()=>{
                const [r,n] = ze(Ad)
                  , a = n.nextNode();
                return Ot(a, t),
                r
            }
            )()
        }, ...s().filter(At).map(r=>({
            value: r.label.toLowerCase(),
            content: ()=>(()=>{
                const [n,a] = ze(jv)
                  , o = a.nextNode();
                return Ot(o, r.label),
                n
            }
            )()
        }))]
    }
    render() {
        const {radioGroupClass: t} = this.$props;
        return Jr({
            value: this.Fd.bind(this),
            options: this.Gd.bind(this),
            radioGroupClass: t,
            onChange: this.Pc.bind(this)
        })
    }
}
g($c, "el", Pe({
    tagName: "media-captions-menu-items",
    props: {
        offLabel: "Off",
        radioClass: null,
        radioGroupClass: null,
        radioCheckClass: null
    }
})),
g($c, "register", [ss, ks]);
class qv extends Zr {
    render() {
        const {label: e} = this.$props;
        return da({
            label: e,
            iconPaths: Sd
        })
    }
}
g(qv, "el", Pe({
    tagName: "media-captions-menu-button",
    props: {
        disabled: !1,
        label: "Captions"
    }
}));
const Gv = Re('<!$><span part="label"><!$></span>');
class Pc extends ar {
    constructor(t) {
        super(t);
        g(this, "n");
        this.n = Ze()
    }
    onConnect(t) {
        U(this.Hd.bind(this));
        const {radioClass: s, radioCheckClass: r} = this.$props;
        new nr(t).gc("media-radio", s).gc('[part="check"]', r)
    }
    Hd() {
        const {normalLabel: t} = this.$props
          , {playbackRate: s} = this.n.$store
          , r = s();
        this.yc.Ac.set(r === 1 ? t() : r + "×")
    }
    Pc(t) {
        const s = t.target;
        this.n.remote.changePlaybackRate(+s.value, t)
    }
    Fd() {
        const {playbackRate: t} = this.n.$store;
        return t() + ""
    }
    Gd() {
        const {rates: t, normalLabel: s} = this.$props;
        return t().map(r=>({
            value: r + "",
            content: ()=>(()=>{
                const [n,a] = ze(Gv)
                  , o = a.nextNode();
                return Ot(o, ()=>r === 1 ? s() : r + "×"),
                n
            }
            )()
        }))
    }
    render() {
        const {radioGroupClass: t} = this.$props;
        return Jr({
            value: this.Fd.bind(this),
            options: this.Gd.bind(this),
            radioGroupClass: t,
            onChange: this.Pc.bind(this)
        })
    }
}
g(Pc, "el", Pe({
    tagName: "media-playback-rate-menu-items",
    props: {
        normalLabel: "Normal",
        rates: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2],
        radioGroupClass: null,
        radioClass: null,
        radioCheckClass: null
    }
})),
g(Pc, "register", [ss, ks]);
var Wv = '<path d="M25.14 25.1089C25.0171 25.2532 24.8356 25.3333 24.646 25.3333H22.8124C22.1084 25.3333 21.7734 24.1872 22.2745 23.6927C23.9161 22.0729 24.9336 19.822 24.9336 17.3333C24.9336 12.3997 20.9336 8.39973 16 8.39973C11.0664 8.39973 7.06641 12.3997 7.06641 17.3333C7.06641 19.822 8.08389 22.0729 9.72555 23.6927C10.2266 24.1872 9.89155 25.3333 9.18762 25.3333H7.35398C7.16436 25.3333 6.98294 25.2532 6.86001 25.1089C5.07703 23.015 4 20.2991 4 17.3333C4 10.7057 9.3724 5.33333 16 5.33333C22.6276 5.33333 28 10.7057 28 17.3333C28 20.2991 26.923 23.015 25.14 25.1089Z" fill="currentColor"/> <path d="M21.1992 14.3399C21.4595 14.0796 21.4595 13.6575 21.1992 13.3971L20.2564 12.4543C19.996 12.194 19.5739 12.194 19.3136 12.4543L16.4492 15.3187C16.4185 15.3493 16.3749 15.3629 16.332 15.3568C16.2236 15.3414 16.1127 15.3334 16 15.3334C14.7113 15.3334 13.6667 16.378 13.6667 17.6667C13.6667 18.9554 14.7113 20 16 20C17.2887 20 18.3333 18.9554 18.3333 17.6667C18.3333 17.5464 18.3242 17.4283 18.3067 17.313C18.3001 17.2696 18.3136 17.2255 18.3446 17.1945L21.1992 14.3399Z" fill="currentColor"/>';
class Yv extends Zr {
    render() {
        const {label: e} = this.$props;
        return da({
            label: e,
            iconPaths: Wv
        })
    }
}
g(Yv, "el", Pe({
    tagName: "media-playback-rate-menu-button",
    props: {
        disabled: !1,
        label: "Speed"
    }
}));
const Xv = Re("<!$><span><!$></span>")
  , Uv = Re('<!$><span part="label"><!$></span>')
  , Kv = Re('<!$><span part="info"><!$></span>');
class Ac extends ar {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "Jd", Xt(()=>{
            const {qualities: t} = this.n.$store;
            return [...t()].sort((s,r)=>r.height === s.height ? r.bitrate - s.bitrate : r.height - s.height)
        }
        ));
        this.n = Ze()
    }
    onConnect(t) {
        U(this.Ed.bind(this)),
        U(this.Hd.bind(this));
        const {radioClass: s, radioCheckClass: r} = this.$props;
        new nr(t).gc("media-radio", s).gc('[part="check"]', r)
    }
    Hd() {
        const {autoLabel: t} = this.$props
          , {autoQuality: s, quality: r} = this.n.$store
          , n = r() ? r().height + "p" : "";
        this.yc.Ac.set(s() ? t() + ` (${n})` : n)
    }
    Ed() {
        const {qualities: t} = this.n.$store;
        this.yc.Mc(t().length === 0)
    }
    pb() {
        const {canSetQuality: t, qualities: s} = this.n.$store;
        return !t() || s().length === 0
    }
    Pc(t) {
        if (this.pb())
            return;
        const s = t.target
          , r = s.value;
        if (r === "auto") {
            this.n.remote.changeQuality(-1, t);
            return
        }
        const {qualities: n} = this.n.$store
          , a = ne(n).findIndex(o=>this.Id(o) === r);
        a >= 0 && this.n.remote.changeQuality(a, t)
    }
    Fd() {
        const {quality: t, autoQuality: s} = this.n.$store;
        if (s())
            return "auto";
        const r = t();
        return r ? this.Id(r) : "auto"
    }
    Id(t) {
        return t.height + "_" + t.bitrate
    }
    Gd() {
        const {autoLabel: t, hideBitrate: s} = this.$props;
        return [{
            value: "auto",
            content: ()=>(()=>{
                const [r,n] = ze(Xv)
                  , a = n.nextNode();
                return Ot(a, t),
                r
            }
            )()
        }, ...this.Jd().map(r=>{
            const n = `${Yt(r.bitrate / 1e6, 2)} Mbps`;
            return {
                value: this.Id(r),
                content: ()=>[(()=>{
                    const [a,o] = ze(Uv)
                      , l = o.nextNode();
                    return Ot(l, r.height + "p"),
                    a
                }
                )(), (()=>{
                    const a = al(()=>!s() && (()=>{
                        const [o,l] = ze(Kv)
                          , c = l.nextNode();
                        return Ot(c, n),
                        o
                    }
                    )());
                    return a(),
                    a
                }
                )()]
            }
        }
        )]
    }
    render() {
        const {radioGroupClass: t} = this.$props;
        return Jr({
            value: this.Fd.bind(this),
            options: this.Gd.bind(this),
            radioGroupClass: t,
            onChange: this.Pc.bind(this)
        })
    }
}
g(Ac, "el", Pe({
    tagName: "media-quality-menu-items",
    props: {
        autoLabel: "Auto",
        hideBitrate: !1,
        radioGroupClass: null,
        radioClass: null,
        radioCheckClass: null
    }
})),
g(Ac, "register", [ss, ks]);
var Zv = '<path d="M18.6669 10.4001C18.6669 10.7683 18.3684 11.0667 18.0002 11.0667H16.2668C15.8987 11.0667 15.6002 10.7683 15.6002 10.4001V9.86674C15.6002 9.7931 15.5405 9.73341 15.4669 9.73341H5.99998C5.63179 9.73341 5.33331 9.43493 5.33331 9.06674V7.33341C5.33331 6.96522 5.63179 6.66674 5.99998 6.66674H15.4669C15.5405 6.66674 15.6002 6.60704 15.6002 6.53341V6.00007C15.6002 5.63188 15.8987 5.3334 16.2668 5.3334H18.0002C18.3684 5.3334 18.6669 5.63188 18.6669 6.00007V10.4001Z" fill="currentColor"/> <path d="M11.3334 18.8668C11.7016 18.8668 12.0001 18.5683 12.0001 18.2001V13.8001C12.0001 13.4319 11.7016 13.1335 11.3334 13.1335H9.60006C9.23187 13.1335 8.93339 13.4319 8.93339 13.8001V14.3335C8.93339 14.4071 8.8737 14.4668 8.80006 14.4668H6.00006C5.63187 14.4668 5.33339 14.7653 5.33339 15.1335V16.8668C5.33339 17.235 5.63187 17.5335 6.00006 17.5335H8.80006C8.8737 17.5335 8.93339 17.5932 8.93339 17.6668V18.2001C8.93339 18.5683 9.23187 18.8668 9.60006 18.8668H11.3334Z" fill="currentColor"/> <path d="M18.6667 26.0001C18.6667 26.3683 18.3682 26.6668 18 26.6668H16.2667C15.8985 26.6668 15.6 26.3683 15.6 26.0001V25.4668C15.6 25.3931 15.5403 25.3334 15.4667 25.3334H6.00014C5.63195 25.3334 5.33348 25.0349 5.33348 24.6668V22.9334C5.33348 22.5652 5.63195 22.2668 6.00014 22.2668H15.4667C15.5403 22.2668 15.6 22.2071 15.6 22.1334V21.6001C15.6 21.2319 15.8985 20.9334 16.2667 20.9334H18C18.3682 20.9334 18.6667 21.2319 18.6667 21.6001V26.0001Z" fill="currentColor"/> <path d="M22 24.6668C22 25.0349 22.2985 25.3334 22.6667 25.3334H26.0001C26.3683 25.3334 26.6668 25.0349 26.6668 24.6668V22.9334C26.6668 22.5652 26.3683 22.2668 26.0001 22.2668H22.6667C22.2985 22.2668 22 22.5652 22 22.9334V24.6668Z" fill="currentColor"/> <path d="M16.0001 17.5335C15.6319 17.5335 15.3334 17.235 15.3334 16.8668V15.1335C15.3334 14.7653 15.6319 14.4668 16.0001 14.4668H26.0001C26.3683 14.4668 26.6667 14.7653 26.6667 15.1335V16.8668C26.6667 17.235 26.3683 17.5335 26.0001 17.5335H16.0001Z" fill="currentColor"/> <path d="M22.0002 9.06674C22.0002 9.43493 22.2987 9.73341 22.6669 9.73341H26C26.3682 9.73341 26.6666 9.43493 26.6666 9.06674V7.3334C26.6666 6.96521 26.3682 6.66674 26 6.66674H22.6669C22.2987 6.66674 22.0002 6.96522 22.0002 7.33341V9.06674Z" fill="currentColor"/>';
class Jv extends Zr {
    render() {
        const {label: e} = this.$props;
        return da({
            label: e,
            iconPaths: Zv
        })
    }
}
g(Jv, "el", Pe({
    tagName: "media-quality-menu-button",
    props: {
        disabled: !1,
        label: "Quality"
    }
}));
class Qv extends ot {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "Md", null);
        g(this, "Ld", 0);
        g(this, "Nd", -1)
    }
    onAttach() {
        const {event: t, action: s} = this.$props;
        this.setAttributes({
            event: t,
            action: s
        })
    }
    onConnect() {
        this.n = Ze(),
        Kr(()=>{
            this.Md = this.n.player.querySelector("media-outlet"),
            U(this.Pd.bind(this))
        }
        )
    }
    Pd() {
        let t = this.$props.event();
        !this.Md || !t || (/^dbl/.test(t) && (t = t.split(/^dbl/)[1]),
        fe(this.Md, t, this.Qd.bind(this)))
    }
    Qd(t) {
        var r;
        if (!this.Rd(t) || eo(t) && (t.button !== 0 || this.n.activeMenu))
            return;
        if (t.MEDIA_GESTURE = !0,
        t.preventDefault(),
        !((r = ne(this.$props.event)) == null ? void 0 : r.startsWith("dbl")))
            this.Ld === 0 && setTimeout(()=>{
                this.Ld === 1 && this.Od(t)
            }
            , 250);
        else if (this.Ld === 1) {
            queueMicrotask(()=>this.Od(t)),
            clearTimeout(this.Nd),
            this.Ld = 0;
            return
        }
        this.Ld === 0 && (this.Nd = window.setTimeout(()=>{
            this.Ld = 0
        }
        , 275)),
        this.Ld++
    }
    Od(t) {
        this.el.setAttribute("data-triggered", ""),
        requestAnimationFrame(()=>{
            this.Sd() && this.Td(ne(this.$props.action), t),
            requestAnimationFrame(()=>{
                this.el.removeAttribute("data-triggered")
            }
            )
        }
        )
    }
    Rd(t) {
        if (!this.el)
            return !1;
        if (eo(t) || Lu(t) || to(t)) {
            const s = to(t) ? t.touches[0] : void 0
              , r = (s == null ? void 0 : s.clientX) ?? t.clientX
              , n = (s == null ? void 0 : s.clientY) ?? t.clientY
              , a = this.el.getBoundingClientRect()
              , o = n >= a.top && n <= a.bottom && r >= a.left && r <= a.right;
            return t.type.includes("leave") ? !o : o
        }
        return !0
    }
    Sd() {
        var s;
        const t = this.n.player.querySelectorAll("media-gesture[data-triggered]");
        return ((s = Array.from(t).sort((r,n)=>+getComputedStyle(n).zIndex - +getComputedStyle(r).zIndex)[0]) == null ? void 0 : s.component) === this
    }
    Td(t, s) {
        if (!t)
            return;
        const [r,n] = t.replace(/:([a-z])/, "-$1").split(":");
        t.includes(":fullscreen") ? this.n.remote.toggleFullscreen("prefer-media", s) : t.includes("seek:") ? this.n.remote.seek(ne(this.n.$store.currentTime) + (+n || 0), s) : this.n.remote[Ru(r)](s)
    }
}
g(Qv, "el", Pe({
    tagName: "media-gesture",
    props: {
        event: void 0,
        action: void 0
    }
}));
const eb = Re('<!$><svg part="icon" fill="none" viewBox="0 0 120 120" aria-hidden="true"><circle part="track" cx="60" cy="60" r="54" stroke="currentColor"></circle><circle part="track-fill" cx="60" cy="60" r="54" stroke="currentColor" pathLength="100"></circle></svg>');
class tb extends ot {
    constructor() {
        super(...arguments);
        g(this, "n")
    }
    onAttach() {
        this.n = Ze(),
        this.setAttributes({
            "data-buffering": Xt(this.Kd.bind(this))
        })
    }
    Kd() {
        const {canPlay: t, waiting: s} = this.n.$store;
        return !t() || s()
    }
    render() {
        return na(eb)
    }
}
g(tb, "el", Pe({
    tagName: "media-buffering-indicator"
}));
class ib {
    constructor(e) {
        g(this, "priority", 10);
        g(this, "Ba", null);
        g(this, "ih", ol());
        this.Vd = e
    }
    attach() {}
    canRender() {
        return !0
    }
    detach() {
        this.ih.empty(),
        this.Vd.reset(),
        this.Ba = null
    }
    changeTrack(e) {
        !e || this.Ba === e || (this.ih.empty(),
        e.readyState < 2 ? (this.Vd.reset(),
        this.ih.add(fe(e, "load", ()=>this.jh(e), {
            once: !0
        }))) : this.jh(e),
        this.ih.add(fe(e, "add-cue", t=>{
            this.Vd.addCue(t.detail)
        }
        ), fe(e, "remove-cue", t=>{
            this.Vd.removeCue(t.detail)
        }
        )),
        this.Ba = e)
    }
    jh(e) {
        this.Vd.changeTrack({
            cues: [...e.cues],
            regions: [...e.regions]
        })
    }
}
class sb extends ot {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "Vd");
        g(this, "Ud")
    }
    onAttach() {
        this.n = Ze(),
        this.setAttributes({
            "aria-hidden": hi(this.mb.bind(this))
        })
    }
    onConnect(t) {
        this.Vd = new Og(t),
        this.Ud = new ib(this.Vd),
        U(this.Xd.bind(this))
    }
    onDisconnect() {
        var t;
        this.Ud && (this.Ud.detach(),
        this.n.textRenderers.remove(this.Ud)),
        (t = this.Vd) == null || t.destroy()
    }
    mb() {
        const {textTrack: t} = this.n.$store
          , s = t();
        return !s || !At(s)
    }
    Xd() {
        const {viewType: t} = this.n.$store;
        return t() === "audio" ? this.Yd() : this.Zd()
    }
    Yd() {
        return U(this.rc.bind(this)),
        ()=>{
            this.el.textContent = ""
        }
    }
    rc() {
        if (this.mb())
            return;
        const {textTrack: t} = this.n.$store;
        this.Wd(),
        fe(t(), "cue-change", this.Wd.bind(this)),
        U(this._d.bind(this))
    }
    Wd() {
        this.el.textContent = "";
        const {currentTime: t, textTrack: s} = this.n.$store
          , r = ne(t)
          , n = ne(s).activeCues;
        for (const a of n) {
            const o = document.createElement("div");
            o.setAttribute("part", "cue"),
            o.innerHTML = ul(a, r),
            this.el.append(o)
        }
    }
    _d() {
        const {currentTime: t} = this.n.$store;
        yd(this.el, t())
    }
    Zd() {
        return U(this.$d.bind(this)),
        U(this.ae.bind(this)),
        this.n.textRenderers.add(this.Ud),
        ()=>{
            this.el.textContent = "",
            this.Ud.detach(),
            this.n.textRenderers.remove(this.Ud)
        }
    }
    $d() {
        this.Vd.dir = this.$props.textDir()
    }
    ae() {
        if (this.mb())
            return;
        const {currentTime: t} = this.n.$store;
        this.Vd.currentTime = t()
    }
}
g(sb, "el", Pe({
    tagName: "media-captions",
    props: {
        textDir: "ltr"
    }
}));
const rb = Re('<!$><div part="container"><div part="text">LIVE</div></div>');
class nb extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        this.n = Ze(),
        new is(t)
    }
    onAttach(t) {
        const {live: s, liveEdge: r} = this.n.$store;
        Ms(t, this.lb.bind(this)),
        this.setAttributes({
            tabindex: this.be.bind(this),
            role: this.ce.bind(this),
            "data-live": s,
            "data-live-edge": r,
            "data-media-button": !0
        })
    }
    onConnect(t) {
        Zs(t, this.jb.bind(this))
    }
    lb() {
        const {live: t} = this.n.$store;
        return t() ? "Go live" : null
    }
    be() {
        const {live: t} = this.n.$store;
        return t() ? 0 : null
    }
    ce() {
        const {live: t} = this.n.$store;
        return t() ? "button" : null
    }
    jb(t) {
        const {liveEdge: s} = this.n.$store;
        s() || this.n.remote.seekToLiveEdge(t)
    }
    render() {
        return na(rb)
    }
}
g(nb, "el", Pe({
    tagName: "media-live-indicator"
}));
const ab = Re('<!$><img part="img" />');
class Md extends ot {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "de", De(!0));
        g(this, "ee", De(!1));
        g(this, "fe");
        g(this, "ge")
    }
    onAttach(t) {
        this.n = Ze(),
        this.fe = Xt(this.he.bind(this)),
        this.ge = this.ie.bind(this),
        this.setAttributes({
            "data-loading": this.de,
            "aria-hidden": hi(this.mb.bind(this))
        })
    }
    onConnect(t) {
        const {canLoad: s, poster: r} = this.n.$store;
        window.requestAnimationFrame(()=>{
            s() || ll(r())
        }
        ),
        U(this.je.bind(this))
    }
    mb() {
        const {poster: t} = this.n.$store;
        return this.ee() || !t()
    }
    he() {
        const {canLoad: t, poster: s} = this.n.$store;
        return t() && s().length ? s() : null
    }
    ie() {
        return this.fe() ? this.$props.alt() : null
    }
    je() {
        const {canLoad: t, poster: s} = this.n.$store
          , r = t() && !!s();
        this.de.set(r),
        this.ee.set(!1)
    }
    ke() {
        this.de.set(!1)
    }
    Zb() {
        this.de.set(!1),
        this.ee.set(!0)
    }
    render() {
        const {crossorigin: t} = this.n.$store;
        return (()=>{
            const [s,r] = ze(ab);
            return ut(()=>Je(s, "src", this.fe())),
            ut(()=>Je(s, "alt", this.ge())),
            ut(()=>Je(s, "crossorigin", t())),
            Ks(s, "load", this.ke.bind(this)),
            Ks(s, "error", this.Zb.bind(this)),
            s
        }
        )()
    }
}
g(Md, "el", Pe({
    tagName: "media-poster",
    props: {
        alt: void 0
    }
}));
const ob = Re("<!$><span><!$></span>");
class lb extends ot {
    constructor() {
        super(...arguments);
        g(this, "n");
        g(this, "le")
    }
    onAttach() {
        this.n = Ze(),
        this.le = Xt(this.Pb.bind(this))
    }
    Pb() {
        const {type: t, remainder: s, padHours: r, padMinutes: n, showHours: a} = this.$props
          , o = this.me(t())
          , l = this.n.$store.duration();
        if (!Number.isFinite(o + l))
            return "LIVE";
        const c = s() ? Math.max(0, l - o) : o;
        return ua(c, r(), Ps(n()) ? c >= 3600 : n(), a())
    }
    me(t) {
        const {bufferedEnd: s, duration: r, currentTime: n} = this.n.$store;
        switch (t) {
        case "buffered":
            return s();
        case "duration":
            return r();
        default:
            return n()
        }
    }
    render() {
        return (()=>{
            const [t,s] = ze(ob)
              , r = s.nextNode();
            return Ot(r, this.le),
            t
        }
        )()
    }
}
g(lb, "el", Pe({
    tagName: "media-time",
    props: {
        type: "current",
        showHours: !1,
        padHours: null,
        padMinutes: null,
        remainder: !1
    }
}));
function cb(i, e) {
    let t = i.getBoundingClientRect()
      , s = {
        "--computed-width": t.width + "px",
        "--computed-height": t.height + "px",
        "--preview-width": "var(--media-slider-preview-width, var(--computed-width))",
        "--preview-height": "var(--media-slider-preview-height, var(--computed-height))"
    };
    e !== "vertical" ? s = {
        ...s,
        "--preview-width-half": "calc(var(--preview-width) / 2)",
        "--preview-left-clamp": "max(var(--preview-width-half), var(--slider-pointer-percent))",
        "--preview-right-clamp": "calc(100% - var(--preview-width-half))",
        "--preview-left": "min(var(--preview-left-clamp), var(--preview-right-clamp))"
    } : s = {
        ...s,
        "--preview-height-half": "calc(var(--preview-height) / 2)",
        "--preview-top-clamp": "max(var(--preview-height-half), var(--slider-pointer-percent))",
        "--preview-bottom-clamp": "calc(100% - var(--preview-height-half))",
        "--preview-bottom": "min(var(--preview-top-clamp), var(--preview-bottom-clamp))"
    };
    for (const r of Object.keys(s))
        i.style.setProperty(r, s[r])
}
var ub = Object.freeze({
    __proto__: null,
    setupPreviewStyles: cb
});
class db {
    constructor() {
        g(this, "Qe", !1);
        g(this, "Re", Bn());
        g(this, "Pe", new Map)
    }
    get Ve() {
        return this.Pe.size
    }
    get We() {
        return this.Qe
    }
    async Xe() {
        this.Qe || await this.Re.promise
    }
    q(e, t) {
        if (this.Qe) {
            t();
            return
        }
        this.Pe.delete(e),
        this.Pe.set(e, t)
    }
    Ue(e) {
        var t;
        (t = this.Pe.get(e)) == null || t(),
        this.Pe.delete(e)
    }
    M() {
        this.Se(),
        this.Qe = !0,
        this.Pe.size > 0 && this.Se()
    }
    N() {
        this.Qe = !1
    }
    Ye() {
        this.N(),
        this.Pe.clear(),
        this.Te()
    }
    Se() {
        for (const e of this.Pe.keys())
            this.Ue(e);
        this.Te()
    }
    Te() {
        this.Re.resolve(),
        this.Re = Bn()
    }
}
var fb = Object.defineProperty
  , hb = Object.getOwnPropertyDescriptor
  , dt = (i,e,t,s)=>{
    for (var r = s > 1 ? void 0 : s ? hb(e, t) : e, n = i.length - 1, a; n >= 0; n--)
        (a = i[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
    return s && r && fb(e, t, r),
    r
}
;
class st extends ot {
    constructor(t) {
        super(t);
        g(this, "n");
        g(this, "r");
        g(this, "o");
        g(this, "p", new db);
        g(this, "orientation");
        this.u(),
        new Cm(t);
        const s = {
            player: null,
            scope: Wr(),
            qualities: new fm,
            audioTracks: new Om,
            $provider: De(null),
            $props: this.$props,
            $store: this.$store
        };
        s.remote = new Am(void 0),
        s.$iosControls = Xt(this.v.bind(this)),
        s.textTracks = new Im,
        s.textTracks[Ys] = this.$props.crossorigin,
        s.textRenderers = new Lm(s),
        s.ariaKeys = {},
        this.n = s,
        As(ld, s),
        this.orientation = new ad(t),
        new is(t),
        new am(t,s),
        new Mm(t);
        const r = new vm;
        this.r = new Sm(t,r,s),
        this.o = new bm(t,this.r,r,s),
        s.delegate = new pm(this.r.L.bind(this.r),s),
        new hm(t,this.startLoading.bind(this))
    }
    get m() {
        return this.n.$provider()
    }
    onAttach(t) {
        t.setAttribute("tabindex", "0"),
        Ct(t, "role", "region"),
        U(this.w.bind(this)),
        U(this.x.bind(this)),
        U(this.y.bind(this)),
        U(this.z.bind(this)),
        U(this.A.bind(this)),
        U(this.B.bind(this)),
        U(this.C.bind(this)),
        U(this.D.bind(this)),
        U(this.E.bind(this)),
        this.F(),
        this.G(),
        this.n.player = t,
        this.n.remote.setTarget(t),
        this.n.remote.setPlayer(t),
        fe(t, "find-media-player", this.H.bind(this))
    }
    onConnect(t) {
        Kp && $e(t, "data-iphone", "");
        const s = window.matchMedia("(pointer: coarse)");
        this.t(s),
        s.onchange = this.t.bind(this);
        const r = new ResizeObserver(this.s.bind(this));
        return r.observe(t),
        U(this.s.bind(this)),
        this.dispatch("media-player-connect", {
            detail: this.el,
            bubbles: !0,
            composed: !0
        }),
        ()=>{
            r.disconnect(),
            s.onchange = null
        }
    }
    u() {
        var s;
        const t = {
            viewType: "providedViewType",
            streamType: "providedStreamType"
        };
        for (const r of Object.keys(this.$props))
            (s = this.$store[t[r] ?? r]) == null || s.set(this.$props[r]());
        U(this.I.bind(this)),
        this.$store.muted.set(this.$props.muted() || this.$props.volume() === 0)
    }
    w() {
        var u, d, f;
        const {title: t} = this.$props
          , {live: s, viewType: r} = this.$store
          , n = s()
          , a = ra(r())
          , o = a !== "Unknown" ? `${n ? "Live " : ""}${a}` : n ? "Live" : "Media"
          , l = t();
        l && ((u = this.el) == null || u.setAttribute("data-title", l),
        (d = this.el) == null || d.removeAttribute("title"));
        const c = ((f = this.el) == null ? void 0 : f.getAttribute("data-title")) || "";
        this.$store.title.set(c),
        $e(this.el, "aria-label", c ? `${o} - ${c}` : o + " Player")
    }
    x() {
        const t = this.orientation.landscape ? "landscape" : "portrait";
        this.$store.orientation.set(t),
        $e(this.el, "data-orientation", t),
        this.s()
    }
    y() {
        this.$store.canPlay() && this.m ? this.p.M() : this.p.N()
    }
    I() {
        this.$store.providedViewType.set(this.$props.viewType()),
        this.$store.providedStreamType.set(this.$props.streamType())
    }
    F() {
        const t = {
            "aspect-ratio": this.$props.aspectRatio,
            "data-captions": ()=>{
                const r = this.$store.textTrack();
                return !!r && At(r)
            }
            ,
            "data-ios-controls": this.n.$iosControls
        }
          , s = {
            canPictureInPicture: "can-pip",
            pictureInPicture: "pip"
        };
        for (const r of sm) {
            const n = "data-" + (s[r] ?? sl(r));
            t[n] = this.$store[r]
        }
        delete t.title,
        this.setAttributes(t)
    }
    G() {
        this.setCSSVars({
            "--media-aspect-ratio": ()=>{
                const t = this.$props.aspectRatio();
                return t ? +t.toFixed(4) : null
            }
        })
    }
    H(t) {
        t.detail(this.el)
    }
    s() {
        if (!this.el)
            return;
        const t = this.el.clientWidth
          , s = this.el.clientHeight
          , {smallBreakpointX: r, smallBreakpointY: n, largeBreakpointX: a, largeBreakpointY: o} = this.$props
          , l = t < r() ? "sm" : t < a() ? "md" : "lg"
          , c = s < n() ? "sm" : s < o() ? "md" : "lg";
        this.$store.breakpointX.set(l),
        this.$store.breakpointY.set(c),
        $e(this.el, "data-bp-x", l),
        $e(this.el, "data-bp-y", c)
    }
    t(t) {
        const s = t.matches;
        $e(this.el, "data-touch", s),
        this.$store.touchPointer.set(s),
        this.s()
    }
    v() {
        return !Yp() && this.$store.mediaType() === "video" && (this.$store.controls() && !this.$props.playsinline() || this.$store.fullscreen())
    }
    get provider() {
        return this.m
    }
    get user() {
        return this.o.O
    }
    get qualities() {
        return this.n.qualities
    }
    get audioTracks() {
        return this.n.audioTracks
    }
    get textTracks() {
        return this.n.textTracks
    }
    get textRenderers() {
        return this.n.textRenderers
    }
    get paused() {
        var t;
        return ((t = this.m) == null ? void 0 : t.paused) ?? !0
    }
    set paused(t) {
        t ? this.p.q("paused", ()=>this.o.J()) : this.p.q("paused", ()=>this.o.K())
    }
    A() {
        this.paused = this.$props.paused()
    }
    get muted() {
        var t;
        return ((t = this.m) == null ? void 0 : t.muted) ?? !1
    }
    set muted(t) {
        this.p.q("muted", ()=>this.m.muted = t)
    }
    z() {
        this.muted = this.$props.muted()
    }
    get currentTime() {
        var t;
        return ((t = this.m) == null ? void 0 : t.currentTime) ?? 0
    }
    set currentTime(t) {
        this.p.q("currentTime", ()=>{
            const s = this.m;
            t !== s.currentTime && ne(()=>{
                const r = Math.min(Math.max(this.$store.seekableStart() + .1, t), this.$store.seekableEnd() - .1);
                Number.isFinite(r) && (s.currentTime = r)
            }
            )
        }
        )
    }
    C() {
        this.currentTime = this.$props.currentTime()
    }
    get volume() {
        var t;
        return ((t = this.m) == null ? void 0 : t.volume) ?? 1
    }
    set volume(t) {
        this.p.q("volume", ()=>this.m.volume = t)
    }
    B() {
        this.volume = hl(0, this.$props.volume(), 1)
    }
    get playsinline() {
        var t;
        return ((t = this.m) == null ? void 0 : t.playsinline) ?? !1
    }
    set playsinline(t) {
        this.p.q("playsinline", ()=>this.m.playsinline = t)
    }
    D() {
        this.playsinline = this.$props.playsinline()
    }
    get playbackRate() {
        var t;
        return ((t = this.m) == null ? void 0 : t.playbackRate) ?? 1
    }
    set playbackRate(t) {
        this.p.q("rate", ()=>this.m.playbackRate = t)
    }
    E() {
        this.playbackRate = this.$props.playbackRate()
    }
    async play() {
        return this.o.K()
    }
    async pause() {
        return this.o.J()
    }
    async enterFullscreen(t) {
        return this.o.P(t)
    }
    async exitFullscreen(t) {
        return this.o.Q(t)
    }
    enterPictureInPicture() {
        return this.o.R()
    }
    exitPictureInPicture() {
        return this.o.S()
    }
    seekToLiveEdge() {
        this.o.T()
    }
    startLoading() {
        this.n.delegate.U("can-load")
    }
    destroy() {
        this.dispatch("destroy")
    }
}
g(st, "el", Pe({
    tagName: "media-player",
    props: cm,
    store: cd
}));
dt([Tt], st.prototype, "provider", 1);
dt([Tt], st.prototype, "user", 1);
dt([Tt], st.prototype, "orientation", 2);
dt([Tt], st.prototype, "qualities", 1);
dt([Tt], st.prototype, "audioTracks", 1);
dt([Tt], st.prototype, "textTracks", 1);
dt([Tt], st.prototype, "textRenderers", 1);
dt([Tt], st.prototype, "paused", 1);
dt([Tt], st.prototype, "muted", 1);
dt([Tt], st.prototype, "currentTime", 1);
dt([Tt], st.prototype, "volume", 1);
dt([Tt], st.prototype, "playsinline", 1);
dt([Tt], st.prototype, "playbackRate", 1);
dt([Si], st.prototype, "play", 1);
dt([Si], st.prototype, "pause", 1);
dt([Si], st.prototype, "enterFullscreen", 1);
dt([Si], st.prototype, "exitFullscreen", 1);
dt([Si], st.prototype, "enterPictureInPicture", 1);
dt([Si], st.prototype, "exitPictureInPicture", 1);
dt([Si], st.prototype, "seekToLiveEdge", 1);
dt([Si], st.prototype, "startLoading", 1);
ir(st);
ir(fd);
ir(Md);
ir(Td);
ir(Xu);
var po = !1
  , mo = !1
  , ys = []
  , go = -1;
function pb(i) {
    mb(i)
}
function mb(i) {
    ys.includes(i) || ys.push(i),
    gb()
}
function Od(i) {
    let e = ys.indexOf(i);
    e !== -1 && e > go && ys.splice(e, 1)
}
function gb() {
    !mo && !po && (po = !0,
    queueMicrotask(vb))
}
function vb() {
    po = !1,
    mo = !0;
    for (let i = 0; i < ys.length; i++)
        ys[i](),
        go = i;
    ys.length = 0,
    go = -1,
    mo = !1
}
var or, Ls, lr, kd, vo = !0;
function bb(i) {
    vo = !1,
    i(),
    vo = !0
}
function yb(i) {
    or = i.reactive,
    lr = i.release,
    Ls = e=>i.effect(e, {
        scheduler: t=>{
            vo ? pb(t) : t()
        }
    }),
    kd = i.raw
}
function Mc(i) {
    Ls = i
}
function wb(i) {
    let e = ()=>{}
    ;
    return [s=>{
        let r = Ls(s);
        return i._x_effects || (i._x_effects = new Set,
        i._x_runEffects = ()=>{
            i._x_effects.forEach(n=>n())
        }
        ),
        i._x_effects.add(r),
        e = ()=>{
            r !== void 0 && (i._x_effects.delete(r),
            lr(r))
        }
        ,
        r
    }
    , ()=>{
        e()
    }
    ]
}
function Ld(i, e) {
    let t = !0, s, r = Ls(()=>{
        let n = i();
        JSON.stringify(n),
        t ? s = n : queueMicrotask(()=>{
            e(n, s),
            s = n
        }
        ),
        t = !1
    }
    );
    return ()=>lr(r)
}
var Id = []
  , Dd = []
  , Rd = [];
function Eb(i) {
    Rd.push(i)
}
function wl(i, e) {
    typeof e == "function" ? (i._x_cleanups || (i._x_cleanups = []),
    i._x_cleanups.push(e)) : (e = i,
    Dd.push(e))
}
function Nd(i) {
    Id.push(i)
}
function Vd(i, e, t) {
    i._x_attributeCleanups || (i._x_attributeCleanups = {}),
    i._x_attributeCleanups[e] || (i._x_attributeCleanups[e] = []),
    i._x_attributeCleanups[e].push(t)
}
function Hd(i, e) {
    i._x_attributeCleanups && Object.entries(i._x_attributeCleanups).forEach(([t,s])=>{
        (e === void 0 || e.includes(t)) && (s.forEach(r=>r()),
        delete i._x_attributeCleanups[t])
    }
    )
}
function xb(i) {
    if (i._x_cleanups)
        for (; i._x_cleanups.length; )
            i._x_cleanups.pop()()
}
var El = new MutationObserver(Sl)
  , xl = !1;
function _l() {
    El.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
    xl = !0
}
function Fd() {
    _b(),
    El.disconnect(),
    xl = !1
}
var wr = [];
function _b() {
    let i = El.takeRecords();
    wr.push(()=>i.length > 0 && Sl(i));
    let e = wr.length;
    queueMicrotask(()=>{
        if (wr.length === e)
            for (; wr.length > 0; )
                wr.shift()()
    }
    )
}
function bt(i) {
    if (!xl)
        return i();
    Fd();
    let e = i();
    return _l(),
    e
}
var Tl = !1
  , Wn = [];
function Tb() {
    Tl = !0
}
function Sb() {
    Tl = !1,
    Sl(Wn),
    Wn = []
}
function Sl(i) {
    if (Tl) {
        Wn = Wn.concat(i);
        return
    }
    let e = new Set
      , t = new Set
      , s = new Map
      , r = new Map;
    for (let n = 0; n < i.length; n++)
        if (!i[n].target._x_ignoreMutationObserver && (i[n].type === "childList" && (i[n].addedNodes.forEach(a=>a.nodeType === 1 && e.add(a)),
        i[n].removedNodes.forEach(a=>a.nodeType === 1 && t.add(a))),
        i[n].type === "attributes")) {
            let a = i[n].target
              , o = i[n].attributeName
              , l = i[n].oldValue
              , c = ()=>{
                s.has(a) || s.set(a, []),
                s.get(a).push({
                    name: o,
                    value: a.getAttribute(o)
                })
            }
              , u = ()=>{
                r.has(a) || r.set(a, []),
                r.get(a).push(o)
            }
            ;
            a.hasAttribute(o) && l === null ? c() : a.hasAttribute(o) ? (u(),
            c()) : u()
        }
    r.forEach((n,a)=>{
        Hd(a, n)
    }
    ),
    s.forEach((n,a)=>{
        Id.forEach(o=>o(a, n))
    }
    );
    for (let n of t)
        e.has(n) || Dd.forEach(a=>a(n));
    e.forEach(n=>{
        n._x_ignoreSelf = !0,
        n._x_ignore = !0
    }
    );
    for (let n of e)
        t.has(n) || n.isConnected && (delete n._x_ignoreSelf,
        delete n._x_ignore,
        Rd.forEach(a=>a(n)),
        n._x_ignore = !0,
        n._x_ignoreSelf = !0);
    e.forEach(n=>{
        delete n._x_ignoreSelf,
        delete n._x_ignore
    }
    ),
    e = null,
    t = null,
    s = null,
    r = null
}
function Bd(i) {
    return en(Js(i))
}
function Qr(i, e, t) {
    return i._x_dataStack = [e, ...Js(t || i)],
    ()=>{
        i._x_dataStack = i._x_dataStack.filter(s=>s !== e)
    }
}
function Js(i) {
    return i._x_dataStack ? i._x_dataStack : typeof ShadowRoot == "function" && i instanceof ShadowRoot ? Js(i.host) : i.parentNode ? Js(i.parentNode) : []
}
function en(i) {
    return new Proxy({
        objects: i
    },Cb)
}
var Cb = {
    ownKeys({objects: i}) {
        return Array.from(new Set(i.flatMap(e=>Object.keys(e))))
    },
    has({objects: i}, e) {
        return e == Symbol.unscopables ? !1 : i.some(t=>Object.prototype.hasOwnProperty.call(t, e) || Reflect.has(t, e))
    },
    get({objects: i}, e, t) {
        return e == "toJSON" ? $b : Reflect.get(i.find(s=>Reflect.has(s, e)) || {}, e, t)
    },
    set({objects: i}, e, t, s) {
        const r = i.find(a=>Object.prototype.hasOwnProperty.call(a, e)) || i[i.length - 1]
          , n = Object.getOwnPropertyDescriptor(r, e);
        return n != null && n.set && (n != null && n.get) ? Reflect.set(r, e, t, s) : Reflect.set(r, e, t)
    }
};
function $b() {
    return Reflect.ownKeys(this).reduce((e,t)=>(e[t] = Reflect.get(this, t),
    e), {})
}
function zd(i) {
    let e = s=>typeof s == "object" && !Array.isArray(s) && s !== null
      , t = (s,r="")=>{
        Object.entries(Object.getOwnPropertyDescriptors(s)).forEach(([n,{value: a, enumerable: o}])=>{
            if (o === !1 || a === void 0 || typeof a == "object" && a !== null && a.__v_skip)
                return;
            let l = r === "" ? n : `${r}.${n}`;
            typeof a == "object" && a !== null && a._x_interceptor ? s[n] = a.initialize(i, l, n) : e(a) && a !== s && !(a instanceof Element) && t(a, l)
        }
        )
    }
    ;
    return t(i)
}
function jd(i, e=()=>{}
) {
    let t = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(s, r, n) {
            return i(this.initialValue, ()=>Pb(s, r), a=>bo(s, r, a), r, n)
        }
    };
    return e(t),
    s=>{
        if (typeof s == "object" && s !== null && s._x_interceptor) {
            let r = t.initialize.bind(t);
            t.initialize = (n,a,o)=>{
                let l = s.initialize(n, a, o);
                return t.initialValue = l,
                r(n, a, o)
            }
        } else
            t.initialValue = s;
        return t
    }
}
function Pb(i, e) {
    return e.split(".").reduce((t,s)=>t[s], i)
}
function bo(i, e, t) {
    if (typeof e == "string" && (e = e.split(".")),
    e.length === 1)
        i[e[0]] = t;
    else {
        if (e.length === 0)
            throw error;
        return i[e[0]] || (i[e[0]] = {}),
        bo(i[e[0]], e.slice(1), t)
    }
}
var qd = {};
function gi(i, e) {
    qd[i] = e
}
function yo(i, e) {
    return Object.entries(qd).forEach(([t,s])=>{
        let r = null;
        function n() {
            if (r)
                return r;
            {
                let[a,o] = Kd(e);
                return r = {
                    interceptor: jd,
                    ...a
                },
                wl(e, o),
                r
            }
        }
        Object.defineProperty(i, `$${t}`, {
            get() {
                return s(e, n())
            },
            enumerable: !1
        })
    }
    ),
    i
}
function Ab(i, e, t, ...s) {
    try {
        return t(...s)
    } catch (r) {
        Br(r, i, e)
    }
}
function Br(i, e, t=void 0) {
    i = Object.assign(i ?? {
        message: "No error message given."
    }, {
        el: e,
        expression: t
    }),
    console.warn(`Alpine Expression Error: ${i.message}

${t ? 'Expression: "' + t + `"

` : ""}`, e),
    setTimeout(()=>{
        throw i
    }
    , 0)
}
var Ln = !0;
function Gd(i) {
    let e = Ln;
    Ln = !1;
    let t = i();
    return Ln = e,
    t
}
function ws(i, e, t={}) {
    let s;
    return kt(i, e)(r=>s = r, t),
    s
}
function kt(...i) {
    return Wd(...i)
}
var Wd = Yd;
function Mb(i) {
    Wd = i
}
function Yd(i, e) {
    let t = {};
    yo(t, i);
    let s = [t, ...Js(i)]
      , r = typeof e == "function" ? Ob(s, e) : Lb(s, e, i);
    return Ab.bind(null, i, e, r)
}
function Ob(i, e) {
    return (t=()=>{}
    ,{scope: s={}, params: r=[]}={})=>{
        let n = e.apply(en([s, ...i]), r);
        Yn(t, n)
    }
}
var Ra = {};
function kb(i, e) {
    if (Ra[i])
        return Ra[i];
    let t = Object.getPrototypeOf(async function() {}).constructor
      , s = /^[\n\s]*if.*\(.*\)/.test(i.trim()) || /^(let|const)\s/.test(i.trim()) ? `(async()=>{ ${i} })()` : i
      , n = (()=>{
        try {
            let a = new t(["__self", "scope"],`with (scope) { __self.result = ${s} }; __self.finished = true; return __self.result;`);
            return Object.defineProperty(a, "name", {
                value: `[Alpine] ${i}`
            }),
            a
        } catch (a) {
            return Br(a, e, i),
            Promise.resolve()
        }
    }
    )();
    return Ra[i] = n,
    n
}
function Lb(i, e, t) {
    let s = kb(e, t);
    return (r=()=>{}
    ,{scope: n={}, params: a=[]}={})=>{
        s.result = void 0,
        s.finished = !1;
        let o = en([n, ...i]);
        if (typeof s == "function") {
            let l = s(s, o).catch(c=>Br(c, t, e));
            s.finished ? (Yn(r, s.result, o, a, t),
            s.result = void 0) : l.then(c=>{
                Yn(r, c, o, a, t)
            }
            ).catch(c=>Br(c, t, e)).finally(()=>s.result = void 0)
        }
    }
}
function Yn(i, e, t, s, r) {
    if (Ln && typeof e == "function") {
        let n = e.apply(t, s);
        n instanceof Promise ? n.then(a=>Yn(i, a, t, s)).catch(a=>Br(a, r, e)) : i(n)
    } else
        typeof e == "object" && e instanceof Promise ? e.then(n=>i(n)) : i(e)
}
var Cl = "x-";
function cr(i="") {
    return Cl + i
}
function Ib(i) {
    Cl = i
}
var Xn = {};
function ht(i, e) {
    return Xn[i] = e,
    {
        before(t) {
            if (!Xn[t]) {
                console.warn(String.raw`Cannot find directive \`${t}\`. \`${i}\` will use the default order of execution`);
                return
            }
            const s = vs.indexOf(t);
            vs.splice(s >= 0 ? s : vs.indexOf("DEFAULT"), 0, i)
        }
    }
}
function Db(i) {
    return Object.keys(Xn).includes(i)
}
function $l(i, e, t) {
    if (e = Array.from(e),
    i._x_virtualDirectives) {
        let n = Object.entries(i._x_virtualDirectives).map(([o,l])=>({
            name: o,
            value: l
        }))
          , a = Xd(n);
        n = n.map(o=>a.find(l=>l.name === o.name) ? {
            name: `x-bind:${o.name}`,
            value: `"${o.value}"`
        } : o),
        e = e.concat(n)
    }
    let s = {};
    return e.map(Qd((n,a)=>s[n] = a)).filter(tf).map(Vb(s, t)).sort(Hb).map(n=>Nb(i, n))
}
function Xd(i) {
    return Array.from(i).map(Qd()).filter(e=>!tf(e))
}
var wo = !1
  , Cr = new Map
  , Ud = Symbol();
function Rb(i) {
    wo = !0;
    let e = Symbol();
    Ud = e,
    Cr.set(e, []);
    let t = ()=>{
        for (; Cr.get(e).length; )
            Cr.get(e).shift()();
        Cr.delete(e)
    }
      , s = ()=>{
        wo = !1,
        t()
    }
    ;
    i(t),
    s()
}
function Kd(i) {
    let e = []
      , t = o=>e.push(o)
      , [s,r] = wb(i);
    return e.push(r),
    [{
        Alpine: sn,
        effect: s,
        cleanup: t,
        evaluateLater: kt.bind(kt, i),
        evaluate: ws.bind(ws, i)
    }, ()=>e.forEach(o=>o())]
}
function Nb(i, e) {
    let t = ()=>{}
      , s = Xn[e.type] || t
      , [r,n] = Kd(i);
    Vd(i, e.original, n);
    let a = ()=>{
        i._x_ignore || i._x_ignoreSelf || (s.inline && s.inline(i, e, r),
        s = s.bind(s, i, e, r),
        wo ? Cr.get(Ud).push(s) : s())
    }
    ;
    return a.runCleanups = n,
    a
}
var Zd = (i,e)=>({name: t, value: s})=>(t.startsWith(i) && (t = t.replace(i, e)),
{
    name: t,
    value: s
})
  , Jd = i=>i;
function Qd(i=()=>{}
) {
    return ({name: e, value: t})=>{
        let {name: s, value: r} = ef.reduce((n,a)=>a(n), {
            name: e,
            value: t
        });
        return s !== e && i(s, e),
        {
            name: s,
            value: r
        }
    }
}
var ef = [];
function Pl(i) {
    ef.push(i)
}
function tf({name: i}) {
    return sf().test(i)
}
var sf = ()=>new RegExp(`^${Cl}([^:^.]+)\\b`);
function Vb(i, e) {
    return ({name: t, value: s})=>{
        let r = t.match(sf())
          , n = t.match(/:([a-zA-Z0-9\-_:]+)/)
          , a = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
          , o = e || i[t] || t;
        return {
            type: r ? r[1] : null,
            value: n ? n[1] : null,
            modifiers: a.map(l=>l.replace(".", "")),
            expression: s,
            original: o
        }
    }
}
var Eo = "DEFAULT"
  , vs = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", Eo, "teleport"];
function Hb(i, e) {
    let t = vs.indexOf(i.type) === -1 ? Eo : i.type
      , s = vs.indexOf(e.type) === -1 ? Eo : e.type;
    return vs.indexOf(t) - vs.indexOf(s)
}
function Dr(i, e, t={}) {
    i.dispatchEvent(new CustomEvent(e,{
        detail: t,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function Ji(i, e) {
    if (typeof ShadowRoot == "function" && i instanceof ShadowRoot) {
        Array.from(i.children).forEach(r=>Ji(r, e));
        return
    }
    let t = !1;
    if (e(i, ()=>t = !0),
    t)
        return;
    let s = i.firstElementChild;
    for (; s; )
        Ji(s, e),
        s = s.nextElementSibling
}
function ei(i, ...e) {
    console.warn(`Alpine Warning: ${i}`, ...e)
}
var Oc = !1;
function Fb() {
    Oc && ei("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
    Oc = !0,
    document.body || ei("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
    Dr(document, "alpine:init"),
    Dr(document, "alpine:initializing"),
    _l(),
    Eb(e=>Ii(e, Ji)),
    wl(e=>uf(e)),
    Nd((e,t)=>{
        $l(e, t).forEach(s=>s())
    }
    );
    let i = e=>!fa(e.parentElement, !0);
    Array.from(document.querySelectorAll(af().join(","))).filter(i).forEach(e=>{
        Ii(e)
    }
    ),
    Dr(document, "alpine:initialized"),
    setTimeout(()=>{
        jb()
    }
    )
}
var Al = []
  , rf = [];
function nf() {
    return Al.map(i=>i())
}
function af() {
    return Al.concat(rf).map(i=>i())
}
function of(i) {
    Al.push(i)
}
function lf(i) {
    rf.push(i)
}
function fa(i, e=!1) {
    return tn(i, t=>{
        if ((e ? af() : nf()).some(r=>t.matches(r)))
            return !0
    }
    )
}
function tn(i, e) {
    if (i) {
        if (e(i))
            return i;
        if (i._x_teleportBack && (i = i._x_teleportBack),
        !!i.parentElement)
            return tn(i.parentElement, e)
    }
}
function Bb(i) {
    return nf().some(e=>i.matches(e))
}
var cf = [];
function zb(i) {
    cf.push(i)
}
function Ii(i, e=Ji, t=()=>{}
) {
    Rb(()=>{
        e(i, (s,r)=>{
            t(s, r),
            cf.forEach(n=>n(s, r)),
            $l(s, s.attributes).forEach(n=>n()),
            s._x_ignore && r()
        }
        )
    }
    )
}
function uf(i, e=Ji) {
    e(i, t=>{
        Hd(t),
        xb(t)
    }
    )
}
function jb() {
    [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach(([e,t,s])=>{
        Db(t) || s.some(r=>{
            if (document.querySelector(r))
                return ei(`found "${r}", but missing ${e} plugin`),
                !0
        }
        )
    }
    )
}
var xo = []
  , Ml = !1;
function Ol(i=()=>{}
) {
    return queueMicrotask(()=>{
        Ml || setTimeout(()=>{
            _o()
        }
        )
    }
    ),
    new Promise(e=>{
        xo.push(()=>{
            i(),
            e()
        }
        )
    }
    )
}
function _o() {
    for (Ml = !1; xo.length; )
        xo.shift()()
}
function qb() {
    Ml = !0
}
function kl(i, e) {
    return Array.isArray(e) ? kc(i, e.join(" ")) : typeof e == "object" && e !== null ? Gb(i, e) : typeof e == "function" ? kl(i, e()) : kc(i, e)
}
function kc(i, e) {
    let t = r=>r.split(" ").filter(n=>!i.classList.contains(n)).filter(Boolean)
      , s = r=>(i.classList.add(...r),
    ()=>{
        i.classList.remove(...r)
    }
    );
    return e = e === !0 ? e = "" : e || "",
    s(t(e))
}
function Gb(i, e) {
    let t = o=>o.split(" ").filter(Boolean)
      , s = Object.entries(e).flatMap(([o,l])=>l ? t(o) : !1).filter(Boolean)
      , r = Object.entries(e).flatMap(([o,l])=>l ? !1 : t(o)).filter(Boolean)
      , n = []
      , a = [];
    return r.forEach(o=>{
        i.classList.contains(o) && (i.classList.remove(o),
        a.push(o))
    }
    ),
    s.forEach(o=>{
        i.classList.contains(o) || (i.classList.add(o),
        n.push(o))
    }
    ),
    ()=>{
        a.forEach(o=>i.classList.add(o)),
        n.forEach(o=>i.classList.remove(o))
    }
}
function ha(i, e) {
    return typeof e == "object" && e !== null ? Wb(i, e) : Yb(i, e)
}
function Wb(i, e) {
    let t = {};
    return Object.entries(e).forEach(([s,r])=>{
        t[s] = i.style[s],
        s.startsWith("--") || (s = Xb(s)),
        i.style.setProperty(s, r)
    }
    ),
    setTimeout(()=>{
        i.style.length === 0 && i.removeAttribute("style")
    }
    ),
    ()=>{
        ha(i, t)
    }
}
function Yb(i, e) {
    let t = i.getAttribute("style", e);
    return i.setAttribute("style", e),
    ()=>{
        i.setAttribute("style", t || "")
    }
}
function Xb(i) {
    return i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function To(i, e=()=>{}
) {
    let t = !1;
    return function() {
        t ? e.apply(this, arguments) : (t = !0,
        i.apply(this, arguments))
    }
}
ht("transition", (i,{value: e, modifiers: t, expression: s},{evaluate: r})=>{
    typeof s == "function" && (s = r(s)),
    s !== !1 && (!s || typeof s == "boolean" ? Kb(i, t, e) : Ub(i, s, e))
}
);
function Ub(i, e, t) {
    df(i, kl, ""),
    {
        enter: r=>{
            i._x_transition.enter.during = r
        }
        ,
        "enter-start": r=>{
            i._x_transition.enter.start = r
        }
        ,
        "enter-end": r=>{
            i._x_transition.enter.end = r
        }
        ,
        leave: r=>{
            i._x_transition.leave.during = r
        }
        ,
        "leave-start": r=>{
            i._x_transition.leave.start = r
        }
        ,
        "leave-end": r=>{
            i._x_transition.leave.end = r
        }
    }[t](e)
}
function Kb(i, e, t) {
    df(i, ha);
    let s = !e.includes("in") && !e.includes("out") && !t
      , r = s || e.includes("in") || ["enter"].includes(t)
      , n = s || e.includes("out") || ["leave"].includes(t);
    e.includes("in") && !s && (e = e.filter((h,E)=>E < e.indexOf("out"))),
    e.includes("out") && !s && (e = e.filter((h,E)=>E > e.indexOf("out")));
    let a = !e.includes("opacity") && !e.includes("scale")
      , o = a || e.includes("opacity")
      , l = a || e.includes("scale")
      , c = o ? 0 : 1
      , u = l ? Er(e, "scale", 95) / 100 : 1
      , d = Er(e, "delay", 0) / 1e3
      , f = Er(e, "origin", "center")
      , p = "opacity, transform"
      , b = Er(e, "duration", 150) / 1e3
      , w = Er(e, "duration", 75) / 1e3
      , m = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    r && (i._x_transition.enter.during = {
        transformOrigin: f,
        transitionDelay: `${d}s`,
        transitionProperty: p,
        transitionDuration: `${b}s`,
        transitionTimingFunction: m
    },
    i._x_transition.enter.start = {
        opacity: c,
        transform: `scale(${u})`
    },
    i._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }),
    n && (i._x_transition.leave.during = {
        transformOrigin: f,
        transitionDelay: `${d}s`,
        transitionProperty: p,
        transitionDuration: `${w}s`,
        transitionTimingFunction: m
    },
    i._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    },
    i._x_transition.leave.end = {
        opacity: c,
        transform: `scale(${u})`
    })
}
function df(i, e, t={}) {
    i._x_transition || (i._x_transition = {
        enter: {
            during: t,
            start: t,
            end: t
        },
        leave: {
            during: t,
            start: t,
            end: t
        },
        in(s=()=>{}
        , r=()=>{}
        ) {
            So(i, e, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, s, r)
        },
        out(s=()=>{}
        , r=()=>{}
        ) {
            So(i, e, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, s, r)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(i, e, t, s) {
    const r = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let n = ()=>r(t);
    if (e) {
        i._x_transition && (i._x_transition.enter || i._x_transition.leave) ? i._x_transition.enter && (Object.entries(i._x_transition.enter.during).length || Object.entries(i._x_transition.enter.start).length || Object.entries(i._x_transition.enter.end).length) ? i._x_transition.in(t) : n() : i._x_transition ? i._x_transition.in(t) : n();
        return
    }
    i._x_hidePromise = i._x_transition ? new Promise((a,o)=>{
        i._x_transition.out(()=>{}
        , ()=>a(s)),
        i._x_transitioning && i._x_transitioning.beforeCancel(()=>o({
            isFromCancelledTransition: !0
        }))
    }
    ) : Promise.resolve(s),
    queueMicrotask(()=>{
        let a = ff(i);
        a ? (a._x_hideChildren || (a._x_hideChildren = []),
        a._x_hideChildren.push(i)) : r(()=>{
            let o = l=>{
                let c = Promise.all([l._x_hidePromise, ...(l._x_hideChildren || []).map(o)]).then(([u])=>u());
                return delete l._x_hidePromise,
                delete l._x_hideChildren,
                c
            }
            ;
            o(i).catch(l=>{
                if (!l.isFromCancelledTransition)
                    throw l
            }
            )
        }
        )
    }
    )
}
;
function ff(i) {
    let e = i.parentNode;
    if (e)
        return e._x_hidePromise ? e : ff(e)
}
function So(i, e, {during: t, start: s, end: r}={}, n=()=>{}
, a=()=>{}
) {
    if (i._x_transitioning && i._x_transitioning.cancel(),
    Object.keys(t).length === 0 && Object.keys(s).length === 0 && Object.keys(r).length === 0) {
        n(),
        a();
        return
    }
    let o, l, c;
    Zb(i, {
        start() {
            o = e(i, s)
        },
        during() {
            l = e(i, t)
        },
        before: n,
        end() {
            o(),
            c = e(i, r)
        },
        after: a,
        cleanup() {
            l(),
            c()
        }
    })
}
function Zb(i, e) {
    let t, s, r, n = To(()=>{
        bt(()=>{
            t = !0,
            s || e.before(),
            r || (e.end(),
            _o()),
            e.after(),
            i.isConnected && e.cleanup(),
            delete i._x_transitioning
        }
        )
    }
    );
    i._x_transitioning = {
        beforeCancels: [],
        beforeCancel(a) {
            this.beforeCancels.push(a)
        },
        cancel: To(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            n()
        }),
        finish: n
    },
    bt(()=>{
        e.start(),
        e.during()
    }
    ),
    qb(),
    requestAnimationFrame(()=>{
        if (t)
            return;
        let a = Number(getComputedStyle(i).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
          , o = Number(getComputedStyle(i).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        a === 0 && (a = Number(getComputedStyle(i).animationDuration.replace("s", "")) * 1e3),
        bt(()=>{
            e.before()
        }
        ),
        s = !0,
        requestAnimationFrame(()=>{
            t || (bt(()=>{
                e.end()
            }
            ),
            _o(),
            setTimeout(i._x_transitioning.finish, a + o),
            r = !0)
        }
        )
    }
    )
}
function Er(i, e, t) {
    if (i.indexOf(e) === -1)
        return t;
    const s = i[i.indexOf(e) + 1];
    if (!s || e === "scale" && isNaN(s))
        return t;
    if (e === "duration" || e === "delay") {
        let r = s.match(/([0-9]+)ms/);
        if (r)
            return r[1]
    }
    return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(i[i.indexOf(e) + 2]) ? [s, i[i.indexOf(e) + 2]].join(" ") : s
}
var Qi = !1;
function rs(i, e=()=>{}
) {
    return (...t)=>Qi ? e(...t) : i(...t)
}
function Jb(i) {
    return (...e)=>Qi && i(...e)
}
var hf = [];
function pa(i) {
    hf.push(i)
}
function Qb(i, e) {
    hf.forEach(t=>t(i, e)),
    Qi = !0,
    pf(()=>{
        Ii(e, (t,s)=>{
            s(t, ()=>{}
            )
        }
        )
    }
    ),
    Qi = !1
}
var Co = !1;
function e0(i, e) {
    e._x_dataStack || (e._x_dataStack = i._x_dataStack),
    Qi = !0,
    Co = !0,
    pf(()=>{
        t0(e)
    }
    ),
    Qi = !1,
    Co = !1
}
function t0(i) {
    let e = !1;
    Ii(i, (s,r)=>{
        Ji(s, (n,a)=>{
            if (e && Bb(n))
                return a();
            e = !0,
            r(n, a)
        }
        )
    }
    )
}
function pf(i) {
    let e = Ls;
    Mc((t,s)=>{
        let r = e(t);
        return lr(r),
        ()=>{}
    }
    ),
    i(),
    Mc(e)
}
function mf(i, e, t, s=[]) {
    switch (i._x_bindings || (i._x_bindings = or({})),
    i._x_bindings[e] = t,
    e = s.includes("camel") ? c0(e) : e,
    e) {
    case "value":
        i0(i, t);
        break;
    case "style":
        r0(i, t);
        break;
    case "class":
        s0(i, t);
        break;
    case "selected":
    case "checked":
        n0(i, e, t);
        break;
    default:
        gf(i, e, t);
        break
    }
}
function i0(i, e) {
    if (i.type === "radio")
        i.attributes.value === void 0 && (i.value = e),
        window.fromModel && (typeof e == "boolean" ? i.checked = In(i.value) === e : i.checked = Lc(i.value, e));
    else if (i.type === "checkbox")
        Number.isInteger(e) ? i.value = e : !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? i.value = String(e) : Array.isArray(e) ? i.checked = e.some(t=>Lc(t, i.value)) : i.checked = !!e;
    else if (i.tagName === "SELECT")
        l0(i, e);
    else {
        if (i.value === e)
            return;
        i.value = e === void 0 ? "" : e
    }
}
function s0(i, e) {
    i._x_undoAddedClasses && i._x_undoAddedClasses(),
    i._x_undoAddedClasses = kl(i, e)
}
function r0(i, e) {
    i._x_undoAddedStyles && i._x_undoAddedStyles(),
    i._x_undoAddedStyles = ha(i, e)
}
function n0(i, e, t) {
    gf(i, e, t),
    o0(i, e, t)
}
function gf(i, e, t) {
    [null, void 0, !1].includes(t) && u0(e) ? i.removeAttribute(e) : (vf(e) && (t = e),
    a0(i, e, t))
}
function a0(i, e, t) {
    i.getAttribute(e) != t && i.setAttribute(e, t)
}
function o0(i, e, t) {
    i[e] !== t && (i[e] = t)
}
function l0(i, e) {
    const t = [].concat(e).map(s=>s + "");
    Array.from(i.options).forEach(s=>{
        s.selected = t.includes(s.value)
    }
    )
}
function c0(i) {
    return i.toLowerCase().replace(/-(\w)/g, (e,t)=>t.toUpperCase())
}
function Lc(i, e) {
    return i == e
}
function In(i) {
    return [1, "1", "true", "on", "yes", !0].includes(i) ? !0 : [0, "0", "false", "off", "no", !1].includes(i) ? !1 : i ? !!i : null
}
function vf(i) {
    return ["disabled", "checked", "required", "readonly", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(i)
}
function u0(i) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(i)
}
function d0(i, e, t) {
    return i._x_bindings && i._x_bindings[e] !== void 0 ? i._x_bindings[e] : bf(i, e, t)
}
function f0(i, e, t, s=!0) {
    if (i._x_bindings && i._x_bindings[e] !== void 0)
        return i._x_bindings[e];
    if (i._x_inlineBindings && i._x_inlineBindings[e] !== void 0) {
        let r = i._x_inlineBindings[e];
        return r.extract = s,
        Gd(()=>ws(i, r.expression))
    }
    return bf(i, e, t)
}
function bf(i, e, t) {
    let s = i.getAttribute(e);
    return s === null ? typeof t == "function" ? t() : t : s === "" ? !0 : vf(e) ? !![e, "true"].includes(s) : s
}
function yf(i, e) {
    var t;
    return function() {
        var s = this
          , r = arguments
          , n = function() {
            t = null,
            i.apply(s, r)
        };
        clearTimeout(t),
        t = setTimeout(n, e)
    }
}
function wf(i, e) {
    let t;
    return function() {
        let s = this
          , r = arguments;
        t || (i.apply(s, r),
        t = !0,
        setTimeout(()=>t = !1, e))
    }
}
function Ef({get: i, set: e}, {get: t, set: s}) {
    let r = !0, n, a = Ls(()=>{
        let o = i()
          , l = t();
        if (r)
            s(Na(o)),
            r = !1;
        else {
            let c = JSON.stringify(o)
              , u = JSON.stringify(l);
            c !== n ? s(Na(o)) : c !== u && e(Na(l))
        }
        n = JSON.stringify(i()),
        JSON.stringify(t())
    }
    );
    return ()=>{
        lr(a)
    }
}
function Na(i) {
    return typeof i == "object" ? JSON.parse(JSON.stringify(i)) : i
}
function h0(i) {
    (Array.isArray(i) ? i : [i]).forEach(t=>t(sn))
}
var ms = {}
  , Ic = !1;
function p0(i, e) {
    if (Ic || (ms = or(ms),
    Ic = !0),
    e === void 0)
        return ms[i];
    ms[i] = e,
    typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && ms[i].init(),
    zd(ms[i])
}
function m0() {
    return ms
}
var xf = {};
function g0(i, e) {
    let t = typeof e != "function" ? ()=>e : e;
    return i instanceof Element ? _f(i, t()) : (xf[i] = t,
    ()=>{}
    )
}
function v0(i) {
    return Object.entries(xf).forEach(([e,t])=>{
        Object.defineProperty(i, e, {
            get() {
                return (...s)=>t(...s)
            }
        })
    }
    ),
    i
}
function _f(i, e, t) {
    let s = [];
    for (; s.length; )
        s.pop()();
    let r = Object.entries(e).map(([a,o])=>({
        name: a,
        value: o
    }))
      , n = Xd(r);
    return r = r.map(a=>n.find(o=>o.name === a.name) ? {
        name: `x-bind:${a.name}`,
        value: `"${a.value}"`
    } : a),
    $l(i, r, t).map(a=>{
        s.push(a.runCleanups),
        a()
    }
    ),
    ()=>{
        for (; s.length; )
            s.pop()()
    }
}
var Tf = {};
function b0(i, e) {
    Tf[i] = e
}
function y0(i, e) {
    return Object.entries(Tf).forEach(([t,s])=>{
        Object.defineProperty(i, t, {
            get() {
                return (...r)=>s.bind(e)(...r)
            },
            enumerable: !1
        })
    }
    ),
    i
}
var w0 = {
    get reactive() {
        return or
    },
    get release() {
        return lr
    },
    get effect() {
        return Ls
    },
    get raw() {
        return kd
    },
    version: "3.13.10",
    flushAndStopDeferringMutations: Sb,
    dontAutoEvaluateFunctions: Gd,
    disableEffectScheduling: bb,
    startObservingMutations: _l,
    stopObservingMutations: Fd,
    setReactivityEngine: yb,
    onAttributeRemoved: Vd,
    onAttributesAdded: Nd,
    closestDataStack: Js,
    skipDuringClone: rs,
    onlyDuringClone: Jb,
    addRootSelector: of,
    addInitSelector: lf,
    interceptClone: pa,
    addScopeToNode: Qr,
    deferMutations: Tb,
    mapAttributes: Pl,
    evaluateLater: kt,
    interceptInit: zb,
    setEvaluator: Mb,
    mergeProxies: en,
    extractProp: f0,
    findClosest: tn,
    onElRemoved: wl,
    closestRoot: fa,
    destroyTree: uf,
    interceptor: jd,
    transition: So,
    setStyles: ha,
    mutateDom: bt,
    directive: ht,
    entangle: Ef,
    throttle: wf,
    debounce: yf,
    evaluate: ws,
    initTree: Ii,
    nextTick: Ol,
    prefixed: cr,
    prefix: Ib,
    plugin: h0,
    magic: gi,
    store: p0,
    start: Fb,
    clone: e0,
    cloneNode: Qb,
    bound: d0,
    $data: Bd,
    watch: Ld,
    walk: Ji,
    data: b0,
    bind: g0
}
  , sn = w0;
function E0(i, e) {
    const t = Object.create(null)
      , s = i.split(",");
    for (let r = 0; r < s.length; r++)
        t[s[r]] = !0;
    return e ? r=>!!t[r.toLowerCase()] : r=>!!t[r]
}
var x0 = Object.freeze({}), _0 = Object.prototype.hasOwnProperty, ma = (i,e)=>_0.call(i, e), Es = Array.isArray, Rr = i=>Sf(i) === "[object Map]", T0 = i=>typeof i == "string", Ll = i=>typeof i == "symbol", ga = i=>i !== null && typeof i == "object", S0 = Object.prototype.toString, Sf = i=>S0.call(i), Cf = i=>Sf(i).slice(8, -1), Il = i=>T0(i) && i !== "NaN" && i[0] !== "-" && "" + parseInt(i, 10) === i, C0 = i=>{
    const e = Object.create(null);
    return t=>e[t] || (e[t] = i(t))
}
, $0 = C0(i=>i.charAt(0).toUpperCase() + i.slice(1)), $f = (i,e)=>i !== e && (i === i || e === e), $o = new WeakMap, xr = [], xi, xs = Symbol("iterate"), Po = Symbol("Map key iterate");
function P0(i) {
    return i && i._isEffect === !0
}
function A0(i, e=x0) {
    P0(i) && (i = i.raw);
    const t = k0(i, e);
    return e.lazy || t(),
    t
}
function M0(i) {
    i.active && (Pf(i),
    i.options.onStop && i.options.onStop(),
    i.active = !1)
}
var O0 = 0;
function k0(i, e) {
    const t = function() {
        if (!t.active)
            return i();
        if (!xr.includes(t)) {
            Pf(t);
            try {
                return I0(),
                xr.push(t),
                xi = t,
                i()
            } finally {
                xr.pop(),
                Af(),
                xi = xr[xr.length - 1]
            }
        }
    };
    return t.id = O0++,
    t.allowRecurse = !!e.allowRecurse,
    t._isEffect = !0,
    t.active = !0,
    t.raw = i,
    t.deps = [],
    t.options = e,
    t
}
function Pf(i) {
    const {deps: e} = i;
    if (e.length) {
        for (let t = 0; t < e.length; t++)
            e[t].delete(i);
        e.length = 0
    }
}
var Qs = !0
  , Dl = [];
function L0() {
    Dl.push(Qs),
    Qs = !1
}
function I0() {
    Dl.push(Qs),
    Qs = !0
}
function Af() {
    const i = Dl.pop();
    Qs = i === void 0 ? !0 : i
}
function pi(i, e, t) {
    if (!Qs || xi === void 0)
        return;
    let s = $o.get(i);
    s || $o.set(i, s = new Map);
    let r = s.get(t);
    r || s.set(t, r = new Set),
    r.has(xi) || (r.add(xi),
    xi.deps.push(r),
    xi.options.onTrack && xi.options.onTrack({
        effect: xi,
        target: i,
        type: e,
        key: t
    }))
}
function es(i, e, t, s, r, n) {
    const a = $o.get(i);
    if (!a)
        return;
    const o = new Set
      , l = u=>{
        u && u.forEach(d=>{
            (d !== xi || d.allowRecurse) && o.add(d)
        }
        )
    }
    ;
    if (e === "clear")
        a.forEach(l);
    else if (t === "length" && Es(i))
        a.forEach((u,d)=>{
            (d === "length" || d >= s) && l(u)
        }
        );
    else
        switch (t !== void 0 && l(a.get(t)),
        e) {
        case "add":
            Es(i) ? Il(t) && l(a.get("length")) : (l(a.get(xs)),
            Rr(i) && l(a.get(Po)));
            break;
        case "delete":
            Es(i) || (l(a.get(xs)),
            Rr(i) && l(a.get(Po)));
            break;
        case "set":
            Rr(i) && l(a.get(xs));
            break
        }
    const c = u=>{
        u.options.onTrigger && u.options.onTrigger({
            effect: u,
            target: i,
            key: t,
            type: e,
            newValue: s,
            oldValue: r,
            oldTarget: n
        }),
        u.options.scheduler ? u.options.scheduler(u) : u()
    }
    ;
    o.forEach(c)
}
var D0 = E0("__proto__,__v_isRef,__isVue")
  , Mf = new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(Ll))
  , R0 = Of()
  , N0 = Of(!0)
  , Dc = V0();
function V0() {
    const i = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e=>{
        i[e] = function(...t) {
            const s = Ke(this);
            for (let n = 0, a = this.length; n < a; n++)
                pi(s, "get", n + "");
            const r = s[e](...t);
            return r === -1 || r === !1 ? s[e](...t.map(Ke)) : r
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(e=>{
        i[e] = function(...t) {
            L0();
            const s = Ke(this)[e].apply(this, t);
            return Af(),
            s
        }
    }
    ),
    i
}
function Of(i=!1, e=!1) {
    return function(s, r, n) {
        if (r === "__v_isReactive")
            return !i;
        if (r === "__v_isReadonly")
            return i;
        if (r === "__v_raw" && n === (i ? e ? e1 : Df : e ? Q0 : If).get(s))
            return s;
        const a = Es(s);
        if (!i && a && ma(Dc, r))
            return Reflect.get(Dc, r, n);
        const o = Reflect.get(s, r, n);
        return (Ll(r) ? Mf.has(r) : D0(r)) || (i || pi(s, "get", r),
        e) ? o : Ao(o) ? !a || !Il(r) ? o.value : o : ga(o) ? i ? Rf(o) : Hl(o) : o
    }
}
var H0 = F0();
function F0(i=!1) {
    return function(t, s, r, n) {
        let a = t[s];
        if (!i && (r = Ke(r),
        a = Ke(a),
        !Es(t) && Ao(a) && !Ao(r)))
            return a.value = r,
            !0;
        const o = Es(t) && Il(s) ? Number(s) < t.length : ma(t, s)
          , l = Reflect.set(t, s, r, n);
        return t === Ke(n) && (o ? $f(r, a) && es(t, "set", s, r, a) : es(t, "add", s, r)),
        l
    }
}
function B0(i, e) {
    const t = ma(i, e)
      , s = i[e]
      , r = Reflect.deleteProperty(i, e);
    return r && t && es(i, "delete", e, void 0, s),
    r
}
function z0(i, e) {
    const t = Reflect.has(i, e);
    return (!Ll(e) || !Mf.has(e)) && pi(i, "has", e),
    t
}
function j0(i) {
    return pi(i, "iterate", Es(i) ? "length" : xs),
    Reflect.ownKeys(i)
}
var q0 = {
    get: R0,
    set: H0,
    deleteProperty: B0,
    has: z0,
    ownKeys: j0
}
  , G0 = {
    get: N0,
    set(i, e) {
        return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, i),
        !0
    },
    deleteProperty(i, e) {
        return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, i),
        !0
    }
}
  , Rl = i=>ga(i) ? Hl(i) : i
  , Nl = i=>ga(i) ? Rf(i) : i
  , Vl = i=>i
  , va = i=>Reflect.getPrototypeOf(i);
function _n(i, e, t=!1, s=!1) {
    i = i.__v_raw;
    const r = Ke(i)
      , n = Ke(e);
    e !== n && !t && pi(r, "get", e),
    !t && pi(r, "get", n);
    const {has: a} = va(r)
      , o = s ? Vl : t ? Nl : Rl;
    if (a.call(r, e))
        return o(i.get(e));
    if (a.call(r, n))
        return o(i.get(n));
    i !== r && i.get(e)
}
function Tn(i, e=!1) {
    const t = this.__v_raw
      , s = Ke(t)
      , r = Ke(i);
    return i !== r && !e && pi(s, "has", i),
    !e && pi(s, "has", r),
    i === r ? t.has(i) : t.has(i) || t.has(r)
}
function Sn(i, e=!1) {
    return i = i.__v_raw,
    !e && pi(Ke(i), "iterate", xs),
    Reflect.get(i, "size", i)
}
function Rc(i) {
    i = Ke(i);
    const e = Ke(this);
    return va(e).has.call(e, i) || (e.add(i),
    es(e, "add", i, i)),
    this
}
function Nc(i, e) {
    e = Ke(e);
    const t = Ke(this)
      , {has: s, get: r} = va(t);
    let n = s.call(t, i);
    n ? Lf(t, s, i) : (i = Ke(i),
    n = s.call(t, i));
    const a = r.call(t, i);
    return t.set(i, e),
    n ? $f(e, a) && es(t, "set", i, e, a) : es(t, "add", i, e),
    this
}
function Vc(i) {
    const e = Ke(this)
      , {has: t, get: s} = va(e);
    let r = t.call(e, i);
    r ? Lf(e, t, i) : (i = Ke(i),
    r = t.call(e, i));
    const n = s ? s.call(e, i) : void 0
      , a = e.delete(i);
    return r && es(e, "delete", i, void 0, n),
    a
}
function Hc() {
    const i = Ke(this)
      , e = i.size !== 0
      , t = Rr(i) ? new Map(i) : new Set(i)
      , s = i.clear();
    return e && es(i, "clear", void 0, void 0, t),
    s
}
function Cn(i, e) {
    return function(s, r) {
        const n = this
          , a = n.__v_raw
          , o = Ke(a)
          , l = e ? Vl : i ? Nl : Rl;
        return !i && pi(o, "iterate", xs),
        a.forEach((c,u)=>s.call(r, l(c), l(u), n))
    }
}
function $n(i, e, t) {
    return function(...s) {
        const r = this.__v_raw
          , n = Ke(r)
          , a = Rr(n)
          , o = i === "entries" || i === Symbol.iterator && a
          , l = i === "keys" && a
          , c = r[i](...s)
          , u = t ? Vl : e ? Nl : Rl;
        return !e && pi(n, "iterate", l ? Po : xs),
        {
            next() {
                const {value: d, done: f} = c.next();
                return f ? {
                    value: d,
                    done: f
                } : {
                    value: o ? [u(d[0]), u(d[1])] : u(d),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Wi(i) {
    return function(...e) {
        {
            const t = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(`${$0(i)} operation ${t}failed: target is readonly.`, Ke(this))
        }
        return i === "delete" ? !1 : this
    }
}
function W0() {
    const i = {
        get(n) {
            return _n(this, n)
        },
        get size() {
            return Sn(this)
        },
        has: Tn,
        add: Rc,
        set: Nc,
        delete: Vc,
        clear: Hc,
        forEach: Cn(!1, !1)
    }
      , e = {
        get(n) {
            return _n(this, n, !1, !0)
        },
        get size() {
            return Sn(this)
        },
        has: Tn,
        add: Rc,
        set: Nc,
        delete: Vc,
        clear: Hc,
        forEach: Cn(!1, !0)
    }
      , t = {
        get(n) {
            return _n(this, n, !0)
        },
        get size() {
            return Sn(this, !0)
        },
        has(n) {
            return Tn.call(this, n, !0)
        },
        add: Wi("add"),
        set: Wi("set"),
        delete: Wi("delete"),
        clear: Wi("clear"),
        forEach: Cn(!0, !1)
    }
      , s = {
        get(n) {
            return _n(this, n, !0, !0)
        },
        get size() {
            return Sn(this, !0)
        },
        has(n) {
            return Tn.call(this, n, !0)
        },
        add: Wi("add"),
        set: Wi("set"),
        delete: Wi("delete"),
        clear: Wi("clear"),
        forEach: Cn(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(n=>{
        i[n] = $n(n, !1, !1),
        t[n] = $n(n, !0, !1),
        e[n] = $n(n, !1, !0),
        s[n] = $n(n, !0, !0)
    }
    ),
    [i, t, e, s]
}
var [Y0,X0,U0,K0] = W0();
function kf(i, e) {
    const t = e ? i ? K0 : U0 : i ? X0 : Y0;
    return (s,r,n)=>r === "__v_isReactive" ? !i : r === "__v_isReadonly" ? i : r === "__v_raw" ? s : Reflect.get(ma(t, r) && r in s ? t : s, r, n)
}
var Z0 = {
    get: kf(!1, !1)
}
  , J0 = {
    get: kf(!0, !1)
};
function Lf(i, e, t) {
    const s = Ke(t);
    if (s !== t && e.call(i, s)) {
        const r = Cf(i);
        console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var If = new WeakMap
  , Q0 = new WeakMap
  , Df = new WeakMap
  , e1 = new WeakMap;
function t1(i) {
    switch (i) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function i1(i) {
    return i.__v_skip || !Object.isExtensible(i) ? 0 : t1(Cf(i))
}
function Hl(i) {
    return i && i.__v_isReadonly ? i : Nf(i, !1, q0, Z0, If)
}
function Rf(i) {
    return Nf(i, !0, G0, J0, Df)
}
function Nf(i, e, t, s, r) {
    if (!ga(i))
        return console.warn(`value cannot be made reactive: ${String(i)}`),
        i;
    if (i.__v_raw && !(e && i.__v_isReactive))
        return i;
    const n = r.get(i);
    if (n)
        return n;
    const a = i1(i);
    if (a === 0)
        return i;
    const o = new Proxy(i,a === 2 ? s : t);
    return r.set(i, o),
    o
}
function Ke(i) {
    return i && Ke(i.__v_raw) || i
}
function Ao(i) {
    return !!(i && i.__v_isRef === !0)
}
gi("nextTick", ()=>Ol);
gi("dispatch", i=>Dr.bind(Dr, i));
gi("watch", (i,{evaluateLater: e, cleanup: t})=>(s,r)=>{
    let n = e(s)
      , o = Ld(()=>{
        let l;
        return n(c=>l = c),
        l
    }
    , r);
    t(o)
}
);
gi("store", m0);
gi("data", i=>Bd(i));
gi("root", i=>fa(i));
gi("refs", i=>(i._x_refs_proxy || (i._x_refs_proxy = en(s1(i))),
i._x_refs_proxy));
function s1(i) {
    let e = [];
    return tn(i, t=>{
        t._x_refs && e.push(t._x_refs)
    }
    ),
    e
}
var Va = {};
function Vf(i) {
    return Va[i] || (Va[i] = 0),
    ++Va[i]
}
function r1(i, e) {
    return tn(i, t=>{
        if (t._x_ids && t._x_ids[e])
            return !0
    }
    )
}
function n1(i, e) {
    i._x_ids || (i._x_ids = {}),
    i._x_ids[e] || (i._x_ids[e] = Vf(e))
}
gi("id", (i,{cleanup: e})=>(t,s=null)=>{
    let r = `${t}${s ? `-${s}` : ""}`;
    return a1(i, r, e, ()=>{
        let n = r1(i, t)
          , a = n ? n._x_ids[t] : Vf(t);
        return s ? `${t}-${a}-${s}` : `${t}-${a}`
    }
    )
}
);
pa((i,e)=>{
    i._x_id && (e._x_id = i._x_id)
}
);
function a1(i, e, t, s) {
    if (i._x_id || (i._x_id = {}),
    i._x_id[e])
        return i._x_id[e];
    let r = s();
    return i._x_id[e] = r,
    t(()=>{
        delete i._x_id[e]
    }
    ),
    r
}
gi("el", i=>i);
Hf("Focus", "focus", "focus");
Hf("Persist", "persist", "persist");
function Hf(i, e, t) {
    gi(e, s=>ei(`You can't use [$${e}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`, s))
}
ht("modelable", (i,{expression: e},{effect: t, evaluateLater: s, cleanup: r})=>{
    let n = s(e)
      , a = ()=>{
        let u;
        return n(d=>u = d),
        u
    }
      , o = s(`${e} = __placeholder`)
      , l = u=>o(()=>{}
    , {
        scope: {
            __placeholder: u
        }
    })
      , c = a();
    l(c),
    queueMicrotask(()=>{
        if (!i._x_model)
            return;
        i._x_removeModelListeners.default();
        let u = i._x_model.get
          , d = i._x_model.set
          , f = Ef({
            get() {
                return u()
            },
            set(p) {
                d(p)
            }
        }, {
            get() {
                return a()
            },
            set(p) {
                l(p)
            }
        });
        r(f)
    }
    )
}
);
ht("teleport", (i,{modifiers: e, expression: t},{cleanup: s})=>{
    i.tagName.toLowerCase() !== "template" && ei("x-teleport can only be used on a <template> tag", i);
    let r = Fc(t)
      , n = i.content.cloneNode(!0).firstElementChild;
    i._x_teleport = n,
    n._x_teleportBack = i,
    i.setAttribute("data-teleport-template", !0),
    n.setAttribute("data-teleport-target", !0),
    i._x_forwardEvents && i._x_forwardEvents.forEach(o=>{
        n.addEventListener(o, l=>{
            l.stopPropagation(),
            i.dispatchEvent(new l.constructor(l.type,l))
        }
        )
    }
    ),
    Qr(n, {}, i);
    let a = (o,l,c)=>{
        c.includes("prepend") ? l.parentNode.insertBefore(o, l) : c.includes("append") ? l.parentNode.insertBefore(o, l.nextSibling) : l.appendChild(o)
    }
    ;
    bt(()=>{
        a(n, r, e),
        rs(()=>{
            Ii(n),
            n._x_ignore = !0
        }
        )()
    }
    ),
    i._x_teleportPutBack = ()=>{
        let o = Fc(t);
        bt(()=>{
            a(i._x_teleport, o, e)
        }
        )
    }
    ,
    s(()=>n.remove())
}
);
var o1 = document.createElement("div");
function Fc(i) {
    let e = rs(()=>document.querySelector(i), ()=>o1)();
    return e || ei(`Cannot find x-teleport element for selector: "${i}"`),
    e
}
var Ff = ()=>{}
;
Ff.inline = (i,{modifiers: e},{cleanup: t})=>{
    e.includes("self") ? i._x_ignoreSelf = !0 : i._x_ignore = !0,
    t(()=>{
        e.includes("self") ? delete i._x_ignoreSelf : delete i._x_ignore
    }
    )
}
;
ht("ignore", Ff);
ht("effect", rs((i,{expression: e},{effect: t})=>{
    t(kt(i, e))
}
));
function Mo(i, e, t, s) {
    let r = i
      , n = l=>s(l)
      , a = {}
      , o = (l,c)=>u=>c(l, u);
    if (t.includes("dot") && (e = l1(e)),
    t.includes("camel") && (e = c1(e)),
    t.includes("passive") && (a.passive = !0),
    t.includes("capture") && (a.capture = !0),
    t.includes("window") && (r = window),
    t.includes("document") && (r = document),
    t.includes("debounce")) {
        let l = t[t.indexOf("debounce") + 1] || "invalid-wait"
          , c = Un(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        n = yf(n, c)
    }
    if (t.includes("throttle")) {
        let l = t[t.indexOf("throttle") + 1] || "invalid-wait"
          , c = Un(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        n = wf(n, c)
    }
    return t.includes("prevent") && (n = o(n, (l,c)=>{
        c.preventDefault(),
        l(c)
    }
    )),
    t.includes("stop") && (n = o(n, (l,c)=>{
        c.stopPropagation(),
        l(c)
    }
    )),
    t.includes("once") && (n = o(n, (l,c)=>{
        l(c),
        r.removeEventListener(e, n, a)
    }
    )),
    (t.includes("away") || t.includes("outside")) && (r = document,
    n = o(n, (l,c)=>{
        i.contains(c.target) || c.target.isConnected !== !1 && (i.offsetWidth < 1 && i.offsetHeight < 1 || i._x_isShown !== !1 && l(c))
    }
    )),
    t.includes("self") && (n = o(n, (l,c)=>{
        c.target === i && l(c)
    }
    )),
    n = o(n, (l,c)=>{
        d1(e) && f1(c, t) || l(c)
    }
    ),
    r.addEventListener(e, n, a),
    ()=>{
        r.removeEventListener(e, n, a)
    }
}
function l1(i) {
    return i.replace(/-/g, ".")
}
function c1(i) {
    return i.toLowerCase().replace(/-(\w)/g, (e,t)=>t.toUpperCase())
}
function Un(i) {
    return !Array.isArray(i) && !isNaN(i)
}
function u1(i) {
    return [" ", "_"].includes(i) ? i : i.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function d1(i) {
    return ["keydown", "keyup"].includes(i)
}
function f1(i, e) {
    let t = e.filter(n=>!["window", "document", "prevent", "stop", "once", "capture"].includes(n));
    if (t.includes("debounce")) {
        let n = t.indexOf("debounce");
        t.splice(n, Un((t[n + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (t.includes("throttle")) {
        let n = t.indexOf("throttle");
        t.splice(n, Un((t[n + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (t.length === 0 || t.length === 1 && Bc(i.key).includes(t[0]))
        return !1;
    const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(n=>t.includes(n));
    return t = t.filter(n=>!r.includes(n)),
    !(r.length > 0 && r.filter(a=>((a === "cmd" || a === "super") && (a = "meta"),
    i[`${a}Key`])).length === r.length && Bc(i.key).includes(t[0]))
}
function Bc(i) {
    if (!i)
        return [];
    i = u1(i);
    let e = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        comma: ",",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return e[i] = i,
    Object.keys(e).map(t=>{
        if (e[t] === i)
            return t
    }
    ).filter(t=>t)
}
ht("model", (i,{modifiers: e, expression: t},{effect: s, cleanup: r})=>{
    let n = i;
    e.includes("parent") && (n = i.parentNode);
    let a = kt(n, t), o;
    typeof t == "string" ? o = kt(n, `${t} = __placeholder`) : typeof t == "function" && typeof t() == "string" ? o = kt(n, `${t()} = __placeholder`) : o = ()=>{}
    ;
    let l = ()=>{
        let f;
        return a(p=>f = p),
        zc(f) ? f.get() : f
    }
      , c = f=>{
        let p;
        a(b=>p = b),
        zc(p) ? p.set(f) : o(()=>{}
        , {
            scope: {
                __placeholder: f
            }
        })
    }
    ;
    typeof t == "string" && i.type === "radio" && bt(()=>{
        i.hasAttribute("name") || i.setAttribute("name", t)
    }
    );
    var u = i.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(i.type) || e.includes("lazy") ? "change" : "input";
    let d = Qi ? ()=>{}
    : Mo(i, u, e, f=>{
        c(Ha(i, e, f, l()))
    }
    );
    if (e.includes("fill") && ([void 0, null, ""].includes(l()) || i.type === "checkbox" && Array.isArray(l()) || i.tagName.toLowerCase() === "select" && i.multiple) && c(Ha(i, e, {
        target: i
    }, l())),
    i._x_removeModelListeners || (i._x_removeModelListeners = {}),
    i._x_removeModelListeners.default = d,
    r(()=>i._x_removeModelListeners.default()),
    i.form) {
        let f = Mo(i.form, "reset", [], p=>{
            Ol(()=>i._x_model && i._x_model.set(Ha(i, e, {
                target: i
            }, l())))
        }
        );
        r(()=>f())
    }
    i._x_model = {
        get() {
            return l()
        },
        set(f) {
            c(f)
        }
    },
    i._x_forceModelUpdate = f=>{
        f === void 0 && typeof t == "string" && t.match(/\./) && (f = ""),
        window.fromModel = !0,
        bt(()=>mf(i, "value", f)),
        delete window.fromModel
    }
    ,
    s(()=>{
        let f = l();
        e.includes("unintrusive") && document.activeElement.isSameNode(i) || i._x_forceModelUpdate(f)
    }
    )
}
);
function Ha(i, e, t, s) {
    return bt(()=>{
        if (t instanceof CustomEvent && t.detail !== void 0)
            return t.detail !== null && t.detail !== void 0 ? t.detail : t.target.value;
        if (i.type === "checkbox")
            if (Array.isArray(s)) {
                let r = null;
                return e.includes("number") ? r = Fa(t.target.value) : e.includes("boolean") ? r = In(t.target.value) : r = t.target.value,
                t.target.checked ? s.includes(r) ? s : s.concat([r]) : s.filter(n=>!h1(n, r))
            } else
                return t.target.checked;
        else {
            if (i.tagName.toLowerCase() === "select" && i.multiple)
                return e.includes("number") ? Array.from(t.target.selectedOptions).map(r=>{
                    let n = r.value || r.text;
                    return Fa(n)
                }
                ) : e.includes("boolean") ? Array.from(t.target.selectedOptions).map(r=>{
                    let n = r.value || r.text;
                    return In(n)
                }
                ) : Array.from(t.target.selectedOptions).map(r=>r.value || r.text);
            {
                let r;
                return i.type === "radio" ? t.target.checked ? r = t.target.value : r = s : r = t.target.value,
                e.includes("number") ? Fa(r) : e.includes("boolean") ? In(r) : e.includes("trim") ? r.trim() : r
            }
        }
    }
    )
}
function Fa(i) {
    let e = i ? parseFloat(i) : null;
    return p1(e) ? e : i
}
function h1(i, e) {
    return i == e
}
function p1(i) {
    return !Array.isArray(i) && !isNaN(i)
}
function zc(i) {
    return i !== null && typeof i == "object" && typeof i.get == "function" && typeof i.set == "function"
}
ht("cloak", i=>queueMicrotask(()=>bt(()=>i.removeAttribute(cr("cloak")))));
lf(()=>`[${cr("init")}]`);
ht("init", rs((i,{expression: e},{evaluate: t})=>typeof e == "string" ? !!e.trim() && t(e, {}, !1) : t(e, {}, !1)));
ht("text", (i,{expression: e},{effect: t, evaluateLater: s})=>{
    let r = s(e);
    t(()=>{
        r(n=>{
            bt(()=>{
                i.textContent = n
            }
            )
        }
        )
    }
    )
}
);
ht("html", (i,{expression: e},{effect: t, evaluateLater: s})=>{
    let r = s(e);
    t(()=>{
        r(n=>{
            bt(()=>{
                i.innerHTML = n,
                i._x_ignoreSelf = !0,
                Ii(i),
                delete i._x_ignoreSelf
            }
            )
        }
        )
    }
    )
}
);
Pl(Zd(":", Jd(cr("bind:"))));
var Bf = (i,{value: e, modifiers: t, expression: s, original: r},{effect: n, cleanup: a})=>{
    if (!e) {
        let l = {};
        v0(l),
        kt(i, s)(u=>{
            _f(i, u, r)
        }
        , {
            scope: l
        });
        return
    }
    if (e === "key")
        return m1(i, s);
    if (i._x_inlineBindings && i._x_inlineBindings[e] && i._x_inlineBindings[e].extract)
        return;
    let o = kt(i, s);
    n(()=>o(l=>{
        l === void 0 && typeof s == "string" && s.match(/\./) && (l = ""),
        bt(()=>mf(i, e, l, t))
    }
    )),
    a(()=>{
        i._x_undoAddedClasses && i._x_undoAddedClasses(),
        i._x_undoAddedStyles && i._x_undoAddedStyles()
    }
    )
}
;
Bf.inline = (i,{value: e, modifiers: t, expression: s})=>{
    e && (i._x_inlineBindings || (i._x_inlineBindings = {}),
    i._x_inlineBindings[e] = {
        expression: s,
        extract: !1
    })
}
;
ht("bind", Bf);
function m1(i, e) {
    i._x_keyExpression = e
}
of(()=>`[${cr("data")}]`);
ht("data", (i,{expression: e},{cleanup: t})=>{
    if (g1(i))
        return;
    e = e === "" ? "{}" : e;
    let s = {};
    yo(s, i);
    let r = {};
    y0(r, s);
    let n = ws(i, e, {
        scope: r
    });
    (n === void 0 || n === !0) && (n = {}),
    yo(n, i);
    let a = or(n);
    zd(a);
    let o = Qr(i, a);
    a.init && ws(i, a.init),
    t(()=>{
        a.destroy && ws(i, a.destroy),
        o()
    }
    )
}
);
pa((i,e)=>{
    i._x_dataStack && (e._x_dataStack = i._x_dataStack,
    e.setAttribute("data-has-alpine-state", !0))
}
);
function g1(i) {
    return Qi ? Co ? !0 : i.hasAttribute("data-has-alpine-state") : !1
}
ht("show", (i,{modifiers: e, expression: t},{effect: s})=>{
    let r = kt(i, t);
    i._x_doHide || (i._x_doHide = ()=>{
        bt(()=>{
            i.style.setProperty("display", "none", e.includes("important") ? "important" : void 0)
        }
        )
    }
    ),
    i._x_doShow || (i._x_doShow = ()=>{
        bt(()=>{
            i.style.length === 1 && i.style.display === "none" ? i.removeAttribute("style") : i.style.removeProperty("display")
        }
        )
    }
    );
    let n = ()=>{
        i._x_doHide(),
        i._x_isShown = !1
    }
    , a = ()=>{
        i._x_doShow(),
        i._x_isShown = !0
    }
    , o = ()=>setTimeout(a), l = To(d=>d ? a() : n(), d=>{
        typeof i._x_toggleAndCascadeWithTransitions == "function" ? i._x_toggleAndCascadeWithTransitions(i, d, a, n) : d ? o() : n()
    }
    ), c, u = !0;
    s(()=>r(d=>{
        !u && d === c || (e.includes("immediate") && (d ? o() : n()),
        l(d),
        c = d,
        u = !1)
    }
    ))
}
);
ht("for", (i,{expression: e},{effect: t, cleanup: s})=>{
    let r = b1(e)
      , n = kt(i, r.items)
      , a = kt(i, i._x_keyExpression || "index");
    i._x_prevKeys = [],
    i._x_lookup = {},
    t(()=>v1(i, r, n, a)),
    s(()=>{
        Object.values(i._x_lookup).forEach(o=>o.remove()),
        delete i._x_prevKeys,
        delete i._x_lookup
    }
    )
}
);
function v1(i, e, t, s) {
    let r = a=>typeof a == "object" && !Array.isArray(a)
      , n = i;
    t(a=>{
        y1(a) && a >= 0 && (a = Array.from(Array(a).keys(), m=>m + 1)),
        a === void 0 && (a = []);
        let o = i._x_lookup
          , l = i._x_prevKeys
          , c = []
          , u = [];
        if (r(a))
            a = Object.entries(a).map(([m,h])=>{
                let E = jc(e, h, m, a);
                s(y=>{
                    u.includes(y) && ei("Duplicate key on x-for", i),
                    u.push(y)
                }
                , {
                    scope: {
                        index: m,
                        ...E
                    }
                }),
                c.push(E)
            }
            );
        else
            for (let m = 0; m < a.length; m++) {
                let h = jc(e, a[m], m, a);
                s(E=>{
                    u.includes(E) && ei("Duplicate key on x-for", i),
                    u.push(E)
                }
                , {
                    scope: {
                        index: m,
                        ...h
                    }
                }),
                c.push(h)
            }
        let d = []
          , f = []
          , p = []
          , b = [];
        for (let m = 0; m < l.length; m++) {
            let h = l[m];
            u.indexOf(h) === -1 && p.push(h)
        }
        l = l.filter(m=>!p.includes(m));
        let w = "template";
        for (let m = 0; m < u.length; m++) {
            let h = u[m]
              , E = l.indexOf(h);
            if (E === -1)
                l.splice(m, 0, h),
                d.push([w, m]);
            else if (E !== m) {
                let y = l.splice(m, 1)[0]
                  , _ = l.splice(E - 1, 1)[0];
                l.splice(m, 0, _),
                l.splice(E, 0, y),
                f.push([y, _])
            } else
                b.push(h);
            w = h
        }
        for (let m = 0; m < p.length; m++) {
            let h = p[m];
            o[h]._x_effects && o[h]._x_effects.forEach(Od),
            o[h].remove(),
            o[h] = null,
            delete o[h]
        }
        for (let m = 0; m < f.length; m++) {
            let[h,E] = f[m]
              , y = o[h]
              , _ = o[E]
              , N = document.createElement("div");
            bt(()=>{
                _ || ei('x-for ":key" is undefined or invalid', n, E, o),
                _.after(N),
                y.after(_),
                _._x_currentIfEl && _.after(_._x_currentIfEl),
                N.before(y),
                y._x_currentIfEl && y.after(y._x_currentIfEl),
                N.remove()
            }
            ),
            _._x_refreshXForScope(c[u.indexOf(E)])
        }
        for (let m = 0; m < d.length; m++) {
            let[h,E] = d[m]
              , y = h === "template" ? n : o[h];
            y._x_currentIfEl && (y = y._x_currentIfEl);
            let _ = c[E]
              , N = u[E]
              , P = document.importNode(n.content, !0).firstElementChild
              , q = or(_);
            Qr(P, q, n),
            P._x_refreshXForScope = k=>{
                Object.entries(k).forEach(([I,M])=>{
                    q[I] = M
                }
                )
            }
            ,
            bt(()=>{
                y.after(P),
                rs(()=>Ii(P))()
            }
            ),
            typeof N == "object" && ei("x-for key cannot be an object, it must be a string or an integer", n),
            o[N] = P
        }
        for (let m = 0; m < b.length; m++)
            o[b[m]]._x_refreshXForScope(c[u.indexOf(b[m])]);
        n._x_prevKeys = u
    }
    )
}
function b1(i) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
      , t = /^\s*\(|\)\s*$/g
      , s = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
      , r = i.match(s);
    if (!r)
        return;
    let n = {};
    n.items = r[2].trim();
    let a = r[1].replace(t, "").trim()
      , o = a.match(e);
    return o ? (n.item = a.replace(e, "").trim(),
    n.index = o[1].trim(),
    o[2] && (n.collection = o[2].trim())) : n.item = a,
    n
}
function jc(i, e, t, s) {
    let r = {};
    return /^\[.*\]$/.test(i.item) && Array.isArray(e) ? i.item.replace("[", "").replace("]", "").split(",").map(a=>a.trim()).forEach((a,o)=>{
        r[a] = e[o]
    }
    ) : /^\{.*\}$/.test(i.item) && !Array.isArray(e) && typeof e == "object" ? i.item.replace("{", "").replace("}", "").split(",").map(a=>a.trim()).forEach(a=>{
        r[a] = e[a]
    }
    ) : r[i.item] = e,
    i.index && (r[i.index] = t),
    i.collection && (r[i.collection] = s),
    r
}
function y1(i) {
    return !Array.isArray(i) && !isNaN(i)
}
function zf() {}
zf.inline = (i,{expression: e},{cleanup: t})=>{
    let s = fa(i);
    s._x_refs || (s._x_refs = {}),
    s._x_refs[e] = i,
    t(()=>delete s._x_refs[e])
}
;
ht("ref", zf);
ht("if", (i,{expression: e},{effect: t, cleanup: s})=>{
    i.tagName.toLowerCase() !== "template" && ei("x-if can only be used on a <template> tag", i);
    let r = kt(i, e)
      , n = ()=>{
        if (i._x_currentIfEl)
            return i._x_currentIfEl;
        let o = i.content.cloneNode(!0).firstElementChild;
        return Qr(o, {}, i),
        bt(()=>{
            i.after(o),
            rs(()=>Ii(o))()
        }
        ),
        i._x_currentIfEl = o,
        i._x_undoIf = ()=>{
            Ji(o, l=>{
                l._x_effects && l._x_effects.forEach(Od)
            }
            ),
            o.remove(),
            delete i._x_currentIfEl
        }
        ,
        o
    }
      , a = ()=>{
        i._x_undoIf && (i._x_undoIf(),
        delete i._x_undoIf)
    }
    ;
    t(()=>r(o=>{
        o ? n() : a()
    }
    )),
    s(()=>i._x_undoIf && i._x_undoIf())
}
);
ht("id", (i,{expression: e},{evaluate: t})=>{
    t(e).forEach(r=>n1(i, r))
}
);
pa((i,e)=>{
    i._x_ids && (e._x_ids = i._x_ids)
}
);
Pl(Zd("@", Jd(cr("on:"))));
ht("on", rs((i,{value: e, modifiers: t, expression: s},{cleanup: r})=>{
    let n = s ? kt(i, s) : ()=>{}
    ;
    i.tagName.toLowerCase() === "template" && (i._x_forwardEvents || (i._x_forwardEvents = []),
    i._x_forwardEvents.includes(e) || i._x_forwardEvents.push(e));
    let a = Mo(i, e, t, o=>{
        n(()=>{}
        , {
            scope: {
                $event: o
            },
            params: [o]
        })
    }
    );
    r(()=>a())
}
));
ba("Collapse", "collapse", "collapse");
ba("Intersect", "intersect", "intersect");
ba("Focus", "trap", "focus");
ba("Mask", "mask", "mask");
function ba(i, e, t) {
    ht(e, s=>ei(`You can't use [x-${e}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`, s))
}
sn.setEvaluator(Yd);
sn.setReactivityEngine({
    reactive: Hl,
    effect: A0,
    release: M0,
    raw: Ke
});
var w1 = sn
  , _i = w1;
function E1(i) {
    i.directive("intersect", i.skipDuringClone((e,{value: t, expression: s, modifiers: r},{evaluateLater: n, cleanup: a})=>{
        let o = n(s)
          , l = {
            rootMargin: T1(r),
            threshold: x1(r)
        }
          , c = new IntersectionObserver(u=>{
            u.forEach(d=>{
                d.isIntersecting !== (t === "leave") && (o(),
                r.includes("once") && c.disconnect())
            }
            )
        }
        ,l);
        c.observe(e),
        a(()=>{
            c.disconnect()
        }
        )
    }
    ))
}
function x1(i) {
    if (i.includes("full"))
        return .99;
    if (i.includes("half"))
        return .5;
    if (!i.includes("threshold"))
        return 0;
    let e = i[i.indexOf("threshold") + 1];
    return e === "100" ? 1 : e === "0" ? 0 : +`.${e}`
}
function _1(i) {
    let e = i.match(/^(-?[0-9]+)(px|%)?$/);
    return e ? e[1] + (e[2] || "px") : void 0
}
function T1(i) {
    const e = "margin"
      , t = "0px 0px 0px 0px"
      , s = i.indexOf(e);
    if (s === -1)
        return t;
    let r = [];
    for (let n = 1; n < 5; n++)
        r.push(_1(i[s + n] || ""));
    return r = r.filter(n=>n !== void 0),
    r.length ? r.join(" ").trim() : t
}
var S1 = E1;
function C1(i) {
    i.directive("collapse", e),
    e.inline = (t,{modifiers: s})=>{
        s.includes("min") && (t._x_doShow = ()=>{}
        ,
        t._x_doHide = ()=>{}
        )
    }
    ;
    function e(t, {modifiers: s}) {
        let r = qc(s, "duration", 250) / 1e3
          , n = qc(s, "min", 0)
          , a = !s.includes("min");
        t._x_isShown || (t.style.height = `${n}px`),
        !t._x_isShown && a && (t.hidden = !0),
        t._x_isShown || (t.style.overflow = "hidden");
        let o = (c,u)=>{
            let d = i.setStyles(c, u);
            return u.height ? ()=>{}
            : d
        }
          , l = {
            transitionProperty: "height",
            transitionDuration: `${r}s`,
            transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        };
        t._x_transition = {
            in(c=()=>{}
            , u=()=>{}
            ) {
                a && (t.hidden = !1),
                a && (t.style.display = null);
                let d = t.getBoundingClientRect().height;
                t.style.height = "auto";
                let f = t.getBoundingClientRect().height;
                d === f && (d = n),
                i.transition(t, i.setStyles, {
                    during: l,
                    start: {
                        height: d + "px"
                    },
                    end: {
                        height: f + "px"
                    }
                }, ()=>t._x_isShown = !0, ()=>{
                    t.getBoundingClientRect().height == f && (t.style.overflow = null)
                }
                )
            },
            out(c=()=>{}
            , u=()=>{}
            ) {
                let d = t.getBoundingClientRect().height;
                i.transition(t, o, {
                    during: l,
                    start: {
                        height: d + "px"
                    },
                    end: {
                        height: n + "px"
                    }
                }, ()=>t.style.overflow = "hidden", ()=>{
                    t._x_isShown = !1,
                    t.style.height == `${n}px` && a && (t.style.display = "none",
                    t.hidden = !0)
                }
                )
            }
        }
    }
}
function qc(i, e, t) {
    if (i.indexOf(e) === -1)
        return t;
    const s = i[i.indexOf(e) + 1];
    if (!s)
        return t;
    if (e === "duration") {
        let r = s.match(/([0-9]+)ms/);
        if (r)
            return r[1]
    }
    if (e === "min") {
        let r = s.match(/([0-9]+)px/);
        if (r)
            return r[1]
    }
    return s
}
var $1 = C1;
function P1(i) {
    let e = ()=>{
        let t, s;
        try {
            s = localStorage
        } catch (r) {
            console.error(r),
            console.warn("Alpine: $persist is using temporary storage since localStorage is unavailable.");
            let n = new Map;
            s = {
                getItem: n.get.bind(n),
                setItem: n.set.bind(n)
            }
        }
        return i.interceptor((r,n,a,o,l)=>{
            let c = t || `_x_${o}`
              , u = Gc(c, s) ? Wc(c, s) : r;
            return a(u),
            i.effect(()=>{
                let d = n();
                Yc(c, d, s),
                a(d)
            }
            ),
            u
        }
        , r=>{
            r.as = n=>(t = n,
            r),
            r.using = n=>(s = n,
            r)
        }
        )
    }
    ;
    Object.defineProperty(i, "$persist", {
        get: ()=>e()
    }),
    i.magic("persist", e),
    i.persist = (t,{get: s, set: r},n=localStorage)=>{
        let a = Gc(t, n) ? Wc(t, n) : s();
        r(a),
        i.effect(()=>{
            let o = s();
            Yc(t, o, n),
            r(o)
        }
        )
    }
}
function Gc(i, e) {
    return e.getItem(i) !== null
}
function Wc(i, e) {
    let t = e.getItem(i, e);
    if (t !== void 0)
        return JSON.parse(t)
}
function Yc(i, e, t) {
    t.setItem(i, JSON.stringify(e))
}
var A1 = P1
  , M1 = Object.create
  , Fl = Object.defineProperty
  , O1 = Object.getPrototypeOf
  , k1 = Object.prototype.hasOwnProperty
  , L1 = Object.getOwnPropertyNames
  , I1 = Object.getOwnPropertyDescriptor
  , D1 = i=>Fl(i, "__esModule", {
    value: !0
})
  , jf = (i,e)=>()=>(e || (e = {
    exports: {}
},
i(e.exports, e)),
e.exports)
  , R1 = (i,e,t)=>{
    if (e && typeof e == "object" || typeof e == "function")
        for (let s of L1(e))
            !k1.call(i, s) && s !== "default" && Fl(i, s, {
                get: ()=>e[s],
                enumerable: !(t = I1(e, s)) || t.enumerable
            });
    return i
}
  , qf = i=>R1(D1(Fl(i != null ? M1(O1(i)) : {}, "default", i && i.__esModule && "default"in i ? {
    get: ()=>i.default,
    enumerable: !0
} : {
    value: i,
    enumerable: !0
})), i)
  , N1 = jf(i=>{
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    function e(x) {
        var v = x.getBoundingClientRect();
        return {
            width: v.width,
            height: v.height,
            top: v.top,
            right: v.right,
            bottom: v.bottom,
            left: v.left,
            x: v.left,
            y: v.top
        }
    }
    function t(x) {
        if (x == null)
            return window;
        if (x.toString() !== "[object Window]") {
            var v = x.ownerDocument;
            return v && v.defaultView || window
        }
        return x
    }
    function s(x) {
        var v = t(x)
          , S = v.pageXOffset
          , F = v.pageYOffset;
        return {
            scrollLeft: S,
            scrollTop: F
        }
    }
    function r(x) {
        var v = t(x).Element;
        return x instanceof v || x instanceof Element
    }
    function n(x) {
        var v = t(x).HTMLElement;
        return x instanceof v || x instanceof HTMLElement
    }
    function a(x) {
        if (typeof ShadowRoot > "u")
            return !1;
        var v = t(x).ShadowRoot;
        return x instanceof v || x instanceof ShadowRoot
    }
    function o(x) {
        return {
            scrollLeft: x.scrollLeft,
            scrollTop: x.scrollTop
        }
    }
    function l(x) {
        return x === t(x) || !n(x) ? s(x) : o(x)
    }
    function c(x) {
        return x ? (x.nodeName || "").toLowerCase() : null
    }
    function u(x) {
        return ((r(x) ? x.ownerDocument : x.document) || window.document).documentElement
    }
    function d(x) {
        return e(u(x)).left + s(x).scrollLeft
    }
    function f(x) {
        return t(x).getComputedStyle(x)
    }
    function p(x) {
        var v = f(x)
          , S = v.overflow
          , F = v.overflowX
          , B = v.overflowY;
        return /auto|scroll|overlay|hidden/.test(S + B + F)
    }
    function b(x, v, S) {
        S === void 0 && (S = !1);
        var F = u(v)
          , B = e(x)
          , X = n(v)
          , te = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , Z = {
            x: 0,
            y: 0
        };
        return (X || !X && !S) && ((c(v) !== "body" || p(F)) && (te = l(v)),
        n(v) ? (Z = e(v),
        Z.x += v.clientLeft,
        Z.y += v.clientTop) : F && (Z.x = d(F))),
        {
            x: B.left + te.scrollLeft - Z.x,
            y: B.top + te.scrollTop - Z.y,
            width: B.width,
            height: B.height
        }
    }
    function w(x) {
        var v = e(x)
          , S = x.offsetWidth
          , F = x.offsetHeight;
        return Math.abs(v.width - S) <= 1 && (S = v.width),
        Math.abs(v.height - F) <= 1 && (F = v.height),
        {
            x: x.offsetLeft,
            y: x.offsetTop,
            width: S,
            height: F
        }
    }
    function m(x) {
        return c(x) === "html" ? x : x.assignedSlot || x.parentNode || (a(x) ? x.host : null) || u(x)
    }
    function h(x) {
        return ["html", "body", "#document"].indexOf(c(x)) >= 0 ? x.ownerDocument.body : n(x) && p(x) ? x : h(m(x))
    }
    function E(x, v) {
        var S;
        v === void 0 && (v = []);
        var F = h(x)
          , B = F === ((S = x.ownerDocument) == null ? void 0 : S.body)
          , X = t(F)
          , te = B ? [X].concat(X.visualViewport || [], p(F) ? F : []) : F
          , Z = v.concat(te);
        return B ? Z : Z.concat(E(m(te)))
    }
    function y(x) {
        return ["table", "td", "th"].indexOf(c(x)) >= 0
    }
    function _(x) {
        return !n(x) || f(x).position === "fixed" ? null : x.offsetParent
    }
    function N(x) {
        var v = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1
          , S = navigator.userAgent.indexOf("Trident") !== -1;
        if (S && n(x)) {
            var F = f(x);
            if (F.position === "fixed")
                return null
        }
        for (var B = m(x); n(B) && ["html", "body"].indexOf(c(B)) < 0; ) {
            var X = f(B);
            if (X.transform !== "none" || X.perspective !== "none" || X.contain === "paint" || ["transform", "perspective"].indexOf(X.willChange) !== -1 || v && X.willChange === "filter" || v && X.filter && X.filter !== "none")
                return B;
            B = B.parentNode
        }
        return null
    }
    function P(x) {
        for (var v = t(x), S = _(x); S && y(S) && f(S).position === "static"; )
            S = _(S);
        return S && (c(S) === "html" || c(S) === "body" && f(S).position === "static") ? v : S || N(x) || v
    }
    var q = "top"
      , k = "bottom"
      , I = "right"
      , M = "left"
      , j = "auto"
      , O = [q, k, I, M]
      , A = "start"
      , D = "end"
      , W = "clippingParents"
      , re = "viewport"
      , L = "popper"
      , H = "reference"
      , Q = O.reduce(function(x, v) {
        return x.concat([v + "-" + A, v + "-" + D])
    }, [])
      , pe = [].concat(O, [j]).reduce(function(x, v) {
        return x.concat([v, v + "-" + A, v + "-" + D])
    }, [])
      , G = "beforeRead"
      , J = "read"
      , ie = "afterRead"
      , Ne = "beforeMain"
      , le = "main"
      , Te = "afterMain"
      , ft = "beforeWrite"
      , vi = "write"
      , Ci = "afterWrite"
      , pt = [G, J, ie, Ne, le, Te, ft, vi, Ci];
    function si(x) {
        var v = new Map
          , S = new Set
          , F = [];
        x.forEach(function(X) {
            v.set(X.name, X)
        });
        function B(X) {
            S.add(X.name);
            var te = [].concat(X.requires || [], X.requiresIfExists || []);
            te.forEach(function(Z) {
                if (!S.has(Z)) {
                    var oe = v.get(Z);
                    oe && B(oe)
                }
            }),
            F.push(X)
        }
        return x.forEach(function(X) {
            S.has(X.name) || B(X)
        }),
        F
    }
    function Lt(x) {
        var v = si(x);
        return pt.reduce(function(S, F) {
            return S.concat(v.filter(function(B) {
                return B.phase === F
            }))
        }, [])
    }
    function ri(x) {
        var v;
        return function() {
            return v || (v = new Promise(function(S) {
                Promise.resolve().then(function() {
                    v = void 0,
                    S(x())
                })
            }
            )),
            v
        }
    }
    function Vt(x) {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), F = 1; F < v; F++)
            S[F - 1] = arguments[F];
        return [].concat(S).reduce(function(B, X) {
            return B.replace(/%s/, X)
        }, x)
    }
    var Ht = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
      , Di = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
      , lt = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
    function ns(x) {
        x.forEach(function(v) {
            Object.keys(v).forEach(function(S) {
                switch (S) {
                case "name":
                    typeof v.name != "string" && console.error(Vt(Ht, String(v.name), '"name"', '"string"', '"' + String(v.name) + '"'));
                    break;
                case "enabled":
                    typeof v.enabled != "boolean" && console.error(Vt(Ht, v.name, '"enabled"', '"boolean"', '"' + String(v.enabled) + '"'));
                case "phase":
                    pt.indexOf(v.phase) < 0 && console.error(Vt(Ht, v.name, '"phase"', "either " + pt.join(", "), '"' + String(v.phase) + '"'));
                    break;
                case "fn":
                    typeof v.fn != "function" && console.error(Vt(Ht, v.name, '"fn"', '"function"', '"' + String(v.fn) + '"'));
                    break;
                case "effect":
                    typeof v.effect != "function" && console.error(Vt(Ht, v.name, '"effect"', '"function"', '"' + String(v.fn) + '"'));
                    break;
                case "requires":
                    Array.isArray(v.requires) || console.error(Vt(Ht, v.name, '"requires"', '"array"', '"' + String(v.requires) + '"'));
                    break;
                case "requiresIfExists":
                    Array.isArray(v.requiresIfExists) || console.error(Vt(Ht, v.name, '"requiresIfExists"', '"array"', '"' + String(v.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + v.name + '" modifier, valid properties are ' + lt.map(function(F) {
                        return '"' + F + '"'
                    }).join(", ") + '; but "' + S + '" was provided.')
                }
                v.requires && v.requires.forEach(function(F) {
                    x.find(function(B) {
                        return B.name === F
                    }) == null && console.error(Vt(Di, String(v.name), F, F))
                })
            })
        })
    }
    function as(x, v) {
        var S = new Set;
        return x.filter(function(F) {
            var B = v(F);
            if (!S.has(B))
                return S.add(B),
                !0
        })
    }
    function yt(x) {
        return x.split("-")[0]
    }
    function os(x) {
        var v = x.reduce(function(S, F) {
            var B = S[F.name];
            return S[F.name] = B ? Object.assign({}, B, F, {
                options: Object.assign({}, B.options, F.options),
                data: Object.assign({}, B.data, F.data)
            }) : F,
            S
        }, {});
        return Object.keys(v).map(function(S) {
            return v[S]
        })
    }
    function bi(x) {
        var v = t(x)
          , S = u(x)
          , F = v.visualViewport
          , B = S.clientWidth
          , X = S.clientHeight
          , te = 0
          , Z = 0;
        return F && (B = F.width,
        X = F.height,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (te = F.offsetLeft,
        Z = F.offsetTop)),
        {
            width: B,
            height: X,
            x: te + d(x),
            y: Z
        }
    }
    var It = Math.max
      , Ft = Math.min
      , Ri = Math.round;
    function on(x) {
        var v, S = u(x), F = s(x), B = (v = x.ownerDocument) == null ? void 0 : v.body, X = It(S.scrollWidth, S.clientWidth, B ? B.scrollWidth : 0, B ? B.clientWidth : 0), te = It(S.scrollHeight, S.clientHeight, B ? B.scrollHeight : 0, B ? B.clientHeight : 0), Z = -F.scrollLeft + d(x), oe = -F.scrollTop;
        return f(B || S).direction === "rtl" && (Z += It(S.clientWidth, B ? B.clientWidth : 0) - X),
        {
            width: X,
            height: te,
            x: Z,
            y: oe
        }
    }
    function dr(x, v) {
        var S = v.getRootNode && v.getRootNode();
        if (x.contains(v))
            return !0;
        if (S && a(S)) {
            var F = v;
            do {
                if (F && x.isSameNode(F))
                    return !0;
                F = F.parentNode || F.host
            } while (F)
        }
        return !1
    }
    function Ni(x) {
        return Object.assign({}, x, {
            left: x.x,
            top: x.y,
            right: x.x + x.width,
            bottom: x.y + x.height
        })
    }
    function ln(x) {
        var v = e(x);
        return v.top = v.top + x.clientTop,
        v.left = v.left + x.clientLeft,
        v.bottom = v.top + x.clientHeight,
        v.right = v.left + x.clientWidth,
        v.width = x.clientWidth,
        v.height = x.clientHeight,
        v.x = v.left,
        v.y = v.top,
        v
    }
    function cn(x, v) {
        return v === re ? Ni(bi(x)) : n(v) ? ln(v) : Ni(on(u(x)))
    }
    function Ds(x) {
        var v = E(m(x))
          , S = ["absolute", "fixed"].indexOf(f(x).position) >= 0
          , F = S && n(x) ? P(x) : x;
        return r(F) ? v.filter(function(B) {
            return r(B) && dr(B, F) && c(B) !== "body"
        }) : []
    }
    function Rs(x, v, S) {
        var F = v === "clippingParents" ? Ds(x) : [].concat(v)
          , B = [].concat(F, [S])
          , X = B[0]
          , te = B.reduce(function(Z, oe) {
            var ge = cn(x, oe);
            return Z.top = It(ge.top, Z.top),
            Z.right = Ft(ge.right, Z.right),
            Z.bottom = Ft(ge.bottom, Z.bottom),
            Z.left = It(ge.left, Z.left),
            Z
        }, cn(x, X));
        return te.width = te.right - te.left,
        te.height = te.bottom - te.top,
        te.x = te.left,
        te.y = te.top,
        te
    }
    function ls(x) {
        return x.split("-")[1]
    }
    function Ut(x) {
        return ["top", "bottom"].indexOf(x) >= 0 ? "x" : "y"
    }
    function un(x) {
        var v = x.reference, S = x.element, F = x.placement, B = F ? yt(F) : null, X = F ? ls(F) : null, te = v.x + v.width / 2 - S.width / 2, Z = v.y + v.height / 2 - S.height / 2, oe;
        switch (B) {
        case q:
            oe = {
                x: te,
                y: v.y - S.height
            };
            break;
        case k:
            oe = {
                x: te,
                y: v.y + v.height
            };
            break;
        case I:
            oe = {
                x: v.x + v.width,
                y: Z
            };
            break;
        case M:
            oe = {
                x: v.x - S.width,
                y: Z
            };
            break;
        default:
            oe = {
                x: v.x,
                y: v.y
            }
        }
        var ge = B ? Ut(B) : null;
        if (ge != null) {
            var se = ge === "y" ? "height" : "width";
            switch (X) {
            case A:
                oe[ge] = oe[ge] - (v[se] / 2 - S[se] / 2);
                break;
            case D:
                oe[ge] = oe[ge] + (v[se] / 2 - S[se] / 2);
                break
            }
        }
        return oe
    }
    function dn() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }
    function fn(x) {
        return Object.assign({}, dn(), x)
    }
    function hn(x, v) {
        return v.reduce(function(S, F) {
            return S[F] = x,
            S
        }, {})
    }
    function Vi(x, v) {
        v === void 0 && (v = {});
        var S = v
          , F = S.placement
          , B = F === void 0 ? x.placement : F
          , X = S.boundary
          , te = X === void 0 ? W : X
          , Z = S.rootBoundary
          , oe = Z === void 0 ? re : Z
          , ge = S.elementContext
          , se = ge === void 0 ? L : ge
          , Ve = S.altBoundary
          , Ye = Ve === void 0 ? !1 : Ve
          , Ie = S.padding
          , Oe = Ie === void 0 ? 0 : Ie
          , je = fn(typeof Oe != "number" ? Oe : hn(Oe, O))
          , ke = se === L ? H : L
          , et = x.elements.reference
          , qe = x.rects.popper
          , tt = x.elements[Ye ? ke : se]
          , be = Rs(r(tt) ? tt : tt.contextElement || u(x.elements.popper), te, oe)
          , Be = e(et)
          , He = un({
            reference: Be,
            element: qe,
            strategy: "absolute",
            placement: B
        })
          , Xe = Ni(Object.assign({}, qe, He))
          , We = se === L ? Xe : Be
          , ct = {
            top: be.top - We.top + je.top,
            bottom: We.bottom - be.bottom + je.bottom,
            left: be.left - We.left + je.left,
            right: We.right - be.right + je.right
        }
          , it = x.modifiersData.offset;
        if (se === L && it) {
            var rt = it[B];
            Object.keys(ct).forEach(function(oi) {
                var St = [I, k].indexOf(oi) >= 0 ? 1 : -1
                  , Pi = [q, k].indexOf(oi) >= 0 ? "y" : "x";
                ct[oi] += rt[Pi] * St
            })
        }
        return ct
    }
    var pn = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element."
      , xa = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash."
      , Ns = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function cs() {
        for (var x = arguments.length, v = new Array(x), S = 0; S < x; S++)
            v[S] = arguments[S];
        return !v.some(function(F) {
            return !(F && typeof F.getBoundingClientRect == "function")
        })
    }
    function Vs(x) {
        x === void 0 && (x = {});
        var v = x
          , S = v.defaultModifiers
          , F = S === void 0 ? [] : S
          , B = v.defaultOptions
          , X = B === void 0 ? Ns : B;
        return function(Z, oe, ge) {
            ge === void 0 && (ge = X);
            var se = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Ns, X),
                modifiersData: {},
                elements: {
                    reference: Z,
                    popper: oe
                },
                attributes: {},
                styles: {}
            }
              , Ve = []
              , Ye = !1
              , Ie = {
                state: se,
                setOptions: function(et) {
                    je(),
                    se.options = Object.assign({}, X, se.options, et),
                    se.scrollParents = {
                        reference: r(Z) ? E(Z) : Z.contextElement ? E(Z.contextElement) : [],
                        popper: E(oe)
                    };
                    var qe = Lt(os([].concat(F, se.options.modifiers)));
                    se.orderedModifiers = qe.filter(function(it) {
                        return it.enabled
                    });
                    {
                        var tt = as([].concat(qe, se.options.modifiers), function(it) {
                            var rt = it.name;
                            return rt
                        });
                        if (ns(tt),
                        yt(se.options.placement) === j) {
                            var be = se.orderedModifiers.find(function(it) {
                                var rt = it.name;
                                return rt === "flip"
                            });
                            be || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                        }
                        var Be = f(oe)
                          , He = Be.marginTop
                          , Xe = Be.marginRight
                          , We = Be.marginBottom
                          , ct = Be.marginLeft;
                        [He, Xe, We, ct].some(function(it) {
                            return parseFloat(it)
                        }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                    }
                    return Oe(),
                    Ie.update()
                },
                forceUpdate: function() {
                    if (!Ye) {
                        var et = se.elements
                          , qe = et.reference
                          , tt = et.popper;
                        if (!cs(qe, tt)) {
                            console.error(pn);
                            return
                        }
                        se.rects = {
                            reference: b(qe, P(tt), se.options.strategy === "fixed"),
                            popper: w(tt)
                        },
                        se.reset = !1,
                        se.placement = se.options.placement,
                        se.orderedModifiers.forEach(function(rt) {
                            return se.modifiersData[rt.name] = Object.assign({}, rt.data)
                        });
                        for (var be = 0, Be = 0; Be < se.orderedModifiers.length; Be++) {
                            if (be += 1,
                            be > 100) {
                                console.error(xa);
                                break
                            }
                            if (se.reset === !0) {
                                se.reset = !1,
                                Be = -1;
                                continue
                            }
                            var He = se.orderedModifiers[Be]
                              , Xe = He.fn
                              , We = He.options
                              , ct = We === void 0 ? {} : We
                              , it = He.name;
                            typeof Xe == "function" && (se = Xe({
                                state: se,
                                options: ct,
                                name: it,
                                instance: Ie
                            }) || se)
                        }
                    }
                },
                update: ri(function() {
                    return new Promise(function(ke) {
                        Ie.forceUpdate(),
                        ke(se)
                    }
                    )
                }),
                destroy: function() {
                    je(),
                    Ye = !0
                }
            };
            if (!cs(Z, oe))
                return console.error(pn),
                Ie;
            Ie.setOptions(ge).then(function(ke) {
                !Ye && ge.onFirstUpdate && ge.onFirstUpdate(ke)
            });
            function Oe() {
                se.orderedModifiers.forEach(function(ke) {
                    var et = ke.name
                      , qe = ke.options
                      , tt = qe === void 0 ? {} : qe
                      , be = ke.effect;
                    if (typeof be == "function") {
                        var Be = be({
                            state: se,
                            name: et,
                            instance: Ie,
                            options: tt
                        })
                          , He = function() {};
                        Ve.push(Be || He)
                    }
                })
            }
            function je() {
                Ve.forEach(function(ke) {
                    return ke()
                }),
                Ve = []
            }
            return Ie
        }
    }
    var Hs = {
        passive: !0
    };
    function _a(x) {
        var v = x.state
          , S = x.instance
          , F = x.options
          , B = F.scroll
          , X = B === void 0 ? !0 : B
          , te = F.resize
          , Z = te === void 0 ? !0 : te
          , oe = t(v.elements.popper)
          , ge = [].concat(v.scrollParents.reference, v.scrollParents.popper);
        return X && ge.forEach(function(se) {
            se.addEventListener("scroll", S.update, Hs)
        }),
        Z && oe.addEventListener("resize", S.update, Hs),
        function() {
            X && ge.forEach(function(se) {
                se.removeEventListener("scroll", S.update, Hs)
            }),
            Z && oe.removeEventListener("resize", S.update, Hs)
        }
    }
    var fr = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: _a,
        data: {}
    };
    function Ta(x) {
        var v = x.state
          , S = x.name;
        v.modifiersData[S] = un({
            reference: v.rects.reference,
            element: v.rects.popper,
            strategy: "absolute",
            placement: v.placement
        })
    }
    var hr = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: Ta,
        data: {}
    }
      , Sa = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function Ca(x) {
        var v = x.x
          , S = x.y
          , F = window
          , B = F.devicePixelRatio || 1;
        return {
            x: Ri(Ri(v * B) / B) || 0,
            y: Ri(Ri(S * B) / B) || 0
        }
    }
    function pr(x) {
        var v, S = x.popper, F = x.popperRect, B = x.placement, X = x.offsets, te = x.position, Z = x.gpuAcceleration, oe = x.adaptive, ge = x.roundOffsets, se = ge === !0 ? Ca(X) : typeof ge == "function" ? ge(X) : X, Ve = se.x, Ye = Ve === void 0 ? 0 : Ve, Ie = se.y, Oe = Ie === void 0 ? 0 : Ie, je = X.hasOwnProperty("x"), ke = X.hasOwnProperty("y"), et = M, qe = q, tt = window;
        if (oe) {
            var be = P(S)
              , Be = "clientHeight"
              , He = "clientWidth";
            be === t(S) && (be = u(S),
            f(be).position !== "static" && (Be = "scrollHeight",
            He = "scrollWidth")),
            be = be,
            B === q && (qe = k,
            Oe -= be[Be] - F.height,
            Oe *= Z ? 1 : -1),
            B === M && (et = I,
            Ye -= be[He] - F.width,
            Ye *= Z ? 1 : -1)
        }
        var Xe = Object.assign({
            position: te
        }, oe && Sa);
        if (Z) {
            var We;
            return Object.assign({}, Xe, (We = {},
            We[qe] = ke ? "0" : "",
            We[et] = je ? "0" : "",
            We.transform = (tt.devicePixelRatio || 1) < 2 ? "translate(" + Ye + "px, " + Oe + "px)" : "translate3d(" + Ye + "px, " + Oe + "px, 0)",
            We))
        }
        return Object.assign({}, Xe, (v = {},
        v[qe] = ke ? Oe + "px" : "",
        v[et] = je ? Ye + "px" : "",
        v.transform = "",
        v))
    }
    function T(x) {
        var v = x.state
          , S = x.options
          , F = S.gpuAcceleration
          , B = F === void 0 ? !0 : F
          , X = S.adaptive
          , te = X === void 0 ? !0 : X
          , Z = S.roundOffsets
          , oe = Z === void 0 ? !0 : Z;
        {
            var ge = f(v.elements.popper).transitionProperty || "";
            te && ["transform", "top", "right", "bottom", "left"].some(function(Ve) {
                return ge.indexOf(Ve) >= 0
            }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
        }
        var se = {
            placement: yt(v.placement),
            popper: v.elements.popper,
            popperRect: v.rects.popper,
            gpuAcceleration: B
        };
        v.modifiersData.popperOffsets != null && (v.styles.popper = Object.assign({}, v.styles.popper, pr(Object.assign({}, se, {
            offsets: v.modifiersData.popperOffsets,
            position: v.options.strategy,
            adaptive: te,
            roundOffsets: oe
        })))),
        v.modifiersData.arrow != null && (v.styles.arrow = Object.assign({}, v.styles.arrow, pr(Object.assign({}, se, {
            offsets: v.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: oe
        })))),
        v.attributes.popper = Object.assign({}, v.attributes.popper, {
            "data-popper-placement": v.placement
        })
    }
    var C = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: T,
        data: {}
    };
    function R(x) {
        var v = x.state;
        Object.keys(v.elements).forEach(function(S) {
            var F = v.styles[S] || {}
              , B = v.attributes[S] || {}
              , X = v.elements[S];
            !n(X) || !c(X) || (Object.assign(X.style, F),
            Object.keys(B).forEach(function(te) {
                var Z = B[te];
                Z === !1 ? X.removeAttribute(te) : X.setAttribute(te, Z === !0 ? "" : Z)
            }))
        })
    }
    function Y(x) {
        var v = x.state
          , S = {
            popper: {
                position: v.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        return Object.assign(v.elements.popper.style, S.popper),
        v.styles = S,
        v.elements.arrow && Object.assign(v.elements.arrow.style, S.arrow),
        function() {
            Object.keys(v.elements).forEach(function(F) {
                var B = v.elements[F]
                  , X = v.attributes[F] || {}
                  , te = Object.keys(v.styles.hasOwnProperty(F) ? v.styles[F] : S[F])
                  , Z = te.reduce(function(oe, ge) {
                    return oe[ge] = "",
                    oe
                }, {});
                !n(B) || !c(B) || (Object.assign(B.style, Z),
                Object.keys(X).forEach(function(oe) {
                    B.removeAttribute(oe)
                }))
            })
        }
    }
    var ae = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: R,
        effect: Y,
        requires: ["computeStyles"]
    };
    function ee(x, v, S) {
        var F = yt(x)
          , B = [M, q].indexOf(F) >= 0 ? -1 : 1
          , X = typeof S == "function" ? S(Object.assign({}, v, {
            placement: x
        })) : S
          , te = X[0]
          , Z = X[1];
        return te = te || 0,
        Z = (Z || 0) * B,
        [M, I].indexOf(F) >= 0 ? {
            x: Z,
            y: te
        } : {
            x: te,
            y: Z
        }
    }
    function K(x) {
        var v = x.state
          , S = x.options
          , F = x.name
          , B = S.offset
          , X = B === void 0 ? [0, 0] : B
          , te = pe.reduce(function(se, Ve) {
            return se[Ve] = ee(Ve, v.rects, X),
            se
        }, {})
          , Z = te[v.placement]
          , oe = Z.x
          , ge = Z.y;
        v.modifiersData.popperOffsets != null && (v.modifiersData.popperOffsets.x += oe,
        v.modifiersData.popperOffsets.y += ge),
        v.modifiersData[F] = te
    }
    var Se = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: K
    }
      , ve = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function we(x) {
        return x.replace(/left|right|bottom|top/g, function(v) {
            return ve[v]
        })
    }
    var Ce = {
        start: "end",
        end: "start"
    };
    function Fe(x) {
        return x.replace(/start|end/g, function(v) {
            return Ce[v]
        })
    }
    function Qe(x, v) {
        v === void 0 && (v = {});
        var S = v
          , F = S.placement
          , B = S.boundary
          , X = S.rootBoundary
          , te = S.padding
          , Z = S.flipVariations
          , oe = S.allowedAutoPlacements
          , ge = oe === void 0 ? pe : oe
          , se = ls(F)
          , Ve = se ? Z ? Q : Q.filter(function(Oe) {
            return ls(Oe) === se
        }) : O
          , Ye = Ve.filter(function(Oe) {
            return ge.indexOf(Oe) >= 0
        });
        Ye.length === 0 && (Ye = Ve,
        console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
        var Ie = Ye.reduce(function(Oe, je) {
            return Oe[je] = Vi(x, {
                placement: je,
                boundary: B,
                rootBoundary: X,
                padding: te
            })[yt(je)],
            Oe
        }, {});
        return Object.keys(Ie).sort(function(Oe, je) {
            return Ie[Oe] - Ie[je]
        })
    }
    function Le(x) {
        if (yt(x) === j)
            return [];
        var v = we(x);
        return [Fe(x), v, Fe(v)]
    }
    function Ge(x) {
        var v = x.state
          , S = x.options
          , F = x.name;
        if (!v.modifiersData[F]._skip) {
            for (var B = S.mainAxis, X = B === void 0 ? !0 : B, te = S.altAxis, Z = te === void 0 ? !0 : te, oe = S.fallbackPlacements, ge = S.padding, se = S.boundary, Ve = S.rootBoundary, Ye = S.altBoundary, Ie = S.flipVariations, Oe = Ie === void 0 ? !0 : Ie, je = S.allowedAutoPlacements, ke = v.options.placement, et = yt(ke), qe = et === ke, tt = oe || (qe || !Oe ? [we(ke)] : Le(ke)), be = [ke].concat(tt).reduce(function(de, _e) {
                return de.concat(yt(_e) === j ? Qe(v, {
                    placement: _e,
                    boundary: se,
                    rootBoundary: Ve,
                    padding: ge,
                    flipVariations: Oe,
                    allowedAutoPlacements: je
                }) : _e)
            }, []), Be = v.rects.reference, He = v.rects.popper, Xe = new Map, We = !0, ct = be[0], it = 0; it < be.length; it++) {
                var rt = be[it]
                  , oi = yt(rt)
                  , St = ls(rt) === A
                  , Pi = [q, k].indexOf(oi) >= 0
                  , ds = Pi ? "width" : "height"
                  , zi = Vi(v, {
                    placement: rt,
                    boundary: se,
                    rootBoundary: Ve,
                    altBoundary: Ye,
                    padding: ge
                })
                  , Ai = Pi ? St ? I : M : St ? k : q;
                Be[ds] > He[ds] && (Ai = we(Ai));
                var mr = we(Ai)
                  , ji = [];
                if (X && ji.push(zi[oi] <= 0),
                Z && ji.push(zi[Ai] <= 0, zi[mr] <= 0),
                ji.every(function(de) {
                    return de
                })) {
                    ct = rt,
                    We = !1;
                    break
                }
                Xe.set(rt, ji)
            }
            if (We)
                for (var Fs = Oe ? 3 : 1, gr = function(_e) {
                    var Ae = be.find(function(gt) {
                        var vt = Xe.get(gt);
                        if (vt)
                            return vt.slice(0, _e).every(function(yi) {
                                return yi
                            })
                    });
                    if (Ae)
                        return ct = Ae,
                        "break"
                }, V = Fs; V > 0; V--) {
                    var ce = gr(V);
                    if (ce === "break")
                        break
                }
            v.placement !== ct && (v.modifiersData[F]._skip = !0,
            v.placement = ct,
            v.reset = !0)
        }
    }
    var he = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: Ge,
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Ee(x) {
        return x === "x" ? "y" : "x"
    }
    function xe(x, v, S) {
        return It(x, Ft(v, S))
    }
    function ue(x) {
        var v = x.state
          , S = x.options
          , F = x.name
          , B = S.mainAxis
          , X = B === void 0 ? !0 : B
          , te = S.altAxis
          , Z = te === void 0 ? !1 : te
          , oe = S.boundary
          , ge = S.rootBoundary
          , se = S.altBoundary
          , Ve = S.padding
          , Ye = S.tether
          , Ie = Ye === void 0 ? !0 : Ye
          , Oe = S.tetherOffset
          , je = Oe === void 0 ? 0 : Oe
          , ke = Vi(v, {
            boundary: oe,
            rootBoundary: ge,
            padding: Ve,
            altBoundary: se
        })
          , et = yt(v.placement)
          , qe = ls(v.placement)
          , tt = !qe
          , be = Ut(et)
          , Be = Ee(be)
          , He = v.modifiersData.popperOffsets
          , Xe = v.rects.reference
          , We = v.rects.popper
          , ct = typeof je == "function" ? je(Object.assign({}, v.rects, {
            placement: v.placement
        })) : je
          , it = {
            x: 0,
            y: 0
        };
        if (He) {
            if (X || Z) {
                var rt = be === "y" ? q : M
                  , oi = be === "y" ? k : I
                  , St = be === "y" ? "height" : "width"
                  , Pi = He[be]
                  , ds = He[be] + ke[rt]
                  , zi = He[be] - ke[oi]
                  , Ai = Ie ? -We[St] / 2 : 0
                  , mr = qe === A ? Xe[St] : We[St]
                  , ji = qe === A ? -We[St] : -Xe[St]
                  , Fs = v.elements.arrow
                  , gr = Ie && Fs ? w(Fs) : {
                    width: 0,
                    height: 0
                }
                  , V = v.modifiersData["arrow#persistent"] ? v.modifiersData["arrow#persistent"].padding : dn()
                  , ce = V[rt]
                  , de = V[oi]
                  , _e = xe(0, Xe[St], gr[St])
                  , Ae = tt ? Xe[St] / 2 - Ai - _e - ce - ct : mr - _e - ce - ct
                  , gt = tt ? -Xe[St] / 2 + Ai + _e + de + ct : ji + _e + de + ct
                  , vt = v.elements.arrow && P(v.elements.arrow)
                  , yi = vt ? be === "y" ? vt.clientTop || 0 : vt.clientLeft || 0 : 0
                  , vr = v.modifiersData.offset ? v.modifiersData.offset[v.placement][be] : 0
                  , wi = He[be] + Ae - vr - yi
                  , Bs = He[be] + gt - vr;
                if (X) {
                    var fs = xe(Ie ? Ft(ds, wi) : ds, Pi, Ie ? It(zi, Bs) : zi);
                    He[be] = fs,
                    it[be] = fs - Pi
                }
                if (Z) {
                    var qi = be === "x" ? q : M
                      , $a = be === "x" ? k : I
                      , Gi = He[Be]
                      , hs = Gi + ke[qi]
                      , Kl = Gi - ke[$a]
                      , Zl = xe(Ie ? Ft(hs, wi) : hs, Gi, Ie ? It(Kl, Bs) : Kl);
                    He[Be] = Zl,
                    it[Be] = Zl - Gi
                }
            }
            v.modifiersData[F] = it
        }
    }
    var me = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: ue,
        requiresIfExists: ["offset"]
    }
      , $ = function(v, S) {
        return v = typeof v == "function" ? v(Object.assign({}, S.rects, {
            placement: S.placement
        })) : v,
        fn(typeof v != "number" ? v : hn(v, O))
    };
    function mt(x) {
        var v, S = x.state, F = x.name, B = x.options, X = S.elements.arrow, te = S.modifiersData.popperOffsets, Z = yt(S.placement), oe = Ut(Z), ge = [M, I].indexOf(Z) >= 0, se = ge ? "height" : "width";
        if (!(!X || !te)) {
            var Ve = $(B.padding, S)
              , Ye = w(X)
              , Ie = oe === "y" ? q : M
              , Oe = oe === "y" ? k : I
              , je = S.rects.reference[se] + S.rects.reference[oe] - te[oe] - S.rects.popper[se]
              , ke = te[oe] - S.rects.reference[oe]
              , et = P(X)
              , qe = et ? oe === "y" ? et.clientHeight || 0 : et.clientWidth || 0 : 0
              , tt = je / 2 - ke / 2
              , be = Ve[Ie]
              , Be = qe - Ye[se] - Ve[Oe]
              , He = qe / 2 - Ye[se] / 2 + tt
              , Xe = xe(be, He, Be)
              , We = oe;
            S.modifiersData[F] = (v = {},
            v[We] = Xe,
            v.centerOffset = Xe - He,
            v)
        }
    }
    function ye(x) {
        var v = x.state
          , S = x.options
          , F = S.element
          , B = F === void 0 ? "[data-popper-arrow]" : F;
        if (B != null && !(typeof B == "string" && (B = v.elements.popper.querySelector(B),
        !B))) {
            if (n(B) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" ")),
            !dr(v.elements.popper, B)) {
                console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
                return
            }
            v.elements.arrow = B
        }
    }
    var $i = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: mt,
        effect: ye,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function ni(x, v, S) {
        return S === void 0 && (S = {
            x: 0,
            y: 0
        }),
        {
            top: x.top - v.height - S.y,
            right: x.right - v.width + S.x,
            bottom: x.bottom - v.height + S.y,
            left: x.left - v.width - S.x
        }
    }
    function Hi(x) {
        return [q, I, k, M].some(function(v) {
            return x[v] >= 0
        })
    }
    function Fi(x) {
        var v = x.state
          , S = x.name
          , F = v.rects.reference
          , B = v.rects.popper
          , X = v.modifiersData.preventOverflow
          , te = Vi(v, {
            elementContext: "reference"
        })
          , Z = Vi(v, {
            altBoundary: !0
        })
          , oe = ni(te, F)
          , ge = ni(Z, B, X)
          , se = Hi(oe)
          , Ve = Hi(ge);
        v.modifiersData[S] = {
            referenceClippingOffsets: oe,
            popperEscapeOffsets: ge,
            isReferenceHidden: se,
            hasPopperEscaped: Ve
        },
        v.attributes.popper = Object.assign({}, v.attributes.popper, {
            "data-popper-reference-hidden": se,
            "data-popper-escaped": Ve
        })
    }
    var Bi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: Fi
    }
      , $t = [fr, hr, C, ae]
      , Bt = Vs({
        defaultModifiers: $t
    })
      , ai = [fr, hr, C, ae, Se, he, me, $i, Bi]
      , us = Vs({
        defaultModifiers: ai
    });
    i.applyStyles = ae,
    i.arrow = $i,
    i.computeStyles = C,
    i.createPopper = us,
    i.createPopperLite = Bt,
    i.defaultModifiers = ai,
    i.detectOverflow = Vi,
    i.eventListeners = fr,
    i.flip = he,
    i.hide = Bi,
    i.offset = Se,
    i.popperGenerator = Vs,
    i.popperOffsets = hr,
    i.preventOverflow = me
}
)
  , Gf = jf(i=>{
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = N1()
      , t = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'
      , s = "tippy-box"
      , r = "tippy-content"
      , n = "tippy-backdrop"
      , a = "tippy-arrow"
      , o = "tippy-svg-arrow"
      , l = {
        passive: !0,
        capture: !0
    };
    function c(T, C) {
        return {}.hasOwnProperty.call(T, C)
    }
    function u(T, C, R) {
        if (Array.isArray(T)) {
            var Y = T[C];
            return Y ?? (Array.isArray(R) ? R[C] : R)
        }
        return T
    }
    function d(T, C) {
        var R = {}.toString.call(T);
        return R.indexOf("[object") === 0 && R.indexOf(C + "]") > -1
    }
    function f(T, C) {
        return typeof T == "function" ? T.apply(void 0, C) : T
    }
    function p(T, C) {
        if (C === 0)
            return T;
        var R;
        return function(Y) {
            clearTimeout(R),
            R = setTimeout(function() {
                T(Y)
            }, C)
        }
    }
    function b(T, C) {
        var R = Object.assign({}, T);
        return C.forEach(function(Y) {
            delete R[Y]
        }),
        R
    }
    function w(T) {
        return T.split(/\s+/).filter(Boolean)
    }
    function m(T) {
        return [].concat(T)
    }
    function h(T, C) {
        T.indexOf(C) === -1 && T.push(C)
    }
    function E(T) {
        return T.filter(function(C, R) {
            return T.indexOf(C) === R
        })
    }
    function y(T) {
        return T.split("-")[0]
    }
    function _(T) {
        return [].slice.call(T)
    }
    function N(T) {
        return Object.keys(T).reduce(function(C, R) {
            return T[R] !== void 0 && (C[R] = T[R]),
            C
        }, {})
    }
    function P() {
        return document.createElement("div")
    }
    function q(T) {
        return ["Element", "Fragment"].some(function(C) {
            return d(T, C)
        })
    }
    function k(T) {
        return d(T, "NodeList")
    }
    function I(T) {
        return d(T, "MouseEvent")
    }
    function M(T) {
        return !!(T && T._tippy && T._tippy.reference === T)
    }
    function j(T) {
        return q(T) ? [T] : k(T) ? _(T) : Array.isArray(T) ? T : _(document.querySelectorAll(T))
    }
    function O(T, C) {
        T.forEach(function(R) {
            R && (R.style.transitionDuration = C + "ms")
        })
    }
    function A(T, C) {
        T.forEach(function(R) {
            R && R.setAttribute("data-state", C)
        })
    }
    function D(T) {
        var C, R = m(T), Y = R[0];
        return !(Y == null || (C = Y.ownerDocument) == null) && C.body ? Y.ownerDocument : document
    }
    function W(T, C) {
        var R = C.clientX
          , Y = C.clientY;
        return T.every(function(ae) {
            var ee = ae.popperRect
              , K = ae.popperState
              , Se = ae.props
              , ve = Se.interactiveBorder
              , we = y(K.placement)
              , Ce = K.modifiersData.offset;
            if (!Ce)
                return !0;
            var Fe = we === "bottom" ? Ce.top.y : 0
              , Qe = we === "top" ? Ce.bottom.y : 0
              , Le = we === "right" ? Ce.left.x : 0
              , Ge = we === "left" ? Ce.right.x : 0
              , he = ee.top - Y + Fe > ve
              , Ee = Y - ee.bottom - Qe > ve
              , xe = ee.left - R + Le > ve
              , ue = R - ee.right - Ge > ve;
            return he || Ee || xe || ue
        })
    }
    function re(T, C, R) {
        var Y = C + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function(ae) {
            T[Y](ae, R)
        })
    }
    var L = {
        isTouch: !1
    }
      , H = 0;
    function Q() {
        L.isTouch || (L.isTouch = !0,
        window.performance && document.addEventListener("mousemove", pe))
    }
    function pe() {
        var T = performance.now();
        T - H < 20 && (L.isTouch = !1,
        document.removeEventListener("mousemove", pe)),
        H = T
    }
    function G() {
        var T = document.activeElement;
        if (M(T)) {
            var C = T._tippy;
            T.blur && !C.state.isVisible && T.blur()
        }
    }
    function J() {
        document.addEventListener("touchstart", Q, l),
        window.addEventListener("blur", G)
    }
    var ie = typeof window < "u" && typeof document < "u"
      , Ne = ie ? navigator.userAgent : ""
      , le = /MSIE |Trident\//.test(Ne);
    function Te(T) {
        var C = T === "destroy" ? "n already-" : " ";
        return [T + "() was called on a" + C + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ")
    }
    function ft(T) {
        var C = /[ \t]{2,}/g
          , R = /^[ \t]*/gm;
        return T.replace(C, " ").replace(R, "").trim()
    }
    function vi(T) {
        return ft(`
  %ctippy.js

  %c` + ft(T) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `)
    }
    function Ci(T) {
        return [vi(T), "color: #00C584; font-size: 1.3em; font-weight: bold;", "line-height: 1.5", "color: #a6a095;"]
    }
    var pt;
    si();
    function si() {
        pt = new Set
    }
    function Lt(T, C) {
        if (T && !pt.has(C)) {
            var R;
            pt.add(C),
            (R = console).warn.apply(R, Ci(C))
        }
    }
    function ri(T, C) {
        if (T && !pt.has(C)) {
            var R;
            pt.add(C),
            (R = console).error.apply(R, Ci(C))
        }
    }
    function Vt(T) {
        var C = !T
          , R = Object.prototype.toString.call(T) === "[object Object]" && !T.addEventListener;
        ri(C, ["tippy() was passed", "`" + String(T) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")),
        ri(R, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "))
    }
    var Ht = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
    }
      , Di = {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    }
      , lt = Object.assign({
        appendTo: function() {
            return document.body
        },
        aria: {
            content: "auto",
            expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function() {},
        onBeforeUpdate: function() {},
        onCreate: function() {},
        onDestroy: function() {},
        onHidden: function() {},
        onHide: function() {},
        onMount: function() {},
        onShow: function() {},
        onShown: function() {},
        onTrigger: function() {},
        onUntrigger: function() {},
        onClickOutside: function() {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, Ht, {}, Di)
      , ns = Object.keys(lt)
      , as = function(C) {
        It(C, []);
        var R = Object.keys(C);
        R.forEach(function(Y) {
            lt[Y] = C[Y]
        })
    };
    function yt(T) {
        var C = T.plugins || []
          , R = C.reduce(function(Y, ae) {
            var ee = ae.name
              , K = ae.defaultValue;
            return ee && (Y[ee] = T[ee] !== void 0 ? T[ee] : K),
            Y
        }, {});
        return Object.assign({}, T, {}, R)
    }
    function os(T, C) {
        var R = C ? Object.keys(yt(Object.assign({}, lt, {
            plugins: C
        }))) : ns
          , Y = R.reduce(function(ae, ee) {
            var K = (T.getAttribute("data-tippy-" + ee) || "").trim();
            if (!K)
                return ae;
            if (ee === "content")
                ae[ee] = K;
            else
                try {
                    ae[ee] = JSON.parse(K)
                } catch {
                    ae[ee] = K
                }
            return ae
        }, {});
        return Y
    }
    function bi(T, C) {
        var R = Object.assign({}, C, {
            content: f(C.content, [T])
        }, C.ignoreAttributes ? {} : os(T, C.plugins));
        return R.aria = Object.assign({}, lt.aria, {}, R.aria),
        R.aria = {
            expanded: R.aria.expanded === "auto" ? C.interactive : R.aria.expanded,
            content: R.aria.content === "auto" ? C.interactive ? null : "describedby" : R.aria.content
        },
        R
    }
    function It(T, C) {
        T === void 0 && (T = {}),
        C === void 0 && (C = []);
        var R = Object.keys(T);
        R.forEach(function(Y) {
            var ae = b(lt, Object.keys(Ht))
              , ee = !c(ae, Y);
            ee && (ee = C.filter(function(K) {
                return K.name === Y
            }).length === 0),
            Lt(ee, ["`" + Y + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "))
        })
    }
    var Ft = function() {
        return "innerHTML"
    };
    function Ri(T, C) {
        T[Ft()] = C
    }
    function on(T) {
        var C = P();
        return T === !0 ? C.className = a : (C.className = o,
        q(T) ? C.appendChild(T) : Ri(C, T)),
        C
    }
    function dr(T, C) {
        q(C.content) ? (Ri(T, ""),
        T.appendChild(C.content)) : typeof C.content != "function" && (C.allowHTML ? Ri(T, C.content) : T.textContent = C.content)
    }
    function Ni(T) {
        var C = T.firstElementChild
          , R = _(C.children);
        return {
            box: C,
            content: R.find(function(Y) {
                return Y.classList.contains(r)
            }),
            arrow: R.find(function(Y) {
                return Y.classList.contains(a) || Y.classList.contains(o)
            }),
            backdrop: R.find(function(Y) {
                return Y.classList.contains(n)
            })
        }
    }
    function ln(T) {
        var C = P()
          , R = P();
        R.className = s,
        R.setAttribute("data-state", "hidden"),
        R.setAttribute("tabindex", "-1");
        var Y = P();
        Y.className = r,
        Y.setAttribute("data-state", "hidden"),
        dr(Y, T.props),
        C.appendChild(R),
        R.appendChild(Y),
        ae(T.props, T.props);
        function ae(ee, K) {
            var Se = Ni(C)
              , ve = Se.box
              , we = Se.content
              , Ce = Se.arrow;
            K.theme ? ve.setAttribute("data-theme", K.theme) : ve.removeAttribute("data-theme"),
            typeof K.animation == "string" ? ve.setAttribute("data-animation", K.animation) : ve.removeAttribute("data-animation"),
            K.inertia ? ve.setAttribute("data-inertia", "") : ve.removeAttribute("data-inertia"),
            ve.style.maxWidth = typeof K.maxWidth == "number" ? K.maxWidth + "px" : K.maxWidth,
            K.role ? ve.setAttribute("role", K.role) : ve.removeAttribute("role"),
            (ee.content !== K.content || ee.allowHTML !== K.allowHTML) && dr(we, T.props),
            K.arrow ? Ce ? ee.arrow !== K.arrow && (ve.removeChild(Ce),
            ve.appendChild(on(K.arrow))) : ve.appendChild(on(K.arrow)) : Ce && ve.removeChild(Ce)
        }
        return {
            popper: C,
            onUpdate: ae
        }
    }
    ln.$$tippy = !0;
    var cn = 1
      , Ds = []
      , Rs = [];
    function ls(T, C) {
        var R = bi(T, Object.assign({}, lt, {}, yt(N(C)))), Y, ae, ee, K = !1, Se = !1, ve = !1, we = !1, Ce, Fe, Qe, Le = [], Ge = p(qe, R.interactiveDebounce), he, Ee = cn++, xe = null, ue = E(R.plugins), me = {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
        }, $ = {
            id: Ee,
            reference: T,
            popper: P(),
            popperInstance: xe,
            props: R,
            state: me,
            plugins: ue,
            clearDelayTimeouts: Pi,
            setProps: ds,
            setContent: zi,
            show: Ai,
            hide: mr,
            hideWithInteractivity: ji,
            enable: oi,
            disable: St,
            unmount: Fs,
            destroy: gr
        };
        if (!R.render)
            return ri(!0, "render() function has not been supplied."),
            $;
        var mt = R.render($)
          , ye = mt.popper
          , $i = mt.onUpdate;
        ye.setAttribute("data-tippy-root", ""),
        ye.id = "tippy-" + $.id,
        $.popper = ye,
        T._tippy = $,
        ye._tippy = $;
        var ni = ue.map(function(V) {
            return V.fn($)
        })
          , Hi = T.hasAttribute("aria-expanded");
        return je(),
        B(),
        v(),
        S("onCreate", [$]),
        R.showOnCreate && it(),
        ye.addEventListener("mouseenter", function() {
            $.props.interactive && $.state.isVisible && $.clearDelayTimeouts()
        }),
        ye.addEventListener("mouseleave", function(V) {
            $.props.interactive && $.props.trigger.indexOf("mouseenter") >= 0 && (ai().addEventListener("mousemove", Ge),
            Ge(V))
        }),
        $;
        function Fi() {
            var V = $.props.touch;
            return Array.isArray(V) ? V : [V, 0]
        }
        function Bi() {
            return Fi()[0] === "hold"
        }
        function $t() {
            var V;
            return !!((V = $.props.render) != null && V.$$tippy)
        }
        function Bt() {
            return he || T
        }
        function ai() {
            var V = Bt().parentNode;
            return V ? D(V) : document
        }
        function us() {
            return Ni(ye)
        }
        function x(V) {
            return $.state.isMounted && !$.state.isVisible || L.isTouch || Ce && Ce.type === "focus" ? 0 : u($.props.delay, V ? 0 : 1, lt.delay)
        }
        function v() {
            ye.style.pointerEvents = $.props.interactive && $.state.isVisible ? "" : "none",
            ye.style.zIndex = "" + $.props.zIndex
        }
        function S(V, ce, de) {
            if (de === void 0 && (de = !0),
            ni.forEach(function(Ae) {
                Ae[V] && Ae[V].apply(void 0, ce)
            }),
            de) {
                var _e;
                (_e = $.props)[V].apply(_e, ce)
            }
        }
        function F() {
            var V = $.props.aria;
            if (V.content) {
                var ce = "aria-" + V.content
                  , de = ye.id
                  , _e = m($.props.triggerTarget || T);
                _e.forEach(function(Ae) {
                    var gt = Ae.getAttribute(ce);
                    if ($.state.isVisible)
                        Ae.setAttribute(ce, gt ? gt + " " + de : de);
                    else {
                        var vt = gt && gt.replace(de, "").trim();
                        vt ? Ae.setAttribute(ce, vt) : Ae.removeAttribute(ce)
                    }
                })
            }
        }
        function B() {
            if (!(Hi || !$.props.aria.expanded)) {
                var V = m($.props.triggerTarget || T);
                V.forEach(function(ce) {
                    $.props.interactive ? ce.setAttribute("aria-expanded", $.state.isVisible && ce === Bt() ? "true" : "false") : ce.removeAttribute("aria-expanded")
                })
            }
        }
        function X() {
            ai().removeEventListener("mousemove", Ge),
            Ds = Ds.filter(function(V) {
                return V !== Ge
            })
        }
        function te(V) {
            if (!(L.isTouch && (ve || V.type === "mousedown")) && !($.props.interactive && ye.contains(V.target))) {
                if (Bt().contains(V.target)) {
                    if (L.isTouch || $.state.isVisible && $.props.trigger.indexOf("click") >= 0)
                        return
                } else
                    S("onClickOutside", [$, V]);
                $.props.hideOnClick === !0 && ($.clearDelayTimeouts(),
                $.hide(),
                Se = !0,
                setTimeout(function() {
                    Se = !1
                }),
                $.state.isMounted || se())
            }
        }
        function Z() {
            ve = !0
        }
        function oe() {
            ve = !1
        }
        function ge() {
            var V = ai();
            V.addEventListener("mousedown", te, !0),
            V.addEventListener("touchend", te, l),
            V.addEventListener("touchstart", oe, l),
            V.addEventListener("touchmove", Z, l)
        }
        function se() {
            var V = ai();
            V.removeEventListener("mousedown", te, !0),
            V.removeEventListener("touchend", te, l),
            V.removeEventListener("touchstart", oe, l),
            V.removeEventListener("touchmove", Z, l)
        }
        function Ve(V, ce) {
            Ie(V, function() {
                !$.state.isVisible && ye.parentNode && ye.parentNode.contains(ye) && ce()
            })
        }
        function Ye(V, ce) {
            Ie(V, ce)
        }
        function Ie(V, ce) {
            var de = us().box;
            function _e(Ae) {
                Ae.target === de && (re(de, "remove", _e),
                ce())
            }
            if (V === 0)
                return ce();
            re(de, "remove", Fe),
            re(de, "add", _e),
            Fe = _e
        }
        function Oe(V, ce, de) {
            de === void 0 && (de = !1);
            var _e = m($.props.triggerTarget || T);
            _e.forEach(function(Ae) {
                Ae.addEventListener(V, ce, de),
                Le.push({
                    node: Ae,
                    eventType: V,
                    handler: ce,
                    options: de
                })
            })
        }
        function je() {
            Bi() && (Oe("touchstart", et, {
                passive: !0
            }),
            Oe("touchend", tt, {
                passive: !0
            })),
            w($.props.trigger).forEach(function(V) {
                if (V !== "manual")
                    switch (Oe(V, et),
                    V) {
                    case "mouseenter":
                        Oe("mouseleave", tt);
                        break;
                    case "focus":
                        Oe(le ? "focusout" : "blur", be);
                        break;
                    case "focusin":
                        Oe("focusout", be);
                        break
                    }
            })
        }
        function ke() {
            Le.forEach(function(V) {
                var ce = V.node
                  , de = V.eventType
                  , _e = V.handler
                  , Ae = V.options;
                ce.removeEventListener(de, _e, Ae)
            }),
            Le = []
        }
        function et(V) {
            var ce, de = !1;
            if (!(!$.state.isEnabled || Be(V) || Se)) {
                var _e = ((ce = Ce) == null ? void 0 : ce.type) === "focus";
                Ce = V,
                he = V.currentTarget,
                B(),
                !$.state.isVisible && I(V) && Ds.forEach(function(Ae) {
                    return Ae(V)
                }),
                V.type === "click" && ($.props.trigger.indexOf("mouseenter") < 0 || K) && $.props.hideOnClick !== !1 && $.state.isVisible ? de = !0 : it(V),
                V.type === "click" && (K = !de),
                de && !_e && rt(V)
            }
        }
        function qe(V) {
            var ce = V.target
              , de = Bt().contains(ce) || ye.contains(ce);
            if (!(V.type === "mousemove" && de)) {
                var _e = ct().concat(ye).map(function(Ae) {
                    var gt, vt = Ae._tippy, yi = (gt = vt.popperInstance) == null ? void 0 : gt.state;
                    return yi ? {
                        popperRect: Ae.getBoundingClientRect(),
                        popperState: yi,
                        props: R
                    } : null
                }).filter(Boolean);
                W(_e, V) && (X(),
                rt(V))
            }
        }
        function tt(V) {
            var ce = Be(V) || $.props.trigger.indexOf("click") >= 0 && K;
            if (!ce) {
                if ($.props.interactive) {
                    $.hideWithInteractivity(V);
                    return
                }
                rt(V)
            }
        }
        function be(V) {
            $.props.trigger.indexOf("focusin") < 0 && V.target !== Bt() || $.props.interactive && V.relatedTarget && ye.contains(V.relatedTarget) || rt(V)
        }
        function Be(V) {
            return L.isTouch ? Bi() !== V.type.indexOf("touch") >= 0 : !1
        }
        function He() {
            Xe();
            var V = $.props
              , ce = V.popperOptions
              , de = V.placement
              , _e = V.offset
              , Ae = V.getReferenceClientRect
              , gt = V.moveTransition
              , vt = $t() ? Ni(ye).arrow : null
              , yi = Ae ? {
                getBoundingClientRect: Ae,
                contextElement: Ae.contextElement || Bt()
            } : T
              , vr = {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function(fs) {
                    var qi = fs.state;
                    if ($t()) {
                        var $a = us()
                          , Gi = $a.box;
                        ["placement", "reference-hidden", "escaped"].forEach(function(hs) {
                            hs === "placement" ? Gi.setAttribute("data-placement", qi.placement) : qi.attributes.popper["data-popper-" + hs] ? Gi.setAttribute("data-" + hs, "") : Gi.removeAttribute("data-" + hs)
                        }),
                        qi.attributes.popper = {}
                    }
                }
            }
              , wi = [{
                name: "offset",
                options: {
                    offset: _e
                }
            }, {
                name: "preventOverflow",
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            }, {
                name: "flip",
                options: {
                    padding: 5
                }
            }, {
                name: "computeStyles",
                options: {
                    adaptive: !gt
                }
            }, vr];
            $t() && vt && wi.push({
                name: "arrow",
                options: {
                    element: vt,
                    padding: 3
                }
            }),
            wi.push.apply(wi, (ce == null ? void 0 : ce.modifiers) || []),
            $.popperInstance = e.createPopper(yi, ye, Object.assign({}, ce, {
                placement: de,
                onFirstUpdate: Qe,
                modifiers: wi
            }))
        }
        function Xe() {
            $.popperInstance && ($.popperInstance.destroy(),
            $.popperInstance = null)
        }
        function We() {
            var V = $.props.appendTo, ce, de = Bt();
            $.props.interactive && V === lt.appendTo || V === "parent" ? ce = de.parentNode : ce = f(V, [de]),
            ce.contains(ye) || ce.appendChild(ye),
            He(),
            Lt($.props.interactive && V === lt.appendTo && de.nextElementSibling !== ye, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "))
        }
        function ct() {
            return _(ye.querySelectorAll("[data-tippy-root]"))
        }
        function it(V) {
            $.clearDelayTimeouts(),
            V && S("onTrigger", [$, V]),
            ge();
            var ce = x(!0)
              , de = Fi()
              , _e = de[0]
              , Ae = de[1];
            L.isTouch && _e === "hold" && Ae && (ce = Ae),
            ce ? Y = setTimeout(function() {
                $.show()
            }, ce) : $.show()
        }
        function rt(V) {
            if ($.clearDelayTimeouts(),
            S("onUntrigger", [$, V]),
            !$.state.isVisible) {
                se();
                return
            }
            if (!($.props.trigger.indexOf("mouseenter") >= 0 && $.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(V.type) >= 0 && K)) {
                var ce = x(!1);
                ce ? ae = setTimeout(function() {
                    $.state.isVisible && $.hide()
                }, ce) : ee = requestAnimationFrame(function() {
                    $.hide()
                })
            }
        }
        function oi() {
            $.state.isEnabled = !0
        }
        function St() {
            $.hide(),
            $.state.isEnabled = !1
        }
        function Pi() {
            clearTimeout(Y),
            clearTimeout(ae),
            cancelAnimationFrame(ee)
        }
        function ds(V) {
            if (Lt($.state.isDestroyed, Te("setProps")),
            !$.state.isDestroyed) {
                S("onBeforeUpdate", [$, V]),
                ke();
                var ce = $.props
                  , de = bi(T, Object.assign({}, $.props, {}, V, {
                    ignoreAttributes: !0
                }));
                $.props = de,
                je(),
                ce.interactiveDebounce !== de.interactiveDebounce && (X(),
                Ge = p(qe, de.interactiveDebounce)),
                ce.triggerTarget && !de.triggerTarget ? m(ce.triggerTarget).forEach(function(_e) {
                    _e.removeAttribute("aria-expanded")
                }) : de.triggerTarget && T.removeAttribute("aria-expanded"),
                B(),
                v(),
                $i && $i(ce, de),
                $.popperInstance && (He(),
                ct().forEach(function(_e) {
                    requestAnimationFrame(_e._tippy.popperInstance.forceUpdate)
                })),
                S("onAfterUpdate", [$, V])
            }
        }
        function zi(V) {
            $.setProps({
                content: V
            })
        }
        function Ai() {
            Lt($.state.isDestroyed, Te("show"));
            var V = $.state.isVisible
              , ce = $.state.isDestroyed
              , de = !$.state.isEnabled
              , _e = L.isTouch && !$.props.touch
              , Ae = u($.props.duration, 0, lt.duration);
            if (!(V || ce || de || _e) && !Bt().hasAttribute("disabled") && (S("onShow", [$], !1),
            $.props.onShow($) !== !1)) {
                if ($.state.isVisible = !0,
                $t() && (ye.style.visibility = "visible"),
                v(),
                ge(),
                $.state.isMounted || (ye.style.transition = "none"),
                $t()) {
                    var gt = us()
                      , vt = gt.box
                      , yi = gt.content;
                    O([vt, yi], 0)
                }
                Qe = function() {
                    var wi;
                    if (!(!$.state.isVisible || we)) {
                        if (we = !0,
                        ye.offsetHeight,
                        ye.style.transition = $.props.moveTransition,
                        $t() && $.props.animation) {
                            var Bs = us()
                              , fs = Bs.box
                              , qi = Bs.content;
                            O([fs, qi], Ae),
                            A([fs, qi], "visible")
                        }
                        F(),
                        B(),
                        h(Rs, $),
                        (wi = $.popperInstance) == null || wi.forceUpdate(),
                        $.state.isMounted = !0,
                        S("onMount", [$]),
                        $.props.animation && $t() && Ye(Ae, function() {
                            $.state.isShown = !0,
                            S("onShown", [$])
                        })
                    }
                }
                ,
                We()
            }
        }
        function mr() {
            Lt($.state.isDestroyed, Te("hide"));
            var V = !$.state.isVisible
              , ce = $.state.isDestroyed
              , de = !$.state.isEnabled
              , _e = u($.props.duration, 1, lt.duration);
            if (!(V || ce || de) && (S("onHide", [$], !1),
            $.props.onHide($) !== !1)) {
                if ($.state.isVisible = !1,
                $.state.isShown = !1,
                we = !1,
                K = !1,
                $t() && (ye.style.visibility = "hidden"),
                X(),
                se(),
                v(),
                $t()) {
                    var Ae = us()
                      , gt = Ae.box
                      , vt = Ae.content;
                    $.props.animation && (O([gt, vt], _e),
                    A([gt, vt], "hidden"))
                }
                F(),
                B(),
                $.props.animation ? $t() && Ve(_e, $.unmount) : $.unmount()
            }
        }
        function ji(V) {
            Lt($.state.isDestroyed, Te("hideWithInteractivity")),
            ai().addEventListener("mousemove", Ge),
            h(Ds, Ge),
            Ge(V)
        }
        function Fs() {
            Lt($.state.isDestroyed, Te("unmount")),
            $.state.isVisible && $.hide(),
            $.state.isMounted && (Xe(),
            ct().forEach(function(V) {
                V._tippy.unmount()
            }),
            ye.parentNode && ye.parentNode.removeChild(ye),
            Rs = Rs.filter(function(V) {
                return V !== $
            }),
            $.state.isMounted = !1,
            S("onHidden", [$]))
        }
        function gr() {
            Lt($.state.isDestroyed, Te("destroy")),
            !$.state.isDestroyed && ($.clearDelayTimeouts(),
            $.unmount(),
            ke(),
            delete T._tippy,
            $.state.isDestroyed = !0,
            S("onDestroy", [$]))
        }
    }
    function Ut(T, C) {
        C === void 0 && (C = {});
        var R = lt.plugins.concat(C.plugins || []);
        Vt(T),
        It(C, R),
        J();
        var Y = Object.assign({}, C, {
            plugins: R
        })
          , ae = j(T);
        {
            var ee = q(Y.content)
              , K = ae.length > 1;
            Lt(ee && K, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "))
        }
        var Se = ae.reduce(function(ve, we) {
            var Ce = we && ls(we, Y);
            return Ce && ve.push(Ce),
            ve
        }, []);
        return q(T) ? Se[0] : Se
    }
    Ut.defaultProps = lt,
    Ut.setDefaultProps = as,
    Ut.currentInput = L;
    var un = function(C) {
        var R = C === void 0 ? {} : C
          , Y = R.exclude
          , ae = R.duration;
        Rs.forEach(function(ee) {
            var K = !1;
            if (Y && (K = M(Y) ? ee.reference === Y : ee.popper === Y.popper),
            !K) {
                var Se = ee.props.duration;
                ee.setProps({
                    duration: ae
                }),
                ee.hide(),
                ee.state.isDestroyed || ee.setProps({
                    duration: Se
                })
            }
        })
    }
      , dn = Object.assign({}, e.applyStyles, {
        effect: function(C) {
            var R = C.state
              , Y = {
                popper: {
                    position: R.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(R.elements.popper.style, Y.popper),
            R.styles = Y,
            R.elements.arrow && Object.assign(R.elements.arrow.style, Y.arrow)
        }
    })
      , fn = function(C, R) {
        var Y;
        R === void 0 && (R = {}),
        ri(!Array.isArray(C), ["The first argument passed to createSingleton() must be an array of", "tippy instances. The passed value was", String(C)].join(" "));
        var ae = C, ee = [], K, Se = R.overrides, ve = [], we = !1;
        function Ce() {
            ee = ae.map(function(ue) {
                return ue.reference
            })
        }
        function Fe(ue) {
            ae.forEach(function(me) {
                ue ? me.enable() : me.disable()
            })
        }
        function Qe(ue) {
            return ae.map(function(me) {
                var $ = me.setProps;
                return me.setProps = function(mt) {
                    $(mt),
                    me.reference === K && ue.setProps(mt)
                }
                ,
                function() {
                    me.setProps = $
                }
            })
        }
        function Le(ue, me) {
            var $ = ee.indexOf(me);
            if (me !== K) {
                K = me;
                var mt = (Se || []).concat("content").reduce(function(ye, $i) {
                    return ye[$i] = ae[$].props[$i],
                    ye
                }, {});
                ue.setProps(Object.assign({}, mt, {
                    getReferenceClientRect: typeof mt.getReferenceClientRect == "function" ? mt.getReferenceClientRect : function() {
                        return me.getBoundingClientRect()
                    }
                }))
            }
        }
        Fe(!1),
        Ce();
        var Ge = {
            fn: function() {
                return {
                    onDestroy: function() {
                        Fe(!0)
                    },
                    onHidden: function() {
                        K = null
                    },
                    onClickOutside: function($) {
                        $.props.showOnCreate && !we && (we = !0,
                        K = null)
                    },
                    onShow: function($) {
                        $.props.showOnCreate && !we && (we = !0,
                        Le($, ee[0]))
                    },
                    onTrigger: function($, mt) {
                        Le($, mt.currentTarget)
                    }
                }
            }
        }
          , he = Ut(P(), Object.assign({}, b(R, ["overrides"]), {
            plugins: [Ge].concat(R.plugins || []),
            triggerTarget: ee,
            popperOptions: Object.assign({}, R.popperOptions, {
                modifiers: [].concat(((Y = R.popperOptions) == null ? void 0 : Y.modifiers) || [], [dn])
            })
        }))
          , Ee = he.show;
        he.show = function(ue) {
            if (Ee(),
            !K && ue == null)
                return Le(he, ee[0]);
            if (!(K && ue == null)) {
                if (typeof ue == "number")
                    return ee[ue] && Le(he, ee[ue]);
                if (ae.includes(ue)) {
                    var me = ue.reference;
                    return Le(he, me)
                }
                if (ee.includes(ue))
                    return Le(he, ue)
            }
        }
        ,
        he.showNext = function() {
            var ue = ee[0];
            if (!K)
                return he.show(0);
            var me = ee.indexOf(K);
            he.show(ee[me + 1] || ue)
        }
        ,
        he.showPrevious = function() {
            var ue = ee[ee.length - 1];
            if (!K)
                return he.show(ue);
            var me = ee.indexOf(K)
              , $ = ee[me - 1] || ue;
            he.show($)
        }
        ;
        var xe = he.setProps;
        return he.setProps = function(ue) {
            Se = ue.overrides || Se,
            xe(ue)
        }
        ,
        he.setInstances = function(ue) {
            Fe(!0),
            ve.forEach(function(me) {
                return me()
            }),
            ae = ue,
            Fe(!1),
            Ce(),
            Qe(he),
            he.setProps({
                triggerTarget: ee
            })
        }
        ,
        ve = Qe(he),
        he
    }
      , hn = {
        mouseover: "mouseenter",
        focusin: "focus",
        click: "click"
    };
    function Vi(T, C) {
        ri(!(C && C.target), ["You must specity a `target` prop indicating a CSS selector string matching", "the target elements that should receive a tippy."].join(" "));
        var R = []
          , Y = []
          , ae = !1
          , ee = C.target
          , K = b(C, ["target"])
          , Se = Object.assign({}, K, {
            trigger: "manual",
            touch: !1
        })
          , ve = Object.assign({}, K, {
            showOnCreate: !0
        })
          , we = Ut(T, Se)
          , Ce = m(we);
        function Fe(Ee) {
            if (!(!Ee.target || ae)) {
                var xe = Ee.target.closest(ee);
                if (xe) {
                    var ue = xe.getAttribute("data-tippy-trigger") || C.trigger || lt.trigger;
                    if (!xe._tippy && !(Ee.type === "touchstart" && typeof ve.touch == "boolean") && !(Ee.type !== "touchstart" && ue.indexOf(hn[Ee.type]) < 0)) {
                        var me = Ut(xe, ve);
                        me && (Y = Y.concat(me))
                    }
                }
            }
        }
        function Qe(Ee, xe, ue, me) {
            me === void 0 && (me = !1),
            Ee.addEventListener(xe, ue, me),
            R.push({
                node: Ee,
                eventType: xe,
                handler: ue,
                options: me
            })
        }
        function Le(Ee) {
            var xe = Ee.reference;
            Qe(xe, "touchstart", Fe, l),
            Qe(xe, "mouseover", Fe),
            Qe(xe, "focusin", Fe),
            Qe(xe, "click", Fe)
        }
        function Ge() {
            R.forEach(function(Ee) {
                var xe = Ee.node
                  , ue = Ee.eventType
                  , me = Ee.handler
                  , $ = Ee.options;
                xe.removeEventListener(ue, me, $)
            }),
            R = []
        }
        function he(Ee) {
            var xe = Ee.destroy
              , ue = Ee.enable
              , me = Ee.disable;
            Ee.destroy = function($) {
                $ === void 0 && ($ = !0),
                $ && Y.forEach(function(mt) {
                    mt.destroy()
                }),
                Y = [],
                Ge(),
                xe()
            }
            ,
            Ee.enable = function() {
                ue(),
                Y.forEach(function($) {
                    return $.enable()
                }),
                ae = !1
            }
            ,
            Ee.disable = function() {
                me(),
                Y.forEach(function($) {
                    return $.disable()
                }),
                ae = !0
            }
            ,
            Le(Ee)
        }
        return Ce.forEach(he),
        we
    }
    var pn = {
        name: "animateFill",
        defaultValue: !1,
        fn: function(C) {
            var R;
            if (!((R = C.props.render) != null && R.$$tippy))
                return ri(C.props.animateFill, "The `animateFill` plugin requires the default render function."),
                {};
            var Y = Ni(C.popper)
              , ae = Y.box
              , ee = Y.content
              , K = C.props.animateFill ? xa() : null;
            return {
                onCreate: function() {
                    K && (ae.insertBefore(K, ae.firstElementChild),
                    ae.setAttribute("data-animatefill", ""),
                    ae.style.overflow = "hidden",
                    C.setProps({
                        arrow: !1,
                        animation: "shift-away"
                    }))
                },
                onMount: function() {
                    if (K) {
                        var ve = ae.style.transitionDuration
                          , we = Number(ve.replace("ms", ""));
                        ee.style.transitionDelay = Math.round(we / 10) + "ms",
                        K.style.transitionDuration = ve,
                        A([K], "visible")
                    }
                },
                onShow: function() {
                    K && (K.style.transitionDuration = "0ms")
                },
                onHide: function() {
                    K && A([K], "hidden")
                }
            }
        }
    };
    function xa() {
        var T = P();
        return T.className = n,
        A([T], "hidden"),
        T
    }
    var Ns = {
        clientX: 0,
        clientY: 0
    }
      , cs = [];
    function Vs(T) {
        var C = T.clientX
          , R = T.clientY;
        Ns = {
            clientX: C,
            clientY: R
        }
    }
    function Hs(T) {
        T.addEventListener("mousemove", Vs)
    }
    function _a(T) {
        T.removeEventListener("mousemove", Vs)
    }
    var fr = {
        name: "followCursor",
        defaultValue: !1,
        fn: function(C) {
            var R = C.reference
              , Y = D(C.props.triggerTarget || R)
              , ae = !1
              , ee = !1
              , K = !0
              , Se = C.props;
            function ve() {
                return C.props.followCursor === "initial" && C.state.isVisible
            }
            function we() {
                Y.addEventListener("mousemove", Qe)
            }
            function Ce() {
                Y.removeEventListener("mousemove", Qe)
            }
            function Fe() {
                ae = !0,
                C.setProps({
                    getReferenceClientRect: null
                }),
                ae = !1
            }
            function Qe(he) {
                var Ee = he.target ? R.contains(he.target) : !0
                  , xe = C.props.followCursor
                  , ue = he.clientX
                  , me = he.clientY
                  , $ = R.getBoundingClientRect()
                  , mt = ue - $.left
                  , ye = me - $.top;
                (Ee || !C.props.interactive) && C.setProps({
                    getReferenceClientRect: function() {
                        var ni = R.getBoundingClientRect()
                          , Hi = ue
                          , Fi = me;
                        xe === "initial" && (Hi = ni.left + mt,
                        Fi = ni.top + ye);
                        var Bi = xe === "horizontal" ? ni.top : Fi
                          , $t = xe === "vertical" ? ni.right : Hi
                          , Bt = xe === "horizontal" ? ni.bottom : Fi
                          , ai = xe === "vertical" ? ni.left : Hi;
                        return {
                            width: $t - ai,
                            height: Bt - Bi,
                            top: Bi,
                            right: $t,
                            bottom: Bt,
                            left: ai
                        }
                    }
                })
            }
            function Le() {
                C.props.followCursor && (cs.push({
                    instance: C,
                    doc: Y
                }),
                Hs(Y))
            }
            function Ge() {
                cs = cs.filter(function(he) {
                    return he.instance !== C
                }),
                cs.filter(function(he) {
                    return he.doc === Y
                }).length === 0 && _a(Y)
            }
            return {
                onCreate: Le,
                onDestroy: Ge,
                onBeforeUpdate: function() {
                    Se = C.props
                },
                onAfterUpdate: function(Ee, xe) {
                    var ue = xe.followCursor;
                    ae || ue !== void 0 && Se.followCursor !== ue && (Ge(),
                    ue ? (Le(),
                    C.state.isMounted && !ee && !ve() && we()) : (Ce(),
                    Fe()))
                },
                onMount: function() {
                    C.props.followCursor && !ee && (K && (Qe(Ns),
                    K = !1),
                    ve() || we())
                },
                onTrigger: function(Ee, xe) {
                    I(xe) && (Ns = {
                        clientX: xe.clientX,
                        clientY: xe.clientY
                    }),
                    ee = xe.type === "focus"
                },
                onHidden: function() {
                    C.props.followCursor && (Fe(),
                    Ce(),
                    K = !0)
                }
            }
        }
    };
    function Ta(T, C) {
        var R;
        return {
            popperOptions: Object.assign({}, T.popperOptions, {
                modifiers: [].concat((((R = T.popperOptions) == null ? void 0 : R.modifiers) || []).filter(function(Y) {
                    var ae = Y.name;
                    return ae !== C.name
                }), [C])
            })
        }
    }
    var hr = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function(C) {
            var R = C.reference;
            function Y() {
                return !!C.props.inlinePositioning
            }
            var ae, ee = -1, K = !1, Se = {
                name: "tippyInlinePositioning",
                enabled: !0,
                phase: "afterWrite",
                fn: function(Qe) {
                    var Le = Qe.state;
                    Y() && (ae !== Le.placement && C.setProps({
                        getReferenceClientRect: function() {
                            return ve(Le.placement)
                        }
                    }),
                    ae = Le.placement)
                }
            };
            function ve(Fe) {
                return Sa(y(Fe), R.getBoundingClientRect(), _(R.getClientRects()), ee)
            }
            function we(Fe) {
                K = !0,
                C.setProps(Fe),
                K = !1
            }
            function Ce() {
                K || we(Ta(C.props, Se))
            }
            return {
                onCreate: Ce,
                onAfterUpdate: Ce,
                onTrigger: function(Qe, Le) {
                    if (I(Le)) {
                        var Ge = _(C.reference.getClientRects())
                          , he = Ge.find(function(Ee) {
                            return Ee.left - 2 <= Le.clientX && Ee.right + 2 >= Le.clientX && Ee.top - 2 <= Le.clientY && Ee.bottom + 2 >= Le.clientY
                        });
                        ee = Ge.indexOf(he)
                    }
                },
                onUntrigger: function() {
                    ee = -1
                }
            }
        }
    };
    function Sa(T, C, R, Y) {
        if (R.length < 2 || T === null)
            return C;
        if (R.length === 2 && Y >= 0 && R[0].left > R[1].right)
            return R[Y] || C;
        switch (T) {
        case "top":
        case "bottom":
            {
                var ae = R[0]
                  , ee = R[R.length - 1]
                  , K = T === "top"
                  , Se = ae.top
                  , ve = ee.bottom
                  , we = K ? ae.left : ee.left
                  , Ce = K ? ae.right : ee.right
                  , Fe = Ce - we
                  , Qe = ve - Se;
                return {
                    top: Se,
                    bottom: ve,
                    left: we,
                    right: Ce,
                    width: Fe,
                    height: Qe
                }
            }
        case "left":
        case "right":
            {
                var Le = Math.min.apply(Math, R.map(function(ye) {
                    return ye.left
                }))
                  , Ge = Math.max.apply(Math, R.map(function(ye) {
                    return ye.right
                }))
                  , he = R.filter(function(ye) {
                    return T === "left" ? ye.left === Le : ye.right === Ge
                })
                  , Ee = he[0].top
                  , xe = he[he.length - 1].bottom
                  , ue = Le
                  , me = Ge
                  , $ = me - ue
                  , mt = xe - Ee;
                return {
                    top: Ee,
                    bottom: xe,
                    left: ue,
                    right: me,
                    width: $,
                    height: mt
                }
            }
        default:
            return C
        }
    }
    var Ca = {
        name: "sticky",
        defaultValue: !1,
        fn: function(C) {
            var R = C.reference
              , Y = C.popper;
            function ae() {
                return C.popperInstance ? C.popperInstance.state.elements.reference : R
            }
            function ee(we) {
                return C.props.sticky === !0 || C.props.sticky === we
            }
            var K = null
              , Se = null;
            function ve() {
                var we = ee("reference") ? ae().getBoundingClientRect() : null
                  , Ce = ee("popper") ? Y.getBoundingClientRect() : null;
                (we && pr(K, we) || Ce && pr(Se, Ce)) && C.popperInstance && C.popperInstance.update(),
                K = we,
                Se = Ce,
                C.state.isMounted && requestAnimationFrame(ve)
            }
            return {
                onMount: function() {
                    C.props.sticky && ve()
                }
            }
        }
    };
    function pr(T, C) {
        return T && C ? T.top !== C.top || T.right !== C.right || T.bottom !== C.bottom || T.left !== C.left : !0
    }
    Ut.setDefaultProps({
        render: ln
    }),
    i.animateFill = pn,
    i.createSingleton = fn,
    i.default = Ut,
    i.delegate = Vi,
    i.followCursor = fr,
    i.hideAll = un,
    i.inlinePositioning = hr,
    i.roundArrow = t,
    i.sticky = Ca
}
)
  , Oo = qf(Gf())
  , V1 = qf(Gf())
  , H1 = i=>{
    const e = {
        plugins: []
    }
      , t = r=>i[i.indexOf(r) + 1];
    if (i.includes("animation") && (e.animation = t("animation")),
    i.includes("duration") && (e.duration = parseInt(t("duration"))),
    i.includes("delay")) {
        const r = t("delay");
        e.delay = r.includes("-") ? r.split("-").map(n=>parseInt(n)) : parseInt(r)
    }
    if (i.includes("cursor")) {
        e.plugins.push(V1.followCursor);
        const r = t("cursor");
        ["x", "initial"].includes(r) ? e.followCursor = r === "x" ? "horizontal" : "initial" : e.followCursor = !0
    }
    i.includes("on") && (e.trigger = t("on")),
    i.includes("arrowless") && (e.arrow = !1),
    i.includes("html") && (e.allowHTML = !0),
    i.includes("interactive") && (e.interactive = !0),
    i.includes("border") && e.interactive && (e.interactiveBorder = parseInt(t("border"))),
    i.includes("debounce") && e.interactive && (e.interactiveDebounce = parseInt(t("debounce"))),
    i.includes("max-width") && (e.maxWidth = parseInt(t("max-width"))),
    i.includes("theme") && (e.theme = t("theme")),
    i.includes("placement") && (e.placement = t("placement"));
    const s = {};
    return i.includes("no-flip") && (s.modifiers || (s.modifiers = []),
    s.modifiers.push({
        name: "flip",
        enabled: !1
    })),
    e.popperOptions = s,
    e
}
;
function ko(i) {
    i.magic("tooltip", e=>(t,s={})=>{
        const r = s.timeout;
        delete s.timeout;
        const n = (0,
        Oo.default)(e, {
            content: t,
            trigger: "manual",
            ...s
        });
        n.show(),
        setTimeout(()=>{
            n.hide(),
            setTimeout(()=>n.destroy(), s.duration || 300)
        }
        , r || 2e3)
    }
    ),
    i.directive("tooltip", (e,{modifiers: t, expression: s},{evaluateLater: r, effect: n})=>{
        const a = t.length > 0 ? H1(t) : {};
        e.__x_tippy || (e.__x_tippy = (0,
        Oo.default)(e, a));
        const o = ()=>e.__x_tippy.enable()
          , l = ()=>e.__x_tippy.disable()
          , c = u=>{
            u ? (o(),
            e.__x_tippy.setContent(u)) : l()
        }
        ;
        if (t.includes("raw"))
            c(s);
        else {
            const u = r(s);
            n(()=>{
                u(d=>{
                    typeof d == "object" ? (e.__x_tippy.setProps(d),
                    o()) : c(d)
                }
                )
            }
            )
        }
    }
    )
}
ko.defaultProps = i=>(Oo.default.setDefaultProps(i),
ko);
var F1 = ko
  , B1 = F1;
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.1.0
*/
const Wf = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , Kn = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , rn = Object.freeze({
    ...Wf,
    ...Kn
})
  , Lo = Object.freeze({
    ...rn,
    body: "",
    hidden: !1
})
  , z1 = Object.freeze({
    width: null,
    height: null
})
  , Yf = Object.freeze({
    ...z1,
    ...Kn
});
function j1(i, e=0) {
    const t = i.replace(/^-?[0-9.]*/, "");
    function s(r) {
        for (; r < 0; )
            r += 4;
        return r % 4
    }
    if (t === "") {
        const r = parseInt(i);
        return isNaN(r) ? 0 : s(r)
    } else if (t !== i) {
        let r = 0;
        switch (t) {
        case "%":
            r = 25;
            break;
        case "deg":
            r = 90
        }
        if (r) {
            let n = parseFloat(i.slice(0, i.length - t.length));
            return isNaN(n) ? 0 : (n = n / r,
            n % 1 === 0 ? s(n) : 0)
        }
    }
    return e
}
const q1 = /[\s,]+/;
function G1(i, e) {
    e.split(q1).forEach(t=>{
        switch (t.trim()) {
        case "horizontal":
            i.hFlip = !0;
            break;
        case "vertical":
            i.vFlip = !0;
            break
        }
    }
    )
}
const Xf = {
    ...Yf,
    preserveAspectRatio: ""
};
function Xc(i) {
    const e = {
        ...Xf
    }
      , t = (s,r)=>i.getAttribute(s) || r;
    return e.width = t("width", null),
    e.height = t("height", null),
    e.rotate = j1(t("rotate", "")),
    G1(e, t("flip", "")),
    e.preserveAspectRatio = t("preserveAspectRatio", t("preserveaspectratio", "")),
    e
}
function W1(i, e) {
    for (const t in Xf)
        if (i[t] !== e[t])
            return !0;
    return !1
}
const Nr = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , nn = (i,e,t,s="")=>{
    const r = i.split(":");
    if (i.slice(0, 1) === "@") {
        if (r.length < 2 || r.length > 3)
            return null;
        s = r.shift().slice(1)
    }
    if (r.length > 3 || !r.length)
        return null;
    if (r.length > 1) {
        const o = r.pop()
          , l = r.pop()
          , c = {
            provider: r.length > 0 ? r[0] : s,
            prefix: l,
            name: o
        };
        return e && !Dn(c) ? null : c
    }
    const n = r[0]
      , a = n.split("-");
    if (a.length > 1) {
        const o = {
            provider: s,
            prefix: a.shift(),
            name: a.join("-")
        };
        return e && !Dn(o) ? null : o
    }
    if (t && s === "") {
        const o = {
            provider: s,
            prefix: "",
            name: n
        };
        return e && !Dn(o, t) ? null : o
    }
    return null
}
  , Dn = (i,e)=>i ? !!((i.provider === "" || i.provider.match(Nr)) && (e && i.prefix === "" || i.prefix.match(Nr)) && i.name.match(Nr)) : !1;
function Y1(i, e) {
    const t = {};
    !i.hFlip != !e.hFlip && (t.hFlip = !0),
    !i.vFlip != !e.vFlip && (t.vFlip = !0);
    const s = ((i.rotate || 0) + (e.rotate || 0)) % 4;
    return s && (t.rotate = s),
    t
}
function Uc(i, e) {
    const t = Y1(i, e);
    for (const s in Lo)
        s in Kn ? s in i && !(s in t) && (t[s] = Kn[s]) : s in e ? t[s] = e[s] : s in i && (t[s] = i[s]);
    return t
}
function X1(i, e) {
    const t = i.icons
      , s = i.aliases || Object.create(null)
      , r = Object.create(null);
    function n(a) {
        if (t[a])
            return r[a] = [];
        if (!(a in r)) {
            r[a] = null;
            const o = s[a] && s[a].parent
              , l = o && n(o);
            l && (r[a] = [o].concat(l))
        }
        return r[a]
    }
    return (e || Object.keys(t).concat(Object.keys(s))).forEach(n),
    r
}
function U1(i, e, t) {
    const s = i.icons
      , r = i.aliases || Object.create(null);
    let n = {};
    function a(o) {
        n = Uc(s[o] || r[o], n)
    }
    return a(e),
    t.forEach(a),
    Uc(i, n)
}
function Uf(i, e) {
    const t = [];
    if (typeof i != "object" || typeof i.icons != "object")
        return t;
    i.not_found instanceof Array && i.not_found.forEach(r=>{
        e(r, null),
        t.push(r)
    }
    );
    const s = X1(i);
    for (const r in s) {
        const n = s[r];
        n && (e(r, U1(i, r, n)),
        t.push(r))
    }
    return t
}
const K1 = {
    provider: "",
    aliases: {},
    not_found: {},
    ...Wf
};
function Ba(i, e) {
    for (const t in e)
        if (t in i && typeof i[t] != typeof e[t])
            return !1;
    return !0
}
function Kf(i) {
    if (typeof i != "object" || i === null)
        return null;
    const e = i;
    if (typeof e.prefix != "string" || !i.icons || typeof i.icons != "object" || !Ba(i, K1))
        return null;
    const t = e.icons;
    for (const r in t) {
        const n = t[r];
        if (!r.match(Nr) || typeof n.body != "string" || !Ba(n, Lo))
            return null
    }
    const s = e.aliases || Object.create(null);
    for (const r in s) {
        const n = s[r]
          , a = n.parent;
        if (!r.match(Nr) || typeof a != "string" || !t[a] && !s[a] || !Ba(n, Lo))
            return null
    }
    return e
}
const Zn = Object.create(null);
function Z1(i, e) {
    return {
        provider: i,
        prefix: e,
        icons: Object.create(null),
        missing: new Set
    }
}
function ts(i, e) {
    const t = Zn[i] || (Zn[i] = Object.create(null));
    return t[e] || (t[e] = Z1(i, e))
}
function Bl(i, e) {
    return Kf(e) ? Uf(e, (t,s)=>{
        s ? i.icons[t] = s : i.missing.add(t)
    }
    ) : []
}
function J1(i, e, t) {
    try {
        if (typeof t.body == "string")
            return i.icons[e] = {
                ...t
            },
            !0
    } catch {}
    return !1
}
function Q1(i, e) {
    let t = [];
    return (typeof i == "string" ? [i] : Object.keys(Zn)).forEach(r=>{
        (typeof r == "string" && typeof e == "string" ? [e] : Object.keys(Zn[r] || {})).forEach(a=>{
            const o = ts(r, a);
            t = t.concat(Object.keys(o.icons).map(l=>(r !== "" ? "@" + r + ":" : "") + a + ":" + l))
        }
        )
    }
    ),
    t
}
let zr = !1;
function Zf(i) {
    return typeof i == "boolean" && (zr = i),
    zr
}
function jr(i) {
    const e = typeof i == "string" ? nn(i, !0, zr) : i;
    if (e) {
        const t = ts(e.provider, e.prefix)
          , s = e.name;
        return t.icons[s] || (t.missing.has(s) ? null : void 0)
    }
}
function Jf(i, e) {
    const t = nn(i, !0, zr);
    if (!t)
        return !1;
    const s = ts(t.provider, t.prefix);
    return J1(s, t.name, e)
}
function Kc(i, e) {
    if (typeof i != "object")
        return !1;
    if (typeof e != "string" && (e = i.provider || ""),
    zr && !e && !i.prefix) {
        let r = !1;
        return Kf(i) && (i.prefix = "",
        Uf(i, (n,a)=>{
            a && Jf(n, a) && (r = !0)
        }
        )),
        r
    }
    const t = i.prefix;
    if (!Dn({
        provider: e,
        prefix: t,
        name: "a"
    }))
        return !1;
    const s = ts(e, t);
    return !!Bl(s, i)
}
function Zc(i) {
    return !!jr(i)
}
function ey(i) {
    const e = jr(i);
    return e ? {
        ...rn,
        ...e
    } : null
}
function ty(i) {
    const e = {
        loaded: [],
        missing: [],
        pending: []
    }
      , t = Object.create(null);
    i.sort((r,n)=>r.provider !== n.provider ? r.provider.localeCompare(n.provider) : r.prefix !== n.prefix ? r.prefix.localeCompare(n.prefix) : r.name.localeCompare(n.name));
    let s = {
        provider: "",
        prefix: "",
        name: ""
    };
    return i.forEach(r=>{
        if (s.name === r.name && s.prefix === r.prefix && s.provider === r.provider)
            return;
        s = r;
        const n = r.provider
          , a = r.prefix
          , o = r.name
          , l = t[n] || (t[n] = Object.create(null))
          , c = l[a] || (l[a] = ts(n, a));
        let u;
        o in c.icons ? u = e.loaded : a === "" || c.missing.has(o) ? u = e.missing : u = e.pending;
        const d = {
            provider: n,
            prefix: a,
            name: o
        };
        u.push(d)
    }
    ),
    e
}
function Qf(i, e) {
    i.forEach(t=>{
        const s = t.loaderCallbacks;
        s && (t.loaderCallbacks = s.filter(r=>r.id !== e))
    }
    )
}
function iy(i) {
    i.pendingCallbacksFlag || (i.pendingCallbacksFlag = !0,
    setTimeout(()=>{
        i.pendingCallbacksFlag = !1;
        const e = i.loaderCallbacks ? i.loaderCallbacks.slice(0) : [];
        if (!e.length)
            return;
        let t = !1;
        const s = i.provider
          , r = i.prefix;
        e.forEach(n=>{
            const a = n.icons
              , o = a.pending.length;
            a.pending = a.pending.filter(l=>{
                if (l.prefix !== r)
                    return !0;
                const c = l.name;
                if (i.icons[c])
                    a.loaded.push({
                        provider: s,
                        prefix: r,
                        name: c
                    });
                else if (i.missing.has(c))
                    a.missing.push({
                        provider: s,
                        prefix: r,
                        name: c
                    });
                else
                    return t = !0,
                    !0;
                return !1
            }
            ),
            a.pending.length !== o && (t || Qf([i], n.id),
            n.callback(a.loaded.slice(0), a.missing.slice(0), a.pending.slice(0), n.abort))
        }
        )
    }
    ))
}
let sy = 0;
function ry(i, e, t) {
    const s = sy++
      , r = Qf.bind(null, t, s);
    if (!e.pending.length)
        return r;
    const n = {
        id: s,
        icons: e,
        callback: i,
        abort: r
    };
    return t.forEach(a=>{
        (a.loaderCallbacks || (a.loaderCallbacks = [])).push(n)
    }
    ),
    r
}
const Io = Object.create(null);
function Jc(i, e) {
    Io[i] = e
}
function Do(i) {
    return Io[i] || Io[""]
}
function ny(i, e=!0, t=!1) {
    const s = [];
    return i.forEach(r=>{
        const n = typeof r == "string" ? nn(r, e, t) : r;
        n && s.push(n)
    }
    ),
    s
}
var ay = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function oy(i, e, t, s) {
    const r = i.resources.length
      , n = i.random ? Math.floor(Math.random() * r) : i.index;
    let a;
    if (i.random) {
        let P = i.resources.slice(0);
        for (a = []; P.length > 1; ) {
            const q = Math.floor(Math.random() * P.length);
            a.push(P[q]),
            P = P.slice(0, q).concat(P.slice(q + 1))
        }
        a = a.concat(P)
    } else
        a = i.resources.slice(n).concat(i.resources.slice(0, n));
    const o = Date.now();
    let l = "pending", c = 0, u, d = null, f = [], p = [];
    typeof s == "function" && p.push(s);
    function b() {
        d && (clearTimeout(d),
        d = null)
    }
    function w() {
        l === "pending" && (l = "aborted"),
        b(),
        f.forEach(P=>{
            P.status === "pending" && (P.status = "aborted")
        }
        ),
        f = []
    }
    function m(P, q) {
        q && (p = []),
        typeof P == "function" && p.push(P)
    }
    function h() {
        return {
            startTime: o,
            payload: e,
            status: l,
            queriesSent: c,
            queriesPending: f.length,
            subscribe: m,
            abort: w
        }
    }
    function E() {
        l = "failed",
        p.forEach(P=>{
            P(void 0, u)
        }
        )
    }
    function y() {
        f.forEach(P=>{
            P.status === "pending" && (P.status = "aborted")
        }
        ),
        f = []
    }
    function _(P, q, k) {
        const I = q !== "success";
        switch (f = f.filter(M=>M !== P),
        l) {
        case "pending":
            break;
        case "failed":
            if (I || !i.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (q === "abort") {
            u = k,
            E();
            return
        }
        if (I) {
            u = k,
            f.length || (a.length ? N() : E());
            return
        }
        if (b(),
        y(),
        !i.random) {
            const M = i.resources.indexOf(P.resource);
            M !== -1 && M !== i.index && (i.index = M)
        }
        l = "completed",
        p.forEach(M=>{
            M(k)
        }
        )
    }
    function N() {
        if (l !== "pending")
            return;
        b();
        const P = a.shift();
        if (P === void 0) {
            if (f.length) {
                d = setTimeout(()=>{
                    b(),
                    l === "pending" && (y(),
                    E())
                }
                , i.timeout);
                return
            }
            E();
            return
        }
        const q = {
            status: "pending",
            resource: P,
            callback: (k,I)=>{
                _(q, k, I)
            }
        };
        f.push(q),
        c++,
        d = setTimeout(N, i.rotate),
        t(P, e, q.callback)
    }
    return setTimeout(N),
    h
}
function eh(i) {
    const e = {
        ...ay,
        ...i
    };
    let t = [];
    function s() {
        t = t.filter(o=>o().status === "pending")
    }
    function r(o, l, c) {
        const u = oy(e, o, l, (d,f)=>{
            s(),
            c && c(d, f)
        }
        );
        return t.push(u),
        u
    }
    function n(o) {
        return t.find(l=>o(l)) || null
    }
    return {
        query: r,
        find: n,
        setIndex: o=>{
            e.index = o
        }
        ,
        getIndex: ()=>e.index,
        cleanup: s
    }
}
function zl(i) {
    let e;
    if (typeof i.resources == "string")
        e = [i.resources];
    else if (e = i.resources,
    !(e instanceof Array) || !e.length)
        return null;
    return {
        resources: e,
        path: i.path || "/",
        maxURL: i.maxURL || 500,
        rotate: i.rotate || 750,
        timeout: i.timeout || 5e3,
        random: i.random === !0,
        index: i.index || 0,
        dataAfterTimeout: i.dataAfterTimeout !== !1
    }
}
const ya = Object.create(null)
  , _r = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , Rn = [];
for (; _r.length > 0; )
    _r.length === 1 || Math.random() > .5 ? Rn.push(_r.shift()) : Rn.push(_r.pop());
ya[""] = zl({
    resources: ["https://api.iconify.design"].concat(Rn)
});
function Qc(i, e) {
    const t = zl(e);
    return t === null ? !1 : (ya[i] = t,
    !0)
}
function wa(i) {
    return ya[i]
}
function ly() {
    return Object.keys(ya)
}
function eu() {}
const za = Object.create(null);
function cy(i) {
    if (!za[i]) {
        const e = wa(i);
        if (!e)
            return;
        const t = eh(e)
          , s = {
            config: e,
            redundancy: t
        };
        za[i] = s
    }
    return za[i]
}
function th(i, e, t) {
    let s, r;
    if (typeof i == "string") {
        const n = Do(i);
        if (!n)
            return t(void 0, 424),
            eu;
        r = n.send;
        const a = cy(i);
        a && (s = a.redundancy)
    } else {
        const n = zl(i);
        if (n) {
            s = eh(n);
            const a = i.resources ? i.resources[0] : ""
              , o = Do(a);
            o && (r = o.send)
        }
    }
    return !s || !r ? (t(void 0, 424),
    eu) : s.query(e, r, t)().abort
}
const tu = "iconify2"
  , qr = "iconify"
  , ih = qr + "-count"
  , iu = qr + "-version"
  , sh = 36e5
  , uy = 168
  , dy = 50;
function Ro(i, e) {
    try {
        return i.getItem(e)
    } catch {}
}
function jl(i, e, t) {
    try {
        return i.setItem(e, t),
        !0
    } catch {}
}
function su(i, e) {
    try {
        i.removeItem(e)
    } catch {}
}
function No(i, e) {
    return jl(i, ih, e.toString())
}
function Vo(i) {
    return parseInt(Ro(i, ih)) || 0
}
const _s = {
    local: !0,
    session: !0
}
  , rh = {
    local: new Set,
    session: new Set
};
let ql = !1;
function fy(i) {
    ql = i
}
let Pn = typeof window > "u" ? {} : window;
function nh(i) {
    const e = i + "Storage";
    try {
        if (Pn && Pn[e] && typeof Pn[e].length == "number")
            return Pn[e]
    } catch {}
    _s[i] = !1
}
function ah(i, e) {
    const t = nh(i);
    if (!t)
        return;
    const s = Ro(t, iu);
    if (s !== tu) {
        if (s) {
            const o = Vo(t);
            for (let l = 0; l < o; l++)
                su(t, qr + l.toString())
        }
        jl(t, iu, tu),
        No(t, 0);
        return
    }
    const r = Math.floor(Date.now() / sh) - uy
      , n = o=>{
        const l = qr + o.toString()
          , c = Ro(t, l);
        if (typeof c == "string") {
            try {
                const u = JSON.parse(c);
                if (typeof u == "object" && typeof u.cached == "number" && u.cached > r && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && e(u, o))
                    return !0
            } catch {}
            su(t, l)
        }
    }
    ;
    let a = Vo(t);
    for (let o = a - 1; o >= 0; o--)
        n(o) || (o === a - 1 ? (a--,
        No(t, a)) : rh[i].add(o))
}
function oh() {
    if (!ql) {
        fy(!0);
        for (const i in _s)
            ah(i, e=>{
                const t = e.data
                  , s = e.provider
                  , r = t.prefix
                  , n = ts(s, r);
                if (!Bl(n, t).length)
                    return !1;
                const a = t.lastModified || -1;
                return n.lastModifiedCached = n.lastModifiedCached ? Math.min(n.lastModifiedCached, a) : a,
                !0
            }
            )
    }
}
function hy(i, e) {
    const t = i.lastModifiedCached;
    if (t && t >= e)
        return t === e;
    if (i.lastModifiedCached = e,
    t)
        for (const s in _s)
            ah(s, r=>{
                const n = r.data;
                return r.provider !== i.provider || n.prefix !== i.prefix || n.lastModified === e
            }
            );
    return !0
}
function py(i, e) {
    ql || oh();
    function t(s) {
        let r;
        if (!_s[s] || !(r = nh(s)))
            return;
        const n = rh[s];
        let a;
        if (n.size)
            n.delete(a = Array.from(n).shift());
        else if (a = Vo(r),
        a >= dy || !No(r, a + 1))
            return;
        const o = {
            cached: Math.floor(Date.now() / sh),
            provider: i.provider,
            data: e
        };
        return jl(r, qr + a.toString(), JSON.stringify(o))
    }
    e.lastModified && !hy(i, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e),
    delete e.not_found),
    t("local") || t("session"))
}
function ru() {}
function my(i) {
    i.iconsLoaderFlag || (i.iconsLoaderFlag = !0,
    setTimeout(()=>{
        i.iconsLoaderFlag = !1,
        iy(i)
    }
    ))
}
function gy(i, e) {
    i.iconsToLoad ? i.iconsToLoad = i.iconsToLoad.concat(e).sort() : i.iconsToLoad = e,
    i.iconsQueueFlag || (i.iconsQueueFlag = !0,
    setTimeout(()=>{
        i.iconsQueueFlag = !1;
        const {provider: t, prefix: s} = i
          , r = i.iconsToLoad;
        delete i.iconsToLoad;
        let n;
        if (!r || !(n = Do(t)))
            return;
        n.prepare(t, s, r).forEach(o=>{
            th(t, o, l=>{
                if (typeof l != "object")
                    o.icons.forEach(c=>{
                        i.missing.add(c)
                    }
                    );
                else
                    try {
                        const c = Bl(i, l);
                        if (!c.length)
                            return;
                        const u = i.pendingIcons;
                        u && c.forEach(d=>{
                            u.delete(d)
                        }
                        ),
                        py(i, l)
                    } catch (c) {
                        console.error(c)
                    }
                my(i)
            }
            )
        }
        )
    }
    ))
}
const Gl = (i,e)=>{
    const t = ny(i, !0, Zf())
      , s = ty(t);
    if (!s.pending.length) {
        let l = !0;
        return e && setTimeout(()=>{
            l && e(s.loaded, s.missing, s.pending, ru)
        }
        ),
        ()=>{
            l = !1
        }
    }
    const r = Object.create(null)
      , n = [];
    let a, o;
    return s.pending.forEach(l=>{
        const {provider: c, prefix: u} = l;
        if (u === o && c === a)
            return;
        a = c,
        o = u,
        n.push(ts(c, u));
        const d = r[c] || (r[c] = Object.create(null));
        d[u] || (d[u] = [])
    }
    ),
    s.pending.forEach(l=>{
        const {provider: c, prefix: u, name: d} = l
          , f = ts(c, u)
          , p = f.pendingIcons || (f.pendingIcons = new Set);
        p.has(d) || (p.add(d),
        r[c][u].push(d))
    }
    ),
    n.forEach(l=>{
        const {provider: c, prefix: u} = l;
        r[c][u].length && gy(l, r[c][u])
    }
    ),
    e ? ry(e, s, n) : ru
}
  , vy = i=>new Promise((e,t)=>{
    const s = typeof i == "string" ? nn(i, !0) : i;
    if (!s) {
        t(i);
        return
    }
    Gl([s || i], r=>{
        if (r.length && s) {
            const n = jr(s);
            if (n) {
                e({
                    ...rn,
                    ...n
                });
                return
            }
        }
        t(i)
    }
    )
}
);
function by(i) {
    try {
        const e = typeof i == "string" ? JSON.parse(i) : i;
        if (typeof e.body == "string")
            return {
                ...e
            }
    } catch {}
}
function yy(i, e) {
    const t = typeof i == "string" ? nn(i, !0, !0) : null;
    if (!t) {
        const n = by(i);
        return {
            value: i,
            data: n
        }
    }
    const s = jr(t);
    if (s !== void 0 || !t.prefix)
        return {
            value: i,
            name: t,
            data: s
        };
    const r = Gl([t], ()=>e(i, t, jr(t)));
    return {
        value: i,
        name: t,
        loading: r
    }
}
let lh = !1;
try {
    lh = navigator.vendor.indexOf("Apple") === 0
} catch {}
function wy(i, e) {
    switch (e) {
    case "svg":
    case "bg":
    case "mask":
        return e
    }
    return e !== "style" && (lh || i.indexOf("<a") === -1) ? "svg" : i.indexOf("currentColor") === -1 ? "bg" : "mask"
}
const Ey = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , xy = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ho(i, e, t) {
    if (e === 1)
        return i;
    if (t = t || 100,
    typeof i == "number")
        return Math.ceil(i * e * t) / t;
    if (typeof i != "string")
        return i;
    const s = i.split(Ey);
    if (s === null || !s.length)
        return i;
    const r = [];
    let n = s.shift()
      , a = xy.test(n);
    for (; ; ) {
        if (a) {
            const o = parseFloat(n);
            isNaN(o) ? r.push(n) : r.push(Math.ceil(o * e * t) / t)
        } else
            r.push(n);
        if (n = s.shift(),
        n === void 0)
            return r.join("");
        a = !a
    }
}
function _y(i, e="defs") {
    let t = "";
    const s = i.indexOf("<" + e);
    for (; s >= 0; ) {
        const r = i.indexOf(">", s)
          , n = i.indexOf("</" + e);
        if (r === -1 || n === -1)
            break;
        const a = i.indexOf(">", n);
        if (a === -1)
            break;
        t += i.slice(r + 1, n).trim(),
        i = i.slice(0, s).trim() + i.slice(a + 1)
    }
    return {
        defs: t,
        content: i
    }
}
function Ty(i, e) {
    return i ? "<defs>" + i + "</defs>" + e : e
}
function Sy(i, e, t) {
    const s = _y(i);
    return Ty(s.defs, e + s.content + t)
}
const Cy = i=>i === "unset" || i === "undefined" || i === "none";
function ch(i, e) {
    const t = {
        ...rn,
        ...i
    }
      , s = {
        ...Yf,
        ...e
    }
      , r = {
        left: t.left,
        top: t.top,
        width: t.width,
        height: t.height
    };
    let n = t.body;
    [t, s].forEach(w=>{
        const m = []
          , h = w.hFlip
          , E = w.vFlip;
        let y = w.rotate;
        h ? E ? y += 2 : (m.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"),
        m.push("scale(-1 1)"),
        r.top = r.left = 0) : E && (m.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"),
        m.push("scale(1 -1)"),
        r.top = r.left = 0);
        let _;
        switch (y < 0 && (y -= Math.floor(y / 4) * 4),
        y = y % 4,
        y) {
        case 1:
            _ = r.height / 2 + r.top,
            m.unshift("rotate(90 " + _.toString() + " " + _.toString() + ")");
            break;
        case 2:
            m.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
            break;
        case 3:
            _ = r.width / 2 + r.left,
            m.unshift("rotate(-90 " + _.toString() + " " + _.toString() + ")");
            break
        }
        y % 2 === 1 && (r.left !== r.top && (_ = r.left,
        r.left = r.top,
        r.top = _),
        r.width !== r.height && (_ = r.width,
        r.width = r.height,
        r.height = _)),
        m.length && (n = Sy(n, '<g transform="' + m.join(" ") + '">', "</g>"))
    }
    );
    const a = s.width
      , o = s.height
      , l = r.width
      , c = r.height;
    let u, d;
    a === null ? (d = o === null ? "1em" : o === "auto" ? c : o,
    u = Ho(d, l / c)) : (u = a === "auto" ? l : a,
    d = o === null ? Ho(u, c / l) : o === "auto" ? c : o);
    const f = {}
      , p = (w,m)=>{
        Cy(m) || (f[w] = m.toString())
    }
    ;
    p("width", u),
    p("height", d);
    const b = [r.left, r.top, l, c];
    return f.viewBox = b.join(" "),
    {
        attributes: f,
        viewBox: b,
        body: n
    }
}
function Wl(i, e) {
    let t = i.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const s in e)
        t += " " + s + '="' + e[s] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + i + "</svg>"
}
function $y(i) {
    return i.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function Py(i) {
    return "data:image/svg+xml," + $y(i)
}
function uh(i) {
    return 'url("' + Py(i) + '")'
}
const Ay = ()=>{
    let i;
    try {
        if (i = fetch,
        typeof i == "function")
            return i
    } catch {}
}
;
let Jn = Ay();
function My(i) {
    Jn = i
}
function Oy() {
    return Jn
}
function ky(i, e) {
    const t = wa(i);
    if (!t)
        return 0;
    let s;
    if (!t.maxURL)
        s = 0;
    else {
        let r = 0;
        t.resources.forEach(a=>{
            r = Math.max(r, a.length)
        }
        );
        const n = e + ".json?icons=";
        s = t.maxURL - r - t.path.length - n.length
    }
    return s
}
function Ly(i) {
    return i === 404
}
const Iy = (i,e,t)=>{
    const s = []
      , r = ky(i, e)
      , n = "icons";
    let a = {
        type: n,
        provider: i,
        prefix: e,
        icons: []
    }
      , o = 0;
    return t.forEach((l,c)=>{
        o += l.length + 1,
        o >= r && c > 0 && (s.push(a),
        a = {
            type: n,
            provider: i,
            prefix: e,
            icons: []
        },
        o = l.length),
        a.icons.push(l)
    }
    ),
    s.push(a),
    s
}
;
function Dy(i) {
    if (typeof i == "string") {
        const e = wa(i);
        if (e)
            return e.path
    }
    return "/"
}
const Ry = (i,e,t)=>{
    if (!Jn) {
        t("abort", 424);
        return
    }
    let s = Dy(e.provider);
    switch (e.type) {
    case "icons":
        {
            const n = e.prefix
              , o = e.icons.join(",")
              , l = new URLSearchParams({
                icons: o
            });
            s += n + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const n = e.uri;
            s += n.slice(0, 1) === "/" ? n.slice(1) : n;
            break
        }
    default:
        t("abort", 400);
        return
    }
    let r = 503;
    Jn(i + s).then(n=>{
        const a = n.status;
        if (a !== 200) {
            setTimeout(()=>{
                t(Ly(a) ? "abort" : "next", a)
            }
            );
            return
        }
        return r = 501,
        n.json()
    }
    ).then(n=>{
        if (typeof n != "object" || n === null) {
            setTimeout(()=>{
                n === 404 ? t("abort", n) : t("next", r)
            }
            );
            return
        }
        setTimeout(()=>{
            t("success", n)
        }
        )
    }
    ).catch(()=>{
        t("next", r)
    }
    )
}
  , Ny = {
    prepare: Iy,
    send: Ry
};
function nu(i, e) {
    switch (i) {
    case "local":
    case "session":
        _s[i] = e;
        break;
    case "all":
        for (const t in _s)
            _s[t] = e;
        break
    }
}
const ja = "data-style";
let dh = "";
function Vy(i) {
    dh = i
}
function au(i, e) {
    let t = Array.from(i.childNodes).find(s=>s.hasAttribute && s.hasAttribute(ja));
    t || (t = document.createElement("style"),
    t.setAttribute(ja, ja),
    i.appendChild(t)),
    t.textContent = ":host{display:inline-block;vertical-align:" + (e ? "-0.125em" : "0") + "}span,svg{display:block}" + dh
}
function fh() {
    Jc("", Ny),
    Zf(!0);
    let i;
    try {
        i = window
    } catch {}
    if (i) {
        if (oh(),
        i.IconifyPreload !== void 0) {
            const t = i.IconifyPreload
              , s = "Invalid IconifyPreload syntax.";
            typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r=>{
                try {
                    (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !Kc(r)) && console.error(s)
                } catch {
                    console.error(s)
                }
            }
            )
        }
        if (i.IconifyProviders !== void 0) {
            const t = i.IconifyProviders;
            if (typeof t == "object" && t !== null)
                for (const s in t) {
                    const r = "IconifyProviders[" + s + "] is invalid.";
                    try {
                        const n = t[s];
                        if (typeof n != "object" || !n || n.resources === void 0)
                            continue;
                        Qc(s, n) || console.error(r)
                    } catch {
                        console.error(r)
                    }
                }
        }
    }
    return {
        enableCache: t=>nu(t, !0),
        disableCache: t=>nu(t, !1),
        iconLoaded: Zc,
        iconExists: Zc,
        getIcon: ey,
        listIcons: Q1,
        addIcon: Jf,
        addCollection: Kc,
        calculateSize: Ho,
        buildIcon: ch,
        iconToHTML: Wl,
        svgToURL: uh,
        loadIcons: Gl,
        loadIcon: vy,
        addAPIProvider: Qc,
        appendCustomStyle: Vy,
        _api: {
            getAPIConfig: wa,
            setAPIModule: Jc,
            sendAPIQuery: th,
            setFetch: My,
            getFetch: Oy,
            listAPIProviders: ly
        }
    }
}
const Fo = {
    "background-color": "currentColor"
}
  , hh = {
    "background-color": "transparent"
}
  , ou = {
    image: "var(--svg)",
    repeat: "no-repeat",
    size: "100% 100%"
}
  , lu = {
    "-webkit-mask": Fo,
    mask: Fo,
    background: hh
};
for (const i in lu) {
    const e = lu[i];
    for (const t in ou)
        e[i + "-" + t] = ou[t]
}
function cu(i) {
    return i ? i + (i.match(/^[-0-9.]+$/) ? "px" : "") : "inherit"
}
function Hy(i, e, t) {
    const s = document.createElement("span");
    let r = i.body;
    r.indexOf("<a") !== -1 && (r += "<!-- " + Date.now() + " -->");
    const n = i.attributes
      , a = Wl(r, {
        ...n,
        width: e.width + "",
        height: e.height + ""
    })
      , o = uh(a)
      , l = s.style
      , c = {
        "--svg": o,
        width: cu(n.width),
        height: cu(n.height),
        ...t ? Fo : hh
    };
    for (const u in c)
        l.setProperty(u, c[u]);
    return s
}
let Vr;
function Fy() {
    try {
        Vr = window.trustedTypes.createPolicy("iconify", {
            createHTML: i=>i
        })
    } catch {
        Vr = null
    }
}
function By(i) {
    return Vr === void 0 && Fy(),
    Vr ? Vr.createHTML(i) : i
}
function zy(i) {
    const e = document.createElement("span")
      , t = i.attributes;
    let s = "";
    t.width || (s = "width: inherit;"),
    t.height || (s += "height: inherit;"),
    s && (t.style = s);
    const r = Wl(i.body, t);
    return e.innerHTML = By(r),
    e.firstChild
}
function Bo(i) {
    return Array.from(i.childNodes).find(e=>{
        const t = e.tagName && e.tagName.toUpperCase();
        return t === "SPAN" || t === "SVG"
    }
    )
}
function uu(i, e) {
    const t = e.icon.data
      , s = e.customisations
      , r = ch(t, s);
    s.preserveAspectRatio && (r.attributes.preserveAspectRatio = s.preserveAspectRatio);
    const n = e.renderedMode;
    let a;
    switch (n) {
    case "svg":
        a = zy(r);
        break;
    default:
        a = Hy(r, {
            ...rn,
            ...t
        }, n === "mask")
    }
    const o = Bo(i);
    o ? a.tagName === "SPAN" && o.tagName === a.tagName ? o.setAttribute("style", a.getAttribute("style")) : i.replaceChild(a, o) : i.appendChild(a)
}
function du(i, e, t) {
    const s = t && (t.rendered ? t : t.lastRender);
    return {
        rendered: !1,
        inline: e,
        icon: i,
        lastRender: s
    }
}
function jy(i="iconify-icon") {
    let e, t;
    try {
        e = window.customElements,
        t = window.HTMLElement
    } catch {
        return
    }
    if (!e || !t)
        return;
    const s = e.get(i);
    if (s)
        return s;
    const r = ["icon", "mode", "inline", "noobserver", "width", "height", "rotate", "flip"]
      , n = class extends t {
        constructor() {
            super();
            g(this, "_shadowRoot");
            g(this, "_initialised", !1);
            g(this, "_state");
            g(this, "_checkQueued", !1);
            g(this, "_connected", !1);
            g(this, "_observer", null);
            g(this, "_visible", !0);
            const l = this._shadowRoot = this.attachShadow({
                mode: "open"
            })
              , c = this.hasAttribute("inline");
            au(l, c),
            this._state = du({
                value: ""
            }, c),
            this._queueCheck()
        }
        connectedCallback() {
            this._connected = !0,
            this.startObserver()
        }
        disconnectedCallback() {
            this._connected = !1,
            this.stopObserver()
        }
        static get observedAttributes() {
            return r.slice(0)
        }
        attributeChangedCallback(l) {
            switch (l) {
            case "inline":
                {
                    const c = this.hasAttribute("inline")
                      , u = this._state;
                    c !== u.inline && (u.inline = c,
                    au(this._shadowRoot, c));
                    break
                }
            case "noobserver":
                {
                    this.hasAttribute("noobserver") ? this.startObserver() : this.stopObserver();
                    break
                }
            default:
                this._queueCheck()
            }
        }
        get icon() {
            const l = this.getAttribute("icon");
            if (l && l.slice(0, 1) === "{")
                try {
                    return JSON.parse(l)
                } catch {}
            return l
        }
        set icon(l) {
            typeof l == "object" && (l = JSON.stringify(l)),
            this.setAttribute("icon", l)
        }
        get inline() {
            return this.hasAttribute("inline")
        }
        set inline(l) {
            l ? this.setAttribute("inline", "true") : this.removeAttribute("inline")
        }
        get observer() {
            return this.hasAttribute("observer")
        }
        set observer(l) {
            l ? this.setAttribute("observer", "true") : this.removeAttribute("observer")
        }
        restartAnimation() {
            const l = this._state;
            if (l.rendered) {
                const c = this._shadowRoot;
                if (l.renderedMode === "svg")
                    try {
                        c.lastChild.setCurrentTime(0);
                        return
                    } catch {}
                uu(c, l)
            }
        }
        get status() {
            const l = this._state;
            return l.rendered ? "rendered" : l.icon.data === null ? "failed" : "loading"
        }
        _queueCheck() {
            this._checkQueued || (this._checkQueued = !0,
            setTimeout(()=>{
                this._check()
            }
            ))
        }
        _check() {
            if (!this._checkQueued)
                return;
            this._checkQueued = !1;
            const l = this._state
              , c = this.getAttribute("icon");
            if (c !== l.icon.value) {
                this._iconChanged(c);
                return
            }
            if (!l.rendered || !this._visible)
                return;
            const u = this.getAttribute("mode")
              , d = Xc(this);
            (l.attrMode !== u || W1(l.customisations, d) || !Bo(this._shadowRoot)) && this._renderIcon(l.icon, d, u)
        }
        _iconChanged(l) {
            const c = yy(l, (u,d,f)=>{
                const p = this._state;
                if (p.rendered || this.getAttribute("icon") !== u)
                    return;
                const b = {
                    value: u,
                    name: d,
                    data: f
                };
                b.data ? this._gotIconData(b) : p.icon = b
            }
            );
            c.data ? this._gotIconData(c) : this._state = du(c, this._state.inline, this._state)
        }
        _forceRender() {
            if (!this._visible) {
                const l = Bo(this._shadowRoot);
                l && this._shadowRoot.removeChild(l);
                return
            }
            this._queueCheck()
        }
        _gotIconData(l) {
            this._checkQueued = !1,
            this._renderIcon(l, Xc(this), this.getAttribute("mode"))
        }
        _renderIcon(l, c, u) {
            const d = wy(l.data.body, u)
              , f = this._state.inline;
            uu(this._shadowRoot, this._state = {
                rendered: !0,
                icon: l,
                inline: f,
                customisations: c,
                attrMode: u,
                renderedMode: d
            })
        }
        startObserver() {
            if (!this._observer && !this.hasAttribute("noobserver"))
                try {
                    this._observer = new IntersectionObserver(l=>{
                        const c = l.some(u=>u.isIntersecting);
                        c !== this._visible && (this._visible = c,
                        this._forceRender())
                    }
                    ),
                    this._observer.observe(this)
                } catch {
                    if (this._observer) {
                        try {
                            this._observer.disconnect()
                        } catch {}
                        this._observer = null
                    }
                }
        }
        stopObserver() {
            this._observer && (this._observer.disconnect(),
            this._observer = null,
            this._visible = !0,
            this._connected && this._forceRender())
        }
    }
    ;
    r.forEach(o=>{
        o in n.prototype || Object.defineProperty(n.prototype, o, {
            get: function() {
                return this.getAttribute(o)
            },
            set: function(l) {
                l !== null ? this.setAttribute(o, l) : this.removeAttribute(o)
            }
        })
    }
    );
    const a = fh();
    for (const o in a)
        n[o] = n.prototype[o] = a[o];
    return e.define(i, n),
    n
}
jy() || fh();
const qy = [{
    name: "Home",
    screenshotLight: "/img/screenshots/home.png",
    screenshotDark: "/img/screenshots/home-dark.png",
    link: "/home.html",
    new: !1
}, {
    name: "Home 2",
    screenshotLight: "/img/screenshots/home-2.png",
    screenshotDark: "/img/screenshots/home-2-dark.png",
    link: "/home-2.html",
    new: !1
}, {
    name: "Home 3",
    screenshotLight: "/img/screenshots/home-3.png",
    screenshotDark: "/img/screenshots/home-3-dark.png",
    link: "/home-3.html",
    new: !1
}, {
    name: "Inventory",
    screenshotLight: "/img/screenshots/inventory.png",
    screenshotDark: "/img/screenshots/inventory-dark.png",
    link: "/inventory.html",
    new: !1
}, {
    name: "Vehicle",
    screenshotLight: "/img/screenshots/vehicle.png",
    screenshotDark: "/img/screenshots/vehicle-dark.png",
    link: "/vehicle.html",
    new: !1
}, {
    name: "Services",
    screenshotLight: "/img/screenshots/services.png",
    screenshotDark: "/img/screenshots/services-dark.png",
    link: "/services.html",
    new: !1
}, {
    name: "About Us",
    screenshotLight: "/img/screenshots/about.png",
    screenshotDark: "/img/screenshots/about-dark.png",
    link: "/about.html",
    new: !1
}, {
    name: "Contact",
    screenshotLight: "/img/screenshots/contact.png",
    screenshotDark: "/img/screenshots/contact-dark.png",
    link: "/contact.html",
    new: !1
}, {
    name: "Dashboard",
    screenshotLight: "/img/screenshots/dashboard.png",
    screenshotDark: "/img/screenshots/dashboard-dark.png",
    link: "/dashboard.html",
    new: !1
}, {
    name: "Account",
    screenshotLight: "/img/screenshots/dashboard-account.png",
    screenshotDark: "/img/screenshots/dashboard-account-dark.png",
    link: "/dashboard-account.html",
    new: !1
}, {
    name: "Schedule",
    screenshotLight: "/img/screenshots/dashboard-schedule.png",
    screenshotDark: "/img/screenshots/dashboard-schedule-dark.png",
    link: "/dashboard-schedule.html",
    new: !1
}, {
    name: "Favorites",
    screenshotLight: "/img/screenshots/dashboard-bookmarks.png",
    screenshotDark: "/img/screenshots/dashboard-bookmarks-dark.png",
    link: "/dashboard-bookmarks.html",
    new: !1
}, {
    name: "Error 404",
    screenshotLight: "/img/screenshots/404.png",
    screenshotDark: "/img/screenshots/404-dark.png",
    link: "/404.html",
    new: !1
}, {
    name: "Login",
    screenshotLight: "/img/screenshots/login.png",
    screenshotDark: "/img/screenshots/login-dark.png",
    link: "/login.html",
    new: !1
}, {
    name: "Signup",
    screenshotLight: "/img/screenshots/signup.png",
    screenshotDark: "/img/screenshots/signup-dark.png",
    link: "/signup.html",
    new: !1
}];
function Gy() {
    return {
        screenshots: qy
    }
}
function Wy() {
    return {
        activeTab: "starter",
        toggleTabs(i) {
            const e = i.target.getAttribute("data-tab");
            this.activeTab = e
        }
    }
}
window.renderScreenshots = Gy;
window.purchase = Wy;
function Yy() {
    return {
        dark: !1,
        initTheme() {
            this.$store.app.isDark ? (document.documentElement.classList.add("dark"),
            this.dark = !0) : (document.documentElement.classList.remove("dark"),
            this.dark = !1)
        },
        toggleTheme() {
            this.$store.app.isDark = !this.$store.app.isDark,
            this.dark = !this.dark
        }
    }
}
function Xy() {
    return {
        scrolled: !1,
        height: 60,
        mobileOpen: !1,
        isChecked: !1,
        megamenuOpened: !1,
        openedMegamenu: "",
        scroll() {
            window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1
        },
        openSearch() {
            const i = document.getElementById("navbar-search-field");
            this.$store.app.searchOpened = !0,
            i.focus()
        },
        initScrollAnchors() {
            document.querySelectorAll('.scroll-link[href^="#"]').forEach(i=>{
                i.onclick = function(e) {
                    e.preventDefault();
                    let t = this.getAttribute("href")
                      , s = document.querySelector(t)
                      , r = 100
                      , a = s.offsetTop - r;
                    window.scrollTo({
                        top: a,
                        behavior: "smooth"
                    })
                }
            }
            )
        }
    }
}
function Uy() {
    return {
        init() {
            const e = document.getElementById("sidebar-menu").querySelectorAll("li a");
            let t = 0;
            for (var s = 0; s < e.length; s++)
                e[s].href === document.URL && (t = s);
            e[t].className = "flex items-center gap-4 py-3 rounded-lg bg-primary-200 dark:bg-primary-600/20 text-primary-600 dark:text-primary-500"
        },
        foldSidebar() {
            _i.store("app").isLayoutCompact = !0
        }
    }
}
function Ky(i, e) {
    const t = document.getElementById("search-results")
      , s = new RegExp(i,"i");
    t.innerHTML = "",
    t.classList.remove("hidden"),
    i.length > 0 ? fetch(e).then(r=>r.json()).then(function(r) {
        if (console.log(r),
        r.length > 0 && (r.forEach(function(a) {
            if (a.title.search(s) != -1 || a.content.search(s) != -1) {
                let o = `
                  <a href="${a.url}" class="search-result group flex items-center gap-2 p-2 rounded-lg hover:bg-muted-50 dark:hover:bg-muted-800">
                      <div class="w-10 h-10 flex items-center justify-center mask mask-blob bg-transparent group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 text-primary-500 transition-colors duration-300">
                        <iconify-icon class="iconify w-5 h-5 block" icon="${a.icon}"></iconify-icon>
                      </div>
                      <div class="meta font-sans leading-tight">
                          <h4 class="text-sm text-muted-600 dark:text-muted-100">${a.title}</h4 >
                          <span class="text-xs text-muted-400">${a.content}</span>
                      </div>
                  </a>
              `;
                console.log(o),
                t.innerHTML += o
            }
        }),
        t.querySelectorAll(".search-result").length === 0)) {
            let a = `
                <div class="w-full p-6">
                    <div class="text-center">
                        <iconify-icon class="iconify w-8 h-8 mx-auto text-muted-400" icon="ph:robot-duotone"></iconify-icon>
                        <h3 class="font-heading font-medium text-muted-800 dark:text-muted-100">No Matching Results</h3>
                        <p class="font-heading text-xs max-w-[240px] mx-auto text-muted-400">Sorry, we couldn't find any matching records. Please try different search terms.</p>
                    </div>
                </div>
            `;
            t.innerHTML += a
        }
    }).catch(function(r) {
        console.log(r)
    }) : t.classList.add("hidden")
}
function Zy() {
    return {
        searchTerms: "",
        closeSearch() {
            const i = document.getElementById("search-results");
            this.$store.app.searchOpened = !this.$store.app.searchOpened,
            this.searchTerms = "",
            i.classList.add("hidden")
        },
        searchData() {
            let i = this.searchTerms;
            Ky(i, "/data/search.json")
        }
    }
}
const Ei = document.querySelector(".backtotop path")
  , Tr = Ei ? Ei.getTotalLength() : 0;
function Jy() {
    return {
        scrolled: !1,
        height: 60,
        mobileOpen: !1,
        setup() {
            Ei.style.transition = Ei.style.WebkitTransition = "none",
            Ei.style.strokeDasharray = Tr + " " + Tr,
            Ei.style.strokeDashoffset = Tr,
            Ei.getBoundingClientRect(),
            Ei.style.transition = Ei.style.WebkitTransition = "stroke-dashoffset 10ms linear"
        },
        updateProgress() {
            let i = window.scrollY
              , e = document.body.scrollHeight - window.innerHeight
              , t = Tr - i * Tr / e;
            Ei.style.strokeDashoffset = t
        },
        scroll() {
            this.updateProgress(),
            window.scrollY >= this.height ? this.scrolled = !0 : this.scrolled = !1
        },
        scrollTop() {
            return window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
            !1
        }
    }
}
function fu(i) {
    return i !== null && typeof i == "object" && "constructor"in i && i.constructor === Object
}
function Yl(i, e) {
    i === void 0 && (i = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach(t=>{
        typeof i[t] > "u" ? i[t] = e[t] : fu(e[t]) && fu(i[t]) && Object.keys(e[t]).length > 0 && Yl(i[t], e[t])
    }
    )
}
const ph = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function _t() {
    const i = typeof document < "u" ? document : {};
    return Yl(i, ph),
    i
}
const Qy = {
    document: ph,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(i) {
        return typeof setTimeout > "u" ? (i(),
        null) : setTimeout(i, 0)
    },
    cancelAnimationFrame(i) {
        typeof setTimeout > "u" || clearTimeout(i)
    }
};
function at() {
    const i = typeof window < "u" ? window : {};
    return Yl(i, Qy),
    i
}
function Yi(i) {
    return i === void 0 && (i = ""),
    i.trim().split(" ").filter(e=>!!e.trim())
}
function ew(i) {
    const e = i;
    Object.keys(e).forEach(t=>{
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function Cs(i, e) {
    return e === void 0 && (e = 0),
    setTimeout(i, e)
}
function Qt() {
    return Date.now()
}
function tw(i) {
    const e = at();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
}
function zo(i, e) {
    e === void 0 && (e = "x");
    const t = at();
    let s, r, n;
    const a = tw(i);
    return t.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(o=>o.replace(",", ".")).join(", ")),
    n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])),
    r || 0
}
function $r(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object"
}
function iw(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11)
}
function qt() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0])
      , e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
        const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        if (s != null && !iw(s)) {
            const r = Object.keys(Object(s)).filter(n=>e.indexOf(n) < 0);
            for (let n = 0, a = r.length; n < a; n += 1) {
                const o = r[n]
                  , l = Object.getOwnPropertyDescriptor(s, o);
                l !== void 0 && l.enumerable && ($r(i[o]) && $r(s[o]) ? s[o].__swiper__ ? i[o] = s[o] : qt(i[o], s[o]) : !$r(i[o]) && $r(s[o]) ? (i[o] = {},
                s[o].__swiper__ ? i[o] = s[o] : qt(i[o], s[o])) : i[o] = s[o])
            }
        }
    }
    return i
}
function Pr(i, e, t) {
    i.style.setProperty(e, t)
}
function mh(i) {
    let {swiper: e, targetPosition: t, side: s} = i;
    const r = at()
      , n = -e.translate;
    let a = null, o;
    const l = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > n ? "next" : "prev"
      , u = (f,p)=>c === "next" && f >= p || c === "prev" && f <= p
      , d = ()=>{
        o = new Date().getTime(),
        a === null && (a = o);
        const f = Math.max(Math.min((o - a) / l, 1), 0)
          , p = .5 - Math.cos(f * Math.PI) / 2;
        let b = n + p * (t - n);
        if (u(b, t) && (b = t),
        e.wrapperEl.scrollTo({
            [s]: b
        }),
        u(b, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [s]: b
                })
            }
            ),
            r.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = r.requestAnimationFrame(d)
    }
    ;
    d()
}
function Is(i) {
    return i.querySelector(".swiper-slide-transform") || i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform") || i
}
function wt(i, e) {
    return e === void 0 && (e = ""),
    [...i.children].filter(t=>t.matches(e))
}
function Qn(i) {
    try {
        console.warn(i);
        return
    } catch {}
}
function Gt(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Yi(e)),
    t
}
function ea(i) {
    const e = at()
      , t = _t()
      , s = i.getBoundingClientRect()
      , r = t.body
      , n = i.clientTop || r.clientTop || 0
      , a = i.clientLeft || r.clientLeft || 0
      , o = i === e ? e.scrollY : i.scrollTop
      , l = i === e ? e.scrollX : i.scrollLeft;
    return {
        top: s.top + o - n,
        left: s.left + l - a
    }
}
function sw(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function rw(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? s.matches(e) && t.push(s) : t.push(s),
        i = s
    }
    return t
}
function Ui(i, e) {
    return at().getComputedStyle(i, null).getPropertyValue(e)
}
function Gr(i) {
    let e = i, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function Ts(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
        e ? s.matches(e) && t.push(s) : t.push(s),
        s = s.parentElement;
    return t
}
function Hr(i, e) {
    function t(s) {
        s.target === i && (e.call(i, s),
        i.removeEventListener("transitionend", t))
    }
    e && i.addEventListener("transitionend", t)
}
function jo(i, e, t) {
    const s = at();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth
}
function Me(i) {
    return (Array.isArray(i) ? i : [i]).filter(e=>!!e)
}
let qa;
function nw() {
    const i = at()
      , e = _t();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    }
}
function gh() {
    return qa || (qa = nw()),
    qa
}
let Ga;
function aw(i) {
    let {userAgent: e} = i === void 0 ? {} : i;
    const t = gh()
      , s = at()
      , r = s.navigator.platform
      , n = e || s.navigator.userAgent
      , a = {
        ios: !1,
        android: !1
    }
      , o = s.screen.width
      , l = s.screen.height
      , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = n.match(/(iPad).*OS\s([\d_]+)/);
    const d = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , f = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , p = r === "Win32";
    let b = r === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && b && t.touch && w.indexOf(`${o}x${l}`) >= 0 && (u = n.match(/(Version)\/([\d.]+)/),
    u || (u = [0, 1, "13_0_0"]),
    b = !1),
    c && !p && (a.os = "android",
    a.android = !0),
    (u || f || d) && (a.os = "ios",
    a.ios = !0),
    a
}
function vh(i) {
    return i === void 0 && (i = {}),
    Ga || (Ga = aw(i)),
    Ga
}
let Wa;
function ow() {
    const i = at()
      , e = vh();
    let t = !1;
    function s() {
        const o = i.navigator.userAgent.toLowerCase();
        return o.indexOf("safari") >= 0 && o.indexOf("chrome") < 0 && o.indexOf("android") < 0
    }
    if (s()) {
        const o = String(i.navigator.userAgent);
        if (o.includes("Version/")) {
            const [l,c] = o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));
            t = l < 16 || l === 16 && c < 2
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
      , n = s()
      , a = n || r && e.ios;
    return {
        isSafari: t || n,
        needPerspectiveFix: t,
        need3dFix: a,
        isWebView: r
    }
}
function lw() {
    return Wa || (Wa = ow()),
    Wa
}
function cw(i) {
    let {swiper: e, on: t, emit: s} = i;
    const r = at();
    let n = null
      , a = null;
    const o = ()=>{
        !e || e.destroyed || !e.initialized || (s("beforeResize"),
        s("resize"))
    }
      , l = ()=>{
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(d=>{
            a = r.requestAnimationFrame(()=>{
                const {width: f, height: p} = e;
                let b = f
                  , w = p;
                d.forEach(m=>{
                    let {contentBoxSize: h, contentRect: E, target: y} = m;
                    y && y !== e.el || (b = E ? E.width : (h[0] || h).inlineSize,
                    w = E ? E.height : (h[0] || h).blockSize)
                }
                ),
                (b !== f || w !== p) && o()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , c = ()=>{
        a && r.cancelAnimationFrame(a),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , u = ()=>{
        !e || e.destroyed || !e.initialized || s("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
            l();
            return
        }
        r.addEventListener("resize", o),
        r.addEventListener("orientationchange", u)
    }
    ),
    t("destroy", ()=>{
        c(),
        r.removeEventListener("resize", o),
        r.removeEventListener("orientationchange", u)
    }
    )
}
function uw(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = []
      , a = at()
      , o = function(u, d) {
        d === void 0 && (d = {});
        const f = a.MutationObserver || a.WebkitMutationObserver
          , p = new f(b=>{
            if (e.__preventObserver__)
                return;
            if (b.length === 1) {
                r("observerUpdate", b[0]);
                return
            }
            const w = function() {
                r("observerUpdate", b[0])
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(w) : a.setTimeout(w, 0)
        }
        );
        p.observe(u, {
            attributes: typeof d.attributes > "u" ? !0 : d.attributes,
            childList: typeof d.childList > "u" ? !0 : d.childList,
            characterData: typeof d.characterData > "u" ? !0 : d.characterData
        }),
        n.push(p)
    }
      , l = ()=>{
        if (e.params.observer) {
            if (e.params.observeParents) {
                const u = Ts(e.hostEl);
                for (let d = 0; d < u.length; d += 1)
                    o(u[d])
            }
            o(e.hostEl, {
                childList: e.params.observeSlideChildren
            }),
            o(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , c = ()=>{
        n.forEach(u=>{
            u.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    s("init", l),
    s("destroy", c)
}
var dw = {
    on(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        const r = t ? "unshift" : "push";
        return i.split(" ").forEach(n=>{
            s.eventsListeners[n] || (s.eventsListeners[n] = []),
            s.eventsListeners[n][r](e)
        }
        ),
        s
    },
    once(i, e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function")
            return s;
        function r() {
            s.off(i, r),
            r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                a[o] = arguments[o];
            e.apply(s, a)
        }
        return r.__emitterProxy = e,
        s.on(i, r, t)
    },
    onAny(i, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof i != "function")
            return t;
        const s = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i),
        t
    },
    offAny(i) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(i);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(i, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach(s=>{
            typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((r,n)=>{
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[s].splice(n, 1)
            }
            )
        }
        ),
        t
    },
    emit() {
        const i = this;
        if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
            return i;
        let e, t, s;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
            n[a] = arguments[a];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0],
        t = n.slice(1, n.length),
        s = i) : (e = n[0].events,
        t = n[0].data,
        s = n[0].context || i),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach(l=>{
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(c=>{
                c.apply(s, [l, ...t])
            }
            ),
            i.eventsListeners && i.eventsListeners[l] && i.eventsListeners[l].forEach(c=>{
                c.apply(s, t)
            }
            )
        }
        ),
        i
    }
};
function fw() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth,
    typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight,
    !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(Ui(s, "padding-left") || 0, 10) - parseInt(Ui(s, "padding-right") || 0, 10),
    t = t - parseInt(Ui(s, "padding-top") || 0, 10) - parseInt(Ui(s, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t
    }))
}
function hw() {
    const i = this;
    function e(M, j) {
        return parseFloat(M.getPropertyValue(i.getDirectionLabel(j)) || 0)
    }
    const t = i.params
      , {wrapperEl: s, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o} = i
      , l = i.virtual && t.virtual.enabled
      , c = l ? i.virtual.slides.length : i.slides.length
      , u = wt(r, `.${i.params.slideClass}, swiper-slide`)
      , d = l ? i.virtual.slides.length : u.length;
    let f = [];
    const p = []
      , b = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let m = t.slidesOffsetAfter;
    typeof m == "function" && (m = t.slidesOffsetAfter.call(i));
    const h = i.snapGrid.length
      , E = i.slidesGrid.length;
    let y = t.spaceBetween
      , _ = -w
      , N = 0
      , P = 0;
    if (typeof n > "u")
        return;
    typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * n : typeof y == "string" && (y = parseFloat(y)),
    i.virtualSize = -y,
    u.forEach(M=>{
        a ? M.style.marginLeft = "" : M.style.marginRight = "",
        M.style.marginBottom = "",
        M.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (Pr(s, "--swiper-centered-offset-before", ""),
    Pr(s, "--swiper-centered-offset-after", ""));
    const q = t.grid && t.grid.rows > 1 && i.grid;
    q ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
    let k;
    const I = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(M=>typeof t.breakpoints[M].slidesPerView < "u").length > 0;
    for (let M = 0; M < d; M += 1) {
        k = 0;
        let j;
        if (u[M] && (j = u[M]),
        q && i.grid.updateSlide(M, j, u),
        !(u[M] && Ui(j, "display") === "none")) {
            if (t.slidesPerView === "auto") {
                I && (u[M].style[i.getDirectionLabel("width")] = "");
                const O = getComputedStyle(j)
                  , A = j.style.transform
                  , D = j.style.webkitTransform;
                if (A && (j.style.transform = "none"),
                D && (j.style.webkitTransform = "none"),
                t.roundLengths)
                    k = i.isHorizontal() ? jo(j, "width", !0) : jo(j, "height", !0);
                else {
                    const W = e(O, "width")
                      , re = e(O, "padding-left")
                      , L = e(O, "padding-right")
                      , H = e(O, "margin-left")
                      , Q = e(O, "margin-right")
                      , pe = O.getPropertyValue("box-sizing");
                    if (pe && pe === "border-box")
                        k = W + H + Q;
                    else {
                        const {clientWidth: G, offsetWidth: J} = j;
                        k = W + re + L + H + Q + (J - G)
                    }
                }
                A && (j.style.transform = A),
                D && (j.style.webkitTransform = D),
                t.roundLengths && (k = Math.floor(k))
            } else
                k = (n - (t.slidesPerView - 1) * y) / t.slidesPerView,
                t.roundLengths && (k = Math.floor(k)),
                u[M] && (u[M].style[i.getDirectionLabel("width")] = `${k}px`);
            u[M] && (u[M].swiperSlideSize = k),
            b.push(k),
            t.centeredSlides ? (_ = _ + k / 2 + N / 2 + y,
            N === 0 && M !== 0 && (_ = _ - n / 2 - y),
            M === 0 && (_ = _ - n / 2 - y),
            Math.abs(_) < 1 / 1e3 && (_ = 0),
            t.roundLengths && (_ = Math.floor(_)),
            P % t.slidesPerGroup === 0 && f.push(_),
            p.push(_)) : (t.roundLengths && (_ = Math.floor(_)),
            (P - Math.min(i.params.slidesPerGroupSkip, P)) % i.params.slidesPerGroup === 0 && f.push(_),
            p.push(_),
            _ = _ + k + y),
            i.virtualSize += k + y,
            N = k,
            P += 1
        }
    }
    if (i.virtualSize = Math.max(i.virtualSize, n) + m,
    a && o && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + y}px`),
    t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + y}px`),
    q && i.grid.updateWrapperSize(k, f),
    !t.centeredSlides) {
        const M = [];
        for (let j = 0; j < f.length; j += 1) {
            let O = f[j];
            t.roundLengths && (O = Math.floor(O)),
            f[j] <= i.virtualSize - n && M.push(O)
        }
        f = M,
        Math.floor(i.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(i.virtualSize - n)
    }
    if (l && t.loop) {
        const M = b[0] + y;
        if (t.slidesPerGroup > 1) {
            const j = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup)
              , O = M * t.slidesPerGroup;
            for (let A = 0; A < j; A += 1)
                f.push(f[f.length - 1] + O)
        }
        for (let j = 0; j < i.virtual.slidesBefore + i.virtual.slidesAfter; j += 1)
            t.slidesPerGroup === 1 && f.push(f[f.length - 1] + M),
            p.push(p[p.length - 1] + M),
            i.virtualSize += M
    }
    if (f.length === 0 && (f = [0]),
    y !== 0) {
        const M = i.isHorizontal() && a ? "marginLeft" : i.getDirectionLabel("marginRight");
        u.filter((j,O)=>!t.cssMode || t.loop ? !0 : O !== u.length - 1).forEach(j=>{
            j.style[M] = `${y}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let M = 0;
        b.forEach(O=>{
            M += O + (y || 0)
        }
        ),
        M -= y;
        const j = M - n;
        f = f.map(O=>O <= 0 ? -w : O > j ? j + m : O)
    }
    if (t.centerInsufficientSlides) {
        let M = 0;
        if (b.forEach(j=>{
            M += j + (y || 0)
        }
        ),
        M -= y,
        M < n) {
            const j = (n - M) / 2;
            f.forEach((O,A)=>{
                f[A] = O - j
            }
            ),
            p.forEach((O,A)=>{
                p[A] = O + j
            }
            )
        }
    }
    if (Object.assign(i, {
        slides: u,
        snapGrid: f,
        slidesGrid: p,
        slidesSizesGrid: b
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        Pr(s, "--swiper-centered-offset-before", `${-f[0]}px`),
        Pr(s, "--swiper-centered-offset-after", `${i.size / 2 - b[b.length - 1] / 2}px`);
        const M = -i.snapGrid[0]
          , j = -i.slidesGrid[0];
        i.snapGrid = i.snapGrid.map(O=>O + M),
        i.slidesGrid = i.slidesGrid.map(O=>O + j)
    }
    if (d !== c && i.emit("slidesLengthChange"),
    f.length !== h && (i.params.watchOverflow && i.checkOverflow(),
    i.emit("snapGridLengthChange")),
    p.length !== E && i.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && i.updateSlidesOffset(),
    i.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const M = `${t.containerModifierClass}backface-hidden`
          , j = i.el.classList.contains(M);
        d <= t.maxBackfaceHiddenSlides ? j || i.el.classList.add(M) : j && i.el.classList.remove(M)
    }
}
function pw(i) {
    const e = this
      , t = []
      , s = e.virtual && e.params.virtual.enabled;
    let r = 0, n;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const a = o=>s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(o=>{
                t.push(o)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const o = e.activeIndex + n;
                if (o > e.slides.length && !s)
                    break;
                t.push(a(o))
            }
    else
        t.push(a(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const o = t[n].offsetHeight;
            r = o > r ? o : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function mw() {
    const i = this
      , e = i.slides
      , t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
        e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment()
}
function gw(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this
      , t = e.params
      , {slides: s, rtlTranslate: r, snapGrid: n} = e;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -i;
    r && (a = i),
    s.forEach(l=>{
        l.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
    }
    ),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < s.length; l += 1) {
        const c = s[l];
        let u = c.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (u -= s[0].swiperSlideOffset);
        const d = (a + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + o)
          , f = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + o)
          , p = -(a - u)
          , b = p + e.slidesSizesGrid[l]
          , w = p >= 0 && p <= e.size - e.slidesSizesGrid[l];
        (p >= 0 && p < e.size - 1 || b > 1 && b <= e.size || p <= 0 && b >= e.size) && (e.visibleSlides.push(c),
        e.visibleSlidesIndexes.push(l),
        s[l].classList.add(t.slideVisibleClass)),
        w && s[l].classList.add(t.slideFullyVisibleClass),
        c.progress = r ? -d : d,
        c.originalProgress = r ? -f : f
    }
}
function vw(i) {
    const e = this;
    if (typeof i > "u") {
        const u = e.rtlTranslate ? -1 : 1;
        i = e && e.translate && e.translate * u || 0
    }
    const t = e.params
      , s = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: n, isEnd: a, progressLoop: o} = e;
    const l = n
      , c = a;
    if (s === 0)
        r = 0,
        n = !0,
        a = !0;
    else {
        r = (i - e.minTranslate()) / s;
        const u = Math.abs(i - e.minTranslate()) < 1
          , d = Math.abs(i - e.maxTranslate()) < 1;
        n = u || r <= 0,
        a = d || r >= 1,
        u && (r = 0),
        d && (r = 1)
    }
    if (t.loop) {
        const u = e.getSlideIndexByData(0)
          , d = e.getSlideIndexByData(e.slides.length - 1)
          , f = e.slidesGrid[u]
          , p = e.slidesGrid[d]
          , b = e.slidesGrid[e.slidesGrid.length - 1]
          , w = Math.abs(i);
        w >= f ? o = (w - f) / b : o = (w + b - p) / b,
        o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: o,
        isBeginning: n,
        isEnd: a
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i),
    n && !l && e.emit("reachBeginning toEdge"),
    a && !c && e.emit("reachEnd toEdge"),
    (l && !n || c && !a) && e.emit("fromEdge"),
    e.emit("progress", r)
}
const Ya = (i,e,t)=>{
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t)
}
;
function bw() {
    const i = this
      , {slides: e, params: t, slidesEl: s, activeIndex: r} = i
      , n = i.virtual && t.virtual.enabled
      , a = i.grid && t.grid && t.grid.rows > 1
      , o = d=>wt(s, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
    let l, c, u;
    if (n)
        if (t.loop) {
            let d = r - i.virtual.slidesBefore;
            d < 0 && (d = i.virtual.slides.length + d),
            d >= i.virtual.slides.length && (d -= i.virtual.slides.length),
            l = o(`[data-swiper-slide-index="${d}"]`)
        } else
            l = o(`[data-swiper-slide-index="${r}"]`);
    else
        a ? (l = e.filter(d=>d.column === r)[0],
        u = e.filter(d=>d.column === r + 1)[0],
        c = e.filter(d=>d.column === r - 1)[0]) : l = e[r];
    l && (a || (u = rw(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !u && (u = e[0]),
    c = sw(l, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !c === 0 && (c = e[e.length - 1]))),
    e.forEach(d=>{
        Ya(d, d === l, t.slideActiveClass),
        Ya(d, d === u, t.slideNextClass),
        Ya(d, d === c, t.slidePrevClass)
    }
    ),
    i.emitSlidesClasses()
}
const Nn = (i,e)=>{
    if (!i || i.destroyed || !i.params)
        return;
    const t = ()=>i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      , s = e.closest(t());
    if (s) {
        let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
        !r && i.isElement && (s.shadowRoot ? r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),
            r && r.remove())
        }
        )),
        r && r.remove()
    }
}
  , Xa = (i,e)=>{
    if (!i.slides[e])
        return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , qo = i=>{
    if (!i || i.destroyed || !i.params)
        return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView)
      , r = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
        const a = r
          , o = [a - e];
        o.push(...Array.from({
            length: e
        }).map((l,c)=>a + s + c)),
        i.slides.forEach((l,c)=>{
            o.includes(l.column) && Xa(i, c)
        }
        );
        return
    }
    const n = r + s - 1;
    if (i.params.rewind || i.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
            const o = (a % t + t) % t;
            (o < r || o > n) && Xa(i, o)
        }
    else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
            a !== r && (a > n || a < r) && Xa(i, a)
}
;
function yw(i) {
    const {slidesGrid: e, params: t} = i
      , s = i.rtlTranslate ? i.translate : -i.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : s >= e[n] && s < e[n + 1] && (r = n + 1) : s >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
    r
}
function ww(i) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: s, params: r, activeIndex: n, realIndex: a, snapIndex: o} = e;
    let l = i, c;
    const u = p=>{
        let b = p - e.virtual.slidesBefore;
        return b < 0 && (b = e.virtual.slides.length + b),
        b >= e.virtual.slides.length && (b -= e.virtual.slides.length),
        b
    }
    ;
    if (typeof l > "u" && (l = yw(e)),
    s.indexOf(t) >= 0)
        c = s.indexOf(t);
    else {
        const p = Math.min(r.slidesPerGroupSkip, l);
        c = p + Math.floor((l - p) / r.slidesPerGroup)
    }
    if (c >= s.length && (c = s.length - 1),
    l === n && !e.params.loop) {
        c !== o && (e.snapIndex = c,
        e.emit("snapIndexChange"));
        return
    }
    if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = u(l);
        return
    }
    const d = e.grid && r.grid && r.grid.rows > 1;
    let f;
    if (e.virtual && r.virtual.enabled && r.loop)
        f = u(l);
    else if (d) {
        const p = e.slides.filter(w=>w.column === l)[0];
        let b = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(b) && (b = Math.max(e.slides.indexOf(p), 0)),
        f = Math.floor(b / r.grid.rows)
    } else if (e.slides[l]) {
        const p = e.slides[l].getAttribute("data-swiper-slide-index");
        p ? f = parseInt(p, 10) : f = l
    } else
        f = l;
    Object.assign(e, {
        previousSnapIndex: o,
        snapIndex: c,
        previousRealIndex: a,
        realIndex: f,
        previousIndex: n,
        activeIndex: l
    }),
    e.initialized && qo(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== f && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Ew(i, e) {
    const t = this
      , s = t.params;
    let r = i.closest(`.${s.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach(o=>{
        !r && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (r = o)
    }
    );
    let n = !1, a;
    if (r) {
        for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === r) {
                n = !0,
                a = o;
                break
            }
    }
    if (r && n)
        t.clickedSlide = r,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var xw = {
    updateSize: fw,
    updateSlides: hw,
    updateAutoHeight: pw,
    updateSlidesOffset: mw,
    updateSlidesProgress: gw,
    updateProgress: vw,
    updateSlidesClasses: bw,
    updateActiveIndex: ww,
    updateClickedSlide: Ew
};
function _w(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this
      , {params: t, rtlTranslate: s, translate: r, wrapperEl: n} = e;
    if (t.virtualTranslate)
        return s ? -r : r;
    if (t.cssMode)
        return r;
    let a = zo(n, i);
    return a += e.cssOverflowAdjustment(),
    s && (a = -a),
    a || 0
}
function Tw(i, e) {
    const t = this
      , {rtlTranslate: s, params: r, wrapperEl: n, progress: a} = t;
    let o = 0
      , l = 0;
    const c = 0;
    t.isHorizontal() ? o = s ? -i : i : l = i,
    r.roundLengths && (o = Math.floor(o),
    l = Math.floor(l)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? o : l,
    r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -o : -l : r.virtualTranslate || (t.isHorizontal() ? o -= t.cssOverflowAdjustment() : l -= t.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`);
    let u;
    const d = t.maxTranslate() - t.minTranslate();
    d === 0 ? u = 0 : u = (i - t.minTranslate()) / d,
    u !== a && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e)
}
function Sw() {
    return -this.snapGrid[0]
}
function Cw() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function $w(i, e, t, s, r) {
    i === void 0 && (i = 0),
    e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    s === void 0 && (s = !0);
    const n = this
      , {params: a, wrapperEl: o} = n;
    if (n.animating && a.preventInteractionOnTransition)
        return !1;
    const l = n.minTranslate()
      , c = n.maxTranslate();
    let u;
    if (s && i > l ? u = l : s && i < c ? u = c : u = i,
    n.updateProgress(u),
    a.cssMode) {
        const d = n.isHorizontal();
        if (e === 0)
            o[d ? "scrollLeft" : "scrollTop"] = -u;
        else {
            if (!n.support.smoothScroll)
                return mh({
                    swiper: n,
                    targetPosition: -u,
                    side: d ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [d ? "left" : "top"]: -u,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(u),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(u),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(f) {
        !n || n.destroyed || f.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        n.animating = !1,
        t && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var Pw = {
    getTranslate: _w,
    setTranslate: Tw,
    minTranslate: Sw,
    maxTranslate: Cw,
    translateTo: $w
};
function Aw(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`,
    t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""),
    t.emit("setTransition", i, e)
}
function bh(i) {
    let {swiper: e, runCallbacks: t, direction: s, step: r} = i;
    const {activeIndex: n, previousIndex: a} = e;
    let o = s;
    if (o || (n > a ? o = "next" : n < a ? o = "prev" : o = "reset"),
    e.emit(`transition${r}`),
    t && n !== a) {
        if (o === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`),
        o === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}
function Mw(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(),
    bh({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "Start"
    }))
}
function Ow(i, e) {
    i === void 0 && (i = !0);
    const t = this
      , {params: s} = t;
    t.animating = !1,
    !s.cssMode && (t.setTransition(0),
    bh({
        swiper: t,
        runCallbacks: i,
        direction: e,
        step: "End"
    }))
}
var kw = {
    setTransition: Aw,
    transitionStart: Mw,
    transitionEnd: Ow
};
function Lw(i, e, t, s, r) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    let a = i;
    a < 0 && (a = 0);
    const {params: o, snapGrid: l, slidesGrid: c, previousIndex: u, activeIndex: d, rtlTranslate: f, wrapperEl: p, enabled: b} = n;
    if (!b && !s && !r || n.destroyed || n.animating && o.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = n.params.speed);
    const w = Math.min(n.params.slidesPerGroupSkip, a);
    let m = w + Math.floor((a - w) / n.params.slidesPerGroup);
    m >= l.length && (m = l.length - 1);
    const h = -l[m];
    if (o.normalizeSlideIndex)
        for (let y = 0; y < c.length; y += 1) {
            const _ = -Math.floor(h * 100)
              , N = Math.floor(c[y] * 100)
              , P = Math.floor(c[y + 1] * 100);
            typeof c[y + 1] < "u" ? _ >= N && _ < P - (P - N) / 2 ? a = y : _ >= N && _ < P && (a = y + 1) : _ >= N && (a = y)
        }
    if (n.initialized && a !== d && (!n.allowSlideNext && (f ? h > n.translate && h > n.minTranslate() : h < n.translate && h < n.minTranslate()) || !n.allowSlidePrev && h > n.translate && h > n.maxTranslate() && (d || 0) !== a))
        return !1;
    a !== (u || 0) && t && n.emit("beforeSlideChangeStart"),
    n.updateProgress(h);
    let E;
    if (a > d ? E = "next" : a < d ? E = "prev" : E = "reset",
    f && -h === n.translate || !f && h === n.translate)
        return n.updateActiveIndex(a),
        o.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        o.effect !== "slide" && n.setTranslate(h),
        E !== "reset" && (n.transitionStart(t, E),
        n.transitionEnd(t, E)),
        !1;
    if (o.cssMode) {
        const y = n.isHorizontal()
          , _ = f ? h : -h;
        if (e === 0) {
            const N = n.virtual && n.params.virtual.enabled;
            N && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            N && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                p[y ? "scrollLeft" : "scrollTop"] = _
            }
            )) : p[y ? "scrollLeft" : "scrollTop"] = _,
            N && requestAnimationFrame(()=>{
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            )
        } else {
            if (!n.support.smoothScroll)
                return mh({
                    swiper: n,
                    targetPosition: _,
                    side: y ? "left" : "top"
                }),
                !0;
            p.scrollTo({
                [y ? "left" : "top"]: _,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e),
    n.setTranslate(h),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, s),
    n.transitionStart(t, E),
    e === 0 ? n.transitionEnd(t, E) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(_) {
        !n || n.destroyed || _.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(t, E))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function Iw(i, e, t, s) {
    i === void 0 && (i = 0),
    t === void 0 && (t = !0),
    typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    if (r.destroyed)
        return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = i;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            a = a + r.virtual.slidesBefore;
        else {
            let o;
            if (n) {
                const f = a * r.params.grid.rows;
                o = r.slides.filter(p=>p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                o = r.getSlideIndexByData(a);
            const l = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
              , {centeredSlides: c} = r.params;
            let u = r.params.slidesPerView;
            u === "auto" ? u = r.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
            c && u % 2 === 0 && (u = u + 1));
            let d = l - o < u;
            if (c && (d = d || o < Math.ceil(u / 2)),
            s && c && r.params.slidesPerView !== "auto" && !n && (d = !1),
            d) {
                const f = c ? o < r.activeIndex ? "prev" : "next" : o - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: f,
                    slideTo: !0,
                    activeSlideIndex: f === "next" ? o + 1 : o - l + 1,
                    slideRealIndex: f === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const f = a * r.params.grid.rows;
                a = r.slides.filter(p=>p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column
            } else
                a = r.getSlideIndexByData(a)
        }
    return requestAnimationFrame(()=>{
        r.slideTo(a, e, t, s)
    }
    ),
    r
}
function Dw(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {enabled: r, params: n, animating: a} = s;
    if (!r || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    let o = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const l = s.activeIndex < n.slidesPerGroupSkip ? 1 : o
      , c = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !c && n.loopPreventsSliding)
            return !1;
        if (s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft,
        s.activeIndex === s.slides.length - 1 && n.cssMode)
            return requestAnimationFrame(()=>{
                s.slideTo(s.activeIndex + l, i, e, t)
            }
            ),
            !0
    }
    return n.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + l, i, e, t)
}
function Rw(i, e, t) {
    e === void 0 && (e = !0);
    const s = this
      , {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: c} = s;
    if (!l || s.destroyed)
        return s;
    typeof i > "u" && (i = s.params.speed);
    const u = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (c && !u && r.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const d = o ? s.translate : -s.translate;
    function f(h) {
        return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
    }
    const p = f(d)
      , b = n.map(h=>f(h));
    let w = n[b.indexOf(p) - 1];
    if (typeof w > "u" && r.cssMode) {
        let h;
        n.forEach((E,y)=>{
            p >= E && (h = y)
        }
        ),
        typeof h < "u" && (w = n[h > 0 ? h - 1 : h])
    }
    let m = 0;
    if (typeof w < "u" && (m = a.indexOf(w),
    m < 0 && (m = s.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1,
    m = Math.max(m, 0))),
    r.rewind && s.isBeginning) {
        const h = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(h, i, e, t)
    } else if (r.loop && s.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame(()=>{
            s.slideTo(m, i, e, t)
        }
        ),
        !0;
    return s.slideTo(m, i, e, t)
}
function Nw(i, e, t) {
    e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
        return typeof i > "u" && (i = s.params.speed),
        s.slideTo(s.activeIndex, i, e, t)
}
function Vw(i, e, t, s) {
    e === void 0 && (e = !0),
    s === void 0 && (s = .5);
    const r = this;
    if (r.destroyed)
        return;
    typeof i > "u" && (i = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n)
      , o = a + Math.floor((n - a) / r.params.slidesPerGroup)
      , l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
        const c = r.snapGrid[o]
          , u = r.snapGrid[o + 1];
        l - c > (u - c) * s && (n += r.params.slidesPerGroup)
    } else {
        const c = r.snapGrid[o - 1]
          , u = r.snapGrid[o];
        l - c <= (u - c) * s && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, r.slidesGrid.length - 1),
    r.slideTo(n, i, e, t)
}
function Hw() {
    const i = this;
    if (i.destroyed)
        return;
    const {params: e, slidesEl: t} = i
      , s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let r = i.clickedIndex, n;
    const a = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (i.animating)
            return;
        n = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? r < i.loopedSlides - s / 2 || r > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(),
        r = i.getSlideIndex(wt(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        Cs(()=>{
            i.slideTo(r)
        }
        )) : i.slideTo(r) : r > i.slides.length - s ? (i.loopFix(),
        r = i.getSlideIndex(wt(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        Cs(()=>{
            i.slideTo(r)
        }
        )) : i.slideTo(r)
    } else
        i.slideTo(r)
}
var Fw = {
    slideTo: Lw,
    slideToLoop: Iw,
    slideNext: Dw,
    slidePrev: Rw,
    slideReset: Nw,
    slideToClosest: Vw,
    slideToClickedSlide: Hw
};
function Bw(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    const r = ()=>{
        wt(s, `.${t.slideClass}, swiper-slide`).forEach((d,f)=>{
            d.setAttribute("data-swiper-slide-index", f)
        }
        )
    }
      , n = e.grid && t.grid && t.grid.rows > 1
      , a = t.slidesPerGroup * (n ? t.grid.rows : 1)
      , o = e.slides.length % a !== 0
      , l = n && e.slides.length % t.grid.rows !== 0
      , c = u=>{
        for (let d = 0; d < u; d += 1) {
            const f = e.isElement ? Gt("swiper-slide", [t.slideBlankClass]) : Gt("div", [t.slideClass, t.slideBlankClass]);
            e.slidesEl.append(f)
        }
    }
    ;
    if (o) {
        if (t.loopAddBlankSlides) {
            const u = a - e.slides.length % a;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Qn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else if (l) {
        if (t.loopAddBlankSlides) {
            const u = t.grid.rows - e.slides.length % t.grid.rows;
            c(u),
            e.recalcSlides(),
            e.updateSlides()
        } else
            Qn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r()
    } else
        r();
    e.loopFix({
        slideRealIndex: i,
        direction: t.centeredSlides ? void 0 : "next"
    })
}
function zw(i) {
    let {slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: r, activeSlideIndex: n, byController: a, byMousewheel: o} = i === void 0 ? {} : i;
    const l = this;
    if (!l.params.loop)
        return;
    l.emit("beforeLoopFix");
    const {slides: c, allowSlidePrev: u, allowSlideNext: d, slidesEl: f, params: p} = l
      , {centeredSlides: b} = p;
    if (l.allowSlidePrev = !0,
    l.allowSlideNext = !0,
    l.virtual && p.virtual.enabled) {
        t && (!p.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : p.centeredSlides && l.snapIndex < p.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        l.allowSlidePrev = u,
        l.allowSlideNext = d,
        l.emit("loopFix");
        return
    }
    let w = p.slidesPerView;
    w === "auto" ? w = l.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(p.slidesPerView, 10)),
    b && w % 2 === 0 && (w = w + 1));
    const m = p.slidesPerGroupAuto ? w : p.slidesPerGroup;
    let h = m;
    h % m !== 0 && (h += m - h % m),
    h += p.loopAdditionalSlides,
    l.loopedSlides = h;
    const E = l.grid && p.grid && p.grid.rows > 1;
    c.length < w + h ? Qn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && p.grid.fill === "row" && Qn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const y = []
      , _ = [];
    let N = l.activeIndex;
    typeof n > "u" ? n = l.getSlideIndex(c.filter(A=>A.classList.contains(p.slideActiveClass))[0]) : N = n;
    const P = s === "next" || !s
      , q = s === "prev" || !s;
    let k = 0
      , I = 0;
    const M = E ? Math.ceil(c.length / p.grid.rows) : c.length
      , O = (E ? c[n].column : n) + (b && typeof r > "u" ? -w / 2 + .5 : 0);
    if (O < h) {
        k = Math.max(h - O, m);
        for (let A = 0; A < h - O; A += 1) {
            const D = A - Math.floor(A / M) * M;
            if (E) {
                const W = M - D - 1;
                for (let re = c.length - 1; re >= 0; re -= 1)
                    c[re].column === W && y.push(re)
            } else
                y.push(M - D - 1)
        }
    } else if (O + w > M - h) {
        I = Math.max(O - (M - h * 2), m);
        for (let A = 0; A < I; A += 1) {
            const D = A - Math.floor(A / M) * M;
            E ? c.forEach((W,re)=>{
                W.column === D && _.push(re)
            }
            ) : _.push(D)
        }
    }
    if (l.__preventObserver__ = !0,
    requestAnimationFrame(()=>{
        l.__preventObserver__ = !1
    }
    ),
    q && y.forEach(A=>{
        c[A].swiperLoopMoveDOM = !0,
        f.prepend(c[A]),
        c[A].swiperLoopMoveDOM = !1
    }
    ),
    P && _.forEach(A=>{
        c[A].swiperLoopMoveDOM = !0,
        f.append(c[A]),
        c[A].swiperLoopMoveDOM = !1
    }
    ),
    l.recalcSlides(),
    p.slidesPerView === "auto" ? l.updateSlides() : E && (y.length > 0 && q || _.length > 0 && P) && l.slides.forEach((A,D)=>{
        l.grid.updateSlide(D, A, l.slides)
    }
    ),
    p.watchSlidesProgress && l.updateSlidesOffset(),
    t) {
        if (y.length > 0 && q) {
            if (typeof e > "u") {
                const A = l.slidesGrid[N]
                  , W = l.slidesGrid[N + k] - A;
                o ? l.setTranslate(l.translate - W) : (l.slideTo(N + Math.ceil(k), 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - W,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - W))
            } else if (r) {
                const A = E ? y.length / p.grid.rows : y.length;
                l.slideTo(l.activeIndex + A, 0, !1, !0),
                l.touchEventsData.currentTranslate = l.translate
            }
        } else if (_.length > 0 && P)
            if (typeof e > "u") {
                const A = l.slidesGrid[N]
                  , W = l.slidesGrid[N - I] - A;
                o ? l.setTranslate(l.translate - W) : (l.slideTo(N - I, 0, !1, !0),
                r && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - W,
                l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - W))
            } else {
                const A = E ? _.length / p.grid.rows : _.length;
                l.slideTo(l.activeIndex - A, 0, !1, !0)
            }
    }
    if (l.allowSlidePrev = u,
    l.allowSlideNext = d,
    l.controller && l.controller.control && !a) {
        const A = {
            slideRealIndex: e,
            direction: s,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(l.controller.control) ? l.controller.control.forEach(D=>{
            !D.destroyed && D.params.loop && D.loopFix({
                ...A,
                slideTo: D.params.slidesPerView === p.slidesPerView ? t : !1
            })
        }
        ) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
            ...A,
            slideTo: l.controller.control.params.slidesPerView === p.slidesPerView ? t : !1
        })
    }
    l.emit("loopFix")
}
function jw() {
    const i = this
      , {params: e, slidesEl: t} = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
        return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach(r=>{
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        s[n] = r
    }
    ),
    i.slides.forEach(r=>{
        r.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(r=>{
        t.append(r)
    }
    ),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0)
}
var qw = {
    loopCreate: Bw,
    loopFix: zw,
    loopDestroy: jw
};
function Gw(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = i ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    )
}
function Ww() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0),
    i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    i.isElement && requestAnimationFrame(()=>{
        i.__preventObserver__ = !1
    }
    ))
}
var Yw = {
    setGrabCursor: Gw,
    unsetGrabCursor: Ww
};
function Xw(i, e) {
    e === void 0 && (e = this);
    function t(s) {
        if (!s || s === _t() || s === at())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const r = s.closest(i);
        return !r && !s.getRootNode ? null : r || t(s.getRootNode().host)
    }
    return t(e)
}
function hu(i, e, t) {
    const s = at()
      , {params: r} = i
      , n = r.edgeSwipeDetection
      , a = r.edgeSwipeThreshold;
    return n && (t <= a || t >= s.innerWidth - a) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function Uw(i) {
    const e = this
      , t = _t();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== s.pointerId)
            return;
        r.pointerId = s.pointerId
    } else
        s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
        hu(e, s, s.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: a, enabled: o} = e;
    if (!o || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let l = s.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l) || "which"in s && s.which === 3 || "button"in s && s.button > 0 || r.isTouched && r.isMoved)
        return;
    const c = !!n.noSwipingClass && n.noSwipingClass !== ""
      , u = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && u && (l = u[0]);
    const d = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , f = !!(s.target && s.target.shadowRoot);
    if (n.noSwiping && (f ? Xw(d, l) : l.closest(d))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !l.closest(n.swipeHandler))
        return;
    a.currentX = s.pageX,
    a.currentY = s.pageY;
    const p = a.currentX
      , b = a.currentY;
    if (!hu(e, s, p))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = p,
    a.startY = b,
    r.touchStartTime = Qt(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
    let w = !0;
    l.matches(r.focusableElements) && (w = !1,
    l.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== l && t.activeElement.blur();
    const m = w && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || m) && !l.isContentEditable && s.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", s)
}
function Kw(i) {
    const e = _t()
      , t = this
      , s = t.touchEventsData
      , {params: r, touches: n, rtlTranslate: a, enabled: o} = t;
    if (!o || !r.simulateTouch && i.pointerType === "mouse")
        return;
    let l = i;
    if (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" && (s.touchId !== null || l.pointerId !== s.pointerId))
        return;
    let c;
    if (l.type === "touchmove") {
        if (c = [...l.changedTouches].filter(P=>P.identifier === s.touchId)[0],
        !c || c.identifier !== s.touchId)
            return
    } else
        c = l;
    if (!s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l);
        return
    }
    const u = c.pageX
      , d = c.pageY;
    if (l.preventedByNestedSwiper) {
        n.startX = u,
        n.startY = d;
        return
    }
    if (!t.allowTouchMove) {
        l.target.matches(s.focusableElements) || (t.allowClick = !1),
        s.isTouched && (Object.assign(n, {
            startX: u,
            startY: d,
            currentX: u,
            currentY: d
        }),
        s.touchStartTime = Qt());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (t.isVertical()) {
            if (d < n.startY && t.translate <= t.maxTranslate() || d > n.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (u < n.startX && t.translate <= t.maxTranslate() || u > n.startX && t.translate >= t.minTranslate())
            return
    }
    if (e.activeElement && l.target === e.activeElement && l.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        t.allowClick = !1;
        return
    }
    s.allowTouchCallbacks && t.emit("touchMove", l),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = u,
    n.currentY = d;
    const f = n.currentX - n.startX
      , p = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(f ** 2 + p ** 2) < t.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let P;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : f * f + p * p >= 25 && (P = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI,
        s.isScrolling = t.isHorizontal() ? P > r.touchAngle : 90 - P > r.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", l),
    typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
    s.isScrolling || l.type === "touchmove" && s.preventTouchMoveFromPointerMove) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    t.allowClick = !1,
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let b = t.isHorizontal() ? f : p
      , w = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (b = Math.abs(b) * (a ? 1 : -1),
    w = Math.abs(w) * (a ? 1 : -1)),
    n.diff = b,
    b *= r.touchRatio,
    a && (b = -b,
    w = -w);
    const m = t.touchesDirection;
    t.swipeDirection = b > 0 ? "prev" : "next",
    t.touchesDirection = w > 0 ? "prev" : "next";
    const h = t.params.loop && !r.cssMode
      , E = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
        if (h && E && t.loopFix({
            direction: t.swipeDirection
        }),
        s.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const P = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            t.wrapperEl.dispatchEvent(P)
        }
        s.allowMomentumBounce = !1,
        r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l)
    }
    let y;
    if (new Date().getTime(),
    s.isMoved && s.allowThresholdMove && m !== t.touchesDirection && h && E && Math.abs(b) >= 1) {
        Object.assign(n, {
            startX: u,
            startY: d,
            currentX: u,
            currentY: d,
            startTranslate: s.currentTranslate
        }),
        s.loopSwapReset = !0,
        s.startTranslate = s.currentTranslate;
        return
    }
    t.emit("sliderMove", l),
    s.isMoved = !0,
    s.currentTranslate = b + s.startTranslate;
    let _ = !0
      , N = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (N = 0),
    b > 0 ? (h && E && !y && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > t.minTranslate() && (_ = !1,
    r.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + b) ** N))) : b < 0 && (h && E && !y && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }),
    s.currentTranslate < t.maxTranslate() && (_ = !1,
    r.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - b) ** N))),
    _ && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
        if (Math.abs(b) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                s.currentTranslate = s.startTranslate,
                n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(s.currentTranslate),
    t.setTranslate(s.currentTranslate))
}
function Zw(i) {
    const e = this
      , t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let r;
    if (s.type === "touchend" || s.type === "touchcancel") {
        if (r = [...s.changedTouches].filter(N=>N.identifier === t.touchId)[0],
        !r || r.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || s.pointerId !== t.pointerId)
            return;
        r = s
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: a, touches: o, rtlTranslate: l, slidesGrid: c, enabled: u} = e;
    if (!u || !a.simulateTouch && s.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const d = Qt()
      , f = d - t.touchStartTime;
    if (e.allowClick) {
        const N = s.path || s.composedPath && s.composedPath();
        e.updateClickedSlide(N && N[0] || s.target, N),
        e.emit("tap click", s),
        f < 300 && d - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s)
    }
    if (t.lastClickTime = Qt(),
    Cs(()=>{
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || o.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let p;
    if (a.followFinger ? p = l ? e.translate : -e.translate : p = -t.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: p
        });
        return
    }
    const b = p >= -e.maxTranslate() && !e.params.loop;
    let w = 0
      , m = e.slidesSizesGrid[0];
    for (let N = 0; N < c.length; N += N < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const P = N < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof c[N + P] < "u" ? (b || p >= c[N] && p < c[N + P]) && (w = N,
        m = c[N + P] - c[N]) : (b || p >= c[N]) && (w = N,
        m = c[c.length - 1] - c[c.length - 2])
    }
    let h = null
      , E = null;
    a.rewind && (e.isBeginning ? E = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (h = 0));
    const y = (p - c[w]) / m
      , _ = w < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (f > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (y >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? h : w + _) : e.slideTo(w)),
        e.swipeDirection === "prev" && (y > 1 - a.longSwipesRatio ? e.slideTo(w + _) : E !== null && y < 0 && Math.abs(y) > a.longSwipesRatio ? e.slideTo(E) : e.slideTo(w))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(w + _) : e.slideTo(w) : (e.swipeDirection === "next" && e.slideTo(h !== null ? h : w + _),
        e.swipeDirection === "prev" && e.slideTo(E !== null ? E : w))
    }
}
function pu() {
    const i = this
      , {params: e, el: t} = i;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && i.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: r, snapGrid: n} = i
      , a = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0,
    i.allowSlidePrev = !0,
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !o ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !a ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout),
    i.autoplay.resizeTimeout = setTimeout(()=>{
        i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume()
    }
    , 500)),
    i.allowSlidePrev = r,
    i.allowSlideNext = s,
    i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow()
}
function Jw(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (i.stopPropagation(),
    i.stopImmediatePropagation())))
}
function Qw() {
    const i = this
      , {wrapperEl: e, rtlTranslate: t, enabled: s} = i;
    if (!s)
        return;
    i.previousTranslate = i.translate,
    i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop,
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
    let r;
    const n = i.maxTranslate() - i.minTranslate();
    n === 0 ? r = 0 : r = (i.translate - i.minTranslate()) / n,
    r !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1)
}
function e3(i) {
    const e = this;
    Nn(e, i.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function t3() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0,
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"))
}
const yh = (i,e)=>{
    const t = _t()
      , {params: s, el: r, wrapperEl: n, device: a} = i
      , o = !!s.nested
      , l = e === "on" ? "addEventListener" : "removeEventListener"
      , c = e;
    t[l]("touchstart", i.onDocumentTouchStart, {
        passive: !1,
        capture: o
    }),
    r[l]("touchstart", i.onTouchStart, {
        passive: !1
    }),
    r[l]("pointerdown", i.onTouchStart, {
        passive: !1
    }),
    t[l]("touchmove", i.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("pointermove", i.onTouchMove, {
        passive: !1,
        capture: o
    }),
    t[l]("touchend", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerup", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointercancel", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("touchcancel", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerout", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("pointerleave", i.onTouchEnd, {
        passive: !0
    }),
    t[l]("contextmenu", i.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && r[l]("click", i.onClick, !0),
    s.cssMode && n[l]("scroll", i.onScroll),
    s.updateOnWindowResize ? i[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pu, !0) : i[c]("observerUpdate", pu, !0),
    r[l]("load", i.onLoad, {
        capture: !0
    })
}
;
function i3() {
    const i = this
      , {params: e} = i;
    i.onTouchStart = Uw.bind(i),
    i.onTouchMove = Kw.bind(i),
    i.onTouchEnd = Zw.bind(i),
    i.onDocumentTouchStart = t3.bind(i),
    e.cssMode && (i.onScroll = Qw.bind(i)),
    i.onClick = Jw.bind(i),
    i.onLoad = e3.bind(i),
    yh(i, "on")
}
function s3() {
    yh(this, "off")
}
var r3 = {
    attachEvents: i3,
    detachEvents: s3
};
const mu = (i,e)=>i.grid && e.grid && e.grid.rows > 1;
function n3() {
    const i = this
      , {realIndex: e, initialized: t, params: s, el: r} = i
      , n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const a = i.getBreakpoint(n, i.params.breakpointsBase, i.el);
    if (!a || i.currentBreakpoint === a)
        return;
    const l = (a in n ? n[a] : void 0) || i.originalParams
      , c = mu(i, s)
      , u = mu(i, l)
      , d = i.params.grabCursor
      , f = l.grabCursor
      , p = s.enabled;
    c && !u ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()) : !c && u && (r.classList.add(`${s.containerModifierClass}grid`),
    (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`),
    i.emitContainerClasses()),
    d && !f ? i.unsetGrabCursor() : !d && f && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(y=>{
        if (typeof l[y] > "u")
            return;
        const _ = s[y] && s[y].enabled
          , N = l[y] && l[y].enabled;
        _ && !N && i[y].disable(),
        !_ && N && i[y].enable()
    }
    );
    const b = l.direction && l.direction !== s.direction
      , w = s.loop && (l.slidesPerView !== s.slidesPerView || b)
      , m = s.loop;
    b && t && i.changeDirection(),
    qt(i.params, l);
    const h = i.params.enabled
      , E = i.params.loop;
    Object.assign(i, {
        allowTouchMove: i.params.allowTouchMove,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev
    }),
    p && !h ? i.disable() : !p && h && i.enable(),
    i.currentBreakpoint = a,
    i.emit("_beforeBreakpoint", l),
    t && (w ? (i.loopDestroy(),
    i.loopCreate(e),
    i.updateSlides()) : !m && E ? (i.loopCreate(e),
    i.updateSlides()) : m && !E && i.loopDestroy()),
    i.emit("breakpoint", l)
}
function a3(i, e, t) {
    if (e === void 0 && (e = "window"),
    !i || e === "container" && !t)
        return;
    let s = !1;
    const r = at()
      , n = e === "window" ? r.innerHeight : t.clientHeight
      , a = Object.keys(i).map(o=>{
        if (typeof o == "string" && o.indexOf("@") === 0) {
            const l = parseFloat(o.substr(1));
            return {
                value: n * l,
                point: o
            }
        }
        return {
            value: o,
            point: o
        }
    }
    );
    a.sort((o,l)=>parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
        const {point: l, value: c} = a[o];
        e === "window" ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = l) : c <= t.clientWidth && (s = l)
    }
    return s || "max"
}
var o3 = {
    setBreakpoint: n3,
    getBreakpoint: a3
};
function l3(i, e) {
    const t = [];
    return i.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(r=>{
            s[r] && t.push(e + r)
        }
        ) : typeof s == "string" && t.push(e + s)
    }
    ),
    t
}
function c3() {
    const i = this
      , {classNames: e, params: t, rtl: s, el: r, device: n} = i
      , a = l3(["initialized", t.direction, {
        "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: s
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a),
    r.classList.add(...e),
    i.emitContainerClasses()
}
function u3() {
    const i = this
      , {el: e, classNames: t} = i;
    e.classList.remove(...t),
    i.emitContainerClasses()
}
var d3 = {
    addClasses: c3,
    removeClasses: u3
};
function f3() {
    const i = this
      , {isLocked: e, params: t} = i
      , {slidesOffsetBefore: s} = t;
    if (s) {
        const r = i.slides.length - 1
          , n = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
        i.isLocked = i.size > n
    } else
        i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock")
}
var h3 = {
    checkOverflow: f3
}
  , gu = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
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
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
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
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function p3(i, e) {
    return function(s) {
        s === void 0 && (s = {});
        const r = Object.keys(s)[0]
          , n = s[r];
        if (typeof n != "object" || n === null) {
            qt(e, s);
            return
        }
        if (i[r] === !0 && (i[r] = {
            enabled: !0
        }),
        r === "navigation" && i[r] && i[r].enabled && !i[r].prevEl && !i[r].nextEl && (i[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && i[r] && i[r].enabled && !i[r].el && (i[r].auto = !0),
        !(r in i && "enabled"in n)) {
            qt(e, s);
            return
        }
        typeof i[r] == "object" && !("enabled"in i[r]) && (i[r].enabled = !0),
        i[r] || (i[r] = {
            enabled: !1
        }),
        qt(e, s)
    }
}
const Ua = {
    eventsEmitter: dw,
    update: xw,
    translate: Pw,
    transition: kw,
    slide: Fw,
    loop: qw,
    grabCursor: Yw,
    events: r3,
    breakpoints: o3,
    checkOverflow: h3,
    classes: d3
}
  , Ka = {};
class Rt {
    constructor() {
        let e, t;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
            r[n] = arguments[n];
        r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e,t] = r,
        t || (t = {}),
        t = qt({}, t),
        e && !t.el && (t.el = e);
        const a = _t();
        if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
            const u = [];
            return a.querySelectorAll(t.el).forEach(d=>{
                const f = qt({}, t, {
                    el: d
                });
                u.push(new Rt(f))
            }
            ),
            u
        }
        const o = this;
        o.__swiper__ = !0,
        o.support = gh(),
        o.device = vh({
            userAgent: t.userAgent
        }),
        o.browser = lw(),
        o.eventsListeners = {},
        o.eventsAnyListeners = [],
        o.modules = [...o.__modules__],
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach(u=>{
            u({
                params: t,
                swiper: o,
                extendParams: p3(t, l),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o)
            })
        }
        );
        const c = qt({}, gu, l);
        return o.params = qt({}, c, Ka, t),
        o.originalParams = qt({}, o.params),
        o.passedParams = qt({}, t),
        o.params && o.params.on && Object.keys(o.params.on).forEach(u=>{
            o.on(u, o.params.on[u])
        }
        ),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return o.params.direction === "horizontal"
            },
            isVertical() {
                return o.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: s} = this
          , r = wt(t, `.${s.slideClass}, swiper-slide`)
          , n = Gr(r[0]);
        return Gr(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: s} = e;
        e.slides = wt(t, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = s.minTranslate()
          , a = (s.maxTranslate() - r) * e + r;
        s.translateTo(a, typeof t > "u" ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(s=>{
            const r = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: r
            }),
            e.emit("_slideClass", s, r)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e, t) {
        e === void 0 && (e = "current"),
        t === void 0 && (t = !1);
        const s = this
          , {params: r, slides: n, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: c} = s;
        let u = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let d = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0, f;
            for (let p = c + 1; p < n.length; p += 1)
                n[p] && !f && (d += Math.ceil(n[p].swiperSlideSize),
                u += 1,
                d > l && (f = !0));
            for (let p = c - 1; p >= 0; p -= 1)
                n[p] && !f && (d += n[p].swiperSlideSize,
                u += 1,
                d > l && (f = !0))
        } else if (e === "current")
            for (let d = c + 1; d < n.length; d += 1)
                (t ? a[d] + o[d] - a[c] < l : a[d] - a[c] < l) && (u += 1);
        else
            for (let d = c - 1; d >= 0; d -= 1)
                a[c] - a[d] < l && (u += 1);
        return u
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: s} = e;
        s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{
            a.complete && Nn(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function r() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (s.freeMode && s.freeMode.enabled && !s.cssMode)
            r(),
            s.autoHeight && e.updateAutoHeight();
        else {
            if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const a = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t) {
        t === void 0 && (t = !0);
        const s = this
          , r = s.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        s.params.direction = e,
        s.slides.forEach(n=>{
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        t && s.update()),
        s
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let s = e || t.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = t,
        s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const r = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (()=>s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : wt(s, r())[0])();
        return !a && t.params.createElements && (a = Gt("div", t.params.wrapperClass),
        s.append(a),
        wt(s, `.${t.params.slideClass}`).forEach(o=>{
            a.append(o)
        }
        )),
        Object.assign(t, {
            el: s,
            wrapperEl: a,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || Ui(s, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || Ui(s, "direction") === "rtl"),
            wrongRTL: Ui(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(n=>{
            n.complete ? Nn(t, n) : n.addEventListener("load", a=>{
                Nn(t, a.target)
            }
            )
        }
        ),
        qo(t),
        t.initialized = !0,
        qo(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e, t) {
        e === void 0 && (e = !0),
        t === void 0 && (t = !0);
        const s = this
          , {params: r, el: n, wrapperEl: a, slides: o} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        t && (s.removeClasses(),
        n.removeAttribute("style"),
        a.removeAttribute("style"),
        o && o.length && o.forEach(l=>{
            l.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
            l.removeAttribute("style"),
            l.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(l=>{
            s.off(l)
        }
        ),
        e !== !1 && (s.el.swiper = null,
        ew(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        qt(Ka, e)
    }
    static get extendedDefaults() {
        return Ka
    }
    static get defaults() {
        return gu
    }
    static installModule(e) {
        Rt.prototype.__modules__ || (Rt.prototype.__modules__ = []);
        const t = Rt.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t=>Rt.installModule(t)),
        Rt) : (Rt.installModule(e),
        Rt)
    }
}
Object.keys(Ua).forEach(i=>{
    Object.keys(Ua[i]).forEach(e=>{
        Rt.prototype[e] = Ua[i][e]
    }
    )
}
);
Rt.use([cw, uw]);
function m3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    t({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let n;
    const a = _t();
    e.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const o = a.createElement("div");
    function l(b, w) {
        const m = e.params.virtual;
        if (m.cache && e.virtual.cache[w])
            return e.virtual.cache[w];
        let h;
        return m.renderSlide ? (h = m.renderSlide.call(e, b, w),
        typeof h == "string" && (o.innerHTML = h,
        h = o.children[0])) : e.isElement ? h = Gt("swiper-slide") : h = Gt("div", e.params.slideClass),
        h.setAttribute("data-swiper-slide-index", w),
        m.renderSlide || (h.innerHTML = b),
        m.cache && (e.virtual.cache[w] = h),
        h
    }
    function c(b, w) {
        const {slidesPerView: m, slidesPerGroup: h, centeredSlides: E, loop: y, initialSlide: _} = e.params;
        if (w && !y && _ > 0)
            return;
        const {addSlidesBefore: N, addSlidesAfter: P} = e.params.virtual
          , {from: q, to: k, slides: I, slidesGrid: M, offset: j} = e.virtual;
        e.params.cssMode || e.updateActiveIndex();
        const O = e.activeIndex || 0;
        let A;
        e.rtlTranslate ? A = "right" : A = e.isHorizontal() ? "left" : "top";
        let D, W;
        E ? (D = Math.floor(m / 2) + h + P,
        W = Math.floor(m / 2) + h + N) : (D = m + (h - 1) + P,
        W = (y ? m : h) + N);
        let re = O - W
          , L = O + D;
        y || (re = Math.max(re, 0),
        L = Math.min(L, I.length - 1));
        let H = (e.slidesGrid[re] || 0) - (e.slidesGrid[0] || 0);
        y && O >= W ? (re -= W,
        E || (H += e.slidesGrid[0])) : y && O < W && (re = -W,
        E && (H += e.slidesGrid[0])),
        Object.assign(e.virtual, {
            from: re,
            to: L,
            offset: H,
            slidesGrid: e.slidesGrid,
            slidesBefore: W,
            slidesAfter: D
        });
        function Q() {
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            r("virtualUpdate")
        }
        if (q === re && k === L && !b) {
            e.slidesGrid !== M && H !== j && e.slides.forEach(le=>{
                le.style[A] = `${H - Math.abs(e.cssOverflowAdjustment())}px`
            }
            ),
            e.updateProgress(),
            r("virtualUpdate");
            return
        }
        if (e.params.virtual.renderExternal) {
            e.params.virtual.renderExternal.call(e, {
                offset: H,
                from: re,
                to: L,
                slides: function() {
                    const Te = [];
                    for (let ft = re; ft <= L; ft += 1)
                        Te.push(I[ft]);
                    return Te
                }()
            }),
            e.params.virtual.renderExternalUpdate ? Q() : r("virtualUpdate");
            return
        }
        const pe = []
          , G = []
          , J = le=>{
            let Te = le;
            return le < 0 ? Te = I.length + le : Te >= I.length && (Te = Te - I.length),
            Te
        }
        ;
        if (b)
            e.slides.filter(le=>le.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(le=>{
                le.remove()
            }
            );
        else
            for (let le = q; le <= k; le += 1)
                if (le < re || le > L) {
                    const Te = J(le);
                    e.slides.filter(ft=>ft.matches(`.${e.params.slideClass}[data-swiper-slide-index="${Te}"], swiper-slide[data-swiper-slide-index="${Te}"]`)).forEach(ft=>{
                        ft.remove()
                    }
                    )
                }
        const ie = y ? -I.length : 0
          , Ne = y ? I.length * 2 : I.length;
        for (let le = ie; le < Ne; le += 1)
            if (le >= re && le <= L) {
                const Te = J(le);
                typeof k > "u" || b ? G.push(Te) : (le > k && G.push(Te),
                le < q && pe.push(Te))
            }
        if (G.forEach(le=>{
            e.slidesEl.append(l(I[le], le))
        }
        ),
        y)
            for (let le = pe.length - 1; le >= 0; le -= 1) {
                const Te = pe[le];
                e.slidesEl.prepend(l(I[Te], Te))
            }
        else
            pe.sort((le,Te)=>Te - le),
            pe.forEach(le=>{
                e.slidesEl.prepend(l(I[le], le))
            }
            );
        wt(e.slidesEl, ".swiper-slide, swiper-slide").forEach(le=>{
            le.style[A] = `${H - Math.abs(e.cssOverflowAdjustment())}px`
        }
        ),
        Q()
    }
    function u(b) {
        if (typeof b == "object" && "length"in b)
            for (let w = 0; w < b.length; w += 1)
                b[w] && e.virtual.slides.push(b[w]);
        else
            e.virtual.slides.push(b);
        c(!0)
    }
    function d(b) {
        const w = e.activeIndex;
        let m = w + 1
          , h = 1;
        if (Array.isArray(b)) {
            for (let E = 0; E < b.length; E += 1)
                b[E] && e.virtual.slides.unshift(b[E]);
            m = w + b.length,
            h = b.length
        } else
            e.virtual.slides.unshift(b);
        if (e.params.virtual.cache) {
            const E = e.virtual.cache
              , y = {};
            Object.keys(E).forEach(_=>{
                const N = E[_]
                  , P = N.getAttribute("data-swiper-slide-index");
                P && N.setAttribute("data-swiper-slide-index", parseInt(P, 10) + h),
                y[parseInt(_, 10) + h] = N
            }
            ),
            e.virtual.cache = y
        }
        c(!0),
        e.slideTo(m, 0)
    }
    function f(b) {
        if (typeof b > "u" || b === null)
            return;
        let w = e.activeIndex;
        if (Array.isArray(b))
            for (let m = b.length - 1; m >= 0; m -= 1)
                e.params.virtual.cache && (delete e.virtual.cache[b[m]],
                Object.keys(e.virtual.cache).forEach(h=>{
                    h > b && (e.virtual.cache[h - 1] = e.virtual.cache[h],
                    e.virtual.cache[h - 1].setAttribute("data-swiper-slide-index", h - 1),
                    delete e.virtual.cache[h])
                }
                )),
                e.virtual.slides.splice(b[m], 1),
                b[m] < w && (w -= 1),
                w = Math.max(w, 0);
        else
            e.params.virtual.cache && (delete e.virtual.cache[b],
            Object.keys(e.virtual.cache).forEach(m=>{
                m > b && (e.virtual.cache[m - 1] = e.virtual.cache[m],
                e.virtual.cache[m - 1].setAttribute("data-swiper-slide-index", m - 1),
                delete e.virtual.cache[m])
            }
            )),
            e.virtual.slides.splice(b, 1),
            b < w && (w -= 1),
            w = Math.max(w, 0);
        c(!0),
        e.slideTo(w, 0)
    }
    function p() {
        e.virtual.slides = [],
        e.params.virtual.cache && (e.virtual.cache = {}),
        c(!0),
        e.slideTo(0, 0)
    }
    s("beforeInit", ()=>{
        if (!e.params.virtual.enabled)
            return;
        let b;
        if (typeof e.passedParams.virtual.slides > "u") {
            const w = [...e.slidesEl.children].filter(m=>m.matches(`.${e.params.slideClass}, swiper-slide`));
            w && w.length && (e.virtual.slides = [...w],
            b = !0,
            w.forEach((m,h)=>{
                m.setAttribute("data-swiper-slide-index", h),
                e.virtual.cache[h] = m,
                m.remove()
            }
            ))
        }
        b || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        e.params.watchSlidesProgress = !0,
        e.originalParams.watchSlidesProgress = !0,
        c(!1, !0)
    }
    ),
    s("setTranslate", ()=>{
        e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n),
        n = setTimeout(()=>{
            c()
        }
        , 100)) : c())
    }
    ),
    s("init update resize", ()=>{
        e.params.virtual.enabled && e.params.cssMode && Pr(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
    }
    ),
    Object.assign(e.virtual, {
        appendSlide: u,
        prependSlide: d,
        removeSlide: f,
        removeAllSlides: p,
        update: c
    })
}
function g3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = _t()
      , a = at();
    e.keyboard = {
        enabled: !1
    },
    t({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    });
    function o(u) {
        if (!e.enabled)
            return;
        const {rtlTranslate: d} = e;
        let f = u;
        f.originalEvent && (f = f.originalEvent);
        const p = f.keyCode || f.charCode
          , b = e.params.keyboard.pageUpDown
          , w = b && p === 33
          , m = b && p === 34
          , h = p === 37
          , E = p === 39
          , y = p === 38
          , _ = p === 40;
        if (!e.allowSlideNext && (e.isHorizontal() && E || e.isVertical() && _ || m) || !e.allowSlidePrev && (e.isHorizontal() && h || e.isVertical() && y || w))
            return !1;
        if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (e.params.keyboard.onlyInViewport && (w || m || h || E || y || _)) {
                let N = !1;
                if (Ts(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && Ts(e.el, `.${e.params.slideActiveClass}`).length === 0)
                    return;
                const P = e.el
                  , q = P.clientWidth
                  , k = P.clientHeight
                  , I = a.innerWidth
                  , M = a.innerHeight
                  , j = ea(P);
                d && (j.left -= P.scrollLeft);
                const O = [[j.left, j.top], [j.left + q, j.top], [j.left, j.top + k], [j.left + q, j.top + k]];
                for (let A = 0; A < O.length; A += 1) {
                    const D = O[A];
                    if (D[0] >= 0 && D[0] <= I && D[1] >= 0 && D[1] <= M) {
                        if (D[0] === 0 && D[1] === 0)
                            continue;
                        N = !0
                    }
                }
                if (!N)
                    return
            }
            e.isHorizontal() ? ((w || m || h || E) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1),
            ((m || E) && !d || (w || h) && d) && e.slideNext(),
            ((w || h) && !d || (m || E) && d) && e.slidePrev()) : ((w || m || y || _) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1),
            (m || _) && e.slideNext(),
            (w || y) && e.slidePrev()),
            r("keyPress", p)
        }
    }
    function l() {
        e.keyboard.enabled || (n.addEventListener("keydown", o),
        e.keyboard.enabled = !0)
    }
    function c() {
        e.keyboard.enabled && (n.removeEventListener("keydown", o),
        e.keyboard.enabled = !1)
    }
    s("init", ()=>{
        e.params.keyboard.enabled && l()
    }
    ),
    s("destroy", ()=>{
        e.keyboard.enabled && c()
    }
    ),
    Object.assign(e.keyboard, {
        enable: l,
        disable: c
    })
}
function v3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = at();
    t({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }),
    e.mousewheel = {
        enabled: !1
    };
    let a, o = Qt(), l;
    const c = [];
    function u(y) {
        let q = 0
          , k = 0
          , I = 0
          , M = 0;
        return "detail"in y && (k = y.detail),
        "wheelDelta"in y && (k = -y.wheelDelta / 120),
        "wheelDeltaY"in y && (k = -y.wheelDeltaY / 120),
        "wheelDeltaX"in y && (q = -y.wheelDeltaX / 120),
        "axis"in y && y.axis === y.HORIZONTAL_AXIS && (q = k,
        k = 0),
        I = q * 10,
        M = k * 10,
        "deltaY"in y && (M = y.deltaY),
        "deltaX"in y && (I = y.deltaX),
        y.shiftKey && !I && (I = M,
        M = 0),
        (I || M) && y.deltaMode && (y.deltaMode === 1 ? (I *= 40,
        M *= 40) : (I *= 800,
        M *= 800)),
        I && !q && (q = I < 1 ? -1 : 1),
        M && !k && (k = M < 1 ? -1 : 1),
        {
            spinX: q,
            spinY: k,
            pixelX: I,
            pixelY: M
        }
    }
    function d() {
        e.enabled && (e.mouseEntered = !0)
    }
    function f() {
        e.enabled && (e.mouseEntered = !1)
    }
    function p(y) {
        return e.params.mousewheel.thresholdDelta && y.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && Qt() - o < e.params.mousewheel.thresholdTime ? !1 : y.delta >= 6 && Qt() - o < 60 ? !0 : (y.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(),
        r("scroll", y.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(),
        r("scroll", y.raw)),
        o = new n.Date().getTime(),
        !1)
    }
    function b(y) {
        const _ = e.params.mousewheel;
        if (y.direction < 0) {
            if (e.isEnd && !e.params.loop && _.releaseOnEdges)
                return !0
        } else if (e.isBeginning && !e.params.loop && _.releaseOnEdges)
            return !0;
        return !1
    }
    function w(y) {
        let _ = y
          , N = !0;
        if (!e.enabled || y.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
            return;
        const P = e.params.mousewheel;
        e.params.cssMode && _.preventDefault();
        let q = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (q = document.querySelector(e.params.mousewheel.eventsTarget));
        const k = q && q.contains(_.target);
        if (!e.mouseEntered && !k && !P.releaseOnEdges)
            return !0;
        _.originalEvent && (_ = _.originalEvent);
        let I = 0;
        const M = e.rtlTranslate ? -1 : 1
          , j = u(_);
        if (P.forceToAxis)
            if (e.isHorizontal())
                if (Math.abs(j.pixelX) > Math.abs(j.pixelY))
                    I = -j.pixelX * M;
                else
                    return !0;
            else if (Math.abs(j.pixelY) > Math.abs(j.pixelX))
                I = -j.pixelY;
            else
                return !0;
        else
            I = Math.abs(j.pixelX) > Math.abs(j.pixelY) ? -j.pixelX * M : -j.pixelY;
        if (I === 0)
            return !0;
        P.invert && (I = -I);
        let O = e.getTranslate() + I * P.sensitivity;
        if (O >= e.minTranslate() && (O = e.minTranslate()),
        O <= e.maxTranslate() && (O = e.maxTranslate()),
        N = e.params.loop ? !0 : !(O === e.minTranslate() || O === e.maxTranslate()),
        N && e.params.nested && _.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled) {
            const A = {
                time: Qt(),
                delta: Math.abs(I),
                direction: Math.sign(I),
                raw: y
            };
            c.length >= 2 && c.shift();
            const D = c.length ? c[c.length - 1] : void 0;
            if (c.push(A),
            D ? (A.direction !== D.direction || A.delta > D.delta || A.time > D.time + 150) && p(A) : p(A),
            b(A))
                return !0
        } else {
            const A = {
                time: Qt(),
                delta: Math.abs(I),
                direction: Math.sign(I)
            }
              , D = l && A.time < l.time + 500 && A.delta <= l.delta && A.direction === l.direction;
            if (!D) {
                l = void 0;
                let W = e.getTranslate() + I * P.sensitivity;
                const re = e.isBeginning
                  , L = e.isEnd;
                if (W >= e.minTranslate() && (W = e.minTranslate()),
                W <= e.maxTranslate() && (W = e.maxTranslate()),
                e.setTransition(0),
                e.setTranslate(W),
                e.updateProgress(),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                (!re && e.isBeginning || !L && e.isEnd) && e.updateSlidesClasses(),
                e.params.loop && e.loopFix({
                    direction: A.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }),
                e.params.freeMode.sticky) {
                    clearTimeout(a),
                    a = void 0,
                    c.length >= 15 && c.shift();
                    const H = c.length ? c[c.length - 1] : void 0
                      , Q = c[0];
                    if (c.push(A),
                    H && (A.delta > H.delta || A.direction !== H.direction))
                        c.splice(0);
                    else if (c.length >= 15 && A.time - Q.time < 500 && Q.delta - A.delta >= 1 && A.delta <= 6) {
                        const pe = I > 0 ? .8 : .2;
                        l = A,
                        c.splice(0),
                        a = Cs(()=>{
                            e.slideToClosest(e.params.speed, !0, void 0, pe)
                        }
                        , 0)
                    }
                    a || (a = Cs(()=>{
                        l = A,
                        c.splice(0),
                        e.slideToClosest(e.params.speed, !0, void 0, .5)
                    }
                    , 500))
                }
                if (D || r("scroll", _),
                e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                P.releaseOnEdges && (W === e.minTranslate() || W === e.maxTranslate()))
                    return !0
            }
        }
        return _.preventDefault ? _.preventDefault() : _.returnValue = !1,
        !1
    }
    function m(y) {
        let _ = e.el;
        e.params.mousewheel.eventsTarget !== "container" && (_ = document.querySelector(e.params.mousewheel.eventsTarget)),
        _[y]("mouseenter", d),
        _[y]("mouseleave", f),
        _[y]("wheel", w)
    }
    function h() {
        return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", w),
        !0) : e.mousewheel.enabled ? !1 : (m("addEventListener"),
        e.mousewheel.enabled = !0,
        !0)
    }
    function E() {
        return e.params.cssMode ? (e.wrapperEl.addEventListener(event, w),
        !0) : e.mousewheel.enabled ? (m("removeEventListener"),
        e.mousewheel.enabled = !1,
        !0) : !1
    }
    s("init", ()=>{
        !e.params.mousewheel.enabled && e.params.cssMode && E(),
        e.params.mousewheel.enabled && h()
    }
    ),
    s("destroy", ()=>{
        e.params.cssMode && h(),
        e.mousewheel.enabled && E()
    }
    ),
    Object.assign(e.mousewheel, {
        enable: h,
        disable: E
    })
}
function Xl(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach(r=>{
        if (!t[r] && t.auto === !0) {
            let n = wt(i.el, `.${s[r]}`)[0];
            n || (n = Gt("div", s[r]),
            n.className = s[r],
            i.el.append(n)),
            t[r] = n,
            e[r] = n
        }
    }
    ),
    t
}
function b3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
    e.navigation = {
        nextEl: null,
        prevEl: null
    };
    function n(b) {
        let w;
        return b && typeof b == "string" && e.isElement && (w = e.el.querySelector(b),
        w) ? w : (b && (typeof b == "string" && (w = [...document.querySelectorAll(b)]),
        e.params.uniqueNavElements && typeof b == "string" && w && w.length > 1 && e.el.querySelectorAll(b).length === 1 ? w = e.el.querySelector(b) : w && w.length === 1 && (w = w[0])),
        b && !w ? b : w)
    }
    function a(b, w) {
        const m = e.params.navigation;
        b = Me(b),
        b.forEach(h=>{
            h && (h.classList[w ? "add" : "remove"](...m.disabledClass.split(" ")),
            h.tagName === "BUTTON" && (h.disabled = w),
            e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](m.lockClass))
        }
        )
    }
    function o() {
        const {nextEl: b, prevEl: w} = e.navigation;
        if (e.params.loop) {
            a(w, !1),
            a(b, !1);
            return
        }
        a(w, e.isBeginning && !e.params.rewind),
        a(b, e.isEnd && !e.params.rewind)
    }
    function l(b) {
        b.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
        r("navigationPrev"))
    }
    function c(b) {
        b.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
        r("navigationNext"))
    }
    function u() {
        const b = e.params.navigation;
        if (e.params.navigation = Xl(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
        !(b.nextEl || b.prevEl))
            return;
        let w = n(b.nextEl)
          , m = n(b.prevEl);
        Object.assign(e.navigation, {
            nextEl: w,
            prevEl: m
        }),
        w = Me(w),
        m = Me(m);
        const h = (E,y)=>{
            E && E.addEventListener("click", y === "next" ? c : l),
            !e.enabled && E && E.classList.add(...b.lockClass.split(" "))
        }
        ;
        w.forEach(E=>h(E, "next")),
        m.forEach(E=>h(E, "prev"))
    }
    function d() {
        let {nextEl: b, prevEl: w} = e.navigation;
        b = Me(b),
        w = Me(w);
        const m = (h,E)=>{
            h.removeEventListener("click", E === "next" ? c : l),
            h.classList.remove(...e.params.navigation.disabledClass.split(" "))
        }
        ;
        b.forEach(h=>m(h, "next")),
        w.forEach(h=>m(h, "prev"))
    }
    s("init", ()=>{
        e.params.navigation.enabled === !1 ? p() : (u(),
        o())
    }
    ),
    s("toEdge fromEdge lock unlock", ()=>{
        o()
    }
    ),
    s("destroy", ()=>{
        d()
    }
    ),
    s("enable disable", ()=>{
        let {nextEl: b, prevEl: w} = e.navigation;
        if (b = Me(b),
        w = Me(w),
        e.enabled) {
            o();
            return
        }
        [...b, ...w].filter(m=>!!m).forEach(m=>m.classList.add(e.params.navigation.lockClass))
    }
    ),
    s("click", (b,w)=>{
        let {nextEl: m, prevEl: h} = e.navigation;
        m = Me(m),
        h = Me(h);
        const E = w.target;
        if (e.params.navigation.hideOnClick && !h.includes(E) && !m.includes(E)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === E || e.pagination.el.contains(E)))
                return;
            let y;
            m.length ? y = m[0].classList.contains(e.params.navigation.hiddenClass) : h.length && (y = h[0].classList.contains(e.params.navigation.hiddenClass)),
            r(y === !0 ? "navigationShow" : "navigationHide"),
            [...m, ...h].filter(_=>!!_).forEach(_=>_.classList.toggle(e.params.navigation.hiddenClass))
        }
    }
    );
    const f = ()=>{
        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
        u(),
        o()
    }
      , p = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
        d()
    }
    ;
    Object.assign(e.navigation, {
        enable: f,
        disable: p,
        update: o,
        init: u,
        destroy: d
    })
}
function Mi(i) {
    return i === void 0 && (i = ""),
    `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
}
function y3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: h=>h,
            formatFractionTotal: h=>h,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    }),
    e.pagination = {
        el: null,
        bullets: []
    };
    let a, o = 0;
    function l() {
        return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0
    }
    function c(h, E) {
        const {bulletActiveClass: y} = e.params.pagination;
        h && (h = h[`${E === "prev" ? "previous" : "next"}ElementSibling`],
        h && (h.classList.add(`${y}-${E}`),
        h = h[`${E === "prev" ? "previous" : "next"}ElementSibling`],
        h && h.classList.add(`${y}-${E}-${E}`)))
    }
    function u(h) {
        const E = h.target.closest(Mi(e.params.pagination.bulletClass));
        if (!E)
            return;
        h.preventDefault();
        const y = Gr(E) * e.params.slidesPerGroup;
        if (e.params.loop) {
            if (e.realIndex === y)
                return;
            e.slideToLoop(y)
        } else
            e.slideTo(y)
    }
    function d() {
        const h = e.rtl
          , E = e.params.pagination;
        if (l())
            return;
        let y = e.pagination.el;
        y = Me(y);
        let _, N;
        const P = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
          , q = e.params.loop ? Math.ceil(P / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (N = e.previousRealIndex || 0,
        _ = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (_ = e.snapIndex,
        N = e.previousSnapIndex) : (N = e.previousIndex || 0,
        _ = e.activeIndex || 0),
        E.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const k = e.pagination.bullets;
            let I, M, j;
            if (E.dynamicBullets && (a = jo(k[0], e.isHorizontal() ? "width" : "height", !0),
            y.forEach(O=>{
                O.style[e.isHorizontal() ? "width" : "height"] = `${a * (E.dynamicMainBullets + 4)}px`
            }
            ),
            E.dynamicMainBullets > 1 && N !== void 0 && (o += _ - (N || 0),
            o > E.dynamicMainBullets - 1 ? o = E.dynamicMainBullets - 1 : o < 0 && (o = 0)),
            I = Math.max(_ - o, 0),
            M = I + (Math.min(k.length, E.dynamicMainBullets) - 1),
            j = (M + I) / 2),
            k.forEach(O=>{
                const A = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(D=>`${E.bulletActiveClass}${D}`)].map(D=>typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
                O.classList.remove(...A)
            }
            ),
            y.length > 1)
                k.forEach(O=>{
                    const A = Gr(O);
                    A === _ ? O.classList.add(...E.bulletActiveClass.split(" ")) : e.isElement && O.setAttribute("part", "bullet"),
                    E.dynamicBullets && (A >= I && A <= M && O.classList.add(...`${E.bulletActiveClass}-main`.split(" ")),
                    A === I && c(O, "prev"),
                    A === M && c(O, "next"))
                }
                );
            else {
                const O = k[_];
                if (O && O.classList.add(...E.bulletActiveClass.split(" ")),
                e.isElement && k.forEach((A,D)=>{
                    A.setAttribute("part", D === _ ? "bullet-active" : "bullet")
                }
                ),
                E.dynamicBullets) {
                    const A = k[I]
                      , D = k[M];
                    for (let W = I; W <= M; W += 1)
                        k[W] && k[W].classList.add(...`${E.bulletActiveClass}-main`.split(" "));
                    c(A, "prev"),
                    c(D, "next")
                }
            }
            if (E.dynamicBullets) {
                const O = Math.min(k.length, E.dynamicMainBullets + 4)
                  , A = (a * O - a) / 2 - j * a
                  , D = h ? "right" : "left";
                k.forEach(W=>{
                    W.style[e.isHorizontal() ? D : "top"] = `${A}px`
                }
                )
            }
        }
        y.forEach((k,I)=>{
            if (E.type === "fraction" && (k.querySelectorAll(Mi(E.currentClass)).forEach(M=>{
                M.textContent = E.formatFractionCurrent(_ + 1)
            }
            ),
            k.querySelectorAll(Mi(E.totalClass)).forEach(M=>{
                M.textContent = E.formatFractionTotal(q)
            }
            )),
            E.type === "progressbar") {
                let M;
                E.progressbarOpposite ? M = e.isHorizontal() ? "vertical" : "horizontal" : M = e.isHorizontal() ? "horizontal" : "vertical";
                const j = (_ + 1) / q;
                let O = 1
                  , A = 1;
                M === "horizontal" ? O = j : A = j,
                k.querySelectorAll(Mi(E.progressbarFillClass)).forEach(D=>{
                    D.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${A})`,
                    D.style.transitionDuration = `${e.params.speed}ms`
                }
                )
            }
            E.type === "custom" && E.renderCustom ? (k.innerHTML = E.renderCustom(e, _ + 1, q),
            I === 0 && r("paginationRender", k)) : (I === 0 && r("paginationRender", k),
            r("paginationUpdate", k)),
            e.params.watchOverflow && e.enabled && k.classList[e.isLocked ? "add" : "remove"](E.lockClass)
        }
        )
    }
    function f() {
        const h = e.params.pagination;
        if (l())
            return;
        const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
        let y = e.pagination.el;
        y = Me(y);
        let _ = "";
        if (h.type === "bullets") {
            let N = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && N > E && (N = E);
            for (let P = 0; P < N; P += 1)
                h.renderBullet ? _ += h.renderBullet.call(e, P, h.bulletClass) : _ += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`
        }
        h.type === "fraction" && (h.renderFraction ? _ = h.renderFraction.call(e, h.currentClass, h.totalClass) : _ = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
        h.type === "progressbar" && (h.renderProgressbar ? _ = h.renderProgressbar.call(e, h.progressbarFillClass) : _ = `<span class="${h.progressbarFillClass}"></span>`),
        e.pagination.bullets = [],
        y.forEach(N=>{
            h.type !== "custom" && (N.innerHTML = _ || ""),
            h.type === "bullets" && e.pagination.bullets.push(...N.querySelectorAll(Mi(h.bulletClass)))
        }
        ),
        h.type !== "custom" && r("paginationRender", y[0])
    }
    function p() {
        e.params.pagination = Xl(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const h = e.params.pagination;
        if (!h.el)
            return;
        let E;
        typeof h.el == "string" && e.isElement && (E = e.el.querySelector(h.el)),
        !E && typeof h.el == "string" && (E = [...document.querySelectorAll(h.el)]),
        E || (E = h.el),
        !(!E || E.length === 0) && (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(E) && E.length > 1 && (E = [...e.el.querySelectorAll(h.el)],
        E.length > 1 && (E = E.filter(y=>Ts(y, ".swiper")[0] === e.el)[0])),
        Array.isArray(E) && E.length === 1 && (E = E[0]),
        Object.assign(e.pagination, {
            el: E
        }),
        E = Me(E),
        E.forEach(y=>{
            h.type === "bullets" && h.clickable && y.classList.add(...(h.clickableClass || "").split(" ")),
            y.classList.add(h.modifierClass + h.type),
            y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
            h.type === "bullets" && h.dynamicBullets && (y.classList.add(`${h.modifierClass}${h.type}-dynamic`),
            o = 0,
            h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" && h.progressbarOpposite && y.classList.add(h.progressbarOppositeClass),
            h.clickable && y.addEventListener("click", u),
            e.enabled || y.classList.add(h.lockClass)
        }
        ))
    }
    function b() {
        const h = e.params.pagination;
        if (l())
            return;
        let E = e.pagination.el;
        E && (E = Me(E),
        E.forEach(y=>{
            y.classList.remove(h.hiddenClass),
            y.classList.remove(h.modifierClass + h.type),
            y.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
            h.clickable && (y.classList.remove(...(h.clickableClass || "").split(" ")),
            y.removeEventListener("click", u))
        }
        )),
        e.pagination.bullets && e.pagination.bullets.forEach(y=>y.classList.remove(...h.bulletActiveClass.split(" ")))
    }
    s("changeDirection", ()=>{
        if (!e.pagination || !e.pagination.el)
            return;
        const h = e.params.pagination;
        let {el: E} = e.pagination;
        E = Me(E),
        E.forEach(y=>{
            y.classList.remove(h.horizontalClass, h.verticalClass),
            y.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass)
        }
        )
    }
    ),
    s("init", ()=>{
        e.params.pagination.enabled === !1 ? m() : (p(),
        f(),
        d())
    }
    ),
    s("activeIndexChange", ()=>{
        typeof e.snapIndex > "u" && d()
    }
    ),
    s("snapIndexChange", ()=>{
        d()
    }
    ),
    s("snapGridLengthChange", ()=>{
        f(),
        d()
    }
    ),
    s("destroy", ()=>{
        b()
    }
    ),
    s("enable disable", ()=>{
        let {el: h} = e.pagination;
        h && (h = Me(h),
        h.forEach(E=>E.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)))
    }
    ),
    s("lock unlock", ()=>{
        d()
    }
    ),
    s("click", (h,E)=>{
        const y = E.target
          , _ = Me(e.pagination.el);
        if (e.params.pagination.el && e.params.pagination.hideOnClick && _ && _.length > 0 && !y.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && y === e.navigation.nextEl || e.navigation.prevEl && y === e.navigation.prevEl))
                return;
            const N = _[0].classList.contains(e.params.pagination.hiddenClass);
            r(N === !0 ? "paginationShow" : "paginationHide"),
            _.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))
        }
    }
    );
    const w = ()=>{
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let {el: h} = e.pagination;
        h && (h = Me(h),
        h.forEach(E=>E.classList.remove(e.params.pagination.paginationDisabledClass))),
        p(),
        f(),
        d()
    }
      , m = ()=>{
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let {el: h} = e.pagination;
        h && (h = Me(h),
        h.forEach(E=>E.classList.add(e.params.pagination.paginationDisabledClass))),
        b()
    }
    ;
    Object.assign(e.pagination, {
        enable: w,
        disable: m,
        render: f,
        update: d,
        init: p,
        destroy: b
    })
}
function w3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = _t();
    let a = !1, o = null, l = null, c, u, d, f;
    t({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }),
    e.scrollbar = {
        el: null,
        dragEl: null
    };
    function p() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: O, rtlTranslate: A} = e
          , {dragEl: D, el: W} = O
          , re = e.params.scrollbar
          , L = e.params.loop ? e.progressLoop : e.progress;
        let H = u
          , Q = (d - u) * L;
        A ? (Q = -Q,
        Q > 0 ? (H = u - Q,
        Q = 0) : -Q + u > d && (H = d + Q)) : Q < 0 ? (H = u + Q,
        Q = 0) : Q + u > d && (H = d - Q),
        e.isHorizontal() ? (D.style.transform = `translate3d(${Q}px, 0, 0)`,
        D.style.width = `${H}px`) : (D.style.transform = `translate3d(0px, ${Q}px, 0)`,
        D.style.height = `${H}px`),
        re.hide && (clearTimeout(o),
        W.style.opacity = 1,
        o = setTimeout(()=>{
            W.style.opacity = 0,
            W.style.transitionDuration = "400ms"
        }
        , 1e3))
    }
    function b(O) {
        !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${O}ms`)
    }
    function w() {
        if (!e.params.scrollbar.el || !e.scrollbar.el)
            return;
        const {scrollbar: O} = e
          , {dragEl: A, el: D} = O;
        A.style.width = "",
        A.style.height = "",
        d = e.isHorizontal() ? D.offsetWidth : D.offsetHeight,
        f = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
        e.params.scrollbar.dragSize === "auto" ? u = d * f : u = parseInt(e.params.scrollbar.dragSize, 10),
        e.isHorizontal() ? A.style.width = `${u}px` : A.style.height = `${u}px`,
        f >= 1 ? D.style.display = "none" : D.style.display = "",
        e.params.scrollbar.hide && (D.style.opacity = 0),
        e.params.watchOverflow && e.enabled && O.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
    }
    function m(O) {
        return e.isHorizontal() ? O.clientX : O.clientY
    }
    function h(O) {
        const {scrollbar: A, rtlTranslate: D} = e
          , {el: W} = A;
        let re;
        re = (m(O) - ea(W)[e.isHorizontal() ? "left" : "top"] - (c !== null ? c : u / 2)) / (d - u),
        re = Math.max(Math.min(re, 1), 0),
        D && (re = 1 - re);
        const L = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * re;
        e.updateProgress(L),
        e.setTranslate(L),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
    }
    function E(O) {
        const A = e.params.scrollbar
          , {scrollbar: D, wrapperEl: W} = e
          , {el: re, dragEl: L} = D;
        a = !0,
        c = O.target === L ? m(O) - O.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
        O.preventDefault(),
        O.stopPropagation(),
        W.style.transitionDuration = "100ms",
        L.style.transitionDuration = "100ms",
        h(O),
        clearTimeout(l),
        re.style.transitionDuration = "0ms",
        A.hide && (re.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", O)
    }
    function y(O) {
        const {scrollbar: A, wrapperEl: D} = e
          , {el: W, dragEl: re} = A;
        a && (O.preventDefault && O.cancelable ? O.preventDefault() : O.returnValue = !1,
        h(O),
        D.style.transitionDuration = "0ms",
        W.style.transitionDuration = "0ms",
        re.style.transitionDuration = "0ms",
        r("scrollbarDragMove", O))
    }
    function _(O) {
        const A = e.params.scrollbar
          , {scrollbar: D, wrapperEl: W} = e
          , {el: re} = D;
        a && (a = !1,
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "",
        W.style.transitionDuration = ""),
        A.hide && (clearTimeout(l),
        l = Cs(()=>{
            re.style.opacity = 0,
            re.style.transitionDuration = "400ms"
        }
        , 1e3)),
        r("scrollbarDragEnd", O),
        A.snapOnRelease && e.slideToClosest())
    }
    function N(O) {
        const {scrollbar: A, params: D} = e
          , W = A.el;
        if (!W)
            return;
        const re = W
          , L = D.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1
          , H = D.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        if (!re)
            return;
        const Q = O === "on" ? "addEventListener" : "removeEventListener";
        re[Q]("pointerdown", E, L),
        n[Q]("pointermove", y, L),
        n[Q]("pointerup", _, H)
    }
    function P() {
        !e.params.scrollbar.el || !e.scrollbar.el || N("on")
    }
    function q() {
        !e.params.scrollbar.el || !e.scrollbar.el || N("off")
    }
    function k() {
        const {scrollbar: O, el: A} = e;
        e.params.scrollbar = Xl(e, e.originalParams.scrollbar, e.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const D = e.params.scrollbar;
        if (!D.el)
            return;
        let W;
        if (typeof D.el == "string" && e.isElement && (W = e.el.querySelector(D.el)),
        !W && typeof D.el == "string") {
            if (W = n.querySelectorAll(D.el),
            !W.length)
                return
        } else
            W || (W = D.el);
        e.params.uniqueNavElements && typeof D.el == "string" && W.length > 1 && A.querySelectorAll(D.el).length === 1 && (W = A.querySelector(D.el)),
        W.length > 0 && (W = W[0]),
        W.classList.add(e.isHorizontal() ? D.horizontalClass : D.verticalClass);
        let re;
        W && (re = W.querySelector(Mi(e.params.scrollbar.dragClass)),
        re || (re = Gt("div", e.params.scrollbar.dragClass),
        W.append(re))),
        Object.assign(O, {
            el: W,
            dragEl: re
        }),
        D.draggable && P(),
        W && W.classList[e.enabled ? "remove" : "add"](...Yi(e.params.scrollbar.lockClass))
    }
    function I() {
        const O = e.params.scrollbar
          , A = e.scrollbar.el;
        A && A.classList.remove(...Yi(e.isHorizontal() ? O.horizontalClass : O.verticalClass)),
        q()
    }
    s("changeDirection", ()=>{
        if (!e.scrollbar || !e.scrollbar.el)
            return;
        const O = e.params.scrollbar;
        let {el: A} = e.scrollbar;
        A = Me(A),
        A.forEach(D=>{
            D.classList.remove(O.horizontalClass, O.verticalClass),
            D.classList.add(e.isHorizontal() ? O.horizontalClass : O.verticalClass)
        }
        )
    }
    ),
    s("init", ()=>{
        e.params.scrollbar.enabled === !1 ? j() : (k(),
        w(),
        p())
    }
    ),
    s("update resize observerUpdate lock unlock changeDirection", ()=>{
        w()
    }
    ),
    s("setTranslate", ()=>{
        p()
    }
    ),
    s("setTransition", (O,A)=>{
        b(A)
    }
    ),
    s("enable disable", ()=>{
        const {el: O} = e.scrollbar;
        O && O.classList[e.enabled ? "remove" : "add"](...Yi(e.params.scrollbar.lockClass))
    }
    ),
    s("destroy", ()=>{
        I()
    }
    );
    const M = ()=>{
        e.el.classList.remove(...Yi(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el && e.scrollbar.el.classList.remove(...Yi(e.params.scrollbar.scrollbarDisabledClass)),
        k(),
        w(),
        p()
    }
      , j = ()=>{
        e.el.classList.add(...Yi(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el && e.scrollbar.el.classList.add(...Yi(e.params.scrollbar.scrollbarDisabledClass)),
        I()
    }
    ;
    Object.assign(e.scrollbar, {
        enable: M,
        disable: j,
        updateSize: w,
        setTranslate: p,
        init: k,
        destroy: I
    })
}
function E3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        parallax: {
            enabled: !1
        }
    });
    const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
      , n = (l,c)=>{
        const {rtl: u} = e
          , d = u ? -1 : 1
          , f = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x")
          , b = l.getAttribute("data-swiper-parallax-y");
        const w = l.getAttribute("data-swiper-parallax-scale")
          , m = l.getAttribute("data-swiper-parallax-opacity")
          , h = l.getAttribute("data-swiper-parallax-rotate");
        if (p || b ? (p = p || "0",
        b = b || "0") : e.isHorizontal() ? (p = f,
        b = "0") : (b = f,
        p = "0"),
        p.indexOf("%") >= 0 ? p = `${parseInt(p, 10) * c * d}%` : p = `${p * c * d}px`,
        b.indexOf("%") >= 0 ? b = `${parseInt(b, 10) * c}%` : b = `${b * c}px`,
        typeof m < "u" && m !== null) {
            const y = m - (m - 1) * (1 - Math.abs(c));
            l.style.opacity = y
        }
        let E = `translate3d(${p}, ${b}, 0px)`;
        if (typeof w < "u" && w !== null) {
            const y = w - (w - 1) * (1 - Math.abs(c));
            E += ` scale(${y})`
        }
        if (h && typeof h < "u" && h !== null) {
            const y = h * c * -1;
            E += ` rotate(${y}deg)`
        }
        l.style.transform = E
    }
      , a = ()=>{
        const {el: l, slides: c, progress: u, snapGrid: d, isElement: f} = e
          , p = wt(l, r);
        e.isElement && p.push(...wt(e.hostEl, r)),
        p.forEach(b=>{
            n(b, u)
        }
        ),
        c.forEach((b,w)=>{
            let m = b.progress;
            e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (m += Math.ceil(w / 2) - u * (d.length - 1)),
            m = Math.min(Math.max(m, -1), 1),
            b.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(h=>{
                n(h, m)
            }
            )
        }
        )
    }
      , o = function(l) {
        l === void 0 && (l = e.params.speed);
        const {el: c, hostEl: u} = e
          , d = [...c.querySelectorAll(r)];
        e.isElement && d.push(...u.querySelectorAll(r)),
        d.forEach(f=>{
            let p = parseInt(f.getAttribute("data-swiper-parallax-duration"), 10) || l;
            l === 0 && (p = 0),
            f.style.transitionDuration = `${p}ms`
        }
        )
    };
    s("beforeInit", ()=>{
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
        e.originalParams.watchSlidesProgress = !0)
    }
    ),
    s("init", ()=>{
        e.params.parallax.enabled && a()
    }
    ),
    s("setTranslate", ()=>{
        e.params.parallax.enabled && a()
    }
    ),
    s("setTransition", (l,c)=>{
        e.params.parallax.enabled && o(c)
    }
    )
}
function x3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r} = i;
    const n = at();
    t({
        zoom: {
            enabled: !1,
            limitToOriginalSize: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }),
    e.zoom = {
        enabled: !1
    };
    let a = 1, o = !1, l, c;
    const u = []
      , d = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }
      , f = {
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
        touchesCurrent: {}
    }
      , p = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let b = 1;
    Object.defineProperty(e.zoom, "scale", {
        get() {
            return b
        },
        set(G) {
            if (b !== G) {
                const J = d.imageEl
                  , ie = d.slideEl;
                r("zoomChange", G, J, ie)
            }
            b = G
        }
    });
    function w() {
        if (u.length < 2)
            return 1;
        const G = u[0].pageX
          , J = u[0].pageY
          , ie = u[1].pageX
          , Ne = u[1].pageY;
        return Math.sqrt((ie - G) ** 2 + (Ne - J) ** 2)
    }
    function m() {
        const G = e.params.zoom
          , J = d.imageWrapEl.getAttribute("data-swiper-zoom") || G.maxRatio;
        if (G.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
            const ie = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
            return Math.min(ie, J)
        }
        return J
    }
    function h() {
        if (u.length < 2)
            return {
                x: null,
                y: null
            };
        const G = d.imageEl.getBoundingClientRect();
        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - G.x - n.scrollX) / a, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - G.y - n.scrollY) / a]
    }
    function E() {
        return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    }
    function y(G) {
        const J = E();
        return !!(G.target.matches(J) || e.slides.filter(ie=>ie.contains(G.target)).length > 0)
    }
    function _(G) {
        const J = `.${e.params.zoom.containerClass}`;
        return !!(G.target.matches(J) || [...e.hostEl.querySelectorAll(J)].filter(ie=>ie.contains(G.target)).length > 0)
    }
    function N(G) {
        if (G.pointerType === "mouse" && u.splice(0, u.length),
        !y(G))
            return;
        const J = e.params.zoom;
        if (l = !1,
        c = !1,
        u.push(G),
        !(u.length < 2)) {
            if (l = !0,
            d.scaleStart = w(),
            !d.slideEl) {
                d.slideEl = G.target.closest(`.${e.params.slideClass}, swiper-slide`),
                d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
                let ie = d.slideEl.querySelector(`.${J.containerClass}`);
                if (ie && (ie = ie.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                d.imageEl = ie,
                ie ? d.imageWrapEl = Ts(d.imageEl, `.${J.containerClass}`)[0] : d.imageWrapEl = void 0,
                !d.imageWrapEl) {
                    d.imageEl = void 0;
                    return
                }
                d.maxRatio = m()
            }
            if (d.imageEl) {
                const [ie,Ne] = h();
                d.originX = ie,
                d.originY = Ne,
                d.imageEl.style.transitionDuration = "0ms"
            }
            o = !0
        }
    }
    function P(G) {
        if (!y(G))
            return;
        const J = e.params.zoom
          , ie = e.zoom
          , Ne = u.findIndex(le=>le.pointerId === G.pointerId);
        Ne >= 0 && (u[Ne] = G),
        !(u.length < 2) && (c = !0,
        d.scaleMove = w(),
        d.imageEl && (ie.scale = d.scaleMove / d.scaleStart * a,
        ie.scale > d.maxRatio && (ie.scale = d.maxRatio - 1 + (ie.scale - d.maxRatio + 1) ** .5),
        ie.scale < J.minRatio && (ie.scale = J.minRatio + 1 - (J.minRatio - ie.scale + 1) ** .5),
        d.imageEl.style.transform = `translate3d(0,0,0) scale(${ie.scale})`))
    }
    function q(G) {
        if (!y(G) || G.pointerType === "mouse" && G.type === "pointerout")
            return;
        const J = e.params.zoom
          , ie = e.zoom
          , Ne = u.findIndex(le=>le.pointerId === G.pointerId);
        Ne >= 0 && u.splice(Ne, 1),
        !(!l || !c) && (l = !1,
        c = !1,
        d.imageEl && (ie.scale = Math.max(Math.min(ie.scale, d.maxRatio), J.minRatio),
        d.imageEl.style.transitionDuration = `${e.params.speed}ms`,
        d.imageEl.style.transform = `translate3d(0,0,0) scale(${ie.scale})`,
        a = ie.scale,
        o = !1,
        ie.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${J.zoomedSlideClass}`) : ie.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${J.zoomedSlideClass}`),
        ie.scale === 1 && (d.originX = 0,
        d.originY = 0,
        d.slideEl = void 0)))
    }
    let k;
    function I() {
        e.touchEventsData.preventTouchMoveFromPointerMove = !1
    }
    function M() {
        clearTimeout(k),
        e.touchEventsData.preventTouchMoveFromPointerMove = !0,
        k = setTimeout(()=>{
            I()
        }
        )
    }
    function j(G) {
        const J = e.device;
        if (!d.imageEl || f.isTouched)
            return;
        J.android && G.cancelable && G.preventDefault(),
        f.isTouched = !0;
        const ie = u.length > 0 ? u[0] : G;
        f.touchesStart.x = ie.pageX,
        f.touchesStart.y = ie.pageY
    }
    function O(G) {
        if (!y(G) || !_(G))
            return;
        const J = e.zoom;
        if (!d.imageEl || !f.isTouched || !d.slideEl)
            return;
        f.isMoved || (f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth,
        f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight,
        f.startX = zo(d.imageWrapEl, "x") || 0,
        f.startY = zo(d.imageWrapEl, "y") || 0,
        d.slideWidth = d.slideEl.offsetWidth,
        d.slideHeight = d.slideEl.offsetHeight,
        d.imageWrapEl.style.transitionDuration = "0ms");
        const ie = f.width * J.scale
          , Ne = f.height * J.scale;
        if (ie < d.slideWidth && Ne < d.slideHeight) {
            I();
            return
        }
        if (f.minX = Math.min(d.slideWidth / 2 - ie / 2, 0),
        f.maxX = -f.minX,
        f.minY = Math.min(d.slideHeight / 2 - Ne / 2, 0),
        f.maxY = -f.minY,
        f.touchesCurrent.x = u.length > 0 ? u[0].pageX : G.pageX,
        f.touchesCurrent.y = u.length > 0 ? u[0].pageY : G.pageY,
        Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (e.allowClick = !1),
        !f.isMoved && !o) {
            if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) {
                f.isTouched = !1,
                I();
                return
            }
            if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) {
                f.isTouched = !1,
                I();
                return
            }
        }
        G.cancelable && G.preventDefault(),
        G.stopPropagation(),
        M(),
        f.isMoved = !0;
        const Te = (J.scale - a) / (d.maxRatio - e.params.zoom.minRatio)
          , {originX: ft, originY: vi} = d;
        f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + Te * (f.width - ft * 2),
        f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + Te * (f.height - vi * 2),
        f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
        f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
        f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
        f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
        p.prevPositionX || (p.prevPositionX = f.touchesCurrent.x),
        p.prevPositionY || (p.prevPositionY = f.touchesCurrent.y),
        p.prevTime || (p.prevTime = Date.now()),
        p.x = (f.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2,
        p.y = (f.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2,
        Math.abs(f.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0),
        Math.abs(f.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0),
        p.prevPositionX = f.touchesCurrent.x,
        p.prevPositionY = f.touchesCurrent.y,
        p.prevTime = Date.now(),
        d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
    }
    function A() {
        const G = e.zoom;
        if (!d.imageEl)
            return;
        if (!f.isTouched || !f.isMoved) {
            f.isTouched = !1,
            f.isMoved = !1;
            return
        }
        f.isTouched = !1,
        f.isMoved = !1;
        let J = 300
          , ie = 300;
        const Ne = p.x * J
          , le = f.currentX + Ne
          , Te = p.y * ie
          , ft = f.currentY + Te;
        p.x !== 0 && (J = Math.abs((le - f.currentX) / p.x)),
        p.y !== 0 && (ie = Math.abs((ft - f.currentY) / p.y));
        const vi = Math.max(J, ie);
        f.currentX = le,
        f.currentY = ft;
        const Ci = f.width * G.scale
          , pt = f.height * G.scale;
        f.minX = Math.min(d.slideWidth / 2 - Ci / 2, 0),
        f.maxX = -f.minX,
        f.minY = Math.min(d.slideHeight / 2 - pt / 2, 0),
        f.maxY = -f.minY,
        f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
        f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
        d.imageWrapEl.style.transitionDuration = `${vi}ms`,
        d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`
    }
    function D() {
        const G = e.zoom;
        d.slideEl && e.activeIndex !== e.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        G.scale = 1,
        a = 1,
        d.slideEl = void 0,
        d.imageEl = void 0,
        d.imageWrapEl = void 0,
        d.originX = 0,
        d.originY = 0)
    }
    function W(G) {
        const J = e.zoom
          , ie = e.params.zoom;
        if (!d.slideEl) {
            G && G.target && (d.slideEl = G.target.closest(`.${e.params.slideClass}, swiper-slide`)),
            d.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = wt(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex]);
            let Ft = d.slideEl.querySelector(`.${ie.containerClass}`);
            Ft && (Ft = Ft.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            d.imageEl = Ft,
            Ft ? d.imageWrapEl = Ts(d.imageEl, `.${ie.containerClass}`)[0] : d.imageWrapEl = void 0
        }
        if (!d.imageEl || !d.imageWrapEl)
            return;
        e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
        e.wrapperEl.style.touchAction = "none"),
        d.slideEl.classList.add(`${ie.zoomedSlideClass}`);
        let Ne, le, Te, ft, vi, Ci, pt, si, Lt, ri, Vt, Ht, Di, lt, ns, as, yt, os;
        typeof f.touchesStart.x > "u" && G ? (Ne = G.pageX,
        le = G.pageY) : (Ne = f.touchesStart.x,
        le = f.touchesStart.y);
        const bi = typeof G == "number" ? G : null;
        a === 1 && bi && (Ne = void 0,
        le = void 0);
        const It = m();
        J.scale = bi || It,
        a = bi || It,
        G && !(a === 1 && bi) ? (yt = d.slideEl.offsetWidth,
        os = d.slideEl.offsetHeight,
        Te = ea(d.slideEl).left + n.scrollX,
        ft = ea(d.slideEl).top + n.scrollY,
        vi = Te + yt / 2 - Ne,
        Ci = ft + os / 2 - le,
        Lt = d.imageEl.offsetWidth || d.imageEl.clientWidth,
        ri = d.imageEl.offsetHeight || d.imageEl.clientHeight,
        Vt = Lt * J.scale,
        Ht = ri * J.scale,
        Di = Math.min(yt / 2 - Vt / 2, 0),
        lt = Math.min(os / 2 - Ht / 2, 0),
        ns = -Di,
        as = -lt,
        pt = vi * J.scale,
        si = Ci * J.scale,
        pt < Di && (pt = Di),
        pt > ns && (pt = ns),
        si < lt && (si = lt),
        si > as && (si = as)) : (pt = 0,
        si = 0),
        bi && J.scale === 1 && (d.originX = 0,
        d.originY = 0),
        d.imageWrapEl.style.transitionDuration = "300ms",
        d.imageWrapEl.style.transform = `translate3d(${pt}px, ${si}px,0)`,
        d.imageEl.style.transitionDuration = "300ms",
        d.imageEl.style.transform = `translate3d(0,0,0) scale(${J.scale})`
    }
    function re() {
        const G = e.zoom
          , J = e.params.zoom;
        if (!d.slideEl) {
            e.params.virtual && e.params.virtual.enabled && e.virtual ? d.slideEl = wt(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : d.slideEl = e.slides[e.activeIndex];
            let ie = d.slideEl.querySelector(`.${J.containerClass}`);
            ie && (ie = ie.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
            d.imageEl = ie,
            ie ? d.imageWrapEl = Ts(d.imageEl, `.${J.containerClass}`)[0] : d.imageWrapEl = void 0
        }
        !d.imageEl || !d.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "",
        e.wrapperEl.style.touchAction = ""),
        G.scale = 1,
        a = 1,
        d.imageWrapEl.style.transitionDuration = "300ms",
        d.imageWrapEl.style.transform = "translate3d(0,0,0)",
        d.imageEl.style.transitionDuration = "300ms",
        d.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
        d.slideEl.classList.remove(`${J.zoomedSlideClass}`),
        d.slideEl = void 0,
        d.originX = 0,
        d.originY = 0)
    }
    function L(G) {
        const J = e.zoom;
        J.scale && J.scale !== 1 ? re() : W(G)
    }
    function H() {
        const G = e.params.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1
          , J = e.params.passiveListeners ? {
            passive: !1,
            capture: !0
        } : !0;
        return {
            passiveListener: G,
            activeListenerWithCapture: J
        }
    }
    function Q() {
        const G = e.zoom;
        if (G.enabled)
            return;
        G.enabled = !0;
        const {passiveListener: J, activeListenerWithCapture: ie} = H();
        e.wrapperEl.addEventListener("pointerdown", N, J),
        e.wrapperEl.addEventListener("pointermove", P, ie),
        ["pointerup", "pointercancel", "pointerout"].forEach(Ne=>{
            e.wrapperEl.addEventListener(Ne, q, J)
        }
        ),
        e.wrapperEl.addEventListener("pointermove", O, ie)
    }
    function pe() {
        const G = e.zoom;
        if (!G.enabled)
            return;
        G.enabled = !1;
        const {passiveListener: J, activeListenerWithCapture: ie} = H();
        e.wrapperEl.removeEventListener("pointerdown", N, J),
        e.wrapperEl.removeEventListener("pointermove", P, ie),
        ["pointerup", "pointercancel", "pointerout"].forEach(Ne=>{
            e.wrapperEl.removeEventListener(Ne, q, J)
        }
        ),
        e.wrapperEl.removeEventListener("pointermove", O, ie)
    }
    s("init", ()=>{
        e.params.zoom.enabled && Q()
    }
    ),
    s("destroy", ()=>{
        pe()
    }
    ),
    s("touchStart", (G,J)=>{
        e.zoom.enabled && j(J)
    }
    ),
    s("touchEnd", (G,J)=>{
        e.zoom.enabled && A()
    }
    ),
    s("doubleTap", (G,J)=>{
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && L(J)
    }
    ),
    s("transitionEnd", ()=>{
        e.zoom.enabled && e.params.zoom.enabled && D()
    }
    ),
    s("slideChange", ()=>{
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && D()
    }
    ),
    Object.assign(e.zoom, {
        enable: Q,
        disable: pe,
        in: W,
        out: re,
        toggle: L
    })
}
function _3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }),
    e.controller = {
        control: void 0
    };
    function r(c, u) {
        const d = function() {
            let w, m, h;
            return (E,y)=>{
                for (m = -1,
                w = E.length; w - m > 1; )
                    h = w + m >> 1,
                    E[h] <= y ? m = h : w = h;
                return w
            }
        }();
        this.x = c,
        this.y = u,
        this.lastIndex = c.length - 1;
        let f, p;
        return this.interpolate = function(w) {
            return w ? (p = d(this.x, w),
            f = p - 1,
            (w - this.x[f]) * (this.y[p] - this.y[f]) / (this.x[p] - this.x[f]) + this.y[f]) : 0
        }
        ,
        this
    }
    function n(c) {
        e.controller.spline = e.params.loop ? new r(e.slidesGrid,c.slidesGrid) : new r(e.snapGrid,c.snapGrid)
    }
    function a(c, u) {
        const d = e.controller.control;
        let f, p;
        const b = e.constructor;
        function w(m) {
            if (m.destroyed)
                return;
            const h = e.rtlTranslate ? -e.translate : e.translate;
            e.params.controller.by === "slide" && (n(m),
            p = -e.controller.spline.interpolate(-h)),
            (!p || e.params.controller.by === "container") && (f = (m.maxTranslate() - m.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
            (Number.isNaN(f) || !Number.isFinite(f)) && (f = 1),
            p = (h - e.minTranslate()) * f + m.minTranslate()),
            e.params.controller.inverse && (p = m.maxTranslate() - p),
            m.updateProgress(p),
            m.setTranslate(p, e),
            m.updateActiveIndex(),
            m.updateSlidesClasses()
        }
        if (Array.isArray(d))
            for (let m = 0; m < d.length; m += 1)
                d[m] !== u && d[m]instanceof b && w(d[m]);
        else
            d instanceof b && u !== d && w(d)
    }
    function o(c, u) {
        const d = e.constructor
          , f = e.controller.control;
        let p;
        function b(w) {
            w.destroyed || (w.setTransition(c, e),
            c !== 0 && (w.transitionStart(),
            w.params.autoHeight && Cs(()=>{
                w.updateAutoHeight()
            }
            ),
            Hr(w.wrapperEl, ()=>{
                f && w.transitionEnd()
            }
            )))
        }
        if (Array.isArray(f))
            for (p = 0; p < f.length; p += 1)
                f[p] !== u && f[p]instanceof d && b(f[p]);
        else
            f instanceof d && u !== f && b(f)
    }
    function l() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
        delete e.controller.spline)
    }
    s("beforeInit", ()=>{
        if (typeof window < "u" && (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
            const c = document.querySelector(e.params.controller.control);
            if (c && c.swiper)
                e.controller.control = c.swiper;
            else if (c) {
                const u = d=>{
                    e.controller.control = d.detail[0],
                    e.update(),
                    c.removeEventListener("init", u)
                }
                ;
                c.addEventListener("init", u)
            }
            return
        }
        e.controller.control = e.params.controller.control
    }
    ),
    s("update", ()=>{
        l()
    }
    ),
    s("resize", ()=>{
        l()
    }
    ),
    s("observerUpdate", ()=>{
        l()
    }
    ),
    s("setTranslate", (c,u,d)=>{
        !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(u, d)
    }
    ),
    s("setTransition", (c,u,d)=>{
        !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(u, d)
    }
    ),
    Object.assign(e.controller, {
        setTranslate: a,
        setTransition: o
    })
}
function T3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }),
    e.a11y = {
        clicked: !1
    };
    let r = null, n, a, o = new Date().getTime();
    function l(L) {
        const H = r;
        H.length !== 0 && (H.innerHTML = "",
        H.innerHTML = L)
    }
    function c(L) {
        L === void 0 && (L = 16);
        const H = ()=>Math.round(16 * Math.random()).toString(16);
        return "x".repeat(L).replace(/x/g, H)
    }
    function u(L) {
        L = Me(L),
        L.forEach(H=>{
            H.setAttribute("tabIndex", "0")
        }
        )
    }
    function d(L) {
        L = Me(L),
        L.forEach(H=>{
            H.setAttribute("tabIndex", "-1")
        }
        )
    }
    function f(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("role", H)
        }
        )
    }
    function p(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("aria-roledescription", H)
        }
        )
    }
    function b(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("aria-controls", H)
        }
        )
    }
    function w(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("aria-label", H)
        }
        )
    }
    function m(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("id", H)
        }
        )
    }
    function h(L, H) {
        L = Me(L),
        L.forEach(Q=>{
            Q.setAttribute("aria-live", H)
        }
        )
    }
    function E(L) {
        L = Me(L),
        L.forEach(H=>{
            H.setAttribute("aria-disabled", !0)
        }
        )
    }
    function y(L) {
        L = Me(L),
        L.forEach(H=>{
            H.setAttribute("aria-disabled", !1)
        }
        )
    }
    function _(L) {
        if (L.keyCode !== 13 && L.keyCode !== 32)
            return;
        const H = e.params.a11y
          , Q = L.target;
        if (!(e.pagination && e.pagination.el && (Q === e.pagination.el || e.pagination.el.contains(L.target)) && !L.target.matches(Mi(e.params.pagination.bulletClass)))) {
            if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
                const pe = Me(e.navigation.prevEl);
                Me(e.navigation.nextEl).includes(Q) && (e.isEnd && !e.params.loop || e.slideNext(),
                e.isEnd ? l(H.lastSlideMessage) : l(H.nextSlideMessage)),
                pe.includes(Q) && (e.isBeginning && !e.params.loop || e.slidePrev(),
                e.isBeginning ? l(H.firstSlideMessage) : l(H.prevSlideMessage))
            }
            e.pagination && Q.matches(Mi(e.params.pagination.bulletClass)) && Q.click()
        }
    }
    function N() {
        if (e.params.loop || e.params.rewind || !e.navigation)
            return;
        const {nextEl: L, prevEl: H} = e.navigation;
        H && (e.isBeginning ? (E(H),
        d(H)) : (y(H),
        u(H))),
        L && (e.isEnd ? (E(L),
        d(L)) : (y(L),
        u(L)))
    }
    function P() {
        return e.pagination && e.pagination.bullets && e.pagination.bullets.length
    }
    function q() {
        return P() && e.params.pagination.clickable
    }
    function k() {
        const L = e.params.a11y;
        P() && e.pagination.bullets.forEach(H=>{
            e.params.pagination.clickable && (u(H),
            e.params.pagination.renderBullet || (f(H, "button"),
            w(H, L.paginationBulletMessage.replace(/\{\{index\}\}/, Gr(H) + 1)))),
            H.matches(Mi(e.params.pagination.bulletActiveClass)) ? H.setAttribute("aria-current", "true") : H.removeAttribute("aria-current")
        }
        )
    }
    const I = (L,H,Q)=>{
        u(L),
        L.tagName !== "BUTTON" && (f(L, "button"),
        L.addEventListener("keydown", _)),
        w(L, Q),
        b(L, H)
    }
      , M = L=>{
        a && a !== L.target && !a.contains(L.target) && (n = !0),
        e.a11y.clicked = !0
    }
      , j = ()=>{
        n = !1,
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                e.destroyed || (e.a11y.clicked = !1)
            }
            )
        }
        )
    }
      , O = L=>{
        o = new Date().getTime()
    }
      , A = L=>{
        if (e.a11y.clicked || new Date().getTime() - o < 100)
            return;
        const H = L.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!H || !e.slides.includes(H))
            return;
        a = H;
        const Q = e.slides.indexOf(H) === e.activeIndex
          , pe = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(H);
        Q || pe || L.sourceCapabilities && L.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0,
        requestAnimationFrame(()=>{
            n || (e.slideTo(e.slides.indexOf(H), 0),
            n = !1)
        }
        ))
    }
      , D = ()=>{
        const L = e.params.a11y;
        L.itemRoleDescriptionMessage && p(e.slides, L.itemRoleDescriptionMessage),
        L.slideRole && f(e.slides, L.slideRole);
        const H = e.slides.length;
        L.slideLabelMessage && e.slides.forEach((Q,pe)=>{
            const G = e.params.loop ? parseInt(Q.getAttribute("data-swiper-slide-index"), 10) : pe
              , J = L.slideLabelMessage.replace(/\{\{index\}\}/, G + 1).replace(/\{\{slidesLength\}\}/, H);
            w(Q, J)
        }
        )
    }
      , W = ()=>{
        const L = e.params.a11y;
        e.el.append(r);
        const H = e.el;
        L.containerRoleDescriptionMessage && p(H, L.containerRoleDescriptionMessage),
        L.containerMessage && w(H, L.containerMessage);
        const Q = e.wrapperEl
          , pe = L.id || Q.getAttribute("id") || `swiper-wrapper-${c(16)}`
          , G = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        m(Q, pe),
        h(Q, G),
        D();
        let {nextEl: J, prevEl: ie} = e.navigation ? e.navigation : {};
        J = Me(J),
        ie = Me(ie),
        J && J.forEach(le=>I(le, pe, L.nextSlideMessage)),
        ie && ie.forEach(le=>I(le, pe, L.prevSlideMessage)),
        q() && Me(e.pagination.el).forEach(Te=>{
            Te.addEventListener("keydown", _)
        }
        ),
        _t().addEventListener("visibilitychange", O),
        e.el.addEventListener("focus", A, !0),
        e.el.addEventListener("focus", A, !0),
        e.el.addEventListener("pointerdown", M, !0),
        e.el.addEventListener("pointerup", j, !0)
    }
    ;
    function re() {
        r && r.remove();
        let {nextEl: L, prevEl: H} = e.navigation ? e.navigation : {};
        L = Me(L),
        H = Me(H),
        L && L.forEach(pe=>pe.removeEventListener("keydown", _)),
        H && H.forEach(pe=>pe.removeEventListener("keydown", _)),
        q() && Me(e.pagination.el).forEach(G=>{
            G.removeEventListener("keydown", _)
        }
        ),
        _t().removeEventListener("visibilitychange", O),
        e.el.removeEventListener("focus", A, !0),
        e.el.removeEventListener("pointerdown", M, !0),
        e.el.removeEventListener("pointerup", j, !0)
    }
    s("beforeInit", ()=>{
        r = Gt("span", e.params.a11y.notificationClass),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true")
    }
    ),
    s("afterInit", ()=>{
        e.params.a11y.enabled && W()
    }
    ),
    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        e.params.a11y.enabled && D()
    }
    ),
    s("fromEdge toEdge afterInit lock unlock", ()=>{
        e.params.a11y.enabled && N()
    }
    ),
    s("paginationUpdate", ()=>{
        e.params.a11y.enabled && k()
    }
    ),
    s("destroy", ()=>{
        e.params.a11y.enabled && re()
    }
    )
}
function S3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let r = !1
      , n = {};
    const a = p=>p.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      , o = p=>{
        const b = at();
        let w;
        p ? w = new URL(p) : w = b.location;
        const m = w.pathname.slice(1).split("/").filter(_=>_ !== "")
          , h = m.length
          , E = m[h - 2]
          , y = m[h - 1];
        return {
            key: E,
            value: y
        }
    }
      , l = (p,b)=>{
        const w = at();
        if (!r || !e.params.history.enabled)
            return;
        let m;
        e.params.url ? m = new URL(e.params.url) : m = w.location;
        const h = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${b}"]`) : e.slides[b];
        let E = a(h.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
            let _ = e.params.history.root;
            _[_.length - 1] === "/" && (_ = _.slice(0, _.length - 1)),
            E = `${_}/${p ? `${p}/` : ""}${E}`
        } else
            m.pathname.includes(p) || (E = `${p ? `${p}/` : ""}${E}`);
        e.params.history.keepQuery && (E += m.search);
        const y = w.history.state;
        y && y.value === E || (e.params.history.replaceState ? w.history.replaceState({
            value: E
        }, null, E) : w.history.pushState({
            value: E
        }, null, E))
    }
      , c = (p,b,w)=>{
        if (b)
            for (let m = 0, h = e.slides.length; m < h; m += 1) {
                const E = e.slides[m];
                if (a(E.getAttribute("data-history")) === b) {
                    const _ = e.getSlideIndex(E);
                    e.slideTo(_, p, w)
                }
            }
        else
            e.slideTo(0, p, w)
    }
      , u = ()=>{
        n = o(e.params.url),
        c(e.params.speed, n.value, !1)
    }
      , d = ()=>{
        const p = at();
        if (e.params.history) {
            if (!p.history || !p.history.pushState) {
                e.params.history.enabled = !1,
                e.params.hashNavigation.enabled = !0;
                return
            }
            if (r = !0,
            n = o(e.params.url),
            !n.key && !n.value) {
                e.params.history.replaceState || p.addEventListener("popstate", u);
                return
            }
            c(0, n.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", u)
        }
    }
      , f = ()=>{
        const p = at();
        e.params.history.replaceState || p.removeEventListener("popstate", u)
    }
    ;
    s("init", ()=>{
        e.params.history.enabled && d()
    }
    ),
    s("destroy", ()=>{
        e.params.history.enabled && f()
    }
    ),
    s("transitionEnd _freeModeNoMomentumRelease", ()=>{
        r && l(e.params.history.key, e.activeIndex)
    }
    ),
    s("slideChange", ()=>{
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex)
    }
    )
}
function C3(i) {
    let {swiper: e, extendParams: t, emit: s, on: r} = i
      , n = !1;
    const a = _t()
      , o = at();
    t({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex(f, p) {
                if (e.virtual && e.params.virtual.enabled) {
                    const b = e.slides.filter(m=>m.getAttribute("data-hash") === p)[0];
                    return b ? parseInt(b.getAttribute("data-swiper-slide-index"), 10) : 0
                }
                return e.getSlideIndex(wt(e.slidesEl, `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0])
            }
        }
    });
    const l = ()=>{
        s("hashChange");
        const f = a.location.hash.replace("#", "")
          , p = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
          , b = p ? p.getAttribute("data-hash") : "";
        if (f !== b) {
            const w = e.params.hashNavigation.getSlideIndex(e, f);
            if (typeof w > "u" || Number.isNaN(w))
                return;
            e.slideTo(w)
        }
    }
      , c = ()=>{
        if (!n || !e.params.hashNavigation.enabled)
            return;
        const f = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
          , p = f ? f.getAttribute("data-hash") || f.getAttribute("data-history") : "";
        e.params.hashNavigation.replaceState && o.history && o.history.replaceState ? (o.history.replaceState(null, null, `#${p}` || ""),
        s("hashSet")) : (a.location.hash = p || "",
        s("hashSet"))
    }
      , u = ()=>{
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
            return;
        n = !0;
        const f = a.location.hash.replace("#", "");
        if (f) {
            const b = e.params.hashNavigation.getSlideIndex(e, f);
            e.slideTo(b || 0, 0, e.params.runCallbacksOnInit, !0)
        }
        e.params.hashNavigation.watchState && o.addEventListener("hashchange", l)
    }
      , d = ()=>{
        e.params.hashNavigation.watchState && o.removeEventListener("hashchange", l)
    }
    ;
    r("init", ()=>{
        e.params.hashNavigation.enabled && u()
    }
    ),
    r("destroy", ()=>{
        e.params.hashNavigation.enabled && d()
    }
    ),
    r("transitionEnd _freeModeNoMomentumRelease", ()=>{
        n && c()
    }
    ),
    r("slideChange", ()=>{
        n && e.params.cssMode && c()
    }
    )
}
function $3(i) {
    let {swiper: e, extendParams: t, on: s, emit: r, params: n} = i;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let a, o, l = n && n.autoplay ? n.autoplay.delay : 3e3, c = n && n.autoplay ? n.autoplay.delay : 3e3, u, d = new Date().getTime(), f, p, b, w, m, h, E;
    function y(H) {
        !e || e.destroyed || !e.wrapperEl || H.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", y),
        !E && M())
    }
    const _ = ()=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? f = !0 : f && (c = u,
        f = !1);
        const H = e.autoplay.paused ? u : d + c - new Date().getTime();
        e.autoplay.timeLeft = H,
        r("autoplayTimeLeft", H, H / l),
        o = requestAnimationFrame(()=>{
            _()
        }
        )
    }
      , N = ()=>{
        let H;
        return e.virtual && e.params.virtual.enabled ? H = e.slides.filter(pe=>pe.classList.contains("swiper-slide-active"))[0] : H = e.slides[e.activeIndex],
        H ? parseInt(H.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , P = H=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        cancelAnimationFrame(o),
        _();
        let Q = typeof H > "u" ? e.params.autoplay.delay : H;
        l = e.params.autoplay.delay,
        c = e.params.autoplay.delay;
        const pe = N();
        !Number.isNaN(pe) && pe > 0 && typeof H > "u" && (Q = pe,
        l = pe,
        c = pe),
        u = Q;
        const G = e.params.speed
          , J = ()=>{
            !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0),
            r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0),
            r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0),
            r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, G, !0, !0),
            r("autoplay")),
            e.params.cssMode && (d = new Date().getTime(),
            requestAnimationFrame(()=>{
                P()
            }
            )))
        }
        ;
        return Q > 0 ? (clearTimeout(a),
        a = setTimeout(()=>{
            J()
        }
        , Q)) : requestAnimationFrame(()=>{
            J()
        }
        ),
        Q
    }
      , q = ()=>{
        d = new Date().getTime(),
        e.autoplay.running = !0,
        P(),
        r("autoplayStart")
    }
      , k = ()=>{
        e.autoplay.running = !1,
        clearTimeout(a),
        cancelAnimationFrame(o),
        r("autoplayStop")
    }
      , I = (H,Q)=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        clearTimeout(a),
        H || (h = !0);
        const pe = ()=>{
            r("autoplayPause"),
            e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", y) : M()
        }
        ;
        if (e.autoplay.paused = !0,
        Q) {
            m && (u = e.params.autoplay.delay),
            m = !1,
            pe();
            return
        }
        u = (u || e.params.autoplay.delay) - (new Date().getTime() - d),
        !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0),
        pe())
    }
      , M = ()=>{
        e.isEnd && u < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (d = new Date().getTime(),
        h ? (h = !1,
        P(u)) : P(),
        e.autoplay.paused = !1,
        r("autoplayResume"))
    }
      , j = ()=>{
        if (e.destroyed || !e.autoplay.running)
            return;
        const H = _t();
        H.visibilityState === "hidden" && (h = !0,
        I(!0)),
        H.visibilityState === "visible" && M()
    }
      , O = H=>{
        H.pointerType === "mouse" && (h = !0,
        E = !0,
        !(e.animating || e.autoplay.paused) && I(!0))
    }
      , A = H=>{
        H.pointerType === "mouse" && (E = !1,
        e.autoplay.paused && M())
    }
      , D = ()=>{
        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", O),
        e.el.addEventListener("pointerleave", A))
    }
      , W = ()=>{
        e.el.removeEventListener("pointerenter", O),
        e.el.removeEventListener("pointerleave", A)
    }
      , re = ()=>{
        _t().addEventListener("visibilitychange", j)
    }
      , L = ()=>{
        _t().removeEventListener("visibilitychange", j)
    }
    ;
    s("init", ()=>{
        e.params.autoplay.enabled && (D(),
        re(),
        q())
    }
    ),
    s("destroy", ()=>{
        W(),
        L(),
        e.autoplay.running && k()
    }
    ),
    s("_freeModeStaticRelease", ()=>{
        (b || h) && M()
    }
    ),
    s("_freeModeNoMomentumRelease", ()=>{
        e.params.autoplay.disableOnInteraction ? k() : I(!0, !0)
    }
    ),
    s("beforeTransitionStart", (H,Q,pe)=>{
        e.destroyed || !e.autoplay.running || (pe || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : k())
    }
    ),
    s("sliderFirstMove", ()=>{
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                k();
                return
            }
            p = !0,
            b = !1,
            h = !1,
            w = setTimeout(()=>{
                h = !0,
                b = !0,
                I(!0)
            }
            , 200)
        }
    }
    ),
    s("touchEnd", ()=>{
        if (!(e.destroyed || !e.autoplay.running || !p)) {
            if (clearTimeout(w),
            clearTimeout(a),
            e.params.autoplay.disableOnInteraction) {
                b = !1,
                p = !1;
                return
            }
            b && e.params.cssMode && M(),
            b = !1,
            p = !1
        }
    }
    ),
    s("slideChange", ()=>{
        e.destroyed || !e.autoplay.running || (m = !0)
    }
    ),
    Object.assign(e.autoplay, {
        start: q,
        stop: k,
        pause: I,
        resume: M
    })
}
function P3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let r = !1
      , n = !1;
    e.thumbs = {
        swiper: null
    };
    function a() {
        const c = e.thumbs.swiper;
        if (!c || c.destroyed)
            return;
        const u = c.clickedIndex
          , d = c.clickedSlide;
        if (d && d.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof u > "u" || u === null)
            return;
        let f;
        c.params.loop ? f = parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : f = u,
        e.params.loop ? e.slideToLoop(f) : e.slideTo(f)
    }
    function o() {
        const {thumbs: c} = e.params;
        if (r)
            return !1;
        r = !0;
        const u = e.constructor;
        if (c.swiper instanceof u)
            e.thumbs.swiper = c.swiper,
            Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper.update();
        else if ($r(c.swiper)) {
            const d = Object.assign({}, c.swiper);
            Object.assign(d, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            e.thumbs.swiper = new u(d),
            n = !0
        }
        return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
    }
    function l(c) {
        const u = e.thumbs.swiper;
        if (!u || u.destroyed)
            return;
        const d = u.params.slidesPerView === "auto" ? u.slidesPerViewDynamic() : u.params.slidesPerView;
        let f = 1;
        const p = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (f = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (f = 1),
        f = Math.floor(f),
        u.slides.forEach(m=>m.classList.remove(p)),
        u.params.loop || u.params.virtual && u.params.virtual.enabled)
            for (let m = 0; m < f; m += 1)
                wt(u.slidesEl, `[data-swiper-slide-index="${e.realIndex + m}"]`).forEach(h=>{
                    h.classList.add(p)
                }
                );
        else
            for (let m = 0; m < f; m += 1)
                u.slides[e.realIndex + m] && u.slides[e.realIndex + m].classList.add(p);
        const b = e.params.thumbs.autoScrollOffset
          , w = b && !u.params.loop;
        if (e.realIndex !== u.realIndex || w) {
            const m = u.activeIndex;
            let h, E;
            if (u.params.loop) {
                const y = u.slides.filter(_=>_.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
                h = u.slides.indexOf(y),
                E = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else
                h = e.realIndex,
                E = h > e.previousIndex ? "next" : "prev";
            w && (h += E === "next" ? b : -1 * b),
            u.visibleSlidesIndexes && u.visibleSlidesIndexes.indexOf(h) < 0 && (u.params.centeredSlides ? h > m ? h = h - Math.floor(d / 2) + 1 : h = h + Math.floor(d / 2) - 1 : h > m && u.params.slidesPerGroup,
            u.slideTo(h, c ? 0 : void 0))
        }
    }
    s("beforeInit", ()=>{
        const {thumbs: c} = e.params;
        if (!(!c || !c.swiper))
            if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
                const u = _t()
                  , d = ()=>{
                    const p = typeof c.swiper == "string" ? u.querySelector(c.swiper) : c.swiper;
                    if (p && p.swiper)
                        c.swiper = p.swiper,
                        o(),
                        l(!0);
                    else if (p) {
                        const b = w=>{
                            c.swiper = w.detail[0],
                            p.removeEventListener("init", b),
                            o(),
                            l(!0),
                            c.swiper.update(),
                            e.update()
                        }
                        ;
                        p.addEventListener("init", b)
                    }
                    return p
                }
                  , f = ()=>{
                    if (e.destroyed)
                        return;
                    d() || requestAnimationFrame(f)
                }
                ;
                requestAnimationFrame(f)
            } else
                o(),
                l(!0)
    }
    ),
    s("slideChange update resize observerUpdate", ()=>{
        l()
    }
    ),
    s("setTransition", (c,u)=>{
        const d = e.thumbs.swiper;
        !d || d.destroyed || d.setTransition(u)
    }
    ),
    s("beforeDestroy", ()=>{
        const c = e.thumbs.swiper;
        !c || c.destroyed || n && c.destroy()
    }
    ),
    Object.assign(e.thumbs, {
        init: o,
        update: l
    })
}
function A3(i) {
    let {swiper: e, extendParams: t, emit: s, once: r} = i;
    t({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    });
    function n() {
        if (e.params.cssMode)
            return;
        const l = e.getTranslate();
        e.setTranslate(l),
        e.setTransition(0),
        e.touchEventsData.velocities.length = 0,
        e.freeMode.onTouchEnd({
            currentPos: e.rtl ? e.translate : -e.translate
        })
    }
    function a() {
        if (e.params.cssMode)
            return;
        const {touchEventsData: l, touches: c} = e;
        l.velocities.length === 0 && l.velocities.push({
            position: c[e.isHorizontal() ? "startX" : "startY"],
            time: l.touchStartTime
        }),
        l.velocities.push({
            position: c[e.isHorizontal() ? "currentX" : "currentY"],
            time: Qt()
        })
    }
    function o(l) {
        let {currentPos: c} = l;
        if (e.params.cssMode)
            return;
        const {params: u, wrapperEl: d, rtlTranslate: f, snapGrid: p, touchEventsData: b} = e
          , m = Qt() - b.touchStartTime;
        if (c < -e.minTranslate()) {
            e.slideTo(e.activeIndex);
            return
        }
        if (c > -e.maxTranslate()) {
            e.slides.length < p.length ? e.slideTo(p.length - 1) : e.slideTo(e.slides.length - 1);
            return
        }
        if (u.freeMode.momentum) {
            if (b.velocities.length > 1) {
                const k = b.velocities.pop()
                  , I = b.velocities.pop()
                  , M = k.position - I.position
                  , j = k.time - I.time;
                e.velocity = M / j,
                e.velocity /= 2,
                Math.abs(e.velocity) < u.freeMode.minimumVelocity && (e.velocity = 0),
                (j > 150 || Qt() - k.time > 300) && (e.velocity = 0)
            } else
                e.velocity = 0;
            e.velocity *= u.freeMode.momentumVelocityRatio,
            b.velocities.length = 0;
            let h = 1e3 * u.freeMode.momentumRatio;
            const E = e.velocity * h;
            let y = e.translate + E;
            f && (y = -y);
            let _ = !1, N;
            const P = Math.abs(e.velocity) * 20 * u.freeMode.momentumBounceRatio;
            let q;
            if (y < e.maxTranslate())
                u.freeMode.momentumBounce ? (y + e.maxTranslate() < -P && (y = e.maxTranslate() - P),
                N = e.maxTranslate(),
                _ = !0,
                b.allowMomentumBounce = !0) : y = e.maxTranslate(),
                u.loop && u.centeredSlides && (q = !0);
            else if (y > e.minTranslate())
                u.freeMode.momentumBounce ? (y - e.minTranslate() > P && (y = e.minTranslate() + P),
                N = e.minTranslate(),
                _ = !0,
                b.allowMomentumBounce = !0) : y = e.minTranslate(),
                u.loop && u.centeredSlides && (q = !0);
            else if (u.freeMode.sticky) {
                let k;
                for (let I = 0; I < p.length; I += 1)
                    if (p[I] > -y) {
                        k = I;
                        break
                    }
                Math.abs(p[k] - y) < Math.abs(p[k - 1] - y) || e.swipeDirection === "next" ? y = p[k] : y = p[k - 1],
                y = -y
            }
            if (q && r("transitionEnd", ()=>{
                e.loopFix()
            }
            ),
            e.velocity !== 0) {
                if (f ? h = Math.abs((-y - e.translate) / e.velocity) : h = Math.abs((y - e.translate) / e.velocity),
                u.freeMode.sticky) {
                    const k = Math.abs((f ? -y : y) - e.translate)
                      , I = e.slidesSizesGrid[e.activeIndex];
                    k < I ? h = u.speed : k < 2 * I ? h = u.speed * 1.5 : h = u.speed * 2.5
                }
            } else if (u.freeMode.sticky) {
                e.slideToClosest();
                return
            }
            u.freeMode.momentumBounce && _ ? (e.updateProgress(N),
            e.setTransition(h),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            e.animating = !0,
            Hr(d, ()=>{
                !e || e.destroyed || !b.allowMomentumBounce || (s("momentumBounce"),
                e.setTransition(u.speed),
                setTimeout(()=>{
                    e.setTranslate(N),
                    Hr(d, ()=>{
                        !e || e.destroyed || e.transitionEnd()
                    }
                    )
                }
                , 0))
            }
            )) : e.velocity ? (s("_freeModeNoMomentumRelease"),
            e.updateProgress(y),
            e.setTransition(h),
            e.setTranslate(y),
            e.transitionStart(!0, e.swipeDirection),
            e.animating || (e.animating = !0,
            Hr(d, ()=>{
                !e || e.destroyed || e.transitionEnd()
            }
            ))) : e.updateProgress(y),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        } else if (u.freeMode.sticky) {
            e.slideToClosest();
            return
        } else
            u.freeMode && s("_freeModeNoMomentumRelease");
        (!u.freeMode.momentum || m >= u.longSwipesMs) && (s("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses())
    }
    Object.assign(e, {
        freeMode: {
            onTouchStart: n,
            onTouchMove: a,
            onTouchEnd: o
        }
    })
}
function M3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let r, n, a, o;
    const l = ()=>{
        let w = e.params.spaceBetween;
        return typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * e.size : typeof w == "string" && (w = parseFloat(w)),
        w
    }
      , c = w=>{
        const {slidesPerView: m} = e.params
          , {rows: h, fill: E} = e.params.grid
          , y = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : w.length;
        a = Math.floor(y / h),
        Math.floor(y / h) === y / h ? r = y : r = Math.ceil(y / h) * h,
        m !== "auto" && E === "row" && (r = Math.max(r, m * h)),
        n = r / h
    }
      , u = ()=>{
        e.slides && e.slides.forEach(w=>{
            w.swiperSlideGridSet && (w.style.height = "",
            w.style[e.getDirectionLabel("margin-top")] = "")
        }
        )
    }
      , d = (w,m,h)=>{
        const {slidesPerGroup: E} = e.params
          , y = l()
          , {rows: _, fill: N} = e.params.grid
          , P = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : h.length;
        let q, k, I;
        if (N === "row" && E > 1) {
            const M = Math.floor(w / (E * _))
              , j = w - _ * E * M
              , O = M === 0 ? E : Math.min(Math.ceil((P - M * _ * E) / _), E);
            I = Math.floor(j / O),
            k = j - I * O + M * E,
            q = k + I * r / _,
            m.style.order = q
        } else
            N === "column" ? (k = Math.floor(w / _),
            I = w - k * _,
            (k > a || k === a && I === _ - 1) && (I += 1,
            I >= _ && (I = 0,
            k += 1))) : (I = Math.floor(w / n),
            k = w - I * n);
        m.row = I,
        m.column = k,
        m.style.height = `calc((100% - ${(_ - 1) * y}px) / ${_})`,
        m.style[e.getDirectionLabel("margin-top")] = I !== 0 ? y && `${y}px` : "",
        m.swiperSlideGridSet = !0
    }
      , f = (w,m)=>{
        const {centeredSlides: h, roundLengths: E} = e.params
          , y = l()
          , {rows: _} = e.params.grid;
        if (e.virtualSize = (w + y) * r,
        e.virtualSize = Math.ceil(e.virtualSize / _) - y,
        e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
        h) {
            const N = [];
            for (let P = 0; P < m.length; P += 1) {
                let q = m[P];
                E && (q = Math.floor(q)),
                m[P] < e.virtualSize + m[0] && N.push(q)
            }
            m.splice(0, m.length),
            m.push(...N)
        }
    }
      , p = ()=>{
        o = e.params.grid && e.params.grid.rows > 1
    }
      , b = ()=>{
        const {params: w, el: m} = e
          , h = w.grid && w.grid.rows > 1;
        o && !h ? (m.classList.remove(`${w.containerModifierClass}grid`, `${w.containerModifierClass}grid-column`),
        a = 1,
        e.emitContainerClasses()) : !o && h && (m.classList.add(`${w.containerModifierClass}grid`),
        w.grid.fill === "column" && m.classList.add(`${w.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
        o = h
    }
    ;
    s("init", p),
    s("update", b),
    e.grid = {
        initSlides: c,
        unsetSlides: u,
        updateSlide: d,
        updateWrapperSize: f
    }
}
function O3(i) {
    const e = this
      , {params: t, slidesEl: s} = e;
    t.loop && e.loopDestroy();
    const r = n=>{
        if (typeof n == "string") {
            const a = document.createElement("div");
            a.innerHTML = n,
            s.append(a.children[0]),
            a.innerHTML = ""
        } else
            s.append(n)
    }
    ;
    if (typeof i == "object" && "length"in i)
        for (let n = 0; n < i.length; n += 1)
            i[n] && r(i[n]);
    else
        r(i);
    e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update()
}
function k3(i) {
    const e = this
      , {params: t, activeIndex: s, slidesEl: r} = e;
    t.loop && e.loopDestroy();
    let n = s + 1;
    const a = o=>{
        if (typeof o == "string") {
            const l = document.createElement("div");
            l.innerHTML = o,
            r.prepend(l.children[0]),
            l.innerHTML = ""
        } else
            r.prepend(o)
    }
    ;
    if (typeof i == "object" && "length"in i) {
        for (let o = 0; o < i.length; o += 1)
            i[o] && a(i[o]);
        n = s + i.length
    } else
        a(i);
    e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    e.slideTo(n, 0, !1)
}
function L3(i, e) {
    const t = this
      , {params: s, activeIndex: r, slidesEl: n} = t;
    let a = r;
    s.loop && (a -= t.loopedSlides,
    t.loopDestroy(),
    t.recalcSlides());
    const o = t.slides.length;
    if (i <= 0) {
        t.prependSlide(e);
        return
    }
    if (i >= o) {
        t.appendSlide(e);
        return
    }
    let l = a > i ? a + 1 : a;
    const c = [];
    for (let u = o - 1; u >= i; u -= 1) {
        const d = t.slides[u];
        d.remove(),
        c.unshift(d)
    }
    if (typeof e == "object" && "length"in e) {
        for (let u = 0; u < e.length; u += 1)
            e[u] && n.append(e[u]);
        l = a > i ? a + e.length : a
    } else
        n.append(e);
    for (let u = 0; u < c.length; u += 1)
        n.append(c[u]);
    t.recalcSlides(),
    s.loop && t.loopCreate(),
    (!s.observer || t.isElement) && t.update(),
    s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
}
function I3(i) {
    const e = this
      , {params: t, activeIndex: s} = e;
    let r = s;
    t.loop && (r -= e.loopedSlides,
    e.loopDestroy());
    let n = r, a;
    if (typeof i == "object" && "length"in i) {
        for (let o = 0; o < i.length; o += 1)
            a = i[o],
            e.slides[a] && e.slides[a].remove(),
            a < n && (n -= 1);
        n = Math.max(n, 0)
    } else
        a = i,
        e.slides[a] && e.slides[a].remove(),
        a < n && (n -= 1),
        n = Math.max(n, 0);
    e.recalcSlides(),
    t.loop && e.loopCreate(),
    (!t.observer || e.isElement) && e.update(),
    t.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1)
}
function D3() {
    const i = this
      , e = [];
    for (let t = 0; t < i.slides.length; t += 1)
        e.push(t);
    i.removeSlide(e)
}
function R3(i) {
    let {swiper: e} = i;
    Object.assign(e, {
        appendSlide: O3.bind(e),
        prependSlide: k3.bind(e),
        addSlide: L3.bind(e),
        removeSlide: I3.bind(e),
        removeAllSlides: D3.bind(e)
    })
}
function ur(i) {
    const {effect: e, swiper: t, on: s, setTranslate: r, setTransition: n, overwriteParams: a, perspective: o, recreateShadows: l, getEffectParams: c} = i;
    s("beforeInit", ()=>{
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
        o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const d = a ? a() : {};
        Object.assign(t.params, d),
        Object.assign(t.originalParams, d)
    }
    ),
    s("setTranslate", ()=>{
        t.params.effect === e && r()
    }
    ),
    s("setTransition", (d,f)=>{
        t.params.effect === e && n(f)
    }
    ),
    s("transitionEnd", ()=>{
        if (t.params.effect === e && l) {
            if (!c || !c().slideShadows)
                return;
            t.slides.forEach(d=>{
                d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>f.remove())
            }
            ),
            l()
        }
    }
    );
    let u;
    s("virtualUpdate", ()=>{
        t.params.effect === e && (t.slides.length || (u = !0),
        requestAnimationFrame(()=>{
            u && t.slides && t.slides.length && (r(),
            u = !1)
        }
        ))
    }
    )
}
function an(i, e) {
    const t = Is(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
    t.style["-webkit-backface-visibility"] = "hidden"),
    t
}
function Ea(i) {
    let {swiper: e, duration: t, transformElements: s, allSlides: r} = i;
    const {activeIndex: n} = e
      , a = o=>o.parentElement ? o.parentElement : e.slides.filter(c=>c.shadowRoot && c.shadowRoot === o.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let o = !1, l;
        r ? l = s : l = s.filter(c=>{
            const u = c.classList.contains("swiper-slide-transform") ? a(c) : c;
            return e.getSlideIndex(u) === n
        }
        ),
        l.forEach(c=>{
            Hr(c, ()=>{
                if (o || !e || e.destroyed)
                    return;
                o = !0,
                e.animating = !1;
                const u = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(u)
            }
            )
        }
        )
    }
}
function N3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        fadeEffect: {
            crossFade: !1
        }
    }),
    ur({
        effect: "fade",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {slides: a} = e
              , o = e.params.fadeEffect;
            for (let l = 0; l < a.length; l += 1) {
                const c = e.slides[l];
                let d = -c.swiperSlideOffset;
                e.params.virtualTranslate || (d -= e.translate);
                let f = 0;
                e.isHorizontal() || (f = d,
                d = 0);
                const p = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(c.progress), 0) : 1 + Math.min(Math.max(c.progress, -1), 0)
                  , b = an(o, c);
                b.style.opacity = p,
                b.style.transform = `translate3d(${d}px, ${f}px, 0px)`
            }
        }
        ,
        setTransition: a=>{
            const o = e.slides.map(l=>Is(l));
            o.forEach(l=>{
                l.style.transitionDuration = `${a}ms`
            }
            ),
            Ea({
                swiper: e,
                duration: a,
                transformElements: o,
                allSlides: !0
            })
        }
        ,
        overwriteParams: ()=>({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function V3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (l,c,u)=>{
        let d = u ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top")
          , f = u ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
        d || (d = Gt("div", `swiper-slide-shadow-cube swiper-slide-shadow-${u ? "left" : "top"}`.split(" ")),
        l.append(d)),
        f || (f = Gt("div", `swiper-slide-shadow-cube swiper-slide-shadow-${u ? "right" : "bottom"}`.split(" ")),
        l.append(f)),
        d && (d.style.opacity = Math.max(-c, 0)),
        f && (f.style.opacity = Math.max(c, 0))
    }
    ;
    ur({
        effect: "cube",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {el: l, wrapperEl: c, slides: u, width: d, height: f, rtlTranslate: p, size: b, browser: w} = e
              , m = e.params.cubeEffect
              , h = e.isHorizontal()
              , E = e.virtual && e.params.virtual.enabled;
            let y = 0, _;
            m.shadow && (h ? (_ = e.wrapperEl.querySelector(".swiper-cube-shadow"),
            _ || (_ = Gt("div", "swiper-cube-shadow"),
            e.wrapperEl.append(_)),
            _.style.height = `${d}px`) : (_ = l.querySelector(".swiper-cube-shadow"),
            _ || (_ = Gt("div", "swiper-cube-shadow"),
            l.append(_))));
            for (let P = 0; P < u.length; P += 1) {
                const q = u[P];
                let k = P;
                E && (k = parseInt(q.getAttribute("data-swiper-slide-index"), 10));
                let I = k * 90
                  , M = Math.floor(I / 360);
                p && (I = -I,
                M = Math.floor(-I / 360));
                const j = Math.max(Math.min(q.progress, 1), -1);
                let O = 0
                  , A = 0
                  , D = 0;
                k % 4 === 0 ? (O = -M * 4 * b,
                D = 0) : (k - 1) % 4 === 0 ? (O = 0,
                D = -M * 4 * b) : (k - 2) % 4 === 0 ? (O = b + M * 4 * b,
                D = b) : (k - 3) % 4 === 0 && (O = -b,
                D = 3 * b + b * 4 * M),
                p && (O = -O),
                h || (A = O,
                O = 0);
                const W = `rotateX(${h ? 0 : -I}deg) rotateY(${h ? I : 0}deg) translate3d(${O}px, ${A}px, ${D}px)`;
                j <= 1 && j > -1 && (y = k * 90 + j * 90,
                p && (y = -k * 90 - j * 90),
                e.browser && e.browser.need3dFix && Math.abs(y) / 90 % 2 === 1 && (y += .001)),
                q.style.transform = W,
                m.slideShadows && r(q, j, h)
            }
            if (c.style.transformOrigin = `50% 50% -${b / 2}px`,
            c.style["-webkit-transform-origin"] = `50% 50% -${b / 2}px`,
            m.shadow)
                if (h)
                    _.style.transform = `translate3d(0px, ${d / 2 + m.shadowOffset}px, ${-d / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${m.shadowScale})`;
                else {
                    const P = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90
                      , q = 1.5 - (Math.sin(P * 2 * Math.PI / 360) / 2 + Math.cos(P * 2 * Math.PI / 360) / 2)
                      , k = m.shadowScale
                      , I = m.shadowScale / q
                      , M = m.shadowOffset;
                    _.style.transform = `scale3d(${k}, 1, ${I}) translate3d(0px, ${f / 2 + M}px, ${-f / 2 / I}px) rotateX(-89.99deg)`
                }
            const N = (w.isSafari || w.isWebView) && w.needPerspectiveFix ? -b / 2 : 0;
            c.style.transform = `translate3d(0px,0,${N}px) rotateX(${e.isHorizontal() ? 0 : y}deg) rotateY(${e.isHorizontal() ? -y : 0}deg)`,
            c.style.setProperty("--swiper-cube-translate-z", `${N}px`)
        }
        ,
        setTransition: l=>{
            const {el: c, slides: u} = e;
            if (u.forEach(d=>{
                d.style.transitionDuration = `${l}ms`,
                d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{
                    f.style.transitionDuration = `${l}ms`
                }
                )
            }
            ),
            e.params.cubeEffect.shadow && !e.isHorizontal()) {
                const d = c.querySelector(".swiper-cube-shadow");
                d && (d.style.transitionDuration = `${l}ms`)
            }
        }
        ,
        recreateShadows: ()=>{
            const l = e.isHorizontal();
            e.slides.forEach(c=>{
                const u = Math.max(Math.min(c.progress, 1), -1);
                r(c, u, l)
            }
            )
        }
        ,
        getEffectParams: ()=>e.params.cubeEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
        })
    })
}
function er(i, e, t) {
    const s = `swiper-slide-shadow${t ? `-${t}` : ""}${i ? ` swiper-slide-shadow-${i}` : ""}`
      , r = Is(e);
    let n = r.querySelector(`.${s.split(" ").join(".")}`);
    return n || (n = Gt("div", s.split(" ")),
    r.append(n)),
    n
}
function H3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const r = (l,c)=>{
        let u = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-left") : l.querySelector(".swiper-slide-shadow-top")
          , d = e.isHorizontal() ? l.querySelector(".swiper-slide-shadow-right") : l.querySelector(".swiper-slide-shadow-bottom");
        u || (u = er("flip", l, e.isHorizontal() ? "left" : "top")),
        d || (d = er("flip", l, e.isHorizontal() ? "right" : "bottom")),
        u && (u.style.opacity = Math.max(-c, 0)),
        d && (d.style.opacity = Math.max(c, 0))
    }
    ;
    ur({
        effect: "flip",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {slides: l, rtlTranslate: c} = e
              , u = e.params.flipEffect;
            for (let d = 0; d < l.length; d += 1) {
                const f = l[d];
                let p = f.progress;
                e.params.flipEffect.limitRotation && (p = Math.max(Math.min(f.progress, 1), -1));
                const b = f.swiperSlideOffset;
                let m = -180 * p
                  , h = 0
                  , E = e.params.cssMode ? -b - e.translate : -b
                  , y = 0;
                e.isHorizontal() ? c && (m = -m) : (y = E,
                E = 0,
                h = -m,
                m = 0),
                e.browser && e.browser.need3dFix && (Math.abs(m) / 90 % 2 === 1 && (m += .001),
                Math.abs(h) / 90 % 2 === 1 && (h += .001)),
                f.style.zIndex = -Math.abs(Math.round(p)) + l.length,
                u.slideShadows && r(f, p);
                const _ = `translate3d(${E}px, ${y}px, 0px) rotateX(${h}deg) rotateY(${m}deg)`
                  , N = an(u, f);
                N.style.transform = _
            }
        }
        ,
        setTransition: l=>{
            const c = e.slides.map(u=>Is(u));
            c.forEach(u=>{
                u.style.transitionDuration = `${l}ms`,
                u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{
                    d.style.transitionDuration = `${l}ms`
                }
                )
            }
            ),
            Ea({
                swiper: e,
                duration: l,
                transformElements: c
            })
        }
        ,
        recreateShadows: ()=>{
            e.params.flipEffect,
            e.slides.forEach(l=>{
                let c = l.progress;
                e.params.flipEffect.limitRotation && (c = Math.max(Math.min(l.progress, 1), -1)),
                r(l, c)
            }
            )
        }
        ,
        getEffectParams: ()=>e.params.flipEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function F3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    }),
    ur({
        effect: "coverflow",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {width: a, height: o, slides: l, slidesSizesGrid: c} = e
              , u = e.params.coverflowEffect
              , d = e.isHorizontal()
              , f = e.translate
              , p = d ? -f + a / 2 : -f + o / 2
              , b = d ? u.rotate : -u.rotate
              , w = u.depth;
            for (let m = 0, h = l.length; m < h; m += 1) {
                const E = l[m]
                  , y = c[m]
                  , _ = E.swiperSlideOffset
                  , N = (p - _ - y / 2) / y
                  , P = typeof u.modifier == "function" ? u.modifier(N) : N * u.modifier;
                let q = d ? b * P : 0
                  , k = d ? 0 : b * P
                  , I = -w * Math.abs(P)
                  , M = u.stretch;
                typeof M == "string" && M.indexOf("%") !== -1 && (M = parseFloat(u.stretch) / 100 * y);
                let j = d ? 0 : M * P
                  , O = d ? M * P : 0
                  , A = 1 - (1 - u.scale) * Math.abs(P);
                Math.abs(O) < .001 && (O = 0),
                Math.abs(j) < .001 && (j = 0),
                Math.abs(I) < .001 && (I = 0),
                Math.abs(q) < .001 && (q = 0),
                Math.abs(k) < .001 && (k = 0),
                Math.abs(A) < .001 && (A = 0),
                e.browser && e.browser.need3dFix && (Math.abs(q) / 90 % 2 === 1 && (q += .001),
                Math.abs(k) / 90 % 2 === 1 && (k += .001));
                const D = `translate3d(${O}px,${j}px,${I}px)  rotateX(${k}deg) rotateY(${q}deg) scale(${A})`
                  , W = an(u, E);
                if (W.style.transform = D,
                E.style.zIndex = -Math.abs(Math.round(P)) + 1,
                u.slideShadows) {
                    let re = d ? E.querySelector(".swiper-slide-shadow-left") : E.querySelector(".swiper-slide-shadow-top")
                      , L = d ? E.querySelector(".swiper-slide-shadow-right") : E.querySelector(".swiper-slide-shadow-bottom");
                    re || (re = er("coverflow", E, d ? "left" : "top")),
                    L || (L = er("coverflow", E, d ? "right" : "bottom")),
                    re && (re.style.opacity = P > 0 ? P : 0),
                    L && (L.style.opacity = -P > 0 ? -P : 0)
                }
            }
        }
        ,
        setTransition: a=>{
            e.slides.map(l=>Is(l)).forEach(l=>{
                l.style.transitionDuration = `${a}ms`,
                l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{
                    c.style.transitionDuration = `${a}ms`
                }
                )
            }
            )
        }
        ,
        perspective: ()=>!0,
        overwriteParams: ()=>({
            watchSlidesProgress: !0
        })
    })
}
function B3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
            }
        }
    });
    const r = o=>typeof o == "string" ? o : `${o}px`;
    ur({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {slides: o, wrapperEl: l, slidesSizesGrid: c} = e
              , u = e.params.creativeEffect
              , {progressMultiplier: d} = u
              , f = e.params.centeredSlides;
            if (f) {
                const p = c[0] / 2 - e.params.slidesOffsetBefore || 0;
                l.style.transform = `translateX(calc(50% - ${p}px))`
            }
            for (let p = 0; p < o.length; p += 1) {
                const b = o[p]
                  , w = b.progress
                  , m = Math.min(Math.max(b.progress, -u.limitProgress), u.limitProgress);
                let h = m;
                f || (h = Math.min(Math.max(b.originalProgress, -u.limitProgress), u.limitProgress));
                const E = b.swiperSlideOffset
                  , y = [e.params.cssMode ? -E - e.translate : -E, 0, 0]
                  , _ = [0, 0, 0];
                let N = !1;
                e.isHorizontal() || (y[1] = y[0],
                y[0] = 0);
                let P = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                m < 0 ? (P = u.next,
                N = !0) : m > 0 && (P = u.prev,
                N = !0),
                y.forEach((A,D)=>{
                    y[D] = `calc(${A}px + (${r(P.translate[D])} * ${Math.abs(m * d)}))`
                }
                ),
                _.forEach((A,D)=>{
                    let W = P.rotate[D] * Math.abs(m * d);
                    e.browser && e.browser.need3dFix && Math.abs(W) / 90 % 2 === 1 && (W += .001),
                    _[D] = W
                }
                ),
                b.style.zIndex = -Math.abs(Math.round(w)) + o.length;
                const q = y.join(", ")
                  , k = `rotateX(${_[0]}deg) rotateY(${_[1]}deg) rotateZ(${_[2]}deg)`
                  , I = h < 0 ? `scale(${1 + (1 - P.scale) * h * d})` : `scale(${1 - (1 - P.scale) * h * d})`
                  , M = h < 0 ? 1 + (1 - P.opacity) * h * d : 1 - (1 - P.opacity) * h * d
                  , j = `translate3d(${q}) ${k} ${I}`;
                if (N && P.shadow || !N) {
                    let A = b.querySelector(".swiper-slide-shadow");
                    if (!A && P.shadow && (A = er("creative", b)),
                    A) {
                        const D = u.shadowPerProgress ? m * (1 / u.limitProgress) : m;
                        A.style.opacity = Math.min(Math.max(Math.abs(D), 0), 1)
                    }
                }
                const O = an(u, b);
                O.style.transform = j,
                O.style.opacity = M,
                P.origin && (O.style.transformOrigin = P.origin)
            }
        }
        ,
        setTransition: o=>{
            const l = e.slides.map(c=>Is(c));
            l.forEach(c=>{
                c.style.transitionDuration = `${o}ms`,
                c.querySelectorAll(".swiper-slide-shadow").forEach(u=>{
                    u.style.transitionDuration = `${o}ms`
                }
                )
            }
            ),
            Ea({
                swiper: e,
                duration: o,
                transformElements: l,
                allSlides: !0
            })
        }
        ,
        perspective: ()=>e.params.creativeEffect.perspective,
        overwriteParams: ()=>({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
function z3(i) {
    let {swiper: e, extendParams: t, on: s} = i;
    t({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }),
    ur({
        effect: "cards",
        swiper: e,
        on: s,
        setTranslate: ()=>{
            const {slides: a, activeIndex: o, rtlTranslate: l} = e
              , c = e.params.cardsEffect
              , {startTranslate: u, isTouched: d} = e.touchEventsData
              , f = l ? -e.translate : e.translate;
            for (let p = 0; p < a.length; p += 1) {
                const b = a[p]
                  , w = b.progress
                  , m = Math.min(Math.max(w, -4), 4);
                let h = b.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides && e.params.cssMode && (h -= a[0].swiperSlideOffset);
                let E = e.params.cssMode ? -h - e.translate : -h
                  , y = 0;
                const _ = -100 * Math.abs(m);
                let N = 1
                  , P = -c.perSlideRotate * m
                  , q = c.perSlideOffset - Math.abs(m) * .75;
                const k = e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p
                  , I = (k === o || k === o - 1) && m > 0 && m < 1 && (d || e.params.cssMode) && f < u
                  , M = (k === o || k === o + 1) && m < 0 && m > -1 && (d || e.params.cssMode) && f > u;
                if (I || M) {
                    const D = (1 - Math.abs((Math.abs(m) - .5) / .5)) ** .5;
                    P += -28 * m * D,
                    N += -.5 * D,
                    q += 96 * D,
                    y = `${-25 * D * Math.abs(m)}%`
                }
                if (m < 0 ? E = `calc(${E}px ${l ? "-" : "+"} (${q * Math.abs(m)}%))` : m > 0 ? E = `calc(${E}px ${l ? "-" : "+"} (-${q * Math.abs(m)}%))` : E = `${E}px`,
                !e.isHorizontal()) {
                    const D = y;
                    y = E,
                    E = D
                }
                const j = m < 0 ? `${1 + (1 - N) * m}` : `${1 - (1 - N) * m}`
                  , O = `
        translate3d(${E}, ${y}, ${_}px)
        rotateZ(${c.rotate ? l ? -P : P : 0}deg)
        scale(${j})
      `;
                if (c.slideShadows) {
                    let D = b.querySelector(".swiper-slide-shadow");
                    D || (D = er("cards", b)),
                    D && (D.style.opacity = Math.min(Math.max((Math.abs(m) - .5) / .5, 0), 1))
                }
                b.style.zIndex = -Math.abs(Math.round(w)) + a.length;
                const A = an(c, b);
                A.style.transform = O
            }
        }
        ,
        setTransition: a=>{
            const o = e.slides.map(l=>Is(l));
            o.forEach(l=>{
                l.style.transitionDuration = `${a}ms`,
                l.querySelectorAll(".swiper-slide-shadow").forEach(c=>{
                    c.style.transitionDuration = `${a}ms`
                }
                )
            }
            ),
            Ea({
                swiper: e,
                duration: a,
                transformElements: o
            })
        }
        ,
        perspective: ()=>!0,
        overwriteParams: ()=>({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
const j3 = [m3, g3, v3, b3, y3, w3, E3, x3, _3, T3, S3, C3, $3, P3, A3, M3, R3, N3, V3, H3, F3, B3, z3];
Rt.use(j3);
function q3() {
    return {
        init() {
            new Rt(".swiper-box",{
                slidesPerView: 6,
                spaceBetween: 10,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10
                    }
                },
                loop: !0,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            })
        }
    }
}
function G3() {
    return {}
}
function W3() {
    return {
        isOpen: !1,
        open() {
            this.isOpen = !0
        },
        close() {
            this.isOpen = !1
        }
    }
}
function Y3() {
    return {
        isOpen: !1,
        open() {
            this.isOpen = !0
        },
        close() {
            this.isOpen = !1
        }
    }
}
function X3() {
    return {
        isOpen: !1,
        activeTab: "tab-1",
        selectFilter(i) {
            const e = i.target.getAttribute("data-tab");
            this.activeTab = e
        },
        open() {
            this.isOpen = !0
        },
        close() {
            this.isOpen = !1
        }
    }
}
function U3() {
    return {
        show: !1,
        activeImageUrl: null,
        isOpen() {
            return this.show
        },
        open(i) {
            this.activeImageUrl = i.target.parentNode.href,
            this.show = !0
        },
        close() {
            this.show = !1,
            setTimeout(()=>this.activeImageUrl = null, 300)
        }
    }
}
function K3() {
    return {
        activeTab: "tab-1",
        toggle(i) {
            const e = i.target.getAttribute("data-tab");
            this.activeTab = e
        }
    }
}
function Z3(i) {
    return {
        currentStep: 0,
        currentProgress: 0,
        maxSteps: i,
        nextStep() {
            this.currentStep < this.maxSteps && (this.currentStep = this.currentStep + 1,
            this.currentProgress = this.currentStep / this.maxSteps * 100,
            console.log("Progress: ", this.currentProgress))
        },
        prevStep() {
            this.currentStep > 0 && (this.currentStep = this.currentStep - 1,
            this.currentProgress = this.currentStep / this.maxSteps * 100,
            console.log("Progress: ", this.currentProgress))
        }
    }
}
function J3(i) {
    var e = i.activeIndex
      , t = i.slides.length;
    if (i.params.loop)
        switch (i.activeIndex) {
        case 0:
            e = t - 3;
            break;
        case t - 1:
            e = 0;
            break;
        default:
            --e
        }
    return e
}
function Q3() {
    return {
        swiper: null,
        currentSlide: null,
        init() {
            this.swiper = new Rt(".swiper",{
                loop: !0,
                autoplay: {
                    delay: 5e3
                },
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "fade",
                fadeEffect: {
                    crossFade: !0
                },
                pagination: {
                    el: ".carousel-pagination",
                    type: "bullets"
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                },
                onSlideChangeEnd: function(i) {
                    console.log(J3(i))
                }
            })
        },
        swiperNext() {
            this.swiper !== void 0 && this.swiper.slideNext()
        },
        swiperPrev() {
            this.swiper !== void 0 && this.swiper.slidePrev()
        }
    }
}
function e6() {
    return {
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthShortNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        showDatepicker: !1,
        datepickerValue: "",
        selectedDate: "",
        dateFormat: "DD-MM-YYYY",
        month: "",
        year: "",
        no_of_days: [],
        blankdays: [],
        initDate() {
            let i;
            this.selectedDate ? i = new Date(Date.parse(this.selectedDate)) : i = new Date,
            this.month = i.getMonth(),
            this.year = i.getFullYear(),
            this.datepickerValue = this.formatDateForDisplay(i)
        },
        formatDateForDisplay(i) {
            let e = this.dayNames[i.getDay()]
              , t = ("0" + i.getDate()).slice(-2)
              , s = this.monthNames[i.getMonth()]
              , r = this.monthShortNames[i.getMonth()]
              , n = ("0" + (parseInt(i.getMonth()) + 1)).slice(-2)
              , a = i.getFullYear();
            return this.dateFormat === "DD-MM-YYYY" ? `${t}-${n}-${a}` : this.dateFormat === "YYYY-MM-DD" ? `${a}-${n}-${t}` : this.dateFormat === "D d M, Y" ? `${e} ${t} ${r} ${a}` : `${e} ${t} ${s} ${a}`
        },
        isSelectedDate(i) {
            const e = new Date(this.year,this.month,i);
            return this.datepickerValue === this.formatDateForDisplay(e)
        },
        isToday(i) {
            const e = new Date
              , t = new Date(this.year,this.month,i);
            return e.toDateString() === t.toDateString()
        },
        getDateValue(i) {
            let e = new Date(this.year,this.month,i);
            this.datepickerValue = this.formatDateForDisplay(e),
            this.isSelectedDate(i),
            this.showDatepicker = !1
        },
        getNoOfDays() {
            let i = new Date(this.year,this.month + 1,0).getDate()
              , e = new Date(this.year,this.month).getDay()
              , t = [];
            for (let r = 1; r <= e; r++)
                t.push(r);
            let s = [];
            for (let r = 1; r <= i; r++)
                s.push(r);
            this.blankdays = t,
            this.no_of_days = s
        }
    }
}
window.layout = Yy;
window.navbar = Xy;
window.sidebar = Uy;
window.search = Zy;
window.backtotop = Jy;
window.boxCarousel = q3;
window.video = G3;
window.collapse = W3;
window.gallery = U3;
window.dropdown = Y3;
window.dropFilter = X3;
window.tabs = K3;
window.wizard = Z3;
window.swiperHero = Q3;
window.calendar = e6;
function t6() {
    return {
        activeBrand: "all",
        resetScroll() {
            return window.scrollTo({
                top: 350,
                behavior: "smooth"
            }),
            !1
        }
    }
}
function i6() {
    return {
        activeSection: "overview",
        activeTab: "cash",
        activeOption: "standard",
        toggleTabs(i) {
            const e = i.target.getAttribute("data-tab");
            this.activeTab = e
        },
        initScrollAnchors() {
            document.querySelectorAll('.scroll-link[href^="#"]').forEach(i=>{
                i.onclick = function(e) {
                    e.preventDefault();
                    let t = this.getAttribute("href")
                      , s = document.querySelector(t)
                      , r = 100
                      , a = s.offsetTop - r;
                    window.scrollTo({
                        top: a + 50,
                        behavior: "smooth"
                    })
                }
            }
            )
        }
    }
}
window.inventory = t6;
window.vehicle = i6;
function s6() {
    const i = document.querySelectorAll("[data-background]");
    if (typeof i < "u" && i != null)
        for (var e = 0, t = i.length; e < t; e++) {
            let s = i[e].getAttribute("data-background");
            i[e].style.backgroundSize = "cover",
            i[e].style.backgroundRepeat = "no-repeat",
            i[e].style.backgroundImage = `url(${s})`
        }
}
window.Alpine = _i;
_i.plugin(S1);
_i.plugin($1);
_i.plugin(A1);
_i.plugin(B1);
_i.store("app", {
    init() {
        this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    },
    isDark: _i.$persist(!1),
    activeApp: _i.$persist("dashboard"),
    isSidebarActive: !1,
    isSidebarMobileActive: !1
});
_i.start();
document.onreadystatechange = function() {
    document.readyState == "complete" && s6()
}
;
export {md as $, kg as A, Oh as B, Og as C, nt as D, ka as E, no as F, $e as G, h6 as H, p6 as I, di as J, yn as K, Aa as L, v6 as M, Mt as N, im as O, y6 as P, ll as Q, li as R, bn as S, x6 as T, _m as U, qm as V, m6 as W, g6 as X, Jp as Y, xm as Z, gd as _, b6 as a, z as a0, Gm as b, _6 as c, E6 as d, w6 as e, pd as f, Gn as g, bd as h, ne as i, U as j, lo as k, fe as l, ps as m, oo as n, zn as o, zm as p, ti as q, ul as r, Us as s, mg as t, yd as u, sl as v, mi as w, Tp as x, nd as y, Hp as z};
