"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[2964],{12964:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>i,executeRelationshipQueryForCount:()=>l});var n=o(23084),r=o(76200),a=o(22585);function s(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;const u=(0,a.A)({...e.query,f:"json",...n,...s(t,n)});return(0,r.default)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...u}})}var d=o(49818),c=o(99086);async function i(e,t,o){t=c.default.from(t);return async function(e,t,o){const n=await u(e,t,o),r=n.data,a=r.geometryType,s=r.spatialReference,d={};for(const u of r.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:u.relatedRecords};if(null!=u.objectId)d[u.objectId]=e;else for(const t in u)u.hasOwnProperty(t)&&"relatedRecords"!==t&&(d[u[t]]=e)}return{...n,data:d}}((0,n.en)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=d.Z.fromJSON(t[e]))),o}))}async function l(e,t,o){t=c.default.from(t);return async function(e,t,o){const n=await u(e,t,o,{returnCountOnly:!0}),r=n.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...n,data:a}}((0,n.en)(e),t,{...o}).then((e=>e.data))}}}]);
//# sourceMappingURL=2964.b2bb63a7.chunk.js.map