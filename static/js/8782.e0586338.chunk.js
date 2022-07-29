"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8782],{25820:(e,t,i)=>{i.d(t,{S:()=>n,X:()=>s});const s=1;function n(e,t){let i=0;for(const s of t){const t=s.attributes?.[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},48782:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var s=i(10064),n=i(92026),r=i(77981),a=i(92975),o=i(83406),u=i(25820),l=i(68928),d=i(19995),p=i(14e3),c=i(63543),y=i(68808),f=i(52410),h=i(85249),m=i(37270);const g=a.Zn,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function _(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class E{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,o=null!=e.hasZ?e.hasZ:n.hasZ,y=!e.spatialReference&&!n.spatialReference,F=y?g:e.spatialReference||n.spatialReference,_=y?I:null,E=e.geometryType||n.geometryType,T=!E;let v=e.objectIdField||n.objectIdField,q=e.timeInfo;if(!T&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&v!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),v=n.objectIdField),v&&!n.objectIdField){let e=null;r.some((t=>t.name===v&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const u of r){if(null==u.name&&(u.name=u.alias),null==u.alias&&(u.alias=u.name),!u.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:u});if(u.name===v&&(u.type="esriFieldTypeOID"),!h.v.jsonValues.includes(u.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${u.name}"`,{field:u})}const j={};for(const s of r)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,m.os)(s);void 0!==e&&(j[s.name]=e)}if(this._fieldsIndex=new f.Z(r),this._createDefaultAttributes=(0,c.Dm)(j,v),q){if(q.startTimeField){const e=this._fieldsIndex.get(q.startTimeField);e?(q.startTimeField=e.name,e.type="esriFieldTypeDate"):q.startTimeField=null}if(q.endTimeField){const e=this._fieldsIndex.get(q.endTimeField);e?(q.endTimeField=e.name,e.type="esriFieldTypeDate"):q.endTimeField=null}if(q.trackIdField){const e=this._fieldsIndex.get(q.trackIdField);e?q.trackIdField=e.name:(q.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:q}}))}q.startTimeField||q.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:q}}),q=null)}const w={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,c.bU)(E),templates:(0,c.Hq)(j),extent:_,geometryType:E,objectIdField:v,fields:r,hasZ:!!o,hasM:!!a,timeInfo:q},assignedObjectIds:{}};if(this._queryEngine=new p.q({fields:r,geometryType:E,hasM:a,hasZ:o,objectIdField:v,spatialReference:F,featureStore:new l.Z({geometryType:E,hasM:a,hasZ:o}),timeInfo:q,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=u.X,w;const x=(0,u.S)(v,i);return this._nextObjectId=x+1,await(0,d._W)(i,F),this._loadInitialFeatures(w,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,y.b)(t,i),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,a=null,o=null,u=null;for(const l of e){const e=l.geometry;if(!(0,n.Wi)(e)&&(a||(a=(0,r.Ji)(e)),o||(o=e.spatialReference),null==i&&(i=F(e)),null==s&&(s=_(e)),a&&o&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(u=e.name)}return{geometryType:a,spatialReference:o,objectIdField:u,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:a,objectIdField:u,spatialReference:l,featureStore:p}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&i!==(0,r.Ji)(o.geometry)){e.featureErrors.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,y.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[u]),(0,n.pC)(o.geometry)&&(o.geometry=(0,d.iV)(o.geometry,o.geometry.spatialReference,l)),c.push(o))}if(p.addMany((0,o.Yn)([],c,i,a,s,u)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:a,hasZ:u,objectIdField:l,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&s!==(0,r.Ji)(o.geometry)){i.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.O0)(this._fieldsIndex,t,o.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[l];e.uidToObjectId[o.uid]=t}(0,n.pC)(o.geometry)&&(o.geometry=(0,d.iV)((0,y.og)(o.geometry,p),o.geometry.spatialReference,p)),f.push(o),i.push((0,y.d1)(o.attributes[l]))}}c.addMany((0,o.Yn)([],f,s,u,a,l))}_applyUpdateEdits(e,t){let{updateResults:i}=e;const{geometryType:s,hasM:a,hasZ:u,objectIdField:l,spatialReference:p,featureStore:c}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=e&&e[l];if(null==h){i.push((0,y.av)(`Identifier field ${l} missing`));continue}if(!c.has(h)){i.push((0,y.av)(`Feature with object id ${h} missing`));continue}const m=(0,o.EI)(c.getFeature(h),s,u,a);if((0,n.pC)(t)){if(s!==(0,r.Ji)(t)){i.push((0,y.av)("Incorrect geometry type."));continue}m.geometry=(0,d.iV)((0,y.og)(t,p),t.spatialReference,p)}if(e){const t=(0,y.O0)(this._fieldsIndex,m.attributes,e);if(t){i.push(t);continue}}c.add((0,o.XA)(m,s,u,a,l)),i.push((0,y.d1)(h))}}_assignObjectId(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},63543:(e,t,i)=>{i.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var s=i(93169),n=i(84652),r=i(60480),a=i(76115);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `)();return()=>new s}catch(i){return()=>({[t]:null,...e})}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:(e,t,i)=>{i.d(t,{O0:()=>c,av:()=>u,b:()=>m,d1:()=>d,og:()=>h});var s=i(92026),n=i(92975),r=i(37270);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new l(e)}const p=new Set;function c(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0;p.clear();for(const a in i){const o=e.get(a);if(!o)continue;const l=i[a],d=y(o,l);if(d!==l&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:d}}),p.add(o.name),o&&(s||o.editable)){const e=(0,r.Qc)(o,d);if(e)return u((0,r.vP)(e,o,d));t[o.name]=d}}for(const r of e.requiredFields)if(!p.has(r.name))return u(`missing required field "${r.name}"`);return null}function y(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let f;function h(e,t){if(!e||!(0,n.JY)(t))return e;if("rings"in e||"paths"in e){if((0,s.Wi)(f))throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(e,t){!(0,n.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,s.Wi)(f)&&(f=await i.e(309).then(i.bind(i,50309))),f}()}}}]);
//# sourceMappingURL=8782.e0586338.chunk.js.map