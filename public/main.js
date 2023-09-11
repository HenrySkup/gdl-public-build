(()=>{var H=window,O=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),ct=new WeakMap,k=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(O&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}},ht=r=>new k(typeof r=="string"?r:r+"",void 0,B),c=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new k(e,r,B)},I=(r,t)=>{O?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),n=H.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)})},j=O?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ht(e)})(r):r;var D,L=window,pt=L.trustedTypes,Ut=pt?pt.emptyScript:"",ut=L.reactiveElementPolyfillSupport,V={toAttribute(r,t){switch(t){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},mt=(r,t)=>t!==r&&(t==t||r==r),W={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:mt},X="finalized",_=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){let s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty(X))return!1;this[X]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(j(n))}else t!==void 0&&e.push(j(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return I(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=W){var n;let s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){let o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:V).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;let n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){let o=n.getPropertyOptions(s),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:V;this._$El=s,this[s]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_[X]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},ut?.({ReactiveElement:_}),((D=L.reactiveElementVersions)!==null&&D!==void 0?D:L.reactiveElementVersions=[]).push("1.6.3");var q,T=window,A=T.trustedTypes,gt=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,Y="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+w,Mt=`<${xt}>`,b=document,R=()=>b.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",bt=Array.isArray,Nt=r=>bt(r)||typeof r?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,vt=/>/g,$=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,_t=/"/g,St=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=At(1),It=At(2),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),wt=new WeakMap,x=b.createTreeWalker(b,129,null,!1);function zt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Ht=(r,t)=>{let e=r.length-1,i=[],n,s=t===2?"<svg>":"",o=C;for(let d=0;d<e;d++){let a=r[d],l,p,u=-1,f=0;for(;f<a.length&&(o.lastIndex=f,p=o.exec(a),p!==null);)f=o.lastIndex,o===C?p[1]==="!--"?o=ft:p[1]!==void 0?o=vt:p[2]!==void 0?(St.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=$):p[3]!==void 0&&(o=$):o===$?p[0]===">"?(o=n??C,u=-1):p[1]===void 0?u=-2:(u=o.lastIndex-p[2].length,l=p[1],o=p[3]===void 0?$:p[3]==='"'?_t:yt):o===_t||o===yt?o=$:o===ft||o===vt?o=C:(o=$,n=void 0);let y=o===$&&r[d+1].startsWith("/>")?" ":"";s+=o===C?a+Mt:u>=0?(i.push(l),a.slice(0,u)+Y+a.slice(u)+w+y):a+w+(u===-2?(i.push(void 0),d):y)}return[zt(r,s+(r[e]||"<?>")+(t===2?"</svg>":"")),i]},U=class r{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0,d=t.length-1,a=this.parts,[l,p]=Ht(t,e);if(this.el=r.createElement(l,i),x.currentNode=this.el.content,e===2){let u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(n=x.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){let u=[];for(let f of n.getAttributeNames())if(f.endsWith(Y)||f.startsWith(w)){let y=p[o++];if(u.push(f),y!==void 0){let Pt=n.getAttribute(y.toLowerCase()+Y).split(w),N=/([.?@])?(.*)/.exec(y);a.push({type:1,index:s,name:N[2],strings:Pt,ctor:N[1]==="."?K:N[1]==="?"?J:N[1]==="@"?Z:E})}else a.push({type:6,index:s})}for(let f of u)n.removeAttribute(f)}if(St.test(n.tagName)){let u=n.textContent.split(w),f=u.length-1;if(f>0){n.textContent=A?A.emptyScript:"";for(let y=0;y<f;y++)n.append(u[y],R()),x.nextNode(),a.push({type:2,index:++s});n.append(u[f],R())}}}else if(n.nodeType===8)if(n.data===xt)a.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(w,u+1))!==-1;)a.push({type:7,index:s}),u+=w.length-1}s++}}static createElement(t,e){let i=b.createElement("template");return i.innerHTML=t,i}};function z(r,t,e=r,i){var n,s,o,d;if(t===S)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl,l=P(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=z(r,a._$AS(r,t.values),a,i)),t}var G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);x.currentNode=s;let o=x.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let p;l.type===2?p=new M(o,o.nextSibling,this,t):l.type===1?p=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(p=new Q(o,this,t)),this._$AV.push(p),l=n[++a]}d!==l?.index&&(o=x.nextNode(),d++)}return x.currentNode=b,s}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},M=class r{constructor(t,e,i,n){var s;this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Nt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(b.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=U.createElement(zt(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{let o=new G(s,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new U(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let s of t)n===e.length?e.push(i=new r(this.k(R()),this.k(R()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},E=class{constructor(t,e,i,n,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){let s=this.strings,o=!1;if(s===void 0)t=z(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{let d=t,a,l;for(t=s[0],a=0;a<s.length-1;a++)l=z(this,d[i+a],e,a),l===S&&(l=this._$AH[a]),o||(o=!P(l)||l!==this._$AH[a]),l===h?t=h:t!==h&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},K=class extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},Ot=A?A.emptyScript:"",J=class extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==h?this.element.setAttribute(this.name,Ot):this.element.removeAttribute(this.name)}},Z=class extends E{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=z(this,t,e,0))!==null&&i!==void 0?i:h)===S)return;let n=this._$AH,s=t===h&&n!==h||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==h&&(n===h||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}};var $t=T.litHtmlPolyfillSupport;$t?.(U,M),((q=T.litHtmlVersions)!==null&&q!==void 0?q:T.litHtmlVersions=[]).push("2.8.0");var Et=(r,t,e)=>{var i,n;let s=(i=e?.renderBefore)!==null&&i!==void 0?i:t,o=s._$litPart$;if(o===void 0){let d=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=o=new M(t.insertBefore(R(),d),d,void 0,e??{})}return o._$AI(r),o};var tt,et;var g=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};g.finalized=!0,g._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:g});var kt=globalThis.litElementPolyfillSupport;kt?.({LitElement:g});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.3");var it=class extends g{static properties={open:{type:Boolean,reflect:!0}};static styles=c`
    :host {
      /* --primary-color     : var(--accent-color);
      --background-color  : var(--grey);
      --muted-color       : var(--light-grey); */

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

      transition          : transform 0.4s ease-in-out;
    }

    [part="menu"] {
      position            : fixed;
      right               : 0;
      top                 : 0;
      z-index             : 1;
      box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
      height              : 100vh;
      height              : -webkit-fill-available;

      display           : flex;
      flex-direction      : column;
      justify-content     : space-between;
      max-height          : 100vh;
      overflow-y          : scroll;
      width               : 100vw;
      max-width           : var(--content-sm);
      margin-block        : 0;
      padding-block-start : calc( 1.25 * var(--toggle-size));
      padding-block-end   : 1em;
      padding-inline      : var(--space-sm);

      transform           : translateX(110vw);
      transition          : transform 0.5s ease-in-out;
      background-color    : var(--background-color);
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
    `}toggle(){this.open=!this.open}};customElements.define("side-bar",it);var v=class extends g{static properties={layout:{type:String},size:{type:String},_contentRegistry:{type:Object,state:!0}};static styles=c`
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

      container         : content / inline-size;
    }

    [hidden] {
      display : none;
    }

    [part="header"] {
      width           : 100%;
      max-width       : var(--header-width);
      margin-inline   : auto;
      margin-block    : 2em;
      display         : flex;
      flex-direction  : column;
      justify-items   : flex-start;
      gap             : var(--space-sm);
    }
    [part="title"] {
      width         : 100%;
      /* margin-block  : 1em 0.5em; */
    }
    [part="introduction"] {
      width             : 100%;
      max-width         : var(--header-width);
      margin-inline     : auto;
      margin-block-end  : 1em;
    }

    [part="introduction"] ::slotted( * ) {
      max-width : var(--introduction-width);
    }

    [part="content"] {
      display         : flex;
      flex-direction  : column;
    }

    

    [part="content"] ::slotted( :not( tag-tag, card-card, figure-figure ) ) {
      width           : 100%;
      max-width       : var(--content-width);
      margin-inline   : auto;
    }

    [part="content"] ::slotted( tag-tag ) {
      display : block;
      margin-inline   : auto;
    }

    [part="content"] ::slotted( card-card ) {
      /* --wrapperMaxWidth : var(--content-width); */
    }
  `;constructor(){super(),this.layout=void 0,this.size=void 0,this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:!1}}render(){return console.log(this._contentRegistry),m`
      <header 
        part="header"
        @slotchange = ${this.registerContent}
        ?hidden     = ${!this._contentRegistry.title}>

        <div part="title"><slot name="title"></slot></div>

      </header>

      <div 
        part="introduction"
        @slotchange = ${this.registerContent}
        ?hidden     = ${!this._contentRegistry.introduction}>
        <slot name="introduction"></slot>
      </div>

      <div part="content"><slot></slot></div>

    `}registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("page-section",v);var nt=class extends v{static styles=[v.styles,c`
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
    `}};customElements.define("site-footer",nt);var rt=class extends g{static properties={title:{type:String},backgroundMedia:{type:String},backgroundPlaceholder:{type:String},loaded:{type:Boolean,reflect:!0}};static styles=c`
    :host {

      --min-font-size : 1em;
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
      font-size : min(var(--min-font-size), 10vh); 
      line-height   : 1em;
      color         : var(--primary-color);
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
        font-size : min(6vw, 10vh); 
      }
    }
    @container callout ( orientation: portrait ) {
      [part="content"] {
        font-size : max(8vw, var(--min-font-size)); 
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
    `}};customElements.define("callout-section",rt);var ot=class extends v{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},_contentRegistry:{type:Object}};static styles=[v.styles,c`
      :host {
        --layout    : row;
        --wrap      : nowrap;
        --deck-gap  : var(--space-sm);

        container : deck / inline-size;
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

      :host([layout="grid"]) [part="content"] {
        display         : grid;   
        grid-template-columns : repeat(4, 1fr);
        /* grid-template-rows : 1fr; */
        grid-auto-rows : 1fr;

        --minCellSize   : 250; // px
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

      
      }

      :host([layout="grid"]) [part="content"] ::slotted( * ) {
        --wrapperMaxWidth : 100%;
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

        /* Sizing slotted content */
        & ::slotted( [size="xs"] ) { --spanSize : 1 }
        & ::slotted( [size="sm"] ) { --spanSize : 2 }
        & ::slotted( [size="md"] ) { --spanSize : 3 }
        & ::slotted( [size="lg"] ) { --spanSize : 4 }
        & ::slotted( [size="xl"] ) { --spanSize : 5 }
      }

      /* Sizing slotted content */
      :host([layout="grid"]) [part="content"] ::slotted( [size="xs"] ) { --spanSize : 1 }
      :host([layout="grid"]) [part="content"] ::slotted( [size="sm"] ) { --spanSize : 2 }
      :host([layout="grid"]) [part="content"] ::slotted( [size="md"] ) { --spanSize : 3 }
      :host([layout="grid"]) [part="content"] ::slotted( [size="lg"] ) { --spanSize : 4 }
      :host([layout="grid"]) [part="content"] ::slotted( [size="xl"] ) { --spanSize : 5 }

      

      [part="content"] {
        width           : 100%;
        max-width       : var(--content-width);
        margin-inline   : auto;
        display         : flex;
        gap             : var(--deck-gap);
        flex-direction  : var(--layout);
        flex-wrap       : var(--wrap);
        /* justify-content : space-evenly; */
        
        /* align-items     : center; */
      }
      [part="content"].--tag-list {
        flex-direction : row;
        gap :var(--space-md);
        justify-content : center;
        align-items : center;

        & ::slotted( tag-tag ){
          margin-inline : 0;
        }
      }

      

      @container deck ( max-width: 400px ) {
        [part="content"] {
          --layout    : column;
          --wrap      : nowrap;
          gap : var(--space-xl);
        }

        [part="content"].--tag-list {
          flex-direction : column;
          gap :var(--space-sm);
          justify-content : center;
          align-items : center;

          & ::slotted( tag-tag ){
            margin-inline : auto;
          }
        }
      }

      @container deck ( min-width : 550px ) {
        [part="content"] { 
          --repeat : calc( 550 / 250 ) }
      }
      @container deck ( min-width : 750px ) {
        [part="content"] { --repeat : calc( 600 / 250 ); }
      }
      @container deck ( min-width : 950px ) {
        [part="content"] { --repeat : calc( 800 / 250 ); }
      }
      @container deck ( min-width : 1150px ) {
        [part="content"] { --repeat : calc( 1000 / 250 ); }
      }

      
  `];constructor(){super(),this.size="md",this.layout="column",this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:new Set}}render(){return m`
      <header 
        part        = "header"
        ?hidden     = ${!(this._contentRegistry.title||this._contentRegistry.subtitle)}
        @slotchange = ${this._registerContent}>

        <div 
          part    = "title"
          ?hidden = ${!this._contentRegistry.title} >
          <slot name = "title"></slot></div>

        <div 
          part    = "subtitle"
          ?hidden = ${!this._contentRegistry.subtitle} >
          <slot name  = "subtitle"></slot></div>

      </header>

      <div 
        part        = "introduction"
        @slotchange = ${this._registerContent}
        ?hidden     = ${!this._contentRegistry.introduction} >
        <slot name  = "introduction"></slot></div>

      <div  
        part="content"
        class= "
          ${this._contentRegistry.content.size==1&&this._contentRegistry.content.has("TAG-TAG")?"--tag-list":h}
        ">
        <slot @slotchange=${this._registerCards}></slot>
      </div>

    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0),this._contentRegistry={...this._contentRegistry}}_registerCards(t){let e=new Set(this._contentRegistry.content);t.target.assignedNodes().filter(i=>i.tagName!=null).forEach(i=>e.add(i.tagName)),this._contentRegistry.content=e,this._contentRegistry={...this._contentRegistry}}};customElements.define("deck-section",ot);var ue=c`
  :host([hidden]) {
    display : none;
  }
`,Ct=c`
  :host {
    container : grid-width / inline-size;
  }

  [part="content"] {
    --minCellSize   : 100; // px
    --grid-columns  : calc( 200 / var( --minCellSize ) );
    --repeat        : 5;

    width                 : 100%;
    max-width             : var(--content-width);
    margin-inline         : auto;

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
    
    /* "Reach in" to size and shape content. */
    & ::slotted( * ) {
      /* Over-ride --size which is used in flex contexts */
      --size          : none;
      /* Set base/default values used in math */
      --spanSize      : 1;
      --spanX         : 1;
      --spanY         : 1;

      /* Item will span based on size and shape, but will max out at the size of the gird (--repeat) */
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
    & ::slotted( [shape="square"] ) { --spanX: 1; --spanY : 1 }
    & ::slotted( [shape="brick"] )  { --spanX: 2; --spanY : 1 }
    & ::slotted( [shape="column"] ) { --spanX: 1; --spanY : 2 }
  }

  @container grid-width ( max-width : 549px ) {
    [part="content"] { 
      display        : flex;
      flex-direction : column;  
    }
  }

  @container grid-width ( min-width : 550px ) {
    [part="content"] { 
      --repeat : calc( 550 / 100 ) }
  }
  @container grid-width ( min-width : 750px ) {
    [part="content"] { --repeat : calc( 600 / 100 ); }
  }
  @container grid-width ( min-width : 950px ) {
    [part="content"] { --repeat : calc( 800 / 100 ); }
  }
  @container grid-width ( min-width : 1150px ) {
    [part="content"] { --repeat : calc( 1000 / 100 ); }
  }



`,Rt=c`

  :host {
    --_areas    : "content media";
    --_columns  : "1fr 1fr";
    --_rows     : "auto 0";
    container   : grid-width / inline-size;
  }

  /* Media Sizing */
  :host([size="xs"]) { --size : var(--content-xs); }
  :host([size="sm"]) { --size : var(--content-sm); }
  :host([size="md"]) { --size : var(--content-md); }
  :host([size="lg"]) { --size : var(--content-lg); }
  :host([size="xl"]) { --size : var(--content-xl); }
  :host([size="fw"]) { --size : var(--content-fw); }

  :host([layout="row"]) {
    --_areas    : "content media";
    --_columns  : "1fr auto";
    --_rows     : "auto 0";
  }
  :host([layout="row-reverse"]) {
    --_areas    : "media content";
    --_columns  : "auto 1fr";
    --_rows     : "auto 0";
  }
  :host([layout="column"]) {
    --_areas    : "media" "content" ;
    --_columns  : "auto 0";
    --_rows     : "auto 1fr";
  }
  :host([layout="column-reverse"]) {
    --_areas    : "content" "media";
    --_columns  : "auto 0";
    --_rows     : "1fr auto";
  }

  #wrapper {
    display               : grid;
    grid-template-areas   : var(--_areas);
    grid-template-columns : var(--_columns);
    grid-template-rows    : var(--_rows);
    gap                   : 1em;
  }

  [part="media"] {
    overflow    : hidden;
    min-width   : 200px;
  }
  [part="content"] {
    
  }

  @container grid-width ( max-width: 650px ) {
    #wrapper {
      display         : flex;
      flex-direction  : column;
    }
  }

`;var st=class extends v{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},captionPosition:{type:String,reflect:!0}};static styles=[v.styles,c`
      :host {
        --layout        : grid;
        --gallery-gap   : var(--space-sm);

        display         : flex;
        gap             : var(--space-lg);
        flex-direction  : row;
        color           : var(--secondary-color);
        font-size       : smaller;
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
        /* Grid styles are elsewhere... */

        & [part="caption"] {
          grid-column : span 3;
          grid-row    : span 2;

          & header { 
            margin : 0;
            margin-block-end : 1em;
          }
        }
      }

      /* Change Layout based on size of the gallery block */
      @container grid-width ( max-width : 549px ) {
        #wrapper { 
          display        : flex;
          flex-direction : column;  
        }
        [part="caption"] {
          flex-basis : 0;
        }
      }   
    `,Ct];constructor(){super(),this.size="md",this.layout="grid",this.captionPosition="inside",this.showFigcaptions=!1}render(){return m`
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
    `}};customElements.define("gallery-section",st);var at=class extends g{static properties={size:{type:String,reflect:!0},href:{type:String},target:{type:String,reflect:!0},layout:{type:String,reflect:!0},src:{type:String},placeholder:{type:String},mediaShape:{type:String},loaded:{type:Boolean,reflect:!0}};static styles=c`
    :host {
      --size            : var(--block-md);
      --position        : flex-start;
      --card-gap        : 0;

      --wrapperMaxWidth : var(--size);
      --_media-opacity  : 0;
      --_layout         : "content media";
   

      flex-basis    : calc( var(--size) - var(--deck-gap));
      flex-shrink   : 1;

      width               : var(--wrapperMaxWidth);
      min-width           : 250px;
      max-width           : var(--wrapperMaxWidth);
      /* margin-inline-start : var(--margin-inline-start);
      margin-inline-end   : var(--margin-inline-end); */

      

      container           : card-width / inline-size;
    }

    :host([href]) {
      cursor : pointer;
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }

    /* :host([ relativeFontSize = "smaller" ]) {
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
    } */

    :host([layout="row"]) {
      --_layout : "content media";
    }
    :host([layout="row-reverse"]) {
      --_layout : "media content";
    }
    :host([layout="column"]) {
      --_layout : "content" "media";
    }
    :host([layout="column-reverse"]) {
      --_layout: "media" "content";
    }

    /* :host([position="left"]) {
      --margin-inline-start : 0;
      --margin-inline-end : auto;

    }
    :host([position="center"]) {
      --margin-inline-start : auto;
      --margin-inline-end   : auto;
    }
    :host([position="right"]) {
      --margin-inline-start : auto;
      --margin-inline-end   : 0;
    } */

    #grid-wrapper {
      display             : grid;
      grid-template-areas : var( --_layout);
      align-items         : center;
      gap                 : var(--card-gap);
      background-color    : var(--background-color);
    }

    [part="content"] {
      grid-area       : content;

      box-sizing      : border-box;
      padding         : var(--space-sm);
      width           : 100%;
      display         : flex;
      flex-direction  : column;
      
    }

    [part="header"] {
      display         : flex;
      flex-direction  : column;
      justify-items   : flex-start;
    }
    [part="title"] {
    }
    
    [part="media"] {
      grid-area : media;
   
      position    : relative;
      overflow    : hidden;
      width       : 100%;
      height      : 100%;
    }

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

    [part="media"] video {
      object-fit  : cover; 
      height: 100%;
      width: 100%;
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
 
    @container card-width ( max-width: 400px ) {
      #grid-wrapper {
        display         : flex;
        flex-direction  : column-reverse;
      }
      /* #wrapper{
        --position            : center;
        --layout              : column-reverse;
        --margin-inline-start : auto;
        --margin-inline-end   : auto;
        max-width             : none;
      } */
    }
  `;constructor(){super(),this.size=void 0,this.potion=void 0,this.layout="column",this.relativeFontSize="inherit",this.mediaSrc=void 0,this.mediaPlaceholder=void 0,this.src=void 0,this.placeholder=void 0,this.mediaLayout=void 0,this.mediaShape=void 0,this.loaded=!1,this.href=void 0,this.target="_self"}connectedCallback(){super.connectedCallback(),this.href&&this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return m`
      <div id="grid-wrapper">

        <div part="content">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="subtitle"><slot name="subtitle"></slot></div>
          </header>
          <slot></slot>
        </div>

        ${this.src?m`
            <div  part="media" 
                  class="--${this.mediaShape}">
              ${this.src.endsWith("webp")?m`
                  <picture
                    style="background-image : url('${this.placeholder}')">
                    <img 
                      src     = ${this.src}
                      loading = 'lazy'
                      @load   = ${()=>{this.loaded=!0}} />
                  </picture>`:m`
                  <video autoplay loop muted >
                    <source src="${this.src}" type="video/mp4" />
                  </video>`} 
            </div>`:h}
        
      </div>
    `}};customElements.define("card-card",at);var lt=class extends g{static properties={size:{type:String,reflect:!0},position:{type:String,reflect:!0},href:{type:String,reflect:!0},target:{type:String}};static styles=c`
    :host {
      /* --size        : var(--block-md); */
      --position    : flex-start;
      --card-gap    : var(--space-sm);
      --layout      : column;

      /* --border-color : black;
      --background-color : transparent; */
  
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
  `;constructor(){super(),this.href=void 0,this.target="_self",this.size=void 0,this.position=void 0,this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return m`<slot></slot>`}};customElements.define("tag-tag",lt);var dt=class extends g{static properties={src:{type:String},placeholder:{type:String},loading:{type:String},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},layout:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},hideCaption:{type:Boolean},_contentRegistry:{type:Object,state:!0}};static styles=[Rt,c`
    :host {
      --size            : var(--block-md);
      --_media-opacity  : 0;

      width             : 100%;
      margin-inline     : auto;
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }

    #wrapper {
      /* max-width : var(--size); */
      /* width : min-content; */
      margin-inline : auto;
    }

    [part="media"] {
      grid-area : media;

      & picture {
        width     : 100%;
        height    : 100%;
        max-width : var(--size);
        display   : flex;
        
        aspect-ratio  : inherit;
       

        /* Placeholder image related */
        background-position : 50% 50%;
        background-repeat   : no-repeat;
        background-size     : cover;

        & img {
          width     : 100%;
          height    : 100%;
          
          object-fit    : cover;
          /* Loading related */
          opacity     : var(--_media-opacity);
          transition  : opacity 1s ease-in;
        }
      }
    }

    [part="figcaption"] {
      grid-area   : content;
      width       : 20ch;
      max-width   : var(--size);
    }


    /* Media Shaping */
    [part="media"] {
      
      &[shape="square"] {
        aspect-ratio  : 1 / 1;
      }
      &[shape="circle"] {
        clip-path     : circle( 50% at center);
        aspect-ratio  : 1 / 1;
        height        : 100%;
      }
      &[shape="brick"] {
        aspect-ratio  : 2 / 1;
      }
      &[shape="column"] {
        aspect-ratio  : 1 / 2;
      }
    }
  `];constructor(){super(),this.size="md",this.src=void 0,this.layout="column",this.shape=void 0,this.loading="lazy",this.placeholder=void 0,this.loaded=!1,this.hideCaption=!1,this._contentRegistry={title:!1,caption:!1}}render(){return m`
      <div id="wrapper">

        <div 
          part="media"
          shape = ${this.shape} >
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
          ?hidden     = ${this.hideCaption||!this._contentRegistry.title&&!this._contentRegistry.caption} 
          @slotchange = ${this._registerContent} >

          <header part="title" 
            ?hidden = ${!this._contentRegistry.title} >
            <slot name="title"></slot>
          </header>
          <slot></slot> 
        </figcaption>

      </div>
    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name||"caption"]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("figure-figure",dt);})();
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
