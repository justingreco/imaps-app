"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[7387],{67387:(e,r,t)=>{t.r(r),t.d(r,{getGeometryServiceURL:()=>c,projectGeometry:()=>g});var n=t(42265),i=t(10064),o=t(70032),l=t(45362),a=t(81943);async function c(){let e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if(n.Z.geometryServiceUrl)return n.Z.geometryServiceUrl;if(!r)throw new i.Z("internal:geometry-service-url-not-configured");e="portal"in r?r.portal||o.Z.getDefault():r,await e.load({signal:t});const l=e.helperServices?.geometry?.url;if(!l)throw new i.Z("internal:geometry-service-url-not-configured");return l}async function g(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3?arguments[3]:void 0;const o=await c(t,n),g=new a.Z;g.geometries=[e],g.outSpatialReference=r;const s=await(0,l.i)(o,g,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new i.Z("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=7387.95d021db.chunk.js.map