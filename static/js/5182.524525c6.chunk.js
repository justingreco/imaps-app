"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5182],{75182:(t,e,n)=>{n.r(e),n.d(e,{executeForTopIds:()=>s});var r=n(23084),o=n(88031),i=n(54307);async function s(t,e,n){const s=(0,r.en)(t);return(await(0,o.w7)(s,i.Z.from(e),{...n})).data.objectIds}},88031:(t,e,n)=>{n.d(e,{IJ:()=>p,m5:()=>m,vB:()=>F,w7:()=>c});var r=n(76200),o=n(92026),i=n(35995),s=n(77981),u=n(91340),l=n(22585),d=n(68620);const y="Layer does not support extent calculation.";function a(t,e){const n=t.geometry,r=t.toJSON(),i=r;if((0,o.pC)(n)&&(i.geometry=JSON.stringify(n),i.geometryType=(0,s.Ji)(n),i.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),r.topFilter?.groupByFields&&(i.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(i.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?i.outFields="*":i.outFields=r.outFields.join(","):delete i.outFields,r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):n&&r.returnGeometry&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(i.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return i}async function p(t,e,n,r){const o=await f(t,e,"json",r);return(0,d.p)(e,n,o.data),o}async function c(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return(0,o.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const y="string"==typeof t?(0,i.mN)(t):t,p=e.geometry?[e.geometry]:[];return s.responseType="pbf"===n?"array-buffer":"json",(0,u.aX)(p,null,s).then((t=>{const u=t&&t[0];(0,o.pC)(u)&&((e=e.clone()).geometry=u);const p=(0,l.A)({...y.query,f:n,...d,...a(e,d)});return(0,r.default)((0,i.v_)(y.path,"queryTopFeatures"),{...s,query:{...p,...s.query}})}))}}}]);
//# sourceMappingURL=5182.524525c6.chunk.js.map