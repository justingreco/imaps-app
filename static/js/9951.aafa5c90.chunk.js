"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[9951],{71277:(e,t,a)=>{function l(e){return e=e||globalThis.location.hostname,i.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(r)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(m)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{XO:()=>l,pJ:()=>n});const s=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,m=/^[\w-]*\.mapsqa.arcgis.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,s,o,/^jsapps.esri.com$/,r,m]},19951:(e,t,a)=>{a.r(t),a.d(t,{fetchSymbolFromStyle:()=>h,resolveWebStyleSymbol:()=>b});var l=a(51508),n=a(71277),s=a(10064),o=a(92026),r=a(35995),m=a(70032),i=a(53283),c=a(192),u=a(1472),p=a(38048),y=a(81854);function b(e,t,a,l){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const l=p.wm.replace(/\{SymbolName\}/gi,e.name),n=(0,o.pC)(t.portal)?t.portal:m.Z.getDefault();return(0,p.EJ)(l,a).then((e=>{const t=(0,p.KV)(e.data);return(0,c.im)(t,{portal:n,url:(0,r.mN)((0,r.Yd)(l)),origin:"portal-item"})}))}(e,t,l):(0,p.n2)(e,t,l).then((n=>h((0,o.s3)(n),e.name,t,a,l))):Promise.reject(new s.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(e,t,a,b,h){const g=e.data,f=a&&(0,o.pC)(a.portal)?a.portal:m.Z.getDefault(),d={portal:f,url:(0,r.mN)(e.baseUrl),origin:"portal-item"},w=g.items.find((e=>e.name===t));if(!w){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new s.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let N=(0,i.f)((0,p.v9)(w,b),d),$=w.thumbnail?.href??null;const v=w.thumbnail&&w.thumbnail.imageData;(0,n.XO)()&&(N=(0,n.pJ)(N)??"",$=(0,n.pJ)($));const S={portal:f,url:(0,r.mN)((0,r.Yd)(N)),origin:"portal-item"};return(0,p.EJ)(N,h).then((n=>{const s="cimRef"===b?(0,p.KV)(n.data):n.data,o=(0,c.im)(s,S);if(o&&(0,l.dU)(o)){if($){const e=(0,i.f)($,d);o.thumbnail=new y.p({url:e})}else v&&(o.thumbnail=new y.p({url:`data:image/png;base64,${v}`}));e.styleUrl?o.styleOrigin=new u.Z({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new u.Z({portal:a.portal,styleName:e.styleName,name:t}))}return o}))}}}]);
//# sourceMappingURL=9951.aafa5c90.chunk.js.map