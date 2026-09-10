function s1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var a1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sg={exports:{}},nl={},bg={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),l1=Symbol.for("react.portal"),u1=Symbol.for("react.fragment"),c1=Symbol.for("react.strict_mode"),d1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),p1=Symbol.for("react.forward_ref"),m1=Symbol.for("react.suspense"),g1=Symbol.for("react.memo"),v1=Symbol.for("react.lazy"),Bf=Symbol.iterator;function y1(e){return e===null||typeof e!="object"?null:(e=Bf&&e[Bf]||e["@@iterator"],typeof e=="function"?e:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,Cg={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Cg,this.updater=n||kg}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tg(){}Tg.prototype=Nr.prototype;function od(e,t,n){this.props=e,this.context=t,this.refs=Cg,this.updater=n||kg}var sd=od.prototype=new Tg;sd.constructor=od;Pg(sd,Nr.prototype);sd.isPureReactComponent=!0;var Ff=Array.isArray,Lg=Object.prototype.hasOwnProperty,ad={current:null},Ng={key:!0,ref:!0,__self:!0,__source:!0};function Eg(e,t,n){var r,o={},a=null,u=null;if(t!=null)for(r in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(a=""+t.key),t)Lg.call(t,r)&&!Ng.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){for(var f=Array(c),p=0;p<c;p++)f[p]=arguments[p+2];o.children=f}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)o[r]===void 0&&(o[r]=c[r]);return{$$typeof:Qo,type:e,key:a,ref:u,props:o,_owner:ad.current}}function _1(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ld(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function x1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vf=/\/+/g;function iu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?x1(""+e.key):t.toString(36)}function ra(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Qo:case l1:u=!0}}if(u)return u=e,o=o(u),e=r===""?"."+iu(u,0):r,Ff(o)?(n="",e!=null&&(n=e.replace(Vf,"$&/")+"/"),ra(o,t,n,"",function(p){return p})):o!=null&&(ld(o)&&(o=_1(o,n+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(Vf,"$&/")+"/")+e)),t.push(o)),1;if(u=0,r=r===""?".":r+":",Ff(e))for(var c=0;c<e.length;c++){a=e[c];var f=r+iu(a,c);u+=ra(a,t,n,f,o)}else if(f=y1(e),typeof f=="function")for(e=f.call(e),c=0;!(a=e.next()).done;)a=a.value,f=r+iu(a,c++),u+=ra(a,t,n,f,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function Is(e,t,n){if(e==null)return e;var r=[],o=0;return ra(e,r,"","",function(a){return t.call(n,a,o++)}),r}function w1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},oa={transition:null},S1={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:oa,ReactCurrentOwner:ad};function Mg(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!ld(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Nr;le.Fragment=u1;le.Profiler=d1;le.PureComponent=od;le.StrictMode=c1;le.Suspense=m1;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;le.act=Mg;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pg({},e.props),o=e.key,a=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,u=ad.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)Lg.call(t,f)&&!Ng.hasOwnProperty(f)&&(r[f]=t[f]===void 0&&c!==void 0?c[f]:t[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){c=Array(f);for(var p=0;p<f;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:Qo,type:e.type,key:o,ref:a,props:r,_owner:u}};le.createContext=function(e){return e={$$typeof:f1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h1,_context:e},e.Consumer=e};le.createElement=Eg;le.createFactory=function(e){var t=Eg.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:p1,render:e}};le.isValidElement=ld;le.lazy=function(e){return{$$typeof:v1,_payload:{_status:-1,_result:e},_init:w1}};le.memo=function(e,t){return{$$typeof:g1,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=oa.transition;oa.transition={};try{e()}finally{oa.transition=t}};le.unstable_act=Mg;le.useCallback=function(e,t){return ht.current.useCallback(e,t)};le.useContext=function(e){return ht.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};le.useEffect=function(e,t){return ht.current.useEffect(e,t)};le.useId=function(){return ht.current.useId()};le.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return ht.current.useMemo(e,t)};le.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};le.useRef=function(e){return ht.current.useRef(e)};le.useState=function(e){return ht.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return ht.current.useTransition()};le.version="18.3.1";bg.exports=le;var M=bg.exports;const gr=wg(M),b1=s1({__proto__:null,default:gr},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=M,P1=Symbol.for("react.element"),C1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,L1=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function jg(e,t,n){var r,o={},a=null,u=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)T1.call(t,r)&&!N1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:P1,type:e,key:a,ref:u,props:o,_owner:L1.current}}nl.Fragment=C1;nl.jsx=jg;nl.jsxs=jg;Sg.exports=nl;var h=Sg.exports,Uu={},Ag={exports:{}},Mt={},Rg={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,J){var P=I.length;I.push(J);e:for(;0<P;){var C=P-1>>>1,H=I[C];if(0<o(H,J))I[C]=J,I[P]=H,P=C;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var J=I[0],P=I.pop();if(P!==J){I[0]=P;e:for(var C=0,H=I.length,K=H>>>1;C<K;){var $=2*(C+1)-1,Z=I[$],U=$+1,q=I[U];if(0>o(Z,P))U<H&&0>o(q,Z)?(I[C]=q,I[U]=P,C=U):(I[C]=Z,I[$]=P,C=$);else if(U<H&&0>o(q,P))I[C]=q,I[U]=P,C=U;else break e}}return J}function o(I,J){var P=I.sortIndex-J.sortIndex;return P!==0?P:I.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();e.unstable_now=function(){return u.now()-c}}var f=[],p=[],g=1,v=null,_=3,b=!1,E=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(I){for(var J=n(p);J!==null;){if(J.callback===null)r(p);else if(J.startTime<=I)r(p),J.sortIndex=J.expirationTime,t(f,J);else break;J=n(p)}}function A(I){if(k=!1,S(I),!E)if(n(f)!==null)E=!0,me(z);else{var J=n(p);J!==null&&he(A,J.startTime-I)}}function z(I,J){E=!1,k&&(k=!1,w(D),D=-1),b=!0;var P=_;try{for(S(J),v=n(f);v!==null&&(!(v.expirationTime>J)||I&&!ae());){var C=v.callback;if(typeof C=="function"){v.callback=null,_=v.priorityLevel;var H=C(v.expirationTime<=J);J=e.unstable_now(),typeof H=="function"?v.callback=H:v===n(f)&&r(f),S(J)}else r(f);v=n(f)}if(v!==null)var K=!0;else{var $=n(p);$!==null&&he(A,$.startTime-J),K=!1}return K}finally{v=null,_=P,b=!1}}var B=!1,V=null,D=-1,ne=5,X=-1;function ae(){return!(e.unstable_now()-X<ne)}function be(){if(V!==null){var I=e.unstable_now();X=I;var J=!0;try{J=V(!0,I)}finally{J?pt():(B=!1,V=null)}}else B=!1}var pt;if(typeof x=="function")pt=function(){x(be)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,Be=Q.port2;Q.port1.onmessage=be,pt=function(){Be.postMessage(null)}}else pt=function(){N(be,0)};function me(I){V=I,B||(B=!0,pt())}function he(I,J){D=N(function(){I(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){E||b||(E=!0,me(z))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(I){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var P=_;_=J;try{return I()}finally{_=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=_;_=I;try{return J()}finally{_=P}},e.unstable_scheduleCallback=function(I,J,P){var C=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?C+P:C):P=C,I){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=P+H,I={id:g++,callback:J,priorityLevel:I,startTime:P,expirationTime:H,sortIndex:-1},P>C?(I.sortIndex=P,t(p,I),n(f)===null&&I===n(p)&&(k?(w(D),D=-1):k=!0,he(A,P-C))):(I.sortIndex=H,t(f,I),E||b||(E=!0,me(z))),I},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(I){var J=_;return function(){var P=_;_=J;try{return I.apply(this,arguments)}finally{_=P}}}})(zg);Rg.exports=zg;var E1=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=M,Nt=E1;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,To={};function Li(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(To[e]=t,e=0;e<t.length;e++)Ig.add(t[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,j1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hf={},Uf={};function A1(e){return Zu.call(Uf,e)?!0:Zu.call(Hf,e)?!1:j1.test(e)?Uf[e]=!0:(Hf[e]=!0,!1)}function R1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z1(e,t,n,r){if(t===null||typeof t>"u"||R1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,r,o,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ud,cd);tt[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ud,cd);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ud,cd);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function dd(e,t,n,r){var o=tt.hasOwnProperty(t)?tt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z1(t,n,o,r)&&(n=null),r||o===null?A1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nn=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),Og=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=Zf&&e[Zf]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,ru;function so(e){if(ru===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ru=t&&t[1]||""}return`
`+ru+e}var ou=!1;function su(e,t){if(!e||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),a=r.stack.split(`
`),u=o.length-1,c=a.length-1;1<=u&&0<=c&&o[u]!==a[c];)c--;for(;1<=u&&0<=c;u--,c--)if(o[u]!==a[c]){if(u!==1||c!==1)do if(u--,c--,0>c||o[u]!==a[c]){var f=`
`+o[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=c);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?so(e):""}function I1(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=su(e.type,!1),e;case 11:return e=su(e.type.render,!1),e;case 1:return e=su(e.type,!0),e;default:return""}}function Ku(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ki:return"Fragment";case Gi:return"Portal";case Wu:return"Profiler";case hd:return"StrictMode";case $u:return"Suspense";case Gu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dg:return(e.displayName||"Context")+".Consumer";case Og:return(e._context.displayName||"Context")+".Provider";case fd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pd:return t=e.displayName||null,t!==null?t:Ku(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return Ku(e(t))}catch{}}return null}function O1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(t);case 8:return t===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function D1(e){var t=Fg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){e._valueTracker||(e._valueTracker=D1(e))}function Vg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qu(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hg(e,t){t=t.checked,t!=null&&dd(e,"checked",t,!1)}function Yu(e,t){Hg(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xu(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $f(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xu(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ao=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(ao(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function Ug(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,Wg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B1=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){B1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function $g(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function Gg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=$g(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var F1=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(F1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function md(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ic=null,dr=null,hr=null;function qf(e){if(e=ts(e)){if(typeof ic!="function")throw Error(F(280));var t=e.stateNode;t&&(t=al(t),ic(e.stateNode,e.type,t))}}function Kg(e){dr?hr?hr.push(e):hr=[e]:dr=e}function qg(){if(dr){var e=dr,t=hr;if(hr=dr=null,qf(e),t)for(e=0;e<t.length;e++)qf(t[e])}}function Yg(e,t){return e(t)}function Xg(){}var au=!1;function Qg(e,t,n){if(au)return e(t,n);au=!0;try{return Yg(e,t,n)}finally{au=!1,(dr!==null||hr!==null)&&(Xg(),qg())}}function No(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var rc=!1;if(kn)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){rc=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{rc=!1}function V1(e,t,n,r,o,a,u,c,f){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var mo=!1,wa=null,Sa=!1,oc=null,H1={onError:function(e){mo=!0,wa=e}};function U1(e,t,n,r,o,a,u,c,f){mo=!1,wa=null,V1.apply(H1,arguments)}function Z1(e,t,n,r,o,a,u,c,f){if(U1.apply(this,arguments),mo){if(mo){var p=wa;mo=!1,wa=null}else throw Error(F(198));Sa||(Sa=!0,oc=p)}}function Ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yf(e){if(Ni(e)!==e)throw Error(F(188))}function W1(e){var t=e.alternate;if(!t){if(t=Ni(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Yf(o),e;if(a===r)return Yf(o),t;a=a.sibling}throw Error(F(188))}if(n.return!==r.return)n=o,r=a;else{for(var u=!1,c=o.child;c;){if(c===n){u=!0,n=o,r=a;break}if(c===r){u=!0,r=o,n=a;break}c=c.sibling}if(!u){for(c=a.child;c;){if(c===n){u=!0,n=a,r=o;break}if(c===r){u=!0,r=a,n=o;break}c=c.sibling}if(!u)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function ev(e){return e=W1(e),e!==null?tv(e):null}function tv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tv(e);if(t!==null)return t;e=e.sibling}return null}var nv=Nt.unstable_scheduleCallback,Xf=Nt.unstable_cancelCallback,$1=Nt.unstable_shouldYield,G1=Nt.unstable_requestPaint,De=Nt.unstable_now,K1=Nt.unstable_getCurrentPriorityLevel,gd=Nt.unstable_ImmediatePriority,iv=Nt.unstable_UserBlockingPriority,ba=Nt.unstable_NormalPriority,q1=Nt.unstable_LowPriority,rv=Nt.unstable_IdlePriority,il=null,ln=null;function Y1(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:J1,X1=Math.log,Q1=Math.LN2;function J1(e){return e>>>=0,e===0?32:31-(X1(e)/Q1|0)|0}var Fs=64,Vs=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var c=u&~o;c!==0?r=lo(c):(a&=u,a!==0&&(r=lo(a)))}else u=n&~o,u!==0?r=lo(u):a!==0&&(r=lo(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xt(t),o=1<<n,r|=e[n],t&=~o;return r}function ew(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-Xt(a),c=1<<u,f=o[u];f===-1?(!(c&n)||c&r)&&(o[u]=ew(c,t)):f<=t&&(e.expiredLanes|=c),a&=~c}}function sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ov(){var e=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),e}function lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=n}function nw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ye=0;function sv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var av,yd,lv,uv,cv,ac=!1,Hs=[],Vn=null,Hn=null,Un=null,Eo=new Map,Mo=new Map,In=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(t.pointerId)}}function Jr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ts(t),t!==null&&yd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rw(e,t,n,r,o){switch(t){case"focusin":return Vn=Jr(Vn,e,t,n,r,o),!0;case"dragenter":return Hn=Jr(Hn,e,t,n,r,o),!0;case"mouseover":return Un=Jr(Un,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Eo.set(a,Jr(Eo.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Mo.set(a,Jr(Mo.get(a)||null,e,t,n,r,o)),!0}return!1}function dv(e){var t=mi(e.target);if(t!==null){var n=Ni(t);if(n!==null){if(t=n.tag,t===13){if(t=Jg(n),t!==null){e.blockedOn=t,cv(e.priority,function(){lv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return t=ts(n),t!==null&&yd(t),e.blockedOn=n,!1;t.shift()}return!0}function Jf(e,t,n){sa(e)&&n.delete(t)}function ow(){ac=!1,Vn!==null&&sa(Vn)&&(Vn=null),Hn!==null&&sa(Hn)&&(Hn=null),Un!==null&&sa(Un)&&(Un=null),Eo.forEach(Jf),Mo.forEach(Jf)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,ow)))}function jo(e){function t(o){return eo(o,e)}if(0<Hs.length){eo(Hs[0],e);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&eo(Vn,e),Hn!==null&&eo(Hn,e),Un!==null&&eo(Un,e),Eo.forEach(t),Mo.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)dv(n),n.blockedOn===null&&In.shift()}var fr=Nn.ReactCurrentBatchConfig,Pa=!0;function sw(e,t,n,r){var o=ye,a=fr.transition;fr.transition=null;try{ye=1,_d(e,t,n,r)}finally{ye=o,fr.transition=a}}function aw(e,t,n,r){var o=ye,a=fr.transition;fr.transition=null;try{ye=4,_d(e,t,n,r)}finally{ye=o,fr.transition=a}}function _d(e,t,n,r){if(Pa){var o=lc(e,t,n,r);if(o===null)yu(e,t,r,Ca,n),Qf(e,r);else if(rw(o,e,t,n,r))r.stopPropagation();else if(Qf(e,r),t&4&&-1<iw.indexOf(e)){for(;o!==null;){var a=ts(o);if(a!==null&&av(a),a=lc(e,t,n,r),a===null&&yu(e,t,r,Ca,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else yu(e,t,r,null,n)}}var Ca=null;function lc(e,t,n,r){if(Ca=null,e=md(r),e=mi(e),e!==null)if(t=Ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function hv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K1()){case gd:return 1;case iv:return 4;case ba:case q1:return 16;case rv:return 536870912;default:return 16}default:return 16}}var Dn=null,xd=null,aa=null;function fv(){if(aa)return aa;var e,t=xd,n=t.length,r,o="value"in Dn?Dn.value:Dn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[a-r];r++);return aa=o.slice(e,1<r?1-r:void 0)}function la(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function ep(){return!1}function jt(e){function t(n,r,o,a,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Us:ep,this.isPropagationStopped=ep,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=jt(Er),es=je({},Er,{view:0,detail:0}),lw=jt(es),uu,cu,to,rl=je({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(uu=e.screenX-to.screenX,cu=e.screenY-to.screenY):cu=uu=0,to=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),tp=jt(rl),uw=je({},rl,{dataTransfer:0}),cw=jt(uw),dw=je({},es,{relatedTarget:0}),du=jt(dw),hw=je({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),fw=jt(hw),pw=je({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mw=jt(pw),gw=je({},Er,{data:0}),np=jt(gw),vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_w[e])?!!t[e]:!1}function Sd(){return xw}var ww=je({},es,{key:function(e){if(e.key){var t=vw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=la(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(e){return e.type==="keypress"?la(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?la(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sw=jt(ww),bw=je({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=jt(bw),kw=je({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),Pw=jt(kw),Cw=je({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=jt(Cw),Lw=je({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nw=jt(Lw),Ew=[9,13,27,32],bd=kn&&"CompositionEvent"in window,go=null;kn&&"documentMode"in document&&(go=document.documentMode);var Mw=kn&&"TextEvent"in window&&!go,pv=kn&&(!bd||go&&8<go&&11>=go),rp=" ",op=!1;function mv(e,t){switch(e){case"keyup":return Ew.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function jw(e,t){switch(e){case"compositionend":return gv(t);case"keypress":return t.which!==32?null:(op=!0,rp);case"textInput":return e=t.data,e===rp&&op?null:e;default:return null}}function Aw(e,t){if(qi)return e==="compositionend"||!bd&&mv(e,t)?(e=fv(),aa=xd=Dn=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pv&&t.locale!=="ko"?null:t.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rw[e.type]:t==="textarea"}function vv(e,t,n,r){Kg(r),t=Ta(t,"onChange"),0<t.length&&(n=new wd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,Ao=null;function zw(e){Lv(e,0)}function ol(e){var t=Qi(e);if(Vg(t))return e}function Iw(e,t){if(e==="change")return t}var yv=!1;if(kn){var hu;if(kn){var fu="oninput"in document;if(!fu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),fu=typeof ap.oninput=="function"}hu=fu}else hu=!1;yv=hu&&(!document.documentMode||9<document.documentMode)}function lp(){vo&&(vo.detachEvent("onpropertychange",_v),Ao=vo=null)}function _v(e){if(e.propertyName==="value"&&ol(Ao)){var t=[];vv(t,Ao,e,md(e)),Qg(zw,t)}}function Ow(e,t,n){e==="focusin"?(lp(),vo=t,Ao=n,vo.attachEvent("onpropertychange",_v)):e==="focusout"&&lp()}function Dw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Ao)}function Bw(e,t){if(e==="click")return ol(t)}function Fw(e,t){if(e==="input"||e==="change")return ol(t)}function Vw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Vw;function Ro(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zu.call(t,o)||!Jt(e[o],t[o]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cp(e,t){var n=up(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function xv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wv(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hw(e){var t=wv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(r!==null&&kd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=cp(n,a);var u=cp(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uw=kn&&"documentMode"in document&&11>=document.documentMode,Yi=null,uc=null,yo=null,cc=!1;function dp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||Yi==null||Yi!==xa(r)||(r=Yi,"selectionStart"in r&&kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Ro(yo,r)||(yo=r,r=Ta(uc,"onSelect"),0<r.length&&(t=new wd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yi)))}function Zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xi={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},pu={},Sv={};kn&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function sl(e){if(pu[e])return pu[e];if(!Xi[e])return e;var t=Xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sv)return pu[e]=t[n];return e}var bv=sl("animationend"),kv=sl("animationiteration"),Pv=sl("animationstart"),Cv=sl("transitionend"),Tv=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(e,t){Tv.set(e,t),Li(t,[e])}for(var mu=0;mu<hp.length;mu++){var gu=hp[mu],Zw=gu.toLowerCase(),Ww=gu[0].toUpperCase()+gu.slice(1);ei(Zw,"on"+Ww)}ei(bv,"onAnimationEnd");ei(kv,"onAnimationIteration");ei(Pv,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(Cv,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Li("onBeforeInput",["compositionend","keypress","textInput","paste"]);Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$w=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function fp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Z1(r,t,void 0,e),e.currentTarget=null}function Lv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var c=r[u],f=c.instance,p=c.currentTarget;if(c=c.listener,f!==a&&o.isPropagationStopped())break e;fp(o,c,p),a=f}else for(u=0;u<r.length;u++){if(c=r[u],f=c.instance,p=c.currentTarget,c=c.listener,f!==a&&o.isPropagationStopped())break e;fp(o,c,p),a=f}}}if(Sa)throw e=oc,Sa=!1,oc=null,e}function ke(e,t){var n=t[mc];n===void 0&&(n=t[mc]=new Set);var r=e+"__bubble";n.has(r)||(Nv(t,e,2,!1),n.add(r))}function vu(e,t,n){var r=0;t&&(r|=4),Nv(n,e,r,t)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[Ws]){e[Ws]=!0,Ig.forEach(function(n){n!=="selectionchange"&&($w.has(n)||vu(n,!1,e),vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ws]||(t[Ws]=!0,vu("selectionchange",!1,t))}}function Nv(e,t,n,r){switch(hv(t)){case 1:var o=sw;break;case 4:o=aw;break;default:o=_d}n=o.bind(null,t,n,e),o=void 0,!rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yu(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;u=u.return}for(;c!==null;){if(u=mi(c),u===null)return;if(f=u.tag,f===5||f===6){r=a=u;continue e}c=c.parentNode}}r=r.return}Qg(function(){var p=a,g=md(n),v=[];e:{var _=Tv.get(e);if(_!==void 0){var b=wd,E=e;switch(e){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":b=Sw;break;case"focusin":E="focus",b=du;break;case"focusout":E="blur",b=du;break;case"beforeblur":case"afterblur":b=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=cw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Pw;break;case bv:case kv:case Pv:b=fw;break;case Cv:b=Tw;break;case"scroll":b=lw;break;case"wheel":b=Nw;break;case"copy":case"cut":case"paste":b=mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ip}var k=(t&4)!==0,N=!k&&e==="scroll",w=k?_!==null?_+"Capture":null:_;k=[];for(var x=p,S;x!==null;){S=x;var A=S.stateNode;if(S.tag===5&&A!==null&&(S=A,w!==null&&(A=No(x,w),A!=null&&k.push(Io(x,A,S)))),N)break;x=x.return}0<k.length&&(_=new b(_,E,null,n,g),v.push({event:_,listeners:k}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",_&&n!==nc&&(E=n.relatedTarget||n.fromElement)&&(mi(E)||E[Pn]))break e;if((b||_)&&(_=g.window===g?g:(_=g.ownerDocument)?_.defaultView||_.parentWindow:window,b?(E=n.relatedTarget||n.toElement,b=p,E=E?mi(E):null,E!==null&&(N=Ni(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(b=null,E=p),b!==E)){if(k=tp,A="onMouseLeave",w="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(k=ip,A="onPointerLeave",w="onPointerEnter",x="pointer"),N=b==null?_:Qi(b),S=E==null?_:Qi(E),_=new k(A,x+"leave",b,n,g),_.target=N,_.relatedTarget=S,A=null,mi(g)===p&&(k=new k(w,x+"enter",E,n,g),k.target=S,k.relatedTarget=N,A=k),N=A,b&&E)t:{for(k=b,w=E,x=0,S=k;S;S=Wi(S))x++;for(S=0,A=w;A;A=Wi(A))S++;for(;0<x-S;)k=Wi(k),x--;for(;0<S-x;)w=Wi(w),S--;for(;x--;){if(k===w||w!==null&&k===w.alternate)break t;k=Wi(k),w=Wi(w)}k=null}else k=null;b!==null&&pp(v,_,b,k,!1),E!==null&&N!==null&&pp(v,N,E,k,!0)}}e:{if(_=p?Qi(p):window,b=_.nodeName&&_.nodeName.toLowerCase(),b==="select"||b==="input"&&_.type==="file")var z=Iw;else if(sp(_))if(yv)z=Fw;else{z=Dw;var B=Ow}else(b=_.nodeName)&&b.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(z=Bw);if(z&&(z=z(e,p))){vv(v,z,n,g);break e}B&&B(e,_,p),e==="focusout"&&(B=_._wrapperState)&&B.controlled&&_.type==="number"&&Xu(_,"number",_.value)}switch(B=p?Qi(p):window,e){case"focusin":(sp(B)||B.contentEditable==="true")&&(Yi=B,uc=p,yo=null);break;case"focusout":yo=uc=Yi=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,dp(v,n,g);break;case"selectionchange":if(Uw)break;case"keydown":case"keyup":dp(v,n,g)}var V;if(bd)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else qi?mv(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(pv&&n.locale!=="ko"&&(qi||D!=="onCompositionStart"?D==="onCompositionEnd"&&qi&&(V=fv()):(Dn=g,xd="value"in Dn?Dn.value:Dn.textContent,qi=!0)),B=Ta(p,D),0<B.length&&(D=new np(D,e,null,n,g),v.push({event:D,listeners:B}),V?D.data=V:(V=gv(n),V!==null&&(D.data=V)))),(V=Mw?jw(e,n):Aw(e,n))&&(p=Ta(p,"onBeforeInput"),0<p.length&&(g=new np("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:p}),g.data=V))}Lv(v,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=No(e,n),a!=null&&r.unshift(Io(e,a,o)),a=No(e,t),a!=null&&r.push(Io(e,a,o))),e=e.return}return r}function Wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pp(e,t,n,r,o){for(var a=t._reactName,u=[];n!==null&&n!==r;){var c=n,f=c.alternate,p=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&p!==null&&(c=p,o?(f=No(n,a),f!=null&&u.unshift(Io(n,f,c))):o||(f=No(n,a),f!=null&&u.push(Io(n,f,c)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Gw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function mp(e){return(typeof e=="string"?e:""+e).replace(Gw,`
`).replace(Kw,"")}function $s(e,t,n){if(t=mp(t),mp(e)!==t&&n)throw Error(F(425))}function La(){}var dc=null,hc=null;function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,qw=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,Yw=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(Xw)}:pc;function Xw(e){setTimeout(function(){throw e})}function _u(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);jo(t)}function Zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),an="__reactFiber$"+Mr,Oo="__reactProps$"+Mr,Pn="__reactContainer$"+Mr,mc="__reactEvents$"+Mr,Qw="__reactListeners$"+Mr,Jw="__reactHandles$"+Mr;function mi(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vp(e);e!==null;){if(n=e[an])return n;e=vp(e)}return t}e=n,n=e.parentNode}return null}function ts(e){return e=e[an]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function al(e){return e[Oo]||null}var gc=[],Ji=-1;function ti(e){return{current:e}}function Pe(e){0>Ji||(e.current=gc[Ji],gc[Ji]=null,Ji--)}function Se(e,t){Ji++,gc[Ji]=e.current,e.current=t}var Xn={},at=ti(Xn),wt=ti(!1),Si=Xn;function yr(e,t){var n=e.type.contextTypes;if(!n)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function St(e){return e=e.childContextTypes,e!=null}function Na(){Pe(wt),Pe(at)}function yp(e,t,n){if(at.current!==Xn)throw Error(F(168));Se(at,t),Se(wt,n)}function Ev(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(F(108,O1(e)||"Unknown",o));return je({},n,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,Si=at.current,Se(at,e),Se(wt,wt.current),!0}function _p(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Ev(e,t,Si),r.__reactInternalMemoizedMergedChildContext=e,Pe(wt),Pe(at),Se(at,e)):Pe(wt),Se(wt,n)}var yn=null,ll=!1,xu=!1;function Mv(e){yn===null?yn=[e]:yn.push(e)}function e2(e){ll=!0,Mv(e)}function ni(){if(!xu&&yn!==null){xu=!0;var e=0,t=ye;try{var n=yn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yn=null,ll=!1}catch(o){throw yn!==null&&(yn=yn.slice(e+1)),nv(gd,ni),o}finally{ye=t,xu=!1}}return null}var er=[],tr=0,Ma=null,ja=0,Dt=[],Bt=0,bi=null,_n=1,xn="";function ci(e,t){er[tr++]=ja,er[tr++]=Ma,Ma=e,ja=t}function jv(e,t,n){Dt[Bt++]=_n,Dt[Bt++]=xn,Dt[Bt++]=bi,bi=e;var r=_n;e=xn;var o=32-Xt(r)-1;r&=~(1<<o),n+=1;var a=32-Xt(t)+o;if(30<a){var u=o-o%5;a=(r&(1<<u)-1).toString(32),r>>=u,o-=u,_n=1<<32-Xt(t)+o|n<<o|r,xn=a+e}else _n=1<<a|n<<o|r,xn=e}function Pd(e){e.return!==null&&(ci(e,1),jv(e,1,0))}function Cd(e){for(;e===Ma;)Ma=er[--tr],er[tr]=null,ja=er[--tr],er[tr]=null;for(;e===bi;)bi=Dt[--Bt],Dt[Bt]=null,xn=Dt[--Bt],Dt[Bt]=null,_n=Dt[--Bt],Dt[Bt]=null}var Tt=null,Ct=null,Te=!1,Yt=null;function Av(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Ct=Zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bi!==null?{id:_n,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Ct=null,!0):!1;default:return!1}}function vc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yc(e){if(Te){var t=Ct;if(t){var n=t;if(!xp(e,t)){if(vc(e))throw Error(F(418));t=Zn(n.nextSibling);var r=Tt;t&&xp(e,t)?Av(r,n):(e.flags=e.flags&-4097|2,Te=!1,Tt=e)}}else{if(vc(e))throw Error(F(418));e.flags=e.flags&-4097|2,Te=!1,Tt=e}}}function wp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Gs(e){if(e!==Tt)return!1;if(!Te)return wp(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fc(e.type,e.memoizedProps)),t&&(t=Ct)){if(vc(e))throw Rv(),Error(F(418));for(;t;)Av(e,t),t=Zn(t.nextSibling)}if(wp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ct=Zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ct=null}}else Ct=Tt?Zn(e.stateNode.nextSibling):null;return!0}function Rv(){for(var e=Ct;e;)e=Zn(e.nextSibling)}function _r(){Ct=Tt=null,Te=!1}function Td(e){Yt===null?Yt=[e]:Yt.push(e)}var t2=Nn.ReactCurrentBatchConfig;function no(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var c=o.refs;u===null?delete c[a]:c[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ks(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sp(e){var t=e._init;return t(e._payload)}function zv(e){function t(w,x){if(e){var S=w.deletions;S===null?(w.deletions=[x],w.flags|=16):S.push(x)}}function n(w,x){if(!e)return null;for(;x!==null;)t(w,x),x=x.sibling;return null}function r(w,x){for(w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function o(w,x){return w=Kn(w,x),w.index=0,w.sibling=null,w}function a(w,x,S){return w.index=S,e?(S=w.alternate,S!==null?(S=S.index,S<x?(w.flags|=2,x):S):(w.flags|=2,x)):(w.flags|=1048576,x)}function u(w){return e&&w.alternate===null&&(w.flags|=2),w}function c(w,x,S,A){return x===null||x.tag!==6?(x=Tu(S,w.mode,A),x.return=w,x):(x=o(x,S),x.return=w,x)}function f(w,x,S,A){var z=S.type;return z===Ki?g(w,x,S.props.children,A,S.key):x!==null&&(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Rn&&Sp(z)===x.type)?(A=o(x,S.props),A.ref=no(w,x,S),A.return=w,A):(A=ma(S.type,S.key,S.props,null,w.mode,A),A.ref=no(w,x,S),A.return=w,A)}function p(w,x,S,A){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Lu(S,w.mode,A),x.return=w,x):(x=o(x,S.children||[]),x.return=w,x)}function g(w,x,S,A,z){return x===null||x.tag!==7?(x=xi(S,w.mode,A,z),x.return=w,x):(x=o(x,S),x.return=w,x)}function v(w,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Tu(""+x,w.mode,S),x.return=w,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Os:return S=ma(x.type,x.key,x.props,null,w.mode,S),S.ref=no(w,null,x),S.return=w,S;case Gi:return x=Lu(x,w.mode,S),x.return=w,x;case Rn:var A=x._init;return v(w,A(x._payload),S)}if(ao(x)||Xr(x))return x=xi(x,w.mode,S,null),x.return=w,x;Ks(w,x)}return null}function _(w,x,S,A){var z=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:c(w,x,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Os:return S.key===z?f(w,x,S,A):null;case Gi:return S.key===z?p(w,x,S,A):null;case Rn:return z=S._init,_(w,x,z(S._payload),A)}if(ao(S)||Xr(S))return z!==null?null:g(w,x,S,A,null);Ks(w,S)}return null}function b(w,x,S,A,z){if(typeof A=="string"&&A!==""||typeof A=="number")return w=w.get(S)||null,c(x,w,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Os:return w=w.get(A.key===null?S:A.key)||null,f(x,w,A,z);case Gi:return w=w.get(A.key===null?S:A.key)||null,p(x,w,A,z);case Rn:var B=A._init;return b(w,x,S,B(A._payload),z)}if(ao(A)||Xr(A))return w=w.get(S)||null,g(x,w,A,z,null);Ks(x,A)}return null}function E(w,x,S,A){for(var z=null,B=null,V=x,D=x=0,ne=null;V!==null&&D<S.length;D++){V.index>D?(ne=V,V=null):ne=V.sibling;var X=_(w,V,S[D],A);if(X===null){V===null&&(V=ne);break}e&&V&&X.alternate===null&&t(w,V),x=a(X,x,D),B===null?z=X:B.sibling=X,B=X,V=ne}if(D===S.length)return n(w,V),Te&&ci(w,D),z;if(V===null){for(;D<S.length;D++)V=v(w,S[D],A),V!==null&&(x=a(V,x,D),B===null?z=V:B.sibling=V,B=V);return Te&&ci(w,D),z}for(V=r(w,V);D<S.length;D++)ne=b(V,w,D,S[D],A),ne!==null&&(e&&ne.alternate!==null&&V.delete(ne.key===null?D:ne.key),x=a(ne,x,D),B===null?z=ne:B.sibling=ne,B=ne);return e&&V.forEach(function(ae){return t(w,ae)}),Te&&ci(w,D),z}function k(w,x,S,A){var z=Xr(S);if(typeof z!="function")throw Error(F(150));if(S=z.call(S),S==null)throw Error(F(151));for(var B=z=null,V=x,D=x=0,ne=null,X=S.next();V!==null&&!X.done;D++,X=S.next()){V.index>D?(ne=V,V=null):ne=V.sibling;var ae=_(w,V,X.value,A);if(ae===null){V===null&&(V=ne);break}e&&V&&ae.alternate===null&&t(w,V),x=a(ae,x,D),B===null?z=ae:B.sibling=ae,B=ae,V=ne}if(X.done)return n(w,V),Te&&ci(w,D),z;if(V===null){for(;!X.done;D++,X=S.next())X=v(w,X.value,A),X!==null&&(x=a(X,x,D),B===null?z=X:B.sibling=X,B=X);return Te&&ci(w,D),z}for(V=r(w,V);!X.done;D++,X=S.next())X=b(V,w,D,X.value,A),X!==null&&(e&&X.alternate!==null&&V.delete(X.key===null?D:X.key),x=a(X,x,D),B===null?z=X:B.sibling=X,B=X);return e&&V.forEach(function(be){return t(w,be)}),Te&&ci(w,D),z}function N(w,x,S,A){if(typeof S=="object"&&S!==null&&S.type===Ki&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Os:e:{for(var z=S.key,B=x;B!==null;){if(B.key===z){if(z=S.type,z===Ki){if(B.tag===7){n(w,B.sibling),x=o(B,S.props.children),x.return=w,w=x;break e}}else if(B.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Rn&&Sp(z)===B.type){n(w,B.sibling),x=o(B,S.props),x.ref=no(w,B,S),x.return=w,w=x;break e}n(w,B);break}else t(w,B);B=B.sibling}S.type===Ki?(x=xi(S.props.children,w.mode,A,S.key),x.return=w,w=x):(A=ma(S.type,S.key,S.props,null,w.mode,A),A.ref=no(w,x,S),A.return=w,w=A)}return u(w);case Gi:e:{for(B=S.key;x!==null;){if(x.key===B)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(w,x.sibling),x=o(x,S.children||[]),x.return=w,w=x;break e}else{n(w,x);break}else t(w,x);x=x.sibling}x=Lu(S,w.mode,A),x.return=w,w=x}return u(w);case Rn:return B=S._init,N(w,x,B(S._payload),A)}if(ao(S))return E(w,x,S,A);if(Xr(S))return k(w,x,S,A);Ks(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(w,x.sibling),x=o(x,S),x.return=w,w=x):(n(w,x),x=Tu(S,w.mode,A),x.return=w,w=x),u(w)):n(w,x)}return N}var xr=zv(!0),Iv=zv(!1),Aa=ti(null),Ra=null,nr=null,Ld=null;function Nd(){Ld=nr=Ra=null}function Ed(e){var t=Aa.current;Pe(Aa),e._currentValue=t}function _c(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Ra=e,Ld=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Ld!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ra===null)throw Error(F(308));nr=e,Ra.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var gi=null;function Md(e){gi===null?gi=[e]:gi.push(e)}function Ov(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Md(t)):(n.next=o.next,o.next=n),t.interleaved=n,Cn(e,r)}function Cn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function jd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Cn(e,n)}return o=r.interleaved,o===null?(t.next=t,Md(r)):(t.next=o.next,o.next=t),r.interleaved=t,Cn(e,n)}function ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}function bp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,r){var o=e.updateQueue;zn=!1;var a=o.firstBaseUpdate,u=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,p=f.next;f.next=null,u===null?a=p:u.next=p,u=f;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==u&&(c===null?g.firstBaseUpdate=p:c.next=p,g.lastBaseUpdate=f))}if(a!==null){var v=o.baseState;u=0,g=p=f=null,c=a;do{var _=c.lane,b=c.eventTime;if((r&_)===_){g!==null&&(g=g.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var E=e,k=c;switch(_=t,b=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){v=E.call(b,v,_);break e}v=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,_=typeof E=="function"?E.call(b,v,_):E,_==null)break e;v=je({},v,_);break e;case 2:zn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[c]:_.push(c))}else b={eventTime:b,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(p=g=b,f=v):g=g.next=b,u|=_;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;_=c,c=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);if(g===null&&(f=v),o.baseState=f,o.firstBaseUpdate=p,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Pi|=u,e.lanes=u,e.memoizedState=v}}function kp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(F(191,o));o.call(r)}}}var ns={},un=ti(ns),Do=ti(ns),Bo=ti(ns);function vi(e){if(e===ns)throw Error(F(174));return e}function Ad(e,t){switch(Se(Bo,t),Se(Do,e),Se(un,ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ju(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ju(t,e)}Pe(un),Se(un,t)}function wr(){Pe(un),Pe(Do),Pe(Bo)}function Bv(e){vi(Bo.current);var t=vi(un.current),n=Ju(t,e.type);t!==n&&(Se(Do,e),Se(un,n))}function Rd(e){Do.current===e&&(Pe(un),Pe(Do))}var Ne=ti(0);function Ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wu=[];function zd(){for(var e=0;e<wu.length;e++)wu[e]._workInProgressVersionPrimary=null;wu.length=0}var ca=Nn.ReactCurrentDispatcher,Su=Nn.ReactCurrentBatchConfig,ki=0,Me=null,Ze=null,Ge=null,Oa=!1,_o=!1,Fo=0,n2=0;function nt(){throw Error(F(321))}function Id(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Od(e,t,n,r,o,a){if(ki=a,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?s2:a2,e=n(r,o),_o){a=0;do{if(_o=!1,Fo=0,25<=a)throw Error(F(301));a+=1,Ge=Ze=null,t.updateQueue=null,ca.current=l2,e=n(r,o)}while(_o)}if(ca.current=Da,t=Ze!==null&&Ze.next!==null,ki=0,Ge=Ze=Me=null,Oa=!1,t)throw Error(F(300));return e}function Dd(){var e=Fo!==0;return Fo=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Me.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Ut(){if(Ze===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=Ge===null?Me.memoizedState:Ge.next;if(t!==null)Ge=t,Ze=e;else{if(e===null)throw Error(F(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Ge===null?Me.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Vo(e,t){return typeof t=="function"?t(e):t}function bu(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Ze,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var u=o.next;o.next=a.next,a.next=u}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var c=u=null,f=null,p=a;do{var g=p.lane;if((ki&g)===g)f!==null&&(f=f.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};f===null?(c=f=v,u=r):f=f.next=v,Me.lanes|=g,Pi|=g}p=p.next}while(p!==null&&p!==a);f===null?u=r:f.next=c,Jt(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Me.lanes|=a,Pi|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ku(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do a=e(a,u.action),u=u.next;while(u!==o);Jt(a,t.memoizedState)||(xt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Fv(){}function Vv(e,t){var n=Me,r=Ut(),o=t(),a=!Jt(r.memoizedState,o);if(a&&(r.memoizedState=o,xt=!0),r=r.queue,Bd(Zv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ho(9,Uv.bind(null,n,r,o,t),void 0,null),Ke===null)throw Error(F(349));ki&30||Hv(n,t,o)}return o}function Hv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uv(e,t,n,r){t.value=n,t.getSnapshot=r,Wv(t)&&$v(e)}function Zv(e,t,n){return n(function(){Wv(t)&&$v(e)})}function Wv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function $v(e){var t=Cn(e,1);t!==null&&Qt(t,e,1,-1)}function Pp(e){var t=sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=o2.bind(null,Me,e),[t.memoizedState,e]}function Ho(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gv(){return Ut().memoizedState}function da(e,t,n,r){var o=sn();Me.flags|=e,o.memoizedState=Ho(1|t,n,void 0,r===void 0?null:r)}function ul(e,t,n,r){var o=Ut();r=r===void 0?null:r;var a=void 0;if(Ze!==null){var u=Ze.memoizedState;if(a=u.destroy,r!==null&&Id(r,u.deps)){o.memoizedState=Ho(t,n,a,r);return}}Me.flags|=e,o.memoizedState=Ho(1|t,n,a,r)}function Cp(e,t){return da(8390656,8,e,t)}function Bd(e,t){return ul(2048,8,e,t)}function Kv(e,t){return ul(4,2,e,t)}function qv(e,t){return ul(4,4,e,t)}function Yv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xv(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,Yv.bind(null,t,e),n)}function Fd(){}function Qv(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Id(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jv(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Id(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ey(e,t,n){return ki&21?(Jt(n,t)||(n=ov(),Me.lanes|=n,Pi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function i2(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=Su.transition;Su.transition={};try{e(!1),t()}finally{ye=n,Su.transition=r}}function ty(){return Ut().memoizedState}function r2(e,t,n){var r=Gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ny(e))iy(t,n);else if(n=Ov(e,t,n,r),n!==null){var o=dt();Qt(n,e,r,o),ry(n,t,r)}}function o2(e,t,n){var r=Gn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ny(e))iy(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,c=a(u,n);if(o.hasEagerState=!0,o.eagerState=c,Jt(c,u)){var f=t.interleaved;f===null?(o.next=o,Md(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=Ov(e,t,o,r),n!==null&&(o=dt(),Qt(n,e,r,o),ry(n,t,r))}}function ny(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function iy(e,t){_o=Oa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ry(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vd(e,n)}}var Da={readContext:Ht,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},s2={readContext:Ht,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:Cp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,da(4194308,4,Yv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return da(4194308,4,e,t)},useInsertionEffect:function(e,t){return da(4,2,e,t)},useMemo:function(e,t){var n=sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r2.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:Pp,useDebugValue:Fd,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=Pp(!1),t=e[0];return e=i2.bind(null,e[1]),sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,o=sn();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ke===null)throw Error(F(349));ki&30||Hv(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Cp(Zv.bind(null,r,a,e),[e]),r.flags|=2048,Ho(9,Uv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=sn(),t=Ke.identifierPrefix;if(Te){var n=xn,r=_n;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a2={readContext:Ht,useCallback:Qv,useContext:Ht,useEffect:Bd,useImperativeHandle:Xv,useInsertionEffect:Kv,useLayoutEffect:qv,useMemo:Jv,useReducer:bu,useRef:Gv,useState:function(){return bu(Vo)},useDebugValue:Fd,useDeferredValue:function(e){var t=Ut();return ey(t,Ze.memoizedState,e)},useTransition:function(){var e=bu(Vo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:Fv,useSyncExternalStore:Vv,useId:ty,unstable_isNewReconciler:!1},l2={readContext:Ht,useCallback:Qv,useContext:Ht,useEffect:Bd,useImperativeHandle:Xv,useInsertionEffect:Kv,useLayoutEffect:qv,useMemo:Jv,useReducer:ku,useRef:Gv,useState:function(){return ku(Vo)},useDebugValue:Fd,useDeferredValue:function(e){var t=Ut();return Ze===null?t.memoizedState=e:ey(t,Ze.memoizedState,e)},useTransition:function(){var e=ku(Vo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:Fv,useSyncExternalStore:Vv,useId:ty,unstable_isNewReconciler:!1};function Kt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),o=Gn(e),a=wn(r,o);a.payload=t,n!=null&&(a.callback=n),t=Wn(e,a,o),t!==null&&(Qt(t,e,o,r),ua(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),o=Gn(e),a=wn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Wn(e,a,o),t!==null&&(Qt(t,e,o,r),ua(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=Gn(e),o=wn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wn(e,o,r),t!==null&&(Qt(t,e,r,n),ua(t,e,r))}};function Tp(e,t,n,r,o,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!Ro(n,r)||!Ro(o,a):!0}function oy(e,t,n){var r=!1,o=Xn,a=t.contextType;return typeof a=="object"&&a!==null?a=Ht(a):(o=St(t)?Si:at.current,r=t.contextTypes,a=(r=r!=null)?yr(e,o):Xn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Lp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function wc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},jd(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ht(a):(a=St(t)?Si:at.current,o.context=yr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(xc(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),za(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=I1(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Pu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u2=typeof WeakMap=="function"?WeakMap:Map;function sy(e,t,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fa||(Fa=!0,jc=r),Sc(e,t)},n}function ay(e,t,n){n=wn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Sc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Sc(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Np(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=b2.bind(null,e,t,n),t.then(e,e))}function Ep(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e)}var c2=Nn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?Iv(t,null,n,r):xr(t,e.child,n,r)}function jp(e,t,n,r,o){n=n.render;var a=t.ref;return pr(t,o),r=Od(e,t,n,r,a,o),n=Dd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tn(e,t,o)):(Te&&n&&Pd(t),t.flags|=1,ct(e,t,r,o),t.child)}function Ap(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Kd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ly(e,t,a,r,o)):(e=ma(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(u,r)&&e.ref===t.ref)return Tn(e,t,o)}return t.flags|=1,e=Kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function ly(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Ro(a,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Tn(e,t,o)}return bc(e,t,n,r,o)}function uy(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(rr,Pt),Pt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(rr,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Se(rr,Pt),Pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Se(rr,Pt),Pt|=r;return ct(e,t,o,n),t.child}function cy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bc(e,t,n,r,o){var a=St(n)?Si:at.current;return a=yr(t,a),pr(t,o),n=Od(e,t,n,r,a,o),r=Dd(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tn(e,t,o)):(Te&&r&&Pd(t),t.flags|=1,ct(e,t,n,o),t.child)}function Rp(e,t,n,r,o){if(St(n)){var a=!0;Ea(t)}else a=!1;if(pr(t,o),t.stateNode===null)ha(e,t),oy(t,n,r),wc(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,c=t.memoizedProps;u.props=c;var f=u.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ht(p):(p=St(n)?Si:at.current,p=yr(t,p));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function";v||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==r||f!==p)&&Lp(t,u,r,p),zn=!1;var _=t.memoizedState;u.state=_,za(t,r,u,o),f=t.memoizedState,c!==r||_!==f||wt.current||zn?(typeof g=="function"&&(xc(t,n,g,r),f=t.memoizedState),(c=zn||Tp(t,n,c,r,_,f,p))?(v||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),u.props=r,u.state=f,u.context=p,r=c):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Dv(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:Kt(t.type,c),u.props=p,v=t.pendingProps,_=u.context,f=n.contextType,typeof f=="object"&&f!==null?f=Ht(f):(f=St(n)?Si:at.current,f=yr(t,f));var b=n.getDerivedStateFromProps;(g=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==v||_!==f)&&Lp(t,u,r,f),zn=!1,_=t.memoizedState,u.state=_,za(t,r,u,o);var E=t.memoizedState;c!==v||_!==E||wt.current||zn?(typeof b=="function"&&(xc(t,n,b,r),E=t.memoizedState),(p=zn||Tp(t,n,p,r,_,E,f)||!1)?(g||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,E,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,E,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),u.props=r,u.state=E,u.context=f,r=p):(typeof u.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return kc(e,t,n,r,a,o)}function kc(e,t,n,r,o,a){cy(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&_p(t,n,!1),Tn(e,t,a);r=t.stateNode,c2.current=t;var c=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=xr(t,e.child,null,a),t.child=xr(t,null,c,a)):ct(e,t,c,a),t.memoizedState=r.state,o&&_p(t,n,!0),t.child}function dy(e){var t=e.stateNode;t.pendingContext?yp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yp(e,t.context,!1),Ad(e,t.containerInfo)}function zp(e,t,n,r,o){return _r(),Td(o),t.flags|=256,ct(e,t,n,r),t.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function hy(e,t,n){var r=t.pendingProps,o=Ne.current,a=!1,u=(t.flags&128)!==0,c;if((c=u)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Se(Ne,o&1),e===null)return yc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=u):a=fl(u,r,0,null),e=xi(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Cc(n),t.memoizedState=Pc,e):Vd(t,u));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return d2(e,t,u,r,c,o,n);if(a){a=r.fallback,u=t.mode,o=e.child,c=o.sibling;var f={mode:"hidden",children:r.children};return!(u&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=Kn(o,f),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?a=Kn(c,a):(a=xi(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?Cc(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=Pc,r}return a=e.child,e=a.sibling,r=Kn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vd(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qs(e,t,n,r){return r!==null&&Td(r),xr(t,e.child,null,n),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d2(e,t,n,r,o,a,u){if(n)return t.flags&256?(t.flags&=-257,r=Pu(Error(F(422))),qs(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=fl({mode:"visible",children:r.children},o,0,null),a=xi(a,o,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&xr(t,e.child,null,u),t.child.memoizedState=Cc(u),t.memoizedState=Pc,a);if(!(t.mode&1))return qs(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(F(419)),r=Pu(a,r,void 0),qs(e,t,u,r)}if(c=(u&e.childLanes)!==0,xt||c){if(r=Ke,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|u)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Cn(e,o),Qt(r,e,o,-1))}return Gd(),r=Pu(Error(F(421))),qs(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=k2.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ct=Zn(o.nextSibling),Tt=t,Te=!0,Yt=null,e!==null&&(Dt[Bt++]=_n,Dt[Bt++]=xn,Dt[Bt++]=bi,_n=e.id,xn=e.overflow,bi=t),t=Vd(t,r.children),t.flags|=4096,t)}function Ip(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_c(e.return,t,n)}function Cu(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function fy(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ct(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Cu(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Cu(t,!0,n,null,a);break;case"together":Cu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h2(e,t,n){switch(t.tag){case 3:dy(t),_r();break;case 5:Bv(t);break;case 1:St(t.type)&&Ea(t);break;case 4:Ad(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Se(Aa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?hy(e,t,n):(Se(Ne,Ne.current&1),e=Tn(e,t,n),e!==null?e.sibling:null);Se(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Se(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,uy(e,t,n)}return Tn(e,t,n)}var py,Tc,my,gy;py=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tc=function(){};my=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vi(un.current);var a=null;switch(n){case"input":o=qu(e,o),r=qu(e,r),a=[];break;case"select":o=je({},o,{value:void 0}),r=je({},r,{value:void 0}),a=[];break;case"textarea":o=Qu(e,o),r=Qu(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=La)}ec(n,r);var u;n=null;for(p in o)if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var c=o[p];for(u in c)c.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(To.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in r){var f=r[p];if(c=o!=null?o[p]:void 0,r.hasOwnProperty(p)&&f!==c&&(f!=null||c!=null))if(p==="style")if(c){for(u in c)!c.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in f)f.hasOwnProperty(u)&&c[u]!==f[u]&&(n||(n={}),n[u]=f[u])}else n||(a||(a=[]),a.push(p,n)),n=f;else p==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(a=a||[]).push(p,f)):p==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(p,""+f):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(To.hasOwnProperty(p)?(f!=null&&p==="onScroll"&&ke("scroll",e),a||c===f||(a=[])):(a=a||[]).push(p,f))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};gy=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f2(e,t,n){var r=t.pendingProps;switch(Cd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return St(t.type)&&Na(),it(t),null;case 3:return r=t.stateNode,wr(),Pe(wt),Pe(at),zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Gs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(zc(Yt),Yt=null))),Tc(e,t),it(t),null;case 5:Rd(t);var o=vi(Bo.current);if(n=t.type,e!==null&&t.stateNode!=null)my(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return it(t),null}if(e=vi(un.current),Gs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[an]=t,r[Oo]=a,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(o=0;o<uo.length;o++)ke(uo[o],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Wf(r,a),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ke("invalid",r);break;case"textarea":Gf(r,a),ke("invalid",r)}ec(n,a),o=null;for(var u in a)if(a.hasOwnProperty(u)){var c=a[u];u==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&$s(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&$s(r.textContent,c,e),o=["children",""+c]):To.hasOwnProperty(u)&&c!=null&&u==="onScroll"&&ke("scroll",r)}switch(n){case"input":Ds(r),$f(r,a,!0);break;case"textarea":Ds(r),Kf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=La)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[an]=t,e[Oo]=r,py(e,t,!1,!1),t.stateNode=e;e:{switch(u=tc(n,r),n){case"dialog":ke("cancel",e),ke("close",e),o=r;break;case"iframe":case"object":case"embed":ke("load",e),o=r;break;case"video":case"audio":for(o=0;o<uo.length;o++)ke(uo[o],e);o=r;break;case"source":ke("error",e),o=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),o=r;break;case"details":ke("toggle",e),o=r;break;case"input":Wf(e,r),o=qu(e,r),ke("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=je({},r,{value:void 0}),ke("invalid",e);break;case"textarea":Gf(e,r),o=Qu(e,r),ke("invalid",e);break;default:o=r}ec(n,o),c=o;for(a in c)if(c.hasOwnProperty(a)){var f=c[a];a==="style"?Gg(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Wg(e,f)):a==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Lo(e,f):typeof f=="number"&&Lo(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(To.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ke("scroll",e):f!=null&&dd(e,a,f,u))}switch(n){case"input":Ds(e),$f(e,r,!1);break;case"textarea":Ds(e),Kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?cr(e,!!r.multiple,a,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=La)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)gy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=vi(Bo.current),vi(un.current),Gs(t)){if(r=t.stateNode,n=t.memoizedProps,r[an]=t,(a=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:$s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=t,t.stateNode=r}return it(t),null;case 13:if(Pe(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&Ct!==null&&t.mode&1&&!(t.flags&128))Rv(),_r(),t.flags|=98560,a=!1;else if(a=Gs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[an]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),a=!1}else Yt!==null&&(zc(Yt),Yt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?We===0&&(We=3):Gd())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return wr(),Tc(e,t),e===null&&zo(t.stateNode.containerInfo),it(t),null;case 10:return Ed(t.type._context),it(t),null;case 17:return St(t.type)&&Na(),it(t),null;case 19:if(Pe(Ne),a=t.memoizedState,a===null)return it(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)io(a,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Ia(e),u!==null){for(t.flags|=128,io(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Ne,Ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&De()>br&&(t.flags|=128,r=!0,io(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ia(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Te)return it(t),null}else 2*De()-a.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,io(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=De(),t.sibling=null,n=Ne.current,Se(Ne,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return $d(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function p2(e,t){switch(Cd(t),t.tag){case 1:return St(t.type)&&Na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Pe(wt),Pe(at),zd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rd(t),null;case 13:if(Pe(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Ne),null;case 4:return wr(),null;case 10:return Ed(t.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var Ys=!1,ot=!1,m2=typeof WeakSet=="function"?WeakSet:Set,G=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function Lc(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Op=!1;function g2(e,t){if(dc=Pa,e=wv(),kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,c=-1,f=-1,p=0,g=0,v=e,_=null;t:for(;;){for(var b;v!==n||o!==0&&v.nodeType!==3||(c=u+o),v!==a||r!==0&&v.nodeType!==3||(f=u+r),v.nodeType===3&&(u+=v.nodeValue.length),(b=v.firstChild)!==null;)_=v,v=b;for(;;){if(v===e)break t;if(_===n&&++p===o&&(c=u),_===a&&++g===r&&(f=u),(b=v.nextSibling)!==null)break;v=_,_=v.parentNode}v=b}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},Pa=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,N=E.memoizedState,w=t.stateNode,x=w.getSnapshotBeforeUpdate(t.elementType===t.type?k:Kt(t.type,k),N);w.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(A){Re(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return E=Op,Op=!1,E}function xo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Lc(t,n,a)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vy(e){var t=e.alternate;t!==null&&(e.alternate=null,vy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Oo],delete t[mc],delete t[Qw],delete t[Jw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yy(e){return e.tag===5||e.tag===3||e.tag===4}function Dp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=La));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}var Xe=null,qt=!1;function jn(e,t,n){for(n=n.child;n!==null;)_y(e,t,n),n=n.sibling}function _y(e,t,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:ot||ir(n,t);case 6:var r=Xe,o=qt;Xe=null,jn(e,t,n),Xe=r,qt=o,Xe!==null&&(qt?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(qt?(e=Xe,n=n.stateNode,e.nodeType===8?_u(e.parentNode,n):e.nodeType===1&&_u(e,n),jo(e)):_u(Xe,n.stateNode));break;case 4:r=Xe,o=qt,Xe=n.stateNode.containerInfo,qt=!0,jn(e,t,n),Xe=r,qt=o;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,u=a.destroy;a=a.tag,u!==void 0&&(a&2||a&4)&&Lc(n,t,u),o=o.next}while(o!==r)}jn(e,t,n);break;case 1:if(!ot&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Re(n,t,c)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,jn(e,t,n),ot=r):jn(e,t,n);break;default:jn(e,t,n)}}function Bp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m2),t.forEach(function(r){var o=P2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 5:Xe=c.stateNode,qt=!1;break e;case 3:Xe=c.stateNode.containerInfo,qt=!0;break e;case 4:Xe=c.stateNode.containerInfo,qt=!0;break e}c=c.return}if(Xe===null)throw Error(F(160));_y(a,u,o),Xe=null,qt=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(p){Re(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xy(t,e),t=t.sibling}function xy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),on(e),r&4){try{xo(3,e,e.return),dl(3,e)}catch(k){Re(e,e.return,k)}try{xo(5,e,e.return)}catch(k){Re(e,e.return,k)}}break;case 1:$t(t,e),on(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if($t(t,e),on(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var o=e.stateNode;try{Lo(o,"")}catch(k){Re(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Hg(o,a),tc(c,u);var p=tc(c,a);for(u=0;u<f.length;u+=2){var g=f[u],v=f[u+1];g==="style"?Gg(o,v):g==="dangerouslySetInnerHTML"?Wg(o,v):g==="children"?Lo(o,v):dd(o,g,v,p)}switch(c){case"input":Yu(o,a);break;case"textarea":Ug(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?cr(o,!!a.multiple,b,!1):_!==!!a.multiple&&(a.defaultValue!=null?cr(o,!!a.multiple,a.defaultValue,!0):cr(o,!!a.multiple,a.multiple?[]:"",!1))}o[Oo]=a}catch(k){Re(e,e.return,k)}}break;case 6:if($t(t,e),on(e),r&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(k){Re(e,e.return,k)}}break;case 3:if($t(t,e),on(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(t.containerInfo)}catch(k){Re(e,e.return,k)}break;case 4:$t(t,e),on(e);break;case 13:$t(t,e),on(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Zd=De())),r&4&&Bp(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(p=ot)||g,$t(t,e),ot=p):$t(t,e),on(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(G=e,g=e.child;g!==null;){for(v=G=g;G!==null;){switch(_=G,b=_.child,_.tag){case 0:case 11:case 14:case 15:xo(4,_,_.return);break;case 1:ir(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){Re(r,n,k)}}break;case 5:ir(_,_.return);break;case 22:if(_.memoizedState!==null){Vp(v);continue}}b!==null?(b.return=_,G=b):Vp(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{o=v.stateNode,p?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=v.stateNode,f=v.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=$g("display",u))}catch(k){Re(e,e.return,k)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(k){Re(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:$t(t,e),on(e),r&4&&Bp(e);break;case 21:break;default:$t(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yy(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lo(o,""),r.flags&=-33);var a=Dp(e);Mc(e,a,o);break;case 3:case 4:var u=r.stateNode.containerInfo,c=Dp(e);Ec(e,c,u);break;default:throw Error(F(161))}}catch(f){Re(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v2(e,t,n){G=e,wy(e)}function wy(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var o=G,a=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||Ys;if(!u){var c=o.alternate,f=c!==null&&c.memoizedState!==null||ot;c=Ys;var p=ot;if(Ys=u,(ot=f)&&!p)for(G=o;G!==null;)u=G,f=u.child,u.tag===22&&u.memoizedState!==null?Hp(o):f!==null?(f.return=u,G=f):Hp(o);for(;a!==null;)G=a,wy(a),a=a.sibling;G=o,Ys=c,ot=p}Fp(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,G=a):Fp(e)}}function Fp(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&kp(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kp(t,u,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&jo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||t.flags&512&&Nc(t)}catch(_){Re(t,t.return,_)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Vp(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Hp(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(f){Re(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){Re(t,o,f)}}var a=t.return;try{Nc(t)}catch(f){Re(t,a,f)}break;case 5:var u=t.return;try{Nc(t)}catch(f){Re(t,u,f)}}}catch(f){Re(t,t.return,f)}if(t===e){G=null;break}var c=t.sibling;if(c!==null){c.return=t.return,G=c;break}G=t.return}}var y2=Math.ceil,Ba=Nn.ReactCurrentDispatcher,Hd=Nn.ReactCurrentOwner,Vt=Nn.ReactCurrentBatchConfig,de=0,Ke=null,He=null,et=0,Pt=0,rr=ti(0),We=0,Uo=null,Pi=0,hl=0,Ud=0,wo=null,yt=null,Zd=0,br=1/0,vn=null,Fa=!1,jc=null,$n=null,Xs=!1,Bn=null,Va=0,So=0,Ac=null,fa=-1,pa=0;function dt(){return de&6?De():fa!==-1?fa:fa=De()}function Gn(e){return e.mode&1?de&2&&et!==0?et&-et:t2.transition!==null?(pa===0&&(pa=ov()),pa):(e=ye,e!==0||(e=window.event,e=e===void 0?16:hv(e.type)),e):1}function Qt(e,t,n,r){if(50<So)throw So=0,Ac=null,Error(F(185));Jo(e,n,r),(!(de&2)||e!==Ke)&&(e===Ke&&(!(de&2)&&(hl|=n),We===4&&On(e,et)),bt(e,r),n===1&&de===0&&!(t.mode&1)&&(br=De()+500,ll&&ni()))}function bt(e,t){var n=e.callbackNode;tw(e,t);var r=ka(e,e===Ke?et:0);if(r===0)n!==null&&Xf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xf(n),t===1)e.tag===0?e2(Up.bind(null,e)):Mv(Up.bind(null,e)),Yw(function(){!(de&6)&&ni()}),n=null;else{switch(sv(r)){case 1:n=gd;break;case 4:n=iv;break;case 16:n=ba;break;case 536870912:n=rv;break;default:n=ba}n=Ny(n,Sy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sy(e,t){if(fa=-1,pa=0,de&6)throw Error(F(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=ka(e,e===Ke?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ha(e,r);else{t=r;var o=de;de|=2;var a=ky();(Ke!==e||et!==t)&&(vn=null,br=De()+500,_i(e,t));do try{w2();break}catch(c){by(e,c)}while(!0);Nd(),Ba.current=a,de=o,He!==null?t=0:(Ke=null,et=0,t=We)}if(t!==0){if(t===2&&(o=sc(e),o!==0&&(r=o,t=Rc(e,o))),t===1)throw n=Uo,_i(e,0),On(e,r),bt(e,De()),n;if(t===6)On(e,r);else{if(o=e.current.alternate,!(r&30)&&!_2(o)&&(t=Ha(e,r),t===2&&(a=sc(e),a!==0&&(r=a,t=Rc(e,a))),t===1))throw n=Uo,_i(e,0),On(e,r),bt(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:di(e,yt,vn);break;case 3:if(On(e,r),(r&130023424)===r&&(t=Zd+500-De(),10<t)){if(ka(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=pc(di.bind(null,e,yt,vn),t);break}di(e,yt,vn);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-Xt(r);a=1<<u,u=t[u],u>o&&(o=u),r&=~a}if(r=o,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y2(r/1960))-r,10<r){e.timeoutHandle=pc(di.bind(null,e,yt,vn),r);break}di(e,yt,vn);break;case 5:di(e,yt,vn);break;default:throw Error(F(329))}}}return bt(e,De()),e.callbackNode===n?Sy.bind(null,e):null}function Rc(e,t){var n=wo;return e.current.memoizedState.isDehydrated&&(_i(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=yt,yt=n,t!==null&&zc(t)),e}function zc(e){yt===null?yt=e:yt.push.apply(yt,e)}function _2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Jt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~Ud,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xt(t),r=1<<n;e[n]=-1,t&=~r}}function Up(e){if(de&6)throw Error(F(327));mr();var t=ka(e,0);if(!(t&1))return bt(e,De()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=sc(e);r!==0&&(t=r,n=Rc(e,r))}if(n===1)throw n=Uo,_i(e,0),On(e,t),bt(e,De()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,di(e,yt,vn),bt(e,De()),null}function Wd(e,t){var n=de;de|=1;try{return e(t)}finally{de=n,de===0&&(br=De()+500,ll&&ni())}}function Ci(e){Bn!==null&&Bn.tag===0&&!(de&6)&&mr();var t=de;de|=1;var n=Vt.transition,r=ye;try{if(Vt.transition=null,ye=1,e)return e()}finally{ye=r,Vt.transition=n,de=t,!(de&6)&&ni()}}function $d(){Pt=rr.current,Pe(rr)}function _i(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qw(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Na();break;case 3:wr(),Pe(wt),Pe(at),zd();break;case 5:Rd(r);break;case 4:wr();break;case 13:Pe(Ne);break;case 19:Pe(Ne);break;case 10:Ed(r.type._context);break;case 22:case 23:$d()}n=n.return}if(Ke=e,He=e=Kn(e.current,null),et=Pt=t,We=0,Uo=null,Ud=hl=Pi=0,yt=wo=null,gi!==null){for(t=0;t<gi.length;t++)if(n=gi[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=o,r.next=u}n.pending=r}gi=null}return e}function by(e,t){do{var n=He;try{if(Nd(),ca.current=Da,Oa){for(var r=Me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oa=!1}if(ki=0,Ge=Ze=Me=null,_o=!1,Fo=0,Hd.current=null,n===null||n.return===null){We=1,Uo=t,He=null;break}e:{var a=e,u=n.return,c=n,f=t;if(t=et,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=f,g=c,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var _=g.alternate;_?(g.updateQueue=_.updateQueue,g.memoizedState=_.memoizedState,g.lanes=_.lanes):(g.updateQueue=null,g.memoizedState=null)}var b=Ep(u);if(b!==null){b.flags&=-257,Mp(b,u,c,a,t),b.mode&1&&Np(a,p,t),t=b,f=p;var E=t.updateQueue;if(E===null){var k=new Set;k.add(f),t.updateQueue=k}else E.add(f);break e}else{if(!(t&1)){Np(a,p,t),Gd();break e}f=Error(F(426))}}else if(Te&&c.mode&1){var N=Ep(u);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Mp(N,u,c,a,t),Td(Sr(f,c));break e}}a=f=Sr(f,c),We!==4&&(We=2),wo===null?wo=[a]:wo.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var w=sy(a,f,t);bp(a,w);break e;case 1:c=f;var x=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&($n===null||!$n.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var A=ay(a,c,t);bp(a,A);break e}}a=a.return}while(a!==null)}Cy(n)}catch(z){t=z,He===n&&n!==null&&(He=n=n.return);continue}break}while(!0)}function ky(){var e=Ba.current;return Ba.current=Da,e===null?Da:e}function Gd(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(Pi&268435455)&&!(hl&268435455)||On(Ke,et)}function Ha(e,t){var n=de;de|=2;var r=ky();(Ke!==e||et!==t)&&(vn=null,_i(e,t));do try{x2();break}catch(o){by(e,o)}while(!0);if(Nd(),de=n,Ba.current=r,He!==null)throw Error(F(261));return Ke=null,et=0,We}function x2(){for(;He!==null;)Py(He)}function w2(){for(;He!==null&&!$1();)Py(He)}function Py(e){var t=Ly(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Cy(e):He=t,Hd.current=null}function Cy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p2(n,t),n!==null){n.flags&=32767,He=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,He=null;return}}else if(n=f2(n,t,Pt),n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);We===0&&(We=5)}function di(e,t,n){var r=ye,o=Vt.transition;try{Vt.transition=null,ye=1,S2(e,t,n,r)}finally{Vt.transition=o,ye=r}return null}function S2(e,t,n,r){do mr();while(Bn!==null);if(de&6)throw Error(F(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nw(e,a),e===Ke&&(He=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Ny(ba,function(){return mr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Vt.transition,Vt.transition=null;var u=ye;ye=1;var c=de;de|=4,Hd.current=null,g2(e,n),xy(n,e),Hw(hc),Pa=!!dc,hc=dc=null,e.current=n,v2(n),G1(),de=c,ye=u,Vt.transition=a}else e.current=n;if(Xs&&(Xs=!1,Bn=e,Va=o),a=e.pendingLanes,a===0&&($n=null),Y1(n.stateNode),bt(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fa)throw Fa=!1,e=jc,jc=null,e;return Va&1&&e.tag!==0&&mr(),a=e.pendingLanes,a&1?e===Ac?So++:(So=0,Ac=e):So=0,ni(),null}function mr(){if(Bn!==null){var e=sv(Va),t=Vt.transition,n=ye;try{if(Vt.transition=null,ye=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,Va=0,de&6)throw Error(F(331));var o=de;for(de|=4,G=e.current;G!==null;){var a=G,u=a.child;if(G.flags&16){var c=a.deletions;if(c!==null){for(var f=0;f<c.length;f++){var p=c[f];for(G=p;G!==null;){var g=G;switch(g.tag){case 0:case 11:case 15:xo(8,g,a)}var v=g.child;if(v!==null)v.return=g,G=v;else for(;G!==null;){g=G;var _=g.sibling,b=g.return;if(vy(g),g===p){G=null;break}if(_!==null){_.return=b,G=_;break}G=b}}}var E=a.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}G=a}}if(a.subtreeFlags&2064&&u!==null)u.return=a,G=u;else e:for(;G!==null;){if(a=G,a.flags&2048)switch(a.tag){case 0:case 11:case 15:xo(9,a,a.return)}var w=a.sibling;if(w!==null){w.return=a.return,G=w;break e}G=a.return}}var x=e.current;for(G=x;G!==null;){u=G;var S=u.child;if(u.subtreeFlags&2064&&S!==null)S.return=u,G=S;else e:for(u=x;G!==null;){if(c=G,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:dl(9,c)}}catch(z){Re(c,c.return,z)}if(c===u){G=null;break e}var A=c.sibling;if(A!==null){A.return=c.return,G=A;break e}G=c.return}}if(de=o,ni(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{ye=n,Vt.transition=t}}return!1}function Zp(e,t,n){t=Sr(n,t),t=sy(e,t,1),e=Wn(e,t,1),t=dt(),e!==null&&(Jo(e,1,t),bt(e,t))}function Re(e,t,n){if(e.tag===3)Zp(e,e,n);else for(;t!==null;){if(t.tag===3){Zp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Sr(n,e),e=ay(t,e,1),t=Wn(t,e,1),e=dt(),t!==null&&(Jo(t,1,e),bt(t,e));break}}t=t.return}}function b2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(et&n)===n&&(We===4||We===3&&(et&130023424)===et&&500>De()-Zd?_i(e,0):Ud|=n),bt(e,t)}function Ty(e,t){t===0&&(e.mode&1?(t=Vs,Vs<<=1,!(Vs&130023424)&&(Vs=4194304)):t=1);var n=dt();e=Cn(e,t),e!==null&&(Jo(e,t,n),bt(e,n))}function k2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ty(e,n)}function P2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),Ty(e,n)}var Ly;Ly=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,h2(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Te&&t.flags&1048576&&jv(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ha(e,t),e=t.pendingProps;var o=yr(t,at.current);pr(t,n),o=Od(null,t,r,e,o,n);var a=Dd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(a=!0,Ea(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,jd(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,wc(t,r,e,n),t=kc(null,t,r,!0,a,n)):(t.tag=0,Te&&a&&Pd(t),ct(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=T2(r),e=Kt(r,e),o){case 0:t=bc(null,t,r,e,n);break e;case 1:t=Rp(null,t,r,e,n);break e;case 11:t=jp(null,t,r,e,n);break e;case 14:t=Ap(null,t,r,Kt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kt(r,o),bc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kt(r,o),Rp(e,t,r,o,n);case 3:e:{if(dy(t),e===null)throw Error(F(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Dv(e,t),za(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Sr(Error(F(423)),t),t=zp(e,t,r,n,o);break e}else if(r!==o){o=Sr(Error(F(424)),t),t=zp(e,t,r,n,o);break e}else for(Ct=Zn(t.stateNode.containerInfo.firstChild),Tt=t,Te=!0,Yt=null,n=Iv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===o){t=Tn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return Bv(t),e===null&&yc(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,u=o.children,fc(r,o)?u=null:a!==null&&fc(r,a)&&(t.flags|=32),cy(e,t),ct(e,t,u,n),t.child;case 6:return e===null&&yc(t),null;case 13:return hy(e,t,n);case 4:return Ad(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kt(r,o),jp(e,t,r,o,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,u=o.value,Se(Aa,r._currentValue),r._currentValue=u,a!==null)if(Jt(a.value,u)){if(a.children===o.children&&!wt.current){t=Tn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){u=a.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(a.tag===1){f=wn(-1,n&-n),f.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?f.next=f:(f.next=g.next,g.next=f),p.pending=f}}a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),_c(a.return,n,t),c.lanes|=n;break}f=f.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(F(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),_c(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}ct(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=Ht(o),r=r(o),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,o=Kt(r,t.pendingProps),o=Kt(r.type,o),Ap(e,t,r,o,n);case 15:return ly(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Kt(r,o),ha(e,t),t.tag=1,St(r)?(e=!0,Ea(t)):e=!1,pr(t,n),oy(t,r,o),wc(t,r,o,n),kc(null,t,r,!0,e,n);case 19:return fy(e,t,n);case 22:return uy(e,t,n)}throw Error(F(156,t.tag))};function Ny(e,t){return nv(e,t)}function C2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new C2(e,t,n,r)}function Kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T2(e){if(typeof e=="function")return Kd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fd)return 11;if(e===pd)return 14}return 2}function Kn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ma(e,t,n,r,o,a){var u=2;if(r=e,typeof e=="function")Kd(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case Ki:return xi(n.children,o,a,t);case hd:u=8,o|=8;break;case Wu:return e=Ft(12,n,t,o|2),e.elementType=Wu,e.lanes=a,e;case $u:return e=Ft(13,n,t,o),e.elementType=$u,e.lanes=a,e;case Gu:return e=Ft(19,n,t,o),e.elementType=Gu,e.lanes=a,e;case Bg:return fl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Og:u=10;break e;case Dg:u=9;break e;case fd:u=11;break e;case pd:u=14;break e;case Rn:u=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ft(u,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function xi(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Bg,e.lanes=n,e.stateNode={isHidden:!1},e}function Tu(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Lu(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function qd(e,t,n,r,o,a,u,c,f){return e=new L2(e,t,n,c,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(a),e}function N2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ey(e){if(!e)return Xn;e=e._reactInternals;e:{if(Ni(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(St(n))return Ev(e,n,t)}return t}function My(e,t,n,r,o,a,u,c,f){return e=qd(n,r,!0,e,o,a,u,c,f),e.context=Ey(null),n=e.current,r=dt(),o=Gn(n),a=wn(r,o),a.callback=t??null,Wn(n,a,o),e.current.lanes=o,Jo(e,o,r),bt(e,r),e}function pl(e,t,n,r){var o=t.current,a=dt(),u=Gn(o);return n=Ey(n),t.context===null?t.context=n:t.pendingContext=n,t=wn(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(o,t,u),e!==null&&(Qt(e,o,u,a),ua(e,o,u)),u}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yd(e,t){Wp(e,t),(e=e.alternate)&&Wp(e,t)}function E2(){return null}var jy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xd(e){this._internalRoot=e}ml.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));pl(e,t,null,null)};ml.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ci(function(){pl(null,e,null,null)}),t[Pn]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=uv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&dv(e)}};function Qd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $p(){}function M2(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var p=Ua(u);a.call(p)}}var u=My(t,r,e,0,null,!1,!1,"",$p);return e._reactRootContainer=u,e[Pn]=u.current,zo(e.nodeType===8?e.parentNode:e),Ci(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var p=Ua(f);c.call(p)}}var f=qd(e,0,!1,null,null,!1,!1,"",$p);return e._reactRootContainer=f,e[Pn]=f.current,zo(e.nodeType===8?e.parentNode:e),Ci(function(){pl(t,f,n,r)}),f}function vl(e,t,n,r,o){var a=n._reactRootContainer;if(a){var u=a;if(typeof o=="function"){var c=o;o=function(){var f=Ua(u);c.call(f)}}pl(t,u,e,o)}else u=M2(n,t,e,o,r);return Ua(u)}av=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(vd(t,n|1),bt(t,De()),!(de&6)&&(br=De()+500,ni()))}break;case 13:Ci(function(){var r=Cn(e,1);if(r!==null){var o=dt();Qt(r,e,1,o)}}),Yd(e,1)}};yd=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var n=dt();Qt(t,e,134217728,n)}Yd(e,134217728)}};lv=function(e){if(e.tag===13){var t=Gn(e),n=Cn(e,t);if(n!==null){var r=dt();Qt(n,e,t,r)}Yd(e,t)}};uv=function(){return ye};cv=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};ic=function(e,t,n){switch(t){case"input":if(Yu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=al(r);if(!o)throw Error(F(90));Vg(r),Yu(r,o)}}}break;case"textarea":Ug(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Yg=Wd;Xg=Ci;var j2={usingClientEntryPoint:!1,Events:[ts,Qi,al,Kg,qg,Wd]},ro={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A2={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ev(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||E2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{il=Qs.inject(A2),ln=Qs}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j2;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(t))throw Error(F(200));return N2(e,t,null,n)};Mt.createRoot=function(e,t){if(!Qd(e))throw Error(F(299));var n=!1,r="",o=jy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=qd(e,1,!1,null,null,n,!1,r,o),e[Pn]=t.current,zo(e.nodeType===8?e.parentNode:e),new Xd(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=ev(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Ci(e)};Mt.hydrate=function(e,t,n){if(!gl(t))throw Error(F(200));return vl(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!Qd(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",u=jy;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=My(t,null,e,1,n??null,o,!1,a,u),e[Pn]=t.current,zo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ml(t)};Mt.render=function(e,t,n){if(!gl(t))throw Error(F(200));return vl(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!gl(e))throw Error(F(40));return e._reactRootContainer?(Ci(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Wd;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return vl(e,t,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function Ay(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ay)}catch(e){console.error(e)}}Ay(),Ag.exports=Mt;var Ry=Ag.exports,Gp=Ry;Uu.createRoot=Gp.createRoot,Uu.hydrateRoot=Gp.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(null,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const Kp="popstate";function R2(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:u,hash:c}=r.location;return Ic("",{pathname:a,search:u,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Za(o)}return I2(t,n,null,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zy(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z2(){return Math.random().toString(36).substr(2,8)}function qp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ic(e,t,n,r){return n===void 0&&(n=null),Zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:n,key:t&&t.key||r||z2()})}function Za(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,u=o.history,c=Fn.Pop,f=null,p=g();p==null&&(p=0,u.replaceState(Zo({},u.state,{idx:p}),""));function g(){return(u.state||{idx:null}).idx}function v(){c=Fn.Pop;let N=g(),w=N==null?null:N-p;p=N,f&&f({action:c,location:k.location,delta:w})}function _(N,w){c=Fn.Push;let x=Ic(k.location,N,w);p=g()+1;let S=qp(x,p),A=k.createHref(x);try{u.pushState(S,"",A)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(A)}a&&f&&f({action:c,location:k.location,delta:1})}function b(N,w){c=Fn.Replace;let x=Ic(k.location,N,w);p=g();let S=qp(x,p),A=k.createHref(x);u.replaceState(S,"",A),a&&f&&f({action:c,location:k.location,delta:0})}function E(N){let w=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof N=="string"?N:Za(N);return x=x.replace(/ $/,"%20"),Ue(w,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,w)}let k={get action(){return c},get location(){return e(o,u)},listen(N){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Kp,v),f=N,()=>{o.removeEventListener(Kp,v),f=null}},createHref(N){return t(o,N)},createURL:E,encodeLocation(N){let w=E(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:_,replace:b,go(N){return u.go(N)}};return k}var Yp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yp||(Yp={}));function O2(e,t,n){return n===void 0&&(n="/"),D2(e,t,n)}function D2(e,t,n,r){let o=typeof t=="string"?jr(t):t,a=Jd(o.pathname||"/",n);if(a==null)return null;let u=Iy(e);B2(u);let c=null,f=X2(a);for(let p=0;c==null&&p<u.length;++p)c=K2(u[p],f);return c}function Iy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,u,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(Ue(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=qn([r,f.relativePath]),g=n.concat(f);a.children&&a.children.length>0&&(Ue(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Iy(a.children,t,g,p)),!(a.path==null&&!a.index)&&t.push({path:p,score:$2(p,a.index),routesMeta:g})};return e.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))o(a,u);else for(let f of Oy(a.path))o(a,u,f)}),t}function Oy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let u=Oy(r.join("/")),c=[];return c.push(...u.map(f=>f===""?a:[a,f].join("/"))),o&&c.push(...u),c.map(f=>e.startsWith("/")&&f===""?"/":f)}function B2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F2=/^:[\w-]+$/,V2=3,H2=2,U2=1,Z2=10,W2=-2,Xp=e=>e==="*";function $2(e,t){let n=e.split("/"),r=n.length;return n.some(Xp)&&(r+=W2),t&&(r+=H2),n.filter(o=>!Xp(o)).reduce((o,a)=>o+(F2.test(a)?V2:a===""?U2:Z2),r)}function G2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function K2(e,t,n){let{routesMeta:r}=e,o={},a="/",u=[];for(let c=0;c<r.length;++c){let f=r[c],p=c===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",v=q2({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},g),_=f.route;if(!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:qn([a,v.pathname]),pathnameBase:eS(qn([a,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(a=qn([a,v.pathnameBase]))}return u}function q2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Y2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],u=a.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:r.reduce((p,g,v)=>{let{paramName:_,isOptional:b}=g;if(_==="*"){let k=c[v]||"";u=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const E=c[v];return b&&!E?p[_]=void 0:p[_]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:u,pattern:e}}function Y2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zy(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(r.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function X2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zy(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Q2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?jr(e):e,a;return n?(n=Fy(n),n.startsWith("/")?a=Qp(n.substring(1),"/"):a=Qp(n,t)):a=t,{pathname:a,search:tS(r),hash:nS(o)}}function Qp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dy(e,t){let n=J2(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function By(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=jr(e):(o=Zo({},e),Ue(!o.pathname||!o.pathname.includes("?"),Nu("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),Nu("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),Nu("#","search","hash",o)));let a=e===""||o.pathname==="",u=a?"/":o.pathname,c;if(u==null)c=n;else{let v=t.length-1;if(!r&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}c=v>=0?t[v]:"/"}let f=Q2(o,c),p=u&&u!=="/"&&u.endsWith("/"),g=(a||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}const Fy=e=>e.replace(/\/\/+/g,"/"),qn=e=>Fy(e.join("/")),eS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vy=["post","put","patch","delete"];new Set(Vy);const rS=["get",...Vy];new Set(rS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(null,arguments)}const eh=M.createContext(null),oS=M.createContext(null),Ei=M.createContext(null),yl=M.createContext(null),Mi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Hy=M.createContext(null);function sS(e,t){let{relative:n}=t===void 0?{}:t;is()||Ue(!1);let{basename:r,navigator:o}=M.useContext(Ei),{hash:a,pathname:u,search:c}=Wy(e,{relative:n}),f=u;return r!=="/"&&(f=u==="/"?r:qn([r,u])),o.createHref({pathname:f,search:c,hash:a})}function is(){return M.useContext(yl)!=null}function Ar(){return is()||Ue(!1),M.useContext(yl).location}function Uy(e){M.useContext(Ei).static||M.useLayoutEffect(e)}function Zy(){let{isDataRoute:e}=M.useContext(Mi);return e?_S():aS()}function aS(){is()||Ue(!1);let e=M.useContext(eh),{basename:t,future:n,navigator:r}=M.useContext(Ei),{matches:o}=M.useContext(Mi),{pathname:a}=Ar(),u=JSON.stringify(Dy(o,n.v7_relativeSplatPath)),c=M.useRef(!1);return Uy(()=>{c.current=!0}),M.useCallback(function(p,g){if(g===void 0&&(g={}),!c.current)return;if(typeof p=="number"){r.go(p);return}let v=By(p,JSON.parse(u),a,g.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:qn([t,v.pathname])),(g.replace?r.replace:r.push)(v,g.state,g)},[t,r,u,a,e])}function Wy(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=M.useContext(Ei),{matches:o}=M.useContext(Mi),{pathname:a}=Ar(),u=JSON.stringify(Dy(o,r.v7_relativeSplatPath));return M.useMemo(()=>By(e,JSON.parse(u),a,n==="path"),[e,u,a,n])}function lS(e,t){return uS(e,t)}function uS(e,t,n,r){is()||Ue(!1);let{navigator:o}=M.useContext(Ei),{matches:a}=M.useContext(Mi),u=a[a.length-1],c=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let p=Ar(),g;if(t){var v;let N=typeof t=="string"?jr(t):t;f==="/"||(v=N.pathname)!=null&&v.startsWith(f)||Ue(!1),g=N}else g=p;let _=g.pathname||"/",b=_;if(f!=="/"){let N=f.replace(/^\//,"").split("/");b="/"+_.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=O2(e,{pathname:b}),k=pS(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},c,N.params),pathname:qn([f,o.encodeLocation?o.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?f:qn([f,o.encodeLocation?o.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),a,n,r);return t&&k?M.createElement(yl.Provider,{value:{location:Wo({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Fn.Pop}},k):k}function cS(){let e=yS(),t=iS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},t),n?M.createElement("pre",{style:o},n):null,null)}const dS=M.createElement(cS,null);class hS extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?M.createElement(Mi.Provider,{value:this.props.routeContext},M.createElement(Hy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fS(e){let{routeContext:t,match:n,children:r}=e,o=M.useContext(eh);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Mi.Provider,{value:t},r)}function pS(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let u=e,c=(o=n)==null?void 0:o.errors;if(c!=null){let g=u.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);g>=0||Ue(!1),u=u.slice(0,Math.min(u.length,g+1))}let f=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<u.length;g++){let v=u[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:_,errors:b}=n,E=v.route.loader&&_[v.route.id]===void 0&&(!b||b[v.route.id]===void 0);if(v.route.lazy||E){f=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,v,_)=>{let b,E=!1,k=null,N=null;n&&(b=c&&v.route.id?c[v.route.id]:void 0,k=v.route.errorElement||dS,f&&(p<0&&_===0?(xS("route-fallback"),E=!0,N=null):p===_&&(E=!0,N=v.route.hydrateFallbackElement||null)));let w=t.concat(u.slice(0,_+1)),x=()=>{let S;return b?S=k:E?S=N:v.route.Component?S=M.createElement(v.route.Component,null):v.route.element?S=v.route.element:S=g,M.createElement(fS,{match:v,routeContext:{outlet:g,matches:w,isDataRoute:n!=null},children:S})};return n&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?M.createElement(hS,{location:n.location,revalidation:n.revalidation,component:k,error:b,children:x(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):x()},null)}var $y=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($y||{}),Gy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gy||{});function mS(e){let t=M.useContext(eh);return t||Ue(!1),t}function gS(e){let t=M.useContext(oS);return t||Ue(!1),t}function vS(e){let t=M.useContext(Mi);return t||Ue(!1),t}function Ky(e){let t=vS(),n=t.matches[t.matches.length-1];return n.route.id||Ue(!1),n.route.id}function yS(){var e;let t=M.useContext(Hy),n=gS(),r=Ky();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _S(){let{router:e}=mS($y.UseNavigateStable),t=Ky(Gy.UseNavigateStable),n=M.useRef(!1);return Uy(()=>{n.current=!0}),M.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Wo({fromRouteId:t},a)))},[e,t])}const Jp={};function xS(e,t,n){Jp[e]||(Jp[e]=!0)}function wS(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function hi(e){Ue(!1)}function SS(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Fn.Pop,navigator:a,static:u=!1,future:c}=e;is()&&Ue(!1);let f=t.replace(/^\/*/,"/"),p=M.useMemo(()=>({basename:f,navigator:a,static:u,future:Wo({v7_relativeSplatPath:!1},c)}),[f,c,a,u]);typeof r=="string"&&(r=jr(r));let{pathname:g="/",search:v="",hash:_="",state:b=null,key:E="default"}=r,k=M.useMemo(()=>{let N=Jd(g,f);return N==null?null:{location:{pathname:N,search:v,hash:_,state:b,key:E},navigationType:o}},[f,g,v,_,b,E,o]);return k==null?null:M.createElement(Ei.Provider,{value:p},M.createElement(yl.Provider,{children:n,value:k}))}function bS(e){let{children:t,location:n}=e;return lS(Oc(t),n)}new Promise(()=>{});function Oc(e,t){t===void 0&&(t=[]);let n=[];return M.Children.forEach(e,(r,o)=>{if(!M.isValidElement(r))return;let a=[...t,o];if(r.type===M.Fragment){n.push.apply(n,Oc(r.props.children,a));return}r.type!==hi&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Oc(r.props.children,a)),n.push(u)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(null,arguments)}function kS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function PS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function CS(e,t){return e.button===0&&(!t||t==="_self")&&!PS(e)}const TS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],LS="6";try{window.__reactRouterVersion=LS}catch{}const NS="startTransition",em=b1[NS];function ES(e){let{basename:t,children:n,future:r,window:o}=e,a=M.useRef();a.current==null&&(a.current=R2({window:o,v5Compat:!0}));let u=a.current,[c,f]=M.useState({action:u.action,location:u.location}),{v7_startTransition:p}=r||{},g=M.useCallback(v=>{p&&em?em(()=>f(v)):f(v)},[f,p]);return M.useLayoutEffect(()=>u.listen(g),[u,g]),M.useEffect(()=>wS(r),[r]),M.createElement(SS,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u,future:r})}const MS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_t=M.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:u,state:c,target:f,to:p,preventScrollReset:g,viewTransition:v}=t,_=kS(t,TS),{basename:b}=M.useContext(Ei),E,k=!1;if(typeof p=="string"&&jS.test(p)&&(E=p,MS))try{let S=new URL(window.location.href),A=p.startsWith("//")?new URL(S.protocol+p):new URL(p),z=Jd(A.pathname,b);A.origin===S.origin&&z!=null?p=z+A.search+A.hash:k=!0}catch{}let N=sS(p,{relative:o}),w=AS(p,{replace:u,state:c,target:f,preventScrollReset:g,relative:o,viewTransition:v});function x(S){r&&r(S),S.defaultPrevented||w(S)}return M.createElement("a",Dc({},_,{href:E||N,onClick:k||a?r:x,ref:n,target:f}))});var tm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tm||(tm={}));var nm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nm||(nm={}));function AS(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:u,viewTransition:c}=t===void 0?{}:t,f=Zy(),p=Ar(),g=Wy(e,{relative:u});return M.useCallback(v=>{if(CS(v,n)){v.preventDefault();let _=r!==void 0?r:Za(p)===Za(g);f(e,{replace:_,state:o,preventScrollReset:a,relative:u,viewTransition:c})}},[p,f,g,r,o,n,e,a,u,c])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qy=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=M.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...c},f)=>M.createElement("svg",{ref:f,...zS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:qy("lucide",o),...c},[...u.map(([p,g])=>M.createElement(p,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(e,t)=>{const n=M.forwardRef(({className:r,...o},a)=>M.createElement(IS,{ref:a,iconNode:t,className:qy(`lucide-${RS(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=pe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=pe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=pe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=pe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=pe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=pe("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=pe("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=pe("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=pe("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=pe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=pe("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=pe("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=pe("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=pe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=pe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=pe("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=pe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=pe("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=pe("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=pe("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=pe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=pe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=pe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=pe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=pe("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function eb(){const[e,t]=M.useState(!1),n=Ar(),r=[{name:"Home",path:"/"},{name:"Intelligence",path:"/dashboard"},{name:"Route AI",path:"/route-ai"},{name:"Report Incident",path:"/report"},{name:"Team",path:"/team"}],o=a=>!!(a==="/"&&n.pathname==="/"||a!=="/"&&n.pathname.startsWith(a));return h.jsxs("header",{className:"navbar-wrapper",children:[h.jsx("div",{className:"container",children:h.jsxs("nav",{className:"navbar",children:[h.jsxs(_t,{to:"/",className:"brand",onClick:()=>t(!1),children:[h.jsxs("div",{className:"brand-icon",children:[h.jsx(nh,{className:"icon-mountain",size:20}),h.jsx("div",{className:"icon-pulse"})]}),h.jsxs("div",{className:"brand-text-block",children:[h.jsx("span",{className:"brand-title font-serif",children:"SafarNama"}),h.jsx("span",{className:"brand-tag",children:"NER LOGISTICS AI"})]})]}),h.jsx("div",{className:"nav-links",children:r.map(a=>h.jsxs(_t,{to:a.path,className:`nav-item ${o(a.path)?"active":""}`,children:[a.name,o(a.path)&&h.jsx("span",{className:"active-pill"})]},a.path))}),h.jsxs("div",{className:"nav-actions",children:[h.jsxs("div",{className:"live-status-badge",children:[h.jsx(Xy,{size:13,className:"live-radio-icon animate-pulse"}),h.jsx("span",{children:"7 NER Alerts Active"})]}),h.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"github-btn",title:"GitHub Repository",children:h.jsx($a,{size:19})}),h.jsx("button",{className:"mobile-toggle",onClick:()=>t(!e),"aria-label":"Toggle navigation menu",children:e?h.jsx(JS,{size:24}):h.jsx(KS,{size:24})})]})]})}),e&&h.jsx("div",{className:"mobile-drawer",children:h.jsx("div",{className:"container",children:h.jsxs("div",{className:"mobile-nav-list",children:[r.map(a=>h.jsxs(_t,{to:a.path,className:`mobile-nav-item ${o(a.path)?"mobile-active":""}`,onClick:()=>t(!1),children:[h.jsx("span",{children:a.name}),o(a.path)&&h.jsx("span",{className:"mobile-indicator",children:"•"})]},a.path)),h.jsxs("div",{className:"mobile-extra-info",children:[h.jsxs("p",{className:"mobile-status-text",children:[h.jsx("strong",{children:"SafarNama AI:"})," 8 Northeast states connected with active telemetry."]}),h.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-sm",style:{width:"100%",justifyContent:"center"},children:[h.jsx($a,{size:16}),h.jsx("span",{children:"View Project on GitHub"})]})]})]})})}),h.jsx("style",{children:`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(247, 244, 236, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 1.5rem;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
        }

        .brand-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--color-teal);
          color: var(--color-ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 4px 12px rgba(15, 76, 76, 0.25);
        }

        .icon-mountain {
          stroke-width: 2.2;
        }

        .icon-pulse {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-gold);
          border: 2px solid var(--color-ivory);
        }

        .brand-text-block {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .brand-tag {
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          color: var(--color-sage);
          font-weight: 700;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-item {
          position: relative;
          padding: 0.5rem 0.95rem;
          color: var(--color-charcoal-muted);
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s ease;
          border-radius: var(--radius-full);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav-item:hover {
          color: var(--color-teal);
          background: rgba(15, 76, 76, 0.04);
        }

        .nav-item.active {
          color: var(--color-teal);
          font-weight: 700;
        }

        .active-pill {
          position: absolute;
          bottom: 2px;
          width: 18px;
          height: 2.5px;
          background: var(--color-gold);
          border-radius: var(--radius-full);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .live-status-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--color-gold-soft);
          color: #8C6A21;
          border: 1px solid rgba(198, 161, 91, 0.35);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .live-radio-icon {
          color: #B28222;
        }

        @keyframes pulse-anim {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .animate-pulse {
          animation: pulse-anim 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .github-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          background: var(--color-white);
          color: var(--color-charcoal);
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .github-btn:hover {
          color: var(--color-teal);
          border-color: var(--color-teal);
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          color: var(--color-teal);
          padding: 0.3rem;
        }

        .mobile-drawer {
          display: none;
          background: var(--color-ivory);
          border-bottom: 1px solid var(--color-border);
          padding: 1.25rem 0 1.75rem 0;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          color: var(--color-charcoal);
          font-size: 1.05rem;
          background: var(--color-white);
          border: 1px solid var(--color-border-subtle);
        }

        .mobile-nav-item.mobile-active {
          color: var(--color-teal);
          border-color: var(--color-teal);
          background: rgba(15, 76, 76, 0.05);
        }

        .mobile-indicator {
          color: var(--color-gold);
          font-size: 1.5rem;
          line-height: 1;
        }

        .mobile-extra-info {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-status-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
        }

        @media (max-width: 960px) {
          .nav-links {
            display: none;
          }
          .live-status-badge {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `})]})}function tb(){const e=["Assam","Arunachal Pradesh","Meghalaya","Manipur","Mizoram","Nagaland","Tripura","Sikkim"];return h.jsxs("footer",{className:"site-footer",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"footer-top-grid",children:[h.jsxs("div",{className:"footer-brand-col",children:[h.jsxs("div",{className:"footer-brand",children:[h.jsx("div",{className:"brand-icon-sm",children:h.jsx(nh,{size:18})}),h.jsx("span",{className:"brand-name font-serif",children:"SafarNama"})]}),h.jsx("p",{className:"footer-tagline font-serif",children:'"Predict. Navigate. Deliver."'}),h.jsx("p",{className:"footer-desc",children:"AI-powered logistics intelligence for India's North Eastern Region. Providing real-time disruption prediction, terrain vulnerability models, and resilient route alternatives for challenging Himalayan geographies."}),h.jsxs("div",{className:"footer-telemetry-status",children:[h.jsx(Xy,{size:12,className:"text-gold animate-pulse"}),h.jsx("span",{children:"Telemetry Node: Active • All 8 States Synchronized"})]})]}),h.jsxs("div",{className:"footer-states-col",children:[h.jsx("h4",{className:"footer-col-title",children:"Monitored NER Territories"}),h.jsx("div",{className:"states-tags-wrap",children:e.map(t=>h.jsxs("span",{className:"state-badge",children:[h.jsx("span",{className:"state-dot"}),t]},t))}),h.jsx("p",{className:"states-note",children:"Continuous InSAR slope monitoring, BRO clearance feeds, and Open-Meteo precipitation indexes."})]}),h.jsxs("div",{className:"footer-links-col",children:[h.jsx("h4",{className:"footer-col-title",children:"Platform Navigation"}),h.jsxs("ul",{className:"footer-links-list",children:[h.jsx("li",{children:h.jsx(_t,{to:"/",children:"Home Overview"})}),h.jsx("li",{children:h.jsx(_t,{to:"/dashboard",children:"Intelligence Dashboard"})}),h.jsx("li",{children:h.jsx(_t,{to:"/route-ai",children:"AI Route Intelligence"})}),h.jsx("li",{children:h.jsx(_t,{to:"/report",children:"Report Disruption"})}),h.jsx("li",{children:h.jsx(_t,{to:"/team",children:"Engineering Team"})})]})]})]}),h.jsxs("div",{className:"footer-bottom-bar",children:[h.jsxs("p",{className:"copyright-text",children:["© ",new Date().getFullYear()," ",h.jsx("strong",{children:"SafarNama"})," — Smart India Hackathon (SIH) Intelligent Logistics Prototype."]}),h.jsxs("div",{className:"bottom-meta",children:[h.jsx("span",{className:"api-badge",children:"Powered by OpenStreetMap & Open-Meteo API"}),h.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon",title:"GitHub",children:h.jsx($a,{size:16})})]})]})]}),h.jsx("style",{children:`
        .site-footer {
          background: var(--color-white);
          border-top: 1px solid var(--color-border);
          padding: 4.5rem 0 2rem 0;
          margin-top: 5rem;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1.6fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 680px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .brand-icon-sm {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--color-teal);
          color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .footer-tagline {
          font-size: 1.05rem;
          font-style: italic;
          color: var(--color-gold);
          margin-bottom: 0.75rem;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
          max-width: 440px;
          margin-bottom: 1.25rem;
        }

        .footer-telemetry-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.8rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-teal);
        }

        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-teal);
          margin-bottom: 1.25rem;
        }

        .states-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1rem;
        }

        .state-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border-subtle);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }

        .state-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-sage);
        }

        .states-note {
          font-size: 0.8rem;
          color: var(--color-charcoal-light);
          line-height: 1.45;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-links-list a {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .footer-links-list a:hover {
          color: var(--color-teal);
          padding-left: 4px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.82rem;
          color: var(--color-charcoal-light);
        }

        .bottom-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .api-badge {
          font-size: 0.76rem;
          color: var(--color-sage);
          font-weight: 600;
        }

        .footer-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .footer-social-icon:hover {
          background: var(--color-teal);
          color: var(--color-white);
        }
      `})]})}const ih=M.createContext({});function rh(e){const t=M.useRef(null);return t.current===null&&(t.current=e()),t.current}const _l=M.createContext(null),oh=M.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class nb extends M.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ib({children:e,isPresent:t}){const n=M.useId(),r=M.useRef(null),o=M.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=M.useContext(oh);return M.useInsertionEffect(()=>{const{width:u,height:c,top:f,left:p}=o.current;if(t||!r.current||!u||!c)return;r.current.dataset.motionPopId=n;const g=document.createElement("style");return a&&(g.nonce=a),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${f}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[t]),h.jsx(nb,{isPresent:t,childRef:r,sizeRef:o,children:M.cloneElement(e,{ref:r})})}const rb=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:u})=>{const c=rh(ob),f=M.useId(),p=M.useCallback(v=>{c.set(v,!0);for(const _ of c.values())if(!_)return;r&&r()},[c,r]),g=M.useMemo(()=>({id:f,initial:t,isPresent:n,custom:o,onExitComplete:p,register:v=>(c.set(v,!1),()=>c.delete(v))}),a?[Math.random(),p]:[n,p]);return M.useMemo(()=>{c.forEach((v,_)=>c.set(_,!1))},[n]),M.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),u==="popLayout"&&(e=h.jsx(ib,{isPresent:n,children:e})),h.jsx(_l.Provider,{value:g,children:e})};function ob(){return new Map}function Qy(e=!0){const t=M.useContext(_l);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=t,a=M.useId();M.useEffect(()=>{e&&o(a)},[e]);const u=M.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,u]:[!0]}const Js=e=>e.key||"";function rm(e){const t=[];return M.Children.forEach(e,n=>{M.isValidElement(n)&&t.push(n)}),t}const sh=typeof window<"u",Jy=sh?M.useLayoutEffect:M.useEffect,sb=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:u=!1})=>{const[c,f]=Qy(u),p=M.useMemo(()=>rm(e),[e]),g=u&&!c?[]:p.map(Js),v=M.useRef(!0),_=M.useRef(p),b=rh(()=>new Map),[E,k]=M.useState(p),[N,w]=M.useState(p);Jy(()=>{v.current=!1,_.current=p;for(let A=0;A<N.length;A++){const z=Js(N[A]);g.includes(z)?b.delete(z):b.get(z)!==!0&&b.set(z,!1)}},[N,g.length,g.join("-")]);const x=[];if(p!==E){let A=[...p];for(let z=0;z<N.length;z++){const B=N[z],V=Js(B);g.includes(V)||(A.splice(z,0,B),x.push(B))}a==="wait"&&x.length&&(A=x),w(rm(A)),k(p);return}const{forceRender:S}=M.useContext(ih);return h.jsx(h.Fragment,{children:N.map(A=>{const z=Js(A),B=u&&!c?!1:p===N||g.includes(z),V=()=>{if(b.has(z))b.set(z,!0);else return;let D=!0;b.forEach(ne=>{ne||(D=!1)}),D&&(S==null||S(),w(_.current),u&&(f==null||f()),r&&r())};return h.jsx(rb,{isPresent:B,initial:!v.current||n?void 0:!1,custom:B?void 0:t,presenceAffectsLayout:o,mode:a,onExitComplete:B?void 0:V,children:A},z)})})},Lt=e=>e;let e0=Lt;function ah(e){let t;return()=>(t===void 0&&(t=e()),t)}const Cr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Sn=e=>e*1e3,bn=e=>e/1e3,ab={useManualTiming:!1};function lb(e){let t=new Set,n=new Set,r=!1,o=!1;const a=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(p){a.has(p)&&(f.schedule(p),e()),p(u)}const f={schedule:(p,g=!1,v=!1)=>{const b=v&&r?t:n;return g&&a.add(p),b.has(p)||b.add(p),p},cancel:p=>{n.delete(p),a.delete(p)},process:p=>{if(u=p,r){o=!0;return}r=!0,[t,n]=[n,t],t.forEach(c),t.clear(),r=!1,o&&(o=!1,f.process(p))}};return f}const ea=["read","resolveKeyframes","update","preRender","render","postRender"],ub=40;function t0(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,u=ea.reduce((w,x)=>(w[x]=lb(a),w),{}),{read:c,resolveKeyframes:f,update:p,preRender:g,render:v,postRender:_}=u,b=()=>{const w=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(w-o.timestamp,ub),1),o.timestamp=w,o.isProcessing=!0,c.process(o),f.process(o),p.process(o),g.process(o),v.process(o),_.process(o),o.isProcessing=!1,n&&t&&(r=!1,e(b))},E=()=>{n=!0,r=!0,o.isProcessing||e(b)};return{schedule:ea.reduce((w,x)=>{const S=u[x];return w[x]=(A,z=!1,B=!1)=>(n||E(),S.schedule(A,z,B)),w},{}),cancel:w=>{for(let x=0;x<ea.length;x++)u[ea[x]].cancel(w)},state:o,steps:u}}const{schedule:Ce,cancel:Qn,state:Qe,steps:Eu}=t0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0),n0=M.createContext({strict:!1}),om={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Tr={};for(const e in om)Tr[e]={isEnabled:t=>om[e].some(n=>!!t[n])};function cb(e){for(const t in e)Tr[t]={...Tr[t],...e[t]}}const db=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||db.has(e)}let i0=e=>!qa(e);function hb(e){e&&(i0=t=>t.startsWith("on")?!qa(t):e(t))}try{hb(require("@emotion/is-prop-valid").default)}catch{}function fb(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(i0(o)||n===!0&&qa(o)||!t&&!qa(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function pb(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,o)=>o==="create"?e:(t.has(o)||t.set(o,e(o)),t.get(o))})}const xl=M.createContext({});function Go(e){return typeof e=="string"||Array.isArray(e)}function wl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const lh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uh=["initial",...lh];function Sl(e){return wl(e.animate)||uh.some(t=>Go(e[t]))}function r0(e){return!!(Sl(e)||e.variants)}function mb(e,t){if(Sl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Go(n)?n:void 0,animate:Go(r)?r:void 0}}return e.inherit!==!1?t:{}}function gb(e){const{initial:t,animate:n}=mb(e,M.useContext(xl));return M.useMemo(()=>({initial:t,animate:n}),[sm(t),sm(n)])}function sm(e){return Array.isArray(e)?e.join(" "):e}const vb=Symbol.for("motionComponentSymbol");function or(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function yb(e,t,n){return M.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):or(n)&&(n.current=r))},[t])}const ch=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_b="framerAppearId",o0="data-"+ch(_b),{schedule:dh}=t0(queueMicrotask,!1),s0=M.createContext({});function xb(e,t,n,r,o){var a,u;const{visualElement:c}=M.useContext(xl),f=M.useContext(n0),p=M.useContext(_l),g=M.useContext(oh).reducedMotion,v=M.useRef(null);r=r||f.renderer,!v.current&&r&&(v.current=r(e,{visualState:t,parent:c,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:g}));const _=v.current,b=M.useContext(s0);_&&!_.projection&&o&&(_.type==="html"||_.type==="svg")&&wb(v.current,n,o,b);const E=M.useRef(!1);M.useInsertionEffect(()=>{_&&E.current&&_.update(n,p)});const k=n[o0],N=M.useRef(!!k&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,k))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,k)));return Jy(()=>{_&&(E.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),dh.render(_.render),N.current&&_.animationState&&_.animationState.animateChanges())}),M.useEffect(()=>{_&&(!N.current&&_.animationState&&_.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var w;(w=window.MotionHandoffMarkAsComplete)===null||w===void 0||w.call(window,k)}),N.current=!1))}),_}function wb(e,t,n,r){const{layoutId:o,layout:a,drag:u,dragConstraints:c,layoutScroll:f,layoutRoot:p}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:a0(e.parent)),e.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||c&&or(c),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:f,layoutRoot:p})}function a0(e){if(e)return e.options.allowProjection!==!1?e.projection:a0(e.parent)}function Sb({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){var a,u;e&&cb(e);function c(p,g){let v;const _={...M.useContext(oh),...p,layoutId:bb(p)},{isStatic:b}=_,E=gb(p),k=r(p,b);if(!b&&sh){kb();const N=Pb(_);v=N.MeasureLayout,E.visualElement=xb(o,k,_,t,N.ProjectionNode)}return h.jsxs(xl.Provider,{value:E,children:[v&&E.visualElement?h.jsx(v,{visualElement:E.visualElement,..._}):null,n(o,p,yb(k,E.visualElement,g),k,b,E.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&u!==void 0?u:""})`}`;const f=M.forwardRef(c);return f[vb]=o,f}function bb({layoutId:e}){const t=M.useContext(ih).id;return t&&e!==void 0?t+"-"+e:e}function kb(e,t){M.useContext(n0).strict}function Pb(e){const{drag:t,layout:n}=Tr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Cb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hh(e){return typeof e!="string"||e.includes("-")?!1:!!(Cb.indexOf(e)>-1||/[A-Z]/u.test(e))}function am(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function fh(e,t,n,r){if(typeof t=="function"){const[o,a]=am(r);t=t(n!==void 0?n:e.custom,o,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,a]=am(r);t=t(n!==void 0?n:e.custom,o,a)}return t}const Fc=e=>Array.isArray(e),Tb=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Lb=e=>Fc(e)?e[e.length-1]||0:e,st=e=>!!(e&&e.getVelocity);function ga(e){const t=st(e)?e.get():e;return Tb(t)?t.toValue():t}function Nb({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,o,a){const u={latestValues:Eb(r,o,a,e),renderState:t()};return n&&(u.onMount=c=>n({props:r,current:c,...u}),u.onUpdate=c=>n(c)),u}const l0=e=>(t,n)=>{const r=M.useContext(xl),o=M.useContext(_l),a=()=>Nb(e,t,r,o);return n?a():rh(a)};function Eb(e,t,n,r){const o={},a=r(e,{});for(const _ in a)o[_]=ga(a[_]);let{initial:u,animate:c}=e;const f=Sl(e),p=r0(e);t&&p&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),c===void 0&&(c=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?c:u;if(v&&typeof v!="boolean"&&!wl(v)){const _=Array.isArray(v)?v:[v];for(let b=0;b<_.length;b++){const E=fh(e,_[b]);if(E){const{transitionEnd:k,transition:N,...w}=E;for(const x in w){let S=w[x];if(Array.isArray(S)){const A=g?S.length-1:0;S=S[A]}S!==null&&(o[x]=S)}for(const x in k)o[x]=k[x]}}}return o}const Rr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ji=new Set(Rr),u0=e=>t=>typeof t=="string"&&t.startsWith(e),c0=u0("--"),Mb=u0("var(--"),ph=e=>Mb(e)?jb.test(e.split("/*")[0].trim()):!1,jb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,d0=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Ln=(e,t,n)=>n>t?t:n<e?e:n,zr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ko={...zr,transform:e=>Ln(0,1,e)},ta={...zr,default:1},rs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),An=rs("deg"),cn=rs("%"),ee=rs("px"),Ab=rs("vh"),Rb=rs("vw"),lm={...cn,parse:e=>cn.parse(e)/100,transform:e=>cn.transform(e*100)},zb={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,radius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,backgroundPositionX:ee,backgroundPositionY:ee},Ib={rotate:An,rotateX:An,rotateY:An,rotateZ:An,scale:ta,scaleX:ta,scaleY:ta,scaleZ:ta,skew:An,skewX:An,skewY:An,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ko,originX:lm,originY:lm,originZ:ee},um={...zr,transform:Math.round},mh={...zb,...Ib,zIndex:um,size:ee,fillOpacity:Ko,strokeOpacity:Ko,numOctaves:um},Ob={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Db=Rr.length;function Bb(e,t,n){let r="",o=!0;for(let a=0;a<Db;a++){const u=Rr[a],c=e[u];if(c===void 0)continue;let f=!0;if(typeof c=="number"?f=c===(u.startsWith("scale")?1:0):f=parseFloat(c)===0,!f||n){const p=d0(c,mh[u]);if(!f){o=!1;const g=Ob[u]||u;r+=`${g}(${p}) `}n&&(t[u]=p)}}return r=r.trim(),n?r=n(t,o?"":r):o&&(r="none"),r}function gh(e,t,n){const{style:r,vars:o,transformOrigin:a}=e;let u=!1,c=!1;for(const f in t){const p=t[f];if(ji.has(f)){u=!0;continue}else if(c0(f)){o[f]=p;continue}else{const g=d0(p,mh[f]);f.startsWith("origin")?(c=!0,a[f]=g):r[f]=g}}if(t.transform||(u||n?r.transform=Bb(t,e.transform,n):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=a;r.transformOrigin=`${f} ${p} ${g}`}}const Fb={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vb={offset:"strokeDashoffset",array:"strokeDasharray"};function Hb(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?Fb:Vb;e[a.offset]=ee.transform(-r);const u=ee.transform(t),c=ee.transform(n);e[a.array]=`${u} ${c}`}function cm(e,t,n){return typeof e=="string"?e:ee.transform(t+n*e)}function Ub(e,t,n){const r=cm(t,e.x,e.width),o=cm(n,e.y,e.height);return`${r} ${o}`}function vh(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:a,pathLength:u,pathSpacing:c=1,pathOffset:f=0,...p},g,v){if(gh(e,p,v),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:_,style:b,dimensions:E}=e;_.transform&&(E&&(b.transform=_.transform),delete _.transform),E&&(o!==void 0||a!==void 0||b.transform)&&(b.transformOrigin=Ub(E,o!==void 0?o:.5,a!==void 0?a:.5)),t!==void 0&&(_.x=t),n!==void 0&&(_.y=n),r!==void 0&&(_.scale=r),u!==void 0&&Hb(_,u,c,f,!1)}const yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),h0=()=>({...yh(),attrs:{}}),_h=e=>typeof e=="string"&&e.toLowerCase()==="svg";function f0(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const p0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function m0(e,t,n,r){f0(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(p0.has(o)?o:ch(o),t.attrs[o])}const Ya={};function Zb(e){Object.assign(Ya,e)}function g0(e,{layout:t,layoutId:n}){return ji.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ya[e]||e==="opacity")}function xh(e,t,n){var r;const{style:o}=e,a={};for(const u in o)(st(o[u])||t.style&&st(t.style[u])||g0(u,e)||((r=n==null?void 0:n.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[u]=o[u]);return a}function v0(e,t,n){const r=xh(e,t,n);for(const o in e)if(st(e[o])||st(t[o])){const a=Rr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=e[o]}return r}function Wb(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const dm=["x","y","width","height","cx","cy","r"],$b={useVisualState:l0({scrapeMotionValuesFromProps:v0,createRenderState:h0,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:o})=>{if(!n)return;let a=!!e.drag;if(!a){for(const c in o)if(ji.has(c)){a=!0;break}}if(!a)return;let u=!t;if(t)for(let c=0;c<dm.length;c++){const f=dm[c];e[f]!==t[f]&&(u=!0)}u&&Ce.read(()=>{Wb(n,r),Ce.render(()=>{vh(r,o,_h(n.tagName),e.transformTemplate),m0(n,r)})})}})},Gb={useVisualState:l0({scrapeMotionValuesFromProps:xh,createRenderState:yh})};function y0(e,t,n){for(const r in t)!st(t[r])&&!g0(r,n)&&(e[r]=t[r])}function Kb({transformTemplate:e},t){return M.useMemo(()=>{const n=yh();return gh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function qb(e,t){const n=e.style||{},r={};return y0(r,n,e),Object.assign(r,Kb(e,t)),r}function Yb(e,t){const n={},r=qb(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Xb(e,t,n,r){const o=M.useMemo(()=>{const a=h0();return vh(a,t,_h(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};y0(a,e.style,e),o.style={...a,...o.style}}return o}function Qb(e=!1){return(n,r,o,{latestValues:a},u)=>{const f=(hh(n)?Xb:Yb)(r,a,u,n),p=fb(r,typeof n=="string",e),g=n!==M.Fragment?{...p,...f,ref:o}:{},{children:v}=r,_=M.useMemo(()=>st(v)?v.get():v,[v]);return M.createElement(n,{...g,children:_})}}function Jb(e,t){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...hh(r)?$b:Gb,preloadedFeatures:e,useRender:Qb(o),createVisualElement:t,Component:r};return Sb(u)}}function _0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function bl(e,t,n){const r=e.getProps();return fh(r,t,n!==void 0?n:r.custom,e)}const ek=ah(()=>window.ScrollTimeline!==void 0);class tk{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(o=>{if(ek()&&o.attachTimeline)return o.attachTimeline(t);if(typeof n=="function")return n(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class nk extends tk{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function wh(e,t){return e?e[t]||e.default||e:void 0}const Vc=2e4;function x0(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Vc;)t+=n,r=e.next(t);return t>=Vc?1/0:t}function Sh(e){return typeof e=="function"}function hm(e,t){e.timeline=t,e.onfinish=null}const bh=e=>Array.isArray(e)&&typeof e[0]=="number",ik={linearEasing:void 0};function rk(e,t){const n=ah(e);return()=>{var r;return(r=ik[t])!==null&&r!==void 0?r:n()}}const Xa=rk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),w0=(e,t,n=10)=>{let r="";const o=Math.max(Math.round(t/n),2);for(let a=0;a<o;a++)r+=e(Cr(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function S0(e){return!!(typeof e=="function"&&Xa()||!e||typeof e=="string"&&(e in Hc||Xa())||bh(e)||Array.isArray(e)&&e.every(S0))}const co=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Hc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:co([0,.65,.55,1]),circOut:co([.55,0,1,.45]),backIn:co([.31,.01,.66,-.59]),backOut:co([.33,1.53,.69,.99])};function b0(e,t){if(e)return typeof e=="function"&&Xa()?w0(e,t):bh(e)?co(e):Array.isArray(e)?e.map(n=>b0(n,t)||Hc.easeOut):Hc[e]}const Gt={x:!1,y:!1};function k0(){return Gt.x||Gt.y}function ok(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function P0(e,t){const n=ok(e),r=new AbortController,o={passive:!0,...t,signal:r.signal};return[n,o,()=>r.abort()]}function fm(e){return t=>{t.pointerType==="touch"||k0()||e(t)}}function sk(e,t,n={}){const[r,o,a]=P0(e,n),u=fm(c=>{const{target:f}=c,p=t(c);if(typeof p!="function"||!f)return;const g=fm(v=>{p(v),f.removeEventListener("pointerleave",g)});f.addEventListener("pointerleave",g,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),a}const C0=(e,t)=>t?e===t?!0:C0(e,t.parentElement):!1,kh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ak=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function lk(e){return ak.has(e.tagName)||e.tabIndex!==-1}const ho=new WeakSet;function pm(e){return t=>{t.key==="Enter"&&e(t)}}function Mu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const uk=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=pm(()=>{if(ho.has(n))return;Mu(n,"down");const o=pm(()=>{Mu(n,"up")}),a=()=>Mu(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function mm(e){return kh(e)&&!k0()}function ck(e,t,n={}){const[r,o,a]=P0(e,n),u=c=>{const f=c.currentTarget;if(!mm(c)||ho.has(f))return;ho.add(f);const p=t(c),g=(b,E)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),!(!mm(b)||!ho.has(f))&&(ho.delete(f),typeof p=="function"&&p(b,{success:E}))},v=b=>{g(b,n.useGlobalTarget||C0(f,b.target))},_=b=>{g(b,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return r.forEach(c=>{!lk(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(n.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",p=>uk(p,o),o)}),a}function dk(e){return e==="x"||e==="y"?Gt[e]?null:(Gt[e]=!0,()=>{Gt[e]=!1}):Gt.x||Gt.y?null:(Gt.x=Gt.y=!0,()=>{Gt.x=Gt.y=!1})}const T0=new Set(["width","height","top","left","right","bottom",...Rr]);let va;function hk(){va=void 0}const dn={now:()=>(va===void 0&&dn.set(Qe.isProcessing||ab.useManualTiming?Qe.timestamp:performance.now()),va),set:e=>{va=e,queueMicrotask(hk)}};function Ph(e,t){e.indexOf(t)===-1&&e.push(t)}function Ch(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Th{constructor(){this.subscriptions=[]}add(t){return Ph(this.subscriptions,t),()=>Ch(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function L0(e,t){return t?e*(1e3/t):0}const gm=30,fk=e=>!isNaN(parseFloat(e));class pk{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=dn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=dn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=fk(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Th);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ce.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>gm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gm);return L0(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qo(e,t){return new pk(e,t)}function mk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,qo(n))}function gk(e,t){const n=bl(e,t);let{transitionEnd:r={},transition:o={},...a}=n||{};a={...a,...r};for(const u in a){const c=Lb(a[u]);mk(e,u,c)}}function vk(e){return!!(st(e)&&e.add)}function Uc(e,t){const n=e.getValue("willChange");if(vk(n))return n.add(t)}function N0(e){return e.props[o0]}const E0=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,yk=1e-7,_k=12;function xk(e,t,n,r,o){let a,u,c=0;do u=t+(n-t)/2,a=E0(u,r,o)-e,a>0?n=u:t=u;while(Math.abs(a)>yk&&++c<_k);return u}function os(e,t,n,r){if(e===t&&n===r)return Lt;const o=a=>xk(a,0,1,e,n);return a=>a===0||a===1?a:E0(o(a),t,r)}const M0=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,j0=e=>t=>1-e(1-t),A0=os(.33,1.53,.69,.99),Lh=j0(A0),R0=M0(Lh),z0=e=>(e*=2)<1?.5*Lh(e):.5*(2-Math.pow(2,-10*(e-1))),Nh=e=>1-Math.sin(Math.acos(e)),I0=j0(Nh),O0=M0(Nh),D0=e=>/^0[^.\s]+$/u.test(e);function wk(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||D0(e):!0}const bo=e=>Math.round(e*1e5)/1e5,Eh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Sk(e){return e==null}const bk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mh=(e,t)=>n=>!!(typeof n=="string"&&bk.test(n)&&n.startsWith(e)||t&&!Sk(n)&&Object.prototype.hasOwnProperty.call(n,t)),B0=(e,t,n)=>r=>{if(typeof r!="string")return r;const[o,a,u,c]=r.match(Eh);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},kk=e=>Ln(0,255,e),ju={...zr,transform:e=>Math.round(kk(e))},yi={test:Mh("rgb","red"),parse:B0("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ju.transform(e)+", "+ju.transform(t)+", "+ju.transform(n)+", "+bo(Ko.transform(r))+")"};function Pk(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Zc={test:Mh("#"),parse:Pk,transform:yi.transform},sr={test:Mh("hsl","hue"),parse:B0("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+cn.transform(bo(t))+", "+cn.transform(bo(n))+", "+bo(Ko.transform(r))+")"},rt={test:e=>yi.test(e)||Zc.test(e)||sr.test(e),parse:e=>yi.test(e)?yi.parse(e):sr.test(e)?sr.parse(e):Zc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?yi.transform(e):sr.transform(e)},Ck=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Tk(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Eh))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ck))===null||n===void 0?void 0:n.length)||0)>0}const F0="number",V0="color",Lk="var",Nk="var(",vm="${}",Ek=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let a=0;const c=t.replace(Ek,f=>(rt.test(f)?(r.color.push(a),o.push(V0),n.push(rt.parse(f))):f.startsWith(Nk)?(r.var.push(a),o.push(Lk),n.push(f)):(r.number.push(a),o.push(F0),n.push(parseFloat(f))),++a,vm)).split(vm);return{values:n,split:c,indexes:r,types:o}}function H0(e){return Yo(e).values}function U0(e){const{split:t,types:n}=Yo(e),r=t.length;return o=>{let a="";for(let u=0;u<r;u++)if(a+=t[u],o[u]!==void 0){const c=n[u];c===F0?a+=bo(o[u]):c===V0?a+=rt.transform(o[u]):a+=o[u]}return a}}const Mk=e=>typeof e=="number"?0:e;function jk(e){const t=H0(e);return U0(e)(t.map(Mk))}const Jn={test:Tk,parse:H0,createTransformer:U0,getAnimatableNone:jk},Ak=new Set(["brightness","contrast","saturate","opacity"]);function Rk(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Eh)||[];if(!r)return e;const o=n.replace(r,"");let a=Ak.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const zk=/\b([a-z-]*)\(.*?\)/gu,Wc={...Jn,getAnimatableNone:e=>{const t=e.match(zk);return t?t.map(Rk).join(" "):e}},Ik={...mh,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Wc,WebkitFilter:Wc},jh=e=>Ik[e];function Z0(e,t){let n=jh(e);return n!==Wc&&(n=Jn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ok=new Set(["auto","none","0"]);function Dk(e,t,n){let r=0,o;for(;r<e.length&&!o;){const a=e[r];typeof a=="string"&&!Ok.has(a)&&Yo(a).values.length&&(o=e[r]),r++}if(o&&n)for(const a of t)e[a]=Z0(n,o)}const ym=e=>e===zr||e===ee,_m=(e,t)=>parseFloat(e.split(", ")[t]),xm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return _m(o[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?_m(a[1],e):0}},Bk=new Set(["x","y","z"]),Fk=Rr.filter(e=>!Bk.has(e));function Vk(e){const t=[];return Fk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Lr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:xm(4,13),y:xm(5,14)};Lr.translateX=Lr.x;Lr.translateY=Lr.y;const wi=new Set;let $c=!1,Gc=!1;function W0(){if(Gc){const e=Array.from(wi).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const o=Vk(r);o.length&&(n.set(r,o),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([a,u])=>{var c;(c=r.getValue(a))===null||c===void 0||c.set(u)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gc=!1,$c=!1,wi.forEach(e=>e.complete()),wi.clear()}function $0(){wi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Gc=!0)})}function Hk(){$0(),W0()}class Ah{constructor(t,n,r,o,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(wi.add(this),$c||($c=!0,Ce.read($0),Ce.resolveKeyframes(W0))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:o}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const u=o==null?void 0:o.get(),c=t[t.length-1];if(u!==void 0)t[0]=u;else if(r&&n){const f=r.readValue(n,c);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=c),o&&u===void 0&&o.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),wi.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,wi.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const G0=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Uk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Zk(e){const t=Uk.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}function K0(e,t,n=1){const[r,o]=Zk(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const u=a.trim();return G0(u)?parseFloat(u):u}return ph(o)?K0(o,t,n+1):o}const q0=e=>t=>t.test(e),Wk={test:e=>e==="auto",parse:e=>e},Y0=[zr,ee,cn,An,Rb,Ab,Wk],wm=e=>Y0.find(q0(e));class X0 extends Ah{constructor(t,n,r,o,a){super(t,n,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let p=t[f];if(typeof p=="string"&&(p=p.trim(),ph(p))){const g=K0(p,n.current);g!==void 0&&(t[f]=g),f===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!T0.has(r)||t.length!==2)return;const[o,a]=t,u=wm(o),c=wm(a);if(u!==c)if(ym(u)&&ym(c))for(let f=0;f<t.length;f++){const p=t[f];typeof p=="string"&&(t[f]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let o=0;o<t.length;o++)wk(t[o])&&r.push(o);r.length&&Dk(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Lr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(r,o).jump(o,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:o}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Lr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([f,p])=>{n.getValue(f).set(p)}),this.resolveNoneKeyframes()}}const Sm=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Jn.test(e)||e==="0")&&!e.startsWith("url("));function $k(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Gk(e,t,n,r){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],u=Sm(o,t),c=Sm(a,t);return!u||!c?!1:$k(e)||(n==="spring"||Sh(n))&&r}const Kk=e=>e!==null;function kl(e,{repeat:t,repeatType:n="loop"},r){const o=e.filter(Kk),a=t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const qk=40;class Q0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=dn.now(),this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:a,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>qk?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Hk(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=dn.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:u,onComplete:c,onUpdate:f,isGenerator:p}=this.options;if(!p&&!Gk(t,r,o,a))if(u)this.options.duration=0;else{f&&f(kl(t,this.options,n)),c&&c(),this.resolveFinishedPromise();return}const g=this.initPlayback(t,n);g!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...g},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ee=(e,t,n)=>e+(t-e)*n;function Au(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Yk({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,u=0;if(!t)o=a=u=n;else{const c=n<.5?n*(1+t):n+t-n*t,f=2*n-c;o=Au(f,c,e+1/3),a=Au(f,c,e),u=Au(f,c,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:r}}function Qa(e,t){return n=>n>0?t:e}const Ru=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},Xk=[Zc,yi,sr],Qk=e=>Xk.find(t=>t.test(e));function bm(e){const t=Qk(e);if(!t)return!1;let n=t.parse(e);return t===sr&&(n=Yk(n)),n}const km=(e,t)=>{const n=bm(e),r=bm(t);if(!n||!r)return Qa(e,t);const o={...n};return a=>(o.red=Ru(n.red,r.red,a),o.green=Ru(n.green,r.green,a),o.blue=Ru(n.blue,r.blue,a),o.alpha=Ee(n.alpha,r.alpha,a),yi.transform(o))},Jk=(e,t)=>n=>t(e(n)),ss=(...e)=>e.reduce(Jk),Kc=new Set(["none","hidden"]);function eP(e,t){return Kc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function tP(e,t){return n=>Ee(e,t,n)}function Rh(e){return typeof e=="number"?tP:typeof e=="string"?ph(e)?Qa:rt.test(e)?km:rP:Array.isArray(e)?J0:typeof e=="object"?rt.test(e)?km:nP:Qa}function J0(e,t){const n=[...e],r=n.length,o=e.map((a,u)=>Rh(a)(a,t[u]));return a=>{for(let u=0;u<r;u++)n[u]=o[u](a);return n}}function nP(e,t){const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Rh(e[o])(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}}function iP(e,t){var n;const r=[],o={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const u=t.types[a],c=e.indexes[u][o[u]],f=(n=e.values[c])!==null&&n!==void 0?n:0;r[a]=f,o[u]++}return r}const rP=(e,t)=>{const n=Jn.createTransformer(t),r=Yo(e),o=Yo(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Kc.has(e)&&!o.values.length||Kc.has(t)&&!r.values.length?eP(e,t):ss(J0(iP(r,o),o.values),n):Qa(e,t)};function e_(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ee(e,t,n):Rh(e)(e,t)}const oP=5;function t_(e,t,n){const r=Math.max(t-oP,0);return L0(n-e(r),t-r)}const Ae={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zu=.001;function sP({duration:e=Ae.duration,bounce:t=Ae.bounce,velocity:n=Ae.velocity,mass:r=Ae.mass}){let o,a,u=1-t;u=Ln(Ae.minDamping,Ae.maxDamping,u),e=Ln(Ae.minDuration,Ae.maxDuration,bn(e)),u<1?(o=p=>{const g=p*u,v=g*e,_=g-n,b=qc(p,u),E=Math.exp(-v);return zu-_/b*E},a=p=>{const v=p*u*e,_=v*n+n,b=Math.pow(u,2)*Math.pow(p,2)*e,E=Math.exp(-v),k=qc(Math.pow(p,2),u);return(-o(p)+zu>0?-1:1)*((_-b)*E)/k}):(o=p=>{const g=Math.exp(-p*e),v=(p-n)*e+1;return-zu+g*v},a=p=>{const g=Math.exp(-p*e),v=(n-p)*(e*e);return g*v});const c=5/e,f=lP(o,a,c);if(e=Sn(e),isNaN(f))return{stiffness:Ae.stiffness,damping:Ae.damping,duration:e};{const p=Math.pow(f,2)*r;return{stiffness:p,damping:u*2*Math.sqrt(r*p),duration:e}}}const aP=12;function lP(e,t,n){let r=n;for(let o=1;o<aP;o++)r=r-e(r)/t(r);return r}function qc(e,t){return e*Math.sqrt(1-t*t)}const uP=["duration","bounce"],cP=["stiffness","damping","mass"];function Pm(e,t){return t.some(n=>e[n]!==void 0)}function dP(e){let t={velocity:Ae.velocity,stiffness:Ae.stiffness,damping:Ae.damping,mass:Ae.mass,isResolvedFromDuration:!1,...e};if(!Pm(e,cP)&&Pm(e,uP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),o=r*r,a=2*Ln(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Ae.mass,stiffness:o,damping:a}}else{const n=sP(e);t={...t,...n,mass:Ae.mass},t.isResolvedFromDuration=!0}return t}function n_(e=Ae.visualDuration,t=Ae.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:o}=n;const a=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],c={done:!1,value:a},{stiffness:f,damping:p,mass:g,duration:v,velocity:_,isResolvedFromDuration:b}=dP({...n,velocity:-bn(n.velocity||0)}),E=_||0,k=p/(2*Math.sqrt(f*g)),N=u-a,w=bn(Math.sqrt(f/g)),x=Math.abs(N)<5;r||(r=x?Ae.restSpeed.granular:Ae.restSpeed.default),o||(o=x?Ae.restDelta.granular:Ae.restDelta.default);let S;if(k<1){const z=qc(w,k);S=B=>{const V=Math.exp(-k*w*B);return u-V*((E+k*w*N)/z*Math.sin(z*B)+N*Math.cos(z*B))}}else if(k===1)S=z=>u-Math.exp(-w*z)*(N+(E+w*N)*z);else{const z=w*Math.sqrt(k*k-1);S=B=>{const V=Math.exp(-k*w*B),D=Math.min(z*B,300);return u-V*((E+k*w*N)*Math.sinh(D)+z*N*Math.cosh(D))/z}}const A={calculatedDuration:b&&v||null,next:z=>{const B=S(z);if(b)c.done=z>=v;else{let V=0;k<1&&(V=z===0?Sn(E):t_(S,z,B));const D=Math.abs(V)<=r,ne=Math.abs(u-B)<=o;c.done=D&&ne}return c.value=c.done?u:B,c},toString:()=>{const z=Math.min(x0(A),Vc),B=w0(V=>A.next(z*V).value,z,30);return z+"ms "+B}};return A}function Cm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:c,max:f,restDelta:p=.5,restSpeed:g}){const v=e[0],_={done:!1,value:v},b=D=>c!==void 0&&D<c||f!==void 0&&D>f,E=D=>c===void 0?f:f===void 0||Math.abs(c-D)<Math.abs(f-D)?c:f;let k=n*t;const N=v+k,w=u===void 0?N:u(N);w!==N&&(k=w-v);const x=D=>-k*Math.exp(-D/r),S=D=>w+x(D),A=D=>{const ne=x(D),X=S(D);_.done=Math.abs(ne)<=p,_.value=_.done?w:X};let z,B;const V=D=>{b(_.value)&&(z=D,B=n_({keyframes:[_.value,E(_.value)],velocity:t_(S,D,_.value),damping:o,stiffness:a,restDelta:p,restSpeed:g}))};return V(0),{calculatedDuration:null,next:D=>{let ne=!1;return!B&&z===void 0&&(ne=!0,A(D),V(D)),z!==void 0&&D>=z?B.next(D-z):(!ne&&A(D),_)}}}const hP=os(.42,0,1,1),fP=os(0,0,.58,1),i_=os(.42,0,.58,1),pP=e=>Array.isArray(e)&&typeof e[0]!="number",mP={linear:Lt,easeIn:hP,easeInOut:i_,easeOut:fP,circIn:Nh,circInOut:O0,circOut:I0,backIn:Lh,backInOut:R0,backOut:A0,anticipate:z0},Tm=e=>{if(bh(e)){e0(e.length===4);const[t,n,r,o]=e;return os(t,n,r,o)}else if(typeof e=="string")return mP[e];return e};function gP(e,t,n){const r=[],o=n||e_,a=e.length-1;for(let u=0;u<a;u++){let c=o(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||Lt:t;c=ss(f,c)}r.push(c)}return r}function vP(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;if(e0(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const c=gP(t,r,o),f=c.length,p=g=>{if(u&&g<e[0])return t[0];let v=0;if(f>1)for(;v<e.length-2&&!(g<e[v+1]);v++);const _=Cr(e[v],e[v+1],g);return c[v](_)};return n?g=>p(Ln(e[0],e[a-1],g)):p}function yP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Cr(0,t,r);e.push(Ee(n,1,o))}}function _P(e){const t=[0];return yP(t,e.length-1),t}function xP(e,t){return e.map(n=>n*t)}function wP(e,t){return e.map(()=>t||i_).splice(0,e.length-1)}function Ja({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=pP(r)?r.map(Tm):Tm(r),a={done:!1,value:t[0]},u=xP(n&&n.length===t.length?n:_P(t),e),c=vP(u,t,{ease:Array.isArray(o)?o:wP(t,o)});return{calculatedDuration:e,next:f=>(a.value=c(f),a.done=f>=e,a)}}const SP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>Ce.update(t,!0),stop:()=>Qn(t),now:()=>Qe.isProcessing?Qe.timestamp:dn.now()}},bP={decay:Cm,inertia:Cm,tween:Ja,keyframes:Ja,spring:n_},kP=e=>e/100;class zh extends Q0{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:n,motionValue:r,element:o,keyframes:a}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Ah,c=(f,p)=>this.onKeyframesResolved(f,p);this.resolver=new u(a,c,n,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=this.options,c=Sh(n)?n:bP[n]||Ja;let f,p;c!==Ja&&typeof t[0]!="number"&&(f=ss(kP,e_(t[0],t[1])),t=[0,100]);const g=c({...this.options,keyframes:t});a==="mirror"&&(p=c({...this.options,keyframes:[...t].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=x0(g));const{calculatedDuration:v}=g,_=v+o,b=_*(r+1)-o;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:f,calculatedDuration:v,resolvedDuration:_,totalDuration:b}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:D}=this.options;return{done:!0,value:D[D.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:f,calculatedDuration:p,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:_,repeat:b,repeatType:E,repeatDelay:k,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-g/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const w=this.currentTime-_*(this.speed>=0?1:-1),x=this.speed>=0?w<0:w>g;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let S=this.currentTime,A=a;if(b){const D=Math.min(this.currentTime,g)/v;let ne=Math.floor(D),X=D%1;!X&&D>=1&&(X=1),X===1&&ne--,ne=Math.min(ne,b+1),!!(ne%2)&&(E==="reverse"?(X=1-X,k&&(X-=k/v)):E==="mirror"&&(A=u)),S=Ln(0,1,X)*v}const z=x?{done:!1,value:f[0]}:A.next(S);c&&(z.value=c(z.value));let{done:B}=z;!x&&p!==null&&(B=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&B);return V&&o!==void 0&&(z.value=kl(f,this.options,o)),N&&N(z.value),V&&this.finish(),z}get duration(){const{resolved:t}=this;return t?bn(t.calculatedDuration):0}get time(){return bn(this.currentTime)}set time(t){t=Sn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=SP,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const PP=new Set(["opacity","clipPath","filter","transform"]);function CP(e,t,n,{delay:r=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:c="easeInOut",times:f}={}){const p={[t]:n};f&&(p.offset=f);const g=b0(c,o);return Array.isArray(g)&&(p.easing=g),e.animate(p,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}const TP=ah(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),el=10,LP=2e4;function NP(e){return Sh(e.type)||e.type==="spring"||!S0(e.ease)}function EP(e,t){const n=new zh({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let a=0;for(;!r.done&&a<LP;)r=n.sample(a),o.push(r.value),a+=el;return{times:void 0,keyframes:o,duration:a-el,ease:"linear"}}const r_={anticipate:z0,backInOut:R0,circInOut:O0};function MP(e){return e in r_}class Lm extends Q0{constructor(t){super(t);const{name:n,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new X0(a,(u,c)=>this.onKeyframesResolved(u,c),n,r,o),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:o,ease:a,type:u,motionValue:c,name:f,startTime:p}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof a=="string"&&Xa()&&MP(a)&&(a=r_[a]),NP(this.options)){const{onComplete:v,onUpdate:_,motionValue:b,element:E,...k}=this.options,N=EP(t,k);t=N.keyframes,t.length===1&&(t[1]=t[0]),r=N.duration,o=N.times,a=N.ease,u="keyframes"}const g=CP(c.owner.current,f,t,{...this.options,duration:r,times:o,ease:a});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(hm(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;c.set(kl(t,this.options,n)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:u,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return bn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return bn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Sn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Lt;const{animation:r}=n;hm(r,t)}return Lt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:o,type:a,ease:u,times:c}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:v,element:_,...b}=this.options,E=new zh({...b,keyframes:r,duration:o,type:a,ease:u,times:c,isGenerator:!0}),k=Sn(this.time);p.setWithVelocity(E.sample(k-el).value,E.sample(k).value,el)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:o,repeatType:a,damping:u,type:c}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:p}=n.owner.getProps();return TP()&&r&&PP.has(r)&&!f&&!p&&!o&&a!=="mirror"&&u!==0&&c!=="inertia"}}const jP={type:"spring",stiffness:500,damping:25,restSpeed:10},AP=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),RP={type:"keyframes",duration:.8},zP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},IP=(e,{keyframes:t})=>t.length>2?RP:ji.has(e)?e.startsWith("scale")?AP(t[1]):jP:zP;function OP({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:c,from:f,elapsed:p,...g}){return!!Object.keys(g).length}const Ih=(e,t,n,r={},o,a)=>u=>{const c=wh(r,e)||{},f=c.delay||r.delay||0;let{elapsed:p=0}=r;p=p-Sn(f);let g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...c,delay:-p,onUpdate:_=>{t.set(_),c.onUpdate&&c.onUpdate(_)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:e,motionValue:t,element:a?void 0:o};OP(c)||(g={...g,...IP(e,g)}),g.duration&&(g.duration=Sn(g.duration)),g.repeatDelay&&(g.repeatDelay=Sn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!a&&t.get()!==void 0){const _=kl(g.keyframes,c);if(_!==void 0)return Ce.update(()=>{g.onUpdate(_),g.onComplete()}),new nk([])}return!a&&Lm.supports(g)?new Lm(g):new zh(g)};function DP({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function o_(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:u=e.getDefaultTransition(),transitionEnd:c,...f}=t;r&&(u=r);const p=[],g=o&&e.animationState&&e.animationState.getState()[o];for(const v in f){const _=e.getValue(v,(a=e.latestValues[v])!==null&&a!==void 0?a:null),b=f[v];if(b===void 0||g&&DP(g,v))continue;const E={delay:n,...wh(u||{},v)};let k=!1;if(window.MotionHandoffAnimation){const w=N0(e);if(w){const x=window.MotionHandoffAnimation(w,v,Ce);x!==null&&(E.startTime=x,k=!0)}}Uc(e,v),_.start(Ih(v,_,b,e.shouldReduceMotion&&T0.has(v)?{type:!1}:E,e,k));const N=_.animation;N&&p.push(N)}return c&&Promise.all(p).then(()=>{Ce.update(()=>{c&&gk(e,c)})}),p}function Yc(e,t,n={}){var r;const o=bl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const u=o?()=>Promise.all(o_(e,o,n)):()=>Promise.resolve(),c=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:_}=a;return BP(e,t,g+p,v,_,n)}:()=>Promise.resolve(),{when:f}=a;if(f){const[p,g]=f==="beforeChildren"?[u,c]:[c,u];return p().then(()=>g())}else return Promise.all([u(),c(n.delay)])}function BP(e,t,n=0,r=0,o=1,a){const u=[],c=(e.variantChildren.size-1)*r,f=o===1?(p=0)=>p*r:(p=0)=>c-p*r;return Array.from(e.variantChildren).sort(FP).forEach((p,g)=>{p.notify("AnimationStart",t),u.push(Yc(p,t,{...a,delay:n+f(g)}).then(()=>p.notify("AnimationComplete",t)))}),Promise.all(u)}function FP(e,t){return e.sortNodePosition(t)}function VP(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>Yc(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=Yc(e,t,n);else{const o=typeof t=="function"?bl(e,t,n.custom):t;r=Promise.all(o_(e,o,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const HP=uh.length;function s_(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?s_(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<HP;n++){const r=uh[n],o=e.props[r];(Go(o)||o===!1)&&(t[r]=o)}return t}const UP=[...lh].reverse(),ZP=lh.length;function WP(e){return t=>Promise.all(t.map(({animation:n,options:r})=>VP(e,n,r)))}function $P(e){let t=WP(e),n=Nm(),r=!0;const o=f=>(p,g)=>{var v;const _=bl(e,g,f==="exit"?(v=e.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(_){const{transition:b,transitionEnd:E,...k}=_;p={...p,...k,...E}}return p};function a(f){t=f(e)}function u(f){const{props:p}=e,g=s_(e.parent)||{},v=[],_=new Set;let b={},E=1/0;for(let N=0;N<ZP;N++){const w=UP[N],x=n[w],S=p[w]!==void 0?p[w]:g[w],A=Go(S),z=w===f?x.isActive:null;z===!1&&(E=N);let B=S===g[w]&&S!==p[w]&&A;if(B&&r&&e.manuallyAnimateOnMount&&(B=!1),x.protectedKeys={...b},!x.isActive&&z===null||!S&&!x.prevProp||wl(S)||typeof S=="boolean")continue;const V=GP(x.prevProp,S);let D=V||w===f&&x.isActive&&!B&&A||N>E&&A,ne=!1;const X=Array.isArray(S)?S:[S];let ae=X.reduce(o(w),{});z===!1&&(ae={});const{prevResolvedValues:be={}}=x,pt={...be,...ae},Q=he=>{D=!0,_.has(he)&&(ne=!0,_.delete(he)),x.needsAnimating[he]=!0;const I=e.getValue(he);I&&(I.liveStyle=!1)};for(const he in pt){const I=ae[he],J=be[he];if(b.hasOwnProperty(he))continue;let P=!1;Fc(I)&&Fc(J)?P=!_0(I,J):P=I!==J,P?I!=null?Q(he):_.add(he):I!==void 0&&_.has(he)?Q(he):x.protectedKeys[he]=!0}x.prevProp=S,x.prevResolvedValues=ae,x.isActive&&(b={...b,...ae}),r&&e.blockInitialAnimation&&(D=!1),D&&(!(B&&V)||ne)&&v.push(...X.map(he=>({animation:he,options:{type:w}})))}if(_.size){const N={};_.forEach(w=>{const x=e.getBaseTarget(w),S=e.getValue(w);S&&(S.liveStyle=!0),N[w]=x??null}),v.push({animation:N})}let k=!!v.length;return r&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(k=!1),r=!1,k?t(v):Promise.resolve()}function c(f,p){var g;if(n[f].isActive===p)return Promise.resolve();(g=e.variantChildren)===null||g===void 0||g.forEach(_=>{var b;return(b=_.animationState)===null||b===void 0?void 0:b.setActive(f,p)}),n[f].isActive=p;const v=u(f);for(const _ in n)n[_].protectedKeys={};return v}return{animateChanges:u,setActive:c,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Nm(),r=!0}}}function GP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!_0(t,e):!1}function ui(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nm(){return{animate:ui(!0),whileInView:ui(),whileHover:ui(),whileTap:ui(),whileDrag:ui(),whileFocus:ui(),exit:ui()}}class ii{constructor(t){this.isMounted=!1,this.node=t}update(){}}class KP extends ii{constructor(t){super(t),t.animationState||(t.animationState=$P(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();wl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let qP=0;class YP extends ii{constructor(){super(...arguments),this.id=qP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const XP={animation:{Feature:KP},exit:{Feature:YP}};function Xo(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function as(e){return{point:{x:e.pageX,y:e.pageY}}}const QP=e=>t=>kh(t)&&e(t,as(t));function ko(e,t,n,r){return Xo(e,t,QP(n),r)}const Em=(e,t)=>Math.abs(e-t);function JP(e,t){const n=Em(e.x,t.x),r=Em(e.y,t.y);return Math.sqrt(n**2+r**2)}class a_{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Ou(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,b=JP(v.offset,{x:0,y:0})>=3;if(!_&&!b)return;const{point:E}=v,{timestamp:k}=Qe;this.history.push({...E,timestamp:k});const{onStart:N,onMove:w}=this.handlers;_||(N&&N(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,v)},this.handlePointerMove=(v,_)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Iu(_,this.transformPagePoint),Ce.update(this.updatePoint,!0)},this.handlePointerUp=(v,_)=>{this.end();const{onEnd:b,onSessionEnd:E,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=Ou(v.type==="pointercancel"?this.lastMoveEventInfo:Iu(_,this.transformPagePoint),this.history);this.startEvent&&b&&b(v,N),E&&E(v,N)},!kh(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const u=as(t),c=Iu(u,this.transformPagePoint),{point:f}=c,{timestamp:p}=Qe;this.history=[{...f,timestamp:p}];const{onSessionStart:g}=n;g&&g(t,Ou(c,this.history)),this.removeListeners=ss(ko(this.contextWindow,"pointermove",this.handlePointerMove),ko(this.contextWindow,"pointerup",this.handlePointerUp),ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qn(this.updatePoint)}}function Iu(e,t){return t?{point:t(e.point)}:e}function Mm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ou({point:e},t){return{point:e,delta:Mm(e,l_(t)),offset:Mm(e,eC(t)),velocity:tC(t,.1)}}function eC(e){return e[0]}function l_(e){return e[e.length-1]}function tC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=l_(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Sn(t)));)n--;if(!r)return{x:0,y:0};const a=bn(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const u_=1e-4,nC=1-u_,iC=1+u_,c_=.01,rC=0-c_,oC=0+c_;function Et(e){return e.max-e.min}function sC(e,t,n){return Math.abs(e-t)<=n}function jm(e,t,n,r=.5){e.origin=r,e.originPoint=Ee(t.min,t.max,e.origin),e.scale=Et(n)/Et(t),e.translate=Ee(n.min,n.max,e.origin)-e.originPoint,(e.scale>=nC&&e.scale<=iC||isNaN(e.scale))&&(e.scale=1),(e.translate>=rC&&e.translate<=oC||isNaN(e.translate))&&(e.translate=0)}function Po(e,t,n,r){jm(e.x,t.x,n.x,r?r.originX:void 0),jm(e.y,t.y,n.y,r?r.originY:void 0)}function Am(e,t,n){e.min=n.min+t.min,e.max=e.min+Et(t)}function aC(e,t,n){Am(e.x,t.x,n.x),Am(e.y,t.y,n.y)}function Rm(e,t,n){e.min=t.min-n.min,e.max=e.min+Et(t)}function Co(e,t,n){Rm(e.x,t.x,n.x),Rm(e.y,t.y,n.y)}function lC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ee(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ee(n,e,r.max):Math.min(e,n)),e}function zm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function uC(e,{top:t,left:n,bottom:r,right:o}){return{x:zm(e.x,n,o),y:zm(e.y,t,r)}}function Im(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function cC(e,t){return{x:Im(e.x,t.x),y:Im(e.y,t.y)}}function dC(e,t){let n=.5;const r=Et(e),o=Et(t);return o>r?n=Cr(t.min,t.max-r,e.min):r>o&&(n=Cr(e.min,e.max-o,t.min)),Ln(0,1,n)}function hC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Xc=.35;function fC(e=Xc){return e===!1?e=0:e===!0&&(e=Xc),{x:Om(e,"left","right"),y:Om(e,"top","bottom")}}function Om(e,t,n){return{min:Dm(e,t),max:Dm(e,n)}}function Dm(e,t){return typeof e=="number"?e:e[t]||0}const Bm=()=>({translate:0,scale:1,origin:0,originPoint:0}),ar=()=>({x:Bm(),y:Bm()}),Fm=()=>({min:0,max:0}),Oe=()=>({x:Fm(),y:Fm()});function Ot(e){return[e("x"),e("y")]}function d_({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function pC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function mC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Du(e){return e===void 0||e===1}function Qc({scale:e,scaleX:t,scaleY:n}){return!Du(e)||!Du(t)||!Du(n)}function fi(e){return Qc(e)||h_(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function h_(e){return Vm(e.x)||Vm(e.y)}function Vm(e){return e&&e!=="0%"}function tl(e,t,n){const r=e-n,o=t*r;return n+o}function Hm(e,t,n,r,o){return o!==void 0&&(e=tl(e,o,r)),tl(e,n,r)+t}function Jc(e,t=0,n=1,r,o){e.min=Hm(e.min,t,n,r,o),e.max=Hm(e.max,t,n,r,o)}function f_(e,{x:t,y:n}){Jc(e.x,t.translate,t.scale,t.originPoint),Jc(e.y,n.translate,n.scale,n.originPoint)}const Um=.999999999999,Zm=1.0000000000001;function gC(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let a,u;for(let c=0;c<o;c++){a=n[c],u=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ur(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,f_(e,u)),r&&fi(a.latestValues)&&ur(e,a.latestValues))}t.x<Zm&&t.x>Um&&(t.x=1),t.y<Zm&&t.y>Um&&(t.y=1)}function lr(e,t){e.min=e.min+t,e.max=e.max+t}function Wm(e,t,n,r,o=.5){const a=Ee(e.min,e.max,o);Jc(e,t,n,a,r)}function ur(e,t){Wm(e.x,t.x,t.scaleX,t.scale,t.originX),Wm(e.y,t.y,t.scaleY,t.scale,t.originY)}function p_(e,t){return d_(mC(e.getBoundingClientRect(),t))}function vC(e,t,n){const r=p_(e,n),{scroll:o}=t;return o&&(lr(r.x,o.offset.x),lr(r.y,o.offset.y)),r}const m_=({current:e})=>e?e.ownerDocument.defaultView:null,yC=new WeakMap;class _C{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Oe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(as(g).point)},a=(g,v)=>{const{drag:_,dragPropagation:b,onDragStart:E}=this.getProps();if(_&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dk(_),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(N=>{let w=this.getAxisMotionValue(N).get()||0;if(cn.test(w)){const{projection:x}=this.visualElement;if(x&&x.layout){const S=x.layout.layoutBox[N];S&&(w=Et(S)*(parseFloat(w)/100))}}this.originPoint[N]=w}),E&&Ce.postRender(()=>E(g,v)),Uc(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},u=(g,v)=>{const{dragPropagation:_,dragDirectionLock:b,onDirectionLock:E,onDrag:k}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:N}=v;if(b&&this.currentDirection===null){this.currentDirection=xC(N),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,N),this.updateAxis("y",v.point,N),this.visualElement.render(),k&&k(g,v)},c=(g,v)=>this.stop(g,v),f=()=>Ot(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new a_(t,{onSessionStart:o,onStart:a,onMove:u,onSessionEnd:c,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:m_(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Ce.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!na(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let u=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(u=lC(u,this.constraints[t],this.elastic[t])),a.set(u)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&or(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=uC(o.layoutBox,n):this.constraints=!1,this.elastic=fC(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ot(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=hC(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!or(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=vC(r,o.root,this.visualElement.getTransformPagePoint());let u=cC(o.layout.layoutBox,a);if(n){const c=n(pC(u));this.hasMutatedConstraints=!!c,c&&(u=d_(c))}return u}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),f=this.constraints||{},p=Ot(g=>{if(!na(g,n,this.currentDirection))return;let v=f&&f[g]||{};u&&(v={min:0,max:0});const _=o?200:1e6,b=o?40:1e7,E={type:"inertia",velocity:r?t[g]:0,bounceStiffness:_,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(g,E)});return Promise.all(p).then(c)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Uc(this.visualElement,t),r.start(Ih(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ot(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ot(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ot(n=>{const{drag:r}=this.getProps();if(!na(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[n];a.set(t[n]-Ee(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!or(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ot(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const f=c.get();o[u]=dC({min:f,max:f},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ot(u=>{if(!na(u,t,null))return;const c=this.getAxisMotionValue(u),{min:f,max:p}=this.constraints[u];c.set(Ee(f,p,o[u]))})}addListeners(){if(!this.visualElement.current)return;yC.set(this.visualElement,this);const t=this.visualElement.current,n=ko(t,"pointerdown",f=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(f)}),r=()=>{const{dragConstraints:f}=this.getProps();or(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ce.read(r);const u=Xo(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ot(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=f[g].translate,v.set(v.get()+f[g].translate))}),this.visualElement.render())});return()=>{u(),n(),a(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=Xc,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:c}}}function na(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function xC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class wC extends ii{constructor(t){super(t),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new _C(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}unmount(){this.removeGroupControls(),this.removeListeners()}}const $m=e=>(t,n)=>{e&&Ce.postRender(()=>e(t,n))};class SC extends ii{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(t){this.session=new a_(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:m_(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:$m(t),onStart:$m(n),onMove:r,onEnd:(a,u)=>{delete this.session,o&&Ce.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=ko(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ya={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Gm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const oo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ee.test(e))e=parseFloat(e);else return e;const n=Gm(e,t.target.x),r=Gm(e,t.target.y);return`${n}% ${r}%`}},bC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Jn.parse(e);if(o.length>5)return r;const a=Jn.createTransformer(e),u=typeof o[0]!="number"?1:0,c=n.x.scale*t.x,f=n.y.scale*t.y;o[0+u]/=c,o[1+u]/=f;const p=Ee(c,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),a(o)}};class kC extends M.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;Zb(PC),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),ya.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,u=r.projection;return u&&(u.isPresent=a,o||t.layoutDependency!==n||n===void 0?u.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?u.promote():u.relegate()||Ce.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),dh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function g_(e){const[t,n]=Qy(),r=M.useContext(ih);return h.jsx(kC,{...e,layoutGroup:r,switchLayoutGroup:M.useContext(s0),isPresent:t,safeToRemove:n})}const PC={borderRadius:{...oo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oo,borderTopRightRadius:oo,borderBottomLeftRadius:oo,borderBottomRightRadius:oo,boxShadow:bC};function CC(e,t,n){const r=st(e)?e:qo(e);return r.start(Ih("",r,t,n)),r.animation}function TC(e){return e instanceof SVGElement&&e.tagName!=="svg"}const LC=(e,t)=>e.depth-t.depth;class NC{constructor(){this.children=[],this.isDirty=!1}add(t){Ph(this.children,t),this.isDirty=!0}remove(t){Ch(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(LC),this.isDirty=!1,this.children.forEach(t)}}function EC(e,t){const n=dn.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(Qn(r),e(a-t))};return Ce.read(r,!0),()=>Qn(r)}const v_=["TopLeft","TopRight","BottomLeft","BottomRight"],MC=v_.length,Km=e=>typeof e=="string"?parseFloat(e):e,qm=e=>typeof e=="number"||ee.test(e);function jC(e,t,n,r,o,a){o?(e.opacity=Ee(0,n.opacity!==void 0?n.opacity:1,AC(r)),e.opacityExit=Ee(t.opacity!==void 0?t.opacity:1,0,RC(r))):a&&(e.opacity=Ee(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let u=0;u<MC;u++){const c=`border${v_[u]}Radius`;let f=Ym(t,c),p=Ym(n,c);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||qm(f)===qm(p)?(e[c]=Math.max(Ee(Km(f),Km(p),r),0),(cn.test(p)||cn.test(f))&&(e[c]+="%")):e[c]=p}(t.rotate||n.rotate)&&(e.rotate=Ee(t.rotate||0,n.rotate||0,r))}function Ym(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const AC=y_(0,.5,I0),RC=y_(.5,.95,Lt);function y_(e,t,n){return r=>r<e?0:r>t?1:n(Cr(e,t,r))}function Xm(e,t){e.min=t.min,e.max=t.max}function It(e,t){Xm(e.x,t.x),Xm(e.y,t.y)}function Qm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Jm(e,t,n,r,o){return e-=t,e=tl(e,1/n,r),o!==void 0&&(e=tl(e,1/o,r)),e}function zC(e,t=0,n=1,r=.5,o,a=e,u=e){if(cn.test(t)&&(t=parseFloat(t),t=Ee(u.min,u.max,t/100)-u.min),typeof t!="number")return;let c=Ee(a.min,a.max,r);e===a&&(c-=t),e.min=Jm(e.min,t,n,c,o),e.max=Jm(e.max,t,n,c,o)}function eg(e,t,[n,r,o],a,u){zC(e,t[n],t[r],t[o],t.scale,a,u)}const IC=["x","scaleX","originX"],OC=["y","scaleY","originY"];function tg(e,t,n,r){eg(e.x,t,IC,n?n.x:void 0,r?r.x:void 0),eg(e.y,t,OC,n?n.y:void 0,r?r.y:void 0)}function ng(e){return e.translate===0&&e.scale===1}function __(e){return ng(e.x)&&ng(e.y)}function ig(e,t){return e.min===t.min&&e.max===t.max}function DC(e,t){return ig(e.x,t.x)&&ig(e.y,t.y)}function rg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function x_(e,t){return rg(e.x,t.x)&&rg(e.y,t.y)}function og(e){return Et(e.x)/Et(e.y)}function sg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class BC{constructor(){this.members=[]}add(t){Ph(this.members,t),t.scheduleRender()}remove(t){if(Ch(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function FC(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||a||u)&&(r=`translate3d(${o}px, ${a}px, ${u}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:p,rotate:g,rotateX:v,rotateY:_,skewX:b,skewY:E}=n;p&&(r=`perspective(${p}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),_&&(r+=`rotateY(${_}deg) `),b&&(r+=`skewX(${b}deg) `),E&&(r+=`skewY(${E}deg) `)}const c=e.x.scale*t.x,f=e.y.scale*t.y;return(c!==1||f!==1)&&(r+=`scale(${c}, ${f})`),r||"none"}const pi={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fo=typeof window<"u"&&window.MotionDebug!==void 0,Bu=["","X","Y","Z"],VC={visibility:"hidden"},ag=1e3;let HC=0;function Fu(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function w_(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=N0(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ce,!(o||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&w_(r)}function S_({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=t==null?void 0:t()){this.id=HC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fo&&(pi.totalNodes=pi.resolvedTargetDeltas=pi.recalculatedProjection=0),this.nodes.forEach(WC),this.nodes.forEach(YC),this.nodes.forEach(XC),this.nodes.forEach($C),fo&&window.MotionDebug.record(pi)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new NC)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Th),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const f=this.eventHandlers.get(u);f&&f.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=TC(u),this.instance=u;const{layoutId:f,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(p||f)&&(this.isLayoutDirty=!0),e){let v;const _=()=>this.root.updateBlockedByResize=!1;e(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=EC(_,250),ya.hasAnimatedSinceResize&&(ya.hasAnimatedSinceResize=!1,this.nodes.forEach(ug))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||p)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:_,hasRelativeTargetChanged:b,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||g.getDefaultTransition()||nT,{onLayoutAnimationStart:N,onLayoutAnimationComplete:w}=g.getProps(),x=!this.targetLayout||!x_(this.targetLayout,E)||b,S=!_&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||S||_&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,S);const A={...wh(k,"layout"),onPlay:N,onComplete:w};(g.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A)}else _||ug(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&w_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:c,layout:f}=this.options;if(c===void 0&&!f)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(lg);return}this.isUpdating||this.nodes.forEach(KC),this.isUpdating=!1,this.nodes.forEach(qC),this.nodes.forEach(UC),this.nodes.forEach(ZC),this.clearAllSnapshots();const c=dn.now();Qe.delta=Ln(0,1e3/60,c-Qe.timestamp),Qe.timestamp=c,Qe.isProcessing=!0,Eu.update.process(Qe),Eu.preRender.process(Qe),Eu.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GC),this.sharedNodes.forEach(JC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Oe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const f=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!__(this.projectionDelta),f=this.getTransformTemplate(),p=f?f(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;u&&(c||fi(this.latestValues)||g)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let f=this.removeElementScroll(c);return u&&(f=this.removeTransform(f)),iT(f),{animationId:this.root.animationId,measuredBox:c,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return Oe();const f=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(rT))){const{scroll:g}=this.root;g&&(lr(f.x,g.offset.x),lr(f.y,g.offset.y))}return f}removeElementScroll(u){var c;const f=Oe();if(It(f,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return f;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:v,options:_}=g;g!==this.root&&v&&_.layoutScroll&&(v.wasRoot&&It(f,u),lr(f.x,v.offset.x),lr(f.y,v.offset.y))}return f}applyTransform(u,c=!1){const f=Oe();It(f,u);for(let p=0;p<this.path.length;p++){const g=this.path[p];!c&&g.options.layoutScroll&&g.scroll&&g!==g.root&&ur(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),fi(g.latestValues)&&ur(f,g.latestValues)}return fi(this.latestValues)&&ur(f,this.latestValues),f}removeTransform(u){const c=Oe();It(c,u);for(let f=0;f<this.path.length;f++){const p=this.path[f];if(!p.instance||!fi(p.latestValues))continue;Qc(p.latestValues)&&p.updateSnapshot();const g=Oe(),v=p.measurePageBox();It(g,v),tg(c,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return fi(this.latestValues)&&tg(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:_}=this.options;if(!(!this.layout||!(v||_))){if(this.resolvedRelativeTargetAt=Qe.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Co(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Oe(),this.targetWithTransforms=Oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):It(this.target,this.layout.layoutBox),f_(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Oe(),this.relativeTargetOrigin=Oe(),Co(this.relativeTargetOrigin,this.target,b.target),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fo&&pi.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Qc(this.parent.latestValues)||h_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(p=!1),p)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;It(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,b=this.treeScale.y;gC(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Oe());const{target:E}=c;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qm(this.prevProjectionDelta.x,this.projectionDelta.x),Qm(this.prevProjectionDelta.y,this.projectionDelta.y)),Po(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==b||!sg(this.projectionDelta.x,this.prevProjectionDelta.x)||!sg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),fo&&pi.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ar(),this.projectionDelta=ar(),this.projectionDeltaWithTransform=ar()}setAnimationOrigin(u,c=!1){const f=this.snapshot,p=f?f.latestValues:{},g={...this.latestValues},v=ar();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const _=Oe(),b=f?f.source:void 0,E=this.layout?this.layout.source:void 0,k=b!==E,N=this.getStack(),w=!N||N.members.length<=1,x=!!(k&&!w&&this.options.crossfade===!0&&!this.path.some(tT));this.animationProgress=0;let S;this.mixTargetDelta=A=>{const z=A/1e3;cg(v.x,u.x,z),cg(v.y,u.y,z),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Co(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),eT(this.relativeTarget,this.relativeTargetOrigin,_,z),S&&DC(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=Oe()),It(S,this.relativeTarget)),k&&(this.animationValues=g,jC(g,p,this.latestValues,z,x,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ce.update(()=>{ya.hasAnimatedSinceResize=!0,this.currentAnimation=CC(0,ag,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ag),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:f,layout:p,latestValues:g}=u;if(!(!c||!f||!p)){if(this!==u&&this.layout&&p&&b_(this.options.animationType,this.layout.layoutBox,p.layoutBox)){f=this.target||Oe();const v=Et(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+v;const _=Et(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+_}It(c,f),ur(c,g),Po(this.projectionDeltaWithTransform,this.layoutCorrected,c,g)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new BC),this.sharedNodes.get(u).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:f}={}){const p=this.getStack();p&&p.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(c=!0),!c)return;const p={};f.z&&Fu("z",u,p,this.animationValues);for(let g=0;g<Bu.length;g++)Fu(`rotate${Bu[g]}`,u,p,this.animationValues),Fu(`skew${Bu[g]}`,u,p,this.animationValues);u.render();for(const g in p)u.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);u.scheduleRender()}getProjectionStyles(u){var c,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return VC;const p={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=ga(u==null?void 0:u.pointerEvents)||"",p.transform=g?g(this.latestValues,""):"none",p;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=ga(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!fi(this.latestValues)&&(k.transform=g?g({},""):"none",this.hasProjected=!1),k}const _=v.animationValues||v.latestValues;this.applyTransformsToTarget(),p.transform=FC(this.projectionDeltaWithTransform,this.treeScale,_),g&&(p.transform=g(_,p.transform));const{x:b,y:E}=this.projectionDelta;p.transformOrigin=`${b.origin*100}% ${E.origin*100}% 0`,v.animationValues?p.opacity=v===this?(f=(c=_.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:p.opacity=v===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const k in Ya){if(_[k]===void 0)continue;const{correct:N,applyTo:w}=Ya[k],x=p.transform==="none"?_[k]:N(_[k],v);if(w){const S=w.length;for(let A=0;A<S;A++)p[w[A]]=x}else p[k]=x}return this.options.layoutId&&(p.pointerEvents=v===this?ga(u==null?void 0:u.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(lg),this.root.sharedNodes.clear()}}}function UC(e){e.updateLayout()}function ZC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:a}=e.options,u=n.source!==e.layout.source;a==="size"?Ot(v=>{const _=u?n.measuredBox[v]:n.layoutBox[v],b=Et(_);_.min=r[v].min,_.max=_.min+b}):b_(a,n.layoutBox,r)&&Ot(v=>{const _=u?n.measuredBox[v]:n.layoutBox[v],b=Et(r[v]);_.max=_.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+b)});const c=ar();Po(c,r,n.layoutBox);const f=ar();u?Po(f,e.applyTransform(o,!0),n.measuredBox):Po(f,r,n.layoutBox);const p=!__(c);let g=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:_,layout:b}=v;if(_&&b){const E=Oe();Co(E,n.layoutBox,_.layoutBox);const k=Oe();Co(k,r,b.layoutBox),x_(E,k)||(g=!0),v.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=E,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:f,layoutDelta:c,hasLayoutChanged:p,hasRelativeTargetChanged:g})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function WC(e){fo&&pi.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $C(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function GC(e){e.clearSnapshot()}function lg(e){e.clearMeasurements()}function KC(e){e.isLayoutDirty=!1}function qC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ug(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function YC(e){e.resolveTargetDelta()}function XC(e){e.calcProjection()}function QC(e){e.resetSkewAndRotation()}function JC(e){e.removeLeadSnapshot()}function cg(e,t,n){e.translate=Ee(t.translate,0,n),e.scale=Ee(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function dg(e,t,n,r){e.min=Ee(t.min,n.min,r),e.max=Ee(t.max,n.max,r)}function eT(e,t,n,r){dg(e.x,t.x,n.x,r),dg(e.y,t.y,n.y,r)}function tT(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const nT={duration:.45,ease:[.4,0,.1,1]},hg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),fg=hg("applewebkit/")&&!hg("chrome/")?Math.round:Lt;function pg(e){e.min=fg(e.min),e.max=fg(e.max)}function iT(e){pg(e.x),pg(e.y)}function b_(e,t,n){return e==="position"||e==="preserve-aspect"&&!sC(og(t),og(n),.2)}function rT(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const oT=S_({attachResizeListener:(e,t)=>Xo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vu={current:void 0},k_=S_({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vu.current){const e=new oT({});e.mount(window),e.setOptions({layoutScroll:!0}),Vu.current=e}return Vu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),sT={pan:{Feature:SC},drag:{Feature:wC,ProjectionNode:k_,MeasureLayout:g_}};function mg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,a=r[o];a&&Ce.postRender(()=>a(t,as(t)))}class aT extends ii{mount(){const{current:t}=this.node;t&&(this.unmount=sk(t,n=>(mg(this.node,n,"Start"),r=>mg(this.node,r,"End"))))}unmount(){}}class lT extends ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ss(Xo(this.node.current,"focus",()=>this.onFocus()),Xo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gg(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),a=r[o];a&&Ce.postRender(()=>a(t,as(t)))}class uT extends ii{mount(){const{current:t}=this.node;t&&(this.unmount=ck(t,n=>(gg(this.node,n,"Start"),(r,{success:o})=>gg(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ed=new WeakMap,Hu=new WeakMap,cT=e=>{const t=ed.get(e.target);t&&t(e)},dT=e=>{e.forEach(cT)};function hT({root:e,...t}){const n=e||document;Hu.has(n)||Hu.set(n,{});const r=Hu.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(dT,{root:e,...t})),r[o]}function fT(e,t,n){const r=hT(t);return ed.set(e,n),r.observe(e),()=>{ed.delete(e),r.unobserve(e)}}const pT={some:0,all:1};class mT extends ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:a}=t,u={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:pT[o]},c=f=>{const{isIntersecting:p}=f;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=p?g:v;_&&_(f)};return fT(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(gT(t,n))&&this.startObserver()}unmount(){}}function gT({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const vT={inView:{Feature:mT},tap:{Feature:uT},focus:{Feature:lT},hover:{Feature:aT}},yT={layout:{ProjectionNode:k_,MeasureLayout:g_}},td={current:null},P_={current:!1};function _T(){if(P_.current=!0,!!sh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>td.current=e.matches;e.addListener(t),t()}else td.current=!1}const xT=[...Y0,rt,Jn],wT=e=>xT.find(q0(e)),vg=new WeakMap;function ST(e,t,n){for(const r in t){const o=t[r],a=n[r];if(st(o))e.addValue(r,o);else if(st(a))e.addValue(r,qo(o,{owner:e}));else if(a!==o)if(e.hasValue(r)){const u=e.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(r);e.addValue(r,qo(u!==void 0?u:o,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const yg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bT{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ah,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=dn.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,Ce.render(this.render,!1,!0))};const{latestValues:f,renderState:p,onUpdate:g}=u;this.onUpdate=g,this.latestValues=f,this.baseTarget={...f},this.initialValues=n.initial?{...f}:{},this.renderState=p,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=Sl(n),this.isVariantNode=r0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:v,..._}=this.scrapeMotionValuesFromProps(n,{},this);for(const b in _){const E=_[b];f[b]!==void 0&&st(E)&&E.set(f[b],!1)}}mount(t){this.current=t,vg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),P_.current||_T(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:td.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){vg.delete(this.current),this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ji.has(t),o=n.on("change",c=>{this.latestValues[t]=c,this.props.onUpdate&&Ce.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),a(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Tr){const n=Tr[t];if(!n)continue;const{isEnabled:r,Feature:o}=n;if(!this.features[t]&&o&&r(this.props)&&(this.features[t]=new o(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<yg.length;r++){const o=yg[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=t[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=ST(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=qo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(G0(o)||D0(o))?o=parseFloat(o):!wT(o)&&Jn.test(n)&&(o=Z0(t,n)),this.setBaseTarget(t,st(o)?o.get():o)),st(o)?o.get():o}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=fh(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);u&&(o=u[t])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!st(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Th),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class C_ extends bT{constructor(){super(...arguments),this.KeyframeResolver=X0}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;st(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function kT(e){return window.getComputedStyle(e)}class PT extends C_{constructor(){super(...arguments),this.type="html",this.renderInstance=f0}readValueFromInstance(t,n){if(ji.has(n)){const r=jh(n);return r&&r.default||0}else{const r=kT(t),o=(c0(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return p_(t,n)}build(t,n,r){gh(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return xh(t,n,r)}}class CT extends C_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ji.has(n)){const r=jh(n);return r&&r.default||0}return n=p0.has(n)?n:ch(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return v0(t,n,r)}build(t,n,r){vh(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,o){m0(t,n,r,o)}mount(t){this.isSVGTag=_h(t.tagName),super.mount(t)}}const TT=(e,t)=>hh(e)?new CT(t):new PT(t,{allowProjection:e!==M.Fragment}),LT=Jb({...XP,...vT,...sT,...yT},TT),Je=pb(LT);function NT(){const e=[{title:"Terrain Risk",value:"InSAR 3D Scan",status:"Active",statusType:"safe",icon:nh,detail:"Himalayan slope slip prediction"},{title:"Weather Intelligence",value:"Live Monsoon Radar",status:"High Alert",statusType:"high",icon:Wa,detail:"Open-Meteo precipitation feeds"},{title:"Road Accessibility",value:"91.4% Passable",status:"Monitored",statusType:"safe",icon:XS,detail:"14 national highways tracked"},{title:"AI Route Optimization",value:"Multi-Factor Model",status:"Live",statusType:"gold",icon:th,detail:"Disruption-aware dynamic bypasses"}];return h.jsxs("section",{className:"hero-section",children:[h.jsx("div",{className:"float-shape shape-1"}),h.jsx("div",{className:"float-shape shape-2"}),h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"hero-content",children:[h.jsxs(Je.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6},className:"hero-pill",children:[h.jsx("span",{className:"pill-dot"}),h.jsx("span",{className:"pill-text",children:"Predict. Navigate. Deliver."})]}),h.jsx(Je.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},className:"hero-title font-serif",children:"SafarNama"}),h.jsx(Je.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},className:"hero-subtitle",children:"AI-powered logistics intelligence for the North Eastern Region"}),h.jsx(Je.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},className:"hero-description",children:"Predict disruptions, optimize routes and improve accessibility across one of India's most challenging logistics landscapes."}),h.jsxs(Je.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},className:"hero-buttons",children:[h.jsxs(_t,{to:"/dashboard",className:"btn btn-primary btn-lg",children:[h.jsx("span",{children:"Explore Intelligence"}),h.jsx(Ti,{size:18})]}),h.jsxs(_t,{to:"/team",className:"btn btn-secondary btn-lg",children:[h.jsx("span",{children:"Meet Our Team"}),h.jsx(Ti,{size:18})]})]})]}),h.jsx(Je.div,{initial:{opacity:0,scale:.96,y:30},animate:{opacity:1,scale:1,y:0},transition:{duration:.9,delay:.3,ease:[.16,1,.3,1]},className:"hero-visual-card",children:h.jsxs("div",{className:"visual-image-wrapper",children:[h.jsx("img",{src:"/images/ner_mountain_logistics.jpg",alt:"Winding mountain highway in North Eastern India with logistics freight truck",className:"hero-img",loading:"eager"}),h.jsx("div",{className:"visual-overlay"}),h.jsxs("div",{className:"telemetry-badge telemetry-top-left",children:[h.jsx("div",{className:"telemetry-icon",children:h.jsx(kr,{size:14,className:"text-teal"})}),h.jsxs("div",{className:"telemetry-content",children:[h.jsx("span",{className:"telemetry-label",children:"ACTIVE SECTOR"}),h.jsx("span",{className:"telemetry-val",children:"NH-13 • Bhalukpong–Dirang Pass"})]})]}),h.jsxs("div",{className:"telemetry-badge telemetry-bottom-right",children:[h.jsx("div",{className:"telemetry-pulse-dot"}),h.jsxs("div",{className:"telemetry-content",children:[h.jsx("span",{className:"telemetry-label",children:"AI PREDICTIVE RADAR"}),h.jsx("span",{className:"telemetry-val",children:"Monsoon Inflow: 48mm/h • Dynamic Reroute Ready"})]})]}),h.jsxs("div",{className:"waypoint-pin",children:[h.jsx("div",{className:"pin-circle",children:h.jsx("div",{className:"pin-dot"})}),h.jsx("div",{className:"pin-tag",children:"Sela Pass Altitude: 13,700 ft"})]})]})}),h.jsx(Je.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.8,delay:.5},className:"indicators-grid",children:e.map((t,n)=>{const r=t.icon;return h.jsxs("div",{className:"indicator-card card",children:[h.jsxs("div",{className:"indicator-header",children:[h.jsx("div",{className:"indicator-icon-box",children:h.jsx(r,{size:20})}),h.jsx("span",{className:`badge badge-${t.statusType}`,children:t.status})]}),h.jsxs("div",{className:"indicator-body",children:[h.jsx("h4",{className:"indicator-title",children:t.title}),h.jsx("div",{className:"indicator-value",children:t.value}),h.jsx("p",{className:"indicator-detail",children:t.detail})]})]},n)})})]}),h.jsx("style",{children:`
        .hero-section {
          position: relative;
          padding: 4.5rem 0 3.5rem 0;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 3.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(15, 76, 76, 0.08);
          border: 1px solid rgba(15, 76, 76, 0.16);
          padding: 0.4rem 1.1rem;
          border-radius: var(--radius-full);
          margin-bottom: 1.5rem;
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--color-gold);
        }

        .pill-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-teal);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(3.2rem, 7vw, 5.2rem);
          font-weight: 800;
          color: var(--color-teal);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }

        .hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(1.25rem, 2.8vw, 1.85rem);
          font-weight: 600;
          color: var(--color-charcoal);
          line-height: 1.35;
          margin-bottom: 1.2rem;
        }

        .hero-description {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--color-charcoal-muted);
          line-height: 1.65;
          max-width: 680px;
          margin-bottom: 2.25rem;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.1rem;
          flex-wrap: wrap;
        }

        .hero-visual-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          box-shadow: 0 25px 60px -15px rgba(15, 76, 76, 0.22);
          margin-bottom: 3.5rem;
        }

        .visual-image-wrapper {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .visual-image-wrapper {
            height: 340px;
          }
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1.2s ease;
        }

        .hero-visual-card:hover .hero-img {
          transform: scale(1.02);
        }

        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15, 76, 76, 0.15) 0%,
            transparent 40%,
            rgba(24, 37, 37, 0.4) 100%
          );
          pointer-events: none;
        }

        .telemetry-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 2;
        }

        .telemetry-top-left {
          top: 1.5rem;
          left: 1.5rem;
        }

        .telemetry-bottom-right {
          bottom: 1.5rem;
          right: 1.5rem;
        }

        @media (max-width: 640px) {
          .telemetry-top-left {
            top: 0.8rem;
            left: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
          .telemetry-bottom-right {
            bottom: 0.8rem;
            right: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
        }

        .telemetry-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: var(--color-sage-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-teal);
        }

        .telemetry-content {
          display: flex;
          flex-direction: column;
        }

        .telemetry-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-sage);
        }

        .telemetry-val {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--color-charcoal);
        }

        .telemetry-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-gold);
          box-shadow: 0 0 0 4px rgba(198, 161, 91, 0.25);
          animation: pulse-ring 2s infinite;
        }

        .waypoint-pin {
          position: absolute;
          top: 35%;
          left: 48%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .waypoint-pin {
            display: none;
          }
        }

        .pin-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(198, 161, 91, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--color-gold);
        }

        .pin-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--color-gold);
        }

        .pin-tag {
          background: rgba(15, 76, 76, 0.88);
          color: var(--color-white);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .indicators-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 1024px) {
          .indicators-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 580px) {
          .indicators-grid {
            grid-template-columns: 1fr;
          }
        }

        .indicator-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.35rem;
          border-radius: var(--radius-lg);
          border-left: 3px solid var(--color-sage);
        }

        .indicator-card:nth-child(2) {
          border-left-color: var(--color-gold);
        }

        .indicator-card:nth-child(4) {
          border-left-color: var(--color-teal);
        }

        .indicator-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .indicator-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--color-ivory);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .indicator-title {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-light);
          margin-bottom: 0.2rem;
        }

        .indicator-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-teal);
          margin-bottom: 0.25rem;
        }

        .indicator-detail {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
          line-height: 1.4;
        }
      `})]})}const ET=[{id:"guwahati",name:"Guwahati",state:"Assam",lat:26.1445,lng:91.7362},{id:"shillong",name:"Shillong",state:"Meghalaya",lat:25.5788,lng:91.8933},{id:"tawang",name:"Tawang",state:"Arunachal Pradesh",lat:27.5861,lng:91.8594},{id:"kohima",name:"Kohima",state:"Nagaland",lat:25.6751,lng:94.1086},{id:"gangtok",name:"Gangtok",state:"Sikkim",lat:27.3389,lng:88.6065},{id:"imphal",name:"Imphal",state:"Manipur",lat:24.817,lng:93.9368},{id:"agartala",name:"Agartala",state:"Tripura",lat:23.8315,lng:91.2868},{id:"aizawl",name:"Aizawl",state:"Mizoram",lat:23.7271,lng:92.7176}],MT={0:{label:"Clear Sky",icon:"Sun",risk:"LOW"},1:{label:"Mainly Clear",icon:"Sun",risk:"LOW"},2:{label:"Partly Cloudy",icon:"CloudSun",risk:"LOW"},3:{label:"Overcast",icon:"Cloud",risk:"LOW"},45:{label:"Foggy Mist",icon:"CloudFog",risk:"MODERATE"},48:{label:"Depositing Rime Fog",icon:"CloudFog",risk:"HIGH"},51:{label:"Light Drizzle",icon:"CloudDrizzle",risk:"LOW"},53:{label:"Moderate Drizzle",icon:"CloudDrizzle",risk:"MODERATE"},55:{label:"Dense Drizzle",icon:"CloudRain",risk:"HIGH"},61:{label:"Slight Rain",icon:"CloudRain",risk:"MODERATE"},63:{label:"Moderate Rain",icon:"CloudRain",risk:"HIGH"},65:{label:"Heavy Torrential Rain",icon:"CloudRainWind",risk:"CRITICAL"},71:{label:"Slight Snowfall",icon:"Snowflake",risk:"HIGH"},73:{label:"Moderate Snowfall",icon:"Snowflake",risk:"CRITICAL"},75:{label:"Heavy Snowfall",icon:"Snowflake",risk:"CRITICAL"},80:{label:"Rain Showers",icon:"CloudRain",risk:"MODERATE"},81:{label:"Violent Rain Showers",icon:"CloudRainWind",risk:"CRITICAL"},95:{label:"Thunderstorm",icon:"CloudLightning",risk:"CRITICAL"},96:{label:"Thunderstorm with Hail",icon:"CloudLightning",risk:"CRITICAL"}};async function jT(e,t){try{const n=`https://api.open-meteo.com/v1/forecast?latitude=${e}&longitude=${t}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`,r=await fetch(n);if(!r.ok)throw new Error(`Weather API error: ${r.status}`);const a=(await r.json()).current,u=MT[a.weather_code]||{label:"Variable Weather",risk:"MODERATE",icon:"Cloud"};return{success:!0,temp:Math.round(a.temperature_2m),apparentTemp:Math.round(a.apparent_temperature),humidity:a.relative_humidity_2m,precipitation:a.precipitation,windSpeed:Math.round(a.wind_speed_10m),weatherCode:a.weather_code,condition:u.label,riskLevel:u.risk,source:"Open-Meteo Real-Time Satellite"}}catch(n){return console.warn("Live weather fetch failed, using fallback estimate:",n),{success:!1,temp:21,apparentTemp:22,humidity:78,precipitation:4.2,windSpeed:14,weatherCode:61,condition:"Monsoon Showers",riskLevel:"MODERATE",source:"SafarNama Weather Model (Cached)"}}}async function AT(){return await Promise.all(ET.map(async t=>{const n=await jT(t.lat,t.lng);return{...t,weather:n}}))}function T_(){const[e,t]=M.useState([]),[n,r]=M.useState(!0),[o,a]=M.useState(null),u=async()=>{r(!0);const f=await AT();t(f),a(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),r(!1)};M.useEffect(()=>{u()},[]);const c=f=>{switch(f){case"CRITICAL":return h.jsx("span",{className:"badge badge-critical",children:"Critical Hazard"});case"HIGH":return h.jsx("span",{className:"badge badge-high",children:"High Moisture"});case"MODERATE":return h.jsx("span",{className:"badge badge-moderate",children:"Moderate Rain"});default:return h.jsx("span",{className:"badge badge-safe",children:"Favorable"})}};return h.jsxs("div",{className:"weather-widget-card card",children:[h.jsxs("div",{className:"weather-widget-header",children:[h.jsxs("div",{className:"header-left",children:[h.jsx("div",{className:"weather-icon-badge",children:h.jsx(Wa,{size:18})}),h.jsxs("div",{children:[h.jsx("h3",{className:"widget-title",children:"NER Live Monsoon & Weather Telemetry"}),h.jsx("p",{className:"widget-sub",children:"Direct Open-Meteo Satellite & Precipitation Index across regional gateways"})]})]}),h.jsxs("div",{className:"header-right",children:[o&&h.jsxs("span",{className:"updated-timestamp",children:["Updated: ",o]}),h.jsx("button",{className:`btn-refresh ${n?"spinning":""}`,onClick:u,title:"Refresh Live Weather",disabled:n,children:h.jsx(Ga,{size:15})})]})]}),n&&e.length===0?h.jsxs("div",{className:"weather-skeleton",children:[h.jsx("div",{className:"spinner"}),h.jsx("span",{children:"Synchronizing with Open-Meteo satellites..."})]}):h.jsx("div",{className:"weather-cards-scroll",children:e.map(f=>{const p=f.weather||{};return h.jsxs("div",{className:"city-weather-pill",children:[h.jsxs("div",{className:"pill-head",children:[h.jsxs("div",{children:[h.jsx("span",{className:"city-name",children:f.name}),h.jsx("span",{className:"city-state",children:f.state})]}),c(p.riskLevel)]}),h.jsxs("div",{className:"temp-row",children:[h.jsxs("span",{className:"temp-val font-serif",children:[p.temp,"°C"]}),h.jsx("span",{className:"condition-text",children:p.condition})]}),h.jsxs("div",{className:"weather-meta",children:[h.jsxs("div",{className:"meta-item",title:"Relative Humidity",children:[h.jsx(US,{size:12}),h.jsxs("span",{children:[p.humidity,"%"]})]}),h.jsxs("div",{className:"meta-item",title:"Precipitation",children:[h.jsx(Wa,{size:12}),h.jsxs("span",{children:[p.precipitation," mm"]})]}),h.jsxs("div",{className:"meta-item",title:"Wind Velocity",children:[h.jsx(QS,{size:12}),h.jsxs("span",{children:[p.windSpeed," km/h"]})]})]})]},f.id)})}),h.jsxs("div",{className:"weather-widget-footer",children:[h.jsx("span",{className:"source-tag",children:"Source: Open-Meteo High-Resolution Numerical Weather Models"}),h.jsx("span",{className:"disclaimer-tag",children:"Real-time API integration"})]}),h.jsx("style",{children:`
        .weather-widget-card {
          padding: 1.5rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .weather-widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .weather-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--status-safe-soft);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .widget-title {
          font-size: 1.15rem;
          color: var(--color-teal);
          margin-bottom: 2px;
        }

        .widget-sub {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .updated-timestamp {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          font-weight: 600;
        }

        .btn-refresh {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-ivory);
          color: var(--color-teal);
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .btn-refresh:hover {
          background: var(--color-teal);
          color: var(--color-white);
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .weather-skeleton {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 2.5rem;
          color: var(--color-charcoal-light);
          font-size: 0.9rem;
        }

        .weather-cards-scroll {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        @media (max-width: 1100px) {
          .weather-cards-scroll {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .weather-cards-scroll {
            grid-template-columns: 1fr;
          }
        }

        .city-weather-pill {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: all 0.2s ease;
        }

        .city-weather-pill:hover {
          background: var(--color-white);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-teal);
        }

        .pill-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .city-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--color-charcoal);
          display: block;
        }

        .city-state {
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
        }

        .temp-row {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
        }

        .temp-val {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .condition-text {
          font-size: 0.8rem;
          color: var(--color-charcoal-muted);
          font-weight: 500;
        }

        .weather-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.1);
          font-size: 0.74rem;
          color: var(--color-charcoal-muted);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .weather-widget-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .disclaimer-tag {
          font-weight: 600;
          color: var(--color-sage);
        }
      `})]})}function _g(){const e=[{icon:th,title:"Himalayan Terrain AI",desc:"Synthetic Aperture Radar (SAR) slope gradient modeling detecting early soil creep before catastrophic landslides occur."},{icon:Wa,title:"Monsoon Meteorological Mesh",desc:"Hyper-local rainfall rate ingestion via Open-Meteo numerical weather forecasts, anticipating flash floods along vulnerable river basins."},{icon:kr,title:"Disruption-Resilient Rerouting",desc:"Dynamic corridor analysis generating safe bypasses that avoid high-altitude blockage bottlenecks while preserving freight transit velocity."},{icon:YS,title:"Computer Vision Incident Ingestion",desc:"Instant damage severity classification from field patrol and driver uploads with automated road clearance time predictions."}],t=[{title:"Siliguri 'Chicken's Neck' Chokepoint",stat:"22 km Width",desc:"The sole overland arterial connecting mainland India to all 8 Northeast states, creating severe compounding delays during disruptions."},{title:"Sela Pass Alpine Vulnerability",stat:"13,700 ft",desc:"Sub-zero freezes, snowdrifts, and steep scree slopes along NH-13 frequently sever access to Western Arunachal Pradesh."},{title:"Brahmaputra Flood Plain Inundation",stat:"4,000+ mm Rain",desc:"Annual monsoon surges flood crucial culverts along NH-27 and NH-37, isolating vital agro and petroleum supply chains."}];return h.jsxs("div",{className:"page-home",children:[h.jsx(NT,{}),h.jsx("section",{className:"section-challenges",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("span",{className:"section-tag",children:"Logistics Geography"}),h.jsx("h2",{className:"section-title",children:"The North Eastern Logistics Landscape"}),h.jsx("p",{className:"section-subtitle",children:"Stretching across 262,000 km² of rugged mountain ranges and river basins, the North Eastern Region faces unique transit vulnerabilities that conventional supply chain tools fail to solve."})]}),h.jsx("div",{className:"challenges-grid",children:t.map((n,r)=>h.jsxs(Je.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:r*.1},className:"challenge-card card",children:[h.jsx("div",{className:"challenge-stat-box font-serif",children:n.stat}),h.jsx("h3",{className:"challenge-title",children:n.title}),h.jsx("p",{className:"challenge-desc",children:n.desc})]},r))})]})}),h.jsx("section",{className:"section-pillars",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"section-header",children:[h.jsx("span",{className:"section-tag",children:"Proprietary Technology"}),h.jsx("h2",{className:"section-title",children:"Engineered for Extreme Terrains"}),h.jsx("p",{className:"section-subtitle",children:"SafarNama fuses multi-modal remote sensing, meteorological forecasting, and road infrastructure telemetry into a unified operational command system."})]}),h.jsx("div",{className:"pillars-grid",children:e.map((n,r)=>{const o=n.icon;return h.jsxs("div",{className:"pillar-card card",children:[h.jsx("div",{className:"pillar-icon-box",children:h.jsx(o,{size:22})}),h.jsx("h3",{className:"pillar-title font-serif",children:n.title}),h.jsx("p",{className:"pillar-desc",children:n.desc})]},r)})})]})}),h.jsx("section",{className:"section-weather-live",children:h.jsx("div",{className:"container",children:h.jsx(T_,{})})}),h.jsx("section",{className:"section-cta",children:h.jsx("div",{className:"container",children:h.jsx("div",{className:"cta-card card",children:h.jsxs("div",{className:"cta-content",children:[h.jsx("span",{className:"cta-badge",children:"EXPERIENCE SAFARNAMA"}),h.jsx("h2",{className:"cta-title font-serif",children:"Ready to navigate NER logistics with AI foresight?"}),h.jsx("p",{className:"cta-desc",children:"Explore our live disruption intelligence dashboard or run dynamic route optimization between Guwahati and Tawang."}),h.jsxs("div",{className:"cta-buttons",children:[h.jsxs(_t,{to:"/dashboard",className:"btn btn-primary btn-lg",children:[h.jsx("span",{children:"Open Intelligence Dashboard"}),h.jsx(Ti,{size:18})]}),h.jsxs(_t,{to:"/route-ai",className:"btn btn-secondary btn-lg",children:[h.jsx("span",{children:"Run Route AI Simulation"}),h.jsx(Ti,{size:18})]})]})]})})})}),h.jsx("style",{children:`
        .page-home {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-challenges {
          padding: 3.5rem 0;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .challenges-grid {
            grid-template-columns: 1fr;
          }
        }

        .challenge-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: var(--color-white);
          border-left: 3px solid var(--color-gold);
        }

        .challenge-stat-box {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
        }

        .challenge-title {
          font-size: 1.15rem;
          color: var(--color-charcoal);
        }

        .challenge-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
        }

        .section-pillars {
          padding: 3.5rem 0;
          background: rgba(111, 143, 114, 0.05);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--color-white);
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--status-safe-soft);
          color: var(--color-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-title {
          font-size: 1.2rem;
          color: var(--color-teal);
        }

        .pillar-desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          line-height: 1.6;
        }

        .section-weather-live {
          padding: 1.5rem 0 3rem 0;
        }

        .section-cta {
          padding: 2rem 0 4rem 0;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 100%);
          color: var(--color-white);
          padding: 4rem 2.5rem;
          border-radius: var(--radius-xl);
          text-align: center;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .cta-content {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .cta-badge {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-gold);
          background: rgba(198, 161, 91, 0.18);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-full);
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-white);
          line-height: 1.15;
        }

        .cta-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 600px;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .cta-buttons .btn-secondary {
          background: rgba(255, 255, 255, 0.12);
          color: var(--color-white);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-buttons .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--color-white);
        }
      `})]})}function ia({label:e,value:t,subtext:n,trend:r,icon:o,color:a="teal",delay:u=0}){const c={teal:{bg:"rgba(15, 76, 76, 0.08)",text:"var(--color-teal)",border:"var(--color-teal)"},gold:{bg:"rgba(198, 161, 91, 0.12)",text:"#A6802E",border:"var(--color-gold)"},red:{bg:"rgba(220, 38, 38, 0.08)",text:"var(--status-critical)",border:"var(--status-critical)"},sage:{bg:"rgba(111, 143, 114, 0.12)",text:"var(--color-sage)",border:"var(--color-sage)"}},f=c[a]||c.teal;return h.jsxs(Je.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.5,delay:u},className:"stat-card card",children:[h.jsxs("div",{className:"stat-card-header",children:[h.jsx("span",{className:"stat-label",children:e}),o&&h.jsx("div",{className:"stat-icon-wrapper",style:{background:f.bg,color:f.text},children:h.jsx(o,{size:18})})]}),h.jsx("div",{className:"stat-value-block",children:h.jsx("span",{className:"stat-value font-serif",style:{color:f.text},children:t})}),h.jsxs("div",{className:"stat-footer",children:[r&&h.jsx("span",{className:"stat-trend",style:{color:f.text},children:r}),h.jsx("span",{className:"stat-subtext",children:n})]}),h.jsx("style",{children:`
        .stat-card {
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.75rem;
          background: var(--color-white);
          border: 1px solid var(--color-border-subtle);
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${f.border};
          opacity: 0.7;
        }

        .stat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .stat-label {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-charcoal-muted);
        }

        .stat-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value-block {
          margin: 0.25rem 0;
        }

        .stat-value {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .stat-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--color-charcoal-light);
          flex-wrap: wrap;
        }

        .stat-trend {
          font-weight: 700;
          background: ${f.bg};
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
        }

        .stat-subtext {
          font-weight: 500;
        }
      `})]})}function L_(e,t){const n=M.useRef(t);M.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const RT=1;function zT(e){return Object.freeze({__version:RT,map:e})}function N_(e,t){return Object.freeze({...e,...t})}const E_=M.createContext(null),M_=E_.Provider;function ls(){const e=M.useContext(E_);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function j_(e){function t(n,r){const{instance:o,context:a}=e(n).current;return M.useImperativeHandle(r,()=>o),n.children==null?null:gr.createElement(M_,{value:a},n.children)}return M.forwardRef(t)}function IT(e){function t(n,r){const[o,a]=M.useState(!1),{instance:u}=e(n,a).current;M.useImperativeHandle(r,()=>u),M.useEffect(function(){o&&u.update()},[u,o,n.children]);const c=u._contentNode;return c?Ry.createPortal(n.children,c):null}return M.forwardRef(t)}function A_(e){function t(n,r){const{instance:o}=e(n).current;return M.useImperativeHandle(r,()=>o),null}return M.forwardRef(t)}function OT(e){return function(n){const r=ls(),o=e(n,r),{instance:a}=o.current,u=M.useRef(n.position),{position:c}=n;return M.useEffect(function(){return a.addTo(r.map),function(){a.remove()}},[r.map,a]),M.useEffect(function(){c!=null&&c!==u.current&&(a.setPosition(c),u.current=c)},[a,c]),o}}function Oh(e,t){const n=M.useRef();M.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Pl(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function DT(e,t){return function(r,o){const a=ls(),u=e(Pl(r,a),a);return L_(a.map,r.attribution),Oh(u.current,r.eventHandlers),t(u.current,a,r,o),u}}var nd={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(a1,function(n){var r="1.9.4";function o(i){var s,l,d,m;for(l=1,d=arguments.length;l<d;l++){m=arguments[l];for(s in m)i[s]=m[s]}return i}var a=Object.create||function(){function i(){}return function(s){return i.prototype=s,new i}}();function u(i,s){var l=Array.prototype.slice;if(i.bind)return i.bind.apply(i,l.call(arguments,1));var d=l.call(arguments,2);return function(){return i.apply(s,d.length?d.concat(l.call(arguments)):arguments)}}var c=0;function f(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function p(i,s,l){var d,m,y,T;return T=function(){d=!1,m&&(y.apply(l,m),m=!1)},y=function(){d?m=arguments:(i.apply(l,arguments),setTimeout(T,s),d=!0)},y}function g(i,s,l){var d=s[1],m=s[0],y=d-m;return i===d&&l?i:((i-m)%y+y)%y+m}function v(){return!1}function _(i,s){if(s===!1)return i;var l=Math.pow(10,s===void 0?6:s);return Math.round(i*l)/l}function b(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function E(i){return b(i).split(/\s+/)}function k(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var l in s)i.options[l]=s[l];return i.options}function N(i,s,l){var d=[];for(var m in i)d.push(encodeURIComponent(l?m.toUpperCase():m)+"="+encodeURIComponent(i[m]));return(!s||s.indexOf("?")===-1?"?":"&")+d.join("&")}var w=/\{ *([\w_ -]+) *\}/g;function x(i,s){return i.replace(w,function(l,d){var m=s[d];if(m===void 0)throw new Error("No value provided for variable "+l);return typeof m=="function"&&(m=m(s)),m})}var S=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function A(i,s){for(var l=0;l<i.length;l++)if(i[l]===s)return l;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function B(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var V=0;function D(i){var s=+new Date,l=Math.max(0,16-(s-V));return V=s+l,window.setTimeout(i,l)}var ne=window.requestAnimationFrame||B("RequestAnimationFrame")||D,X=window.cancelAnimationFrame||B("CancelAnimationFrame")||B("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function ae(i,s,l){if(l&&ne===D)i.call(s);else return ne.call(window,u(i,s))}function be(i){i&&X.call(window,i)}var pt={__proto__:null,extend:o,create:a,bind:u,get lastId(){return c},stamp:f,throttle:p,wrapNum:g,falseFn:v,formatNum:_,trim:b,splitWords:E,setOptions:k,getParamString:N,template:x,isArray:S,indexOf:A,emptyImageUrl:z,requestFn:ne,cancelFn:X,requestAnimFrame:ae,cancelAnimFrame:be};function Q(){}Q.extend=function(i){var s=function(){k(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=s.__super__=this.prototype,d=a(l);d.constructor=s,s.prototype=d;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(s[m]=this[m]);return i.statics&&o(s,i.statics),i.includes&&(Be(i.includes),o.apply(null,[d].concat(i.includes))),o(d,i),delete d.statics,delete d.includes,d.options&&(d.options=l.options?a(l.options):{},o(d.options,i.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var y=0,T=d._initHooks.length;y<T;y++)d._initHooks[y].call(this)}},s},Q.include=function(i){var s=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=s,this.mergeOptions(i.options)),this},Q.mergeOptions=function(i){return o(this.prototype.options,i),this},Q.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),l=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function Be(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=S(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var me={on:function(i,s,l){if(typeof i=="object")for(var d in i)this._on(d,i[d],s);else{i=E(i);for(var m=0,y=i.length;m<y;m++)this._on(i[m],s,l)}return this},off:function(i,s,l){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var d in i)this._off(d,i[d],s);else{i=E(i);for(var m=arguments.length===1,y=0,T=i.length;y<T;y++)m?this._off(i[y]):this._off(i[y],s,l)}return this},_on:function(i,s,l,d){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(i,s,l)===!1){l===this&&(l=void 0);var m={fn:s,ctx:l};d&&(m.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(m)}},_off:function(i,s,l){var d,m,y;if(this._events&&(d=this._events[i],!!d)){if(arguments.length===1){if(this._firingCount)for(m=0,y=d.length;m<y;m++)d[m].fn=v;delete this._events[i];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var T=this._listens(i,s,l);if(T!==!1){var j=d[T];this._firingCount&&(j.fn=v,this._events[i]=d=d.slice()),d.splice(T,1)}}},fire:function(i,s,l){if(!this.listens(i,l))return this;var d=o({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var m=this._events[i];if(m){this._firingCount=this._firingCount+1||1;for(var y=0,T=m.length;y<T;y++){var j=m[y],R=j.fn;j.once&&this.off(i,R,j.ctx),R.call(j.ctx||this,d)}this._firingCount--}}return l&&this._propagateEvent(d),this},listens:function(i,s,l,d){typeof i!="string"&&console.warn('"string" type argument expected');var m=s;typeof s!="function"&&(d=!!s,m=void 0,l=void 0);var y=this._events&&this._events[i];if(y&&y.length&&this._listens(i,m,l)!==!1)return!0;if(d){for(var T in this._eventParents)if(this._eventParents[T].listens(i,s,l,d))return!0}return!1},_listens:function(i,s,l){if(!this._events)return!1;var d=this._events[i]||[];if(!s)return!!d.length;l===this&&(l=void 0);for(var m=0,y=d.length;m<y;m++)if(d[m].fn===s&&d[m].ctx===l)return m;return!1},once:function(i,s,l){if(typeof i=="object")for(var d in i)this._on(d,i[d],s,!0);else{i=E(i);for(var m=0,y=i.length;m<y;m++)this._on(i[m],s,l,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[f(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[f(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};me.addEventListener=me.on,me.removeEventListener=me.clearAllEventListeners=me.off,me.addOneTimeEventListener=me.once,me.fireEvent=me.fire,me.hasEventListeners=me.listens;var he=Q.extend(me);function I(i,s,l){this.x=l?Math.round(i):i,this.y=l?Math.round(s):s}var J=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};I.prototype={clone:function(){return new I(this.x,this.y)},add:function(i){return this.clone()._add(P(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(P(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new I(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new I(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=J(this.x),this.y=J(this.y),this},distanceTo:function(i){i=P(i);var s=i.x-this.x,l=i.y-this.y;return Math.sqrt(s*s+l*l)},equals:function(i){return i=P(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=P(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function P(i,s,l){return i instanceof I?i:S(i)?new I(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new I(i.x,i.y):new I(i,s,l)}function C(i,s){if(i)for(var l=s?[i,s]:i,d=0,m=l.length;d<m;d++)this.extend(l[d])}C.prototype={extend:function(i){var s,l;if(!i)return this;if(i instanceof I||typeof i[0]=="number"||"x"in i)s=l=P(i);else if(i=H(i),s=i.min,l=i.max,!s||!l)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=l.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(i){return P((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return P(this.min.x,this.max.y)},getTopRight:function(){return P(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,l;return typeof i[0]=="number"||i instanceof I?i=P(i):i=H(i),i instanceof C?(s=i.min,l=i.max):s=l=i,s.x>=this.min.x&&l.x<=this.max.x&&s.y>=this.min.y&&l.y<=this.max.y},intersects:function(i){i=H(i);var s=this.min,l=this.max,d=i.min,m=i.max,y=m.x>=s.x&&d.x<=l.x,T=m.y>=s.y&&d.y<=l.y;return y&&T},overlaps:function(i){i=H(i);var s=this.min,l=this.max,d=i.min,m=i.max,y=m.x>s.x&&d.x<l.x,T=m.y>s.y&&d.y<l.y;return y&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var s=this.min,l=this.max,d=Math.abs(s.x-l.x)*i,m=Math.abs(s.y-l.y)*i;return H(P(s.x-d,s.y-m),P(l.x+d,l.y+m))},equals:function(i){return i?(i=H(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function H(i,s){return!i||i instanceof C?i:new C(i,s)}function K(i,s){if(i)for(var l=s?[i,s]:i,d=0,m=l.length;d<m;d++)this.extend(l[d])}K.prototype={extend:function(i){var s=this._southWest,l=this._northEast,d,m;if(i instanceof Z)d=i,m=i;else if(i instanceof K){if(d=i._southWest,m=i._northEast,!d||!m)return this}else return i?this.extend(U(i)||$(i)):this;return!s&&!l?(this._southWest=new Z(d.lat,d.lng),this._northEast=new Z(m.lat,m.lng)):(s.lat=Math.min(d.lat,s.lat),s.lng=Math.min(d.lng,s.lng),l.lat=Math.max(m.lat,l.lat),l.lng=Math.max(m.lng,l.lng)),this},pad:function(i){var s=this._southWest,l=this._northEast,d=Math.abs(s.lat-l.lat)*i,m=Math.abs(s.lng-l.lng)*i;return new K(new Z(s.lat-d,s.lng-m),new Z(l.lat+d,l.lng+m))},getCenter:function(){return new Z((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Z(this.getNorth(),this.getWest())},getSouthEast:function(){return new Z(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof Z||"lat"in i?i=U(i):i=$(i);var s=this._southWest,l=this._northEast,d,m;return i instanceof K?(d=i.getSouthWest(),m=i.getNorthEast()):d=m=i,d.lat>=s.lat&&m.lat<=l.lat&&d.lng>=s.lng&&m.lng<=l.lng},intersects:function(i){i=$(i);var s=this._southWest,l=this._northEast,d=i.getSouthWest(),m=i.getNorthEast(),y=m.lat>=s.lat&&d.lat<=l.lat,T=m.lng>=s.lng&&d.lng<=l.lng;return y&&T},overlaps:function(i){i=$(i);var s=this._southWest,l=this._northEast,d=i.getSouthWest(),m=i.getNorthEast(),y=m.lat>s.lat&&d.lat<l.lat,T=m.lng>s.lng&&d.lng<l.lng;return y&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=$(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function $(i,s){return i instanceof K?i:new K(i,s)}function Z(i,s,l){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,l!==void 0&&(this.alt=+l)}Z.prototype={equals:function(i,s){if(!i)return!1;i=U(i);var l=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return l<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return ie.distance(this,U(i))},wrap:function(){return ie.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,l=s/Math.cos(Math.PI/180*this.lat);return $([this.lat-s,this.lng-l],[this.lat+s,this.lng+l])},clone:function(){return new Z(this.lat,this.lng,this.alt)}};function U(i,s,l){return i instanceof Z?i:S(i)&&typeof i[0]!="object"?i.length===3?new Z(i[0],i[1],i[2]):i.length===2?new Z(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new Z(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new Z(i,s,l)}var q={latLngToPoint:function(i,s){var l=this.projection.project(i),d=this.scale(s);return this.transformation._transform(l,d)},pointToLatLng:function(i,s){var l=this.scale(s),d=this.transformation.untransform(i,l);return this.projection.unproject(d)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,l=this.scale(i),d=this.transformation.transform(s.min,l),m=this.transformation.transform(s.max,l);return new C(d,m)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?g(i.lng,this.wrapLng,!0):i.lng,l=this.wrapLat?g(i.lat,this.wrapLat,!0):i.lat,d=i.alt;return new Z(l,s,d)},wrapLatLngBounds:function(i){var s=i.getCenter(),l=this.wrapLatLng(s),d=s.lat-l.lat,m=s.lng-l.lng;if(d===0&&m===0)return i;var y=i.getSouthWest(),T=i.getNorthEast(),j=new Z(y.lat-d,y.lng-m),R=new Z(T.lat-d,T.lng-m);return new K(j,R)}},ie=o({},q,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var l=Math.PI/180,d=i.lat*l,m=s.lat*l,y=Math.sin((s.lat-i.lat)*l/2),T=Math.sin((s.lng-i.lng)*l/2),j=y*y+Math.cos(d)*Math.cos(m)*T*T,R=2*Math.atan2(Math.sqrt(j),Math.sqrt(1-j));return this.R*R}}),ge=6378137,xe={R:ge,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,l=this.MAX_LATITUDE,d=Math.max(Math.min(l,i.lat),-l),m=Math.sin(d*s);return new I(this.R*i.lng*s,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(i){var s=180/Math.PI;return new Z((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:function(){var i=ge*Math.PI;return new C([-i,-i],[i,i])}()};function ve(i,s,l,d){if(S(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=l,this._d=d}ve.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new I((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function _e(i,s,l,d){return new ve(i,s,l,d)}var ze=o({},ie,{code:"EPSG:3857",projection:xe,transformation:function(){var i=.5/(Math.PI*xe.R);return _e(i,.5,-i,.5)}()}),ue=o({},ze,{code:"EPSG:900913"});function qe(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function mt(i,s){var l="",d,m,y,T,j,R;for(d=0,y=i.length;d<y;d++){for(j=i[d],m=0,T=j.length;m<T;m++)R=j[m],l+=(m?"L":"M")+R.x+" "+R.y;l+=s?Y.svg?"z":"x":""}return l||"M0 0"}var lt=document.documentElement.style,gt="ActiveXObject"in window,hn=gt&&!document.addEventListener,kt="msLaunchUri"in navigator&&!("documentMode"in document),Ir=en("webkit"),ds=en("android"),hs=en("android 2")||en("android 3"),fs=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Tl=ds&&en("Google")&&fs<537&&!("AudioNode"in window),Ri=!!window.opera,ps=!kt&&en("chrome"),ms=en("gecko")&&!Ir&&!Ri&&!gt,gs=!ps&&en("safari"),Or=en("phantom"),zi="OTransition"in lt,Ll=navigator.platform.indexOf("Win")===0,vs=gt&&"transition"in lt,Nl="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!hs,Bh="MozPerspective"in lt,H_=!window.L_DISABLE_3D&&(vs||Nl||Bh)&&!zi&&!Or,Dr=typeof orientation<"u"||en("mobile"),U_=Dr&&Ir,Z_=Dr&&Nl,Fh=!window.PointerEvent&&window.MSPointerEvent,Vh=!!(window.PointerEvent||Fh),Hh="ontouchstart"in window||!!window.TouchEvent,W_=!window.L_NO_TOUCH&&(Hh||Vh),$_=Dr&&Ri,G_=Dr&&ms,K_=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,q_=function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",v,s),window.removeEventListener("testPassiveEventSupport",v,s)}catch{}return i}(),Y_=function(){return!!document.createElement("canvas").getContext}(),El=!!(document.createElementNS&&qe("svg").createSVGRect),X_=!!El&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Q_=!El&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),J_=navigator.platform.indexOf("Mac")===0,ex=navigator.platform.indexOf("Linux")===0;function en(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Y={ie:gt,ielt9:hn,edge:kt,webkit:Ir,android:ds,android23:hs,androidStock:Tl,opera:Ri,chrome:ps,gecko:ms,safari:gs,phantom:Or,opera12:zi,win:Ll,ie3d:vs,webkit3d:Nl,gecko3d:Bh,any3d:H_,mobile:Dr,mobileWebkit:U_,mobileWebkit3d:Z_,msPointer:Fh,pointer:Vh,touch:W_,touchNative:Hh,mobileOpera:$_,mobileGecko:G_,retina:K_,passiveEvents:q_,canvas:Y_,svg:El,vml:Q_,inlineSvg:X_,mac:J_,linux:ex},Uh=Y.msPointer?"MSPointerDown":"pointerdown",Zh=Y.msPointer?"MSPointerMove":"pointermove",Wh=Y.msPointer?"MSPointerUp":"pointerup",$h=Y.msPointer?"MSPointerCancel":"pointercancel",Ml={touchstart:Uh,touchmove:Zh,touchend:Wh,touchcancel:$h},Gh={touchstart:sx,touchmove:ys,touchend:ys,touchcancel:ys},Ii={},Kh=!1;function tx(i,s,l){return s==="touchstart"&&ox(),Gh[s]?(l=Gh[s].bind(this,l),i.addEventListener(Ml[s],l,!1),l):(console.warn("wrong event specified:",s),v)}function nx(i,s,l){if(!Ml[s]){console.warn("wrong event specified:",s);return}i.removeEventListener(Ml[s],l,!1)}function ix(i){Ii[i.pointerId]=i}function rx(i){Ii[i.pointerId]&&(Ii[i.pointerId]=i)}function qh(i){delete Ii[i.pointerId]}function ox(){Kh||(document.addEventListener(Uh,ix,!0),document.addEventListener(Zh,rx,!0),document.addEventListener(Wh,qh,!0),document.addEventListener($h,qh,!0),Kh=!0)}function ys(i,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var l in Ii)s.touches.push(Ii[l]);s.changedTouches=[s],i(s)}}function sx(i,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Ye(s),ys(i,s)}function ax(i){var s={},l,d;for(d in i)l=i[d],s[d]=l&&l.bind?l.bind(i):l;return i=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var lx=200;function ux(i,s){i.addEventListener("dblclick",s);var l=0,d;function m(y){if(y.detail!==1){d=y.detail;return}if(!(y.pointerType==="mouse"||y.sourceCapabilities&&!y.sourceCapabilities.firesTouchEvents)){var T=ef(y);if(!(T.some(function(R){return R instanceof HTMLLabelElement&&R.attributes.for})&&!T.some(function(R){return R instanceof HTMLInputElement||R instanceof HTMLSelectElement}))){var j=Date.now();j-l<=lx?(d++,d===2&&s(ax(y))):d=1,l=j}}}return i.addEventListener("click",m),{dblclick:s,simDblclick:m}}function cx(i,s){i.removeEventListener("dblclick",s.dblclick),i.removeEventListener("click",s.simDblclick)}var jl=ws(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Br=ws(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Yh=Br==="webkitTransition"||Br==="OTransition"?Br+"End":"transitionend";function Xh(i){return typeof i=="string"?document.getElementById(i):i}function Fr(i,s){var l=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!l||l==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(i,null);l=d?d[s]:null}return l==="auto"?null:l}function fe(i,s,l){var d=document.createElement(i);return d.className=s||"",l&&l.appendChild(d),d}function Le(i){var s=i.parentNode;s&&s.removeChild(i)}function _s(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Oi(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function Di(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function Al(i,s){if(i.classList!==void 0)return i.classList.contains(s);var l=xs(i);return l.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(l)}function oe(i,s){if(i.classList!==void 0)for(var l=E(s),d=0,m=l.length;d<m;d++)i.classList.add(l[d]);else if(!Al(i,s)){var y=xs(i);Rl(i,(y?y+" ":"")+s)}}function Ie(i,s){i.classList!==void 0?i.classList.remove(s):Rl(i,b((" "+xs(i)+" ").replace(" "+s+" "," ")))}function Rl(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function xs(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function At(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&dx(i,s)}function dx(i,s){var l=!1,d="DXImageTransform.Microsoft.Alpha";try{l=i.filters.item(d)}catch{if(s===1)return}s=Math.round(s*100),l?(l.Enabled=s!==100,l.Opacity=s):i.style.filter+=" progid:"+d+"(opacity="+s+")"}function ws(i){for(var s=document.documentElement.style,l=0;l<i.length;l++)if(i[l]in s)return i[l];return!1}function ri(i,s,l){var d=s||new I(0,0);i.style[jl]=(Y.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(l?" scale("+l+")":"")}function Fe(i,s){i._leaflet_pos=s,Y.any3d?ri(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function oi(i){return i._leaflet_pos||new I(0,0)}var Vr,Hr,zl;if("onselectstart"in document)Vr=function(){re(window,"selectstart",Ye)},Hr=function(){we(window,"selectstart",Ye)};else{var Ur=ws(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Vr=function(){if(Ur){var i=document.documentElement.style;zl=i[Ur],i[Ur]="none"}},Hr=function(){Ur&&(document.documentElement.style[Ur]=zl,zl=void 0)}}function Il(){re(window,"dragstart",Ye)}function Ol(){we(window,"dragstart",Ye)}var Ss,Dl;function Bl(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(bs(),Ss=i,Dl=i.style.outlineStyle,i.style.outlineStyle="none",re(window,"keydown",bs))}function bs(){Ss&&(Ss.style.outlineStyle=Dl,Ss=void 0,Dl=void 0,we(window,"keydown",bs))}function Qh(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Fl(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var hx={__proto__:null,TRANSFORM:jl,TRANSITION:Br,TRANSITION_END:Yh,get:Xh,getStyle:Fr,create:fe,remove:Le,empty:_s,toFront:Oi,toBack:Di,hasClass:Al,addClass:oe,removeClass:Ie,setClass:Rl,getClass:xs,setOpacity:At,testProp:ws,setTransform:ri,setPosition:Fe,getPosition:oi,get disableTextSelection(){return Vr},get enableTextSelection(){return Hr},disableImageDrag:Il,enableImageDrag:Ol,preventOutline:Bl,restoreOutline:bs,getSizedParentNode:Qh,getScale:Fl};function re(i,s,l,d){if(s&&typeof s=="object")for(var m in s)Hl(i,m,s[m],l);else{s=E(s);for(var y=0,T=s.length;y<T;y++)Hl(i,s[y],l,d)}return this}var tn="_leaflet_events";function we(i,s,l,d){if(arguments.length===1)Jh(i),delete i[tn];else if(s&&typeof s=="object")for(var m in s)Ul(i,m,s[m],l);else if(s=E(s),arguments.length===2)Jh(i,function(j){return A(s,j)!==-1});else for(var y=0,T=s.length;y<T;y++)Ul(i,s[y],l,d);return this}function Jh(i,s){for(var l in i[tn]){var d=l.split(/\d/)[0];(!s||s(d))&&Ul(i,d,null,null,l)}}var Vl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Hl(i,s,l,d){var m=s+f(l)+(d?"_"+f(d):"");if(i[tn]&&i[tn][m])return this;var y=function(j){return l.call(d||i,j||window.event)},T=y;!Y.touchNative&&Y.pointer&&s.indexOf("touch")===0?y=tx(i,s,y):Y.touch&&s==="dblclick"?y=ux(i,y):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(Vl[s]||s,y,Y.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(y=function(j){j=j||window.event,Wl(i,j)&&T(j)},i.addEventListener(Vl[s],y,!1)):i.addEventListener(s,T,!1):i.attachEvent("on"+s,y),i[tn]=i[tn]||{},i[tn][m]=y}function Ul(i,s,l,d,m){m=m||s+f(l)+(d?"_"+f(d):"");var y=i[tn]&&i[tn][m];if(!y)return this;!Y.touchNative&&Y.pointer&&s.indexOf("touch")===0?nx(i,s,y):Y.touch&&s==="dblclick"?cx(i,y):"removeEventListener"in i?i.removeEventListener(Vl[s]||s,y,!1):i.detachEvent("on"+s,y),i[tn][m]=null}function si(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Zl(i){return Hl(i,"wheel",si),this}function Zr(i){return re(i,"mousedown touchstart dblclick contextmenu",si),i._leaflet_disable_click=!0,this}function Ye(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function ai(i){return Ye(i),si(i),this}function ef(i){if(i.composedPath)return i.composedPath();for(var s=[],l=i.target;l;)s.push(l),l=l.parentNode;return s}function tf(i,s){if(!s)return new I(i.clientX,i.clientY);var l=Fl(s),d=l.boundingClientRect;return new I((i.clientX-d.left)/l.x-s.clientLeft,(i.clientY-d.top)/l.y-s.clientTop)}var fx=Y.linux&&Y.chrome?window.devicePixelRatio:Y.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function nf(i){return Y.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/fx:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Wl(i,s){var l=s.relatedTarget;if(!l)return!0;try{for(;l&&l!==i;)l=l.parentNode}catch{return!1}return l!==i}var px={__proto__:null,on:re,off:we,stopPropagation:si,disableScrollPropagation:Zl,disableClickPropagation:Zr,preventDefault:Ye,stop:ai,getPropagationPath:ef,getMousePosition:tf,getWheelDelta:nf,isExternalTarget:Wl,addListener:re,removeListener:we},rf=he.extend({run:function(i,s,l,d){this.stop(),this._el=i,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=oi(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=ae(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,l=this._duration*1e3;s<l?this._runFrame(this._easeOut(s/l),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var l=this._startPos.add(this._offset.multiplyBy(i));s&&l._round(),Fe(this._el,l),this.fire("step")},_complete:function(){be(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),ce=he.extend({options:{crs:ze,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=k(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(U(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Br&&Y.any3d&&!Y.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),re(this._proxy,Yh,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,l){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(U(i),s,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=o({animate:l.animate},l.zoom),l.pan=o({animate:l.animate,duration:l.duration},l.pan));var d=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,l.zoom):this._tryAnimatedPan(i,l.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s,l.pan&&l.pan.noMoveStart),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(Y.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(Y.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,l){var d=this.getZoomScale(s),m=this.getSize().divideBy(2),y=i instanceof I?i:this.latLngToContainerPoint(i),T=y.subtract(m).multiplyBy(1-1/d),j=this.containerPointToLatLng(m.add(T));return this.setView(j,s,{zoom:l})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():$(i);var l=P(s.paddingTopLeft||s.padding||[0,0]),d=P(s.paddingBottomRight||s.padding||[0,0]),m=this.getBoundsZoom(i,!1,l.add(d));if(m=typeof s.maxZoom=="number"?Math.min(s.maxZoom,m):m,m===1/0)return{center:i.getCenter(),zoom:m};var y=d.subtract(l).divideBy(2),T=this.project(i.getSouthWest(),m),j=this.project(i.getNorthEast(),m),R=this.unproject(T.add(j).divideBy(2).add(y),m);return{center:R,zoom:m}},fitBounds:function(i,s){if(i=$(i),!i.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(i,s);return this.setView(l.center,l.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=P(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new rf,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){oe(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,l,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,l){if(l=l||{},l.animate===!1||!Y.any3d)return this.setView(i,s,l);this._stop();var d=this.project(this.getCenter()),m=this.project(i),y=this.getSize(),T=this._zoom;i=U(i),s=s===void 0?T:s;var j=Math.max(y.x,y.y),R=j*this.getZoomScale(T,s),O=m.distanceTo(d)||1,W=1.42,te=W*W;function se(Ve){var zs=Ve?-1:1,n1=Ve?R:j,i1=R*R-j*j+zs*te*te*O*O,r1=2*n1*te*O,nu=i1/r1,Df=Math.sqrt(nu*nu+1)-nu,o1=Df<1e-9?-18:Math.log(Df);return o1}function ut(Ve){return(Math.exp(Ve)-Math.exp(-Ve))/2}function $e(Ve){return(Math.exp(Ve)+Math.exp(-Ve))/2}function zt(Ve){return ut(Ve)/$e(Ve)}var vt=se(0);function Zi(Ve){return j*($e(vt)/$e(vt+W*Ve))}function Qx(Ve){return j*($e(vt)*zt(vt+W*Ve)-ut(vt))/te}function Jx(Ve){return 1-Math.pow(1-Ve,1.5)}var e1=Date.now(),If=(se(1)-vt)/W,t1=l.duration?1e3*l.duration:1e3*If*.8;function Of(){var Ve=(Date.now()-e1)/t1,zs=Jx(Ve)*If;Ve<=1?(this._flyToFrame=ae(Of,this),this._move(this.unproject(d.add(m.subtract(d).multiplyBy(Qx(zs)/O)),T),this.getScaleZoom(j/Zi(zs),T),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Of.call(this),this},flyToBounds:function(i,s){var l=this._getBoundsCenterZoom(i,s);return this.flyTo(l.center,l.zoom,s)},setMaxBounds:function(i){return i=$(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var l=this.getCenter(),d=this._limitCenter(l,this._zoom,$(i));return l.equals(d)||this.panTo(d,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var l=P(s.paddingTopLeft||s.padding||[0,0]),d=P(s.paddingBottomRight||s.padding||[0,0]),m=this.project(this.getCenter()),y=this.project(i),T=this.getPixelBounds(),j=H([T.min.add(l),T.max.subtract(d)]),R=j.getSize();if(!j.contains(y)){this._enforcingBounds=!0;var O=y.subtract(j.getCenter()),W=j.extend(y).getSize().subtract(R);m.x+=O.x<0?-W.x:W.x,m.y+=O.y<0?-W.y:W.y,this.panTo(this.unproject(m),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),d=s.divideBy(2).round(),m=l.divideBy(2).round(),y=d.subtract(m);return!y.x&&!y.y?this:(i.animate&&i.pan?this.panBy(y):(i.pan&&this._rawPanBy(y),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,l,i):navigator.geolocation.getCurrentPosition(s,l,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var s=i.code,l=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var s=i.coords.latitude,l=i.coords.longitude,d=new Z(s,l),m=d.toBounds(i.coords.accuracy*2),y=this._locateOptions;if(y.setView){var T=this.getBoundsZoom(m);this.setView(d,y.maxZoom?Math.min(T,y.maxZoom):T)}var j={latlng:d,bounds:m,timestamp:i.timestamp};for(var R in i.coords)typeof i.coords[R]=="number"&&(j[R]=i.coords[R]);this.fire("locationfound",j)}},addHandler:function(i,s){if(!s)return this;var l=this[i]=new s(this);return this._handlers.push(l),this.options[i]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Le(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(be(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)Le(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var l="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),d=fe("div",l,s||this._mapPane);return i&&(this._panes[i]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),l=this.unproject(i.getTopRight());return new K(s,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,l){i=$(i),l=P(l||[0,0]);var d=this.getZoom()||0,m=this.getMinZoom(),y=this.getMaxZoom(),T=i.getNorthWest(),j=i.getSouthEast(),R=this.getSize().subtract(l),O=H(this.project(j,d),this.project(T,d)).getSize(),W=Y.any3d?this.options.zoomSnap:1,te=R.x/O.x,se=R.y/O.y,ut=s?Math.max(te,se):Math.min(te,se);return d=this.getScaleZoom(ut,d),W&&(d=Math.round(d/(W/100))*(W/100),d=s?Math.ceil(d/W)*W:Math.floor(d/W)*W),Math.max(m,Math.min(y,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new I(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var l=this._getTopLeftPoint(i,s);return new C(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var l=this.options.crs;return s=s===void 0?this._zoom:s,l.scale(i)/l.scale(s)},getScaleZoom:function(i,s){var l=this.options.crs;s=s===void 0?this._zoom:s;var d=l.zoom(i*l.scale(s));return isNaN(d)?1/0:d},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(U(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(P(i),s)},layerPointToLatLng:function(i){var s=P(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(U(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(U(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds($(i))},distance:function(i,s){return this.options.crs.distance(U(i),U(s))},containerPointToLayerPoint:function(i){return P(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return P(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(P(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(U(i)))},mouseEventToContainerPoint:function(i){return tf(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=Xh(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");re(s,"scroll",this._onScroll,this),this._containerId=f(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Y.any3d,oe(i,"leaflet-container"+(Y.touch?" leaflet-touch":"")+(Y.retina?" leaflet-retina":"")+(Y.ielt9?" leaflet-oldie":"")+(Y.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Fr(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Fe(this._mapPane,new I(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(oe(i.markerPane,"leaflet-zoom-hide"),oe(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s,l){Fe(this._mapPane,new I(0,0));var d=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var m=this._zoom!==s;this._moveStart(m,l)._move(i,s)._moveEnd(m),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,l,d){s===void 0&&(s=this._zoom);var m=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),d?l&&l.pinch&&this.fire("zoom",l):((m||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return be(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Fe(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[f(this._container)]=this;var s=i?we:re;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),Y.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){be(this._resizeRequest),this._resizeRequest=ae(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var l=[],d,m=s==="mouseout"||s==="mouseover",y=i.target||i.srcElement,T=!1;y;){if(d=this._targets[f(y)],d&&(s==="click"||s==="preclick")&&this._draggableMoved(d)){T=!0;break}if(d&&d.listens(s,!0)&&(m&&!Wl(y,i)||(l.push(d),m))||y===this._container)break;y=y.parentNode}return!l.length&&!T&&!m&&this.listens(s,!0)&&(l=[this]),l},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var s=i.target||i.srcElement;if(!(!this._loaded||s._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(s))){var l=i.type;l==="mousedown"&&Bl(s),this._fireDOMEvent(i,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,l){if(i.type==="click"){var d=o({},i);d.type="preclick",this._fireDOMEvent(d,d.type,l)}var m=this._findEventTargets(i,s);if(l){for(var y=[],T=0;T<l.length;T++)l[T].listens(s,!0)&&y.push(l[T]);m=y.concat(m)}if(m.length){s==="contextmenu"&&Ye(i);var j=m[0],R={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var O=j.getLatLng&&(!j._radius||j._radius<=10);R.containerPoint=O?this.latLngToContainerPoint(j.getLatLng()):this.mouseEventToContainerPoint(i),R.layerPoint=this.containerPointToLayerPoint(R.containerPoint),R.latlng=O?j.getLatLng():this.layerPointToLatLng(R.layerPoint)}for(T=0;T<m.length;T++)if(m[T].fire(s,R,!0),R.originalEvent._stopped||m[T].options.bubblingMouseEvents===!1&&A(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return oi(this._mapPane)||new I(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var l=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var l=this.getSize()._divideBy(2);return this.project(i,s)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,l){var d=this._getNewPixelOrigin(l,s);return this.project(i,s)._subtract(d)},_latLngBoundsToNewLayerBounds:function(i,s,l){var d=this._getNewPixelOrigin(l,s);return H([this.project(i.getSouthWest(),s)._subtract(d),this.project(i.getNorthWest(),s)._subtract(d),this.project(i.getSouthEast(),s)._subtract(d),this.project(i.getNorthEast(),s)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,l){if(!l)return i;var d=this.project(i,s),m=this.getSize().divideBy(2),y=new C(d.subtract(m),d.add(m)),T=this._getBoundsOffset(y,l,s);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?i:this.unproject(d.add(T),s)},_limitOffset:function(i,s){if(!s)return i;var l=this.getPixelBounds(),d=new C(l.min.add(i),l.max.add(i));return i.add(this._getBoundsOffset(d,s))},_getBoundsOffset:function(i,s,l){var d=H(this.project(s.getNorthEast(),l),this.project(s.getSouthWest(),l)),m=d.min.subtract(i.min),y=d.max.subtract(i.max),T=this._rebound(m.x,-y.x),j=this._rebound(m.y,-y.y);return new I(T,j)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),l=this.getMaxZoom(),d=Y.any3d?this.options.zoomSnap:1;return d&&(i=Math.round(i/d)*d),Math.max(s,Math.min(l,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ie(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var l=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,s),!0)},_createAnimProxy:function(){var i=this._proxy=fe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var l=jl,d=this._proxy.style[l];ri(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),d===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Le(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();ri(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(s),m=this._getCenterOffset(i)._divideBy(1-1/d);return l.animate!==!0&&!this.getSize().contains(m)?!1:(ae(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,l,d){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,oe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ie(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function mx(i,s){return new ce(i,s)}var Zt=Q.extend({options:{position:"topright"},initialize:function(i){k(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),l=this.getPosition(),d=i._controlCorners[l];return oe(s,"leaflet-control"),l.indexOf("bottom")!==-1?d.insertBefore(s,d.firstChild):d.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Le(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Wr=function(i){return new Zt(i)};ce.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",l=this._controlContainer=fe("div",s+"control-container",this._container);function d(m,y){var T=s+m+" "+s+y;i[m+y]=fe("div",T,l)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)Le(this._controlCorners[i]);Le(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var of=Zt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,l,d){return l<d?-1:d<l?1:0}},initialize:function(i,s,l){k(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in i)this._addLayer(i[d],d);for(d in s)this._addLayer(s[d],d,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Zt.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(f(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){oe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(oe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Ie(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ie(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=fe("div",i),l=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Zr(s),Zl(s);var d=this._section=fe("section",i+"-list");l&&(this._map.on("click",this.collapse,this),re(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=fe("a",i+"-toggle",s);m.href="#",m.title="Layers",m.setAttribute("role","button"),re(m,{keydown:function(y){y.keyCode===13&&this._expandSafely()},click:function(y){Ye(y),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=fe("div",i+"-base",d),this._separator=fe("div",i+"-separator",d),this._overlaysList=fe("div",i+"-overlays",d),s.appendChild(d)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&f(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,l){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(d,m){return this.options.sortFunction(d.layer,m.layer,d.name,m.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_s(this._baseLayersList),_s(this._overlaysList),this._layerControlInputs=[];var i,s,l,d,m=0;for(l=0;l<this._layers.length;l++)d=this._layers[l],this._addItem(d),s=s||d.overlay,i=i||!d.overlay,m+=d.overlay?0:1;return this.options.hideSingleBase&&(i=i&&m>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(f(i.target)),l=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;l&&this._map.fire(l,s)},_createRadioElement:function(i,s){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=l,d.firstChild},_addItem:function(i){var s=document.createElement("label"),l=this._map.hasLayer(i.layer),d;i.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=l):d=this._createRadioElement("leaflet-base-layers_"+f(this),l),this._layerControlInputs.push(d),d.layerId=f(i.layer),re(d,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+i.name;var y=document.createElement("span");s.appendChild(y),y.appendChild(d),y.appendChild(m);var T=i.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,s,l,d=[],m=[];this._handlingClick=!0;for(var y=i.length-1;y>=0;y--)s=i[y],l=this._getLayer(s.layerId).layer,s.checked?d.push(l):s.checked||m.push(l);for(y=0;y<m.length;y++)this._map.hasLayer(m[y])&&this._map.removeLayer(m[y]);for(y=0;y<d.length;y++)this._map.hasLayer(d[y])||this._map.addLayer(d[y]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,l,d=this._map.getZoom(),m=i.length-1;m>=0;m--)s=i[m],l=this._getLayer(s.layerId).layer,s.disabled=l.options.minZoom!==void 0&&d<l.options.minZoom||l.options.maxZoom!==void 0&&d>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,re(i,"click",Ye),this.expand();var s=this;setTimeout(function(){we(i,"click",Ye),s._preventClick=!1})}}),gx=function(i,s,l){return new of(i,s,l)},$l=Zt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",l=fe("div",s+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,s+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,s+"-out",l,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,l,d,m){var y=fe("a",l,d);return y.innerHTML=i,y.href="#",y.title=s,y.setAttribute("role","button"),y.setAttribute("aria-label",s),Zr(y),re(y,"click",ai),re(y,"click",m,this),re(y,"click",this._refocusOnMap,this),y},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";Ie(this._zoomInButton,s),Ie(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(oe(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(oe(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ce.mergeOptions({zoomControl:!0}),ce.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new $l,this.addControl(this.zoomControl))});var vx=function(i){return new $l(i)},sf=Zt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",l=fe("div",s),d=this.options;return this._addScales(d,s+"-line",l),i.on(d.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),l},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,l){i.metric&&(this._mScale=fe("div",s,l)),i.imperial&&(this._iScale=fe("div",s,l))},_update:function(){var i=this._map,s=i.getSize().y/2,l=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(l)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),l=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,l,s/i)},_updateImperial:function(i){var s=i*3.2808399,l,d,m;s>5280?(l=s/5280,d=this._getRoundNum(l),this._updateScale(this._iScale,d+" mi",d/l)):(m=this._getRoundNum(s),this._updateScale(this._iScale,m+" ft",m/s))},_updateScale:function(i,s,l){i.style.width=Math.round(this.options.maxWidth*l)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),l=i/s;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,s*l}}),yx=function(i){return new sf(i)},_x='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Gl=Zt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Y.inlineSvg?_x+" ":"")+"Leaflet</a>"},initialize:function(i){k(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=fe("div","leaflet-control-attribution"),Zr(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var l=[];this.options.prefix&&l.push(this.options.prefix),i.length&&l.push(i.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ce.mergeOptions({attributionControl:!0}),ce.addInitHook(function(){this.options.attributionControl&&new Gl().addTo(this)});var xx=function(i){return new Gl(i)};Zt.Layers=of,Zt.Zoom=$l,Zt.Scale=sf,Zt.Attribution=Gl,Wr.layers=gx,Wr.zoom=vx,Wr.scale=yx,Wr.attribution=xx;var nn=Q.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});nn.addTo=function(i,s){return i.addHandler(s,this),this};var wx={Events:me},af=Y.touch?"touchstart mousedown":"mousedown",En=he.extend({options:{clickTolerance:3},initialize:function(i,s,l,d){k(this,d),this._element=i,this._dragStartTarget=s||i,this._preventOutline=l},enable:function(){this._enabled||(re(this._dragStartTarget,af,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(En._dragging===this&&this.finishDrag(!0),we(this._dragStartTarget,af,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Al(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){En._dragging===this&&this.finishDrag();return}if(!(En._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(En._dragging=this,this._preventOutline&&Bl(this._element),Il(),Vr(),!this._moving)){this.fire("down");var s=i.touches?i.touches[0]:i,l=Qh(this._element);this._startPoint=new I(s.clientX,s.clientY),this._startPos=oi(this._element),this._parentScale=Fl(l);var d=i.type==="mousedown";re(document,d?"mousemove":"touchmove",this._onMove,this),re(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,l=new I(s.clientX,s.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Ye(i),this._moved||(this.fire("dragstart"),this._moved=!0,oe(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),oe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Fe(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Ie(document.body,"leaflet-dragging"),this._lastTarget&&(Ie(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),we(document,"mousemove touchmove",this._onMove,this),we(document,"mouseup touchend touchcancel",this._onUp,this),Ol(),Hr();var s=this._moved&&this._moving;this._moving=!1,En._dragging=!1,s&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function lf(i,s,l){var d,m=[1,4,2,8],y,T,j,R,O,W,te,se;for(y=0,W=i.length;y<W;y++)i[y]._code=li(i[y],s);for(j=0;j<4;j++){for(te=m[j],d=[],y=0,W=i.length,T=W-1;y<W;T=y++)R=i[y],O=i[T],R._code&te?O._code&te||(se=ks(O,R,te,s,l),se._code=li(se,s),d.push(se)):(O._code&te&&(se=ks(O,R,te,s,l),se._code=li(se,s),d.push(se)),d.push(R));i=d}return i}function uf(i,s){var l,d,m,y,T,j,R,O,W;if(!i||i.length===0)throw new Error("latlngs not passed");Rt(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var te=U([0,0]),se=$(i),ut=se.getNorthWest().distanceTo(se.getSouthWest())*se.getNorthEast().distanceTo(se.getNorthWest());ut<1700&&(te=Kl(i));var $e=i.length,zt=[];for(l=0;l<$e;l++){var vt=U(i[l]);zt.push(s.project(U([vt.lat-te.lat,vt.lng-te.lng])))}for(j=R=O=0,l=0,d=$e-1;l<$e;d=l++)m=zt[l],y=zt[d],T=m.y*y.x-y.y*m.x,R+=(m.x+y.x)*T,O+=(m.y+y.y)*T,j+=T*3;j===0?W=zt[0]:W=[R/j,O/j];var Zi=s.unproject(P(W));return U([Zi.lat+te.lat,Zi.lng+te.lng])}function Kl(i){for(var s=0,l=0,d=0,m=0;m<i.length;m++){var y=U(i[m]);s+=y.lat,l+=y.lng,d++}return U([s/d,l/d])}var Sx={__proto__:null,clipPolygon:lf,polygonCenter:uf,centroid:Kl};function cf(i,s){if(!s||!i.length)return i.slice();var l=s*s;return i=Px(i,l),i=kx(i,l),i}function df(i,s,l){return Math.sqrt($r(i,s,l,!0))}function bx(i,s,l){return $r(i,s,l)}function kx(i,s){var l=i.length,d=typeof Uint8Array<"u"?Uint8Array:Array,m=new d(l);m[0]=m[l-1]=1,ql(i,m,s,0,l-1);var y,T=[];for(y=0;y<l;y++)m[y]&&T.push(i[y]);return T}function ql(i,s,l,d,m){var y=0,T,j,R;for(j=d+1;j<=m-1;j++)R=$r(i[j],i[d],i[m],!0),R>y&&(T=j,y=R);y>l&&(s[T]=1,ql(i,s,l,d,T),ql(i,s,l,T,m))}function Px(i,s){for(var l=[i[0]],d=1,m=0,y=i.length;d<y;d++)Cx(i[d],i[m])>s&&(l.push(i[d]),m=d);return m<y-1&&l.push(i[y-1]),l}var hf;function ff(i,s,l,d,m){var y=d?hf:li(i,l),T=li(s,l),j,R,O;for(hf=T;;){if(!(y|T))return[i,s];if(y&T)return!1;j=y||T,R=ks(i,s,j,l,m),O=li(R,l),j===y?(i=R,y=O):(s=R,T=O)}}function ks(i,s,l,d,m){var y=s.x-i.x,T=s.y-i.y,j=d.min,R=d.max,O,W;return l&8?(O=i.x+y*(R.y-i.y)/T,W=R.y):l&4?(O=i.x+y*(j.y-i.y)/T,W=j.y):l&2?(O=R.x,W=i.y+T*(R.x-i.x)/y):l&1&&(O=j.x,W=i.y+T*(j.x-i.x)/y),new I(O,W,m)}function li(i,s){var l=0;return i.x<s.min.x?l|=1:i.x>s.max.x&&(l|=2),i.y<s.min.y?l|=4:i.y>s.max.y&&(l|=8),l}function Cx(i,s){var l=s.x-i.x,d=s.y-i.y;return l*l+d*d}function $r(i,s,l,d){var m=s.x,y=s.y,T=l.x-m,j=l.y-y,R=T*T+j*j,O;return R>0&&(O=((i.x-m)*T+(i.y-y)*j)/R,O>1?(m=l.x,y=l.y):O>0&&(m+=T*O,y+=j*O)),T=i.x-m,j=i.y-y,d?T*T+j*j:new I(m,y)}function Rt(i){return!S(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function pf(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Rt(i)}function mf(i,s){var l,d,m,y,T,j,R,O;if(!i||i.length===0)throw new Error("latlngs not passed");Rt(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var W=U([0,0]),te=$(i),se=te.getNorthWest().distanceTo(te.getSouthWest())*te.getNorthEast().distanceTo(te.getNorthWest());se<1700&&(W=Kl(i));var ut=i.length,$e=[];for(l=0;l<ut;l++){var zt=U(i[l]);$e.push(s.project(U([zt.lat-W.lat,zt.lng-W.lng])))}for(l=0,d=0;l<ut-1;l++)d+=$e[l].distanceTo($e[l+1])/2;if(d===0)O=$e[0];else for(l=0,y=0;l<ut-1;l++)if(T=$e[l],j=$e[l+1],m=T.distanceTo(j),y+=m,y>d){R=(y-d)/m,O=[j.x-R*(j.x-T.x),j.y-R*(j.y-T.y)];break}var vt=s.unproject(P(O));return U([vt.lat+W.lat,vt.lng+W.lng])}var Tx={__proto__:null,simplify:cf,pointToSegmentDistance:df,closestPointOnSegment:bx,clipSegment:ff,_getEdgeIntersection:ks,_getBitCode:li,_sqClosestPointOnSegment:$r,isFlat:Rt,_flat:pf,polylineCenter:mf},Yl={project:function(i){return new I(i.lng,i.lat)},unproject:function(i){return new Z(i.y,i.x)},bounds:new C([-180,-90],[180,90])},Xl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new C([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,l=this.R,d=i.lat*s,m=this.R_MINOR/l,y=Math.sqrt(1-m*m),T=y*Math.sin(d),j=Math.tan(Math.PI/4-d/2)/Math.pow((1-T)/(1+T),y/2);return d=-l*Math.log(Math.max(j,1e-10)),new I(i.lng*s*l,d)},unproject:function(i){for(var s=180/Math.PI,l=this.R,d=this.R_MINOR/l,m=Math.sqrt(1-d*d),y=Math.exp(-i.y/l),T=Math.PI/2-2*Math.atan(y),j=0,R=.1,O;j<15&&Math.abs(R)>1e-7;j++)O=m*Math.sin(T),O=Math.pow((1-O)/(1+O),m/2),R=Math.PI/2-2*Math.atan(y*O)-T,T+=R;return new Z(T*s,i.x*s/l)}},Lx={__proto__:null,LonLat:Yl,Mercator:Xl,SphericalMercator:xe},Nx=o({},ie,{code:"EPSG:3395",projection:Xl,transformation:function(){var i=.5/(Math.PI*Xl.R);return _e(i,.5,-i,.5)}()}),gf=o({},ie,{code:"EPSG:4326",projection:Yl,transformation:_e(1/180,1,-1/180,.5)}),Ex=o({},q,{projection:Yl,transformation:_e(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var l=s.lng-i.lng,d=s.lat-i.lat;return Math.sqrt(l*l+d*d)},infinite:!0});q.Earth=ie,q.EPSG3395=Nx,q.EPSG3857=ze,q.EPSG900913=ue,q.EPSG4326=gf,q.Simple=Ex;var Wt=he.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[f(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[f(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var l=this.getEvents();s.on(l,this),this.once("remove",function(){s.off(l,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ce.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=f(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=f(i);return this._layers[s]?(this._loaded&&i.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return f(i)in this._layers},eachLayer:function(i,s){for(var l in this._layers)i.call(s,this._layers[l]);return this},_addLayers:function(i){i=i?S(i)?i:[i]:[];for(var s=0,l=i.length;s<l;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[f(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=f(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,l=this._getZoomSpan();for(var d in this._zoomBoundLayers){var m=this._zoomBoundLayers[d].options;i=m.minZoom===void 0?i:Math.min(i,m.minZoom),s=m.maxZoom===void 0?s:Math.max(s,m.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Bi=Wt.extend({initialize:function(i,s){k(this,s),this._layers={};var l,d;if(i)for(l=0,d=i.length;l<d;l++)this.addLayer(i[l])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),l,d;for(l in this._layers)d=this._layers[l],d[i]&&d[i].apply(d,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var l in this._layers)i.call(s,this._layers[l]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return f(i)}}),Mx=function(i,s){return new Bi(i,s)},fn=Bi.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Bi.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Bi.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new K;for(var s in this._layers){var l=this._layers[s];i.extend(l.getBounds?l.getBounds():l.getLatLng())}return i}}),jx=function(i,s){return new fn(i,s)},Fi=Q.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){k(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var l=this._getIconUrl(i);if(!l){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(l,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(d,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(i,s){var l=this.options,d=l[s+"Size"];typeof d=="number"&&(d=[d,d]);var m=P(d),y=P(s==="shadow"&&l.shadowAnchor||l.iconAnchor||m&&m.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(l.className||""),y&&(i.style.marginLeft=-y.x+"px",i.style.marginTop=-y.y+"px"),m&&(i.style.width=m.x+"px",i.style.height=m.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return Y.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Ax(i){return new Fi(i)}var Gr=Fi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Gr.imagePath!="string"&&(Gr.imagePath=this._detectIconPath()),(this.options.imagePath||Gr.imagePath)+Fi.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var s=function(l,d,m){var y=d.exec(l);return y&&y[m]};return i=s(i,/^url\((['"])?(.+)\1\)$/,2),i&&s(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=fe("div","leaflet-default-icon-path",document.body),s=Fr(i,"background-image")||Fr(i,"backgroundImage");if(document.body.removeChild(i),s=this._stripUrl(s),s)return s;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),vf=nn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new En(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),oe(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ie(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,l=s._map,d=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,y=oi(s._icon),T=l.getPixelBounds(),j=l.getPixelOrigin(),R=H(T.min._subtract(j).add(m),T.max._subtract(j).subtract(m));if(!R.contains(y)){var O=P((Math.max(R.max.x,y.x)-R.max.x)/(T.max.x-R.max.x)-(Math.min(R.min.x,y.x)-R.min.x)/(T.min.x-R.min.x),(Math.max(R.max.y,y.y)-R.max.y)/(T.max.y-R.max.y)-(Math.min(R.min.y,y.y)-R.min.y)/(T.min.y-R.min.y)).multiplyBy(d);l.panBy(O,{animate:!1}),this._draggable._newPos._add(O),this._draggable._startPos._add(O),Fe(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=ae(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(be(this._panRequest),this._panRequest=ae(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,l=s._shadow,d=oi(s._icon),m=s._map.layerPointToLatLng(d);l&&Fe(l,d),s._latlng=m,i.latlng=m,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){be(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Ps=Wt.extend({options:{icon:new Gr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){k(this,s),this._latlng=U(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=U(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=i.icon.createIcon(this._icon),d=!1;l!==this._icon&&(this._icon&&this._removeIcon(),d=!0,i.title&&(l.title=i.title),l.tagName==="IMG"&&(l.alt=i.alt||"")),oe(l,s),i.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&re(l,"focus",this._panOnFocus,this);var m=i.icon.createShadow(this._shadow),y=!1;m!==this._shadow&&(this._removeShadow(),y=!0),m&&(oe(m,s),m.alt=""),this._shadow=m,i.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&y&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&we(this._icon,"focus",this._panOnFocus,this),Le(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Le(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Fe(this._icon,i),this._shadow&&Fe(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(oe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),vf)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new vf(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&At(this._icon,i),this._shadow&&At(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var s=this.options.icon.options,l=s.iconSize?P(s.iconSize):P(0,0),d=s.iconAnchor?P(s.iconAnchor):P(0,0);i.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:l.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Rx(i,s){return new Ps(i,s)}var Mn=Wt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return k(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Cs=Mn.extend({options:{fill:!0,radius:10},initialize:function(i,s){k(this,s),this._latlng=U(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=U(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return Mn.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,l=this._clickTolerance(),d=[i+l,s+l];this._pxBounds=new C(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function zx(i,s){return new Cs(i,s)}var Ql=Cs.extend({initialize:function(i,s,l){if(typeof s=="number"&&(s=o({},l,{radius:s})),k(this,s),this._latlng=U(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new K(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Mn.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,l=this._map,d=l.options.crs;if(d.distance===ie.distance){var m=Math.PI/180,y=this._mRadius/ie.R/m,T=l.project([s+y,i]),j=l.project([s-y,i]),R=T.add(j).divideBy(2),O=l.unproject(R).lat,W=Math.acos((Math.cos(y*m)-Math.sin(s*m)*Math.sin(O*m))/(Math.cos(s*m)*Math.cos(O*m)))/m;(isNaN(W)||W===0)&&(W=y/Math.cos(Math.PI/180*s)),this._point=R.subtract(l.getPixelOrigin()),this._radius=isNaN(W)?0:R.x-l.project([O,i-W]).x,this._radiusY=R.y-T.y}else{var te=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(te).x}this._updateBounds()}});function Ix(i,s,l){return new Ql(i,s,l)}var pn=Mn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){k(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,l=null,d=$r,m,y,T=0,j=this._parts.length;T<j;T++)for(var R=this._parts[T],O=1,W=R.length;O<W;O++){m=R[O-1],y=R[O];var te=d(i,m,y,!0);te<s&&(s=te,l=d(i,m,y))}return l&&(l.distance=Math.sqrt(s)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return mf(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=U(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new K,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Rt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],l=Rt(i),d=0,m=i.length;d<m;d++)l?(s[d]=U(i[d]),this._bounds.extend(s[d])):s[d]=this._convertLatLngs(i[d]);return s},_project:function(){var i=new C;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new I(i,i);this._rawPxBounds&&(this._pxBounds=new C([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(i,s,l){var d=i[0]instanceof Z,m=i.length,y,T;if(d){for(T=[],y=0;y<m;y++)T[y]=this._map.latLngToLayerPoint(i[y]),l.extend(T[y]);s.push(T)}else for(y=0;y<m;y++)this._projectLatlngs(i[y],s,l)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,l,d,m,y,T,j,R;for(l=0,m=0,y=this._rings.length;l<y;l++)for(R=this._rings[l],d=0,T=R.length;d<T-1;d++)j=ff(R[d],R[d+1],i,d,!0),j&&(s[m]=s[m]||[],s[m].push(j[0]),(j[1]!==R[d+1]||d===T-2)&&(s[m].push(j[1]),m++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,l=0,d=i.length;l<d;l++)i[l]=cf(i[l],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var l,d,m,y,T,j,R=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(l=0,y=this._parts.length;l<y;l++)for(j=this._parts[l],d=0,T=j.length,m=T-1;d<T;m=d++)if(!(!s&&d===0)&&df(i,j[m],j[d])<=R)return!0;return!1}});function Ox(i,s){return new pn(i,s)}pn._flat=pf;var Vi=pn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return uf(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var s=pn.prototype._convertLatLngs.call(this,i),l=s.length;return l>=2&&s[0]instanceof Z&&s[0].equals(s[l-1])&&s.pop(),s},_setLatLngs:function(i){pn.prototype._setLatLngs.call(this,i),Rt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Rt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,l=new I(s,s);if(i=new C(i.min.subtract(l),i.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,m=this._rings.length,y;d<m;d++)y=lf(this._rings[d],i,!0),y.length&&this._parts.push(y)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,l,d,m,y,T,j,R,O;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(y=0,R=this._parts.length;y<R;y++)for(l=this._parts[y],T=0,O=l.length,j=O-1;T<O;j=T++)d=l[T],m=l[j],d.y>i.y!=m.y>i.y&&i.x<(m.x-d.x)*(i.y-d.y)/(m.y-d.y)+d.x&&(s=!s);return s||pn.prototype._containsPoint.call(this,i,!0)}});function Dx(i,s){return new Vi(i,s)}var mn=fn.extend({initialize:function(i,s){k(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=S(i)?i:i.features,l,d,m;if(s){for(l=0,d=s.length;l<d;l++)m=s[l],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var y=this.options;if(y.filter&&!y.filter(i))return this;var T=Ts(i,y);return T?(T.feature=Es(i),T.defaultOptions=T.options,this.resetStyle(T),y.onEachFeature&&y.onEachFeature(i,T),this.addLayer(T)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function Ts(i,s){var l=i.type==="Feature"?i.geometry:i,d=l?l.coordinates:null,m=[],y=s&&s.pointToLayer,T=s&&s.coordsToLatLng||Jl,j,R,O,W;if(!d&&!l)return null;switch(l.type){case"Point":return j=T(d),yf(y,i,j,s);case"MultiPoint":for(O=0,W=d.length;O<W;O++)j=T(d[O]),m.push(yf(y,i,j,s));return new fn(m);case"LineString":case"MultiLineString":return R=Ls(d,l.type==="LineString"?0:1,T),new pn(R,s);case"Polygon":case"MultiPolygon":return R=Ls(d,l.type==="Polygon"?1:2,T),new Vi(R,s);case"GeometryCollection":for(O=0,W=l.geometries.length;O<W;O++){var te=Ts({geometry:l.geometries[O],type:"Feature",properties:i.properties},s);te&&m.push(te)}return new fn(m);case"FeatureCollection":for(O=0,W=l.features.length;O<W;O++){var se=Ts(l.features[O],s);se&&m.push(se)}return new fn(m);default:throw new Error("Invalid GeoJSON object.")}}function yf(i,s,l,d){return i?i(s,l):new Ps(l,d&&d.markersInheritOptions&&d)}function Jl(i){return new Z(i[1],i[0],i[2])}function Ls(i,s,l){for(var d=[],m=0,y=i.length,T;m<y;m++)T=s?Ls(i[m],s-1,l):(l||Jl)(i[m]),d.push(T);return d}function eu(i,s){return i=U(i),i.alt!==void 0?[_(i.lng,s),_(i.lat,s),_(i.alt,s)]:[_(i.lng,s),_(i.lat,s)]}function Ns(i,s,l,d){for(var m=[],y=0,T=i.length;y<T;y++)m.push(s?Ns(i[y],Rt(i[y])?0:s-1,l,d):eu(i[y],d));return!s&&l&&m.length>0&&m.push(m[0].slice()),m}function Hi(i,s){return i.feature?o({},i.feature,{geometry:s}):Es(s)}function Es(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var tu={toGeoJSON:function(i){return Hi(this,{type:"Point",coordinates:eu(this.getLatLng(),i)})}};Ps.include(tu),Ql.include(tu),Cs.include(tu),pn.include({toGeoJSON:function(i){var s=!Rt(this._latlngs),l=Ns(this._latlngs,s?1:0,!1,i);return Hi(this,{type:(s?"Multi":"")+"LineString",coordinates:l})}}),Vi.include({toGeoJSON:function(i){var s=!Rt(this._latlngs),l=s&&!Rt(this._latlngs[0]),d=Ns(this._latlngs,l?2:s?1:0,!0,i);return s||(d=[d]),Hi(this,{type:(l?"Multi":"")+"Polygon",coordinates:d})}}),Bi.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(l){s.push(l.toGeoJSON(i).geometry.coordinates)}),Hi(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var l=s==="GeometryCollection",d=[];return this.eachLayer(function(m){if(m.toGeoJSON){var y=m.toGeoJSON(i);if(l)d.push(y.geometry);else{var T=Es(y);T.type==="FeatureCollection"?d.push.apply(d,T.features):d.push(T)}}}),l?Hi(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function _f(i,s){return new mn(i,s)}var Bx=_f,Ms=Wt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,l){this._url=i,this._bounds=$(s),k(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(oe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Le(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Oi(this._image),this},bringToBack:function(){return this._map&&Di(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=$(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:fe("img");if(oe(s,"leaflet-image-layer"),this._zoomAnimated&&oe(s,"leaflet-zoom-animated"),this.options.className&&oe(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onload=u(this.fire,this,"load"),s.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;ri(this._image,l,s)},_reset:function(){var i=this._image,s=new C(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=s.getSize();Fe(i,s.min),i.style.width=l.x+"px",i.style.height=l.y+"px"},_updateOpacity:function(){At(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Fx=function(i,s,l){return new Ms(i,s,l)},xf=Ms.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:fe("video");if(oe(s,"leaflet-image-layer"),this._zoomAnimated&&oe(s,"leaflet-zoom-animated"),this.options.className&&oe(s,this.options.className),s.onselectstart=v,s.onmousemove=v,s.onloadeddata=u(this.fire,this,"load"),i){for(var l=s.getElementsByTagName("source"),d=[],m=0;m<l.length;m++)d.push(l[m].src);this._url=l.length>0?d:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var y=0;y<this._url.length;y++){var T=fe("source");T.src=this._url[y],s.appendChild(T)}}});function Vx(i,s,l){return new xf(i,s,l)}var wf=Ms.extend({_initImage:function(){var i=this._image=this._url;oe(i,"leaflet-image-layer"),this._zoomAnimated&&oe(i,"leaflet-zoom-animated"),this.options.className&&oe(i,this.options.className),i.onselectstart=v,i.onmousemove=v}});function Hx(i,s,l){return new wf(i,s,l)}var rn=Wt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,s){i&&(i instanceof Z||S(i))?(this._latlng=U(i),k(this,s)):(k(this,i),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&At(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&At(this._container,1),this.bringToFront(),this.options.interactive&&(oe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(At(this._container,0),this._removeTimeout=setTimeout(u(Le,void 0,this._container),200)):Le(this._container),this.options.interactive&&(Ie(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=U(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Oi(this._container),this},bringToBack:function(){return this._map&&Di(this._container),this},_prepareOpen:function(i){var s=this._source;if(!s._map)return!1;if(s instanceof fn){s=null;var l=this._source._layers;for(var d in l)if(l[d]._map){s=l[d];break}if(!s)return!1;this._source=s}if(!i)if(s.getCenter)i=s.getCenter();else if(s.getLatLng)i=s.getLatLng();else if(s.getBounds)i=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=P(this.options.offset),l=this._getAnchor();this._zoomAnimated?Fe(this._container,i.add(l)):s=s.add(i).add(l);var d=this._containerBottom=-s.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=d+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});ce.include({_initOverlay:function(i,s,l,d){var m=s;return m instanceof i||(m=new i(d).setContent(s)),l&&m.setLatLng(l),m}}),Wt.include({_initOverlay:function(i,s,l,d){var m=l;return m instanceof i?(k(m,d),m._source=this):(m=s&&!d?s:new i(d,this),m.setContent(l)),m}});var js=rn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,rn.prototype.openOn.call(this,i)},onAdd:function(i){rn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Mn||this._source.on("preclick",si))},onRemove:function(i){rn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Mn||this._source.off("preclick",si))},getEvents:function(){var i=rn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",s=this._container=fe("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=fe("div",i+"-content-wrapper",s);if(this._contentNode=fe("div",i+"-content",l),Zr(s),Zl(this._contentNode),re(s,"contextmenu",si),this._tipContainer=fe("div",i+"-tip-container",s),this._tip=fe("div",i+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=fe("a",i+"-close-button",s);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',re(d,"click",function(m){Ye(m),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var l=i.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),s.width=l+1+"px",s.whiteSpace="",s.height="";var d=i.offsetHeight,m=this.options.maxHeight,y="leaflet-popup-scrolled";m&&d>m?(s.height=m+"px",oe(i,y)):Ie(i,y),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),l=this._getAnchor();Fe(this._container,s.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,s=parseInt(Fr(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+s,d=this._containerWidth,m=new I(this._containerLeft,-l-this._containerBottom);m._add(oi(this._container));var y=i.layerPointToContainerPoint(m),T=P(this.options.autoPanPadding),j=P(this.options.autoPanPaddingTopLeft||T),R=P(this.options.autoPanPaddingBottomRight||T),O=i.getSize(),W=0,te=0;y.x+d+R.x>O.x&&(W=y.x+d-O.x+R.x),y.x-W-j.x<0&&(W=y.x-j.x),y.y+l+R.y>O.y&&(te=y.y+l-O.y+R.y),y.y-te-j.y<0&&(te=y.y-j.y),(W||te)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([W,te]))}},_getAnchor:function(){return P(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ux=function(i,s){return new js(i,s)};ce.mergeOptions({closePopupOnClick:!0}),ce.include({openPopup:function(i,s,l){return this._initOverlay(js,i,s,l).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Wt.include({bindPopup:function(i,s){return this._popup=this._initOverlay(js,this._popup,i,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof fn||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){ai(i);var s=i.layer||i.target;if(this._popup._source===s&&!(s instanceof Mn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=s,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var As=rn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){rn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){rn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=rn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=fe("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,l,d=this._map,m=this._container,y=d.latLngToContainerPoint(d.getCenter()),T=d.layerPointToContainerPoint(i),j=this.options.direction,R=m.offsetWidth,O=m.offsetHeight,W=P(this.options.offset),te=this._getAnchor();j==="top"?(s=R/2,l=O):j==="bottom"?(s=R/2,l=0):j==="center"?(s=R/2,l=O/2):j==="right"?(s=0,l=O/2):j==="left"?(s=R,l=O/2):T.x<y.x?(j="right",s=0,l=O/2):(j="left",s=R+(W.x+te.x)*2,l=O/2),i=i.subtract(P(s,l,!0)).add(W).add(te),Ie(m,"leaflet-tooltip-right"),Ie(m,"leaflet-tooltip-left"),Ie(m,"leaflet-tooltip-top"),Ie(m,"leaflet-tooltip-bottom"),oe(m,"leaflet-tooltip-"+j),Fe(m,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&At(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return P(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Zx=function(i,s){return new As(i,s)};ce.include({openTooltip:function(i,s,l){return this._initOverlay(As,i,s,l).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Wt.include({bindTooltip:function(i,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(As,this._tooltip,i,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[s](l),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof fn||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&(re(s,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),re(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var s=i.latlng,l,d;this._tooltip.options.sticky&&i.originalEvent&&(l=this._map.mouseEventToContainerPoint(i.originalEvent),d=this._map.containerPointToLayerPoint(l),s=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(s)}});var Sf=Fi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),l=this.options;if(l.html instanceof Element?(_s(s),s.appendChild(l.html)):s.innerHTML=l.html!==!1?l.html:"",l.bgPos){var d=P(l.bgPos);s.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Wx(i){return new Sf(i)}Fi.Default=Gr;var Kr=Wt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Y.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){k(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),Le(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Oi(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Di(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof I?i:new I(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,l=-i(-1/0,1/0),d=0,m=s.length,y;d<m;d++)y=s[d].style.zIndex,s[d]!==this._container&&y&&(l=i(l,+y));isFinite(l)&&(this.options.zIndex=l+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Y.ielt9){At(this._container,this.options.opacity);var i=+new Date,s=!1,l=!1;for(var d in this._tiles){var m=this._tiles[d];if(!(!m.current||!m.loaded)){var y=Math.min(1,(i-m.loaded)/200);At(m.el,y),y<1?s=!0:(m.active?l=!0:this._onOpaqueTile(m),m.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),s&&(be(this._fadeFrame),this._fadeFrame=ae(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=fe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===i?(this._levels[l].el.style.zIndex=s-Math.abs(i-l),this._onUpdateLevel(l)):(Le(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var d=this._levels[i],m=this._map;return d||(d=this._levels[i]={},d.el=fe("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=s,d.origin=m.project(m.unproject(m.getPixelOrigin()),i).round(),d.zoom=i,this._setZoomTransform(d,m.getCenter(),m.getZoom()),v(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var i,s,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var d=s.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)Le(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,l,d){var m=Math.floor(i/2),y=Math.floor(s/2),T=l-1,j=new I(+m,+y);j.z=+T;var R=this._tileCoordsToKey(j),O=this._tiles[R];return O&&O.active?(O.retain=!0,!0):(O&&O.loaded&&(O.retain=!0),T>d?this._retainParent(m,y,T,d):!1)},_retainChildren:function(i,s,l,d){for(var m=2*i;m<2*i+2;m++)for(var y=2*s;y<2*s+2;y++){var T=new I(m,y);T.z=l+1;var j=this._tileCoordsToKey(T),R=this._tiles[j];if(R&&R.active){R.retain=!0;continue}else R&&R.loaded&&(R.retain=!0);l+1<d&&this._retainChildren(m,y,l+1,d)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,l,d){var m=Math.round(s);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var y=this.options.updateWhenZooming&&m!==this._tileZoom;(!d||y)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(i),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var l in this._levels)this._setZoomTransform(this._levels[l],i,s)},_setZoomTransform:function(i,s,l){var d=this._map.getZoomScale(l,i.zoom),m=i.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(s,l)).round();Y.any3d?ri(i.el,m,d):Fe(i.el,m)},_resetGrid:function(){var i=this._map,s=i.options.crs,l=this._tileSize=this.getTileSize(),d=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],d).x/l.x),Math.ceil(i.project([0,s.wrapLng[1]],d).x/l.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],d).y/l.x),Math.ceil(i.project([s.wrapLat[1],0],d).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,l=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),d=s.getZoomScale(l,this._tileZoom),m=s.project(i,this._tileZoom).floor(),y=s.getSize().divideBy(d*2);return new C(m.subtract(y),m.add(y))},_update:function(i){var s=this._map;if(s){var l=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(i),m=this._pxBoundsToTileRange(d),y=m.getCenter(),T=[],j=this.options.keepBuffer,R=new C(m.getBottomLeft().subtract([j,-j]),m.getTopRight().add([j,-j]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var O in this._tiles){var W=this._tiles[O].coords;(W.z!==this._tileZoom||!R.contains(new I(W.x,W.y)))&&(this._tiles[O].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(i,l);return}for(var te=m.min.y;te<=m.max.y;te++)for(var se=m.min.x;se<=m.max.x;se++){var ut=new I(se,te);if(ut.z=this._tileZoom,!!this._isValidTile(ut)){var $e=this._tiles[this._tileCoordsToKey(ut)];$e?$e.current=!0:T.push(ut)}}if(T.sort(function(vt,Zi){return vt.distanceTo(y)-Zi.distanceTo(y)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var zt=document.createDocumentFragment();for(se=0;se<T.length;se++)this._addTile(T[se],zt);this._level.el.appendChild(zt)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var l=this._globalTileRange;if(!s.wrapLng&&(i.x<l.min.x||i.x>l.max.x)||!s.wrapLat&&(i.y<l.min.y||i.y>l.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(i);return $(this.options.bounds).overlaps(d)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,l=this.getTileSize(),d=i.scaleBy(l),m=d.add(l),y=s.unproject(d,i.z),T=s.unproject(m,i.z);return[y,T]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),l=new K(s[0],s[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),l=new I(+s[0],+s[1]);return l.z=+s[2],l},_removeTile:function(i){var s=this._tiles[i];s&&(Le(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){oe(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=v,i.onmousemove=v,Y.ielt9&&this.options.opacity<1&&At(i,this.options.opacity)},_addTile:function(i,s){var l=this._getTilePos(i),d=this._tileCoordsToKey(i),m=this.createTile(this._wrapCoords(i),u(this._tileReady,this,i));this._initTile(m),this.createTile.length<2&&ae(u(this._tileReady,this,i,null,m)),Fe(m,l),this._tiles[d]={el:m,coords:i,current:!0},s.appendChild(m),this.fire("tileloadstart",{tile:m,coords:i})},_tileReady:function(i,s,l){s&&this.fire("tileerror",{error:s,tile:l,coords:i});var d=this._tileCoordsToKey(i);l=this._tiles[d],l&&(l.loaded=+new Date,this._map._fadeAnimated?(At(l.el,0),be(this._fadeFrame),this._fadeFrame=ae(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),s||(oe(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Y.ielt9||!this._map._fadeAnimated?ae(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new I(this._wrapX?g(i.x,this._wrapX):i.x,this._wrapY?g(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new C(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function $x(i){return new Kr(i)}var Ui=Kr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,s){this._url=i,s=k(this,s),s.detectRetina&&Y.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var l=document.createElement("img");return re(l,"load",u(this._tileOnLoad,this,s,l)),re(l,"error",u(this._tileOnError,this,s,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(i),l},getTileUrl:function(i){var s={r:Y.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=l),s["-y"]=l}return x(this._url,o(s,this.options))},_tileOnLoad:function(i,s){Y.ielt9?setTimeout(u(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,l){var d=this.options.errorTileUrl;d&&s.getAttribute("src")!==d&&(s.src=d),i(l,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,l=this.options.zoomReverse,d=this.options.zoomOffset;return l&&(i=s-i),i+d},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=v,s.onerror=v,!s.complete)){s.src=z;var l=this._tiles[i].coords;Le(s),delete this._tiles[i],this.fire("tileabort",{tile:s,coords:l})}},_removeTile:function(i){var s=this._tiles[i];if(s)return s.el.setAttribute("src",z),Kr.prototype._removeTile.call(this,i)},_tileReady:function(i,s,l){if(!(!this._map||l&&l.getAttribute("src")===z))return Kr.prototype._tileReady.call(this,i,s,l)}});function bf(i,s){return new Ui(i,s)}var kf=Ui.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var l=o({},this.defaultWmsParams);for(var d in s)d in this.options||(l[d]=s[d]);s=k(this,s);var m=s.detectRetina&&Y.retina?2:1,y=this.getTileSize();l.width=y.x*m,l.height=y.y*m,this.wmsParams=l},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Ui.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),l=this._crs,d=H(l.project(s[0]),l.project(s[1])),m=d.min,y=d.max,T=(this._wmsVersion>=1.3&&this._crs===gf?[m.y,m.x,y.y,y.x]:[m.x,m.y,y.x,y.y]).join(","),j=Ui.prototype.getTileUrl.call(this,i);return j+N(this.wmsParams,j,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(i,s){return o(this.wmsParams,i),s||this.redraw(),this}});function Gx(i,s){return new kf(i,s)}Ui.WMS=kf,bf.wms=Gx;var gn=Wt.extend({options:{padding:.1},initialize:function(i){k(this,i),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),oe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var l=this._map.getZoomScale(s,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,s),y=d.multiplyBy(-l).add(m).subtract(this._map._getNewPixelOrigin(i,s));Y.any3d?ri(this._container,y,l):Fe(this._container,y)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),l=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new C(l,l.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Pf=gn.extend({options:{tolerance:0},getEvents:function(){var i=gn.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");re(i,"mousemove",this._onMouseMove,this),re(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),re(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){be(this._redrawRequest),delete this._ctx,Le(this._container),we(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){gn.prototype._update.call(this);var i=this._bounds,s=this._container,l=i.getSize(),d=Y.retina?2:1;Fe(s,i.min),s.width=d*l.x,s.height=d*l.y,s.style.width=l.x+"px",s.style.height=l.y+"px",Y.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[f(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,l=s.next,d=s.prev;l?l.prev=d:this._drawLast=d,d?d.next=l:this._drawFirst=l,delete i._order,delete this._layers[f(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),l=[],d,m;for(m=0;m<s.length;m++){if(d=Number(s[m]),isNaN(d))return;l.push(d)}i.options._dashArray=l}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||ae(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new C,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var l=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)i=d.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(this._drawing){var l,d,m,y,T=i._parts,j=T.length,R=this._ctx;if(j){for(R.beginPath(),l=0;l<j;l++){for(d=0,m=T[l].length;d<m;d++)y=T[l][d],R[d?"lineTo":"moveTo"](y.x,y.y);s&&R.closePath()}this._fillStroke(R,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,l=this._ctx,d=Math.max(Math.round(i._radius),1),m=(Math.max(Math.round(i._radiusY),1)||d)/d;m!==1&&(l.save(),l.scale(1,m)),l.beginPath(),l.arc(s.x,s.y/m,d,0,Math.PI*2,!1),m!==1&&l.restore(),this._fillStroke(l,i)}},_fillStroke:function(i,s){var l=s.options;l.fill&&(i.globalAlpha=l.fillOpacity,i.fillStyle=l.fillColor||l.color,i.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=l.opacity,i.lineWidth=l.weight,i.strokeStyle=l.color,i.lineCap=l.lineCap,i.lineJoin=l.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),l,d,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(s)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(l))&&(d=l);this._fireEvent(d?[d]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(Ie(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var l,d,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(s)&&(d=l);d!==this._hoveredLayer&&(this._handleMouseOut(i),d&&(oe(this._container,"leaflet-interactive"),this._fireEvent([d],i,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,l){this._map._fireDOMEvent(s,l||s.type,i)},_bringToFront:function(i){var s=i._order;if(s){var l=s.next,d=s.prev;if(l)l.prev=d;else return;d?d.next=l:l&&(this._drawFirst=l),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(s){var l=s.next,d=s.prev;if(d)d.next=l;else return;l?l.prev=d:d&&(this._drawLast=d),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function Cf(i){return Y.canvas?new Pf(i):null}var qr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Kx={_initContainer:function(){this._container=fe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gn.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=qr("shape");oe(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=qr("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;Le(s),i.removeInteractiveTarget(s),delete this._layers[f(i)]},_updateStyle:function(i){var s=i._stroke,l=i._fill,d=i.options,m=i._container;m.stroked=!!d.stroke,m.filled=!!d.fill,d.stroke?(s||(s=i._stroke=qr("stroke")),m.appendChild(s),s.weight=d.weight+"px",s.color=d.color,s.opacity=d.opacity,d.dashArray?s.dashStyle=S(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=d.lineCap.replace("butt","flat"),s.joinstyle=d.lineJoin):s&&(m.removeChild(s),i._stroke=null),d.fill?(l||(l=i._fill=qr("fill")),m.appendChild(l),l.color=d.fillColor||d.color,l.opacity=d.fillOpacity):l&&(m.removeChild(l),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),l=Math.round(i._radius),d=Math.round(i._radiusY||l);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+l+","+d+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){Oi(i._container)},_bringToBack:function(i){Di(i._container)}},Rs=Y.vml?qr:qe,Yr=gn.extend({_initContainer:function(){this._container=Rs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Rs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Le(this._container),we(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){gn.prototype._update.call(this);var i=this._bounds,s=i.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,l.setAttribute("width",s.x),l.setAttribute("height",s.y)),Fe(l,i.min),l.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=Rs("path");i.options.className&&oe(s,i.options.className),i.options.interactive&&oe(s,"leaflet-interactive"),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){Le(i._path),i.removeInteractiveTarget(i._path),delete this._layers[f(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,l=i.options;s&&(l.stroke?(s.setAttribute("stroke",l.color),s.setAttribute("stroke-opacity",l.opacity),s.setAttribute("stroke-width",l.weight),s.setAttribute("stroke-linecap",l.lineCap),s.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?s.setAttribute("stroke-dasharray",l.dashArray):s.removeAttribute("stroke-dasharray"),l.dashOffset?s.setAttribute("stroke-dashoffset",l.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),l.fill?(s.setAttribute("fill",l.fillColor||l.color),s.setAttribute("fill-opacity",l.fillOpacity),s.setAttribute("fill-rule",l.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,mt(i._parts,s))},_updateCircle:function(i){var s=i._point,l=Math.max(Math.round(i._radius),1),d=Math.max(Math.round(i._radiusY),1)||l,m="a"+l+","+d+" 0 1,0 ",y=i._empty()?"M0 0":"M"+(s.x-l)+","+s.y+m+l*2+",0 "+m+-l*2+",0 ";this._setPath(i,y)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){Oi(i._path)},_bringToBack:function(i){Di(i._path)}});Y.vml&&Yr.include(Kx);function Tf(i){return Y.svg||Y.vml?new Yr(i):null}ce.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&Cf(i)||Tf(i)}});var Lf=Vi.extend({initialize:function(i,s){Vi.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=$(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function qx(i,s){return new Lf(i,s)}Yr.create=Rs,Yr.pointsToPath=mt,mn.geometryToLayer=Ts,mn.coordsToLatLng=Jl,mn.coordsToLatLngs=Ls,mn.latLngToCoords=eu,mn.latLngsToCoords=Ns,mn.getFeature=Hi,mn.asFeature=Es,ce.mergeOptions({boxZoom:!0});var Nf=nn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){re(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){we(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Le(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Vr(),Il(),this._startPoint=this._map.mouseEventToContainerPoint(i),re(document,{contextmenu:ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=fe("div","leaflet-zoom-box",this._container),oe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new C(this._point,this._startPoint),l=s.getSize();Fe(this._box,s.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Le(this._box),Ie(this._container,"leaflet-crosshair")),Hr(),Ol(),we(document,{contextmenu:ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var s=new K(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ce.addInitHook("addHandler","boxZoom",Nf),ce.mergeOptions({doubleClickZoom:!0});var Ef=nn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,l=s.getZoom(),d=s.options.zoomDelta,m=i.originalEvent.shiftKey?l-d:l+d;s.options.doubleClickZoom==="center"?s.setZoom(m):s.setZoomAround(i.containerPoint,m)}});ce.addInitHook("addHandler","doubleClickZoom",Ef),ce.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Mf=nn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new En(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}oe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ie(this._map._container,"leaflet-grab"),Ie(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=$(this._map.options.maxBounds);this._offsetLimit=H(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),l=this._initialWorldOffset,d=this._draggable._newPos.x,m=(d-s+l)%i+s-l,y=(d+s+l)%i-s-l,T=Math.abs(m+l)<Math.abs(y+l)?m:y;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(i){var s=this._map,l=s.options,d=!l.inertia||i.noInertia||this._times.length<2;if(s.fire("dragend",i),d)s.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),y=(this._lastTime-this._times[0])/1e3,T=l.easeLinearity,j=m.multiplyBy(T/y),R=j.distanceTo([0,0]),O=Math.min(l.inertiaMaxSpeed,R),W=j.multiplyBy(O/R),te=O/(l.inertiaDeceleration*T),se=W.multiplyBy(-te/2).round();!se.x&&!se.y?s.fire("moveend"):(se=s._limitOffset(se,s.options.maxBounds),ae(function(){s.panBy(se,{duration:te,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});ce.addInitHook("addHandler","dragging",Mf),ce.mergeOptions({keyboard:!0,keyboardPanDelta:80});var jf=nn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),re(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),we(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,l=i.scrollTop||s.scrollTop,d=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(d,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},l=this.keyCodes,d,m;for(d=0,m=l.left.length;d<m;d++)s[l.left[d]]=[-1*i,0];for(d=0,m=l.right.length;d<m;d++)s[l.right[d]]=[i,0];for(d=0,m=l.down.length;d<m;d++)s[l.down[d]]=[0,i];for(d=0,m=l.up.length;d<m;d++)s[l.up[d]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},l=this.keyCodes,d,m;for(d=0,m=l.zoomIn.length;d<m;d++)s[l.zoomIn[d]]=i;for(d=0,m=l.zoomOut.length;d<m;d++)s[l.zoomOut[d]]=-i},_addHooks:function(){re(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){we(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,l=this._map,d;if(s in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(d=this._panKeys[s],i.shiftKey&&(d=P(d).multiplyBy(3)),l.options.maxBounds&&(d=l._limitOffset(P(d),l.options.maxBounds)),l.options.worldCopyJump){var m=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(d)));l.panTo(m)}else l.panBy(d)}else if(s in this._zoomKeys)l.setZoom(l.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;ai(i)}}});ce.addInitHook("addHandler","keyboard",jf),ce.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Af=nn.extend({addHooks:function(){re(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){we(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=nf(i),l=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var d=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),d),ai(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),l=this._map.options.zoomSnap||0;i._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,y=l?Math.ceil(m/l)*l:m,T=i._limitZoom(s+(this._delta>0?y:-y))-s;this._delta=0,this._startTime=null,T&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+T):i.setZoomAround(this._lastMousePos,s+T))}});ce.addInitHook("addHandler","scrollWheelZoom",Af);var Yx=600;ce.mergeOptions({tapHold:Y.touchNative&&Y.safari&&Y.mobile,tapTolerance:15});var Rf=nn.extend({addHooks:function(){re(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){we(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var s=i.touches[0];this._startPos=this._newPos=new I(s.clientX,s.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(re(document,"touchend",Ye),re(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Yx),re(document,"touchend touchcancel contextmenu",this._cancel,this),re(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){we(document,"touchend",Ye),we(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),we(document,"touchend touchcancel contextmenu",this._cancel,this),we(document,"touchmove",this._onMove,this)},_onMove:function(i){var s=i.touches[0];this._newPos=new I(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,s){var l=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});l._simulated=!0,s.target.dispatchEvent(l)}});ce.addInitHook("addHandler","tapHold",Rf),ce.mergeOptions({touchZoom:Y.touch,bounceAtZoomLimits:!0});var zf=nn.extend({addHooks:function(){oe(this._map._container,"leaflet-touch-zoom"),re(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ie(this._map._container,"leaflet-touch-zoom"),we(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var l=s.mouseEventToContainerPoint(i.touches[0]),d=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(l.add(d)._divideBy(2))),this._startDist=l.distanceTo(d),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),re(document,"touchmove",this._onTouchMove,this),re(document,"touchend touchcancel",this._onTouchEnd,this),Ye(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,l=s.mouseEventToContainerPoint(i.touches[0]),d=s.mouseEventToContainerPoint(i.touches[1]),m=l.distanceTo(d)/this._startDist;if(this._zoom=s.getScaleZoom(m,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&m<1||this._zoom>s.getMaxZoom()&&m>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var y=l._add(d)._divideBy(2)._subtract(this._centerPoint);if(m===1&&y.x===0&&y.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(y),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),be(this._animRequest);var T=u(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=ae(T,this,!0),Ye(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,be(this._animRequest),we(document,"touchmove",this._onTouchMove,this),we(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ce.addInitHook("addHandler","touchZoom",zf),ce.BoxZoom=Nf,ce.DoubleClickZoom=Ef,ce.Drag=Mf,ce.Keyboard=jf,ce.ScrollWheelZoom=Af,ce.TapHold=Rf,ce.TouchZoom=zf,n.Bounds=C,n.Browser=Y,n.CRS=q,n.Canvas=Pf,n.Circle=Ql,n.CircleMarker=Cs,n.Class=Q,n.Control=Zt,n.DivIcon=Sf,n.DivOverlay=rn,n.DomEvent=px,n.DomUtil=hx,n.Draggable=En,n.Evented=he,n.FeatureGroup=fn,n.GeoJSON=mn,n.GridLayer=Kr,n.Handler=nn,n.Icon=Fi,n.ImageOverlay=Ms,n.LatLng=Z,n.LatLngBounds=K,n.Layer=Wt,n.LayerGroup=Bi,n.LineUtil=Tx,n.Map=ce,n.Marker=Ps,n.Mixin=wx,n.Path=Mn,n.Point=I,n.PolyUtil=Sx,n.Polygon=Vi,n.Polyline=pn,n.Popup=js,n.PosAnimation=rf,n.Projection=Lx,n.Rectangle=Lf,n.Renderer=gn,n.SVG=Yr,n.SVGOverlay=wf,n.TileLayer=Ui,n.Tooltip=As,n.Transformation=ve,n.Util=pt,n.VideoOverlay=xf,n.bind=u,n.bounds=H,n.canvas=Cf,n.circle=Ix,n.circleMarker=zx,n.control=Wr,n.divIcon=Wx,n.extend=o,n.featureGroup=jx,n.geoJSON=_f,n.geoJson=Bx,n.gridLayer=$x,n.icon=Ax,n.imageOverlay=Fx,n.latLng=U,n.latLngBounds=$,n.layerGroup=Mx,n.map=mx,n.marker=Rx,n.point=P,n.polygon=Dx,n.polyline=Ox,n.popup=Ux,n.rectangle=qx,n.setOptions=k,n.stamp=f,n.svg=Tf,n.svgOverlay=Hx,n.tileLayer=bf,n.tooltip=Zx,n.transformation=_e,n.version=r,n.videoOverlay=Vx;var Xx=window.L;n.noConflict=function(){return window.L=Xx,this},window.L=n})})(nd,nd.exports);var Ai=nd.exports;const Cl=wg(Ai);function us(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function cs(e,t){return t==null?function(r,o){const a=M.useRef();return a.current||(a.current=e(r,o)),a}:function(r,o){const a=M.useRef();a.current||(a.current=e(r,o));const u=M.useRef(r),{instance:c}=a.current;return M.useEffect(function(){u.current!==r&&(t(c,r,u.current),u.current=r)},[c,r,o]),a}}function R_(e,t){M.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var a;(a=t.layerContainer)==null||a.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function z_(e){return function(n){const r=ls(),o=e(Pl(n,r),r);return L_(r.map,n.attribution),Oh(o.current,n.eventHandlers),R_(o.current,r),o}}function BT(e,t){const n=M.useRef();M.useEffect(function(){if(t.pathOptions!==n.current){const o=t.pathOptions??{};e.instance.setStyle(o),n.current=o}},[e,t])}function FT(e){return function(n){const r=ls(),o=e(Pl(n,r),r);return Oh(o.current,n.eventHandlers),R_(o.current,r),BT(o.current,n),o}}function VT(e){function t(o,a){return us(e(o),a)}const n=cs(t),r=OT(n);return A_(r)}function HT(e,t){const n=cs(e,t),r=z_(n);return j_(r)}function UT(e,t){const n=cs(e),r=DT(n,t);return IT(r)}function ZT(e,t){const n=cs(e,t),r=FT(n);return j_(r)}function WT(e,t){const n=cs(e,t),r=z_(n);return A_(r)}function $T(e,t,n){const{opacity:r,zIndex:o}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),o!=null&&o!==n.zIndex&&e.setZIndex(o)}function I_(){return ls().map}function id(){return id=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},id.apply(this,arguments)}function GT({bounds:e,boundsOptions:t,center:n,children:r,className:o,id:a,placeholder:u,style:c,whenReady:f,zoom:p,...g},v){const[_]=M.useState({className:o,id:a,style:c}),[b,E]=M.useState(null);M.useImperativeHandle(v,()=>(b==null?void 0:b.map)??null,[b]);const k=M.useCallback(w=>{if(w!==null&&b===null){const x=new Ai.Map(w,g);n!=null&&p!=null?x.setView(n,p):e!=null&&x.fitBounds(e,t),f!=null&&x.whenReady(f),E(zT(x))}},[]);M.useEffect(()=>()=>{b==null||b.map.remove()},[b]);const N=b?gr.createElement(M_,{value:b},r):u??null;return gr.createElement("div",id({},_,{ref:k}),N)}const O_=M.forwardRef(GT),_a=HT(function({position:t,...n},r){const o=new Ai.Marker(t,n);return us(o,N_(r,{overlayContainer:o}))},function(t,n,r){n.position!==r.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==r.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==r.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==r.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==r.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),xg=ZT(function({positions:t,...n},r){const o=new Ai.Polyline(t,n);return us(o,N_(r,{overlayContainer:o}))},function(t,n,r){n.positions!==r.positions&&t.setLatLngs(n.positions)}),$i=UT(function(t,n){const r=new Ai.Popup(t,n.overlayContainer);return us(r,n)},function(t,n,{position:r},o){M.useEffect(function(){const{instance:u}=t;function c(p){p.popup===u&&(u.update(),o(!0))}function f(p){p.popup===u&&o(!1)}return n.map.on({popupopen:c,popupclose:f}),n.overlayContainer==null?(r!=null&&u.setLatLng(r),u.openOn(n.map)):n.overlayContainer.bindPopup(u),function(){var g;n.map.off({popupopen:c,popupclose:f}),(g=n.overlayContainer)==null||g.unbindPopup(),n.map.removeLayer(u)}},[t,n,o,r])}),D_=WT(function({url:t,...n},r){const o=new Ai.TileLayer(t,Pl(n,r));return us(o,r)},function(t,n,r){$T(t,n,r);const{url:o}=n;o!=null&&o!==r.url&&t.setUrl(o)}),KT=VT(function(t){return new Ai.Control.Zoom(t)});function qT(e,t){let n="#0F4C4C",r="rgba(15, 76, 76, 0.35)";const o=(e||"").toLowerCase();o==="critical"?(n="#DC2626",r="rgba(220, 38, 38, 0.4)"):o==="high"?(n="#C6A15B",r="rgba(198, 161, 91, 0.4)"):o==="moderate"&&(n="#6F8F72",r="rgba(111, 143, 114, 0.4)");const a=`
    <div class="custom-leaflet-marker" style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
      <div class="marker-pulse" style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: ${r}; animation: marker-ring-pulse 2s infinite ease-out;"></div>
      <div class="marker-pin" style="position: relative; width: 22px; height: 22px; border-radius: 50%; background: ${n}; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.25); display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 10px; font-weight: bold;">
        ${t==="Flood"?"🌊":t==="Landslide"?"⛰️":t==="Road Blockage"?"🚧":"⚠️"}
      </div>
    </div>
  `;return Cl.divIcon({html:a,className:"custom-incident-marker-container",iconSize:[34,34],iconAnchor:[17,17],popupAnchor:[0,-18]})}function YT({center:e,zoom:t}){const n=I_();return gr.useEffect(()=>{e&&n.flyTo(e,t||7.5,{duration:1.2})},[e,t,n]),null}function XT({incidents:e=[],selectedIncidentId:t,onSelectIncident:n}){const[r,o]=M.useState("All"),[a,u]=M.useState("All"),[c,f]=M.useState([26.15,92.9]),[p,g]=M.useState(7.2),v=["All","Assam","Arunachal Pradesh","Meghalaya","Nagaland","Manipur","Mizoram","Tripura","Sikkim"],_=["All","Landslide","Flood","Road Blockage","Road Damage"],b={Assam:[26.2006,92.9376],"Arunachal Pradesh":[27.5861,92.4173],Meghalaya:[25.467,91.3662],Nagaland:[25.7511,94.1086],Manipur:[24.6637,93.9063],Mizoram:[23.1645,92.9376],Tripura:[23.8315,91.2868],Sikkim:[27.533,88.5122]},E=N=>{o(N),N==="All"?(f([26.15,92.9]),g(7.2)):b[N]&&(f(b[N]),g(8.5))},k=e.filter(N=>{const w=r==="All"||N.state===r,x=a==="All"||N.type===a;return w&&x});return h.jsxs("div",{className:"map-view-container card",children:[h.jsxs("div",{className:"map-controls-header",children:[h.jsxs("div",{className:"filter-group",children:[h.jsxs("div",{className:"filter-label",children:[h.jsx(WS,{size:14}),h.jsx("span",{children:"State Filter:"})]}),h.jsx("div",{className:"filter-pills-scroll",children:v.map(N=>h.jsx("button",{className:`filter-pill ${r===N?"active":""}`,onClick:()=>E(N),children:N},N))})]}),h.jsxs("div",{className:"filter-group-types",children:[h.jsx("span",{className:"type-label",children:"Incident Type:"}),h.jsx("select",{className:"type-select",value:a,onChange:N=>u(N.target.value),children:_.map(N=>h.jsx("option",{value:N,children:N==="All"?"All Incidents":N},N))})]})]}),h.jsxs("div",{className:"leaflet-map-wrapper",children:[h.jsxs(O_,{center:c,zoom:p,scrollWheelZoom:!1,zoomControl:!1,style:{width:"100%",height:"100%"},children:[h.jsx(KT,{position:"bottomright"}),h.jsx(YT,{center:c,zoom:p}),h.jsx(D_,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:18}),k.map(N=>{const w=qT(N.severityLevel||N.severity,N.type);return h.jsx(_a,{position:[N.lat,N.lng],icon:w,eventHandlers:{click:()=>{n&&n(N)}},children:h.jsx($i,{className:"custom-incident-popup",children:h.jsxs("div",{className:"popup-card",children:[h.jsxs("div",{className:"popup-top",children:[h.jsxs("div",{className:"popup-type-group",children:[h.jsx("span",{className:`badge badge-${N.severityLevel||"high"}`,children:N.severity}),h.jsx("span",{className:"popup-demo-tag",children:"SIMULATED / DEMO"})]}),h.jsxs("div",{className:"popup-risk-badge",children:[h.jsx("span",{className:"risk-num",children:N.riskScore}),h.jsx("span",{className:"risk-denom",children:"/100 RISK"})]})]}),h.jsx("h3",{className:"popup-title font-serif",children:N.title}),h.jsxs("div",{className:"popup-location-line",children:[h.jsx($o,{size:14,className:"pin-icon"}),h.jsxs("span",{children:[h.jsx("strong",{children:N.highway}),", ",N.state]})]}),h.jsx("p",{className:"popup-desc",children:N.description}),h.jsxs("div",{className:"popup-metrics-grid",children:[h.jsxs("div",{className:"metric-box",children:[h.jsxs("div",{className:"metric-lbl",children:[h.jsx(Yy,{size:12}),h.jsx("span",{children:"Clearance Est."})]}),h.jsx("div",{className:"metric-val",children:N.clearanceTime})]}),h.jsxs("div",{className:"metric-box",children:[h.jsxs("div",{className:"metric-lbl",children:[h.jsx(DS,{size:12}),h.jsx("span",{children:"Reported"})]}),h.jsx("div",{className:"metric-val",children:N.reportedAt})]})]}),h.jsxs("div",{className:"popup-ai-recommendation",children:[h.jsxs("div",{className:"ai-rec-header",children:[h.jsx(Pr,{size:13,className:"sparkle-icon"}),h.jsx("span",{children:"AI RECOMMENDATION"})]}),h.jsx("p",{className:"ai-rec-body",children:N.recommendation})]})]})})},N.id)})]}),h.jsxs("div",{className:"map-legend",children:[h.jsx("span",{className:"legend-title",children:"Vulnerability Index"}),h.jsxs("div",{className:"legend-items",children:[h.jsxs("div",{className:"legend-item",children:[h.jsx("span",{className:"legend-color-dot dot-critical"}),h.jsx("span",{children:"Critical (Red)"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx("span",{className:"legend-color-dot dot-high"}),h.jsx("span",{children:"High (Gold)"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx("span",{className:"legend-color-dot dot-moderate"}),h.jsx("span",{children:"Moderate (Sage)"})]}),h.jsxs("div",{className:"legend-item",children:[h.jsx("span",{className:"legend-color-dot dot-safe"}),h.jsx("span",{children:"Safe (Teal)"})]})]})]}),h.jsxs("div",{className:"map-active-badge",children:[h.jsx(kr,{size:14,className:"active-nav-icon"}),h.jsxs("span",{children:["Showing ",k.length," of ",e.length," regional alerts"]})]})]}),h.jsx("style",{children:`
        .map-view-container {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          overflow: hidden;
        }

        .map-controls-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 280px;
          overflow: hidden;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          white-space: nowrap;
        }

        .filter-pills-scroll {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: thin;
        }

        .filter-pill {
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          background: var(--color-ivory-dark);
          color: var(--color-teal);
        }

        .filter-pill.active {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
        }

        .filter-group-types {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .type-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal-muted);
          white-space: nowrap;
        }

        .type-select {
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: var(--color-ivory);
          font-weight: 600;
          font-size: 0.82rem;
          color: var(--color-teal);
          outline: none;
        }

        .leaflet-map-wrapper {
          position: relative;
          width: 100%;
          height: 560px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .leaflet-map-wrapper {
            height: 420px;
          }
        }

        .map-legend {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--color-border);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        @media (max-width: 640px) {
          .map-legend {
            display: none;
          }
        }

        .legend-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-light);
        }

        .legend-items {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }

        .legend-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-critical { background: var(--status-critical); }
        .dot-high { background: var(--color-gold); }
        .dot-moderate { background: var(--color-sage); }
        .dot-safe { background: var(--color-teal); }

        .map-active-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(15, 76, 76, 0.9);
          color: var(--color-white);
          backdrop-filter: blur(8px);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          z-index: 1000;
          box-shadow: var(--shadow-sm);
        }

        .active-nav-icon {
          color: var(--color-gold);
        }

        /* Popup Custom Styling */
        .popup-card {
          width: 290px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .popup-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .popup-type-group {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .popup-demo-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--color-charcoal-light);
          background: var(--color-ivory);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .popup-risk-badge {
          display: flex;
          align-items: baseline;
          gap: 2px;
          font-weight: 700;
        }

        .risk-num {
          font-size: 1.15rem;
          color: var(--color-teal);
          font-family: var(--font-serif);
        }

        .risk-denom {
          font-size: 0.65rem;
          color: var(--color-charcoal-light);
        }

        .popup-title {
          font-size: 1.05rem;
          line-height: 1.25;
          color: var(--color-teal);
        }

        .popup-location-line {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
        }

        .pin-icon {
          color: var(--color-sage);
          flex-shrink: 0;
        }

        .popup-desc {
          font-size: 0.82rem;
          color: var(--color-charcoal-muted);
          line-height: 1.4;
          background: var(--color-ivory);
          padding: 0.5rem 0.65rem;
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--color-gold);
        }

        .popup-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-top: 0.2rem;
        }

        .metric-box {
          background: var(--color-ivory);
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .metric-lbl {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--color-charcoal-light);
        }

        .metric-val {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-top: 2px;
        }

        .popup-ai-recommendation {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.2);
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-sm);
          margin-top: 0.25rem;
        }

        .ai-rec-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--color-teal);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .sparkle-icon {
          color: var(--color-gold);
        }

        .ai-rec-body {
          font-size: 0.78rem;
          color: var(--color-teal-dark);
          line-height: 1.35;
          font-weight: 500;
        }
      `})]})}const QT=[{id:"inc-01",type:"Landslide",title:"LANDSLIDE ALERT",highway:"NH-29 (Kohima - Dimapur)",state:"Nagaland",lat:25.7511,lng:93.9217,riskScore:82,severity:"HIGH",severityLevel:"high",clearanceTime:"6–12 hours",recommendation:"Use alternate route via Niuland - Kohima bypass or hold freight at Chumukedima checkpoint.",affectedVehicles:"Heavy Multi-Axle Trucks halted",reportedAt:"28 mins ago",description:"Major rockfall and debris accumulation blocking both carriageways near Pagala Pahar section.",isSimulated:!0},{id:"inc-02",type:"Landslide",title:"ACTIVE LANDSLIDE & MUDFLOW",highway:"NH-13 (Trans-Arunachal Hwy)",state:"Arunachal Pradesh",lat:27.5861,lng:92.4173,riskScore:91,severity:"CRITICAL",severityLevel:"critical",clearanceTime:"18–24 hours",recommendation:"Immediate halt for all military and commercial convoys. Divert via Orang-Kalaktang link.",affectedVehicles:"All transit suspended",reportedAt:"12 mins ago",description:"Slumping slope washed out a 45-meter section of road formation after 72 hours of continuous rainfall near Sela approach.",isSimulated:!0},{id:"inc-03",type:"Flood",title:"RIVER OVERFLOW & WATERLOGGING",highway:"NH-27 (Siliguri - Guwahati Arterial)",state:"Assam",lat:26.4719,lng:91.0284,riskScore:68,severity:"MODERATE",severityLevel:"moderate",clearanceTime:"3–5 hours",recommendation:"Proceed with low-gear caution; axle clearance below 0.6m prohibited until water recedes.",affectedVehicles:"Slow single-lane passage",reportedAt:"1 hour ago",description:"Manas tributary backflow submerging culvert approaches near Barpeta junction with 1.2 feet of moving water.",isSimulated:!0},{id:"inc-04",type:"Road Damage",title:"PAVEMENT SUBSIDENCE & CAVING",highway:"NH-06 (Shillong - Silchar)",state:"Meghalaya",lat:25.1852,lng:92.3501,riskScore:76,severity:"HIGH",severityLevel:"high",clearanceTime:"8–14 hours",recommendation:"Limit payload under 16 tons; priority clearance given to petroleum and oxygen tankers.",affectedVehicles:"Single-file convoy escort",reportedAt:"2 hours ago",description:"Deep road shoulder erosion in East Jaintia Hills due to heavy sulfuric runoff and torrential showers.",isSimulated:!0},{id:"inc-05",type:"Road Blockage",title:"FALLEN TREES & HIGHWAY OBSTRUCTION",highway:"NH-102 (Imphal - Moreh Border)",state:"Manipur",lat:24.4921,lng:94.0155,riskScore:52,severity:"MODERATE",severityLevel:"moderate",clearanceTime:"2–4 hours",recommendation:"Transit through Kakching bypass. Clearance teams actively deployed with hydraulic saws.",affectedVehicles:"Light commercial allowed",reportedAt:"45 mins ago",description:"Sudden squall uprooted three aged teak trees across the pavement near Wangjing corridor.",isSimulated:!0},{id:"inc-06",type:"Landslide",title:"SLOPE INSTABILITY & SINKHOLE",highway:"NH-10 (Sevoke - Gangtok Life-Line)",state:"Sikkim",lat:27.2014,lng:88.5122,riskScore:88,severity:"CRITICAL",severityLevel:"critical",clearanceTime:"12–16 hours",recommendation:"Traffic diverted via Damdim - Lava - Algarah route. Checkpoint monitoring enabled.",affectedVehicles:"All heavy trailers diverted",reportedAt:"3 hours ago",description:"Teesta river bank erosion triggered steep slide at 29th Mile. Road foundation partially undermined.",isSimulated:!0},{id:"inc-07",type:"Road Blockage",title:"DISABLED FREIGHT CONTAINER",highway:"NH-08 (Teliamura - Agartala)",state:"Tripura",lat:23.8344,lng:91.6428,riskScore:35,severity:"SAFE",severityLevel:"safe",clearanceTime:"1–2 hours",recommendation:"Normal speeds restored shortly. Heavy recovery vehicle on-scene.",affectedVehicles:"Controlled bypass open",reportedAt:"15 mins ago",description:"Jackknifed 14-wheeler container on Atharamura hill climb. Left lane open for overtaking.",isSimulated:!0},{id:"inc-08",type:"Road Damage",title:"BRIDGE EXPANSION JOINT REPAIR",highway:"NH-54 / NH-306 (Silchar - Aizawl)",state:"Mizoram",lat:24.0811,lng:92.7301,riskScore:58,severity:"MODERATE",severityLevel:"moderate",clearanceTime:"4–6 hours",recommendation:"Cross bridge one truck at a time at under 10 km/h speed limit.",affectedVehicles:"Alternating stop-and-go",reportedAt:"4 hours ago",description:"Emergency structural plate welding on Bailey Bridge approach before Vairengte gate.",isSimulated:!0}],B_="safarnama_incidents_v1";function F_(){try{const e=localStorage.getItem(B_);if(e)return JSON.parse(e)}catch(e){console.warn("Could not read from localStorage:",e)}return QT}function JT(e){try{localStorage.setItem(B_,JSON.stringify(e))}catch(t){console.warn("Could not save to localStorage:",t)}}function eL(e){const t=F_(),n={id:`inc-${Date.now()}`,type:e.type||"Landslide",title:e.title||`${e.type.toUpperCase()} DISRUPTION DETECTED`,highway:e.highway||"NH-27 Corridor",state:e.state||"Assam",lat:e.lat||26.2+(Math.random()-.5)*1.5,lng:e.lng||92.5+(Math.random()-.5)*2,riskScore:e.riskScore||85,severity:e.severity||"HIGH",severityLevel:(e.severity||"high").toLowerCase(),clearanceTime:e.clearanceTime||"8–14 hours",recommendation:e.recommendation||"Immediate route reassessment required. Advise convoy halt.",affectedVehicles:e.affectedVehicles||"Commercial freight restricted",reportedAt:"Just now",description:e.description||"Reported disruption on mountainous highway sector.",imageUrl:e.imageUrl||null,isSimulated:!0,userReported:!0},r=[n,...t];return JT(r),n}async function tL(e,t="Landslide"){return new Promise(n=>{setTimeout(()=>{let r=t,o="HIGH",a=87,u="Immediate route reassessment required. Deploy heavy road clearing machinery.",c=94.8,f=["Structural asphalt caving","Loose scree debris ~40 cu.m","Impaired drainage gutter"];t==="Flood"?(r="Flash Flood Inundation",o="CRITICAL",a=92,u="Submerged pavement hazard; high velocity runoff exceeding 1.2 m/s. Convoys halt immediately.",c=96.2,f=["Water crest overtopping highway","Culvert silt blockage","Loss of traction profile"]):t==="Road Damage"?(r="Road Surface Fissure & Caving",o="HIGH",a=79,u="Restrict multi-axle freight over 18 tons; single-lane convoy control advised.",c=91.5,f=["Transverse crack width >12cm","Shoulder detachment","Sub-base washout"]):t==="Road Blockage"&&(r="Heavy Vehicle / Debris Obstruction",o="MODERATE",a=64,u="Bypass clearance in progress. Estimated single-lane opening within 2 hours.",c=93,f=["Physical obstacle across both lanes","Emergency recovery active"]),n({detected:r,severity:o,riskScore:a,confidence:c,recommendation:u,visualDefects:f,isDemoAI:!0,disclaimer:"Simulated SafarNama Vision Model (Edge-ResNet50 v2.4 prototype demo)"})},2200)})}function nL(){const[e,t]=M.useState([]),[n,r]=M.useState(null),[o,a]=M.useState("");M.useEffect(()=>{const c=F_();t(c)},[]);const u=e.filter(c=>c.title.toLowerCase().includes(o.toLowerCase())||c.highway.toLowerCase().includes(o.toLowerCase())||c.state.toLowerCase().includes(o.toLowerCase()));return h.jsxs("div",{className:"page-dashboard",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"dashboard-header",children:[h.jsxs("div",{className:"dashboard-header-text",children:[h.jsx("span",{className:"section-tag",children:"Logistics Control Tower"}),h.jsx("h1",{className:"section-title",children:"SafarNama Intelligence Dashboard"}),h.jsx("p",{className:"section-subtitle",children:"Real-time logistics visibility and disruption intelligence for the North Eastern Region."})]}),h.jsxs("div",{className:"dashboard-header-actions",children:[h.jsxs(_t,{to:"/report",className:"btn btn-gold",children:[h.jsx(FS,{size:16}),h.jsx("span",{children:"Report Disruption"})]}),h.jsxs(_t,{to:"/route-ai",className:"btn btn-primary",children:[h.jsx(kr,{size:16}),h.jsx("span",{children:"Analyze Route"})]})]})]}),h.jsxs("div",{className:"stats-grid grid-4",children:[h.jsx(ia,{label:"Active Routes",value:"24",subtext:"Monitored commercial corridors",trend:"+3 new corridors",icon:kr,color:"teal",delay:.1}),h.jsx(ia,{label:"Active Disruptions",value:e.length<10?`0${e.length}`:`${e.length}`,subtext:"Landslides, floods & blocks",trend:"Live telemetry",icon:Ka,color:"gold",delay:.2}),h.jsx(ia,{label:"Routes Optimized",value:"138",subtext:"Bypasses generated this week",trend:"96.2% safe transit",icon:BS,color:"sage",delay:.3}),h.jsx(ia,{label:"Regional Risk",value:"64 / 100",subtext:"Multi-factor vulnerability score",trend:"Monsoon elevated",icon:OS,color:"red",delay:.4})]}),h.jsxs("div",{className:"dashboard-main-grid",children:[h.jsx("div",{className:"map-column",children:h.jsx(XT,{incidents:e,selectedIncidentId:n==null?void 0:n.id,onSelectIncident:c=>r(c)})}),h.jsx("div",{className:"feed-column",children:h.jsxs("div",{className:"feed-card card",children:[h.jsxs("div",{className:"feed-header",children:[h.jsxs("div",{className:"feed-title-block",children:[h.jsx("h3",{className:"feed-title font-serif",children:"Active Disruption Feed"}),h.jsxs("span",{className:"feed-counter",children:[u.length," Events"]})]}),h.jsxs("div",{className:"feed-search-wrap",children:[h.jsx(qS,{size:14,className:"feed-search-icon"}),h.jsx("input",{type:"text",placeholder:"Filter highway, state...",value:o,onChange:c=>a(c.target.value),className:"feed-search-input"})]})]}),h.jsxs("div",{className:"feed-list-scroll",children:[u.map(c=>{const f=(n==null?void 0:n.id)===c.id;return h.jsxs(Je.div,{onClick:()=>r(c),className:`feed-item ${f?"selected":""}`,whileHover:{scale:1.01},children:[h.jsxs("div",{className:"feed-item-top",children:[h.jsx("span",{className:`badge badge-${c.severityLevel||"high"}`,children:c.severity}),h.jsxs("span",{className:"feed-time",children:[h.jsx(Yy,{size:11}),c.reportedAt]})]}),h.jsx("h4",{className:"feed-item-title",children:c.title}),h.jsxs("div",{className:"feed-item-meta",children:[h.jsx($o,{size:12,className:"meta-pin"}),h.jsxs("span",{children:[h.jsx("strong",{children:c.highway}),", ",c.state]})]}),h.jsxs("p",{className:"feed-item-rec",children:[h.jsx(Pr,{size:11,className:"text-gold"}),h.jsx("span",{children:c.recommendation})]}),h.jsxs("div",{className:"feed-item-footer",children:[h.jsxs("span",{className:"feed-risk",children:["Risk: ",h.jsxs("strong",{children:[c.riskScore,"/100"]})]}),h.jsxs("span",{className:"feed-clearance",children:["Est. ",c.clearanceTime]})]})]},c.id)}),u.length===0&&h.jsx("div",{className:"empty-feed",children:h.jsx("p",{children:"No incidents match your filter criteria."})})]})]})})]}),h.jsx("div",{className:"dashboard-weather-section",children:h.jsx(T_,{})})]}),h.jsx("style",{children:`
        .page-dashboard {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dashboard-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }

        .dashboard-header-text {
          max-width: 680px;
        }

        .dashboard-header-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .stats-grid {
          margin-bottom: 0.5rem;
        }

        .dashboard-main-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 1100px) {
          .dashboard-main-grid {
            grid-template-columns: 1fr;
          }
        }

        .map-column {
          width: 100%;
        }

        .feed-column {
          width: 100%;
        }

        .feed-card {
          padding: 1.25rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 660px;
        }

        .feed-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .feed-title-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feed-title {
          font-size: 1.15rem;
          color: var(--color-teal);
        }

        .feed-counter {
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--color-ivory);
          color: var(--color-teal);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .feed-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .feed-search-icon {
          position: absolute;
          left: 0.75rem;
          color: var(--color-charcoal-light);
          pointer-events: none;
        }

        .feed-search-input {
          width: 100%;
          padding: 0.45rem 0.75rem 0.45rem 2.2rem;
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          outline: none;
        }

        .feed-search-input:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .feed-list-scroll {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow-y: auto;
          max-height: 520px;
          padding-right: 4px;
        }

        .feed-item {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .feed-item:hover {
          background: var(--color-white);
          border-color: var(--color-teal);
          box-shadow: var(--shadow-sm);
        }

        .feed-item.selected {
          background: var(--status-safe-soft);
          border-color: var(--color-teal);
        }

        .feed-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .feed-time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
        }

        .feed-item-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-charcoal);
          line-height: 1.3;
        }

        .feed-item-meta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--color-charcoal-muted);
        }

        .meta-pin {
          color: var(--color-sage);
          flex-shrink: 0;
        }

        .feed-item-rec {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.76rem;
          color: var(--color-teal);
          background: rgba(15, 76, 76, 0.05);
          padding: 0.35rem 0.5rem;
          border-radius: 4px;
          line-height: 1.3;
        }

        .feed-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.35rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.08);
          font-size: 0.74rem;
          color: var(--color-charcoal-light);
        }

        .empty-feed {
          text-align: center;
          padding: 2rem 1rem;
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
        }

        .dashboard-weather-section {
          margin-top: 1.5rem;
        }
      `})]})}const iL=[{id:"guwahati",name:"Guwahati",state:"Assam",lat:26.1445,lng:91.7362},{id:"tawang",name:"Tawang",state:"Arunachal Pradesh",lat:27.5861,lng:91.8594},{id:"shillong",name:"Shillong",state:"Meghalaya",lat:25.5788,lng:91.8933},{id:"silchar",name:"Silchar",state:"Assam",lat:24.8333,lng:92.7789},{id:"imphal",name:"Imphal",state:"Manipur",lat:24.817,lng:93.9368},{id:"kohima",name:"Kohima",state:"Nagaland",lat:25.6751,lng:94.1086},{id:"gangtok",name:"Gangtok",state:"Sikkim",lat:27.3389,lng:88.6065},{id:"siliguri",name:"Siliguri",state:"West Bengal / Gateway",lat:26.7271,lng:88.3953}],rd={"guwahati-tawang":{from:"Guwahati",to:"Tawang",originCoord:[26.1445,91.7362],destCoord:[27.5861,91.8594],mapCenter:[26.85,92.15],mapZoom:8,primaryRoute:{name:"BCT Arterial (Balipara-Charduar-Tawang)",via:"Via NH-13 & High Bepa Ridge Pass",riskScore:82,distance:"465 km",eta:"14h 20m",terrainRisk:"HIGH",weatherRisk:"HIGH",roadRisk:"HIGH",status:"HIGH RISK",color:"#DC2626",hazardSummary:"Active mudslide at Sela Pass lower approach; 42mm torrential rainfall ongoing; unstable road shoulder with single lane squeeze.",coordinates:[[26.1445,91.7362],[26.241,91.852],[26.435,92.031],[26.65,92.51],[26.712,92.798],[26.82,92.78],[27.01,92.65],[27.18,92.52],[27.264,92.42],[27.355,92.24],[27.502,92.1],[27.545,91.98],[27.5861,91.8594]],hazardPoints:[{lat:27.502,lng:92.1,label:"CRITICAL: Landslide & Submerged Culvert",type:"Landslide"},{lat:27.264,lng:92.42,label:"SEVERE: Dense Fog & Rockfall Risk",type:"Weather"}]},recommendedRoute:{name:"AI Optimized Kalaktang-Rupa Valley Bypass",via:"Via Orang - Kalaktang - Shergaon Highway",riskScore:34,distance:"492 km",eta:"15h 05m",terrainRisk:"MODERATE",weatherRisk:"LOW",roadRisk:"LOW",status:"RECOMMENDED",color:"#0F4C4C",hazardSummary:"Stabilized southern valley corridor with newly reinforced retaining walls, lower gradient climbs, and clear radar visibility.",coordinates:[[26.1445,91.7362],[26.31,91.92],[26.54,92.14],[26.71,92.17],[26.96,92.11],[27.12,92.26],[27.2,92.39],[27.36,92.25],[27.51,92.05],[27.56,91.94],[27.5861,91.8594]],advantages:["Avoids 2 active landslide zones at Sela lower cut","Lower average precipitation by 58% over next 18 hours","2-lane newly surfaced military highway with high axle clearance","Reduces breakdown risk by 62%"]}},"silchar-imphal":{from:"Silchar",to:"Imphal",originCoord:[24.8333,92.7789],destCoord:[24.817,93.9368],mapCenter:[24.82,93.35],mapZoom:9,primaryRoute:{name:"NH-37 Jiribam-Imphal Highway",via:"Via Noney & Makru River Canyons",riskScore:78,distance:"242 km",eta:"9h 30m",terrainRisk:"HIGH",weatherRisk:"MODERATE",roadRisk:"HIGH",status:"HIGH RISK",color:"#DC2626",hazardSummary:"Heavy mud slurries along Noney construction zones; slow convoy clearance.",coordinates:[[24.8333,92.7789],[24.802,93.12],[24.78,93.42],[24.81,93.68],[24.817,93.9368]],hazardPoints:[{lat:24.81,lng:93.68,label:"HIGH: Slope slump near Noney railway cut",type:"Landslide"}]},recommendedRoute:{name:"AI Recommended Old Cachar Valley Loop",via:"Via Khongsang - Rengpang Bypass",riskScore:41,distance:"260 km",eta:"8h 55m",terrainRisk:"MODERATE",weatherRisk:"LOW",roadRisk:"MODERATE",status:"RECOMMENDED",color:"#0F4C4C",hazardSummary:"Stabilized roadbed with dedicated recovery vehicles posted every 15 km.",coordinates:[[24.8333,92.7789],[24.802,93.12],[24.89,93.38],[24.87,93.72],[24.817,93.9368]],advantages:["Bypasses active Noney sliding bank","Better cell network continuity for GPS telemetry","Saves 35 minutes overall due to smoother vehicle flow"]}}},V_=[{id:1,text:"SCANNING TERRAIN",detail:"Ingesting InSAR satellite elevation models & slope stability gradients"},{id:2,text:"ANALYZING WEATHER",detail:"Polling Open-Meteo live rainfall, cloudburst radars & wind vectors"},{id:3,text:"CHECKING ROAD CONDITIONS",detail:"Aggregating NHIDCL telemetry, BRO road clearances & patrol sensor logs"},{id:4,text:"ASSESSING DISRUPTION RISK",detail:"Calculating multi-factor vulnerability index (soil saturation + gradient)"},{id:5,text:"GENERATING ALTERNATIVE ROUTES",detail:"Synthesizing stabilized lower-elevation bypasses & safe convoy waypoints"}];async function rL(e,t){const n=`${e.toLowerCase()}-${t.toLowerCase()}`,r=rd[n]||rd["guwahati-tawang"];return await new Promise(o=>setTimeout(o,800)),{success:!0,query:{from:e,to:t},...r}}function oL(){return iL}const sL=Cl.divIcon({html:'<div style="background:#0F4C4C; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 8px rgba(0,0,0,0.3); font-size:12px; font-weight:bold;">A</div>',className:"route-marker-origin",iconSize:[28,28],iconAnchor:[14,14]}),aL=Cl.divIcon({html:'<div style="background:#C6A15B; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 3px 8px rgba(0,0,0,0.3); font-size:12px; font-weight:bold;">B</div>',className:"route-marker-dest",iconSize:[28,28],iconAnchor:[14,14]}),lL=Cl.divIcon({html:'<div style="background:#DC2626; color:white; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 0 10px rgba(220,38,38,0.7); font-size:11px;">⚠️</div>',className:"route-marker-hazard",iconSize:[24,24],iconAnchor:[12,12]});function uL({bounds:e}){const t=I_();return M.useEffect(()=>{e&&e.length>0&&t.fitBounds(e,{padding:[40,40]})},[e,t]),null}function cL({routeData:e,isAnalyzing:t,analysisStep:n,analysisComplete:r}){var v,_;const{primaryRoute:o,recommendedRoute:a,originCoord:u,destCoord:c,from:f,to:p}=e,g=[...(o==null?void 0:o.coordinates)||[],...(a==null?void 0:a.coordinates)||[]];return h.jsxs("div",{className:"route-analysis-wrapper",children:[h.jsx(sb,{children:t&&h.jsxs(Je.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"ai-scanner-card card",children:[h.jsxs("div",{className:"scanner-header",children:[h.jsxs("div",{className:"scanner-badge",children:[h.jsx(th,{size:18,className:"animate-spin-slow"}),h.jsx("span",{children:"SAFARNAMA AI INFERENCE ENGINE"})]}),h.jsxs("span",{className:"scanner-phase-count",children:["Stage ",n+1," of 5"]})]}),h.jsx("div",{className:"steps-progress-track",children:h.jsx("div",{className:"steps-progress-bar",style:{width:`${(n+1)/5*100}%`}})}),h.jsx("div",{className:"analysis-steps-list",children:V_.map((b,E)=>{const k=E===n,N=E<n;return h.jsxs(Je.div,{initial:{opacity:.3},animate:{opacity:k?1:N?.8:.25,x:k?8:0},transition:{duration:.3},className:`step-item ${k?"current":""} ${N?"completed":""}`,children:[h.jsx("div",{className:"step-bullet",children:N?h.jsx(Bc,{size:16,className:"bullet-done"}):k?h.jsx("div",{className:"bullet-active-spinner"}):h.jsx("div",{className:"bullet-idle"})}),h.jsxs("div",{className:"step-text-wrap",children:[h.jsx("span",{className:"step-name",children:b.text}),k&&h.jsx("span",{className:"step-detail-active",children:b.detail})]})]},b.id)})})]})}),r&&!t&&h.jsxs(Je.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"analysis-results-section",children:[h.jsxs("div",{className:"comparison-grid",children:[h.jsxs("div",{className:"route-card primary-route-card card",children:[h.jsxs("div",{className:"route-card-banner banner-danger",children:[h.jsxs("div",{className:"banner-left",children:[h.jsx(Ka,{size:16}),h.jsx("span",{children:"PRIMARY ROUTE"})]}),h.jsx("span",{className:"status-badge badge-critical",children:o.status})]}),h.jsxs("div",{className:"route-card-body",children:[h.jsx("h3",{className:"route-card-title",children:o.name}),h.jsx("p",{className:"route-via",children:o.via}),h.jsxs("div",{className:"route-stat-triplet",children:[h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"Risk Score"}),h.jsxs("span",{className:"triplet-val text-critical font-serif",children:[o.riskScore,"/100"]})]}),h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"Distance"}),h.jsx("span",{className:"triplet-val font-serif",children:o.distance})]}),h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"ETA"}),h.jsx("span",{className:"triplet-val font-serif",children:o.eta})]})]}),h.jsxs("div",{className:"risk-factors-list",children:[h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Terrain Risk"}),h.jsx("span",{className:"badge badge-critical",children:o.terrainRisk})]}),h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Weather Risk"}),h.jsx("span",{className:"badge badge-critical",children:o.weatherRisk})]}),h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Road Risk"}),h.jsx("span",{className:"badge badge-critical",children:o.roadRisk})]})]}),h.jsxs("div",{className:"hazard-warning-box",children:[h.jsx(Ka,{size:15,className:"text-critical"}),h.jsx("p",{children:o.hazardSummary})]})]})]}),h.jsxs("div",{className:"route-card recommended-route-card card",children:[h.jsxs("div",{className:"route-card-banner banner-success",children:[h.jsxs("div",{className:"banner-left",children:[h.jsx(Pr,{size:16,className:"text-gold"}),h.jsx("span",{children:"AI RECOMMENDED ROUTE"})]}),h.jsx("span",{className:"status-badge badge-safe",children:a.status})]}),h.jsxs("div",{className:"route-card-body",children:[h.jsx("h3",{className:"route-card-title",children:a.name}),h.jsx("p",{className:"route-via",children:a.via}),h.jsxs("div",{className:"route-stat-triplet",children:[h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"Risk Score"}),h.jsxs("span",{className:"triplet-val text-teal font-serif",children:[a.riskScore,"/100"]})]}),h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"Distance"}),h.jsx("span",{className:"triplet-val font-serif",children:a.distance})]}),h.jsxs("div",{className:"triplet-item",children:[h.jsx("span",{className:"triplet-lbl",children:"ETA"}),h.jsx("span",{className:"triplet-val font-serif",children:a.eta})]})]}),h.jsxs("div",{className:"risk-factors-list",children:[h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Terrain Risk"}),h.jsx("span",{className:"badge badge-moderate",children:a.terrainRisk})]}),h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Weather Risk"}),h.jsx("span",{className:"badge badge-safe",children:a.weatherRisk})]}),h.jsxs("div",{className:"factor-row",children:[h.jsx("span",{className:"factor-name",children:"Road Risk"}),h.jsx("span",{className:"badge badge-safe",children:a.roadRisk})]})]}),h.jsxs("div",{className:"advantages-box",children:[h.jsx("span",{className:"advantages-title",children:"SafarNama AI Optimizations:"}),h.jsx("ul",{className:"advantages-list",children:(v=a.advantages)==null?void 0:v.map((b,E)=>h.jsxs("li",{children:[h.jsx(Bc,{size:13,className:"adv-check"}),h.jsx("span",{children:b})]},E))})]})]})]})]}),h.jsxs(Je.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},className:"route-map-card card",children:[h.jsxs("div",{className:"route-map-header",children:[h.jsxs("div",{className:"map-title-block",children:[h.jsx(kr,{size:18,className:"text-teal"}),h.jsx("h4",{className:"map-title",children:"Corridor Vector Visualizer"}),h.jsxs("span",{className:"map-corridor-tag",children:[f," ",h.jsx(Ti,{size:12})," ",p]})]}),h.jsxs("div",{className:"route-map-legend",children:[h.jsxs("div",{className:"legend-entry",children:[h.jsx("span",{className:"line-sample line-primary"}),h.jsxs("span",{children:["Primary (High Risk: ",o.riskScore,")"]})]}),h.jsxs("div",{className:"legend-entry",children:[h.jsx("span",{className:"line-sample line-recommended"}),h.jsxs("span",{children:["AI Recommended (",a.riskScore,")"]})]})]})]}),h.jsx("div",{className:"leaflet-route-map-frame",children:h.jsxs(O_,{bounds:g,scrollWheelZoom:!1,zoomControl:!0,style:{width:"100%",height:"100%"},children:[h.jsx(uL,{bounds:g}),h.jsx(D_,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),h.jsx(xg,{positions:o.coordinates,pathOptions:{color:"#DC2626",weight:5,opacity:.85,dashArray:"8, 6"},children:h.jsx($i,{children:h.jsxs("div",{className:"route-popup-info",children:[h.jsx("strong",{children:o.name}),h.jsxs("p",{children:["Status: HIGH RISK (Risk: ",o.riskScore,"/100)"]})]})})}),h.jsx(xg,{positions:a.coordinates,pathOptions:{color:"#0F4C4C",weight:6,opacity:.95},children:h.jsx($i,{children:h.jsxs("div",{className:"route-popup-info",children:[h.jsx("strong",{children:a.name}),h.jsxs("p",{children:["Status: RECOMMENDED (Risk: ",a.riskScore,"/100)"]})]})})}),h.jsx(_a,{position:u,icon:sL,children:h.jsx($i,{children:h.jsxs("strong",{children:["Origin: ",f]})})}),h.jsx(_a,{position:c,icon:aL,children:h.jsx($i,{children:h.jsxs("strong",{children:["Destination: ",p]})})}),(_=o.hazardPoints)==null?void 0:_.map((b,E)=>h.jsx(_a,{position:[b.lat,b.lng],icon:lL,children:h.jsx($i,{children:h.jsxs("div",{className:"hazard-popup",children:[h.jsx("strong",{children:"HAZARD INTERCEPT"}),h.jsx("p",{children:b.label})]})})},E))]})})]})]}),h.jsx("style",{children:`
        .route-analysis-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        /* AI Scanner Sequence */
        .ai-scanner-card {
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-teal);
          padding: 2rem;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .scanner-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .scanner-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-teal);
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .scanner-phase-count {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-gold);
          background: var(--color-gold-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }

        .steps-progress-track {
          width: 100%;
          height: 6px;
          background: var(--color-ivory);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .steps-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-sage) 0%, var(--color-teal) 100%);
          border-radius: var(--radius-full);
          transition: width 0.4s ease;
        }

        .analysis-steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-md);
          background: var(--color-ivory-light);
          border: 1px solid transparent;
        }

        .step-item.current {
          background: var(--status-safe-soft);
          border-color: rgba(15, 76, 76, 0.2);
        }

        .step-item.completed {
          background: var(--color-white);
        }

        .bullet-done {
          color: var(--color-sage);
        }

        .bullet-active-spinner {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid var(--color-teal);
          border-top-color: transparent;
          animation: spin 0.8s linear infinite;
        }

        .bullet-idle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #D1D5DB;
        }

        .step-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .step-name {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: 0.04em;
        }

        .step-detail-active {
          font-size: 0.78rem;
          color: var(--color-teal);
          margin-top: 2px;
          font-weight: 500;
        }

        /* Results & Comparison */
        .analysis-results-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .route-card {
          padding: 0;
          overflow: hidden;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
        }

        .primary-route-card {
          border-top: 4px solid var(--status-critical);
        }

        .recommended-route-card {
          border-top: 4px solid var(--color-teal);
        }

        .route-card-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .banner-danger {
          background: var(--status-critical-soft);
          color: var(--status-critical);
        }

        .banner-success {
          background: var(--status-safe-soft);
          color: var(--color-teal);
        }

        .banner-left {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .route-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }

        .route-card-title {
          font-size: 1.25rem;
          color: var(--color-charcoal);
          line-height: 1.25;
        }

        .route-via {
          font-size: 0.84rem;
          color: var(--color-charcoal-light);
          margin-top: -0.5rem;
        }

        .route-stat-triplet {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          padding: 0.85rem;
          background: var(--color-ivory);
          border-radius: var(--radius-md);
        }

        .triplet-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .triplet-lbl {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
        }

        .triplet-val {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-charcoal);
        }

        .text-critical {
          color: var(--status-critical) !important;
        }

        .text-teal {
          color: var(--color-teal) !important;
        }

        .text-gold {
          color: var(--color-gold) !important;
        }

        .risk-factors-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .factor-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          padding-bottom: 0.35rem;
          border-bottom: 1px dashed rgba(24, 37, 37, 0.08);
        }

        .hazard-warning-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          background: var(--status-critical-soft);
          border: 1px solid rgba(220, 38, 38, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.75rem 0.9rem;
          font-size: 0.82rem;
          color: #991B1B;
          line-height: 1.4;
        }

        .advantages-box {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.15);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .advantages-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--color-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .advantages-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .advantages-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: var(--color-teal-dark);
          line-height: 1.35;
        }

        .adv-check {
          color: var(--color-sage);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Route Map Section */
        .route-map-card {
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .route-map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .map-title-block {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .map-title {
          font-size: 1.15rem;
          color: var(--color-teal);
        }

        .map-corridor-tag {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
        }

        .route-map-legend {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          flex-wrap: wrap;
        }

        .legend-entry {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .line-sample {
          width: 24px;
          height: 4px;
          border-radius: 2px;
        }

        .line-primary {
          background: #DC2626;
        }

        .line-recommended {
          background: #0F4C4C;
        }

        .leaflet-route-map-frame {
          width: 100%;
          height: 460px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .route-popup-info {
          padding: 0.25rem;
          font-size: 0.8rem;
        }

        .hazard-popup {
          padding: 0.25rem;
          color: #DC2626;
          font-size: 0.8rem;
        }
      `})]})}function dL(){const e=oL(),[t,n]=M.useState("Guwahati"),[r,o]=M.useState("Tawang"),[a,u]=M.useState(!1),[c,f]=M.useState(0),[p,g]=M.useState(!0),[v,_]=M.useState(rd["guwahati-tawang"]),b=async()=>{u(!0),g(!1),f(0);for(let N=0;N<V_.length;N++)f(N),await new Promise(w=>setTimeout(w,850));const k=await rL(t,r);_(k),u(!1),g(!0)},E=()=>{const k=t;n(r),o(k)};return h.jsxs("div",{className:"page-route-ai",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"route-ai-header",children:[h.jsx("span",{className:"section-tag",children:"Autonomous Geospatial Routing"}),h.jsx("h1",{className:"section-title font-serif",children:"AI Route Intelligence"}),h.jsx("p",{className:"section-subtitle",children:"Find safer, faster and more resilient routes across challenging NER terrain."})]}),h.jsxs("div",{className:"route-query-card card",children:[h.jsxs("div",{className:"query-inputs-row",children:[h.jsxs("div",{className:"input-group",children:[h.jsxs("label",{className:"input-label",children:[h.jsx($o,{size:14,className:"text-teal"}),h.jsx("span",{children:"Origin (From)"})]}),h.jsx("select",{value:t,onChange:k=>n(k.target.value),className:"hub-select font-serif",disabled:a,children:e.map(k=>h.jsxs("option",{value:k.name,children:[k.name," (",k.state,")"]},k.id))})]}),h.jsx("div",{className:"swap-button-wrap",children:h.jsx("button",{type:"button",className:"btn-swap",onClick:E,disabled:a,title:"Swap Origin and Destination",children:h.jsx(Ti,{size:18})})}),h.jsxs("div",{className:"input-group",children:[h.jsxs("label",{className:"input-label",children:[h.jsx($o,{size:14,className:"text-gold"}),h.jsx("span",{children:"Destination (To)"})]}),h.jsx("select",{value:r,onChange:k=>o(k.target.value),className:"hub-select font-serif",disabled:a,children:e.map(k=>h.jsxs("option",{value:k.name,children:[k.name," (",k.state,")"]},k.id))})]}),h.jsx("div",{className:"query-action-wrap",children:h.jsx("button",{className:"btn btn-primary btn-analyze",onClick:b,disabled:a,children:a?h.jsxs(h.Fragment,{children:[h.jsx(Ga,{size:17,className:"animate-spin"}),h.jsx("span",{children:"Analyzing Terrain..."})]}):h.jsxs(h.Fragment,{children:[h.jsx(Pr,{size:17,className:"text-gold"}),h.jsx("span",{children:"Analyze Route"})]})})})]}),h.jsxs("div",{className:"presets-strip",children:[h.jsx("span",{className:"presets-lbl",children:"NER Corridors:"}),h.jsx("button",{className:`preset-btn ${t==="Guwahati"&&r==="Tawang"?"active":""}`,onClick:()=>{n("Guwahati"),o("Tawang")},children:"Guwahati ⇄ Tawang (Default Demo)"}),h.jsx("button",{className:`preset-btn ${t==="Silchar"&&r==="Imphal"?"active":""}`,onClick:()=>{n("Silchar"),o("Imphal")},children:"Silchar ⇄ Imphal (NH-37)"})]})]}),h.jsx(cL,{routeData:v,isAnalyzing:a,analysisStep:c,analysisComplete:p})]}),h.jsx("style",{children:`
        .page-route-ai {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .route-ai-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .route-query-card {
          padding: 1.75rem 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: var(--shadow-md);
        }

        .query-inputs-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto;
          align-items: flex-end;
          gap: 1.25rem;
        }

        @media (max-width: 860px) {
          .query-inputs-row {
            grid-template-columns: 1fr;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .input-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-charcoal-muted);
        }

        .hub-select {
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-border);
          background: var(--color-ivory-light);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-teal);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .hub-select:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
          box-shadow: 0 0 0 3px rgba(15, 76, 76, 0.12);
        }

        .swap-button-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 0.5rem;
        }

        .btn-swap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-teal);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-swap:hover {
          background: var(--color-teal);
          color: var(--color-white);
          transform: rotate(180deg);
        }

        .query-action-wrap {
          display: flex;
          align-items: flex-end;
        }

        .btn-analyze {
          padding: 0.88rem 2rem;
          font-size: 1.02rem;
          height: 52px;
          width: 100%;
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .presets-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          padding-top: 0.75rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.08);
        }

        .presets-lbl {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
          letter-spacing: 0.05em;
        }

        .preset-btn {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal-muted);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          color: var(--color-teal);
          border-color: var(--color-teal);
        }

        .preset-btn.active {
          background: var(--status-safe-soft);
          color: var(--color-teal);
          border-color: var(--color-teal);
          font-weight: 700;
        }
      `})]})}var Dh={};(function e(t,n,r,o){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=function(){if(!t.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),C=P.getContext("2d");C.fillRect(0,0,1,1);var H=P.transferToImageBitmap();C.createPattern(H,"no-repeat")}catch{return!1}return!0}();function f(){}function p(P){var C=n.exports.Promise,H=C!==void 0?C:t.Promise;return typeof H=="function"?new H(P):(P(f,f),null)}var g=function(P,C){return{transform:function(H){if(P)return H;if(C.has(H))return C.get(H);var K=new OffscreenCanvas(H.width,H.height),$=K.getContext("2d");return $.drawImage(H,0,0),C.set(H,K),K},clear:function(){C.clear()}}}(c,new Map),v=function(){var P=Math.floor(16.666666666666668),C,H,K={},$=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(Z){var U=Math.random();return K[U]=requestAnimationFrame(function q(ie){$===ie||$+P-1<ie?($=ie,delete K[U],Z()):K[U]=requestAnimationFrame(q)}),U},H=function(Z){K[Z]&&cancelAnimationFrame(K[Z])}):(C=function(Z){return setTimeout(Z,P)},H=function(Z){return clearTimeout(Z)}),{frame:C,cancel:H}}(),_=function(){var P,C,H={};function K($){function Z(U,q){$.postMessage({options:U||{},callback:q})}$.init=function(q){var ie=q.transferControlToOffscreen();$.postMessage({canvas:ie},[ie])},$.fire=function(q,ie,ge){if(C)return Z(q,null),C;var xe=Math.random().toString(36).slice(2);return C=p(function(ve){function _e(ze){ze.data.callback===xe&&(delete H[xe],$.removeEventListener("message",_e),C=null,g.clear(),ge(),ve())}$.addEventListener("message",_e),Z(q,xe),H[xe]=_e.bind(null,{data:{callback:xe}})}),C},$.reset=function(){$.postMessage({reset:!0});for(var q in H)H[q](),delete H[q]}}return function(){if(P)return P;if(!r&&a){var $=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([$])))}catch(Z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Z),null}K(P)}return P}}(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(P,C){return C?C(P):P}function k(P){return P!=null}function N(P,C,H){return E(P&&k(P[C])?P[C]:b[C],H)}function w(P){return P<0?0:Math.floor(P)}function x(P,C){return Math.floor(Math.random()*(C-P))+P}function S(P){return parseInt(P,16)}function A(P){return P.map(z)}function z(P){var C=String(P).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:S(C.substring(0,2)),g:S(C.substring(2,4)),b:S(C.substring(4,6))}}function B(P){var C=N(P,"origin",Object);return C.x=N(C,"x",Number),C.y=N(C,"y",Number),C}function V(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function D(P){var C=P.getBoundingClientRect();P.width=C.width,P.height=C.height}function ne(P){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=P,C}function X(P,C,H,K,$,Z,U,q,ie){P.save(),P.translate(C,H),P.rotate(Z),P.scale(K,$),P.arc(0,0,1,U,q,ie),P.restore()}function ae(P){var C=P.angle*(Math.PI/180),H=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-C+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function be(P,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var H=C.tick++/C.totalTicks,K=C.x+C.random*C.tiltCos,$=C.y+C.random*C.tiltSin,Z=C.wobbleX+C.random*C.tiltCos,U=C.wobbleY+C.random*C.tiltSin;if(P.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-H)+")",P.beginPath(),u&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))P.fill(he(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(Z-K)*.1,Math.abs(U-$)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var q=Math.PI/10*C.wobble,ie=Math.abs(Z-K)*.1,ge=Math.abs(U-$)*.1,xe=C.shape.bitmap.width*C.scalar,ve=C.shape.bitmap.height*C.scalar,_e=new DOMMatrix([Math.cos(q)*ie,Math.sin(q)*ie,-Math.sin(q)*ge,Math.cos(q)*ge,C.x,C.y]);_e.multiplySelf(new DOMMatrix(C.shape.matrix));var ze=P.createPattern(g.transform(C.shape.bitmap),"no-repeat");ze.setTransform(_e),P.globalAlpha=1-H,P.fillStyle=ze,P.fillRect(C.x-xe/2,C.y-ve/2,xe,ve),P.globalAlpha=1}else if(C.shape==="circle")P.ellipse?P.ellipse(C.x,C.y,Math.abs(Z-K)*C.ovalScalar,Math.abs(U-$)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):X(P,C.x,C.y,Math.abs(Z-K)*C.ovalScalar,Math.abs(U-$)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ue=Math.PI/2*3,qe=4*C.scalar,mt=8*C.scalar,lt=C.x,gt=C.y,hn=5,kt=Math.PI/hn;hn--;)lt=C.x+Math.cos(ue)*mt,gt=C.y+Math.sin(ue)*mt,P.lineTo(lt,gt),ue+=kt,lt=C.x+Math.cos(ue)*qe,gt=C.y+Math.sin(ue)*qe,P.lineTo(lt,gt),ue+=kt;else P.moveTo(Math.floor(C.x),Math.floor(C.y)),P.lineTo(Math.floor(C.wobbleX),Math.floor($)),P.lineTo(Math.floor(Z),Math.floor(U)),P.lineTo(Math.floor(K),Math.floor(C.wobbleY));return P.closePath(),P.fill(),C.tick<C.totalTicks}function pt(P,C,H,K,$){var Z=C.slice(),U=P.getContext("2d"),q,ie,ge=p(function(xe){function ve(){q=ie=null,U.clearRect(0,0,K.width,K.height),g.clear(),$(),xe()}function _e(){r&&!(K.width===o.width&&K.height===o.height)&&(K.width=P.width=o.width,K.height=P.height=o.height),!K.width&&!K.height&&(H(P),K.width=P.width,K.height=P.height),U.clearRect(0,0,K.width,K.height),Z=Z.filter(function(ze){return be(U,ze)}),Z.length?q=v.frame(_e):ve()}q=v.frame(_e),ie=ve});return{addFettis:function(xe){return Z=Z.concat(xe),ge},canvas:P,promise:ge,reset:function(){q&&v.cancel(q),ie&&ie()}}}function Q(P,C){var H=!P,K=!!N(C||{},"resize"),$=!1,Z=N(C,"disableForReducedMotion",Boolean),U=a&&!!N(C||{},"useWorker"),q=U?_():null,ie=H?V:D,ge=P&&q?!!P.__confetti_initialized:!1,xe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ve;function _e(ue,qe,mt){for(var lt=N(ue,"particleCount",w),gt=N(ue,"angle",Number),hn=N(ue,"spread",Number),kt=N(ue,"startVelocity",Number),Ir=N(ue,"decay",Number),ds=N(ue,"gravity",Number),hs=N(ue,"drift",Number),fs=N(ue,"colors",A),Tl=N(ue,"ticks",Number),Ri=N(ue,"shapes"),ps=N(ue,"scalar"),ms=!!N(ue,"flat"),gs=B(ue),Or=lt,zi=[],Ll=P.width*gs.x,vs=P.height*gs.y;Or--;)zi.push(ae({x:Ll,y:vs,angle:gt,spread:hn,startVelocity:kt,color:fs[Or%fs.length],shape:Ri[x(0,Ri.length)],ticks:Tl,decay:Ir,gravity:ds,drift:hs,scalar:ps,flat:ms}));return ve?ve.addFettis(zi):(ve=pt(P,zi,ie,qe,mt),ve.promise)}function ze(ue){var qe=Z||N(ue,"disableForReducedMotion",Boolean),mt=N(ue,"zIndex",Number);if(qe&&xe)return p(function(kt){kt()});H&&ve?P=ve.canvas:H&&!P&&(P=ne(mt),document.body.appendChild(P)),K&&!ge&&ie(P);var lt={width:P.width,height:P.height};q&&!ge&&q.init(P),ge=!0,q&&(P.__confetti_initialized=!0);function gt(){if(q){var kt={getBoundingClientRect:function(){if(!H)return P.getBoundingClientRect()}};ie(kt),q.postMessage({resize:{width:kt.width,height:kt.height}});return}lt.width=lt.height=null}function hn(){ve=null,K&&($=!1,t.removeEventListener("resize",gt)),H&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,ge=!1)}return K&&!$&&($=!0,t.addEventListener("resize",gt,!1)),q?q.fire(ue,lt,hn):_e(ue,lt,hn)}return ze.reset=function(){q&&q.reset(),ve&&ve.reset()},ze}var Be;function me(){return Be||(Be=Q(null,{useWorker:!0,resize:!0})),Be}function he(P,C,H,K,$,Z,U){var q=new Path2D(P),ie=new Path2D;ie.addPath(q,new DOMMatrix(C));var ge=new Path2D;return ge.addPath(ie,new DOMMatrix([Math.cos(U)*$,Math.sin(U)*$,-Math.sin(U)*Z,Math.cos(U)*Z,H,K])),ge}function I(P){if(!u)throw new Error("path confetti are not supported in this browser");var C,H;typeof P=="string"?C=P:(C=P.path,H=P.matrix);var K=new Path2D(C),$=document.createElement("canvas"),Z=$.getContext("2d");if(!H){for(var U=1e3,q=U,ie=U,ge=0,xe=0,ve,_e,ze=0;ze<U;ze+=2)for(var ue=0;ue<U;ue+=2)Z.isPointInPath(K,ze,ue,"nonzero")&&(q=Math.min(q,ze),ie=Math.min(ie,ue),ge=Math.max(ge,ze),xe=Math.max(xe,ue));ve=ge-q,_e=xe-ie;var qe=10,mt=Math.min(qe/ve,qe/_e);H=[mt,0,0,mt,-Math.round(ve/2+q)*mt,-Math.round(_e/2+ie)*mt]}return{type:"path",path:C,matrix:H}}function J(P){var C,H=1,K="#000000",$='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?C=P:(C=P.text,H="scalar"in P?P.scalar:H,$="fontFamily"in P?P.fontFamily:$,K="color"in P?P.color:K);var Z=10*H,U=""+Z+"px "+$,q=new OffscreenCanvas(Z,Z),ie=q.getContext("2d");ie.font=U;var ge=ie.measureText(C),xe=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),ve=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),_e=2,ze=ge.actualBoundingBoxLeft+_e,ue=ge.actualBoundingBoxAscent+_e;xe+=_e+_e,ve+=_e+_e,q=new OffscreenCanvas(xe,ve),ie=q.getContext("2d"),ie.font=U,ie.fillStyle=K,ie.fillText(C,ze,ue);var qe=1/H;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[qe,0,0,qe,-xe*qe/2,-ve*qe/2]}}n.exports=function(){return me().apply(this,arguments)},n.exports.reset=function(){me().reset()},n.exports.create=Q,n.exports.shapeFromPath=I,n.exports.shapeFromText=J})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Dh,!1);const hL=Dh.exports;Dh.exports.create;function fL(){var pt;const e=Zy(),[t,n]=M.useState(null),[r,o]=M.useState("Landslide"),[a,u]=M.useState(""),[c,f]=M.useState("NH-29 (Kohima-Dimapur corridor)"),[p,g]=M.useState("Nagaland"),[v,_]=M.useState("25.7511, 93.9217"),[b,E]=M.useState(!1),[k,N]=M.useState(null),[w,x]=M.useState(!1),[S,A]=M.useState(null),z=["Landslide","Flood","Road Blockage","Road Damage","Accident","Other"],B=["Assam","Arunachal Pradesh","Meghalaya","Nagaland","Manipur","Mizoram","Tripura","Sikkim"],V=async()=>{const Q="/images/ner_landslide_incident.jpg";n(Q),await ne(Q,r)},D=async Q=>{var he;const Be=(he=Q.target.files)==null?void 0:he[0];if(!Be)return;const me=new FileReader;me.onload=async()=>{const I=me.result;n(I),await ne(I,r)},me.readAsDataURL(Be)},ne=async(Q,Be)=>{E(!0),N(null);const me=await tL(Q,Be);N(me),E(!1)},X=Q=>{o(Q),t&&ne(t,Q)},ae=Q=>{Q.preventDefault(),x(!0);const Be=v.split(",").map(P=>parseFloat(P.trim())),me=isNaN(Be[0])?26.2:Be[0],he=isNaN(Be[1])?92.8:Be[1],I={type:r,title:`${r.toUpperCase()} ALERT — ${c}`,highway:c,state:p,lat:me,lng:he,riskScore:k?k.riskScore:87,severity:k?k.severity:"HIGH",clearanceTime:"6–12 hours",recommendation:k?k.recommendation:"Immediate route reassessment required.",description:a||"Severe road obstruction observed in mountain sector.",imageUrl:t},J=eL(I);A(J),x(!1),hL({particleCount:80,spread:60,origin:{y:.6},colors:["#0F4C4C","#6F8F72","#C6A15B"]})},be=()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(Q=>{_(`${Q.coords.latitude.toFixed(4)}, ${Q.coords.longitude.toFixed(4)}`)},()=>{_("25.7511, 93.9217")})};return h.jsxs("div",{className:"page-incident-report",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"report-header",children:[h.jsx("span",{className:"section-tag",children:"Crowdsourced Logistics Intelligence"}),h.jsx("h1",{className:"section-title font-serif",children:"Report a Disruption"}),h.jsx("p",{className:"section-subtitle",children:"Upload incident photos from field convoys. SafarNama AI detects obstacle dimensions, predicts clearance times, and alerts incoming freight."})]}),S&&h.jsxs(Je.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"success-banner card",children:[h.jsx("div",{className:"success-icon-box",children:h.jsx(Bc,{size:32,className:"text-sage"})}),h.jsxs("div",{className:"success-text",children:[h.jsx("h3",{className:"success-title font-serif",children:"Incident Dispatched to Active Intelligence Feed!"}),h.jsxs("p",{className:"success-desc",children:["Your report for ",h.jsx("strong",{children:S.highway})," (",S.state,") has been calibrated with risk score ",h.jsxs("strong",{children:[S.riskScore,"/100"]})," and is now visible on the live regional map."]})]}),h.jsxs("div",{className:"success-actions",children:[h.jsxs("button",{className:"btn btn-primary",onClick:()=>e("/dashboard"),children:[h.jsx("span",{children:"View on Dashboard Map"}),h.jsx(Ti,{size:16})]}),h.jsx("button",{className:"btn btn-secondary",onClick:()=>{A(null),n(null),N(null),u("")},children:"Report Another"})]})]}),h.jsxs("div",{className:"report-layout-grid",children:[h.jsxs("div",{className:"form-card card",children:[h.jsx("h3",{className:"form-title font-serif",children:"Disruption Details"}),h.jsx("p",{className:"form-desc",children:"Provide ground observations for the NER logistics mesh."}),h.jsxs("form",{onSubmit:ae,className:"report-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Road Incident Imagery"}),h.jsxs("div",{className:"upload-dropzone",children:[h.jsx("input",{type:"file",accept:"image/*",onChange:D,id:"incident-file-input",className:"file-input-hidden"}),t?h.jsxs("div",{className:"preview-container",children:[h.jsx("img",{src:t,alt:"Road incident preview",className:"preview-img"}),h.jsxs("label",{htmlFor:"incident-file-input",className:"change-img-btn",children:[h.jsx(im,{size:14}),h.jsx("span",{children:"Change Photo"})]})]}):h.jsxs("label",{htmlFor:"incident-file-input",className:"dropzone-label",children:[h.jsx(VS,{size:36,className:"upload-icon"}),h.jsx("span",{className:"upload-primary-text",children:"Click to upload photo or drag & drop"}),h.jsx("span",{className:"upload-subtext",children:"JPG, PNG or WEBP from field mobile camera"})]})]}),h.jsx("div",{className:"sample-btn-strip",children:h.jsxs("button",{type:"button",className:"btn-sample",onClick:V,children:[h.jsx(Pr,{size:14,className:"text-gold"}),h.jsx("span",{children:"Load NER Landslide Sample Photo"})]})})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Incident Type"}),h.jsx("div",{className:"type-buttons-grid",children:z.map(Q=>h.jsx("button",{type:"button",className:`type-btn ${r===Q?"active":""}`,onClick:()=>X(Q),children:h.jsx("span",{children:Q})},Q))})]}),h.jsxs("div",{className:"form-row-2",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"State"}),h.jsx("select",{value:p,onChange:Q=>g(Q.target.value),className:"form-select",children:B.map(Q=>h.jsx("option",{value:Q,children:Q},Q))})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Highway / Sector"}),h.jsx("input",{type:"text",value:c,onChange:Q=>f(Q.target.value),placeholder:"e.g. NH-29 Pagala Pahar",className:"form-input",required:!0})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsxs("div",{className:"label-with-action",children:[h.jsx("label",{className:"form-label",children:"GPS Coordinates (Lat, Long)"}),h.jsxs("button",{type:"button",className:"btn-locate",onClick:be,children:[h.jsx($o,{size:12}),h.jsx("span",{children:"Auto-Detect Location"})]})]}),h.jsx("input",{type:"text",value:v,onChange:Q=>_(Q.target.value),placeholder:"25.7511, 93.9217",className:"form-input",required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"form-label",children:"Field Description"}),h.jsx("textarea",{rows:"3",value:a,onChange:Q=>u(Q.target.value),placeholder:"Describe road blockage width, whether passenger or freight vehicles can squeeze through, ongoing rain, etc.",className:"form-textarea"})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-submit",disabled:w,children:w?h.jsxs(h.Fragment,{children:[h.jsx(Ga,{size:17,className:"animate-spin"}),h.jsx("span",{children:"Broadcasting Alert..."})]}):h.jsxs(h.Fragment,{children:[h.jsx(ZS,{size:17}),h.jsx("span",{children:"Submit Incident to SafarNama Mesh"})]})})]})]}),h.jsx("div",{className:"vision-panel-wrapper",children:h.jsxs("div",{className:"vision-card card",children:[h.jsxs("div",{className:"vision-header",children:[h.jsxs("div",{className:"vision-title-wrap",children:[h.jsx("div",{className:"ai-chip",children:"AI"}),h.jsx("h3",{className:"vision-title font-serif",children:"Simulated AI Vision Analysis"})]}),h.jsx("span",{className:"prototype-badge",children:"PROTOTYPE DEMO"})]}),h.jsx("p",{className:"vision-intro",children:"Demonstrates edge-inferencing model analyzing road structural failures from uploaded field imagery."}),b&&h.jsxs("div",{className:"vision-scanning-box",children:[h.jsxs("div",{className:"radar-sweep-box",children:[h.jsx("div",{className:"radar-line"}),h.jsx(Ga,{size:28,className:"animate-spin text-teal"})]}),h.jsx("span",{className:"scanning-text",children:"Analyzing road image..."}),h.jsx("span",{className:"scanning-sub",children:"Running segmentation & fissure depth estimation"})]}),k&&!b&&h.jsxs(Je.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.4},className:"vision-results-content",children:[h.jsxs("div",{className:"vision-stat-row",children:[h.jsxs("div",{className:"stat-pill",children:[h.jsx("span",{className:"pill-lbl",children:"Detected"}),h.jsx("strong",{className:"pill-val text-teal",children:k.detected})]}),h.jsxs("div",{className:"stat-pill",children:[h.jsx("span",{className:"pill-lbl",children:"Severity"}),h.jsx("span",{className:"badge badge-critical",children:k.severity})]}),h.jsxs("div",{className:"stat-pill",children:[h.jsx("span",{className:"pill-lbl",children:"Risk Score"}),h.jsxs("strong",{className:"pill-val font-serif text-critical",children:[k.riskScore,"/100"]})]})]}),h.jsxs("div",{className:"confidence-strip",children:[h.jsx("span",{className:"conf-lbl",children:"Model Confidence:"}),h.jsx("div",{className:"conf-bar-track",children:h.jsx("div",{className:"conf-bar-fill",style:{width:`${k.confidence}%`}})}),h.jsxs("span",{className:"conf-val",children:[k.confidence,"%"]})]}),h.jsxs("div",{className:"defects-box",children:[h.jsx("span",{className:"defects-title",children:"Detected Structural Anomalies:"}),h.jsx("ul",{className:"defects-list",children:(pt=k.visualDefects)==null?void 0:pt.map((Q,Be)=>h.jsxs("li",{children:[h.jsx(Ka,{size:12,className:"text-gold"}),h.jsx("span",{children:Q})]},Be))})]}),h.jsxs("div",{className:"rec-box",children:[h.jsxs("div",{className:"rec-hdr",children:[h.jsx(Pr,{size:14,className:"text-gold"}),h.jsx("span",{children:"Recommendation"})]}),h.jsx("p",{className:"rec-text",children:k.recommendation})]}),h.jsxs("div",{className:"demo-disclaimer",children:[h.jsx($S,{size:13,className:"info-icon"}),h.jsx("span",{children:k.disclaimer})]})]}),!t&&!b&&!k&&h.jsxs("div",{className:"vision-idle-state",children:[h.jsx(im,{size:38,className:"idle-icon"}),h.jsxs("p",{className:"idle-text",children:["Upload a road photo or click ",h.jsx("strong",{children:'"Load NER Landslide Sample Photo"'})," to activate simulated computer vision inspection."]})]})]})})]})]}),h.jsx("style",{children:`
        .page-incident-report {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .report-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 1rem auto;
        }

        .success-banner {
          background: var(--status-safe-soft);
          border: 1.5px solid var(--color-teal);
          padding: 1.75rem;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .success-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .text-sage {
          color: var(--color-sage);
        }

        .success-text {
          flex: 1;
          min-width: 260px;
        }

        .success-title {
          font-size: 1.25rem;
          color: var(--color-teal);
          margin-bottom: 0.25rem;
        }

        .success-desc {
          font-size: 0.88rem;
          color: var(--color-charcoal-muted);
        }

        .success-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .report-layout-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 960px) {
          .report-layout-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card {
          padding: 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-title {
          font-size: 1.35rem;
          color: var(--color-teal);
        }

        .form-desc {
          font-size: 0.86rem;
          color: var(--color-charcoal-muted);
          margin-top: -0.8rem;
        }

        .report-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: 0.02em;
        }

        .label-with-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .btn-locate {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-teal);
        }

        .btn-locate:hover {
          text-decoration: underline;
        }

        .file-input-hidden {
          display: none;
        }

        .upload-dropzone {
          border: 2px dashed var(--color-border);
          border-radius: var(--radius-lg);
          background: var(--color-ivory-light);
          padding: 1.5rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .upload-dropzone:hover {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .dropzone-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .upload-icon {
          color: var(--color-sage);
        }

        .upload-primary-text {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--color-teal);
        }

        .upload-subtext {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
        }

        .preview-container {
          position: relative;
          max-height: 220px;
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .preview-img {
          width: 100%;
          height: 100%;
          max-height: 220px;
          object-fit: cover;
          display: block;
        }

        .change-img-btn {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(15, 76, 76, 0.9);
          color: var(--color-white);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
        }

        .sample-btn-strip {
          margin-top: 0.25rem;
        }

        .btn-sample {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-teal);
          background: var(--color-ivory);
          border: 1px solid var(--color-border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .btn-sample:hover {
          background: var(--color-ivory-dark);
        }

        .type-buttons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        @media (max-width: 480px) {
          .type-buttons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .type-btn {
          padding: 0.55rem 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: var(--color-ivory);
          color: var(--color-charcoal);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .type-btn:hover {
          border-color: var(--color-teal);
        }

        .type-btn.active {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }

        .form-input, .form-select, .form-textarea {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          background: var(--color-ivory-light);
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--color-teal);
          background: var(--color-white);
        }

        .btn-submit {
          padding: 0.95rem;
          font-size: 1.02rem;
          margin-top: 0.5rem;
        }

        /* Vision Panel Styles */
        .vision-card {
          padding: 2rem;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-top: 4px solid var(--color-gold);
        }

        .vision-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .vision-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ai-chip {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: var(--color-gold);
          color: var(--color-white);
          font-size: 0.72rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vision-title {
          font-size: 1.2rem;
          color: var(--color-teal);
        }

        .prototype-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-gold);
          background: var(--color-gold-soft);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(198, 161, 91, 0.35);
        }

        .vision-intro {
          font-size: 0.84rem;
          color: var(--color-charcoal-muted);
          line-height: 1.5;
        }

        .vision-scanning-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          gap: 1rem;
          background: var(--status-safe-soft);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-teal);
        }

        .radar-sweep-box {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanning-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .scanning-sub {
          font-size: 0.78rem;
          color: var(--color-charcoal-muted);
        }

        .vision-results-content {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .vision-stat-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .stat-pill {
          background: var(--color-ivory);
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: flex-start;
        }

        .pill-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-charcoal-light);
        }

        .pill-val {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .confidence-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.78rem;
        }

        .conf-lbl {
          font-weight: 600;
          color: var(--color-charcoal-muted);
        }

        .conf-bar-track {
          flex: 1;
          height: 6px;
          background: var(--color-ivory);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .conf-bar-fill {
          height: 100%;
          background: var(--color-sage);
          border-radius: var(--radius-full);
        }

        .conf-val {
          font-weight: 700;
          color: var(--color-teal);
        }

        .defects-box {
          background: var(--color-ivory-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .defects-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-charcoal-muted);
        }

        .defects-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .defects-list li {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--color-charcoal);
        }

        .rec-box {
          background: var(--status-safe-soft);
          border: 1px solid rgba(15, 76, 76, 0.2);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
        }

        .rec-hdr {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--color-teal);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .rec-text {
          font-size: 0.82rem;
          color: var(--color-teal-dark);
          line-height: 1.4;
          font-weight: 500;
        }

        .demo-disclaimer {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          color: var(--color-charcoal-light);
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(24, 37, 37, 0.1);
        }

        .info-icon {
          flex-shrink: 0;
          color: var(--color-gold);
        }

        .vision-idle-state {
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          background: var(--color-ivory-light);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-border);
        }

        .idle-icon {
          color: var(--color-sage);
        }

        .idle-text {
          font-size: 0.85rem;
          color: var(--color-charcoal-muted);
          max-width: 320px;
          line-height: 1.5;
        }
      `})]})}const pL=[{id:"t1",name:"Aarav Sharma",role:"Chief Logistics Architect & AI Lead",specialty:"Geospatial AI & Mountain Terrain Routing",bio:"Former senior transport modeler with 7+ years researching high-altitude supply chain resilience in the Eastern Himalayas.",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",initials:"AS",linkedin:"https://linkedin.com",github:"https://github.com"},{id:"t2",name:"Tenzing Norbu",role:"Himalayan Remote Sensing Specialist",specialty:"Satellite Radar (InSAR) & Slope Stability",bio:"Arunachal native specializing in real-time landslide slope kinematics and monsoon soil-moisture telemetry.",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",initials:"TN",linkedin:"https://linkedin.com",github:"https://github.com"},{id:"t3",name:"Priyanka Baruah",role:"Lead Full-Stack & Systems Engineer",specialty:"Distributed Edge Mesh & Offline GIS",bio:"Assam engineering graduate passionate about building fault-tolerant mobile GIS tools for patchy North East cellular corridors.",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",initials:"PB",linkedin:"https://linkedin.com",github:"https://github.com"},{id:"t4",name:"Kevisenuo Angami",role:"Field Operations & Highway Liaison",specialty:"NHIDCL & BRO Inter-agency Coordination",bio:"Based out of Kohima with hands-on experience coordinating emergency cargo convoys across NH-29 and NH-2.",image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",initials:"KA",linkedin:"https://linkedin.com",github:"https://github.com"},{id:"t5",name:"Debojit Roy",role:"Computer Vision & Road Inspection AI",specialty:"Multi-modal Vision Models & Edge Inference",bio:"Specialist in deep neural networks trained to detect road fissure depths, rockfall sizes, and flood crest levels from smartphone uploads.",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",initials:"DR",linkedin:"https://linkedin.com",github:"https://github.com"},{id:"t6",name:"Lalrinkimi Hmar",role:"Supply Chain Operations Research",specialty:"Perishable Logistics & Buffer Stocking",bio:"Mizoram native focusing on pharmaceutical and fresh produce cold-chain continuity during monsoon highway blockages.",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",initials:"LH",linkedin:"https://linkedin.com",github:"https://github.com"}];function mL({member:e,index:t=0}){return h.jsxs(Je.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:t*.08},className:"team-card card",children:[h.jsxs("div",{className:"team-avatar-wrapper",children:[h.jsx("img",{src:e.image,alt:e.name,className:"team-avatar-img",onError:n=>{n.target.style.display="none",n.target.nextSibling.style.display="flex"}}),h.jsx("div",{className:"avatar-fallback",style:{display:"none"},children:e.initials}),h.jsx("div",{className:"avatar-ring"})]}),h.jsxs("div",{className:"team-card-content",children:[h.jsx("h3",{className:"team-name font-serif",children:e.name}),h.jsx("span",{className:"team-role",children:e.role}),h.jsx("span",{className:"team-specialty",children:e.specialty}),h.jsx("p",{className:"team-bio",children:e.bio})]}),h.jsxs("div",{className:"team-card-socials",children:[h.jsx("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:`${e.name} on LinkedIn`,children:h.jsx(GS,{size:16})}),h.jsx("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:`${e.name} on GitHub`,children:h.jsx($a,{size:16})})]}),h.jsx("style",{children:`
        .team-card {
          padding: 2rem 1.75rem;
          border-radius: var(--radius-xl);
          background: var(--color-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(15, 76, 76, 0.25);
        }

        .team-avatar-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
        }

        .avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--color-teal);
          color: var(--color-gold);
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          align-items: center;
          justify-content: center;
          border: 3px solid var(--color-white);
          box-shadow: var(--shadow-md);
        }

        .avatar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px dashed var(--color-gold);
          opacity: 0.6;
          pointer-events: none;
          transition: transform 0.5s ease;
        }

        .team-card:hover .avatar-ring {
          transform: rotate(45deg);
          opacity: 1;
        }

        .team-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          flex: 1;
        }

        .team-name {
          font-size: 1.3rem;
          color: var(--color-teal);
        }

        .team-role {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--color-charcoal);
          letter-spacing: -0.01em;
        }

        .team-specialty {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--color-sage);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.45rem;
        }

        .team-bio {
          font-size: 0.84rem;
          color: var(--color-charcoal-muted);
          line-height: 1.55;
        }

        .team-card-socials {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
          width: 100%;
          justify-content: center;
        }

        .social-link {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--color-ivory);
          color: var(--color-charcoal-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: var(--color-teal);
          color: var(--color-white);
          border-color: var(--color-teal);
          transform: translateY(-2px);
        }
      `})]})}function gL(){return h.jsxs("div",{className:"page-team",children:[h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"team-header",children:[h.jsx("span",{className:"section-tag",children:"Human Intelligence & Engineering"}),h.jsx("h1",{className:"section-title font-serif",children:"Meet the Team"}),h.jsx("p",{className:"section-subtitle",children:"The team building intelligent logistics infrastructure for the North Eastern Region."})]}),h.jsx("div",{className:"team-cards-grid grid-3",children:pL.map((e,t)=>h.jsx(mL,{member:e,index:t},e.id))}),h.jsx("section",{className:"team-mission-card card",children:h.jsxs("div",{className:"mission-content",children:[h.jsxs("div",{className:"mission-badge",children:[h.jsx(HS,{size:16,className:"text-gold"}),h.jsx("span",{children:"THE SAFARNAMA CORE MISSION"})]}),h.jsx("h2",{className:"mission-title font-serif",children:"Bridging the Geography of the North East"}),h.jsx("p",{className:"mission-desc",children:"India's North Eastern Region is a magnificent tapestry of 8 states, 45 million citizens, and strategic international borders. Yet its commercial arteries remain vulnerable to sudden monsoonal flash-floods, seismic shifts, and high-altitude freezes."}),h.jsx("p",{className:"mission-desc",children:"Our multidisciplinary team unites remote sensing scientists from Arunachal, GIS systems engineers from Assam, and field liaison specialists from Nagaland to create a predictive, localized logistics intelligence network that keeps essential food, medical, and defense supply lines flowing."}),h.jsxs("div",{className:"mission-stats-strip",children:[h.jsxs("div",{className:"mission-stat",children:[h.jsx("span",{className:"stat-big font-serif",children:"8"}),h.jsx("span",{className:"stat-caption",children:"NER States Unified"})]}),h.jsxs("div",{className:"mission-stat",children:[h.jsx("span",{className:"stat-big font-serif",children:"14"}),h.jsx("span",{className:"stat-caption",children:"National Highways Monitored"})]}),h.jsxs("div",{className:"mission-stat",children:[h.jsx("span",{className:"stat-big font-serif",children:"< 1.2s"}),h.jsx("span",{className:"stat-caption",children:"Edge Inference Latency"})]}),h.jsxs("div",{className:"mission-stat",children:[h.jsx("span",{className:"stat-big font-serif",children:"100%"}),h.jsx("span",{className:"stat-caption",children:"Open Standards & Data Resilience"})]})]})]})})]}),h.jsx("style",{children:`
        .page-team {
          padding: 2.5rem 0 4rem 0;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .team-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .team-cards-grid {
          margin-bottom: 1rem;
        }

        .team-mission-card {
          background: linear-gradient(135deg, var(--color-white) 0%, var(--color-ivory-light) 100%);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 3.5rem 3rem;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 768px) {
          .team-mission-card {
            padding: 2.5rem 1.5rem;
          }
        }

        .mission-content {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .mission-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-teal);
          background: var(--status-safe-soft);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
        }

        .mission-title {
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          color: var(--color-teal);
          line-height: 1.2;
        }

        .mission-desc {
          font-size: 1.02rem;
          color: var(--color-charcoal-muted);
          line-height: 1.7;
        }

        .mission-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-top: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .mission-stats-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .mission-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-big {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-teal);
          line-height: 1;
        }

        .stat-caption {
          font-size: 0.78rem;
          color: var(--color-charcoal-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
      `})]})}function vL(){const{pathname:e}=Ar();return M.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function yL(){return h.jsxs(ES,{children:[h.jsx(vL,{}),h.jsxs("div",{className:"app-shell",children:[h.jsx(eb,{}),h.jsx("main",{className:"app-main",children:h.jsxs(bS,{children:[h.jsx(hi,{path:"/",element:h.jsx(_g,{})}),h.jsx(hi,{path:"/dashboard",element:h.jsx(nL,{})}),h.jsx(hi,{path:"/route-ai",element:h.jsx(dL,{})}),h.jsx(hi,{path:"/report",element:h.jsx(fL,{})}),h.jsx(hi,{path:"/team",element:h.jsx(gL,{})}),h.jsx(hi,{path:"*",element:h.jsx(_g,{})})]})}),h.jsx(tb,{})]}),h.jsx("style",{children:`
        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--color-ivory);
        }

        .app-main {
          flex: 1;
        }
      `})]})}Uu.createRoot(document.getElementById("root")).render(h.jsx(gr.StrictMode,{children:h.jsx(yL,{})}));
