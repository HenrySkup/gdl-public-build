(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t3, e4, n5) {
      if (this._$cssResult$ = true, n5 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3, this.t = e4;
    }
    get styleSheet() {
      let t3 = this.o;
      const s5 = this.t;
      if (e && void 0 === t3) {
        const e4 = void 0 !== s5 && 1 === s5.length;
        e4 && (t3 = n.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && n.set(s5, t3));
      }
      return t3;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
  var i = (t3, ...e4) => {
    const n5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s5, n6) => e5 + ((t4) => {
      if (true === t4._$cssResult$)
        return t4.cssText;
      if ("number" == typeof t4)
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t3[n6 + 1], t3[0]);
    return new o(n5, t3, s);
  };
  var S = (s5, n5) => {
    e ? s5.adoptedStyleSheets = n5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n5.forEach((e4) => {
      const n6 = document.createElement("style"), o5 = t.litNonce;
      void 0 !== o5 && n6.setAttribute("nonce", o5), n6.textContent = e4.cssText, s5.appendChild(n6);
    });
  };
  var c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e4 = "";
    for (const s5 of t4.cssRules)
      e4 += s5.cssText;
    return r(e4);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t3, i3) {
    switch (i3) {
      case Boolean:
        t3 = t3 ? h : null;
        break;
      case Object:
      case Array:
        t3 = null == t3 ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i3) {
    let s5 = t3;
    switch (i3) {
      case Boolean:
        s5 = null !== t3;
        break;
      case Number:
        s5 = null === t3 ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var a = (t3, i3) => i3 !== t3 && (i3 == i3 || t3 == t3);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t3) {
      var i3;
      this.finalize(), (null !== (i3 = this.h) && void 0 !== i3 ? i3 : this.h = []).push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i3, s5) => {
        const e4 = this._$Ep(s5, i3);
        void 0 !== e4 && (this._$Ev.set(e4, s5), t3.push(e4));
      }), t3;
    }
    static createProperty(t3, i3 = l) {
      if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e4 = this.getPropertyDescriptor(t3, s5, i3);
        void 0 !== e4 && Object.defineProperty(this.prototype, t3, e4);
      }
    }
    static getPropertyDescriptor(t3, i3, s5) {
      return { get() {
        return this[i3];
      }, set(e4) {
        const r4 = this[t3];
        this[i3] = e4, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d))
        return false;
      this[d] = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i3 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i3)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
      const s5 = [];
      if (Array.isArray(i3)) {
        const e4 = new Set(i3.flat(1 / 0).reverse());
        for (const i4 of e4)
          s5.unshift(c(i4));
      } else
        void 0 !== i3 && s5.push(c(i3));
      return s5;
    }
    static _$Ep(t3, i3) {
      const s5 = i3.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
    }
    _$Eu() {
      var t3;
      this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i3, s5;
      (null !== (i3 = this._$ES) && void 0 !== i3 ? i3 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
    }
    removeController(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.splice(this._$ES.indexOf(t3) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t3, i3) => {
        this.hasOwnProperty(i3) && (this._$Ei.set(i3, this[i3]), delete this[i3]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostConnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i3;
        return null === (i3 = t4.hostDisconnected) || void 0 === i3 ? void 0 : i3.call(t4);
      });
    }
    attributeChangedCallback(t3, i3, s5) {
      this._$AK(t3, s5);
    }
    _$EO(t3, i3, s5 = l) {
      var e4;
      const r4 = this.constructor._$Ep(t3, s5);
      if (void 0 !== r4 && true === s5.reflect) {
        const h3 = (void 0 !== (null === (e4 = s5.converter) || void 0 === e4 ? void 0 : e4.toAttribute) ? s5.converter : n2).toAttribute(i3, s5.type);
        this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t3, i3) {
      var s5;
      const e4 = this.constructor, r4 = e4._$Ev.get(t3);
      if (void 0 !== r4 && this._$El !== r4) {
        const t4 = e4.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n2;
        this._$El = r4, this[r4] = h3.fromAttribute(i3, t4.type), this._$El = null;
      }
    }
    requestUpdate(t3, i3, s5) {
      let e4 = true;
      void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e4 = false), !this.isUpdatePending && e4 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return null != t3 && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i4) => this[i4] = t4), this._$Ei = void 0);
      let i3 = false;
      const s5 = this._$AL;
      try {
        i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
          var i4;
          return null === (i4 = t4.hostUpdate) || void 0 === i4 ? void 0 : i4.call(t4);
        }), this.update(s5)) : this._$Ek();
      } catch (t4) {
        throw i3 = false, this._$Ek(), t4;
      }
      i3 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i3;
      null === (i3 = this._$ES) || void 0 === i3 || i3.forEach((t4) => {
        var i4;
        return null === (i4 = t4.hostUpdated) || void 0 === i4 ? void 0 : i4.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      void 0 !== this._$EC && (this._$EC.forEach((t4, i3) => this._$EO(i3, this[i3], t4)), this._$EC = void 0), this._$Ek();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
  var c2 = Array.isArray;
  var v = (t3) => c2(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t3) => (i3, ...s5) => ({ _$litType$: t3, strings: i3, values: s5 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t3, i3) {
    if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i3) : i3;
  }
  var V = (t3, i3) => {
    const s5 = t3.length - 1, e4 = [];
    let l4, r4 = 2 === i3 ? "<svg>" : "", u3 = f;
    for (let i4 = 0; i4 < s5; i4++) {
      const s6 = t3[i4];
      let d3, c3, v2 = -1, a3 = 0;
      for (; a3 < s6.length && (u3.lastIndex = a3, c3 = u3.exec(s6), null !== c3); )
        a3 = u3.lastIndex, u3 === f ? "!--" === c3[1] ? u3 = _ : void 0 !== c3[1] ? u3 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l4 = RegExp("</" + c3[2], "g")), u3 = p) : void 0 !== c3[3] && (u3 = p) : u3 === p ? ">" === c3[0] ? (u3 = null != l4 ? l4 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u3.lastIndex - c3[2].length, d3 = c3[1], u3 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l4 = void 0);
      const w2 = u3 === p && t3[i4 + 1].startsWith("/>") ? " " : "";
      r4 += u3 === f ? s6 + h2 : v2 >= 0 ? (e4.push(d3), s6.slice(0, v2) + o3 + s6.slice(v2) + n3 + w2) : s6 + n3 + (-2 === v2 ? (e4.push(void 0), i4) : w2);
    }
    return [P(t3, r4 + (t3[s5] || "<?>") + (2 === i3 ? "</svg>" : "")), e4];
  };
  var N = class _N {
    constructor({ strings: t3, _$litType$: i3 }, e4) {
      let h3;
      this.parts = [];
      let r4 = 0, d3 = 0;
      const c3 = t3.length - 1, v2 = this.parts, [a3, f2] = V(t3, i3);
      if (this.el = _N.createElement(a3, e4), C.currentNode = this.el.content, 2 === i3) {
        const t4 = this.el.content, i4 = t4.firstChild;
        i4.remove(), t4.append(...i4.childNodes);
      }
      for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
        if (1 === h3.nodeType) {
          if (h3.hasAttributes()) {
            const t4 = [];
            for (const i4 of h3.getAttributeNames())
              if (i4.endsWith(o3) || i4.startsWith(n3)) {
                const s5 = f2[d3++];
                if (t4.push(i4), void 0 !== s5) {
                  const t5 = h3.getAttribute(s5.toLowerCase() + o3).split(n3), i5 = /([.?@])?(.*)/.exec(s5);
                  v2.push({ type: 1, index: r4, name: i5[2], strings: t5, ctor: "." === i5[1] ? H : "?" === i5[1] ? L : "@" === i5[1] ? z : k });
                } else
                  v2.push({ type: 6, index: r4 });
              }
            for (const i4 of t4)
              h3.removeAttribute(i4);
          }
          if (y.test(h3.tagName)) {
            const t4 = h3.textContent.split(n3), i4 = t4.length - 1;
            if (i4 > 0) {
              h3.textContent = s3 ? s3.emptyScript : "";
              for (let s5 = 0; s5 < i4; s5++)
                h3.append(t4[s5], u2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
              h3.append(t4[i4], u2());
            }
          }
        } else if (8 === h3.nodeType)
          if (h3.data === l2)
            v2.push({ type: 2, index: r4 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = h3.data.indexOf(n3, t4 + 1)); )
              v2.push({ type: 7, index: r4 }), t4 += n3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t3, i3) {
      const s5 = r3.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function S2(t3, i3, s5 = t3, e4) {
    var o5, n5, l4, h3;
    if (i3 === T)
      return i3;
    let r4 = void 0 !== e4 ? null === (o5 = s5._$Co) || void 0 === o5 ? void 0 : o5[e4] : s5._$Cl;
    const u3 = d2(i3) ? void 0 : i3._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n5 = null == r4 ? void 0 : r4._$AO) || void 0 === n5 || n5.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t3), r4._$AT(t3, s5, e4)), void 0 !== e4 ? (null !== (l4 = (h3 = s5)._$Co) && void 0 !== l4 ? l4 : h3._$Co = [])[e4] = r4 : s5._$Cl = r4), void 0 !== r4 && (i3 = S2(t3, r4._$AS(t3, i3.values), r4, e4)), i3;
  }
  var M = class {
    constructor(t3, i3) {
      this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t3) {
      var i3;
      const { el: { content: s5 }, parts: e4 } = this._$AD, o5 = (null !== (i3 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i3 ? i3 : r3).importNode(s5, true);
      C.currentNode = o5;
      let n5 = C.nextNode(), l4 = 0, h3 = 0, u3 = e4[0];
      for (; void 0 !== u3; ) {
        if (l4 === u3.index) {
          let i4;
          2 === u3.type ? i4 = new R(n5, n5.nextSibling, this, t3) : 1 === u3.type ? i4 = new u3.ctor(n5, u3.name, u3.strings, this, t3) : 6 === u3.type && (i4 = new Z(n5, this, t3)), this._$AV.push(i4), u3 = e4[++h3];
        }
        l4 !== (null == u3 ? void 0 : u3.index) && (n5 = C.nextNode(), l4++);
      }
      return C.currentNode = r3, o5;
    }
    v(t3) {
      let i3 = 0;
      for (const s5 of this._$AV)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
    }
  };
  var R = class _R {
    constructor(t3, i3, s5, e4) {
      var o5;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e4, this._$Cp = null === (o5 = null == e4 ? void 0 : e4.isConnected) || void 0 === o5 || o5;
    }
    get _$AU() {
      var t3, i3;
      return null !== (i3 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i3 ? i3 : this._$Cp;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i3 = this._$AM;
      return void 0 !== i3 && 11 === (null == t3 ? void 0 : t3.nodeType) && (t3 = i3.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i3 = this) {
      t3 = S2(this, t3, i3), d2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.g(t3) : void 0 !== t3.nodeType ? this.$(t3) : v(t3) ? this.T(t3) : this._(t3);
    }
    k(t3) {
      return this._$AA.parentNode.insertBefore(t3, this._$AB);
    }
    $(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
    }
    _(t3) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
    }
    g(t3) {
      var i3;
      const { values: s5, _$litType$: e4 } = t3, o5 = "number" == typeof e4 ? this._$AC(t3) : (void 0 === e4.el && (e4.el = N.createElement(P(e4.h, e4.h[0]), this.options)), e4);
      if ((null === (i3 = this._$AH) || void 0 === i3 ? void 0 : i3._$AD) === o5)
        this._$AH.v(s5);
      else {
        const t4 = new M(o5, this), i4 = t4.u(this.options);
        t4.v(s5), this.$(i4), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i3 = E.get(t3.strings);
      return void 0 === i3 && E.set(t3.strings, i3 = new N(t3)), i3;
    }
    T(t3) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s5, e4 = 0;
      for (const o5 of t3)
        e4 === i3.length ? i3.push(s5 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s5 = i3[e4], s5._$AI(o5), e4++;
      e4 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i3.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB; ) {
        const i4 = t3.nextSibling;
        t3.remove(), t3 = i4;
      }
    }
    setConnected(t3) {
      var i3;
      void 0 === this._$AM && (this._$Cp = t3, null === (i3 = this._$AP) || void 0 === i3 || i3.call(this, t3));
    }
  };
  var k = class {
    constructor(t3, i3, s5, e4, o5) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = o5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s5, e4) {
      const o5 = this.strings;
      let n5 = false;
      if (void 0 === o5)
        t3 = S2(this, t3, i3, 0), n5 = !d2(t3) || t3 !== this._$AH && t3 !== T, n5 && (this._$AH = t3);
      else {
        const e5 = t3;
        let l4, h3;
        for (t3 = o5[0], l4 = 0; l4 < o5.length - 1; l4++)
          h3 = S2(this, e5[s5 + l4], i3, l4), h3 === T && (h3 = this._$AH[l4]), n5 || (n5 = !d2(h3) || h3 !== this._$AH[l4]), h3 === A ? t3 = A : t3 !== A && (t3 += (null != h3 ? h3 : "") + o5[l4 + 1]), this._$AH[l4] = h3;
      }
      n5 && !e4 && this.j(t3);
    }
    j(t3) {
      t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t3) {
      this.element[this.name] = t3 === A ? void 0 : t3;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t3) {
      t3 && t3 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t3, i3, s5, e4, o5) {
      super(t3, i3, s5, e4, o5), this.type = 5;
    }
    _$AI(t3, i3 = this) {
      var s5;
      if ((t3 = null !== (s5 = S2(this, t3, i3, 0)) && void 0 !== s5 ? s5 : A) === T)
        return;
      const e4 = this._$AH, o5 = t3 === A && e4 !== A || t3.capture !== e4.capture || t3.once !== e4.once || t3.passive !== e4.passive, n5 = t3 !== A && (e4 === A || o5);
      o5 && this.element.removeEventListener(this.name, this, e4), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i3, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i3 = this.options) || void 0 === i3 ? void 0 : i3.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var Z = class {
    constructor(t3, i3, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      S2(this, t3);
    }
  };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
  var D = (t3, i3, s5) => {
    var e4, o5;
    const n5 = null !== (e4 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e4 ? e4 : i3;
    let l4 = n5._$litPart$;
    if (void 0 === l4) {
      const t4 = null !== (o5 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o5 ? o5 : null;
      n5._$litPart$ = l4 = new R(i3.insertBefore(u2(), t4), t4, void 0, null != s5 ? s5 : {});
    }
    return l4._$AI(t3), l4;
  };

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t3, e4;
      const i3 = super.createRenderRoot();
      return null !== (t3 = (e4 = this.renderOptions).renderBefore) && void 0 !== t3 || (e4.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
      const i3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/SideBar/index.js
  var SideBar = class extends s4 {
    static properties = {
      open: { type: Boolean, reflect: true }
    };
    static styles = i`
    :host {
      --primary-color     : var(--accent-color);
      --background-color  : var(--grey);
      --muted-color       : var(--light-grey);

      --toggle-size       : 4rem;

      position            : fixed;
      z-index             : 10000;
    }

    [part="toggle"] {
      position          : fixed;
      top               : 0;
      right             : 0;
      z-index           : 2;

      display           : block;
      padding           : 0 1rem;
      border            : none;
      color             : var(--primary-color);
      background-color  : transparent;
      font-size         : var(--toggle-size);
      font-weight       : 600;
      cursor            : pointer;
    }


    [part="menu"] {
      position            : fixed;
      right               : 0;
      top                 : 0;
      z-index             : 1;

      height              : 100vh;
      height              : -webkit-fill-available;

      display : flex;
      flex-direction : column;
      justify-content : space-between;
      max-height          : 100vh;
      overflow-y          : scroll;
      width               : 100vw;
      max-width           : var(--content-sm);
      margin-block        : 0;
      padding-block-start : calc( 1.25 * var(--toggle-size));
      padding-block-end : 1em;

      transform         : translateX(110vw);
      transition        : transform 0.5s ease-in-out;
      background-color  : var(--background-color);
    }

    [part  = "nav"] {


      display         : flex;
      flex-direction  : column;
      gap             : var(--space-sm);
      padding-inline  : var(--space-sm);

    }

    ::slotted( hr ) {
      width: 100%;
    }
  `;
    constructor() {
      super();
      this.open = false;
    }
    render() {
      return x`
      <button 
        part    = "toggle"
        style   = "transform : ${!this.open ? "rotate(0)" : "rotate(45deg)"}"
        @click  = ${this.toggle}>+</button>

      <menu 
        part  = "menu"
        style = "transform : ${this.open ? "translateX(0)" : "translateX(110vw)"}" >

        <nav part = "nav">
          <slot></slot>
        </nav>

        <footer part = "footer">  
          <slot name="footer"></slot>    
        </footer>
      </menu> 
    `;
    }
    toggle() {
      this.open = !this.open;
    }
  };
  customElements.define("side-bar", SideBar);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/PageSection/index.js
  var PageSection = class extends s4 {
    static properties = {
      layout: { type: String },
      size: { type: String },
      _contentRegistry: { type: Object, state: true }
    };
    static styles = i`
    :host {
      --header-width        : 100%;
      --introduction-width  : 100%;
      --content-width       : 100%;

      display           : flex;
      flex-direction    : column;
      justify-items     : center;
      justify-content   : space-around;

      width             : 100%;
      max-width         : 100vw;
      padding-inline    : var(--space-md);
      padding-block     : var(--space-xl);

      color             : var(--primary-color);
      background-color  : var(--background-color);
      accent-color      : var(--accent-color);

      container : content / inline-size;
    }

    [part="header"] {
      width             : 100%;
      max-width         : var(--header-width);
      margin-inline     : auto;
      margin-block      : 2em;
      display           : flex;
      flex-direction    : column;
      justify-items     : flex-start;
      gap : var(--space-sm);
    }
    [part="title"] {
      width         : 100%;
      /* margin-block  : 1em 0.5em; */
    }
    [part="introduction"] {
      width         : 100%;
      max-width     : var(--header-width);
      margin-inline : auto;
      margin-block-end : 1em;
    }

    [part="introduction"] ::slotted( * ) {
      max-width : var(--introduction-width);
    }

    [part="content"] {
    }

    [hidden] {
      display : none;
    }

    [part="content"] ::slotted( :not( card-card ) ) {
      max-width       : var(--content-width);
      margin-inline   : auto;
    }

    [part="content"] ::slotted( tag-tag ) {
      display : block;
    }

    [part="content"] ::slotted( card-card ) {
      --wrapperMaxWidth     : var(--content-width);
    }
  `;
    constructor() {
      super();
      this.layout = void 0;
      this.size = void 0;
      this._contentRegistry = {
        title: false,
        subtitle: false,
        introduction: false,
        content: false
      };
    }
    render() {
      return x`
      <header 
        part="header"
        @slotchange = ${this.registerContent}
        ?hidden     = ${!this._contentRegistry.title}>

        <div part="title"><slot name="title"></slot></div>

      </header>

      <div 
        part="introduction"
        @slotchange = ${this.registerContent}>
        <slot name="introduction"></slot>
      </div>

      <div part="content"><slot></slot></div>

    `;
    }
    registerContent(e4) {
      if (e4.target.assignedNodes()) {
        this._contentRegistry[e4.target.name] = true;
        this._contentRegistry = { ...this._contentRegistry };
      }
    }
  };
  customElements.define("page-section", PageSection);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/SiteFooter.js
  var SiteFooter = class extends PageSection {
    // static properties = {
    // };
    static styles = [
      PageSection.styles,
      i`
      :host {
        display         : flex;
        flex-direction  : row;
        flex-wrap       : wrap;
        justify-content : space-between;
      }

      [part="nav"],
      [part="imprint"] {
        width           : max-content;
        display         : flex;
        flex-direction  : column;
        gap : var(--space-sm);
      }

      ::slotted( * ) {
        margin-inline   : 0;
      }
    `
    ];
    constructor() {
      super();
    }
    render() {
      return x`
        <nav part = "nav">
          <slot name = "nav"></slot>
        </nav>

        <div part = "imprint">
          <slot name="imprint"></slot>
        </div>
    `;
    }
  };
  customElements.define("site-footer", SiteFooter);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/CalloutSection/index.js
  var CalloutSection = class extends s4 {
    static properties = {
      title: { type: String },
      backgroundMedia: { type: String }
    };
    static styles = i`
    :host {
      --background-opacity : 0.5;
      --background-color  : var(--background-color);

      position        : relative;
      display         : flex;
      min-height      : 90vh;
      flex-direction  : column;
      justify-content : center;
      align-items     : center;
      gap             : 1em;
  
      background-color : var(--background-color);

      /* Use Viewport units for a more responsive text size */
      font-size     : max(8vw, 5vh); 
      font-weight   : 900;
      line-height   : 1em;
      color         : var(--primary-color);
      font-family   : var(--font-display);
    }
    [part="content"] {
      position      : absolute;
      z-index       : 1000;
      /* max-width     : min(90vw, 35ch); */
      max-width     : 90vw;
      margin-inline : auto;

      color         : inherit;
      font-family   : inherit;
      font-size     : inherit; 
      font-weight   : inherit;
      line-height   : inherit;
      
    }

    [part="background"] {
      position    : absolute;
      top         : 0;
      left        : 0;
      width       : 100%;
      height      : 100%;
      overflow    : hidden;
      object-fit  : cover;
      opacity     : var(--background-opacity);
    }

    [part="background"] video {
      object-fit  : cover;
      width       : 100%;
      height      : 100%;
    }
  `;
    constructor() {
      super();
      this.title = void 0;
      this.backgroundMedia = void 0;
    }
    render() {
      return x`

      <div part="content"><slot></slot></div>

      <img part="background" src=${this.backgroundMedia} />

    `;
    }
  };
  customElements.define("callout-section", CalloutSection);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/DeckSection/index.js
  var DeckSection = class extends PageSection {
    static properties = {
      size: { type: String, reflect: true },
      layout: { type: String, reflect: true },
      _contentRegistry: { type: Object }
    };
    static styles = [
      PageSection.styles,
      i`
      :host {
        --layout    : row;
        --wrap      : nowrap;
        --deck-gap  : var(--space-sm);

        container : deck / inline-size;
      }

     

      :host([layout="column"]) {
        --layout    : column;
      }
      :host([layout="column"]) ::slotted( card-card ) {
        margin-inline : auto;
      }

      :host([layout="row"]){
        --layout    : row; 
        --wrap      : wrap;    
      }

      :host([layout="row"]) ::slotted( card-card ) {
        --wrapperMaxWidth : none;
      }

      [part="content"] {
        width           : 100%;
        max-width       : var(--content-width);
        margin-inline   : auto;
        display         : flex;
        gap             : var(--deck-gap);
        flex-direction  : var(--layout);
        flex-wrap       : var(--wrap);
        justify-content : space-evenly;
        
        /* align-items     : center; */

        &.--tag-list {
          flex-direction : row;
          gap :var(--space-md);
          justify-content : center;
          align-items : center;

          & ::slotted( tag-tag ){
            margin-inline : 0;
          }
        }
      }

      ::slotted( header ) {
        max-width   : none;
        width       : 100%;
        flex-grow   : 1;
        font-weight : bolder;
        
      }
      ::slotted( card-card ) {
        width              : 100%;
        --wrapperMaxWidth  : var(--size);
      }

     

      @container deck ( max-width: 400px ) {
        [part="content"] {
          --layout : column;
        }
      }

      
  `
    ];
    constructor() {
      super();
      this.size = "md";
      this.layout = "column";
      this._contentRegistry = /* @__PURE__ */ new Set();
    }
    render() {
      return x`
      <header part="header">
        <div part="title">
          <slot name="title"></slot>
        </div>

        <div part="subtitle">
          <slot name="subtitle"></slot>
        </div>
      </header>

      <div part="introduction">
        <slot name="introduction"></slot>
      </div>

      <div  part="content"
            class= "
              ${this._contentRegistry.size == 1 && this._contentRegistry.has("TAG-TAG") ? "--tag-list" : A}
            "
      >
        <slot @slotchange=${this.registerContent}></slot>
      </div>

    `;
    }
    registerContent(e4) {
      let tagNames = new Set(this._contentRegistry);
      e4.target.assignedNodes().filter((node) => node.tagName != void 0).forEach((node) => tagNames.add(node.tagName));
      console.log(tagNames);
      this._contentRegistry = tagNames;
    }
  };
  customElements.define("deck-section", DeckSection);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/GallerySection/index.js
  var GallerySection = class extends PageSection {
    static properties = {
      size: { type: String, reflect: true },
      layout: { type: String, reflect: true },
      captionPosition: { type: String, reflect: true }
    };
    static styles = [
      PageSection.styles,
      i`
      :host {
        --layout        : grid;
        --gallery-gap   : var(--space-sm);

        display         : flex;
        gap             : var(--space-lg);
        flex-direction  : row;
        color           : var(--secondary-color);
        font-size       : smaller;

        container : gallery / inline-size;
      }

      /* Caption Positioning */
      :host([captionPosition="left"]) #wrapper  { flex-direction : row-reverse }
      :host([captionPosition="bottom"]) { flex-direction : column }
      :host([captionPosition="right"])  { flex-direction : row }
      :host([captionPosition="right"]) [part="content"],
      :host([captionPosition="left"]) [part="content"] { max-width : none }

      [part="caption"] {
        width           : 100%;
        flex-basis      : var(--content-sm);  
        max-width       : var(--content-sm); 
        display         : flex;
        flex-direction  : column;
      }

      [part="title"] { }

      [part="content"] {

        /*
        look into this????
        https://css-tricks.com/an-auto-filling-css-grid-with-max-columns/

        */

        --minCellSize   : 100; // px
        --grid-columns  : calc( 200 / var( --minCellSize ) );

        width         : 100%;
        max-width     : var(--content-width);
        margin-inline : auto;

        display               : grid;
        gap                   : 1em;
        grid-auto-flow        : row dense;
        grid-template-columns : repeat( auto-fill, 
                                        minmax( 
                                          calc( var( --minCellSize ) * 1px ),
                                          1fr 
                                        ) 
                                      );
        grid-auto-rows        : minmax( 
                                  calc( var( --minCellSize ) * 1px ), 
                                  1fr 
                                );
        
        & ::slotted( * ) {
          --spanSize      : 1;
          --spanX         : 1;
          --spanY         : 1;
          grid-column : span min( var( --repeat ),
                                  calc( var( --spanSize ) * var( --spanX ) ) 
                                );
          grid-row    : span min( var( --repeat ),
                                  calc( var( --spanSize ) * var( --spanY ) )
                                );
          align-self    : center;
          margin-inline : 0;

          height : 100%;
          height : -webkit-fill-available;
          width  : 100%;
          width  : -webkit-fill-available;
        }

        /* Sizing slotted content */
        & ::slotted( [size="xs"] ) { --spanSize : 1 }
        & ::slotted( [size="sm"] ) { --spanSize : 2 }
        & ::slotted( [size="md"] ) { --spanSize : 3 }
        & ::slotted( [size="lg"] ) { --spanSize : 4 }
        & ::slotted( [size="xl"] ) { --spanSize : 5 }
        
        /* Shaping slotted content */
        ::slotted( [shape="square"] ) { --spanX: 1; --spanY : 1 }
        ::slotted( [shape="brick"] )  { --spanX: 2; --spanY : 1 }
        ::slotted( [shape="column"] ) { --spanX: 1; --spanY : 2 }

        & [part="caption"] {
          /* border : solid red 2px; */

          color : var(--muted-color);
          grid-column : span 3;
          grid-row    : span 2;

          /* width : 100%; */

          & header { 
            margin : 0;
            margin-block-end : 1em;
          }
        }
      }

      /* Change Layout based on size of the gallery block */
      @container gallery ( max-width : 549px ) {
        #wrapper,
        [part="content"] { 
          display        : flex;
          flex-direction : column;
        }
      }
      @container gallery ( min-width : 550px ) {
        [part="content"] { 
          --repeat : calc( 550 / 100 ) }
      }
      @container gallery ( min-width : 750px ) {
        [part="content"] { --repeat : calc( 600 / 100 ); }
      }
      @container gallery ( min-width : 950px ) {
        [part="content"] { --repeat : calc( 800 / 100 ); }
      }
      @container gallery ( min-width : 1150px ) {
        [part="content"] { --repeat : calc( 1000 / 100 ); }
      }
      
  `
    ];
    constructor() {
      super();
      this.size = "md";
      this.layout = "grid";
      this.captionPosition = "bottom";
      this.showFigcaptions = false;
    }
    render() {
      return x`
      <div id="wrapper">
        <div part="content">
          <slot></slot>

          <figcaption part="caption"> 
            <header part="title">
              <slot name="title"></slot>
            </header>
            <div part="gallerycaption">
              <slot name="gallerycaption"></slot>
            </div>
            <ol part="figcaptions"
                ?hidden = ${!this.showFigcaptions}>
              <slot name="figcaption"></slot>
            </ol>
          </figcaption>

        </div>
      </div>
    `;
    }
  };
  customElements.define("gallery-section", GallerySection);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/CardBlock/index.js
  var CardBlock = class extends s4 {
    static properties = {
      size: { type: String, reflect: true },
      position: { type: String, reflect: true },
      layout: { type: String, reflect: true },
      relativeFontSize: { type: String, reflect: true },
      mediaLayout: { type: String },
      mediaSrc: { type: String },
      mediaShape: { type: String },
      href: { type: String }
    };
    static styles = i`
    :host {
      --size            : var(--block-md);
      --position        : flex-start;
      --card-gap        : 1em;
      --layout          : column;

      --wrapperMaxWidth : var(--size);

      flex-basis    : calc( var(--size) - var(--deck-gap));
      flex-shrink   : 1;

      display       : block;

      /* margin-inline : auto;  */
      /* justify-self  : stretch;
      align-self    : stretch; */

      
      /* width : 100%; */
      /* width         : var(--size); */
      /* max-width     : var(--size); */
      min-width     : 250px;

      container     : card-width / inline-size;
    }

    :host([href]) {
      cursor : pointer;
    }

    :host([ relativeFontSize = "smaller" ]) {
      flex-basis  : 50%;
      font-size   : smaller;
    }
    :host([ relativeFontSize = "inherit" ]) {
      font-size : inherit;
    }
    :host([ relativeFontSize = "larger" ]) [part="content"] {
      flex-basis  : 150%;
      display     : block;
      font-size   : larger;
      line-height : normal;
    }

    :host([mediaLayout="row"]) {
      --layout : row;
    }
    :host([mediaLayout="row-reverse"]) {
      --layout : row-reverse;
    }
    :host([mediaLayout="column"]) {
      --layout : column;
    }
    :host([mediaLayout="column-reverse"]) {
      --layout : column-reverse;
    }

    :host([position="left"]) {
      --margin-inline-start : 0;
      --margin-inline-end : auto;
      /* margin-inline-start : 0; */
    }
    :host([position="center"]) {
      --margin-inline-start : auto;
      --margin-inline-end   : auto;
    }
    :host([position="right"]) {
      --margin-inline-start : auto;
      --margin-inline-end   : 0;
    }
 

    #wrapper {
      display             : flex;
      flex-direction      : var(--layout);
      align-items         : center;
      gap                 : var(--card-gap);
      max-width           : var(--wrapperMaxWidth);
      margin-inline-start : var(--margin-inline-start);
      margin-inline-end   : var(--margin-inline-end);
 
      /* overflow          : hidden; */
    }

    [part="content"] {
      flex-basis      : 100%;
      display         : flex;
      flex-direction  : column;

      padding         : var(--space-sm);
      width           : 100%;
      min-width       : var(--min-content-px);
    }

    [part="header"] {
      width             : 100%;
      display           : flex;
      flex-direction    : column;
      justify-items     : flex-start;
    }
    [part="title"] {
      width         : 100%;
    }
    
    [part="media"] {

      flex-basis  : 100%;
      position    : relative;
      overflow    : hidden;
      min-width   : 200px;
    }
    [part="media"] img {
      width         : 100%;
      object-fit    : cover;
      aspect-ratio  : inherit;
    }

    /* Media Shaping */
    [part="media"] {
      &.--square {
        aspect-ratio  : 1 / 1;
        & img { height : 100%; }
      }
      &.--circle {
      aspect-ratio  : 1 / 1;
      clip-path     : circle( 50% at center);
        & img { height : 100%; }
      }
      &.--brick {
        aspect-ratio  : 2 / 1;
      }
      &.--column {
        aspect-ratio  : 1 / 2;
      }
    }
 
    @container card-width ( max-width: 400px ) {
      #wrapper{
        --position            : center;
        --layout              : column-reverse;
        --margin-inline-start : auto;
        --margin-inline-end   : auto;
        max-width             : none;
      }
    }
  `;
    constructor() {
      super();
      this.size = void 0;
      this.potion = void 0;
      this.layout = void 0;
      this.relativeFontSize = "inherit";
      this.mediaSrc = void 0;
      this.mediaLayout = void 0;
      this.mediaShape = void 0;
      this.href = void 0;
      this.target = "_self";
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener(
        "click",
        () => window.open(this.href, this.target)
      );
    }
    render() {
      return x`
      <div id="wrapper">
        <div part="content">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="subtitle"><slot name="subtitle"></slot></div>
          </header>
          <slot></slot>
        </div>

        ${this.mediaSrc ? x`
            <div part="media" class="--${this.mediaShape}">
              <img src = ${this.mediaSrc} />
            </div>` : A}
      </div>
    `;
    }
  };
  customElements.define("card-card", CardBlock);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/TagBlock/index.js
  var TagBlock = class extends s4 {
    static properties = {
      size: { type: String, reflect: true },
      position: { type: String, reflect: true },
      href: { type: String, reflect: true },
      target: { type: String }
    };
    static styles = i`
    :host {
      /* --size        : var(--block-md); */
      --position    : flex-start;
      --card-gap    : var(--space-sm);
      --layout      : column;
  
      align-self      : var(--position );
      display         : inline-flex;
      justify-content : center;
      align-items     : center;
      width           : max-content;
      padding         : 0.1em 0.75em;

      border-width  : 0.1em;
      border-radius : 1.5em;
      border-color  : var(--primary-color);
      border-style  : solid;

      font-weight : bolder;
      
    }

    :host([position="left"]) {
      --position  : flex-start;
    }
    :host([position="center"]) {
      --position  : center;
    }
    :host([position="right"]) {
      --position  : flex-end;
    }

    :host([href]) {
      cursor : pointer;
    }
    :host([href]:hover) {
      color             : var( --secondary-color );
      border-color      : var( --secondary-color );
      background-color  : var( --primary-color );
    }
  `;
    constructor() {
      super();
      this.href = void 0;
      this.target = "_self";
      this.size = void 0;
      this.position = void 0;
      this.addEventListener(
        "click",
        () => window.open(this.href, this.target)
      );
    }
    render() {
      return x`<slot></slot>`;
    }
  };
  customElements.define("tag-tag", TagBlock);

  // ns-hugo:/Users/henryskup/Documents/Github/gdl-hugo-tina-site/themes/gdl-hugo-theme/assets/js/Figure/index.js
  var FigureBlock = class extends s4 {
    static properties = {
      src: { type: String },
      placeholder: { type: String },
      loading: { type: String },
      size: { type: String, reflect: true },
      shape: { type: String, reflect: true },
      layout: { type: String, reflect: true },
      loaded: { type: Boolean, reflect: true },
      _hasTitle: { type: Boolean, state: true },
      _hasFigcaption: { type: Boolean, state: true }
    };
    static styles = i`
    :host {
      --size            : var(--block-md);
      --figure-gap      : var(--space-md);
      --figcaption-size : 40ch;

      --_layout         : column;
      --_media-opacity  : 0;

      max-width         : var(--size);

      margin-inline     : auto;
      display           : flex;
      flex-direction    : var(--_layout);
      align-items       : flex-start;
      gap               : var(--figure-gap);

      color             : var(--primary-color);
      /* background-color  : var(--background-color); */
      accent-color      : var(--accent-color);
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }

    /* Layout */
    :host([layout="column"]) {
      --_layout : column;
    }
    :host([layout="row"]) {
      --_layout   : row;
      max-width   : min( 100%, calc( var(--size) + var(--figcaption-size) ));
      align-items : flex-end;
    }
    :host([layout="row-reverse"]) {
      --_layout : row-reverse;
      max-width   : min( 100%, calc( var(--size) + var(--figcaption-size) ));
    }

    [part="figcaption"] {
      max-width   : var(--figcaption-size);
      font-size   : smaller;
      line-height : 1.1em;
    }

    /* Media Sizing */
    :host([size="xs"]) { --size : var(--block-xs); }
    :host([size="sm"]) { --size : var(--block-sm); }
    :host([size="md"]) { --size : var(--block-md); }
    :host([size="lg"]) { --size : var(--block-lg); }
    :host([size="xl"]) { --size : var(--block-xl); }
    :host([size="fw"]) { --size : var(--block-fw); }

    [part="media"] {
      flex-basis  : 100%;
      position    : relative;
      overflow    : hidden;
      min-width   : 200px;
    }
    [part="media"] img {
      width         : 100%;
      object-fit    : cover;
      aspect-ratio  : inherit;
     }
    /* Media Shaping */
    [part="media"] {
      &.--square {
        /* aspect-ratio  : 1 / 1; */
        & picture { 
          aspect-ratio  : 1 / 1; }
      }
      &.--circle {
      /* aspect-ratio  : 1 / 1; */
      clip-path     : circle( 50% at center);
        & picture { aspect-ratio  : 1 / 1;
        height : 100%; }
      }
      &.--brick picture {
        aspect-ratio  : 2 / 1;
      }
      &.--column picture {
        aspect-ratio  : 1 / 2;
      }
    }
 

    


    [part="media"] {
    }

    [part="figcaption"] {
      max-width   : var(--figcaption-size);
      font-size   : smaller;
      line-height : 1.1em;
    }

    picture {
      width   : 100%;
      height  : 100%;
      display : flex;
      /* Placeholder image related */
      background-position : 50% 50%;
      background-repeat   : no-repeat;
      background-size     : cover;
    }

    picture img {
      object-fit  : cover; 
      height      : auto;
      width       : 100%;
      /* Loading related */
      opacity     : var(--_media-opacity);
      transition  : opacity 1s ease-in;
    }
  `;
    constructor() {
      super();
      this.size = void 0;
      this.src = void 0;
      this.layout = "column";
      this.shape = "square";
      this.loading = "lazy";
      this.placeholder = void 0;
      this.loaded = false;
      this._hasFigcaption = false;
      this._hasTitle = false;
    }
    render() {
      return x`
      <div part="media" class="--${this.shape}">
        <picture
          style="background-image : url('${this.placeholder}');">


          <img  src = ${this.src} 
                loading = ${this.loading}
                @load = ${() => {
        this.loaded = true;
      }}>
        </picture>
      </div>
      
      <!-- Show/Hide things so it does not affect flow.-->
      <figcaption 
        @slotchange = ${this.registerContent}
        part="figcaption"
        ?hidden = ${!this._hasTitle && !this._hasFigcaption}>
        
        <header part="title"
                ?hidden = ${!this._hasTitle}>
          <slot name="title" 
               ></slot>
        </header>
        
        <slot >
        </slot> 
      </figcaption>
    
    `;
    }
    registerContent(e4) {
      console.log(e4);
    }
  };
  customElements.define("figure-figure", FigureBlock);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
