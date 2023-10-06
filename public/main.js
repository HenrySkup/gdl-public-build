(()=>{var lt=window,ct=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),te=new WeakMap,Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ct&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=te.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(e,t))}return t}toString(){return this.cssText}},ee=n=>new Q(typeof n=="string"?n:n+"",void 0,wt),v=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Q(e,n,wt)},bt=(n,t)=>{ct?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=lt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},ht=ct?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ee(e)})(n):n;var St,dt=window,ie=dt.trustedTypes,Be=ie?ie.emptyScript:"",se=dt.reactiveElementPolyfillSupport,xt={toAttribute(n,t){switch(t){case Boolean:n=n?Be:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ne=(n,t)=>t!==n&&(t==t||n==n),_t={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:ne},Et="finalized",D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_t}static finalize(){if(this.hasOwnProperty(Et))return!1;this[Et]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(ht(s))}else t!==void 0&&e.push(ht(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return bt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_t){var s;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:xt).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=s.getPropertyOptions(r),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:xt;this._$El=r,this[r]=c.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ne)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};D[Et]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},se?.({ReactiveElement:D}),((St=dt.reactiveElementVersions)!==null&&St!==void 0?St:dt.reactiveElementVersions=[]).push("1.6.3");var kt,ut=window,q=ut.trustedTypes,re=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,$t="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+j,We=`<${ue}>`,V=document,et=()=>V.createComment(""),it=n=>n===null||typeof n!="object"&&typeof n!="function",pe=Array.isArray,Ie=n=>pe(n)||typeof n?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,ae=/>/g,U=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,ce=/"/g,fe=/^(?:script|style|textarea|title)$/i,me=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),y=me(1),Oi=me(2),X=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),he=new WeakMap,Y=V.createTreeWalker(V,129,null,!1);function ge(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(t):t}var je=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":"",o=tt;for(let c=0;c<e;c++){let a=n[c],l,u,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===tt?u[1]==="!--"?o=oe:u[1]!==void 0?o=ae:u[2]!==void 0?(fe.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=U):u[3]!==void 0&&(o=U):o===U?u[0]===">"?(o=s??tt,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?U:u[3]==='"'?ce:le):o===ce||o===le?o=U:o===oe||o===ae?o=tt:(o=U,s=void 0);let h=o===U&&n[c+1].startsWith("/>")?" ":"";r+=o===tt?a+We:d>=0?(i.push(l),a.slice(0,d)+$t+a.slice(d)+j+h):a+j+(d===-2?(i.push(void 0),c):h)}return[ge(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]},st=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,c=t.length-1,a=this.parts,[l,u]=je(t,e);if(this.el=n.createElement(l,i),Y.currentNode=this.el.content,e===2){let d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(s=Y.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let f of s.getAttributeNames())if(f.endsWith($t)||f.startsWith(j)){let h=u[o++];if(d.push(f),h!==void 0){let g=s.getAttribute(h.toLowerCase()+$t).split(j),z=/([.?@])?(.*)/.exec(h);a.push({type:1,index:r,name:z[2],strings:g,ctor:z[1]==="."?Tt:z[1]==="?"?Ct:z[1]==="@"?Ot:G})}else a.push({type:6,index:r})}for(let f of d)s.removeAttribute(f)}if(fe.test(s.tagName)){let d=s.textContent.split(j),f=d.length-1;if(f>0){s.textContent=q?q.emptyScript:"";for(let h=0;h<f;h++)s.append(d[h],et()),Y.nextNode(),a.push({type:2,index:++r});s.append(d[f],et())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(j,d+1))!==-1;)a.push({type:7,index:r}),d+=j.length-1}r++}}static createElement(t,e){let i=V.createElement("template");return i.innerHTML=t,i}};function K(n,t,e=n,i){var s,r,o,c;if(t===X)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl,l=it(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((r=a?._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((o=(c=e)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=K(n,a._$AS(n,t.values),a,i)),t}var zt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:V).importNode(i,!0);Y.currentNode=r;let o=Y.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new nt(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new Rt(o,this,t)),this._$AV.push(u),l=s[++a]}c!==l?.index&&(o=Y.nextNode(),c++)}return Y.currentNode=V,r}v(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},nt=class n{constructor(t,e,i,s){var r;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),it(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==X&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ie(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&it(this._$AH)?this._$AA.nextSibling.data=t:this.$(V.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=st.createElement(ge(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{let o=new zt(r,this),c=o.u(this.options);o.v(i),this.$(c),this._$AH=o}}_$AC(t){let e=he.get(t.strings);return e===void 0&&he.set(t.strings,e=new st(t)),e}T(t){pe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new n(this.k(et()),this.k(et()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},G=class{constructor(t,e,i,s,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=K(this,t,e,0),o=!it(t)||t!==this._$AH&&t!==X,o&&(this._$AH=t);else{let c=t,a,l;for(t=r[0],a=0;a<r.length-1;a++)l=K(this,c[i+a],e,a),l===X&&(l=this._$AH[a]),o||(o=!it(l)||l!==this._$AH[a]),l===S?t=S:t!==S&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Tt=class extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},Ne=q?q.emptyScript:"",Ct=class extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,Ne):this.element.removeAttribute(this.name)}},Ot=class extends G{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=K(this,t,e,0))!==null&&i!==void 0?i:S)===X)return;let s=this._$AH,r=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==S&&(s===S||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Rt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}};var de=ut.litHtmlPolyfillSupport;de?.(st,nt),((kt=ut.litHtmlVersions)!==null&&kt!==void 0?kt:ut.litHtmlVersions=[]).push("2.8.0");var ve=(n,t,e)=>{var i,s;let r=(i=e?.renderBefore)!==null&&i!==void 0?i:t,o=r._$litPart$;if(o===void 0){let c=(s=e?.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new nt(t.insertBefore(et(),c),c,void 0,e??{})}return o._$AI(n),o};var Pt,Ht;var _=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return X}};_.finalized=!0,_._$litElement$=!0,(Pt=globalThis.litElementHydrateSupport)===null||Pt===void 0||Pt.call(globalThis,{LitElement:_});var ye=globalThis.litElementPolyfillSupport;ye?.({LitElement:_});((Ht=globalThis.litElementVersions)!==null&&Ht!==void 0?Ht:globalThis.litElementVersions=[]).push("3.3.3");var Lt=class extends _{static properties={open:{type:Boolean,reflect:!0}};static styles=v`
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
      color             : var(--highlight-color);
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
  `;constructor(){super(),this.open=!1}render(){return y`
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
    `}toggle(){this.open=!this.open}};customElements.define("side-bar",Lt);var P=class extends _{static properties={layout:{type:String},size:{type:String},_contentRegistry:{type:Object,state:!0}};static styles=v`
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
  `;constructor(){super(),this.layout=void 0,this.size=void 0,this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:!1}}render(){return y`
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

    `}registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("page-section",P);var Mt=class extends P{static styles=[P.styles,v`
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
    `];constructor(){super()}render(){return y`
        <nav part = "nav">
          <slot name = "nav"></slot>
        </nav>

        <div part = "imprint">
          <slot name="imprint"></slot>
        </div>
    `}};customElements.define("site-footer",Mt);var Dt=class extends _{static properties={title:{type:String},src:{type:String},placeholder:{type:String},loaded:{type:Boolean,reflect:!0},_contentRegistry:{type:Object},_fontSize:{type:Number}};static styles=v`
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

      font-family   : inherit;
      font-size     : inherit;
      font-weight   : inherit;
      color : inherit;
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
  `;constructor(){super(),this.src=void 0,this.placeholder=void 0,this.loaded=!1,this._contentRegistry={content:!1},this._fontSize=1,this._maxFontSize=10,this._resizeThreshold=.05,this._resizeHistory=[1,1.1,1.2,1.3,1.4,1.5]}firstUpdated(){let t=this.renderRoot.querySelector('[part="content"]');new ResizeObserver(this._handleResize.bind(this)).observe(t),this._fontSize=Math.round(t.getBoundingClientRect().width/30)/10}updated(){this._handleResize()}render(){return y`
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
    `}_registerContent(t){let e=t.target.assignedNodes().some(i=>!i.textContent.match(/\w/));this._contentRegistry[t.target.name||"content"]=!e,this._contentRegistry={...this._contentRegistry}}_handleResize(t){let e=this.renderRoot.querySelector('[part="content"]'),i=window.getComputedStyle(e),s=[i.paddingBlockStart,i.paddingInlineEnd,i.paddingBlockEnd,i.paddingInlineStart].map(d=>Number(d.replace("px",""))),r=Math.round(e.clientWidth-s[1]-s[3]),o=Math.round(e.clientHeight-s[0]-s[2]),c=this.renderRoot.querySelector('[part="content"] div'),a=()=>c.clientWidth*c.clientHeight,l=()=>r*o;Math.abs(a()-l())/l()>this._resizeThreshold&&this._resizeHistory[0]!=this._resizeHistory[2]&&this._resizeHistory[0]!=this._resizeHistory[4]&&this._resizeHistory[1]!=this._resizeHistory[3]&&this._resizeHistory[1]!=this._resizeHistory[5]&&(c.clientWidth-1>r||c.clientHeight-1>o?this._fontSize=this._fontSize-.01:(c.clientWidth-1<r||c.clientHeight-1<o)&&(this._fontSize=this._fontSize+.01)),this._resizeHistory.unshift(this._fontSize),this._resizeHistory.length=6}};customElements.define("callout-section",Dt);var Bt=class extends P{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},_contentRegistry:{type:Object}};static styles=[P.styles,v`
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

      
  `];constructor(){super(),this.size="md",this.layout="column",this._contentRegistry={title:!1,subtitle:!1,introduction:!1,content:new Set}}render(){return y`
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
          ${this._contentRegistry.content.size==1&&this._contentRegistry.content.has("TAG-TAG")?"--tag-list":S}
        ">
        <slot @slotchange=${this._registerCards}></slot>
      </div>

    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name]=!0),this._contentRegistry={...this._contentRegistry}}_registerCards(t){let e=new Set(this._contentRegistry.content);t.target.assignedNodes().filter(i=>i.tagName!=null).forEach(i=>e.add(i.tagName)),this._contentRegistry.content=e,this._contentRegistry={...this._contentRegistry}}};customElements.define("deck-section",Bt);var ss=v`
  :host([hidden]) {
    display : none;
  }
`,we=v`
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
  }

  /* "Reach in" to size and shape content. */
  [part="content"] ::slotted( * ) {
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
  [part="content"] ::slotted( [size="xs"] ) { --spanSize : 1 }
  [part="content"] ::slotted( [size="sm"] ) { --spanSize : 2 }
  [part="content"] ::slotted( [size="md"] ) { --spanSize : 3 }
  [part="content"] ::slotted( [size="lg"] ) { --spanSize : 4 }
  [part="content"] ::slotted( [size="xl"] ) { --spanSize : 5 }
  
  /* Shaping slotted content */
  [part="content"] ::slotted( [shape="square"] ) { --spanX: 1; --spanY : 1 }
  [part="content"] ::slotted( [shape="brick"] )  { --spanX: 2; --spanY : 1 }
  [part="content"] ::slotted( [shape="column"] ) { --spanX: 1; --spanY : 2 }

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



`,be=v`

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

`;var Wt=class extends P{static properties={size:{type:String,reflect:!0},layout:{type:String,reflect:!0},captionPosition:{type:String,reflect:!0}};static styles=[P.styles,v`
      :host {
        --layout        : grid;
        --gallery-gap   : var(--space-sm);

        display         : flex;
        gap             : var(--space-lg);
        flex-direction  : row;
        color           : var(--secondary-color);
        font-size       : smaller;
      }
      #wrapper {
        display         : flex;
        gap             : inherit;
        flex-direction  : column;
      }
      /* Caption Positioning */
      :host([captionPosition="bottom"]) #wrapper { 
        flex-direction : column;
      }
      :host([captionPosition="right"]) #wrapper { flex-direction : row }
      :host([captionPosition="left"]) #wrapper { flex-direction : row-reverse; }
      :host([captionPosition="right"]) #wrapper,
      :host([captionPosition="left"]) #wrapper {
        & [part="content"] { max-width : none }
        & [part="caption"] {
          width           : 100%; 
          max-width       : var(--content-sm); 
        }
      }

      [part="caption"] {
        width           : 100%; 
        max-width       : var(--content-md); 
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

      [part="figcaptions"] {
        padding-inline-start : 2em;
        list-style-position: outside;
        list-style-type : decimal-leading-zero;
        & ::slotted(*) {
          
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
    `,we];constructor(){super(),this.size="md",this.layout="grid",this.captionPosition="inside",this.showFigcaptions=!1}render(){return y`
      <div id="wrapper">
        <div part="content">
          <slot></slot>
        </div>
        <figcaption part="caption"> 
            <header part="title">
              <slot name="title"></slot>
            </header>
            <div part="gallerycaption">
              <slot name="gallerycaption"></slot>
            </div>
            <ol part="figcaptions">
              <slot name="figcaption"></slot>
            </ol>
          </figcaption>
      </div>
    `}};customElements.define("gallery-section",Wt);var It=class extends _{static properties={src:{type:String},intrinsicAspect:{type:String},placeholder:{type:String},loading:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0}};static styles=[v`
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
      aspect-ratio : var(--_x) / var(--_y);
      overflow: hidden;
    }
    :host([loaded]) {
      --_media-opacity : 1;
    }
    picture {
      object-fit  : cover;
      /* height      : 100%; */
      width       : 100%;
        height      : 100%;
      display             : flex;
      background-position : 50% 50%;
      background-repeat   : no-repeat;
      background-size     : cover;
    }

    picture img {
        width       : 100%;
        height      : 100%;
        object-fit  : cover;
        /* Loading related */
        opacity     : var(--_media-opacity);
        transition  : opacity 1s ease-in;
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
  `];set src(t){let e=this.src;this._src=String(t),this._type=["jpg","jpeg","png","webp"].some(i=>this.src.endsWith(i)||this.src.endsWith(i.toUpperCase()))?"image":["mp4"].some(i=>this.src.endsWith(i)||this.src.endsWith(i.toUpperCase()))?"video":void 0,this.requestUpdate("src",e)}get src(){return this._src}constructor(){super(),this._src=void 0,this._type=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.placeholder=void 0,this.loading="lazy",this.size="md",this.shape=void 0,this.loaded=!1}render(){return this._type=="image"?y`
        <picture
          part  = "picture"
          style = "background-image : url('${this.placeholder}');
                  height: ${this.intrinsicHeight<this.intrinsicWidth,"100%"}">
          <img  src     = ${this.src} 
                loading = ${this.loading}
                @load   = ${()=>{this.loaded=!0}}>
        </picture>`:this._type=="video"?y`
        <video
          part="picture"
          style="background-image : url('${this.placeholder}');">
        </video>`:y`<div></div>`}};customElements.define("shaped-media",It);var jt=class extends _{static properties={size:{type:String,reflect:!0},href:{type:String},target:{type:String,reflect:!0},layout:{type:String,reflect:!0},src:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},placeholder:{type:String},shape:{type:String},loaded:{type:Boolean,reflect:!0}};static styles=v`
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
  `;constructor(){super(),this.size=void 0,this.potion=void 0,this.layout=void 0,this.relativeFontSize="inherit",this.src=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.placeholder=void 0,this.shape=void 0,this.loaded=!1,this.href=void 0,this.target="_self"}connectedCallback(){super.connectedCallback(),this.href&&this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return y`
      <div id="wrapper">

        <div part="content">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="subtitle"><slot name="subtitle"></slot></div>
          </header>
          <slot></slot>
        </div>

        <slot name="media">
        ${this.src?y`
            <shaped-media 
              part="media"
              src             = ${this.src} 
              placeholder     = ${this.placeholder}
              loading         = ${this.loading}
              shape           = ${this.shape}
              size            = ${this.size}
              intrinsicWidth  = ${this.intrinsicWidth} 
              intrinsicHeight  = ${this.intrinsicHeight} ></shaped-media>`:S}  
        </slot>
        
      </div>
    `}};customElements.define("card-card",jt);var Nt=class extends _{static properties={size:{type:String,reflect:!0},position:{type:String,reflect:!0},href:{type:String,reflect:!0},target:{type:String}};static styles=v`
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
  `;constructor(){super(),this.href=void 0,this.target="_self",this.size=void 0,this.position=void 0,this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return y`<slot></slot>`}};customElements.define("tag-tag",Nt);var Ut=class extends _{static properties={src:{type:String},placeholder:{type:String},loading:{type:String},intrinsicWidth:{type:Number},intrinsicHeight:{type:Number},size:{type:String,reflect:!0},shape:{type:String,reflect:!0},layout:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},hideCaption:{type:Boolean},_contentRegistry:{type:Object,state:!0}};static styles=[be,v`
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
    [part="attribution"] {
      font-size: small;
    }
  `];constructor(){super(),this.size="md",this.src=void 0,this.intrinsicWidth=void 0,this.intrinsicHeight=void 0,this.layout="column",this.shape=void 0,this.loading="lazy",this.placeholder=void 0,this.loaded=!1,this.hideCaption=!1,this._contentRegistry={title:!1,caption:!1,attribution:!1}}render(){return y`
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

          <footer part="attribution" 
                  ?hidden = ${!this._contentRegistry.attribution} >
            <slot name="attribution"></slot>
          </footer>

        </figcaption>

      </div>
    `}_registerContent(t){t.target.assignedNodes()&&(this._contentRegistry[t.target.name||"caption"]=!0,this._contentRegistry={...this._contentRegistry})}};customElements.define("figure-figure",Ut);var Yt=class extends _{static properties={size:{type:String,reflect:!0},href:{type:String},target:{type:String,reflect:!0},layout:{type:String,reflect:!0}};static styles=v`
    :host {
      --size  : var(--block-md);

      display : inline-block;
      width       : 100%;
      padding : 1em;position : relative;

      border : solid black 2px;
  
    }

    :host([href]) { cursor : pointer; }

    [part="content"] {

     
      display: inline-block;
      
      shape-outside: circle(200px at -150% -50% );
      width: 100%;
      height: 320px;
 
      border : solid black 2px;

      padding: var(--space-sm);
      /* margin : 3em; */
  
    }
    #side {
      display : block;
      float  :right;

      border : solid red 2px;
      shape-outside: circle(200px at -300% -50% );
      width: 200px;
      height: 320px;
    }


 

  `;constructor(){super(),this.size=void 0,this.potion=void 0,this.layout=void 0,this.relativeFontSize="inherit",this.href=void 0,this.target="_self"}connectedCallback(){super.connectedCallback(),this.href&&this.addEventListener("click",()=>window.open(this.href,this.target))}render(){return y`
    The Fellowship is not another “design competition,” instead work with and support designers prototype products which can help us live our best lives. Along the way we mentor, document, and showcase the design process and designers. <div part="content">
      <div id="side"></div>
        <header part="header">
          <div part="title"><slot name="title"></slot></div>
          <div part="subtitle"><slot name="subtitle"></slot></div>
        </header>
        <slot></slot>
      </div>The Fellowship is not another “design competition,” instead work with and support designers prototype products which can help us live our best lives. Along the way we mentor, document, and showcase the design process and designers.
    `}};customElements.define("blob-blob",Yt);function mt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Se(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function gt(n,t,e){return t&&Se(n.prototype,t),e&&Se(n,e),n}function Ue(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _e(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,i)}return e}function Vt(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(e),!0).forEach(function(i){Ue(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):_e(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}function Ee(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&qt(n,t)}function L(n){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(n)}function qt(n,t){return qt=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},qt(n,t)}function Ye(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function ke(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ve(n,t){return t&&(typeof t=="object"||typeof t=="function")?t:ke(n)}function Ae(n){var t=Ye();return function(){var i=L(n),s;if(t){var r=L(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return Ve(this,s)}}function Xe(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&(n=L(n),n!==null););return n}function W(n,t,e){return typeof Reflect<"u"&&Reflect.get?W=Reflect.get:W=function(s,r,o){var c=Xe(s,r);if(c){var a=Object.getOwnPropertyDescriptor(c,r);return a.get?a.get.call(o):a.value}},W(n,t,e||n)}function J(n,t){return Ke(n)||Je(n,t)||$e(n,t)||Qe()}function Fe(n){return qe(n)||Ge(n)||$e(n)||Ze()}function qe(n){if(Array.isArray(n))return Kt(n)}function Ke(n){if(Array.isArray(n))return n}function Ge(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function Je(n,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var e=[],i=!0,s=!1,r=void 0;try{for(var o=n[Symbol.iterator](),c;!(i=(c=o.next()).done)&&(e.push(c.value),!(t&&e.length===t));i=!0);}catch(a){s=!0,r=a}finally{try{!i&&o.return!=null&&o.return()}finally{if(s)throw r}}return e}}function $e(n,t){if(n){if(typeof n=="string")return Kt(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kt(n,t)}}function Kt(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}function Ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Z={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},ze=function(){function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mt(this,n),Object.assign(this,Z,t),this.smartphone=Z.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Z.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return gt(n,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var e=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){e.resize(),e.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var e=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",e!=this.context){var i=e=="desktop"?this.smooth:this[e].smooth,s=this.context=="desktop"?this.smooth:this[this.context].smooth;i!=s&&window.location.reload()}}}},{key:"initEvents",value:function(){var e=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(i){i.addEventListener("click",e.setScrollTo,!1)})}},{key:"setScrollTo",value:function(e){e.preventDefault(),this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name,"-href"))||e.currentTarget.getAttribute("href"),{offset:e.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(e){var i=this,s=this.instance.scroll.y,r=s+this.windowHeight,o=this.instance.scroll.x,c=o+this.windowWidth;Object.entries(this.els).forEach(function(a){var l=J(a,2),u=l[0],d=l[1];if(d&&(!d.inView||e)&&(i.direction==="horizontal"?c>=d.left&&o<d.right&&i.setInView(d,u):r>=d.top&&s<d.bottom&&i.setInView(d,u)),d&&d.inView)if(i.direction==="horizontal"){var f=d.right-d.left;d.progress=(i.instance.scroll.x-(d.left-i.windowWidth))/(f+i.windowWidth),(c<d.left||o>d.right)&&i.setOutOfView(d,u)}else{var h=d.bottom-d.top;d.progress=(i.instance.scroll.y-(d.top-i.windowHeight))/(h+i.windowHeight),(r<d.top||s>d.bottom)&&i.setOutOfView(d,u)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(e,i){this.els[i].inView=!0,e.el.classList.add(e.class),this.currentElements[i]=e,e.call&&this.hasCallEventSet&&(this.dispatchCall(e,"enter"),e.repeat||(this.els[i].call=!1))}},{key:"setOutOfView",value:function(e,i){var s=this;this.els[i].inView=!1,Object.keys(this.currentElements).forEach(function(r){r===i&&delete s.currentElements[r]}),e.call&&this.hasCallEventSet&&this.dispatchCall(e,"exit"),e.repeat&&e.el.classList.remove(e.class)}},{key:"dispatchCall",value:function(e,i){this.callWay=i,this.callValue=e.call.split(",").map(function(r){return r.trim()}),this.callObj=e,this.callValue.length==1&&(this.callValue=this.callValue[0]);var s=new Event(this.namespace+"call");this.el.dispatchEvent(s)}},{key:"dispatchScroll",value:function(){var e=new Event(this.namespace+"scroll");this.el.dispatchEvent(e)}},{key:"setEvents",value:function(e,i){this.listeners[e]||(this.listeners[e]=[]);var s=this.listeners[e];s.push(i),s.length===1&&this.el.addEventListener(this.namespace+e,this.checkEvent,!1),e==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(e,i){if(this.listeners[e]){var s=this.listeners[e],r=s.indexOf(i);r<0||(s.splice(r,1),s.index===0&&this.el.removeEventListener(this.namespace+e,this.checkEvent,!1))}}},{key:"checkEvent",value:function(e){var i=this,s=e.type.replace(this.namespace,""),r=this.listeners[s];!r||r.length===0||r.forEach(function(o){switch(s){case"scroll":return o(i.instance);case"call":return o(i.callValue,i.callWay,i.callObj);default:return o()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(e,i){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var e=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(i){e.el.removeEventListener(e.namespace+i,e.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(i){i.removeEventListener("click",e.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),n}(),ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Te(n,t){return t={exports:{}},n(t,t.exports),t.exports}var Ce=Te(function(n,t){(function(){function e(){var i=window,s=document;if("scrollBehavior"in s.documentElement.style&&i.__forceSmoothScrollPolyfill__!==!0)return;var r=i.HTMLElement||i.Element,o=468,c={scroll:i.scroll||i.scrollTo,scrollBy:i.scrollBy,elementScroll:r.prototype.scroll||d,scrollIntoView:r.prototype.scrollIntoView},a=i.performance&&i.performance.now?i.performance.now.bind(i.performance):Date.now;function l(p){var m=["MSIE ","Trident/","Edge/"];return new RegExp(m.join("|")).test(p)}var u=l(i.navigator.userAgent)?1:0;function d(p,m){this.scrollLeft=p,this.scrollTop=m}function f(p){return .5*(1-Math.cos(Math.PI*p))}function h(p){if(p===null||typeof p!="object"||p.behavior===void 0||p.behavior==="auto"||p.behavior==="instant")return!0;if(typeof p=="object"&&p.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+p.behavior+" is not a valid value for enumeration ScrollBehavior.")}function g(p,m){if(m==="Y")return p.clientHeight+u<p.scrollHeight;if(m==="X")return p.clientWidth+u<p.scrollWidth}function z(p,m){var b=i.getComputedStyle(p,null)["overflow"+m];return b==="auto"||b==="scroll"}function I(p){var m=g(p,"Y")&&z(p,"Y"),b=g(p,"X")&&z(p,"X");return m||b}function T(p){for(;p!==s.body&&I(p)===!1;)p=p.parentNode||p.host;return p}function R(p){var m=a(),b,w,$,k=(m-p.startTime)/o;k=k>1?1:k,b=f(k),w=p.startX+(p.x-p.startX)*b,$=p.startY+(p.y-p.startY)*b,p.method.call(p.scrollable,w,$),(w!==p.x||$!==p.y)&&i.requestAnimationFrame(R.bind(i,p))}function A(p,m,b){var w,$,k,x,N=a();p===s.body?(w=i,$=i.scrollX||i.pageXOffset,k=i.scrollY||i.pageYOffset,x=c.scroll):(w=p,$=p.scrollLeft,k=p.scrollTop,x=d),R({scrollable:w,method:x,startTime:N,startX:$,startY:k,x:m,y:b})}i.scroll=i.scrollTo=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){c.scroll.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:i.scrollY||i.pageYOffset);return}A.call(i,s.body,arguments[0].left!==void 0?~~arguments[0].left:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:i.scrollY||i.pageYOffset)}},i.scrollBy=function(){if(arguments[0]!==void 0){if(h(arguments[0])){c.scrollBy.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}A.call(i,s.body,~~arguments[0].left+(i.scrollX||i.pageXOffset),~~arguments[0].top+(i.scrollY||i.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");c.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var p=arguments[0].left,m=arguments[0].top;A.call(this,this,typeof p>"u"?this.scrollLeft:~~p,typeof m>"u"?this.scrollTop:~~m)}},r.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){c.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(h(arguments[0])===!0){c.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var p=T(this),m=p.getBoundingClientRect(),b=this.getBoundingClientRect();p!==s.body?(A.call(this,p,p.scrollLeft+b.left-m.left,p.scrollTop+b.top-m.top),i.getComputedStyle(p).position!=="fixed"&&i.scrollBy({left:m.left,top:m.top,behavior:"smooth"})):i.scrollBy({left:b.left,top:b.top,behavior:"smooth"})}}n.exports={polyfill:e}})()}),zs=Ce.polyfill,ei=function(n){Ee(e,n);var t=Ae(e);function e(){var i,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt(this,e),i=t.call(this,s),i.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",i.checkScroll,!1),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=Ce,window.smoothscrollPolyfill.polyfill()),i}return gt(e,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),W(L(e.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var s=this;W(L(e.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){s.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var s=this;this.els={};var r=this.el.querySelectorAll("[data-"+this.name+"]");r.forEach(function(o,c){var a=o.getBoundingClientRect(),l=o.dataset[s.name+"Class"]||s.class,u=typeof o.dataset[s.name+"Id"]=="string"?o.dataset[s.name+"Id"]:c,d,f,h=typeof o.dataset[s.name+"Offset"]=="string"?o.dataset[s.name+"Offset"].split(","):s.offset,g=o.dataset[s.name+"Repeat"],z=o.dataset[s.name+"Call"],I=o.dataset[s.name+"Target"],T;I!==void 0?T=document.querySelector("".concat(I)):T=o;var R=T.getBoundingClientRect();d=R.top+s.instance.scroll.y,f=R.left+s.instance.scroll.x;var A=d+T.offsetHeight,p=f+T.offsetWidth;g=="false"?g=!1:g!=null?g=!0:g=s.repeat;var m=s.getRelativeOffset(h);d=d+m[0],A=A-m[1];var b={el:o,targetEl:T,id:u,class:l,top:d,bottom:A,left:f,right:p,offset:h,progress:0,repeat:g,inView:!1,call:z};s.els[u]=b,o.classList.contains(l)&&s.setInView(s.els[u],u)})}},{key:"updateElements",value:function(){var s=this;Object.entries(this.els).forEach(function(r){var o=J(r,2),c=o[0],a=o[1],l=a.targetEl.getBoundingClientRect().top+s.instance.scroll.y,u=l+a.targetEl.offsetHeight,d=s.getRelativeOffset(a.offset);s.els[c].top=l+d[0],s.els[c].bottom=u-d[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(s){var r=[0,0];if(s)for(var o=0;o<s.length;o++)typeof s[o]=="string"?s[o].includes("%")?r[o]=parseInt(s[o].replace("%","")*this.windowHeight/100):r[o]=parseInt(s[o]):r[o]=s[o];return r}},{key:"scrollTo",value:function(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=parseInt(r.offset)||0,c=r.callback?r.callback:!1;if(typeof s=="string"){if(s==="top")s=this.html;else if(s==="bottom")s=this.html.offsetHeight-window.innerHeight;else if(s=document.querySelector(s),!s)return}else if(typeof s=="number")s=parseInt(s);else if(!(s&&s.tagName)){console.warn("`target` parameter is not valid");return}typeof s!="number"?o=s.getBoundingClientRect().top+o+this.instance.scroll.y:o=s+o;var a=function(){return parseInt(window.pageYOffset)===parseInt(o)};if(c)if(a()){c();return}else{var l=function u(){a()&&(window.removeEventListener("scroll",u),c())};window.addEventListener("scroll",l)}window.scrollTo({top:o,behavior:r.duration===0?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){W(L(e.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),e}(ze);var xe=Object.getOwnPropertySymbols,ii=Object.prototype.hasOwnProperty,si=Object.prototype.propertyIsEnumerable;function ni(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function ri(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var i=Object.getOwnPropertyNames(t).map(function(r){return t[r]});if(i.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(r){s[r]=r}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var oi=ri()?Object.assign:function(n,t){for(var e,i=ni(n),s,r=1;r<arguments.length;r++){e=Object(arguments[r]);for(var o in e)ii.call(e,o)&&(i[o]=e[o]);if(xe){s=xe(e);for(var c=0;c<s.length;c++)si.call(e,s[c])&&(i[s[c]]=e[s[c]])}}return i};function Oe(){}Oe.prototype={on:function(n,t,e){var i=this.e||(this.e={});return(i[n]||(i[n]=[])).push({fn:t,ctx:e}),this},once:function(n,t,e){var i=this;function s(){i.off(n,s),t.apply(e,arguments)}return s._=t,this.on(n,s,e)},emit:function(n){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[n]||[]).slice(),i=0,s=e.length;for(i;i<s;i++)e[i].fn.apply(e[i].ctx,t);return this},off:function(n,t){var e=this.e||(this.e={}),i=e[n],s=[];if(i&&t)for(var r=0,o=i.length;r<o;r++)i[r].fn!==t&&i[r].fn._!==t&&s.push(i[r]);return s.length?e[n]=s:delete e[n],this}};var ai=Oe,li=Te(function(n,t){(function(){var e;e=t!==null?t:this,e.Lethargy=function(){function i(s,r,o,c){this.stability=s!=null?Math.abs(s):8,this.sensitivity=r!=null?1+Math.abs(r):100,this.tolerance=o!=null?1+Math.abs(o):1.1,this.delay=c??150,this.lastUpDeltas=function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}.call(this),this.lastDownDeltas=function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}.call(this),this.deltasTimestamp=function(){var a,l,u;for(u=[],a=1,l=this.stability*2;1<=l?a<=l:a>=l;1<=l?a++:a--)u.push(null);return u}.call(this)}return i.prototype.check=function(s){var r;return s=s.originalEvent||s,s.wheelDelta!=null?r=s.wheelDelta:s.deltaY!=null?r=s.deltaY*-40:(s.detail!=null||s.detail===0)&&(r=s.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),r>0?(this.lastUpDeltas.push(r),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(r),this.lastDownDeltas.shift(),this.isInertia(-1))},i.prototype.isInertia=function(s){var r,o,c,a,l,u,d;return r=s===-1?this.lastDownDeltas:this.lastUpDeltas,r[0]===null?s:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&r[0]===r[this.stability*2-1]?!1:(c=r.slice(0,this.stability),o=r.slice(this.stability,this.stability*2),d=c.reduce(function(f,h){return f+h}),l=o.reduce(function(f,h){return f+h}),u=d/c.length,a=l/o.length,Math.abs(u)<Math.abs(a*this.tolerance)&&this.sensitivity<Math.abs(a)?s:!1)},i.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},i.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},i}()}).call(ti)}),C=function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}(),ci=Object.prototype.toString,hi=Object.prototype.hasOwnProperty,di=function(n){if(!n)return console.warn("bindAll requires at least one argument.");var t=Array.prototype.slice.call(arguments,1);if(t.length===0)for(var e in n)hi.call(n,e)&&typeof n[e]=="function"&&ci.call(n[e])=="[object Function]"&&t.push(e);for(var i=0;i<t.length;i++){var s=t[i];n[s]=ui(n[s],n)}};function ui(n,t){return function(){return n.apply(t,arguments)}}var pi=li.Lethargy,F="virtualscroll",fi=O,rt={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function O(n){di(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,n&&n.el&&(this.el=n.el,delete n.el),this.options=oi({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},n),this.options.limitInertia&&(this._lethargy=new pi),this._emitter=new ai,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,this.options.passive!==void 0&&(this.listenerOptions={passive:this.options.passive})}O.prototype._notify=function(n){var t=this._event;t.x+=t.deltaX,t.y+=t.deltaY,this._emitter.emit(F,{x:t.x,y:t.y,deltaX:t.deltaX,deltaY:t.deltaY,originalEvent:n})};O.prototype._onWheel=function(n){var t=this.options;if(!(this._lethargy&&this._lethargy.check(n)===!1)){var e=this._event;e.deltaX=n.wheelDeltaX||n.deltaX*-1,e.deltaY=n.wheelDeltaY||n.deltaY*-1,C.isFirefox&&n.deltaMode==1&&(e.deltaX*=t.firefoxMultiplier,e.deltaY*=t.firefoxMultiplier),e.deltaX*=t.mouseMultiplier,e.deltaY*=t.mouseMultiplier,this._notify(n)}};O.prototype._onMouseWheel=function(n){if(!(this.options.limitInertia&&this._lethargy.check(n)===!1)){var t=this._event;t.deltaX=n.wheelDeltaX?n.wheelDeltaX:0,t.deltaY=n.wheelDeltaY?n.wheelDeltaY:n.wheelDelta,this._notify(n)}};O.prototype._onTouchStart=function(n){var t=n.targetTouches?n.targetTouches[0]:n;this.touchStartX=t.pageX,this.touchStartY=t.pageY};O.prototype._onTouchMove=function(n){var t=this.options;t.preventTouch&&!n.target.classList.contains(t.unpreventTouchClass)&&n.preventDefault();var e=this._event,i=n.targetTouches?n.targetTouches[0]:n;e.deltaX=(i.pageX-this.touchStartX)*t.touchMultiplier,e.deltaY=(i.pageY-this.touchStartY)*t.touchMultiplier,this.touchStartX=i.pageX,this.touchStartY=i.pageY,this._notify(n)};O.prototype._onKeyDown=function(n){var t=this._event;t.deltaX=t.deltaY=0;var e=window.innerHeight-40;switch(n.keyCode){case rt.LEFT:case rt.UP:t.deltaY=this.options.keyStep;break;case rt.RIGHT:case rt.DOWN:t.deltaY=-this.options.keyStep;break;case n.shiftKey:t.deltaY=e;break;case rt.SPACE:t.deltaY=-e;break;default:return}this._notify(n)};O.prototype._bind=function(){C.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),C.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),C.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),C.hasPointer&&C.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),C.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)};O.prototype._unbind=function(){C.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),C.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),C.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),C.hasPointer&&C.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),C.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)};O.prototype.on=function(n,t){this._emitter.on(F,n,t);var e=this._emitter.e;e&&e[F]&&e[F].length===1&&this._bind()};O.prototype.off=function(n,t){this._emitter.off(F,n,t);var e=this._emitter.e;(!e[F]||e[F].length<=0)&&this._unbind()};O.prototype.reset=function(){var n=this._event;n.x=0,n.y=0};O.prototype.destroy=function(){this._emitter.off(),this._unbind()};function Xt(n,t,e){return(1-e)*n+e*t}function H(n){var t={};if(window.getComputedStyle){var e=getComputedStyle(n),i=e.transform||e.webkitTransform||e.mozTransform,s=i.match(/^matrix3d\((.+)\)$/);return s?(t.x=s?parseFloat(s[1].split(", ")[12]):0,t.y=s?parseFloat(s[1].split(", ")[13]):0):(s=i.match(/^matrix\((.+)\)$/),t.x=s?parseFloat(s[1].split(", ")[4]):0,t.y=s?parseFloat(s[1].split(", ")[5]):0),t}}function Ft(n){for(var t=[];n&&n!==document;n=n.parentNode)t.push(n);return t}var mi=4,gi=.001,vi=1e-7,yi=10,ot=11,pt=1/(ot-1),wi=typeof Float32Array=="function";function Re(n,t){return 1-3*t+3*n}function Pe(n,t){return 3*t-6*n}function He(n){return 3*n}function ft(n,t,e){return((Re(t,e)*n+Pe(t,e))*n+He(t))*n}function Le(n,t,e){return 3*Re(t,e)*n*n+2*Pe(t,e)*n+He(t)}function bi(n,t,e,i,s){var r,o,c=0;do o=t+(e-t)/2,r=ft(o,i,s)-n,r>0?e=o:t=o;while(Math.abs(r)>vi&&++c<yi);return o}function Si(n,t,e,i){for(var s=0;s<mi;++s){var r=Le(t,e,i);if(r===0)return t;var o=ft(t,e,i)-n;t-=o/r}return t}function _i(n){return n}var xi=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return _i;for(var r=wi?new Float32Array(ot):new Array(ot),o=0;o<ot;++o)r[o]=ft(o*pt,t,i);function c(a){for(var l=0,u=1,d=ot-1;u!==d&&r[u]<=a;++u)l+=pt;--u;var f=(a-r[u])/(r[u+1]-r[u]),h=l+f*pt,g=Le(h,t,i);return g>=gi?Si(a,h,t,i):g===0?h:bi(a,l,l+pt,t,i)}return function(l){return l===0?0:l===1?1:ft(c(l),e,s)}},B={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},Ei=function(n){Ee(e,n);var t=Ae(e);function e(){var i,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt(this,e),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),i=t.call(this,s),i.inertia&&(i.lerp=i.inertia*.1),i.isScrolling=!1,i.isDraggingScrollbar=!1,i.isTicking=!1,i.hasScrollTicking=!1,i.parallaxElements={},i.stop=!1,i.scrollbarContainer=s.scrollbarContainer,i.checkKey=i.checkKey.bind(ke(i)),window.addEventListener("keydown",i.checkKey,!1),i}return gt(e,[{key:"init",value:function(){var s=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=Vt({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new fi({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(r){s.stop||s.isDraggingScrollbar||requestAnimationFrame(function(){s.updateDelta(r),s.isScrolling||s.startScrolling()})}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),W(L(e.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,this.direction==="horizontal"){for(var s=0,r=this.el.children,o=0;o<r.length;o++)s+=r[o].offsetWidth;this.instance.limit.x=s-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(s){var r=this;if(this.stop){s.keyCode==B.TAB&&requestAnimationFrame(function(){r.html.scrollTop=0,document.body.scrollTop=0,r.html.scrollLeft=0,document.body.scrollLeft=0});return}switch(s.keyCode){case B.TAB:requestAnimationFrame(function(){r.html.scrollTop=0,document.body.scrollTop=0,r.html.scrollLeft=0,document.body.scrollLeft=0,r.scrollTo(document.activeElement,{offset:-window.innerHeight/2})});break;case B.UP:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case B.DOWN:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case B.PAGEUP:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case B.PAGEDOWN:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case B.HOME:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case B.END:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case B.SPACE:this.isActiveElementScrollSensitive()&&(s.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement)&&!(document.activeElement instanceof HTMLTextAreaElement)&&!(document.activeElement instanceof HTMLButtonElement)&&!(document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var s=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(r||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame(function(){return s.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var o=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),c=Date.now()-this.startScrollTs;if(!this.animatingScroll&&c>100&&(o<.5&&this.instance.delta[this.directionAxis]!=0||o<.5&&this.instance.delta[this.directionAxis]==0)&&this.stopScrolling(),Object.entries(this.sections).forEach(function(l){var u=J(l,2),d=u[0],f=u[1];f.persistent||s.instance.scroll[s.directionAxis]>f.offset[s.directionAxis]&&s.instance.scroll[s.directionAxis]<f.limit[s.directionAxis]?(s.direction==="horizontal"?s.transform(f.el,-s.instance.scroll[s.directionAxis],0):s.transform(f.el,0,-s.instance.scroll[s.directionAxis]),f.inView||(f.inView=!0,f.el.style.opacity=1,f.el.style.pointerEvents="all",f.el.setAttribute("data-".concat(s.name,"-section-inview"),""))):((f.inView||r)&&(f.inView=!1,f.el.style.opacity=0,f.el.style.pointerEvents="none",f.el.removeAttribute("data-".concat(s.name,"-section-inview"))),s.transform(f.el,0,0))}),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var a=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];this.direction==="horizontal"?this.transform(this.scrollbarThumb,a,0):this.transform(this.scrollbarThumb,0,a)}W(L(e.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(s){var r,o=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;o==="both"?r=s.deltaX+s.deltaY:o==="vertical"?r=s.deltaY:o==="horizontal"?r=s.deltaX:r=s.deltaY,this.instance.delta[this.directionAxis]-=r*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(s){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=Xt(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?this.instance.direction!=="right"&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&this.instance.direction!=="left"&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(s){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(s){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(s){var r=this;this.isDraggingScrollbar&&requestAnimationFrame(function(){var o=(s.clientX-r.scrollbarBCR.left)*100/r.scrollbarWidth*r.instance.limit.x/100,c=(s.clientY-r.scrollbarBCR.top)*100/r.scrollbarHeight*r.instance.limit.y/100;c>0&&c<r.instance.limit.y&&(r.instance.delta.y=c),o>0&&o<r.instance.limit.x&&(r.instance.delta.x=o)})}},{key:"addElements",value:function(){var s=this;this.els={},this.parallaxElements={};var r=this.el.querySelectorAll("[data-".concat(this.name,"]"));r.forEach(function(o,c){var a=Ft(o),l=Object.entries(s.sections).map(function(yt){var Qt=J(yt,2),Ai=Qt[0],De=Qt[1];return De}).find(function(yt){return a.includes(yt.el)}),u=o.dataset[s.name+"Class"]||s.class,d=typeof o.dataset[s.name+"Id"]=="string"?o.dataset[s.name+"Id"]:"el"+c,f,h,g=o.dataset[s.name+"Repeat"],z=o.dataset[s.name+"Call"],I=o.dataset[s.name+"Position"],T=o.dataset[s.name+"Delay"],R=o.dataset[s.name+"Direction"],A=typeof o.dataset[s.name+"Sticky"]=="string",p=o.dataset[s.name+"Speed"]?parseFloat(o.dataset[s.name+"Speed"])/10:!1,m=typeof o.dataset[s.name+"Offset"]=="string"?o.dataset[s.name+"Offset"].split(","):s.offset,b=o.dataset[s.name+"Target"],w;b!==void 0?w=document.querySelector("".concat(b)):w=o;var $=w.getBoundingClientRect();l===null||l.inView?(f=$.top+s.instance.scroll.y-H(w).y,h=$.left+s.instance.scroll.x-H(w).x):(f=$.top-H(l.el).y-H(w).y,h=$.left-H(l.el).x-H(w).x);var k=f+w.offsetHeight,x=h+w.offsetWidth,N={x:(x-h)/2+h,y:(k-f)/2+f};if(A){var vt=o.getBoundingClientRect(),at=vt.top,Gt=vt.left,Jt={x:Gt-h,y:at-f};f+=window.innerHeight,h+=window.innerWidth,k=at+w.offsetHeight-o.offsetHeight-Jt[s.directionAxis],x=Gt+w.offsetWidth-o.offsetWidth-Jt[s.directionAxis],N={x:(x-h)/2+h,y:(k-f)/2+f}}g=="false"?g=!1:g!=null?g=!0:g=s.repeat;var M=[0,0];if(m)if(s.direction==="horizontal"){for(var E=0;E<m.length;E++)typeof m[E]=="string"?m[E].includes("%")?M[E]=parseInt(m[E].replace("%","")*s.windowWidth/100):M[E]=parseInt(m[E]):M[E]=m[E];h=h+M[0],x=x-M[1]}else{for(var E=0;E<m.length;E++)typeof m[E]=="string"?m[E].includes("%")?M[E]=parseInt(m[E].replace("%","")*s.windowHeight/100):M[E]=parseInt(m[E]):M[E]=m[E];f=f+M[0],k=k-M[1]}var Zt={el:o,id:d,class:u,section:l,top:f,middle:N,bottom:k,left:h,right:x,offset:m,progress:0,repeat:g,inView:!1,call:z,speed:p,delay:T,position:I,target:w,direction:R,sticky:A};s.els[d]=Zt,o.classList.contains(u)&&s.setInView(s.els[d],d),(p!==!1||A)&&(s.parallaxElements[d]=Zt)})}},{key:"addSections",value:function(){var s=this;this.sections={};var r=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));r.length===0&&(r=[this.el]),r.forEach(function(o,c){var a=typeof o.dataset[s.name+"Id"]=="string"?o.dataset[s.name+"Id"]:"section"+c,l=o.getBoundingClientRect(),u={x:l.left-window.innerWidth*1.5-H(o).x,y:l.top-window.innerHeight*1.5-H(o).y},d={x:u.x+l.width+window.innerWidth*2,y:u.y+l.height+window.innerHeight*2},f=typeof o.dataset[s.name+"Persistent"]=="string";o.setAttribute("data-scroll-section-id",a);var h={el:o,offset:u,limit:d,inView:!1,persistent:f,id:a};s.sections[a]=h})}},{key:"transform",value:function(s,r,o,c){var a;if(!c)a="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(r,",").concat(o,",0,1)");else{var l=H(s),u=Xt(l.x,r,c),d=Xt(l.y,o,c);a="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(u,",").concat(d,",0,1)")}s.style.webkitTransform=a,s.style.msTransform=a,s.style.transform=a}},{key:"transformElements",value:function(s){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=this.instance.scroll.x+this.windowWidth,a=this.instance.scroll.y+this.windowHeight,l={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(u){var d=J(u,2),f=d[0],h=d[1],g=!1;if(s&&(g=0),h.inView||o)switch(h.position){case"top":g=r.instance.scroll[r.directionAxis]*-h.speed;break;case"elementTop":g=(a-h.top)*-h.speed;break;case"bottom":g=(r.instance.limit[r.directionAxis]-a+r.windowHeight)*h.speed;break;case"left":g=r.instance.scroll[r.directionAxis]*-h.speed;break;case"elementLeft":g=(c-h.left)*-h.speed;break;case"right":g=(r.instance.limit[r.directionAxis]-c+r.windowHeight)*h.speed;break;default:g=(l[r.directionAxis]-h.middle[r.directionAxis])*-h.speed;break}h.sticky&&(h.inView?r.direction==="horizontal"?g=r.instance.scroll.x-h.left+window.innerWidth:g=r.instance.scroll.y-h.top+window.innerHeight:r.direction==="horizontal"?r.instance.scroll.x<h.left-window.innerWidth&&r.instance.scroll.x<h.left-window.innerWidth/2?g=0:r.instance.scroll.x>h.right&&r.instance.scroll.x>h.right+100?g=h.right-h.left+window.innerWidth:g=!1:r.instance.scroll.y<h.top-window.innerHeight&&r.instance.scroll.y<h.top-window.innerHeight/2?g=0:r.instance.scroll.y>h.bottom&&r.instance.scroll.y>h.bottom+100?g=h.bottom-h.top+window.innerHeight:g=!1),g!==!1&&(h.direction==="horizontal"||r.direction==="horizontal"&&h.direction!=="vertical"?r.transform(h.el,g,0,s?!1:h.delay):r.transform(h.el,0,g,s?!1:h.delay))})}},{key:"scrollTo",value:function(s){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=parseInt(o.offset)||0,a=isNaN(parseInt(o.duration))?1e3:parseInt(o.duration),l=o.easing||[.25,0,.35,1],u=!!o.disableLerp,d=o.callback?o.callback:!1;if(l=xi.apply(void 0,Fe(l)),typeof s=="string"){if(s==="top")s=0;else if(s==="bottom")s=this.instance.limit.y;else if(s==="left")s=0;else if(s==="right")s=this.instance.limit.x;else if(s=document.querySelector(s),!s)return}else if(typeof s=="number")s=parseInt(s);else if(!(s&&s.tagName)){console.warn("`target` parameter is not valid");return}if(typeof s!="number"){var f=Ft(s).includes(this.el);if(!f)return;var h=s.getBoundingClientRect(),g=h.top,z=h.left,I=Ft(s),T=I.find(function(k){return Object.entries(r.sections).map(function(x){var N=J(x,2),vt=N[0],at=N[1];return at}).find(function(x){return x.el==k})}),R=0;T?R=H(T)[this.directionAxis]:R=-this.instance.scroll[this.directionAxis],this.direction==="horizontal"?c=z+c-R:c=g+c-R}else c=s+c;var A=parseFloat(this.instance.delta[this.directionAxis]),p=Math.max(0,Math.min(c,this.instance.limit[this.directionAxis])),m=p-A,b=function(x){u?r.direction==="horizontal"?r.setScroll(A+m*x,r.instance.delta.y):r.setScroll(r.instance.delta.x,A+m*x):r.instance.delta[r.directionAxis]=A+m*x};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var w=Date.now(),$=function k(){var x=(Date.now()-w)/a;x>1?(b(1),r.animatingScroll=!1,a==0&&r.update(),d&&d()):(r.scrollToRaf=requestAnimationFrame(k),b(l(x)))};$()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(s,r){this.instance=Vt(Vt({},this.instance),{},{scroll:{x:s,y:r},delta:{x:s,y:r},speed:0})}},{key:"destroy",value:function(){W(L(e.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),e}(ze),ki=function(){function n(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};mt(this,n),this.options=t,Object.assign(this,Z,t),this.smartphone=Z.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Z.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return gt(n,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new Ei(this.options):this.scroll=new ei(this.options),this.scroll.init(),window.location.hash){var e=window.location.hash.slice(1,window.location.hash.length),i=document.getElementById(e);i&&this.scroll.scrollTo(i)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(e,i){this.scroll.scrollTo(e,i)}},{key:"setScroll",value:function(e,i){this.scroll.setScroll(e,i)}},{key:"on",value:function(e,i){this.scroll.setEvents(e,i)}},{key:"off",value:function(e,i){this.scroll.unsetEvents(e,i)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),n}();var Me=ki;window.document.onload=function(n){let t=new Me};})();
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

locomotive-scroll/dist/locomotive-scroll.esm.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
