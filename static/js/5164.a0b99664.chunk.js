"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5164],{85164:(e,a,t)=>{t.r(a),t.d(a,{createSymbolSchema:()=>o});var r=t(80613),l=t(54815);function s(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function n(e){return(0,l.hF)(e)}function o(e,a){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return i(e,a,t);case"simple-marker":case"picture-marker":return m(e,a,t);case"simple-line":return h(e,a,t);case"text":return u(e,a,t);case"label":return c(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function c(e,a,t){const s=e.toJSON(),o=(0,l.jj)(r.LW.LABEL,{...a,placement:s.labelPlacement});return{materialKey:t?n(o):o,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}function i(e,a,t){const o=(0,l.jj)(r.LW.FILL,a),c=t?n(o):o,i=e.clone(),h=i.outline,m=(0,l.jy)(a.symbologyType);m||(i.outline=null);const u={materialKey:c,hash:i.hash(),...s(i)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,l.jj)(r.LW.LINE,{...a,isOutline:!0}),o={materialKey:t?n(e):e,hash:h.hash(),...s(h)};y.push(o)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,a)=>a.hash+e),"")}}function h(e,a,t){const o=(0,l.jy)(a.symbologyType)?r.mD.DEFAULT:a.symbologyType,c=(0,l.jj)(r.LW.LINE,{...a,symbologyType:o}),i=t?n(c):c,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...s(h)}),m){const e=(0,l.jj)(r.LW.MARKER,a),o=t?n(e):e;m.color=m.color??h.color,u.push({materialKey:o,hash:m.hash(),lineWidth:h.width,...s(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,a)=>a.hash+e),"")}}function m(e,a,t){const o=(0,l.jj)(r.LW.MARKER,a),c=t?n(o):o,i=s(e);return{materialKey:c,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}function u(e,a,t){const o=(0,l.jj)(r.LW.TEXT,a),c=t?n(o):o,i=s(e);return{materialKey:c,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}}}]);
//# sourceMappingURL=5164.a0b99664.chunk.js.map