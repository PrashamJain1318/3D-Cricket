(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var aR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function c_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},kl={},xm={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),u_=Symbol.for("react.portal"),h_=Symbol.for("react.fragment"),d_=Symbol.for("react.strict_mode"),f_=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),g_=Symbol.for("react.forward_ref"),v_=Symbol.for("react.suspense"),__=Symbol.for("react.memo"),x_=Symbol.for("react.lazy"),Nd=Symbol.iterator;function y_(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Mm={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||ym}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Xs.prototype;function yh(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||ym}var Sh=yh.prototype=new Em;Sh.constructor=yh;Sm(Sh,Xs.prototype);Sh.isPureReactComponent=!0;var Id=Array.isArray,Tm=Object.prototype.hasOwnProperty,Mh={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!wm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:qa,type:t,key:s,ref:a,props:r,_owner:Mh.current}}function S_(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function M_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dd=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M_(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qa:case u_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,Id(r)?(n="",t!=null&&(n=t.replace(Dd,"$&/")+"/"),qo(r,e,n,"",function(c){return c})):r!=null&&(Eh(r)&&(r=S_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Dd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Id(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=qo(s,e,n,l,r)}else if(l=y_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function E_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},$o={transition:null},T_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:$o,ReactCurrentOwner:Mh};function Rm(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!Eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Xs;Ke.Fragment=h_;Ke.Profiler=f_;Ke.PureComponent=yh;Ke.StrictMode=d_;Ke.Suspense=v_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;Ke.act=Rm;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Mh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:m_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p_,_context:t},t.Consumer=t};Ke.createElement=Am;Ke.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:g_,render:t}};Ke.isValidElement=Eh;Ke.lazy=function(t){return{$$typeof:x_,_payload:{_status:-1,_result:t},_init:E_}};Ke.memo=function(t,e){return{$$typeof:__,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};Ke.unstable_act=Rm;Ke.useCallback=function(t,e){return on.current.useCallback(t,e)};Ke.useContext=function(t){return on.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return on.current.useEffect(t,e)};Ke.useId=function(){return on.current.useId()};Ke.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return on.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ke.useRef=function(t){return on.current.useRef(t)};Ke.useState=function(t){return on.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return on.current.useTransition()};Ke.version="18.3.1";xm.exports=Ke;var Me=xm.exports;const w_=c_(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=Me,R_=Symbol.for("react.element"),C_=Symbol.for("react.fragment"),b_=Object.prototype.hasOwnProperty,L_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P_={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)b_.call(e,i)&&!P_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R_,type:t,key:s,ref:a,props:r,_owner:L_.current}}kl.Fragment=C_;kl.jsx=Cm;kl.jsxs=Cm;_m.exports=kl;var y=_m.exports,mu={},bm={exports:{}},Cn={},Lm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var A=D.length;D.push(k);e:for(;0<A;){var w=A-1>>>1,Y=D[w];if(0<r(Y,k))D[w]=k,D[A]=Y,A=w;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],A=D.pop();if(A!==k){D[0]=A;e:for(var w=0,Y=D.length,O=Y>>>1;w<O;){var W=2*(w+1)-1,Q=D[W],te=W+1,J=D[te];if(0>r(Q,A))te<Y&&0>r(J,Q)?(D[w]=J,D[te]=A,w=te):(D[w]=Q,D[W]=A,w=W);else if(te<Y&&0>r(J,A))D[w]=J,D[te]=A,w=te;else break e}}return k}function r(D,k){var A=D.sortIndex-k.sortIndex;return A!==0?A:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(D){if(x=!1,g(D),!_)if(n(l)!==null)_=!0,V(P);else{var k=n(c);k!==null&&Z(S,k.startTime-D)}}function P(D,k){_=!1,x&&(x=!1,h(U),U=-1),p=!0;var A=f;try{for(g(k),d=n(l);d!==null&&(!(d.expirationTime>k)||D&&!H());){var w=d.callback;if(typeof w=="function"){d.callback=null,f=d.priorityLevel;var Y=w(d.expirationTime<=k);k=t.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&i(l),g(k)}else i(l);d=n(l)}if(d!==null)var O=!0;else{var W=n(c);W!==null&&Z(S,W.startTime-k),O=!1}return O}finally{d=null,f=A,p=!1}}var C=!1,b=null,U=-1,E=5,T=-1;function H(){return!(t.unstable_now()-T<E)}function K(){if(b!==null){var D=t.unstable_now();T=D;var k=!0;try{k=b(!0,D)}finally{k?ee():(C=!1,b=null)}}else C=!1}var ee;if(typeof v=="function")ee=function(){v(K)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,G=N.port2;N.port1.onmessage=K,ee=function(){G.postMessage(null)}}else ee=function(){m(K,0)};function V(D){b=D,C||(C=!0,ee())}function Z(D,k){U=m(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,V(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var A=f;f=k;try{return D()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var A=f;f=D;try{return k()}finally{f=A}},t.unstable_scheduleCallback=function(D,k,A){var w=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?w+A:w):A=w,D){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=A+Y,D={id:u++,callback:k,priorityLevel:D,startTime:A,expirationTime:Y,sortIndex:-1},A>w?(D.sortIndex=A,e(c,D),n(l)===null&&D===n(c)&&(x?(h(U),U=-1):x=!0,Z(S,A-w))):(D.sortIndex=Y,e(l,D),_||p||(_=!0,V(P))),D},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(D){var k=f;return function(){var A=f;f=k;try{return D.apply(this,arguments)}finally{f=A}}}})(Pm);Lm.exports=Pm;var N_=Lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Me,Rn=N_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,Ca={};function Hr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,D_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},Od={};function U_(t){return gu.call(Od,t)?!0:gu.call(Ud,t)?!1:D_.test(t)?Od[t]=!0:(Ud[t]=!0,!1)}function O_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F_(t,e,n,i){if(e===null||typeof e>"u"||O_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Th,wh);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Th,wh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Th,wh);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ah(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(F_(e,n,r,i)&&(n=null),i||r===null?U_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,cc;function pa(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function hc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function k_(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case hs:return"Portal";case vu:return"Profiler";case Rh:return"StrictMode";case _u:return"Suspense";case xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dm:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function B_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function z_(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=z_(t))}function Fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Ah(t,"checked",e,!1)}function Mu(t,e){km(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ma(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Bm(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H_=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){H_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G_=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(G_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,As=null,Rs=null;function Gd(t){if(t=Za(t)){if(typeof bu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Vl(e),bu(t.stateNode,t.type,e))}}function Wm(t){As?Rs?Rs.push(t):Rs=[t]:As=t}function jm(){if(As){var t=As,e=Rs;if(Rs=As=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function Xm(t,e){return t(e)}function Ym(){}var dc=!1;function qm(t,e,n){if(dc)return t(e,n);dc=!0;try{return Xm(t,e,n)}finally{dc=!1,(As!==null||Rs!==null)&&(Ym(),jm())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Lu=!1;if(Ci)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Lu=!1}function V_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var xa=!1,ll=null,cl=!1,Pu=null,W_={onError:function(t){xa=!0,ll=t}};function j_(t,e,n,i,r,s,a,o,l){xa=!1,ll=null,V_.apply(W_,arguments)}function X_(t,e,n,i,r,s,a,o,l){if(j_.apply(this,arguments),xa){if(xa){var c=ll;xa=!1,ll=null}else throw Error(re(198));cl||(cl=!0,Pu=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vd(t){if(Gr(t)!==t)throw Error(re(188))}function Y_(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vd(r),t;if(s===i)return Vd(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Km(t){return t=Y_(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=Rn.unstable_scheduleCallback,Wd=Rn.unstable_cancelCallback,q_=Rn.unstable_shouldYield,$_=Rn.unstable_requestPaint,Ct=Rn.unstable_now,K_=Rn.unstable_getCurrentPriorityLevel,Ph=Rn.unstable_ImmediatePriority,Jm=Rn.unstable_UserBlockingPriority,ul=Rn.unstable_NormalPriority,Z_=Rn.unstable_LowPriority,e0=Rn.unstable_IdlePriority,Bl=null,ui=null;function Q_(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:tx,J_=Math.log,ex=Math.LN2;function tx(t){return t>>>=0,t===0?32:31-(J_(t)/ex|0)|0}var uo=64,ho=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ix(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ti(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=nx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t0(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function n0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Ih,r0,s0,a0,Iu=!1,fo=[],$i=null,Ki=null,Zi=null,Pa=new Map,Na=new Map,Vi=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ax(t,e,n,i,r){switch(e){case"focusin":return $i=ea($i,t,e,n,i,r),!0;case"dragenter":return Ki=ea(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=ea(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,ea(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,ea(Na.get(s)||null,t,e,n,i,r)),!0}return!1}function o0(t){var e=Ar(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,a0(t.priority,function(){r0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cu=i,n.target.dispatchEvent(i),Cu=null}else return e=Za(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function Xd(t,e,n){Ko(t)&&n.delete(e)}function ox(){Iu=!1,$i!==null&&Ko($i)&&($i=null),Ki!==null&&Ko(Ki)&&(Ki=null),Zi!==null&&Ko(Zi)&&(Zi=null),Pa.forEach(Xd),Na.forEach(Xd)}function ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,ox)))}function Ia(t){function e(r){return ta(r,t)}if(0<fo.length){ta(fo[0],t);for(var n=1;n<fo.length;n++){var i=fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&ta($i,t),Ki!==null&&ta(Ki,t),Zi!==null&&ta(Zi,t),Pa.forEach(e),Na.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&Vi.shift()}var Cs=Di.ReactCurrentBatchConfig,dl=!0;function lx(t,e,n,i){var r=rt,s=Cs.transition;Cs.transition=null;try{rt=1,Dh(t,e,n,i)}finally{rt=r,Cs.transition=s}}function cx(t,e,n,i){var r=rt,s=Cs.transition;Cs.transition=null;try{rt=4,Dh(t,e,n,i)}finally{rt=r,Cs.transition=s}}function Dh(t,e,n,i){if(dl){var r=Du(t,e,n,i);if(r===null)Ec(t,e,i,fl,n),jd(t,i);else if(ax(r,t,e,n,i))i.stopPropagation();else if(jd(t,i),e&4&&-1<sx.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&i0(s),s=Du(t,e,n,i),s===null&&Ec(t,e,i,fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var fl=null;function Du(t,e,n,i){if(fl=null,t=Lh(i),t=Ar(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fl=t,null}function l0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case Ph:return 1;case Jm:return 4;case ul:case Z_:return 16;case e0:return 536870912;default:return 16}default:return 16}}var ji=null,Uh=null,Zo=null;function c0(){if(Zo)return Zo;var t,e=Uh,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function Yd(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Yd,this.isPropagationStopped=Yd,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=bn(Ys),Ka=yt({},Ys,{view:0,detail:0}),ux=bn(Ka),pc,mc,na,zl=yt({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(pc=t.screenX-na.screenX,mc=t.screenY-na.screenY):mc=pc=0,na=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),qd=bn(zl),hx=yt({},zl,{dataTransfer:0}),dx=bn(hx),fx=yt({},Ka,{relatedTarget:0}),gc=bn(fx),px=yt({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=bn(px),gx=yt({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=bn(gx),_x=yt({},Ys,{data:0}),$d=bn(_x),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sx[t])?!!e[t]:!1}function Fh(){return Mx}var Ex=yt({},Ka,{key:function(t){if(t.key){var e=xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=bn(Ex),wx=yt({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=bn(wx),Ax=yt({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),Rx=bn(Ax),Cx=yt({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=bn(Cx),Lx=yt({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=bn(Lx),Nx=[9,13,27,32],kh=Ci&&"CompositionEvent"in window,ya=null;Ci&&"documentMode"in document&&(ya=document.documentMode);var Ix=Ci&&"TextEvent"in window&&!ya,u0=Ci&&(!kh||ya&&8<ya&&11>=ya),Zd=" ",Qd=!1;function h0(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Dx(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(Qd=!0,Zd);case"textInput":return t=e.data,t===Zd&&Qd?null:t;default:return null}}function Ux(t,e){if(fs)return t==="compositionend"||!kh&&h0(t,e)?(t=c0(),Zo=Uh=ji=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function f0(t,e,n,i){Wm(i),e=pl(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Sa=null,Da=null;function Fx(t){T0(t,0)}function Hl(t){var e=gs(t);if(Fm(e))return t}function kx(t,e){if(t==="change")return e}var p0=!1;if(Ci){var vc;if(Ci){var _c="oninput"in document;if(!_c){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),_c=typeof ef.oninput=="function"}vc=_c}else vc=!1;p0=vc&&(!document.documentMode||9<document.documentMode)}function tf(){Sa&&(Sa.detachEvent("onpropertychange",m0),Da=Sa=null)}function m0(t){if(t.propertyName==="value"&&Hl(Da)){var e=[];f0(e,Da,t,Lh(t)),qm(Fx,e)}}function Bx(t,e,n){t==="focusin"?(tf(),Sa=e,Da=n,Sa.attachEvent("onpropertychange",m0)):t==="focusout"&&tf()}function zx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Da)}function Hx(t,e){if(t==="click")return Hl(e)}function Gx(t,e){if(t==="input"||t==="change")return Hl(e)}function Vx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Vx;function Ua(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gu.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rf(t,e){var n=nf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nf(n)}}function g0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wx(t){var e=v0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(i!==null&&Bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rf(n,s);var a=rf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jx=Ci&&"documentMode"in document&&11>=document.documentMode,ps=null,Uu=null,Ma=null,Ou=!1;function sf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||ps==null||ps!==ol(i)||(i=ps,"selectionStart"in i&&Bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ma&&Ua(Ma,i)||(Ma=i,i=pl(Uu,"onSelect"),0<i.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},xc={},_0={};Ci&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Gl(t){if(xc[t])return xc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return xc[t]=e[n];return t}var x0=Gl("animationend"),y0=Gl("animationiteration"),S0=Gl("animationstart"),M0=Gl("transitionend"),E0=new Map,af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){E0.set(t,e),Hr(e,[t])}for(var yc=0;yc<af.length;yc++){var Sc=af[yc],Xx=Sc.toLowerCase(),Yx=Sc[0].toUpperCase()+Sc.slice(1);cr(Xx,"on"+Yx)}cr(x0,"onAnimationEnd");cr(y0,"onAnimationIteration");cr(S0,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(M0,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function of(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,X_(i,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;of(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;of(r,o,c),s=l}}}if(cl)throw t=Pu,cl=!1,Pu=null,t}function ut(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(w0(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),w0(n,t,i,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[go]){t[go]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(qx.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[go]||(e[go]=!0,Mc("selectionchange",!1,e))}}function w0(t,e,n,i){switch(l0(e)){case 1:var r=lx;break;case 4:r=cx;break;default:r=Dh}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ar(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}qm(function(){var c=s,u=Lh(n),d=[];e:{var f=E0.get(t);if(f!==void 0){var p=Oh,_=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":p=Tx;break;case"focusin":_="focus",p=gc;break;case"focusout":_="blur",p=gc;break;case"beforeblur":case"afterblur":p=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rx;break;case x0:case y0:case S0:p=mx;break;case M0:p=bx;break;case"scroll":p=ux;break;case"wheel":p=Px;break;case"copy":case"cut":case"paste":p=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kd}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=La(v,h),S!=null&&x.push(Fa(v,S,g)))),m)break;v=v.return}0<x.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Cu&&(_=n.relatedTarget||n.fromElement)&&(Ar(_)||_[bi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ar(_):null,_!==null&&(m=Gr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=qd,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Kd,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:gs(p),g=_==null?f:gs(_),f=new x(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=g,S=null,Ar(u)===c&&(x=new x(h,v+"enter",_,n,u),x.target=g,x.relatedTarget=m,S=x),m=S,p&&_)t:{for(x=p,h=_,v=0,g=x;g;g=Wr(g))v++;for(g=0,S=h;S;S=Wr(S))g++;for(;0<v-g;)x=Wr(x),v--;for(;0<g-v;)h=Wr(h),g--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Wr(x),h=Wr(h)}x=null}else x=null;p!==null&&lf(d,f,p,x,!1),_!==null&&m!==null&&lf(d,m,_,x,!0)}}e:{if(f=c?gs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=kx;else if(Jd(f))if(p0)P=Gx;else{P=zx;var C=Bx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Hx);if(P&&(P=P(t,c))){f0(d,P,n,u);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Eu(f,"number",f.value)}switch(C=c?gs(c):window,t){case"focusin":(Jd(C)||C.contentEditable==="true")&&(ps=C,Uu=c,Ma=null);break;case"focusout":Ma=Uu=ps=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,sf(d,n,u);break;case"selectionchange":if(jx)break;case"keydown":case"keyup":sf(d,n,u)}var b;if(kh)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else fs?h0(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(u0&&n.locale!=="ko"&&(fs||U!=="onCompositionStart"?U==="onCompositionEnd"&&fs&&(b=c0()):(ji=u,Uh="value"in ji?ji.value:ji.textContent,fs=!0)),C=pl(c,U),0<C.length&&(U=new $d(U,t,null,n,u),d.push({event:U,listeners:C}),b?U.data=b:(b=d0(n),b!==null&&(U.data=b)))),(b=Ix?Dx(t,n):Ux(t,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(u=new $d("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}T0(d,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=La(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=La(n,s),l!=null&&a.unshift(Fa(n,l,o))):r||(l=La(n,s),l!=null&&a.push(Fa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var $x=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function cf(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(Kx,"")}function vo(t,e,n){if(e=cf(e),cf(t)!==e&&n)throw Error(re(425))}function ml(){}var Fu=null,ku=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(t){return uf.resolve(null).then(t).catch(Jx)}:zu;function Jx(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ia(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ia(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ci="__reactFiber$"+qs,ka="__reactProps$"+qs,bi="__reactContainer$"+qs,Hu="__reactEvents$"+qs,ey="__reactListeners$"+qs,ty="__reactHandles$"+qs;function Ar(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hf(t);t!==null;){if(n=t[ci])return n;t=hf(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[ci]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Vl(t){return t[ka]||null}var Gu=[],vs=-1;function ur(t){return{current:t}}function dt(t){0>vs||(t.current=Gu[vs],Gu[vs]=null,vs--)}function ct(t,e){vs++,Gu[vs]=t.current,t.current=e}var or={},Jt=ur(or),pn=ur(!1),Dr=or;function Os(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function gl(){dt(pn),dt(Jt)}function df(t,e,n){if(Jt.current!==or)throw Error(re(168));ct(Jt,e),ct(pn,n)}function A0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,B_(t)||"Unknown",r));return yt({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Dr=Jt.current,ct(Jt,t),ct(pn,pn.current),!0}function ff(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=A0(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,dt(pn),dt(Jt),ct(Jt,t)):dt(pn),ct(pn,n)}var yi=null,Wl=!1,wc=!1;function R0(t){yi===null?yi=[t]:yi.push(t)}function ny(t){Wl=!0,R0(t)}function hr(){if(!wc&&yi!==null){wc=!0;var t=0,e=rt;try{var n=yi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Wl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Qm(Ph,hr),r}finally{rt=e,wc=!1}}return null}var _s=[],xs=0,_l=null,xl=0,In=[],Dn=0,Ur=null,Ei=1,Ti="";function xr(t,e){_s[xs++]=xl,_s[xs++]=_l,_l=t,xl=e}function C0(t,e,n){In[Dn++]=Ei,In[Dn++]=Ti,In[Dn++]=Ur,Ur=t;var i=Ei;t=Ti;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-ti(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function zh(t){t.return!==null&&(xr(t,1),C0(t,1,0))}function Hh(t){for(;t===_l;)_l=_s[--xs],_s[xs]=null,xl=_s[--xs],_s[xs]=null;for(;t===Ur;)Ur=In[--Dn],In[Dn]=null,Ti=In[--Dn],In[Dn]=null,Ei=In[--Dn],In[Dn]=null}var wn=null,En=null,mt=!1,Zn=null;function b0(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wu(t){if(mt){var e=En;if(e){var n=e;if(!pf(t,e)){if(Vu(t))throw Error(re(418));e=Qi(n.nextSibling);var i=wn;e&&pf(t,e)?b0(i,n):(t.flags=t.flags&-4097|2,mt=!1,wn=t)}}else{if(Vu(t))throw Error(re(418));t.flags=t.flags&-4097|2,mt=!1,wn=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function _o(t){if(t!==wn)return!1;if(!mt)return mf(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=En)){if(Vu(t))throw L0(),Error(re(418));for(;e;)b0(t,e),e=Qi(e.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?Qi(t.stateNode.nextSibling):null;return!0}function L0(){for(var t=En;t;)t=Qi(t.nextSibling)}function Fs(){En=wn=null,mt=!1}function Gh(t){Zn===null?Zn=[t]:Zn.push(t)}var iy=Di.ReactCurrentBatchConfig;function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gf(t){var e=t._init;return e(t._payload)}function P0(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=nr(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,g,S){return v===null||v.tag!==6?(v=Nc(g,h.mode,S),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,S){var P=g.type;return P===ds?u(h,v,g.props.children,S,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&gf(P)===v.type)?(S=r(v,g.props),S.ref=ia(h,v,g),S.return=h,S):(S=sl(g.type,g.key,g.props,null,h.mode,S),S.ref=ia(h,v,g),S.return=h,S)}function c(h,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ic(g,h.mode,S),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function u(h,v,g,S,P){return v===null||v.tag!==7?(v=Lr(g,h.mode,S,P),v.return=h,v):(v=r(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nc(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return g=sl(v.type,v.key,v.props,null,h.mode,g),g.ref=ia(h,null,v),g.return=h,g;case hs:return v=Ic(v,h.mode,g),v.return=h,v;case Hi:var S=v._init;return d(h,S(v._payload),g)}if(ma(v)||Qs(v))return v=Lr(v,h.mode,g,null),v.return=h,v;xo(h,v)}return null}function f(h,v,g,S){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(h,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return g.key===P?l(h,v,g,S):null;case hs:return g.key===P?c(h,v,g,S):null;case Hi:return P=g._init,f(h,v,P(g._payload),S)}if(ma(g)||Qs(g))return P!==null?null:u(h,v,g,S,null);xo(h,g)}return null}function p(h,v,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,o(v,h,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oo:return h=h.get(S.key===null?g:S.key)||null,l(v,h,S,P);case hs:return h=h.get(S.key===null?g:S.key)||null,c(v,h,S,P);case Hi:var C=S._init;return p(h,v,g,C(S._payload),P)}if(ma(S)||Qs(S))return h=h.get(g)||null,u(v,h,S,P,null);xo(v,S)}return null}function _(h,v,g,S){for(var P=null,C=null,b=v,U=v=0,E=null;b!==null&&U<g.length;U++){b.index>U?(E=b,b=null):E=b.sibling;var T=f(h,b,g[U],S);if(T===null){b===null&&(b=E);break}t&&b&&T.alternate===null&&e(h,b),v=s(T,v,U),C===null?P=T:C.sibling=T,C=T,b=E}if(U===g.length)return n(h,b),mt&&xr(h,U),P;if(b===null){for(;U<g.length;U++)b=d(h,g[U],S),b!==null&&(v=s(b,v,U),C===null?P=b:C.sibling=b,C=b);return mt&&xr(h,U),P}for(b=i(h,b);U<g.length;U++)E=p(b,h,U,g[U],S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?U:E.key),v=s(E,v,U),C===null?P=E:C.sibling=E,C=E);return t&&b.forEach(function(H){return e(h,H)}),mt&&xr(h,U),P}function x(h,v,g,S){var P=Qs(g);if(typeof P!="function")throw Error(re(150));if(g=P.call(g),g==null)throw Error(re(151));for(var C=P=null,b=v,U=v=0,E=null,T=g.next();b!==null&&!T.done;U++,T=g.next()){b.index>U?(E=b,b=null):E=b.sibling;var H=f(h,b,T.value,S);if(H===null){b===null&&(b=E);break}t&&b&&H.alternate===null&&e(h,b),v=s(H,v,U),C===null?P=H:C.sibling=H,C=H,b=E}if(T.done)return n(h,b),mt&&xr(h,U),P;if(b===null){for(;!T.done;U++,T=g.next())T=d(h,T.value,S),T!==null&&(v=s(T,v,U),C===null?P=T:C.sibling=T,C=T);return mt&&xr(h,U),P}for(b=i(h,b);!T.done;U++,T=g.next())T=p(b,h,U,T.value,S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?U:T.key),v=s(T,v,U),C===null?P=T:C.sibling=T,C=T);return t&&b.forEach(function(K){return e(h,K)}),mt&&xr(h,U),P}function m(h,v,g,S){if(typeof g=="object"&&g!==null&&g.type===ds&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:e:{for(var P=g.key,C=v;C!==null;){if(C.key===P){if(P=g.type,P===ds){if(C.tag===7){n(h,C.sibling),v=r(C,g.props.children),v.return=h,h=v;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&gf(P)===C.type){n(h,C.sibling),v=r(C,g.props),v.ref=ia(h,C,g),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}g.type===ds?(v=Lr(g.props.children,h.mode,S,g.key),v.return=h,h=v):(S=sl(g.type,g.key,g.props,null,h.mode,S),S.ref=ia(h,v,g),S.return=h,h=S)}return a(h);case hs:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Ic(g,h.mode,S),v.return=h,h=v}return a(h);case Hi:return C=g._init,m(h,v,C(g._payload),S)}if(ma(g))return _(h,v,g,S);if(Qs(g))return x(h,v,g,S);xo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Nc(g,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return m}var ks=P0(!0),N0=P0(!1),yl=ur(null),Sl=null,ys=null,Vh=null;function Wh(){Vh=ys=Sl=null}function jh(t){var e=yl.current;dt(yl),t._currentValue=e}function ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Sl=t,Vh=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Vh!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Sl===null)throw Error(re(308));ys=t,Sl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Rr=null;function Xh(t){Rr===null?Rr=[t]:Rr.push(t)}function I0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nh(t,n)}}function vf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(f=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=yt({},d,f);break e;case 2:Gi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=d}}function _f(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Qa={},hi=ur(Qa),Ba=ur(Qa),za=ur(Qa);function Cr(t){if(t===Qa)throw Error(re(174));return t}function qh(t,e){switch(ct(za,e),ct(Ba,t),ct(hi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wu(e,t)}dt(hi),ct(hi,e)}function Bs(){dt(hi),dt(Ba),dt(za)}function U0(t){Cr(za.current);var e=Cr(hi.current),n=wu(e,t.type);e!==n&&(ct(Ba,t),ct(hi,n))}function $h(t){Ba.current===t&&(dt(hi),dt(Ba))}var _t=ur(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Kh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var el=Di.ReactCurrentDispatcher,Rc=Di.ReactCurrentBatchConfig,Or=0,xt=null,Nt=null,Bt=null,Tl=!1,Ea=!1,Ha=0,ry=0;function qt(){throw Error(re(321))}function Zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Qh(t,e,n,i,r,s){if(Or=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?ly:cy,t=n(i,r),Ea){s=0;do{if(Ea=!1,Ha=0,25<=s)throw Error(re(301));s+=1,Bt=Nt=null,e.updateQueue=null,el.current=uy,t=n(i,r)}while(Ea)}if(el.current=wl,e=Nt!==null&&Nt.next!==null,Or=0,Bt=Nt=xt=null,Tl=!1,e)throw Error(re(300));return t}function Jh(){var t=Ha!==0;return Ha=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Hn(){if(Nt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Bt===null?xt.memoizedState:Bt.next;if(e!==null)Bt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ga(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Or&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,xt.lanes|=u,Fr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ri(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ri(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O0(){}function F0(t,e){var n=xt,i=Hn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,ed(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Va(9,B0.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(re(349));Or&30||k0(n,e,r)}return r}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,i){e.value=n,e.getSnapshot=i,H0(e)&&G0(t)}function z0(t,e,n){return n(function(){H0(e)&&G0(t)})}function H0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function G0(t){var e=Li(t,1);e!==null&&ni(e,t,1,-1)}function xf(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=oy.bind(null,xt,t),[e.memoizedState,t]}function Va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function V0(){return Hn().memoizedState}function tl(t,e,n,i){var r=oi();xt.flags|=t,r.memoizedState=Va(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var a=Nt.memoizedState;if(s=a.destroy,i!==null&&Zh(i,a.deps)){r.memoizedState=Va(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Va(1|e,n,s,i)}function yf(t,e){return tl(8390656,8,t,e)}function ed(t,e){return jl(2048,8,t,e)}function W0(t,e){return jl(4,2,t,e)}function j0(t,e){return jl(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,X0.bind(null,e,t),n)}function td(){}function q0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K0(t,e,n){return Or&21?(ri(n,e)||(n=t0(),xt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function sy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{rt=n,Rc.transition=i}}function Z0(){return Hn().memoizedState}function ay(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q0(t))J0(e,n);else if(n=I0(t,e,n,i),n!==null){var r=an();ni(n,t,i,r),eg(n,e,i)}}function oy(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q0(t))J0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ri(o,a)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=I0(t,e,r,i),n!==null&&(r=an(),ni(n,t,i,r),eg(n,e,i))}}function Q0(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function J0(t,e){Ea=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nh(t,n)}}var wl={readContext:zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},ly={readContext:zn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:yf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:xf,useDebugValue:td,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=xf(!1),e=t[0];return t=sy.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=oi();if(mt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ht===null)throw Error(re(349));Or&30||k0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yf(z0.bind(null,i,s,t),[t]),i.flags|=2048,Va(9,B0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Ht.identifierPrefix;if(mt){var n=Ti,i=Ei;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cy={readContext:zn,useCallback:q0,useContext:zn,useEffect:ed,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:$0,useReducer:Cc,useRef:V0,useState:function(){return Cc(Ga)},useDebugValue:td,useDeferredValue:function(t){var e=Hn();return K0(e,Nt.memoizedState,t)},useTransition:function(){var t=Cc(Ga)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1},uy={readContext:zn,useCallback:q0,useContext:zn,useEffect:ed,useImperativeHandle:Y0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:$0,useReducer:bc,useRef:V0,useState:function(){return bc(Ga)},useDebugValue:td,useDeferredValue:function(t){var e=Hn();return Nt===null?e.memoizedState=t:K0(e,Nt.memoizedState,t)},useTransition:function(){var t=bc(Ga)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:F0,useId:Z0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=tr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(ni(e,t,r,i),Jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=tr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(ni(e,t,r,i),Jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=tr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(ni(e,t,i,n),Jo(e,t,i))}};function Sf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function tg(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=mn(e)?Dr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=mn(e)?Dr:Jt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",i=e;do n+=k_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function ng(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,rh=i),qu(t,e)},n}function ig(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ef(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wy.bind(null,t,e,n),e.then(t,t))}function Tf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var dy=Di.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?N0(e,null,n,i):ks(e,t.child,n,i)}function Af(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=Qh(t,e,n,i,s,r),n=Jh(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&n&&zh(e),e.flags|=1,rn(t,e,i,r),e.child)}function Rf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rg(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function rg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return $u(t,e,n,i,r)}function sg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ms,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Ms,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Ms,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Ms,Sn),Sn|=i;return rn(t,e,r,n),e.child}function ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=mn(n)?Dr:Jt.current;return s=Os(e,s),bs(e,r),n=Qh(t,e,n,i,s,r),i=Jh(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&i&&zh(e),e.flags|=1,rn(t,e,n,r),e.child)}function Cf(t,e,n,i,r){if(mn(n)){var s=!0;vl(e)}else s=!1;if(bs(e,r),e.stateNode===null)nl(t,e),tg(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=mn(n)?Dr:Jt.current,c=Os(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Mf(e,a,i,c),Gi=!1;var f=e.memoizedState;a.state=f,Ml(e,i,a,r),l=e.memoizedState,o!==i||f!==l||pn.current||Gi?(typeof u=="function"&&(Xu(e,n,u,i),l=e.memoizedState),(o=Gi||Sf(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,D0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:qn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=mn(n)?Dr:Jt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Mf(e,a,i,l),Gi=!1,f=e.memoizedState,a.state=f,Ml(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||pn.current||Gi?(typeof p=="function"&&(Xu(e,n,p,i),_=e.memoizedState),(c=Gi||Sf(e,n,c,i,f,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){ag(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ff(e,n,!1),Pi(t,e,s);i=e.stateNode,dy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&ff(e,n,!0),e.child}function og(t){var e=t.stateNode;e.pendingContext?df(t,e.pendingContext,e.pendingContext!==e.context):e.context&&df(t,e.context,!1),qh(t,e.containerInfo)}function bf(t,e,n,i,r){return Fs(),Gh(r),e.flags|=256,rn(t,e,n,i),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function lg(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(_t,r&1),t===null)return Wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=$l(a,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Zu,t):nd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=nr(o,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&Gh(i),ks(e,t.child,null,n),t=nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(re(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,a),e.child.memoizedState=Qu(a),e.memoizedState=Zu,s);if(!(e.mode&1))return yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Lc(s,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,fn||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ni(i,t,r,-1))}return ld(),i=Lc(Error(re(421))),yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=Qi(r.nextSibling),wn=e,mt=!0,Zn=null,t!==null&&(In[Dn++]=Ei,In[Dn++]=Ti,In[Dn++]=Ur,Ei=t.id,Ti=t.overflow,Ur=e),e=nd(e,i.children),e.flags|=4096,e)}function Lf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ju(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function cg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lf(t,n,e);else if(t.tag===19)Lf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:og(e),Fs();break;case 5:U0(e);break;case 1:mn(e.type)&&vl(e);break;case 4:qh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?lg(t,e,n):(ct(_t,_t.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ct(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return cg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,sg(t,e,n)}return Pi(t,e,n)}var ug,Ju,hg,dg;ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};hg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(hi.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Au(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ra(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&gl(),$t(e),null;case 3:return i=e.stateNode,Bs(),dt(pn),dt(Jt),Kh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(oh(Zn),Zn=null))),Ju(t,e),$t(e),null;case 5:$h(e);var r=Cr(za.current);if(n=e.type,t!==null&&e.stateNode!=null)hg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return $t(e),null}if(t=Cr(hi.current),_o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":kd(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":zd(i,s),ut("invalid",i)}Au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&vo(i.textContent,o,t),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":lo(i),Bd(i,s,!0);break;case"textarea":lo(i),Hd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[ka]=i,ug(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ru(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":kd(t,i),r=Su(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":zd(t,i),r=Tu(t,i),ut("invalid",t);break;default:r=i}Au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Ah(t,s,l,a))}switch(n){case"input":lo(t),Bd(t,i,!1);break;case"textarea":lo(t),Hd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Cr(za.current),Cr(hi.current),_o(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:vo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&En!==null&&e.mode&1&&!(e.flags&128))L0(),Fs(),e.flags|=98560,s=!1;else if(s=_o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ci]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Zn!==null&&(oh(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):ld())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Bs(),Ju(t,e),t===null&&Oa(e.stateNode.containerInfo),$t(e),null;case 10:return jh(e.type._context),$t(e),null;case 17:return mn(e.type)&&gl(),$t(e),null;case 19:if(dt(_t),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ra(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,ra(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Hs&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return $t(e),null}else 2*Ct()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=_t.current,ct(_t,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return od(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function gy(t,e){switch(Hh(e),e.tag){case 1:return mn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),dt(pn),dt(Jt),Kh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $h(e),null;case 13:if(dt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(_t),null;case 4:return Bs(),null;case 10:return jh(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var So=!1,Qt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function eh(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Pf=!1;function _y(t,e){if(Fu=dl,t=v0(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:t,selectionRange:n},dl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=Pf,Pf=!1,_}function Ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&eh(e,n,s)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fg(t){var e=t.alternate;e!==null&&(t.alternate=null,fg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[ka],delete e[Hu],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pg(t){return t.tag===5||t.tag===3||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}var Gt=null,$n=!1;function Ui(t,e,n){for(n=n.child;n!==null;)mg(t,e,n),n=n.sibling}function mg(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Qt||Ss(n,e);case 6:var i=Gt,r=$n;Gt=null,Ui(t,e,n),Gt=i,$n=r,Gt!==null&&($n?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&($n?(t=Gt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ia(t)):Tc(Gt,n.stateNode));break;case 4:i=Gt,r=$n,Gt=n.stateNode.containerInfo,$n=!0,Ui(t,e,n),Gt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&eh(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Qt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ui(t,e,n),Qt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function If(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Ry.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,$n=!1;break e;case 3:Gt=o.stateNode.containerInfo,$n=!0;break e;case 4:Gt=o.stateNode.containerInfo,$n=!0;break e}o=o.return}if(Gt===null)throw Error(re(160));mg(s,a,r),Gt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gg(e,t),e=e.sibling}function gg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ai(t),i&4){try{Ta(3,t,t.return),Yl(3,t)}catch(x){Et(t,t.return,x)}try{Ta(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:Vn(e,t),ai(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(Vn(e,t),ai(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Ru(o,a);var c=Ru(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?Vm(r,d):u==="dangerouslySetInnerHTML"?Hm(r,d):u==="children"?ba(r,d):Ah(r,u,d,c)}switch(o){case"input":Mu(r,s);break;case"textarea":Bm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ws(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ws(r,!!s.multiple,s.defaultValue,!0):ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(Vn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(Vn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ia(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:Vn(e,t),ai(t);break;case 13:Vn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sd=Ct())),i&4&&If(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,Vn(e,t),Qt=c):Vn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(d=xe=u;xe!==null;){switch(f=xe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ta(4,f,f.return);break;case 1:Ss(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:Ss(f,f.return);break;case 22:if(f.memoizedState!==null){Uf(d);continue}}p!==null?(p.return=f,xe=p):Uf(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Gm("display",a))}catch(x){Et(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Et(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),ai(t),i&4&&If(t);break;case 21:break;default:Vn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Nf(t);ih(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Nf(t);nh(t,o,a);break;default:throw Error(re(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xy(t,e,n){xe=t,vg(t)}function vg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||So;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=So;var c=Qt;if(So=a,(Qt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Of(r):l!==null?(l.return=a,xe=l):Of(r);for(;s!==null;)xe=s,vg(s),s=s.sibling;xe=r,So=o,Qt=c}Df(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Df(t)}}function Df(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_f(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_f(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ia(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Qt||e.flags&512&&th(e)}catch(f){Et(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Uf(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Of(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{th(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{th(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var yy=Math.ceil,Al=Di.ReactCurrentDispatcher,id=Di.ReactCurrentOwner,kn=Di.ReactCurrentBatchConfig,et=0,Ht=null,Lt=null,jt=0,Sn=0,Ms=ur(0),It=0,Wa=null,Fr=0,ql=0,rd=0,wa=null,hn=null,sd=0,Hs=1/0,xi=null,Rl=!1,rh=null,er=null,Mo=!1,Xi=null,Cl=0,Aa=0,sh=null,il=-1,rl=0;function an(){return et&6?Ct():il!==-1?il:il=Ct()}function tr(t){return t.mode&1?et&2&&jt!==0?jt&-jt:iy.transition!==null?(rl===0&&(rl=t0()),rl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:l0(t.type)),t):1}function ni(t,e,n,i){if(50<Aa)throw Aa=0,sh=null,Error(re(185));$a(t,n,i),(!(et&2)||t!==Ht)&&(t===Ht&&(!(et&2)&&(ql|=n),It===4&&Wi(t,jt)),gn(t,i),n===1&&et===0&&!(e.mode&1)&&(Hs=Ct()+500,Wl&&hr()))}function gn(t,e){var n=t.callbackNode;ix(t,e);var i=hl(t,t===Ht?jt:0);if(i===0)n!==null&&Wd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wd(n),e===1)t.tag===0?ny(Ff.bind(null,t)):R0(Ff.bind(null,t)),Qx(function(){!(et&6)&&hr()}),n=null;else{switch(n0(i)){case 1:n=Ph;break;case 4:n=Jm;break;case 16:n=ul;break;case 536870912:n=e0;break;default:n=ul}n=wg(n,_g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _g(t,e){if(il=-1,rl=0,et&6)throw Error(re(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=hl(t,t===Ht?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=et;et|=2;var s=yg();(Ht!==t||jt!==e)&&(xi=null,Hs=Ct()+500,br(t,e));do try{Ey();break}catch(o){xg(t,o)}while(!0);Wh(),Al.current=s,et=r,Lt!==null?e=0:(Ht=null,jt=0,e=It)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=Wa,br(t,0),Wi(t,i),gn(t,Ct()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sy(r)&&(e=bl(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=Wa,br(t,0),Wi(t,i),gn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:yr(t,hn,xi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=sd+500-Ct(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zu(yr.bind(null,t,hn,xi),e);break}yr(t,hn,xi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ti(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yy(i/1960))-i,10<i){t.timeoutHandle=zu(yr.bind(null,t,hn,xi),i);break}yr(t,hn,xi);break;case 5:yr(t,hn,xi);break;default:throw Error(re(329))}}}return gn(t,Ct()),t.callbackNode===n?_g.bind(null,t):null}function ah(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=bl(t,e),t!==2&&(e=hn,hn=n,e!==null&&oh(e)),t}function oh(t){hn===null?hn=t:hn.push.apply(hn,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~rd,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function Ff(t){if(et&6)throw Error(re(327));Ls();var e=hl(t,0);if(!(e&1))return gn(t,Ct()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=Wa,br(t,0),Wi(t,e),gn(t,Ct()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,hn,xi),gn(t,Ct()),null}function ad(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Hs=Ct()+500,Wl&&hr())}}function kr(t){Xi!==null&&Xi.tag===0&&!(et&6)&&Ls();var e=et;et|=1;var n=kn.transition,i=rt;try{if(kn.transition=null,rt=1,t)return t()}finally{rt=i,kn.transition=n,et=e,!(et&6)&&hr()}}function od(){Sn=Ms.current,dt(Ms)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zx(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Bs(),dt(pn),dt(Jt),Kh();break;case 5:$h(i);break;case 4:Bs();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:jh(i.type._context);break;case 22:case 23:od()}n=n.return}if(Ht=t,Lt=t=nr(t.current,null),jt=Sn=e,It=0,Wa=null,rd=ql=Fr=0,hn=wa=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Rr=null}return t}function xg(t,e){do{var n=Lt;try{if(Wh(),el.current=wl,Tl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Or=0,Bt=Nt=xt=null,Ea=!1,Ha=0,id.current=null,n===null||n.return===null){It=1,Wa=e,Lt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tf(a);if(p!==null){p.flags&=-257,wf(p,a,o,s,e),p.mode&1&&Ef(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Ef(s,c,e),ld();break e}l=Error(re(426))}}else if(mt&&o.mode&1){var m=Tf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),wf(m,a,o,s,e),Gh(zs(l,o));break e}}s=l=zs(l,o),It!==4&&(It=2),wa===null?wa=[s]:wa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ng(s,l,e);vf(s,h);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(er===null||!er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ig(s,o,e);vf(s,S);break e}}s=s.return}while(s!==null)}Mg(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function yg(){var t=Al.current;return Al.current=wl,t===null?wl:t}function ld(){(It===0||It===3||It===2)&&(It=4),Ht===null||!(Fr&268435455)&&!(ql&268435455)||Wi(Ht,jt)}function bl(t,e){var n=et;et|=2;var i=yg();(Ht!==t||jt!==e)&&(xi=null,br(t,e));do try{My();break}catch(r){xg(t,r)}while(!0);if(Wh(),et=n,Al.current=i,Lt!==null)throw Error(re(261));return Ht=null,jt=0,It}function My(){for(;Lt!==null;)Sg(Lt)}function Ey(){for(;Lt!==null&&!q_();)Sg(Lt)}function Sg(t){var e=Tg(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Mg(t):Lt=e,id.current=null}function Mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Lt=null;return}}else if(n=my(n,e,Sn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);It===0&&(It=5)}function yr(t,e,n){var i=rt,r=kn.transition;try{kn.transition=null,rt=1,Ty(t,e,n,i)}finally{kn.transition=r,rt=i}return null}function Ty(t,e,n,i){do Ls();while(Xi!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rx(t,s),t===Ht&&(Lt=Ht=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,wg(ul,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=rt;rt=1;var o=et;et|=4,id.current=null,_y(t,n),gg(n,t),Wx(ku),dl=!!Fu,ku=Fu=null,t.current=n,xy(n),$_(),et=o,rt=a,kn.transition=s}else t.current=n;if(Mo&&(Mo=!1,Xi=t,Cl=r),s=t.pendingLanes,s===0&&(er=null),Q_(n.stateNode),gn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=rh,rh=null,t;return Cl&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===sh?Aa++:(Aa=0,sh=t):Aa=0,hr(),null}function Ls(){if(Xi!==null){var t=n0(Cl),e=kn.transition,n=rt;try{if(kn.transition=null,rt=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,Cl=0,et&6)throw Error(re(331));var r=et;for(et|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Ta(8,u,s)}var d=u.child;if(d!==null)d.return=u,xe=d;else for(;xe!==null;){u=xe;var f=u.sibling,p=u.return;if(fg(u),u===c){xe=null;break}if(f!==null){f.return=p,xe=f;break}xe=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,xe=h;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,xe=g;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Yl(9,o)}}catch(P){Et(o,o.return,P)}if(o===a){xe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,xe=S;break e}xe=o.return}}if(et=r,hr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{rt=n,kn.transition=e}}return!1}function kf(t,e,n){e=zs(n,e),e=ng(t,e,1),t=Ji(t,e,1),e=an(),t!==null&&($a(t,1,e),gn(t,e))}function Et(t,e,n){if(t.tag===3)kf(t,t,n);else for(;e!==null;){if(e.tag===3){kf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=zs(n,t),t=ig(e,t,1),e=Ji(e,t,1),t=an(),e!==null&&($a(e,1,t),gn(e,t));break}}e=e.return}}function wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(jt&n)===n&&(It===4||It===3&&(jt&130023424)===jt&&500>Ct()-sd?br(t,0):rd|=n),gn(t,e)}function Eg(t,e){e===0&&(t.mode&1?(e=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):e=1);var n=an();t=Li(t,e),t!==null&&($a(t,e,n),gn(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Eg(t,n)}function Ry(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Eg(t,n)}var Tg;Tg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,py(t,e,n);fn=!!(t.flags&131072)}else fn=!1,mt&&e.flags&1048576&&C0(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Os(e,Jt.current);bs(e,n),r=Qh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yh(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&zh(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=by(i),t=qn(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=Cf(null,e,i,t,n);break e;case 11:e=Af(null,e,i,t,n);break e;case 14:e=Rf(null,e,i,qn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Cf(t,e,i,r,n);case 3:e:{if(og(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=zs(Error(re(423)),e),e=bf(t,e,i,n,r);break e}else if(i!==r){r=zs(Error(re(424)),e),e=bf(t,e,i,n,r);break e}else for(En=Qi(e.stateNode.containerInfo.firstChild),wn=e,mt=!0,Zn=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Pi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return U0(e),t===null&&Wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Bu(i,r)?a=null:s!==null&&Bu(i,s)&&(e.flags|=32),ag(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Wu(e),null;case 13:return lg(t,e,n);case 4:return qh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Af(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(yl,i._currentValue),i._currentValue=a,s!==null)if(ri(s.value,a)){if(s.children===r.children&&!pn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=zn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Rf(t,e,i,r,n);case 15:return rg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),nl(t,e),e.tag=1,mn(i)?(t=!0,vl(e)):t=!1,bs(e,n),tg(e,i,r),Yu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return cg(t,e,n);case 22:return sg(t,e,n)}throw Error(re(156,e.tag))};function wg(t,e){return Qm(t,e)}function Cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Cy(t,e,n,i)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function by(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===bh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")cd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ds:return Lr(n.children,r,s,e);case Rh:a=8,r|=8;break;case vu:return t=Fn(12,n,e,r|2),t.elementType=vu,t.lanes=s,t;case _u:return t=Fn(13,n,e,r),t.elementType=_u,t.lanes=s,t;case xu:return t=Fn(19,n,e,r),t.elementType=xu,t.lanes=s,t;case Um:return $l(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:a=10;break e;case Dm:a=9;break e;case Ch:a=11;break e;case bh:a=14;break e;case Hi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ud(t,e,n,i,r,s,a,o,l){return t=new Ly(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(s),t}function Py(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ag(t){if(!t)return or;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(mn(n))return A0(t,n,e)}return e}function Rg(t,e,n,i,r,s,a,o,l){return t=ud(n,i,!0,t,r,s,a,o,l),t.context=Ag(null),n=t.current,i=an(),r=tr(n),s=Ai(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,$a(t,r,i),gn(t,i),t}function Kl(t,e,n,i){var r=e.current,s=an(),a=tr(r);return n=Ag(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,a),t!==null&&(ni(t,r,a,s),Jo(t,r,a)),a}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){Bf(t,e),(t=t.alternate)&&Bf(t,e)}function Ny(){return null}var Cg=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}Zl.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Kl(t,e,null,null)};Zl.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){Kl(null,t,null,null)}),e[bi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=s0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&o0(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zf(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ll(a);s.call(c)}}var a=Rg(e,i,t,0,null,!1,!1,"",zf);return t._reactRootContainer=a,t[bi]=a.current,Oa(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ll(l);o.call(c)}}var l=ud(t,0,!1,null,null,!1,!1,"",zf);return t._reactRootContainer=l,t[bi]=l.current,Oa(t.nodeType===8?t.parentNode:t),kr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ll(a);o.call(l)}}Kl(e,a,t,r)}else a=Iy(n,e,t,r,i);return Ll(a)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Nh(e,n|1),gn(e,Ct()),!(et&6)&&(Hs=Ct()+500,hr()))}break;case 13:kr(function(){var i=Li(t,1);if(i!==null){var r=an();ni(i,t,1,r)}}),hd(t,1)}};Ih=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=an();ni(e,t,134217728,n)}hd(t,134217728)}};r0=function(t){if(t.tag===13){var e=tr(t),n=Li(t,e);if(n!==null){var i=an();ni(n,t,e,i)}hd(t,e)}};s0=function(){return rt};a0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};bu=function(t,e,n){switch(e){case"input":if(Mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(re(90));Fm(i),Mu(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};Xm=ad;Ym=kr;var Dy={usingClientEntryPoint:!1,Events:[Za,gs,Vl,Wm,jm,ad]},sa={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uy={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Bl=Eo.inject(Uy),ui=Eo}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(re(200));return Py(t,e,null,n)};Cn.createRoot=function(t,e){if(!fd(t))throw Error(re(299));var n=!1,i="",r=Cg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ud(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Oa(t.nodeType===8?t.parentNode:t),new dd(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return kr(t)};Cn.hydrate=function(t,e,n){if(!Ql(e))throw Error(re(200));return Jl(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!fd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Cg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Rg(e,null,t,1,n??null,r,!1,s,a),t[bi]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};Cn.render=function(t,e,n){if(!Ql(e))throw Error(re(200));return Jl(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(re(40));return t._reactRootContainer?(kr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Cn.unstable_batchedUpdates=ad;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Jl(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)}catch(t){console.error(t)}}bg(),bm.exports=Cn;var Oy=bm.exports,Hf=Oy;mu.createRoot=Hf.createRoot,mu.hydrateRoot=Hf.hydrateRoot;const $e={START_SCREEN:"START_SCREEN",CALIBRATION:"CALIBRATION",MAIN_MENU:"MAIN_MENU",CAREER_MENU:"CAREER_MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",BALL_IN_PLAY:"BALL_IN_PLAY",BALL_RESULT:"BALL_RESULT",MATCH_COMPLETE:"MATCH_COMPLETE"},vt={QUICK_MATCH:"QUICK_MATCH",BATTING_CHALLENGE:"BATTING_CHALLENGE",BOWLING_CHALLENGE:"BOWLING_CHALLENGE",SHOT_MASTER:"SHOT_MASTER",TARGET_CHASE:"TARGET_CHASE"},me={STRAIGHT_DRIVE:"STRAIGHT_DRIVE",COVER_DRIVE:"COVER_DRIVE",SQUARE_CUT:"SQUARE_CUT",PULL_SHOT:"PULL_SHOT",HOOK_SHOT:"HOOK_SHOT",SWEEP_SHOT:"SWEEP_SHOT",FLICK_SHOT:"FLICK_SHOT",LOFTED_DRIVE:"LOFTED_DRIVE",DEFENSIVE:"DEFENSIVE",NONE:"NONE"},Lg={STRAIGHT_DRIVE:"Straight Drive",COVER_DRIVE:"Cover Drive",SQUARE_CUT:"Square Cut",PULL_SHOT:"Pull Shot",HOOK_SHOT:"Hook Shot",SWEEP_SHOT:"Sweep",FLICK_SHOT:"Flick",LOFTED_DRIVE:"Lofted Drive",DEFENSIVE:"Defensive Forward",NONE:"No Shot"},Kn={VERY_EARLY:"VERY_EARLY",EARLY:"EARLY",PERFECT:"PERFECT",GOOD:"GOOD",LATE:"LATE",VERY_LATE:"VERY_LATE"},He={GOOD_LENGTH:"GOOD_LENGTH",YORKER:"YORKER",BOUNCER:"BOUNCER",FULL_TOSS:"FULL_TOSS",INSWING:"INSWING",OUTSWING:"OUTSWING",OFF_SPIN:"OFF_SPIN",LEG_SPIN:"LEG_SPIN",SLOWER_BALL:"SLOWER_BALL"},Yn={BATSMAN_FOLLOW:"BATSMAN_FOLLOW",BATSMAN_CLOSE:"BATSMAN_CLOSE",BROADCAST:"BROADCAST",BOWLER_VIEW:"BOWLER_VIEW",BALL_CAM:"BALL_CAM"},Ps={LENGTH:20.12,WIDTH:3.05,STUMP_HEIGHT:.71,STUMP_WIDTH:.23,BALL_RADIUS:.08},us=68,Er=[{level:1,title:"Beginner Batter",xpNeeded:0},{level:2,title:"Street Cricketer",xpNeeded:250},{level:3,title:"Club Player",xpNeeded:600},{level:4,title:"Academy Prospect",xpNeeded:1200},{level:5,title:"Domestic League Star",xpNeeded:2e3},{level:6,title:"Pro Batter",xpNeeded:3200},{level:7,title:"National Team Cap",xpNeeded:4800},{level:8,title:"Cricket Icon",xpNeeded:7e3},{level:9,title:"World Champion",xpNeeded:1e4},{level:10,title:"Cricket Legend",xpNeeded:15e3}],jr={PROFILE:"cva_player_profile",SETTINGS:"cva_game_settings",MISSIONS:"cva_missions_progress",STATS:"cva_game_stats"},Dc={level:1,xp:0,coins:100,bestScore:0,matchesPlayed:0,matchesWon:0,totalRuns:0,totalFours:0,totalSixes:0,totalWickets:0},Uc={soundEnabled:!0,musicEnabled:!0,volume:.8,graphicsQuality:"medium",dayNightMode:"day",cameraView:"BATSMAN_FOLLOW",showPoseOverlay:!0,mirrorWebcam:!0,handedness:"right",battingSensitivity:1};class Ri{static getProfile(){try{const e=localStorage.getItem(jr.PROFILE);return e?{...Dc,...JSON.parse(e)}:{...Dc}}catch{return{...Dc}}}static saveProfile(e){try{localStorage.setItem(jr.PROFILE,JSON.stringify(e))}catch(n){console.warn("Failed to save profile to localStorage",n)}}static getSettings(){try{const e=localStorage.getItem(jr.SETTINGS);return e?{...Uc,...JSON.parse(e)}:{...Uc}}catch{return{...Uc}}}static saveSettings(e){try{localStorage.setItem(jr.SETTINGS,JSON.stringify(e))}catch(n){console.warn("Failed to save settings to localStorage",n)}}static getMissionsProgress(){try{const e=localStorage.getItem(jr.MISSIONS);return e?JSON.parse(e):{}}catch{return{}}}static saveMissionsProgress(e){try{localStorage.setItem(jr.MISSIONS,JSON.stringify(e))}catch(n){console.warn("Failed to save missions to localStorage",n)}}}class Fy{constructor(){this.ctx=null,this.masterGain=null,this.soundEnabled=!0,this.volume=.8,this.ambientGain=null,this.isAmbientPlaying=!1}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}catch(e){console.warn("Web Audio API not supported",e)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}setMuted(e){this.soundEnabled=!e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.soundEnabled?this.volume:0,this.ctx.currentTime,.05)}playBatHit(e=1,n=!0){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n?820:450,i),r.frequency.exponentialRampToValueAtTime(140,i+.08),s.gain.setValueAtTime(.7*Math.min(1.5,e),i),s.gain.exponentialRampToValueAtTime(.001,i+.12),r.connect(s),s.connect(this.masterGain),r.start(i),r.stop(i+.12);const a=this.ctx.sampleRate*.05,o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=o;const u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1200,i),u.Q.setValueAtTime(3,i);const d=this.ctx.createGain();d.gain.setValueAtTime(.6*Math.min(1.5,e),i),d.gain.exponentialRampToValueAtTime(.001,i+.05),c.connect(u),u.connect(d),d.connect(this.masterGain),c.start(i),c.stop(i+.06)}playBallBounce(e=1){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.exponentialRampToValueAtTime(45,n+.09),r.gain.setValueAtTime(.4*Math.min(1.2,e),n),r.gain.exponentialRampToValueAtTime(.001,n+.09),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.09)}playWicketHit(){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const e=this.ctx.currentTime;[520,680,890,1100,320].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain(),o=r*.025;s.type="triangle",s.frequency.setValueAtTime(i,e+o),s.frequency.exponentialRampToValueAtTime(80,e+o+.15),a.gain.setValueAtTime(.5,e+o),a.gain.exponentialRampToValueAtTime(.001,e+o+.15),s.connect(a),a.connect(this.masterGain),s.start(e+o),s.stop(e+o+.15)}),this.playCrowdCheer("loud")}playCrowdCheer(e="medium"){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const n=this.ctx.currentTime,i=e==="loud"?2.5:1.5,r=e==="loud"?.35:.2,s=Math.floor(this.ctx.sampleRate*i),a=this.ctx.createBuffer(1,s,this.ctx.sampleRate),o=a.getChannelData(0);for(let d=0;d<s;d++)o[d]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=a;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(650,n),c.frequency.linearRampToValueAtTime(950,n+.5),c.frequency.linearRampToValueAtTime(500,n+i),c.Q.setValueAtTime(1.5,n);const u=this.ctx.createGain();u.gain.setValueAtTime(.001,n),u.gain.linearRampToValueAtTime(r,n+.3),u.gain.exponentialRampToValueAtTime(.001,n+i),l.connect(c),c.connect(u),u.connect(this.masterGain),l.start(n),l.stop(n+i)}playBoundaryCelebration(e=!1){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const n=this.ctx.currentTime;(e?[440,554.37,659.25,880]:[392,493.88,587.33]).forEach(r=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(r,n);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2e3,n),a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.12,n+.08),a.gain.setValueAtTime(.1,n+.4),a.gain.exponentialRampToValueAtTime(.001,n+1.2),s.connect(o),o.connect(a),a.connect(this.masterGain),s.start(n),s.stop(n+1.2)}),this.playCrowdCheer(e?"loud":"medium")}playBowlingRelease(){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(320,e+.08),n.frequency.exponentialRampToValueAtTime(60,e+.2),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.2,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.2)}playUIClick(){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(600,e),n.frequency.exponentialRampToValueAtTime(250,e+.04),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.04)}playBeep(e=!1){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e?880:440,n),r.gain.setValueAtTime(.2,n),r.gain.exponentialRampToValueAtTime(.001,n+.09),i.connect(r),r.connect(this.masterGain),i.start(n),i.stop(n+.09)}playVictory(){if(!this.soundEnabled||(this.init(),this.resume(),!this.ctx))return;const e=[{f:523.25,d:.15,delay:0},{f:659.25,d:.15,delay:.15},{f:783.99,d:.15,delay:.3},{f:1046.5,d:.6,delay:.45}],n=this.ctx.currentTime;e.forEach(i=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(i.f,n+i.delay),s.gain.setValueAtTime(.25,n+i.delay),s.gain.exponentialRampToValueAtTime(.001,n+i.delay+i.d),r.connect(s),s.connect(this.masterGain),r.start(n+i.delay),r.stop(n+i.delay+i.d)}),this.playCrowdCheer("loud")}startAmbient(){if(!(this.isAmbientPlaying||!this.soundEnabled)&&(this.init(),this.resume(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(320,e),this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.001,e),this.ambientGain.gain.linearRampToValueAtTime(.04,e+2),s.connect(a),a.connect(this.ambientGain),this.ambientGain.connect(this.masterGain),s.start(e),this.isAmbientPlaying=!0}catch{}}stopAmbient(){this.ambientGain&&this.ctx&&(this.ambientGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.5),this.isAmbientPlaying=!1)}}const Xr=new Fy;class lh{static checkDismissal(e,n,i,r){const{STUMP_WIDTH:s,STUMP_HEIGHT:a}=Ps;return!i&&e.z>=9.6&&e.z<=10.4&&Math.abs(e.x)<=s*.7&&e.y<=a+.1?{isWicket:!0,dismissalType:"BOWLED",description:"BOWLED! Stumps shattered!"}:i&&r&&r.contactQuality==="EDGE"&&r.expectedOutcome==="CAUGHT"?{isWicket:!0,dismissalType:"CAUGHT",description:"CAUGHT! Edged to wicketkeeper!"}:{isWicket:!1,dismissalType:null,description:null}}static isOverComplete(e){return e>=6}static calculateRunRate(e,n){if(n===0)return 0;const i=Math.floor(n/6)+n%6/6;return i>0?(e/i).toFixed(2):0}static calculateRequiredRunRate(e,n){if(n<=0)return e>0?99.9:0;const i=n/6;return(e/i).toFixed(2)}}class ky{constructor(){this.reset()}reset(e=null,n=2){this.totalRuns=0,this.wickets=0,this.maxWickets=2,this.totalBalls=0,this.maxOvers=n,this.maxBalls=n*6,this.targetRuns=e,this.thisOver=[],this.fours=0,this.sixes=0,this.dots=0,this.history=[],this.batterScore={name:"Player",runs:0,balls:0,fours:0,sixes:0},this.bowlerScore={name:"AI Bowler",overs:"0.0",runs:0,wickets:0}}recordDelivery({runs:e=0,isWicket:n=!1,dismissalType:i=null,shotType:r="NONE",timingZone:s="GOOD"}){this.totalBalls++,this.batterScore.balls++,n?(this.wickets++,this.thisOver.push("W"),this.bowlerScore.wickets++):(this.totalRuns+=e,this.batterScore.runs+=e,this.bowlerScore.runs+=e,e===4?(this.fours++,this.batterScore.fours++,this.thisOver.push("4")):e===6?(this.sixes++,this.batterScore.sixes++,this.thisOver.push("6")):e===0?(this.dots++,this.thisOver.push("•")):this.thisOver.push(`${e}`)),this.thisOver.length>=6&&(this.thisOver=[]);const a=Math.floor(this.totalBalls/6),o=this.totalBalls%6;this.bowlerScore.overs=`${a}.${o}`;const l={ballNumber:this.totalBalls,runs:e,isWicket:n,dismissalType:i,shotType:r,timingZone:s,totalRuns:this.totalRuns,wickets:this.wickets,timestamp:Date.now()};return this.history.push(l),l}getOversDisplay(){const e=Math.floor(this.totalBalls/6),n=this.totalBalls%6;return`${e}.${n}`}getRunRate(){return lh.calculateRunRate(this.totalRuns,this.totalBalls)}getRequiredRunRate(){if(!this.targetRuns)return null;const e=Math.max(0,this.targetRuns-this.totalRuns),n=Math.max(0,this.maxBalls-this.totalBalls);return lh.calculateRequiredRunRate(e,n)}getStrikeRate(){return this.batterScore.balls===0?"0.0":(this.batterScore.runs/this.batterScore.balls*100).toFixed(1)}isMatchFinished(){return!!(this.wickets>=this.maxWickets||this.totalBalls>=this.maxBalls||this.targetRuns&&this.totalRuns>=this.targetRuns)}getMatchResult(){return this.targetRuns?this.totalRuns>=this.targetRuns?{isWin:!0,title:"TARGET ACHIEVED!",message:`Won with ${this.maxBalls-this.totalBalls} balls to spare!`}:{isWin:!1,title:"TARGET MISSED",message:`Fell short by ${this.targetRuns-this.totalRuns} runs.`}:this.totalRuns>=30?{isWin:!0,title:"VICTORY!",message:`Splendid batting! Scored ${this.totalRuns} runs.`}:{isWin:!1,title:"MATCH CONCLUDED",message:`Final Score: ${this.totalRuns}/${this.wickets}`}}}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function un(t,e,n){return t+(e-t)*Vt(n,0,1)}function ch(t,e){const n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}function To(t,e,n){const i={x:t.x-e.x,y:t.y-e.y,z:(t.z||0)-(e.z||0)},r={x:n.x-e.x,y:n.y-e.y,z:(n.z||0)-(e.z||0)},s=i.x*r.x+i.y*r.y+i.z*r.z,a=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z),o=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z);if(a===0||o===0)return 180;const l=Vt(s/(a*o),-1,1);return Math.acos(l)*180/Math.PI}function Rt(t,e){return t+Math.random()*(e-t)}function Gf(t){return t*Math.PI/180}class By{constructor(e="medium"){this.difficulty=e,this.deliveryHistory=[]}setDifficulty(e){this.difficulty=e}generateDelivery(e=1){let n=He.GOOD_LENGTH,i=132,r=0,s=0;const a=Math.random();this.difficulty==="easy"?a<.7?(n=He.GOOD_LENGTH,i=Rt(115,125),r=Rt(-.15,.1)):a<.85?(n=He.FULL_TOSS,i=Rt(110,120),r=0):(n=He.BOUNCER,i=Rt(120,128),r=Rt(-.2,.1)):this.difficulty==="medium"?a<.5?(n=He.GOOD_LENGTH,i=Rt(128,138),r=Rt(-.25,.15)):a<.65?(n=He.OUTSWING,i=Rt(130,140),r=-.3,s=.5):a<.8?(n=He.INSWING,i=Rt(132,142),r=.1,s=-.5):a<.9?(n=He.YORKER,i=Rt(135,145),r=Rt(-.1,.1)):(n=He.BOUNCER,i=Rt(136,146),r=Rt(-.2,.1)):a<.35?(n=He.YORKER,i=Rt(142,152),r=Rt(-.15,.1)):a<.6?(n=He.OUTSWING,i=Rt(138,148),r=-.35,s=.7):a<.8?(n=He.BOUNCER,i=Rt(140,150),r=Rt(-.2,.2)):a<.9?(n=He.SLOWER_BALL,i=Rt(108,116),r=Rt(-.2,.1)):(n=He.INSWING,i=Rt(140,148),r=.15,s=-.65);const o={type:n,speed:Math.round(i),lineOffset:r,swingAmount:s,name:this.getDeliveryDisplayName(n)};return this.deliveryHistory.push(o),o}getDeliveryDisplayName(e){switch(e){case He.YORKER:return"Toecrusher Yorker";case He.BOUNCER:return"Sharp Bouncer";case He.FULL_TOSS:return"Juicy Full Toss";case He.INSWING:return"Inswinger";case He.OUTSWING:return"Outswinger";case He.OFF_SPIN:return"Off-Cutter";case He.LEG_SPIN:return"Leg-Break";case He.SLOWER_BALL:return"Deceptive Slower Ball";default:return"Good Length Pace"}}}class zy{constructor(e="medium"){this.difficulty=e}setDifficulty(e){this.difficulty=e}evaluateShot(e){const{speed:n,deliveryType:i,line:r,lineOffset:s,swing:a}=e,o=Math.random();let l=me.STRAIGHT_DRIVE,c=0,u=!1,d=null,f="";return i===He.YORKER&&r==="STUMPS"?n>135?o<.65?(u=!0,d="BOWLED",f="Bowled! Beaten all ends up by sheer pace!"):(c=1,l=me.DEFENSIVE,f="Dug out brilliantly into the crease for a single."):(c=o<.5?1:2,l=me.STRAIGHT_DRIVE,f="Jamming the bat down for a couple."):i===He.BOUNCER?n>138?o<.45?(u=!0,d="CAUGHT",f="Top edged the bouncer, caught at fine leg!"):o<.75?(c=0,l=me.DEFENSIVE,f="Ducked cleanly under the fiery bouncer."):(c=4,l=me.HOOK_SHOT,f="Rolled the wrists on the hook for FOUR!"):(c=o<.6?4:6,l=me.PULL_SHOT,f="Dispatched the short ball emphatically over midwicket!"):r==="OUTSIDE_OFF"?Math.abs(a)>.3&&o<.4?(u=!0,d="CAUGHT",f="Edged the swinging delivery! Caught behind!"):o<.6?(c=4,l=me.COVER_DRIVE,f="Exquisite cover drive piercing the gap for FOUR!"):(c=1,l=me.SQUARE_CUT,f="Steered away towards third man for one."):r==="DOWN_LEG"?o<.5?(c=4,l=me.FLICK_SHOT,f="Whipped off the pads elegantly for FOUR!"):(c=2,l=me.SWEEP_SHOT,f="Glanced down to fine leg for two runs."):n>142&&o<.3?(u=!0,d="BOWLED",f="Castle knocked over! Superb bowling!"):o<.4?(c=0,l=me.DEFENSIVE,f="Solid forward defensive stroke."):o<.75?(c=1,l=me.STRAIGHT_DRIVE,f="Pushed gently down the ground for a single."):(c=4,l=me.STRAIGHT_DRIVE,f="Timed through mid-on for a pristine boundary!"),{shotType:l,runs:c,isWicket:u,dismissalType:d,shotDescription:f,isSix:c===6,isFour:c===4}}}class Hy{constructor(){this.batsmanZ=9,this.strikeZoneZMin=7.8,this.strikeZoneZMax=9.6,this.sweetSpotZ=8.8,this.hasCollidedThisBall=!1}reset(){this.hasCollidedThisBall=!1}checkCollision(e,n,i,r=!1){if(this.hasCollidedThisBall)return null;const s=e.z;if(s<this.strikeZoneZMin||s>this.strikeZoneZMax)return null;const{shotType:a,isTriggered:o,wristSpeed:l,power:c}=i;if(!(o||r))return null;const d=s-this.sweetSpotZ;let f=Kn.GOOD,p=.8;Math.abs(d)<.25?(f=Kn.PERFECT,p=1):d<-.25&&d>=-.55?(f=Kn.EARLY,p=.75):d<-.55?(f=Kn.VERY_EARLY,p=.45):d>.25&&d<=.55?(f=Kn.LATE,p=.7):d>.55&&(f=Kn.VERY_LATE,p=.4);const _=Vt(i.direction?i.direction/45:0,-.6,.6),x=Math.abs(e.x-_),m=Math.abs(e.y-.7);let h="SWEET_SPOT";return x>.65||m>.9?null:(x>.4||p<.5?h="EDGE":f===Kn.PERFECT&&x<.25?h="SWEET_SPOT":h="MIDDLE",this.hasCollidedThisBall=!0,{collided:!0,timingZone:f,timingScore:p,contactQuality:h,contactPoint:{...e},shotType:a!==me.NONE?a:me.STRAIGHT_DRIVE,power:c||1,timestamp:performance.now()})}}class Gy{static computeShotTrajectory(e,n,i){const{timingZone:r,timingScore:s,contactQuality:a,shotType:o}=e,l=n.power||1;let c=26,u=12,d=0;switch(o){case me.STRAIGHT_DRIVE:u=10,d=0,c=30;break;case me.COVER_DRIVE:u=11,d=-38,c=32;break;case me.SQUARE_CUT:u=13,d=-75,c=31;break;case me.PULL_SHOT:u=18,d=55,c=34;break;case me.HOOK_SHOT:u=32,d=68,c=36;break;case me.SWEEP_SHOT:u=8,d=75,c=25;break;case me.FLICK_SHOT:u=14,d=35,c=28;break;case me.LOFTED_DRIVE:u=38,d=-15,c=38;break;case me.DEFENSIVE:u=4,d=10,c=10;break;default:u=12,d=0,c=25}a==="EDGE"?(d=-85+Math.random()*10,u=20+Math.random()*15,c*=.65):a==="SWEET_SPOT"&&(c*=1.25);const f=c*s*Vt(l,.6,1.4),p=Gf(u),_=Gf(d),x=f*Math.sin(p),m=f*Math.cos(p),h=m*Math.sin(_),v=-m*Math.cos(_);i.velocity={x:h,y:x,z:v},i.isBounced=!1,i.bounceCount=0;let g="DOT",S=0;const P=f*Math.cos(p)*(2*x/9.81);return a==="EDGE"&&r!==Kn.PERFECT?(g=Math.random()>.4?"CAUGHT":"EDGE_FOUR",S=g==="CAUGHT"?0:4):o===me.DEFENSIVE?(g="DOT",S=0):r===Kn.PERFECT&&u>25&&P>60?(g="SIX",S=6):f>24?(g="FOUR",S=4):f>17?(g="2_RUNS",S=2):f>10?(g="1_RUN",S=1):(g="DOT",S=0),{finalSpeed:f,elevationDeg:u,azimuthDeg:d,expectedOutcome:g,runs:S,isBoundary:S===4||S===6,isSix:S===6}}}const Pg=[{id:"m1",title:"First Innings",description:"Score 10 runs in a single match.",rewardXP:100,rewardCoins:50,check:t=>t.totalRuns>=10||t.matchRuns>=10},{id:"m2",title:"Boundary Hunter",description:"Hit your first FOUR in any mode.",rewardXP:150,rewardCoins:75,check:t=>t.matchFours>=1||t.totalFours>=1},{id:"m3",title:"Maximum Power",description:"Clear the ropes for a colossal SIX!",rewardXP:250,rewardCoins:120,check:t=>t.matchSixes>=1||t.totalSixes>=1},{id:"m4",title:"Master of Timing",description:"Execute a shot with PERFECT timing.",rewardXP:200,rewardCoins:100,check:t=>t.hasPerfectTiming===!0},{id:"m5",title:"Shot Master Extraordinaire",description:"Successfully execute 3 different shot types.",rewardXP:300,rewardCoins:150,check:t=>(t.uniqueShotsCount||0)>=3},{id:"m6",title:"Wicket Taker",description:"Take your first wicket in Bowling Challenge.",rewardXP:350,rewardCoins:180,check:t=>t.totalWickets>=1||t.matchWickets>=1},{id:"m7",title:"Blitzkrieg Chase",description:"Complete a Target Chase victory!",rewardXP:450,rewardCoins:250,check:t=>t.targetChasedSuccess===!0},{id:"m8",title:"Cricket Vision Star",description:"Accumulate 100 career runs.",rewardXP:600,rewardCoins:400,check:t=>(t.totalRuns||0)>=100}];class pd{static checkMissions(e,n){const i=Ri.getMissionsProgress(),r=[];let s={...n};return Pg.forEach(a=>{i[a.id]||a.check(e)&&(i[a.id]={completed:!0,timestamp:Date.now()},r.push(a),s.xp+=a.rewardXP,s.coins+=a.rewardCoins)}),r.length>0&&(Ri.saveMissionsProgress(i),s=this.updatePlayerRank(s),Ri.saveProfile(s)),{newlyCompleted:r,updatedProfile:s,progress:i}}static updatePlayerRank(e){let n=1;for(let i=Er.length-1;i>=0;i--)if(e.xp>=Er[i].xpNeeded){n=Er[i].level;break}return{...e,level:n}}static getPlayerRankTitle(e){return(Er.find(i=>i.level===e)||Er[0]).title}}class Vy{constructor(e){this.audio=e,this.scoreManager=new ky,this.deliveryManager=new By("medium"),this.aiBatsman=new zy("medium"),this.collision=new Hy,this.mode=vt.QUICK_MATCH,this.state=$e.START_SCREEN,this.currentDelivery=null,this.currentShotResult=null,this.notification=null,this.targetShotType=null,this.matchStats={uniqueShots:new Set,hasPerfectTiming:!1},this.onStateChange=null,this.onScoreUpdate=null,this.onNotification=null,this.onBallDelivered=null,this.onBallHit=null,this.onWicket=null,this.onMatchComplete=null}initMatch(e=vt.QUICK_MATCH,n={}){this.mode=e,this.matchStats={uniqueShots:new Set,hasPerfectTiming:!1},this.currentDelivery=null,this.currentShotResult=null;let i=null,r=2;e===vt.BATTING_CHALLENGE||e===vt.BOWLING_CHALLENGE?r=1:e===vt.SHOT_MASTER?(r=1,this.pickNextTargetShot()):e===vt.TARGET_CHASE&&(r=2,i=n.targetRuns||36),this.scoreManager.reset(i,r),this.deliveryManager.setDifficulty(n.difficulty||"medium"),this.aiBatsman.setDifficulty(n.difficulty||"medium"),this.setState($e.PLAYING),this.onScoreUpdate&&this.onScoreUpdate(this.scoreManager)}pickNextTargetShot(){const e=[me.STRAIGHT_DRIVE,me.COVER_DRIVE,me.SQUARE_CUT,me.PULL_SHOT,me.LOFTED_DRIVE,me.FLICK_SHOT];this.targetShotType=e[Math.floor(Math.random()*e.length)]}setState(e){this.state=e,this.onStateChange&&this.onStateChange(e)}showNotification(e,n,i="info",r=2500){const s={title:e,subtitle:n,type:i,id:Date.now()};this.notification=s,this.onNotification&&this.onNotification(s)}prepareDelivery(){return this.scoreManager.isMatchFinished()?(this.endMatch(),null):(this.collision.reset(),this.currentShotResult=null,this.currentDelivery=this.deliveryManager.generateDelivery(this.scoreManager.totalBalls+1),this.audio&&this.audio.playBeep(!1),this.mode===vt.SHOT_MASTER&&this.pickNextTargetShot(),this.currentDelivery)}onBallReleased(e){this.currentDelivery&&(this.setState($e.BALL_IN_PLAY),this.audio&&this.audio.playBowlingRelease(),e.deliver(this.currentDelivery.speed,this.currentDelivery.type,this.currentDelivery.lineOffset,this.currentDelivery.swingAmount),this.onBallDelivered&&this.onBallDelivered(this.currentDelivery))}processBatSwing(e,n,i=!1){if(this.state!==$e.BALL_IN_PLAY)return null;const r=this.collision.checkCollision(e.position,e.velocity,n,i);if(!r)return null;const s=Gy.computeShotTrajectory(r,n,e);return this.currentShotResult={...r,...s},this.matchStats.uniqueShots.add(r.shotType),r.timingZone===Kn.PERFECT&&(this.matchStats.hasPerfectTiming=!0),this.audio&&this.audio.playBatHit(n.power,r.contactQuality==="SWEET_SPOT"),s.isSix?(this.showNotification("SIX!",`${r.shotType.replace("_"," ")} • Maximum!`,"six"),this.audio&&this.audio.playBoundaryCelebration(!0)):s.isBoundary?(this.showNotification("FOUR!","Cracking boundary to the ropes!","four"),this.audio&&this.audio.playBoundaryCelebration(!1)):r.timingZone===Kn.PERFECT&&this.showNotification("PERFECT TIMING!","Pure perfection in the sweet spot!","perfect"),this.mode===vt.SHOT_MASTER&&r.shotType===this.targetShotType&&(this.showNotification("TARGET SHOT HIT!","+150 Bonus Points for Target Mastery!","success"),s.runs+=2),this.onBallHit&&this.onBallHit(this.currentShotResult),this.currentShotResult}processUserBowling(e,n){if(this.mode!==vt.BOWLING_CHALLENGE)return;this.setState($e.BALL_IN_PLAY),this.audio&&this.audio.playBowlingRelease(),n.deliver(e.speed,e.deliveryType,e.lineOffset,e.swing);const i=this.aiBatsman.evaluateShot(e);this.currentShotResult=i,setTimeout(()=>{i.isWicket?(this.showNotification("WICKET!",i.shotDescription,"wicket"),this.audio&&this.audio.playWicketHit()):i.isSix?(this.showNotification("AI Hits SIX!",i.shotDescription,"six"),this.audio&&this.audio.playBoundaryCelebration(!0)):i.isFour&&(this.showNotification("AI Hits FOUR!",i.shotDescription,"four"),this.audio&&this.audio.playBoundaryCelebration(!1)),this.resolveBallOutcome({runs:i.runs,isWicket:i.isWicket,dismissalType:i.dismissalType,shotType:i.shotType,timingZone:"GOOD"})},1200)}checkBallPastBatsman(e){if(this.state!==$e.BALL_IN_PLAY)return;const n=lh.checkDismissal(e.position,e,this.collision.hasCollidedThisBall,this.currentShotResult);if(n.isWicket){this.audio&&this.audio.playWicketHit(),this.showNotification(n.description,"Clean bowled!","wicket"),this.onWicket&&this.onWicket(n),this.resolveBallOutcome({runs:0,isWicket:!0,dismissalType:n.dismissalType,shotType:"NONE",timingZone:"MISSED"});return}!this.collision.hasCollidedThisBall&&e.position.z>10.5&&this.resolveBallOutcome({runs:0,isWicket:!1,dismissalType:null,shotType:"NONE",timingZone:"MISSED"})}resolveBallOutcome(e){this.state===$e.BALL_RESULT||this.state===$e.MATCH_COMPLETE||(this.setState($e.BALL_RESULT),this.scoreManager.recordDelivery(e),this.onScoreUpdate&&this.onScoreUpdate(this.scoreManager),this.scoreManager.isMatchFinished()?setTimeout(()=>{this.endMatch()},1600):setTimeout(()=>{this.state===$e.BALL_RESULT&&this.setState($e.PLAYING)},2200))}endMatch(){this.setState($e.MATCH_COMPLETE);const e=this.scoreManager.getMatchResult(),n=Ri.getProfile(),i=this.scoreManager.totalRuns*15+this.scoreManager.sixes*25+(e.isWin?200:50),r=this.scoreManager.totalRuns*5+(e.isWin?100:25),s={...n,matchesPlayed:n.matchesPlayed+1,matchesWon:n.matchesWon+(e.isWin?1:0),totalRuns:n.totalRuns+this.scoreManager.totalRuns,totalFours:n.totalFours+this.scoreManager.fours,totalSixes:n.totalSixes+this.scoreManager.sixes,bestScore:Math.max(n.bestScore,this.scoreManager.totalRuns),xp:n.xp+i,coins:n.coins+r},a={matchRuns:this.scoreManager.totalRuns,totalRuns:s.totalRuns,matchFours:this.scoreManager.fours,totalFours:s.totalFours,matchSixes:this.scoreManager.sixes,totalSixes:s.totalSixes,matchWickets:this.scoreManager.bowlerScore.wickets,totalWickets:s.totalWickets,hasPerfectTiming:this.matchStats.hasPerfectTiming,uniqueShotsCount:this.matchStats.uniqueShots.size,targetChasedSuccess:this.mode===vt.TARGET_CHASE&&e.isWin},o=pd.checkMissions(a,s);Ri.saveProfile(o.updatedProfile),e.isWin&&this.audio&&this.audio.playVictory();const l={result:e,score:this.scoreManager,earnedXP:i,earnedCoins:r,newMissions:o.newlyCompleted,updatedProfile:o.updatedProfile};this.onMatchComplete&&this.onMatchComplete(l)}}const Wy="modulepreload",jy=function(t){return"/"+t},Vf={},Xy=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=jy(l),l in Vf)return;Vf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":Wy,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};class Yy{constructor(e=.35){this.alpha=e,this.current={x:0,y:0,z:0},this.initialized=!1}update(e,n=.016){if(!e)return this.current;if(!this.initialized)return this.current={x:e.x||0,y:e.y||0,z:e.z||0},this.initialized=!0,this.current;const i=Math.min(1,this.alpha*(n/.016));return this.current.x+=(e.x-this.current.x)*i,this.current.y+=(e.y-this.current.y)*i,this.current.z+=(e.z-this.current.z)*i,this.current}reset(){this.initialized=!1}}class Wf{constructor(e=5){this.size=e,this.buffer=[]}push(e){this.buffer.push(e),this.buffer.length>this.size&&this.buffer.shift()}average(){return this.buffer.length===0?0:this.buffer.reduce((n,i)=>n+i,0)/this.buffer.length}max(){return this.buffer.length===0?0:Math.max(...this.buffer)}clear(){this.buffer=[]}}const Ce={NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,MOUTH_LEFT:9,MOUTH_RIGHT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32};class qy{constructor(){this.baseline={shoulderWidth:.3,torsoHeight:.45,armLength:.35,bodyCenter:{x:.5,y:.5,z:0},isCalibrated:!1},this.smoothers={},Object.values(Ce).forEach(e=>{this.smoothers[e]=new Yy(.4)})}setBaseline(e){this.baseline={...this.baseline,...e,isCalibrated:!0}}process(e,n=!0){if(!e||e.length<33)return null;const i=e.map((T,H)=>{const K={x:n?1-T.x:T.x,y:T.y,z:T.z||0,visibility:T.visibility!==void 0?T.visibility:1};return{...this.smoothers[H].update(K),visibility:K.visibility}}),r=i[Ce.LEFT_SHOULDER],s=i[Ce.RIGHT_SHOULDER],a=i[Ce.LEFT_HIP],o=i[Ce.RIGHT_HIP],l=i[Ce.LEFT_WRIST],c=i[Ce.RIGHT_WRIST],u=i[Ce.LEFT_ELBOW],d=i[Ce.RIGHT_ELBOW],f=(r.visibility>.4||s.visibility>.4)&&(l.visibility>.4||c.visibility>.4),p={x:(r.x+s.x)*.5,y:(r.y+s.y)*.5,z:((r.z||0)+(s.z||0))*.5},_={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5,z:((a.z||0)+(o.z||0))*.5},x=Math.max(.1,ch(r,s)),m=Math.max(.15,ch(p,_)),h=this.baseline.isCalibrated?this.baseline.shoulderWidth/x:1/(x*3.3),v=i.map(T=>({x:(T.x-p.x)*h,y:(T.y-p.y)*h,z:((T.z||0)-p.z)*h,visibility:T.visibility})),g=To(r,u,l),S=To(s,d,c),P=To(a,r,u),C=To(o,s,d),b={x:p.x-_.x,y:p.y-_.y},U=Math.atan2(b.x,-b.y)*(180/Math.PI),E={x:(v[Ce.LEFT_WRIST].x+v[Ce.RIGHT_WRIST].x)*.5,y:(v[Ce.LEFT_WRIST].y+v[Ce.RIGHT_WRIST].y)*.5,z:(v[Ce.LEFT_WRIST].z+v[Ce.RIGHT_WRIST].z)*.5};return{rawLandmarks:i,normalizedLandmarks:v,shoulderMid:p,hipMid:_,shoulderWidth:x,torsoHeight:m,upperBodyVisible:f,jointAngles:{leftElbowAngle:g,rightElbowAngle:S,leftShoulderAngle:P,rightShoulderAngle:C,spineTilt:U},handsCentroid:E,leftWrist:v[Ce.LEFT_WRIST],rightWrist:v[Ce.RIGHT_WRIST],timestamp:performance.now()}}}class $y{constructor(e=16){this.historyLength=e,this.frames=[],this.wristVelocitySmoother=new Wf(4),this.bodyMovementSmoother=new Wf(6)}addFrame(e){e&&(this.frames.push(e),this.frames.length>this.historyLength&&this.frames.shift())}clear(){this.frames=[],this.wristVelocitySmoother.clear(),this.bodyMovementSmoother.clear()}analyze(){if(this.frames.length<2)return{wristSpeed:0,wristVelocity:{x:0,y:0,z:0},swingTrajectory:{dx:0,dy:0,dz:0},bodyVelocity:{x:0,y:0},bodySpeed:0,isSwinging:!1,swingPhase:"IDLE",dominantHand:"right"};const e=this.frames[this.frames.length-1],n=this.frames[this.frames.length-2],i=Math.max(.01,(e.timestamp-n.timestamp)/1e3),r={x:(e.handsCentroid.x-n.handsCentroid.x)/i,y:(e.handsCentroid.y-n.handsCentroid.y)/i,z:(e.handsCentroid.z-n.handsCentroid.z)/i},s=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z);this.wristVelocitySmoother.push(s);const a=this.wristVelocitySmoother.average(),o={x:(e.shoulderMid.x-n.shoulderMid.x)/i,y:(e.shoulderMid.y-n.shoulderMid.y)/i},l=Math.sqrt(o.x*o.x+o.y*o.y);this.bodyMovementSmoother.push(l);const c=Math.min(8,this.frames.length),u=this.frames[this.frames.length-c],d={dx:e.handsCentroid.x-u.handsCentroid.x,dy:e.handsCentroid.y-u.handsCentroid.y,dz:e.handsCentroid.z-u.handsCentroid.z},f=a>1.8;let p="IDLE";return f?d.dy<-.15?p="DOWNSWING":d.dy>.15?p="FOLLOW_THROUGH":p="CROSS_BAT":e.handsCentroid.y<-.2?p="BACKLIFT":p="STANCE",{wristSpeed:a,rawWristSpeed:s,wristVelocity:r,swingTrajectory:d,bodyVelocity:o,bodySpeed:this.bodyMovementSmoother.average(),isSwinging:f,swingPhase:p,jointAngles:e.jointAngles,currentHands:e.handsCentroid,spineTilt:e.jointAngles.spineTilt}}}class Ky{constructor(e="right"){this.handedness=e,this.swingHistory=[],this.lastTriggeredShot=null,this.triggerCooldown=0}setHandedness(e){this.handedness=e}detectShot(e,n,i=1){if(!e||!n)return{shotType:me.NONE,confidence:0,power:0,elevation:0,direction:0,isTriggered:!1};const{wristSpeed:r,wristVelocity:s,swingTrajectory:a,currentHands:o,spineTilt:l}=e,{jointAngles:c}=n,u=this.handedness==="right"?-1:1,d=this.handedness==="right"?1:-1,f=a.dx*u,p=a.dx*d,_=-a.dy;a.dz;const x=1.6,m=r>.6&&r<x&&o.y>0,h=r>=x;if(!h&&!m)return{shotType:me.NONE,confidence:0,power:Vt(r/3,0,1),elevation:0,direction:0,isTriggered:!1};let v=me.STRAIGHT_DRIVE,g=70,S=15,P=0;m?(v=me.DEFENSIVE,g=85,S=5,P=0):o.y<-.2&&Math.abs(a.dx)>.25?p>.15?o.y<-.4?(v=me.HOOK_SHOT,g=Vt(75+r*8,70,96),S=28,P=45*d):(v=me.PULL_SHOT,g=Vt(80+r*6,75,98),S=18,P=35*d):(v=me.SQUARE_CUT,g=Vt(78+r*7,72,95),S=14,P=-40*u):_>.4&&r>2.5?(v=me.LOFTED_DRIVE,g=Vt(80+_*20,75,98),S=38,P=f>.15?-20*u:p>.15?20*d:0):f>.2?(v=me.COVER_DRIVE,g=Vt(78+f*35,75,96),S=12,P=-28*u):p>.2&&_<.2?o.y>.35?(v=me.SWEEP_SHOT,g=Vt(80+p*25,72,94),S=8,P=50*d):(v=me.FLICK_SHOT,g=Vt(82+p*20,76,95),S=15,P=30*d):(v=me.STRAIGHT_DRIVE,g=Vt(75+r*6,70,95),S=14,P=0);const C=r/3*(g/100),b=Vt(C*1.2,.4,1.6);return{shotType:v,confidence:Math.round(g),power:b,elevation:S,direction:P,wristSpeed:r,isTriggered:h||m}}}class Zy{constructor(e="right"){this.bowlingArm=e,this.state="IDLE",this.overheadTime=0,this.peakWristY=1,this.releaseHistory=[]}setBowlingArm(e){this.bowlingArm=e}reset(){this.state="IDLE",this.overheadTime=0,this.peakWristY=1}detectBowlingAction(e,n){if(!e||!n)return null;const{rawLandmarks:i,normalizedLandmarks:r,jointAngles:s}=n,{wristSpeed:a}=e,o=this.bowlingArm==="right"?r[16]:r[15];this.bowlingArm==="right"?r[14]:r[13];const l=this.bowlingArm==="right"?r[12]:r[11];if(!o||!l)return null;const c=o.y<-.35;if(o.y<-.6,this.state==="IDLE")c&&a>1.2&&(this.state="OVERHEAD",this.overheadTime=performance.now(),this.peakWristY=o.y);else if(this.state==="OVERHEAD"&&(o.y<this.peakWristY&&(this.peakWristY=o.y),o.y>-.1&&a>2)){this.state="RELEASED";const u=Math.max(.08,(performance.now()-this.overheadTime)/1e3),d=Vt(110+a*8+1/u*5,105,155),f=Math.round(d),p=o.x-l.x;let _="STUMPS",x=0;p<-.15?(_="OUTSIDE_OFF",x=-.45):p>.15&&(_="DOWN_LEG",x=.45);let m=He.GOOD_LENGTH,h="GOOD_LENGTH";this.peakWristY<-.8&&a>3.2?(m=He.BOUNCER,h="SHORT_PITCH"):o.y>.15?(m=He.YORKER,h="FULL_YORKER"):f>138?(m=He.INSWING,h="GOOD_LENGTH"):f<118&&(m=He.SLOWER_BALL,h="FULL_TOSS");let v=0;this.bowlingArm==="right"?v=p*1.5:v=-p*1.5;const g={speed:f,deliveryType:m,lengthZone:h,line:_,lineOffset:x,swing:Vt(v,-.6,.6),peakHeight:Math.abs(this.peakWristY),confidence:Vt(Math.round(75+a*6),70,98),timestamp:performance.now()};return this.releaseHistory.push(g),g}return null}}class Qy{constructor(){this.videoElement=null,this.canvasElement=null,this.ctx=null,this.pose=null,this.camera=null,this.isRunning=!1,this.isCameraActive=!1,this.isLoaded=!1,this.fps=0,this.frameCount=0,this.lastFpsTime=performance.now(),this.lastInferenceTime=0,this.inferenceInterval=35,this.processor=new qy,this.analyzer=new $y,this.battingDetector=new Ky("right"),this.bowlingDetector=new Zy("right"),this.onPoseUpdate=null,this.onStatusChange=null,this.onError=null,this.latestResult={processedPose:null,movement:null,batting:null,bowling:null}}async init(e,n=null){var i;this.videoElement=e,this.canvasElement=n,n&&(this.ctx=n.getContext("2d"));try{this.updateStatus("INITIALIZING_MEDIAPIPE","Loading vision model...");let r=window.Pose;if(!r)try{const s=await Xy(()=>import("./pose-M0KkXCWL.js").then(a=>a.p),[]);r=s.Pose||((i=s.default)==null?void 0:i.Pose)||window.Pose}catch{r=await this.loadPoseFromCDN()}if(!r)throw new Error("MediaPipe Pose library could not be loaded");return this.pose=new r({locateFile:s=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose/${s}`}),this.pose.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!1,smoothSegmentation:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.pose.onResults(this.handleResults.bind(this)),this.isLoaded=!0,this.updateStatus("READY","Vision model ready"),!0}catch(r){return console.warn("PoseDetector init error:",r),this.updateStatus("ERROR",r.message),this.onError&&this.onError(r),!1}}loadPoseFromCDN(){return new Promise((e,n)=>{if(window.Pose)return e(window.Pose);const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js",i.crossOrigin="anonymous",i.onload=()=>e(window.Pose),i.onerror=r=>n(new Error("Failed to load MediaPipe Pose from CDN")),document.head.appendChild(i)})}async startCamera(e="user"){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){const n=new Error("Webcam API is not supported in this browser environment");return this.onError&&this.onError(n),!1}try{this.updateStatus("REQUESTING_CAMERA","Requesting camera access...");const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:e,width:{ideal:640},height:{ideal:480},frameRate:{ideal:30}},audio:!1});return this.videoElement&&(this.videoElement.srcObject=n,await new Promise(i=>{this.videoElement.onloadedmetadata=()=>{this.videoElement.play(),i()}})),this.isCameraActive=!0,this.isRunning=!0,this.updateStatus("ACTIVE","Camera active"),this.startProcessingLoop(),!0}catch(n){return console.warn("Camera access error:",n),this.isCameraActive=!1,this.updateStatus("CAMERA_DENIED","Camera permission denied or unavailable"),this.onError&&this.onError(n),!1}}stopCamera(){this.isRunning=!1,this.isCameraActive=!1,this.videoElement&&this.videoElement.srcObject&&(this.videoElement.srcObject.getTracks().forEach(n=>n.stop()),this.videoElement.srcObject=null),this.updateStatus("STOPPED","Camera stopped")}startProcessingLoop(){const e=async()=>{if(!this.isRunning)return;const n=performance.now();if(this.videoElement&&this.videoElement.readyState>=2&&this.pose&&n-this.lastInferenceTime>=this.inferenceInterval){this.lastInferenceTime=n;try{await this.pose.send({image:this.videoElement})}catch{}}requestAnimationFrame(e)};requestAnimationFrame(e)}handleResults(e){this.frameCount++;const n=performance.now();if(n-this.lastFpsTime>=1e3&&(this.fps=Math.round(this.frameCount*1e3/(n-this.lastFpsTime)),this.frameCount=0,this.lastFpsTime=n),!e||!e.poseLandmarks){this.latestResult={processedPose:null,movement:null,batting:null,bowling:null,fps:this.fps},this.onPoseUpdate&&this.onPoseUpdate(this.latestResult);return}const i=this.processor.process(e.poseLandmarks,!0);this.analyzer.addFrame(i);const r=this.analyzer.analyze(),s=this.battingDetector.detectShot(r,i),a=this.bowlingDetector.detectBowlingAction(r,i);this.latestResult={processedPose:i,movement:r,batting:s,bowling:a,fps:this.fps},this.canvasElement&&this.ctx&&this.drawSkeletonOverlay(i),this.onPoseUpdate&&this.onPoseUpdate(this.latestResult)}drawSkeletonOverlay(e){if(!this.ctx||!this.canvasElement||!e)return;const{width:n,height:i}=this.canvasElement;this.ctx.clearRect(0,0,n,i);const r=e.rawLandmarks;if(!r)return;const s=[[Ce.LEFT_SHOULDER,Ce.RIGHT_SHOULDER],[Ce.LEFT_SHOULDER,Ce.LEFT_ELBOW],[Ce.LEFT_ELBOW,Ce.LEFT_WRIST],[Ce.RIGHT_SHOULDER,Ce.RIGHT_ELBOW],[Ce.RIGHT_ELBOW,Ce.RIGHT_WRIST],[Ce.LEFT_SHOULDER,Ce.LEFT_HIP],[Ce.RIGHT_SHOULDER,Ce.RIGHT_HIP],[Ce.LEFT_HIP,Ce.RIGHT_HIP],[Ce.LEFT_HIP,Ce.LEFT_KNEE],[Ce.LEFT_KNEE,Ce.LEFT_ANKLE],[Ce.RIGHT_HIP,Ce.RIGHT_KNEE],[Ce.RIGHT_KNEE,Ce.RIGHT_ANKLE]];this.ctx.lineWidth=3,this.ctx.strokeStyle="#06b6d4",this.ctx.beginPath(),s.forEach(([a,o])=>{const l=r[a],c=r[o];l&&c&&l.visibility>.4&&c.visibility>.4&&(this.ctx.moveTo(l.x*n,l.y*i),this.ctx.lineTo(c.x*n,c.y*i))}),this.ctx.stroke(),r.forEach((a,o)=>{a.visibility>.4&&(this.ctx.beginPath(),this.ctx.arc(a.x*n,a.y*i,o===Ce.NOSE?5:4,0,2*Math.PI),this.ctx.fillStyle=o===Ce.LEFT_WRIST||o===Ce.RIGHT_WRIST?"#f43f5e":"#22c55e",this.ctx.fill())})}updateStatus(e,n){this.onStatusChange&&this.onStatusChange({state:e,message:n,fps:this.fps})}}const Ng=Me.createContext(null),Jy=({children:t})=>{const[e,n]=Me.useState($e.START_SCREEN),[i,r]=Me.useState(vt.QUICK_MATCH),[s,a]=Me.useState(()=>Ri.getProfile()),[o,l]=Me.useState(()=>Ri.getSettings()),[c,u]=Me.useState(null),[d,f]=Me.useState({fps:0,isCameraActive:!1,poseDetected:!1,batting:null,bowling:null,movement:null}),[p,_]=Me.useState(null),[x,m]=Me.useState(null),[h,v]=Me.useState(null),[g,S]=Me.useState(!1),[P,C]=Me.useState(Yn.BATSMAN_FOLLOW),b=Me.useRef(null),U=Me.useRef(null),E=Me.useRef(!1);Me.useEffect(()=>{if(E.current)return;E.current=!0;const V=new Vy(Xr),Z=new Qy;b.current=V,U.current=Z,V.onStateChange=D=>n(D),V.onScoreUpdate=D=>u({...D}),V.onNotification=D=>{_(D),setTimeout(()=>_(k=>(k==null?void 0:k.id)===D.id?null:k),2800)},V.onMatchComplete=D=>{m(D),a({...D.updatedProfile})},Z.onPoseUpdate=D=>{f({fps:D.fps,isCameraActive:Z.isCameraActive,poseDetected:!!D.processedPose,batting:D.batting,bowling:D.bowling,movement:D.movement,processedPose:D.processedPose})},Xr.setMuted(!o.soundEnabled),Xr.setVolume(o.volume)},[]);const T=Me.useCallback(V=>{l(Z=>{const D={...Z,...V};return Ri.saveSettings(D),V.soundEnabled!==void 0&&Xr.setMuted(!V.soundEnabled),V.volume!==void 0&&Xr.setVolume(V.volume),V.handedness!==void 0&&U.current&&(U.current.battingDetector.setHandedness(V.handedness),U.current.bowlingDetector.setBowlingArm(V.handedness)),D})},[]),H=Me.useCallback((V=vt.QUICK_MATCH,Z={})=>{r(V),m(null),b.current&&(b.current.initMatch(V,Z),V===vt.SHOT_MASTER&&v(b.current.targetShotType))},[]),K=Me.useCallback(()=>{(e===$e.PLAYING||e===$e.BALL_IN_PLAY)&&n($e.PAUSED)},[e]),ee=Me.useCallback(()=>{e===$e.PAUSED&&n($e.PLAYING)},[e]),N=Me.useCallback(()=>{H(i)},[i,H]),G=Me.useCallback(()=>{n($e.MAIN_MENU)},[]);return y.jsx(Ng.Provider,{value:{gameState:e,setGameState:n,gameMode:i,profile:s,setProfile:a,settings:o,updateSettings:T,score:c,visionData:d,notification:p,matchSummary:x,targetShot:h,isDebugOpen:g,setIsDebugOpen:S,cameraView:P,setCameraView:C,matchManager:b.current,poseDetector:U.current,audioManager:Xr,startMatch:H,pauseMatch:K,resumeMatch:ee,restartMatch:N,exitToMenu:G},children:t})},Ln=()=>{const t=Me.useContext(Ng);if(!t)throw new Error("useGame must be used within a GameProvider");return t};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="160",eS=0,jf=1,tS=2,Ig=1,Dg=2,_i=3,lr=0,vn=1,Si=2,ir=0,Ns=1,Xf=2,Yf=3,qf=4,nS=5,Tr=100,iS=101,rS=102,$f=103,Kf=104,sS=200,aS=201,oS=202,lS=203,uh=204,hh=205,cS=206,uS=207,hS=208,dS=209,fS=210,pS=211,mS=212,gS=213,vS=214,_S=0,xS=1,yS=2,Pl=3,SS=4,MS=5,ES=6,TS=7,Ug=0,wS=1,AS=2,rr=0,RS=1,CS=2,bS=3,Og=4,LS=5,PS=6,Fg=300,Gs=301,Vs=302,dh=303,fh=304,ec=306,ph=1e3,Jn=1001,mh=1002,sn=1003,Zf=1004,Oc=1005,Un=1006,NS=1007,ja=1008,sr=1009,IS=1010,DS=1011,gd=1012,kg=1013,Yi=1014,qi=1015,Xa=1016,Bg=1017,zg=1018,Pr=1020,US=1021,ei=1023,OS=1024,FS=1025,Nr=1026,Ws=1027,kS=1028,Hg=1029,BS=1030,Gg=1031,Vg=1033,Fc=33776,kc=33777,Bc=33778,zc=33779,Qf=35840,Jf=35841,ep=35842,tp=35843,Wg=36196,np=37492,ip=37496,rp=37808,sp=37809,ap=37810,op=37811,lp=37812,cp=37813,up=37814,hp=37815,dp=37816,fp=37817,pp=37818,mp=37819,gp=37820,vp=37821,Hc=36492,_p=36494,xp=36495,zS=36283,yp=36284,Sp=36285,Mp=36286,jg=3e3,Ir=3001,HS=3200,GS=3201,Xg=0,VS=1,On="",Wt="srgb",Ni="srgb-linear",vd="display-p3",tc="display-p3-linear",Nl="linear",ht="srgb",Il="rec709",Dl="p3",Yr=7680,Ep=519,WS=512,jS=513,XS=514,Yg=515,YS=516,qS=517,$S=518,KS=519,Tp=35044,wp="300 es",gh=1035,wi=2e3,Ul=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,Ol=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function ZS(t,e){return(t%e+e)%e}function Vc(t,e,n){return(1-n)*t+n*e}function Ap(t){return(t&t-1)===0&&t!==0}function vh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],h=r[6],v=r[1],g=r[4],S=r[7],P=r[2],C=r[5],b=r[8];return s[0]=a*x+o*v+l*P,s[3]=a*m+o*g+l*C,s[6]=a*h+o*S+l*b,s[1]=c*x+u*v+d*P,s[4]=c*m+u*g+d*C,s[7]=c*h+u*S+d*b,s[2]=f*x+p*v+_*P,s[5]=f*m+p*g+_*C,s[8]=f*h+p*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Wc.makeScale(e,n)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wc=new qe;function qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QS(){const t=Fl("canvas");return t.style.display="block",t}const Rp={};function Ra(t){t in Rp||(Rp[t]=!0,console.warn(t))}const Cp=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bp=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Ni]:{transfer:Nl,primaries:Il,toReference:t=>t,fromReference:t=>t},[Wt]:{transfer:ht,primaries:Il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Nl,primaries:Dl,toReference:t=>t.applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Cp)},[vd]:{transfer:ht,primaries:Dl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(bp),fromReference:t=>t.applyMatrix3(Cp).convertLinearToSRGB()}},JS=new Set([Ni,tc]),st={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!JS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===On?Nl:wo[t].transfer}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class $g{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Fl("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Kg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ja(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xc(r[a].image)):s.push(Xc(r[a]))}else s=Xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$g.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tM=0;class An extends $s{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Jn,r=Jn,s=Un,a=ja,o=ei,l=sr,c=An.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ja(),this.name="",this.source=new Kg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ir?Wt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?Ir:jg}set encoding(e){Ra("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?Wt:On}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Fg;An.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,P=(h+1)/2,C=(u+f)/4,b=(d+x)/4,U=(_+m)/4;return g>S&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=b/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nM extends $s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ra("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?Wt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Kg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends nM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zg extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iM extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==_){let m=1-o;const h=l*f+c*p+u*_+d*x,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,h*v);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const S=o*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+_*S,d=d*m+x*S,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-o*p,e[n+2]=c*_+u*p+o*f-l*d,e[n+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new z,Lp=new eo;class Vr{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Ro.subVectors(this.max,oa),$r.subVectors(e.a,oa),Kr.subVectors(e.b,oa),Zr.subVectors(e.c,oa),Oi.subVectors(Kr,$r),Fi.subVectors(Zr,Kr),pr.subVectors($r,Zr);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-pr.z,pr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,pr.z,0,-pr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-pr.y,pr.x,0];return!qc(n,$r,Kr,Zr,Ro)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,$r,Kr,Zr,Ro))?!1:(Co.crossVectors(Oi,Fi),n=[Co.x,Co.y,Co.z],qc(n,$r,Kr,Zr,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,Ao=new Vr,$r=new z,Kr=new z,Zr=new z,Oi=new z,Fi=new z,pr=new z,oa=new z,Ro=new z,Co=new z,mr=new z;function qc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const rM=new Vr,la=new z,$c=new z;class to{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const n=la.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add($c)),this.expandByPoint(la.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new z,Kc=new z,bo=new z,ki=new z,Zc=new z,Lo=new z,Qc=new z;class sM{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kc.copy(e).add(n).multiplyScalar(.5),bo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Kc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(bo),o=ki.dot(this.direction),l=-ki.dot(bo),c=ki.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kc).addScaledVector(bo,f),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Zc.subVectors(n,e),Lo.subVectors(i,e),Qc.crossVectors(Zc,Lo);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Lo.crossVectors(ki,Lo));if(l<0)return null;const c=o*this.direction.dot(Zc.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(Qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,a,o,l,c,u,d,f,p,_,x,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,p,_,x,m)}set(e,n,i,r,s,a,o,l,c,u,d,f,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,_=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,x=c*d;n[0]=f-x*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,_=o*u,x=o*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=_*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=a*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,oM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),Po.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=Po.x,r[8]=xn.x,r[1]=Bi.y,r[5]=Po.y,r[9]=xn.y,r[2]=Bi.z,r[6]=Po.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],v=i[3],g=i[7],S=i[11],P=i[15],C=r[0],b=r[4],U=r[8],E=r[12],T=r[1],H=r[5],K=r[9],ee=r[13],N=r[2],G=r[6],V=r[10],Z=r[14],D=r[3],k=r[7],A=r[11],w=r[15];return s[0]=a*C+o*T+l*N+c*D,s[4]=a*b+o*H+l*G+c*k,s[8]=a*U+o*K+l*V+c*A,s[12]=a*E+o*ee+l*Z+c*w,s[1]=u*C+d*T+f*N+p*D,s[5]=u*b+d*H+f*G+p*k,s[9]=u*U+d*K+f*V+p*A,s[13]=u*E+d*ee+f*Z+p*w,s[2]=_*C+x*T+m*N+h*D,s[6]=_*b+x*H+m*G+h*k,s[10]=_*U+x*K+m*V+h*A,s[14]=_*E+x*ee+m*Z+h*w,s[3]=v*C+g*T+S*N+P*D,s[7]=v*b+g*H+S*G+P*k,s[11]=v*U+g*K+S*V+P*A,s[15]=v*E+g*ee+S*Z+P*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+x*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*d+n*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],v=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,g=_*f*c-u*m*c-_*l*p+a*m*p+u*l*h-a*f*h,S=u*x*c-_*d*c+_*o*p-a*x*p-u*o*h+a*d*h,P=_*d*l-u*x*l-_*o*f+a*x*f+u*o*m-a*d*m,C=n*v+i*g+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*b,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*h+i*l*h)*b,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*b,e[4]=g*b,e[5]=(u*m*s-_*f*s+_*r*p-n*m*p-u*r*h+n*f*h)*b,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*h-n*l*h)*b,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*b,e[8]=S*b,e[9]=(_*d*s-u*x*s-_*i*p+n*x*p+u*i*h-n*d*h)*b,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*h+n*o*h)*b,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*b,e[12]=P*b,e[13]=(u*x*r-_*d*r+_*i*f-n*x*f-u*i*m+n*d*m)*b,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*m-n*o*m)*b,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*f+n*o*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,_=s*d,x=a*u,m=a*d,h=o*d,v=l*c,g=l*u,S=l*d,P=i.x,C=i.y,b=i.z;return r[0]=(1-(x+h))*P,r[1]=(p+S)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(f+h))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+g)*b,r[9]=(m-v)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const a=Qr.set(r[4],r[5],r[6]).length(),o=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,u=1/a,d=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,n.setFromRotationMatrix(jn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=wi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(o===wi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ul)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*c,p=(i+r)*u;let _,x;if(o===wi)_=(a+s)*d,x=-2*d;else if(o===Ul)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new z,jn=new Tt,aM=new z(0,0,0),oM=new z(1,1,1),Bi=new z,Po=new z,xn=new z,Pp=new Tt,Np=new eo;class no{constructor(e=0,n=0,i=0,r=no.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}no.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Ip=new z,Jr=new eo,mi=new Tt,No=new z,ca=new z,cM=new z,uM=new eo,Dp=new z(1,0,0),Up=new z(0,1,0),Op=new z(0,0,1),hM={type:"added"},dM={type:"removed"};class Pt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new z,n=new no,i=new eo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new qe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ca,No,this.up):mi.lookAt(No,ca,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(mi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,uM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new z(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new z,gi=new z,Jc=new z,vi=new z,es=new z,ts=new z,Fp=new z,eu=new z,tu=new z,nu=new z;let Io=!1;class Qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),gi.subVectors(i,n),Jc.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(gi),l=Xn.dot(Jc),c=gi.dot(gi),u=gi.dot(Jc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),gi.subVectors(e,n),Xn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Xn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),eu.subVectors(e,i);const l=es.dot(eu),c=ts.dot(eu);if(l<=0&&c<=0)return n.copy(i);tu.subVectors(e,r);const u=es.dot(tu),d=ts.dot(tu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(es,a);nu.subVectors(e,s);const p=es.dot(nu),_=ts.dot(nu);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ts,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Fp.subVectors(s,r),o=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Fp,o);const h=1/(m+x+f);return a=x*h,o=f*h,n.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=ZS(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){const i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=jc(e.r),this.g=jc(e.g),this.b=jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return st.fromWorkingColorSpace(Zt.copy(this),e),Math.round(dn(Zt.r*255,0,255))*65536+Math.round(dn(Zt.g*255,0,255))*256+Math.round(dn(Zt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Wt){st.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Do);const i=Vc(zi.h,Do.h,n),r=Vc(zi.s,Do.s,n),s=Vc(zi.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Be;Be.NAMES=Jg;let fM=0;class io extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ns,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=hh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ep&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mi extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,Uo=new Qe;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}}class ev extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tv extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wt extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pM=0;const Nn=new Tt,ru=new Pt,ns=new z,yn=new Vr,ua=new Vr,kt=new z;class Gn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?tv:ev)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(yn.min,ua.min),yn.expandByPoint(kt),kt.addVectors(yn.max,ua.max),yn.expandByPoint(kt)):(yn.expandByPoint(ua.min),yn.expandByPoint(ua.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),kt.add(ns)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new z,u[T]=new z;const d=new z,f=new z,p=new z,_=new Qe,x=new Qe,m=new Qe,h=new z,v=new z;function g(T,H,K){d.fromArray(r,T*3),f.fromArray(r,H*3),p.fromArray(r,K*3),_.fromArray(a,T*2),x.fromArray(a,H*2),m.fromArray(a,K*2),f.sub(d),p.sub(d),x.sub(_),m.sub(_);const ee=1/(x.x*m.y-m.x*x.y);isFinite(ee)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ee),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(ee),c[T].add(h),c[H].add(h),c[K].add(h),u[T].add(v),u[H].add(v),u[K].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,H=S.length;T<H;++T){const K=S[T],ee=K.start,N=K.count;for(let G=ee,V=ee+N;G<V;G+=3)g(i[G+0],i[G+1],i[G+2])}const P=new z,C=new z,b=new z,U=new z;function E(T){b.fromArray(s,T*3),U.copy(b);const H=c[T];P.copy(H),P.sub(b.multiplyScalar(b.dot(H))).normalize(),C.crossVectors(U,H);const ee=C.dot(u[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=ee}for(let T=0,H=S.length;T<H;++T){const K=S[T],ee=K.start,N=K.count;for(let G=ee,V=ee+N;G<V;G+=3)E(i[G+0]),E(i[G+1]),E(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new ii(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new Tt,gr=new sM,Oo=new to,Bp=new z,is=new z,rs=new z,ss=new z,su=new z,Fo=new z,ko=new Qe,Bo=new Qe,zo=new Qe,zp=new z,Hp=new z,Gp=new z,Ho=new z,Go=new z;class Ne extends Pt{constructor(e=new Gn,n=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(su.fromBufferAttribute(d,e),a?Fo.addScaledVector(su,u):Fo.addScaledVector(su.sub(n),u))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Oo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Oo,Bp)===null||gr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(kp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const C=o.getX(S),b=o.getX(S+1),U=o.getX(S+2);r=Vo(this,h,e,i,c,u,d,C,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Vo(this,a,e,i,c,u,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=g;S<P;S+=3){const C=S,b=S+1,U=S+2;r=Vo(this,h,e,i,c,u,d,C,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=m,g=m+1,S=m+2;r=Vo(this,a,e,i,c,u,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mM(t,e,n,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;Go.copy(o),Go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Go);return c<n.near||c>n.far?null:{distance:c,point:Go.clone(),object:t}}function Vo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,is),t.getVertexPosition(l,rs),t.getVertexPosition(c,ss);const u=mM(t,e,n,i,is,rs,ss,Ho);if(u){r&&(ko.fromBufferAttribute(r,o),Bo.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,c),u.uv=Qn.getInterpolation(Ho,is,rs,ss,ko,Bo,zo,new Qe)),s&&(ko.fromBufferAttribute(s,o),Bo.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(Ho,is,rs,ss,ko,Bo,zo,new Qe),u.uv2=u.uv1),a&&(zp.fromBufferAttribute(a,o),Hp.fromBufferAttribute(a,l),Gp.fromBufferAttribute(a,c),u.normal=Qn.getInterpolation(Ho,is,rs,ss,zp,Hp,Gp,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new z,materialIndex:0};Qn.getNormal(is,rs,ss,d.normal),u.face=d}return u}class Tn extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(d,2));function _(x,m,h,v,g,S,P,C,b,U,E){const T=S/b,H=P/U,K=S/2,ee=P/2,N=C/2,G=b+1,V=U+1;let Z=0,D=0;const k=new z;for(let A=0;A<V;A++){const w=A*H-ee;for(let Y=0;Y<G;Y++){const O=Y*T-K;k[x]=O*v,k[m]=w*g,k[h]=N,c.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[h]=C>0?1:-1,u.push(k.x,k.y,k.z),d.push(Y/b),d.push(1-A/U),Z+=1}}for(let A=0;A<U;A++)for(let w=0;w<b;w++){const Y=f+w+G*A,O=f+w+G*(A+1),W=f+(w+1)+G*(A+1),Q=f+(w+1)+G*A;l.push(Y,O,Q),l.push(O,W,Q),D+=6}o.addGroup(p,D,E),p+=D,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function gM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nv(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const vM={clone:js,merge:nn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let iv=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Mn extends iv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,os=1;class yM extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(as,os,e,n);r.layers=this.layers,this.add(r);const s=new Mn(as,os,e,n);s.layers=this.layers,this.add(s);const a=new Mn(as,os,e,n);a.layers=this.layers,this.add(a);const o=new Mn(as,os,e,n);o.layers=this.layers,this.add(o);const l=new Mn(as,os,e,n);l.layers=this.layers,this.add(l);const c=new Mn(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rv extends An{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ra("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ir?Wt:On),this.texture=new rv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tn(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ir});s.uniforms.tEquirect.value=n;const a=new Ne(r,s),o=n.minFilter;return n.minFilter===ja&&(n.minFilter=Un),new yM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new z,MM=new z,EM=new qe;class Sr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(MM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EM.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new to,Wo=new z;class _d{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],x=r[10],m=r[11],h=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+a,f+u,m+_,S+v).normalize(),i[3].setComponents(l-a,f-u,m-_,S-v).normalize(),i[4].setComponents(l-o,f-d,m-x,S-g).normalize(),n===wi)i[5].setComponents(l+o,f+d,m+x,S+g).normalize();else if(n===Ul)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,d){const f=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&_.length===0&&t.bufferSubData(d,0,f),_.length!==0){for(let x=0,m=_.length;x<m;x++){const h=_[x];n?t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class Ds extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*f-a;for(let g=0;g<c;g++){const S=g*d-s;_.push(S,-v,0),x.push(0,0,1),m.push(g/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const g=v+c*h,S=v+c*(h+1),P=v+1+c*(h+1),C=v+1+c*h;p.push(g,S,C),p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
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
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KM=`vec3 transformedNormal = objectNormal;
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
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,fE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,TE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,wE=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UE=`#if defined( USE_POINTS_UV )
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
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
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
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,N1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,z1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,G1=`#define MATCAP
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
}`,V1=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,W1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
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
}`,Y1=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,q1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,K1=`#define TOON
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
}`,Z1=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Q1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,iT=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ve={alphahash_fragment:wM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:bM,alphatest_pars_fragment:LM,aomap_fragment:PM,aomap_pars_fragment:NM,batching_pars_vertex:IM,batching_vertex:DM,begin_vertex:UM,beginnormal_vertex:OM,bsdfs:FM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:WM,color_pars_fragment:jM,color_pars_vertex:XM,color_vertex:YM,common:qM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:KM,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:_E,envmap_vertex:oE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:hE,gradientmap_pars_fragment:dE,lightmap_fragment:fE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:vE,lights_toon_fragment:xE,lights_toon_pars_fragment:yE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:EE,lights_physical_pars_fragment:TE,lights_fragment_begin:wE,lights_fragment_maps:AE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:PE,map_fragment:NE,map_pars_fragment:IE,map_particle_fragment:DE,map_particle_pars_fragment:UE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:FE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:GE,normal_fragment_maps:VE,normal_pars_fragment:WE,normal_pars_vertex:jE,normal_vertex:XE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:h1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:_1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:M1,worldpos_vertex:E1,background_vert:T1,background_frag:w1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:b1,depth_vert:L1,depth_frag:P1,distanceRGBA_vert:N1,distanceRGBA_frag:I1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:O1,linedashed_frag:F1,meshbasic_vert:k1,meshbasic_frag:B1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:G1,meshmatcap_frag:V1,meshnormal_vert:W1,meshnormal_frag:j1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:$1,meshtoon_vert:K1,meshtoon_frag:Z1,points_vert:Q1,points_frag:J1,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},li={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};li.physical={uniforms:nn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const jo={r:0,b:0,g:0};function rT(t,e,n,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ec)?(u===void 0&&(u=new Ne(new Tn(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:js(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=st.getTransfer(g.colorSpace)!==ht,(d!==g||f!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ne(new Ds(2,2),new zr({name:"BackgroundMaterial",uniforms:js(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(jo,nv(t)),i.buffers.color.setClear(jo.r,jo.g,jo.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:_}}function sT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(N,G,V,Z,D){let k=!1;if(a){const A=x(Z,V,G);c!==A&&(c=A,p(c.object)),k=h(N,Z,V,D),k&&v(N,Z,V,D)}else{const A=G.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==A)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=A,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,U(N,G,V,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,G,V){const Z=V.wireframe===!0;let D=o[N.id];D===void 0&&(D={},o[N.id]=D);let k=D[G.id];k===void 0&&(k={},D[G.id]=k);let A=k[Z];return A===void 0&&(A=m(f()),k[Z]=A),A}function m(N){const G=[],V=[],Z=[];for(let D=0;D<r;D++)G[D]=0,V[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:Z,object:N,attributes:{},index:null}}function h(N,G,V,Z){const D=c.attributes,k=G.attributes;let A=0;const w=V.getAttributes();for(const Y in w)if(w[Y].location>=0){const W=D[Y];let Q=k[Y];if(Q===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;A++}return c.attributesNum!==A||c.index!==Z}function v(N,G,V,Z){const D={},k=G.attributes;let A=0;const w=V.getAttributes();for(const Y in w)if(w[Y].location>=0){let W=k[Y];W===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));const Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),D[Y]=Q,A++}c.attributes=D,c.attributesNum=A,c.index=Z}function g(){const N=c.newAttributes;for(let G=0,V=N.length;G<V;G++)N[G]=0}function S(N){P(N,0)}function P(N,G){const V=c.newAttributes,Z=c.enabledAttributes,D=c.attributeDivisors;V[N]=1,Z[N]===0&&(t.enableVertexAttribArray(N),Z[N]=1),D[N]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),D[N]=G)}function C(){const N=c.newAttributes,G=c.enabledAttributes;for(let V=0,Z=G.length;V<Z;V++)G[V]!==N[V]&&(t.disableVertexAttribArray(V),G[V]=0)}function b(N,G,V,Z,D,k,A){A===!0?t.vertexAttribIPointer(N,G,V,D,k):t.vertexAttribPointer(N,G,V,Z,D,k)}function U(N,G,V,Z){if(i.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=Z.attributes,k=V.getAttributes(),A=G.defaultAttributeValues;for(const w in k){const Y=k[w];if(Y.location>=0){let O=D[w];if(O===void 0&&(w==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),w==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){const W=O.normalized,Q=O.itemSize,te=n.get(O);if(te===void 0)continue;const J=te.buffer,ue=te.type,ve=te.bytesPerElement,pe=i.isWebGL2===!0&&(ue===t.INT||ue===t.UNSIGNED_INT||O.gpuType===kg);if(O.isInterleavedBufferAttribute){const Ee=O.data,F=Ee.stride,Je=O.offset;if(Ee.isInstancedInterleavedBuffer){for(let oe=0;oe<Y.locationSize;oe++)P(Y.location+oe,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let oe=0;oe<Y.locationSize;oe++)S(Y.location+oe);t.bindBuffer(t.ARRAY_BUFFER,J);for(let oe=0;oe<Y.locationSize;oe++)b(Y.location+oe,Q/Y.locationSize,ue,W,F*ve,(Je+Q/Y.locationSize*oe)*ve,pe)}else{if(O.isInstancedBufferAttribute){for(let Ee=0;Ee<Y.locationSize;Ee++)P(Y.location+Ee,O.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)S(Y.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Ee=0;Ee<Y.locationSize;Ee++)b(Y.location+Ee,Q/Y.locationSize,ue,W,Q*ve,Q/Y.locationSize*Ee*ve,pe)}}else if(A!==void 0){const W=A[w];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(Y.location,W);break;case 3:t.vertexAttrib3fv(Y.location,W);break;case 4:t.vertexAttrib4fv(Y.location,W);break;default:t.vertexAttrib1fv(Y.location,W)}}}}C()}function E(){K();for(const N in o){const G=o[N];for(const V in G){const Z=G[V];for(const D in Z)_(Z[D].object),delete Z[D];delete G[V]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const G=o[N.id];for(const V in G){const Z=G[V];for(const D in Z)_(Z[D].object),delete Z[D];delete G[V]}delete o[N.id]}function H(N){for(const G in o){const V=o[G];if(V[N.id]===void 0)continue;const Z=V[N.id];for(const D in Z)_(Z[D].object),delete Z[D];delete V[N.id]}}function K(){ee(),u=!0,c!==l&&(c=l,p(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function aT(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,f){if(f===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,d,f),n.update(d,s,f)}function c(u,d,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(u[_],d[_]);else{p.multiDrawArraysWEBGL(s,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function oT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,S=a||e.has("OES_texture_float"),P=g&&S,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:C}}function lT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let S=h.clippingState||null;l.value=S,S=u(_,f,g,p);for(let P=0;P!==g;++P)S[P]=n[P];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==x;++g,S+=4)a.copy(d[g]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cT(t){let e=new WeakMap;function n(a,o){return o===dh?a.mapping=Gs:o===fh&&(a.mapping=Vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===dh||o===fh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new SM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class av extends iv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,Vp=[.125,.215,.35,.446,.526,.582],wr=20,ou=new av,Wp=new Be;let lu=null,cu=0,uu=0;const Mr=(1+Math.sqrt(5))/2,ls=1/Mr,jp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Mr,ls),new z(0,Mr,-ls),new z(ls,0,Mr),new z(-ls,0,Mr),new z(Mr,ls,0),new z(-Mr,ls,0)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Xa,format:ei,colorSpace:Ni,depthBuffer:!1},r=Yp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(s)),this._blurMaterial=hT(s,e,n)}return r}_compileMaterial(e){const n=new Ne(this._lodPlanes[0],e);this._renderer.compile(n,ou)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wp),u.toneMapping=rr,u.autoClear=!1;const p=new Mi({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new Ne(new Tn,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Wp),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const g=this._cubeSize;Xo(r,v*g,h>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jp[(r-1)%jp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ne(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*wr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):wr;m>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const h=[];let v=0;for(let b=0;b<wr;++b){const U=b/x,E=Math.exp(-U*U/2);h.push(E),b===0?v+=E:b<m&&(v+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const S=this._sizeLods[r],P=3*S*(r>g-Es?r-g+Es:0),C=4*(this._cubeSize-S);Xo(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(d,ou)}}function uT(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+Vp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Es?l=Vp[a-t+Es-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,h=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,U=C>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];v.set(E,x*_*C),g.set(f,m*_*C);const T=[C,C,C,C,C,C];S.set(T,h*_*C)}const P=new Gn;P.setAttribute("position",new ii(v,x)),P.setAttribute("uv",new ii(g,m)),P.setAttribute("faceIndex",new ii(S,h)),e.push(P),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yp(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(wr),r=new z(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function qp(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function $p(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dh||l===fh,u=l===Gs||l===Vs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Xp(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Xp(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,S=v.length;g<S;g+=3){const P=v[g+0],C=v[g+1],b=v[g+2];f.push(P,C,C,b,b,P)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const P=g+0,C=g+1,b=g+2;f.push(P,C,C,b,b,P)}}else return;const m=new(qg(f)?tv:ev)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function mT(t,e,n,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(s,_,o,p*l),n.update(_,s,1)}function d(p,_,x){if(x===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,o,p*l,x),n.update(_,s,x)}function f(p,_,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<x;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,o,p,0,x);let h=0;for(let v=0;v<x;v++)h+=_[v];n.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e){return t[0]-e[0]}function _T(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==_){let N=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let U=0;v===!0&&(U=1),g===!0&&(U=2),S===!0&&(U=3);let E=u.attributes.position.count*U,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const H=new Float32Array(E*T*4*_),K=new Zg(H,E,T,_);K.type=qi,K.needsUpdate=!0;const ee=U*4;for(let G=0;G<_;G++){const V=P[G],Z=C[G],D=b[G],k=E*T*4*G;for(let A=0;A<V.count;A++){const w=A*ee;v===!0&&(a.fromBufferAttribute(V,A),H[k+w+0]=a.x,H[k+w+1]=a.y,H[k+w+2]=a.z,H[k+w+3]=0),g===!0&&(a.fromBufferAttribute(Z,A),H[k+w+4]=a.x,H[k+w+5]=a.y,H[k+w+6]=a.z,H[k+w+7]=0),S===!0&&(a.fromBufferAttribute(D,A),H[k+w+8]=a.x,H[k+w+9]=a.y,H[k+w+10]=a.z,H[k+w+11]=D.itemSize===4?a.w:1)}}x={count:_,texture:K,size:new Qe(E,T)},s.set(u,x),u.addEventListener("dispose",N)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const h=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",h),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];i[u.id]=_}for(let g=0;g<p;g++){const S=_[g];S[0]=g,S[1]=f[g]}_.sort(_T);for(let g=0;g<8;g++)g<p&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(vT);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const S=o[g],P=S[0],C=S[1];P!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+g)!==x[P]&&u.setAttribute("morphTarget"+g,x[P]),m&&u.getAttribute("morphNormal"+g)!==m[P]&&u.setAttribute("morphNormal"+g,m[P]),r[g]=C,h+=C):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const v=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class ov extends An{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=Yi),i===void 0&&u===Ws&&(i=Pr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const lv=new An,cv=new ov(1,1);cv.compareFunction=Yg;const uv=new Zg,hv=new iM,dv=new rv,Kp=[],Zp=[],Qp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=Zp[e];n===void 0&&(n=new Int32Array(e),Zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;em.set(i),t.uniformMatrix2fv(this.addr,!1,em),Ut(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),Ut(n,i)}}function RT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),Ut(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?cv:lv;n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hv,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dv,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uv,r)}function zT(t){switch(t){case 5126:return ST;case 35664:return MT;case 35665:return ET;case 35666:return TT;case 35674:return wT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return bT;case 35668:case 35672:return LT;case 35669:case 35673:return PT;case 5125:return NT;case 36294:return IT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function jT(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YT(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function $T(t,e){t.uniform2iv(this.addr,e)}function KT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function ew(t,e){t.uniform3uiv(this.addr,e)}function tw(t,e){t.uniform4uiv(this.addr,e)}function nw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||lv,s[a])}function iw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||hv,s[a])}function rw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||dv,s[a])}function sw(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||uv,s[a])}function aw(t){switch(t){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return WT;case 35674:return jT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return $T;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}class ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class lw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aw(n.type)}}class cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function tm(t,e){t.seq.push(e),t.map[e.id]=e}function uw(t,e,n){const i=t.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),a=hu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tm(n,c===void 0?new ow(o,t,e):new lw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new cw(o),tm(n,d)),n=d}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);uw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hw=37297;let dw=0;function fw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function pw(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Dl&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Dl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ni:case tc:return[i,"LinearTransferOETF"];case Wt:case vd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fw(t.getShaderSource(e),a)}else return r}function mw(t,e){const n=pw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gw(t,e){let n;switch(e){case RS:n="Linear";break;case CS:n="Reinhard";break;case bS:n="OptimizedCineon";break;case Og:n="ACESFilmic";break;case PS:n="AgX";break;case LS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function vw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function _w(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}function xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ts(t){return t!==""}function rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(Sw,Ew)}const Mw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ew(t,e){let n=Ve[e];if(n===void 0){const i=Mw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _h(n)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(t){return t.replace(Tw,ww)}function ww(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function om(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Aw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Rw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ug:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case AS:e="ENVMAP_BLENDING_ADD";break}return e}function Lw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Pw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Aw(n),c=Rw(n),u=Cw(n),d=bw(n),f=Lw(n),p=n.isWebGL2?"":vw(n),_=_w(n),x=xw(s),m=r.createProgram();let h,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ts).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ts).join(`
`),v.length>0&&(v+=`
`)):(h=[om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),v=[p,om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==rr?gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,mw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),a=_h(a),a=rm(a,n),a=sm(a,n),o=_h(o),o=rm(o,n),o=sm(o,n),a=am(a),o=am(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+h+a,P=g+v+o,C=nm(r,r.VERTEX_SHADER,S),b=nm(r,r.FRAGMENT_SHADER,P);r.attachShader(m,C),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(K){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(b).trim();let V=!0,Z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,b);else{const D=im(r,C,"vertex"),k=im(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+D+`
`+k)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(N===""||G==="")&&(Z=!1);Z&&(K.diagnostics={runnable:V,programLog:ee,vertexShader:{log:N,prefix:h},fragmentShader:{log:G,prefix:v}})}r.deleteShader(C),r.deleteShader(b),E=new al(r,m),T=yw(r,m)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,hw)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=b,this}let Nw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Dw(e),n.set(e,i)),i}}class Dw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Uw(t,e,n,i,r,s,a){const o=new Qg,l=new Iw,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,T,H,K,ee){const N=K.fog,G=ee.geometry,V=E.isMeshStandardMaterial?K.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),D=Z&&Z.mapping===ec?Z.image.height:null,k=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const A=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,w=A!==void 0?A.length:0;let Y=0;G.morphAttributes.position!==void 0&&(Y=1),G.morphAttributes.normal!==void 0&&(Y=2),G.morphAttributes.color!==void 0&&(Y=3);let O,W,Q,te;if(k){const en=li[k];O=en.vertexShader,W=en.fragmentShader}else O=E.vertexShader,W=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const J=t.getRenderTarget(),ue=ee.isInstancedMesh===!0,ve=ee.isBatchedMesh===!0,pe=!!E.map,Ee=!!E.matcap,F=!!Z,Je=!!E.aoMap,oe=!!E.lightMap,Te=!!E.bumpMap,ge=!!E.normalMap,Ze=!!E.displacementMap,be=!!E.emissiveMap,L=!!E.metalnessMap,M=!!E.roughnessMap,j=E.anisotropy>0,se=E.clearcoat>0,ie=E.iridescence>0,ae=E.sheen>0,we=E.transmission>0,he=j&&!!E.anisotropyMap,ye=se&&!!E.clearcoatMap,Le=se&&!!E.clearcoatNormalMap,Fe=se&&!!E.clearcoatRoughnessMap,ne=ie&&!!E.iridescenceMap,tt=ie&&!!E.iridescenceThicknessMap,We=ae&&!!E.sheenColorMap,Ue=ae&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Se=!!E.specularColorMap,Ge=!!E.specularIntensityMap,it=we&&!!E.transmissionMap,St=we&&!!E.thicknessMap,Xe=!!E.gradientMap,le=!!E.alphaMap,I=E.alphaTest>0,de=!!E.alphaHash,fe=!!E.extensions,De=!!G.attributes.uv1,Pe=!!G.attributes.uv2,at=!!G.attributes.uv3;let ot=rr;return E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ot=t.toneMapping),{isWebGL2:u,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:O,fragmentShader:W,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ve,instancing:ue,instancingColor:ue&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ni,map:pe,matcap:Ee,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:D,aoMap:Je,lightMap:oe,bumpMap:Te,normalMap:ge,displacementMap:f&&Ze,emissiveMap:be,normalMapObjectSpace:ge&&E.normalMapType===VS,normalMapTangentSpace:ge&&E.normalMapType===Xg,metalnessMap:L,roughnessMap:M,anisotropy:j,anisotropyMap:he,clearcoat:se,clearcoatMap:ye,clearcoatNormalMap:Le,clearcoatRoughnessMap:Fe,iridescence:ie,iridescenceMap:ne,iridescenceThicknessMap:tt,sheen:ae,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Se,specularIntensityMap:Ge,transmission:we,transmissionMap:it,thicknessMap:St,gradientMap:Xe,opaque:E.transparent===!1&&E.blending===Ns,alphaMap:le,alphaTest:I,alphaHash:de,combine:E.combine,mapUv:pe&&x(E.map.channel),aoMapUv:Je&&x(E.aoMap.channel),lightMapUv:oe&&x(E.lightMap.channel),bumpMapUv:Te&&x(E.bumpMap.channel),normalMapUv:ge&&x(E.normalMap.channel),displacementMapUv:Ze&&x(E.displacementMap.channel),emissiveMapUv:be&&x(E.emissiveMap.channel),metalnessMapUv:L&&x(E.metalnessMap.channel),roughnessMapUv:M&&x(E.roughnessMap.channel),anisotropyMapUv:he&&x(E.anisotropyMap.channel),clearcoatMapUv:ye&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Re&&x(E.specularMap.channel),specularColorMapUv:Se&&x(E.specularColorMap.channel),specularIntensityMapUv:Ge&&x(E.specularIntensityMap.channel),transmissionMapUv:it&&x(E.transmissionMap.channel),thicknessMapUv:St&&x(E.thicknessMap.channel),alphaMapUv:le&&x(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ge||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Pe,vertexUv3s:at,pointsUvs:ee.isPoints===!0&&!!G.attributes.uv&&(pe||le),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&st.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:fe&&E.extensions.derivatives===!0,extensionFragDepth:fe&&E.extensions.fragDepth===!0,extensionDrawBuffers:fe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)T.push(H),T.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(v(T,E),g(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function g(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const T=_[E.type];let H;if(T){const K=li[T];H=vM.clone(K.uniforms)}else H=E.uniforms;return H}function P(E,T){let H;for(let K=0,ee=c.length;K<ee;K++){const N=c[K];if(N.cacheKey===T){H=N,++H.usedTimes;break}}return H===void 0&&(H=new Pw(t,T,E,s),c.push(H)),H}function C(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:P,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:U}}function Ow(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,_,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,p,_,x,m){const h=a(d,f,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,x,m){const h=a(d,f,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||Fw),i.length>1&&i.sort(f||lm),r.length>1&&r.sort(f||lm)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new cm,t.set(i,[a])):r>=s.length?(a=new cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Be};break;case"SpotLight":n={position:new z,direction:new z,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hw=0;function Gw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Vw(t,e){const n=new Bw,i=zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new Tt,o=new Tt;function l(u,d){let f=0,p=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let x=0,m=0,h=0,v=0,g=0,S=0,P=0,C=0,b=0,U=0,E=0;u.sort(Gw);const T=d===!0?Math.PI:1;for(let K=0,ee=u.length;K<ee;K++){const N=u[K],G=N.color,V=N.intensity,Z=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=G.r*V*T,p+=G.g*V*T,_+=G.b*V*T;else if(N.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(N.sh.coefficients[k],V);E++}else if(N.isDirectionalLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const A=N.shadow,w=i.get(N);w.shadowBias=A.bias,w.shadowNormalBias=A.normalBias,w.shadowRadius=A.radius,w.shadowMapSize=A.mapSize,r.directionalShadow[x]=w,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=N.shadow.matrix,S++}r.directional[x]=k,x++}else if(N.isSpotLight){const k=n.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(G).multiplyScalar(V*T),k.distance=Z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,r.spot[h]=k;const A=N.shadow;if(N.map&&(r.spotLightMap[b]=N.map,b++,A.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[h]=A.matrix,N.castShadow){const w=i.get(N);w.shadowBias=A.bias,w.shadowNormalBias=A.normalBias,w.shadowRadius=A.radius,w.shadowMapSize=A.mapSize,r.spotShadow[h]=w,r.spotShadowMap[h]=D,C++}h++}else if(N.isRectAreaLight){const k=n.get(N);k.color.copy(G).multiplyScalar(V),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=k,v++}else if(N.isPointLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),k.distance=N.distance,k.decay=N.decay,N.castShadow){const A=N.shadow,w=i.get(N);w.shadowBias=A.bias,w.shadowNormalBias=A.normalBias,w.shadowRadius=A.radius,w.shadowMapSize=A.mapSize,w.shadowCameraNear=A.camera.near,w.shadowCameraFar=A.camera.far,r.pointShadow[m]=w,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=N.shadow.matrix,P++}r.point[m]=k,m++}else if(N.isHemisphereLight){const k=n.get(N);k.skyColor.copy(N.color).multiplyScalar(V*T),k.groundColor.copy(N.groundColor).multiplyScalar(V*T),r.hemi[g]=k,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==h||H.rectAreaLength!==v||H.hemiLength!==g||H.numDirectionalShadows!==S||H.numPointShadows!==P||H.numSpotShadows!==C||H.numSpotMaps!==b||H.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,H.directionalLength=x,H.pointLength=m,H.spotLength=h,H.rectAreaLength=v,H.hemiLength=g,H.numDirectionalShadows=S,H.numPointShadows=P,H.numSpotShadows=C,H.numSpotMaps=b,H.numLightProbes=E,r.version=Hw++)}function c(u,d){let f=0,p=0,_=0,x=0,m=0;const h=d.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const S=u[v];if(S.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),f++}else if(S.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),_++}else if(S.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(h),o.identity(),a.copy(S.matrixWorld),a.premultiply(h),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function um(t,e){const n=new Vw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ww(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new um(t,e),n.set(s,[l])):a>=o.length?(l=new um(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class jw extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $w(t,e,n){let i=new _d;const r=new Qe,s=new Qe,a=new zt,o=new jw({depthPacking:GS}),l=new Xw,c={},u=n.maxTextureSize,d={[lr]:vn,[vn]:lr,[Si]:Si},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Yw,fragmentShader:qw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ne(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let h=this.type;this.render=function(C,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),K=t.state;K.setBlending(ir),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=h!==_i&&this.type===_i,N=h===_i&&this.type!==_i;for(let G=0,V=C.length;G<V;G++){const Z=C[G],D=Z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||ee===!0||N===!0){const w=this.type!==_i?{minFilter:sn,magFilter:sn}:{};D.map!==null&&D.map.dispose(),D.map=new Br(r.x,r.y,w),D.map.texture.name=Z.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const A=D.getViewportCount();for(let w=0;w<A;w++){const Y=D.getViewport(w);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),K.viewport(a),D.updateMatrices(Z,w),i=D.getFrustum(),S(b,U,D.camera,Z,this.type)}D.isPointLightShadow!==!0&&this.type===_i&&v(D,U),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,T,H)};function v(C,b){const U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Br(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,U,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,U,p,x,null)}function g(C,b,U,E){let T=null;const H=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(H!==void 0)T=H;else if(T=U.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const K=T.uuid,ee=b.uuid;let N=c[K];N===void 0&&(N={},c[K]=N);let G=N[ee];G===void 0&&(G=T.clone(),N[ee]=G,b.addEventListener("dispose",P)),T=G}if(T.visible=b.visible,T.wireframe=b.wireframe,E===_i?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:d[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=t.properties.get(T);K.light=U}return T}function S(C,b,U,E,T){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===_i)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const ee=e.update(C),N=C.material;if(Array.isArray(N)){const G=ee.groups;for(let V=0,Z=G.length;V<Z;V++){const D=G[V],k=N[D.materialIndex];if(k&&k.visible){const A=g(C,k,E,T);C.onBeforeShadow(t,C,b,U,ee,A,D),t.renderBufferDirect(U,null,ee,A,C,D),C.onAfterShadow(t,C,b,U,ee,A,D)}}}else if(N.visible){const G=g(C,N,E,T);C.onBeforeShadow(t,C,b,U,ee,G,null),t.renderBufferDirect(U,null,ee,G,C,null),C.onAfterShadow(t,C,b,U,ee,G,null)}}const K=C.children;for(let ee=0,N=K.length;ee<N;ee++)S(K[ee],b,U,E,T)}function P(C){C.target.removeEventListener("dispose",P);for(const U in c){const E=c[U],T=C.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function Kw(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const de=new zt;let fe=null;const De=new zt(0,0,0,0);return{setMask:function(Pe){fe!==Pe&&!I&&(t.colorMask(Pe,Pe,Pe,Pe),fe=Pe)},setLocked:function(Pe){I=Pe},setClear:function(Pe,at,ot,Ot,en){en===!0&&(Pe*=Ot,at*=Ot,ot*=Ot),de.set(Pe,at,ot,Ot),De.equals(de)===!1&&(t.clearColor(Pe,at,ot,Ot),De.copy(de))},reset:function(){I=!1,fe=null,De.set(-1,0,0,0)}}}function s(){let I=!1,de=null,fe=null,De=null;return{setTest:function(Pe){Pe?ve(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(Pe){de!==Pe&&!I&&(t.depthMask(Pe),de=Pe)},setFunc:function(Pe){if(fe!==Pe){switch(Pe){case _S:t.depthFunc(t.NEVER);break;case xS:t.depthFunc(t.ALWAYS);break;case yS:t.depthFunc(t.LESS);break;case Pl:t.depthFunc(t.LEQUAL);break;case SS:t.depthFunc(t.EQUAL);break;case MS:t.depthFunc(t.GEQUAL);break;case ES:t.depthFunc(t.GREATER);break;case TS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){De!==Pe&&(t.clearDepth(Pe),De=Pe)},reset:function(){I=!1,de=null,fe=null,De=null}}}function a(){let I=!1,de=null,fe=null,De=null,Pe=null,at=null,ot=null,Ot=null,en=null;return{setTest:function(lt){I||(lt?ve(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(lt){de!==lt&&!I&&(t.stencilMask(lt),de=lt)},setFunc:function(lt,tn,si){(fe!==lt||De!==tn||Pe!==si)&&(t.stencilFunc(lt,tn,si),fe=lt,De=tn,Pe=si)},setOp:function(lt,tn,si){(at!==lt||ot!==tn||Ot!==si)&&(t.stencilOp(lt,tn,si),at=lt,ot=tn,Ot=si)},setLocked:function(lt){I=lt},setClear:function(lt){en!==lt&&(t.clearStencil(lt),en=lt)},reset:function(){I=!1,de=null,fe=null,De=null,Pe=null,at=null,ot=null,Ot=null,en=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,x=[],m=null,h=!1,v=null,g=null,S=null,P=null,C=null,b=null,U=null,E=new Be(0,0,0),T=0,H=!1,K=null,ee=null,N=null,G=null,V=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const A=t.getParameter(t.VERSION);A.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(A)[1]),D=k>=1):A.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),D=k>=2);let w=null,Y={};const O=t.getParameter(t.SCISSOR_BOX),W=t.getParameter(t.VIEWPORT),Q=new zt().fromArray(O),te=new zt().fromArray(W);function J(I,de,fe,De){const Pe=new Uint8Array(4),at=t.createTexture();t.bindTexture(I,at),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<fe;ot++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(de+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return at}const ue={};ue[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(t.DEPTH_TEST),l.setFunc(Pl),be(!1),L(jf),ve(t.CULL_FACE),ge(ir);function ve(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function pe(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Ee(I,de){return p[I]!==de?(t.bindFramebuffer(I,de),p[I]=de,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function F(I,de){let fe=x,De=!1;if(I)if(fe=_.get(de),fe===void 0&&(fe=[],_.set(de,fe)),I.isWebGLMultipleRenderTargets){const Pe=I.texture;if(fe.length!==Pe.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let at=0,ot=Pe.length;at<ot;at++)fe[at]=t.COLOR_ATTACHMENT0+at;fe.length=Pe.length,De=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,De=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Je(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const oe={[Tr]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};if(i)oe[$f]=t.MIN,oe[Kf]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(oe[$f]=I.MIN_EXT,oe[Kf]=I.MAX_EXT)}const Te={[sS]:t.ZERO,[aS]:t.ONE,[oS]:t.SRC_COLOR,[uh]:t.SRC_ALPHA,[fS]:t.SRC_ALPHA_SATURATE,[hS]:t.DST_COLOR,[cS]:t.DST_ALPHA,[lS]:t.ONE_MINUS_SRC_COLOR,[hh]:t.ONE_MINUS_SRC_ALPHA,[dS]:t.ONE_MINUS_DST_COLOR,[uS]:t.ONE_MINUS_DST_ALPHA,[pS]:t.CONSTANT_COLOR,[mS]:t.ONE_MINUS_CONSTANT_COLOR,[gS]:t.CONSTANT_ALPHA,[vS]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(I,de,fe,De,Pe,at,ot,Ot,en,lt){if(I===ir){h===!0&&(pe(t.BLEND),h=!1);return}if(h===!1&&(ve(t.BLEND),h=!0),I!==nS){if(I!==v||lt!==H){if((g!==Tr||C!==Tr)&&(t.blendEquation(t.FUNC_ADD),g=Tr,C=Tr),lt)switch(I){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,P=null,b=null,U=null,E.set(0,0,0),T=0,v=I,H=lt}return}Pe=Pe||de,at=at||fe,ot=ot||De,(de!==g||Pe!==C)&&(t.blendEquationSeparate(oe[de],oe[Pe]),g=de,C=Pe),(fe!==S||De!==P||at!==b||ot!==U)&&(t.blendFuncSeparate(Te[fe],Te[De],Te[at],Te[ot]),S=fe,P=De,b=at,U=ot),(Ot.equals(E)===!1||en!==T)&&(t.blendColor(Ot.r,Ot.g,Ot.b,en),E.copy(Ot),T=en),v=I,H=!1}function Ze(I,de){I.side===Si?pe(t.CULL_FACE):ve(t.CULL_FACE);let fe=I.side===vn;de&&(fe=!fe),be(fe),I.blending===Ns&&I.transparent===!1?ge(ir):ge(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const De=I.stencilWrite;c.setTest(De),De&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),j(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(I){K!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),K=I)}function L(I){I!==eS?(ve(t.CULL_FACE),I!==ee&&(I===jf?t.cullFace(t.BACK):I===tS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),ee=I}function M(I){I!==N&&(D&&t.lineWidth(I),N=I)}function j(I,de,fe){I?(ve(t.POLYGON_OFFSET_FILL),(G!==de||V!==fe)&&(t.polygonOffset(de,fe),G=de,V=fe)):pe(t.POLYGON_OFFSET_FILL)}function se(I){I?ve(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function ie(I){I===void 0&&(I=t.TEXTURE0+Z-1),w!==I&&(t.activeTexture(I),w=I)}function ae(I,de,fe){fe===void 0&&(w===null?fe=t.TEXTURE0+Z-1:fe=w);let De=Y[fe];De===void 0&&(De={type:void 0,texture:void 0},Y[fe]=De),(De.type!==I||De.texture!==de)&&(w!==fe&&(t.activeTexture(fe),w=fe),t.bindTexture(I,de||ue[I]),De.type=I,De.texture=de)}function we(){const I=Y[w];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){Q.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function it(I){te.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function St(I,de){let fe=d.get(de);fe===void 0&&(fe=new WeakMap,d.set(de,fe));let De=fe.get(I);De===void 0&&(De=t.getUniformBlockIndex(de,I.name),fe.set(I,De))}function Xe(I,de){const De=d.get(de).get(I);u.get(de)!==De&&(t.uniformBlockBinding(de,De,I.__bindingPointIndex),u.set(de,De))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},w=null,Y={},p={},_=new WeakMap,x=[],m=null,h=!1,v=null,g=null,S=null,P=null,C=null,b=null,U=null,E=new Be(0,0,0),T=0,H=!1,K=null,ee=null,N=null,G=null,V=null,Q.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:pe,bindFramebuffer:Ee,drawBuffers:F,useProgram:Je,setBlending:ge,setMaterial:Ze,setFlipSided:be,setCullFace:L,setLineWidth:M,setPolygonOffset:j,setScissorTest:se,activeTexture:ie,bindTexture:ae,unbindTexture:we,compressedTexImage2D:he,compressedTexImage3D:ye,texImage2D:Re,texImage3D:Se,updateUBOMapping:St,uniformBlockBinding:Xe,texStorage2D:We,texStorage3D:Ue,texSubImage2D:Le,texSubImage3D:Fe,compressedTexSubImage2D:ne,compressedTexSubImage3D:tt,scissor:Ge,viewport:it,reset:le}}function Zw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,M){return p?new OffscreenCanvas(L,M):Fl("canvas")}function x(L,M,j,se){let ie=1;if((L.width>se||L.height>se)&&(ie=se/Math.max(L.width,L.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=M?vh:Math.floor,we=ae(ie*L.width),he=ae(ie*L.height);d===void 0&&(d=_(we,he));const ye=j?_(we,he):d;return ye.width=we,ye.height=he,ye.getContext("2d").drawImage(L,0,0,we,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+we+"x"+he+")."),ye}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return Ap(L.width)&&Ap(L.height)}function h(L){return o?!1:L.wrapS!==Jn||L.wrapT!==Jn||L.minFilter!==sn&&L.minFilter!==Un}function v(L,M){return L.generateMipmaps&&M&&L.minFilter!==sn&&L.minFilter!==Un}function g(L){t.generateMipmap(L)}function S(L,M,j,se,ie=!1){if(o===!1)return M;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=M;if(M===t.RED&&(j===t.FLOAT&&(ae=t.R32F),j===t.HALF_FLOAT&&(ae=t.R16F),j===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(ae=t.R8UI),j===t.UNSIGNED_SHORT&&(ae=t.R16UI),j===t.UNSIGNED_INT&&(ae=t.R32UI),j===t.BYTE&&(ae=t.R8I),j===t.SHORT&&(ae=t.R16I),j===t.INT&&(ae=t.R32I)),M===t.RG&&(j===t.FLOAT&&(ae=t.RG32F),j===t.HALF_FLOAT&&(ae=t.RG16F),j===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RGBA){const we=ie?Nl:st.getTransfer(se);j===t.FLOAT&&(ae=t.RGBA32F),j===t.HALF_FLOAT&&(ae=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ae=we===ht?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(L,M,j){return v(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function C(L){return L===sn||L===Zf||L===Oc?t.NEAREST:t.LINEAR}function b(L){const M=L.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&u.delete(M)}function U(L){const M=L.target;M.removeEventListener("dispose",U),H(M)}function E(L){const M=i.get(L);if(M.__webglInit===void 0)return;const j=L.source,se=f.get(j);if(se){const ie=se[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(L),Object.keys(se).length===0&&f.delete(j)}i.remove(L)}function T(L){const M=i.get(L);t.deleteTexture(M.__webglTexture);const j=L.source,se=f.get(j);delete se[M.__cacheKey],a.memory.textures--}function H(L){const M=L.texture,j=i.get(L),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(j.__webglFramebuffer[ie]))for(let ae=0;ae<j.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(j.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(j.__webglFramebuffer[ie]);j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ie])}else{if(Array.isArray(j.__webglFramebuffer))for(let ie=0;ie<j.__webglFramebuffer.length;ie++)t.deleteFramebuffer(j.__webglFramebuffer[ie]);else t.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ie=0;ie<j.__webglColorRenderbuffer.length;ie++)j.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ie]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ie=0,ae=M.length;ie<ae;ie++){const we=i.get(M[ie]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(M[ie])}i.remove(M),i.remove(L)}let K=0;function ee(){K=0}function N(){const L=K;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),K+=1,L}function G(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function V(L,M){const j=i.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(j,L,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function Z(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function D(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Q(j,L,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function k(L,M){const j=i.get(L);if(L.version>0&&j.__version!==L.version){te(j,L,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const A={[ph]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[mh]:t.MIRRORED_REPEAT},w={[sn]:t.NEAREST,[Zf]:t.NEAREST_MIPMAP_NEAREST,[Oc]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[NS]:t.LINEAR_MIPMAP_NEAREST,[ja]:t.LINEAR_MIPMAP_LINEAR},Y={[WS]:t.NEVER,[KS]:t.ALWAYS,[jS]:t.LESS,[Yg]:t.LEQUAL,[XS]:t.EQUAL,[$S]:t.GEQUAL,[YS]:t.GREATER,[qS]:t.NOTEQUAL};function O(L,M,j){if(j?(t.texParameteri(L,t.TEXTURE_WRAP_S,A[M.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,A[M.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,A[M.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,w[M.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,w[M.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Jn||M.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,C(M.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==sn&&M.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==Oc&&M.minFilter!==ja||M.type===qi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Xa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function W(L,M){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",b));const se=M.source;let ie=f.get(se);ie===void 0&&(ie={},f.set(se,ie));const ae=G(M);if(ae!==L.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ie[ae].usedTimes++;const we=ie[L.__cacheKey];we!==void 0&&(ie[L.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),L.__cacheKey=ae,L.__webglTexture=ie[ae].texture}return j}function Q(L,M,j){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ie=W(L,M),ae=M.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+j);const we=i.get(ae);if(ae.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const he=st.getPrimaries(st.workingColorSpace),ye=M.colorSpace===On?null:st.getPrimaries(M.colorSpace),Le=M.colorSpace===On||he===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Fe=h(M)&&m(M.image)===!1;let ne=x(M.image,Fe,!1,r.maxTextureSize);ne=be(M,ne);const tt=m(ne)||o,We=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Re=S(M.internalFormat,We,Ue,M.colorSpace,M.isVideoTexture);O(se,M,tt);let Se;const Ge=M.mipmaps,it=o&&M.isVideoTexture!==!0&&Re!==Wg,St=we.__version===void 0||ie===!0,Xe=P(M,ne,tt);if(M.isDepthTexture)Re=t.DEPTH_COMPONENT,o?M.type===qi?Re=t.DEPTH_COMPONENT32F:M.type===Yi?Re=t.DEPTH_COMPONENT24:M.type===Pr?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nr&&Re===t.DEPTH_COMPONENT&&M.type!==gd&&M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yi,Ue=s.convert(M.type)),M.format===Ws&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,M.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pr,Ue=s.convert(M.type))),St&&(it?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,We,Ue,null));else if(M.isDataTexture)if(Ge.length>0&&tt){it&&St&&n.texStorage2D(t.TEXTURE_2D,Xe,Re,Ge[0].width,Ge[0].height);for(let le=0,I=Ge.length;le<I;le++)Se=Ge[le],it?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Se.width,Se.height,We,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,le,Re,Se.width,Se.height,0,We,Ue,Se.data);M.generateMipmaps=!1}else it?(St&&n.texStorage2D(t.TEXTURE_2D,Xe,Re,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,We,Ue,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,We,Ue,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Re,Ge[0].width,Ge[0].height,ne.depth);for(let le=0,I=Ge.length;le<I;le++)Se=Ge[le],M.format!==ei?We!==null?it?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ne.depth,We,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Re,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ne.depth,We,Ue,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Re,Se.width,Se.height,ne.depth,0,We,Ue,Se.data)}else{it&&St&&n.texStorage2D(t.TEXTURE_2D,Xe,Re,Ge[0].width,Ge[0].height);for(let le=0,I=Ge.length;le<I;le++)Se=Ge[le],M.format!==ei?We!==null?it?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Se.width,Se.height,We,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Se.width,Se.height,We,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,le,Re,Se.width,Se.height,0,We,Ue,Se.data)}else if(M.isDataArrayTexture)it?(St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Re,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,We,Ue,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,We,Ue,ne.data);else if(M.isData3DTexture)it?(St&&n.texStorage3D(t.TEXTURE_3D,Xe,Re,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,We,Ue,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,We,Ue,ne.data);else if(M.isFramebufferTexture){if(St)if(it)n.texStorage2D(t.TEXTURE_2D,Xe,Re,ne.width,ne.height);else{let le=ne.width,I=ne.height;for(let de=0;de<Xe;de++)n.texImage2D(t.TEXTURE_2D,de,Re,le,I,0,We,Ue,null),le>>=1,I>>=1}}else if(Ge.length>0&&tt){it&&St&&n.texStorage2D(t.TEXTURE_2D,Xe,Re,Ge[0].width,Ge[0].height);for(let le=0,I=Ge.length;le<I;le++)Se=Ge[le],it?n.texSubImage2D(t.TEXTURE_2D,le,0,0,We,Ue,Se):n.texImage2D(t.TEXTURE_2D,le,Re,We,Ue,Se);M.generateMipmaps=!1}else it?(St&&n.texStorage2D(t.TEXTURE_2D,Xe,Re,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Ue,ne)):n.texImage2D(t.TEXTURE_2D,0,Re,We,Ue,ne);v(M,tt)&&g(se),we.__version=ae.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function te(L,M,j){if(M.image.length!==6)return;const se=W(L,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+j);const ae=i.get(ie);if(ie.version!==ae.__version||se===!0){n.activeTexture(t.TEXTURE0+j);const we=st.getPrimaries(st.workingColorSpace),he=M.colorSpace===On?null:st.getPrimaries(M.colorSpace),ye=M.colorSpace===On||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let le=0;le<6;le++)!Le&&!Fe?ne[le]=x(M.image[le],!1,!0,r.maxCubemapSize):ne[le]=Fe?M.image[le].image:M.image[le],ne[le]=be(M,ne[le]);const tt=ne[0],We=m(tt)||o,Ue=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),Se=S(M.internalFormat,Ue,Re,M.colorSpace),Ge=o&&M.isVideoTexture!==!0,it=ae.__version===void 0||se===!0;let St=P(M,tt,We);O(t.TEXTURE_CUBE_MAP,M,We);let Xe;if(Le){Ge&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,St,Se,tt.width,tt.height);for(let le=0;le<6;le++){Xe=ne[le].mipmaps;for(let I=0;I<Xe.length;I++){const de=Xe[I];M.format!==ei?Ue!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Ue,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,0,0,de.width,de.height,Ue,Re,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I,Se,de.width,de.height,0,Ue,Re,de.data)}}}else{Xe=M.mipmaps,Ge&&it&&(Xe.length>0&&St++,n.texStorage2D(t.TEXTURE_CUBE_MAP,St,Se,ne[0].width,ne[0].height));for(let le=0;le<6;le++)if(Fe){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ne[le].width,ne[le].height,Ue,Re,ne[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,ne[le].width,ne[le].height,0,Ue,Re,ne[le].data);for(let I=0;I<Xe.length;I++){const fe=Xe[I].image[le].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,fe.width,fe.height,Ue,Re,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,Se,fe.width,fe.height,0,Ue,Re,fe.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Re,ne[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,Ue,Re,ne[le]);for(let I=0;I<Xe.length;I++){const de=Xe[I];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,0,0,Ue,Re,de.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,I+1,Se,Ue,Re,de.image[le])}}}v(M,We)&&g(t.TEXTURE_CUBE_MAP),ae.__version=ie.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function J(L,M,j,se,ie,ae){const we=s.convert(j.format,j.colorSpace),he=s.convert(j.type),ye=S(j.internalFormat,we,he,j.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ae),ne=Math.max(1,M.height>>ae);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ae,ye,Fe,ne,M.depth,0,we,he,null):n.texImage2D(ie,ae,ye,Fe,ne,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,i.get(j).__webglTexture,0,Te(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,i.get(j).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(L,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,L),M.depthBuffer&&!M.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||ge(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===qi?se=t.DEPTH_COMPONENT32F:ie.type===Yi&&(se=t.DEPTH_COMPONENT24));const ae=Te(M);ge(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(M.depthBuffer&&M.stencilBuffer){const se=Te(M);j&&ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<se.length;ie++){const ae=se[ie],we=s.convert(ae.format,ae.colorSpace),he=s.convert(ae.type),ye=S(ae.internalFormat,we,he,ae.colorSpace),Le=Te(M);j&&ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ye,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ie=Te(M);if(M.depthTexture.format===Nr)ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ws)ge(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function pe(L){const M=i.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,L)}else if(j){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[se],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(L,M,j){const se=i.get(L);M!==void 0&&J(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&pe(L)}function F(L){const M=L.texture,j=i.get(L),se=i.get(M);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,a.memory.textures++);const ie=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,we=m(L)||o;if(ie){j.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[he]=[];for(let ye=0;ye<M.mipmaps.length;ye++)j.__webglFramebuffer[he][ye]=t.createFramebuffer()}else j.__webglFramebuffer[he]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)j.__webglFramebuffer[he]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const he=L.texture;for(let ye=0,Le=he.length;ye<Le;ye++){const Fe=i.get(he[ye]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&ge(L)===!1){const he=ae?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Le=he[ye];j.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ye]);const Fe=s.convert(Le.format,Le.colorSpace),ne=s.convert(Le.type),tt=S(Le.internalFormat,Fe,ne,Le.colorSpace,L.isXRRenderTarget===!0),We=Te(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,tt,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,j.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),O(t.TEXTURE_CUBE_MAP,M,we);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)J(j.__webglFramebuffer[he][ye],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else J(j.__webglFramebuffer[he],L,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,we)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const he=L.texture;for(let ye=0,Le=he.length;ye<Le;ye++){const Fe=he[ye],ne=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),O(t.TEXTURE_2D,Fe,we),J(j.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),v(Fe,we)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?he=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,se.__webglTexture),O(he,M,we),o&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)J(j.__webglFramebuffer[ye],L,M,t.COLOR_ATTACHMENT0,he,ye);else J(j.__webglFramebuffer,L,M,t.COLOR_ATTACHMENT0,he,0);v(M,we)&&g(he),n.unbindTexture()}L.depthBuffer&&pe(L)}function Je(L){const M=m(L)||o,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,ie=j.length;se<ie;se++){const ae=j[se];if(v(ae,M)){const we=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(ae).__webglTexture;n.bindTexture(we,he),g(we),n.unbindTexture()}}}function oe(L){if(o&&L.samples>0&&ge(L)===!1){const M=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,se=L.height;let ie=t.COLOR_BUFFER_BIT;const ae=[],we=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(L),ye=L.isWebGLMultipleRenderTargets===!0;if(ye)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){ae.push(t.COLOR_ATTACHMENT0+Le),L.depthBuffer&&ae.push(we);const Fe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Fe===!1&&(L.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Le]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),ye){const ne=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,j,se,0,0,j,se,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,he.__webglColorRenderbuffer[Le]);const Fe=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Te(L){return Math.min(r.maxSamples,L.samples)}function ge(L){const M=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(L){const M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function be(L,M){const j=L.colorSpace,se=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===gh||j!==Ni&&j!==On&&(st.getTransfer(j)===ht?o===!1?e.has("EXT_sRGB")===!0&&se===ei?(L.format=gh,L.minFilter=Un,L.generateMipmaps=!1):M=$g.sRGBToLinear(M):(se!==ei||ie!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}this.allocateTextureUnit=N,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=Z,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ge}function Qw(t,e,n){const i=n.isWebGL2;function r(s,a=On){let o;const l=st.getTransfer(a);if(s===sr)return t.UNSIGNED_BYTE;if(s===Bg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===zg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===IS)return t.BYTE;if(s===DS)return t.SHORT;if(s===gd)return t.UNSIGNED_SHORT;if(s===kg)return t.INT;if(s===Yi)return t.UNSIGNED_INT;if(s===qi)return t.FLOAT;if(s===Xa)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===US)return t.ALPHA;if(s===ei)return t.RGBA;if(s===OS)return t.LUMINANCE;if(s===FS)return t.LUMINANCE_ALPHA;if(s===Nr)return t.DEPTH_COMPONENT;if(s===Ws)return t.DEPTH_STENCIL;if(s===gh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kS)return t.RED;if(s===Hg)return t.RED_INTEGER;if(s===BS)return t.RG;if(s===Gg)return t.RG_INTEGER;if(s===Vg)return t.RGBA_INTEGER;if(s===Fc||s===kc||s===Bc||s===zc)if(l===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qf||s===Jf||s===ep||s===tp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Qf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===np||s===ip)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===np)return l===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ip)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===hp||s===dp||s===fp||s===pp||s===mp||s===gp||s===vp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===rp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ap)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===op)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===up)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vp)return l===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hc||s===_p||s===xp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Hc)return l===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zS||s===yp||s===Sp||s===Mp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Hc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===yp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Jw extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eA={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class tA extends $s{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const x=n.getContextAttributes();let m=null,h=null;const v=[],g=[],S=new Qe;let P=null;const C=new Mn;C.layers.enable(1),C.viewport=new zt;const b=new Mn;b.layers.enable(2),b.viewport=new zt;const U=[C,b],E=new Jw;E.layers.enable(1),E.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=v[O];return W===void 0&&(W=new du,v[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=v[O];return W===void 0&&(W=new du,v[O]=W),W.getGripSpace()},this.getHand=function(O){let W=v[O];return W===void 0&&(W=new du,v[O]=W),W.getHandSpace()};function K(O){const W=g.indexOf(O.inputSource);if(W===-1)return;const Q=v[W];Q!==void 0&&(Q.update(O.inputSource,O.frame,c||a),Q.dispatchEvent({type:O.type,data:O.inputSource}))}function ee(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",N);for(let O=0;O<v.length;O++){const W=g[O];W!==null&&(g[O]=null,v[O].disconnect(W))}T=null,H=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,W),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Br(p.framebufferWidth,p.framebufferHeight,{format:ei,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,Q=null,te=null;x.depth&&(te=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=x.stencil?Ws:Nr,Q=x.stencil?Pr:Yi);const J={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(J),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Br(f.textureWidth,f.textureHeight,{format:ei,type:sr,depthTexture:new ov(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ue=e.properties.get(h);ue.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(O){for(let W=0;W<O.removed.length;W++){const Q=O.removed[W],te=g.indexOf(Q);te>=0&&(g[te]=null,v[te].disconnect(Q))}for(let W=0;W<O.added.length;W++){const Q=O.added[W];let te=g.indexOf(Q);if(te===-1){for(let ue=0;ue<v.length;ue++)if(ue>=g.length){g.push(Q),te=ue;break}else if(g[ue]===null){g[ue]=Q,te=ue;break}if(te===-1)break}const J=v[te];J&&J.connect(Q)}}const G=new z,V=new z;function Z(O,W,Q){G.setFromMatrixPosition(W.matrixWorld),V.setFromMatrixPosition(Q.matrixWorld);const te=G.distanceTo(V),J=W.projectionMatrix.elements,ue=Q.projectionMatrix.elements,ve=J[14]/(J[10]-1),pe=J[14]/(J[10]+1),Ee=(J[9]+1)/J[5],F=(J[9]-1)/J[5],Je=(J[8]-1)/J[0],oe=(ue[8]+1)/ue[0],Te=ve*Je,ge=ve*oe,Ze=te/(-Je+oe),be=Ze*-Je;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(be),O.translateZ(Ze),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const L=ve+Ze,M=pe+Ze,j=Te-be,se=ge+(te-be),ie=Ee*pe/M*L,ae=F*pe/M*L;O.projectionMatrix.makePerspective(j,se,ie,ae,L,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function D(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;E.near=b.near=C.near=O.near,E.far=b.far=C.far=O.far,(T!==E.near||H!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,H=E.far);const W=O.parent,Q=E.cameras;D(E,W);for(let te=0;te<Q.length;te++)D(Q[te],W);Q.length===2?Z(E,C,b):E.projectionMatrix.copy(C.projectionMatrix),k(O,E,W)};function k(O,W,Q){Q===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(Q.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ol*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let A=null;function w(O,W){if(u=W.getViewerPose(c||a),_=W,u!==null){const Q=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let te=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,te=!0);for(let J=0;J<Q.length;J++){const ue=Q[J];let ve=null;if(p!==null)ve=p.getViewport(ue);else{const Ee=d.getViewSubImage(f,ue);ve=Ee.viewport,J===0&&(e.setRenderTargetTextures(h,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(h))}let pe=U[J];pe===void 0&&(pe=new Mn,pe.layers.enable(J),pe.viewport=new zt,U[J]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ve.x,ve.y,ve.width,ve.height),J===0&&(E.matrix.copy(pe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),te===!0&&E.cameras.push(pe)}}for(let Q=0;Q<v.length;Q++){const te=g[Q],J=v[Q];te!==null&&J!==void 0&&J.update(te,W,c||a)}A&&A(O,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),_=null}const Y=new sv;Y.setAnimationLoop(w),this.setAnimationLoop=function(O){A=O},this.dispose=function(){}}}function nA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,nv(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function u(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),P=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],S=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,b=S.length;C<b;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,T=U.length;E<T;E++){const H=U[E];if(p(H,C,E,P)===!0){const K=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let N=0;for(let G=0;G<ee.length;G++){const V=ee[G],Z=x(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,K+N,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,H.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,P){const C=v.value,b=g+"_"+S;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const U=P[b];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[b]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(v){const g=v.uniforms;let S=0;const P=16;for(let b=0,U=g.length;b<U;b++){const E=Array.isArray(g[b])?g[b]:[g[b]];for(let T=0,H=E.length;T<H;T++){const K=E[T],ee=Array.isArray(K.value)?K.value:[K.value];for(let N=0,G=ee.length;N<G;N++){const V=ee[N],Z=x(V),D=S%P;D!==0&&P-D<Z.boundary&&(S+=P-D),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=S,S+=Z.storage}}}const C=S%P;return C>0&&(S+=P-C),v.__size=S,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class fv{constructor(e={}){const{canvas:n=QS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let S=!1,P=0,C=0,b=null,U=-1,E=null;const T=new zt,H=new zt;let K=null;const ee=new Be(0);let N=0,G=n.width,V=n.height,Z=1,D=null,k=null;const A=new zt(0,0,G,V),w=new zt(0,0,G,V);let Y=!1;const O=new _d;let W=!1,Q=!1,te=null;const J=new Tt,ue=new Qe,ve=new z,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return b===null?Z:1}let F=i;function Je(R,B){for(let q=0;q<R.length;q++){const $=R[q],X=n.getContext($,B);if(X!==null)return X}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${md}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",de,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),F=Je(B,R),F===null)throw Je(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,Te,ge,Ze,be,L,M,j,se,ie,ae,we,he,ye,Le,Fe,ne,tt,We,Ue,Re,Se,Ge,it;function St(){oe=new fT(F),Te=new oT(F,oe,e),oe.init(Te),Se=new Qw(F,oe,Te),ge=new Kw(F,oe,Te),Ze=new gT(F),be=new Ow,L=new Zw(F,oe,ge,be,Te,Se,Ze),M=new cT(g),j=new dT(g),se=new TM(F,Te),Ge=new sT(F,oe,se,Te),ie=new pT(F,se,Ze,Ge),ae=new yT(F,ie,se,Ze),We=new xT(F,Te,L),Fe=new lT(be),we=new Uw(g,M,j,oe,Te,Ge,Fe),he=new nA(g,be),ye=new kw,Le=new Ww(oe,Te),tt=new rT(g,M,j,ge,ae,f,l),ne=new $w(g,ae,Te),it=new iA(F,Ze,Te,ge),Ue=new aT(F,oe,Ze,Te),Re=new mT(F,oe,Ze,Te),Ze.programs=we.programs,g.capabilities=Te,g.extensions=oe,g.properties=be,g.renderLists=ye,g.shadowMap=ne,g.state=ge,g.info=Ze}St();const Xe=new tA(g,F);this.xr=Xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(G,V,!1))},this.getSize=function(R){return R.set(G,V)},this.setSize=function(R,B,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,V=B,n.width=Math.floor(R*Z),n.height=Math.floor(B*Z),q===!0&&(n.style.width=R+"px",n.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(G*Z,V*Z).floor()},this.setDrawingBufferSize=function(R,B,q){G=R,V=B,Z=q,n.width=Math.floor(R*q),n.height=Math.floor(B*q),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(A)},this.setViewport=function(R,B,q,$){R.isVector4?A.set(R.x,R.y,R.z,R.w):A.set(R,B,q,$),ge.viewport(T.copy(A).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(w)},this.setScissor=function(R,B,q,$){R.isVector4?w.set(R.x,R.y,R.z,R.w):w.set(R,B,q,$),ge.scissor(H.copy(w).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){ge.setScissorTest(Y=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){k=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(R=!0,B=!0,q=!0){let $=0;if(R){let X=!1;if(b!==null){const _e=b.texture.format;X=_e===Vg||_e===Gg||_e===Hg}if(X){const _e=b.texture.type,Ae=_e===sr||_e===Yi||_e===gd||_e===Pr||_e===Bg||_e===zg,Ie=tt.getClearColor(),Oe=tt.getClearAlpha(),je=Ie.r,ke=Ie.g,ze=Ie.b;Ae?(p[0]=je,p[1]=ke,p[2]=ze,p[3]=Oe,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=je,_[1]=ke,_[2]=ze,_[3]=Oe,F.clearBufferiv(F.COLOR,0,_))}else $|=F.COLOR_BUFFER_BIT}B&&($|=F.DEPTH_BUFFER_BIT),q&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ye.dispose(),Le.dispose(),be.dispose(),M.dispose(),j.dispose(),ae.dispose(),Ge.dispose(),it.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",en),Xe.removeEventListener("sessionend",lt),te&&(te.dispose(),te=null),tn.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Ze.autoReset,B=ne.enabled,q=ne.autoUpdate,$=ne.needsUpdate,X=ne.type;St(),Ze.autoReset=R,ne.enabled=B,ne.autoUpdate=q,ne.needsUpdate=$,ne.type=X}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function fe(R){const B=R.target;B.removeEventListener("dispose",fe),De(B)}function De(R){Pe(R),be.remove(R)}function Pe(R){const B=be.get(R).programs;B!==void 0&&(B.forEach(function(q){we.releaseProgram(q)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,q,$,X,_e){B===null&&(B=pe);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Ie=s_(R,B,q,$,X);ge.setMaterial($,Ae);let Oe=q.index,je=1;if($.wireframe===!0){if(Oe=ie.getWireframeAttribute(q),Oe===void 0)return;je=2}const ke=q.drawRange,ze=q.attributes.position;let At=ke.start*je,_n=(ke.start+ke.count)*je;_e!==null&&(At=Math.max(At,_e.start*je),_n=Math.min(_n,(_e.start+_e.count)*je)),Oe!==null?(At=Math.max(At,0),_n=Math.min(_n,Oe.count)):ze!=null&&(At=Math.max(At,0),_n=Math.min(_n,ze.count));const Ft=_n-At;if(Ft<0||Ft===1/0)return;Ge.setup(X,$,Ie,q,Oe);let di,gt=Ue;if(Oe!==null&&(di=se.get(Oe),gt=Re,gt.setIndex(di)),X.isMesh)$.wireframe===!0?(ge.setLineWidth($.wireframeLinewidth*Ee()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(X.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),ge.setLineWidth(Ye*Ee()),X.isLineSegments?gt.setMode(F.LINES):X.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else X.isPoints?gt.setMode(F.POINTS):X.isSprite&&gt.setMode(F.TRIANGLES);if(X.isBatchedMesh)gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)gt.renderInstances(At,Ft,X.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,rc=Math.min(q.instanceCount,Ye);gt.renderInstances(At,Ft,rc)}else gt.render(At,Ft)};function at(R,B,q){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,so(R,B,q),R.side=lr,R.needsUpdate=!0,so(R,B,q),R.side=Si):so(R,B,q)}this.compile=function(R,B,q=null){q===null&&(q=R),m=Le.get(q),m.init(),v.push(m),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),R!==q&&R.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(g._useLegacyLights);const $=new Set;return R.traverse(function(X){const _e=X.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Ie=_e[Ae];at(Ie,q,X),$.add(Ie)}else at(_e,q,X),$.add(_e)}),v.pop(),m=null,$},this.compileAsync=function(R,B,q=null){const $=this.compile(R,B,q);return new Promise(X=>{function _e(){if($.forEach(function(Ae){be.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){X(R);return}setTimeout(_e,10)}oe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function Ot(R){ot&&ot(R)}function en(){tn.stop()}function lt(){tn.start()}const tn=new sv;tn.setAnimationLoop(Ot),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){ot=R,Xe.setAnimationLoop(R),R===null?tn.stop():tn.start()},Xe.addEventListener("sessionstart",en),Xe.addEventListener("sessionend",lt),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(B),B=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,B,b),m=Le.get(R,v.length),m.init(),v.push(m),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),O.setFromProjectionMatrix(J),Q=this.localClippingEnabled,W=Fe.init(this.clippingPlanes,Q),x=ye.get(R,h.length),x.init(),h.push(x),si(R,B,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,k),this.info.render.frame++,W===!0&&Fe.beginShadows();const q=m.state.shadowsArray;if(ne.render(q,R,B),W===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(x,R),m.setupLights(g._useLegacyLights),B.isArrayCamera){const $=B.cameras;for(let X=0,_e=$.length;X<_e;X++){const Ae=$[X];Ad(x,R,Ae,Ae.viewport)}}else Ad(x,R,B);b!==null&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(g,R,B),Ge.resetDefaultState(),U=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function si(R,B,q,$){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){$&&ve.setFromMatrixPosition(R.matrixWorld).applyMatrix4(J);const Ae=ae.update(R),Ie=R.material;Ie.visible&&x.push(R,Ae,Ie,q,ve.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){const Ae=ae.update(R),Ie=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ve.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ve.copy(Ae.boundingSphere.center)),ve.applyMatrix4(R.matrixWorld).applyMatrix4(J)),Array.isArray(Ie)){const Oe=Ae.groups;for(let je=0,ke=Oe.length;je<ke;je++){const ze=Oe[je],At=Ie[ze.materialIndex];At&&At.visible&&x.push(R,Ae,At,q,ve.z,ze)}}else Ie.visible&&x.push(R,Ae,Ie,q,ve.z,null)}}const _e=R.children;for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++)si(_e[Ae],B,q,$)}function Ad(R,B,q,$){const X=R.opaque,_e=R.transmissive,Ae=R.transparent;m.setupLightsView(q),W===!0&&Fe.setGlobalState(g.clippingPlanes,q),_e.length>0&&r_(X,_e,B,q),$&&ge.viewport(T.copy($)),X.length>0&&ro(X,B,q),_e.length>0&&ro(_e,B,q),Ae.length>0&&ro(Ae,B,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function r_(R,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const _e=Te.isWebGL2;te===null&&(te=new Br(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Xa:sr,minFilter:ja,samples:_e?4:0})),g.getDrawingBufferSize(ue),_e?te.setSize(ue.x,ue.y):te.setSize(vh(ue.x),vh(ue.y));const Ae=g.getRenderTarget();g.setRenderTarget(te),g.getClearColor(ee),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Ie=g.toneMapping;g.toneMapping=rr,ro(R,q,$),L.updateMultisampleRenderTarget(te),L.updateRenderTargetMipmap(te);let Oe=!1;for(let je=0,ke=B.length;je<ke;je++){const ze=B[je],At=ze.object,_n=ze.geometry,Ft=ze.material,di=ze.group;if(Ft.side===Si&&At.layers.test($.layers)){const gt=Ft.side;Ft.side=vn,Ft.needsUpdate=!0,Rd(At,q,$,_n,Ft,di),Ft.side=gt,Ft.needsUpdate=!0,Oe=!0}}Oe===!0&&(L.updateMultisampleRenderTarget(te),L.updateRenderTargetMipmap(te)),g.setRenderTarget(Ae),g.setClearColor(ee,N),g.toneMapping=Ie}function ro(R,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let X=0,_e=R.length;X<_e;X++){const Ae=R[X],Ie=Ae.object,Oe=Ae.geometry,je=$===null?Ae.material:$,ke=Ae.group;Ie.layers.test(q.layers)&&Rd(Ie,B,q,Oe,je,ke)}}function Rd(R,B,q,$,X,_e){R.onBeforeRender(g,B,q,$,X,_e),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(g,B,q,$,R,_e),X.transparent===!0&&X.side===Si&&X.forceSinglePass===!1?(X.side=vn,X.needsUpdate=!0,g.renderBufferDirect(q,B,$,X,R,_e),X.side=lr,X.needsUpdate=!0,g.renderBufferDirect(q,B,$,X,R,_e),X.side=Si):g.renderBufferDirect(q,B,$,X,R,_e),R.onAfterRender(g,B,q,$,X,_e)}function so(R,B,q){B.isScene!==!0&&(B=pe);const $=be.get(R),X=m.state.lights,_e=m.state.shadowsArray,Ae=X.state.version,Ie=we.getParameters(R,X.state,_e,B,q),Oe=we.getProgramCacheKey(Ie);let je=$.programs;$.environment=R.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(R.isMeshStandardMaterial?j:M).get(R.envMap||$.environment),je===void 0&&(R.addEventListener("dispose",fe),je=new Map,$.programs=je);let ke=je.get(Oe);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===Ae)return bd(R,Ie),ke}else Ie.uniforms=we.getUniforms(R),R.onBuild(q,Ie,g),R.onBeforeCompile(Ie,g),ke=we.acquireProgram(Ie,Oe),je.set(Oe,ke),$.uniforms=Ie.uniforms;const ze=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=Fe.uniform),bd(R,Ie),$.needsLights=o_(R),$.lightsStateVersion=Ae,$.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function Cd(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=al.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function bd(R,B){const q=be.get(R);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function s_(R,B,q,$,X){B.isScene!==!0&&(B=pe),L.resetTextureUnits();const _e=B.fog,Ae=$.isMeshStandardMaterial?B.environment:null,Ie=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ni,Oe=($.isMeshStandardMaterial?j:M).get($.envMap||Ae),je=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!q.morphAttributes.position,At=!!q.morphAttributes.normal,_n=!!q.morphAttributes.color;let Ft=rr;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ft=g.toneMapping);const di=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=di!==void 0?di.length:0,Ye=be.get($),rc=m.state.lights;if(W===!0&&(Q===!0||R!==E)){const Pn=R===E&&$.id===U;Fe.setState($,R,Pn)}let Mt=!1;$.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==rc.state.version||Ye.outputColorSpace!==Ie||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||Ye.envMap!==Oe||$.fog===!0&&Ye.fog!==_e||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==ke||Ye.morphTargets!==ze||Ye.morphNormals!==At||Ye.morphColors!==_n||Ye.toneMapping!==Ft||Te.isWebGL2===!0&&Ye.morphTargetsCount!==gt)&&(Mt=!0):(Mt=!0,Ye.__version=$.version);let dr=Ye.currentProgram;Mt===!0&&(dr=so($,B,X));let Ld=!1,Zs=!1,sc=!1;const Yt=dr.getUniforms(),fr=Ye.uniforms;if(ge.useProgram(dr.program)&&(Ld=!0,Zs=!0,sc=!0),$.id!==U&&(U=$.id,Zs=!0),Ld||E!==R){Yt.setValue(F,"projectionMatrix",R.projectionMatrix),Yt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Pn=Yt.map.cameraPosition;Pn!==void 0&&Pn.setValue(F,ve.setFromMatrixPosition(R.matrixWorld)),Te.logarithmicDepthBuffer&&Yt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Yt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Zs=!0,sc=!0)}if(X.isSkinnedMesh){Yt.setOptional(F,X,"bindMatrix"),Yt.setOptional(F,X,"bindMatrixInverse");const Pn=X.skeleton;Pn&&(Te.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Yt.setValue(F,"boneTexture",Pn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Yt.setOptional(F,X,"batchingTexture"),Yt.setValue(F,"batchingTexture",X._matricesTexture,L));const ac=q.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0&&Te.isWebGL2===!0)&&We.update(X,q,dr),(Zs||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,Yt.setValue(F,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(fr.envMap.value=Oe,fr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Zs&&(Yt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ye.needsLights&&a_(fr,sc),_e&&$.fog===!0&&he.refreshFogUniforms(fr,_e),he.refreshMaterialUniforms(fr,$,Z,V,te),al.upload(F,Cd(Ye),fr,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(al.upload(F,Cd(Ye),fr,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Yt.setValue(F,"center",X.center),Yt.setValue(F,"modelViewMatrix",X.modelViewMatrix),Yt.setValue(F,"normalMatrix",X.normalMatrix),Yt.setValue(F,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Pn=$.uniformsGroups;for(let oc=0,l_=Pn.length;oc<l_;oc++)if(Te.isWebGL2){const Pd=Pn[oc];it.update(Pd,dr),it.bind(Pd,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function a_(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function o_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,B,q){be.get(R.texture).__webglTexture=B,be.get(R.depthTexture).__webglTexture=q;const $=be.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){const q=be.get(R);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,q=0){b=R,P=B,C=q;let $=!0,X=null,_e=!1,Ae=!1;if(R){const Oe=be.get(R);Oe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(F.FRAMEBUFFER,null),$=!1):Oe.__webglFramebuffer===void 0?L.setupRenderTarget(R):Oe.__hasExternalTextures&&L.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);const ke=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?X=ke[B][q]:X=ke[B],_e=!0):Te.isWebGL2&&R.samples>0&&L.useMultisampledRTT(R)===!1?X=be.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[q]:X=ke,T.copy(R.viewport),H.copy(R.scissor),K=R.scissorTest}else T.copy(A).multiplyScalar(Z).floor(),H.copy(w).multiplyScalar(Z).floor(),K=Y;if(ge.bindFramebuffer(F.FRAMEBUFFER,X)&&Te.drawBuffers&&$&&ge.drawBuffers(R,X),ge.viewport(T),ge.scissor(H),ge.setScissorTest(K),_e){const Oe=be.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,q)}else if(Ae){const Oe=be.get(R.texture),je=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,q||0,je)}U=-1},this.readRenderTargetPixels=function(R,B,q,$,X,_e,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){ge.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const Oe=R.texture,je=Oe.format,ke=Oe.type;if(je!==ei&&Se.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=ke===Xa&&(oe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&oe.has("EXT_color_buffer_float"));if(ke!==sr&&Se.convert(ke)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===qi&&(Te.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-$&&q>=0&&q<=R.height-X&&F.readPixels(B,q,$,X,Se.convert(je),Se.convert(ke),_e)}finally{const Oe=b!==null?be.get(b).__webglFramebuffer:null;ge.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,B,q=0){const $=Math.pow(2,-q),X=Math.floor(B.image.width*$),_e=Math.floor(B.image.height*$);L.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,R.x,R.y,X,_e),ge.unbindTexture()},this.copyTextureToTexture=function(R,B,q,$=0){const X=B.image.width,_e=B.image.height,Ae=Se.convert(q.format),Ie=Se.convert(q.type);L.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$,R.x,R.y,X,_e,Ae,Ie,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,$,R.x,R.y,Ae,Ie,B.image),$===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(R,B,q,$,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,Ae=R.max.y-R.min.y+1,Ie=R.max.z-R.min.z+1,Oe=Se.convert($.format),je=Se.convert($.type);let ke;if($.isData3DTexture)L.setTexture3D($,0),ke=F.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)L.setTexture2DArray($,0),ke=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const ze=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=F.getParameter(F.UNPACK_SKIP_PIXELS),Ft=F.getParameter(F.UNPACK_SKIP_ROWS),di=F.getParameter(F.UNPACK_SKIP_IMAGES),gt=q.isCompressedTexture?q.mipmaps[X]:q.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(ke,X,B.x,B.y,B.z,_e,Ae,Ie,Oe,je,gt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ke,X,B.x,B.y,B.z,_e,Ae,Ie,Oe,gt.data)):F.texSubImage3D(ke,X,B.x,B.y,B.z,_e,Ae,Ie,Oe,je,gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ze),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,di),X===0&&$.generateMipmaps&&F.generateMipmap(ke),ge.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ge.unbindTexture()},this.resetState=function(){P=0,C=0,b=null,ge.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vd?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?Ir:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?Wt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rA extends fv{}rA.prototype.isWebGL1Renderer=!0;class yd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=n}clone(){return new yd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sA extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hm extends ii{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Tt,dm=new Tt,Yo=[],fm=new Vr,aA=new Tt,ha=new Ne,da=new to;class oA extends Ne{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new hm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,aA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,cs),fm.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(fm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new to),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,cs),da.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(da)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cs),dm.multiplyMatrices(i,cs),ha.matrixWorld=dm,ha.raycast(e,Yo);for(let a=0,o=Yo.length;a<o;a++){const l=Yo[a];l.instanceId=s,l.object=this,n.push(l)}Yo.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new hm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sd extends Gn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new z,u=new Qe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let _=0;const x=[],m=i/2;let h=0;v(),a===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new wt(d,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(p,2));function v(){const S=new z,P=new z;let C=0;const b=(n-e)/i;for(let U=0;U<=s;U++){const E=[],T=U/s,H=T*(n-e)+e;for(let K=0;K<=r;K++){const ee=K/r,N=ee*l+o,G=Math.sin(N),V=Math.cos(N);P.x=H*G,P.y=-T*i+m,P.z=H*V,d.push(P.x,P.y,P.z),S.set(G,b,V).normalize(),f.push(S.x,S.y,S.z),p.push(ee,1-T),E.push(_++)}x.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const T=x[E][U],H=x[E+1][U],K=x[E+1][U+1],ee=x[E][U+1];u.push(T,H,ee),u.push(H,K,ee),C+=6}c.addGroup(h,C,0),h+=C}function g(S){const P=_,C=new Qe,b=new z;let U=0;const E=S===!0?e:n,T=S===!0?1:-1;for(let K=1;K<=r;K++)d.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),_++;const H=_;for(let K=0;K<=r;K++){const N=K/r*l+o,G=Math.cos(N),V=Math.sin(N);b.x=E*V,b.y=m*T,b.z=E*G,d.push(b.x,b.y,b.z),f.push(0,T,0),C.x=G*.5+.5,C.y=V*.5*T+.5,p.push(C.x,C.y),_++}for(let K=0;K<r;K++){const ee=P+K,N=H+K;S===!0?u.push(N,N+1,ee):u.push(N+1,N,ee),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Md extends Gn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new z,_=new Qe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const h=s+m/i*a;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}d+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let h=0;h<i;h++){const v=h+m,g=v,S=v+i+1,P=v+i+2,C=v+1;o.push(g,S,C),o.push(S,P,C)}}this.setIndex(o),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ii extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new z,f=new z,p=[],_=[],x=[],m=[];for(let h=0;h<=i;h++){const v=[],g=h/i;let S=0;h===0&&a===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;d.x=-e*Math.cos(r+C*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+S,1-g),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const g=u[h][v+1],S=u[h][v],P=u[h+1][v],C=u[h+1][v+1];(h!==0||a>0)&&p.push(g,S,C),(h!==i-1||l<Math.PI)&&p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ya extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new z,d=new z,f=new z;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,v=(r+1)*p+_;a.push(x,m,v),a.push(m,h,v)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pt extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xg,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ic extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lA extends ic{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const fu=new Tt,pm=new z,mm=new z;class pv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cA extends pv{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Ol*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uA extends ic{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new cA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hA extends pv{constructor(){super(new av(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dA extends ic{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new hA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fA extends ic{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);class pA{constructor(e,n={}){this.container=e,this.quality=n.quality||"medium",this.dayNightMode=n.dayNightMode||"day",this.currentCameraView=n.cameraView||Yn.BATSMAN_FOLLOW,this.scene=new sA,this.camera=new Mn(50,window.innerWidth/window.innerHeight,.1,300),this.renderer=new fv({antialias:this.quality!=="low",powerPreference:"high-performance",alpha:!1}),this.ballMesh=null,this.ballTrailLine=null,this.lights={},this.floodlights=[],this.cameraShakeIntensity=0,this.cameraTargetPos=new z(0,3.2,14.5),this.cameraLookTarget=new z(0,1.2,0),this.initRenderer(),this.buildLighting(),this.buildPitchAndGround(),this.buildBoundaryAndStands(),this.buildFloodlights(),this.buildScoreboardScreen(),this.buildBallMesh(),this.setDayNightMode(this.dayNightMode),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize)}initRenderer(){this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.quality==="high"?2:1.5)),this.renderer.shadowMap.enabled=this.quality!=="low",this.renderer.shadowMap.type=Dg,this.renderer.toneMapping=Og,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement)}buildLighting(){this.lights.ambient=new fA(16777215,.6),this.scene.add(this.lights.ambient),this.lights.sun=new dA(16775917,1.4),this.lights.sun.position.set(35,60,40),this.quality!=="low"&&(this.lights.sun.castShadow=!0,this.lights.sun.shadow.mapSize.width=1024,this.lights.sun.shadow.mapSize.height=1024,this.lights.sun.shadow.camera.near=10,this.lights.sun.shadow.camera.far=150,this.lights.sun.shadow.camera.left=-30,this.lights.sun.shadow.camera.right=30,this.lights.sun.shadow.camera.top=30,this.lights.sun.shadow.camera.bottom=-30,this.lights.sun.shadow.bias=-5e-4),this.scene.add(this.lights.sun),this.lights.hemi=new lA(8900331,1980958,.45),this.scene.add(this.lights.hemi),this.scene.fog=new yd(13625087,.0045),this.scene.background=new Be(8900331)}buildPitchAndGround(){const e=new Sd(us+8,48);e.rotateX(-Math.PI/2);const n=new pt({color:2263091,roughness:.85,metalness:.05}),i=new Ne(e,n);i.receiveShadow=!0,i.position.y=-.01,this.scene.add(i);for(let d=15;d<=us;d+=12){const f=new Md(d,d+6,48);f.rotateX(-Math.PI/2);const p=new Mi({color:2863170,transparent:!0,opacity:.2}),_=new Ne(f,p);_.position.y=.001,this.scene.add(_)}const{LENGTH:r,WIDTH:s}=Ps,a=new Ds(s,r+2.5);a.rotateX(-Math.PI/2);const o=new pt({color:13280880,roughness:.95,metalness:.02}),l=new Ne(a,o);l.receiveShadow=!0,l.position.set(0,.005,0),this.scene.add(l);const c=new Mi({color:16777215}),u=(d,f,p)=>{const _=new Ds(d,f);_.rotateX(-Math.PI/2);const x=new Ne(_,c);x.position.set(0,.012,p),this.scene.add(x)};u(2.44,.08,8.8),u(2.64,.05,10),u(2.44,.08,-8.8),u(2.64,.05,-10)}buildBoundaryAndStands(){const e=us,n=new Ya(e,.08,8,64);n.rotateX(Math.PI/2);const i=new pt({color:16317180,roughness:.7}),r=new Ne(n,i);r.position.y=.08,this.scene.add(r);const s=36,a=new Bn(.3,.3,2.5,3);a.rotateZ(Math.PI/2);const o=new pt({color:165063,roughness:.5});for(let l=0;l<s;l++){const c=l/s*Math.PI*2,u=Math.sin(c)*(e+.8),d=Math.cos(c)*(e+.8),f=new Ne(a,o);f.position.set(u,.15,d),f.rotation.y=c+Math.PI/2,this.scene.add(f)}this.buildGrandstands()}buildGrandstands(){const e=us+4,n=6,i=new pt({color:3359061,roughness:.7});for(let u=0;u<n;u++){const d=e+u*3.2,f=d+3,p=(u+1)*2.2,_=new Bn(f,d,2,48,1,!0),x=new Ne(_,i);x.position.y=p-1,this.scene.add(x)}const r=this.quality==="low"?300:1200,s=new Tn(.35,.65,.35),a=new pt({roughness:.8}),o=new oA(s,a,r),l=new Pt,c=[new Be(15680580),new Be(3900150),new Be(16096779),new Be(1096065),new Be(16777215),new Be(9133302)];for(let u=0;u<r;u++){const d=Math.floor(Math.random()*n),f=e+d*3.2+1.2+(Math.random()-.5)*.8,p=Math.random()*Math.PI*2,_=(d+1)*2.2+.35;l.position.set(Math.sin(p)*f,_,Math.cos(p)*f),l.rotation.y=p+Math.PI,l.scale.set(.9+Math.random()*.3,.9+Math.random()*.3,.9+Math.random()*.3),l.updateMatrix(),o.setMatrixAt(u,l.matrix),o.setColorAt(u,c[Math.floor(Math.random()*c.length)])}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),this.scene.add(o)}buildFloodlights(){const e=[{x:-55,z:-55},{x:55,z:-55},{x:-55,z:55},{x:55,z:55}],n=new pt({color:4674921,metalness:.6,roughness:.4}),i=new Mi({color:16777215});e.forEach((r,s)=>{const a=new ft;a.position.set(r.x,0,r.z);const o=new Bn(.5,1.2,38,8);o.translate(0,19,0);const l=new Ne(o,n);a.add(l);const c=new Tn(6,4,.5),u=new Ne(c,n);u.position.set(0,38,0),u.lookAt(0,1,0);const d=new Ii(.35,8,8);for(let p=-2.2;p<=2.2;p+=1.1)for(let _=-1.2;_<=1.2;_+=1.2){const x=new Ne(d,i);x.position.set(p,_,.3),u.add(x)}a.add(u),this.scene.add(a);const f=new uA(16774630,0,140,Math.PI*.3,.4,1);f.position.set(r.x,38,r.z),f.target.position.set(0,0,0),this.scene.add(f),this.scene.add(f.target),this.floodlights.push(f)})}buildScoreboardScreen(){const e=new ft;e.position.set(0,24,-us-16);const n=new Tn(22,10,1.5),i=new pt({color:988970,roughness:.5}),r=new Ne(n,i);e.add(r);const s=new Ds(20,8.5),a=new Mi({color:165063}),o=new Ne(s,a);o.position.z=.8,e.add(o),this.scene.add(e)}buildBallMesh(){const e=new Ii(Ps.BALL_RADIUS,16,16),n=new pt({color:14427686,roughness:.35,metalness:.15});this.ballMesh=new Ne(e,n),this.ballMesh.castShadow=!0,this.ballMesh.position.set(0,1.5,-10),this.scene.add(this.ballMesh);const i=new Ya(Ps.BALL_RADIUS*1.01,.005,8,24),r=new Mi({color:16777215}),s=new Ne(i,r);s.rotation.x=Math.PI/2,this.ballMesh.add(s)}setDayNightMode(e="day"){this.dayNightMode=e,e==="day"?(this.scene.background=new Be(8900331),this.scene.fog.color.setHex(13625087),this.lights.ambient.intensity=.65,this.lights.sun.intensity=1.4,this.lights.hemi.intensity=.45,this.floodlights.forEach(n=>n.intensity=0)):(this.scene.background=new Be(329745),this.scene.fog.color.setHex(659752),this.lights.ambient.intensity=.2,this.lights.sun.intensity=.15,this.lights.hemi.intensity=.15,this.floodlights.forEach(n=>n.intensity=1.6))}setCameraView(e){this.currentCameraView=e}cycleCameraView(){const e=[Yn.BATSMAN_FOLLOW,Yn.BROADCAST,Yn.BATSMAN_CLOSE,Yn.BOWLER_VIEW],i=(e.indexOf(this.currentCameraView)+1)%e.length;return this.setCameraView(e[i]),e[i]}triggerCameraShake(e=.3){this.cameraShakeIntensity=Math.min(.8,this.cameraShakeIntensity+e)}updateCamera(e,n){let i=new z,r=new z;const s=e?e.position:{x:0,y:1,z:0},a=e&&e.velocity.z<-2;if(this.currentCameraView===Yn.BALL_CAM||a&&Math.abs(e.velocity.z)>15)i.set(s.x*.4,Math.max(3.5,s.y+4),s.z+12),r.set(s.x,s.y,s.z);else switch(this.currentCameraView){case Yn.BATSMAN_FOLLOW:i.set(.6,2.7,13.8),r.set(0,1.4,-4);break;case Yn.BATSMAN_CLOSE:i.set(1.6,1.8,10.5),r.set(0,1.2,8.5);break;case Yn.BROADCAST:i.set(0,9.5,-28),r.set(0,1,6);break;case Yn.BOWLER_VIEW:i.set(0,2.8,-16),r.set(0,1.2,9);break;default:i.set(.6,2.7,13.8),r.set(0,1.4,-4)}this.cameraTargetPos.lerp(i,Math.min(1,n*6)),this.cameraLookTarget.lerp(r,Math.min(1,n*8));let o=new z;this.cameraShakeIntensity>.005&&(o.set((Math.random()-.5)*this.cameraShakeIntensity,(Math.random()-.5)*this.cameraShakeIntensity,(Math.random()-.5)*this.cameraShakeIntensity),this.cameraShakeIntensity*=Math.max(0,1-n*6)),this.camera.position.copy(this.cameraTargetPos).add(o),this.camera.lookAt(this.cameraLookTarget)}updateBallMesh(e){!this.ballMesh||!e||(this.ballMesh.position.set(e.position.x,e.position.y,e.position.z),this.ballMesh.rotation.x+=.2,this.ballMesh.rotation.y+=.1)}render(e,n){this.updateCamera(e,n),this.updateBallMesh(e),this.renderer.render(this.scene,this.camera)}onWindowResize(){if(!this.container)return;const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}dispose(){window.removeEventListener("resize",this.onWindowResize),this.renderer&&this.renderer.domElement&&this.container&&(this.container.removeChild(this.renderer.domElement),this.renderer.dispose())}}class mA{constructor(e,n={x:0,y:0,z:9}){this.scene=e,this.root=new ft,this.root.position.set(n.x,n.y,n.z),this.animState="STANCE",this.animProgress=0,this.batTargetRot=new no(0,0,0),this.batTargetPos=new z(0,0,0),this.buildCharacter(),this.scene.add(this.root)}buildCharacter(){const e=new pt({color:1981066,roughness:.5}),n=new pt({color:1516884,roughness:.6}),i=new pt({color:16317180,roughness:.4}),r=new pt({color:13935475,roughness:.7}),s=new pt({color:1976635,roughness:.3,metalness:.3}),a=new pt({color:9741240,metalness:.8,roughness:.2}),o=new pt({color:15857145,roughness:.5}),l=new pt({color:13273604,roughness:.4}),c=new pt({color:15680580,roughness:.8});this.torso=new ft,this.torso.position.set(0,1.05,0);const u=new Tn(.42,.48,.24),d=new Ne(u,e);d.castShadow=!0,this.torso.add(d),this.head=new ft,this.head.position.set(0,.38,0);const f=new Ii(.13,16,16),p=new Ne(f,r);this.head.add(p);const _=new Ii(.145,16,16),x=new Ne(_,s);x.position.set(0,.02,-.01),this.head.add(x);const m=new Ya(.12,.012,8,16,Math.PI),h=new Ne(m,a);h.rotation.x=Math.PI*.45,h.position.set(0,-.02,.08),this.head.add(h),this.torso.add(this.head),this.leftArm=new ft,this.leftArm.position.set(-.25,.18,0);const v=new Bn(.05,.045,.32,10),g=new Ne(v,e);g.position.set(0,-.16,0),this.leftArm.add(g),this.rightArm=new ft,this.rightArm.position.set(.25,.18,0);const S=new Ne(v,e);S.position.set(0,-.16,0),this.rightArm.add(S),this.leftForearm=new ft,this.leftForearm.position.set(0,-.32,0);const P=new Tn(.08,.12,.09),C=new Ne(P,o);this.leftForearm.add(C),this.leftArm.add(this.leftForearm),this.rightForearm=new ft,this.rightForearm.position.set(0,-.32,0);const b=new Ne(P,o);this.rightForearm.add(b),this.rightArm.add(this.rightForearm),this.torso.add(this.leftArm),this.torso.add(this.rightArm),this.bat=new ft,this.bat.position.set(0,-.1,.12);const U=new Bn(.02,.02,.32,8),E=new Ne(U,c);E.position.set(0,.16,0),this.bat.add(E);const T=new Tn(.12,.62,.045),H=new Ne(T,l);H.position.set(0,-.31,0),H.castShadow=!0,this.bat.add(H),this.rightForearm.add(this.bat),this.leftLeg=new ft,this.leftLeg.position.set(-.13,.75,0);const K=new Bn(.07,.06,.38,10),ee=new Ne(K,n);ee.position.set(0,-.19,0),this.leftLeg.add(ee);const N=new Tn(.14,.44,.12),G=new Ne(N,i);G.position.set(0,-.42,.04),G.castShadow=!0,this.leftLeg.add(G),this.rightLeg=new ft,this.rightLeg.position.set(.13,.75,0);const V=new Ne(K,n);V.position.set(0,-.19,0),this.rightLeg.add(V);const Z=new Ne(N,i);Z.position.set(0,-.42,.04),Z.castShadow=!0,this.rightLeg.add(Z),this.root.add(this.torso),this.root.add(this.leftLeg),this.root.add(this.rightLeg),this.applyStancePose()}applyStancePose(){this.root.rotation.y=Math.PI*.45,this.torso.rotation.x=.15,this.head.rotation.y=-Math.PI*.42,this.leftArm.rotation.set(.4,.2,.3),this.rightArm.rotation.set(.5,-.3,-.2),this.bat.rotation.set(-.6,.2,.1)}triggerShotAnimation(e){this.animState=e||me.STRAIGHT_DRIVE,this.animProgress=0}triggerCelebration(){this.animState="CELEBRATION",this.animProgress=0}triggerDismissal(){this.animState="DISMISSAL",this.animProgress=0}applyVSPose(e,n){if(!e||!n)return;const{handsCentroid:i}=e,{wristSpeed:r,swingTrajectory:s}=n,a=-.4+(s.dy||0)*1.5,o=(s.dx||0)*2,l=(e.jointAngles.spineTilt||0)*.03;this.bat.rotation.x=un(this.bat.rotation.x,a,.35),this.bat.rotation.y=un(this.bat.rotation.y,o,.35),this.bat.rotation.z=un(this.bat.rotation.z,l,.35),this.torso.rotation.z=un(this.torso.rotation.z,(e.jointAngles.spineTilt||0)*.015,.25)}update(e,n){if(this.animState==="STANCE"){const r=Math.sin(n*3)*.02;this.torso.position.y=1.05+r,this.bat.position.y=-.1+Math.sin(n*6)*.015;return}this.animProgress+=e*3.5;const i=Math.min(1,this.animProgress);switch(this.animState){case me.STRAIGHT_DRIVE:case me.COVER_DRIVE:this.torso.rotation.x=un(.15,.45,Math.sin(i*Math.PI)),this.rightArm.rotation.x=un(.5,-1.2,Math.sin(i*Math.PI)),this.leftArm.rotation.x=un(.4,-.9,Math.sin(i*Math.PI)),this.bat.rotation.x=un(-.6,1.4,Math.sin(i*Math.PI));break;case me.PULL_SHOT:case me.HOOK_SHOT:this.root.rotation.y=un(Math.PI*.45,-Math.PI*.15,Math.sin(i*Math.PI)),this.bat.rotation.set(.2,1.2*Math.sin(i*Math.PI),-.8*Math.sin(i*Math.PI));break;case me.SQUARE_CUT:this.bat.rotation.set(-.8,-1.1*Math.sin(i*Math.PI),.5*Math.sin(i*Math.PI));break;case me.LOFTED_DRIVE:this.bat.rotation.x=un(-.6,2.2,Math.sin(i*Math.PI)),this.torso.rotation.x=un(.15,-.2,Math.sin(i*Math.PI));break;case me.DEFENSIVE:this.torso.rotation.x=un(.15,.35,Math.sin(i*Math.PI)),this.bat.rotation.set(.1,0,0);break;case"CELEBRATION":this.rightArm.rotation.set(-1.8,0,0),this.bat.rotation.set(1.5,0,0),this.head.rotation.set(-.3,0,0);break;case"DISMISSAL":this.head.rotation.set(.6,0,0),this.torso.rotation.set(.4,0,0);break}this.animProgress>=1&&this.animState!=="CELEBRATION"&&this.animState!=="DISMISSAL"&&(this.animState="STANCE",this.applyStancePose())}dispose(){this.scene.remove(this.root)}}class gA{constructor(e,n={x:.3,y:0,z:-10}){this.scene=e,this.root=new ft,this.root.position.set(n.x,n.y,n.z),this.isBowling=!1,this.runUpProgress=0,this.onRelease=null,this.hasReleasedThisBall=!1,this.buildCharacter(),this.scene.add(this.root)}buildCharacter(){const e=new pt({color:292951,roughness:.5}),n=new pt({color:413243,roughness:.6}),i=new pt({color:13010498,roughness:.7}),r=new pt({color:1579035,roughness:.8});this.torso=new ft,this.torso.position.set(0,1.1,0);const s=new Tn(.42,.5,.24),a=new Ne(s,e);a.castShadow=!0,this.torso.add(a),this.head=new ft,this.head.position.set(0,.38,0);const o=new Ne(new Ii(.13,16,16),i),l=new Ne(new Ii(.135,16,16),r);l.position.set(0,.04,-.02),this.head.add(o),this.head.add(l),this.torso.add(this.head),this.bowlingArm=new ft,this.bowlingArm.position.set(.26,.2,0);const c=new Bn(.05,.045,.55,10);c.translate(0,-.25,0);const u=new Ne(c,e);this.bowlingArm.add(u),this.torso.add(this.bowlingArm),this.leftArm=new ft,this.leftArm.position.set(-.26,.2,0);const d=new Ne(c.clone(),e);this.leftArm.add(d),this.torso.add(this.leftArm);const f=new Bn(.065,.055,.82,10);f.translate(0,-.41,0),this.leftLeg=new ft,this.leftLeg.position.set(-.13,.82,0);const p=new Ne(f,n);p.castShadow=!0,this.leftLeg.add(p),this.rightLeg=new ft,this.rightLeg.position.set(.13,.82,0);const _=new Ne(f.clone(),n);_.castShadow=!0,this.rightLeg.add(_),this.root.add(this.torso),this.root.add(this.leftLeg),this.root.add(this.rightLeg),this.resetToMark()}resetToMark(){this.root.position.set(.3,0,-10),this.root.rotation.set(0,0,0),this.torso.rotation.set(0,0,0),this.bowlingArm.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.isBowling=!1,this.runUpProgress=0,this.hasReleasedThisBall=!1}startRunUp(e){this.onRelease=e,this.isBowling=!0,this.runUpProgress=0,this.hasReleasedThisBall=!1,this.root.position.set(.3,0,-17)}update(e){if(!this.isBowling)return;this.runUpProgress+=e*.95;const n=Math.min(1,this.runUpProgress);this.root.position.z=un(-17,-10,n);const i=n*16*Math.PI;if(this.leftLeg.rotation.x=Math.sin(i)*.6,this.rightLeg.rotation.x=-Math.sin(i)*.6,n>.65){const r=(n-.65)/.35;if(this.bowlingArm.rotation.x=-r*Math.PI*2.2,this.torso.rotation.x=un(0,.35,r),r>=.5&&!this.hasReleasedThisBall&&(this.hasReleasedThisBall=!0,this.onRelease)){const s={x:this.root.position.x+.25,y:2.15,z:this.root.position.z+.2};this.onRelease(s)}}else this.bowlingArm.rotation.x=-Math.sin(i)*.4,this.leftArm.rotation.x=Math.sin(i)*.4;n>=1&&(this.isBowling=!1,this.root.position.set(.3,0,-10),this.bowlingArm.rotation.set(0,0,0),this.torso.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0))}dispose(){this.scene.remove(this.root)}}class gm{constructor(e,n=9.8,i=!0){this.scene=e,this.zPosition=n,this.isBatsmanEnd=i,this.group=new ft,this.stumps=[],this.bails=[],this.isShattered=!1,this.shatteredPieces=[],this.init()}init(){const e=new pt({color:14596231,roughness:.4,metalness:.1}),n=new pt({color:15654067,roughness:.3,metalness:.1}),{STUMP_HEIGHT:i,STUMP_WIDTH:r}=Ps,s=.022,a=r/2,o=new Bn(s,s*.9,i,12);o.translate(0,i/2,0),[-a,0,a].forEach((d,f)=>{const p=new Ne(o,e);p.position.set(d,0,this.zPosition),p.castShadow=!0,p.receiveShadow=!0,this.group.add(p),this.stumps.push({mesh:p,origPos:p.position.clone(),origRot:p.rotation.clone()})});const c=new Bn(.012,.012,a*1.1,8);c.rotateZ(Math.PI/2),[-a*.5,a*.5].forEach(d=>{const f=new Ne(c,n);f.position.set(d,i+.012,this.zPosition),f.castShadow=!0,this.group.add(f),this.bails.push({mesh:f,origPos:f.position.clone(),origRot:f.rotation.clone()})}),this.scene.add(this.group)}shatter(e={x:0,y:1.5,z:6}){this.isShattered||(this.isShattered=!0,this.stumps.forEach((n,i)=>{const r=(Math.random()-.5)*3+(i-1)*1.2,s=2.5+Math.random()*3.5,a=4+Math.random()*4,o=new z((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12);this.shatteredPieces.push({mesh:n.mesh,velocity:new z(r,s,a),rotVelocity:o})}),this.bails.forEach(n=>{const i=(Math.random()-.5)*4,r=4+Math.random()*4,s=5+Math.random()*5,a=new z((Math.random()-.5)*18,(Math.random()-.5)*18,(Math.random()-.5)*18);this.shatteredPieces.push({mesh:n.mesh,velocity:new z(i,r,s),rotVelocity:a})}))}reset(){this.isShattered=!1,this.shatteredPieces=[],this.stumps.forEach(e=>{e.mesh.position.copy(e.origPos),e.mesh.rotation.copy(e.origRot)}),this.bails.forEach(e=>{e.mesh.position.copy(e.origPos),e.mesh.rotation.copy(e.origRot)})}update(e){this.isShattered&&this.shatteredPieces.forEach(n=>{n.velocity.y-=9.81*e,n.mesh.position.addScaledVector(n.velocity,e),n.mesh.rotation.x+=n.rotVelocity.x*e,n.mesh.rotation.y+=n.rotVelocity.y*e,n.mesh.rotation.z+=n.rotVelocity.z*e,n.mesh.position.y<.02&&(n.mesh.position.y=.02,n.velocity.y=-n.velocity.y*.4,n.velocity.x*=.8,n.velocity.z*=.8)})}dispose(){this.scene.remove(this.group)}}class vA{constructor(e){this.scene=e,this.particles=[],this.createMaterials()}createMaterials(){this.dustMaterial=new Mi({color:14667696,transparent:!0,opacity:.65}),this.sparkMaterial=new Mi({color:16770688,transparent:!0,opacity:.85}),this.sharedSphereGeo=new Ii(.04,5,5)}spawnPitchDust(e,n=1){const i=Math.min(12,Math.floor(6+n*4));for(let r=0;r<i;r++){const s=new Ne(this.sharedSphereGeo,this.dustMaterial.clone());s.position.set(e.x+(Math.random()-.5)*.2,e.y+.05,e.z+(Math.random()-.5)*.2);const a=.6+Math.random()*.8;s.scale.set(a,a,a);const o=(Math.random()-.5)*1.5,l=.8+Math.random()*1.8,c=(Math.random()-.5)*1.5;this.scene.add(s),this.particles.push({mesh:s,velocity:new z(o,l,c),gravity:-5,life:1,decay:2.2+Math.random()*1})}}spawnBatHitSparks(e){for(let n=0;n<16;n++){const i=new Ne(this.sharedSphereGeo,this.sparkMaterial.clone());i.position.set(e.x,e.y,e.z);const r=.5+Math.random()*.7;i.scale.set(r,r,r);const s=Math.random()*Math.PI*2,a=2+Math.random()*4,o=Math.cos(s)*a,l=1+Math.random()*3,c=Math.sin(s)*a;this.scene.add(i),this.particles.push({mesh:i,velocity:new z(o,l,c),gravity:-7,life:1,decay:3.5+Math.random()*2})}}update(e){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.life-=i.decay*e,i.life<=0){this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose&&i.mesh.material.dispose(),this.particles.splice(n,1);continue}i.velocity.y+=i.gravity*e,i.mesh.position.addScaledVector(i.velocity,e),i.mesh.material.opacity=i.life,i.mesh.scale.multiplyScalar(1+e*.4)}}clear(){this.particles.forEach(e=>{this.scene.remove(e.mesh)}),this.particles=[]}}class _A{constructor(){this.position={x:0,y:1.8,z:-10},this.velocity={x:0,y:0,z:0},this.acceleration={x:0,y:-9.81,z:0},this.radius=Ps.BALL_RADIUS,this.isBounced=!1,this.bounceCount=0,this.inFlight=!1,this.isDead=!1,this.deliveryType=He.GOOD_LENGTH,this.spin={x:0,y:0,z:0},this.swingForce=0,this.dragCoeff=.0035,this.restitution=.58,this.friction=.72,this.lastPitchContact=null,this.trail=[]}reset(e={x:.2,y:2.1,z:-10}){this.position={...e},this.velocity={x:0,y:0,z:0},this.acceleration={x:0,y:-9.81,z:0},this.isBounced=!1,this.bounceCount=0,this.inFlight=!1,this.isDead=!1,this.lastPitchContact=null,this.trail=[]}deliver(e,n=He.GOOD_LENGTH,i=0,r=0){this.deliveryType=n,this.inFlight=!0,this.isBounced=!1,this.bounceCount=0,this.isDead=!1,this.swingForce=r;const s=e*1e3/3600,o=19/s;let l=-.5;switch(n){case He.YORKER:l=-1.2;break;case He.BOUNCER:l=-3.8;break;case He.FULL_TOSS:l=.8;break;case He.INSWING:this.swingForce=-.6;break;case He.OUTSWING:this.swingForce=.6;break;case He.OFF_SPIN:this.spin.x=-1.2;break;case He.LEG_SPIN:this.spin.x=1.2;break;case He.SLOWER_BALL:l=.5;break;default:l=-1.4}const c=s,u=i/o,d=l;this.velocity={x:u,y:d,z:c}}update(e,n=null){if(!this.inFlight||this.isDead)return this.position;const i=Math.min(.05,e),r=this.velocity.x**2+this.velocity.y**2+this.velocity.z**2,s=Math.sqrt(r);if(s>0){const l=this.dragCoeff*r;this.velocity.x-=this.velocity.x/s*l*i,this.velocity.y-=this.velocity.y/s*l*i,this.velocity.z-=this.velocity.z/s*l*i}this.velocity.y+=this.acceleration.y*i,!this.isBounced&&Math.abs(this.swingForce)>.01&&(this.velocity.x+=this.swingForce*i*2.5),this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i,this.position.z+=this.velocity.z*i;const a=this.radius;if(this.position.y<=a)if(this.position.y=a,this.isBounced)this.bounceCount++,this.velocity.y=-this.velocity.y*.45,this.velocity.x*=.88,this.velocity.z*=.88,Math.abs(this.velocity.y)<.2&&Math.abs(this.velocity.z)<.5&&Math.abs(this.velocity.x)<.5&&(this.velocity.y=0,this.velocity.x=0,this.velocity.z=0,this.inFlight=!1);else{this.isBounced=!0,this.bounceCount=1,this.lastPitchContact={...this.position};let l=this.restitution;this.deliveryType===He.BOUNCER&&(l*=1.35),this.deliveryType===He.YORKER&&(l*=.7),this.velocity.y=-this.velocity.y*l,this.velocity.z=this.velocity.z*this.friction,Math.abs(this.spin.x)>.1&&(this.velocity.x+=this.spin.x*1.5),n&&n(this.position,Math.abs(this.velocity.y))}return Math.sqrt(this.position.x**2+this.position.z**2)>us&&(this.inFlight=!1),this.inFlight&&(this.trail.push({...this.position}),this.trail.length>25&&this.trail.shift()),this.position}}class xA{constructor(e={}){this.keys={},this.onShotTrigger=e.onShotTrigger||null,this.onBowlTrigger=e.onBowlTrigger||null,this.onCameraSwitch=e.onCameraSwitch||null,this.onPauseToggle=e.onPauseToggle||null,this.onDebugToggle=e.onDebugToggle||null,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}attach(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}detach(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}onKeyDown(e){if(!e.repeat){if(this.keys[e.code]=!0,e.code==="F3"){e.preventDefault(),this.onDebugToggle&&this.onDebugToggle();return}if(e.code==="Escape"){e.preventDefault(),this.onPauseToggle&&this.onPauseToggle();return}if(e.code==="KeyC"){e.preventDefault(),this.onCameraSwitch&&this.onCameraSwitch();return}e.code==="Space"&&(e.preventDefault(),this.onShotTrigger&&this.onShotTrigger({shotType:me.STRAIGHT_DRIVE,power:1.1,isTriggered:!0,confidence:100}),this.onBowlTrigger&&this.onBowlTrigger()),e.code==="KeyF"&&this.onShotTrigger&&this.onShotTrigger({shotType:me.COVER_DRIVE,power:1.15,isTriggered:!0,confidence:100}),e.code==="KeyQ"&&this.onShotTrigger&&this.onShotTrigger({shotType:me.PULL_SHOT,power:1.2,isTriggered:!0,confidence:100}),e.code==="KeyE"&&this.onShotTrigger&&this.onShotTrigger({shotType:me.DEFENSIVE,power:.5,isTriggered:!0,confidence:100}),(e.code==="KeyW"||e.code==="ArrowUp")&&this.onShotTrigger&&this.onShotTrigger({shotType:me.LOFTED_DRIVE,power:1.35,isTriggered:!0,confidence:100}),(e.code==="KeyA"||e.code==="ArrowLeft")&&this.onShotTrigger&&this.onShotTrigger({shotType:me.SQUARE_CUT,power:1.1,isTriggered:!0,confidence:100}),(e.code==="KeyD"||e.code==="ArrowRight")&&this.onShotTrigger&&this.onShotTrigger({shotType:me.FLICK_SHOT,power:1.05,isTriggered:!0,confidence:100}),(e.code==="KeyS"||e.code==="ArrowDown")&&this.onShotTrigger&&this.onShotTrigger({shotType:me.SWEEP_SHOT,power:1,isTriggered:!0,confidence:100})}}onKeyUp(e){this.keys[e.code]=!1}}const yA=({onCycleCamera:t,onTogglePause:e,onToggleDebug:n,onShotTriggerRef:i,onBowlTriggerRef:r})=>{const s=Me.useRef(null),{gameState:a,gameMode:o,settings:l,visionData:c,matchManager:u,setIsDebugOpen:d,cameraView:f,setCameraView:p}=Ln(),[_,x]=Me.useState(60),m=Me.useRef(null),h=Me.useRef(null),v=Me.useRef(null),g=Me.useRef(null),S=Me.useRef(null),P=Me.useRef(null),C=Me.useRef(null),b=Me.useRef(null);return Me.useEffect(()=>{if(!s.current)return;const U=new pA(s.current,{quality:l.graphicsQuality,dayNightMode:l.dayNightMode,cameraView:f});m.current=U;const E=new mA(U.scene,{x:0,y:0,z:9}),T=new gA(U.scene,{x:.3,y:0,z:-10}),H=new gm(U.scene,9.8,!0),K=new gm(U.scene,-10,!1),ee=new vA(U.scene),N=new _A;h.current=E,v.current=T,g.current=H,S.current=K,P.current=ee,C.current=N;const G=new xA({onShotTrigger:A=>{h.current&&h.current.triggerShotAnimation(A.shotType),u&&u.processBatSwing(C.current,A,!0)},onBowlTrigger:()=>{o===vt.BOWLING_CHALLENGE&&u&&u.processUserBowling({speed:135,deliveryType:"GOOD_LENGTH",line:"STUMPS",lineOffset:0,swing:0},C.current)},onCameraSwitch:()=>{const A=U.cycleCameraView();p(A)},onPauseToggle:()=>e(),onDebugToggle:()=>d(A=>!A)});G.attach(),i&&(i.current=A=>{h.current&&h.current.triggerShotAnimation(A.shotType),u&&u.processBatSwing(C.current,A,!0)}),r&&(r.current=()=>{u&&u.processUserBowling({speed:136,deliveryType:"GOOD_LENGTH",line:"STUMPS",lineOffset:0,swing:0},C.current)}),u&&(u.onBallHit=A=>{U.triggerCameraShake(A.isSix?.6:.35),ee.spawnBatHitSparks(A.contactPoint)},u.onWicket=A=>{A.dismissalType==="BOWLED"&&(H.shatter(),U.triggerCameraShake(.5)),h.current&&h.current.triggerDismissal()});let V=performance.now(),Z=0,D=performance.now();const k=A=>{b.current=requestAnimationFrame(k);const w=Math.min(.05,(A-V)/1e3);V=A,Z++,A-D>=1e3&&(x(Math.round(Z*1e3/(A-D))),Z=0,D=A),E.update(w,A*.001),T.update(w),H.update(w),ee.update(w),N.inFlight&&(N.update(w,(Y,O)=>{ee.spawnPitchDust(Y,O),U&&U.triggerCameraShake(.1)}),u&&u.checkBallPastBatsman(N)),U.render(N,w)};return b.current=requestAnimationFrame(k),()=>{b.current&&cancelAnimationFrame(b.current),G.detach(),U.dispose()}},[u,d,p,e,o]),Me.useEffect(()=>{m.current&&m.current.setDayNightMode(l.dayNightMode)},[l.dayNightMode]),Me.useEffect(()=>{m.current&&m.current.setCameraView(f)},[f]),Me.useEffect(()=>{!c||!h.current||c.processedPose&&c.movement&&(h.current.applyVSPose(c.processedPose,c.movement),c.batting&&c.batting.isTriggered&&u&&(h.current.triggerShotAnimation(c.batting.shotType),u.processBatSwing(C.current,c.batting,!1)),o===vt.BOWLING_CHALLENGE&&c.bowling&&u&&u.processUserBowling(c.bowling,C.current))},[c,u,o]),Me.useEffect(()=>{a===$e.PLAYING&&u&&v.current&&o!==vt.BOWLING_CHALLENGE&&(g.current&&g.current.reset(),u.prepareDelivery()&&v.current.startRunUp(E=>{C.current&&C.current.reset(E),u.onBallReleased(C.current)}))},[a,u,o]),y.jsx("div",{ref:s,className:"canvas-viewport"})};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function MA(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:SA(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=t=>{const e=EA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pu(t){return t!=null}function wA(t,e={}){var f,p;const n=e.attributeNames??{},i=_=>n[_]??_,r=t.size??t.width??_r.width,s=t.size??t.height??_r.height,a=((f=t.aliases)==null?void 0:f.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?xh(...l):xh("lucide",...o,...l),u=e.absoluteStrokeWidth?Number(e.strokeWidth??_r["stroke-width"])*Number(t.size??t.width??_r.width)/Number(e.size??e.width??_r.width):e.strokeWidth??_r["stroke-width"];return["svg",{...Object.entries(_r).reduce((_,[x,m])=>(_[i(x)]=m,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&pu(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&pu(e.width)&&{[i("width")]:e.width},..."height"in e&&pu(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:u,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[x,m,h]=_,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return h?[x,v,h]:[x,v]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function AA(t,e={}){return wA(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},CA=Me.createContext({}),bA=()=>Me.useContext(CA),LA=Me.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:u={node:c,aliases:[],size:24},...d},f)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:x=!1,nonScalingStroke:m=!1,color:h="currentColor",className:v=""}=bA()??{},g=!!l||RA(d),[S,P,C=[]]=AA(u,{color:t??h,width:n??e??p,height:i??e??p,strokeWidth:r??_,absoluteStrokeWidth:s??x,nonScalingStroke:a??m,className:xh(v,o),hasA11yProp:g,attributes:d});return Me.createElement(S,{ref:f,...P},[...C.map(([b,U])=>Me.createElement(b,U)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function nt(t,e=[],n=[]){const i=typeof t=="string"?MA(t,e,n):t,r=Me.forwardRef(({className:s,...a},o)=>Me.createElement(LA,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=TA(i.name)),r}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};mv.node;const PA=nt(mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};gv.node;const NA=nt(gv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};vv.node;const _v=nt(vv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv={name:"camera-off",size:24,node:[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]]};xv.node;const IA=nt(xv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};yv.node;const Sv=nt(yv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Mv.node;const Ev=nt(Mv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};Tv.node;const wv=nt(Tv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Av.node;const DA=nt(Av);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Rv.node;const UA=nt(Rv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Cv.node;const OA=nt(Cv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};bv.node;const Lv=nt(bv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};Pv.node;const FA=nt(Pv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Nv.node;const kA=nt(Nv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Iv.node;const BA=nt(Iv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Dv.node;const zA=nt(Dv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Uv.node;const Ov=nt(Uv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Fv.node;const kv=nt(Fv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Bv.node;const zv=nt(Bv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Hv.node;const HA=nt(Hv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Gv.node;const Vv=nt(Gv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Wv.node;const Ed=nt(Wv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};jv.node;const GA=nt(jv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Xv.node;const Yv=nt(Xv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};qv.node;const Td=nt(qv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v={name:"user-check",size:24,node:[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};$v.node;const Kv=nt($v);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};Zv.node;const VA=nt(Zv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Qv.node;const WA=nt(Qv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Jv.node;const jA=nt(Jv);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};e_.node;const t_=nt(e_);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};n_.node;const i_=nt(n_),XA=({onTogglePause:t,onCycleCamera:e})=>{const{score:n,gameMode:i,targetShot:r,matchManager:s}=Ln();if(!n)return null;const a=n.getRequiredRunRate?n.getRequiredRunRate():null,o=s==null?void 0:s.currentDelivery;return y.jsxs("div",{className:"w-full flex flex-col justify-between pointer-events-none select-none",children:[y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{className:"glass-panel tv-scoreboard interactive-ui",children:[y.jsxs("div",{className:"score-main",children:[y.jsx("span",{className:"score-runs",children:n.totalRuns}),y.jsx("span",{className:"score-slash",children:"/"}),y.jsx("span",{className:"score-wickets",children:n.wickets})]}),y.jsxs("div",{className:"flex flex-col border-l border-white/10 pl-3",children:[y.jsx("span",{className:"text-xs text-cyan-400 font-bold uppercase tracking-wider",children:"OVERS"}),y.jsxs("span",{className:"text-lg font-extrabold font-chakra text-white",children:[n.getOversDisplay?n.getOversDisplay():"0.0",y.jsxs("span",{className:"text-xs text-slate-400 font-normal",children:[" / ",n.maxOvers,".0"]})]})]}),y.jsx("div",{className:"over-balls-container border-l border-white/10 pl-3",children:n.thisOver&&n.thisOver.length>0?n.thisOver.map((l,c)=>{let u="ball-dot";return l==="4"?u+=" boundary-four":l==="6"?u+=" boundary-six":l==="W"&&(u+=" wicket"),y.jsx("div",{className:u,children:l},c)}):y.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"NEW OVER"})})]}),o&&y.jsxs("div",{className:"glass-panel px-4 py-2 border-cyan-500/30 flex items-center gap-3 animate-float",children:[y.jsxs("span",{className:"text-xs font-bold text-amber-400 font-chakra uppercase",children:[o.speed," KM/H"]}),y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-slate-500"}),y.jsx("span",{className:"text-xs font-semibold text-slate-200",children:o.name})]}),y.jsxs("div",{className:"flex items-center gap-3 interactive-ui",children:[n.targetRuns&&y.jsxs("div",{className:"glass-panel px-4 py-2 flex items-center gap-3 border-amber-500/30",children:[y.jsx(Yv,{className:"w-4 h-4 text-amber-400"}),y.jsxs("div",{className:"flex flex-col",children:[y.jsxs("span",{className:"text-[10px] text-amber-400 uppercase font-bold tracking-wider",children:["TARGET: ",n.targetRuns]}),y.jsxs("span",{className:"text-xs text-slate-300 font-semibold",children:["Need ",Math.max(0,n.targetRuns-n.totalRuns)," from ",Math.max(0,n.maxBalls-n.totalBalls)," balls (RRR: ",a,")"]})]})]}),y.jsx("button",{onClick:e,className:"p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-white/15 text-slate-200 transition-colors shadow-lg",title:"Switch Camera View (C)",children:y.jsx(VA,{className:"w-4 h-4"})}),y.jsx("button",{onClick:t,className:"p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-white/15 text-slate-200 transition-colors shadow-lg",title:"Pause Game (Esc)",children:y.jsx(zA,{className:"w-4 h-4"})})]})]}),i===vt.SHOT_MASTER&&r&&y.jsxs("div",{className:"self-center glass-panel-glow px-6 py-2.5 mb-4 flex items-center gap-3",children:[y.jsx(Td,{className:"w-5 h-5 text-amber-400 animate-pulse"}),y.jsxs("div",{className:"flex flex-col",children:[y.jsx("span",{className:"text-[10px] text-cyan-400 font-bold uppercase tracking-wider",children:"TARGET SHOT CHALLENGE"}),y.jsxs("span",{className:"text-sm font-extrabold font-chakra text-amber-300",children:[Lg[r]||r," ",y.jsx("span",{className:"text-xs text-white font-normal",children:"(+150 PTS BONUS)"})]})]})]})]})},YA=()=>{const{visionData:t}=Ln(),{isCameraActive:e,poseDetected:n,batting:i,movement:r,fps:s}=t,a=i!=null&&i.shotType?Lg[i.shotType]||i.shotType:"Stance Ready",o=(i==null?void 0:i.confidence)||(n?85:0),l=r!=null&&r.wristSpeed?r.wristSpeed.toFixed(1):"0.0";return y.jsxs("div",{className:"glass-panel vision-hud-panel select-none pointer-events-auto",children:[y.jsxs("div",{className:"flex items-center justify-between gap-3 text-xs",children:[y.jsx("div",{className:"flex items-center gap-1.5",children:e?y.jsxs(y.Fragment,{children:[y.jsx(Sv,{className:"w-3.5 h-3.5 text-emerald-400"}),y.jsx("span",{className:"font-bold text-emerald-400 font-chakra",children:"VISION ACTIVE"})]}):y.jsxs(y.Fragment,{children:[y.jsx(FA,{className:"w-3.5 h-3.5 text-amber-400"}),y.jsx("span",{className:"font-bold text-amber-400 font-chakra",children:"KEYBOARD MODE"})]})}),y.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:[s||30," FPS"]})]}),y.jsxs("div",{className:"flex flex-col gap-1 mt-1 border-t border-white/10 pt-1.5",children:[y.jsxs("div",{className:"flex items-center justify-between text-xs",children:[y.jsx("span",{className:"text-slate-400 text-[10px] uppercase font-bold tracking-wider",children:"DETECTED SHOT"}),y.jsx("span",{className:"text-cyan-300 font-bold font-chakra truncate max-w-[110px]",children:a})]}),y.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-300",children:[y.jsx("span",{className:"text-slate-400 text-[10px]",children:"CONFIDENCE"}),y.jsxs("span",{className:"font-mono font-bold text-amber-300",children:[o,"%"]})]}),y.jsx("div",{className:"confidence-bar-bg",children:y.jsx("div",{className:"confidence-bar-fill",style:{width:`${o}%`}})})]}),y.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-400 mt-0.5",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(i_,{className:"w-3 h-3 text-amber-400"})," SPEED"]}),y.jsxs("span",{className:"font-mono text-slate-200",children:[l," m/s"]})]})]})},qA=()=>{const{poseDetector:t,settings:e,setGameState:n,visionData:i}=Ln(),r=Me.useRef(null),s=Me.useRef(null),[a,o]=Me.useState(!0),[l,c]=Me.useState(!1);Me.useEffect(()=>{let f=!0;return(async()=>{if(!t||!r.current||!s.current)return;c(!0),await t.init(r.current,s.current)&&f&&await t.startCamera(),f&&c(!1)})(),()=>{f=!1,t&&t.stopCamera()}},[t]);const u=async()=>{t&&(t.isCameraActive?t.stopCamera():(c(!0),await t.startCamera(),c(!1)))},d=()=>{n($e.CALIBRATION)};return y.jsxs("div",{className:"camera-pip group",children:[y.jsx("video",{ref:r,playsInline:!0,muted:!0,autoPlay:!0}),y.jsx("canvas",{ref:s,width:320,height:240,style:{display:a?"block":"none"}}),y.jsxs("div",{className:"camera-badge",children:[y.jsx("span",{className:"camera-dot-pulse"}),y.jsx("span",{children:i.isCameraActive?"LIVE":"OFFLINE"})]}),y.jsxs("div",{className:"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 pointer-events-auto",children:[y.jsxs("div",{className:"flex justify-end gap-1.5",children:[y.jsx("button",{onClick:()=>o(f=>!f),className:"p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-200",title:a?"Hide Skeleton":"Show Skeleton",children:a?y.jsx(DA,{className:"w-3.5 h-3.5"}):y.jsx(UA,{className:"w-3.5 h-3.5"})}),y.jsx("button",{onClick:d,className:"p-1.5 rounded bg-slate-800/80 hover:bg-slate-700 text-cyan-300",title:"Calibrate Pose Baseline",children:y.jsx(Vv,{className:"w-3.5 h-3.5"})})]}),y.jsx("div",{className:"flex justify-center gap-2",children:y.jsx("button",{onClick:u,disabled:l,className:"px-3 py-1 text-xs rounded bg-cyan-600 hover:bg-cyan-500 font-bold font-chakra flex items-center gap-1.5",children:i.isCameraActive?y.jsxs(y.Fragment,{children:[y.jsx(IA,{className:"w-3 h-3"})," Disable"]}):y.jsxs(y.Fragment,{children:[y.jsx(Sv,{className:"w-3 h-3"})," Enable"]})})})]})]})},vm=({onOpenSettings:t})=>{const{profile:e,startMatch:n,setGameState:i}=Ln(),r=pd.getPlayerRankTitle(e.level),s=Er.find(l=>l.level===e.level+1)||{xpNeeded:e.xp+1e3},a=Er.find(l=>l.level===e.level)||{xpNeeded:0};e.xp-a.xpNeeded,s.xpNeeded-a.xpNeeded;const o=[{id:vt.QUICK_MATCH,title:"Quick Match",desc:"2 Overs match. Face varied AI deliveries & post a mammoth score.",icon:Ov,accent:"from-blue-600 to-cyan-500",tag:"POPULAR"},{id:vt.BATTING_CHALLENGE,title:"Batting Challenge",desc:"Face 6 testing deliveries: Yorkers, Bouncers, Inswing & Spin.",icon:i_,accent:"from-amber-500 to-orange-600",tag:"INTENSE"},{id:vt.BOWLING_CHALLENGE,title:"Bowling Challenge",desc:"Use arm rotation gestures to bowl. Knock down the AI wickets!",icon:OA,accent:"from-emerald-500 to-teal-600",tag:"CV EXCLUSIVE"},{id:vt.SHOT_MASTER,title:"Shot Master",desc:"Execute target shots (Cover Drive, Pull, Cut, Six) on command.",icon:Yv,accent:"from-purple-600 to-pink-600",tag:"SKILL TEST"},{id:vt.TARGET_CHASE,title:"Target Chase",desc:"Chase 36 runs off 12 deliveries with required run rate pressure!",icon:Td,accent:"from-rose-600 to-red-600",tag:"CHALLENGE"}];return y.jsx("div",{className:"modal-backdrop select-none overflow-y-auto py-8",children:y.jsxs("div",{className:"w-full max-w-5xl px-6 flex flex-col gap-6",children:[y.jsxs("div",{className:"glass-panel p-5 flex flex-wrap items-center justify-between gap-4 border-cyan-500/20",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsxs("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-extrabold font-chakra text-2xl text-white shadow-lg shadow-cyan-500/30",children:["L",e.level]}),y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("h3",{className:"text-xl font-bold font-chakra text-white",children:r}),y.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold",children:["LEVEL ",e.level]})]}),y.jsxs("div",{className:"flex items-center gap-4 mt-1.5 text-xs text-slate-400",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(wv,{className:"w-3.5 h-3.5 text-amber-400"}),y.jsx("strong",{className:"text-amber-300",children:e.coins})," Coins"]}),y.jsx("span",{children:"•"}),y.jsxs("span",{children:["Best: ",y.jsx("strong",{className:"text-white",children:e.bestScore})," Runs"]}),y.jsx("span",{children:"•"}),y.jsxs("span",{children:["Matches: ",y.jsx("strong",{className:"text-white",children:e.matchesPlayed})]})]})]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("button",{onClick:()=>i($e.CAREER_MENU),className:"btn-secondary text-xs flex items-center gap-2",children:[y.jsx(_v,{className:"w-4 h-4 text-amber-400"})," Missions"]}),y.jsxs("button",{onClick:()=>i($e.CALIBRATION),className:"btn-secondary text-xs flex items-center gap-2",children:[y.jsx(Vv,{className:"w-4 h-4 text-cyan-400"})," Calibrate"]}),y.jsx("button",{onClick:t,className:"btn-secondary text-xs p-2.5",title:"Settings",children:y.jsx(zv,{className:"w-4 h-4"})})]})]}),y.jsxs("div",{className:"text-center py-4",children:[y.jsx("h1",{className:"text-5xl md:text-6xl font-black font-chakra tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400 drop-shadow-[0_4px_24px_rgba(6,182,212,0.4)]",children:"CRICKET VISION AI"}),y.jsx("p",{className:"text-sm md:text-base text-cyan-300/80 font-medium tracking-wide mt-2",children:"Your movement. Your shot. Your game. Powered by Real-Time Computer Vision."})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:o.map(l=>{const c=l.icon;return y.jsxs("div",{onClick:()=>n(l.id),className:"glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.25)] flex flex-col justify-between gap-4 group relative overflow-hidden",children:[y.jsx("div",{className:`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${l.accent} opacity-10 rounded-bl-full group-hover:opacity-25 transition-opacity`}),y.jsxs("div",{className:"flex items-start justify-between",children:[y.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${l.accent} flex items-center justify-center text-white shadow-md`,children:y.jsx(c,{className:"w-6 h-6"})}),y.jsx("span",{className:"text-[10px] font-bold font-chakra px-2 py-0.5 rounded-full bg-white/10 text-slate-300",children:l.tag})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-bold font-chakra text-white group-hover:text-cyan-300 transition-colors",children:l.title}),y.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:l.desc})]}),y.jsx("button",{className:"btn-primary w-full text-xs py-2 mt-1",children:"PLAY NOW"})]},l.id)})}),y.jsxs("div",{className:"flex flex-wrap items-center justify-between text-xs text-slate-400 glass-panel px-4 py-3",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(HA,{className:"w-4 h-4 text-emerald-400"}),y.jsx("span",{children:"Camera stream processed 100% locally in browser. No video is ever stored or uploaded."})]}),y.jsx("div",{className:"text-[11px] text-slate-500 font-mono",children:"Desktop: [SPACE] Bat / Bowl • [W/A/S/D] Directional Shots • [C] Camera • [F3] Debug"})]})]})})};class $A{static detectCalibrationPose(e,n){if(!e||!e.rawLandmarks)return{completed:!1,feedback:"Stand inside the camera view"};const{rawLandmarks:i,normalizedLandmarks:r,shoulderWidth:s,jointAngles:a}=e,o=i[Ce.LEFT_WRIST],l=i[Ce.RIGHT_WRIST],c=i[Ce.LEFT_SHOULDER],u=i[Ce.RIGHT_SHOULDER],d=i[Ce.LEFT_HIP],f=i[Ce.RIGHT_HIP];if(!((c.visibility>.5||u.visibility>.5)&&(d.visibility>.3||f.visibility>.3)))return{completed:!1,feedback:"Please step back so your upper body is visible"};switch(n){case"DETECT_PLAYER":return s>.12&&s<.6?{completed:!0,feedback:"Player detected! Stand still..."}:{completed:!1,feedback:"Adjust your distance to the camera"};case"RAISE_ARMS":return o.y<c.y&&l.y<u.y?{completed:!0,feedback:"Arms raised! Excellent."}:{completed:!1,feedback:"Raise both arms up high above your shoulders"};case"LEAN_LEFTSIDE":return a.spineTilt<-12?{completed:!0,feedback:"Good lean left!"}:{completed:!1,feedback:"Lean slightly to your left"};case"LEAN_RIGHTSIDE":return a.spineTilt>12?{completed:!0,feedback:"Good lean right!"}:{completed:!1,feedback:"Lean slightly to your right"};case"BATTING_STANCE":const x=ch(o,l)<.25,m=r[Ce.LEFT_WRIST].y>-.1;return x&&m?{completed:!0,feedback:"Batting stance locked!"}:{completed:!1,feedback:"Hold virtual bat with both hands in batting stance"};default:return{completed:!0,feedback:"Ready to Play"}}}}const fa=[{id:"DETECT_PLAYER",title:"Stand In Front Of Camera",desc:"Position yourself 1.5m – 2.5m from your webcam so your upper body is clearly visible."},{id:"RAISE_ARMS",title:"Raise Your Arms",desc:"Raise both arms up above your shoulders to calibrate arm span and reaches."},{id:"LEAN_LEFTSIDE",title:"Lean Left",desc:"Lean your upper torso slightly to the left side to calculate spine rotation."},{id:"LEAN_RIGHTSIDE",title:"Lean Right",desc:"Lean your upper torso slightly to the right side."},{id:"BATTING_STANCE",title:"Take Batting Stance",desc:"Assume your natural cricket batting stance holding your virtual bat."}],KA=()=>{const{visionData:t,poseDetector:e,setGameState:n}=Ln(),[i,r]=Me.useState(0),[s,a]=Me.useState("Initializing camera..."),[o,l]=Me.useState(0),c=fa[i];Me.useEffect(()=>{if(!t.processedPose){a("Stand inside the camera frame...");return}const f=$A.detectCalibrationPose(t.processedPose,c.id);a(f.feedback),f.completed?l(p=>{const _=p+1;return _>=15?(i<fa.length-1?r(x=>x+1):(e&&e.processor.setBaseline({shoulderWidth:t.processedPose.shoulderWidth,torsoHeight:t.processedPose.torsoHeight}),setTimeout(()=>{n($e.MAIN_MENU)},800)),0):_}):l(0)},[t,c,i,e,n]);const u=()=>{n($e.MAIN_MENU)},d=(i+1)/fa.length*100;return y.jsx("div",{className:"modal-backdrop",children:y.jsxs("div",{className:"modal-content glass-panel-glow flex flex-col gap-6 select-none",children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(Ed,{className:"w-6 h-6 text-cyan-400"}),y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-bold font-chakra text-white uppercase",children:"PLAYER CALIBRATION"}),y.jsxs("p",{className:"text-xs text-slate-400",children:["Step ",i+1," of ",fa.length]})]})]}),y.jsx("button",{onClick:u,className:"text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors",children:"Skip Calibration"})]}),y.jsx("div",{className:"w-full bg-slate-800 h-2 rounded-full overflow-hidden",children:y.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300 rounded-full",style:{width:`${d}%`}})}),y.jsxs("div",{className:"flex flex-col items-center text-center py-4 px-6 bg-slate-900/60 rounded-xl border border-white/5",children:[y.jsx("div",{className:"w-16 h-16 rounded-full bg-cyan-500/10 border-2 border-cyan-400 flex items-center justify-center mb-3",children:y.jsx(Kv,{className:"w-8 h-8 text-cyan-400 animate-pulse"})}),y.jsx("h3",{className:"text-xl font-extrabold font-chakra text-white mb-2",children:c.title}),y.jsx("p",{className:"text-sm text-slate-300 max-w-md",children:c.desc}),y.jsxs("div",{className:"mt-5 px-4 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-2",children:[y.jsx(Ev,{className:"w-4 h-4 text-cyan-400"}),y.jsx("span",{children:s})]})]}),y.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-3",children:[y.jsxs("span",{className:"flex items-center gap-1.5",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Vision processing runs 100% locally on your device."]}),y.jsxs("button",{onClick:()=>{i<fa.length-1?r(f=>f+1):n($e.MAIN_MENU)},className:"btn-primary text-xs py-1.5 px-3 flex items-center gap-1",children:["Next ",y.jsx(NA,{className:"w-3.5 h-3.5"})]})]})]})})},ZA=()=>{const{profile:t,setGameState:e}=Ln(),n=Ri.getMissionsProgress();return pd.getPlayerRankTitle(t.level),y.jsx("div",{className:"modal-backdrop overflow-y-auto py-8 select-none",children:y.jsxs("div",{className:"w-full max-w-4xl px-6 flex flex-col gap-6",children:[y.jsxs("div",{className:"glass-panel p-5 flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("button",{onClick:()=>e($e.MAIN_MENU),className:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300",children:y.jsx(PA,{className:"w-5 h-5"})}),y.jsxs("div",{children:[y.jsx("h2",{className:"text-2xl font-bold font-chakra text-white uppercase",children:"CAREER & MISSIONS"}),y.jsx("p",{className:"text-xs text-slate-400",children:"Complete challenges to earn XP, rank up and claim coins."})]})]}),y.jsx("div",{className:"flex items-center gap-3",children:y.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-1.5 text-amber-300 text-xs font-bold font-chakra",children:[y.jsx(wv,{className:"w-4 h-4 text-amber-400"})," ",t.coins," COINS"]})})]}),y.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[y.jsxs("div",{className:"glass-panel p-4 flex flex-col",children:[y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"CAREER RUNS"}),y.jsx("span",{className:"text-2xl font-black font-chakra text-cyan-400 mt-1",children:t.totalRuns})]}),y.jsxs("div",{className:"glass-panel p-4 flex flex-col",children:[y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"FOURS HIT"}),y.jsx("span",{className:"text-2xl font-black font-chakra text-blue-400 mt-1",children:t.totalFours})]}),y.jsxs("div",{className:"glass-panel p-4 flex flex-col",children:[y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"SIXES SMASHED"}),y.jsx("span",{className:"text-2xl font-black font-chakra text-amber-400 mt-1",children:t.totalSixes})]}),y.jsxs("div",{className:"glass-panel p-4 flex flex-col",children:[y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"MATCHES WON"}),y.jsxs("span",{className:"text-2xl font-black font-chakra text-emerald-400 mt-1",children:[t.matchesWon," ",y.jsxs("span",{className:"text-xs text-slate-500",children:["/ ",t.matchesPlayed]})]})]})]}),y.jsxs("div",{className:"flex flex-col gap-3",children:[y.jsx("h3",{className:"text-sm font-bold font-chakra text-slate-300 uppercase tracking-wider",children:"CAREER MISSIONS"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:Pg.map(i=>{const r=!!n[i.id];return y.jsxs("div",{className:`glass-panel p-4 rounded-xl flex items-start justify-between gap-3 border ${r?"border-emerald-500/30 bg-emerald-950/10":"border-white/10"}`,children:[y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${r?"bg-emerald-500/20 text-emerald-400":"bg-slate-800 text-slate-500"}`,children:r?y.jsx(Ev,{className:"w-5 h-5"}):y.jsx(kA,{className:"w-5 h-5"})}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-sm font-bold font-chakra text-white",children:i.title}),y.jsx("p",{className:"text-xs text-slate-400 mt-0.5 leading-snug",children:i.description})]})]}),y.jsxs("div",{className:"flex flex-col items-end gap-1",children:[y.jsxs("span",{className:"text-[10px] font-bold font-chakra px-2 py-0.5 rounded bg-amber-500/20 text-amber-300",children:["+",i.rewardXP," XP"]}),y.jsxs("span",{className:"text-[10px] font-bold font-chakra text-slate-400",children:["+",i.rewardCoins," 🪙"]})]})]},i.id)})})]})]})})};var wd={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var A=new OffscreenCanvas(1,1),w=A.getContext("2d");w.fillRect(0,0,1,1);var Y=A.transferToImageBitmap();w.createPattern(Y,"no-repeat")}catch{return!1}return!0}();function l(){}function c(A){var w=n.exports.Promise,Y=w!==void 0?w:e.Promise;return typeof Y=="function"?new Y(A):(A(l,l),null)}var u=function(A,w){return{transform:function(Y){if(A)return Y;if(w.has(Y))return w.get(Y);var O=new OffscreenCanvas(Y.width,Y.height),W=O.getContext("2d");return W.drawImage(Y,0,0),w.set(Y,O),O},clear:function(){w.clear()}}}(o,new Map),d=function(){var A=Math.floor(16.666666666666668),w,Y,O={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Q){var te=Math.random();return O[te]=requestAnimationFrame(function J(ue){W===ue||W+A-1<ue?(W=ue,delete O[te],Q()):O[te]=requestAnimationFrame(J)}),te},Y=function(Q){O[Q]&&cancelAnimationFrame(O[Q])}):(w=function(Q){return setTimeout(Q,A)},Y=function(Q){return clearTimeout(Q)}),{frame:w,cancel:Y}}(),f=function(){var A,w,Y={};function O(W){function Q(te,J){W.postMessage({options:te||{},callback:J})}W.init=function(J){var ue=J.transferControlToOffscreen();W.postMessage({canvas:ue},[ue])},W.fire=function(J,ue,ve){if(w)return Q(J,null),w;var pe=Math.random().toString(36).slice(2);return w=c(function(Ee){function F(Je){Je.data.callback===pe&&(delete Y[pe],W.removeEventListener("message",F),w=null,u.clear(),ve(),Ee())}W.addEventListener("message",F),Q(J,pe),Y[pe]=F.bind(null,{data:{callback:pe}})}),w},W.reset=function(){W.postMessage({reset:!0});for(var J in Y)Y[J](),delete Y[J]}}return function(){if(A)return A;if(!i&&s){var W=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{A=new Worker(URL.createObjectURL(new Blob([W])))}catch(Q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}O(A)}return A}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(A,w){return w?w(A):A}function x(A){return A!=null}function m(A,w,Y){return _(A&&x(A[w])?A[w]:p[w],Y)}function h(A){return A<0?0:Math.floor(A)}function v(A,w){return Math.floor(Math.random()*(w-A))+A}function g(A){return parseInt(A,16)}function S(A){return A.map(P)}function P(A){var w=String(A).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:g(w.substring(0,2)),g:g(w.substring(2,4)),b:g(w.substring(4,6))}}function C(A){var w=m(A,"origin",Object);return w.x=m(w,"x",Number),w.y=m(w,"y",Number),w}function b(A){A.width=document.documentElement.clientWidth,A.height=document.documentElement.clientHeight}function U(A){var w=A.getBoundingClientRect();A.width=w.width,A.height=w.height}function E(A){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=A,w}function T(A,w,Y,O,W,Q,te,J,ue){A.save(),A.translate(w,Y),A.rotate(Q),A.scale(O,W),A.arc(0,0,1,te,J,ue),A.restore()}function H(A){var w=A.angle*(Math.PI/180),Y=A.spread*(Math.PI/180);return{x:A.x,y:A.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:A.startVelocity*.5+Math.random()*A.startVelocity,angle2D:-w+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:A.color,shape:A.shape,tick:0,totalTicks:A.ticks,decay:A.decay,drift:A.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:A.gravity*3,ovalScalar:.6,scalar:A.scalar,flat:A.flat}}function K(A,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var Y=w.tick++/w.totalTicks,O=w.x+w.random*w.tiltCos,W=w.y+w.random*w.tiltSin,Q=w.wobbleX+w.random*w.tiltCos,te=w.wobbleY+w.random*w.tiltSin;if(A.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-Y)+")",A.beginPath(),a&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))A.fill(Z(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Q-O)*.1,Math.abs(te-W)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var J=Math.PI/10*w.wobble,ue=Math.abs(Q-O)*.1,ve=Math.abs(te-W)*.1,pe=w.shape.bitmap.width*w.scalar,Ee=w.shape.bitmap.height*w.scalar,F=new DOMMatrix([Math.cos(J)*ue,Math.sin(J)*ue,-Math.sin(J)*ve,Math.cos(J)*ve,w.x,w.y]);F.multiplySelf(new DOMMatrix(w.shape.matrix));var Je=A.createPattern(u.transform(w.shape.bitmap),"no-repeat");Je.setTransform(F),A.globalAlpha=1-Y,A.fillStyle=Je,A.fillRect(w.x-pe/2,w.y-Ee/2,pe,Ee),A.globalAlpha=1}else if(w.shape==="circle")A.ellipse?A.ellipse(w.x,w.y,Math.abs(Q-O)*w.ovalScalar,Math.abs(te-W)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):T(A,w.x,w.y,Math.abs(Q-O)*w.ovalScalar,Math.abs(te-W)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var oe=Math.PI/2*3,Te=4*w.scalar,ge=8*w.scalar,Ze=w.x,be=w.y,L=5,M=Math.PI/L;L--;)Ze=w.x+Math.cos(oe)*ge,be=w.y+Math.sin(oe)*ge,A.lineTo(Ze,be),oe+=M,Ze=w.x+Math.cos(oe)*Te,be=w.y+Math.sin(oe)*Te,A.lineTo(Ze,be),oe+=M;else A.moveTo(Math.floor(w.x),Math.floor(w.y)),A.lineTo(Math.floor(w.wobbleX),Math.floor(W)),A.lineTo(Math.floor(Q),Math.floor(te)),A.lineTo(Math.floor(O),Math.floor(w.wobbleY));return A.closePath(),A.fill(),w.tick<w.totalTicks}function ee(A,w,Y,O,W){var Q=w.slice(),te=A.getContext("2d"),J,ue,ve=c(function(pe){function Ee(){J=ue=null,te.clearRect(0,0,O.width,O.height),u.clear(),W(),pe()}function F(){i&&!(O.width===r.width&&O.height===r.height)&&(O.width=A.width=r.width,O.height=A.height=r.height),!O.width&&!O.height&&(Y(A),O.width=A.width,O.height=A.height),te.clearRect(0,0,O.width,O.height),Q=Q.filter(function(Je){return K(te,Je)}),Q.length?J=d.frame(F):Ee()}J=d.frame(F),ue=Ee});return{addFettis:function(pe){return Q=Q.concat(pe),ve},canvas:A,promise:ve,reset:function(){J&&d.cancel(J),ue&&ue()}}}function N(A,w){var Y=!A,O=!!m(w||{},"resize"),W=!1,Q=m(w,"disableForReducedMotion",Boolean),te=s&&!!m(w||{},"useWorker"),J=te?f():null,ue=Y?b:U,ve=A&&J?!!A.__confetti_initialized:!1,pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ee;function F(oe,Te,ge){for(var Ze=m(oe,"particleCount",h),be=m(oe,"angle",Number),L=m(oe,"spread",Number),M=m(oe,"startVelocity",Number),j=m(oe,"decay",Number),se=m(oe,"gravity",Number),ie=m(oe,"drift",Number),ae=m(oe,"colors",S),we=m(oe,"ticks",Number),he=m(oe,"shapes"),ye=m(oe,"scalar"),Le=!!m(oe,"flat"),Fe=C(oe),ne=Ze,tt=[],We=A.width*Fe.x,Ue=A.height*Fe.y;ne--;)tt.push(H({x:We,y:Ue,angle:be,spread:L,startVelocity:M,color:ae[ne%ae.length],shape:he[v(0,he.length)],ticks:we,decay:j,gravity:se,drift:ie,scalar:ye,flat:Le}));return Ee?Ee.addFettis(tt):(Ee=ee(A,tt,ue,Te,ge),Ee.promise)}function Je(oe){var Te=Q||m(oe,"disableForReducedMotion",Boolean),ge=m(oe,"zIndex",Number);if(Te&&pe)return c(function(M){M()});Y&&Ee?A=Ee.canvas:Y&&!A&&(A=E(ge),document.body.appendChild(A)),O&&!ve&&ue(A);var Ze={width:A.width,height:A.height};J&&!ve&&J.init(A),ve=!0,J&&(A.__confetti_initialized=!0);function be(){if(J){var M={getBoundingClientRect:function(){if(!Y)return A.getBoundingClientRect()}};ue(M),J.postMessage({resize:{width:M.width,height:M.height}});return}Ze.width=Ze.height=null}function L(){Ee=null,O&&(W=!1,e.removeEventListener("resize",be)),Y&&A&&(document.body.contains(A)&&document.body.removeChild(A),A=null,ve=!1)}return O&&!W&&(W=!0,e.addEventListener("resize",be,!1)),J?J.fire(oe,Ze,L):F(oe,Ze,L)}return Je.reset=function(){J&&J.reset(),Ee&&Ee.reset()},Je}var G;function V(){return G||(G=N(null,{useWorker:!0,resize:!0})),G}function Z(A,w,Y,O,W,Q,te){var J=new Path2D(A),ue=new Path2D;ue.addPath(J,new DOMMatrix(w));var ve=new Path2D;return ve.addPath(ue,new DOMMatrix([Math.cos(te)*W,Math.sin(te)*W,-Math.sin(te)*Q,Math.cos(te)*Q,Y,O])),ve}function D(A){if(!a)throw new Error("path confetti are not supported in this browser");var w,Y;typeof A=="string"?w=A:(w=A.path,Y=A.matrix);var O=new Path2D(w),W=document.createElement("canvas"),Q=W.getContext("2d");if(!Y){for(var te=1e3,J=te,ue=te,ve=0,pe=0,Ee,F,Je=0;Je<te;Je+=2)for(var oe=0;oe<te;oe+=2)Q.isPointInPath(O,Je,oe,"nonzero")&&(J=Math.min(J,Je),ue=Math.min(ue,oe),ve=Math.max(ve,Je),pe=Math.max(pe,oe));Ee=ve-J,F=pe-ue;var Te=10,ge=Math.min(Te/Ee,Te/F);Y=[ge,0,0,ge,-Math.round(Ee/2+J)*ge,-Math.round(F/2+ue)*ge]}return{type:"path",path:w,matrix:Y}}function k(A){var w,Y=1,O="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof A=="string"?w=A:(w=A.text,Y="scalar"in A?A.scalar:Y,W="fontFamily"in A?A.fontFamily:W,O="color"in A?A.color:O);var Q=10*Y,te=""+Q+"px "+W,J=new OffscreenCanvas(Q,Q),ue=J.getContext("2d");ue.font=te;var ve=ue.measureText(w),pe=Math.ceil(ve.actualBoundingBoxRight+ve.actualBoundingBoxLeft),Ee=Math.ceil(ve.actualBoundingBoxAscent+ve.actualBoundingBoxDescent),F=2,Je=ve.actualBoundingBoxLeft+F,oe=ve.actualBoundingBoxAscent+F;pe+=F+F,Ee+=F+F,J=new OffscreenCanvas(pe,Ee),ue=J.getContext("2d"),ue.font=te,ue.fillStyle=O,ue.fillText(w,Je,oe);var Te=1/Y;return{type:"bitmap",bitmap:J.transferToImageBitmap(),matrix:[Te,0,0,Te,-pe*Te/2,-Ee*Te/2]}}n.exports=function(){return V().apply(this,arguments)},n.exports.reset=function(){V().reset()},n.exports.create=N,n.exports.shapeFromPath=D,n.exports.shapeFromText=k})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),wd,!1);const QA=wd.exports;wd.exports.create;const JA=()=>{const{matchSummary:t,restartMatch:e,setGameState:n}=Ln();if(Me.useEffect(()=>{var l;(l=t==null?void 0:t.result)!=null&&l.isWin&&QA({particleCount:120,spread:80,origin:{y:.6},colors:["#06b6d4","#f59e0b","#10b981","#ffffff"]})},[t]),!t)return null;const{result:i,score:r,earnedXP:s,earnedCoins:a,newMissions:o}=t;return y.jsx("div",{className:"modal-backdrop select-none",children:y.jsxs("div",{className:"modal-content glass-panel-glow max-w-lg flex flex-col gap-5 p-6 animate-popBanner",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 shadow-lg ${i.isWin?"bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-900 shadow-amber-500/40":"bg-slate-800 text-slate-300"}`,children:y.jsx(Td,{className:"w-9 h-9"})}),y.jsx("h2",{className:`text-3xl font-black font-chakra uppercase ${i.isWin?"text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]":"text-slate-200"}`,children:i.title}),y.jsx("p",{className:"text-xs text-slate-300 mt-1",children:i.message})]}),y.jsxs("div",{className:"bg-slate-900/80 rounded-xl p-4 border border-white/10 flex items-center justify-around",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase",children:"FINAL SCORE"}),y.jsxs("div",{className:"text-3xl font-extrabold font-chakra text-white mt-0.5",children:[r.totalRuns,y.jsxs("span",{className:"text-lg text-slate-400",children:["/",r.wickets]})]}),y.jsxs("span",{className:"text-xs text-slate-400",children:["(",r.getOversDisplay?r.getOversDisplay():"0.0"," ov)"]})]}),y.jsx("div",{className:"w-[1px] h-12 bg-white/10"}),y.jsxs("div",{className:"flex flex-col gap-1 text-xs",children:[y.jsxs("div",{className:"flex justify-between gap-4",children:[y.jsx("span",{className:"text-slate-400",children:"Fours:"}),y.jsx("strong",{className:"text-cyan-400 font-mono",children:r.fours})]}),y.jsxs("div",{className:"flex justify-between gap-4",children:[y.jsx("span",{className:"text-slate-400",children:"Sixes:"}),y.jsx("strong",{className:"text-amber-400 font-mono",children:r.sixes})]}),y.jsxs("div",{className:"flex justify-between gap-4",children:[y.jsx("span",{className:"text-slate-400",children:"Strike Rate:"}),y.jsx("strong",{className:"text-emerald-400 font-mono",children:r.getStrikeRate?r.getStrikeRate():"0.0"})]})]})]}),y.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Ed,{className:"w-5 h-5 text-cyan-400"}),y.jsx("span",{className:"text-xs font-bold font-chakra text-cyan-200",children:"MATCH REWARDS"})]}),y.jsxs("div",{className:"flex items-center gap-3 text-xs font-bold font-chakra",children:[y.jsxs("span",{className:"px-2.5 py-1 rounded bg-amber-500/20 text-amber-300",children:["+",s," XP"]}),y.jsxs("span",{className:"px-2.5 py-1 rounded bg-yellow-500/20 text-yellow-300",children:["+",a," 🪙"]})]})]}),o&&o.length>0&&y.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3",children:[y.jsx(_v,{className:"w-5 h-5 text-emerald-400 flex-shrink-0"}),y.jsxs("div",{className:"text-xs",children:[y.jsx("span",{className:"font-bold text-emerald-300 font-chakra",children:"MISSION COMPLETED!"}),y.jsxs("p",{className:"text-slate-300 text-[11px]",children:[o[0].title,": ",o[0].description]})]})]}),y.jsxs("div",{className:"flex gap-3 mt-2",children:[y.jsxs("button",{onClick:e,className:"btn-primary flex-1 text-xs py-2.5 flex items-center justify-center gap-2",children:[y.jsx(kv,{className:"w-4 h-4"})," PLAY AGAIN"]}),y.jsxs("button",{onClick:()=>n($e.MAIN_MENU),className:"btn-secondary flex-1 text-xs py-2.5 flex items-center justify-center gap-2",children:[y.jsx(Lv,{className:"w-4 h-4"})," MAIN MENU"]})]})]})})},eR=({onOpenSettings:t})=>{const{resumeMatch:e,restartMatch:n,exitToMenu:i}=Ln();return y.jsx("div",{className:"modal-backdrop select-none",children:y.jsxs("div",{className:"modal-content glass-panel-glow max-w-sm flex flex-col gap-4 p-6",children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[y.jsx("h3",{className:"text-lg font-bold font-chakra text-white uppercase",children:"GAME PAUSED"}),y.jsx("button",{onClick:e,className:"p-1 rounded text-slate-400 hover:text-white",children:y.jsx(t_,{className:"w-5 h-5"})})]}),y.jsxs("div",{className:"flex flex-col gap-2.5 mt-2",children:[y.jsxs("button",{onClick:e,className:"btn-primary text-xs py-3 flex items-center justify-center gap-2",children:[y.jsx(Ov,{className:"w-4 h-4"})," RESUME MATCH"]}),y.jsxs("button",{onClick:n,className:"btn-secondary text-xs py-2.5 flex items-center justify-center gap-2",children:[y.jsx(kv,{className:"w-4 h-4"})," RESTART MATCH"]}),y.jsxs("button",{onClick:t,className:"btn-secondary text-xs py-2.5 flex items-center justify-center gap-2",children:[y.jsx(zv,{className:"w-4 h-4"})," SETTINGS"]}),y.jsxs("button",{onClick:i,className:"btn-secondary text-xs py-2.5 flex items-center justify-center gap-2 text-rose-300 hover:text-rose-200 border-rose-500/20",children:[y.jsx(Lv,{className:"w-4 h-4"})," EXIT TO MAIN MENU"]})]})]})})},tR=({onClose:t})=>{const{settings:e,updateSettings:n}=Ln();return y.jsx("div",{className:"modal-backdrop select-none",children:y.jsxs("div",{className:"modal-content glass-panel-glow max-w-md flex flex-col gap-5 p-6",children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[y.jsx("h3",{className:"text-lg font-bold font-chakra text-white uppercase",children:"GAME SETTINGS"}),y.jsx("button",{onClick:t,className:"p-1 rounded text-slate-400 hover:text-white",children:y.jsx(t_,{className:"w-5 h-5"})})]}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-200",children:[e.soundEnabled?y.jsx(WA,{className:"w-4 h-4 text-cyan-400"}):y.jsx(jA,{className:"w-4 h-4 text-rose-400"}),y.jsx("span",{children:"Sound Effects"})]}),y.jsx("button",{onClick:()=>n({soundEnabled:!e.soundEnabled}),className:`px-3 py-1 text-xs rounded-lg font-bold font-chakra ${e.soundEnabled?"bg-cyan-600 text-white":"bg-slate-800 text-slate-400"}`,children:e.soundEnabled?"ENABLED":"MUTED"})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-200",children:[e.dayNightMode==="day"?y.jsx(GA,{className:"w-4 h-4 text-amber-400"}):y.jsx(BA,{className:"w-4 h-4 text-blue-400"}),y.jsx("span",{children:"Stadium Lighting"})]}),y.jsxs("div",{className:"flex bg-slate-900 rounded-lg p-1 border border-white/10",children:[y.jsx("button",{onClick:()=>n({dayNightMode:"day"}),className:`px-2.5 py-1 text-xs rounded font-bold font-chakra ${e.dayNightMode==="day"?"bg-amber-500 text-slate-950":"text-slate-400"}`,children:"DAY"}),y.jsx("button",{onClick:()=>n({dayNightMode:"night"}),className:`px-2.5 py-1 text-xs rounded font-bold font-chakra ${e.dayNightMode==="night"?"bg-blue-600 text-white":"text-slate-400"}`,children:"NIGHT"})]})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-200",children:[y.jsx(Ed,{className:"w-4 h-4 text-purple-400"}),y.jsx("span",{children:"Graphics Quality"})]}),y.jsx("div",{className:"flex bg-slate-900 rounded-lg p-1 border border-white/10",children:["low","medium","high"].map(i=>y.jsx("button",{onClick:()=>n({graphicsQuality:i}),className:`px-2 py-1 text-[11px] uppercase rounded font-bold font-chakra ${e.graphicsQuality===i?"bg-cyan-600 text-white":"text-slate-400"}`,children:i},i))})]}),y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-200",children:[y.jsx(Kv,{className:"w-4 h-4 text-emerald-400"}),y.jsx("span",{children:"Player Handedness"})]}),y.jsxs("div",{className:"flex bg-slate-900 rounded-lg p-1 border border-white/10",children:[y.jsx("button",{onClick:()=>n({handedness:"right"}),className:`px-2.5 py-1 text-xs rounded font-bold font-chakra ${e.handedness==="right"?"bg-emerald-600 text-white":"text-slate-400"}`,children:"RIGHT"}),y.jsx("button",{onClick:()=>n({handedness:"left"}),className:`px-2.5 py-1 text-xs rounded font-bold font-chakra ${e.handedness==="left"?"bg-emerald-600 text-white":"text-slate-400"}`,children:"LEFT"})]})]})]}),y.jsx("button",{onClick:t,className:"btn-primary text-xs py-2 mt-2 w-full",children:"SAVE & CLOSE"})]})})},nR=({onTriggerShot:t,onTriggerBowl:e})=>{const{gameMode:n}=Ln(),i=n===vt.BOWLING_CHALLENGE;return y.jsxs("div",{className:"w-full flex items-end justify-between pointer-events-none select-none pb-2",children:[i?y.jsx("div",{}):y.jsxs("div",{className:"flex flex-col gap-2 pointer-events-auto",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onTouchStart:()=>t({shotType:me.LOFTED_DRIVE,power:1.3}),onClick:()=>t({shotType:me.LOFTED_DRIVE,power:1.3}),className:"w-14 h-12 rounded-xl bg-amber-500/80 active:bg-amber-600 text-slate-950 font-chakra font-bold text-xs flex items-center justify-center border border-amber-300 shadow-lg",children:"SIX 🚀"}),y.jsx("button",{onTouchStart:()=>t({shotType:me.COVER_DRIVE,power:1.15}),onClick:()=>t({shotType:me.COVER_DRIVE,power:1.15}),className:"w-14 h-12 rounded-xl bg-cyan-600/80 active:bg-cyan-700 text-white font-chakra font-bold text-xs flex items-center justify-center border border-cyan-400 shadow-lg",children:"COVER"})]}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{onTouchStart:()=>t({shotType:me.PULL_SHOT,power:1.2}),onClick:()=>t({shotType:me.PULL_SHOT,power:1.2}),className:"w-14 h-12 rounded-xl bg-purple-600/80 active:bg-purple-700 text-white font-chakra font-bold text-xs flex items-center justify-center border border-purple-400 shadow-lg",children:"PULL"}),y.jsx("button",{onTouchStart:()=>t({shotType:me.DEFENSIVE,power:.5}),onClick:()=>t({shotType:me.DEFENSIVE,power:.5}),className:"w-14 h-12 rounded-xl bg-slate-700/80 active:bg-slate-800 text-slate-300 font-chakra font-bold text-xs flex items-center justify-center border border-slate-500 shadow-lg",children:"DEFEND"})]})]}),y.jsx("div",{className:"pointer-events-auto pr-2",children:i?y.jsxs("button",{onTouchStart:e,onClick:e,className:"w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 active:scale-95 text-white font-black font-chakra text-sm flex flex-col items-center justify-center border-2 border-white/30 shadow-[0_0_20px_rgba(16,185,129,0.5)]",children:[y.jsx("span",{children:"BOWL"}),y.jsx("span",{className:"text-[9px] text-emerald-200",children:"DELIVER"})]}):y.jsxs("button",{onTouchStart:()=>t({shotType:me.STRAIGHT_DRIVE,power:1.15}),onClick:()=>t({shotType:me.STRAIGHT_DRIVE,power:1.15}),className:"w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 active:scale-95 text-white font-black font-chakra text-sm flex flex-col items-center justify-center border-2 border-white/30 shadow-[0_0_20px_rgba(6,182,212,0.5)]",children:[y.jsx("span",{children:"HIT"}),y.jsx("span",{className:"text-[9px] text-cyan-200",children:"SWING"})]})})]})},iR=({ballPhysics:t,renderFps:e=60})=>{const{gameState:n,gameMode:i,visionData:r,matchManager:s}=Ln(),{processedPose:a,movement:o,batting:l,fps:c}=r,u=t?t.position:{x:0,y:0,z:0},d=t?t.velocity:{z:0};return y.jsxs("div",{className:"absolute top-16 left-4 z-50 bg-black/85 border border-cyan-500/40 rounded-lg p-3 text-[11px] font-mono text-cyan-300 pointer-events-none select-none max-w-xs shadow-2xl backdrop-blur-md",children:[y.jsxs("div",{className:"font-bold text-white border-b border-white/20 pb-1 mb-1.5 flex justify-between",children:[y.jsx("span",{children:"DEBUG TELEMETRY"}),y.jsx("span",{className:"text-amber-400",children:"F3 TO HIDE"})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Render FPS:"}),y.jsx("span",{children:e})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Pose FPS:"}),y.jsx("span",{children:c||0})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Game State:"}),y.jsx("span",{className:"text-emerald-400",children:n})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Game Mode:"}),y.jsx("span",{children:i})]}),y.jsxs("div",{className:"mt-1.5 pt-1.5 border-t border-white/10 text-slate-300",children:[y.jsx("div",{className:"text-white font-semibold mb-0.5",children:"Computer Vision:"}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Pose Detected:"}),y.jsx("span",{children:a?"YES":"NO"})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Wrist Speed:"}),y.jsxs("span",{children:[o!=null&&o.wristSpeed?o.wristSpeed.toFixed(2):0," m/s"]})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Spine Tilt:"}),y.jsxs("span",{children:[a!=null&&a.jointAngles?a.jointAngles.spineTilt.toFixed(1):0,"°"]})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Shot / Conf:"}),y.jsxs("span",{className:"text-amber-300",children:[(l==null?void 0:l.shotType)||"NONE"," (",(l==null?void 0:l.confidence)||0,"%)"]})]})]}),y.jsxs("div",{className:"mt-1.5 pt-1.5 border-t border-white/10 text-slate-300",children:[y.jsx("div",{className:"text-white font-semibold mb-0.5",children:"Ball Physics:"}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Pos (X,Y,Z):"}),y.jsxs("span",{children:[u.x.toFixed(1),", ",u.y.toFixed(1),", ",u.z.toFixed(1)]})]}),y.jsxs("div",{className:"flex justify-between",children:[y.jsx("span",{className:"text-slate-400",children:"Vel (Z):"}),y.jsxs("span",{children:[d.z.toFixed(1)," m/s"]})]})]})]})},rR=()=>{const{gameState:t,setGameState:e,notification:n,isDebugOpen:i,setIsDebugOpen:r,pauseMatch:s,resumeMatch:a,cameraView:o,setCameraView:l}=Ln(),[c,u]=Me.useState(!1),d=Me.useRef(null),f=Me.useRef(null),p=t===$e.PLAYING||t===$e.BALL_IN_PLAY||t===$e.BALL_RESULT,_=()=>{t===$e.PAUSED?a():p&&s()},x=()=>{l(m=>m==="BATSMAN_FOLLOW"?"BROADCAST":m==="BROADCAST"?"BATSMAN_CLOSE":m==="BATSMAN_CLOSE"?"BOWLER_VIEW":"BATSMAN_FOLLOW")};return y.jsxs("div",{className:"game-container",children:[y.jsx(yA,{onCycleCamera:x,onTogglePause:_,onToggleDebug:()=>r(m=>!m),onShotTriggerRef:d,onBowlTriggerRef:f}),p&&y.jsxs("div",{className:"ui-overlay",children:[y.jsxs("div",{className:"w-full flex items-start justify-between gap-4",children:[y.jsx(XA,{onTogglePause:_,onCycleCamera:x}),y.jsx("div",{className:"flex flex-col items-end gap-3 interactive-ui",children:y.jsx(YA,{})})]}),n&&y.jsxs("div",{className:"banner-center",children:[y.jsx("span",{className:`banner-title ${n.type}`,children:n.title}),y.jsx("span",{className:"text-sm font-semibold font-chakra text-white/90 px-4 py-1 rounded-full bg-black/60 border border-white/20 mt-1",children:n.subtitle})]}),y.jsxs("div",{className:"w-full flex items-end justify-between",children:[y.jsx(nR,{onTriggerShot:m=>d.current&&d.current(m),onTriggerBowl:()=>f.current&&f.current()}),y.jsx(qA,{})]})]}),t===$e.START_SCREEN&&y.jsx(vm,{onOpenSettings:()=>u(!0)}),t===$e.MAIN_MENU&&y.jsx(vm,{onOpenSettings:()=>u(!0)}),t===$e.CALIBRATION&&y.jsx(KA,{}),t===$e.CAREER_MENU&&y.jsx(ZA,{}),t===$e.PAUSED&&y.jsx(eR,{onOpenSettings:()=>u(!0)}),t===$e.MATCH_COMPLETE&&y.jsx(JA,{}),c&&y.jsx(tR,{onClose:()=>u(!1)}),i&&y.jsx(iR,{})]})};function sR(){return y.jsx(Jy,{children:y.jsx(rR,{})})}mu.createRoot(document.getElementById("root")).render(y.jsx(w_.StrictMode,{children:y.jsx(sR,{})}));export{aR as c};
