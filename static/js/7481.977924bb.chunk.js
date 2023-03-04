"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[7481],{43244:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(92026);class i{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if((0,s.pC)(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;(0,s.pC)(t);)e&&e(t),t=this.dequeue()}}},77095:(e,t,r)=>{r.d(t,{hN:()=>w,P0:()=>S,cW:()=>b});var s=r(10064),i=r(34066),n=r(66504);var a=r(77981),o=r(92975);function u(e,t){return e?t?4:3:t?3:2}function d(e,t,r,s,i,n){const a=u(i,n),{coords:o,lengths:d}=s;if(!d)return!1;for(let u=0,h=0;u<d.length;u++,h+=a)if(!l(e,t,r,o[h],o[h+1]))return!1;return!0}function l(e,t,r,s,i){if(!e)return!1;const n=u(t,r),{coords:a,lengths:o}=e;let d=!1,l=0;for(const u of o)d=h(d,a,n,l,u,s,i),l+=u*n;return d}function h(e,t,r,s,i,n,a){let o=e,u=s;for(let d=s,l=s+i*r;d<l;d+=r){u=d+r,u===l&&(u=s);const e=t[d],i=t[d+1],h=t[u],c=t[u+1];(i<a&&c>=a||c<a&&i>=a)&&e+(a-i)/(c-i)*(h-e)<n&&(o=!o)}return o}var c=r(83406),p=r(80457),_=r(19995),f=r(31904);const g="feature-store:unsupported-query",m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},y={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},I={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},x={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function b(e,t,s,o,u){if((0,a.oU)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,c.Uy)(new p.Z,t,!1,!1);return Promise.resolve((t=>function(e,t,r,s){return l(e,t,r,s.coords[0],s.coords[1])}(e,!1,!1,t)))}if((0,a.oU)(t)&&"esriGeometryMultipoint"===s){const r=(0,c.Uy)(new p.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>d(r,!1,!1,e,o,u)))}if((0,a.YX)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,i.aV)(t,(0,f.Op)(s,o,u,e))));if((0,a.YX)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,i.lQ)(t,(0,f.Op)(s,o,u,e))));if((0,a.YX)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?n.h_:(0,n.IY)(e)}(s);return Promise.resolve((r=>e(t,(0,f.Op)(s,o,u,r))))}return Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309)).then((r=>{const i=r[m[e]].bind(null,t.spatialReference,t);return e=>i((0,f.Op)(s,o,u,e))}))}async function S(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!function(e){return null!=e&&!0===y[e]}(i))throw new s.Z(g,"Unsupported query spatial relationship",{query:e});if((0,o.JY)(n.spatialReference)&&(0,o.JY)(r)){if(!function(e){return null!=e&&!0===I[(0,a.Ji)(e)]}(n))throw new s.Z(g,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===x[e]}(t))throw new s.Z(g,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,_._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function w(e){if((0,a.YX)(e))return!0;if((0,a.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},20311:(e,t,r)=>{async function s(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:s,endTimeField:i}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&i)await t.forEach((e=>{const t=r.getAttribute(e,s),o=r.getAttribute(e,i);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=s||i;await t.forEach((t=>{const s=r.getAttribute(t,e);null==s||isNaN(s)||(n=Math.min(n,s),a=Math.max(a,s))}))}return{start:n,end:a}}function i(e,t,r){if(!t||!e)return null;const{startTimeField:s,endTimeField:i}=e;if(!s&&!i)return null;const{start:n,end:a}=t;return null===n&&null===a?null:void 0===n&&void 0===a?()=>!1:s&&i?function(e,t,r,s,i){return null!=s&&null!=i?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,r);return(null==a||a<=i)&&(null==o||o>=s)}:null!=s?t=>{const i=e.getAttribute(t,r);return null==i||i>=s}:null!=i?r=>{const s=e.getAttribute(r,t);return null==s||s<=i}:void 0}(r,s,i,n,a):function(e,t,r,s){return null!=r&&null!=s&&r===s?s=>e.getAttribute(s,t)===r:null!=r&&null!=s?i=>{const n=e.getAttribute(i,t);return n>=r&&n<=s}:null!=r?s=>e.getAttribute(s,t)>=r:null!=s?r=>e.getAttribute(r,t)<=s:void 0}(r,s||i,n,a)}r.d(t,{R:()=>s,y:()=>i})},31904:(e,t,r)=>{r.d(t,{EG:()=>x,Op:()=>b,S2:()=>F,Up:()=>S,j6:()=>w,vF:()=>f});var s=r(43404),i=r(92026),n=r(68860),a=r(79803),o=r(94446),u=r(77981),d=r(91340),l=r(92975),h=r(83406),c=r(80457),p=r(19995);const _=new s.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),f=Object.freeze({}),g=new c.Z,m=new c.Z,y=new c.Z,I={esriGeometryPoint:h.fQ,esriGeometryPolyline:h.J6,esriGeometryPolygon:h.eG,esriGeometryMultipoint:h.Iv};function x(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,i.Wi)(t))return null;const a=e.hasZ&&s,o=e.hasM&&n;if(r){const i=(0,h.Nh)(y,t,e.hasZ,e.hasM,"esriGeometryPoint",r,s,n);return(0,h.fQ)(i,a,o)}return(0,h.fQ)(t,a,o)}function b(e,t,r,s,n,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r;const d=t&&o,l=r&&u,c=(0,i.pC)(s)?"coords"in s?s:s.geometry:null;if((0,i.Wi)(c))return null;if(n){let s=(0,h.zj)(m,c,t,r,e,n,o,u);return a&&(s=(0,h.Nh)(y,s,d,l,e,a)),I[e]?.(s,d,l)??null}if(a){const s=(0,h.Nh)(y,c,t,r,e,a,o,u);return I[e]?.(s,d,l)??null}return(0,h.hY)(g,c,t,r,o,u),I[e]?.(g,d,l)??null}async function S(e,t,r){const{outFields:s,orderByFields:i,groupByFieldsForStatistics:n,outStatistics:a}=e;if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),w(e,t,r)}async function w(e,t,s){if(!e)return null;let{where:a}=e;if(e.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||t&&t===a)&&(e.where=null),!e.geometry)return e;let h=await async function(e){const{distance:t,units:s}=e,i=e.geometry;if(null==t||"vertexAttributes"in i)return i;const a=i.spatialReference,o=s?_.fromJSON(s):(0,n.qE)(a),u=a&&((0,l.sT)(a)||(0,l.sS)(a))?i:await(0,p._W)(a,l.Zn).then((()=>(0,p.iV)(i,l.Zn)));return(await async function(){return(await Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309))).geodesicBuffer}())(u.spatialReference,u,t,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;h=(0,o.aO)(h),h.spatialReference=t}if(h){await(0,p._W)(h.spatialReference,s),h=function(e,t){const r=e.spatialReference;return v(e,t)&&(0,u.YX)(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(h,s);const t=(await(0,d.aX)((0,u.im)(h)))[0];if((0,i.Wi)(t))throw f;const r="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,n=r&&v(h,s)?{densificationStep:8*r}:void 0,a=t.toJSON(),o=await(0,p.iV)(a,a.spatialReference,s,n);if(!o)throw f;o.spatialReference=s,e.geometry=o}return e}function v(e,t){if(!e)return!1;const r=e.spatialReference;return((0,u.YX)(e)||(0,u.oU)(e)||(0,u.l9)(e))&&!(0,l.fS)(r,t)&&!(0,a.Up)(r,t)}function F(e){return e&&A in e?JSON.parse(JSON.stringify(e,R)):e}const A="_geVersion",R=(e,t)=>e!==A?t:void 0},36876:(e,t,r)=>{r.d(t,{k:()=>_,p:()=>f});var s=r(43244),i=r(91505),n=(r(93169),r(92026)),a=r(31581),o=r(41414),u=r(24170),d=r(5448);const l=(0,o.Ue)();function h(e,t){return e<<16|t}function c(e){return(4294901760&e)>>>16}function p(e){return 65535&e}const _={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class f extends u.J{constructor(e,t,r){super(e,t),this.featureAdapter=_,this.events=new i.Z,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new s.Z(50),this._index=(0,a.r)(9,(e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)}))),this.mode=r}get storeStatistics(){let e=0,t=0,r=0;return this.forEach((s=>{const i=s.readGeometry();i&&(t+=i.isPoint?1:i.lengths.reduce(((e,t)=>e+t),0),r+=i.isPoint?1:i.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if((0,n.Wi)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find((e=>e.tileId===t));if((0,n.pC)(r))return r.readers;const s=new Map,i=this._searchIndex(e.bounds),a=[];for(const n of i){const e=this._storage.getInstanceId(n),t=c(e),r=p(e);s.has(t)||s.set(t,[]),s.get(t).push(r)}return s.forEach(((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(d.t.from(r,e))})),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){const e=h(t.instance,t.getIndex()),s=t.getObjectId(),i=this._objectIdToDisplayId.get(s)??this._storage.createDisplayId();t.setDisplayId(i),r.setInstanceId(i,e),this._objectIdToDisplayId.set(s,i)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),s=p(r),i=c(r),n=this._featureSetsByInstance.get(i);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),n.removeAtIndex(s),n.isEmpty&&this._featureSetsByInstance.delete(i),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),s=this._lookupFeature(r);e(s)}))}forEachUnsafe(e){this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t),s=c(r),i=p(r),n=this._getFeatureSet(s);n.setIndex(i),e(n)}))}forEachInBounds(e,t){const r=this._searchIndex(e);for(const s of r){const e=this.lookupFeatureByDisplayId(s,this._storage);t((0,n.Wg)(e))}}forEachBounds(e,t){this._rebuildIndex();for(const r of e){if(!r.readGeometry())continue;const e=r.getDisplayId();(0,o.bZ)(l,this._storage.getXMin(e),this._storage.getYMin(e),this._storage.getXMax(e),this._storage.getYMax(e)),t(l)}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((s,i)=>{e.has(s)||(t.releaseDisplayId(s),r&&r.unsetAttributeData(s),this._objectIdToDisplayId.delete(i))})),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)}))}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return(0,n.Wi)(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=c(t),s=p(t),i=this._getFeatureSet(r);return i?(i.setIndex(s),i):null}_insertFeature(e,t){const r=this._storage,s=e.getObjectId(),i=h(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let n=this._objectIdToDisplayId.get(s);n||(n=r.createDisplayId(),this._objectIdToDisplayId.set(s,n),this._spatialIndexInvalid=!0),e.setDisplayId(n),r.setInstanceId(n,i),this.setComputedAttributes(r,e,n,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}})):this._objectIdToDisplayId.forEach((t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)})),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=c(e),r=this._getFeatureSet(t);if(!r)return;const s=r.getCursor(),i=p(e);return s.setIndex(i),s}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},24170:(e,t,r)=>{r.d(t,{J:()=>d});var s=r(93169),i=r(92026),n=r(48732),a=r(819),o=r(32718);const u=r.e(6553).then(r.bind(r,16553));class d{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._storage=t,this._bitsets={computed:t.getBitset(t.createBitset())}}get storage(){return this._storage}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=(0,n.Hg)(this._schema,t);if(this._schema=t,!t||(0,i.Wi)(r)||!(0,n.uD)(r,"attributes"))return;(0,s.Z)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const a=t.attributes,o=[],u=[];for(const s in a){const e=a[s];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&(0,i.pC)(e.expression)&&e.expression.referencesScale())),this._statisticFields=u}setComputedAttributes(e,t,r,s){const i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(r)){i.set(r);for(const i of this._computedFields){const n=this._evaluateField(t,i,s);switch(i.resultType){case"numeric":e.setComputedNumericAtIndex(r,i.fieldIndex,n);break;case"string":e.setComputedStringAtIndex(r,i.fieldIndex,n)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await(0,a.Yi)(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex,{createLabelFunction:s}=await u,i=await s(e.label,r,t);return{...e,builder:i}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:s}=t;return function(e,t,r){if((0,i.Wi)(e))return null;const s=t.readArcadeFeature();try{return e.evaluate({...r,$feature:s})}catch(n){return o.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",n),null}}(s,e,{$view:{scale:r}})}}}}},37481:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(10064),i=r(32718),n=r(92026),a=r(65156),o=r(376),u=r(77095),d=r(20311),l=r(31904),h=r(21149),c=r(36876);const p=i.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:(e,t)=>e.field(t)};async function f(e,t){const i=await r.e(8562).then(r.bind(r,48562));try{const r=i.WhereClause.create(e,t);if(!r.isStandardized){const e=new s.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);p.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,_)}}catch(n){return p.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}class g{constructor(e){this._geometryBounds=(0,a.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],r=[],s=new Set(e);return this._idToVisibility.forEach(((e,i)=>{const n=!!(1&this._idToVisibility.get(i)),a=s.has(i);!n&&a?t.push(i):n&&!a&&r.push(i),this._idToVisibility.set(i,a?3:0)})),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:s,objectIds:i}=this;return h.Z.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:s,objectIds:i})}async update(e,t){this._hash=JSON.stringify(e);const r=await(0,l.j6)(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await f(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",s=await(0,u.cW)(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,o.$P)(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,d.y)(this._serviceInfo.timeInfo,e.timeExtent,c.k);else{const t=new s.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);i.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!(0,n.Wi)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,r)=>{1&t||(this._idToVisibility.set(r,1),e.push(r))})),e}}},5448:(e,t,r)=>{r.d(t,{t:()=>i});var s=r(92010);class i extends s.s{static from(e,t){return new i(e.copy(),t)}constructor(e,t){super(s.s.createInstance(),e.fullSchema()),this._currentIndex=-1,this._reader=e,this._indices=t}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new i(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,s){const i=this.copy();return i._reader=this._reader.transform(e,t,r,s),i}readAttribute(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._reader.castToText(e)}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getFieldNames(){return this._reader.getFieldNames()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}}}]);
//# sourceMappingURL=7481.977924bb.chunk.js.map