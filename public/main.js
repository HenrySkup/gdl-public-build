(()=>{var O=window,T=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),ht=new WeakMap,C=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(T&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ht.set(e,t))}return t}toString(){return this.cssText}},pt=n=>new C(typeof n=="string"?n:n+"",void 0,W),c=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new C(e,n,W)},B=(n,t)=>{T?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},M=T?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return pt(e)})(n):n;var I,L=window,ut=L.trustedTypes,Nt=ut?ut.emptyScript:"",gt=L.reactiveElementPolyfillSupport,V={toAttribute(n,t){switch(t){case Boolean:n=n?Nt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},mt=(n,t)=>t!==n&&(t==t||n==n),D={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:mt},q="finalized",_=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty(q))return!1;this[q]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(M(s))}else t!==void 0&&e.push(M(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return B(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=D){var s;let o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){let r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:V).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){let r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:V;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_[q]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},gt?.({ReactiveElement:_}),((I=L.reactiveElementVersions)!==null&&I!==void 0?I:L.reactiveElementVersions=[]).push("1.6.3");var X,j=window,z=j.trustedTypes,ft=z?z.createPolicy("lit-html",{createHTML:n=>n}):void 0,F="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,St="?"+w,Ut=`<${St}>`,S=document,R=()=>S.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",bt=Array.isArray,Ot=n=>bt(n)||typeof n?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,yt=/>/g,x=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,wt=/"/g,zt=/^(?:script|style|textarea|title)$/i,At=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=At(1),It=At(2),b=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),xt=new WeakMap,$=S.createTreeWalker(S,129,null,!1);function Et(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(t):t}var Tt=(n,t)=>{let e=n.length-1,i=[],s,o=t===2?"<svg>":"",r=k;for(let d=0;d<e;d++){let a=n[d],l,u,h=-1,f=0;for(;f<a.length&&(r.lastIndex=f,u=r.exec(a),u!==null);)f=r.lastIndex,r===k?u[1]==="!--"?r=vt:u[1]!==void 0?r=yt:u[2]!==void 0?(zt.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=x):u[3]!==void 0&&(r=x):r===x?u[0]===">"?(r=s??k,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,l=u[1],r=u[3]===void 0?x:u[3]==='"'?wt:_t):r===wt||r===_t?r=x:r===vt||r===yt?r=k:(r=x,s=void 0);let y=r===x&&n[d+1].startsWith("/>")?" ":"";o+=r===k?a+Ut:h>=0?(i.push(l),a.slice(0,h)+F+a.slice(h)+w+y):a+w+(h===-2?(i.push(void 0),d):y)}return[Et(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]},P=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,d=t.length-1,a=this.parts,[l,u]=Tt(t,e);if(this.el=n.createElement(l,i),$.currentNode=this.el.content,e===2){let h=this.el.content,f=h.firstChild;f.remove(),h.append(...f.childNodes)}for(;(s=$.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){let h=[];for(let f of s.getAttributeNames())if(f.endsWith(F)||f.startsWith(w)){let y=u[r++];if(h.push(f),y!==void 0){let Pt=s.getAttribute(y.toLowerCase()+F).split(w),U=/([.?@])?(.*)/.exec(y);a.push({type:1,index:o,name:U[2],strings:Pt,ctor:U[1]==="."?K:U[1]==="?"?J:U[1]==="@"?Z:E})}else a.push({type:6,index:o})}for(let f of h)s.removeAttribute(f)}if(zt.test(s.tagName)){let h=s.textContent.split(w),f=h.length-1;if(f>0){s.textContent=z?z.emptyScript:"";for(let y=0;y<f;y++)s.append(h[y],R()),$.nextNode(),a.push({type:2,index:++o});s.append(h[f],R())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:o}),h+=w.length-1}o++}}static createElement(t,e){let i=S.createElement("template");return i.innerHTML=t,i}};function A(n,t,e=n,i){var s,o,r,d;if(t===b)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl,l=H(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=A(n,a._$AS(n,t.values),a,i)),t}var G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:S).importNode(i,!0);$.currentNode=o;let r=$.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let u;l.type===2?u=new N(r,r.nextSibling,this,t):l.type===1?u=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(u=new Q(r,this,t)),this._$AV.push(u),l=s[++a]}d!==l?.index&&(r=$.nextNode(),d++)}return $.currentNode=S,o}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},N=class n{constructor(t,e,i,s){var o;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),H(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ot(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(Et(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{let r=new G(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new P(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new n(this.k(R()),this.k(R()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},E=class{constructor(t,e,i,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(o===void 0)t=A(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{let d=t,a,l;for(t=o[0],a=0;a<o.length-1;a++)l=A(this,d[i+a],e,a),l===b&&(l=this._$AH[a]),r||(r=!H(l)||l!==this._$AH[a]),l===g?t=g:t!==g&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},K=class extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},Mt=z?z.emptyScript:"",J=class extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==g?this.element.setAttribute(this.name,Mt):this.element.removeAttribute(this.name)}},Z=class extends E{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=A(this,t,e,0))!==null&&i!==void 0?i:g)===b)return;let s=this._$AH,o=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==g&&(s===g||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}};var $t=j.litHtmlPolyfillSupport;$t?.(P,N),((X=j.litHtmlVersions)!==null&&X!==void 0?X:j.litHtmlVersions=[]).push("2.8.0");var Ct=(n,t,e)=>{var i,s;let o=(i=e?.renderBefore)!==null&&i!==void 0?i:t,r=o._$litPart$;if(r===void 0){let d=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new N(t.insertBefore(R(),d),d,void 0,e??{})}return r._$AI(n),r};var tt,et;var m=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}};m.finalized=!0,m._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:m});var kt=globalThis.litElementPolyfillSupport;kt?.({LitElement:m});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.3.3");var it=class extends m{static properties={open:{type:Boolean,reflect:!0}};static styles=c`
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
  `;constructor(){super(),this.open=!1}render(){return p`
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
    `}toggle(){this.open=!this.open}};customElements.define("side-bar",it);var v=class extends m{static properties={layout:{type:String},size:{type:String},_contentRegistry:{type:Object,state:!0}};static styles=c`
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

      &[hidden] {
        display : none;
      }
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
  `;constructor(){super(),this.layout=void 0,this.size=void 0,this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:!1}}render(){return p`
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

    `}registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("page-section",v);var st=class extends v{static styles=[v.styles,c`
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
    `];constructor(){super()}render(){return p`
        <nav part = "nav">
          <slot name = "nav"></slot>
        </nav>

        <div part = "imprint">
          <slot name="imprint"></slot>
        </div>
    `}};customElements.define("site-footer",st);var nt=class extends m{static properties={title:{type:String},src:{type:String},placeholder:{type:String},loaded:{type:Boolean,reflect:!0},_contentRegistry:{type:Object},_fontSize:{type:Number}};static styles=c`
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

      font-size : 1rem;
    }

    :host([loaded]) {
      --_media-opacity : 1;
    }

    [part="content"] {
      box-sizing : border-box;
      position      : absolute;
      z-index       : 1000;
      display       : flex;
      align-items   : center;
      /* width : max-content; */
      /* width         : 100%;
      height        : 100%;
      max-width     : 90vw;
      max-height    : 80vh; */
      height        : 100%;
      max-height    : 70vh;
      padding       : 5vw;
      margin-inline : auto;
      font-size     : inherit;
      line-height   : 0.9em;

      /* Use Viewport units for a more responsive text size */
      /* font-size : min(var(--min-font-size), 10vh);*/

      & div {
        display       : flex;
        height : min-content;
      }
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

    /* @container callout ( orientation: landscape  ) {
      [part="content"] {
        font-size : min(6vw, 10vh); 
      }
    }
    @container callout ( orientation: portrait ) {
      [part="content"] {
        font-size : max(8vw, var(--min-font-size)); 
      }
    } */
  `;constructor(){super(),this.src=void 0,this.placeholder=void 0,this.loaded=!1,this._contentRegistry={content:!1},this._fontSize=1,this._maxFontSize=10,this._resizeThreshold=.1,this._resizeHistory=[1,1.1,1.2,1.3,1.4,1.5]}firstUpdated(){let t=this.renderRoot.querySelector('[part="content"]');new ResizeObserver(this._handleResize.bind(this)).observe(t),this._fontSize=Math.round(t.getBoundingClientRect().width/30)/10}updated(){this._handleResize()}render(){return p`
      <picture 
        part="background"
        style="
          background-image      : url(${this.placeholder});
          --background-opacity  : ${this._contentRegistry.content?.5:1}
        ">
        <img  src     = ${this.src} 
              loading = 'lazy'
              @load   = ${()=>{this.loaded=!0}}>
      </picture>

      <div 
        part        = "content"
        @slotchange = ${this._registerContent}
        style       = "font-size : ${this._fontSize}rem"
        >
        <div><slot></slot></div></div>
    `}_registerContent(t){let e=t.target.assignedNodes().some(i=>!i.textContent.match(/\w/));this._contentRegistry[t.target.name||"content"]=!e,this._contentRegistry={...this._contentRegistry}}_handleResize(t){let e=this.renderRoot.querySelector('[part="content"]'),i=window.getComputedStyle(e),s=[i.paddingBlockStart,i.paddingInlineEnd,i.paddingBlockEnd,i.paddingInlineStart].map(h=>Number(h.replace("px",""))),o=Math.round(e.clientWidth-s[1]-s[3]),r=Math.round(e.clientHeight-s[0]-s[2]),d=this.renderRoot.querySelector('[part="content"] div'),a=()=>d.clientWidth*d.clientHeight,l=()=>o*r;Math.abs(a()-l())/l()>this._resizeThreshold&&this._resizeHistory[0]!=this._resizeHistory[2]&&this._resizeHistory[0]!=this._resizeHistory[4]&&this._resizeHistory[1]!=this._resizeHistory[3]&&this._resizeHistory[1]!=this._resizeHistory[5]&&(d.clientWidth-1>o||d.clientHeight-1>r?this._fontSize=this._fontSize-.01:(d.clientWidth-1<o||d.clientHeight-1<r)&&(this._fontSize=this._fontSize+.01)),this._resizeHistory.unshift(this._fontSize),this._resizeHistory.length=6}};customElements.define("callout-section",nt);var rt=class extends v{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},_contentRegistry:{type:Object}};static styles=[v.styles,c`
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

      /* COLUMN LAYOUT */
      :host([layout="column"]) {
        --layout    : column;
      }
      :host([layout="column"]) ::slotted( card-card ) {
        margin-inline : auto;
      }
      /* ROW LAYOUT */
      :host([layout="row"]) [part="content"] {
        --layout    : row; 
        --wrap      : wrap;   
        
        --minCellSize   : 250; // px
        --grid-columns  : calc( 200 / var( --minCellSize ) );

        display         : grid;   
        grid-auto-flow        : row;
        grid-template-columns : repeat( auto-fill, 
                                        minmax( 
                                          calc( var( --minCellSize ) * 1px ),
                                          1fr 
                                        ) 
                                      );
      }
      :host([layout="row"]) ::slotted( header ) {
        grid-column : 1 / -1;
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
      }
      :host(*) [part="content"].--tag-list {
        display : flex;
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
        [part="content"] { --repeat : calc( 550 / 250 ) }
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

      
  `];constructor(){super(),this.size="md",this.layout="column",this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:new Set}}render(){return p`
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
          ${this._contentRegistry.content.size==1&&this._contentRegistry.content.has("TAG-TAG")?"--tag-list":g}
        ">
        <slot @slotchange=${this._registerCards}></slot>
      </div>

    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0),this._contentRegistry={...this._contentRegistry}}_registerCards(t){let e=new Set(this._contentRegistry.content);t.target.assignedNodes().filter(i=>i.tagName!=null).forEach(i=>e.add(i.tagName)),this._contentRegistry.content=e,this._contentRegistry={...this._contentRegistry}}};customElements.define("deck-section",rt);var ge=c`
  :host([hidden]) {
    display : none;
  }
`,Rt=c`
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



`,Ht=c`

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
    --_columns  : "1fr 1fr";
    --_rows     : "auto 0";
  }
  :host([layout="row-reverse"]) {
    --_areas    : "media content";
    --_columns  : "1fr auto";
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

  [part="wrapper"] {
    display               : grid;
    grid-template-areas   : var(--_areas);
    grid-template-columns : var(--_columns);
    grid-template-rows    : var(--_rows);
    gap                   : 1em;
    overflow              : hidden;
  }

  [part="media"] {
    overflow    : hidden;
    min-width   : 200px;
  }

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

  @container grid-width ( max-width: 650px ) {
    [part="media"] {
      display         : flex;
      flex-direction  : column;
    }
  }

`;var ot=class extends v{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},captionPosition:{type:String,reflect:!0}};static styles=[v.styles,c`
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
    `,Rt];constructor(){super(),this.size="md",this.layout="grid",this.captionPosition="inside",this.showFigcaptions=!1}render(){return p`
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
    `}};customElements.define("gallery-section",ot);var at=class extends m{static properties={src:{type:String},intrinsicAspect:{type:String},placeholder:{type:String},loading:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}};static styles=[c`
    :host {
      --_size           : 250px;
      --_x              : 1;
      --_y              : 1;
      --_media-opacity  : 0;
      
      display       : block;
      width         : 100%;
      height        : 100%;
      max-width     : calc( var(--_x) * var(--size) );
      max-height    : calc( var(--_y) * var(--size) );
      margin-inline : auto;
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }



    picture {
      object-fit  : cover;
      /* height      : 100%; */
      /* width       : 100%;
        height      : 100%; */
      display             : flex;
      background-position : 50% 50%;
      background-repeat   : no-repeat;
      background-size     : cover;
      & img {
        width       : 100%;
        height      : 100%;
        object-fit  : cover;
        /* Loading related */
        opacity     : var(--_media-opacity);
        transition  : opacity 1s ease-in;
      }
    }

    /* Sizing & Shaping */
    :host([size="sx"]) { --_size : var(--content-xs); }
    :host([size="sm"]) { --_size : var(--content-sm); }
    :host([size="md"]) { --_size : var(--content-md); }
    :host([size="lg"]) { --_size : var(--content-lg); }
    :host([size="xl"]) { --_size : var(--content-xl); }

    :host([shape="square"]) { --_x : 1; --_y : 1; }
    :host([shape="circle"]) { --_x : 1; --_y : 1; }
    :host([shape="circle"]) [part="picture"] {clip-path:circle(50% at center); }
    :host([shape="brick"]) { --_x : 2; --_y : 1; }
    :host([shape="column"]) { --_x : 1; --_y : 2; }
  `];set src(t){let e=this.src;this._src=String(t),this._type=["jpg","jpeg","png","webp"].some(i=>this.src.endsWith(i)||this.src.endsWith(i.toUpperCase()))?"image":["mp4"].some(i=>this.src.endsWith(i)||this.src.endsWith(i.toUpperCase()))?"video":void 0,this.requestUpdate("src",e)}get src(){return this._src}constructor(){super(),this._src=void 0,this._type=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.placeholder=void 0,this.loading="lazy",this.size="md",this.shape=void 0,this.loaded=!1}render(){return this._type=="image"?p`
        <picture
          part  = "picture"
          style = "background-image : url('${this.placeholder}');
                  height: ${this.intrinsicHeight<this.intrinsicWidth?"100%":"auto"}">
          <img  src     = ${this.src} 
                loading = ${this.loading}
                @load   = ${()=>{this.loaded=!0}}>
        </picture>`:this._type=="video"?p`
        <video
          part="picture"
          style="background-image : url('${this.placeholder}');">
        </video>`:p`<div></div>`}};customElements.define("shaped-media",at);var lt=class extends m{static properties={size:{type:String,reflect:!0},href:{type:String},target:{type:String,reflect:!0},layout:{type:String,reflect:!0},src:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},placeholder:{type:String},shape:{type:String},loaded:{type:Boolean,reflect:!0}};static styles=c`
    :host {
      --size            : var(--block-md);
      --position        : flex-start;
      --card-gap        : 0;
      --wrapperMaxWidth : var(--size);
      --_media-opacity  : 0;

      // No Layout... (ie. no image)
      --_layout           : "content";
      --_grid-columns     : 1fr;
      --_grid-rows        : 1fr;
      
      width       : 100%;
      min-width   : 250px;
      container   : card-width / inline-size;
    }

    :host([href]) { cursor : pointer; }
    :host([loaded]) {  --_media-opacity : 1; }

    :host([layout="row"]) { 
      --_layout       : "content media";
      --_grid-columns : 1fr 1fr;
      --_grid-rows    : 1fr;
    }
    :host([layout="row-reverse"]) { 
      --_layout       : "media content"; 
      --_grid-columns : auto 1fr;
      --_grid-rows    : 1fr;
    }
    :host([layout="column"]) { 
      --_layout : "content" "media";
      --_grid-columns : 1fr;
      --_grid-rows    : 1fr 1fr;
    }
    :host([layout="column-reverse"]) {  
      --_layout: "media" "content";
      --_grid-columns : 1fr;
      --_grid-rows    : 1fr 1fr; 
    }

    #wrapper {
      display               : grid;
      grid-template-areas   : var( --_layout);
      grid-template-columns : var(--_grid-columns);
      grid-template-rows    : var(--_grid-rows);
      align-items           : center;
      gap                   : var(--card-gap);
      background-color      : var(--background-color);
      overflow              : hidden;
     
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

    [part="media"] shaped-media {
      width   : 100%;
      height  : 100%;
    }
 
    @container card-width ( max-width: 450px ) {
      #wrapper {
        display : flex;
        flex-direction : column-reverse;
      }
      /* #wrapper{
        --position            : center;
        --layout              : column-reverse;
        --margin-inline-start : auto;
        --margin-inline-end   : auto;
        max-width             : none;
      } */
    }
  `;constructor(){super(),this.size=void 0,this.potion=void 0,this.layout=void 0,this.relativeFontSize="inherit",this.src=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.placeholder=void 0,this.shape=void 0,this.loaded=!1,this.href=void 0,this.target="_self"}connectedCallback(){super.connectedCallback(),this.href&&this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return p`
      <div id="wrapper">

        <div part="content">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="subtitle"><slot name="subtitle"></slot></div>
          </header>
          <slot></slot>
        </div>

        ${this.src?p`
            <shaped-media 
              part="media"
              src             = ${this.src} 
              placeholder     = ${this.placeholder}
              loading         = ${this.loading}
              shape           = ${this.shape}
              size            = ${this.size}
              intrinsicWidth  = ${this.intrinsicWidth} 
              intrinsicHeight  = ${this.intrinsicHeight} ></shaped-media>`:g}  
        
      </div>
    `}};customElements.define("card-card",lt);var dt=class extends m{static properties={size:{type:String,reflect:!0},position:{type:String,reflect:!0},href:{type:String,reflect:!0},target:{type:String}};static styles=c`
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
  `;constructor(){super(),this.href=void 0,this.target="_self",this.size=void 0,this.position=void 0,this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return p`<slot></slot>`}};customElements.define("tag-tag",dt);var ct=class extends m{static properties={src:{type:String},placeholder:{type:String},loading:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},layout:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},hideCaption:{type:Boolean},_contentRegistry:{type:Object,state:!0}};static styles=[Ht,c`
    :host {
      --size            : var(--content-md);
      --_wrapperSize    : max-content;
      --_wrapperType    : grid;
      --_media-opacity  : 0;

      width             : 100%;
      /* max-width         : 100%; */
      margin-inline     : auto;
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }

    :host([layout=galleryFigure]) {
      --_wrapperSize : none;
      --_wrapperType : block;
    }

    #wrapper {
      /* display : var(--_wrapperType); */
      /* width : var(--_wrapperSize); */
 

      width             : max-content;
      max-width         : 100%;
      margin-inline : auto;
    }

    [part="media"] {
      grid-area : media;
      width     : 100%;
      max-width : var(--size);
    }

    [part="figcaption"] {
      grid-area   : content;
      width       : 20ch;
      max-width   : var(--size);
    }
  `];constructor(){super(),this.size="md",this.src=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.layout="column",this.shape=void 0,this.loading="lazy",this.placeholder=void 0,this.loaded=!1,this.hideCaption=!1,this._contentRegistry={title:!1,caption:!1}}render(){return p`
      <div id="wrapper" part="wrapper" >
      
        <shaped-media 
          part        = "media" 
          src         = ${this.src} 
          placeholder = ${this.placeholder}
          loading     = ${this.loading}
          shape       = ${this.shape}
          size        = ${this.size}
            ></shaped-media>  

        
        
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
    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name||"caption"]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("figure-figure",ct);})();
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
