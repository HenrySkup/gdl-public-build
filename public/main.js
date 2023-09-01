(()=>{var N=window,T=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),dt=new WeakMap,z=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(T&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&dt.set(e,t))}return t}toString(){return this.cssText}},ht=r=>new z(typeof r=="string"?r:r+"",void 0,B),u=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1],r[0]);return new z(e,r,B)},D=(r,t)=>{T?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),o=N.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)})},M=T?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ht(e)})(r):r;var I,j=window,pt=j.trustedTypes,Pt=pt?pt.emptyScript:"",ut=j.reactiveElementPolyfillSupport,F={toAttribute(r,t){switch(t){case Boolean:r=r?Pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},mt=(r,t)=>t!==r&&(t==t||r==r),V={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:mt},W="finalized",$=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty(W))return!1;this[W]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(M(o))}else t!==void 0&&e.push(M(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return D(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=V){var o;let n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){let s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:F).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){let s=o.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:F;this._$El=n,this[n]=c.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$[W]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},ut?.({ReactiveElement:$}),((I=j.reactiveElementVersions)!==null&&I!==void 0?I:j.reactiveElementVersions=[]).push("1.6.3");var X,O=window,A=O.trustedTypes,gt=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,Y="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+_,Rt=`<${xt}>`,b=document,P=()=>b.createComment(""),R=r=>r===null||typeof r!="object"&&typeof r!="function",bt=Array.isArray,Ut=r=>bt(r)||typeof r?.[Symbol.iterator]=="function",q=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,w=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,$t=/"/g,St=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=At(1),Ot=At(2),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),_t=new WeakMap,x=b.createTreeWalker(b,129,null,!1);function Et(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Lt=(r,t)=>{let e=r.length-1,i=[],o,n=t===2?"<svg>":"",s=C;for(let c=0;c<e;c++){let a=r[c],l,h,p=-1,v=0;for(;v<a.length&&(s.lastIndex=v,h=s.exec(a),h!==null);)v=s.lastIndex,s===C?h[1]==="!--"?s=vt:h[1]!==void 0?s=ft:h[2]!==void 0?(St.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=w):h[3]!==void 0&&(s=w):s===w?h[0]===">"?(s=o??C,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,l=h[1],s=h[3]===void 0?w:h[3]==='"'?$t:yt):s===$t||s===yt?s=w:s===vt||s===ft?s=C:(s=w,o=void 0);let y=s===w&&r[c+1].startsWith("/>")?" ":"";n+=s===C?a+Rt:p>=0?(i.push(l),a.slice(0,p)+Y+a.slice(p)+_+y):a+_+(p===-2?(i.push(void 0),c):y)}return[Et(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),i]},U=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0,c=t.length-1,a=this.parts,[l,h]=Lt(t,e);if(this.el=r.createElement(l,i),x.currentNode=this.el.content,e===2){let p=this.el.content,v=p.firstChild;v.remove(),p.append(...v.childNodes)}for(;(o=x.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){let p=[];for(let v of o.getAttributeNames())if(v.endsWith(Y)||v.startsWith(_)){let y=h[s++];if(p.push(v),y!==void 0){let Ct=o.getAttribute(y.toLowerCase()+Y).split(_),H=/([.?@])?(.*)/.exec(y);a.push({type:1,index:n,name:H[2],strings:Ct,ctor:H[1]==="."?G:H[1]==="?"?J:H[1]==="@"?Z:k})}else a.push({type:6,index:n})}for(let v of p)o.removeAttribute(v)}if(St.test(o.tagName)){let p=o.textContent.split(_),v=p.length-1;if(v>0){o.textContent=A?A.emptyScript:"";for(let y=0;y<v;y++)o.append(p[y],P()),x.nextNode(),a.push({type:2,index:++n});o.append(p[v],P())}}}else if(o.nodeType===8)if(o.data===xt)a.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf(_,p+1))!==-1;)a.push({type:7,index:n}),p+=_.length-1}n++}}static createElement(t,e){let i=b.createElement("template");return i.innerHTML=t,i}};function E(r,t,e=r,i){var o,n,s,c;if(t===S)return t;let a=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl,l=R(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((s=(c=e)._$Co)!==null&&s!==void 0?s:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=E(r,a._$AS(r,t.values),a,i)),t}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);x.currentNode=n;let s=x.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new L(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new Q(s,this,t)),this._$AV.push(h),l=o[++a]}c!==l?.index&&(s=x.nextNode(),c++)}return x.currentNode=b,n}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},L=class r{constructor(t,e,i,o){var n;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=(n=o?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),R(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ut(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=U.createElement(Et(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{let s=new K(n,this),c=s.u(this.options);s.v(i),this.$(c),this._$AH=s}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new U(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let n of t)o===e.length?e.push(i=new r(this.k(P()),this.k(P()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},k=class{constructor(t,e,i,o,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,s=!1;if(n===void 0)t=E(this,t,e,0),s=!R(t)||t!==this._$AH&&t!==S,s&&(this._$AH=t);else{let c=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=E(this,c[i+a],e,a),l===S&&(l=this._$AH[a]),s||(s=!R(l)||l!==this._$AH[a]),l===d?t=d:t!==d&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},G=class extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},Ht=A?A.emptyScript:"",J=class extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==d?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}},Z=class extends k{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:d)===S)return;let o=this._$AH,n=t===d&&o!==d||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==d&&(o===d||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var wt=O.litHtmlPolyfillSupport;wt?.(U,L),((X=O.litHtmlVersions)!==null&&X!==void 0?X:O.litHtmlVersions=[]).push("2.8.0");var kt=(r,t,e)=>{var i,o;let n=(i=e?.renderBefore)!==null&&i!==void 0?i:t,s=n._$litPart$;if(s===void 0){let c=(o=e?.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new L(t.insertBefore(P(),c),c,void 0,e??{})}return s._$AI(r),s};var tt,et;var g=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};g.finalized=!0,g._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:g});var zt=globalThis.litElementPolyfillSupport;zt?.({LitElement:g});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.3");var it=class extends g{static properties={open:{type:Boolean,reflect:!0}};static styles=u`
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
  `;constructor(){super(),this.open=!1}render(){return m`
      <button 
        part    = "toggle"
        style   = "transform : ${this.open?"rotate(45deg)":"rotate(0)"}"
        @click  = ${this.toggle}>+</button>

      <menu 
        part  = "menu"
        style = "transform : ${this.open?"translateX(0)":"translateX(110vw)"}" >

        <nav part = "nav">
          <slot></slot>
        </nav>

        <footer part = "footer">  
          <slot name="footer"></slot>    
        </footer>
      </menu> 
    `}toggle(){this.open=!this.open}};customElements.define("side-bar",it);var f=class extends g{static properties={layout:{type:String},size:{type:String},_contentRegistry:{type:Object,state:!0}};static styles=u`
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
  `;constructor(){super(),this.layout=void 0,this.size=void 0,this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:!1}}render(){return m`
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

    `}registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("page-section",f);var ot=class extends f{static styles=[f.styles,u`
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
    `];constructor(){super()}render(){return m`
        <nav part = "nav">
          <slot name = "nav"></slot>
        </nav>

        <div part = "imprint">
          <slot name="imprint"></slot>
        </div>
    `}};customElements.define("site-footer",ot);var rt=class extends g{static properties={title:{type:String},backgroundMedia:{type:String},backgroundPlaceholder:{type:String},loaded:{type:Boolean,reflect:!0}};static styles=u`
    :host {
      --background-opacity : 0.5;
      --background-color  : var(--background-color);

      --_media-opacity  : 0;

      position        : relative;
      display         : flex;
      height          : 90vh;
      min-height      : 90vh;
      flex-direction  : column;
      justify-content : center;
      align-items     : center;
      gap             : 1em;
  
      background-color : var(--background-color);

     

      container : callout/ size;
    }

    :host([loaded]) {
      --_media-opacity : 1;
    }

    [part="content"] {
      position      : absolute;
      z-index       : 1000;
      display       : flex;
      align-items   : center;
      /* width : max-content; */
      width         : 100%;
      height        : 100%;
      max-width     : 90vw;
      margin-inline : auto;


      /* Use Viewport units for a more responsive text size */
      font-size     : min(8vw, 10vh); 
      font-weight   : 900;
      line-height   : 1em;
      color         : var(--primary-color);
      font-family   : var(--font-display);  
    }

    [part="background"] {
      position    : absolute;
    
      width       : 100%;
      height      : 100%;
      overflow    : hidden;
      display     : flex;

      /* Placeholder image related */
      background-position : 50% 50%;
      background-repeat   : no-repeat;
      background-size     : cover;
      opacity             : var(--background-opacity);
    }

    [part="background"] img {
      object-fit  : cover; 
      height      : auto;
      width       : 100%;
      /* Loading related */
      opacity     : var(--_media-opacity);
      transition  : opacity 0.5s ease-in;
    }

    /* [part="background"] video {
      object-fit  : cover;
      width       : 100%;
      height      : 100%;
    } */

    @container callout ( orientation: landscape  ) {
      [part="content"] {
        font-size : min(8vw, 10vh); 
      }
    }
    @container callout ( orientation: portrait ) {
      [part="content"] {
        font-size : max(8vw, 4.5vh); 
      }
    }
  `;constructor(){super(),this.title=void 0,this.backgroundMedia=void 0,this.backgroundPlaceholder=void 0,this.loaded=!1}connectedCallback(){super.connectedCallback()}render(){let t=this.backgroundPlaceholder;return m`
      

      <picture 
        part="background"
        style="background-image : url(${t})">
        <img  src     = ${this.backgroundMedia} 
              loading = 'lazy'
              @load   = ${()=>{this.loaded=!0}}>
      </picture>

      <div part="content"><slot></slot></div>
    `}};customElements.define("callout-section",rt);var st=class extends f{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},_contentRegistry:{type:Object}};static styles=[f.styles,u`
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

      
  `];constructor(){super(),this.size="md",this.layout="column",this._contentRegistry=new Set}render(){return m`
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
              ${this._contentRegistry.size==1&&this._contentRegistry.has("TAG-TAG")?"--tag-list":d}
            "
      >
        <slot @slotchange=${this.registerContent}></slot>
      </div>

    `}registerContent(t){let e=new Set(this._contentRegistry);t.target.assignedNodes().filter(i=>i.tagName!=null).forEach(i=>e.add(i.tagName)),console.log(e),this._contentRegistry=e}};customElements.define("deck-section",st);var nt=class extends f{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},captionPosition:{type:String,reflect:!0}};static styles=[f.styles,u`
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
      
  `];constructor(){super(),this.size="md",this.layout="grid",this.captionPosition="bottom",this.showFigcaptions=!1}render(){return m`
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
    `}};customElements.define("gallery-section",nt);var at=class extends g{static properties={size:{type:String,reflect:!0},position:{type:String,reflect:!0},layout:{type:String,reflect:!0},relativeFontSize:{type:String,reflect:!0},mediaLayout:{type:String},mediaSrc:{type:String},mediaPlaceholder:{type:String},mediaShape:{type:String},loaded:{type:Boolean,reflect:!0},href:{type:String},target:{type:String,reflect:!0}};static styles=u`
    :host {
      --size            : var(--block-md);
      --position        : flex-start;
      --card-gap        : 1em;
      --layout          : column;

      --wrapperMaxWidth : var(--size);
      --_media-opacity  : 0;

      flex-basis    : calc( var(--size) - var(--deck-gap));
      flex-shrink   : 1;
      display       : block;
      min-width     : 250px;

      background-color : var(--background-color);

      container     : card-width / inline-size;
    }

    :host([href]) {
      cursor : pointer;
    }
    :host([loaded]) {
      --_media-opacity : 1;
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
      width : 100%;
      min-width   : 200px;
    }
    /* [part="media"] img {
      width         : 100%;
      object-fit    : cover;
      aspect-ratio  : inherit;
    } */

    [part="media"] picture {
      width   : 100%;
      height  : 100%;
      display : flex;
      /* Placeholder image related */
      background-position : 50% 50%;
      background-repeat   : no-repeat;
      background-size     : cover;
    }

    [part="media"] picture img {
      object-fit  : cover; 
      height      : auto;
      width       : 100%;
      /* Loading related */
      opacity     : var(--_media-opacity);
      transition  : opacity 0.5s ease-in;
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
  `;constructor(){super(),this.size=void 0,this.potion=void 0,this.layout=void 0,this.relativeFontSize="inherit",this.mediaSrc=void 0,this.mediaPlaceholder=void 0,this.mediaLayout=void 0,this.mediaShape=void 0,this.loaded=!1,this.href=void 0,this.target="_self"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return m`
      <div id="wrapper">
        <div part="content">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="subtitle"><slot name="subtitle"></slot></div>
          </header>
          <slot></slot>
        </div>

        ${this.mediaSrc?m`
            <div 
              part="media" 
              class="--${this.mediaShape}">

              <picture
                style="background-image : url('${this.mediaPlaceholder}')">
                <img 
                  src     = ${this.mediaSrc}
                  loading = 'lazy'
                  @load   = ${()=>{this.loaded=!0}} />
              </picture>
              
            </div>`:d}
      </div>
    `}};customElements.define("card-card",at);var lt=class extends g{static properties={size:{type:String,reflect:!0},position:{type:String,reflect:!0},href:{type:String,reflect:!0},target:{type:String}};static styles=u`
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
      text-align  : center;
      
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
  `;constructor(){super(),this.href=void 0,this.target="_self",this.size=void 0,this.position=void 0,this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return m`<slot></slot>`}};customElements.define("tag-tag",lt);var ct=class extends g{static properties={src:{type:String},placeholder:{type:String},loading:{type:String},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},layout:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},_hasTitle:{type:Boolean,state:!0},_hasFigcaption:{type:Boolean,state:!0}};static styles=u`
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
  `;constructor(){super(),this.size="fw",this.src=void 0,this.layout="column",this.shape=void 0,this.loading="lazy",this.placeholder=void 0,this.loaded=!1,this._hasFigcaption=!1,this._hasTitle=!1}render(){return m`
      <div part="media" class="--${this.shape}">
        <picture
          style="background-image : url('${this.placeholder}');">


          <img  src = ${this.src} 
                loading = ${this.loading}
                @load = ${()=>{this.loaded=!0}}>
        </picture>
      </div>
      
      <!-- Show/Hide things so it does not affect flow.-->
      <figcaption 
        part        = "figcaption"
        ?hidden     = ${!this._hasTitle&&!this._hasFigcaption}
        @slotchange = ${this.registerContent} >
        <header 
          part="title"
          ?hidden = ${!this._hasTitle}>
          <slot name="title"></slot>
        </header>
        <slot></slot> 
      </figcaption>
    
    `}registerContent(t){console.log(t)}};customElements.define("figure-figure",ct);})();
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
