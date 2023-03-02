"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[2536],{92536:(e,t,i)=>{i.d(t,{y:()=>x,r:()=>d});var s=i(92026),a=i(4954),n=i(94446),r=i(58971),l=i(92975),o=i(33392),u=i(71486);class c{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=t;const s=e.outFields;if(s&&!s.includes("*")){this.outFields=s;let e=0;for(const t of s){const s=(0,o.hr)(t),a=this.fieldsIndex.get(s),n=a?null:(0,o.Jc)(s,i),r=a?a.name:(0,o.nu)(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:r,clause:n})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const s=i?i.name:t;let a=null;return this._fieldDataCache.has(s)?a=this._fieldDataCache.get(s)?.clause:i||(a=(0,o.Jc)(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:a})),i?this.featureAdapter.getAttribute(e,s):a?.calculateValue(e,this.featureAdapter)}getDataValue(e,t){const i=t.normalizationType,s=t.normalizationTotal;let a=t.field&&this.getFieldValue(e,t.field,this.fieldsIndex.get(t.field));if(t.field2&&(a=`${(0,u.wk)(a)}${t.fieldDelimiter}${(0,u.wk)(this.getFieldValue(e,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(a=`${a}${t.fieldDelimiter}${(0,u.wk)(this.getFieldValue(e,t.field3,this.fieldsIndex.get(t.field3)))}`)),i&&Number.isFinite(a)){const n="field"===i&&t.normalizationField?this.getFieldValue(e,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;a=(0,u.fk)(a,i,n,s)}return a}getExpressionValue(e,t,i,s){const a={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},n=s.createExecContext(a,i);return s.executeFunction(t,n)}getExpressionValues(e,t,i,s){const a={fields:this.fieldsIndex.fields};return e.map((e=>{const n={attributes:this.featureAdapter.getAttributes(e),layer:a},r=s.createExecContext(n,i);return s.executeFunction(t,r)}))}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,o.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testFeature(e,this.featureAdapter)??!1}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:(0,o.Jc)(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testSet(e,this.featureAdapter)??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const i={};for(const s of t){const{alias:t,clause:a}=this._fieldDataCache.get(s);i[t]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return i}_processAttributesForDistinctValues(e){if((0,s.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const s of t){const{alias:t}=this._fieldDataCache.get(s);i.push(e[t])}else for(const s in e)i.push(e[s]);const a=`${(t||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++n),n>1?null:e}}var d,h,f=i(19995),m=i(34311),g=i(31904),p=i(37270),y=i(819);class x{constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new c(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:s}=this.query,a=t?.length;if(!a)return 1;const n=new Map,r=new Map,l=new Set;for(const o of s){const{statisticType:s}=o,a="exceedslimit"!==s?o.onStatisticField:void 0;if(!r.has(a)){const i=[];for(const s of t){const t=this._getAttributeValues(e,s,n);i.push(t)}r.set(a,this._calculateUniqueValues(i,e.returnDistinctValues))}const u=r.get(a);for(const t in u){const{data:s,items:a}=u[t],n=s.join(",");i&&!e.validateItems(a,i)||l.add(n)}}return l.size}async createQueryResponse(){let e;if(e=this.query.outStatistics?this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;(0,l.JY)(this.query.outSR)&&!(0,l.fS)(t.spatialReference,this.query.outSR)?e.queryGeometry=(0,g.S2)({spatialReference:this.query.outSR,...(0,f.iV)(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=(0,g.S2)({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const i=this.featureAdapter,a=_(this.hasZ,this.hasM),{point:n,mode:r}=e,l="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,h=this._getPointCreator(r,this.spatialReference,t),f=new I(null,0),g=new I(null,0),p={x:0,y:0,z:0};for(const y of this.items){const t=i.getGeometry(y);if((0,s.Wi)(t))continue;const{coords:r,lengths:x}=t;if(f.coords=r,g.coords=r,e.types&d.EDGE){let e=0;for(let t=0;t<x.length;t++){const s=x[t];for(let t=0;t<s;t++,e+=a){const r=f;if(r.coordsIndex=e,t!==s-1){const t=g;t.coordsIndex=e+a;const s=p;F(p,n,r,t);const c=(n.x-s.x)/l,d=(n.y-s.y)/o,f=c*c+d*d;f<=1&&u.candidates.push((0,m.p)(i.getObjectId(y),h(s),Math.sqrt(f),h(r),h(t)))}}}}if(e.types&d.VERTEX){const e=c?r.length-a:r.length;for(let t=0;t<e;t+=a){const e=f;e.coordsIndex=t;const s=(n.x-e.x)/l,a=(n.y-e.y)/o,r=s*s+a*a;r<=1&&u.candidates.push((0,m.u)(i.getObjectId(y),h(e),Math.sqrt(r)))}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,i){const a=(0,s.pC)(i)&&!(0,l.fS)(t,i)?e=>(0,f.iV)(e,t,i):e=>e,{hasZ:n}=this;return"3d"===e?n?e=>{let{x:t,y:i,z:s}=e;return a({x:t,y:i,z:s})}:e=>{let{x:t,y:i}=e;return a({x:t,y:i,z:0})}:e=>{let{x:t,y:i}=e;return a({x:t,y:i})}}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,minValue:r,maxValue:l,scale:o}=e,c=this.fieldsIndex.isDateField(t),d=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:o}),h=(0,u.S5)({normalizationType:a,normalizationField:s,minValue:r,maxValue:l}),f=this.fieldsIndex.get(t),m={value:.5,fieldType:f?.type},g=(0,p.qN)(f)?(0,u.H0)({values:d,supportsNullCount:h,percentileParams:m}):(0,u.i5)({values:d,minValue:r,maxValue:l,useSampleStdDev:!a,supportsNullCount:h,percentileParams:m});return(0,u.F_)(g,c)}async createUniqueValuesResponse(e){const{field:t,valueExpression:i,domains:s,returnAllCodedValues:a,scale:n}=e,r=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:i,scale:n}),l=(0,u.eT)(r);return(0,u.Qm)(l,s,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numClasses:d,scale:h}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:h}),m=(0,u.G2)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numClasses:d});return(0,u.DL)(m,r)}async createHistogramResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numBins:d,scale:h}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:n,scale:h});return(0,u.oF)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:l,minValue:o,maxValue:c,numBins:d})}_sortFeatures(e,t,i){if(e.length>1&&t&&t.length)for(const s of t.reverse()){const t=s.split(" "),a=t[0],n=this.fieldsIndex.get(a),r=!!t[1]&&"desc"===t[1].toLowerCase(),l=(0,u.Lq)(n?.type,r);e.sort(((e,t)=>{const s=i(e,a,n),r=i(t,a,n);return l(s,r)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:a,objectIdField:n,spatialReference:l}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:d,resultOffset:h,returnZ:f,returnM:m}=e,p=null!=d&&t.length>(h||0)+d,y=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:p,features:this._createFeatures(e,t),fields:y,geometryType:i,hasM:s&&m,hasZ:a&&f,objectIdFieldName:n,spatialReference:(0,g.S2)(u||l),transform:c&&(0,r.vY)(c)||null}}_createFeatures(e,t){const i=new c(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:n,quantizationParameters:l,returnGeometry:o,returnCentroid:u,maxAllowableOffset:d,resultOffset:h,resultRecordCount:f,returnZ:m=!1,returnM:p=!1}=e,y=a&&m,x=s&&p;let F=[],_=0;const I=[...t];if(this._sortFeatures(I,n,((e,t,s)=>i.getFieldValue(e,t,s))),o||u){const e=(0,r.vY)(l)??void 0;if(o&&!u)for(const t of I)F[_++]={attributes:i.getAttributes(t),geometry:(0,g.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),d,e,y,x)};else if(!o&&u)for(const t of I)F[_++]={attributes:i.getAttributes(t),centroid:(0,g.EG)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of I)F[_++]={attributes:i.getAttributes(t),centroid:(0,g.EG)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,g.Op)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),d,e,y,x)}}else for(const r of I){const e=i.getAttributes(r);e&&(F[_++]={attributes:e})}const S=h||0;if(null!=f){const e=S+f;F=F.slice(S,Math.min(F.length,e))}return F}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const s of e.outStatistics??[])if("exceedslimit"===s.statisticType){i=null!=s.maxPointCount?s.maxPointCount:Number.POSITIVE_INFINITY,a=null!=s.maxRecordCount?s.maxRecordCount:Number.POSITIVE_INFINITY,n=null!=s.maxVertexCount?s.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>a)t=!0;else{const e=_(this.hasZ,this.hasM),i=this.featureAdapter;t=this.items.reduce(((e,t)=>{const a=i.getGeometry(t);return e+((0,s.pC)(a)&&a.coords.length||0)}),0)/e>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,a=new Map,n=new Map,r=new Map,l=new c(e,this.featureAdapter,this.fieldsIndex),o=e.outStatistics,{groupByFieldsForStatistics:u,having:d,orderByFields:h}=e,f=u&&u.length,m=!!f,g=m?u[0]:null,p=m&&!this.fieldsIndex.get(g);for(const c of o??[]){const{outStatisticFieldName:e,statisticType:o}=c,h=c,y="exceedslimit"!==o?c.onStatisticField:void 0,x="percentile_disc"===o||"percentile_cont"===o,F="EnvelopeAggregate"===o||"CentroidAggregate"===o||"ConvexHullAggregate"===o,_=m&&1===f&&(y===g||p)&&"count"===o;if(m){if(!n.has(y)){const e=[];for(const t of u){const i=this._getAttributeValues(l,t,s);e.push(i)}n.set(y,this._calculateUniqueValues(e,!F&&l.returnDistinctValues))}const t=n.get(y);for(const i in t){const{count:a,data:n,items:o,itemPositions:c}=t[i],f=n.join(",");if(!d||l.validateItems(o,d)){const t=r.get(f)||{attributes:{}};if(F){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(h,o);t.aggregateGeometries[i]=e}else{let i=null;if(_)i=a;else{const e=this._getAttributeValues(l,y,s),t=c.map((t=>e[t]));i=x&&"statisticParameters"in h?this._getPercentileValue(h,t):this._getStatisticValue(h,t,null,l.returnDistinctValues)}t.attributes[e]=i}let i=0;u.forEach(((e,s)=>t.attributes[this.fieldsIndex.get(e)?e:"EXPR_"+ ++i]=n[s])),r.set(f,t)}}}else if(F){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(h,this.items);t.aggregateGeometries[i]=e}else{const i=this._getAttributeValues(l,y,s);t.attributes[e]=x&&"statisticParameters"in h?this._getPercentileValue(h,i):this._getStatisticValue(h,i,a,l.returnDistinctValues)}i.push({name:e,alias:e,type:"esriFieldTypeDouble"})}const y=m?Array.from(r.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:i,features:y}}async _getAggregateGeometry(e,t){const s=await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309)),{statisticType:r,outStatisticFieldName:l}=e,{featureAdapter:o,spatialReference:u,geometryType:c,hasZ:d,hasM:h}=this,f=t.map((e=>(0,g.Op)(c,d,h,o.getGeometry(e)))),m=s.convexHull(u,f,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===r){const e=m?(0,n._w)(m):(0,n.aO)(s.union(u,f));p.aggregateGeometries={...e,spatialReference:u},p.outStatisticFieldName=l||"extent"}else if("CentroidAggregate"===r){const e=m?(0,a.tO)(m):(0,a.$G)((0,n.aO)(s.union(u,f)));p.aggregateGeometries={x:e[0],y:e[1],spatialReference:u},p.outStatisticFieldName=l||"centroid"}else"ConvexHullAggregate"===r&&(p.aggregateGeometries=m,p.outStatisticFieldName=l||"convexHull");return p}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:n}=e;let r=null;return r=i?.has(a)?i.get(a):(0,p.qN)(this.fieldsIndex.get(a))?(0,u.H0)({values:t,returnDistinct:s}):(0,u.i5)({values:s?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,r),r["var"===n?"variance":n]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:n,orderBy:r}=s,l=this.fieldsIndex.get(i);return(0,u.XL)(t,{value:n,orderBy:r,fieldType:l?.type,isDiscrete:"percentile_disc"===a})}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),a=this.items.map((i=>e.getFieldValue(i,t,s)));return i.set(t,a),a}_getAttributeDataValues(e,t){return this.items.map((i=>e.getDataValue(i,{field:t.field,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:t.normalizationField,normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,i){const{arcadeUtils:s}=await(0,y.LC)(),a=s.createFunction(t),n=i&&s.getViewInfo(i);return e.getExpressionValues(this.items,a,n,s)}_calculateUniqueValues(e,t){const i={},s=this.items,a=s.length;for(let n=0;n<a;n++){const a=s[n],r=[];for(const t of e)r.push(t[n]);const l=r.join(",");null==i[l]?i[l]={count:1,data:r,items:[a],itemPositions:[n]}:(t||i[l].count++,i[l].items.push(a),i[l].itemPositions.push(n))}return i}async _getDataValues(e){const t=new c(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:s,normalizationField:a,normalizationType:n,normalizationTotal:r,scale:l}=e,o=i?{viewingMode:"map",scale:l,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(t,i,o):this._getAttributeDataValues(t,{field:s,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:a,normalizationType:n,normalizationTotal:r})}}function F(e,t,i,s){const a=s.x-i.x,n=s.y-i.y,r=a*a+n*n,l=(t.x-i.x)*a+(t.y-i.y)*n,o=Math.min(1,Math.max(0,l/r));e.x=i.x+a*o,e.y=i.y+n*o}function _(e,t){return e?t?4:3:t?3:2}(h=d||(d={}))[h.NONE=0]="NONE",h[h.EDGE=1]="EDGE",h[h.VERTEX=2]="VERTEX";class I{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}},34311:(e,t,i)=>{function s(e,t,i){return{objectId:e,target:t,distance:i,type:"vertex"}}function a(e,t,i,s,a){let n=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return{objectId:e,target:t,distance:i,type:"edge",start:s,end:a,draped:n}}i.d(t,{p:()=>a,u:()=>s})},33392:(e,t,i)=>{i.d(t,{nu:()=>g,hr:()=>m,Jc:()=>h,G3:()=>p,Of:()=>f,z4:()=>d,hO:()=>c});var s=i(10064),a=i(59026),n=i(48562);const r=new class{constructor(e,t){this._cache=new a.Z(e),this._invalidCache=new a.Z(t)}get(e,t){const i=`${t.uid}:${e}`,s=this._cache.get(i);if(s)return s;if(void 0!==this._invalidCache.get(i))return null;try{const s=n.WhereClause.create(e,t);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}}(50,500),l="feature-store:unsupported-query",o=" as ",u=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function c(e,t){if(!t)return!0;const i=r.get(t,e);if(!i)throw new s.Z(l,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new s.Z(l,"where clause is not standard",{where:t});return f(e,i.fieldNames,"where clause contains missing fields"),!0}function d(e,t,i){if(!t)return!0;const a=r.get(t,e);if(!a)throw new s.Z(l,"invalid SQL expression",{having:t});if(!a.isAggregate)throw new s.Z(l,"having does not contain a valid aggregate function",{having:t});const n=a.fieldNames;if(f(e,n,"having contains missing fields"),!a.getExpressions().every((t=>{const{aggregateType:s,field:a}=t,n=e.get(a)?.name;return i.some((t=>{const{onStatisticField:i,statisticType:a}=t,r=e.get(i)?.name;return r===n&&a.toLowerCase().trim()===s}))})))throw new s.Z(l,"expressions in having should also exist in outStatistics",{having:t});return!0}function h(e,t){return e?r.get(e,t):null}function f(e,t,i){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const n=[];for(const r of t)if("*"!==r&&!e.has(r))if(a){const t=m(r);try{const i=h(t,e);if(!i)throw new s.Z(l,"invalid SQL expression",{where:t});if(!i.isStandardized)throw new s.Z(l,"expression is not standard",{clause:i});f(e,i.fieldNames,"expression contains missing fields")}catch(d){const t=d&&d.details;if(t&&(t.clause||t.where))throw d;t&&t.missingFields?n.push(...t.missingFields):n.push(r)}}else n.push(r);if(n.length)throw new s.Z(l,i,{missingFields:n})}function m(e){return e.split(o)[0]}function g(e){return e.split(o)[1]}function p(e,t){const i=t.get(e);return!!i&&!u.has(i.type)}},31904:(e,t,i)=>{i.d(t,{EG:()=>_,Op:()=>I,S2:()=>v,Up:()=>S,j6:()=>V,vF:()=>g});var s=i(43404),a=i(92026),n=i(68860),r=i(79803),l=i(94446),o=i(77981),u=i(91340),c=i(92975),d=i(83406),h=i(80457),f=i(19995);const m=new s.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({}),p=new h.Z,y=new h.Z,x=new h.Z,F={esriGeometryPoint:d.fQ,esriGeometryPolyline:d.J6,esriGeometryPolygon:d.eG,esriGeometryMultipoint:d.Iv};function _(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,a.Wi)(t))return null;const r=e.hasZ&&s,l=e.hasM&&n;if(i){const a=(0,d.Nh)(x,t,e.hasZ,e.hasM,"esriGeometryPoint",i,s,n);return(0,d.fQ)(a,r,l)}return(0,d.fQ)(t,r,l)}function I(e,t,i,s,n,r){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:i;const u=t&&l,c=i&&o,h=(0,a.pC)(s)?"coords"in s?s:s.geometry:null;if((0,a.Wi)(h))return null;if(n){let s=(0,d.zj)(y,h,t,i,e,n,l,o);return r&&(s=(0,d.Nh)(x,s,u,c,e,r)),F[e]?.(s,u,c)??null}if(r){const s=(0,d.Nh)(x,h,t,i,e,r,l,o);return F[e]?.(s,u,c)??null}return(0,d.hY)(p,h,t,i,l,o),F[e]?.(p,u,c)??null}async function S(e,t,i){const{outFields:s,orderByFields:a,groupByFieldsForStatistics:n,outStatistics:r}=e;if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(a)for(let l=0;l<a.length;l++)a[l]=a[l].trim();if(n)for(let l=0;l<n.length;l++)n[l]=n[l].trim();if(r)for(let l=0;l<r.length;l++)r[l].onStatisticField&&(r[l].onStatisticField=r[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),V(e,t,i)}async function V(e,t,s){if(!e)return null;let{where:r}=e;if(e.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let d=await async function(e){const{distance:t,units:s}=e,a=e.geometry;if(null==t||"vertexAttributes"in a)return a;const r=a.spatialReference,l=s?m.fromJSON(s):(0,n.qE)(r),o=r&&((0,c.sT)(r)||(0,c.sS)(r))?a:await(0,f._W)(r,c.Zn).then((()=>(0,f.iV)(a,c.Zn)));return(await async function(){return(await Promise.all([i.e(9058),i.e(3645)]).then(i.bind(i,50309))).geodesicBuffer}())(o.spatialReference,o,t,l)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;d=(0,l.aO)(d),d.spatialReference=t}if(d){await(0,f._W)(d.spatialReference,s),d=function(e,t){const i=e.spatialReference;return w(e,t)&&(0,o.YX)(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(d,s);const t=(await(0,u.aX)((0,o.im)(d)))[0];if((0,a.Wi)(t))throw g;const i="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,n=i&&w(d,s)?{densificationStep:8*i}:void 0,r=t.toJSON(),l=await(0,f.iV)(r,r.spatialReference,s,n);if(!l)throw g;l.spatialReference=s,e.geometry=l}return e}function w(e,t){if(!e)return!1;const i=e.spatialReference;return((0,o.YX)(e)||(0,o.oU)(e)||(0,o.l9)(e))&&!(0,c.fS)(i,t)&&!(0,r.Up)(i,t)}function v(e){return e&&T in e?JSON.parse(JSON.stringify(e,b)):e}const T="_geVersion",b=(e,t)=>e!==T?t:void 0}}]);
//# sourceMappingURL=2536.228dd2ad.chunk.js.map