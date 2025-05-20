import{a as S,b as te,c as $p,d as qp,e as Vt}from"./chunk-5FZOKLP6.js";var Mp=$p((_l,xl)=>{"use strict";(function(n,e){typeof define=="function"&&define.amd?define([],e):typeof _l<"u"?e():(e(),n.FileSaver={})})(_l,function(){"use strict";function n(a,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function e(a,c,l){var u=new XMLHttpRequest;u.open("GET",a),u.responseType="blob",u.onload=function(){o(u.response,c,l)},u.onerror=function(){console.error("could not download file")},u.send()}function t(a){var c=new XMLHttpRequest;c.open("HEAD",a,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function i(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(c)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(a,c,l){var u=r.URL||r.webkitURL,d=document.createElement("a");c=c||a.name||"download",d.download=c,d.rel="noopener",typeof a=="string"?(d.href=a,d.origin===location.origin?i(d):t(d.href)?e(a,c,l):i(d,d.target="_blank")):(d.href=u.createObjectURL(a),setTimeout(function(){u.revokeObjectURL(d.href)},4e4),setTimeout(function(){i(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,c,l){if(c=c||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(n(a,l),c);else if(t(a))e(a,c,l);else{var u=document.createElement("a");u.href=a,u.target="_blank",setTimeout(function(){i(u)})}}:function(a,c,l,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof a=="string")return e(a,c,l);var d=a.type==="application/octet-stream",f=/constructor/i.test(r.HTMLElement)||r.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||d&&f||s)&&typeof FileReader<"u"){var p=new FileReader;p.onloadend=function(){var g=p.result;g=h?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=g:location=g,u=null},p.readAsDataURL(a)}else{var m=r.URL||r.webkitURL,v=m.createObjectURL(a);u?u.location=v:location.href=v,u=null,setTimeout(function(){m.revokeObjectURL(v)},4e4)}});r.saveAs=o.saveAs=o,typeof xl<"u"&&(xl.exports=o)})});var Xl=null;var Co=1,Yl=Symbol("SIGNAL");function X(n){let e=Xl;return Xl=n,e}var Zl={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Xp(n){if(!(Io(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Co)){if(!n.producerMustRecompute(n)&&!Ao(n)){n.dirty=!1,n.lastCleanEpoch=Co;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Co}}function Jl(n){return n&&(n.nextProducerIndex=0),X(n)}function Kl(n,e){if(X(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Io(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Do(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ao(n){xr(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Xp(t),i!==t.version))return!0}return!1}function Ql(n){if(xr(n),Io(n))for(let e=0;e<n.producerNode.length;e++)Do(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Do(n,e){if(Yp(n),xr(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Do(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];xr(r),r.producerIndexOfThis[i]=e}}function Io(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function xr(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Yp(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Zp(){throw new Error}var Jp=Zp;function eu(n){Jp=n}function I(n){return typeof n=="function"}function xn(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Mr=xn(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function ci(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var se=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(I(i))try{i()}catch(s){e=s instanceof Mr?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{tu(s)}catch(o){e=e??[],o instanceof Mr?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Mr(e)}}add(e){var t;if(e&&e!==this)if(this.closed)tu(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&ci(t,e)}remove(e){let{_finalizers:t}=this;t&&ci(t,e),e instanceof n&&e._removeParent(this)}};se.EMPTY=(()=>{let n=new se;return n.closed=!0,n})();var Ro=se.EMPTY;function br(n){return n instanceof se||n&&"closed"in n&&I(n.remove)&&I(n.add)&&I(n.unsubscribe)}function tu(n){I(n)?n():n.unsubscribe()}var Ve={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Mn={setTimeout(n,e,...t){let{delegate:i}=Mn;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Mn;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Sr(n){Mn.setTimeout(()=>{let{onUnhandledError:e}=Ve;if(e)e(n);else throw n})}function li(){}var nu=Po("C",void 0,void 0);function iu(n){return Po("E",void 0,n)}function ru(n){return Po("N",n,void 0)}function Po(n,e,t){return{kind:n,value:e,error:t}}var zt=null;function bn(n){if(Ve.useDeprecatedSynchronousErrorHandling){let e=!zt;if(e&&(zt={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=zt;if(zt=null,t)throw i}}else n()}function su(n){Ve.useDeprecatedSynchronousErrorHandling&&zt&&(zt.errorThrown=!0,zt.error=n)}var Ht=class extends se{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,br(e)&&e.add(this)):this.destination=em}static create(e,t,i){return new Sn(e,t,i)}next(e){this.isStopped?Oo(ru(e),this):this._next(e)}error(e){this.isStopped?Oo(iu(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Oo(nu,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Kp=Function.prototype.bind;function No(n,e){return Kp.call(n,e)}var Lo=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){wr(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){wr(i)}else wr(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){wr(t)}}},Sn=class extends Ht{constructor(e,t,i){super();let r;if(I(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Ve.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&No(e.next,s),error:e.error&&No(e.error,s),complete:e.complete&&No(e.complete,s)}):r=e}this.destination=new Lo(r)}};function wr(n){Ve.useDeprecatedSynchronousErrorHandling?su(n):Sr(n)}function Qp(n){throw n}function Oo(n,e){let{onStoppedNotification:t}=Ve;t&&Mn.setTimeout(()=>t(n,e))}var em={closed:!0,next:li,error:Qp,complete:li};var wn=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ee(n){return n}function Fo(...n){return Uo(n)}function Uo(n){return n.length===0?Ee:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var Y=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=nm(t)?t:new Sn(t,i,r);return bn(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=ou(i),new i((r,s)=>{let o=new Sn({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[wn](){return this}pipe(...t){return Uo(t)(this)}toPromise(t){return t=ou(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function ou(n){var e;return(e=n??Ve.Promise)!==null&&e!==void 0?e:Promise}function tm(n){return n&&I(n.next)&&I(n.error)&&I(n.complete)}function nm(n){return n&&n instanceof Ht||tm(n)&&br(n)}function ko(n){return I(n?.lift)}function z(n){return e=>{if(ko(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function H(n,e,t,i,r){return new Bo(n,e,t,i,r)}var Bo=class extends Ht{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function En(){return z((n,e)=>{let t=null;n._refCount++;let i=H(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Tn=class extends Y{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,ko(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new se;let t=this.getSubject();e.add(this.source.subscribe(H(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=se.EMPTY)}return e}refCount(){return En()(this)}};var au=xn(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var me=(()=>{class n extends Y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Er(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new au}next(t){bn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){bn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){bn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Ro:(this.currentObservers=null,s.push(t),new se(()=>{this.currentObservers=null,ci(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new Y;return t.source=this,t}}return n.create=(e,t)=>new Er(e,t),n})(),Er=class extends me{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Ro}};var ue=class extends me{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Te=new Y(n=>n.complete());function cu(n){return n&&I(n.schedule)}function lu(n){return n[n.length-1]}function uu(n){return I(lu(n))?n.pop():void 0}function xt(n){return cu(lu(n))?n.pop():void 0}function hu(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function du(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Gt(n){return this instanceof Gt?(this.v=n,this):new Gt(n)}function fu(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(p){return Promise.resolve(p).then(h,d)}}function a(h,p){i[h]&&(r[h]=function(m){return new Promise(function(v,g){s.push([h,m,v,g])>1||c(h,m)})},p&&(r[h]=p(r[h])))}function c(h,p){try{l(i[h](p))}catch(m){f(s[0][3],m)}}function l(h){h.value instanceof Gt?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,p){h(p),s.shift(),s.length&&c(s[0][0],s[0][1])}}function pu(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof du=="function"?du(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Tr=n=>n&&typeof n.length=="number"&&typeof n!="function";function Cr(n){return I(n?.then)}function Ar(n){return I(n[wn])}function Dr(n){return Symbol.asyncIterator&&I(n?.[Symbol.asyncIterator])}function Ir(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function im(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rr=im();function Pr(n){return I(n?.[Rr])}function Nr(n){return fu(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Gt(t.read());if(r)return yield Gt(void 0);yield yield Gt(i)}}finally{t.releaseLock()}})}function Or(n){return I(n?.getReader)}function ae(n){if(n instanceof Y)return n;if(n!=null){if(Ar(n))return rm(n);if(Tr(n))return sm(n);if(Cr(n))return om(n);if(Dr(n))return mu(n);if(Pr(n))return am(n);if(Or(n))return cm(n)}throw Ir(n)}function rm(n){return new Y(e=>{let t=n[wn]();if(I(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function sm(n){return new Y(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function om(n){return new Y(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Sr)})}function am(n){return new Y(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function mu(n){return new Y(e=>{lm(n,e).catch(t=>e.error(t))})}function cm(n){return mu(Nr(n))}function lm(n,e){var t,i,r,s;return hu(this,void 0,void 0,function*(){try{for(t=pu(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function _e(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Lr(n,e=0){return z((t,i)=>{t.subscribe(H(i,r=>_e(i,n,()=>i.next(r),e),()=>_e(i,n,()=>i.complete(),e),r=>_e(i,n,()=>i.error(r),e)))})}function Fr(n,e=0){return z((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function gu(n,e){return ae(n).pipe(Fr(e),Lr(e))}function vu(n,e){return ae(n).pipe(Fr(e),Lr(e))}function yu(n,e){return new Y(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function _u(n,e){return new Y(t=>{let i;return _e(t,e,()=>{i=n[Rr](),_e(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>I(i?.return)&&i.return()})}function Ur(n,e){if(!n)throw new Error("Iterable cannot be null");return new Y(t=>{_e(t,e,()=>{let i=n[Symbol.asyncIterator]();_e(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function xu(n,e){return Ur(Nr(n),e)}function Mu(n,e){if(n!=null){if(Ar(n))return gu(n,e);if(Tr(n))return yu(n,e);if(Cr(n))return vu(n,e);if(Dr(n))return Ur(n,e);if(Pr(n))return _u(n,e);if(Or(n))return xu(n,e)}throw Ir(n)}function ne(n,e){return e?Mu(n,e):ae(n)}function A(...n){let e=xt(n);return ne(n,e)}function Cn(n,e){let t=I(n)?n:()=>n,i=r=>r.error(t());return new Y(e?r=>e.schedule(i,0,r):i)}function Vo(n){return!!n&&(n instanceof Y||I(n.lift)&&I(n.subscribe))}var ct=xn(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function O(n,e){return z((t,i)=>{let r=0;t.subscribe(H(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:um}=Array;function dm(n,e){return um(e)?n(...e):n(e)}function bu(n){return O(e=>dm(n,e))}var{isArray:hm}=Array,{getPrototypeOf:fm,prototype:pm,keys:mm}=Object;function Su(n){if(n.length===1){let e=n[0];if(hm(e))return{args:e,keys:null};if(gm(e)){let t=mm(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function gm(n){return n&&typeof n=="object"&&fm(n)===pm}function wu(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function kr(...n){let e=xt(n),t=uu(n),{args:i,keys:r}=Su(n);if(i.length===0)return ne([],e);let s=new Y(vm(i,e,r?o=>wu(r,o):Ee));return t?s.pipe(bu(t)):s}function vm(n,e,t=Ee){return i=>{Eu(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Eu(e,()=>{let l=ne(n[c],e),u=!1;l.subscribe(H(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Eu(n,e,t){n?_e(t,n,e):e()}function Tu(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=m=>l<i?p(m):c.push(m),p=m=>{s&&e.next(m),l++;let v=!1;ae(t(m,u++)).subscribe(H(e,g=>{r?.(g),s?h(g):e.next(g)},()=>{v=!0},void 0,()=>{if(v)try{for(l--;c.length&&l<i;){let g=c.shift();o?_e(e,o,()=>p(g)):p(g)}f()}catch(g){e.error(g)}}))};return n.subscribe(H(e,h,()=>{d=!0,f()})),()=>{a?.()}}function oe(n,e,t=1/0){return I(e)?oe((i,r)=>O((s,o)=>e(i,s,r,o))(ae(n(i,r))),t):(typeof e=="number"&&(t=e),z((i,r)=>Tu(i,r,n,t)))}function zo(n=1/0){return oe(Ee,n)}function Cu(){return zo(1)}function An(...n){return Cu()(ne(n,xt(n)))}function Br(n){return new Y(e=>{ae(n()).subscribe(e)})}function Ce(n,e){return z((t,i)=>{let r=0;t.subscribe(H(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Mt(n){return z((e,t)=>{let i=null,r=!1,s;i=e.subscribe(H(t,void 0,void 0,o=>{s=ae(n(o,Mt(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Au(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(H(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function bt(n,e){return I(e)?oe(n,e,1):oe(n,1)}function St(n){return z((e,t)=>{let i=!1;e.subscribe(H(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function lt(n){return n<=0?()=>Te:z((e,t)=>{let i=0;e.subscribe(H(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Ho(n){return O(()=>n)}function Vr(n=ym){return z((e,t)=>{let i=!1;e.subscribe(H(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function ym(){return new ct}function jt(n){return z((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Ze(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Ce((r,s)=>n(r,s,i)):Ee,lt(1),t?St(e):Vr(()=>new ct))}function Dn(n){return n<=0?()=>Te:z((e,t)=>{let i=[];e.subscribe(H(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Go(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Ce((r,s)=>n(r,s,i)):Ee,Dn(1),t?St(e):Vr(()=>new ct))}function jo(n,e){return z(Au(n,e,arguments.length>=2,!0))}function Wo(...n){let e=xt(n);return z((t,i)=>{(e?An(n,t,e):An(n,t)).subscribe(i)})}function Ae(n,e){return z((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(H(i,c=>{r?.unsubscribe();let l=0,u=s++;ae(n(c,u)).subscribe(r=H(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function $o(n){return z((e,t)=>{ae(n).subscribe(H(t,()=>t.complete(),li)),!t.closed&&e.subscribe(t)})}function ce(n,e,t){let i=I(n)||e||t?{next:n,error:e,complete:t}:n;return i?z((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(H(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Ee}var cd="https://g.co/ng/security#xss",T=class extends Error{constructor(e,t){super(ls(e,t)),this.code=e}};function ls(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function us(n){return{toString:n}.toString()}var ui=globalThis;function J(n){for(let e in n)if(n[e]===J)return e;throw Error("Could not find renamed property on target object.")}function xe(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(xe).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Du(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var _m=J({__forward_ref__:J});function ld(n){return n.__forward_ref__=ld,n.toString=function(){return xe(this())},n}function Ne(n){return ud(n)?n():n}function ud(n){return typeof n=="function"&&n.hasOwnProperty(_m)&&n.__forward_ref__===ld}function E(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function wi(n){return{providers:n.providers||[],imports:n.imports||[]}}function ds(n){return Iu(n,hd)||Iu(n,fd)}function dd(n){return ds(n)!==null}function Iu(n,e){return n.hasOwnProperty(e)?n[e]:null}function xm(n){let e=n&&(n[hd]||n[fd]);return e||null}function Ru(n){return n&&(n.hasOwnProperty(Pu)||n.hasOwnProperty(Mm))?n[Pu]:null}var hd=J({\u0275prov:J}),Pu=J({\u0275inj:J}),fd=J({ngInjectableDef:J}),Mm=J({ngInjectorDef:J}),P=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=E({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function pd(n){return n&&!!n.\u0275providers}var bm=J({\u0275cmp:J}),Sm=J({\u0275dir:J}),wm=J({\u0275pipe:J}),Em=J({\u0275mod:J}),$r=J({\u0275fac:J}),di=J({__NG_ELEMENT_ID__:J}),Nu=J({__NG_ENV_ID__:J});function Oa(n){return typeof n=="string"?n:n==null?"":String(n)}function Tm(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Oa(n)}function Cm(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new T(-200,n)}function La(n,e){throw new T(-201,!1)}var U=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(U||{}),ia;function md(){return ia}function Pe(n){let e=ia;return ia=n,e}function gd(n,e,t){let i=ds(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&U.Optional)return null;if(e!==void 0)return e;La(n,"Injector")}var Am={},hi=Am,Dm="__NG_DI_FLAG__",qr="ngTempTokenPath",Im="ngTokenPath",Rm=/\n/gm,Pm="\u0275",Ou="__source",Nn;function Nm(){return Nn}function wt(n){let e=Nn;return Nn=n,e}function Om(n,e=U.Default){if(Nn===void 0)throw new T(-203,!1);return Nn===null?gd(n,void 0,e):Nn.get(n,e&U.Optional?null:void 0,e)}function R(n,e=U.Default){return(md()||Om)(Ne(n),e)}function b(n,e=U.Default){return R(n,hs(e))}function hs(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function ra(n){let e=[];for(let t=0;t<n.length;t++){let i=Ne(n[t]);if(Array.isArray(i)){if(i.length===0)throw new T(900,!1);let r,s=U.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Lm(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(R(r,s))}else e.push(R(i))}return e}function Lm(n){return n[Dm]}function Fm(n,e,t,i){let r=n[qr];throw e[Ou]&&r.unshift(e[Ou]),n.message=Um(`
`+n.message,r,t,i),n[Im]=r,n[qr]=null,n}function Um(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Pm?n.slice(2):n;let r=xe(e);if(Array.isArray(e))r=e.map(xe).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):xe(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Rm,`
  `)}`}function Ln(n,e){let t=n.hasOwnProperty($r);return t?n[$r]:null}function Fa(n,e){n.forEach(t=>Array.isArray(t)?Fa(t,e):e(t))}function vd(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Xr(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var fi={},Je=[],Fn=new P(""),yd=new P("",-1),_d=new P(""),Yr=class{get(e,t=hi){if(t===hi){let i=new Error(`NullInjectorError: No provider for ${xe(e)}!`);throw i.name="NullInjectorError",i}return t}},xd=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(xd||{}),et=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(et||{}),ut=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ut||{});function km(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function sa(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Vm(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Bm(n){return n===3||n===4||n===6}function Vm(n){return n.charCodeAt(0)===64}function Ua(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Lu(n,t,r,null,e[++i]):Lu(n,t,r,null,null))}}return n}function Lu(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Md="ng-template";function zm(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&km(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(ka(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function ka(n){return n.type===4&&n.value!==Md}function Hm(n,e,t){let i=n.type===4&&!t?Md:n.value;return e===i}function Gm(n,e,t){let i=4,r=n.attrs,s=r!==null?$m(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ze(i)&&!ze(c))return!1;if(o&&ze(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Hm(n,c,t)||c===""&&e.length===1){if(ze(i))return!1;o=!0}}else if(i&8){if(r===null||!zm(n,r,c,t)){if(ze(i))return!1;o=!0}}else{let l=e[++a],u=jm(c,r,ka(n),t);if(u===-1){if(ze(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(ze(i))return!1;o=!0}}}}return ze(i)||o}function ze(n){return(n&1)===0}function jm(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return qm(e,n)}function Wm(n,e,t=!1){for(let i=0;i<e.length;i++)if(Gm(n,e[i],t))return!0;return!1}function $m(n){for(let e=0;e<n.length;e++){let t=n[e];if(Bm(t))return e}return n.length}function qm(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Fu(n,e){return n?":not("+e.trim()+")":e}function Xm(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ze(o)&&(e+=Fu(s,r),r=""),i=o,s=s||!ze(i);t++}return r!==""&&(e+=Fu(s,r)),e}function Ym(n){return n.map(Xm).join(",")}function Zm(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ze(r))break;r=s}i++}return{attrs:e,classes:t}}function it(n){return us(()=>{let e=Td(n),t=te(S({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===xd.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||et.Emulated,styles:n.styles||Je,_:null,schemas:n.schemas||null,tView:null,id:""});Cd(t);let i=n.dependencies;return t.directiveDefs=ku(i,!1),t.pipeDefs=ku(i,!0),t.id=Qm(t),t})}function Jm(n){return qt(n)||bd(n)}function Km(n){return n!==null}function Ei(n){return us(()=>({type:n.type,bootstrap:n.bootstrap||Je,declarations:n.declarations||Je,imports:n.imports||Je,exports:n.exports||Je,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Uu(n,e){if(n==null)return fi;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=ut.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==ut.None?[i,a]:i,e[s]=o):t[s]=i}return t}function Ti(n){return us(()=>{let e=Td(n);return Cd(e),e})}function qt(n){return n[bm]||null}function bd(n){return n[Sm]||null}function Sd(n){return n[wm]||null}function wd(n){let e=qt(n)||bd(n)||Sd(n);return e!==null?e.standalone:!1}function Ed(n,e){let t=n[Em]||null;if(!t&&e===!0)throw new Error(`Type ${xe(n)} does not have '\u0275mod' property.`);return t}function Td(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||fi,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Je,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Uu(n.inputs,e),outputs:Uu(n.outputs),debugInfo:null}}function Cd(n){n.features?.forEach(e=>e(n))}function ku(n,e){if(!n)return null;let t=e?Sd:Jm;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(Km)}function Qm(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Bn(n){return{\u0275providers:n}}function eg(...n){return{\u0275providers:Ad(!0,n),\u0275fromNgModule:!0}}function Ad(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Fa(e,o=>{let a=o;oa(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Dd(r,s),t}function Dd(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Ba(r,s=>{e(s,i)})}}function oa(n,e,t,i){if(n=Ne(n),!n)return!1;let r=null,s=Ru(n),o=!s&&qt(n);if(!s&&!o){let c=n.ngModule;if(s=Ru(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)oa(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Fa(s.imports,u=>{oa(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Dd(l,e)}if(!a){let l=Ln(r)||(()=>new r);e({provide:r,useFactory:l,deps:Je},r),e({provide:_d,useValue:r,multi:!0},r),e({provide:Fn,useValue:()=>R(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Ba(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Ba(n,e){for(let t of n)pd(t)&&(t=t.\u0275providers),Array.isArray(t)?Ba(t,e):e(t)}var tg=J({provide:String,useValue:J});function Id(n){return n!==null&&typeof n=="object"&&tg in n}function ng(n){return!!(n&&n.useExisting)}function ig(n){return!!(n&&n.useFactory)}function aa(n){return typeof n=="function"}var fs=new P(""),zr={},rg={},qo;function Va(){return qo===void 0&&(qo=new Yr),qo}var Me=class{},pi=class extends Me{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,la(e,o=>this.processProvider(o)),this.records.set(yd,In(void 0,this)),r.has("environment")&&this.records.set(Me,In(void 0,this));let s=this.records.get(fs);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(_d,Je,U.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=X(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),X(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=wt(this),i=Pe(void 0),r;try{return e()}finally{wt(t),Pe(i)}}get(e,t=hi,i=U.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Nu))return e[Nu](this);i=hs(i);let r,s=wt(this),o=Pe(void 0);try{if(!(i&U.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=ug(e)&&ds(e);l&&this.injectableDefInScope(l)?c=In(ca(e),zr):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&U.Self?Va():this.parent;return t=i&U.Optional&&t===hi?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[qr]=a[qr]||[]).unshift(xe(e)),s)throw a;return Fm(a,e,"R3InjectorError",this.source)}else throw a}finally{Pe(o),wt(s)}}resolveInjectorInitializers(){let e=X(null),t=wt(this),i=Pe(void 0),r;try{let s=this.get(Fn,Je,U.Self);for(let o of s)o()}finally{wt(t),Pe(i),X(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(xe(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new T(205,!1)}processProvider(e){e=Ne(e);let t=aa(e)?e:Ne(e&&e.provide),i=og(e);if(!aa(e)&&e.multi===!0){let r=this.records.get(t);r||(r=In(void 0,zr,!0),r.factory=()=>ra(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=X(null);try{return t.value===zr&&(t.value=rg,t.value=t.factory()),typeof t.value=="object"&&t.value&&lg(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{X(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Ne(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ca(n){let e=ds(n),t=e!==null?e.factory:Ln(n);if(t!==null)return t;if(n instanceof P)throw new T(204,!1);if(n instanceof Function)return sg(n);throw new T(204,!1)}function sg(n){if(n.length>0)throw new T(204,!1);let t=xm(n);return t!==null?()=>t.factory(n):()=>new n}function og(n){if(Id(n))return In(void 0,n.useValue);{let e=ag(n);return In(e,zr)}}function ag(n,e,t){let i;if(aa(n)){let r=Ne(n);return Ln(r)||ca(r)}else if(Id(n))i=()=>Ne(n.useValue);else if(ig(n))i=()=>n.useFactory(...ra(n.deps||[]));else if(ng(n))i=()=>R(Ne(n.useExisting));else{let r=Ne(n&&(n.useClass||n.provide));if(cg(n))i=()=>new r(...ra(n.deps));else return Ln(r)||ca(r)}return i}function In(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function cg(n){return!!n.deps}function lg(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function ug(n){return typeof n=="function"||typeof n=="object"&&n instanceof P}function la(n,e){for(let t of n)Array.isArray(t)?la(t,e):t&&pd(t)?la(t.\u0275providers,e):e(t)}function ht(n,e){n instanceof pi&&n.assertNotDestroyed();let t,i=wt(n),r=Pe(void 0);try{return e()}finally{wt(i),Pe(r)}}function dg(){return md()!==void 0||Nm()!=null}function hg(n){return typeof n=="function"}var ft=0,G=1,C=2,he=3,Ge=4,$e=5,Zr=6,mi=7,je=8,Un=9,We=10,ge=11,gi=12,Bu=13,Vn=14,tt=15,ps=16,Rn=17,kn=18,ms=19,Rd=20,Et=21,Xo=22,Xt=23,Tt=25,Pd=1;var Yt=7,Jr=8,Kr=9,Oe=10,za=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(za||{});function Wt(n){return Array.isArray(n)&&typeof n[Pd]=="object"}function pt(n){return Array.isArray(n)&&n[Pd]===!0}function Nd(n){return(n.flags&4)!==0}function gs(n){return n.componentOffset>-1}function Ha(n){return(n.flags&1)===1}function Ci(n){return!!n.template}function fg(n){return(n[C]&512)!==0}var ua=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Od(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function vs(){return Ld}function Ld(n){return n.type.prototype.ngOnChanges&&(n.setInput=mg),pg}vs.ngInherit=!0;function pg(){let n=Ud(this),e=n?.current;if(e){let t=n.previous;if(t===fi)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function mg(n,e,t,i,r){let s=this.declaredInputs[i],o=Ud(n)||gg(n,{previous:fi,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new ua(l&&l.currentValue,t,c===fi),Od(n,e,r,t)}var Fd="__ngSimpleChanges__";function Ud(n){return n[Fd]||null}function gg(n,e){return n[Fd]=e}var Vu=null;var Ke=function(n,e,t){Vu?.(n,e,t)},vg="svg",yg="math",_g=!1;function xg(){return _g}function nt(n){for(;Array.isArray(n);)n=n[ft];return n}function Mg(n,e){return nt(e[n])}function qe(n,e){return nt(e[n.index])}function kd(n,e){return n.data[e]}function At(n,e){let t=e[n];return Wt(t)?t:t[ft]}function Ga(n){return(n[C]&128)===128}function bg(n){return pt(n[he])}function Qr(n,e){return e==null?null:n[e]}function Bd(n){n[Rn]=0}function Sg(n){n[C]&1024||(n[C]|=1024,Ga(n)&&vi(n))}function wg(n,e){for(;n>0;)e=e[Vn],n--;return e}function ja(n){return!!(n[C]&9216||n[Xt]?.dirty)}function da(n){n[We].changeDetectionScheduler?.notify(1),ja(n)?vi(n):n[C]&64&&(xg()?(n[C]|=1024,vi(n)):n[We].changeDetectionScheduler?.notify())}function vi(n){n[We].changeDetectionScheduler?.notify();let e=yi(n);for(;e!==null&&!(e[C]&8192||(e[C]|=8192,!Ga(e)));)e=yi(e)}function Vd(n,e){if((n[C]&256)===256)throw new T(911,!1);n[Et]===null&&(n[Et]=[]),n[Et].push(e)}function Eg(n,e){if(n[Et]===null)return;let t=n[Et].indexOf(e);t!==-1&&n[Et].splice(t,1)}function yi(n){let e=n[he];return pt(e)?e[he]:e}var j={lFrame:Xd(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Tg(){return j.lFrame.elementDepthCount}function Cg(){j.lFrame.elementDepthCount++}function Ag(){j.lFrame.elementDepthCount--}function zd(){return j.bindingsEnabled}function Dg(){return j.skipHydrationRootTNode!==null}function Ig(n){return j.skipHydrationRootTNode===n}function Rg(){j.skipHydrationRootTNode=null}function re(){return j.lFrame.lView}function Qt(){return j.lFrame.tView}function en(n){return j.lFrame.contextLView=n,n[je]}function tn(n){return j.lFrame.contextLView=null,n}function Xe(){let n=Hd();for(;n!==null&&n.type===64;)n=n.parent;return n}function Hd(){return j.lFrame.currentTNode}function Pg(){let n=j.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Ai(n,e){let t=j.lFrame;t.currentTNode=n,t.isParent=e}function Gd(){return j.lFrame.isParent}function Ng(){j.lFrame.isParent=!1}function Og(n){return j.lFrame.bindingIndex=n}function jd(){return j.lFrame.bindingIndex++}function Lg(){return j.lFrame.inI18n}function Fg(n,e){let t=j.lFrame;t.bindingIndex=t.bindingRootIndex=n,ha(e)}function Ug(){return j.lFrame.currentDirectiveIndex}function ha(n){j.lFrame.currentDirectiveIndex=n}function Wd(n){j.lFrame.currentQueryIndex=n}function kg(n){let e=n[G];return e.type===2?e.declTNode:e.type===1?n[$e]:null}function $d(n,e,t){if(t&U.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&U.Host);)if(r=kg(s),r===null||(s=s[Vn],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=j.lFrame=qd();return i.currentTNode=e,i.lView=n,!0}function Wa(n){let e=qd(),t=n[G];j.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function qd(){let n=j.lFrame,e=n===null?null:n.child;return e===null?Xd(n):e}function Xd(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Yd(){let n=j.lFrame;return j.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Zd=Yd;function $a(){let n=Yd();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Bg(n){return(j.lFrame.contextLView=wg(n,j.lFrame.contextLView))[je]}function qa(){return j.lFrame.selectedIndex}function Zt(n){j.lFrame.selectedIndex=n}function Vg(){let n=j.lFrame;return kd(n.tView,n.selectedIndex)}function zg(){return j.lFrame.currentNamespace}var Jd=!0;function Xa(){return Jd}function Ya(n){Jd=n}function Hg(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Ld(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Za(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Hr(n,e,t){Kd(n,e,3,t)}function Gr(n,e,t,i){(n[C]&3)===t&&Kd(n,e,t,i)}function Yo(n,e){let t=n[C];(t&3)===e&&(t&=16383,t+=1,n[C]=t)}function Kd(n,e,t,i){let r=i!==void 0?n[Rn]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Rn]+=65536),(a<s||s==-1)&&(Gg(n,t,e,c),n[Rn]=(n[Rn]&4294901760)+c+2),c++}function zu(n,e){Ke(4,n,e);let t=X(null);try{e.call(n)}finally{X(t),Ke(5,n,e)}}function Gg(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[C]>>14<n[Rn]>>16&&(n[C]&3)===e&&(n[C]+=16384,zu(a,s)):zu(a,s)}var On=-1,_i=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function jg(n){return n instanceof _i}function Wg(n){return(n.flags&8)!==0}function $g(n){return(n.flags&16)!==0}function Qd(n){return n!==On}function es(n){return n&32767}function qg(n){return n>>16}function ts(n,e){let t=qg(n),i=e;for(;t>0;)i=i[Vn],t--;return i}var fa=!0;function Hu(n){let e=fa;return fa=n,e}var Xg=256,eh=Xg-1,th=5,Yg=0,Qe={};function Zg(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(di)&&(i=t[di]),i==null&&(i=t[di]=Yg++);let r=i&eh,s=1<<r;e.data[n+(r>>th)]|=s}function nh(n,e){let t=ih(n,e);if(t!==-1)return t;let i=e[G];i.firstCreatePass&&(n.injectorIndex=e.length,Zo(i.data,n),Zo(e,null),Zo(i.blueprint,null));let r=Ja(n,e),s=n.injectorIndex;if(Qd(r)){let o=es(r),a=ts(r,e),c=a[G].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Zo(n,e){n.push(0,0,0,0,0,0,0,0,e)}function ih(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Ja(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=ch(r),i===null)return On;if(t++,r=r[Vn],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return On}function Jg(n,e,t){Zg(n,e,t)}function rh(n,e,t){if(t&U.Optional||n!==void 0)return n;La(e,"NodeInjector")}function sh(n,e,t,i){if(t&U.Optional&&i===void 0&&(i=null),!(t&(U.Self|U.Host))){let r=n[Un],s=Pe(void 0);try{return r?r.get(e,i,t&U.Optional):gd(e,i,t&U.Optional)}finally{Pe(s)}}return rh(i,e,t)}function oh(n,e,t,i=U.Default,r){if(n!==null){if(e[C]&2048&&!(i&U.Self)){let o=nv(n,e,t,i,Qe);if(o!==Qe)return o}let s=ah(n,e,t,i,Qe);if(s!==Qe)return s}return sh(e,t,i,r)}function ah(n,e,t,i,r){let s=ev(t);if(typeof s=="function"){if(!$d(e,n,i))return i&U.Host?rh(r,t,i):sh(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&U.Optional))La(t);else return o}finally{Zd()}}else if(typeof s=="number"){let o=null,a=ih(n,e),c=On,l=i&U.Host?e[tt][$e]:null;for((a===-1||i&U.SkipSelf)&&(c=a===-1?Ja(n,e):e[a+8],c===On||!ju(i,!1)?a=-1:(o=e[G],a=es(c),e=ts(c,e)));a!==-1;){let u=e[G];if(Gu(s,a,u.data)){let d=Kg(a,e,t,o,i,l);if(d!==Qe)return d}c=e[a+8],c!==On&&ju(i,e[G].data[a+8]===l)&&Gu(s,a,e)?(o=u,a=es(c),e=ts(c,e)):a=-1}}return r}function Kg(n,e,t,i,r,s){let o=e[G],a=o.data[n+8],c=i==null?gs(a)&&fa:i!=o&&(a.type&3)!==0,l=r&U.Host&&s===a,u=Qg(a,o,t,c,l);return u!==null?xi(e,o,u,a):Qe}function Qg(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let p=o[h];if(h<c&&t===p||h>=c&&p.type===t)return h}if(r){let h=o[c];if(h&&Ci(h)&&h.type===t)return c}return null}function xi(n,e,t,i){let r=n[t],s=e.data;if(jg(r)){let o=r;o.resolving&&Cm(Tm(s[t]));let a=Hu(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Pe(o.injectImpl):null,u=$d(n,i,U.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Hg(t,s[t],e)}finally{l!==null&&Pe(l),Hu(a),o.resolving=!1,Zd()}}return r}function ev(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(di)?n[di]:void 0;return typeof e=="number"?e>=0?e&eh:tv:e}function Gu(n,e,t){let i=1<<n;return!!(t[e+(n>>th)]&i)}function ju(n,e){return!(n&U.Self)&&!(n&U.Host&&e)}var $t=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return oh(this._tNode,this._lView,e,hs(i),t)}};function tv(){return new $t(Xe(),re())}function Ka(n){return us(()=>{let e=n.prototype.constructor,t=e[$r]||pa(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[$r]||pa(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function pa(n){return ud(n)?()=>{let e=pa(Ne(n));return e&&e()}:Ln(n)}function nv(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[C]&2048&&!(o[C]&512);){let a=ah(s,o,t,i|U.Self,Qe);if(a!==Qe)return a;let c=s.parent;if(!c){let l=o[Rd];if(l){let u=l.get(t,Qe,i);if(u!==Qe)return u}c=ch(o),o=o[Vn]}s=c}return r}function ch(n){let e=n[G],t=e.type;return t===2?e.declTNode:t===1?n[$e]:null}function Wu(n,e=null,t=null,i){let r=lh(n,e,t,i);return r.resolveInjectorInitializers(),r}function lh(n,e=null,t=null,i,r=new Set){let s=[t||Je,eg(n)];return i=i||(typeof n=="object"?void 0:xe(n)),new pi(s,e||Va(),i||null,r)}var Di=(()=>{class n{static{this.THROW_IF_NOT_FOUND=hi}static{this.NULL=new Yr}static create(t,i){if(Array.isArray(t))return Wu({name:""},i,t,"");{let r=t.name??"";return Wu({name:r},t.parent,t.providers,r)}}static{this.\u0275prov=E({token:n,providedIn:"any",factory:()=>R(yd)})}static{this.__NG_ELEMENT_ID__=-1}}return n})();var iv="ngOriginalError";function Jo(n){return n[iv]}var dt=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Jo(e);for(;t&&Jo(t);)t=Jo(t);return t||null}},uh=new P("",{providedIn:"root",factory:()=>b(dt).handleError.bind(void 0)}),dh=(()=>{class n{static{this.__NG_ELEMENT_ID__=rv}static{this.__NG_ENV_ID__=t=>t}}return n})(),ma=class extends dh{constructor(e){super(),this._lView=e}onDestroy(e){return Vd(this._lView,e),()=>Eg(this._lView,e)}};function rv(){return new ma(re())}function sv(){return ys(Xe(),re())}function ys(n,e){return new Ii(qe(n,e))}var Ii=(()=>{class n{constructor(t){this.nativeElement=t}static{this.__NG_ELEMENT_ID__=sv}}return n})();var ga=class extends me{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,dg()&&(this.destroyRef=b(dh,{optional:!0})??void 0)}emit(e){let t=X(null);try{super.next(e)}finally{X(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Ko(s),r&&(r=Ko(r)),o&&(o=Ko(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof se&&e.add(a),a}};function Ko(n){return e=>{setTimeout(n,void 0,e)}}var He=ga;function hh(n){return(n.flags&128)===128}var fh=new Map,ov=0;function av(){return ov++}function cv(n){fh.set(n[ms],n)}function lv(n){fh.delete(n[ms])}var $u="__ngContext__";function Jt(n,e){Wt(e)?(n[$u]=e[ms],cv(e)):n[$u]=e}function ph(n){return gh(n[gi])}function mh(n){return gh(n[Ge])}function gh(n){for(;n!==null&&!pt(n);)n=n[Ge];return n}var va;function vh(n){va=n}function uv(){if(va!==void 0)return va;if(typeof document<"u")return document;throw new T(210,!1)}var Qa=new P("",{providedIn:"root",factory:()=>dv}),dv="ng",ec=new P(""),Dt=new P("",{providedIn:"platform",factory:()=>"unknown"});var tc=new P("",{providedIn:"root",factory:()=>uv().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var hv="h",fv="b";var pv=()=>null;function nc(n,e,t=!1){return pv(n,e,t)}var yh=!1,mv=new P("",{providedIn:"root",factory:()=>yh});var ns=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${cd})`}};function ic(n){return n instanceof ns?n.changingThisBreaksApplicationSecurity:n}function _h(n,e){let t=gv(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${cd})`)}return t===e}function gv(n){return n instanceof ns&&n.getTypeName()||null}var vv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function xh(n){return n=String(n),n.match(vv)?n:"unsafe:"+n}var rc=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(rc||{});function Mh(n){let e=yv();return e?e.sanitize(rc.URL,n)||"":_h(n,"URL")?ic(n):xh(Oa(n))}function yv(){let n=re();return n&&n[We].sanitizer}function bh(n){return n instanceof Function?n():n}var nn=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(nn||{}),_v;function sc(n,e){return _v(n,e)}function Pn(n,e,t,i,r){if(i!=null){let s,o=!1;pt(i)?s=i:Wt(i)&&(o=!0,i=i[ft]);let a=nt(i);n===0&&t!==null?r==null?Ch(e,t,a):is(e,t,a,r||null,!0):n===1&&t!==null?is(e,t,a,r||null,!0):n===2?Fv(e,a,o):n===3&&e.destroyNode(a),s!=null&&kv(e,n,s,t,r)}}function xv(n,e){return n.createText(e)}function Mv(n,e,t){n.setValue(e,t)}function Sh(n,e,t){return n.createElement(e,t)}function bv(n,e){wh(n,e),e[ft]=null,e[$e]=null}function Sv(n,e,t,i,r,s){i[ft]=r,i[$e]=e,_s(n,i,t,1,r,s)}function wh(n,e){e[We].changeDetectionScheduler?.notify(1),_s(n,e,e[ge],2,null,null)}function wv(n){let e=n[gi];if(!e)return Qo(n[G],n);for(;e;){let t=null;if(Wt(e))t=e[gi];else{let i=e[Oe];i&&(t=i)}if(!t){for(;e&&!e[Ge]&&e!==n;)Wt(e)&&Qo(e[G],e),e=e[he];e===null&&(e=n),Wt(e)&&Qo(e[G],e),t=e&&e[Ge]}e=t}}function Ev(n,e,t,i){let r=Oe+i,s=t.length;i>0&&(t[r-1][Ge]=e),i<s-Oe?(e[Ge]=t[r],vd(t,Oe+i,e)):(t.push(e),e[Ge]=null),e[he]=t;let o=e[ps];o!==null&&t!==o&&Tv(o,e);let a=e[kn];a!==null&&a.insertView(n),da(e),e[C]|=128}function Tv(n,e){let t=n[Kr],r=e[he][he][tt];e[tt]!==r&&(n[C]|=za.HasTransplantedViews),t===null?n[Kr]=[e]:t.push(e)}function Eh(n,e){let t=n[Kr],i=t.indexOf(e);t.splice(i,1)}function ya(n,e){if(n.length<=Oe)return;let t=Oe+e,i=n[t];if(i){let r=i[ps];r!==null&&r!==n&&Eh(r,i),e>0&&(n[t-1][Ge]=i[Ge]);let s=Xr(n,Oe+e);bv(i[G],i);let o=s[kn];o!==null&&o.detachView(s[G]),i[he]=null,i[Ge]=null,i[C]&=-129}return i}function Th(n,e){if(!(e[C]&256)){let t=e[ge];t.destroyNode&&_s(n,e,t,3,null,null),wv(e)}}function Qo(n,e){if(e[C]&256)return;let t=X(null);try{e[C]&=-129,e[C]|=256,e[Xt]&&Ql(e[Xt]),Av(n,e),Cv(n,e),e[G].type===1&&e[ge].destroy();let i=e[ps];if(i!==null&&pt(e[he])){i!==e[he]&&Eh(i,e);let r=e[kn];r!==null&&r.detachView(n)}lv(e)}finally{X(t)}}function Cv(n,e){let t=n.cleanup,i=e[mi];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[mi]=null);let r=e[Et];if(r!==null){e[Et]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Av(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof _i)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Ke(4,a,c);try{c.call(a)}finally{Ke(5,a,c)}}else{Ke(4,r,s);try{s.call(r)}finally{Ke(5,r,s)}}}}}function Dv(n,e,t){return Iv(n,e.parent,t)}function Iv(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[ft];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===et.None||s===et.Emulated)return null}return qe(i,t)}}function is(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Ch(n,e,t){n.appendChild(e,t)}function qu(n,e,t,i,r){i!==null?is(n,e,t,i,r):Ch(n,e,t)}function Rv(n,e,t,i){n.removeChild(e,t,i)}function oc(n,e){return n.parentNode(e)}function Pv(n,e){return n.nextSibling(e)}function Nv(n,e,t){return Lv(n,e,t)}function Ov(n,e,t){return n.type&40?qe(n,t):null}var Lv=Ov,Xu;function ac(n,e,t,i){let r=Dv(n,i,e),s=e[ge],o=i.parent||e[$e],a=Nv(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)qu(s,r,t[c],a,!1);else qu(s,r,t,a,!1);Xu!==void 0&&Xu(s,i,e,t,r)}function jr(n,e){if(e!==null){let t=e.type;if(t&3)return qe(e,n);if(t&4)return _a(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return jr(n,i);{let r=n[e.index];return pt(r)?_a(-1,r):nt(r)}}else{if(t&32)return sc(e,n)()||nt(n[e.index]);{let i=Ah(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=yi(n[tt]);return jr(r,i)}else return jr(n,e.next)}}}return null}function Ah(n,e){if(e!==null){let i=n[tt][$e],r=e.projection;return i.projection[r]}return null}function _a(n,e){let t=Oe+n+1;if(t<e.length){let i=e[t],r=i[G].firstChild;if(r!==null)return jr(i,r)}return e[Yt]}function Fv(n,e,t){let i=oc(n,e);i&&Rv(n,i,e,t)}function cc(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Jt(nt(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)cc(n,e,t.child,i,r,s,!1),Pn(e,n,r,a,s);else if(c&32){let l=sc(t,i),u;for(;u=l();)Pn(e,n,r,u,s);Pn(e,n,r,a,s)}else c&16?Uv(n,e,i,t,r,s):Pn(e,n,r,a,s);t=o?t.projectionNext:t.next}}function _s(n,e,t,i,r,s){cc(t,i,n.firstChild,e,r,s,!1)}function Uv(n,e,t,i,r,s){let o=t[tt],c=o[$e].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Pn(e,n,r,u,s)}else{let l=c,u=o[he];hh(i)&&(l.flags|=128),cc(n,e,l,u,r,s,!0)}}function kv(n,e,t,i,r){let s=t[Yt],o=nt(t);s!==o&&Pn(e,n,i,s,r);for(let a=Oe;a<t.length;a++){let c=t[a];_s(c[G],c,n,e,i,s)}}function Bv(n,e,t){n.setAttribute(e,"style",t)}function Dh(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Ih(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&sa(n,e,i),r!==null&&Dh(n,e,r),s!==null&&Bv(n,e,s)}var xs={};function be(n=1){Rh(Qt(),re(),qa()+n,!1)}function Rh(n,e,t,i){if(!i)if((e[C]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Hr(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Gr(e,s,0,t)}Zt(t)}function ve(n,e=U.Default){let t=re();if(t===null)return R(n,e);let i=Xe();return oh(i,t,Ne(n),e)}function Ph(n,e,t,i,r,s){let o=X(null);try{let a=null;r&ut.SignalBased&&(a=e[i][Yl]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&ut.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):Od(e,a,i,s)}finally{X(o)}}function Vv(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Zt(~r);else{let s=r,o=t[++i],a=t[++i];Fg(o,s);let c=e[s];a(2,c)}}}finally{Zt(-1)}}function Ms(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ft]=r,d[C]=i|4|128|8|64,(l!==null||n&&n[C]&2048)&&(d[C]|=2048),Bd(d),d[he]=d[Vn]=n,d[je]=t,d[We]=o||n&&n[We],d[ge]=a||n&&n[ge],d[Un]=c||n&&n[Un]||null,d[$e]=s,d[ms]=av(),d[Zr]=u,d[Rd]=l,d[tt]=e.type==2?n[tt]:d,d}function bs(n,e,t,i,r){let s=n.data[e];if(s===null)s=zv(n,e,t,i,r),Lg()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Pg();s.injectorIndex=o===null?-1:o.injectorIndex}return Ai(s,!0),s}function zv(n,e,t,i,r){let s=Hd(),o=Gd(),a=o?s:s&&s.parent,c=n.data[e]=$v(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Nh(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Oh(n,e,t,i,r){let s=qa(),o=i&2;try{Zt(-1),o&&e.length>Tt&&Rh(n,e,Tt,!1),Ke(o?2:0,r),t(i,r)}finally{Zt(s),Ke(o?3:1,r)}}function Lh(n,e,t){if(Nd(e)){let i=X(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{X(i)}}}function Fh(n,e,t){zd()&&(Qv(n,e,t,qe(t,e)),(t.flags&64)===64&&zh(n,e,t))}function Uh(n,e,t=qe){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function kh(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=lc(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function lc(n,e,t,i,r,s,o,a,c,l,u){let d=Tt+i,f=d+r,h=Hv(d,f),p=typeof l=="function"?l():l;return h[G]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1,ssrId:u}}function Hv(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:xs);return t}function Gv(n,e,t,i){let s=i.get(mv,yh)||t===et.ShadowDom,o=n.selectRootElement(e,s);return jv(o),o}function jv(n){Wv(n)}var Wv=()=>null;function $v(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Dg()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Yu(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=ut.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Zu(i,t,l,a,c):Zu(i,t,l,a)}return i}function Zu(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function qv(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,p=f?f.outputs:null;c=Yu(0,d.inputs,u,c,h),l=Yu(1,d.outputs,u,l,p);let m=c!==null&&o!==null&&!ka(e)?cy(c,u,o):null;a.push(m)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function Xv(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Yv(n,e,t,i,r,s,o,a){let c=qe(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(uc(n,t,u,i,r),gs(e)&&Zv(t,e.index)):e.type&3?(i=Xv(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function Zv(n,e){let t=At(e,n);t[C]&16||(t[C]|=64)}function Bh(n,e,t,i){if(zd()){let r=i===null?null:{"":-1},s=ty(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&Vh(n,e,t,o,r,a),r&&ny(t,i,r)}t.mergedAttrs=Ua(t.mergedAttrs,t.attrs)}function Vh(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Jg(nh(t,e),n,i[l].type);ry(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Nh(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Ua(t.mergedAttrs,u.hostAttrs),sy(n,t,e,c,u),iy(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}qv(n,t,s)}function Jv(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Kv(o)!=a&&o.push(a),o.push(t,i,s)}}function Kv(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Qv(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;gs(t)&&oy(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||nh(t,e),Jt(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=xi(e,n,a,t);if(Jt(l,e),o!==null&&ay(e,a-r,l,c,t,o),Ci(c)){let u=At(t.index,e);u[je]=xi(e,n,a,t)}}}function zh(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Ug();try{Zt(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];ha(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&ey(c,l)}}finally{Zt(-1),ha(o)}}function ey(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function ty(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Wm(e,o.selectors,!1))if(i||(i=[]),Ci(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;xa(n,e,c)}else i.unshift(o),xa(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function xa(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function ny(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new T(-301,!1);i.push(e[r],s)}}}function iy(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ci(e)&&(t[""]=n)}}function ry(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function sy(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ln(r.type,!0)),o=new _i(s,Ci(r),ve);n.blueprint[i]=o,t[i]=o,Jv(n,e,i,Nh(n,t,r.hostVars,xs),r)}function oy(n,e,t){let i=qe(e,n),r=kh(t),s=n[We].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Ss(n,Ms(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function ay(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Ph(i,t,c,l,u,d)}}function cy(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Hh(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Gh(n,e){let t=n.contentQueries;if(t!==null){let i=X(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Wd(s),a.contentQueries(2,e[o],o)}}}finally{X(i)}}}function Ss(n,e){return n[gi]?n[Bu][Ge]=e:n[gi]=e,n[Bu]=e,e}function Ma(n,e,t){Wd(0);let i=X(null);try{e(n,t)}finally{X(i)}}function ly(n){return n[mi]||(n[mi]=[])}function uy(n){return n.cleanup||(n.cleanup=[])}function jh(n,e){let t=n[Un],i=t?t.get(dt,null):null;i&&i.handleError(e)}function uc(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Ph(u,l,i,a,c,r)}}function dy(n,e,t){let i=Mg(e,n);Mv(n[ge],i,t)}function hy(n,e){let t=At(e,n),i=t[G];fy(i,t);let r=t[ft];r!==null&&t[Zr]===null&&(t[Zr]=nc(r,t[Un])),dc(i,t,t[je])}function fy(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function dc(n,e,t){Wa(e);try{let i=n.viewQuery;i!==null&&Ma(1,i,t);let r=n.template;r!==null&&Oh(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[kn]?.finishViewCreation(n),n.staticContentQueries&&Gh(n,e),n.staticViewQueries&&Ma(2,n.viewQuery,t);let s=n.components;s!==null&&py(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[C]&=-5,$a()}}function py(n,e){for(let t=0;t<e.length;t++)hy(n,e[t])}function my(n,e,t,i){let r=X(null);try{let s=e.tView,a=n[C]&4096?4096:16,c=Ms(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[ps]=l;let u=n[kn];return u!==null&&(c[kn]=u.createEmbeddedView(s)),dc(s,c,t),c}finally{X(r)}}function Ju(n,e){return!e||e.firstChild===null||hh(n)}function gy(n,e,t,i=!0){let r=e[G];if(Ev(r,e,n,t),i){let o=_a(t,n),a=e[ge],c=oc(a,n[Yt]);c!==null&&Sv(r,n[$e],a,e,c,o)}let s=e[Zr];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function rs(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(nt(s)),pt(s)&&vy(s,i);let o=t.type;if(o&8)rs(n,e,t.child,i);else if(o&32){let a=sc(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Ah(e,t);if(Array.isArray(a))i.push(...a);else{let c=yi(e[tt]);rs(c[G],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function vy(n,e){for(let t=Oe;t<n.length;t++){let i=n[t],r=i[G].firstChild;r!==null&&rs(i[G],i,r,e)}n[Yt]!==n[ft]&&e.push(n[Yt])}var Wh=[];function yy(n){return n[Xt]??_y(n)}function _y(n){let e=Wh.pop()??Object.create(My);return e.lView=n,e}function xy(n){n.lView[Xt]!==n&&(n.lView=null,Wh.push(n))}var My=te(S({},Zl),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{vi(n.lView)},consumerOnSignalRead(){this.lView[Xt]=this}}),$h=100;function qh(n,e=!0,t=0){let i=n[We],r=i.rendererFactory,s=!1;s||r.begin?.();try{by(n,t)}catch(o){throw e&&jh(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function by(n,e){ba(n,e);let t=0;for(;ja(n);){if(t===$h)throw new T(103,!1);t++,ba(n,1)}}function Sy(n,e,t,i){let r=e[C];if((r&256)===256)return;let s=!1;!s&&e[We].inlineEffectRunner?.flush(),Wa(e);let o=null,a=null;!s&&wy(n)&&(a=yy(e),o=Jl(a));try{Bd(e),Og(n.bindingStartIndex),t!==null&&Oh(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&Hr(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Gr(e,d,0,null),Yo(e,0)}if(Ey(e),Xh(e,0),n.contentQueries!==null&&Gh(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&Hr(e,d)}else{let d=n.contentHooks;d!==null&&Gr(e,d,1),Yo(e,1)}Vv(n,e);let l=n.components;l!==null&&Zh(e,l,0);let u=n.viewQuery;if(u!==null&&Ma(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&Hr(e,d)}else{let d=n.viewHooks;d!==null&&Gr(e,d,2),Yo(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Xo]){for(let d of e[Xo])d();e[Xo]=null}s||(e[C]&=-73)}catch(c){throw vi(e),c}finally{a!==null&&(Kl(a,o),xy(a)),$a()}}function wy(n){return n.type!==2}function Xh(n,e){for(let t=ph(n);t!==null;t=mh(t))for(let i=Oe;i<t.length;i++){let r=t[i];Yh(r,e)}}function Ey(n){for(let e=ph(n);e!==null;e=mh(e)){if(!(e[C]&za.HasTransplantedViews))continue;let t=e[Kr];for(let i=0;i<t.length;i++){let r=t[i],s=r[he];Sg(r)}}}function Ty(n,e,t){let i=At(e,n);Yh(i,t)}function Yh(n,e){Ga(n)&&ba(n,e)}function ba(n,e){let i=n[G],r=n[C],s=n[Xt],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ao(s)),s&&(s.dirty=!1),n[C]&=-9217,o)Sy(i,n,i.template,n[je]);else if(r&8192){Xh(n,1);let a=i.components;a!==null&&Zh(n,a,1)}}function Zh(n,e,t){for(let i=0;i<e.length;i++)Ty(n,e[i],t)}function hc(n){for(n[We].changeDetectionScheduler?.notify();n;){n[C]|=64;let e=yi(n);if(fg(n)&&!e)return n;n=e}return null}var Kt=class{get rootNodes(){let e=this._lView,t=e[G];return rs(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[je]}set context(e){this._lView[je]=e}get destroyed(){return(this._lView[C]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[he];if(pt(e)){let t=e[Jr],i=t?t.indexOf(this):-1;i>-1&&(ya(e,i),Xr(t,i))}this._attachedToViewContainer=!1}Th(this._lView[G],this._lView)}onDestroy(e){Vd(this._lView,e)}markForCheck(){hc(this._cdRefInjectingView||this._lView)}detach(){this._lView[C]&=-129}reattach(){da(this._lView),this._lView[C]|=128}detectChanges(){this._lView[C]|=1024,qh(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new T(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,wh(this._lView[G],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new T(902,!1);this._appRef=e,da(this._lView)}},fc=(()=>{class n{static{this.__NG_ELEMENT_ID__=Dy}}return n})(),Cy=fc,Ay=class extends Cy{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=my(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Kt(r)}};function Dy(){return Iy(Xe(),re())}function Iy(n,e){return n.type&4?new Ay(e,n,ys(n,e)):null}var aI=new RegExp(`^(\\d+)*(${fv}|${hv})*(.*)`);var Ry=()=>null;function Ku(n,e){return Ry(n,e)}var Sa=class{},wa=class{},ss=class{};function Py(n){let e=Error(`No component factory found for ${xe(n)}.`);return e[Ny]=n,e}var Ny="ngComponent";var Ea=class{resolveComponentFactory(e){throw Py(e)}},ws=(()=>{class n{static{this.NULL=new Ea}}return n})(),Mi=class{},Es=(()=>{class n{constructor(){this.destroyNode=null}static{this.__NG_ELEMENT_ID__=()=>Oy()}}return n})();function Oy(){let n=re(),e=Xe(),t=At(e.index,n);return(Wt(t)?t:n)[ge]}var Ly=(()=>{class n{static{this.\u0275prov=E({token:n,providedIn:"root",factory:()=>null})}}return n})(),ea={};var Qu=new Set;function pc(n){Qu.has(n)||(Qu.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function ed(...n){}function Fy(){let n=typeof ui.requestAnimationFrame=="function",e=ui[n?"requestAnimationFrame":"setTimeout"],t=ui[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var ie=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new He(!1),this.onMicrotaskEmpty=new He(!1),this.onStable=new He(!1),this.onError=new He(!1),typeof Zone>"u")throw new T(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=Fy().nativeRequestAnimationFrame,By(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new T(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new T(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Uy,ed,ed);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Uy={};function mc(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function ky(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(ui,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Ta(n),n.isCheckStableRunning=!0,mc(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Ta(n))}function By(n){let e=()=>{ky(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(Vy(a))return t.invokeTask(r,s,o,a);try{return td(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),nd(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return td(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),nd(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ta(n),mc(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ta(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function td(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function nd(n){n._nesting--,mc(n)}function Vy(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var Jh=(()=>{class n{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let t=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let i of t)i()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}static{this.\u0275prov=E({token:n,providedIn:"root",factory:()=>new n})}}return n})();function Ca(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Du(r,a);else if(s==2){let c=a,l=e[++o];i=Du(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var os=class extends ws{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=qt(e);return new bi(t,this.ngModule)}};function id(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function zy(n){let e=n.toLowerCase();return e==="svg"?vg:e==="math"?yg:null}var Aa=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=hs(i);let r=this.injector.get(e,ea,i);return r!==ea||t===ea?r:this.parentInjector.get(e,t,i)}},bi=class extends ss{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=id(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return id(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=Ym(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=X(null);try{r=r||this.ngModule;let o=r instanceof Me?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Aa(e,o):e,c=a.get(Mi,null);if(c===null)throw new T(407,!1);let l=a.get(Ly,null),u=a.get(Jh,null),d=a.get(Sa,null),f={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},h=c.createRenderer(null,this.componentDef),p=this.componentDef.selectors[0][0]||"div",m=i?Gv(h,i,this.componentDef.encapsulation,a):Sh(h,p,zy(p)),v=512;this.componentDef.signals?v|=4096:this.componentDef.onPush||(v|=16);let g=null;m!==null&&(g=nc(m,a,!0));let $=lc(0,null,null,1,0,null,null,null,null,null,null),w=Ms(null,$,null,v,null,null,f,h,a,null,g);Wa(w);let L,D;try{let B=this.componentDef,F,Be=null;B.findHostDirectiveDefs?(F=[],Be=new Map,B.findHostDirectiveDefs(B,F,Be),F.push(B)):F=[B];let yn=Hy(w,m),_n=Gy(yn,m,B,F,w,f,h);D=kd($,Tt),m&&$y(h,B,m,i),t!==void 0&&qy(D,this.ngContentSelectors,t),L=Wy(_n,B,F,Be,w,[Xy]),dc($,w,null)}finally{$a()}return new Da(this.componentType,L,ys(D,w),w,D)}finally{X(s)}}},Da=class extends wa{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Kt(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;uc(s[G],s,r,e,t),this.previousInputValues.set(e,t);let o=At(this._tNode.index,s);hc(o)}}get injector(){return new $t(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Hy(n,e){let t=n[G],i=Tt;return n[i]=e,bs(t,i,2,"#host",null)}function Gy(n,e,t,i,r,s,o){let a=r[G];jy(i,n,e,o);let c=null;e!==null&&(c=nc(e,r[Un]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Ms(r,kh(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&xa(a,n,i.length-1),Ss(r,d),r[n.index]=d}function jy(n,e,t,i){for(let r of n)e.mergedAttrs=Ua(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Ca(e,e.mergedAttrs,!0),t!==null&&Ih(i,t,e))}function Wy(n,e,t,i,r,s){let o=Xe(),a=r[G],c=qe(o,r);Vh(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=xi(r,a,d,o);Jt(f,r)}zh(a,r,o),c&&Jt(c,r);let l=xi(r,a,o.directiveStart+o.componentOffset,o);if(n[je]=r[je]=l,s!==null)for(let u of s)u(l,e);return Lh(a,o,r),l}function $y(n,e,t,i){if(i)sa(n,t,["ng-version","17.3.12"]);else{let{attrs:r,classes:s}=Zm(e.selectors[0]);r&&sa(n,t,r),s&&s.length>0&&Dh(n,t,s.join(" "))}}function qy(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function Xy(){let n=Xe();Za(re()[G],n)}var Ri=(()=>{class n{static{this.__NG_ELEMENT_ID__=Yy}}return n})();function Yy(){let n=Xe();return Jy(n,re())}var Zy=Ri,Kh=class extends Zy{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ys(this._hostTNode,this._hostLView)}get injector(){return new $t(this._hostTNode,this._hostLView)}get parentInjector(){let e=Ja(this._hostTNode,this._hostLView);if(Qd(e)){let t=ts(e,this._hostLView),i=es(e),r=t[G].data[i+8];return new $t(r,t)}else return new $t(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=rd(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Oe}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Ku(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Ju(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!hg(e),a;if(o)a=t;else{let p=t||{};a=p.index,i=p.injector,r=p.projectableNodes,s=p.environmentInjector||p.ngModuleRef}let c=o?e:new bi(qt(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let m=(o?l:this.parentInjector).get(Me,null);m&&(s=m)}let u=qt(c.componentType??{}),d=Ku(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,Ju(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(bg(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[he],l=new Kh(c,c[$e],c[he]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return gy(o,r,s,i),e.attachToViewContainerRef(),vd(ta(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=rd(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=ya(this._lContainer,t);i&&(Xr(ta(this._lContainer),t),Th(i[G],i))}detach(e){let t=this._adjustIndex(e,-1),i=ya(this._lContainer,t);return i&&Xr(ta(this._lContainer),t)!=null?new Kt(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function rd(n){return n[Jr]}function ta(n){return n[Jr]||(n[Jr]=[])}function Jy(n,e){let t,i=e[n.index];return pt(i)?t=i:(t=Hh(i,e,null,n),e[n.index]=t,Ss(e,t)),Qy(t,e,n,i),new Kh(t,n,e)}function Ky(n,e){let t=n[ge],i=t.createComment(""),r=qe(e,n),s=oc(t,r);return is(t,s,i,Pv(t,r),!1),i}var Qy=n0,e0=()=>!1;function t0(n,e,t){return e0(n,e,t)}function n0(n,e,t,i){if(n[Yt])return;let r;t.type&8?r=nt(i):r=Ky(e,t),n[Yt]=r}var Ct=class{},Si=class{};var Ia=class extends Ct{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new os(this);let r=Ed(e);this._bootstrapComponents=bh(r.bootstrap),this._r3Injector=lh(e,t,[{provide:Ct,useValue:this},{provide:ws,useValue:this.componentFactoryResolver},...i],xe(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Ra=class extends Si{constructor(e){super(),this.moduleType=e}create(e){return new Ia(this.moduleType,e,[])}};var as=class extends Ct{constructor(e){super(),this.componentFactoryResolver=new os(this),this.instance=null;let t=new pi([...e.providers,{provide:Ct,useValue:this},{provide:ws,useValue:this.componentFactoryResolver}],e.parent||Va(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function gc(n,e,t=null){return new as({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var zn=(()=>{class n{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new ue(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Qh(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function i0(n){return(n.flags&32)===32}function r0(n,e,t,i,r,s,o,a,c){let l=e.consts,u=bs(e,n,4,o||null,Qr(l,a));Bh(e,t,u,Qr(l,c)),Za(e,u);let d=u.tView=lc(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function vc(n,e,t,i,r,s,o,a){let c=re(),l=Qt(),u=n+Tt,d=l.firstCreatePass?r0(u,l,c,e,t,i,r,s,o):l.data[u];Ai(d,!1);let f=s0(l,c,d,n);Xa()&&ac(l,c,f,d),Jt(f,c);let h=Hh(f,c,f,d);return c[u]=h,Ss(c,h),t0(h,d,c),Ha(d)&&Fh(l,c,d),o!=null&&Uh(c,d,a),vc}var s0=o0;function o0(n,e,t,i){return Ya(!0),e[ge].createComment("")}function a0(n,e,t,i){return Qh(n,jd(),t)?e+Oa(t)+i:xs}function Se(n,e,t){let i=re(),r=jd();if(Qh(i,r,e)){let s=Qt(),o=Vg();Yv(s,o,i,n,e,i[ge],t,!1)}return Se}function sd(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";uc(n,t,s[o],o,i)}function c0(n,e,t,i,r,s){let o=e.consts,a=Qr(o,r),c=bs(e,n,2,i,a);return Bh(e,t,c,Qr(o,s)),c.attrs!==null&&Ca(c,c.attrs,!1),c.mergedAttrs!==null&&Ca(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function _(n,e,t,i){let r=re(),s=Qt(),o=Tt+n,a=r[ge],c=s.firstCreatePass?c0(o,s,r,e,t,i):s.data[o],l=l0(s,r,c,a,e,n);r[o]=l;let u=Ha(c);return Ai(c,!0),Ih(a,l,c),!i0(c)&&Xa()&&ac(s,r,l,c),Tg()===0&&Jt(l,r),Cg(),u&&(Fh(s,r,c),Lh(s,c,r)),i!==null&&Uh(r,c),_}function y(){let n=Xe();Gd()?Ng():(n=n.parent,Ai(n,!1));let e=n;Ig(e)&&Rg(),Ag();let t=Qt();return t.firstCreatePass&&(Za(t,n),Nd(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Wg(e)&&sd(t,e,re(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&$g(e)&&sd(t,e,re(),e.stylesWithoutHost,!1),y}function q(n,e,t,i){return _(n,e,t,i),y(),q}var l0=(n,e,t,i,r,s)=>(Ya(!0),Sh(i,r,zg()));function ef(){return re()}var cs="en-US";var u0=cs;function d0(n){typeof n=="string"&&(u0=n.toLowerCase().replace(/_/g,"-"))}function Q(n,e,t,i){let r=re(),s=Qt(),o=Xe();return f0(s,r,r[ge],o,n,e,i),Q}function h0(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[mi],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function f0(n,e,t,i,r,s,o){let a=Ha(i),l=n.firstCreatePass&&uy(n),u=e[je],d=ly(e),f=!0;if(i.type&3||o){let m=qe(i,e),v=o?o(m):m,g=d.length,$=o?L=>o(nt(L[i.index])):i.index,w=null;if(!o&&a&&(w=h0(n,e,r,i.index)),w!==null){let L=w.__ngLastListenerFn__||w;L.__ngNextListenerFn__=s,w.__ngLastListenerFn__=s,f=!1}else{s=ad(i,e,u,s,!1);let L=t.listen(v,r,s);d.push(s,L),l&&l.push(r,$,g,g+1)}}else s=ad(i,e,u,s,!1);let h=i.outputs,p;if(f&&h!==null&&(p=h[r])){let m=p.length;if(m)for(let v=0;v<m;v+=2){let g=p[v],$=p[v+1],D=e[g][$].subscribe(s),B=d.length;d.push(s,D),l&&l.push(r,i.index,B,-(B+1))}}}function od(n,e,t,i){let r=X(null);try{return Ke(6,e,t),t(i)!==!1}catch(s){return jh(n,s),!1}finally{Ke(7,e,t),X(r)}}function ad(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?At(n.index,e):e;hc(a);let c=od(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=od(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function rn(n=1){return Bg(n)}function x(n,e=""){let t=re(),i=Qt(),r=n+Tt,s=i.firstCreatePass?bs(i,r,1,e,null):i.data[r],o=p0(i,t,s,e,n);t[r]=o,Xa()&&ac(i,t,o,s),Ai(s,!1)}var p0=(n,e,t,i,r)=>(Ya(!0),xv(e[ge],i));function Ts(n){return Cs("",n,""),Ts}function Cs(n,e,t){let i=re(),r=a0(i,n,e,t);return r!==xs&&dy(i,qa(),r),Cs}var m0=(()=>{class n{constructor(t){this._injector=t,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Ad(!1,t.type),r=i.length>0?gc([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static{this.\u0275prov=E({token:n,providedIn:"environment",factory:()=>new n(R(Me))})}}return n})();function rt(n){pc("NgStandalone"),n.getStandaloneInjector=e=>e.get(m0).getOrCreateStandaloneInjector(n)}var As=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"platform"})}}return n})();var tf=new P("");function Pi(n){return!!n&&typeof n.then=="function"}function nf(n){return!!n&&typeof n.subscribe=="function"}var rf=new P(""),sf=(()=>{class n{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i}),this.appInits=b(rf,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=r();if(Pi(s))t.push(s);else if(nf(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Ds=new P("");function g0(){eu(()=>{throw new T(600,!1)})}function v0(n){return n.isBoundToModule}function y0(n,e,t){try{let i=t();return Pi(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Hn=(()=>{class n{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=b(uh),this.afterRenderEffectManager=b(Jh),this.externalTestViews=new Set,this.beforeRender=new me,this.afterTick=new me,this.componentTypes=[],this.components=[],this.isStable=b(zn).hasPendingTasks.pipe(O(t=>!t)),this._injector=b(Me)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(t,i){let r=t instanceof ss;if(!this._injector.get(sf).done){let f=!r&&wd(t),h=!1;throw new T(405,h)}let o;r?o=t:o=this._injector.get(ws).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=v0(o)?void 0:this._injector.get(Ct),c=i||o.selector,l=o.create(Di.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(tf,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),na(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),l}tick(){this._tick(!0)}_tick(t){if(this._runningTick)throw new T(101,!1);let i=X(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(t)}catch(r){this.internalErrorHandler(r)}finally{this.afterTick.next(),this._runningTick=!1,X(i)}}detectChangesInAttachedViews(t){let i=0,r=this.afterRenderEffectManager;for(;;){if(i===$h)throw new T(103,!1);if(t){let s=i===0;this.beforeRender.next(s);for(let{_lView:o,notifyErrorHandler:a}of this._views)_0(o,s,a)}if(i++,r.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:s})=>Pa(s))&&(r.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:s})=>Pa(s))))break}}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;na(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t);let i=this._injector.get(Ds,[]);[...this._bootstrapListeners,...i].forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>na(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new T(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function na(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function _0(n,e,t){!e&&!Pa(n)||x0(n,t,e)}function Pa(n){return ja(n)}function x0(n,e,t){let i;t?(i=0,n[C]|=1024):n[C]&64?i=0:i=1,qh(n,e,i)}var Na=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},yc=(()=>{class n{compileModuleSync(t){return new Ra(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Ed(t),s=bh(r.declarations).reduce((o,a)=>{let c=qt(a);return c&&o.push(new bi(c)),o},[]);return new Na(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var M0=(()=>{class n{constructor(){this.zone=b(ie),this.applicationRef=b(Hn)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function b0(n){return[{provide:ie,useFactory:n},{provide:Fn,multi:!0,useFactory:()=>{let e=b(M0,{optional:!0});return()=>e.initialize()}},{provide:Fn,multi:!0,useFactory:()=>{let e=b(T0);return()=>{e.initialize()}}},{provide:uh,useFactory:S0}]}function S0(){let n=b(ie),e=b(dt);return t=>n.runOutsideAngular(()=>e.handleError(t))}function w0(n){let e=b0(()=>new ie(E0(n)));return Bn([[],e])}function E0(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var T0=(()=>{class n{constructor(){this.subscription=new se,this.initialized=!1,this.zone=b(ie),this.pendingTasks=b(zn)}initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{ie.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{ie.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function C0(){return typeof $localize<"u"&&$localize.locale||cs}var _c=new P("",{providedIn:"root",factory:()=>b(_c,U.Optional|U.SkipSelf)||C0()});var of=new P("");var Wr=null;function A0(n=[],e){return Di.create({name:e,providers:[{provide:fs,useValue:"platform"},{provide:of,useValue:new Set([()=>Wr=null])},...n]})}function D0(n=[]){if(Wr)return Wr;let e=A0(n);return Wr=e,g0(),I0(e),e}function I0(n){n.get(ec,null)?.forEach(t=>t())}var Ni=(()=>{class n{static{this.__NG_ELEMENT_ID__=R0}}return n})();function R0(n){return P0(Xe(),re(),(n&16)===16)}function P0(n,e,t){if(gs(n)&&!t){let i=At(n.index,e);return new Kt(i,i)}else if(n.type&47){let i=e[tt];return new Kt(i,e)}return null}function af(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=D0(i),s=[w0(),...t||[]],a=new as({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(ie);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(dt,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:h=>{l.handleError(h)}})});let d=()=>a.destroy(),f=r.get(of);return f.add(d),a.onDestroy(()=>{u.unsubscribe(),f.delete(d)}),y0(l,c,()=>{let h=a.get(sf);return h.runInitializers(),h.donePromise.then(()=>{let p=a.get(_c,cs);d0(p||cs);let m=a.get(Hn);return e!==void 0&&m.bootstrap(e),m})})})}catch(e){return Promise.reject(e)}}var ff=null;function Gn(){return ff}function pf(n){ff??=n}var Is=class{};var we=new P(""),mf=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(F0),providedIn:"platform"})}}return n})();var F0=(()=>{class n extends mf{constructor(){super(),this._doc=b(we),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Gn().getBaseHref(this._doc)}onPopState(t){let i=Gn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Gn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function gf(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function cf(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function sn(n){return n&&n[0]!=="?"?"?"+n:n}var Rs=(()=>{class n{historyGo(t){throw new Error("")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(vf),providedIn:"root"})}}return n})(),U0=new P(""),vf=(()=>{class n extends Rs{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??b(we).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return gf(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+sn(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+sn(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+sn(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static{this.\u0275fac=function(i){return new(i||n)(R(mf),R(U0,8))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Oi=(()=>{class n{constructor(t){this._subject=new He,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=V0(cf(lf(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+sn(i))}normalize(t){return n.stripTrailingSlash(B0(this._basePath,lf(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+sn(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+sn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i,complete:r})}static{this.normalizeQueryParams=sn}static{this.joinWithSlash=gf}static{this.stripTrailingSlash=cf}static{this.\u0275fac=function(i){return new(i||n)(R(Rs))}}static{this.\u0275prov=E({token:n,factory:()=>k0(),providedIn:"root"})}}return n})();function k0(){return new Oi(R(Rs))}function B0(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function lf(n){return n.replace(/\/index.html$/,"")}function V0(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Ps(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var xc=/\s+/,uf=[],Wn=(()=>{class n{constructor(t,i){this._ngEl=t,this._renderer=i,this.initialClasses=uf,this.stateMap=new Map}set klass(t){this.initialClasses=t!=null?t.trim().split(xc):uf}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(xc):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(xc).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static{this.\u0275fac=function(i){return new(i||n)(ve(Ii),ve(Es))}}static{this.\u0275dir=Ti({type:n,selectors:[["","ngClass",""]],inputs:{klass:[ut.None,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return n})();var yf=(()=>{class n{constructor(t,i){this._viewContainer=t,this._context=new Mc,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){df("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){df("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(t,i){return!0}static{this.\u0275fac=function(i){return new(i||n)(ve(Ri),ve(fc))}}static{this.\u0275dir=Ti({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0})}}return n})(),Mc=class{constructor(){this.$implicit=null,this.ngIf=null}};function df(n,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${n} must be a TemplateRef, but received '${xe(e)}'.`)}var gt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Ei({type:n})}static{this.\u0275inj=wi({})}}return n})(),_f="browser",z0="server";function Ns(n){return n===z0}var jn=class{};var Fi=class{},Fs=class{},on=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Sc=class{encodeKey(e){return xf(e)}encodeValue(e){return xf(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function j0(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],c=t.get(o)||[];c.push(a),t.set(o,c)}),t}var W0=/%(\d[a-f0-9])/gi,$0={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xf(n){return encodeURIComponent(n).replace(W0,(e,t)=>$0[t]??e)}function Ls(n){return`${n}`}var It=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Sc,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=j0(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(Ls):[Ls(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(s=>{t.push({param:i,value:s,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(Ls(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(Ls(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var wc=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function q0(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Mf(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function bf(n){return typeof Blob<"u"&&n instanceof Blob}function Sf(n){return typeof FormData<"u"&&n instanceof FormData}function X0(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Li=class n{constructor(e,t,i,r){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(q0(this.method)||r?(this.body=i!==void 0?i:null,s=r):s=i,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new on,this.context??=new wc,!this.params)this.params=new It,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Mf(this.body)||bf(this.body)||Sf(this.body)||X0(this.body)?this.body:this.body instanceof It?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Sf(this.body)?null:bf(this.body)?this.body.type||null:Mf(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof It?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,s=e.transferCache??this.transferCache,o=e.body!==void 0?e.body:this.body,a=e.withCredentials??this.withCredentials,c=e.reportProgress??this.reportProgress,l=e.headers||this.headers,u=e.params||this.params,d=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((f,h)=>f.set(h,e.setHeaders[h]),l)),e.setParams&&(u=Object.keys(e.setParams).reduce((f,h)=>f.set(h,e.setParams[h]),u)),new n(t,i,o,{params:u,headers:l,context:d,reportProgress:c,responseType:r,withCredentials:a,transferCache:s})}},$n=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}($n||{}),Ui=class{constructor(e,t=Bs.Ok,i="OK"){this.headers=e.headers||new on,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Ec=class n extends Ui{constructor(e={}){super(e),this.type=$n.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Us=class n extends Ui{constructor(e={}){super(e),this.type=$n.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ks=class extends Ui{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Bs=function(n){return n[n.Continue=100]="Continue",n[n.SwitchingProtocols=101]="SwitchingProtocols",n[n.Processing=102]="Processing",n[n.EarlyHints=103]="EarlyHints",n[n.Ok=200]="Ok",n[n.Created=201]="Created",n[n.Accepted=202]="Accepted",n[n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",n[n.NoContent=204]="NoContent",n[n.ResetContent=205]="ResetContent",n[n.PartialContent=206]="PartialContent",n[n.MultiStatus=207]="MultiStatus",n[n.AlreadyReported=208]="AlreadyReported",n[n.ImUsed=226]="ImUsed",n[n.MultipleChoices=300]="MultipleChoices",n[n.MovedPermanently=301]="MovedPermanently",n[n.Found=302]="Found",n[n.SeeOther=303]="SeeOther",n[n.NotModified=304]="NotModified",n[n.UseProxy=305]="UseProxy",n[n.Unused=306]="Unused",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.PaymentRequired=402]="PaymentRequired",n[n.Forbidden=403]="Forbidden",n[n.NotFound=404]="NotFound",n[n.MethodNotAllowed=405]="MethodNotAllowed",n[n.NotAcceptable=406]="NotAcceptable",n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",n[n.RequestTimeout=408]="RequestTimeout",n[n.Conflict=409]="Conflict",n[n.Gone=410]="Gone",n[n.LengthRequired=411]="LengthRequired",n[n.PreconditionFailed=412]="PreconditionFailed",n[n.PayloadTooLarge=413]="PayloadTooLarge",n[n.UriTooLong=414]="UriTooLong",n[n.UnsupportedMediaType=415]="UnsupportedMediaType",n[n.RangeNotSatisfiable=416]="RangeNotSatisfiable",n[n.ExpectationFailed=417]="ExpectationFailed",n[n.ImATeapot=418]="ImATeapot",n[n.MisdirectedRequest=421]="MisdirectedRequest",n[n.UnprocessableEntity=422]="UnprocessableEntity",n[n.Locked=423]="Locked",n[n.FailedDependency=424]="FailedDependency",n[n.TooEarly=425]="TooEarly",n[n.UpgradeRequired=426]="UpgradeRequired",n[n.PreconditionRequired=428]="PreconditionRequired",n[n.TooManyRequests=429]="TooManyRequests",n[n.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",n[n.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",n[n.InternalServerError=500]="InternalServerError",n[n.NotImplemented=501]="NotImplemented",n[n.BadGateway=502]="BadGateway",n[n.ServiceUnavailable=503]="ServiceUnavailable",n[n.GatewayTimeout=504]="GatewayTimeout",n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported",n[n.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",n[n.InsufficientStorage=507]="InsufficientStorage",n[n.LoopDetected=508]="LoopDetected",n[n.NotExtended=510]="NotExtended",n[n.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",n}(Bs||{});function bc(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Y0=(()=>{class n{constructor(t){this.handler=t}request(t,i,r={}){let s;if(t instanceof Li)s=t;else{let c;r.headers instanceof on?c=r.headers:c=new on(r.headers);let l;r.params&&(r.params instanceof It?l=r.params:l=new It({fromObject:r.params})),s=new Li(t,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let o=A(s).pipe(bt(c=>this.handler.handle(c)));if(t instanceof Li||r.observe==="events")return o;let a=o.pipe(Ce(c=>c instanceof Us));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(O(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return a.pipe(O(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return a.pipe(O(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return a.pipe(O(c=>c.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new It().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,bc(r,i))}post(t,i,r={}){return this.request("POST",t,bc(r,i))}put(t,i,r={}){return this.request("PUT",t,bc(r,i))}static{this.\u0275fac=function(i){return new(i||n)(R(Fi))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})();function Z0(n,e){return e(n)}function J0(n,e,t){return(i,r)=>ht(t,()=>e(i,s=>n(s,r)))}var Tf=new P(""),K0=new P(""),Q0=new P("");var wf=(()=>{class n extends Fi{constructor(t,i){super(),this.backend=t,this.injector=i,this.chain=null,this.pendingTasks=b(zn);let r=b(Q0,{optional:!0});this.backend=r??t}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Tf),...this.injector.get(K0,[])]));this.chain=r.reduceRight((s,o)=>J0(s,o,this.injector),Z0)}let i=this.pendingTasks.add();return this.chain(t,r=>this.backend.handle(r)).pipe(jt(()=>this.pendingTasks.remove(i)))}static{this.\u0275fac=function(i){return new(i||n)(R(Fs),R(Me))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})();var e_=/^\)\]\}',?\n/;function t_(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Ef=(()=>{class n{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new T(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?ne(i.\u0275loadImpl()):A(null)).pipe(Ae(()=>new Y(s=>{let o=i.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((m,v)=>o.setRequestHeader(m,v.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let m=t.detectContentTypeHeader();m!==null&&o.setRequestHeader("Content-Type",m)}if(t.responseType){let m=t.responseType.toLowerCase();o.responseType=m!=="json"?m:"text"}let a=t.serializeBody(),c=null,l=()=>{if(c!==null)return c;let m=o.statusText||"OK",v=new on(o.getAllResponseHeaders()),g=t_(o)||t.url;return c=new Ec({headers:v,status:o.status,statusText:m,url:g}),c},u=()=>{let{headers:m,status:v,statusText:g,url:$}=l(),w=null;v!==Bs.NoContent&&(w=typeof o.response>"u"?o.responseText:o.response),v===0&&(v=w?Bs.Ok:0);let L=v>=200&&v<300;if(t.responseType==="json"&&typeof w=="string"){let D=w;w=w.replace(e_,"");try{w=w!==""?JSON.parse(w):null}catch(B){w=D,L&&(L=!1,w={error:B,text:w})}}L?(s.next(new Us({body:w,headers:m,status:v,statusText:g,url:$||void 0})),s.complete()):s.error(new ks({error:w,headers:m,status:v,statusText:g,url:$||void 0}))},d=m=>{let{url:v}=l(),g=new ks({error:m,status:o.status||0,statusText:o.statusText||"Unknown Error",url:v||void 0});s.error(g)},f=!1,h=m=>{f||(s.next(l()),f=!0);let v={type:$n.DownloadProgress,loaded:m.loaded};m.lengthComputable&&(v.total=m.total),t.responseType==="text"&&o.responseText&&(v.partialText=o.responseText),s.next(v)},p=m=>{let v={type:$n.UploadProgress,loaded:m.loaded};m.lengthComputable&&(v.total=m.total),s.next(v)};return o.addEventListener("load",u),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),t.reportProgress&&(o.addEventListener("progress",h),a!==null&&o.upload&&o.upload.addEventListener("progress",p)),o.send(a),s.next({type:$n.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",u),o.removeEventListener("timeout",d),t.reportProgress&&(o.removeEventListener("progress",h),a!==null&&o.upload&&o.upload.removeEventListener("progress",p)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(i){return new(i||n)(R(jn))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),Cf=new P(""),n_="XSRF-TOKEN",i_=new P("",{providedIn:"root",factory:()=>n_}),r_="X-XSRF-TOKEN",s_=new P("",{providedIn:"root",factory:()=>r_}),Vs=class{},o_=(()=>{class n{constructor(t,i,r){this.doc=t,this.platform=i,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ps(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(i){return new(i||n)(R(we),R(Dt),R(i_))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})();function a_(n,e){let t=n.url.toLowerCase();if(!b(Cf)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let i=b(Vs).getToken(),r=b(s_);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),e(n)}function Af(...n){let e=[Y0,Ef,wf,{provide:Fi,useExisting:wf},{provide:Fs,useExisting:Ef},{provide:Tf,useValue:a_,multi:!0},{provide:Cf,useValue:!0},{provide:Vs,useClass:o_}];for(let t of n)e.push(...t.\u0275providers);return Bn(e)}var Ac=class extends Is{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Dc=class n extends Ac{static makeCurrent(){pf(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=l_();return t==null?null:u_(t)}resetBaseElement(){ki=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ps(document.cookie,e)}},ki=null;function l_(){return ki=ki||document.querySelector("base"),ki?ki.getAttribute("href"):null}function u_(n){return new URL(n,document.baseURI).pathname}var d_=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),Ic=new P(""),Pf=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new T(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(R(Ic),R(ie))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),zs=class{constructor(e){this._doc=e}},Tc="ng-app-id",Nf=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Ns(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${Tc}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(Tc),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(Tc,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(R(we),R(Qa),R(tc,8),R(Dt))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),Cc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Pc=/%COMP%/g,Of="%COMP%",h_=`_nghost-${Of}`,f_=`_ngcontent-${Of}`,p_=!0,m_=new P("",{providedIn:"root",factory:()=>p_});function g_(n){return f_.replace(Pc,n)}function v_(n){return h_.replace(Pc,n)}function Lf(n,e){return e.map(t=>t.replace(Pc,n))}var Df=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Ns(a),this.defaultRenderer=new Bi(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===et.ShadowDom&&(i=te(S({},i),{encapsulation:et.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Hs?r.applyToHost(t):r instanceof Vi&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(i.encapsulation){case et.Emulated:s=new Hs(c,l,i,this.appId,u,o,a,d);break;case et.ShadowDom:return new Rc(c,l,t,i,o,a,this.nonce,d);default:s=new Vi(c,l,i,u,o,a,d);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(R(Pf),R(Nf),R(Qa),R(m_),R(we),R(Dt),R(ie),R(tc))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),Bi=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Cc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(If(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(If(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new T(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Cc[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Cc[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(nn.DashCase|nn.Important)?e.style.setProperty(t,i,r&nn.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&nn.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Gn().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function If(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Rc=class extends Bi{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Lf(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Vi=class extends Bi{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Lf(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Hs=class extends Vi{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=g_(l),this.hostAttr=v_(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},y_=(()=>{class n extends zs{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(R(we))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})(),Rf=["alt","control","meta","shift"],__={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},x_={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},M_=(()=>{class n extends zs{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gn().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Rf.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=__[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Rf.forEach(o=>{if(o!==r){let a=x_[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(R(we))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac})}}return n})();function Ff(n,e){return af(S({rootComponent:n},b_(e)))}function b_(n){return{appProviders:[...C_,...n?.providers??[]],platformProviders:T_}}function S_(){Dc.makeCurrent()}function w_(){return new dt}function E_(){return vh(document),document}var T_=[{provide:Dt,useValue:_f},{provide:ec,useValue:S_,multi:!0},{provide:we,useFactory:E_,deps:[]}];var C_=[{provide:fs,useValue:"root"},{provide:dt,useFactory:w_,deps:[]},{provide:Ic,useClass:y_,multi:!0,deps:[we,ie,Dt]},{provide:Ic,useClass:M_,multi:!0,deps:[we]},Df,Nf,Pf,{provide:Mi,useExisting:Df},{provide:jn,useClass:d_,deps:[]},[]];var Uf=(()=>{class n{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(i){return new(i||n)(R(we))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var N="primary",tr=Symbol("RouteTitle"),Uc=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Jn(n){return new Uc(n)}function D_(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function I_(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!st(n[t],e[t]))return!1;return!0}function st(n,e){let t=n?kc(n):void 0,i=e?kc(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Gf(n[r],e[r]))return!1;return!0}function kc(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Gf(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function jf(n){return n.length>0?n[n.length-1]:null}function Nt(n){return Vo(n)?n:Pi(n)?ne(Promise.resolve(n)):A(n)}var R_={exact:$f,subset:qf},Wf={exact:P_,subset:N_,ignored:()=>!0};function kf(n,e,t){return R_[t.paths](n.root,e.root,t.matrixParams)&&Wf[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function P_(n,e){return st(n,e)}function $f(n,e,t){if(!cn(n.segments,e.segments)||!Ws(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!$f(n.children[i],e.children[i],t))return!1;return!0}function N_(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Gf(n[t],e[t]))}function qf(n,e,t){return Xf(n,e,e.segments,t)}function Xf(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!cn(r,t)||e.hasChildren()||!Ws(r,t,i))}else if(n.segments.length===t.length){if(!cn(n.segments,t)||!Ws(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!qf(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!cn(n.segments,r)||!Ws(n.segments,r,i)||!n.children[N]?!1:Xf(n.children[N],e,s,i)}}function Ws(n,e,t){return e.every((i,r)=>Wf[t](n[r].parameters,i.parameters))}var Rt=class{constructor(e=new Z([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Jn(this.queryParams),this._queryParamMap}toString(){return F_.serialize(this)}},Z=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $s(this)}},an=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Jn(this.parameters),this._parameterMap}toString(){return Zf(this)}};function O_(n,e){return cn(n,e)&&n.every((t,i)=>st(t.parameters,e[i].parameters))}function cn(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function L_(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===N&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==N&&(t=t.concat(e(r,i)))}),t}var ul=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>new Xs,providedIn:"root"})}}return n})(),Xs=class{parse(e){let t=new Vc(e);return new Rt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${zi(e.root,!0)}`,i=B_(e.queryParams),r=typeof e.fragment=="string"?`#${U_(e.fragment)}`:"";return`${t}${i}${r}`}},F_=new Xs;function $s(n){return n.segments.map(e=>Zf(e)).join("/")}function zi(n,e){if(!n.hasChildren())return $s(n);if(e){let t=n.children[N]?zi(n.children[N],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==N&&i.push(`${r}:${zi(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=L_(n,(i,r)=>r===N?[zi(n.children[N],!1)]:[`${r}:${zi(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[N]!=null?`${$s(n)}/${t[0]}`:`${$s(n)}/(${t.join("//")})`}}function Yf(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Gs(n){return Yf(n).replace(/%3B/gi,";")}function U_(n){return encodeURI(n)}function Bc(n){return Yf(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function qs(n){return decodeURIComponent(n)}function Bf(n){return qs(n.replace(/\+/g,"%20"))}function Zf(n){return`${Bc(n.path)}${k_(n.parameters)}`}function k_(n){return Object.entries(n).map(([e,t])=>`;${Bc(e)}=${Bc(t)}`).join("")}function B_(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Gs(t)}=${Gs(r)}`).join("&"):`${Gs(t)}=${Gs(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var V_=/^[^\/()?;#]+/;function Nc(n){let e=n.match(V_);return e?e[0]:""}var z_=/^[^\/()?;=#]+/;function H_(n){let e=n.match(z_);return e?e[0]:""}var G_=/^[^=?&#]+/;function j_(n){let e=n.match(G_);return e?e[0]:""}var W_=/^[^&#]+/;function $_(n){let e=n.match(W_);return e?e[0]:""}var Vc=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Z([],{}):new Z([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[N]=new Z(e,t)),i}parseSegment(){let e=Nc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new T(4009,!1);return this.capture(e),new an(qs(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=H_(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Nc(this.remaining);r&&(i=r,this.capture(i))}e[qs(t)]=qs(i)}parseQueryParam(e){let t=j_(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=$_(this.remaining);o&&(i=o,this.capture(i))}let r=Bf(t),s=Bf(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Nc(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new T(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=N);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[N]:new Z([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new T(4011,!1)}};function Jf(n){return n.segments.length>0?new Z([],{[N]:n}):n}function Kf(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Kf(r);if(i===N&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new Z(n.segments,e);return q_(t)}function q_(n){if(n.numberOfChildren===1&&n.children[N]){let e=n.children[N];return new Z(n.segments.concat(e.segments),e.children)}return n}function Kn(n){return n instanceof Rt}function X_(n,e,t=null,i=null){let r=Qf(n);return ep(r,e,t,i)}function Qf(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new Z(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Jf(i);return e??r}function ep(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Oc(r,r,r,t,i);let s=Y_(e);if(s.toRoot())return Oc(r,r,new Z([],{}),t,i);let o=Z_(s,r,n),a=o.processChildren?ji(o.segmentGroup,o.index,s.commands):np(o.segmentGroup,o.index,s.commands);return Oc(r,o.segmentGroup,a,t,i)}function Ys(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function qi(n){return typeof n=="object"&&n!=null&&n.outlets}function Oc(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=tp(n,e,t);let a=Jf(Kf(o));return new Rt(a,s,r)}function tp(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=tp(s,e,t)}),new Z(n.segments,i)}var Zs=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Ys(i[0]))throw new T(4003,!1);let r=i.find(qi);if(r&&r!==jf(i))throw new T(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Y_(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Zs(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Zs(t,e,i)}var Yn=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function Z_(n,e,t){if(n.isAbsolute)return new Yn(e,!0,0);if(!t)return new Yn(e,!1,NaN);if(t.parent===null)return new Yn(t,!0,0);let i=Ys(n.commands[0])?0:1,r=t.segments.length-1+i;return J_(t,r,n.numberOfDoubleDots)}function J_(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new T(4005,!1);r=i.segments.length}return new Yn(i,!1,r-s)}function K_(n){return qi(n[0])?n[0].outlets:{[N]:n}}function np(n,e,t){if(n??=new Z([],{}),n.segments.length===0&&n.hasChildren())return ji(n,e,t);let i=Q_(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new Z(n.segments.slice(0,i.pathIndex),{});return s.children[N]=new Z(n.segments.slice(i.pathIndex),n.children),ji(s,0,r)}else return i.match&&r.length===0?new Z(n.segments,{}):i.match&&!n.hasChildren()?zc(n,e,t):i.match?ji(n,0,r):zc(n,e,t)}function ji(n,e,t){if(t.length===0)return new Z(n.segments,{});{let i=K_(t),r={};if(Object.keys(i).some(s=>s!==N)&&n.children[N]&&n.numberOfChildren===1&&n.children[N].segments.length===0){let s=ji(n.children[N],e,t);return new Z(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=np(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new Z(n.segments,r)}}function Q_(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(qi(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!zf(c,l,o))return s;i+=2}else{if(!zf(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function zc(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(qi(s)){let c=ex(s.outlets);return new Z(i,c)}if(r===0&&Ys(t[0])){let c=n.segments[e];i.push(new an(c.path,Vf(t[0]))),r++;continue}let o=qi(s)?s.outlets[N]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Ys(a)?(i.push(new an(o,Vf(a))),r+=2):(i.push(new an(o,{})),r++)}return new Z(i,{})}function ex(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=zc(new Z([],{}),0,i))}),e}function Vf(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function zf(n,e,t){return n==t.path&&st(e,t.parameters)}var Wi="imperative",de=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(de||{}),Le=class{constructor(e,t){this.id=e,this.url=t}},Xi=class extends Le{constructor(e,t,i="imperative",r=null){super(e,t),this.type=de.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ln=class extends Le{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=de.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ie=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Ie||{}),Hc=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Hc||{}),Pt=class extends Le{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=de.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},un=class extends Le{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=de.NavigationSkipped}},Yi=class extends Le{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=de.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Js=class extends Le{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=de.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gc=class extends Le{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=de.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jc=class extends Le{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=de.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Wc=class extends Le{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=de.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$c=class extends Le{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=de.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qc=class{constructor(e){this.route=e,this.type=de.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Xc=class{constructor(e){this.route=e,this.type=de.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Yc=class{constructor(e){this.snapshot=e,this.type=de.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zc=class{constructor(e){this.snapshot=e,this.type=de.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jc=class{constructor(e){this.snapshot=e,this.type=de.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kc=class{constructor(e){this.snapshot=e,this.type=de.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Zi=class{},Ji=class{constructor(e){this.url=e}};var Qc=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new io,this.attachRef=null}},io=(()=>{class n{constructor(){this.contexts=new Map}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Qc,this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Ks=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=el(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=el(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=tl(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return tl(e,this._root).map(t=>t.value)}};function el(n,e){if(n===e.value)return e;for(let t of e.children){let i=el(n,t);if(i)return i}return null}function tl(n,e){if(n===e.value)return[e];for(let t of e.children){let i=tl(n,t);if(i.length)return i.unshift(e),i}return[]}var De=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Xn(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Qs=class extends Ks{constructor(e,t){super(e),this.snapshot=t,hl(this,e)}toString(){return this.snapshot.toString()}};function ip(n){let e=tx(n),t=new ue([new an("",{})]),i=new ue({}),r=new ue({}),s=new ue({}),o=new ue(""),a=new Qn(t,i,s,o,r,N,n,e.root);return a.snapshot=e.root,new Qs(new De(a,[]),e)}function tx(n){let e={},t={},i={},r="",s=new Ki([],e,i,r,t,N,n,null,{});return new eo("",new De(s,[]))}var Qn=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(O(l=>l[tr]))??A(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(O(e=>Jn(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(O(e=>Jn(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function dl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:S(S({},e.params),n.params),data:S(S({},e.data),n.data),resolve:S(S(S(S({},n.data),e.data),r?.data),n._resolvedData)}:i={params:S({},n.params),data:S({},n.data),resolve:S(S({},n.data),n._resolvedData??{})},r&&sp(r)&&(i.resolve[tr]=r.title),i}var Ki=class{get title(){return this.data?.[tr]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Jn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Jn(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},eo=class extends Ks{constructor(e,t){super(t),this.url=e,hl(this,t)}toString(){return rp(this._root)}};function hl(n,e){e.value._routerState=n,e.children.forEach(t=>hl(n,t))}function rp(n){let e=n.children.length>0?` { ${n.children.map(rp).join(", ")} } `:"";return`${n.value}${e}`}function Lc(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,st(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),st(e.params,t.params)||n.paramsSubject.next(t.params),I_(e.url,t.url)||n.urlSubject.next(t.url),st(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function nl(n,e){let t=st(n.params,e.params)&&O_(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||nl(n.parent,e.parent))}function sp(n){return typeof n.title=="string"||n.title===null}var nx=(()=>{class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=N,this.activateEvents=new He,this.deactivateEvents=new He,this.attachEvents=new He,this.detachEvents=new He,this.parentContexts=b(io),this.location=b(Ri),this.changeDetector=b(Ni),this.environmentInjector=b(Me),this.inputBinder=b(fl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new T(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new T(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new T(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new T(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new il(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=Ti({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[vs]})}}return n})(),il=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Qn?this.route:e===io?this.childContexts:this.parent.get(e,t)}},fl=new P("");function ix(n,e,t){let i=Qi(n,e._root,t?t._root:void 0);return new Qs(i,e)}function Qi(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=rx(n,e,t);return new De(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Qi(n,a)),o}}let i=sx(e.value),r=e.children.map(s=>Qi(n,s));return new De(i,r)}}function rx(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Qi(n,i,r);return Qi(n,i)})}function sx(n){return new Qn(new ue(n.url),new ue(n.params),new ue(n.queryParams),new ue(n.fragment),new ue(n.data),n.outlet,n.component,n)}var op="ngNavigationCancelingError";function ap(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Kn(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=cp(!1,Ie.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function cp(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[op]=!0,t.cancellationCode=e,t}function ox(n){return lp(n)&&Kn(n.url)}function lp(n){return!!n&&n[op]}var ax=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=it({type:n,selectors:[["ng-component"]],standalone:!0,features:[rt],decls:1,vars:0,template:function(i,r){i&1&&q(0,"router-outlet")},dependencies:[nx],encapsulation:2})}}return n})();function cx(n,e){return n.providers&&!n._injector&&(n._injector=gc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function pl(n){let e=n.children&&n.children.map(pl),t=e?te(S({},n),{children:e}):S({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==N&&(t.component=ax),t}function ot(n){return n.outlet||N}function lx(n,e){let t=n.filter(i=>ot(i)===e);return t.push(...n.filter(i=>ot(i)!==e)),t}function nr(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var ux=(n,e,t,i)=>O(r=>(new rl(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),rl=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Lc(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Xn(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Xn(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Xn(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Xn(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Kc(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Zc(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Lc(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Lc(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=nr(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},to=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Zn=class{constructor(e,t){this.component=e,this.route=t}};function dx(n,e,t){let i=n._root,r=e?e._root:null;return Hi(i,r,t,[i.value])}function hx(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function ti(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!dd(n)?n:e.get(n):i}function Hi(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Xn(e);return n.children.forEach(o=>{fx(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>$i(a,t.getContext(o),r)),r}function fx(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=px(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new to(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Hi(n,e,a?a.children:null,i,r):Hi(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Zn(a.outlet.component,o))}else o&&$i(e,a,r),r.canActivateChecks.push(new to(i)),s.component?Hi(n,null,a?a.children:null,i,r):Hi(n,null,t,i,r);return r}function px(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!cn(n.url,e.url);case"pathParamsOrQueryParamsChange":return!cn(n.url,e.url)||!st(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!nl(n,e)||!st(n.queryParams,e.queryParams);case"paramsChange":default:return!nl(n,e)}}function $i(n,e,t){let i=Xn(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?$i(o,e.children.getContext(s),t):$i(o,null,t):$i(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Zn(e.outlet.component,r)):t.canDeactivateChecks.push(new Zn(null,r)):t.canDeactivateChecks.push(new Zn(null,r))}function ir(n){return typeof n=="function"}function mx(n){return typeof n=="boolean"}function gx(n){return n&&ir(n.canLoad)}function vx(n){return n&&ir(n.canActivate)}function yx(n){return n&&ir(n.canActivateChild)}function _x(n){return n&&ir(n.canDeactivate)}function xx(n){return n&&ir(n.canMatch)}function up(n){return n instanceof ct||n?.name==="EmptyError"}var js=Symbol("INITIAL_VALUE");function ei(){return Ae(n=>kr(n.map(e=>e.pipe(lt(1),Wo(js)))).pipe(O(e=>{for(let t of e)if(t!==!0){if(t===js)return js;if(t===!1||t instanceof Rt)return t}return!0}),Ce(e=>e!==js),lt(1)))}function Mx(n,e){return oe(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?A(te(S({},t),{guardsResult:!0})):bx(o,i,r,n).pipe(oe(a=>a&&mx(a)?Sx(i,s,n,e):A(a)),O(a=>te(S({},t),{guardsResult:a})))})}function bx(n,e,t,i){return ne(n).pipe(oe(r=>Ax(r.component,r.route,t,e,i)),Ze(r=>r!==!0,!0))}function Sx(n,e,t,i){return ne(e).pipe(bt(r=>An(Ex(r.route.parent,i),wx(r.route,i),Cx(n,r.path,t),Tx(n,r.route,t))),Ze(r=>r!==!0,!0))}function wx(n,e){return n!==null&&e&&e(new Jc(n)),A(!0)}function Ex(n,e){return n!==null&&e&&e(new Yc(n)),A(!0)}function Tx(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return A(!0);let r=i.map(s=>Br(()=>{let o=nr(e)??t,a=ti(s,o),c=vx(a)?a.canActivate(e,n):ht(o,()=>a(e,n));return Nt(c).pipe(Ze())}));return A(r).pipe(ei())}function Cx(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>hx(o)).filter(o=>o!==null).map(o=>Br(()=>{let a=o.guards.map(c=>{let l=nr(o.node)??t,u=ti(c,l),d=yx(u)?u.canActivateChild(i,n):ht(l,()=>u(i,n));return Nt(d).pipe(Ze())});return A(a).pipe(ei())}));return A(s).pipe(ei())}function Ax(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return A(!0);let o=s.map(a=>{let c=nr(e)??r,l=ti(a,c),u=_x(l)?l.canDeactivate(n,e,t,i):ht(c,()=>l(n,e,t,i));return Nt(u).pipe(Ze())});return A(o).pipe(ei())}function Dx(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return A(!0);let s=r.map(o=>{let a=ti(o,n),c=gx(a)?a.canLoad(e,t):ht(n,()=>a(e,t));return Nt(c)});return A(s).pipe(ei(),dp(i))}function dp(n){return Fo(ce(e=>{if(Kn(e))throw ap(n,e)}),O(e=>e===!0))}function Ix(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return A(!0);let s=r.map(o=>{let a=ti(o,n),c=xx(a)?a.canMatch(e,t):ht(n,()=>a(e,t));return Nt(c)});return A(s).pipe(ei(),dp(i))}var er=class{constructor(e){this.segmentGroup=e||null}},no=class extends Error{constructor(e){super(),this.urlTree=e}};function qn(n){return Cn(new er(n))}function Rx(n){return Cn(new T(4e3,!1))}function Px(n){return Cn(cp(!1,Ie.GuardRejected))}var sl=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return A(i);if(r.numberOfChildren>1||!r.children[N])return Rx(e.redirectTo);r=r.children[N]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new no(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Rt(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new Z(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new T(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},ol={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Nx(n,e,t,i,r){let s=ml(n,e,t);return s.matched?(i=cx(e,i),Ix(i,e,t,r).pipe(O(o=>o===!0?s:S({},ol)))):A(s)}function ml(n,e,t){if(e.path==="**")return Ox(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?S({},ol):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||D_)(t,n,e);if(!r)return S({},ol);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?S(S({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Ox(n){return{matched:!0,parameters:n.length>0?jf(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Hf(n,e,t,i){return t.length>0&&Ux(n,t,i)?{segmentGroup:new Z(e,Fx(i,new Z(t,n.children))),slicedSegments:[]}:t.length===0&&kx(n,t,i)?{segmentGroup:new Z(n.segments,Lx(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new Z(n.segments,n.children),slicedSegments:t}}function Lx(n,e,t,i){let r={};for(let s of t)if(ro(n,e,s)&&!i[ot(s)]){let o=new Z([],{});r[ot(s)]=o}return S(S({},i),r)}function Fx(n,e){let t={};t[N]=e;for(let i of n)if(i.path===""&&ot(i)!==N){let r=new Z([],{});t[ot(i)]=r}return t}function Ux(n,e,t){return t.some(i=>ro(n,e,i)&&ot(i)!==N)}function kx(n,e,t){return t.some(i=>ro(n,e,i))}function ro(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Bx(n,e,t,i){return ot(n)!==i&&(i===N||!ro(e,t,n))?!1:ml(e,n,t).matched}function Vx(n,e,t){return e.length===0&&!n.children[t]}var al=class{};function zx(n,e,t,i,r,s,o="emptyOnly"){return new cl(n,e,t,i,r,o,s).recognize()}var Hx=31,cl=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new sl(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new T(4002,`'${e.segmentGroup}'`)}recognize(){let e=Hf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(O(t=>{let i=new Ki([],Object.freeze({}),Object.freeze(S({},this.urlTree.queryParams)),this.urlTree.fragment,{},N,this.rootComponentType,null,{}),r=new De(i,t),s=new eo("",r),o=X_(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,N).pipe(Mt(i=>{if(i instanceof no)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof er?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=dl(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(O(s=>s instanceof De?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return ne(r).pipe(bt(s=>{let o=i.children[s],a=lx(t,s);return this.processSegmentGroup(e,a,o,s)}),jo((s,o)=>(s.push(...o),s)),St(null),Go(),oe(s=>{if(s===null)return qn(i);let o=hp(s);return Gx(o),A(o)}))}processSegment(e,t,i,r,s,o){return ne(t).pipe(bt(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Mt(c=>{if(c instanceof er)return A(null);throw c}))),Ze(a=>!!a),Mt(a=>{if(up(a))return Vx(i,r,s)?A(new al):qn(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return Bx(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):qn(r):qn(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=ml(t,r,s);if(!a)return qn(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Hx&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(oe(f=>this.processSegment(e,i,t,f.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=Nx(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(Ae(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Ae(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:f}=a,h=new Ki(u,f,Object.freeze(S({},this.urlTree.queryParams)),this.urlTree.fragment,Wx(i),ot(i),i.component??i._loadedComponent??null,i,$x(i)),{segmentGroup:p,slicedSegments:m}=Hf(t,u,d,c);if(m.length===0&&p.hasChildren())return this.processChildren(l,c,p).pipe(O(g=>g===null?null:new De(h,g)));if(c.length===0&&m.length===0)return A(new De(h,[]));let v=ot(i)===s;return this.processSegment(l,c,p,m,v?N:s,!0).pipe(O(g=>new De(h,g instanceof De?[g]:[])))}))):qn(t)))}getChildConfig(e,t,i){return t.children?A({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?A({routes:t._loadedRoutes,injector:t._loadedInjector}):Dx(e,t,i,this.urlSerializer).pipe(oe(r=>r?this.configLoader.loadChildren(e,t).pipe(ce(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):Px(t))):A({routes:[],injector:e})}};function Gx(n){n.sort((e,t)=>e.value.outlet===N?-1:t.value.outlet===N?1:e.value.outlet.localeCompare(t.value.outlet))}function jx(n){let e=n.value.routeConfig;return e&&e.path===""}function hp(n){let e=[],t=new Set;for(let i of n){if(!jx(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=hp(i.children);e.push(new De(i.value,r))}return e.filter(i=>!t.has(i))}function Wx(n){return n.data||{}}function $x(n){return n.resolve||{}}function qx(n,e,t,i,r,s){return oe(o=>zx(n,e,t,i,o.extractedUrl,r,s).pipe(O(({state:a,tree:c})=>te(S({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function Xx(n,e){return oe(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return A(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of fp(c))o.add(l);let a=0;return ne(o).pipe(bt(c=>s.has(c)?Yx(c,i,n,e):(c.data=dl(c,c.parent,n).resolve,A(void 0))),ce(()=>a++),Dn(1),oe(c=>a===o.size?A(t):Te))})}function fp(n){let e=n.children.map(t=>fp(t)).flat();return[n,...e]}function Yx(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!sp(r)&&(s[tr]=r.title),Zx(s,n,e,i).pipe(O(o=>(n._resolvedData=o,n.data=dl(n,n.parent,t).resolve,null)))}function Zx(n,e,t,i){let r=kc(n);if(r.length===0)return A({});let s={};return ne(r).pipe(oe(o=>Jx(n[o],e,t,i).pipe(Ze(),ce(a=>{s[o]=a}))),Dn(1),Ho(s),Mt(o=>up(o)?Te:Cn(o)))}function Jx(n,e,t,i){let r=nr(e)??i,s=ti(n,r),o=s.resolve?s.resolve(e,t):ht(r,()=>s(e,t));return Nt(o)}function Fc(n){return Ae(e=>{let t=n(e);return t?ne(t).pipe(O(()=>e)):A(e)})}var pp=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===N);return i}getResolvedTitleForRoute(t){return t.data[tr]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(Kx),providedIn:"root"})}}return n})(),Kx=(()=>{class n extends pp{constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||n)(R(Uf))}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),gl=new P("",{providedIn:"root",factory:()=>({})}),vl=new P(""),Qx=(()=>{class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=b(yc)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return A(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Nt(t.loadComponent()).pipe(O(mp),ce(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),jt(()=>{this.componentLoaders.delete(t)})),r=new Tn(i,()=>new me).pipe(En());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return A({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=eM(i,this.compiler,t,this.onLoadEndListener).pipe(jt(()=>{this.childrenLoaders.delete(i)})),o=new Tn(s,()=>new me).pipe(En());return this.childrenLoaders.set(i,o),o}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function eM(n,e,t,i){return Nt(n.loadChildren()).pipe(O(mp),oe(r=>r instanceof Si||Array.isArray(r)?A(r):ne(e.compileModuleAsync(r))),O(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(vl,[],{optional:!0,self:!0}).flat()),{routes:o.map(pl),injector:s}}))}function tM(n){return n&&typeof n=="object"&&"default"in n}function mp(n){return tM(n)?n.default:n}var yl=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(nM),providedIn:"root"})}}return n})(),nM=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),iM=new P("");var rM=(()=>{class n{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new me,this.transitionAbortSubject=new me,this.configLoader=b(Qx),this.environmentInjector=b(Me),this.urlSerializer=b(ul),this.rootContexts=b(io),this.location=b(Oi),this.inputBindingEnabled=b(fl,{optional:!0})!==null,this.titleStrategy=b(pp),this.options=b(gl,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=b(yl),this.createViewTransition=b(iM,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>A(void 0),this.rootComponentType=null;let t=r=>this.events.next(new qc(r)),i=r=>this.events.next(new Xc(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(te(S(S({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new ue({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Wi,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ce(s=>s.id!==0),O(s=>te(S({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Ae(s=>{let o=!1,a=!1;return A(s).pipe(Ae(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Ie.SupersededByNewNavigation),Te;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?te(S({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&u!=="reload"){let d="";return this.events.next(new un(c.id,this.urlSerializer.serialize(c.rawUrl),d,Hc.IgnoredSameUrlNavigation)),c.resolve(null),Te}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return A(c).pipe(Ae(d=>{let f=this.transitions?.getValue();return this.events.next(new Xi(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?Te:Promise.resolve(d)}),qx(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),ce(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=te(S({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new Js(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:p,extras:m}=c,v=new Xi(d,this.urlSerializer.serialize(f),h,p);this.events.next(v);let g=ip(this.rootComponentType).snapshot;return this.currentTransition=s=te(S({},c),{targetSnapshot:g,urlAfterRedirects:f,extras:te(S({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,A(s)}else{let d="";return this.events.next(new un(c.id,this.urlSerializer.serialize(c.extractedUrl),d,Hc.IgnoredByUrlHandlingStrategy)),c.resolve(null),Te}}),ce(c=>{let l=new Gc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),O(c=>(this.currentTransition=s=te(S({},c),{guards:dx(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),Mx(this.environmentInjector,c=>this.events.next(c)),ce(c=>{if(s.guardsResult=c.guardsResult,Kn(c.guardsResult))throw ap(this.urlSerializer,c.guardsResult);let l=new jc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),Ce(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",Ie.GuardRejected),!1)),Fc(c=>{if(c.guards.canActivateChecks.length)return A(c).pipe(ce(l=>{let u=new Wc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Ae(l=>{let u=!1;return A(l).pipe(Xx(this.paramsInheritanceStrategy,this.environmentInjector),ce({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(l,"",Ie.NoDataFromResolver)}}))}),ce(l=>{let u=new $c(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}))}),Fc(c=>{let l=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(ce(f=>{u.component=f}),O(()=>{})));for(let f of u.children)d.push(...l(f));return d};return kr(l(c.targetSnapshot.root)).pipe(St(null),lt(1))}),Fc(()=>this.afterPreactivation()),Ae(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,u=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return u?ne(u).pipe(O(()=>s)):A(s)}),O(c=>{let l=ix(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=te(S({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),ce(()=>{this.events.next(new Zi)}),ux(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),lt(1),ce({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ln(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),$o(this.transitionAbortSubject.pipe(ce(c=>{throw c}))),jt(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",Ie.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Mt(c=>{if(a=!0,lp(c))this.events.next(new Pt(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),ox(c)?this.events.next(new Ji(c.url)):s.resolve(!1);else{this.events.next(new Yi(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0));try{s.resolve(t.errorHandler(c))}catch(l){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(l)}}return Te}))}))}cancelNavigationTransition(t,i,r){let s=new Pt(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function sM(n){return n!==Wi}var oM=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(aM),providedIn:"root"})}}return n})(),ll=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},aM=(()=>{class n extends ll{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ka(n)))(r||n)}})()}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),gp=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:()=>b(cM),providedIn:"root"})}}return n})(),cM=(()=>{class n extends gp{constructor(){super(...arguments),this.location=b(Oi),this.urlSerializer=b(ul),this.options=b(gl,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=b(yl),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Rt,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=ip(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof Xi)this.stateMemento=this.createStateMemento();else if(t instanceof un)this.rawUrlTree=i.initialUrl;else if(t instanceof Js){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(r,i)}}else t instanceof Zi?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,i))):t instanceof Pt&&(t.code===Ie.GuardRejected||t.code===Ie.NoDataFromResolver)?this.restoreHistory(i):t instanceof Yi?this.restoreHistory(i,!0):t instanceof ln&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=this.urlSerializer.serialize(t);if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=S(S({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=S(S({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ka(n)))(r||n)}})()}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Gi=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Gi||{});function lM(n,e){n.events.pipe(Ce(t=>t instanceof ln||t instanceof Pt||t instanceof Yi||t instanceof un),O(t=>t instanceof ln||t instanceof un?Gi.COMPLETE:(t instanceof Pt?t.code===Ie.Redirect||t.code===Ie.SupersededByNewNavigation:!1)?Gi.REDIRECTING:Gi.FAILED),Ce(t=>t!==Gi.REDIRECTING),lt(1)).subscribe(()=>{e()})}function uM(n){throw n}var dM={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},hM={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},vp=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=b(As),this.stateManager=b(gp),this.options=b(gl,{optional:!0})||{},this.pendingTasks=b(zn),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=b(rM),this.urlSerializer=b(ul),this.location=b(Oi),this.urlHandlingStrategy=b(yl),this._events=new me,this.errorHandler=this.options.errorHandler||uM,this.navigated=!1,this.routeReuseStrategy=b(oM),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=b(vl,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!b(fl,{optional:!0}),this.eventsSubscription=new se,this.isNgZoneEnabled=b(ie)instanceof ie&&ie.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Pt&&i.code!==Ie.Redirect&&i.code!==Ie.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ln)this.navigated=!0;else if(i instanceof Ji){let o=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),a={info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||sM(r.source)};this.scheduleNavigation(o,Wi,null,a,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}pM(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Wi,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=S({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(pl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a){case"merge":u=S(S({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=Qf(f)}catch{(typeof t[0]!="string"||!t[0].startsWith("/"))&&(t=[]),d=this.currentUrlTree.root}return ep(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Kn(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Wi,null,i)}navigate(t,i={skipLocationChange:!1}){return fM(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=S({},dM):i===!1?r=S({},hM):r=i,Kn(t))return kf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return kf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return lM(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function fM(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new T(4008,!1)}function pM(n){return!(n instanceof Zi)&&!(n instanceof Ji)}var mM=new P("");function yp(n,...e){return Bn([{provide:vl,multi:!0,useValue:n},[],{provide:Qn,useFactory:gM,deps:[vp]},{provide:Ds,multi:!0,useFactory:vM},e.map(t=>t.\u0275providers)])}function gM(n){return n.routerState.root}function vM(){let n=b(Di);return e=>{let t=n.get(Hn);if(e!==t.components[0])return;let i=n.get(vp),r=n.get(yM);n.get(_M)===1&&i.initialNavigation(),n.get(xM,null,U.Optional)?.setUpPreloading(),n.get(mM,null,U.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var yM=new P("",{factory:()=>new me}),_M=new P("",{providedIn:"root",factory:()=>1});var xM=new P("");var _p=[];var xp={providers:[yp(_p),Af()]};var jp=qp(Mp());var Ll="172";var Fl=0,Ul=1,kl=2,Bl=3,Vl=4,zl=5,Hl=6,Gl=7;var or=2300,fo=2301,uo=2302,Tl=2400,Cl=2401,Al=2402;var Op="",Ue="srgb",Dl="srgb-linear",Il="linear",ho="srgb";var sr=2e3,Rl=2001,po=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var K1=Math.PI/180,MM=180/Math.PI;function bM(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]+"-"+fe[e&255]+fe[e>>8&255]+"-"+fe[e>>16&15|64]+fe[e>>24&255]+"-"+fe[t&63|128]+fe[t>>8&255]+"-"+fe[t>>16&255]+fe[t>>24&255]+fe[i&255]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]).toLowerCase()}function K(n,e,t){return Math.max(e,Math.min(t,n))}function SM(n,e){return(n%e+e)%e}function Ml(n,e,t){return(1-t)*n+t*e}var Ft=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(K(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(K(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},k=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],p=i[8],m=r[0],v=r[3],g=r[6],$=r[1],w=r[4],L=r[7],D=r[2],B=r[5],F=r[8];return s[0]=o*m+a*$+c*D,s[3]=o*v+a*w+c*B,s[6]=o*g+a*L+c*F,s[1]=l*m+u*$+d*D,s[4]=l*v+u*w+d*B,s[7]=l*g+u*L+d*F,s[2]=f*m+h*$+p*D,s[5]=f*v+h*w+p*B,s[8]=f*g+h*L+p*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,p=t*d+i*f+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=d*m,e[1]=(r*l-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=h*m,e[7]=(i*c-l*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bl=new k;var bp=new k().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sp=new k().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){let n={enabled:!0,workingColorSpace:Dl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ho&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ho&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Op?Il:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Dl]:{primaries:e,whitePoint:i,transfer:Il,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:e,whitePoint:i,transfer:ho,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),n}var Fe=wM();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var at=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],p=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(d!==m||c!==f||l!==h||u!==p){let v=1-a,g=c*f+l*h+u*p+d*m,$=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){let D=Math.sqrt(w),B=Math.atan2(D,g*$);v=Math.sin(v*B)/D,a=Math.sin(a*B)/D}let L=a*$;if(c=c*v+f*L,l=l*v+h*L,u=u*v+p*L,d=d*v+m*L,v===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],p=s[o+3];return e[t]=a*p+u*d+c*h-l*f,e[t+1]=c*p+u*f+l*d-a*h,e[t+2]=l*p+u*h+a*f-c*d,e[t+3]=u*p-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d+f*h*p;break;case"YZX":this._x=f*u*d+l*h*p,this._y=l*h*d+f*u*p,this._z=l*u*p-f*h*d,this._w=l*u*d-f*h*p;break;case"XZY":this._x=f*u*d-l*h*p,this._y=l*h*d-f*u*p,this._z=l*u*p+f*h*d,this._w=l*u*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(K(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(K(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new W,wp=new at;var _t=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,p,m,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,p,m,v)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,p,m,v){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=p,g[11]=m,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,p=a*u,m=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+p*l,t[5]=f-m*l,t[9]=-a*c,t[2]=m-f*l,t[6]=p+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,p=l*u,m=l*d;t[0]=f+m*a,t[4]=p*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-p,t[6]=m+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,p=l*u,m=l*d;t[0]=f-m*a,t[4]=-o*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,p=a*u,m=a*d;t[0]=c*u,t[4]=p*l-h,t[8]=f*l+m,t[1]=c*d,t[5]=m*l+f,t[9]=h*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,p=a*c,m=a*l;t[0]=c*u,t[4]=m-f*d,t[8]=p*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+p,t[10]=f-m*d}else if(e.order==="XZY"){let f=o*c,h=o*l,p=a*c,m=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+m,t[5]=o*u,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*u,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EM,e,TM)}lookAt(e,t,i){let r=this.elements;return Re.subVectors(e,t),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),Ot.crossVectors(i,Re),Ot.lengthSq()===0&&(Math.abs(i.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),Ot.crossVectors(i,Re)),Ot.normalize(),so.crossVectors(Re,Ot),r[0]=Ot.x,r[4]=so.x,r[8]=Re.x,r[1]=Ot.y,r[5]=so.y,r[9]=Re.y,r[2]=Ot.z,r[6]=so.z,r[10]=Re.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],p=i[2],m=i[6],v=i[10],g=i[14],$=i[3],w=i[7],L=i[11],D=i[15],B=r[0],F=r[4],Be=r[8],yn=r[12],_n=r[1],lr=r[5],ur=r[9],dr=r[13],hr=r[2],fr=r[6],pr=r[10],mr=r[14],gr=r[3],vr=r[7],yr=r[11],_r=r[15];return s[0]=o*B+a*_n+c*hr+l*gr,s[4]=o*F+a*lr+c*fr+l*vr,s[8]=o*Be+a*ur+c*pr+l*yr,s[12]=o*yn+a*dr+c*mr+l*_r,s[1]=u*B+d*_n+f*hr+h*gr,s[5]=u*F+d*lr+f*fr+h*vr,s[9]=u*Be+d*ur+f*pr+h*yr,s[13]=u*yn+d*dr+f*mr+h*_r,s[2]=p*B+m*_n+v*hr+g*gr,s[6]=p*F+m*lr+v*fr+g*vr,s[10]=p*Be+m*ur+v*pr+g*yr,s[14]=p*yn+m*dr+v*mr+g*_r,s[3]=$*B+w*_n+L*hr+D*gr,s[7]=$*F+w*lr+L*fr+D*vr,s[11]=$*Be+w*ur+L*pr+D*yr,s[15]=$*yn+w*dr+L*mr+D*_r,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],p=e[3],m=e[7],v=e[11],g=e[15];return p*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+m*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+v*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+g*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],p=e[12],m=e[13],v=e[14],g=e[15],$=d*v*l-m*f*l+m*c*h-a*v*h-d*c*g+a*f*g,w=p*f*l-u*v*l-p*c*h+o*v*h+u*c*g-o*f*g,L=u*m*l-p*d*l+p*a*h-o*m*h-u*a*g+o*d*g,D=p*d*c-u*m*c-p*a*f+o*m*f+u*a*v-o*d*v,B=t*$+i*w+r*L+s*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/B;return e[0]=$*F,e[1]=(m*f*s-d*v*s-m*r*h+i*v*h+d*r*g-i*f*g)*F,e[2]=(a*v*s-m*c*s+m*r*l-i*v*l-a*r*g+i*c*g)*F,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*F,e[4]=w*F,e[5]=(u*v*s-p*f*s+p*r*h-t*v*h-u*r*g+t*f*g)*F,e[6]=(p*c*s-o*v*s-p*r*l+t*v*l+o*r*g-t*c*g)*F,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*F,e[8]=L*F,e[9]=(p*d*s-u*m*s-p*i*h+t*m*h+u*i*g-t*d*g)*F,e[10]=(o*m*s-p*a*s+p*i*l-t*m*l-o*i*g+t*a*g)*F,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*F,e[12]=D*F,e[13]=(u*m*r-p*d*r+p*i*f-t*m*f-u*i*v+t*d*v)*F,e[14]=(p*a*r-o*m*r-p*i*c+t*m*c+o*i*v-t*a*v)*F,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*F,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,p=s*d,m=o*u,v=o*d,g=a*d,$=c*l,w=c*u,L=c*d,D=i.x,B=i.y,F=i.z;return r[0]=(1-(m+g))*D,r[1]=(h+L)*D,r[2]=(p-w)*D,r[3]=0,r[4]=(h-L)*B,r[5]=(1-(f+g))*B,r[6]=(v+$)*B,r[7]=0,r[8]=(p+w)*F,r[9]=(v-$)*F,r[10]=(1-(f+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ni.set(r[0],r[1],r[2]).length(),o=ni.set(r[4],r[5],r[6]).length(),a=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ye.copy(this);let l=1/s,u=1/o,d=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=u,Ye.elements[5]*=u,Ye.elements[6]*=u,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,t.setFromRotationMatrix(Ye),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=sr){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,p;if(a===sr)h=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Rl)h=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=sr){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,p,m;if(a===sr)p=(o+s)*d,m=-2*d;else if(a===Rl)p=s*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=m,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ni=new W,Ye=new _t,EM=new W(0,0,0),TM=new W(1,1,1),Ot=new W,so=new W,Re=new W,Ep=new _t,Tp=new at,Lp=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],p=s[10];switch(i){case"XYZ":this._y=Math.asin(K(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(K(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-K(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(K(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ep.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ep,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},CM=0,Cp=new W,ii=new at,vt=new _t,oo=new W,rr=new W,AM=new W,DM=new at,Ap=new W(1,0,0),Dp=new W(0,1,0),Ip=new W(0,0,1),Rp={type:"added"},IM={type:"removed"},ri={type:"childadded",child:null},wl={type:"childremoved",child:null},jl=(()=>{class n extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=bM(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new W,i=new Lp,r=new at,s=new W(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new k}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ii.setFromAxisAngle(t,i),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,i){return ii.setFromAxisAngle(t,i),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(Ap,t)}rotateY(t){return this.rotateOnAxis(Dp,t)}rotateZ(t){return this.rotateOnAxis(Ip,t)}translateOnAxis(t,i){return Cp.copy(t).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ap,t)}translateY(t){return this.translateOnAxis(Dp,t)}translateZ(t){return this.translateOnAxis(Ip,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vt.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?oo.copy(t):oo.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vt.lookAt(rr,oo,this.up):vt.lookAt(oo,rr,this.up),this.quaternion.setFromRotationMatrix(vt),s&&(vt.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(vt),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rp),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IM),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vt.multiply(t.parent.matrixWorld)),t.applyMatrix4(vt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rp),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,DM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),m=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),m.length>0&&(r.nodes=m)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new W(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})();var Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={h:0,s:0,l:0},ao={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Fe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Fe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Fe.workingColorSpace){if(e=SM(e,1),t=K(t,0,1),i=K(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=El(o,s,e+1/3),this.g=El(o,s,e),this.b=El(o,s,e-1/3)}return Fe.toWorkingColorSpace(this,r),this}setStyle(e,t=Ue){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Fe.fromWorkingColorSpace(pe.copy(this),e),Math.round(K(pe.r*255,0,255))*65536+Math.round(K(pe.g*255,0,255))*256+Math.round(K(pe.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fe.workingColorSpace){Fe.fromWorkingColorSpace(pe.copy(this),t);let i=pe.r,r=pe.g,s=pe.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(pe.copy(this),t),e.r=pe.r,e.g=pe.g,e.b=pe.b,e}getStyle(e=Ue){Fe.fromWorkingColorSpace(pe.copy(this),e);let t=pe.r,i=pe.g,r=pe.b;return e!==Ue?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Lt),this.setHSL(Lt.h+e,Lt.s+t,Lt.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(ao);let i=Ml(Lt.h,ao.h,t),r=Ml(Lt.s,ao.s,t),s=Ml(Lt.l,ao.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pe=new le;le.NAMES=Fp;function Up(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ye(n){let e={};for(let t=0;t<n.length;t++){let i=Up(n[t]);for(let r in i)e[r]=i[r]}return e}function co(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function RM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var fn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},go=class extends fn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:s=e,a=2*t-i;break;case Al:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:o=e,c=2*i-t;break;case Al:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(i-t)/(r-t),m=p*p,v=m*p,g=-f*v+2*f*m-f*p,$=(1+f)*v+(-1.5-2*f)*m+(-.5+f)*p+1,w=(-1-h)*v+(1.5+h)*m+.5*p,L=h*v-h*m;for(let D=0;D!==a;++D)s[D]=g*o[u+D]+$*o[l+D]+w*o[c+D]+L*o[d+D];return s}},vo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},yo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ke=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new go(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case or:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&RM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===uo,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let p=0;p!==i;++p){let m=t[d+p];if(m!==t[f+p]||m!==t[h+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ke.prototype.TimeBufferType=Float32Array;ke.prototype.ValueBufferType=Float32Array;ke.prototype.DefaultInterpolation=fo;var Ut=class extends ke{constructor(e,t,i){super(e,t,i)}};Ut.prototype.ValueTypeName="bool";Ut.prototype.ValueBufferType=Array;Ut.prototype.DefaultInterpolation=or;Ut.prototype.InterpolantFactoryMethodLinear=void 0;Ut.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends ke{};_o.prototype.ValueTypeName="color";var xo=class extends ke{};xo.prototype.ValueTypeName="number";var Mo=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)at.slerpFlat(s,0,o,l-a,o,l,c);return s}},ar=class extends ke{InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var kt=class extends ke{constructor(e,t,i){super(e,t,i)}};kt.prototype.ValueTypeName="string";kt.prototype.ValueBufferType=Array;kt.prototype.DefaultInterpolation=or;kt.prototype.InterpolantFactoryMethodLinear=void 0;kt.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends ke{};bo.prototype.ValueTypeName="vector";var Pl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},So=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],p=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null}}},kp=new So,Wl=(()=>{class n{constructor(t){this.manager=t!==void 0?t:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),yt={},Nl=class extends Error{constructor(e,t){super(e),this.response=t}},wo=class extends Wl{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Pl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yt[e]!==void 0){yt[e].push({onLoad:t,onProgress:i,onError:r});return}yt[e]=[],yt[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=yt[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,p=h!==0,m=0,v=new ReadableStream({start(g){$();function $(){d.read().then(({done:w,value:L})=>{if(w)g.close();else{m+=L.byteLength;let D=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:h});for(let B=0,F=u.length;B<F;B++){let Be=u[B];Be.onProgress&&Be.onProgress(D)}g.enqueue(L),$()}},w=>{g.error(w)})}}});return new Response(v)}else throw new Nl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(p=>h.decode(p))}}}).then(l=>{Pl.add(e,l);let u=yt[e];delete yt[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=yt[e];if(u===void 0)throw this.manager.itemError(e),l;delete yt[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var lo,cr=class{static getContext(){return lo===void 0&&(lo=new(window.AudioContext||window.webkitAudioContext)),lo}static setContext(e){lo=e}},pn=class extends Wl{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new wo(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{let l=c.slice(0);cr.getContext().decodeAudioData(l,function(d){t(d)}).catch(a)}catch(l){a(l)}},i,r);function a(c){r?r(c):console.error(c),s.manager.itemError(e)}}};var Eo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Pp(){return performance.now()}var dn=new W,Np=new at,PM=new W,hn=new W,mn=class extends jl{constructor(){super(),this.type="AudioListener",this.context=cr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Eo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(dn,Np,PM),hn.set(0,0,-1).applyQuaternion(Np),t.positionX){let r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(dn.x,r),t.positionY.linearRampToValueAtTime(dn.y,r),t.positionZ.linearRampToValueAtTime(dn.z,r),t.forwardX.linearRampToValueAtTime(hn.x,r),t.forwardY.linearRampToValueAtTime(hn.y,r),t.forwardZ.linearRampToValueAtTime(hn.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(dn.x,dn.y,dn.z),t.setOrientation(hn.x,hn.y,hn.z,i.x,i.y,i.z)}},gn=class extends jl{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var $l="\\[\\]\\.:\\/",NM=new RegExp("["+$l+"]","g"),ql="[^"+$l+"]",OM="[^"+$l.replace("\\.","")+"]",LM=/((?:WC+[\/:])*)/.source.replace("WC",ql),FM=/(WCOD+)?/.source.replace("WCOD",OM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),kM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),BM=new RegExp("^"+LM+FM+UM+kM+"$"),VM=["material","materials","bones","map"],Ol=class{constructor(e,t,i){let r=i||ee.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ee=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(NM,"")}static parseTrackName(t){let i=BM.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);VM.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Ol,n})();ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,db=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ES=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,V={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:jM,alphatest_fragment:WM,alphatest_pars_fragment:$M,aomap_fragment:qM,aomap_pars_fragment:XM,batching_pars_vertex:YM,batching_vertex:ZM,begin_vertex:JM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:eb,bumpmap_pars_fragment:tb,clipping_planes_fragment:nb,clipping_planes_pars_fragment:ib,clipping_planes_pars_vertex:rb,clipping_planes_vertex:sb,color_fragment:ob,color_pars_fragment:ab,color_pars_vertex:cb,color_vertex:lb,common:ub,cube_uv_reflection_fragment:db,defaultnormal_vertex:hb,displacementmap_pars_vertex:fb,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:gb,colorspace_fragment:vb,colorspace_pars_fragment:yb,envmap_fragment:_b,envmap_common_pars_fragment:xb,envmap_pars_fragment:Mb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:Nb,envmap_vertex:Sb,fog_vertex:wb,fog_pars_vertex:Eb,fog_fragment:Tb,fog_pars_fragment:Cb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:Db,lights_lambert_fragment:Ib,lights_lambert_pars_fragment:Rb,lights_pars_begin:Pb,lights_toon_fragment:Ob,lights_toon_pars_fragment:Lb,lights_phong_fragment:Fb,lights_phong_pars_fragment:Ub,lights_physical_fragment:kb,lights_physical_pars_fragment:Bb,lights_fragment_begin:Vb,lights_fragment_maps:zb,lights_fragment_end:Hb,logdepthbuf_fragment:Gb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:$b,map_fragment:qb,map_pars_fragment:Xb,map_particle_fragment:Yb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:oS,normal_pars_vertex:aS,normal_vertex:cS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:fS,opaque_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:vS,dithering_fragment:yS,dithering_pars_fragment:_S,roughnessmap_fragment:xS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:SS,shadowmap_vertex:wS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:CS,skinning_vertex:AS,skinnormal_vertex:DS,specularmap_fragment:IS,specularmap_pars_fragment:RS,tonemapping_fragment:PS,tonemapping_pars_fragment:NS,transmission_fragment:OS,transmission_pars_fragment:LS,uv_pars_fragment:FS,uv_pars_vertex:US,uv_vertex:kS,worldpos_vertex:BS,background_vert:VS,background_frag:zS,backgroundCube_vert:HS,backgroundCube_frag:GS,cube_vert:jS,cube_frag:WS,depth_vert:$S,depth_frag:qS,distanceRGBA_vert:XS,distanceRGBA_frag:YS,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:KS,linedashed_frag:QS,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:rw,meshmatcap_frag:sw,meshnormal_vert:ow,meshnormal_frag:aw,meshphong_vert:cw,meshphong_frag:lw,meshphysical_vert:uw,meshphysical_frag:dw,meshtoon_vert:hw,meshtoon_frag:fw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:vw,sprite_vert:yw,sprite_frag:_w},M={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},envMapRotation:{value:new k},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},Bp={basic:{uniforms:ye([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.fog]),vertexShader:V.meshbasic_vert,fragmentShader:V.meshbasic_frag},lambert:{uniforms:ye([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.fog,M.lights,{emissive:{value:new le(0)}}]),vertexShader:V.meshlambert_vert,fragmentShader:V.meshlambert_frag},phong:{uniforms:ye([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.fog,M.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:V.meshphong_vert,fragmentShader:V.meshphong_frag},standard:{uniforms:ye([M.common,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.roughnessmap,M.metalnessmap,M.fog,M.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:V.meshphysical_vert,fragmentShader:V.meshphysical_frag},toon:{uniforms:ye([M.common,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.gradientmap,M.fog,M.lights,{emissive:{value:new le(0)}}]),vertexShader:V.meshtoon_vert,fragmentShader:V.meshtoon_frag},matcap:{uniforms:ye([M.common,M.bumpmap,M.normalmap,M.displacementmap,M.fog,{matcap:{value:null}}]),vertexShader:V.meshmatcap_vert,fragmentShader:V.meshmatcap_frag},points:{uniforms:ye([M.points,M.fog]),vertexShader:V.points_vert,fragmentShader:V.points_frag},dashed:{uniforms:ye([M.common,M.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:V.linedashed_vert,fragmentShader:V.linedashed_frag},depth:{uniforms:ye([M.common,M.displacementmap]),vertexShader:V.depth_vert,fragmentShader:V.depth_frag},normal:{uniforms:ye([M.common,M.bumpmap,M.normalmap,M.displacementmap,{opacity:{value:1}}]),vertexShader:V.meshnormal_vert,fragmentShader:V.meshnormal_frag},sprite:{uniforms:ye([M.sprite,M.fog]),vertexShader:V.sprite_vert,fragmentShader:V.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:V.background_vert,fragmentShader:V.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new k}},vertexShader:V.backgroundCube_vert,fragmentShader:V.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:V.cube_vert,fragmentShader:V.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:V.equirect_vert,fragmentShader:V.equirect_frag},distanceRGBA:{uniforms:ye([M.common,M.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:V.distanceRGBA_vert,fragmentShader:V.distanceRGBA_frag},shadow:{uniforms:ye([M.lights,M.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:V.shadow_vert,fragmentShader:V.shadow_frag}};Bp.physical={uniforms:ye([Bp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:V.meshphysical_vert,fragmentShader:V.meshphysical_frag};var vn=(1+Math.sqrt(5))/2,ai=1/vn,z2=[new W(-vn,ai,0),new W(vn,ai,0),new W(-ai,0,vn),new W(ai,0,vn),new W(0,vn,-ai),new W(0,vn,ai),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];var H2=new Float32Array(16),G2=new Float32Array(9),j2=new Float32Array(4);var W2={[Fl]:Ul,[kl]:Hl,[Vl]:Gl,[Bl]:zl,[Ul]:Fl,[Hl]:kl,[Gl]:Vl,[zl]:Bl};var Bt=(()=>{class n{constructor(){this.isMenuOpened=!1,this.audioLoader=new pn,this.listener=new mn}loadAudio(t){this.audioLoader.load(t,i=>{this.sound=new gn(this.listener),this.sound.setBuffer(i),this.sound.play()})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=E({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var zp=(()=>{class n{constructor(t){this.generalService=t}toggleMenu(){this.generalService.isMenuOpened=!this.generalService.isMenuOpened,this.generalService.loadAudio("assets/audios/click.mp3"),this.generalService.isMenuOpened?(this.changeHamburgerColor("white"),this.generalService.loadAudio("assets/audios/background-shore.mp3")):this.changeHamburgerColor("black")}changeHamburgerColor(t){let i=document.querySelector(".nav-icon-1");i&&i.querySelectorAll("span").forEach(s=>{s.style.backgroundColor=t})}static{this.\u0275fac=function(i){return new(i||n)(ve(Bt))}}static{this.\u0275cmp=it({type:n,selectors:[["app-hamburger"]],standalone:!0,features:[rt],decls:11,vars:1,consts:[[1,"wrapper"],[1,"icon","nav-icon-1",3,"click","ngClass"]],template:function(i,r){i&1&&(_(0,"div",0)(1,"div",1),Q("click",function(){return r.toggleMenu()}),q(2,"span")(3,"span")(4,"span")(5,"span")(6,"span")(7,"span")(8,"span")(9,"span")(10,"span"),y()()),i&2&&(be(),Se("ngClass",r.generalService.isMenuOpened?"open":""))},dependencies:[gt,Wn],styles:[".nav-icon-1[_ngcontent-%COMP%]{width:30px;height:30px;position:relative;transition:.1s;cursor:pointer;display:inline-block}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:5px;height:5px;background-color:#000;display:block;border-radius:50%;position:absolute}.nav-icon-1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{cursor:pointer!important;transition:.35s cubic-bezier(.8,.5,.2,1.4)}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){left:0;top:0}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){left:12px;top:0}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){right:0;top:0}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){left:0;top:12px}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5){position:absolute;left:12px;top:12px}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){right:0;top:12px}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7){left:0;bottom:0}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8){position:absolute;left:12px;bottom:0}.nav-icon-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9){right:0;bottom:0}.nav-icon-1.open[_ngcontent-%COMP%]{transform:rotate(180deg);cursor:pointer;transition:.2s cubic-bezier(.8,.5,.2,1.4)}.nav-icon-1.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:50%;transition:.1s cubic-bezier(.8,.5,.2,1.4)}.nav-icon-1.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){left:6px;top:6px}.nav-icon-1.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){left:6px;top:18px}.nav-icon-1.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){right:6px;top:6px}.nav-icon-1.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8){left:18px;bottom:6px}"]})}}return n})();function xw(n,e){if(n&1){let t=ef();_(0,"div",5)(1,"div",6)(2,"ul",7)(3,"li",8),Q("click",function(){en(t);let r=rn();return tn(r.scrollToSection("home"))}),_(4,"span",9),x(5,"01"),y(),x(6,"Home "),q(7,"i",10),y(),_(8,"li",8),Q("click",function(){en(t);let r=rn();return tn(r.scrollToSection("about"))}),_(9,"span",9),x(10,"02"),y(),x(11,"About "),q(12,"i",10),y(),_(13,"li",8),Q("click",function(){en(t);let r=rn();return tn(r.scrollToSection("projects"))}),_(14,"span",9),x(15,"03"),y(),x(16,"Projects "),q(17,"i",10),y(),_(18,"li",8),Q("click",function(){en(t);let r=rn();return tn(r.scrollToSection("resume"))}),_(19,"span",9),x(20,"04"),y(),x(21,"Resume "),q(22,"i",10),y(),_(23,"li",8),Q("click",function(){en(t);let r=rn();return tn(r.scrollToSection("contact"))}),_(24,"span",9),x(25,"05"),y(),x(26,"Contact "),q(27,"i",10),y()()(),_(28,"div",11)(29,"div",12)(30,"p",13),x(31,"mail"),y(),_(32,"a",14),Q("click",function(){en(t);let r=rn();return tn(r.generalService.loadAudio("/assets/audios/click.mp3"))}),_(33,"p",15),x(34,"abbax2004@gmail.com"),y()()(),_(35,"div",12)(36,"p",13),x(37,"Phone"),y(),_(38,"p",15),x(39,"+92 334 1264318"),y()(),_(40,"div",12)(41,"p",13),x(42,"Address"),y(),_(43,"p",15),x(44,"Rawalpindi, Pakistan"),y()()()()}}var Hp=(()=>{class n{constructor(t){this.generalService=t,this.currentDate=""}ngAfterViewInit(){let t=setInterval(()=>{let i=document.querySelectorAll(".menu-item");i.length>0&&(clearInterval(t),i.forEach(r=>{r.addEventListener("mouseover",()=>{this.generalService.loadAudio("/assets/audios/hover.mp3")})}))},100)}scrollToSection(t){let i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth"}),this.generalService.loadAudio("/assets/audios/click.mp3")}ngOnInit(){setInterval(()=>{this.currentDate=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})+", "+new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0})},10)}static{this.\u0275fac=function(i){return new(i||n)(ve(Bt))}}static{this.\u0275cmp=it({type:n,selectors:[["app-header"]],standalone:!0,features:[rt],decls:10,vars:6,consts:[[1,"fixed-top","container-fluid","justify-content-between","align-items-center","px-5","m-0","d-flex",3,"ngClass"],[1,"fs-5","fw-bold","p-2","m-0",3,"ngClass"],[1,"d-lg-flex","d-none","align-items-center","justify-content-center","p-0","m-0","mt-3","gap-5"],[1,"fs-6","p-0","m-0","fw-normal",3,"ngClass"],["class","row w-100 position-fixed p-3 m-0 d-flex justify-content-between menu-section",4,"ngIf"],[1,"row","w-100","position-fixed","p-3","m-0","d-flex","justify-content-between","menu-section"],[1,"col-12","col-lg-4","p-0","m-0","d-flex","flex-column","justify-content-center"],[1,"row","p-0","m-0","h-100","flex-column","justify-content-evenly","py-5"],[1,"menu-item","crs-pointer","fs-1","py-4","d-inline-flex","align-items-center","justify-content-between","borderc-bottom","text-white",3,"click"],[1,"text-white"],[1,"bi","bi-arrow-up-right","text-white"],[1,"col-4","d-none","p-0","m-0","d-lg-flex","flex-column","justify-content-center","h-100"],[1,"row","p-0","m-0","mb-2"],[1,"m-0","p-0","text-white","fw-light"],["href","mailto:abbax2004@gmail.com",1,"crs-pointer","anchor-changed","p-0",3,"click"],[1,"m-0","p-0","text-white","ps-1"]],template:function(i,r){i&1&&(_(0,"div",0)(1,"h1",1),x(2,"ABBAS "),y(),_(3,"div",2)(4,"h3",3),x(5,"Portfolio 2025 "),y(),_(6,"h3",3),x(7),y()(),q(8,"app-hamburger"),y(),vc(9,xw,45,0,"div",4)),i&2&&(Se("ngClass",r.generalService.isMenuOpened?"header-changed":"header"),be(),Se("ngClass",r.generalService.isMenuOpened?"bg-white":"bgc-dark text-white"),be(3),Se("ngClass",r.generalService.isMenuOpened?"text-white":""),be(2),Se("ngClass",r.generalService.isMenuOpened?"text-white":""),be(),Cs("",r.currentDate," "),be(2),Se("ngIf",r.generalService.isMenuOpened))},dependencies:[zp,gt,Wn,yf]})}}return n})();var Gp=(()=>{class n{constructor(t){this.generalService=t}static{this.\u0275fac=function(i){return new(i||n)(ve(Bt))}}static{this.\u0275cmp=it({type:n,selectors:[["app-footer"]],standalone:!0,features:[rt],decls:3,vars:2,consts:[[1,"d-flex","justify-content-center",3,"ngClass"],[1,"text-center","p-3","m-0",3,"ngClass"]],template:function(i,r){i&1&&(_(0,"div",0)(1,"p",1),x(2," \xA9 2023 Copyright. All Rigths Reserved "),y()()),i&2&&(Se("ngClass",r.generalService.isMenuOpened?"fixed-bottom":"fixed-bottom bgc-white"),be(),Se("ngClass",r.generalService.isMenuOpened?"text-white":""))},dependencies:[gt,Wn]})}}return n})();var Wp=(()=>{class n{constructor(t){this.generalService=t,this.title="portfolio",this.audioLoader=new pn,this.videoSource="Bee.mp4",this.isPageReloaded=!0,this.videos={Bee:{title:"Bee",description:"A fully interactive 3D website developed using Three.js, AngularJS, and GSAP! \u{1F31F} This project allowed me to explore the incredible possibilities of web development and create a visually stunning experience. With Three.js, I was able to implement dynamic 3D graphics, while AngularJS provided a robust framework for building the application structure. \u{1F680} GSAP helped me bring everything to life with smooth animations, enhancing user engagement. I\u2019m proud of how it turned out and can\u2019t wait for you all to check it out! Your feedback would be greatly appreciated! \u{1F64C}"},ELifeSaver:{title:"E-Life Saver",description:`E - Life Saver, a pioneering web platform that simplifies blood donation! \u{1F4BB} Built with Angular 18, Node.js, Express.js, and MS SQL Server, this user-friendly platform enables individuals to:

- Register with Gmail verification \u{1F4E7}
- Make appeals for blood donation by selecting blood group and quantity \u{1F489}
- Share medical information \u{1F3E5}
- Search donors by city or blood type \u{1F4CD}
- Manage requests and track donation history \u{1F4CA}
- Update profile settings \u{1F4C8}
- Responsive Design \u{1F4F1}`},LMS:{title:"Library Management System",description:"A fully functional Library Management System developed in C# and Visual Studio. This comprehensive system allows users to borrow and return books, Administrators can perform CRUD (create, read, update, delete) operations on authors, categories, and books, ensuring easy management of the library`s catalog. The system also features user authentication, ensuring secure access to user information and borrowing history. I designed the user interface with usability in mind, making it easy for users to navigate and find the books they need. This project demonstrates my skills in desktop application development, data management, and user interface design."},Portfolio:{title:"Portfolio",description:"crafted with hashtag#Angular17! \u{1F680} This project was a joy to develop, showcasing seamless navigation and a sleek, modern design. The standout feature? Integrated email functionality with hashtag#EmailJS, enabling visitors to effortlessly connect with my client. Thrilled with the clean code, responsive layout, and polished user experience. Excited for more amazing projects ahead! "}},this.videoTitle=this.videos[this.videoSource.split(".")[0]].title,this.videoDiscription=this.videos[this.videoSource.split(".")[0]].description,this.videoLoader=!1}ngOnInit(){this.changeVideo(this.videoSource),this.isPageReloaded=!1}ngAfterViewInit(){document.querySelectorAll(".social-links").forEach(i=>{i.addEventListener("mouseover",()=>{this.generalService.loadAudio("assets/audios/hover.mp3")})}),this.initAudio(),this.cursorDot=document.querySelector(".cursor-dot"),this.cursorDot&&document.addEventListener("mousemove",this.handleMouseMove.bind(this))}initAudio(){this.listener=new mn,this.audioLoader.load("assets/audios/background.mp3",t=>{this.sound=new gn(this.listener),this.sound.setBuffer(t),this.sound.setLoop(!0),this.sound.setVolume(.5),this.playAudioAfterUserInteraction()})}playAudioAfterUserInteraction(){window.addEventListener("click",()=>{this.sound&&this.sound.play()},{once:!0})}onClick(){this.generalService.loadAudio("assets/audios/click.mp3")}changeVideo(t){this.videoSource="assets/videos/"+t;let i=document.querySelector("video");i&&(i.load(),i.muted=!0,i.play(),this.videoTitle=this.videos[t.split(".")[0]].title,this.videoDiscription=this.videos[t.split(".")[0]].description),this.isPageReloaded||this.onClick()}handleMouseMove(t){this.cursorDot&&(this.cursorDot.style.left=t.clientX+"px",this.cursorDot.style.top=t.clientY+"px")}generatePDF(){return Vt(this,null,function*(){let t=(yield import("./chunk-BIYNUKL6.js")).default,i=yield import("./chunk-WS5CCTTD.js");t.vfs=i.vfs;let r={content:[{text:"ABBAS ALI",style:"header"},{text:"WEB DEVELOPER",style:"subheader"},{canvas:[{type:"line",x1:0,y1:0,x2:540,y2:0,lineWidth:.1,color:"grey"}],margin:[0,0,0,10]},{columns:[{text:"Phone : +92 3341264318",style:"contact"},{text:"Email : abbax2004@gmail.com",link:"mailto:abbax2004@gmail.com",style:"contact"},{text:"Address : Rawalpindi, Pakistan",style:"contact"}],style:"contact"},{canvas:[{type:"line",x1:0,y1:0,x2:540,y2:0,lineWidth:.1,color:"grey"}],margin:[0,0,0,10]},{columns:[[{text:"OBJECTIVE",style:"sectionHeader"},{canvas:[{type:"line",x1:0,y1:0,x2:240,y2:0,lineWidth:.1,color:"grey"}],margin:[0,10,0,10]},{text:"A highly motivated and skilled web developer with more than a year of experties in Angular, specializing in building and maintaining responsive web applications. Eager to contribute to innovative projects.",margin:[2,5,5,20]},{text:"EDUCATION",style:"sectionHeader"},{canvas:[{type:"line",x1:0,y1:0,x2:240,y2:0,lineWidth:.1,color:"grey"}],margin:[0,10,0,10]},{text:"Buturab Public School | Matriculation, Computer Science, April 2020",style:"list"},{text:"Sir Syed College | Intermediate, ICS, July 2022",style:"list"},{text:"Barani Institute of Information Technology | BSCS, Computer Science, June 2026",style:"list"},{text:"EXPERIENCE",style:"sectionHeader",margin:[2,15,5,5]},{canvas:[{type:"line",x1:0,y1:0,x2:240,y2:0,lineWidth:.1,color:"grey"}],margin:[0,10,0,10]},{text:"Web Developer Intern \u2013 Cursa Health (1 Aug 2022 \u2013 30 September 2023)",bold:!0,margin:[2,5,5,5]},{text:"Developed web applications using Angular and WordPress, enhancing functionality and user experience.",margin:[2,0,5,0]}],[{text:"EXPERTISE",style:"sectionHeader"},{canvas:[{type:"line",x1:0,y1:0,x2:240,y2:0,lineWidth:.1,color:"grey"}],margin:[0,10,0,10]},{text:"- Front-End Development",bold:!0,margin:[2,5,5,0]},{text:"Markup & Styling: HTML, CSS, Bootstrap, GSAP",margin:[10,5,5,0]},{text:"Frameworks & Libraries: Angular, JQuery, ThreeJS",margin:[10,5,5,0]},{text:"Languages: JavaScript, TypeScript",margin:[10,5,5,0]},{text:"- Back-End Development",bold:!0,margin:[2,5,5,0]},{text:"Frameworks: ExpressJS, NodeJS, ASP.NET MVC",margin:[10,5,5,0]},{text:"CMS: WordPress",margin:[10,5,5,0]},{text:"Languages: PHP, Python, Java, C++, C#",margin:[10,5,5,0]},{text:"- Database Management",bold:!0,margin:[2,5,5,0]},{text:"SQL Databases: SQL",margin:[10,5,5,0]},{text:"NoSQL Databases: MongoDB",margin:[10,5,5,0]},{text:"- Version Controls",bold:!0,margin:[2,5,5,0]},{text:"Tools: Git, GitHub",margin:[10,5,5,0]}]]},{canvas:[{type:"line",x1:0,y1:0,x2:540,y2:0,lineWidth:.1,color:"grey"}],margin:[0,10,0,10]},{columns:[{text:"GitHub : Abbass-Aliii",link:"https://github.com/Abbass-Aliii",style:"contact"},{text:"LinkedIn : Abbass-Aliii",link:"https://linkedin.com/in/Abbass-Aliii",style:"contact"},{text:"Portfolio : Abbas Ali",link:"https://abbass-aliii.github.io/Abbas-Ali-Portfolio/"}],style:"contact"}],styles:{header:{fontSize:24,bold:!0,alignment:"center",margin:[0,0,0,10]},subheader:{fontSize:18,alignment:"center",margin:[0,0,0,10]},contact:{alignment:"center",margin:[0,0,0,10]},sectionHeader:{fontSize:16,bold:!0},list:{margin:[2,5,5,5]}}};t.createPdf(r).getBlob(function(s){(0,jp.default)(s,"Abbas Ali CV.pdf")})})}static{this.\u0275fac=function(i){return new(i||n)(ve(Bt))}}static{this.\u0275cmp=it({type:n,selectors:[["app-root"]],standalone:!0,features:[rt],decls:199,vars:3,consts:[[1,"main-section"],[1,"inner-section","overflow-hidden","row","p-0","m-0","mb-5"],["id","home",1,"row","py-lg-5","py-3","mb-5","justify-content-between","p-0","m-0","m-0","pages"],[1,"col-12","col-lg-11","p-0","m-0","d-flex","align-items-center","justify-content-center"],[1,"fw-bold","home-heading","txt-shadow"],[1,"col-12","col-lg-auto","p-0","m-0","p-3","d-flex","align-items-center","justify-content-center"],[1,"d-flex","flex-lg-column","gap-4"],["href","mailto:abbax2004@gmail.com",1,"anchor-changed","crs-pointer","social-links",3,"click"],[1,"bi","bi-envelope-fill","fs-3"],["href","https://www.linkedin.com/in/abbass-aliii/","target","_blank",1,"social-links",3,"click"],[1,"bi","bi-linkedin","fs-3"],["href","https://www.github.com/abbass-aliii","target","_blank",1,"social-links",3,"click"],[1,"bi","bi-github","fs-3"],["id","about",1,"row","p-0","m-0","mb-5","pages"],[1,"col-12","col-lg-6","p-3","px-lg-5","m-0","d-flex","flex-column","align-items-center","justify-content-center"],[1,"text-center","about-text"],["id","projects",1,"row","p-3","m-0","mb-5"],[1,"row","p-0","m-0","overflow-hidden","text-center","w-100"],[1,"recent-projects"],[1,"row","p-0","m-0","justify-content-evenly"],[1,"col-lg-4","col-12","p-0","m-0","d-flex","flex-column","justify-content-center"],[1,"row","p-2","p-0","m-0","h-100","flex-column","justify-content-evenly"],[1,"fs-1","crs-pointer","social-links","py-4","border-bottom","d-inline-flex","align-items-center","justify-content-between",3,"click"],[1,""],[1,"bi","bi-arrow-up-right"],[1,"col-lg-6","col-12","video-section","p-0","m-0","d-flex","flex-column","justify-content-center"],[1,"card"],["autoplay","","loop","","muted","",1,"card-img-top"],["type","video/mp4",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["id","resume",1,"row","mb-5","mt-5","p-0","m-0","align-items-center","justify-content-center"],[1,"col-12","col-lg-8","shadow","bgc-white","p-2","px-lg-3","m-0","d-flex","flex-column","align-items-center","justify-content-center"],[1,"row","p-0","m-0","w-100","mb-2","justify-content-end"],[1,"bi","bi-file-earmark-arrow-down-fill","w-auto","crs-pointer",3,"click"],[1,"row","p-0","m-0","mb-2"],[1,"fw-bold","m-0"],[1,"fs-1","fw-light","m-0"],[1,"col-12","p-0","m-0","d-flex","flex-lg-row","flex-column","align-items-center","justify-content-evenly","border-top","border-bottom","py-2","mb-2"],[1,"p-0","m-0"],[1,"bi","bi-telephone-fill","px-1"],["href","mailto:abbax2004@gmail.com",1,"anchor-changed","crs-pointer"],[1,"bi","bi-envelope","px-2"],[1,"bi","bi-geo-alt-fill","px-1"],[1,"row","p-0","m-0","w-100"],[1,"col-12","col-lg-8","p-0","m-0","p-2"],[1,"row","p-0","m-0","border-bottom","py-1","mb-2"],[1,"fs-4","fw-bold","m-0","p-1"],[1,"row","px-2","p-lg-0","m-0","mb-2"],[1,"col-lg-4","col-12","p-0","m-0"],[1,"fw-bold","p-0","m-0"],["href","assets/abbas/ExperiencLetterCursa.pdf","target","_blank","rel","Experience",3,"click"],[1,"col-12","col-lg-4","p-0","m-0","p-2"],[1,"row","p-0","m-0","py-1","mb-0"],[1,"fs-5","fw-bold","m-0","p-1"],[1,"row","p-0","m-0","mb-2","p-2"],[1,"p-0","m-0","fs-6"],["id","contact",1,"row","p-0","m-0","justify-content-center","mb-5","mt-5"],[1,"col-12","shadow","bgc-white","col-lg-8","p-3","px-lg-5","m-0"],[1,"row","p-0","m-0"],[1,"fs-1","text-center"],[1,"col-12","m-0","p-3"],[1,"fs-6","mb-4","text-center"],[1,"align-items-center","d-flex","justify-content-evenly"],[1,"col-auto","px-2","gap-4","align-items-lg-center","d-flex","flex-lg-row","flex-column","justify-content-evenly"],[1,"p-0","m-0","social-links","crs-pointer"],[1,"bi","bi-whatsapp","pe-2"],[1,"bi","bi-envelope-fill","fs-5","pe-2"],["href","https://www.linkedin.com/in/abbass-aliii/","target","_blank",1,"anchor-changed","social-links",3,"click"],[1,"bi","bi-linkedin","fs-5","pe-2"],["href","https://github.com/abbass-aliii","target","_blank",1,"anchor-changed","social-links",3,"click"],[1,"bi","bi-github","fs-5","pe-2"],[1,"row","p-0","m-0",2,"height","100px"],[1,"cursor-dot"]],template:function(i,r){i&1&&(_(0,"div",0),q(1,"app-header"),_(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),x(6," HI, I'M "),q(7,"br"),x(8," ABBAS "),y()(),_(9,"div",5)(10,"div",6)(11,"a",7),Q("click",function(){return r.onClick()}),q(12,"i",8),y(),_(13,"a",9),Q("click",function(){return r.onClick()}),q(14,"i",10),y(),_(15,"a",11),Q("click",function(){return r.onClick()}),q(16,"i",12),y()()()(),_(17,"div",13)(18,"div",14)(19,"h3"),x(20,"About Me"),y(),_(21,"p",15),x(22,"A highly motivated and skilled web developer with more than a year of experties in Angular, specializing in building and maintaining responsive, user-friendly web applications. I'm eager to leverage my expertise in front-end development to contribute to innovative and challenging projects."),y()()(),_(23,"div",16)(24,"div",17)(25,"h1",18),x(26,"- RECENT PROJECTS -"),y()(),_(27,"div",19)(28,"div",20)(29,"ul",21)(30,"li",22),Q("click",function(){return r.changeVideo("Bee.mp4")}),_(31,"span",23),x(32,"01"),y(),x(33,"BEE "),q(34,"i",24),y(),_(35,"li",22),Q("click",function(){return r.changeVideo("ELifeSaver.mp4")}),_(36,"span",23),x(37,"02"),y(),x(38,"E-LIFE SAVER "),q(39,"i",24),y(),_(40,"li",22),Q("click",function(){return r.changeVideo("LMS.mp4")}),_(41,"span",23),x(42,"03"),y(),x(43,"LMS "),q(44,"i",24),y(),_(45,"li",22),Q("click",function(){return r.changeVideo("Portfolio.mp4")}),_(46,"span",23),x(47,"04"),y(),x(48,"PORTFOLIO "),q(49,"i",24),y()()(),_(50,"div",25)(51,"div",26)(52,"video",27),q(53,"source",28),y(),_(54,"div",29)(55,"h5",30),x(56),y(),_(57,"p",31),x(58),y()()()()()(),_(59,"div",32)(60,"div",33)(61,"div",34)(62,"i",35),Q("click",function(){return r.onClick(),r.generatePDF()}),y()(),_(63,"div",36)(64,"h1",37),x(65,"ABBAS ALI"),y()(),_(66,"div",36)(67,"h1",38),x(68,"WEB DEVELOPER"),y()(),_(69,"div",39)(70,"p",40),q(71,"i",41),x(72," +92 3341264318"),y(),_(73,"a",42),q(74,"i",43),x(75," abbax2004@gmail.com"),y(),_(76,"p",40),q(77,"i",44),x(78," Rawalpindi, Pakistan"),y()(),_(79,"div",45)(80,"div",46)(81,"div",47)(82,"h1",48),x(83,"OBJECTIVE"),y()(),_(84,"div",36)(85,"p",40),x(86," A highly motivated and skilled web developer with more than a year of experties in Angular, specializing in building and maintaining responsive web applications. Eager to contribute to innovative projects. "),y()(),_(87,"div",47)(88,"h1",48),x(89,"EDUCATION"),y()(),_(90,"div",49)(91,"div",50)(92,"span",51),x(93," Buturab Public School | Karachi , Pakistan "),y(),_(94,"p",40),x(95," Matriculation, Computer Science, April 2020 "),y()(),_(96,"div",50)(97,"span",51),x(98,"Sir Syed College | Rawalpindi , Pakistan "),y(),_(99,"p",40),x(100,"Intermediate, ICS, July 2022"),y()(),_(101,"div",50)(102,"span",51),x(103,"Barani Institute of Information Technology | Rawalpindi , Pakistan "),y(),_(104,"p",40),x(105,"BSCS, Computer Science, June 2026 "),y()()(),_(106,"div",47)(107,"h1",48),x(108,"EXPERIENCE"),y()(),_(109,"div",36)(110,"span",40),x(111,"1 Aug 2022 \u2013 30 September 2023"),y(),_(112,"span",51),x(113,"Web Developer Intern \u2013 Cursa Health"),y(),_(114,"span",40),x(115,"Developed web applications using Angular and WordPress, enhancing functionality and user experience. "),_(116,"a",52),Q("click",function(){return r.onClick()}),x(117,"View Letter"),y()()()(),_(118,"div",53)(119,"div",47)(120,"h1",48),x(121,"EXPERTIES"),y()(),_(122,"div",54)(123,"h1",55),x(124,"- Front-End Development"),y()(),_(125,"div",56)(126,"span",57)(127,"b"),x(128,"Markup & Styling :"),y(),x(129," HTML, CSS, Bootstrap, GSAP"),y(),_(130,"span",57)(131,"b"),x(132,"Frameworks & Libraries :"),y(),x(133," Angular, JQuery, ThreeJS"),y(),_(134,"span",57)(135,"b"),x(136,"Languages :"),y(),x(137," JavaScript, TypeScript"),y()(),_(138,"div",54)(139,"h1",55),x(140,"- Back-End Development"),y()(),_(141,"div",56)(142,"span",57)(143,"b"),x(144,"Frameworks :"),y(),x(145," ExpressJS, NodeJS, ASP.NET MVC"),y(),_(146,"span",57)(147,"b"),x(148,"CMS :"),y(),x(149," WordPress"),y(),_(150,"span",57)(151,"b"),x(152,"Languages :"),y(),x(153," PHP, Python, Java, C++, C#"),y()(),_(154,"div",54)(155,"h1",55),x(156,"- Database Management"),y()(),_(157,"div",56)(158,"span",57)(159,"b"),x(160,"SQL Databases :"),y(),x(161," SQL"),y(),_(162,"span",57)(163,"b"),x(164,"NoSQL Databases :"),y(),x(165," MongoDB"),y()(),_(166,"div",54)(167,"h1",55),x(168,"- Version Controls"),y()(),_(169,"div",56)(170,"span",57)(171,"b"),x(172,"Tools :"),y(),x(173," Git, GitHub"),y()()()()()(),_(174,"div",58)(175,"div",59)(176,"div",60)(177,"h3",61),x(178,"Get In Touch!"),y(),_(179,"div",62)(180,"h3",63),x(181,"I'm here to help you and answere any questions you might have. Look forward to hearing from you!"),y(),_(182,"div",64)(183,"div",65)(184,"p",66),q(185,"i",67),x(186," +92 3341264318"),y(),_(187,"a",7),Q("click",function(){return r.onClick()}),q(188,"i",68),x(189," abbax2004@gmail.com"),y(),_(190,"a",69),Q("click",function(){return r.onClick()}),q(191,"i",70),x(192,"Abbas Ali"),y(),_(193,"a",71),Q("click",function(){return r.onClick()}),q(194,"i",72),x(195,"Abbas Ali"),y()()()()()()(),q(196,"div",73),y(),q(197,"app-footer"),y(),q(198,"div",74)),i&2&&(be(53),Se("src",r.videoSource,Mh),be(3),Ts(r.videoTitle),be(2),Ts(r.videoDiscription))},dependencies:[Hp,Gp,gt]})}}return n})();Ff(Wp,xp).catch(n=>console.error(n));
