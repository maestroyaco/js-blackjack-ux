(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerPolicy&&(s.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?s.credentials="include":u.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(u){if(u.ep)return;u.ep=!0;const s=t(u);fetch(u.href,s)}})();let S=[],A=[],T=[];const $n=document.querySelectorAll(".divcards"),zn=document.querySelectorAll("small"),b=document.querySelector("#btnnewgame"),P=document.querySelector("#btnnextcard"),J=document.querySelector("#btnseecard"),_={disable:n=>{n.disabled=!0,n.classList.add("btn-disabled")},enable:n=>{n.disabled=!1,n.classList.remove("btn-disabled")},addStylePulse:n=>{n.classList.add("pulse")},removeStylePulse:n=>{n.classList.remove("pulse")},changeText:(n,e)=>{n.textContent=e}},qe=n=>{n.innerHTML="",n.classList.remove("menssagewin"),n.classList.remove("menssagedefeat")},$e=(n,e)=>{const t=document.querySelector("#menssage");n===e?n===21?ze(t):n>21?Ye(t):Je(t):n===21?xe(t):e===21?Qe(t):n>21?Ue(t):e>21?We(t):n>e?Ge(t):Ke(t)},ze=n=>{n.className="menssagewin",n.textContent="Epic Blackjack x2! Both got 21."},Ye=n=>{n.className="menssagewin",n.textContent="They both exceeded 21. It's a draw!"},Je=n=>{n.className="menssagedefeat",n.textContent="It's a draw! Sin 21"},xe=n=>{n.className="menssagewin",n.textContent="Blackjack! You beat the machine!"},Qe=n=>{n.className="menssagedefeat",n.textContent="The machine got Blackjack and beat you."},Ue=n=>{n.className="menssagedefeat",n.textContent="You exceeded 21. You lose."},We=n=>{n.className="menssagewin",n.textContent="The machine exceeded 21. You win!"},Ge=n=>{n.className="menssagewin",n.textContent="You win! Your points are higher."},Ke=n=>{n.className="menssagedefeat",n.textContent="The machine wins! Better luck next time."};var Yn="1.13.7",Pn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},G=Array.prototype,cn=Object.prototype,En=typeof Symbol<"u"?Symbol.prototype:null,Xe=G.push,q=G.slice,F=cn.toString,Ze=cn.hasOwnProperty,Jn=typeof ArrayBuffer<"u",ke=typeof DataView<"u",be=Array.isArray,On=Object.keys,Dn=Object.create,In=Jn&&ArrayBuffer.isView,je=isNaN,nt=isFinite,xn=!{toString:null}.propertyIsEnumerable("toString"),Tn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],et=Math.pow(2,53)-1;function v(n,e){return e=e==null?n.length-1:+e,function(){for(var t=Math.max(arguments.length-e,0),r=Array(t),u=0;u<t;u++)r[u]=arguments[u+e];switch(e){case 0:return n.call(this,r);case 1:return n.call(this,arguments[0],r);case 2:return n.call(this,arguments[0],arguments[1],r)}var s=Array(e+1);for(u=0;u<e;u++)s[u]=arguments[u];return s[e]=r,n.apply(this,s)}}function O(n){var e=typeof n;return e==="function"||e==="object"&&!!n}function tt(n){return n===null}function Qn(n){return n===void 0}function Un(n){return n===!0||n===!1||F.call(n)==="[object Boolean]"}function rt(n){return!!(n&&n.nodeType===1)}function g(n){var e="[object "+n+"]";return function(t){return F.call(t)===e}}const ln=g("String"),Wn=g("Number"),st=g("Date"),ut=g("RegExp"),at=g("Error"),Gn=g("Symbol"),Kn=g("ArrayBuffer");var Xn=g("Function"),ct=Pn.document&&Pn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof ct!="function"&&(Xn=function(n){return typeof n=="function"||!1});const d=Xn,Zn=g("Object");var kn=ke&&(!/\[native code\]/.test(String(DataView))||Zn(new DataView(new ArrayBuffer(8)))),fn=typeof Map<"u"&&Zn(new Map),it=g("DataView");function lt(n){return n!=null&&d(n.getInt8)&&Kn(n.buffer)}const Q=kn?lt:it,D=be||g("Array");function N(n,e){return n!=null&&Ze.call(n,e)}var j=g("Arguments");(function(){j(arguments)||(j=function(n){return N(n,"callee")})})();const on=j;function ft(n){return!Gn(n)&&nt(n)&&!isNaN(parseFloat(n))}function bn(n){return Wn(n)&&je(n)}function jn(n){return function(){return n}}function ne(n){return function(e){var t=n(e);return typeof t=="number"&&t>=0&&t<=et}}function ee(n){return function(e){return e==null?void 0:e[n]}}const U=ee("byteLength"),ot=ne(U);var pt=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function gt(n){return In?In(n)&&!Q(n):ot(n)&&pt.test(F.call(n))}const te=Jn?gt:jn(!1),m=ee("length");function ht(n){for(var e={},t=n.length,r=0;r<t;++r)e[n[r]]=!0;return{contains:function(u){return e[u]===!0},push:function(u){return e[u]=!0,n.push(u)}}}function re(n,e){e=ht(e);var t=Tn.length,r=n.constructor,u=d(r)&&r.prototype||cn,s="constructor";for(N(n,s)&&!e.contains(s)&&e.push(s);t--;)s=Tn[t],s in n&&n[s]!==u[s]&&!e.contains(s)&&e.push(s)}function p(n){if(!O(n))return[];if(On)return On(n);var e=[];for(var t in n)N(n,t)&&e.push(t);return xn&&re(n,e),e}function dt(n){if(n==null)return!0;var e=m(n);return typeof e=="number"&&(D(n)||ln(n)||on(n))?e===0:m(p(n))===0}function se(n,e){var t=p(e),r=t.length;if(n==null)return!r;for(var u=Object(n),s=0;s<r;s++){var a=t[s];if(e[a]!==u[a]||!(a in u))return!1}return!0}function f(n){if(n instanceof f)return n;if(!(this instanceof f))return new f(n);this._wrapped=n}f.VERSION=Yn;f.prototype.value=function(){return this._wrapped};f.prototype.valueOf=f.prototype.toJSON=f.prototype.value;f.prototype.toString=function(){return String(this._wrapped)};function Bn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,U(n))}var Ln="[object DataView]";function nn(n,e,t,r){if(n===e)return n!==0||1/n===1/e;if(n==null||e==null)return!1;if(n!==n)return e!==e;var u=typeof n;return u!=="function"&&u!=="object"&&typeof e!="object"?!1:ue(n,e,t,r)}function ue(n,e,t,r){n instanceof f&&(n=n._wrapped),e instanceof f&&(e=e._wrapped);var u=F.call(n);if(u!==F.call(e))return!1;if(kn&&u=="[object Object]"&&Q(n)){if(!Q(e))return!1;u=Ln}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+e;case"[object Number]":return+n!=+n?+e!=+e:+n==0?1/+n===1/e:+n==+e;case"[object Date]":case"[object Boolean]":return+n==+e;case"[object Symbol]":return En.valueOf.call(n)===En.valueOf.call(e);case"[object ArrayBuffer]":case Ln:return ue(Bn(n),Bn(e),t,r)}var s=u==="[object Array]";if(!s&&te(n)){var a=U(n);if(a!==U(e))return!1;if(n.buffer===e.buffer&&n.byteOffset===e.byteOffset)return!0;s=!0}if(!s){if(typeof n!="object"||typeof e!="object")return!1;var c=n.constructor,i=e.constructor;if(c!==i&&!(d(c)&&c instanceof c&&d(i)&&i instanceof i)&&"constructor"in n&&"constructor"in e)return!1}t=t||[],r=r||[];for(var l=t.length;l--;)if(t[l]===n)return r[l]===e;if(t.push(n),r.push(e),s){if(l=n.length,l!==e.length)return!1;for(;l--;)if(!nn(n[l],e[l],t,r))return!1}else{var o=p(n),h;if(l=o.length,p(e).length!==l)return!1;for(;l--;)if(h=o[l],!(N(e,h)&&nn(n[h],e[h],t,r)))return!1}return t.pop(),r.pop(),!0}function vt(n,e){return nn(n,e)}function $(n){if(!O(n))return[];var e=[];for(var t in n)e.push(t);return xn&&re(n,e),e}function pn(n){var e=m(n);return function(t){if(t==null)return!1;var r=$(t);if(m(r))return!1;for(var u=0;u<e;u++)if(!d(t[n[u]]))return!1;return n!==ie||!d(t[gn])}}var gn="forEach",ae="has",hn=["clear","delete"],ce=["get",ae,"set"],mt=hn.concat(gn,ce),ie=hn.concat(ce),yt=["add"].concat(hn,gn,ae);const wt=fn?pn(mt):g("Map"),At=fn?pn(ie):g("WeakMap"),_t=fn?pn(yt):g("Set"),St=g("WeakSet");function L(n){for(var e=p(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=n[e[u]];return r}function Ct(n){for(var e=p(n),t=e.length,r=Array(t),u=0;u<t;u++)r[u]=[e[u],n[e[u]]];return r}function le(n){for(var e={},t=p(n),r=0,u=t.length;r<u;r++)e[n[t[r]]]=t[r];return e}function en(n){var e=[];for(var t in n)d(n[t])&&e.push(t);return e.sort()}function dn(n,e){return function(t){var r=arguments.length;if(e&&(t=Object(t)),r<2||t==null)return t;for(var u=1;u<r;u++)for(var s=arguments[u],a=n(s),c=a.length,i=0;i<c;i++){var l=a[i];(!e||t[l]===void 0)&&(t[l]=s[l])}return t}}const fe=dn($),W=dn(p),oe=dn($,!0);function Mt(){return function(){}}function pe(n){if(!O(n))return{};if(Dn)return Dn(n);var e=Mt();e.prototype=n;var t=new e;return e.prototype=null,t}function Nt(n,e){var t=pe(n);return e&&W(t,e),t}function Pt(n){return O(n)?D(n)?n.slice():fe({},n):n}function Et(n,e){return e(n),n}function ge(n){return D(n)?n:[n]}f.toPath=ge;function z(n){return f.toPath(n)}function vn(n,e){for(var t=e.length,r=0;r<t;r++){if(n==null)return;n=n[e[r]]}return t?n:void 0}function he(n,e,t){var r=vn(n,z(e));return Qn(r)?t:r}function Ot(n,e){e=z(e);for(var t=e.length,r=0;r<t;r++){var u=e[r];if(!N(n,u))return!1;n=n[u]}return!!t}function mn(n){return n}function H(n){return n=W({},n),function(e){return se(e,n)}}function yn(n){return n=z(n),function(e){return vn(e,n)}}function Y(n,e,t){if(e===void 0)return n;switch(t??3){case 1:return function(r){return n.call(e,r)};case 3:return function(r,u,s){return n.call(e,r,u,s)};case 4:return function(r,u,s,a){return n.call(e,r,u,s,a)}}return function(){return n.apply(e,arguments)}}function de(n,e,t){return n==null?mn:d(n)?Y(n,e,t):O(n)&&!D(n)?H(n):yn(n)}function wn(n,e){return de(n,e,1/0)}f.iteratee=wn;function y(n,e,t){return f.iteratee!==wn?f.iteratee(n,e):de(n,e,t)}function Dt(n,e,t){e=y(e,t);for(var r=p(n),u=r.length,s={},a=0;a<u;a++){var c=r[a];s[c]=e(n[c],c,n)}return s}function ve(){}function It(n){return n==null?ve:function(e){return he(n,e)}}function Tt(n,e,t){var r=Array(Math.max(0,n));e=Y(e,t,1);for(var u=0;u<n;u++)r[u]=e(u);return r}function tn(n,e){return e==null&&(e=n,n=0),n+Math.floor(Math.random()*(e-n+1))}const R=Date.now||function(){return new Date().getTime()};function me(n){var e=function(s){return n[s]},t="(?:"+p(n).join("|")+")",r=RegExp(t),u=RegExp(t,"g");return function(s){return s=s==null?"":""+s,r.test(s)?s.replace(u,e):s}}const ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Bt=me(ye),Lt=le(ye),Vt=me(Lt),Ft=f.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var X=/(.)^/,Ht={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Rt=/\\|'|\r|\n|\u2028|\u2029/g;function qt(n){return"\\"+Ht[n]}var $t=/^\s*(\w|\$)+\s*$/;function zt(n,e,t){!e&&t&&(e=t),e=oe({},e,f.templateSettings);var r=RegExp([(e.escape||X).source,(e.interpolate||X).source,(e.evaluate||X).source].join("|")+"|$","g"),u=0,s="__p+='";n.replace(r,function(l,o,h,Mn,Nn){return s+=n.slice(u,Nn).replace(Rt,qt),u=Nn+l.length,o?s+=`'+
((__t=(`+o+`))==null?'':_.escape(__t))+
'`:h?s+=`'+
((__t=(`+h+`))==null?'':__t)+
'`:Mn&&(s+=`';
`+Mn+`
__p+='`),l}),s+=`';
`;var a=e.variable;if(a){if(!$t.test(a))throw new Error("variable is not a bare identifier: "+a)}else s=`with(obj||{}){
`+s+`}
`,a="obj";s=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+s+`return __p;
`;var c;try{c=new Function(a,"_",s)}catch(l){throw l.source=s,l}var i=function(l){return c.call(this,l,f)};return i.source="function("+a+`){
`+s+"}",i}function Yt(n,e,t){e=z(e);var r=e.length;if(!r)return d(t)?t.call(n):t;for(var u=0;u<r;u++){var s=n==null?void 0:n[e[u]];s===void 0&&(s=t,u=r),n=d(s)?s.call(n):s}return n}var Jt=0;function xt(n){var e=++Jt+"";return n?n+e:e}function Qt(n){var e=f(n);return e._chain=!0,e}function we(n,e,t,r,u){if(!(r instanceof e))return n.apply(t,u);var s=pe(n.prototype),a=n.apply(s,u);return O(a)?a:s}var V=v(function(n,e){var t=V.placeholder,r=function(){for(var u=0,s=e.length,a=Array(s),c=0;c<s;c++)a[c]=e[c]===t?arguments[u++]:e[c];for(;u<arguments.length;)a.push(arguments[u++]);return we(n,r,this,this,a)};return r});V.placeholder=f;const Ae=v(function(n,e,t){if(!d(n))throw new TypeError("Bind must be called on a function");var r=v(function(u){return we(n,r,e,this,t.concat(u))});return r}),w=ne(m);function I(n,e,t,r){if(r=r||[],!e&&e!==0)e=1/0;else if(e<=0)return r.concat(n);for(var u=r.length,s=0,a=m(n);s<a;s++){var c=n[s];if(w(c)&&(D(c)||on(c)))if(e>1)I(c,e-1,t,r),u=r.length;else for(var i=0,l=c.length;i<l;)r[u++]=c[i++];else t||(r[u++]=c)}return r}const Ut=v(function(n,e){e=I(e,!1,!1);var t=e.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var r=e[t];n[r]=Ae(n[r],n)}return n});function Wt(n,e){var t=function(r){var u=t.cache,s=""+(e?e.apply(this,arguments):r);return N(u,s)||(u[s]=n.apply(this,arguments)),u[s]};return t.cache={},t}const _e=v(function(n,e,t){return setTimeout(function(){return n.apply(null,t)},e)}),Gt=V(_e,f,1);function Kt(n,e,t){var r,u,s,a,c=0;t||(t={});var i=function(){c=t.leading===!1?0:R(),r=null,a=n.apply(u,s),r||(u=s=null)},l=function(){var o=R();!c&&t.leading===!1&&(c=o);var h=e-(o-c);return u=this,s=arguments,h<=0||h>e?(r&&(clearTimeout(r),r=null),c=o,a=n.apply(u,s),r||(u=s=null)):!r&&t.trailing!==!1&&(r=setTimeout(i,h)),a};return l.cancel=function(){clearTimeout(r),c=0,r=u=s=null},l}function Xt(n,e,t){var r,u,s,a,c,i=function(){var o=R()-u;e>o?r=setTimeout(i,e-o):(r=null,t||(a=n.apply(c,s)),r||(s=c=null))},l=v(function(o){return c=this,s=o,u=R(),r||(r=setTimeout(i,e),t&&(a=n.apply(c,s))),a});return l.cancel=function(){clearTimeout(r),r=s=c=null},l}function Zt(n,e){return V(e,n)}function An(n){return function(){return!n.apply(this,arguments)}}function kt(){var n=arguments,e=n.length-1;return function(){for(var t=e,r=n[e].apply(this,arguments);t--;)r=n[t].call(this,r);return r}}function bt(n,e){return function(){if(--n<1)return e.apply(this,arguments)}}function Se(n,e){var t;return function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=null),t}}const jt=V(Se,2);function Ce(n,e,t){e=y(e,t);for(var r=p(n),u,s=0,a=r.length;s<a;s++)if(u=r[s],e(n[u],u,n))return u}function Me(n){return function(e,t,r){t=y(t,r);for(var u=m(e),s=n>0?0:u-1;s>=0&&s<u;s+=n)if(t(e[s],s,e))return s;return-1}}const _n=Me(1),Ne=Me(-1);function Pe(n,e,t,r){t=y(t,r,1);for(var u=t(e),s=0,a=m(n);s<a;){var c=Math.floor((s+a)/2);t(n[c])<u?s=c+1:a=c}return s}function Ee(n,e,t){return function(r,u,s){var a=0,c=m(r);if(typeof s=="number")n>0?a=s>=0?s:Math.max(s+c,a):c=s>=0?Math.min(s+1,c):s+c+1;else if(t&&s&&c)return s=t(r,u),r[s]===u?s:-1;if(u!==u)return s=e(q.call(r,a,c),bn),s>=0?s+a:-1;for(s=n>0?a:c-1;s>=0&&s<c;s+=n)if(r[s]===u)return s;return-1}}const Oe=Ee(1,_n,Pe),nr=Ee(-1,Ne);function rn(n,e,t){var r=w(n)?_n:Ce,u=r(n,e,t);if(u!==void 0&&u!==-1)return n[u]}function er(n,e){return rn(n,H(e))}function M(n,e,t){e=Y(e,t);var r,u;if(w(n))for(r=0,u=n.length;r<u;r++)e(n[r],r,n);else{var s=p(n);for(r=0,u=s.length;r<u;r++)e(n[s[r]],s[r],n)}return n}function E(n,e,t){e=y(e,t);for(var r=!w(n)&&p(n),u=(r||n).length,s=Array(u),a=0;a<u;a++){var c=r?r[a]:a;s[a]=e(n[c],c,n)}return s}function De(n){var e=function(t,r,u,s){var a=!w(t)&&p(t),c=(a||t).length,i=n>0?0:c-1;for(s||(u=t[a?a[i]:i],i+=n);i>=0&&i<c;i+=n){var l=a?a[i]:i;u=r(u,t[l],l,t)}return u};return function(t,r,u,s){var a=arguments.length>=3;return e(t,Y(r,s,4),u,a)}}const Z=De(1),Vn=De(-1);function B(n,e,t){var r=[];return e=y(e,t),M(n,function(u,s,a){e(u,s,a)&&r.push(u)}),r}function tr(n,e,t){return B(n,An(y(e)),t)}function Fn(n,e,t){e=y(e,t);for(var r=!w(n)&&p(n),u=(r||n).length,s=0;s<u;s++){var a=r?r[s]:s;if(!e(n[a],a,n))return!1}return!0}function Hn(n,e,t){e=y(e,t);for(var r=!w(n)&&p(n),u=(r||n).length,s=0;s<u;s++){var a=r?r[s]:s;if(e(n[a],a,n))return!0}return!1}function C(n,e,t,r){return w(n)||(n=L(n)),(typeof t!="number"||r)&&(t=0),Oe(n,e,t)>=0}const rr=v(function(n,e,t){var r,u;return d(e)?u=e:(e=z(e),r=e.slice(0,-1),e=e[e.length-1]),E(n,function(s){var a=u;if(!a){if(r&&r.length&&(s=vn(s,r)),s==null)return;a=s[e]}return a==null?a:a.apply(s,t)})});function Sn(n,e){return E(n,yn(e))}function sr(n,e){return B(n,H(e))}function Ie(n,e,t){var r=-1/0,u=-1/0,s,a;if(e==null||typeof e=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var c=0,i=n.length;c<i;c++)s=n[c],s!=null&&s>r&&(r=s)}else e=y(e,t),M(n,function(l,o,h){a=e(l,o,h),(a>u||a===-1/0&&r===-1/0)&&(r=l,u=a)});return r}function ur(n,e,t){var r=1/0,u=1/0,s,a;if(e==null||typeof e=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var c=0,i=n.length;c<i;c++)s=n[c],s!=null&&s<r&&(r=s)}else e=y(e,t),M(n,function(l,o,h){a=e(l,o,h),(a<u||a===1/0&&r===1/0)&&(r=l,u=a)});return r}var ar=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Te(n){return n?D(n)?q.call(n):ln(n)?n.match(ar):w(n)?E(n,mn):L(n):[]}function Be(n,e,t){if(e==null||t)return w(n)||(n=L(n)),n[tn(n.length-1)];var r=Te(n),u=m(r);e=Math.max(Math.min(e,u),0);for(var s=u-1,a=0;a<e;a++){var c=tn(a,s),i=r[a];r[a]=r[c],r[c]=i}return r.slice(0,e)}function cr(n){return Be(n,1/0)}function ir(n,e,t){var r=0;return e=y(e,t),Sn(E(n,function(u,s,a){return{value:u,index:r++,criteria:e(u,s,a)}}).sort(function(u,s){var a=u.criteria,c=s.criteria;if(a!==c){if(a>c||a===void 0)return 1;if(a<c||c===void 0)return-1}return u.index-s.index}),"value")}function K(n,e){return function(t,r,u){var s=e?[[],[]]:{};return r=y(r,u),M(t,function(a,c){var i=r(a,c,t);n(s,a,i)}),s}}const lr=K(function(n,e,t){N(n,t)?n[t].push(e):n[t]=[e]}),fr=K(function(n,e,t){n[t]=e}),or=K(function(n,e,t){N(n,t)?n[t]++:n[t]=1}),pr=K(function(n,e,t){n[t?0:1].push(e)},!0);function gr(n){return n==null?0:w(n)?n.length:p(n).length}function hr(n,e,t){return e in t}const Le=v(function(n,e){var t={},r=e[0];if(n==null)return t;d(r)?(e.length>1&&(r=Y(r,e[1])),e=$(n)):(r=hr,e=I(e,!1,!1),n=Object(n));for(var u=0,s=e.length;u<s;u++){var a=e[u],c=n[a];r(c,a,n)&&(t[a]=c)}return t}),dr=v(function(n,e){var t=e[0],r;return d(t)?(t=An(t),e.length>1&&(r=e[1])):(e=E(I(e,!1,!1),String),t=function(u,s){return!C(e,s)}),Le(n,t,r)});function Ve(n,e,t){return q.call(n,0,Math.max(0,n.length-(e==null||t?1:e)))}function k(n,e,t){return n==null||n.length<1?e==null||t?void 0:[]:e==null||t?n[0]:Ve(n,n.length-e)}function x(n,e,t){return q.call(n,e==null||t?1:e)}function vr(n,e,t){return n==null||n.length<1?e==null||t?void 0:[]:e==null||t?n[n.length-1]:x(n,Math.max(0,n.length-e))}function mr(n){return B(n,Boolean)}function yr(n,e){return I(n,e,!1)}const Fe=v(function(n,e){return e=I(e,!0,!0),B(n,function(t){return!C(e,t)})}),wr=v(function(n,e){return Fe(n,e)});function sn(n,e,t,r){Un(e)||(r=t,t=e,e=!1),t!=null&&(t=y(t,r));for(var u=[],s=[],a=0,c=m(n);a<c;a++){var i=n[a],l=t?t(i,a,n):i;e&&!t?((!a||s!==l)&&u.push(i),s=l):t?C(s,l)||(s.push(l),u.push(i)):C(u,i)||u.push(i)}return u}const Ar=v(function(n){return sn(I(n,!0,!0))});function _r(n){for(var e=[],t=arguments.length,r=0,u=m(n);r<u;r++){var s=n[r];if(!C(e,s)){var a;for(a=1;a<t&&C(arguments[a],s);a++);a===t&&e.push(s)}}return e}function un(n){for(var e=n&&Ie(n,m).length||0,t=Array(e),r=0;r<e;r++)t[r]=Sn(n,r);return t}const Sr=v(un);function Cr(n,e){for(var t={},r=0,u=m(n);r<u;r++)e?t[n[r]]=e[r]:t[n[r][0]]=n[r][1];return t}function Mr(n,e,t){e==null&&(e=n||0,n=0),t||(t=e<n?-1:1);for(var r=Math.max(Math.ceil((e-n)/t),0),u=Array(r),s=0;s<r;s++,n+=t)u[s]=n;return u}function Nr(n,e){if(e==null||e<1)return[];for(var t=[],r=0,u=n.length;r<u;)t.push(q.call(n,r,r+=e));return t}function Cn(n,e){return n._chain?f(e).chain():e}function He(n){return M(en(n),function(e){var t=f[e]=n[e];f.prototype[e]=function(){var r=[this._wrapped];return Xe.apply(r,arguments),Cn(this,t.apply(f,r))}}),f}M(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var e=G[n];f.prototype[n]=function(){var t=this._wrapped;return t!=null&&(e.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),Cn(this,t)}});M(["concat","join","slice"],function(n){var e=G[n];f.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=e.apply(t,arguments)),Cn(this,t)}});const Pr=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Yn,after:bt,all:Fn,allKeys:$,any:Hn,assign:W,before:Se,bind:Ae,bindAll:Ut,chain:Qt,chunk:Nr,clone:Pt,collect:E,compact:mr,compose:kt,constant:jn,contains:C,countBy:or,create:Nt,debounce:Xt,default:f,defaults:oe,defer:Gt,delay:_e,detect:rn,difference:Fe,drop:x,each:M,escape:Bt,every:Fn,extend:fe,extendOwn:W,filter:B,find:rn,findIndex:_n,findKey:Ce,findLastIndex:Ne,findWhere:er,first:k,flatten:yr,foldl:Z,foldr:Vn,forEach:M,functions:en,get:he,groupBy:lr,has:Ot,head:k,identity:mn,include:C,includes:C,indexBy:fr,indexOf:Oe,initial:Ve,inject:Z,intersection:_r,invert:le,invoke:rr,isArguments:on,isArray:D,isArrayBuffer:Kn,isBoolean:Un,isDataView:Q,isDate:st,isElement:rt,isEmpty:dt,isEqual:vt,isError:at,isFinite:ft,isFunction:d,isMap:wt,isMatch:se,isNaN:bn,isNull:tt,isNumber:Wn,isObject:O,isRegExp:ut,isSet:_t,isString:ln,isSymbol:Gn,isTypedArray:te,isUndefined:Qn,isWeakMap:At,isWeakSet:St,iteratee:wn,keys:p,last:vr,lastIndexOf:nr,map:E,mapObject:Dt,matcher:H,matches:H,max:Ie,memoize:Wt,methods:en,min:ur,mixin:He,negate:An,noop:ve,now:R,object:Cr,omit:dr,once:jt,pairs:Ct,partial:V,partition:pr,pick:Le,pluck:Sn,property:yn,propertyOf:It,random:tn,range:Mr,reduce:Z,reduceRight:Vn,reject:tr,rest:x,restArguments:v,result:Yt,sample:Be,select:B,shuffle:cr,size:gr,some:Hn,sortBy:ir,sortedIndex:Pe,tail:x,take:k,tap:Et,template:zt,templateSettings:Ft,throttle:Kt,times:Tt,toArray:Te,toPath:ge,transpose:un,unescape:Vt,union:Ar,uniq:sn,unique:sn,uniqueId:xt,unzip:un,values:L,where:sr,without:wr,wrap:Zt,zip:Sr},Symbol.toStringTag,{value:"Module"}));var an=He(Pr);an._=an;const Rn=["C","D","H","S"],Er=["A","J","Q","K"],Or=()=>{S.length=0;for(let e=2;e<=10;e++)for(let t of Rn)S.push(e+t);for(let e of Rn)for(let t of Er)S.push(t+e);const n=an.shuffle(S);S.splice(0,S.length,...n)},Re=(n=2)=>{S.length=0,Or(),A.length=0,T.length=0,console.clear();for(let e=0;e<n;e++)A.push(0);zn.forEach(e=>{e.innerText=0}),$n.forEach(e=>{e.innerText=""}),_.enable(P),_.changeText(P,"First Card"),_.addStylePulse(P),_.disable(J),_.removeStylePulse(b),qe(menssage)},qn=()=>{if(S.length===0)throw" No Card in the deck";return S.pop()},Dr=n=>{const e=n.substring(0,n.length-1);return isNaN(e)?e==="A"?11:10:e*1},Ir=n=>{n.forEach(e=>{const t=new Image;t.src=e})},Tr=["assets/cards/2C.png","assets/cards/2D.png","assets/cards/2H.png","assets/cards/2S.png","assets/cards/3C.png","assets/cards/3D.png","assets/cards/3H.png","assets/cards/3S.png","assets/cards/4C.png","assets/cards/4D.png","assets/cards/4H.png","assets/cards/4S.png","assets/cards/5C.png","assets/cards/5D.png","assets/cards/5H.png","assets/cards/5S.png","assets/cards/6C.png","assets/cards/6D.png","assets/cards/6H.png","assets/cards/6S.png","assets/cards/7C.png","assets/cards/7D.png","assets/cards/7H.png","assets/cards/7S.png","assets/cards/8C.png","assets/cards/8D.png","assets/cards/8H.png","assets/cards/8S.png","assets/cards/9C.png","assets/cards/9D.png","assets/cards/9H.png","assets/cards/9S.png","assets/cards/10C.png","assets/cards/10D.png","assets/cards/10H.png","assets/cards/10S.png","assets/cards/AC.png","assets/cards/AD.png","assets/cards/AH.png","assets/cards/AS.png","assets/cards/JC.png","assets/cards/JD.png","assets/cards/JH.png","assets/cards/JS.png","assets/cards/KC.png","assets/cards/KD.png","assets/cards/KH.png","assets/cards/KS.png","assets/cards/QC.png","assets/cards/QD.png","assets/cards/QH.png","assets/cards/QS.png"];Ir(Tr);(()=>{const n=()=>{const c=t(),i=r();(c>=21||i>=21)&&a()},e=(c,i)=>{const l=document.createElement("img");l.src=`assets/cards/${c}.png`,l.classList.add("card"),$n[i].append(l)},t=()=>{const c=qn();e(c,0);const i=u(c,0);return s(0),i},r=()=>{const c=qn();setTimeout(()=>{e(c,A.length-1)},170);const i=u(c,A.length-1),l=T.length-1;return s(l),i},u=(c,i)=>(A[i]=A[i]+Dr(c),zn[i].innerText=A[i],A[i]),s=c=>(T[c]||(T[c]=0),T[c]++,T[c]),a=()=>{const c=A[0],i=A[A.length-1];$e(c,i),_.disable(P),_.disable(J),setTimeout(()=>{_.addStylePulse(b)},300)};P.addEventListener("click",()=>{_.enable(J),_.changeText(P,"Next Card"),_.removeStylePulse(P),n()}),J.addEventListener("click",()=>{a()}),b.addEventListener("click",()=>{Re()})})();Re();
