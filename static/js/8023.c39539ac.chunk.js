"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8023],{28023:(e,t,a)=>{a.r(t),a.d(t,{execute:()=>i});var s=a(10064),r=a(92026);let n;function i(e,t){let a=t.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json",t.responseType=a;const i=(0,r.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:i}).then((async r=>{let o,l,u,c,p;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==a&&"text"!==a&&"blob"!==a||(o=new Blob([r.data]),"json"!==a&&"text"!==a||(n||(n=new FileReaderSync),c=n.readAsText(o),"json"!==a)))){try{l=JSON.parse(c||null)}catch(b){const a={...b,url:e,requestOptions:t};throw new s.Z("request:server",b.message,a)}if(l.error){const a={...l.error,url:e,requestOptions:t};throw new s.Z("request:server",l.error.message,a)}}}else"native"===a&&(r.data.signal=i,u=await fetch(r.data.url,r.data));switch(a){case"blob":p=o;break;case"json":p=l;break;case"native":p=u;break;case"text":p=c;break;default:p=r.data}return{data:p,requestOptions:t,ssl:r.ssl,url:e}}))}}}]);
//# sourceMappingURL=8023.c39539ac.chunk.js.map