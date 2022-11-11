"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[6553],{16553:(e,r,t)=>{t.r(r),t.d(r,{createLabelFunction:()=>h,formatField:()=>g});var a=t(10064),n=t(32718),u=t(92026),l=t(76969),i=t(6291),s=t(37270),o=t(93253),c=t(819);const p=n.Z.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},d={getAttribute:(e,r)=>e.field(r)};async function h(e,r,n){if(!e||!e.symbol)return f;const l=e.where,i=(0,o.hV)(e),s=l?await t.e(8562).then(t.bind(t,48562)):null;let h;if("arcade"===i.type){const e=await(0,c.WW)(i.expression,n,r);if((0,u.Wi)(e))return f;h={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t});if(null!=r)return r.toString()}catch(r){p.error(new a.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==(0,o.el)(i.expression)}}else h={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(t=>{const a=t.slice(1,-1),n=r.get(a);if(!n)return t;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":g(u,n)}))};if(l){let e;try{e=s.WhereClause.create(l,r)}catch(b){return p.error(new a.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:b})),f}const t=h.evaluate;h.evaluate=r=>{const n="attributes"in r?void 0:d;try{if(e.testFeature(r,n))return t(r)}catch(b){p.error(new a.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:r,error:b}))}return null}}return h}function g(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const r=+e,a="range"in t?t.range[0]:t.minValue,n="range"in t?t.range[1]:t.maxValue;if(a<=r&&r<=n)return t.name}let a=e;return"date"===r.type||"esriFieldTypeDate"===r.type?a=(0,l.p6)(a,(0,l.Ze)("short-date")):(0,s.H7)(r)&&(a=(0,i.uf)(+a)),a||""}}}]);
//# sourceMappingURL=6553.6255e911.chunk.js.map