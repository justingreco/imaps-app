"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3172],{19745:(e,t,r)=>{r.d(t,{P:()=>a,a:()=>n});const s=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,o={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function n(e){const t=e?.match(s);if(!t)return null;const[,r,n,a]=t;if(!r)return null;let i=null,l=null,c=null;const{devext:u,qaext:d,www:m}=o;if(n)if(i=r,a)switch(a.toLowerCase()){case"devext":({customBaseUrl:l,portalHostname:c}=u);break;case"qa":({customBaseUrl:l,portalHostname:c}=d);break;default:return null}else({customBaseUrl:l,portalHostname:c}=m);else switch(r.toLowerCase()){case"devext":({customBaseUrl:l,portalHostname:c}=u);break;case"qaext":({customBaseUrl:l,portalHostname:c}=d);break;case"www":({customBaseUrl:l,portalHostname:c}=m);break;default:return null}return{customBaseUrl:l,isPortal:!1,portalHostname:c,urlKey:i}}function a(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}},3172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(68773),o=r(40330),n=r(20102),a=r(80442),i=r(22974),l=r(70586),c=r(95330),u=r(17452),d=r(19745),m=r(71058),p=r(85958);async function h(e,t){const i=(0,u.HK)(e),d=(0,u.jc)(e);d||i||(e=(0,u.Fv)(e));const g={url:e,requestOptions:{...(0,l.Wg)(t)}};let b=(0,u.oh)(e);if(b){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=C("request:interceptor",e,t)}if((s instanceof Error||s instanceof n.Z)&&(r=C("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}(b,g);if(null!=e)return{data:e,getHeader:v,requestOptions:g.requestOptions,url:g.url};b.after||b.error||(b=null)}if(e=g.url,"image"===(t=g.requestOptions).responseType){if((0,a.Z)("host-webworker")||(0,a.Z)("host-node"))throw C("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),g)}else if(i)throw C("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),g);if("head"===t.method){if(t.body)throw C("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),g);if(i||d)throw C("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),g)}if(await async function(){(0,a.Z)("host-webworker")?f||(f=await r.e(9884).then(r.bind(r,29884))):h._abortableFetch||(h._abortableFetch=globalThis.fetch.bind(globalThis))}(),f)return f.execute(e,t);const q=new AbortController;(0,c.fu)(t,(()=>q.abort()));const k={controller:q,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:b,params:g,redoRequest:!1,useIdentity:w.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},T=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,a=r.body;let i=null,l=null;if(y&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(l=a),e.fetchOptions={cache:r.cacheBust&&!h._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:w.priority,redirect:"follow",signal:n},(i||l)&&(e.fetchOptions.body=i||l),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.Z.apiKey&&(0,m.r)(t)&&(r.query||(r.query={}),r.query.token=s.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!x(t)&&!(0,c.Hc)(n)){let s;"immediate"===r.authMode?(await O(),s=await o.id.getCredential(t,{signal:n}),e.credential=s):"no-prompt"===r.authMode?(await O(),s=await o.id.getCredential(t,{prompt:!1,signal:n}).catch((()=>{})),e.credential=s):o.id&&(s=o.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await E(e)}while(!await S(e,t,r))}catch(r){const s=C("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(s),s}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,u.kl)(n)){const e=(0,u.P$)(n,!0);e&&w.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&(0,p.Hu)(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&o.id){const e=o.id.findServerInfo(a.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,a.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getHeader:t?e=>t?.headers.get(e):v,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(k);return b?.after?.(T),T}let f;const w=s.Z.request,y="FormData"in globalThis,g=[499,498,403,401],b=["COM_0056","COM_0057","SB_0008"],q=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],v=()=>null,k=Symbol();function T(e){const t=(0,u.P$)(e);return!t||t.endsWith(".arcgis.com")||h._corsServers.includes(t)||(0,u.kl)(t)}function C(e,t,r,s){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:v,ssl:!1};if(t instanceof n.Z)return t.details?(t.details=(0,i.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(e=>s.headers.get(e)),r=s&&s.status,n=t.message;n&&(o=n),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=k in t?t[k]:t}return(0,c.D_)(t)?(0,c.zE)():new n.Z(e,o,a)}async function O(){o.id||await Promise.all([r.e(6261),r.e(1400),r.e(1761)]).then(r.bind(r,55142))}function x(e){return q.some((t=>t.test(e)))}async function E(e){let t=e.params.url;const r=e.params.requestOptions,s=e.fetchOptions??{},n=(0,u.jc)(t)||(0,u.HK)(t),i=r.responseType||"json",l=n?0:null!=r.timeout?r.timeout:w.timeout;let m=!1;if(!n){e.useSSL&&(t=(0,u.hO)(t)),r.cacheBust&&"default"===s.cache&&(t=(0,u.ZN)(t,"request.preventCache",Date.now()));let n={...r.query};e.credentialToken&&(n.token=e.credentialToken);let i=(0,u.B7)(n);(0,a.Z)("esri-url-encodes-apostrophe")&&(i=i.replace(/'/g,"%27"));const l=t.length+1+i.length;let c;m="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>w.maxUrlLength;const h=r.useProxy||!!(0,u.ed)(t);if(h){const e=(0,u.b7)(t);c=e.path,!m&&c.length+1+l>w.maxUrlLength&&(m=!0),e.query&&(n={...e.query,...n})}if("HEAD"===s.method&&(m||h)){if(m){if(l>w.maxUrlLength)throw C("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw C("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw C("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(m?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,u.fl)(t,n):(s.body=(0,u.B7)(n),s.headers||(s.headers={}),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,u.fl)(t,n),h&&(e.useProxy=!0,t=`${c}?${t}`),n.token&&y&&s.body instanceof FormData&&!(0,d.P)(t)&&s.body.set("token",n.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,u.D6)(t,(0,u.TI)()))if((0,u.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include",(0,p.jH)(t)&&await(0,p.jz)(m?(0,u.fl)(t,n):t))}let f,g,b=0,q=!1;l>0&&(b=setTimeout((()=>{q=!0,e.controller.abort()}),l));try{if("native-request-init"===r.responseType)g=s,g.url=t;else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||m||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!n&&!e.useProxy&&w.proxyUrl&&!T(t)){if(f=await h._abortableFetch(t,s),e.useProxy||function(e){const t=(0,u.P$)(e);t&&!h._corsServers.includes(t)&&h._corsServers.push(t)}(t),"native"===r.responseType)g=f;else if("HEAD"!==s.method)if(f.ok){switch(i){case"array-buffer":g=await f.arrayBuffer();break;case"blob":case"image":g=await f.blob();break;default:g=await f.text()}if(b&&(clearTimeout(b),b=0),"json"===i||"xml"===i||"document"===i)if(g)switch(i){case"json":g=JSON.parse(g);break;case"xml":g=L(g,"application/xml");break;case"document":g=L(g,"text/html")}else g=null;if(g){if("array-buffer"===i||"blob"===i){const e=f.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&g["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(g).json();e.error&&(g=e)}catch{}}"image"===i&&g instanceof Blob&&(g=await P(URL.createObjectURL(g),e,!0))}}else g=await f.text()}else g=await P(t,e)}catch(s){if("AbortError"===s.name){if(q)throw new Error("Timeout exceeded");throw(0,c.zE)("Request canceled")}if(!(!f&&s instanceof TypeError&&w.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||T(t))throw s;e.redoRequest=!0,(0,u.tD)({proxyUrl:w.proxyUrl,urlPrefix:(0,u.P$)(t)??""})}finally{b&&clearTimeout(b)}return[f,g]}function L(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function S(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let n,a;if(!t.ok)throw n=new Error(`Unable to load ${t.url} status: ${t.status}`),n[k]=r,n;r&&(r.error?n=r.error:"error"===r.status&&Array.isArray(r.messages)&&(n={...r},n[k]=r,n.details=r.messages));let i,l=null;n&&(a=Number(n.code),l=n.hasOwnProperty("subcode")?Number(n.subcode):null,i=n.messageCode,i=i&&i.toUpperCase());const c=s.authMode;if(403===a&&(4===l||n.message&&n.message.toLowerCase().includes("ssl")&&!n.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&g.includes(a)&&!x(e.params.url)&&(403!==a||i&&!b.includes(i)&&(null==l||2===l&&e.credentialToken))){await O();try{const t=await o.id.getCredential(e.params.url,{error:C("request:server",n,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;n=t}}if(n)throw n;return!0}function P(e,t,r=!1){const s=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.fetchPriority=w.priority,o.src=e,(0,p.fY)(o,e,r,s)}h._abortableFetch=null,h._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},71058:(e,t,r)=>{r.d(t,{r:()=>n});var s=r(17452);const o=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function n(e){const t=(0,s.P$)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!o.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},85958:(e,t,r)=>{r.d(t,{Hu:()=>u,fY:()=>l,jH:()=>d,jz:()=>m});var s=r(68773),o=r(80442),n=r(70586),a=r(95330),i=r(17452);function l(e,t,r=!1,s){return new Promise(((i,l)=>{if((0,a.Hc)(s))return void l(c());let u=()=>{p(),l(new Error(`Unable to load ${t}`))},d=()=>{const t=e;p(),i(t)},m=()=>{if(!e)return;const t=e;p(),t.src="",l(c())};const p=()=>{(0,o.Z)("esri-image-decode")||(e.removeEventListener("error",u),e.removeEventListener("load",d)),u=null,d=null,e=null,(0,n.pC)(s)&&s.removeEventListener("abort",m),m=null,r&&URL.revokeObjectURL(t)};(0,n.pC)(s)&&s.addEventListener("abort",m),(0,o.Z)("esri-image-decode")?e.decode().then(d,u):(e.addEventListener("error",u),e.addEventListener("load",d))}))}function c(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}function u(e){s.Z.request.crossOriginNoCorsDomains||(s.Z.request.crossOriginNoCorsDomains={});const t=s.Z.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,i.P$)(r)??""]=0:(t[(0,i.P$)("http://"+r)??""]=0,t[(0,i.P$)("https://"+r)??""]=0)}function d(e){const t=s.Z.request.crossOriginNoCorsDomains;if(t){let r=(0,i.P$)(e);if(r)return r=r.toLowerCase(),!(0,i.D6)(r,(0,i.TI)())&&t[r]<Date.now()-36e5}return!1}async function m(e){const t=s.Z.request.crossOriginNoCorsDomains,r=(0,i.P$)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const o=(0,i.mN)(e);e=o.path,"json"===o.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}}}]);